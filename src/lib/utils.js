import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function slugify(input) {
  return input.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

// MAP 
const APIKEY = process.env.MAP_APIKEY;
export function initPlatform(H) {
  console.log(APIKEY);
  const platform = new H.service.Platform({
    apikey: APIKEY,
  });
  return platform;
} 