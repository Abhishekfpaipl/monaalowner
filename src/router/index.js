import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import auths from './auth.js'
const routes = [
  {
    path: "/",
    name: "RootPage",
    component:()=> import('@/views/RootPage.vue'),
  },
  {
    path: "/dashboard",
    name: "Home Page",
    component: HomeView,
  },
  {
    path: "/buyers",
    name: "BuyersPage",
    component: () => import('@/views/buyer/BuyersListPage.vue')
  },
  {
    path: "/buyer-detail/:partyId",
    component: () => import('@/views/buyer/DetailPage.vue'),
    children: [
      {
        path: "overview",
        name: "BuyerOverviewPage",
        component: () => import('@/views/buyer/OverviewPage.vue')
      },
      {
        path: "orders",
        name: "BuyerOrdersPage",
        component: () => import('@/views/buyer/OrdersPage.vue')
      },
      {
        path: "bills",
        name: "BuyerBillsPage",
        component: () => import('@/views/buyer/BillsPage.vue')
      },
      {
        path: "chat",
        name: "BuyerChatPage",
        component: () => import('@/views/buyer/BuyerChat.vue')
      },
    ]
  },
  {
    path: "/suppliers",
    name: "SuppliersPage",
    component: () => import('@/views/supplier/SuppliersListPage.vue')
  },
  {
    path: "/supplier-detail/:partyId",
    component: () => import('@/views/supplier/DetailPage.vue'),
    children: [
      {
        path: "overview",
        name: "OverviewPage",
        component: () => import('@/views/supplier/OverviewPage.vue')
      },
      {
        path: "orders",
        name: "OrdersPage",
        component: () => import('@/views/supplier/OrdersPage.vue')
      },
      {
        path: "bills",
        name: "BillsPage",
        component: () => import('@/views/supplier/BillsPage.vue')
      },
      {
        path: "chat",
        name: "SupplierChatPage",
        component: () => import('@/views/supplier/SupplierChat.vue')
      },
    ]
  },
  {
    path: "/stock",
    name: "Stock Page",
    component: () => import('@/views/stock/StockPage.vue')
  },
  {
    path: "/stock-detail/:stockId",
    name: "Stock Detail Page",
    component: () => import('@/views/stock/StockDetailPage.vue')
  },
  {
    path: "/payment",
    name: "Payment Page",
    component: () => import('@/views/payment/PaymentPage.vue')
  },
  {
    path: '/payment',
    children: [
      {
        path: 'pending',
        name: 'PendingPage',
        component: () => import('@/views/payment/PendingPage.vue')
      },
      {
        path: 'completed',
        name: 'CompletedPage',
        component: () => import('@/views/payment/CompletedPage.vue')
      },
    ]
  },
  {
    path: '/orders',
    children: [
      {
        path: 'pending',
        name: 'OrderPendingPage',
        component: () => import('@/views/order/PendingPage.vue')
      },
      {
        path: 'recent',
        name: 'OrderRecentPage',
        component: () => import('@/views/order/RecentPage.vue')
      },
    ]
  },
  {
    path: '/parties',
    name: 'PartyPage',
    component: () => import('@/views/parties/PartyPage.vue')
  },
  {
    path: '/party-suppliers',
    name: 'SuppliersPage',
    component: () => import('@/views/parties/SuppliersPage.vue')
  },
  {
    path: "/update-page",
    name: "update-page",
    component: () => import('@/views/notification/UpdatePage.vue')
  },
  {
    path: "/term-&-condition",
    name: "TOSPage",
    component: () => import('@/views/static/TOSPage.vue')
  },
  {
    path: "/privacy-policy",
    name: "PrivacyPolicy",
    component: () => import('@/views/static/PrivacyPolicy.vue')
  },
  ...auths,
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
