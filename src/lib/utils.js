import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function slugify(input) {
  return input.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}