(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,366);


(lib.butty = function() {
	this.initialize(img.butty);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,448,171);


(lib.car = function() {
	this.initialize(img.car);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,110,115);


(lib.cloud = function() {
	this.initialize(img.cloud);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,259,79);


(lib.drago = function() {
	this.initialize(img.drago);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,450);


(lib.lamp = function() {
	this.initialize(img.lamp);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,200);


(lib.map = function() {
	this.initialize(img.map);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,426);


(lib.pad = function() {
	this.initialize(img.pad);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,109,140);


(lib.phone = function() {
	this.initialize(img.phone);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,103,129);


(lib.point = function() {
	this.initialize(img.point);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,61,61);


(lib.slot = function() {
	this.initialize(img.slot);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,108,147);// helper functions:

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


(lib.Symbol44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.butty();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol44, new cjs.Rectangle(0,0,448,171), null);


(lib.Symbol42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF3300","#FF6666","#940000","#940000"],[0,1,1,1],0,-9.5,0,9.6).s().p("AhNCWIgIgBQgIgDgBgHQgCgIAFgNIAHgYIAIg+IABiWQAAgTAIgGQAHgHATAAIB3AAQAKAAAEAEQAEADAAALQAAAIgEAFQgEAEgKAAIhwAAIgFABIgBAEIAAAYQACgFAEgCQAEgDAIAAIBbAAQALAAAEAEQADAFAAAJQAAAJgDAEQgEAEgLAAIg0AAIAAAaIAnAAQAQAAAGAKQADAFACAIIABA2IgFArIgDAQQgEAPgGAKQgFAJgIAFQgIAEgLAAQgLABgPgDQgLgDgCgGQgDgGAEgJQAEgIAEgCQAGgBAKACIAJACQAEABACgCQACgBACgEIADgLIADgPIAEhJQAAgGgFAAIgdAAIgLBNQgEAOgEANIgNAZIgIAKQgEAEgDACQgEABgEgBIgHgDQgGgEgBgHQAAgIAHgLQAIgMAFgOQAFgNAEgTQADgTACgbIAChFIgEAAQgIAAgEgCQgEgCgCgFIgDCQQgCARgEAOIgJAcIgFALQgEAEgDABIgFACIgCgBg");
	this.shape.setTransform(9.6,16.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FF3300","#FF6666","#940000","#940000"],[0,1,1,1],0,-7.1,0,7.2).s().p("Ag/CaQgGgFgBgHQgBgHAJgNQAKgOAGgSQAHgSAFgXQAEgYADgcIADhEIgQgBIgGgCQgDgCgBgEIgCgKIACgMQABgEADgCIAGgDIAIgBIAIAAIAAgcQAAgJAFgEQAEgFAJAAQAGAAAGAFQAFAEAAAJIAAAcIAdAAQAJAAAGACQAGACADAGQAEAGACALIABCMIgCAjIgDAYQgCAQgGAJQgHAIgJAEQgJAEgMAAQgMgBgMgDQgJgDgEgFQgEgGACgMQADgKAGgCQAHgDAHACIAKACIAIgBQADgCADgEQACgDABgHIABgSIABgdIABhtQAAgHgDgDQgCgCgHAAIgMAAQAAAogCAfQgDAggFAZQgEAagHAUQgIAVgLARQgIAMgIAEIgGACQgFAAgHgFg");
	this.shape_1.setTransform(24,15.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol42, new cjs.Rectangle(0,0,31.1,31.7), null);


(lib.Symbol41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF3300","#FF6666","#940000","#940000"],[0,1,1,1],-3.6,0,3.7,0).s().p("AAPAmQgHgBgHgKIgMgPIgNgMQgKgJgBgHQgBgHAHgHIgBAAIAHgGQAEgCADABIAHADIAIAGIAeAgQAIAJAAAGQAAAHgHAGQgIAGgGAAIgBAAg");
	this.shape.setTransform(4.5,5.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FF3300","#FF6666","#940000","#940000"],[0,1,1,1],0,-15.7,0,15.8).s().p("AiVBJQgHgEAAgKQgBgLAFgFQAFgFANgCIAzgRIAXgOQALgHAJgIIhgAAQgKAAgEgFQgDgGAAgJQAAgJADgFQAEgFAKAAIBzAAIAAgCQgBgFACgEIAFgHIAHgEIAIgCQAIAAAFAEQAGAFAAALIAAAEIB4AAQAKAAAEAFQAEAFAAAJQAAAJgEAGQgDAFgLAAIhhAAQAQASAXALQAWAKAgAGQANADAFAEQAFAEgBALQAAAJgGAEQgFAFgIgBQgpgEghgTQgRgKgPgNQgPgOgMgQQgJAMgOANQgOAMgSAKQgSAKgUAHQgTAHgVAEIABAAIgMABQgGAAgEgBg");
	this.shape_1.setTransform(15.7,24.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FF3300","#FF6666","#940000","#940000"],[0,1,1,1],0,-15.5,0,15.6).s().p("AhEBdQgFgDAAgKIAAggIgUARIgmAWIgIABQgDgBgDgDIgGgHQgFgJADgHQAEgHAIgEIAAABIAagPQAKgGAKgJQAGgHAGgCQAFgCAFADIAAhcQAAgKAFgDQAFgEAJAAQAJAAAEAEQAEADAAAKIAAB4QAFgDANgCIgBAAQAcgEAVgHIgJgIIgTgNIgDgEQgKAGgHgBQgHgCgEgGQgFgFACgHQABgGAMgKQALgLAIgLQAIgLAGgNIAAABQAHgOAGgEQAGgEAJAEQAJADADAGQACAHgCAHIBFAAQAKgBAHADQAIADAEAFQAEAGAAAHQAAAHgDAJIAAgBQgUArgpAaQgpAahAALIgPABQgFAAgDgDIAAAJQAAAKgEADQgEAEgJAAQgJAAgFgEgAAagdIgFAFIAHAEIAlAdQALgHAKgIQAKgJAIgLQAEgFgCgCQgCgDgJAAIhBAAg");
	this.shape_2.setTransform(15.7,9.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol41, new cjs.Rectangle(0,0,31.5,32.3), null);


(lib.Symbol40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF3300","#FF6666","#940000","#940000"],[0,1,1,1],-3.8,0,3.9,0).s().p("AAKA4QgHgEgEgNIghg+QgFgJABgIQABgIAHgFQAIgFAIACQAHABAGALIAjBEQAHANgDAHQgDAHgIAEQgFADgFAAQgEAAgDgCg");
	this.shape.setTransform(19.6,17.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FF3300","#FF6666","#940000","#940000"],[0,1,1,1],0.1,-14.7,0.1,14.7).s().p("ABOCeIgXgEQgOgCgPgHQgOgFgDgHQgEgGAEgLQAEgJAHgDQAHgCANAGQAQAHAMACQALACAHgFQAHgFAEgMQAEgNACgWQADgTABgfIABhOQAAgGgEgCQgDgDgIAAIg6AAQgKAUgOAUQgFAHgFADQgEADgGgBIAACQQAAAJgDAGQgBAHgEAEQgEAEgGADQgHACgJAAIhFAAQgKAAgGgCQgGgDgFgEQgEgEgBgHQgCgGAAgJIAAjJQAAgJACgHQABgGAEgEQAIgJATAAIAPAAIADgSQACgMAGgFQAHgGAJACQAMABADAHQACAGgBANIgDAMIAOAAQASAAAIAJQAEAEABAGQADAHAAAJIAAAHQAIgNAFgOQAGgNAGgVQADgMAGgEQAHgFAJADQAKACADAIQADAHgDALIgEAKIA2AAQAMAAAIAEQAIADAFAGQAEAGADAJQADAIAAAKIgBBQIgBAnIgDAfQgDAXgEAQQgFAPgIAJQgHAJgMADQgJADgMAAIgEAAgAhqBnQgBAGADADQACACAHAAIAlAAQAHAAABgCIABgIIAAhCIg5AAgAhphLIgBAIIAABDIA5AAIAAhEQAAgGgCgCQgCgCgIAAIgmAAQgFAAgBADg");
	this.shape_1.setTransform(14.7,15.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol40, new cjs.Rectangle(0,0,29.4,31.6), null);


(lib.Symbol39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF3300","#FF6666","#940000","#940000"],[0,1,1,1],0,-12.6,0,12.7).s().p("AgjBKQgPgCgRgGQgMgEgEgGQgDgFADgKQADgHAHgCQAGgCAMAFIAaAHQAMACAKAAQAOAAAGgEQAFgFAAgGIgCgHIgCgGIh7AAQgIAAgEgFQgEgEAAgHQAAgIADgEQAEgFAJAAIBIAAIAAgCIAAgBQAAgGAIgGQAHgGASgDIhZAAQgJAAgEgFQgEgFAAgHQAAgIAEgEQAEgFAJAAICjAAQAOAAAJAGQAJAGAAAIQAAAIgJAFQgIAGgMACIg5AQIACABIBbAAQAJAAAEAFQAEAEAAAIQAAAGgEAFQgEAFgJAAIg5AAQADAJgCAKQgCAKgFAIQgEAHgIAFQgOALgZAAQgPAAgPgCg");
	this.shape.setTransform(19,23.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FF3300","#FF6666","#940000","#940000"],[0,1,1,1],-10.5,0,10.6,0).s().p("AhLA0QgJAAgGgCQgFgDgEgEQgFgKAAgOIAAglQAAgPAFgJQAEgEAFgCQAGgDAJAAICXAAQARABAGAGQAGAHAAATIgBA1QgBAGgDAEQgEAEgFABIgQACgAhIAQQABAEAEAAICHAAQAFAAAAgEQAAgFgFAAIiHAAQgEAAgBAFgAhIgPQABAEAEAAICHAAIADgBIACgDQAAgEgFAAIiHAAQgEAAgBAEg");
	this.shape_1.setTransform(18.5,9.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FF3300","#FF6666","#940000","#940000"],[0,1,1,1],0,-15.6,0,15.7).s().p("AiQCYQgKgEgBgHQgBgGAFgKIAKgdIAGgeIAEhNIAAhuQAAgRAHgIQAIgIASAAIDtAAQAKAAAEAEQADAEAAAJQAAAJgDAEQgEAEgKAAIjeAAQgGAAgDACQgDACAAAHIgBCQIgEAlIgHAhQgEAQgHASQgFALgGADIgGACQgEAAgFgDg");
	this.shape_2.setTransform(15.6,15.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol39, new cjs.Rectangle(0,0,31.6,31), null);


(lib.Symbol38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF3300","#FF6666","#940000","#940000"],[0,1,1,1],0.1,-15.9,0.1,15.9).s().p("AgQCdQgDgEAAgMIAAgwIh3AAQgKAAgFgFQgFgFAAgKQAAgTAUAAIB3AAIAAguIhdAAQgKAAgFgEQgFgEAAgKQAAgTAUAAIBdAAIAAgqIhqAAQgJAAgFgEQgFgEAAgKQAAgLAFgEQAFgFAJAAIBqAAIAAgfQAAgLAEgFQAGgEAJAAQAIAAAGAFQAEAEAAALIAAAfIBnAAQAKAAAEAFQAGAEAAALQAAAKgGAEQgEAEgKAAIhnAAIAAAqIBaAAQAKAAAGAEQAFAFAAAKQAAAKgFAEQgGAEgKAAIhaAAIAAAuIB5AAQAJAAAFAFQAGAFAAAJQAAAKgGAFQgFAFgJAAIh5AAIAAAwQABAKgFAFQgFAFgJAAQgLAAgFgEg");
	this.shape.setTransform(15.9,16.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol38, new cjs.Rectangle(0,0,31.8,32.2), null);


(lib.Symbol37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF3300","#FF6666","#940000","#940000"],[0,1,1,1],-3.1,0,3.2,0).s().p("AAFAlQgFgCgEgKIgVgiQgGgHAAgGQAAgFAJgGQAIgFAJACQAHADAFAIIgBgBIAVAjQAGAKgCAGQgCAHgHACQgIAEgFAAIgEgBg");
	this.shape.setTransform(15.6,26.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FF3300","#FF6666","#940000","#940000"],[0,1,1,1],-5,0,5.1,0).s().p("AgKBlIAAhlIgBAAIAAAAIAAAAQgJAKgHABQgHABgJgIQgIgGACgIQACgIAJgKQAPgPANgUQAMgTAKgWIAAAAQAEgIAFgFQAGgFALAEQAKAEACAIQADAIgHAOIgTAhIAACYQAAAMgFAEQgFAEgJAAQgSAAAAgUg");
	this.shape_1.setTransform(5.3,19.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FF3300","#FF6666","#940000","#940000"],[0,1,1,1],-4.5,0,4.5,0).s().p("AgnA3QgGgIABgHQACgHAGgHIAAAAQAOgPAKgQQAKgQAIgXQADgIAFgFQAGgFAKADQAMAEADAGQACAHgGAOIAAABQgKAVgLATQgLATgQAUQgHAIgKABIgBAAQgIAAgGgGg");
	this.shape_2.setTransform(4.5,6.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FF3300","#FF6666","#940000","#940000"],[0,1,1,1],-11.6,0,11.6,0).s().p("AAZBWQgIgBgLgDQgMgEgCgGQgDgGAEgJQADgIAGgCQAHgDAKAEIANAEIAHAAQABAAAAgBQABAAAAAAQABgBAAAAQAAgBABAAIABgHIAAg1IiNAAQgKAAgEgDQgEgDAAgJQAAgIAEgEQAEgDAKAAICNAAIAAgPIiAAAQgLAAgEgDQgEgDAAgJQAAgIAEgDQAEgDALAAICxAAQALAAAEADQAEADAAAIQAAAJgEADQgEADgLAAIgLAAIAAAPIAQAAQAKAAAEADQAEAEAAAIQAAAJgEADQgEADgKAAIgQAAIAAA9QAAAIgCAHQgCAGgFAFQgEAFgIACQgIADgNAAg");
	this.shape_3.setTransform(20.4,23.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FF3300","#FF6666","#940000","#940000"],[0,1,1,1],-9.7,0,9.7,0).s().p("Ag9A/QgKgBgHgCQgHgCgDgDQgIgIAAgTIAAg4QAAgSAIgHQADgFAHgBQAHgCAKAAIB8AAQAJAAAHACQAGABAFAFQAHAHAAASIAAA4QAAATgHAIQgFADgGACQgHACgJABgAg6AdIABADIAEAAIBrAAIAEAAIAAgDIAAgPIh0AAgAg5geIgBAHIAAAJIB0AAIAAgJQAAgFgBgCIgEgCIhpAAQgBAAgBABQgBAAAAAAQgBAAAAABQgBAAAAAAg");
	this.shape_4.setTransform(20.5,7.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol37, new cjs.Rectangle(0,0,32.1,32), null);


(lib.Symbol36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF3300","#FF6666","#940000","#940000"],[0,1,1,1],-4.4,0,4.4,0).s().p("AgoAvQgDgDAAgHIAAg8IABgNQABgFAEgDQADgDAEgBIAwgBQAOAAAGAGQAFAFABAPIAAA7QAAAHgEADQgEADgGAAQgFAAgEgDQgDgDAAgHIAAg6QAAgBgBAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIghAAQAAAAAAAAQAAAAgBABQAAAAAAAAQAAAAAAABIAAA7QAAAHgEADQgEADgFAAQgHAAgDgDg");
	this.shape.setTransform(15.6,21.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FF3300","#FF6666","#940000","#940000"],[0,1,1,1],-5.3,0,5.3,0).s().p("AguBMQgFgFgBgEQAAgEAFgJIAGgNIAEgOIACgTIABhJQABgFADgDQACgCAFgBIAOgBIAyABQAFABACACQADADABAFIABANIAABkQABARgHAGQgGAHgQAAQgNAAgKgDQgHgCgCgEQgCgFACgFQACgJAFgCQADgCAKADQAIADACgBQACAAAAgFIAAgUIghAAQgBALgEALQgEALgGALQgEAGgHACIgEAAQgFAAgDgCgAgHABIAgAAIAAgOIggAAgAgGg0IgBADIAAALIAgAAIAAgLIAAgEIgDAAIgZAAIgDABg");
	this.shape_1.setTransform(5.3,23.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FF3300","#FF6666","#940000","#940000"],[0,1,1,1],0,-10.8,0,10.8).s().p("AgPBMQgFgDgBgEQgBgEADgGIgBABQgGAGgFgBQgEgBgGgHIgNgQIgBgBQgJATgRANQgIAGgFAAQgGAAgFgGQgDgGABgFQACgFAKgGIAMgKQAFgFADgIQADgHABgJIACgqQAAgJACgDQACgEAIAAQAIAAADAEQACADAAAJIAAAUQAAAOgDAOQAEAAAEAEIAMALIAHAIQAFAGAAAGIADgIIAEgaIAAhHQAAgOAFgFQAFgGAOAAIAkAAQAOAAAFAGQAGAFAAAOIAABlQAAAAAAABQAAAAABAAQAAABAAAAQABAAAAAAIABgBIABgDIACgaIAAgLIACgHIADgCIAGgBIAGABIAFACIACAHQABAEAAAHIgCAeQgCALgEAGQgEAGgFABIgQACQgHAAgFgBQgFgCgDgEQgCgEgCgIIgBgSQgCAGgGABIAAgBQgGACgDgDQgDgDgCgLIgJgzQgCgJABgFQABgFAGgCIAAAAQAHgCAEADQAEAEACAJIAIA0IAAhHIgBgFIgDgBIgZAAIgDABIgBAFIAAAuQAAAYgCAQQgCAQgGALIABgBQgFAKgFADIgFABQgEAAgEgDg");
	this.shape_2.setTransform(21.3,24.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FF3300","#FF6666","#940000","#940000"],[0,1,1,1],-12.2,0,12.3,0).s().p("AheAfIgOgCQgFgBgDgDQgDgDgBgFIgBgVIABgMQABgFADgDQADgDAFgCIAOgBIC8AAIAPABQAFABADADQADADABAFIABAOIgBAVQgBAEgDADQgEAEgFABIgOABgAhYgEIAAADIAAADIAAACIAFABICnAAIAEgBIABgDIAAgBIgBgEIgFgBIimAAIgFABg");
	this.shape_3.setTransform(16.2,12.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FF3300","#FF6666","#940000","#940000"],[0,1,1,1],0,-15.4,0,15.5).s().p("AhpArIgPgCQgGgBgDgDQgDgCgBgFIgBgYIgFAAQgJAAgDgDQgDgCAAgHQAAgIADgCQADgCAJAAIB9AAIgBgEQgEgHADgFQADgEAMgDQAIgCAGADQAFADADAIIACAFIABAGIB0AAQAIAAADACQAEADAAAHQAAAHgEACQgDADgIAAIjxAAIAAAHIABAEIAFAAIDYAAQAIAAAEADQADACAAAIQAAAJgDABQgEADgIAAg");
	this.shape_4.setTransform(15.9,4.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol36, new cjs.Rectangle(0,0,32.1,32), null);


(lib.Symbol35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF3300","#FFCC33","#940000","#940000"],[0,1,1,1],-6.6,0,6.6,0).s().p("AguATQgKAAgFgFQgEgFAAgJQAAgJAEgFQAFgEAKAAIBdAAQALAAAEAEQAEAFAAAJQAAAJgEAFQgEAFgLAAg");
	this.shape.setTransform(8.2,3.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FF3300","#FFCC33","#940000","#940000"],[0,1,1,1],0,-15.2,0,15.3).s().p("AgUCZQgHgHAAgHQAAgIAHgIQgDgDgEgKIhZASQgQACgIgHQgHgGAAgMQAAgIAFgIIAthmIgkAAQgLAAgEgFQgEgEAAgKQAAgKAEgFQAEgFALAAICBAAQAKAAAEAFQAEAFAAAKQAAAKgEAEQgEAFgKAAIg0AAIgjBWQgDAFABAEQAAADAGgBIAzgKIgQgsIAAAAQgFgMAEgFQADgGAIgFQAJgCAHACQAGADAEAKIANAhQAFATAFAVQARgcAKgqQALgoACgwIgWAAIgJgBIgGgDQgDgCgBgDIgCgLQAAgOAGgDQAFgEAKAAIAWAAIAAgbQAAgJAFgGQAGgFAJAAQAIAAAFAFQAGAGAAAJIAAAbIAgAAQAKAAAGACQAHABAEAGQAEAGABAMQACALABATIAAA/QAAAcgCAVIgEAjQgDAPgEAJQgGAPgHAJQgHAIgKAFQgKAEgLgBQgMAAgPgDQgNgDgDgHQgDgGADgMQADgJAHgDQAHgCAJADQALAEAIgDQAHgDAHgNIAEgPIAEgbIACguIAAhGQAAgIgDgCQgDgCgHAAIgQAAQgBAlgGAgQgFAfgJAbQgJAbgNAWQgNAXgQARQgKAMgJABIgBAAQgIAAgGgGg");
	this.shape_1.setTransform(15.3,15.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol35, new cjs.Rectangle(0,0,30.6,31.8), null);


(lib.Symbol34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF3300","#FFCC33","#940000","#940000"],[0,1,1,1],-4.7,0,4.8,0).s().p("AgmBBQgHgFgBgHQgBgIAIgMQALgQAMgVQAMgVALgcQAFgLAGgDQAHgDAJADIAIAEQADACACAEQABADgBAFIgDAMQgMAdgNAWQgOAYgNAVQgIAKgIABIgCAAQgHAAgFgFg");
	this.shape.setTransform(5,24);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FF3300","#FFCC33","#940000","#940000"],[0,1,1,1],-4.5,0,4.6,0).s().p("AAbAlQgIAAgJgHIgUgQIgWgNQgIgDgDgHQgDgHAFgJQAGgKAHgBQAHgBAJAGIAvAfQAJAGABAJQACAJgGAGQgGAHgHAAIgBAAg");
	this.shape_1.setTransform(4.5,12.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FF3300","#FFCC33","#940000","#940000"],[0,1,1,1],-4.3,0,4.4,0).s().p("AAZAkQgIAAgKgIIgkgaQgJgEgDgIQgDgHAHgJQAFgIAHgBQAHAAAKAGIAoAcQAJAGACAIQACAIgFAHQgHAIgIAAIAAAAg");
	this.shape_2.setTransform(5.1,4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FF3300","#FFCC33","#940000","#940000"],[0,1,1,1],0.1,-11.8,0.1,11.8).s().p("Ag9CXQgSAAgIgHQgEgDgCgHQgCgHAAgJIAAhVQAAgJACgHQACgGAEgEQADgDAIgCQAGgCAJAAIAlAAIAAgcIhJAAQgKAAgFgGQgFgGAAgIQAAgIAFgGQAFgGAKAAIBJAAIAAgXIgyAEQgPABgFgFQgFgFgBgKQgBgNAHgEQAGgFAOAAIBLgFIBPgRIAJACQAEABADAEQADADABAGQACAJgFAGQgEAGgMAEIhBANIAAAcIBSAAQAKAAAFAGQAFAGAAAIQAAAIgFAGQgFAGgKAAIhSAAIAAAcIAsAAQATAAAIAHQADAEACAGQADAHAAAJIAABVQAAAJgCAGQgCAHgDAEQgEAEgHABQgHACgKAAgAg2AqQgCADAAAIIAAAtQAAAIADADQADADAHAAIBWAAQAHAAADgEQACgDAAgJIAAgvQAAgFgDgDQgCgCgHAAIhXAAQgHAAgDADg");
	this.shape_3.setTransform(20.4,15.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol34, new cjs.Rectangle(0,0,32.2,31), null);


(lib.Symbol33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF3300","#FFCC33","#940000","#940000"],[0,1,1,1],-4.5,0,4.6,0).s().p("AgeAiQgGgBgFgJQgFgKADgHQACgHAMgFIAogWQALgHAHABQAHAAAFAJQAGAIgCAGQgBAHgIAEIgxAdQgKAEgFAAIgCAAg");
	this.shape.setTransform(4.8,27.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FF3300","#FFCC33","#940000","#940000"],[0,1,1,1],-4.3,0,4.4,0).s().p("AAZAoQgHgBgJgHIgugmIgFgHQgBgDACgEIAFgJQAGgIAGgBQAGgBAJAHIApAiQAKAJABAHQACAHgHAIQgGAHgGAAIgBAAg");
	this.shape_1.setTransform(24.2,27.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FF3300","#FFCC33","#940000","#940000"],[0,1,1,1],0,-15.1,0,15.1).s().p("AgTCfQgNgBgQgIQgKgEgDgFQgDgGAEgMQAEgJAGgCQAFgBAJADIASAGQAFABACgCQABgBAAgGIAAgmIhUAFQgOABgIgGQgIgFgCgIQgBgHAFgIQAFgJANgFIAYgJQgMgDgHgFQgGgFgBgHQAAgHAEgHQAFgHAJgFIA1gcIhGAAIgFABIAAAFIAAATQAAAIgGAFQgEAFgKAAQgKAAgFgEQgFgFAAgJIAAgXQAAgLACgHQACgIADgEQAFgEAIgCIBugBIAAgKIhpAAQgMAAgDgEQgEgEAAgIQAAgIAEgFQADgFAMAAIBpAAIAAgJQAAgLAFgEQAFgEAJAAQAIAAAGAEQAFAEAAALIAAAJIBuAAQAMAAADAFQAFAFAAAIQAAAIgFAEQgDAEgMAAIhuAAIAAAKIBmAAQAPAAAHAGQAIAGABANIgBARIgDASQgGAQgGAFQgGAEgJgDQgMgEgCgGQgCgGAEgOQAFgLgBgDQgBgDgEAAIhfAAQAFANgQAHIgqAVIgDACIADAAIAkgCIAvgYQALgGAIAAQAHABAFAJQAFAJgCAHQgCAHgMAFIhkAoIgFADQAAABAFgBIBsgGIgBgCIgBgBQgHgJgBgHQAAgIAIgHQAIgFAHABQAHABAHAHIAdAkIAKAPQAHAKgBAHQgBAIgIAGQgIAFgGgBQgGgCgIgLIgIgKIhGAEIAAArQAAATgFAJQgGAJgLAEQgJADgKAAIgFAAg");
	this.shape_2.setTransform(15.1,15.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol33, new cjs.Rectangle(0,0,30.2,31.8), null);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF3300","#FFCC33","#940000","#940000"],[0,1,1,1],-4.3,0,4.3,0).s().p("AgcAlQgHgBgFgIQgEgIADgGQACgHAJgEQALgFAKgHIATgTQAHgGAGgCQAGgBAIAFQAGAHAAAFQABAGgIAJIgjAcIgLAJQgJAFgHAAIgCAAg");
	this.shape.setTransform(15.4,10.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FF3300","#FFCC33","#940000","#940000"],[0,1,1,1],0,-5.5,0,5.5).s().p("AglCXQgKgEgFgIQgEgIADgIQAEgKAHgCQAIgCAMAEQABABAAAAQABAAABAAQAAAAAAAAQABAAAAAAIACgFIAAhAIgIAEQgKAHgIgEQgHgDgDgKQgCgIAEgHQADgGAKgFIAVgLIAAg8IgSAAQgLABgEgGQgFgEAAgKQAAgJAFgGQAEgEALAAIASAAIAAgpQAAgLAFgEQAGgEAIgBQASAAAAAUIAAApIALAAQALAAAEAEQAEAGAAAJQAAAKgEAEQgEAGgLgBIgLAAIAAAjIADgDQAHgFAGgBQAHgBAGAHQAFAGAAAIQAAAIgIAHIgaAUIAABfQAAAKgCAGQgCAIgEAFQgHALgQAAQgLAAgQgHg");
	this.shape_1.setTransform(5.5,15.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FF3300","#FFCC33","#940000","#940000"],[0,1,1,1],-11.3,0,11.4,0).s().p("AgLBoQgEgFAAgLIAAhDQgOARgQARQgRAQgRAOQgIAGgJAAQgJAAgFgKQgEgHACgHQACgIAIgGIAqglIAngvIguAAQgJAAgGgEQgGgEAAgKQAAgKAGgEQAGgEAJAAIA0AAIAAgUQAAgLAEgFQADgGAKAAQAMAAADAGQAEAFAAALIAAAUIA9AAQAJAAAGAEQAGAEAAAKQAAAKgGAEQgGAEgJAAIg1AAQAPAWATAVQATAWAVAUQATARgOAPIgHAGQgEADgDgBQgDAAgFgDIgJgIIg4hFIAABKQAAALgEAFQgEAGgKAAQgLAAgDgGg");
	this.shape_2.setTransform(20.7,20.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FF3300","#FFCC33","#940000","#940000"],[0,1,1,1],0,-10.5,0,10.5).s().p("ABEA1IgoggQgIgGgBgGQgCgGAFgGQAFgIAHAAQAGAAAJAFIAOAKQgCgEAAgDQAAgGAEgHQADgHgCgDQgDgCgJAAIh0AAIgFABIgCAGIAAANQAAAJgEAFQgFAFgJgBQgKAAgEgEQgDgFAAgJIAAgTQAAgIACgGQADgGAFgFQAFgEAHgCQAIgCALgBIB9AAQAVABALAFQALAHAAARIgBAMIgFASQgFALgHADQgGACgJgFIATAQQAKAJABAFQACAGgGAHQgGAJgHgBQgHAAgKgIg");
	this.shape_3.setTransform(21.2,7.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol32, new cjs.Rectangle(0,0,32.1,31.9), null);


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF3300","#FFCC33","#940000","#940000"],[0,1,1,1],0,-15.7,0,15.8).s().p("AiICZQgMAAgEgFQgEgFAAgJQAAgJAEgFQAEgFAMAAIB4AAIAAg8IhXAAQgMAAgFgGQgEgFAAgJQAAgJAEgFQAFgFAMAAIBXAAIAAgoIheAAQgMAAgEgFQgFgFAAgKIAAgDQgIgBgFgEQgEgEAAgKIAAgSQAAgTAJgKQAJgKAVAAIBYAAQgEgIABgHQACgHAIgFIAHgCIAHAAQAFABADADQAEADADAGIAGAQIBXAAIAPAAIALADIAJAGIAHAJIADAMIABAJIgBAKIgDALQgEAKgFAEQgFAEgIgCIABADQAAAKgFAFQgEAFgLAAIhXAAIAAAoIBdAAQAKAAAFAFQAFAFAAAJQAAAJgEAFQgEAGgMAAIgeAAIABABIACABIAbAhQAGAIABAFQABAGgFAGIATAAQALAAAEAFQAFAFAAAJQAAAJgEAFQgFAFgLAAgAAWBzIA+AAIAAgBIAAAAIgZgeQgPgQAPgNIglAAgAhrhTQgCADAAAHIAAAGIgBAEIDcAAIABgGIADgJQACgHgIAAIjPAAQgGAAgCACg");
	this.shape.setTransform(15.7,15.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol31, new cjs.Rectangle(0,0,31.5,30.7), null);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF3300","#FFCC33","#940000","#940000"],[0,1,1,1],0,-15.6,0,15.6).s().p("AiLCgQgJgBgFgJQgDgHABgGQABgHAIgIQAQgNAOgSQAOgSALgXQALgXAJgaQAIgaAFgdIhHAAQgLAAgEgGQgFgFAAgJQAAgIAFgFQAEgGALAAIBMAAIACgsQAAgLAGgGQAGgFAIAAQAJAAAGAFQAFAFAAANIgDArIBhAAIgxgaQgJgEgDgHQgDgGAEgIQADgIAIgDQAIgCAHADQASAHASAKQATAKAOALIgBAAQAHAGACAFQACAGgDAGIALAAQAKAAAFAGQAEAFAAAIQAAAJgEAFQgFAGgKAAIgQAAQAHAEABAHQACAIgFAJQgWAigPASQgWAagaAXIAAAfIAAADIADACIAHABIANABQARAAAKgCQALgCAFgGQAGgGACgLQACgLAAgSQAAgMAGgFQAFgFAJAAQAKAAAFAEQAFAFAAAOQgBAegEATQgEASgKAKQgFAFgHADQgHAEgJABQgRAEgdAAQgWAAgNgCQgMgCgGgFQgGgEgCgJIgBgaIgnAUQgKAEgIgBQgIgBgEgNQgDgJAEgGQAEgHAKgEQAPgFANgIQAMgHAOgLIAAhuIgTAAQgMBHgaA1QgbA0gmAfQgIAHgIAAIgCAAgAAoAVQAQgQANgPQAMgQAJgSQAEgHAEgDIg6AAg");
	this.shape.setTransform(15.6,16);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol30, new cjs.Rectangle(0,0,31.3,32), null);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF3300","#FFCC33","#940000","#940000"],[0,1,1,1],-12.2,0,12.3,0).s().p("AhnATQgKAAgEgFQgFgFAAgIQAAgJAFgFQAEgFAKAAIDQAAQAKAAAEAFQAEAFAAAIQAAAHgEAGQgEAGgKAAg");
	this.shape.setTransform(12.3,20.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FF3300","#FFCC33","#940000","#940000"],[0,1,1,1],0,-13.5,0,13.6).s().p("AAMCaQgPgDgQgIQgLgGgDgGQgCgHADgIQAHgSAWALQAKAFALADQALADAKAAQAVAAALgNQAEgEACgIQADgHACgMIAEhKIgBgGIgFgBIivAAQgNAAgJgCQgIgBgEgFQgEgFgBgIQgBgHACgMIAOheQABgLAFgDQAFgEAJABQALAAADAGQAEAGgCAJIgDAUIDMAAQAJAAAFAFQAEAEAAAKQAAAJgEAFQgFAFgJAAIjRAAIgEAcQAAAEABACQABABAFAAICzAAQAIAAAGACQAGACAEAEQAEAFADAIQACAJAAAMQAAA3gGAgQgDAQgEAMQgFAMgGAGQgLAOgPAFQgOAGgTAAQgOAAgPgEg");
	this.shape_1.setTransform(17.3,15.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol29, new cjs.Rectangle(0,0,30.9,31.5), null);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF3300","#FFCC33","#940000","#940000"],[0,1,1,1],-12.9,0,13,0).s().p("AiAAlQAAgKAFgEQAGgEAMgBQAigCAdgFQAegFAYgHQAygRAegbQAJgHAGgCQAHgBAHAGQAJAGgBAIQAAAHgJAJQgQAOgXANQgXANgdAKQgnAMgXAEQgiAHglABQgYAAAAgSg");
	this.shape.setTransform(15.1,26.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FF3300","#FFCC33","#940000","#940000"],[0,1,1,1],-9.7,0,9.8,0).s().p("AhXAvQgGgCgDgKQgCgKAEgFQAFgFAMgDIArgJQATgDAPgGQAQgGAPgIQAPgIAQgNQAIgGAIgBQAIAAAFAGQAHAHgBAHQgBAIgKAHQgNAKgPAHQgPAJgTAIQgTAHgWAHQgXAHgcAFIgLACQgFAAgDgCg");
	this.shape_1.setTransform(13.8,22.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FF3300","#FFCC33","#940000","#940000"],[0,1,1,1],0,-16,0,16.1).s().p("AhnBwQgFgCgEgJIgBgDIAAgDIgKAGQgMAHgIgBQgJgBgEgIIAAAAQgGgHADgIQADgJAMgGIAAAAQAUgKAPgKQAOgKANgMIg1AAQgJAAgFgFQgEgFAAgIQAAgJAEgFQAEgFAKAAIBYAAIADgEIAEgFIg4ADQgNAAgHgFQgHgFAAgKQAAgFAEgGQADgGAJgHIArgoQAIgKAHgBQAHgBAHAHQAJAIAAAHQAAAHgIAHIgYAWIBsgDIgLgMQgIgJAAgGQAAgGAGgGQAHgGAIAAQAHABAHAHIAZAaQANAPAKAOQAFAHgBAGQAAAGgIAFQgQALgMgRIgCgCIgCgCIhNAEIgGALICPAAQAJAAAFAFQAFAEAAAKQAAAJgFAFQgGAEgIAAIg6AAIAcAWIAhASQAQAHADAIQACAIgFAIQgHAKgHAAQgHABgLgGIgwgiIgogqIhHAAIgXAZQgNAMgPAMIAZgHIArgSIAUgOQAKgIAJABQAIAAAGAHQAFAGgBAGQgCAGgFAEIgVAPQgMAHgNAGIhJAZQgGACgFAAIgGgBg");
	this.shape_2.setTransform(16.1,11.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol28, new cjs.Rectangle(0,0,32.2,32), null);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.drago();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol26, new cjs.Rectangle(0,0,800,450), null);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.point();
	this.instance.parent = this;
	this.instance.setTransform(-50,5,0.557,0.557);

	this.instance_1 = new lib.cloud();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-75.6,18.9,0.328,0.328);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(-75.6,5,84.9,39.8), null);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.point();
	this.instance.parent = this;
	this.instance.setTransform(13.3,-23,0.557,0.557);

	this.instance_1 = new lib.cloud();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-13,-6.9,0.328,0.328);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(-13,-23,84.9,42), null);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.phone();
	this.instance.parent = this;
	this.instance.setTransform(105.2,-67,0.593,0.593);

	this.instance_1 = new lib.cloud();
	this.instance_1.parent = this;
	this.instance_1.setTransform(54,-39.2,0.632,0.632);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(54,-67,163.8,77.8), null);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.car();
	this.instance.parent = this;
	this.instance.setTransform(68.3,6,0.593,0.593);

	this.instance_1 = new lib.cloud();
	this.instance_1.parent = this;
	this.instance_1.setTransform(15,26,0.632,0.632);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(15,6,163.8,70), null);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.point();
	this.instance.parent = this;
	this.instance.setTransform(28.3,0,0.557,0.557);

	this.instance_1 = new lib.cloud();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,11.1,0.328,0.328);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(0,0,84.9,37), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pad();
	this.instance.parent = this;
	this.instance.setTransform(47.2,0,0.593,0.593);

	this.instance_1 = new lib.cloud();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,32.1,0.632,0.632);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(0,0,163.8,83), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.point();
	this.instance.parent = this;
	this.instance.setTransform(-94.2,1,0.557,0.557);

	this.instance_1 = new lib.cloud();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-121,16.1,0.328,0.328);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(-121,1,84.9,41), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.point();
	this.instance.parent = this;
	this.instance.setTransform(64.8,7,0.557,0.557);

	this.instance_1 = new lib.cloud();
	this.instance_1.parent = this;
	this.instance_1.setTransform(40,17.1,0.328,0.328);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(40,7,84.9,36), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.point();
	this.instance.parent = this;
	this.instance.setTransform(84.3,-54,0.557,0.557);

	this.instance_1 = new lib.cloud();
	this.instance_1.parent = this;
	this.instance_1.setTransform(54,-42.9,0.328,0.328);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(54,-54,84.9,37), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.point();
	this.instance.parent = this;
	this.instance.setTransform(28.3,0,0.557,0.557);

	this.instance_1 = new lib.cloud();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,18.1,0.328,0.328);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,84.9,44), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.slot();
	this.instance.parent = this;
	this.instance.setTransform(53.3,0,0.593,0.593);

	this.instance_1 = new lib.cloud();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,39.5,0.632,0.632);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,163.8,89.4), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.point();
	this.instance.parent = this;
	this.instance.setTransform(28.8,0,0.557,0.557);

	this.instance_1 = new lib.cloud();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,13.6,0.328,0.328);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,84.9,39.5), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.map();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.81,0.81);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,566.8,345), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.back();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,500,366), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.lamp();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,64,200), null);


(lib.Symbol43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol44();
	this.instance.parent = this;
	this.instance.setTransform(224,85.5,1,1,0,0,0,224,85.5);
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Layer 1
	this.instance_1 = new lib.butty();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,448,171);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol43();
	this.instance.parent = this;
	this.instance.setTransform(224,85.5,1,1,0,0,0,224,85.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol27, new cjs.Rectangle(0,0,448,171), null);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol27();
	this.instance.parent = this;
	this.instance.setTransform(224,85.5,1,1,0,0,0,224,85.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.97,scaleY:0.97,y:85.6},4,cjs.Ease.get(-1)).to({regX:224.1,regY:85.6,scaleX:0.92,scaleY:0.92,x:224.1},5,cjs.Ease.get(1)).to({scaleX:0.96,scaleY:0.96},5,cjs.Ease.get(-1)).to({regX:224,regY:85.5,scaleX:1,scaleY:1,x:224,y:85.5},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,448,171);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 42
	this.instance = new lib.Symbol42();
	this.instance.parent = this;
	this.instance.setTransform(289.1,16.4,1.463,1.463,0,0,0,15.6,15.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({_off:false},0).to({scaleX:1,scaleY:1,x:237.7,y:16.3,alpha:1},9,cjs.Ease.get(1)).wait(108).to({scaleX:1.46,scaleY:1.46,x:289.1,y:16.4,alpha:0},9,cjs.Ease.get(-1)).wait(2));

	// Symbol 41
	this.instance_1 = new lib.Symbol41();
	this.instance_1.parent = this;
	this.instance_1.setTransform(235.5,16.1,1.463,1.463,0,0,0,15.7,16.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).to({scaleX:1,scaleY:1,x:201.1,alpha:1},9,cjs.Ease.get(1)).wait(108).to({scaleX:1.46,scaleY:1.46,x:235.5,alpha:0},9,cjs.Ease.get(-1)).wait(3));

	// Symbol 40
	this.instance_2 = new lib.Symbol40();
	this.instance_2.parent = this;
	this.instance_2.setTransform(181.9,15.8,1.463,1.463,0,0,0,14.8,15.7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({_off:false},0).to({regX:14.7,regY:15.8,scaleX:1,scaleY:1,x:164.3,y:16,alpha:1},9,cjs.Ease.get(1)).wait(108).to({regX:14.8,regY:15.7,scaleX:1.46,scaleY:1.46,x:181.9,y:15.8,alpha:0},9,cjs.Ease.get(-1)).wait(4));

	// Symbol 39
	this.instance_3 = new lib.Symbol39();
	this.instance_3.parent = this;
	this.instance_3.setTransform(127.2,16.9,1.463,1.463,0,0,0,15.8,15.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({_off:false},0).to({scaleX:1,scaleY:1,x:127.1,y:16.7,alpha:1},9,cjs.Ease.get(1)).wait(108).to({scaleX:1.46,scaleY:1.46,x:127.2,y:16.9,alpha:0},9,cjs.Ease.get(-1)).wait(5));

	// Symbol 38
	this.instance_4 = new lib.Symbol38();
	this.instance_4.parent = this;
	this.instance_4.setTransform(73.5,16.4,1.463,1.463,0,0,0,16,16.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3).to({_off:false},0).to({regX:15.9,scaleX:1,scaleY:1,x:90.2,y:16.3,alpha:1},9,cjs.Ease.get(1)).wait(108).to({regX:16,scaleX:1.46,scaleY:1.46,x:73.5,y:16.4,alpha:0},9,cjs.Ease.get(-1)).wait(6));

	// Symbol 37
	this.instance_5 = new lib.Symbol37();
	this.instance_5.parent = this;
	this.instance_5.setTransform(19.1,16.4,1.463,1.463,0,0,0,16,16);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({_off:false},0).to({scaleX:1,scaleY:1,x:53.1,y:16.3,alpha:1},9,cjs.Ease.get(1)).wait(108).to({scaleX:1.46,scaleY:1.46,x:19.1,y:16.4,alpha:0},9,cjs.Ease.get(-1)).wait(8));

	// Symbol 36
	this.instance_6 = new lib.Symbol36();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-35,16.2,1.463,1.463,0,0,0,16.1,16);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleX:1,scaleY:1,x:16.1,alpha:1},9,cjs.Ease.get(1)).wait(108).to({scaleX:1.46,scaleY:1.46,x:-35,alpha:0},9,cjs.Ease.get(-1)).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.6,-7.2,47,46.8);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 35
	this.instance = new lib.Symbol35();
	this.instance.parent = this;
	this.instance.setTransform(401.4,16,1.98,1.98,0,0,0,15.2,15.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({_off:false},0).to({scaleX:1,scaleY:1,x:274.4,alpha:1},9,cjs.Ease.get(1)).wait(42).to({scaleX:1.98,scaleY:1.98,x:401.4,alpha:0},9,cjs.Ease.get(-1)).to({_off:true},12).wait(1));

	// Symbol 34
	this.instance_1 = new lib.Symbol34();
	this.instance_1.parent = this;
	this.instance_1.setTransform(329.6,16.8,1.98,1.98,0,0,0,16.1,15.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).to({scaleX:1,scaleY:1,x:238.2,y:16.4,alpha:1},9,cjs.Ease.get(1)).wait(46).to({scaleX:1.98,scaleY:1.98,x:329.6,y:16.8,alpha:0},9,cjs.Ease.get(-1)).to({_off:true},10).wait(1));

	// Symbol 33
	this.instance_2 = new lib.Symbol33();
	this.instance_2.parent = this;
	this.instance_2.setTransform(256.4,16.1,1.98,1.98,0,0,0,15.1,15.9);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(8).to({_off:false},0).to({scaleX:1,scaleY:1,x:201.2,alpha:1},9,cjs.Ease.get(1)).wait(50).to({scaleX:1.98,scaleY:1.98,x:256.4,alpha:0},9,cjs.Ease.get(-1)).to({_off:true},8).wait(1));

	// Symbol 32
	this.instance_3 = new lib.Symbol32();
	this.instance_3.parent = this;
	this.instance_3.setTransform(182.9,16.4,1.98,1.98,0,0,0,16,16);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(7).to({_off:false},0).to({scaleX:1,scaleY:1,x:164.1,y:16.2,alpha:1},9,cjs.Ease.get(1)).wait(52).to({scaleX:1.98,scaleY:1.98,x:182.9,y:16.4,alpha:0},9,cjs.Ease.get(-1)).to({_off:true},7).wait(1));

	// Symbol 31
	this.instance_4 = new lib.Symbol31();
	this.instance_4.parent = this;
	this.instance_4.setTransform(109.5,14.6,1.98,1.98,0,0,0,15.7,15.3);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(6).to({_off:false},0).to({scaleX:1,scaleY:1,x:127,y:15.3,alpha:1},9,cjs.Ease.get(1)).wait(54).to({scaleX:1.98,scaleY:1.98,x:109.5,y:14.6,alpha:0},9,cjs.Ease.get(-1)).to({_off:true},6).wait(1));

	// Symbol 30
	this.instance_5 = new lib.Symbol30();
	this.instance_5.parent = this;
	this.instance_5.setTransform(35.8,16.3,1.98,1.98,0,0,0,15.7,16);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4).to({_off:false},0).to({regX:15.6,scaleX:1,scaleY:1,x:89.7,y:16.2,alpha:1},9,cjs.Ease.get(1)).wait(58).to({regX:15.7,scaleX:1.98,scaleY:1.98,x:35.8,y:16.3,alpha:0},9,cjs.Ease.get(-1)).to({_off:true},4).wait(1));

	// Symbol 29
	this.instance_6 = new lib.Symbol29();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-37.8,16.1,1.98,1.98,0,0,0,15.4,15.8);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(2).to({_off:false},0).to({scaleX:1,scaleY:1,x:52.6,alpha:1},9,cjs.Ease.get(1)).wait(62).to({scaleX:1.98,scaleY:1.98,x:-37.8,alpha:0},9,cjs.Ease.get(-1)).to({_off:true},2).wait(1));

	// Symbol 28
	this.instance_7 = new lib.Symbol28();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-110.1,16,1.98,1.98,0,0,0,16.1,16);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleX:1,scaleY:1,x:16.1,alpha:1},9,cjs.Ease.get(1)).wait(66).to({scaleX:1.98,scaleY:1.98,x:-110.1,alpha:0},9,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-142,-15.7,63.7,63.4);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol23();
	this.instance.parent = this;
	this.instance.setTransform(146.7,15.5,1.178,1.178,0,0,0,126.7,16.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(85).to({_off:false},0).wait(135));

	// Layer 1
	this.instance_1 = new lib.Symbol22();
	this.instance_1.parent = this;
	this.instance_1.setTransform(144.8,11.1,1,1,0,0,0,144.8,16.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},85).wait(135));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-142,-20.7,63.7,63.4);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol26();
	this.instance.parent = this;
	this.instance.setTransform(400,225,1,1,0,0,0,400,225);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:400.1,rotation:4.6,x:400.2,y:225.1},9,cjs.Ease.get(-1)).to({regX:400,rotation:10,x:400,y:225},10,cjs.Ease.get(1)).to({regX:399.9,rotation:4.8,x:399.9,y:225.1},10,cjs.Ease.get(-1)).to({regX:400,rotation:0,x:400,y:225},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,800,450);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_28 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(28).call(this.frame_28).wait(1));

	// Symbol 18
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF3300","#FFCC33","#940000","#940000"],[0,1,1,1],-314,0,314.1,0).s().p("EgxEABLIAAiVMBiJAAAIAACVg");
	this.shape.setTransform(293.7,452.6);

	this.instance = new lib.Symbol18();
	this.instance.parent = this;
	this.instance.setTransform(125.1,218.2,0.111,0.111,0,0,0,17.1,17.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance}]},6).to({state:[{t:this.instance}]},3).wait(15));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).to({regX:17,regY:17,scaleX:1.12,scaleY:1.12,y:218.1,alpha:1},6,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},3,cjs.Ease.get(1)).wait(15));

	// Symbol 17
	this.instance_1 = new lib.Symbol17();
	this.instance_1.parent = this;
	this.instance_1.setTransform(164.8,276.1,0.199,0.199,0,0,0,42.5,20.9);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11).to({_off:false},0).to({scaleX:1.11,scaleY:1.11,x:164.9,y:276,alpha:1},6,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:164.8},3,cjs.Ease.get(1)).wait(9));

	// Symbol 16
	this.instance_2 = new lib.Symbol16();
	this.instance_2.parent = this;
	this.instance_2.setTransform(246.3,218.7,0.145,0.145,0,0,0,81.9,38.9);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(17).to({_off:false},0).to({scaleX:1.1,scaleY:1.1,y:218.8,alpha:1},6,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,y:218.7},3,cjs.Ease.get(1)).wait(3));

	// Symbol 15
	this.instance_3 = new lib.Symbol15();
	this.instance_3.parent = this;
	this.instance_3.setTransform(431.4,233.6,0.133,0.133,0,0,0,81.9,35);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({_off:false},0).to({regX:82,scaleX:1.1,scaleY:1.1,y:233.7,alpha:1},6,cjs.Ease.get(-1)).to({regX:81.9,scaleX:1,scaleY:1,x:431.3,y:233.6},3,cjs.Ease.get(1)).wait(17));

	// Symbol 14
	this.instance_4 = new lib.Symbol14();
	this.instance_4.parent = this;
	this.instance_4.setTransform(499.4,185.1,0.199,0.199,0,0,0,42.5,18.4);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(14).to({_off:false},0).to({regY:18.5,scaleX:1.17,scaleY:1.17,y:185.2,alpha:1},6,cjs.Ease.get(-1)).to({regY:18.4,scaleX:1,scaleY:1,y:185},3,cjs.Ease.get(1)).wait(6));

	// Symbol 13
	this.instance_5 = new lib.Symbol13();
	this.instance_5.parent = this;
	this.instance_5.setTransform(443.3,108.1,0.109,0.109,0,0,0,81.9,41.4);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(6).to({_off:false},0).to({regY:41.5,scaleX:1.12,scaleY:1.12,alpha:1},6,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},3,cjs.Ease.get(1)).wait(14));

	// Symbol 12
	this.instance_6 = new lib.Symbol12();
	this.instance_6.parent = this;
	this.instance_6.setTransform(324.8,182.1,0.152,0.152,0,0,0,42.5,20.4);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(19).to({_off:false},0).to({scaleX:1.12,scaleY:1.12,x:324.9,y:182,alpha:1},6,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},3,cjs.Ease.get(1)).wait(1));

	// Symbol 11
	this.instance_7 = new lib.Symbol11();
	this.instance_7.parent = this;
	this.instance_7.setTransform(374.3,161.6,0.176,0.176,0,0,0,42.5,17.9);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({_off:false},0).to({regY:18,scaleX:1.12,scaleY:1.12,x:374.4,alpha:1},6,cjs.Ease.get(-1)).to({regY:17.9,scaleX:1,scaleY:1,y:161.5},3,cjs.Ease.get(1)).wait(19));

	// Symbol 10
	this.instance_8 = new lib.Symbol10();
	this.instance_8.parent = this;
	this.instance_8.setTransform(267.8,142.6,0.176,0.176,0,0,0,42.5,18.5);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(10).to({_off:false},0).to({scaleX:1.22,scaleY:1.22,x:267.9,y:142.7,alpha:1},6,cjs.Ease.get(-1)).to({regY:18.4,scaleX:1,scaleY:1,y:142.5},3,cjs.Ease.get(1)).wait(10));

	// Symbol 9
	this.instance_9 = new lib.Symbol9();
	this.instance_9.parent = this;
	this.instance_9.setTransform(205.3,115.1,0.186,0.186,0,0,0,42.5,22.1);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(5).to({_off:false},0).to({regY:22,scaleX:1.11,scaleY:1.11,x:205.4,y:115.2,alpha:1},6,cjs.Ease.get(-1)).to({regY:21.9,scaleX:1,scaleY:1,x:205.3,y:115},3,cjs.Ease.get(1)).wait(15));

	// Symbol 8
	this.instance_10 = new lib.Symbol8();
	this.instance_10.parent = this;
	this.instance_10.setTransform(120.3,144.4,0.151,0.151,0,0,0,81.9,44.6);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(13).to({_off:false},0).to({regX:82,regY:44.7,scaleX:1.07,scaleY:1.07,x:120.4,alpha:1},6,cjs.Ease.get(-1)).to({regX:81.9,scaleX:1,scaleY:1,x:120.2},3,cjs.Ease.get(1)).wait(7));

	// Symbol 7
	this.instance_11 = new lib.Symbol7();
	this.instance_11.parent = this;
	this.instance_11.setTransform(90.8,87.4,0.223,0.223,0,0,0,42.5,19.8);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(8).to({_off:false},0).to({scaleX:1.13,scaleY:1.13,x:90.9,alpha:1},6,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:90.8},3,cjs.Ease.get(1)).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.3,445.1,628.2,15);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(420,286.5,0.547,0.547,0,0,0,32.2,100.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:32,regY:100,x:420.1,y:286.3},2).wait(1).to({rotation:2.8,x:417.4,y:287.1},9,cjs.Ease.get(-1)).to({rotation:6,x:414.3,y:287.9},10,cjs.Ease.get(1)).to({regX:32.1,regY:100.2,rotation:2.8,x:417.3,y:287.2},10,cjs.Ease.get(-1)).to({rotation:0.3,x:419.9,y:286.5},7,cjs.Ease.get(1)).wait(1));

	// Layer 4
	this.instance_1 = new lib.Symbol3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(386.4,342.7,0.717,0.765,0,-6.1,173.9,31.9,100.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:100,scaleX:0.72,skewX:-3.8,skewY:176.2,x:383.1,y:341.8},4).to({regX:32,scaleY:0.77,skewX:0,skewY:180,x:377.6,y:340.6},10,cjs.Ease.get(1)).wait(1).to({regX:31.9,scaleY:0.77,skewX:-3.8,skewY:176.2,x:382.7,y:341.9},9,cjs.Ease.get(-1)).to({regX:32,scaleY:0.77,skewX:-8,skewY:172,x:388.4,y:343.1},10,cjs.Ease.get(1)).to({regX:31.9,scaleX:0.72,scaleY:0.77,skewX:-6.8,skewY:173.2,x:387.2,y:342.8},5,cjs.Ease.get(-1)).wait(1));

	// Layer 3
	this.instance_2 = new lib.Symbol3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(460.9,251.3,1,1,3,0,0,32,100.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:100,rotation:5.5,x:456.9,y:252.2},9).wait(1).to({rotation:2.8,x:461.5,y:250.9},9,cjs.Ease.get(-1)).to({rotation:0,x:466.6,y:249.6},10,cjs.Ease.get(1)).to({rotation:2.6,x:461.8,y:250.9},10,cjs.Ease.get(-1)).wait(1));

	// Layer 2
	this.instance_3 = new lib.Symbol3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(349.8,210.8,0.844,0.844,1.3,0,0,32,100.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:100,rotation:0,x:351.6,y:210.2},5).wait(1).to({rotation:4.8,x:345.8,y:211.6},9,cjs.Ease.get(-1)).to({regY:100.1,rotation:10.2,x:339.1,y:213.2},10,cjs.Ease.get(1)).to({regY:100,rotation:5,x:345.4,y:211.6},10,cjs.Ease.get(-1)).to({rotation:1.8,x:349.4,y:210.7},4,cjs.Ease.get(1)).wait(1));

	// Layer 1
	this.instance_4 = new lib.Symbol3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(292.1,292.1,1,1,0,0,0,32,100);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:3.5,x:285.8,y:293.7},9,cjs.Ease.get(-1)).to({rotation:7.5,x:278.8,y:295.4},10,cjs.Ease.get(1)).to({regX:32.1,rotation:3.6,x:285.5,y:293.7},10,cjs.Ease.get(-1)).to({regX:32,rotation:0,x:292.1,y:292.1},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(260.1,125.7,238.1,295.5);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(313.9,-272.2,0.655,0.655,0,0,0,32,100);

	this.instance_1 = new lib.Symbol4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(622.6,-89.8,0.687,0.826,0,0,180,250,183);

	this.instance_2 = new lib.Symbol2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(807,-271.2,0.655,0.655,0,0,0,32,100);

	this.instance_3 = new lib.Symbol4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(937.7,-89.8,0.638,0.826,0,0,0,250,183);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(451,-255.3,661.1,316.7), null);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol24();
	this.instance.parent = this;
	this.instance.setTransform(145.5,55.5,0.649,0.649,0,0,0,224.1,85.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(54).to({y:-49.5},15,cjs.Ease.get(1)).wait(130).to({y:73.5},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,290.9,111);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// drago
	this.instance = new lib.Symbol19();
	this.instance.parent = this;
	this.instance.setTransform(297.2,251.1,0.64,0.64,0,0,0,400.1,225);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({_off:false},0).to({y:23.1},19,cjs.Ease.get(1)).wait(13).to({regX:400.2,y:23.2},0).to({regX:400.1,y:23.1},10).wait(25).to({regY:224.8,scaleX:0.71,scaleY:0.71,y:23,alpha:0},10).to({_off:true},1).wait(135));

	// point
	this.instance_1 = new lib.Symbol5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(284.5,-23.5,1,1,0,0,0,283.4,172.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(84).to({_off:false},0).wait(115).to({rotation:-17.5,x:211.3,y:316.8},15,cjs.Ease.get(-1)).wait(6));

	// map
	this.instance_2 = new lib.Symbol6();
	this.instance_2.parent = this;
	this.instance_2.setTransform(322.9,371,1,1,18.5,0,0,283.4,172.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:0,x:279.1,y:16.1},10,cjs.Ease.get(1)).wait(189).to({rotation:-17.5,x:218.1,y:356},15,cjs.Ease.get(-1)).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,117.6,646.9,506.7);


// stage content:
(lib.drago600300 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// butty.png
	this.instance = new lib.Symbol25();
	this.instance.parent = this;
	this.instance.setTransform(300,367.6,1,1,0,0,0,145.4,55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// dragmappoint
	this.instance_1 = new lib.Symbol21();
	this.instance_1.parent = this;
	this.instance_1.setTransform(732,432.1,1,1,0,0,0,710.6,225);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// texts
	this.instance_2 = new lib.Symbol20();
	this.instance_2.parent = this;
	this.instance_2.setTransform(304.3,39.1,1,1,0,0,0,144.8,16.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// back
	this.instance_3 = new lib.Symbol1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-232.6,439.1,1,1,0,0,0,250,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(268.3,133.7,699.5,847.7);
// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/back.jpg?1485161757904", id:"back"},
		{src:"images/butty.png?1485161757904", id:"butty"},
		{src:"images/car.png?1485161757904", id:"car"},
		{src:"images/cloud.png?1485161757904", id:"cloud"},
		{src:"images/drago.png?1485161757904", id:"drago"},
		{src:"images/lamp.png?1485161757904", id:"lamp"},
		{src:"images/map.png?1485161757904", id:"map"},
		{src:"images/pad.png?1485161757904", id:"pad"},
		{src:"images/phone.png?1485161757904", id:"phone"},
		{src:"images/point.png?1485161757904", id:"point"},
		{src:"images/slot.png?1485161757904", id:"slot"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;