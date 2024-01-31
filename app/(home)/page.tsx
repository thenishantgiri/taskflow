import Link from "next/link";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import { ClipboardCheck, MoveRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const headingFont = localFont({
  src: "../../public/fonts/font.woff2",
});

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const HomePage = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div
        className={cn(
          "flex items-center justify-center flex-col",
          headingFont.className
        )}
      >
        <div className="flex items-center mb-4 border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
          <ClipboardCheck className="h-6 w-6 mr-2" />
          Project Management Application
        </div>
        <h1 className="text-3xl md:text-6xl text-center mb-6 text-neutral-800">
          Login to get started
        </h1>
        <div className="text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 rounded-md pb-4 w-fit">
          work forward.
        </div>
      </div>
      <div
        className={cn(
          "text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto",
          textFont.className
        )}
      >
        Collaborate, manage projects, and reach new productivity peaks. From
        high rises to the home office, the way your team works is unique —
        accomplish it all with TaskFlow.
      </div>
      <Button className="mt-6" size="lg" asChild>
        <Link href="/sign-up">
          Get Started
          <MoveRight className="h-6 w-6 ml-2" />
        </Link>
      </Button>
    </div>
  );
};
export default HomePage;
