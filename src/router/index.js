import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import InputStock from '../components/Barang/InputStock.vue'
import CekStock from '../components/Barang/CekStock.vue'
import Kasir from '../components/Transaksi/Kasir.vue'
import LihatTransaksi from '../components/Transaksi/LihatTransaksi.vue'
import DetailTransaksi from '../components/Transaksi/DetailTransaksi.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/', name: 'login', component: Login },
    { path: '/input-stock', name: 'inputStock', component: InputStock },
    { path: '/cek-stock', name: 'cekStock', component: CekStock },
    { path: '/kasir', name: 'kasir', component: Kasir },
    {
        path: '/lihat-transaksi',
        name: 'lihatTransaksi',
        component: LihatTransaksi
    },
    {
        path: '/detail-transaksi',
        name: 'detailTransaksi',
        component: DetailTransaksi
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
