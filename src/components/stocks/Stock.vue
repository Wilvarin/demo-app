<template>
	<div class="col-sm-12 col-md-6 col-md-offset-3">
		<div class="panel panel-success">
			<div class="panel-heading">
				<h3 class="panel-title">
					{{ item.name }}
				</h3>
			</div>
			<div class="panel-body">
				<div>
					<img
                            :src="item.img"
                            alt=""
                            class="item-img"
                    >
				</div>
			</div>
            <div class="panel-footer clearfix">
                <div class="pull-left">
                    {{ item.address }}
                </div>
                <div class="pull-right">
                    <a :href="'tel:'+item.phone">{{ item.phone }}</a>
                </div>
            </div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['item']
	}
</script>

<style scoped>
	.danger {
		border: 1px solid red;
	}
    .item-img {
        max-width: 100%;
    }
</style>