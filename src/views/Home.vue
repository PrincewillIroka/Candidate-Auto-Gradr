<template>
  <div class="home">
    <Header/>
    <section class="section">
      <Banner/>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';
import Banner from '@/views/Banner.vue';

export default {
  name: 'home',
  components: {
    Header,
    Banner
  },
};
</script>

<style lang="scss" scoped>
.home{
  display: flex;
  flex-direction: column;

  .section{
    display: flex;
    flex-direction: column;
    overflow-y: auto;
  }

}
</style>
