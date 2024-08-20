<template>
  <header
    id="navbar"
    class="relative top-0 z-40 flex items-center text-white justify-between px-[20px] py-6 sm:py-6 md:px-[30px] xl:px-[4vw]"
    :class="{
      'bg-gradient-to-b backdrop-blur-sm from-black/80 via-black/70 to-black/35 sticky':
        isSticky,
    }"
  >
    <div class="flex flex-row-reverse gap-4 md:flex-row lg:gap-[6vw]">
      <div class="grid grid-cols-[1fr_4fr] items-center">
        <img class="col-start-1 h-[80%]" src="/public/svg/logo.svg" alt="" />
        <div class="col-start-2 flex flex-col items-start text-white">
          <div class="text-2xl font-black sm:text-3xl">
            <span class="text-purple-light">PP</span>-сервис
          </div>
          <div class="text-sm sm:text-base">Оклейка автомобилей</div>
        </div>
      </div>
      <button
        @click="$emit('toggleMenu')"
        class="border-purple-light ] flex h-fit items-center gap-2 self-center rounded-full border bg-transparent px-[1.5625vw] py-[calc(1px+1.5625vw)] md:py-2"
      >
        <img src="/svg/menu.svg" alt="" class="w-[21px]" />
        <div class="hidden md:block text-lg">Меню</div>
      </button>
    </div>
    <div class="flex gap-[2.5vw] lg:gap-[6vw]">
      <div class="flex gap-[2.5vw] self-center">
        <a href="#">
          <img src="/svg/whatsapp-small.svg" alt="" />
        </a>
        <a href="#">
          <img class="translate-y-1" src="/svg/telegram-small.svg" alt="" />
        </a>
      </div>
      <div class="hidden items-center gap-3 sm:flex">
        <img class="h-[20px] md:h-[30px]" src="/svg/phone.svg" alt="" />
        <a
          href="tel:+7-495-499-88-22"
          class="text-lg font-black lg:text-2xl xl:text-3xl"
          >+7-495-499-88-22</a
        >
      </div>
    </div>
  </header>
</template>
<script>
export default {
  props: {
    isMenuVisible: Boolean,
    isSticky: Boolean,
    stopScroll: Function,
  },
  methods: {
    toggleMenu() {
      this.$emit("toggleMenu");
    },
  },
  mounted() {
    this.$emit('navbarHeight', document.getElementById("navbar").offsetHeight); 
    this.temp=document.getElementById("navbar").offsetHeight;
  }
};
</script>
