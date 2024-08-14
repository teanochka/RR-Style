<template>
  <div
    class="overflow-hidden absolute transition-[max-height] duration-500 ease-in max-h-0 text-white w-screen backdrop-blur-sm z-50 bg-gradient-to-b from-[rgba(80,87,167,0.9)] to-[rgba(42,20,107,0.9)] flex flex-col gap-y-7 md:flex-row"
    :class="{
      'max-h-screen -my-0': isMenuVisible,
    }"
  >
    <button
      @click="isMenuVisible = false"
      class="absolute top-[3vw] right-[3vw] h-[30px] w-[30px] z-10 bg-[url('/svg/close.svg')] bg-contain bg-no-repeat"
    ></button>
    <div
      class="p-4 md:py-6 md:px-8 2xl:px-14 2xl:py-10 md:my-4 md:border-r-2 md:pr-[5vw] flex flex-col items-center xs:items-start md:justify-between"
    >
      <div
        class="grid grid-cols-[1fr_4fr] p-4 xl:p-8 gap-2 w-fit rounded-xl bg-[#0B0B18] items-center"
      >
        <img class="w-full" src="/public/svg/logo.svg" alt="" />
        <div class="flex flex-col gap-y-2 items-start text-white">
          <div class="text-3xl font-black xl:text-6xl">
            <span class="text-purple-light">PP</span>-сервис
          </div>
          <div class="text-2xl md:text-xl xl:text-3xl">Оклейка автомобилей</div>
        </div>
      </div>
      <div class="flex justify-between w-full mt-4 md:flex-col md:gap-7">
        <div class="items-center gap-3 flex">
          <img class="h-[45px]" src="/svg/phone-thin.svg" alt="" />
          <a
            href="tel:+7-495-499-88-22"
            class="text-lg font-black lg:text-2xl xl:text-3xl"
            >+7-495-499-88-22</a
          >
        </div>
        <div class="flex items-center gap-4">
          <a href="#">
            <img
              class="md:w-[50px]"
              src="/svg/whatsapp-small.svg"
              alt="whatsapp"
            />
          </a>
          <a href="#">
            <img
              class="md:w-[50px]"
              src="/svg/telegram-small.svg"
              alt="telegram"
            />
          </a>
        </div>
      </div>
    </div>
    <div
      class="p-4 md:py-6 md:px-8 2xl:px-14 2xl:py-10 flex flex-col font-black text-base md:text-2xl md:pl-[5vw] lg:text-3xl"
    >
      <button
        @click="scrollToElement('whatYouNeed')"
        class="uppercase py-2 md:py-4 text-left border-white/20 hover:bg-gradient-to-b from-white/5 to-white/10 md:hover:bg-none md:border-0"
      >
        Что вам нужно?
      </button>
      <button
        @click="scrollToElement('whyUs')"
        class="uppercase py-2 md:py-4 text-left border-white/20 border-t-[0.1px] hover:bg-gradient-to-b from-white/5 to-white/10 md:hover:bg-none md:border-0"
      >
        Почему мы?
      </button>
      <button
        @click="scrollToElement('whereToOrder')"
        class="uppercase py-2 md:py-4 text-left border-white/20 border-t-[0.1px] hover:bg-gradient-to-b from-white/5 to-white/10 md:hover:bg-none md:border-0"
      >
        где заказать оклейку?
      </button>
      <button
        @click="scrollToElement('materials')"
        class="uppercase py-2 md:py-4 text-left border-white/20 border-t-[0.1px] hover:bg-gradient-to-b from-white/5 to-white/10 md:hover:bg-none md:border-0"
      >
        С какой плёнкой мы работаем?
      </button>
      <button
        @click="scrollToElement('projects')"
        class="uppercase py-2 md:py-4 text-left border-white/20 border-t-[0.1px] hover:bg-gradient-to-b from-white/5 to-white/10 md:hover:bg-none md:border-0"
      >
        Знаковые проекты
      </button>
      <button
        @click="scrollToElement('salon')"
        class="uppercase py-2 md:py-4 text-left border-white/20 border-t-[0.1px] hover:bg-gradient-to-b from-white/5 to-white/10 md:hover:bg-none md:border-0"
      >
        оклейка салона
      </button>
      <button
        @click="scrollToElement('faq')"
        class="uppercase py-2 md:py-4 text-left border-white/20 border-t-[0.1px] hover:bg-gradient-to-b from-white/5 to-white/10 md:hover:bg-none md:border-0"
      >
        Вопрос-ответ
      </button>
      <button
        @click="scrollToElement('reviews')"
        class="uppercase py-2 md:py-4 text-left border-white/20 border-t-[0.1px] hover:bg-gradient-to-b from-white/5 to-white/10 md:hover:bg-none md:border-0"
      >
        Отзывы
      </button>
      <button
        @click="scrollToElement('contacts')"
        class="uppercase py-2 md:py-4 text-left border-white/20 border-t-[0.1px] hover:bg-gradient-to-b from-white/5 to-white/10 md:hover:bg-none md:border-0"
      >
        Контакты
      </button>
    </div>
  </div>
  <section
    class="relative before:bg-[url('/img/car-background.png')] before:block before:bg-[0_6%] lg:before:bg-[5rem_20%] 2xl:before:bg-[0_0] before:h-[130%] before:w-full before:absolute before:z-0 before:bg-contain before:bg-no-repeat"
  >
    <img
      class="absolute left-0 top-0 z-10 w-1/2 -translate-y-9 sm:w-1/3 sm:translate-y-0"
      src="/public/img/curve.png"
      alt=""
    />
    <nav
      class="relative z-40 flex items-center justify-between px-[20px] py-6 sm:py-6 md:px-[30px] xl:px-[4vw]"
    >
      <div class="flex flex-row-reverse gap-4 md:flex-row lg:gap-[6vw]">
        <div class="grid grid-cols-[1fr_4fr] items-center">
          <img class="col-start-1 h-[80%]" src="/public/svg/logo.svg" alt="" />
          <div class="col-start-2 flex flex-col items-start text-white">
            <div class="text-2xl font-black sm:text-3xl">
              <span class="text-purple-light">PP</span>-сервис
            </div>
            <div class="text-sm sm:text-base">Оклейка автомобилей</div>
          </div>
        </div>
        <button
          @click="isMenuVisible = true"
          class="border-purple-light ] flex h-fit items-center gap-2 self-center rounded-full border bg-transparent px-[1.5625vw] py-[calc(1px+1.5625vw)] md:py-2"
        >
          <img src="/svg/menu.svg" alt="" class="w-[21px]" />
          <div class="hidden text-lg text-white md:block">Меню</div>
        </button>
      </div>
      <div class="flex gap-2 lg:gap-[6vw]">
        <div class="flex gap-[2.5vw] self-center">
          <a href="#">
            <img src="/svg/whatsapp-small.svg" alt="" />
          </a>
          <a href="#">
            <img class="translate-y-1" src="/svg/telegram-small.svg" alt="" />
          </a>
        </div>
        <div class="hidden items-center gap-3 sm:flex">
          <img class="h-[20px] md:h-[30px]" src="/svg/phone.svg" alt="" />
          <a
            href="tel:+7-495-499-88-22"
            class="text-lg font-black lg:text-2xl xl:text-3xl"
            >+7-495-499-88-22</a
          >
        </div>
      </div>
    </nav>
    <header
      class="relative z-10 my-4 px-[20px] text-white md:px-[30px] 2xl:my-12 xl:px-[80px] 2xl:px-[8vw]"
    >
      <div class="">
        <h1
          class="flex w-1/2 flex-col font-black uppercase leading-tight xl:w-2/3"
        >
          Оклейка защитной плёнкой
        </h1>
        <div class="my-5 text-lg sm:w-1/2 md:text-xl xl:w-3/5 xl:text-2xl">
          Оклейка защитной и матовой плёнкой кузова и салона авто и тонировка в
          РР-свервисе.
        </div>
        <div
          class="grid grid-cols-1 justify-between gap-4 sm:gap-[1.15vw] md:grid-cols-3 lg:w-[62vw] xl:w-[54vw] 2xl:w-[48vw]"
        >
          <InfoCard
            title="Мы - одни из первых"
            info="Наши специалисты работают с оклейкой авто с момента появления защитных пленок в России"
          />
          <InfoCard
            title="0% брака"
            info="В работе мы используем только проверенные и качественные плёнки от легальных производителей."
          />
          <InfoCard
            title="Занимаемся только пленками"
            info="Мы не распыляемся на большое количество разных услуг по детейлингу и рестайлингу."
          />
        </div>
        <div
          class="outline-purple-light my-8 flex flex-wrap items-center justify-center gap-2 gap-y-6 rounded-3xl p-5 pl-[2%] outline-dashed outline-2 md:rounded-full xl:my-10"
          style="width: fit-content"
        >
          <div class="text-center text-lg font-black">
            Хотите узнать стоимость? Пришлие фото на
          </div>
          <ContactButtons></ContactButtons>
        </div>
      </div>
    </header>
  </section>
  <section
    id="whatYouWant"
    class="before:bg-[url('/img/bubbles.png')] before:block before:w-full before:h-full before:bg-contain before:bg-no-repeat before:absolute before:mt-[3rem] sm:before:-mt-[10vw] 2xl:before:-mt-[16rem]"
  >
    <div
      class="relative z-20 mt-[8vw] sm:px-[20px] md:px-[30px] xl:px-[40px] 2xl:px-[8vw]"
    >
      <h2 class="mb-6 ml-3 text-white sm:ml-0 xl:mb-14">Что вам нужно?</h2>
      <div class="flex gap-[0.1vw]">
        <button
          class="rounded-t-lg px-[calc(12px+1.5625vw)] py-[calc(8px+1.5625vw)] font-bold text-black"
          :class="{
            'bg-white': selectedOption === 'option1',
            'bg-white/[0.2] text-[#C0C1C8] hover:bg-white/[0.4] hover:text-white':
              selectedOption !== 'option1',
          }"
          @click="selectedOption = 'option1'"
        >
          <h3 class="leading-tight">Оклейка прозрачной пленкой</h3>
        </button>
        <button
          class="rounded-t-lg px-[calc(12px+1.5625vw)] py-[calc(8px+1.5625vw)] font-bold text-black"
          :class="{
            'bg-white': selectedOption === 'option2',
            'bg-white/[0.2] text-[#C0C1C8] hover:bg-white/[0.4] hover:text-white':
              selectedOption !== 'option2',
          }"
          @click="selectedOption = 'option2'"
        >
          <h3 class="leading-tight">Оклейка матовой пленкой</h3>
        </button>
        <button
          class="rounded-t-lg px-[calc(12px+1.5625vw)] py-[calc(8px+1.5625vw)] font-bold text-black"
          :class="{
            'bg-white': selectedOption === 'option3',
            'bg-white/[0.2] text-[#C0C1C8] hover:bg-white/[0.4] hover:text-white':
              selectedOption !== 'option3',
          }"
          @click="selectedOption = 'option3'"
        >
          <h3 class="leading-tight">Тонировка стёкол</h3>
        </button>
      </div>
      <div
        class="rounded-b-lg rounded-tr-lg bg-white p-[calc(12px+1.5625vw)] text-black"
      >
        <div
          v-if="selectedOption === 'option1'"
          class="flex flex-col gap-[calc(16px+1.5625vw)]"
        >
          <div
            class="auto-rows-min gap-[3vw] gap-y-2 md:grid md:grid-cols-[minmax(273px,1fr)_minmax(0,1.5fr)] md:grid-rows-2"
          >
            <div
              class="col-span-1 col-start-2 row-span-1 row-start-1 mb-6 text-3xl font-bold lg:text-4xl 2xl:text-5xl"
            >
              Оклейка плёнкой кузова автомобиля необходима для его защиты от
              главных проблем, с которыми сталкиваются водители на дорогах.
            </div>
            <img
              class="col-span-1 col-start-1 row-span-1 row-start-1 w-full xl:row-span-2"
              src="/public/img/wraping.png"
              alt=""
            />
            <div
              class="col-span-2 col-start-1 row-span-1 row-start-2 xl:col-span-1 xl:col-start-2"
            >
              <div class="text-purple-vivid mb-4 text-3xl font-bold">
                Нанесение плёнки поможет:
              </div>
              <div
                class="flex flex-col gap-3 align-top text-lg font-normal lg:text-xl"
              >
                <div class="flex items-center gap-[calc(6px+1vw)]">
                  <img
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
          <div class="grid grid-cols-1 lg:grid-cols-3">
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
  <section
    id="whyUs"
    class="mt-[8vw] px-[20px] text-white md:px-[30px] xl:px-[40px] 2xl:px-[8vw]"
  >
    <h2 class="mb-12">Почему мы?</h2>
    <div class="grid grid-cols-1 gap-[2.5vw] md:grid-cols-3">
      <div>
        <img src="/public/img/why-us-1.png" alt="" />
        <h3 class="my-3">Оклеиваем даже Mercedes G-класса.</h3>
        <div class="text-base font-normal md:text-lg xl:text-xl">
          У нас есть успешный опыт работы с автомобилями, наиболее сложными для
          оклейки, такими как Mercedes G-класса ("Гелендваген") и Jeep Wrangler.
          Кузов этих автомобилей имеет огромное количество мелких элементов,
          особенностей рельефа. Некоторые авто невозможно оклеить, не разобрав
          их полностью, что делает их оклейку невероятно сложной и кропотливой
          работой, с которой мы идеально справляемся!
        </div>
      </div>
      <div>
        <img src="/public/img/why-us-2.png" alt="" />
        <h3 class="my-3">Знаем все тонкости</h3>
        <div class="text-base font-normal md:text-lg xl:text-xl">
          Мы оклеиваем любые автомобили - от китайских новинок до премиальных
          иномарок. Наш опыт и знания позволяют подбирать наилучший вид плёнки
          для любого случая. В том числе, мы работаем с самой дорогой плёнкой,
          нанесение которой является сложным процессом, с которым не справится
          новичок, а только профессионал с большим опытом.
        </div>
      </div>
      <div>
        <img src="/public/img/why-us-3.png" alt="" />
        <h3 class="my-3">Не используем шаблоны.</h3>
        <div class="text-base font-normal md:text-lg xl:text-xl">
          При оклейке кузова мы не используем лекала, а режем плёнку сами.
          Благодаря этому плёнка на всех сложных местах (выступы, углубления,
          края) ложится с запасом, что полностью предотвращает попадание под неё
          влаги, пыли и других несущих вред для покрытия частиц.
        </div>
      </div>
    </div>
  </section>
  <section
    id="whereToOrder"
    class="px-[20px] py-[8vw] text-white md:px-[30px] xl:px-[40px] 2xl:px-[8vw]"
  >
    <h2 class="my-3 w-2/3 lg:my-6">где именно заказать оклейку?</h2>
    <div class="my-6 text-[22px] font-normal lg:my-10 lg:text-3xl">
      Наглядно покажем чем мы отличаемся от других мест
    </div>
    <div
      class="bg-purple-dark mb-14 flex w-max rounded-full p-2 text-[17px] sm:p-3 sm:text-2xl xl:text-[25px]"
    >
      <button
        class="relative rounded-full bg-transparent p-2 px-[4vw] text-[#A6A5C3] before:absolute before:left-1/2 before:top-full before:h-0 before:w-0 before:-translate-x-1/2 before:border-x-[11px] before:border-t-[22px] before:border-solid before:border-transparent sm:p-5 lg:px-12"
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
        class="relative rounded-full bg-transparent p-2 px-[4vw] text-[#A6A5C3] before:absolute before:left-1/2 before:top-full before:h-0 before:w-0 before:-translate-x-1/2 before:border-x-[11px] before:border-t-[22px] before:border-solid before:border-transparent sm:p-5 lg:px-12"
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
        class="relative rounded-full bg-transparent p-2 px-[4vw] text-[#A6A5C3] before:absolute before:left-1/2 before:top-full before:h-0 before:w-0 before:-translate-x-1/2 before:border-x-[11px] before:border-t-[22px] before:border-solid before:border-transparent sm:p-5 lg:px-12"
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
    <div v-if="shipmentOption === 'option1'">
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
          подготовленное помещение - удобный бокс с максимальным уровнем чистоты
          и стерильности
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
      class="outline-purple-light my-8 flex flex-wrap items-center justify-center gap-2 gap-y-6 rounded-3xl p-5 pl-[2%] outline-dashed outline-2 md:rounded-full xl:my-10"
      style="width: fit-content"
    >
      <div class="text-center text-lg font-black">
        Хотите узнать стоимость? Пришлие фото на
      </div>
      <ContactButtons></ContactButtons>
    </div>
  </section>
  <section
    id="materials"
    class="overflow-hidden bg-[#D9D9D9] py-[8vw] text-black xl:flex xl:justify-between"
  >
    <div
      class="flex-none px-[20px] md:px-[30px] xl:w-3/5 xl:pl-[40px] 2xl:w-[60vw] 2xl:pl-[8vw]"
    >
      <div class="relative flex justify-between">
        <div>
          <h2 class="my-4 lg:my-6">С какой плёнкой мы работаем?</h2>
          <div
            class="bg-purple-dark mb-14 flex w-max rounded-full p-2 text-[17px] sm:p-3 sm:text-2xl xl:text-[25px]"
          >
            <button
              class="relative rounded-full bg-transparent p-2 px-[4vw] text-[#A6A5C3] before:absolute before:left-1/2 before:top-full before:h-0 before:w-0 before:-translate-x-1/2 before:border-x-[11px] before:border-t-[22px] before:border-solid before:border-transparent sm:p-5 lg:px-12"
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
              class="relative rounded-full bg-transparent p-2 px-[4vw] text-[#A6A5C3] before:absolute before:left-1/2 before:top-full before:h-0 before:w-0 before:-translate-x-1/2 before:border-x-[11px] before:border-t-[22px] before:border-solid before:border-transparent sm:p-5 lg:px-12"
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
  <section id="projects" class="relative overflow-hidden">
    <img
      class="absolute left-0 top-0 z-0"
      src="/public/img/projects-background.png"
      alt=""
    />
    <div
      class="relative z-10 p-[20px] mt-[6vw] 2xl:mt-[1rem] md:p-[30px] xl:p-[40px] 2xl:p-[8vw]"
    >
      <h2 class="2xl:mb-10 mb-6 text-white">Знаковые проекты</h2>
      <div
        class="relative grid grid-cols-1 gap-[2.7vw] md:right-[1%] md:grid-cols-3 md:pr-[1%]"
      >
        <div class="relative flex gap-[5vw] md:flex-col md:gap-0">
          <div class="relative">
            <img
              class="absolute left-0 top-0 z-0 h-[60%] md:h-auto md:w-[80%]"
              src="/public/svg/logo-dark.svg"
              alt=""
            />
            <img
              class="relative left-[8%] top-[5%] z-10"
              src="/public/img/mercedes.png"
              alt="mercedes"
            />
          </div>
          <div class="relative md:left-[8%]">
            <h3 class="md:mt-10">Mercedes G-classe 2023</h3>
            <div class="my-5 text-2xl font-normal">
              Оклейка полиуретановой пленкой, комплектация “<span
                class="text-purple-light underline"
                >Базовая защита</span
              >”
            </div>
            <div class="text-lg font-normal text-[#999999]">22 апреля 2024</div>
          </div>
        </div>
        <div class="relative flex gap-[5vw] md:flex-col md:gap-0">
          <div class="relative">
            <img
              class="absolute left-0 top-0 z-0 h-[60%] md:h-auto md:w-[80%]"
              src="/public/svg/logo-dark.svg"
              alt=""
            />
            <img
              class="relative left-[8%] top-[5%] z-10"
              src="/public/img/bmw.png"
              alt="mercedes"
            />
          </div>
          <div class="relative md:left-[8%]">
            <h3 class="md:mt-10">BMW X5 G05 2022</h3>
            <div class="my-5 text-2xl font-normal">
              Оклейка полиуретановой пленкой, комплектация “<span
                class="text-purple-light underline"
                >Базовая защита</span
              >”
            </div>
            <div class="text-lg font-normal text-[#999999]">22 апреля 2024</div>
          </div>
        </div>
        <div class="relative flex gap-[5vw] md:flex-col md:gap-0">
          <div class="relative">
            <img
              class="absolute left-0 top-0 z-0 h-[60%] md:h-auto md:w-[80%]"
              src="/public/svg/logo-dark.svg"
              alt=""
            />
            <img
              class="relative left-[8%] top-[5%] z-10"
              src="/public/img/audi.png"
              alt="mercedes"
            />
          </div>
          <div class="relative md:left-[8%]">
            <h3 class="md:mt-10">Audi SQ-8 2023</h3>
            <div class="my-5 text-2xl font-normal">
              Оклейка полиуретановой пленкой, комплектация “<span
                class="text-purple-light underline"
                >Базовая защита</span
              >”
            </div>
            <div class="text-lg font-normal text-[#999999]">22 апреля 2024</div>
          </div>
        </div>
      </div>
      <div class="flex flex-col justify-center">
        <button
          class="text-normal my-16 w-max self-center rounded-full bg-white px-10 py-4 text-2xl text-black hover:bg-[#5057A7] hover:text-white"
        >
          Показать еще 15 работ
        </button>
        <div
          class="outline-purple-light my-8 flex flex-wrap items-center justify-center gap-2 gap-y-6 self-center rounded-3xl p-5 pl-[2%] outline-dashed outline-2 md:rounded-full xl:my-10"
          style="width: fit-content"
        >
          <div class="text-center text-lg font-black">
            Хотите узнать стоимость? Пришлие фото на
          </div>
          <ContactButtons></ContactButtons>
        </div>
      </div>
    </div>
  </section>
  <section
    id="salon"
    class="relative mt-[calc(40px+4vw)] px-[20px] text-white md:px-[30px] xl:px-[40px] 2xl:px-[8vw]"
  >
    <img
      class="absolute right-0 top-0 z-0 -translate-y-28 md:opacity-35"
      src="/public/img/salon.png"
      alt="salon"
    />
    <div class="relative z-10">
      <h2 class="mb-12">Также мы занимаемся оклейкой салона</h2>
      <div class="my-10 text-3xl font-normal">
        Оклейка салона делается только дорогой плёнкой, т.к. работа тонкая, есть
        много мелких деталей и важна качественная тактильность.
      </div>
      <div class="my-4 text-4xl font-normal text-[#949CFF]">
        Почему нужно обратиться именно к нам?
      </div>
      <div class="mb-14 grid gap-12 md:grid-cols-3">
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
        class="outline-purple-light my-8 flex flex-wrap items-center justify-center gap-2 gap-y-6 self-center rounded-3xl p-5 pl-[2%] outline-dashed outline-2 md:rounded-full xl:my-10"
        style="width: fit-content"
      >
        <div class="text-center text-lg font-black">
          Хотите узнать стоимость? Пришлие фото на
        </div>
        <ContactButtons></ContactButtons>
      </div>
    </div>
  </section>
  <section id="faq" class="relative my-[8vw]">
    <img class="t-0 l-0 absolute z-0" src="/public/svg/faq.svg" alt="" />
    <div
      class="relative z-10 p-[20px] py-[8vw] md:p-[30px] xl:p-[40px] 2xl:p-[8vw]"
    >
      <div class="flex flex-col items-start gap-[8vw] xl:flex-row">
        <h2>вопрос-ответ</h2>
        <div class="flex flex-col gap-4 text-white xl:w-4/5">
          <div
            class="group rounded-lg border-2 border-white/[0.15] bg-[rgba(255,255,255,0.10)] px-10 py-7"
          >
            <div class="flex items-center gap-4">
              <button>
                <img
                  class="relative group-hover:hidden"
                  src="/public/svg/plus.svg"
                  alt="+"
                />
                <img
                  class="relative hidden group-hover:block"
                  src="/public/svg/minus.svg"
                  alt="-"
                />
              </button>
              <div class="text-2xl font-bold">
                Можете ли наклеить плёнку на выезде, в моём гараже?
              </div>
            </div>
            <div
              class="mt-4 hidden pl-14 text-lg font-normal group-hover:block"
            >
              Твердое и одновременно хрупкое, стекло – один из самых непростых
              объектов ухода. На его восстановление до состояния нового уходит
              немало времени. К счастью, наши мастера владеют всеми необходимыми
              знаниями и имеют многолетний опыт работы с материалом. В сочетании
              с новейшим оборудованием и фирменной автохимией с устойчивым
              эффектом это позволяет нашей студии обслуживать автостекла
              неизменно быстро, качественно и с гарантией результата.
            </div>
          </div>
          <div
            class="group rounded-lg border-2 border-white/[0.15] bg-[rgba(255,255,255,0.10)] px-10 py-7"
          >
            <div class="flex items-center gap-4">
              <button>
                <img
                  class="relative group-hover:hidden"
                  src="/public/svg/plus.svg"
                  alt="+"
                />
                <img
                  class="relative hidden group-hover:block"
                  src="/public/svg/minus.svg"
                  alt="-"
                />
              </button>
              <div class="text-2xl font-bold">
                Правда ли что защитная плёнка уже через пару лет желтеет и
                иногда совсем разрушается?
              </div>
            </div>
            <div
              class="mt-4 hidden pl-14 text-lg font-normal group-hover:block"
            >
              Твердое и одновременно хрупкое, стекло – один из самых непростых
              объектов ухода. На его восстановление до состояния нового уходит
              немало времени. К счастью, наши мастера владеют всеми необходимыми
              знаниями и имеют многолетний опыт работы с материалом. В сочетании
              с новейшим оборудованием и фирменной автохимией с устойчивым
              эффектом это позволяет нашей студии обслуживать автостекла
              неизменно быстро, качественно и с гарантией результата.
            </div>
          </div>
          <div
            class="group rounded-lg border-2 border-white/[0.15] bg-[rgba(255,255,255,0.10)] px-10 py-7"
          >
            <div class="flex gap-4">
              <button>
                <img
                  class="relative group-hover:hidden"
                  src="/public/svg/plus.svg"
                  alt="+"
                />
                <img
                  class="relative hidden group-hover:block"
                  src="/public/svg/minus.svg"
                  alt="-"
                />
              </button>
              <div class="text-2xl font-bold">
                Не испортит ли нанесение плёнки лакокрасочное покрытие моего
                автомобиля?
              </div>
            </div>
            <div
              class="mt-4 hidden pl-14 text-lg font-normal group-hover:block"
            >
              Твердое и одновременно хрупкое, стекло – один из самых непростых
              объектов ухода. На его восстановление до состояния нового уходит
              немало времени. К счастью, наши мастера владеют всеми необходимыми
              знаниями и имеют многолетний опыт работы с материалом. В сочетании
              с новейшим оборудованием и фирменной автохимией с устойчивым
              эффектом это позволяет нашей студии обслуживать автостекла
              неизменно быстро, качественно и с гарантией результата.
            </div>
          </div>
          <div
            class="group rounded-lg border-2 border-white/[0.15] bg-[rgba(255,255,255,0.10)] px-10 py-7"
          >
            <div class="flex items-center gap-4">
              <button>
                <img
                  class="relative group-hover:hidden"
                  src="/public/svg/plus.svg"
                  alt="+"
                />
                <img
                  class="relative hidden group-hover:block"
                  src="/public/svg/minus.svg"
                  alt="-"
                />
              </button>
              <div class="text-2xl font-bold">
                Нужно ли как-то специально ухаживать за плёнкой после её
                нанесения?
              </div>
            </div>
            <div
              class="mt-4 hidden pl-14 text-lg font-normal group-hover:block"
            >
              Твердое и одновременно хрупкое, стекло – один из самых непростых
              объектов ухода. На его восстановление до состояния нового уходит
              немало времени. К счастью, наши мастера владеют всеми необходимыми
              знаниями и имеют многолетний опыт работы с материалом. В сочетании
              с новейшим оборудованием и фирменной автохимией с устойчивым
              эффектом это позволяет нашей студии обслуживать автостекла
              неизменно быстро, качественно и с гарантией результата.
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section
    id="reviews"
    class="flex flex-col gap-[2vw] bg-white p-[20px] py-[8vw] text-black md:p-[30px] xl:flex-row xl:gap-20 xl:p-[40px] 2xl:p-[8vw]"
  >
    <h2>Отзывы</h2>
    <div class="h-[800px] w-full overflow-hidden sm:w-[560px]">
      <iframe
        style="
          width: 100%;
          height: 100%;
          border: 1px solid #e6e6e6;
          border-radius: 8px;
        "
        src="https://yandex.ru/maps-reviews-widget/226327670406?comments"
      ></iframe>
      <a
        href="https://yandex.ru/maps/org/usadba_izmaylovo/226327670406/"
        target="_blank"
        style="
          box-sizing: border-box;
          text-decoration: none;
          color: #b3b3b3;
          font-size: 10px;
          font-family:
            YS Text,
            sans-serif;
          padding: 0 20px;
          width: 100%;
          text-align: center;
        "
        >Усадьба Измайлово на карте Москвы — Яндекс.Карты</a
      >
    </div>
  </section>
  <footer
    id="contacts"
    class="relative overflow-hidden text-white before:bg-[url('/img/bubble-and-gradient.png')] before:block before:h-[80%] before:w-[80%] before:bottom-[5%] md:before:right-0 md:before:top-[5%] before:absolute before:z-0 before:bg-right before:bg-cover before:bg-no-repeat"
  >
    <div
      class="relative xl:mb-5 z-10 grid grid-cols-1 gap-[8vw] p-[20px] pt-[7vw] md:grid-cols-[1fr_3fr] md:px-[30px] xl:px-[40px] 2xl:p-[8vw]"
    >
      <div class="grid-column-start-1">
        <h2 class="mb-16">контакты</h2>
        <div class="my-7 flex items-center gap-4">
          <img class="h-[40px]" src="/public/svg/phone.svg" alt="" />
          <a href="tel:+7-495-499-88-22" class="text-4xl font-normal"
            >+7-495-499-88-22</a
          >
        </div>
        <div class="mb-6 text-xl font-normal">
          г. Москва, проспект Вернадского, 12Д
        </div>
        <div class="text-purple-light mb-6 underline">mail@ppservice.ru</div>
        <ContactButtons></ContactButtons>
      </div>
      <div class="h-full grid-column-start-2">
        <div
          class="relative p-[5%] aspect-[9/6] w-full before:bg-[url('/svg/logo-dark.svg')] before:block before:h-full before:w-full before:absolute before:z-0 before:bg-contain before:bg-no-repeat before:-top-[5%] before:-left-[4%]"
        >
          <iframe
            class="relative z-10 rounded-2xl"
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A512003a69a1d413deddf6b000a4ec5de6c60bd02a06434742c307dbf80e2d3a0&amp;source=constructor"
            width="100%"
            height="100%"
            frameborder="0"
          ></iframe>
        </div>
      </div>
    </div>
    <div
      class="flex flex-wrap justify-between gap-6 px-[20px] py-6 sm:py-8 md:px-[30px] xl:px-[4vw]"
    >
      <div class="grid grid-cols-[1fr_4fr] items-center">
        <img class="col-start-1 h-[80%]" src="/public/svg/logo.svg" alt="" />
        <div class="col-start-2 flex flex-col items-start text-white">
          <div class="text-2xl font-black sm:text-3xl">
            <span class="text-purple-light">PP</span>-сервис
          </div>
          <div class="text-sm sm:text-base">Оклейка автомобилей</div>
        </div>
      </div>
      <a href="#" class="flex flex-wrap items-center gap-4">
        <div class="text-xl font-light">Разработка сайта</div>
        <img src="/public/img/diol.png" />
      </a>
    </div>
  </footer>
</template>

<script>
import ContactButtons from "./assets/components/contact-buttons.vue";
import InfoCard from "./assets/components/info-card.vue";
import ServiceCard from "./assets/components/service-card.vue";
export default {
  components: {
    InfoCard,
    ServiceCard,
    ContactButtons,
  },
  data() {
    return {
      selectedOption: "option1",
      shipmentOption: "option1",
      company: "llumar",
      isMenuVisible: false,
    };
  },
  methods: {
    scrollToElement(id) {
      let element = document.getElementById(id);
      element.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>
