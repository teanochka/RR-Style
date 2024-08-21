<template>
  <section id="whereToOrder">
    <div
      class="absolute right-0 -z-10 h-full w-full bg-[url('/img/where-to-order.png')] bg-contain bg-right-top bg-no-repeat opacity-30 sm:translate-x-28 md:w-[57vw] md:translate-x-14 md:opacity-100 lg:my-14 lg:translate-x-12 xl:my-0 xl:translate-x-0 2xl:-my-32"
    ></div>
    <div
      class="relative z-10 my-20 px-[20px] text-white md:px-[30px] lg:my-24 xl:my-28 xl:px-[40px] 2xl:my-32 2xl:px-[8vw]"
    >
      <h2 class="w-[70%] leading-tight xl:w-2/3">
        где именно заказать оклейку?
      </h2>
      <div
        class="my-3 w-full text-[22px] font-normal md:w-2/3 md:text-[25px] lg:my-4 lg:w-full xl:my-6 xl:text-3xl"
      >
        Наглядно покажем чем мы отличаемся от других мест
      </div>
      <div
        class="mb-8 mt-8 flex w-max rounded-full bg-purple-dark p-2 text-[17px] sm:text-[20px] xl:mb-14 xl:text-[25px]"
      >
        <button
          class="relative rounded-full bg-transparent px-3 py-2 text-[#A6A5C3] before:absolute before:left-1/2 before:top-full before:h-0 before:w-0 before:-translate-x-1/2 before:border-x-[11px] before:border-t-[22px] before:border-solid before:border-transparent sm:px-8 sm:py-3 xl:px-10"
          @click="shipmentOption = 'option1'"
          :class="{
            'bg-white text-black before:border-t-white':
              shipmentOption == 'option1',
            'hover:underline': shipmentOption !== 'option1',
          }"
        >
          У нас
        </button>
        <button
          class="relative rounded-full bg-transparent px-3 py-2 text-[#A6A5C3] before:absolute before:left-1/2 before:top-full before:h-0 before:w-0 before:-translate-x-1/2 before:border-x-[11px] before:border-t-[22px] before:border-solid before:border-transparent sm:px-8 sm:py-3 xl:px-10"
          @click="shipmentOption = 'option2'"
          :class="{
            'bg-white text-black before:border-t-white':
              shipmentOption == 'option2',
            'hover:underline': shipmentOption !== 'option2',
          }"
        >
          У диллера
        </button>
        <button
          class="relative rounded-full bg-transparent px-3 py-2 text-[#A6A5C3] before:absolute before:left-1/2 before:top-full before:h-0 before:w-0 before:-translate-x-1/2 before:border-x-[11px] before:border-t-[22px] before:border-solid before:border-transparent sm:px-8 sm:py-3 xl:px-10"
          @click="shipmentOption = 'option3'"
          :class="{
            'bg-white text-black before:border-t-white':
              shipmentOption == 'option3',
            'hover:underline': shipmentOption !== 'option3',
          }"
        >
          По объявлению
        </button>
      </div>
      <div
        v-if="shipmentOption === 'option1'"
        class="flex w-full flex-col gap-5 md:w-4/5 xl:w-full xl:gap-2"
      >
        <div class="flex items-center gap-1">
          <img
            src="/public/svg/cross.svg"
            alt=""
            class="translate-y-1"
            style="filter: drop-shadow(0px 4px 4px rgba(140, 149, 2554, 0.4))"
          />
          <div class="align-top text-xl">
            качественная плёнка - только легальная плёнка от проверенных
            производителей
          </div>
        </div>
        <div class="flex items-center gap-1">
          <img
            loading="lazy"
            src="/public/svg/cross.svg"
            alt=""
            class="translate-y-1"
            style="filter: drop-shadow(0px 4px 4px rgba(140, 149, 2554, 0.4))"
          />
          <div class="align-top text-xl">
            подготовленное помещение - удобный бокс с максимальным уровнем
            чистоты и стерильности
          </div>
        </div>
        <div class="flex items-center gap-1">
          <img
            loading="lazy"
            src="/public/svg/cross.svg"
            alt=""
            class="translate-y-1"
            style="filter: drop-shadow(0px 4px 4px rgba(140, 149, 2554, 0.4))"
          />
          <div class="align-top text-xl">
            разная цена - на выбор доступны комплексы, отличающиеся по степени
            защиты и цене
          </div>
        </div>
        <div class="flex items-center gap-1">
          <img
            loading="lazy"
            src="/public/svg/cross.svg"
            alt=""
            class="translate-y-1"
            style="filter: drop-shadow(0px 4px 4px rgba(140, 149, 2554, 0.4))"
          />
          <div class="align-top text-xl">
            высокий уровень профессионализма - наши специалисты занимаются
            оклейкой уже больше 15 лет
          </div>
        </div>
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
  </section>
</template>
<script>
import ContactButtons from "./assets/components/contact-buttons.vue";
export default {
  components: {
    ContactButtons,
  },
  data() {
    return {
      shipmentOption: "option1",
    };
  },
};
</script>
