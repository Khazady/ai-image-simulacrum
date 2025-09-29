import { useState, type ChangeEvent, type FormEvent } from "react";
import styles from "./PromptForm.module.css";
import { useGenerator } from "@/context/useGenerator";
import { Card } from "@/components/atoms/Сard";
import { FormField } from "@/components/molecules/FormField";
import { TextArea } from "@/components/atoms/Textarea";
import { Button } from "@/components/atoms/Button";
import { dictionary } from "@/lib/dictionary";

export const PromptForm = () => {
  const [prompt, setPrompt] = useState("");
  const { generateImage, isLoading, error, clearError } = useGenerator();

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    if (error) clearError();

    setPrompt(event.target.value);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isSuccess = await generateImage(prompt);
    if (isSuccess) setPrompt("");
  };

  return (
    <Card variant="frosted">
      <form className={styles.form} onSubmit={handleSubmit}>
        <FormField
          label={dictionary.promptForm.field.label}
          htmlFor="prompt"
          helper={dictionary.promptForm.field.helper}
        >
          <TextArea
            id="prompt"
            name="prompt"
            placeholder={dictionary.promptForm.field.placeholder}
            value={prompt}
            onChange={handleChange}
            rows={4}
            disabled={isLoading}
            hasError={Boolean(error)}
          />
        </FormField>
        <div className={styles.actions}>
          <Button type="submit" disabled={isLoading}>
            {isLoading
              ? dictionary.promptForm.actions.loading
              : dictionary.promptForm.actions.submit}
          </Button>
          {error && <p className={styles.error}>{error}</p>}
        </div>
      </form>
    </Card>
  );
};
