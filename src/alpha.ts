import alphavantage from "alphavantage";

let alphaClient: ReturnType<typeof alphavantage>;

function createAlphaClient() {
  if (alphaClient) {
    return alphaClient;
  }

  if (!process.env.ALPHAVANTAGE_API_KEY) {
    throw new Error("ALPHAVANTAGE_API_KEY is not set");
  }

  return (alphaClient = alphavantage({
    key: process.env.ALPHAVANTAGE_API_KEY,
  }));
}

export default alphaClient = createAlphaClient();
