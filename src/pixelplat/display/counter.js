re.c('counter')
.require('font.png')
.inherit({
	coins:0,
	
	addCoin:function(count){
		this.coins += count;
		this.text = 'Coins: '+this.coins;
	}
})
.init(function(){
	this.addCoin(0);
	
	//makes it static on screen
	this.screen = null;
	
	this.posX = 5;
	this.posY = 5;
});