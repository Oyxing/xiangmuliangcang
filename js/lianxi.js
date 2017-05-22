
		var shoplistStr = $("#shopList2").html();
		var plateStr = _.template(shoplistStr);
		var shoplistStr1 = $("#shopList3").html();
		console.log(shoplistStr1)
		var plateStr1 = _.template(shoplistStr);
		console.log(shoplistStr1)
		var oitem
		var x ;
		function page(page) {
			$.ajax({
				url: "http://lc.shudong.wang/api_goods.php?goods_id=0&page="+page+"&pagesize=5",
				type: 'get',
				success: function(data) {
					var obj = JSON.parse(data).data
					console.log(obj)
					$.each(obj,function(index, vl) {
						var objStr = plateStr(vl);
						console.log(objStr);
						var domobj = $(objStr);
//						var objStr = plateStr1(objStr );
//						var domobj = $(objStr);
						$(".shopListCon").append(objStr);
						$("#main").append($(".shopListCon").append(objStr));
							page = 3;
							return;
					})
//					$("#main").append()


					for (var i = 0; i < $(".shopListCon").length+2; i++) {
						if(i%2 == 0){
							$(".shopListCon").eq(i).addClass("styl_0")
						}else{
							$(".shopListCon").eq(i).addClass("styl_1")	
						}					
					}
//					
//					for (var j = 0; j > $(".shopListCon .item").length; j++) {	
//						console.log(j)
//						for (var k=0;k > $(".shopListCon .item").length; k++) {
//						console.log(k)
//							$(".shopListCon .item").eq(k).addClass("li_"+j)
//						if(j == 5){j=0}
//						}
//
//					}
					$(".shopListCon .item").eq(0).addClass("li_0")
					$(".shopListCon .item").eq(1).addClass("li_1")
					$(".shopListCon .item").eq(2).addClass("li_2")
					$(".shopListCon .item").eq(3).addClass("li_3")
					$(".shopListCon .item").eq(4).addClass("li_4")
					$(".shopListCon .item").eq(5).addClass("li_0")
					$(".shopListCon .item").eq(6).addClass("li_1")
					$(".shopListCon .item").eq(7).addClass("li_2")
					$(".shopListCon .item").eq(8).addClass("li_3")
					$(".shopListCon .item").eq(9).addClass("li_4")
					$(".shopListCon .item").eq(10).addClass("li_0")
					$(".shopListCon .item").eq(11).addClass("li_1")
					$(".shopListCon .item").eq(12).addClass("li_2")
					$(".shopListCon .item").eq(13).addClass("li_3")
					$(".shopListCon .item").eq(14).addClass("li_4")
					$(".shopListCon .item").eq(15).addClass("li_0")
					$(".shopListCon .item").eq(16).addClass("li_1")
					$(".shopListCon .item").eq(17).addClass("li_2")
					$(".shopListCon .item").eq(18).addClass("li_3")
					$(".shopListCon .item").eq(19).addClass("li_4")
					$(".shopListCon .item").eq(20).addClass("li_0")
					$(".shopListCon .item").eq(21).addClass("li_1")
					$(".shopListCon .item").eq(22).addClass("li_2")
					$(".shopListCon .item").eq(23).addClass("li_3")
					$(".shopListCon .item").eq(24).addClass("li_4")
					console.log($(".shopListCon .item").eq(1))
					console.log($(".item").eq(1))
					$(".goodsInfo").eq(0).css({"width":"460px","height":"460px"})
					$(".goodsInfo").eq(7).css({"width":"460px","height":"460px"})	
					$(".goodsInfo").eq(10).css({"width":"460px","height":"460px"})
					$(".goodsInfo").eq(17).css({"width":"460px","height":"460px"})			
					$(".goodsInfo").eq(20).css({"width":"460px","height":"460px"})			
				}
				})
			}
		page(2);
		