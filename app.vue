<template>
  <section class="relative">
    <img class="absolute left-0 top-0 z-10" src="/public/img/curve.png" alt="" />
    <div class="absolute right-0 top-0 z-0 w-full">
      <img src="/public/img/car-background.png" class="object-fill w-full" />
    </div>
    <nav class="relative z-40 flex items-center px-[20px] md:px-[30px] xl:px-[4vw] py-6 sm:py-8 justify-between">
      <div class="flex flex-row-reverse md:flex-row gap-4 lg:gap-[6vw]">
        <div class="grid grid-cols-[1fr_4fr] items-center gap-2">
          <img class="col-start-1" src="/public/svg/logo.svg" alt="" />
          <div class="col-start-2 flex flex-col items-start text-white">
            <div class="text-2xl sm:text-3xl font-black"><span class="text-purple-light">PP</span>-сервис</div>
            <div class="text-sm sm:text-base">Оклейка автомобилей</div>
          </div>
        </div>
        <button class="border-purple-light flex items-center self-center gap-2 rounded-full border bg-transparent h-fit px-[1.5625vw] py-[calc(4px+1.5625vw)] md:py-4  ]">
          <img src="/svg/menu.svg" alt="" class="w-[21px]"/>
          <div class="hidden md:block text-lg text-white">Меню</div>
        </button>
      </div>
      <div class="flex gap-2 lg:gap-[6vw]">
        <div class="flex gap-[2.5vw] self-center">
          <a href="#">
            <img src="/svg/whatsapp-small.svg" alt=""/>
          </a>
          <a href="#">
            <img class="translate-y-1" src="/svg/telegram-small.svg" alt=""/>
          </a>
        </div>
        <div class="sm:flex gap-3 items-center hidden">
          <img class="h-[20px] md:h-[30px]" src="/svg/phone.svg" alt="" />
          <a href="tel:+7-495-499-88-22" class="text-lg lg:text-2xl xl:text-3xl font-black">+7-495-499-88-22</a>
        </div>
      </div>
    </nav>
    <header class="relative z-10 px-[20px] 2xl:px-[8vw] xl:px-[80px] md:px-[30px] text-white xl:my-12 my-6">
      <div class=" lg:w-[62vw] 1.5xl:w-[42vw]">
        <h1 class="flex flex-col font-black uppercase leading-tight">Оклейка защитной плёнкой</h1>
        <div class="my-5 text-lg md:text-xl xl:text-2xl">Оклейка защитной и матовой плёнкой кузова и салона авто и тонировка в РР-свервисе.</div>
        <div class="grid grid-cols-1 sm:grid-cols-3 justify-between sm:gap-[1.15vw] gap-4">
          <InfoCard title="Мы - одни из первых" info="Наши специалисты работают с оклейкой авто с момента появления защитных пленок в России" />
          <InfoCard title="0% брака" info="В работе мы используем только проверенные и качественные плёнки от легальных производителей." />
          <InfoCard title="Занимаемся только пленками" info="Мы не распыляемся на большое количество разных услуг по детейлингу и рестайлингу." />
        </div>
        <div class="outline-purple-light my-8 xl:my-10 flex flex-wrap items-center gap-2 gap-y-6 justify-center md:rounded-full rounded-3xl p-5 pl-[2%] outline-dashed outline-2" style="width: fit-content;">
          <div class="text-lg text-center font-black">Хотите узнать стоимость? Пришлие фото на</div>
          <ContactButtons></ContactButtons>
        </div>
      </div>
    </header>
  </section>
  <section class="relative sm:px-[20px] 2xl:px-[8vw] xl:px-[40px] md:px-[30px] mt-[8vw]">
    <img class="absolute top-0 z-10" src="/public/img/bubbles.png" alt="" />
    <div class="relative z-20">
      <h2 class="mb-6 xl:mb-14 ml-3 sm:ml-0 text-white">Что вам нужно?</h2>
      <div class="flex gap-[0.1vw]">
        <button class="rounded-t-lg px-[calc(12px+1.5625vw)] py-[calc(8px+1.5625vw)] font-bold text-black "
        :class="{
            'bg-white': selectedOption === 'option1',
            'bg-white/[0.2] text-[#C0C1C8] hover:bg-white/[0.4] hover:text-white': selectedOption !== 'option1',
          }"
          @click="selectedOption = 'option1'"
        >
          <h3 class="leading-tight">Оклейка прозрачной пленкой</h3>
        </button>
        <button class="rounded-t-lg px-[calc(12px+1.5625vw)] py-[calc(8px+1.5625vw)] font-bold text-black"
        :class="{
            'bg-white': selectedOption === 'option2',
            'bg-white/[0.2] text-[#C0C1C8] hover:bg-white/[0.4] hover:text-white': selectedOption !== 'option2',
          }"
          @click="selectedOption = 'option2'"
        >
          <h3 class="leading-tight">Оклейка матовой пленкой</h3>
        </button>
        <button class="rounded-t-lg px-[calc(12px+1.5625vw)] py-[calc(8px+1.5625vw)] font-bold text-black"
        :class="{
            'bg-white': selectedOption === 'option3',
            'bg-white/[0.2] text-[#C0C1C8] hover:bg-white/[0.4] hover:text-white': selectedOption !== 'option3',
          }"
          @click="selectedOption = 'option3'"
        >
          <h3 class="leading-tight">Тонировка стёкол</h3>
        </button>
      </div>
      <div class="rounded-b-lg rounded-tr-lg bg-white p-[calc(12px+1.5625vw)] text-black">
        <div  v-if="selectedOption === 'option1'" class="flex flex-col gap-[calc(16px+1.5625vw)]">
          <div class="md:grid md:grid-rows-2 md:grid-cols-[minmax(273px,1fr)_minmax(0,1.5fr)] auto-rows-min gap-[3vw] gap-y-2">             
            <div class="row-start-1 col-start-2 row-span-1 col-span-1 mb-6 text-3xl lg:text-4xl 2xl:text-5xl font-bold">Оклейка плёнкой кузова автомобиля необходима для его защиты от главных проблем, с которыми сталкиваются водители на дорогах.</div>
            <img class="xl:row-span-2 col-start-1 row-start-1 row-span-1 col-span-1 w-full" src="/public/img/wraping.png" alt="" />
            <div class="xl:col-start-2 xl:col-span-1 col-start-1 row-start-2 col-span-2 row-span-1">
              <div class=" text-purple-vivid mb-4 text-3xl font-bold">Нанесение плёнки поможет:</div>
              <div class="text-lg lg:text-xl font-normal align-top flex flex-col gap-3">
                <div class="flex items-center gap-[calc(6px+1vw)]">
                  <img src="/public/svg/violet-shield-wo-shadow.svg" alt="" class="translate-y-1" style="filter: drop-shadow( 0px 4px 4px rgba(140, 149, 2554, 0.6));"/>
                  <div>защитить от гравия, пескоструя, осадков;</div>
                </div>
                <div class="flex items-center gap-[calc(6px+1vw)]">
                  <img src="/public/svg/violet-shield-wo-shadow.svg" alt="" class="translate-y-1" style="filter: drop-shadow( 0px 4px 4px rgba(140, 149, 2554, 0.6));"/>
                  <div>избежать критичных проблем из-за небольших повреждений, царапин, сколов;</div>
                </div>
                <div class="flex items-center gap-[calc(6px+1vw)]">
                  <img src="/public/svg/violet-shield-wo-shadow.svg" alt="" class="translate-y-1" style="filter: drop-shadow( 0px 6px 6px rgba(140, 149, 2554, 0.6));"/>
                  <div>сохранить значительно дольше лакокрасочное покрытие</div>
                </div>
              </div>
            </div>
          </div>
          <h2 class="text-black leading-tight normal-case">Выберите интересующий Вас комплекс</h2>
          <div class="grid grid-cols-1 md:grid-cols-3">
            <ServiceCard type="Обязательн" percent="60" goodFor="живете в городе / ездите по городу." defend="передний бампер, капот, передние крылья, зеркала, стойки лобового стекла, передняя кромка крыши." noDefend="передние и задние двери, крышку багажника, крышу и т.п." description="Данный комплекс защищает основные зоны риска кузова автомобиля, на которые обычно приходится около 60-70% всех проблем. Такая защита предотвратит нежелательные последствия от гравия из-под колёс, пескоструя, выпавших из впереди идущей машины небольших предметов, а также от последствий серьезных осадков. Но при этом, внушительная часть кузова автомобиля останется без защиты." gradientClass="1" imgSrc="/img/bmv-cover1.png"/>
            <ServiceCard type="Оптимальн" percent="80" goodFor="живете за городом / ездите по городу." defend="передний бампер, капот, передние крылья, зеркала, стойки лобового стекла, передняя кромка крыши, внутренние пороги, зоны под ручками, зона выгрузки, кромки дверей, стойки." noDefend="передние и задние двери, крышку багажника, крышу и т.п." description="Данный комплекс включает в себя оклейку всех обязательных элементов, а также тех, которые не сразу видны, но обычно подвергаются постоянной нагрузке и риску. Например, это зоны под ручками, страдающие от ногтей и пороги, покрытие которых разрушает обувь с каблуками." gradientClass="2" imgSrc="/img/bmv-cover2.png"/>
            <ServiceCard type="Полн" percent="100" goodFor="живете за городом / много путешествуете на автомобиле." defend="Включает защиту всего кузова автомобиля." noDefend="" description="Помимо защиты от гравия, пескоструя и осадков, оклейка плёнкой всех элементов и узлов кузова автомобиля может предотвратить повреждение покрытия, появление царапин и сколов, как из-за небольших инцидентов (например, при парковке во дворе или столкновения с тележкой у супермаркета), так и при мелких дтп - ведь они чаще всего и вредят не основным частям кузова." gradientClass="3" imgSrc="/img/bmv-cover3.png"/>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="px-[20px] 2xl:px-[8vw] xl:px-[40px] md:px-[30px] mt-[8vw] text-white">
    <h2 class="mb-12">Почему мы?</h2>
    <div class="grid grid-cols-1 md:grid-cols-3">
      <div>
        <img src="/public/img/why-us-1.png" alt="" />
        <h3 class="my-3">Оклеиваем даже Mercedes G-класса.</h3>
        <div class="text-base md:text-lg xl:text-xl font-normal">У нас есть успешный опыт работы с автомобилями, наиболее сложными для оклейки, такими как Mercedes G-класса ("Гелендваген") и Jeep Wrangler. Кузов этих автомобилей имеет огромное количество мелких элементов, особенностей рельефа. Некоторые авто невозможно оклеить, не разобрав их полностью, что делает их оклейку невероятно сложной и кропотливой работой, с которой мы идеально справляемся!</div>
      </div>
      <div>
        <img src="/public/img/why-us-2.png" alt="" />
        <h3 class="my-3">Знаем все тонкости</h3>
        <div class="text-base md:text-lg xl:text-xl font-normal">Мы оклеиваем любые автомобили - от китайских новинок до премиальных иномарок. Наш опыт и знания позволяют подбирать наилучший вид плёнки для любого случая. В том числе, мы работаем с самой дорогой плёнкой, нанесение которой является сложным процессом, с которым не справится новичок, а только профессионал с большим опытом.</div>
      </div>
      <div>
        <img src="/public/img/why-us-3.png" alt="" />
        <h3 class="my-3">Не используем шаблоны.</h3>
        <div class="text-base md:text-lg xl:text-xl font-normal">При оклейке кузова мы не используем лекала, а режем плёнку сами. Благодаря этому плёнка на всех сложных местах (выступы, углубления, края) ложится с запасом, что полностью предотвращает попадание под неё влаги, пыли и других несущих вред для покрытия частиц.</div>
      </div>
    </div>
  </section>
  <section class="px-[20px] 2xl:px-[8vw] xl:px-[40px] md:px-[30px] py-[8vw] text-white">
    <h2 class="my-6 w-2/3">где именно заказать оклейку?</h2>
    <div class="my-10 text-3xl font-normal">Наглядно покажем чем мы отличаемся от других мест</div>
    <div class="bg-purple-dark mb-14 flex w-max rounded-full p-3 text-2xl">
      <button class="group relative" @click="shipmentOption = 'option1'">
        <div class="rounded-full bg-transparent p-5 px-12 text-[#A6A5C3]"
          :class="{
            'bg-white text-black': shipmentOption == 'option1',
            'hover:underline': shipmentOption !== 'option1',
          }"
        >
          У нас
        </div>
        <div class="absolute bottom-0 left-1/3 h-0 w-0 translate-y-5 border-x-[11px] border-t-[22px] border-solid border-transparent"
          :class="{
            'border-t-white': shipmentOption == 'option1',
          }"
        >
        </div>
      </button>
      <button class="group relative" @click="shipmentOption = 'option2'">
        <div class="rounded-full bg-transparent p-5 px-12 text-[#A6A5C3]"
          :class="{
            'bg-white text-black': shipmentOption == 'option2',
            'hover:underline': shipmentOption !== 'option2',
          }"
        >
          У диллера
        </div>
        <div class="absolute bottom-0 left-1/3 h-0 w-0 translate-y-5 border-x-[11px] border-t-[22px] border-solid border-transparent"
          :class="{
            'border-t-white': shipmentOption == 'option2',
          }"
        >
        </div>
      </button>
      <button class="group relative" @click="shipmentOption = 'option3'">
        <div class="rounded-full bg-transparent p-5 px-12 text-[#A6A5C3]"
          :class="{
            'bg-white text-black': shipmentOption == 'option3',
            'hover:underline': shipmentOption !== 'option3',
          }"
        >
          По объявлению
        </div>
        <div class="absolute bottom-0 left-1/3 h-0 w-0 translate-y-5 border-x-[11px] border-t-[22px] border-solid border-transparent"
          :class="{
            'border-t-white': shipmentOption == 'option3',
          }"

        >
        </div>
      </button>
    </div>
    <div  v-if="shipmentOption === 'option1'">
      <div class="flex items-center gap-1">
        <img src="/public/svg/cross.svg" alt="" class="translate-y-1" style="filter: drop-shadow( 0px 4px 4px rgba(140, 149, 2554, 0.4));" />
        <div class="align-top text-xl">качественная плёнка - только легальная плёнка от проверенных производителей</div>
      </div>
      <div class="flex items-center gap-1">
        <img src="/public/svg/cross.svg" alt="" class="translate-y-1" style="filter: drop-shadow( 0px 4px 4px rgba(140, 149, 2554, 0.4));" />
        <div class="align-top text-xl">подготовленное помещение - удобный бокс с максимальным уровнем чистоты и стерильности</div>
      </div>
      <div class="flex items-center gap-1">
        <img src="/public/svg/cross.svg" alt="" class="translate-y-1" style="filter: drop-shadow( 0px 4px 4px rgba(140, 149, 2554, 0.4));" />
        <div class="align-top text-xl">разная цена - на выбор доступны комплексы, отличающиеся по степени защиты и цене</div>
      </div>
      <div class="flex items-center gap-1">
        <img src="/public/svg/cross.svg" alt="" class="translate-y-1" style="filter: drop-shadow( 0px 4px 4px rgba(140, 149, 2554, 0.4));" />
        <div class="align-top text-xl">высокий уровень профессионализма - наши специалисты занимаются оклейкой уже больше 15 лет</div>
      </div>
    </div>
    <div class="outline-purple-light my-8 xl:my-10 flex flex-wrap items-center gap-2 gap-y-6 justify-center md:rounded-full rounded-3xl p-5 pl-[2%] outline-dashed outline-2" style="width: fit-content;">
      <div class="text-lg text-center font-black">Хотите узнать стоимость? Пришлие фото на</div>
      <ContactButtons></ContactButtons>
    </div>
  </section>
  <section class="bg-[#D9D9D9] py-[8vw] overflow-hidden text-black xl:flex xl:justify-between">
    <div class="2xl:w-[60vw] flex-none xl:w-3/5 px-[20px] 2xl:pl-[8vw] xl:pl-[40px] md:px-[30px]">
      <div class="relative flex justify-between">
        <div>
          <h2 class="my-4 lg:my-6">С какой плёнкой мы работаем?</h2>
        <div class="bg-purple-dark my-6 flex w-max rounded-full p-3 text-2xl">
          <button class="group relative" @click="company = 'llumar'">
          <div class="rounded-full bg-transparent p-5 px-12 text-[#A6A5C3]"
            :class="{
              'bg-white text-black': company == 'llumar',
              'hover:underline': company !== 'llumar',
            }"
          >
            Llumar
          </div>
          <div class="absolute bottom-0 left-1/3 h-0 w-0 translate-y-5 border-x-[11px] border-t-[22px] border-solid border-transparent"
            :class="{
              'border-t-white': company == 'llumar',
            }"
          >
          </div>
        </button>
        <button class="group relative" @click="company = 'suntek'">
          <div class="rounded-full bg-transparent p-5 px-12 text-[#A6A5C3]"
            :class="{
              'bg-white text-black': company == 'suntek',
              'hover:underline': company !== 'suntek',
            }"
          >
            SunTek
          </div>
          <div class="absolute bottom-0 left-1/3 h-0 w-0 translate-y-5 border-x-[11px] border-t-[22px] border-solid border-transparent"
            :class="{
              'border-t-white': company == 'suntek',
            }"
          >
          </div>
          </button>
        </div>
        </div>
        <img class="xl:hidden hidden sm:flex h-full object-contain relative top-0 right-0 z-0 w-[227px] translate-x-[30px] -translate-y-12" src="/public/img/wrap.png" alt="" />
      </div>  
      <div v-if="company == 'llumar'" class="sm:-translate-y-20  xl:translate-y-0">
        <div class="grid grid-cols-3 grid-rows-3 items-center gap-x-7">
          <img class="col-span-1 row-start-1 sm:row-span-3 w-full" src="/public/img/lumar.png" alt="" />
          <div class="col-span-2 col-start-2 row-start-1 text-3xl font-bold">Llumar</div>
          <div class="col-span-3 row-span-2 col-start-1 sm:col-start-2 row-start-2 text-2xl">это плёнка от знаменитого американского производителя Eastman Chemical Company. Данная плёнка уже много лет заслуженно считается одной из лучших для тонировки стёкол автомобиля и популярна во всём мире благодаря проверенному качеству и беспроблемной эксплуатации.</div>
        </div>
        <div class="my-8 text-2xl font-bold">Ключевые преимущества плёнки Llumar:</div>
        <div class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 2xl:gap-[1vw] gap-3 text-xl">
          <div class="rounded-lg bg-white p-4">
            <img src="/public/svg/big-cross.svg" class="h-[70px]" alt="" />
            <div>высокий коэффициент защиты от вредных ультрафиолетовых лучей</div>
          </div>
          <div class="rounded-lg bg-white p-4">
            <img src="/public/svg/big-cross.svg" class="h-[70px]" alt="" />
            <div>повышенная видимость даже в темное время суток (в том числе даже вечером вы сможете легко парковаться без использования фонарей и камеры!)</div>
          </div>
          <div class="rounded-lg bg-white p-4">
            <img src="/public/svg/big-cross.svg" class="h-[70px]" alt="" />
            <div>максимальная толщина среди всех полиуретановых плёнок (214 микрон) сможет защитить стекло даже в случае лёгкого дтп</div>
          </div>
          <div class="rounded-lg bg-white p-4">
            <img src="/public/svg/big-cross.svg" class="h-[70px]" alt="" />
            <div>относительная сложность при нанесении, благодаря которой с данной пленкой работают только профессионалы, а дилетанты избегают её.</div>
          </div>
        </div>
      </div>
    </div>
    <img class="hidden object-contain 2xl:flex-auto flex-initial self-start xl:flex" src="/public/img/wrap.png" alt="" />
  </section>
  <section class="relative overflow-hidden">
    <img class="absolute left-0 top-0 z-0" src="/public/img/projects-background.png" alt="" />
    <div class="relative z-10 p-[20px] 2xl:p-[8vw] xl:p-[40px] md:p-[30px] pt-[8vw]">
      <h2 class="mb-14 text-white">Знаковые проекты</h2>
      <div class="relative grid grid-cols-1 md:grid-cols-3 gap-14 right-[2%] pr-[2%]">
        <div class="relative flex md:flex-col">
          <div class="relative">
            <img class="absolute left-0 top-0 z-0 h-[60%] md:h-auto md:w-[80%]" src="/public/svg/logo-dark.svg" alt="" />
            <img class="relative top-[5%] left-[8%] z-10" src="/public/img/mercedes.png" alt="mercedes" />
          </div>
          <div class="relative left-[8%]">
            <h3 class="md:mt-10">Mercedes G-classe 2023</h3>
            <div class="my-5 text-2xl font-normal">Оклейка полиуретановой пленкой, комплектация “<span class="text-purple-light underline">Базовая защита</span>”</div>
            <div class="text-lg font-normal text-[#999999]">22 апреля 2024</div>
          </div>
        </div>
        <div class="relative flex md:flex-col">
          <div class="relative">
            <img class="absolute left-0 top-0 z-0 h-[60%] md:h-auto md:w-[80%]" src="/public/svg/logo-dark.svg" alt="" />
            <img class="relative top-[5%] left-[8%] z-10" src="/public/img/bmw.png" alt="mercedes" />
          </div>
          <div class="relative left-[8%]">
            <h3 class="md:mt-10">BMW X5 G05 2022</h3>
            <div class="my-5 text-2xl font-normal">Оклейка полиуретановой пленкой, комплектация “<span class="text-purple-light underline">Базовая защита</span>”</div>
            <div class="text-lg font-normal text-[#999999]">22 апреля 2024</div>
          </div>
        </div>
        <div class="relative flex md:flex-col">
          <div class="relative">
            <img class="absolute left-0 top-0 z-0 h-[60%] md:h-auto md:w-[80%]" src="/public/svg/logo-dark.svg" alt="" />
            <img class="relative top-[5%] left-[8%] z-10" src="/public/img/audi.png" alt="mercedes" />
          </div>
          <div class="relative left-[8%]">
            <h3 class="md:mt-10">Audi SQ-8 2023</h3>
            <div class="my-5 text-2xl font-normal">Оклейка полиуретановой пленкой, комплектация “<span class="text-purple-light underline">Базовая защита</span>”</div>
            <div class="text-lg font-normal text-[#999999]">22 апреля 2024</div>
          </div>
        </div>
      </div>
      <div class="flex flex-col justify-center">
        <button class="text-normal my-16 w-max self-center rounded-full bg-white px-10 py-4 text-2xl text-black hover:bg-[#5057A7] hover:text-white">Показать еще 15 работ</button>
        <div class="outline-purple-light self-center my-8 xl:my-10 flex flex-wrap items-center gap-2 gap-y-6 justify-center md:rounded-full rounded-3xl p-5 pl-[2%] outline-dashed outline-2" style="width: fit-content;">
          <div class="text-lg text-center font-black">Хотите узнать стоимость? Пришлие фото на</div>
          <ContactButtons></ContactButtons>
        </div>
      </div>
      
    </div>
  </section>
  <section class="relative px-[20px] 2xl:px-[8vw] xl:px-[40px] md:px-[30px] mt-[8vw] text-white">
    <img class="absolute right-0 top-0 z-0 -translate-y-28 md:opacity-35" src="/public/img/salon.png" alt="salon" />
    <div class="relative z-10">
      <h2 class="mb-12">Также мы занимаемся оклейкой салона</h2>
      <div class="my-10 text-3xl font-normal">Оклейка салона делается только дорогой плёнкой, т.к. работа тонкая, есть много мелких деталей и важна качественная тактильность.</div>
      <div class="my-4 text-4xl font-normal text-[#949CFF]">Почему нужно обратиться именно к нам?</div>
      <div class="mb-14 grid md:grid-cols-3 gap-12">
        <div class="flex-1">
          <img src="/public/svg/big-cross.svg" alt="" class="my-3 -translate-x-2" style="filter: drop-shadow( 0px 4px 4px rgba(140, 149, 2554, 0.4));" />
          <h3 class="my-3">Работаем по шаблонам</h3>
          <div class="text-xl font-normal">В работе используем проверенные шаблоны от опытных разработчиков, поэтому вся плёнка точно подходит стык в стык и не бракуется в процессе нанесения. Шаблоны есть абсолютно для всех моделей!</div>
        </div>
        <div class="flex-1">
          <img src="/public/svg/big-cross.svg" alt="" class="my-3 -translate-x-2" style="filter: drop-shadow( 0px 4px 4px rgba(140, 149, 2554, 0.4));" />
          <h3 class="my-3">Используем только легальную плёнку от лучших брендов.</h3>
          <div class="text-xl font-normal">Мы не оклеиваем салон дешёвой плёнкой. Поэтому мы гарантируем, что после нашей работы, любая деталь интерьера вашего автомобиля будет смотреться невероятно красиво!</div>
        </div>
        <div class="flex-1">
          <img src="/public/svg/big-cross.svg" alt="" class="my-3 -translate-x-2" style="filter: drop-shadow( 0px 4px 4px rgba(140, 149, 2554, 0.4));" />
          <h3 class="my-3">Наша плёнка не только радует глаз, но и защищает покрытие.</h3>
          <div class="text-xl font-normal">Да, помимо эстетической функции всё наша плёнка несёт и защитные функции. Благодаря этому вы забудете о царапинах, мелких повреждениях и при необходимости сможете продать автомобиль почти как новый!</div>
        </div>
      </div>
      <div class="outline-purple-light self-center my-8 xl:my-10 flex flex-wrap items-center gap-2 gap-y-6 justify-center md:rounded-full rounded-3xl p-5 pl-[2%] outline-dashed outline-2" style="width: fit-content;">
        <div class="text-lg text-center font-black">Хотите узнать стоимость? Пришлие фото на</div>
        <ContactButtons></ContactButtons>
      </div>
    </div>
  </section>
  <section class="my-[8vw] relative">
    <img class="t-0 l-0 absolute z-0" src="/public/svg/faq.svg" alt="" />
    <div class="relative z-10 p-[20px] 2xl:p-[8vw] xl:p-[40px] md:p-[30px] py-[8vw]">
      <div class="flex flex-col items-start gap-[8vw] xl:flex-row">
        <h2>вопрос-ответ</h2>
        <div class="xl:w-4/5 text-white flex flex-col gap-4">
          <div class="group  rounded-lg border-2 border-white/[0.15] bg-[rgba(255,255,255,0.10)] px-10 py-7">
            <div class="flex items-center gap-4">
              <button>
                <img class="relative group-hover:hidden" src="/public/svg/plus.svg" alt="+" />
                <img class="relative hidden group-hover:block" src="/public/svg/minus.svg" alt="-" />
              </button>
              <div class="text-2xl font-bold">Можете ли наклеить плёнку на выезде, в моём гараже?</div>
            </div>
            <div class="mt-4 hidden pl-14 text-lg font-normal group-hover:block">Твердое и одновременно хрупкое, стекло – один из самых непростых объектов ухода. На его восстановление до состояния нового уходит немало времени. К счастью, наши мастера владеют всеми необходимыми знаниями и имеют многолетний опыт работы с материалом. В сочетании с новейшим оборудованием и фирменной автохимией с устойчивым эффектом это позволяет нашей студии обслуживать автостекла неизменно быстро, качественно и с гарантией результата.</div>
          </div>
          <div class="group  rounded-lg border-2 border-white/[0.15] bg-[rgba(255,255,255,0.10)] px-10 py-7">
            <div class="flex items-center gap-4">
              <button>
                <img class="relative group-hover:hidden" src="/public/svg/plus.svg" alt="+" />
                <img class="relative hidden group-hover:block" src="/public/svg/minus.svg" alt="-" />
              </button>
              <div class="text-2xl font-bold">Правда ли что защитная плёнка уже через пару лет желтеет и иногда совсем разрушается?</div>
            </div>
            <div class="mt-4 hidden pl-14 text-lg font-normal group-hover:block">Твердое и одновременно хрупкое, стекло – один из самых непростых объектов ухода. На его восстановление до состояния нового уходит немало времени. К счастью, наши мастера владеют всеми необходимыми знаниями и имеют многолетний опыт работы с материалом. В сочетании с новейшим оборудованием и фирменной автохимией с устойчивым эффектом это позволяет нашей студии обслуживать автостекла неизменно быстро, качественно и с гарантией результата.</div>
          </div>
          <div class="group  rounded-lg border-2 border-white/[0.15] bg-[rgba(255,255,255,0.10)] px-10 py-7">
            <div class="flex gap-4">
              <button>
                <img class="relative group-hover:hidden" src="/public/svg/plus.svg" alt="+" />
                <img class="relative hidden group-hover:block" src="/public/svg/minus.svg" alt="-" />
              </button>
              <div class="text-2xl font-bold">Не испортит ли нанесение плёнки лакокрасочное покрытие моего автомобиля?</div>
            </div>
            <div class="mt-4 hidden pl-14 text-lg font-normal group-hover:block">Твердое и одновременно хрупкое, стекло – один из самых непростых объектов ухода. На его восстановление до состояния нового уходит немало времени. К счастью, наши мастера владеют всеми необходимыми знаниями и имеют многолетний опыт работы с материалом. В сочетании с новейшим оборудованием и фирменной автохимией с устойчивым эффектом это позволяет нашей студии обслуживать автостекла неизменно быстро, качественно и с гарантией результата.</div>
          </div>
          <div class="group  rounded-lg border-2 border-white/[0.15] bg-[rgba(255,255,255,0.10)] px-10 py-7">
            <div class="flex items-center gap-4">
              <button>
                <img class="relative group-hover:hidden" src="/public/svg/plus.svg" alt="+" />
                <img class="relative hidden group-hover:block" src="/public/svg/minus.svg" alt="-" />
              </button>
              <div class="text-2xl font-bold">Нужно ли как-то специально ухаживать за плёнкой после её нанесения?</div>
            </div>
            <div class="mt-4 hidden pl-14 text-lg font-normal group-hover:block">Твердое и одновременно хрупкое, стекло – один из самых непростых объектов ухода. На его восстановление до состояния нового уходит немало времени. К счастью, наши мастера владеют всеми необходимыми знаниями и имеют многолетний опыт работы с материалом. В сочетании с новейшим оборудованием и фирменной автохимией с устойчивым эффектом это позволяет нашей студии обслуживать автостекла неизменно быстро, качественно и с гарантией результата.</div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="flex flex-col xl:flex-row gap-[2vw] xl:gap-20 bg-white p-[20px] 2xl:p-[8vw] xl:p-[40px] md:p-[30px] pн-[8vw] text-black">
    <h2>Отзывы</h2>
    <div class="sm:w-[560px] w-full h-[800px] overflow-hidden">
      <iframe style="width:100%;height:100%;border:1px solid #e6e6e6;border-radius:8px;" src="https://yandex.ru/maps-reviews-widget/226327670406?comments"></iframe>
      <a href="https://yandex.ru/maps/org/usadba_izmaylovo/226327670406/" target="_blank" style="box-sizing:border-box;text-decoration:none;color:#b3b3b3;font-size:10px;font-family:YS Text,sans-serif;padding:0 20px;width:100%;text-align:center;">Усадьба Измайлово на карте Москвы — Яндекс.Карты</a>
    </div>
  </section>
  <footer class="relative text-white overflow-hidden">
    <img class="absolute z-0 top-0 right-0 translate-x-1 -translate-y-44" src="/public/img/contacts.png" alt="">
    <div class="p-[20px] 2xl:p-[8vw] xl:p-[40px] md:p-[30px] pt-[7vw] relative z-10 gap-[8vw] grid grid-cols-1 md:grid-cols-[1fr_3fr]">
      <div class="grid-column-start-1">
        <h2 class="mb-16">контакты</h2>
        <div class="flex gap-4 items-center my-7">
          <img class="h-[40px]" src="/public/svg/phone.svg" alt="" />
          <a href="tel:+7-495-499-88-22" class="text-4xl font-normal">+7-495-499-88-22</a>
        </div>
        <div class="mb-6 text-xl font-normal">г. Москва, проспект Вернадского, 12Д</div>
        <div class="mb-6 text-purple-light underline">mail@ppservice.ru</div>
        <ContactButtons></ContactButtons>
      </div>
      <div class="grid-column-start-2 w-full aspect-[9/6] ">
        <iframe class="rounded-2xl " src="https://yandex.ru/map-widget/v1/?um=constructor%3A512003a69a1d413deddf6b000a4ec5de6c60bd02a06434742c307dbf80e2d3a0&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe>  
      </div>
    </div>
    <div class="px-[20px] md:px-[30px] xl:px-[4vw] py-6 sm:py-8 flex flex-wrap gap-6 justify-between">
      <div class="grid grid-cols-[1fr_4fr] items-center gap-2">
        <img class="col-start-1" src="/public/svg/logo.svg" alt="" />
        <div class="col-start-2 flex flex-col items-start text-white">
          <div class="text-2xl sm:text-3xl font-black"><span class="text-purple-light">PP</span>-сервис</div>
          <div class="text-sm sm:text-base">Оклейка автомобилей</div>
        </div>
      </div>
       <div class="flex flex-wrap gap-4 items-center">
         <div class="text-xl font-light">Разработка сайта</div>
         <img src="/public/img/diol.png">
       </div>

   </div>
  </footer>
</template>


<script>
import ContactButtons from './assets/components/contact-buttons.vue';
import InfoCard from './assets/components/info-card.vue';
import ServiceCard from './assets/components/service-card.vue';
export default {
  components: {
    InfoCard,
    ServiceCard,
    ContactButtons
  },
  data() {
    return {
      selectedOption: 'option1',
      shipmentOption: 'option1',
      company: 'llumar',
    };
  },
};
</script>