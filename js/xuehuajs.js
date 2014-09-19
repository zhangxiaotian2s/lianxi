(function($){
$.fn.snow =function(options){
  var $floatsnow =  $('<div class="snowbox" />').css({'position': 'absolute', 'top': '-50px'}).html('我爱你 I Love You');
  var documentHeight=$(document).height();
  var documentWidth =$(document).width();
  var defaults={
	   maxSize : 50,
	   minSize : 20, 
	   newOn:1000,
	   floatsnowColor:"#fff"  
	  }
	 options=$.extend({},defaults,options) ;
	 
 var interval= setInterval(function(){
	  var startPositionLeft = Math.random()*documentWidth-100,
	      startOpacity      = Math.random(),
		  floatsnowSize     = Math.random()*options.maxSize + options.minSize,
		  endPositionTop		= documentHeight - 70,
		  endPositionLeft		= startPositionLeft - 100 + Math.random() * 500,
		  durationFall		= documentHeight * 10 + Math.random() * 5000;

	   $floatsnow.clone().appendTo('body').css({
		    left:startPositionLeft,
			opacity:startOpacity,
			"font-size":floatsnowSize,
			color: options.floatsnowColor
		   }).animate({
			    top: endPositionTop,
				left: endPositionLeft,
				opacity: 0.2
			   },durationFall,'linear',function(){
				   $(this).remove()
			})
	  
	  },options.newOn)	 
	 	
	}
})(jQuery);