(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.bod = function() {
	this.initialize(img.bod);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,148,320);


(lib.chain = function() {
	this.initialize(img.chain);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,53,200);


(lib.fon = function() {
	this.initialize(img.fon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,744,320);


(lib.haes = function() {
	this.initialize(img.haes);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,86,84);


(lib.handd = function() {
	this.initialize(img.handd);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,51,142);


(lib.handdd = function() {
	this.initialize(img.handdd);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,90);


(lib.key = function() {
	this.initialize(img.key);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,40,100);


(lib.kist2 = function() {
	this.initialize(img.kist2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,90);


(lib.kistt = function() {
	this.initialize(img.kistt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,38,29);


(lib.ple4 = function() {
	this.initialize(img.ple4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,27,101);


(lib.tit = function() {
	this.initialize(img.tit);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,47,52);


(lib.tit1 = function() {
	this.initialize(img.tit1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,52,54);// helper functions:

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


(lib.Символ64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,204,51,0.678)").s().p("AlFDEQhMgLg+goQgqgcgNgeQgJgUABgWQACgXALgSQAJgNAXgVQA5g1AjgSIArgTQAagMAOgKQAPgKAFgCQAQgEAZARQBHAwA+AyIAgAYQASANARAGQASAIAGAHIAEAIQAYgEAnADIAxACQABgHAHgHIATgPQAGgFAJgKIANgQQALgLAZgRIBMg1QAqgdARgTQAUgWAEgDQAWgPAfAIQASAFAfATQAbARANALQAVARAJAUQAHAQACAVQABAPgBAZQgCAwgEAYQgGAogSAcQgKAQgbAcQgTAUgOAIQghATgygLQgRgEgYgJIgogQIgcgLQgQgGgLgHQgMgHgVgTIhEg/QgGgFgCgFIg1gDQgkgDgVAFIgEABQgDAMgLAQQgYAlgVAXQgbAegeAPQgSAKgbAIQguANgvAAQgbAAgcgFg");
	this.shape.setTransform(52.7,20.1);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,204,51,0.678)").s().p("AADHHQgXgEg3gRIgrgNQgTgGgIgGQgSgNgHgbQgLgmAOhSQAMhPgNgnQgHgWgUgdQgXgfgKgQQgXgjgSg4QgUhBgLggQgKgdgdhFQgSgrgLgVQgSgjgTgZQgigngPgVQgGgHADgFQABgEAIgBQAggFAiAPQAfAPAWAbQAkAsAPBRIANBIQAKAoAUAZQAZAfAyAVQA7AZBPANQAxAHBdAHICnAMQAtAEAXgIQAUgGAbgWQAegXAZgcQAIARgOASQgGAIgVARQgWASgaAfIgsA1IhuBqQhBBAgXA4QgGAPgIAfQgJAfgFAOQgMAdgSAZQgOATgPAHQgLAEgPAAIgSgBg");
	this.shape.setTransform(45.9,45.6);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.haes();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ61, new cjs.Rectangle(0,0,86,84), null);


(lib.Символ60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.handd();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ60, new cjs.Rectangle(0,0,51,142), null);


(lib.Символ59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.kist2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ59, new cjs.Rectangle(0,0,50,90), null);


(lib.Символ58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tit1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ58, new cjs.Rectangle(0,0,52,54), null);


(lib.Символ57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ple4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ57, new cjs.Rectangle(0,0,27,101), null);


(lib.Символ56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tit();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ56, new cjs.Rectangle(0,0,47,52), null);


(lib.Символ55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.kistt();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ55, new cjs.Rectangle(0,0,38,29), null);


(lib.Символ53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhUBiIAAjDIAzAAIAABgIBmhgIAQAAIAADDIg0AAIAAhkIhmBkg");
	this.shape.setTransform(261.6,12.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAaBiIAAhFQg3AHgXgWQgMgMgGgTQgFgUAAgeIAAgeIAzAAIAAAeIAAARIACANQABAHADADIAGAHQADACAGABIALABIASgBIAAhQIAzAAIAADDg");
	this.shape_1.setTransform(241.3,12.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAeBiIAAhOIg8AAIAABOIgyAAIAAjDIAyAAIAABHIA8AAIAAhHIA0AAIAADDg");
	this.shape_2.setTransform(222.5,12.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AglBfQgSgGgOgNQgOgMgIgUQgJgTAAgZQAAgPAFgOQADgOAHgMQAPgYAXgLQAWgKAagBIATACQAIABAKAEQARAHAOALQAIAHAFAIQAGAIAEAKQAEAKACALQADALAAALQAAAtgcAdQgdAcgsAAQgTAAgSgHgAghgnQgIAIgEAJQgDALAAALQAAAZAPAOQAHAHAIAEQAJADAJAAQAUAAAOgOQAPgOAAgZQAAgMgDgJQgEgKgIgHQgGgHgJgEQgJgDgJAAQgUAAgOANg");
	this.shape_3.setTransform(201.2,12.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAeBjIgqhLIgYABIAABKIgzAAIAAjDIAzAAIAABNQAXAAAGgDQAGgDACgIQAEgJAFgUQACgKAGgHQAFgIAIgFQARgKAgAHIAAAiQgUgBgEAPQgKAlgOAOIA4BYIAAAHg");
	this.shape_4.setTransform(180.8,12);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhUBiIAAjDIAzAAIAABgIBmhgIAQAAIAADDIg0AAIAAhkIhmBkg");
	this.shape_5.setTransform(152.6,12.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhNBiIAAjDIAyAAIAAA6IAjAAQAPABANAEQAMAFAJAIQAHAIAGAKQAGAJABAMQABALgBALQgBAMgGAKQgGALgHAHQgJAJgMAEQgNAFgPAAgAgbA1IALAAIANAAIALAAQAIAAAFgFQAGgFACgHQAAgHgBgHQgBgHgGgEQgFgGgIAAIgjAAg");
	this.shape_6.setTransform(127,12.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgOBiIgSgEQgJgEgIgFQgIgEgHgGQgOgMgJgUQgEgJgCgLQgCgLAAgLQAAgMACgLQACgLAEgJQAJgUAOgMQAHgGAIgFQAIgEAJgEQASgGASAAQAKAAAKACQALACAJADQATAIAPARQAOASAEAZIgxAAQgFgOgLgIQgLgGgQAAQgVAAgOAOQgNAPAAAXQAAALADAKQAEAIAGAJQAHAHAJAFQAJADAKAAQAQAAAMgHQALgIAEgQIAxAAQgBANgFAMQgFALgHAJQgOASgTAIQgKADgKACQgKACgLAAg");
	this.shape_7.setTransform(106.6,12.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhUBiIAAjDIAzAAIAABgIBmhgIAQAAIAADDIg0AAIAAhkIhmBkg");
	this.shape_8.setTransform(85.3,12.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAfBiIAAhOIg8AAIAABOIg0AAIAAjDIA0AAIAABHIA8AAIAAhHIAyAAIAADDg");
	this.shape_9.setTransform(64.5,12.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhNBiIAAjDIBVAAQAhAAATAWQATAWgBAeQAAAcgSAVQgTAVghAAIgiAAIAAAzgAgbADIAjAAQAJAAAGgIQAGgIAAgMQAAgLgFgIQgGgIgKAAIgjAAg");
	this.shape_10.setTransform(45.8,12.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag9BiIAAjDIB5AAIAAAtIhGAAIAAAcIBAAAIAAAsIhAAAIAAAfIBIAAIAAAvg");
	this.shape_11.setTransform(28.2,12.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhNBiIAAjDIBVAAQAbAAASARQARAQAAAbQAAAJgFAKQgEAJgHAGIAKAGIAIAKQAGALAAAOQAAAagQARQgQARgeAAgAgaA1IAnAAQANAAABgPQABgHgEgFQgFgFgHAAIgmAAgAgagUIAfAAQAHAAAEgEQADgFAAgGQABgHgEgFQgEgFgHAAIgfAAg");
	this.shape_12.setTransform(11,12.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AhUBjIAAjEIAzAAIAABgIBmhgIAQAAIAADDIg0AAIAAhkIhmBlg");
	this.shape_13.setTransform(263.6,13.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAaBiIAAhFQg2AHgYgWQgMgMgGgTQgFgUAAgeIAAgeIAzAAIAAAeIAAARIACANQABAHACADIAHAHQADACAGABIALABIASgBIAAhQIAzAAIAADDg");
	this.shape_14.setTransform(243.3,13.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAeBiIAAhOIg7AAIAABOIgzAAIAAjDIAzAAIAABHIA7AAIAAhHIAzAAIAADDg");
	this.shape_15.setTransform(224.5,13.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AglBfQgRgGgPgNQgOgMgIgTQgJgVABgYQAAgPAEgOQADgOAHgMQAPgYAXgKQAXgMAZAAIATACQAJABAJAEQARAGAOAMQAIAHAFAIQAGAIAEAKQAEAJADAMQACALAAALQAAAtgcAdQgcAcgtAAQgTAAgSgHgAghgnQgIAHgDAKQgEALAAALQAAAZAPAOQAGAHAKADQAIAEAJAAQAUAAAPgOQAPgOgBgZQAAgMgDgJQgEgKgHgHQgIgHgIgEQgIgDgKAAQgUAAgOANg");
	this.shape_16.setTransform(203.2,13.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAeBjIgphLIgZABIAABKIgzAAIAAjDIAzAAIAABNQAXAAAFgDQAHgDACgIQAEgJAEgUQADgKAGgHQAFgIAJgFQAQgKAgAHIAAAiQgUgBgEAPQgJAlgPAOIA4BYIAAAHg");
	this.shape_17.setTransform(182.8,13);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AhUBjIAAjEIAzAAIAABgIBmhgIAQAAIAADDIg0AAIAAhkIhmBlg");
	this.shape_18.setTransform(154.6,13.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AhNBiIAAjDIAyAAIAAA6IAjAAQAPABANAEQAMAFAIAIQAIAIAHAKQAFAJABAMQACALgCALQgBAMgFAKQgHALgIAIQgIAHgMAFQgNAFgPAAgAgbA1IALAAIANAAIALAAQAIAAAFgFQAGgFABgHQACgHgCgHQgCgGgFgFQgGgGgHAAIgjAAg");
	this.shape_19.setTransform(129,13.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgOBjIgSgFQgJgEgIgFQgIgEgHgGQgOgMgJgUQgEgJgCgLQgCgLAAgLQAAgMACgLQACgLAEgJQAJgUAOgMQAHgGAIgFQAIgFAJgDQASgGASAAQAKAAAKACQALACAJADQATAIAPARQAOASAEAZIgxAAQgFgOgLgIQgLgGgQAAQgVAAgOAOQgNAPAAAXQAAALADAKQAEAJAGAIQAHAHAJAEQAJAEAKAAQAQAAAMgHQALgJAEgPIAxAAQgBAOgFALQgFALgHAJQgOASgTAIQgKADgKACQgKACgLAAg");
	this.shape_20.setTransform(108.6,13.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AhUBjIAAjEIAzAAIAABgIBmhgIAQAAIAADDIg0AAIAAhkIhmBlg");
	this.shape_21.setTransform(87.3,13.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAfBiIAAhOIg8AAIAABOIg0AAIAAjDIA0AAIAABHIA8AAIAAhHIAyAAIAADDg");
	this.shape_22.setTransform(66.5,13.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AhNBiIAAjDIBVAAQAhAAATAWQATAWgBAeQAAAcgSAVQgTAVghAAIgiAAIAAAzgAgbADIAjAAQAJAAAGgIQAGgIAAgMQAAgLgFgIQgGgIgKAAIgjAAg");
	this.shape_23.setTransform(47.8,13.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("Ag9BiIAAjDIB5AAIAAAtIhGAAIAAAcIBAAAIAAAsIhAAAIAAAfIBIAAIAAAvg");
	this.shape_24.setTransform(30.2,13.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AhNBiIAAjDIBVAAQAbAAASARQARAQAAAbQAAAJgEAKQgFAJgHAGIAKAGIAIAKQAGALAAAOQAAAagQARQgQARgeAAgAgaA1IAnAAQANAAABgPQABgHgEgFQgEgFgIAAIgmAAgAgagUIAfAAQAGAAAEgEQAEgFABgGQAAgHgEgFQgEgFgHAAIgfAAg");
	this.shape_25.setTransform(13,13.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ53, new cjs.Rectangle(0,0,275.2,31), null);


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA+DpIAAijQiDAPg5g1QgcgagOgvQgOgxABhGIAAhIIB6AAIAABIIABAnIAEAgQADAPAFAIIAOAQQAJAHAOACIAdACIAqgCIAAi/IB4AAIAAHRg");
	this.shape.setTransform(453.2,23.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAHDlQgmgNgggaQhDg0gOhcIg9AAIAAC7Ih7AAIAAnSIB7AAIAACpIA/AAQAOg6AlgpQARgVAWgPQAVgPAXgJQAWgJAZgFQAagFAaABQAtAAArAQQAqAQAhAdQAiAdAUAvQAUAvAAA5QAAAdgEAaQgGAbgLAYQgUAvgiAeQgRAOgTAMQgUALgVAIQgqAPgtAAQgsgBgmgNgAAHhcQgiAhABA7QgBA8AjAiQAQARAWAIQAUAIAYAAQAvAAAjghQARgRAJgYQAJgXAAgeQgBg7gighQgkghgvAAQgxAAghAhg");
	this.shape_1.setTransform(397.7,23.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AibDrQgagBgigFIADhYQAmAEAMgMQANgLAEgnIAhk9IFHAAIAAHRIh5AAIAAllIhkAAIgSDVQgDAigHAZQgFAagKAQQgTAhgpAJQgSAFgXAAIgFAAg");
	this.shape_2.setTransform(333.3,24);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABIDsIhli0Ig6ACIAACyIh6AAIAAnRIB6AAIAAC3QA2AAAOgIQAPgHAGgUQAJgTALgxQAGgYANgSQANgRAUgNQApgYBLAQIAABSQgvgDgKAlQgXBXghAkICFDQIAAASg");
	this.shape_3.setTransform(288.6,23.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AjIEwIAAnTIB5AAIAADjIDyjlIAnAAIAAHUIh7AAIAAjxIjzDygAgajCQgTgIgPgNQgcgbgCg2IBCgHQABASALAIQAKAJAUAAQAVAAAMgJQAMgIACgSIBDAHQgDA2gcAbQgcAbg1AAQgZAAgVgGg");
	this.shape_4.setTransform(221.6,16.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABzDsIgbg7IiuAAIgaA7IiAAAIAAgRIDWnFIA3AAIDUHFIAAARgAAxBLIgwhvIgwBvIBgAAg");
	this.shape_5.setTransform(173,23.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag6DpIAAlnIhyAAIAAhqIFZAAIAABqIhxAAIAAFng");
	this.shape_6.setTransform(131.2,23.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABzDsIgbg7IiuAAIgaA7IiAAAIAAgRIDWnFIA3AAIDUHFIAAARgAAxBLIgwhvIgwBvIBgAAg");
	this.shape_7.setTransform(89.2,23.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ai5DpIAAnRIDNAAQBBAAApAnQAoAnAABCQAAAVgKAXQgKAWgSAOQAOAHALAJQALAKAHANQAPAbAAAhQAAA+gnAoQgnAohGAAgAg/B/IBdAAQAfAAAEgkQACgRgLgMQgKgNgRAAIhcAAgAg/gwIBKAAQARAAAJgLQAJgLABgPQAAgQgJgNQgKgMgRAAIhKAAg");
	this.shape_8.setTransform(44.8,23.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABYDpIhWiSIgDAAIhVCSIiJAAIAAgRICXjlIiHjJIAAgSICEAAIBLB/IACAAIBLh/ICDAAIAAASIiGDJICWDlIAAARg");
	this.shape_9.setTransform(-1.9,23.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 1
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AA+DpIAAiiQiDAPg4g1QgcgbgPgwQgOgwAAhHIAAhHIB7AAIAABHIABApIAEAfQADAPAFAJIAOAPQAJAHAOACIAeADIApgDIAAi/IB4AAIAAHRg");
	this.shape_10.setTransform(456.1,26.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAHDlQglgNgigaQhCg0gOhcIg9AAIAAC7Ih7AAIAAnSIB7AAIAACpIBAAAQAMg6AlgpQATgVAVgPQAUgPAYgJQAXgJAZgFQAZgFAbABQAsAAAqAQQAqAQAjAdQAhAdAUAvQAVAvAAA5QAAAdgGAaQgFAbgKAYQgVAvgiAeQgSAOgSAMQgTALgWAIQgpAPgvAAQgqgBgngNgAAGhcQggAhgBA7QABA8AhAiQASARAVAIQAUAIAYAAQAvAAAjghQARgRAJgYQAJgXgBgeQAAg7gighQgjghgxAAQgvAAgjAhg");
	this.shape_11.setTransform(400.5,26.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AibDrQgbgBghgFIAChYQAnAEAMgMQAMgLAFgnIAgk9IFJAAIAAHRIh6AAIAAllIhkAAIgSDVQgDAigHAZQgFAagKAQQgTAhgoAJQgTAFgXAAIgFAAg");
	this.shape_12.setTransform(336.1,26.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("ABIDsIhli0Ig6ACIAACyIh6AAIAAnRIB6AAIAAC3QA2AAAOgIQAOgHAHgUQAIgTALgxQAHgYANgSQANgRAUgNQAogYBNAQIAABSQgwgDgJAlQgYBXgiAkICGDQIAAASg");
	this.shape_13.setTransform(291.5,26.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AjJEwIAAnTIB6AAIAADjIDyjlIAmAAIAAHUIh5AAIAAjxIj1DygAgZjDQgVgGgOgOQgdgcgBg1IBCgHQABASALAIQALAKATgBQAWABALgKQAMgIACgSIBDAHQgCA1gdAcQgcAbg1AAQgZABgUgIg");
	this.shape_14.setTransform(224.4,19.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("ABzDsIgbg7IiuAAIgaA7IiAAAIAAgRIDWnGIA3AAIDUHGIAAARgAAxBMIgwhwIgwBwIBgAAg");
	this.shape_15.setTransform(175.9,26.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("Ag6DpIAAlnIhyAAIAAhqIFZAAIAABqIhxAAIAAFng");
	this.shape_16.setTransform(134,26.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("ABzDsIgbg7IiuAAIgaA7IiAAAIAAgRIDWnGIA3AAIDUHGIAAARgAAxBMIgwhwIgwBwIBgAAg");
	this.shape_17.setTransform(92.1,26.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("Ai5DpIAAnRIDNAAQBBAAApAoQApAnAABAQAAAXgLAVQgLAXgRAOQAOAHALAJQAKAKAIAOQAPAaAAAhQAAA+gnAoQgnAohGAAgAhAB/IBeAAQAfAAAFgkQABgRgKgMQgLgMgRAAIhdAAgAhAgwIBLAAQAQAAAKgKQAJgMABgOQABgRgKgMQgKgNgRAAIhLAAg");
	this.shape_18.setTransform(47.6,26.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("ABYDpIhWiSIgDAAIhVCSIiJAAIAAgRICXjlIiHjJIAAgSICEAAIBLB/IACAAIBLh/ICDAAIAAASIiGDJICWDlIAAARg");
	this.shape_19.setTransform(1,26.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ49, new cjs.Rectangle(-27.3,-5.1,509.1,74.2), null);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33FF33").s().p("AicZoIAAgBICbxSICbRSIAAABgAZ1CDIxRiaIRRibIABAAIAAE1gA51CDIAAk1IABAAIRRCbIxRCagAic5mIAAgBIE2AAIAAABIibRSg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ47, new cjs.Rectangle(-165.4,-163.9,330.9,327.9), null);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.chain();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ43, new cjs.Rectangle(0,0,53,200), null);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF60A").s().p("AgDH3QgLgFgEgbQgEgbgLgFQgNgCgFgEIgEgEQgCgCgBgDIAAgCIgCgBIgCgCIAAgCIgBgCIABgCIABgBIABgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgBIgCgBIgCgFQgBgEgGgGQgJgIgGgCIgJgDQgDgDAAgCIgBgCQgCgDAAgHQABgJAFgDQAFgBACgBIADgGQAEgJgCgGIgDgIIgGgTQgCgFgIgIQgPgPgLgEIgLgDIgKgGIgFgEIgDAAQgKgDgGgJIgFgPQgGgNgCgHIgDgNIgFgQQgIgaAIgbQAHgcAVgRQAHgPALgNQAHgIAIgFIAOgHIAHgHQAFgEADgCIAOgEIAGgDQgDgbABgPQADgeASgRIAWgRIANgKQAHgFAGgCQAIgCASACQAXAEAGAFQAHAFAKAQQAMATAEANQAHASgEAPIAwAMQAUAFAJAGQATALAOAeQAOAiABAiQABAlgPAfQgHAOgLALQgFAEgRAJQgcARgVAbQgKAMgDAMQgEAPAHAKIAHAIIAHAIQAFAJgHAMQgGAKgLAIQgLAHgDAFQgDAGACANIAGAoQAEAWgHALIgFAHQgDAEgBAEQgBAGAGAKQAGALgBAFQgCAHgKAGQgKAIgDAFQgDAHAHAPQAHAQgBAHQgBAFgFAIQgFAIgBAEQgBAEAAAIIACAMIgBAVQAAANACAHQADAJALAOQALASgFAVIgKAaQgGAQACAKQAAAEAEAKQAEAIAAAFQABAKgHALIgNAUIgIAMQgEAIgFAEQgJAJgJAAQgEAAgEgCgAgbnBQgIAFgGAMQgJAXAHAVQADAKAJAHQALAJAMgEQAHgCADgFQAEgDADgIQAJgSgDgQIgDgIQgFgOgJgHQgIgEgHAAQgFAAgFACg");
	this.shape.setTransform(19.9,50.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ41, new cjs.Rectangle(0,0,39.8,101.1), null);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhAiAjzMAAAhHlMCBFAAAMAAABHlg");
	this.shape.setTransform(413.1,229.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ29, new cjs.Rectangle(0,0,826.2,458.1), null);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgjCuQgOgOAAgVQAAgWAOgNQAPgNAVAAQAWAAAOANQAPANAAAWQAAAVgPAOQgOAMgWAAQgVAAgPgMgAgrBNIgIkHIBnAAIgGEHg");
	this.shape.setTransform(217.1,23.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhyB9IAAj5IBVAAIAABFIAhAAQAYAAAUAFQAVAGAPALQAfAWAAAuQAAAWgIARQgIARgPAMQghAWgwAAgAgdA8IAfAAQAbAAABgZQgBgNgGgGQgIgHgNAAIgfAAg");
	this.shape_1.setTransform(196.2,28.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AABCEQgaAAgYgJQgXgJgUgRQgmgjAAg+QAAgfALgaQAMgZATgQQAUgQAXgJQAYgIAYAAQAYAAAVAHQAVAHASAOQAlAbAGAzIhTAAQgFgOgKgIQgKgHgPAAQgTAAgPAPQgHAHgEAKQgEAKAAAMQAAANADAKQAEAKAIAIQANAOATABQAOABALgJQAMgIAFgQIBUAAQgHA0glAcQgTAOgWAHQgUAHgWAAIgDAAg");
	this.shape_2.setTransform(167.2,28.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ah8B+IAAj6IBWAAIAABsICJhtIAaAAIAAD7IhWAAIAAhwIiMBwg");
	this.shape_3.setTransform(136.8,28.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAnB9IAAhcIhOAAIAABcIhVAAIAAj5IBVAAIAABSIBOAAIAAhSIBWAAIAAD5g");
	this.shape_4.setTransform(105.6,28.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ah1DBIAAksIAAgOIgCgJQgCgFgEgBIgMgCIAAgwIAbgEIAeAAQAPACAKAJQAJAKAAAQIAAACQALgUATgKQATgMAXAAQAaABAVAJQAVALAPASQAOASAIAYQAHAXAAAcQAAAtgYAjQgMARgPALQgQAMgTAGQglALgrgQIAACFgAAHhzQgQAAgLAOQgKANAAASIAAA3QAfAPAYgNQAMgGAGgMQAGgNAAgRQAAgXgLgPQgGgJgHgDQgHgEgJAAIgCAAg");
	this.shape_5.setTransform(74.5,34.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AglB7QgbgJgUgRQgogkAAg9QAAgrAUgfQAUgfAegNQAdgNAhAAQAjAAAZALQAZALAOAVQAPAVACAbQADAcgIAhIibAAQADAUAPAKQAQAKAcAAQAWAAAYgFQAZgFANgGIAKA/QgYAMgZAGQgaAGgZAAQgfAAgagJgAgTg3QgNAJgDAPIBQAAQABgQgLgIQgMgJgPAAQgPAAgMAJg");
	this.shape_6.setTransform(44.3,28.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhzB+IAAj7IBoAAIAeAAIAfAFQARAEALAGQALAHAHAOQAIANAAAUQAAAPgJAOQgIAOgQAEQAUAHANAQQAMARAAAVQAAAYgJAQQgJAPgSAIQgSAHgQACIgnACgAgdA+IAcAAIANgBQAGAAAGgFQAGgFAAgJQAAgVgfAAIgcAAgAgdgeIAXAAQAMAAAFgEQAHgEAAgIQAAgJgHgFQgFgEgMAAIgXAAg");
	this.shape_7.setTransform(16.7,28.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(0,0,227.8,56), null);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgcBHIAOgwQgQgFgKgLQgKgLAAgSQAAgUAOgOQAPgOAVAAQAWAAAOAOQAPAOAAAUQAAAKgEAIIgYBLg");
	this.shape.setTransform(123.2,39.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAkB9IAAhHIgWAAIgtBHIheAAIAAgJIA1hQQgTgLgLgUQgLgTAAgVQAAgSAGgPQAGgQAMgNQAZgbArAAICTAAIAAD5gAgQgyQgIAHAAAKQAAAJAIAHQAHAGANAAIAgAAIAAguIggAAQgNAAgHAHg");
	this.shape_1.setTransform(99.9,28.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhXCmQgigdgKg4QgEgfAAgdQAAgcAIgdQAIgbANgYQAOgXAXgSQAXgTAfgKIAJgDIAIgEIAIgGIAGgGQADgDAAgEIgCgKIBPAAQAQAmgbAdQgaAegvAOQgXAJgMAKQgNAKgGAXQALgMAQgHQAPgHAPgBQA7gEAgAnQAQATAHAWQAIAXgBAbQgDAzgiAlQgSASgYAKQgYAJgeAAQg5AAghgcgAgiAfQgOANAAAXQABAMADAJQAEAKAIAHQAPANATgBQAUAAAOgMQAPgNgBgZQAAgYgPgNQgPgNgUAAQgTAAgPAOg");
	this.shape_2.setTransform(70.6,22.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AglB7QgbgJgUgRQgogkAAg9QAAgrAUgfQAUgfAegNQAdgNAhAAQAjAAAZALQAZALAOAVQAPAVACAbQADAcgIAhIibAAQADAUAPAKQAQAKAcAAQAWAAAYgFQAZgFANgGIAKA/QgYAMgZAGQgaAGgZAAQgfAAgagJgAgTg3QgNAJgDAPIBQAAQABgQgLgIQgMgJgPAAQgPAAgMAJg");
	this.shape_3.setTransform(40.5,28.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgqB9IAAisIhDAAIAAhNIDbAAIAABNIhDAAIAACsg");
	this.shape_4.setTransform(14.2,28.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ21, new cjs.Rectangle(0,0,133,56), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhDC9QgYgCgggPIAIg4QAOAGALABQALABAJgDQASgIAKgeIAHgVIhrjwIAAgKIBfAAIA1CTIACAAIAviTIBYAAIAAAKIhoEMQgOAigPAWQgNAVgUAMQgRAKgVAAIgGAAg");
	this.shape.setTransform(159.2,34.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ai6B9IAAj5IBVAAIAACsIA7AAIAAisIBVAAIAACsIA7AAIAAisIBVAAIAAD5g");
	this.shape_1.setTransform(123.1,28.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag/B2QgegOgUgfQgKgQgFgSQgEgSAAgVQAAgeAJgZQAKgYAUgRQATgSAYgJQAXgIAbAAQAaAAAYAIQAXAJAUASQAoAjAAA9QAAA+gnAjQgUARgXAJQgYAJgaAAIgCAAQghAAgdgOgAgfgoQgHAIgDAKQgDAKAAAMQAAANADAKQADAKAHAHQAOAPASgBQASAAANgOQANgPAAgZQAAgZgNgOQgNgOgSgBIgBAAQgSAAgNAOg");
	this.shape_2.setTransform(86.4,28.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ah1DBIAAksIAAgOIgCgJQgCgFgEgBIgMgCIAAgwIAbgEIAeAAQAPACAKAJQAJAKAAAQIAAACQALgUATgKQATgMAXAAQAaABAVAJQAVALAPASQAOASAIAYQAHAXAAAcQAAAtgYAjQgMARgPALQgQAMgTAGQglALgrgQIAACFgAAHhzQgQAAgLAOQgKANAAASIAAA3QAfAPAYgNQAMgGAGgMQAGgNAAgRQAAgXgLgPQgGgJgHgDQgHgEgJAAIgCAAg");
	this.shape_3.setTransform(55.8,34.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AA4C2IAAkWIhwAAIAAEWIheAAIAAlrIEtAAIAAFrg");
	this.shape_4.setTransform(21.1,22.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(0,0,176.4,56), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgSBdQgIgIAAgLQAAgMAIgGQAIgIAKABQAMgBAIAIQAIAGAAAMQAAALgIAIQgIAGgMAAQgKAAgIgGgAgWApIgFiLIA2AAIgDCLg");
	this.shape.setTransform(106,12.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAeBiIgphLIgZABIAABKIgyAAIAAjBIAyAAIAABMQAXAAAGgDQAGgDACgIIAIgcQADgKAFgIQAFgHAJgFQAQgKAgAHIAAAiQgUgCgEAQQgJAkgOAOIA3BWIAAAIg");
	this.shape_1.setTransform(92.3,11.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgkBeQgSgGgOgNQgOgMgIgTQgIgUAAgYQAAgPAEgOQADgOAHgLQAPgYAWgKQAXgLAYAAQAKAAAJABQAJACAJADQARAHAPAMQAGAGAGAIQAFAIAFAJQAEAKACALQACALAAALQAAAsgcAcQgbAcgsAAQgTAAgRgGgAghgmQgHAHgEAKQgDAKgBALQAAAZAPAOQAHAHAIADQAJAEAJAAQATAAAPgOQAPgOAAgZQAAgLgEgKQgDgJgIgHQgHgHgJgEQgHgDgLAAQgSAAgPANg");
	this.shape_2.setTransform(70.6,12);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAsBhIAAhaIgpAsIgFAAIgpgsIAABaIgyAAIAAjBIARAAIBMBUIBMhUIASAAIAADBg");
	this.shape_3.setTransform(48.2,12);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAwBiIgMgYIhHAAIgLAYIg1AAIAAgHIBZi7IAWAAIBYC7IAAAHgAAVAfIgVguIgTAuIAoAAg");
	this.shape_4.setTransform(26.9,11.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ag1BTQgTgRAAggIAsAAQAAALAIAHQAHAHALAAQALAAAHgHQAGgGAAgJQAAgJgGgHQgHgGgLAAIgPAAIAAgoIAPAAQAHAAAFgFQAFgFAAgHQAAgIgFgEQgFgFgHAAQgHAAgGADQgFAEAAAFIgtAAQgBgZASgOQAJgGAMgEQALgDAOAAQAdAAARARQAJAIAEAKQAEAKAAALQAAAKgEAKQgEAKgJAGQAdAOAAAhQAAAagUARQgTARgkAAQggAAgTgRg");
	this.shape_5.setTransform(9,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(0,0,111.6,29.6), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhLBzIAAiwIAuAAIAABWIBbhXIAOAAIAACwIguAAIAAhaIhcBbgAgJhJQgIgDgFgFQgLgKAAgUIAYgDQABAHAEAEQAEACAHAAQAIAAAEgCQAFgEABgHIAZADQgBAUgLAKQgLALgUAAQgJAAgHgDg");
	this.shape.setTransform(99.2,8.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AghBWQgQgGgNgLQgNgLgHgSQgIgSABgWQAAgOADgMQADgNAHgKQANgWAVgKQAUgKAXAAIARACIAPAEQARAGANALQAGAGAFAHQAFAHAEAJQAEAJABAKQADAKAAAKQAAAogaAaQgZAagoAAQgRAAgQgGgAgegiQgHAGgDAJQgEAJABAKQAAAXANAMQAHAHAHADQAIADAIAAQASAAANgNQAOgMAAgXQAAgKgEgJQgDgJgHgGQgGgGgIgEQgIgDgIAAQgSAAgNANg");
	this.shape_1.setTransform(79.8,11);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhGBYIAAivIBNAAQAeAAARATQARAUAAAbQAAAZgRATQgRATgeAAIgfAAIAAAugAgYACIAfAAQAJAAAFgGQAFgIAAgKQAAgKgFgIQgFgHgJAAIgfAAg");
	this.shape_2.setTransform(62.1,11);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAbBZIglhEIgWABIAABDIguAAIAAivIAuAAIAABFQAUAAAFgDQAGgDACgHIAHgaQADgJAFgGQAEgHAIgFQAPgJAdAGIAAAfQgSgBgDAOQgJAhgNANIAyBOIAAAHg");
	this.shape_3.setTransform(44.8,10.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgWBYIAAiHIgrAAIAAgoICDAAIAAAoIgsAAIAACHg");
	this.shape_4.setTransform(28,11);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AghBWQgQgGgNgLQgMgLgIgSQgHgSgBgWQABgOADgMQADgNAHgKQAOgWATgKQAVgKAWAAIARACIARAEQAPAGANALQAHAGAFAHQAFAHAEAJQADAJACAKQACAKAAAKQABAogaAaQgZAagoAAQgRAAgQgGgAgegiQgHAGgDAJQgDAJgBAKQAAAXAOAMQAHAHAHADQAIADAIAAQASAAANgNQANgMAAgXQAAgKgDgJQgDgJgHgGQgGgGgIgEQgHgDgKAAQgRAAgNANg");
	this.shape_5.setTransform(11,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(0,0,109.8,27.1), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fon();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(0,0,744,320), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ARiAAQAAC5k0CCQkzCCmzAAQmyAAk0iCQhSgjlxBSQCPjjAAiHQAAi4E0iCQE0iCGyAAQGzAAEzCCQE0CCAAC4g");
	this.shape.setTransform(112.2,44.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AqeE7QhSgjlxBSQCPjjAAiHQAAi3E0iDQE0iCGyAAQGzAAEzCCQE0CDAAC3QAAC4k0CDQkzCCmzAAQmyAAk0iCg");
	this.shape_1.setTransform(112.2,44.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(-1,-1,226.5,91), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF33").s().p("Eg5QAg0MAAAhBnMByhAAAMAAABBng");
	this.shape.setTransform(366.5,210);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(0,0,733,420), null);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#32FF32").s().p("AgCCCIh/kDIEDAAIh/EDg");
	this.shape.setTransform(22,10.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ28, new cjs.Rectangle(9,-2.3,26,26), null);


(lib.handdd_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.handdd();
	this.instance.parent = this;
	this.instance.setTransform(-25,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.handdd_1, new cjs.Rectangle(-25,-45,50,90), null);


(lib.sprite136 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.sprite136, null, null);


(lib.shape161 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AF7KaQgcgMgeAAIg4ADIhxAKIgOACIiygMIgygIQhHAAgcAJIgtAJIgegFIgEABQgRAIgTAAIgcgGIgggKIgPgCIgNADIgkAJIgYgDQgFAFgHAAQgLAAgGgQIgKgFIAAgFIAHgBIgDgSQAAg1AThKQgEguAFhQIAHgBIABAFIADgBIAXAeQAYAaAVAAQAoAAAPgnIAKg0IAIgtQAHgcAKgSQAig8AMggQAUgwAAgrQAAgSgKgeQgKgcgMgTIgKgYQgGgSgDgFIgUgVQgMgOgCgKIACgEIAHgCQAHAAALAJQAMAJAKAAQAJAAgBgSIgCgSQADgQAJAHQAHAGAHANIAXApQACADAeAPIAMAEIAMAEIAtgCIAOgCIAUAsQAWAqAQAAQAeAAAKgfIAHgaQAEgNAFgEQAKAIADAYQAEAYANAKIARAPQAKAIAOAHIAUAEQALACAAAKQAAAVgHAzQgIAyAAAUQAAA6AgA4QArBJAQA9QAThBADgzQAHhGADgOQALguAlgoIAggoQAXgeAQgNQAQgMALgeQAMgdAKgJQANAJAKAaQANAjAGAKIApAnQAcAZAAATQAAANgUASQgaAZgFAIQgLARgEARQgBAKAAAYQAAAiAJAZIAVAqQAdA2AABNQAAAUgNA9IgMA9IAAACIgCAJIgBADIgHAEIgMACQgrAAgcgNgAn3iMQgEgoAOglIAaAaIARAXIgCAEIgFABQgTAIgMAQgABamBIgFgKIAIgKIApgrIAageQAFgGAHgEQAFgCgCAGIgLA3QgDAOACAOQAFAagRAHgAjsmXIAAgwQAMgNAMARIARAaIgPANQgNAJgFAAgAG1paIAJhHIAGgFIAdA/IgLAFIgcAJg");
	this.shape.setTransform(-14,68.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.4,0.3,101,135.8);


(lib.shape160 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AGHImIgPAAIg9gGIhQgHIhmAIIhBAIIhhgFIhBgHIhbgGIglAEIgiAEIg/gEIhBgEIhNAGIgWAEIgcAEIgBAAIgCgGQABgGAHgKIAHgGIgCgEQAAgJAggcQAhgaAAghQgBglgcgpQghgugKgxIABAAIgHgKIAEgDIAKAPQAEACABAGQALAGAkAAQAjABAwguQApgmAFgSIAPhAQAEgZAAgcIgEg2IgGhQQgCg/hGhEQAagRALgdQAKgcgHgdQANACAIAYIALApQAIAyATAdIAdArQATAXAeAMIA0AcQAzAbAJAAQAlAAAnhhIAHgZIAIgWIAEgaQABgMAJgKQAKAJADAXQAEAaAGAJIALASQAGAKAPAIIAgAJQAXAIAAAKIgGAYIgJAYIgFAVIgEAWQgBAggFAVQgGASAAATQAAAUAKAgIASAyQAEgJAIgIQAOgNAlgUIBAgmQAlgbAWgmIAthaIAFgyQADgbAXAAQAAAaAWApIAmBFQALgBADgOQACgKgBgMIADgEQATANAGAYQAGAdAGAIQAJANAIAXQAGAVABAQQAAAhg5BWQg4BYgBAwQAAAkAgA9QAYAyAVAXIAIAAIABACIABAGIAGAAIABACIABAIQAAATgnAAQgsAAgWgMgAAPmvIgFgHIgHgmQgFgZAAgbIAFgDQARANATACQAQAAAQgJIAigVIAcgQIgCARIgHAVQgJATgRAOIhKBAg");
	this.shape.setTransform(-10.3,80.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.8,24.2,102.9,112.5);


(lib.shape159 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AAaGrIhPgLIiJAKIhLAJQgiAAgZgKQgZgLgOAAIhCALIg5ALIgVgCQgCAAAAgKIAAgEQgGgJAAgKQAAggAbhBQAahBAAgkQAAgRgIgrIApACQAyAAAXgSQATgPAVgwQAEgKAGgkQAFgaALgKIACACIAAAHIAAAMIABAAIABgTQAAgigEgYQgFgcgNgkIAAgUQAOgGALAVIASAmQAJAMAJAUQAIAUAEARQAPBEAbAbQAYAZAuAAQBAAAAyhZQAUgnAWhHIAEgQIAGAAIADAbIABALIAAADIACAbQABATAYAtQAUAlAhArQAmAwANAAQAWAAAdggIAZgjIAjhGQAMgVAjgzQAeguAAgaQAAgGAEgCIAEgBQATAcAQBUQAYBFBMAEIABACIAAAHQAAAHgZAqQgaAyAAAuQAAAxAZBOQATBAAEAUQAIADABANQAAAJgSAKIgBAAIgEAFIgCgBQgZAJgpAAIiIgJIhqAFIhSAFgAAmgsIgCgFIgBAFIADAAgAlVkIQgRgUgGgXIgBgQQAHgugCgtIAIgXQARAdAGAfQAGAfADAgIADA5QgEACgEAAQgJAAgHgJg");
	this.shape.setTransform(-9.2,91.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.8,48.2,103.3,87.5);


(lib.shape158 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AGtGfIh3gJIhHADIhSgHIhfAGIhJgDQhugHhvAEIhCgCIh2gIIhagGIgKgfQgDgMABgNQABgeAPgaQATggAbgaQAMgNACgSIAOhcIgKgMIAPAAIAFgEIADAJIAWgCQAIgBAGgGQAVgSAJgcQADgLgBgKIgEhJIAJgBIAHAKIAVAdIAWAZQAHAFAJADIAwADIAwAoIAfATQAdAOAggCQAfgFAWgXQAjglAYgqIALAqIAGAiQAFAlAaAWQAOAMAUAFQA+AMA3ggQAvgcAdgsQAPgXAIgYIAchSQAOgnAbghIAMBaIAeBpIAhgjIAHAJIARAdQAUAqAGAtQAKBLgRBLQgQBIgJBJIgVADgAAHh6IACgZIAEgnQAFgngMgmQgFgPgJgOIgIgNIgHgcQgGgbAQgTIAQgRIgDAQQAIAXAAAYQAAAMAGAMIAxBOQALARgBASQgBAXgLAUIgLASIgMAKQgJAHgKAAQgGAAgGgEgAlWjKQgJgdgNgMQgIgIgIggQgIgdAAgOIACgWIAOgaQAEgGACgUQABgPAJgCQAKALAQAzQAQA0AAAVIgCAvIgCBFQgDAEgEABQgHgKgKgfgAl0lIQAIgBgIgCg");
	this.shape.setTransform(-8.3,94.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.2,52.5,103.9,83.5);


(lib.shape157 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AHEG9IiIgCIhMgOIgcgHIiEAHQhPAMhQgKIhagKIhZAAIhMAGQhQAJhPgVIgCAJIgIAEIgOgPIAYlhIAJgBIBgBwIAEgNQADgNgBgNIAChbQABghAFghIAGgUQAHBbA9BGQAOARAUAIIAsALIArAGQAaAAAagKQAIgDAHgFQAagSAQgbQAGgMAEgMQAMgpAIgqIAIgCQAJAEABAKQAHAtAYAlQANASASANIAWAMIAfAMIB7ADQAcgGAagRIAUgRQAngkAJg1QAFgagGgaQgPhFAbhDIAFgIIARAhQAQAjAAAoIgBBSQgBA2AVAwIBKhEIAPBAQAMAuAHAuQAJA6gOA5IgFAcQgEAegBAeQgBAWgJAUQgOAGgNAAIgKgBgAhKkpIgBgcQAFgdAMgaIAehBIAWBTQAGAYgCAYIgIAwIgFAvIABAbQADATgBAUIgIAAQgxg/gFhRgAlqikQgVgmgQgnIgMgrQgLg9Agg0IAiBAQAFAKADALQAGASgBATQgBA4gHA4g");
	this.shape.setTransform(-3.5,90.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.3,46.3,103.6,89.3);


(lib.shape156 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AmSJrQgJgIgMgBIhKgCIgIAKQgTgQAAgaQADhYAYhVIAIglQAEgfgGghQArAAAhgcQAegXAJgkIAHgZIAIgRIACAXIAMAqQAHASAMAPIAhAmIATAOQAhARAlAHIA4AGQAuAAAogXQA6giANhDIACgTQAAgjgDgkIAPgBQAJAGAAAMIADBEQAEA0AoAiIAiAcQAvAiA5gGQBAgGAwgrQAcgaALglQANgugOgtIgPg3QgHghgDghQgCgdAEgdQABgHAEgGIAOADIAOAQQAUAYACAgIAEBPIgBBBQgEA3AaAwQAEguAgggIAMBZQABAMAFALQAMAgAQAfQATAnACAsIgDAuQgCARgJATIgYAuIABAQIgtADIgoAIIg0ACIhUgGQhTgDhQAEIiegEIgVgFIgcgIIibAFQgugBgrAPIgPAEIgHAAQgSAAgPgMgAgvhAQgSglAAg3QAAgfADgOIASg2QAHgSgBgeIAAgxQALAFASAaQAUAfALAJQARAUAGAVQAFAQAAAWQAAAagIAiIgQA9QgOA5ADA/QgDADgEABgAlLAeIgFgRQgEgpgMgoIgQgwQgRgxABg0IAMAAIAKAUQAIAPASANQAKAIAHAJQAPAUAHAYIADASQADAbgLAaQgPAhgDAkgADooHQgGgyASgvIAEgOIAHADQAVAegEAiIgFAQQgMAXgGAYIgIACg");
	this.shape.setTransform(-5.7,72.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.2,9.8,105,126.3);


(lib.shape155 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("Al7IYIgzgTIgzgXQgJgEgFgJQgSgigIgmIgFglQgCgiACgiQADg2AOgyQARAMAMATQAMASARAJQAiATAlgNQAJgDAIgGIAOgOIAJgQIALgoIAKAAIAvAuQAOAPATAKQAeAOAhAAQAvgCAngbQAngaAUgsIAMgfQAOgyAWgsIANAsQAKAiAOAhQAVAxAwAXIBfAvQA1AcApAuQAHgkAKgkQALgoAOgnQAQgqAAguIgBhnIAGAAIBFDMIAagWQAIgHAJgFIAWgLQACgCADABQgEAkgCAlQgDAkAGAiIAPBiIACAeQgBApgQAnIAGAKQgHALgPgBIgggHIhEgDIg4AIIhqgEIjugEIhrgLIhOAGIhTAIIhDAFIgNADgAgDixQgEgagOgZQgZgoggghQgZgbgUgjQgwBjgdBoQgLABgGgLQgTgigOgmIgyCuIgMgBQgVgrgHguQgLhGgRhEIAFgBIASAQQAVAXANAcIAGAAQADgeAMgbIAWgxIAbg/QAJgWAGgXQAJghgDgkIAKAAIAlAtIAKABIARgFQAKgCAHgLIAIg0IAJABIARAwQANAbAaANIAcgEIAYAFQAEABADAFIAEAJIAHAVQAMAhAVAiQALASABAVQAEAugGAtIgFAcIgMApIgSBHQgDANgMAJQgBg/gJg+g");
	this.shape.setTransform(-6.3,82.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.1,28.9,105.7,107.6);


(lib.shape154 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AHvH0QgMAGgOAAIhMgFIh9gBIg8gFIibAHIg3gEIgtgIQgegIgigBIgEgDIh4AIIh4AKIgSABIghgKQgsgTgwAAIgCgFIAAgLIADgbQACgVgDgVQgMhLgXhKIAFgGQAJgBAJAFIARAHIAyAKQAWADAXgDQAvgJAVgtIAHgTIAMg5IADAHIgHgqIADgDQATArAfAiQAUAXAaANQAfAOAgAAQAkAAAhgPQAbgNAUgVQAbgeAOgjQAPgmgBgpQgBglgEglQgDgbgHgbQgGgZgLgWQgOgdgQgbQgWgngJgrQgjAogZAyIgFAQQgCAMACANQABALgIAHIg0gNIgRgBQgJACgJAEQgLADgJAHQgJAHgFAJQgTAkgIAqIgIAAIgNgUQgTgogLgtQgIgjAJgkIAHgBIAkAWQAMAHAOgFQAUgFALgRIAJgPQAOgeAFgfQAKhHAEhLIAIgBIASANIAQAIIASAFQATABAQgMIAJgKQAHgJAEgMIAHgUQAEgPAKgIIAJAjIARAqQAKATAWAAIAygFIAHADIgBANIgGBDQgEA2AQA1QARA0gFA4QgHBKgVBHIAQAqQAJATAMASQAMARAPANQAPAOASAJIBAAlQAOAHANAKQAkAcAdAnQACgrARglQAshfAphjIAcAxQAUAzACA4QADBEAABGIA6guIAJARQAHARAEASQAGAZACAaQAFA6gMA3QgGAZgSATg");
	this.shape.setTransform(-6.8,85.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.2,34.3,106.9,102.3);


(lib.shape153 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AmWHMQgTgMgLgGIghgIIgXgDIgCgJIAIgaQAIgZAAgHIgDgeIgFgdQABgHgOgvIgNgrQgHgKgBgIIAFgCIAMARIATAVIAiAMIApANQA/AAAihFQAZgzAAgyQAAgegPg4QgShAgCgTIADgDIAJgCIANARQAOASAZgBQA4AAAThDQAFgWADgaIAAgXIgIi6QAAgNADgDIAYgCQAcABATggIAWghQAAAWARAxQAXA9AXAAQAVAAANgQQAQgQAFgCIAGA/IAEBNQAAA+gZBEIAAABIgBAFQgHAngBAaIACAdIAAABIAJAAIANAAQA5AAAcA6QASAngBAkQgBAfANAlQAPAoAZAYQANgYAEgbIACg0IABgCQADgDAGABQAGgBAJAPIAVAmQAlA9A2AgQAChEACgkQAGg/AZgmIASAjQALAZAUASQANAKASAYQARAXAHAQQAUAqAIAiQAJAiAAAoIgCAWQAFAFABALQAAAJgIAEIgHADIgCADQAFACgKAAQgHAAgCgEIgEAAQgZAAgWgIQgWgKgIABQgKgBgeAMQgeAMgeAAIg6gHQgdgIgvAAIhmAKIhngOIhXgMQggAAhtARIh5ARQgRAAgKgHg");
	this.shape.setTransform(-6.6,89.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.6,43.2,104.1,93.3);


(lib.shape152 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AGJHBIglgFIgGABIhcAKQgYAAgvgNIgrgMIgnAKQglALgZAAQg1AAhKgSQhIgRgpAAQgYAAhUARIhUAQIgBAAIgBACIgHACIgIgDIgIABQgOAAgUgTIgPgPIgCAAIgjABIgCgJQAAgHAGgMQAIgNgBgNQAEgOAAgeIgBgpQgDgPgTghIAAgRIAAgCIAIgCQABAAATANQAZANAlAAQA8AAAQglQAFgLAAgPIgBgMQAAgZgShIQgPg+gJgWIACgFQABgDAHAAIAPAJQAMAJALAAQBeAAAbiGQAKgtAAg0QAAgqgEgKIABgFQACgDAGAAQAFAAAAAEQABAEAEAAQAUAAAQg9QAPg4ANgXIgBgGQAAgGgEgDIgDgDQARgKAHAWQACAJACAaQAAAPAFATIAIAgQALAbAWAnIAoBEQAYgXAKggQAHgYABgmIAKgEQALAMACAdIAAAtQAAAKgIA3IgHA9IgCA+QgCAkgRAZQBJAXAkBPQAbA5AABAIAGgCIALgCIAmALIAuAPIAYAUIAYAaIACAAQAJgwAHgYQALgqAdgWQAjBJBFBRQAYAdAJASQANAaAAAhIAAABIADAJQAAAIgHAEIgOAEIgQAEgAh3mWIAAAAIAAgBg");
	this.shape.setTransform(-4.9,90.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.8,45.3,101.8,91);


(lib.shape151 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("Al5IyQgngTgtgFIgEACIgOgEIAHgpIAMgqIAOguQAEgTgCgTQgDgkgQghQgEgJAAgKIATABQAZATAhAEQAqAEAfgcQATgSAHgZQASg/gWhAIAKgCIAcAKIASgBQASgIAIgSQAlhLgChTIgCgSIgYhoIAYgGQAOgHAIgOQAYgnAEgwIAEgeIAFgFQgDAkASAdQAiA3AqAuQARATAJATIAkgrQAIgKACgNIAJAAQAGADACAIQAFAagBAbIgCAuIgCByIAFAlIANAjQAjA+AqA5QAgAKATAbQAiAxAJA8QATgLAOgTQAaglAdgiQAPARAJAUIAIAOIAuA3QAUAZAQAcIAyB6IgFAOIiHAMIgegGQhcgXhdAQIhNANIgqgCIhWgPQhNgRhPAIQggADgfAHIguAPQgKACgJAAQgRAAgQgHgAmrFHIACAAIgCgCgAFBjCIgBgQQAAggADgIQAGgSAcgWQAIAOAAARQAAAIgOAgQgOAjgJAHQgGgHgBgKgAnyoDIANgoQAEgJAKgEIAGALQALAYAZAKIAEAGQgiAOglACQgFgGADgIg");
	this.shape.setTransform(-7.3,78.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.3,21.6,99.9,113.8);


(lib.shape150 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AmEIYIhRgRIgHAFQgKgDABgKQACgYAQgWQAOgTAJgTQANgfAFggIADgaQAGgtgPgqQgLgigIghIAIAAQAOgJAQAAIArgBQALgEAJgGIAXgSIANgPQAMgQACgUIACgUIACgtIALAAQAKAIAQADIAMABQAlgGAUghIAQgcQANgbgDgdIgNh6QgDggADghIAEgPIAFgHQAdAkAnAZQARAKAUgEIBBgDIAiAFQAQAGAPAHQAjAVAVAhQAQAaACAeIABA0QgCAwgMAvQgDALAAAMIADAYQAMA7AoAsIATAQIAJAFQAeADAcgLIAUgIQARgIAJgSQAJgSASgHIgBATIAEACQgHBdAxBPQAQAYAcALIAbAJIAjAIQAQAgABAoQABAdgNAaIgrAJIkBgQIhgAIIhPADIhIgDQhbgNhcAIQgoAEglAKIgZAHgAFOjDQgEg1AOgzQALgmAYggQAMAHABAOIABAJQADAcgLAbIgRArQgKAZgQAVgAn6n0QABggAegJIAIAkQADAVARAOIgCAKIg3AMQgDgZABgbg");
	this.shape.setTransform(-8.9,82.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.6,28.2,101.4,108.4);


(lib.shape149 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AHRHlIhTgLIg+gEIhKgGIhHAIIhAAIQgSAEgTgEIhvgJQg5gFg5AGIhQAKIgwgCIgxgMQgogJgoABIgEADIgPgCIAKgmIAIgWQAVg4gPg6QgIgcgRgXIAhgGIAvgEQAHgBAGgEIAagYIAYgdQAmg4gLhDIgPhTIALgNIALgOQAVgjAOgmIAIgYQAIgbgLgXIAEgIIASALIAiARIAtgCQAegRAKgeIAKggQAEgQAAgQQABgigBgiIABgzIADgNIAXA8IAaA6IAcAtQARAVAUAQQANALAQAHQApASAsAIIBbAOIAqgBQAOgBAMgJIAOgOQAbgoARgrQAIAHgCAIQgKA7gHA8QgEAcAEAcQADASAJAQQAKAOARAEQAVgBAUgHIAIAEIACAJQgVAcgUAdQgSAcgGAgIgJA0QgHAqAHAqQAFAcAUAVIAtAFIAJAQIgRAbQgKASgHATQgHAVAPASIAZAbQAPARAFAWIAHAEIADAJQgEAIgHAFQgMAHgNAAIgFAAgAG/EcIABAEIAFgFgAgul3IACgBIgCgCgAn5mGQAAgQANgiIARgsIAFAAQAAAVAKAZQALAbAVAWIgaAFIgdAEQgMAKgIAAg");
	this.shape.setTransform(-14.6,86.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65.2,38.3,101.3,97.1);


(lib.shape148 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AFYHXIgoACIhHgEIg/AEIhAAEIhtgXIgigKIg2gCIhjAJIhzAIIhWgEQgGgHgQgGIACgHQgEgJgCgOIgBgrQAAgVAFgWIANguIAAgBIAIgBIAfAYQAiAZAQAEIgCgzIgCglQAAhsAlhkIAZhBQAMgiAAgZQAAgjgVgpIgVgrIABgFIADAAIABABQAJAAAhAbQAnAhAcAAQARAAAGgGQADgEAAgKQAAgIgNgzIgOgzIACgEIAHgCQACAAAWAfQAXAgANAAQARAAAMgcQAJgUAAgNQAIgtgBgVQgBgcARgnQAPgiAUgZIADADIABAJQAAARgGAgQgHAgAAAPQAAA9AoA4QBABXCHAAQBgAAA7hKQAlguAHgqIABgEIAIgCIAHACIACASQAAALgJAmIgMArIAAAGIAIAAIALgBIAEABIAAAGIgOAvQgOApAAArQAAAtAEALQALAdAwATQg0AugNAwQgGAXAABDQAAASA4BsIAsBWQAKACAEAIIADANQAAANgQAJQgZANg7AAgAGtjJIACACIABgDgAnuk0IADgIIgCgBIgBgHIAAgDIgEgTQgCgagCgHQgDgJgLgVQgIgQAAgNIACggIACAAQADAOAfAgIAfAeIgBAKQADgKAMAEQgGAIgBARQAAAHgEADIADATQAAADgOALIgMAIIgBABQgDAIgGADIgHgBIgBACQgBAAAAgHg");
	this.shape.setTransform(-14.4,89.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.9,41.2,105.1,95.9);


(lib.shape147 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("Ak4HRQgQgOgEgBIgfgEIgcgEIADgFIgBgEQAAgYAVhCQAXhJACgMIAAgCIAHgCQAJAAAHANQAFAJACAKIAShCQAMgqANgZQAkhHAAg7QAAgSgJgaIgPguQgFgTgYgaIgvgsIACgCQALACAKAGIABgBIgSgNIABgCIADgEQAZALATALIA0AGQAhAAAMgOQAGgHAAgHIgEgUIgEgVIAAgHIACgDIgBgBIAHgBQADAAAaArQAgArAdAAQAkAAAQhHQALg1gDgtQgDgfAHg3IAFgtQADgaAPgOQAHALACAVIABAkQAAAUgFAtQAAAWAKAsQAKAsAIARQAbAxA2AnQA0AkAnAAQA7AAAlgcQATgOAKgRQAkghgOgmIAAgeIABgCQABgCAGAAQAEAAAQAWQAMAMAGAAIAYgCIAVACIAAAUQgQAfgKAqQgJAnAAAgQAAAMARBKQAHAcAPARQANANAYAJQATAHAAAHIgaBAQgaBDAAAfQAAAyAiAuQAeAqAKAgIAJACQAGADAAAJIgBAGIgBADIgKABIgNgBIgmAEIgoAEIghADIgUABIg6gJQgqgKgtAAIhfAHIg6AHQggAAgugPQgtgPgnAAQgPAAhcATIhdATQgSAAgSgNgAoZjcQgDgaADgbQAFglABgiIAIAAQAMAcAFAeQAIAyAqAdIABAGIgEACIgfgFQgGgCgFACIgPAEIgKACQgJgHgCgPg");
	this.shape.setTransform(-14.7,88.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.7,41,108,95.6);


(lib.shape146 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AlBJgIgjgOIgBACIgHgBIgBgEIgJgFQAEgFAHgEIAMgbIAfgyQAthMAAg4QAAhIgkhEQgjhBhOhTIAFgDIAJAJIACAAQAJAAAYAOQAXAOAXAAIA3gFQAMgGAAgnIAAgBIgBgBQgHgSgHglIgFgXQgLghAAgNIAAgQIgCgUIABgGIABgBIAEAAQAIAMAGAUIASAgIAhA6QAKAQA3AaQAGADATAPIAbAVIAAgFIgFgeIgDgeQAAglAOghIAnhQQAKgVALg4QAJguARgTQALAUAAAdQACAlACAMQAFAVgBAcIgDAxQgCAYAJAZQAIAUASAdQAFAHARAOQASAOALAEIAsATQAgANAMAAQBcAAAVg9QAGgUAAgYIgDgUQAAgaARgjQAOgeAUgZIADgQQADgOAHgFIA6A5QASAUAAAgQAAAWgcA3QgdA3AAAnQAAAiAYApQAkA+BIgBQAXAAATgLIAQgKQAEABACACIACALQAAAHgKARIgOAXQgIASgEAbQgHA8gBAfIAAAvQAAAbgDATQgEANgCAgQgDARgHALIAAADQgBAPgPAAIgpgCIiJAKIiAgKIhwAKQgXAAgwgMQgwgLgNAAIiTAFQgPACgcAMIgaALgAo1AaIgEgXQAAgmAPg2QAJAVARAtQAVAoAyAVIAAAFQgBABgGABIgUgIQgRgGgMgBQgaAAgFAHQgKAMgHACgAHsoDQgJgEgBgKIgBgLQAAgMABgKIAKg7IAGAAQAGAYgBAYIABAGIALAmQgEAJgLAFIgEABIgEgBg");
	this.shape.setTransform(-13.4,74.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.3,12.2,113.9,124.3);


(lib.shape145 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AgcJOIgZgGIgagJIgWgBQiZAKiZgFQgaAAgZgKIgGACIgHgMQALgTAQgMIAUgTQAWgWgCggIgDgsIAAgoQADhXgPhVQgHgqgUgjQgVgkgkgXIAAgGIASgDIAZAOQARAIATAFQAYAEAWgJQAZgLAIgZIAEgUQABgLgCgJQgGgiANgfIABAIIAFAAIAGASQAHASALAOQAmAwA1AjIAQhnQADgOAGgNQAVgrAhgkQANgQAJgTIAagxIADgDQAMANAIARQAVAyASA1QAIAZAGAZQAGAWADAWIAIA6IAJAXQAEAIAJAEQAOAHAQAEIAZgGQA5gMApgtQAVgXARgZQAjg2Aeg6QAZA+gIBDQgEAlgLAkQgKAgADAjQAEAsAaAlQApA4BGAFQAXABAWgKIAJgHIASgYIALAEIAAAeQABAMgIALIgdApQgjAwgBA+QAAApAPAoIALAfIgHADIhqgDQguAFgsgGQhjgHhiAIIgyAKQgJACgKAAIgQgBgAlKgLIADgCIgDgFgAHrnjQgJgHgMABIgIAHQgMgVgEgbIAAgNIAEgvIAGAAQASAsAXAqIAGARIABAGIgIADg");
	this.shape.setTransform(-7.3,76.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.7,17.7,100.8,118.2);


(lib.shape144 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("ACdJxIhYAFIhRAGIgDAAIiSgJIhTAHQg7AAgTgIIgKgFIhCgCIhbgDQgCAEAAgKIAFgFIgBgEQAAgJAog8QAng7AAglQAAgYgag5QgWgugJgNIg7hDQgkgqgCgiIAEAAIACgCIABACIABAAIABACIAnAeQAnAbAOAAQBHAAAWgzQAJgUAAglIABgBIAHgBQAJAAAUAdIAdAoIBHA8IACgBQgPgpAXgqQASghA3g1QAMgMAPgZIAYgsQAIgNAEgeQAFgdAFgHQAXAbAKAtIARBLIAIAXQAJAYAOATQAsA9BBAAQA2AAArgoQAWgVARgaQAQgPAIggQAJgjALgMQAMAjACAOIABArIgIB1QAAA1AfBMQAOAhAOAZIANANQASAPAnAAQAhAAAWgbQAVgZAGABQAJAMADAVIAAAiQAAAsgfBJQgiBNgZAAIgDgBIgCABQgSAIgoAAIg6gCIgHACIhEADgAinkrQAIgqAAgaIgEgoIgEgoIACgGIAGAAIAIAlQAFAZAHAPIAYAsQADAHAAAaIgBAoQgDAYgNALQgmgmAAglgAIhklIAAgKQgCgNgmAEIgCgCIgCgHIAMgmIgGgUIgGgSIgCgTQgEgNAAgFIABgFIABgCIAGAAIArBAQARAcAAAbQAAAVgEALQAEACgKAAQgIAAAAgFgAnspFQABglAfgUIAPAxQgVACgQAMg");
	this.shape.setTransform(-7.7,71.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.9,8,112.6,127.9);


(lib.shape143 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AgyJpIgvgMQg/gNhAgFIg5gDIglAIQgyAPg1AAQgcAAgXgQIAHgMQgXgygEg3QgDgsgFgrQgFgngIgmQgKgxgHg0IAOAEIAFALIAkAlQAZgYAQghIANgeQAOguAZgnQASAwAZArQAMAVAXAJIAyAEQBKgQAyg6QARgVAOgYQA8hkAdhxIAJABIAAAGIgDAsQgDAnABAnQABAaAFAZQAGAcAQAaIAPAZQATAcAfAOQARAHASAAIATAAQAbgEATgVIBAhAQAPgOAJgUIAZg7IAGAMQAFAMABAOQACAogHAoIgSBpQgKBDAhA8IAXAhIAOAPIAlAkIAZgwIAQARIASAhIAIAoQAGAdgBAdIgEAoIgGAYIhRACIAQgGIghAGIhBgGQhSgNhPAMIhIAKIgjAGQgQAEgQAAQgSAAgRgEgAiOjRIgHgcQgHgbgUgVIgPgTQgYgoALgtIAQhpIAHAAQAXA4AVA8QAMAjABAlQADA4gDA3IgMAAgAAhjRIgBgEIAAgPQAAgVAIglIAKg5QAHAAAHALQAIALgBAFQABBugeAHgAHfkYIgCgBIAAgHQAAgGAIgUIAKgZQAGgTAEgdQAVAJABAiIADA8QgDAGgYAAgAnDn6IgBgMQgCgOgpAFIgBgBIgBgGIAKgVIAMgVQAGgeAAgOIAIAAIALAtIANAyIAAAaQgDADgDABQgHgDgBgIgAnOofIgBgEIgEAEIAFAAg");
	this.shape.setTransform(-8.3,74.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.3,12.5,106.1,124.3);


(lib.shape142 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AEPJaIhTgFIhUAGIgaACIiegSIgqgDIjLAHIgkgFIg0gMQgXgJgXgDIgEgGQgEgHAAgHQAAgaAEgZIAKg6QAHgigEghQgCgRgJgOIgagqQgMgTAAgUIAHgBIAHAGIAmAkQAkAcArAUQAQgaAEgeQAEghgFgiQgGgqAOgoIAHALQAGAJACALQAEAPAIANIAZAiQAQASAVAHQApANAngMQAOgFAOgKQAggYAYghQAbgmAPguIAehPQAIgTANgQIgEAwIgCAgQgEAlAQAhQAaAvAyAXQAfANAhAGQAjgDAbgSIAdgXQAbgcAUgfIAohGIgBALIgFAdIgHAlIgKBHQgPB+BFBpQASgzAsgkQANgLASgEIgCATQgPAsAJArIANA8QALAxgBA0IgIAFIgoAIIg+AFgAAUhdIgCgHQAAgeAUhMIAZhgIACAFIADADIACgKIAHgKIACADIABgHIAFgWQAGAbAAAhQAAAbgFAaIABAHQAAAcgXAuIgmBAgAHIixQAAgUALgtQAPg+AVgRQAJAPAEAlQADAjAQATIgUALIgaAPIgLANQgHALgHABgAiVkXQgdgggUgkIgcgzQgMgVABgYIgJgDIAWgHIAHgPIAEgSQAIhAAmg2QAFgHAIgDQgFAdgCAdQgBAMADAMIAUBNQAIAegEAgQgIA+ANA7IgDABQgJAAgHgIgAoWl0IACgLIAJgTIAuhFIAKgSQAEgIgBgIQgBgggDggIAGgEIgHgKIAHgEIgBgFIAPAUQAHALADANQAJAfgHAgQgJArgRAnQgjAGgaAagAncmiIAFAAIAAgGg");
	this.shape.setTransform(-11,75.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.5,14.2,107,123);


(lib.shape141 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AFnI9Qh3gWh5ABIhqgGIhiAAIhYgDIhJAIQhLAJhIgSIAAgGIAJAAQgvhEgIhRIgJhYIgMhTIAOADQAhATAfAVQARAKAGAUQAWgjATglQAJgSAFgRQAMgtgEgwQgEgsAIgpIABANIAHgDIAAAiIAFAsQAIAhATAeQAQAXAYAUQAOAMARAEIAuACIApgCQAPgDALgKQASgSAPgYQARgbAMgbQAHgSAFgUIAkhzIgMBdQgFAmAEAmIAIAkQAIAdAXASIAZARQARALAVgCQAcgDAXgOIANgIQBCg0AxhGQASgaAOgdQAQgfAdgQIAAAOIgEAhQgJBgADBhIACA7QACAsAVAmQAGAKAOAGQASAHATgLIAUgOIAIAEIgDAjIgDAtQAAAQADARQAJApAZAkIgGAMIgdACIgggKIgWAHIguAKgAFsAVIADAAIAAgFgAA6iOIAAgJIACgWQABgeAMgcIAjhZQANgjAKglIAPgsIgEA/IAMBPQADAXgJAXQgaBCg4AtgAiSlZQgshdAAg9IACgCIAIgCIAVARIAVAQQAEgEAHgUIAKgdIAJgeQAFgUAGgBQADAIAIAoQAHArAAAOQAAAWgIA2QgIA2AAAUQAAAdAJAYQAMAjAFAeQgCAEgIABQgFgQg+iFgAoClLQARgZAVgXIAZggQATgbAKggIALghIACAxIgCAxQgEAhAEAfIgDAEIgFAEIgHABQgNgPgTgBIgTAEQgYALgPAVQgEgLAGgIgAmwlpIACgEIgDAAgAm/l0IgEgDIgDACIAHABg");
	this.shape.setTransform(-15.1,79);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.9,21.5,103.7,115);


(lib.shape140 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AAeI4QgegSgkgEQg7gDg6ADQggAAgdALIgeAFIggAAQgVgDgTgJQgcgOgiAHIgpAKIgaABIABgHIAOgNIgBgLIAHgnIAMgwQAPg/gNg/IAGgCQANAKARACQAmABATgkQAPgbACgfQADg6AAg4IAKgEQAEAsAOAqQAHAWALATQAHANAMAJQAjAcAsgFQAhgEAagTQAVgQANgZQAWgrALgxIAVhjIANABQgEAqAHAoQAJAxAfArQAMAQARALQAeATAkgCQAxgCAhgkIAbgfQAngxAWg6QATgyAlgkIACAbIgCBRQgCAiAAAjQAAAhAHAfQAUBYAnBRIAjgpIAHACQAEBfAnBVIANAEIAAAQIgEAFIhEAJIgxACIijgRQgtgDgrALIhDASQgKACgJAAQgYAAgVgNgAAvh6QgChEAjg6IAYgkQAYgjANgoQAFAiADAjQACAXgCAXQgCAYgOAVIgMAPIhDBEgAhdj8IgFgUQgCgYgLgXIgdhGQgWg5ADg8IAIABIAcArIAgh2IATApQAEAKABALQAFAzgKAxQgTBZANBcIgFACgAoUkcQARg4AhgxQANgSAIgUIAIgVIAMANQAMAsgIAuQgGAggQAbIgDABIgRgQIgdAKIgMAIgAnDmqIABgBIgBAAg");
	this.shape.setTransform(-15.8,79.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69.1,21.7,106.6,116.3);


(lib.shape139 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AAPLmIhZgRIhoAFIgZAGIgaAFQgkgFgegQIg4AOIgFgCIAAgIQAng8AVhEQAJgcAGgdQAEgVABgWQADhVgHhSIAKgBIAHAOQAHANAFAPQAGATANARQALAOAQALQALAIAPAAIARgBQAbgEARgUQBDhMAQhkIALhFQADgUgGgUQgKgkAHghIAKASIAoBoQAIAVAUANIASABQAMgGABgPIAGgBIAEBAIAEAYQAIAdALAbQAIATATAKIAZALIAlACQAagFAUgMQAjgWAUgjQAVgnALgtQANgxAZguIAMABQABANgEAPIgGAUQgDAKAAAMQAAAPAEAPQAOAzAvAYQAMAHALAHQgRAvgQAvQgGATACAVIAFAhQAGAZATANQAQAKARgIIgRA2QgMAqADAsQACAVANAOIAQABIAFAIQAFAIgDAIIgBAGQgTAIgVADIhKACIgpABIg/gIIgtgCIhFACIhIAJgAhKhSQgLglgJgNQgegpgTg8IABgBIAGgDIAFAJQAEAHAQAAQAQAAAAgHQACgHANgEQABAKgBARIAAAWQAAAbAPAzQARA5ACARQgBAEgEACQgMgPgLgjgAnygwIAAgNQAEhGAZhAIAGAsQAGAbAVASIggAdQgPAMgFASgAkBqNIgcgTIgHAKIgOAAQgCgTAKgOQARgbAVgXIAIAAIAIBCQABALgGAHIgGAIg");
	this.shape.setTransform(-17.5,61.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.4,-13,99.9,149.3);


(lib.shape138 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("Al2KfIAFgBIgYgEIAHgJIAYgXIAKgKQAVghAFglQAFgrABgtIgBhIQgBgTgEgSQgNg3gQg1IAIgBQALAPAQAKQAUANAZgEQAZgDAUgQIAPgOQAhgdANgqQAKgeADghQADgcgHgdIgJglIAJAAIA6ApQAIAGAKADIASgCQAOgHAGgMQAFgJABgNQADgdgBgeQAAgKAFgJQAcA4AVA8QALAfAWAZQAWAaAhAKQAVA2AYA2QAPAhAHAmIAbiWIAFgQQANgcAYgVQAtgqA6gVIAAAOQACAkAEAjQAEAiAVAZIAdAfIAyAxQALAKAJAPQAIAPABAQIADA5IgBAMIgFAhQgHAkgEAlQgKBaAlBTIgJAPIhXAHIhWgDQh0gKh0AHIiRgGIhFgEIg2AFIhLAOIgfAGQg0gFgdgqgAkkEsIAAAAIAAAAgAoIgUQgCgIADgGQAUgvgFg2IgDgxIAGAAIAOAfQAQAoApASQgbADgSATIgKAPQgLAWgPARgAHclHIAHgiIgMg7QATAAAJAQIALAXIAMAeIgjAdgAk6p2IgKgEIgVgEIgFAFIgDgOIAAhFQAXAkAcAhQAHAIgCAMIgHACg");
	this.shape.setTransform(-13.8,65.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65.9,-6.2,104.4,143.5);


(lib.shape137 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AE7MkIgugDIhKgIIgpADIgnAEIglAEQg1AAgigKQgZgKgIAAIgpgJIgCgBIh0ALIgqALQgKAAgWgOQgWgOgJAAIguABQgKAAgTgMIgCAAIgeAJIgHgCIgCgEIAGgHIAAgBIAWgiQAXggAAgfQAAgXgJgZQgJgagSgXIAAgGIAAgBIAHgCQAJAAAOAQIAQAVQATgbANgfQAOgjAAgZQAAgcgUgmIgig3IAWAUIACgBQA3AhAXAWQAhAfAIApQAYggAEgQQADgJAAgfIgCgzQgCgagIgWIAAgeQAzANAUgkQAMgVAAggQAAgYgRgwIgSgwQAAgGAEgBIADgBQAJAIAcAyQAhAvAjAAQATAAAGgXQAGgaAHgEQAHAPAKAuQAKAnAOAWQAXgYAMgeQALgaAFgjIAAgCIAFgEQAoA+AUBiQAdCTAFAPQAkhUAZgtQArhPBHgxIAGgBIABABIACAAQAAA0AqBPIAxBgIARgTIAhglQAQAfADAOIABAmQAAAngRBHQgQBHAAAvQAAAoAQA4IADACQAGAEABAGIgEACIAEAJIgCADIgHACIgIgBIgEgEIAAgHIgWgCQgaAAggAJIgnAIIgFAAQgJAFgOABQgfgCgGABgAE6MlIABgBIAKABgAoNEDQgEgXANgSIAegmIANgTQAVgiAAgpQAGAdgKAaQgFANgBAOQgDAoANAmIgJAFQgfgJgbAUgAHSqzIgJgJIgQABQgKgBgGgMQgLgYAAgTIADgxIAFAAQgEAVAaAmIApA7IgGAGQgFgCgIgJg");
	this.shape.setTransform(-15.3,55.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68,-24.6,105.4,161);


(lib.shape136 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("ADoMCIhugHIgiAHIg4AGQgXgDgVgLQgLgGgLgCQgXgHgXABIh4AIIgVAEIgWAJIgLAGIihgPIgdACIgJgEIAFgFQgBgRAKgQIAnhEQAMgVAIgYQAHgWgEgZQgOhTg2g/QgggkgRgrIgWg1QgKgXAMgWIALAgIAIAQIAcAjIAYAXIBmBQQAmAdARAsQAdgnAYgsIATgqIAIgXQAJgogIgpIgEgEIgFgQIAIgCIANAJIAMAFQAMgCAEgJIAFgKQANgagKgcIgYhMIgDgPIAFgDIAXAkQAIAMAOAIQAkAVAmgRIANgJIAIgKQAHgMACgOQAFgbAUgRIAFAPQADAOAAAOQAAAZAIAYQAFASANALQAYASAeAGIA+AJIgBAIIgFAVQgFAQgBASQgDA3AQA1QAVBGAOBHIAAiRQABhaAthMQAKgSAOgRQAqg1A8gbIAGACIAAAJQgBAKgEAIQgLAYgEAaQgLBOAlBEIAjA+QAlA/AXBFQAWgoAhgeIAHACIAAAWIgOA0QgHAigDAiQgHBQACBPIAPAFIgHAFQgMAJgNADIhxgJQgGAJgJADIgcAHgAG6iZIA0A1QgCAIgJAEIgbAPgAi4oBIgNgrQgEgPADgPIAFAAQATAYAPAbQAGAJADAMIgHAuQgTgTgIgagAA4ndQgEgQAGgRQAJgagFgZIAFgCIAPAVQAHANAMAKIANAJIAAAIIgvAbIgFABQgDAAgDgDgAHKqbIgPgJQgTAAgMAIQgOAKgEAAQgIgFgCgOIgBgSIADgoQAFgnAMgKIAIAfQAFAQAIAQQAGAKAVAVIAZAeQgBAEgFAAg");
	this.shape.setTransform(-13,59);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65.2,-19.5,104.4,157.1);


(lib.shape135 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AkOJ8IgQgXQgMgRgUgDQgogCgmAOIgiAGIgeAEIgBgIQAYgrgDgyQgCgvgVgpQgagugVgxQgOghgEglIgBgdIADguQABgaALgSIAKAwQAHAoAXAlIAZAhQAnAuAvAkQASAOAMASIAIgqQALgsARgqQAXg5AOg6IAHgiQADgYgEgYQgEgcgKgcIAOgDIATgHIAIgJQAEgKABgKQAAgPgDgPQgEgWgJgVQgLgbgQgZQggg3gmg1QALgEAJAGQAPAMALAPIBEBcIAKALIAPgRIgXh6IAGgDQAIADAHAKQAIAOAEARIAVBGQAKAdASAZIATAWIAOAIIAiAEQAuAAANgtQALgoAEgpIACADIABgBIAEAlQADAzAIAzQAFAgAMAfQANAhAZAaIAaAUQAQAKAQgGIABAFIgDAHQgSAWgJAWQgEAKgBALQgBAZANAYQAlA/AqA9IgDgyQgEglADgnQACgaAGgZQAGgZALgXQAJgUAPgRQAxg8A0g3IAAgIIABgHQABgKAGgIQAHgKAKgFIABAGIgCARIgKAtQgKApAFAqQAFA3AWAyQALAZAOAYQAgAyAcA2QAYAuAAA0IAQgaIAKgfIATAAQAGBdgTBbIgIAeIgKAdIgLgCIgJgEQgvgOgvAOIg0AMIgVgGIgeAEIhogFIg5ACIgfgBIgugGIhLgTIgygCQg8ADg7ANQgeAIgbAQgAH+G7QAGAEgFgHgAGOhbQgCgEABgGIAFgZQAGgegJgcIAGgBIA/BHQgNARgVgGIgLACIgVAKgAnpk5QgCgeALgZIAPghIAAAQQAIABABAMIAGAdIAHAZQgEAOgPAFIgLAEIgEABQgMgFAAgOgAnbk+IABAAIgBgDIAAADgAjWn+IgOgLQgKgMgCgPQgEgVACgXQABgPAJgLIAOAwQAMAFAEAKIACANIgFAjgAATolIgBgbIACgdIAEgnQAKAEAFAQQAGAVAFAGQADAGAPAJIAXANQAGAEAFAHIALAPQAAAJgGACIgMgNQgFgGgIAAQgqAAgDAKIgBAJQgBAGgHAFQgHgKgCgSgAAgpaIAAAAIAAgBg");
	this.shape.setTransform(-12.4,73.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65.4,8.6,106,129);


(lib.shape134 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AkYLEIAAgNIgwgEQhPAEgcAJIgWAIIgRAEIgOgCIgBgCIgBgHIAAgCQgLgPgHgvQgKgwABgiQgBgLALgqIAOgvIAMgzIALgvQAFAHAIAUIANAaIAgApQAFggAbg4QAhhCAXgWQAjggAag5QAbg5AAgnQAAgSgIgQQgMgXgZAAQgFAAgFAEIgRAHIgCgBIgBgIQAAgEAIgHQAKgJAFgOQAGgSAAgPQAAgXgJgXIgWgzIABgCIAEgDIA0AmQAmAcAHAPIACgBIgdh2IAAgkQAJACAGANIAMAXIAXAcQAZAXAlAAQA1AAAXgXIANgPQAGgGAJABIgCAFQABAVgEAlQAAAtAZAmQAkA1BFgIIABABIABAHQAAAEgVAYQgXAZgDAYIgJBIQAAAmAbA3QAXAwAfAnQAcAiANA3QAEAQABAhIAAAlIgBBMIgFAXQAPgcAMgrQAPg7AAgwQABgXgLgzQgLgzAAgUQAAguAdgpQANgRA0gzQArgqARgiQAYgwgIg8QAQgEAAAQIgBAbQACAJAQASQAPATALAHQAnAWASAfQAOAZAEAiIgGAFIgLgJIgKgFQg3AAgJBAQgEAgAHAkIAAAFQAKAZAVAgIA2BNQAVAjANAsQAMArgBAmQAAAUgDAbQgGAdgIAOIAAAGIAAAGIgCACIgVABQgfAAgRgIIgSgIQhBAAgVANQgTAMgcAAQgaAAgdgKQgcgMgdAAIhMAMIhJAKQgPAAgogQQgqgPhIAAIglAHIgoAJQgOACgVAKIgVAJQgLAAgEgUgAoNhdIgLggQAAgdAFgbQAIgfAMgMQAIAtAXAeIAWAVQAAAGgLALIgTASIgHAOIgLARQgGgEgNgbgAAKkkQACgPAJgNQATgaAZgWIAbgWQAsgiAfgvQAKgPABgSQACgaATgMIADAEQACATgEATQgOA4gaA2QgTArgtAPQgUAHgTAOQgVAPgYAJIgBABgAj8mFQABgMgCgLQgCgMgDgLQgJgdALgeIAXAuIAkAqIgdAWIgNAPQgOgDABgRgAgbneIgBgRQAAg3AQgzIAJAAQAFAeAFAfQAGAlgIAmIgMBLIgIABgAHYoQIgBgOIAEgkIAEgkIgJgbIgNghQgEgKgOgrIAEAAQAHANAWAiQATAdAHAUQAKAbAABEQAAAGgHACIgSACg");
	this.shape.setTransform(-13.9,65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.7,-7.8,107.5,145.7);


(lib.Символ63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ64();
	this.instance.parent = this;
	this.instance.setTransform(52.6,20.1,1,1,0,0,0,52.6,20.1);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ64(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ63, new cjs.Rectangle(0,0,105.4,40.1), null);


(lib.Символ54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ62();
	this.instance.parent = this;
	this.instance.setTransform(78.8,244.4,1,1,0,0,0,46,45.6);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ62(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.bod();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ54, new cjs.Rectangle(0,0,148,320), null);


(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.handdd_1();
	this.instance.parent = this;
	this.instance.setTransform(25,47,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({skewX:-4.3,skewY:175.7,x:21.8,y:49.2},2,cjs.Ease.get(-1)).to({skewX:-8.7,skewY:171.3,x:18.5,y:51.3},2,cjs.Ease.get(1)).to({skewX:-5.1,skewY:174.9,x:21.1,y:49.7},2,cjs.Ease.get(-1)).to({skewX:0,skewY:180,x:25,y:47},3,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,2,50,90);


(lib.Символ50копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ53();
	this.instance.parent = this;
	this.instance.setTransform(107.3,15.5,1,1,0,0,0,137.6,15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.91,scaleY:0.91},4,cjs.Ease.get(-1)).to({regX:137.5,scaleX:0.83,scaleY:0.83,x:107.2},4,cjs.Ease.get(1)).to({scaleX:0.91,scaleY:0.91,x:107.3},4,cjs.Ease.get(-1)).to({regX:137.6,scaleX:1,scaleY:1},4,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.3,0,275.2,31);


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ49();
	this.instance.parent = this;
	this.instance.setTransform(106.3,15,0.42,0.42,0,0,0,225.8,30.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:30.6,scaleX:0.46,scaleY:0.46},3,cjs.Ease.get(-1)).to({regY:30.4,scaleX:0.49,scaleY:0.49},4,cjs.Ease.get(1)).to({scaleX:0.46,scaleY:0.46,x:106.2},4,cjs.Ease.get(-1)).to({regY:30.5,scaleX:0.42,scaleY:0.42,x:106.3},4,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,213.8,31.1);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ41();
	this.instance.parent = this;
	this.instance.setTransform(19.9,50.5,1,1,0,0,0,19.9,50.5);
	this.instance.alpha = 0.66;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.367},4,cjs.Ease.get(-1)).to({alpha:0},5,cjs.Ease.get(1)).to({alpha:0.332},5,cjs.Ease.get(-1)).to({alpha:0.66},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,39.8,101.1);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ40();
	this.instance.parent = this;
	this.instance.setTransform(19.7,50.1,1,1,0,0,0,19.9,50.5);
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.key();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ39, new cjs.Rectangle(-0.2,-0.4,40.3,101.1), null);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(2));

	// Слой 1
	this.instance = new lib.Символ29();
	this.instance.parent = this;
	this.instance.setTransform(413.1,229.1,1,1,0,0,0,413.1,229.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.711},4).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,826.2,458.1);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ18();
	this.instance.parent = this;
	this.instance.setTransform(62.8,46.1,1.125,1.125,0,0,0,55.8,14.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.06,scaleY:1.06},4,cjs.Ease.get(-1)).to({regX:55.9,scaleX:0.97,scaleY:0.97,x:62.9},5,cjs.Ease.get(1)).to({scaleX:1.05,scaleY:1.05,y:46.2},5,cjs.Ease.get(-1)).to({regX:55.8,scaleX:1.13,scaleY:1.13,x:62.8,y:46.1},5,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ17();
	this.instance_1.parent = this;
	this.instance_1.setTransform(62.9,15.3,0.97,0.97,0,0,0,55,13.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:13.7,scaleX:1.04,scaleY:1.04,y:15.4},4,cjs.Ease.get(-1)).to({regX:54.9,regY:13.6,scaleX:1.13,scaleY:1.13,x:62.8,y:15.3},5,cjs.Ease.get(1)).to({regX:55,scaleX:1.05,scaleY:1.05,x:62.9,y:15.4},5,cjs.Ease.get(-1)).to({scaleX:0.97,scaleY:0.97,y:15.3},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,2.1,125.6,60.6);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.parent = this;
	this.instance.setTransform(372,160,1,1,0,0,0,372,160);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.04,scaleY:1.04,x:372.1},11,cjs.Ease.get(-1)).to({scaleX:1.08,scaleY:1.08},13,cjs.Ease.get(1)).to({regX:371.9,regY:159.9,scaleX:1.04,scaleY:1.04,x:372,y:160.1},13,cjs.Ease.get(-1)).to({regX:372,regY:160,scaleX:1,scaleY:1,y:160},12,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,744,320);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_22 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(22).call(this.frame_22).wait(63));

	// Символ 20
	this.instance = new lib.Символ20();
	this.instance.parent = this;
	this.instance.setTransform(70.9,28,1,1,0,0,0,88.2,28);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:92.5,alpha:1},4).wait(81));

	// Символ 21
	this.instance_1 = new lib.Символ21();
	this.instance_1.parent = this;
	this.instance_1.setTransform(233.8,28,1,1,0,0,0,66.5,28);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({x:255.4,alpha:1},4).wait(78));

	// Символ 22
	this.instance_2 = new lib.Символ22();
	this.instance_2.parent = this;
	this.instance_2.setTransform(141.5,82,1,1,0,0,0,113.9,28);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).to({x:163.1,alpha:1},4).wait(75));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.3,0,176.4,56);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ11();
	this.instance.parent = this;
	this.instance.setTransform(366.4,210,1,1,0,0,0,366.4,210);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.641},9,cjs.Ease.get(-1)).to({alpha:0.238},10,cjs.Ease.get(1)).to({alpha:0.621},10,cjs.Ease.get(-1)).to({alpha:1},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,733,420);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.Символ19();
	this.instance.parent = this;
	this.instance.setTransform(120.2,46.7,1,1,0,0,0,62.8,31.3);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(88).to({_off:false},0).to({alpha:1},3).wait(62).to({y:56.7,alpha:0},4).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ14();
	this.instance_1.parent = this;
	this.instance_1.setTransform(123.1,47,0.484,0.484,0,0,0,163,55);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).wait(65).to({y:62,alpha:0},4).to({_off:true},1).wait(79));

	// Слой 1
	this.instance_2 = new lib.Символ13();
	this.instance_2.parent = this;
	this.instance_2.setTransform(34.7,66.8,0.309,0.309,0,0,0,112.2,44.5);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1.05,scaleY:1.05,x:118,y:42.3,alpha:1},4).to({regY:44.6,scaleX:0.98,scaleY:0.98,x:110,y:45.5},2).to({regY:44.5,scaleX:1,scaleY:1,x:112.2,y:44.5},3).wait(65).to({y:59.5,alpha:0},4).wait(1).to({scaleX:0.31,scaleY:0.31,x:34.7,y:66.8},0).to({scaleX:1.05,scaleY:1.05,x:118,y:42.3,alpha:1},4).to({regY:44.6,scaleX:0.98,scaleY:0.98,x:110,y:45.5},2).to({regY:44.5,scaleX:1,scaleY:1,x:112.2,y:44.5},3).wait(65).to({y:59.5,alpha:0},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,52.9,69.7,27.8);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.parent = this;
	this.instance.setTransform(726,160,1,1,0,0,0,372,160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(354,0,744,320), null);


(lib.Символ29_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ28();
	this.instance.parent = this;
	this.instance.setTransform(13,13,1,1,0,0,0,13,13);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:23},7,cjs.Ease.get(-1)).to({y:33},7,cjs.Ease.get(1)).to({y:22.4},8,cjs.Ease.get(-1)).to({y:13},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(9,-2.3,26,26);


(lib.sprite140 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 7
	this.instance = new lib.Символ47();
	this.instance.parent = this;
	this.instance.setTransform(-2,1.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},84).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-167.4,-162.2,330.9,327.9);


(lib.sprite141 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.sprite140();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sprite141, new cjs.Rectangle(-167.4,-162.2,330.9,327.9), null);


(lib.sprite162 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shape134("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.shape135("synched",0);
	this.instance_1.parent = this;

	this.instance_2 = new lib.shape136("synched",0);
	this.instance_2.parent = this;

	this.instance_3 = new lib.shape137("synched",0);
	this.instance_3.parent = this;

	this.instance_4 = new lib.shape138("synched",0);
	this.instance_4.parent = this;

	this.instance_5 = new lib.shape139("synched",0);
	this.instance_5.parent = this;

	this.instance_6 = new lib.shape140("synched",0);
	this.instance_6.parent = this;

	this.instance_7 = new lib.shape141("synched",0);
	this.instance_7.parent = this;

	this.instance_8 = new lib.shape142("synched",0);
	this.instance_8.parent = this;

	this.instance_9 = new lib.shape143("synched",0);
	this.instance_9.parent = this;

	this.instance_10 = new lib.shape144("synched",0);
	this.instance_10.parent = this;

	this.instance_11 = new lib.shape145("synched",0);
	this.instance_11.parent = this;

	this.instance_12 = new lib.shape146("synched",0);
	this.instance_12.parent = this;

	this.instance_13 = new lib.shape147("synched",0);
	this.instance_13.parent = this;

	this.instance_14 = new lib.shape148("synched",0);
	this.instance_14.parent = this;

	this.instance_15 = new lib.shape149("synched",0);
	this.instance_15.parent = this;

	this.instance_16 = new lib.shape150("synched",0);
	this.instance_16.parent = this;

	this.instance_17 = new lib.shape151("synched",0);
	this.instance_17.parent = this;

	this.instance_18 = new lib.shape152("synched",0);
	this.instance_18.parent = this;

	this.instance_19 = new lib.shape153("synched",0);
	this.instance_19.parent = this;

	this.instance_20 = new lib.shape154("synched",0);
	this.instance_20.parent = this;

	this.instance_21 = new lib.shape155("synched",0);
	this.instance_21.parent = this;

	this.instance_22 = new lib.shape156("synched",0);
	this.instance_22.parent = this;

	this.instance_23 = new lib.shape157("synched",0);
	this.instance_23.parent = this;

	this.instance_24 = new lib.shape158("synched",0);
	this.instance_24.parent = this;

	this.instance_25 = new lib.shape159("synched",0);
	this.instance_25.parent = this;

	this.instance_26 = new lib.shape160("synched",0);
	this.instance_26.parent = this;

	this.instance_27 = new lib.shape161("synched",0);
	this.instance_27.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_10}]},2).to({state:[{t:this.instance_11}]},2).to({state:[{t:this.instance_12}]},2).to({state:[{t:this.instance_13}]},2).to({state:[{t:this.instance_14}]},2).to({state:[{t:this.instance_15}]},2).to({state:[{t:this.instance_16}]},2).to({state:[{t:this.instance_17}]},2).to({state:[{t:this.instance_18}]},2).to({state:[{t:this.instance_19}]},2).to({state:[{t:this.instance_20}]},2).to({state:[{t:this.instance_21}]},2).to({state:[{t:this.instance_22}]},2).to({state:[{t:this.instance_23}]},2).to({state:[{t:this.instance_24}]},2).to({state:[{t:this.instance_25}]},2).to({state:[{t:this.instance_26}]},2).to({state:[{t:this.instance_27}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.7,-7.8,107.5,145.7);


(lib.Символ52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(4));

	// Слой 3
	this.instance = new lib.Символ50копия();
	this.instance.parent = this;
	this.instance.setTransform(106.9,12.6,1,1,0,0,0,106.9,15.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:67.6},4).to({y:12.6},3).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ50();
	this.instance_1.parent = this;
	this.instance_1.setTransform(106.9,70.1,1,1,0,0,0,106.9,15.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:15.6},4).to({y:70.1},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.3,-3,275.2,88.6);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ43();
	this.instance.parent = this;
	this.instance.setTransform(-6.5,-88,1,1,0,0,180,26.5,100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ39();
	this.instance_1.parent = this;
	this.instance_1.setTransform(20.3,50.4,1,1,0,0,0,20,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 2
	this.instance_2 = new lib.Символ43();
	this.instance_2.parent = this;
	this.instance_2.setTransform(41.5,-88,1,1,0,0,0,26.5,100);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ42, new cjs.Rectangle(-33,-188,101.1,289.1), null);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ29_1();
	this.instance.parent = this;
	this.instance.setTransform(-15.5,297.8,0.734,0.734,0,-90,90,13.1,13);

	this.instance_1 = new lib.Символ29_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(59.2,300.3,0.734,0.734,90,0,0,13,13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(40));

	// Слой 2
	this.instance_2 = new lib.Символ63();
	this.instance_2.parent = this;
	this.instance_2.setTransform(31.4,168,1,1,0,0,0,52.6,20.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:171.2},9,cjs.Ease.get(-1)).to({y:174.9},10,cjs.Ease.get(1)).to({y:171.4},10,cjs.Ease.get(-1)).to({y:168},10,cjs.Ease.get(1)).wait(1));

	// haes.png
	this.instance_3 = new lib.Символ61();
	this.instance_3.parent = this;
	this.instance_3.setTransform(13,52,1,1,0,0,0,43,42);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:1.8,x:13.5,y:52.4},9,cjs.Ease.get(-1)).to({rotation:4,x:13.8,y:52.7},10,cjs.Ease.get(1)).to({regY:42.1,rotation:1.8,x:13.4,y:52.4},10,cjs.Ease.get(-1)).to({regY:42,rotation:0,x:13,y:52},10,cjs.Ease.get(1)).wait(1));

	// kist2.png
	this.instance_4 = new lib.Символ59();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-43,255,1,1,0,0,0,25,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:1,scaleY:1,rotation:-10.5,x:-40.4,y:256.6},9,cjs.Ease.get(-1)).to({regX:24.9,regY:45.1,scaleX:1,scaleY:1,rotation:-22.3,x:-37.5,y:258.3},10,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:-11,x:-40.2,y:256.7},10,cjs.Ease.get(-1)).to({regX:25,regY:45,scaleX:1,scaleY:1,rotation:0,x:-43,y:255},10,cjs.Ease.get(1)).wait(1));

	// tit1.png
	this.instance_5 = new lib.Символ58();
	this.instance_5.parent = this;
	this.instance_5.setTransform(5,164,1,1,0,0,0,26,27);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({y:168},9,cjs.Ease.get(-1)).to({y:172.3},10,cjs.Ease.get(1)).to({y:168.2},10,cjs.Ease.get(-1)).to({y:164},10,cjs.Ease.get(1)).wait(1));

	// ple4.png
	this.instance_6 = new lib.Символ57();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-28.5,173.5,1,1,0,0,0,13.5,50.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regY:50.6,scaleY:1,skewX:2.8,x:-30.1,y:175.6},9,cjs.Ease.get(-1)).to({regY:50.5,scaleY:1.01,skewX:6.2,x:-31.8,y:177.6},10,cjs.Ease.get(1)).to({regY:50.6,scaleY:1,skewX:3,x:-30.2,y:175.7},10,cjs.Ease.get(-1)).to({regY:50.5,scaleY:1,skewX:0,x:-28.5,y:173.5},10,cjs.Ease.get(1)).wait(1));

	// tit.png
	this.instance_7 = new lib.Символ56();
	this.instance_7.parent = this;
	this.instance_7.setTransform(59.5,164,1,1,0,0,0,23.5,26);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({y:168},9,cjs.Ease.get(-1)).to({y:172.3},10,cjs.Ease.get(1)).to({y:168.2},10,cjs.Ease.get(-1)).to({y:164},10,cjs.Ease.get(1)).wait(1));

	// kistt.png
	this.instance_8 = new lib.Символ55();
	this.instance_8.parent = this;
	this.instance_8.setTransform(67,261.5,1,1,0,0,0,19,14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regY:14.6,rotation:7,x:61.3,y:258.4},9,cjs.Ease.get(-1)).to({rotation:15,x:54.9,y:254.7},10,cjs.Ease.get(1)).to({regX:19.1,rotation:7.3,x:61.1,y:258.2},10,cjs.Ease.get(-1)).to({regX:19,regY:14.5,rotation:0,x:67,y:261.5},10,cjs.Ease.get(1)).wait(1));

	// handd.png
	this.instance_9 = new lib.Символ60();
	this.instance_9.parent = this;
	this.instance_9.setTransform(98.5,193,1,1,0,0,0,25.5,71);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({scaleY:1,skewX:2.3,x:95.7},9,cjs.Ease.get(-1)).to({regX:25.6,scaleY:1,skewX:4.9,x:92.6},10,cjs.Ease.get(1)).to({scaleY:1,skewX:2.3,x:95.5},10,cjs.Ease.get(-1)).to({regX:25.5,scaleY:1,skewX:0,x:98.5},10,cjs.Ease.get(1)).wait(1));

	// bod.png
	this.instance_10 = new lib.Символ54();
	this.instance_10.parent = this;
	this.instance_10.setTransform(19,195,1,1,0,0,0,74,160);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({y:196.4},9,cjs.Ease.get(-1)).to({y:197.8},10,cjs.Ease.get(1)).to({y:196.4},10,cjs.Ease.get(-1)).to({y:195},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68,10,192,345);


(lib.sprite235 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.sprite162();
	this.instance.parent = this;
	this.instance.setTransform(12.5,-31.4);
	this.instance.shadow = new cjs.Shadow("#FFCC00",0,0,23);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sprite235, new cjs.Rectangle(-80.2,-64.2,161,199), null);


(lib.sprite144 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#32FF32").ss(22.5,1,1).p("AI/K8Qj1DNlKAAQl3AAkIkJQkJkIAAl4QAAl3EJkIQEIkJF3AAQF4AAEIEJQEJEIAAF3QAACvg5CXQhCCtiOCNQggAgghAcg");
	this.shape.setTransform(-2.2,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(27));

	// Layer 6
	this.instance = new lib.sprite141();
	this.instance.parent = this;
	this.instance.setTransform(0,0.2,2.099,2.099);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(27));

	// Layer 3
	this.instance_1 = new lib.sprite136();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,5.843,5.843);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:5.41,scaleY:5.41},1).to({scaleX:4.99,scaleY:4.99},1).to({scaleX:4.6,scaleY:4.6},1).to({scaleX:4.23,scaleY:4.23},1).to({scaleX:3.89,scaleY:3.89},1).to({scaleX:3.57,scaleY:3.57},1).to({scaleX:3.28,scaleY:3.28},1).to({scaleX:3,scaleY:3},1).to({scaleX:2.75,scaleY:2.75},1).to({scaleX:2.53,scaleY:2.53},1).to({scaleX:2.33,scaleY:2.33},1).to({scaleX:2.15,scaleY:2.15},1).to({scaleX:2,scaleY:2},1).to({scaleX:1.87,scaleY:1.87},1).to({scaleX:1.76,scaleY:1.76},1).to({scaleX:1.68,scaleY:1.68},1).to({scaleX:1.62,scaleY:1.62},1).to({scaleX:1.57,scaleY:1.57},2).to({scaleX:5.84,scaleY:5.84},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-351.5,-340.4,694.7,688.4);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sprite144();
	this.instance.parent = this;
	this.instance.setTransform(29.6,28.6,0.084,0.084);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.6,y:-1.4},7,cjs.Ease.get(-1)).to({regX:0,y:-31.4},7,cjs.Ease.get(1)).to({regX:0.6,regY:-0.6,y:-3.4},7,cjs.Ease.get(-1)).to({regX:0,regY:0,y:28.6},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,58.4,57.8);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ42();
	this.instance.parent = this;
	this.instance.setTransform(53.2,-213.6,1,1,6.5,0,0,20.1,-401.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:20.2,rotation:-0.5,x:53.3},9,cjs.Ease.get(-1)).to({regX:20.1,rotation:-8.5,x:53.2,y:-213.7},10,cjs.Ease.get(1)).to({regX:20.2,rotation:-1,x:53.4},10,cjs.Ease.get(-1)).to({regX:20.1,rotation:6.5,x:53.2,y:-213.6},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.1,-7.3,122.9,295.4);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sprite144();
	this.instance.parent = this;
	this.instance.setTransform(55.6,53.6,0.173,0.173,0,0,0,0.6,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ36, new cjs.Rectangle(-5.3,-5.3,120.2,119.1), null);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ23();
	this.instance.parent = this;
	this.instance.setTransform(65.8,141,1,1,0,0,0,75.8,141);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:75.5},14,cjs.Ease.get(-1)).to({x:85.8},15,cjs.Ease.get(1)).to({x:75.8},15,cjs.Ease.get(-1)).to({x:65.8},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78,10,192,345);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// buble
	this.instance = new lib.Символ9();
	this.instance.parent = this;
	this.instance.setTransform(527.8,163.8,1,1,0,0,0,112.2,44.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 3
	this.instance_1 = new lib.Символ26();
	this.instance_1.parent = this;
	this.instance_1.setTransform(354.6,226,0.802,0.802,0,0,0,75.7,141);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(231.3,121,253.9,276.6), null);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ46();
	this.instance.parent = this;
	this.instance.setTransform(29.2,28.9,1,1,0,0,0,29.2,28.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:70.4},9,cjs.Ease.get(-1)).to({x:116.2},10,cjs.Ease.get(1)).to({x:72.7},10,cjs.Ease.get(-1)).to({x:29.2},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,58.4,57.8);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(6));

	// Слой 1
	this.instance = new lib.Символ44();
	this.instance.parent = this;
	this.instance.setTransform(106.7,-136.2,1,1,0,0,0,50.5,144.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:167.9},4).to({y:151.9},2).to({y:167.9},2).to({y:151.9},4).wait(2).to({y:-136.2},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10,-288.1,122.9,295.5);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ36();
	this.instance.parent = this;
	this.instance.setTransform(54.8,54.2,1,1,0,0,0,54.8,54.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:111.3},9,cjs.Ease.get(-1)).to({y:174.6},10,cjs.Ease.get(1)).to({y:114.4},10,cjs.Ease.get(-1)).to({y:54.2},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.3,-5.3,120.2,119.1);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ38();
	this.instance.parent = this;
	this.instance.setTransform(54.8,54.2,1,1,0,0,0,54.8,54.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:252.8},14,cjs.Ease.get(-1)).to({x:465},15,cjs.Ease.get(1)).to({x:259.9},15,cjs.Ease.get(-1)).to({x:54.8},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.3,-5.3,120.2,119.1);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.parent = this;
	this.instance.setTransform(48.9,-93,1,1,0,0,0,50.5,18);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(229.7,10,253.9,276.6), null);


(lib.Символ36_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// handdd
	this.instance_1 = new lib.Символ51();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1.7,60,1,1,0,0,0,68.5,46);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 2
	this.instance_2 = new lib.Символ48();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-0.1,0,1,1,0,0,0,29.2,28.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ36_1, new cjs.Rectangle(-66.8,-28.8,95.9,134.9), null);


(lib.Символ40_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ36_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-76.3,78.5,0.978,1,0,0,180,77,79.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ40_1, new cjs.Rectangle(-29.4,-29.8,93.7,134.8), null);


// stage content:
(lib.girl_zamok_new = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		stage.canvas.style.cursor = "none";
		this.pricel.mouseEnabled = false;
		this.pricel.visible = false;
		stage.canvas.addEventListener("mouseover", fl_mouseover.bind(this));
		function fl_mouseover() {
			this.pricel.visible = true;
			this.targ.visible = false;
			this.drk.gotoAndPlay(1);
			this.key.gotoAndPlay(1);
			this.txt.gotoAndPlay(1);
		}
		
		stage.canvas.addEventListener("mouseout", fl_mouseout.bind(this));
		
		function fl_mouseout() {
				this.pricel.visible = false;
				this.targ.visible = true;
			this.drk.gotoAndStop(0);
			this.key.gotoAndPlay(15);
			this.txt.gotoAndPlay(5);
		}
		
		
		
		
		
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
			this.pricel.x = stage.mouseX/window.devicePixelRatio;
			this.pricel.y = stage.mouseY/window.devicePixelRatio;
			
			this.fon.x = - stage.mouseX / 10/window.devicePixelRatio;
			this.girl.x =  -stage.mouseX / 6/window.devicePixelRatio;
		}
		
		
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			
		window.open(clickTAG, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 4
	this.pricel = new lib.Символ40_1();
	this.pricel.parent = this;
	this.pricel.setTransform(-128,54.6);

	this.targ = new lib.Символ37();
	this.targ.parent = this;
	this.targ.setTransform(58.8,81.4,1,1,0,0,0,54.8,54.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.targ},{t:this.pricel}]}).wait(1));

	// Слой 10
	this.txt = new lib.Символ52();
	this.txt.parent = this;
	this.txt.setTransform(459.9,285.2,1,1,0,0,0,106.9,15.6);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	// Слой 6
	this.instance = new lib.sprite235();
	this.instance.parent = this;
	this.instance.setTransform(628.7,192.3,1.481,1.607,0,22.8,0,0.4,0.4);
	this.instance.compositeOperation = "lighter";

	this.instance_1 = new lib.sprite235();
	this.instance_1.parent = this;
	this.instance_1.setTransform(55.6,182,1.481,1.607,0,22.8,0,0.4,0.4);
	this.instance_1.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 2
	this.girl = new lib.Символ10();
	this.girl.parent = this;
	this.girl.setTransform(11.9,102.3,1.082,1.082,0,0,0,77,94.5);

	this.timeline.addTween(cjs.Tween.get(this.girl).wait(1));

	// Слой 9
	this.key = new lib.Символ45();
	this.key.parent = this;
	this.key.setTransform(397.2,-20.1,1,1,0,0,0,66.5,46.1);

	this.timeline.addTween(cjs.Tween.get(this.key).wait(1));

	// Слой 8
	this.drk = new lib.Символ30();
	this.drk.parent = this;
	this.drk.setTransform(359.2,155.1,1,1,0,0,0,413.1,229.1);

	this.timeline.addTween(cjs.Tween.get(this.drk).wait(1));

	// Слой 5
	this.instance_2 = new lib.Символ12();
	this.instance_2.parent = this;
	this.instance_2.setTransform(334.5,165.1,1,1,0,0,0,366.4,210);
	this.instance_2.alpha = 0.148;
	this.instance_2.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 1
	this.fon = new lib.Символ1();
	this.fon.parent = this;
	this.fon.setTransform(-13,160,1,1,0,0,0,372,160);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(162.6,-201.9,929.7,738.5);
// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bod.png?1496327421885", id:"bod"},
		{src:"images/chain.png?1496327421885", id:"chain"},
		{src:"images/fon.jpg?1496327421885", id:"fon"},
		{src:"images/haes.png?1496327421885", id:"haes"},
		{src:"images/handd.png?1496327421885", id:"handd"},
		{src:"images/handdd.png?1496327421885", id:"handdd"},
		{src:"images/key.png?1496327421885", id:"key"},
		{src:"images/kist2.png?1496327421885", id:"kist2"},
		{src:"images/kistt.png?1496327421885", id:"kistt"},
		{src:"images/ple4.png?1496327421885", id:"ple4"},
		{src:"images/tit.png?1496327421885", id:"tit"},
		{src:"images/tit1.png?1496327421885", id:"tit1"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;