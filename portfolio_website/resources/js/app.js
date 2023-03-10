import './bootstrap';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/dist/sweetalert2.css'

window.Swal = Swal
const toast=Swal.mixin({
    toast:true,
    position:top,
    showConfirmButton:false,
    timer:3000,
    timeProgressBar:true,
})
window.toast = toast
import router from './router/index.js'
import {createApp} from 'vue'
import app from './components/app.vue'
createApp(app).use(router).mount("#app")
