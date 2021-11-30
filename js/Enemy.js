class Enemy extends BaseClass{
    constructor(x, y) {
        super(x,y,50,50);
        this.image = loadImage("images/Enemy.png")
      }
      display(){
        super.display();
      }
}
