import { useMemo } from "react";
import styles from "./HistoryPanel.module.css";
import { formatTimestamp } from "@/lib/utils/formatTimestamp";
import { useGenerator } from "@/context/useGenerator";
import { Card } from "@/components/atoms/Сard";
import { HistoryItem } from "@/components/molecules/HistoryItem";
import { dictionary } from "@/lib/dictionary";

export const HistoryPanel = () => {
  const {
    history,
    activeGeneration,
    selectGeneration,
    removeGeneration,
    isLoading,
  } = useGenerator();
  const activeId = activeGeneration?.id ?? null;

  const items = useMemo(
    () =>
      history.map((entry) => ({
        id: entry.id,
        prompt: entry.prompt,
        timestamp: formatTimestamp(entry.createdAt),
        isActive: entry.id === activeId,
      })),
    [history, activeId],
  );

  const isEmpty = items.length === 0;
  const historyCopy = dictionary.historyPanel;

  return (
    <Card className={styles.card}>
      <aside className={styles.panel}>
        <header className={styles.header}>
          <h2 className={styles.title}>{historyCopy.title}</h2>
          <p className={styles.subtitle}>
            {isEmpty ? historyCopy.subtitleEmpty : historyCopy.subtitleDefault}
          </p>
        </header>
        <ul className={styles.list}>
          {items.map((item) => (
            <HistoryItem
              key={item.id}
              id={item.id}
              prompt={item.prompt}
              timestamp={item.timestamp}
              isActive={item.isActive}
              onSelect={selectGeneration}
              onRemove={removeGeneration}
              disableRemoval={isLoading}
            />
          ))}
        </ul>
      </aside>
    </Card>
  );
};
