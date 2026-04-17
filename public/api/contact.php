<?php
/**
 * contact.php — Manejador del formulario de contacto de Otea Lab.
 * Ubicación en IONOS: /public_html/api/contact.php
 *
 * Requiere PHPMailer (vendor/ debe estar un nivel arriba de public_html/).
 * Contraseña SMTP: variable de entorno SMTP_PASS (configúrala en Plesk).
 */

// ── Configuración ─────────────────────────────────────────────────────────────
const MAIL_TO        = 'admin@otealab.com';
const MAIL_FROM      = 'admin@otealab.com';
const MAIL_FROM_NAME = 'Otea Lab';
const MAIL_SUBJECT   = '[Otea Lab] Nueva solicitud de cotización';
const ALLOWED_ORIGIN = 'https://otealab.com';

const SMTP_HOST   = 'smtp.zoho.com';
const SMTP_PORT   = 465;
const SMTP_SECURE = 'ssl';
const SMTP_USER   = 'admin@otealab.com';

// Límites de longitud de campos
const MAX_NAME    = 100;
const MAX_EMAIL   = 254;
const MAX_SERVICE = 100;
const MAX_BUDGET  = 50;
const MAX_MESSAGE = 3000;

// Rate limiting: máx 5 envíos por IP cada 10 minutos
const RL_MAX     = 5;
const RL_WINDOW  = 600;

// ── CORS ─────────────────────────────────────────────────────────────────────
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: ' . ALLOWED_ORIGIN);
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'message' => 'Method not allowed']);
    exit;
}

// ── Rate limiting ─────────────────────────────────────────────────────────────
$ip   = $_SERVER['REMOTE_ADDR'] ?? '0.0.0.0';
$file = sys_get_temp_dir() . '/otealab_rl_' . md5($ip) . '.json';
$now  = time();
$rl   = ['count' => 0, 'reset' => $now + RL_WINDOW];

if (file_exists($file)) {
    $stored = json_decode(file_get_contents($file), true);
    if ($stored && $now < $stored['reset']) {
        $rl = $stored;
    }
}
$rl['count']++;
file_put_contents($file, json_encode($rl), LOCK_EX);

if ($rl['count'] > RL_MAX) {
    http_response_code(429);
    echo json_encode(['ok' => false, 'message' => 'Demasiadas solicitudes. Intenta de nuevo en unos minutos.']);
    exit;
}

// ── Leer payload ─────────────────────────────────────────────────────────────
$raw  = file_get_contents('php://input');
$data = json_decode($raw, true);

// Honeypot: los bots llenan este campo, los humanos no
$honeypot = $data['website'] ?? '';
if ($honeypot !== '') {
    echo json_encode(['ok' => true, 'message' => 'Mensaje enviado correctamente.']);
    exit;
}

$name    = trim($data['name']    ?? '');
$email   = trim($data['email']   ?? '');
$service = trim($data['service'] ?? '');
$budget  = trim($data['budget']  ?? '');
$message = trim($data['message'] ?? '');

// ── Validación ────────────────────────────────────────────────────────────────
if (!$name || !$email || !$message) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'message' => 'Faltan campos requeridos.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'message' => 'Email inválido.']);
    exit;
}

if (mb_strlen($name)    > MAX_NAME    ||
    mb_strlen($email)   > MAX_EMAIL   ||
    mb_strlen($service) > MAX_SERVICE ||
    mb_strlen($budget)  > MAX_BUDGET  ||
    mb_strlen($message) > MAX_MESSAGE) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'message' => 'Uno o más campos exceden la longitud permitida.']);
    exit;
}

// Sanitizar para evitar header injection
$name    = str_replace(["\r", "\n"], '', $name);
$email   = str_replace(["\r", "\n"], '', $email);
$service = str_replace(["\r", "\n"], '', $service);
$budget  = str_replace(["\r", "\n"], '', $budget);

// ── Credencial SMTP ───────────────────────────────────────────────────────────
$smtpPass = getenv('SMTP_PASS');

// Fallback: leer .env local solo en desarrollo (el archivo NO debe subirse al servidor)
if (!$smtpPass) {
    $envFile = __DIR__ . '/../../.env';
    if (file_exists($envFile)) {
        foreach (file($envFile, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES) as $line) {
            if (str_starts_with(trim($line), 'SMTP_PASS=')) {
                $smtpPass = trim(substr($line, strpos($line, '=') + 1));
                break;
            }
        }
    }
}

if (!$smtpPass) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'message' => 'Error de configuración del servidor.']);
    exit;
}

// ── PHPMailer ─────────────────────────────────────────────────────────────────
require __DIR__ . '/../../vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host       = SMTP_HOST;
    $mail->SMTPAuth   = true;
    $mail->Username   = SMTP_USER;
    $mail->Password   = $smtpPass;
    $mail->SMTPSecure = SMTP_SECURE;
    $mail->Port       = SMTP_PORT;
    $mail->CharSet    = 'UTF-8';

    $mail->setFrom(MAIL_FROM, MAIL_FROM_NAME);
    $mail->addAddress(MAIL_TO);
    $mail->addReplyTo($email, $name);

    $mail->Subject = MAIL_SUBJECT;
    $mail->Body    =
        "Nueva solicitud de cotización recibida en otealab.com\n" .
        str_repeat('─', 50) . "\n\n" .
        "Nombre:      $name\n" .
        "Email:       $email\n" .
        "Servicio:    " . ($service ?: '—') . "\n" .
        "Presupuesto: " . ($budget  ?: '—') . "\n\n" .
        "Mensaje:\n$message\n\n" .
        str_repeat('─', 50) . "\n" .
        "Enviado desde otealab.com\n";

    $mail->send();
    echo json_encode(['ok' => true, 'message' => 'Mensaje enviado correctamente.']);

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'message' => 'No se pudo enviar el mensaje. Por favor escríbeme directamente.']);
}
