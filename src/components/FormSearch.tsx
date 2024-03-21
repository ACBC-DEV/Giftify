"use client";
import { useDebounce } from "use-debounce";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";

export default function FormSearch({ search }: { search: string }) {
  const router = useRouter();
  const [text, setText] = useState(search);
  const [query] = useDebounce(text, 1000);

  useEffect(() => {
    if (query) {
      router.push(`/?q=${query}`);
    }
  }, [query, router]);

  return (
    <div className="grid place-content-center my-12">
      <Input
        type="text"
        value={text}
        onChange={(e) => {
          e.preventDefault();
          setText(e.target.value);
          //setSearch(search);
        }}
        className="bg-transparent border-4 border-white rounded-3xl focus-visible:ring-0 focus:outline-none focus:ring-offset-transparent px-4 py-6 h-12 w-80 text-lg  hover:bg-white hover:text-black  duration-300 ease-in-out"
      />
    </div>
  );
}
