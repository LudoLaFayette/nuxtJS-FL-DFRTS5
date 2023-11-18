<script setup>
const props = defineProps({
  services: Array,
});
const { client } = usePrismic()
const { data: home, error } = await useAsyncData('home', () => client.getSingle("homepage"))
</script>

<template>
  <div class="c-Service">
    <PrismicRichText class="c-Service__tag" :field="home.data.servicestitle_main"></PrismicRichText>
    <PrismicRichText class="c-Service__title" :field="home.data.servicestitle_secondary"></PrismicRichText>
  </div>
  <section class="c-Services">
    <div v-for="item in services" class="c-Services__item">
      <div class="c-Services__icon">
        <img :src="`/icon/${item.services_icon}.svg`" alt="" />
      </div>
      <div class="c-Services__title">
        <PrismicRichText :field="item.services_title" />
      </div>
      <div class="c-Services__text">
        <PrismicRichText :field="item.services_text" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.c-Service {
  margin: rem(70) rem(0);
  &__tag {
    display: block;
    font-size: $normal_font_size;
    color: $primary-color;
    margin-bottom: 1rem;
    text-align: center;
    margin: rem(30) rem(0) rem(0) rem(0);
  }
  &__title {
    font-size: $big-font-size;
    font-weight: 700;
    text-align: center;
    margin-bottom: rem(30);
  }
}
.c-Services {
  display: flex;
  justify-content: center;
  gap: rem(30);
  margin: rem(70) rem(0);

  &__item {
    border-radius: rem(10);
    border: $grey solid rem(1);
    display: flex;
    padding: rem(45);

    flex-direction: column;
    // justify-content: center;
    align-items: center;
    transition: 0.3s ease-in-out;
    &:hover {
      transform: scale(1.1);
      background-color: #ffffff;
      border: rem(1) solid #b6b6b6;
    }
  }
  &__icon {
    margin-bottom: rem(20);
    background-color: $secondary-color;
    border-radius: 50%;
    height: rem(30);
    padding: rem(10);
    width: rem(30);
  }
  &__title {
    font-size: $tiny_font_size;
    font-weight: 700;
    margin-bottom: rem(20);
  }
  &__text {
    font-size: $normal_font_size;
    font-weight: 400;
    text-align: center;
  }
}
</style>