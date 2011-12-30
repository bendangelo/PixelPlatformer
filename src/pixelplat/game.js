/*
Platformer game

Copyright 2011, Ben D'Angelo

Made in version 0.2.1 of Entity

*/
re.config = {
	canvas:'#game',
	//Theme song from: http://www.newgrounds.com/audio/listen/449618
	sounds:['theme.', 'coin.', 'die.','action.'],
	images:['tiles.png', 'hero.png', 'items.png', 'font.png', 'title.png', 'back.png'],
	
	tileSizeX:25,
	tileSizeY:25,
	
	backColor:'#D6F8FA',
	
	version:1.1,
	
	current:0,
	
	debug:true,
	release:false

};

//quick reference for creating maps
var c = 'coin';
var l = 'ladder';
var b = 'block';
var s = 'spike';
var p = 'spring';
var w = 'water';
var wt = 'topwater';
var i = 'win';
var o = 'cloud';
var a = 'apple';
var d = 'topacid';
var da = 'acid';

//setup control keys
re.controls = {};
re.controls.right = ['right', 'd'];
re.controls.left = ['left', 'a'];
re.controls.up = ['up', 'w'];
re.controls.down = ['down', 's'];

//scenes
re.scene.preload = 'preload';
re.scene.home = 'home';
re.scene.map = 'map'
re.scene.credits = 'credits';
re.scene.score = 'score';

re.ready(function(){

    re.sys.init(re.config.canvas).start();
	
    re.screen = re.e('screen')
    .extend({
    sizeX:480,
    sizeY:320,
    regX:480/2,
    regY:320/2
    });
        
	re.scene(re.scene.preload);
	
});