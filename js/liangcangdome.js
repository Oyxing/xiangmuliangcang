//头部
$("li").mouseenter(function() {
	// 函数节流
	var self = $(this).find(".dropbox");
	if(self.is(":animated")) {
		return;
	}

	self.show();
	//	            background-color: #292F34;
})
$("li").mouseleave(function() {
	var self = $(this).find(".dropbox");

	self.hide();
})

//选项卡
$(".ul1 li").mousemove(function() {
	var i = $(this).index()
	$(this).addClass('bom').siblings().removeClass('bom');
	$('.ul2 li').eq(i).show().siblings().hide();
})
//$(".ul2 li").mouseout(function() {
//	$('.ul2 li').hide();
//})
////搜索
//搜选框
	

//轮播图
var templateStr = $("#template").html();
var tempStr = _.template(templateStr);
$.ajax({
	url: "http://lc.shudong.wang/api_ad.php?position_id=1",
	type: 'get',
	success: function(data) {
		var obj = JSON.parse(data).data
		//								        		console.log(obj)
		$.each(obj, function(index, vl) {
			var dataStr = tempStr(vl);
			//															console.log(dataStr)
			var domobj = $(dataStr);
			$(".bander-tu").append(domobj);
		})
		var div = document.createElement("div");
		div.className="clr";
		$(".shopListCon").append(div);
	}
})

//导航
//			http://lc.shudong.wang/api_cat.php
//创建div
//shop

var arr = ["家居", "家具", "文具", "数码", "玩乐", "厨卫", "美食", "男装55", "女装", "童装", "鞋包", "配饰", "美护", "户外", "植物", "图书", "艺术", "礼物", "推荐"]
var arrImg = ["../img/23687.png","../img/23685.png","../img/23686.png","../img/23683.png","../img/23682.png","../img/23684.png","../img/23680.png","../img/23679.png","../img/23678.png","../img/23677.png","../img/23676.png","../img/23675.png","../img/23681.png","../img/23674.png","../img/23671.png","../img/23668.png","../img/23672.png","../img/23669.png","../img/23670.png"]
	for(var i = 0; i < arr.length; i++) {
			var oA = document.createElement("a");
			oA.className = "storenav-a"
			$(".shangbiao1").append(oA);		
	}
	for(var i = 0; i < arr.length; i++) {
			var odiv = document.createElement("div");
			odiv.className = "storenav";
			odiv.innerHTML = arr[i];
			$(".storenav-a")[i].append(odiv);
	}
	for (var j = 0; j < arrImg.length; j++) {
		var oImg = document.createElement("img");
		oImg.src = arrImg[j]	
		$(".storenav")[j].append(oImg)
	}
	for (var i = 0; i < arr.length; i++) {
		var oul = document.createElement("div");
		oul.className = "storenav-ul3"
			$(".storenav")[i].append(oul)
	}
var arrShop = ["家居", "家具", "美食", "男装", "女装", "童装", "鞋包", "配饰", "美护", "户外", "植物", "图书", "艺术", "礼物", "推荐"]
var k
	for (k = 0; k < arrShop.length; k++) {
				var oLi = document.createElement("a");
				oLi.innerHTML = arrShop[k];
				$(".storenav-ul3").append(oLi);

	}
			$(".storenav-ul3").eq(0).css({"marginLeft":"0px"})	
			$(".storenav-ul3").eq(1).css({"marginLeft":"-100px"})	
			$(".storenav-ul3").eq(2).css({"marginLeft":"-200px"})	
			$(".storenav-ul3").eq(3).css({"marginLeft":"-300px"})	
			$(".storenav-ul3").eq(4).css({"marginLeft":"-400px"})	
			$(".storenav-ul3").eq(5).css({"marginLeft":"-500px"})	
			$(".storenav-ul3").eq(6).css({"marginLeft":"-600px"})	
			$(".storenav-ul3").eq(7).css({"marginLeft":"0px"})	
			$(".storenav-ul3").eq(8).css({"marginLeft":"-100px"})	
			$(".storenav-ul3").eq(9).css({"marginLeft":"-200px"})	
			$(".storenav-ul3").eq(10).css({"marginLeft":"-300px"})	
			$(".storenav-ul3").eq(11).css({"marginLeft":"-400px"})	
			$(".storenav-ul3").eq(12).css({"marginLeft":"-500px"})	
			$(".storenav-ul3").eq(13).css({"marginLeft":"-600px"})	
			$(".storenav-ul3").eq(14).css({"marginLeft":"0px"})	
			$(".storenav-ul3").eq(15).css({"marginLeft":"-100px"})	
			$(".storenav-ul3").eq(16).css({"marginLeft":"-200px"})	
			$(".storenav-ul3").eq(17).css({"marginLeft":"-300px"})	
			$(".storenav-ul3").eq(18).css({"marginLeft":"-400px"})	

		$(".storenav").mouseover(function(){
			var self = $(this).find(".storenav-ul3");

            if(self.is(":animated")){
                return;
            }
			self.show()
		})
		$(".storenav").mouseout(function(){
			var self = $(this).find(".storenav-ul3");
			 if(self.is(":animated")){
                return;
            }
			self.hide()
		})








var arr1 = ["趣物", "数码", "汽车", "文化", "时尚", "美食", "建筑", "空间", "圈子", "清单", "活动", "视频"];
for(var i = 0; i < arr1.length; i++) {
	var odiv = document.createElement("a");
	odiv.className = "storenav";
	odiv.innerHTML = arr1[i];
	$(".magazine").append(odiv);
}
var arr2 = ["男士", "家居", "数码", "工具", "玩具", "美容", "孩子", "宠物", "饮食", "文化", "运动", "女士"]
for(var i = 0; i < arr2.length; i++) {
	var odiv = document.createElement("a");
	odiv.className = "storenav";
	odiv.innerHTML = arr2[i];
	$(".share").append(odiv);
}

//商品
var shoplistStr = $("#shopList").html();
var plateStr = _.template(shoplistStr);
var oitem
$.ajax({
	url: "http://lc.shudong.wang/api_goods.php?goods_id=0&page=2&pagesize=18",
	type: 'get',
	success: function(data) {
		var obj = JSON.parse(data).data
		$.each(obj, function(index, vl) {
			var objStr = plateStr(vl);
			var domobj = $(objStr);
			$(".shopListCon").append(domobj);

		})
	}
})
	

//吸顶
$(window).scroll(function() {
	var foot = $(window).scrollTop();
	console.log(foot)
	if(foot > 50) {
		$(".switchover").css({
			"position": "fixed",
			"top": "-13px",
			"z-index": "999"
		});
		$(".seek-seek").hide()
		$("#backtop").show();
	} else {
		$(".switchover").css({
			"position": "",
			"top": "-24px",
			"left": "0px"
		});
		$("#backtop").hide();
		$(".seek-seek").show()
	}
})
$(window).scroll(function() {
	var foot = $(window).scrollTop();
	$("#backtop").click(function() {
		$(window).scrollTop(0);
	})
})

//尾巴
//微信
$(".weixin").mouseover(function() {
	$(".weixin").css({
		"opacity": "1"
	});
	$(".wechat-code").css({
		"display": "block",
		"opacity": "1"
	})
})
$(".weixin").mouseout(function() {
	$(".weixin").css({
		"opacity": "0.2"
	});
	$(".wechat-code").css({
		"display": "none",
		"opacity": " 0.2"
	})
})
//微博
$(".sina").mouseover(function() {
	$(".sina").css({
		"opacity": "1"
	});
})
$(".sina").mouseout(function() {
	$(".sina").css({
		"opacity": "0.2"
	});
})
//豆瓣
$(".douban").mouseover(function() {
	$("douban").css({
		"opacity": "1"
	});
})
$(".douban").mouseout(function() {
	$(".douban").css({
		"opacity": "0.2"
	});
})
//二维码
$(".download").mouseover(function() {
	$(".download").css({
		"opacity": "0.7"
	});
	$(".download-code").css({
		"display": "block",
	})

})
setTimeout(function() {
	$(".download").mouseout(function() {
		$(".download").css({
			"opacity": " 0.5"
		});
		$(".download-code").css({
			"display": "none",
		})
	})
}, 3000)


//小手
$(".hand1").mouseover(function(){
			$(".hand").animate({marginLeft:"-60px"},1000)
			$(".hand").animate({marginLeft:"-50px"},1000)
			$(".hand").animate({marginLeft:"-60px"},1000)
			$(".hand").animate({marginLeft:"-50px"},1000)
					
			})
