import { GeneratedImage } from "@/components/organisms/GeneratedImage";
import { HistoryPanel } from "@/components/organisms/HistoryPanel";
import { PromptForm } from "@/components/organisms/PromptForm";
import { dictionary } from "@/lib/dictionary";
import { Layout } from "./components/templates/Layout";

function App() {
  return (
    <Layout
      title={dictionary.app.hero.title}
      subtitle={dictionary.app.hero.subtitle}
      primary={[
        <PromptForm key="prompt" />,
        <GeneratedImage key="generated" />,
      ]}
      secondary={<HistoryPanel />}
    />
  );
}

export default App;
