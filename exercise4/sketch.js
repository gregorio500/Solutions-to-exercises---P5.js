

// Build a script that would draw a rectangle to the screen at every
//  mouse click, at the position of the mouse cursor.
//  

function setup() {
  createCanvas(400, 400);
  background(20);
}

function draw() {
  const rectWidth = 50;
  const rectHeight = 20;
  const x = mouseX-rectWidth/2;
  const y = mouseY-rectHeight/2;
  
  mouseIsPressed == true ? rect(x, y, rectWidth, rectHeight) : 0;
}

