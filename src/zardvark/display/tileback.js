re.c('tileback')
.require('tilesprite')
.extend({
	alpha:0.5,
	
	parallax:function(x){
		this.regX = x * 0.1;
	}
});