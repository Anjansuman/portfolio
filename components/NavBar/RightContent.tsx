import { useAccount } from "wagmi";
import { Account } from "./Account";


export const RightContent = () => {
    const { isConnected } = useAccount();
    if (isConnected) return <Account />
    return <NoWallet />
}


const NoWallet = () => {
    return <div className="h-full flex flex-col justify-center items-center ">
        <h2 className="text-2xl font-semibold ">Connect Your Wallet</h2>
        <p className="text-sm text-[#A8A29E]">Choose a wallet from the left panel to connect securely.</p>
    </div>
}
