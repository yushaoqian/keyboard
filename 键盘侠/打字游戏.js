var letters=['A','B','C','D','E','F','G','H','I','J','K','L','M',
'N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
function id(ID){
			return document.getElementById(ID);
			// document.getElementsByTagName('div');
		}
function tag(name,father){
	father=father||document;
	return father.getElementsByTagName(name);
}
function changeArray(likeArray){
	var arr=[];
	for(var i=0;i<likeArray.length;i++){
		arr.push(likeArray[i]);
	}
	return arr;
}
function getLetter(){
	var i=Math.floor(Math.random()*letters.length);
	//要考虑到灵活性，所以是length
	return letters[i];
}
function showNewLetter(){
	// 创建一个span
	var span=document.createElement('span');
	// 让新的span显示一个随机字母
	span.innerHTML=getLetter();
	// 设置水平随机位置
	span.style.left=Math.random()*1050+'px';
	// 将新的span加con中
	id('con').appendChild(span);
}
function fall(){
	// 找到当前所有span
	var spans=tag('span'),newTop;
	// 判断本次下落有没有元素超出边界要被干掉
	if(spans.length>0&&spans[0].offsetTop+50>=600)
		id('con').removeChild(spans[0]);
	// 遍历每一个span将top值自加自身高度
	for(var i=0;i<spans.length;i++){
		newTop=spans[i].offsetTop+50;
		spans[i].style.top=newTop+'px';
		// 设置一个top的值用style-top，取一个top的值用.offsetTop
		// 尽量变量声明放在for循环外面
	}
}
function start(){
// 不断地自动创建新的字母并显示
	setInterval(function(){
		fall();
	 	showNewLetter();	
	 //先fall再创建，第一行就有东西了
	},1000);
	// 给文档绑定事件
	// 如果有你点击的字母相关的span，则删除
	document.onkeyup=function(e){
		var spans=tag('span');
		spans=changeArray(spans);
		for(var i=0;i<spans.length;i++){
			if(spans[i].innerText==letters[e.keyCode-65]){
				// 添加消失动画
				spans[i].className='dh';
				setTimeout(function(){
					id('con').removeChild(spans[i]);
				},600);
				break;//跳出for循环
			}
		}
	};
}
window.onload=function(){
	start();
};
