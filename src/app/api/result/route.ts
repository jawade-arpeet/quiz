import { responses } from "@/app/db/db";
import { NextResponse } from "next/server";

function GET() {
  const filteredResponses = responses.filter(response => response.answer === response.response);
  return NextResponse.json({correct: filteredResponses.length, incorrect: responses.length - filteredResponses.length}, {status: 200});
}

export { GET };
