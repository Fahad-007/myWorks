
var tell_fortune = function(){
	var random_number = Math.random() * 2;

	random_number = Math.round(random_number);

	console.log(random_number);

	var answer = '';

	if (random_number == 2) {
		answer = 'YES!';
	}else if (random_number == 1) {
		answer = 'MAYBE...!'
	}else{
		answer = 'NO!';
	}

	document.getElementById('answer').innerHTML = answer;
}

var time =0;
var count_up = function(){
	if (keep_counting == true) {

		time = time + 1;
		document.getElementById('time').innerHTML = time;
		setTimeout(count_up,100);
	}else{
		keep_counting = true;
	}
}


var start = function(){
	document.getElementById('start_button').disabled = true;
	count_up();
}

var keep_counting = true;
var stop = function(){

	keep_counting = false;
	document.getElementById('start_button').disabled = false;
}


var reset = function(){
	time = 0;
	document.getElementById('time').innerHTML = time;
}







var hero = document.getElementById('hero');
var left =0;
var step_num = 1;
var step_sound = new Audio('img/img/203041__jjhouse4__boots-and-spurs_step.mp3');
step_sound.volume = .5;
var massage_box = document.getElementById('massage_box');


var move_hero = function(){

	left =left + 20;

	if (left >= 110) {
		massage_box.innerHTML = 'The dore is locked';
		massage_box.style.display = '';
		hero.src = 'img/img/hero.png';
		return;
	}

	if (step_num > 8) {
		step_num = 1;
	}

	if (step_num == 1 || step_num == 5) {
		step_sound.currentTime = 0;
		step_sound.play();
	}

	hero.style.left =left + 'px';
	hero.src = 'img/img/hero_walking_' +step_num+'.png';
	step_num = step_num + 1;
	setTimeout(move_hero,120);
}

var start_moving = function(){
	massage_box.style.display = 'none';
	move_hero();

}