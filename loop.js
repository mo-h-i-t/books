if (rain.collided) {
  let particle1 = new RainParticle(location.x, getParticleX(), velocity.y);
  particles.push(particle1);
  let particle4 = new RainParticle(location.x, getParticleX(), velocity.y);
  particles.push(particle4);

  raindrop[i].relive(rain);
}
raindrop[i].fall();
raindrop[i].draw();


for (let i = 0; i < particles.length; i ++) {
particles[i].splash();
particles[i].draw(particles, i);
}
requestAnimationFrame(animate);


// animation initiate
setup();
requestAnimationFrame(animate);