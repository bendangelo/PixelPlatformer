re.scene(re.scene.score)
.enter(function(coins, maxCoins){
	
	re.e('back.png bitmap anchor')
	.extend('reg', {x:0, y:0})
	.bottom();
	
	re.e('font.png')
	.setText('Level '+re.config.current+' Completed!')
	.centerX().centerY(-80);
	
	//coins
	re.e('font.png')
	.setText('Coins Collected: '+coins+' / '+maxCoins)
	.centerX()
	.centerY(-15);
	
	re.e('font.png keyboard')
	.setText('Press space to continue')
	.centerX()	
	.addSignal('keyup:space', function(){
		
		if(re.config.current > re.level.max()){
			re.scene(re.scene.credits);
		} else {
			re.scene(re.scene.map);
		}
		
	})
	.posY = re.sys.sizeY - 50;
	
})
.exit(function(){
	
	//remove all fonts
	re('draw').dispose();
	
});