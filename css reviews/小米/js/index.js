
window.onload=function(){
	let imgBox=$('.banner-pic')[0];
	let imgs=$('li',imgBox);
	let imgw=parseInt(getComputedStyle(imgBox,null).width);
	let btnLeft=$('.banner-pic-left')[0];
	let btnRight=$('.banner-pic-right')[0];
	let bannerBox=$('.banner-box')[0];
	let quanBox=$('.banner-pic-bottom')[0];
	let quans=$('li',quanBox);
	let aside=$('aside')[0];
	let asides=$('a',aside);
	let aside_1=$('.aside-1');
	let star_btnleft=$('.icon-fanye')[0];
	let star_btnright=$('.icon-fanye1')[0];
	let start_icon1=$('.start-icon1')[0];
	let star_1=$('.start-1')[0];
	let stars=$('li',star_1);
	let star_box=$('.start-box')[0];
	// star_1.innerHTML+=star_1.innerHTML;
	let star_1w=parseInt(getComputedStyle(star_1,null).width)
	// star_1.style.width=`${star_1w*2}px`;
	let floors=$('.floor');
	let head_gouwu=$('.head-right2')[0];
	console.log(head_gouwu)
	let gouwu_xia=$('.gouwu-xia')[0];
    
    let logo=$('.logo-zi')[0];
    let logo_lis=$('li',logo);
    console.log(logo_lis)
    let logo_aside=$('.logo-aside')


	let nei1_Btleft=$('.nei-fanye-left')[0];
	let nei1_Btright=$('.nei-fanye-right')[0];
	let nei_pic1=$('.nei-pic1')[0];
	let nei_1=$('.nei-1',nei_pic1);
	let nei1_quan=$('.nei-pic1-quan1');

	let nei2_Btleft=$('.nei-fanye-left')[1];
	let nei2_Btright=$('.nei-fanye-right')[1];
	let nei_pic2=$('.nei-pic1')[1];
	let nei_2=$('.nei-1',nei_pic2);
    let nei_quan2=$('.nei-pic1-quan2');

	console.log(nei1_quan)
	console.log(star_1);
	let t;
	let now=0;
	let next=0;
	let flag=true;
	/////////////////////////////////////购物车下拉/////////////////
	head_gouwu.onmouseover=function(){
        gouwu_xia.style.display='block';
	}
	head_gouwu.onmouseout=function(){
        gouwu_xia.style.display='none';
	}

	t=setInterval(move, 3000);
	///////////////////logo下栏出现///////////////////////////
	for(let i=0;i<logo_lis.length;i++){
		logo_lis[i].onmouseover=function(){
			logo_aside[i].style.display='block';
		}
	
		logo_lis[i].onmouseout=function(){
			logo_aside[i].style.display='none';
		}
	}
	
	////////////////////////////banner轮播///////////////////////////
	function move(){	
        next++;
        if(next==imgs.length){
        	next=0;
        }  

	        imgs[next].style.left=`${imgw}px`;
	        animate(imgs[now],{left:-imgw});//jason对象不需要加单位，自动处理       
            animate(imgs[next],{left:0},function(){
        	   flag=true;
             });
	        quans[now].style.background='#938C83';
	        quans[now].style.border='1px solid #B4AFA8';
	        
	        quans[next].style.background='#F9F2E9';
	        quans[next].style.border='1px solid #95918C';
	        now=next;
	}
	function moveL(){	
        next--;
        
        if(next==imgs.length){
        	next=imgs.length-1;
        } 
        imgs[next].style.left=`${-imgw}px`;
        animate(imgs[now],{left:imgw});//jason对象不需要加单位，自动处理
        animate(imgs[next],{left:0},function(){
        	flag=true;
        });
	    quans[now].style.background='#938C83';
	    quans[now].style.border='1px solid #B4AFA8';

        quans[next].style.background='#F9F2E9';
	    quans[next].style.border='1px solid #95918C';

        now=next;

	}
	bannerBox.onmouseover=function(){
		clearInterval(t);
	}
	bannerBox.onmouseout=function(){
		t=setInterval(move,3000);
	}
    
	btnRight.onclick=function(){		
		if(flag){					
			move();//flag=true;
			flag=false;
		}		
	}
	btnLeft.onclick=function(){
		if(now==0){
			return;
		}
		if(flag){
			moveL();
			flag=false;						
	   }	
	}
	////////////////////////点击小圈对应的图片出现//////////////////////
	for(let i=0;i<quans.length;i++){
		quans[i].onclick=function(){
			if(now==i){
				return;
			}
			imgs[i].style.left=`${imgw}px`;
			animate(imgs[i],{left:0});
			quans[i].style.background='#F9F2E9';
	        quans[i].style.border='1px solid #95918C';
			
			animate(imgs[now],{left:-imgw});
			quans[now].style.background='#938C83';
	        quans[now].style.border='1px solid #B4AFA8';
			now=next=i;
		 } 
		}
	//////////////侧边栏出现和隐藏////////////////////////
	for(let i=0;i<asides.length;i++){
		asides[i].onmouseover=function(){
            aside_1[i].style.display='block';
		}
		asides[i].onmouseout=function(){
            aside_1[i].style.display='none';
		}
	}
	///////////////小米明星单品效果/////////////////////////////////
	/*1    2    3    4
	 -w    -2w  -3w   -4w*/ 
	let t1=setInterval(star_move,5000);
	let i=0;
	function star_move(){ 		
		if(star_1.offsetLeft==`${i}`*-1240){
		    star_moveR();
		    // i++;
	     }
	     if(star_1.offsetLeft==-1240){
		    star_moveL();		   
	     }	     
	}
	function star_moveR(){
		if(i==1){
			return;
		}
		i++;
	    animate(star_1,{left:-1240*`${i}`});
	    star_btnright.style.color='#E0E1E4';
	    star_btnleft.style.color='#B7B2B0';
	}
    function star_moveL(){
    	if(i==0){
			return;
		}
		i--;
		animate(star_1,{left:1240*`${i}`})
		star_btnright.style.color='#B7B2B0';
		star_btnleft.style.color='#E0E1E4';
		    	
    }
    star_btnright.onclick=function(){
        star_moveR();
    }
   
    star_btnleft.onclick=function(){
        star_moveL();
    }
    star_box.onmouseover=function(){
    	clearInterval(t1);
    }
    star_box.onmouseout=function(){
    	t1=setInterval(star_move,5000)
    }
    /////////////////////////内容1动画/////////////////////////
    let nei_now=0;
    let nei_next=0;
    function nei_move(){   
    	nei_next++;
    	nei_1[nei_next].style.left=`${296}px`;
    	animate(nei_1[nei_next],{left:0});
    	animate(nei_1[nei_now],{left:-296});   	
    	nei1_quan[nei_now].className='nei-pic1-quan1 new-quan';
    	nei1_quan[nei_next].className='nei-pic1-quan1 xuan-quan';
    	nei_now=nei_next;
    }
    function nei_moveL(){   
    	nei_next--;
    	nei_1[nei_next].style.left=`${-296}px`;
    	animate(nei_1[nei_next],{left:0});
    	animate(nei_1[nei_now],{left:296});
    	nei1_quan[nei_now].className='nei-pic1-quan1 new-quan';
    	nei1_quan[nei_next].className='nei-pic1-quan1 xuan-quan';
    	nei_now=nei_next;    	
    }
    nei1_Btright.onclick=function(){
    	if(nei_now==nei_1.length-1){
    		return;
    	}
    	nei_move();
    }
    nei1_Btleft.onclick=function(){
    	if(nei_now==0){
    		return;
    	}
    	nei_moveL();
    }
    ///////////点击圆点1对应相应的内容/////////////////////
    for(let i=0;i<nei1_quan.length;i++){
    	nei1_quan[i].onclick=function(){
    		if(i==nei_now){
    			return;
    		}
    		nei_1[nei_now].style.left=`${296}px`;
    		animate(nei_1[i],{left:0});
    		animate(nei_1[nei_now],{left:296});
    		nei1_quan[nei_now].className='nei-pic1-quan1 new-quan';
    	    nei1_quan[i].className='nei-pic1-quan1 xuan-quan';
    		nei_now=i;
    	}
    } 
     /////////////////////////内容2动画/////////////////////////
    let nei2_now=0;
    let nei2_next=0;
    function nei2_move(){   
    	nei2_next++;
    	nei_2[nei2_next].style.left=`${296}px`;
    	animate(nei_2[nei2_next],{left:0});
    	animate(nei_2[nei2_now],{left:-296});   	
    	nei_quan2[nei2_now].className='nei-pic1-quan2 new-quan';
    	nei_quan2[nei2_next].className='nei-pic1-quan2 xuan-quan';
    	nei2_now=nei2_next;
    }
    function nei2_moveL(){   
    	nei2_next--;
    	nei_2[nei2_next].style.left=`${-296}px`;
    	animate(nei_2[nei2_next],{left:0});
    	animate(nei_2[nei2_now],{left:296});
    	nei_quan2[nei2_now].className='nei-pic1-quan2 new-quan';
    	nei_quan2[nei2_next].className='nei-pic1-quan2 xuan-quan';
    	nei2_now=nei2_next;    	
    }
    nei2_Btright.onclick=function(){
    	if(nei2_now==nei_2.length-1){
    		return;
    	}
    	nei2_move();
    }
    nei2_Btleft.onclick=function(){
    	if(nei2_now==0){
    		return;
    	}
    	nei2_moveL();
    }
    ///////////点击圆点2对应相应的内容/////////////////////
    for(let i=0;i<nei_quan2.length;i++){
    	nei_quan2[i].onclick=function(){
    		if(i==nei2_now){
    			return;
    		}
    		nei_2[nei_now].style.left=`${296}px`;
    		animate(nei_2[i],{left:0});
    		animate(nei_2[nei2_now],{left:296});
    		nei1_quan2[nei2_now].className='nei-pic1-quan2 new-quan';
    	    nei1_quan2[i].className='nei-pic1-quan2 xuan-quan';
    		nei2_now=i;
    	}
    }     
    //////////////////滑动到一定距离就会出现图片//////////////
    let floors_arr=[];
    floors=Array.from(floors);
    floors.forEach((element)=>{floors_arr.push(element.offsetTop)});
    console.log(floors_arr)
    window.onscroll=function(){
    	let floors_scrollTop=document.documentElement.scrollTop;//获取滚动条滚动时上移的距离
    	// console.log(floors_scrollTop);
    	// 楼层出现
    	// console.log(tu_scrollTop);
    	floors_arr.forEach((value,index)=>{
    	 if(innerHeight+floors_scrollTop>=value){
    	 	let xia_imgs=floors[index].getElementsByTagName('img');
    		for(let i=0;i<xia_imgs.length;i++){
    		  xia_imgs[i].src=xia_imgs[i].getAttribute('imgpath')
            }
    	 }
      })
    }
 }

