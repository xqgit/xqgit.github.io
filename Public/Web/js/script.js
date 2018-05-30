//鍥剧墖婊氬姩  
jQuery(function($){
	$('#demo3').slideBox({
		duration : 0.3,//婊氬姩鎸佺画鏃堕棿锛屽崟浣嶏細绉?
		easing : 'linear',//swing,linear//婊氬姩鐗规晥
		delay : 5,//婊氬姩寤惰繜鏃堕棿锛屽崟浣嶏細绉?
		hideClickBar : false,//涓嶈嚜鍔ㄩ殣钘忕偣閫夋寜閿?
		clickBarRadius : 10
	});
});

//鍥剧墖鏃犵紳婊氬姩
$.fn.imgscroll = function(o){
	var defaults = {
		speed: 40,
		amount: 0,
		width: 1,
		dir: "left"
	};
	o = $.extend(defaults, o);
	
	return this.each(function(){
		var _li = $("li", this);
		_li.parent().parent().css({overflow: "hidden", position: "relative"}); //div
		_li.parent().css({margin: "0", padding: "0", overflow: "hidden", position: "relative", "list-style": "none"}); //ul
		_li.css({position: "relative", overflow: "hidden"}); //li
		if(o.dir == "left") _li.css({float: "left"});
		
		//鍒濆澶у皬
		var _li_size = 0;
		for(var i=0; i<_li.size(); i++)
			_li_size += o.dir == "left" ? _li.eq(i).outerWidth(true) : _li.eq(i).outerHeight(true);
		
		//寰幆鎵€闇€瑕佺殑鍏冪礌
		if(o.dir == "left") _li.parent().css({width: (_li_size*3)+"px"});
		_li.parent().empty().append(_li.clone()).append(_li.clone()).append(_li.clone());
		_li = $("li", this);

		//婊氬姩
		var _li_scroll = 0;
		function goto(){
			_li_scroll += o.width;
			if(_li_scroll > _li_size)
			{
				_li_scroll = 0;
				_li.parent().css(o.dir == "left" ? { left : -_li_scroll } : { top : -_li_scroll });
				_li_scroll += o.width;
			}
				_li.parent().animate(o.dir == "left" ? { left : -_li_scroll } : { top : -_li_scroll }, o.amount);
		}
		
		//寮€濮?
		var move = setInterval(function(){ goto(); }, o.speed);
		_li.parent().hover(function(){
			clearInterval(move);
		},function(){
			clearInterval(move);
			move = setInterval(function(){ goto(); }, o.speed);
		});
	});
};

//鍥剧墖鑷€傚簲瀹藉害
    function setImgMiddle(img) {  
        var $img = $(img),  
            $panel = $(img).parent();//鍥剧墖瀹瑰櫒  
  
        var img_width = $img.width(),img_height = $img.height(),//鍥剧墖瀹介珮  
            panel_width = $panel.width(), panel_height = $panel.height(); //鍥剧墖瀹瑰櫒瀹介珮  
  
        if(panel_width/panel_height < img_width/img_height){  
            $img.width(panel_width);  
            $img.css('margin-top', (panel_height - $img.height()) * 0.5);  
        }else{  
            $img.height(panel_height);  
            $img.css('margin-left', (panel_width - $img.width()) * 0.5);  
        }  
        $img.fadeIn(100);  
    }  