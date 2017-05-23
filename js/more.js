//
		var shoplistStr = $("#shopList2").html();
		var plateStr = _.template(shoplistStr);
		var shoplistStr1 = $("#shopList3").html();
		var oitem
		var div = document.getElementById("main");	
			for (var i = 0; i <= 4;i++) {
			var odiv = document.createElement("div");
				odiv.className = "shopListCon";
			console.log(i)
	
				div.appendChild(odiv)
			}
			$.ajax({
				url: "http://lc.shudong.wang/api_goods.php?goods_id=0&page="+i+"&pagesize=5",
				type: 'get',
				success: function(data) {
					var obj = JSON.parse(data).data
					console.log(obj)
					$.each(obj,function(index, vl) {
						var objStr = plateStr(vl);

						var domobj = $(objStr);
						$(".shopListCon").append(objStr);
						
					})			
						for (var q = 0; q < $(".shopListCon .item").length; q++) {		
							switch (q%10){
							case 0:
							$(".shopListCon .item").eq(q).addClass("li_0")
									break;
							case 1:
							$(".shopListCon .item").eq(q).addClass("li_1")
									break;		
							case 2:
							$(".shopListCon .item").eq(q).addClass("li_2")
									break;		
							case 3:
							$(".shopListCon .item").eq(q).addClass("li_3")
									break;		
							case 4:
							$(".shopListCon .item").eq(q).addClass("li_4")
									break;		
							case 5:
							$(".shopListCon .item").eq(q).addClass("li_0")
									break;		
							case 6:
							$(".shopListCon .item").eq(q).addClass("li_1")
									break;		
							case 7:
							$(".shopListCon .item").eq(q).addClass("li_2")
									break;		
							case 8:
							$(".shopListCon .item").eq(q).addClass("li_3")
									break;
							case 9:
							$(".shopListCon .item").eq(q).addClass("li_4")
									break;		
							}			
						}
						for(var k = 0;k < $(".shopListCon .item").length;k++){
							if(k%10 == 0){
								$(".styl_0 .li_0 .goodsInfo").css({"width":"460px","height":"460px"})
							}else if(k%10 == 7){
								$(".styl_1 .li_2 .goodsInfo").css({"width":"460px","height":"460px"})
							}
						}
					}
				})

				for (var j = 0; j < $(".shopListCon").length; j++) {
					if(j%2 == 0){
						$(".shopListCon").eq(j).addClass("styl_0")
					}else{
						$(".shopListCon").eq(j).addClass("styl_1")			
					}								
				}
		