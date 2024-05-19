'use client';
import Button from './Button';


import { signUpAttempt, signInAttempt } from './lib/data';
import { useState, useEffect, ChangeEvent} from 'react';
import { useActionState } from 'react';
import Link from 'next/link';
import styles from './page.module.scss';
import { addLogin, checkLogin } from './lib/actions';
import { FormProps } from './lib/defs';
import {  InputProps, LoginProps } from './lib/defs';
export default function Form({ checkText, typeOfPage, question } : FormProps) {
    
    const [show, setShow] = useState(false);
    const [login, setLogin] = useState(['', '']);
    const [check, setCheck] = useState(false);
  const [email, password] = login;
  function shower() {
    setTimeout(() => {
        setShow(false)
  }, 1000);
  }
  function onInput(e: ChangeEvent<HTMLInputElement>) {
    setShow(true);
    const target  = e.target as HTMLInputElement;
    const value = target.value;
    const str = target.id;
    const id = str.substring(str.indexOf(' ') + 1);
    const newLogin = login.map((log, i) => {
        if (id === String(i)) {
            return value;
        } else {
            return log;
        }
    });
    
    setLogin(newLogin);
}
const submitFunc = typeOfPage == "SignUp" ? addLogin : checkLogin;
  
  
    return (
       
            <div className={styles.backUp}>
                {question && !show && <p className={styles.wrongLog}>неверный адрес или пароль</p>}
                <div>
                    <form action={submitFunc} >
                    <div  className={styles.login}>
            
            
            <div className={styles.inputWrapper}>
            <label htmlFor='email'></label>
            <input type='email' onChange={onInput} name='email' id='0' value={email} placeholder='email' className={styles.inputInput}></input>
        </div>
        
            <div className={styles.inputWrapper}>
            <label htmlFor='password'></label>
            <input type='password' onChange={onInput} name='password' id='1' value={password} placeholder='password' className={styles.inputInput}></input>
        </div>
       
        
        
    </div>
                        
                      {checkText && <label>
                          <input type="checkbox" checked={check}  name='checkbox' onChange={() => setCheck(!check)} className={styles.hidden} />
                          {checkText}
                    
                    
                    </label>}
                      <div className={styles.buttonWrapper}>
                        {typeOfPage == "SignIn" ?
                        
                         <div className={styles.buttonBlock}>
          
                         <button   type='submit' onClick={shower}  className={styles.button}>Sign in
                         </button>
                         
                         
                       </div>
                         :
                        <>
                        <Button type={undefined} href='/' movename="Back"/>
                        
                        <div className={styles.buttonBlock}>
          
            <button   type='submit'  className={styles.button}>Sign Up
            </button>
            
            
          </div>
                        </>}
                        </div>
                        </form>
                </div>
                <Link href='/menu/loggedIn'>
                    
                        <div className={styles.secretInfo}>Secret</div>
                    
                </Link>
            </div>
        
    )
}





