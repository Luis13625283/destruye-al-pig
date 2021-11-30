var player1, enemy;

function preload() {
  bg = loadImage("bg.png");
}

function setup() {
  createCanvas(3000, 700);

  player1 = new Player1(400,800,250);

  enemy1 = new Enemy(600, 100, 70, 70);
  enemy2 = new Enemy(900, 100, 70, 70);
  enemy3 = new Enemy(900, 100, 70, 70);
  enemy4 = new Enemy(900, 100, 70, 70);
}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  enemy1.display();
  enemy2.display();
  enemy3.display();
  enemy4.display();

  player1.display();

}

function mouseDragged(){
  Matter.Body.setPosition(player1.body, {x: mouseX, y: mouseY});
}