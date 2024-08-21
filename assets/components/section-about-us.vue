<template>
  <section>
    <div
      class="absolute top-0 flex h-[calc(220px+12vw)] w-full justify-end overflow-hidden bg-[url('/img/car-light.png')] bg-cover bg-no-repeat sm:h-[calc(300px+3vw)] md:h-[calc(280px+15vw)] lg:h-[calc(320px+15vw)] xl:h-[calc(450px+15vw)] 2xl:bg-contain 2xl:bg-right"
    >
      <div
        class="absolute z-10 h-full w-[80vw] translate-x-[15%] self-end bg-[url('/img/car-and-roll.png')] bg-contain bg-right-bottom bg-no-repeat sm:w-[68vw] sm:translate-x-0 lg:w-[64vw] lg:translate-x-[6%] xl:translate-x-[8%] 2xl:translate-x-0"
      ></div>
    </div>
    <div
      class="absolute left-0 top-0 z-10 h-full w-[35%] bg-[url('/img/curve.png')] bg-contain bg-no-repeat lg:w-[48%] xl:w-[40%] 2xl:w-[30%] 2xl:-translate-y-9"
    ></div>

    <div
      class="relative z-10 my-4 px-[20px] text-white md:mt-8 md:px-[30px] xl:px-[80px] 2xl:my-12 2xl:px-[8vw]"
    >
      <div>
        <h1
          class="flex w-[46vw] flex-col font-black uppercase leading-tight lg:w-[62vw] xl:w-[54vw] 2xl:w-[43vw]"
        >
          Оклейка защитной плёнкой
        </h1>
        <div
          class="mb-8 mt-3 text-[17px] sm:w-[46vw] md:text-xl lg:w-[54vw] xl:text-[20px] 2xl:w-[43vw] 2xl:text-[22px]"
        >
          Оклейка защитной и матовой плёнкой кузова и салона авто и тонировка в
          РР-свервисе.
        </div>
        <div
          class="grid grid-cols-1 justify-between gap-4 md:grid-cols-3 lg:w-[62vw] xl:w-[54vw] xl:gap-[1.2vw] 2xl:w-[43vw] 2xl:gap-[1.5vw]"
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
          class="ap-3 my-8 flex flex-wrap items-center justify-center gap-2 gap-y-6 rounded-3xl p-3 outline-dashed outline-2 outline-purple-light md:rounded-full xl:my-10 2xl:p-4"
          style="width: fit-content"
        >
          <div class="ml-4 text-center text-lg font-black md:text-[17px]">
            Хотите узнать стоимость? Пришлие фото на
          </div>
          <ContactButtons></ContactButtons>
        </div>
      </div>
    </div>
  </section>
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
