<template>
  <section
    id="materials"
    class="xl:py-22 overflow-hidden bg-[#D9D9D9] py-12 text-black sm:py-14 lg:py-16 xl:relative xl:flex xl:flex-col-reverse xl:justify-between"
  >
    <div
      class="xl:top h-full w-full -translate-y-10 overflow-hidden sm:absolute xl:flex xl:flex-1 xl:justify-end xl:self-center"
    >
      <div
        class="relative right-0 top-0 h-[315px] w-full translate-x-20 bg-[url('/img/wrap.png')] bg-contain bg-right-top bg-no-repeat sm:absolute md:translate-x-0 lg:h-[356px] xl:relative xl:right-0 xl:h-full xl:w-[64vw] xl:translate-x-[23vw] xl:bg-center 2xl:w-[45vw] 2xl:translate-x-[9vw]"
      ></div>
    </div>
    <div
      class="relative flex-none px-[20px] md:px-[30px] xl:w-3/5 xl:pl-[40px] 2xl:w-[60vw] 2xl:pl-[8vw]"
    >
      <div>
        <h2 class="my-4 sm:w-[60vw] lg:my-6">С какой плёнкой мы работаем?</h2>
        <div
          class="mb-7 flex w-max rounded-full bg-purple-dark p-2 text-[17px] sm:p-3 sm:text-2xl md:mb-12 xl:mb-8 xl:text-[25px]"
        >
          <button
            class="relative rounded-full bg-transparent p-3 px-11 text-[#A6A5C3] before:absolute before:left-1/2 before:top-full before:h-0 before:w-0 before:-translate-x-1/2 before:border-x-[11px] before:border-t-[22px] before:border-solid before:border-transparent"
            @click="company = 'llumar'"
            :class="{
              'bg-white text-black before:border-t-white': company == 'llumar',
              'hover:underline': company !== 'llumar',
            }"
          >
            Llumar
          </button>
          <button
            class="relative rounded-full bg-transparent p-3 px-11 text-[#A6A5C3] before:absolute before:left-1/2 before:top-full before:h-0 before:w-0 before:-translate-x-1/2 before:border-x-[11px] before:border-t-[22px] before:border-solid before:border-transparent"
            @click="company = 'suntek'"
            :class="{
              'bg-white text-black before:border-t-white': company == 'suntek',
              'hover:underline': company !== 'suntek',
            }"
          >
            SunTek
          </button>
        </div>
      </div>
      <div v-if="company == 'llumar'" class="xl:translate-y-0">
        <div
          class="grid grid-cols-3 grid-rows-[1fr_minmax(1fr,3fr)] items-center gap-x-7 gap-y-4 sm:grid-rows-[1fr_2fr_2fr] lg:grid-cols-[1fr_3fr]"
        >
          <img
            loading="lazy"
            class="col-span-1 row-start-1 w-full sm:row-span-3 sm:self-start lg:self-center"
            src="/public/img/lumar.png"
            alt=""
          />
          <div
            class="col-span-2 col-start-2 row-start-1 text-3xl font-bold sm:self-start"
          >
            Llumar
          </div>
          <div
            class="col-span-3 col-start-1 row-span-2 row-start-2 self-start text-[16px] sm:col-start-2 lg:text-2xl"
          >
            это плёнка от знаменитого американского производителя Eastman
            Chemical Company. Данная плёнка уже много лет заслуженно считается
            одной из лучших для тонировки стёкол автомобиля и популярна во всём
            мире благодаря проверенному качеству и беспроблемной эксплуатации.
          </div>
        </div>
        <div class="my-8 text-2xl font-bold">
          Ключевые преимущества плёнки Llumar:
        </div>
        <div
          class="grid grid-cols-1 gap-3 text-xl md:grid-cols-2 2xl:grid-cols-4 2xl:gap-[1vw]"
        >
          <div class="rounded-lg bg-white p-4">
            <img
              loading="lazy"
              src="/public/svg/big-cross.svg"
              class="h-[70px]"
              alt=""
            />
            <div>
              высокий коэффициент защиты от вредных ультрафиолетовых лучей
            </div>
          </div>
          <div class="rounded-lg bg-white p-4">
            <img
              loading="lazy"
              src="/public/svg/big-cross.svg"
              class="h-[70px]"
              alt=""
            />
            <div>
              повышенная видимость даже в темное время суток (в том числе даже
              вечером вы сможете легко парковаться без использования фонарей и
              камеры!)
            </div>
          </div>
          <div class="rounded-lg bg-white p-4">
            <img
              loading="lazy"
              src="/public/svg/big-cross.svg"
              class="h-[70px]"
              alt=""
            />
            <div>
              максимальная толщина среди всех полиуретановых плёнок (214 микрон)
              сможет защитить стекло даже в случае лёгкого дтп
            </div>
          </div>
          <div class="rounded-lg bg-white p-4">
            <img
              loading="lazy"
              src="/public/svg/big-cross.svg"
              class="h-[70px]"
              alt=""
            />
            <div>
              относительная сложность при нанесении, благодаря которой с данной
              пленкой работают только профессионалы, а дилетанты избегают её.
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="w-full h-full hidden flex-initial self-start xl:flex 2xl:flex-auto bg-[url('/img/wrap.png')]"></div> -->
  </section>
</template>
<script>
export default {
  data() {
    return {
      company: "llumar",
    };
  },
};
</script>
