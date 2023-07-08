import 'dotenv/config'
import * as Web3 from '@solana/web3.js'
import * as token from '@solana/spl-token'
import { SystemProgram , LAMPORTS_PER_SOL, sendAndConfirmTransaction} from '@solana/web3.js'

import base58 from 'bs58';

async function main(){
    
    console.log('devenet url',Web3.clusterApiUrl('devnet'))
    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))
    const base58DecodedPK = base58.decode(process.env.SOL_PRIVATE_KEY || '');
    const signer = Web3.Keypair.fromSecretKey(base58DecodedPK)
    const transaction = new Web3.Transaction();
    const txHash = sendAndConfirmTransaction(connection, transaction, [signer]);

    const mintTokens = await token.mintTo(
        connection,
        signer,
        new Web3.PublicKey('BFb4shxjeAjRughsWqsAvdBHNv7yeXshfXfkCCZAEe5z'),
        new Web3.PublicKey('95hPVL8zZD5rMUCJADL6mWmQGGEB8kH6PwjowS572Cxp'),
        signer,
        10000000,

    )

    
    console.log('txHash', txHash)

    // token Mint: BFb4shxjeAjRughsWqsAvdBHNv7yeXshfXfkCCZAEe5z
    // token account: 95hPVL8zZD5rMUCJADL6mWmQGGEB8kH6PwjowS572Cxp
}

main()

//token.mintTo