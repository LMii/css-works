window.onload=function(){
  let tm_nav=document.getElementsByClassName('tm-nav')[0];
	let divs=document.getElementsByClassName('banner-bottom-left')[0];
	let uls=divs.getElementsByTagName('ul')[0];
  // console.log(uls)
  let lis=uls.getElementsByTagName('li');
  console.log(lis)
  let banner_uls=document.getElementsByClassName('banner-aside');
console.log(banner_uls)
    let banner_quan=document.getElementsByClassName('banner-bottom-quan')[0];
    let banner_quan_li=banner_quan.getElementsByTagName('li');
    let banner_bottom_quan1=document.getElementsByClassName('banner-bottom-quan1');

    let img1=document.getElementsByClassName('img1');

    let img_box=document.getElementsByClassName('banner-bottom-pic')[0];
    let img_li=img_box.getElementsByTagName('li');

    let banner_bottom=document.getElementsByClassName('banner-bottom')[0];
     
    let leftfix=document.getElementsByClassName('leftfix')[0];
    let floors=document.getElementsByClassName('floor');
    let head_1=document.querySelector('.head-right1');
    let h1=document.querySelector('.h1');
    let head_4=document.querySelector('.head-right4');
    let h4=document.querySelector('.h4');
    let head_6=document.querySelector('.head-right6');
    let h6=document.querySelector('.h6');
    let head_8=document.querySelectorAll('.head-right1')[1];
    let h8=document.querySelector('.h8');
    let head_9=document.querySelector('.head-right8');
    let h9=document.querySelector('.h9');
    let Rfix=document.querySelectorAll('.Rfix');
    let Rdong=document.querySelectorAll('.Rdong');
    // let leftfixs=document.getElementsByClassName('leftfix2');
    /////////////////////头部移入出现
    head_1.onmouseover=function(){
      h1.style.display='block';
    }
     head_1.onmouseout=function(){
      h1.style.display='none';
    }
     head_4.onmouseover=function(){
      h4.style.display='block';
    }
     head_4.onmouseout=function(){
      h4.style.display='none';
    }
    head_6.onmouseover=function(){
      h6.style.display='block';
    }
     head_6.onmouseout=function(){
      h6.style.display='none';
    }
    head_8.onmouseover=function(){
      h8.style.display='block';
    }
     head_8.onmouseout=function(){
      h8.style.display='none';
    }
    head_9.onmouseover=function(){
      h9.style.display='block';
    }
     head_9.onmouseout=function(){
      h9.style.display='none';
    }
    /////////////////////////////右固定动画////////////////////////
    for(let i=0;i<Rfix.length;i++){
      Rfix[i].onmouseover=function(){
        Rdong[i].style.display='block';
        animate(Rdong[i],{left:-90},100)
      }
    }

    for(let i=0;i<Rfix.length;i++){
      Rfix[i].onmouseout=function(){
        Rdong[i].style.display='none';
        animate(Rdong[i],{left:-120},55)
      }
    }
    /////////////////侧边栏出现/////////////////////////////////////
    for(let i=0;i<lis.length;i++){
    	lis[i].onmouseover=function(){
             banner_uls[i].style.display='block';
             // animate(banner_uls[i],{opacity:1});
    	}
    	lis[i].onmouseout=function(){
             banner_uls[i].style.display='none';
             // animate(banner_uls[i],{opacity:0});
    	}
    }

    ////////////////////////////////点击圆点出现对应的图片/////////////
    for(let i=0;i<banner_quan_li.length;i++){
    		banner_quan_li[i].onmouseover=function(){	
    		 //所有的消失  对应的显示，可以用z-index\opacity\display; 		
    		for(let j=0;j<banner_quan_li.length;j++){ 
    		        // animate(img1[j],{display:'none'});			
    				img1[j].style.display='none';
    				banner_bottom_quan1[j].className='banner-bottom-quan1';
    			
    		}
    		img1[i].style.display='block';
    		// animate(img1[i],{display:'block'});			
    		banner_bottom_quan1[i].className='banner-bottom-quan1 quan2';

    		switch(i){
        	case 0:
              banner_bottom.style.background='#E8E8E8';
              break;
            case 1:
              banner_bottom.style.background='#E8E8E8';
              break;
            case 2:
              banner_bottom.style.background='#CD0104';
              break;
            case 3:
              banner_bottom.style.background='#FADA60';
              break;
            case 4:
              banner_bottom.style.background='#130C04';
              break;
            case 5:
              banner_bottom.style.background='#8021C5';
              break;

        }    
    	}
    }
    // 窗口消失，点击显示
    /*let now=0;
    for(let i=0;i<banner_quan_li.length;i++){
    	banner_quan_li[i].onmouseover=function(){
    	img1[now].style.display='none';
    	img1[i].style.display='block';
    	now=i;
    }
    }*/

     /*换成var将会报错 let会记录每个i的值，而var不会，当用i时，let将会保存，
     而var将会是最后一个值，不会记录每一个*/
   
    //解决办法1
    /*let now=0;
    for(var i=0;i<banner_quan_li.length;i++){
    	banner_quan_li[i].index=i;
    	banner_quan_li[i].onmouseover=function(){    		
	    	img1[now].style.display='none';
	    	img1[this.index].style.display='block';
	    	now=this.index;
        }
    }*/
     
    /*for(var i=0;i<banner_quan_li.length;i++){
    	    banner_quan_li[i].index=i;
    		banner_quan_li[i].onmouseover=function(){	
    		 //所有的消失  对应的显示，可以用z-index\opacity\display; 		
    		for(let j=0;j<banner_quan_li.length;j++)   			
    			img1[j].style.display='none';
    		}
    		img1[this.index].style.display='block';
    	}  */
    
    //可以用闭包函数实现变量i的每次存储
    //解决办法2
    /*let now=0;
    for(var i=0;i<banner_quan_li.length;i++){
    	banner_quan_li[i].onmouseover=(function(i){
    		return function(){    		
		    	img1[now].style.display='none';
		    	img1[i].style.display='block';
		    	now=i;
            }
        })(i)
    }*/
    
    
    /////////////////////////////banner轮播////////////////////////////////
    let t;
    let num=0;
    t=setInterval(move, 3000);
    function move(){
    	num++;//1
    	if(num==img1.length){
    		num=-1;
            move();
    	}
    	for(let j=0;j<img1.length;j++){
    		// animate(img1[j],{display:'none'})
            img1[j].style.display='none';
    		banner_bottom_quan1[j].className='banner-bottom-quan1';
    	}
    		// animate(img1[num],{display:'block'})
        img1[num].style.display='block';
        banner_bottom_quan1[num].className='banner-bottom-quan1 quan2'; 
        switch(num){
        	case 0:
              banner_bottom.style.background='#E8E8E8';
              break;
            case 1:
              banner_bottom.style.background='#E8E8E8';
              break;
            case 2:
              banner_bottom.style.background='#CD0104';
              break;
            case 3:
              banner_bottom.style.background='#FADA60';
              break;
            case 4:
              banner_bottom.style.background='#130C04';
              break;
            case 5:
              banner_bottom.style.background='#8021C5';
              break;

        }    
    }
    ////////////////////////////鼠标移入banner底部时停止轮播////////////////////////////
    banner_bottom.onmouseover=function(){
        clearInterval(t);
    }
    banner_bottom.onmouseout=function(){
        t=setInterval(move,3000);
        //num=i;
    }

    ////////////////////////锚链接///////////////////////////////////
    let leftfixs=document.getElementsByClassName('leftfix2');
    let flag=true;
    let floors_arr=[];
    floors=Array.from(floors);
    floors.forEach((element,index)=>{
       floors_arr.push(element.offsetTop);
    })
   
    //////////////////点击按钮可以滚动滑轮和变色/////////////////////////
       let color=['#64C333','#FF0036','#19C8A9'];
           leftfixs=Array.from(leftfixs);
           leftfixs.forEach((element,index)=>{
              element.onclick=function(){
                flag=false;
                animate(document.documentElement,{scrollTop:floors_arr[index]},function(){
                  flag=true;
                });
                color.forEach((element,index)=>{
                  leftfixs[index].style.background='#626262';  
                });
                element.style.background=color[index];
              }
            });  
///////////////锚链接变色/////////////////////////////////
      window.onscroll=function(){
        if(flag){
        let floors_scrollTop=document.documentElement.scrollTop;
        // console.log(floors_scrollTop); 
        floors_arr.forEach((value,index)=>{
          if(innerHeight+floors_scrollTop>=value+189){
              color.forEach((element,index)=>{
                  leftfixs[index].style.background='#626262';  
                });
                leftfixs[index].style.background=color[index];
          }
        })
      }
      // console.log(document.documentElement.scrollTop)
      let flag1=true;
        if(document.documentElement.scrollTop>=710){
            animate(tm_nav,{top:0})
        }
        if(document.documentElement.scrollTop<710){
          
          animate(tm_nav,{top:-50})
        }
     }
       
    

}   
