import { Roboto } from "next/font/google";
import { GoogleMeet } from "./SVGs/GoogleMeet";
import { HireMe } from "./SVGs/HireMe";

const roboto = Roboto({
    subsets: ["latin"]
});

interface NameProps {
    ref?: React.Ref<HTMLDivElement>,
    className?: string
}

export const Name = ({ ref, className }: NameProps) => {
    return <div
        className={`bg-[#565449] rounded-xl overflow-hidden p-5 text-[#D8CFBC] flex flex-col items-end justify-between gap-y-2 ${className}`}
        ref={ref}
    >
        <div className="w-full flex flex-col justify-start items-end gap-y-[0.5px] ">
            <div className="text-4xl 2xl:text-5xl font-medium text-shadow-lg ">
                Anjan Suman
            </div>
            <div className="text-sm 2xl:text-lg text-shadow-sm ">
                Full-stack WEB-2/WEB-3 developer
            </div>
        </div>
        <div className={`text-justify text-xs 2xl:text-sm ${roboto.className} `}>
            A full-stack developer with a keen focus on pioneering the next generation of the web: Web3. Specializing in scalable, high-performance applications, leveraging a modern tech stack — including TypeScript, Next.js, Tailwind CSS, Node.js, and Solidity — to architect robust solutions across frontend, backend, and blockchain layers. With a strong emphasis on clean architecture, seamless user experiences, and secure smart-contract integration, delivering reliable, end-to-end systems from concept through deployment.
        </div>
        <div className="flex justify-end items-center gap-x-3 ">
            <a
                className="flex items-center justify-end gap-x-2 py-2 px-3 transition-colors duration-200 ease-in-out cursor-pointer rounded-xl hover:bg-[#3d3932] "
                href={""}
            >
                <GoogleMeet />
                <div className={`text-xl `}>
                    Book a meet
                </div>
            </a>
        </div>
    </div>
}