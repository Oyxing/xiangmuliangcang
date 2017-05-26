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
$(".ul1 li").mouseout(function() {
	$('.ul2 li').eq(i).show().siblings().hide();
})
////搜索
	console.log($(".seek"))
	var x = 1;
	$(".seek").click(function() {
		$seektxt = $(".seek-seek1").val()
		if(x == 1) {
			$(".seek-seek").animate({marginLeft: "755px"}, 1000);
			x = 0
		} else  if(x == 0 && $seektxt == ""){	
				$(".seek-seek").animate({marginLeft: "959px"}, 1000);
				x = 1;
		}else{
				search($seektxt)
		}
	})		
	function search(text){
			$seektxt = $(".seek-seek1").val();
			$(".seetshop").text(">搜索结果>"+text)
			$(".shopListCon").children().remove();
			$(".shopListCon").children().remove();
				var shoplistStr1 = $("#shopList1").html();
				var plateStr1 = _.template(shoplistStr1);
				var oitem
				$.ajax({
					type: "get",
					url: "http://lc.shudong.wang/api_goods.php",
					dataType: "json",
					data: {search_text: text,},
					success: function(data) {		
					console.log(data.code)//0成功
						var obj = data.data;
					if(data.code == 0) {
						$.each(obj, function(index, vl) {
								var objStr = plateStr1(vl);
								console.log(objStr)
								var domobj = $(objStr);
								$(".shopListCon").append(domobj);
							})
							var div = document.createElement("div");
							div.className="clr";
							$(".shopListCon").append(div);
								}else{
								alert("没有此商品")
							}
						}
					})	
					$(".seek-seek1").val("")
	}
	function chuan(text) {
		var thisURL = document.URL;
		var  getval =thisURL.split('?')[1];
		var showval= getval.split("=")[1];
		var zhuan=decodeURI(showval);
		$(".seek-seek1").text(zhuan);
			search(zhuan);
				}
//导航
//			http://lc.shudong.wang/api_cat.php
//创建div


//商店


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
