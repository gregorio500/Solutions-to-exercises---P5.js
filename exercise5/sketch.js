
// Create a loop that would create an array of rectangles that have
// their color changed gradually from black to white 
//You should build the loop in such a way that a single variable would 
//control the number of rectangles drawn.
// 

function setup(){
  createCanvas(400, 400);
  background(20);
}

function draw() {
  const rectAmount = 10;
  const rectWidth = 400 / rectAmount;
  const rectHeight = 400;
  
  for(let i = 0; i < rectAmount; i++) {
    fill(10 + i * 20);
    rect(width/rectAmount*i, 0, rectWidth, rectHeight);
  }
}




