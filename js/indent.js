// 添加商品
var addtr 
var num
var price
var extend
var add1;
var minus;
var moneycart;
var carbox

//调用加减的方法

var indentStr = $("#indent").html();

var indStr = _.template(indentStr);
var token = localStorage.getItem("token")
console.log(token)
	$.ajax({
			url: "http://lc.shudong.wang/api_cart.php",
			type: 'get',
			beforeSend: function(request) {
				request.setRequestHeader("token",token)
			},
			success: function(data) {
				var obj = JSON.parse(data).data;
				console.log(obj)
				$.each(obj, function(index, vl) {
					var dataStr = indStr(vl);														
					var domobj = $(dataStr);
					$(".indent-shop").append(domobj);
				})
					trolley()
					addCar()
			}
	})
function trolley(){
	$(".add1").click(function(){
			addtr = $(this).parents("tr");
			price = parseInt(addtr.find(".price").text());
			extend = addtr.find(".extend");
			num  = parseInt(addtr.find(".num").val());
			moneycart = parseInt($(".money-cart").text());
			carbox = addtr.find(".car_box");
		  	num++;
		  	addtr.find(".num").val(num);
		  	//小计
		 	extend = addtr.find(".extend").text(num*price);
			//按键
			//订单和
			if(carbox.prop("checked") == true){	
					addAll()
				}
		})
	$(".minus").click(function(){
		minustr = $(this).parents("tr");
		price = parseInt(minustr.find(".price").text());
		extend = minustr.find(".extend");
		num = parseInt(minustr.find(".num").val());
		moneycart = parseInt($(".money-cart").text())
		carbox = minustr.find(".car_box");
	  		num--;	
	 	if(num <= 0){
	  		minustr.find(".num").val(0);
	 		extend = addtr.find(".extend").text(0);
	 	}else{	
	  		minustr.find(".num").val(num);
			addtr.find(".extend").text(num*price);			
	  		}
	 	if(carbox.prop("checked") == true){
				addAll()			
		}		
	})  
	
	
	var x = 1;	
	$(".cartall").click(function(){
		var extend1 = $(this).parents("table");
		console.log(extend1)
		var	carBox = extend1.find(".car_box");
		console.log(carBox)
		var prrce = 0;
		if(x == 1){
			$(".car_box").prop("checked",true);
			for (var i = 0; i < carBox.length; i++){	
				proce = parseInt(extend1.find(".extend").eq(i).text());	
				console.log(proce)
				prrce += proce;
			}	
			$(".money-cart").text(prrce);
			x=0;
		}else{
			$(".car_box").prop("checked",false);
			x=1
			$(".money-cart").text(0.00);	
		}	
	})
}
function addAll(){
	
	price += num*price;
   	$(".money-cart").text(price);  	
}

function addCar(){
	$(".car_box").click(function(){
		var carboxFar = $(this).parents("tr");
		var carboxCheck = carboxFar.find(".car_box")
		var exentFar = carboxFar.find(".extend");
		var exentText = parseInt(exentFar.text());
		var moneycartTEXT = parseInt($(".money-cart").text());
		if(carboxCheck.prop("checked") == true){
			moneycartTEXT += exentText;
			$(".money-cart").text(moneycartTEXT)
		}else if(carboxCheck.prop("checked") == false){
			console.log(0);
			moneycartTEXT -= exentText;
			$(".money-cart").text(moneycartTEXT)
		}
	})
}