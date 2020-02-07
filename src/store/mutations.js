const mutations = {
  toggleStep: (state, num) => {
    state.activeStep = num;
  },
  addCandidateDetailsField: (state, newField) => {
    state.candidateDetailsFields = state.candidateDetailsFields.push(newField);
  },
  toogleAddBoxShadowToHeader: (state, addBoxShadowToHeader) => {
    state.addBoxShadowToHeader = addBoxShadowToHeader;
  },
  toggleModal: (state, payload) => {
    const location = payload.location;
    const isOpen = payload.isOpen;
    state.modal = { location, isOpen };
  }
};

export default mutations;
