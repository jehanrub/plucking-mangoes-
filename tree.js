
class Tree {

  constructor(x, y) {

      var options = {
          isStatic: true,
          friction: 0.8,
          density: 1.2
      }
      this.body = Bodies.rectangle(x, y, 250,300, options)
      this.width = 250
      this.height = 300
      this.image = loadImage('images/tree.png')
      World.add(world, this.body)


  }

  display() {
      var pos = this.body.position
      push()
      translate(pos.x, pos.y);
      imageMode(CENTER)
      image(this.image, 0, 0, this.width, this.height)
      pop()
  }
}