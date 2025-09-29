import styles from "./Spinner.module.css";

export const Spinner = ({ label = "Generating image…" }) => (
  <div className={styles.spinner}>
    <span className={styles.loader} />
    {label ? <span className={styles.label}>{label}</span> : null}
  </div>
);
