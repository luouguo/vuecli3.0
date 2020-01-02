import Cookies from 'js-cookie'

export default {
  state: {
    token: '' ,
    device: "H5",
    language: 'zh_CN',//zh_CN en
    key:'',
  },
  mutations: {
    SET_TOKEN(state,token){
        state.token=token
    },
    SET_LANGUAGE(state,lang){
        state.language=lang
    }
  },
  actions: {
  }
}
