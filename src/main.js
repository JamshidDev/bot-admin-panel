import './style.css';
import './assets/scss/index.scss';

import { createApp } from 'vue';

import VueFeather from 'vue-feather';
import VueTheMask from 'vue-the-mask';

import JRButton from '@/components/buttons/JRButton';
import JRIconButton from '@/components/buttons/JRIconButton';
// Custom components
import JRInput from '@/components/Input/JRInput';
import JRMask from '@/components/Input/JRMask';
import JRPassword from '@/components/Input/JRPassword';
import Notifications from '@kyvg/vue3-notification';

import App from './App.vue';
import router from './router';

const app = createApp(App)



app.component('JR-Input', JRInput);
app.component('JR-Mask', JRMask);
app.component('JR-Password', JRPassword);
app.component('JR-Button', JRButton);
app.component('JR-Icon-Button', JRIconButton);


app.component(VueFeather.name, VueFeather);

app.use(router)
app.use(VueTheMask)
app.use(Notifications)
app.mount('#app')
