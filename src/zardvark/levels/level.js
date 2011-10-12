re.level = re.c('level')
.global({
	
	levels:[],
	
	get:function(index){
		return this.levels[index];
	},
	
	max:function(){ return this.levels.length-1; }
	
})
.implement('map spawn hits items back')
.init(function(c){
	
	c.levels.push(this);
	
});