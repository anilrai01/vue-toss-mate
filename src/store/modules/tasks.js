const state = {
  taskList: [
    {
      id: 0,
      taskName: "Need a Logo designer for my new transport company",
      address: "Melbourne",
      postCode: 3000,
      created_date: "4th June 2020",
      taskDesc: "This is test task Details and description",
      taskType: "quotes",
      taskStat: "Open",
    },
    {
      id: 1,
      taskName: "Need a Graphic designer",
      address: "Brisbane",
      postCode: 3000,
      created_date: "4th June 2020",
      taskDesc: "This is test task Details and description",
      taskType: "offer",
      taskStat: "Open",
    },
    {
      id: 2,
      taskName: "Need a AeroCleaner",
      address: "Sydney",
      postCode: 3000,
      created_date: "4th June 2020",
      taskDesc: "This is test task Details and description",
      taskType: "quotes",
      taskStat: "Open",
    },
    {
      id: 3,
      taskName: "Designer for my new transport company",
      address: "White Pearl",
      postCode: 3000,
      created_date: "4th June 2020",
      taskDesc: "This is test task Details and description",
      taskType: "quotes",
      taskStat: "Open",
    },
    {
      id: 4,
      taskName: "Need a Web Developer for my new transport company",
      address: "Italy",
      postCode: 3000,
      created_date: "4th June 2020",
      taskDesc: "This is test task Details and description",
      taskType: "offer",
      taskStat: "Open",
    },
    {
      id: 5,
      taskName: "Game Developer for my new project",
      address: "Europe",
      postCode: 3000,
      created_date: "4th June 2020",
      taskDesc: "This is test task Details and description",
      taskType: "offer",
      taskStat: "Open",
    },
  ],
  completedTaskList: [
    {
      id: 0,
      taskName: "Game Development using Unity 3D",
      address: "California",
      postCode: 4000,
      created_date: "15th July 2020",
      taskDesc: "Developed New RPG Game in Unity 3D",
      taskType: "quotes",
      taskStat: "Completed",
    },
  ],
};
const mutations = {};
const actions = {};
const getters = {
  getTradieTasks: (state) => {
    return state.taskList;
  },
  getCompletedTasks: (state) => {
    return state.completedTaskList;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
