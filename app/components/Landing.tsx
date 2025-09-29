import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";

const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
      <h1 className="text-7xl h-min bg-gradient-to-l from-[#6fff9a] to-[#0cff61] bg-clip-text text-transparent">
        Abu-Bakarr Jalloh
      </h1>
      <p className="text-4xl mt-5">Software Engineer</p>
      <ul className="flex flex-row gap-4 mt-4">
        <li>
          <Link href="https://github.com/jall0h">
            <Github />
          </Link>
        </li>
        <li>
          <Link href="https://www.linkedin.com/in/abu-bakarr-jalloh-785305225">
            <Linkedin />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Landing;
