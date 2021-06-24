class Rope{
    constructor(bodyA,pointB){
        var options={
        bodyA:bodyA,
        pontB:pointB
        }
        this.pointB=pointB;
        this.rope=Constraint.create(options);
        World.add(world,this.rope);
    }
    display(){
        line(pointB.x,pointB.y,pointA.x,pointA.y,)
       
    }
}