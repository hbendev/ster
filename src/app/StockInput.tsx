"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useCallback, useState } from "react";

export default function StockInput({
  initialValue,
}: {
  initialValue?: string | null;
}) {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(initialValue ?? "");

  /** Ideally would be generalized, and reused as a custom hook */
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams],
  );
  return (
    <form
      className=""
      onSubmit={(e) => {
        e.preventDefault();
        if (!query) {
          return router.push(pathName);
        }
        router.push(pathName + "?" + createQueryString("query", query));
      }}
    >
      <label htmlFor="search" className="label">
        Symbol
      </label>
      <input
        type="text"
        placeholder="Stock name or symbol"
        className="input input-bordered mx-auto w-full max-w-xs sm:max-w-lg"
        name="search"
        value={query}
        // Ideally would prefetch the query using a debounced call to the server action for a faster experience
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}
