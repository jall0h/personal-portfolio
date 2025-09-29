import Image from "next/image";
import Landing from "./components/Landing";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-[#f0fdf4] to-[#dcfce7] min-h-screen">
      <main>
        <Landing />
        {/* <Experience /> */}
        {/* <Projects /> */}
      </main>
      <footer></footer>
    </div>
  );
}
