import styles from './page.module.scss';

import Link from 'next/link';
function Signer() {
    const text = "  Sign up";
    
    return (
        <div className={styles.signer}>
            
            Not a member?
             <Link href='menu/upMenu'>
                 <span className={styles.gold}>
                 
                 
                    {text}</span>
             </Link>
            
        </div>
    )
}


export default Signer;