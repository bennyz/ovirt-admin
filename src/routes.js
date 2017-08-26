import Datacenters from './components/datacenters/Datacenters.vue'
import Home from './components/Home.vue'

export const routes = [
    { path: '/', component: Home },
    { path: '/datacenters', component: Datacenters }
];