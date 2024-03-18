"use client";
import Image from "next/image";
import { GifData } from "@/types";
import { Suspense, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { getGifs } from "@/utils/actions";

export default function InfinityScroll({
  initialGifs,
  search,
}: {
  initialGifs: GifData[];
  search: string;
}) {
  const [gifs, setGifs] = useState(initialGifs);
  const [offset, setOffset] = useState(0);
  // const [searchTerm, setSearchTerm] = useState(search);
  const { ref, inView } = useInView();

  // useEffect(() => {
  //   if (search !== searchTerm) {
  //     setGifs([]);
  //     setOffset(0);
  //     setSearchTerm(search);
  //   }
  // }, [search, searchTerm]);
  const getMoreGifs = async () => {
    const next = offset + 25;
    const { data } = await getGifs(search, { offset: next });
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
          <Suspense
            key={`${gif.id}-${gif.slug}`}
            fallback={
              <div className="w-40 h-40 md:w-80 md:h-80 object-cover bg-[#333] animate-pulse}"></div>
            }
          >
            <picture>
              <Image
                className={`size-40 md:size-60 lg:size-80 object-cover  `}
                src={gif.images.original.webp || ""}
                unoptimized
                width={300}
                height={300}
                alt={gif.title}
              />
            </picture>
          </Suspense>
        ))}
      </ul>
      <span ref={ref} className="loader my-10"></span>
    </>
  );
}
