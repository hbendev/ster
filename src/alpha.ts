import alphavantage from "alphavantage";

let alpha = global as typeof global & {
  client: ReturnType<typeof alphavantage>;
};

function createAlphaClient() {
  if (alpha.client) {
    return alpha.client;
  }

  if (!process.env.ALPHAVANTAGE_API_KEY) {
    throw new Error("ALPHAVANTAGE_API_KEY is not set");
  }

  return (alpha.client = alphavantage({
    key: process.env.ALPHAVANTAGE_API_KEY,
  }));
}

createAlphaClient();

export default alpha.client;
