import Vue from 'vue';
import VueRouter from 'vue-router';

import AboutUs from '@/components/AboutUs';
import Index from '@/components/Index';

Vue.use(VueRouter);

const routes = [
	{
		path:'/',
		redirect:'/index'
	},
	{
		path:'/index',
		component:Index,
	},
	{
        path:'/aboutus',
        component:AboutUs
	}
]

const router = new VueRouter({
	routes
})

export default router