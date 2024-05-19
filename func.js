const { db } = require('@vercel/postgres');
require('dotenv').config();

async function signInAttempt(client, email, password) {
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


async function main() {
    const client = await db.connect();
  
    await signInAttempt(client, "olovo@mail.com", "1235Timmy$");
    
  
    await client.end();
  }

  main().catch((err) => {
    console.error('An error occurred while tryin login:', err);
  });



