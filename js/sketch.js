import Fire from "./fire.js";
import FalconParticle from "./falconparticle.js";
import FlowerParticle from "./flowerparticle.js";

let particles = [];

function setup() {
  createCanvas(innerWidth, innerHeight);
}
window.setup = setup;

function draw() {
  background(255, 255, 255);

  for (let particle of particles) {
    particle.draw();
    particle.update();
    if (particle.isDead()) {
      const particleIndex = particles.indexOf(particle);
      particles.splice(particleIndex, 1);
    }
  }
}
window.draw = draw;

function mouseClicked() {
  for (let i = 0; i < 1; i++) {
    let particle = new FalconParticle (mouseX, mouseY);
    particles.push(particle);
  }
}
window.mouseClicked = mouseClicked;

function keyPressed() {
  if (keyIsDown(32)) {
    for (let i = 0; i < 10; i++) {
      let particle = new FlowerParticle (mouseX, mouseY);
      particles.push(particle);
    }
  }
}
window.keyPressed = keyPressed;