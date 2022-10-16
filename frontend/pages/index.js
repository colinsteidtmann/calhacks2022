import { ConnectButton } from '@rainbow-me/rainbowkit';
import { NFT_ABI, NFT_ADDRESS } from "../lib/contract.js";
import { useContract, useProvider, useSigner } from 'wagmi';
import MintNFTForm from '../components/MintNFTForm.js';
import { useEffect } from 'react';
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
    signerOrProvider: signer
  });

  async function info() {
    const symbol = await contract.symbol();
    const nfts = await contract.fetchNfts();
    console.log(symbol);
    console.log(nfts);
  }

  useEffect(() => {
    info();
  }, [contract]);


  return (
    <div>
      <ConnectButton />
      <MintNFTForm contract={contract} />
      <DisplayNFTs contract={contract} />
    </div>);
}
