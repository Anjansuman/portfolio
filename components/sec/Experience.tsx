import { cn } from "@/lib/utils";
import { experiences } from "../data/experiences";
import ExperienceType from "../types/experience-type";

export default function Experience({ className }: { className?: string }) {
    return (
        <div className={cn(
            "w-full ",
            className
        )}
        >
            <div className="mb-2">
                <div className="font-semibold text-neutral-200">
                    experiences
                </div>
                <div className="text-xs text-neutral-400">I had</div>
            </div>
            <div className="w-full flex items-center justify-between gap-4">
                <div className="w-full flex flex-wrap gap-2">
                    {experiences.map((exp, i) => (
                        <ExperienceCard
                            experience={exp}
                            key={i}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

function ExperienceCard({ experience }: { experience: ExperienceType }) {
    return (
        <div className="w-full flex flex-col text-sm text-neutral-500">
            <div className="flex justify-between items-center">
                <div className="text-base text-neutral-300">
                    {experience.company}
                </div>
                <div className="text-neutral-600 text-xs italic">
                    {experience.dates}
                </div>
            </div>

            <div className="text-neutral-400 italic text-xs">
                {experience.role}
            </div>

            <div className="mt-2 text-justify">
                {experience.description}
            </div>

            <div className="mt-2 flex flex-wrap gap-2">
                {experience.tech.map((t) => (
                    <ExperienceTechCard key={t} tech={t} />
                ))}
            </div>
        </div>
    );
}


function ExperienceTechCard({ tech }: { tech: string }) {
    return (
        <div className={cn(
            "w-fit px-2 py-1 rounded-md bg-[#101010] border border-neutral-700 text-neutral-200 text-xs",
            "cursor-pointer",
        )}>
            {tech}
        </div>
    );
}