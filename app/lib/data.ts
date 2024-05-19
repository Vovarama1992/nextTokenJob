import { sql } from '@vercel/postgres';
import { authUsers } from '../lib/defs';


export async function signUpAttempt(email: string, password: string) {
  

  try {
    await sql<authUsers>`
      INSERT INTO authusers (email, password)
      VALUES (${email}, ${password});
    `;
    console.log('Данные успешно вставлены в таблицу authUsers');
  } catch (error: any) {
    if (error.code === '23505') {
      console.error(`Пользователь с таким адресом ${email} уже существует`);
      throw new Error('Пользователь с таким адресом электронной почты уже существует'); // Выбрасываем исключение
    } else {
      console.error('Ошибка при вставке данных в таблицу authUsers:', error);
      throw error; // Другие ошибки
    }
  }
}

export async function signInAttempt(email: string, password: string) {
  

 

  

  try {
    // Выполняем запрос к базе данных, чтобы проверить наличие комбинации email и пароля
    const result = await sql`
      SELECT COUNT(*) AS count
      FROM authusers
      WHERE email = ${email} AND password = ${password};
    `;

    // Если количество строк с данным email и паролем больше 0, значит комбинация существует
    const count = result.rows[0].count;
    console.log('count: ' + count);
    return count > 0;
  } catch (error) {
    console.error('Ошибка при проверке учетных данных:', error);
    throw error;
  }
}

function validatePass(password: string) {
  const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return regex.test(password);
}





