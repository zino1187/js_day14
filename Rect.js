/*사각형의 정의한다*/
class Rect{
	constructor(container,width,height,x,y,velX,velY,bg){
		this.div=document.createElement("div");
		this.container=container;
		this.width=width;
		this.height=height;
		this.x=x;
		this.y=y;
		this.velX=velX;
		this.velY=velY;
		this.bg=bg;

		this.div.style.width=this.width+"px";
		this.div.style.height=this.height+"px";
		this.div.style.position="absolute";
		this.div.style.left=this.x+"px";
		this.div.style.top=this.y+"px";
		this.div.style.background=this.bg;

		this.container.appendChild(this.div);
	}
	//
	tick(){
		this.x+=this.velX;
		this.y+=this.velY;
	}
	//그래픽 처리
	render(){
		this.div.style.left=this.x+"px";
		this.div.style.top=this.y+"px";
	}
}








