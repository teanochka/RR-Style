<template>
  <Menu
    :navbarHeight="navbarHeight"
    :isMenuVisible="isMenuVisible"
    @close="(isMenuVisible = false), stopScroll()"
    @scrollToSection="scrollToSection"
  />
  <Header
    :isMenuVisible="isMenuVisible"
    :isSticky="isSticky"
    @toggleMenu="(isMenuVisible = true), stopScroll()"
    @navbarHeight="handleNavbarHeight"
  />
  <SectionAboutUs></SectionAboutUs>
  <SectionWhatYouWant></SectionWhatYouWant>
  <SectionWhyUs></SectionWhyUs>
  <SectionWhereToOrder></SectionWhereToOrder>
  <SectionMaterials></SectionMaterials>
  <SectionProjects @scrollToSection="scrollToSection" />
  <SectionSalon></SectionSalon>
  <SectionFaq></SectionFaq>
  <SectionReviews></SectionReviews>
  <SectionContacts></SectionContacts>
  <Footer></Footer>
</template>

<script>
import { withMemo } from "vue";
import Header from "/assets/components/header.vue";
import Footer from "./assets/components/footer.vue";
import SectionAboutUs from "./assets/components/section-about-us.vue";
import ContactButtons from "./assets/components/contact-buttons.vue";
import Menu from "./assets/components/menu.vue";
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
    Footer,
    Menu,
    Header,
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  },
  data() {
    return {
      selectedOption: "option1",
      shipmentOption: "option1",
      company: "llumar",
      isMenuVisible: false,
      isSticky: false,
      navbarHeight: 0,
    };
  },
  methods: {
    onScroll(e) {
      // const navbar = document.getElementById("navbar");
      // const navbarPos = navbar.offsetTop;
      const windowTop = window.scrollY;

      this.isSticky = windowTop > 0;
    },
    stopScroll() {
      if (this.isMenuVisible) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    },
    handleNavbarHeight(height) {
      this.navbarHeight = height;
    },
    scrollToSection(id) {
      const sectionPos = document.getElementById(id).offsetTop;
      const scrollPos = sectionPos - this.navbarHeight;
      window.scrollTo(0, scrollPos);
    },
  },
};
</script>
