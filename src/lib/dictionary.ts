export const dictionary = {
  generatedImage: {
    title: 'Latest Creation',
    subtitleReady: 'Here is the most recent image from your prompt.',
    subtitleEmpty: 'Generated images will appear here once you submit a prompt.',
    placeholderCta: 'Craft a vivid prompt to watch the AI bring it to life.',
    placeholderIcon: '✨',
    alt: (prompt: string) => `Generated image for prompt: ${prompt}`,
  },
} as const
