$(function(){
	
	var li = $('.mess').find('li');
		
		
	var mess = {
		random: function(low, up){
			return Math.floor((Math.random()*(low-up+1))+up);
		},
		css: function(){
			var rotate = this.random(-20, 20),
				zindex = this.random(0, li.length),
				degrees = 'rotate('+rotate+'deg)';
			return {'degrees': degrees, 'zindex': zindex }
		},
		degrees: function(element){
			var random = this.css();
			$(element).css({
				'-webkit-transform': random.degrees,
				'-moz-transform': random.degrees,
				'-o-transform': random.degrees,
				'z-index': random.zindex
			});
		},
		animate: function(element, x, y){
			$(element).animate({
				top: y,
				left: x
			}, 500);
		}
	}
	
	li.each(function(){
		mess.degrees($(this));
	});
			
	$('.make').toggle(function(){
		li.each(function(){
			var t = $(this), x = mess.random(-400, 400), y = mess.random(-120, 120);
			mess.animate(t, x, y);
			mess.degrees(t);
		});
		$(this).text('Clean Up');
	}, function(){
		li.each(function(){
			mess.animate($(this), 0, 0);
		});
		$(this).text('Make Mess');
		return false;
	});
	
			
});