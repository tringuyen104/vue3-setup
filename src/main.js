import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import * as bootstrap from 'bootstrap';
import '~/scss/index.scss';
import '~/plugins/FontAwesome.ts';
import i18n from './plugins/i18n';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import SubTitle from './components/common/SubTitle.vue';
import HeaderTitle from './components/common/HeaderTitle.vue';

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);
app.component('sub-title', SubTitle);
app.component('content-header-title', HeaderTitle);

app.use(router);
app.use(i18n);
app.mount('#app');
