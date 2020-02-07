<template>
  <div class="home">
    <Header class="header" />
    <section class="section">
      <Banner />
      <Discover />
      <Subscribe/>
    </section>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

import Header from "@/components/Header.vue";
import Banner from "@/views/Banner.vue";
import Discover from "@/views/Discover.vue";
import Subscribe from "@/views/Subscribe.vue";

export default {
  name: "home",
  components: {
    Header,
    Banner,
    Discover,
    Subscribe
  },
  methods: {
    ...mapMutations(["toogleAddBoxShadowToHeader"]),
    handleScroll() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      let tValue;
      scrollTop >= 50 ? (tValue = true) : (tValue = false);
      this.toogleAddBoxShadowToHeader(tValue);
    }
  },
  mounted() {
    document.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    document.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;

  > .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
  }

  > .section {
    display: flex;
    flex-direction: column;
    margin-top: 120px;
  }
}
</style>
