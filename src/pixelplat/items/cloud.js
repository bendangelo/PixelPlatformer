re.c('cloud')
.require('item')
.extend({
	
	touch:function(){
		
	},
	
	untouch:function(){
		
	}
	
})
.init(function(){
	
	//setup hitmap value
	this.addSignal('place', function(){
		re.hitmap.set(this.posX / re.tile.sizeX, this.posY / re.tile.sizeY, 2);
		return false;
	});
	
	this.setFrameId(11);
	
});