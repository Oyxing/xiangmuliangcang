
var goods_id
var num
$(".join").click(function(){
			$("#succe").show();
		var goodsUrl = document.URL;
		var goods_one = goodsUrl.substring(goodsUrl.indexOf("?"),goodsUrl.indexOf("="))[1];
		var goods_end = goodsUrl.substring(goodsUrl.indexOf("="))[0];	
		goods_id =  goodsUrl.substring(goodsUrl.indexOf(goods_one),goodsUrl.indexOf(goods_end));
			shopJion()

		  	console.log(goods_id)
					
		})

$(".succe-die").click(function(){
			$("#succe").hide();
		})
	
// 添加商品
  $(".plus").click(function(){
 	 num = $(".add1").text()
  	num++
  	$(".add1").text(num);

  })
   $(".subtr").click(function(){
  		num--;	
 	if(x >= 0){
  		$(".add1").text("1")	
  		}else{
  		$(".add1").text(num)
  		}
  })
//加入购物车

var shoplateStr = $("#shopping").html();
var shopStr = _.template(shoplateStr);
var token = localStorage.getItem("token")
function shopJion(){
		$.ajax({
			url: "http://lc.shudong.wang/api_cart.php",
		type: 'post',
		beforeSend: function(request) {
				request.setRequestHeader("token",token)
			},
		data : {"goods_id":goods_id,
				"number":num,},
		success: function(data) {
			var obj = JSON.parse(data).data;
			if(code == 0){
				Jion();	
			}else{
				alert("加入失败")
				}
			}
		})

}
//添加到页面上
function Jion(){
		$.ajax({
			url: "http://lc.shudong.wang/api_goods.php",
			type: 'get',
			data : {"goods_id":goods_id,"number":num,},
			success: function(data) {
				var obj = JSON.parse(data).data;
				$.each(obj, function(index, vl) {
					var dataStr = shopStr(vl);														
					var domobj = $(dataStr);
					$(".carts").append(domobj);
				})
			}
		})
}
	
	$.ajax({
			url: "http://lc.shudong.wang/api_cart.php",
			type: 'get',
			beforeSend: function(request) {
				request.setRequestHeader("token",token)
			},
			data : {"goods_id":goods_id,"number":num,},
			success: function(data) {
				console.log(goods_id)
				console.log(num)
				var obj = JSON.parse(data).data;
				$.each(obj, function(index, vl) {
					var dataStr = shopStr(vl);														
					var domobj = $(dataStr);
					$(".carts").append(domobj);
				})
			}
		})