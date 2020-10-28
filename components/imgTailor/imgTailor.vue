<template>
	<view>
		<movable-area class="selectBox" :style="{'backgroundImage':'url('+img+')'}">
			<movable-view v-for="(item,index) in dotInitPosition" :key='index' :class="'dot'+(index + 1)" direction="all" :x="item.x" :y='item.y' @change="handleDotMove($event,index + 1)"></movable-view>
			
			<canvas canvas-id="myCanvas" class="myCanvas"></canvas>
		</movable-area>
	</view>
</template>

<script>
	export default {
		props: {
			// 图片地址
			img: {
				type: String,
				required: true,
			},
			// 四个点的初始化位置
			dotInitPosition: {
				type: Array,
				default: function() {
					return [
							{x: 100, y:100},
							{x: 200, y:100},
							{x: 200, y:200},
							{x: 100, y:200},
						]
				}
			},
			// 整体区域的宽度
			boxWidth: {
				type: Number,
				defalut: 300
			},
			// 整体区域的高度
			boxHeight: {
				type: Number,
				defalut: 400
			},
		},
		data() {
			return {
				// 四个点 中心的xy坐标
				dotPositionArr: [],
				context: null, // 画布
			}
		},
		mounted() {
			// 1.创建画布上下文
			this.context = uni.createCanvasContext('myCanvas')
			// 2.执行一次绘制
			this.handleDotMove()
		},
		methods: {
			// 仅调用一次,用于加上点的宽度和边框
			initPosition() {
				// JSON.parse(JSON.stringify())处理传址问题
				let tempArr = JSON.parse(JSON.stringify(this.dotInitPosition))
				
				tempArr.forEach((item,index)=>{
					// 11=半宽7+边框4
					tempArr[index]['x'] += 11
					tempArr[index]['y'] += 11
				})
				this.dotPositionArr = tempArr
			},
			// 移动点时触发 whichDot:1|2|3|4
			handleDotMove(event,whichDot = 0) {
				// 1.保存坐标数据
				if(whichDot) {
					this.dotPositionArr[whichDot - 1]['x'] = event.detail.x + 11
					this.dotPositionArr[whichDot - 1]['y'] = event.detail.y + 11
				}else {
					this.initPosition()
				}
				// 2.根据移动的点动态绘制线条
				this.context.clearRect(0,0,1000,1000)
				this.context.beginPath()
				this.context.moveTo(this.dotPositionArr[0]['x'], this.dotPositionArr[0]['y'])
				this.context.lineTo(this.dotPositionArr[1]['x'], this.dotPositionArr[1]['y'])
				this.context.lineTo(this.dotPositionArr[2]['x'], this.dotPositionArr[2]['y'])
				this.context.lineTo(this.dotPositionArr[3]['x'], this.dotPositionArr[3]['y'])
				this.context.closePath()
				this.context.strokeStyle = '#36ACFD';
				this.context.lineWidth = 2
				this.context.stroke()
				// 3.绘制外部阴影
				// 第一块阴影
				this.context.beginPath()
				this.context.moveTo(0, 0)
				this.context.lineTo(this.dotPositionArr[0]['x'], this.dotPositionArr[0]['y'])
				this.context.lineTo(this.dotPositionArr[1]['x'], this.dotPositionArr[1]['y'])
				this.context.lineTo(this.boxWidth, 0)
				
				this.context.closePath()
				this.context.setFillStyle('rgba(0,0,0,0.5)')
				this.context.fill()
				// 第二块阴影
				this.context.beginPath()
				this.context.moveTo(this.dotPositionArr[1]['x'], this.dotPositionArr[1]['y'])
				this.context.lineTo(this.boxWidth,0)
				this.context.lineTo(this.boxWidth,this.boxHeight)
				this.context.lineTo(this.dotPositionArr[2]['x'], this.dotPositionArr[2]['y'])
				
				this.context.closePath()
				this.context.setFillStyle('rgba(0,0,0,0.5)')
				this.context.fill()
				// 第三块阴影
				this.context.beginPath()
				this.context.moveTo(this.dotPositionArr[3]['x'], this.dotPositionArr[3]['y'])
				this.context.lineTo(this.dotPositionArr[2]['x'], this.dotPositionArr[2]['y'])
				this.context.lineTo(this.boxWidth,this.boxHeight)
				this.context.lineTo(0, this.boxHeight)
				this.context.closePath()
				this.context.setFillStyle('rgba(0,0,0,0.5)')
				this.context.fill()
				// 第四块阴影
				this.context.beginPath()
				this.context.moveTo(0,0)
				this.context.lineTo(this.dotPositionArr[0]['x'], this.dotPositionArr[0]['y'])
				this.context.lineTo(this.dotPositionArr[3]['x'], this.dotPositionArr[3]['y'])
				this.context.lineTo(0, this.boxHeight)
				this.context.closePath()
				this.context.setFillStyle('rgba(0,0,0,0.5)')
				this.context.fill()
				
				this.context.draw()
			},
			// 裁剪图片
			cutImg() {
				this.context.beginPath()
				this.context.moveTo(this.dotPositionArr[0]['x'], this.dotPositionArr[0]['y'])
				this.context.lineTo(this.dotPositionArr[1]['x'], this.dotPositionArr[1]['y'])
				this.context.lineTo(this.dotPositionArr[2]['x'], this.dotPositionArr[2]['y'])
				this.context.lineTo(this.dotPositionArr[3]['x'], this.dotPositionArr[3]['y'])
				this.context.closePath()
				this.context.clip()
				this.context.clearRect(0,0,this.boxWidth,this.boxHeight)
				this.context.draw()
				// console.log(this.context.toDataURL("image/png"));
			},
		}
	}
</script>

<style lang="scss" scoped>
	.myCanvas {
		width: 100%;
		height: 100%;
	}
	.dot {
		width: 14px;
		height: 14px;
		background: #FFFFFF;
		border-radius: 50%;
		border: 4px solid #36ACFD;
		pointer-events: auto;
		z-index: 1;
	}
	.selectBox {
		width: 100%;
		height: 100%;
		pointer-events: none;
		// background-image:url(../../static/logo.png);
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center center;
		.dot1 {
			@extend .dot;
		}
		.dot2 {
			@extend .dot;
		}
		.dot3 {
			@extend .dot;
		}
		.dot4 {
			@extend .dot;
		}
	}
</style>