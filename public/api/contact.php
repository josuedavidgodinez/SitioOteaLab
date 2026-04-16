<?php
/**
 * contact.php — Manejador del formulario de contacto de Otea Lab.
 * Ubicación en IONOS: /public_html/api/contact.php
 *
 * CONFIGURACIÓN REQUERIDA:
 * Ajusta las constantes MAIL_TO, MAIL_FROM y SMTP_* con los datos de tu cuenta IONOS.
 */

// ── Configuración ─────────────────────────────────────────────────────────────
const MAIL_TO      = 'josue@otealab.com';       // donde recibirás los mensajes
const MAIL_FROM    = 'noreply@otealab.com';      // remitente (debe ser de tu dominio en IONOS)
const MAIL_SUBJECT = '[Otea Lab] Nueva solicitud de cotización';
const ALLOWED_ORIGIN = 'https://otealab.com';    // cambia a tu dominio real

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

// ── Leer y validar ────────────────────────────────────────────────────────────
$raw  = file_get_contents('php://input');
$data = json_decode($raw, true);

$name        = trim($data['name']    ?? '');
$email       = trim($data['email']   ?? '');
$service     = trim($data['service'] ?? '');
$budget      = trim($data['budget']  ?? '');
$message     = trim($data['message'] ?? '');

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

// Sanitizar para evitar header injection
$name    = str_replace(["\r", "\n"], '', $name);
$email   = str_replace(["\r", "\n"], '', $email);
$service = str_replace(["\r", "\n"], '', $service);
$budget  = str_replace(["\r", "\n"], '', $budget);

// ── Construir el email ────────────────────────────────────────────────────────
$body = "Nueva solicitud de cotización recibida en otealab.com\n";
$body .= str_repeat('─', 50) . "\n\n";
$body .= "Nombre:   $name\n";
$body .= "Email:    $email\n";
$body .= "Servicio: " . ($service ?: '—') . "\n";
$body .= "Presupuesto: " . ($budget ?: '—') . "\n\n";
$body .= "Mensaje:\n$message\n";
$body .= "\n" . str_repeat('─', 50) . "\n";
$body .= "Enviado desde otealab.com\n";

$headers  = "From: Otea Lab <" . MAIL_FROM . ">\r\n";
$headers .= "Reply-To: $name <$email>\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";

// ── Enviar ────────────────────────────────────────────────────────────────────
$sent = mail(MAIL_TO, MAIL_SUBJECT, $body, $headers);

if ($sent) {
    echo json_encode(['ok' => true, 'message' => 'Mensaje enviado correctamente.']);
} else {
    http_response_code(500);
    echo json_encode(['ok' => false, 'message' => 'No se pudo enviar el mensaje. Por favor escríbeme directamente.']);
}
