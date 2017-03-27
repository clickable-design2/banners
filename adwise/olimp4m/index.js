(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.button = function() {
	this.initialize(img.button);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,175,54);


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


(lib.ramka = function() {
	this.initialize(img.ramka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,558,261);


(lib.stav = function() {
	this.initialize(img.stav);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,172,63);


(lib.team1 = function() {
	this.initialize(img.team1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,116,156);


(lib.team2 = function() {
	this.initialize(img.team2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,108,127);


(lib.team3 = function() {
	this.initialize(img.team3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,116,156);


(lib.team4 = function() {
	this.initialize(img.team4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,108,127);


(lib.team5 = function() {
	this.initialize(img.team5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,116,156);


(lib.team6 = function() {
	this.initialize(img.team6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,108,127);


(lib.team7 = function() {
	this.initialize(img.team7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,116,156);


(lib.team8 = function() {
	this.initialize(img.team8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,108,127);// helper functions:

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

	// Layer 1
	this.instance = new lib.foot4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol46, new cjs.Rectangle(0,0,469,310), null);


(lib.Symbol44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.foot3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol44, new cjs.Rectangle(0,0,469,310), null);


(lib.Symbol42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.foot2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol42, new cjs.Rectangle(0,0,469,310), null);


(lib.Symbol39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCB522").s().p("AhEBOIABgOQAHABAGgBQAFgBADgDQADgDACgGIACgMIANh1IBfAAIAACcIgTAAIAAiLIg7AAIgLBlQgBAMgDAIQgDAIgFAFQgGAEgJABIgIABIgNgBg");
	this.shape.setTransform(80.3,24.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCB522").s().p("AApBPIAAiLIhSAAIAACLIgSAAIAAidIB3AAIAACdg");
	this.shape_1.setTransform(64.9,24.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FCB522").s().p("AgIBPIAAgSQgPAAgNgDQgSgGgIgFQgFgEgEgEQgFgFgDgGIgEgNQgCgHAAgIQAAgHACgIIAEgMQADgGAFgFQAEgFAFgDQAIgFARgGQANgDAQgBIAAgRIARAAIAAARQAQABANADIANAEIALAGIAKAJQAFAEADAGIAEANQACAIAAAHQAAAIgCAIQgBAHgDAFQgDAGgFAFQgEAFgGADIgLAHIgNAEQgNADgQAAIAAASgAAJAtQALAAAKgCQALgDAIgEQAJgGAEgIIAEgKIABgMIgBgLIgEgKQgEgIgJgGQgIgFgLgCQgKgCgLgBgAgdgqQgLACgIAFQgJAGgEAIIgEAKIgBALIABAMIAEAKQAEAIAJAGQAIAEALADQAJACAMAAIAAhaQgMABgJACg");
	this.shape_2.setTransform(46.9,24.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FCB522").s().p("Ag6BPIAAidIA+AAQAMAAALAEQAJAEAIAIQAIAHADAKQAEAKAAALQAAALgEAKQgEAJgHAHQgIAHgJAEQgLAFgMAAIgsAAIAAAygAgoAMIAsAAQAHAAAIgDQAGgDAFgFQAFgEADgGQADgHgBgIQABgIgDgHQgDgHgFgFQgFgFgGgCQgHgDgIAAIgsAAg");
	this.shape_3.setTransform(30.4,24.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgfB4QgOgFgLgJQgLgJgGgNQgHgNgCgRIAaAAQACALAEAJQAFAIAHAGQAHAFAJADQAKADALAAQALAAALgEQAKgDAIgIQAIgHAEgKQAEgKAAgNQAAgQgHgMQgHgLgNgGQgMgGgPgBQgOgBgQAEIAAgHIBChXIhsAAIAAgZICZAAIAAAFIhGBcQAPgBANAGQANAFAJAKQAKAJAFANQAGAOAAAPQAAARgGAPQgGAPgLALQgLALgQAFQgQAHgSAAQgQAAgOgFg");
	this.shape_4.setTransform(93.4,65.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgiB4QgRgFgMgLQgNgLgGgQQgHgQAAgTIAAhTQAAgUAHgQQAGgPANgLQAMgLARgGQAQgFASAAQATAAAQAFQARAGAMALQAMALAHAPQAHAQAAAUIAABTQAAATgHAQQgHAQgMALQgMALgRAFQgQAHgTAAQgSAAgQgHgAgThhQgKACgHAFQgIAGgGAGQgFAIgDAKQgEALAAAPIAABFQAAAOAEAMQADAJAFAIQAGAHAIAGQAHAEAKADQAJACAKABQALgBAJgCQAKgDAHgEQAIgGAGgHQAFgIADgJQAEgMAAgOIAAhFQAAgPgEgLQgDgKgFgIQgGgGgIgGQgHgFgKgCQgJgDgLgBQgKABgJADg");
	this.shape_5.setTransform(72,65);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhJB6IB1jzIAeAAIh2Dzg");
	this.shape_6.setTransform(52.1,64.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhMB8IAAgGIBkh9QALgOAGgQQAFgQgCgNQgCgPgLgIQgFgEgIgDQgIgCgKAAQgKAAgJACQgIADgGAFQgGAFgEAIQgDAIgBALIgZAAQABgQAFgNQAFgMAJgJQAJgJANgEQAOgEARAAQAPAAANAEQANAEAJAIQAJAIAFAKQAFAKABAMQACARgFAQQgJAYgJAKIhPBiIBqAAIAAAag");
	this.shape_7.setTransform(34,64.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag9B7IAAgYIAwAAIAAjGIgrAAIAAgWIBGAAIAADcIAwAAIAAAYg");
	this.shape_8.setTransform(17.5,65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol39, new cjs.Rectangle(7.6,14.3,98.2,73.7), null);


(lib.Symbol38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCB522").s().p("AA6BPIgTgnIhNAAIgTAnIgTAAIAAgDIBJiaIAIAAIBICaIAAADgAAhAYIghhJIggBJIBBAAg");
	this.shape.setTransform(93.1,24.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCB522").s().p("AArBPIAAg6IgpAAIgqA6IgVAAIAAgDIAtg5QgIgCgHgEQgHgEgFgHQgFgFgDgHQgDgIAAgJQAAgLAEgJQAEgJAHgHQAHgHAKgEQAKgEAMAAIA+AAIAACdgAgOg7QgGADgFAEQgFAFgDAGQgCAGAAAIQAAAHACAGQADAHAFAEQAFAEAGACQAHACAHAAIArAAIAAhCIgrAAQgHAAgHACg");
	this.shape_1.setTransform(71.1,24.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FCB522").s().p("AAsBPIAAhLIACgrIhmB2IgGAAIAAicIATAAIAABJIgCAsIBlh2IAHAAIAACdg");
	this.shape_2.setTransform(55.9,24.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FCB522").s().p("Ag6BPIAAidIA+AAQAMAAAKAEQAKAEAIAIQAHAHAEAKQAEAKAAALQAAALgEAKQgEAJgHAHQgIAHgKAEQgKAFgMAAIgsAAIAAAygAgoAMIAsAAQAHAAAIgDQAGgDAFgFQAFgEADgGQACgHAAgIQAAgIgCgHQgDgHgEgFQgFgFgHgCQgHgDgIAAIgsAAg");
	this.shape_3.setTransform(41,24.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FCB522").s().p("AguBPIAAidIBbAAIAAARIhIAAIAAAzIBFAAIAAAQIhFAAIAAA3IBKAAIAAASg");
	this.shape_4.setTransform(27,24.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FCB522").s().p("AgKBPQgIgBgHgEQgIgCgGgEQgGgEgGgFQgFgGgEgGQgFgHgDgGIgEgRQgCgIAAgJQAAgIACgJQABgIADgIIAHgNIAKgMIAMgJQAGgEAHgDIAPgFIAQgBQALAAALAEQALACAJAHQAKAGAHAJQAHAJADANIgSAAQgDgIgGgHQgFgFgHgFQgGgEgIgCQgIgCgIAAIgMABIgMAEQgLAEgIAJQgIAJgFALQgEARAAAIQAAANAEAMQAFALAIAIQAIAKALAEIALAEIAMABQAJAAAJgCQAIgCAHgFQAHgFAFgGQAFgHADgIIASAAQgGARgEAGQgHAJgKAIQgJAGgLADQgLADgMAAQgIABgHgCg");
	this.shape_5.setTransform(11.7,24.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgfB4QgOgFgLgJQgLgJgGgNQgHgNgCgRIAaAAQACALAEAJQAFAIAHAGQAHAFAJADQAKADALAAQALAAALgEQAKgDAIgIQAIgHAEgKQAEgKAAgNQAAgQgHgMQgHgLgNgGQgMgGgPgBQgOgBgQAEIAAgHIBChXIhsAAIAAgZICZAAIAAAFIhGBcQAPgBANAGQANAFAJAKQAKAJAFANQAGAOAAAPQAAARgGAPQgGAPgLALQgLALgQAFQgQAHgSAAQgQAAgOgFg");
	this.shape_6.setTransform(91.7,62.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgiB4QgRgFgMgLQgNgLgGgPQgHgRAAgTIAAhTQAAgTAHgRQAGgPANgLQAMgLARgFQAQgHASABQATgBAQAHQARAFAMALQAMALAHAPQAHARAAATIAABTQAAATgHARQgHAPgMALQgMALgRAFQgQAHgTgBQgSABgQgHgAgThiQgKADgHAFQgIAGgGAGQgFAIgDAJQgEAMAAAPIAABFQAAAPAEALQADAKAFAHQAGAIAIAEQAHAFAKADQAJADAKgBQALABAJgDQAKgDAHgFQAIgEAGgIQAFgHADgKQAEgLAAgPIAAhFQAAgPgEgMQgDgJgFgIQgGgGgIgGQgHgFgKgDQgJgCgLAAQgKAAgJACg");
	this.shape_7.setTransform(70.3,62.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhIB6IB0jzIAdAAIh1Dzg");
	this.shape_8.setTransform(50.5,62.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgiB4QgRgFgMgLQgNgLgGgPQgHgRAAgTIAAhTQAAgTAHgRQAGgPANgLQAMgLARgFQAQgHASABQATgBAQAHQARAFAMALQAMALAHAPQAHARAAATIAABTQAAATgHARQgHAPgMALQgMALgRAFQgQAHgTgBQgSABgQgHgAgThiQgKADgHAFQgIAGgGAGQgFAIgDAJQgEAMAAAPIAABFQAAAPAEALQADAKAFAHQAGAIAIAEQAHAFAKADQAJADAKgBQALABAJgDQAKgDAHgFQAIgEAGgIQAFgHADgKQAEgLAAgPIAAhFQAAgPgEgMQgDgJgFgIQgGgGgIgGQgHgFgKgDQgJgCgLAAQgKAAgJACg");
	this.shape_9.setTransform(30.5,62.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag9B6IAAgWIAwAAIAAjHIgrAAIAAgWIBGAAIAADdIAwAAIAAAWg");
	this.shape_10.setTransform(11.8,62.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol38, new cjs.Rectangle(1.8,14.3,102.4,70.9), null);


(lib.Symbol37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCB522").s().p("AA+BPIAAidIATAAIAACdgAhQBPIAAidIASAAIAAAMIAAAqIAsAAQANAAAJAFQALAEAHAHQAHAIADAJQAEAKgBALQAAAKgEAJQgEAJgIAHQgHAHgKADQgJAEgLAAgAg+A+IApAAQAIAAAHgCQAHgCAFgFQAFgEADgGQADgHAAgIQABgIgDgHQgDgGgEgFQgFgEgGgCQgHgDgIAAIgLAAIghAAg");
	this.shape.setTransform(93.3,33.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCB522").s().p("AApBPIAAiLIhSAAIAACLIgSAAIAAidIB3AAIAACdg");
	this.shape_1.setTransform(75,33.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FCB522").s().p("AgPBQIgQgEIgNgHIgMgKQgFgFgFgGIgGgOQgEgIgBgIQgCgJAAgJQAAgIACgJQABgIAEgIQADgHAEgHQAEgGAFgGIANgJIANgHIAPgEQAIgBAHAAIAQABIAPAEQAHADAHAEQAGAEAGAGIAJALQAFAHADAHQADAIABAIQACAJAAAIQAAAJgCAIQgBAIgDAIIgHAOQgEAGgGAGIgLAJIgOAHQgHADgIACQgJABgIAAQgIAAgHgBgAgXg7QgLAFgIAIQgKANgDAIQgFAQAAAJIABAOIAEAMQAEAMAJAIQAHAJAMAEQAHADAQACQAJAAAPgFQALgEAJgJQAIgIAFgMIACgMIACgOQAAgIgEgRQgFgMgIgIQgIgJgMgFQgPgEgJAAQgMAAgLAEg");
	this.shape_2.setTransform(57.8,33.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FCB522").s().p("Ag6BPIAAidIA+AAQAMAAAKAEQAKAEAIAIQAHAHAEAKQAEAKAAALQAAALgEAKQgEAJgHAHQgIAHgKAEQgKAFgMAAIgrAAIAAAygAgnAMIArAAQAIAAAGgDQAHgDAFgFQAFgEADgGQACgHABgIQgBgIgCgHQgCgHgFgFQgGgFgHgCQgGgDgIAAIgrAAg");
	this.shape_3.setTransform(42.1,33.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FCB522").s().p("Ag6BPIAAidIA9AAQAKAAAJADQAJACAHAFQAGAGAEAIQAEAIgBALIgBAKIgDAKQgDAEgEADQgEAEgGACQAIACAEACQAGAEADAEQAEAFACAGQACAGAAAHQAAALgEAIQgDAIgHAGQgGAGgKADQgJADgLAAgAgoA+IAtAAQAIAAAGgCQAHgBAEgEQAFgDADgFQACgGAAgHQAAgIgDgFQgEgGgFgDQgGgDgIgBQgHgCgIAAIgnAAgAgogJIAnAAQAHAAAHgBQAGgBAEgDQAFgEACgEQADgGAAgGQAAgHgDgGQgCgEgEgEQgEgDgGgCQgGgBgHAAIgpAAg");
	this.shape_4.setTransform(27.1,33.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FCB522").s().p("AguBPIAAidIBaAAIAAARIhHAAIAAAzIBFAAIAAAQIhFAAIAAA3IBKAAIAAASg");
	this.shape_5.setTransform(13.1,33.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FCB522").s().p("AA6BPIgTgnIhNAAIgTAnIgTAAIAAgCIBJibIAIAAIBICbIAAACgAAhAYIghhIIggBIIBBAAg");
	this.shape_6.setTransform(77.1,10.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FCB522").s().p("AgtBPIAAidIBbAAIAAARIhIAAIAACMg");
	this.shape_7.setTransform(64.3,10.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FCB522").s().p("AAsBPIAAhLIACgrIhmB2IgGAAIAAicIATAAIAABJIgCAtIBlh3IAHAAIAACdg");
	this.shape_8.setTransform(49.3,10.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FCB522").s().p("AhEBOIABgOQAHABAGgBQAFgBADgDQADgDACgGIACgMIANh1IBfAAIAACcIgTAAIAAiLIg7AAIgLBlQgBAMgDAIQgDAIgFAFQgGAEgJABIgIABIgNgBg");
	this.shape_9.setTransform(31.9,10.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgfB4QgOgFgLgJQgLgJgGgNQgHgNgCgRIAaAAQACALAEAJQAFAIAHAGQAHAFAJADQAKADALAAQALAAALgEQAKgDAIgIQAIgHAEgKQAEgKAAgNQAAgQgHgMQgHgLgNgGQgMgGgPgBQgOgBgQAEIAAgHIBChXIhsAAIAAgZICZAAIAAAFIhGBcQAPgBANAGQANAFAJAKQAKAJAFANQAGAOAAAPQAAARgGAPQgGAPgLALQgLALgQAFQgQAHgSAAQgQAAgOgFg");
	this.shape_10.setTransform(95.2,67.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgiB4QgRgFgMgLQgNgLgGgQQgHgQAAgTIAAhTQAAgUAHgQQAGgPANgLQAMgLARgGQAQgFASAAQATAAAQAFQARAGAMALQAMALAHAPQAHAQAAAUIAABTQAAATgHAQQgHAQgMALQgMALgRAFQgQAHgTAAQgSAAgQgHgAgThhQgKACgHAFQgIAGgGAGQgFAIgDAJQgEAMAAAPIAABFQAAAOAEAMQADAJAFAIQAGAIAIAFQAHAEAKADQAJACAKAAQALAAAJgCQAKgDAHgEQAIgFAGgIQAFgIADgJQAEgMAAgOIAAhFQAAgPgEgMQgDgJgFgIQgGgGgIgGQgHgFgKgCQgJgDgLAAQgKAAgJADg");
	this.shape_11.setTransform(73.8,66.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhIB6IB1jzIAcAAIh1Dzg");
	this.shape_12.setTransform(54,66.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgjB9IBAhkQgPAIgQAAQgTABgPgFQgQgGgMgKQgLgKgHgOQgGgPAAgSQAAgTAHgQQAGgOANgLQAMgKAQgFQARgFARAAQATAAAQAFQAQAFAMAKQANALAGAOQAHAQAAATQAAAPgEALQgEAMgIALIhMB4gAgXhfQgLADgIAHQgIAIgFAKQgEAKAAANQAAANAEAKQAFALAIAHQAIAGAMADQALAEALAAQANAAALgEQALgDAIgGQAJgHAEgLQAFgKAAgNQAAgNgFgKQgFgKgIgIQgIgHgLgDQgLgEgNAAQgMAAgLAEg");
	this.shape_13.setTransform(35.3,66.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgiB4QgRgFgMgLQgNgLgGgQQgHgQAAgTIAAhTQAAgUAHgQQAGgPANgLQAMgLARgGQAQgFASAAQATAAAQAFQARAGAMALQAMALAHAPQAHAQAAAUIAABTQAAATgHAQQgHAQgMALQgMALgRAFQgQAHgTAAQgSAAgQgHgAgThhQgKACgHAFQgIAGgGAGQgFAIgDAJQgEAMAAAPIAABFQAAAOAEAMQADAJAFAIQAGAIAIAFQAHAEAKADQAJACAKAAQALAAAJgCQAKgDAHgEQAIgFAGgIQAFgIADgJQAEgMAAgOIAAhFQAAgPgEgMQgDgJgFgIQgGgGgIgGQgHgFgKgCQgJgDgLAAQgKAAgJADg");
	this.shape_14.setTransform(13.5,66.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol37, new cjs.Rectangle(0,0,107.7,89.9), null);


(lib.Symbol36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.team6();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol36, new cjs.Rectangle(0,0,108,127), null);


(lib.Symbol35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.team3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol35, new cjs.Rectangle(0,0,116,156), null);


(lib.Symbol34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.team4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol34, new cjs.Rectangle(0,0,108,127), null);


(lib.Symbol33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag3BGIAAiLIA9AAQAUAAAMAMQAMAMAAATQAAAHgDAGQgDAHgGAEQAFACADACIAGAIQAEAIAAAJQAAATgMAMQgMAMgVAAgAgSAmIAbAAQAJAAACgLQAAgFgDgDQgDgEgFAAIgbAAgAgSgOIAWAAQAFAAACgDQADgDAAgFQABgFgEgDQgDgEgEAAIgWAAg");
	this.shape.setTransform(128.9,9.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag7BGIAAiLIAkAAIAABEIBIhEIALAAIAACLIgkAAIAAhHIhIBHg");
	this.shape_1.setTransform(114.2,10);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgRBGIAAhrIgiAAIAAggIBnAAIAAAgIgiAAIAABrg");
	this.shape_2.setTransform(101.1,10);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgaBEQgNgEgKgJQgKgJgGgOQgGgOAAgSQAAgKADgKQADgKAFgJQALgRAQgIQAQgIASAAIANACIANADQANAFAKAJIAJAKQAEAFADAIQADAHABAIQACAHAAAIQAAAggUAVQgUAUggAAQgNAAgNgFgAgYgbQgFAFgCAHQgDAHAAAIQAAASAKAKQAGAFAGADQAGACAGAAQAOAAALgKQAKgKAAgSQAAgIgCgHQgDgHgFgFQgFgFgGgCQgGgDgHAAQgOAAgLAKg");
	this.shape_3.setTransform(87.6,10);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAgBGIAAhAIgeAfIgDAAIgegfIAABAIglAAIAAiLIAOAAIA2A8IA4g8IAMAAIAACLg");
	this.shape_4.setTransform(71.3,10);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgaBEQgNgEgKgJQgKgJgGgOQgGgOAAgSQAAgKADgKQADgKAFgJQALgRAQgIQAQgIASAAIANACIANADQANAFAKAJIAJAKQAEAFADAIQADAHABAIQACAHAAAIQAAAggUAVQgUAUggAAQgNAAgNgFgAgYgbQgFAFgCAHQgDAHAAAIQAAASAKAKQAGAFAGADQAGACAGAAQAOAAALgKQAKgKAAgSQAAgIgCgHQgDgHgFgFQgFgFgGgCQgGgDgHAAQgOAAgLAKg");
	this.shape_5.setTransform(55,10);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAVBHIgdg2IgSAAIAAA2IgkAAIAAiLIAkAAIAAA3QARAAAEgDQAEgCACgGIAGgUQACgHADgGQAEgFAGgEQAMgHAXAFIAAAZQgOgBgDALQgHAagKAKIAoA+IAAAGg");
	this.shape_6.setTransform(40.5,9.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgaBEQgNgEgKgJQgKgJgGgOQgGgOAAgSQAAgKADgKQADgKAFgJQALgRAQgIQAQgIASAAIANACIANADQANAFAKAJIAJAKQAEAFADAIQADAHABAIQACAHAAAIQAAAggUAVQgUAUggAAQgNAAgNgFgAgYgbQgFAFgCAHQgDAHAAAIQAAASAKAKQAGAFAGADQAGACAGAAQAOAAALgKQAKgKAAgSQAAgIgCgHQgDgHgFgFQgFgFgGgCQgGgDgHAAQgOAAgLAKg");
	this.shape_7.setTransform(24.7,10);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag/BFIAAgaQAMAAADgDQAEgDABgMIAKhfIBiAAIAACMIglAAIAAhrIgdAAIgGA/IgCASQgCAHgDAFQgGAKgMADQgGABgIABQgIgBgJgBg");
	this.shape_8.setTransform(8.9,10.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol33, new cjs.Rectangle(0,0,137.3,24), null);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.team7();
	this.instance.parent = this;
	this.instance.setTransform(-156,23,0.743,0.743);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol32, new cjs.Rectangle(-156,23,86.2,115.9), null);


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.team8();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol31, new cjs.Rectangle(0,0,108,127), null);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgKBGIgNgDIgMgGIgLgHQgKgJgGgOQgDgHgBgIQgCgHAAgJQAAgIACgHQABgIADgHQAGgOAKgJIALgHIAMgGQANgFANABQAHAAAHABQAIABAGADQAOAFAKAMQALANACASIgjAAQgDgLgIgEQgIgFgLgBQgPAAgKALQgJALAAAQQAAAIACAGQACAHAFAGQAFAGAGACQAHADAHAAQALAAAJgGQAIgFADgLIAjAAQgBAKgEAHQgDAIgFAHQgLANgNAFIgOAEQgHACgIAAg");
	this.shape.setTransform(95.4,10);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgdBHQgPgCgKgEIAFgZQAKAEAGgCQAHgCAFgKIAFgKIgwhWIAAgEIAoAAIAaA2IABAAIAXg2IAnAAIAAAEIgyBmQgGAMgGAIQgFAIgIAEQgGADgJAAIgEAAg");
	this.shape_1.setTransform(81.3,10.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgRBGIAAhrIgiAAIAAggIBnAAIAAAgIgiAAIAABrg");
	this.shape_2.setTransform(69.2,10);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAWBGIAAg4IgrAAIAAA4IgkAAIAAiLIAkAAIAAAyIArAAIAAgyIAkAAIAACLg");
	this.shape_3.setTransform(56.2,10);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgsBGIAAiLIBXAAIAAAgIgyAAIAAAUIAuAAIAAAfIguAAIAAAXIAzAAIAAAhg");
	this.shape_4.setTransform(43.5,10);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag3BGIAAiLIA9AAQATAAANAMQAMAMAAATQAAAHgDAGQgDAHgFAEQAEACADACIAFAIQAFAIAAAJQAAATgLAMQgNAMgUAAgAgSAmIAbAAQAKAAABgLQAAgFgDgDQgDgEgFAAIgbAAgAgSgOIAWAAQAEAAADgDQADgDAAgFQABgFgDgDQgEgEgEAAIgWAAg");
	this.shape_5.setTransform(31.2,9.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AACBFQgKgEgKgIQgVgQgEgbIgSAAIAAA4IglAAIAAiLIAlAAIAAAyIATAAQAFgRALgMQAFgHAGgEQAGgFAIgCQAFgDAIgCIAPgBQAOAAANAFQANAFAJAIQALAJAFAOQAHAOAAARQgBAJgBAIQgCAIgDAHQgFAOgLAJIgLAIIgMAFQgNAFgNAAQgNAAgMgEgAACgbQgJAKAAARQAAASAJAKQAGAFAFADQAHACAHAAQAPAAAKgKQAFgFADgHQACgHAAgJQAAgRgKgKQgLgKgOAAQgPAAgKAKg");
	this.shape_6.setTransform(13.5,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol30, new cjs.Rectangle(0,0,105,24), null);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAWBGIAAg4IgrAAIAAA4IgkAAIAAiLIAkAAIAAAyIArAAIAAgyIAkAAIAACLg");
	this.shape.setTransform(69.9,10);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAjBHIgJgSIgzAAIgIASIgmAAIAAgFIBAiIIAQAAIA/CIIAAAFgAAPAXIgPghIgNAhIAcAAg");
	this.shape_1.setTransform(55.5,9.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhABFIABgaQALAAAEgDQAEgDABgMIAKhfIBiAAIAACMIgkAAIAAhrIgeAAIgFA/IgEASQgBAHgDAFQgGAKgMADQgGABgIABQgIgBgKgBg");
	this.shape_2.setTransform(40.6,10.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag8BGIAAiLIAlAAIAABEIBIhEIALAAIAACLIgkAAIAAhHIhJBHg");
	this.shape_3.setTransform(26.3,10);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAgBGIAAhAIgeAfIgDAAIgegfIAABAIglAAIAAiLIAOAAIA2A8IA3g8IAOAAIAACLg");
	this.shape_4.setTransform(10.4,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol29, new cjs.Rectangle(0,0,79.3,24), null);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.team5();
	this.instance.parent = this;
	this.instance.setTransform(14,24,0.759,0.759);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol28, new cjs.Rectangle(14,24,88.1,118.5), null);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag3BGIAAiLIA9AAQAUAAAMAMQAMAMAAATQAAAHgDAGQgDAHgFAEQAEACADACIAGAIQAEAIAAAJQAAATgMAMQgMAMgUAAgAgSAmIAbAAQAJAAACgLQAAgFgDgDQgDgEgFAAIgbAAgAgSgOIAWAAQAFAAACgDQADgDAAgFQAAgFgCgDQgEgEgEAAIgWAAg");
	this.shape.setTransform(80.4,9.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgaBEQgNgEgKgJQgKgJgGgOQgGgOAAgSQAAgKADgKQADgKAFgJQALgRAQgIQAQgIASAAIANACIANADQANAFAKAJIAJAKQAEAFADAIQADAHABAIQACAHAAAIQAAAggUAVQgUAUggAAQgNAAgNgFgAgYgbQgFAFgCAHQgDAHAAAIQAAASAKAKQAGAFAGADQAGACAGAAQAOAAALgKQAKgKAAgSQAAgIgCgHQgDgHgFgFQgFgFgGgCQgGgDgHAAQgOAAgLAKg");
	this.shape_1.setTransform(65.3,10);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgRBGIAAhrIgiAAIAAggIBnAAIAAAgIgiAAIAABrg");
	this.shape_2.setTransform(51.9,10);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgKBGIgNgDIgMgGIgLgHQgKgJgGgOQgDgHgBgIQgCgHAAgJQAAgIACgHQABgIADgHQAGgOAKgJIALgHIAMgGQANgFANABQAHAAAHABQAIABAGADQAOAFAKAMQALANACASIgjAAQgDgLgIgEQgIgFgLgBQgPAAgKALQgJALAAAQQAAAIACAGQACAHAFAGQAFAGAGACQAHADAHAAQALAAAJgGQAIgFADgLIAjAAQgBAKgEAHQgDAIgFAHQgLANgNAFIgOAEQgHACgIAAg");
	this.shape_3.setTransform(38.7,10);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgaBEQgNgEgKgJQgKgJgGgOQgGgOAAgSQAAgKADgKQADgKAFgJQALgRAQgIQAQgIASAAIANACIANADQANAFAKAJIAJAKQAEAFADAIQADAHABAIQACAHAAAIQAAAggUAVQgUAUggAAQgNAAgNgFgAgYgbQgFAFgCAHQgDAHAAAIQAAASAKAKQAGAFAGADQAGACAGAAQAOAAALgKQAKgKAAgSQAAgIgCgHQgDgHgFgFQgFgFgGgCQgGgDgHAAQgOAAgLAKg");
	this.shape_4.setTransform(23.1,10);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag3BGIAAiLIA9AAQAYAAANAQQANAPAAAWQAAATgNAQQgOAOgXAAIgYAAIAAAlgAgTACIAZAAQAHAAAEgGQAEgFAAgIQAAgJgEgGQgEgFgHgBIgZAAg");
	this.shape_5.setTransform(9.2,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol27, new cjs.Rectangle(0,0,88.8,24), null);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAoBOIAAgQIhSAAIAAAQIgbAAIAAgvIAEAAQAJAAACgEQADgEABgKIAKhaIBgAAIAABsIAPAAIAAAvgAgOAOIgCALQgBAEgEADIApAAIAAhOIgbAAg");
	this.shape.setTransform(106.4,32.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgsBGIAAiLIBXAAIAAAgIgyAAIAAAUIAuAAIAAAfIguAAIAAAWIAzAAIAAAig");
	this.shape_1.setTransform(93.3,32);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgRBGIAAhrIgiAAIAAggIBnAAIAAAgIgjAAIAABrg");
	this.shape_2.setTransform(81.8,32);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag7BbIAAiLIAkAAIAABDIBIhEIALAAIAACMIgkAAIAAhIIhIBIgAgHg6QgGgCgFgEQgIgIgBgQIAUgCQABAFADADQADACAGAAQAGAAADgCQAEgDAAgFIAVACQgBAQgIAIQgJAIgQAAQgHAAgGgCg");
	this.shape_3.setTransform(68.7,29.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAjBHIgJgSIgzAAIgIASIgmAAIAAgFIBAiIIAQAAIA/CIIAAAFgAAPAXIgPghIgNAhIAcAAg");
	this.shape_4.setTransform(54.1,31.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAWBGIAAg4IgrAAIAAA4IgkAAIAAiLIAkAAIAAAzIArAAIAAgzIAkAAIAACLg");
	this.shape_5.setTransform(39.8,32);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AACBFQgKgEgLgIQgTgQgFgbIgSAAIAAA4IglAAIAAiLIAlAAIAAAyIAUAAQADgRALgMQAGgHAGgEQAGgFAIgCQAGgDAHgCIAPgBQAOAAAMAFQANAFALAIQAKAJAGAOQAFAOAAARQABAJgCAIQgCAIgCAHQgHAOgKAJIgLAIIgMAFQgNAFgOAAQgNAAgLgEgAACgbQgJAKAAARQAAASAKAKQAEAFAHADQAGACAHAAQAOAAAKgKQAGgFADgHQACgHAAgJQAAgRgLgKQgKgKgPAAQgNAAgLAKg");
	this.shape_6.setTransform(21.9,32);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag3BGIAAiLIA9AAQAYAAANAQQANAPAAAWQAAATgNAQQgOAOgXAAIgYAAIAAAlgAgTACIAZAAQAHAAAEgGQAEgFAAgIQAAgJgEgGQgEgFgHgBIgZAAg");
	this.shape_7.setTransform(116.8,10);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgsBGIAAiLIBXAAIAAAgIgyAAIAAAUIAuAAIAAAfIguAAIAAAXIAzAAIAAAhg");
	this.shape_8.setTransform(104.2,10);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgRBGIAAhrIgiAAIAAggIBnAAIAAAgIgjAAIAABrg");
	this.shape_9.setTransform(92.7,10);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgKBGIgNgDIgMgGIgLgHQgKgJgGgOQgDgHgBgIQgCgHAAgJQAAgIACgHQABgIADgHQAGgOAKgJIALgHIAMgGQANgFANABQAHAAAHABQAIABAGADQAOAFAKAMQALANACASIgjAAQgDgLgIgEQgIgFgLgBQgPAAgKALQgJALAAAQQAAAIACAGQACAHAFAGQAFAGAGACQAHADAHAAQALAAAJgGQAIgFADgLIAjAAQgBAKgEAHQgDAIgFAHQgLANgNAFIgOAEQgHACgIAAg");
	this.shape_10.setTransform(79.6,10);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgrBGIAAiLIBWAAIAAAgIgyAAIAAAUIAuAAIAAAfIguAAIAAAXIA0AAIAAAhg");
	this.shape_11.setTransform(66.5,10);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AATBGIAAgxQgnAFgRgQQgIgIgEgOQgFgOAAgWIAAgVIAlAAIAAAVIAAANIABAJIADAHIAEAFQADACAEAAIAIABIANgBIAAg5IAkAAIAACLg");
	this.shape_12.setTransform(53.5,10);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAWBGIAAg4IgrAAIAAA4IgkAAIAAiLIAkAAIAAAyIArAAIAAgyIAkAAIAACLg");
	this.shape_13.setTransform(40.1,10);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAjBHIgJgSIgzAAIgIASIgmAAIAAgFIBAiIIAQAAIA/CIIAAAFgAAPAXIgPghIgNAhIAcAAg");
	this.shape_14.setTransform(25.8,9.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAgBGIAAhAIgeAfIgDAAIgegfIAABAIglAAIAAiLIANAAIA3A8IA4g8IAMAAIAACLg");
	this.shape_15.setTransform(10.5,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol26, new cjs.Rectangle(0,0,124.9,46), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AAjBHIgJgSIgzAAIgIASIgmAAIAAgFIBAiIIAQAAIA/CIIAAAFgAAPAXIgPghIgNAhIAcAAg");
	this.shape.setTransform(95.4,9.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgRBGIAAhrIgiAAIAAggIBnAAIAAAgIgjAAIAABrg");
	this.shape_1.setTransform(82.9,10);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag3BGIAAiLIAkAAIAAAqIAZAAQAKAAAJADQAJAEAGAFQAGAGAEAHQAEAGABAJQABAIgBAIQgBAIgEAIQgEAHgGAGQgGAFgJADQgJAEgKAAgAgTAmIAIAAIAJAAIAIAAQAFAAAEgEQAEgDABgFQABgFgBgFQgBgFgEgEQgEgDgFAAIgZAAg");
	this.shape_2.setTransform(71.3,10);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhABFIABgaQALAAAEgDQAEgDABgMIAKhfIBiAAIAACMIgkAAIAAhrIgeAAIgFA/IgEASQgBAHgDAFQgFAKgNADQgGABgIABQgIgBgKgBg");
	this.shape_3.setTransform(56.3,10.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgsBGIAAiLIBXAAIAAAgIgyAAIAAAUIAuAAIAAAfIguAAIAAAXIA0AAIAAAhg");
	this.shape_4.setTransform(44.1,10);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgKBGIgNgDIgMgGIgLgHQgKgJgGgOQgDgHgBgIQgCgHAAgJQAAgIACgHQABgIADgHQAGgOAKgJIALgHIAMgGQANgFANABQAHAAAHABQAIABAGADQAOAFAKAMQALANACASIgjAAQgDgLgIgEQgIgFgLgBQgPAAgKALQgJALAAAQQAAAIACAGQACAHAFAGQAFAGAGACQAHADAHAAQALAAAJgGQAIgFADgLIAjAAQgBAKgEAHQgDAIgFAHQgLANgNAFIgOAEQgHACgIAAg");
	this.shape_5.setTransform(30.6,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(20.9,0,83.7,24), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag3BGIAAiLIA9AAQAYAAANAQQANAPAAAWQAAATgNAQQgOAOgXAAIgYAAIAAAlgAgTACIAZAAQAHAAAEgGQAEgFAAgIQAAgJgEgGQgEgFgHgBIgZAAg");
	this.shape.setTransform(108,10);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAjBHIgJgSIgzAAIgIASIgmAAIAAgFIBAiIIAQAAIA/CIIAAAFgAAPAXIgPghIgNAhIAcAAg");
	this.shape_1.setTransform(93.8,9.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AApBOIAAgQIhTAAIAAAQIgcAAIAAgvIAGAAQAHAAADgEQADgEABgKIALhaIBfAAIAABsIAOAAIAAAvgAgOAOIgCALQgBAEgDADIAoAAIAAhOIgcAAg");
	this.shape_2.setTransform(78.9,10.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgaBEQgNgEgKgJQgKgJgGgOQgGgOAAgSQAAgKADgKQADgKAFgJQALgRAQgIQAQgIASAAIANACIANADQANAFAKAJIAJAKQAEAFADAIQADAHABAIQACAHAAAIQAAAggUAVQgUAUggAAQgNAAgNgFgAgYgbQgFAFgCAHQgDAHAAAIQAAASAKAKQAGAFAGADQAGACAGAAQAOAAALgKQAKgKAAgSQAAgIgCgHQgDgHgFgFQgFgFgGgCQgGgDgHAAQgOAAgLAKg");
	this.shape_3.setTransform(63.3,10);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAWBGIAAg4IgrAAIAAA4IgkAAIAAiLIAkAAIAAAyIArAAIAAgyIAkAAIAACLg");
	this.shape_4.setTransform(48.1,10);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgKBGIgNgDIgMgGIgLgHQgKgJgGgOQgDgHgBgIQgCgHAAgJQAAgIACgHQABgIADgHQAGgOAKgJIALgHIAMgGQANgFANABQAHAAAHABQAIABAGADQAOAFAKAMQALANACASIgjAAQgDgLgIgEQgIgFgLgBQgPAAgKALQgJALAAAQQAAAIACAGQACAHAFAGQAFAGAGACQAHADAHAAQALAAAJgGQAIgFADgLIAjAAQgBAKgEAHQgDAIgFAHQgLANgNAFIgOAEQgHACgIAAg");
	this.shape_5.setTransform(33.2,10);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAjBHIgJgSIgzAAIgIASIgmAAIAAgFIBAiIIAQAAIA/CIIAAAFgAAPAXIgPghIgNAhIAcAAg");
	this.shape_6.setTransform(18.5,9.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag3BGIAAiLIA9AAQAYAAANAQQANAPAAAWQAAATgNAQQgOAOgXAAIgYAAIAAAlgAgTACIAZAAQAHAAAEgGQAEgFAAgIQAAgJgEgGQgEgFgHgBIgZAAg");
	this.shape_7.setTransform(5.5,10);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAVBHIgdg2IgRAAIAAA2IglAAIAAiLIAlAAIAAA3QAQAAAEgDQAEgCACgGIAGgUQACgHADgGQAEgFAGgEQAMgHAXAFIAAAZQgOgBgDALQgHAagKAKIAoA+IAAAGg");
	this.shape_8.setTransform(-8.2,9.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(-18,0,134.3,24), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgoA9QgRgMABgWIAjAAQAAAHAGAEQAHADAIAAQAIABAHgEQAGgEAAgGIgBgGIgDgDIgFgDIgGgCIgFAAIgFgBQgKAAgJgCQgIgDgIgFQgHgDgFgIQgEgIAAgKQAAgLAEgJQAEgIAIgGQAIgGAKgDQAJgDAMAAQANAAAMAEQAMAFAIAMQAIAKgBAPIgiAAQAAgHgFgEQgGgDgHAAQgJAAgFADQgFAEAAAGQAAAGAFADQAFACALACIARACIAPAFQAIADAEAEQAFADADAIQADAIAAAKQAAAKgEAIQgEAIgJAGQgRAMgXAAQgXAAgRgMg");
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
	this.shape.graphics.f("#FCB522").s().p("AA+BPIAAidIATAAIAACdgAhQBPIAAidIASAAIAAAMIAAAqIAsAAQANAAAJAFQALAEAHAHQAHAIADAJQAEAKgBALQAAAKgEAJQgEAJgIAHQgHAHgKADQgJAEgLAAgAg+A+IApAAQAIAAAHgCQAHgCAFgFQAFgEADgGQADgHAAgIQABgIgDgHQgDgGgEgFQgFgEgGgCQgHgDgIAAIgLAAIghAAg");
	this.shape.setTransform(126.4,106.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCB522").s().p("AApBPIAAiLIhSAAIAACLIgSAAIAAidIB3AAIAACdg");
	this.shape_1.setTransform(108.1,106.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FCB522").s().p("AgQBQIgOgEIgOgHIgLgKQgGgFgEgGIgHgOQgDgIgCgIQgCgJAAgJQAAgIACgJQACgIADgIQADgHAEgHQAEgGAGgGIALgJIAOgHIAPgEQAHgBAIAAIAQABIAPAEQAIADAGAEQAGAEAFAGIAKALQAEAHADAHQADAIACAIQACAJAAAIIgBARQgCAIgDAIIgHAOQgEAGgGAGIgLAJIgNAHQgIADgIACQgJABgIAAQgHAAgJgBgAgXg7QgLAFgJAIQgJANgDAIQgFAQAAAJIABAOIAEAMQAFAMAHAIQAJAJALAEQAHADAQACQAIAAAQgFQALgEAJgJQAIgIAEgMIAEgMIABgOQAAgIgFgRQgEgMgIgIQgJgJgLgFQgPgEgJAAQgMAAgLAEg");
	this.shape_2.setTransform(91,106.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FCB522").s().p("Ag6BPIAAidIA+AAQAMAAALAEQAJAEAIAIQAIAHADAKQAEAKAAALQAAALgEAKQgEAJgHAHQgIAHgJAEQgLAFgMAAIgsAAIAAAygAgoAMIAsAAQAHAAAIgDQAGgDAFgFQAFgEADgGQADgHgBgIQABgIgDgHQgDgHgFgFQgEgFgHgCQgHgDgIAAIgsAAg");
	this.shape_3.setTransform(75.3,106.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FCB522").s().p("Ag6BPIAAidIA8AAQALAAAJADQAJACAGAFQAIAGADAIQAEAIAAALIgBAKIgFAKQgCAEgEADQgEAEgGACQAHACAGACQAFAEAEAEQADAFACAGQACAGAAAHQAAALgEAIQgEAIgGAGQgHAGgJADQgJADgLAAgAgoA+IAtAAQAIAAAGgCQAGgBAFgEQAFgDACgFQADgGAAgHQABgIgEgFQgEgGgFgDQgGgDgIgBQgHgCgHAAIgoAAgAgogJIAoAAQAGAAAGgBQAHgBAFgDQAEgEACgEQADgGAAgGQAAgHgDgGQgCgEgEgEQgEgDgGgCQgGgBgHAAIgpAAg");
	this.shape_4.setTransform(60.3,106.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FCB522").s().p("AguBPIAAidIBaAAIAAARIhIAAIAAAzIBGAAIAAAQIhGAAIAAA3IBLAAIAAASg");
	this.shape_5.setTransform(46.3,106.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FCB522").s().p("AA6BPIgTgnIhNAAIgTAnIgTAAIAAgCIBJibIAIAAIBICbIAAACgAAhAYIghhIIggBIIBBAAg");
	this.shape_6.setTransform(110.3,83.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FCB522").s().p("AgtBPIAAidIBbAAIAAARIhIAAIAACMg");
	this.shape_7.setTransform(97.4,83.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FCB522").s().p("AAsBPIAAhLIACgrIhmB2IgGAAIAAicIATAAIAABJIgCAtIBlh3IAHAAIAACdg");
	this.shape_8.setTransform(82.4,83.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FCB522").s().p("AhEBOIABgOQAHABAGgBQAFgBADgDQADgDACgGIACgMIANh1IBfAAIAACcIgTAAIAAiLIg7AAIgLBlQgBAMgDAIQgDAIgFAFQgGAEgJABIgIABIgNgBg");
	this.shape_9.setTransform(65.1,83.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgfB4QgOgFgLgJQgLgJgGgNQgHgNgCgRIAaAAQACALAEAJQAFAIAHAGQAHAFAJADQAKADALAAQALAAALgEQAKgDAIgIQAIgHAEgKQAEgKAAgNQAAgQgHgMQgHgLgNgGQgMgGgPgBQgOgBgQAEIAAgHIBChXIhsAAIAAgZICZAAIAAAFIhGBcQAPgBANAGQANAFAJAKQAKAJAFANQAGAOAAAPQAAARgGAPQgGAPgLALQgLALgQAFQgQAHgSAAQgQAAgOgFg");
	this.shape_10.setTransform(128.4,140);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgiB4QgRgFgMgLQgNgLgGgQQgHgQAAgTIAAhTQAAgUAHgQQAGgPANgLQAMgLARgGQAQgFASAAQATAAAQAFQARAGAMALQAMALAHAPQAHAQAAAUIAABTQAAATgHAQQgHAQgMALQgMALgRAFQgQAHgTAAQgSAAgQgHgAgThhQgKACgHAFQgIAGgGAGQgFAIgDAJQgEAMAAAPIAABFQAAAOAEAMQADAJAFAIQAGAIAIAFQAHAEAKADQAJACAKAAQALAAAJgCQAKgDAHgEQAIgFAGgIQAFgIADgJQAEgMAAgOIAAhFQAAgPgEgMQgDgJgFgIQgGgGgIgGQgHgFgKgCQgJgDgLAAQgKAAgJADg");
	this.shape_11.setTransform(107,139.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhJB6IB1jzIAdAAIh1Dzg");
	this.shape_12.setTransform(87.1,139.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgjB9IBAhkQgPAIgQAAQgTABgPgFQgQgGgMgKQgLgKgHgOQgGgPAAgSQAAgTAHgQQAGgPANgKQAMgKAQgFQARgFARAAQATAAAQAFQAQAFAMAKQANAKAGAPQAHAQAAATQAAAPgEALQgEAMgIALIhMB4gAgXhfQgLADgIAHQgIAIgFAKQgEAKAAANQAAANAEAKQAFALAIAHQAIAGAMADQALAEALAAQANAAALgEQALgDAIgGQAJgHAEgLQAFgKAAgNQAAgNgFgKQgFgKgIgIQgIgHgLgDQgLgEgNAAQgMAAgLAEg");
	this.shape_13.setTransform(68.4,139.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgiB4QgRgFgMgLQgNgLgGgQQgHgQAAgTIAAhTQAAgUAHgQQAGgPANgLQAMgLARgGQAQgFASAAQATAAAQAFQARAGAMALQAMALAHAPQAHAQAAAUIAABTQAAATgHAQQgHAQgMALQgMALgRAFQgQAHgTAAQgSAAgQgHgAgThhQgKACgHAFQgIAGgGAGQgFAIgDAJQgEAMAAAPIAABFQAAAOAEAMQADAJAFAIQAGAIAIAFQAHAEAKADQAJACAKAAQALAAAJgCQAKgDAHgEQAIgFAGgIQAFgIADgJQAEgMAAgOIAAhFQAAgPgEgMQgDgJgFgIQgGgGgIgGQgHgFgKgCQgJgDgLAAQgKAAgJADg");
	this.shape_14.setTransform(46.7,139.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(33.2,72.9,107.7,89.9), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.button();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,175,54), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.team2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,108,127), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.team1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.897,0.897);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,104,139.9), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgrqAdTMAAAg6lMBXVAAAMAAAA6lg");
	this.shape.setTransform(279.5,187.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,559,375), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Symbol2, null, null);


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


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol7();
	this.instance.parent = this;
	this.instance.setTransform(52,69.9,1,1,0,0,0,52,69.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(0,0,104,139.9), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol8();
	this.instance.parent = this;
	this.instance.setTransform(54,63.5,1,1,0,0,0,54,63.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,0,108,127), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.foot1();
	this.instance.parent = this;

	this.instance_1 = new lib.Symbol2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(234.5,155,1,1,0,0,0,234.5,155);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,469,310), null);


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
	this.instance_3 = new lib.Symbol13();
	this.instance_3.parent = this;
	this.instance_3.setTransform(240.9,64.1,1,1,0,0,0,50.6,12);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(259).to({_off:false},0).wait(4).to({x:250.9,y:54.1},3).to({x:240.9,y:64.1},3).wait(45).to({alpha:0},5).wait(1));

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

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(259).to({_off:false},0).wait(2).to({x:246.5},4).to({x:237},4).wait(45).to({alpha:0},5).wait(1));

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
	this.instance_23.setTransform(240.4,69.4,1,1,0,0,0,62.5,23);
	this.instance_23._off = true;

	var maskedShapeInstanceList = [this.instance_23];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(99).to({_off:false},0).wait(4).to({x:249.9,y:59.9},3).to({x:240.4,y:69.4},3).wait(45).to({alpha:0},5).to({_off:true},1).wait(160));

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

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(9).to({regX:14.4,scaleX:20.02,scaleY:20.02,x:132.7},0).to({regX:15.3,scaleX:1,scaleY:1,x:151.6,alpha:1},10).wait(21).to({_off:true},1).wait(279));

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
	this.instance.setTransform(302.3,147,1,1,0,0,0,263.6,116);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.ramka();
	this.instance_1.parent = this;
	this.instance_1.setTransform(21,20);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 6
	this.instance_2 = new lib.Symbol1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(124.5,152,1,1,0,0,0,234.5,155);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-159.1,122.1,1038.2,375);
// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 24,
	color: "#5B191C",
	opacity: 1.00,
	manifest: [
		{src:"images/button.png?1488891050085", id:"button"},
		{src:"images/foot1.jpg?1488891050085", id:"foot1"},
		{src:"images/foot2.jpg?1488891050085", id:"foot2"},
		{src:"images/foot3.jpg?1488891050085", id:"foot3"},
		{src:"images/foot4.jpg?1488891050085", id:"foot4"},
		{src:"images/logo.png?1488891050085", id:"logo"},
		{src:"images/ramka.png?1488891050085", id:"ramka"},
		{src:"images/stav.png?1488891050085", id:"stav"},
		{src:"images/team1.png?1488891050085", id:"team1"},
		{src:"images/team2.png?1488891050085", id:"team2"},
		{src:"images/team3.png?1488891050085", id:"team3"},
		{src:"images/team4.png?1488891050085", id:"team4"},
		{src:"images/team5.png?1488891050085", id:"team5"},
		{src:"images/team6.png?1488891050085", id:"team6"},
		{src:"images/team7.png?1488891050085", id:"team7"},
		{src:"images/team8.png?1488891050085", id:"team8"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;