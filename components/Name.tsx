import { Roboto } from "next/font/google";
import { GoogleMeet } from "./SVGs/GoogleMeet";

const roboto = Roboto({
    subsets: ["latin"]
});

interface TechProps {
    ref?: React.Ref<HTMLDivElement>,
    className?: string
}

export const Name = ({ ref, className }: TechProps) => {
    return <div
        className={`col-span-4 row-span-5 bg-[#565449] rounded-xl overflow-hidden p-5 text-[#D8CFBC] flex flex-col items-end justify-between gap-y-4 ${className}`}
        ref={ref}
    >
        <div className="w-full flex flex-col justify-start items-end gap-y-[0.5px] ">
            <div className="text-5xl font-medium text-shadow-lg ">
                Anjan Suman
            </div>
            <div className="text-lg text-shadow-sm ">
                Full-stack WEB-2/WEB-3 developer
            </div>
        </div>
        <div className={`text-end ${roboto.className} `}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, nam. Vitae distinctio saepe, vel fugiat, consequatur error quidem omnis ea optio ad harum reiciendis cum culpa, cupiditate iure placeat officiis assumenda incidunt? Numquam recusandae accusamus corporis natus eos reiciendis obcaecati expedita ratione, architecto, fugit sunt, voluptatibus nisi iste eaque dolorem.
        </div>
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
}