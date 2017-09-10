<template>
	<div class="center">
		<h1>Не знаете куда пойти?</h1>
		<h3>Наш сервис поможет Вам!</h3>
		<h4>Просто нажните "показать" и система предложит Вам подходящие варианты</h4>
		<hr>
        <router-link
                to="random-stock"
                activeClass="active"
                tag="button"
                class="btn btn-success"
        >Показать
        </router-link>
	</div>
</template>

<script>
	export default {
		computed: {
			funds() {
				return this.$store.getters.funds;
			}
		}
	}
</script>

<style scoped>
	.center {
		text-align: center;
	}
</style>