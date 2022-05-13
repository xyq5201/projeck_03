					function a(b,c,h){
					clearInterval(b.d)
					b.d=setInterval(function(){
						var f=(c-b.offsetLeft)/10;
					f=	f>0?Math.ceil(f):Math.floor(f)
						if (b.offsetLeft==c) {
							clearInterval(b.d)
							if(h){
							h();
						}
						} else{
						b.style.left=b.offsetLeft+f+'px';
						}
					},30)
				}
					

var y=document.querySelector('.a').querySelectorAll('img')
				var l=document.querySelector('.b').querySelectorAll('div')
				var x=document.querySelector('.d')
				var u=document.querySelector('.e')
				