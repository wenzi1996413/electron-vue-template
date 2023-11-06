import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './comon.css'
import 'vfonts/Lato.css'
import vue3videoPlay from 'vue3-video-play' // 引入组件
import 'vue3-video-play/dist/style.css' // 引入css
import './assets/css/iconfont.css'
const app = createApp(App);

app.use(router).use(vue3videoPlay).mount('#app');
