import Vue from 'vue'
import I18n from 'vue-i18n'
import store from '@/store'
import en from './en'
import cn from './cn'
Vue.use(I18n)
console.log('language',store.getters.language);
const i18n = new I18n({
    locale: store.getters.language, // 语言标识
    messages: {
        'zh_CN': { ...cn },
        'en': { ...en }
    }
})

export default i18n
