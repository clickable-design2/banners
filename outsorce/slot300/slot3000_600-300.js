(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.b1 = function() {
	this.initialize(img.b1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,79,123);


(lib.b2 = function() {
	this.initialize(img.b2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,154,74);


(lib.b3 = function() {
	this.initialize(img.b3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,102,74);


(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,700);


(lib.bt2 = function() {
	this.initialize(img.bt2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,673,120);


(lib.doll = function() {
	this.initialize(img.doll);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,88);


(lib.pole = function() {
	this.initialize(img.pole);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,98,137);


(lib.radial = function() {
	this.initialize(img.radial);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,629,441);


(lib.slotto = function() {
	this.initialize(img.slotto);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,140,1080);


(lib.tree = function() {
	this.initialize(img.tree);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,88);


(lib.zero = function() {
	this.initialize(img.zero);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,88);// helper functions:

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


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.radial();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ43, new cjs.Rectangle(0,0,629,441), null);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.b2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ35, new cjs.Rectangle(0,0,154,74), null);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.b3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ34, new cjs.Rectangle(0,0,102,74), null);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.b1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ33, new cjs.Rectangle(0,0,79,123), null);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AM/CLQgMgFgJgJQgQgSAAgiIAAiRQAAgiAQgSQAJgJAMgFQAMgEAQAAQAhAAAQASQAJAJAEANQADANAAARIAAAbIgpAAIAAgeQAAgPgGgGQgGgGgLAAQgKAAgHAGQgFAGAAAPIAACXQAAAPAFAGQAHAGAKAAQALAAAGgGQAGgGAAgPIAAgpIApAAIAAAmQAAARgDANQgEANgJAJQgIAJgNAFQgMAEgQAAQgQAAgMgEgAE/CLQgMgFgIgJQgRgSAAgiIAAiRQAAgiARgSQAIgJAMgFQANgEAQAAQAgAAASASQAJAJADANQAFANAAARIAACRQAAARgFANQgDANgJAJQgJAJgMAFQgNAEgQAAQgQAAgNgEgAFLhgQgFAGAAAPIAACXQAAAPAFAGQAHAGAKABQALgBAGgGQAGgGAAgPIAAiXQAAgPgGgGQgGgGgLAAQgKAAgHAGgAu+CLQgMgFgIgJQgRgSAAgiIAAiRQAAgiARgSQAIgJAMgFQANgEAQAAQAgAAASASQAJAJADANQAFANAAARIAACRQAAARgFANQgDANgJAJQgJAJgMAFQgNAEgQAAQgQAAgNgEgAuyhgQgFAGAAAPIAACXQAAAPAFAGQAHAGAKABQALgBAGgGQAGgGAAgPIAAiXQAAgPgGgGQgGgGgLAAQgKAAgHAGgAtOCMIAAgoIAPABQAKgBAIgEQAHgGABgQIAAjVICKAAIAAEXIgrAAIAAjvIgzAAIAACpQgBAWgFANQgFAOgJAHQgIAIgMAEQgMADgMAAgARQCMIAAkXIAsAAIAAEXgAO4CMIAAkXIAsAAIAABpIAWAAQAgAAARASQAQARAAAhIAAAlQAAAigQARQgIAJgMAEQgNAFgQAAgAPkBkIAWAAQAJAAAGgFQAGgGAAgPIAAgqQAAgPgGgGQgGgGgJAAIgWAAgAJxCMIAAgoIAQABIAKgCIAIgEQADgEABgFIADgQIhBjRIAsAAIAxCjIAoijIAsAAIg5DOQgJAdgHAPQgIAPgJAGQgJAHgJABgAIZCMIAAh4IgyAAIAAB4IgsAAIAAkXIAsAAIAAB4IAyAAIAAh4IAtAAIAAEXgACCCMIAAkXIB0AAIAAAoIhIAAIAABBIAUAAQAiAAAQASQAQARAAAhIAAAlQAAAigQARQgIAJgNAEQgMAFgRAAgACuBkIAUAAQALAAAFgFQAGgGAAgPIAAgqQAAgPgGgGQgFgGgLAAIgUAAgAhNCMIAAkXIB2AAIAAAoIhKAAIAABOIA7AAIAAAnIg7AAIAABSIBKAAIAAAogAiVCMIAAjKIg3DKIgtAAIAAkXIAnAAIAACmIAtimIA3AAIAAEXgAnkCMIAAkXIArAAIAADvIAkAAIAAjvIAsAAIAADvIAjAAIAAjvIAtAAIAAEXgAp7CMIAAkXIAtAAIAABpIAUAAQAiAAAQASQAQARAAAhIAAAlQAAAigQARQgIAJgNAEQgMAFgRAAgApOBkIAUAAQALAAAFgFQAGgGAAgPIAAgqQAAgPgGgGQgFgGgLAAIgUAAgAx8CMIAAkXIB1AAIAAAoIhIAAIAABBIAUAAQAiAAAQASQAQARAAAhIAAAlQAAAigQARQgIAJgNAEQgMAFgRAAgAxPBkIAUAAQALAAAFgFQAGgGAAgPIAAgqQAAgPgGgGQgFgGgLAAIgUAAg");
	this.shape.setTransform(114.9,14.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ30, new cjs.Rectangle(0,0,229.7,28.6), null);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("ABsCeIAAghIhwAAIAAAhIgsAAIAAhJIAPABQAKAAAIgFQAHgFAAgRIAAjVICKAAIAADvIAXAAIAABJgAAjA4QAAASgDALIA2AAIAAjGIgzAAgAKmB8QgMgFgJgIQgQgTAAghIAAgkIApAAIAAAmQAAAPAHAHQAGAGAKAAQAKAAAHgGQAGgHAAgTIAAgWQAAgUgHgIQgHgHgPAAIgHAAIAAgoIAKAAQAMAAAHgGQAHgGAAgRIAAgQQAAgSgGgHQgHgHgKAAQgKABgGAFQgHAHAAAPIAAAeIgpAAIAAgbQAAgjAQgSQAJgJAMgEQAMgEAQgBQAhABAQARQAJAKAEAMQAEAOAAARIAAAHQAAAtgfAMQARAIAHAOQAHAPAAAVIAAAXQAAAQgEANQgEANgJAKQgIAIgMAFQgMAEgRABQgQgBgMgEgAIJB8QgMgFgIgIQgSgTAAghIAAiRQAAgjASgSQAIgJAMgEQANgEAQgBQAgABASARQAIAKAEAMQAFAOAAARIAACRQAAAQgFANQgEANgIAKQgJAIgMAFQgNAEgQABQgQgBgNgEgAIVhvQgGAHAAAPIAACWQAAAPAGAHQAHAGAKAAQALAAAGgGQAGgHAAgPIAAiWQAAgPgGgHQgGgFgLgBQgKABgHAFgAxgB8QgMgFgJgIQgRgTAAghIAAiRQAAgjARgSQAJgJAMgEQAMgEAQgBQAhABARARQAJAKAEAMQAEAOAAARIAACRQAAAQgEANQgEANgJAKQgJAIgMAFQgMAEgRABQgQgBgMgEgAxUhvQgGAHAAAPIAACWQAAAPAGAHQAGAGAKAAQALAAAGgGQAGgHAAgPIAAiWQAAgPgGgHQgGgFgLgBQgKABgGAFgAvxB9IAAgoIAPABQALAAAHgFQAIgFAAgRIAAjVICLAAIAAEXIgsAAIAAjuIgzAAIAACpQAAAVgGAOQgFANgJAIQgIAIgMADQgLAEgNAAgATzB9IAAkXIAsAAIAAEXgARbB9IAAkXIAsAAIAABqIAVAAQAhAAARARQAQASAAAhIAAAlQAAAhgQASQgJAJgMAEQgMAFgRgBgASHBVIAVAAQAKAAAGgFQAGgGAAgPIAAgqQAAgPgGgFQgGgGgKAAIgVAAgAPtB9IAAjuIguAAIAAgpICIAAIAAApIguAAIAADugAOEB9IAAjJIg3DJIgtAAIAAkXIAnAAIAACnIAtinIA3AAIAAEXgAGbB9IAAjuIgyAAIAADuIgsAAIAAkXICLAAIAAEXgACrB9IAAkXIB4AAIAAApIhMAAIAABNIA8AAIAAAoIg8AAIAABRIBMAAIAAAogAjwB9IAAkXIB4AAIAAApIhMAAIAABNIA8AAIAAAoIg8AAIAABRIBMAAIAAAogAk4B9IAAjJIg3DJIgtAAIAAkXIAoAAIAACnIAtinIA3AAIAAEXgAqHB9IAAkXIArAAIAADvIAkAAIAAjvIAsAAIAADvIAkAAIAAjvIAsAAIAAEXgAsdB9IAAkXIAsAAIAABqIAVAAQAhAAAQARQAQASAAAhIAAAlQAAAhgQASQgIAJgMAEQgNAFgQgBgArxBVIAVAAQAKAAAGgFQAFgGAAgPIAAgqQAAgPgFgFQgGgGgKAAIgVAAgA0eB9IAAkXIB0AAIAAApIhIAAIAABBIAVAAQAhAAAQARQAQASAAAhIAAAlQAAAhgQASQgIAJgMAEQgNAFgQgBgAzyBVIAVAAQAKAAAGgFQAFgGAAgPIAAgqQAAgPgFgFQgGgGgKAAIgVAAg");
	this.shape.setTransform(131.1,15.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ29, new cjs.Rectangle(0,0,262.3,31.5), null);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(263.2,19.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ26, new cjs.Rectangle(4,3.7,518.4,31.5), null);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bt2();
	this.instance.parent = this;
	this.instance.setTransform(-7.8,7.8,0.936,0.936);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(-7.8,7.8,629.9,112.3), null);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004002").s().p("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");
	this.shape.setTransform(169.6,21.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AFBCqIAAgVQgNgEgKgFQgJgHgHgJQgNgSAAggIAAgUIAtAAIAAAXQAAAQAHAHQAGAGAMAAQALAAAGgGQAHgHAAgQQAAgPgHgLQgGgLgLgKIgWgTQgMgJgKgLQgLgMgGgPQgHgOAAgXQAAgOADgNQADgMAGgJQANgTAZgFIAAgYIAmAAIAAAYQAZAFANASQAHAKADAMQADAMAAAPIAAAKIgtAAIAAgMQAAgRgGgHQgGgFgLgBQgMABgGAFQgGAHAAARQAAAPAHAMQAGALALAJIAWASIAXAVQAKAMAHAOQAGAQAAAVQAAAggNASQgGAJgKAHQgJAFgNAEIAAAVgACMCWQgOgGgJgKQgTgTAAgkIAAicQAAgkATgUQAJgJAOgFQAMgFASAAQAjAAASATQAJAKAFAOQAFAPAAARIAACcQAAASgFAOQgFANgJAKQgJAKgNAGQgOAEgRAAQgSAAgMgEgACYhmQgGAGAAAQIAAChQAAARAGAHQAGAHAMAAQALAAAGgHQAIgHAAgRIAAihQAAgQgIgGQgGgHgLAAQgMAAgGAHgAgeCWQgNgGgJgKQgTgTAAgkIAAicQAAgkATgUQAJgJANgFQAOgFAQAAQAjAAASATQAJAKAFAOQAFAPAAARIAACcQAAASgFAOQgFANgJAKQgJAKgNAGQgOAEgRAAQgQAAgOgEgAgQhmQgHAGAAAQIAAChQAAARAHAHQAFAHALAAQALAAAGgHQAIgHAAgRIAAihQAAgQgIgGQgGgHgLAAQgLAAgFAHgAjICWQgNgGgJgKQgSgTAAgkIAAicQAAgkASgUQAJgJANgFQAOgFARAAQAjAAASATQAKAKAEAOQAFAPAAARIAACcQAAASgFAOQgEANgKAKQgJAKgNAGQgNAEgSAAQgRAAgOgEgAi6hmQgHAGAAAQIAAChQAAARAHAHQAGAHALAAQAMAAAGgHQAHgHAAgRIAAihQAAgQgHgGQgGgHgMAAQgLAAgGAHgAlyCWQgMgGgJgKQgSgTAAgkIAAgZIAsAAIAAAbQAAARAHAHQAHAHALAAQAMAAAGgHQAGgHAAgVIAAgXQAAgWgHgIQgHgIgQAAIgQAAIAAgrIASAAQANABAIgIQAHgGAAgSIAAgQQAAgVgGgHQgGgHgMAAQgLAAgHAHQgHAGAAAQIAAAUIgsAAIAAgRQAAgkASgUQAJgJAMgFQAOgFASAAQAiAAASATQAJAKAEAOQAFAPAAARIAAAIQAAAwghAOQASAHAIAQQAHAQAAAXIAAAYQAAASgFAOQgEANgJAKQgJAKgNAGQgNAEgRAAQgSAAgOgEg");
	this.shape_1.setTransform(455.3,19.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ21, new cjs.Rectangle(-64,2.1,560.3,34.2), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF3366").ss(7.1,1,1).rr(-41.05,-60.05,82.1,120.1,3.8);
	this.shape.setTransform(41,60);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(-3.5,-3.5,89.1,127.2), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.doll();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(0,0,64,88), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tree();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(0,0,64,88), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.zero();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(0,0,64,88), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tree();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(0,0,64,88), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.zero();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(0,0,64,88), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.doll();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(0,0,64,88), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pole();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(0,0,98,137), null);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ43();
	this.instance.parent = this;
	this.instance.setTransform(381.8,243.1,1.214,1.102,0,0,0,314.4,220.6);
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ45, new cjs.Rectangle(0,0,763.8,485.9), null);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ45();
	this.instance.parent = this;
	this.instance.setTransform(381.9,243.1,1,1,0,0,0,381.9,243.1);
	this.instance.alpha = 0.762;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.18},49).to({alpha:0.762},50).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,763.8,485.9);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ33();
	this.instance.parent = this;
	this.instance.setTransform(39.5,61.5,1,1,0,0,0,39.5,61.5);
	this.instance.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(-14, -40, 3, -134))];
	this.instance.cache(-2,-2,83,127);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ41, new cjs.Rectangle(0,0,83,127), null);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ35();
	this.instance.parent = this;
	this.instance.setTransform(77,37,1,1,0,0,0,77,37);
	this.instance.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(0, -40, 0, -136))];
	this.instance.cache(-2,-2,158,78);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ40, new cjs.Rectangle(0,0,158,78), null);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ40();
	this.instance.parent = this;
	this.instance.setTransform(77,37,1,1,0,0,0,77,37);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:9.3,x:51.7},9,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:20,x:23.6},10,cjs.Ease.get(1)).to({regY:37.1,scaleX:1,scaleY:1,rotation:9.8,x:50.4,y:37.1},10,cjs.Ease.get(-1)).to({regY:37,scaleX:1,scaleY:1,rotation:0,x:77,y:37},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,158,78);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ34();
	this.instance.parent = this;
	this.instance.setTransform(51,37,1,1,0,0,0,51,37);
	this.instance.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(0, -39, 0, -105))];
	this.instance.cache(-2,-2,106,78);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:37.1,scaleX:1,scaleY:1,rotation:-13.3,x:104.4,y:37.1},7,cjs.Ease.get(-1)).to({regY:37,scaleX:1,scaleY:1,rotation:-26.7,x:157.8,y:37},7,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:-14.3,x:108,y:37.1},7,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:0,x:51,y:37},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,110,82);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ41();
	this.instance.parent = this;
	this.instance.setTransform(39.5,61.5,1,1,0,0,0,39.5,61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},84).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,83,127);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ44();
	this.instance.parent = this;
	this.instance.setTransform(391,248.4,1.677,0.516,2.5,0,0,381.9,243);
	this.instance.alpha = 0.762;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.back();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ32, new cjs.Rectangle(-254.1,0,1290.1,700), null);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ30();
	this.instance.parent = this;
	this.instance.setTransform(403.6,14.3,1,1,0,0,0,114.9,14.3);

	this.instance_1 = new lib.Символ29();
	this.instance_1.parent = this;
	this.instance_1.setTransform(131.1,15.8,1,1,0,0,0,131.1,15.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},19).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(288.7,0,229.7,28.6);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ26();
	this.instance.parent = this;
	this.instance.setTransform(263.2,43,1,1,0,0,0,263.2,43);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ27, new cjs.Rectangle(4,3.7,518.4,31.5), null);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ21();
	this.instance.parent = this;
	this.instance.setTransform(315.9,64,0.979,0.979,0,0,0,218.8,20.4);
	this.instance.shadow = new cjs.Shadow("rgba(102,204,0,1)",0,0,5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	// Слой 2
	this.instance_1 = new lib.Символ22();
	this.instance_1.parent = this;
	this.instance_1.setTransform(390.8,67.3,1,0.899,0,0,0,389.5,67.6);
	this.instance_1.alpha = 0.102;
	this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,4);
	this.instance_1.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({alpha:0.23},0).to({_off:true},1).wait(2));

	// Слой 1
	this.instance_2 = new lib.Символ22();
	this.instance_2.parent = this;
	this.instance_2.setTransform(390.8,67.3,1,0.899,0,0,0,389.5,67.6);
	this.instance_2.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.5,10.5,643,115);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ24();
	this.instance.parent = this;
	this.instance.setTransform(389.5,67.6,1,1,0,0,0,389.5,67.6);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ24(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ23, new cjs.Rectangle(-26.5,-6.5,677,149), null);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 20
	this.instance = new lib.Символ20();
	this.instance.parent = this;
	this.instance.setTransform(482.7,60,1,1,0,0,0,41,60);
	this.instance.alpha = 0.25;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({alpha:1},4).to({alpha:0.25},5).wait(2));

	// Символ 20
	this.instance_1 = new lib.Символ20();
	this.instance_1.parent = this;
	this.instance_1.setTransform(375.6,60,1,1,0,0,0,41,60);
	this.instance_1.alpha = 0.25;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({alpha:1},4).to({alpha:0.25},5).wait(3));

	// Символ 20
	this.instance_2 = new lib.Символ20();
	this.instance_2.parent = this;
	this.instance_2.setTransform(263.6,60,1,1,0,0,0,41,60);
	this.instance_2.alpha = 0.25;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({alpha:1},4).to({alpha:0.25},5).wait(4));

	// Символ 20
	this.instance_3 = new lib.Символ20();
	this.instance_3.parent = this;
	this.instance_3.setTransform(153.1,60,1,1,0,0,0,41,60);
	this.instance_3.alpha = 0.25;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({alpha:1},4).to({alpha:0.25},5).wait(5));

	// Символ 20
	this.instance_4 = new lib.Символ20();
	this.instance_4.parent = this;
	this.instance_4.setTransform(41,60,1,1,0,0,0,41,60);
	this.instance_4.alpha = 0.25;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({alpha:1},4).to({alpha:0.25},5).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.5,-3.5,530.8,127.2);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 17
	this.instance = new lib.Символ17();
	this.instance.parent = this;
	this.instance.setTransform(-92.1,13.8,0.903,0.903,0,0,0,32,44);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,x:-93.5,y:13},9,cjs.Ease.get(1)).wait(15).to({scaleX:0.9,scaleY:0.9,x:-92.1,y:13.8},5,cjs.Ease.get(1)).wait(15).to({regY:44.1},0).wait(1));

	// Символ 16
	this.instance_1 = new lib.Символ16();
	this.instance_1.parent = this;
	this.instance_1.setTransform(19.8,13.8,0.903,0.903,0,0,0,32,44.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({regY:44},0).to({scaleX:1,scaleY:1,x:21,y:13},9,cjs.Ease.get(1)).wait(15).to({scaleX:0.9,scaleY:0.9,x:19.8,y:13.8},5,cjs.Ease.get(1)).wait(12).to({regY:44.1},0).wait(1));

	// Символ 16
	this.instance_2 = new lib.Символ16();
	this.instance_2.parent = this;
	this.instance_2.setTransform(130.2,13.8,0.903,0.903,0,0,0,31.9,44.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({regY:44},0).to({regX:32,scaleX:1,scaleY:1,x:129.6,y:13},9,cjs.Ease.get(1)).wait(15).to({regX:31.9,scaleX:0.9,scaleY:0.9,x:130.2,y:13.8},5,cjs.Ease.get(1)).wait(9).to({regY:44.1},0).wait(1));

	// Символ 16
	this.instance_3 = new lib.Символ16();
	this.instance_3.parent = this;
	this.instance_3.setTransform(242.3,13.8,0.903,0.903,0,0,0,32,44.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({regY:44},0).to({scaleX:1,scaleY:1,x:242.6,y:13},9,cjs.Ease.get(1)).wait(15).to({scaleX:0.9,scaleY:0.9,x:242.3,y:13.8},5,cjs.Ease.get(1)).wait(6).to({regY:44.1},0).wait(1));

	// Символ 18
	this.instance_4 = new lib.Символ18();
	this.instance_4.parent = this;
	this.instance_4.setTransform(347.2,13.8,0.903,0.903,0,0,0,32,44.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(13).to({regY:44},0).to({scaleX:1,scaleY:1,x:347.1,y:13},9,cjs.Ease.get(1)).wait(15).to({scaleX:0.9,scaleY:0.9,x:347.2,y:13.8},5,cjs.Ease.get(1)).wait(2).to({regY:44.1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121,-26,497.2,79.5);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.slotto();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.607,0.607);

	this.instance_1 = new lib.slotto();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1,757.9,0.607,0.607);

	this.instance_2 = new lib.Символ5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(42.8,704.6,0.865,0.865,0,0,0,32,44);
	this.instance_2.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(0,0,86,1413.5), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.slotto();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.607,0.607);

	this.instance_1 = new lib.slotto();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1,757.9,0.607,0.607);

	this.instance_2 = new lib.Символ6();
	this.instance_2.parent = this;
	this.instance_2.setTransform(42.3,702.7,0.865,0.865,0,0,0,32,44);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(0,0,86,1413.5), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.slotto();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.607,0.607);

	this.instance_1 = new lib.slotto();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1,757.9,0.607,0.607);

	this.instance_2 = new lib.Символ6();
	this.instance_2.parent = this;
	this.instance_2.setTransform(42.3,702.7,0.865,0.865,0,0,0,32,44);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(0,0,86,1413.5), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.slotto();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.607,0.607);

	this.instance_1 = new lib.slotto();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1,757.9,0.607,0.607);

	this.instance_2 = new lib.Символ6();
	this.instance_2.parent = this;
	this.instance_2.setTransform(42.3,702.7,0.865,0.865,0,0,0,32,44);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(0,0,86,1413.5), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.slotto();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.607,0.607);

	this.instance_1 = new lib.slotto();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1,757.9,0.607,0.607);

	this.instance_2 = new lib.Символ7();
	this.instance_2.parent = this;
	this.instance_2.setTransform(41.6,702.7,0.865,0.865,0,0,0,32,44);
	this.instance_2.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(0,0,86,1413.5), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 8
	this.instance = new lib.Символ19();
	this.instance.parent = this;
	this.instance.setTransform(421,290,1,1,0,0,0,41,60);
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(150).to({_off:false},0).wait(85).to({alpha:0},4).to({_off:true},1).wait(72));

	// Слой 7
	this.instance_1 = new lib.Символ15();
	this.instance_1.parent = this;
	this.instance_1.setTransform(546.2,319.6,1,1,0,0,0,32,44);
	this.instance_1.alpha = 0;
	this.instance_1.compositeOperation = "lighter";
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(150).to({_off:false},0).to({alpha:0.18},9).to({alpha:0},10).to({alpha:0.18},9).to({alpha:0},10).to({alpha:0.18},9).to({alpha:0},10).to({alpha:0.18},9).to({alpha:0},10).wait(13).to({_off:true},1).wait(72));

	// Слой 1
	this.instance_2 = new lib.Символ15();
	this.instance_2.parent = this;
	this.instance_2.setTransform(546.2,319.6,1,1,0,0,0,32,44);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(150).to({_off:false},0).wait(85).to({alpha:0},4).to({_off:true},1).wait(72));

	// Символ 14
	this.instance_3 = new lib.Символ14();
	this.instance_3.parent = this;
	this.instance_3.setTransform(862.1,201.1,1,1,0,0,0,43,706.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({y:181.1},9,cjs.Ease.get(-1)).to({y:883.3},30).to({y:863.3},10,cjs.Ease.get(1)).wait(38).to({x:861.1,y:105.6},0).to({x:862.1,y:83.1},10,cjs.Ease.get(-1)).to({y:311.2},22).to({y:291.2},10,cjs.Ease.get(1)).to({_off:true},2).wait(85).to({_off:false},0).wait(25).to({y:271.2},10,cjs.Ease.get(-1)).to({y:979.4},30).to({x:863.1,y:958.9},9,cjs.Ease.get(1)).to({x:862.1,y:201.1},1,cjs.Ease.get(1)).wait(2));

	// Символ 13
	this.instance_4 = new lib.Символ13();
	this.instance_4.parent = this;
	this.instance_4.setTransform(757.1,-167,1,1,0,0,0,43,706.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(14).to({y:-187},9,cjs.Ease.get(-1)).to({y:515.2},30).to({y:495.2},10,cjs.Ease.get(1)).wait(38).to({x:756.1,y:-262.5},0).to({x:757.1,y:-283},10,cjs.Ease.get(-1)).to({y:313.2},22).to({y:293.2},10,cjs.Ease.get(1)).to({_off:true},7).wait(85).to({_off:false},0).wait(20).to({y:273.2},10,cjs.Ease.get(-1)).to({y:611.3},30).to({x:758.1,y:590.8},9,cjs.Ease.get(1)).to({x:757.1,y:-167},1,cjs.Ease.get(1)).wait(7));

	// Символ 12
	this.instance_5 = new lib.Символ12();
	this.instance_5.parent = this;
	this.instance_5.setTransform(644.1,-81,1,1,0,0,0,43,706.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(9).to({y:-101},9,cjs.Ease.get(-1)).to({y:601.2},30).to({y:581.2},10,cjs.Ease.get(1)).wait(38).to({x:643.1,y:-176.5},0).to({x:644.1,y:-197},10,cjs.Ease.get(-1)).to({y:313.2},22).to({y:293.2},10,cjs.Ease.get(1)).to({_off:true},12).wait(85).to({_off:false},0).wait(15).to({y:273.2},10,cjs.Ease.get(-1)).to({y:699.3},30).to({x:645.1,y:676.8},9,cjs.Ease.get(1)).to({x:644.1,y:-81},1,cjs.Ease.get(1)).wait(12));

	// Символ 11
	this.instance_6 = new lib.Символ11();
	this.instance_6.parent = this;
	this.instance_6.setTransform(535.1,19.1,1,1,0,0,0,43,706.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(4).to({y:-0.9},9,cjs.Ease.get(-1)).to({y:701.3},30).to({y:681.3},10,cjs.Ease.get(1)).wait(38).to({x:534.1,y:-76.4},0).to({x:535.1,y:-96.9},10,cjs.Ease.get(-1)).to({y:313.2},22).to({y:293.2},10,cjs.Ease.get(1)).to({_off:true},17).wait(85).to({_off:false},0).wait(10).to({y:273.2},10,cjs.Ease.get(-1)).to({y:799.3},30).to({x:536.1,y:776.8},9,cjs.Ease.get(1)).to({x:535.1,y:19.1},1,cjs.Ease.get(1)).wait(17));

	// Символ 10
	this.instance_7 = new lib.Символ10();
	this.instance_7.parent = this;
	this.instance_7.setTransform(422,-261,1,1,0,0,0,43,706.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({y:-281},9,cjs.Ease.get(-1)).to({y:421.2},30).to({y:401.2},10,cjs.Ease.get(1)).wait(38).to({x:421,y:-356.5},0).to({x:422,y:-379},10,cjs.Ease.get(-1)).to({y:313.2},22).to({y:293.2},10,cjs.Ease.get(1)).to({_off:true},21).wait(85).to({_off:false},0).wait(6).to({y:273.2},10,cjs.Ease.get(-1)).to({y:519.2},30).to({x:423,y:496.7},9,cjs.Ease.get(1)).to({x:422,y:-261},1,cjs.Ease.get(1)).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(379,-967.7,526.1,1875.6);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AcuJWQgkAAgBgmIAAxfQABgmAkAAILcAAQAlAAAAAmIAARfQAAAmglAAgAMFJWQglAAAAgmIAAxfQAAgmAlAAILbAAQAmAAAAAmIAARfQAAAmgmAAgAlVJWQglAAAAgmIAAxfQAAgmAlAAILaAAQAmAAAAAmIAARfQAAAmgmAAgA2tJWQgmAAAAgmIAAxfQAAgmAmAAILbAAQAlAAAAAmIAARfQAAAmglAAgEgoJAJWQglAAAAgmIAAxfQAAgmAlAAILbAAQAmAAAAAmIAARfQAAAmgmAAg");
	mask.setTransform(641.4,290.6);

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.parent = this;
	this.instance.setTransform(108.5,640.5,1,1,0,0,0,108.5,640.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(380.7,230.9,521.4,119.5), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ23();
	this.instance.parent = this;
	this.instance.setTransform(389.5,67.6,1,1,0,0,0,389.5,67.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.02,scaleY:1.02},9,cjs.Ease.get(-1)).to({scaleX:1.05,scaleY:1.05},10,cjs.Ease.get(1)).to({scaleX:1.03,scaleY:1.03},10,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.5,10.5,643,115);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 38
	this.instance = new lib.Символ38();
	this.instance.parent = this;
	this.instance.setTransform(129.5,-926.1,0.569,0.569,0,0,0,77,37);

	this.instance_1 = new lib.Символ38();
	this.instance_1.parent = this;
	this.instance_1.setTransform(129.5,-400.2,0.569,0.569,0,0,0,77,37);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Символ 38
	this.instance_2 = new lib.Символ38();
	this.instance_2.parent = this;
	this.instance_2.setTransform(863.1,-602.5,0.569,0.569,0,0,0,77,37);

	this.instance_3 = new lib.Символ38();
	this.instance_3.parent = this;
	this.instance_3.setTransform(863.1,-76.6,0.569,0.569,0,0,0,77,37);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	// Символ 37
	this.instance_4 = new lib.Символ37();
	this.instance_4.parent = this;
	this.instance_4.setTransform(895,-781.1,0.569,0.569,0,0,0,51,37);

	this.instance_5 = new lib.Символ37();
	this.instance_5.parent = this;
	this.instance_5.setTransform(895,-255.2,0.569,0.569,0,0,0,51,37);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4}]}).wait(1));

	// Символ 37
	this.instance_6 = new lib.Символ37();
	this.instance_6.parent = this;
	this.instance_6.setTransform(131.1,-593.3,0.569,0.569,0,0,0,51,37);

	this.instance_7 = new lib.Символ37();
	this.instance_7.parent = this;
	this.instance_7.setTransform(131.1,-67.4,0.569,0.569,0,0,0,51,37);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6}]}).wait(1));

	// Символ 36
	this.instance_8 = new lib.Символ36();
	this.instance_8.parent = this;
	this.instance_8.setTransform(833.8,-940,0.569,0.569,0,0,0,39.5,61.6);

	this.instance_9 = new lib.Символ36();
	this.instance_9.parent = this;
	this.instance_9.setTransform(833.8,-414.1,0.569,0.569,0,0,0,39.5,61.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8}]}).wait(1));

	// Символ 36
	this.instance_10 = new lib.Символ36();
	this.instance_10.parent = this;
	this.instance_10.setTransform(175.8,-763.2,0.569,0.569,0,0,0,39.5,61.6);

	this.instance_11 = new lib.Символ36();
	this.instance_11.parent = this;
	this.instance_11.setTransform(175.8,-237.3,0.569,0.569,0,0,0,39.5,61.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ39, new cjs.Rectangle(85.7,-975,842.3,932.6), null);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ31();
	this.instance.parent = this;
	this.instance.setTransform(263.1,18,1,1,0,0,0,259.1,15.8);
	this.instance.shadow = new cjs.Shadow("rgba(255,255,0,1)",0,0,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ27();
	this.instance_1.parent = this;
	this.instance_1.setTransform(263.2,41.5,1,1,0,0,0,263.2,43);
	this.instance_1.shadow = new cjs.Shadow("rgba(255,51,153,1)",0,0,8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ28, new cjs.Rectangle(-5,-6.8,540,53), null);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ39();
	this.instance.parent = this;
	this.instance.setTransform(-24.8,1035.2,1,1,0,0,0,60.9,60.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:1561},69).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,842.3,932.6);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ42();
	this.instance.parent = this;
	this.instance.setTransform(380.6,91.4,1,1,0,0,0,406.7,517.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ32();
	this.instance_1.parent = this;
	this.instance_1.setTransform(400,350,1,1,0,0,0,400,350);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(-254.1,-426.1,1290.1,1126.2), null);


// stage content:
(lib.slot3000_600300 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		stage.scaleX = stage.scaleY = 2;
		
		stage.canvas.width = 600 * 2;
		stage.canvas.height = 300 * 2;
		stage.canvas.style.width = '600px';
		stage.canvas.style.height = '300px';
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 1
	this.instance = new lib.Символ28();
	this.instance.parent = this;
	this.instance.setTransform(306,60.7,1,1,0,0,0,263.2,43);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 8
	this.instance_1 = new lib.Символ8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-228.4,481.5,1,1,0,0,0,108.5,640.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Символ 3
	this.instance_2 = new lib.Символ3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(524.5,131,1,1,0,0,0,49,68.5);

	this.instance_3 = new lib.Символ3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(418,131,1,1,0,0,0,49,68.5);

	this.instance_4 = new lib.Символ3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(306.5,131,1,1,0,0,0,49,68.5);

	this.instance_5 = new lib.Символ3();
	this.instance_5.parent = this;
	this.instance_5.setTransform(195,131,1,1,0,0,0,49,68.5);

	this.instance_6 = new lib.Символ3();
	this.instance_6.parent = this;
	this.instance_6.setTransform(83.5,131,1,1,0,0,0,49,68.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	// Символ 1
	this.instance_7 = new lib.Символ1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(303.5,243.3,0.882,0.882,0,0,0,312.5,61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// Символ 2
	this.instance_8 = new lib.Символ2();
	this.instance_8.parent = this;
	this.instance_8.setTransform(302.8,200.1,0.757,0.757,0,0,0,399.9,350.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(107.6,-976.7,976.9,1875.6);
// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/b1.png?1483626411782", id:"b1"},
		{src:"images/b2.png?1483626411782", id:"b2"},
		{src:"images/b3.png?1483626411782", id:"b3"},
		{src:"images/back.jpg?1483626411782", id:"back"},
		{src:"images/bt2.png?1483626411782", id:"bt2"},
		{src:"images/doll.png?1483626411782", id:"doll"},
		{src:"images/pole.png?1483626411782", id:"pole"},
		{src:"images/radial.png?1483626411782", id:"radial"},
		{src:"images/slotto.png?1483626411782", id:"slotto"},
		{src:"images/tree.png?1483626411782", id:"tree"},
		{src:"images/zero.png?1483626411782", id:"zero"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;