
let minotaur1;

function createMinotaur(spriteFolder){
  let sprite = createSprite(400, 150, 100, 100);

  let actionFrameCount = new Map();
  actionFrameCount.set('attacking', 11);
  actionFrameCount.set('walking', 17); 
  actionFrameCount.set('taunt', 17);
  actionFrameCount.set('idle_blinking', 11);
  actionFrameCount.set('jump_start', 5);
  actionFrameCount.set('jump_loop', 5);

  actionFrameCount.forEach((frameCount, actionName) => {
    const firstFrameFileName = `${spriteFolder}/${actionName}_000.png`;
    let finalFrameFileName;
    if(frameCount <= 9){
      finalFrameFileName = `${spriteFolder}/${actionName}_00${frameCount}.png`;
    } else {
      finalFrameFileName = `${spriteFolder}/${actionName}_0${frameCount}.png`;
    }
    let anim = sprite.addAnimation(actionName, firstFrameFileName, finalFrameFileName);

    // After animation completes, reset the animation to the idle animation.
    // This avoid having to check whether the control keys have been released
    // on each draw() iterattion. This approach does seem to be more latent
    // than just checking inside draw() however.
    if(["attacking", "walking", "taunt", "jump_loop"].includes(actionName)){
      anim.onComplete = function() {
        sprite.changeAnimation('idle_blinking');
        sprite.velocity.x = 0;
     }
    }
  });

  return sprite;
}

function preload(){
  minotaur1 = createMinotaur('assets/sprites/sequences/minotaur_01');
  backgroundImg = loadImage('assets/backgrounds/battleground4/pale/battleground4.png');
}

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(backgroundImg);
  
  if(keyDown('f')){ // Walking right
    minotaur1.mirrorX(1)
    minotaur1.changeAnimation('walking');
    minotaur1.velocity.x = 10;
  } else if(keyDown('s')){ // Walking left
    minotaur1.mirrorX(-1)
    minotaur1.changeAnimation('walking');
    minotaur1.velocity.x = -10;
  } else if(keyDown('e')){
    minotaur1.changeAnimation('jump_start');
    minotaur1.changeAnimation('jump_loop');
  } else if(keyDown('c')){ // Attacking
    minotaur1.changeAnimation('attacking');
  } else if(keyDown('t')){ // Taunting
    minotaur1.changeAnimation('taunt');
  }
  drawSprites();
}
