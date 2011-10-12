re.c('water')
.require('item')
.extend({
	cap:'topwater',
	friX:0.6,
	friY:0.8,
	
	touch:function(){
		this.hero.alpha = 0.5;
		
		this.hero.friX = this.friX;
		this.hero.friY = this.friY;
	},
	
	untouch:function(){
		this.hero.alpha = 1;
		
		this.hero.friX = this.oldx;
		this.hero.friY = this.oldy;
	}
	
})
.init(function(){
	
	this.padX = 0;
	this.padY = 0;
	this.bodX = re.tile.sizeX;
	this.bodY = re.tile.sizeY;
	
	this.oldx = this.hero.friX;
	this.oldy = this.hero.friY;
	
	this.setFrameId(6);
	
});

re.c('topwater')
.require('water flicker')
.init(function(){
	
	this.addFlicker('boil', -1, 0.9, '7 8 9');
	
	this.flicker('boil');
	
});