//获取元素的当前属性（兼容问题）
function getStyle(obj, attr) {
	if(obj.currentStyle) {
		return obj.currentStyle[attr]
	} else {
		return getComputedStyle(obj, false)[attr];

	}
}
function startMove(obj, json) { //obj:操作对象，json最终效果
	//防止图片抖动
	clearInterval(obj.timer)

	 obj.timer = setInterval(function() {
		for(attr in json) {
			//获取当前的值
			var iCur = parseInt(getStyle(obj, attr))
			document.title = iCur
			//当前速度
			var speed = (json[attr] - iCur) / 8
			//四舍五入
			speed > 0 ? speed = Math.ceil(speed) : speed = Math.floor(speed);
			//判断
			if(iCur == json[attr]) {
				clearInterval(obj.timer)

			} else {
				obj.style[attr] = (iCur + speed) + "px"
			}
		}
	}, 30)
}
//内容
var oul = document.getElementsByClassName("bander-tu")[0];
			var osubli = document.getElementsByClassName("bander-tu-sub")[0].children
			var left = document.getElementById("bander-left")
			var right = document.getElementById("bander-right")
			var bander = document.getElementById("bander")
			var timer = setInterval(move, 2000);
			var numsindex = 0;

			function move() {
				//移动
				if(numsindex == 8) {
					numsindex = 0;
					oul.style.marginLeft = 0;
				}
				numsindex++
				startMove(oul, {
					"margin-left": numsindex * (-1000)
				});
				//下表走动
				for(var i = 0; i < osubli.length; i++) {
					osubli[i].className = ""
				}
//				console.log(numsindex)
				osubli[numsindex >= 8 ? 0 : numsindex].className = "sub"
				//滑到下标走到相应位置
				for(var j = 0; j < osubli.length; j++) {
					osubli[j].index = j
					osubli[j].onmouseover = function() {
						clearInterval(timer)
						startMove(oul, {
							"margin-left": this.index * (-1000)
						});
						for(var i = 0; i < osubli.length; i++) {
							osubli[i].className = ""
						}
						this.className = "sub"
						numsindex = this.index
						timer = setInterval(move, 2000)
					}
				}
				//停止a
				oul.onmouseenter = function() {
					clearInterval(timer)
				}
				oul.onmouseleave = function() {
					timer=setInterval(move,2000);
				}
				//左右

				left.onclick = function() {
					clearInterval(timer)
						numsindex--
					if(numsindex <= 0) {
						numsindex = 8
					}
					startMove(oul, {
						"margin-left":numsindex * (-1000)
					});
					console.log(numsindex)
					for(var i = 0; i < osubli.length; i++) {
						osubli[i].className = ""
					}
					osubli[numsindex>=8?0:numsindex].className = "sub"
					timer = setInterval(move, 2000)
				}
			right.onclick = function() {
					clearInterval(timer)
					numsindex++
					if(numsindex >= 8) {
						numsindex = 0
					oul.style.marginLeft = 0;
					}
					startMove(oul, {
						"margin-left": numsindex * (-1000)
					});
					console.log(numsindex)
					for(var i = 0; i < osubli.length; i++) {
						osubli[i].className = ""
					}
					numsindex>=8?osubli[0].className="sub":osubli[numsindex].className = "sub"
					timer = setInterval(move, 2000)
				}
			}
