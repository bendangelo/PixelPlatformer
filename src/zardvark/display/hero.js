re.c('hero')
.require('sprite flicker hero.png pressed physics blowup point body')
.namespace({
	
	update:function(tick){
		/*
		Just a note. Lots of this code can be separated into its own component.
		
		This would be necessary for a large project but for a small one whatever.
		*/
		if(this.dead){
			this.count += tick;
			
			if(this.count > 3){
				//-1 restarts current
				re.scene(re.scene.map, -1);
			}
			
			return;
		}
		
		var s = this.speed;
		
		if(this.pressed(re.controls.right)){
			this.velX += s;
			this.scaleX = 1;
			
			if(!this.jump)
				this.flicker('run');
			
			
		} else if(this.pressed(re.controls.left)){
			this.velX -= s;
			this.scaleX = -1;
			
			if(!this.jump)
			this.flicker('run');
			
		}
		
		if(this.pressed(re.controls.up) && this.ground && !this.jump){
			this.jumpUp(tick);
		}
		
		if(this.isIdle()){
			
			this.flicker('idle');
		}
		
		//move tilebacks
		re('tileback').method('parallax', this.posX);
		
		this.screen.setPos(this);
	},
	
	step:function(x, y, tx, ty){
		if(y){
			this.jump = false;
			this.ground = (ty >= this.posY);
			
			if(ty <= this.posY){
				//this.velY = 0;
			}
		}
		
	}
	
})
.extend({
	speed:40 * re.sys.stepSize,
	jump:false,
	ground:false,
	jumpSpeed:480 * re.sys.stepSize,
	
	sizeX:25,
	sizeY:25,
	
	bodX:24,
	bodY:24,
	
	padX:6,
	padY:0,
	
	count:0,
	power:false,
	
	die:function(){
		if(this.dead) return this;
		
		var c = 16;
		if(this.power) c += 18 * 2;
		
		this.blowUp(c);
		
		this.dead = true;
		
		this.drawing = false;
		this.diesfx.play();
		
		return this;
	},
	
	jumpUp:function(){
		this.jump = true;
		
		this.velY -= this.jumpSpeed;
		
		this.flicker('jump');
	
	},
	
	powerup:function(){
		var k = function(h){
			for(var i =0; i<h.length; i++){
				h[i] += 9;
			}
		}
		k(this.hero_idle);
		k(this.hero_run);
		k(this.hero_jump);
		k(this.hero_ladder);
		
		this.jumpSpeed *= 1.3;
		this.speed *= 1.2;
		
		this.flicker('jump');
		
		this.power = true;
		
		return this;
	}
	
})
.init(function(){
	this.diesfx = re.e('sound die.sfx');
	
	this.bisect = this.bitmap.width;
	
	this.hero_idle = [0, 1];
	this.hero_run = [2, 3];
	this.hero_jump = [4, 5, 4];
	this.hero_ladder = [6, 7];
	
	//add animations
	this.addFlicker({
	idle:[-1, 0.6, this.hero_idle],
	run:[-1, 0.8, this.hero_run],
	jump:[1, 0.5, this.hero_jump],
	ladder:[-1, 0.5, this.hero_ladder]
	});
	
	this.friY = 0.95;
	this.friX = 0.75;
	
	this.addSignal({
	update:this.hero_update,
	aftermath:this.hero_step
	});
	
})
.dispose(function(){
	this.diesfx.dispose();
	
	this.removeSignal(
	{
	update:null,
	physics:null
	});
});