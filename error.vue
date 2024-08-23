<script setup lang="ts">

const props = defineProps<{
  error: Error & { statusCode?: number };
}>();

</script>

<template>
  <div>
    <h1>{{ error.statusCode }}</h1>
    <NuxtLink to="/">Go back home</NuxtLink>
  </div>
</template>
