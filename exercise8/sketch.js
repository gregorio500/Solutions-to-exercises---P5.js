

// Draw a rectangle to the screen where the keyboard arrow 
// keys can control the position of the rectangle.
// Page 149

let rectangle;
function setup() {
      createCanvas(400,400);
      background(20);
      rectangle = new Square(20, 30);
      
}

function draw() {
      rectangle.draw();
}

class Square {
      constructor(x, y) {
            this.x = x;
            this.y= y;
      }
      draw() {
            fill(200, 100, 50);
            rect(this.x, this.y, 80, 27);
      }
      
      keyPress(){
            keyCode === UP_ARROW ? this.y = this.y - 1 : 0;
            keyCode === DOWN_ARROW ? this.y = this.y + 1 : 0;
            keyCode === RIGHT_ARROW ? this.x = this.x + 1 : 0;
            keyCode === LEFT_ARROW ? this.x = this.x - 1 : 0;    
      }   
}
function keyPressed(){ 
      rectangle.keyPress();  
}



