<template>
  <section
    id="whatYouWant"
    class="relative z-20 mt-16 sm:px-[20px] md:px-[30px] xl:mt-24 xl:px-[40px] 2xl:px-[8vw]"
  >
    <div
      class="absolute left-0 top-[2%] z-0 h-full w-full bg-[url('/img/bubbles.png')] bg-contain bg-no-repeat sm:-top-0 md:-top-[2%] lg:-top-[3%] 2xl:top-0"
    ></div>
    <div class="relative z-10">
      <h2 class="mb-6 ml-3 text-white sm:ml-0 lg:mb-10 xl:mb-14 2xl:mb-36">
        Что вам нужно?
      </h2>
      <div class="flex gap-[0.1vw]">
        <button
          class="rounded-t-lg px-3 py-[calc(8px+1.5625vw)] font-bold text-black sm:px-[calc(12px+1.5625vw)]"
          :class="{
            'bg-white': selectedOption === 1,
            'bg-white/[0.2] text-[#C0C1C8] hover:bg-white/[0.4] hover:text-white':
              selectedOption !== 1,
          }"
          @click="selectOption(1)"
        >
          <h3 class="leading-5">Оклейка прозрачной пленкой</h3>
        </button>
        <button
          class="rounded-t-lg px-3 py-[calc(8px+1.5625vw)] font-bold text-black sm:px-[calc(12px+1.5625vw)]"
          :class="{
            'bg-white': selectedOption === 2,
            'bg-white/[0.2] text-[#C0C1C8] hover:bg-white/[0.4] hover:text-white':
              selectedOption !== 2,
          }"
          @click="selectOption(2)"
        >
          <h3 class="leading-5">Оклейка матовой пленкой</h3>
        </button>
        <button
          class="rounded-t-lg px-3 py-[calc(8px+1.5625vw)] font-bold text-black sm:px-[calc(12px+1.5625vw)]"
          :class="{
            'bg-white': selectedOption === 3,
            'bg-white/[0.2] text-[#C0C1C8] hover:bg-white/[0.4] hover:text-white':
              selectedOption !== 3,
          }"
          @click="selectOption(3)"
        >
          <h3 class="leading-5">Тонировка стёкол</h3>
        </button>
      </div>
      <div
        class="rounded-b-lg rounded-tr-lg bg-[#E7E7E7] bg-gradient-to-b from-white to-transparent to-30% p-[calc(12px+1.5625vw)] text-black"
      >
        <div
          v-if="selectedOption === 1"
          class="flex flex-col gap-[calc(16px+1.5625vw)]"
        >
          <div
            class="auto-rows-min gap-[3vw] gap-y-2 md:grid md:grid-cols-[minmax(273px,1fr)_minmax(0,1.5fr)] md:grid-rows-[minmax(1fr,2fr)_1fr]"
          >
            <div
              class="col-span-1 col-start-2 row-span-1 row-start-1 mb-6 text-[30px] font-bold leading-tight lg:text-[36px] 2xl:text-[40px]"
            >
              Оклейка плёнкой кузова автомобиля необходима для его защиты от
              главных проблем, с которыми сталкиваются водители на дорогах.
            </div>
            <img
              loading="lazy"
              class="col-span-1 col-start-1 row-span-1 row-start-1 w-full xl:row-span-2"
              src="/public/img/wraping.png"
              alt=""
            />
            <div
              class="col-span-2 col-start-1 row-span-1 row-start-2 xl:col-span-1 xl:col-start-2"
            >
              <div class="mb-4 text-3xl font-bold text-purple-vivid xl:mb-7">
                Нанесение плёнки поможет:
              </div>
              <div
                class="flex flex-col gap-3 text-lg font-normal lg:text-xl xl:gap-4"
              >
                <div class="flex items-center gap-[calc(6px+1vw)]">
                  <img
                    loading="lazy"
                    src="/public/svg/violet-shield-wo-shadow.svg"
                    alt=""
                    class="translate-y-1"
                    style="
                      filter: drop-shadow(
                        0px 4px 4px rgba(140, 149, 2554, 0.6)
                      );
                    "
                  />
                  <div>защитить от гравия, пескоструя, осадков;</div>
                </div>
                <div class="flex items-center gap-[calc(6px+1vw)]">
                  <img
                    loading="lazy"
                    src="/public/svg/violet-shield-wo-shadow.svg"
                    alt=""
                    class="translate-y-1"
                    style="
                      filter: drop-shadow(
                        0px 4px 4px rgba(140, 149, 2554, 0.6)
                      );
                    "
                  />
                  <div>
                    избежать критичных проблем из-за небольших повреждений,
                    царапин, сколов;
                  </div>
                </div>
                <div class="flex items-center gap-[calc(6px+1vw)]">
                  <img
                    loading="lazy"
                    src="/public/svg/violet-shield-wo-shadow.svg"
                    alt=""
                    class="translate-y-1"
                    style="
                      filter: drop-shadow(
                        0px 6px 6px rgba(140, 149, 2554, 0.6)
                      );
                    "
                  />
                  <div>сохранить значительно дольше лакокрасочное покрытие</div>
                </div>
              </div>
            </div>
          </div>
          <h2 class="normal-case leading-tight text-black">
            Выберите интересующий Вас комплекс
          </h2>
          <div
            class="grid grid-cols-1 gap-2 gap-y-3 sm:gap-y-4 lg:grid-cols-3 xl:gap-[1.2vw]"
          >
            <ServiceCard
              type="Обязательн"
              percent="60"
              goodFor="живете в городе / ездите по городу."
              defend="передний бампер, капот, передние крылья, зеркала, стойки лобового стекла, передняя кромка крыши."
              noDefend="передние и задние двери, крышку багажника, крышу и т.п."
              description="Данный комплекс защищает основные зоны риска кузова автомобиля, на которые обычно приходится около 60-70% всех проблем. Такая защита предотвратит нежелательные последствия от гравия из-под колёс, пескоструя, выпавших из впереди идущей машины небольших предметов, а также от последствий серьезных осадков. Но при этом, внушительная часть кузова автомобиля останется без защиты."
              gradientClass="1"
              imgSrc="/img/bmv-cover1.png"
            />
            <ServiceCard
              type="Оптимальн"
              percent="80"
              goodFor="живете за городом / ездите по городу."
              defend="передний бампер, капот, передние крылья, зеркала, стойки лобового стекла, передняя кромка крыши, внутренние пороги, зоны под ручками, зона выгрузки, кромки дверей, стойки."
              noDefend="передние и задние двери, крышку багажника, крышу и т.п."
              description="Данный комплекс включает в себя оклейку всех обязательных элементов, а также тех, которые не сразу видны, но обычно подвергаются постоянной нагрузке и риску. Например, это зоны под ручками, страдающие от ногтей и пороги, покрытие которых разрушает обувь с каблуками."
              gradientClass="2"
              imgSrc="/img/bmv-cover2.png"
            />
            <ServiceCard
              type="Полн"
              percent="100"
              goodFor="живете за городом / много путешествуете на автомобиле."
              defend="Включает защиту всего кузова автомобиля."
              noDefend=""
              description="Помимо защиты от гравия, пескоструя и осадков, оклейка плёнкой всех элементов и узлов кузова автомобиля может предотвратить повреждение покрытия, появление царапин и сколов, как из-за небольших инцидентов (например, при парковке во дворе или столкновения с тележкой у супермаркета), так и при мелких дтп - ведь они чаще всего и вредят не основным частям кузова."
              gradientClass="3"
              imgSrc="/img/bmv-cover3.png"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import ContactButtons from "./assets/components/contact-buttons.vue";
import ServiceCard from "./assets/components/service-card.vue";
export default {
  components: {
    ServiceCard,
    ContactButtons,
  },
  data() {
    return {
      selectedOption: 1,
    };
  },
  methods: {
    selectOption(option) {
      this.selectedOption = option;
      this.$emit("getChosenService", option);
    },
  },
};
</script>
