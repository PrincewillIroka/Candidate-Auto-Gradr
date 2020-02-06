<template>
  <header :class="[addBoxShadowToHeader ? 'active-header' : 'header']">
    <img src="../assets/images/logo.png" class="logo" alt="Logo" @click="handleHome" />
    <nav class="nav">
      <a href="/" :class="[route === 'home' ? 'activeRoute' : '']">Home</a>
      <a href="/grader" :class="[route === 'grader' ? 'activeRoute' : '']">Grade</a>
    </nav>
  </header>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: "Header",
  data(){
    return {
      route: this.$route.name
    }
  },
  methods: {
    handleHome(){
      this.router.push('/')
    }
  },
  computed:{
    ...mapState(['addBoxShadowToHeader'])
  }
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  padding: 5px 15% 10px 5%;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  background-color: $color-white;

  .logo {
    height: 60px;
    width: 10%;
    object-fit: contain;
  }

  nav {
    a {
      font-family: "Oswald", sans-serif;
      color: $color-common;
      &:hover {
        opacity: 0.7;
      }
    }

    a:nth-child(2) {
      margin-left: 30px;
    }

    .activeRoute{
      font-weight: bold;
    }
  }
}

.active-header {
  box-shadow: 0 4px 2px -2px #ccc;
}
</style>