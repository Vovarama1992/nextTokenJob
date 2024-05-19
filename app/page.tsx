import styles from './page.module.scss';
import { SessionProvider } from "next-auth/react"

import Signer from './Signer';
import Form from './Form';


export default function Page({
  searchParams,
}: {
  searchParams?: {
    verdict?: boolean;
  }; 
}) {
  const question = searchParams?.verdict || false;
  return (
  
    
      <div className={styles.container}>
            
      <div className={styles.columnMenu}>
        
          <div className={styles.menu}>
          
        
          <Form  checkText="  Keep me signed in" question={question} typeOfPage="SignIn"/>
        
        </div>
        <Signer />
        
        </div>
        
      </div>
    
  
  )
}