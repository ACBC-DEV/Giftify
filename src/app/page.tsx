import FormSearch from "@/components/FormSearch";
import Gifs from "@/components/Gifs";

export default function Home({
  searchParams,
}: {
  searchParams: { q: string };
}) {
  const searchQ = searchParams.q;

  return (
    <main className="grid place-content-center mt-16">
      <h1 className="mx-auto text-9xl">Gifty</h1>
      <div role="search">
        <FormSearch search={searchQ} />
      </div>
      <Gifs q={searchQ} />
    </main>
  );
}
