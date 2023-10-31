<template>
    <div style="padding-bottom: 80px;">
        <nav class="navbar navbar-expand-lg bg-body-tertiary p-2 px-3 border-bottom d-flex ">
            <div class="navbar-nav d-flex flex-row justify-content-start align-items-center" data-bs-toggle="offcanvas"
                data-bs-target="#profile-canvas" aria-controls="profile-canvas">
                <router-link to="/parties" class="text-dark">
                    <i class="bi bi-arrow-left-short fs-1"></i>
                </router-link>
                <img :src="party.img" class="ms-2 rounded-circle" style="height: 35px; width: 35px;object-fit: fill;">
                <p class="ms-2 mb-0 fw-bold truncate">{{ party.name }} adasdas</p>
            </div>
            <div class="d-flex justify-content-end">
                <div class="mx-1" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExampleOne"
                    aria-controls="offcanvasExampleOne">
                    <i class="bi bi-arrow-down-up fs-3"></i>
                </div>
                <div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasExampleOne"
                    aria-labelledby="offcanvasExampleLabel" style="height: 50vh;">
                    <div class="offcanvas-header border-bottom">
                        <h5 class="offcanvas-title" id="offcanvasExampleLabel">Sort</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <div>
                            <div class="w-100">
                                <div class="d-flex flex-column" data-bs-dismiss="offcanvas">
                                    <div class="d-flex justify-content-between" v-for="(paragraph, index) in paragraphs"
                                        :key="index">
                                        <p :style="{ color: paragraphColor(paragraph) }"
                                            @click="changeColorAndCheck(paragraph)">
                                            {{ paragraph.text }}
                                        </p>
                                        <p v-if="paragraph.selected" class="tick-mark"><i class="bi bi-check2"></i></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <i class="px-3 bi bi-search fs-3" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSearch"
                    aria-controls="offcanvasSearch"></i>
                <div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasSearch"
                    aria-labelledby="offcanvasSearchLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasSearchLabel">Offcanvas</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <div class="form-outline d-flex" style="border-radius: 0% !important;">
                            <input type="search" id="form1" class="form-control" placeholder="Search"
                                style="border-top-right-radius: 0px !important; border-bottom-right-radius: 0px; " />
                            <button type="button" class="btn btn-primary"
                                style="border-top-left-radius: 0% !important; border-bottom-left-radius: 0%;">
                                <i class="bi bi-search"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <div class="offcanvas offcanvas-end" tabindex="-1" id="profile-canvas" aria-labelledby="profile-canvasLabel">
            <div class="offcanvas-header border-bottom">
                <h5 class="offcanvas-title" id="profile-canvasLabel">Profile</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <div class="text-center">
                    <img :src="party.img" class="rounded" style="width: 100%; height: 300px; object-fit: cover;">
                </div>
                <table class="table mt-2">
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <td>{{ party.name }}</td>
                        </tr>
                        <tr>
                            <th>Whatsapp</th>
                            <td>{{ party.whatsapp }}</td>
                        </tr>
                        <tr>
                            <th>Contact</th>
                            <td>{{ party.contact }}</td>
                        </tr>
                        <tr>
                            <th>Mobile</th>
                            <td>{{ party.mobile }}</td>
                        </tr>
                        <tr>
                            <th>Email</th>
                            <td>{{ party.email }}</td>
                        </tr>
                        <tr>
                            <th>Description</th>
                            <td>{{ party.desc }}</td>
                        </tr>
                        <tr>
                            <th>Business Name</th>
                            <td>{{ party.businessName }}</td>
                        </tr>
                        <tr>
                            <th>Address</th>
                            <td>{{ party.address }}</td>
                        </tr>
                        <tr>
                            <th>State</th>
                            <td>{{ party.state }}</td>
                        </tr>
                        <tr>
                            <th>Pincode</th>
                            <td>{{ party.pincode }}</td>
                        </tr>
                        <tr>
                            <th>Gstin</th>
                            <td>{{ party.gstin }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="mt-2 px-2">
            <nav>
                <div class="nav nav-tabs align-items-center pt-2 d-flex justify-content-around px-2 w-100"
                    style="font-size: 16px;z-index: 12; height: 63px; font-weight: 500;" id="nav-tab" role="tablist">
                    <router-link class="nav-link " :to="{ name: 'SupplierChatPage' }"
                        :class="currentRouteName === 'SupplierChatPage' ? 'active' : ''">Chat</router-link>
                    <router-link class="nav-link " :to="{ name: 'OrdersPage' }"
                        :class="currentRouteName === 'OrdersPage' ? 'active' : ''">Orders</router-link>
                    <router-link class="nav-link " :to="{ name: 'BillsPage' }"
                        :class="currentRouteName === 'BillsPage' ? 'active' : ''">Bills</router-link>
                    <router-link class="nav-link" :to="{ name: 'OverviewPage' }"
                        :class="currentRouteName === 'OverviewPage' ? 'active' : ''">Overview</router-link>
                </div>
            </nav>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SupplierDetailPage',
    data() {
        return {
            paragraphs: [
                { text: 'By Latest Date', selected: false },
                { text: 'By Oldest Date', selected: false },
                { text: 'By Lowest Amount', selected: false },
                { text: 'By Highest Amount', selected: false },
                { text: 'By Status Ascending', selected: false },
                { text: 'By Status Descending', selected: false },
            ],
        };
    },
    computed: {
        party() {
            let partyId = this.$route.params.partyId;
            return this.$store.getters.getParty(partyId);
        },
        currentRouteName() {
            return this.$route.name;
        }
    },
    methods: {

        paragraphColor(paragraph) {
            return paragraph.selected ? 'black' : 'gray';
        },
        changeColorAndCheck(clickedParagraph) {
            for (const paragraph of this.paragraphs) {
                if (paragraph === clickedParagraph) {
                    paragraph.selected = true;
                } else {
                    paragraph.selected = false;
                }
            }
        },
    },
    // mounted() {
    //     this.$router.push({ name: 'OverviewPage', params: { partyId: this.$route.params.partyId } });
    // },
}
</script>

<style lang="scss" scoped>
.single-line {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}

.truncate {
    width: 150px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>