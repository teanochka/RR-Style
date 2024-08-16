<template>
  <div
    class="relative mt-[calc(40px+4vw)] px-[20px] text-white md:px-[30px] xl:px-[40px] 2xl:px-[8vw] my-16 xl:my-20 2xl:my-24"
  >
    <img
      class="absolute right-0 top-0 z-0 md:w-[64vw] lg:w-[52vw] 2xl:w-auto 2xl:-translate-y-28 opacity-35 md:opacity-100"
      src="/img/salon.png"
      alt="salon"
    />
    <div class="relative z-10 2xl:w-4/5">
      <h2 class="mb-8 lg:mb-12 leading-tight xl:w-2/3 2xl:w-full">Также мы занимаемся оклейкой салона</h2>
      <div class="my-3 w-full xl:w-4/5 2xl:w-full lg:my-4 text-[22px] font-normal xl:my-6 md:text-[25px] 2xl:text-3xl">
        Оклейка салона делается только дорогой плёнкой, т.к. работа тонкая, есть
        много мелких деталей и важна качественная тактильность.
      </div>
      <div class="my-8 md:my-5 2xl:my-6 text-[25px] lg:text-3xl xl:text-4xl font-normal text-[#949CFF]">
        Почему нужно обратиться именно к нам?
      </div>
      <div class="mb-14 lg:w-[97%] xl:w-4/5 2xl:w-full grid gap-12 xl:gap-20 2xl:gap-22 md:grid-cols-3">
        <div class="flex-1">
          <img
            src="/public/svg/big-cross.svg"
            alt=""
            class="my-3 -translate-x-2"
            style="filter: drop-shadow(0px 4px 4px rgba(140, 149, 2554, 0.4))"
          />
          <h3 class="my-3">Работаем по шаблонам</h3>
          <div class="text-xl font-normal">
            В работе используем проверенные шаблоны от опытных разработчиков,
            поэтому вся плёнка точно подходит стык в стык и не бракуется в
            процессе нанесения. Шаблоны есть абсолютно для всех моделей!
          </div>
        </div>
        <div class="flex-1">
          <img
            src="/public/svg/big-cross.svg"
            alt=""
            class="my-3 -translate-x-2"
            style="filter: drop-shadow(0px 4px 4px rgba(140, 149, 2554, 0.4))"
          />
          <h3 class="my-3">
            Используем только легальную плёнку от лучших брендов.
          </h3>
          <div class="text-xl font-normal">
            Мы не оклеиваем салон дешёвой плёнкой. Поэтому мы гарантируем, что
            после нашей работы, любая деталь интерьера вашего автомобиля будет
            смотреться невероятно красиво!
          </div>
        </div>
        <div class="flex-1">
          <img
            src="/public/svg/big-cross.svg"
            alt=""
            class="my-3 -translate-x-2"
            style="filter: drop-shadow(0px 4px 4px rgba(140, 149, 2554, 0.4))"
          />
          <h3 class="my-3">
            Наша плёнка не только радует глаз, но и защищает покрытие.
          </h3>
          <div class="text-xl font-normal">
            Да, помимо эстетической функции всё наша плёнка несёт и защитные
            функции. Благодаря этому вы забудете о царапинах, мелких
            повреждениях и при необходимости сможете продать автомобиль почти
            как новый!
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
  </div>
</template>
<script>
    import ContactButtons from "./assets/components/contact-buttons.vue";
    export default {
    components: {
        ContactButtons,
    },
 }
</script>
