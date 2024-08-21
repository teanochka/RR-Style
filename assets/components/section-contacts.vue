<template>
  <section
    id="contacts"
    class="relative overflow-hidden text-white before:absolute before:bottom-[5%] before:z-0 before:block before:h-[80%] before:w-[80%] before:bg-[url('/img/bubble-and-gradient.png')] before:bg-cover before:bg-right before:bg-no-repeat md:before:right-0 md:before:top-[5%]"
  >
    <div
      class="relative z-10 grid grid-cols-1 gap-[8vw] p-[20px] pt-[7vw] md:grid-cols-[1fr_3fr] md:px-[30px] xl:mb-5 xl:px-[40px] 2xl:p-[8vw]"
    >
      <div class="grid-column-start-1">
        <h2 class="mb-16">контакты</h2>
        <div class="my-7 flex items-center gap-4">
          <img
            loading="lazy"
            class="h-[40px]"
            src="/public/svg/phone.svg"
            alt=""
          />
          <a href="tel:+7-495-499-88-22" class="text-4xl font-normal"
            >+7-495-499-88-22</a
          >
        </div>
        <div class="mb-6 text-xl font-normal">
          г. Москва, проспект Вернадского, 12Д
        </div>
        <div class="mb-6 text-purple-light underline">mail@ppservice.ru</div>
        <ContactButtons></ContactButtons>
      </div>
      <div class="grid-column-start-2 h-full">
        <div
          class="relative aspect-[9/6] w-full p-[5%] before:absolute before:-left-[4%] before:-top-[5%] before:z-0 before:block before:h-full before:w-full before:bg-[url('/svg/logo-dark.svg')] before:bg-contain before:bg-no-repeat"
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
