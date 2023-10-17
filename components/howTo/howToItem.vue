<template>
    <div class="c-how-to-item">
      <img :src="image.url" :alt="image.alt" class="c-how-to-item__image" />
  
      <div class="c-how-to-item__content">
        <PrismicRichText class="c-how-to-item__title" :field="title" />
        <PrismicRichText class="c-how-to-item__texte" :field="text" />
      </div>
    </div>
  </template>
  
  <style lang="scss">
  .c-how-to-item {
    &__title {
      font-weight: 700;
      font-family: $primary-font-familly;
      font-size: $normal_font_size;
    }
  
    &__texte {
      font-family: $primary-font-familly;
      font-size: $normal_font_size;
    }
  
    &__image {
      max-width: 420px;
    }
  }
  </style>
  
  <script setup="">
  const props = defineProps({
    image: Object,
    title: Array,
    text: Array,
  });
  </script>