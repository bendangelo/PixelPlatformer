re.c('acid')
.require('item')
.extend({
	cap:'topacid',
	
	touch:function(){
		
		//reset
		this.hero.die();
		
	},
	
	untouch:function(){
	
	}
	
})
.init(function(){
	
	this.setFrameId(16);
	
});

re.c('topacid')
.require('item flicker')
.extend({
	touch:function(){
		this.hero.die();
	}
})
.init(function(){
	
	this.addFlicker('boil', -1, 0.5, '17 18 19');
	
	this.flicker('boil');
	
});