(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,669,405);


(lib.ball = function() {
	this.initialize(img.ball);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,59);


(lib.body = function() {
	this.initialize(img.body);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,142,370);


(lib.button = function() {
	this.initialize(img.button);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,231,67);


(lib.hand = function() {
	this.initialize(img.hand);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,239);


(lib.hand1 = function() {
	this.initialize(img.hand1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,46,34);


(lib.handl = function() {
	this.initialize(img.handl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,41,103);


(lib.logored = function() {
	this.initialize(img.logored);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,180,56);


(lib.ser1 = function() {
	this.initialize(img.ser1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,86,73);


(lib.ser2 = function() {
	this.initialize(img.ser2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,81,74);


(lib.ser3 = function() {
	this.initialize(img.ser3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,73,72);


(lib.ser4 = function() {
	this.initialize(img.ser4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,70,71);// helper functions:

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


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// СЕБЕ ПОБЕДУ
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiKBoQAPAAANgDQANgEALgFQAKgGAJgJQAJgIAHgLIABgCIhFjJIA7gJIAwCbIBXiYIBAAAIiKDeQgNAXgQAQQgPAQgRAKQgRAJgUAFQgSAEgXABg");
	this.shape.setTransform(250.9,84.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABfBzIi/AAIgLBFIg2AAIATh1QAYgVARgTQASgUAOgTQAOgWALgZQAKgZAJgfIAUhHICnAAIgoD5IAjAAIgSB1Ig4AHgAAZhlQgIAdgKAYQgJAYgMAVQgLASgPASQgOARgSAQICJAAIAhjNIg/AAg");
	this.shape_1.setTransform(217.3,88.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhpCXIAvktICkAAIgGAwIhsAAIgMBJIBSAAIAAAvIhaAAIgNBVIBvAAIgHAwg");
	this.shape_2.setTransform(193.6,84.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhpCXIAwktICjAAIAAAyIh0AAIgKBFIAUAAQAZAAAUAFQATAFANALQAMAKAGAOQAGAPAAATQAAAXgIATQgJATgQAOQgQANgXAIQgXAHgcAAgAgrBrIAXAAQAPAAALgEQAMgEAJgGQAJgHAEgLQAFgKAAgNQAAgJgDgHQgDgIgGgFQgGgFgJgCQgKgDgMAAIgXAAg");
	this.shape_3.setTransform(169.8,84.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgpCbQgMgDgLgEQgMgFgJgHQgJgGgIgJIgOgTIgKgXQgEgQgDgmQAAgVADgUQAEgUAHgSQAGgTALgPQAJgQAMgNIAVgRQALgHAMgFQAMgFANgCQAMgDAPAAIAbACQANADALAEQAKAFAKAHQAJAGAIAJIANATIAKAXQAIAiAAAUQAAAVgDAUQgEAUgHASQgHATgJAPQgKAQgNANIgUARQgLAHgMAFQgMAFgNACQgNADgNAAgAgMhpQgNAGgLALQgIAIgHAMQgIANgFAPQgFAPgDARQgDARAAATQAAAUAEAQQAEAPAIALQAIALAMAFQAMAFAPAAQANAAANgFQAMgGAKgLQAIgIAIgMQAHgNAFgPQAGgPADgRQADgRAAgTQAAgUgFgQQgEgPgHgLQgJgLgLgFQgMgFgOAAQgOAAgMAFg");
	this.shape_4.setTransform(143.4,84.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAhCXIAoj8IhxAAIgoD8Ig5AAIAwktIDjAAIgwEtg");
	this.shape_5.setTransform(113.8,84.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhqCXIAxktICkAAIgIAwIhsAAIgLBJIBSAAIAAAvIhZAAIgOBVIBvAAIgHAwg");
	this.shape_6.setTransform(80.3,84.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhpCXIAwktICjAAIAAAyIh0AAIgKBFIAUAAQAZAAAUAFQATAFANALQAMAKAGAOQAGAPAAATQAAAXgIATQgJATgQAOQgQANgXAIQgXAHgcAAgAgrBrIAXAAQAPAAALgEQAMgEAJgGQAJgHAEgLQAFgKAAgNQAAgJgDgHQgDgIgGgFQgGgFgJgCQgKgDgMAAIgXAAg");
	this.shape_7.setTransform(56.4,84.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhpCXIAvktICkAAIgGAwIhtAAIgLBJIBSAAIAAAvIhaAAIgNBVIBvAAIgHAwg");
	this.shape_8.setTransform(35.1,84.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgvCUIgUgKQgJgGgJgJQgIgIgGgKIgKgWQgGgQgDgnQAAgUAEgRQACgSAGgRQAGgQAIgPQAIgPAKgMQALgNANgJQANgKAOgHQAOgHAOgEQARgEARAAQAWAAAWAIQATAGARANIgQA0QgPgOgPgHQgRgIgSAAQgLAAgLADQgKACgIAGQgSAKgNASQgNASgGAYQgIAXABAYQAAAVAEARQAGAQAJALQAJAKANAGQANAFAQAAQAQAAAUgGQARgGASgLIAAAyQgRAKgVAGQgVAGgUAAQgjgDgPgGg");
	this.shape_9.setTransform(11.7,84.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// ПОДАРИ
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AA7DnIAylBIjtFBIhXAAIBKnNIBTAAIgyE5IDpk5IBaAAIhJHNg");
	this.shape_10.setTransform(240.5,25.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AirDnIBJnNIBsAAQAoAAAfAIQAeAJAVARQAUAQAKAZQALAZgBAfQABAkgNAdQgNAegaAUQgaAVgjALQg0AMgfAAIgiAAIgbCrgAgvgIIAeAAQAYAAAVgHQATgFAOgMQAMgKAIgRQAGgQAAgUQAAgPgFgNQgFgMgLgJQgJgJgQgDQgPgFgVAAIgcAAg");
	this.shape_11.setTransform(200.2,25.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("ABiBxIieAAIg4B1IhZAAIDrnPIBaAAIBWHDIhYAQgABXApIgdixIhUCxIBxAAg");
	this.shape_12.setTransform(156.8,25.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("ACQCwIkjAAIgQBpIhTAAIAciyQAlghAagcQAcgfAVgeQAVgiAQgmQARgmAOgwIAdhsIEAAAIg9F+IA2AAIgcCyIhVALgAAlibQgMAtgPAlQgNAlgSAeQgSAdgXAcQgVAZgbAZIDRAAIAzk6IhhAAg");
	this.shape_13.setTransform(110.8,31.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag/DsQgTgDgRgIQgRgHgOgKQgPgKgLgNIgVgeIgPgiQgIgZgEg7QAAgfAFgfQAGgfAKgbQALgcAPgYQAPgZATgTIAfgaQARgLASgIQASgHAUgEQATgEAXAAIApAEQATADARAHQARAIAPAKQAOAKALANIAVAdIAPAjQAMA0AAAgQAAAggGAeQgFAegKAcQgLAcgPAYQgPAZgTATIgfAaQgRALgSAHQgSAIgUAEQgUAEgVAAgAgTihQgTAJgRARQgNANgLASQgLATgIAXQgIAXgEAbQgFAaAAAcQAAAfAGAYQAGAYANAQQAMAQASAIQARAJAXAAQAVAAATgJQATgIAQgRQANgMAMgTQALgTAIgXQAIgXAEgbQAFgaAAgdQAAgegHgZQgGgYgMgPQgMgRgSgIQgSgJgWAAQgVAAgTAJg");
	this.shape_14.setTransform(66.6,25.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAyDnIA+mBIitAAIg+GBIhYAAIBKnNIFcAAIhJHNg");
	this.shape_15.setTransform(21.5,25.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol24, new cjs.Rectangle(-5.6,-8.3,271,119.3), null);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ball();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.525,0.525);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(0,0,31,31), null);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.button();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(0,0,231,67), null);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.body();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(0,0,142,370), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hand();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(0,0,80,239), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hand1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,0,46,34), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.handl();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,0,41,103), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ser4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,70,71), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ser3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,73,72), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ser2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,81,74), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ser1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,86,73), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logored();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,180,56), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D52929").s().p("EgcMAkQMAAAhIfMA4ZAAAMAAABIfg");
	this.shape.setTransform(180.5,232);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,361,464), null);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol24();
	this.instance.parent = this;
	this.instance.setTransform(137.5,62.3,1,1,0,0,0,131.9,54);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol26, new cjs.Rectangle(0,0,271,119.3), null);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(324.7,232,1.56,1.017,0,10.5,0,180.6,232);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol23, new cjs.Rectangle(0,0,649.1,464), null);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol23();
	this.instance.parent = this;
	this.instance.setTransform(324.5,232,1,1,0,0,0,324.5,232);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:275},49,cjs.Ease.get(-1)).to({x:224.5},50,cjs.Ease.get(1)).to({x:274.5},50,cjs.Ease.get(-1)).to({x:324.5},50,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,649.1,464);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol19();
	this.instance.parent = this;
	this.instance.setTransform(15.5,15.5,1,1,0,0,0,15.5,15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol21, new cjs.Rectangle(0,0,31,31), null);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy 2
	this.instance = new lib.Symbol21();
	this.instance.parent = this;
	this.instance.setTransform(-113.8,109.5,0.997,0.997,44.9,0,0,15.5,15.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:15.5,scaleX:1,scaleY:1,rotation:0,x:-824.5,y:185.5},33).wait(1).to({x:15.5,y:95.5},0).to({regY:15.6,scaleX:1,scaleY:1,rotation:406.1,x:-92.3,y:107.1},5).wait(1));

	// Layer 2 copy
	this.instance_1 = new lib.Symbol21();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-575.4,176.3,1,1,180,0,0,15.5,15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-15.4,y:205},28).wait(1).to({x:-795.4,y:165},0).to({x:-595.4,y:175.3},10).wait(1));

	// Layer 1 copy
	this.instance_2 = new lib.Symbol21();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-415.4,71.7,0.999,0.999,166.7,0,0,15.6,15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:15.5,scaleX:1,scaleY:1,rotation:0,x:-824.5,y:115.5},19).wait(1).to({x:15.5,y:25.5},0).to({regX:15.6,rotation:535.5,x:-393.8,y:69.3},19).wait(1));

	// Layer 2
	this.instance_3 = new lib.Symbol21();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-215.4,181.9,1,1,180,0,0,15.5,15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:-15.4,y:205},10).wait(1).to({x:-795.4,y:115},0).to({x:-235.4,y:179.6},28).wait(1));

	// Layer 1
	this.instance_4 = new lib.Symbol21();
	this.instance_4.parent = this;
	this.instance_4.setTransform(15.5,-54.5,1,1,0,0,0,15.5,15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:360,x:-824.5,y:35.5},39).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-590.9,-70,622,267.4);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol17();
	this.instance.parent = this;
	this.instance.setTransform(115.5,33.5,1,1,0,0,0,115.5,33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({scaleX:0.98,scaleY:0.98,x:115.6,y:33.6},2,cjs.Ease.get(-1)).to({scaleX:0.94,scaleY:0.94,y:33.5},3,cjs.Ease.get(1)).to({scaleX:0.96,scaleY:0.96,y:33.6},2,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:115.5,y:33.5},3,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,231,67);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// handl.png
	this.instance = new lib.Symbol11();
	this.instance.parent = this;
	this.instance.setTransform(36.5,203.5,1,1,0,0,0,30.5,98.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:2.3,x:36.6,y:203.6},4,cjs.Ease.get(-1)).to({regX:30.6,regY:98.7,rotation:4.8,x:36.7,y:203.7},4,cjs.Ease.get(1)).to({rotation:2.3,x:36.6},4,cjs.Ease.get(-1)).to({regX:30.5,regY:98.5,rotation:0,x:36.5,y:203.5},4,cjs.Ease.get(1)).wait(1));

	// hand1.png
	this.instance_1 = new lib.Symbol12();
	this.instance_1.parent = this;
	this.instance_1.setTransform(114,186,1,1,0,0,0,6,26);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:26.1,rotation:-4,x:114.1,y:186.2},4,cjs.Ease.get(-1)).to({rotation:-8.2},4,cjs.Ease.get(1)).to({rotation:-4,y:186.1},4,cjs.Ease.get(-1)).to({regY:26,rotation:0,x:114,y:186},4,cjs.Ease.get(1)).wait(1));

	// hand.png
	this.instance_2 = new lib.Symbol13();
	this.instance_2.parent = this;
	this.instance_2.setTransform(148,171.5,1,1,0,0,0,15,164.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:164.6,rotation:-4,x:147.1,y:170.7},4,cjs.Ease.get(-1)).to({regX:15.1,rotation:-8.3,x:146.1,y:169.6},4,cjs.Ease.get(1)).to({rotation:-4,x:147.1,y:170.6},4,cjs.Ease.get(-1)).to({regX:15,regY:164.5,rotation:0,x:148,y:171.5},4,cjs.Ease.get(1)).wait(1));

	// body.png
	this.instance_3 = new lib.Symbol14();
	this.instance_3.parent = this;
	this.instance_3.setTransform(71,185,1,1,0,0,0,71,185);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:184.5},4,cjs.Ease.get(-1)).to({y:183},4,cjs.Ease.get(1)).to({y:183.5},4,cjs.Ease.get(-1)).to({y:185},4,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,213,370);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ser4.png
	this.instance = new lib.Symbol9();
	this.instance.parent = this;
	this.instance.setTransform(47,-57.5,1,1,0,0,0,35,35.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(54).to({y:-21.1,alpha:0.398},2,cjs.Ease.get(-1)).to({y:33.5,alpha:1},3,cjs.Ease.get(1)).wait(11).to({x:44},1).to({x:50},1).to({x:44},1).to({x:50},1).to({x:47},1).wait(28).to({y:-2.9,alpha:0.602},2,cjs.Ease.get(-1)).to({y:-57.5,alpha:0},3,cjs.Ease.get(1)).to({_off:true},1).wait(7));

	// ser3.png
	this.instance_1 = new lib.Symbol8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(148.5,-53,1,1,0,0,0,36.5,36);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(56).to({y:-16.6,alpha:0.398},2,cjs.Ease.get(-1)).to({y:38,alpha:1},3,cjs.Ease.get(1)).wait(27).to({x:145.5},1).to({x:151.5},1).to({x:145.5},1).to({x:151.5},1).to({x:148.5},1).wait(12).to({y:1.6,alpha:0.602},2,cjs.Ease.get(-1)).to({y:-53,alpha:0},3,cjs.Ease.get(1)).to({_off:true},1).wait(5));

	// ser2.png
	this.instance_2 = new lib.Symbol7();
	this.instance_2.parent = this;
	this.instance_2.setTransform(152.5,36,1,1,0,0,0,40.5,37);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(29).to({x:149.5},1).to({x:155.5},1).to({x:149.5},1).to({x:155.5},1).to({x:152.5},1).wait(17).to({y:4,alpha:0.602},2,cjs.Ease.get(-1)).to({y:-44,alpha:0},3,cjs.Ease.get(1)).wait(54).to({y:-12,alpha:0.398},2,cjs.Ease.get(-1)).to({y:36,alpha:1},3,cjs.Ease.get(1)).wait(1));

	// ser1.png
	this.instance_3 = new lib.Symbol6();
	this.instance_3.parent = this;
	this.instance_3.setTransform(45,37.5,1,1,0,0,0,43,36.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(12).to({x:42},1).to({x:48},1).to({x:42},1).to({x:48},1).to({x:45},1).wait(32).to({y:5.5,alpha:0.602},2,cjs.Ease.get(-1)).to({y:-42.5,alpha:0},3,cjs.Ease.get(1)).wait(54).to({y:-10.5,alpha:0.398},2,cjs.Ease.get(-1)).to({y:37.5,alpha:1},3,cjs.Ease.get(1)).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2,-93,191,167);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Symbol20();
	this.instance.parent = this;
	this.instance.setTransform(757.5,68.5,1,1,0,0,0,15.5,15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.back();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,-17,773,422), null);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(11));

	// Layer 5
	this.instance = new lib.Symbol5();
	this.instance.parent = this;
	this.instance.setTransform(384,63.2,1.247,1.247,0,0,0,43,37.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:43.1,x:242},4,cjs.Ease.get(-1)).to({regX:43,x:64},5,cjs.Ease.get(1)).to({regX:43.1,x:224.1},5,cjs.Ease.get(-1)).to({regX:43,x:384},5,cjs.Ease.get(1)).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol26();
	this.instance_1.parent = this;
	this.instance_1.setTransform(135.5,59.6,1,1,0,0,0,135.5,59.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:282.2},4,cjs.Ease.get(-1)).to({x:465.5},5,cjs.Ease.get(1)).to({x:300.5},5,cjs.Ease.get(-1)).to({x:135.5},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-99,571,218.3);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol16();
	this.instance.parent = this;
	this.instance.setTransform(115.5,33.5,1,1,0,0,0,115.5,33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.03,scaleY:1.03},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,231,67);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol10();
	this.instance.parent = this;
	this.instance.setTransform(71,185,1,1,0,0,0,71,185);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(0,0,213,370), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.txt = new lib.Symbol25();
	this.txt.parent = this;
	this.txt.setTransform(139.9,217.3,1,1,0,0,0,135.5,59.6);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	// Layer 3
	this.instance = new lib.Symbol18();
	this.instance.parent = this;
	this.instance.setTransform(141.5,324.5,1,1,0,0,0,115.5,33.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Symbol18(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(141.5,110,1,1,0,0,0,90,28);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Symbol 2
	this.instance_2 = new lib.Symbol22();
	this.instance_2.parent = this;
	this.instance_2.setTransform(211.8,232,1,1,0,0,0,324.5,232);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-112.7,0,688.2,464), null);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		
		
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
		
		this.fon.x = - stage.mouseX / 50;
		this.fon.y = - stage.mouseY / 50;
			
			this.girl.x = stage.mouseX / 50;
			this.girl.y = stage.mouseY / 50;
		}
		
		
		var _this = this;
		
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		
		function fl_MouseOverHandler_5()
		    {
			    _this.red.txt.gotoAndPlay(1);
		
		    }
		
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		
		
		      function fl_MouseOutHandler_2()
		    {
				_this.red.txt.gotoAndPlay(10);
		    }
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 4
	this.girl = new lib.Symbol15();
	this.girl.parent = this;
	this.girl.setTransform(-20,1,1,1,0,0,0,-79,-13);

	this.timeline.addTween(cjs.Tween.get(this.girl).wait(1));

	// Layer 3
	this.red = new lib.Symbol4();
	this.red.parent = this;
	this.red.setTransform(514.5,168.1,1,1,0,0,0,223.5,232);

	this.timeline.addTween(cjs.Tween.get(this.red).wait(1));

	// Layer 1
	this.fon = new lib.Symbol1();
	this.fon.parent = this;
	this.fon.setTransform(0.1,1,1,1,0,0,0,31.1,34);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(269,86.1,897.4,464);
// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/back.jpg?1496385435877", id:"back"},
		{src:"images/ball.png?1496385435877", id:"ball"},
		{src:"images/body.png?1496385435877", id:"body"},
		{src:"images/button.png?1496385435877", id:"button"},
		{src:"images/hand.png?1496385435877", id:"hand"},
		{src:"images/hand1.png?1496385435877", id:"hand1"},
		{src:"images/handl.png?1496385435877", id:"handl"},
		{src:"images/logored.png?1496385435877", id:"logored"},
		{src:"images/ser1.png?1496385435877", id:"ser1"},
		{src:"images/ser2.png?1496385435877", id:"ser2"},
		{src:"images/ser3.png?1496385435877", id:"ser3"},
		{src:"images/ser4.png?1496385435877", id:"ser4"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;