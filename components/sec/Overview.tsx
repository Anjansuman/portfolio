import { cn } from "@/lib/utils";
import Piechart from "./Piechart";
import Heading from "../ui/Heading";
import Dots from "../ui/Dots";
import Image from "next/image";
import { HorizontalGap, VerticalGap } from "../ui/Gap";
import { user } from "../data/user";


export default function Overview({ className }: { className?: string }) {
    return (
        <div className={cn(
                    'relative',
                    className,
                )}
            >
            <Heading heading={'overview'} tag={'Of me'} />
            <div className="relative h-80">
                <div className="">
                    <VerticalGap className="h-full absolute left-0 border-y-0 border-l-0 " />
                    <VerticalGap className="h-full absolute right-0 border-y-0 border-r-0 " />
                    <VerticalGap className="h-full absolute left-1/2 -translate-l-1/2 border-y-0 " />
                    <HorizontalGap className="border-x-0 border-t-0 " />
                    <HorizontalGap className="border-x-0 absolute bottom-0 border-b-0 " />
                    <div className="layout-double-padding flex flex-col justify-start gap-y-4 ">
                        {user.map((u, i) => (
                            <div
                                key={i}
                                className="flex justify-start items-start gap-x-4 text-neutral-600"
                            >
                                <u.icon />
                                <div>
                                    {u.data}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* <Image
                    src={'/images/city.jpg'}
                    alt={'city'}
                    fill
                    className="object-cover grayscale "
                /> */}
            </div>
        </div>
    );
}