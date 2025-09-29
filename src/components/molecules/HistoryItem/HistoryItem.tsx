import { IconButton } from "@/components/atoms/IconButton";
import styles from "./HistoryItem.module.css";

export interface HistoryItemProps {
  id: string;
  prompt: string;
  timestamp: string;
  isActive: boolean;
  onSelect: (id: string) => void;
  onRemove: (id: string) => void;
  disableRemoval?: boolean;
}

export const HistoryItem = ({
  id,
  prompt,
  timestamp,
  isActive,
  onSelect,
  onRemove,
  disableRemoval = false,
}: HistoryItemProps) => {
  const handleSelect = () => onSelect(id);
  const handleRemove = () => onRemove(id);

  return (
    <li className={isActive ? styles.active : styles.item}>
      <button
        type="button"
        className={styles.entryButton}
        onClick={handleSelect}
      >
        <span className={styles.prompt}>{prompt}</span>
        <span className={styles.meta}>{timestamp}</span>
      </button>
      <IconButton
        tone="danger"
        onClick={handleRemove}
        disabled={disableRemoval}
      >
        X
      </IconButton>
    </li>
  );
};
