import { Category } from "../../data/skills";
import { Skill } from "../../data/skills";
import { tagColorSystem } from "../../data/skills";
import SkillTag from "./SkillTag";
import React, { cloneElement } from "react";
import { useState } from "react";

const rename = (name: Category) => {
  const renameDict: { [key in Category]: string } = {
    frontend: "Front-End",
    backend: "Back-End",
    database: "Database",
    devops: "DevOps",
    ml: "Machine Learning",
    other: "Other",
  };
  return renameDict[name];
};

interface SkillCardProps {
  category: Category;
  skills: Skill[];
}

export default function SkillCard({ category, skills }: SkillCardProps) {
  const icon = tagColorSystem[category].icon;

  return (
    <div className="card-gradient-hover px-8 py-6 pb-16 h-full flex flex-col">
      {icon &&
        cloneElement(icon as React.ReactElement, {
          className: `text-6xl ${tagColorSystem[category].text}`,
        })}
      <h3 className="text-2xl text-sans text-dark-text-secondary font-semibold mt-4 mb-6">
        {rename(category)}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <SkillTag
            key={skill.name}
            bgColor={tagColorSystem[category].background}
            textColor={tagColorSystem[category].text}
          >
            {skill.name}
          </SkillTag>
        ))}
      </div>
    </div>
  );
}
