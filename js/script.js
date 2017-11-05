window.onload=slide;
function slide(){
	var sld=document.getElementById("slide"),
		pic=document.getElementById("picture"),
		img=pic.getElementsByTagName("img"),
		tit=document.getElementById("title"),
		titItm=tit.getElementsByTagName("span"),
		len=img.length,
		timer=null,
		index=0;
	// 鼠标移入切换项标题或轮播图片，清除定时器，轮播停止
	sld.onmouseover=function(){
		if(timer) clearInterval(timer);
	}
	// 鼠标移出切换项标题或轮播图片，轮播继续
	sld.onmouseout=function(){
		timer=setInterval(function(){
			changeImg();
			index++;
			if(index>=len) index=0;
		},1000);
	}
	sld.onmouseout();
	// 点击切换项标题，显示对应轮播图片
	for(var i=0; i<len; i++){
		titItm[i].id="img"+i;
		titItm[i].onclick=function(){
			index=this.id.slice(3);
			changeImg();
		}
	}
	// 遍历切换项标题与轮播图片，并设置切换项的样式及图片的显示或隐藏
	function changeImg(){
		for(var j=0; j<len; j++){
			img[j].style.display="none";
			titItm[j].className="";
		}
		img[index].style.display="block";
		titItm[index].className="current";
	}
}