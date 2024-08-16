<template>
  <div
    class="overflow-hidden fixed transition-[height] top-0 duration-500 ease-in h-0 text-white w-screen backdrop-blur-sm z-50 bg-gradient-to-b from-[rgba(80,87,167,0.9)] to-[rgba(42,20,107,0.9)] flex flex-col gap-y-7 md:flex-row"
    :class="{
      'h-screen -my-0': isMenuVisible,
    }"
  >
    <button
      @click="isMenuVisible = false"
      class="absolute top-[3vw] right-[3vw] h-[30px] w-[30px] z-10 bg-[url('/svg/close.svg')] bg-contain bg-no-repeat"
    ></button>
    <div
      class="p-4 md:py-6 md:px-8 2xl:px-14 2xl:py-10 md:my-4 md:border-r-2 md:pr-[5vw] flex flex-col items-center xs:items-start md:justify-between"
    >
      <div
        class="grid grid-cols-[1fr_4fr] p-4 xl:p-8 gap-2 w-fit rounded-xl bg-[#0B0B18] items-center"
      >
        <img class="w-full" src="/public/svg/logo.svg" alt="" />
        <div class="flex flex-col gap-y-2 items-start text-white">
          <div class="text-3xl font-black xl:text-6xl">
            <span class="text-purple-light">PP</span>-сервис
          </div>
          <div class="text-2xl md:text-xl xl:text-3xl">Оклейка автомобилей</div>
        </div>
      </div>
      <div class="flex justify-between w-full mt-4 md:flex-col md:gap-7">
        <div class="items-center gap-3 flex">
          <img class="h-[45px]" src="/svg/phone-thin.svg" alt="" />
          <a
            href="tel:+7-495-499-88-22"
            class="text-lg font-black lg:text-2xl xl:text-3xl"
            >+7-495-499-88-22</a
          >
        </div>
        <div class="flex items-center gap-4">
          <a href="#">
            <img
              class="md:w-[50px]"
              src="/svg/whatsapp-small.svg"
              alt="whatsapp"
            />
          </a>
          <a href="#">
            <img
              class="md:w-[50px]"
              src="/svg/telegram-small.svg"
              alt="telegram"
            />
          </a>
        </div>
      </div>
    </div>
    <div
      class="p-4 md:py-6 md:px-8 2xl:px-14 2xl:py-10 flex flex-col font-black text-base md:text-2xl md:pl-[5vw] lg:text-3xl"
    >
      <a
        href="#whatYouWant"
        @click="isMenuVisible = false"
        class="uppercase py-2 md:py-4 text-left border-white/20 hover:bg-gradient-to-b from-white/5 to-white/10 md:hover:bg-none md:border-0"
      >
        Что вам нужно?
      </a>
      <a
        href="#whyUs"
        @click="isMenuVisible = false"
        class="uppercase py-2 md:py-4 text-left border-white/20 border-t-[0.1px] hover:bg-gradient-to-b from-white/5 to-white/10 md:hover:bg-none md:border-0"
      >
        Почему мы?
      </a>
      <a
        href="#whereToOrder"
        @click="isMenuVisible = false"
        class="uppercase py-2 md:py-4 text-left border-white/20 border-t-[0.1px] hover:bg-gradient-to-b from-white/5 to-white/10 md:hover:bg-none md:border-0"
      >
        где заказать оклейку?
      </a>
      <a
        href="#materials"
        @click="isMenuVisible = false"
        class="uppercase py-2 md:py-4 text-left border-white/20 border-t-[0.1px] hover:bg-gradient-to-b from-white/5 to-white/10 md:hover:bg-none md:border-0"
      >
        С какой плёнкой мы работаем?
      </a>
      <a
        href="#projects"
        @click="isMenuVisible = false"
        class="uppercase py-2 md:py-4 text-left border-white/20 border-t-[0.1px] hover:bg-gradient-to-b from-white/5 to-white/10 md:hover:bg-none md:border-0"
      >
        Знаковые проекты
      </a>
      <a
        href="#salon"
        @click="isMenuVisible = false"
        class="uppercase py-2 md:py-4 text-left border-white/20 border-t-[0.1px] hover:bg-gradient-to-b from-white/5 to-white/10 md:hover:bg-none md:border-0"
      >
        оклейка салона
      </a>
      <a
        href="#faq"
        @click="isMenuVisible = false"
        class="uppercase py-2 md:py-4 text-left border-white/20 border-t-[0.1px] hover:bg-gradient-to-b from-white/5 to-white/10 md:hover:bg-none md:border-0"
      >
        Вопрос-ответ
      </a>
      <a
        href="#reviews"
        @click="isMenuVisible = false"
        class="uppercase py-2 md:py-4 text-left border-white/20 border-t-[0.1px] hover:bg-gradient-to-b from-white/5 to-white/10 md:hover:bg-none md:border-0"
      >
        Отзывы
      </a>
      <a
        href="#contacts"
        @click="isMenuVisible = false"
        class="uppercase py-2 md:py-4 text-left border-white/20 border-t-[0.1px] hover:bg-gradient-to-b from-white/5 to-white/10 md:hover:bg-none md:border-0"
      >
        Контакты
      </a>
    </div>
  </div>
  <nav
    id="navbar"
    class="relative top-0 z-40 flex items-center justify-between px-[20px] py-6 sm:py-6 md:px-[30px] xl:px-[4vw]"
    :class="{
      'bg-gradient-to-b backdrop-blur-sm from-black/80 via-black/70 to-black/35 sticky':
        isSticky,
        // 'relative': !isSticky,
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
        @click="isMenuVisible = true"
        class="border-purple-light ] flex h-fit items-center gap-2 self-center rounded-full border bg-transparent px-[1.5625vw] py-[calc(1px+1.5625vw)] md:py-2"
      >
        <img src="/svg/menu.svg" alt="" class="w-[21px]" />
        <div class="hidden md:block text-lg text-white">Меню</div>
      </button>
    </div>
    <div class="flex gap-2 lg:gap-[6vw]">
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
  </nav>

  <header>
    <AboutUs></AboutUs>
  </header>

  <section id="whatYouWant">
    <WhatYouWant></WhatYouWant>
  </section>

  <section id="whyUs">
    <WhyUs></WhyUs>
  </section>

  <section id="whereToOrder">
    <WhereToOrder></WhereToOrder>
  </section>

  <section id="materials">
    <Materials></Materials>
  </section>

  <section id="projects">
    <Projects></Projects>
  </section>
  <section id="salon">
    <Salon></Salon>
  </section>

  <section id="faq">
    <Faq></Faq>
  </section>

  <section id="reviews">
    <Reviews></Reviews>
  </section>

  <footer id="contacts">
    <Contacts></Contacts>
  </footer>
</template>

<script>
import { withMemo } from "vue";
import AboutUs from "./assets/components/about-us.vue";
import ContactButtons from "./assets/components/contact-buttons.vue";
import Contacts from "./assets/components/contacts.vue";
import Faq from "./assets/components/faq.vue";
import InfoCard from "./assets/components/info-card.vue";
import Materials from "./assets/components/materials.vue";
import Projects from "./assets/components/projects.vue";
import Reviews from "./assets/components/reviews.vue";
import Salon from "./assets/components/salon.vue";
import ServiceCard from "./assets/components/service-card.vue";
import WhatYouWant from "./assets/components/what-you-want.vue";
import WhereToOrder from "./assets/components/where-to-order.vue";
import WhyUs from "./assets/components/why-us.vue";
export default {
  components: {
    Faq,
    Projects,
    Salon,
    AboutUs,
    InfoCard,
    ServiceCard,
    ContactButtons,
    WhatYouWant,
    WhereToOrder,
    WhyUs,
    Materials,
    Reviews,
    Contacts,
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  },
  data() {
    return {
      selectedOption: "option1",
      shipmentOption: "option1",
      company: "llumar",
      isMenuVisible: false,
      isSticky: false,
    };
  },
  methods: {
    onScroll(e) {
      // const navbar = document.getElementById("navbar");
      // const navbarPos = navbar.offsetTop;
      const windowTop = window.scrollY;

      this.isSticky = windowTop > 0;
    },
  },
};
</script>
