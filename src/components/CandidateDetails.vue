<template>
  <section class="candidate_details">
    <div class="cd-layout">
      <form>
        <template v-for="(formColumn, index) in candidateDetailsFields">
          <input :key="index" type="text" :placeholder="formColumn" />
        </template>
      </form>
      <div class="control-btn-group">
        <span class="ctrl-btn" @click="toggleModal({location: 'New Candidate Detail', isOpen: true})">
          <span>Add New Detail</span>
        </span>
        <span class="ctrl-btn">
          <span>Save Changes</span>
        </span>
      </div>
    </div>
  </section>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "CandidateDetails",
  computed: {
    ...mapState(["candidateDetailsFields"])
  },
  methods:{
    ...mapMutations(['toggleModal'])
  }
};
</script>

<style lang="scss" scoped>
.candidate_details {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  margin: 0 10%;
  height: 330px;

  .cd-layout {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 20px 30px 15px;

    form {
      display: grid;
      grid-template-columns: 40% 40%;
      grid-column-gap: 20%;
      grid-row-gap: 30px;
      width: 100%;
      height: 85%;
      overflow-y: auto;

      > input {
        height: 35px;
        padding: 0 7px;
        border: 1px solid rgb(158, 158, 158);
        border-radius: 3px;
      }
    }

    .control-btn-group {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;

      .ctrl-btn {
        width: 40%;
        display: flex;
        justify-content: center;
        background-color: $color-common;
        opacity: 0.8;
        color: $color-white;
        padding: 10px 0;
        border-radius: 20px;
        cursor: default;
        font-family: "Roboto Condensed", sans-serif;
        border: 2px solid $color-common;

        &:hover {
          background-color: $color-white;
          border: 2px solid $color-common;
          color: $color-common;
        }
      }
    }
  }
}
</style>