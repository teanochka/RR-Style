<template>
  <div class="relative overflow-hidden">
    <img
      class="absolute left-0 top-0 z-0"
      src="/public/img/projects-background.png"
      alt=""
    />
    <div class="relative z-10 py-12 sm:my-8 lg:my-16 xl:my-22">
      <h2
        class="px-[20px] md:px-[30px] xl:px-[40px] 2xl:px-[8vw] 2xl:mb-10 mb-6 text-white"
      >
        Знаковые проекты
      </h2>
      <div
        class="relative grid grid-cols-1 gap-y-10 px-2 2xl:px-[8vw] gap-x-[1.5vw] lg:grid-cols-3"
      >
        <div
          v-for="(project, index) in displayedProjects"
          :key="index"
          class="relative flex gap-[5vw] md:flex-col md:gap-0"
        >
          <img
            class="absolute left-0 top-0 z-0 w-[25%] md:w-[22%] lg:h-auto lg:w-[62%]"
            src="/public/svg/logo-dark.svg"
            alt=""
          />
          <div
            class="relative z-10 pl-[calc(10px+1.4vw)] pt-[calc(10px+1.4vw)] grid grid-cols-[2fr_3fr] md:grid-cols-[2fr_4fr] gap-x-[5%] sm:gap-x-6 gap-y-[4%] lg:grid-cols-1"
          >
            <img :src="project.image" :alt="project.title" />
            <div>
              <h3>{{ project.title }}</h3>
              <div class="my-5 text-[17px xl:text-2xl font-normal">
                {{ project.description }}
              </div>
              <div class="text-lg font-normal text-[#999999]">
                {{ project.date }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col justify-center">
        <button
          v-if="remainingProjects > 3"
          class="text-normal my-12 lg:my-16 2xl:mt-24 w-max self-center rounded-full bg-white px-10 py-4 text-2xl text-black hover:bg-[#5057A7] hover:text-white"
          @click="showMoreProjects"
        >
          Показать еще {{ remainingProjects - 3 }} работ
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import ContactButtons from "./assets/components/contact-buttons.vue";
export default {
  components: {
    ContactButtons,
  },
  data() {
    return {
      projects: [
        {
          title: "Mercedes G-classe 2023",
          description:
            "Оклейка полиуретановой пленкой, комплектация “Базовая защита”",
          image: "/img/mercedes.png",
          date: "22 апреля 2024",
        },
        {
          title: "BMW X5 G05 2022",
          description:
            "Оклейка полиуретановой пленкой, комплектация “Базовая защита”",
          image: "/img/bmw.png",
          date: "22 апреля 2024",
        },
        {
          title: "Audi SQ-8 2023",
          description:
            "Оклейка полиуретановой пленкой, комплектация “Базовая защита”",
          image: "/img/audi.png",
          date: "22 апреля 2024",
        },
        {
          title: "Mercedes G-classe 2023",
          description:
            "Оклейка полиуретановой пленкой, комплектация “Базовая защита”",
          image: "/img/mercedes.png",
          date: "22 апреля 2024",
        },
        {
          title: "BMW X5 G05 2022",
          description:
            "Оклейка полиуретановой пленкой, комплектация “Базовая защита”",
          image: "/img/bmw.png",
          date: "22 апреля 2024",
        },
        {
          title: "Audi SQ-8 2023",
          description:
            "Оклейка полиуретановой пленкой, комплектация “Базовая защита”",
          image: "/img/audi.png",
          date: "22 апреля 2024",
        },
        {
          title: "Mercedes G-classe 2023",
          description:
            "Оклейка полиуретановой пленкой, комплектация “Базовая защита”",
          image: "/img/mercedes.png",
          date: "22 апреля 2024",
        },
        {
          title: "BMW X5 G05 2022",
          description:
            "Оклейка полиуретановой пленкой, комплектация “Базовая защита”",
          image: "/img/bmw.png",
          date: "22 апреля 2024",
        },
        {
          title: "Audi SQ-8 2023",
          description:
            "Оклейка полиуретановой пленкой, комплектация “Базовая защита”",
          image: "/img/audi.png",
          date: "22 апреля 2024",
        },
      ],
      displayedProjects: [],
      remainingProjects: 9,
    };
  },
  mounted() {
    this.displayedProjects = this.projects.slice(0, 3);
  },
  methods: {
    showMoreProjects() {
      const currentCount = this.displayedProjects.length;
      const newCount = currentCount + 3;
      this.displayedProjects = this.projects.slice(0, newCount);
      this.remainingProjects -= 3;
    },
  },
};
</script>
