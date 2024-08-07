<template>
  <div class="-z-20 bg-[#08070F]">
  <img class="absolute top-0 left-0 z-10" src="/public/img/curve.png" alt="">
  <div class="absolute top-16 right-0 z-0 w-screen">
    <img src="/public/img/car-background.png" class="object-cover object-right">
  </div>
  <section class="relative z-10">
    <nav class="px-28 z-40 py-6 mb-28 flex items-center" style="justify-content: space-between;">
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
    <header class="flex flex-col z-10 gap-10 pl-40 w-1/2 text-white">
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
      <div class="outline-dashed outline-2 rounded-full flex items-center my-2 gap-2 p-4 pl-7" style="width: fit-content;">
        <div class="text-lg font-black">Хотите узнать стоимость? Пришлие фото на</div>
        <ContactButtons></ContactButtons>
      </div>
    </header>
  </section>
    <section class="mt-60 mx-40">
      <h2 class="text-white font-black text-7xl uppercase">Что вам нужно?</h2>
      <div class="flex" style="gap: 0.1vw;">
        <button class="px-12 py-7 bg-white rounded-t-lg text-black text-3xl font-bold">Оклейка прозрачной пленкой</button>
        <button class="px-12 py-7 bg-white rounded-t-lg text-black text-3xl font-bold">Оклейка матовой пленкой</button>
        <button class="px-12 py-7 bg-white rounded-t-lg text-black text-3xl font-bold">Тонировка стёкол</button>
      </div>
      <div class="p-12 bg-white rounded-b-lg rounded-tr-lg text-black text-3xl font-bold">
        <div class="flex gap-16">
          <img src="/public/img/wraping.png" alt="">
          <div class="flex flex-col gap-6 pr-16">
            <div class="text-black text-4xl font-bold">
              Оклейка плёнкой кузова автомобиля необходима для его защиты от главных проблем, с которыми сталкиваются водители на дорогах. 
            </div>
            <div class="text-purple-vivid text-3xl font-bold">Нанесение плёнки поможет:</div>
            <ul>
              <li>Malcolm Scott Carpenter</li>
  <li>Leroy Gordon (Gordo) Cooper Jr.</li>
  <li>John Herschel Glenn Jr.</li>
  <li>Virgil Ivan (Gus) Grissom</li>
  <li>Walter Marty (Wally) Schirra Jr.</li>
  <li>Alan Bartlett Shepard Jr.</li>
  <li>Donald Kent (Deke) Slayton</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <div id="app">
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