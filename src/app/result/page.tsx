"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Button from "../component/ui/button";
import Link from "next/link";

interface Data {
  correct: number;
  incorrect: number;
}

function ResultPage() {
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/api/result").then((res) => res.data);
      setData({ correct: response.correct, incorrect: response.incorrect });
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col gap-y-2 p-4">
      <h1 className="text-xl font-semibold text-center">Results</h1>
      <div className="p-6 bg-green-200 border-2 border-green-600 rounded-md font-semibold">
        {data?.correct} Correct
      </div>
      <div className="p-6 bg-red-200 border-2 border-red-600 rounded-md font-semibold">
        {data?.incorrect} Incorrect
      </div>
      <Link href={"/quiz"} passHref={true} className="w-full">
        <Button className="w-full">Start Again</Button>
      </Link>
    </div>
  );
}

export default ResultPage;
