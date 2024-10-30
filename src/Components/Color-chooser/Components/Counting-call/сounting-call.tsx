import styles from "./counting-call.module.scss";
export const CountingCall = () => {
  return (
    <div className={styles.counting_call_wrapper}>
      <div className={styles.counting_call_buttons}>
        <button className={styles.counting_call_button_calculate}>
          Рассчитать стоимость
        </button>
      </div>
    </div>
  );
};
