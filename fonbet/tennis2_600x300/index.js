(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,629,338);


(lib.ball = function() {
	this.initialize(img.ball);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,59);


(lib.button = function() {
	this.initialize(img.button);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,290,80);


(lib.girl = function() {
	this.initialize(img.girl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,253,316);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,142,43);


(lib.service = function() {
	this.initialize(img.service);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,76,64);


(lib.service1 = function() {
	this.initialize(img.service1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,66,65);


(lib.service2 = function() {
	this.initialize(img.service2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,72,65);


(lib.service3 = function() {
	this.initialize(img.service3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,62,63);// helper functions:

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


(lib.Tween39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.girl();
	this.instance.parent = this;
	this.instance.setTransform(-126.5,-158);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-126.5,-158,253,316);


(lib.Symbol53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ball();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.423,0.423);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol53, new cjs.Rectangle(0,0,25,25), null);


(lib.Symbol48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.button();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol48, new cjs.Rectangle(0,0,290,80), null);


(lib.Symbol42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhjBEQANgDAIgFQAJgGAHgJQAHgKAGgPQAFgPAHgWIAXhUIByAAIggDHIgmAAIAbinIgrAAIgRA9QgIAdgIATQgMAYgIAJQgFAHgGAFIgPAIQgUAHgOACg");
	this.shape.setTransform(11.8,15.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol42, new cjs.Rectangle(0,0,23.9,33), null);


(lib.Symbol41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhGBkIAgjHIBtAAIgFAgIhIAAIgHAwIA2AAIAAAfIg7AAIgJA4IBJAAIgEAgg");
	this.shape.setTransform(10,15.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol41, new cjs.Rectangle(0,0,18.4,33), null);


(lib.Symbol40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgtBkIAaimIg5AAIAFghICUAAIAAAhIg7AAIgZCmg");
	this.shape.setTransform(12,15.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol40, new cjs.Rectangle(0,0,20.8,33), null);


(lib.Symbol39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAXBkIANhWIhMAAIgOBWIglAAIAfjHIAmAAIgMBPIBMAAIAMhPIAmAAIgfDHg");
	this.shape.setTransform(12.1,15.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol39, new cjs.Rectangle(0,0,23.5,33), null);


(lib.Symbol38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAZBkIAWiKIhmCKIglAAIAfjHIAkAAIgVCHIBkiHIAnAAIgfDHg");
	this.shape.setTransform(12.2,15.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol38, new cjs.Rectangle(0,0,23.7,33), null);


(lib.Symbol37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhGBkIAgjHIBtAAIgFAgIhIAAIgHAwIA2AAIAAAfIg7AAIgJA4IBJAAIgEAgg");
	this.shape.setTransform(10,15.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol37, new cjs.Rectangle(0,0,18.4,33), null);


(lib.Symbol36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAZBkIAWiKIhmCKIglAAIAfjHIAkAAIgVCHIBkiHIAnAAIgfDHg");
	this.shape.setTransform(12.2,15.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol36, new cjs.Rectangle(0,0,23.7,33), null);


(lib.Symbol35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhEBkIAgjHIBoAAIAAAiIhIAAIgaClg");
	this.shape.setTransform(9.8,15.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol35, new cjs.Rectangle(0,0,17.9,33), null);


(lib.Symbol34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhKBkIAgjHIAuAAQARAAAOAEQANADAJAIQAJAHAEALQAFAKAAAOQAAAPgGANQgGANgLAIQgLAJgPAFQgXAFgMAAIgPAAIgMBKgAgUgDIANAAQAKAAAJgCQAIgDAGgFQAGgFADgHQACgHAAgIQAAgIgCgFQgCgFgEgEQgFgEgGgBQgHgCgJAAIgLAAg");
	this.shape.setTransform(10.4,15.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol34, new cjs.Rectangle(0,0,19.8,33), null);


(lib.Symbol33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AApBkIAgjHIAmAAIggDHgAhuBkIAgjHIAmAAIgLBIIAKAAQARAAANAEQAMADAJAIQAJAIAEAJQAFALAAAOIgCAPQgBAHgDAHQgHANgLAJQgLAKgQAEQgQAFgTAAgAhDBGIALAAQALAAAIgCQAJgDAGgFQAHgFACgHQAEgIAAgJQAAgHgCgGQgDgFgEgEQgEgDgHgCQgGgCgKAAIgMAAg");
	this.shape.setTransform(14,15.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol33, new cjs.Rectangle(0,0,27.3,33), null);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAXBkIANhWIhMAAIgOBWIglAAIAfjHIAmAAIgMBPIBMAAIAMhPIAmAAIgfDHg");
	this.shape.setTransform(12.1,15.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol32, new cjs.Rectangle(0,0,23.5,33), null);


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AArAxIhEAAIgZAyIgmAAIBljHIAnAAIAlDCIgmAHgAAmASIgNhNIgkBNIAxAAg");
	this.shape.setTransform(10.4,15.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol31, new cjs.Rectangle(0,0,23.1,33), null);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAFBkIALhFQgQABgNAAQgOAAgMgCQgLgEgIgGQgHgGgEgKQgEgJAAgNQAAgLACgLIAJg7IAlAAIgJA8IgCAQQAAAMAIAFQAEAEAFABQAGABAIAAQANAAANgCIAPhhIAmAAIgfDHg");
	this.shape.setTransform(11.8,15.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol30, new cjs.Rectangle(0,0,21.4,33), null);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AArAxIhEAAIgZAyIgmAAIBljHIAnAAIAlDCIgmAHgAAmASIgNhNIgkBNIAxAAg");
	this.shape.setTransform(10.4,15.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol29, new cjs.Rectangle(0,0,23.1,33), null);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhjBEQANgDAIgFQAJgGAHgJQAHgKAGgPQAFgPAHgWIAXhUIByAAIggDHIgmAAIAbinIgrAAIgRA9QgIAdgIATQgMAYgIAJQgFAHgGAFIgPAIQgUAHgOACg");
	this.shape.setTransform(11.8,15.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol28, new cjs.Rectangle(0,0,23.9,33), null);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAZBkIAWiKIhmCKIglAAIAfjHIAkAAIgVCHIBkiHIAnAAIgfDHg");
	this.shape.setTransform(12.2,15.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol27, new cjs.Rectangle(0,0,23.7,33), null);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgfBiIgNgHQgGgEgGgGQgFgFgEgHIgGgOQgFgLgBgaQAAgMABgLQACgMAFgMQADgLAGgJQAFgKAHgIQAHgIAIgHQAJgGAJgFQAJgFAJgCQAMgDAKABQAQAAAOAEQANAFAKAIIgKAiQgKgJgKgFQgLgFgMAAQgHAAgHACQgHACgFADQgLAHgKAMQgIAMgEAPQgFAQAAAPQAAAOAEAMQADAKAGAHQAGAHAIAEQAJAEAKgBQALABANgFQALgEAMgHIAAAhQgLAHgNADQgOAFgOAAQgWgCgLgEg");
	this.shape.setTransform(11.4,15.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol26, new cjs.Rectangle(0,0,21.1,33), null);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhEBkIAfjHIAlAAIgKBIIAKAAQAQAAANAEQANADAJAIQAJAHAEAKQAFAKAAAOIgCAQQgBAHgDAHQgGANgMAJQgMAKgQAEQgQAFgTAAgAgaBGIAMAAQAKAAAIgCQAIgDAGgFQAHgFADgHQADgHAAgJQAAgIgCgFQgCgFgFgFQgEgDgHgCQgGgCgIAAIgMAAg");
	this.shape.setTransform(9.8,15.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol25, new cjs.Rectangle(0,0,19.9,33), null);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAWBkIAbimIhLAAIgbCmIgmAAIAgjHICXAAIggDHg");
	this.shape.setTransform(12.1,15.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol24, new cjs.Rectangle(0,0,23.4,33), null);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgaBnIgQgGQgHgDgHgEIgLgKIgJgMIgGgQQgEgLgCgZQAAgNADgNQACgNAFgNQAEgMAHgKQAGgLAIgIIAOgLQAHgFAIgDQAIgEAJgBQAHgCAKAAIASABQAIACAIAEQAHADAGAEQAGAEAFAGIAJANIAHAPQAFAWAAAOQAAAOgDAMQgCAOgEALQgFANgGAKQgHAKgIAJIgOALQgHAFgIADQgHADgJACQgJACgIAAgAgIhFQgIAEgHAHQgGAGgEAHQgFAJgEAJQgDALgCALQgCALAAAMQAAAOADAKQACAKAGAHQAFAHAIAEQAHAEAKAAQAJAAAIgEQAIgEAHgHQAGgFAFgJQAEgIAEgKQADgKACgMQACgKAAgNQAAgNgCgKQgDgLgFgGQgGgIgHgDQgIgDgKgBQgJABgIADg");
	this.shape.setTransform(12.4,15.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol23, new cjs.Rectangle(0,0,24.3,33), null);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA+BMIh+AAIgHAuIgjAAIAMhOQAQgNAMgNQALgNAJgNQAJgOAIgRQAHgQAFgVIAOgvIBuAAIgbClIAYAAIgNBNIgkAFgAAQhDQgFAUgGAQQgGAQgIANQgIAMgKAMQgIALgMALIBaAAIAViIIgpAAg");
	this.shape.setTransform(11.5,17.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol22, new cjs.Rectangle(0,0,25.2,33), null);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AArAxIhEAAIgZAyIgmAAIBljHIAnAAIAlDCIgmAHgAAmASIgNhNIgkBNIAxAAg");
	this.shape.setTransform(10.4,15.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol21, new cjs.Rectangle(0,0,23.1,33), null);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhKBkIAgjHIAuAAQARAAAOAEQANADAJAIQAJAHAEALQAFAKAAAOQAAAPgGANQgGANgLAIQgLAJgPAFQgXAFgMAAIgPAAIgMBKgAgUgDIANAAQAKAAAJgCQAIgDAGgFQAGgFADgHQACgHAAgIQAAgIgCgFQgCgFgEgEQgFgEgGgBQgHgCgJAAIgLAAg");
	this.shape.setTransform(10.4,15.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(0,0,19.8,33), null);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAZBkIAWiKIhmCKIglAAIAfjHIAkAAIgVCHIBkiHIAnAAIgfDHg");
	this.shape.setTransform(12.2,15.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(0,0,23.7,33), null);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgfBiIgNgHQgGgEgGgGQgFgFgEgHIgGgOQgFgLgBgaQAAgMABgLQACgMAFgMQADgLAGgJQAFgKAHgIQAHgIAIgHQAJgGAJgFQAJgFAJgCQAMgDAKABQAQAAAOAEQANAFAKAIIgKAiQgKgJgKgFQgLgFgMAAQgHAAgHACQgHACgFADQgLAHgKAMQgIAMgEAPQgFAQAAAPQAAAOAEAMQADAKAGAHQAGAHAIAEQAJAEAKgBQALABANgFQALgEAMgHIAAAhQgLAHgNADQgOAFgOAAQgWgCgLgEg");
	this.shape.setTransform(11.4,15.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(0,0,21.1,33), null);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhGBkIAgjHIBtAAIgFAgIhIAAIgHAwIA2AAIAAAfIg7AAIgJA4IBJAAIgEAgg");
	this.shape.setTransform(10,15.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(0,0,18.4,33), null);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhFBkIAfjHIBsAAIAAAhIhMAAIgHAuIANAAQARAAANADQAMADAIAIQAJAGAEAJQAEAKAAANQAAAPgGAMQgGANgKAJQgLAJgPAFQgQAFgRAAgAgcBGIAQAAQAJABAHgDQAIgDAGgEQAFgFADgGQAEgHAAgJQAAgGgCgFQgCgEgEgEQgEgDgGgCQgHgCgHAAIgQAAg");
	this.shape.setTransform(9.9,15.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(0,0,19.9,33), null);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhGBkIAgjHIBtAAIgFAgIhIAAIgHAwIA2AAIAAAfIg7AAIgJA4IBJAAIgEAgg");
	this.shape.setTransform(10,15.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(0,0,18.4,33), null);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAWBkIAbimIhLAAIgbCmIgmAAIAgjHICXAAIggDHg");
	this.shape.setTransform(12.1,15.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(0,0,23.4,33), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgaBnIgQgGQgHgDgHgEIgLgKIgJgMIgGgQQgEgLgCgZQAAgNADgNQACgNAFgNQAEgMAHgKQAGgLAIgIIAOgLQAHgFAIgDQAIgEAJgBQAHgCAKAAIASABQAIACAIAEQAHADAGAEQAGAEAFAGIAJANIAHAPQAFAWAAAOQAAAOgDAMQgCAOgEALQgFANgGAKQgHAKgIAJIgOALQgHAFgIADQgHADgJACQgJACgIAAgAgIhFQgIAEgHAHQgGAGgEAHQgFAJgEAJQgDALgCALQgCALAAAMQAAAOADAKQACAKAGAHQAFAHAIAEQAHAEAKAAQAJAAAIgEQAIgEAHgHQAGgFAFgJQAEgIAEgKQADgKACgMQACgKAAgNQAAgNgCgKQgDgLgFgGQgGgIgHgDQgIgDgKgBQgJABgIADg");
	this.shape.setTransform(12.4,15.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(0,0,24.3,33), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhFBkIAfjHIBsAAIAAAhIhMAAIgHAuIANAAQARAAANADQAMADAIAIQAJAGAEAJQAEAKAAANQAAAPgGAMQgGANgKAJQgLAJgPAFQgQAFgRAAgAgcBGIAQAAQAJABAHgDQAIgDAGgEQAFgFADgGQAEgHAAgJQAAgGgCgFQgCgEgEgEQgEgDgGgCQgHgCgHAAIgQAAg");
	this.shape.setTransform(9.9,15.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,0,19.9,33), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhGBkIAgjHIBtAAIgFAgIhIAAIgHAwIA2AAIAAAfIg7AAIgJA4IBJAAIgEAgg");
	this.shape.setTransform(10,15.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,0,18.4,33), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA+BMIh+AAIgHAuIgjAAIAMhOQAQgNAMgNQALgNAJgNQAJgOAIgRQAHgQAFgVIAOgvIBuAAIgbClIAYAAIgNBNIgkAFgAAQhDQgFAUgGAQQgGAQgIANQgIAMgKAMQgIALgMALIBaAAIAViIIgpAAg");
	this.shape.setTransform(11.5,17.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,25.2,33), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhbBFQAKAAAJgDQAIgCAHgDQAHgEAGgGQAGgFAFgIIABgBIguiFIAngFIAgBmIA4hkIArAAIhbCSQgJAPgKALQgKAKgLAHQgLAGgNADQgNADgPAAg");
	this.shape.setTransform(12.7,15.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,22.2,33), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","#000000"],[0,1],-185,0,185,0).s().p("A85ejMAAAg9FMA5zAAAMAAAA9Fg");
	this.shape.setTransform(185,195.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,370,391), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.service();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,76,64), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.service1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,66,65), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.service2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,72,65), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.service3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,62,63), null);


(lib.Symbol54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween39("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(126.5,158);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol54, new cjs.Rectangle(0,0,253,316), null);


(lib.Symbol52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol53();
	this.instance.parent = this;
	this.instance.setTransform(26.6,-61.9,0.843,0.843,0,0,0,12.5,12.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:12.3,scaleX:0.88,scaleY:0.88,rotation:896.5,guide:{path:[26.6,-61.8,-8.7,-56.5,-41.8,-42.8,-78.1,-27.7,-111.6,-6.9,-128.4,3.5,-140.7,17.8,-143.2,20.7,-146.2,23.2,-148,20,-150.3,17.1]}},12,cjs.Ease.get(-1)).to({regY:12.5,scaleX:1,scaleY:1,rotation:1800,guide:{path:[-150.5,17,-155.6,10.8,-163.1,5.9,-177.7,-3.5,-197,-5.2,-239.1,-8.9,-278.3,1.4,-295.8,6,-308.4,17.3,-308.4,19.8,-308.4,22.2,-321.7,16.9,-333.3,14.5,-349,11,-366,12.4,-385.3,14,-399.2,22.2,-410.9,22.2,-422.6,22.2,-589.8,31.2,-757,40.1]}},37,cjs.Ease.get(1)).wait(51));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(16.1,-72.3,21.1,21);


(lib.Symbol51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol54();
	this.instance.parent = this;
	this.instance.setTransform(126.5,158,1,1,0,0,0,126.5,158);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:161.1},24,cjs.Ease.get(-1)).to({y:171},25,cjs.Ease.get(1)).to({y:164.5},25,cjs.Ease.get(-1)).to({y:158},25,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,253,316);


(lib.Symbol47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol48();
	this.instance.parent = this;
	this.instance.setTransform(145,40,1,1,0,0,0,145,40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({scaleX:0.98,scaleY:0.98},2,cjs.Ease.get(-1)).to({scaleX:0.94,scaleY:0.94,x:145.1},3,cjs.Ease.get(1)).to({regX:145.1,scaleX:0.96,scaleY:0.96,x:145.2},2,cjs.Ease.get(-1)).to({regX:145,scaleX:1,scaleY:1,x:145},3,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,290,80);


(lib.Symbol46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol5();
	this.instance.parent = this;
	this.instance.setTransform(33,32.5,1,1,0,0,0,33,32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol46, new cjs.Rectangle(0,0,66,65), null);


(lib.Symbol45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(31,31.5,1,1,0,0,0,31,31.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol45, new cjs.Rectangle(0,0,62,63), null);


(lib.Symbol44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol6();
	this.instance.parent = this;
	this.instance.setTransform(38,32,1,1,0,0,0,38,32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol44, new cjs.Rectangle(0,0,76,64), null);


(lib.Symbol43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol4();
	this.instance.parent = this;
	this.instance.setTransform(36,32.5,1,1,0,0,0,36,32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol43, new cjs.Rectangle(0,0,72,65), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ь
	this.instance = new lib.Symbol25();
	this.instance.parent = this;
	this.instance.setTransform(290.5,16.4,1,1,0,0,0,9.9,16.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(124).to({_off:false},0).to({rotation:360,alpha:1},10).wait(68).to({regX:9.8,regY:16.4,rotation:370.7,x:290.4,y:16.3},5).to({regX:9.9,regY:16.5,rotation:360,x:290.5,y:16.4},5).wait(52).to({rotation:720,alpha:0},10).to({_off:true},1).wait(55));

	// С
	this.instance_1 = new lib.Symbol26();
	this.instance_1.parent = this;
	this.instance_1.setTransform(274.3,16.4,1,1,0,0,0,10.6,16.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(126).to({_off:false},0).to({rotation:360,alpha:1},10).wait(65).to({rotation:371.5},5).to({rotation:360},5).wait(51).to({rotation:720,alpha:0},10).to({_off:true},2).wait(56));

	// И
	this.instance_2 = new lib.Symbol27();
	this.instance_2.parent = this;
	this.instance_2.setTransform(256,16.4,1,1,0,0,0,11.8,16.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(128).to({_off:false},0).to({rotation:360,alpha:1},10).wait(62).to({rotation:369},5).to({rotation:360},5).wait(50).to({rotation:720,alpha:0},10).to({_off:true},1).wait(59));

	// Л
	this.instance_3 = new lib.Symbol28();
	this.instance_3.parent = this;
	this.instance_3.setTransform(236.5,16.4,1,1,0,0,0,12,16.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(130).to({_off:false},0).to({rotation:360,alpha:1},10).wait(58).to({rotation:372.7},5).to({rotation:360},5).wait(50).to({rotation:720,alpha:0},10).to({_off:true},2).wait(60));

	// А
	this.instance_4 = new lib.Symbol29();
	this.instance_4.parent = this;
	this.instance_4.setTransform(217.1,16.4,1,1,0,0,0,11.5,16.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(132).to({_off:false},0).to({rotation:360,alpha:1},10).wait(54).to({regY:16.4,rotation:374,x:217.2,y:16.3},5).to({regY:16.5,rotation:360,x:217.1,y:16.4},5).wait(50).to({rotation:720,alpha:0},10).to({_off:true},4).wait(60));

	// Ч
	this.instance_5 = new lib.Symbol30();
	this.instance_5.parent = this;
	this.instance_5.setTransform(199.1,16.4,1,1,0,0,0,10.7,16.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(134).to({_off:false},0).to({rotation:360,alpha:1},10).wait(50).to({regX:10.8,regY:16.4,rotation:370.5,x:199.2},5).to({regX:10.7,regY:16.5,rotation:360,x:199.1},5).wait(50).to({rotation:720,alpha:0},10).to({_off:true},6).wait(60));

	// А
	this.instance_6 = new lib.Symbol31();
	this.instance_6.parent = this;
	this.instance_6.setTransform(181.1,16.4,1,1,0,0,0,11.5,16.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(136).to({_off:false},0).to({rotation:360,alpha:1},10).wait(46).to({regY:16.4,rotation:374,y:16.3},5).to({regY:16.5,rotation:360,y:16.4},5).wait(50).to({rotation:720,alpha:0},10).to({_off:true},8).wait(60));

	// Н
	this.instance_7 = new lib.Symbol32();
	this.instance_7.parent = this;
	this.instance_7.setTransform(162,16.4,1,1,0,0,0,11.7,16.5);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(138).to({_off:false},0).to({rotation:360,alpha:1},10).wait(42).to({regX:11.8,regY:16.4,rotation:371.7,x:162.1},5).to({regX:11.7,regY:16.5,rotation:360,x:162},5).wait(50).to({rotation:720,alpha:0},10).to({_off:true},10).wait(60));

	// Ы
	this.instance_8 = new lib.Symbol33();
	this.instance_8.parent = this;
	this.instance_8.setTransform(135,16.4,1,1,0,0,0,13.7,16.5);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(140).to({_off:false},0).to({rotation:360,alpha:1},10).wait(38).to({regY:16.4,rotation:372.2,x:135.1,y:16.3},5).to({regY:16.5,rotation:360,x:135,y:16.4},5).wait(50).to({rotation:720,alpha:0},10).to({_off:true},12).wait(60));

	// Р
	this.instance_9 = new lib.Symbol34();
	this.instance_9.parent = this;
	this.instance_9.setTransform(115.6,16.4,1,1,0,0,0,9.9,16.5);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(142).to({_off:false},0).to({rotation:360,alpha:1},10).wait(34).to({regX:10,rotation:368,x:115.7,y:16.5},5).to({regX:9.9,rotation:360,x:115.6,y:16.4},5).wait(50).to({rotation:720,alpha:0},10).to({_off:true},14).wait(60));

	// Г
	this.instance_10 = new lib.Symbol35();
	this.instance_10.parent = this;
	this.instance_10.setTransform(101,16.4,1,1,0,0,0,9,16.5);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(144).to({_off:false},0).to({rotation:360,alpha:1},10).wait(30).to({regY:16.4,rotation:365.2,y:16.3},5).to({regY:16.5,rotation:360,y:16.4},5).wait(50).to({rotation:720,alpha:0},10).to({_off:true},16).wait(60));

	// И
	this.instance_11 = new lib.Symbol36();
	this.instance_11.parent = this;
	this.instance_11.setTransform(84.3,16.4,1,1,0,0,0,11.8,16.5);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(146).to({_off:false},0).to({rotation:360,alpha:1},10).wait(26).to({regX:11.9,rotation:367.7,x:84.5},5).to({regX:11.8,rotation:360,x:84.3},5).wait(50).to({rotation:720,alpha:0},10).to({_off:true},18).wait(60));

	// Е
	this.instance_12 = new lib.Symbol37();
	this.instance_12.parent = this;
	this.instance_12.setTransform(61.7,16.4,1,1,0,0,0,9.2,16.5);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(148).to({_off:false},0).to({rotation:360,alpha:1},10).wait(22).to({rotation:368,y:16.5},5).to({rotation:360,y:16.4},5).wait(50).to({rotation:720,alpha:0},10).to({_off:true},20).wait(60));

	// И
	this.instance_13 = new lib.Symbol38();
	this.instance_13.parent = this;
	this.instance_13.setTransform(44.8,16.4,1,1,0,0,0,11.8,16.5);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(150).to({_off:false},0).to({rotation:360,alpha:1},10).wait(18).to({regY:16.4,rotation:367.7,y:16.3},5).to({regY:16.5,rotation:360,y:16.4},5).wait(50).to({rotation:720,alpha:0},10).to({_off:true},22).wait(60));

	// Н
	this.instance_14 = new lib.Symbol39();
	this.instance_14.parent = this;
	this.instance_14.setTransform(25.4,16.4,1,1,0,0,0,11.7,16.5);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(152).to({_off:false},0).to({rotation:360,alpha:1},10).wait(14).to({regX:11.8,rotation:366.5,x:25.5},5).to({regX:11.7,rotation:360,x:25.4},5).wait(50).to({rotation:720,alpha:0},10).to({_off:true},24).wait(60));

	// Т
	this.instance_15 = new lib.Symbol40();
	this.instance_15.parent = this;
	this.instance_15.setTransform(7.5,16.4,1,1,0,0,0,10.4,16.5);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(154).to({_off:false},0).to({rotation:360,alpha:1},10).wait(10).to({rotation:370.5},5).to({rotation:360},5).wait(50).to({rotation:720,alpha:0},10).to({_off:true},26).wait(60));

	// Е
	this.instance_16 = new lib.Symbol41();
	this.instance_16.parent = this;
	this.instance_16.setTransform(-7.8,16.4,1,1,0,0,0,9.2,16.5);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(156).to({_off:false},0).to({rotation:360,alpha:1},10).wait(6).to({regY:16.4,rotation:369.9},5).to({regY:16.5,rotation:360},5).wait(50).to({rotation:720,alpha:0},10).to({_off:true},28).wait(60));

	// Л
	this.instance_17 = new lib.Symbol42();
	this.instance_17.parent = this;
	this.instance_17.setTransform(-24.7,16.4,1,1,0,0,0,12,16.5);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(158).to({_off:false},0).to({rotation:360,alpha:1},10).wait(1).to({regX:11.8,regY:16.4,rotation:367.7,x:-24.9,y:16.3},5).to({regX:12,regY:16.5,rotation:360,x:-24.7,y:16.4},5).wait(51).to({rotation:720,alpha:0},10).to({_off:true},30).wait(60));

	// У
	this.instance_18 = new lib.Symbol9();
	this.instance_18.parent = this;
	this.instance_18.setTransform(288.1,16.5,1,1,0,0,0,11.1,16.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(60).to({regY:16.6,rotation:-12.4,x:288.2},4).to({regY:16.5,rotation:0,x:288.1},5).wait(50).to({rotation:360,alpha:0},10).wait(140).to({rotation:720,alpha:1},10).wait(51));

	// Д
	this.instance_19 = new lib.Symbol10();
	this.instance_19.parent = this;
	this.instance_19.setTransform(268.7,16.5,1,1,0,0,0,12.6,16.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(56).to({regY:16.6,rotation:-15.2},4).to({regY:16.5,rotation:0},5).wait(52).to({rotation:360,alpha:0},10).wait(144).to({rotation:720,alpha:1},10).wait(49));

	// Е
	this.instance_20 = new lib.Symbol11();
	this.instance_20.parent = this;
	this.instance_20.setTransform(251.1,16.5,1,1,0,0,0,9.2,16.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(52).to({rotation:-13.5},4).to({rotation:0},5).wait(54).to({rotation:360,alpha:0},10).wait(148).to({rotation:720,alpha:1},10).wait(47));

	// Б
	this.instance_21 = new lib.Symbol12();
	this.instance_21.parent = this;
	this.instance_21.setTransform(236.2,16.5,1,1,0,0,0,10,16.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(48).to({regY:16.6,rotation:-14.9,y:16.6},4).to({regY:16.5,rotation:0,y:16.5},5).wait(56).to({rotation:360,alpha:0},10).wait(152).to({rotation:720,alpha:1},10).wait(45));

	// О
	this.instance_22 = new lib.Symbol13();
	this.instance_22.parent = this;
	this.instance_22.setTransform(218.3,16.5,1,1,0,0,0,12.1,16.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(44).to({regX:12.2,rotation:-15.2,x:218.4,y:16.4},4).to({regX:12.1,rotation:0,x:218.3,y:16.5},5).wait(58).to({rotation:360,alpha:0},10).wait(156).to({rotation:720,alpha:1},10).wait(43));

	// П
	this.instance_23 = new lib.Symbol14();
	this.instance_23.parent = this;
	this.instance_23.setTransform(198.7,16.5,1,1,0,0,0,11.7,16.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(40).to({rotation:-15.2,x:198.8},4).to({rotation:0,x:198.7},5).wait(60).to({rotation:360,alpha:0},10).wait(160).to({rotation:720,alpha:1},10).wait(41));

	// Е
	this.instance_24 = new lib.Symbol15();
	this.instance_24.parent = this;
	this.instance_24.setTransform(176.2,16.5,1,1,0,0,0,9.2,16.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(36).to({regY:16.6,rotation:-13.7,x:176.3,y:16.6},4).to({regY:16.5,rotation:0,x:176.2,y:16.5},5).wait(62).to({rotation:360,alpha:0},10).wait(164).to({rotation:720,alpha:1},10).wait(39));

	// Б
	this.instance_25 = new lib.Symbol16();
	this.instance_25.parent = this;
	this.instance_25.setTransform(161.3,16.5,1,1,0,0,0,10,16.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(32).to({regY:16.6,rotation:-14.7},4).to({regY:16.5,rotation:0},5).wait(64).to({rotation:360,alpha:0},10).wait(168).to({rotation:720,alpha:1},10).wait(37));

	// Е
	this.instance_26 = new lib.Symbol17();
	this.instance_26.parent = this;
	this.instance_26.setTransform(146.3,16.5,1,1,0,0,0,9.2,16.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(28).to({regY:16.6,rotation:-13.5,y:16.6},4).to({regY:16.5,rotation:0,y:16.5},5).wait(66).to({rotation:360,alpha:0},10).wait(172).to({rotation:720,alpha:1},10).wait(35));

	// С
	this.instance_27 = new lib.Symbol18();
	this.instance_27.parent = this;
	this.instance_27.setTransform(130.8,16.5,1,1,0,0,0,10.6,16.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(24).to({rotation:-14.5},4).to({rotation:0},5).wait(68).to({rotation:360,alpha:0},10).wait(176).to({rotation:720,alpha:1},10).wait(33));

	// И
	this.instance_28 = new lib.Symbol19();
	this.instance_28.parent = this;
	this.instance_28.setTransform(106.6,16.5,1,1,0,0,0,11.8,16.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(20).to({regY:16.6,rotation:-13.7,y:16.6},4).to({regY:16.5,rotation:0,y:16.5},5).wait(70).to({rotation:360,alpha:0},10).wait(180).to({rotation:720,alpha:1},10).wait(31));

	// Р
	this.instance_29 = new lib.Symbol20();
	this.instance_29.parent = this;
	this.instance_29.setTransform(89.1,16.5,1,1,0,0,0,9.9,16.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(16).to({rotation:-15},4).to({rotation:0},5).wait(72).to({rotation:360,alpha:0},10).wait(184).to({rotation:720,alpha:1},10).wait(29));

	// А
	this.instance_30 = new lib.Symbol21();
	this.instance_30.parent = this;
	this.instance_30.setTransform(71.9,16.5,1,1,0,0,0,11.5,16.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(12).to({regX:11.6,rotation:-12.2,x:72,y:16.6},4).to({regX:11.5,rotation:0,x:71.9,y:16.5},5).wait(74).to({rotation:360,alpha:0},10).wait(188).to({rotation:720,alpha:1},10).wait(27));

	// Д
	this.instance_31 = new lib.Symbol22();
	this.instance_31.parent = this;
	this.instance_31.setTransform(52,16.5,1,1,0,0,0,12.6,16.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(8).to({regY:16.6,rotation:-15.7,x:52.1,y:16.7},4).to({regY:16.5,rotation:0,x:52,y:16.5},5).wait(76).to({rotation:360,alpha:0},10).wait(192).to({rotation:720,alpha:1},10).wait(25));

	// О
	this.instance_32 = new lib.Symbol23();
	this.instance_32.parent = this;
	this.instance_32.setTransform(31.5,16.5,1,1,0,0,0,12.1,16.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(4).to({rotation:-14.7},4).to({rotation:0},5).wait(78).to({rotation:360,alpha:0},10).wait(196).to({rotation:720,alpha:1},10).wait(23));

	// П
	this.instance_33 = new lib.Symbol24();
	this.instance_33.parent = this;
	this.instance_33.setTransform(11.9,16.5,1,1,0,0,0,11.7,16.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_33).to({regY:16.6,rotation:-15.2,x:12,y:16.6},4).to({regY:16.5,rotation:0,x:11.9,y:16.5},5).wait(80).to({rotation:360,alpha:0},10).wait(200).to({rotation:720,alpha:1},10).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.2,0,299,33);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// service1.png
	this.instance = new lib.Symbol46();
	this.instance.parent = this;
	this.instance.setTransform(182,32.5,1,1,0,0,0,33,32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({scaleX:1.11,scaleY:1.11,y:32.6},4,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,y:32.5},5,cjs.Ease.get(1)).wait(29));

	// service3.png
	this.instance_1 = new lib.Symbol45();
	this.instance_1.parent = this;
	this.instance_1.setTransform(119,34.5,1,1,0,0,0,31,31.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({regX:31.1,regY:31.4,scaleX:1.14,scaleY:1.14,x:119.2},4,cjs.Ease.get(-1)).to({regX:31,regY:31.5,scaleX:1,scaleY:1,x:119},5,cjs.Ease.get(1)).wait(33));

	// service.png
	this.instance_2 = new lib.Symbol44();
	this.instance_2.parent = this;
	this.instance_2.setTransform(51,34.5,1,1,0,0,0,38,32);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({regX:38.1,scaleX:1.12,scaleY:1.12,x:51.2,y:34.6},4,cjs.Ease.get(-1)).to({regX:38,scaleX:1,scaleY:1,x:51,y:34.5},5,cjs.Ease.get(1)).wait(37));

	// service2.png
	this.instance_3 = new lib.Symbol43();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-27,32.5,1,1,0,0,0,36,32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1.11,scaleY:1.11},4,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},5,cjs.Ease.get(1)).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63,0,278,66.5);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol7();
	this.instance.parent = this;
	this.instance.setTransform(465,181.6,1,1,0,0,0,185,195.5);
	this.instance.alpha = 0.641;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.back();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,-13.9,650,391), null);


(lib.Symbol49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol47();
	this.instance.parent = this;
	this.instance.setTransform(145,40,1,1,0,0,0,145,40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol49, new cjs.Rectangle(0,0,290,80), null);


(lib.Symbol50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol49();
	this.instance.parent = this;
	this.instance.setTransform(145,40,1,1,0,0,0,145,40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.03,scaleY:1.03,y:40.1},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,290,80);


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
		
		this.fon.x = stage.mouseX / 80;
		this.fon.y = - stage.mouseY / 80;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 7
	this.instance = new lib.Symbol8();
	this.instance.parent = this;
	this.instance.setTransform(442.8,37,1,1,0,0,0,149.5,16.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 5
	this.instance_1 = new lib.logo();
	this.instance_1.parent = this;
	this.instance_1.setTransform(15,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 4
	this.instance_2 = new lib.Symbol51();
	this.instance_2.parent = this;
	this.instance_2.setTransform(162.5,162,1,1,0,0,0,126.5,158);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Layer 6
	this.instance_3 = new lib.Symbol52();
	this.instance_3.parent = this;
	this.instance_3.setTransform(675.5,136.5,1,1,0,0,0,12.5,12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Layer 3
	this.instance_4 = new lib.Symbol50();
	this.instance_4.parent = this;
	this.instance_4.setTransform(440,247,1,1,0,0,0,145,40);
	new cjs.ButtonHelper(this.instance_4, 0, 1, 2, false, new lib.Symbol50(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Layer 2
	this.instance_5 = new lib.Symbol2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(401,127.6,1.097,1.097,0,0,0,38,32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Layer 1
	this.fon = new lib.Symbol1();
	this.fon.parent = this;
	this.fon.setTransform(0,0.1,1,1,0,0,0,24,19.1);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(276,117.1,724.1,391);
// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/back.jpg?1496306857303", id:"back"},
		{src:"images/ball.png?1496306857303", id:"ball"},
		{src:"images/button.png?1496306857303", id:"button"},
		{src:"images/girl.png?1496306857303", id:"girl"},
		{src:"images/logo.png?1496306857303", id:"logo"},
		{src:"images/service.png?1496306857303", id:"service"},
		{src:"images/service1.png?1496306857303", id:"service1"},
		{src:"images/service2.png?1496306857303", id:"service2"},
		{src:"images/service3.png?1496306857303", id:"service3"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;