import { createHead } from '@unhead/vue';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import { createApp } from 'vue';
import App from './main.vue';

dayjs.extend(utc);
dayjs.extend(timezone);
const app = createApp(App);
const head = createHead();
app.use(head);
app.mount('#app');
