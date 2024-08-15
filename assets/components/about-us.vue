<template class="relative">
  <div class="absolute overflow-hidden w-[100vw] xl:bottom-[36%] 2xl:bottom-0 2xl:top-0">
  <img src="/public/img/car-background.png" class="top-0 w-full relative z-10 xl:translate-x-[6%] 2xl:translate-x-0" alt=""/>
</div>
  <img
      class="absolute left-0 top-0 z-10 w-1/3 -translate-y-9 sm:w-[26%] sm:translate-y-0"
      src="/img/curve.png"
      alt=""
    />
    <div
      class="relative z-10 my-4 px-[20px] text-white md:px-[30px] 2xl:my-12 xl:px-[80px] 2xl:px-[8vw]"
    >
      <div>
        <h1
          class="flex flex-col font-black uppercase leading-tight lg:w-[62vw] xl:w-[54vw] 2xl:w-[43vw]"
        >
          Оклейка защитной плёнкой
        </h1>
        <div class="mt-3 mb-8 text-lg md:text-xl xl:text-[20px] 2xl:text-[22px] lg:w-[62vw] xl:w-[54vw] 2xl:w-[43vw]">
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
          class="outline-purple-light my-8 flex flex-wrap items-center justify-center gap-2 gap-y-6 rounded-3xl p-5 pl-[2%] outline-dashed outline-2 md:rounded-full xl:my-10"
          style="width: fit-content"
        >
          <div class="text-center text-lg font-black">
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
