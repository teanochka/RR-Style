<template>
  <img
    loading="lazy"
    class="absolute left-0 top-0 z-0 w-[25%] md:w-[22%] lg:h-auto lg:w-[62%]"
    src="/public/svg/logo-dark.svg"
    alt=""
  />
  <div
    class="relative z-10 grid grid-cols-[2fr_3fr] gap-x-[5%] gap-y-[4%] pl-[calc(10px+1.4vw)] pt-[calc(10px+1.4vw)] sm:gap-x-6 md:grid-cols-[2fr_4fr] lg:grid-cols-1"
  >
    <img loading="lazy" :src="image" :alt="title" />
    <div>
      <h3>{{ title }}</h3>
      <div class="text-[17px my-5 font-normal xl:text-2xl">
        {{ description }}
      </div>
      <div class="text-lg font-normal text-[#999999]">
        {{ date }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["image", "title", "description", "date"],
};
</script>
