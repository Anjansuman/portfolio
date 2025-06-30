import { Figma } from "../SVGs/Figma";
import { Ganache } from "../SVGs/Ganache";
import { Hardhat } from "../SVGs/Hardhat";
import { Tailwind } from "../SVGs/Tailwind";
import { Truffle } from "../SVGs/Truffle";
import { Turborepo } from "../SVGs/Turborepo";
import { Websocket } from "../SVGs/Websocket";

interface Logos {
    name: string,
    url: string | React.ReactNode
}

export const Logos = [
    { name: "typescript", url: "https://img.icons8.com/?size=100&id=nCj4PvnCO0tZ&format=png&color=000000" },
    { name: "javascript", url: "https://img.icons8.com/?size=100&id=RwtOBojoLS2N&format=png&color=000000" },
    { name: "java", url: "https://img.icons8.com/?size=100&id=FBycNmdwUQz1&format=png&color=000000" },
    { name: "c", url: "https://img.icons8.com/?size=100&id=mfkStOwP4EC0&format=png&color=000000" },
    { name: "solidity", url: "https://img.icons8.com/?size=100&id=at2DODSyQznb&format=png&color=000000" },
    { name: "rust", url: "https://img.icons8.com/?size=100&id=haeAxVQEIg0F&format=png&color=000000" },
    { name: "figma", url: <Figma className="size-full " /> },
    { name: "nodeJS", url: "https://img.icons8.com/?size=100&id=54087&format=png&color=000000" },
    { name: "expressJS", url: "https://img.icons8.com/?size=100&id=SDVmtZ6VBGXt&format=png&color=000000" },
    { name: "reactJS", url: "https://img.icons8.com/?size=100&id=NfbyHexzVEDk&format=png&color=000000" },
    { name: "nextJS", url: "https://img.icons8.com/?size=100&id=MWiBjkuHeMVq&format=png&color=000000" },
    { name: "tailwindCSS", url: <Tailwind className="size-full " /> },
    { name: "prisma ORM", url: "https://img.icons8.com/?size=100&id=aqb9SdV9P8oC&format=png&color=000000" },
    { name: "websocket", url: <Websocket className="size-full " /> },
    { name: "turborepo", url: <Turborepo className="size-full " /> },
    { name: "mongoDB", url: "https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000" },
    { name: "postgreSQL", url: "https://img.icons8.com/?size=100&id=38561&format=png&color=000000" },
    { name: "docker", url: "https://img.icons8.com/?size=100&id=cdYUlRaag9G9&format=png&color=000000" },
    { name: "git", url: "https://img.icons8.com/?size=100&id=20906&format=png&color=000000" },
    { name: "github", url: "https://img.icons8.com/?size=100&id=62856&format=png&color=000000" },
    { name: "postman", url: "https://img.icons8.com/?size=100&id=EPbEfEa7o8CB&format=png&color=000000" },
    { name: "metamask", url: "https://img.icons8.com/?size=100&id=Oi106YG9IoLv&format=png&color=000000" },
    { name: "ganache", url: <Ganache className="size-full " /> },
    { name: "truffle", url: <Truffle className="size-full " /> },
    { name: "hardhat", url: <Hardhat className="size-full " /> },
    { name: "ethereum", url: "https://img.icons8.com/?size=100&id=hwDzHF1W8Qnw&format=png&color=000000" },
    { name: "solana", url: "https://img.icons8.com/?size=100&id=icTiMgoOHSVy&format=png&color=000000" }
];
