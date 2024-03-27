import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import Vueform from '@vueform/vueform'
import vueformConfig from './../vueform.config'

createApp(App).mount('#app')
App.use(Vueform, vueformConfig)