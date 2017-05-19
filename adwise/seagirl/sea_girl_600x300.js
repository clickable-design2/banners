(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.bedro_left = function() {
	this.initialize(img.bedro_left);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,103,107);


(lib.bedro_right = function() {
	this.initialize(img.bedro_right);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,66,121);


(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,525);


(lib.body = function() {
	this.initialize(img.body);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,119,203);


(lib.head = function() {
	this.initialize(img.head);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,73,73);


(lib.hvost = function() {
	this.initialize(img.hvost);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,54,109);


(lib.ladon = function() {
	this.initialize(img.ladon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,26,50);


(lib.leg_left = function() {
	this.initialize(img.leg_left);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,42,89);


(lib.leg_right = function() {
	this.initialize(img.leg_right);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,94,85);


(lib.nog1 = function() {
	this.initialize(img.nog1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,65,111);


(lib.nog2 = function() {
	this.initialize(img.nog2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,39,119);


(lib.perf1 = function() {
	this.initialize(img.perf1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,27,25);


(lib.perf2 = function() {
	this.initialize(img.perf2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,56);


(lib.ple4o_left = function() {
	this.initialize(img.ple4o_left);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,61,33);


(lib.ple4o_right = function() {
	this.initialize(img.ple4o_right);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,89,48);


(lib.pra_ruk = function() {
	this.initialize(img.pra_ruk);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,58,109);


(lib.ruka_left = function() {
	this.initialize(img.ruka_left);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,23,62);


(lib.tits = function() {
	this.initialize(img.tits);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,77,52);


(lib.verev = function() {
	this.initialize(img.verev);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,23,22);


(lib.verev2 = function() {
	this.initialize(img.verev2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,21,20);// helper functions:

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


(lib.Символ63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.perf1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ63, new cjs.Rectangle(0,0,27,25), null);


(lib.Символ62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.perf2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ62, new cjs.Rectangle(0,0,64,56), null);


(lib.Символ60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC33").s().p("AmCi+IC8AAIAMgEIGPAAIgBAEICvAAImDGBg");
	this.shape.setTransform(38.7,79.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ60, new cjs.Rectangle(0,60,77.4,39.1), null);


(lib.Символ56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.nog1();
	this.instance.parent = this;
	this.instance.setTransform(130.9,0,1.279,1.279,67.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ56, new cjs.Rectangle(0,0,163,131.6), null);


(lib.Символ55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.nog2();
	this.instance.parent = this;
	this.instance.setTransform(146.6,0,1.279,1.279,74.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ55, new cjs.Rectangle(0,0,160,88.9), null);


(lib.Символ54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FF00").s().p("AhWBVQgCgEgCgIQgFgdAIgaQAJgSADgKQADgMABgJIABgWQACgMAHgHQAFgEAJgCIARgDIAVgHQAPgEAhAGQAPADAFAFQAFAEAEAJIAGAOIADANQAGAmAFASQAFARAAAJQgBAKgIAQQgDAGgEADQgFADgFgCQgFgCAAgNQABgMgDgTQgBgHgCgCQgCgDgGgCIgMgEQgHgBgMADQgsAIgYAQQgJAGgCAGQgCAEAAAGIgBALQAAAGgDAEQgDAFgFAAIgCAAQgGAAgDgFg");
	this.shape.setTransform(9.3,9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ54, new cjs.Rectangle(0,0,18.6,18.1), null);


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FF00").s().p("AhBBjQgGgEgDgLIgBgRQgBgJgIgXIgIgXQgDgLgFgHIgIgNQgIgRAMgRQAJgMAUgKIAhgOIAQgIQAPgFASADQARAEALAGQAXAOAVAnQAQAeALAaQAIAVgCAMQgBAIgEAEQgGAGgIgDQgCgCgFgLQgGgRgNgNQgGgFgEgBQgGgCgLADQgmANgNAJQgcARgGAbQgBAJgEADQgDADgEAAQgFAAgDgCg");
	this.shape.setTransform(11.2,10.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ49, new cjs.Rectangle(0,0,22.5,20.3), null);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.verev();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ46, new cjs.Rectangle(0,0,23,22), null);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FF00").s().p("AirDtQghgHgPgEQgbgIgSgMQgWgOgdgkQgeglgLgbQgPgmACg5QAFhCABghQABgpAEgOQAGgSARgZQAbglAYgFQALgCAQADIAaAIQALADA9AMQAtAJAZAOIAbASQAQALAMAEQAUAHApgBQAPAAAHgCQANgCAHgGQAHgFAIgOQAIgOAGgFQAZgXA2AXQAoARAmAVQA3AfAYAfQAuA7gMBkQgEAlgLATQgIAPgYAZIgiAjQgNAOgIAGQgMAJgMADQgOAEgUgEIgjgJQgbgGgiACQgUABgqAGQgyAGgdAJIgfAJQgSAGgNABIgQABQgZAAgngHg");
	this.shape.setTransform(37,24.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ45, new cjs.Rectangle(0,0,74.1,48.8), null);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FF00").s().p("AArE+QgGgFgDgKIgDgTQgFgagYgYQgOgQgggXIhFgwQg3gnghgOQgcgMg7gNIh3gaQgYgFgHgLQgFgJABgNQABgrAMgmIAKgeQAGgSADgMQACgLABgSIACgdQAEgdAWg4QAFgOAGgFQAGgFARgBQAkgBA1APIBXAYQAeAHBIAHQAjAEATgEIASgGQALgEAIAAQAJABANAEIAUAIQAbAHArgQQA1gVASgBQALgBAXAAQAUAAAKgIIAXgWQANgNALADQAJADAJANQAuBDATBSIAHAgQAGASAJALIAKAKQAGAHACAFQAKAXgiAfQigCXijCpQgMANgNAGQgHADgGAAQgHAAgGgFg");
	this.shape.setTransform(44.3,32.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ42, new cjs.Rectangle(0,0,88.7,64.5), null);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#290404").s().p("ArAEGIglgLQgTgGgQgKQgRgJgPgNQgOgLgLgPQALAIANAHQAQAKATAGIAlALIAnADQAXAAAVgEQAVgEAUgIQAngPAegmQAPgTAKgXIAGgRIAoAAQgEAbgJAXQgKAXgPATQgeAmgnAPQgUAIgVAEQgVAEgXAAgAHjEGIAAgjIDUjRIAABCIi1CygALYEFIAAghIBJAAIAAl2IAhAAIAAGXgACXEFIAAghIDiAAIAAhAIAhAAIAABhgAgpEFIAAghIBJAAIAAl0IAhAAIAAGVgAkREFIAAghIBJAAIAAijIB+AAIAAAhIhdAAIAACjgADgCDIAAhCICIAAIAAg8IAhAAIAABdIiIAAIAAAhgAsDBnQgPgRgHgTQgGgUAAgWQAAgyAbgeQAcgfAuAAQAiAAAWAPQARALAJASQgUgLgdAAQguAAgcAfQgbAdAAAzQAAAWAGAUQAEALAHALQgMgIgKgLgAIsiQIAhAAIAACGIghAegApAAEQgHgTgNgNIBZAAQgHgwgbgiQAPAMAOAQQAeAkAIAygADggbIAAg6ICUAAIAAg7IAhAAIAABcIiUAAIAAAZgAjIgeIAAhyIAhAAIAABygAJ7isQgRgGgNgMQgJgIgGgMIAMAFQASAGAWAAQAvAAAYgYQAQgPAHgaIAlAEQgCAugZAYQgYAYgvAAQgWAAgSgGg");
	this.shape.setTransform(90.7,26.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AqsEHIglgLQgTgGgQgKQgNgGgKgJIgJgGQgdgZgSgoQgJgVgEgWQgFgXAAgYQAAgZAFgYQAEgVAJgUQASgpAdgZQAPgMARgKQAQgJATgHQAkgNAoAAQAWAAAVADQAVAEATAIQAnAPAfAkIAEAFQAbAjAHAvIhZAAIgNAAIgHgOQgJgSgRgLQgWgPgiAAQguABgcAeQgbAdAAAzQAAAWAGAUQAHAUAPAQQAKAMAMAHIAKAFQASAIAXAAQAiAAAYgQQAYgQAIggIBmAAQgCARgFAQIgGARQgKAYgPASQgeAmgnAQQgUAHgVAEQgVAEgXAAgAH3EHIAAmWIBqAAIAAAhIAACkIAhgfICzioIAhAAIAAAhIAAF2IhJAAIghAAIAAiQIAAhBIjUDQIgCACgADMEGIghAAIAAmVID+AAIAAAhIAAA7IiUAAIAAA6IAhAAIBnAAIAAAgIAAA8IiIAAIAABCIAhAAIB4AAIAAAhIAABAgAALEGIggAAIAAiBIAAgiIh+AAIAACjIhJAAIghAAIAAmVIBqAAIAAAhIAABxIAhAAIBdAAIAAiSIBqAAIAAAhIAAF0gAKPirIgMgFQgKgFgIgHQgZgZgBguIA5gGQABAQAKAHQAJAIASAAQASAAALgIQAKgHACgQIA6AGQgBAQgDANQgHAagQAQQgYAYgvAAQgWgBgSgGg");
	this.shape_1.setTransform(85.4,23.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ39, new cjs.Rectangle(0,-3.5,174.1,56.5), null);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF02").s().p("Ap8CeIggAAIAAghIioAAIAAAhIgWAAIgiAAIAAhfIALAAQAQAAAFgIQAGgHACgVIAWi1IDAAAIAAAhIAAC4IAcAAIAABfgAsMAeQAAANgEAJQgDAIgGAEIAuAAIAlAAIAAh6IAAghIg5AAgAMaCDQgMgCgJgIQgMgKAAgQQAAgRAMgKQAKgJAQgBIACAAQARAAALAKQAGAFACAIQACAEABAGIAAAEQAAAQgLAKQgLAKgRAAIgHAAgAlBB/IgCAAQgMAAgOgCIgIgBIACghIAAgUQAXACAIgHQAHgHACgXIAUi+IDFAAIAAAhIAAD2IgnAAIgiAAIAAi1IAAghIg8AAIgLB/QgCAVgDAPQgFAQgFAJQgMATgXAHQgLACgNAAIgFAAgAHxB9IghAAIAAkXIBHAAIAAAhIAAAyIAhAAIASAAQAWABATAGQARAHAMALQAKAJAHAMIADAGQAIAOACAPQACAQgCARQgCAQgIAPQgIAPgMALQgMAMgRAGQgTAHgWAAgAIXA9IAhAAIASAAQAMAAAJgIQAHgHACgKIABgKIgBgJQgDgKgHgHQgIgGgMAAIgzAAgAFBB9IgiAAIAAi2IAAghIgkAAIghAAIAAhAIDRAAIAAAhIAAAfIhFAAIAADXgACeB9IgSAAIgBgCIgPghIhqAAIgQAjIgfAAIgjAAIgJAAIAAgKIAJgSIB2j+IAiAAIAQAhIBvDvIAAAKgAAqAdIAvAAIALAAIgFgMIgYg2gAoQB9IggAAIAAkXICuAAIAAAhIAAAfIhlAAIAAAnIAhAAIA8AAIAAAhIAAAeIhdAAIAAAuIAhAAIBIAAIAAAhIAAAigAMiAvIglAAQgBgRAFgOQAEgOAJgKIASgSQAJgKAHgLIAFgMQACgGABgGQAAgKgIgGQgJgGgKABQgMAAgIAGQgIAHAAAOIgXAAIglAAQAAgWAGgRQAGgQANgMQAMgMAQgGQARgGATAAQAqgBAaAYQAKAKAHALQAJASAAAWQAAARgFANQgHAOgJAKIgRATQgHAKgGAMQgFALAAANg");
	this.shape.setTransform(89.3,15.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#290404").s().p("AqdCeIAAghIAaAAIAAhfIgcAAIAAi4IAiAAIAADZIAbAAIAABfgAt7CeIAAghIAWAAIAAghICoAAIAAAhIiHAAIAAAhgAMFB5QgLgJgBgOIAHAAQARAAALgKQALgKAAgQIAAgEQANACAJAIQALAKAAAQQAAARgLAKQgLAKgRAAQgRAAgLgKgAlBB/QgPAAgVgEIABgdIACAAQAQABANgDQAXgHAMgTQAFgJAFgQQADgPACgVIALh/IA8AAIAAAhIgbAAIgLB/QgCAVgEAPQgEAQgFAJQgLAUgZAGQgKACgNAAIgFAAgAHQB9IAAghIBZAAQAWAAATgHQARgGAMgMQAMgLAIgPQAIgPACgQQACgQgCgQQgCgQgIgOIgDgGQAJAFAIAHQALALAIAPQAIAPACAQQACAQgCAQQgCAQgIAPQgIAPgLALQgMAMgTAGQgRAHgXAAgAEgB9IAAghIAlAAIAAjXIBFAAIAAgfIAgAAIAABAIhDAAIAADXgACMB9IgPghIA5AAIAAgKIhvjvIARAAICAEQIAAAKgAhJB9IAAgKIALgXIAgAAIAQgjIBpAAIAPAhIhXAAIgRAjgAiqB9IAAghIAnAAIAAj2IAiAAIAADaIgJASIAAAKIAJAAIAAAhgAoxB9IAAghICSAAIAAgiIAbAAIgCAhIAIABIAAAhgAMkAwQgCgIgGgFQgLgKgRAAIgCAAIACgKIABgBIAiAAQAAgNAFgKQAGgMAHgKIARgUQAJgKAHgOQAFgNAAgRQAAgWgJgSQAJAFAHAHQAbAYAAAlQAAAQgHAOQgGAOgIALIgRASQgJAKgFALQgGAMACAOgAs6AfQAGgEADgIQAEgJAAgMIANh6IA5AAIAAAhIgYAAIgNB5IAAABgAH2AcIAAhDIAzAAQAMAAAIAHQAHAHADAKIABAJIgxAAIAAAigAoIAZIAAgtIBdAAIAAgfIAhAAIAAA/IhdAAIAAANgAAJgDIAdhDIAYA3IgGAMgALFhCQAAgSAEgOIAXAAQAAgOAIgHQAIgGAMAAQAKgBAJAGQAIAGAAAKQgBAGgCAGQgGACgFAEQgIAHAAANgAoIhUIAAgnIBlAAIAAgfIAiAAIAABAIhmAAIAAAGgADahaIAAghIAkAAIAAAhgAH2hoIAAgyIAhAAIAAAyg");
	this.shape_1.setTransform(92.6,19.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ38, new cjs.Rectangle(0,0,181.8,34.9), null);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF02").s().p("AGnEwQg1gUgrgjIgGgFQgtgogag+Qgag/AAhPQAAgyALgtQAMgtAYglQAvhLBIgjQBHgjBUgBQAeABAdAFQAdAFAdAKQA4AWAtAmQAPAOAOAPIAMAQQASAaAOAfQANAgAHAjQAGAkAAAlQAACPhZBbQhZBaiOAAQg/gBg4gTgAGxh8QgXAXgMAeQgLAgAAAnQAABQAuAtQAIAIAJAGQAQAMASAHQAbAMAgAAQA/gBAvgsQAvgtAAhQQAAgmgMgfQgHgTgMgQQgHgKgJgJQgXgWgbgMQgbgKgfgBQhCABguArgAhnE4IghAAIAAm+IAAgiIh4AAIghAAIAAiOIHOAAIAAAhIAABtIiYAAIAAHggAn1E4IghAAIAAi2IAAgkQigAThNg4IgPgMQglglgTg/QgThBAAheIAAhgICkAAIAAAhIABB1IAFAqQAEAUAHALIATAUIALAHQAIAEALACIApADIA4gDIAAkAIChAAIAAAhIAAJNg");
	this.shape.setTransform(86.2,32.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#290404").s().p("AGKEpQg5gVgtgnQgOgMgMgPQAqAjA1ATQA5AUA/AAQCNAABZhaQBahaAAiOQAAgngHgjQgHgjgNggQgNgfgTgaIgMgQIAFAEQAWAUASAZQATAaANAfQANAgAHAjQAHAjAAAnQAACOhaBaQhZBaiNAAQg/AAg5gUgAikEyIAAghIB8AAIAAngICYAAIAAhtIAhAAIAACOIiYAAIAAHggAozEyIAAghICAAAIAApNIAhAAIAAJugAFzBVQgugsAAhPQAAgoALggQAMgfAXgWQAvgsBBAAQAgAAAbALQAbAMAXAWQAJAJAHAJQgQgLgRgIQgbgLggAAQhBAAgvAsQgXAWgMAfQgLAgAAAoQAABAAfApQgJgGgJgJgAsvAmQgJgJgJgMQBOA5CfgTIAAAkIgpACQh3AAg7g3gArShqIgUgUQgHgLgDgVIgGgpIgBh1IAhAAIABCWIAGApQACAQAFAKIgKgHgAk9iuIAAghIB4AAIAAAhg");
	this.shape_1.setTransform(92.4,36.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ37, new cjs.Rectangle(0,0,175.8,68), null);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AGvAAQAACzh+B+Qh+B+izAAQixAAh+h+Qh/h+AAizQAAixB/h+QB+h/CxAAQCzAAB+B/QB+B+AACxg");
	this.shape.setTransform(43.1,43.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ33, new cjs.Rectangle(-1,-1,88.1,88.1), null);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AECAAQAABrhMBLQhLBMhrAAQhqAAhMhMQhLhLAAhrQAAhqBLhMQBMhLBqAAQBrAABLBLQBMBMAABqg");
	this.shape.setTransform(25.8,25.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ32, new cjs.Rectangle(-1,-1,53.6,53.6), null);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#000000","rgba(0,0,0,0)"],[0,1],0,0,0,0,0,43.7).s().p("AkwEwQh9h9gBizQABiyB9h+QB+h9CygBQCzABB9B9QB+B+ABCyQgBCzh+B9Qh9B+izABQiygBh+h+g");
	this.shape.setTransform(43.1,43.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkwEwQh9h9gBizQABiyB9h+QB+h9CygBQCzABB9B9QB+B+ABCyQgBCzh+B9Qh9B+izABQiygBh+h+g");
	this.shape_1.setTransform(43.1,43.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ31, new cjs.Rectangle(0,0,86.1,86.1), null);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],-180.9,0,180.9,0).s().p("EgcQAghMAAAhBBMA4hAAAMAAABBBg");
	this.shape.setTransform(180.9,208.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ30, new cjs.Rectangle(0,0,361.8,416.2), null);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hvost();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ21, new cjs.Rectangle(0,0,54,109), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bedro_left();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(0,0,103,107), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bedro_right();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(0,0,66,121), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.head();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(0,0,73,73), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ladon();
	this.instance.parent = this;
	this.instance.setTransform(-20,4.2,1,1,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(-20,-2.5,38.1,55.1), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.leg_left();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(0,0,42,89), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ple4o_left();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(0,0,61,33), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.leg_right();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(0,0,94,85), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pra_ruk();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(0,0,58,109), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ruka_left();
	this.instance.parent = this;
	this.instance.setTransform(-13.5,0,1,1.023,0,-12.3,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(-13.5,0,36.5,62), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ple4o_right();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(0,0,89,48), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(0,0,700,525), null);


(lib.sprite136 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.sprite136, null, null);


(lib.shape142 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(8.9,1,1).p("AKKqJQELELAAF+QAAF+kLEMQkLEMl/AAQl+AAkLkMQkMkMAAl+QAAl+EMkLQELkMF+AAQF/AAELEMg");
	this.shape.setTransform(199.7,1.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(103.5,-94.4,192.3,192.3);


(lib.shape137 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AIoCbIxQibIRQiaIABAAIAAE1g");
	this.shape.setTransform(-51.2,2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-106.5,-13.3,110.7,31.1);


(lib.shape132 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEF1D4").s().p("AhVhAIAVgWICXCXIgWAWg");
	this.shape.setTransform(-73.1,-72.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEF1D4").s().p("AhVhAIAVgWICWCXIgVAWg");
	this.shape_1.setTransform(72.8,73);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FEF1D4").s().p("AhVBBICWiWIAVAVIiWCXg");
	this.shape_2.setTransform(-72.9,73.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FEF1D4").s().p("AhWBBICXiXIAVAWIiWCWg");
	this.shape_3.setTransform(73.1,-73);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81.7,-81.7,163.5,163.4);


(lib.Символ59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ60();
	this.instance.parent = this;
	this.instance.setTransform(38.6,49.6,1,1,0,0,0,38.6,49.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ59, new cjs.Rectangle(0,60,77.4,39.1), null);


(lib.Символ58копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ59();
	this.instance.parent = this;
	this.instance.setTransform(38.6,80.9,1,0.854,0,0,0,38.6,49.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:38.7,regY:79.5,scaleY:0.88,x:38.7,y:101.3},0).wait(1).to({scaleY:0.91,y:96.8},0).wait(1).to({scaleY:0.93,y:92.7},0).wait(1).to({scaleY:0.95,y:89.3},0).wait(1).to({scaleY:0.96,y:86.3},0).wait(1).to({scaleY:0.98,y:83.9},0).wait(1).to({scaleY:0.99,y:82},0).wait(1).to({scaleY:0.99,y:80.6},0).wait(1).to({scaleY:1,y:79.8},0).wait(1).to({regX:38.6,regY:49.6,scaleY:1,x:38.6,y:49.6},0).wait(1).to({regX:38.7,regY:79.5,scaleY:1,x:38.7,y:79.8},0).wait(1).to({scaleY:0.99,y:80.9},0).wait(1).to({scaleY:0.98,y:82.5},0).wait(1).to({scaleY:0.97,y:84.8},0).wait(1).to({scaleY:0.96,y:87.8},0).wait(1).to({scaleY:0.94,y:91.5},0).wait(1).to({scaleY:0.91,y:95.8},0).wait(1).to({scaleY:0.89,y:100.8},0).wait(1).to({regX:38.6,regY:49.5,scaleY:0.85,x:38.6,y:80.9},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,89.8,77.4,33.4);


(lib.Символ58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ59();
	this.instance.parent = this;
	this.instance.setTransform(38.6,49.6,1,1,0,0,0,38.6,49.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:38.7,regY:79.5,scaleY:1,x:38.7,y:79.8},0).wait(1).to({scaleY:0.99,y:80.9},0).wait(1).to({scaleY:0.98,y:82.5},0).wait(1).to({scaleY:0.97,y:84.8},0).wait(1).to({scaleY:0.96,y:87.8},0).wait(1).to({scaleY:0.94,y:91.5},0).wait(1).to({scaleY:0.91,y:95.8},0).wait(1).to({scaleY:0.89,y:100.8},0).wait(1).to({regX:38.6,regY:49.5,scaleY:0.85,x:38.6,y:80.9},0).wait(1).to({regX:38.7,regY:79.5,scaleY:0.88,x:38.7,y:101.3},0).wait(1).to({scaleY:0.91,y:96.8},0).wait(1).to({scaleY:0.93,y:92.7},0).wait(1).to({scaleY:0.95,y:89.3},0).wait(1).to({scaleY:0.96,y:86.3},0).wait(1).to({scaleY:0.98,y:83.9},0).wait(1).to({scaleY:0.99,y:82},0).wait(1).to({scaleY:0.99,y:80.6},0).wait(1).to({scaleY:1,y:79.8},0).wait(1).to({regX:38.6,regY:49.6,scaleY:1,x:38.6,y:49.6},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,60,77.4,39.1);


(lib.Символ57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ62();
	this.instance.parent = this;
	this.instance.setTransform(37.2,30.7,1,1,0,0,0,32,28);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8));

	// Слой 2
	this.instance_1 = new lib.Символ63();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-3.3,66.2,1,1,0,0,0,13.5,12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:5.5,y:59},4).to({x:-3.3,y:66.2},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.8,2.7,86,76);


(lib.Символ52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ54();
	this.instance.parent = this;
	this.instance.setTransform(9.2,9,1,1,0,0,0,9.2,9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.691},4,cjs.Ease.get(-1)).to({alpha:0.379},4,cjs.Ease.get(1)).to({alpha:0.691},4,cjs.Ease.get(-1)).to({alpha:1},4,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.6,18.1);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ49();
	this.instance.parent = this;
	this.instance.setTransform(11.2,10.1,1,1,0,0,0,11.2,10.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.691},4,cjs.Ease.get(-1)).to({alpha:0.379},4,cjs.Ease.get(1)).to({alpha:0.656},4,cjs.Ease.get(-1)).to({alpha:1},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,22.5,20.3);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ48();
	this.instance.parent = this;
	this.instance.setTransform(11.2,10.1,1,1,0,0,0,11.2,10.1);
	this.instance.alpha = 0.5;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(2).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ45();
	this.instance.parent = this;
	this.instance.setTransform(37.1,24.4,1,1,0,0,0,37.1,24.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.734},3,cjs.Ease.get(-1)).to({alpha:0.379},4,cjs.Ease.get(1)).to({alpha:0.645},3,cjs.Ease.get(-1)).to({alpha:1},4,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,74.1,48.8);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ44();
	this.instance.parent = this;
	this.instance.setTransform(37.1,24.4,1,1,0,0,0,37.1,24.4);
	this.instance.alpha = 0.5;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(2).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ42();
	this.instance.parent = this;
	this.instance.setTransform(44.3,32.2,1,1,0,0,0,44.3,32.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.691},3,cjs.Ease.get(-1)).to({alpha:0.379},3,cjs.Ease.get(1)).to({alpha:0.691},3,cjs.Ease.get(-1)).to({alpha:1},3,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,88.7,64.5);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ41();
	this.instance.parent = this;
	this.instance.setTransform(44.3,32.2,1,1,0,0,0,44.3,32.2);
	this.instance.alpha = 0.5;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(2).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ33();
	this.instance.parent = this;
	this.instance.setTransform(43.1,43.1,0.61,0.61,0,0,0,43.1,43.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1},18).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(16.5,16.5,53.1,53.1);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Остановить на этом кадре
		Если вставить этот код в кадр, то остановит/приостановит воспроизведение на нем.
		Также может использоваться для остановки/приостановки воспроизведения фрагментов ролика.
		*/
		
		this.stop();
	}
	this.frame_6 = function() {
		/* Остановить на этом кадре
		Если вставить этот код в кадр, то остановит/приостановит воспроизведение на нем.
		Также может использоваться для остановки/приостановки воспроизведения фрагментов ролика.
		*/
		
		this.stop();
	}
	this.frame_12 = function() {
		/* Остановить на этом кадре
		Если вставить этот код в кадр, то остановит/приостановит воспроизведение на нем.
		Также может использоваться для остановки/приостановки воспроизведения фрагментов ролика.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6).call(this.frame_6).wait(6).call(this.frame_12).wait(1));

	// Слой 1
	this.instance = new lib.Символ30();
	this.instance.parent = this;
	this.instance.setTransform(-46.4,208.1,1,1,0,0,0,180.9,208.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:180.9},6).to({x:-46.4},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-227.3,0,361.8,416.2);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 39
	this.instance = new lib.Символ39();
	this.instance.parent = this;
	this.instance.setTransform(148.5,109.6,1,1,0,0,0,87,28.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:28.3,scaleX:0.91,scaleY:0.91,y:109.7},4,cjs.Ease.get(-1)).to({regY:28.2,scaleX:0.81,scaleY:0.81,y:109.6},5,cjs.Ease.get(1)).to({regY:28.3,scaleX:0.9,scaleY:0.9,y:109.7},5,cjs.Ease.get(-1)).to({regX:87.1,regY:28.4,scaleX:0.97,scaleY:0.97,y:109.8},2,cjs.Ease.get(1)).to({regX:87,regY:28.2,scaleX:1,scaleY:1,y:109.6},3).wait(1));

	// Символ 38
	this.instance_1 = new lib.Символ38();
	this.instance_1.parent = this;
	this.instance_1.setTransform(149.2,171.2,0.863,0.863,0,0,0,90.9,17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.92,scaleY:0.92},4,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},5,cjs.Ease.get(1)).to({regX:91,regY:17.5,scaleX:0.93,scaleY:0.93,x:149.3,y:171.3},5,cjs.Ease.get(-1)).to({regX:90.9,regY:17.4,scaleX:0.86,scaleY:0.86,x:149.2,y:171.2},5,cjs.Ease.get(1)).wait(1));

	// Символ 37
	this.instance_2 = new lib.Символ37();
	this.instance_2.parent = this;
	this.instance_2.setTransform(149.2,39.3,0.832,0.832,0,0,0,87.9,34);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:0.91,scaleY:0.91},4,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,y:39.2},5,cjs.Ease.get(1)).to({scaleX:0.92,scaleY:0.92,y:39.3},5,cjs.Ease.get(-1)).to({scaleX:0.83,scaleY:0.83},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(61.5,11,174.1,175.3);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.Символ34();
	this.instance.parent = this;
	this.instance.setTransform(62.1,59.1,1,1,0,0,0,43.1,43.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ32();
	this.instance_1.parent = this;
	this.instance_1.setTransform(62,59,1.669,1.669,0,0,0,25.8,25.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 2
	this.instance_2 = new lib.Символ32();
	this.instance_2.parent = this;
	this.instance_2.setTransform(62,59,1,1,0,0,0,25.8,25.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 1
	this.instance_3 = new lib.Символ31();
	this.instance_3.parent = this;
	this.instance_3.setTransform(62.1,59.1,1,1,0,0,0,43.1,43.1);
	this.instance_3.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ23, new cjs.Rectangle(18.1,15.1,87.8,87.8), null);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ23();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(18.1,15.1,87.8,87.8), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ40();
	this.instance.parent = this;
	this.instance.setTransform(74,171,1,1,0,0,0,44.3,32.2);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ40(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.body();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(0,0,119,203.3), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ21();
	this.instance.parent = this;
	this.instance.setTransform(27,54.5,1,1,0,0,0,27,54.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1.01,skewX:5.5,x:21.6,y:54.6},19,cjs.Ease.get(-1)).to({scaleY:1.02,skewX:11.6,x:15.8,y:54.5},20,cjs.Ease.get(1)).to({scaleY:1.01,skewX:5.8,x:21.4},20,cjs.Ease.get(-1)).to({scaleY:1,skewX:0,x:27},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54,109);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ47();
	this.instance.parent = this;
	this.instance.setTransform(11.5,10.9,1,1,0,0,0,11.2,10.1);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ47(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ46();
	this.instance_1.parent = this;
	this.instance_1.setTransform(11.5,11,1,1,0,0,0,11.5,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(0,0,23,22), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ43();
	this.instance.parent = this;
	this.instance.setTransform(37.6,28.5,1,1,0,0,0,37.1,24.4);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ43(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.tits();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(0,0,77,52.9), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ56();
	this.instance.parent = this;
	this.instance.setTransform(76.2,61.8,1,1,0,0,0,84.4,58.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:13.3},4,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:30},5,cjs.Ease.get(1)).to({regY:58.4,scaleX:1,scaleY:1,rotation:16.6},4,cjs.Ease.get(-1)).to({regY:58.5,scaleX:1,scaleY:1,rotation:0},5,cjs.Ease.get(1)).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ55();
	this.instance_1.parent = this;
	this.instance_1.setTransform(76.2,61.8,1,1,0,0,0,75.4,62);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-3.8,y:61.9},4,cjs.Ease.get(-1)).to({rotation:-9,y:61.8},5,cjs.Ease.get(1)).to({rotation:-4.8,x:76.3},4,cjs.Ease.get(-1)).to({rotation:0,x:76.2},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.2,-0.2,169,135);


(lib.sprite143 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shape142("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-199.3,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sprite143, new cjs.Rectangle(-95.8,-94.4,192.3,192.3), null);


(lib.sprite138 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shape137("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sprite138, new cjs.Rectangle(-106.5,-13.3,110.7,31.1), null);


(lib.sprite133 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.shape132("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-3.4,0,1,1,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sprite133, new cjs.Rectangle(-117.4,-114,227.8,228), null);


(lib.Символ66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ20();
	this.instance.parent = this;
	this.instance.setTransform(62,51.9,0.615,0.615,-30,0,0,79.2,50.2);

	this.instance_1 = new lib.Символ22();
	this.instance_1.parent = this;
	this.instance_1.setTransform(52.7,53.9,1,1,0,0,0,52,52);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ66, new cjs.Rectangle(1,0,127.3,123.9), null);


(lib.Символ64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ57();
	this.instance.parent = this;
	this.instance.setTransform(48.9,25.4,1,1,0,0,0,32,28);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:51.3,y:23},0).wait(1).to({x:48.9,y:25.4},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,86,76);


(lib.Символ61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ58();
	this.instance.parent = this;
	this.instance.setTransform(-63.7,88.9,0.408,0.408,-98,0,0,38.6,49.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ61, new cjs.Rectangle(-61.7,70.4,20.2,33.5), null);


(lib.Символ53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ52();
	this.instance.parent = this;
	this.instance.setTransform(9.2,9,1,1,0,0,0,9.2,9);
	this.instance.alpha = 0.5;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(2).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ66();
	this.instance.parent = this;
	this.instance.setTransform(46.1,44.1,1,1,0,0,0,65.7,61.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ35, new cjs.Rectangle(-18.6,-17.9,127.3,123.9), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ53();
	this.instance.parent = this;
	this.instance.setTransform(9.2,9.7,1,1,0,0,0,9.2,9);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ53(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.verev2();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(0,0,21,20), null);


(lib.sprite139 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sprite138();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sprite139, new cjs.Rectangle(-106.5,-13.3,110.7,31.1), null);


(lib.sprite134 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sprite133();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-178.2},49).to({rotation:-181.8},1).to({rotation:-360},49).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118.9,-115.5,230.8,231);


(lib.Символ65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ64();
	this.instance.parent = this;
	this.instance.setTransform(43.2,40.7,1,1,0,0,0,43,38);

	this.instance_1 = new lib.Символ22();
	this.instance_1.parent = this;
	this.instance_1.setTransform(33.1,36.1,1,1,0,0,0,52,52);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ65, new cjs.Rectangle(-0.8,-0.8,87.8,87.8), null);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ65();
	this.instance.parent = this;
	this.instance.setTransform(34,35.5,1,1,0,0,0,34,35.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ36, new cjs.Rectangle(-0.8,-0.8,87.8,87.8), null);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 5
	this.instance = new lib.Символ5();
	this.instance.parent = this;
	this.instance.setTransform(131.9,-24.8,1,1,-10.2,0,0,10.6,10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40));

	// Символ 6
	this.instance_1 = new lib.Символ6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-82.5,-24.5,1,1,0,0,0,11.5,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40));

	// Символ 15
	this.instance_2 = new lib.Символ15();
	this.instance_2.parent = this;
	this.instance_2.setTransform(50.5,-24.5,1,1,0,0,0,36.5,36.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:7,x:54.4,y:-19.7},9,cjs.Ease.get(-1)).to({regX:36.6,rotation:15,x:58.8,y:-14.3},10,cjs.Ease.get(1)).to({rotation:7.3,x:54.7,y:-19.4},10,cjs.Ease.get(-1)).to({regX:36.5,rotation:0,x:50.5,y:-24.5},10,cjs.Ease.get(1)).wait(1));

	// Слой 6
	this.instance_3 = new lib.Символ11();
	this.instance_3.parent = this;
	this.instance_3.setTransform(121,24.5,1,1,0,0,0,30.5,16.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:30.6,regY:16.6,scaleX:1,skewY:-1.8,x:121.1,y:27.8},9,cjs.Ease.get(-1)).to({regX:30.5,scaleX:1,skewY:-3.9,x:121,y:31.5},10,cjs.Ease.get(1)).to({scaleX:1,skewY:-1.8,x:121.1,y:28},10,cjs.Ease.get(-1)).to({regY:16.5,scaleX:1,skewY:0,x:121,y:24.5},10,cjs.Ease.get(1)).wait(1));

	// Символ 8
	this.instance_4 = new lib.Символ8();
	this.instance_4.parent = this;
	this.instance_4.setTransform(139.4,-13,1,1,0,0,0,11.5,31);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:-10.7},9,cjs.Ease.get(-1)).to({y:-8},10,cjs.Ease.get(1)).to({y:-10.5},10,cjs.Ease.get(-1)).to({y:-13},10,cjs.Ease.get(1)).wait(1));

	// Символ 13
	this.instance_5 = new lib.Символ13();
	this.instance_5.parent = this;
	this.instance_5.setTransform(138.9,-40,1,1,0,0,0,13,25);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({y:-37.7},9,cjs.Ease.get(-1)).to({y:-35},10,cjs.Ease.get(1)).to({y:-37.5},10,cjs.Ease.get(-1)).to({y:-40},10,cjs.Ease.get(1)).wait(1));

	// Символ 9
	this.instance_6 = new lib.Символ9();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-80.1,-26.5,1,1,0,0,0,29,54.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:-6.7,x:-81.1,y:-25},19).to({rotation:0,x:-80.1,y:-26.5},20).wait(1));

	// Слой 4
	this.instance_7 = new lib.Символ7();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-20.5,36,1,1,0,0,0,44.5,24);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regY:24.1,scaleX:1.01,skewY:7.7,y:37.6},19).to({regY:24,scaleX:1,skewY:0,y:36},20).wait(1));

	// Слой 3
	this.instance_8 = new lib.Символ4();
	this.instance_8.parent = this;
	this.instance_8.setTransform(71.5,52.5,1,1,0,0,0,38.5,26);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({scaleY:0.98,y:58.8},9,cjs.Ease.get(-1)).to({regY:26.1,scaleY:0.96,y:63.9},10,cjs.Ease.get(1)).to({scaleY:0.98,y:59.2},10,cjs.Ease.get(-1)).to({regY:26,scaleY:1,y:52.5},10,cjs.Ease.get(1)).wait(1));

	// Слой 2
	this.instance_9 = new lib.Символ14();
	this.instance_9.parent = this;
	this.instance_9.setTransform(134.2,114.5,1,1.004,0,-5,0,27,54.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({regX:27.1,regY:54.6,scaleY:0.98,x:134.3,y:116.4},9,cjs.Ease.get(-1)).to({regX:27,scaleY:0.96,skewX:-5.2,x:134.2,y:118.3},10,cjs.Ease.get(1)).to({scaleY:0.98,skewX:-5,y:116.5},10,cjs.Ease.get(-1)).to({regY:54.5,scaleY:1,y:114.5},10,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_10 = new lib.Символ16();
	this.instance_10.parent = this;
	this.instance_10.setTransform(59.5,101.5,1,1,0,0,0,59.5,101.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({scaleY:0.98,y:103.6},9,cjs.Ease.get(-1)).to({scaleY:0.96,y:105.8},10,cjs.Ease.get(1)).to({scaleY:0.98,y:103.7},10,cjs.Ease.get(-1)).to({scaleY:1,y:101.5},10,cjs.Ease.get(1)).wait(1));

	// Символ 10
	this.instance_11 = new lib.Символ10();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-5.1,314.5,1,1,0,0,0,47,42.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({regY:42.6,scaleY:1,skewX:2.6,x:-3,y:314.6},9,cjs.Ease.get(-1)).to({regY:42.5,scaleY:1,skewX:5.7,x:-0.8,y:314.5},10,cjs.Ease.get(1)).to({scaleY:1,skewX:2.8,x:-2.9},10,cjs.Ease.get(-1)).to({scaleY:1,skewX:0,x:-5.1},10,cjs.Ease.get(1)).wait(1));

	// Символ 12
	this.instance_12 = new lib.Символ12();
	this.instance_12.parent = this;
	this.instance_12.setTransform(157,293.5,1,1,0,0,0,21,44.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({scaleY:1,skewX:-3.3,x:154.4},9,cjs.Ease.get(-1)).to({regX:21.1,scaleY:1.01,skewX:-7,x:151.6},10,cjs.Ease.get(1)).to({scaleY:1,skewX:-3.5,x:154.3},10,cjs.Ease.get(-1)).to({regX:21,scaleY:1,skewX:0,x:157},10,cjs.Ease.get(1)).wait(1));

	// Символ 17
	this.instance_13 = new lib.Символ17();
	this.instance_13.parent = this;
	this.instance_13.setTransform(45,228.5,1,1,0,0,0,33,60.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({regY:60.6,scaleY:1,skewX:-1.8,x:47.1,y:228.6},9,cjs.Ease.get(-1)).to({regY:60.5,scaleY:1,skewX:-4,x:49.2,y:228.5},10,cjs.Ease.get(1)).to({regX:33.1,scaleY:1,skewX:-2,x:47.2},10,cjs.Ease.get(-1)).to({regX:33,scaleY:1,skewX:0,x:45},10,cjs.Ease.get(1)).wait(1));

	// Символ 18
	this.instance_14 = new lib.Символ18();
	this.instance_14.parent = this;
	this.instance_14.setTransform(126.5,215.5,1,1,0,0,0,51.5,53.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({regX:51.6,regY:53.6,scaleY:1,skewX:2.8,x:123.9,y:215.6},9,cjs.Ease.get(-1)).to({regX:51.5,regY:53.5,scaleY:1.01,skewX:6.1,x:120.7,y:215.5},10,cjs.Ease.get(1)).to({regX:51.6,regY:53.6,scaleY:1,skewX:3,x:123.7,y:215.6},10,cjs.Ease.get(-1)).to({regX:51.5,regY:53.5,scaleY:1,skewX:0,x:126.5,y:215.5},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-109.1,-81,287,438);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// tits.png
	this.instance = new lib.Символ19();
	this.instance.parent = this;
	this.instance.setTransform(183.5,246.5,1,1,0,0,0,59.5,101.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(14.9,64,287.1,438), null);


(lib.sprite140 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 7
	this.instance = new lib.sprite139();
	this.instance.parent = this;
	this.instance.setTransform(0,-143.5,1,1,0,90,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 3
	this.instance_1 = new lib.sprite139();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-148.7,-2.8,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 1 - копия
	this.instance_2 = new lib.sprite139();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,147,1,1,90);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Layer 1
	this.instance_3 = new lib.sprite139();
	this.instance_3.parent = this;
	this.instance_3.setTransform(144.8,-2.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.sprite140, new cjs.Rectangle(-152.8,-147.6,301.7,298.7), null);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ61();
	this.instance.parent = this;
	this.instance.setTransform(475.4,114.9,0.579,0.579,0,-17.6,162.4,-64.3,88);

	this.instance_1 = new lib.Символ58копия();
	this.instance_1.parent = this;
	this.instance_1.setTransform(445.4,198.3,0.236,0.236,84.6,0,0,38.9,49.4);

	this.instance_2 = new lib.Символ61();
	this.instance_2.parent = this;
	this.instance_2.setTransform(339.2,304.6,0.579,0.579,0,177.4,-2.6,-64.2,87.7);

	this.instance_3 = new lib.Символ61();
	this.instance_3.parent = this;
	this.instance_3.setTransform(216.7,130.7,0.579,0.579,0,147.4,-32.6,-64.2,87.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 1
	this.girl = new lib.Символ3();
	this.girl.parent = this;
	this.girl.setTransform(216.5,13.1,1,1,0,0,0,18.5,12);

	this.bg = new lib.Символ1();
	this.bg.parent = this;
	this.bg.setTransform(350,262.5,1,1,0,0,0,350,262.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bg},{t:this.girl}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ25, new cjs.Rectangle(0,0,700,525), null);


(lib.Символ20_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance_2 = new lib.Символ25();
	this.instance_2.parent = this;
	this.instance_2.setTransform(350,262.5,1,1,0,0,0,350,262.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:320.8},39,cjs.Ease.get(-1)).to({x:290},40,cjs.Ease.get(1)).to({x:320},40,cjs.Ease.get(-1)).to({x:350},40,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,700,525);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.vse = new lib.Символ20_1();
	this.vse.parent = this;
	this.vse.setTransform(350,234.5,1,1,0,0,0,350,262.5);

	this.timeline.addTween(cjs.Tween.get(this.vse).to({y:142.5},49,cjs.Ease.get(-0.7)).to({y:48.5},50,cjs.Ease.get(0.7)).to({y:143.4},51,cjs.Ease.get(-0.7)).to({y:234.5},49,cjs.Ease.get(0.7)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-28,700,525);


(lib.sprite141 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sprite140();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:77.5},17).to({scaleX:1,scaleY:1,rotation:177.7,y:-0.1},22).to({rotation:182.3},1).to({scaleX:1,scaleY:1,rotation:259.7,x:0.1,y:0},17).to({scaleX:1,scaleY:1,rotation:360,x:0},22).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-152.8,-147.6,301.7,298.7);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Остановить на этом кадре
		Если вставить этот код в кадр, то остановит/приостановит воспроизведение на нем.
		Также может использоваться для остановки/приостановки воспроизведения фрагментов ролика.
		*/
		
		this.stop();
	}
	this.frame_6 = function() {
		/* Остановить на этом кадре
		Если вставить этот код в кадр, то остановит/приостановит воспроизведение на нем.
		Также может использоваться для остановки/приостановки воспроизведения фрагментов ролика.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6).call(this.frame_6).wait(7));

	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.parent = this;
	this.instance.setTransform(350,290.5,1,1,0,0,0,350,262.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:262.6,scaleX:1.08,scaleY:1.08,y:290.6},3,cjs.Ease.get(-1)).to({regX:349.9,regY:262.5,scaleX:1.16,scaleY:1.16,x:349.9,y:290.5},3,cjs.Ease.get(1)).to({scaleX:1.08,scaleY:1.08,x:350},3,cjs.Ease.get(-1)).to({regX:350,scaleX:1,scaleY:1},3,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,700,525);


(lib.sprite144 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(22.5,1,1).p("AWIAAQAAJMmeGeQmeGfpMAAQpLAAmemfQmemeAApMQAApLGemeQGemfJLAAQJMAAGeGfQGeGeAAJLg");
	this.shape.setTransform(-2.2,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(27));

	// Layer 8
	this.instance = new lib.sprite143();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.251,0.251);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.47,scaleY:0.47},3).to({scaleX:0.65,scaleY:0.65},3).to({scaleX:0.79,scaleY:0.79},3).to({scaleX:0.9,scaleY:0.9},3).to({scaleX:0.97,scaleY:0.97},3).to({scaleX:0.38,scaleY:0.38},4).to({scaleX:0.25,scaleY:0.25},7).wait(1));

	// Layer 6
	this.instance_1 = new lib.sprite141();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0.2,2.099,2.099);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.88,scaleY:1.88,y:0.1},2).to({scaleX:1.69,scaleY:1.69},2).to({scaleX:1.52,scaleY:1.52},2).to({scaleX:1.37,scaleY:1.37},2).to({scaleX:1.25,scaleY:1.25},2).to({scaleX:1.15,scaleY:1.15},2).to({scaleX:1.08,scaleY:1.08},2).to({scaleX:1.03,scaleY:1.03,y:0},2).to({scaleX:1.01,scaleY:1.01},1).to({scaleX:1,scaleY:1},2).to({scaleX:2.1,scaleY:2.1,y:0.2},7).wait(1));

	// Layer 3
	this.instance_2 = new lib.sprite136();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0,5.843,5.843);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:5.41,scaleY:5.41},1).to({scaleX:4.99,scaleY:4.99},1).to({scaleX:4.6,scaleY:4.6},1).to({scaleX:4.23,scaleY:4.23},1).to({scaleX:3.89,scaleY:3.89},1).to({scaleX:3.57,scaleY:3.57},1).to({scaleX:3.28,scaleY:3.28},1).to({scaleX:3,scaleY:3},1).to({scaleX:2.75,scaleY:2.75},1).to({scaleX:2.53,scaleY:2.53},1).to({scaleX:2.33,scaleY:2.33},1).to({scaleX:2.15,scaleY:2.15},1).to({scaleX:2,scaleY:2},1).to({scaleX:1.87,scaleY:1.87},1).to({scaleX:1.76,scaleY:1.76},1).to({scaleX:1.68,scaleY:1.68},1).to({scaleX:1.62,scaleY:1.62},1).to({scaleX:1.57,scaleY:1.57},2).to({scaleX:5.84,scaleY:5.84},7).wait(1));

	// Layer 1
	this.instance_3 = new lib.sprite134();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1,0.2,1.594,1.594);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1.53,scaleY:1.53},1).to({scaleX:1.37,scaleY:1.37},3).to({scaleX:1.2,scaleY:1.2},4).to({scaleX:1.08,scaleY:1.08},4).to({scaleX:1.03,scaleY:1.03},3).to({scaleX:1.01,scaleY:1.01},1).to({scaleX:1.01,scaleY:1.01},1).to({scaleX:1,scaleY:1},2).to({scaleX:1.59,scaleY:1.59},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320.8,-309.7,633.4,627.1);


(lib.Символ41копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sprite144();
	this.instance.parent = this;
	this.instance.setTransform(-88.5,121.8,0.154,0.154);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:0.3,x:51.8,y:48.7},19,cjs.Ease.get(-1)).to({regY:0,x:199.5,y:-28.2},20,cjs.Ease.get(1)).to({regX:0.3,x:62.7,y:43.1},20,cjs.Ease.get(-1)).to({regX:0,x:-88.5,y:121.8},22,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-138,74,97.8,96.8);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ41копия();
	this.instance.parent = this;
	this.instance.setTransform(187,-25.6,1,1,0,0,0,48.9,48.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-73.9},14).to({y:-125.6},15).wait(15).to({y:-25.6},15).wait(13).to({x:312.8},12).wait(12).to({x:187},13).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,97.8,96.8);


(lib.Символ27 = function(mode,startPosition,loop) {
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
	this.instance = new lib.sprite144();
	this.instance.parent = this;
	this.instance.setTransform(-0.1,-0.2,0.154,0.154);

	this.instance_1 = new lib.Символ64();
	this.instance_1.parent = this;
	this.instance_1.setTransform(20.7,44.9,1.354,1.354,105,0,0,43,37.9);

	this.instance_2 = new lib.Символ20();
	this.instance_2.parent = this;
	this.instance_2.setTransform(21.5,29.2,0.615,0.615,-105,0,0,79.2,50.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.6,-48,97.7,96.8);


// stage content:
(lib.sea_girl_600x300 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		
		stage.canvas.style.cursor = "none";
		this.pricel.mouseEnabled = false;
		this.addEventListener("tick", CustomMouseCursor.bind(this));
		
		this.pricel.visible = false;
		
		function CustomMouseCursor() {
		this.pricel.x = stage.mouseX/window.devicePixelRatio;
		this.pricel.y = stage.mouseY/window.devicePixelRatio;
		}
		
		stage.canvas.addEventListener("mouseover", fl_mouseover.bind(this));
		function fl_mouseover()
		{
			
			this.pricel.gotoAndStop(0);
			this.banner.gotoAndPlay(1);
			this.shadow2.gotoAndPlay(1);
			this.shadow1.gotoAndPlay(1);
			this.pricel.visible = true;
			this.pricel_no.visible = false;
		}
		
		stage.canvas.addEventListener("mouseout", fl_mouseout.bind(this));
		
		function fl_mouseout()
		{
			this.banner.gotoAndPlay(7);
			this.shadow2.gotoAndPlay(7);
			this.shadow1.gotoAndPlay(7);
			this.pricel.visible = false;
			this.pricel_no.visible = true;
		}
		/* Событие "Помещен указатель мыши"
		При прохождении указателя через экземпляр символа выполняется функция, в которую можно добавить собственный код.
		
		Инструкции:
		1. Добавьте пользовательский код после строки "// Начало пользовательского кода".
		Данный код выполняется при прохождении указателя мыши через экземпляр символа.
		частота — количество вызовов события.
		*/
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.per.addEventListener("mouseover", fl_MouseOverHandler);
		
		function fl_MouseOverHandler()
		{
			_this.pricel.gotoAndStop(1);
		}
		
		stage.enableMouseOver(frequency);
		this.nog.addEventListener("mouseover", fl_MouseOverHandler1);
		
		function fl_MouseOverHandler1()
		{
			_this.pricel.gotoAndStop(2);
		}
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 5
	this.pricel_no = new lib.Символ28();
	this.pricel_no.parent = this;
	this.pricel_no.setTransform(207,248,0.795,0.795,0,0,0,48.9,48.4);

	this.pricel = new lib.Символ27();
	this.pricel.parent = this;
	this.pricel.setTransform(755.5,42.1,1,1,0,0,0,-0.8,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pricel},{t:this.pricel_no}]}).wait(1));

	// Слой 3
	this.instance = new lib.Символ24();
	this.instance.parent = this;
	this.instance.setTransform(81.6,57.6,0.706,0.706,0,0,0,148,62.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.per = new lib.Символ36();
	this.per.parent = this;
	this.per.setTransform(525.1,220.1,1,1,0,0,0,34,35.5);

	this.nog = new lib.Символ35();
	this.nog.parent = this;
	this.nog.setTransform(59.6,224.1,1,1,0,0,0,34,35.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.nog},{t:this.per}]}).wait(1));

	// Слой 6
	this.shadow1 = new lib.Символ29();
	this.shadow1.parent = this;
	this.shadow1.setTransform(552.3,150.4,1,1,0,0,180,180.9,208.1);

	this.shadow2 = new lib.Символ29();
	this.shadow2.parent = this;
	this.shadow2.setTransform(47.2,150.4,1,1,0,0,0,180.9,208.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shadow2},{t:this.shadow1}]}).wait(1));

	// Слой 1
	this.banner = new lib.Символ26();
	this.banner.parent = this;
	this.banner.setTransform(343,234.5,1,1,0,0,0,350,262.5);

	this.timeline.addTween(cjs.Tween.get(this.banner).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.1,92.3,1321.5,554.7);
// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bedro_left.png?1495197533394", id:"bedro_left"},
		{src:"images/bedro_right.png?1495197533394", id:"bedro_right"},
		{src:"images/bg.jpg?1495197533394", id:"bg"},
		{src:"images/body.png?1495197533394", id:"body"},
		{src:"images/head.png?1495197533394", id:"head"},
		{src:"images/hvost.png?1495197533394", id:"hvost"},
		{src:"images/ladon.png?1495197533394", id:"ladon"},
		{src:"images/leg_left.png?1495197533394", id:"leg_left"},
		{src:"images/leg_right.png?1495197533394", id:"leg_right"},
		{src:"images/nog1.png?1495197533394", id:"nog1"},
		{src:"images/nog2.png?1495197533394", id:"nog2"},
		{src:"images/perf1.png?1495197533394", id:"perf1"},
		{src:"images/perf2.png?1495197533394", id:"perf2"},
		{src:"images/ple4o_left.png?1495197533394", id:"ple4o_left"},
		{src:"images/ple4o_right.png?1495197533394", id:"ple4o_right"},
		{src:"images/pra_ruk.png?1495197533394", id:"pra_ruk"},
		{src:"images/ruka_left.png?1495197533394", id:"ruka_left"},
		{src:"images/tits.png?1495197533394", id:"tits"},
		{src:"images/verev.png?1495197533394", id:"verev"},
		{src:"images/verev2.png?1495197533394", id:"verev2"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;