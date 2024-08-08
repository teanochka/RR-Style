<template>
  <section class="relative">
    <img class="absolute left-0 top-0 z-10" src="/public/img/curve.png" alt="" />
    <div class="absolute right-0 top-0 z-0">
      <img src="/public/img/car-background.png" class="object-cover" />
    </div>
    <nav class="relative z-40 mb-20 flex items-center px-28 py-6" style="justify-content: space-between;">
      <div class="flex gap-32">
        <div class="flex gap-3">
          <img src="/public/svg/logo.svg" alt="" />
          <div class="flex flex-col items-start text-white">
            <div class="text-3xl font-black"><span class="text-purple-light">PP</span>-сервис</div>
            <h1 class="text-m text-base">Оклейка автомобилей</h1>
          </div>
        </div>
        <button class="border-purple-light m-1 flex items-center gap-2 rounded-full border bg-transparent px-5 py-2">
          <img src="/public/svg/menu.svg" alt="" />
          <div class="text-lg text-white">Меню</div>
        </button>
      </div>
      <div class="flex gap-32">
        <div class="flex gap-8">
          <img src="/public/svg/whatsapp-small.svg" alt="" />
          <img src="/public/svg/telegram-small.svg" alt="" />
        </div>
        <div class="flex gap-4">
          <img src="/public/svg/phone.svg" alt="" />
          <div class="text-3xl font-black text-white">+7-495-499-88-22</div>
        </div>
      </div>
    </nav>
    <header class="relative z-10 flex w-1/2 flex-col gap-6 pl-40 text-white">
      <div class="flex flex-col text-6xl font-black uppercase">Оклейка защитной плёнкой</div>
      <div class="text-2xl">Оклейка защитной и матовой плёнкой кузова и салона авто и тонировка в РР-свервисе.</div>
      <div class="flex gap-2">
        <InfoCard title="Мы - одни из первых" info="Наши специалисты работают с оклейкой авто с момента появления защитных пленок в России" />
        <InfoCard title="0% брака" info="В работе мы используем только проверенные и качественные плёнки от легальных производителей." />
        <InfoCard title="Занимаемся только пленками" info="Мы не распыляемся на большое количество разных услуг по детейлингу и рестайлингу." />
      </div>
      <div class="outline-purple-light my-2 flex items-center gap-2 rounded-full p-4 pl-7 outline-dashed outline-2" style="width: fit-content;">
        <div class="text-lg font-black">Хотите узнать стоимость? Пришлие фото на</div>
        <ContactButtons></ContactButtons>
      </div>
    </header>
  </section>
  <section class="relative mx-40 mt-32">
    <img class="absolute top-0 z-10" src="/public/img/bubbles.png" alt="" />
    <div class="relative z-20">
      <h2 class="mb-14 text-7xl font-black uppercase text-white">Что вам нужно?</h2>
      <div class="flex" style="gap: 0.1vw;">
        <button class="rounded-t-lg px-12 py-7 text-3xl font-bold text-black "
        :class="{
            'bg-white': selectedOption === 'option1',
            'bg-white/[0.2] text-[#C0C1C8] hover:bg-white/[0.4] hover:text-white': selectedOption !== 'option1',
          }"
          @click="selectedOption = 'option1'"
        >
          Оклейка прозрачной пленкой
        </button>
        <button class="rounded-t-lg px-12 py-7 text-3xl font-bold text-black"
        :class="{
            'bg-white': selectedOption === 'option2',
            'bg-white/[0.2] text-[#C0C1C8] hover:bg-white/[0.4] hover:text-white': selectedOption !== 'option2',
          }"
          @click="selectedOption = 'option2'"
        >
          Оклейка матовой пленкой
        </button>
        <button class="rounded-t-lg px-12 py-7 text-3xl font-bold text-black"
        :class="{
            'bg-white': selectedOption === 'option3',
            'bg-white/[0.2] text-[#C0C1C8] hover:bg-white/[0.4] hover:text-white': selectedOption !== 'option3',
          }"
          @click="selectedOption = 'option3'"
        >
          Тонировка стёкол
        </button>
      </div>
      <div class="rounded-b-lg rounded-tr-lg bg-white p-12 text-black">
        <div  v-if="selectedOption === 'option1'">
          <div class="mb-20 flex items-center gap-16">
            <img src="/public/img/wraping.png" alt="" />
            <div class="flex flex-col gap-4 pr-16">
              <div class="mb-6 text-4xl font-bold">Оклейка плёнкой кузова автомобиля необходима для его защиты от главных проблем, с которыми сталкиваются водители на дорогах.</div>
              <div class="text-purple-vivid mb-2 text-3xl font-bold">Нанесение плёнки поможет:</div>
              <ul class="list-inside text-xl font-normal leading-10">
                <li class="shield">защитить от гравия, пескоструя, осадков;</li>
                <li class="shield">избежать критичных проблем из-за небольших повреждений, царапин, сколов;</li>
                <li class="shield">сохранить значительно дольше лакокрасочное покрытие</li>
              </ul>
            </div>
          </div>
          <h2 class="texr-black mb-16 text-6xl font-black">Выберите интересующий Вас комплекс</h2>
          <div class="flex justify-center gap-3">
            <ServiceCard type="ОБЯЗАТЕЛЬН" percent="60" goodFor="живете в городе / ездите по городу." defend="передний бампер, капот, передние крылья, зеркала, стойки лобового стекла, передняя кромка крыши." noDefend="передние и задние двери, крышку багажника, крышу и т.п." description="Данный комплекс защищает основные зоны риска кузова автомобиля, на которые обычно приходится около 60-70% всех проблем. Такая защита предотвратит нежелательные последствия от гравия из-под колёс, пескоструя, выпавших из впереди идущей машины небольших предметов, а также от последствий серьезных осадков. Но при этом, внушительная часть кузова автомобиля останется без защиты." gradientClass="1" />
            <ServiceCard type="Оптимальн" percent="80" goodFor="живете за городом / ездите по городу." defend="передний бампер, капот, передние крылья, зеркала, стойки лобового стекла, передняя кромка крыши, внутренние пороги, зоны под ручками, зона выгрузки, кромки дверей, стойки." noDefend="передние и задние двери, крышку багажника, крышу и т.п." description="Данный комплекс включает в себя оклейку всех обязательных элементов, а также тех, которые не сразу видны, но обычно подвергаются постоянной нагрузке и риску. Например, это зоны под ручками, страдающие от ногтей и пороги, покрытие которых разрушает обувь с каблуками." gradientClass="2" />
            <ServiceCard type="Полн" percent="100" goodFor="живете за городом / много путешествуете на автомобиле." defend="Включает защиту всего кузова автомобиля." noDefend="" description="Помимо защиты от гравия, пескоструя и осадков, оклейка плёнкой всех элементов и узлов кузова автомобиля может предотвратить повреждение покрытия, появление царапин и сколов, как из-за небольших инцидентов (например, при парковке во дворе или столкновения с тележкой у супермаркета), так и при мелких дтп - ведь они чаще всего и вредят не основным частям кузова." gradientClass="3" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="mx-40 my-32 text-white">
    <h2 class="mb-12 text-7xl font-black uppercase">Почему мы?</h2>
    <div class="space-evenly flex gap-12">
      <div class="flex-1">
        <img src="/public/img/why-us-1.png" alt="" />
        <div class="my-3 text-3xl font-bold">Оклеиваем даже Mercedes G-класса.</div>
        <div class="text-xl font-normal">У нас есть успешный опыт работы с автомобилями, наиболее сложными для оклейки, такими как Mercedes G-класса ("Гелендваген") и Jeep Wrangler. Кузов этих автомобилей имеет огромное количество мелких элементов, особенностей рельефа. Некоторые авто невозможно оклеить, не разобрав их полностью, что делает их оклейку невероятно сложной и кропотливой работой, с которой мы идеально справляемся!</div>
      </div>
      <div class="flex-1">
        <img src="/public/img/why-us-2.png" alt="" />
        <div class="my-3 text-3xl font-bold">Знаем все тонкости</div>
        <div class="text-xl font-normal">Мы оклеиваем любые автомобили - от китайских новинок до премиальных иномарок. Наш опыт и знания позволяют подбирать наилучший вид плёнки для любого случая. В том числе, мы работаем с самой дорогой плёнкой, нанесение которой является сложным процессом, с которым не справится новичок, а только профессионал с большим опытом.</div>
      </div>
      <div class="flex-1">
        <img src="/public/img/why-us-3.png" alt="" />
        <div class="my-3 text-3xl font-bold">Не используем шаблоны.</div>
        <div class="text-xl font-normal">При оклейке кузова мы не используем лекала, а режем плёнку сами. Благодаря этому плёнка на всех сложных местах (выступы, углубления, края) ложится с запасом, что полностью предотвращает попадание под неё влаги, пыли и других несущих вред для покрытия частиц.</div>
      </div>
    </div>
  </section>
  <section class="mx-40 my-32 text-white">
    <h2 class="my-6 w-2/3 text-7xl font-black uppercase">где именно заказать оклейку?</h2>
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
    <div class="outline-purple-light my-12 flex items-center gap-2 rounded-full p-4 pl-7 outline-dashed outline-2" style="width: fit-content;">
      <div class="text-lg font-black">Хотите узнать стоимость? Пришлие фото на</div>
      <ContactButtons></ContactButtons>
    </div>
  </section>
  <section class="flex gap-24 bg-[#D9D9D9] py-24 pl-40 text-black">
    <div>
      <h2 class="my-6 text-7xl font-black uppercase">С какой плёнкой мы работаем?</h2>
      <div class="bg-purple-dark my-10 flex w-max rounded-full p-3 text-2xl">
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
      <div v-if="company == 'llumar'">
        <div class="my-20 flex items-center gap-16">
          <img src="/public/img/lumar.png" alt="" />
          <div>
            <div class="mb-6 text-3xl font-bold">Llumar</div>
            <div class="text-2xl">это плёнка от знаменитого американского производителя Eastman Chemical Company. Данная плёнка уже много лет заслуженно считается одной из лучших для тонировки стёкол автомобиля и популярна во всём мире благодаря проверенному качеству и беспроблемной эксплуатации.</div>
          </div>
        </div>
        <div class="my-8 text-2xl font-bold">Ключевые преимущества плёнки Llumar:</div>
        <div class="flex gap-6 text-xl">
          <div class="flex-1 rounded-lg bg-white p-5">
            <img src="/public/svg/big-cross.svg" class="h-[70px]" alt="" />
            <div>высокий коэффициент защиты от вредных ультрафиолетовых лучей</div>
          </div>
          <div class="flex-1 rounded-lg bg-white p-5">
            <img src="/public/svg/big-cross.svg" class="h-[70px]" alt="" />
            <div>повышенная видимость даже в темное время суток (в том числе даже вечером вы сможете легко парковаться без использования фонарей и камеры!)</div>
          </div>
          <div class="flex-1 rounded-lg bg-white p-5">
            <img src="/public/svg/big-cross.svg" class="h-[70px]" alt="" />
            <div>максимальная толщина среди всех полиуретановых плёнок (214 микрон) сможет защитить стекло даже в случае лёгкого дтп</div>
          </div>
          <div class="flex-1 rounded-lg bg-white p-5">
            <img src="/public/svg/big-cross.svg" class="h-[70px]" alt="" />
            <div>относительная сложность при нанесении, благодаря которой с данной пленкой работают только профессионалы, а дилетанты избегают её.</div>
          </div>
        </div>
      </div>
    </div>
    <img src="/public/img/wrap.png" alt="" />
  </section>
  <section class="relative overflow-hidden">
    <img class="absolute left-0 top-0 z-0" src="/public/img/projects-background.png" alt="" />
    <div class="relative z-10 px-40 pb-40 pt-32">
      <div class="mb-14 text-7xl font-black uppercase text-white">Знаковые проекты</div>
      <div class="flex gap-7">
        <div class="relative flex-1 text-white">
          <img class="absolute left-0 top-0 z-0" src="/public/svg/logo-dark.svg" alt="" />
          <div class="relative z-10 pl-11 pt-10">
            <img src="/public/img/mercedes.png" alt="mercedes" />
            <div class="mt-10 text-3xl font-bold">Mercedes G-classe 2023</div>
            <div class="my-5 text-2xl font-normal">Оклейка полиуретановой пленкой, комплектация “<span class="text-purple-light underline">Базовая защита</span>”</div>
            <div class="text-lg font-normal text-[#999999]">22 апреля 2024</div>
          </div>
        </div>
        <div class="relative flex-1 text-white">
          <img class="absolute left-0 top-0 z-0" src="/public/svg/logo-dark.svg" alt="" />
          <div class="relative z-10 pl-11 pt-10">
            <img src="/public/img/bmw.png" alt="mercedes" />
            <div class="mt-10 text-3xl font-bold">BMW X5 G05 2022</div>
            <div class="my-5 text-2xl font-normal">Оклейка полиуретановой пленкой, комплектация “<span class="text-purple-light underline">Базовая защита</span>”</div>
            <div class="text-lg font-normal text-[#999999]">22 апреля 2024</div>
          </div>
        </div>
        <div class="relative flex-1 text-white">
          <img class="absolute left-0 top-0 z-0" src="/public/svg/logo-dark.svg" alt="" />
          <div class="relative z-10 pl-11 pt-10">
            <img src="/public/img/audi.png" alt="mercedes" />
            <div class="mt-10 text-3xl font-bold">Audi SQ-8 2023</div>
            <div class="my-5 text-2xl font-normal">Оклейка полиуретановой пленкой, комплектация “<span class="text-purple-light underline">Базовая защита</span>”</div>
            <div class="text-lg font-normal text-[#999999]">22 апреля 2024</div>
          </div>
        </div>
      </div>
      <div class="flex flex-col justify-center">
        <button class="text-normal my-16 w-max self-center rounded-full bg-white px-10 py-4 text-2xl text-black hover:bg-[#5057A7] hover:text-white">Показать еще 15 работ</button>
        <div class="outline-purple-light my-2 flex items-center gap-2 self-center rounded-full p-4 pl-7 outline-dashed outline-2" style="width: fit-content;">
          <div class="text-lg font-black">Хотите узнать стоимость? Пришлие фото на</div>
          <ContactButtons></ContactButtons>
        </div>
      </div>
    </div>
  </section>
  <section class="relative my-28 ml-40 text-white">
    <img class="absolute right-0 top-0 z-0 -translate-y-28" src="/public/img/salon.png" alt="salon" />
    <div class="relative z-10 w-[1223px]">
      <div class="mb-12 text-7xl font-black uppercase">Также мы занимаемся оклейкой салона</div>
      <div class="my-10 text-3xl font-normal">Оклейка салона делается только дорогой плёнкой, т.к. работа тонкая, есть много мелких деталей и важна качественная тактильность.</div>
      <div class="my-4 text-4xl font-normal text-[#949CFF]">Почему нужно обратиться именно к нам?</div>
      <div class="mb-14 flex gap-24">
        <div class="flex-1">
          <img src="/public/svg/big-cross.svg" alt="" class="my-3 -translate-x-2" style="filter: drop-shadow( 0px 4px 4px rgba(140, 149, 2554, 0.4));" />
          <div class="my-3 text-3xl font-bold">Работаем по шаблонам</div>
          <div class="text-xl font-normal">В работе используем проверенные шаблоны от опытных разработчиков, поэтому вся плёнка точно подходит стык в стык и не бракуется в процессе нанесения. Шаблоны есть абсолютно для всех моделей!</div>
        </div>
        <div class="flex-1">
          <img src="/public/svg/big-cross.svg" alt="" class="my-3 -translate-x-2" style="filter: drop-shadow( 0px 4px 4px rgba(140, 149, 2554, 0.4));" />
          <div class="my-3 text-3xl font-bold">Используем только легальную плёнку от лучших брендов.</div>
          <div class="text-xl font-normal">Мы не оклеиваем салон дешёвой плёнкой. Поэтому мы гарантируем, что после нашей работы, любая деталь интерьера вашего автомобиля будет смотреться невероятно красиво!</div>
        </div>
        <div class="flex-1">
          <img src="/public/svg/big-cross.svg" alt="" class="my-3 -translate-x-2" style="filter: drop-shadow( 0px 4px 4px rgba(140, 149, 2554, 0.4));" />
          <div class="my-3 text-3xl font-bold">Наша плёнка не только радует глаз, но и защищает покрытие.</div>
          <div class="text-xl font-normal">Да, помимо эстетической функции всё наша плёнка несёт и защитные функции. Благодаря этому вы забудете о царапинах, мелких повреждениях и при необходимости сможете продать автомобиль почти как новый!</div>
        </div>
      </div>
      <div class="outline-purple-light flex items-center gap-2 self-center rounded-full p-4 pl-7 outline-dashed outline-2" style="width: fit-content;">
        <div class="text-lg font-black">Хотите узнать стоимость оклейки салона? Пришлие фото на</div>
        <ContactButtons></ContactButtons>
      </div>
    </div>
  </section>
  <section class="my-18 relative">
    <img class="t-0 l-0 absolute z-0" src="/public/svg/faq.svg" alt="" />
    <div class="relative z-10 px-40 py-24">
      <div class="flex items-start gap-32">
        <div class="mb-12 w-1/5 text-7xl font-black uppercase">вопрос-ответ</div>
        <div class="text-white [&>div]:mb-4 [&>div]:rounded-lg [&>div]:border-2 [&>div]:border-white/[0.15] [&>div]:bg-[rgba(255,255,255,0.10)] [&>div]:px-10 [&>div]:py-7">
          <div class="group">
            <div class="flex items-center gap-4">
              <button>
                <img class="relative group-hover:hidden" src="/public/svg/plus.svg" alt="+" />
                <img class="relative hidden group-hover:block" src="/public/svg/minus.svg" alt="-" />
              </button>
              <div class="text-2xl font-bold">Можете ли наклеить плёнку на выезде, в моём гараже?</div>
            </div>
            <div class="mt-4 hidden pl-14 text-lg font-normal group-hover:block">Твердое и одновременно хрупкое, стекло – один из самых непростых объектов ухода. На его восстановление до состояния нового уходит немало времени. К счастью, наши мастера владеют всеми необходимыми знаниями и имеют многолетний опыт работы с материалом. В сочетании с новейшим оборудованием и фирменной автохимией с устойчивым эффектом это позволяет нашей студии обслуживать автостекла неизменно быстро, качественно и с гарантией результата.</div>
          </div>
          <div class="group">
            <div class="flex items-center gap-4">
              <button>
                <img class="relative group-hover:hidden" src="/public/svg/plus.svg" alt="+" />
                <img class="relative hidden group-hover:block" src="/public/svg/minus.svg" alt="-" />
              </button>
              <div class="text-2xl font-bold">Правда ли что защитная плёнка уже через пару лет желтеет и иногда совсем разрушается?</div>
            </div>
            <div class="mt-4 hidden pl-14 text-lg font-normal group-hover:block">Твердое и одновременно хрупкое, стекло – один из самых непростых объектов ухода. На его восстановление до состояния нового уходит немало времени. К счастью, наши мастера владеют всеми необходимыми знаниями и имеют многолетний опыт работы с материалом. В сочетании с новейшим оборудованием и фирменной автохимией с устойчивым эффектом это позволяет нашей студии обслуживать автостекла неизменно быстро, качественно и с гарантией результата.</div>
          </div>
          <div class="group">
            <div class="flex gap-4">
              <button>
                <img class="relative group-hover:hidden" src="/public/svg/plus.svg" alt="+" />
                <img class="relative hidden group-hover:block" src="/public/svg/minus.svg" alt="-" />
              </button>
              <div class="text-2xl font-bold">Не испортит ли нанесение плёнки лакокрасочное покрытие моего автомобиля?</div>
            </div>
            <div class="mt-4 hidden pl-14 text-lg font-normal group-hover:block">Твердое и одновременно хрупкое, стекло – один из самых непростых объектов ухода. На его восстановление до состояния нового уходит немало времени. К счастью, наши мастера владеют всеми необходимыми знаниями и имеют многолетний опыт работы с материалом. В сочетании с новейшим оборудованием и фирменной автохимией с устойчивым эффектом это позволяет нашей студии обслуживать автостекла неизменно быстро, качественно и с гарантией результата.</div>
          </div>
          <div class="group">
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
  <section class="flex gap-20 bg-white px-40 py-24 text-black">
    <div class="text-7xl font-black uppercase">Отзывы</div>
    <div class="mx-5" style="width:560px;height:800px;overflow:hidden;">
      <iframe style="width:100%;height:100%;border:1px solid #e6e6e6;border-radius:8px;" src="https://yandex.ru/maps-reviews-widget/226327670406?comments"></iframe>
      <a href="https://yandex.ru/maps/org/usadba_izmaylovo/226327670406/" target="_blank" style="box-sizing:border-box;text-decoration:none;color:#b3b3b3;font-size:10px;font-family:YS Text,sans-serif;padding:0 20px;width:100%;text-align:center;">Усадьба Измайлово на карте Москвы — Яндекс.Карты</a>
    </div>
  </section>
  <footer class="relative text-white overflow-hidden">
    <img class="absolute z-0 top-0 right-0 translate-x-1 -translate-y-44" src="/public/img/contacts.png" alt="">
    <div class="mb-40 px-40 pt-36 relative z-10 flex gap-40">
      <div>
        <div class="mb-20 text-7xl font-black uppercase">контакты</div>
        <div class="flex gap-4 items-center my-7">
          <img class="h-[40px]" src="/public/svg/phone.svg" alt="" />
          <div class="text-4xl font-normal">+7-495-499-88-22</div>
        </div>
        <div class="mb-6 text-xl font-normal">г. Москва, проспект Вернадского, 12Д</div>
        <div class="mb-6 text-purple-light underline">mail@ppservice.ru</div>
        <ContactButtons></ContactButtons>
      </div>
      <iframe class="rounded-2xl " src="https://yandex.ru/map-widget/v1/?um=constructor%3A512003a69a1d413deddf6b000a4ec5de6c60bd02a06434742c307dbf80e2d3a0&amp;source=constructor" width="994" height="595" frameborder="0"></iframe>  
    </div>
    <div class="m-6 mx-24 flex justify-between">
     <div class="flex gap-3">
       <img src="/public/svg/logo.svg" alt="" />
       <div class="flex flex-col items-start text-white">
         <div class="text-3xl font-black"><span class="text-purple-light">PP</span>-сервис</div>
         <h1 class="text-m text-base">Оклейка автомобилей</h1>
       </div>
      </div>
       <div class="flex gap-4 items-center">
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