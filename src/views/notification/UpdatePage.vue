<template>
    <div class="pb-5 mb-5">
        <div class="">
            <div v-for="(noti, index) in notifications" :key="index" class="border-bottom my-2">
                <div class="d-flex align-items-center px-2 w-100">
                    <div class="">
                        <div class="rounded-circle d-flex justify-content-center align-items-center bg-primary"
                            style="  width: 50px; height: 50px; object-fit:cover; object-position: top;">
                            <i style="font-size: 24px;"
                                class="bi bi-chat-text-fill d-flex justify-content-center align-items-center text-white"></i>
                        </div>

                    </div>
                    <div class="ms-2">
                        <div class="d-flex justify-content-between">
                            <b class="ss">{{ noti.title }}</b>
                            <i class="bi bi-x"></i>
                        </div>
                        <p class="mb-0 vv">{{ noti.description }}</p>
                        <p class="mt-1 text-end text-muted mb-0" style="font-size: 10px;">{{ noti.date }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            notifications: [
                {
                    type: 'payment',
                    title: 'Order payment is still pending.',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptates at facere, deleniti modi velit corporis exercitationem ipsum eius cupiditate.',
                    date: '12 June, 12:09 AM'
                },
                {
                    type: 'payment',
                    title: 'Order payment is confirmed.',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptates at facere, deleniti modi velit corporis exercitationem ipsum eius cupiditate.',
                    date: '12 June, 12:09 AM'
                },
                {
                    type: 'payment',
                    title: 'Order payment is cancelled.',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptates at facere, deleniti modi velit corporis exercitationem ipsum eius cupiditate.',
                    date: '12 June, 12:09 AM'
                },
                {
                    type: 'order',
                    title: 'Your order has been placed.',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptates at facere, deleniti modi velit corporis exercitationem ipsum eius cupiditate.',
                    date: '12 June, 12:09 AM'
                },
                {
                    type: 'order',
                    title: 'Your order has been confirmed.',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptates at facere, deleniti modi velit corporis exercitationem ipsum eius cupiditate.',
                    date: '12 June, 12:09 AM'
                },
                {
                    type: 'order',
                    title: 'Your order has been cancelled.',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptates at facere, deleniti modi velit corporis exercitationem ipsum eius cupiditate.',
                    date: '12 June, 12:09 AM'
                },
                {
                    type: 'delivery',
                    title: 'Your oder has been dispatched.',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptates at facere, deleniti modi velit corporis exercitationem ipsum eius cupiditate.',
                    date: '12 June, 12:09 AM'
                },
                {
                    type: 'delivery',
                    title: 'Your order has been delivered.',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptates at facere, deleniti modi velit corporis exercitationem ipsum eius cupiditate.',
                    date: '12 June, 12:09 AM'
                },
                {
                    type: 'delivery',
                    title: 'Your order is delayed.',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptates at facere, deleniti modi velit corporis exercitationem ipsum eius cupiditate.',
                    date: '12 June, 12:09 AM'
                },


            ]
        }
    },
}
</script>

<style lang="scss" scoped>
.vv {
    font-size: 13px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;

}

.ss {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;

}
</style>
