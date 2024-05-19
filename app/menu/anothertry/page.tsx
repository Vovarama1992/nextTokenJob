import styles from '../../page.module.scss';
import Form from '../../Form';
export default function Page() {
    return (
        <>
            <p className={styles.another}>Enter another email</p>
            <Form checkText={null} typeOfPage="SignUp"/>
        </>
    )

}