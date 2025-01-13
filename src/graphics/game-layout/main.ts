import { createHead } from '@unhead/vue';
import { createApp } from 'vue';
import { createMemoryHistory, createRouter } from 'vue-router';
import L_4x3_1p from './layouts/4x3-1p.vue';
import App from './main.vue';

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    { name: '4:3 1 Player', path: '/4x3-1p', component: L_4x3_1p },
    { path: '/:pathMatch(.*)*', redirect: '/4x3-1p' },
  ],
});

const app = createApp(App);
const head = createHead();
app.use(head);
app.use(router);
app.mount('#app');
