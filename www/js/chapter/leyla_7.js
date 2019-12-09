var background_img;
var city_img;
var city_sp;

var lamp_sp;
var lamp_on_img;
var lamp_off_img;

var bush_sp;
var bush_img;

var lamp_off_check = false;

var SCENE_W = 1280;
var SCENE_H = 960;

function setup() {

    dialogues = dialogues_raw.chapter7;

    createCanvas(SCENE_W / 2, SCENE_H / 2);

    background_img = loadImage('img/background.png');
    //background_img.resize(SCENE_W / 2, SCENE_H / 2);
    background_img.resize(SCENE_W, SCENE_H);

    city_img = loadImage('img/city_small.png');
    city_sp = createSprite(0, 400);
    city_sp.addImage(city_img);

    create_gamechar();
    create_ground();
    create_textbox();

    lamp_sp = createSprite(350, 400);
    lamp_on_img = loadImage('img/bushlamp1_small.png');
    lamp_off_img = loadImage('img/bushlamp2_small.png');
    lamp_sp.addImage('on', lamp_on_img);
    lamp_sp.addImage('off', lamp_off_img);

    bush_img = loadImage('img/greenbush_small.png');
    bush_sp = createSprite(440, 400);
    bush_sp.addImage(bush_img);

}
function draw() {
    background(background_img);

    apply_gravity();
    basic_movement();

    if (keyWentDown('f')) {
        if (gamechar_sp.overlap(lamp_sp)) {
            if (lamp_sp.getAnimationLabel() == 'on') {
                lamp_sp.changeImage('off');
                lamp_sp.position.x -= 45;
                lamp_sp.position.y += 10;
                lamp_off_check = true;
            } else {
                lamp_sp.changeImage('on');
                lamp_sp.position.x += 45;
                lamp_sp.position.y -= 10;
                lamp_off_check = false;
            }
        } else {
            cur_dialogue_step += 1;
        };
    }

    if ((lamp_off_check) && (gamechar_sp.position.x > 620)) {
        document.location.href = 'chapter8.html';
    }

    check_scene_bounds();
    drawSprites();
    run_dialogue();
}
