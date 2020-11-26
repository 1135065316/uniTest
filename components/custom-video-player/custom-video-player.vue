<template>
	<video
	id="custom_video"
	:src='videoUrl'
	>
		
	</video>
</template>

<script>
	export default {
		props: {
			videoUrl: {
				type: String,
				required: true,
			}, // 视频地址
		},
		data() {
			return {
				videoContext: null, // 视频上下文
			};
		},
		created() {
			// 创建视频上下文
			this.videoContext = uni.createVideoContext('custom_video', this)
			this.videoContext.requestFullScreen()
		}
	}
</script>

<style lang="scss">

</style>
