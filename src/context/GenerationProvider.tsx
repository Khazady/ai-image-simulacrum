import { type PropsWithChildren, useEffect, useRef, useState } from "react";
import {
  GenerationContext,
  type GenerationContextValue,
  type GenerationRecord,
} from "./GenerationContext";
import {
  buildImageUrl,
  alreadyLoadingError,
  getPromptError,
  persistHistory,
  readHistoryFromStorage,
} from "./generation.helpers";
const GENERATION_DELAY = 2000;

const simulateGenerationRequest = (
  prompt: string,
  onComplete: (record: GenerationRecord) => void,
) => {
  return setTimeout(() => {
    const generation: GenerationRecord = {
      id: crypto.randomUUID(),
      prompt,
      imageUrl: buildImageUrl(),
      createdAt: Date.now(),
    };

    onComplete(generation);
  }, GENERATION_DELAY);
};

export const GenerationProvider = ({ children }: PropsWithChildren) => {
  const [history, setHistory] = useState<GenerationRecord[]>([]);
  const [activeGeneration, setActiveGeneration] =
    useState<GenerationRecord | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const stored = readHistoryFromStorage();
    if (stored.length > 0) {
      setHistory(stored);
      setActiveGeneration(stored[0]);
    }
  }, []);

  useEffect(() => {
    persistHistory(history);
  }, [history]);

  useEffect(
    () => () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
    },
    [],
  );

  const value: GenerationContextValue = {
    history,
    activeGeneration,
    isLoading,
    error,
    generateImage: async (rawPrompt) => {
      const prompt = rawPrompt.trim();
      const promptError = getPromptError(prompt);
      if (promptError) {
        setError(promptError);
        return false;
      }

      if (isLoading) {
        setError(alreadyLoadingError);
        return false;
      }

      setIsLoading(true);
      setError("");

      return new Promise((resolve) => {
        const handleComplete = (generation: GenerationRecord) => {
          setHistory((prev) => [generation, ...prev]);
          setActiveGeneration(generation);
          setIsLoading(false);
          timeoutRef.current = null;
          resolve(true);
        };

        timeoutRef.current = simulateGenerationRequest(prompt, handleComplete);
      });
    },
    selectGeneration: (id) => {
      setActiveGeneration((current) => {
        if (current && current.id === id) {
          return current;
        }

        return history.find((item) => item.id === id) ?? current;
      });
    },
    removeGeneration: (id) => {
      setHistory((prev) => {
        const nextHistory = prev.filter((item) => item.id !== id);

        setActiveGeneration((current) => {
          if (!current || current.id !== id) {
            return current;
          }

          return nextHistory[0] ?? null;
        });

        return nextHistory;
      });
    },
    clearError: () => {
      setError("");
    },
  };

  return (
    <GenerationContext.Provider value={value}>
      {children}
    </GenerationContext.Provider>
  );
};
