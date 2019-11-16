var background_img;

var gamechar_sp;
var gamechar_img;

var lamp_sp;
var lamp_off_img;
var lamp_on_img;

function setup() {
    createCanvas(640, 480);

    background_img = loadImage('img/background_full.png');
    background_img.resize(640, 480);

    gamechar_sp = createSprite(50,440);
    gamechar_img = loadImage('img/char_small.png');
    gamechar_sp.addImage(gamechar_img);

    lamp_sp = createSprite(450, 400);
    lamp_on_img = loadImage('img/lampe_small.png');
    lamp_off_img = loadImage('img/lampe_off_small.png');
    lamp_sp.addImage('on', lamp_on_img);
    lamp_sp.addImage('off', lamp_off_img);

    //gamechar_sp.addAnimation('normal', 'img/char.png');

}
function draw() {
    background(background_img);

    //gamechar_sp.velocity.x = 0;
    //gamechar_sp.velocity.y = 0;

    if (keyWentDown('a') || mouseWentDown(RIGHT)) {
        gamechar_sp.velocity.x = -5;
    }
    if (keyWentUp('a') || mouseWentUp(RIGHT)) {
        gamechar_sp.velocity.x = 0;
    }

    if (keyWentDown('d') || mouseWentDown(LEFT)) {
        gamechar_sp.velocity.x = 5;
    }
    if (keyWentUp('d') || mouseWentUp(LEFT)) {
        gamechar_sp.velocity.x = 0;
    }

    if (keyWentDown('f')) {
        gamechar_sp.overlap(lamp_sp, function() {
            if (lamp_sp.getAnimationLabel() == 'on') {
                lamp_sp.changeImage('off');
            } else {
                lamp_sp.changeImage('on');
            }
        });
    }

    drawSprites();
}
