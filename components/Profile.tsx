"use client"

import Image from "next/image";
import profile from "../public/profile.jpg";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface ProfileProps {
    ref?: React.Ref<HTMLDivElement>,
    className?: string
}

export const Profile = ({ ref, className }: ProfileProps) => {

    return <div
        className={`w-full h-full relative col-span-3 row-span-5 bg-[#565449] rounded-xl overflow-hidden ${className}`}
        ref={ref}
    >
        <Image src={profile} alt={"Anjan Suman"} unoptimized />
    </div>
}