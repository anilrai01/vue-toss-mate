const state = {
  taskList: [
    {
      id: 0,
      taskName: "Air Conditioning",
      address: "Melbourne",
      postCode: 3000,
      created_date: "4th June 2020",
      taskDesc: "This is test task Details and description",
      taskAvailability: "Flexible",
      taskStatus: "in-progress",
    },
    {
      id: 1,
      taskName: "Home Theatre",
      address: "Melbourne",
      postCode: 3000,
      created_date: "4th June 2020",
      taskDesc: "This is test task Details and description",
      taskAvailability: "Flexible",
      taskStatus: "completed",
    },
    {
      id: 2,
      taskName: "Building Suppliers",
      address: "Sydney",
      postCode: 2500,
      created_date: "4th June 2020",
      taskDesc: "This is test task Details and description",
      taskAvailability: "Flexible",

      taskStatus: "in-progress",
    },
    {
      id: 3,
      taskName: "Lawn & Turf",
      address: "Brisbane",
      postCode: 1514,
      created_date: "4th June 2020",
      taskDesc: "This is test task Details and description",
      taskAvailability: "Flexible",
      taskStatus: "in-progress",
    },
  ],
  userAuthentication: {
    u_token: "",
    u_name: "",
    u_email: "",
    u_img:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
    u_verified: true,
  },
};

const mutations = {};

const actions = {};

const getters = {
  getTaskList: (state) => {
    return state.taskList;
  },
  getUserAuth: (state) => {
    return state.userAuthentication;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
