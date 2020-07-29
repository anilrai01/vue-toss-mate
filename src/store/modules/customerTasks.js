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
            taskStatus: "pending",
            taskType: "quote",
            applicant: [
                {
                    profile:
                        "https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
                    name: "Levi Ackerman",
                    workSummary:
                        "I've been working for more than 3 years in this field now and I have always completed my jobs on time never late",
                    jobsCompleted: "40+",
                    rating: "4.5",
                    verified: "true"
                },
                {
                    profile:
                        "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80",
                    name: "Eren Eieger",
                    workSummary:
                        "I've just joined the track but I am sure to not make any mistake and accomplish task on time",
                    jobsCompleted: "30+",
                    rating: "3.5",
                    verified: "true"
                },
                {
                    profile:
                        "https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
                    name: "Armin Joy",
                    workSummary: "I am here with a greater ambition",
                    jobsCompleted: "20+",
                    rating: "3",
                    verified: "false"
                },
                {
                    profile:
                        "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=976&q=80",
                    name: "Mikasa Ackermen",
                    workSummary:
                        "I've been in this job since 10+ years now and I've never disappointed my clients ever before ",
                    jobsCompleted: "11+",
                    rating: "4",
                    verified: "true"
                },
                {
                    profile:
                        "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80",
                    name: "John Doe",
                    workSummary: "",
                    jobsCompleted: "30+",
                    rating: "4.5",
                    verified: "true"
                },
                {
                    profile:
                        "https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
                    name: "Levik Ryted",
                    workSummary: "",
                    jobsCompleted: "20+",
                    rating: "3",
                    verified: "false"
                },
                {
                    profile:
                        "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80",
                    name: "Stray Fley",
                    workSummary: "",
                    jobsCompleted: "30+",
                    rating: "4.5",
                    verified: "true"
                },
                {
                    profile:
                        "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=976&q=80",
                    name: "Yodoo Gang",
                    workSummary: "",
                    jobsCompleted: "11+",
                    rating: "2.9",
                    verified: "false"
                }
            ]
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
            taskType: "offer",
            taskOffer: "500",
            applicant: [
                {
                    profile:
                        "https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
                    name: "Armin Joy",
                    workSummary: "I am here with a greater ambition",
                    jobsCompleted: "20+",
                    rating: "3",
                    verified: "true",
                    offeredPrice: "450"
                }
            ]
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
            taskType: "offer",
            taskOffer: "600",
            applicant: [
                {
                    profile:
                        "https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
                    name: "Levik Ryted",
                    workSummary: "",
                    jobsCompleted: "20+",
                    rating: "3",
                    verified: "true",
                    offeredPrice: "550"
                }
            ]
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
            taskType: "quote",
            applicant: [
                {
                    profile:
                        "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80",
                    name: "Eren Eieger",
                    workSummary:
                        "I've just joined the track but I am sure to not make any mistake and accomplish task on time",
                    jobsCompleted: "30+",
                    rating: "3.5",
                    verified: "true"
                }
            ]
        },
        {
            id: 5,
            taskName: "Bathroom Renovation",
            address: "Melbourne",
            postCode: 1514,
            created_date: "26th July 2020",
            taskDesc: "This is test task Details and description",
            taskAvailability: "Flexible",
            taskStatus: "in-progress",
            taskType: "quote",
            applicant: [
                {
                    profile:
                        "https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
                    name: "Armin Joy",
                    workSummary: "I am here with a greater ambition",
                    jobsCompleted: "20+",
                    rating: "3",
                    verified: "true"
                }
            ]
        }
    ],
    userAuthentication: {
        u_token: "",
        u_name: "",
        u_email: "",
        u_img:
            "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
        u_verified: false
    },
    currentSelectedApplicant: "",
    csaVisibility: false
};

const mutations = {
    SET_CURRENT_SELECTED_APPLICANT(state, value) {
        state.currentSelectedApplicant = value;
    },
    SET_CSA_VISIBILITY(state, value) {
        state.csaVisibility = value;
    }
};

const actions = {
    setCurrentSelectedApplicant(context, value) {
        context.commit("SET_CURRENT_SELECTED_APPLICANT", value);
    },
    setCsaVisibility(context, value) {
        context.commit("SET_CSA_VISIBILITY", value);
    }
};

const getters = {
    getTaskList: state => {
        return state.taskList;
    },
    getUserAuth: state => {
        return state.userAuthentication;
    },
    getCurrentSelectedApplicant: state => {
        return state.currentSelectedApplicant;
    },
    getCsaVisibility: state => {
        return state.csaVisibility;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};
