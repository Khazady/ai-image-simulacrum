import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";
import styles from "./Card.module.css";

type CardVariant = "surface" | "frosted" | "contrast";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
}

export const Card = ({
  className,
  variant = "surface",
  ...props
}: CardProps) => {
  return (
    <div className={cn(styles.card, styles[variant], className)} {...props} />
  );
};
