class Pendulum{
          constructor(x,y,color){
                    var options={
                              restitution:1.5,
                              friction:0,
                              frictionAir:0.0,
                              slop:10,
                              inertia:Infinity
                    }
                    this.body=Bodies.rectangle(x,y,40,40,options);
                    this.x=x;
                    this.y=y;
                    this.color=color;
                    World.add(world,this.body);
          }
          display(){
                    var angle=this.body.angle;
                    var pos=this.body.position;
                    push();
                    translate(pos.x,pos.y);
                    rotate(angle);
                    stroke(255);    
                    strokeWeight(3);      
                    fill(this.color);
                    ellipse(0,0,50,50);
                    pop();
          }
}