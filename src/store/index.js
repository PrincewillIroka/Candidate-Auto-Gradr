import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activeTab: 'home',
    activeStep: 1,
    candidateDetailsFields: ["First Name", "Last Name"],
    addBoxShadowToHeader: false
  },
  mutations: {
    toggleTab: (state, num) => {
      state.activeStep = num
    },
    addCandidateDetailsField: (state, newField) => {
      state.candidateDetailsFields = state.candidateDetailsFields.push(newField)      
    },
    toogleAddBoxShadowToHeader: (state, addBoxShadowToHeader)  => {
      state.addBoxShadowToHeader = addBoxShadowToHeader
    }
  },
  actions: {
  },
  modules: {
  },
});
