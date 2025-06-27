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
    <div className="w-screen xl:h-screen bg-[#0f0f0f] p-5 text-[#0f0f0f] overflow-x-hidden overflow-y-auto [::-webkit-scrollbar]:hidden [scrollbar-width:none] scroll-smooth">
      <div
        className="h-full grid
          grid-cols-12
          grid-rows-19 xl:grid-rows-10
          gap-x-5 gap-y-5"
      >

        {/* grid-rows-[repeat(19,minmax(0,1fr))] lg:grid-rows-[repeat(10,minmax(0,1fr))] */}
        <NavBar
          ref={NavBarRef}
          className="opacity-0
          col-span-12
          row-span-1 "
        />

        <Tech
          ref={TechRef}
          className="opacity-0 h-full flex flex-col
            col-span-12 sm:col-span-8 md:col-span-8 lg:col-span-5
            row-span-5 "
        />


        <Profile
          ref={profileRef}
          className="opacity-0 h-full flex flex-col
            col-span-12 sm:col-span-8 md:col-span-4 lg:col-span-3
            row-span-5 "
        />


        <Projects
          ref={ProjectsRef}
          className="opacity-0
            col-span-12 lg:col-span-4
            row-span-8 "
        />

        <Experience
          ref={ExperienceRef}
          className="opacity-0
            col-span-12 md:col-span-6 lg:col-span-4
            row-span-5 "
        />

        <Name
          ref={NameRef}
          className="opacity-0
            col-span-12 md:col-span-6 lg:col-span-4
            row-span-5 "
        />

        <Contact
          ref={ContactRef}
          className="opacity-0
            col-span-12 lg:col-span-4
            row-span-2 "
        />

      </div>
    </div>

  );
}