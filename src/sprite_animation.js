import Background from './background';

class Sprite {

constructor(ctx, canvas) {
  // this.init = this.init.bind(this);

  this.drawFrame = this.drawFrame.bind(this);
  // this.step = this.step.bind(this);
  this.gameLoop = this.gameLoop.bind(this);
  this.keyDownListener = this.keyDownListener.bind(this);
  this.keyUpListener = this.keyUpListener.bind(this);
  this.ctx = ctx;
  this.canvas = canvas;

  this.scale = 1;
  this.width = 64;
  this.height = 64;
  this.scaledWidth = this.scale * this.width;
  this.scaledHeight = this.scale * this.height;

  this.cycleLoop = [0, 1, 0, 2];
  this.currentLoopIndex = 0;
  this.frameCount = 0;
  this.movementSpeed = 2;
  this.keyPresses = {};
  this.positionX = 0;
  this.positionY = 300;
  this.frameLimit = 10;
  this.direction = 0;
  this.jumping = false;
  // this.x = -30; // center of the canvas
  this.xVelocity = 1; // Speed movement
  // this.y = 160;
  this.yVelocity = 0;

  

  this.img = new Image();
  this.img.src = 'assets/rabbit.png'
  

  window.addEventListener('keydown', this.keyDownListener);
  window.addEventListener('keyup', this.keyUpListener);
  
  // this.step();
  this.gameLoop();
}


// let canvas = document.querySelector('canvas');
// let ctx = canvas.getContext('2d');

// console.log(canvas);
// console.log(ctx);

  drawFrame(frameX, frameY, canvasX, canvasY) {
    // debugger
    // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.drawImage(this.img,
      frameX * this.width, frameY * this.height, this.scaledWidth, this.scaledHeight,
      canvasX, canvasY, this.scaledWidth, this.scaledHeight);
  }


  step() {
    this.frameCount++;
    if (this.frameCount < 15) {
      window.requestAnimationFrame(this.step);
      return;
    }
    this.frameCount = 0;
    // debugger;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawFrame(this.cycleLoop[this.currentLoopIndex], 0, 0, 300);
    this.currentLoopIndex++;
    if (this.currentLoopIndex >= this.cycleLoop.length) {
      this.currentLoopIndex = 0;
    }
    window.requestAnimationFrame(this.step);
    }


  // moveCharacter(deltaX, deltaY) {
  //   this.positionX += deltaX;
  //   this.positionY += deltaY;
  //   // currentDirection = direction;
  // }

  keyDownListener(event) {
    this.keyPresses[event.code] = true;
}

  keyUpListener(event) {
  this.keyPresses[event.code] = false;
}


  gameLoop(){
    // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    let hasMoved = false;

    if (this.keyPresses.ArrowLeft) {
      this.moveCharacter(-this.movementSpeed - 3, 0);
      hasMoved = true;
    } else if (this.keyPresses.ArrowRight) {
      this.moveCharacter(this.movementSpeed + 3, 0);
      hasMoved = true;
    } else if (this.keyPresses.ArrowUp){
      this.jump();
      this.moveCharacter(this.movementSpeed + 3, 2);
      hasMoved = true;
    } else {
      this.moveCharacter(this.movementSpeed, 0);
      hasMoved = true;
    }
    // if (this.frameCount < 15) {
    //   window.requestAnimationFrame(this.step);
    //   return;
    // }
    // if (hasMoved) {
      this.frameCount++;
      if (this.frameCount >= this.frameLimit) {
        this.frameCount = 0;
        this.currentLoopIndex++;
        if (this.currentLoopIndex >= this.cycleLoop.length) {
          this.currentLoopIndex = 0;
        }
      }
    // }
    // if (!hasMoved) {
    //   this.currentLoopIndex = 0;
    // }
    this.drawFrame(this.cycleLoop[this.currentLoopIndex], this.direction, this.positionX, this.positionY);
    // window.requestAnimationFrame(this.gameLoop);
  }

  moveCharacter(deltaX, deltaY, direction) {
    if (this.positionX + deltaX > 0 && this.positionX + this.scaledWidth + deltaX < this.canvas.width) {
      this.positionX += deltaX;
    }
    if (this.positionY + deltaY > 0 && this.positionY + this.scaledHeight + deltaY < this.canvas.height) {
      this.positionY += deltaY;
    }
    this.yVelocity += 1.5; // gravity, adds 1.5 per every frame of animation, w/o this the Object will never fall
    this.positionX += this.xVelocity; // Adds x velocity to current POS
    this.positionY += this.yVelocity; // Adds y velocity to current POS
    this.yVelocity *= 0.9; // friction,  gives effect of slowing down, allows friction on Y axis
    this.xVelocity *= 0.9; // friction, gradually reduces velocity, slowly reduces to 0, giving the effect of slowing down

    if (this.xVelocity > 1) {
      this.xVelocity *= 0.8;
    }

    if (this.positionY > this.canvas.height - 32 - 64) {
      // 180 being the very bottom of your screen
      this.jumping = false; // -60 being the location of the rendered floor, this number is subject to change in terms of Object floor
      this.positionY = this.canvas.height - 32 - 64; // -32 being the top coordinate of the Object, this number is subject to change in terms of the Object
      // this.yVelocity = 0;
    } // Set Jumping to False, to allow jump again, Y coordinate to equal position to update current POS, yVelocity to 0 because youre hitting floor

    // currentDirection = direction;
  }

  jump(){
    if (this.jumping == false) {
      this.yVelocity -= 45; // -20 To send the object Up
      this.jumping = true; // So the object cant jump again
    }
  }
}

export default Sprite;