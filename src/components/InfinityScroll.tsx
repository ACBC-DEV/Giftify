"use client";

import { GifData } from "@/types";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { getGifs } from "@/actions/actions";
import LoadingImage from "./LoadingImage";

export default function InfinityScroll({
  initialGifs,
  search,
}: {
  initialGifs: GifData[];
  search: string;
}) {
  const [gifs, setGifs] = useState(initialGifs);
  const [offset, setOffset] = useState(0);

  const { ref, inView } = useInView();

  const getMoreGifs = async () => {
    console.log("getMoreGifs");
    const next = offset + 25;
    const { data } = await getGifs(search, { offset: next });
    console.log(data.length);
    if (data.length === 0) return;
    setGifs((prev) => [...prev, ...data]);
    setOffset(next);
  };
  useEffect(() => {
    if (inView) {
      getMoreGifs();
    }
  }, [inView]);

  return (
    <>
      <ul className="flex flex-wrap justify-center items-center ">
        {gifs.map((gif) => (
          <LoadingImage
            key={gif.id}
            src={gif.images.original.webp || gif.images.original.url}
            alt={gif.title}
            width={250}
            height={250}
          />
        ))}
      </ul>

      {!search ?? <span ref={ref} className="loader my-10"></span>}
    </>
  );
}
