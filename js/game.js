const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");


canvas.width = 1280;
canvas.height = 720;

function update(){

    updatePlayer();

    checkCollisions();

    updateAnimation();

    updateCamera();


    for(const key in keys){

        previousKeys[key] = keys[key];

    }

}

function draw(){

    ctx.clearRect(0,0,canvas.width,canvas.height);


    // Fondo

    ctx.drawImage(
        background,
        0,
        0,
        canvas.width,
        canvas.height
    );


    ctx.save();


    // Cámara

    ctx.translate(
        -camera.x,
        -camera.y
    );


    // Plataformas

    ctx.fillStyle = "#6b7280";

    for(const platform of platforms){

        ctx.fillRect(
            platform.x,
            platform.y,
            platform.width,
            platform.height
        );

    }


    // Jugador

    ctx.save();


    if(player.direction === -1){

        ctx.scale(-1,1);


        ctx.drawImage(

            animation.image,

            currentFrame.col * animation.frameWidth,
            currentFrame.row * animation.frameHeight,

            animation.frameWidth,
            animation.frameHeight,

            -(player.x + player.width),
            player.y + player.spriteOffsetY,

            player.width,
            player.height

        );


    } else {


        ctx.drawImage(

            animation.image,

            currentFrame.col * animation.frameWidth,
            currentFrame.row * animation.frameHeight,

            animation.frameWidth,
            animation.frameHeight,

            player.x,
            player.y + player.spriteOffsetY,

            player.width,
            player.height

        );

    }


    ctx.restore();


    ctx.restore();

}
function gameLoop(){

    update();

    draw();

    requestAnimationFrame(gameLoop);

}

gameLoop();