class Background {

  constructor(ctx, canvas){
    this.drawBackground = this.drawBackground.bind(this);
    this.bgLoop = this.bgLoop.bind(this);
    this.scrollBackground = this.scrollBackground.bind(this);

    this.ctx = ctx;
    this.canvas = canvas;

    this.speed = 1;
    this.positionX = 0;
    this.positionY = 0;

    this.blueBackground = new Image();
    this.blueBackground.src = 'assets/backgrounds/blue_shroom.png';

    this.desertBackground = new Image();
    this.desertBackground.src = 'assets/backgrounds/colored_desert.png';

    this.grassBackground = new Image();
    this.grassBackground.src = 'assets/backgrounds/colored_grass.png';

    this.frameCount = 0;
    this.bgLoopIndex = 0;
    
    this.bgWidth = 1024;
    this.bgHeight = 1024;

    this.bgLoop();
  }



  drawBackground(positionX){
    // debugger;
    // if (this.positionX <= 0){
    //   this.ctx.drawImage(this.grassBackground, 0, 0, this.bgWidth, this.bgHeight, this.positionX + this.bgWidth, this.positionY,
    //     this.canvas.width, this.canvas.height);
    // }

    this.ctx.drawImage(this.grassBackground, 0, 0, this.bgWidth, this.bgHeight, positionX, this.positionY,
      this.canvas.width, this.canvas.height);
    
    // this.positionX = 0;



  

      //  if (this.positionY + this.canvas.width <= this.canvas.width) {
      // this.positionY = 0;
      //    this.ctx.drawImage(this.grassBackground, 0, 0, this.bgWidth, this.bgHeight, this.positionX, this.positionY,
      //      this.canvas.width, this.canvas.height);
      //   }
   

    // this.ctx.drawImage(this.desertBackground, 0, 0, this.bgWidth, this.bgHeight, this.positionX, this.positionY,
    //   this.canvas.width, this.canvas.height);

   

    // this.ctx.drawImage(this.blueBackground, 0, 0, this.bgWidth, this.bgHeight, this.positionX, this.positionY,
    //   this.canvas.width, this.canvas.height);

    // if (this.positionY + this.width <= 0) {
    //   this.positionY = 0;
    // }
  }
  
  

  bgLoop(){
    this.drawBackground(this.positionX);

    this.scrollBackground(-this.speed, 0);

     if (this.positionX <= 0){
      this.drawBackground(this.positionX + this.canvas.width);
     }

    // this.drawBackground();
    // this.drawBackground(this.desertBackground);
    // this.drawBackground(this.grassBackground);
    // window.requestAnimationFrame(this.bgLoop);
    }


  
  scrollBackground(deltaX, deltaY) {

    // this.drawBackground(this.positionX);
    // if (this.positionX + deltaX > 0 && this.positionX + this.bgWidth + deltaX < this.canvas.width) {
    this.positionX += deltaX;

   
  
    // }
    // if (this.positionY + deltaY > 0 && this.positionY + this.bgHeight + deltaY < this.canvas.height) {
      // this.positionY += deltaY;
    // if (this.positionY + this.bgWidth <= this.canvas.width) {
    //   this.drawBackground();
    // }
   
    // }
    // this.yVelocity += 1.5; // gravity, adds 1.5 per every frame of animation, w/o this the Object will never fall
    // this.positionX += this.xVelocity; // Adds x velocity to current POS
    // this.positionY += this.yVelocity; // Adds y velocity to current POS
    // this.yVelocity *= 0.9; // friction,  gives effect of slowing down, allows friction on Y axis
    // this.xVelocity *= 0.9; // friction, gradually reduces velocity, slowly reduces to 0, giving the effect of slowing down

    // if (this.xVelocity > 1) {
    //   this.xVelocity *= 0.8;
    }
    // currentDirection = direction;
  }
  


  
  // draw() {
    // Pan background
    // this.positionY += this.speed;
    // this.context.drawFrame(this.positionX, this.positionY);
    // // Draw another image at the top edge of the first image
    // this.context.drawFrame(this.positionX, this.positionY - this.canvas.height);
    // // If the image scrolled off the screen, reset
    // if (this.positionY >= this.canvas.height)
    //   this.positionY = this.canvas.height;
  // };

export default Background;