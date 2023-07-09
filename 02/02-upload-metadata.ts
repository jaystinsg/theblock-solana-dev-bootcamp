import { createMetaplexInstance } from "./metaplex";
const metaplex = createMetaplexInstance()

const metadata ={
    name: "wow1e.sol bvd NFT",
    description: "My First solana NFT using Metaplex Token Standard",
    image: "https://arweave.net/zRIliBkdgZSwGnnZtzze8vo2zjBYGbz6GglVKpqgdNc",
    attributes: [
        {
            trait_type: 'Event',
            value: 'Solana Developers Bootcamp'
        }
    ]
}

async function main() {
    const {uri} = await metaplex.nfts().uploadMetadata(metadata)
    console.log('metadata uri', uri);
    
}

main()