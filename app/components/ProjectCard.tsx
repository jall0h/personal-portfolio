import { Github, Link as LinkIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Project } from "../Projects";

const ProjectCard = ({ title, description, githubUrl, liveUrl }: Project) => {
  return (
    <li>
      <div className="bg-[#effdf1] p-6 rounded-lg shadow-md m-4 max-w-150">
        <div className="flex flex-row justify-between mb-2">
          <h2 className="text-3xl text-[#57d065]">{title}</h2>
          <span className="flex flex-row gap-3">
            {githubUrl && (
              <Link href={githubUrl}>
                <Github className="text-[#36df4a]" />
              </Link>
            )}
            {liveUrl && (
              <Link href={liveUrl}>
                <LinkIcon className="text-[#36df4a]" />
              </Link>
            )}
          </span>
        </div>
        <p className="text-lg text-left">{description}</p>
      </div>
    </li>
  );
};

export default ProjectCard;
