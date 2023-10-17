import {defineStore} from 'pinia'

export const useGlobalStore = defineStore('global', {
    state: () => ({
        count: 0,
        foo:'bar',
        a: [],
        b: [],
        cart: [],
    }),
    actions:{
        increment() {
            this.count++
        }
        addToCart ( {

        })
    }
})