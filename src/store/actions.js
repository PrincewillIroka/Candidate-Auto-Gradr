const actions = {
    addCandidateDetailsField({commit, state}, field){
        commit('incrementCandidateDetailsField', field)
    }
}

export default actions