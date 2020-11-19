class Bob{
	constructor(x,y,radius){
		var options={
			'restitution':1.0,
			'isStatic':false,
			'friction':0,
			'density':0.4
		}
		this.body=Bodies.circle(x,y,radius,options)
		this.width=radius*2;
		this.height=radius*2;
		World.add(world,this.body)
	}
	display(){
		var pos=this.body.position
		push()
		fill("pink")
		translate(pos.x,pos.y)
		//ellipseMode(RADIUS)
		ellipse(0,0,this.width,this.height);
		pop()
	}
}



