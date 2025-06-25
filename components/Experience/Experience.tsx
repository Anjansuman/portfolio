import { ExperienceCard } from "./ExperienceCard"
import { ExperienceDetails } from "./ExperienceDetails"

interface ExperienceProps {
    ref?: React.Ref<HTMLDivElement>,
    className?: string
}

export const Experience = ({ ref, className }: ExperienceProps) => {

    const allExperiences = ExperienceDetails.map((c) => c.company);

    return <div
        className={`col-span-4 row-span-5 bg-[#D8CFBC] rounded-xl overflow-hidden p-5 flex flex-col gap-y-3 ${className} `}
        ref={ref}
    >
        <div className="text-2xl w-full border-b-2 border-[#0f0f0f] ">
            Experience
        </div>
        <div className="w-full h-full overflow-x-hidden overflow-y-auto [::-webkit-scrollbar]:hidden [scrollbar-width:none] ">
            {
                allExperiences.map((company, index) => (
                    <ExperienceCard company={company} key={index} />
                ))
            }
        </div>
    </div>
}