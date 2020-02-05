<template>
  <div class="grader">
    <Header />
    <section class="gr-content">
      <div class="gr-header">
        <span>Enter Candidate details here:</span>
        <div>
          <span class="gr-result">See Result</span>
          <span class="gr-clr">Clear All</span>
        </div>
      </div>
      <div class="gr-progress">
        <div class="gr-progress-title">
          <span @click="changeTab(1)">Candidate Details</span>
          <span @click="changeTab(2)">Experience</span>
          <span @click="changeTab(3)">Tools/Technologies Used</span>
        </div>
        <div class="gr-progress-count">
          <span>1</span>
          <span></span>
          <span>2</span>
          <span></span>
          <span>3</span>
        </div>
      </div>
    </section>
    <section class="gr-content2">
      <CandidateDetails v-if="activeTab === 1" />
      <Experience v-else-if="activeTab === 2" />
      <TechnologiesUsed v-else-if="activeTab === 3" />
    </section>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import Header from "@/components/Header.vue";
import CandidateDetails from "@/components/CandidateDetails.vue";
import Experience from "@/components/Experience.vue";
import TechnologiesUsed from "@/components/TechnologiesUsed.vue";
export default {
  name: "Grader",
  components: {
    Header,
    CandidateDetails,
    Experience,
    TechnologiesUsed
  },
  methods: {
    ...mapMutations(["toggleTab"]),
    changeTab(value) {
      this.toggleTab(value);
    }
  },
  computed: {
    ...mapState(["activeTab"])
  }
};
</script>

<style lang="scss" scoped>
.grader {
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
  overflow: hidden;

  > .gr-content {
    padding: 50px 50px 0;

    .gr-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px;
      background-color: $color-common;
      font-family: "PT Sans", sans-serif;
      border-top-right-radius: 5px;
      border-top-left-radius: 5px;
      font-size: 17px;
      color: $color-white;

      .gr-clr {
        padding: 5px 15px;
        border-radius: 3px;
        background-color: $color-red;
        color: $color-white;
        font-weight: bold;
        cursor: default;
        margin-left: 70px;
      }

      .gr-result {
        background-color: $color-white;
        padding: 5px 10px;
        border-radius: 3px;
        color: $color-common-dark;
        font-weight: bold;
        cursor: default;
      }
    }

    .gr-progress {
      display: flex;
      flex-direction: column;
      margin-top: 30px;
      width: 100%;

      .gr-progress-title {
        display: flex;
        font-family: "Oswald", sans-serif;

        > span {
          display: flex;
          justify-content: center;
          width: 33.33%;
          cursor: default;
          font-weight: bold;
        }
      }
    }
  }

  .gr-content2 {
  }
}
</style>
