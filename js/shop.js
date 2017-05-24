var templateStr = $("#shopping").html();
var tempStr = _.template(templateStr);
var token = localStorage.getItem("token")

$.ajax({
	url: "http://lc.shudong.wang/api_cart.php",
	type: 'get',
	headers:{"Token":token,},
	success: function(data) {
		var obj = JSON.parse(data).data;
				console.log(obj)
		$.each(obj, function(index, vl) {
			var dataStr = tempStr(vl);														console.log(dataStr)
			var domobj = $(dataStr);
			console.log(domobj)
			$(".carts").append(domobj);



		})



	}
})
