export default defineNuxtPlugin((nuxtApp) => {
  const route = useRoute();
  const { hash } = route;

  nuxtApp.hook("page:finish", () => {
    const scrollBehavior = (to) => {
      if (to.hash) {
        const targetElement = document.querySelector(to.hash);
        if (targetElement) {
          const navbarHeight = document.getElementById("navbar").offsetHeight;
          return { left: 0, top: targetElement.offsetTop - navbarHeight };
        }

        return { left: 0, top: 0 };
      }

      if (hash) {
        const targetElement = document.querySelector(hash);
        if (targetElement) {
          const navbarHeight = document.getElementById("navbar").offsetHeight;
          return { left: 0, top: targetElement.offsetTop - navbarHeight };
        }
      }
    };

    nuxtApp.$router.options.scrollBehavior = scrollBehavior;
  });
});
