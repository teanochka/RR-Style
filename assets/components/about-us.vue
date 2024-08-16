<template>
  <div
    class="absolute flex justify-end overflow-hidden w-full h-[calc(220px+12vw)] sm:h-[calc(350px+3vw)] lg:h-[calc(320px+15vw)] xl:h-[calc(450px+15vw)] 2xl:bg-right bg-no-repeat bg-[url('/img/car-light.png')] bg-cover 2xl:bg-contain top-0"
  >
    <img
      src="/public/img/car-and-roll.png"
      class="w-[80vw] sm:w-[68vw] lg:w-[64vw] 2xl:w-auto self-end z-10 translate-x-[15%] sm:translate-x-0 lg:translate-x-[6%] xl:translate-x-[8%] 2xl:translate-x-0"
      alt=""
    />
  </div>
  <img
    class="absolute left-0 top-0 z-10 w-[35%] 2xl:-translate-y-9 lg:w-[48%] xl:w-[40%] 2xl:w-[30%]"
    src="/img/curve.png"
    alt=""
  />
  <div
    class="relative z-10 my-4 px-[20px] text-white md:px-[30px] md:mt-8 2xl:my-12 xl:px-[80px] 2xl:px-[8vw]"
  >
    <div>
      <h1
        class="flex flex-col font-black uppercase leading-tight w-[46vw] lg:w-[62vw] xl:w-[54vw] 2xl:w-[43vw]"
      >
        Оклейка защитной плёнкой
      </h1>
      <div
        class="mt-3 mb-8 text-[17px] md:text-xl xl:text-[20px] sm:w-[46vw] 2xl:text-[22px] lg:w-[54vw] 2xl:w-[43vw]"
      >
        Оклейка защитной и матовой плёнкой кузова и салона авто и тонировка в
        РР-свервисе.
      </div>
      <div
        class="grid grid-cols-1 justify-between gap-4 xl:gap-[1.2vw] 2xl:gap-[1.5vw] md:grid-cols-3 lg:w-[62vw] xl:w-[54vw] 2xl:w-[43vw]"
      >
        <InfoCard
          title="Мы - одни из первых"
          info="Наши специалисты работают с оклейкой авто с момента появления защитных пленок в России"
        />
        <InfoCard
          title="0% брака"
          info="В работе мы используем только проверенные и качественные плёнки от легальных производителей."
        />
        <InfoCard
          title="Занимаемся только пленками"
          info="Мы не распыляемся на большое количество разных услуг по детейлингу и рестайлингу."
        />
      </div>
      <div
        class="outline-purple-light my-8 p-3 flex flex-wrap items-center justify-center gap-2 gap-y-6 rounded-3xl ap-3 2xl:p-4 outline-dashed outline-2 md:rounded-full xl:my-10"
        style="width: fit-content"
      >
        <div class="text-center ml-4 text-lg md:text-[17px] font-black">
          Хотите узнать стоимость? Пришлие фото на
        </div>
        <ContactButtons></ContactButtons>
      </div>
    </div>
  </div>
</template>
<script>
import InfoCard from "./info-card.vue";
import ContactButtons from "./contact-buttons.vue";
export default {
  components: {
    InfoCard,
    ContactButtons,
  },
};
</script>
