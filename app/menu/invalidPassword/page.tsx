
import styles from '../../page.module.scss';
import Form from '../../Form';
export default function Page() {
    return (
        <>
        <p>Недостаточно сложный пароль</p>
        <Form checkText={null} typeOfPage="SignUp"/>
        </>
    )

}
