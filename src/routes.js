import Home from './components/Home.vue';
import AddPlace from './components/addPlace/AddPlace.vue';
import Stocks from './components/stocks/Stocks.vue';
import RandomStock from './components/stocks/RandomStock.vue';

export const routes = [
	{ path: '/', component: Home },
	{ path: '/add-place', component: AddPlace},
	{ path: '/stocks', component: Stocks},
    { path: '/random-stock', component: RandomStock}
]