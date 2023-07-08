import 'dotenv/config'
import * as Web3 from '@solana/web3.js'
import * as token from '@solana/spl-token'
import base58 from 'bs58';

async function main(){
    
    console.log('devnet url',Web3.clusterApiUrl('devnet'))
    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))
    const base58DecodedPK = base58.decode(process.env.SOL_PRIVATE_KEY || '');
    const signer = Web3.Keypair.fromSecretKey(base58DecodedPK)

    const tokenAccount = token.createAccount(
        connection,
        signer,
        new Web3.PublicKey('BFb4shxjeAjRughsWqsAvdBHNv7yeXshfXfkCCZAEe5z'),
        new Web3.PublicKey('FFac8uQWcuyTZZ4aSwfAW99KnAmrvUzNS5RNTBqm78Sh'),
    )

    console.log('token account', (await tokenAccount).toBase58())
    // token account: 95hPVL8zZD5rMUCJADL6mWmQGGEB8kH6PwjowS572Cxp
}

main()