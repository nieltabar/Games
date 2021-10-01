var player = $('#player'),
    container = $('#container'),
    bullets = $('.bullet'),
    bullets2 = $('.bullet2'),
    bullet_1 = $('#bullet1'),
    bullet_2 = $('#bullet2'),
    bullet_3 = $('#bullet3'),
	bullet_4 = $('#bullet4'),
	bullet_5 = $('#bullet5'),
	bullet_6 = $('#bullet6'),
	
    restart = $('#restart'),
    score_span = $('#score'),
    score_1 = $('#score_1'),
    life_span = $('#life'),
	
    floor = $('#floor'),
	floor1 = $('#floor1'),
	
    player_height = player.height(),
    container_height = container.height(),
    bullet_height = bullets.height(),
	
    bullet_initial_position = parseInt(bullets.css('right')),
	bullet_initial_position1 = parseInt(bullets.css('top')),
	
    life = 7,
    speed = 4,
    max_speed = 15,
    counter = 0,
    score_updated = false,
    the_game = 0,
    anim_id = 0,
	
    bullet_current_position = 0,
	bullet_current_position1 = 0,
	
    bullet_top = 0,
    player_top = container_height - player_height,
	
	bullet_top1 = 0,
    player_top1 = container_height - player_height,


//  topbullets = [bullets1,bullets2,bullets_1,bullets_2,bullets_3], //bullet11, bullet 33 and bullet 22 in the array naay chance wlay mo drop
// sidebullets = [bullets_4,bullets_5,bullets_6], //bullet44 and bullet 55 in the array naay chance wlay mo drop
//  bulletTopnum = topbullets[Math.floor(numberbullets.length * Math.random())],
//  bulletSidenum = sidebullets[Math.floor(numberbulletsSide.length * Math.random())]; 

	
    bullseye_num = 0;
life_span.text(life);