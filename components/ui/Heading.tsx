import { IBM_Plex_Sans } from "next/font/google";

const ibm = IBM_Plex_Sans({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

interface HeadingProps {
    heading: string;
    tag: string;
};


export default function Heading({ heading, tag }: HeadingProps) {
    return (
        <div className="w-full layout-bottom-border layout-padding mb-2">
            <div className={` text-2xl font-semibold text-neutral-200 ${ibm.className} flex justify-start items-baseline gap-x-1 `}>
                <div>{heading.toUpperCase()}</div>
                <div className="text-xs text-neutral-400">{tag}</div>
            </div>
        </div>
    );
}