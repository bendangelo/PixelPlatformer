
/*
extend preload scene
*/
re.scene('preload')
.enter(function(){
	
	re.tile.sizeX = re.config.tileSizeX;
	re.tile.sizeY= re.config.tileSizeY;
	
	//find supported music type
	//ogg or mp3
	var type = re.support('mp3', 'ogg');
	
	//append file type
	for(var i in re.config.sounds){
		re.config.sounds[i] += type;
	}
	
	//compile file list
	//append file type to load list
	var files = re.config.sounds.concat(re.config.images);
	
	re.sys.clearColor = re.config.backColor;
	
	if(re.config.release){
		re.load.path = '/assets/pixelplat/';
	} else {
        re.load.path = './assets/';
    }
	
	var mar = 20;
	//show link
	re.e('font anchor')
	.extend('text','http://entityjs.com')
	.bottom(-mar)
	.right(-130);
	
	var maxBarSize = 100;
	
	//preload bars
	re.c('bar')
	.require('anchor rect')
	.extend({
		sizeX:maxBarSize,
		sizeY:40
	})
	.init(function(){
		this.bottom(-mar);
		this.left(mar);
	});
	
	re.e('bar')
	.color = '#ea787b';
	
	var bar = re.e('bar')
	.extend({
	color:'#d44c4f',
	sizeX:0
	});
	
	re.load(files)
	.complete(function(){
		
		//center onto screen
		re.screen.regX -= re.tile.sizeX * 0.5;
		re.screen.regY -= re.tile.sizeY * 0.5;
		
		re.c('font.png')
		.require('bitfont anchor')
		.inherit({
			charWidths:[
8,4,8,12,10,12,12,4,6,6,8,8,6,8,4,12,10,6,10,10,10,10,10,10,10,10,4,4,8,8,8,10,
12,10,10,8,10,8,8,10,10,8,10,10,8,12,10,10,10,10,10,10,8,10,10,12,10,10,8,6,12,
6,8,10,6,10,10,8,10,10,8,10,10,4,6,10,4,12,10,10,10,10,8,10,8,10,10,12,8,10,10,8,4,8],
		charCache:{}
		});
		
		var attrs = {
			
			frameX:0,
			frameY:0,
			
			sizeX:re.tile.sizeX,
			sizeY:re.tile.sizeY,
			
			regX:re.tile.sizeX * 0.5,
			regY:re.tile.sizeY * 0.5
		};
		
		//setup sizes
		re.c('tiles.png')
		.extend(attrs);
		
		re.c('hero.png')
		.extend(attrs);
		
		re.c('items.png')
		.extend(attrs);
		
		//go to home scren
		if(!re.config.debug) re.scene(re.scene.home);
		else re.scene(re.scene.map);
		
	})
	.progress(function(c, t, a){
		
		bar.sizeX = (c / t) * maxBarSize;
		
	})
	.error(function(a){
		console.log('Error loading asset '+a);
	});
	
})
.exit(function(){
	
	re('draw').dispose();
	
});