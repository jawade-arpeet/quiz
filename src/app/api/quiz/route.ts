import { prisma } from "@/app/db/prisma";
import { NextRequest, NextResponse } from "next/server";

async function GET() {
  try {
    const questions = await prisma.question.findMany();
    return NextResponse.json(questions);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ success: false, error }, { status: 400 });
  }
}

async function POST(req: NextRequest) {
  try {
    const { id, response } = await req.json();
    await prisma.response.create({
      data: { questionId: id, response: response },
    });
    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ success: false, error }, { status: 400 });
  }
}

export { GET, POST };
