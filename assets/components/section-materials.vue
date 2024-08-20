<template>
  <section id="materials"
    class="overflow-hidden bg-[#D9D9D9] py-12 sm:py-14 lg:py-16 xl:py-22 text-black xl:flex xl:justify-between"
  >
    <div
      class="flex-none px-[20px] md:px-[30px] xl:w-3/5 xl:pl-[40px] 2xl:w-[60vw] 2xl:pl-[8vw]"
    >
      <div class="relative flex justify-between">
        <div>
          <h2 class="my-4 lg:my-6">С какой плёнкой мы работаем?</h2>
          <div
            class="bg-purple-dark mb-5 sm:mb-14 lg:mb-24 xl:mb-8 flex w-max rounded-full p-2 text-[17px] sm:p-3 sm:text-2xl xl:text-[25px]"
          >
            <button
              class="relative rounded-full bg-transparent text-[#A6A5C3] before:absolute before:left-1/2 before:top-full before:h-0 before:w-0 before:-translate-x-1/2 before:border-x-[11px] before:border-t-[22px] before:border-solid before:border-transparent p-3 px-11"
              @click="company = 'llumar'"
              :class="{
                'bg-white text-black before:border-t-white':
                  company == 'llumar',
                'hover:underline': company !== 'llumar',
              }"
            >
              Llumar
            </button>
            <button
              class="relative rounded-full bg-transparent text-[#A6A5C3] before:absolute before:left-1/2 before:top-full before:h-0 before:w-0 before:-translate-x-1/2 before:border-x-[11px] before:border-t-[22px] before:border-solid before:border-transparent p-3 px-11"
              @click="company = 'suntek'"
              :class="{
                'bg-white text-black before:border-t-white':
                  company == 'suntek',
                'hover:underline': company !== 'suntek',
              }"
            >
              SunTek
            </button>
          </div>
        </div>
        <img
          class="relative right-0 top-0 z-0 hidden h-full w-[227px] -translate-y-12 translate-x-[30px] object-contain sm:flex xl:hidden"
          src="/public/img/wrap.png"
          alt=""
        />
      </div>
      <div
        v-if="company == 'llumar'"
        class="sm:-translate-y-20 xl:translate-y-0"
      >
        <div class="grid grid-cols-3 grid-rows-3 items-center gap-x-7">
          <img
            class="col-span-1 row-start-1 w-full sm:row-span-3"
            src="/public/img/lumar.png"
            alt=""
          />
          <div class="col-span-2 col-start-2 row-start-1 text-3xl font-bold">
            Llumar
          </div>
          <div
            class="col-span-3 col-start-1 row-span-2 row-start-2 text-2xl sm:col-start-2"
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
            <img src="/public/svg/big-cross.svg" class="h-[70px]" alt="" />
            <div>
              высокий коэффициент защиты от вредных ультрафиолетовых лучей
            </div>
          </div>
          <div class="rounded-lg bg-white p-4">
            <img src="/public/svg/big-cross.svg" class="h-[70px]" alt="" />
            <div>
              повышенная видимость даже в темное время суток (в том числе даже
              вечером вы сможете легко парковаться без использования фонарей и
              камеры!)
            </div>
          </div>
          <div class="rounded-lg bg-white p-4">
            <img src="/public/svg/big-cross.svg" class="h-[70px]" alt="" />
            <div>
              максимальная толщина среди всех полиуретановых плёнок (214 микрон)
              сможет защитить стекло даже в случае лёгкого дтп
            </div>
          </div>
          <div class="rounded-lg bg-white p-4">
            <img src="/public/svg/big-cross.svg" class="h-[70px]" alt="" />
            <div>
              относительная сложность при нанесении, благодаря которой с данной
              пленкой работают только профессионалы, а дилетанты избегают её.
            </div>
          </div>
        </div>
      </div>
    </div>
    <img
      class="hidden flex-initial self-start object-contain xl:flex 2xl:flex-auto"
      src="/public/img/wrap.png"
      alt=""
    />
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
