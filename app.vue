<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script>
import SectionAboutUs from "./assets/components/section-about-us.vue";
import ContactButtons from "./assets/components/contact-buttons.vue";
import SectionContacts from "./assets/components/section-contacts.vue";
import SectionFaq from "./assets/components/section-faq.vue";
import InfoCard from "./assets/components/info-card.vue";
import SectionMaterials from "./assets/components/section-materials.vue";
import SectionProjects from "./assets/components/section-projects.vue";
import SectionReviews from "./assets/components/section-reviews.vue";
import SectionSalon from "./assets/components/section-salon.vue";
import ServiceCard from "./assets/components/service-card.vue";
import SectionWhatYouWant from "./assets/components/section-what-you-want.vue";
import SectionWhereToOrder from "./assets/components/section-where-to-order.vue";
import SectionWhyUs from "./assets/components/section-why-us.vue";
export default {
  components: {
    SectionFaq,
    SectionProjects,
    SectionSalon,
    SectionAboutUs,
    InfoCard,
    ServiceCard,
    ContactButtons,
    SectionWhatYouWant,
    SectionWhereToOrder,
    SectionWhyUs,
    SectionMaterials,
    SectionReviews,
    SectionContacts,
  },
  data() {
    return {
      navbarHeight: 0,
    };
  },

  provide: {
    scrollToSection(id) {
      const sectionPos = document.getElementById(id).offsetTop;
      const navbarHeight = document.getElementById("navbar").offsetHeight;
      const scrollPos = sectionPos - navbarHeight;
      window.scrollTo(0, scrollPos);
      console.log(scrollPos);
    },
  },
};
</script>
