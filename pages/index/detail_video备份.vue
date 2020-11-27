<template>
	<view>
		<view>
			<cu-custom bgColor="bg-white" :isBack="true"><block slot="content"></block></cu-custom>
		</view>
		<view :style="[{ width: windowWidth + 'px', height: windowHeight + 'px' }]" v-if="showLocK == true" style="position: absolute;"></view>
		<view :style="[{ width: windowWidth + 'px', height: windowHeight + 'px' }]">
			<view class="init-box" v-if="initshow == true">
				<view class="init-img" v-if="type == 'story'"><image class="init-image" src="http://cdn.lelepen.com/img/class_video_img_story.png"></image></view>
				<view class="init-img" v-if="type == 'building'"><image class="init-image" src="http://cdn.lelepen.com/img/class_video_img_obsever.png"></image></view>
				<view class="init-img" v-if="type == 'research'"><image class="init-image" src="http://cdn.lelepen.com/img/class_video_img_ornament.png"></image></view>
			</view>
			
			<video
				style="width:100%;height:100%;background-color:#FFFFFF;"
				v-if="video != ''"
				id="myVideo"
				:src="videoUrl"
				show-casting-button
				:autoplay="autoplay"
				:controls="showLocK"
				:show-progress="true"
				@controlstoggle="showcontrols"
				:show-play-btn="true"
				@ended="end"
				@play="playVideo"
				@pause="pause"
				@timeupdate="timeupdate"
				@fullscreenchange="out"
				:show-fullscreen-btn="false"
				:enable-progress-gesture="showLocK"
				@tap="closeLine"
				:initial-time="lastTime"
				enable-play-gesture
			>
				<view class="init-box" v-if="initshow == true">
					<view class="init-img" v-if="type == 'story'"><image class="init-image" src="http://cdn.lelepen.com/img/class_video_img_story.png"></image></view>
					<view class="init-img" v-if="type == 'building'"><image class="init-image" src="http://cdn.lelepen.com/img/class_video_img_obsever.png"></image></view>
					<view class="init-img" v-if="type == 'research'"><image class="init-image" src="http://cdn.lelepen.com/img/class_video_img_ornament.png"></image></view>
				</view>
				<!-- 回退触发盒子 -->
				<view class="back_icon" @tap="back" v-if="showClear"></view>
				<view v-show="showLocK == true && showClear" @tap="lockIt" class="cicle middle"><image src="https://lelepen.oss-cn-hangzhou.aliyuncs.com/miniapp/static/video_unlock.png" class="lock" mode="widthFix"></image></view>
				<view v-if="showLocK == false" @tap="lockIt" class="cicle middle"><image src="https://lelepen.oss-cn-hangzhou.aliyuncs.com/miniapp/static/video_lock.png" class="lock" mode="widthFix"></image></view>
				
				<!-- 视频播完的界面	btnAreaIpadLandscape:ipad横屏 -->
				<!-- <cover-view :class="isIpad?isLandscape?'btnAreaIpadLandscape':'btnAreaIpad':'btnArea'" :style="mycss" v-if="cutDown != true"> -->
				<cover-view :class="finishArea" :style="mycss" v-if="cutDown != true">
					<!-- 回退按钮 -->
					<cover-view class="backBtn" @tap="back"><cover-image src="https://lelepen.oss-cn-hangzhou.aliyuncs.com/miniapp/static/video/back.png" class="backBtna"></cover-image></cover-view>
					<!-- 左上,右下装饰图 -->
					<cover-image src="https://lelepen.oss-cn-hangzhou.aliyuncs.com/miniapp/static/video/class_video_finish_bg_left.png" class="btn_img_1"></cover-image>
					<cover-image src="https://lelepen.oss-cn-hangzhou.aliyuncs.com/miniapp/static/video/class_video_finish_bg_right.png" class="btn_img_2"></cover-image>
					<!-- 头像装饰图 -->
					<cover-image src="https://lelepen.oss-cn-hangzhou.aliyuncs.com/miniapp/static/video/class_video_finish.png" class="btn_img_3"></cover-image>
					<cover-view class="btn_time" v-if="thirdText == false && theme == '' && cutDown != true">{{btn_time}}s</cover-view>
					<cover-view class="btn_time" v-if="thirdText == true || (theme == 1 && cutDown != true)">Congrats</cover-view>
					<cover-view class="btn_text" v-if="thirdText == false && theme == '' && cutDown != true">即将进入下一个环节</cover-view>
					<cover-view class="btn_text" v-if="thirdText == true || (theme == 1 && cutDown != true)">太棒了</cover-view>
					<!-- 左按钮 -->
					<cover-view class="btn_replay" @tap="replay">再学一次</cover-view>
					<!-- 右按钮 -->
					<cover-view class="btn_next" @tap="Next"v-if="thirdText == false && theme == '' && cutDown != true">下个环节</cover-view>
					<cover-view class="btn_next" @tap="Next" v-if="thirdText == true || (theme == 1 && cutDown != true)">完成课件</cover-view>
				</cover-view>
				
				<!-- 回放和继续按钮 -->
				<cover-view :class="btnArea2" :style="mycss" v-if="cutDown == true">
					<cover-image src="https://lelepen.oss-cn-hangzhou.aliyuncs.com/miniapp/static/replay_round.png" class="btn2_replay next2" @tap="cutDownReplay"   v-bind:class="{ doudun2: isPlay == 2 }"></cover-image>
					<cover-image src="https://lelepen.oss-cn-hangzhou.aliyuncs.com/miniapp/static/next_round.png" class="btn2_next next2" @tap="cutDownGo"   v-bind:class="{ doudun1: isPlay == 1 }"></cover-image>
				</cover-view>
				
				<view v-if="showClear == true" @tap.stop="chooseType" class="btnss padding-top-sm padding-bottom-sm text-center">{{ btnType }}</view>

				<cover-view class="black" v-if="TypeLine == true" :style="[{ height: windowHeight + 'px' }]">
					<cover-view class="text-center text-white" v-bind:class="{ colorBule: Videotype == '3' }" style="margin-top: 200rpx;" @tap="Become(3)">超清1080P</cover-view>
					<cover-view class="text-center text-white" v-bind:class="{ colorBule: Videotype == '2' }" style="margin-top: 100rpx;" @tap="Become(2)">高清720P</cover-view>
					<cover-view class="text-center text-white" v-bind:class="{ colorBule: Videotype == '1' }" style="margin-top: 100rpx;" @tap="Become(1)">清晰480P</cover-view>
				</cover-view>
				<cover-view class="" v-if="WifiTips == true" style="margin-top: 250rpx;">
					<cover-view class="text-center text-white">正在使用非Wi-Fi网络，播放将消耗大量流量</cover-view>
					<cover-view class="middle"><cover-view class="text-center play" @tap="goPlay">继续播放</cover-view></cover-view>
				</cover-view>
			</video>
		</view>
	</view>
</template>

<script>
import { finishVideo, refreshUsernum } from '../../api/api.js';
import { mapState } from 'vuex'
export default {
	data() {
		return {
			initshow: true,
			btnType: '',
			Videotype: '',
			TypeLine: false,
			videoUrl: '',
			type: '',
			id: '',
			WifiTips: false,
			videoContext: '',
			Screen: '',
			video: '',
			ok: 0,
			btn: false,
			next: true,
			building_file: '',
			research_file: '',
			showReply: false,
			zindex: -1,
			mycss: 'visibility: visible;z-index:-1000;position: absolute; display:none;',
			thirdText: false,
			bands: '',
			theme: '',
			windowHeight: '',
			windowWidth: '',
			isiPad: 0,
			cutTimes: 0,
			context: null,
			showLocK: false,
			cutDown: false,
			timeSolt: [],
			timeSoltAll: [],
			nextPage: 0,
			PageGgain: 0,
			geturl: '',
			showClear: false,
			normal: '',
			lastTime: '',
			autoplay: false,
			btn_time:3,
			btn_time_interval:'',
			innerAudioContext1:'',
			innerAudioContext2:'',
			innerAudioContext3:'',
			innerAudioContext4:'',
			isPlay:0,
			stopBtnTip: false, // 关闭提示音
			isLandscape: false, // 竖屏|横屏
			index: 0,
		};
	},
	computed: {
		...mapState(['isIpad']),
		finishArea() {
			if(this.isIpad) {
				if(this.isLandscape) {
					return 'btnAreaIpadLandscape'
				}
				return 'btnAreaIpad'
			}else {
				return 'btnArea'
			}
		}, // 视频播完界面的类名
		btnArea2() {
			if(this.isIpad) {
				if(this.isLandscape) {
					return 'btnArea2IpadLandscape'
				}
				return 'btnArea2Ipad'
			}else {
				return 'btnArea2'
			}
		}, // 回放和继续按钮的类名
	},
	onReady() {
	},
	onResize() {
		// 设置横竖屏标示
		this.setLandscapeFlag()
		
	},
	created() {},
	onShow() {
		
		this.normal = uni.getStorageSync('normal');
		uni.getSystemInfo({
			success: res => {
				var config = uni.getStorageSync('config');
				var isPad = config.isPad;
				for (var i in isPad) {
					if (res.model.indexOf(isPad[i]) !== -1) {
						this.isiPad = 1;
						break;
					}
				}
				this.bands = res.model;
				this.windowWidth = res.windowWidth;
				this.windowHeight = res.windowHeight;
			}
		});
	},
	onLoad(opt) {
		if(opt.index) {
			this.index = Number(opt.index)
		}
		// 设置横竖屏标示
		this.setLandscapeFlag()
		this.videoContext = uni.createVideoContext('myVideo',this);
		
		this.video = opt.videoUrl;
		this.checkNet();
		

		this.gettime = uni.getStorageSync('getTime');
		
		if((opt.type && opt.type == 'research') || opt.theme == '1'){
			this.theme = 1;
			this.thirdText = true
		}
		this.FirstType(opt);
		this.tellType(opt);
		// this.video = opt.videoUrl;
		this.type = opt.type;
		this.timeSoltAll = JSON.parse(opt.time_slot);
		this.timeSolt = this.timeSoltAll[this.type];
		if (opt.type == 'research') {
			this.rightText = 'Back';
		}
		this.id = opt.id;
		this.building_file = opt.building_file;
		this.research_file = opt.research_file;
		
		setTimeout(res => {
			this.mycss = 'visibility: hidden;z-index:-1000;display:none;position: absolute;';
		}, 1000);
		
		this.videoContext.requestFullScreen();
		
		//加载音频播放
		this.innerAudioContext1 = uni.createInnerAudioContext();
		this.innerAudioContext1.src = "http://cdn.lelepen.com/img/"+this.type+"_init.mp3";
		this.innerAudioContext1.play();
		var that = this;
		this.innerAudioContext1.onEnded(function(){
			that.initshow = false;
			that.autoplay = true;
			that.videoContext.play();
		});
		
		//记录用户上课次数
		this.refreshUserNum();
		
		
		
	},
	onUnload() {
		// 计算当前项数据对应的page
		let page = Math.ceil((this.index + 1) / 5)
		if(this.$store.state.lessonVue && this.index) {
			// 刷新lesson页面数据
			this.$store.state.lessonVue.getMyClass('back',page)
		}
	},
	methods: {
		// 设置横竖屏标示
		setLandscapeFlag() {
			let _this = this
			// 存储 竖屏|横屏 信息
			uni.getSystemInfo({  
				success(res) {  
					if (res.windowWidth > res.windowHeight) {  
						// console.log('横屏'); 
						_this.isLandscape = true
					} else {  
						// console.log('竖屏');  
						_this.isLandscape = false
					}  
				}  
			});  
		},
		showcontrols(e) {
			if (this.normal == '0') {
				if (e.detail.show == false) {
					this.showClear = false;
				} else {
					this.showClear = true;
				}
			} else {
				this.showClear = false;
			}
		},
		Become(type) {
			this.videoContext.pause();
			this.videoUrl = '';
			// this.autoplay = false;
			var time = uni.getStorageSync('lastTime');
			this.lastTime=time
			setTimeout(() => {
				if (type == 1) {
					this.videoUrl = this.geturl + '_PD.mp4';
					uni.setStorageSync('Videotype', '1');
					this.Videotype = '1';
					this.btnType = '清晰';
					this.TypeLine = false;
					this.videoContext.seek(time);
				}
				if (type == 2) {
					this.videoUrl = this.geturl + '_SD.mp4';
					this.btnType = '高清';
					uni.setStorageSync('Videotype', '2');
					this.Videotype = '2';
					this.TypeLine = false;
					this.videoContext.seek(time);
				}
				if (type == 3) {
					this.videoUrl = this.geturl + '_HD.mp4';
					this.btnType = '超清';
					uni.setStorageSync('Videotype', '3');
					this.Videotype = '3';
					this.TypeLine = false;
					this.videoContext.seek(time);
				}
			}, 1000);
		},
		FirstType(opt) {
			if (opt.videoUrl.indexOf('_PD') != -1) {
				this.btnType = '清晰';
			} else if (opt.videoUrl.indexOf('_SD') != -1) {
				this.btnType = '高清';
			} else if (opt.videoUrl.indexOf('_HD') != -1) {
				this.btnType = '超清';
			}
		},
		tellType(opt) {
			var videoType = uni.getStorageSync('Videotype');
			var newUrl = opt.videoUrl.substring(0, opt.videoUrl.length - 7);
			this.geturl = newUrl;
			this.Videotype = videoType;
			if (videoType == '1') {
				this.videoUrl = newUrl + '_PD.mp4';
				this.btnType = '清晰';
			}
			if (videoType == '2') {
				this.videoUrl = newUrl + '_SD.mp4';
				this.btnType = '高清';
			}
			if (videoType == '3') {
				this.videoUrl = newUrl + '_HD.mp4';
				this.btnType = '超清';
			}
		},
		chooseType() {
			if (this.normal == '0') {
				if (this.TypeLine == false) {
					this.TypeLine = true;
				} else {
					this.TypeLine = false;
				}
			} else {
			}
		},
		closeLine() {
			this.TypeLine = false;
		},
		out: function(e) {
			
			if (e.detail.fullScreen == false) {
				uni.navigateBack({
					delta: 1
				});
			}
			// if (this.isiPad == 1) {
			// 	return;
			// } else {
			// 	if (e.detail.direction == 'vertical') {
			// 		uni.navigateBack({
			// 			delta: 1
			// 		});
			// 	}
			// }
		},
		lockIt() {
			if (this.showLocK == false) {
				this.showLocK = true;
				if (this.normal == '0') {
					this.showClear = true;
				} else {
					this.showClear = false;
				}
			} else {
				this.showLocK = false;
				if (this.normal == '0') {
					this.showClear = false;
				}
			}
		},
		checkNet() {
			setTimeout(()=> {
				this.ok = 1;
			}, 1000);
			// let _this = this
			uni.getNetworkType({
				success: res => {
					if (res.networkType != 'wifi') {
						this.videoContext.pause();
						this.WifiTips = true;
					} else {
						this.videoUrl = this.video;
					}
				}
			});
		},
		cutDownReplay() {
			// 设置关闭提示音(用于关闭提示音4)
			this.stopBtnTip = true
			if(this.innerAudioContext2) {
				// 关闭提示音2
				this.innerAudioContext2.stop()
			}
			if(this.innerAudioContext4) {
				// 关闭提示音4
				this.innerAudioContext4.stop()
			}
			
			
			this.videoContext.seek(this.PageGgain);
			this.mycss = 'visibility: visible;z-index:-1000;position: absolute; display:none;';
			this.videoContext.play();
			this.showReply = false;
		},
		cutDownGo() {
			// 设置关闭提示音(用于关闭提示音4)
			this.stopBtnTip = true
			if(this.innerAudioContext2) {
				// 关闭提示音2
				this.innerAudioContext2.stop()
			}
			if(this.innerAudioContext4) {
				// 关闭提示音4
				this.innerAudioContext4.stop()
			}
			
			this.videoContext.seek(this.nextPage);
			this.videoContext.play();
			this.mycss = 'visibility: visible;z-index:-1000;position: absolute; display:none;';
			this.cutDown = false;
			this.showReply = false;
		},

		replay() {
			clearTimeout(this.btn_time_interval);
			this.videoContext.play();
			this.mycss = 'visibility: visible;z-index:-1000;position: absolute; display:none;';
			this.showReply = false;
			this.zindex = 1000;
		},
		Next() {
			clearTimeout(this.btn_time_interval);
			if (this.type == 'story' && this.videoUrl != this.building_file && this.theme != 1) {
				this.videoUrl = this.building_file;
				this.type = 'building';
				this.timeSolt = this.timeSoltAll[this.type];
				this.videoContext.play();
				this.mycss = 'visibility: visible;z-index:-1000;position: absolute; display:none;';
			} else if (this.type == 'building' || (this.videoUrl == this.building_file && this.videoUrl != this.research_file)) {
				this.videoUrl = this.research_file;
				this.type = 'research';
				this.timeSolt = this.timeSoltAll[this.type];
				this.videoContext.play();
				this.mycss = 'visibility: visible;z-index:-1000;position: absolute; display:none;';
				this.thirdText = true;
			} else if (this.type == 'research' || this.videoUrl == this.research_file || this.theme == 1) {
				uni.navigateBack({
					delta: 1
				});
			}
		},
		back() {
			uni.showModal({
				title:"提示",
				content:"课程尚未完成，是否退出课程？",
				success: res => {
					if (res.confirm) {
						uni.navigateBack({
							delta: 1
						});
					}
				}
			})
			
		},
		goPlay() {
			this.videoContext.play();
			this.WifiTips = false;
			this.videoUrl = this.video;
		},
		playVideo() {
			uni.report('title', '播放按钮');
		},
		pause(e) {
			uni.report('title', '暂停按钮');
		},

		timeupdate(e) {
			this.stopBtnTip = false
			var type = this.type;
			var cutTimes_slot = this.timeSolt;
			uni.setStorageSync('lastTime', e.detail.currentTime);
			this.cutTimes = parseInt(e.detail.currentTime);
			for (var i in cutTimes_slot) {
				if (this.cutTimes == cutTimes_slot[i].time) {
					this.btn = true;
					// this.nextPage = cutTimes_slot[i + 1];
					this.showReply = true;
					if (i == 0) {
						this.PageGgain = 0;
						this.nextPage = Number(cutTimes_slot[i].time) + 1;
					}
					if (i > 0) {
						this.nextPage = Number(cutTimes_slot[i].time) + 1;
						this.PageGgain = Number(cutTimes_slot[i - 1].time) + 1;
					}
					this.zindex = 1000;
					this.mycss = 'visibility: visible;position: absolute;';
					this.videoContext.pause();
					this.cutDown = true;
					this.btnshow();
				}
			}
			uni.report('title', '进度发生变化');
		},
		btnshow() {
			this.innerAudioContext2 = uni.createInnerAudioContext();
			this.innerAudioContext2.src = "http://cdn.lelepen.com/img/btn_blue.mp3";
			this.innerAudioContext2.play();
			var that = this;
			this.innerAudioContext2.onPlay(function(){
				that.isPlay = 1;
			});
			this.innerAudioContext2.onEnded(function(){
				if(that.stopBtnTip === true) {
					return
				}
				that.isPlay = 0;
				that.innerAudioContext4 = uni.createInnerAudioContext();
				that.innerAudioContext4.src = "http://cdn.lelepen.com/img/btn_yellow.mp3";
				that.innerAudioContext4.play();
				that.innerAudioContext4.onPlay(function(){
					that.isPlay = 2;
				})
				that.innerAudioContext4.onEnded(function(){
					that.isPlay = 0;
				});
			})
		},
		end() {
			//加载音频播放
			this.innerAudioContext4 = uni.createInnerAudioContext();
			this.innerAudioContext4.src = "http://cdn.lelepen.com/img/class_end.mp3";
			this.innerAudioContext4.play();
			
			this.cutDown = false;
			
			if(!this.thirdText) {
				// 避免最后一个视频3秒自动退出
				this.btn_time = 3;
				this.timeInterval();
			}
			
			this.btn = true;
			this.showReply = true;
			this.zindex = 1000;
			this.mycss = 'z-index:1000;visibility: visible;position: absolute;';
			
			finishVideo({
				id: this.id,
				type: this.type ? this.type : ''
			}).then(res => {
				if (res.code == 1) {
					if (uni.getStorageSync('videoTimes') == 1) {
						uni.setStorageSync('videoTimes', 2);
					}
				}
			});
		},
		refreshUserNum(){
			refreshUsernum({id:this.id,type:this.type}).then(res=>{});
		},
		timeInterval(){
			this.btn_time_interval = setTimeout(() => {
				this.setBtnTime();
			}, 1000);
		},
		setBtnTime(){
			if(this.btn_time == 0){
				clearTimeout(this.btn_time_interval);
				this.Next();
			}else{
				this.btn_time = this.btn_time - 1;
				this.timeInterval();
			}
		}
	}
};
</script>

<style lang="scss">
@keyframes likes1 {
  0% {
	width: 270rpx;
	height: 138rpx;
	margin-top:0;
	margin-right:0;
  }
  100% {
	width: 320rpx;
	height: 164rpx;
	margin-right:-25rpx;
	margin-top:-13rpx;
  }
}
@keyframes likes2 {
  0% {
	width: 270rpx;
	height: 138rpx;
	margin-top:0;
	margin-left:0;
  }
  100% {
	width: 320rpx;
	height: 164rpx;
	margin-left:-25rpx;
	margin-top:-13rpx;
  }
}
@keyframes likes3 {
  0% {
	width: 150rpx;
	height: 77rpx;
	margin-top:0;
	margin-right:0;
  }
  100% {
	width: 178rpx;
	height: 91rpx;
	margin-right:-21rpx;
	margin-top:-11rpx;
  }
}

.init-box{
	width:400%;
	height:400%;
	background-color:#FFFFFF;
	z-index:99999999;
	position:absolute;
	top:0;
	left:0;
}
.init-img{
	width:480rpx;
	height:480rpx;
	position:absolute;
	top:12.5%;
	left:12.5%;
	margin-left:-240rpx;
	margin-top:-240rpx;
}
.init-image{
	width:100%;
	height:100%;
}
video {
	width: 100% !important;
	height: 403rpx;
}

.tips {
	/* z-index: 99; */
	background-color: #FFFFFF;
}
.btnArea {
	position: absolute;
	width: 100%;
	height: 100%;
	background-color: #FFFFFF;
	.backBtn{
		width: 80rpx;
		height: 80rpx;
		position:absolute;
		z-index:999999;
		top:20rpx;
		left:20rpx;
	}
	.backBtna {
		width: 48rpx;
		height: 48rpx;
		position:absolute;
		top:16rpx;
		left:16rpx;
	}
	.btn_img_1{
		width:400rpx;
		height:300rpx;
		position:absolute;
		top:0;
		left:0;
		z-index:9;
	}
	.btn_img_2{
		width:280rpx;
		height:250rpx;
		position:absolute;
		bottom:0;
		right:0;
		z-index:9;
	}
	.btn_img_3{
		width:220rpx;
		height:220rpx;
		position:absolute;
		top:133rpx;
		left:50%;
		margin-left:-110rpx;
		z-index:9;
	}
	.btn_time{
		width:280rpx;
		height: 84rpx;
		font-size: 60rpx;
		font-family: PingFang-SC-Heavy, PingFang-SC;
		font-weight: 800;
		color: #36ACFD;
		line-height: 84rpx;
		text-align:center;
		position:absolute;
		top:358rpx;
		left:50%;
		margin-left: -140rpx;
	}
	.btn_text{
		width: 500rpx;
		height: 53rpx;
		font-size: 38rpx;
		font-family: PingFang-SC-Medium, PingFang-SC;
		font-weight: 500;
		color: #514E57;
		line-height: 53rpx;
		text-align:center;
		position:absolute;
		top:452rpx;
		left:50%;
		margin-left:-250rpx;
	}
	.btn_replay{
		width: 236rpx;
		height: 94rpx;
		background: #F7F7F7;
		border-radius: 40rpx;
		line-height:94rpx;
		text-align:center;
		font-size: 32rpx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #36ACFD;
		position:absolute;
		top:566rpx;
		left:321rpx;
	}
	.btn_next{
		width: 236rpx;
		height: 94rpx;
		background: #36ACFD;
		border-radius: 40rpx;
		line-height:94rpx;
		text-align:center;
		font-size: 32rpx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #FFFFFF;
		position:absolute;
		top:566rpx;
		right:346rpx;
	}
}

.btnAreaIpad {
	@extend .btnArea;
	.btn_replay{
		left: 100rpx;
	}
	.btn_next{
		right: 100rpx;
	}
	
}
.btnAreaIpadLandscape {
	@extend .btnArea;
	.btn_img_3 {
		width: 110rpx;
		height: 110rpx;
		top: 100rpx;
		margin-left: -55rpx;
	}
	.btn_time {
		font-size: 40rpx;
		top: 200rpx;
	}
	.btn_text {
		font-size: 28rpx;
		top: 274rpx;
	}
	.btn_replay {
		top: 380rpx;
		left: 100rpx;
		width: 153rpx;
		height: 61rpx;
		line-height: 61rpx;
		font-size: 24rpx;
		border-radius: 24rpx;
	}
	.btn_next {
		top: 380rpx;
		right: 100rpx;
		width: 153rpx;
		height: 61rpx;
		line-height: 61rpx;
		font-size: 24rpx;
		border-radius: 24rpx;
		z-index: 999999;
	}
}
.btnArea2 {
	position: absolute;
	width: 100%;
	height: 100%;
	.next2 {
		width: 270rpx;
		height: 138rpx;
		color: #fff;
	}
	.btn2_replay{
		position:absolute;
		bottom:38rpx;
		left:308rpx;
	}
	.btn2_next{
		position:absolute;
		bottom:38rpx;
		right:308rpx;
	}
	.doudun2 {
		  animation-name: likes2;     // 动画名称
		  animation-direction: alternate;   // 动画在奇数次（1、3、5...）正向播放，在偶数次（2、4、6...）反向播放。
		  animation-timing-function: linear;    // 动画执行方式，linear：匀速；ease：先慢再快后慢；ease-in：由慢速开始；ease-out：由慢速结束；ease-in-out：由慢速开始和结束；
		  animation-delay: 0s;    // 动画延迟时间
		  animation-iteration-count: 10;    //  动画播放次数，infinite：一直播放
		  animation-duration: 0.4s;   // 动画完成时间
	}
	.doudun1 {
		  animation-name: likes1;     // 动画名称
		  animation-direction: alternate;   // 动画在奇数次（1、3、5...）正向播放，在偶数次（2、4、6...）反向播放。
		  animation-timing-function: linear;    // 动画执行方式，linear：匀速；ease：先慢再快后慢；ease-in：由慢速开始；ease-out：由慢速结束；ease-in-out：由慢速开始和结束；
		  animation-delay: 0s;    // 动画延迟时间
		  animation-iteration-count: 10;    //  动画播放次数，infinite：一直播放
		  animation-duration: 0.4s;   // 动画完成时间
	}
}
// btnArea2 ipad竖屏
.btnArea2Ipad {
	@extend .btnArea2;
	.next2 {
		width: 150rpx;
		height: 77rpx;
	}
	.btn2_replay{
		bottom: 60rpx;
		left: 150rpx;
	}
	.btn2_next{
		bottom: 60rpx;
		right: 150rpx;
	}
	.doudun2 {
		animation-name: likes3;
	}
	.doudun1 {
		animation-name: likes3;
	}
}
// btnArea2 ipad横屏
.btnArea2IpadLandscape {
	@extend .btnArea2;
	.next2 {
		width: 150rpx;
		height: 77rpx;
	}
	.btn2_replay{
		bottom: 60rpx;
		left: 150rpx;
	}
	.btn2_next{
		bottom: 60rpx;
		right: 150rpx;
	}
	.doudun2 {
		animation-name: likes3;
	}
	.doudun1 {
		animation-name: likes3;
	}
}
.black {
	width: 250rpx;
	background-color: rgba(0, 0, 0, 0.5);
	position: absolute;
	right: 0;
	z-index: 999999999;
}
.play {
	width: 236rpx;
	height: 66rpx;
	background: rgba(238, 239, 243, 1);
	border-radius: 40rpx;
	margin-top: 50rpx;
	padding-top: 33rpx;
}
.replay {
	width: 236rpx;
	height: 94rpx;
	/* background: rgba(238, 239, 243, 1); */
	border-radius: 40rpx;
	margin-top: 150rpx;
	/* margin-left: 100rpx; */
	margin-right: 10rpx;
	padding-top: 33rpx;
}
.next {
	width: 236rpx;
	height: 94rpx;
	color: #fff;
	border-radius: 40rpx;
	margin-top: 150rpx;
	padding-top: 33rpx;
}

.hidden {
	position: absolute;
	height: 2000rpx;
	top: 0;
	width: 100%;
	background-color: #000000;
	z-index: 999;
}
.backImg {
	position: absolute;
	left: 60rpx;
	top: 60rpx;
	width: 50rpx;
	height: 50rpx;
}
.back_icon {
	position: absolute;
	left:30rpx;
	top:30rpx;
	width:80rpx;
	height:80rpx;
	z-index:99;
}
.lock {
	width: 48rpx;
	height: auto;
}
.cicle {
	width: 88rpx;
	height: 88rpx;
	margin-top: 350rpx;
	position: absolute;
	z-index: 9999;
	margin-left: 70rpx;
	background: rgba(0, 0, 0, 0.4);
	border-radius: 100%;
}
page {
	background-color: #000000;
}
.btnss {
	position: absolute;
	width: 104rpx;
	margin-top: 350rpx;
	right: 20rpx;
	font-size: 18rpx;
	color: #fff;
	border: 1rpx solid white;
	border-radius: 40rpx;
	z-index: 9999;
}
.colorBule {
	color: #36acfd;
}


</style>
