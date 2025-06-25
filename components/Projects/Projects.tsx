"use client"

import { useRef, useState } from "react";

interface ProjectsProps {
    ref?: React.Ref<HTMLDivElement>,
    className?: string
}

export const Projects = ({ ref, className }: ProjectsProps) => {

    return <div className={`h-full w-full p-5 relative col-span-4 row-span-8 bg-[#D8CFBC] rounded-xl overflow-hidden opacity-0 ${className} `}
        ref={ref}
    >
        <div className="text-2xl w-full border-b-2 border-[#0f0f0f] ">
            Projects
        </div>
    </div>
}