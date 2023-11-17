<script setup>
defineProps({
  id: Number,
  title: String,
  description: String,
  image: String
})

import { useGlobalStore } from '@/stores/global.js'
const store = useGlobalStore();

const isAlreadyInCart = (id) => {
  return store.cart.includes(id)
}

const buttonLabel = computed(() => isAlreadyInCart(id) ? 'Remove from cart' : 'Add to cart')


</script>

<template>
  <div class='card'>

    <div class='card__image'>
      <img :src='image' alt='imageAlt' />
    </div>

    <div class="card__content">
      <div class="card__content-flex" >
        <h2>{{ title }}</h2>
        <MyNote></MyNote>
      </div>
      <div class='card__button'>
          <MyButton v-if="!isAlreadyInCart(id)" variant='rounded' size='small' @click="store.addToCart(id)">Add to Cart
          </MyButton>
          <MyButton v-else variant='rounded' size='small' @click="store.removeFromCart(id)">Remove</MyButton>
        
        <div class="card__button-more">
          <MyButton variant='rounded' bg="nobg" size='small'>
            <RouterLink :to="`/recipes/${id}`">Plus d'infos</RouterLink>
          </MyButton>
        </div>

      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  border-radius: rem(20);
  overflow: hidden;
  box-shadow: 0px 2px 30px 0px rgba(0, 0, 0, 0.10);

  &__image img {
    object-fit: cover;
    height: 100%;
    width: 100%;
    aspect-ratio: 1;
  }

  &__content {
    padding: rem(0) rem(10) rem(40) rem(10);

    &-flex {
      padding: 10px 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
        h2{
            font-weight: 600;
            font-size: $normal_font_size ;
        }

      &-note {
        display: flex;
        align-items: center;

        p {
          font-size: $tiny_font_size;
        }
      }
    }

  }

  &__button {
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    &-more{
      border-radius: rem(30);
      transition: all .4s;
      &:hover{
        background-color: $primary-color;
        a{
          color: $white;
        }
      }
    }

    >* {
      a {
        text-decoration: none;
        color: $primary-color;
      }
    }
  }
}</style>