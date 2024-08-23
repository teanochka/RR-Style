<template>
  <header
    id="navbar"
    class="relative top-0 z-40 text-white"
    :class="{
      'sticky bg-gradient-to-b from-black/80 via-black/70 to-black/35 backdrop-blur-sm':
        isSticky,
    }"
  >
    <div
      class="flex items-center justify-between px-[20px] py-6 sm:py-6 md:px-[30px] xl:px-[4vw]"
    >
      <div class="flex flex-row-reverse gap-4 md:flex-row lg:gap-[6vw]">
        <div class="grid grid-cols-[1fr_4fr] items-center">
          <img
            loading="lazy"
            class="col-start-1 h-[80%]"
            src="/public/svg/logo.svg"
            alt=""
          />
          <div class="col-start-2 flex flex-col items-start text-white">
            <div class="text-2xl font-black sm:text-3xl">
              <span class="text-purple-light">PP</span>-сервис
            </div>
            <div class="text-sm sm:text-base">Оклейка автомобилей</div>
          </div>
        </div>
        <button
          @click="(isMenuVisible = true), stopScroll()"
          class="flex h-fit items-center gap-2 self-center rounded-full border border-purple-light bg-transparent px-[1.5625vw] py-[calc(1px+1.5625vw)] md:py-2"
        >
          <img loading="lazy" src="/svg/menu.svg" alt="" class="w-[21px]" />
          <div class="hidden text-lg md:block">Меню</div>
        </button>
      </div>
      <div class="flex gap-[2.5vw] lg:gap-[6vw]">
        <div class="flex gap-[2.5vw] self-center">
          <a href="#">
            <img loading="lazy" src="/svg/whatsapp-small.svg" alt="" />
          </a>
          <a href="#">
            <img
              loading="lazy"
              class="translate-y-1"
              src="/svg/telegram-small.svg"
              alt=""
            />
          </a>
        </div>
        <div class="hidden items-center gap-3 sm:flex">
          <img
            loading="lazy"
            class="h-[20px] md:h-[30px]"
            src="/svg/phone.svg"
            alt=""
          />
          <a
            href="tel:+7-495-499-88-22"
            class="text-lg font-black lg:text-2xl xl:text-3xl"
            >+7-495-499-88-22</a
          >
        </div>
      </div>
    </div>
    <Menu
      :navbarHeight="navbarHeight"
      :isMenuVisible="isMenuVisible"
      @close="(isMenuVisible = false), stopScroll()"
      @scrollToSection="scrollToSection"
    />
  </header>
</template>
<script>
import Menu from "./assets/components/menu.vue";
export default {
  components: {
    Menu,
  },
  data() {
    return {
      navbarHeight: 10,
      isSticky: false,
      isMenuVisible: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll(e) {
      const windowTop = window.scrollY;

      this.isSticky = windowTop > 0;
    },
    stopScroll() {
      if (this.isMenuVisible) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    },
  },
  // inject: ["scrollToSection"],
};
</script>
