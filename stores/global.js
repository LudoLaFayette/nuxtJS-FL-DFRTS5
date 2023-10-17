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
        },
        addToCart (id) {
            if(!this.cart.include(id)){
                this.card.push(id)
            }            
        },
        removeFromCart (id) {
            const idIndex = this.cart.indexOf(id)
            if (idIndex ===-1) return 
            this.cart.splice(idIndex, 1)
            
        }
    }
})