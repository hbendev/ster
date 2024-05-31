import alpha from "@/alpha";
import { NextRequest, NextResponse } from "next/server";

// To never expose the API key to the client, we should use server actions
export async function GET(
  _request: NextRequest,
  { params }: { params: { symbol: string } },
) {
  const symbol = params.symbol;

  if (!symbol) {
    return NextResponse.json({ message: "No symbol" }, { status: 400 });
  }

  try {
    const data = await alpha.data.quote(symbol);

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        message:
          error ?? "An error occurred while communicating with alphavantage.",
      },
      { status: 500 },
    );
  }
}
