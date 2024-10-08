import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const truncateText = (text: string, length = 15) => {
  if (text.length > length) {
    return `${text.substring(0, length)}...`;
  }
  return text;
};
