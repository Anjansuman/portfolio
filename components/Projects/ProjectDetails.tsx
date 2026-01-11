import Image from "next/image";
import adv_nft_app from "@/public/adv-nft-app.png";


interface ProjectDetails {
    name: string,
    description?: string,
    img: React.ReactNode
    skills: string[],
    github: string,
    live?: string
}

export const ProjectDetails: ProjectDetails[] = [
    {
        name: "NFT Minting Platform",
        img: <Image
            src={adv_nft_app}
            alt="Wallpaper-Heaven"
            fill
            className="object-cover block"
            unoptimized
        />,
        skills: ["Solidity", "Truffle", "Ganache", "MetaMask", "Pinata", "Typescript", "ReactJS", "ExpressJS"],
        github: "https://github.com/Anjansuman/adv-nft-app",
        live: "https://adv-nft-app.vercel.app"
    },
    {
        name: "Sketch app",
        img: <div></div>,
        skills: ["Websockets", "NextJS", "Turborepo", "Prisma ORM", "PostgreSQL", "Typescript", "ExpressJS"],
        github: "https://github.com/Anjansuman/sketch-app"
    },
    {
        name: "portfolio",
        description: "You're looking at one.",
        img: <div></div>,
        skills: ["MetaMask", "Wagmi", "NextJS", "Typescript", "Tailwind CSS"],
        github: "https://github.com/Anjansuman/portfolio",
        live: "https://anjan.site"
    },
];