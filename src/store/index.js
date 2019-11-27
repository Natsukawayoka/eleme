import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    islogin:true,
    zongheRank:false,
    pullUp:true,
    clicked:false,
    // username:""
  },
  mutations: {
    ISLOGIN(state,val){
      state.islogin = val;
    },
    ZONGHE_RANK(state,val){
      state.zongheRank = val;
    },
    PULLUP(state,val){
      state.pullUp = val;
    },
    CLICKED(state,val){
      state.clicked = val
    }
  },
  actions: {
  },
  modules: {
  }
})
