import { useAccount, useBalance, useDisconnect, useEnsAvatar, useEnsName, useWalletClient } from 'wagmi';
import { Providers } from './Providers';
import { formatUnits, parseEther } from 'viem';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';

export function Account() {
    const { address, connector, chain } = useAccount();
    const { data: walletClient } = useWalletClient();
    const { data: balance } = useBalance({ address });
    const { disconnect } = useDisconnect();
    const { data: ensName } = useEnsName({ address });
    const { data: ensAvatar } = useEnsAvatar({ name: ensName! });

    if (!address || !connector || !chain || !balance) return null;

    const buyCoffee = async () => {
        const myAddress = "0xA3Dc964f25A61891ECA62a5e778B65dAECdCcb79";

        if (!walletClient) {
            toast.error("Wallet not connected!");
            return;
        }

        try {

            const { data } = await axios.get("https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd");

            const ethPrice = data?.ethereum?.usd;

            if (!ethPrice) {
                toast.error("Failed to fetch ETH price");
                return;
            }

            // converting $5 to ETH
            const ethAmount = (5 / ethPrice).toFixed(18);
            const value = parseEther(ethAmount);

            const hash = async () => {
                await walletClient.sendTransaction({
                    to: myAddress,
                    value: value
                });
            }

            toast.promise(
                hash,
                {
                    loading: 'Requesting...',
                    success: 'Transaction successfull',
                    error: 'Transaction failed'
                }
            )


        } catch (error) {
            toast.error("Error!");
            return;
        }
    }

    return (
        <div className=" h-full flex flex-col items-center justify-center gap-y-2 ">
            <Toaster />
            <div className="w-full flex flex-col justify-center items-center ">
                <div>
                    {
                        Providers.find((wallet) => wallet.name === connector.name)?.img2
                    }
                </div>
                <div className="text-sm tracking-wider ">
                    {connector.name}
                </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-y-3 rounded-2xl p-5 bg-[#1c1c1c] border border-[#3d3932] ">

                {/* account image and address */}
                <div className='flex justify-center items-center gap-x-3 '>
                    <div className="w-10 h-10 rounded-full overflow-hidden border border-[#3d3932] ">
                        {ensAvatar ? (
                            <img src={ensAvatar} alt="ENS Avatar" className="w-full h-full object-cover" />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center bg-[#2c2c2c] text-sm text-[#D8CFBC] ">
                                {ensName ? ensName[0].toUpperCase() : address.slice(2, 4).toUpperCase()}
                            </div>
                        )}
                    </div>
                    {address && (
                        <div
                            className="max-w-xs px-3 py-1 rounded-md bg-[#2c2c2c] border border-[#3d3932] text-[#D8CFBC] text-sm font-mono truncate"
                            title={ensName ? `${ensName} (${address})` : address}
                        >
                            {ensName ? `${ensName} (${address})` : address}
                        </div>
                    )}

                </div>

                {/* chain name */}
                <div className="w-full flex justify-start items-center gap-x-3 ">
                    <div className="flex items-center justify-center px-3 py-1 rounded-md bg-[#2c2c2c] border border-[#3d3932] text-[#D8CFBC] text-sm font-mono ">
                        Chain:
                    </div>
                    <div className="w-full flex items-center justify-center px-3 py-1 rounded-md bg-[#2c2c2c] border border-[#3d3932] text-[#D8CFBC] text-sm font-mono ">
                        {chain.name}
                    </div>
                </div>

                {/* balance */}
                <div className="w-full flex justify-start items-center gap-x-3 ">
                    <div className="flex items-center justify-center px-3 py-1 rounded-md bg-[#2c2c2c] border border-[#3d3932] text-[#D8CFBC] text-sm font-mono ">
                        Balance:
                    </div>
                    <div className="w-full flex items-center justify-center px-3 py-1 rounded-md bg-[#2c2c2c] border border-[#3d3932] text-[#D8CFBC] text-sm font-mono ">
                        {formatUnits(balance.value, balance.decimals || 18)} {balance.symbol}
                    </div>
                </div>

                {/* action buttons */}
                <div className="w-full flex justify-center items-center gap-x-3 mt-8 ">
                    <div
                        className="flex items-center justify-center px-5 py-1.5 rounded-md bg-[#2c2c2c] hover:bg-[#3c3c3c] transition-colors duration-200 ease-in-out border border-[#D8CFBC] text-[#D8CFBC] text-sm font-mono cursor-pointer "
                        onClick={buyCoffee}
                    >
                        Buy me a coffee
                    </div>
                    <div
                        className="flex items-center justify-center px-5 py-1.5 rounded-md bg-[#fb2c3656] hover:bg-[#fb2c3675] transition-colors duration-200 ease-in-out border border-red-400 text-[#D8CFBC] text-sm font-mono cursor-pointer "
                        onClick={() => disconnect()}
                    >
                        Disconnect
                    </div>
                </div>
            </div>
        </div>
    )
}