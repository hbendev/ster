import { RawStockQuote } from "@/types/alpha";
import mergeClasses from "@/util/mergeClasses";
import { useQuery } from "@tanstack/react-query";
import React from "react";

type TickerDataProps = { symbol: string };
export default function TickerData({ symbol }: TickerDataProps) {
  // const { data, isFetching, isError, error } = useQuery<{
  //   "Global Quote": Partial<RawStockQuote["Global Quote"]>;
  // }>({
  //   queryKey: ["stock", symbol],
  //   queryFn: async () => {
  //     const url = new URL(`/stock/${symbol}`);
  //     // const response = await fetch(url);
  //     return Promise.resolve({ "Global Quote": { "01. symbol": "AAPL" } });
  //   },
  // });

  const data: { ["Global Quote"]: Partial<RawStockQuote["Global Quote"]> } = {
    "Global Quote": {
      "01. symbol": "IBM",
      "02. open": "165.5600",
      "03. high": "166.7300",
      "04. low": "164.2300",
      "05. price": "165.6300",
      "06. volume": "3760037",
      "07. latest trading day": "2024-05-30",
      "08. previous close": "167.0500",
      "09. change": "-1.4200",
      "10. change percent": "-0.8500%",
    },
  };
  return (
    <section className="mt-8 w-full">
      {/* {isFetching && (
        <span className="loading loading-spinner loading-lg mx-auto block"></span>
      )} */}

      {data?.["Global Quote"] && (
        <>
          <h2 className="text-center text-xl">
            {data?.["Global Quote"]["01. symbol"]}
            <span
              className={mergeClasses(
                "badge ml-2",
                Number(data?.["Global Quote"]["09. change"]) > 0
                  ? "badge-success"
                  : "badge-error",
              )}
            >
              {data["Global Quote"]["10. change percent"]}
            </span>
          </h2>
          <div>
            <h3>Data:</h3>
            <div className="mx-auto grid max-w-prose grid-cols-2 justify-center gap-2 overflow-x-auto text-lg">
              <div className="flex items-center justify-center">
                Low: {data["Global Quote"]["04. low"]}
              </div>
              <div className="flex items-center justify-center">
                High: {data["Global Quote"]["03. high"]}
              </div>
              <div className="flex items-center justify-center">
                Price: {data["Global Quote"]["05. price"]}
              </div>
              <div className="flex items-center justify-center">
                Volume: {data["Global Quote"]["06. volume"]}
              </div>
              <div className="flex items-center justify-center">
                Latest trading day:{" "}
                {data["Global Quote"]["07. latest trading day"]}
              </div>
              <div className="flex items-center justify-center">
                Previous close: {data["Global Quote"]["08. previous close"]}
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
