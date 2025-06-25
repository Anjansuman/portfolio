import { Gmail } from "../SVGs/Gmail";
import { HireMe } from "../SVGs/HireMe";
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
        <div className="text-2xl w-full border-b-2 border-[#0f0f0f] flex justify-between items-center pb-1 ">
            <div>
                Experience
            </div>
            <a
                className="flex items-center justify-center gap-x-1 py-1 px-2 transition-colors duration-200 ease-in-out cursor-pointer rounded-md hover:bg-[#ada592] "
                href={""}
            >
                <Gmail />
                <div className="text-[16px]  ">
                    Hire me
                </div>
            </a>
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