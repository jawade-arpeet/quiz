import Image from "next/image";
import Link from "next/link";
import Button from "./components/ui/button";

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-between h-screen p-6 bg-gradient-to-t from-purple-400 to-white">
      <Image
        src="/upraised-logo.svg"
        alt="Upraised Logo"
        width={150}
        height={150}
      />
      <div className="size-40 shadow-xl flex flex-col items-center justify-center rounded-full bg-white">
        <span className="font-semibold text-3xl p-6 ">Quiz</span>
      </div>
      <Link href={"/quiz"} passHref={true} className="w-full">
        <Button className="w-full">Start</Button>
      </Link>
    </div>
  );
}

export default HomePage;
