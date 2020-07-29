<template>
    <section class="container bt-cont">
        <div class="bt-details p-3">
            <div class="task-desc" v-if="showBTintro">
                <h3 class="text-center font-weight-bold text-grey">
                    You can check on the details of the task here
                </h3>
                <img class="choice-img" src="../assets/choose_list.svg" />
                <h5 class="text-center text-brand my-5 px-5">
                    Click on any interesting task from the task list right to
                    this
                </h5>
                <h6 class="text-center px-5 text-muted font-weight-bold">
                    Remember You need to be a part of Toosmate community in
                    order to enjoy the Quote Task as well
                </h6>
            </div>
            <div class="task-desc-2" v-if="!showBTintro">
                <!-- <h3 class="text-brand font-weight-bold">Job Details!</h3> -->
                <div class="task-top">
                    <div class="task-details">
                        <h2 class="text-lblack font-weight-bold">
                            {{ getCurrentBrowseJob.taskName }}
                        </h2>
                        <div class="task-post-profile my-2">
                            <img
                                class="profile-img"
                                :src="getCurrentBrowseJob.imgAddress"
                                alt
                            />
                            <div class="tpName ml-3">
                                <h5 class="m-0 font-weight-bold text-muted">
                                    Posted by
                                </h5>
                                <h6 class="m-0">John Doe</h6>
                            </div>
                        </div>
                    </div>
                    <div
                        class="task-budget"
                        v-if="getCurrentBrowseJob.taskStat != 'Completed'"
                    >
                        <div
                            class="budget-title"
                            v-if="getCurrentBrowseJob.taskType == 'offer'"
                        >
                            Task Budget
                        </div>
                        <div
                            class="budget-title"
                            v-if="getCurrentBrowseJob.taskType == 'quotes'"
                        >
                            Start to Quote now
                        </div>
                        <div class="task-amount">
                            {{ getCurrentBrowseJob.taskBudget }}
                        </div>
                        <button
                            class="btn cus-btn"
                            v-if="getCurrentBrowseJob.taskType == 'offer'"
                        >
                            Make an Offer
                        </button>
                        <button
                            class="btn cus-btn"
                            v-if="getCurrentBrowseJob.taskType == 'quotes'"
                        >
                            Make a Quote
                        </button>
                    </div>

                    <div
                        class="task-o-details fb-50"
                        v-if="getCurrentBrowseJob.taskStat == 'Completed'"
                    >
                        <div class="loc-profile d-flex j-sb f-col my-2">
                            <div class="location d-flex f-row">
                                <div class="loc mr-3">
                                    <mdb-icon
                                        icon="map-marker-alt"
                                        class="text-grey mr-2"
                                    />
                                    <span>{{
                                        getCurrentBrowseJob.address
                                    }}</span>
                                </div>
                                <div class="time">
                                    <mdb-icon
                                        icon="calendar"
                                        class="text-grey mr-2"
                                    />
                                    <span>{{
                                        getCurrentBrowseJob.created_date
                                    }}</span>
                                </div>
                            </div>
                            <h5 class="mt-4 f-norm font-weight-bold text-grey">
                                Details
                            </h5>
                            <p class="f-norm">
                                {{ getCurrentBrowseJob.taskDesc }}
                            </p>
                        </div>
                    </div>
                </div>

                <div
                    class="task-o-details"
                    v-if="getCurrentBrowseJob.taskStat !== 'Completed'"
                >
                    <div class="loc-profile d-flex j-sb f-col my-3">
                        <div class="location d-flex f-row">
                            <div class="loc mr-3">
                                <mdb-icon
                                    icon="map-marker-alt"
                                    class="text-grey mr-2"
                                />
                                <span>{{ getCurrentBrowseJob.address }}</span>
                            </div>
                            <div class="time">
                                <mdb-icon
                                    icon="calendar"
                                    class="text-grey mr-2"
                                />
                                <span>{{
                                    getCurrentBrowseJob.created_date
                                }}</span>
                            </div>
                        </div>
                        <h5 class="mt-4 f-norm font-weight-bold text-grey">
                            Details
                        </h5>
                        <p class="f-norm">{{ getCurrentBrowseJob.taskDesc }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="bt-list p-2">
            <!-- <transition name="fade">
                <div class="loading-class d-flex j-c a-c" v-if="loading">
                    <span class="mr-3">Loading</span>
                    <div class="spinner-border text-brand" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            </transition> -->
            <!-- <div id="infinite-list">
            </div> -->
            <Tasks :taskList="infiniteData" />
            <infinite-loading @infinite="infiniteHandler"></infinite-loading>
        </div>
    </section>
</template>

<script>
import { mapGetters } from "vuex";
import { mdbIcon } from "mdbvue";
import Tasks from "../components/TradieProfile/Tasks";
import InfiniteLoading from "vue-infinite-loading";

export default {
    name: "BrowseTask",
    components: {
        Tasks,
        mdbIcon,
        InfiniteLoading
    },
    data() {
        return {
            infiniteData: [],
            loading: true
        };
    },
    computed: {
        ...mapGetters(["getCurrentBrowseJob", "getTradieTasks"]),
        showBTintro() {
            if (
                this.getCurrentBrowseJob == "" ||
                this.getCurrentBrowseJob == undefined ||
                this.getCurrentBrowseJob == null
            ) {
                return true;
            } else {
                return false;
            }
        }
    },
    methods: {
        infiniteHandler() {
            //// Hiting REST API END POINT FOR INFINITE POSTS
            setTimeout(() => {
                this.infiniteData.push(...this.getTradieTasks.slice(6, 8));
            }, 1000);
        }
    },
    mounted() {
        this.infiniteData = this.getTradieTasks.slice(0, 6);
    }
};
</script>

<style scoped>
.bt-cont {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.bt-details {
    flex-basis: 60%;
    height: calc(100vh - 70px);
    overflow-y: auto;
    background: var(--cream);
}
.bt-list {
    flex-basis: 38%;
    height: calc(100vh - 70px);
    overflow-y: auto;
}

.task-desc {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
}
.choice-img {
    width: 15rem;
}
.task-desc-2 {
    padding: 1rem 3rem;
}

.task-top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
}
.task-details {
    flex-basis: 65%;
    display: flex;
    flex-direction: column;
}
.task-budget {
    flex-basis: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    outline: 3px solid #ccc;
    padding: 1rem;
}
.task-post-profile {
    display: flex;
    flex-direction: row;
    align-items: center;
}
.profile-img {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    object-fit: cover;
}
.task-o-details {
    width: 100%;
}
.loader {
    padding: 0 !important;
    margin: auto !important;
}
</style>
