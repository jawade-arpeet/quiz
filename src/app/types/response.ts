import { Question } from "./question";

interface Response extends Question {
  response: string;
}

export type { Response };
