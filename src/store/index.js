import { createStore } from 'vuex'
import { ethers } from 'ethers'
import Market from '../artifacts/contracts/Market.sol/NFTMarket.json'
import NFT from '../artifacts/contracts/NFT.sol/NFT.json'

export default createStore({
  state: {
    nfts: [],
    user: undefined
  },
  getters: {
    getNftById: (state) => (id) => {
      return state.nfts.find(nft => nft.id == id)
    }
  },
  mutations: {
    loadNfts (state, payload) {
      if (payload && payload.length > 0) {
        state.nfts = payload
      }
    },
    connectUser (state, user) {
      state.user = user
    }
  },
  actions: {
    async loadNfts ({ commit }) {
      const provider = new ethers.providers.JsonRpcProvider('https://rpc-mainnet.maticvigil.com')
      const tokenContract = new ethers.Contract(process.env.VUE_APP_NFT_ADDRESS, NFT.abi, provider)
      const marketContract = new ethers.Contract(process.env.VUE_APP_MARKETPLACE_ADDRESS, Market.abi, provider)
      const data = await marketContract.fetchMarketItems()
      const items = await Promise.all(
        data.map(async (item, index) => {
          const tokenUri = await tokenContract.tokenURI(item.tokenId)
          const meta = await (await fetch(tokenUri)).json()

          return {
            price: ethers.utils.formatUnits(item.price.toString(), 'wei'),
            tokenId: item.tokenId.toNumber(),
            seller: item.seller,
            owner: item.owner,
            image: meta.image,
            name: meta.name,
            description: meta.description,
            id: index
          }
        })
      )

      commit('loadNfts', items)
    },
    async connexion ({ commit }, providerName) {
      if ('metamask' === providerName) {
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
    }
  }
})
