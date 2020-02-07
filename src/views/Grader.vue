<template>
  <div>
    <div class="grader">
      <Header class="header" />
      <section class="gr-content">
        <div class="gr-header">
          <span>Enter Candidate details here:</span>
          <div>
            <span class="gr-result">See Result</span>
            <span class="gr-clr">Clear All</span>
          </div>
        </div>
        <ol class="steps">
          <li class="step is-complete" data-step="1" @click="changeTab(1)">Candidate Details</li>
          <li class="step is-active" data-step="2" @click="changeTab(2)">Experience</li>
          <li class="step" data-step="3" @click="changeTab(3)">Tools/Technologies Used</li>
        </ol>
      </section>
      <section class="gr-content2">
        <CandidateDetails v-if="activeStep === 1" />
        <Experience v-else-if="activeStep === 2" />
        <TechnologiesUsed v-else-if="activeStep === 3" />
      </section>
    </div>
    <Modal v-if="isModalOpen" />
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
import Header from "@/components/Header.vue";
import CandidateDetails from "@/components/CandidateDetails.vue";
import Experience from "@/components/Experience.vue";
import TechnologiesUsed from "@/components/TechnologiesUsed.vue";
import Modal from "@/views/Modal.vue";

export default {
  name: "Grader",
  components: {
    Header,
    CandidateDetails,
    Experience,
    TechnologiesUsed,
    Modal
  },
  methods: {
    ...mapMutations(["toggleStep"]),
    changeTab(value) {
      this.toggleStep(value);
    }
  },
  computed: {
    ...mapState(["activeStep"]),
    ...mapGetters(['isModalOpen'])
  }
};
</script>

<style lang="scss" scoped>
.grader {
  display: flex;
  flex-direction: column;

  > .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
  }

  > .gr-content {
    margin-top: 120px;
    padding: 0 50px;

    .gr-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px;
      // background-color: $color-common;
      background-color: rgba(32, 32, 39, 0.9);
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
        &:hover {
          background-color: $color-white;
          color: $color-red;
        }
      }

      .gr-result {
        background-color: $color-white;
        color: $color-common;
        padding: 5px 12px;
        border-radius: 3px;
        font-weight: bold;
        cursor: default;
        &:hover {
          background-color: $color-common;
          color: $color-white;
        }
      }
    }

    .steps {
      list-style: none;
      display: table;
      table-layout: fixed;
      width: 100%;
      color: darken($mute, 33%);
      height: 4rem;
      margin-top: 60px;
      font-family: "Open Sans", sans-serif;

      > .step {
        position: relative;
        display: table-cell;
        text-align: center;
        font-size: 0.875rem;
        color: #6d6875;
        cursor: default;

        &:before {
          content: attr(data-step);
          display: block;
          margin: 0 auto;
          background: #ffffff;
          border: 2px solid $mute;
          color: $mute;
          width: 2rem;
          height: 2rem;
          text-align: center;
          margin-bottom: -4.2rem;
          line-height: 1.9rem;
          border-radius: 100%;
          position: relative;
          z-index: 1;
          font-weight: 700;
          font-size: 1rem;
        }
        &:after {
          content: "";
          position: absolute;
          display: block;
          background: $mute;
          width: 100%;
          height: 0.125rem;
          top: 1rem;
          left: 50%;
        }
        &:last-child:after {
          display: none;
        }
        &.is-complete {
          color: #6d6875;

          &:before {
            content: "\2713";
            color: $complete;
            border: 2px solid $complete;
          }
          &:after {
            background: $complete;
          }
        }
        &.is-active {
          font-size: 1.5rem;

          &:before {
            color: #fff;
            border: 2px solid $complete;
            background: $active;
            margin-bottom: -4.9rem;
          }
        }
      }
    }
  }

  .c-details {
  }
}
</style>
