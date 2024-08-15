<template>
  <div
    class="flex flex-1 flex-col justify-between rounded-lg bg-white/5 p-1 text-base lg:p-5 lg:text-lg"
  >
    <div class="relative">
      <div
        class="flex flex-col gap-2 p-0 text-base sm:text-2xl md:flex-row lg:flex-col xl:text-3xl 2xl:text-4xl"
      >
        <div class="text-purple-vivid my-0 font-black uppercase">
          {{ type }}ая
        </div>
        <div class="my-0 font-normal text-black">защита</div>
      </div>
      <img :src="imgSrc" alt="bmv-cover1" />
      <div
        :class="[`gradient-${gradientClass}`]"
        class="absolute right-0 top-0 w-1/2 rounded-lg px-2 py-1 text-white sm:p-[0.8vw] lg:relative lg:w-full"
      >
        <div
          class="mb-1 text-sm font-bold leading-tight sm:text-base lg:text-2xl xl:text-3xl"
        >
          Защищает автомобиль на
        </div>
        <div class="grid grid-cols-2 grid-rows-2">
          <div
            class="col-start-1 row-start-1 text-lg font-black sm:text-3xl xl:text-4xl 2xl:text-6xl"
          >
            100%
          </div>
          <div
            class="col-start-2 row-start-1 text-sm font-normal leading-4 sm:col-start-1 sm:row-start-2 sm:text-base xl:text-2xl 2xl:text-2xl"
          >
            В зонах риска
          </div>
          <div
            class="col-start-1 row-start-2 text-lg font-black sm:col-start-2 sm:row-start-1 sm:text-3xl xl:text-4xl 2xl:text-6xl"
          >
            {{ percent }}%
          </div>
          <div
            class="col-start-2 row-start-2 text-sm font-normal leading-4 sm:text-base xl:text-2xl 2xl:text-2xl"
          >
            Весь автомобиль
          </div>
        </div>
      </div>
      <div
        class="my-5 flex flex-col items-start gap-6 rounded-lg bg-white p-5 text-black md:flex-row md:justify-between lg:flex-col"
      >
        <div class="2xl:space-between flex flex-1 flex-col 2xl:flex-row">
          <div class="flex-1 text-xl font-bold">Кому подойдет:</div>
          <div class="flex-1 font-normal">{{ goodFor }}</div>
        </div>
        <div
          class="2xl:space-between flex flex-1 flex-col items-start 2xl:flex-row"
        >
          <div class="flex flex-1 items-center gap-2 text-xl font-bold">
            <img src="/public/svg/violet-shield-wo-shadow.svg" alt="" />
            <div>Защищает:</div>
          </div>
          <div class="flex-1 font-normal">{{ defend }}</div>
        </div>
        <div
          v-if="type !== 'Полн'"
          class="2xl:space-between flex flex-1 flex-col 2xl:flex-row"
        >
          <div class="flex flex-1 items-center gap-2 text-xl font-bold">
            <img src="/public/svg/pink-shield-wo-shadow.svg" alt="" />
            <div>Не защищает:</div>
          </div>
          <div class="flex-1 font-normal">{{ noDefend }}</div>
        </div>
      </div>
      <div class="my-5 p-2 text-black">{{ description }}</div>
    </div>
    <div
      class="relative mb-5 mt-auto grid grid-rows-2 gap-5 rounded-lg p-4 text-[17px] text-white lg:grid-rows-[90px_minmax(0,1fr)] xl:text-2xl 2xl:grid-rows-[100px_minmax(0,1fr)] 2xl:text-3xl"
      style="
        background-image: linear-gradient(
          44deg,
          #2a146b 25%,
          #9592e5 55%,
          #5e69e0 80%
        );
      "
    >
      <div class="pr-[20%] font-bold">
        Узнать стоимость
        <span class="font-black uppercase">{{ type }}ой </span>защиты
      </div>
      <div
        class="flex w-full justify-between space-x-2 text-base text-white xl:justify-start"
      >
        <a
          href="#"
          class="flex h-fit w-full items-center justify-center gap-2 rounded-3xl bg-[#34AADF] p-2 hover:underline xl:w-fit xl:px-[1.5vw] xl:py-3"
        >
          <img src="/svg/telegram.svg" alt="" />
          <div class="hidden xl:block">Telegram</div>
        </a>
        <a
          href="#"
          class="flex h-fit w-full items-center justify-center gap-2 rounded-3xl bg-[#00D95F] p-2 hover:underline xl:w-fit xl:px-[1.5vw] xl:py-3"
        >
          <img src="/svg/whatsapp.svg" alt="" />
          <div class="hidden xl:block">WhatsApp</div>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import ContactButtons from "./contact-buttons.vue";
export default {
  props: [
    "type",
    "percent",
    "goodFor",
    "defend",
    "noDefend",
    "description",
    "gradientClass",
    "imgSrc",
  ],
  components: {
    ContactButtons,
  },
};
</script>
<style>
.gradient-1 {
  background-image: linear-gradient(
    135deg,
    #cb6262 37%,
    #e36464 50%,
    #9b323f 100%
  );
}
.gradient-2 {
  background-image: linear-gradient(
    135deg,
    #cb9462 37%,
    #e3c764 50%,
    #9b5832 100%
  );
}
.gradient-3 {
  background-image: linear-gradient(
    135deg,
    #7abf59 37%,
    #5dd980 50%,
    #1b8219 100%
  );
}
</style>
