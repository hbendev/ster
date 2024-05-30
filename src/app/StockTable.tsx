"use client";

import { RawStockSearch } from "@/types/alpha";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import React from "react";

type StockTableProps = {
  query?: string | null;
};

export default function StockTable({ query }: StockTableProps) {
  const { data, isFetching, isError, error } = useQuery<RawStockSearch>({
    queryKey: ["stocks", query],
    queryFn: async () => {
      const url = new URL("/api/search");
      url.searchParams.append("query", query!);
      const response = await fetch(url);
      return response.json();
    },
    enabled: !!query,
  });

  return (
    <section className="w-full overflow-x-auto">
      <table className="table table-zebra">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Currency</th>
            <th>Region</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {isError && !isFetching && (
            <tr>
              <td colSpan={5}>
                <p className="text-center text-error">
                  Error fetching: {error.message}
                  <br />
                  Please try searching again!
                </p>
              </td>
            </tr>
          )}
          {isFetching && (
            <tr>
              <td colSpan={5}>
                <span className="loading loading-spinner loading-lg mx-auto block"></span>
              </td>
            </tr>
          )}
          {data?.bestMatches?.map((stock) => {
            return (
              <Link
                key={stock["1. symbol"]}
                href={`/stock/${stock["1. symbol"]}`}
              >
                <tr>
                  <th></th>
                  <td>
                    {stock["2. name"]}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      {stock["1. symbol"]}
                    </span>
                  </td>
                  <td>{stock["8. currency"]}</td>
                  <td>{stock["4. region"]}</td>
                  <th></th>
                </tr>
              </Link>
            );
          })}
        </tbody>

        {!!data?.bestMatches?.length && (
          <tfoot>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Currency</th>
              <th>Region</th>
              <th></th>
            </tr>
          </tfoot>
        )}
      </table>
    </section>
  );
}
