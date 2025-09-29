import styles from "./Spinner.module.css";

export interface SpinnerProps {
  label?: string;
}

export const Spinner = ({ label = "Generating image…" }: SpinnerProps) => (
  <div className={styles.spinner}>
    <span className={styles.loader} />
    {label ? <span className={styles.label}>{label}</span> : null}
  </div>
);
