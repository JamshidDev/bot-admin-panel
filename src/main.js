// import './style.css';
import './assets/scss/index.scss';
import 'sweetalert2/dist/sweetalert2.min.css';

import { createApp } from 'vue';

import VueFeather from 'vue-feather';
import VueSweetalert2 from 'vue-sweetalert2';
import VueTheMask from 'vue-the-mask';

import JRButton from '@/components/buttons/JRButton';
import JRIconButton from '@/components/buttons/JRIconButton';
// Custom components
import JRInput from '@/components/Input/JRInput';
import JRMask from '@/components/Input/JRMask';
import JRPassword from '@/components/Input/JRPassword';
import JRModal from '@/components/Modal/JRModal.vue';
import JRNoDate from '@/components/no-data-page/JRNoData.vue';
import JRSkeleton from "@/components/skeleton/JRSkeleton.vue"
import Notifications from '@kyvg/vue3-notification';
import JRAvatar from "@/components/avatar/JRAvatar"

import App from './App.vue';
import JRPagination from './components/pagination/JRPagination.vue';
import router from './router';
import naive from 'naive-ui'
import 'vfonts/FiraCode.css'
const app = createApp(App)



app.component('JR-Input', JRInput);
app.component('JR-Mask', JRMask);
app.component('JR-Password', JRPassword);
app.component('JR-Button', JRButton);
app.component('JR-Icon-Button', JRIconButton);
app.component('JR-Pagination', JRPagination);
app.component('JR-Modal', JRModal);
app.component('JR-No-Date', JRNoDate);
app.component('JR-Skeleton', JRSkeleton);
app.component('JR-Avatar', JRAvatar);


app.component(VueFeather.name, VueFeather);

app.use(router)
app.use(VueTheMask)
app.use(Notifications)
app.use(VueSweetalert2)
app.use(naive)

window.Swal =  app.config.globalProperties.$swal;
window.Notify =  app.config.globalProperties.$notify;
window.$router =  app.config.globalProperties.$router;
window.$route =  app.config.globalProperties.$route;
app.mount('#app')
