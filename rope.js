class Rope{
	constructor(bodyA,pointB){
		var options={
			bodyA:bodyA,
			pointB:pointB,
			stiffness:0.9,
			length:300,
			//pointB:{x:this.offsetX,y:this.offsetY}
		}
		this.rope=Constraint.create(options)
		this.pointB=pointB
		World.add(world,this.rope)
	}
	display(){
		stroke("grey")
		strokeWeight(3)
		var pointA=this.rope.bodyA.position
		var pointB=this.pointB
    line(pointA.x,pointA.y,pointB.x,pointB.y)
}
	}
