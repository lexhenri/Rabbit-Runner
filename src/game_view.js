import Background from "./background";
import Sprite from "./sprite_animation";

class Gameview {

  constructor(ctx, canvas){
    this.ctx = ctx;
    this.canvas = canvas;

    this.draw = this.draw.bind(this);
    
    this.background = new Background(this.ctx, this.canvas);
    this.sprite = new Sprite(this.ctx, this.canvas);
    window.requestAnimationFrame(this.draw);
  }

  draw(){
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.background.loop();
    this.sprite.gameLoop();

    window.requestAnimationFrame(this.draw);
  }
}

export default Gameview;