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
import { infuraProvider } from 'wagmi/providers/infura';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';


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
        default: process.env.NEXT_PUBLIC_RPC_URL,
    },
    blockExplorers: {
        default: { name: 'SnowTrace', url: 'https://testnet.snowtrace.io' },
    },
    testnet: true,
};

export const { chains, provider } = configureChains(
    [avalancheChain, chain.arbitrum],
    [
        infuraProvider({ apiKey: process.env.NEXT_PUBLIC_API_KEY }),
        jsonRpcProvider({
            rpc: (chain) => {
                if (chain.id !== avalancheChain.id) return null;
                return { http: chain.rpcUrls.default };
            },
        }),
    ]
);

const { connectors } = getDefaultWallets({
    appName: 'My RainbowKit App',
    chains
});

export const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider
});