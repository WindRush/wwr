import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const truncateMiddle = (str: string, startChars = 3, endChars = 3, separator = '...') => {
  if (!str || str.length <= startChars + endChars) {
    return str;
  }
  const start = str.slice(0, startChars);
  const end = str.slice(-endChars);
  return `${start}${separator}${end}`;
};