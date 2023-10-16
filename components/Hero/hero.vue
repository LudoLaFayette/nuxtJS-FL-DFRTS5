
<script setup="">
const props = defineProps({
    title: Array,
    text: Array,
    buttons: Array,
})
</script>

<template>
   <section class="c-hero">
        <div class="c-hero__title">
            <PrismicRichText :field="title"/>
        </div>
        <div class="c-hero__text">
            <PrismicRichText :field="text"/>
        </div>
        <div class="c-hero__button">
            <PrismicRichText v-for="button in buttons">{{ home.data.hero_button }}</PrismicRichText>
        </div>
   </section>
 </template>

<style lang="scss" >

.c-hero{
    &__title{
        line-height: 1.2;
        font-size: 40px;
        color: black;
        font-weight: 700;
        strong{
        color: orange;
    }
    }
    
}
</style>