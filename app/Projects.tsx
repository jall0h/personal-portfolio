import { Github } from "lucide-react";
import Link from "next/link";
import { Link as LinkIcon } from "lucide-react";
import React from "react";
import ProjectCard from "./components/ProjectCard";

export interface Project {
  title: string;
  description: string;
  githubUrl?: string;
  liveUrl?: string;
}
const Projects = () => {
  const projects: Project[] = [
    {
      title: "A-FUN to WebAssembly Compiler",
      description:
        "Extended a simple educational programming language (A-FUN) and created a compiler that translates A-FUN code into WebAssembly (WASM). Compiler was developed in TypeScript and used Node.js for execution. Example executed programs include BF Interpreter, FIbonacci, Factorial, etc.",
      githubUrl: "https://github.com/jall0h/WebAssembly-Compiler-Project",
    },
    {
      title: "Daily Habit Journal",
      description:
        "A full-stack web application that combines daily habit tracking with a personal journaling feature, using Django for the backend, React for the frontend, and JWT authentication for secure user management. The app allows users to create and monitor habits, mark progress, and write daily reflections.",
      githubUrl: "https://github.com/jall0h/Daily-Habit-Journal",
    },
    {
      title: "Movie Recommender System",
      description:
        "Movie Recommender system using data science and machine learning techniques to deliver personalized film suggestions based on user preferences and ratings, focusing on collaborative filtering, content analysis, and model evaluation.",
      githubUrl: "https://github.com/jall0h/Movie-Recommender",
    },
    {
      title: "Client Portfolio Website",
      description:
        "Built a personal portfolio website for a client using Next.js and Tailwind CSS to showcase their projects, skills, and experience. The website includes Stripe Integration for selling digital products.",
      liveUrl:
        "https://prof-portfolio-uoko-9jvuzfzf3-jall0hs-projects.vercel.app/about",
    },
    {
      title: "Frosty Voice",
      description:
        "A Django full-stack web app enabling researchers to leave voice comments on papers and manage contributors, with 100% test coverage of models, views, and forms using test-driven development.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center text-left p-4 m-auto mt-30">
      <h1 className="text-5xl">Projects</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 justify-center mt-4 max-w-5xl w-full mx-auto px-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            githubUrl={project.githubUrl}
            liveUrl={project.liveUrl}
          />
        ))}
      </ul>
    </div>
  );
};

export default Projects;
