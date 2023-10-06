import crypto from 'crypto';
require('dotenv').config();

const SECRET = process.env["SECRET_KEY"];

// Создание рандомного ключа
export const random = () => crypto.randomBytes(128).toString('base64');
// Создание токена авторизации
export const authentication = (salt: string, password: string) => {
  return crypto.createHmac('sha256', [salt, password].join('/')).update(SECRET).digest('hex');
};
