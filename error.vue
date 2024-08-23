<script setup lang="ts">
const props = defineProps<{
  error: Error & { statusCode?: number };
}>();
</script>

<template>
  <div class="flex h-screen flex-col justify-between">
    <NuxtLayout>
      <div
        class="flex w-screen flex-col items-center justify-center gap-y-[1vw] text-white"
      >
        <h1 class="text-[60px] font-black">
          Ошибка
          <span
            class="bg-gradient-to-b from-purple-dark to-purple-light bg-clip-text text-transparent"
            >{{ error.statusCode }}</span
          >
        </h1>
        <NuxtLink
          class="rounded-full border border-purple-light bg-transparent px-4 py-2 text-[20px] hover:bg-gradient-to-b hover:from-transparent hover:to-purple-light/20"
          to="/"
          >Вернуться на главную</NuxtLink
        >
      </div>
    </NuxtLayout>
  </div>
</template>
