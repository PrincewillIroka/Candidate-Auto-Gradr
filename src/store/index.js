import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activeTab: 1,
    candidateDetailsFields: ["First Name", "Last Name"]
  },
  mutations: {
    toggleTab: (state, num) => {
      state.activeTab = num
    },
    addCandidateDetailsField: (state, newField) => {
      state.candidateDetailsFields = state.candidateDetailsFields.push(newField)      
    }
  },
  actions: {
  },
  modules: {
  },
});
