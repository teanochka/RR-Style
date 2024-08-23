<template>
  <section id="faq" class="relative my-[8vw]">
    <div
      class="t-0 l-0 absolute -z-10 h-[480px] w-full -translate-x-8 -translate-y-8 bg-[url('/svg/faq.svg')] bg-contain bg-left-top bg-no-repeat lg:h-[62vw] lg:-translate-x-20 lg:-translate-y-16 xl:-translate-x-12 xl:-translate-y-6 2xl:h-[40vw] 2xl:-translate-y-20"
      alt=""
    />
    <div
      class="relative z-10 my-16 px-[20px] md:px-[30px] xl:my-20 xl:px-[40px] 2xl:my-24 2xl:px-[8vw]"
    >
      <div
        class="flex flex-col items-start gap-8 lg:gap-[4vw] xl:flex-row xl:gap-[0.1vw] 2xl:gap-[8vw]"
      >
        <h2 class="text-white">вопрос-ответ</h2>
        <div class="flex flex-col gap-4 text-white xl:w-4/5">
          <div
            v-for="(item, index) in questions"
            :key="index"
            class="group rounded-lg border-2 border-white/[0.15] bg-[rgba(255,255,255,0.10)] px-5 py-5 md:px-7 lg:px-10 lg:py-7"
          >
            <Question :item="item" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Question from "./question.vue";
export default {
  props: {
    serviceOption: Number,
  },
  watch: {
    serviceOption(newVal, oldVal) {
      this.updateQuestions();
    },
  },
  components: {
    Question,
  },
  data() {
    return {
      questions: [],
      allQuestions: [
        {
          question: "Можете ли наклеить плёнку на выезде, в моём гараже?",
          answer:
            "Твердое и одновременно хрупкое, стекло – один из самых непростых объектов ухода. На его восстановление до состояния нового уходит немало времени. К счастью, наши мастера владеют всеми необходимыми знаниями и имеют многолетний опыт работы с материалом. В сочетании с новейшим оборудованием и фирменной автохимией с устойчивым эффектом это позволяет нашей студии обслуживать автостекла неизменно быстро, качественно и с гарантией результата.",
          showAnswer: false,
        },
        {
          question:
            "Правда ли что защитная плёнка уже через пару лет желтеет и иногда совсем разрушается?",
          answer:
            "Твердое и одновременно хрупкое, стекло – один из самых непростых объектов ухода. На его восстановление до состояния нового уходит немало времени. К счастью, наши мастера владеют всеми необходимыми знаниями и имеют многолетний опыт работы с материалом. В сочетании с новейшим оборудованием и фирменной автохимией с устойчивым эффектом это позволяет нашей студии обслуживать автостекла неизменно быстро, качественно и с гарантией результата.",
          showAnswer: false,
        },
        {
          question:
            "Не испортит ли нанесение плёнки лакокрасочное покрытие моего автомобиля?",
          answer:
            "Твердое и одновременно хрупкое, стекло – один из самых непростых объектов ухода. На его восстановление до состояния нового уходит немало времени. К счастью, наши мастера владеют всеми необходимыми знаниями и имеют многолетний опыт работы с материалом. В сочетании с новейшим оборудованием и фирменной автохимией с устойчивым эффектом это позволяет нашей студии обслуживать автостекла неизменно быстро, качественно и с гарантией результата.",
          showAnswer: false,
        },
        {
          question:
            "Нужно ли как-то специально ухаживать за плёнкой после её нанесения?",
          answer:
            "Твердое и одновременно хрупкое, стекло – один из самых непростых объектов ухода. На его восстановление до состояния нового уходит немало времени. К счастью, наши мастера владеют всеми необходимыми знаниями и имеют многолетний опыт работы с материалом. В сочетании с новейшим оборудованием и фирменной автохимией с устойчивым эффектом это позволяет нашей студии обслуживать автостекла неизменно быстро, качественно и с гарантией результата.",
          showAnswer: false,
        },
        {
          question: "Почему в Африке так много болезней?",
          answer: "Потому что таблетки нужно запивать водой.",
          showAnswer: false,
        },
        {
          question: "Что будет, если ворона сядет на оголённые провода?",
          answer: "Электро кар",
          showAnswer: false,
        },
      ],
    };
  },
  mounted() {
    this.updateQuestions();
  },
  methods: {
    toggleAnswer(index) {
      this.questions[index].showAnswer = !this.questions[index].showAnswer;
    },

    updateQuestions() {
      const optionsMap = {
        1: { questionIndexes: [1, 2, 3, 4] },
        2: { questionIndexes: [2, 4, 5, 6] },
        3: { questionIndexes: [1, 4, 5, 6] },
      };

      this.selectedOptions = optionsMap[this.serviceOption] || {
        questionIndexes: [],
      };

      this.questions = this.selectedOptions.questionIndexes.map(
        (index) => this.allQuestions[index - 1],
      );
    },
  },
};
</script>
