/**
 * js网页雪花效果jquery插件 
 * 懒人建站 www.51xuediannao.com   整理
 * @see http://workshop.rs
 */
(function($){
	$.fn.snow = function(options){
	        //定义雪花的DIV
			var $flake 			= $('<div class="snowbox" />').css({'position': 'absolute', 'top': '-50px'}).html('&#10052;'),
				documentHeight 	= $(document).height(),// 获得屏幕的高度
				documentWidth	= $(document).width(), //获得屏幕的宽度
				defaults		= {
									minSize		: 10,		//雪花的最小尺寸
									maxSize		: 20,		//雪花的最大尺寸
									newOn		: 1000,		//雪花出现的频率
									flakeColor	: "#FFFFFF"	
 								},
				options			= $.extend({}, defaults, options);  //转换默认值
			var interval		= setInterval( function(){
				var startPositionLeft 	= Math.random() * documentWidth - 100, //一个100PX 到 屏幕宽度-100px的随机数
				 	startOpacity		= 0.5 + Math.random(),                 //随机的透明值
					sizeFlake			= options.minSize + Math.random() * options.maxSize,// 设置的随机尺寸
					endPositionTop		= documentHeight - 40,                              //结束时的高度
					endPositionLeft		= startPositionLeft - 100 + Math.random() * 500,    //到右侧结束时随机位置
					durationFall		= documentHeight * 10 + Math.random() * 5000;           
				$flake.clone().appendTo('body').css({
							left: startPositionLeft,
							opacity: startOpacity,
							'font-size': sizeFlake,
							color: options.flakeColor
						}).animate({
							top: endPositionTop,
							left: endPositionLeft,
							opacity: 0.2
						},durationFall,'linear',function(){
							$(this).remove()
						}
					);
			}, options.newOn);
	};
	
})(jQuery);