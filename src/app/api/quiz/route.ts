import { questions, responses } from "@/app/db/db";
import { NextRequest, NextResponse } from "next/server";

function GET() {
  return NextResponse.json(questions, { status: 200 });
}

async function POST(req: NextRequest) {
  const data = await req.json();
  responses.push(data);
  return NextResponse.json(
    { success: true, message: "Data saved" },
    { status: 201 }
  );
}

export { GET, POST };
