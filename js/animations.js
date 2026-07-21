const animations = {

    idle: {

        image: idleImage,

        frameWidth: 256,
        frameHeight: 256,

        frames: [
            { row: 0, col: 0 },
            { row: 0, col: 1 },
            { row: 1, col: 0 },
            { row: 1, col: 1 }
        ]

    },


    run: {

        image: runImage,

        frameWidth: 256,
        frameHeight: 256,

        frames: [
            { row: 4, col: 1 },
            { row: 4, col: 2 },
            { row: 4, col: 3 },
            { row: 4, col: 4 }
        ]

    },


    jump: {

        image: jumpImage,

        frameWidth: 256,
        frameHeight: 256,

        frames: [
            { row: 1, col: 1 },
            { row: 1, col: 2 },
            { row: 1, col: 3 },
            { row: 2, col: 1 },
            { row: 2, col: 3 },
            { row: 3, col: 0 }
        ]

    }

};


let animation = animations.idle;

let currentFrame = animation.frames[0];

let frameIndex = 0;
let frameTimer = 0;
let frameSpeed = 10;



function setAnimation(name){

    if(animation === animations[name]) return;


    animation = animations[name];

    frameIndex = 0;

    currentFrame = animation.frames[frameIndex];

}



function updateAnimation(){

    frameTimer++;


    if(frameTimer >= frameSpeed){

        frameTimer = 0;

        frameIndex++;


        if(frameIndex >= animation.frames.length){

            frameIndex = 0;

        }


        currentFrame = animation.frames[frameIndex];

    }

}