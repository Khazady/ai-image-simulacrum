export const dictionary = {
  app: {
    hero: {
      title: "AI Image Generator",
      subtitle:
        "Describe your vision and let the AI produce a unique image. Browse your recent prompts, revisit past creations, and curate the ones you love.",
    },
  },
  generatedImage: {
    title: "Latest Creation",
    subtitleReady: "Here is the most recent image from your prompt.",
    subtitleEmpty:
      "Generated images will appear here once you submit a prompt.",
    placeholderCta: "Craft a vivid prompt to watch the AI bring it to life.",
    placeholderIcon: "✨",
    alt: (prompt: string) => `Generated image for prompt: ${prompt}`,
  },
  generator: {
    errors: {
      emptyPrompt: "Enter a prompt to start generating an image.",
      promptTooShort: (minLength: number) =>
        `Prompt must be at least ${minLength} characters.`,
      alreadyLoading: "Please wait for the current image to finish generating.",
    },
  },
  promptForm: {
    field: {
      label: "Prompt",
      helper: "Describe what you want the AI to imagine.",
      placeholder: "A tranquil forest glade at sunrise with soft golden light",
    },
    actions: {
      submit: "Generate Image",
      loading: "Generating…",
    },
  },
  historyPanel: {
    title: "Generation History",
    subtitleEmpty: "You have not generated any images yet.",
    subtitleDefault:
      "Tap a prompt to revisit its creation or remove it from your collection.",
  },
  historyItem: {
    removeIcon: "X",
    removeLabel: "Remove prompt from history",
  },
  spinner: {
    label: "Generating image…",
  },
} as const;
