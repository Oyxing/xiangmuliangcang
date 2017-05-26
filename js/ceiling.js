//吸顶
$(window).scroll(function() {
	var foot = $(window).scrollTop();
	console.log(foot)
	if(foot > 30) {
		$(".switchover").css({
			"position": "fixed",
			"top": "-13px",
			"z-index": "100",
			"clear":"both",
		});
		$(".seek-seek").fadeOut()
		$("#backtop").fadeIn();
	} else {
		$(".switchover").css({
			"position": "relative",
			"top": "-24px",
			"left": "0px",
			"clear": "both",	
		});
		$("#backtop").fadeOut();
		$(".seek-seek").fadeIn()
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
