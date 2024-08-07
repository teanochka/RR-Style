<template>
    <div class="bg-[#E7E7E7] rounded-lg p-5 flex-1 h-full flex flex-col">
      <div>
        <div class="flex flex-col justify-start p-0 gap-0 text-4xl">
          <div class="font-black uppercase text-purple-vivid my-0">{{type}}ая</div>
          <div class="font-normal text-black my-0">защита</div>
        </div>
        <img src="/public/img/bmv-cover1.png" alt="bmv-cover1">
      </div>
      <div :class="[`gradient-${gradientClass}`, 'my-5', 'p-5', 'rounded-lg', 'text-white']">
        <div class="font-bold text-3xl">Защищает автомобиль на</div>
        <div class="flex space-x-6">
          <div class="flex flex-col">
            <div class="font-black text-6xl">100%</div>   
            <div class="font-normal text-2xl">В зонах риска</div>   
          </div>     
          <div class="flex flex-col">
            <div class="font-black text-6xl">{{percent}}%</div>   
            <div class="font-normal text-2xl">Весь автомобиль</div>   
          </div>     
        </div>
      </div>
      <div class="my-5 p-5 flex flex-col gap-6 text-black bg-white rounded-lg">
        <div class="flex space-between">
          <div class="flex-1 font-bold text-xl">Кому подойдет:</div>
          <div class="flex-1 font-normal text-lg">{{goodFor}}</div>
        </div>
        <div class="flex space-between items-start">
          <div class="flex-1 font-bold text-xl flex items-center">
            <img src="/public/svg/violet-shield.svg" alt="">
            <div>Защищает:</div>
          </div>
          <div class="flex-1 font-normal text-lg">{{defend}}</div>
        </div>
        <div class="flex space-between items-start">
          <div class="flex-1 font-bold text-xl flex items-center">
            <img src="/public/svg/pink-shield.svg" alt="">
            <div>Не защищает:</div>
          </div>
          <div class="flex-1 font-normal text-lg">{{noDefend}}</div>
        </div>
      </div>
      <div class="my-5 p-2 text-black text-lg">{{description}}</div>
      <div class=" my-5 p-5 rounded-lg text-white" style="justify-self: flex-end; background-image: linear-gradient(44deg, #2A146B 25%, #9592E5 55%, #5E69E0 80%)">
        <div class="font-bold text-3xl mb-1">Узнать стоимость</div>
        <div class="font-bold text-3xl mb-6"><span class="font-black uppercase">{{type}}ой </span>защиты</div>
        <ContactButtons></ContactButtons>
      </div>
  </div>
</template>
  <script>
  import ContactButtons from './contact-buttons.vue';
    export default {
      props: ['type', 'percent', 'goodFor', 'defend', 'noDefend', 'description', 'gradientClass'],
      components: {
        ContactButtons
      }
    };
  </script>
  <style>
  .gradient-1{
    background-image: linear-gradient(135deg, #CB6262 37%, #E36464 50%, #9B323F 100%);
  }
  .gradient-2 {
    background-image: linear-gradient(135deg, #CB9462 37%, #E3C764 50%, #9B5832 100%);
  }
  .gradient-3 {
    background-image: linear-gradient(135deg, #7ABF59 37%, #5DD980 50%, #1B8219 100%);
  }
</style>