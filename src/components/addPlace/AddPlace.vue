<template>
	<form class="col-sm-12 col-md-6 col-md-offset-3">
		<div class="form-group">
			<label for="place-name">Название заведения:</label>
			<input
					type="text"
					class="form-control"
					id="place-name"
					v-model="name">
		</div>
		<div class="form-group">
			<label for="place-address">Адрес:</label>
			<input
					type="text"
					class="form-control"
					id="place-address"
					v-model="address">
		</div>
		<div class="form-group">
			<label for="place-phone">Телефон:</label>
			<input
					type="text"
					class="form-control"
					id="place-phone"
					v-model="phone">
		</div>
		<div class="form-group">
			<label for="place-img">URL картинки:</label>
			<input
					type="text"
					class="form-control"
					id="place-img"
					v-model="img">
		</div>
		<hr>
		<button
				type="submit"
				class="btn btn-default"
                @click.prevent="addNewItem"
		>Отправить</button>
	</form>
</template>

<script>
    import {mapActions} from 'vuex';

	export default {
	    data () {
	        return {
	            name: '',
				address: '',
				phone: '',
				img: '',
                submitted: false
			}
		},
		methods: {
            ...mapActions({
                addItem: 'addItem',
            }),
            addNewItem() {
                if(this.submitted) {
                    return
                }
                if(!this.name || !this.img || !this.phone || !this.address) {
                    alert("Заполните все поля");
                    return
                }
                this.submitted = true;
                const newItem = {
                    name: this.name,
                    address: this.address,
                    phone: this.phone,
                    img: this.img
                };
                this.addItem(newItem);
                this.saveNewItem();
            },
            saveNewItem() {
                const data = this.$store.getters.items;
                this.$http.put('data.json', data).then(response => {
                    this.successSave()
                }, response => {
                    this.errorSave()
                });
            },
            successSave() {
                alert("Данные успешно добавлены.");
                this.name = '';
                this.address = '';
                this.phone = '';
                this.img = '';
                this.submitted = false;
            },
            errorSave() {
                alert("Произошла ошибка, попробуйте повторить операцию позже.");
                this.submitted = false;
            }
        }
	}
</script>