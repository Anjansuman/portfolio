import { http, createConfig, injected } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
import { coinbaseWallet, metaMask, walletConnect } from 'wagmi/connectors';

export const config = createConfig({
  chains: [mainnet, sepolia],
  connectors: [
    metaMask(),
    coinbaseWallet()
  ],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
});