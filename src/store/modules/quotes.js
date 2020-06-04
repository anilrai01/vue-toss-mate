const state = {
  quote: {
    business: "",
    postCode: "",
  },
};

const mutations = {
  SET_QUOTES(state, value) {
    state.quote.business = value.business;
    state.quote.postCode = value.postCode;
    console.log(state.quote);
  },
};

const actions = {
  setQuotes(context, value) {
    context.commit("SET_QUOTES", value);
  },
};

const getters = {
  getQuotes: (state) => {
    return state.quote;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
