<template>
  <div
    class="flex flex-1 flex-col rounded-lg bg-white/10 shadow-[inset_0px_0px_10px_10px_rgba(255,255,255,0.1)]"
  >
    <div class="flex flex-col gap-1 p-4 2xl:gap-4 2xl:p-5">
      <div class="flex flex-row items-start gap-2 md:flex-col 2xl:flex-row">
        <img
          class="m-0 h-[40px] -translate-x-2 p-0 md:h-[70px] 2xl:h-[80px]"
          src="/svg/paper.svg"
          alt=""
        />
        <div
          class="mb-1 flex items-center text-[17px] font-bold leading-6 sm:text-[18px] 2xl:self-center 2xl:text-[20px]"
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
