import ExperienceItem from "./ExperienceItem";
import { Experience, experiences } from "../../data/experiences";

export default function ExperienceSection() {
  return (
    <div className="basis-[9/16] flex-1 flex flex-col gap-4 md:gap-6">
      <h2 className="text-4xl font-semibold text-dark-text-primary font-sans text-center">
        Experience
      </h2>
      <div className="w-full flex flex-col gap-4 md:gap-6">
        {experiences?.map((experience) => (
          <ExperienceItem key={experience.id} experience={experience} />
        ))}
      </div>
    </div>
  );
}
