import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import InputStock from '../components/Barang/InputStock.vue'
import CekStock from '../components/Barang/CekStock.vue'
import Kasir from '../components/Transaksi/Kasir.vue'
import LihatTransaksi from '../components/Transaksi/LihatTransaksi.vue'
import DetailTransaksi from '../components/Transaksi/DetailTransaksi.vue'
import InputSupplier from '../components/Supplier/InputSupplier.vue'
import LihatSupplier from '../components/Supplier/LihatSupplier.vue'
import InputPegawai from '../components/Pegawai/InputPegawai.vue'
import LihatPegawai from '../components/Pegawai/LihatPegawai.vue'
import InputJenis from '../components/Jenis/InputJenis.vue'
import LihatJenis from '../components/Jenis/LihatJenis.vue'

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
    },
    { path: '/input-supplier', name: 'inputSupplier', component: InputSupplier },
    { path: '/lihat-supplier', name: 'lihatSupplier', component: LihatSupplier },
    { path: '/input-pegawai', name: 'inputPegawai', component: InputPegawai },
    { path: '/lihat-pegawai', name: 'lihatPegawai', component: LihatPegawai },
    { path: '/input-jenis-barang', name: 'inputJenis', component: InputJenis },
    {
        path: '/lihat-jenis-barang',
        name: 'lihatJenisBarang',
        component: LihatJenis
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
