import Image from "next/image";
import { Roboto } from "next/font/google";
import wallpaper_heaven from "@/public/wallpaper-heaven.png";
import { ExperienceDetails } from "./ExperienceDetails";
import { IconExternalLink } from "@tabler/icons-react";

const roboto = Roboto({
    subsets: ["latin"]
});

interface ExperienceCardProps {
    company: string
}

export const ExperienceCard = ({ company }: ExperienceCardProps) => {

    const experience = ExperienceDetails.find((c) => {
        if (c.company === company) {
            return c;
        }
    })

    return <div className="w-full h-full flex flex-col justify-between items-end text-end ">
        <div className="w-full flex justify-end gap-x-6 ">
            <div className="flex flex-col justify-around items-end text-end ">
                <div className="flex flex-col">
                    <div className="text-3xl">
                        {company}
                    </div>
                    <div className={`text-[#3d3932] text-xs ${roboto.className} `}>
                        {experience?.duration}
                    </div>
                </div>
                <div className="text-[#3d3932] text-lg ">
                    {experience?.role}
                </div>
            </div>
            <a
                target="_blank"
                href={experience?.web}
                className="w-44 h-30 relative flex justify-center items-center rounded-lg overflow-hidden bg-[#50130E] "
            >
                <Image src={wallpaper_heaven} alt={"Wallpaper-Heaven"} width={100} className="object-cover " />
                <div className="absolute right-0 top-0 p-1 bg-[#0f0f0f] rounded-bl-lg rounded-tr-lg ">
                    <IconExternalLink className="text-[#D8CFBC] size-5 " />
                </div>
            </a>
        </div>
        <div className={`text-sm ${roboto.className} `}>
            {experience?.description}
        </div>
        <div>

        </div>
    </div>
}