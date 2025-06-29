"use client"

import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience/Experience";
import { Name } from "@/components/Name";
import { NavBar } from "@/components/NavBar/NavBar";
import { Profile } from "@/components/Profile";
import { Projects } from "@/components/Projects/Projects";
import { Tech } from "@/components/Tech/Tech";
import gsap from "gsap";
import { useEffect, useRef } from "react";


export default function Home() {

    const NavBarRef = useRef<HTMLDivElement>(null);
    const NameRef = useRef<HTMLDivElement>(null);
    const profileRef = useRef<HTMLDivElement>(null);
    const ProjectsRef = useRef<HTMLDivElement>(null);
    const ExperienceRef = useRef<HTMLDivElement>(null);
    const TechRef = useRef<HTMLDivElement>(null);
    const ContactRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        requestAnimationFrame(() => {
            const profile = profileRef.current;
            const name = NameRef.current;
            const nav = NavBarRef.current;
            const projects = ProjectsRef.current;
            const tech = TechRef.current;
            const experience = ExperienceRef.current;
            const contact = ContactRef.current;

            if (!profile || !name || !nav || !projects || !tech || !experience || !contact) return;

            const rect = profile.getBoundingClientRect();
            const dx = window.innerWidth / 2 - (rect.left + rect.width / 2);
            const dy = window.innerHeight / 2 - (rect.top + rect.height / 2);

            const tl = gsap.timeline();

            tl.set(profile, {
                x: dx,
                y: dy,
                scale: 1.3,
                opacity: 1,
            });

            tl.to({}, {
                duration: 0.7
            });

            tl.to(profile, {
                scale: 1,
                duration: 0.5,
                ease: "power2.out",
            });

            tl.to(profile, {
                x: 0,
                y: 0,
                duration: 0.5,
                ease: "power2.out",
            });

            tl.fromTo(
                [name, tech, projects, experience, nav, contact],
                {
                    opacity: 0,
                    y: 20,
                    scale: 0.95,
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.6,
                    ease: "power3.out",
                    stagger: 0.1, // each element appears shortly after the last
                    delay: 0.2
                }
            );

        });
    }, []);

    return (
        <div className="w-screen h-screen flex justify-center items-center bg-[#0f0f0f] p-5 text-[#0f0f0f]
            overflow-x-hidden overflow-y-auto [::-webkit-scrollbar]:hidden [scrollbar-width:none] scroll-smooth"
        >
            <div
                className="max-w-[1884px] h-full grid
                    grid-cols-12
                    grid-rows-10
                    gap-x-5 gap-y-5"
            >

                {/* grid-rows-[repeat(19,minmax(0,1fr))] lg:grid-rows-[repeat(10,minmax(0,1fr))] */}
                <NavBar
                    ref={NavBarRef}
                    className="opacity-0
                        col-span-12 2xl:col-span-12
                        row-span-1 2xl:row-span-1 "
                />

                <Tech
                    ref={TechRef}
                    className="opacity-0 h-full flex flex-col
                        col-span-5 2xl:col-span-5
                        row-span-5 2xl:row-span-5 "
                />

                <Profile
                    ref={profileRef}
                    className="opacity-0 h-full
                        col-span-3 2xl:col-span-3
                        row-span-5 2xl:row-span-5 "
                />

                <Projects
                    ref={ProjectsRef}
                    className="opacity-0
                        col-span-4 2xl:col-span-4
                        row-span-8 2xl:row-span-8 "
                />

                <Experience
                    ref={ExperienceRef}
                    className="opacity-0
                        col-span-4 2xl:col-span-4
                        row-span-5 2xl:row-span-5 "
                />

                <Name
                    ref={NameRef}
                    className="opacity-0
                        col-span-4 2xl:col-span-4
                        row-span-5 2xl:row-span-5 "
                />

                <Contact
                    ref={ContactRef}
                    className="opacity-0
                        col-span-4 2xl:col-span-4
                        row-span-2 2xl:row-span-2 "
                />

            </div>
        </div>

    );
}

/*

render the responsiveness in components

like this

if(screen === some_screen_size) {
  <SMcomponent />
}

and similarly like this for every screen size

<MDcomponent />
<LGcomponent />
<XLcomponent />
<2XLcomponent />

and write separate grid system for each screen size

*/