<template>
  <div
    @wheel.prevent
    @touchmove.prevent
    @scroll.prevent
    class="fixed top-0 z-50 flex h-0 w-screen flex-col gap-y-7 overflow-hidden bg-gradient-to-b from-[rgba(80,87,167,0.9)] to-[rgba(42,20,107,0.9)] text-white backdrop-blur-sm transition-[height] duration-500 ease-in md:flex-row"
    :class="{
      '-my-0 h-screen': isMenuVisible,
    }"
  >
    <button
      @click="isMenuVisible = false"
      class="absolute right-[3vw] top-[3vw] z-10 h-[30px] w-[30px] bg-[url('/svg/close.svg')] bg-contain bg-no-repeat"
    ></button>
    <div
      class="flex flex-col items-center p-4 xs:items-start md:my-4 md:justify-between md:border-r-2 md:px-8 md:py-6 md:pr-[5vw] 2xl:px-14 2xl:py-10"
    >
      <div
        class="grid w-fit grid-cols-[1fr_4fr] items-center gap-2 rounded-xl bg-[#0B0B18] p-4 xl:p-8"
      >
        <img class="w-full" src="/public/svg/logo.svg" alt="" />
        <div class="flex flex-col items-start gap-y-2 text-white">
          <div class="text-3xl font-black xl:text-6xl">
            <span class="text-purple-light">PP</span>-сервис
          </div>
          <div class="text-2xl md:text-xl xl:text-3xl">Оклейка автомобилей</div>
        </div>
      </div>
      <div class="mt-4 flex w-full justify-between md:flex-col md:gap-7">
        <div class="flex items-center gap-3">
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
      class="flex flex-col p-4 text-base font-black md:px-8 md:py-6 md:pl-[5vw] md:text-2xl lg:text-3xl 2xl:px-14 2xl:py-10"
    >
      <a
        href="#whatYouWant"
        @click="isMenuVisible = false"
        class="border-white/20 from-white/5 to-white/10 py-2 text-left uppercase hover:bg-gradient-to-b md:border-0 md:py-4 md:hover:bg-none"
      >
        Что вам нужно?
      </a>
      <a
        href="#whyUs"
        @click="isMenuVisible = false"
        class="border-t-[0.1px] border-white/20 from-white/5 to-white/10 py-2 text-left uppercase hover:bg-gradient-to-b md:border-0 md:py-4 md:hover:bg-none"
      >
        Почему мы?
      </a>
      <a
        href="#whereToOrder"
        @click="isMenuVisible = false"
        class="border-t-[0.1px] border-white/20 from-white/5 to-white/10 py-2 text-left uppercase hover:bg-gradient-to-b md:border-0 md:py-4 md:hover:bg-none"
      >
        где заказать оклейку?
      </a>
      <a
        href="#materials"
        @click="isMenuVisible = false"
        class="border-t-[0.1px] border-white/20 from-white/5 to-white/10 py-2 text-left uppercase hover:bg-gradient-to-b md:border-0 md:py-4 md:hover:bg-none"
      >
        С какой плёнкой мы работаем?
      </a>
      <a
        href="#projects"
        @click="isMenuVisible = false"
        class="border-t-[0.1px] border-white/20 from-white/5 to-white/10 py-2 text-left uppercase hover:bg-gradient-to-b md:border-0 md:py-4 md:hover:bg-none"
      >
        Знаковые проекты
      </a>
      <a
        href="#salon"
        @click="isMenuVisible = false"
        class="border-t-[0.1px] border-white/20 from-white/5 to-white/10 py-2 text-left uppercase hover:bg-gradient-to-b md:border-0 md:py-4 md:hover:bg-none"
      >
        оклейка салона
      </a>
      <a
        href="#faq"
        @click="isMenuVisible = false"
        class="border-t-[0.1px] border-white/20 from-white/5 to-white/10 py-2 text-left uppercase hover:bg-gradient-to-b md:border-0 md:py-4 md:hover:bg-none"
      >
        Вопрос-ответ
      </a>
      <a
        href="#reviews"
        @click="isMenuVisible = false"
        class="border-t-[0.1px] border-white/20 from-white/5 to-white/10 py-2 text-left uppercase hover:bg-gradient-to-b md:border-0 md:py-4 md:hover:bg-none"
      >
        Отзывы
      </a>
      <a
        href="#contacts"
        @click="isMenuVisible = false"
        class="border-t-[0.1px] border-white/20 from-white/5 to-white/10 py-2 text-left uppercase hover:bg-gradient-to-b md:border-0 md:py-4 md:hover:bg-none"
      >
        Контакты
      </a>
    </div>
  </div>
</template>
<script></script>
