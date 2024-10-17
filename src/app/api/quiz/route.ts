import { NextResponse } from "next/server";

const questions = [
  {
    id: 1,
    question: "What is the capital of India?",
    options: ["Delhi", "London", "Berlin", "Rome"],
    answer: "Paris",
  },
  {
    id: 2,
    question: "What is the capital of Germany?",
    options: ["Berlin", "London", "Paris", "Rome"],
    answer: "Berlin",
  },
  {
    id: 3,
    question: "What is the capital of Italy?",
    options: ["Rome", "London", "Paris", "Berlin"],
    answer: "Rome",
  },
  {
    id: 4,
    question: "What is the capital of Spain?",
    options: ["Madrid", "London", "Paris", "Berlin"],
    answer: "Madrid",
  },
  {
    id: 5,
    question: "What is the capital of Sweden?",
    options: ["Stockholm", "London", "Paris", "Berlin"],
    answer: "Stockholm",
  },
];

function GET() {
  return NextResponse.json(questions);
}

export { GET };
