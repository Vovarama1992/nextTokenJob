'use client';
import Link from 'next/link';

import styles from '../../page.module.scss';

export default function Page() {
    
     return (
        <><div style={{color: 'white', fontSize: '40px'}}>
    
  
            Секретный канал для авторизованных пользователей. Можно загружать картинки
            
        </div>
        <Link href='/'><button style={{color: 'blue', position: 'absolute', fontSize: '30px', top: '400px', left: '300px'}}>Назад</button> </Link></>
    )

}

