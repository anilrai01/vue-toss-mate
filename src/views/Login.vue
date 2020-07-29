<template>
    <div id="login ">
        <mdb-container class="py-3">
            <!-- Default form login -->
            <h3 class="form-label text-center mt-3">
                Login now and get your work done !
            </h3>
            <div class="login-highlights">
                <div class="form-tab">
                    <div
                        class="cus-tab"
                        :class="{ activeTab: activeCustomer }"
                        @click="activeToggle('customer')"
                    >
                        <span>Customer</span>
                    </div>
                    <div
                        class="trad-tab"
                        :class="{ activeTab: activeTradie }"
                        @click="activeToggle('tradie')"
                    >
                        <span>Tradie</span>
                    </div>
                </div>
                <form class="login-form" v-if="activeCustomer">
                    <!-- <div class="avatar"></div> -->
                    <p class="h4 text-center mb-4 form-label">
                        Lets get your job done now
                    </p>
                    <div class="form-group">
                        <label for="email" class="grey-text">Your email</label>
                        <input
                            type="email"
                            id="email"
                            class="form-control"
                            name="email"
                            v-model="email"
                            autocomplete="email"
                        />
                    </div>
                    <div class="form-group">
                        <label for="password" class="grey-text"
                            >Your password</label
                        >
                        <input
                            type="password"
                            id="password"
                            class="form-control"
                            name="password"
                            v-model="password"
                            autocomplete="current-password"
                        />
                    </div>

                    <div class="text-center mt-4">
                        <router-link to="/profile">
                            <button class="btn cus-btn" type="submit">
                                Login
                            </button>
                        </router-link>
                    </div>

                    <!-- Default form login -->
                    <div class="rest-text mt-5 text-center">
                        <h6>Don't have account yet? No Worries !</h6>
                        <router-link to="/customer-register">
                            <h6>Register Now</h6>
                        </router-link>
                    </div>
                </form>
                <!-- Login 2 -->
                <form class="login-form" v-if="activeTradie">
                    <!-- <div class="avatar"></div> -->
                    <p class="h4 text-center mb-4 form-label">
                        Lets find some job for you
                    </p>
                    <div class="form-group">
                        <label for="email" class="grey-text">Your email</label>
                        <input
                            type="email"
                            id="email"
                            class="form-control"
                            name="email"
                            v-model="email"
                            autocomplete="email"
                        />
                    </div>
                    <div class="form-group">
                        <label for="password" class="grey-text"
                            >Your password</label
                        >
                        <input
                            type="password"
                            id="password"
                            class="form-control"
                            name="password"
                            v-model="password"
                            autocomplete="current-password"
                        />
                    </div>

                    <div class="text-center mt-4">
                        <router-link to="/profile/tradie">
                            <button class="btn cus-btn" type="submit">
                                Login
                            </button>
                        </router-link>
                    </div>

                    <!-- Default form login -->
                    <div class="rest-text mt-5 text-center">
                        <h6>Don't have account yet? No Worries !</h6>
                        <router-link
                            :to="{
                                name: 'BusinessRegister',
                                hash: '#registerSec'
                            }"
                        >
                            <h6>Register Now</h6>
                        </router-link>
                    </div>
                </form>
            </div>
        </mdb-container>
        <Footer />
    </div>
</template>

<script>
import { mdbContainer } from "mdbvue";
import Footer from "../components/Footer";
export default {
    name: "Login",
    components: {
        mdbContainer,
        Footer
    },
    data() {
        return {
            email: "",
            password: "",
            role: "tradie",

            activeCustomer: true,
            activeTradie: false,
            activeTab: "customer"
        };
    },
    computed: {},
    methods: {
        activeToggle(tab) {
            if (tab == "tradie") {
                this.activeTradie = true;
                this.activeCustomer = false;
            } else if (tab == "customer") {
                this.activeTradie = false;
                this.activeCustomer = true;
            }
        }
    }
};
</script>

<style scoped>
.login-highlights {
    width: 500px;
    margin: 3rem auto 3rem auto;
}
.form-tab {
    width: 100%;
    margin-bottom: 1rem;
    background: var(--cream);
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.form-tab .cus-tab,
.form-tab .trad-tab {
    flex-basis: 50%;
    height: 100%;
    padding: 1rem;
    display: flex;
    justify-content: center;
    /* font-weight: bold; */
    cursor: pointer;
}
.login-form {
    position: relative;
    /* background: var(--lightBg); */
    background: var(--cream);
    padding: 2rem 2.5rem;
    width: 100%;
}
.rest-text {
    /* width: 25vw; */
    font-size: 1.2rem;
    margin: 2rem auto;
}
.form-label {
    font-weight: bold;
    color: var(--lblack);
    margin-bottom: 2rem !important;
}
.avatar {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    box-shadow: 0px 6px 9px rgba(0, 0, 0, 0.3);
    background: var(--lightBg);
}
.activeTab {
    border-bottom: 2px solid var(--brand);
}
</style>
