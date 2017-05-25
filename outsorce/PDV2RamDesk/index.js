(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.back_card = function() {
	this.initialize(img.back_card);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,123,114);


(lib.bock = function() {
	this.initialize(img.bock);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,33,241);


(lib.button = function() {
	this.initialize(img.button);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,435,97);


(lib.fishka = function() {
	this.initialize(img.fishka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,89,84);


(lib.kazah = function() {
	this.initialize(img.kazah);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,18);


(lib.king = function() {
	this.initialize(img.king);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,139,110);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,152,73);


(lib.man = function() {
	this.initialize(img.man);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,174,261);


(lib.pf250 = function() {
	this.initialize(img.pf250);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,439,64);


(lib.queen = function() {
	this.initialize(img.queen);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,146,149);


(lib.turnir = function() {
	this.initialize(img.turnir);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,432,21);


(lib.valet = function() {
	this.initialize(img.valet);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,97,121);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(247,247,247,0)","#F9F9F9","rgba(255,255,255,0)"],[0,0.498,0.988],-21,0,21,0).s().p("AjRFtIAArZIGjAAIAALZg");
	this.shape.setTransform(21,36.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol27, new cjs.Rectangle(0,0,42,73), null);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.button();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol25, new cjs.Rectangle(0,0,435,97), null);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.valet();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol24, new cjs.Rectangle(0,0,97,121), null);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.queen();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol23, new cjs.Rectangle(0,0,146,149), null);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.king();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol22, new cjs.Rectangle(0,0,139,110), null);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.back_card();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol21, new cjs.Rectangle(0,0,123,114), null);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.bock();
	this.instance.parent = this;
	this.instance.setTransform(-51,-16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 3
	this.instance_1 = new lib.kazah();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-2,202);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 2
	this.instance_2 = new lib.fishka();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-8,77);

	this.instance_3 = new lib.fishka();
	this.instance_3.parent = this;
	this.instance_3.setTransform(55,90);

	this.instance_4 = new lib.fishka();
	this.instance_4.parent = this;
	this.instance_4.setTransform(53.4,111.8,1,1,23.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	// Layer 1
	this.instance_5 = new lib.logo();
	this.instance_5.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(-51,-16,203,241), null);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol27();
	this.instance.parent = this;
	this.instance.setTransform(6,32.5,1.495,1.071,0,21,0,21,36.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:527},29).wait(40).to({x:6},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.4,-4,90.8,73);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol25();
	this.instance.parent = this;
	this.instance.setTransform(217.5,48.5,1,1,0,0,0,217.5,48.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({regY:48.6,scaleX:0.84,scaleY:0.84,y:48.6},5).to({regY:48.5,scaleX:1,scaleY:1,y:48.5},5).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,435,97);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("APUEyIAAg7IixAAIAAA7IgvAAIAAhmIAcAAQALgMAEgQQAEgNAAgXIARlGICvAAIAAGGIAgAAIAABmgANTCMQgBAYgFAOQgFAPgJALIByAAIAAlaIhQAAgATZEWIAAggQgUgDgPgJQgOgJgLgOQgIgOgFgTQgFgRAAgXIAAgaIAtAAIAAAdQAAAeANAPQANAQAZAAQAaAAAMgQQANgPAAgeQgBgRgFgPQgGgOgLgMQgLgOgngdQgigagQgTQgLgQgFgRQgHgSABgWQAAgWAEgTQAFgSAJgNQAKgPAOgIQAOgJAUgCIAAgjIAnAAIAAAjQAUACAPAJQAOAIAKAPQAJANAFATQAEASABAWIAAAMIguAAIAAgPQAAgdgMgRQgMgQgaAAQgZAAgNAQQgMARABAdQgBARAHAPQAGANAKANQAMANAmAdQAjAaAQAVQAKAOAGARQAGATAAAWQAAAWgEASQgGATgJAOQgJAOgPAIQgPAKgUADIAAAggAfwDzQgTgIgNgOQgLgPgHgUQgGgTAAgaIAAjfQAAgZAGgUQAHgUALgOQANgPATgHQATgIAYAAQAZAAATAIQASAHANAPQAMAOAHAUQAGAUAAAZIAADfQAAAagGATQgHAUgMAPQgNAOgSAIQgTAIgZgBQgYABgTgIgAf0iCQgNAQABAdIAADlQgBAeANAQQAOARAZAAQAaAAANgRQAMgQAAgeIAAjlQAAgdgMgQQgNgRgagBQgZABgOARgAcADzQgSgIgMgOQgLgPgHgUQgFgTgBgaIAAgdIAtAAIAAAgQAAAeANAQQANARAZAAQAaAAANgRQANgQAAgeIAAhUQAAgfgNgPQgNgQgaAAQgUABgMAJQgNANgDAWIAAAKIgtAAIALjvICrAAIAAArIh/AAIgHCFQAKgSAQgJQARgJAVAAQAVAAAPAHQAPAIALANQAJANAFATQAFASAAAYIAABVQAAAagHATQgFAUgNAPQgMAOgSAIQgTAIgZgBQgXABgUgIgAFFDzQgTgIgMgOQgMgOgHgVQgGgTAAgZIAAjgQAAgZAGgUQAHgUAMgOQAMgPATgHQASgIAZAAQAZAAATAIQASAHANAPQANAOAGAUQAGAUAAAZIAADgQAAAZgGATQgGAVgNAOQgNAOgSAIQgTAIgZgBQgZABgSgIgAFKiCQgOAQAAAdIAADlQAAAeAOARQANAQAZAAQAaAAANgQQANgRAAgeIAAjlQAAgdgNgQQgNgRgaAAQgZAAgNARgApqDzQgSgIgNgOQgMgOgGgVQgHgTAAgZIAAjgQAAgZAHgUQAGgUAMgOQANgPASgHQATgIAYAAQAaAAASAIQATAHANAPQAMAOAHAUQAFAUAAAZIAADgQAAAZgFATQgHAVgMAOQgNAOgTAIQgSAIgagBQgYABgTgIgApliCQgNAQAAAdIAADlQAAAeANARQANAQAZAAQAbAAANgQQAMgRAAgeIAAjlQAAgdgMgQQgNgRgbAAQgZAAgNARgAxNDzQgTgIgNgOQgMgOgHgVQgFgTgBgZIAAjgQABgZAFgUQAHgUAMgOQANgPATgHQASgIAYAAQAaAAASAIQATAHANAPQAMAOAHAUQAFAUABAZIAADgQgBAZgFATQgHAVgMAOQgNAOgTAIQgSAIgagBQgYABgSgIgAxJiCQgNAQAAAdIAADlQAAAeANARQAOAQAYAAQAaAAAOgQQAMgRAAgeIAAjlQAAgdgMgQQgOgRgaAAQgYAAgOARgA0+DzQgRgIgNgOQgMgOgGgVQgFgTgBgZIAAgqIAtAAIAAAsQABAeAMAQQANARAaAAQAaAAAMgRQAMgQAAgiIAAgiQAAgfgOgRQgHgIgKgEQgLgEgOAAIgUAAIAAgrIAXAAQAZAAAOgPQAOgQAAgcIAAgUQAAghgMgRQgMgRgaAAQgaAAgNARQgMAQgBAdIAAAeIgsAAIAAgcQAAgYAGgVQAGgUAMgOQAMgNARgJQATgHAZAAQAZAAASAIQASAHANAPQALAPAGATQAGAUABAZIAAAMIgEAeQgDAOgHAMQgGALgLAIQgJAJgNAEQANAFAKAIQAKAJAGALQAOAXAAAhIAAAjQgBAZgGATQgGAVgLAOQgNAOgSAIQgSAIgZgBQgZABgTgIgAXdD3IAAglQAAgaAGgXQAGgTALgUQANgYAlgoQAmgpANgUQALgRAGgSQAFgTAAgWQAAgigLgRQgHgJgJgEQgKgEgNgBQgNAAgKAGQgJAEgHAIQgMARAAAdIAAAnIgtAAIAAgkQAAgZAGgUQAGgVAMgNQALgQATgHQASgIAZAAQAZAAATAIQASAHANAPQAMAPAFATQAGAVAAAZQAAAYgGAVQgGAUgLATQggAtgTAUQgnAsgLARQgLAQgGAPQgGASgBARIAAAHICPAAIAAAtgAKdD3IAAjEIhqAAIAADEIgxAAIAAmxIAxAAIAADCIBqAAIAAjCIAxAAIAAGxgAAvD3IAAgwIgeAAQgZgBgTgGQgTgIgMgOQgNgOgFgTQgHgVABgZIAAh2QgBgaAHgUQAFgVANgOQAMgNATgIQATgHAZAAIAeAAIAAgyIAwAAIAAAyIAeAAQAbAAASAHQAUAIAMANQAMAOAGAVQAGAUAAAaIAAB2QAAAZgGAVQgGATgMAOQgMAOgUAIQgSAGgbABIgeAAIAAAwgABfCdIAeAAQAbgBAOgQQANgPAAgfIAAh8QAAgggNgPQgNgQgcAAIgeAAgAgWhNQgNAPAAAgIAAB8QAAAfANAPQANAQAaABIAeAAIAAj6IgeAAQgaAAgNAQgAkMD3IAAlZIhuFZIgzAAIAAmxIArAAIAAFCIBslCIA2AAIAAGxgAuQD3IAAmxIBgAAQAaAAASAFQARAHAMALQAMAMAEATQAGARAAAYIAAAVQAAAkgLAUQgGALgKAHQgKAHgOAEQAPAEAMAJQALAIAHAMQAHAMADAPIADBGQAAAZgGASQgGATgMANQgNANgSAHQgSAGgaABgAtgDKIAzAAQAbAAAMgOQAMgOAAgfIAAgmQAAgSgDgMQgEgMgHgIQgHgHgMgEQgLgDgQgBIgqAAgAtggDIAlAAQAeABAOgMQAHgHADgLQAEgLAAgRIAAgZQAAgegLgOQgLgNgaAAIgvAAgA3OD3IAAlZIhuFZIgzAAIAAmxIArAAIAAFCIBslCIA2AAIAAGxgA9UD3IAAmxIBeAAQAZgBATAIQASAHAMAOQAMAOAGATQAFAUABAYIAAA0QAAAagHATQgGAUgNANQgMANgSAHQgUAGgZABIgrAAIAACrgA8kAgIArAAQAbAAAMgNQAOgOAAgeIAAg6QAAgfgMgOQgMgOgaAAIguAAgA+2D3IAAmFIhqAAIAAGFIgxAAIAAmxIDLAAIAAGxgAlgjbQgMgEgIgIQgJgIgFgLQgEgMgBgNIAeAAQACAQAKAIQAIAHARAAQARAAAJgHQAKgIABgQIAeAAQAAANgFAMQgEALgJAIQgJAIgMAEQgMAEgQAAQgQAAgMgEg");
	mask.setTransform(217.5,30.6);

	// Layer 4
	this.instance = new lib.Symbol26();
	this.instance.parent = this;
	this.instance.setTransform(-23,34.6,1,1,0,0,0,21,36.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.pf250();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 2
	this.instance_2 = new lib.turnir();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1,-19);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(0,-19,439,83), null);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.fishka();
	this.instance.parent = this;
	this.instance.setTransform(-26,119);

	this.instance_1 = new lib.fishka();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-8.7,146.4,1,1,24.2);

	this.instance_2 = new lib.fishka();
	this.instance_2.parent = this;
	this.instance_2.setTransform(70.6,192.3,1,1,75.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},46).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},33).wait(1));

	// Layer 1
	this.instance_3 = new lib.man();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(80));

	// king.png
	this.instance_4 = new lib.Symbol22();
	this.instance_4.parent = this;
	this.instance_4.setTransform(51.8,203,1,1,0,0,0,140.8,74);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(5).to({rotation:4.8,x:51.9},4,cjs.Ease.get(-1)).to({regY:73.9,rotation:11.2,x:51.8},5,cjs.Ease.get(1)).to({regY:74,rotation:5.5,x:51.9},5,cjs.Ease.get(-1)).to({rotation:0,x:51.8},5,cjs.Ease.get(1)).wait(56));

	// queen.png
	this.instance_5 = new lib.Symbol23();
	this.instance_5.parent = this;
	this.instance_5.setTransform(46,179.5,1,1,0,0,0,118,110.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10).to({rotation:4.3,x:46.1},4,cjs.Ease.get(-1)).to({rotation:9.7,y:179.6},5,cjs.Ease.get(1)).to({rotation:4.8},5,cjs.Ease.get(-1)).to({rotation:0,x:46,y:179.5},5,cjs.Ease.get(1)).wait(51));

	// valet.png
	this.instance_6 = new lib.Symbol24();
	this.instance_6.parent = this;
	this.instance_6.setTransform(57.5,169.5,1,1,0,0,0,72.5,117.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(16).to({rotation:3.5},4,cjs.Ease.get(-1)).to({rotation:8},5,cjs.Ease.get(1)).to({rotation:3.8,x:57.6},5,cjs.Ease.get(-1)).to({rotation:0,x:57.5},5,cjs.Ease.get(1)).wait(45));

	// back_card.png
	this.instance_7 = new lib.Symbol21();
	this.instance_7.parent = this;
	this.instance_7.setTransform(35.5,197,1,1,0,0,0,124.5,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regY:19.1,rotation:3.5,y:197.1},4,cjs.Ease.get(-1)).to({rotation:8.2},5,cjs.Ease.get(1)).to({rotation:4,x:35.6},5,cjs.Ease.get(-1)).to({regY:19,rotation:0,x:35.5,y:197},5,cjs.Ease.get(1)).wait(61));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89,0,263,299.8);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this=this;
		function getWindowSize() { 
		                return {
				width: Math.min(document.documentElement.clientWidth,       window.innerWidth || 0),
				height: Math.min(document.documentElement.clientHeight,    window.innerHeight || 0)
		                }
		}
		window._setCanvasSize = function() {
				var windowSize = getWindowSize();
				stage.canvas.style.width = windowSize.width + 'px';
				stage.canvas.style.height = 250 + 'px';
				stage.canvas.width = windowSize.width;
				stage.canvas.height = 250;
					
				_this.logo.x = windowSize.width * 0.12;
				_this.logo.y = 125;	
			
				_this.button.x = (windowSize.width*0.5);
				_this.button.y = 180;	
			
				_this.txt250.x = (windowSize.width*0.5);
				_this.txt250.y = 80;
			
				_this.man.x = windowSize.width*0.85;
				_this.man.y = 125;
			
				
				
				_this.logo.scaleX = 0.9;
				_this.logo.scaleY = 0.9;
				_this.txt250.scaleX = 0.9;
				_this.txt250.scaleY = 0.9;
				_this.man.scaleX = 0.9;
				_this.man.scaleY = 0.9;
				_this.button.scaleX = 0.9;
				_this.button.scaleY = 0.9;
				
		
				
				if(windowSize.width < 970){
				stage.canvas.width = 970;
				stage.canvas.style.width=970+'px';
					
					_this.logo.x = 110;
			
					_this.button.x = 485;
			
					_this.txt250.x = 485;
			
					_this.man.x = 840;
					
				}
			
		}
		
		canvas.style.cursor = "pointer";
		canvas.addEventListener("click", function() {
		    window.callClick();
		});
		
		window.onresize=function(){_setCanvasSize();}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 4
	this.logo = new lib.Symbol19();
	this.logo.parent = this;
	this.logo.setTransform(128,128.5,1,1,0,0,0,54,104.5);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

	// Layer 3
	this.txt250 = new lib.Symbol18();
	this.txt250.parent = this;
	this.txt250.setTransform(481.5,62,1,1,0,0,0,220.5,23);

	this.timeline.addTween(cjs.Tween.get(this.txt250).wait(1));

	// Layer 2
	this.button = new lib.Symbol20();
	this.button.parent = this;
	this.button.setTransform(480,174.5,1,1,0,0,0,211,46.5);

	this.timeline.addTween(cjs.Tween.get(this.button).wait(1));

	// Layer 1
	this.man = new lib.Symbol17();
	this.man.parent = this;
	this.man.setTransform(833.1,148.5,1,1,0,0,0,40.1,146.5);

	this.timeline.addTween(cjs.Tween.get(this.man).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(508,127,944,299.8);
// library properties:
lib.properties = {
	width: 970,
	height: 250,
	fps: 24,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/back_card.png?1495699235081", id:"back_card"},
		{src:"images/bock.png?1495699235081", id:"bock"},
		{src:"images/button.png?1495699235081", id:"button"},
		{src:"images/fishka.png?1495699235081", id:"fishka"},
		{src:"images/kazah.png?1495699235081", id:"kazah"},
		{src:"images/king.png?1495699235081", id:"king"},
		{src:"images/logo.png?1495699235081", id:"logo"},
		{src:"images/man.png?1495699235081", id:"man"},
		{src:"images/pf250.png?1495699235081", id:"pf250"},
		{src:"images/queen.png?1495699235081", id:"queen"},
		{src:"images/turnir.png?1495699235081", id:"turnir"},
		{src:"images/valet.png?1495699235081", id:"valet"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;