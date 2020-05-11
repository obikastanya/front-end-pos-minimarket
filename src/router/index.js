import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import InputStock from '../components/Barang/InputStock.vue'
import CekStock from '../components/Barang/CekStock.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/', name: 'login', component: Login },
    { path: '/input-stock', name: 'inputStock', component: InputStock },
    { path: '/cek-stock', name: 'cekStock', component: CekStock }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
