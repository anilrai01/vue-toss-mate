<template>
    <div id="login ">
        <mdb-container class="py-3">
            <!-- Default form login -->
            <h4 class="form-label text-center mt-3">
                You are few steps away from start hiring your employee !
            </h4>
            <div class="login-highlights">
                <form class="login-form">
                    <!-- <div class="avatar"></div> -->
                    <!-- <h6 class="h4 text-center mb-4 text-grey">We are soo happy to see you here</h6> -->
                    <div class="form-group">
                        <label for="fname" class="grey-text">First Name</label>
                        <input
                            type="text"
                            id="fname"
                            class="form-control"
                            v-model="fName"
                            required
                            autocomplete="off"
                        />
                    </div>
                    <div class="form-group">
                        <label for="lname" class="grey-text">Last Name</label>
                        <input
                            type="text"
                            id="lname"
                            class="form-control"
                            v-model="lName"
                            required
                            autocomplete="off"
                        />
                    </div>
                    <div class="form-group">
                        <label for="email" class="grey-text">Email</label>
                        <input
                            type="email"
                            id="email"
                            class="form-control"
                            v-model="email"
                            required
                            autocomplete="off"
                        />
                    </div>
                    <div class="form-group">
                        <label for="password" class="grey-text">Password</label>
                        <input
                            type="password"
                            id="password"
                            class="form-control"
                            v-model="password"
                            required
                            autocomplete="off"
                        />
                    </div>
                    <div class="form-group">
                        <label for="cpassword" class="grey-text"
                            >Confirm Password</label
                        >
                        <input
                            type="cpassword"
                            id="cpassword"
                            class="form-control"
                            v-model="cpassword"
                            required
                            autocomplete="off"
                        />
                    </div>
                    <div class="form-check">
                        <input
                            class="form-check-input"
                            type="checkbox"
                            value
                            id="defaultCheck1"
                            autocomplete="off"
                        />
                        <label class="form-check-label" for="defaultCheck1"
                            >I accept the Terms of Use</label
                        >
                    </div>

                    <div class="reg-btn text-center">
                        <router-link to="/profile">
                            <button class="btn cus-btn w-100" type="submit">
                                Register
                            </button>
                        </router-link>
                    </div>

                    <!-- Default form login -->
                    <div class="rest-text mt-5 text-center">
                        <h6>Already have an account ?</h6>
                        <router-link to="/login">
                            <h6>Sign in</h6>
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
            fName: "",
            lName: "",
            email: "",
            password: "",
            cpassword: ""
        };
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
.reg-btn {
    margin: 3rem 0 2rem 0;
}
</style>
