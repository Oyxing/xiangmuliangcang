		var code = localStorage.getItem("code");
		var username = localStorage.getItem("username");
		var ologin = document.createElement("a");
		var oreg = document.createElement("a");
		var oA = document.createElement("a");
		var userImg = document.createElement("img");
		var userImg = document.createElement("img");
		var	ospan = document.createElement("span");
		ospan.className = "userspan"
		userImg.className = "userImg"
		ologin.className = "loginbtn";
		oreg.className = "regbtn";
		oA.className = "login-reg";
		$(".login-reg-btn").css({"color":"white","cursor": "pointer"})
		
				if(code == 0){
			$(".login-reg-btn").append(oA)
			$(".login-reg").append(userImg);
			$(".login-reg").append(ospan);
			$(".userspan").html(localStorage.getItem("username"));
			$(".userImg").attr("src","../img/775.jpg")
			user()
			$(".userout").click(function(){
						$(".login-reg").remove()
						$(".usermage").remove()
						$(".login-reg-btn").append(ologin);
						$(".login-reg-btn").append(oreg);
						$(".loginbtn").html("登录");
						$(".regbtn").html("注册");				
						$(".regbtn").attr("href","dome/zhuce.html");		
						$(".loginbtn").attr("href","dome/denglu.html");	
						$(".loginbtn").css({"color":"white","cursor": "pointer"})
						$(".regbtn").css({"color":"white","cursor": "pointer","margin-left": "16px"})
		
			})
		}
	$(".login-reg").css({"color":"white","cursor": "pointer","height": "44px","display": "inline-block"})
	
		function user(){
				$(".login-reg").mouseover(function(){
				$(".usermage").show()
			})
			setTimeout(function(){
						$(".login-reg").mouseout(function(){
						$(".usermage").hide()
					})
			},1000)	
			}
