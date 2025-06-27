import Image from "next/image";
import Backpack from "@/public/Backpack.png";
import { Coinbase } from "../SVGs/Coinbase";
import { Phantom } from "../SVGs/Phantom";
import React from "react";
import { Brave } from "../SVGs/Brave";

interface Providers {
    name: string,
    img: string | React.ReactNode,
    img2: string | React.ReactNode
}

export const Providers: Providers[] = [
    {
        name: "MetaMask",
        img: <img
            src={"https://images.ctfassets.net/clixtyxoaeas/4rnpEzy1ATWRKVBOLxZ1Fm/a74dc1eed36d23d7ea6030383a4d5163/MetaMask-icon-fox.svg"}
            alt={"MetaMask"}
            className="size-6 rounded-sm "
        />,
        img2: <img
            src={"https://images.ctfassets.net/clixtyxoaeas/4rnpEzy1ATWRKVBOLxZ1Fm/a74dc1eed36d23d7ea6030383a4d5163/MetaMask-icon-fox.svg"}
            alt={"MetaMask"}
            className="size-12 rounded-sm "
        />
    },
    {
        name: "Phantom",
        img: <Phantom className="size-6 " />,
        img2: <Phantom className="size-12 " />
    },
    {
        name: "Backpack",
        img: <Image
            src={Backpack}
            alt={"Backpack"}
            className="size-6 rounded-sm "
            unoptimized
        />,
        img2: <Image
            src={Backpack}
            alt={"Backpack"}
            className="size-12 rounded-sm "
            unoptimized
        />
    },
    {
        name: "Coinbase Wallet",
        img: <Coinbase className="size-6 " />,
        img2: <Coinbase className="size-12 " />
    },
    {
        name: "Brave Wallet",
        img: <Brave className="size-6" />,
        img2: <Brave className="size-12 " />
    }
];