<template>
  <div class="home">
    <Header class="header"/>
    <section class="section">
      <Banner/>
      <Discover/>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';
import Banner from '@/views/Banner.vue';
import Discover from '@/views/Discover.vue';

export default {
  name: 'home',
  components: {
    Header,
    Banner,
    Discover
  },
};
</script>

<style lang="scss" scoped>
.home{
  display: flex;
  flex-direction: column;

  .header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
  }

  .section{
    display: flex;
    flex-direction: column;
    margin-top: 120px;
  }

}
</style>
