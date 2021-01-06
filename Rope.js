class Rope {
    constructor(BodyA,BodyB)
{
    var options={
lenght:0.9,
stiffness:0.2,
bodyA:BodyA,
bodyB:BodyB,

    }
this.chain=Constraint.create(options);
World.add(world,this.chain);

}
display(){

var posA=this.chain.bodyA.position;
var posB=this.chain.bodyB.position;
strokeWeight(2);
 line (posA.x,posA.y,posB.x,posB.y);

}
}
