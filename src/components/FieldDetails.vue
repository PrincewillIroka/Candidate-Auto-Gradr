<template>
  <div class="field-details">
    <span class="n-detail">New Detail</span>
    <div class="detail-row">
      <span>Title:</span>
      <input type="text" v-model="newField.title" />
    </div>
    <div class="detail-row">
      <span>Value:</span>
      <input type="text" v-model="newField.value" />
    </div>
    <button @click="handleSubmit">Submit</button>
  </div>
</template>

<script>
const initialData = () => ({
  newField: {
    title: "",
    value: ""
  }
});

import { mapMutations, mapActions } from "vuex";

export default {
  name: "FieldDetails",
  data() {
    return initialData();
  },
  methods: {
    ...mapMutations([""]),
    ...mapActions(["addCandidateDetailsField"]),
    handleSubmit(event) {
      event.preventDefault();
      const newField = this.newField;
      if (newField.title) {
        this.addCandidateDetailsField(newField);
        Object.assign(this.$data, initialData());
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.field-details {
  align-self: center;
  height: 320px;
  width: 70%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 10px 0 30px;
  align-items: center;

  .n-detail {
    align-self: center;
    font-size: 1.1rem;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    margin-bottom: 30px;
  }

  .detail-row {
    width: 80%;
    margin-top: 30px;
    display: grid;
    grid-template-columns: 20% 75%;
    grid-template-rows: 35px;
    grid-column-gap: 5%;

    input[type="text"] {
      border: 1px solid #ccc;
      border-radius: 1px;
      padding: 5px 10px;
    }
  }

  button {
    width: 150px;
    height: 40px;
    align-self: center;
    margin-top: auto;
    margin-left: 15%;
    width: 40%;
    opacity: 0.8;
    font-size: 15px;
    border-radius: 3px;
    background-color: $color-white;
    border: 1px solid $color-common;
    color: $color-common;

    &:hover {
      background-color: $color-common;
      color: $color-white;
      border: 1px solid $color-common;
    }
  }
}
</style>