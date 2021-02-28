
class Rope {
 constructor(bodyA, pointB) {
  var options = {
         bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.005,
            length: 1
        }
        this.pointB = pointB
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
    fly() {
        this.rope.bodyA = null
    }
    attach(body) {
        this.rope.bodyA = body
    }
    display() {
        if (this.rope.bodyA) {
            var poiA = this.rope.bodyA.position;
            var poiB = this.pointB

         strokeWeight(3);
            stroke(0)
    line(poiA.x, poiA.y, poiB.x, poiB.y);
  }
  }
}
