function animate(obj,json,callback){
		clearInterval(obj.timer);
		obj.timer=setInterval(
			function(){
				var isStop=true;
				for(var choose in json){
					if(choose=='opacity'){
						var now=parseInt(getStyle(obj,choose)*100);
					}else{
						var now=parseInt(getStyle(obj,choose));
					}
					var speed=(json[choose]-now)/5;
					speed=speed>0?Math.ceil(speed):Math.floor(speed);
					var judge=now+speed;
					if(choose=='opacity'){
						obj.style[choose]=judge/100;
					}else{
						obj.style[choose]=judge+'px';
					}
					if(json[choose]!=judge){
						isStop=false;
					}else{
						isStop=true;
					}
				}
				if(isStop==true){
					clearInterval(obj.timer);
					callback && callback();
				}
		},30);
	}
	function getStyle(obj,style){
		if(getComputedStyle(obj)){
			return getComputedStyle(obj)[style];
		}else{
			return obj.currentStyle[style];
		}
	}