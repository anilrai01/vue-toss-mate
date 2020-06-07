const state = {
  quote: {
    business: "",
    postCode: "",
  },
  dropdownMenu: [
    "Air Conditioning",
    "Arborists",
    "Architects",
    "Asbestos Removal",
    "Awnings",
    "Balustrades",
    "Bathroom Renovations",
    "Blind Suppliers",
    "Blinds",
    "Bricklayers",
    "Building Designers",
    "Building Inspections",
    "Cabinet Makers",
    "Carpenters",
    "Carpet Cleaning",
    "Carports",
    "Cladding",
    "Commercial Cleaning",
    "Concrete Resurfacing",
    "Concreting",
    "Curtains",
    "Decking",
    "Demolition",
    "Doors",
    "Drafting",
    "Excavation",
    "Extension Design",
    "Fencing",
    "Garges",
    "Garden Clean Up",
    "Gardeners",
    "Gas Fitters",
    "Gates",
    "Gazebo",
    "Glazier",
    "Gutter Cleaning",
    "Guttering",
    "Home Security",
    "Home Theatre",
    "Hot Water Systems",
    "Insulation",
    "Interior Decorators",
    "Interior Designers",
    "Irrigation Systems",
    "Kitchens",
    "Landscapers",
    "Lawn & Turf",
    "Lawn Mowing",
    "Lighting",
    "Patios",
    "Pavers",
    "Pergolas",
    "Pest Control",
    "Plastering",
    "Pool Fencing",
    "Pressure Cleaner",
    "Rain Water Tanks",
    "Removalists",
    "Render",
    "Rendering",
    "Retaining Walls",
    "Roof Repairs",
    "Roofing",
    "Rubbish Removal",
    "Security Screen Doors",
    "Shopfitters",
    "Shower Screens",
    "Skylights",
    "Solar Power",
    "Splashbacks",
    "Tilers",
    "Timber Flooring",
    "Tree Fellers",
    "Verandahs",
    "Wardrobes",
    "Waterproofing",
    "Window Cleaners",
    "Window Repair",
    "Window Tinting",
    "Windows",
  ],
  jobDetails: {},
};

const mutations = {
  SET_QUOTES(state, value) {
    state.quote.business = value.business;
    state.quote.postCode = value.postCode;
    // console.log(state.quote);
  },
  SET_BUSINESS(state, value) {
    state.quote.business = value;
  },
  SET_JOB_DETAILS(state, value) {
    state.jobDetails = value;
  },
};

const actions = {
  setQuotes(context, value) {
    context.commit("SET_QUOTES", value);
  },
  setQuoteBusiness(context, value) {
    context.commit("SET_BUSINESS", value);
  },
  setJobDetails(context, value) {
    context.commit("SET_JOB_DETAILS", value);
  },
};

const getters = {
  getQuotes: (state) => {
    return state.quote;
  },
  getDropdown: (state) => {
    return state.dropdownMenu;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
