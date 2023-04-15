const { VerletPhysics2D, VerletParticle2D, VerletSpring2D } = toxi.physics2d;

let physics;
let particleA;

function setup() {
  createCanvas(640, 360);

  physics = new VerletPhysics2D();
  particleA = new VerletParticle2D(250, 100);
}

function draw() {
  background(220);

  fill(0);
  circle(particleA.x, particleA.y, 16);
}
