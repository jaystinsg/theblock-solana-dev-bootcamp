import * as Web3 from '@solana/web3.js'

//const publicKey = new Web3.PublicKey('Hr98NjhjNDX92z8bXp7n19jznZpqJxnvCeCK3RBmco9L');
const publicKey = new Web3.PublicKey('FFac8uQWcuyTZZ4aSwfAW99KnAmrvUzNS5RNTBqm78Sh');



async function main() {
    console.log('devenet url',Web3.clusterApiUrl('devnet'))
    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))

    const balance = await connection.getBalance(publicKey)
    console.log('balance',balance)

    const accountInfo = await connection.getAccountInfo(publicKey)
    console.log('accountInfo',accountInfo?.data.toString())
}

main()