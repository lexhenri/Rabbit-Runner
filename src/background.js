class Background {

  constructor(ctx, canvas){
    // this.drawBackground = this.drawBackground.bind(this);
    // this.bgLoop = this.bgLoop.bind(this);
    // this.scrollBackground = this.scrollBackground.bind(this);

    this.loop = this.loop.bind(this);

    this.ctx = ctx;
    this.canvas = canvas;

    this.speed = 5;
    this.positionX = 0;
    this.positionY = 0;

    this.blueBackground = new Image();
    this.blueBackground.src = 'assets/backgrounds/colored_land.png';

    this.desertBackground = new Image();
    this.desertBackground.src = 'assets/backgrounds/colored_desert.png';

    this.grassBackground = new Image();
    this.grassBackground.src = 'assets/backgrounds/colored_grass.png';

    this.backgrounds = [this.blueBackground, this.desertBackground, this.grassBackground]

    this.frameCount = 0;
    this.bgLoopIndex = 0;
    
    this.bgWidth = 1024;
    this.bgHeight = (1024 * 0.30);

    // this.bgLoop();
    this.loop();
  }



  loop() {

    this.ctx.save();
	  this.positionX = (this.bgWidth * 2 > -this.positionX) ? this.positionX -= this.speed : this.positionX = 0;
    // draw image 2 
    // debugger;
    this.ctx.save();
    this.ctx.drawImage(this.grassBackground, this.positionX, 0, this.bgWidth, this.canvas.height);
    this.ctx.drawImage(this.blueBackground, this.positionX + this.bgWidth, 0, this.bgWidth, this.canvas.height);
    this.ctx.drawImage(this.grassBackground, this.positionX + (this.bgWidth * 2), 0, this.bgWidth, this.canvas.height);
    // this.ctx.drawImage(this.desertBackground, this.positionX + (this.bgWidth * 3), 0, this.bgWidth, this.canvas.height);

    this.ctx.restore();
  
  } 
}
  

export default Background;