
<script setup="">
const env = useRuntimeConfig()
const props = defineProps({
    title: Array,
    text: Array,
    buttons: Array,
})
const { data: recipes } = await useAsyncData('recipes', async () => {
  return $fetch(env.public.apiUrl + '/recipes')
})
// onMounted(async () => {
//   await getRecipes()
// })
</script>

<template>
   <section class="c-hero">
        <div class="c-hero__title">
            <PrismicRichText :field="title"/>
        </div>
        <div class="c-hero__text">
            <PrismicRichText :field="text"/>
        </div>
        <div  class="c-hero__button">
            <div v-for="button in buttons">
            <!-- <myButton  v-if="button.button_type === 'default'" class="c-button__button -default">
                <a :href="button.button_link.url">{{ button.button_label }}</a>
            </myButton>
            
                <myButton v-else="button.button_type === 'video'" :size="small" :variant="rounded" :hasIcon="true" class="c-hero__button -video">
                <myIcon :name="chevronRight" />
                <a :href="button.button_link.url">{{ button.button_label }}</a>
            </myButton>   -->
            <myButton :href="button.button_link.url" :variant="button.button_type" :hasIcon="true">{{ button.button_label }}
            <myIcon ></myIcon></myButton>
                      
        </div>
        <!-- {{ recipes }} -->
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