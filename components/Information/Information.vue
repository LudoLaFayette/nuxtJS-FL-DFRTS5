<script setup>
const props = defineProps({
  information: Array
})
</script>

<template>
  <section class="c-information">
    <div v-for="item in information" class="c-information__item">
      <div class="c-information__icon">
        <img :src="`/icon/${item.information_icon}.svg`" alt="">
      </div>
      <div class="c-information__title">
        <PrismicRichText :field="item.information_title" />
      </div>
      <div class="c-information__text">
        <PrismicRichText :field="item.information_text" />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.c-information {
  display: flex;
  flex-flow: row wrap;
  border-radius: rem(20);
  padding: rem(35);
  margin: rem(20) rem(60);
  box-shadow: 0px rem(1) rem(4) rgba(0, 0, 0, 0.25);
  
  &__item {
    flex: 1;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    text-align: center  ;
    &:nth-child(2) {
      border-left: 2px solid $grey;
      border-right: 2px solid $grey;
    }
  }
  &__icon {
    display: inline-flex;
    width: 30px;
    height: 30px;
    padding: 10px;
    align-items: center;
    justify-content: center;
    background-color: $primary-color;
    stroke: $white;
    border-radius: 50%;

  }
  &__title{
    font-weight: 600;
  }
}
</style>