import styles from '../page.module.scss';

import Link from 'next/link';
export default function Welcome() {
    return (
        
            
                
                    <div className={styles.welcome}>
                           Welcome, Volodya!<br></br>
                           <Link href='/'>Go back</Link>
                    </div>
                
           
        
    )
}