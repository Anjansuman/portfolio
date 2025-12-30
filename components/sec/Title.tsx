import Image from "next/image";
import { Quicksand } from "next/font/google";
import ToolTipComponent from "../ui/TooltipComponent";
import BlueTick from "../ui/BlueTick";
import { cn } from "@/lib/utils";

const quicksand = Quicksand({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

export default function Title({ className }: { className?: string }) {
    return (
        <div className={cn(
            `w-full flex items-center justify-between `,
            className,
        )}
        >
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
        { link: 'mailto:anjansuman80@gmail.com', title: 'MAIL', tooltip: 'anjansuman80@gmail.com' }
    ]

    return (
        <div className="text-xs text-neutral-500 flex gap-x-2">
            {data.map((entry, i) => (
                <ToolTipComponent
                    content={entry.tooltip}
                    key={i}
                >
                    <a
                        target="_blank"
                        href={entry.link}
                        className="cursor-pointer hover:underline transition"
                    >
                        {entry.title}
                    </a>
                </ToolTipComponent>
            ))}
        </div>
    );
}