/*
Home scene

*/
re.scene(re.scene.home)
.enter(function(){
	
	re.e('sound theme.sfx').play(-1);
	
	re.preventDefault('up left right down a w s d space');
	
	re.e('back.png bitmap anchor')
	.bottom();
	
	re.e('font.png')
	.setText('Version '+re.config.version)
	.bottom(-3).right(-5);
	
	re.e('font.png')
	.setText('Visit entityjs.com')
	.bottom(-20).right(-4);
	
	re.e('keyboard font.png')
	.addSignal('keyup:space', function(){
		
		//next scene level 0
		re.scene(re.scene.map);
		
	})
	.setText('Press space to start!')
	.centerX().centerY(-20);
	
	
	//make all text invisible
	re('bitfont').extend('drawing', false);
	
	//animate title
	re.e('title.png bitmap update anchor point')
	.setPos(0, -10)
	.centerX()
	.addSignal('update', function(t){
		
		this.posY += 40 * t;
		if(this.posY >= 50){
			this.posY = 50;
			
			//make all fonts visible now
			re('bitfont').extend('drawing', true);
			
			return false;
		}
		
	});
	
})
.exit(function(){
	
	re('draw').dispose();
	
});