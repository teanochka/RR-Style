<template>
  <div class="grid grid-cols-[50px_1fr] gap-2 md:gap-4">
    <button @click="item.showAnswer = !item.showAnswer">
      <img
        loading="lazy"
        v-if="!item.showAnswer"
        src="/public/svg/plus.svg"
        alt="+"
      />
      <img loading="lazy" v-else src="/public/svg/minus.svg" alt="-" />
    </button>
    <div class="text-[20px] font-bold md:text-2xl">
      {{ item.question }}
    </div>
  </div>
  <div
    v-if="item.showAnswer"
    class="mt-4 pl-14 text-[16px] font-normal md:text-lg"
  >
    {{ item.answer }}
  </div>
</template>

<script>
export default {
  props: ["item"],
};
</script>
