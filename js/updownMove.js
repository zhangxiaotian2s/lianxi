(function($) {
	$.fn.updownMove=function(options,scrollid){
		var scrollmain =$(scrollid)
		Defaults = {
			speed:1000,
			isauto:0,
			autotimer:2000,
			direction :'down',
			boxchild:'li',
			upbtn:'.upbtn',
			downbtn:'.downbtn' 
			}	
		options=$.extend({},Defaults,options)
		
	var timer;
	//自上而下
	function downscrollfn(){
		scrollmain.children(options.boxchild).last().hide().prependTo(scrollid).slideDown(options.speed)
		}
	//自下而上	
	function upscrollfn(){
		  scrollmain.children(options.boxchild).eq(0).slideUp(options.speed,function(){
          $(this).appendTo(scrollid).show()  
		})	
	}
	//自动的处理
	function autoactionfn(){
		if(options.isauto){
		if(options.direction=='up'){
		timer= setInterval(upscrollfn,options.autotimer)		
		}
		else if(options.direction=='down'){
		 timer= setInterval(downscrollfn,options.autotimer)	
		}	
		}
	}
	//向下按纽处理
	$(options.downbtn).bind('click',function(){
		downscrollfn()
	})
	//向上按纽处理
	$(options.upbtn).bind('click',function(){
		upscrollfn()
	})
	//暂停的处理
	function hoverstopfn(element){
		$(element).hover(function(){
		clearInterval(timer)	
		},function(){
		autoactionfn()
	   })	
	  }
	 hoverstopfn(options.upbtn)
	 hoverstopfn(options.downbtn)
	 hoverstopfn(scrollid)
	//自动生效的处理
	
		autoactionfn()

	
	}
})(jQuery)