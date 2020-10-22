import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList:[]
  },
  mutations: {
    addCart(state,payload){
      let oldProduct=null
      for(let item of state.cartList){
        if(item.iid===payload.iid){
          oldProduct=item
        }
      }
      if(oldProduct){
        oldProduct.count+=1

      }else {
        payload.count=1
        payload.checked=false
        state.cartList.push(payload)
      }
    }
  },
  actions: {
  },
  modules: {
  },
  getters:{
    cartLength(state){
      return state.cartList.length
    },
    cartList(state){
      return state.cartList
    }
  }
})
