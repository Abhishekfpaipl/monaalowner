<template>
    <div class="px-4 pb-5 mb-5" style="padding-top: 20px;">
        <div class="">
            <div class="d-flex justify-content-center">
                <img :src="`${publicPath}${logo}`" width="150">
            </div>
            <div class="d-flex justify-content-center">
                <p class="mt-2 m-0 fw-bold icon">Monaal Creation</p>

            </div>

            <div class="text-center mt-4">
                <p class="fs-5">Login Your Account </p>
            </div>

            <div class="w-100 p-2 form-floating container">
                <input type="email" class="form-control" id="floatingInput" placeholder="Email" v-model="Email">
                <label for="floatingInput" class="text-muted">Enter your Email</label>
            </div>

            <div class="w-100 p-2 form-floating container">
                <input type="password" class="form-control" id="floatingInput" placeholder="Password" v-model="Password">
                <label for="floatingInput" class="text-muted">Password</label>
            </div>

            <div class="p-2">
                <button class="btn btn-light text-dark py-2 w-100 fs-5"
                    style="padding: 10px 12px !important;">Submit</button>
            </div>

            <RouterLink to="/forgot-password-page" style="text-decoration: none;">
                <div class="text-end mt-1">
                    Forgot your password?
                </div>
            </RouterLink>
            <div class="text-center container my-3">
                <p>By proceeding, you agree to <RouterLink to="/term-&-condition">Terms & Conditions</RouterLink> & <RouterLink to="/privacy-policy">
                        Privacy policy</RouterLink>
                </p>
            </div>
            <div class="d-flex justify-content-center mt-4 p-2">
                <router-link to="/registration-page" class="w-100 rounded"
                    style="box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;">
                    <button class="btn w-100 fs-5 text-white"
                        style="background: rgb(38,130,193);
                               background: linear-gradient(113deg, rgba(38,130,193,1) 31%, rgba(36,81,159,1) 97%);padding: 14px 12px ;">
                        Click here for Register
                    </button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>

import { RouterLink } from 'vue-router';
export default {
    components: { RouterLink },
    data() {
        return {
            logo: "img/logo.png",
            publicPath: process.env.BASE_URL,
            phoneNumber: "",
            Email: "",
            Password: "",
            disableButton: true,
            design: 1,
        };
    },
    methods: {
        checkPhoneNumber() {
            const number = /^[0-9]{10}$/;
            if (number.test(this.phoneNumber)) {
                this.disableButton = false;
            }
            else {
                this.disableButton = true;
            }
        },
        goBack() {
            window.history.back();
        },
        getData() {
            console.warn("values :  ", this.Email);
            alert("OTP has been sent to Your Email");
        },
        btnChange() {
            switch (this.design) {
                case 1:
                    this.design = 2;
                    break;
                case 2:
                    this.design = 1;
                    break;
            }
        }
    },

}
</script>

<style scoped>
.icon {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 2rem;
    background: -webkit-linear-gradient(#273990, #24aae3);
    -webkit-text-fill-color: transparent;
    background-clip: text;
}
</style>