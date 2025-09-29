import { forwardRef } from 'react'
import type { TextareaHTMLAttributes } from 'react'
import { cn } from '@/lib/utils/cn'
import styles from './TextArea.module.css'

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  hasError?: boolean
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, hasError = false, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(styles.textArea, hasError && styles.error, className)}
        {...props}
      />
    )
  },
)

TextArea.displayName = 'TextArea'
