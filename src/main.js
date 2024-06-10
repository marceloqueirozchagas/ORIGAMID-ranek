import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PaginaCarregando from "@/components/PaginaCarregando.vue";
import store from './store';

const app = createApp(App)

app.config.globalProperties.$filters = {
    numeroPreco(valor) {
        valor = Number(valor);
        if (!isNaN(valor)) {
            return valor.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL"
            });
        } else {
            return "";
        }
    }
}

app.component("PaginaCarregando", PaginaCarregando);

app.use(router)
app.use(store)

app.mount('#app')
