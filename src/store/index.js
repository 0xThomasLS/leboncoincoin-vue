import { createStore } from 'vuex'
import { ethers } from 'ethers'
import Market from '../artifacts/contracts/Market.sol/NFTMarket.json'
import NFT from '../artifacts/contracts/NFT.sol/NFT.json'

async function formatNfts (provider, data) {
  const tokenContract = new ethers.Contract(process.env.VUE_APP_NFT_ADDRESS, NFT.abi, provider)

  return await Promise.all(
    data.map(async item => {
      const tokenUri = await tokenContract.tokenURI(item.tokenId)
      const meta = await (await fetch(tokenUri)).json()

      return {
        price: ethers.utils.formatUnits(item.price.toString(), 'wei'),
        tokenId: item.tokenId.toNumber(),
        seller: item.seller,
        owner: item.owner,
        image: meta.image,
        name: meta.name,
        description: meta.description
      }
    })
  )
}

export default createStore({
  state: {
    nfts: [],
    user: undefined,
    collection: {
      created: [],
      items: []
    }
  },
  getters: {
    getNftById: (state) => (id) => {
      return state.nfts.find(nft => nft.tokenId == id)
    }
  },
  mutations: {
    setNfts (state, payload) {
      if (payload && payload.length > 0) {
        state.nfts = payload.reverse()
      }
    },
    connectUser (state, user) {
      state.user = user
    },
    setMyCollection (state, payload) {
      if (payload) {
        if (payload.created) {
          state.collection.created = payload.created
        }
        if (payload.items) {
          state.collection.items = payload.items
        }
        console.log('State:', state.collection)
      }
    }
  },
  actions: {
    async loadNfts ({ commit }) {
      const provider = new ethers.providers.JsonRpcProvider('https://rpc-mainnet.maticvigil.com')
      const marketContract = new ethers.Contract(process.env.VUE_APP_MARKETPLACE_ADDRESS, Market.abi, provider)
      const data = await marketContract.fetchMarketItems()
      const items = await formatNfts(provider, data)

      commit('setNfts', items)
    },
    async connexion ({ commit }, providerName) {
      if ('metamask' === providerName) {
        if (process.env.VUE_APP_CHAIN_ID !== window.ethereum.chainId) {
          throw 'WORST_CHAIN'
        }

        const user = await window.ethereum.request({ method: 'eth_requestAccounts' })

        if (user && user.length > 0) {
          commit('connectUser', user[0])
          return true
        } else {
          throw 'User not found'
        }
      }
    },
    disconnect ({ state }) {
      state.user = undefined
    },
    async loadMyCollection ({ state, commit }) {
      if (state.user) {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const marketContract = new ethers.Contract(process.env.VUE_APP_MARKETPLACE_ADDRESS, Market.abi, signer)
        const resultItemsCreated = await marketContract.fetchItemsCreated()
        const itemsCreated = await formatNfts(provider, resultItemsCreated)
        const resultMyNFTs = await marketContract.fetchMyNFTs()
        const myNFTs = await formatNfts(provider, resultMyNFTs)

        commit('setMyCollection', {
          created: itemsCreated,
          items: myNFTs
        })
      }
    }
  }
})
