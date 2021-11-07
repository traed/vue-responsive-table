<template>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" :width="width" :height="height"><g stroke-width="1" :fill="_secondaryfill" :stroke="_secondaryfill"><line x1="0.5" y1="6" x2="11.5" y2="6" fill="none" stroke-linecap="round" stroke-linejoin="round" /><polyline points="4.5 10 0.5 6 4.5 2" fill="none" stroke-linecap="round" stroke-linejoin="round" :stroke="fill" /></g></svg>
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