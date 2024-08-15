<template>
  <div
    class="flex-1 flex flex-col rounded-lg bg-white/10 shadow-[inset_0px_0px_10px_10px_rgba(255,255,255,0.1)]"
  >
    <div class="flex flex-col xl:gap-1 2xl:gap-4 xl:p-4 2xl:p-5">
      <div class="flex flex-row md:flex-col 2xl:flex-row items-start gap-2">
        <img
          class="-translate-x-2 h-[40px] xl:h-[70px] 2xl:h-[80px] p-0 m-0"
          src="/svg/paper.svg"
          alt=""
        />
        <div
          class="flex 2xl:self-center items-center font-bold text-[17px] sm:text-lg 2xl:text-xl"
        >
          {{ title }}
        </div>
      </div>
      <div class="text-[15px] 2xl:text-base">{{ info }}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["title", "info"],
};
</script>
