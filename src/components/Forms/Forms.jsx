import styles from './Forms.module.css'
import Form from "./Form/Form.jsx"

const Forms = () => {
  return (
    <section className={`${styles.formsSection}`}>
      <header>Personal Info</header>
      <p className={styles.subHeader}>Please provide your name, email address, and phone number.</p>
      <Form />
      
    </section>
  )
}

export default Forms