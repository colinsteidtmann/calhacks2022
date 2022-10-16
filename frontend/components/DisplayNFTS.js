import { useEffect, useState } from "react";
import { useContractRead } from "wagmi";
import { NFT_ABI } from "../lib/contract";
import NFT from "./NFT";

// Displays Grid of NFTs
export default function DisplayNFTs({ contract }) {
    const [nfts, setNFTs] = useState([]);
    const readResult = useContractRead({
        address: contract?.address,
        abi: NFT_ABI,
        functionName: 'fetchNfts',
        onSuccess: (fetchedNfts) => {
            getDisplayNfts(fetchedNfts);
        }
    });

    const getDisplayNfts = (fetchedNfts) => {
        const _nfts = [];
        let nft = {};
        for (let idx = fetchedNfts.length - 1; idx > -1; idx--) {
            const { name, imageUrl, encryptedDescription, encryptedSymmetricKey } = fetchedNfts[idx];
            nft = { name, imageUrl, encryptedDescription, encryptedSymmetricKey };
            _nfts.push(nft);
        }

        setNFTs(_nfts);
    };

    if (readResult.error) {
        return (
            <div>{error}</div>
        );
    } else if (readResult.isFetching || readResult.isLoading) {
        return <div>Loading ...</div>;
    }
    return (
        <div>
            {nfts.map((nft, index) => <NFT key={index} data={nft} />)}
        </div>
    );
}