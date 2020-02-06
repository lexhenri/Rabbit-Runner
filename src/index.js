console.log("Webpack is working!");


import Gameview from './game_view';
import Background from './background';

document.addEventListener("DOMContentLoaded", function () {
  const canvasEl = document.querySelector('canvas');
  // canvasEl.width = Game.DIM_X;
  // canvasEl.height = Game.DIM_Y;
  const ctx = canvasEl.getContext("2d");
  // debugger;
  new Gameview(ctx, canvasEl);
  // new Background(ctx, canvasEl);

});