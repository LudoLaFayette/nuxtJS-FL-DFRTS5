<script setup>
import { useGlobalStore } from '@/store/global'
const store = useGlobalStore()

onMounted(() => {
  const cart = localStorage.getItem('cart')
  store.setCart(JSON.parse(cart))
})
</script>

<template>
  <div>
    <Header />
    <div class="appmain">

      <NuxtPage />
      <Footer />
    </div>
  </div>
</template>

<style lang="scss" >
@import '@/scss/main';
.appmain {
  overflow: hidden;
}
</style>
