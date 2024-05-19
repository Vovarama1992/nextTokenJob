import { ChangeEvent } from 'react';
import { MouseEvent } from 'react';
import { z } from 'zod';

export const SignupFormSchema = z.object({
    name: z
      .string()
      .min(2, { message: 'Name must be at least 2 characters long.' })
      .trim(),
    email: z.string().email({ message: 'Please enter a valid email.' }).trim(),
    password: z
      .string()
      .min(8, { message: 'Be at least 8 characters long' })
      .regex(/[a-zA-Z]/, { message: 'Contain at least one letter.' })
      .regex(/[0-9]/, { message: 'Contain at least one number.' })
      .regex(/[^a-zA-Z0-9]/, {
        message: 'Contain at least one special character.',
      })
      .trim(),
  })
   
  export type FormState =
  { errors: { name?: string[] | undefined; email?: string[] | undefined; password?: string[] | undefined; }; } | undefined

export type authUsers = {
    id?: string,
    email: string,
    password: string,
}

export type RouteClickHandler = (event: MouseEvent<HTMLButtonElement>, href: string) => void;

export type InputEventTarget = EventTarget & { value: string, id: string };
export type InputProps = {
    type: string;
    index: number;
    value: string;
    onInput: onInputChange;
}
export type onInputChange = (e: ChangeEvent<HTMLInputElement>) => void;
export type LoginProps = {
    setter: (newValue: string[]) => void;
    
    
    login: string[];
};
export type Props = {movename: string;
     href: string;
     onClick?: (...args: any[]) => any;
     type: "submit" | "button" | "reset" | undefined;
     email?: string;
     password?: string;
     login: string[];
     checkText: string;
     setLogin: (newValue: string[]) => void
     
     
     }
export type ButtonProps = Omit<Props, 'login' | 'checkText' | 'setLogin'>;
export type FormProps = {
    checkText: "  Keep me signed in" | null;
    typeOfPage: "SignIn" | "SignUp";
    question?: boolean;

}
     
