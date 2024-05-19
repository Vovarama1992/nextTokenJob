import styles from '../../page.module.scss';

import Signer from '../../Signer';
import Form from '../../Form';


export default function Page() {
  return (
  
    
    
    <div className={styles.container}>
            
    <div className={styles.columnMenu}>
      <p>Неверный адрес эл. почты или пароль</p>
        <div className={styles.menu}>
      <Form checkText="  Keep me signed in" typeOfPage="SignIn"/>
      </div>
      <Signer />
      
      </div>
      
    </div>
      
    
  
  )
}