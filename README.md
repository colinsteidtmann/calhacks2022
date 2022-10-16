### Calhacks 2022 - Private NFT Metadata
## Inspiration
NFT metadata is usually public. This would be bad if NFTs were being used as event tickets or private pieces of art. We need private NFT metadata.

## What it does
Allows users to encrypt NFT metadata based on specific conditions. Default decryption condition is holding more than 0.1 Avax token. Other conditions to decrypt can be holding other tokens, decrypting during a specific time interval, or being the owner of a specific wallet.

## How we built it
Smart contracts were built with Solidity and deployed on Avalanche. Frontend was build with NextJS and Wagmi React Hooks. Encryption was handled with the Lit Protocol.

## Challenges we ran into
Figuring out how to use the lit Protocol and deploy onto Avalanche. I really wanted to verify my contract programmatically but I couldn't figure out how with the Avalanche Fuji block explorer.

## Accomplishments that we're proud of
Finishing a hackathon project and deploying.

## What we learned
How to encrypt NFT metadata. 

## What's next for Private Encrypted NFTs
Apply this to more impactful use cases and make it more user friendly. I think the idea of encrypted metadata is really powerful and can be applied to many places. All about execution, user interface, and community. 

https://devpost.com/software/private-encrypted-nfts?ref_content=user-portfolio&ref_feature=in_progress

https://privatemetadata.web.app/ 

https://testnet.snowtrace.io/address/0xb02f10543f4069ddF2D656B5D3098A642Bc28071
