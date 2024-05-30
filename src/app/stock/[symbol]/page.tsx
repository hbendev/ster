import TickerData from "./TickerData";

export default function StockPage({ params }: { params: { symbol: string } }) {
  return (
    <main className="container mx-auto flex min-h-screen flex-col items-center gap-4 px-4 pb-20">
      <TickerData symbol={params.symbol}></TickerData>
    </main>
  );
}
