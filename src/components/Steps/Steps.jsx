import styles from "./Steps.module.css";

const Steps = ({}) => {
  const steps = [
    {
      id: 1,
      stepInfo: "YOUR INFO",
      active: 'active'
    },
    {
      id: 2,
      stepInfo: "SELECT PLAN",
    },
    {
      id: 3,
      stepInfo: "ADD-ONS",
    },
    {
      id: 4,
      stepInfo: "SUMMARY",
    },
  ];

  return (
    <section className={styles.stepSection}>
      <ul className={`${styles.steps} flex-vertical`}>
        {steps.map((step) => {
          return (
            <li className={`${styles.step} ${step.active ? styles.active : ''}`}>
              <p className={styles.number}>{step.id}</p>
              <div className={styles.stepInfo}>
                <p>STEP {step.id}</p>
                <p>{step.stepInfo}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Steps;
