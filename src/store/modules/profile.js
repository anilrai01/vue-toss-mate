const state = {
  taskList: [
    {
      id: 0,
      taskName: "Air Conditioning",
      address: "Melbourne",
      postCode: 3000,
      created_date: "4th June 2020",
      taskDesc: "This is test task Details and description",
      taskStatus: "in-progress",
    },
    {
      id: 1,
      taskName: "Home Theatre",
      address: "Melbourne",
      postCode: 3000,
      created_date: "4th June 2020",
      taskDesc: "This is test task Details and description",
      taskStatus: "completed",
    },
    {
      id: 2,
      taskName: "Building Suppliers",
      address: "Sydney",
      postCode: 2500,
      created_date: "4th June 2020",
      taskDesc: "This is test task Details and description",
      taskStatus: "in-progress",
    },
    {
      id: 3,
      taskName: "Lawn & Turf",
      address: "Brisbane",
      postCode: 1514,
      created_date: "4th June 2020",
      taskDesc: "This is test task Details and description",
      taskStatus: "in-progress",
    },
  ],
  testData: "ANil",
};

const mutations = {};

const actions = {};

const getters = {
  getTaskList: (state) => {
    return state.taskList;
  },
  getTest: (state) => {
    return state.testData;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
