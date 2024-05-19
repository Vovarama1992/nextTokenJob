'use server';

import { signUpAttempt, signInAttempt} from '../lib/data';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { SignupFormSchema, FormState } from '../lib/defs';

export async function addLogin(formData: FormData) {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    
    
    try {
        await signUpAttempt(email, password);
        
    } catch (error: any) {
        if (error.message === 'Пользователь с таким адресом электронной почты уже существует') {
            
            redirect('/menu/anothertry');
        } else if (error.message === "недостаточно сложный пароль") {
            redirect('/menu/invalidPassword');
        } else {
            // Отправляем ответ с другой ошибкой на клиент
            return { success: false, message: 'Произошла ошибка при регистрации. Пожалуйста, попробуйте снова.' };
        }
    }
    revalidatePath('/');
        redirect('/');
}

export async function checkLogin(formData: FormData) {
  let res;
    try {
      const email = formData.get('email') as string;
      const password = formData.get('password') as string;
     
      
     
      
      res = await signInAttempt(email, password);
      console.log('res: ' + res);
      
    } catch (error) {
      console.error('Error during login check:', error);
      // Optional: Add user-friendly error handling here
       // Redirect to a generic error page or handle the error appropriately
    }
    if (res) {
      redirect('/loggedIn');
    } else {
      redirect(`/?verdict=true`);
    }
  }
