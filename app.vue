<style>

</style>
<template>
  <div class="bg-[#08070F]">
  <section class="relative">
    <img class="absolute top-0 left-0 z-10" src="/public/img/curve.png" alt="">
    <div class="absolute top-0 right-0 z-0">
      <img src="/public/img/car-background.png" class="object-cover">
    </div>
    <nav class="px-28 py-6 mb-20 relative z-40 flex items-center" style="justify-content: space-between;">
      <div class="flex gap-32">
        <div class="flex gap-3">
        <img src="/public/svg/logo.svg" alt="">
        <div class="flex flex-col items-start text-white">
          <div class="font-black text-3xl"><span class="text-purple-light">PP</span>-сервис</div>
          <h1 class="text-m text-base">Оклейка автомобилей</h1>
        </div>
      </div>
      <button class="m-1 py-2 px-5 flex items-center gap-2 bg-transparent rounded-full border border-purple-light">
        <img src="/public/svg/menu.svg" alt="">
        <div class="text-white text-lg">Меню</div>
      </button>
      </div>
      <div class="flex gap-32">
        <div class="flex gap-8">
          <img src="/public/svg/whatsapp-small.svg" alt="">
          <img src="/public/svg/telegram-small.svg" alt="">
        </div>
        <div class="flex gap-4">
          <img src="/public/svg/phone.svg" alt="">
          <div class="text-white font-black text-3xl">
            +7-495-499-88-22
          </div>
        </div>
      </div>
    </nav>
    <header class="pl-40 relative z-10 flex flex-col gap-6 w-1/2 text-white">
      <div class="flex flex-col text-6xl font-black uppercase">Оклейка защитной плёнкой</div>
      <div class="text-2xl">
        Оклейка защитной и матовой плёнкой кузова и салона авто и тонировка в РР-свервисе.
      </div>
      <div class="flex gap-2 ">
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
      <div class="outline-dashed outline-2 outline-purple-light rounded-full flex items-center my-2 gap-2 p-4 pl-7" style="width: fit-content;">
        <div class="text-lg font-black">Хотите узнать стоимость? Пришлие фото на</div>
        <ContactButtons></ContactButtons>
      </div>
    </header>
  </section>
    <section class="relative mt-32 mx-40">
      <img class="absolute z-10 top-0" src="/public/img/bubbles.png" alt="">
      <div class="relative z-20">
      <h2 class="mb-14 text-white font-black text-7xl uppercase">Что вам нужно?</h2>
      <div class="flex" style="gap: 0.1vw;">
        <button class="px-12 py-7 bg-white rounded-t-lg text-black text-3xl font-bold">Оклейка прозрачной пленкой</button>
        <button class="px-12 py-7 bg-white rounded-t-lg text-black text-3xl font-bold">Оклейка матовой пленкой</button>
        <button class="px-12 py-7 bg-white rounded-t-lg text-black text-3xl font-bold">Тонировка стёкол</button>
      </div>
      <div class="p-12 bg-white rounded-b-lg rounded-tr-lg text-black">
        <div class="mb-20 flex gap-16 items-center">
          <img src="/public/img/wraping.png" alt="">
          <div class="flex flex-col gap-4 pr-16">
            <div class="mb-6 text-4xl font-bold">
              Оклейка плёнкой кузова автомобиля необходима для его защиты от главных проблем, с которыми сталкиваются водители на дорогах. 
            </div>
            <div class="mb-2 text-purple-vivid text-3xl font-bold">Нанесение плёнки поможет:</div>
            <ul class="list-inside font-normal text-xl leading-10">
              <li class="shield"> защитить от гравия, пескоструя, осадков;</li>
              <li class="shield"> избежать критичных проблем из-за небольших повреждений, царапин, сколов;</li>
              <li class="shield"> сохранить значительно дольше лакокрасочное покрытие</li>
            </ul>
          </div>
        </div>
        <h2 class="mb-16 texr-black text-6xl font-black">Выберите интересующий Вас комплекс</h2>
        <div class="flex justify-center gap-3">
          <ServiceCard 
            type="ОБЯЗАТЕЛЬН"
            percent="60"
            goodFor="живете в городе / ездите по городу." 
            defend="передний бампер, капот, передние крылья, зеркала, стойки лобового стекла, передняя кромка крыши."  
            noDefend="передние и задние двери, крышку багажника, крышу и т.п."
            description="Данный комплекс защищает основные зоны риска кузова автомобиля, на которые обычно приходится около 60-70% всех проблем. Такая защита предотвратит нежелательные последствия от гравия из-под колёс, пескоструя, выпавших из впереди идущей машины небольших предметов, а также от последствий серьезных осадков. Но при этом, внушительная часть кузова автомобиля останется без защиты."
            gradientClass="1"
          />  
          <ServiceCard
            type="Оптимальн"
            percent="80"
            goodFor="живете за городом / ездите по городу." 
            defend="передний бампер, капот, передние крылья, зеркала, стойки лобового стекла, передняя кромка крыши, внутренние пороги, зоны под ручками, зона выгрузки, кромки дверей, стойки."
            noDefend="передние и задние двери, крышку багажника, крышу и т.п."
            description="Данный комплекс включает в себя оклейку всех обязательных элементов, а также тех, которые не сразу видны, но обычно подвергаются постоянной нагрузке и риску. Например, это зоны под ручками, страдающие от ногтей и пороги, покрытие которых разрушает обувь с каблуками."
            gradientClass="2"
          />
          <ServiceCard
            type="Полн"
            percent="100"
            goodFor="живете за городом / много путешествуете на автомобиле." 
            defend="Включает защиту всего кузова автомобиля."
            noDefend=""
            description="Помимо защиты от гравия, пескоструя и осадков, оклейка плёнкой всех элементов и узлов кузова автомобиля может предотвратить повреждение покрытия, появление царапин и сколов, как из-за небольших инцидентов (например, при парковке во дворе или столкновения с тележкой у супермаркета), так и при мелких дтп - ведь они чаще всего и вредят не основным частям кузова."
            gradientClass="3"
          />
        </div>
      </div>
    </div>
    </section>
    <section class="my-32 mx-40 text-white">
      <h2 class="mb-12 font-black text-7xl uppercase">Почему мы?</h2>
      <div class="flex space-evenly gap-12">
        <div class="flex-1">
          <img src="/public/img/why-us-1.png" alt="">
          <div class="text-3xl font-bold my-3">Оклеиваем даже Mercedes G-класса.</div>
          <div class="text-xl font-normal">У нас есть успешный опыт работы с автомобилями, наиболее сложными для оклейки, такими как Mercedes G-класса ("Гелендваген") и Jeep Wrangler. Кузов этих автомобилей имеет огромное количество мелких элементов, особенностей рельефа. Некоторые авто невозможно оклеить, не разобрав их полностью, что делает их оклейку невероятно сложной и кропотливой работой, с которой мы идеально справляемся!</div>
        </div>
        <div class="flex-1">
          <img src="/public/img/why-us-2.png" alt="">
          <div class="text-3xl font-bold my-3">Знаем все тонкости</div>
          <div class="text-xl font-normal">Мы оклеиваем любые автомобили - от китайских новинок до премиальных иномарок. Наш опыт и знания позволяют подбирать наилучший вид плёнки для любого случая. В том числе, мы работаем с самой дорогой плёнкой, нанесение которой является сложным процессом, с которым не справится новичок, а только профессионал с большим опытом.</div>
        </div>
        <div class="flex-1">
          <img src="/public/img/why-us-3.png" alt="">
          <div class="text-3xl font-bold my-3">Не используем шаблоны.</div>
          <div class="text-xl font-normal">При оклейке кузова мы не используем лекала, а режем плёнку сами. Благодаря этому плёнка на всех сложных местах (выступы, углубления, края) ложится с запасом, что полностью предотвращает попадание под неё влаги, пыли и других несущих вред для покрытия частиц.</div>
        </div>
      </div>
    </section>
    <section class="my-24 mx-40 text-white">
      <h2 class="my-6 font-black text-7xl uppercase w-2/3">где именно заказать оклейку?</h2>
      <div  class="my-6 text-3xl font-normal">Наглядно покажем чем мы отличаемся от других мест</div>
      <div class="mb-9 p-3 bg-purple-dark rounded-full flex text-2xl w-max">
        <button class="relative group">
            <div class="p-5 px-12 rounded-full bg-transparent text-[#A6A5C3] active:bg-white active:text-black group-hover:bg-white hover:text-black">У нас</div>
            <div class="absolute translate-y-5 bottom-0 left-1/3  w-0 h-0 border-solid border-t-[22px] border-x-[11px] border-transparent group-hover:border-t-white"></div>  
        </button> 
        <button class="relative group">
            <div class="p-5 px-12 rounded-full bg-transparent text-[#A6A5C3] active:bg-white active:text-black group-hover:bg-white hover:text-black">У диллера</div>
            <div class="absolute translate-y-5 bottom-0 left-1/3  w-0 h-0 border-solid border-t-[22px] border-x-[11px] border-transparent group-hover:border-t-white"></div>  
        </button> 
        <button class="relative group">
            <div class="p-5 px-12 rounded-full bg-transparent text-[#A6A5C3] active:bg-white active:text-black group-hover:bg-white hover:text-black">По объявлению</div>
            <div class="absolute translate-y-5 bottom-0 left-1/3  w-0 h-0 border-solid border-t-[22px] border-x-[11px] border-transparent group-hover:border-t-white"></div>  
        </button> 
      </div>
      <div>
        <div class="flex gap-1 items-center">
          <img src="/public/svg/cross.svg" alt="" class="translate-y-1" style="filter: drop-shadow( 0px 4px 4px rgba(140, 149, 2554, 0.4));">
          <div class="text-xl align-top">качественная плёнка - только легальная плёнка от проверенных производителей</div>
        </div>
        <div class="flex gap-1 items-center">
          <img src="/public/svg/cross.svg" alt="" class="translate-y-1" style="filter: drop-shadow( 0px 4px 4px rgba(140, 149, 2554, 0.4));">
          <div class="text-xl align-top">подготовленное помещение - удобный бокс с максимальным уровнем чистоты и стерильности</div>
        </div>
        <div class="flex gap-1 items-center">
          <img src="/public/svg/cross.svg" alt="" class="translate-y-1" style="filter: drop-shadow( 0px 4px 4px rgba(140, 149, 2554, 0.4));">
          <div class="text-xl align-top">разная цена - на выбор доступны комплексы, отличающиеся по степени защиты и цене</div>
        </div>
        <div class="flex gap-1 items-center">
          <img src="/public/svg/cross.svg" alt="" class="translate-y-1" style="filter: drop-shadow( 0px 4px 4px rgba(140, 149, 2554, 0.4));">
          <div class="text-xl align-top">высокий уровень профессионализма - наши специалисты занимаются оклейкой уже больше 15 лет</div>
        </div>
      </div>
      <div class="outline-dashed outline-2 outline-purple-light rounded-full flex items-center my-12 gap-2 p-4 pl-7" style="width: fit-content;">
        <div class="text-lg font-black">Хотите узнать стоимость? Пришлие фото на</div>
        <ContactButtons></ContactButtons>
      </div>
    </section>
    <section class="pl-40 py-24 flex gap-24 text-black bg-[#D9D9D9]">
      <div>
        <h2 class="my-6 font-black text-7xl uppercase">С какой плёнкой мы работаем?</h2>
        <div class="my-10 p-3 bg-purple-dark rounded-full flex text-2xl w-max">
          <button class="relative group">
              <div class="p-5 px-12 rounded-full bg-transparent text-[#A6A5C3] active:bg-white active:text-black group-hover:bg-white hover:text-black">Llumar</div>
              <div class="absolute translate-y-5 bottom-0 left-1/3  w-0 h-0 border-solid border-t-[22px] border-x-[11px] border-transparent group-hover:border-t-white"></div>  
          </button> 
          <button class="relative group">
              <div class="p-5 px-12 rounded-full bg-transparent text-[#A6A5C3] active:bg-white active:text-black group-hover:bg-white hover:text-black">SunTek</div>
              <div class="absolute translate-y-5 bottom-0 left-1/3  w-0 h-0 border-solid border-t-[22px] border-x-[11px] border-transparent group-hover:border-t-white"></div>  
          </button> 
        </div>
        <div class="my-20 flex items-center gap-16">
          <img src="/public/img/lumar.png" alt="">
          <div>
            <div class="mb-6 text-3xl font-bold">Llumar</div>
            <div class=" text-2xl">это плёнка от знаменитого американского производителя Eastman Chemical Company. Данная плёнка уже много лет заслуженно считается одной из лучших для тонировки стёкол автомобиля и популярна во всём мире благодаря проверенному качеству и беспроблемной эксплуатации.</div>
          </div>
        </div>
        <div class="my-8 text-2xl font-bold">Ключевые преимущества плёнки Llumar:</div>
        <div class="flex gap-6">
          <div class="flex-1 p-5 rounded-lg bg-white">
            <img src="/public/svg/big-cross.svg" class="h-[70px]" alt="">
            <div class="text-xl">высокий коэффициент защиты от вредных ультрафиолетовых лучей</div>
          </div>
          <div class="flex-1 p-5 rounded-lg bg-white">
            <img src="/public/svg/big-cross.svg" class="h-[70px]" alt="">
            <div class="text-xl">повышенная видимость даже в темное время суток (в том числе даже вечером вы сможете легко парковаться без использования фонарей и камеры!)</div>
          </div>
          <div class="flex-1 p-5 rounded-lg bg-white">
            <img src="/public/svg/big-cross.svg" class="h-[70px]" alt="">
            <div class="text-xl">максимальная толщина среди всех полиуретановых плёнок (214 микрон) сможет защитить стекло даже в случае лёгкого дтп</div>
          </div>
          <div class="flex-1 p-5 rounded-lg bg-white">
            <img src="/public/svg/big-cross.svg" class="h-[70px]" alt="">
            <div class="text-xl">относительная сложность при нанесении, благодаря которой с данной пленкой работают только профессионалы, а дилетанты избегают её.</div>
          </div>
        </div>
      </div>
      <img src="/public/img/wrap.png" alt="">
    </section>
    
    </div>
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
  }
};
</script>