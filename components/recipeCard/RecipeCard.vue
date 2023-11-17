<script setup>
const props = defineProps({
    title: String,
    description: String,
    image: String,
    id: Number,
})
const store = useGlobalStore()

const buttonLabel = computed(() => store.isInCart(props.id) ? 'Remove from cart' : 'Add to cart')

// import myButton from '@/components/elements/myButton.vue'
import myTitle from '../elements/myTitle.vue';
// import myNote from './elements/myNote.vue'
// import myIcon from './elements/myIcon.vue';
// import { RouterLink, RouterView } from 'vue-router'

const onClick = () => {
  if (store.isInCart(props.id)) {
    store.removeFromCart(props.id)
  } else {
    store.addToCart(props.id)
  }
}
</script>

<template>
  <div class="c-cardVignette">
    <div class="c-cardVignette__card" >
        <img :src="image" alt=""/>     
        <div class="c-cardVignette__card--content" >
            <p class="cardVignette__card--content--title">{{ title }}</p>
            <p class="cardVignette__card--content--description">{{ description }}</p>
      <!-- Système flexible pour n'avoir qu'un bouton au lieu de 2 -->
            <div class="c-cardVignette__card--content--button" @click="onClick">
                {{ buttonLabel }}
            </div>
            <div class="c-cardVignette__card--content--icons">
                <myIcon name="arrowRight" background="backgroundBCK"/>
                <myIcon name="arrowLeft" background="backgroundW"/>
            </div>
        </div>        
    </div>
  </div>
    
</template>

<style lang="scss" scoped>
.c-cardVignette {
    display: grid;
    grid-template-columns: repeat(2,1fr);

    &__card{
        display: grid;
        grid-template-rows: repeat(4 ,1fr);
        max-width: 400px;
        max-height: 500px;
        border-radius: rem(20);
        border: rem(3) solid $grey;
        margin: rem(30) rem(20);
        line-height: 1.2;
        text-align: center;
        position: relative;

        img{
            width: 100%;
            height: auto;
            border-radius: rem(20) rem(20) rem(0) rem(0)
        } 


        &--content{
            display: grid;
            grid-template-rows: repeat(4 ,1fr);            
            align-items: center;
            gap: rem(20);   

              &--title {
                font-size: 22px;
                line-height: 1.2;
                color: black;
                &:not(:first-child) {
                  margin-top: 10px;
                }
                }

              &--icons{       
                  display: flex;     
                  position: absolute;
                  align-items: center;
                  gap: rem(35);
                  transform: translate(133px, 103px);
              }
                    
              &--button {
                display: inline-block;
                background-color: orange;
                color: white;
                padding: 10px 20px;
                border-radius: 10px;
                cursor: pointer;

                &:not(:first-child) {
                  margin-top: 30px;
                }
              }
          
        }

    }
        
            
        
       
        
        
}
</style>