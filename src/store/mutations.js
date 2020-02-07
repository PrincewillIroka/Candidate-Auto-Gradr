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
  },
  incrementCandidateDetailsField: (state, payload) => {
    state.candidateDetailsFields = [...state.candidateDetailsFields, payload]
  },
  removeField: (state, index) => {
    const fields = state.candidateDetailsFields;
    fields.splice(index, 1);
    state.candidateDetailsFields = fields;
  }
};

export default mutations;
