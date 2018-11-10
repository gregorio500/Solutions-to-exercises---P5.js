//  
//Build the script in Listing 3-1 in such a way that one variable would control the size of all 
//the circles (meaning changing that variable should change the size of all the circles) and another 
//one should control the radius difference for all the circles
//      
function setup() {
  
  createCanvas(400, 400);
}
function draw() {
  const diameter = 200; 
  background(220);
  // circle 01
  fill(51, 51, 51);
  strokeWeight(2);
  stroke(75);
  ellipse(200, 200, diameter, diameter);
  // circle 02
  fill(255, 53, 139);
  ellipse(200, 200, diameter-60, diameter-60);
  // circle 03
  fill(1, 176, 240);
  ellipse(200, 200, diameter-120, diameter-120);
  // circle 04
  fill(174, 238, 0);
  ellipse(200, 200, diameter-180, diameter-180);  
}