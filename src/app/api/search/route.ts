import alpha from "@/alpha";
import { NextRequest, NextResponse } from "next/server";

// To never expose the API key to the client, we should use server actions
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");

  if (!query) {
    return NextResponse.json({ message: "No query" }, { status: 400 });
  }

  const searchData = await alpha.data.search(query!);

  return NextResponse.json(searchData, { status: 200 });
}
