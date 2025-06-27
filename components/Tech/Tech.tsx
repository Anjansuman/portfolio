import { Logos } from "../Logos/Logos";
import { Logo } from "./Logo";
import gsap from "gsap";

interface TechProps {
    ref?: React.Ref<HTMLDivElement>,
    className?: string
}

export const Tech = ({ ref, className }: TechProps) => {

    const LogoNames = Logos.map((l) => (l.name));

    const handleAnimation = (el: HTMLDivElement | null) => {
        if (!el) return;
        const logos = el.querySelectorAll(".logo");

        const tl = gsap.timeline();

        tl.from([], {
            duration: 1.5
        });

        tl.fromTo(
            logos,
            {
                opacity: 0,
                y: 20,
                scale: 0.9
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                stagger: 0.07,
                ease: "power2.out",
                duration: 0.4,
                delay: 0.3,
            }
        );
    }

    return <div
        className={`p-5 bg-[#D8CFBC] rounded-xl flex flex-col gap-y-3 overflow-hidden ${className}`}
        ref={ref}
    >
        <div className="text-2xl w-full border-b-2 border-[#0f0f0f] pb-1 ">
            Tech-stack
        </div>
        {/* tech stack */}
        <div
            className="w-full flex flex-wrap justify-start gap-2"
            ref={(el) => handleAnimation(el)}
        >
            {
                LogoNames.map((name, index) => (
                    <Logo name={name} key={index} />
                ))
            }
        </div>
    </div>
}