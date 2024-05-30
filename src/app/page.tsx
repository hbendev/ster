import StockInput from "./StockInput";
import { SearchParams } from "@/types/nextjs";
import HydratedPosts from "./HydratedStockTable";

export default function Home({ searchParams }: { searchParams: SearchParams }) {
  const query =
    searchParams.query && !Array.isArray(searchParams.query)
      ? searchParams.query
      : null;

  return (
    <main className="container mx-auto flex min-h-screen flex-col items-center gap-4 px-4 pb-20">
      <section className="mx-auto sm:w-full">
        <StockInput initialValue={query} />
      </section>

      <HydratedPosts query={query}></HydratedPosts>
    </main>
  );
}
