function getclass(classname,ranger){//ranger为对象
	ranger=ranger?ranger:document;
	if(document.getElementsByClassName){
		return ranger.getElementsByClassName(classname);
	}else{
		var all=ranger.getElementsByTagName('*');
		var newarr=[];
        for(var i=0;i<all.length;i++){
        	if(checkclassname(all[i].className,classname))
             newarr.push(all[i]);
        }
        return newarr;
	}
}
function checkclassname(className,classname){
	var arr=className.split(' ');
	for(var i=0;i<arr.length;i++){
		if(arr.includes(classname)){
			return true;
		}
	}
	return false;
}

function $(select,ranger1){
	ranger1=ranger1?ranger1:document;
	let first=select.charAt(0)
	if(first=='.'){
		return getclass(select.substring(1),ranger1);
	}else if(first=='#'){
		return ranger1.getElementById(select.substring(1));
	}else if(/^[a-z][a-z1-6]{0,7}$/.test(select)){
		return ranger1.getElementsByTagName(select);
	}
}