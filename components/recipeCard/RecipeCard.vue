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
    <div class="cardVignette" >
        <img :src="image" alt=""/>     
        <div class="cardVignette__content" >
            <p class="cardVignette__title">{{ title }}</p>
      <p class="cardVignette__description">{{ description }}</p>
      <!-- Système flexible pour n'avoir qu'un bouton au lieu de 2 -->
            <div class="cardVignette__button" @click="onClick">
                {{ buttonLabel }}
            </div>
            <div class="cardVignette__icons">
                <myIcon name="arrowRight" background="backgroundBCK"/>
                <myIcon name="arrowLeft" background="backgroundW"/>
            </div>
        </div>        
    </div>
<!-- 
    <div class="c-recipe-card">
    <div class="c-recipe-card__content">
      <img class="c-recipe-card__image" :src="image" alt="">
      <p class="c-recipe-card__title">{{ title }}</p>
      <p class="c-recipe-card__description">{{ description }}</p>
      <RouterLink :to="`/recipes/${id}`">Plus d'infos</RouterLink>
    </div>
  </div> -->
</template>

<style lang="scss" scoped>
.cardVignette {
        display: grid;
        grid-template-rows: repeat(2 ,1fr);
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
       
        &__content{
            display: grid;
            grid-template-rows: repeat(4 ,1fr);            
            align-items: center;
            gap: rem(20);   
          
        }
        &__title {
    font-size: 22px;
    line-height: 1.2;
    color: black;
    &:not(:first-child) {
      margin-top: 10px;
    }
  }
        &__icons{       
            display: flex;     
            position: absolute;
            align-items: center;
            gap: rem(35);
            transform: translate(133px, 103px);
        }
        &__button {
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
</style>