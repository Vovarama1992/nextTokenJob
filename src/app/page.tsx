import styles from './page.module.scss';

import Menu from './Menu';
import Signer from './Signer';


export default function Page() {
  return (
  
    
      <div className={styles.container}>
      
        <div className={styles.columnMenu}>
        <Menu />
        <Signer />
        </div>
      </div>
    
  
  )
}