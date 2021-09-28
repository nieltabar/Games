function bullet_right(bullet) {
    bullet_current_position = parseInt(bullet.css('right'));
    bullet.css('right', bullet_current_position + speed);
}

function check_bullet_hits_floor_right(bullet) {
    if (collision(bullet, floor)) {
        show_bulls_eye_right(bullet);
//        decrement_life();
        return true;
    }
    return false;
}

function set_bullet_to_initial_position_right(bullet) {
    bullet.css('right', bullet_initial_position);
}

function show_bulls_eye_right(bullet) {
    bullseye_num = bullet.attr('data-bullseye');
    $('#bullseye' + bullseye_num).show();
    hide_bulls_eye_right(bullseye_num);
}

function hide_bulls_eye_right(bullseye_num) {
    setTimeout(function () {
        $('#bullseye' + bullseye_num).hide();
    }, 800);
}

function decrement_life() {
    life--;
    life_span.text(life);
}

function check_bullet_hits_player_right(bullet) {
    if (collision(bullet, player)) {
        bullet_top = parseInt(bullet.css('right'));
        if (bullet_top < player_top) {
            decrement_life();
            return true;
        }
    }
    return false;
}

function stop_the_game() {
    cancelAnimationFrame(anim_id);
    restart.slideDown();
}

restart.click(function () {
    location.reload();
});


function bullet_down(bullet) {
    bullet_current_position1 = parseInt(bullet.css('top'));
    bullet.css('top', bullet_current_position1 + speed);
}

function check_bullet_hits_floor_down(bullet) {
    if (collision(bullet, floor1)) {
        show_bulls_eye_down(bullet);
//        decrement_life();
        return true;
    }
    return false;
}

function set_bullet_to_initial_position_down(bullet) {
    bullet.css('top', bullet_initial_position1);
}

function show_bulls_eye_down(bullet) {
    bullseye_num = bullet.attr('data-bullseye');
    $('#bullseye' + bullseye_num).show();
    hide_bulls_eye_down(bullseye_num);
}

function hide_bulls_eye_down(bullseye_num) {
    setTimeout(function () {
        $('#bullseye' + bullseye_num).hide();
    }, 800);
}

function check_bullet_hits_player_down(bullet) {
    if (collision(bullet, player)) {
        bullet_top1 = parseInt(bullet.css('top'));
        if (bullet_top1 < player_top1) {
            decrement_life();
            return true;
        }
    }
    return false;
}



//====== UP BULLETS

function bullets_down(bullet) { //tagak ang bullet
    bullets_current_position = parseInt(bullet.css('top'));
    bullet.css('top', bullets_current_position + speedUp);
}


function check_bullets_hits_floor(bullet){  //Iyaha tan.awon if ang bullet na collide sa floor
    if(collision(bullet, bottomfloor)){
        return true;
    }
    return false;
}
function set_bullets_initial_position(bullet){ //balik sa position ang bala
    bullet.css('top', bullets_initial_position);
}

function check_bullet_hitsplayer(bullet){  //check if na.igo si patuti
    if(collision(bullet, Patuti)){
        bullet_top = parseInt(bullet.css('top'));  //check if patuti's head got hit if not then no hit
        if(bullet_top < Patuti_top/2){
            decrease_life()
            return true;
        }      
    }
    return false;
}

// -------- Side Bullets -----------------
function bullet_left(bullet2) {
    bullets_current_position2 = parseInt(bullet2.css('right'));
    bullet2.css('right', bullets_current_position2 + speedSide);
}
function check_bullets_hits_leftfloor(bullet2){  //Iyaha tan.awon if ang bullet na collide sa floor
    if(collision(bullet2, leftfloor)){
        return true;
    }
    return false;
}
function set_bullets_initial_position2(bullet2){ //balik sa position ang bala
    bullet2.css('right', bullets_initial_position2);
}
function check_bullet2_hitsplayer(bullet2){
    if(collision(bullet2, Patuti)){
        bullet_sideright = parseInt(bullet2.css('right')); //check if patuti's right side got hit if not then no hit
        if(bullet_sideright < Patuti_side/1.2){
            decrease_life()
            return true;
        }      
    }
    return false;
}