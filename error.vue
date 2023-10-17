<script setup>
const props = defineProps({
    error: Object,
})
</script>

<template>
    <div class="p-error">
        page erreur bizarre
        {{ error }}
    </div>
</template>

<style lang="scss"></style>