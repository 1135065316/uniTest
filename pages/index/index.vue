<template>
	<view>
		<customVideoPlayer :videoUrl='videoUrl'></customVideoPlayer>
	</view>
</template>

<script>
	import customVideoPlayer from '@/components/custom-video-player/custom-video-player.vue'
	export default {
		data() {
			return {
				videoUrl: 'https://cdn.lelepen.com/uploads/video/catelog/2020/75156439524bb29333490de410b8ec98_PD.mp4'
			}
		},
		components: {
			customVideoPlayer
		}
	}
</script>

<style scoped>

</style>