<template>
	<nav class="navbar navbar-default">
	  <div class="container-fluid">
	    <div class="navbar-header">
	      <router-link to="/" class="navbar-brand">Куда пойти?</router-link>
	    </div>

	    <div class="collapse navbar-collapse">
	      <ul class="nav navbar-nav">
              <router-link to="stocks" activeClass="active" tag="li"><a>Все заведения</a></router-link>
              <router-link to="add-place" activeClass="active" tag="li"><a>Добавить заведение</a></router-link>
	      </ul>

	    </div><!-- /.navbar-collapse -->
	  </div><!-- /.container-fluid -->
	</nav>
</template>

<script>
	export default {
		computed: {
			funds() {
				return this.$store.getters.funds;
			}
		},
		methods: {
			saveData() {
				const data = {
					items: this.$store.getters.items
				};
				this.$http.put('data.json', data);
			}
		}
	}
</script>