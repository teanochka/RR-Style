<template>
  <section
    id="materials"
    class="xl:py-22 overflow-hidden bg-[#D9D9D9] py-12 text-black sm:py-14 lg:py-16 xl:relative xl:flex xl:flex-col-reverse xl:justify-between"
  >
    <div
      class="xl:top hidden h-full w-full -translate-y-10 overflow-hidden sm:absolute sm:block xl:flex xl:flex-1 xl:justify-end xl:self-center"
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
            class="relative rounded-full bg-transparent p-3 px-11 text-[#A6A5C3] before:absolute before:left-1/2 before:top-full before:h-0 before:w-0 before:-translate-x-1/2 before:-translate-y-1 before:border-x-[11px] before:border-t-[22px] before:border-solid before:border-transparent lg:before:translate-y-0"
            @click="selectedOption = firstOptionIndex"
            :class="{
              'bg-white text-black before:border-t-white':
                selectedOption == firstOptionIndex,
              'hover:underline': selectedOption != firstOptionIndex,
            }"
          >
            {{ companies[firstOptionIndex].title }}
          </button>
          <button
            class="relative rounded-full bg-transparent p-3 px-11 text-[#A6A5C3] before:absolute before:left-1/2 before:top-full before:h-0 before:w-0 before:-translate-x-1/2 before:-translate-y-1 before:border-x-[11px] before:border-t-[22px] before:border-solid before:border-transparent lg:before:translate-y-0"
            @click="selectedOption = secondOptionIndex"
            :class="{
              'bg-white text-black before:border-t-white':
                selectedOption == secondOptionIndex,
              'hover:underline': selectedOption != secondOptionIndex,
            }"
          >
            {{ companies[secondOptionIndex].title }}
          </button>
        </div>
      </div>
      <div class="xl:translate-y-0">
        <div
          class="grid grid-cols-3 grid-rows-[1fr_minmax(1fr,3fr)] items-center gap-x-7 gap-y-4 sm:grid-rows-[1fr_2fr_2fr] lg:grid-cols-[1fr_3fr]"
        >
          <img
            loading="lazy"
            class="col-span-1 row-start-1 w-full sm:row-span-3 sm:self-start lg:self-center"
            :src="companies[selectedOption].image"
            alt=""
          />
          <div
            class="col-span-2 col-start-2 row-start-1 text-3xl font-bold sm:self-start"
          >
            {{ companies[selectedOption].title }}
          </div>
          <div
            class="col-span-3 col-start-1 row-span-2 row-start-2 self-start text-[16px] sm:col-start-2 lg:text-2xl"
          >
            {{ companies[selectedOption].description }}
          </div>
        </div>
        <div class="my-8 text-2xl font-bold">
          Ключевые преимущества плёнки {{ companies[selectedOption].title }}
        </div>
        <div
          class="grid grid-cols-1 gap-3 text-xl md:grid-cols-2 2xl:grid-cols-4 2xl:gap-[1vw]"
        >
          <div
            v-for="(item, index) in companies[selectedOption].advantages"
            :key="index"
          >
            <div class="h-full rounded-lg bg-white p-4">
              <div
                class="h-[60px] bg-[url('/svg/medium-cross.svg')] bg-contain bg-left-top bg-no-repeat lg:h-[70px] lg:bg-[url('/svg/big-cross.svg')]"
              ></div>
              <div>{{ item.text }}</div>
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
  props: {
    serviceOption: Number,
  },
  mounted() {
    this.updateOptions();
  },
  watch: {
    serviceOption(newVal, oldVal) {
      this.updateOptions();
    },
  },
  methods: {
    updateOptions() {
      const optionsMap = {
        1: { first: 0, second: 1 },
        2: { first: 0, second: 2 },
        3: { first: 1, second: 2 },
      };

      const selectedOptions = optionsMap[this.serviceOption] || {};
      this.firstOptionIndex = selectedOptions.first;
      this.secondOptionIndex = selectedOptions.second;
      this.selectedOption = selectedOptions.first;
    },
  },
  data() {
    return {
      firstOptionIndex: 0,
      secondOptionIndex: 0,
      selectedOption: 0,
      companies: [
        {
          title: "Llumar",
          description:
            "это плёнка от знаменитого американского производителя Eastman Chemical Company. Данная плёнка уже много лет заслуженно считается одной из лучших для тонировки стёкол автомобиля и популярна во всём мире благодаря проверенному качеству и беспроблемной эксплуатации.",
          image: "/img/lumar.png",
          advantages: [
            {
              text: "высокий коэффициент защиты от вредных ультрафиолетовых лучей",
            },
            {
              text: "повышенная видимость даже в темное время суток (в том числе даже вечером вы сможете легко парковаться без использования фонарей и камеры!)",
            },
            {
              text: "максимальная толщина среди всех полиуретановых плёнок (214 микрон) сможет защитить стекло даже в случае лёгкого дтп",
            },
            {
              text: "относительная сложность при нанесении, благодаря которой с данной пленкой работают только профессионалы, а дилетанты избегают её.",
            },
          ],
        },
        {
          title: "SunTek",
          description:
            "это крупнейший производитель оконной и специальной автомобильной пленки в мире. Основные виды пленок, которые производит фабрика - это тонировочные пленки, архитектурные пленки, защитные пленки, автомобильные пленки. На нашем сайте представлена линейки автомобильных пленок и тонировочных пленок для авто. ",
          image: "/img/suntek.png",
          advantages: [
            {
              text: "высокий коэффициент защиты от вредных ультрафиолетовых лучей",
            },
            {
              text: "повышенная видимость даже в темное время суток (в том числе даже вечером вы сможете легко парковаться без использования фонарей и камеры!)",
            },
            {
              text: "максимальная толщина среди всех полиуретановых плёнок (214 микрон) сможет защитить стекло даже в случае лёгкого дтп",
            },
            {
              text: "относительная сложность при нанесении, благодаря которой с данной пленкой работают только профессионалы, а дилетанты избегают её.",
            },
          ],
        },
        {
          title: "Daytona",
          description:
            "это крупнейший производитель оконной и специальной автомобильной пленки в мире. Основные виды пленок, которые производит фабрика - это тонировочные пленки, архитектурные пленки, защитные пленки, автомобильные пленки. На нашем сайте представлена линейки автомобильных пленок и тонировочных пленок для авто. ",
          image: "/img/daytona.png",
          advantages: [
            {
              text: "высокий коэффициент защиты от вредных ультрафиолетовых лучей",
            },
            {
              text: "повышенная видимость даже в темное время суток (в том числе даже вечером вы сможете легко парковаться без использования фонарей и камеры!)",
            },
            {
              text: "максимальная толщина среди всех полиуретановых плёнок (214 микрон) сможет защитить стекло даже в случае лёгкого дтп",
            },
            {
              text: "относительная сложность при нанесении, благодаря которой с данной пленкой работают только профессионалы, а дилетанты избегают её.",
            },
          ],
        },
      ],
    };
  },
};
</script>
