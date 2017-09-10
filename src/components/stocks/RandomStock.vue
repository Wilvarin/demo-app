<template>
	<div>
        <button
                type="submit"
                class="btn btn-success"
                @click.prevent="randomizePlace"
        >Следующий вариант</button>
		<app-stock :item="item"></app-stock>
	</div>
</template>

<script>
    import {mapActions} from 'vuex';
	import Stock from './Stock.vue';

	export default {
		components: {
			appStock: Stock
		},
		computed: {
			item() {
				return this.$store.getters.rndItem;
			}
		},
        methods: {
            ...mapActions({
                randomizeItem: 'randomizeItem',
            }),
            randomizePlace() {
                this.randomizeItem();
            }
        },
        created() {
            this.randomizePlace();
        }
	}
</script>