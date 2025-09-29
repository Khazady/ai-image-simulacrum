import { createContext } from 'react'

export interface GenerationRecord {
  id: string
  prompt: string
  imageUrl: string
  createdAt: number
}

export interface GenerationContextValue {
  history: GenerationRecord[]
  activeGeneration: GenerationRecord | null
  isLoading: boolean
  error: string
  generateImage: (prompt: string) => Promise<boolean>
  selectGeneration: (id: string) => void
  removeGeneration: (id: string) => void
  clearError: () => void
}

export const GenerationContext = createContext<GenerationContextValue | undefined>(undefined)
