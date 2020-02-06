<template>
  <div class="banner">
    <img
      src="../assets/svg/undraw_blogging_vpvv.svg"
      class="banner-img"
      alt="A person in an office"
    />
    <div class="banner-section">
      <h1>Select candidates with ease</h1>
      <h6>We grade them and you see the results instantly.</h6>
      <span class="g-now-btn" @click="handleGrader()">Grade Now</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  methods: {
    handleGrader() {
      this.$router.push('/grader')
    }
  }
};
</script>

<style lang="scss" scoped>
.banner {
  height: 400px;
  width: 100%;
  padding: 20px 10px;
  display: flex;
  // z-index: -1;

  &-img {
    width: 60%;
    height: 100%;
  }

  &-section {
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: "Roboto Condensed", sans-serif;

    > h1 {
      font-size: 1.375rem;
      margin-bottom: 10px;
    }

    > h6 {
      font-size: 0.9375rem;
      margin-bottom: 20px;
    }

    .g-now-btn {
      font-size: 1.0625rem;
      background-color: $color-common;
      padding: 8px 12px;
      color: $color-white;
      border-radius: 20px;
      border: 1px solid $color-common;
      opacity: 0.8;
      width: 120px;
      align-items: center;
      justify-content: center;
      display: flex;
      cursor: default;
      // user-select: none;

      &:hover {
        color: $color-common-dark;
        background-color: $color-white;
        border: 1px solid $color-common-dark;
      }
    }
  }
}

@media (max-width: 840px) {
  .banner {
    &-img {
      width: 50%;
    }

    &-section {
      width: 50%;
    }
  }
}
</style>