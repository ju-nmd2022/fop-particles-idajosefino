import Particle from "./particle.js";
import Fire from "./fire.js";

export default class FlowerParticle extends Fire {
    constructor (x, y) {
    super (x - 170, y - 170);
    this.x = this.x + (Math.random() * 20);
    this.velocity = 1 + Math.random() * 10;
    this.life = 0;
    this.maxLife = 50 + Math.floor(Math.random() * 30);
    }

    update() {
      this.y = this.y + this.velocity;
      this.x = this.x + this.velocity;
      this.life = this.life + 1;
    }
  
    draw() {
      push();
      translate(this.x, this.y);
      noStroke();
    
      //left
      stroke(0, 0, 0);
      strokeWeight(2);
      fill(255,255,0);
      ellipse(135, 140, 40, 40);

      stroke(0, 0, 0);
      strokeWeight(2);
      fill(255,255,0);
      ellipse(147, 107, 40, 40);

      //upper
      stroke(0, 0, 0);
      strokeWeight(2);
      fill(255,255,0);
      ellipse(180, 90, 40, 40);

      stroke(0, 0, 0);
      strokeWeight(2);
      fill(255,255,0);
      ellipse(212, 107, 40, 40);

      //lower
      stroke(0, 0, 0);
      strokeWeight(2);
      fill(255,255,0);
      ellipse(180, 180, 40, 40);

      stroke(0, 0, 0);
      strokeWeight(2);
      fill(255,255,0);
      ellipse(212, 170, 40, 40);

      //right
      stroke(0, 0, 0);
      strokeWeight(2);
      fill(255,255,0);
      ellipse(225, 140, 40, 40);

      stroke(0, 0, 0);
      strokeWeight(2);
      fill(255,255,0);
      ellipse(147, 170, 40, 40);

      //body of falcon
      stroke(0, 0, 0);
      strokeWeight(2);
      fill(150, 75, 0);
      ellipse(180, 140, 80, 80);
      pop();

    }
  
    isDead() {
    if (this.life > this.maxLife) {
      return true;
    } else {
      return false;
    }
    }
  }