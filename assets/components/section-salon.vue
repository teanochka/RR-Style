<template>
  <section
    id="salon"
    class="relative my-16 mt-[calc(40px+4vw)] px-[20px] text-white md:px-[30px] xl:my-20 xl:px-[40px] 2xl:my-24 2xl:px-[8vw]"
  >
    <div
      class="absolute right-0 top-0 -z-10 h-full w-full bg-[url('/img/salon.png')] bg-contain bg-right-top bg-no-repeat opacity-35 md:w-[64vw] md:opacity-100 lg:w-[52vw] 2xl:w-full 2xl:-translate-y-28"
    ></div>
    <div class="relative z-10 2xl:w-4/5">
      <h2 class="mb-8 leading-tight lg:mb-12 xl:w-2/3 2xl:w-full">
        Также мы занимаемся оклейкой салона
      </h2>
      <div
        class="my-3 w-full text-[22px] font-normal md:text-[25px] lg:my-4 xl:my-6 xl:w-4/5 2xl:w-full 2xl:text-3xl"
      >
        Оклейка салона делается только дорогой плёнкой, т.к. работа тонкая, есть
        много мелких деталей и важна качественная тактильность.
      </div>
      <div
        class="my-8 text-[25px] font-normal text-[#949CFF] md:my-5 lg:text-3xl xl:text-4xl 2xl:my-6"
      >
        Почему нужно обратиться именно к нам?
      </div>
      <div
        class="2xl:gap-22 mb-14 grid gap-12 md:grid-cols-3 lg:w-[97%] xl:w-4/5 xl:gap-20 2xl:w-full"
      >
        <div v-for="(pro, index) in pros" class="flex-1">
          <div
            class="h-[60px] w-[60px] -translate-x-2 bg-[url('/svg/medium-cross.svg')] bg-contain bg-left-top bg-no-repeat lg:my-3 lg:h-[70px] lg:bg-[url('/svg/big-cross.svg')]"
          ></div>
          <h3 class="my-3">{{ pro.title }}</h3>
          <div class="text-xl font-normal">
            {{ pro.description }}
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
      pros: [
        {
          title: "Работаем по шаблонам",
          description:
            "В работе используем проверенные шаблоны от опытных разработчиков, поэтому вся плёнка точно подходит стык в стык и не бракуется в процессе нанесения. Шаблоны есть абсолютно для всех моделей!",
        },
        {
          title: "Используем только легальную плёнку от лучших брендов.",
          description:
            "Мы не оклеиваем салон дешёвой плёнкой. Поэтому мы гарантируем, что после нашей работы, любая деталь интерьера вашего автомобиля будет смотреться невероятно красиво!",
        },
        {
          title: "Наша плёнка не только радует глаз, но и защищает покрытие.",
          description:
            "Да, помимо эстетической функции всё наша плёнка несёт и защитные функции. Благодаря этому вы забудете о царапинах, мелких повреждениях и при необходимости сможете продать автомобиль почти как новый!",
        },
      ],
    };
  },
};
</script>
