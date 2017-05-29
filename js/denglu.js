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
			$(".comm1").hide()
			$(".shop1").hide()
			$(".loginbtn").remove()
			$(".regbtn").remove()
			$(".login-reg-btn").append(oA)
			$(".login-reg").append(userImg);
			$(".login-reg").append(ospan);
			$(".userspan").html(localStorage.getItem("username"));
			$(".userImg").attr("src","http://imgs-qn.iliangcang.com/ware/userhead/mid/3/155/634/155634680.jpg?t=1495782091")
			user()
			$(".userout").click(function(){
				localStorage.clear();
				location.href = "../liangcang.html"
				$(".login-reg").remove()
				$(".usermage").remove()
				$(".comm").hide()
				$(".shop2").hide()
				$(".comm1").show()
				$(".shop1").show()

				$(".login-reg-btn").append(ologin);
				$(".login-reg-btn").append(oreg);
				$(".loginbtn").html("登录");
				$(".regbtn").html("注册");				
				$(".regbtn").attr("href","zhuce.html");		
				$(".loginbtn").attr("href","denglu.html");	
				$(".loginbtn").css({"color":"white","cursor": "pointer"})
				$(".regbtn").css({"color":"white","cursor": "pointer","margin-left": "16px"})

			})
		}
				
		$(".login-reg").css({"color":"white","cursor": "pointer","height": "44px","display": "inline-block"})
	
		function user(){
			
				$(".login-reg-btn").mousemove(function(){
				$(".usermage").show()
				
			})
				$(".login-reg-btn").mouseleave(function(){
					$(".usermage").hide()
					
				})

			}
