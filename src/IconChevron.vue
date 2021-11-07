<template>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" :width="width" :height="height"><g stroke-width="1" :fill="_secondaryfill" :stroke="_secondaryfill"><polyline fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="15.5,5.5 8,10.5 0.5,5.5 " :stroke="fill" /></g></svg>
</template>

<script>
	export default {
		props: {
			width: {
				type: [
					Number,
					String
				],
				default: '100%'
			},
			height: {
				type: [
					Number,
					String
				],
				default: '100%'
			},
			strokewidth: {
				type: [
					Number,
					String
				],
				default: 1
			},
			fill: {
				type: String,
				default: 'currentColor'
			},
			secondaryfill: {
				type: String
			}
		},
		computed: {
			_secondaryfill() {
				return this.secondaryfill || this.fill;
			}
		}
	};
</script>