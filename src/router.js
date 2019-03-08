import Vue from 'vue';
import Router from 'vue-router';

import Home from './components/Home.vue';
import Item from './components/Item.vue';

Vue.use(Router);

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [{path: '/', component: Home}, {path: '/item', component: Item}]
  });
}
