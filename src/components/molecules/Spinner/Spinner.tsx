import styles from "./Spinner.module.css";
import { dictionary } from "@/lib/dictionary";

export interface SpinnerProps {
  label?: string;
}

export const Spinner = ({
  label = dictionary.spinner.label,
}: SpinnerProps) => (
  <div className={styles.spinner}>
    <span className={styles.loader} />
    {label ? <span className={styles.label}>{label}</span> : null}
  </div>
);
