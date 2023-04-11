import Particle from "./particle.js";
import Fire from "./fire.js";

export default class FalconParticle extends Fire {
    constructor (x, y) {
    super (x - 170, y - 170);
    }

    update() {
      this.y = this.y - this.velocity;
      this.velocity = this.velocity * 0.99;
      this.life = this.life + 1;
    }
  
    draw() {
      push();
      translate(this.x, this.y);
      stroke(0, 0, 0);
      strokeWeight(2);
      fill(215, 213, 215);
      
      //wing right
      beginShape();
      vertex(189, 121);
      vertex(189, 79);
      vertex(193, 79);
      vertex(214, 121);
      endShape(); 
      
      //wing left
      beginShape();
      vertex(171, 121);
      vertex(171, 79);
      vertex(167, 79);
      vertex(145, 121);
      endShape();
    
      //body of falcon
      stroke(0, 0, 0);
      strokeWeight(2);
      fill(215, 213, 215);
      ellipse(180, 140, 80, 80);
    
      //right added side to falcon
      beginShape();
      vertex(180, 140);
      vertex(220, 130);
      vertex(220, 150);
      vertex(180, 140);
      endShape();
    
      //left added side to falcon
      beginShape();
      vertex(180, 140);
      vertex(140, 130);
      vertex(140, 150);
      vertex(180, 140);
      endShape();
    
      //added shapes on top of falcon
      rect(172, 87, 16, 50);
      ellipse(180, 140, 20, 20);
    
      //black dots
      fill(0,0,0);
      ellipse(193, 157, 5, 5);
      ellipse(180, 160, 5, 5);
      ellipse(168, 157, 5, 5);
      ellipse(196, 167, 5, 5);
      ellipse(180, 170, 5, 5);
      ellipse(164, 167, 5, 5);
    
      //added weird thing on top
      stroke(0, 0, 0);
      strokeWeight(2);
      fill(215, 213, 215);
      beginShape();
      vertex(197, 124);
      vertex(211, 118);
      vertex(211, 111);
      vertex(219, 111);
      vertex(219, 151);
      vertex(219, 124);
      vertex(201, 129);
      vertex(197, 124);
      endShape();
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