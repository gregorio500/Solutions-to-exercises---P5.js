
      // 2. Create an animation where five rectangles that are initially offscreen are animated to enter the screen
      // from the left-hand side and exit from the right-hand side. They should also be moving at different speeds.
      // 
      
      function setup() {
        createCanvas(400, 400);
        background(20);
      }
      
      let speed1 = 0;
      let speed2 = 0;
      function draw() {
        //background(20);   it's neccessary to update the frame
        //rect1
        fill(10, 100, 200);
        rect(-50+speed2, 50, 50, 30)
        //rect2
        fill(200, 100, 100);
        rect(-50+speed1, 100, 50, 30)
        //rect3
        fill(200, 150, 200);
        rect(-50+speed2, 150, 50, 30)
        //rect4
        fill(200, 200, 30);
        rect(-50+speed1, 200, 50, 30)
        //rect5
        fill(100, 250, 100);
        rect(-50+speed1, 250, 50, 30)
        
        speed1 = speed1 + 1;  //value of the speed
        speed2 = speed2 + 3;
      }
      
      
      
      