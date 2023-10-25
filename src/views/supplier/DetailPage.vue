<template>
    <div style="padding-bottom: 80px;">
        <nav class="navbar navbar-expand-lg bg-body-tertiary p-2">
            <div class="navbar-nav d-flex flex-row w-100 justify-content-between align-items-center">
                <div class="d-flex align-items-center">
                    <router-link to="/suppliers" class="text-dark">
                        <i class="bi bi-arrow-left fs-5"></i>
                    </router-link>
                    <p class="ms-2 mb-0">{{ supplier.name }}</p>
                </div>
                <img :src="supplier.img" class="rounded-circle" data-bs-toggle="offcanvas" data-bs-target="#profile-canvas"
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
                    <img :src="supplier.img" class="rounded" style="width: 100%; height: 300px; object-fit: cover;">
                </div>
                <table class="table mt-2">
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <td>{{ supplier.name }}</td>
                        </tr>
                        <tr>
                            <th>Whatsapp</th>
                            <td>{{ supplier.whatsapp }}</td>
                        </tr>
                        <tr>
                            <th>Contact</th>
                            <td>{{ supplier.contact }}</td>
                        </tr>
                        <tr>
                            <th>Mobile</th>
                            <td>{{ supplier.mobile }}</td>
                        </tr>
                        <tr>
                            <th>Email</th>
                            <td>{{ supplier.email }}</td>
                        </tr>
                        <tr>
                            <th>Description</th>
                            <td>{{ supplier.desc }}</td>
                        </tr>
                        <tr>
                            <th>Business Name</th>
                            <td>{{ supplier.businessName }}</td>
                        </tr>
                        <tr>
                            <th>Address</th>
                            <td>{{ supplier.address }}</td>
                        </tr>
                        <tr>
                            <th>State</th>
                            <td>{{ supplier.state }}</td>
                        </tr>
                        <tr>
                            <th>Pincode</th>
                            <td>{{ supplier.pincode }}</td>
                        </tr>
                        <tr>
                            <th>Gstin</th>
                            <td>{{ supplier.gstin }}</td>
                        </tr>
                    </tbody>
                </table> 
            </div>
        </div>
        <div class="mt-2 px-2">
            <nav>
                <div class="nav nav-tabs align-items-center pt-2 d-flex justify-content-around px-2 w-100"
                    style="font-size: 16px;z-index: 12; height: 63px; font-weight: 500;" id="nav-tab" role="tablist">
                    <router-link class="nav-link" :to="{ name: 'OverviewPage' }"
                        :class="currentRouteName === 'OverviewPage' ? 'active' : ''">Overview</router-link>
                    <router-link class="nav-link " :to="{ name: 'OrdersPage' }"
                        :class="currentRouteName === 'OrdersPage' ? 'active' : ''">Orders</router-link>
                    <router-link class="nav-link " :to="{ name: 'BillsPage' }"
                        :class="currentRouteName === 'BillsPage' ? 'active' : ''">Bills</router-link>
                    <router-link class="nav-link " :to="{ name: 'SupplierChatPage' }"
                        :class="currentRouteName === 'SupplierChatPage' ? 'active' : ''">Chat</router-link>
                </div>
            </nav>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SupplierDetailPage',
    computed: {
        supplier() {
            let supplierId = this.$route.params.supplierId;
            return this.$store.getters.getSupplier(supplierId);
        },
        currentRouteName() {
            return this.$route.name;
        }
    },
    mounted() {
        this.$router.push({ name: 'OverviewPage', params: { supplierId: this.$route.params.supplierId } });
    },
}
</script>

<style lang="scss" scoped></style>