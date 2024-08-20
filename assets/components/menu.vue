<template>
  <div
    class="overflow-hidden overflow-y-auto fixed transition-[height] top-0 duration-500 ease-in h-0 text-white w-screen backdrop-blur-sm z-50 bg-gradient-to-b from-[rgba(80,87,167,0.9)] to-[rgba(42,20,107,0.9)] flex flex-col gap-y-7 md:flex-row"
    :class="{
      'h-screen -my-0': isMenuVisible,
    }"
  >
    <button
      @click="$emit('close')"
      class="absolute top-[3vw] right-[3vw] h-[30px] w-[30px] z-10 bg-[url('/svg/close.svg')] bg-contain bg-no-repeat"
    ></button>
    <div
      class="p-4 md:py-6 md:px-8 2xl:px-14 2xl:py-10 md:my-4 md:border-r-2 md:pr-[5vw] flex flex-col items-center xs:items-start md:justify-between"
    >
      <div
        class="grid grid-cols-[1fr_4fr] p-4 xl:p-8 gap-2 w-fit rounded-xl bg-[#0B0B18] items-center"
      >
        <img class="w-full" src="/svg/logo.svg" alt="" />
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
        @click="$emit('close'), $emit('scrollToSection', 'whatYouWant')"
        class="uppercase py-2 md:py-4 text-left border-white/20 hover:bg-gradient-to-b from-white/5 to-white/10 md:hover:bg-none md:border-0 hover:cursor-pointer"
      >
        Что вам нужно?
      </a>
      <a
        @click="$emit('close'), $emit('scrollToSection', 'whyUs')"
        class="uppercase py-2 md:py-4 text-left border-white/20 border-t-[0.1px] hover:bg-gradient-to-b from-white/5 to-white/10 md:hover:bg-none md:border-0 hover:cursor-pointer"
      >
        Почему мы?
      </a>
      <a
        @click="$emit('close'), $emit('scrollToSection', 'whereToOrder')"
        class="uppercase py-2 md:py-4 text-left border-white/20 border-t-[0.1px] hover:bg-gradient-to-b from-white/5 to-white/10 md:hover:bg-none md:border-0 hover:cursor-pointer"
      >
        где заказать оклейку?
      </a>
      <a
        @click="$emit('close'), $emit('scrollToSection', 'materials')"
        class="uppercase py-2 md:py-4 text-left border-white/20 border-t-[0.1px] hover:bg-gradient-to-b from-white/5 to-white/10 md:hover:bg-none md:border-0 hover:cursor-pointer"
      >
        С какой плёнкой мы работаем?
      </a>
      <a
        @click="$emit('close'), $emit('scrollToSection', 'projects')"
        class="uppercase py-2 md:py-4 text-left border-white/20 border-t-[0.1px] hover:bg-gradient-to-b from-white/5 to-white/10 md:hover:bg-none md:border-0 hover:cursor-pointer"
      >
        Знаковые проекты
      </a>
      <a
        @click="$emit('close'), $emit('scrollToSection', 'salon')"
        class="uppercase py-2 md:py-4 text-left border-white/20 border-t-[0.1px] hover:bg-gradient-to-b from-white/5 to-white/10 md:hover:bg-none md:border-0 hover:cursor-pointer"
      >
        оклейка салона
      </a>
      <a
        @click="$emit('close'), $emit('scrollToSection', 'faq')"
        class="uppercase py-2 md:py-4 text-left border-white/20 border-t-[0.1px] hover:bg-gradient-to-b from-white/5 to-white/10 md:hover:bg-none md:border-0 hover:cursor-pointer"
      >
        Вопрос-ответ
      </a>
      <a
        @click="$emit('close'), $emit('scrollToSection', 'reviews')"
        class="uppercase py-2 md:py-4 text-left border-white/20 border-t-[0.1px] hover:bg-gradient-to-b from-white/5 to-white/10 md:hover:bg-none md:border-0 hover:cursor-pointer"
      >
        Отзывы
      </a>
      <a
        @click="$emit('close'), $emit('scrollToSection', 'contacts')"
        class="uppercase py-2 md:py-4 text-left border-white/20 border-t-[0.1px] hover:bg-gradient-to-b from-white/5 to-white/10 md:hover:bg-none md:border-0 hover:cursor-pointer"
      >
        Контакты
      </a>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    isMenuVisible: Boolean,
    navbarHeight: Number,
  },
};
</script>
