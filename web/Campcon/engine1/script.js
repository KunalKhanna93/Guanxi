// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 5.1
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_photo(c,f,j){var d=jQuery,l=d("ul",j),j=j.parent(),g=f.length,u=c.imagesCount||30,m=30,e=80,h=2*c.width/100;var a=d("<div>").css({position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden",backgroundColor:"#DDDDDD"}).appendTo(j);var n=d("<div>").css({position:"absolute",top:0,left:0,width:"100%",height:"100%",backgroundColor:"rgba(0,0,0,0.6)",zIndex:4}).appendTo(a);var b=a.width()/c.width,p=Math.max(u,f.length);for(var q=0,o=0;q<p;q++){if(o>f.length){o-=f.length}d(f[o]).clone().appendTo(a);o++}var r=a.children("img");d.support.transition=(function(){var i=document.body||document.documentElement,k=i.style;return k.transition!==undefined||k.WebkitTransition!==undefined||k.MozTransition!==undefined||k.MsTransition!==undefined||k.OTransition!==undefined})();function s(k,i){return parseFloat(Math.random()*(i-k)+k)}function t(E,z,i,w,A,k){if(w&&z){var F=e,D=50-F/2,C=50-F/2,v=0,B=5}else{var F=m,D=s(-10,90),C=s(-10,90),v=s(-30,30),B=z?5:(i?3:2)}E.css({position:"absolute",zIndex:B,border:h*A+"px solid white"});if(d.support.transition){E.css({top:C+"%",left:D+"%",marginLeft:-h*A,marginTop:-h*A,width:F+"%",height:F+"%",transform:"rotate("+v+"deg)",transition:"all "+k+"ms ease-in-out"})}else{E.animate({top:C+"%",left:D+"%",marginLeft:-h*A,marginTop:-h*A,width:F+"%",height:F+"%"},k)}}r.each(function(i){t(d(this),c.startSlide==i,false,true,b,0)});this.go=function(i,v){if(window.XMLHttpRequest){b=a.width()/c.width;var k=c.duration*0.5;r.each(function(w){t(d(this),i==w,v==w,false,b,k)});if(d.support.transition){n.css({opacity:0,transition:"all "+k+"ms ease-in-out"})}else{n.fadeOut(k)}setTimeout(function(){r.each(function(w){t(d(this),i==w,v==w,true,b,k)});if(d.support.transition){n.css("opacity",1)}else{n.fadeIn(k)}},k)}else{l.stop(true).animate({left:(i?-i+"00%":(/Safari/.test(navigator.userAgent)?"0%":0))},c.duration,"easeInOutExpo")}return i}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 5.1
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery("#wowslider-container1").wowSlider({effect:"photo",prev:"",next:"",duration:20*100,delay:20*100,width:1300,height:200,autoPlay:true,playPause:false,stopOnHover:false,loop:false,bullets:true,caption:false,captionEffect:"slide",controls:false,onBeforeStep:function(i,c){return (i+1 + Math.floor((c-1)*Math.random()))},images:0});