<script setup>
import { useGlobalStore } from '@/stores/global.js';
const store = useGlobalStore();
console.log(store);
</script>

<template>
  <header class="c-header">
    Le header
    <div class="c-header_count" @click="store.increment">
        {{ store.count }}
    {{ store.foo }}
    </div>

  </header>

</template>

<style lang="scss">
.c-header {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    color: white;
    font-size: 24px;
}
</style>