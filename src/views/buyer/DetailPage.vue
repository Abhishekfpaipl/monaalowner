<template>
    <div style="padding-bottom: 80px;">
        <nav class="navbar navbar-expand-lg bg-body-tertiary p-2">
            <div class="navbar-nav d-flex flex-row w-100 justify-content-between align-items-center">
                <div class="d-flex align-items-center">
                    <i class="bi bi-arrow-left fs-5" @click="goBack()"></i>
                    <p class="ms-2 mb-0">{{ buyer.name }}</p>
                </div>
                <img :src="buyer.img" class="rounded-circle" data-bs-toggle="offcanvas" data-bs-target="#profile-canvas"
                    aria-controls="profile-canvas" style="height: 30px; height: 30px;">
            </div>
        </nav>
        <div class="offcanvas offcanvas-end" tabindex="-1" id="profile-canvas" aria-labelledby="profile-canvasLabel">
            <div class="offcanvas-header border-bottom">
                <h5 class="offcanvas-title" id="profile-canvasLabel">Profile</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <div class="text-center">
                    <img :src="buyer.img" class="rounded" style="width: 100%; height: 300px; object-fit: cover;">
                </div>
                <table class="table">
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <td>{{ buyer.name }}</td>
                        </tr>
                        <tr>
                            <th>Whatsapp</th>
                            <td>{{ buyer.whatsapp }}</td>
                        </tr>
                        <tr>
                            <th>Contact</th>
                            <td>{{ buyer.contact }}</td>
                        </tr>
                        <tr>
                            <th>Mobile</th>
                            <td>{{ buyer.mobile }}</td>
                        </tr>
                        <tr>
                            <th>Email</th>
                            <td>{{ buyer.email }}</td>
                        </tr>
                        <tr>
                            <th>Description</th>
                            <td>{{ buyer.desc }}</td>
                        </tr>
                        <tr>
                            <th>Business Name</th>
                            <td>{{ buyer.businessName }}</td>
                        </tr>
                        <tr>
                            <th>Address</th>
                            <td>{{ buyer.address }}</td>
                        </tr>
                        <tr>
                            <th>State</th>
                            <td>{{ buyer.state }}</td>
                        </tr>
                        <tr>
                            <th>Pincode</th>
                            <td>{{ buyer.pincode }}</td>
                        </tr>
                        <tr>
                            <th>Gstin</th>
                            <td>{{ buyer.gstin }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="mt-2 px-2">
            <nav>
                <div class="nav nav-tabs align-items-center pt-2 d-flex justify-content-around px-2 w-100"
                    style="font-size: 16px;z-index: 12; height: 63px; font-weight: 500;" id="nav-tab" role="tablist">
                    <router-link class="nav-link" :to="{ name: 'BuyerOverviewPage' }"
                        :class="currentRouteName === 'BuyerOverviewPage' ? 'active' : ''">Overview</router-link>
                    <router-link class="nav-link " :to="{ name: 'BuyerOrdersPage' }"
                        :class="currentRouteName === 'BuyerOrdersPage' ? 'active' : ''">Orders</router-link>
                    <router-link class="nav-link " :to="{ name: 'BuyerBillsPage' }"
                        :class="currentRouteName === 'BuyerBillsPage' ? 'active' : ''">Bills</router-link>
                    <router-link class="nav-link " :to="{ name: 'BuyerChatPage' }"
                        :class="currentRouteName === 'BuyerChatPage' ? 'active' : ''">Chat</router-link>

                </div>
            </nav>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>

export default {
    name: 'BuyerDetailPage',
    data() {
        return {
            title: this.$route.name
        };
    },
    computed: {
        buyer() {
            let buyerId = this.$route.params.buyerId;
            return this.$store.getters.getBuyer(buyerId);
        },
        currentRouteName() {
            return this.$route.name;
        }
    },
    methods: {
        goBack() {
            window.history.back();
        }
    },
    mounted() {
        this.$router.push({ name: 'BuyerOverviewPage', params: { buyerId: this.$route.params.buyerId } })
    }
}
</script>

<style lang="scss" scoped></style>