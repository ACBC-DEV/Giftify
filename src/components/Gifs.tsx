import { getGifs } from "@utils/actions";
import { GifData } from "@/types";
import InfinityScroll from "./InfinityScroll";

interface GifState {
  data: GifData[];
  offset: number;
}
export default async function Gifs({ q }: { q: string }) {
  const { data } = await getGifs(q);
  return (
    <section key={Math.random()} className="rounded-lg">
      <InfinityScroll initialGifs={data} search={q} />
    </section>
  );
}
