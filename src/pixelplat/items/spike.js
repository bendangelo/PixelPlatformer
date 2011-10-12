re.c('spike')
.require('item')
.extend({

	touch:function(){
		
		//reset
		this.hero.die();
		
	},
	
	untouch:function(){
		
	}
	
})
.init(function(){
	
	this.setFrameId(5);
	
});