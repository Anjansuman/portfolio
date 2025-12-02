import { cn } from "@/lib/utils";

interface ExperienceType {
    company: string,
    role: string,
    dates: string,
    description: string,
    tech: string[],
}

const experiences: ExperienceType[] = [
    {
        company: 'wallpaper heaven',
        role: 'full stack developer',
        dates: 'may 2025 - july 2025',
        description: 'Worked as a freelance full-stack developer for an interior design company, where I built their website from scratch to boost their online presence.',
        tech: ['typescript', 'turborepo', 'next.js', 'node.js', 'prisma', 'postgresql', 'git', 'docker', 'aws'],
    },
];

export default function Experience() {
    return (
        <div className="w-full ">
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