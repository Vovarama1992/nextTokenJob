import styles from './page.module.scss';

import { ButtonProps } from './lib/defs';
import Link from 'next/link';
export default function Button({ movename,  href, onClick, type } : ButtonProps) {
 
  return (
      <div className={styles.buttonBlock}>
          
            <button   type={type} className={styles.button}><Link href={href}>{movename}</Link>
            </button>
            
            
          </div>
  )
}