<template>
	<div>
		<app-stock v-for="item in items" :item="item"></app-stock>
	</div>
</template>

<script>
	import Stock from './Stock.vue';

	export default {
		components: {
			appStock: Stock
		},
		computed: {
			items() {
				return this.$store.getters.items;
			}
		}
	}
</script>