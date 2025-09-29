import { useContext } from 'react'
import { GenerationContext, type GenerationContextValue } from './GenerationContext'

export const useGenerator = (): GenerationContextValue => {
  const context = useContext(GenerationContext)

  if (!context) {
    throw new Error('useGenerator must be used within a GenerationProvider')
  }

  return context
}
