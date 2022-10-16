import { ConnectButton } from '@rainbow-me/rainbowkit';
import { NFT_ABI, NFT_ADDRESS } from "../lib/contract.js";
import { useContract, useProvider, useSigner } from 'wagmi';
import MintNFTForm from '../components/MintNFTForm.js';
import DisplayNFTs from '../components/DisplayNFTS.js';


export default function Home() {
  // Provider
  const provider = useProvider();
  // Signer
  const { data: signer, isError, isLoading } = useSigner();
  // Contract 
  const contract = useContract({
    address: NFT_ADDRESS,
    abi: NFT_ABI,
    signerOrProvider: signer || provider
  });

  // Test function for experimenting
  async function info() {
    const symbol = await contract.symbol();
    const nfts = await contract.fetchNfts();
    console.log(symbol);
    console.log(nfts);
  }

  info();


  if (contract) {
    return (
      <div>
        <ConnectButton />
        <MintNFTForm contract={contract} />
        <DisplayNFTs contract={contract} />
      </div>
    );
  } else {
    return (<div>Loading ...</div>);
  }
}
