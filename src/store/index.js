import { createStore } from 'vuex'
import { ethers } from 'ethers'
import Market from '../artifacts/contracts/Market.sol/NFTMarket.json'
import NFT from '../artifacts/contracts/NFT.sol/NFT.json'

export default createStore({
  state: {
    nfts: []
  },
  mutations: {
    loadNfts (state, payload) {
      if (payload && payload.length > 0) {
        state.nfts = payload
      }
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
            itemId: index
          }
        })
      )

      commit('loadNfts', items)
    }
  },
  modules: {
  }
})
