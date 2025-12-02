import Image from "next/image";
import { Quicksand } from "next/font/google";
import ToolTipComponent from "../ui/TooltipComponent";
import BlueTick from "../ui/BlueTick";

const quicksand = Quicksand({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

export default function Title() {
    return (
        <div className="w-full flex items-center justify-between">
            <div className="flex flex-col ">
                <div className={`text-white text-3xl ${quicksand.className} font-extrabold flex items-center gap-x-1`}>
                    <div>
                        Anjan
                    </div>
                    <div className="flex items-center">
                        <BlueTick size={18} />
                    </div>
                </div>
                <Contacts />
            </div>
            <Image
                src={'/images/profile.jpeg'}
                alt={'profile'}
                width={'100'}
                height={'100'}
                className="rounded-full border border-neutral-500"
            />
        </div>
    );
}

function Contacts() {

    const data = [
        { link: 'https://x.com/AnjanSuman8', title: 'X', tooltip: 'AnjanSuman8' },
        { link: 'https://github.com/Anjansuman', title: 'GITHUB', tooltip: 'Anjansuman' },
        { link: 'https://linkedin.com/in/anjansuman', title: 'LINKEDIN', tooltip: 'anjansuman' },
        { link: 'https://drive.google.com/file/d/1tiMKLVbUUM6WfgVFRVZuQ5YMeupmLu_r/view?usp=drivesdk', title: 'RESUME', tooltip: 'resume' },
    ]

    return (
        <div className="text-xs text-neutral-500 flex gap-x-2">
            {data.map((entry, i) => (
                <ToolTipComponent content={entry.tooltip} >
                    <a
                        target="_blank"
                        href={entry.link}
                        className="cursor-pointer hover:underline transition"
                        key={i}
                    >
                        {entry.title}
                    </a>
                </ToolTipComponent>
            ))}
        </div>
    );
}