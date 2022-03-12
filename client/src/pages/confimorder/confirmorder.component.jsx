import styles from './confirmorder.module.css';

const GreenCheck = () => (
  <svg
    className={styles['checkmark']}
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 52 52'
  >
    <circle
      className={styles['checkmark__circle']}
      cx='26'
      cy='26'
      r='25'
      fill='none'
    />
    <path
      className={styles['checkmark__check']}
      fill='none'
      d='M14.1 27.2l7.1 7.2 16.7-16.8'
    />
  </svg>
);

export default function ConfirmOrder() {
  return (
    <>
      <GreenCheck />
      <div className={styles['order-complete-text']}>
        <h2 className={styles['order-complete-h2']}>Your order is complete!</h2>
        <p>You will be receiving a confirmation email with order details.</p>
      </div>
    </>
  );
}
