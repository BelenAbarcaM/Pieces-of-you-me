const player = {

    x: 100,
    y: 500,

    width: 96,
    height: 96,

    spriteOffsetY: 12,

    vx: 0,
    vy: 0,

    previousY: 0,

    onGround: false,

    animation: "idle",

    frame: 0,
    frameTimer: 0,
    frameDelay: 10,

    direction: 1

};

const GRAVITY = 0.5;
const SPEED = 5;
const JUMP = -12;

function updatePlayer(){

    player.previousY = player.y;

    player.vx = 0;


    if(keys["KeyA"]){

        player.vx = -SPEED;

    }


    if(keys["KeyD"]){

        player.vx = SPEED;

    }


    if(
        keys["Space"] &&
        !previousKeys["Space"] &&
        player.onGround
    ){

        player.vy = JUMP;

    }


    player.vy += GRAVITY;


    player.x += player.vx;

    player.y += player.vy;


    if(player.vx > 0){

        player.direction = 1;

    }

    else if(player.vx < 0){

        player.direction = -1;

    }

    // Cambiar animación según el estado

if(!player.onGround){

    setAnimation("jump");

}
else if(player.vx !== 0){

    setAnimation("run");

}
else{

    setAnimation("idle");

}

}

function checkCollisions(){

    player.onGround = false;


    for(const platform of platforms){


        const touchingX =
            player.x + player.width > platform.x &&
            player.x < platform.x + platform.width;


        if(touchingX){


            // cae encima

            if(
                player.previousY + player.height <= platform.y &&
                player.y + player.height >= platform.y &&
                player.vy > 0
            ){

                player.y = platform.y - player.height;

                player.vy = 0;

                player.onGround = true;

            }


            // golpea por abajo

            else if(

                player.previousY >= platform.y + platform.height &&
                player.y <= platform.y + platform.height &&
                player.vy < 0

            ){

                player.y = platform.y + platform.height;

                player.vy = 0;

            }


        }


        const touchingY =
            player.y + player.height > platform.y &&
            player.y < platform.y + platform.height;


        if(touchingY){


            // pared izquierda

            if(
                player.x + player.width >= platform.x &&
                player.x < platform.x &&
                player.vx > 0
            ){

                player.x = platform.x - player.width;

            }


            // pared derecha

            else if(
                player.x <= platform.x + platform.width &&
                player.x + player.width > platform.x + platform.width &&
                player.vx < 0
            ){

                player.x = platform.x + platform.width;

            }


        }

    }

}