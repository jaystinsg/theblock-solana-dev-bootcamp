import 'dotenv/config'
import * as Web3 from '@solana/web3.js'
import * as token from '@solana/spl-token'
import base58 from 'bs58';

async function main(){
    
    console.log('devnet url',Web3.clusterApiUrl('devnet'))
    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))
    const base58DecodedPK = base58.decode(process.env.SOL_PRIVATE_KEY || '');
    const signer = Web3.Keypair.fromSecretKey(base58DecodedPK)
    const PublicKey = new Web3.PublicKey('FFac8uQWcuyTZZ4aSwfAW99KnAmrvUzNS5RNTBqm78Sh')

    const tokenMint = await token.createMint(
        connection,
        signer, 
        PublicKey,
        PublicKey,
        9);

    console.log('tokenMint',tokenMint.toBase58());
    //token mint: BFb4shxjeAjRughsWqsAvdBHNv7yeXshfXfkCCZAEe5z


}

main()