const state = {
    taskList: [
        {
            id: 0,
            taskName: "Graphic Designer",
            address: "Melbourne",
            postCode: 3000,
            created_date: "4th June 2020",
            taskDesc: "Need a Logo designer for my new transport company",
            taskType: "quotes",
            taskStat: "Open",
            imgAddress:
                "https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
        },
        {
            id: 1,
            taskName: "Game Developer",
            address: "Brisbane",
            postCode: 3000,
            created_date: "4th June 2020",
            taskDesc: "Need a Graphic designer",
            taskType: "offer",
            taskStat: "Open",
            taskBudget: "$100",
            imgAddress:
                "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80"
        },
        {
            id: 2,
            taskName: "Electic Engineer",
            address: "Sydney",
            postCode: 3000,
            created_date: "4th June 2020",
            taskDesc: "Need a AeroCleaner",
            taskType: "quotes",
            taskStat: "Open",
            imgAddress:
                "https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
        },
        {
            id: 3,
            taskName: "Architect",
            address: "White Pearl",
            postCode: 3000,
            created_date: "4th June 2020",
            taskDesc: "Designer for my new transport company",
            taskType: "quotes",
            taskStat: "Open",
            imgAddress:
                "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=976&q=80"
        },
        {
            id: 4,
            taskName: "WebDesigner",
            address: "Italy",
            postCode: 3000,
            created_date: "4th June 2020",
            taskDesc: "Need a Web Developer for my new transport company",
            taskType: "offer",
            taskBudget: "$150",
            taskStat: "Open",
            imgAddress:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        },
        {
            id: 5,
            taskName: "3D Graphic Designer",
            address: "Europe",
            postCode: 3000,
            created_date: "4th June 2020",
            taskDesc: "Game Developer for my new project",
            taskType: "offer",
            taskBudget: "$50",
            taskStat: "Open",
            imgAddress:
                "https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
        },
        {
            id: 6,
            taskName: "Graphic Designer",
            address: "Melbourne",
            postCode: 3000,
            created_date: "4th June 2020",
            taskDesc: "Need a Logo designer for my new transport company",
            taskType: "quotes",
            taskStat: "Open",
            imgAddress:
                "https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
        },
        {
            id: 7,
            taskName: "Game Developer",
            address: "Brisbane",
            postCode: 3000,
            created_date: "4th June 2020",
            taskDesc: "Need a Graphic designer",
            taskType: "offer",
            taskStat: "Open",
            taskBudget: "$100",
            imgAddress:
                "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80"
        }
    ],
    completedTaskList: [
        {
            id: 0,
            taskName: "Graphic Designer",
            address: "California",
            postCode: 4000,
            created_date: "15th July 2020",
            taskDesc: "Game Development using Unity 3D",
            taskType: "offer",
            taskStat: "Completed",
            imgAddress:
                "https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=681&q=80"
        }
    ],
    //For Tradie Browse
    currentJob: {},
    //For Normal Browse
    currentBrowseJob: ""
};
const mutations = {
    SET_CURRENT_JOB(state, value) {
        state.currentJob = value;
    },
    SET_CURRENT_BROWSE_JOB(state, value) {
        state.currentBrowseJob = value;
    }
};
const actions = {
    setCurrentJob(context, value) {
        context.commit("SET_CURRENT_JOB", value);
    },
    setCurrentBrowseJob(context, value) {
        // alert(value.taskName);
        context.commit("SET_CURRENT_BROWSE_JOB", value);
    }
};
const getters = {
    getTradieTasks: state => {
        return state.taskList;
    },
    getCompletedTasks: state => {
        return state.completedTaskList;
    },
    getCurrentJob: state => {
        return state.currentJob;
    },
    getCurrentBrowseJob: state => {
        return state.currentBrowseJob;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};
