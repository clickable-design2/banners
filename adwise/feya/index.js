(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,675,401);


(lib.Feya_03 = function() {
	this.initialize(img.Feya_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,115,107);


(lib.Feya_06 = function() {
	this.initialize(img.Feya_06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,71,43);


(lib.Feya_09 = function() {
	this.initialize(img.Feya_09);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,180);


(lib.Feya_12 = function() {
	this.initialize(img.Feya_12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,60,82);


(lib.Feya_16 = function() {
	this.initialize(img.Feya_16);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,26,22);


(lib.Feya_22 = function() {
	this.initialize(img.Feya_22);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,96,152);


(lib.Feya_25 = function() {
	this.initialize(img.Feya_25);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,76,124);


(lib.Feya_28 = function() {
	this.initialize(img.Feya_28);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,56,128);


(lib.Feya_32 = function() {
	this.initialize(img.Feya_32);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,83,56);


(lib.Feya_35 = function() {
	this.initialize(img.Feya_35);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,52,76);


(lib.magik = function() {
	this.initialize(img.magik);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,130);


(lib.pautin = function() {
	this.initialize(img.pautin);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,650,593);


(lib.pricel = function() {
	this.initialize(img.pricel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,202,195);


(lib.rez = function() {
	this.initialize(img.rez);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,303,128);


(lib.rez1 = function() {
	this.initialize(img.rez1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,303,128);// helper functions:

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
	this.instance = new lib.back();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ43, new cjs.Rectangle(0,0,675,401), null);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgeDgQgLAAgDgEQgCgDACgEQABgDAEgCQAEgCALAAIBOAAQALAAAFADQAEABABAEQACADgDADQgCAEgLAAgAgfCrIgMgCQgGgCgBgFQAAgGAHgCQAEgCAIAAIBLABQAKAAAEACQADADAAAEQAAAEgEACQgEADgIAAgAAvByQgvgPgqgZQgNgHADgHQACgHAKABIAOAHQARAKATAKIAmAOQALADAEAEQAGAHgGAFQgDACgEAAQgEAAgFgCgAAuA4QgogVgMgIQgdgTgJgDQgOgGABgFQABgGAHgBQAFgBAHADQAMAEAPAJIAXARIAlAQQAKAEAFAGQACAEgCAEQgBAFgFABIgBAAQgEAAgIgDgAAtARQgIgBgFgDIgIgGIgPgHQgMgFgKgJQgLgLgDgCIgMgFQgFgDACgGQAAgGAGgCQAGgBAIAEQAHAEALAKQAKAKAHAEQADACAQAHIASAJQAGACADADQAEAFgDAEQgCADgHAAIgGAAgAgvhEQgIAAgDgCQgGgCAAgEQAAgGAGgCQAEgCAIAAQAXgBAsAEQAIAAAFACQAHADgBAGQAAAEgHACIgMABgAg5hlQgNAAgDgEQgEgFAFgFQAEgEAKAAIBAAAQAJAAAEADQADACAAAEQAAAFgEACQgFACgHAAgAg9iNQgFgCgBgFIABgDIgCgCQgEgEAEgGQACgEAHgEIAUgMQAMgIAFgJIAGgIQAFgGAFACQAGABABAGIAAACIACgHQACgHAFgEQAJgFAFAFQAEAEgCAJQgGARgMAOQgLAQgRAHIgYAIIgIAFIgGABIgDgBg");
	this.shape.setTransform(5.9,20.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ38, new cjs.Rectangle(-1.7,-1.9,15.2,44.9), null);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Feya_09();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ35, new cjs.Rectangle(0,0,122,180), null);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("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");
	this.shape.setTransform(222.4,170.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ34, new cjs.Rectangle(0,0,444.9,340.8), null);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pricel();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.574,0.574);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ29, new cjs.Rectangle(0,0,116.1,112), null);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhBCSIgggEIgWgHQgJgEAAgEIAAgfIAAgoIgBgtIAAgsIAAgrIABgjIABgYIADgJIAcgCIAygBIAQAAIAQABIALACQADACAAACIAAAiQAaADAYAGQAYAIARANQASANAKAUQALAVAAAbIgDAeIgIAcQgLAZgVAUQgUASgdALIggAIIgiADgAAABTIAFABIAGABQANAAAKgHQALgHAAgRQAAgRgMgKQgMgLgVAAg");
	this.shape.setTransform(177,35.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgQCSIgVgCIgGgDIgCgLIgEhKIgGhFIgYgBIgXAAQgJAAABgHIgCgfIAAgfIAAgbIACgaIACgGIAGgCIAjgBIAkAAIBDAAIBEADQAGABACAHIABAaIAAAZIgBA/IgDAGQgBACgEAAIgvAAIgCAfIgDAlIgDAoIgFAoQgBAGgJACIgYACg");
	this.shape_1.setTransform(150.5,35.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgqCPIgYgBQgJgBgEgEQgEgDAAgGIgFgmIgDgzIgEg2IgDgxIgCgoIAAgTQAAgFAGgDQAFgEAQgCIApgEIBDgCIA7AAQAHAAAAAJIgCAtIgEAmIgGAcQgDAKgCAAIgHAAIgMgBIgSgBIgZAAIAAALIAAAKIAYgBIAQgBIAKgBIAIAAQALAAAAALIgDASIgGAOQgGAIgjgBIgVAAIgBALIAAANIAOABIANAAIAQgBIASgBQAGAAABADIABAIIAAAYIgCAWIgFADIgOAFIgaACIgrAAg");
	this.shape_2.setTransform(126.2,36.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABxC5IgdgCIgNgBIgEgDIgBgSIgCg0Ih9AAIgCAiIgGAmIgIACIgOAAIgqAAIgWAAIgKgBIgBgBIgGhLIgCgeIgBgTQABAAAAgBQABAAAAAAQABgBAAAAQABAAABAAIANgCIASgBIAWAAQAIgHAEgPQAFgQAAgVIgBg5IgBgrIgCgiIAAghIABgGQACgDAEAAIA8AAIA8AAIBIgBIAiABIAgADQAFABAAAEIgDBwIgCB0IAPACIAAAdIgBAZIgBAXIgEAYIgGAcIgEABgAA3A0IgDg5IgDg7IgJgBIgKAAIgKAAIgKABQgDArgFAcQgDAdgGAPIAeAAIAgABg");
	this.shape_3.setTransform(96.1,40.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgyCVQgFgBAAgCIABgLIABgMIADgJQABgEADAAIAEABIAJABQAUAAAHgHQAIgHgBgGIgBgJQAAgEgFgDIgMgEIgYgCQgEABAAgGIAAgPQAAgHACAAQAdABAKgFQALgFAAgQQAAgKgHgHQgIgGgUAAIgSACIgHABQgDABgEgIIgJgUIgKgaIgIgcIgGgaIgDgQQAAgGAGgEIANgIIAUgEIAYgCQAbAAAXAHQAYAHARAPQASAQAKAWQALAYAAAfQAAATgEAMQgDANgHAKQgNATgSAHQAPAFAIAMQAIAMAAAOQABANgIALQgGAKgPAHQgdANgzAAg");
	this.shape_4.setTransform(67.8,35.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABKCQIgtgDIgFgCIgDgIIgCgJIAAgKIgNAHIgIADIgGgCIgFgEIgCALIgCAHIgFAEIgOABIgbABIghgBIgTgBIgIgCIgDgGIAAgCIABgFIAhiBIAliBIAEgFIAIgBIAQgCIAZAAIAjAAIAXACIALADIAFAFIAdCGIAaCHQAAAJgIAAgAgEAaIgIAlIAPgJIAIgBIAJACIgGgdIgJghg");
	this.shape_5.setTransform(44.2,36.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhDCUIgPAAIgKgBIgIAAIgFgTIgGgpIgHg3IgFg6IgFg2IgBgrQAAgFAJgEIAVgIIAhgFIAmgCIAiADIAgAIQAdAKAUATQALAKAIALIANAYQALAbAAAfQAAAbgKAUQgLAUgQANQgSAOgXAHQgWAHgZADIAAAdQAAAEgFADIgLADIgQABIgSABgAAFAAIAAA4QAPgBAKgKQAJgJAAgNQAAgNgJgGQgJgFgKAAIgEAAIgCABg");
	this.shape_6.setTransform(16.6,35.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ28, new cjs.Rectangle(0,0,193,66.4), null);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag0B1IgagEIgRgFQgHgDAAgDIAAgZIAAggIgBgkIAAgjIAAgiIABgcIABgUIACgHIAJgBIAOAAIASgBIAVAAIANAAIANABIAIABQABABABAAQAAAAABABQAAAAAAABQAAAAAAABIAAAbQAVACATAFQATAGAOAKQAOALAIAQQAEAIADAKQACAKAAAKQAAAMgDAMQgCALgEALQgJAVgRAPQgIAIgKAFQgKAGgLAFQgMAEgNACQgMACgPAAgAAABDIAJABQAKAAAIgGQAJgGAAgNQAAgGgCgGQgDgFgFgFQgFgEgGgCQgHgCgIAAg");
	this.shape.setTransform(208.6,20.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgMB0IgSgBIgDgCIgBgGIgDg/IgFg6IgVgBIgWAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAgBIgBgzIAAgVIABgWQAAgBAAgBQABAAAAAAQAAgBABAAQAAAAABAAIAdgBIAeAAQA4AAA4ADQABAAAAAAQABABAAAAQAAAAABABQAAABAAAAIAAAVIABAVIgBAaIAAAZQAAABAAABQgBAAAAAAQAAABgBAAQAAAAgBAAIgWAAIgVABIgBAZIgDAgIgDAiIgEAiQAAAFgYAAg");
	this.shape_1.setTransform(187.9,20.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhFBzIgHAAIgFgBIgCgBIgCgEIgCgKIAAgZIgBg0IABgqIAAgoIAAgZIAAgOIAAgIIACgEIABgBIADgCIAJAAIARAAIALAAIAHAAIACAAIACABIACADIAAAHIAAAiIgBAiIALgTIANgTIAPgUIAPgQIAGgEIANgCIANABIAXABQAHAAACACQACACAAAGIAAAmIAAAnIAAAmIAAAjIAAAcIAAASIgBALQgBAGgBACIgDABIgEACIgIAAIgNAAIgNAAIgHgCIgDgDIAAgGIAAgMIABgOIABgRIAAgWIgXAfIgUAeIgGAJQgDADgFABIgMACIgVABg");
	this.shape_2.setTransform(168,20.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABaCTIgXgBIgKgBIgDgCIgBgPQgCgOAAgbIhjAAIgCAbIgFAeQAAABgGABIgMAAIghAAIgSAAIgHgBIgBgBIgFg7IgCgZIAAgOIADgCIALgBIAOgBIASgBQAGgEADgNQAEgNAAgQIAAguIgCgiIgBgcIAAgZIABgFQABgCAEAAIAvgBIAwAAIA6gBIAaABIAaADIADABIABACIgCBaIgBBcIALACIAAAXIgBAUIAAASIgDAUIgFAWIgDAAgAArApIgCgtIgCgvIgIAAIgIAAIgHAAIgIAAQgCAigEAWQgDAYgEAMIAXAAIAZAAg");
	this.shape_3.setTransform(143.2,24.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgTB1QgLgDgJgEQgSgJgNgRQgNgPgHgYQgDgMgCgNIgCgaQAAgQAHgdQADgKAFgIQAFgJAGgIQANgOATgJQAJgEALgCQAKgCALAAQAMAAAKACQAKACAJAEQATAJAMAPQAMAPAGAUQAGAbAAAPQAAAXgGAXQgGAXgMASQgGAJgIAHQgHAHgKAGQgJAFgKADQgLACgMAAQgKAAgKgBgAgQgDQgFAGAAARQAAATAGALQAGAMAJABQAJgBAGgMQAGgLAAgTQAAgRgFgGQgFgGgKAAQgMAAgFAGg");
	this.shape_4.setTransform(118.3,20.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgwB0IgYgDIgQgDQgGgCAAgCIAAgRIgBgWIAAgYIAAgYIAAgSIAAgVIABgZIAAgZIABgUIABgQIABgFQAAgCAGgBIAWgBIAYgBIA1ABIAxADQABAAAAAAQABAAAAABQAAAAABAAQAAABAAABIAAAQIABASIgBAWIAAAVQAAABAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAIgOAAIgRAAIgSAAIgOABIAAAEIAAAGQATAAASAEQARAEANAHQAOAHAHAKQAIALAAAPQAAARgHAPQgGAOgOAKQgHAFgJAEIgUAHQghAGgUAAgAgBBSIAEABIAFAAQAJAAAIgEQAIgEAAgJQAAgIgJgGQgJgHgPABg");
	this.shape_5.setTransform(96.8,20.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgTB1QgLgDgJgEQgSgJgNgRQgNgPgHgYQgDgMgCgNIgCgaQAAgQAHgdQADgKAFgIQAFgJAGgIQANgOATgJQAJgEALgCQAKgCALAAQAMAAAKACQAKACAJAEQATAJAMAPQAMAPAGAUQAGAbAAAPQAAAXgGAXQgGAXgMASQgGAJgIAHQgHAHgKAGQgJAFgKADQgLACgMAAQgKAAgKgBgAgQgDQgFAGAAARQAAATAGALQAGAMAJABQAJgBAGgMQAGgLAAgTQAAgRgFgGQgFgGgKAAQgMAAgFAGg");
	this.shape_6.setTransform(74.8,20.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhAB3QgJAAgEgFQgDgFAAgJIgCguIgEg0IgDgxIgFgrIACgNIADgGQAIgGAQgCQAQgCAbAAQATAAASADQASAEARAKQALAGAIAJQAIAIAGALQAMAVgBAeQgCAYgEALQgHARgSAKQAMADAIAJQAJAIgBAPQAAAOgHAIQgHAIgLAEQgKAEgMAAIgXABIgZABIgbAAgAgCBMIAAAIIABAIIABAAIAFAAIAHgBIAHgDIAGgFQACgEABgFQAAgGgDgDQgEgEgEgBIgKgDIgIAAgAAEgGIgEABIAAAYIgBAZIADAAIAKgBIAJgEQAFgDADgFQACgFAAgHQABgLgGgIQgFgGgMAAg");
	this.shape_7.setTransform(53.5,20.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgMBwQgVgGgRgPQgRgOgLgXQgKgWAAggQAAgMACgLQACgMAFgLQAIgVAQgQQAPgQAWgJQALgFAKgCQAMgCANgBIAUABIANABIAKACIAIADQACABADAIIADAVIABAdIABAgQAAAAAAABQAAAAAAAAQgBABAAAAQgBAAgBAAIgIgCQgGgBgOAAQgMAAgJAEQgJADgHAHQgGAGgEAIQgDAJAAAKQAAAKADAJQAEAJAGAGQAGAHAJAEQAJAEALAAIAKAAIAGgCIAEgBIADgBIACABIABAFIAAAJIgBATQAAACgEACIgLAFIgQADIgSABQgegCgOgEg");
	this.shape_8.setTransform(33.2,20.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgTB1QgLgDgJgEQgSgJgNgRQgNgPgHgYQgDgMgCgNIgCgaQAAgQAHgdQADgKAFgIQAFgJAGgIQANgOATgJQAJgEALgCQAKgCALAAQAMAAAKACQAKACAJAEQATAJAMAPQAMAPAGAUQAGAbAAAPQAAAXgGAXQgGAXgMASQgGAJgIAHQgHAHgKAGQgJAFgKADQgLACgMAAQgKAAgKgBgAgQgDQgFAGAAARQAAATAGALQAGAMAJABQAJgBAGgMQAGgLAAgTQAAgRgFgGQgFgGgKAAQgMAAgFAGg");
	this.shape_9.setTransform(12.2,20.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ26, new cjs.Rectangle(0,0,221.1,42.4), null);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rez1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(0,0,303,128), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgeCHIgIgOIgHgQIgCgNIABgCIAEgDIAYgMIAXgNIAEgCIADgBQADAAAFAHIAJAPIAHARIAEAKQAAADgIAFIgQAJIgTAJIgRAGIgDABQgEAAgDgGgAgmBGIgBgBQgLgJgFgMQgEgKAAgOQAAgMAEgJQAFgIAGgHIAHgLIACgHQABgLgHgEQgGgEgKAAIgGAAIgEABIgCgCIgBgGIACgoQABgVAIgUQAAgBAAAAQAAAAABgBQAAAAABAAQAAAAABgBIAIAAQAZAAAXAEIATAFQAKAEAIAFQAQAKAJAQQAJARAAAYQAAALgDAJQgBAJgGAIQgJAOgSALQgOAJgFAIQgDAHAAAFIABAGIACADIACACIABADIgBADIgDACIgfAMQgKAEgIAAg");
	this.shape.setTransform(220.9,22.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAaBwQgPgGgMgNQgMgNgIgSQgIgTgCgXIgEAAIgMAAIgNABIAAAHIAAAHIgBAvIgBAfQAAAEgCABIgDAAIgNABIgNAAIgZgBIgVgBQgDgBgCgCIgCgIIgGhmQgCg1AAg3IABgFQACgBAEgBIANgBIASAAIAdAAIAZADIAEABIABADIAAAIIAAAPIgBAbIgBArIAMAAIALAAIADAAQABgXAGgUQAIgTAMgOQAGgHAGgGIARgJQAJgFAKgCQAJgBALAAQALAAAKACQALACAIAEQASAJALAPIAKARIAIASQAGAcAAAPQAAAXgGAXQgGAXgLASQgGAKgHAHQgIAHgJAFQgIAGgLADQgKACgMAAQgTAAgQgHgAArgDQgEAGAAARQAAATAGAMQAGAMAJAAQAJAAAGgMQAGgMgBgTQABgRgFgGQgFgGgKAAQgNAAgFAGg");
	this.shape_1.setTransform(195.7,20.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AggBzIgUgBQgHgBgDgCQgCgCgBgEIgEggIgDgqIgDgrIgCgqIgCggIAAgQQAAgDAFgCQAEgDAMgBIAigCIA2gBIAwAAQAAAAABAAQAAAAABAAQAAABAAAAQAAABAAAAIgBAkIgCAfIgEAWQgCAJgBAAIgQgBIgngBIgBAMIAAALIAbgCIAWgBIAIABQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABIgEAOIgEAPQgCADgdAAIgJAAIgLAAIgBAMIgBAOIAaABIAOgBIAPAAQACAAAAAEIAAAUIgBARIgEADIgLACIgVACIghAAg");
	this.shape_2.setTransform(169.6,21);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAHB0IgMgBIgMgBQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAAAIgBgIIgBgYQgugFgXgXQgNgMgFgPQgHgOAAgSQAAgPADgOQADgOAMgPQAHgHAHgFQAHgGAIgDQASgGAagFIAAgKQAAgGAFAAIALgCIAPAAIAPADIADABIAAADIAAAHIAAAFQAeAEAQAJQAQAJAJANQAKANAEANQAGANAAAOQAAAPgGAPQgEAPgMAMQgLAMgSAIQgIAEgLADIgYAEIAAAeIgBAFIgCAAIgGABgAgWAmIgBgkIgBglQgMAEgFAIQgEAHAAANQAAANAGAMQAGAKALAGgAAYgEIgBAkIAAACQAJgGAEgKQAFgJAAgMQAAgMgFgHQgEgIgIgDg");
	this.shape_3.setTransform(148,21);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhFB0IgIAAIgEgBIgCgCIgDgDIgBgKIgBgaIAAg0IAAgqIABgoIAAgaIAAgOIAAgHIABgFIACgBIADgCIAJAAIASAAIAKAAIAHAAIACAAIACABIABADIABAHIgBAiIAAAjIAMgTIAMgUIAPgUIAQgRIAGgDIAMgBIAOAAIAXABQAHABACABQACACAAAGIAAAmIAAApIAAAlIAAAjIgBAcIAAASIAAAMQAAAFgCACIgDACIgEACIgIAAIgOAAIgMAAIgHgCIgDgEIAAgFIAAgNIABgNIAAgSIABgWIgZAgIgTAdIgHAKQgDACgDACIgNACIgUABg");
	this.shape_4.setTransform(116.6,21);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgLBxQgXgHgRgOQgRgPgLgWQgKgXAAggQAAgMACgMQACgLAFgLQAJgWAPgQQAPgQAXgJQAKgFALgCQAMgCANAAIAUAAIAOABIAKACIAIADQACABACAIIADAWIACAcIABAgQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAIgIgCIgVgBQgLAAgKAEQgJADgHAHQgGAGgEAIQgDAJAAALQAAAJADAJQAEAJAGAHQAGAHAKAEQAIAEALAAIAKgBIAHgBIADgCIADAAIADABIABAEIAAAJIgBATQAAADgEACIgMAFIgPADIgTABQgegCgNgEg");
	this.shape_5.setTransform(96.3,20.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AA9B0IgmgCIgCgBIgBgFIgCgWIgMAIIgHAEQgDAAgDgFIgEgIIgDATIgBAFIgFACIgLABIgUABIgmgBQgMgBAAgCIABgDIAbhsQAPg3ARg1IACgDIAGgBIAMgBIAUAAIAcAAIARABIAJACIADACIAYBvIAWBwIAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBAAAAAAgAgEAVIgHAgIAMgJIAGgCIAFACIAIAIIgIggIgIgfg");
	this.shape_6.setTransform(75.7,21.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABPB0IgUAAIgUgBIgTgBQgBAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAgBIgBgIIgBgZIgBgpIgBg0IgMAAIgLAAIgCA7QgBAfgEAiQgBADgFABIgOAAIgjAAIgTgBIgIgBIgBgCIgFiAIgBg1IgBghQAAgEAJgCIAWgDIAdgBIAegBIAWAAIAbABIAcAAIAYABIASACQAGABAAACIAAAyIgBAsIgBAnIgDAqIgFAwQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAg");
	this.shape_7.setTransform(53.1,20.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgLBxQgXgHgRgOQgRgPgLgWQgJgXgBggQAAgMADgMQABgLAFgLQAIgWAQgQQAQgQAVgJQAMgFALgCQALgCANAAIAUAAIAOABIAKACIAHADQADABACAIIADAWIACAcIAAAgQAAABAAAAQAAABAAAAQAAAAgBABQAAAAgBAAIgIgCIgUgBQgMAAgKAEQgJADgGAHQgHAGgDAIQgEAJAAALQAAAJAEAJQADAJAGAHQAGAHAJAEQAKAEALAAIAKgBIAFgBIAFgCIACAAIADABIABAEIAAAJIgCATQAAADgDACIgMAFIgPADIgTABQgegCgNgEg");
	this.shape_8.setTransform(30.9,20.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(19.4,0,210.7,42.7), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Feya_22();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(0,0,96,152), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Feya_28();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(0,0,56,128), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Feya_12();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(0,0,60,82), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Feya_32();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(0,0,83,56), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Feya_25();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(0,0,76,124), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Feya_35();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(0,0,52,76), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Feya_03();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(0,0,115,107), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Feya_06();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(0,0,71,43), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Feya_16();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(0,0,26,22), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.magik();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(0,0,100,86.7), null);


(lib.Анимация10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pricel();
	this.instance.parent = this;
	this.instance.setTransform(-58,-56,0.574,0.574);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58,-56,116.1,112);


(lib.Анимация9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pricel();
	this.instance.parent = this;
	this.instance.setTransform(-58,-56,0.574,0.574);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58,-56,116.1,112);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ38();
	this.instance.parent = this;
	this.instance.setTransform(5.9,20.4,1,1,0,0,0,5.9,20.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},4).to({alpha:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.7,-1.9,15.2,44.9);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ34();
	this.instance.parent = this;
	this.instance.setTransform(222.4,170.3,1,1,0,0,0,222.4,170.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},4).to({alpha:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,444.9,340.8);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ33();
	this.instance.parent = this;
	this.instance.setTransform(222.4,170.3,1,1,0,0,0,222.4,170.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("AKezwIAAgHIOXAAMAAAAniIpLAAIAAANI5DAAIAAuXIANAAQJ1G2J1m2QGqnGmqppQuosNlCMNIkyAAIAAoiIYcAAIDBAAIAAIiIjBAAApMrOQmZG2GZJ5ApZT4IvbAAMAAAgnoIK2AAAPqTrIlMAAIAAuK");
	this.shape.setTransform(206.3,157.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FF00").s().p("ApZT4IvbAAMAAAgnoIK2AAIAAIiIEyAAIkyAAIAAoiIYcAAIDBAAIAAIiIjBAAIDBAAIAAoiIjBAAIAAgHIOXAAMAAAAniIpLAAIlMAAIAAuKQGqnGmqppQuosNlCMNQmZG2GZJ5IgNAAIAAOXIAAuXIANAAQJ1G2J1m2IAAOKIFMAAIAAANgApMFhg");
	this.shape_1.setTransform(206.3,157.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация9("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(56,58);

	this.instance_1 = new lib.Анимация10("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(79,73);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},49).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,guide:{path:[56,58,55.6,57.7,55.2,57.3,48.5,51,41.7,44.8,37.3,40.7,34.8,38.8,30.8,35.8,26.9,34.5,23.8,33.5,19.6,33.2,17.1,33.1,12.1,33.2,7.8,33.3,5.3,33.9,1.6,34.8,-0.3,37.1,-1.9,38.9,-3,42.9,-5,49.7,-6,57.3,-7.6,70.6,-2.6,77.5,-0.3,80.7,3.5,82.8,6.9,84.8,11.2,85.7,14.8,86.4,19.4,86.4,22.4,86.5,27.6,86.2,32.9,85.8,35.5,85.4,39.8,84.7,43,83.1,45.3,82,47.8,80,49.4,78.7,52.2,76.1,64.7,64.4,77.2,52.7,83.3,47,86.6,44.3,91.9,39.7,96.7,36.6,108.8,28.8,120.5,28.5,130.7,28.2,140.8,33.8,150,38.9,157.1,47.7,160.2,51.4,161.5,54.6,162.7,57.9,163,64.4,163.5,73.1,163,77.9,162.4,85.4,159.5,90.7,155.7,97.6,148.5,101.1,143.8,103.3,137.3,103.9,133,104.2,125.4,103.9,117.5,103.5,113.1,102.7,106.3,101.4,101.6,98.4,97.5,95.8,89.4,86.2,82.9,78.5,77.7,75.8]}},49).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,2,116.1,112);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ28();
	this.instance.parent = this;
	this.instance.setTransform(96.5,33.2,1,1,0,0,0,96.5,33.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:33.1,scaleX:1.15,scaleY:1.15,x:96.6,y:33.1},9).to({regY:33.2,scaleX:1,scaleY:1,x:96.5,y:33.2},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,193,66.4);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ26();
	this.instance.parent = this;
	this.instance.setTransform(110.5,21.2,1,1,0,0,0,110.5,21.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.07,scaleY:1.07,y:21.3},4,cjs.Ease.get(-1)).to({scaleX:1.16,scaleY:1.16,y:21.2},5,cjs.Ease.get(1)).to({regX:110.4,scaleX:1.08,scaleY:1.08,y:21.3},5,cjs.Ease.get(-1)).to({regX:110.5,scaleX:1,scaleY:1,y:21.2},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,221.1,42.4);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ22();
	this.instance.parent = this;
	this.instance.setTransform(90.7,98.8,1,1,0,0,0,90.7,98.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-4.4,x:90.8},9).to({rotation:0,x:90.7},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,303,128);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.pau = new lib.Символ31();
	this.pau.parent = this;
	this.pau.setTransform(361,324.1,1,1,0,0,0,222.4,170.3);
	new cjs.ButtonHelper(this.pau, 0, 1, 2, false, new lib.Символ31(), 3);

	this.timeline.addTween(cjs.Tween.get(this.pau).wait(1));

	// Слой 1
	this.instance = new lib.pautin();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(0,0,650,593), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ21();
	this.instance.parent = this;
	this.instance.setTransform(120.5,120,1,1,0,0,0,151.5,64);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.rez();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-32,56);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(-32,56,304,128), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.parent = this;
	this.instance.setTransform(114.7,21.5,1.234,1.234,0,0,0,124.7,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:124.6,regY:21.3,scaleX:1.4,scaleY:1.4,x:114.6},9).to({regX:124.7,regY:21.4,scaleX:1.23,scaleY:1.23,x:114.7},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.3,-4.9,260.1,52.7);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия: 2 - копия: 2
	this.instance = new lib.Символ3();
	this.instance.parent = this;
	this.instance.setTransform(-41,120.5,0.322,0.322,0,0,0,50.3,43.6);
	this.instance.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:50,regY:43.3,y:-143.8,alpha:0},55).wait(1).to({y:187.7,alpha:1},0).to({regX:50.1,regY:43.5,y:125.3,alpha:0.813},13).wait(1));

	// Слой 1 - копия: 2 - копия
	this.instance_1 = new lib.Символ3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(128,43.6,0.322,0.322,0,0,0,50.3,43.6);
	this.instance_1.alpha = 0.559;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:50,regY:43.3,y:-143.8,alpha:0},39).wait(1).to({y:187.7,alpha:1},0).to({regX:50.1,regY:43.5,y:48.4,alpha:0.578},29).wait(1));

	// Слой 1 - копия: 2
	this.instance_2 = new lib.Символ3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(4.5,-28.5,0.322,0.322,0,0,0,50.3,43.1);
	this.instance_2.alpha = 0.352;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:50,regY:43.3,y:-143.8,alpha:0},24).wait(1).to({y:187.7,alpha:1},0).to({regX:50.1,y:-23.7,alpha:0.363},44).wait(1));

	// Слой 1 - копия
	this.instance_3 = new lib.Символ3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(95.5,-91,0.322,0.322,0,0,0,50.3,43.1);
	this.instance_3.alpha = 0.16;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:50,regY:43.3,y:-143.8,alpha:0},11).wait(1).to({y:187.7,alpha:1},0).to({regX:50.1,y:-86.1,alpha:0.176},57).wait(1));

	// Слой 1
	this.instance_4 = new lib.Символ3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(50,187.7,0.322,0.322,0,0,0,50,43.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:-143.8,alpha:0},69).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.2,-104.9,201.2,306.5);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ36();
	this.instance.parent = this;
	this.instance.setTransform(5.9,20.4,1,1,0,0,0,5.9,20.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("AMGAVQAkEgjgDdQjgDckygEQkwgEkqjwQkqjwBVk/QBVk/DejRQDejREoA/QEoBAC7DIQC8DJAlEfg");
	this.shape.setTransform(6.4,20.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FF00").s().p("AA4LqQkwgEkqjwQkqjwBVk/QBVk/DejRQDejREoA/QEoBAC7DIQC8DJAlEfQAkEgjgDdQjcDYkrAAIgLAAg");
	this.shape_1.setTransform(6.4,20.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.parent = this;
	this.instance.setTransform(140,26.4,1,1,0,0,0,124.7,21.4);

	this.instance_1 = new lib.Символ25();
	this.instance_1.parent = this;
	this.instance_1.setTransform(144.2,22.8,1,1,0,0,0,110.5,21.2);

	this.instance_2 = new lib.Символ27();
	this.instance_2.parent = this;
	this.instance_2.setTransform(164.2,22.8,1,1,0,0,0,96.5,33.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,260.1,52.7);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ17();
	this.instance.parent = this;
	this.instance.setTransform(163.7,146.5,0.869,0.869,64,0,0,151.6,64.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:151.7,regY:64,scaleX:0.87,scaleY:0.87,x:163.9,y:151},4,cjs.Ease.get(-1)).to({regX:151.6,regY:64.1,scaleX:0.87,scaleY:0.87,x:163.7,y:156.5},5,cjs.Ease.get(1)).to({regX:151.7,regY:64,scaleX:0.87,scaleY:0.87,x:163.9,y:151.6},5,cjs.Ease.get(-1)).to({regX:151.6,regY:64.1,scaleX:0.87,scaleY:0.87,x:163.7,y:146.5},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,216,286.3);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.od = new lib.Символ37();
	this.od.parent = this;
	this.od.setTransform(71.6,117.3,1,1,0,0,0,5.9,20.4);
	new cjs.ButtonHelper(this.od, 0, 1, 2, false, new lib.Символ37(), 3);

	this.timeline.addTween(cjs.Tween.get(this.od).wait(1));

	// Слой 1
	this.instance = new lib.Символ35();
	this.instance.parent = this;
	this.instance.setTransform(61,90,1,1,0,0,0,61,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(-6.8,0,157.7,193.3), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.parent = this;
	this.instance.setTransform(46.7,161,0.348,0.348,0,0,0,50.1,43.4);

	this.instance_1 = new lib.Символ2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(124.7,154.5,0.552,0.552,0,0,0,50,43.4);

	this.instance_2 = new lib.Символ2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(107.2,148.2,1,1,0,0,0,50,43.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(0,0,201.2,306.5), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Feya_16.png
	this.instance = new lib.Символ5();
	this.instance.parent = this;
	this.instance.setTransform(-107,-11,1,1,0,0,0,13,11);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({_off:false},0).to({alpha:1},5).to({alpha:0},5).to({_off:true},1).wait(1));

	// Feya_06.png
	this.instance_1 = new lib.Символ6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-112.5,34.5,1,1,0,0,0,35.5,21.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleY:1.07,y:33.1},5).to({scaleY:1,y:34.5},6).wait(13));

	// Feya_09.png
	this.body = new lib.Символ7();
	this.body.parent = this;
	this.body.setTransform(-99,80,1,1,0,0,0,68,130);

	this.timeline.addTween(cjs.Tween.get(this.body).wait(24));

	// Feya_03.png
	this.instance_2 = new lib.Символ8();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-133.5,29.5,1,1,0,0,0,112.5,78.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(11).to({regX:112.4,scaleX:0.82,scaleY:0.82,rotation:9.5,x:-133.6,y:29.6},3).to({regX:112.5,scaleX:1,scaleY:1,rotation:0,x:-133.5,y:29.5},3).wait(7));

	// Feya_35.png
	this.instance_3 = new lib.Символ9();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-108,9,1,1,0,0,0,4,72);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(11).to({regX:3.9,scaleX:0.76,scaleY:0.76,rotation:-5.2,y:9.1},3).to({regX:4,scaleX:1,scaleY:1,rotation:0,y:9},3).wait(7));

	// Feya_25.png
	this.instance_4 = new lib.Символ10();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-143,65,1,1,0,0,0,68,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(11).to({regX:67.9,regY:11.2,scaleX:0.78,scaleY:0.78,rotation:-7.5,x:-143.1,y:65.2},3).to({regX:68,regY:11,scaleX:1,scaleY:1,rotation:0,x:-143,y:65},3).wait(7));

	// Feya_32.png
	this.instance_5 = new lib.Символ11();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-97.5,95,1,1,0,0,0,7.5,20);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regY:20.1,rotation:0.5,y:95.1},2,cjs.Ease.get(-1)).to({rotation:1.2},3,cjs.Ease.get(1)).to({regX:7.4,rotation:0.5},3,cjs.Ease.get(-1)).to({regX:7.5,regY:20,rotation:0,y:95},3,cjs.Ease.get(1)).wait(1).to({regY:20.1,rotation:0.5,y:95.1},2,cjs.Ease.get(-1)).to({rotation:1.2},3,cjs.Ease.get(1)).to({regX:7.4,rotation:0.5},3,cjs.Ease.get(-1)).to({regX:7.5,regY:20,rotation:0,y:95},3,cjs.Ease.get(1)).wait(1));

	// Feya_12.png
	this.instance_6 = new lib.Символ12();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-66,93,1,1,0,0,0,15,66);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:2.8,x:-65.9},2,cjs.Ease.get(-1)).to({rotation:6.2,x:-66},3).to({regX:14.9,rotation:3},3,cjs.Ease.get(-1)).to({regX:15,rotation:0},3).wait(1).to({rotation:2.8,x:-65.9},2,cjs.Ease.get(-1)).to({rotation:6.2,x:-66},3).to({regX:14.9,rotation:3},3,cjs.Ease.get(-1)).to({regX:15,rotation:0},3).wait(1));

	// Feya_28.png
	this.instance_7 = new lib.Символ13();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-35,121,1,1,0,0,0,20,14);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:20.1,regY:14.1,rotation:4.8,x:-34.9,y:122},2,cjs.Ease.get(-1)).to({regX:19.9,rotation:10.7,x:-35.1,y:123.1},3,cjs.Ease.get(1)).to({rotation:5.3,x:-35,y:122.1},3,cjs.Ease.get(-1)).to({regX:20,regY:14,rotation:0,y:121},3,cjs.Ease.get(1)).wait(1).to({regX:20.1,regY:14.1,rotation:4.8,x:-34.9,y:122},2,cjs.Ease.get(-1)).to({regX:19.9,rotation:10.7,x:-35.1,y:123.1},3,cjs.Ease.get(1)).to({rotation:5.3,x:-35,y:122.1},3,cjs.Ease.get(-1)).to({regX:20,regY:14,rotation:0,y:121},3,cjs.Ease.get(1)).wait(1));

	// Feya_22.png
	this.instance_8 = new lib.Символ14();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-80,166,1,1,0,0,0,48,76);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-246,-63,247,305);


(lib.Символ18копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.gg = new lib.Символ1();
	this.gg.parent = this;
	this.gg.setTransform(307,153,1,1,0,0,0,61,90);

	this.timeline.addTween(cjs.Tween.get(this.gg).to({rotation:2.2},4,cjs.Ease.get(-1)).to({rotation:0},5).to({regX:61.1,rotation:-2.5,x:307.1},5).to({regX:61,rotation:0,x:307},5).wait(1));

	// Слой 2
	this.pau1 = new lib.Символ19();
	this.pau1.parent = this;
	this.pau1.setTransform(128,137.5,1,1,0,0,0,325,296.5);

	this.timeline.addTween(cjs.Tween.get(this.pau1).to({scaleX:1,skewY:4.2},4,cjs.Ease.get(-1)).to({scaleX:1,skewY:0},5).to({scaleX:1,skewY:-4.1},5).to({scaleX:1,skewY:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-197,-159,650,593);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.parent = this;
	this.instance.setTransform(307,153,1,1,0,0,0,61,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.96,scaleY:0.96,x:300.4,y:152.5},7,cjs.Ease.get(-1)).to({scaleX:0.92,scaleY:0.92,x:292.2,y:151.7},8,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:307,y:153},5,cjs.Ease.get(-1)).to({scaleX:1.02,scaleY:1.02,x:311.3,y:153.4},6,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:307,y:153},7,cjs.Ease.get(-1)).to({regX:61.1,scaleX:1.1,scaleY:1.1,x:325.2,y:154.6},7,cjs.Ease.get(1)).to({regX:61,scaleX:1,scaleY:1,x:307,y:153},5,cjs.Ease.get(-1)).to({skewX:1,x:306.8},5,cjs.Ease.get(1)).to({skewX:-1.7,x:307.5},5,cjs.Ease.get(-1)).to({skewX:0.4,x:306.9},5,cjs.Ease.get(1)).to({skewX:0,x:307},5,cjs.Ease.get(-1)).to({scaleX:1.04,scaleY:1.04,x:314.8,y:153.7},7,cjs.Ease.get(1)).to({scaleX:0.92,scaleY:0.92,x:292.2,y:151.7},9,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:307,y:153},13,cjs.Ease.get(-1)).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ19();
	this.instance_1.parent = this;
	this.instance_1.setTransform(128,137.5,1,1,0,0,0,325,296.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:324.9,regY:296.4,scaleX:0.96,scaleY:0.96},7,cjs.Ease.get(-1)).to({regY:296.5,scaleX:0.92,scaleY:0.92,y:137.6},8,cjs.Ease.get(1)).to({regX:325,scaleX:1,scaleY:1,y:137.5},5,cjs.Ease.get(-1)).to({scaleX:1.02,scaleY:1.02,y:137.6},6,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,y:137.5},7,cjs.Ease.get(-1)).to({regX:324.9,regY:296.4,scaleX:1.1,scaleY:1.1,x:127.9},7,cjs.Ease.get(1)).to({regX:325,regY:296.5,scaleX:1,scaleY:1,x:128},5,cjs.Ease.get(-1)).to({skewX:1,x:128.1},5,cjs.Ease.get(1)).to({regX:324.9,skewX:-1.7,x:128},5,cjs.Ease.get(-1)).to({skewX:0.4},5,cjs.Ease.get(1)).to({regX:325,skewX:0},5,cjs.Ease.get(-1)).to({regX:324.9,scaleX:1.04,scaleY:1.04,y:137.6},7,cjs.Ease.get(1)).to({scaleX:0.92,scaleY:0.92},9,cjs.Ease.get(-1)).to({regX:325,scaleX:1,scaleY:1,y:137.5},13,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-197,-159,650,593);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Слой 1
	this.instance = new lib.Символ18();
	this.instance.parent = this;
	this.instance.setTransform(350.5,311.5,1,1,0,0,0,153.5,152.5);

	this.girl = new lib.Символ18копия();
	this.girl.parent = this;
	this.girl.setTransform(350.7,311.7,1.202,1.202,0,0,0,153.6,152.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.girl}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,650,593);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Пользовательский курсор мыши
		Заменяет курсор мыши по умолчанию на указанный экземпляр символа.
		*/
		stage.canvas.style.cursor = "none";
		this.kurs.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
			this.kurs.x = stage.mouseX/window.devicePixelRatio;
			this.kurs.y = stage.mouseY/window.devicePixelRatio;
		}
		//Чтобы восстановить курсор мыши по умолчанию, раскомментируйте следующие строки:
		//this.removeEventListener("tick", fl_CustomMouseCursor.bind(this));
		//stage.removeChild(kurs);
		//stage.canvas.style.cursor = "default";
		var _this = this;
		
		_this.kurs.visible=false;
		_this.kr.visible=true;
		
		
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		
		function fl_MouseOverHandler_5()
		    {
				_this.kurs.visible=true;
			    _this.kr.visible=false;
				_this.girlm.gotoAndPlay(1);
		
		
		    }
		
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		
		
		      function fl_MouseOutHandler_2()
		    {
				_this.kurs.visible=false;
				_this.kr.visible=true;
				_this.girlm.gotoAndPlay(2);
		
		    }
		
			
		this.girlm.girl.pau1.pau.addEventListener("mouseover", fl_ClickToGoToAndPlayFromFrame_1.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_1()
		{
		this.txt.gotoAndStop(1);
		}
		
		this.girlm.girl.pau1.pau.addEventListener("mouseout", fl_ClickToGoToAndPlayFromFrame_2.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_2()
		{
		this.txt.gotoAndStop(0);
		}
		
		this.girlm.girl.gg.body.od.addEventListener("mouseover", fl_ClickToGoToAndPlayFromFrame_3.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_3()
		{
		this.txt.gotoAndStop(2);
		}
		
		this.girlm.girl.gg.body.od.addEventListener("mouseout", fl_ClickToGoToAndPlayFromFrame_4.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_4()
		{
		this.txt.gotoAndStop(0);
		}
		
		
		
		this.addEventListener("tick", fl_CustomMouseCursor22.bind(this));
		
		function fl_CustomMouseCursor22() {
		
		_this.hand.x = - stage.mouseX / 10;
		}
		
		this.addEventListener("tick", fl_CustomMouseCursor23.bind(this));
		
		function fl_CustomMouseCursor23() {
		
		
		_this.back.x = stage.mouseX / 30;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 8
	this.kr = new lib.Символ30();
	this.kr.parent = this;
	this.kr.setTransform(323,143,1,1,0,0,0,58,56);

	this.timeline.addTween(cjs.Tween.get(this.kr).wait(1));

	// Слой 7
	this.kurs = new lib.Символ29();
	this.kurs.parent = this;
	this.kurs.setTransform(-123,163,0.6,0.6,0,0,0,58,56);

	this.timeline.addTween(cjs.Tween.get(this.kurs).wait(1));

	// Символ 16
	this.txt = new lib.Символ24();
	this.txt.parent = this;
	this.txt.setTransform(475.1,47.2,1,1,0,0,0,130,26.4);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	// Слой 3
	this.hand = new lib.Символ23();
	this.hand.parent = this;
	this.hand.setTransform(0,1,1,1,0,0,0,-357.8,-85.6);

	this.timeline.addTween(cjs.Tween.get(this.hand).wait(1));

	// Слой 3 - копия
	this.instance = new lib.Символ4();
	this.instance.parent = this;
	this.instance.setTransform(381.3,26.4,1,1,0,0,0,0.5,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.girlm = new lib.Символ20();
	this.girlm.parent = this;
	this.girlm.setTransform(172.9,138.9,1,1,0,0,0,325,296.5);

	this.timeline.addTween(cjs.Tween.get(this.girlm).wait(1));

	// Слой 1
	this.back = new lib.Символ43();
	this.back.parent = this;
	this.back.setTransform(0,1,1,1,0,0,0,16,87);

	this.timeline.addTween(cjs.Tween.get(this.back).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(162.2,-5.2,816.8,593);
// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/back.jpg?1478770352026", id:"back"},
		{src:"images/Feya_03.png?1478770352026", id:"Feya_03"},
		{src:"images/Feya_06.png?1478770352026", id:"Feya_06"},
		{src:"images/Feya_09.png?1478770352026", id:"Feya_09"},
		{src:"images/Feya_12.png?1478770352026", id:"Feya_12"},
		{src:"images/Feya_16.png?1478770352026", id:"Feya_16"},
		{src:"images/Feya_22.png?1478770352026", id:"Feya_22"},
		{src:"images/Feya_25.png?1478770352026", id:"Feya_25"},
		{src:"images/Feya_28.png?1478770352026", id:"Feya_28"},
		{src:"images/Feya_32.png?1478770352026", id:"Feya_32"},
		{src:"images/Feya_35.png?1478770352026", id:"Feya_35"},
		{src:"images/magik.png?1478770352026", id:"magik"},
		{src:"images/pautin.png?1478770352026", id:"pautin"},
		{src:"images/pricel.png?1478770352026", id:"pricel"},
		{src:"images/rez.png?1478770352026", id:"rez"},
		{src:"images/rez1.png?1478770352026", id:"rez1"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;