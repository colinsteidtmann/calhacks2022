import '@rainbow-me/rainbowkit/styles.css';
import {
    getDefaultWallets,
} from '@rainbow-me/rainbowkit';
import {
    chain,
    configureChains,
    createClient,
} from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';

const avalancheChain = {
    id: 43_113,
    name: 'Avalanche Fuji',
    network: 'avalanche fuji',
    nativeCurrency: {
        decimals: 18,
        name: 'Avalanche',
        symbol: 'AVAX',
    },
    rpcUrls: {
        default: 'https://api.avax-test.network/ext/bc/C/rpc',
    },
    blockExplorers: {
        default: { name: 'SnowTrace', url: 'https://testnet.snowtrace.io' },
    },
    testnet: true,
};

export const { chains, provider } = configureChains(
    [avalancheChain, chain.arbitrum],
    [publicProvider()]
);
export const { connectors } = getDefaultWallets({
    appName: 'My RainbowKit App',
    chains
});
export const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider
});