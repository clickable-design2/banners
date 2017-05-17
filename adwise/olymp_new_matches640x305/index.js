(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.ajax = function() {
	this.initialize(img.ajax);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,120);


(lib.arsen = function() {
	this.initialize(img.arsen);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,120);


(lib.button = function() {
	this.initialize(img.button);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,175,54);


(lib.dk = function() {
	this.initialize(img.dk);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,120);


(lib.dk1 = function() {
	this.initialize(img.dk1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,120);


(lib.ever = function() {
	this.initialize(img.ever);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,120);


(lib.foot1 = function() {
	this.initialize(img.foot1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,469,310);


(lib.foot2 = function() {
	this.initialize(img.foot2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,469,310);


(lib.foot3 = function() {
	this.initialize(img.foot3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,469,310);


(lib.foot4 = function() {
	this.initialize(img.foot4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,469,310);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,154,41);


(lib.mu = function() {
	this.initialize(img.mu);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,120);


(lib.ramka = function() {
	this.initialize(img.ramka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,558,261);


(lib.shakh = function() {
	this.initialize(img.shakh);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,120);


(lib.stav = function() {
	this.initialize(img.stav);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,172,63);


(lib.zarya = function() {
	this.initialize(img.zarya);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,120);// helper functions:

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


(lib.Symbol46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// foot4.jpg
	this.instance = new lib.foot4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol46, new cjs.Rectangle(0,0,469,310), null);


(lib.Symbol44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// foot3.jpg
	this.instance = new lib.foot3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol44, new cjs.Rectangle(0,0,469,310), null);


(lib.Symbol42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// foot2.jpg
	this.instance = new lib.foot2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol42, new cjs.Rectangle(0,0,469,310), null);


(lib.Symbol39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCB522").s().p("AgsAzIAAgJQAFABAEgBQADAAACgCIADgGIACgIIAJhNIA9AAIAABnIgMAAIAAhcIgnAAIgHBDIgCANQgCAFgEADQgEADgFABIgFAAIgJgBg");
	this.shape.setTransform(66.7,14.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCB522").s().p("AAbA0IAAhbIg1AAIAABbIgNAAIAAhnIBPAAIAABng");
	this.shape_1.setTransform(56.6,14.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FCB522").s().p("AgiAyIABgLQAEADAEAAIAGgBIAEgEQADgDACgEIAGgNIgnhDIAAgCIAPAAIAdA5IABAAIAcg5IAOAAIAAABIgrBTIgFALQgDAFgFACQgEADgGAAQgFAAgHgDg");
	this.shape_2.setTransform(46.7,14.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgfB4QgOgEgLgJQgLgJgGgMQgHgNgBgQIAbAAQABAJAFAJQAEAHAHAFQAHAGAJACQAJADALABQAIgBAKgDQAKgCAIgHQAJgGAEgLQAFgKAAgQQAAgQgFgMQgFgKgLgGQgJgGgMgEQgLgCgOAAIggACQgRACgMAEIAAh2ICPAAIAAAaIh0AAIAAA/QASgEAUgBQASABAQAEQASAFAMAJQAOALAHANQAEAJACAJQACAKgBAKQAAATgGAPQgGAQgLAKQgLALgPAGQgQAFgSAAQgQABgOgFg");
	this.shape_3.setTransform(97.1,67.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgiB4QgRgFgMgLQgNgLgGgPQgHgRAAgTIAAhTQAAgTAHgRQAGgPANgLQAMgLARgFQAQgHASABQATgBAQAHQARAFAMALQAMALAHAPQAHARAAATIAABTQAAATgHARQgHAPgMALQgMALgRAFQgQAHgTAAQgSAAgQgHgAgThiQgKADgHAFQgIAGgGAGQgFAIgDAJQgEAMAAAPIAABFQAAAOAEAMQADAKAFAHQAGAIAIAEQAHAFAKADQAJADAKgBQALABAJgDQAKgDAHgFQAIgEAGgIQAFgHADgKQAEgMAAgOIAAhFQAAgPgEgMQgDgJgFgIQgGgGgIgGQgHgFgKgDQgJgCgLAAQgKAAgJACg");
	this.shape_4.setTransform(75.3,67);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhJB6IB2jzIAdAAIh2Dzg");
	this.shape_5.setTransform(55.5,66.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgiB4QgQgGgMgKQgMgKgHgPQgHgPAAgUQAAgNAEgMQADgNAIgKIBNh3IAgAAIg+BiQAJgGAVgCQASgBAPAGQAQAFAMAKQALAKAHAOQAGAPAAASQAAAUgHAPQgHAPgMAKQgMAKgRAGQgQAEgSAAQgSAAgQgEgAgXgGQgLADgIAHQgIAHgFAKQgEAKAAANQAAANAEALQAFAKAIAHQAIAHALAEQALAEAMAAQANAAALgEQALgEAIgHQAIgHAFgKQAEgLAAgNQAAgNgEgKQgFgKgIgHQgIgHgMgDQgLgEgMAAQgMAAgLAEg");
	this.shape_6.setTransform(36.8,67.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhMB8IAAgGIBkh9QALgOAGgQQAFgQgCgNQgCgPgLgIQgFgEgIgDQgIgCgKAAQgKAAgJACQgIADgGAFQgGAFgEAIQgDAIgBALIgZAAQABgQAFgNQAFgMAJgJQAJgJANgEQAOgEARAAQAPAAANAEQANAEAJAIQAJAIAFAKQAFAKABAMQACARgFAQQgJAYgJAKIhPBiIBqAAIAAAag");
	this.shape_7.setTransform(16.9,66.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol39, new cjs.Rectangle(5.6,7.3,103.8,82.7), null);


(lib.Symbol38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCB522").s().p("AApA0IAAhnIAMAAIAABngAg0A0IAAhnIAMAAIAAAIIAAAcIAdAAQAIAAAGADQAHACAFAFQAEAFADAGQACAGgBAIQAAAHgDAFQgCAGgFAFQgFAEgGACQgGADgHAAgAgoApIAbAAQAFAAAFgCQAEgBADgDQADgDACgEQACgEABgGQAAgFgCgEQgCgFgDgDIgHgEQgEgBgFAAIgHAAIgWAAg");
	this.shape.setTransform(104.9,13.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCB522").s().p("AAbA0IAAhbIg1AAIAABbIgNAAIAAhnIBPAAIAABng");
	this.shape_1.setTransform(92.8,13.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FCB522").s().p("AgKA1QgFgBgFgCIgJgEIgIgHIgGgIIgFgJIgCgKIgBgMIABgLIACgKIAGgJIAFgIIAIgGIAJgFIAKgCIAKgBIALABIAKACIAIAFIAIAGIAGAIQAEAEABAFIADAKIABALIgBALIgCALIgFAJIgGAHQgDAEgFADQgEADgFABIgKAEIgLABIgKgBgAgPgmQgHADgGAFQgGAJgCAFQgDALAAAFIAAAKIADAIQADAHAFAFQAGAGAHADQAFACAKABQAGAAAJgDQAIgDAGgGQAFgFADgHIACgIIABgKQAAgFgDgLQgDgHgFgHQgGgFgHgDQgKgDgGAAQgIAAgHADg");
	this.shape_2.setTransform(81.6,13.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FCB522").s().p("AgmA0IAAhnIAoAAQAJAAAHADQAGACAFAFQAFAFACAHQADAGAAAIQAAAHgDAGQgCAGgFAFQgFAEgGADQgIADgIAAIgcAAIAAAhgAgaAIIAcAAQAGAAAEgCQAFgCADgDQADgCACgFQACgEAAgGQAAgFgCgEQgCgFgDgDQgDgDgFgCQgEgCgGAAIgcAAg");
	this.shape_3.setTransform(71.2,13.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FCB522").s().p("AgmA0IAAhnIAoAAQAGAAAGACQAHACAEADQAEADACAGQADAFAAAHIgBAHIgDAGIgDAFIgGAEIAHADIAGAFQADADABAEQABAEAAAFQAAAHgCAFQgDAFgEAEQgEAEgGACQgHACgHAAgAgZApIAcAAIAJgBIAIgDQADgDABgDQACgEABgEQgBgGgCgDQgCgEgEgCIgIgDIgKgBIgZAAgAgZgFIAZAAIAIgBIAHgDQAEgCABgDQACgEAAgEQAAgFgBgDIgFgGIgGgDIgJgBIgaAAg");
	this.shape_4.setTransform(61.3,13.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FCB522").s().p("AgeA0IAAhnIA8AAIAAALIgwAAIAAAiIAuAAIAAAKIguAAIAAAkIAxAAIAAAMg");
	this.shape_5.setTransform(52.1,13.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FCB522").s().p("AAmA0IgMgZIgzAAIgMAZIgNAAIAAgCIAwhlIAFAAIAwBlIAAACgAAWAQIgWgwIgVAwIArAAg");
	this.shape_6.setTransform(38.6,13.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FCB522").s().p("AgdA0IAAhnIA7AAIAAALIgvAAIAABcg");
	this.shape_7.setTransform(30.1,13.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FCB522").s().p("AAeA0IAAgyIABgbIhDBNIgEAAIAAhmIAMAAIAAAwIgBAdIBDhOIADAAIAABng");
	this.shape_8.setTransform(20.3,13.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FCB522").s().p("AgsAzIAAgJQAFABAEgBQADAAACgCIADgGIACgIIAJhNIA9AAIAABnIgMAAIAAhcIgnAAIgHBDIgCANQgCAFgEADQgEADgFABIgFAAIgJgBg");
	this.shape_9.setTransform(8.8,13.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgfB4QgOgFgLgIQgLgJgGgMQgHgNgBgQIAbAAQABAKAFAIQAEAIAHAFQAHAFAJADQAJACALAAQAIAAAKgCQAKgEAIgFQAJgHAEgLQAFgLAAgPQAAgQgFgMQgFgKgLgGQgJgHgMgDQgLgCgOAAIggACQgRACgMAEIAAh3ICPAAIAAAbIh0AAIAAA/QASgEAUAAQASAAAQAEQASAFAMAJQAOALAHAOQAEAIACAJQACAKgBALQAAASgGAQQgGAOgLALQgLALgPAFQgQAHgSgBQgQAAgOgEg");
	this.shape_10.setTransform(97.1,66.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgiB4QgRgGgMgKQgNgLgGgQQgHgQAAgTIAAhTQAAgUAHgQQAGgPANgLQAMgLARgGQAQgFASAAQATAAAQAFQARAGAMALQAMALAHAPQAHAQAAAUIAABTQAAATgHAQQgHAQgMALQgMAKgRAGQgQAGgTABQgSgBgQgGgAgThhQgKACgHAFQgIAFgGAIQgFAHgDAKQgEALAAAPIAABFQAAAOAEAMQADAKAFAHQAGAHAIAGQAHAFAKACQAJACAKABQALgBAJgCQAKgCAHgFQAIgGAGgHQAFgHADgKQAEgMAAgOIAAhFQAAgPgEgLQgDgKgFgHQgGgIgIgFQgHgFgKgCQgJgEgLAAQgKAAgJAEg");
	this.shape_11.setTransform(75.3,66.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhJB6IB2jzIAdAAIh2Dzg");
	this.shape_12.setTransform(55.5,66.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAlB7IAAg4Ih9AAIAAgMIB7ixIAdAAIAACmIAZAAIAAAXIgZAAIAAA4gAg1AtIBcAAIAAg9IABhJg");
	this.shape_13.setTransform(36.4,66.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhMB8IAAgGIBkh9QALgOAGgQQAFgQgCgNQgCgPgLgIQgFgEgIgDQgIgCgKAAQgKAAgJACQgIADgGAFQgGAFgEAIQgDAIgBALIgZAAQABgQAFgNQAFgMAJgJQAJgJANgEQAOgEARAAQAPAAANAEQANAEAJAIQAJAIAFAKQAFAKABAMQACARgFAQQgJAYgJAKIhPBiIBqAAIAAAag");
	this.shape_14.setTransform(16.8,66);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol38, new cjs.Rectangle(2.9,6.7,110,82.6), null);


(lib.Symbol37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCB522").s().p("AgsAzIAAgJQAFABAEgBQADAAACgCIADgGIACgIIAJhNIA9AAIAABnIgMAAIAAhcIgnAAIgHBDIgCANQgCAFgEADQgEADgFABIgFAAIgJgBg");
	this.shape.setTransform(66.6,12.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCB522").s().p("AAbA0IAAhbIg1AAIAABbIgNAAIAAhnIBPAAIAABng");
	this.shape_1.setTransform(56.5,12.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FCB522").s().p("AAmA0IgMgaIgzAAIgMAaIgNAAIAAgCIAwhlIAFAAIAwBlIAAACgAAWAQIgWgvIgVAvIArAAg");
	this.shape_2.setTransform(45.9,12.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgfB4QgOgEgLgJQgLgJgGgMQgHgNgBgQIAbAAQABAJAFAJQAEAHAHAFQAHAGAJACQAJADALAAQAIAAAKgDQAKgCAIgHQAJgGAEgLQAFgLAAgPQAAgQgFgMQgFgKgLgGQgJgHgMgDQgLgCgOAAIggACQgRACgMAEIAAh2ICPAAIAAAaIh0AAIAAA/QASgEAUgBQASABAQAEQASAEAMAKQAOAKAHAPQAEAIACAJQACAKgBAKQAAATgGAPQgGAQgLAKQgLALgPAGQgQAFgSAAQgQABgOgFg");
	this.shape_3.setTransform(93.8,64.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgiB4QgRgFgMgLQgNgLgGgQQgHgQAAgTIAAhTQAAgUAHgQQAGgPANgLQAMgLARgGQAQgFASAAQATAAAQAFQARAGAMALQAMALAHAPQAHAQAAAUIAABTQAAATgHAQQgHAQgMALQgMALgRAFQgQAHgTAAQgSAAgQgHgAgThhQgKACgHAFQgIAGgGAGQgFAIgDAJQgEAMAAAPIAABFQAAAOAEAMQADAJAFAIQAGAIAIAFQAHAEAKADQAJACAKAAQALAAAJgCQAKgDAHgEQAIgFAGgIQAFgIADgJQAEgMAAgOIAAhFQAAgPgEgMQgDgJgFgIQgGgGgIgGQgHgFgKgCQgJgDgLAAQgKAAgJADg");
	this.shape_4.setTransform(72,64.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhJB6IB1jzIAeAAIh2Dzg");
	this.shape_5.setTransform(52.1,64.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag9B7IAAgYIAwAAIAAjGIgrAAIAAgWIBGAAIAADcIAwAAIAAAYg");
	this.shape_6.setTransform(36.4,64.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhMB8IAAgGIBkh9QALgOAGgQQAFgQgCgNQgCgPgLgIQgFgEgIgDQgIgCgKAAQgKAAgJACQgIADgGAFQgGAFgEAIQgDAIgBALIgZAAQABgQAFgNQAFgMAJgJQAJgJANgEQAOgEARAAQAPAAANAEQANAEAJAIQAJAIAFAKQAFAKABAMQACARgFAQQgJAYgJAKIhPBiIBqAAIAAAag");
	this.shape_7.setTransform(18.9,64.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol37, new cjs.Rectangle(7.6,5.1,98.4,82.5), null);


(lib.Symbol36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.mu();
	this.instance.parent = this;
	this.instance.setTransform(-3,3,0.902,0.902);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol36, new cjs.Rectangle(-3,3,108.2,108.2), null);


(lib.Symbol35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.arsen();
	this.instance.parent = this;
	this.instance.setTransform(19,21,0.826,0.826);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol35, new cjs.Rectangle(19,21,99.1,99.1), null);


(lib.Symbol34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ever();
	this.instance.parent = this;
	this.instance.setTransform(6,7,0.822,0.822);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol34, new cjs.Rectangle(6,7,98.6,98.6), null);


(lib.Symbol33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag3BGIAAiLIA9AAIAMABIAKAEQAJADAHAIQAGAHADAKQADAJAAAKQAAAKgDAIQgEAJgGAHQgGAIgJAEQgOAEgIABIgYAAIAAAkgAgTACIAZAAQAHAAAEgFQAEgGAAgJQAAgHgEgGQgEgGgHAAIgZAAg");
	this.shape.setTransform(103.6,15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgsBcIAAiLIBXAAIAAAgIgyAAIAAATIAuAAIAAAgIguAAIAAAWIAzAAIAAAigAANg/QgFgEgBgIQABgHAFgFQAFgEAHAAQAIAAAFAEQAGAFAAAHQAAAIgGAEQgFAEgIAAQgHAAgFgEgAgmg/QgFgEgBgIQABgHAFgFQAFgEAHAAQAIAAAGAEQAEAFAAAHQAAAIgEAEQgGAEgIAAQgHAAgFgEg");
	this.shape_1.setTransform(91.1,12.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgRBGIAAhrIgiAAIAAggIBnAAIAAAgIgjAAIAABrg");
	this.shape_2.setTransform(79.6,15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAaBGIgZgsIgBAAIgZAsIgpAAIAAgFIAthEIgpg8IAAgGIAoAAIAWAmIAAAAIAXgmIAnAAIAAAGIgoA8IAtBEIAAAFg");
	this.shape_3.setTransform(67.1,15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAjBHIgJgSIgzAAIgIASIgmAAIAAgFIBAiIIAQAAIA/CIIAAAFgAAPAXIgPghIgNAhIAcAAg");
	this.shape_4.setTransform(53.1,14.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhYBGIAAiLIAlAAIAABqIAiAAIAAhqIAjAAIAABqIAiAAIAAhqIAlAAIAACLg");
	this.shape_5.setTransform(35.8,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol33, new cjs.Rectangle(23.4,5,88.4,24), null);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shakh();
	this.instance.parent = this;
	this.instance.setTransform(-170,20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol32, new cjs.Rectangle(-170,20,120,120), null);


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dk1();
	this.instance.parent = this;
	this.instance.setTransform(-4,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol31, new cjs.Rectangle(-4,1,120,120), null);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgKBGIgNgDIgMgGIgLgIIgJgKQgEgFgDgHQgDgHgBgHQgCgIAAgJQAAgIACgHQABgJADgGIAHgMIAJgLIALgHQAGgEAGgCQAJgDARgCQALABAKADQALADAJAGQAMAKAEAHQADAEACAHIADAMIgjAAIgFgJQgCgEgEgCIgJgEIgKgBQgHAAgHADQgGADgFAFQgEAFgDAIQgCAGAAAIQAAAHACAIQADAHAEAEQAFAGAGADQAHADAHAAQAFAAAFgCQAFgBAEgDQAFgCACgFQADgEACgFIAjAAIgDAOQgCAGgEAGIgHAJIgIAIQgJAGgLADQgLADgLAAg");
	this.shape.setTransform(79.8,11.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAWBHIgeg2IgSAAIAAA2IgkAAIAAiLIAkAAIAAA3IALgBQAHAAADgCQAEgCACgHIAGgTQABgHAEgFQAEgGAFgDQAHgEAIgBQAJgBAMADIAAAZQgHgBgEACQgEACgCAHIgHAVQgEAKgGAFIAoA+IAAAGg");
	this.shape_1.setTransform(65.5,11.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAXBGIAAgsIgUAAIgXAsIgmAAIAAgFIAbgtQgFgDgEgFIgGgJQgDgFgBgGQgCgGAAgGQAAgJADgJQAEgJAGgHQAGgHAJgEIALgDIAMgBIA8AAIAACLgAgNggQgDAFAAAGQAAAIADAEQAFAGAHAAIAYAAIAAgiIgYAAQgIAAgEAFg");
	this.shape_2.setTransform(50.3,11.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAjBHIgJgSIgzAAIgIASIgmAAIAAgFIBAiIIAQAAIA/CIIAAAFgAAPAXIgPghIgNAhIAcAAg");
	this.shape_3.setTransform(36.8,11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol30, new cjs.Rectangle(27.8,1.6,61.7,24), null);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AApBOIAAgQIhTAAIAAAQIgcAAIAAgvIAGAAQAHAAADgEQADgEABgKIALhaIBfAAIAABsIAPAAIAAAvgAgOAOQgCAOgEAEIAoAAIAAhOIgcAAg");
	this.shape.setTransform(81.6,21.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgrBGIAAiLIBWAAIAAAgIgyAAIAAAUIAuAAIAAAfIguAAIAAAWIA0AAIAAAig");
	this.shape_1.setTransform(68.5,21.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgRBGIAAhrIgiAAIAAggIBnAAIAAAgIgiAAIAABrg");
	this.shape_2.setTransform(57,21.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag8BbIAAiLIAlAAIAABDIBIhEIALAAIAACMIgkAAIAAhIIhJBIgAgHg6QgGgCgEgEQgEgEgDgGQgCgGAAgIIAUgCQAAAFADADQADACAFAAQAHAAADgCQAEgDABgFIATACQAAAIgCAGQgDAGgEAEQgEAEgGACQgGACgIAAQgHAAgGgCg");
	this.shape_3.setTransform(43.9,19);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAjBHIgJgSIgzAAIgIASIgmAAIAAgFIBAiIIAQAAIA/CIIAAAFgAAPAXIgPghIgNAhIAcAAg");
	this.shape_4.setTransform(29.3,21);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAWBGIAAg4IgrAAIAAA4IgkAAIAAiLIAkAAIAAAzIArAAIAAgzIAkAAIAACLg");
	this.shape_5.setTransform(15,21.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AADBFQgOgGgGgFIgJgJIgHgKQgEgFgCgHQgCgGgBgHIgTAAIAAA4IgkAAIAAiLIAkAAIAAAyIATAAIAEgMIAGgLQAFgHAMgKQAJgGAKgEQAMgDAMAAIANABIANAEIALAGIALAIIAJAKIAHAMQADAHACAIQACAIAAAIQAAAJgCAIQgCAIgDAHQgCAHgFAFIgJALIgLAIQgFADgHACQgGADgHABIgNABQgNAAgLgEgAANgjQgGADgFAFQgDAEgDAHQgDAIAAAIQAAAJADAIQACAHAFAFQAEAEAHADQAGACAHAAQAHAAAGgCQAHgDAEgEQAFgFADgHQADgIAAgJQAAgIgDgIQgDgHgFgEQgFgFgHgDQgFgCgHAAQgHAAgHACg");
	this.shape_6.setTransform(-2.9,21.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag3BGIAAiLIA9AAIAMABIAKADQAJAFAHAHQAGAIADAJQADAKAAAKQAAAJgDAIQgEAKgGAGQgGAIgJAEQgOAFgIgBIgYAAIAAAlgAgTACIAZAAQAHAAAEgGQAEgFAAgJQAAgHgEgGQgEgGgHgBIgZAAg");
	this.shape_7.setTransform(92,-0.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgrBGIAAiLIBWAAIAAAgIgyAAIAAAUIAuAAIAAAfIguAAIAAAXIA0AAIAAAhg");
	this.shape_8.setTransform(79.4,-0.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgRBGIAAhrIgiAAIAAggIBnAAIAAAgIgiAAIAABrg");
	this.shape_9.setTransform(67.9,-0.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgKBGIgNgDIgMgGIgLgIIgJgKQgEgFgDgHQgDgHgBgHQgCgIAAgJQAAgIACgHQABgIADgIIAHgLIAJgKIALgIQAGgEAGgCQAJgDARgBQALAAAKADQALADAJAGQAMAKAEAHQADAFACAFIADANIgjAAIgFgJQgCgEgEgCIgJgEIgKgBQgHAAgHAEQgGACgFAFQgEAFgDAIQgCAGAAAIQAAAIACAGQADAIAEAEQAFAGAGADQAHADAHAAQAFAAAFgBQAFgCAEgDQAFgCACgFQADgEACgFIAjAAIgDAOQgCAGgEAFIgHAKIgIAHQgJAHgLADQgLADgLAAg");
	this.shape_10.setTransform(54.8,-0.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgsBGIAAiLIBXAAIAAAgIgyAAIAAAUIAuAAIAAAfIguAAIAAAXIAzAAIAAAhg");
	this.shape_11.setTransform(41.7,-0.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AATBGIAAgxIgTABIgOgBQgHgBgGgEQgGgCgEgEQgEgFgDgFQgEgEgCgIIgDgQIgBgUIAAgVIAlAAIAAAVIABAUQABAIAEAEQAEAEAHABQAGABANgCIAAg5IAkAAIAACLg");
	this.shape_12.setTransform(28.7,-0.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAWBGIAAg4IgrAAIAAA4IgkAAIAAiLIAkAAIAAAyIArAAIAAgyIAkAAIAACLg");
	this.shape_13.setTransform(15.3,-0.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAjBHIgJgSIgzAAIgIASIgmAAIAAgFIBAiIIAQAAIA/CIIAAAFgAAPAXIgPghIgNAhIAcAAg");
	this.shape_14.setTransform(1,-1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAgBGIAAhAIgeAfIgDAAIgegfIAABAIglAAIAAiLIAOAAIA2A8IA3g8IAOAAIAACLg");
	this.shape_15.setTransform(-14.3,-0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol29, new cjs.Rectangle(-24.8,-10.9,124.9,46), null);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ajax();
	this.instance.parent = this;
	this.instance.setTransform(10,24,0.903,0.903);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol28, new cjs.Rectangle(10,24,108.4,108.4), null);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag/BFIAAgaIAKAAQADgBADgCQADgDABgMIAKheIBhAAIAACLIgkAAIAAhrIgdAAIgGBAQgBAPgDAJQgEAJgHAFQgGAFgKAAIgGAAIgTgBg");
	this.shape.setTransform(95.8,9.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAjBHIgJgSIgzAAIgIASIgmAAIAAgFIBAiIIAQAAIA/CIIAAAFgAAPAXIgPghIgNAhIAcAAg");
	this.shape_1.setTransform(82,9.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAWBGIAAg4IgrAAIAAA4IgkAAIAAiLIAkAAIAAAzIArAAIAAgzIAkAAIAACLg");
	this.shape_2.setTransform(67.7,9.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgsBGIAAiLIBXAAIAAAgIgyAAIAAAUIAuAAIAAAfIguAAIAAAXIAzAAIAAAhg");
	this.shape_3.setTransform(55,9.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgKBHIgNgEIgMgFIgLgIIgJgKQgEgGgDgHQgDgHgBgHQgCgIAAgJQAAgHACgIQABgJADgHIAHgMIAJgJIALgJQAGgDAGgCQAJgDARgBQALAAAKACQALAEAJAGQAMAKAEAGQADAFACAGIADAOIgjAAIgFgJQgCgFgEgCIgJgDIgKgBQgHAAgHADQgGACgFAFQgEAFgDAHQgCAIAAAHQAAAIACAGQADAHAEAGQAFAFAGADQAHADAHAAQAFAAAFgBQAFgBAEgEQAFgCACgEQADgEACgGIAjAAIgDANQgCAHgEAFIgHAKIgIAHQgJAHgLADQgLAEgLAAg");
	this.shape_4.setTransform(41.5,9.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag3BGIAAiLIA9AAIAMABIAKAEQAJAEAHAHQAGAIADAJQADAJAAALQAAAJgDAIQgEAJgGAIQgGAHgJAEQgOAFgIAAIgYAAIAAAkgAgTACIAZAAQAHAAAEgGQAEgGAAgHQAAgJgEgFQgEgHgHABIgZAAg");
	this.shape_5.setTransform(27.8,9.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAjBHIgJgSIgzAAIgIASIgmAAIAAgFIBAiIIAQAAIA/CIIAAAFgAAPAXIgPghIgNAhIAcAAg");
	this.shape_6.setTransform(13.6,9.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol27, new cjs.Rectangle(4.6,-0.7,101.3,24), null);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAWBGIAAg4IgrAAIAAA4IgkAAIAAiLIAkAAIAAAyIArAAIAAgyIAkAAIAACLg");
	this.shape.setTransform(103.2,18.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgNBIQgHgBgGgDQgGgCgGgDIgLgIIgJgKIgHgNQgDgHgBgIQgCgIAAgJQAAgIACgIQABgIAEgHQACgGAFgGIAJgKIALgIQAFgEAHgCIANgDIANgCIANACQAHABAGACQAGACAGAEIALAIIAJAKIAHAMQADAHABAIQACAIAAAIIgBAQIgEAOQgDAGgEAGIgIALIgLAIIgMAHIgOAEIgPABgAgMgiQgGACgFAFQgFAFgDAHQgDAHAAAIQAAAJADAIQADAHAFAFQAFAEAGADQAGACAGAAQAHAAAGgCQAGgDAFgEQAFgFADgHQADgIAAgJQAAgIgDgHQgCgHgGgFQgEgFgHgCQgGgDgGAAQgGAAgHADg");
	this.shape_1.setTransform(88,18.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgRBGIAAhrIgiAAIAAggIBnAAIAAAgIgjAAIAABrg");
	this.shape_2.setTransform(74.5,18.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag3BGIAAiLIA9AAIAMABIAKADQAJAFAHAHQAGAIADAJQADAKAAAKQAAAJgDAIQgEAKgGAGQgGAIgJAEQgOAFgIgBIgYAAIAAAlgAgTACIAZAAQAHAAAEgGQAEgFAAgJQAAgHgEgGQgEgGgHgBIgZAAg");
	this.shape_3.setTransform(62.9,18.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgsBGIAAiLIBXAAIAAAgIgyAAIAAAUIAuAAIAAAfIguAAIAAAXIAzAAIAAAhg");
	this.shape_4.setTransform(50.3,18.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag3BGIAAiLIA9AAQAKAAAIADQAIADAGAGQAGAGADAHQADAJAAAJQAAAHgDAGQgEAHgFAEQAFACADADQAEADABAEQAFAIAAAJQAAAJgDAIQgDAIgFAGQgGAGgJADQgIADgLAAgAgSAmIAbAAQAFAAADgDQACgDABgFQAAgFgDgDQgDgEgFAAIgbAAgAgSgOIAVAAQAFAAADgDQADgDAAgFQAAgFgDgDQgDgEgFAAIgVAAg");
	this.shape_5.setTransform(38,18.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgYBFQgLgDgJgHIgJgHIgHgKIgFgMIgDgNIAjAAIAEAKIAHAHIAKAEQAFABAFAAQAFAAAGgBIAJgFQAFgDADgEQADgFABgFIgsAAIAAgeIAtAAQgBgFgDgFQgDgEgEgDQgFgEgFgBQgFgCgFAAIgLABQgFACgDACQgEADgDAEIgFAJIgjAAIADgNQACgGADgFQAEgHAMgKQAJgGALgDQALgEALAAIAMACIANADIAMAGIALAHIAJAKQAEAGACAHQADAHACAHQABAIAAAIQAAAJgBAIQgCAIgDAHIgHAMIgJAKIgLAIIgMAGIgNADIgNABQgLAAgLgDg");
	this.shape_6.setTransform(23.2,18.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol26, new cjs.Rectangle(13.7,8.9,99,24), null);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().rs(["rgba(0,255,0,0)","#00FF00","rgba(0,255,0,0)"],[0,0.494,1],0,0,0,0,0,23.2).ss(10,1,1).p("ABeAAQAABHgcAxQgYAsggAGQgFAAgFAAQgmAAgcgyQgbgxAAhHQAAhGAbgyQAcgxAmAAQAnAAAbAxQAaAvACBBQAAAFAAADg");
	this.shape.setTransform(9.4,17);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol23, new cjs.Rectangle(-5,-5,28.7,44), null);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().rs(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.494,1],0,0,0,0,0,60.6).ss(15,1,1).p("AI8AAQAADtipCmQilCpjuAAQjtAAioipQimimAAjtQAAjsCmipQCoimDtAAQDuAAClCmQCpCpAADsg");
	this.shape.setTransform(57.2,57.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(-7.5,-7.5,129.4,129.4), null);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(0,0,154,41), null);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNBIQgHgBgGgDQgGgCgGgDIgLgIIgJgKIgHgNQgDgHgBgIQgCgIAAgJQAAgIACgIQABgIAEgHQACgGAFgGIAJgKIALgIQAFgEAHgCIANgDIANgCIANACQAHABAGACQAGACAGAEIALAIIAJAKIAHAMQADAHABAIQACAIAAAIIgBAQIgEAOQgDAGgEAGIgIALIgLAIIgMAHIgOAEIgPABgAgMgiQgGACgFAFQgFAFgDAHQgDAHAAAIQAAAJADAIQADAHAFAFQAFAEAGADQAGACAGAAQAHAAAGgCQAGgDAFgEQAFgFADgHQADgIAAgJQAAgIgDgHQgCgHgGgFQgEgFgHgCQgGgDgGAAQgGAAgHADg");
	this.shape.setTransform(103.5,13);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAgBGIAAhAIgeAfIgDAAIgegfIAABAIgkAAIAAiLIAMAAIA3A8IA4g8IAMAAIAACLg");
	this.shape_1.setTransform(87.2,13);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAjBHIgJgSIgzAAIgIASIgmAAIAAgFIBAiIIAQAAIA/CIIAAAFgAAPAXIgPghIgNAhIAcAAg");
	this.shape_2.setTransform(71.8,12.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAWBGIAAg4IgrAAIAAA4IgkAAIAAiLIAkAAIAAAzIArAAIAAgzIAkAAIAACLg");
	this.shape_3.setTransform(57.5,13);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag7BHIAAiMIAkAAIAABFIBIhGIALAAIAACMIgkAAIAAhHIhIBIg");
	this.shape_4.setTransform(42.7,13);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AApBOIAAgQIhTAAIAAAQIgcAAIAAgvIAGAAQAHAAADgEQADgEABgKIALhaIBfAAIAABsIAPAAIAAAvgAgOAOQgCAOgEAEIAoAAIAAhOIgcAAg");
	this.shape_5.setTransform(27.2,13.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(17.4,3,96.1,24), null);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.dk();
	this.instance.parent = this;
	this.instance.setTransform(-5,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(-5,4,120,120), null);


(lib.Symbol13copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNBIQgHgBgGgDQgGgCgGgDIgLgIIgJgKIgHgNQgDgHgBgIQgCgIAAgJQAAgIACgIQABgIAEgHQACgGAFgGIAJgKIALgIQAFgEAHgCIANgDIANgCIANACQAHABAGACQAGACAGAEIALAIIAJAKIAHAMQADAHABAIQACAIAAAIIgBAQIgEAOQgDAGgEAGIgIALIgLAIIgMAHIgOAEIgPABgAgMgiQgGACgFAFQgFAFgDAHQgDAHAAAIQAAAJADAIQADAHAFAFQAFAEAGADQAGACAGAAQAHAAAGgCQAGgDAFgEQAFgFADgHQADgIAAgJQAAgIgDgHQgCgHgGgFQgEgFgHgCQgGgDgGAAQgGAAgHADg");
	this.shape.setTransform(87.7,15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAgBGIAAhAIgeAfIgDAAIgegfIAABAIglAAIAAiLIAOAAIA2A8IA3g8IANAAIAACLg");
	this.shape_1.setTransform(71.4,15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAjBHIgJgSIgzAAIgIASIgmAAIAAgFIBAiIIAQAAIA/CIIAAAFgAAPAXIgPghIgNAhIAcAAg");
	this.shape_2.setTransform(56,14.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAWBGIAAg4IgrAAIAAA4IgkAAIAAiLIAkAAIAAAzIArAAIAAgzIAkAAIAACLg");
	this.shape_3.setTransform(41.7,15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag8BGIAAiLIAlAAIAABEIBIhFIAMAAIAACMIglAAIAAhHIhJBHg");
	this.shape_4.setTransform(26.9,15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAoBOIAAgQIhSAAIAAAQIgbAAIAAgvIAEAAQAIAAAEgEQACgEABgKIAKhaIBhAAIAABsIANAAIAAAvgAgOAOQgCAOgFAEIApAAIAAhOIgbAAg");
	this.shape_5.setTransform(11.4,15.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13copy, new cjs.Rectangle(1.6,5,96.1,24), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAXBGIAAgsIgUAAIgXAsIgmAAIAAgFIAbgtQgFgDgEgFIgGgKQgDgEgBgGQgCgGAAgFQAAgKADgIQAEgKAGgGQAGgIAJgDIALgEIAMgBIA8AAIAACLgAgNggQgDAEAAAIQAAAHADAFQAFAFAHAAIAYAAIAAgiIgYAAQgIAAgEAFg");
	this.shape.setTransform(65.6,13);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag3BGIAAiLIA9AAIAMABIAKAEQAJAEAHAHQAGAIADAJQADAJAAAKQAAAKgDAIQgEAJgGAIQgGAHgJAEQgOAFgIAAIgYAAIAAAkgAgTACIAZAAQAHAAAEgGQAEgGAAgHQAAgJgEgFQgEgHgHABIgZAAg");
	this.shape_1.setTransform(53.1,13);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAjBHIgJgSIgzAAIgIASIgmAAIAAgFIBAiIIAQAAIA/CIIAAAFgAAPAXIgPghIgNAhIAcAAg");
	this.shape_2.setTransform(38.9,12.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgWBGQgJgEgHgFQgGgHgEgJQgDgJAAgLIAfAAQAAAHAGAFQAFAFAIABQAHgBAGgFQAEgEAAgGQAAgHgEgEQgGgGgHAAIgLAAIAAgbIAKAAQAGAAADgFQAEgEAAgEQAAgGgEgEQgEgDgFAAQgFAAgEACQgDADAAAEIghAAQAAgJADgIQAEgGAGgFQAGgFAJgDQAIgBAJAAQALAAAJADQAJADAGAGQAFAGADAHQADAHAAAIQAAAHgDAHQgDAHgGAFIAJAGIAHAHIADAKIABAKQABAKgEAIQgDAIgHAGQgHAGgKADQgKADgNABQgLgBgKgCg");
	this.shape_3.setTransform(26,13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(18.1,3,57,24), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.zarya();
	this.instance.parent = this;
	this.instance.setTransform(-12,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(-12,-1,120,120), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgUBGQgLgDgIgFQgIgGgFgIIgDgKIgBgLIAjAAQAAADABADIAFAFQAHAEAIgBQAIABAGgEQAHgEAAgGQAAgEgCgDQgDgDgEgCQgFgBgLgCQgKAAgIgCQgKgDgHgFQgHgDgEgIQgDgEgBgEIgBgKIABgLQABgFADgFQAEgIAIgFQAHgHAKgCQAKgDALAAQAJAAAJADQAKACAIAHQAIAGAEAHIADAKIABALIgiAAQAAgHgGgEQgFgDgHAAQgIAAgEACIgFAFQgCACAAAEQAAAGAGAEQAEABALACQAMABAJACQAKACAIAFQAIAEAEAHQACAFABAFIABAMIgBAKIgEAJQgEAIgJAGQgHAFgLADQgKADgLAAQgKAAgKgDg");
	this.shape.setTransform(22.1,10);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgGBHIg9iHIAAgGIAnAAIARAqIALAjIABAAIALgjIARgqIAnAAIAAAGIg8CHg");
	this.shape_1.setTransform(8.8,10.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,0,30.7,24), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCB522").s().p("AgsAzIAAgJQAFABAEgBQADAAACgCIADgGIACgIIAJhNIA9AAIAABnIgMAAIAAhcIgnAAIgHBDIgCANQgCAFgEADQgEADgFABIgFAAIgJgBg");
	this.shape.setTransform(100.1,86.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCB522").s().p("AAbA0IAAhbIg1AAIAABbIgNAAIAAhnIBPAAIAABng");
	this.shape_1.setTransform(89.9,86.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FCB522").s().p("AgjAyIADgLQAEADADAAIAGgBIAFgEQACgDABgEIAHgNIgmhDIAAgCIANAAIAfA5IAAAAIAcg5IANAAIAAABIgqBTIgFALQgEAFgEACQgEADgFAAQgGAAgIgDg");
	this.shape_2.setTransform(80,86.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgfB4QgOgEgLgJQgLgIgGgNQgHgNgBgQIAbAAQABAKAFAHQAEAIAHAGQAHAFAJADQAJACALAAQAIAAAKgCQAKgEAIgFQAJgHAEgKQAFgMAAgOQAAgRgFgLQgFgLgLgGQgJgGgMgDQgLgDgOAAIggACQgRACgMAEIAAh3ICPAAIAAAbIh0AAIAAA/QASgFAUABQASgBAQAFQASAFAMAJQAOAKAHAPQAEAHACAKQACAKgBALQAAASgGAQQgGAPgLAKQgLALgPAFQgQAHgSAAQgQgBgOgEg");
	this.shape_3.setTransform(127.8,136.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgiB5QgRgHgMgKQgNgLgGgQQgHgQAAgTIAAhTQAAgTAHgQQAGgQANgLQAMgLARgFQAQgGASgBQATABAQAGQARAFAMALQAMALAHAQQAHAQAAATIAABTQAAATgHAQQgHAQgMALQgMAKgRAHQgQAFgTAAQgSAAgQgFgAgThiQgKADgHAFQgIAFgGAIQgFAHgDAKQgEALAAAPIAABFQAAAPAEALQADAJAFAIQAGAHAIAFQAHAGAKACQAJADAKAAQALAAAJgDQAKgCAHgGQAIgFAGgHQAFgIADgJQAEgLAAgPIAAhFQAAgPgEgLQgDgKgFgHQgGgIgIgFQgHgFgKgDQgJgDgLAAQgKAAgJADg");
	this.shape_4.setTransform(106,136.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhIB6IB0jzIAdAAIh1Dzg");
	this.shape_5.setTransform(86.1,136.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag9B6IAAgWIAwAAIAAjGIgrAAIAAgYIBGAAIAADeIAwAAIAAAWg");
	this.shape_6.setTransform(70.4,136.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhMB8IAAgGIBkh9QALgOAGgQQAFgQgCgNQgCgPgLgIQgFgEgIgDQgIgCgKAAQgKAAgJACQgIADgGAFQgGAFgEAIQgDAIgBALIgZAAQABgQAFgNQAFgMAJgJQAJgJANgEQAOgEARAAQAPAAANAEQANAEAJAIQAJAIAFAKQAFAKABAMQACARgFAQQgJAYgJAKIhPBiIBqAAIAAAag");
	this.shape_7.setTransform(52.9,136.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(41.6,79.5,98.4,80.2), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.button();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,175,54), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.foot1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,469,310), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgrqAdTMAAAg6lMBXVAAAMAAAA6lg");
	this.shape.setTransform(279.5,187.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,559,375), null);


(lib.Symbol45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol46();
	this.instance.parent = this;
	this.instance.setTransform(234.5,155,1,1,0,0,0,234.5,155);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:241},19,cjs.Ease.get(-1)).to({x:247.8},20,cjs.Ease.get(1)).to({x:241.2},20,cjs.Ease.get(-1)).to({x:234.5},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,469,310);


(lib.Symbol43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol44();
	this.instance.parent = this;
	this.instance.setTransform(234.5,155,1,1,0,0,0,234.5,155);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:241},19,cjs.Ease.get(-1)).to({x:247.8},20,cjs.Ease.get(1)).to({x:240.8},21,cjs.Ease.get(-1)).to({x:234.5},19,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,469,310);


(lib.Symbol41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol42();
	this.instance.parent = this;
	this.instance.setTransform(234.5,155,1,1,0,0,0,234.5,155);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:241},19,cjs.Ease.get(-1)).to({x:247.8},20,cjs.Ease.get(1)).to({x:240.8},21,cjs.Ease.get(-1)).to({x:234.5},19,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,469,310);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol23();
	this.instance.parent = this;
	this.instance.setTransform(9.3,17,1,1,0,0,0,9.3,17);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:3.04,scaleY:1.59,x:9.2,alpha:0.41},3).to({regX:9,regY:16.8,scaleX:13.95,scaleY:4.74,x:9.1,y:16.8,alpha:0},16).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-5,28.7,44);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_1 = new cjs.Graphics().p("AqwD2QhaAAhAhGQg/hEAAhhIAAgVQAAhhA/hFQBAhFBaAAIVgAAQBaAABABFQBABFAABhIAAAVQAABhhABEQhABGhaAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_1,x:87.4,y:27}).wait(3));

	// Layer 2
	this.instance = new lib.Symbol22();
	this.instance.parent = this;
	this.instance.setTransform(90.5,26.1,1,1,0,0,0,9.3,17);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(3));

	// Layer 1
	this.instance_1 = new lib.Symbol9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(87.5,27,1,1,0,0,0,87.5,27);

	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.button, null, new cjs.Matrix2D(1,0,0,1,-87.5,-27)).s().p("AtqEOIAAobIbVAAIAAIbg");
	this.shape.setTransform(87.5,27);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{regY:27,scaleX:1,scaleY:1,y:27}}]}).to({state:[{t:this.instance_1,p:{regY:26.9,scaleX:1.034,scaleY:1.034,y:26.9}}]},1).to({state:[{t:this.shape}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,175,54);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 11 copy 3
	this.instance = new lib.Symbol11();
	this.instance.parent = this;
	this.instance.setTransform(151.6,152.1,1,1,0,0,0,15.3,12);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(240).to({_off:false},0).wait(9).to({regX:14.4,scaleX:20.02,scaleY:20.02,x:132.7},0).to({regX:15.3,scaleX:1,scaleY:1,x:151.6,alpha:1},10).wait(61));

	// Symbol 16 copy 3
	this.instance_1 = new lib.Symbol16();
	this.instance_1.parent = this;
	this.instance_1.setTransform(146.3,20.5,1,1,0,0,0,77,20.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(240).to({_off:false},0).wait(25).to({y:10.5},3).to({y:20.5},3).wait(49));

	// Layer 3 copy 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_259 = new cjs.Graphics().p("AJJMHQgogogCg4IAAgDIAAgCQAAg7AqgqQAqgqA7AAQA7AAAqAqQAqAqAAA7IAAACIAAADQgBA4gpAoQgqAqg7AAQg7AAgqgqg");
	var mask_graphics_260 = new cjs.Graphics().p("AFBM0QhmhmgEiNIAAgFIAAgGQAAiVBqhqQBphpCVAAQCVAABpBpQBqBqAACVIAAAGIAAAFQgECNhmBmQhpBqiVAAQiVAAhphqg");
	var mask_graphics_261 = new cjs.Graphics().p("AA4NhQiiijgGjiIAAgIIAAgKQAAjvCoipQCqipDuAAQDuAACpCpQCqCpAADvIAAAKIAAAIQgGDiikCjQipCqjuAAQjuAAiqiqg");
	var mask_graphics_262 = new cjs.Graphics().p("AjPOOQjhjhgJk3IAAgLIAAgOQAAlHDqjpQDojpFIAAQFHAADqDpQDpDpAAFHIAAAOIAAALQgJE3jgDhQjqDplHAAQlIAAjojpg");
	var mask_graphics_263 = new cjs.Graphics().p("AnYO7QkekegLmMIAAgOIAAgSQAAmgEpkpQEpkpGgAAQGiAAEpEpQEpEpAAGgIAAASIAAAOQgLGMkeEeQkpEpmiAAQmgAAkpkpg");
	var mask_graphics_264 = new cjs.Graphics().p("ArgPoQlclcgNnhIAAgRIAAgVQAAn6FplpQFolpH6AAQH7AAFpFpQFoFpAAH6IAAAVIAAARQgMHhlcFcQlpFpn7AAQn6AAlolpg");
	var mask_graphics_265 = new cjs.Graphics().p("AvpQVQmZmZgPo2IAAgUIAAgZQAApUGomoQGpmpJTAAQJUAAGpGpQGoGoAAJUIAAAZIAAAUQgPI2mZGZQmpGppUAAQpTAAmpmpg");
	var mask_graphics_266 = new cjs.Graphics().p("AyVSWQnXnXgRqLIAAgXIAAgdQAAqtHonoQHonoKtAAQKuAAHoHoQHoHoAAKtIAAAdIAAAXQgRKLnXHXQnoHoquAAQqtAAnonog");
	var mask_graphics_267 = new cjs.Graphics().p("A0uUvQoVoUgTrgIAAgaIAAghQAAsGIoooQIoooMGAAQMHAAIoIoQIoIoAAMGIAAAhIAAAaQgTLgoVIUQooIosHAAQsGAAoooog");
	var mask_graphics_268 = new cjs.Graphics().p("A3IXJQpRpSgWs1IAAgdIAAglQAAtgJnpoQJopnNgAAQNhAAJoJnQJnJoAANgIAAAlIAAAdQgWM1pRJSQpoJnthAAQtgAApopng");
	var mask_graphics_269 = new cjs.Graphics().p("A5hZiQqPqPgZuKIAAghIAAgoQAAu6KoqnQKnqoO6AAQO7AAKnKoQKoKnAAO6IAAAoIAAAhQgZOKqPKPQqnKou7AAQu6AAqnqog");
	var mask_graphics_270 = new cjs.Graphics().p("A76b7QrNrMgbvfIAAgkIAAgsQAAwTLornQLnroQTAAQQUAALnLoQLoLnAAQTIAAAsIAAAkQgbPfrNLMQrnLowUAAQwTAArnrog");
	var mask_graphics_271 = new cjs.Graphics().p("A+UeVQsKsLgdw0IAAgmIAAgwQAAxtMnsnQMnsnRtAAQRuAAMnMnQMnMnAARtIAAAwIAAAmQgdQ0sKMLQsnMnxuAAQxtAAsnsng");
	var mask_graphics_272 = new cjs.Graphics().p("EggtAguQtItIgfyJIAAgpIAAg0QAAzGNntnQNntnTGAAQTHAANnNnQNnNnAATGIAAA0IAAApQgfSJtINIQtnNnzHAAQzGAAtntng");
	var mask_graphics_273 = new cjs.Graphics().p("EgjGAjHQuFuFgizeIAAgsIAAg4QAA0gOnumQOmunUgAAQUhAAOmOnQOnOmAAUgIAAA4IAAAsQgiTeuFOFQumOn0hAAQ0gAAumung");
	var mask_graphics_274 = new cjs.Graphics().p("EglgAlhQvCvDgk0zIAAgwIAAg7QAA15PmvnQPnvmV5AAQV6AAPnPmQPmPnAAV5IAAA7IAAAwQgkUzvCPDQvnPm16AAQ15AAvnvmg");
	var mask_graphics_275 = new cjs.Graphics().p("Egn5An6QwAwAgm2IIAAgzIAAg/QAA3TQmwmQQmwmXTAAQXUAAQmQmQQmQmAAXTIAAA/IAAAzQgmWIwAQAQwmQm3UAAQ3TAAwmwmg");
	var mask_graphics_276 = new cjs.Graphics().p("EgqSAqTQw+w9go3dIAAg2IAAhDQAA4sRmxmQRmxmYsAAQYtAARmRmQRmRmAAYsIAABDIAAA2QgoXdw+Q9QxmRm4tAAQ4sAAxmxmg");
	var mask_graphics_277 = new cjs.Graphics().p("EgsrAssQx7x7gr4yIAAg4IAAhHQAA6GSmylQSlymaGAAQaHAASlSmQSmSlAAaGIAABHIAAA4QgrYyx7R7QylSm6HAAQ6GAAylymg");
	var mask_graphics_278 = new cjs.Graphics().p("EgvFAvGQy4y5gt6HIAAg7IAAhLQAA7fTlzmQTmzlbfAAQbgAATmTlQTlTmAAbfIAABLIAAA7QgtaHy4S5QzmTl7gAAQ7fAAzmzlg");
	var mask_graphics_279 = new cjs.Graphics().p("EgxeAxfQz2z2gv7cIAAg/IAAhOQAA85Ul0lQUl0lc5AAQc6AAUlUlQUlUlAAc5IAABOIAAA/Qgvbcz2T2Q0lUl86AAQ85AA0l0lg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(259).to({graphics:mask_graphics_259,x:82.9,y:81.7}).wait(1).to({graphics:mask_graphics_260,x:93.5,y:92.6}).wait(1).to({graphics:mask_graphics_261,x:104.1,y:103.5}).wait(1).to({graphics:mask_graphics_262,x:114.7,y:114.3}).wait(1).to({graphics:mask_graphics_263,x:125.3,y:125.2}).wait(1).to({graphics:mask_graphics_264,x:135.8,y:136.1}).wait(1).to({graphics:mask_graphics_265,x:146.4,y:147}).wait(1).to({graphics:mask_graphics_266,x:147.8,y:149.5}).wait(1).to({graphics:mask_graphics_267,x:148.1,y:146.4}).wait(1).to({graphics:mask_graphics_268,x:148.4,y:143.4}).wait(1).to({graphics:mask_graphics_269,x:148.7,y:140.4}).wait(1).to({graphics:mask_graphics_270,x:148.9,y:137.3}).wait(1).to({graphics:mask_graphics_271,x:149.2,y:134.3}).wait(1).to({graphics:mask_graphics_272,x:149.5,y:131.3}).wait(1).to({graphics:mask_graphics_273,x:149.8,y:128.2}).wait(1).to({graphics:mask_graphics_274,x:150.1,y:125.2}).wait(1).to({graphics:mask_graphics_275,x:150.4,y:122.1}).wait(1).to({graphics:mask_graphics_276,x:150.7,y:119.1}).wait(1).to({graphics:mask_graphics_277,x:151,y:116.1}).wait(1).to({graphics:mask_graphics_278,x:151.3,y:113}).wait(1).to({graphics:mask_graphics_279,x:151.5,y:158.6}).wait(41));

	// t1 copy 3
	this.instance_2 = new lib.Symbol33();
	this.instance_2.parent = this;
	this.instance_2.setTransform(67.3,64.1,1,1,0,0,0,68.7,12);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(259).to({_off:false},0).wait(4).to({x:57.8,y:54.6},3).to({x:67.3,y:64.1},3).wait(45).to({alpha:0},5).wait(1));

	// t2 copy 3
	this.instance_3 = new lib.Symbol13copy();
	this.instance_3.parent = this;
	this.instance_3.setTransform(240.9,64.1,1,1,0,0,0,50.6,12);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(259).to({_off:false},0).wait(4).to({regX:0,regY:0,x:190.3,y:52.1},0).to({regX:50.6,regY:12,x:250.9,y:54.1},3).to({x:240.9,y:64.1},3).wait(45).to({alpha:0},5).wait(1));

	// t1logo copy 3
	this.instance_4 = new lib.Symbol32();
	this.instance_4.parent = this;
	this.instance_4.setTransform(233,145,1,1,0,0,0,58,78);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(259).to({_off:false},0).wait(2).to({x:223.5},4).to({x:233},4).wait(45).to({alpha:0},5).wait(1));

	// t2logo copy 3
	this.instance_5 = new lib.Symbol31();
	this.instance_5.parent = this;
	this.instance_5.setTransform(237,149.5,1,1,0,0,0,54,63.5);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(259).to({_off:false},0).wait(2).to({x:241.8},2).to({x:246.5},2).to({x:237},4).wait(45).to({alpha:0},5).wait(1));

	// Symbol 10 copy 3
	this.instance_6 = new lib.Symbol39();
	this.instance_6.parent = this;
	this.instance_6.setTransform(439.2,123.6,1,1,0,0,0,53.8,44.9);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(266).to({_off:false},0).wait(48).to({alpha:0},5).wait(1));

	// Layer 4 copy 3
	this.instance_7 = new lib.Symbol20();
	this.instance_7.parent = this;
	this.instance_7.setTransform(440.9,205.1,1,1,0,0,0,87.5,27);
	new cjs.ButtonHelper(this.instance_7, 0, 1, 2, false, new lib.Symbol20(), 3);

	this.instance_8 = new lib.stav();
	this.instance_8.parent = this;
	this.instance_8.setTransform(354,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8},{t:this.instance_7}]},240).wait(80));

	// Layer 9 copy 4
	this.instance_9 = new lib.Symbol18();
	this.instance_9.parent = this;
	this.instance_9.setTransform(151.4,149.1,0.283,0.283,0,0,0,57.2,57.2);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(259).to({_off:false},0).to({scaleX:3.08,scaleY:3.08,x:147.4,y:145},7).to({regX:55.8,regY:55.9,scaleX:8.28,scaleY:8.28,x:139.8,y:138},13).to({_off:true},1).wait(40));

	// Symbol 11 copy 2
	this.instance_10 = new lib.Symbol11();
	this.instance_10.parent = this;
	this.instance_10.setTransform(151.6,152.1,1,1,0,0,0,15.3,12);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(160).to({_off:false},0).wait(9).to({regX:14.4,scaleX:20.02,scaleY:20.02,x:132.7},0).to({regX:15.3,scaleX:1,scaleY:1,x:151.6,alpha:1},10).wait(21).to({_off:true},40).wait(80));

	// Symbol 16 copy 2
	this.instance_11 = new lib.Symbol16();
	this.instance_11.parent = this;
	this.instance_11.setTransform(146.3,20.5,1,1,0,0,0,77,20.5);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(160).to({_off:false},0).wait(25).to({y:10.5},3).to({y:20.5},3).wait(48).to({_off:true},1).wait(80));

	// Layer 3 copy 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_179 = new cjs.Graphics().p("AJJMHQgogogCg4IAAgDIAAgCQAAg7AqgqQAqgqA7AAQA7AAAqAqQAqAqAAA7IAAACIAAADQgBA4gpAoQgqAqg7AAQg7AAgqgqg");
	var mask_1_graphics_180 = new cjs.Graphics().p("AFBM0QhmhmgEiNIAAgFIAAgGQAAiVBqhqQBphpCVAAQCVAABpBpQBqBqAACVIAAAGIAAAFQgECNhmBmQhpBqiVAAQiVAAhphqg");
	var mask_1_graphics_181 = new cjs.Graphics().p("AA4NhQiiijgGjiIAAgIIAAgKQAAjvCoipQCqipDuAAQDuAACpCpQCqCpAADvIAAAKIAAAIQgGDiikCjQipCqjuAAQjuAAiqiqg");
	var mask_1_graphics_182 = new cjs.Graphics().p("AjPOOQjhjhgJk3IAAgLIAAgOQAAlHDqjpQDojpFIAAQFHAADqDpQDpDpAAFHIAAAOIAAALQgJE3jgDhQjqDplHAAQlIAAjojpg");
	var mask_1_graphics_183 = new cjs.Graphics().p("AnYO7QkekegLmMIAAgOIAAgSQAAmgEpkpQEpkpGgAAQGiAAEpEpQEpEpAAGgIAAASIAAAOQgLGMkeEeQkpEpmiAAQmgAAkpkpg");
	var mask_1_graphics_184 = new cjs.Graphics().p("ArgPoQlclcgNnhIAAgRIAAgVQAAn6FplpQFolpH6AAQH7AAFpFpQFoFpAAH6IAAAVIAAARQgMHhlcFcQlpFpn7AAQn6AAlolpg");
	var mask_1_graphics_185 = new cjs.Graphics().p("AvpQVQmZmZgPo2IAAgUIAAgZQAApUGomoQGpmpJTAAQJUAAGpGpQGoGoAAJUIAAAZIAAAUQgPI2mZGZQmpGppUAAQpTAAmpmpg");
	var mask_1_graphics_186 = new cjs.Graphics().p("AyVSWQnXnXgRqLIAAgXIAAgdQAAqtHonoQHonoKtAAQKuAAHoHoQHoHoAAKtIAAAdIAAAXQgRKLnXHXQnoHoquAAQqtAAnonog");
	var mask_1_graphics_187 = new cjs.Graphics().p("A0uUvQoVoUgTrgIAAgaIAAghQAAsGIoooQIoooMGAAQMHAAIoIoQIoIoAAMGIAAAhIAAAaQgTLgoVIUQooIosHAAQsGAAoooog");
	var mask_1_graphics_188 = new cjs.Graphics().p("A3IXJQpRpSgWs1IAAgdIAAglQAAtgJnpoQJopnNgAAQNhAAJoJnQJnJoAANgIAAAlIAAAdQgWM1pRJSQpoJnthAAQtgAApopng");
	var mask_1_graphics_189 = new cjs.Graphics().p("A5hZiQqPqPgZuKIAAghIAAgoQAAu6KoqnQKnqoO6AAQO7AAKnKoQKoKnAAO6IAAAoIAAAhQgZOKqPKPQqnKou7AAQu6AAqnqog");
	var mask_1_graphics_190 = new cjs.Graphics().p("A76b7QrNrMgbvfIAAgkIAAgsQAAwTLornQLnroQTAAQQUAALnLoQLoLnAAQTIAAAsIAAAkQgbPfrNLMQrnLowUAAQwTAArnrog");
	var mask_1_graphics_191 = new cjs.Graphics().p("A+UeVQsKsLgdw0IAAgmIAAgwQAAxtMnsnQMnsnRtAAQRuAAMnMnQMnMnAARtIAAAwIAAAmQgdQ0sKMLQsnMnxuAAQxtAAsnsng");
	var mask_1_graphics_192 = new cjs.Graphics().p("EggtAguQtItIgfyJIAAgpIAAg0QAAzGNntnQNntnTGAAQTHAANnNnQNnNnAATGIAAA0IAAApQgfSJtINIQtnNnzHAAQzGAAtntng");
	var mask_1_graphics_193 = new cjs.Graphics().p("EgjGAjHQuFuFgizeIAAgsIAAg4QAA0gOnumQOmunUgAAQUhAAOmOnQOnOmAAUgIAAA4IAAAsQgiTeuFOFQumOn0hAAQ0gAAumung");
	var mask_1_graphics_194 = new cjs.Graphics().p("EglgAlhQvCvDgk0zIAAgwIAAg7QAA15PmvnQPnvmV5AAQV6AAPnPmQPmPnAAV5IAAA7IAAAwQgkUzvCPDQvnPm16AAQ15AAvnvmg");
	var mask_1_graphics_195 = new cjs.Graphics().p("Egn5An6QwAwAgm2IIAAgzIAAg/QAA3TQmwmQQmwmXTAAQXUAAQmQmQQmQmAAXTIAAA/IAAAzQgmWIwAQAQwmQm3UAAQ3TAAwmwmg");
	var mask_1_graphics_196 = new cjs.Graphics().p("EgqSAqTQw+w9go3dIAAg2IAAhDQAA4sRmxmQRmxmYsAAQYtAARmRmQRmRmAAYsIAABDIAAA2QgoXdw+Q9QxmRm4tAAQ4sAAxmxmg");
	var mask_1_graphics_197 = new cjs.Graphics().p("EgsrAssQx7x7gr4yIAAg4IAAhHQAA6GSmylQSlymaGAAQaHAASlSmQSmSlAAaGIAABHIAAA4QgrYyx7R7QylSm6HAAQ6GAAylymg");
	var mask_1_graphics_198 = new cjs.Graphics().p("EgvFAvGQy4y5gt6HIAAg7IAAhLQAA7fTlzmQTmzlbfAAQbgAATmTlQTlTmAAbfIAABLIAAA7QgtaHy4S5QzmTl7gAAQ7fAAzmzlg");
	var mask_1_graphics_199 = new cjs.Graphics().p("EgxeAxfQz2z2gv7cIAAg/IAAhOQAA85Ul0lQUl0lc5AAQc6AAUlUlQUlUlAAc5IAABOIAAA/Qgvbcz2T2Q0lUl86AAQ85AA0l0lg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(179).to({graphics:mask_1_graphics_179,x:82.9,y:81.7}).wait(1).to({graphics:mask_1_graphics_180,x:93.5,y:92.6}).wait(1).to({graphics:mask_1_graphics_181,x:104.1,y:103.5}).wait(1).to({graphics:mask_1_graphics_182,x:114.7,y:114.3}).wait(1).to({graphics:mask_1_graphics_183,x:125.3,y:125.2}).wait(1).to({graphics:mask_1_graphics_184,x:135.8,y:136.1}).wait(1).to({graphics:mask_1_graphics_185,x:146.4,y:147}).wait(1).to({graphics:mask_1_graphics_186,x:147.8,y:149.5}).wait(1).to({graphics:mask_1_graphics_187,x:148.1,y:146.4}).wait(1).to({graphics:mask_1_graphics_188,x:148.4,y:143.4}).wait(1).to({graphics:mask_1_graphics_189,x:148.7,y:140.4}).wait(1).to({graphics:mask_1_graphics_190,x:148.9,y:137.3}).wait(1).to({graphics:mask_1_graphics_191,x:149.2,y:134.3}).wait(1).to({graphics:mask_1_graphics_192,x:149.5,y:131.3}).wait(1).to({graphics:mask_1_graphics_193,x:149.8,y:128.2}).wait(1).to({graphics:mask_1_graphics_194,x:150.1,y:125.2}).wait(1).to({graphics:mask_1_graphics_195,x:150.4,y:122.1}).wait(1).to({graphics:mask_1_graphics_196,x:150.7,y:119.1}).wait(1).to({graphics:mask_1_graphics_197,x:151,y:116.1}).wait(1).to({graphics:mask_1_graphics_198,x:151.3,y:113}).wait(1).to({graphics:mask_1_graphics_199,x:151.5,y:158.6}).wait(121));

	// t1 copy 2
	this.instance_12 = new lib.Symbol30();
	this.instance_12.parent = this;
	this.instance_12.setTransform(64.2,65.9,1,1,0,0,0,52.5,12);
	this.instance_12._off = true;

	var maskedShapeInstanceList = [this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(179).to({_off:false},0).wait(4).to({x:54.7,y:56.4},3).to({x:64.2,y:65.9},3).wait(50).to({_off:true},1).wait(80));

	// t2 copy 2
	this.instance_13 = new lib.Symbol29();
	this.instance_13.parent = this;
	this.instance_13.setTransform(234.3,65,1,1,0,0,0,39.6,12);
	this.instance_13._off = true;

	var maskedShapeInstanceList = [this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(179).to({_off:false},0).wait(4).to({x:243.8,y:55.5},3).to({x:234.3,y:65},3).wait(45).to({alpha:0},5).to({_off:true},1).wait(80));

	// t1logo copy 2
	this.instance_14 = new lib.Symbol28();
	this.instance_14.parent = this;
	this.instance_14.setTransform(63,147,1,1,0,0,0,58,78);
	this.instance_14._off = true;

	var maskedShapeInstanceList = [this.instance_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(179).to({_off:false},0).wait(2).to({x:53.5},4).to({x:63},4).wait(45).to({alpha:0},5).to({_off:true},1).wait(80));

	// t2logo copy 2
	this.instance_15 = new lib.Symbol36();
	this.instance_15.parent = this;
	this.instance_15.setTransform(235,153.5,1,1,0,0,0,54,63.5);
	this.instance_15._off = true;

	var maskedShapeInstanceList = [this.instance_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(179).to({_off:false},0).wait(2).to({x:244.5},4).to({x:235},4).wait(45).to({alpha:0},5).to({_off:true},1).wait(80));

	// Symbol 10 copy 2
	this.instance_16 = new lib.Symbol38();
	this.instance_16.parent = this;
	this.instance_16.setTransform(439.2,124.5,1,1,0,0,0,53.8,44.9);
	this.instance_16._off = true;

	var maskedShapeInstanceList = [this.instance_16];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(186).to({_off:false},0).wait(48).to({alpha:0},5).to({_off:true},1).wait(80));

	// Layer 4 copy 2
	this.instance_17 = new lib.Symbol20();
	this.instance_17.parent = this;
	this.instance_17.setTransform(440.9,205.1,1,1,0,0,0,87.5,27);
	new cjs.ButtonHelper(this.instance_17, 0, 1, 2, false, new lib.Symbol20(), 3);

	this.instance_18 = new lib.stav();
	this.instance_18.parent = this;
	this.instance_18.setTransform(354,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_18},{t:this.instance_17}]},160).to({state:[]},80).wait(80));

	// Layer 9 copy 3
	this.instance_19 = new lib.Symbol18();
	this.instance_19.parent = this;
	this.instance_19.setTransform(151.4,149.1,0.283,0.283,0,0,0,57.2,57.2);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(179).to({_off:false},0).to({scaleX:3.08,scaleY:3.08,x:147.4,y:145},7).to({regX:55.8,regY:55.9,scaleX:8.28,scaleY:8.28,x:139.8,y:138},13).to({_off:true},1).wait(120));

	// Symbol 11 copy
	this.instance_20 = new lib.Symbol11();
	this.instance_20.parent = this;
	this.instance_20.setTransform(151.6,152.1,1,1,0,0,0,15.3,12);
	this.instance_20.alpha = 0;
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(80).to({_off:false},0).wait(9).to({regX:14.4,scaleX:20.02,scaleY:20.02,x:132.7},0).to({regX:15.3,scaleX:1,scaleY:1,x:151.6,alpha:1},10).wait(21).to({_off:true},40).wait(160));

	// Symbol 16 copy
	this.instance_21 = new lib.Symbol16();
	this.instance_21.parent = this;
	this.instance_21.setTransform(146.3,20.5,1,1,0,0,0,77,20.5);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(80).to({_off:false},0).wait(25).to({y:10.5},3).to({y:20.5},3).wait(48).to({_off:true},1).wait(160));

	// Layer 3 copy (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_99 = new cjs.Graphics().p("AJJMHQgogogCg4IAAgDIAAgCQAAg7AqgqQAqgqA7AAQA7AAAqAqQAqAqAAA7IAAACIAAADQgBA4gpAoQgqAqg7AAQg7AAgqgqg");
	var mask_2_graphics_100 = new cjs.Graphics().p("AFBM0QhmhmgEiNIAAgFIAAgGQAAiVBqhqQBphpCVAAQCVAABpBpQBqBqAACVIAAAGIAAAFQgECNhmBmQhpBqiVAAQiVAAhphqg");
	var mask_2_graphics_101 = new cjs.Graphics().p("AA4NhQiiijgGjiIAAgIIAAgKQAAjvCoipQCqipDuAAQDuAACpCpQCqCpAADvIAAAKIAAAIQgGDiikCjQipCqjuAAQjuAAiqiqg");
	var mask_2_graphics_102 = new cjs.Graphics().p("AjPOOQjhjhgJk3IAAgLIAAgOQAAlHDqjpQDojpFIAAQFHAADqDpQDpDpAAFHIAAAOIAAALQgJE3jgDhQjqDplHAAQlIAAjojpg");
	var mask_2_graphics_103 = new cjs.Graphics().p("AnYO7QkekegLmMIAAgOIAAgSQAAmgEpkpQEpkpGgAAQGiAAEpEpQEpEpAAGgIAAASIAAAOQgLGMkeEeQkpEpmiAAQmgAAkpkpg");
	var mask_2_graphics_104 = new cjs.Graphics().p("ArgPoQlclcgNnhIAAgRIAAgVQAAn6FplpQFolpH6AAQH7AAFpFpQFoFpAAH6IAAAVIAAARQgMHhlcFcQlpFpn7AAQn6AAlolpg");
	var mask_2_graphics_105 = new cjs.Graphics().p("AvpQVQmZmZgPo2IAAgUIAAgZQAApUGomoQGpmpJTAAQJUAAGpGpQGoGoAAJUIAAAZIAAAUQgPI2mZGZQmpGppUAAQpTAAmpmpg");
	var mask_2_graphics_106 = new cjs.Graphics().p("AyVSWQnXnXgRqLIAAgXIAAgdQAAqtHonoQHonoKtAAQKuAAHoHoQHoHoAAKtIAAAdIAAAXQgRKLnXHXQnoHoquAAQqtAAnonog");
	var mask_2_graphics_107 = new cjs.Graphics().p("A0uUvQoVoUgTrgIAAgaIAAghQAAsGIoooQIoooMGAAQMHAAIoIoQIoIoAAMGIAAAhIAAAaQgTLgoVIUQooIosHAAQsGAAoooog");
	var mask_2_graphics_108 = new cjs.Graphics().p("A3IXJQpRpSgWs1IAAgdIAAglQAAtgJnpoQJopnNgAAQNhAAJoJnQJnJoAANgIAAAlIAAAdQgWM1pRJSQpoJnthAAQtgAApopng");
	var mask_2_graphics_109 = new cjs.Graphics().p("A5hZiQqPqPgZuKIAAghIAAgoQAAu6KoqnQKnqoO6AAQO7AAKnKoQKoKnAAO6IAAAoIAAAhQgZOKqPKPQqnKou7AAQu6AAqnqog");
	var mask_2_graphics_110 = new cjs.Graphics().p("A76b7QrNrMgbvfIAAgkIAAgsQAAwTLornQLnroQTAAQQUAALnLoQLoLnAAQTIAAAsIAAAkQgbPfrNLMQrnLowUAAQwTAArnrog");
	var mask_2_graphics_111 = new cjs.Graphics().p("A+UeVQsKsLgdw0IAAgmIAAgwQAAxtMnsnQMnsnRtAAQRuAAMnMnQMnMnAARtIAAAwIAAAmQgdQ0sKMLQsnMnxuAAQxtAAsnsng");
	var mask_2_graphics_112 = new cjs.Graphics().p("EggtAguQtItIgfyJIAAgpIAAg0QAAzGNntnQNntnTGAAQTHAANnNnQNnNnAATGIAAA0IAAApQgfSJtINIQtnNnzHAAQzGAAtntng");
	var mask_2_graphics_113 = new cjs.Graphics().p("EgjGAjHQuFuFgizeIAAgsIAAg4QAA0gOnumQOmunUgAAQUhAAOmOnQOnOmAAUgIAAA4IAAAsQgiTeuFOFQumOn0hAAQ0gAAumung");
	var mask_2_graphics_114 = new cjs.Graphics().p("EglgAlhQvCvDgk0zIAAgwIAAg7QAA15PmvnQPnvmV5AAQV6AAPnPmQPmPnAAV5IAAA7IAAAwQgkUzvCPDQvnPm16AAQ15AAvnvmg");
	var mask_2_graphics_115 = new cjs.Graphics().p("Egn5An6QwAwAgm2IIAAgzIAAg/QAA3TQmwmQQmwmXTAAQXUAAQmQmQQmQmAAXTIAAA/IAAAzQgmWIwAQAQwmQm3UAAQ3TAAwmwmg");
	var mask_2_graphics_116 = new cjs.Graphics().p("EgqSAqTQw+w9go3dIAAg2IAAhDQAA4sRmxmQRmxmYsAAQYtAARmRmQRmRmAAYsIAABDIAAA2QgoXdw+Q9QxmRm4tAAQ4sAAxmxmg");
	var mask_2_graphics_117 = new cjs.Graphics().p("EgsrAssQx7x7gr4yIAAg4IAAhHQAA6GSmylQSlymaGAAQaHAASlSmQSmSlAAaGIAABHIAAA4QgrYyx7R7QylSm6HAAQ6GAAylymg");
	var mask_2_graphics_118 = new cjs.Graphics().p("EgvFAvGQy4y5gt6HIAAg7IAAhLQAA7fTlzmQTmzlbfAAQbgAATmTlQTlTmAAbfIAABLIAAA7QgtaHy4S5QzmTl7gAAQ7fAAzmzlg");
	var mask_2_graphics_119 = new cjs.Graphics().p("EgxeAxfQz2z2gv7cIAAg/IAAhOQAA85Ul0lQUl0lc5AAQc6AAUlUlQUlUlAAc5IAABOIAAA/Qgvbcz2T2Q0lUl86AAQ85AA0l0lg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(99).to({graphics:mask_2_graphics_99,x:82.9,y:81.7}).wait(1).to({graphics:mask_2_graphics_100,x:93.5,y:92.6}).wait(1).to({graphics:mask_2_graphics_101,x:104.1,y:103.5}).wait(1).to({graphics:mask_2_graphics_102,x:114.7,y:114.3}).wait(1).to({graphics:mask_2_graphics_103,x:125.3,y:125.2}).wait(1).to({graphics:mask_2_graphics_104,x:135.8,y:136.1}).wait(1).to({graphics:mask_2_graphics_105,x:146.4,y:147}).wait(1).to({graphics:mask_2_graphics_106,x:147.8,y:149.5}).wait(1).to({graphics:mask_2_graphics_107,x:148.1,y:146.4}).wait(1).to({graphics:mask_2_graphics_108,x:148.4,y:143.4}).wait(1).to({graphics:mask_2_graphics_109,x:148.7,y:140.4}).wait(1).to({graphics:mask_2_graphics_110,x:148.9,y:137.3}).wait(1).to({graphics:mask_2_graphics_111,x:149.2,y:134.3}).wait(1).to({graphics:mask_2_graphics_112,x:149.5,y:131.3}).wait(1).to({graphics:mask_2_graphics_113,x:149.8,y:128.2}).wait(1).to({graphics:mask_2_graphics_114,x:150.1,y:125.2}).wait(1).to({graphics:mask_2_graphics_115,x:150.4,y:122.1}).wait(1).to({graphics:mask_2_graphics_116,x:150.7,y:119.1}).wait(1).to({graphics:mask_2_graphics_117,x:151,y:116.1}).wait(1).to({graphics:mask_2_graphics_118,x:151.3,y:113}).wait(1).to({graphics:mask_2_graphics_119,x:151.5,y:158.6}).wait(201));

	// t1 copy
	this.instance_22 = new lib.Symbol27();
	this.instance_22.parent = this;
	this.instance_22.setTransform(60.5,67.8,1,1,0,0,0,44.4,12);
	this.instance_22._off = true;

	var maskedShapeInstanceList = [this.instance_22];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(99).to({_off:false},0).wait(4).to({x:51,y:58.3},3).to({x:60.5,y:67.8},3).wait(45).to({alpha:0},5).to({_off:true},1).wait(160));

	// t2 copy
	this.instance_23 = new lib.Symbol26();
	this.instance_23.parent = this;
	this.instance_23.setTransform(177.9,46.4);
	this.instance_23._off = true;

	var maskedShapeInstanceList = [this.instance_23];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(99).to({_off:false},0).wait(4).to({regX:62.5,regY:23,x:240.4,y:69.4},0).to({x:249.9,y:59.9},3).to({x:240.4,y:69.4},3).wait(45).to({alpha:0},5).to({_off:true},1).wait(160));

	// t1logo copy
	this.instance_24 = new lib.Symbol35();
	this.instance_24.parent = this;
	this.instance_24.setTransform(60,154,1,1,0,0,0,58,78);
	this.instance_24._off = true;

	var maskedShapeInstanceList = [this.instance_24];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(99).to({_off:false},0).wait(2).to({x:50.5},4).to({x:60},4).wait(45).to({alpha:0},5).to({_off:true},1).wait(160));

	// t2logo copy
	this.instance_25 = new lib.Symbol34();
	this.instance_25.parent = this;
	this.instance_25.setTransform(239,154.5,1,1,0,0,0,54,63.5);
	this.instance_25._off = true;

	var maskedShapeInstanceList = [this.instance_25];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(99).to({_off:false},0).wait(2).to({x:248.5},4).to({x:239},4).wait(45).to({alpha:0},5).to({_off:true},1).wait(160));

	// Symbol 10 copy
	this.instance_26 = new lib.Symbol37();
	this.instance_26.parent = this;
	this.instance_26.setTransform(440.2,125.7,1,1,0,0,0,53.8,44.9);
	this.instance_26._off = true;

	var maskedShapeInstanceList = [this.instance_26];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(106).to({_off:false},0).wait(48).to({alpha:0},5).to({_off:true},1).wait(160));

	// Layer 4 copy
	this.instance_27 = new lib.Symbol20();
	this.instance_27.parent = this;
	this.instance_27.setTransform(440.9,205.1,1,1,0,0,0,87.5,27);
	new cjs.ButtonHelper(this.instance_27, 0, 1, 2, false, new lib.Symbol20(), 3);

	this.instance_28 = new lib.stav();
	this.instance_28.parent = this;
	this.instance_28.setTransform(354,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_28},{t:this.instance_27}]},80).to({state:[]},80).wait(160));

	// Layer 9 copy 2
	this.instance_29 = new lib.Symbol18();
	this.instance_29.parent = this;
	this.instance_29.setTransform(151.4,149.1,0.283,0.283,0,0,0,57.2,57.2);
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(99).to({_off:false},0).to({scaleX:3.08,scaleY:3.08,x:147.4,y:145},7).to({regX:55.8,regY:55.9,scaleX:8.28,scaleY:8.28,x:139.8,y:138},13).to({_off:true},1).wait(200));

	// Symbol 11
	this.instance_30 = new lib.Symbol11();
	this.instance_30.parent = this;
	this.instance_30.setTransform(151.6,152.1,1,1,0,0,0,15.3,12);
	this.instance_30.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(9).to({regX:14.4,scaleX:20.02,scaleY:20.02,x:132.7},0).to({regX:15.3,scaleX:1,scaleY:1,x:151.6,alpha:1},10).wait(55).to({alpha:0},5).to({_off:true},1).wait(240));

	// Symbol 16
	this.instance_31 = new lib.Symbol16();
	this.instance_31.parent = this;
	this.instance_31.setTransform(146.3,20.5,1,1,0,0,0,77,20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(25).to({y:10.5},3).to({y:20.5},3).wait(48).to({_off:true},1).wait(240));

	// Layer 3 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_19 = new cjs.Graphics().p("AJJMHQgogogCg4IAAgDIAAgCQAAg7AqgqQAqgqA7AAQA7AAAqAqQAqAqAAA7IAAACIAAADQgBA4gpAoQgqAqg7AAQg7AAgqgqg");
	var mask_3_graphics_20 = new cjs.Graphics().p("AFBM0QhmhmgEiNIAAgFIAAgGQAAiVBqhqQBphpCVAAQCVAABpBpQBqBqAACVIAAAGIAAAFQgECNhmBmQhpBqiVAAQiVAAhphqg");
	var mask_3_graphics_21 = new cjs.Graphics().p("AA4NhQiiijgGjiIAAgIIAAgKQAAjvCoipQCqipDuAAQDuAACpCpQCqCpAADvIAAAKIAAAIQgGDiikCjQipCqjuAAQjuAAiqiqg");
	var mask_3_graphics_22 = new cjs.Graphics().p("AjPOOQjhjhgJk3IAAgLIAAgOQAAlHDqjpQDojpFIAAQFHAADqDpQDpDpAAFHIAAAOIAAALQgJE3jgDhQjqDplHAAQlIAAjojpg");
	var mask_3_graphics_23 = new cjs.Graphics().p("AnYO7QkekegLmMIAAgOIAAgSQAAmgEpkpQEpkpGgAAQGiAAEpEpQEpEpAAGgIAAASIAAAOQgLGMkeEeQkpEpmiAAQmgAAkpkpg");
	var mask_3_graphics_24 = new cjs.Graphics().p("ArgPoQlclcgNnhIAAgRIAAgVQAAn6FplpQFolpH6AAQH7AAFpFpQFoFpAAH6IAAAVIAAARQgMHhlcFcQlpFpn7AAQn6AAlolpg");
	var mask_3_graphics_25 = new cjs.Graphics().p("AvpQVQmZmZgPo2IAAgUIAAgZQAApUGomoQGpmpJTAAQJUAAGpGpQGoGoAAJUIAAAZIAAAUQgPI2mZGZQmpGppUAAQpTAAmpmpg");
	var mask_3_graphics_26 = new cjs.Graphics().p("AyVSWQnXnXgRqLIAAgXIAAgdQAAqtHonoQHonoKtAAQKuAAHoHoQHoHoAAKtIAAAdIAAAXQgRKLnXHXQnoHoquAAQqtAAnonog");
	var mask_3_graphics_27 = new cjs.Graphics().p("A0uUvQoVoUgTrgIAAgaIAAghQAAsGIoooQIoooMGAAQMHAAIoIoQIoIoAAMGIAAAhIAAAaQgTLgoVIUQooIosHAAQsGAAoooog");
	var mask_3_graphics_28 = new cjs.Graphics().p("A3IXJQpRpSgWs1IAAgdIAAglQAAtgJnpoQJopnNgAAQNhAAJoJnQJnJoAANgIAAAlIAAAdQgWM1pRJSQpoJnthAAQtgAApopng");
	var mask_3_graphics_29 = new cjs.Graphics().p("A5hZiQqPqPgZuKIAAghIAAgoQAAu6KoqnQKnqoO6AAQO7AAKnKoQKoKnAAO6IAAAoIAAAhQgZOKqPKPQqnKou7AAQu6AAqnqog");
	var mask_3_graphics_30 = new cjs.Graphics().p("A76b7QrNrMgbvfIAAgkIAAgsQAAwTLornQLnroQTAAQQUAALnLoQLoLnAAQTIAAAsIAAAkQgbPfrNLMQrnLowUAAQwTAArnrog");
	var mask_3_graphics_31 = new cjs.Graphics().p("A+UeVQsKsLgdw0IAAgmIAAgwQAAxtMnsnQMnsnRtAAQRuAAMnMnQMnMnAARtIAAAwIAAAmQgdQ0sKMLQsnMnxuAAQxtAAsnsng");
	var mask_3_graphics_32 = new cjs.Graphics().p("EggtAguQtItIgfyJIAAgpIAAg0QAAzGNntnQNntnTGAAQTHAANnNnQNnNnAATGIAAA0IAAApQgfSJtINIQtnNnzHAAQzGAAtntng");
	var mask_3_graphics_33 = new cjs.Graphics().p("EgjGAjHQuFuFgizeIAAgsIAAg4QAA0gOnumQOmunUgAAQUhAAOmOnQOnOmAAUgIAAA4IAAAsQgiTeuFOFQumOn0hAAQ0gAAumung");
	var mask_3_graphics_34 = new cjs.Graphics().p("EglgAlhQvCvDgk0zIAAgwIAAg7QAA15PmvnQPnvmV5AAQV6AAPnPmQPmPnAAV5IAAA7IAAAwQgkUzvCPDQvnPm16AAQ15AAvnvmg");
	var mask_3_graphics_35 = new cjs.Graphics().p("Egn5An6QwAwAgm2IIAAgzIAAg/QAA3TQmwmQQmwmXTAAQXUAAQmQmQQmQmAAXTIAAA/IAAAzQgmWIwAQAQwmQm3UAAQ3TAAwmwmg");
	var mask_3_graphics_36 = new cjs.Graphics().p("EgqSAqTQw+w9go3dIAAg2IAAhDQAA4sRmxmQRmxmYsAAQYtAARmRmQRmRmAAYsIAABDIAAA2QgoXdw+Q9QxmRm4tAAQ4sAAxmxmg");
	var mask_3_graphics_37 = new cjs.Graphics().p("EgsrAssQx7x7gr4yIAAg4IAAhHQAA6GSmylQSlymaGAAQaHAASlSmQSmSlAAaGIAABHIAAA4QgrYyx7R7QylSm6HAAQ6GAAylymg");
	var mask_3_graphics_38 = new cjs.Graphics().p("EgvFAvGQy4y5gt6HIAAg7IAAhLQAA7fTlzmQTmzlbfAAQbgAATmTlQTlTmAAbfIAABLIAAA7QgtaHy4S5QzmTl7gAAQ7fAAzmzlg");
	var mask_3_graphics_39 = new cjs.Graphics().p("EgxeAxfQz2z2gv7cIAAg/IAAhOQAA85Ul0lQUl0lc5AAQc6AAUlUlQUlUlAAc5IAABOIAAA/Qgvbcz2T2Q0lUl86AAQ85AA0l0lg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(19).to({graphics:mask_3_graphics_19,x:82.9,y:81.7}).wait(1).to({graphics:mask_3_graphics_20,x:93.5,y:92.6}).wait(1).to({graphics:mask_3_graphics_21,x:104.1,y:103.5}).wait(1).to({graphics:mask_3_graphics_22,x:114.7,y:114.3}).wait(1).to({graphics:mask_3_graphics_23,x:125.3,y:125.2}).wait(1).to({graphics:mask_3_graphics_24,x:135.8,y:136.1}).wait(1).to({graphics:mask_3_graphics_25,x:146.4,y:147}).wait(1).to({graphics:mask_3_graphics_26,x:147.8,y:149.5}).wait(1).to({graphics:mask_3_graphics_27,x:148.1,y:146.4}).wait(1).to({graphics:mask_3_graphics_28,x:148.4,y:143.4}).wait(1).to({graphics:mask_3_graphics_29,x:148.7,y:140.4}).wait(1).to({graphics:mask_3_graphics_30,x:148.9,y:137.3}).wait(1).to({graphics:mask_3_graphics_31,x:149.2,y:134.3}).wait(1).to({graphics:mask_3_graphics_32,x:149.5,y:131.3}).wait(1).to({graphics:mask_3_graphics_33,x:149.8,y:128.2}).wait(1).to({graphics:mask_3_graphics_34,x:150.1,y:125.2}).wait(1).to({graphics:mask_3_graphics_35,x:150.4,y:122.1}).wait(1).to({graphics:mask_3_graphics_36,x:150.7,y:119.1}).wait(1).to({graphics:mask_3_graphics_37,x:151,y:116.1}).wait(1).to({graphics:mask_3_graphics_38,x:151.3,y:113}).wait(1).to({graphics:mask_3_graphics_39,x:151.5,y:158.6}).wait(281));

	// t1
	this.instance_32 = new lib.Symbol15();
	this.instance_32.parent = this;
	this.instance_32.setTransform(63.6,64.1,1,1,0,0,0,63.6,12);
	this.instance_32._off = true;

	var maskedShapeInstanceList = [this.instance_32];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(19).to({_off:false},0).wait(4).to({x:53.6,y:54.1},3).to({x:63.6,y:64.1},3).wait(45).to({alpha:0},5).to({_off:true},1).wait(240));

	// t2
	this.instance_33 = new lib.Symbol13();
	this.instance_33.parent = this;
	this.instance_33.setTransform(240.9,64.1,1,1,0,0,0,50.6,12);
	this.instance_33._off = true;

	var maskedShapeInstanceList = [this.instance_33];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(19).to({_off:false},0).wait(4).to({x:250.9,y:54.1},3).to({x:240.9,y:64.1},3).wait(45).to({alpha:0},5).to({_off:true},1).wait(240));

	// t1logo
	this.instance_34 = new lib.Symbol14();
	this.instance_34.parent = this;
	this.instance_34.setTransform(62.3,155.9,1,1,0,0,0,52,69.9);
	this.instance_34._off = true;

	var maskedShapeInstanceList = [this.instance_34];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(19).to({_off:false},0).wait(2).to({x:52.3},4).to({x:62.3},4).wait(45).to({alpha:0},5).to({_off:true},1).wait(240));

	// t2logo
	this.instance_35 = new lib.Symbol12();
	this.instance_35.parent = this;
	this.instance_35.setTransform(242.3,159.5,1,1,0,0,0,54,63.5);
	this.instance_35._off = true;

	var maskedShapeInstanceList = [this.instance_35];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(19).to({_off:false},0).wait(2).to({x:252.3},4).to({x:242.3},4).wait(45).to({alpha:0},5).to({_off:true},1).wait(240));

	// Symbol 10
	this.instance_36 = new lib.Symbol10();
	this.instance_36.parent = this;
	this.instance_36.setTransform(439.8,119.5,1,1,0,0,0,87.5,112.5);
	this.instance_36._off = true;

	var maskedShapeInstanceList = [this.instance_36];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(26).to({_off:false},0).wait(48).to({alpha:0},5).to({_off:true},1).wait(240));

	// Layer 4
	this.instance_37 = new lib.Symbol20();
	this.instance_37.parent = this;
	this.instance_37.setTransform(440.9,205.1,1,1,0,0,0,87.5,27);
	new cjs.ButtonHelper(this.instance_37, 0, 1, 2, false, new lib.Symbol20(), 3);

	this.instance_38 = new lib.stav();
	this.instance_38.parent = this;
	this.instance_38.setTransform(354,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_38},{t:this.instance_37}]}).to({state:[]},80).wait(240));

	// Layer 9 copy
	this.instance_39 = new lib.Symbol18();
	this.instance_39.parent = this;
	this.instance_39.setTransform(151.4,149.1,0.283,0.283,0,0,0,57.2,57.2);
	this.instance_39._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(19).to({_off:false},0).to({scaleX:3.08,scaleY:3.08,x:147.4,y:145},7).to({regX:55.8,regY:55.9,scaleX:8.28,scaleY:8.28,x:139.8,y:138},13).to({_off:true},1).wait(280));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(69.3,0,462.1,233);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol6();
	this.instance.parent = this;
	this.instance.setTransform(234.5,155,1,1,0,0,0,234.5,155);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:238.6},16,cjs.Ease.get(-1)).to({x:244.5},23,cjs.Ease.get(1)).to({x:239},22,cjs.Ease.get(-1)).to({x:234.5},18,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,469,310);


(lib.Symbol40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,255,0,0)").ss(1,1,1).p("Al8k3IL5AAIAAJuIr5AAg");
	this.shape.setTransform(-390.5,216.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCB522").s().p("Al9E3IAApuIL6AAIAAJug");
	this.shape_1.setTransform(-390.5,216.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(320));

	// Layer 4
	this.instance = new lib.Symbol45();
	this.instance.parent = this;
	this.instance.setTransform(234.5,156,1,1,0,0,0,234.5,155);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(240).to({_off:false},0).to({alpha:1},4).wait(71).to({alpha:0},4).wait(1));

	// Layer 3
	this.instance_1 = new lib.Symbol43();
	this.instance_1.parent = this;
	this.instance_1.setTransform(234.5,156,1,1,0,0,0,234.5,155);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(160).to({_off:false},0).to({alpha:1},4).wait(71).to({alpha:0},4).to({_off:true},1).wait(80));

	// Layer 2
	this.instance_2 = new lib.Symbol41();
	this.instance_2.parent = this;
	this.instance_2.setTransform(234.5,155,1,1,0,0,0,234.5,155);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(80).to({_off:false},0).to({alpha:1},4).wait(71).to({alpha:0},4).to({_off:true},1).wait(160));

	// Layer 1
	this.instance_3 = new lib.Symbol5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(234.5,155,1,1,0,0,0,234.5,155);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:1},4).wait(70).to({alpha:0},5).to({_off:true},1).wait(240));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-429.6,0,898.7,310);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgiIAYTMgAygwvMBKNAAUMgIwAwlg");
	mask.setTransform(251.5,152.5);

	// Layer 4
	this.instance = new lib.Symbol4();
	this.instance.parent = this;
	this.instance.setTransform(251.5,162.6,1,1,0,0,0,279.4,187.5);
	this.instance.alpha = 0.59;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol40();
	this.instance_1.parent = this;
	this.instance_1.setTransform(314.5,155,1,1,0,0,0,234.5,155);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(28,-3.9,475,313), null);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 5
	this.instance = new lib.Symbol17();
	this.instance.parent = this;
	this.instance.setTransform(321.2,149.4,1.101,1.101,0,0,0,263.6,116);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.ramka();
	this.instance_1.parent = this;
	this.instance_1.setTransform(11,10,1.11,1.101);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 6
	this.instance_2 = new lib.Symbol1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(125.5,155,1.101,1.101,0,0,0,234.5,155);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-197.3,109.4,1147.9,413);
// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 24,
	color: "#5B191C",
	opacity: 1.00,
	manifest: [
		{src:"images/ajax.png?1495013554851", id:"ajax"},
		{src:"images/arsen.png?1495013554851", id:"arsen"},
		{src:"images/button.png?1495013554851", id:"button"},
		{src:"images/dk.png?1495013554851", id:"dk"},
		{src:"images/dk1.png?1495013554851", id:"dk1"},
		{src:"images/ever.png?1495013554851", id:"ever"},
		{src:"images/foot1.jpg?1495013554851", id:"foot1"},
		{src:"images/foot2.jpg?1495013554851", id:"foot2"},
		{src:"images/foot3.jpg?1495013554851", id:"foot3"},
		{src:"images/foot4.jpg?1495013554851", id:"foot4"},
		{src:"images/logo.png?1495013554851", id:"logo"},
		{src:"images/mu.png?1495013554851", id:"mu"},
		{src:"images/ramka.png?1495013554851", id:"ramka"},
		{src:"images/shakh.png?1495013554851", id:"shakh"},
		{src:"images/stav.png?1495013554851", id:"stav"},
		{src:"images/zarya.png?1495013554851", id:"zarya"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;