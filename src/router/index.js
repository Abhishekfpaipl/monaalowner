import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "Home Page",
    component: HomeView,
  },
  {
    path: "/buyers",
    name: "Buyers Page",
    component: () => import('@/views/buyer/BuyersListPage.vue')
  },
  {
    path: "/buyer-detail/:buyerId",
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
    path: "/supplier-detail/:supplierId",
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

  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
