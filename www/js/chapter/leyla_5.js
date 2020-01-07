var background_img;

var poster_img;
var poster_sp;

var spot_img;
var spot_1_sp;
var spot_2_sp;
var spot_1_up;
var spot_2_up;
var spot_places = [];

var platform_1_sp;
var platform_2_sp;
var platform_3_sp;
var platforms = [];

var pickables = [];
var picked;

function setup() {

    dialogues = dialogues_raw.chapter5;

    createCanvas(SCENE_W, SCENE_H);

    background_img = loadImage('img/bg_lvl2.png');

    create_gamechar();
    create_ground();
    create_textbox();

    platform_1_sp = createSprite((3 * SCENE_W / 4) - 100, SCENE_GROUND - 50, 25, 5);
    platform_2_sp = createSprite((3 * SCENE_W / 4) - 100, SCENE_GROUND - 100, 25, 5);
    platform_3_sp = createSprite((3 * SCENE_W / 4) - 15, SCENE_GROUND - 155, 200, 5);
    platforms.push(platform_1_sp);
    platforms.push(platform_2_sp);
    platforms.push(platform_3_sp);

    poster_sp = createSprite(3 * SCENE_W / 4, SCENE_GROUND - 80);
    poster_img = loadImage('img/plakat_small.png');
    poster_sp.addImage(poster_img);

    spot_img = loadImage('img/plakatstrahler_small.png')
    spot_1_sp = createSprite((3 * SCENE_W / 4) - 50, SCENE_GROUND - 120);
    spot_1_up = createSprite((3 * SCENE_W / 4) - 50, SCENE_GROUND - 180, 20 , 20);
    spot_1_sp.addImage(spot_img);
    pickables.push(spot_1_sp);
    spot_places.push(spot_1_up);
    spot_1_up.visible = false;

    spot_2_sp = createSprite((3 * SCENE_W / 4) + 50, SCENE_GROUND - 120);
    spot_2_up = createSprite((3 * SCENE_W / 4) + 50, SCENE_GROUND - 180, 20 , 20);
    spot_2_sp.addImage(spot_img);
    pickables.push(spot_2_sp);
    spot_places.push(spot_2_up);
    spot_2_up.visible = false;

}

function draw() {

    background(background_img);
    apply_gravity();
    basic_movement();

    if (keyWentDown('f')) {
      if ( !picked ) {
        for (var i = 0; i < pickables.length; i++) {
          var pickable = pickables[i];
          if ( (gamechar_sp.overlap(pickable)) && (pickable.mirrorY() != -1) ) {
            picked = pickable;
            picked.visible = false;
        } else {
            cur_dialogue_step += 1;
        }
        }
      } else {
        for (var i = 0; i < spot_places.length; i++) {
          var spot_place = spot_places[i];
          if (gamechar_sp.overlap(spot_place)) {
            picked.visible = true;
            picked.mirrorY(-1);
            picked.position.y = picked.position.y + 10;
            picked = null;
        } else {
            cur_dialogue_step += 1;
        }
        }
      }
    }

    if ( (spot_1_sp.mirrorY() == -1) &&
         (spot_2_sp.mirrorY() == -1) &&
         (gamechar_sp.position.x > SCENE_RBOUND) ) {
        transition('chapter6.html');
    }

    check_scene_bounds();
    drawSprites();
    run_dialogue();
}
