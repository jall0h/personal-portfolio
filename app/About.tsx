import React from "react";

const About = () => {
  return (
    <div className="max-w-3xl mx-auto p-5 ">
      <h2 className="text-5xl md:text-6xl pt-1 text-center ">About Me</h2>
      <div className="text-xl md:text-2xl mt-10">
        <p className="mt-4 ">
          Greetings! My name is Abu-Bakarr Jalloh and I&lsquo;m a Masters
          student studying Computer Science at King&lsquo;s College London.
          During the Summer of 2025 I had the lovely experience of being a
          Full-Stack Intern working at Spotify in the Audiobooks Mission.
          Allowing me to gain experience working with a large-scale application
          and learning how to work in a professional environment.
        </p>
        <p className="mt-4">Some Technologies I&lsquo;ve worked</p>
        <ul className="grid grid-cols-2 gap-2 pl-3 list-disc list-inside mb-4 ">
          <li>Java</li>
          <li>TypeScript</li>
          <li>Next.js</li>
          <li>React.js</li>
          <li>Python</li>
          <li>Scala</li>
        </ul>
        <p>
          Outside of work, I enjoy following the NBA and some football
          tournaments. I occasionally will play some video games.
        </p>
      </div>
    </div>
  );
};

export default About;
