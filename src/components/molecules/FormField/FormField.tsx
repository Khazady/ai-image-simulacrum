import type { ReactNode } from "react";
import styles from "./FormField.module.css";

export interface FormFieldProps {
  label: string;
  htmlFor: string;
  helper?: ReactNode;
  children: ReactNode;
}

export const FormField = ({
  label,
  htmlFor,
  helper,
  children,
}: FormFieldProps) => (
  <div className={styles.field}>
    <div className={styles.header}>
      <label className={styles.label} htmlFor={htmlFor}>
        {label}
      </label>
      {helper ? <span className={styles.helper}>{helper}</span> : null}
    </div>
    {children}
  </div>
);
