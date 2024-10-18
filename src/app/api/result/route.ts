import { prisma } from "@/app/db/prisma";
import { NextResponse } from "next/server";

async function GET() {
  const responses = await prisma.response.findMany({
    select: {
      questionId: true,
      response: true,
      question: {
        select: {
          answer: true,
        },
      },
    },
  });

  const correct = responses.filter(
    (response) => response.response === response.question.answer
  ).length;
  const incorrect = responses.length - correct;
  return NextResponse.json({ correct, incorrect });
}

export { GET };
