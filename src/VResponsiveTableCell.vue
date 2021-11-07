<template>
	<button v-if="cell && cell.onClick" type="button" @click="cell.onClick">
		{{ cell.label }}
	</button>
	<button v-else-if="cell && cell.href" type="button" :href="cell.href">
		{{ cell.label }}
	</button>
	<span v-else-if="cell" v-html="cell.label"></span>
</template>

<script>
	export default {
		props: {
			cell: {
				type: Object,
				required: false
			}
		}
	};
</script>

<style scoped>
	.button:not(:first-child) {
		margin-left: 10px;
	}
</style>