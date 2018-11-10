//Try building something cool on your own before moving on to the next chapter 
//where we will be building an interactive game together!

let particles =[];
let particle;
function setup() {
      createCanvas(400, 400);
}

function draw() {
      background(20);
      for(let i = 0; i< 3; i++) {
            particle = new Particle(width/2, 390);
            particles.push(particle);
      }
      
      for(let particle of particles) {
            particle.show();
            particle.update();
      }
      particles = particles.filter((val, idx) => val.alpha < 0 ? particles.splice(idx, 1) : 1);
}


class Particle {
      constructor(x, y, vx, vy){
            this.x = mouseX;
            this.y = mouseY;
            this.vx = random(1,-1);
            this.vy = random(-5);
            this.alpha = 250;
      }
      show() {
            noStroke()
            ;            //stroke(255);
            fill(200, this.alpha);
            ellipse(this.x, this.y, 20, 20);
      }
      update() {
            this.x = this.x+this.vx;
            this.y = this.y+this.vy;
            this.alpha -=4;
            
            
      }
}

