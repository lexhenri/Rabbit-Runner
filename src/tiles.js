class Tiles {

  constructor(ct, canvas){
    this.drawFrame = this.drawFrame.bind(this);
    this.ctx = ctx;
    this.canvas = canvas;

    this.scale = 1;
    this.width = 70;
    this.height = 70;
    this.scaledWidth = this.scale * this.width;
    this.scaledHeight = this.scale * this.height;

    this.positionX = 0;
    this.positionY = this.canvas.height;

    this.speed = 1;


    this.baseTile = new Image();
    this.baseTile.src = 'assets/tiles/grassCenter.png'


  }

  drawFrame(frameX, frameY) {
    this.ctx.drawImage(this.baseTile,
      frameX * this.width, frameY * this.height, this.width, this.height, 
      this.canvas.width, this.canvas.height);
  }

 

  step(){

  }

  worldToScreen(x, y) {
    return { x: x - camera.x, y: y - camera.y };
  }

  screenToWorld(x, y) {
    return { x: x + camera.x, y: y + camera.y };
  }



}

export default Tiles;