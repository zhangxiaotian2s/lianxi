// JavaScript Document
function getStyle(obj,attr){
	if(obj.currentStyle){
	
	return obj.currentStyle[attr]
	}
	else{
		
	return getComputedStyle(obj,false)[attr]
	
	}

}

function startMove(obj,attr,Target){
	var timer= null;
	
	clearInterval(obj.timer)
	obj.timer=setInterval(function(){
		var iSpeed=0;
		var iCur=0;
		if(attr=='opacity'){
			iCur=parseInt(parseFloat(getStyle(obj,attr))*100)
			}
			else{
				
		  iCur=parseInt(getStyle(obj,attr)	)	
		 }
		iSpeed=(Target -iCur)/8
		iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
		
		if(iCur==Target){
			clearInterval(obj.timer)
			
			}
		else{
			if(attr=='opacity'){
				
			obj.style.filter='alpha(opacity:'+(iCur+iSpeed)+')'
			obj.style.opacity=(iCur+iSpeed)/100
				}
			else{
				obj.style[attr]=iCur+iSpeed+'px'
				
				}
			
			
			}
		
		
		},30)

	
	}
