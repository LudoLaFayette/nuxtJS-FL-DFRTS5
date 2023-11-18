<script setup>


const props = defineProps({
    title: Array,
    text: Array,
    buttons: Array,
})
const env = useRuntimeConfig()
const { data: recipes } = await useAsyncData('recipes', async () => {
    return $fetch(env.public.apiUrl + '/recipes')
})
const { client } = usePrismic()
const { data: home, error } = await useAsyncData('home', () => client.getSingle("homepage"))
console.log(recipes)
</script>

<template>
    <div>
        <div>
            <PrismicRichText class="c-text" :field="home.data.recipetitle_main"></PrismicRichText>
            <PrismicRichText class="c-title" :field="home.data.recipetitle_secondary"></PrismicRichText>
        </div>
        <div class="recipes-list">
            <div v-for="recipe in recipes">
                <RecipeCardItem v-bind="{ id:recipe.recipe_id, title: recipe.recipe_name, description: recipe.recipe_description, image: recipe.image_url}" />
            </div>
        </div>
        <div class="button">
            <myButton size="medium" variant="rounded" hasIcon="true" sizeText="small">See more products</myButton>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.c-text {
    display: flex;
    justify-content: center;
    color: $primary-color;
    margin-top: rem(130);
    font-size: $normal_font_size;
}

.c-title {
    display: flex;
    justify-content: center;
    font-size: $big_font_size;
    margin-top: rem(10);
    margin-bottom: rem(40);
    font-weight: 700;
}

.recipes-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    place-items: center;
    gap: rem(40);
}
.button{
    margin-top: rem(50);
    text-align: center;
}
</style>