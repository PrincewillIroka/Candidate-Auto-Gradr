<template>
  <div class="modal">
    <div class="content">
      <span class="close" @click="toggleModal({location: '', isOpen: false})">&times;</span>
      <div class="layout">
        <FieldDetails v-if="modalLocation === 'New Candidate Detail'"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import FieldDetails from "@/components/FieldDetails";

export default {
  components: {
    FieldDetails
  },
  computed:{
    ...mapGetters(['modalLocation'])
  },
  methods: {
    ...mapMutations(["toggleModal"])
  }
};
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  z-index: 10;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  padding: 5% 20%;
  font-family: "Roboto Condensed", sans-serif;

  .content {
    // background-color: $color-white;
    display: flex;
    flex-direction: column;
    // padding: 5px 20px;
    height: 100%;

    .close {
      margin-left: auto;
      color: #fff;
      font-size: 50px;
      font-weight: bold;
      cursor: default;
    }

    .layout {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>