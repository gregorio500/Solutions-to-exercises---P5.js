      
      // Create a function called grid that would work with three parameters: a numX and 
      // a numY parameter that would create numX amount of shapes (say rectangles) on the
      //  x-axis and numY amount of shapes on the y-axis and a size parameter that would set the size of the shapes.
      //  
      
      function setup() {
        createCanvas(400, 400);
        background(20);
      }
      function draw() {
        grid(10, 10, 10);
      }
      
      function grid(numX, numY, size) {
        for(let i = 0; i < width/numX; i++) {
          for(let j = 0; j < height/numY; j++) {
            rect(width / numX * i,  width / numY * j, size, size);
          }
        }
      }


      // more complex animation

      // function setup() {
      //   createCanvas(400, 400);
      //   background(20);
        
      // }
      
      // function draw() {
      //   background(10);
      //   fill(30, 20, 200);
      //   noStroke();
      //   let diameter = 40; 
        
      //   for(let i = 0; i < width / diameter; i++) {
      //     for(let j = 0; j <  height / diameter; j++) {
      //       ellipse(diameter/2 + diameter *i, diameter/2 + diameter * j, diameter * noise(frameCount/60+ j*1000 + i * 100));
      //     }
      //     console.log(noise(frameCount/600 + i*1000));
      //   }
      // }
      
      
      
      
     