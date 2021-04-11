class SlingShot{
    constructor(bodyA,pointB,color){
    var options={
        bodyA:bodyA,
        pointB:pointB,
        stiffness:1,
        angularStiffness:2,
        lenght:100
    }
    this.pointB=pointB;
    this.pointX=bodyA.x;
    this.pointY=bodyA.y-200;
    this.color=color;
    this.sling=Constraint.create(options)
    World.add(world,this.sling)
    }
    display(){
        if(this.sling.bodyA){
            var pointA=this.sling.bodyA.position;
            var pointB=this.pointB;
            push();
            strokeWeight(2);
            stroke(255);
            line(pointB.x,pointB.y,pointA.x,pointA.y)
            pop();
        }
    }
}