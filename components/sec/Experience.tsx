
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
        tech: ['typescript', 'next.js', 'node.js', '']
    },
];

export default function Experience() {
    return (
        <div className="w-full ">
            <div className="font-semibold text-neutral-200">
                experiences
            </div>
            <div>
                {experiences.map((exp) => (
                    <div>

                    </div>
                ))}
            </div>
        </div>
    );
}

function ExperienceCard({ experience }: { experience: ExperienceType }) {
    return (
        <div className="w-full flex flex-col">
            <div className="flex justify-between items-center ">
                <div>
                    {experience.company}
                </div>
                <div>
                    {experience.dates}
                </div>
            </div>
        </div>
    );
}