/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/background.js":
/*!***************************!*\
  !*** ./src/background.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Background {\n\n  constructor(ctx, canvas){\n    // this.drawBackground = this.drawBackground.bind(this);\n    // this.bgLoop = this.bgLoop.bind(this);\n    // this.scrollBackground = this.scrollBackground.bind(this);\n\n    this.loop = this.loop.bind(this);\n\n    this.ctx = ctx;\n    this.canvas = canvas;\n\n    this.speed = 5;\n    this.positionX = 0;\n    this.positionY = 0;\n\n    this.blueBackground = new Image();\n    this.blueBackground.src = 'assets/backgrounds/colored_land.png';\n\n    this.desertBackground = new Image();\n    this.desertBackground.src = 'assets/backgrounds/colored_desert.png';\n\n    this.grassBackground = new Image();\n    this.grassBackground.src = 'assets/backgrounds/colored_grass.png';\n\n    this.backgrounds = [this.blueBackground, this.desertBackground, this.grassBackground]\n\n    this.frameCount = 0;\n    this.bgLoopIndex = 0;\n    \n    this.bgWidth = 1024;\n    this.bgHeight = (1024 * 0.30);\n\n    // this.bgLoop();\n    this.loop();\n  }\n\n\n\n  loop() {\n\n    this.ctx.save();\n\t  this.positionX = (this.bgWidth * 2 > -this.positionX) ? this.positionX -= this.speed : this.positionX = 0;\n    // draw image 2 \n    // debugger;\n    this.ctx.save();\n    this.ctx.drawImage(this.grassBackground, this.positionX, 0, this.bgWidth, this.canvas.height);\n    this.ctx.drawImage(this.blueBackground, this.positionX + this.bgWidth, 0, this.bgWidth, this.canvas.height);\n    this.ctx.drawImage(this.grassBackground, this.positionX + (this.bgWidth * 2), 0, this.bgWidth, this.canvas.height);\n    // this.ctx.drawImage(this.desertBackground, this.positionX + (this.bgWidth * 3), 0, this.bgWidth, this.canvas.height);\n\n    this.ctx.restore();\n  \n  } \n}\n  \n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Background);\n\n//# sourceURL=webpack:///./src/background.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _background__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./background */ \"./src/background.js\");\n/* harmony import */ var _sprite_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sprite_animation */ \"./src/sprite_animation.js\");\n\n\n\nclass Gameview {\n\n  constructor(ctx, canvas){\n    this.ctx = ctx;\n    this.canvas = canvas;\n\n    this.draw = this.draw.bind(this);\n    \n    this.background = new _background__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.ctx, this.canvas);\n    this.sprite = new _sprite_animation__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.ctx, this.canvas);\n    window.requestAnimationFrame(this.draw);\n  }\n\n  draw(){\n    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n    this.background.loop();\n    this.sprite.gameLoop();\n\n    window.requestAnimationFrame(this.draw);\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Gameview);\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\n/* harmony import */ var _background__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./background */ \"./src/background.js\");\nconsole.log(\"Webpack is working!\");\n\n\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  const canvasEl = document.querySelector('canvas');\n  // canvasEl.width = Game.DIM_X;\n  // canvasEl.height = Game.DIM_Y;\n  const ctx = canvasEl.getContext(\"2d\");\n  // debugger;\n  new _game_view__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx, canvasEl);\n  // new Background(ctx, canvasEl);\n\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/sprite_animation.js":
/*!*********************************!*\
  !*** ./src/sprite_animation.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _background__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./background */ \"./src/background.js\");\n\n\nclass Sprite {\n\nconstructor(ctx, canvas) {\n  // this.init = this.init.bind(this);\n\n  this.drawFrame = this.drawFrame.bind(this);\n  // this.step = this.step.bind(this);\n  this.gameLoop = this.gameLoop.bind(this);\n  this.keyDownListener = this.keyDownListener.bind(this);\n  this.keyUpListener = this.keyUpListener.bind(this);\n  this.ctx = ctx;\n  this.canvas = canvas;\n\n  this.scale = 1;\n  this.width = 64;\n  this.height = 64;\n  this.scaledWidth = this.scale * this.width;\n  this.scaledHeight = this.scale * this.height;\n\n  this.cycleLoop = [0, 1, 0, 2];\n  this.currentLoopIndex = 0;\n  this.frameCount = 0;\n  this.movementSpeed = 2;\n  this.keyPresses = {};\n  this.positionX = 0;\n  this.positionY = 300;\n  this.frameLimit = 10;\n  this.direction = 0;\n  this.jumping = false;\n  // this.x = -30; // center of the canvas\n  this.xVelocity = 1; // Speed movement\n  // this.y = 160;\n  this.yVelocity = 0;\n\n  \n\n  this.img = new Image();\n  this.img.src = 'assets/rabbit.png'\n  \n\n  window.addEventListener('keydown', this.keyDownListener);\n  window.addEventListener('keyup', this.keyUpListener);\n  \n  // this.step();\n  this.gameLoop();\n}\n\n\n// let canvas = document.querySelector('canvas');\n// let ctx = canvas.getContext('2d');\n\n// console.log(canvas);\n// console.log(ctx);\n\n  drawFrame(frameX, frameY, canvasX, canvasY) {\n    // debugger\n    // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n\n    this.ctx.drawImage(this.img,\n      frameX * this.width, frameY * this.height, this.scaledWidth, this.scaledHeight,\n      canvasX, canvasY, this.scaledWidth, this.scaledHeight);\n  }\n\n\n  step() {\n    this.frameCount++;\n    if (this.frameCount < 15) {\n      window.requestAnimationFrame(this.step);\n      return;\n    }\n    this.frameCount = 0;\n    // debugger;\n    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n    this.drawFrame(this.cycleLoop[this.currentLoopIndex], 0, 0, 300);\n    this.currentLoopIndex++;\n    if (this.currentLoopIndex >= this.cycleLoop.length) {\n      this.currentLoopIndex = 0;\n    }\n    window.requestAnimationFrame(this.step);\n    }\n\n\n  // moveCharacter(deltaX, deltaY) {\n  //   this.positionX += deltaX;\n  //   this.positionY += deltaY;\n  //   // currentDirection = direction;\n  // }\n\n  keyDownListener(event) {\n    this.keyPresses[event.code] = true;\n}\n\n  keyUpListener(event) {\n  this.keyPresses[event.code] = false;\n}\n\n\n  gameLoop(){\n    // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n    let hasMoved = false;\n\n    if (this.keyPresses.ArrowLeft) {\n      this.moveCharacter(-this.movementSpeed - 3, 0);\n      hasMoved = true;\n    } else if (this.keyPresses.ArrowRight) {\n      this.moveCharacter(this.movementSpeed + 3, 0);\n      hasMoved = true;\n    } else if (this.keyPresses.ArrowUp){\n      this.jump();\n      this.moveCharacter(this.movementSpeed + 3, 2);\n      hasMoved = true;\n    } else {\n      this.moveCharacter(this.movementSpeed, 0);\n      hasMoved = true;\n    }\n    // if (this.frameCount < 15) {\n    //   window.requestAnimationFrame(this.step);\n    //   return;\n    // }\n    // if (hasMoved) {\n      this.frameCount++;\n      if (this.frameCount >= this.frameLimit) {\n        this.frameCount = 0;\n        this.currentLoopIndex++;\n        if (this.currentLoopIndex >= this.cycleLoop.length) {\n          this.currentLoopIndex = 0;\n        }\n      }\n    // }\n    // if (!hasMoved) {\n    //   this.currentLoopIndex = 0;\n    // }\n    this.drawFrame(this.cycleLoop[this.currentLoopIndex], this.direction, this.positionX, this.positionY);\n    // window.requestAnimationFrame(this.gameLoop);\n  }\n\n  moveCharacter(deltaX, deltaY, direction) {\n    if (this.positionX + deltaX > 0 && this.positionX + this.scaledWidth + deltaX < this.canvas.width) {\n      this.positionX += deltaX;\n    }\n    if (this.positionY + deltaY > 0 && this.positionY + this.scaledHeight + deltaY < this.canvas.height) {\n      this.positionY += deltaY;\n    }\n    this.yVelocity += 1.5; // gravity, adds 1.5 per every frame of animation, w/o this the Object will never fall\n    this.positionX += this.xVelocity; // Adds x velocity to current POS\n    this.positionY += this.yVelocity; // Adds y velocity to current POS\n    this.yVelocity *= 0.9; // friction,  gives effect of slowing down, allows friction on Y axis\n    this.xVelocity *= 0.9; // friction, gradually reduces velocity, slowly reduces to 0, giving the effect of slowing down\n\n    if (this.xVelocity > 1) {\n      this.xVelocity *= 0.8;\n    }\n\n    if (this.positionY > this.canvas.height - 32 - 64) {\n      // 180 being the very bottom of your screen\n      this.jumping = false; // -60 being the location of the rendered floor, this number is subject to change in terms of Object floor\n      this.positionY = this.canvas.height - 32 - 64; // -32 being the top coordinate of the Object, this number is subject to change in terms of the Object\n      // this.yVelocity = 0;\n    } // Set Jumping to False, to allow jump again, Y coordinate to equal position to update current POS, yVelocity to 0 because youre hitting floor\n\n    // currentDirection = direction;\n  }\n\n  jump(){\n    if (this.jumping == false) {\n      this.yVelocity -= 45; // -20 To send the object Up\n      this.jumping = true; // So the object cant jump again\n    }\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sprite);\n\n//# sourceURL=webpack:///./src/sprite_animation.js?");

/***/ })

/******/ });