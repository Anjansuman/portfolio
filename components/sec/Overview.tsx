import { cn } from "@/lib/utils";
import Piechart from "./Piechart";
import Heading from "../ui/Heading";


export default function Overview({ className }: { className?: string }) {
    return (
        <div className={cn(className)}>
            <Heading heading={'overview'} tag={'Of me'} />
            <div className="w-full flex justify-between items-center gap-x-3">
                <Piechart />
                <div className="text-white text-xs text-justify font-extralight font-sans">
                    I’m someone who enjoys building things end-to-end and understanding how all the pieces fit together. I like working on ideas from their early shape through to something real that people can use, paying attention to structure, clarity, and long-term reliability. I care about how systems feel to use just as much as how they’re designed behind the scenes, and I naturally gravitate toward thoughtful, well-built solutions rather than quick fixes.
                </div>
            </div>
        </div>
    );
}