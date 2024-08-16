
<template>
  <div class="relative overflow-hidden">
    <img
      class="absolute left-0 top-0 z-0"
      src="/public/img/projects-background.png"
      alt=""
    />
    <div class="relative z-10 py-12 sm:my-8 lg:my-16 xl:my-22">
      <h2
        class="px-[20px] md:px-[30px] xl:px-[40px] 2xl:px-[8vw] 2xl:mb-10 mb-6 text-white"
      >
        Знаковые проекты
      </h2>
      <div
        class="relative grid grid-cols-1 gap-y-10 px-2 2xl:px-[8vw] gap-x-[1.5vw] lg:grid-cols-3"
      >
        <div class="relative flex gap-[5vw] md:flex-col md:gap-0">
          <img
            class="absolute left-0 top-0 z-0 w-[25%] md:w-[22%] lg:h-auto lg:w-[62%]"
            src="/public/svg/logo-dark.svg"
            alt=""
          />
          <div
            class="relative z-10 pl-[calc(10px+1.4vw)] pt-[calc(10px+1.4vw)] grid grid-cols-[2fr_3fr] md:grid-cols-[2fr_4fr] gap-x-[5%] sm:gap-x-6 gap-y-[4%] lg:grid-cols-1"
          >
            <img src="/public/img/mercedes.png" alt="mercedes" />
            <div>
              <h3>Mercedes G-classe 2023</h3>
              <div class="my-5 text-[17px xl:text-2xl font-normal">
                Оклейка полиуретановой пленкой, комплектация “<span
                  class="text-purple-light underline"
                  >Базовая защита</span
                >”
              </div>
              <div class="text-lg font-normal text-[#999999]">
                22 апреля 2024
              </div>
            </div>
          </div>
        </div>
        <div class="relative flex gap-[5vw] md:flex-col md:gap-0">
          <img
            class="absolute left-0 top-0 z-0 w-[25%] md:w-[22%] lg:h-auto lg:w-[62%]"
            src="/public/svg/logo-dark.svg"
            alt=""
          />
          <div
            class="relative z-10 pl-[calc(10px+1.4vw)] pt-[calc(10px+1.4vw)] grid grid-cols-[2fr_3fr] md:grid-cols-[2fr_4fr] gap-x-[5%] sm:gap-x-6 gap-y-[4%] lg:grid-cols-1"
          >
            <img src="/public/img/bmw.png" alt="mercedes" />
            <div>
              <h3>BMW X5 G05 2022</h3>
              <div class="my-5 text-[17px xl:text-2xl font-normal">
                Оклейка полиуретановой пленкой, комплектация “<span
                  class="text-purple-light underline"
                  >Базовая защита</span
                >”
              </div>
              <div class="text-lg font-normal text-[#999999]">
                22 апреля 2024
              </div>
            </div>
          </div>
        </div>
        <div class="relative flex gap-[5vw] md:flex-col md:gap-0">
          <img
            class="absolute left-0 top-0 z-0 w-[25%] md:w-[22%] lg:h-auto lg:w-[62%]"
            src="/public/svg/logo-dark.svg"
            alt=""
          />
          <div
            class="relative z-10 pl-[calc(10px+1.4vw)] pt-[calc(10px+1.4vw)] grid grid-cols-[2fr_3fr] md:grid-cols-[2fr_4fr] gap-x-[5%] sm:gap-x-6 gap-y-[4%] lg:grid-cols-1"
          >
            <img src="/public/img/audi.png" alt="mercedes" />
            <div>
              <h3>Audi SQ-8 2023</h3>
              <div class="my-5 text-[17px xl:text-2xl font-normal">
                Оклейка полиуретановой пленкой, комплектация “<span
                  class="text-purple-light underline"
                  >Базовая защита</span
                >”
              </div>
              <div class="text-lg font-normal text-[#999999]">
                22 апреля 2024
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col justify-center">
        <button
          class="text-normal my-12 lg:my-16 2xl:mt-24 w-max self-center rounded-full bg-white px-10 py-4 text-2xl text-black hover:bg-[#5057A7] hover:text-white"
        >
          Показать еще 15 работ
        </button>
        <div
          class="self-center mx-[20px] outline-purple-light p-3 flex flex-wrap items-center justify-center gap-2 gap-y-6 rounded-3xl ap-3 2xl:p-4 outline-dashed outline-2 md:rounded-full xl:my-10"
          style="width: fit-content"
        >
          <div class="text-center ml-4 text-lg md:text-[17px] font-black">
            Хотите узнать стоимость? Пришлие фото на
          </div>
          <ContactButtons></ContactButtons>
        </div>
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