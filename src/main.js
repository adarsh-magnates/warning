import Vue from 'vue';
import App from './App.vue';
import Router from 'vue-router';
import Profile from '@/components/Profile';
import Form from '@/components/Form';
import List from '@/components/List';
import { BootstrapVue } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Vuelidate from 'vuelidate';



Vue.use(Vuelidate);
Vue.use(Router);
Vue.use(BootstrapVue);

let router = new Router({
    routes: [{
            path: '/profile',
            name: 'Profile',
            component: Profile
        },
        {
            path: '/form',
            name: 'Form',
            component: Form
        },
        {
            path: '/list',
            name: 'List',
            component: List
        }
    ]
})
Vue.config.productionTip = false

new Vue({
    // el: '#app',
    router,
    // template: '<App/>',
    render: h => h(App),
}).$mount('#app')