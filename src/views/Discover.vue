<template>
  <div class="discover">
    <section class="ds-section1">
      <h1>Be free from the stress</h1>
      <div class="ds-three-bck">
        <div class="ds-single-ic-tx">
          <AccountDetailsIcon/>
          <span>Candidate Details</span>
        </div>
        <div class="ds-single-ic-tx">
          <ExperienceIcon/>
          <span>Experience</span>
        </div>
        <div class="ds-single-ic-tx">
          <ToolsIcon/>
          <span>Tools Used</span>
        </div>
      </div>
      <h6>Save your time and productivity while we do the work for you.</h6>
    </section>
    <section class="ds-section2">
      <img
        src="../assets/images/stockfresh_7011692_african-american-businessman-handshaking-with-client_sizeXS.jpg"
        class="discover-img"
        alt="Congratulations for getting the job."
      />
    </section>
  </div>
</template>

<script>
import AccountDetailsIcon from 'vue-material-design-icons/AccountCardDetailsOutline';
import ExperienceIcon from 'vue-material-design-icons/BriefcaseOutline';
import ToolsIcon from 'vue-material-design-icons/Tools';

export default {
  components:{
    AccountDetailsIcon,
    ExperienceIcon,
    ToolsIcon
  }
}
</script>

<style lang="scss" scoped>
.discover {
  height: 500px;
  width: 100%;
  padding: 0 10%;
  // background-color: rgba(245, 241, 241, 0.3);
  display: flex;
  align-items: center;

  .ds-section1 {
    width: 50%;
    display: flex;
    flex-direction: column;

    > h1 {
      font-size: 1.375rem;
      margin-bottom: 50px;
      font-family: "Roboto Condensed", sans-serif;
    }

    .ds-three-bck {
      display: grid;
      grid-template-columns: 100px 100px 100px;
      grid-template-rows: 100px;
      grid-column-gap: 60px;

      .ds-single-ic-tx {
        background-color: rgba(32, 32, 39, 0.9);
        display: flex;
        flex-direction: column;
        color: $color-white;
        align-items: center;
        justify-content: center;

        > span {
          text-align: center;
          font-family: "Franklin Gothic Medium", "Arial Narrow", Arial,
            sans-serif;
          font-size: 15px;
          cursor: default;
          margin-top: 5px;
        }
      }
    }

    > h6 {
      font-size: 1rem;
      margin-top: 50px;
      font-family: "Playfair Display", sans-serif;
    }
  }

  .ds-section2 {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    .discover-img {
      // width: 30%;
      // height: 90%;
      // border-radius: 50%;
      object-fit: contain;
    }
  }
}
</style>