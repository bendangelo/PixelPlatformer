re.scene(re.scene.credits)
.enter(function(){
	
	this.by = re.e('font.png')
	.setText('Created by Ben D\'Angelo')
	.centerX();
	
	this.by.posY = 50;
	
	this.dem = re.e('font.png')
	.setText('This is a demostration of the Entity engine')
	.centerX();
	
	this.dem.posY = 90;
	
	this.che = re.e('font.png')
	.setText('Checkout entityjs.com for more info')
	.centerX();
	
	this.che.posY = 110;
	
	this.sp = re.e('font.png keyboard')
	.setText('Press space to return')
	.centerX().centerY(20)
	.addSignal('keyup:space', function(){
		
		re.scene(re.scene.home);
		
	});
	
})
.exit(function(){
	
	current = 0;
	
	re('font.png').dispose();
	
});