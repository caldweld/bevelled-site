import * as React from 'react'
import clsx from 'clsx'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'solid' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
}

export function Button({ className, variant = 'solid', size = 'md', ...props }: ButtonProps) {
  const base = 'inline-flex items-center justify-center rounded-2xl transition font-medium focus:outline-none focus:ring-2 focus:ring-offset-2'
  const variants = {
    solid: 'bg-brand text-white hover:opacity-90 focus:ring-brand',
    ghost: 'bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-800 text-current',
    outline: 'border border-current bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-800'
  } as const
  const sizes = {
    sm: 'h-9 px-3 text-sm',
    md: 'h-11 px-5',
    lg: 'h-12 px-6 text-lg'
  } as const

  return (
    <button className={clsx(base, variants[variant], sizes[size], className)} {...props} />
  )
}
