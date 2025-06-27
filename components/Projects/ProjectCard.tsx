import { Roboto } from "next/font/google";
import { IconBrandGithub, IconWifi, IconWifiOff } from "@tabler/icons-react";

const roboto = Roboto({
    subsets: ["latin"]
});

interface ProjectCardProps {
    name: string,
    description?: string,
    img: React.ReactNode
    skills: string[],
    github: string,
    live?: string,
    positionCount: number,
    className?: string
}

export const ProjectCard = ({ name, description, img, skills, github, live, positionCount, className }: ProjectCardProps) => {
    return positionCount % 2 !== 0 ?
        <ProjectCardLeft name={name} description={description} img={img} skills={skills} github={github} live={live} className={className} />
        :
        <ProjectCardRight name={name} description={description} img={img} skills={skills} github={github} live={live} className={className} />
}

interface ProjectCard {
    name: string,
    description?: string,
    img: React.ReactNode
    skills: string[],
    github: string,
    live?: string,
    className?: string
}

const ProjectCardLeft = ({ name, description, img, skills, github, live, className }: ProjectCard) => {
    return <div className={`${className} w-full flex justify-between items-center gap-x-2 `}>
        <div className="h-full flex justify-start items-center gap-x-2 ">
            <div className="relative min-w-44 h-28 rounded-lg overflow-hidden bg-[#50130E]">
                {img}
            </div>
            <div className="h-full flex flex-col items-start justify-between ">
                <div className="h-full flex flex-col items-start justify-around ">
                    <div className="flex flex-col  ">
                        <div className="text-xl ">
                            {name}
                        </div>
                        <div className={`text-xs relative -top-0.5 ${roboto.className} `}>
                            {description}
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-1.5 ">
                        {skills.map((name, index) => (
                            <Capsule name={name} key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-3 ">
            <a
                className=" "
                href={github}
                target="_blank"
            >
                <IconBrandGithub />
            </a>
            {
                live ?
                    <a
                        href={live}
                        target="_blank"
                    >
                        <IconWifi />
                    </a> : <a
                        className="cursor-pointer "
                    >
                        <IconWifiOff />
                    </a>
            }
        </div>
    </div>
};

const ProjectCardRight = ({ name, description, img, skills, github, live, className }: ProjectCard) => {
    return <div className={`${className} w-full flex justify-between items-center gap-x-2 `}>
        <div className="flex flex-col justify-center items-center gap-y-3 ">
            <a
                className=" "
                href={github}
                target="_blank"
            >
                <IconBrandGithub />
            </a>
            {
                live ?
                    <a
                        href={live}
                        target="_blank"
                    >
                        <IconWifi />
                    </a> : <a
                        className="cursor-pointer "
                    >
                        <IconWifiOff />
                    </a>
            }
        </div>
        <div className="h-full flex flex-col items-end justify-between  ">
            <div className="h-full flex flex-col items-end justify-around ">
                <div className="flex flex-col  ">
                    <div className="text-end text-xl ">
                        {name}
                    </div>
                    <div className={`text-xs relative -top-0.5 ${roboto.className} `}>
                        {description}
                    </div>
                </div>
                <div className="flex flex-wrap gap-1.5 justify-end ">
                    {skills.map((name, index) => (
                        <Capsule name={name} key={index} />
                    ))}
                </div>
            </div>
        </div>
        <div className="relative min-w-44 h-28 rounded-lg overflow-hidden bg-[#50130E]">
            {img}
        </div>
    </div>
}

const Capsule = ({ name }: { name: string }) => {
    return <div className={`px-2 py-1 rounded-full bg-[#3d3932] text-xs font-light text-[#D8CFBC] ${roboto.className} `}>
        {name}
    </div>
}