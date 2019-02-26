function setup () {
  createCanvas(window.innerWidth, window.innerHeight)
   noLoop()
}

function draw () {
  for (let i = 0; i < 30; i++) {
    let top = random(windowHeight)
    let bottom = random(windowWidth)
    let size = random(20, 300)
    let opacity = random(90)

    fill(0, 0, 255, opacity)
    noStroke()
    ellipse(top, bottom, size, size)
  }
}
