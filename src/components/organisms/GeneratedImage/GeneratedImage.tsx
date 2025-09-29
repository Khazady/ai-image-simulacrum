import { Card } from "@/components/atoms/Сard";
import { Spinner } from "@/components/molecules/Spinner";
import { useGenerator } from "@/context/useGenerator";
import { dictionary } from "@/lib/dictionary";
import styles from "./GeneratedImage.module.css";
import { formatTimestamp } from "@/lib/utils/formatTimestamp";

export const GeneratedImage = () => {
  const { activeGeneration, isLoading } = useGenerator();
  const generatedImageCopy = dictionary.generatedImage;

  const caption = activeGeneration
    ? `${formatTimestamp(activeGeneration.createdAt)} · ${activeGeneration.prompt}`
    : "";

  return (
    <Card variant="contrast" className={styles.card}>
      <section className={styles.wrapper}>
        <header className={styles.header}>
          <div>
            <h2 className={styles.title}>{generatedImageCopy.title}</h2>
            <p className={styles.subtitle}>
              {activeGeneration
                ? generatedImageCopy.subtitleReady
                : generatedImageCopy.subtitleEmpty}
            </p>
          </div>
        </header>
        <div className={styles.canvas}>
          {activeGeneration ? (
            <img
              key={activeGeneration.id}
              className={styles.image}
              src={activeGeneration.imageUrl}
              alt={generatedImageCopy.alt(activeGeneration.prompt)}
            />
          ) : (
            <div className={styles.placeholder}>
              <span className={styles.placeholderIcon}>
                {generatedImageCopy.placeholderIcon}
              </span>
              <p>{generatedImageCopy.placeholderCta}</p>
            </div>
          )}
          {isLoading && (
            <div className={styles.overlay}>
              <Spinner />
            </div>
          )}
        </div>
        {caption && <p className={styles.caption}>{caption}</p>}
      </section>
    </Card>
  );
};
