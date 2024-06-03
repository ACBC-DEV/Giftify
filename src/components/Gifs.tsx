import { getGifs } from "@/actions/actions";
import type { GifData } from "@/types";
import InfinityScroll from "./InfinityScroll";

interface GifState {
	data: GifData[];
	offset: number;
}
export default async function Gifs({ q }: { q: string }) {
	const { data } = await getGifs(q);
	return (
		<section key={Math.random()} className="rounded-lg">
			<InfinityScroll initialGifs={q ? data : []} search={q} />
		</section>
	);
}
