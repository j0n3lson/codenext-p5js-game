
let minotaur1;

function createMinotaur(spriteFolder){
  let sprite = createSprite(400, 150, 100, 100);
  sprite.addAnimation('attacking', spriteFolder + '/attacking_000.png', spriteFolder + '/attacking_011.png')
  sprite.addAnimation('dying', spriteFolder + '/dying_000.png', spriteFolder + '/dying_014.png')
  sprite.addAnimation('hurt', spriteFolder + '/hurt_000.png', spriteFolder + '/hurt_011.png')
  sprite.addAnimation('idle', spriteFolder + '/idle_000.png', spriteFolder + '/idle_011.png')
  sprite.addAnimation('idle_blinking', spriteFolder + '/idle_blinking_000.png', spriteFolder + '/idle_blinking_011.png')
  sprite.addAnimation('jump_start', spriteFolder + '/jump_start_000.png', spriteFolder + '/jump_start_005.png')
  sprite.addAnimation('jump_loop', spriteFolder + '/jump_loop_000.png', spriteFolder + '/jump_loop_005.png')
  sprite.addAnimation('taunt', spriteFolder + '/taunt_000.png', spriteFolder + '/taunt_017.png')
  sprite.addAnimation('walking', spriteFolder + '/walking_000.png', spriteFolder + '/walking_017.png')

  return sprite;
}

function preload(){
  minotaur1 = createMinotaur('assets/sprites/sequences/minotaur_01');
}

function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(220);
  minotaur1.changeAnimation('idle');
  drawSprites();
}
