"use client"

import { useAccount } from "wagmi";
import { Account } from "./Account";
import { useProvider } from "@/zustand/zustand";
import { useEffect } from "react";


export const RightContent = () => {
    const { isConnected, isConnecting } = useAccount();

    if(isConnecting) return <Account />
    if (!isConnected) return <NoWallet />
    return <>
        <SyncProviderWithConnector />
        <Account />
    </>
}

const NoWallet = () => {

    const { provider, setProvider } = useProvider();

    useEffect(() => {
        if (provider !== "") {
            setProvider("");
        }
    }, []);

    return <div className="h-full flex flex-col justify-center items-center ">
        <h2 className="text-2xl font-semibold ">
            Connect Your Wallet
        </h2>
        <p className="text-sm text-[#A8A29E]">
            Choose a wallet from the left panel to connect securely.
        </p>
    </div>
}


export function SyncProviderWithConnector() {
  const { connector, isConnected } = useAccount();
  const { setProvider } = useProvider();

  useEffect(() => {
    if (!isConnected || !connector) {
      setProvider("");
    } else {
      setProvider(connector.name);
    }
  }, [connector, isConnected, setProvider]);

  return null;
}
