<template>
  <button>
    test
  </button>
  <button>
    {{ label }}
  </button>
</template>

<script lang="ts">
  export default {
    props: {
        label: {
            type: String,
        }
    }
  }
</script>
