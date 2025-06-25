"use client"

import { useState } from "react";
import { Connector, useConnect } from "wagmi";
import { Providers } from "./Providers";

export const WalletOptions = () => {

    const { connectors, connect } = useConnect();
    const [selectedWallet, setSelectedWallet] = useState<string>("");

    return connectors.map((connector) => (
        <button
            key={connector.uid}
            onClick={() => {
                connect({ connector });
                setSelectedWallet(connector.uid)
            }}
            className={`w-full text-left py-2 px-3 rounded-md hover:bg-[#1c1c1c] transition duration-200 ease-in-out cursor-pointer flex justify-start items-center gap-x-2 ${(connector.id === selectedWallet) ? "bg-[#2c2c2c] " : ""} `}
        >
            {
                Providers.find(wallet => wallet.name === connector.name)?.img
            }
            {connector.name}
        </button>
    ))
}