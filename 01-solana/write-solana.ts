import 'dotenv/config'
import * as Web3 from '@solana/web3.js'
import { SystemProgram , LAMPORTS_PER_SOL, sendAndConfirmTransaction} from '@solana/web3.js'
import base58 from 'bs58';

console.log(process.env.SOL_PRIVATE_KEY)

async function main(){
    const transaction = new Web3.Transaction();

    const sendSolInstruction = SystemProgram.transfer({
        fromPubkey:new Web3.PublicKey('FFac8uQWcuyTZZ4aSwfAW99KnAmrvUzNS5RNTBqm78Sh'),
        toPubkey: new Web3.PublicKey('Hr98NjhjNDX92z8bXp7n19jznZpqJxnvCeCK3RBmco9L'),
        lamports: 0.5*Web3.LAMPORTS_PER_SOL
    })

    transaction.add(sendSolInstruction)
    const base58DecodedPK = base58.decode(process.env.SOL_PRIVATE_KEY || '');
    const keyPairFromSecret = Web3.Keypair.fromSecretKey(base58DecodedPK)

    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))

    const txHash = sendAndConfirmTransaction(connection, transaction, [keyPairFromSecret]);
    console.log('txHash',txHash)
}

main()
