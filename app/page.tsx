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

    const NavBarDesktopRef = useRef<HTMLDivElement>(null);
    const NameRef = useRef<HTMLDivElement>(null);
    const profileRef = useRef<HTMLDivElement>(null);

    const ProjectsDesktopRef = useRef<HTMLDivElement>(null);
    const ProjectsPhoneRef = useRef<HTMLDivElement>(null);

    const ExperienceRef = useRef<HTMLDivElement>(null);
    const TechRef = useRef<HTMLDivElement>(null);

    const ContactDesktopRef = useRef<HTMLDivElement>(null);
    const ContactPhoneRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        requestAnimationFrame(() => {
            const profile = profileRef.current;
            const name = NameRef.current;
            const nav = NavBarDesktopRef.current;

            const projectsD = ProjectsDesktopRef.current;
            const projectsP = ProjectsPhoneRef.current;

            const tech = TechRef.current;
            const experience = ExperienceRef.current;

            const contactD = ContactDesktopRef.current;
            const contactP = ContactPhoneRef.current;

            if (!profile || !name || !nav || !projectsD || !projectsP || !tech || !experience || !contactD || !contactP) return;

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
                [name, tech, projectsD, projectsP, experience, nav, contactD, contactP],
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
        <div className="w-screen lg:h-screen flex flex-col justify-center items-center bg-[#0f0f0f] p-5 text-[#0f0f0f]
            overflow-x-hidden overflow-y-auto lg:overflow-y-hidden [::-webkit-scrollbar]:hidden [scrollbar-width:none] scroll-smooth"
        >

            {/* this will be hidden for the screens smaller than md */}
            <div
                className="max-w-[1884px] lg:h-full
                    h-lvw
                    hidden md:grid
                    md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 2xl:grid-cols-12
                    md:grid-rows-9 lg:grid-rows-10 xl:grid-rows-10 2xl:grid-rows-10
                    gap-x-5 gap-y-5 "
            >

                {/* grid-rows-[repeat(19,minmax(0,1fr))] lg:grid-rows-[repeat(10,minmax(0,1fr))] */}
                <NavBar
                    ref={NavBarDesktopRef}
                    className="opacity-0   
                        md:col-span-12 2xl:col-span-12
                        md:row-span-1 2xl:row-span-1 "
                />

                <Tech
                    ref={TechRef}
                    className="opacity-0 h-full flex flex-col
                        md:col-span-7 lg:col-span-5 2xl:col-span-5
                        md:row-span-4 lg:row-span-5 2xl:row-span-5 "
                />

                <Profile
                    ref={profileRef}
                    className="opacity-0 h-full
                        md:col-span-5 lg:col-span-3 2xl:col-span-3
                        md:row-span-4 lg:row-span-5 2xl:row-span-5 "
                />

                {/* will get hidden for the screen smaller that lg */}
                <Projects
                    ref={ProjectsDesktopRef}
                    className="opacity-0
                        hidden lg:flex flex-col
                        col-span-4 2xl:col-span-4
                        row-span-8 2xl:row-span-8 "
                />

                <Experience
                    ref={ExperienceRef}
                    className="opacity-0
                        md:col-span-6 lg:col-span-4 2xl:col-span-4
                        md:row-span-4 lg:row-span-5 2xl:row-span-5 "
                />

                <Name
                    ref={NameRef}
                    className="opacity-0
                        md:col-span-6 lg:col-span-4 2xl:col-span-4
                        md:row-span-4 lg:row-span-5 2xl:row-span-5 "
                />

                {/* will get hidden for the screen smaller that lg */}
                <Contact
                    ref={ContactDesktopRef}
                    className="opacity-0
                        hidden lg:flex
                        col-span-4 2xl:col-span-4
                        row-span-2 2xl:row-span-2 "
                />

            </div>

            {/* this will appear when screen size is less than md */}
            <div
                className="w-full h-full
                    grid gap-5 md:hidden
                    grid-cols-1"
            >
                <NavBar />
                <Profile />
                <Name />
                <Experience />
                <Tech />

            </div>

            {/* make the wallet panel for phone and also make a loader for it */}

            {/* appears only if the screen size is less than lg [this is for shifting the side components to the bottom] */}
            <div
                className="lg:hidden w-full mt-5 grid gap-5
                    grid-cols-1
                    grid-rows-9 "
            >

                <Projects
                    ref={ProjectsPhoneRef}
                    className="opacity-0
                        col-span-full
                        row-span-8"
                />

                <Contact
                    ref={ContactPhoneRef}
                    className="opacity-0
                        col-span-full
                        row-span-1"
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