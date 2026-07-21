const camera = {

    x: 0,
    y: 0

};



function updateCamera(){

    camera.x =
        player.x + player.width / 2 - canvas.width / 2;


    camera.x = Math.max(0, camera.x);


    camera.x = Math.min(
        camera.x,
        levelWidth - canvas.width
    );

}