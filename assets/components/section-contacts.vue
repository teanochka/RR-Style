<template>
  <section
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
   
  </section>
</template>
<script>
import ContactButtons from "./assets/components/contact-buttons.vue";
export default {
  components: {
    ContactButtons,
  },
};
</script>
