<script setup>
//Appel des données de l'API avec Nancy
const env = useRuntimeConfig()
const { data: recipes } = await useAsyncData('recipes', () => {
  return $fetch(env.public.apiUrl + '/recipes')
})

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

<template>


<Hero :title="home.data.hero_title" :text="home.data.hero_text" :buttons="home.data.hero_button" />


<!-- <div v-for="recipe in recipes">
            <RecipeCard v-bind="{ id: recipe.recipe_id, title: recipe.recipe_name, description: recipe.recipe_description, image: recipe.image_url}" />
    </div> -->
<div>
  <Information :information="home.data.information" />
</div>
<div>
  <HowTo
    v-bind="{
      tag: 'How to',
      title: 'Food Us An Important Part Of A Balanced Diet ',
      items: home.data.how_to,
    }"
  />
  </div>

</template>
<style lang='scss'>

</style>
