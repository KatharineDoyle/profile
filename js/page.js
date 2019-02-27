

// function setup () {
//   createCanvas(window.innerWidth, window.innerHeight)
//    noLoop()
// }

// function draw () {
//   for (let i = 0; i < 30; i++) {
//     let top = random(windowHeight)
//     let bottom = random(windowWidth)
//     let size = random(20, 300)
//     let opacity = random(90)

//     fill(0, 0, 255, opacity)
//     noStroke()
//     ellipse(top, bottom, size, size)
//   }
// }
$(document).ready(function(){

// Setup the canvas element.
var canvas = $('canvas.dots');
var context = canvas[0].getContext('2d');
var canvasWidth = canvas.width();
var canvasHeight = canvas.height();
canvas.attr({height: canvasHeight, width: canvasWidth});

// Set the number of frames we want to run.
var frames = 150;

// We have a currentFrame reference which essentially tracks our place in time.
var currentFrame = 0;

// Set and create our dot.
var dot = { x: 50, y: 50, radius: 25 };
drawDot(dot);

// Start the animation frame 2.5 seconds after the page loads.
setTimeout(function(){
  window.requestAnimationFrame(moveDot);
}, 2500);

// This function moves the dot down and to the right in each frame.
function moveDot() {

  // Clear the canvas so we can draw on it again.
  context.clearRect(0, 0, canvasWidth, canvasHeight)

  // Adjust the dot's x and y values down and to the right.
  dot.x += 1;
  dot.y += 1;

  // Draw the dot again (remember, we wiped it away with clearRect above).
  drawDot(dot)

  // Move the current time forward by one frame.
  currentFrame += 1;

  // If we've reached our maximum number of frames, reset the dot and start
  // over.
  if( currentFrame == frames ) {
    currentFrame = 0;
    dot = { x: 50, y: 50, radius: 25 };
  }

  // Call this function again.
  window.requestAnimationFrame(moveDot);
}

function drawDot(dot) {
  context.beginPath();
  context.arc(dot.x, dot.y, dot.radius, 0, 2 * Math.PI, false);
  context.fillStyle = '#F03C69';
  context.fill();
}
});
