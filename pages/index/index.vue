<template>
	<view>
		<image src="../../static/logo.png" mode="" class="plhImg"></image>
		
		<img-tailor class="imgTailor" img='../../static/logo.png' :boxHeight='400' :boxWidth='300' ref='imgTailor'></img-tailor>
		<button @tap="finish">完成</button>
	</view>
</template>

<script>
	import imgTailor from '@/components/imgTailor/imgTailor.vue'
	export default {
		data() {
			return {
			}
		},
		components: {
			imgTailor
		},
		methods: {
			finish() {
				this.$refs.imgTailor.cutImg()
			}
		}
	}
</script>

<style lang="scss" scoped>
	.imgTailor {
		width: 300px;
		height: 400px;
		margin-left: 30px;
	}
</style>