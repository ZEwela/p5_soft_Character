// import { VerletPhysics2D, VerletParticle2D, VerletSpring2D } from "toxiclibsjs";

let physics;
let particleA;

function setup() {
  createCanvas(640, 360);

  physics = new toxi.physics2d.VerletPhysics2D();
}

function draw() {
  background(220);

  fill(0);
  circle(230, 100, 16);

  var myVector = new toxi.geom.Vec2D(
    window.innerWidth,
    window.innerHeight
  ).scaleSelf(0.5);
  var myColor = toxi.color.TColor.newRGB(128 / 255, 64 / 255, 32 / 255);
}
