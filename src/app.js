
var layout = require('./scripts/tpls/layout.html');
var common = require('./scripts/utils/common.js');
common.render(layout);

require('./styles/usage/app.scss');

//var common=require('./scripts/utils/common.js');
//var html=require('./scripts/tpls/index.html');
//common.render(html);
//require('./scripts/views/index.js');


//components 单文件组件实现路由
import index from "./scripts/components/index.vue";
import home from "./scripts/components/home.vue";
import search from "./scripts/components/search.vue";
import detail from "./scripts/components/detail.vue";
import circle from "./scripts/components/circle.vue";
import Cart from "./scripts/components/Cart.vue";
import my from "./scripts/components/my.vue";
import list from "./scripts/components/list.vue";
import my_login from "./scripts/components/my_login.vue";
///import header from "./scripts/components/header.vue";//=========

//vue-router2
// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是 通过 Vue.extend() 创建的组件构造器，或者，只是一个组件配置对象。我们晚点再讨论嵌套路由。
const routes = [{
   	path: '/',
    component: index,
    children: [{
        path: '/',
        component: home
    },{
        path: '/search',
        component: search
    },{
        path: '/circle',
        component: circle
    },{
        path: '/Cart',
        component: Cart
    },{
        path: '/my',
        component: my
    }
  	]
},{
    	path:'/detail/:id',
    	component:detail
},{
    	path:'/list/:id',
    	component:list
},{
        path:'/my_login/:id',
         component:my_login 
        }
];
// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
    routes // （缩写）相当于 routes: routes
});
// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，从而让整个应用都有路由功能
const app = new Vue({
    router
}).$mount('#app');