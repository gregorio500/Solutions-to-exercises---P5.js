
//Build a function called countdown that will get two arguments – a number
//  and a message – (Listing 10-22) and will create a visualization that is similar 
//  to the one above, which will display a countdown from the given number to the number 0. 
//  At the end of the countdown, it should display the given message, the second argument, to the screen.
// 

function setup() {
  createCanvas(400, 400);
  background(26);
  textAlign(CENTER, CENTER);
}

function draw(){
  countdown(10, "Launch", 1);
}

function countdown(number, endText, rate) {
  frameRate(rate);
  let arr = [];
  for(let i = 0; i < number+1; i++){
    arr.push(number-i);
  }
  let currentIdx = frameCount % arr.length;
  let currentNum = arr[currentIdx];
  background(20);
  fill(200, 100,10);
  textSize(35);
  text(currentNum+1, width/2, height/2);
  if(currentIdx == 0) {
    background(20); 
    text(endText, width/2, height/2);
  } else { return; }
}




