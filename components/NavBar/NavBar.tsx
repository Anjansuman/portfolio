"use client"

import { useState } from "react";
import { WalletPanel } from "./WalletPanel";
import { Roboto } from "next/font/google";
import Image from "next/image";

const roboto = Roboto({
    subsets: ["latin"]
});

interface NavBarProps {
    ref?: React.Ref<HTMLDivElement>,
    className?: string
}

export const NavBar = ({ ref, className }: NavBarProps) => {

    const [walletPanel, setWalletPanel] = useState<boolean>(false);

    return <div
        className={`bg-[#D8CFBC] px-6 py-3 rounded-2xl flex justify-between items-center ${className} `}
        ref={ref}
    >
        <div className={`text-2xl `}>
            Developer
        </div>
        <div
            className={`text-[#D8CFBC] flex items-center justify-center gap-x-2 font-medium py-2 2xl:py-3 px-3 2xl:px-4 bg-[#565449] rounded-xl hover:bg-[#3d3932] transition-colors duration-200 ease-in-out cursor-pointer ${roboto.className} `}
            onClick={() => setWalletPanel(true)}
        >
            {/* add a connect wallet button for paying */}
            <img
                src="https://img.icons8.com/D8CFBC/laces/64/coffee-to-go.png"
                alt={"coffee"}
                width={30}
            />
            Buy me a coffee
        </div>

        {
            walletPanel && <WalletPanel close={() => setWalletPanel(false)} />
        }

    </div>
}