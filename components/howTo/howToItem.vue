<template>
    <div :class="['c-how-to-item', { '-is-reversed': inversé }]">
      <img :src="image.url" :alt="image.alt" class="c-how-to-item__image" />
      <div class="c-how-to-item__content">
        <PrismicRichText class="c-how-to-item__title" :field="title" />
        <PrismicRichText class="c-how-to-item__texte" :field="text" />
      </div>
    </div>
  </template>
  
  <style lang="scss">
  .c-how-to-item {
  $self: &;
  display: flex;
  flex-flow: column wrap;
  padding: 0 rem(0);
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  margin: rem(30) rem(0);
  &.-is-reversed {
    flex-flow: column-reverse wrap;
  }
  &__image {
    width: 70%;
    margin-bottom: rem(30);
  }
  &__title {
    font-size: $normal_font_size;
    font-weight: 700;
    margin-bottom: rem(10);
    em {
      justify-content: center;
      display: flex;
    }
    strong {
      justify-content: flex-end;
      display: flex;
    }
  }
  &__texte {
    font-size: $tiny_font_size;
    font-weight: 400;
    margin-bottom: rem(30);
  }
}
  </style>
  
  <script setup="">
  const props = defineProps({
    image: Object,
    title: Array,
    text: Array,
    inversé:Boolean,
  });
  </script>