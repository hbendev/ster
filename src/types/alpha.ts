import alpha from "@/alpha";

/** package should be patched so it exports this type */
export type RawStockSearch = Awaited<ReturnType<typeof alpha.data.search>>;
