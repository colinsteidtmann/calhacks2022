import { useEffect, useState } from "react";
import NFT from "./NFT";

export default function DisplayNFTs({ contract }) {
    const [nfts, setNFTs] = useState([]);

    useEffect(() => {
        refreshNFTs();
    }, [contract]);

    async function refreshNFTs() {
        const nfts = await contract.fetchNfts();
        setNFTs(nfts);
    }

    return (
        <div>
            {nfts.map((nft) => <NFT data={nft} />)}
        </div>
    );
}