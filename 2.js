 function aa(b,c,d){
	clearInterval(b.e);
	b.e=setInterval(function(){
		var f=(c-b.offsetLeft)/10;
		f=f>0?Math.ceil(f):Math.floor(f);
		if (b.offsetLeft==c) {
			clearInterval(b.e)
			if(d){
				d();
			}
		} else{
			b.style.left=b.offsetLeft+f+'px'
		}
	},50)
}
