"use server";
import type { ResponseData } from "@/types";
export async function getGifs(q: string, { offset = 0, limit = 24 } = {}) {

  const rta = await fetch(
    `https://api.giphy.com/v1/gifs/search?q=${q}&offset=${offset}&limit=${limit}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  const data: ResponseData = await rta.json();

  return data;
}
