<template>
  <section id="whereToOrder">
    <img
      class="absolute right-0 -z-10 lg:my-14 xl:my-0 2xl:-my-32 sm:translate-x-28 md:translate-x-14 lg:translate-x-12 xl:translate-x-0 w-full opacity-30 md:opacity-100 md:w-[57vw]"
      src="/img/where-to-order.png"
      alt=""
    />
    <div
      class="relative z-10 px-[20px] my-20 lg:my-24 xl:my-28 2xl:my-32 text-white md:px-[30px] xl:px-[40px] 2xl:px-[8vw]"
    >
      <h2 class="w-[70%] xl:w-2/3 leading-tight">
        где именно заказать оклейку?
      </h2>
      <div
        class="my-3 w-full md:w-2/3 lg:w-full lg:my-4 text-[22px] font-normal xl:my-6 md:text-[25px] xl:text-3xl"
      >
        Наглядно покажем чем мы отличаемся от других мест
      </div>
      <div
        class="bg-purple-dark mt-8 mb-8 xl:mb-14 flex w-max rounded-full p-2 text-[17px] sm:text-[20px] xl:text-[25px]"
      >
        <button
          class="relative rounded-full bg-transparent py-2 text-[#A6A5C3] before:absolute before:left-1/2 before:top-full before:h-0 before:w-0 before:-translate-x-1/2 before:border-x-[11px] before:border-t-[22px] before:border-solid before:border-transparent sm:py-3 px-3 sm:px-8 xl:px-10"
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
          class="relative rounded-full bg-transparent py-2 text-[#A6A5C3] before:absolute before:left-1/2 before:top-full before:h-0 before:w-0 before:-translate-x-1/2 before:border-x-[11px] before:border-t-[22px] before:border-solid before:border-transparent sm:py-3 px-3 sm:px-8 xl:px-10"
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
          class="relative rounded-full bg-transparent py-2 text-[#A6A5C3] before:absolute before:left-1/2 before:top-full before:h-0 before:w-0 before:-translate-x-1/2 before:border-x-[11px] before:border-t-[22px] before:border-solid before:border-transparent sm:py-3 px-3 sm:px-8 xl:px-10"
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
        class="flex flex-col gap-5 xl:gap-2 w-full md:w-4/5 xl:w-full"
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
        class="outline-purple-light my-8 p-3 flex flex-wrap items-center justify-center gap-2 gap-y-6 rounded-3xl ap-3 2xl:p-4 outline-dashed outline-2 md:rounded-full xl:my-10"
        style="width: fit-content"
      >
        <div class="text-center ml-4 text-lg md:text-[17px] font-black">
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
