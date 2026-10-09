-- Migración: convierte las contraseñas guardadas en texto plano a hash bcrypt.
CREATE EXTENSION IF NOT EXISTS pgcrypto;

UPDATE usuarios
SET contrasena_hash = crypt(contrasena_hash, gen_salt('bf', 10))
WHERE contrasena_hash NOT LIKE '$2%';

SELECT id, nombre_usuario, left(contrasena_hash, 7) AS inicio_hash FROM usuarios;