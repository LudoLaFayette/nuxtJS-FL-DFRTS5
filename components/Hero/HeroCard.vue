<script setup>
const props = defineProps({
    item: Array
})
</script>

<template>
    <div class="grid">
        <div v-for="item in item">
            <HeroCardItem :image="item.item_image" :title="item.item_title" :text="item.item_text" :price="item.item_price"/>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .grid{
        display: grid;
        grid-template-columns: repeat(2, 280px);
    }
</style>