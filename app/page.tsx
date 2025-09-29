import Image from "next/image";
import Landing from "./Landing";
import About from "./About";
import Projects from "./Projects";
import Experience from "./Experience";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-[#f0fdf4] to-[#dcfce7] min-h-screen">
      <main>
        <Landing />
        <About />
        <Experience />
        <Projects />
      </main>
      <footer></footer>
    </div>
  );
}
