	
//放大镜api
var goods_id;
var foot
		function goods(text) {
				var thisURL = document.URL;
				goods_id =thisURL.split('?')[1];
	
				var shoplistStr = $("#magnify").html();
				var plateStr = _.template(shoplistStr);
				var oitem
				$.ajax({
					url: "http://lc.shudong.wang/api_goods.php?goods_id="+33704,	
					type: 'get',
					data:{"goods_id":goods_id,},
					success: function(data) {
					var obj = JSON.parse(data).data
						$.each(obj, function(index, vl) {
							var objStr = plateStr(vl);
							var domobj = $(objStr);
							$("body").append(domobj);
							
						})
					}
				})
				var shoplistStr1 = $("#magnify1").html();
				var plateStr1 = _.template(shoplistStr1);

				$.ajax({
					url: "http://lc.shudong.wang/api_goods.php?goods_id="+33704,	
					type: 'get',
					data:{"goods_id":goods_id,},
					success: function(data) {
					var obj = JSON.parse(data).data
						$.each(obj, function(index, vl) {
							console.log(vl)
							var objStr1 = plateStr1(vl);
							var domobj1 = $(objStr1);
							$(".maga-zi-1").append(domobj1);
						localStorage.setItem("goods_name",obj[0].goods_name)
						$(".seetshop").html(">"+localStorage.getItem("goods_name"))
						})
					}
				})
			}
		
//放大镜移动
			var small = document.getElementById("maga-tu");
			var fdj = document.getElementById("maga-mirror");
			var bej = document.getElementById("maga-mirr");
			$("#maga-tu").mouseover(function(){
				$("#maga-mirr").show()
				$("#maga-mirror").show()
			})
			$("#maga-tu").mouseout(function(){
				$("#maga-mirr").hide()
				$("#maga-mirror").hide()
			})
			/*移动事件
			* 鼠标移动 放大镜跟着移动，鼠标在放大镜中心 X Y是放大镜相对于小图的left top
			*/
		$(window).scroll(function() {
					 foot = $(window).scrollTop();
							console.log(foot)
						})	
		$("#maga-tu").mousemove(function(){
			var e=event||arguments[0];
			var x=e.clientX-small.offsetLeft-fdj.offsetWidth/2;
			var y=e.clientY-small.offsetTop-fdj.offsetHeight/2;
			if(x<=0){
				$("maga-mirror").css({"left":"0px"})
			}else if(x>=small.offsetWidth-fdj.offsetWidth){
				fdj.style.left=small.offsetWidth-fdj.offsetWidth+"px";
			}else{
				fdj.style.left=x+"px";
			}	
			if(y<=0){
				fdj.style.top=0+"px";
			}else if(y>=small.offsetHeight-fdj.offsetHeight){
				fdj.style.top=small.offsetHeight-fdj.offsetHeight+"px";
			}else{
				fdj.style.top=y+"px";
			}
			var wk=350/350;
			var hk=350/350;
			bej.style.backgroundPosition=wk*(-fdj.offsetLeft)+"px"+" "+hk*(-fdj.offsetTop)+"px";
			}
		)
			



