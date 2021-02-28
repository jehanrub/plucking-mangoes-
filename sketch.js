const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	boyImage = loadImage("images/boy.png")
}

function setup() {
	createCanvas(800, 500);
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	ground = new Ground(400, 490, 800, 20)
	tree = new Tree(600,350)
	boy = createSprite(200,420,50,50)
	boy.addImage(boyImage)
	boy.scale = 0.1

	stone = new Stone(50,300,50)

	mango1 = new Mango(600,250,50)
	mango2 = new Mango(500,330,50)
	mango3 = new Mango(500,300,50)
	mango4 = new Mango(600,300,50)
	mango5 = new Mango(650,300,50)


	rope = new Rope(stone.body, {x:146, y:365})
  
}
function draw() {
  Engine.update(engine);
  background('blue');

  text(mouseX+","+mouseY, 500,50)



  ground.display();
  tree.display();
  stone.display();

  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()

  rope.display();


  detectCollision(stone,mango1)
  detectCollision(stone,mango2)
  detectCollision(stone,mango3)
  detectCollision(stone,mango4)
  detectCollision(stone,mango5)
  
  drawSprites();

}
 function mouseDragged(){
	 Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY})
	 
 }

 function mouseReleased(){
	rope.fly();
}

function keyPressed(){
	if(keyCode === SPACE){
		Matter.Body.setPosition(stone.body, {x:146, y:365})
		rope.attach(stone.body)
	}
}


function detectCollision(lstone,lmango){
	mongoBodyPosition = lmango.body.position
	stoneBodyPosition = lstone.body.position

	var distance =  dist(stoneBodyPosition.x,stoneBodyPosition .y, mongoBodyPosition.x, mongoBodyPosition.y)

	if(distance<=lmango.r+lstone.r){
      Matter.Body.setStatic(lmango.body,false)
	}


}