import { forwardRef } from 'react'
import type { ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils/cn'
import styles from './IconButton.module.css'

type IconButtonTone = 'neutral' | 'danger'

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  tone?: IconButtonTone
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, tone = 'neutral', type = 'button', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(styles.iconButton, styles[tone], className)}
        type={type}
        {...props}
      />
    )
  },
)

IconButton.displayName = 'IconButton'
