<script setup>
//Appel des données de l'API avec Nancy
const env = useRuntimeConfig()
const { data: recipes } = await useAsyncData('recipes', () => {
  return $fetch(env.public.apiUrl + '/recipes')
})
import { usePrismic } from "@prismicio/vue";
const { client } = usePrismic()
const { data: home, error } = await useAsyncData('home', () => client.getSingle("homepage"))

if (!home.value || error.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "la page d\accueil est introuvable",
  });
}


useSeoMeta({
  title: home.value.data.meta_title,
  ogTitle: home.value.data.meta_title,
  description: home.value.data.meta_description,
  ogDescription: home.value.data.meta_description,
  ogImage: home.value.data.meta_image,
})
</script>

<template >

<div class="b-index">


<Hero :title="home.data.hero_title" :text="home.data.hero_text" :buttons="home.data.hero_button" />

<div>
  <Information :information="home.data.information" />
</div>
<RecipeCard></RecipeCard>

<myServices :services="home.data.services"></myServices>


<div>
  <HowTo
    v-bind="{
      tag: 'How to',
      title: 'Food Us An Important Part Of A Balanced Diet ',
      items: home.data.how_to,
    }"
  />
  </div>

  <MyTestimonials :testimonials="home.data.testimonials"/>

<MyNewsletter></MyNewsletter>
</div>

</template>
<style lang='scss'>
.b-index{
  margin: rem(15) rem(60);
}
</style>
