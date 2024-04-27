import styles from './page.module.scss';
import Link from 'next/link';
function Signer() {
    return (
        <div className={styles.signer}>
            <Link href="/welcome">Not a member? Sign up.</Link>
        </div>
    )
}


export default Signer;