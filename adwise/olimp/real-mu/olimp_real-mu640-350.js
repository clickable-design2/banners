(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,364);


(lib.btn1 = function() {
	this.initialize(img.btn1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,177,57);


(lib.btn2 = function() {
	this.initialize(img.btn2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,177,57);


(lib.forreg = function() {
	this.initialize(img.forreg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,217,23);


(lib.give = function() {
	this.initialize(img.give);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,216,37);


(lib.grifna = function() {
	this.initialize(img.grifna);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,46,63);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,154,41);


(lib.mulogo = function() {
	this.initialize(img.mulogo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,104,103);


(lib.ninty = function() {
	this.initialize(img.ninty);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,153,64);


(lib.ramka = function() {
	this.initialize(img.ramka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,558,261);


(lib.reallogo = function() {
	this.initialize(img.reallogo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,112);


(lib.stav = function() {
	this.initialize(img.stav);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,172,63);// helper functions:

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


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.stav();
	this.instance.parent = this;
	this.instance.setTransform(6,13);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(6,13,172,63), null);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.btn2();
	this.instance.parent = this;
	this.instance.setTransform(1,1,0.938,0.938);

	this.instance_1 = new lib.btn1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1,1,0.938,0.938);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,1,166.1,53.5);


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
	this.shape.graphics.f("#FFFFFF").s().p("AAbA6IAAgTIg1AAIAAATIgdAAIgBgtIABAAIAJgCQACgCACgDIADgOIAIgxIBMAAIAABGIAMAAIgBAtgAgGgDQgCAMgFAEIAZAAIAAgqIgQAAg");
	this.shape.setTransform(83.5,35.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAPAwIAAgqIg2AqIgIAAIAAhfIAhAAIAAApIA0gpIAKAAIAABfg");
	this.shape_1.setTransform(71.4,34.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgsBKIAAhzQAAgGgBgDQgCgCgFAAIAAgTIAKgBIAMAAQAGABADADQAEAEAAAGIAAABQAEgIAIgFQAGgDAJAAQAKAAAJAEQAHAEAGAHQAFAHADAJQADAJAAAKIgBANIgEAKQgDAGgEAEIgIAIQgEAEgFACQgGACgFAAIgMAAIgLgDIAAAzgAgHgmQgEAFAAAGIAAAWQAGADAFAAQAFAAAFgCQAEgCACgFQADgFAAgHQAAgIgEgGQgCgDgDgCQgEgBgEgBQgFABgEAFg");
	this.shape_2.setTransform(59.5,36.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAbA6IAAgTIg1AAIAAATIgdAAIgBgtIABAAIAJgCQACgCACgDIADgOIAIgxIBMAAIAABGIAMAAIgBAtgAgGgDQgCAMgFAEIAZAAIAAgqIgQAAg");
	this.shape_3.setTransform(47,35.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgbAwQgGgCgFgEQgFgEgDgFQgDgHAAgGQAAgJACgHQADgGAFgEQAFgEAHgDQAHgCAJAAIALABQAFACAEADIAAgEQAAgDgCgCQgCgCgDgCQgFgCgIAAQgSABgIAFIgEgZQAHgDAKgCQAJgCAKAAQAKAAAIADQAJACAGADQAHAGAEAHQADAHAAALIAAAdQAAAHABACQACADAFgBIAAATQgPADgGgBQgFgCgDgCQgEgEgBgHQgCAEgDADIgIAFQgHAEgKAAQgHAAgGgDgAgFAGQgGAAgDADQgDAEABAFQABADACABQADADADAAQAGAAAEgEQAGgDAAgGIAAgCQgGgEgHAAIgBAAg");
	this.shape_4.setTransform(35.3,34.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAgBGIAAhAIgeAfIgDAAIgegfIAABAIglAAIAAiLIAOAAIA2A8IA4g8IAMAAIAACLg");
	this.shape_5.setTransform(21.4,32);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag1AvIABgYQAKABADgEQADgDABgKIAGg3IBTAAIAABfIgiAAIAAhBIgUAAIgCAaQgBAPgDAIQgDAIgGAFQgFAEgKABIgDAAIgUgCg");
	this.shape_6.setTransform(68.7,12.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgbAwQgGgCgFgEQgFgEgDgGQgDgFAAgHQAAgJACgHQADgFAFgFQAFgEAHgCQAHgDAJAAIALACQAFAAAEADIAAgCQAAgEgCgDQgCgCgDgBQgFgBgIAAQgSABgIADIgEgXQAHgEAKgCQAJgCAKABQAKAAAIABQAJACAGAFQAHAFAEAGQADAIAAAKIAAAfQAAAGABACQACACAFABIAAATQgPACgGgBQgFgCgDgCQgEgFgBgGQgCAEgDADIgIAFQgHADgKAAQgHABgGgDgAgFAGQgGABgDACQgDADABAFQABAEACABQADACADAAQAGAAAEgCQAGgEAAgFIAAgCQgGgFgHAAIgBAAg");
	this.shape_7.setTransform(57.4,12.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgNAvQgKgDgIgGQgIgHgEgKIgDgKIgBgLQAAgGABgGIAEgKQADgJAJgHQAHgGAJgDQAJgDAJAAQAGAAAGACIAKADIAJAFQAEADACAEQADAEACAFIACAKQAAAOgCAIIg7AAQAAAFADADQACADAEACQAEACAKAAIASgBQAKgCAEgDIAFAZQgJAEgKACQgKADgKAAQgLAAgKgEgAgGgVQgGAEAAAGIAdAAQABgGgEgEQgFgDgGAAQgEAAgFADg");
	this.shape_8.setTransform(46.3,12.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag3BGIAAiLIA9AAIAMABIAKADQAJAFAHAHQAGAIADAJQADAKAAAKQAAAJgDAIQgEAJgGAIQgGAHgJAEQgOAFgIgBIgYAAIAAAlgAgTACIAZAAQAHAAAEgGQAEgFAAgIQAAgJgEgFQgEgHgHAAIgZAAg");
	this.shape_9.setTransform(34.8,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(11,0,81,46), null);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.reallogo();
	this.instance.parent = this;
	this.instance.setTransform(3,17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(3,17,80,112), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAbA6IAAgTIg1AAIAAATIgdAAIgBgtIABAAIAJgCQACgCACgDIAEgOIAHgxIBMAAIAABGIAMAAIgBAtgAgHgDQgCAMgEAEIAZAAIAAgqIgQAAg");
	this.shape.setTransform(85.9,35.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgNAvQgLgDgHgGQgIgHgEgKIgDgKIgBgLQAAgGABgGIAEgKQADgJAIgHQAIgGAJgDQAIgDAKAAQAGAAAGACIAKADIAJAFQAEADACAEQADAEACAFIACAKQAAAOgCAIIg7AAQAAAFADADQACADAEACQAEACAKAAIASgBQAKgCAEgDIAFAZQgJAEgKACQgKADgKAAQgLAAgKgEgAgGgVQgGAEAAAGIAdAAQABgGgFgEQgEgDgGAAQgEAAgFADg");
	this.shape_1.setTransform(74.3,34.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgQAwIAAhBIgZAAIAAgeIBTAAIAAAeIgaAAIAABBg");
	this.shape_2.setTransform(64.2,34.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAPBFIAAgrIg2ArIgIAAIAAhfIAhAAIAAAoIA0gpIAKAAIAABggAgJglQgGgCgEgEQgEgEgCgGQgDgGAAgHIATgCQAAAFAEACQADADAFAAQAGAAAEgCQADgDABgFIATACQgBAHgCAGQgCAGgEAEQgEAEgGACQgGACgHAAQgHAAgGgCg");
	this.shape_3.setTransform(53.6,32.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgbAwQgGgCgFgEQgFgEgDgFQgDgHAAgGQAAgJACgHQADgGAFgEQAFgEAHgDQAHgCAJAAIALABQAFACAEADIAAgEQAAgDgCgCQgCgCgDgCQgFgCgIAAQgSABgIAFIgEgZQAHgDAKgCQAJgCAKAAQAKAAAIADQAJACAGADQAHAGAEAHQADAHAAALIAAAdQAAAHABACQACADAFgBIAAATQgPADgGgBQgFgCgDgCQgEgEgBgHQgCAEgDADIgIAFQgHAEgKAAQgHAAgGgDgAgFAGQgGAAgDADQgDAEABAFQABADACABQADADADAAQAGAAAEgEQAGgDAAgGIAAgCQgGgEgHAAIgBAAg");
	this.shape_4.setTransform(42,34.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAPAwIAAgjIgdAAIAAAjIghAAIAAhfIAhAAIAAAgIAdAAIAAggIAhAAIAABfg");
	this.shape_5.setTransform(30.4,34.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AADBFQgOgGgHgFIgJgJIgHgKQgDgFgCgHQgCgGgCgHIgSAAIAAA4IglAAIAAiLIAlAAIAAAyIAUAAIADgMIAHgLQAEgHAMgKQAJgGALgEQALgDALAAIAOABIAMAEIANAGIALAIIAJAKIAHAMQACAHACAIQACAIgBAIQABAJgCAIQgCAIgCAHQgEAHgDAFIgKALIgLAIQgFADgHACQgGADgHABIgOABQgMAAgLgEgAAOgjQgHADgEAFQgFAEgCAHQgDAIAAAIQAAAJADAIQACAHAFAFQAEAEAHADQAGACAHAAQAHAAAGgCQAHgDAEgEQAGgFACgHQADgIAAgJQAAgIgDgIQgDgHgFgEQgFgFgGgDQgHgCgHAAQgGAAgGACg");
	this.shape_6.setTransform(13.8,32);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgsBLIAAh0QAAgGgBgDQgCgCgFAAIAAgTIAKgCIAMAAQAGACADADQAEAEAAAGIAAAAQAEgHAIgEQAGgFAJAAQAKABAJAEQAHAEAGAHQAFAHADAJQADAJAAAKQAAAGgBAHIgEALQgDAFgEAFIgIAHQgEADgFACQgGADgFABIgMAAIgLgEIAAA0gAgHgmQgEAFAAAHIAAAVQAGADAFAAQAFAAAFgCQAEgDACgEQADgFAAgHQAAgJgEgFQgCgEgDgBQgEgBgEAAQgFgBgEAGg");
	this.shape_7.setTransform(94.2,14.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgNAvQgKgDgIgGQgHgHgFgKIgDgKIgBgLQAAgGABgGIADgKQAFgJAIgHQAGgGAKgDQAJgDAJAAQAGAAAGACIAKADIAJAFQAEADADAEQADAEABAFIACAKQAAAOgCAIIg7AAQAAAFADADQACADAEACQAEACAKAAIASgBQAKgCAEgDIAEAZQgIAEgKACQgKADgKAAQgLAAgKgEgAgHgVQgEAEgBAGIAdAAQABgGgEgEQgFgDgGAAQgEAAgGADg");
	this.shape_8.setTransform(82.6,12.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgQAwIAAhCIgZAAIAAgdIBTAAIAAAdIgaAAIAABCg");
	this.shape_9.setTransform(72.5,12.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgRAvQgKgDgHgGQgHgHgEgJIgDgKIgBgMIABgLQABgFACgFQAEgKAIgGQAHgGAKgEQAJgDAIAAQAJAAAIADQAIACAHAFQAHAGAEAHQAFAIABAKIggAAQgCgFgEgDQgEgDgFAAQgHAAgFAFQgDADgCAEQgBAEAAAEQAAAFABAEQACAEACADQAGAFAGABQAFAAAFgDQAEgEACgGIAgAAQgBAKgFAJQgEAHgHAGQgHAFgJACQgIADgJAAQgIAAgJgEg");
	this.shape_10.setTransform(62.3,12.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgOAvQgKgDgHgGQgHgHgFgKIgDgKIgBgLQAAgGACgGIADgKQAEgJAHgHQAIgGAJgDQAIgDAJAAQAHAAAGACIALADIAIAFQAEADACAEQAEAEABAFIACAKQAAAOgCAIIg7AAQABAFACADQACADADACQAFACAKAAIASgBQAKgCAEgDIAFAZQgKAEgJACQgKADgKAAQgLAAgLgEgAgGgVQgFAEgCAGIAfAAQAAgGgFgEQgEgDgGAAQgFAAgEADg");
	this.shape_11.setTransform(51.1,12.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AANAwIAAgdQgQADgHgBIgLgCQgEgBgEgDIgIgHIgFgIIgEgLIgBgOIAAgWIAjAAIAAAWQAAAHACAEQACAEAEACQAEACAEAAQAFAAAFgDIAAgmIAiAAIAABfg");
	this.shape_12.setTransform(39.7,12.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAPAwIAAgjIgdAAIAAAjIghAAIAAhfIAhAAIAAAgIAdAAIAAggIAhAAIAABfg");
	this.shape_13.setTransform(28.4,12.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgbAwQgGgCgFgEQgFgEgDgGQgDgFAAgHQAAgJACgHQADgFAFgFQAFgEAHgCQAHgDAJAAIALACQAFAAAEADIAAgCQAAgEgCgDQgCgCgDgBQgFgBgIAAQgSABgIADIgEgXQAHgEAKgCQAJgCAKABQAKAAAIABQAJACAGAFQAHAFAEAGQADAIAAAKIAAAfQAAAGABACQACACAFABIAAATQgPACgGgBQgFgCgDgCQgEgFgBgGQgCAEgDADIgIAFQgHADgKAAQgHABgGgDgAgFAGQgGABgDACQgDADABAFQABAEACABQADACADAAQAGAAAEgCQAGgEAAgFIAAgCQgGgFgHAAIgBAAg");
	this.shape_14.setTransform(16.8,12.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAgBGIAAhAIgeAfIgDAAIgegfIAABAIgkAAIAAiLIAMAAIA3A8IA3g8IAOAAIAACLg");
	this.shape_15.setTransform(2.9,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(-7.5,0,109.8,46), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mulogo();
	this.instance.parent = this;
	this.instance.setTransform(0,16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,16,104,103), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgUBGQgLgDgIgFQgIgGgFgIIgDgKIgBgLIAjAAQAAADABADIAFAFQAHAEAIgBQAIABAGgEQAHgEAAgGQAAgEgCgDQgDgDgEgCQgFgBgLgCQgKAAgIgCQgKgDgHgFQgHgDgEgIQgDgEgBgEIgBgKIABgLQABgFADgFQAEgIAIgFQAHgHAKgCQAKgDALAAQAJAAAJADQAKACAIAHQAIAGAEAHIADAKIABALIgiAAQAAgHgGgEQgFgDgHAAQgIAAgEACIgFAFQgCACAAAEQAAAGAGAEQAEABALACQAMABAJACQAKACAIAFQAIAEAEAHQACAFABAFIABAMIgBAKIgEAJQgEAIgJAGQgHAFgLADQgKADgLAAQgKAAgKgDg");
	this.shape.setTransform(14.9,10);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgGBHIg9iHIAAgGIAnAAIARAqIALAjIABAAIALgjIARgqIAnAAIAAAGIg8CHg");
	this.shape_1.setTransform(1.6,10.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(-7.1,0,30.7,24), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCB522").s().p("AggBvQgPgFgLgIQgLgJgGgNQgGgNAAgQQAAgLAEgKQADgKAGgIQAGgHAIgFQAIgFAKgDQgOgHgIgLQgEgGgCgGQgCgHAAgIQAAgNAFgLQAEgKAKgIQAJgHAMgEQAMgEAOAAQAOAAANAEQAMAEAJAHQAKAIAFAKQAFALAAAMQAAAIgDAHQgCAHgEAGQgIALgPAHQAKAEAIAFQAJAFAFAHQAHAHADAJQADAKABAMQAAAPgGANQgHAMgLAJQgLAKgPAFQgPAEgRAAQgRAAgPgEgAgUACQgKADgIAGQgIAHgEAIQgFAJAAALQAAALAFAJQAEAIAIAHQAIAGAKADQAKADAKAAQALAAAKgDQAKgDAIgGQAIgHAEgIQAFgJAAgLQAAgLgFgJQgEgJgIgGQgIgGgKgDQgKgCgLAAQgKAAgKACgAgPhaQgIACgGAFQgHAEgDAHQgEAHAAAIQAAAJAEAHQADAGAGAFQAGAEAIADQAIACAIAAQAIAAAIgCQAIgDAGgEQAHgFADgHQAEgHAAgIQAAgIgEgHQgDgHgHgFQgGgEgIgCQgIgDgIAAQgIAAgHADg");
	this.shape.setTransform(122,95.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCB522").s().p("AgfBuQgPgFgLgKQgMgKgGgOQgHgPAAgSIAAhMQAAgRAHgPQAGgOAMgKQALgKAPgGQAPgFARAAQARAAAPAFQAPAGALAKQALAKAHAOQAGAPAAARIAABMQAAASgGAPQgHAOgLAKQgLAKgPAFQgPAGgRAAQgRAAgPgGgAgRhZQgJACgHAFQgHAEgFAHQgFAHgDAJQgDAKAAAOIAAA/QAAANADALQADAIAFAHQAFAHAHAFQAHAEAJADQAJACAJAAQAJAAAJgCQAJgDAHgEQAHgFAFgHQAFgHACgIQAEgLAAgNIAAg/QAAgOgEgKQgCgJgFgHQgFgHgHgEQgHgFgJgCQgJgDgJAAQgJAAgJADg");
	this.shape_1.setTransform(101.5,95.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FCB522").s().p("AgLALQgEgFgBgGQABgGAEgEQAEgEAHAAQAHAAAEAEQAFAEABAGQgBAGgFAFQgEAEgHAAQgGAAgFgEg");
	this.shape_2.setTransform(87.2,105.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FCB522").s().p("AggBvQgPgFgLgIQgLgJgGgNQgGgNAAgQQAAgLAEgKQADgKAGgIQAGgHAIgFQAIgFAKgDQgOgHgIgLQgEgGgCgGQgCgHAAgIQAAgNAFgLQAEgKAKgIQAJgHAMgEQAMgEAOAAQAOAAANAEQAMAEAJAHQAKAIAFAKQAFALAAAMQAAAIgDAHQgCAHgEAGQgIALgPAHQAKAEAIAFQAJAFAFAHQAHAHADAJQADAKABAMQAAAPgGANQgHAMgLAJQgLAKgPAFQgPAEgRAAQgRAAgPgEgAgUACQgKADgIAGQgIAHgEAIQgFAJAAALQAAALAFAJQAEAIAIAHQAIAGAKADQAKADAKAAQALAAAKgDQAKgDAIgGQAIgHAEgIQAFgJAAgLQAAgLgFgJQgEgJgIgGQgIgGgKgDQgKgCgLAAQgKAAgKACgAgPhaQgIACgGAFQgHAEgDAHQgEAHAAAIQAAAJAEAHQADAGAGAFQAGAEAIADQAIACAIAAQAIAAAIgCQAIgDAGgEQAHgFADgHQAEgHAAgIQAAgIgEgHQgDgHgHgFQgGgEgIgCQgIgDgIAAQgIAAgHADg");
	this.shape_3.setTransform(73.4,95.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FCB522").s().p("AgfBuQgPgFgLgKQgMgKgGgOQgHgPAAgSIAAhMQAAgRAHgPQAGgOAMgKQALgKAPgGQAPgFARAAQARAAAPAFQAPAGALAKQALAKAHAOQAGAPAAARIAABMQAAASgGAPQgHAOgLAKQgLAKgPAFQgPAGgRAAQgRAAgPgGgAgRhZQgJACgHAFQgHAEgFAHQgFAHgDAJQgDAKAAAOIAAA/QAAANADALQADAIAFAHQAFAHAHAFQAHAEAJADQAJACAJAAQAJAAAJgCQAJgDAHgEQAHgFAFgHQAFgHACgIQAEgLAAgNIAAg/QAAgOgEgKQgCgJgFgHQgFgHgHgEQgHgFgJgCQgJgDgJAAQgJAAgJADg");
	this.shape_4.setTransform(52.9,95.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgiCDQgPgFgMgJQgMgKgHgNQgHgOgCgSIAeAAQABALAFAIQAFAJAIAGQAHAFAKADQAKADALAAQAKAAAKgDQALgDAJgHQAJgHAFgLQAGgNAAgQQAAgRgGgNQgGgMgLgGQgKgHgOgDQgLgDgPAAIgkACQgSACgNAEIAAiBICcAAIAAAdIh/AAIAABFQAUgFAVAAQAUAAASAFQATAFAOAKQAPALAIAQQAEAJACAKQACALgBAMQAAAUgGAQQgHAQgMAMQgMAMgRAGQgRAHgUAAQgRAAgPgFg");
	this.shape_5.setTransform(125.2,130.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAoCFIAAg7IiIAAIAAgOICGjAIAfAAIAAC0IAcAAIAAAaIgcAAIAAA7gAg6AxIBkAAIAAhCIAChQIgBAAg");
	this.shape_6.setTransform(102.4,130.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgNBMQgGgFAAgIQAAgIAGgFQAFgFAIAAQAIAAAGAFQAFAFABAIQgBAIgFAFQgGAGgIAAQgIAAgFgGgAgNgyQgGgFAAgHQAAgJAGgFQAFgEAIAAQAIAAAGAEQAFAFABAJQgBAHgFAFQgGAGgIAAQgIAAgFgGg");
	this.shape_7.setTransform(87,135.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhDCFIAAgZIA1AAIAAjXIgvAAIAAgaIBMAAIAADxIA1AAIAAAZg");
	this.shape_8.setTransform(74.6,129.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhTCHIAAgHIBtiIQAMgPAGgRQAGgSgCgOQgCgQgMgJQgGgFgJgCQgIgDgLAAQgLAAgJADQgKADgHAFQgGAGgDAIQgEAJgCAMIgaAAQABgSAFgOQAGgNAKgJQAKgKAOgFQAPgEARAAQASAAAOAEQAOAFAKAIQAKAJAFALQAFALACANQACASgGASQgKAagJALIhWBrIBzAAIAAAcg");
	this.shape_9.setTransform(55.5,129.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(41.4,81.3,96.6,73.2), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.back();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.861,0.861);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,534,313.5), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.forreg();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,217,23), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.grifna();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,46,63), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ninty();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,153,64), null);


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

	// Layer 1
	this.instance = new lib.give();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,216,37), null);


(lib.Symbol40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol8();
	this.instance.parent = this;
	this.instance.setTransform(267,154.8,1,1,0,0,0,267,156.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:266.9,regY:156.7,scaleX:1.09,scaleY:1.09},49,cjs.Ease.quadInOut).to({regX:267,regY:156.8,scaleX:1,scaleY:1},50,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-2,534,313.5);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol7();
	this.instance.parent = this;
	this.instance.setTransform(108.5,11.5,1,1,0,0,0,108.5,11.5);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol22, new cjs.Rectangle(0,0,225,31), null);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol6();
	this.instance.parent = this;
	this.instance.setTransform(23,31.5,1,1,0,0,0,23,31.5);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol21, new cjs.Rectangle(0,0,54,71), null);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol5();
	this.instance.parent = this;
	this.instance.setTransform(76.5,32,1,1,0,0,0,76.5,32);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(0,0,161,72), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(108,18.5,1,1,0,0,0,108,18.5);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,224,45), null);


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
	this.instance_1.setTransform(336.5,155,1,1,0,0,0,234.5,155);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(28,-3.9,475,313), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_24 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(1));

	// Symbol 22
	this.instance = new lib.Symbol22();
	this.instance.parent = this;
	this.instance.setTransform(183.5,146.6,1.144,1.144,0,0,0,108.5,11.6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({_off:false},0).to({regY:11.5,scaleX:1,scaleY:1,y:146.5,alpha:1},13,cjs.Ease.backInOut).wait(1));

	// Symbol 21
	this.instance_1 = new lib.Symbol21();
	this.instance_1.parent = this;
	this.instance_1.setTransform(268.2,88.6,1.206,1.206,0,0,0,23.1,31.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).to({regX:23,scaleX:1,scaleY:1,x:268,y:88.5,alpha:1},14,cjs.Ease.backInOut).wait(5));

	// Symbol 19
	this.instance_2 = new lib.Symbol19();
	this.instance_2.parent = this;
	this.instance_2.setTransform(151.5,88.1,1.173,1.173,0,0,0,76.5,32);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).to({scaleX:1,scaleY:1,y:88,alpha:1},14,cjs.Ease.backInOut).wait(9));

	// Symbol 9
	this.instance_3 = new lib.Symbol9();
	this.instance_3.parent = this;
	this.instance_3.setTransform(183,29.6,1.131,1.131,0,0,0,108,18.5);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1,scaleY:1,y:29.5,alpha:1},14,cjs.Ease.backInOut).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(60.8,8.6,253,50);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_40 = function() {
		var _this = this;
		
		_this.stop();
		setTimeout(function(){
				_this.play();
		}, 3000);
	}
	this.frame_59 = function() {
		var _this = this;
		
		_this.stop();
		setTimeout(function(){
				_this.play();
		}, 3000);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(40).call(this.frame_40).wait(19).call(this.frame_59).wait(1));

	// Symbol 11
	this.instance = new lib.Symbol11();
	this.instance.parent = this;
	this.instance.setTransform(151.6,152.1,1,1,0,0,0,15.3,12);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({regX:14.4,scaleX:20.02,scaleY:20.02,x:275.9},0).to({regX:15.3,scaleX:1,scaleY:1,x:151.6,alpha:1},10,cjs.Ease.get(-1)).to({_off:true},22).wait(19));

	// Symbol 16
	this.instance_1 = new lib.Symbol16();
	this.instance_1.parent = this;
	this.instance_1.setTransform(146.3,20.5,1,1,0,0,0,77,20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(25).to({y:10.5},3).to({y:20.5},3).wait(29));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_19 = new cjs.Graphics().p("AIqMHQgpgogBg4IAAgDIAAgCQAAg7AqgqQAqgqA7AAQA7AAAqAqQAqAqAAA7IAAACIAAADQgCA4goAoQgqAqg7AAQg7AAgqgqg");
	var mask_graphics_20 = new cjs.Graphics().p("AIFMNQgygxgChEIAAgCIAAgDQAAhIA0gzQAzgzBIAAQBHAAAzAzQA0AzAABIIAAADIAAACQgCBEgyAxQgzA0hHAAQhIAAgzg0g");
	var mask_graphics_21 = new cjs.Graphics().p("AGVMhQhLhMgDhoIAAgEIAAgFQAAhuBOhOQBPhPBuAAQBuAABOBPQBPBOAABuIAAAFIAAAEQgDBohMBMQhOBOhuAAQhuAAhPhOg");
	var mask_graphics_22 = new cjs.Graphics().p("ADbNBQh3h4gFilIAAgGIAAgHQAAiuB8h8QB8h8CvAAQCuAAB8B8QB8B8AACuIAAAHIAAAGQgFClh3B4Qh8B8iuAAQivAAh8h8g");
	var mask_graphics_23 = new cjs.Graphics().p("AgoNuQi1i1gGj6IAAgJIAAgLQAAkIC7i7QC7i8EIAAQEIAAC7C8QC8C7AAEIIAAALIAAAJQgHD6i1C1Qi7C8kIAAQkIAAi7i8g");
	var mask_graphics_24 = new cjs.Graphics().p("Al2OoQkEkEgKloIAAgNIAAgQQAAl5EOkOQEOkOF6AAQF6AAEOEOQEOEOAAF5IAAAQIAAANQgKFokEEEQkOEOl6AAQl6AAkOkOg");
	var mask_graphics_25 = new cjs.Graphics().p("AsOPvQllllgNntIAAgSIAAgWQAAoGFylyQFxlyIHAAQIHAAFyFyQFyFyAAIGIAAAWIAAASQgNHtllFlQlyFyoHAAQoHAAlxlyg");
	var mask_graphics_26 = new cjs.Graphics().p("AyVSWQnXnXgRqLIAAgXIAAgdQAAqtHonoQHonoKtAAQKuAAHoHoQHoHoAAKtIAAAdIAAAXQgRKLnXHXQnoHoquAAQqtAAnonog");
	var mask_graphics_27 = new cjs.Graphics().p("A28W9QpNpNgWsvIAAgdIAAgkQAAtZJjpjQJjpjNZAAQNaAAJjJjQJjJjAANZIAAAkIAAAdQgWMvpNJNQpjJjtaAAQtZAApjpjg");
	var mask_graphics_28 = new cjs.Graphics().p("A7LbMQq6q6gavEIAAgjIAAgrQAAv4LUrTQLTrUP4AAQP5AALTLUQLULTAAP4IAAArIAAAjQgaPEq6K6QrTLUv5AAQv4AArTrUg");
	var mask_graphics_29 = new cjs.Graphics().p("A/DfEQsdsdgdxOIAAgoIAAgxQAAyIM6s7QM7s6SIAAQSJAAM7M6QM6M7AASIIAAAxIAAAoQgdROsdMdQs7M6yJAAQyIAAs7s6g");
	var mask_graphics_30 = new cjs.Graphics().p("EgijAikQt3t3ghzKIAAgsIAAg3QAA0LOYuYQOYuYULAAQUMAAOYOYQOYOYAAULIAAA3IAAAsQghTKt3N3QuYOY0MAAQ0LAAuYuYg");
	var mask_graphics_31 = new cjs.Graphics().p("EglrAlsQvIvHgj06IAAgvIAAg8QAA2APrvrQPrvrWAAAQWBAAPrPrQPrPrAAWAIAAA8IAAAvQgjU6vIPHQvrPr2BAAQ2AAAvrvrg");
	var mask_graphics_32 = new cjs.Graphics().p("EgocAodQwOwOgn2cIAAgzIAAhAQAA3nQ1w1QQ0w1XoAAQXpAAQ0Q1QQ1Q1AAXnIAABAIAAAzQgnWcwOQOQw0Q13pAAQ3oAAw0w1g");
	var mask_graphics_33 = new cjs.Graphics().p("Egq2Aq2QxLxLgp3xIAAg2IAAhEQAA5BR0x0QR1x1ZBAAQZCAAR0R1QR1R0AAZBIAABEIAAA2QgpXxxMRLQx0R15CAAQ5BAAx1x1g");
	var mask_graphics_34 = new cjs.Graphics().p("Egs3As4QyAyAgr44IAAg5IAAhHQAA6NSryqQSqyraNAAQaOAASqSrQSrSqAAaNIAABHIAAA5QgrY4yASAQyqSr6OAAQ6NAAyqyrg");
	var mask_graphics_35 = new cjs.Graphics().p("EguhAuiQyryqgs5zIAAg7IAAhKQAA7LTXzWQTWzXbLAAQbMAATWTXQTXTWAAbLIAABKIAAA7QgsZzyrSqQzWTX7MAAQ7LAAzWzXg");
	var mask_graphics_36 = new cjs.Graphics().p("Egv0Av1QzLzLgu6iIAAg8IAAhMQAA77T5z5QT5z5b7AAQb8AAT5T5QT5T5AAb7IAABMIAAA8QguaizLTLQz5T578AAQ77AAz5z5g");
	var mask_graphics_37 = new cjs.Graphics().p("EgwvAwwQzjzjgu7CIAAg+IAAhNQAA8dUR0SQUS0RcdAAQceAAUSURQURUSAAcdIAABNIAAA+QgubCzjTjQ0SUR8eAAQ8dAA0S0Rg");
	var mask_graphics_38 = new cjs.Graphics().p("EgxSAxTQzxzxgv7VIAAg/IAAhOQAA8yUg0gQUg0gcyAAQczAAUgUgQUgUgAAcyIAABOIAAA/QgvbVzxTxQ0gUg8zAAQ8yAA0g0gg");
	var mask_graphics_39 = new cjs.Graphics().p("EgxeAxfQz2z2gv7cIAAg/IAAhOQAA85Ul0lQUl0lc5AAQc6AAUlUlQUlUlAAc5IAABOIAAA/Qgvbcz2T2Q0lUl86AAQ85AA0l0lg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(19).to({graphics:mask_graphics_19,x:79.8,y:81.7}).wait(1).to({graphics:mask_graphics_20,x:81.4,y:83.3}).wait(1).to({graphics:mask_graphics_21,x:86.1,y:87.9}).wait(1).to({graphics:mask_graphics_22,x:94,y:95.7}).wait(1).to({graphics:mask_graphics_23,x:105,y:106.6}).wait(1).to({graphics:mask_graphics_24,x:119.2,y:120.6}).wait(1).to({graphics:mask_graphics_25,x:136.5,y:137.7}).wait(1).to({graphics:mask_graphics_26,x:147.8,y:149.5}).wait(1).to({graphics:mask_graphics_27,x:148.3,y:143.6}).wait(1).to({graphics:mask_graphics_28,x:148.9,y:138.3}).wait(1).to({graphics:mask_graphics_29,x:149.3,y:133.4}).wait(1).to({graphics:mask_graphics_30,x:149.7,y:128.9}).wait(1).to({graphics:mask_graphics_31,x:150.1,y:125}).wait(1).to({graphics:mask_graphics_32,x:150.5,y:121.4}).wait(1).to({graphics:mask_graphics_33,x:150.7,y:118.4}).wait(1).to({graphics:mask_graphics_34,x:151,y:115.8}).wait(1).to({graphics:mask_graphics_35,x:151.2,y:113.7}).wait(1).to({graphics:mask_graphics_36,x:151.3,y:112.1}).wait(1).to({graphics:mask_graphics_37,x:151.5,y:110.9}).wait(1).to({graphics:mask_graphics_38,x:151.5,y:110.2}).wait(1).to({graphics:mask_graphics_39,x:151.5,y:158.6}).wait(21));

	// t1
	this.instance_2 = new lib.Symbol15();
	this.instance_2.parent = this;
	this.instance_2.setTransform(63.6,64.1,1,1,0,0,0,63.6,12);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({_off:false},0).wait(4).to({x:53.6,y:54.1},3).to({x:63.6,y:64.1},3).wait(12).to({alpha:0},5).to({_off:true},1).wait(13));

	// t2
	this.instance_3 = new lib.Symbol13();
	this.instance_3.parent = this;
	this.instance_3.setTransform(240.9,64.1,1,1,0,0,0,50.6,12);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({_off:false},0).wait(4).to({x:250.9,y:54.1},3).to({x:240.9,y:64.1},3).wait(12).to({alpha:0},5).to({_off:true},1).wait(13));

	// t1logo
	this.instance_4 = new lib.Symbol14();
	this.instance_4.parent = this;
	this.instance_4.setTransform(62.3,155.9,1,1,0,0,0,52,69.9);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(19).to({_off:false},0).wait(2).to({x:52.3},4).to({x:62.3},4).wait(12).to({alpha:0},5).to({_off:true},1).wait(13));

	// t2logo
	this.instance_5 = new lib.Symbol12();
	this.instance_5.parent = this;
	this.instance_5.setTransform(242.3,159.5,1,1,0,0,0,54,63.5);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(19).to({_off:false},0).wait(2).to({x:252.3},4).to({x:242.3},4).wait(12).to({alpha:0},5).to({_off:true},1).wait(13));

	// Symbol 10
	this.instance_6 = new lib.Symbol10();
	this.instance_6.parent = this;
	this.instance_6.setTransform(439.8,122.2,1,1,0,0,0,87.5,112.5);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(26).to({_off:false},0).wait(15).to({alpha:0},5).to({_off:true},1).wait(13));

	// Слой 2
	this.instance_7 = new lib.Символ2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(145.3,137.2,1,1,0,0,0,171.3,82.2);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(46).to({alpha:0.461},6,cjs.Ease.get(-1)).to({alpha:1},7,cjs.Ease.get(1)).wait(1));

	// Layer 4
	this.instance_8 = new lib.Символ1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(438.7,42,1,1,0,0,0,89.7,43);

	this.instance_9 = new lib.Symbol20();
	this.instance_9.parent = this;
	this.instance_9.setTransform(440.9,197.9,1,1,0,0,0,87.5,27);
	new cjs.ButtonHelper(this.instance_9, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8}]}).wait(60));

	// Layer 9 copy
	this.instance_10 = new lib.Symbol18();
	this.instance_10.parent = this;
	this.instance_10.setTransform(145.1,149.1,0.283,0.283,0,0,0,57.2,57.2);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(19).to({_off:false},0).to({scaleX:3.08,scaleY:3.08,x:147.4,y:145},7).to({regX:55.8,regY:55.9,scaleX:8.28,scaleY:8.28,x:139.8,y:138},13).to({_off:true},1).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34.8,0,492.2,225.4);


// stage content:
(lib.olimp_realmu640350 = function(mode,startPosition,loop) {
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
	this.instance.setTransform(313.8,153.8,1.059,1.059,0,0,0,263.6,116);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.ramka();
	this.instance_1.parent = this;
	this.instance_1.setTransform(23,21,1.073,1.023);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 6
	this.instance_2 = new lib.Symbol1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(124.5,152,1,1,0,0,0,234.5,155);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(182.1,124.6,760,375);
// library properties:
lib.properties = {
	id: '056DADFE5E13401B8D85320E94262F4F',
	width: 640,
	height: 305,
	fps: 30,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/back.jpg?1502185117872", id:"back"},
		{src:"images/btn1.png?1502185117872", id:"btn1"},
		{src:"images/btn2.png?1502185117872", id:"btn2"},
		{src:"images/forreg.png?1502185117872", id:"forreg"},
		{src:"images/give.png?1502185117872", id:"give"},
		{src:"images/grifna.png?1502185117872", id:"grifna"},
		{src:"images/logo.png?1502185117872", id:"logo"},
		{src:"images/mulogo.png?1502185117872", id:"mulogo"},
		{src:"images/ninty.png?1502185117872", id:"ninty"},
		{src:"images/ramka.png?1502185117872", id:"ramka"},
		{src:"images/reallogo.png?1502185117872", id:"reallogo"},
		{src:"images/stav.png?1502185117872", id:"stav"}
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
an.compositions['056DADFE5E13401B8D85320E94262F4F'] = {
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