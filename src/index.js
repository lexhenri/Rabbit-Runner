console.log("Webpack is working!");

import Sprite from './sprite_animation';

document.addEventListener("DOMContentLoaded", function () {
  const canvasEl = document.querySelector('canvas');
  // canvasEl.width = Game.DIM_X;
  // canvasEl.height = Game.DIM_Y;
  const ctx = canvasEl.getContext("2d");
  // debugger;
  new Sprite(ctx, canvasEl);

});