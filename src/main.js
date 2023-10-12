import './style.css';
import './assets/scss/index.scss';

import 'sweetalert2/dist/sweetalert2.min.css';

import { createApp } from 'vue';

import VueFeather from 'vue-feather';
import VueTheMask from 'vue-the-mask';
import VueSweetalert2 from 'vue-sweetalert2';

import JRButton from '@/components/buttons/JRButton';
import JRIconButton from '@/components/buttons/JRIconButton';
// Custom components
import JRInput from '@/components/Input/JRInput';
import JRMask from '@/components/Input/JRMask';
import JRPassword from '@/components/Input/JRPassword';
import JRPagination from "./components/pagination/JRPagination.vue"
import JRModal from "@/components/modal/JRModal.vue"
import JRNoDate from "@/components/no-data-page/JRNoData.vue"
import Notifications from '@kyvg/vue3-notification';

import App from './App.vue';
import router from './router';

const app = createApp(App)



app.component('JR-Input', JRInput);
app.component('JR-Mask', JRMask);
app.component('JR-Password', JRPassword);
app.component('JR-Button', JRButton);
app.component('JR-Icon-Button', JRIconButton);
app.component('JR-Pagination', JRPagination);
app.component('JR-Modal', JRModal);
app.component('JR-No-Date', JRNoDate);


app.component(VueFeather.name, VueFeather);

app.use(router)
app.use(VueTheMask)
app.use(Notifications)
app.use(VueSweetalert2)
app.mount('#app')
