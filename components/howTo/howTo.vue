<template>
    <section class="c-how-to">
      <span class="c-how-to__tag">
        {{ tag }}
      </span>
  
      <h2 class="c-how-to__title">
        {{ title }}
      </h2>
  
      <div class="c-how-to__list">
        <div :class="['c-how-to__item']" v-for="(item,index) in items" :key="index">
            <HowToItem :title="item.how_to_title" :text="item.how_to_texte" :image="item.how_to_image" :inversé="isOdd(index)"/>
        </div>
        <img class="c-how-to__list__img" src="/vector1.png" alt="">
        <img class="c-how-to__list__imgR" src="/vector2.png" alt="">
      </div>
    </section>
  </template>
  
  <style lang="scss" scoped>
.c-how-to{
    &__tag{
    display: block;
    font-size: $normal_font_size;
    color: $primary-color;
    margin-bottom: 1rem;
    text-align: center;
    margin: rem(30) rem(0) rem(0) rem(0);
}    
    &__title{
    font-size: $big-font-size;
    font-weight: 700;
    text-align: center;
    margin-bottom: rem(30);
}
    &__list{
        display: flex;
        flex-flow: row wrap;
        position: relative;
        &__img{
            position: absolute;
            top: 9%;
            left: 15%;
            width: 28%;
            height: 60%;
        }
        &__imgR{
            position: absolute;
            top: 9%;
            right: 14%;
            width: 29%;
            height: 60%;
        }
    }
    &__item{
        flex: 1;
    }
}

</style>
  <script setup="">
  const props = defineProps({
    title: String,
    items: Array,
    tag: String,
  });
  
  const isOdd = (index) =>{
    return index % 2 !== 0;
}
  </script>