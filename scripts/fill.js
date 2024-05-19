'use server';
require('dotenv').config();
const { db } = require('@vercel/postgres');
export async function signInAttempt(client, email, password) {
  try {
    // Выполняем запрос к базе данных, чтобы проверить наличие комбинации email и пароля
    const result = await client.sql`
      SELECT COUNT(*) AS count
      FROM authusers
      WHERE email = ${email} AND password = ${password};
    `;
    
    // Если количество строк с данным email и паролем больше 0, значит комбинация существует
    const count = result.rows[0].count;
    console.log(`So, count is ${count}`);
    return count > 0;
  } catch (error) {
    console.error('Ошибка при проверке учетных данных:', error);
    throw error;
  }
}
signInAttempt("olovo@mail.com", "12345Timmy$");
  
  

