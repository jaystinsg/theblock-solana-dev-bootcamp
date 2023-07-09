import { createMetaplexInstance } from "./metaplex";

async function main(){
    const metaplex = createMetaplexInstance()
    const metadataUri = 'https://arweave.net/YHTnEUiLyD1pc2pNCKfn_d7N49Mi41F22OojvcehRS8'
    const {nft} = await metaplex.nfts().create({
        uri: metadataUri,
        name:'SolDevBootCamp',
        sellerFeeBasisPoints: 0,
    })

    console.log('nft', nft)
}

main()



/* nft {
    model: 'nft',
    updateAuthorityAddress: PublicKey [PublicKey(FFac8uQWcuyTZZ4aSwfAW99KnAmrvUzNS5RNTBqm78Sh)] {
      _bn: <BN: d3bfbf1a23c105adcdb044b53088bd14a3ecfa0328228c73e34cf7953df027fe>
    },
    json: null,
    jsonLoaded: true,
    name: 'SolDevBootCamp',
    symbol: '',
    uri: 'https://arweave.net/YHTnEUiLyD1pc2pNCKfn_d7N49Mi41F22OojvcehRS8',
    isMutable: true,
    primarySaleHappened: false,
    sellerFeeBasisPoints: 0,
    editionNonce: 255,
    creators: [
      {
        address: [PublicKey [PublicKey(FFac8uQWcuyTZZ4aSwfAW99KnAmrvUzNS5RNTBqm78Sh)]],
        verified: true,
        share: 100
      }
    ],
    tokenStandard: 0,
    collection: null,
    collectionDetails: null,
    uses: null,
    programmableConfig: null,
    address: PublicKey [PublicKey(CYMoJNAbZMQe9qDzAGWfj4V8g2aUS4df1nXAWsxANbEv)] {
      _bn: <BN: ab7913f43272e43d585249095e068de3c2ddb36f7c1b2a9ce7ea9675f6989427>
    },
    metadataAddress: Pda [PublicKey(8m48hK3TV5kNQtogkGuBEGsxGHjBErhjXy4uDKtZF2dR)] {
      _bn: <BN: 734ae7fd41611d554da7988e9104196e51e8b525c37452ce29669622389cd4f4>,
      bump: 254
    },
    mint: {
      model: 'mint',
      address: PublicKey [PublicKey(CYMoJNAbZMQe9qDzAGWfj4V8g2aUS4df1nXAWsxANbEv)] {
        _bn: <BN: ab7913f43272e43d585249095e068de3c2ddb36f7c1b2a9ce7ea9675f6989427>
      },
      mintAuthorityAddress: PublicKey [PublicKey(DjLUQu97yhmZpaaQuRabDWMF6AxgRbhqvb2QpPvFDZVt)] {
        _bn: <BN: bd24a7a4f4d5467ba40df6e6d10e24ad620abcb404278c5a921cfaf3ee410deb>
      },
      freezeAuthorityAddress: PublicKey [PublicKey(DjLUQu97yhmZpaaQuRabDWMF6AxgRbhqvb2QpPvFDZVt)] {
        _bn: <BN: bd24a7a4f4d5467ba40df6e6d10e24ad620abcb404278c5a921cfaf3ee410deb>
      },
      decimals: 0,
      supply: { basisPoints: <BN: 1>, currency: [Object] },
      isWrappedSol: false,
      currency: { symbol: 'Token', decimals: 0, namespace: 'spl-token' }
    },
    token: {
      model: 'token',
      address: Pda [PublicKey(5vwnbzG6ForuQ9qkgFJsod3eVQhLMH4Yei6ZFRRC9ibD)] {
        _bn: <BN: 49407a44b6176e792753a8177cd2c4b3fb3fcb4d637f7ba9761ad91c92dcb174>,
        bump: 255
      },
      isAssociatedToken: true,
      mintAddress: PublicKey [PublicKey(CYMoJNAbZMQe9qDzAGWfj4V8g2aUS4df1nXAWsxANbEv)] {
        _bn: <BN: ab7913f43272e43d585249095e068de3c2ddb36f7c1b2a9ce7ea9675f6989427>
      },
      ownerAddress: PublicKey [PublicKey(FFac8uQWcuyTZZ4aSwfAW99KnAmrvUzNS5RNTBqm78Sh)] {
        _bn: <BN: d3bfbf1a23c105adcdb044b53088bd14a3ecfa0328228c73e34cf7953df027fe>
      },
      amount: { basisPoints: <BN: 1>, currency: [Object] },
      closeAuthorityAddress: null,
      delegateAddress: null,
      delegateAmount: { basisPoints: <BN: 0>, currency: [Object] },
      state: 1
    },
    edition: {
      model: 'nftEdition',
      isOriginal: true,
      address: Pda [PublicKey(DjLUQu97yhmZpaaQuRabDWMF6AxgRbhqvb2QpPvFDZVt)] {
        _bn: <BN: bd24a7a4f4d5467ba40df6e6d10e24ad620abcb404278c5a921cfaf3ee410deb>,
        bump: 255
      },
      supply: <BN: 0>,
      maxSupply: <BN: 0>
    }
  } */
