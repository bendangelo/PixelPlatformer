/*
Level scene

Just a note: Lots of this could should be implemented in its own
component for organization and flexibility. For a small project
like this, its no big deal.
*/

re.scene(re.scene.map)
.enter(function(level){
	
	if(arguments.length == 0){
		
		level = re.config.current++;
	}
	if(level == -1){
		//restart level
		level = re.config.current-1;
	}
	
	if(re.config.debug){
		level = 4;
	}
	
	var l = re.level.get(level);
	
	var m = l.map;
	var back = l.back;
	
	//setup physics
	re.hitmap = re.e('hitmap').copy(l.hits);
	
	//add custom hitmap values
	//check for cloud hit
	re.hitmap.checkAxisY = function(value, x, y, vx, vy){
		return value == 1 || vy > 0 && value == 2;
	}
	
	re.physics.graY = 30 * re.sys.stepSize;
	
	//setup background
	for(var y=0; y<back.length; y++){
		for(var x=0; x<back[0].length; x++){
			
			var n = back[y][x];
			
			if(n == 0) continue;
			
			var b = re.e('tileback')
			.setTile(x, y)
			.setFrameId(n-1);
			
		}
	}
	
	//spawn hero
	this.hero = re.e('hero')
	.setPos(re.tile.sizeX * l.spawn[0], re.tile.sizeY * l.spawn[1]);
	
	//spawn item objects
	re.c('item').hero = this.hero;
	
	//setup tiles
	
	for(y=0; y<m.length; y++){
		for(x=0; x<m[0].length; x++){
			n = m[y][x];
			
			if(n == 0) continue;
			
			if(typeof n == 'string'){
				
				re.e(n).place({xt:x, yt:y});
				
				continue;
			}
			
			re.e('tilesprite')
			.setTile(x, y)
			.setFrameId(n-1);
			
			if(l.autoHit){
				re.hitmap.set(x, y, 1);
			}
			
		}
	}
	
	
	//add items
	for(x=0; x<l.items.length; x++){
		it = l.items[x];
		
		//good abstraction so now item can do anything with the data
		re.e(it[0]).place(it[1]);
	}
	
	//add coin counter
	re.e('counter')
	.extend('max', re('coin').length());
	
	var halfx = re.tile.sizeX * 0.5;
	var halfy = re.tile.sizeY * 0.5;
	
	//stop screen from moving off
	re.screen.addComp('bind');
	
	//must update AFTER heros movement phase
	re.screen.updateAfter(this.hero);
	
	var maxX = Math.max(m[0].length * re.tile.sizeX, re.screen.sizeX) - re.screen.sizeX -halfx;
	var maxY = Math.max(re.tile.sizeY * m.length, re.screen.sizeY) - re.screen.sizeY - halfy;
	
	re.screen.setBind(-halfx, -halfy, maxX, maxY);
	
	//always render last to be on top
	this.hero.drawLast();
	
})
.exit(function(){
	
	//clean up
	re('tilesprite').dispose();
	
	re.hitmap.dispose();
	this.hero.dispose();
	
	re('counter').dispose();
	re('particle').dispose();
	re('item').dispose();
	
	re.screen.posX = 0;
	re.screen.posY = 0;
});