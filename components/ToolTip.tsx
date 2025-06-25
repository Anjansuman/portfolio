import Image from "next/image";
import profile from "@/public/profile.jpg";

interface ToolTipProps {
    x: number,
    y: number,
    alt: string,
}

export const ToolTip = ({ x, y, alt}: ToolTipProps) => {
    return (
        <div
            className="absolute z-20 w-36 h-36 overflow-hidden rounded-lg border border-[#0f0f0f] shadow-xl pointer-events-none"
            style={{
                left: `${x}px`,
                top: `${y}px`,
            }}
        >
            <Image
                src={profile}
                alt={alt}
                className="w-full h-full object-cover"
            />
        </div>
    );
};
