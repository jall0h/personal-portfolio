import React from "react";
import { ExperienceItem } from "../Experience";

const ExperienceCard = ({
  company,
  role,
  duration,
  description,
}: ExperienceItem) => {
  return (
    <li>
      <div className="bg-gray-50 p-5 rounded-xl shadow-xl m-4">
        <div>
          <h3 className="text-4xl">{company}</h3>
          <p className="text-xl mt-2 italic">{role}</p>
          <p className="text-xl italic">{duration}</p>
        </div>
        <p>{description}</p>
      </div>
    </li>
  );
};

export default ExperienceCard;
