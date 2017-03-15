(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,818,586);


(lib.btn = function() {
	this.initialize(img.btn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,406,138);


(lib.casinoxlogo = function() {
	this.initialize(img.casinoxlogo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,178,20);


(lib.dama1 = function() {
	this.initialize(img.dama1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,308,300);


(lib.dama2 = function() {
	this.initialize(img.dama2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,300);// helper functions:

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


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.btn();
	this.instance.parent = this;
	this.instance.setTransform(-203,-69);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ31, new cjs.Rectangle(-203,-69,406,138), null);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AoDCLQgNgFgIgJQgJgJgEgNQgEgOAAgQIAAiRQAAgQAEgOQAEgNAJgJQAIgJANgFQAMgEAQAAQARAAAMAEQANAFAIAJQAJAJAEANQAEAOAAAQIAACRQAAAQgEAOQgEANgJAJQgIAJgNAFQgMAEgRAAQgQAAgMgEgAn3hgQgGAHAAAOIAACXQAAAOAGAHQAFAGALAAQALAAAGgGQAGgHAAgOIAAiXQAAgOgGgHQgGgGgLAAQgLAAgFAGgAJ2CMIAAgrIAqAAIAAArgAIPCMIAAjIIgfDIIgqAAIggjFIAADFIgnAAIAAkXIA+AAIAgDGIAejGIA9AAIAAEXgADtCMIAAkXIB4AAIAAAoIhMAAIAABOIA8AAIAAAnIg8AAIAABSIBMAAIAAAogACsCMIgHgzIg2AAIgIAzIgoAAIAskXIBBAAIAtEXgACfAzIgWiNIgVCNIArAAgAhLCMIAAkXIBBAAQAPAAAMAEQANAFAIAJQAIAIAEANQAEANAAASIAAAkQAAAQgEANQgEAMgIAJQgIAJgNAEQgMAFgPgBIgVAAIAABqgAgfgEIAVAAQAKAAAFgGQAFgGAAgPIAAgqQAAgOgFgHQgFgFgKAAIgVAAgAjdCMIAAkXIB0AAIAAAoIhIAAIAADvgAkkCMIAAjFIg3DFIgtAAIAAkXIAoAAIAACxIAzixIAxAAIAAEXgApyCMIAAjvIgyAAIAADvIgsAAIAAkXICLAAIAAEXgAJ4BOQgDgHAAgKQAAgfAYgiQAMgQAFgMIAFgTIACgYQAAgOgFgHQgGgGgLAAQgLAAgFAGQgGAHAAAOIAAAfIgpAAIAAgcQAAgQAEgOQAEgNAIgJQAIgJAMgFQANgEAQAAQAPAAANAEQAMAFAIAJQAIAJAEANQAEAOAAAQQAAANgCALIgGAVQgFAOgNAQQgaAiAAAZIACAQg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ30, new cjs.Rectangle(-72.1,-14.3,144.3,28.6), null);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AoDCLQgNgFgIgJQgJgJgEgNQgEgOAAgQIAAiRQAAgQAEgOQAEgNAJgJQAIgJANgFQAMgEAQAAQARAAAMAEQANAFAIAJQAJAJAEANQAEAOAAAQIAACRQAAAQgEAOQgEANgJAJQgIAJgNAFQgMAEgRAAQgQAAgMgEgAn3hgQgGAHAAAOIAACXQAAAOAGAHQAFAGALAAQALAAAGgGQAGgHAAgOIAAiXQAAgOgGgHQgGgGgLAAQgLAAgFAGgAJ2CMIAAgrIAqAAIAAArgAIPCMIAAjIIgfDIIgqAAIggjFIAADFIgnAAIAAkXIA+AAIAgDGIAejGIA9AAIAAEXgADtCMIAAkXIB4AAIAAAoIhMAAIAABOIA8AAIAAAnIg8AAIAABSIBMAAIAAAogACsCMIgHgzIg2AAIgIAzIgoAAIAskXIBBAAIAtEXgACfAzIgWiNIgVCNIArAAgAhLCMIAAkXIBBAAQAPAAAMAEQANAFAIAJQAIAIAEANQAEANAAASIAAAkQAAAQgEANQgEAMgIAJQgIAJgNAEQgMAFgPgBIgVAAIAABqgAgfgEIAVAAQAKAAAFgGQAFgGAAgPIAAgqQAAgOgFgHQgFgFgKAAIgVAAgAjdCMIAAkXIB0AAIAAAoIhIAAIAADvgAkkCMIAAjFIg3DFIgtAAIAAkXIAoAAIAACxIAzixIAxAAIAAEXgApyCMIAAjvIgyAAIAADvIgsAAIAAkXICLAAIAAEXgAJ4BOQgDgHAAgKQAAgfAYgiQAMgQAFgMIAFgTIACgYQAAgOgFgHQgGgGgLAAQgLAAgFAGQgGAHAAAOIAAAfIgpAAIAAgcQAAgQAEgOQAEgNAIgJQAIgJAMgFQANgEAQAAQAPAAANAEQAMAFAIAJQAIAJAEANQAEAOAAAQQAAANgCALIgGAVQgFAOgNAQQgaAiAAAZIACAQg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ29, new cjs.Rectangle(-72.1,-14.3,144.3,28.6), null);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ27, new cjs.Rectangle(-101.1,-41.2,202.2,82.5), null);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ26, new cjs.Rectangle(-101.1,-41.2,202.2,82.5), null);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AF/EBIAAg8IiXAAIAAA8IhEAAIAAh8IAbAAQAJgJAEgPQAEgMABgVIAPlHIDGAAIAAGAIAfAAIAAB8gAEVBLQAAAYgGAOQgEAMgKAIIBdAAIAAlAIg7AAgAgTDCQgTgGgOgPQgOgOgGgWQgHgVAAgbIAAjpQAAgaAHgWQAGgVAOgOQAOgOATgIQAUgHAZAAQAbAAAUAHQAUAIANAOQAPAOAGAVQAHAWAAAaIAADpQAAAbgHAVQgGAWgPAOQgNAPgUAGQgUAIgbAAQgZAAgUgIgAAAi2QgJALAAAXIAADyQAAAXAJALQAJALARAAQASAAAKgLQAKgLAAgXIAAjyQAAgXgKgLQgKgKgSAAQgRAAgJAKgAn6DCQgUgGgOgPQgOgOgGgWQgHgVAAgbIAAjpQAAgaAHgWQAGgVAOgOQAOgOAUgIQAUgHAZAAQAbAAAUAHQAUAIANAOQAOAOAHAVQAHAWAAAaIAADpQAAAbgHAVQgHAWgOAOQgNAPgUAGQgUAIgbAAQgZAAgUgIgAnni2QgKALAAAXIAADyQAAAXAKALQAJALARAAQATAAAJgLQAJgLAAgXIAAjyQAAgXgJgLQgJgKgTAAQgRAAgJAKgAL/DFIAAhEIBDAAIAABEgAKNDFIAAk8IhZE8IhIAAIAAnAIA/AAIAAEbIBTkbIBNAAIAAHAgAkzDFIAAnAIC6AAIAABAIh0AAIAAGAgAqsDFIAAmAIhRAAIAAGAIhGAAIAAnAIDfAAIAAHAgAMGBhIgIiiIAAi6IBGAAIAAC6IgJCig");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ23, new cjs.Rectangle(-83.6,-25.7,167.2,51.4), null);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AF/EBIAAg8IiXAAIAAA8IhEAAIAAh8IAbAAQAJgJAEgPQAEgMABgVIAPlHIDGAAIAAGAIAfAAIAAB8gAEVBLQAAAYgGAOQgEAMgKAIIBdAAIAAlAIg7AAgAgTDCQgTgGgOgPQgOgOgGgWQgHgVAAgbIAAjpQAAgaAHgWQAGgVAOgOQAOgOATgIQAUgHAZAAQAbAAAUAHQAUAIANAOQAPAOAGAVQAHAWAAAaIAADpQAAAbgHAVQgGAWgPAOQgNAPgUAGQgUAIgbAAQgZAAgUgIgAAAi2QgJALAAAXIAADyQAAAXAJALQAJALARAAQASAAAKgLQAKgLAAgXIAAjyQAAgXgKgLQgKgKgSAAQgRAAgJAKgAn6DCQgUgGgOgPQgOgOgGgWQgHgVAAgbIAAjpQAAgaAHgWQAGgVAOgOQAOgOAUgIQAUgHAZAAQAbAAAUAHQAUAIANAOQAOAOAHAVQAHAWAAAaIAADpQAAAbgHAVQgHAWgOAOQgNAPgUAGQgUAIgbAAQgZAAgUgIgAnni2QgKALAAAXIAADyQAAAXAKALQAJALARAAQATAAAJgLQAJgLAAgXIAAjyQAAgXgJgLQgJgKgTAAQgRAAgJAKgAL/DFIAAhEIBDAAIAABEgAKNDFIAAk8IhZE8IhIAAIAAnAIA/AAIAAEbIBTkbIBNAAIAAHAgAkzDFIAAnAIC6AAIAABAIh0AAIAAGAgAqsDFIAAmAIhRAAIAAGAIhGAAIAAnAIDfAAIAAHAgAMGBhIgIiiIAAi6IBGAAIAAC6IgJCig");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(-83.6,-25.7,167.2,51.4), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF"],[0,1],-166.5,0,166.6,0).s().p("A6AH+IAAv7MA0BAAAIAAP7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(-166.5,-51,333.1,102.1), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4F2233").s().p("Aj5A+QgzgJgbgPQgcgOgBgXQgBgWAngXQAngXApAFQApAGAeAWQAdAWAIAhQAHAhglAIQgTAEgVAAQgXAAgagEgAChA8QglgIAHgiQAIggAdgWQAegXApgFQApgGAnAYQAnAXgBAXQgBAVgcAPQgbAOgzAJQgaAFgXAAQgVAAgTgEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(-35.6,-6.6,71.4,13.3), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dama2();
	this.instance.parent = this;
	this.instance.setTransform(-150,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(-150,-150,300,300), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#883556").s().p("Ak4AgQglgTgCgNQgDgMAlgQQAlgQAxAKQAwAKAeASQAfASAAALQAAALghAHQggAIgsABIgCAAQgrAAgkgSgADoAnQgsgBgggHQghgIAAgLQAAgLAfgRQAegTAwgKQAxgKAlARQAlAQgDANQgCALglATQgkASgrAAIgCAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(-35.2,-5,70.5,10), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dama1();
	this.instance.parent = this;
	this.instance.setTransform(-154,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(-154,-150,308,300), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(-409,-293);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(-409,-293,818,586), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.casinoxlogo();
	this.instance.parent = this;
	this.instance.setTransform(-89,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(-89,-10,178,20), null);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ31();
	this.instance.parent = this;
	this.instance.alpha = 0;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.109},21,cjs.Ease.get(1)).to({alpha:0},23,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ31();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-203,-69,406,138);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ29();
	this.instance.parent = this;
	this.instance.setTransform(21.5,8.3,1.346,1.346);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ30();
	this.instance_1.parent = this;
	this.instance_1.setTransform(21.5,10.3,1.346,1.346);
	this.instance_1.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance_1.cache(-74,-16,148,33);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ28, new cjs.Rectangle(-77.6,-11,201,46), null);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ27();
	this.instance.parent = this;
	this.instance.setTransform(78.5,19.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ26();
	this.instance_1.parent = this;
	this.instance_1.setTransform(78.5,21);
	this.instance_1.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance_1.cache(-103,-43,206,87);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ25, new cjs.Rectangle(-24.6,-22.3,209,90), null);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ22();
	this.instance.parent = this;
	this.instance.setTransform(-53.5,3.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ23();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-53.5,5.5);
	this.instance_1.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance_1.cache(-86,-28,171,55);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ21, new cjs.Rectangle(-139.1,-22.2,175,59), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.parent = this;
	this.instance.filters = [new cjs.BlurFilter(3, 3, 1)];
	this.instance.cache(-38,-9,75,17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(-37.6,-8.6,78,20), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.parent = this;
	this.instance.filters = [new cjs.BlurFilter(3, 3, 1)];
	this.instance.cache(-37,-7,75,14);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(-37.2,-7,78,17), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ4();
	this.instance.parent = this;
	this.instance.alpha = 0;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.328},24,cjs.Ease.get(1)).to({alpha:0},25,cjs.Ease.get(1)).wait(1).to({alpha:0.328},24,cjs.Ease.get(1)).to({alpha:0},25,cjs.Ease.get(1)).wait(1).to({alpha:0.328},24,cjs.Ease.get(1)).to({alpha:0},25,cjs.Ease.get(1)).wait(1).to({alpha:0.328},24,cjs.Ease.get(1)).to({alpha:0},25,cjs.Ease.get(1)).wait(1).to({alpha:0.328},24,cjs.Ease.get(1)).to({alpha:0},25,cjs.Ease.get(1)).wait(1).to({alpha:0.328},24,cjs.Ease.get(1)).to({alpha:0},25,cjs.Ease.get(1)).wait(1).to({alpha:0.328},24,cjs.Ease.get(1)).to({alpha:0},25,cjs.Ease.get(1)).wait(1).to({alpha:0.328},24,cjs.Ease.get(1)).to({alpha:0},25,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ4();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(400));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-409,-293,818,586);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ32();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.11,scaleY:1.11},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-203,-69,406,138);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ34();
	this.instance.parent = this;
	this.instance.setTransform(41.8,0);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ33, new cjs.Rectangle(-183.1,-76.4,450,153), null);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_129 = function() {
		this.gotoAndPlay(0);
	}
	this.frame_274 = function() {
		this.gotoAndPlay(131);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(129).call(this.frame_129).wait(145).call(this.frame_274).wait(1));

	// Слой 3
	this.instance = new lib.Символ28();
	this.instance.parent = this;
	this.instance.setTransform(-77.7,-10.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(130).to({_off:false},0).to({x:-0.7,alpha:1},9,cjs.Ease.get(1)).wait(50).to({x:225.4,alpha:0},10).to({_off:true},1).wait(75));

	// Слой 2
	this.instance_1 = new lib.Символ25();
	this.instance_1.parent = this;
	this.instance_1.setTransform(48.9,-21);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(55).to({_off:false},0).to({x:-58.6,alpha:1},9).wait(57).to({x:-215.2,alpha:0},9,cjs.Ease.get(0.98)).wait(69).to({x:-91.1},0).to({x:-58.6,alpha:1},9).wait(57).to({x:159.9,alpha:0},9,cjs.Ease.get(0.98)).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ21();
	this.instance_2.parent = this;
	this.instance_2.setTransform(199.6,-4.4);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:53.5,alpha:1},9,cjs.Ease.get(1)).wait(36).to({x:-65.5,alpha:0},10,cjs.Ease.get(1)).to({_off:true},1).wait(219));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(60.5,-26.7,175,58);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AoHA1IAAkCIQOAAIAAECg");
	var mask_graphics_1 = new cjs.Graphics().p("AoHBfIAAkCIQOAAIAAECg");
	var mask_graphics_2 = new cjs.Graphics().p("AoHCBIAAkCIQOAAIAAECg");
	var mask_graphics_3 = new cjs.Graphics().p("AoHCBIAAkCIQOAAIAAECg");
	var mask_graphics_4 = new cjs.Graphics().p("AoHCBIAAkCIQOAAIAAECg");
	var mask_graphics_5 = new cjs.Graphics().p("AoHBfIAAkCIQOAAIAAECg");
	var mask_graphics_6 = new cjs.Graphics().p("AoHA1IAAkCIQOAAIAAECg");
	var mask_graphics_7 = new cjs.Graphics().p("AoHBfIAAkCIQOAAIAAECg");
	var mask_graphics_8 = new cjs.Graphics().p("AoHCBIAAkCIQOAAIAAECg");
	var mask_graphics_9 = new cjs.Graphics().p("AoHCBIAAkCIQOAAIAAECg");
	var mask_graphics_10 = new cjs.Graphics().p("AoHCBIAAkCIQOAAIAAECg");
	var mask_graphics_11 = new cjs.Graphics().p("AoHBfIAAkCIQOAAIAAECg");
	var mask_graphics_12 = new cjs.Graphics().p("AoHA1IAAkCIQOAAIAAECg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:2.5,y:-20.6}).wait(1).to({graphics:mask_graphics_1,x:2.5,y:-16.4}).wait(1).to({graphics:mask_graphics_2,x:2.5,y:-11.5}).wait(1).to({graphics:mask_graphics_3,x:2.5,y:-3}).wait(1).to({graphics:mask_graphics_4,x:2.5,y:-11.5}).wait(1).to({graphics:mask_graphics_5,x:2.5,y:-16.4}).wait(1).to({graphics:mask_graphics_6,x:2.5,y:-20.6}).wait(1).to({graphics:mask_graphics_7,x:2.5,y:-16.4}).wait(1).to({graphics:mask_graphics_8,x:2.5,y:-11.5}).wait(1).to({graphics:mask_graphics_9,x:2.5,y:-3}).wait(1).to({graphics:mask_graphics_10,x:2.5,y:-11.5}).wait(1).to({graphics:mask_graphics_11,x:2.5,y:-16.4}).wait(1).to({graphics:mask_graphics_12,x:2.5,y:-20.6}).wait(29));

	// Слой 1
	this.instance = new lib.Символ17();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ18();
	this.instance.parent = this;
	this.instance.setTransform(11.3,-19.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ13();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(-150,-150,300,300), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AoOiPIQcgJIABDaIwcAJg");
	var mask_graphics_1 = new cjs.Graphics().p("AoOh2IQcgJIABDaIwcAJg");
	var mask_graphics_2 = new cjs.Graphics().p("AoOhoIQcgJIABDaIwcAJg");
	var mask_graphics_3 = new cjs.Graphics().p("AoOhoIQcgJIABDaIwcAJg");
	var mask_graphics_4 = new cjs.Graphics().p("AoOhoIQcgJIABDaIwcAJg");
	var mask_graphics_5 = new cjs.Graphics().p("AoOh2IQcgJIABDaIwcAJg");
	var mask_graphics_6 = new cjs.Graphics().p("AoOiPIQcgJIABDaIwcAJg");
	var mask_graphics_7 = new cjs.Graphics().p("AoOh2IQcgJIABDaIwcAJg");
	var mask_graphics_8 = new cjs.Graphics().p("AoOhoIQcgJIABDaIwcAJg");
	var mask_graphics_9 = new cjs.Graphics().p("AoOhoIQcgJIABDaIwcAJg");
	var mask_graphics_10 = new cjs.Graphics().p("AoOhoIQcgJIABDaIwcAJg");
	var mask_graphics_11 = new cjs.Graphics().p("AoOh2IQcgJIABDaIwcAJg");
	var mask_graphics_12 = new cjs.Graphics().p("AoOiPIQcgJIABDaIwcAJg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:0.4,y:-15.3}).wait(1).to({graphics:mask_graphics_1,x:0.4,y:-12.8}).wait(1).to({graphics:mask_graphics_2,x:0.4,y:-9.1}).wait(1).to({graphics:mask_graphics_3,x:0.4,y:-4}).wait(1).to({graphics:mask_graphics_4,x:0.4,y:-9.1}).wait(1).to({graphics:mask_graphics_5,x:0.4,y:-12.8}).wait(1).to({graphics:mask_graphics_6,x:0.4,y:-15.3}).wait(1).to({graphics:mask_graphics_7,x:0.4,y:-12.8}).wait(1).to({graphics:mask_graphics_8,x:0.4,y:-9.1}).wait(1).to({graphics:mask_graphics_9,x:0.4,y:-4}).wait(1).to({graphics:mask_graphics_10,x:0.4,y:-9.1}).wait(1).to({graphics:mask_graphics_11,x:0.4,y:-12.8}).wait(1).to({graphics:mask_graphics_12,x:0.4,y:-15.3}).wait(21));

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(33));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ9();
	this.instance.parent = this;
	this.instance.setTransform(-3.9,-28.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ7();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(-154,-150,308,300), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.88,scaleY:0.88},98,cjs.Ease.get(-1)).to({scaleX:0.76,scaleY:0.76},100,cjs.Ease.get(1)).to({scaleX:0.88,scaleY:0.88},100,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},97,cjs.Ease.get(1)).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-409,-293,818,586);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ14();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:6.8},43,cjs.Ease.get(-1)).to({y:14},46,cjs.Ease.get(1)).to({y:6.9},46,cjs.Ease.get(-1)).to({y:0},44,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-150,300,300);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:11.7},36,cjs.Ease.get(-1)).to({y:24},38,cjs.Ease.get(0.99)).to({y:12.2},37,cjs.Ease.get(-1)).to({y:0},38,cjs.Ease.get(0.99)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-154,-150,308,300);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_8 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(8));

	// Слой 6
	this.instance = new lib.Символ33();
	this.instance.parent = this;
	this.instance.setTransform(-136,275,0.694,0.694);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:108.1},7,cjs.Ease.get(1)).wait(1).to({y:275},7,cjs.Ease.get(1)).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ15();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-307,106);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:6,alpha:1},7,cjs.Ease.get(1)).wait(1).to({y:106,alpha:0},7,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ6();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:-3,y:124.8,alpha:0},7,cjs.Ease.get(1)).wait(1).to({x:0,y:0,alpha:1},7,cjs.Ease.get(1)).wait(1));

	// Слой 4
	this.txt = new lib.Символ24();
	this.txt.parent = this;
	this.txt.setTransform(-198.3,1.5);

	this.timeline.addTween(cjs.Tween.get(this.txt).to({x:-128.3},7,cjs.Ease.get(1)).wait(1).to({x:-198.3},7,cjs.Ease.get(1)).wait(1));

	// Слой 3
	this.instance_3 = new lib.Символ20();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-172.4,0.1);
	this.instance_3.alpha = 0.391;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1.01,skewY:180,x:-152.5},7,cjs.Ease.get(1)).wait(1).to({scaleX:1,skewY:0,x:-172.4},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-457,-150,611,472.9);


// stage content:
(lib.casx = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		var _this = this;
		
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		
		  function fl_MouseOverHandler_5()
		{
		    _this.main.gotoAndPlay(1);
			_this.main.txt.gotoAndPlay(131);
		}
		
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		
		  function fl_MouseOutHandler_2()
		{
		    _this.main.gotoAndPlay(9);
			_this.main.txt.gotoAndPlay(0);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.parent = this;
	this.instance.setTransform(114,33);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.main = new lib.Символ12();
	this.main.parent = this;
	this.main.setTransform(449,154);

	this.timeline.addTween(cjs.Tween.get(this.main).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(300,87);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(191,-56,818,682.9);
// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg?1489575758350", id:"bg"},
		{src:"images/btn.png?1489575758350", id:"btn"},
		{src:"images/casinoxlogo.png?1489575758350", id:"casinoxlogo"},
		{src:"images/dama1.png?1489575758350", id:"dama1"},
		{src:"images/dama2.png?1489575758350", id:"dama2"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;