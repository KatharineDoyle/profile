$(document).ready(function(){

var canvas = $('canvas.dots');
var context = canvas[0].getContext('2d');
var canvasWidth = canvas.width();
var canvasHeight = canvas.height();
canvas.attr({height: canvasHeight, width: canvasWidth});

// Set an array of dot objects.
var dots = [
  { x: 100, y: 3000, radius: 150, xMove: '+', yMove: '+' },
  { x: 450, y: 20, radius: 150, xMove: '-', yMove: '+' },
  { x: 250, y: 300, radius: 150, xMove: '+', yMove: '-' },
  { x: 500, y: 700, radius: 150, xMove: '-', yMove: '-' },
  { x: 75, y: 1000, radius: 150, xMove: '+', yMove: '+' },
  { x: 69, y: 500, radius: 150, xMove: '-', yMove: '+' },
  { x: 20, y: 180, radius: 150, xMove: '+', yMove: '-' },
  { x: 190, y: 99, radius: 150, xMove: '-', yMove: '-' },
];

var frameLength = 3;

// Draw each dot in the dots array.
for( i = 0; i < dots.length; i++ ) {
  drawDot(dots[i]);
};

setTimeout(function(){
  window.requestAnimationFrame(moveDot);
}, 2500);


function moveDot() {
  context.clearRect(0, 0, canvasWidth, canvasHeight)

  // Iterate over all the dots.
  for( i = 0; i < dots.length; i++ ) {

    if( dots[i].xMove == '+' ) {
      dots[i].x += frameLength;
    } else {
      dots[i].x -= frameLength;
    }
    if( dots[i].yMove == '+' ) {
      dots[i].y += frameLength;
    } else {
      dots[i].y -= frameLength;
    }

    drawDot(dots[i])

    if( (dots[i].x + dots[i].radius) >= canvasWidth ) {
      dots[i].xMove = '-';
    }
    if( (dots[i].x - dots[i].radius) <= 0 ) {
      dots[i].xMove = '+';
    }
    if( (dots[i].y + dots[i].radius) >= canvasHeight ) {
      dots[i].yMove = '-';
    }
    if( (dots[i].y - dots[i].radius) <= 0 ) {
      dots[i].yMove = '+';
    }
  }

  // Render it again
  window.requestAnimationFrame(moveDot);
}

function drawDot(dot) {
  context.beginPath();
  context.arc(dot.x, dot.y, dot.radius, 0, 2 * Math.PI, false);
  context.fillStyle = 'rgb(184, 190, 224, 0.5)';
  context.fill();
}
});
