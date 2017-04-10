(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.hoh = function() {
	this.initialize(img.hoh);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,154,114);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,85,58);


(lib.P2 = function() {
	this.initialize(img.P2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,400);


(lib.P3 = function() {
	this.initialize(img.P3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,400);


(lib.P4 = function() {
	this.initialize(img.P4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,400);


(lib.povar = function() {
	this.initialize(img.povar);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,290,449);// helper functions:

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


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.P4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(0,0,240,400), null);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.P3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(0,0,240,400), null);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.P2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(0,0,240,400), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAzBCQgGgDgFgFQgGgFgCgHQgDgIAAgIIAAgvQAAgPgHAAQgDAAgDADQgDAEgCAFQAHAIADAIQADAHAAAKQAAAMgEAKQgEAKgJAHQgRAQgZAAIgPgBIgOgEQgMgFgGgJQgHgIgDgJQgDgJAAgJIAAgBIAAAAIAAAAIAAgBIAAAAIAAgBIAAAAIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAAAIAAgBIAAAAIAAgBIAAAAIAAAAIAAgBIAAAAIAAgBIAAAAIAAgBIAAAAIAAAAIAAgBIAAAAIAAgBIAAAAIAAgBIAAAAIAAgBIAAAAIAAgBIAAAAIAAAAIAAgBIAAAAIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAAAIAAgBIAAAAIAAAAIAAgBIAAAAIAAgBIAAAAIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAAAIAAgBIAAAAIAAgBIAAAAIAAAAIAAgBIAAAAIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAAAIAAgBIAAAAIAAgBIAAAAIAAAAIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAAAIAAAAIAAgBIAAAAIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAAAIAAAAIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAAAIAAgBIAAAAIAAAAIAAgDIABgBIAxAAIAAABIAAAcIAVgCIANACQAHACAFADQAGgUANgKQAMgJANAAQAHAAAGADQAGADAFAFQAFAGADAIQACAHAAAKIAAAlQAAALACAHQADAIACADIAFAFIAEACQAAAAABAAQAAAAAAABQAAAAAAABQAAAAAAAAQgCAHgJAGQgJAFgKAAQgIAAgHgCgAgtgLIAAAeQABAKACAFQADAFAFAAQAMAAAAgbQAAgLgFgGQgEgGgJAAg");
	this.shape.setTransform(112.1,14.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgGBBQgHgCgEgGQgFgFgDgHQgCgHAAgIIAAg8IghAAIgBgBIAAgdIAAgBIAAgBQAXgEAdgBQAcAAAPACIAZACQAAAAABABQAAAAABAAQAAAAAAABQAAAAAAABIABAHQAAAGgCAEQgCAFgDADQgIAGgIABQgIABgJgBIAAAoQAAAOADAIQACAIAEABIAFAEQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQgCAHgJAFQgKAGgKAAQgGAAgGgDg");
	this.shape_1.setTransform(95.5,14.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag9BdIgBgBIAAAAIgBiAQAAgOgCgIQgCgIgDgCIgEgDQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQACgGAJgGQAJgFAKAAQANAAAJAHQAKAIACANQAOgcAZAAQAWAAANAVQANAUAAAbQAAAOgDALQgDAMgHAJQgNAVgYAAQgMAAgJgGQgIgGgHgMIAABJIgBABgAgHgxIgDAMIgCANIACAOIADAKQAGAJAHAAQAJAAAFgJQAFgJAAgPQAAgPgFgKQgFgJgJAAQgHAAgGAJg");
	this.shape_2.setTransform(81.3,17);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgWA/QgMgFgKgKQgUgUAAgcQAAgcAUgTQATgUAfAAQAPAAAKAEQALADAHAHQAQAOAAAPQAAAHgCAHQgCAFgDAFQgFAEgFADQgEADgGABQgMAEgNABQgNAAgNgCQAHASAUADQAXADAWgNQABgBAAAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABQgBAEgEAHQgFAGgHAHQgHAHgMAEQgLAFgNAAQgNAAgMgFgAgCgkQgFADgEAHQgDAIAAALQAHABAHgBQAFgBAFgDQADgDACgEQACgEABgFQAAgFgEgDQgEgEgGAAIAAABIgBAAg");
	this.shape_3.setTransform(67.2,14.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAPBCQAAAAAAAAQAAAAgBgBQAAAAAAAAQAAAAAAgBIAAhkIgbAAIAABkIgBACIgwAAQgBAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIAAh6IABgBQAcgFAigBQAkAAAcAGIAAABIAAB6IAAACg");
	this.shape_4.setTransform(53.2,14.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgUA/QgMgFgKgKQgUgUAAgcQAAgNAEgMQAFgMAKgJQATgUAbgBQAXAAARAJQAQAJAAARQAAAKgHAHQgHAIgKAAQgGAAgGgBIgGgDIAAgDIAAgEIAAgDQAAgJgDgEQgEgFgFAAQgIAAgGAMQgFANACAOQABAMAFAJQAGAIAHAEQAHACAKABQAJgBAJgDQAJgDAIgEQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAABQABAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABQgBAFgEAGQgEAGgHAHQgHAHgLAEQgLAFgNAAQgNAAgMgFg");
	this.shape_5.setTransform(39.6,14.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAdBDQgGgCgFgDQgJgFgEgJIgFgRIgEgPQgCgGgEgBIAAA0IgBACIgzAAIgBgBIADhKQAAgNgDgIQgDgIgDgCIgFgDQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQACgGAJgGQAJgFAKAAQAIAAAGACQAGADAFAFQAKAKAAARIAAAVIABAAIABAAIADgOIAFgPQAEgIAGgGQAFgHAJgEQAIgEAJAAQAHAAAGABQAGACAEAEQAEAEACAFQACAFAAAGQAAANgHAHQgEADgFACQgFACgGAAIgJgBQgDgCAAgDIAAgCIAAgEIgBgDIgCgDIgEgCQgGgBgEAHQgEAHAAAIQAPgCAJAMQADADAEALQAFAKAGAJQAHAJAMAGQABABABAAQAAAAABABQAAAAAAAAQAAABAAAAIgCAFQgFAGgJAEQgJAEgJAAQgHAAgGgBg");
	this.shape_6.setTransform(25.5,14.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag5BSQgTgNAAgUQAAgLAHgJQAIgIANAAQAIAAAFACQAHADgBAEQgCANAEAKQAFAKAMAAQAMAAAIgOQAJgOAAgUIgmAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIAAgaIABgBIAmAAQABgKgCgJQgDgIgEgHQgEgHgGgEQgFgDgGAAQgHAAgDACQgFADgCAFQgEAKACANQABAEgHADQgFACgIAAQgGAAgGgCQgEgCgFgFQgHgIAAgLQAAgKAEgJQAFgIAKgGQASgNAdAAQAmAAAZAcQAMAOAGAQQAGARAAATQAAATgGAQQgGARgNAOQgZAcglABQgdAAgSgNg");
	this.shape_7.setTransform(10.1,11.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(0,0,123.7,29), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGBBQgHgCgEgGQgFgFgDgHQgCgHAAgIIAAg8IghAAIgBgBIAAgdIAAgBIAAgBQAXgEAdgBQAcAAAPACIAZACQAAAAABABQAAAAABAAQAAAAAAABQAAAAAAABIABAHQAAAGgCAEQgCAFgDADQgIAGgIABQgIABgJgBIAAAoQAAAOADAIQACAIAEABIAFAEQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQgCAHgJAFQgKAGgKAAQgGAAgGgDg");
	this.shape.setTransform(166.8,14.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgFA1QgRgQgEgXIgLAAIAAAwIgBABIgxAAIgBgBIAAhJQAAgOgDgIQgCgIgDgCIgFgDQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQACgGAKgGQAKgFALAAQAPAAAJAKQAFAFACAHQACAHAAAJIAAAOIALAAQACgLAGgJQAFgKAJgIQAQgOAaAAQAPAAALAFQAMAFAKAKQASATAAAcQAAAegSASQgJALgMAEQgMAFgPAAQgaAAgRgPgAAdgkQgDADgCAFQgDAKAAASIABAPIACAMQACAHADACQAEAEAFAAQAFAAAEgDQADgDACgGIACgMIAAgQQAAgSgDgKQgCgFgDgDQgDgDgFAAQgFAAgEADg");
	this.shape_1.setTransform(149.8,14.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgbBWQgNgHgFgHQgGgHgCgGIgCgJQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABAAIACgBIAFAEIAIAGQADAEAIADQAIADAJAAQAIAAAEgDQAGgCAFgFQAEgEACgGQACgFABgGIAAgZQgEAHgEAGQgFAFgFAEQgKAHgMAAQgHAAgGgDQgGgDgFgGQgKgLAAgSIAAghQAAgLgCgIQgCgHgDgDIgFgFIgEgCQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQACgGAKgGQAJgFAKAAQAHAAAHACQAHADAFAFQAKALAAARIAAArQAAAHACAEQABACAEABQAGABAGgJQAEgIAAgLIAAg+IABgBIAxAAIABABIAABpQABAhgSAVQgJAKgNAFQgNAFgRAAQgPAAgOgHg");
	this.shape_2.setTransform(131.7,17);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAjBUQgBAAgBgBQAAAAgBAAQAAgBgBAAQAAAAAAgBIAAgiIg+AAIAAACIABACQAAAIgDAGQgCAGgFAFQgKAJgTAAIgIgBQgBAAgBgBQAAAAgBAAQAAgBAAAAQgBAAAAgBIAAg2IAAgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAIAGgEQADgDAFgIQAFgJADgNQADgJACgQIADgbIABgMIACgBQAygLA6ALIAAABIAABdIARAAIABACIAAAbIABAAQAAAUgKAKQgKAKgTAAgAgMAJIgCAHIAbAAIAAhHIgSAAQgCAegFAig");
	this.shape_3.setTransform(116.4,16.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAhBBQgGgCgFgGQgKgJAAgSIAAgQIgYAAIAAAwQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAgBAAIgyAAIgBgBIAAAAIAChJQAAgOgDgIQgCgIgDgCIgFgDQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQACgGAKgGQAJgFAKAAQAHAAAHADQAGACAFAFQAJAKAAASIAAAOIAYAAIAAguIABgBIAwAAIABABIAABJQAAALACAIQACAHACADIAFAEIADADQABAAAAABQAAAAAAAAQABABAAAAQAAAAgBABQgCAGgJAFQgJAGgKAAQgIAAgGgDg");
	this.shape_4.setTransform(100.6,14.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgWA/QgMgFgKgKQgUgUAAgcQAAgcAUgTQATgUAfAAQAPAAAKAEQALADAIAHQAPAOAAAPQAAAHgCAHQgCAFgDAFQgFAEgEADQgFADgGABQgMAEgNABQgNAAgMgCQAGASAVADQAWADAWgNQAAgBABAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABQgBAEgEAHQgFAGgHAHQgIAHgLAEQgLAFgNAAQgNAAgMgFgAgCgkQgFADgEAHQgCAIgBALQAHABAHgBQAFgBAEgDQAFgDABgEQACgEAAgFQABgFgEgDQgEgEgFAAIAAABIgBAAg");
	this.shape_5.setTransform(86.3,14.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhTA7QgIgGAAgFIACgEIAEgEQACgDAEgJIAGgXQADgKABgRIAAgdIgBgMIABgBIA1AAIABAAIAWAvIAAAAIAZgvIABAAIA4AAIABAAIACB7IgBABIgwAAIgBgBIAAgwIACgaIggBJQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgGAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAgBgBIgYg/IgBAZQgEAXgJALQgKALgQAAQgLAAgIgGg");
	this.shape_6.setTransform(69.6,14.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgxAwQgKgKgFgMQgFgMAAgOQAAgNAFgMQAFgMAKgKQAKgKAMgFQANgFAOAAQAPAAANAFQAMAFAKAKQAUAUAAAbQAAAOgFAMQgFANgKAJQgKAKgMAFQgNAFgPAAQgdAAgUgUgAgIgkQgEADgCAFQgGAMAAAQQAAARAGALQACAGAEADQAEADAEAAQAFAAAFgDQADgDADgFQAFgLAAgSQAAgQgGgLQgEgMgLAAQgEAAgEADg");
	this.shape_7.setTransform(53.1,14.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAdBDQgGgCgFgDQgJgFgEgJIgFgRIgEgPQgCgGgEgBIAAA0IgBACIgzAAIgBgBIADhKQAAgNgDgIQgDgIgDgCIgFgDQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQACgGAJgGQAJgFAKAAQAIAAAGACQAGADAFAFQAKAKAAARIAAAVIABAAIABAAIADgOIAFgPQAEgIAGgGQAFgHAJgEQAIgEAJAAQAHAAAGABQAGACAEAEQAEAEACAFQACAFAAAGQAAANgHAHQgEADgFACQgFACgGAAIgJgBQgDgCAAgDIAAgCIAAgEIgBgDIgCgDIgEgCQgGgBgEAHQgEAHAAAIQAPgCAJAMQADADAEALQAFAKAGAJQAHAJAMAGQABABABAAQAAAAABABQAAAAAAAAQAAABAAAAIgCAFQgFAGgJAEQgJAEgJAAQgHAAgGgBg");
	this.shape_8.setTransform(38.3,14.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgWA/QgMgFgKgKQgUgUAAgcQAAgcAUgTQATgUAfAAQAPAAAKAEQALADAIAHQAPAOAAAPQAAAHgCAHQgCAFgDAFQgFAEgEADQgFADgGABQgMAEgNABQgNAAgMgCQAGASAUADQAXADAWgNQAAgBABAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABQgBAEgEAHQgFAGgHAHQgIAHgLAEQgLAFgNAAQgNAAgMgFgAgCgkQgFADgEAHQgCAIgBALQAHABAHgBQAFgBAEgDQAFgDABgEQACgEAAgFQABgFgEgDQgEgEgFAAIAAABIgBAAg");
	this.shape_9.setTransform(24.2,14.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag9BdIgBgBIAAAAIgBiAQAAgOgCgIQgCgIgDgCIgEgDQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQACgGAJgGQAJgFAKAAQANAAAJAHQAKAIACANQAOgcAZAAQAWAAANAVQANAUAAAbQAAAOgDALQgDAMgHAJQgNAVgYAAQgMAAgJgGQgIgGgHgMIAABJIgBABgAgHgxIgDAMIgCANIACAOIADAKQAGAJAHAAQAJAAAFgJQAFgJAAgPQAAgPgFgKQgFgJgJAAQgHAAgGAJg");
	this.shape_10.setTransform(9.6,17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,0,175.2,29), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAYBVQgJgIgDgNQgHAPgJAGQgKAIgMgBQgIABgGgDQgHgDgGgEQgLgLgGgPIgEgQIgBgQQAAgbANgUQAHgKAJgFQAJgFAMAAQAMAAAJAGQAJAFAGANIAAhIIABgBIAzAAIABABIAAB/QAAALABAHQACAIACACIAEAFIADADQAAAAAAAAQAAAAAAAAQAAABAAAAQAAABAAAAQgCAHgJAFQgJAFgKAAQgNAAgJgHgAgNgGQgEADgCADQgDAFgBAGIgBAOQAAAOAFAJQAFAKAJAAQAEAAADgCQADgDADgEQAFgJAAgPQAAgQgFgJQgDgDgDgDQgDgDgEABQgEgBgEADg");
	this.shape.setTransform(107.7,12);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAiBBQgGgCgGgGQgFgFgDgHQgCgGAAgJIAAgwQAAgGgCgEQgCgDgEgBQgGgBgGAIQgFAJAAALIAABDQAAAAAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAIgyAAIgBgBIAChJQAAgOgDgIQgCgIgDgCIgGgDQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQACgGAJgGQAJgFAKAAQANAAAKAHQAJAJACANQAEgHAFgGQAFgGAFgDQALgHAMAAQAHAAAGADQAGADAFAFQAFAGADAHQACAIAAAJIAAARIAAAVQAAALACAHQACAHADAEIAFAEIAEACQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABQgCAFgJAGQgKAGgKAAQgHAAgHgDg");
	this.shape_1.setTransform(92.3,14.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAYA8QgJgHgDgOQgHAPgJAGQgKAIgMgBQgIABgGgDQgHgDgGgEQgLgLgGgPIgEgQIgBgQQAAgbANgUQAHgKAJgFQAJgFAMAAQAMAAAJAGQAJAFAGANIAAgSQAAAAAAAAQAAgBAAAAQABAAAAAAQAAAAABAAIAxAAIABABIgBBJQAAAOACAIQADAIADABIAFAEQABAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQgCAHgJAGQgJAFgKAAQgNAAgJgIgAgNgfQgDADgDAEQgCAFgBAGIgCANIACANQABAGACAFQADAEADADQAEACAEAAQAEAAADgCQADgDADgEQAFgJAAgPQAAgPgFgJQgDgEgDgDQgDgDgEABQgEgBgEADg");
	this.shape_2.setTransform(77,14.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgMBaQgGgCgFgGQgFgFgCgHQgDgHAAgIIAAiRIACgCIAwAAIABABIAAABIABB/QAAAOACAIQADAIADABIAFAEQABAAAAAAQAAABABAAQAAABAAAAQAAABgBAAQgCAGgKAGQgKAGgKAAQgGAAgHgDg");
	this.shape_3.setTransform(65.9,12);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAbBaQgGgDgGgFQgFgFgCgHQgDgHAAgIIAAgyQAAgFgCgEQgCgDgDAAQgHgCgGAJQgFAIAAALIAABDIgBACIgwAAIgBgCIgBiwIABgBIAxAAIABABIAABLQAEgHAFgFQAFgGAGgDQAKgGALAAQAHAAAGACQAGADAFAFQAFAHADAHQACAIAAAJIAAAmQAAALACAHQACAHADADIAFAFIAEACQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAQgCAGgJAFQgJAHgKgBQgIAAgHgCg");
	this.shape_4.setTransform(54.7,12);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgUA/QgMgFgKgKQgUgUAAgcQAAgNAEgMQAFgMAKgJQATgUAbgBQAXAAARAJQAQAJAAARQAAAKgHAHQgHAIgKAAQgGAAgGgBIgGgDIAAgDIAAgEIAAgDQAAgJgDgEQgEgFgFAAQgIAAgGAMQgFANACAOQABAMAFAJQAGAIAHAEQAHACAKABQAJgBAJgDQAJgDAIgEQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAABQABAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABQgBAFgEAGQgEAGgHAHQgHAHgLAEQgLAFgNAAQgNAAgMgFg");
	this.shape_5.setTransform(40.3,14.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgxAwQgKgKgFgMQgFgMAAgOQAAgNAFgMQAFgMAKgKQAKgKANgFQAMgFAOAAQAPAAANAFQAMAFAKAKQAUAUAAAbQAAAOgFAMQgFANgJAJQgLAKgMAFQgMAFgQAAQgdAAgUgUgAgIgkQgEADgDAFQgEAMAAAQQAAARAEALQADAGAEADQAEADAEAAQAGAAADgDQAEgDADgFQAFgLAAgSQAAgQgFgLQgGgMgKAAQgEAAgEADg");
	this.shape_6.setTransform(26.5,14.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAeBdIgBgBIAAAAIAAhIIgqAAIAABIIgBABIg0AAIgBgBIAAAAIABiIQgBgKgDgGQgDgGgDgCIgFgCQAAAAgBgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQACgGALgHQAKgGAKAAQAQAAAKALQAKAJAAAVIAAARIAAATIAqAAIAAhEIABgCIA0AAIABABIAAABIAACvIgBABg");
	this.shape_7.setTransform(10.3,11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,0,117.3,29), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAaA8QgKgHgCgOQgHAPgKAHQgGADgGACIgLACQgHAAgGgDQgGgDgFgFQgKgMAAgSIAAgmQAAgLgCgIQgCgHgDgDIgFgEIgEgDQAAAAgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQACgGAKgFQAJgGAKAAQAHAAAHACQAHADAFAFQALALAAARIAAAwQAAAGABAEQACAEAEAAQAFABAGgKQAEgHAAgKIAAhEIABgBIAyAAIABABIgCBJQAAAOADAIQADAIACABIAGAEQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQgCAHgJAGQgJAFgKAAQgNAAgJgIg");
	this.shape.setTransform(183.1,14.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAaA8QgKgHgCgOQgHAPgKAHQgGADgGACIgLACQgHAAgGgDQgGgDgFgFQgKgMAAgSIAAgmQAAgLgCgIQgCgHgDgDIgFgEIgEgDQAAAAgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQACgGAKgFQAJgGAKAAQAHAAAHACQAHADAFAFQALALAAARIAAAwQAAAGABAEQACAEAEAAQAFABAGgKQAEgHAAgKIAAhEIABgBIAyAAIABABIgCBJQAAAOADAIQADAIACABIAGAEQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQgCAHgJAGQgJAFgKAAQgNAAgJgIg");
	this.shape_1.setTransform(167.8,14.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag9BdIgBgBIAAAAIgBiAQAAgOgCgIQgCgIgDgCIgEgDQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQACgGAJgGQAJgFAKAAQANAAAJAHQAKAIACANQAOgcAZAAQAWAAANAVQANAUAAAbQAAAOgDALQgDAMgHAJQgNAVgYAAQgMAAgJgGQgIgGgHgMIAABJIgBABgAgHgxIgDAMIgCANIACAOIADAKQAGAJAHAAQAJAAAFgJQAFgJAAgPQAAgPgFgKQgFgJgJAAQgHAAgGAJg");
	this.shape_2.setTransform(152.2,17);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAYA8QgJgHgDgOQgHAPgJAGQgKAIgMgBQgIABgGgDQgHgDgGgEQgLgLgGgPIgEgQIgBgQQAAgbANgUQAHgKAJgFQAJgFAMAAQAMAAAJAGQAJAFAGANIAAgSQAAAAAAAAQAAgBAAAAQABAAAAAAQAAAAABAAIAxAAIABABIgBBJQAAAOACAIQADAIADABIAFAEQABAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQgCAHgJAGQgJAFgKAAQgNAAgJgIgAgNgfQgDADgDAEQgCAFgBAGIgCANIACANQABAGACAFQADAEADADQAEACAEAAQAEAAADgCQADgDADgEQAFgJAAgPQAAgPgFgJQgDgEgDgDQgDgDgEABQgEgBgEADg");
	this.shape_3.setTransform(137.2,14.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAhBBQgGgCgFgGQgKgJAAgSIAAgQIgYAAIAAAwQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAgBAAIgyAAIgBgBIAAAAIAChJQAAgOgDgIQgCgIgDgCIgFgDQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQACgGAKgGQAJgFAKAAQAHAAAHADQAGACAFAFQAJAKAAASIAAAOIAYAAIAAguIABgBIAwAAIABABIAABJQAAALACAIQACAHACADIAFAEIADADQABAAAAABQAAAAAAAAQABABAAAAQAAAAgBABQgCAGgJAFQgJAGgKAAQgIAAgGgDg");
	this.shape_4.setTransform(121.7,14.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAaA8QgKgHgCgOQgHAPgKAHQgGADgGACIgLACQgHAAgGgDQgGgDgFgFQgKgMAAgSIAAgmQAAgLgCgIQgCgHgDgDIgFgEIgEgDQAAAAgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQACgGAKgFQAJgGAKAAQAHAAAHACQAHADAFAFQALALAAARIAAAwQAAAGABAEQACAEAEAAQAFABAGgKQAEgHAAgKIAAhEIABgBIAyAAIABABIgCBJQAAAOADAIQADAIACABIAGAEQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQgCAHgJAGQgJAFgKAAQgNAAgJgIg");
	this.shape_5.setTransform(106.4,14.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag+A+QgIgGAAgFIACgDIAFgFQADgCAEgKQAFgJADgOQADgIACgRIADgeIABgNIABgBQAzgMA5AMIABAAIAAB7IgBABIgwAAQAAAAgBAAQAAAAAAAAQAAAAAAgBQAAAAAAAAIAAhlIgSAAQgCAhgDAgQgIAqgiAAQgLAAgHgGg");
	this.shape_6.setTransform(90.9,14.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgbBWQgNgHgFgHQgGgHgCgGIgCgJQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABAAIACgBIAFAEIAIAGQADAEAIADQAIADAJAAQAIAAAEgDQAGgCAFgFQAEgEACgGQACgFABgGIAAgZQgEAHgEAGQgFAFgFAEQgKAHgMAAQgHAAgGgDQgGgDgFgGQgKgLAAgSIAAghQAAgLgCgIQgCgHgDgDIgFgFIgEgCQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQACgGAKgGQAJgFAKAAQAHAAAHACQAHADAFAFQAKALAAARIAAArQAAAHACAEQABACAEABQAGABAGgJQAEgIAAgLIAAg+IABgBIAxAAIABABIAABpQABAhgSAVQgJAKgNAFQgNAFgRAAQgPAAgOgHg");
	this.shape_7.setTransform(75.8,17);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAdBDQgGgCgFgDQgJgFgEgJIgFgRIgEgPQgCgGgEgBIAAA0IgBACIgzAAIgBgBIADhKQAAgNgDgIQgDgIgDgCIgFgDQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQACgGAJgGQAJgFAKAAQAIAAAGACQAGADAFAFQAKAKAAARIAAAVIABAAIABAAIADgOIAFgPQAEgIAGgGQAFgHAJgEQAIgEAJAAQAHAAAGABQAGACAEAEQAEAEACAFQACAFAAAGQAAANgHAHQgEADgFACQgFACgGAAIgJgBQgDgCAAgDIAAgCIAAgEIgBgDIgCgDIgEgCQgGgBgEAHQgEAHAAAIQAPgCAJAMQADADAEALQAFAKAGAJQAHAJAMAGQABABABAAQAAAAABABQAAAAAAAAQAAABAAAAIgCAFQgFAGgJAEQgJAEgJAAQgHAAgGgBg");
	this.shape_8.setTransform(61.3,14.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgwBBQgHgDgHgIQgDgDABgBQAAgBAAAAQAAgBAAAAQABgBABAAQAAAAABgBQAPgKATgaQgHgCgFgDQgGgEgEgDQgEgFgCgFQgCgGAAgHQAAgKAEgIQAFgHAJgGQATgMAYAAIAeACIAXADIAIABIABABIAAB7IgBABIgwAAQgBAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIAAgvQgCAAgCAEIgCALIgFANQgDAGgDAGQgEAGgJADQgIAFgMAAQgHAAgHgEgAgEgkQgEAFAAAHQAAAIAEAFQAEADAHAAIAJAAIAAggIgJgBQgHAAgEAFg");
	this.shape_9.setTransform(40.3,14.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag+A+QgIgGAAgFIACgDIAFgFQADgCAEgKQAFgJADgOQADgIACgRIADgeIABgNIABgBQAzgMA5AMIABAAIAAB7IgBABIgwAAQAAAAgBAAQAAAAAAAAQAAAAAAgBQAAAAAAAAIAAhlIgSAAQgCAhgDAgQgIAqgiAAQgLAAgHgGg");
	this.shape_10.setTransform(25.8,14.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAjBUQgBAAAAgBQgBAAgBAAQAAgBgBAAQAAAAAAgBIAAgiIg+AAIAAACIABACQAAAIgDAGQgCAGgFAFQgKAJgTAAIgIgBQgBAAgBgBQAAAAgBAAQAAgBAAAAQgBAAAAgBIAAg2IAAgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAIAGgEQADgDAFgIQAFgJADgNQADgJACgQIADgbIABgMIACgBQAygLA6ALIAAABIAABdIARAAIABACIAAAbIABAAQAAAUgKAKQgKAKgTAAgAgMAJIgCAHIAbAAIAAhHIgSAAQgCAegFAig");
	this.shape_11.setTransform(10.3,16.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,192.9,29), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hoh();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,154,114), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,85,58), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNCAQgGgCgFgFQgKgKAAgOQAAgOAKgKQAFgFAGgCQAGgDAHAAQANABAJAJQAKAKAAAOQAAAOgKAKQgJAJgNABQgHgBgGgCgAgVAgQgEgIgBgJQgCgJABgIQACgSARgYIAMgVQAFgIAAgGQAAgGgDgGQgCgFgGAAQgMAAgBAWIAAAHIAAAGIAAAEQgBACgJABIgQADQgPAAgIgIQgIgIABgNQAAgSAUgQQAVgPAeAAQAhgBAUASQAUAQAAAWQAAAMgFAKQgGALgKAOQgLAPgGALIgIAPIgIASQgEAGgGAGQgGAFgFABQgLAAgIgSg");
	this.shape.setTransform(201,15.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhUB/IgBgCIAAAAIAAivQAAgSgDgLQgDgLgEgDIgGgEQgDgCABgDQADgIANgIQAMgIAOAAQARAAANALQAMAKAEASQATgnAiAAQAeAAASAcQASAcAAAlQAAATgFAPQgEAQgJAOQgTAbgfAAQgRAAgMgIQgMgIgJgQIAABiQAAABAAAAQAAABAAAAQAAAAgBAAQAAABgBAAgAgJhCIgFAPIgCASIACASQACAJADAGQAHAMALAAQALAAAHgMQAHgNAAgUQAAgUgHgNQgHgNgLAAQgLAAgHANg");
	this.shape_1.setTransform(185.3,22.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAhBSQgNgKgEgSQgKATgMAKQgNAJgRAAQgKAAgJgDQgJgEgIgHQgQgOgHgUIgGgWIgCgWQAAglASgbQAKgOAMgHQANgHAPAAQARAAANAJQALAIAJAQIAAgYQAAAAAAAAQAAgBAAAAQABAAAAAAQAAgBABAAIBEAAIABACIgCBkQAAASADALQAEALAEADIAHAEQAAABABAAQAAABABAAQAAABAAAAQAAABAAABQgDAIgMAIQgNAIgNAAQgSAAgMgLgAgSgqQgFADgDAGIgFAPIgCASIACASQACAIADAHQADAGAFADQAFADAGAAQAGAAADgDQAFgDADgGQAHgNAAgUQAAgUgHgNQgDgGgFgDQgDgEgGAAQgGAAgFAEg");
	this.shape_2.setTransform(164.8,19);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgWBcQgJgCgJgEQgRgHgJgLQgKgLgEgNQgFgMAAgMIAAgBIAAgCIAAhkQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAABAAQAggIAtAAQAOAAANACQANADAMAEQAMAFAHAKQAIAIAAANQAAAMgHAJQgHAIgIAEQAQAEAJALQAKALAAAQQAAAfgaARQgZARgkAAgAgQAKIAAAVQABAXAQAAQAKAAAFgGQAGgIAAgLQAAgJgIgGQgHgEgLAAgAgQg2IAAAiIAHAAQAJAAAGgEQAFgFAAgJQAAgRgTAAg");
	this.shape_3.setTransform(145.2,18.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhDBBQgNgNgIgRQgGgQAAgTQAAgTAGgQQAIgRANgMQANgOASgHQAQgGAUAAQAUAAARAGQASAHANAOQAbAaAAAmQAAATgHARQgGAQgNANQgOAOgRAHQgRAGgVAAQgoAAgbgbgAgLgxQgFAEgEAHQgHAPAAAXQAAAXAHAPQAEAIAFAEQAFAEAGAAQAHAAAGgEQAFgDAEgIQAGgPAAgYQABgXgIgPQgHgQgOAAQgGAAgFAFg");
	this.shape_4.setTransform(125.8,19.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAVBZQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAAAAAAAIAAiJIglAAIAACJIgCABIhBAAQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAAAAAAAIAAinIACgBQAmgIAvAAQAxAAAmAIIABABIAACnIgCABg");
	this.shape_5.setTransform(106.2,18.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgxAQIgCgBIAAgcQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAIBkAAIABABIAAAdIgBABg");
	this.shape_6.setTransform(90.1,18.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgeB+IgBAAIgBAAIAAgCIgBhiQgJAQgMAJQgNAIgQAAQgVAAgPgOQgPgOgHgVQgEgNgCgeQAAgQAGgcQAHgVAPgNQAIgIAJgDQAJgDALAAQAgAAASAhIAAgZIABgBIBBAAIABAAIAAABIAAAZQAJgRANgIQAMgJAPAAQAfAAAQAcQARAcAAAmQAAAkgRAcQgIANgMAGQgNAIgQAAQgegBgRgdIAABfIAAACgAAmhCQgFANAAAVQAAAUAFAMQAGANALAAQAMAAAGgNQAFgMAAgUQAAgvgXAAQgLAAgGANgAhIhCQgGAMAAAVQAAAVAGAMQAGAMALAAQAMAAAGgMQAFgMAAgVQAAgugXAAQgLAAgGANg");
	this.shape_7.setTransform(68.8,22.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgeBWQgRgHgNgOQgbgbAAgmQAAglAbgbQAbgbAqAAQATgBAOAFQAPAFAKAKQAVASAAAVQAAAKgCAIQgDAIgFAHQgFAEgHAFQgGAFgIACQgQAEgTABQgSACgQgEQAJAYAcAEQAdAEAfgSQABAAAAgBQABAAABAAQAAAAABAAQAAABABAAQACACgBADQgCAHgGAIQgGAIgKAKQgJAJgQAHQgQAFgRAAQgSABgQgHgAgCgyQgIAEgEALQgFAKgBAPQALABAIgBQAIgBAGgFQAFgDADgGQADgEAAgIQAAgHgFgFQgFgEgIAAIAAAAIgBAAg");
	this.shape_8.setTransform(44.6,19);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhTCAQgmgDgTgFIgBgCIAAAAIABi2QgCgOgEgIQgEgJgDgCIgHgDQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBABAAQADgJAOgIQAOgIAOAAQAVAAAOANQAOAOAAAbIgBCZIArAAIAAjEIABgCIBEAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAAAAAABIABDEIArAAIAAjEIABgCIBGAAQABAAAAAAQAAAAABABQAAAAAAAAQAAAAAAABIABDsIgCACQgmAKhxAAIgPAAQguAAgggCg");
	this.shape_9.setTransform(18.2,15.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,208.2,38), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.povar();
	this.instance.parent = this;
	this.instance.setTransform(5,18,0.68,0.68);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(5,18,197.3,305.4), null);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol14();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,0,0,0,120,200);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.2,scaleY:1.2,x:0.1,y:0.1},69).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-200,240,400);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol18();
	this.instance.parent = this;
	this.instance.setTransform(120,200,1,1,0,0,0,120,200);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.19,scaleY:1.19,y:200.1},69).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,240,400);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol16();
	this.instance.parent = this;
	this.instance.setTransform(120,200,1,1,0,0,0,120,200);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.18,scaleY:1.18},69).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,240,400);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_518 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(518).call(this.frame_518).wait(1));

	// Layer 14
	this.instance = new lib.Symbol10();
	this.instance.parent = this;
	this.instance.setTransform(103,368.4,1,1,0,0,0,96.5,14.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(434).to({_off:false},0).to({y:200.4},7).to({y:192.4},2).to({y:200.4},2).wait(68).to({alpha:0},5).wait(1));

	// Layer 13
	this.instance_1 = new lib.Symbol11();
	this.instance_1.parent = this;
	this.instance_1.setTransform(103.5,337.9,1,1,0,0,0,58.6,14.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(430).to({_off:false},0).to({y:169.9},7).to({y:161.9},2).to({y:169.9},2).wait(72).to({alpha:0},5).wait(1));

	// Layer 12
	this.instance_2 = new lib.Symbol12();
	this.instance_2.parent = this;
	this.instance_2.setTransform(103.3,308.6,1,1,0,0,0,87.6,14.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(426).to({_off:false},0).to({y:140.6},7).to({y:132.6},2).to({y:140.6},2).wait(76).to({alpha:0},5).wait(1));

	// Layer 11
	this.instance_3 = new lib.Symbol13();
	this.instance_3.parent = this;
	this.instance_3.setTransform(103.6,278.3,1,1,0,0,0,61.9,14.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(423).to({_off:false},0).to({y:110.3},7).to({y:102.3},2).to({y:110.3},2).wait(79).to({alpha:0},5).wait(1));

	// Layer 9
	this.instance_4 = new lib.Symbol9();
	this.instance_4.parent = this;
	this.instance_4.setTransform(103.6,-235.6,1,1,0,0,0,77,57);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(426).to({_off:false},0).to({x:101.2,y:8.4},7).to({y:16.4},2).to({y:8.4},2).wait(76).to({alpha:0},5).wait(1));

	// Layer 8
	this.instance_5 = new lib.Symbol8();
	this.instance_5.parent = this;
	this.instance_5.setTransform(103.2,-231.4,1,1,0,0,0,42.5,29);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(423).to({_off:false},0).to({y:-108.2},7).to({y:-100.2},2).to({y:-108.2},2).wait(79).to({alpha:0},5).wait(1));

	// Layer 7
	this.instance_6 = new lib.Symbol7();
	this.instance_6.parent = this;
	this.instance_6.setTransform(104.3,-181.2,0.791,0.791,0,0,0,104.2,18.9);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(289).to({_off:false},0).to({y:-109.2},4).wait(1).to({y:-101.2},0).wait(1).to({y:-109.2},0).wait(54).to({alpha:0},5).to({_off:true},1).wait(164));

	// Layer 6
	this.instance_7 = new lib.Symbol6();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-152.1,330.9,1.075,1.075,-13.2,0,0,103.9,322);
	this.instance_7.alpha = 0.09;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(281).to({_off:false},0).to({rotation:0,x:103.9,y:250.9,alpha:1},8).to({x:111.9},2).to({x:103.9},2).wait(56).to({alpha:0},5).to({_off:true},1).wait(164));

	// Layer 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_69 = new cjs.Graphics().p("AGVDXQgWgWAAgfQAAgfAWgWQAVgWAfAAQAfAAAWAWQAWAWAAAfQAAAfgWAWQgWAWgfAAQgfAAgVgWg");
	var mask_graphics_70 = new cjs.Graphics().p("ABtEhQhshagLiMQgMiKBZhsQBahrCLgMQCMgMBrBaQBrBaANCKQAMCMhaBrQhaBriMANIghABQh3AAhehPg");
	var mask_graphics_71 = new cjs.Graphics().p("AiVHtQjMiPgrj2Qgsj0CPjMQCPjMD0grQD2grDMCOQDMCPArD2QArD0iPDMQiODMj2ArQg5AKg3AAQi1AAibhtg");
	var mask_graphics_72 = new cjs.Graphics().p("AlwLtQk2izhclaQhdlZCzk2QCzk2FahdQFZhdE2CzQE2CzBdFaQBdFZi0E2QizE2lZBdQh2AghyAAQjbAAjNh2g");
	var mask_graphics_73 = new cjs.Graphics().p("AncP+QmnjFigm3Qigm2DGmoQDFmnG3igQG2igGoDGQGnDFCgG3QCgG2jGGoQjFGnm3CgQjFBHjAAAQjvAAjqhtg");
	var mask_graphics_74 = new cjs.Graphics().p("AnbUbQodjFj0oKQjzoKDFodQDFodIKj0QIKjzIdDFQIdDFD0IKQDzIKjFIdQjFIdoKD0QkhCGkmAAQjtAAjzhYg");
	var mask_graphics_75 = new cjs.Graphics().p("AmrY+QqWixlXpSQlWpRCxqVQCxqWJSlXQJRlWKVCxQKWCxFXJSQFWJRixKVQixKWpSFXQmHDhmlAAQjZAAjhg8g");
	var mask_graphics_76 = new cjs.Graphics().p("AlMdgQsOiKnIqKQnHqLCKsNQCKsOKKnIQKLnHMNCKQMOCKHIKKQHHKLiKMNQiKMOqKHIQnzFdpBAAQiuAAi2ggg");
	var mask_graphics_77 = new cjs.Graphics().p("EgC9Ah9QuEhPpEq0QpFq0BOuDQBPuEK0pFQK1pEOCBOQOEBPJFK0QJFK0hQODQhOOEq0JFQphH/sDAAQhoAAhrgJg");
	var mask_graphics_78 = new cjs.Graphics().p("A6/bAQrMrLAAv1QAAv0LMrMQLMrLPzAAQP0AALMLLQLMLMAAP0QAAP1rMLLQrMLMv0AAQvzAArMrMg");
	var mask_graphics_130 = new cjs.Graphics().p("A6/bAQrMrLAAv1QAAv0LMrMQLMrLPzAAQP0AALMLLQLMLMAAP0QAAP1rMLLQrMLMv0AAQvzAArMrMg");
	var mask_graphics_131 = new cjs.Graphics().p("A15aHQq0pFhPuEQhOuCJEq1QJFq0OEhPQODhOK0JFQK0JEBPOEQBOODpEK0QpFK0uEBOQhsAKhoAAQsCAAphn/g");
	var mask_graphics_132 = new cjs.Graphics().p("AxLYjQqKnIiKsOQiKsNHHqLQHIqKMOiKQMNiKKLHHQKKHICKMOQCKMNnHKLQnIKKsOCKQi2AgitAAQpBAAn0ldg");
	var mask_graphics_133 = new cjs.Graphics().p("As6WZQpSlXixqWQixqVFWpRQFXpSKWixQKVixJRFWQJSFXCxKWQCxKVlWJRQlXJSqWCxQjiA8jYAAQmlAAmHjhg");
	var mask_graphics_134 = new cjs.Graphics().p("ApLTtQoKj0jFodQjFodDzoKQD0oKIdjFQIdjFIKDzQIKD0DFIdQDFIdjzIKQj0IKodDFQjzBYjtAAQkmAAkhiGg");
	var mask_graphics_135 = new cjs.Graphics().p("AmBQkQm3igjFmnQjGmoCgm2QCgm3GnjFQGojGG2CgQG3CgDFGnQDGGoigG2QigG3mnDFQjqBtjvAAQjAAAjFhHg");
	var mask_graphics_136 = new cjs.Graphics().p("AiiNDQlZhdi0k2Qizk2BdlZQBdlaE2izQE2izFZBdQFaBcCzE3QCzE2hdFZQhcFak3CzQjMB2jcAAQhxAAh2ggg");
	var mask_graphics_137 = new cjs.Graphics().p("ABYJQQj0griPjMQiPjMAsj0QArj2DMiPQDLiOD1ArQD2ArCODMQCPDMgrD0QgrD2jMCPQidBti1AAQg3AAg5gKg");
	var mask_graphics_138 = new cjs.Graphics().p("AEoFvQiMgMhahrQhZhrAMiMQAMiKBrhaQBrhaCMAMQCLAMBaBrQBaBsgMCKQgMCMhsBaQheBPh4AAIgggCg");
	var mask_graphics_139 = new cjs.Graphics().p("AGVDXQgWgWAAgfQAAgfAWgWQAVgWAfAAQAfAAAWAWQAWAWAAAfQAAAfgWAWQgWAWgfAAQgfAAgVgWg");
	var mask_graphics_140 = new cjs.Graphics().p("AGVDXQgWgWAAgfQAAgfAWgWQAVgWAfAAQAfAAAWAWQAWAWAAAfQAAAfgWAWQgWAWgfAAQgfAAgVgWg");
	var mask_graphics_141 = new cjs.Graphics().p("ABtEhQhshagLiMQgMiKBZhsQBahrCLgMQCMgMBrBaQBrBaANCKQAMCMhaBrQhaBriMANIghABQh3AAhehPg");
	var mask_graphics_142 = new cjs.Graphics().p("AiVHtQjMiPgrj2Qgsj0CPjMQCPjMD0grQD2grDMCOQDMCPArD2QArD0iPDMQiODMj2ArQg5AKg3AAQi1AAibhtg");
	var mask_graphics_143 = new cjs.Graphics().p("AlwLtQk2izhclaQhdlZCzk2QCzk2FahdQFZhdE2CzQE2CzBdFaQBdFZi0E2QizE2lZBdQh2AghyAAQjbAAjNh2g");
	var mask_graphics_144 = new cjs.Graphics().p("AncP+QmnjFigm3Qigm2DGmoQDFmnG3igQG2igGoDGQGnDFCgG3QCgG2jGGoQjFGnm3CgQjFBHjAAAQjvAAjqhtg");
	var mask_graphics_145 = new cjs.Graphics().p("AnbUbQodjFj0oKQjzoKDFodQDFodIKj0QIKjzIdDFQIdDFD0IKQDzIKjFIdQjFIdoKD0QkhCGkmAAQjtAAjzhYg");
	var mask_graphics_146 = new cjs.Graphics().p("AmrY+QqWixlXpSQlWpRCxqVQCxqWJSlXQJRlWKVCxQKWCxFXJSQFWJRixKVQixKWpSFXQmHDhmlAAQjZAAjhg8g");
	var mask_graphics_147 = new cjs.Graphics().p("AlMdgQsOiKnIqKQnHqLCKsNQCKsOKKnIQKLnHMNCKQMOCKHIKKQHHKLiKMNQiKMOqKHIQnzFdpBAAQiuAAi2ggg");
	var mask_graphics_148 = new cjs.Graphics().p("EgC9Ah9QuEhPpEq0QpFq0BOuDQBPuEK0pFQK1pEOCBOQOEBPJFK0QJFK0hQODQhOOEq0JFQphH/sDAAQhoAAhrgJg");
	var mask_graphics_149 = new cjs.Graphics().p("A6/bAQrMrLAAv1QAAv0LMrMQLMrLPzAAQP0AALMLLQLMLMAAP0QAAP1rMLLQrMLMv0AAQvzAArMrMg");
	var mask_graphics_201 = new cjs.Graphics().p("A6/bAQrMrLAAv1QAAv0LMrMQLMrLPzAAQP0AALMLLQLMLMAAP0QAAP1rMLLQrMLMv0AAQvzAArMrMg");
	var mask_graphics_202 = new cjs.Graphics().p("A15aHQq0pFhPuEQhOuCJEq1QJFq0OEhPQODhOK0JFQK0JEBPOEQBOODpEK0QpFK0uEBOQhsAKhoAAQsCAAphn/g");
	var mask_graphics_203 = new cjs.Graphics().p("AxLYjQqKnIiKsOQiKsNHHqLQHIqKMOiKQMNiKKLHHQKKHICKMOQCKMNnHKLQnIKKsOCKQi2AgitAAQpBAAn0ldg");
	var mask_graphics_204 = new cjs.Graphics().p("As6WZQpSlXixqWQixqVFWpRQFXpSKWixQKVixJRFWQJSFXCxKWQCxKVlWJRQlXJSqWCxQjiA8jYAAQmlAAmHjhg");
	var mask_graphics_205 = new cjs.Graphics().p("ApLTtQoKj0jFodQjFodDzoKQD0oKIdjFQIdjFIKDzQIKD0DFIdQDFIdjzIKQj0IKodDFQjzBYjtAAQkmAAkhiGg");
	var mask_graphics_206 = new cjs.Graphics().p("AmBQkQm3igjFmnQjGmoCgm2QCgm3GnjFQGojGG2CgQG3CgDFGnQDGGoigG2QigG3mnDFQjqBtjvAAQjAAAjFhHg");
	var mask_graphics_207 = new cjs.Graphics().p("AiiNDQlZhdi0k2Qizk2BdlZQBdlaE2izQE2izFZBdQFaBcCzE3QCzE2hdFZQhcFak3CzQjMB2jcAAQhxAAh2ggg");
	var mask_graphics_208 = new cjs.Graphics().p("ABYJQQj0griPjMQiPjMAsj0QArj2DMiPQDLiOD1ArQD2ArCODMQCPDMgrD0QgrD2jMCPQidBti1AAQg3AAg5gKg");
	var mask_graphics_209 = new cjs.Graphics().p("AEoFvQiMgMhahrQhZhrAMiMQAMiKBrhaQBrhaCMAMQCLAMBaBrQBaBsgMCKQgMCMhsBaQheBPh4AAIgggCg");
	var mask_graphics_210 = new cjs.Graphics().p("AGVDXQgWgWAAgfQAAgfAWgWQAVgWAfAAQAfAAAWAWQAWAWAAAfQAAAfgWAWQgWAWgfAAQgfAAgVgWg");
	var mask_graphics_211 = new cjs.Graphics().p("AGVDXQgWgWAAgfQAAgfAWgWQAVgWAfAAQAfAAAWAWQAWAWAAAfQAAAfgWAWQgWAWgfAAQgfAAgVgWg");
	var mask_graphics_212 = new cjs.Graphics().p("ABtEhQhshagLiMQgMiKBZhsQBahrCLgMQCMgMBrBaQBrBaANCKQAMCMhaBrQhaBriMANIghABQh3AAhehPg");
	var mask_graphics_213 = new cjs.Graphics().p("AiVHtQjMiPgrj2Qgsj0CPjMQCPjMD0grQD2grDMCOQDMCPArD2QArD0iPDMQiODMj2ArQg5AKg3AAQi1AAibhtg");
	var mask_graphics_214 = new cjs.Graphics().p("AlwLtQk2izhclaQhdlZCzk2QCzk2FahdQFZhdE2CzQE2CzBdFaQBdFZi0E2QizE2lZBdQh2AghyAAQjbAAjNh2g");
	var mask_graphics_215 = new cjs.Graphics().p("AncP+QmnjFigm3Qigm2DGmoQDFmnG3igQG2igGoDGQGnDFCgG3QCgG2jGGoQjFGnm3CgQjFBHjAAAQjvAAjqhtg");
	var mask_graphics_216 = new cjs.Graphics().p("AnbUbQodjFj0oKQjzoKDFodQDFodIKj0QIKjzIdDFQIdDFD0IKQDzIKjFIdQjFIdoKD0QkhCGkmAAQjtAAjzhYg");
	var mask_graphics_217 = new cjs.Graphics().p("AmrY+QqWixlXpSQlWpRCxqVQCxqWJSlXQJRlWKVCxQKWCxFXJSQFWJRixKVQixKWpSFXQmHDhmlAAQjZAAjhg8g");
	var mask_graphics_218 = new cjs.Graphics().p("AlMdgQsOiKnIqKQnHqLCKsNQCKsOKKnIQKLnHMNCKQMOCKHIKKQHHKLiKMNQiKMOqKHIQnzFdpBAAQiuAAi2ggg");
	var mask_graphics_219 = new cjs.Graphics().p("EgC9Ah9QuEhPpEq0QpFq0BOuDQBPuEK0pFQK1pEOCBOQOEBPJFK0QJFK0hQODQhOOEq0JFQphH/sDAAQhoAAhrgJg");
	var mask_graphics_220 = new cjs.Graphics().p("A6/bAQrMrLAAv1QAAv0LMrMQLMrLPzAAQP0AALMLLQLMLMAAP0QAAP1rMLLQrMLMv0AAQvzAArMrMg");
	var mask_graphics_272 = new cjs.Graphics().p("A6/bAQrMrLAAv1QAAv0LMrMQLMrLPzAAQP0AALMLLQLMLMAAP0QAAP1rMLLQrMLMv0AAQvzAArMrMg");
	var mask_graphics_273 = new cjs.Graphics().p("A15aHQq0pFhPuEQhOuCJEq1QJFq0OEhPQODhOK0JFQK0JEBPOEQBOODpEK0QpFK0uEBOQhsAKhoAAQsCAAphn/g");
	var mask_graphics_274 = new cjs.Graphics().p("AxLYjQqKnIiKsOQiKsNHHqLQHIqKMOiKQMNiKKLHHQKKHICKMOQCKMNnHKLQnIKKsOCKQi2AgitAAQpBAAn0ldg");
	var mask_graphics_275 = new cjs.Graphics().p("As6WZQpSlXixqWQixqVFWpRQFXpSKWixQKVixJRFWQJSFXCxKWQCxKVlWJRQlXJSqWCxQjiA8jYAAQmlAAmHjhg");
	var mask_graphics_276 = new cjs.Graphics().p("ApLTtQoKj0jFodQjFodDzoKQD0oKIdjFQIdjFIKDzQIKD0DFIdQDFIdjzIKQj0IKodDFQjzBYjtAAQkmAAkhiGg");
	var mask_graphics_277 = new cjs.Graphics().p("AmBQkQm3igjFmnQjGmoCgm2QCgm3GnjFQGojGG2CgQG3CgDFGnQDGGoigG2QigG3mnDFQjqBtjvAAQjAAAjFhHg");
	var mask_graphics_278 = new cjs.Graphics().p("AiiNDQlZhdi0k2Qizk2BdlZQBdlaE2izQE2izFZBdQFaBcCzE3QCzE2hdFZQhcFak3CzQjMB2jcAAQhxAAh2ggg");
	var mask_graphics_279 = new cjs.Graphics().p("ABYJQQj0griPjMQiPjMAsj0QArj2DMiPQDLiOD1ArQD2ArCODMQCPDMgrD0QgrD2jMCPQidBti1AAQg3AAg5gKg");
	var mask_graphics_280 = new cjs.Graphics().p("AEoFvQiMgMhahrQhZhrAMiMQAMiKBrhaQBrhaCMAMQCLAMBaBrQBaBsgMCKQgMCMhsBaQheBPh4AAIgggCg");
	var mask_graphics_281 = new cjs.Graphics().p("AGVDXQgWgWAAgfQAAgfAWgWQAVgWAfAAQAfAAAWAWQAWAWAAAfQAAAfgWAWQgWAWgfAAQgfAAgVgWg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(69).to({graphics:mask_graphics_69,x:53.2,y:23.7}).wait(1).to({graphics:mask_graphics_70,x:66.4,y:36.8}).wait(1).to({graphics:mask_graphics_71,x:79.7,y:39.7}).wait(1).to({graphics:mask_graphics_72,x:93,y:39.8}).wait(1).to({graphics:mask_graphics_73,x:99.5,y:40.2}).wait(1).to({graphics:mask_graphics_74,x:99.3,y:40.6}).wait(1).to({graphics:mask_graphics_75,x:98.7,y:40.7}).wait(1).to({graphics:mask_graphics_76,x:98.2,y:40.4}).wait(1).to({graphics:mask_graphics_77,x:97.9,y:39.7}).wait(1).to({graphics:mask_graphics_78,x:98.2,y:39.2}).wait(52).to({graphics:mask_graphics_130,x:98.2,y:39.2}).wait(1).to({graphics:mask_graphics_131,x:98.9,y:38.9}).wait(1).to({graphics:mask_graphics_132,x:99.5,y:39.2}).wait(1).to({graphics:mask_graphics_133,x:99.7,y:39.7}).wait(1).to({graphics:mask_graphics_134,x:99.6,y:40.2}).wait(1).to({graphics:mask_graphics_135,x:99.2,y:40.4}).wait(1).to({graphics:mask_graphics_136,x:92.8,y:40.3}).wait(1).to({graphics:mask_graphics_137,x:79.5,y:40.1}).wait(1).to({graphics:mask_graphics_138,x:66.3,y:36.9}).wait(1).to({graphics:mask_graphics_139,x:53.2,y:23.7}).wait(1).to({graphics:mask_graphics_140,x:53.2,y:23.7}).wait(1).to({graphics:mask_graphics_141,x:66.4,y:36.8}).wait(1).to({graphics:mask_graphics_142,x:79.7,y:39.7}).wait(1).to({graphics:mask_graphics_143,x:93,y:39.8}).wait(1).to({graphics:mask_graphics_144,x:99.5,y:40.2}).wait(1).to({graphics:mask_graphics_145,x:99.3,y:40.6}).wait(1).to({graphics:mask_graphics_146,x:98.7,y:40.7}).wait(1).to({graphics:mask_graphics_147,x:98.2,y:40.4}).wait(1).to({graphics:mask_graphics_148,x:97.9,y:39.7}).wait(1).to({graphics:mask_graphics_149,x:98.2,y:39.2}).wait(52).to({graphics:mask_graphics_201,x:98.2,y:39.2}).wait(1).to({graphics:mask_graphics_202,x:98.9,y:38.9}).wait(1).to({graphics:mask_graphics_203,x:99.5,y:39.2}).wait(1).to({graphics:mask_graphics_204,x:99.7,y:39.7}).wait(1).to({graphics:mask_graphics_205,x:99.6,y:40.2}).wait(1).to({graphics:mask_graphics_206,x:99.2,y:40.4}).wait(1).to({graphics:mask_graphics_207,x:92.8,y:40.3}).wait(1).to({graphics:mask_graphics_208,x:79.5,y:40.1}).wait(1).to({graphics:mask_graphics_209,x:66.3,y:36.9}).wait(1).to({graphics:mask_graphics_210,x:53.2,y:23.7}).wait(1).to({graphics:mask_graphics_211,x:53.2,y:23.7}).wait(1).to({graphics:mask_graphics_212,x:66.4,y:36.8}).wait(1).to({graphics:mask_graphics_213,x:79.7,y:39.7}).wait(1).to({graphics:mask_graphics_214,x:93,y:39.8}).wait(1).to({graphics:mask_graphics_215,x:99.5,y:40.2}).wait(1).to({graphics:mask_graphics_216,x:99.3,y:40.6}).wait(1).to({graphics:mask_graphics_217,x:98.7,y:40.7}).wait(1).to({graphics:mask_graphics_218,x:98.2,y:40.4}).wait(1).to({graphics:mask_graphics_219,x:97.9,y:39.7}).wait(1).to({graphics:mask_graphics_220,x:98.2,y:39.2}).wait(52).to({graphics:mask_graphics_272,x:98.2,y:39.2}).wait(1).to({graphics:mask_graphics_273,x:98.9,y:38.9}).wait(1).to({graphics:mask_graphics_274,x:99.5,y:39.2}).wait(1).to({graphics:mask_graphics_275,x:99.7,y:39.7}).wait(1).to({graphics:mask_graphics_276,x:99.6,y:40.2}).wait(1).to({graphics:mask_graphics_277,x:99.2,y:40.4}).wait(1).to({graphics:mask_graphics_278,x:92.8,y:40.3}).wait(1).to({graphics:mask_graphics_279,x:79.5,y:40.1}).wait(1).to({graphics:mask_graphics_280,x:66.3,y:36.9}).wait(1).to({graphics:mask_graphics_281,x:53.2,y:23.7}).wait(238));

	// Layer 3
	this.instance_8 = new lib.Tween1("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(102,42);

	this.instance_9 = new lib.Symbol15();
	this.instance_9.parent = this;
	this.instance_9.setTransform(102,42,1,1,0,0,0,120,200);

	this.instance_10 = new lib.Symbol17();
	this.instance_10.parent = this;
	this.instance_10.setTransform(102,43,1,1,0,0,0,120,200);

	var maskedShapeInstanceList = [this.instance_8,this.instance_9,this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8}]},69).to({state:[{t:this.instance_9}]},71).to({state:[{t:this.instance_10}]},71).to({state:[]},71).wait(237));

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AHkDHQgJgJAAgMQAAgNAJgJQAJgIAMAAQANAAAIAIQAJAJAAANQAAAMgJAJQgIAJgNAAQgMAAgJgJg");
	var mask_1_graphics_1 = new cjs.Graphics().p("AFHDhQgtgtAAhDQAAhCAtgvQAwgtBCAAQBCAAAtAtQAwAvAABCQAABDgwAtQgtAwhCAAQhCAAgwgwg");
	var mask_1_graphics_2 = new cjs.Graphics().p("ACqD7QhShSAAh4QAAh3BShXQBWhRB5AAQB4AABSBRQBWBXAAB3QAAB4hWBSQhSBXh4AAQh5AAhWhXg");
	var mask_1_graphics_3 = new cjs.Graphics().p("AANEkQh1h2AAiuQAAitB1h9QB9h3CuAAQCuAAB3B3QB9B9AACtQAACuh9B2Qh3B+iuAAQiuAAh9h+g");
	var mask_1_graphics_4 = new cjs.Graphics().p("AiPF/QibibAAjkQAAjjCbikQCjibDkAAQDkAACbCbQCkCkAADjQAADkikCbQibCkjkAAQjkAAijikg");
	var mask_1_graphics_5 = new cjs.Graphics().p("AksHZQjAi/AAkaQAAkZDAjLQDLi/EZAAQEaAAC/C/QDLDLAAEZQAAEajLC/Qi/DLkaAAQkZAAjLjLg");
	var mask_1_graphics_6 = new cjs.Graphics().p("AnJI0QjkjkAAlQQAAlPDkjxQDyjlFPAAQFPAADkDlQDyDxAAFPQAAFQjyDkQjkDylPAAQlPAAjyjyg");
	var mask_1_graphics_7 = new cjs.Graphics().p("ApmKOQkJkIAAmGQAAmFEJkYQEZkJGEAAQGGAAEJEJQEYEYAAGFQAAGGkYEIQkJEZmGAAQmEAAkZkZg");
	var mask_1_graphics_8 = new cjs.Graphics().p("Ar6LpQktkuAAm7QAAm6EtlAQFAktG6AAQG7AAEuEtQE/FAAAG6QAAG7k/EuQkuE/m7AAQm6AAlAk/g");
	var mask_1_graphics_9 = new cjs.Graphics().p("AtWNDQlSlSAAnxQAAnwFSlmQFmlSHwAAQHxAAFSFSQFmFmAAHwQAAHxlmFSQlSFmnxAAQnwAAlmlmg");
	var mask_1_graphics_59 = new cjs.Graphics().p("AtWNDQlSlSAAnxQAAnwFSlmQFmlSHwAAQHxAAFSFSQFmFmAAHwQAAHxlmFSQlSFmnxAAQnwAAlmlmg");
	var mask_1_graphics_60 = new cjs.Graphics().p("AtWNDQlSlSAAnxQAAnwFSlmQFmlSHwAAQHxAAFSFSQFmFmAAHwQAAHxlmFSQlSFmnxAAQnwAAlmlmg");
	var mask_1_graphics_61 = new cjs.Graphics().p("Ar6LpQktkuAAm7QAAm6EtlAQFAktG6AAQG7AAEuEtQE/FAAAG6QAAG7k/EuQkuE/m7AAQm6AAlAk/g");
	var mask_1_graphics_62 = new cjs.Graphics().p("ApuKOQkIkIAAmGQAAmFEIkYQEZkJGEAAQGGAAEJEJQEYEYAAGFQAAGGkYEIQkJEZmGAAQmEAAkZkZg");
	var mask_1_graphics_63 = new cjs.Graphics().p("AnQI0QjkjkAAlQQAAlPDkjxQDyjlFPAAQFQAADkDlQDxDxAAFPQAAFQjxDkQjkDylQAAQlPAAjyjyg");
	var mask_1_graphics_64 = new cjs.Graphics().p("AkyHZQi/i/AAkaQAAkZC/jLQDLi/EZAAQEaAADAC/QDLDLAAEZQAAEajLC/QjADLkaAAQkZAAjLjLg");
	var mask_1_graphics_65 = new cjs.Graphics().p("AiUF/QibibAAjkQAAjjCbikQCkibDkAAQDkAACbCbQCkCkAADjQAADkikCbQibCkjkAAQjkAAikikg");
	var mask_1_graphics_66 = new cjs.Graphics().p("AAJEkQh1h2AAiuQAAitB1h9QB+h3CuAAQCuAAB2B3QB+B9AACtQAACuh+B2Qh2B+iuAAQiuAAh+h+g");
	var mask_1_graphics_67 = new cjs.Graphics().p("ACnD5QhRhSAAh4QAAh3BRhXQBXhSB4AAQB5AABRBSQBXBXAAB3QAAB4hXBSQhRBWh5AAQh4AAhXhWg");
	var mask_1_graphics_68 = new cjs.Graphics().p("AFFDgQgtgtAAhDQAAhCAtgvQAwgtBDAAQBCAAAtAtQAwAvAABCQAABDgwAtQgtAvhCAAQhDAAgwgvg");
	var mask_1_graphics_69 = new cjs.Graphics().p("AHkDHQgJgJAAgMQAAgNAJgJQAJgIAMAAQANAAAIAIQAJAJAAANQAAAMgJAJQgIAJgNAAQgMAAgJgJg");
	var mask_1_graphics_354 = new cjs.Graphics().p("AHkDHQgJgJAAgMQAAgNAJgJQAJgIAMAAQANAAAIAIQAJAJAAANQAAAMgJAJQgIAJgNAAQgMAAgJgJg");
	var mask_1_graphics_355 = new cjs.Graphics().p("AFHDhQgtgtAAhDQAAhCAtgvQAwgtBCAAQBCAAAtAtQAwAvAABCQAABDgwAtQgtAwhCAAQhCAAgwgwg");
	var mask_1_graphics_356 = new cjs.Graphics().p("ACqD7QhShSAAh4QAAh3BShXQBWhRB5AAQB4AABSBRQBWBXAAB3QAAB4hWBSQhSBXh4AAQh5AAhWhXg");
	var mask_1_graphics_357 = new cjs.Graphics().p("AANEkQh1h2AAiuQAAitB1h9QB9h3CuAAQCuAAB3B3QB9B9AACtQAACuh9B2Qh3B+iuAAQiuAAh9h+g");
	var mask_1_graphics_358 = new cjs.Graphics().p("AiPF/QibibAAjkQAAjjCbikQCjibDkAAQDkAACbCbQCkCkAADjQAADkikCbQibCkjkAAQjkAAijikg");
	var mask_1_graphics_359 = new cjs.Graphics().p("AksHZQjAi/AAkaQAAkZDAjLQDLi/EZAAQEaAAC/C/QDLDLAAEZQAAEajLC/Qi/DLkaAAQkZAAjLjLg");
	var mask_1_graphics_360 = new cjs.Graphics().p("AnJI0QjkjkAAlQQAAlPDkjxQDyjlFPAAQFPAADkDlQDyDxAAFPQAAFQjyDkQjkDylPAAQlPAAjyjyg");
	var mask_1_graphics_361 = new cjs.Graphics().p("ApmKOQkJkIAAmGQAAmFEJkYQEZkJGEAAQGGAAEJEJQEYEYAAGFQAAGGkYEIQkJEZmGAAQmEAAkZkZg");
	var mask_1_graphics_362 = new cjs.Graphics().p("Ar6LpQktkuAAm7QAAm6EtlAQFAktG6AAQG7AAEuEtQE/FAAAG6QAAG7k/EuQkuE/m7AAQm6AAlAk/g");
	var mask_1_graphics_363 = new cjs.Graphics().p("AtWNDQlSlSAAnxQAAnwFSlmQFmlSHwAAQHxAAFSFSQFmFmAAHwQAAHxlmFSQlSFmnxAAQnwAAlmlmg");
	var mask_1_graphics_413 = new cjs.Graphics().p("AtWNDQlSlSAAnxQAAnwFSlmQFmlSHwAAQHxAAFSFSQFmFmAAHwQAAHxlmFSQlSFmnxAAQnwAAlmlmg");
	var mask_1_graphics_414 = new cjs.Graphics().p("AtWNDQlSlSAAnxQAAnwFSlmQFmlSHwAAQHxAAFSFSQFmFmAAHwQAAHxlmFSQlSFmnxAAQnwAAlmlmg");
	var mask_1_graphics_415 = new cjs.Graphics().p("Ar6LpQktkuAAm7QAAm6EtlAQFAktG6AAQG7AAEuEtQE/FAAAG6QAAG7k/EuQkuE/m7AAQm6AAlAk/g");
	var mask_1_graphics_416 = new cjs.Graphics().p("ApuKOQkIkIAAmGQAAmFEIkYQEZkJGEAAQGGAAEJEJQEYEYAAGFQAAGGkYEIQkJEZmGAAQmEAAkZkZg");
	var mask_1_graphics_417 = new cjs.Graphics().p("AnQI0QjkjkAAlQQAAlPDkjxQDyjlFPAAQFQAADkDlQDxDxAAFPQAAFQjxDkQjkDylQAAQlPAAjyjyg");
	var mask_1_graphics_418 = new cjs.Graphics().p("AkyHZQi/i/AAkaQAAkZC/jLQDLi/EZAAQEaAADAC/QDLDLAAEZQAAEajLC/QjADLkaAAQkZAAjLjLg");
	var mask_1_graphics_419 = new cjs.Graphics().p("AiUF/QibibAAjkQAAjjCbikQCkibDkAAQDkAACbCbQCkCkAADjQAADkikCbQibCkjkAAQjkAAikikg");
	var mask_1_graphics_420 = new cjs.Graphics().p("AAJEkQh1h2AAiuQAAitB1h9QB+h3CuAAQCuAAB2B3QB+B9AACtQAACuh+B2Qh2B+iuAAQiuAAh+h+g");
	var mask_1_graphics_421 = new cjs.Graphics().p("ACnD5QhRhSAAh4QAAh3BRhXQBXhSB4AAQB5AABRBSQBXBXAAB3QAAB4hXBSQhRBWh5AAQh4AAhXhWg");
	var mask_1_graphics_422 = new cjs.Graphics().p("AFFDgQgtgtAAhDQAAhCAtgvQAwgtBDAAQBCAAAtAtQAwAvAABCQAABDgwAtQgtAvhCAAQhDAAgwgvg");
	var mask_1_graphics_423 = new cjs.Graphics().p("AHkDHQgJgJAAgMQAAgNAJgJQAJgIAMAAQANAAAIAIQAJAJAAANQAAAMgJAJQgIAJgNAAQgMAAgJgJg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:53.5,y:20.8}).wait(1).to({graphics:mask_1_graphics_1,x:60,y:27.3}).wait(1).to({graphics:mask_1_graphics_2,x:66.5,y:33.8}).wait(1).to({graphics:mask_1_graphics_3,x:73,y:38.8}).wait(1).to({graphics:mask_1_graphics_4,x:79.5,y:38.8}).wait(1).to({graphics:mask_1_graphics_5,x:86,y:38.9}).wait(1).to({graphics:mask_1_graphics_6,x:92.5,y:39}).wait(1).to({graphics:mask_1_graphics_7,x:99,y:39}).wait(1).to({graphics:mask_1_graphics_8,x:104.6,y:39.1}).wait(1).to({graphics:mask_1_graphics_9,x:102.7,y:37.2}).wait(50).to({graphics:mask_1_graphics_59,x:102.7,y:37.2}).wait(1).to({graphics:mask_1_graphics_60,x:102.7,y:37.2}).wait(1).to({graphics:mask_1_graphics_61,x:102.8,y:37.3}).wait(1).to({graphics:mask_1_graphics_62,x:98.2,y:37.5}).wait(1).to({graphics:mask_1_graphics_63,x:91.8,y:37.6}).wait(1).to({graphics:mask_1_graphics_64,x:85.5,y:37.8}).wait(1).to({graphics:mask_1_graphics_65,x:79.1,y:37.9}).wait(1).to({graphics:mask_1_graphics_66,x:72.7,y:38.1}).wait(1).to({graphics:mask_1_graphics_67,x:66.3,y:33.5}).wait(1).to({graphics:mask_1_graphics_68,x:59.9,y:27.1}).wait(1).to({graphics:mask_1_graphics_69,x:53.5,y:20.8}).wait(1).to({graphics:null,x:0,y:0}).wait(284).to({graphics:mask_1_graphics_354,x:53.5,y:20.8}).wait(1).to({graphics:mask_1_graphics_355,x:60,y:27.3}).wait(1).to({graphics:mask_1_graphics_356,x:66.5,y:33.8}).wait(1).to({graphics:mask_1_graphics_357,x:73,y:38.8}).wait(1).to({graphics:mask_1_graphics_358,x:79.5,y:38.8}).wait(1).to({graphics:mask_1_graphics_359,x:86,y:38.9}).wait(1).to({graphics:mask_1_graphics_360,x:92.5,y:39}).wait(1).to({graphics:mask_1_graphics_361,x:99,y:39}).wait(1).to({graphics:mask_1_graphics_362,x:104.6,y:39.1}).wait(1).to({graphics:mask_1_graphics_363,x:102.7,y:37.2}).wait(50).to({graphics:mask_1_graphics_413,x:102.7,y:37.2}).wait(1).to({graphics:mask_1_graphics_414,x:102.7,y:37.2}).wait(1).to({graphics:mask_1_graphics_415,x:102.8,y:37.3}).wait(1).to({graphics:mask_1_graphics_416,x:98.2,y:37.5}).wait(1).to({graphics:mask_1_graphics_417,x:91.8,y:37.6}).wait(1).to({graphics:mask_1_graphics_418,x:85.5,y:37.8}).wait(1).to({graphics:mask_1_graphics_419,x:79.1,y:37.9}).wait(1).to({graphics:mask_1_graphics_420,x:72.7,y:38.1}).wait(1).to({graphics:mask_1_graphics_421,x:66.3,y:33.5}).wait(1).to({graphics:mask_1_graphics_422,x:59.9,y:27.1}).wait(1).to({graphics:mask_1_graphics_423,x:53.5,y:20.8}).wait(96));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNCAQgGgDgFgFQgKgJAAgOQAAgOAKgKQAFgEAGgDQAGgCAHAAQANgBAJAKQAKAKAAAOQAAAOgKAJQgJAKgNAAQgHAAgGgCgAgVAgQgEgJgBgIQgCgJABgIQACgSARgYIAMgVQAFgJAAgFQAAgGgDgFQgCgGgGAAQgMAAgBAWIAAAGIAAAHIAAADQgBADgJACIgQACQgPAAgIgIQgIgIABgNQAAgSAUgQQAVgPAegBQAhAAAUARQAUASAAAVQAAALgFALQgGAKgKAQQgLAOgGALIgIAPIgIARQgEAHgGAGQgGAGgFgBQgLAAgIgRg");
	this.shape.setTransform(199.1,57.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhVBUQgKgIAAgHIADgEIAGgGQAEgEAGgNQAFgMAFgTQAEgLADgYIAEgpIABgSQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAQBFgQBPAQIgBAAIABABIAACnIgBABIhCAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAgBAAAAIAAiJIgYAAQgDAtgEAqQgLA7guAAQgPAAgKgJg");
	this.shape_1.setTransform(183.4,60.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAiBSQgMgKgEgTQgKAVgNAJQgIAEgIADQgHADgIAAQgJgBgJgEQgIgDgHgIQgNgQAAgZIAAg0QAAgPgDgJQgDgLgDgEIgHgGIgGgDQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQADgJAMgIQAMgHAOgBQALABAJADQAJADAHAIQAOAOAAAXIAABBQAAAJADAGQACAEAGABQAHABAHgNQAGgKAAgOIAAhcIACgCIBEAAIABACIgCBjQAAATADALQAEALAEADIAHAEQABAAAAABQABAAAAABQAAAAAAABQAAABAAABQgDAIgNAIQgMAIgNAAQgSAAgNgLg");
	this.shape_2.setTransform(163.2,61);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgWBbQgJgCgJgDQgRgHgJgLQgKgLgEgNQgFgMAAgNIAAgBIAAgBIAAhjQAAgBAAAAQAAAAABgBQAAAAAAAAQAAAAABAAQAggIAtAAQAOAAANACQANADAMAFQAMAEAHAJQAIAKAAANQAAAMgHAIQgHAIgIADQAQAGAJAJQAKAMAAAQQAAAfgaARQgZARgkAAgAgQAKIAAAVQABAXAQAAQAKAAAFgHQAGgGAAgMQAAgJgIgFQgHgGgLAAgAgQg2IAAAiIAHAAQAJAAAGgFQAFgEAAgJQAAgRgTAAg");
	this.shape_3.setTransform(143.9,60.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhDBBQgNgNgIgQQgGgQAAgUQAAgSAGgRQAIgQANgNQANgOASgHQAQgHAUABQAUgBARAHQASAHANAOQAbAaAAAmQAAAUgHAQQgGARgNAMQgOAOgRAGQgRAIgVgBQgoAAgbgbgAgLgyQgFAFgEAHQgHAPAAAXQAAAXAHAPQAEAIAFAEQAFAEAGAAQAHAAAGgEQAFgDAEgIQAGgPAAgYQABgWgIgQQgHgPgOAAQgGAAgFADg");
	this.shape_4.setTransform(124.5,61.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgJBZQgJgEgGgHQgGgHgEgJQgDgKAAgMIAAhSIgtAAIAAgBIgBgmIAAgDIABgBQAdgGAoAAQAnAAAUACIAiADQABAAAAABQABAAAAAAQABABAAAAQAAABABABIABAKQAAAHgDAGQgCAGgFAFQgLAIgLABQgLACgLgCIgBAAIAAA3QAAATAEALQAEALAEACIAHAEQAAABABAAQAAABABAAQAAABAAABQAAAAAAABQgDAJgNAHQgMAIgOAAQgKAAgIgDg");
	this.shape_5.setTransform(106,61);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhDBBQgNgNgIgQQgGgQAAgUQAAgSAGgRQAIgQANgNQANgOASgHQAQgHAUABQAUgBARAHQASAHANAOQAbAaAAAmQAAAUgHAQQgGARgNAMQgOAOgRAGQgRAIgVgBQgoAAgbgbgAgLgyQgFAFgEAHQgHAPAAAXQAAAXAHAPQAEAIAFAEQAFAEAGAAQAHAAAGgEQAFgDAEgIQAGgPAAgYQABgWgIgQQgHgPgOAAQgGAAgFADg");
	this.shape_6.setTransform(87.6,61.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgkBYQgIgDgHgIQgHgGgDgKQgDgKAAgLIgBh8IABgBIABgBQAfgEAgAAQApAAAUADQABABABAAQAAAAABABQAAAAAAABQABAAAAABIABAEIAAAJQAAAFgCAGQgCAFgGAGQgGAFgKADQgHACgIABIgVgCIAAA3QAAASAEALQADALAFACIAHAFQAAAAABABQAAAAAAABQABAAAAABQAAABgBAAQgDAJgNAIQgLAHgOAAQgKAAgJgDg");
	this.shape_7.setTransform(71,61.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAiBSQgMgKgEgTQgKAVgNAJQgIAEgIADQgHADgIAAQgJgBgJgEQgIgDgHgIQgNgQAAgZIAAg0QAAgPgDgJQgDgLgDgEIgHgGIgGgDQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQADgJAMgIQAMgHAOgBQALABAJADQAJADAHAIQAOAOAAAXIAABBQAAAJADAGQACAEAGABQAHABAHgNQAGgKAAgOIAAhcIACgCIBEAAIABACIgCBjQAAATADALQAEALAEADIAHAEQABAAAAABQABAAAAABQAAAAAAABQAAABAAABQgDAIgNAIQgMAIgNAAQgSAAgNgLg");
	this.shape_8.setTransform(53,61);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhUB/IgBgCIAAAAIAAivQAAgSgDgLQgDgLgEgDIgGgEQgDgCABgDQADgIANgIQAMgIAOAAQARAAANALQAMAKAEASQATgnAiAAQAeAAASAcQASAcAAAlQAAATgFAPQgEAQgJAOQgTAbgfAAQgRAAgMgIQgMgIgJgQIAABiQAAABAAAAQAAABAAAAQAAAAgBAAQAAABgBAAgAgJhCIgFAPIgCASIACASQACAJADAGQAHAMALAAQALAAAHgMQAHgNAAgUQAAgUgHgNQgHgNgLAAQgLAAgHANg");
	this.shape_9.setTransform(31.8,64.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAVBZQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAAAAAAAIAAiJIglAAIAACJIgCABIhBAAQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAAAAAAAIAAinIACgBQAmgIAvAAQAxAAAmAIIABABIAACnIgCABg");
	this.shape_10.setTransform(11.8,60.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhDBBQgNgNgIgRQgGgQAAgTQAAgTAGgQQAIgRANgMQANgOASgHQAQgGAUAAQAUAAARAGQASAHANAOQAbAaAAAmQAAATgGARQgHAQgNANQgOAOgRAHQgRAGgVAAQgnAAgcgbgAgLgxQgFAEgEAHQgHAPAAAXQAAAXAHAPQAEAIAFAEQAFAEAGAAQAHAAAGgEQAFgDAEgIQAGgPAAgYQABgXgIgPQgHgQgOAAQgGAAgFAFg");
	this.shape_11.setTransform(155,19.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgJBZQgJgEgGgHQgHgHgDgJQgDgKAAgMIAAhSIgtAAIAAgBIgBgmIAAgDIABgBQAdgGAoAAQAnAAAUACIAiADQABAAAAABQABAAAAAAQABABAAAAQAAABAAABIACAKQAAAHgDAGQgCAGgGAFQgKAIgLABQgLACgLgCIgBAAIAAA3QAAATAEALQADALAFACIAHAEQAAABABAAQAAABABAAQAAABAAABQAAAAAAABQgEAJgMAHQgMAIgOAAQgKAAgIgDg");
	this.shape_12.setTransform(136.5,19);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgKBcQgRAAgRgEQgQgFgNgKQgNgLAAgQQAAgNAJgKQAJgJAPAAQAJAAAHACQAHADAAAEQgCAOAFAIQAGAKANAAQAYAAACgiIgpAAQAAAAAAAAQAAgBgBAAQAAAAAAAAQAAgBAAAAIAAghIABgBIApAAQgCgmgbAAQgLABgFAJQgEAHABAOQAAAFgHACQgHADgJAAQgHAAgGgDQgGgCgFgFQgJgKABgNQAAgMAHgKQAIgJAMgFQAMgFAMgDQALgCANAAIAAAAIABAAQAqAAAdAeQAdAegGAmQgBATgIAQQgHAPgOAMQgbAXgkAAIgCAAg");
	this.shape_13.setTransform(119,18.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhDBBQgNgNgIgRQgGgQAAgTQAAgTAGgQQAIgRANgMQAOgOARgHQAQgGAUAAQAVAAARAGQAQAHAOAOQAbAaAAAmQAAATgGARQgHAQgOANQgNAOgRAHQgRAGgVAAQgoAAgbgbgAgMgxQgFAEgDAHQgHAPAAAXQAAAXAHAPQAEAIAFAEQAFAEAGAAQAIAAAEgEQAGgDADgIQAIgPgBgYQAAgXgHgPQgHgQgOAAQgGAAgGAFg");
	this.shape_14.setTransform(91.7,19.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgJBZQgIgEgHgHQgGgHgEgJQgDgKAAgMIAAhSIgsAAIgBgBIgCgmIAAgDIACgBQAegGAnAAQAnAAAUACIAiADQABAAAAABQABAAAAAAQABABAAAAQAAABAAABIABAKQABAHgDAGQgDAGgFAFQgKAIgLABQgLACgMgCIAAAAIAAA3QAAATAEALQADALAEACIAHAEQABABABAAQAAABAAAAQABABAAABQAAAAgBABQgDAJgMAHQgNAIgNAAQgJAAgJgDg");
	this.shape_15.setTransform(73.2,19);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AA9CBQgIgBgIgDQgOgHgKgKQgIgKgHgSQgGgRgDgOIgGghQgHgCgFADIACBoIgCABIhJAAIgBgBIAAAAIAAi4QgBgLgDgIQgDgHgDgDIgGgFIgFgDQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQADgJAPgIQAOgIAPAAQALAAAJADQAJAEAHAHQAOANAAAbIgBA3IAFgCIAFgBQAAgUAEgSQAFgSAJgPQATgfAkgEQAYgDAPANQAPAMgDAVQgBAOgIAIQgHAJgJACQgKACgJAAQgJAAgGgCQgGgCAAgBIAAgDIAAgEIAAgDIgBgDIgCgCIgDgCIgEgBQgKAAgFAOQgGAOABAUQAPAAAJAJQAIAKAKAUQAUApAPARQALALAKAEQADABgEAMQgGATgSAHIgMADIgJABIgJgBg");
	this.shape_16.setTransform(53.1,15.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgFCBQgGgDgFgFQgJgKAAgOQAAgOAJgJQAKgKANAAQAOAAAJAKQAKAJAAAOQAAAOgKAKQgJAKgOAAQgHAAgFgCgAgIAmQgGgMgDgTIgEggIgCgdQAAgSgEgLQgEgLgEgCIgGgFQgDgCABgDQADgIAMgIQAMgIAOAAQAKAAAIADQAJAEAGAIQAHAGADAKQADAJAAAMQAAAYgDAdQgHAjgHAQQgJAYgMAAQgIAAgGgMg");
	this.shape_17.setTransform(169.1,37.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("ABVB6QgJgEgHgHQgHgHgEgJQgEgKAAgLIAAjEIACgCIBJAAIABABIAAABIABCoQAAASADAMQAEAMAEACIAHAGQADACgBADQgDAIgOAIQgPAIgOAAQgLAAgJgDgAhhB0QgUgJgLgOQgLgPgFgQQgFgQAAgRIgBiXIACgCIBJAAIABABIAAABIAABNQAPgCANAAQANABAMACQAMACAJAFQAJAEAIAGQAOAMAIAPQAEAJACAIQACAJAAAJQAAAVgHAQQgGARgNAMQgNALgRAHQgTAGgXAAQgaAAgUgJgAhKgFIAAA2QAAAOAGALQAHAKAMAAQAFAAAFgEQAEgDADgGQAHgNAAgQQAAgbgNgNQgKgJgPAAIgLACg");
	this.shape_18.setTransform(149.9,38.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgrB7QgQgGgMgKQgLgKgHgOQgHgNgDgNQgDgNAAgOIAAgBIAAAAIAAgBIAAAAIAAAAIAAgBIAAAAIAAgBIAAAAIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAAAIAAgBIAAAAIAAgBIAAAAIAAAAIAAgBIAAAAIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAAAIAAgBIAAAAIAAAAIAAgBIAAAAIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAAAIAAgBIAAAAIAAgBIAAAAIAAAAIAAAAIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAAAIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAAAIAAgBIAAAAIAAAAIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAAAIAAgBIAAAAIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAAAIAAgBIAAAAIAAAAIAAgBIAAAAIAAgBIAAAAIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAAAIAAgBIAAAAIAAgBIAAAAIAAgBIAAAAIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAAAIAAgBIAAAAIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAAAIAAgCIAAgBIAAAAIAAgBIAAAAIAAgBIAAAAIAAAAIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAAAIAAgCIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAAAIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAAAIAAAAIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAAAIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgDQAAgBAAAAQAAgBAAAAQABAAAAAAQAAAAABAAQASgGAXgCQAWgDAcAAQAQAAARADQAPADAPAGQAPAHAJAMQAIANAAARQAAARgJAPQgJAOgLAEQAAAAAAAAQAAABAAAAQAAAAAAAAQAAABABAAQAVAHAMARQAMASAAASQAAAWgJAQQgEAJgHAHQgFAGgIAEQgPALgTAEQgSAFgVAAQgcgCgMgEgAgbAKIAAAtQABAhAbAAQAHAAAFgDQAGgCADgEQAIgLAAgQQAAgXgRgLQgNgJgPAAIgMABgAgbhaIAABAQALAAAIgCQAIgDAFgFQALgKAAgQQAAgUgPgGQgHgEgJAAQgGAAgGACg");
	this.shape_19.setTransform(123.3,37.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgYAuQAAgEAGgFIAKgKQADgFgBgCQgBgDgDgBQgKgEgGgJQgGgHAAgLQAAgOAKgJQAEgFAGgDQAGgCAGAAQAOAAAKAKQAJAKAAAPQAAAYgNAPIgOANQgGAGgGACQgIACgFAAQgFAAAAgDg");
	this.shape_20.setTransform(99.7,48.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgZB0QgIgHgDgLQgEgKAAgPIABiJQghgBgbAFIgCAAIgBgBIAAAAIgBgFIgCgKIABgPQABgHAGgIQAGgIAKgGQAPgHARgBQARgBAmAEQAnAEAiAAIAWAAQAAAAABAAQAAAAABAAQAAAAAAAAQABABAAAAIABAGIABAMQAAAIgCAIQgBAHgHAIQgHAHgLAEQgHACgLAAIgTgBIgIgBIABBzQABARAEAKQAEALAEACIAHAEQABABAAAAQABABAAAAQAAABAAAAQAAABAAABQgDAJgOAIQgPAJgOAAQgVAAgOgOg");
	this.shape_21.setTransform(85.1,37.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgjB3QgQgHgLgOQgXgbAAgmIAAicQAAAAAAAAQABgBAAAAQAAAAAAAAQABAAAAAAICiAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAAAIABAFIABAKQAAAIgCAHQgBAGgHAIQgHAIgLAEQgKAFgRAAQgQAAgLgCIgKgCIAAASIAAAbIA3AAIACABIAAABIAAAgQAAABAAAAQAAABgBAAQAAAAAAAAQgBABAAAAIg4AAIAAAYQABAPAJAJQALAHAOACQAOAAAPgDQAOgEAKgGQAFgDACACQACACgBAHQgBAHgGAJQgGAKgKAJQgKAJgQAHQgRAGgTABQgUAAgQgHg");
	this.shape_22.setTransform(65.5,38.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AApB+IgCgBIAAAAIABhiIg7AAIABBiIgCABIhGAAIgBgBIAAAAIAAi5QgBgOgEgIQgEgJgEgCIgGgDQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAgBAAAAQADgJAOgIQAOgIAPAAQAUAAAOANQAOAOAAAbIAAAXIAAAbIA6AAIgBhdIACgBIBHAAIABABIAAAAIAADvIgCABg");
	this.shape_23.setTransform(43.5,37.3);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},69).to({state:[]},1).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},284).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},69).to({state:[]},1).wait(95));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(101.1,35.6,6,6);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(121.2,198.5,1,1,0,0,0,103.2,40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(138,358.5,206.3,80);
// library properties:
lib.properties = {
	width: 240,
	height: 400,
	fps: 24,
	color: "#0153A5",
	opacity: 1.00,
	manifest: [
		{src:"images/hoh.png?1491832334233", id:"hoh"},
		{src:"images/logo.png?1491832334233", id:"logo"},
		{src:"images/P2.jpg?1491832334233", id:"P2"},
		{src:"images/P3.jpg?1491832334233", id:"P3"},
		{src:"images/P4.jpg?1491832334233", id:"P4"},
		{src:"images/povar.png?1491832334233", id:"povar"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;