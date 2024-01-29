import styles from "./Form.module.css";

const Form = () => {
  const inputs = [
    {
      id: 1,
      formTitle: "Name",
      placeholder: "e.g Oyesola Dolapo",
    },
    {
      id: 2,
      formTitle: "Email Address",
      placeholder: "e.g oyesoladolapo@gmail.com",
    },
    {
      id: 3,
      formTitle: "Phone Number",
      placeholder: "e.g +234 906 721 9868",
    },
  ];
  return (
    <form className={`${styles.form} flex-vertical`}>
      {inputs.map((input) => {
        return (
          <li className={styles.inputs}>
            <p className={styles.formTitle}>{input.formTitle}</p>
            <input
              type="text"
              placeholder={input.placeholder}
              className={styles.formInput}
            />
          </li>
        );
      })}

      <button className={styles.button}>Next Step</button>
    </form>
  );
};

export default Form;
