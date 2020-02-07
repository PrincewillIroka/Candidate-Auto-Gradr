const getters = {
  isModalOpen: state => {
    return state.modal.isOpen;
  },
  modalLocation: state => {
    return state.modal.location;
  }
};

export default getters;
