import React from "react";
import ExperienceCard from "./components/ExperienceCard";
export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  description: string;
}
const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      company: "Spotify",

      role: "FullStack Engineering Intern",

      duration: "June 2025 - August 2025",
      description:
        "Full-stack development on the Audiobooks team working on Spotify for Authors using Next.js, TypeScript, Java & Scala",
    },
    {
      company: "King's College London",
      role: "Computer Science - MSci",
      duration: "September 2022 - Curent",
      description:
        "Relevant Modules: Database Systems, Machine Learning, Software Engineering, Operating Systems",
    },
    {
      company: "FunTech",
      role: "Programming Tutor",
      duration: "July 2024 - July 2025",
      description:
        "Teaching fundamental concepts and  Object-Oriented Programming(OOP) concepts in Python to children, simplifying complex topics like classes, objects, inheritance, and encapsulation",
    },
  ];
  return (
    <div className="max-w-3xl mx-auto p-4 mt-25">
      <h2 className="text-5xl text-center mb-10">Experience &amp; Education</h2>
      <ul>
        {experiences.map((item, index) => (
          <ExperienceCard key={index} {...item} />
        ))}
      </ul>
    </div>
  );
};

export default Experience;
