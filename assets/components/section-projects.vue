<template>
  <section id="projects" class="relative overflow-hidden text-white">
    <div
      class="absolute left-0 top-0 z-0 h-full w-full bg-[url('/img/projects-background.png')] bg-cover"
    ></div>
    <div class="xl:my-22 relative z-10 py-12 sm:my-8 lg:my-16">
      <h2
        class="mb-6 px-[20px] text-white md:px-[30px] xl:px-[40px] 2xl:mb-10 2xl:px-[8vw]"
      >
        Знаковые проекты
      </h2>
      <div
        class="relative grid grid-cols-1 gap-x-[1.5vw] gap-y-4 px-2 sm:gap-y-8 lg:grid-cols-3 2xl:px-[8vw]"
      >
        <div
          v-for="(project, index) in displayedProjects"
          class="relative flex gap-2 md:flex-col md:gap-0 lg:gap-[5vw]"
        >
          <Project
            :title="project.title"
            :image="project.image"
            :description="project.description"
            :date="project.date"
          />
        </div>
      </div>
      <div class="flex flex-col justify-center">
        <button
          v-if="remainingProjects > 0"
          class="text-normal mt-8 w-max self-center rounded-full bg-white px-10 py-4 text-[17px] text-black hover:bg-[#5057A7] hover:text-white sm:mt-12 lg:mt-16 xl:text-[20px] 2xl:mt-24 2xl:text-[25px]"
          @click="showMoreProjects"
        >
          Показать еще {{ remainingProjects }}
          {{ declOfNum(remainingProjects) }}
        </button>
        <button
          v-else
          class="text-normal mt-8 w-max self-center rounded-full bg-white px-10 py-4 text-[17px] text-black hover:bg-[#5057A7] hover:text-white sm:mt-12 lg:mt-16 xl:text-[20px] 2xl:mt-24 2xl:text-[25px]"
          @click="showLessProjects(), $emit('scrollToSection', 'projects')"
        >
          Свернуть
        </button>
      </div>
      <div
        class="flex justify-center px-[20px] md:px-[30px] xl:px-[40px] 2xl:mb-10 2xl:px-[8vw]"
      >
        <div
          class="ap-3 my-10 flex w-fit flex-wrap items-center justify-center gap-2 gap-y-6 rounded-3xl p-3 outline-dashed outline-2 outline-purple-light md:rounded-full lg:mt-12 2xl:mt-24 2xl:p-4"
        >
          <div class="ml-4 text-center text-lg font-black md:text-[17px]">
            Хотите узнать стоимость? Пришлие фото на
          </div>
          <ContactButtons></ContactButtons>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Project from "./project.vue";
import ContactButtons from "./assets/components/contact-buttons.vue";
export default {
  props: {
    serviceOption: Number,
  },
  watch: {
    serviceOption(newVal, oldVal) {
      this.updateProjects();
    },
  },
  components: {
    ContactButtons,
    Project,
  },
  data() {
    return {
      allProjects: [
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
        {
          title: "Mercedes G-classe 2023",
          description:
            "Оклейка полиуретановой пленкой, комплектация “Базовая защита”",
          image: "/img/mercedes.png",
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
          title: "Mercedes G-classe 2023",
          description:
            "Оклейка полиуретановой пленкой, комплектация “Базовая защита”",
          image: "/img/mercedes.png",
          date: "22 апреля 2024",
        },
        {
          title: "Mercedes G-classe 2023",
          description:
            "Оклейка полиуретановой пленкой, комплектация “Базовая защита”",
          image: "/img/mercedes.png",
          date: "22 апреля 2024",
        },
      ],
      projects: [],
      selectedOptions: [],
      displayedProjects: [],
      remainingProjects: 0,
    };
  },
  mounted() {
    this.updateProjects();
  },
  methods: {
    updateProjects() {
      const optionsMap = {
        1: { sectionProjectsIndexes: [1, 3, 4, 5, 6, 7, 8, 10, 11] },
        2: { sectionProjectsIndexes: [2, 4, 5, 6, 7, 8, 9, 10, 11] },
        3: { sectionProjectsIndexes: [1, 4, 5, 6, 7, 8, 9, 10, 11] },
      };

      this.selectedOptions = optionsMap[this.serviceOption] || {
        sectionProjectsIndexes: [],
      };
    
      this.projects = this.selectedOptions.sectionProjectsIndexes.map(
        (index) => this.allProjects[index],
      );
      this.displayedProjects = this.projects.slice(0, 3);
      this.remainingProjects = this.projects.length - 3;
    },
    showMoreProjects() {
      const currentCount = this.displayedProjects.length;
      const newCount = currentCount + 3;
      this.displayedProjects = this.projects.slice(0, newCount);
      this.remainingProjects -= 3;
    },
    showLessProjects() {
      const currentCount = this.displayedProjects.length;
      const newCount = 3;
      this.displayedProjects = this.projects.slice(0, 3);
      this.remainingProjects = currentCount - 3;
    },
    declOfNum(number) {
      const words = ["работа", "работы", "работ"];
      const cases = [2, 0, 1, 1, 1, 2];
      return words[
        number % 100 > 4 && number % 100 < 20
          ? 2
          : cases[number % 10 < 5 ? number % 10 : 5]
      ];
    },
  },
};
</script>
