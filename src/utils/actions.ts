"use server";
import { ResponseData } from "@/types";
export async function getGifs(q: string, { offset = 0, limit = 24 } = {}) {
  //console.log(offset, limit);

  const rta = await fetch(
    `${process.env.NEXT_PUBLIC_URL}?q=${q}&offset=${offset}&limit=${limit}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  const data: ResponseData = await rta.json();

  return data;
}
