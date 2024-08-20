<template>
    <div class="grid grid-cols-[50px_1fr] gap-4">
      <button @click="item.showAnswer = !item.showAnswer">
        <img v-if="!item.showAnswer" src="/public/svg/plus.svg" alt="+" />
        <img v-else src="/public/svg/minus.svg" alt="-" />
      </button>
      <div class="text-2xl font-bold">
        {{ item.question }}
      </div>
    </div>
    <div v-if="item.showAnswer" class="mt-4 pl-14 text-lg font-normal">
      {{ item.answer }}
    </div>
  </template>
  
  <script>
  export default {
    props: ["item"], 
  };
  </script>
  