import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

// Función utilitaria para mergear clases de Tailwind correctamente
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
