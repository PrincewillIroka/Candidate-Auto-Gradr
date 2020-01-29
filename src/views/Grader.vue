<template>
  <div class="grader">
    <Header/>
    <section>
      <div class="gr-header">
        <span>Enter Candidate details here:</span>
        <span class="gr-result">See Result</span>
      </div>
    </section>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
export default {
  name: "Grader",
  components: {
    Header
  }
}
</script>

<style lang="scss" scoped>
.grader{
  display: flex;
  flex-direction: column;

  .gr-header{    
    margin: 50px ;
    display: flex;
    justify-content: space-between;
    padding: 30px;
    background-color: $color-common;
    opacity: 0.7;
    color: $color-white;
    font-family: 'PT Sans', sans-serif;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    font-size: 17px;

    .gr-result{
      border: 2px solid $color-white;
      padding: 5px 10px;
      border-radius: 3px;
    }

  }
}
</style>
