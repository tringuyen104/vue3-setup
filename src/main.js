import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import * as bootstrap from 'bootstrap';
import '~/scss/index.scss';
import '~/plugins/FontAwesome.ts';
import i18n from './plugins/i18n';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon);

app.use(router);
app.use(i18n);
app.mount('#app');
