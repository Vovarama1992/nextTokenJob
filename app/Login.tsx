import styles from './page.module.scss';

import { ChangeEvent } from 'react';
import {  InputProps, LoginProps } from './lib/defs';

export default function Login({setter, login}: LoginProps) {
    const [email, password] = login;
    function onInput(e: ChangeEvent<HTMLInputElement>) {
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
        setter(newLogin);
    }
    
    return (
        <div  className={styles.login}>
            
                <Input  index={0} onInput={onInput} value={email} type={'email'}/>
                <Input  index={1} onInput={onInput} value={password} type={'password'}/>
            
            
        </div>
    )
}

function Input({ type, index, value, onInput }: InputProps) {
    return (
        <div className={styles.inputWrapper}>
            <label htmlFor={`${index}`}></label>
            <input type={type} onChange={onInput} name={type} id={`${index}`} value={value} placeholder={type} className={styles.inputInput}></input>
        </div>
    );
}