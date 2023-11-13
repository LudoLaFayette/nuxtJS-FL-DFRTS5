<template>
    <!-- Ajouter les composents header/aside/footer si crée indépendamment -->
    <main class="layout">
    <div class="layout__header">
      <Header />
    </div>
    <aside class="layout__aside">
      <slot name="aside"></slot>
    </aside>
    <article class="layout__article">
      <NuxtPage />
    </article>
    <div class="layout__footer">
      <Footer />
    </div>
  </main>
</template>
<script></script>
<style lang="scss" scoped>
.layout {
  display: grid;
  grid-template:
    'header'
    'article'
    'aside'
    'footer';

  @include medium-up {
    grid-template:
      'header header header'
      'article article aside'
      'footer footer footer';
  }

  > * {
    padding: rem(0);
  }
  &__article {
    grid-area: article;
  }
  &__aside {
    grid-area: aside;
  }
  &__footer {
    grid-area: footer;
  }
  &__header {
    grid-area: header;
  }
}
</style>