"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Button from "../component/ui/button";
import { Question } from "../types/question";
import { useRouter } from "next/navigation";

async function getQuestions() {
  const response = await axios.get("/api/quiz");
  return response.data;
}

function QuizPage() {
  const router = useRouter();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [response, setResponse] = useState<string | undefined>(undefined);

  useEffect(() => {
    getQuestions().then((data) => {
      setQuestions(data);
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent Form Submission
    try {
      await axios.post("/api/quiz/", {
        ...questions[currentQuestion],
        response,
      });
      setCurrentQuestion((prev) => prev + 1);
      setResponse(undefined); // Reset response after data is pushed to the backend
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  if (questions.length === 0) {
    return <div>Loading...</div>;
  }
  if (currentQuestion === questions.length - 1) {
    router.push("/result");
  }
  
  const question = questions[currentQuestion];

  return (
    <div>
      <form className="p-4" onSubmit={handleSubmit}>
        <h1 className="font-semibold text-2xl text-center">
          {question.question}
        </h1>
        <div className="flex flex-col gap-y-2">
          {question.options.map((option) => (
            <label
              key={option}
              className="flex items-center gap-x-4 p-4 bg-gray-200 rounded-md"
            >
              <input
                type="radio"
                name="answer"
                value={option}
                checked={response === option}
                onChange={() => setResponse(option)}
                required
              />
              <span className="font-medium">{option}</span>
            </label>
          ))}
        </div>
        <Button type="submit" className="w-full mt-4x">
          Next
        </Button>
      </form>
    </div>
  );
}

export default QuizPage;
