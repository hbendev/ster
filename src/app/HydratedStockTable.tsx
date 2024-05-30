import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import getQueryClient from "@/getQueryClient";
import alpha from "@/alpha";
import StockTable from "./StockTable";

export default async function HydratedPosts({
  query,
}: {
  query: string | null;
}) {
  const queryClient = getQueryClient();
  if (query) {
    await queryClient.prefetchQuery({
      queryKey: ["stocks", query],
      queryFn: () => {
        return alpha.data.search(query!);
      },
    });
  }
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <StockTable query={query} />
    </HydrationBoundary>
  );
}
