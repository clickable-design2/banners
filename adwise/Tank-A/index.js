(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,940,640);


(lib.bulet = function() {
	this.initialize(img.bulet);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,157,90);


(lib.mousehi = function() {
	this.initialize(img.mousehi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,89);


(lib.pricel = function() {
	this.initialize(img.pricel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,252,248);


(lib.sky = function() {
	this.initialize(img.sky);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,940,640);


(lib.tank_03 = function() {
	this.initialize(img.tank_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,307,251);


(lib.tank_05 = function() {
	this.initialize(img.tank_05);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,265);


(lib.tank_10 = function() {
	this.initialize(img.tank_10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,137,71);


(lib.tank_13 = function() {
	this.initialize(img.tank_13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,123,71);


(lib.tank_18 = function() {
	this.initialize(img.tank_18);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,82,76);


(lib.tank_22 = function() {
	this.initialize(img.tank_22);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,66,50);// helper functions:

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


(lib.Символ60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,255,0,0.8)").s().p("ADYDrIjQgQQjhgRhugQIh9gUQhIgKg1gBQgRAAgJgCQgOgDgHgJQgKgOAIgXQACgHAHgKIAJgSQAFgMAEgTIAHghQAJgqAhhGQAMgcAOgJQAOgIAdACIGSAbQCYAKBMAJQAhADAPAAQAbgBATgKQAOgHAYgUQARgLAtgRQApgPATgPQgHgLAIgNQAIgNANgCQAVgDAdAUQA+AqAoA2QAsA9AIBBQAEAigLASQgGALgNALIgYAQQgUAOg1AwQgsAogfAQQgsAWg8AEIgdABQghAAgxgDg");
	this.shape.setTransform(63.1,23.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ60, new cjs.Rectangle(0,0,126.1,47.6), null);


(lib.Символ59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,255,0,0.8)").s().p("ABzEUIg2gHQhEgJiBABQiIAAg+gHQgogEgPgQQgTgTAIgkQACgMAHgQIAKgcQAEgPAFgiQAFgfAGgQQAJgYAcgoQAcgpAIgYQAJgfAGgPQARgrApgUIAWgIIAVgJQAJgFAQgMQARgNAJgFQAWgMAjgCIA9gBIAhgBQATABANAIQAKAFARANQALAGAYAIQAVAJAhAZQAxAmAVAaQATAXAYAtIApBLIAWAqQALAZAGATQAJAgACAFIAQAbQAJAQgGAMQgEAKgPAGIgbAHQgTAEgXASIgnAdQgpAZhAgBQgWAAgggDg");
	this.shape.setTransform(40.3,28);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ59, new cjs.Rectangle(0,0,80.7,55.9), null);


(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,255,0,0.8)").s().p("ADhCNQg1gChKgHIh/gLQiBgNiAgWQgZgDgPgIQgNgIgSgXIgqg1QgYgdgJgUQgOgdAEgaQACgKAGgIQAHgJAKgBQAFAAAHADIANAFQAMAEATgBIAfAAQAOAAASAGIAfAKQAhAKA9AIQEjAnEbAEQAdAAAIAMQAIALgEAVQgMA1g9A3QgWAUgSAJQgVAKgdADIgXABIgfgBg");
	this.shape.setTransform(44.4,14.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ51, new cjs.Rectangle(0,0,88.8,28.4), null);


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVAwIgLgBIgHgCQgBAAAAgBQgBAAAAAAQgBAAAAgBQAAAAAAAAIAAgLIAAgNIAAgPIAAgOIAAgOIAAgMIABgIIAAgDIAEAAIAGgBIAHAAIAJAAIAGAAIAFAAIAEACIAAABIAAALIARADQAHADAGADQAGAFADAHIADAHIABAIIgBAJIgDAKQgEAIgHAHIgHAFIgJAFQgFACgFAAIgKABgAAAAcIADAAQAFAAADgCQAEgCAAgGIgBgFIgDgEQgCgCgDAAIgGgCg");
	this.shape.setTransform(102.9,8.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAgAwIgGAAIgPAAIgRAAIgUgBIgRAAIgNgBIgFAAIgBgaIAAgSIAAgFIAAgKIAAgLIABgMIABgHIABgEIAHAAIAHAAIAJAAIAHABQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIAAAEIAAAJIABAMIAAAQIAAARIAAARIANAAIgCgjIAAglQAAgBAAgBQAAAAABgBQAAAAABAAQAAAAABgBIAJAAIAKAAIAKABIABABIABABIAAADIAAADIgBAHIAAAJIAAAPIgBATIAAARIAHAAIAEAAIAAgKIABgNIAAgMIABgPIAAgNIABgLIACgCIAFAAIAOAAIAHAAIAEABIAAABIABAiIAAAXIAAAPIAAAIIAAADIAAABIgBAFIAAACIgCABIgLAAIgJAAg");
	this.shape_1.setTransform(91.2,8.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AA7AxIgGAAIgKAAIgKgBIgCgBIgBgDIgCgqIgBgsIAAgCIADgBIAFAAIAIAAIAMAAIAMABIABABIABABIAAACIAAAEIgBAHIAAAKIAAAOIgBAUIAAATIAAANQAAAAgBABQAAAAAAAAQAAABAAAAQAAAAAAAAIgCAAgAgvAwIgKgBIgIgCQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBIAAgKIAAgNIAAgPIAAgOIAAgOIAAgMIABgIIAAgDIADAAIAHgBIAHAAIAJAAIAFAAIAGAAIADABIABABIAAAMIARADQAIACAFAEQAFAFAEAHIACAHIABAIIgBAJIgCAKQgEAIgHAHIgGAFIgJAEQgFACgFABIgMABgAgZAcIAEAAQAEAAAEgCQADgDAAgFIgBgFIgCgEQgCgCgEgBIgGgBg");
	this.shape_2.setTransform(76.8,8.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAbAwIgHAAIgFgBIgDAAIgCgCIgBgCIAAgNIABgKIgFANIgGANIAAABIgBABIgBAAIgDAAIgDAAIgCgCIgIgNIgGgPIAAAIIAAANIAAAGIgBACIgEABIgKAAIgDgBIgBgCIAAgbIgBgaIAAgSIABgTIABgBIACAAIAEgBIADAAIAEAAIAHABIACABIACABIAIAPIAJAPIAIgOIAIgQQAAAAAAgBQAAAAABAAQAAAAAAAAQABgBAAAAIAIgBIAHAAIALABQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAAAIAAARIABARIgBAbIgBAcQAAABAAABQAAAAAAAAQAAABgBAAQAAAAAAAAIgEABg");
	this.shape_3.setTransform(64.4,8.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AASAvIgDAAIgBgCIAAgBIAAgGIAAgFIABgIIAAgJIgKANIgHANIgDADIgDACIgFABIgJAAIgGAAIgDgBIgCAAIgBAAIgBgCIAAgEIgBgKIAAgWIAAgRIABgQIAAgLIAAgGIAAgDIAAgBIABgBIABAAIAEAAIAHAAIAEAAIADAAIABAAIABAAIABABIAAADIgBAOIAAAOIAFgHIAFgIIAGgIIAGgIIADgBIAFgBIAGABIAJAAIAEABIABADIAAAPIgBARIAAAPIAAAOIAAAMIAAAHIAAAGIgBACIgBABIgCAAIgDAAIgFABg");
	this.shape_4.setTransform(51.3,8.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAlA9IgJAAIgEgBIgCgBIAAgGIgBgRIgoAAIgBALIgCANIgDAAIgFAAIgNAAIgIAAIgDAAIAAAAIgCgZIgBgKIAAgGIACgBIAEAAIAGgBIAHAAQADgCABgFIABgMIAAgSIAAgPIgBgLIAAgLIABgCIACgBIATAAIAUAAIAXAAIAMAAIAKABIACABIAAABIgBAlIgBAmIAFAAIAAAKIAAAIIgBAIIgBAHIgCAKIgBAAgAASARIgBgSIgBgUIgDAAIgDAAIgDAAIgEAAQAAAPgCAIQgBAKgCAFIAJAAIALAAg");
	this.shape_5.setTransform(41,9.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAAAvIgNAAIgIAAIgEgBIgBgCIgCgOIgBgRIgBgSIgCgQIAAgOIAAgHIACgCIAGgBIAPgBIAVAAIAUAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAABAAAAIAAAPIgBANIgCAJIgCADIgGgBIgQAAIAAAFIAAAEIALgBIAJAAIADAAIAAACIgBAFIgBAHQgBABgMAAIgEAAIgEAAIgBAFIAAAFIALABIAFAAIAGgBQABAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAIAAAJIgBAHIAAABIgFAAIgJABg");
	this.shape_6.setTransform(31.6,8.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgNAyIgNgBQgEAAgBgCIgCgFIAAgTIgCgWIgCgUIgBgSIAAgFIABgCQAEgDAGgBIASgBQAIAAAHACQAHABAIAEIAIAGQADAEACAEQAFAJAAAMQgBAKgCAFQgDAGgHAFQAFABADAEQAEADAAAGQAAAGgEADQgCAEgEABIgKACIgKAAIgJABgAgBAgIAAADIABADIAAAAIACAAIADAAIADgBIADgDIABgDQAAgBgBAAQAAgBAAgBQAAAAAAAAQgBgBAAAAIgEgCIgDgBIgDAAgAAAgBIAAAJIAAAKIABAAIAEAAIAEgCIADgDIABgFQAAgEgCgEQgCgCgFAAIgCAAg");
	this.shape_7.setTransform(23.4,8.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAZAwIgPgBIgCAAIAAgCIgBgJIgEADIgDABIgCgBIgCgEIgBAIIgBACIgBABIgFABIgJAAIgPgBQgFAAAAgBIABgCIALgsIANgrIABgCIACgBIAFAAIAIAAIALAAIAHABIAEAAIABACIAKAtIAJAuIAAAAIgBABgAgBAJIgDANIAFgDIACgBIACAAIADAEIgDgNIgDgNg");
	this.shape_8.setTransform(14.9,8.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAhAwIgIAAIgJAAIgIgBQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBIAAgBIAAgDIgBgGIAAgFIAAgFIAAgCIgGAGIgBABIgBgBIgBgDIgBgCIgBgBIgBAKIgBAMQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAIgGABIgOAAIgIgBIgDgBIAAgBIgDg0IgBgVIAAgOIACgCIAEAAIAFgBIAFAAIACAAIAFAAIAEAAIAEAAIAFAAIAFAAIABABIAAANIgBANIAAAOIgBAMIAEgDIABgBIABABIAEAFIAAg2IABgBIAEgBIAFAAIAEAAIAFAAIAJAAIAHABQABAAABABQAAAAABAAQAAAAAAAAQAAAAAAAAIAAAWIAAARIgBAPIAAASIgDAUIgBABg");
	this.shape_9.setTransform(5.6,8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ49, new cjs.Rectangle(0,0,108,17.5), null);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mousehi();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.349,0.349);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ47, new cjs.Rectangle(0,0,20.6,31.1), null);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVBUIgKgUIgCgJQAAgDAEgCIAhgRIADgCIACAAQACAAAEAFIALAWIADAHQAAAAAAABQgBAAAAABQAAAAgBABQAAAAgBAAIgDADIgkARIgDABQgCAAgDgFgAgdAcQgBAAAAgBQAAAAgBAAQAAAAAAgBQAAAAAAAAIgEhvQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBIBDAAQAAAAABABQAAAAAAAAQAAAAABABQAAAAAAAAIgFBwQAAAAAAAAQAAABgBAAQAAAAAAAAQgBABAAAAg");
	this.shape.setTransform(3.6,8.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ43, new cjs.Rectangle(0,0,7.2,17.7), null);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag3BSQgCgEAAgGIgKiIIABgJIACgEQAGgEALgCQANgBATgBQAOABAMACQANADALAGQAIAFAGAGQAGAGAEAIQAIAPABAVQgCARgEAIQgEAMgNAHQAJADAFAGQAGAGAAAKQAAALgFAFQgGAGgHADQgHACgJABIhNABQgHgBgCgDgAgBBCIACAAIADAAIAEAAIAFgCIAFgFQACgDAAgDQAAgEgDgCQgCgDgDgBIgIgCIgFAAgAADgEIgDABIgBAjIADAAIAGgBIAHgDQADgCADgDQACgEAAgFQgBgIgDgFQgFgFgIAAg");
	this.shape.setTransform(6.8,8.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ42, new cjs.Rectangle(0,0,13.5,17.1), null);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgOBTQgHgCgGgDQgOgGgJgMQgJgLgFgRQgDgIgBgJIgBgSQAAgMAFgVQACgHAEgGIAIgMQAJgLANgFQAHgEAHgBQAIgBAHgBQAJABAHABQAHABAHAEQANAGAIALQAJAKAFAOQAEAUAAALQAAAQgEAQQgFARgIANQgFAGgFAFIgMAJQgHAEgHACQgIABgIABQgHgBgIgBgAgLgCQgEAEAAAMQAAAOAEAIQAFAJAGAAQAGAAAFgJQAEgJAAgNQAAgMgEgEQgDgEgIAAQgIAAgDAEg");
	this.shape.setTransform(7,8.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ41, new cjs.Rectangle(0,0,14.1,16.9), null);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgpBPIgEgBIgDgMIgGheIADgwQAAgBAGgBIAwgDQAaAAAMABQALACABACIABA+QAAABAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAIgjgBIAABdQAAABAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAg");
	this.shape.setTransform(5.5,8.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ40, new cjs.Rectangle(0,0,10.9,16.5), null);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AARBRIgCgBIgDgTIgHAGIgFACQgDAAgCgDIgDgGIgBAOIgCADIgDACIgxABQgJgBAAgCIAUhOQAKgnANgmIACgCIAEgBIAIAAIAuABIAGABIACACIAhCdIAAABQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAgAgIAmIAIgHIAFgBIADABIAGAGIgLgsg");
	this.shape.setTransform(7.3,8.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ39, new cjs.Rectangle(0,0,14.5,16.5), null);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag6BUQgBAAgCgJIgMiSQABgDAEgCIANgEIAngDQALAAAJACQAIABAJADQAQAGANAKQALAMAHAPQADAHABAIQABAJAAAJIgBANQgBAHgDAGQgGAMgKAHQgKAIgOADQgOAEgOACIAAATQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAgBAAIgGACgAAAgBIAAAlQAMAAAGgHQAEgCACgFQABgEAAgEQABgKgHgDQgGgDgGgBg");
	this.shape.setTransform(7.4,8.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ38, new cjs.Rectangle(0,0,14.7,16.8), null);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag3BSQgCgEAAgGIgKiIIABgJIACgEQAGgEALgCQANgBATgBQAOABAMACQANADALAGQAIAFAGAGQAGAGAEAIQAIAPABAVQgCARgEAIQgEAMgNAHQAJADAFAGQAGAGAAAKQAAALgFAFQgGAGgHADQgHACgJABIhNABQgHgBgCgDgAgBBCIACAAIADAAIAEAAIAFgCIAFgFQACgDAAgDQAAgEgDgCQgCgDgDgBIgIgCIgFAAgAADgEIgDABIgBAjIADAAIAGgBIAHgDQADgCADgDQACgEAAgFQgBgIgDgFQgFgFgIAAg");
	this.shape.setTransform(6.8,8.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ37, new cjs.Rectangle(0,0,13.5,17.1), null);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag3BRIgNgEQgEgCgBgCIABiWIABgFIA/gBIAGABQABAAAAABQABAAAAAAQAAAAAAABQAAAAAAABIAAATQAPABANAFQAOADAKAIQAKAIAGALQADAGABAGIABAOQAAAJgBAIQgBAJgDAIQgHAOgLALQgHAGgHAEQgGAEgJADQgJADgIABQgJACgLAAgAAAAvIAHABQAGABAGgFQAHgEgBgKQAAgEgBgEQgCgEgEgDIgIgFQgEgCgGABg");
	this.shape.setTransform(7.4,8.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ36, new cjs.Rectangle(0,0,14.7,16.8), null);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAxBWQAAAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAAAIgVg3IAAAuQAAABAAABQAAAAAAABQgBAAAAAAQAAABgBAAIgCAAIgugBIgEgCIgBgFIgCgoIgTA0IgCABIgggCIgOgCQgGgCAAgDQAGgWAJgTIARglIgUghIgOgnIgBgEQAAgCAGgBIAtgEQABAAAAAAQAAAAABABQAAAAAAAAQAAAAAAABIAVA8IgBg2IABgDQAAAAAAgBQAAAAABAAQAAAAABAAQABgBAAAAIAJgBIAvACIADABIAAACIgBA9IAYhBQAAgBAAAAQAAAAABAAQAAgBAAAAQABAAAAAAIAqADIAJACQABAAAAAAQABAAAAABQABAAAAAAQAAAAAAABIgBAEIgPAnIgWAgIASAmQAJATAHAWQAAADgHACIggAEg");
	this.shape.setTransform(10.8,8.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ35, new cjs.Rectangle(0,0,21.6,17.2), null);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgOBTQgHgCgGgDQgOgGgJgMQgJgLgFgRQgDgIgBgJIgBgSQAAgMAFgVQACgHAEgGIAIgMQAJgLANgFQAHgEAHgBQAIgBAHgBQAJABAHABQAHABAHAEQANAGAIALQAJAKAFAOQAEAUAAALQAAAQgEAQQgFARgIANQgFAGgFAFIgMAJQgHAEgHACQgIABgIABQgHgBgIgBgAgLgCQgEAEAAAMQAAAOAEAIQAFAJAGAAQAGAAAFgJQAEgJAAgNQAAgMgEgEQgDgEgIAAQgIAAgDAEg");
	this.shape.setTransform(7,8.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ34, new cjs.Rectangle(0,0,14.1,16.9), null);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVBSIgCgBIgBgFIgGhVIgegBQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBIAAhEQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAABAAIAqAAQAnAAAoACQABAAAAAAQAAABABAAQAAAAAAAAQAAABAAAAIAABDQAAAAAAABQAAAAAAAAQgBAAAAABQAAAAgBAAIgeAAIgIBZQAAADgRAAg");
	this.shape.setTransform(6.3,8.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ33, new cjs.Rectangle(0,0,12.7,16.7), null);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AADBRQgBAAgBAAQAAgBgBAAQAAAAAAAAQAAgBgBAAIAAgFIgDg1QgLACgJAAQgLAAgHgDQgHgDgFgGQgDgFgDgHIgDgNIgBhAIABgBIAKgCIAZABQABAAABAAQAAAAABABQAAAAAAAAQAAABAAABIgBA3IACADIADADIAFABQAFAAACgCIABgFIgBg2QAAgEAGAAIBAABIACABIABAEIgCBKIgBAkIAAAoIgBAEIgBACIgDAAg");
	this.shape.setTransform(6.5,8.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ32, new cjs.Rectangle(0,0,12.9,16.4), null);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag3BSIgEgCIgCgCIgBgHIAAiTIABgDIABgBIADgBIAagBIAEABIADAAIABAAIABACIgBA2IASgbIAVgaIAEgDIAJgBIAaABIAGACQACACAAAEIgBCTQAAAFgCAAIgCACIgIABIgTAAIgFgCIgCgCIAAgEIACgvIgkAzQgCACgDABIgIABIgaAAg");
	this.shape.setTransform(6.3,8.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ31, new cjs.Rectangle(0,0,12.6,16.5), null);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAqBSIgPgBIgOAAQAAAAAAgBQAAAAgBAAQAAAAAAgBQAAAAAAgBIAAgCIgDglIgJAKIgDACIgBgCIgCgDIgDgHIgDAmQAAABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAIgwAAIgFgBIgBgCIgGiXQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAAAIAHgCIA1AAIAGAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAABIgDBZIAHgHIADgBIACACIAFAJIAAhcQAAgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAIAHgBIAzACQAHAAAAACIgBBCIgBAbIgGBBQAAAAAAAAQAAAAAAABQgBAAAAAAQgBAAAAAAg");
	this.shape.setTransform(7.7,8.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ30, new cjs.Rectangle(0,0,15.3,16.4), null);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVBTIgogEQgBAAAAAAQgBgBAAAAQgBAAAAAAQAAgBAAAAQAHgVAIgTQAJgTAKgSQgLgRgKgSIgSgmIgBgEQABAAAAgBQAAAAAAgBQABAAAAgBQABAAABAAIA0gCQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAIAHAUIAHAUIAQgoQAAAAAAAAQAAAAAAgBQABAAAAAAQABAAAAAAIAsABIAGABIABACIAAACQgPAggIAQIgsBMQgIAQgGARQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAAAg");
	this.shape.setTransform(7.1,8.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ29, new cjs.Rectangle(0,0,14.1,16.7), null);


(lib.Символ27копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#366171").s().p("ABFA6IgGAAIgNgBIgLAAIgCgBIgBgEIgDgyQgBgZgBgbIABgCIADgBIAHAAIAJAAIAOAAIANABIADAAIAAACIAAADIAAAEIAAAIIgBAMIAAARIgBAXIgBAXIAAAPQAAABAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAIgCABgAg3A5IgNgCIgJgCQAAAAgBgBQAAAAgBgBQAAAAAAgBQAAAAAAAAIAAgNIAAgPIAAgRIgBgRIABgRIAAgOIAAgKIABgDIAEAAIAHAAIAJgBIAKAAIAHAAIAGABIAEABIABABIAAANQALABAKADQAIADAGAFQAHAFAFAIIADAIIAAAJIAAANQgCAFgCAFQgEALgIAHIgIAGIgLAGIgMACIgOABgAgeAhIAGAAQAEAAAFgDQADgDAAgGIgBgGIgDgFQgCgCgEgBIgIgBg");
	this.shape.setTransform(77.2,10);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#366171").s().p("AAsBIIgLgBIgFAAIgBgBIgBgHIAAgVIgxAAIgBAOIgCAOIgDABIgGAAIgQAAIgJAAIgDAAIgBgBIgDgdIAAgLIgBgIIACAAIAFgBIAIAAIAJAAQACgDACgGQABgHAAgHIAAgWIAAgRIgBgOIAAgMIAAgCIADgBIAXAAIAXgBIAcAAIANABIANABIABAAIABACIgBAsIgBAsIAFABIAAALIAAAJIAAAJIgCAKIgCAKIgBABgAAVAVIgBgWIAAgXIgEAAIgFAAIgDAAIgEAAQgBAQgCALQgBALgCAGIALAAIAMABg");
	this.shape_1.setTransform(61.5,11.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#366171").s().p("AgTA9IgNgEIgMgFIgBgBIAAgCIAAgBIAKgMIAJgLQgLgEgGgKQgGgKAAgOIABgJIADgJQAFgIAIgGIAJgHIALgEIAMgDIAOgBIAOAAIAMACIAIADQAAAAABAAQAAABABAAQAAAAAAABQAAAAAAAAIAAAFIAAAGIAAAIIgBAHIgBAkIAAAaIgCAOQgBAEgBABIgGAAIgHAAIgIAAIgKAAIgJgBQgBAAAAAAQgBgBAAAAQgBAAAAAAQAAgBAAAAIAAgLQgKAJgFALQgBAAAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAgAgMgCQgEACAAAEIABAHIAEAFQAFAEAHABIAAgaIgEAAQgFAAgEADg");
	this.shape_2.setTransform(49,10.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#366171").s().p("AgRA6IgKAAIgGAAIgDAAIgDAAIgCgHIgDgQIgBgVIgCgXIgCgXIgBgRQAAAAABAAQAAgBAAAAQABgBAAAAQABAAABgBIAJgCIAMgCIAPgBIAMABIANADQALAFAIAHQAIAHAEALQACAFACAFIABAMIgBAJIgEAJQgDAIgIAFQgHAFgJADQgJADgKAAIAAAOIgBACIgEAAIgGABgAAAgBIAAAaQAIAAAEgFIAFgFIAAgGQABgGgEgDQgFgCgEAAg");
	this.shape_3.setTransform(37.9,9.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#366171").s().p("AAdA4IgSAAIgBgBIAAgCIgCgLIgFAEIgDABQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAAAIgCgFIgCAKIAAACIgCABIgGABIgKAAIgSAAQgGgBAAgBIAAgBIAOg0IAPg1IACgBIACgBIAGAAIAKAAIAMAAIAJABIAFAAIABACIALA1IALA2IAAABQAAAAAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAgAgBAKIgEAQIAFgFIADgBIACABIAEAFIgDgQIgEgPg");
	this.shape_4.setTransform(27.3,10.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#366171").s().p("AAmA4IgJAAIgKAAIgJgBQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAgCIgBgEIAAgGIAAgHIgBgFIAAgDIgGAHIgCABIgBgBIgBgCIgBgDIgBgCIAAAMIgBAOQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgGABIgRAAIgJgBIgEAAIgBgBIgCg+IgBgaIAAgQQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAIAGAAIAFgBIAGAAIADAAIAGAAIAEAAIAFAAIAGAAIAEAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAIAAAOIgBARIAAAQIgBAOIAFgEIACgBIABABIADAGIAAg/QAAAAABAAQAAAAAAgBQAAAAABAAQAAAAABAAIAEgBIAGAAIAFAAIAGAAIAJAAIAJABQABAAABAAQABAAAAAAQABABAAAAQAAAAAAAAIAAAZIAAAVIgBASIgBAVIgCAXQAAAAgBABQAAAAAAAAQAAAAAAAAQgBAAAAAAg");
	this.shape_5.setTransform(16.3,10);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#366171").s().p("AgFA3QgLgEgIgGQgIgHgGgLQgFgMAAgPIABgLIAEgLQAEgKAHgIQAIgIALgEQAFgDAFgBIAMgBIAJAAIAHABIAFABIAEABIACAFIABAKIABAOIABAPQAAABAAAAQAAAAgBAAQAAABAAAAQAAAAgBAAIgEgBIgKgBQgFAAgFACQgEACgEADQgDADgBAEQgCAEAAAFQAAAFACAEQABAEADAEQADADAFACQAEACAGAAIAEgBIADAAIACgBIABAAIACAAIAAADIAAAEIAAAJIgCADIgGACIgHABIgJABQgPgBgGgCg");
	this.shape_6.setTransform(5.5,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ27копия, new cjs.Rectangle(0,0,86.5,20.7), null);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#366171").s().p("AAcA4IgGAAIgEAAIgBgCIAAgDIAAgGIAAgHIABgJIAAgKIgMAQIgJAOIgDAEQAAAAgBABQAAAAgBABQAAAAgBAAQAAAAgBABIgFAAIgLAAIgHAAIgEAAIgCAAIgBAAIgBgCIgBgGIAAgLIAAgaIAAgUIAAgTIAAgNIAAgHIAAgEIABgBIAAgBIACgBIAFAAIAIAAIAFAAIADAAIACAAIABABIAAABIAAADIAAAQIAAASIAFgJIAHgKIAGgJIAIgJIADgCIAGAAIAHAAIALAAIAEACQABAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABIAAASIAAAUIAAASIAAARIAAAOIAAAJIAAAFIgCAEIgBABIgCAAIgEAAg");
	this.shape.setTransform(71.7,11.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#366171").s().p("AAFA4IgIAAIgJAAIgJgBIgHgBIgCgBIgDgIIgCgRIgBgXIAAgYIAAgSIABgPQAAAAABAAQAAAAABgBQAAAAABAAQABAAABAAIAKgBIAMgBIAKAAIAZABQAJABAAABIAAAIIABANIAAANIAAAJQAAAAAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAIgFAAIgNgBIgCAAIgDAAIgBAkIABAcQAAAAgBAAQAAABAAAAQAAAAAAAAQgBAAAAAAg");
	this.shape_1.setTransform(62.7,11.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#366171").s().p("AAdA5IgSgBIgBgBIAAgDIgCgKIgFAEIgDACQgBAAAAgBQgBAAAAAAQAAAAAAgBQgBAAAAgBIgCgDIgCAJIgBACIgBABIgGABIgKAAIgSgBQgGAAAAgBIAAgCIAOg0IAPg0IACgBIACgBIAGAAIAKgBIAMABIAJAAIAFABIABABIALA2IALA2IAAABQAAAAAAAAQAAAAAAAAQAAAAAAAAQgBABAAAAgAgBAKIgEAQIAFgEIADgBIADABIADADIgDgPIgEgOg");
	this.shape_2.setTransform(53.5,11.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#366171").s().p("AgSA6IgJAAIgFAAIgFAAIgCAAIgCgHIgDgQIgCgVIgBgXIgCgXIAAgRQAAAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBIAJgCIANgCIAOgBIANABIANADQALAFAIAHQAIAHAEALQADAFABAFIABAMIgBAJIgEAJQgDAIgIAFQgGAFgKADQgJADgKAAIAAAOIgBACIgEAAIgGABgAAAgBIAAAaQAIAAAFgFIADgFIABgGQAAgGgDgDQgFgCgEAAg");
	this.shape_3.setTransform(43,11.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#366171").s().p("AgfA6QgFAAgBgCQgCgDAAgEIgBgXIgBgZIgCgYIgCgVIAAgGIACgDQAEgDAIgBIAVgBQAJAAAIACQAJACAIAEQAFADAEAFQAEAEADAFQAGAKAAAPQgBALgCAGQgEAIgIAFQAGACAEAEQAEAEAAAHQAAAHgEAEQgEAEgFABIgLADIgLAAIgMAAIgNABgAgBAlIAAAEIABAEIAAAAIACAAIAEgBIADgBIADgDIABgEQAAgDgBgCIgEgCIgFgBIgDAAgAAAgCIAAALIAAAMIABABIAFgBIAEgCIAEgEQABgCAAgEQAAgFgCgEQgDgDgGAAIgCAAg");
	this.shape_4.setTransform(32.4,11.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AAdBhQgEAAgBgEIgDgJIgBgOIAAgSIgUABIgRABIgRABIgUAAQgEAAgCgGIgDgPIgDgXIgDgbIgDgcIgCgZIgBgSQAAgBABAAQAAgBAAAAQAAAAAAgBQABAAAAAAIAHgCIAOgBIAZAAIANAAIANABQABAAAAAAQAAAAAAAAQAAAAAAABQABAAAAABIAAALIgBATIgBAXIgBAYIgBAWIgCATIAMAAIAMgCIgBgdIAAgeIAAgdIABgeQABgCAGgBIAZgBIANABIAHAAIAEABIABACIgCAoIgEAyIgDAyIgCAuQAAAAgBAAQAAAAAAABQgBAAAAAAQgBAAgBAAIgJABIgLABg");
	this.shape_5.setTransform(68.9,-11.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#366171").s().p("Ag/B1IgHgBIgEgBIgBgBIAcg4IAdg7IAZg6IAWg0QABgDAEgBIANgBIAGAAIAHAAIAIABIAGABQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAABQAAAEgCAEIgUAnIgUApIgUAnIgSAlIgQAeIgNAWIgEAHIgEADIgEACIgFAAg");
	this.shape_6.setTransform(52.4,-11.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#366171").s().p("AgQBiQgJgCgHgEQgQgHgLgOQgKgOgGgTQgDgKgCgLIgBgVQAAgOAFgYIAHgQQAEgHAGgHQALgMAPgHQAIgEAJgBQAIgCAJAAQAKAAAJACQAJABAHAEQAQAHAKANQAKANAFAQQAFAXAAANQAAATgFATQgFATgKAPQgFAIgHAGQgGAGgIAEQgHAFgJACQgJACgKAAQgJAAgIgBgAgOgCQgEAFAAAOQAAAQAFAKQAGAKAHAAQAIAAAFgLQAFgKAAgPQAAgOgEgFQgFgFgIAAQgLAAgEAFg");
	this.shape_7.setTransform(35.6,-11.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ27, new cjs.Rectangle(25.9,-28.5,52.4,50.6), null);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bulet();
	this.instance.parent = this;
	this.instance.setTransform(64.3,0,0.181,0.181,90);

	this.instance_1 = new lib.bulet();
	this.instance_1.parent = this;
	this.instance_1.setTransform(46.3,0,0.181,0.181,90);

	this.instance_2 = new lib.bulet();
	this.instance_2.parent = this;
	this.instance_2.setTransform(28.3,0,0.181,0.181,90);

	this.instance_3 = new lib.bulet();
	this.instance_3.parent = this;
	this.instance_3.setTransform(10.3,0,0.181,0.181,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ26, new cjs.Rectangle(-6,0,70.3,28.4), null);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sky();
	this.instance.parent = this;
	this.instance.setTransform(0,538.1,0.841,0.841,0,180,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ24, new cjs.Rectangle(0,0,790.4,538.1), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pricel();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.403,0.403);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(0,0,101.6,100), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tank_13();
	this.instance.parent = this;
	this.instance.setTransform(79.8,0,0.648,0.648,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(0,0,79.8,46), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tank_05();
	this.instance.parent = this;
	this.instance.setTransform(194.5,0,0.648,0.648,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(0,0,194.5,171.8), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tank_18();
	this.instance.parent = this;
	this.instance.setTransform(53.2,0,0.648,0.648,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(0,0,53.2,49.3), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tank_03();
	this.instance.parent = this;
	this.instance.setTransform(199,0,0.648,0.648,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(0,0,199,162.7), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tank_10();
	this.instance.parent = this;
	this.instance.setTransform(88.8,0,0.648,0.648,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(0,0,88.8,46), null);


(lib.Анимация2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tank_22();
	this.instance.parent = this;
	this.instance.setTransform(21.4,-16.2,0.648,0.648,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.4,-16.2,42.8,32.4);


(lib.Анимация1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tank_22();
	this.instance.parent = this;
	this.instance.setTransform(21.4,-16.2,0.648,0.648,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.4,-16.2,42.8,32.4);


(lib.Символ58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ59();
	this.instance.parent = this;
	this.instance.setTransform(40.3,27.9,1,1,0,0,0,40.3,27.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},4).to({alpha:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80.7,55.9);


(lib.Символ57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ58();
	this.instance.parent = this;
	this.instance.setTransform(40.3,27.9,1,1,0,0,0,40.3,27.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ60();
	this.instance.parent = this;
	this.instance.setTransform(63.1,23.8,1,1,0,0,0,63.1,23.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},4).to({alpha:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,126.1,47.6);


(lib.Символ54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ51();
	this.instance.parent = this;
	this.instance.setTransform(44.4,14.2,1,1,0,0,0,44.4,14.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},4).to({alpha:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,88.8,28.4);


(lib.Символ53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ54();
	this.instance.parent = this;
	this.instance.setTransform(44.4,14.2,1,1,0,0,0,44.4,14.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ53, new cjs.Rectangle(0,0,88.8,28.4), null);


(lib.Символ52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ53();
	this.instance.parent = this;
	this.instance.setTransform(44.4,14.2,1,1,0,0,0,44.4,14.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ47();
	this.instance.parent = this;
	this.instance.setTransform(10.3,15.5,1,1,0,0,0,10.3,15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ50, new cjs.Rectangle(0,0,20.6,31.1), null);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ50();
	this.instance.parent = this;
	this.instance.setTransform(10.3,15.5,1,1,0,0,0,10.3,15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:7.8},0).wait(1).to({x:10.3},0).wait(1).to({x:12.9},0).wait(1).to({x:10.3},0).wait(2).to({x:7.8},0).wait(1).to({x:10.3},0).wait(1).to({x:12.9},0).wait(1).to({x:10.3},0).to({x:36},5,cjs.Ease.get(-1)).to({x:61.6},5,cjs.Ease.get(1)).to({x:36},5,cjs.Ease.get(-1)).to({x:10.3},5,cjs.Ease.get(1)).to({x:-15.3},5,cjs.Ease.get(-1)).to({x:-41},5,cjs.Ease.get(1)).to({x:-15.3},5,cjs.Ease.get(-1)).to({x:10.3},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,20.6,31.1);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ49();
	this.instance.parent = this;
	this.instance.setTransform(10.2,37.3,1,1,0,0,0,54,8.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ48();
	this.instance_1.parent = this;
	this.instance_1.setTransform(10.3,15.5,0.879,0.879,0,0,0,10.3,15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ45, new cjs.Rectangle(-43.8,1.9,108,44.1), null);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 43
	this.instance = new lib.Символ43();
	this.instance.parent = this;
	this.instance.setTransform(226.7,9.5,1,1,0,0,0,3.6,8.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(28).to({x:225.4,y:3},2).to({x:226.7,y:9.5},2).wait(18));

	// Символ 42
	this.instance_1 = new lib.Символ42();
	this.instance_1.parent = this;
	this.instance_1.setTransform(214.9,8.6,1,1,0,0,0,6.8,8.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(26).to({x:213.6,y:2.1},2).to({x:214.9,y:8.6},2).wait(20));

	// Символ 41
	this.instance_2 = new lib.Символ41();
	this.instance_2.parent = this;
	this.instance_2.setTransform(199.6,8.5,1,1,0,0,0,7,8.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24).to({x:198.3,y:2},2).to({x:199.6,y:8.5},2).wait(22));

	// Символ 40
	this.instance_3 = new lib.Символ40();
	this.instance_3.parent = this;
	this.instance_3.setTransform(186.1,8.7,1,1,0,0,0,5.5,8.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(22).to({x:184.8,y:2.2},2).to({x:186.1,y:8.7},2).wait(24));

	// Символ 39
	this.instance_4 = new lib.Символ39();
	this.instance_4.parent = this;
	this.instance_4.setTransform(172.5,8.9,1,1,0,0,0,7.2,8.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(20).to({x:171.2,y:2.4},2).to({x:172.5,y:8.9},2).wait(26));

	// Символ 38
	this.instance_5 = new lib.Символ38();
	this.instance_5.parent = this;
	this.instance_5.setTransform(157.4,8.5,1,1,0,0,0,7.4,8.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(18).to({x:156.1,y:2},2).to({x:157.4,y:8.5},2).wait(28));

	// Символ 37
	this.instance_6 = new lib.Символ37();
	this.instance_6.parent = this;
	this.instance_6.setTransform(141.9,8.6,1,1,0,0,0,6.8,8.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(16).to({x:140.6,y:2.1},2).to({x:141.9,y:8.6},2).wait(30));

	// Символ 36
	this.instance_7 = new lib.Символ36();
	this.instance_7.parent = this;
	this.instance_7.setTransform(120.4,8.5,1,1,0,0,0,7.4,8.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(14).to({x:119.1,y:2},2).to({x:120.4,y:8.5},2).wait(32));

	// Символ 35
	this.instance_8 = new lib.Символ35();
	this.instance_8.parent = this;
	this.instance_8.setTransform(101,9,1,1,0,0,0,10.8,8.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(12).to({x:99.7,y:2.5},2).to({x:101,y:9},2).wait(34));

	// Символ 34
	this.instance_9 = new lib.Символ34();
	this.instance_9.parent = this;
	this.instance_9.setTransform(82,8.5,1,1,0,0,0,7,8.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(10).to({x:80.7,y:2},2).to({x:82,y:8.5},2).wait(36));

	// Символ 33
	this.instance_10 = new lib.Символ33();
	this.instance_10.parent = this;
	this.instance_10.setTransform(67.4,8.6,1,1,0,0,0,6.3,8.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(8).to({x:66.1,y:2.1},2).to({x:67.4,y:8.6},2).wait(38));

	// Символ 32
	this.instance_11 = new lib.Символ32();
	this.instance_11.parent = this;
	this.instance_11.setTransform(53.6,8.8,1,1,0,0,0,6.5,8.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(6).to({x:52.3,y:2.3},2).to({x:53.6,y:8.8},2).wait(40));

	// Символ 31
	this.instance_12 = new lib.Символ31();
	this.instance_12.parent = this;
	this.instance_12.setTransform(38.9,8.8,1,1,0,0,0,6.2,8.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(4).to({x:37.6,y:2.3},2).to({x:38.9,y:8.8},2).wait(42));

	// Символ 30
	this.instance_13 = new lib.Символ30();
	this.instance_13.parent = this;
	this.instance_13.setTransform(23,8.6,1,1,0,0,0,7.7,8.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(2).to({x:21.7,y:2.1},2).to({x:23,y:8.6},2).wait(44));

	// Символ 29
	this.instance_14 = new lib.Символ29();
	this.instance_14.parent = this;
	this.instance_14.setTransform(7,9,1,1,0,0,0,7,8.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({x:5.7,y:2.5},2).to({x:7,y:9},2).wait(46));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,230.2,18.4);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ27();
	this.instance.parent = this;
	this.instance.setTransform(517.9,28.8,1,1,0,0,0,35.6,8.5);

	this.instance_1 = new lib.Символ27копия();
	this.instance_1.parent = this;
	this.instance_1.setTransform(30.8,28.9,0.924,0.924,0,0,0,35.6,8.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ26();
	this.instance_2.parent = this;
	this.instance_2.setTransform(39.7,7.1,1.208,1.208,0,0,0,30.6,14.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ25, new cjs.Rectangle(-4.5,-10.1,565,52.4), null);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ20();
	this.instance.parent = this;
	this.instance.setTransform(50.8,50,1,1,0,0,0,50.8,50);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.88,scaleY:0.88},4,cjs.Ease.get(-1)).to({scaleX:0.74,scaleY:0.74,x:50.9},5,cjs.Ease.get(1)).to({regX:50.9,scaleX:0.87,scaleY:0.87,x:51,y:50.1},5,cjs.Ease.get(-1)).to({regX:50.8,scaleX:1,scaleY:1,x:50.8,y:50},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,101.6,100);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ21();
	this.instance.parent = this;
	this.instance.setTransform(50.8,50,1,1,0,0,0,50.8,50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({rotation:90},8).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,101.6,100);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ4();
	this.instance.parent = this;
	this.instance.setTransform(44.4,23,1,1,0,0,0,44.4,23);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(0,0,88.8,46), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ14();
	this.instance.parent = this;
	this.instance.setTransform(7.9,28.6,1,1,0,0,0,7.9,28.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:10,x:8},14).wait(35).to({rotation:0,x:7.9},15).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,79.8,46);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ6();
	this.instance.parent = this;
	this.instance.setTransform(15.9,14.7,0.596,0.596,0,0,0,26.6,24.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},49).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,31.7,29.4);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(21.4,16.2);

	this.instance_1 = new lib.Анимация2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(21.4,16.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},49).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,rotation:360},49).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,42.8,32.4);


(lib.Символ56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ55();
	this.instance.parent = this;
	this.instance.setTransform(63.1,23.8,1,1,0,0,0,63.1,23.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(6));

	// Слой 1
	this.instance = new lib.Символ45();
	this.instance.parent = this;
	this.instance.setTransform(10.3,15.5,1,1,0,0,0,10.3,15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:87},4).to({y:15.5},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.8,1.9,108,44.1);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ19();
	this.instance.parent = this;
	this.instance.setTransform(47.6,51,1,1,0,0,0,50.8,50);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[47.7,50.9,47.1,49.8,46.5,47.9,45,42.9,40.5,38.4,37.4,35.1,31.4,31,22.4,24.8,15.9,22.2,6.8,18.6,-0.9,20.4,-4.7,21.3,-11,24.7,-15.6,27.3,-17.3,29.5,-18.8,31.4,-19.5,34.2,-20,36.2,-20.3,39.5,-20.9,44.6,-20.8,47.5,-20.7,51.9,-19.2,55.2,-17.5,59.2,-13.5,62.2,-9.9,64.9,-5.3,66.3,-1.4,67.4,3.7,67.7,7.1,67.9,12.9,67.8,26.7,67.5,34.8,65.7,46.6,63.1,53.5,56.3,56,53.9,60.3,47.8,66.5,39.1,70.1,34.7,75.8,27.6,81.4,22.9,88,17.2,95.3,14.1,103.4,10.7,111.2,10.9,115.8,11,120,12.4,124.4,13.8,127.7,16.6,133,20.8,137.1,30.1,142.1,41.2,141.9,50.5,141.8,56,140,60.9,137.9,66.1,134.2,69.6,129.8,73.8,121.2,76.7,114.4,79.1,109.8,79.3,105.2,79.4,99.6,77.8,96.1,76.8,89.9,74.1,77.3,68.9,64.7,63.6,64.4,63.5,64.2,63.4]}},54).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.2,1,101.6,100);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ19();
	this.instance.parent = this;
	this.instance.setTransform(50.8,50,1,1,0,0,0,50.8,50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(0,0,101.6,100), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.parent = this;
	this.instance.setTransform(10.8,27.8,1,1,0,0,0,10.8,27.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:12,y:27.9},14).wait(35).to({rotation:0,y:27.8},15).wait(36));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,88.8,46);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmrBaQijhJgjiyIAAAAIANgGITRB8QAFAUAAASIAAAAQAAB1jdA4IAAAAg");
	mask.setTransform(76.7,145.4);

	// Символ 6
	this.instance = new lib.Символ9();
	this.instance.parent = this;
	this.instance.setTransform(25.9,133.9,0.87,0.87,0,0,0,15.8,14.8);

	this.instance_1 = new lib.Символ9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(128.4,146.2,0.98,0.98,0,0,0,15.8,14.7);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Символ 7
	this.instance_2 = new lib.Символ7();
	this.instance_2.parent = this;
	this.instance_2.setTransform(42.6,146.2,0.582,0.582,0,0,0,21.5,16.2);

	this.instance_3 = new lib.Символ7();
	this.instance_3.parent = this;
	this.instance_3.setTransform(64.2,148.3,0.582,0.582,0,0,0,21.5,16.2);

	this.instance_4 = new lib.Символ7();
	this.instance_4.parent = this;
	this.instance_4.setTransform(86,150,0.582,0.582,0,0,0,21.6,16.4);

	this.instance_5 = new lib.Символ7();
	this.instance_5.parent = this;
	this.instance_5.setTransform(106.7,152.4,0.582,0.582,0,0,0,21.5,16.2);

	var maskedShapeInstanceList = [this.instance_2,this.instance_3,this.instance_4,this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	// Слой 1
	this.instance_6 = new lib.Символ12();
	this.instance_6.parent = this;
	this.instance_6.setTransform(97.2,85.9,1,1,0,0,0,97.2,85.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(0,0,194.5,171.8), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Am0BcQilhKgki2IAAAAIAMgGITqB/QAFATAAATIAAAAQABB4jiA4IAAAAg");
	mask.setTransform(78.4,139.5);

	// Символ 6
	this.instance = new lib.Символ9();
	this.instance.parent = this;
	this.instance.setTransform(26.5,127.7,0.887,0.887,0,0,0,15.8,14.7);

	this.instance_1 = new lib.Символ9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(131.1,140.3,1,1,0,0,0,15.8,14.7);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Символ 7
	this.instance_2 = new lib.Символ7();
	this.instance_2.parent = this;
	this.instance_2.setTransform(43.5,140.3,0.593,0.593,0,0,0,21.4,16.2);

	this.instance_3 = new lib.Символ7();
	this.instance_3.parent = this;
	this.instance_3.setTransform(65.5,142.4,0.593,0.593,0,0,0,21.4,16.2);

	this.instance_4 = new lib.Символ7();
	this.instance_4.parent = this;
	this.instance_4.setTransform(87.7,144.1,0.593,0.593,0,0,0,21.4,16.2);

	this.instance_5 = new lib.Символ7();
	this.instance_5.parent = this;
	this.instance_5.setTransform(108.9,146.6,0.593,0.593,0,0,0,21.4,16.2);

	var maskedShapeInstanceList = [this.instance_2,this.instance_3,this.instance_4,this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	// Слой 1
	this.instance_6 = new lib.Символ5();
	this.instance_6.parent = this;
	this.instance_6.setTransform(99.5,81.4,1,1,0,0,0,99.5,81.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(0,0,199,162.7), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// tank_13.png
	this.instance = new lib.Символ13();
	this.instance.parent = this;
	this.instance.setTransform(154.9,46,1,1,0,0,0,39.9,23);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ11();
	this.instance_1.parent = this;
	this.instance_1.setTransform(97.2,85.9,1,1,0,0,0,97.2,85.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(0,0,194.8,171.8), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// tank_10.png
	this.instance = new lib.Символ16();
	this.instance.parent = this;
	this.instance.setTransform(156.4,40,1,1,0,0,0,44.4,23);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// tank_22.png
	this.instance_1 = new lib.Символ8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(99.5,115.2,1,1,0,0,0,99.5,115.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(0,0,200.8,162.7), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ57();
	this.instance.parent = this;
	this.instance.setTransform(92,41.2,1.329,1.329,0,0,0,40.3,27.9);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ57(), 3);

	this.instance_1 = new lib.Символ56();
	this.instance_1.parent = this;
	this.instance_1.setTransform(91.2,91,1.329,1.329,0,0,0,63.1,23.9);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.Символ56(), 3);

	this.instance_2 = new lib.Символ52();
	this.instance_2.parent = this;
	this.instance_2.setTransform(70.9,129,1.329,1.329,0,0,0,44.4,14.2);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.Символ52(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 1
	this.instance_3 = new lib.Символ2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(91.1,74.5,0.915,0.915,0,0,0,99.5,81.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(0,0,183.8,149), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ57();
	this.instance.parent = this;
	this.instance.setTransform(68.9,36.5,1,1,0,0,0,40.3,27.9);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ57(), 3);

	this.instance_1 = new lib.Символ56();
	this.instance_1.parent = this;
	this.instance_1.setTransform(68.2,73.9,1,1,0,0,0,63.1,23.8);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.Символ56(), 3);

	this.instance_2 = new lib.Символ52();
	this.instance_2.parent = this;
	this.instance_2.setTransform(53.1,102.6,1,1,0,0,0,44.4,14.2);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.Символ52(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 1
	this.instance_3 = new lib.Символ3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(144.1,60.3,0.701,0.701,0,0,0,205.5,85.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(0,0,136.5,120.5), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EAuzAaAIgIgEQz+h51bl3IgZgFIrgioQq+iflUgeIABgEIgFADQgFAEgHAAQgPACgVgJQgogSgugrQgygzgbgYQgtgqhXg4QglgZgYgMQgigSgfgJQgdgHg7gFQg8gFgdgIIhYggQg0gSgkAJQgVAFgaAQQgeATgPAJQgsAXg2AFQgyAEgjgMQgbgJgqgdIhxhLQgrgegbgGQgNgEg6gCQgsgCgWgQIgSgQQgKgKgIgFQgNgIgUAAQgLgBgZADQipAViwgIQgOgBgJgDQgGgBgGgCQgQgHgGgPQgGgMAAgSIAEgfQAPhjADiXIAGj8IATjqQALiNgEhdQgCgugJhNIgMh7QgIh8AKiZQAHhjAWiyQAEgjANgNQANgNAkgDQAigCBeAAQE+AAMxgdQLPgZGgAJQD1AGHOAaQHhAbDhAGQD+AHHRgDQOXgGDCABQJ2AEHiAfQAbACALAJQAXARgMA2Qg9EbgcEmQgPCmgIDQQgECDgED0IgDDoQAACCAGBnQACApAPDKQAKCUAGCSQAHC4ABDxQAAA1gDAcQgFAsgRAhIgbAsQgQAbgDAUQgBAGgBApQAAAdgKAPQgMAUgeAHQgRAEgmABQhGAChEAQIgmAIIgMABQgOAAgLgEg");
	mask.setTransform(441.2,86);

	// Символ 2
	this.instance = new lib.Символ18();
	this.instance.parent = this;
	this.instance.setTransform(75.2,105.4,0.605,0.605,0,0,0,91.9,74.7);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(69).to({_off:false},0).to({regX:92,regY:74.8,scaleX:0.73,scaleY:0.73,rotation:-3.5,x:440.7,y:139.9},74).to({scaleX:0.78,scaleY:0.78,rotation:5.4,x:601.6,y:125.9},26).to({regY:74.7,scaleX:0.87,scaleY:0.87,rotation:0,x:816,y:129.5},50).wait(1));

	// Символ 3
	this.instance_1 = new lib.Символ17();
	this.instance_1.parent = this;
	this.instance_1.setTransform(52.9,129.5,1.159,1.159,0,0,0,72.8,56.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:250.1,y:146.8},31).to({regY:56.3,rotation:5.2,x:319.7,y:154.8},9).to({regX:72.9,regY:56.4,rotation:2.9,x:513.5,y:190.4},40).to({regX:72.8,regY:56.2,rotation:0,x:847.3,y:251.1},69).to({_off:true},1).wait(70));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.5,64.4,158.3,139.7);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ1();
	this.instance.parent = this;
	this.instance.setTransform(237.2,250.2,1,1,0,0,0,364.1,101.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.back();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.648,0.648);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ23, new cjs.Rectangle(-158.4,0,819.6,415), null);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Пользовательский курсор мыши
		Заменяет курсор мыши по умолчанию на указанный экземпляр символа.
		*/
		stage.canvas.style.cursor = "none";
		this.pri.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
			this.pri.x = stage.mouseX;
			this.pri.y = stage.mouseY;
		}
		//Чтобы восстановить курсор мыши по умолчанию, раскомментируйте следующие строки:
		//this.removeEventListener("tick", fl_CustomMouseCursor.bind(this));
		//stage.removeChild(pri);
		//stage.canvas.style.cursor = "default";
		
		
		
		this.addEventListener("tick", fl_CustomMouseCursor1.bind(this));
		
		function fl_CustomMouseCursor1() {
		
		this.fon.y = - stage.mouseY / 20;
		}
		
		this.addEventListener("tick", fl_CustomMouseCursor2.bind(this));
		
		function fl_CustomMouseCursor2() {
		
		this.sky.y = stage.mouseY / 20;
		}
		
		
		var _this = this;
		
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		
		function fl_MouseOverHandler_5()
		    {
			    _this.mm.gotoAndPlay(1);
				_this.pr.visible=false;
				_this.pri.visible=true;
		
		
		    }
		
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		
		
		      function fl_MouseOutHandler_2()
		    {
			    _this.mm.gotoAndPlay(5);
				_this.pr.visible=true;
				_this.pri.visible=false;
		
		    }
		
			
			document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 7
	this.mm = new lib.Символ46();
	this.mm.parent = this;
	this.mm.setTransform(296.3,259.5,1,1,0,0,0,10.3,15.5);

	this.timeline.addTween(cjs.Tween.get(this.mm).wait(1));

	// Слой 6
	this.pr = new lib.Символ44();
	this.pr.parent = this;
	this.pr.setTransform(300.1,147.4,1,1,0,0,0,50.8,50);

	this.timeline.addTween(cjs.Tween.get(this.pr).wait(1));

	// Слой 5
	this.instance = new lib.Символ28();
	this.instance.parent = this;
	this.instance.setTransform(199.4,65.5,1.422,1.422,0,0,0,115,9.2);

	this.instance_1 = new lib.Символ25();
	this.instance_1.parent = this;
	this.instance_1.setTransform(49.7,267.2,1,1,0,0,0,30.7,14.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 4
	this.pri = new lib.Символ22();
	this.pri.parent = this;
	this.pri.setTransform(700.6,149.3,1,1,0,0,0,50.8,50);

	this.timeline.addTween(cjs.Tween.get(this.pri).wait(1));

	// Слой 2
	this.sky = new lib.Символ24();
	this.sky.parent = this;
	this.sky.setTransform(299.9,23.6,1,1,0,0,180,391.3,414.9);

	this.timeline.addTween(cjs.Tween.get(this.sky).wait(1));

	// Слой 1
	this.fon = new lib.Символ23();
	this.fon.parent = this;
	this.fon.setTransform(301.9,-17.5,1,1,0,0,0,305.9,86.5);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(137.6,-241.3,913.8,702.3);
// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/back.jpg?1478695229324", id:"back"},
		{src:"images/bulet.png?1478695229324", id:"bulet"},
		{src:"images/mousehi.png?1478695229324", id:"mousehi"},
		{src:"images/pricel.png?1478695229324", id:"pricel"},
		{src:"images/sky.png?1478695229324", id:"sky"},
		{src:"images/tank_03.png?1478695229324", id:"tank_03"},
		{src:"images/tank_05.png?1478695229324", id:"tank_05"},
		{src:"images/tank_10.png?1478695229324", id:"tank_10"},
		{src:"images/tank_13.png?1478695229324", id:"tank_13"},
		{src:"images/tank_18.png?1478695229324", id:"tank_18"},
		{src:"images/tank_22.png?1478695229324", id:"tank_22"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;