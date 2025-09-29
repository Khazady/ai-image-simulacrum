import { useState } from "react";
import { IconButton } from "@/components/atoms/IconButton";
import { cn } from "@/lib/utils/cn";
import { dictionary } from "@/lib/dictionary";
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
  const [isHovered, setIsHovered] = useState(false);
  const [isDeleteHovered, setIsDeleteHovered] = useState(false);

  const handleSelect = () => onSelect(id);
  const handleRemove = () => onRemove(id);

  return (
    <li
      className={cn(
        styles.item,
        isActive && styles.active,
        isHovered && !isDeleteHovered && styles.hover,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsDeleteHovered(false);
      }}
    >
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
        onMouseEnter={() => setIsDeleteHovered(true)}
        onMouseLeave={() => setIsDeleteHovered(false)}
      >
        {dictionary.historyItem.removeIcon}
      </IconButton>
    </li>
  );
};
