re.c('item')
.require('sprite update hittest items.png')
.namespace({
	
	update:function(t){
		
		if(!this.hero.dead && this.hero.touchesBody(this.posX, this.posY, this.sizeX, this.sizeY, 10, 0)){
			this.touching = true;
			this.touch(t);
			
		} else if(this.touching){
			
			this.touching = false;
			
			this.untouch(t);
		}
		
	}
	
})
.inherit({
	
	touching:false,
	
	touch:function(){
	
	},
	
	untouch:function(){
	
	}
	
})
.extend({
	
	place:function(obj){
		
		if(typeof obj.xt == 'number')
			this.posX = obj.xt * re.tile.sizeX;
		else
			this.posX = obj.x;
		
		if(typeof obj.yt == 'number')
			this.posY = obj.yt * re.tile.sizeY;
		else 
			this.posY = obj.y;
			
		var that = this;
		
		//multiply objects
		if(obj.mul){
			this.clone(obj.mul-1).each(function(i, t){
				//turn last one into a cap
				if(i == t-1 && this.cap){
					this.addComp(this.cap);
				}
				
				i++;
				
				this.posX = that.posX;
				this.posY = that.posY;
				
				if(obj.hor)
					this.posX += re.tile.sizeX * obj.hor * i;
				
				if(obj.ver)
					this.posY += re.tile.sizeY * obj.ver * i;
				
				if(this.has('ladder')){
					//make walkable
					re.hitmap.set(this.posX / re.tile.sizeX, this.posY / re.tile.sizeY, 0);
				}
				
				this.signal('place');
			});
		}
		
		this.signal('place');
	}
	
})
.init(function(c){
	if(!c.actionSfx){
		c.actionSfx = re.e('sound action.sfx');
	}

	this.bisect = this.bitmap.width;
	this.bodX = re.tile.sizeX;
	this.bodY = re.tile.sizeY;
	
	this.hero = c.hero;
	
	this.addSignal('update', this.item_update);
	
	this.updateBefore(this.hero);
})
.dispose(function(c){
	if(c.actionSfx){
		c.actionSfx.dispose();
		c.actionSfx = null;
	}
	
	this.removeSignal('update', this.item_update);
});