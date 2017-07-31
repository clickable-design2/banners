(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.ball = function() {
	this.initialize(img.ball);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,92,92);


(lib.bgr = function() {
	this.initialize(img.bgr);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,399);


(lib.box = function() {
	this.initialize(img.box);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,383,383);


(lib.but = function() {
	this.initialize(img.but);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,396,92);


(lib.cursor = function() {
	this.initialize(img.cursor);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,272,376);


(lib.linta = function() {
	this.initialize(img.linta);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,173,214);


(lib.logofonbet = function() {
	this.initialize(img.logofonbet);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,158,37);


(lib.mony = function() {
	this.initialize(img.mony);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,76,58);// helper functions:

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


(lib.Symbol34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.box();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.791,0.791);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol34, new cjs.Rectangle(0,0,303,303), null);


(lib.Symbol33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.but();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.63,0.63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol33, new cjs.Rectangle(0,0,249.7,58), null);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bgr();
	this.instance.parent = this;
	this.instance.setTransform(-87,66);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol29, new cjs.Rectangle(-87,66,800,399), null);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgXAhIAAhAIANAAIAAADIAAACQADgCADgCQAEgCAEAAQAJAAAGAHQADAEABAEQABAEAAAFQAAAGgBADQgCAEgDAEIgGAFQgEACgFAAIgGgBQgDgCgCgCIAAAEIAAASgAgDgSIgCACIgCAEIgBAFIABAEIABADIADACIADABIAEgBIACgCIACgCIABgFIgBgFIgCgEIgCgCIgEAAIgDAAg");
	this.shape.setTransform(63.6,5.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgJAWQgFgBgEgEIgDgDIgCgEIgCgFIAAgFQAAgKAHgGIAJgFQAEgCAFAAIAKACIAIAFIAEADIACAEIACAFIAAAEIAAAFIgCAFIgCAEIgDADQgEAEgFABQgFACgFAAQgFAAgEgCgAgDgKIgDADIgDAEIgBADIABAFIADADIADADIADAAIAEAAIADgDIADgDIAAgFIAAgDIgDgEIgDgDIgEAAIgDAAg");
	this.shape_1.setTransform(57.7,5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgHAWIgEgCIgEgDQgDgEgCgEQgCgEAAgFQAAgEACgEQACgEADgEIAEgDIAEgCIAKgCQAFAAAFACIAFACIADADIgGAKIgFgDIgGgBIgEAAIgDADIgCAEIgBADIABAEIACAEIADADIAFAAIAGgBIAGgFIAGALIgEAEIgFACIgLACIgKgCg");
	this.shape_2.setTransform(52.5,5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgXAhIAAhAIANAAIAAADIAAACQADgCADgCQAEgCAEAAQAJAAAGAHQACAEACAEQACAEgBAFQABAGgCADQgCAEgDAEIgGAFQgFACgEAAIgGgBQgDgCgCgCIAAAEIAAASgAgDgSIgCACIgCAEIgCAFIACAEIABADIADACIADABIAEgBIACgCIACgCIABgFIgBgFIgCgEIgCgCIgEAAIgDAAg");
	this.shape_3.setTransform(47.3,5.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgRAgIgEgCIgCgBIAFgLQADABACAAIAFgBIADgDIAAgDIgTgsIARAAIAHAWIABAHIAAAAIACgHIAFgWIARAAIgTAyIgDAHIgEAEIgFADIgGABIgFgBg");
	this.shape_4.setTransform(41.7,5.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAGAXIgJgRIgEAAIAAARIgQAAIAAgtIAQAAIAAAQIAEAAIAIgQIARAAIgOAWIAQAXg");
	this.shape_5.setTransform(36.9,5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAIAXIAAgUIAAgEIgCAEIgNAUIgOAAIAAgtIAOAAIAAAUIAAAEIAAAAIADgEIALgUIAQAAIAAAtg");
	this.shape_6.setTransform(29,5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAOAcIAAgKIgaAAIAAAKIgPAAIAAgXIAGAAQADgEAAgEIABgNIAAgLIAmAAIAAAgIAGAAIAAAXgAgCgNIgBALIgDAHIALAAIAAgUIgHAAg");
	this.shape_7.setTransform(23.3,5.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgHAWIgEgCIgEgDQgDgEgCgEQgCgEAAgFQAAgEACgFQACgEADgDQADgDAFgCIAIgCQAFAAAEACQAEABADADQADADABAEQACAEAAAFIgBAEIgcAAIACADIACADQACACAEAAIAGgBIAHgEIAFALIgEADIgFACIgKACIgKgCgAAHgFQAAgDgBgCQgCgBgDgBQgBAAAAABQAAAAgBAAQAAAAgBAAQAAABgBAAQgCACAAADIAMAAIAAAAg");
	this.shape_8.setTransform(17.9,5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgUAXIAAgtIAYAAIAHABIAEACQACACABACIACAFIgCAGIgEAEQADAAADADQACADAAAEQgBADgBACQgBADgDACQgCABgDABIgHABgAgFANIAGAAQAAAAABAAQAAAAABAAQAAAAABAAQAAgBABAAIABgDQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgGAAgAgFgEIAFAAIADgBIABgEIgBgDIgDgBIgFAAg");
	this.shape_9.setTransform(13,5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgLAXIgFgDIgDgFIgBgFIAAgEIACgDQACgDAEgCIAJgCIAIAAIABAAIAAgBQAAgBAAgBQAAAAgBgBQAAAAAAgBQAAAAgBgBIgEgBIgGABIgGAEIgGgLIAJgEIAKgCIAIABQAEACADACQADACABAEIABAIIAAAbIgOAAIAAgCIABgEIgBAAQgCAEgEABQgCACgEAAIgGgBgAgCAFIgCABIgBACQAAABAAAAQAAABAAAAQAAABABAAQAAAAAAABIADABQACgBADgCQACgDAAgCIAAgCIgBAAQgFAAgCACg");
	this.shape_10.setTransform(7.7,5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAMAgIAAgZIgWAAIAAAZIgQAAIAAg/IAQAAIAAAaIAWAAIAAgaIAPAAIAAA/g");
	this.shape_11.setTransform(1.9,4.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol28, new cjs.Rectangle(-1.8,0,68.5,9.7), null);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cursor();
	this.instance.parent = this;
	this.instance.setTransform(0,-10,0.131,0.131);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol27, new cjs.Rectangle(0,-10,35.6,49.2), null);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgiAIIAAgPIBFAAIAAAPg");
	this.shape.setTransform(6.4,13.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol25, new cjs.Rectangle(0,0,12.9,26.9), null);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA1BZIgFhQIAAgYIAAgFIgBAAIgJAdIgTAzIglAAIgSgzIgKgdIgBAAQABAQgBANIgFBQIgsAAIAPixIAvAAIAaBLIAIAcIAAAAIAJgcIAahLIAwAAIAOCxg");
	this.shape.setTransform(91.2,11.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag5ByIAAiyIBvAAIAAAlIhDAAIAAAgIA1AAIAAAlIg1AAIAAAiIBHAAIAAAmgAAKhNIAAgjIAfAAIAAAjgAgphNIAAgjIAfAAIAAAjg");
	this.shape_1.setTransform(73.6,8.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAhBZIAAhFIhAAAIAABFIgsAAIAAixIAsAAIAABHIBAAAIAAhHIArAAIAACxg");
	this.shape_2.setTransform(56.5,11.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhBBZIAAixIBJAAQAaAAAQARQAIAJAEALQAEALAAANQAAANgEAMQgEAKgIAIQgQASgaAAIgdAAIAAA3gAgVgDIAVAAQAEABAFgCIAHgFQAGgGAAgMQAAgLgGgGQgGgHgKAAIgVAAg");
	this.shape_3.setTransform(40,11.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag5BZIAAixIBvAAIAAAlIhDAAIAAAgIA1AAIAAAlIg1AAIAAAhIBHAAIAAAmg");
	this.shape_4.setTransform(24.8,11.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhCBZIAAixIBCAAQANAAALADQALADAIAGQAIAGAEAJQAFAIAAAMQAAALgGAKQgGALgJAFIAAABQAHACAFADQAFAEAEAGQADAEACAHQACAGAAAHQAAANgFAKQgFAKgJAHQgKAGgMAEQgMADgOAAgAgWAzIAZAAQAJAAAFgEQAFgGAAgIQAAgIgFgFQgFgFgJAAIgZAAgAgWgTIAWAAQAHAAAEgFQAEgFAAgGQAAgHgEgFQgEgEgHAAIgWAAg");
	this.shape_5.setTransform(9.5,11.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol24, new cjs.Rectangle(0,0,103.3,26.9), null);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAfBZIAAhTIACgdIAAAAQgIASgHALIgxBTIgsAAIAAixIAsAAIAABTIgCAdIABAAQAIgSAHgLIAwhTIAsAAIAACxg");
	this.shape.setTransform(91.6,11.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag2BZIAAixIBtAAIAAAlIhBAAIAACMg");
	this.shape_1.setTransform(76.5,11.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhBBZIAAixIAsAAIAAA3IAdAAQANAAAKAEQALAEAIAKQAIAIAEAKQAEALAAAOQAAANgEALQgEALgIAJQgQARgaAAgAgVAzIAVAAQAKABAGgHQAGgGAAgLQAAgLgGgHQgDgDgEgCQgFgCgEAAIgVAAg");
	this.shape_2.setTransform(62,11.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAhBZIAAhFIhAAAIAABFIgsAAIAAixIAsAAIAABHIBAAAIAAhHIArAAIAACxg");
	this.shape_3.setTransform(44.1,11.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag5BZIAAixIBvAAIAAAlIhDAAIAAAgIA1AAIAAAlIg1AAIAAAhIBHAAIAAAmg");
	this.shape_4.setTransform(27.9,11.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AA0BrIAAgjIhmAAIAAAjIgoAAIAAhIIATAAIAKgVIAHgXQADgMABgOQABgNAAgPIAAgrIB4AAIAACNIAUAAIAABIgAgHg8QgCAigDARQgCAMgEALQgEALgFAKIA2AAIAAhoIgiAAg");
	this.shape_5.setTransform(10.3,13.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol23, new cjs.Rectangle(0,0,102.1,26.9), null);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgzBXIAAitIBiAAIAAAPIhQAAIAABAIBBAAIAAAOIhBAAIAABBIBVAAIAAAPg");
	this.shape.setTransform(153,11.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgIBXIAAieIg+AAIAAgPICNAAIAAAPIg/AAIAACeg");
	this.shape_1.setTransform(137.7,11.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgzBXIAAitIBiAAIAAAPIhQAAIAABAIBBAAIAAAOIhBAAIAABBIBVAAIAAAPg");
	this.shape_2.setTransform(123.9,11.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AA3BXIgTg4IhGAAIgUA4IgSAAIBAitIASAAIBACtgAAeARIgWg/IgHgXIgBAAIgGAXIgXA/IA7AAg");
	this.shape_3.setTransform(108.3,11.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag4BXIAAitIA8AAQALAAAJADQALADAHAIQAIAHADAJQAFAKAAAMQAAAMgFAKQgDAJgIAHQgHAIgLADQgJADgLABIgrAAIAABEgAgnADIAoAAQAJAAAHgCQAHgCAFgFQAFgFADgHQADgHAAgJQAAgIgDgIQgCgGgFgFQgGgFgHgDQgHgCgJAAIgoAAg");
	this.shape_4.setTransform(93.9,11.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgtBXIAAitIBbAAIAAAPIhJAAIAACeg");
	this.shape_5.setTransform(80.6,11.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAzBXIAAh9IACgXIgBAAIgPAXIhXB9IgRAAIAAitIARAAIAAB9IgCAXIABAAIAPgYIBYh8IARAAIAACtg");
	this.shape_6.setTransform(64.2,11.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgRBZIgRgFQgIgEgHgFIgNgLIgMgOQgFgHgDgJQgDgIgCgJQgBgJAAgIQAAgKABgIQACgJADgIQADgIAFgHQAFgIAHgFIANgMQAHgFAIgDQAIgEAJgBIARgBQAJAAAJABQAJABAIAEQAHADAIAFIANAMQAHAFAFAIIAIAPIAFARQABAIAAAKQAAAIgBAJIgFARIgIAQIgMAOIgNALIgPAJIgRAFQgJABgJABIgRgCgAgbhEIgMAHIgLAJIgJALIgGAMIgEAOIgBAPQABATAEAJIAGANIAJAMIALAJIAMAHIAOAEIANABIAOgBIAOgEIAMgHIALgJIAJgMIAGgNQADgJACgTIgBgPIgEgOIgGgMIgJgLIgLgJIgMgHIgOgEIgOgCQgSACgJAEg");
	this.shape_7.setTransform(44.5,11.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag5BXIAAitIA8AAQAMAAAJADQAKADAIAIQAIAHAEAJQADAKAAAMQAAAMgDAKQgEAJgIAHQgIAIgKADQgJADgMABIgqAAIAABEgAgnADIAoAAQAJAAAHgCQAHgCAFgFQAFgFADgHQADgHgBgJQABgIgDgIQgDgGgEgFQgFgFgIgDQgHgCgJAAIgoAAg");
	this.shape_8.setTransform(27.7,11.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAxBXIAAieIhiAAIAACeIgRAAIAAitICFAAIAACtg");
	this.shape_9.setTransform(10.2,11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol22, new cjs.Rectangle(0,0,160.4,26.9), null);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgmCzIAAhLIBOAAIAABLgAgkBEIgIj2IBZAAIgID2g");
	this.shape.setTransform(266.2,22.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAyCzIhKiRIgkAAIAACRIhXAAIAAllIBXAAIAACKIAkAAIBJiKIBeAAIhgCrIAAABIBmC5g");
	this.shape_1.setTransform(243.4,22.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AglC1QgTgDgQgHQgRgGgQgKQgPgKgNgOQgNgNgKgPQgKgPgGgRQgIgRgDgSQgDgSAAgTQAAgTADgSQADgSAIgQQAGgRAKgOQAKgPANgNQANgNAPgKQAQgKARgHQAQgGATgDQASgEATAAQBQAAA2A1QANANAKAPQAKAOAGARQAIAQACASQAEASAAATQAAATgEASQgCASgIARQgGARgKAPQgKAPgNANQgOAOgOAKQgQAKgRAGQgQAHgTADQgSAEgUAAQgTAAgSgEgAgkhgQgRAHgPAPQgNAOgHATQgIASAAAWQAAAWAIATQAHATANAPQAPAQARAHQARAIATAAQAVAAAQgIQASgHAOgQQANgPAIgTQAGgTABgWQgBgWgGgSQgIgTgNgOQgPgPgRgHQgRgIgUAAQgTAAgRAIg");
	this.shape_2.setTransform(204.3,22.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiECzIAAllICUAAQA0AAAgAjQAQARAIAWQAJAWAAAbQAAAbgJAXQgIAVgQASQggAig0AAIg8AAIAABvgAgsgGIArAAQAKAAAJgDQAIgEAGgGQAMgNAAgXQAAgWgMgNQgMgNgUAAIgsAAg");
	this.shape_3.setTransform(169.5,22.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABNCzIgVhLIhvAAIgVBLIhaAAIB5llIBbAAIB5FlgAAjAiIgUhFIgOg9IgBAAIgOA9IgUBFIBFAAg");
	this.shape_4.setTransform(135.9,22.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABpDWIAAhGIjOAAIAABGIhQAAIAAiRIAlAAQALgTAJgXQAIgWAGgYQAGgZACgbQADgbAAgeIAAhVIDxAAIAAEaIAoAAIAACRgAgQh5QgDBDgGAiQgFAZgHAXQgIAWgKATIBuAAIAAjPIhHAAg");
	this.shape_5.setTransform(99.3,26.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgmC1QgSgDgRgHQgQgGgPgKQgQgKgNgOQgOgNgJgPQgKgPgHgRQgGgRgEgSQgDgSAAgTQAAgTADgSQAEgSAGgQQAHgRAKgOQAJgPAOgNQANgNAQgKQAPgKAQgHQARgGASgDQATgEATAAQBQAAA1A1QAOANAKAPQAKAOAHARQAHAQADASQADASAAATQAAATgDASQgDASgHARQgHARgKAPQgKAPgOANQgNAOgPAKQgPAKgQAGQgSAHgRADQgTAEgUAAQgTAAgTgEgAglhgQgQAHgOAPQgOAOgIATQgGASAAAWQAAAWAGATQAIATAOAPQAOAQAQAHQARAIAUAAQAUAAASgIQARgHANgQQAPgPAGgTQAIgTgBgWQABgWgIgSQgGgTgPgOQgNgPgRgHQgSgIgUAAQgTAAgSAIg");
	this.shape_6.setTransform(60.2,22.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AA/CzIAAkaIh+AAIAAEaIhXAAIAAllIEtAAIAAFlg");
	this.shape_7.setTransform(20.9,22.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol21, new cjs.Rectangle(0,0,276.1,54), null);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABrCzIgLihQgCgTACgfIAAgJIgBAAIgUA7IglBnIhKAAIgmhnIgUg7IgBAAQADAhgDAaIgLChIhYAAIAellIBfAAIA0CXIARA6IABAAIASg6IA0iXIBfAAIAdFlg");
	this.shape.setTransform(89.4,22.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABNCzIgVhLIhvAAIgVBLIhaAAIB5llIBbAAIB5FlgAAjAiIgUhFIgOg9IgBAAIgOA9IgUBFIBFAAg");
	this.shape_1.setTransform(51,22.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiFCzIAAllICEAAQAaAAAXAGQAWAHAQALQAQANAIARQAJASAAAWQAAAXgLAUQgLAVgTAMIAAABQAOAEAKAHQALAIAHALQAHAKADANQAEANAAANQAAAbgKAVQgKATgTAOQgTANgYAGQgZAHgcAAgAgtBoIAzAAQASAAAKgLQAKgKAAgRQAAgQgJgKQgKgKgSAAIg0AAgAgtgnIAtAAQAOAAAIgKQAIgJAAgOQAAgOgIgIQgJgJgPAAIgrAAg");
	this.shape_2.setTransform(19.1,22.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(0,0,113.5,54), null);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhNCFIAAkJICUAAIAAAXIh6AAIAABhIBkAAIAAAXIhkAAIAABjICBAAIAAAXg");
	this.shape.setTransform(161.5,17.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgMCFIAAjyIhgAAIAAgXIDZAAIAAAXIhgAAIAADyg");
	this.shape_1.setTransform(138.3,17.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABOClIAAi/IACgkIgBAAIgWAkIiHC/IgZAAIAAkKIAaAAIAAC/IgCAkIABAAIAXglICGi+IAZAAIAAEKgAgRh0QgJgDgHgGQgHgGgEgIQgEgJAAgJIAAgHIAWAAIAAAGQAAALAJAIQAHAHALgBQAMABAIgHQAJgIgBgLIAAgGIAWAAIAAAHQAAAJgEAJQgEAIgHAGQgHAGgJADQgJADgKAAQgJAAgJgDg");
	this.shape_2.setTransform(112.6,14.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABUCFIgfhVIhqAAIgeBVIgcAAIBikJIAbAAIBiEJgAAtAaIgihgIgLgjIAAAAIgKAjIgjBgIBaAAg");
	this.shape_3.setTransform(86.4,17.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhoBuQAJgBAHgEQAIgEAGgGQAGgHAFgJIAJgVQAFgQAFgqQAEghgBgvIAAg2ICRAAIAAEKIgaAAIAAjyIhdAAIAAAfQgBA+gDAXQgHAugGAUQgFAPgHALQgGALgKAIQgJAIgKAEQgMAFgNABg");
	this.shape_4.setTransform(60.2,17.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhNCFIAAkJICUAAIAAAXIh6AAIAABhIBkAAIAAAXIhkAAIAABjICBAAIAAAXg");
	this.shape_5.setTransform(39.7,17.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABjCgIAAg1IjFAAIAAA1IgZAAIAAhNIAbAAQANgRAJgWQAJgUAFgYQAEgWACgcQACgZAAggIAAg0ICSAAIAADyIAeAAIAABNgAgahqQAAAhgDAcQgDAcgFAXQgFAYgIATQgIATgKAPICHAAIAAjaIhdAAg");
	this.shape_6.setTransform(14.1,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(0,0,172.8,40.9), null);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag2CEQgLgFgMgIIANgUQAJAGAHAEQAIADAHAAQAMAAAHgIQAHgJAHgTIhqjTIAeAAIBJCUIAOAjIABAAIALgiIA4iVIAcAAIhXDgQgTAvgigBQgKAAgLgDg");
	this.shape.setTransform(132.4,17.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA6CFIhLh/IgtAAIAAB/IgaAAIAAkJIAaAAIAABzIAtAAIBHhzIAeAAIhRB+IAAAAIBWCLg");
	this.shape_1.setTransform(111.8,17.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhWCFIAAkJIBaAAQAQAAANAFQANAEAKAJQAJAJAGAMQAFANAAAPQAAAKgCAJQgCAJgEAHQgFAHgGAGQgGAGgJAEIAAABQAKACAJAGQAIAGAGAJQAGAIADALQADALAAAMQAAAigXAUQgLAKgPAFQgOAFgRAAgAg8BuIBDAAQAMAAAKgEQAKgDAHgHQAGgHAEgKQAEgJAAgMQAAgMgEgKQgEgJgHgHQgHgHgKgEQgJgEgMAAIhDAAgAg8gRIBAAAQAKAAAIgDQAJgDAGgGQAGgHADgIQADgJAAgKQAAgKgDgJQgDgIgGgGQgGgGgJgDQgIgEgLAAIg/AAg");
	this.shape_2.setTransform(88.2,17.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABUCFIgfhVIhqAAIgeBVIgcAAIBikJIAbAAIBiEJgAAtAaIgihgIgLgjIAAAAIgKAjIgjBgIBaAAg");
	this.shape_3.setTransform(63.7,17.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgMCFIAAjyIhgAAIAAgXIDZAAIAAAXIhgAAIAADyg");
	this.shape_4.setTransform(40.2,17.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgLCHQgOgCgMgFQgMgFgLgIQgLgHgJgKQgJgKgHgLQgHgMgFgMQgFgMgCgOQgCgOAAgOQAAgOACgOQACgNAFgMQAFgMAHgLQAHgLAJgKQAKgJAKgIQALgHAMgFQAMgFANgCQANgDAOAAQAPAAAOACQAOADAMAEQAMAEAKAHQALAGAJAJIgOATIgSgMIgUgJQgdgIgPAAIgWACQgLACgJAEQgKAEgIAGIgRAOIgNAQIgJATQgHAcAAAQQACAeAFAOQANAaAKALQAHAIAJAGQAJAHAJAEQAKAEALACIAWACQANAAALgCQAMgCALgFQALgEAJgHQAKgGAJgJIAPASQgKALgMAIQgLAHgNAGQgNAFgOACQgOADgOAAQgPAAgNgDg");
	this.shape_5.setTransform(15.4,17.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(0,0,145.4,40.9), null);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgcCJQgOgCgNgFQgMgFgMgIQgLgIgKgKQgLgKgHgLQgIgMgFgNQgFgMgCgOQgDgOAAgNQAAgPADgNQACgOAFgNQAFgMAIgLQAHgLALgKQAKgKALgIQAMgHAMgFQANgFAOgCQAOgDAOAAQA9AAAoAoQAKAKAIALQAIALAFAMQAFANACAOQADANAAAPQAAANgDAOQgCAOgFAMQgFANgIAMQgIALgKAKQgKAKgLAIQgMAIgMAFQgNAFgOACQgOADgPAAQgOAAgOgDgAgbhJQgNAGgLALQgKALgGAOQgFAOAAARQAAAPAFAPQAGAPAKALQALAMANAFQANAHAOgBQAQABAMgHQAOgFAKgMQAKgLAGgPQAFgPAAgPQAAgRgFgOQgGgOgKgLQgLgLgNgGQgNgFgPgBQgOABgNAFg");
	this.shape.setTransform(46.3,17.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABQCiIAAg1IicAAIAAA1Ig9AAIAAhuIAcAAQAJgOAGgRQAHgRAEgSQAEgTACgUQACgVAAgXIAAhAIC3AAIAADVIAeAAIAABugAgMhcQgCAzgFAbQgDARgGASQgGARgHAOIBSAAIAAicIg1AAg");
	this.shape_1.setTransform(15.6,19.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(0,0,63.5,40.9), null);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhQAZIAAgxIChAAIAAAxg");
	this.shape.setTransform(8.1,2.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(0,0,16.3,5), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.linta();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(0,0,173,214), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ball();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,92,92), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mony();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,76,58), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logofonbet();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,158,37), null);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.but();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.63,0.63);

	this.instance_1 = new lib.Symbol33();
	this.instance_1.parent = this;
	this.instance_1.setTransform(124.8,29,1,1,0,0,0,124.8,29);
	this.instance_1.filters = [new cjs.ColorFilter(0.77, 0.77, 0.77, 1, 58.65, 58.65, 58.65, 0)];
	this.instance_1.cache(-2,-2,254,62);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,249.7,58);


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol32();
	this.instance.parent = this;
	this.instance.setTransform(124.8,29,1,1,0,0,0,124.8,29);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol31, new cjs.Rectangle(0,0,249.7,58), null);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol28();
	this.instance.parent = this;
	this.instance.setTransform(13.5,61.2,1.359,1.359,0,0,0,32.1,4.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30));

	// Layer 1
	this.instance_1 = new lib.Symbol27();
	this.instance_1.parent = this;
	this.instance_1.setTransform(9,34.7,1,1,-25.5,0,0,17.8,24.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:30,x:46.7,y:36.8},14,cjs.Ease.quadInOut).to({rotation:-25.5,x:9,y:34.7},15,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.5,-4.2,93,71.9);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol15();
	this.instance.parent = this;
	this.instance.setTransform(88.7,26.5,0.912,0.932,0,0,0,8.2,2.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhjCHIAAkOIBvAAQAnAAAZAaQAMAOAGAQQAGASAAAUQAAAUgGASQgGAPgMANQgZAbgnAAIgtAAIAABTgAghgEIAhAAQAHAAAGgDQAHgCAEgGQAJgJAAgRQAAgRgJgJQgIgLgQAAIghAAg");
	this.shape.setTransform(94.1,17.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgZCJQgMgCgLgFQgJgGgJgIQgHgHgGgLQgIgMgJggQgFgZAAgdQAAgdAFgZIAHgYQAFgLAFgKQAGgJAHgIQAJgHAJgFQALgGAMgCQAMgDANAAQAOAAAMADQAMACAKAGQAKAFAIAHQAIAIAGAJQAGAKAEALIAHAYQAFAZAAAdQAAAdgFAZQgJAggIAMQgGALgIAHQgIAIgKAGQgKAFgMACQgMADgOAAQgNAAgMgDgAgOhJQgGAEgEALQgFAJgCAPQgCAPAAATQAAAUACAOQACAPAFALQAEAKAGAEQAHAGAHgBQAJABAFgGQAHgEAFgKQADgLACgPQADgOAAgUQAAgTgDgPQgCgPgDgJQgFgLgHgEQgFgFgJgBQgHABgHAFg");
	this.shape_1.setTransform(59.7,17.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgZCJQgNgCgJgFQgLgGgHgIQgIgHgGgLQgIgMgJggQgFgZAAgdQAAgdAFgZIAHgYQAEgLAGgKQAGgJAIgIQAHgHALgFQAJgGANgCQAMgDANAAQAOAAAMADQAMACAKAGQAKAFAIAHQAIAIAGAJQAFAKAFALIAHAYQAFAZAAAdQAAAdgFAZQgKAggHAMQgGALgIAHQgIAIgKAGQgKAFgMACQgMADgOAAQgNAAgMgDgAgOhJQgGAEgEALQgFAJgBAPQgDAPAAATQAAAUADAOQABAPAFALQAEAKAGAEQAHAGAHgBQAIABAHgGQAGgEAFgKQADgLADgPQACgOAAgUQAAgTgCgPQgDgPgDgJQgFgLgGgEQgHgFgIgBQgHABgHAFg");
	this.shape_2.setTransform(35.6,17.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgdCIQgNgDgMgEQgMgEgKgHQgKgHgKgJIAhgzQAMAMAOAGQAOAGAPAAQAOAAALgJQAFgEADgGQADgHAAgHQAAgIgDgGQgDgGgGgFQgFgEgJgCQgHgDgJAAQgSAAgTAJIgjgNIAMiNICWAAIAAA5IhdAAIgBAZIgCALIABAAQAGgDANAAQAXAAARAGQASAHANAMQANANAGAPQAHAQAAATQgBAVgGASQgIARgNANQgOAOgTAHQgSAHgVAAQgOAAgMgCg");
	this.shape_3.setTransform(12.6,17.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(0,0,106.6,40.9), null);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 21
	this.instance = new lib.Symbol21();
	this.instance.parent = this;
	this.instance.setTransform(296.1,46.6,0.691,0.691,0,0,0,138.1,27);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({y:35.4,alpha:1},14,cjs.Ease.get(1)).wait(70).to({y:51.4,alpha:0},15,cjs.Ease.get(-1)).to({_off:true},1).wait(196));

	// Symbol 20
	this.instance_1 = new lib.Symbol20();
	this.instance_1.parent = this;
	this.instance_1.setTransform(155.9,46.6,0.691,0.691,0,0,0,56.8,27);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:35.4,alpha:1},14,cjs.Ease.get(1)).wait(70).to({y:51.4,alpha:0},15,cjs.Ease.get(-1)).to({_off:true},1).wait(200));

	// Symbol 19
	this.instance_2 = new lib.Symbol19();
	this.instance_2.parent = this;
	this.instance_2.setTransform(66.9,43.6,0.767,0.767,0,0,0,86.4,20.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(92).to({_off:false},0).to({y:32.4,alpha:1},14,cjs.Ease.get(1)).wait(70).to({y:48.4,alpha:0},15,cjs.Ease.get(-1)).to({_off:true},1).wait(108));

	// Symbol 18
	this.instance_3 = new lib.Symbol18();
	this.instance_3.parent = this;
	this.instance_3.setTransform(193.6,43.6,0.767,0.767,0,0,0,72.7,20.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(96).to({_off:false},0).to({y:32.4,alpha:1},14,cjs.Ease.get(1)).wait(70).to({y:48.4,alpha:0},15,cjs.Ease.get(-1)).to({_off:true},5).wait(100));

	// Symbol 17
	this.instance_4 = new lib.Symbol17();
	this.instance_4.parent = this;
	this.instance_4.setTransform(280.7,43.6,0.767,0.767,0,0,0,31.8,20.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(100).to({_off:false},0).to({y:32.4,alpha:1},14,cjs.Ease.get(1)).wait(70).to({y:48.4,alpha:0},15,cjs.Ease.get(-1)).to({_off:true},1).wait(100));

	// Symbol 16
	this.instance_5 = new lib.Symbol16();
	this.instance_5.parent = this;
	this.instance_5.setTransform(350.7,43.6,0.767,0.767,0,0,0,53.3,20.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(103).to({_off:false},0).to({y:32.4,alpha:1},14,cjs.Ease.get(1)).wait(70).to({y:48.4,alpha:0},15,cjs.Ease.get(-1)).to({_off:true},1).wait(97));

	// Symbol 25
	this.instance_6 = new lib.Symbol25();
	this.instance_6.parent = this;
	this.instance_6.setTransform(170.9,45.9,1,1,0,0,0,6.4,13.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(196).to({_off:false},0).to({y:34.7,alpha:1},14,cjs.Ease.get(1)).wait(70).to({y:50.7,alpha:0},15,cjs.Ease.get(-1)).wait(5));

	// Symbol 24
	this.instance_7 = new lib.Symbol24();
	this.instance_7.parent = this;
	this.instance_7.setTransform(233.1,45.8,1,1,0,0,0,51.6,13.5);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(194).to({_off:false},0).to({y:34.6,alpha:1},14,cjs.Ease.get(1)).wait(70).to({y:50.6,alpha:0},15,cjs.Ease.get(-1)).wait(7));

	// Symbol 23
	this.instance_8 = new lib.Symbol23();
	this.instance_8.parent = this;
	this.instance_8.setTransform(339.9,45.8,1,1,0,0,0,51,13.5);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(192).to({_off:false},0).to({y:34.6,alpha:1},14,cjs.Ease.get(1)).wait(70).to({y:50.6,alpha:0},15,cjs.Ease.get(-1)).wait(9));

	// Symbol 22
	this.instance_9 = new lib.Symbol22();
	this.instance_9.parent = this;
	this.instance_9.setTransform(80.2,45.9,1,1,0,0,0,80.2,13.5);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(190).to({_off:false},0).to({y:34.7,alpha:1},14,cjs.Ease.get(1)).wait(70).to({y:50.7,alpha:0},15,cjs.Ease.get(-1)).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(116.6,27.9,78.4,37.3);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol13();
	this.instance.parent = this;
	this.instance.setTransform(86.5,107,1,1,0,0,0,86.5,107);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:15,x:60.8,y:122.4},14,cjs.Ease.quadInOut).to({rotation:0,x:86.5,y:107},15,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,173,214);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol12();
	this.instance.parent = this;
	this.instance.setTransform(81,107,1,1.001,0,3,0,86.5,107);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.82,skewX:11.7,x:68.8,y:85.4},9,cjs.Ease.quadInOut).to({scaleY:1,skewX:3,x:81,y:107},20,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.1,0,184.1,214);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol34();
	this.instance.parent = this;
	this.instance.setTransform(148.5,148.5,1,1,0,0,0,151.5,151.5);
	this.instance.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(-11, 20, 0, 0))];
	this.instance.cache(-2,-2,307,307);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(-3,-3,307,307), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_65 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(65).call(this.frame_65).wait(1));

	// Symbol 3
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(106.8,43.4,0.68,0.68,60,0,0,38.1,29.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:29,rotation:-45,x:222.8,y:-7.6},9,cjs.Ease.get(1)).to({regX:38.2,regY:29.1,rotation:-15,x:172.8,y:22.4},12,cjs.Ease.quadInOut).to({regX:38.1,regY:29,rotation:-45,x:252.8,y:72.4},11,cjs.Ease.quadInOut).to({regX:38.2,regY:29.1,rotation:0,x:202.8,y:122.4},18,cjs.Ease.quadInOut).to({rotation:-45,x:284.9,y:170.4,alpha:0},15,cjs.Ease.quadInOut).wait(1));

	// Symbol 3
	this.instance_1 = new lib.Symbol3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(115,35.6,0.68,0.68,68.5,0,0,38.2,29.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:38.1,regY:28.9,rotation:-53.4,x:-75.1,y:-19.5},9,cjs.Ease.get(1)).to({rotation:-8.4,x:-115,y:10.5},11,cjs.Ease.quadInOut).to({regX:38,rotation:-38.4,x:-65.1,y:50.5},11,cjs.Ease.quadInOut).to({regX:37.9,regY:29.1,rotation:-8.4,x:-115.1,y:90.6},8,cjs.Ease.quadInOut).to({regY:29,rotation:-53.4,x:-75.1,y:130.6},9,cjs.Ease.quadInOut).to({regY:29.1,rotation:-8.4,x:-115.1,y:170.7,alpha:0},9,cjs.Ease.quadInOut).to({_off:true},1).wait(8));

	// Symbol 3
	this.instance_2 = new lib.Symbol3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(122.4,32.9,0.68,0.68,-90,0,0,38,29.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:37.9,regY:29,rotation:-66.7,x:-145.8,y:43.9},9,cjs.Ease.get(1)).to({regX:38,regY:29.1,rotation:-6.7,x:-185.8,y:73.9},9,cjs.Ease.quadInOut).to({regX:37.9,regY:29,rotation:-36.7,x:-125.9,y:113.8},9,cjs.Ease.quadInOut).to({regX:37.8,regY:29.1,rotation:-6.7,x:-76,y:143.9,alpha:0},9,cjs.Ease.quadInOut).to({_off:true},1).wait(29));

	// Symbol 3
	this.instance_3 = new lib.Symbol3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(122.5,32.9,0.68,0.68,60,0,0,38.1,28.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:29,rotation:-15,x:343.6,y:-69},9,cjs.Ease.get(1)).to({regY:29.1,rotation:-60,x:363.7,y:-49},12,cjs.Ease.quadInOut).to({rotation:0,x:323.6,y:11.1},11,cjs.Ease.quadInOut).to({rotation:-45,x:363.7,y:61.1},8,cjs.Ease.quadInOut).to({rotation:0,x:313.7,y:111},9,cjs.Ease.quadInOut).to({regY:29.2,rotation:-45,x:343.8,y:141.1,alpha:0},9,cjs.Ease.quadInOut).to({_off:true},1).wait(7));

	// Symbol 3
	this.instance_4 = new lib.Symbol3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(105.4,32.9,0.68,0.68,45,0,0,38.1,29.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regY:29.2,rotation:-30,x:122.3,y:-58.9},9,cjs.Ease.get(1)).to({rotation:15,y:-28.8},11,cjs.Ease.quadInOut).to({rotation:-45,x:172.4,y:31.2},10,cjs.Ease.quadInOut).to({rotation:0,x:132.4,y:81.1},9,cjs.Ease.quadInOut).to({regY:29.3,rotation:-60,x:162.4,y:121.1},9,cjs.Ease.quadInOut).to({regY:29.4,rotation:0,x:132.4,y:151.2,alpha:0},9,cjs.Ease.quadInOut).to({_off:true},1).wait(8));

	// Symbol 3
	this.instance_5 = new lib.Symbol3();
	this.instance_5.parent = this;
	this.instance_5.setTransform(115,35.5,0.68,0.68,-45,0,0,38.1,29.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:0,x:291.9,y:55.9},9,cjs.Ease.get(1)).to({rotation:-30,x:322,y:75.8},7,cjs.Ease.quadInOut).to({rotation:0,x:282,y:115.8},11,cjs.Ease.quadInOut).to({rotation:-45,x:242,y:145.8,alpha:0},9,cjs.Ease.quadInOut).to({_off:true},1).wait(29));

	// Symbol 3
	this.instance_6 = new lib.Symbol3();
	this.instance_6.parent = this;
	this.instance_6.setTransform(97.9,31.8,0.68,0.68,150,0,0,38,29);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:38.1,regY:29.1,rotation:0,x:-87.1,y:84.8},9,cjs.Ease.get(1)).to({regX:38,rotation:-45,x:-37.1,y:114.9},12,cjs.Ease.quadInOut).to({regY:29.2,rotation:0,x:-117.1,y:154.9},11,cjs.Ease.quadInOut).to({rotation:-45,x:-157,y:155,alpha:0},9,cjs.Ease.quadInOut).to({_off:true},1).wait(24));

	// Symbol 3
	this.instance_7 = new lib.Symbol3();
	this.instance_7.parent = this;
	this.instance_7.setTransform(87.1,58,1,1,-60,0,0,38,29.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regY:29,rotation:-8.2,x:-31.9,y:139},9,cjs.Ease.get(1)).to({regY:29.1,rotation:-53.2,x:28.1,y:169.1,alpha:0},12,cjs.Ease.quadInOut).to({_off:true},1).wait(44));

	// Symbol 3
	this.instance_8 = new lib.Symbol3();
	this.instance_8.parent = this;
	this.instance_8.setTransform(99,46.6,1,1,75,0,0,38.1,29);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:38,rotation:-45,x:200,y:100.5},9,cjs.Ease.get(1)).to({rotation:-15,x:220,y:180.5,alpha:0},12,cjs.Ease.quadInOut).to({_off:true},1).wait(44));

	// Symbol 3
	this.instance_9 = new lib.Symbol3();
	this.instance_9.parent = this;
	this.instance_9.setTransform(110.1,42.5,1,1,-60,0,0,38,29.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({x:323.1,y:1.6},9,cjs.Ease.get(1)).to({regY:29.2,rotation:-15,x:273.1,y:21.6},10,cjs.Ease.quadInOut).to({regX:38.1,rotation:-7.7,x:303.3,y:81.5},11,cjs.Ease.quadInOut).to({regY:29.3,rotation:-52.7,x:343.3,y:131.5,alpha:0},9,cjs.Ease.quadInOut).to({_off:true},1).wait(26));

	// Symbol 3
	this.instance_10 = new lib.Symbol3();
	this.instance_10.parent = this;
	this.instance_10.setTransform(110.1,42.4,1,1,-4.5,0,0,38.1,28.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({regX:38,regY:29,rotation:-35.7,x:-142.9,y:112.5},9,cjs.Ease.get(1)).to({regY:29.1,rotation:-5.7,x:-123,y:142.6},8,cjs.Ease.quadInOut).to({rotation:-50.7,x:-62.9,y:182.6,alpha:0},10,cjs.Ease.quadInOut).wait(9).to({_off:true},1).wait(29));

	// Symbol 3
	this.instance_11 = new lib.Symbol3();
	this.instance_11.parent = this;
	this.instance_11.setTransform(85.1,42.5,1,1,156.2,0,0,38,28.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({regX:37.9,rotation:321.1,x:-43.1,y:42.6},9,cjs.Ease.get(1)).to({regY:29,rotation:351.1,x:-83,y:72.6},13,cjs.Ease.quadInOut).to({regY:28.9,rotation:321.1,x:-43.1,y:112.6},10,cjs.Ease.quadInOut).to({rotation:351.1,x:-13,y:152.5,alpha:0},9,cjs.Ease.quadInOut).to({_off:true},1).wait(24));

	// Symbol 3
	this.instance_12 = new lib.Symbol3();
	this.instance_12.parent = this;
	this.instance_12.setTransform(99,46.5,1,1,-111.1,0,0,38,29);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({regX:38.1,regY:29.1,rotation:-19,x:99.2,y:133.5},9,cjs.Ease.get(1)).to({rotation:-49,x:119.2,y:203.6,alpha:0},14,cjs.Ease.quadInOut).to({alpha:1},13,cjs.Ease.quadInOut).to({alpha:0},11,cjs.Ease.quadInOut).to({_off:true},1).wait(18));

	// Symbol 3
	this.instance_13 = new lib.Symbol3();
	this.instance_13.parent = this;
	this.instance_13.setTransform(94.1,41,1,1,45,0,0,38,28.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({regY:29,rotation:-22.2,x:312,y:122.5},9,cjs.Ease.get(1)).to({regY:29.1,rotation:-52.2,x:332.1,y:142.5},12,cjs.Ease.quadInOut).to({rotation:7.8,x:282.1,y:172.6,alpha:0},11,cjs.Ease.quadInOut).to({rotation:7.8},9,cjs.Ease.quadInOut).to({_off:true},1).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(38.6,-6.3,115.5,111.7);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol5();
	this.instance.parent = this;
	this.instance.setTransform(46,46,1,1,0,0,0,46,46);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,92,92), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Isolation Mode
	this.instance = new lib.Symbol11();
	this.instance.parent = this;
	this.instance.setTransform(172.5,108.1,0.621,0.621,0,0,0,86.5,107);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(65).to({regX:86.6,scaleX:0.5,scaleY:0.63,skewX:7.5,x:151.7},0).to({regX:86.5,scaleX:0.62,scaleY:0.62,skewX:0,x:172.5},6).wait(79));

	// Objects
	this.instance_1 = new lib.Symbol10();
	this.instance_1.parent = this;
	this.instance_1.setTransform(126.1,101.2,0.621,0.621,0,0,0,148.7,148.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(150));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(31.9,7,194.3,192);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 8
	this.instance = new lib.Symbol8();
	this.instance.parent = this;
	this.instance.setTransform(904,192.1,1,1,0,0,0,46,46);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({_off:false},0).to({rotation:360,x:549,y:173.1},15,cjs.Ease.get(-1)).to({regX:46.1,scaleX:1.28,scaleY:1.28,rotation:0,x:621.2,y:359.1},9).wait(75).to({_off:true},1).wait(49).to({_off:false,regX:46,scaleX:1,scaleY:1,x:130.4,y:294.6},0).to({rotation:360,x:406.6,y:154.9},15,cjs.Ease.get(-1)).to({regX:46.1,scaleX:1.28,scaleY:1.28,rotation:0,x:335.2,y:359.1},9).wait(78));

	// Symbol 7
	this.instance_1 = new lib.Symbol7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(499.2,130.5,1,1,0,0,0,132.2,130.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:150.5},24,cjs.Ease.quadInOut).to({y:130.5},25,cjs.Ease.quadInOut).wait(1).to({y:144.3},14,cjs.Ease.quadInOut).to({x:479.2,y:143.6},1).to({x:499.2,y:144.3},2).to({y:145.2},1).to({y:150.5},6).to({y:130.5},25,cjs.Ease.quadInOut).wait(1).to({y:150.5},24,cjs.Ease.quadInOut).to({y:130.5},24,cjs.Ease.quadInOut).wait(1).to({y:150.5},24,cjs.Ease.quadInOut).to({y:130.5},25,cjs.Ease.quadInOut).wait(1).to({y:144.3},14,cjs.Ease.quadInOut).to({rotation:-8.2,x:531.2,y:143.6},1).to({rotation:0,x:499.2,y:144.3},2).to({y:145.2},1).to({y:150.5},6).to({y:130.5},25,cjs.Ease.quadInOut).wait(1).to({y:150.5},24,cjs.Ease.quadInOut).to({y:130.5},26,cjs.Ease.quadInOut).wait(1));

	// Symbol 9
	this.instance_2 = new lib.Symbol9();
	this.instance_2.parent = this;
	this.instance_2.setTransform(452,117.1,1,1,0,0,0,38,29);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(64).to({_off:false},0).wait(84).to({_off:true},1).wait(64).to({_off:false},0).wait(87));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(398.9,7,194.3,192);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol29();
	this.instance.parent = this;
	this.instance.setTransform(300,234.5,1,1,0,0,0,300,234.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:294.7},149,cjs.Ease.quadInOut).to({y:234.5},150,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87,66,800,399);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol31();
	this.instance.parent = this;
	this.instance.setTransform(124.8,29,1,1,0,0,0,124.8,29);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:28.9,scaleX:1.13,scaleY:1.13,x:124.9,y:28.9},19,cjs.Ease.quadInOut).to({regY:29,scaleX:1,scaleY:1,x:124.8,y:29},20,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,249.7,58);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(21));

	// cur
	this.cur = new lib.Symbol26();
	this.cur.parent = this;
	this.cur.setTransform(372.6,36.4,1.264,1.264,0,0,0,17.9,24.6);

	this.timeline.addTween(cjs.Tween.get(this.cur).to({alpha:0},19).to({alpha:1},20).wait(1));

	// bt
	this.bt = new lib.Symbol1();
	this.bt.parent = this;
	this.bt.setTransform(124.8,150.2,1,1,0,0,0,124.8,29);

	this.timeline.addTween(cjs.Tween.get(this.bt).to({y:45.3},19,cjs.Ease.backOut).to({y:150.2},20,cjs.Ease.backIn).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,426.4,179.2);


// stage content:
(lib.fb_prize_600300 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		stage.canvas.addEventListener("mouseover", fl_Clickover.bind(this));
		
		function fl_Clickover()
		{
		    this.but.gotoAndPlay(1);
		
		}
		
		stage.canvas.addEventListener("mouseout", fl_Clickout.bind(this));
		
		function fl_Clickout()
		{   
			this.but.gotoAndPlay(21);
		
		}
		
		
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 7
	this.but = new lib.Symbol30();
	this.but.parent = this;
	this.but.setTransform(371.2,290.4,1,1,0,0,0,213.2,89.6);

	this.timeline.addTween(cjs.Tween.get(this.but).wait(1));

	// ball.png
	this.instance = new lib.Symbol14();
	this.instance.parent = this;
	this.instance.setTransform(388.2,33.8,1,1,0,0,0,198.9,27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(263.5,200,1,1,0,0,0,474.9,130.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Symbol 2
	this.instance_2 = new lib.Symbol2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(100,39.5,1,1,0,0,0,79,18.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Symbol 4
	this.instance_3 = new lib.Symbol4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(300,73.5,1,1,0,0,0,300,234.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(213,55,800,475);
// library properties:
lib.properties = {
	id: '6A29ED3EDC1D4737AF7277EC38F00B60',
	width: 600,
	height: 300,
	fps: 28,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/ball.png?1501513776071", id:"ball"},
		{src:"images/bgr.jpg?1501513776071", id:"bgr"},
		{src:"images/box.png?1501513776071", id:"box"},
		{src:"images/but.png?1501513776071", id:"but"},
		{src:"images/cursor.png?1501513776071", id:"cursor"},
		{src:"images/linta.png?1501513776071", id:"linta"},
		{src:"images/logofonbet.png?1501513776071", id:"logofonbet"},
		{src:"images/mony.png?1501513776071", id:"mony"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['6A29ED3EDC1D4737AF7277EC38F00B60'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;