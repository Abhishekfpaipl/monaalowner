<template>
  <TopNav v-if="!hide" />
  <router-view />
  <BottomNav v-if="!bottomHide" style="position: fixed;bottom: 0px; width: 100%;" />
</template>
<script>
import BottomNav from './components/navbar/BottomNav.vue'
import TopNav from './components/navbar/TopNav.vue'
export default {
  name: 'App',
  components: {
    BottomNav,
    TopNav
  },
  computed: {
    hide() {
      const hiddenPages = ['Buyer Detail Page', 'Detail Page', 'Stock Detail Page', 'Bill Detail Page', 'OverviewPage', 'OrdersPage', 'BillsPage', 'BuyerOverviewPage', 'BuyerOrdersPage', 'BuyerBillsPage', 'BuyerChatPage', 'SupplierChatPage', 'RegistrationPage', 'LoginPage', 'ForgotPasswordPage','EmailVerificationPage','RootPage']
      return hiddenPages.includes(this.$route.name)
    },
    bottomHide() {
      const hiddenPages = ['RegistrationPage', 'LoginPage', 'ForgotPasswordPage','EmailVerificationPage','RootPage']
      return hiddenPages.includes(this.$route.name)
    }
  }
}
</script>
 