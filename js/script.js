var sld=document.getElementById("slide"),
	pic=document.getElementById("picture"),
	img=pic.getElementsByTagName("img"),
	tit=document.getElementById("title"),
	titItm=tit.getElementsByTagName("span"),
	len=img.length,
	timer=null,
	index=0;
function slide(){
	sld.onmouseover=function(){
		if(timer) clearInterval(timer);
	}
	sld.onmouseout=function(){
		timer=setInterval(function(){
			changeImg();
			index++;
			if(index>=len) index=0;
		},1000);
	}
	sld.onmouseout();
	for(var i=0; i<len; i++){
		titItm[i].id="img"+i;
		titItm[i].onclick=function(){
			index=this.id.slice(3);
			changeImg();
		}
	}
}
function changeImg(){
	for(var j=0; j<len; j++){
		img[j].style.display="none";
		titItm[j].className="title-item";
	}
	img[index].style.display="block";
	titItm[index].className="title-item current";
}
slide();