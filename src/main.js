//importar o arquivo de rotas
import router from './router/router'

import { createApp } from 'vue'
import App from './App.vue'

//cria a instância da aplicação
const app = createApp(App)

//usa o router na instância
app.use(router)

//monta a aplicação
app.mount('#app')
