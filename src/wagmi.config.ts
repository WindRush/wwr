'use client'
import { connectorsForWallets, getDefaultConfig } from '@rainbow-me/rainbowkit';
import {
  arbitrum,
  base,
  mainnet,
  optimism,
  polygon,
  bscTestnet,
} from 'wagmi/chains';

import { metaMaskWallet, okxWallet, binanceWallet, bybitWallet } from '@rainbow-me/rainbowkit/wallets';
import { createConfig, http } from 'wagmi';


export const defaultConnectors = connectorsForWallets(
  [
    {
      groupName: 'Recommended',
      wallets: [metaMaskWallet, okxWallet, binanceWallet, bybitWallet],
    },
  ],
  {
    appName: 'WWR App',
    projectId: '042892be58f77da305452b263dbaf151',
  }
);

export const config = createConfig({
  connectors: defaultConnectors,
  chains: [
    mainnet,
    polygon,
    optimism,
    arbitrum,
    bscTestnet,
    base
  ],
  transports: {
    [mainnet.id]: http(),
    [polygon.id]: http(),
    [optimism.id]: http(),
    [arbitrum.id]: http(),
    [bscTestnet.id]: http(),
    [base.id]: http(),
  },
  ssr: true,
});

// export const nConfig = getDefaultConfig({
//   appName: 'WWR App',
//   projectId: 'YOUR_PROJECT_ID',
//   chains: [
//     mainnet,
//     polygon,
//     optimism,
//     arbitrum,
//     bscTestnet,
//     base,
//     ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [sepolia] : []),
//   ],
//   wallets: [metaMaskWallet, okxWallet, binanceWallet, bybitWallet],
//   ssr: true,
// });
