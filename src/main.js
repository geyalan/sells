// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import goods from './components/goods/goods.vue';
import ratings from './components/ratings/ratings.vue';
import seller from './components/seller/seller.vue';

// 引入自定义的css样式
import './common/stylus/index.styl';

Vue.use(VueRouter);
Vue.use(VueResource);

const routes = [
  { path: '/goods', component: goods },
  { path: '/ratings', component: ratings },
  { path: '/seller', component: seller }
];

const router = new VueRouter({
  routes, // （缩写）相当于 routes: routes
  linkActiveClass: 'active'
});

// 页面加载自动导航到goods页面
router.push('/goods');

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
