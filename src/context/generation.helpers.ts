import { dictionary } from "../lib/dictionary";
import { type GenerationRecord } from "./GenerationContext";

const STORAGE_KEY = "ai-image-generator-history";
const generatorErrors = dictionary.generator.errors;
const MIN_PROMPT_LENGTH = 5;

export const alreadyLoadingError = generatorErrors.alreadyLoading;

export const getPromptError = (prompt: string): string | null => {
  if (!prompt) {
    return generatorErrors.emptyPrompt;
  }

  if (prompt.length < MIN_PROMPT_LENGTH) {
    return generatorErrors.promptTooShort(MIN_PROMPT_LENGTH);
  }

  return null;
};

export const buildImageUrl = () => {
  const seed = crypto.randomUUID();
  return `https://picsum.photos/seed/${encodeURIComponent(seed)}/640/640`;
};

export const readHistoryFromStorage = (): GenerationRecord[] => {
  const stored = window.localStorage.getItem(STORAGE_KEY);

  if (!stored) {
    return [];
  }

  return JSON.parse(stored) as GenerationRecord[];
};

export const persistHistory = (history: GenerationRecord[]) => {
  if (history.length === 0) {
    window.localStorage.removeItem(STORAGE_KEY);
    return;
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
};
