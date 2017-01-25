(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.armo = function() {
	this.initialize(img.armo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,74,74);


(lib.back1 = function() {
	this.initialize(img.back1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,841,291);


(lib.back2 = function() {
	this.initialize(img.back2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,400);


(lib.dust = function() {
	this.initialize(img.dust);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,282);


(lib.health = function() {
	this.initialize(img.health);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,89,89);


(lib.helic = function() {
	this.initialize(img.helic);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,60,21);


(lib.pric = function() {
	this.initialize(img.pric);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,201,201);


(lib.sniper = function() {
	this.initialize(img.sniper);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,276,194);


(lib.soldir = function() {
	this.initialize(img.soldir);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,40,58);


(lib.zzzok = function() {
	this.initialize(img.zzzok);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,44,30);// helper functions:

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


(lib.Symbol50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AgSDzQgKgSgIglIgLgvQgCgIABgPIAAgWIgSgdQgHgLgBgEIgBgJIguACQgXABg1gHQg1gHAFgTQAFgRAwgHQAvgIAWAAIAngBIABgCIAPgNQAIgGAHgJQAFgHACgHQACgHAAgNIAAhGQAAgNACgFIALgnQAIgfAOgDQAMgEAHAmIAJAzQAEAEACAFQAEAHABALIgBATQgBAZAGAYQADAPAGALIAJAQIBIAAQAUAAAkAIQAkAHAXARQAXASg6AHQg7AHgVAAIg4AAIgDADQgFAFgNAGIgWAvQgHgjgCADIgCAHIAAACIABAEQAKAagMAaIgCAHQgEAJgHA3QgGApgIAAQgCAAgCgEg");
	this.shape.setTransform(24.6,24.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol50, new cjs.Rectangle(0,0,49.2,49.4), null);


(lib.Symbol47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Ag2gpIABgCIBqAAIABACIg2BVg");
	this.shape.setTransform(5.5,4.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol47, new cjs.Rectangle(0,0,10.9,8.9), null);


(lib.Symbol46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AglCfIgWk+IB3AAIgTE+g");
	this.shape.setTransform(6,16);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol46, new cjs.Rectangle(0,0,12,31.9), null);


(lib.Symbol40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009900").s().p("AhtB6IAAj0IB9AAQAXABARAFQAQAGALAKQAIAIAEAJQAEALAAANQAAAKgDAJQgDAIgFAHQgFAHgHAFIgPAIIAUAIQAJAGAGAGQAHAIADAJQAEAKAAANQAAAPgHANQgGANgMAIQgMAKgRAEQgSAFgVgBgAgqBEIAzAAQAQAAAIgGQAJgGAAgLQAAgKgJgGQgIgGgRgBIgyAAgAgqgYIAqAAQAPAAAIgGQAIgFAAgLQAAgKgHgFQgIgGgPAAIgrAAg");
	this.shape.setTransform(11,12.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol40, new cjs.Rectangle(0,0,22,24.5), null);


(lib.Symbol39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009900").s().p("AhjB6IAAj0IDFAAIAAA6IiBAAIAAAmIB1AAIAAA0Ih1AAIAAAnICCAAIAAA5g");
	this.shape.setTransform(10,12.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol39, new cjs.Rectangle(0,0,19.9,24.5), null);


(lib.Symbol38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009900").s().p("AA6CTIAAgxIi1AAIAAj0IBEAAIAAC4IBTAAIAAi4IBEAAIAAC4IAcAAIgIBtg");
	this.shape.setTransform(12.4,14.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol38, new cjs.Rectangle(0,0,24.8,29.4), null);


(lib.Symbol37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009900").s().p("AArB6IAAhcIhVAAIAABcIhFAAIAAj0IBFAAIAABcIBVAAIAAhcIBFAAIAAD0g");
	this.shape.setTransform(11.2,12.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol37, new cjs.Rectangle(0,0,22.3,24.5), null);


(lib.Symbol36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009900").s().p("ABBB7IgSgrIheAAIgSArIhHAAIBoj2IBBAAIBoD2gAAbAbIgbhFIgbBFIA2AAg");
	this.shape.setTransform(13.7,12.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol36, new cjs.Rectangle(0,0,27.4,24.7), null);


(lib.Symbol35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009900").s().p("AghB6IAAi4IhKAAIAAg8IDXAAIAAA8IhKAAIAAC4g");
	this.shape.setTransform(10.8,12.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol35, new cjs.Rectangle(0,0,21.5,24.5), null);


(lib.Symbol34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009900").s().p("AgQB9QgMgDgLgEQgMgFgKgHQgKgGgJgJQgIgIgHgKQgHgLgFgLQgEgMgDgNQgCgMAAgOQAAgMACgNQADgMAEgMQAFgMAHgKQAHgKAIgJQAJgIAKgHQALgHALgFQAMgEANgDQANgCANgBQASAAAQAEQAPAEANAHQAMAHAKAJQAKAKAJAMIgyAmQgLgOgMgHQgOgHgRAAQgMAAgLAEQgKAGgIAIQgIAJgEAMQgFANAAAMQAAAOAFAMQAEALAIAJQAIAKAKAFQALAEAMAAQAJAAAIgCQAIgCAHgEQALgGAMgQIAzAlQgJAMgKAKQgLAKgMAIQgOAHgQAEQgQAFgUgBQgMAAgNgCg");
	this.shape.setTransform(11.7,12.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol34, new cjs.Rectangle(0,0,23.5,25.5), null);


(lib.Symbol33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009900").s().p("AhtB6IAAj0IB9AAQAXABARAFQAQAGALAKQAIAIAEAJQAEALAAANQAAAKgDAJQgDAIgFAHQgFAHgHAFIgPAIIAUAIQAJAGAGAGQAHAIADAJQAEAKAAANQAAAPgHANQgGANgMAIQgMAKgRAEQgSAFgVgBgAgqBEIAzAAQAQAAAIgGQAJgGAAgLQAAgKgJgGQgIgGgRgBIgyAAgAgqgYIAqAAQAPAAAIgGQAIgFAAgLQAAgKgHgFQgIgGgPAAIgrAAg");
	this.shape.setTransform(11,12.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol33, new cjs.Rectangle(0,0,22,24.5), null);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009900").s().p("AgbB9QgNgDgMgFQgMgEgKgHQgLgHgIgJQgJgIgHgLQgHgKgFgLQgFgMgCgMQgDgNAAgNQAAgMADgNQACgMAFgLQAFgMAHgLQAHgKAJgIQAJgJAKgHQALgHAMgFQAMgEANgDQANgCANgBQAOABAOACQANADAMAEQAMAFAKAHQALAHAJAIQAIAJAHAKQAHAKAFAMQAFAMACAMQADANAAAMQAAANgDANQgCAMgFAMQgFALgHAKQgHAKgJAJQgJAIgKAIQgLAGgMAFQgMAFgNADQgNACgOAAQgNAAgOgCgAgZg8QgLAFgIAJQgIAJgFAMQgEANAAAMQAAANAEANQAFALAIAJQAJAKALAFQAMAFAMAAQAOAAAMgFQALgFAIgKQAJgIAEgMQAFgMAAgOQAAgMgFgNQgEgLgJgKQgIgIgMgGQgMgFgNAAQgNAAgMAFg");
	this.shape.setTransform(13.2,12.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol32, new cjs.Rectangle(0,0,26.4,25.5), null);


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009900").s().p("AAqB6IAAi4IhTAAIAAC4IhEAAIAAj0IDbAAIAAD0g");
	this.shape.setTransform(11,12.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol31, new cjs.Rectangle(0,0,22,24.5), null);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009900").s().p("AAuChIAAiLIheCLIhAAAIAAj1IBEAAIAACKIBdiKIBAAAIAAD1gAgUhnQgKgDgIgIQgIgGgFgKQgFgKgCgNIAlgHQADALAGAFQAGAGAIgBQAKABAGgGQAFgFAEgLIAlAHQgCANgFAKQgFAKgIAGQgIAIgKADQgLAEgNAAQgLAAgLgEg");
	this.shape.setTransform(11.3,16.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol30, new cjs.Rectangle(0,0,22.6,32.1), null);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009900").s().p("ABBB7IgSgrIheAAIgSArIhHAAIBoj2IBBAAIBoD2gAAbAbIgbhFIgbBFIA2AAg");
	this.shape.setTransform(13.7,12.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol29, new cjs.Rectangle(0,0,27.4,24.7), null);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009900").s().p("AA/B6IAAiLIg/BeIAAAAIg/hdIAACKIhCAAIAAj0IBIAAIA5BgIA7hgIBHAAIAAD0g");
	this.shape.setTransform(13,12.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol28, new cjs.Rectangle(0,0,26.1,24.5), null);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009900").s().p("AAuB6IAAiIIheCIIhAAAIAAj0IBEAAIAACJIBdiJIBAAAIAAD0g");
	this.shape.setTransform(11.3,12.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol27, new cjs.Rectangle(0,0,22.6,24.5), null);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009900").s().p("AArB6IAAhcIhVAAIAABcIhFAAIAAj0IBFAAIAABcIBVAAIAAhcIBFAAIAAD0g");
	this.shape.setTransform(11.2,12.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol26, new cjs.Rectangle(0,0,22.3,24.5), null);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009900").s().p("AgQB9QgMgDgLgEQgMgFgKgHQgKgGgJgJQgIgIgHgKQgHgLgFgLQgEgMgDgNQgCgMAAgOQAAgMACgNQADgMAEgMQAFgMAHgKQAHgKAIgJQAJgIAKgHQALgHALgFQAMgEANgDQANgCANgBQASAAAQAEQAPAEANAHQAMAHAKAJQAKAKAJAMIgyAmQgLgOgMgHQgOgHgRAAQgMAAgLAEQgKAGgIAIQgIAJgEAMQgFANAAAMQAAAOAFAMQAEALAIAJQAIAKAKAFQALAEAMAAQAJAAAIgCQAIgCAHgEQALgGAMgQIAzAlQgJAMgKAKQgLAKgMAIQgOAHgQAEQgQAFgUgBQgMAAgNgCg");
	this.shape.setTransform(11.7,12.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol25, new cjs.Rectangle(0,0,23.5,25.5), null);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sniper();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(0,0,276,194), null);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.helic();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(0,0,60,21), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.soldir();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,40,58), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.dust();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,500,282), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.health();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,89,89), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.zzzok();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,44,30), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.armo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,74,74), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pric();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,201,201), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.back2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.047,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,838,400), null);


(lib.Symbol49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol50();
	this.instance.parent = this;
	this.instance.setTransform(23.7,23.7,0.729,0.729,-42.9,0,0,24.7,24.7);
	this.instance.alpha = 0.711;

	this.instance_1 = new lib.Symbol50();
	this.instance_1.parent = this;
	this.instance_1.setTransform(24.6,24.7,1,1,0,0,0,24.6,24.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol49, new cjs.Rectangle(-1.7,-1.7,51,51.1), null);


(lib.Symbol45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol47();
	this.instance.parent = this;
	this.instance.setTransform(5.5,4.4,1,1,0,0,0,5.5,4.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:7.6},4).to({y:4.4},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,10.9,8.9);


(lib.Symbol44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol46();
	this.instance.parent = this;
	this.instance.setTransform(6,16,1,1,0,0,0,6,16);

	this.instance_1 = new lib.Symbol45();
	this.instance_1.parent = this;
	this.instance_1.setTransform(6.8,40.6,1,1,0,0,0,5.5,4.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol44, new cjs.Rectangle(0,0,12.2,45), null);


(lib.Symbol43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol44();
	this.instance.parent = this;
	this.instance.setTransform(2.6,22,1,1,-8.7,0,0,6,22.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:0,x:5.8,y:22.9},4,cjs.Ease.get(-1)).to({regY:22.5,rotation:10.5,x:10,y:24},5,cjs.Ease.get(1)).to({regY:22.4,rotation:0.8,x:6.3,y:22.9},5,cjs.Ease.get(-1)).to({regY:22.6,rotation:-8.7,x:2.6,y:22},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.8,-1.2,18.9,46.1);


(lib.Symbol42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol10();
	this.instance.parent = this;
	this.instance.setTransform(16.1,23.1,0.8,0.8,0,0,0,20.1,28.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol42, new cjs.Rectangle(0,0,32,46.4), null);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 40
	this.instance = new lib.Symbol40();
	this.instance.parent = this;
	this.instance.setTransform(419.1,19.8,1,1,0,0,0,11,12.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({scaleX:0.18,alpha:0},4,cjs.Ease.get(-1)).to({scaleX:1,alpha:1},5,cjs.Ease.get(1)).wait(26));

	// Symbol 39
	this.instance_1 = new lib.Symbol39();
	this.instance_1.parent = this;
	this.instance_1.setTransform(394.8,19.8,1,1,0,0,0,10,12.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({scaleX:0.2,alpha:0},4,cjs.Ease.get(-1)).to({scaleX:1,alpha:1},5,cjs.Ease.get(1)).wait(27));

	// Symbol 38
	this.instance_2 = new lib.Symbol38();
	this.instance_2.parent = this;
	this.instance_2.setTransform(370.1,22.3,1,1,0,0,0,12.3,14.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(13).to({regX:12.4,scaleX:0.19,x:370.2,alpha:0},4,cjs.Ease.get(-1)).to({regX:12.3,scaleX:1,x:370.1,alpha:1},5,cjs.Ease.get(1)).wait(28));

	// Symbol 37
	this.instance_3 = new lib.Symbol37();
	this.instance_3.parent = this;
	this.instance_3.setTransform(342.4,19.8,1,1,0,0,0,11.2,12.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(12).to({scaleX:0.19,alpha:0},4,cjs.Ease.get(-1)).to({scaleX:1,alpha:1},5,cjs.Ease.get(1)).wait(29));

	// Symbol 36
	this.instance_4 = new lib.Symbol36();
	this.instance_4.parent = this;
	this.instance_4.setTransform(315.2,19.7,1,1,0,0,0,13.7,12.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(11).to({scaleX:0.16,alpha:0},4,cjs.Ease.get(-1)).to({scaleX:1,alpha:1},5,cjs.Ease.get(1)).wait(30));

	// Symbol 35
	this.instance_5 = new lib.Symbol35();
	this.instance_5.parent = this;
	this.instance_5.setTransform(289.8,19.8,1,1,0,0,0,10.8,12.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10).to({scaleX:0.21,x:289.7,alpha:0},4,cjs.Ease.get(-1)).to({scaleX:1,x:289.8,alpha:1},5,cjs.Ease.get(1)).wait(31));

	// Symbol 34
	this.instance_6 = new lib.Symbol34();
	this.instance_6.parent = this;
	this.instance_6.setTransform(265.7,19.9,1,1,0,0,0,11.7,12.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(9).to({regX:11.8,scaleX:0.17,alpha:0},4,cjs.Ease.get(-1)).to({regX:11.7,scaleX:1,alpha:1},5,cjs.Ease.get(1)).wait(32));

	// Symbol 33
	this.instance_7 = new lib.Symbol33();
	this.instance_7.parent = this;
	this.instance_7.setTransform(240.8,19.8,1,1,0,0,0,11,12.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(8).to({scaleX:0.18,alpha:0},4,cjs.Ease.get(-1)).to({scaleX:1,alpha:1},5,cjs.Ease.get(1)).wait(33));

	// Symbol 32
	this.instance_8 = new lib.Symbol32();
	this.instance_8.parent = this;
	this.instance_8.setTransform(213.1,19.9,1,1,0,0,0,13.2,12.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(7).to({scaleX:0.17,alpha:0},4,cjs.Ease.get(-1)).to({scaleX:1,alpha:1},5,cjs.Ease.get(1)).wait(34));

	// Symbol 31
	this.instance_9 = new lib.Symbol31();
	this.instance_9.parent = this;
	this.instance_9.setTransform(185.5,19.8,1,1,0,0,0,11,12.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(6).to({scaleX:0.18,alpha:0},4,cjs.Ease.get(-1)).to({scaleX:1,alpha:1},5,cjs.Ease.get(1)).wait(35));

	// Symbol 30
	this.instance_10 = new lib.Symbol30();
	this.instance_10.parent = this;
	this.instance_10.setTransform(149.2,16.1,1,1,0,0,0,11.2,16.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(5).to({regX:11.3,scaleX:0.2,x:149.3,alpha:0},4,cjs.Ease.get(-1)).to({regX:11.2,scaleX:1,x:149.2,alpha:1},5,cjs.Ease.get(1)).wait(36));

	// Symbol 29
	this.instance_11 = new lib.Symbol29();
	this.instance_11.parent = this;
	this.instance_11.setTransform(121.9,19.7,1,1,0,0,0,13.7,12.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(4).to({scaleX:0.2,alpha:0},4,cjs.Ease.get(-1)).to({scaleX:1,alpha:1},5,cjs.Ease.get(1)).wait(37));

	// Symbol 28
	this.instance_12 = new lib.Symbol28();
	this.instance_12.parent = this;
	this.instance_12.setTransform(92.8,19.8,1,1,0,0,0,13,12.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(3).to({regX:13.1,scaleX:0.23,x:92.9,alpha:0},4,cjs.Ease.get(-1)).to({regX:13,scaleX:1,x:92.8,alpha:1},5,cjs.Ease.get(1)).wait(38));

	// Symbol 27
	this.instance_13 = new lib.Symbol27();
	this.instance_13.parent = this;
	this.instance_13.setTransform(64.2,19.8,1,1,0,0,0,11.2,12.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(2).to({regX:11.3,scaleX:0.18,x:64.3,alpha:0},4,cjs.Ease.get(-1)).to({regX:11.2,scaleX:1,x:64.2,alpha:1},5,cjs.Ease.get(1)).wait(39));

	// Symbol 26
	this.instance_14 = new lib.Symbol26();
	this.instance_14.parent = this;
	this.instance_14.setTransform(37.6,19.8,1,1,0,0,0,11.2,12.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1).to({scaleX:0.19,x:37.5,alpha:0},4,cjs.Ease.get(-1)).to({scaleX:1,x:37.6,alpha:1},5,cjs.Ease.get(1)).wait(40));

	// Symbol 25
	this.instance_15 = new lib.Symbol25();
	this.instance_15.parent = this;
	this.instance_15.setTransform(11.7,19.9,1,1,0,0,0,11.7,12.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({regX:11.8,scaleX:0.17,x:11.8,alpha:0},4,cjs.Ease.get(-1)).to({regX:11.7,scaleX:1,x:11.7,alpha:1},5,cjs.Ease.get(1)).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,430.1,37);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol24();
	this.instance.parent = this;
	this.instance.setTransform(201.4,2.5,1.149,1.179,0,0,0,214.9,18.4);
	this.instance.alpha = 0.148;

	this.instance_1 = new lib.Symbol24();
	this.instance_1.parent = this;
	this.instance_1.setTransform(202.4,6.4,1.123,1.123,0,0,0,215,18.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol23, new cjs.Rectangle(-45.5,-19.2,494,46.5), null);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol19();
	this.instance.parent = this;
	this.instance.setTransform(138,97,1,1,0,0,0,138,97);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol21, new cjs.Rectangle(0,0,276,194), null);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.pric = new lib.Symbol4();
	this.pric.parent = this;
	this.pric.setTransform(64.5,64.5,0.642,0.642,0,0,0,100.5,100.5);

	this.timeline.addTween(cjs.Tween.get(this.pric).to({x:132.7,y:117.8},7,cjs.Ease.get(-1)).to({x:210.5,y:178.6},8,cjs.Ease.get(1)).to({regX:100.6,regY:100.6,x:269.5,y:131.8},10,cjs.Ease.get(-1)).to({regX:100.5,regY:100.5,x:322.6,y:89.5},9,cjs.Ease.get(1)).to({regX:100.6,regY:100.6,x:416.9,y:122.7},7,cjs.Ease.get(-1)).to({regX:100.5,regY:100.5,x:524.6,y:160.6},8,cjs.Ease.get(1)).to({regX:100.6,regY:100.6,x:546.1,y:108.3},7,cjs.Ease.get(-1)).to({regX:100.5,regY:100.5,x:570.6,y:48.5},8,cjs.Ease.get(1)).to({regX:100.6,x:476.6,y:22.6},7,cjs.Ease.get(-1)).to({regX:100.5,x:382.6,y:-3.5},7,cjs.Ease.get(1)).to({regX:100.6,x:300.6,y:54.6},8,cjs.Ease.get(-1)).to({regX:100.5,x:218.5,y:112.6},8,cjs.Ease.get(1)).to({regX:100.6,regY:100.6,x:145.6,y:89.9},9,cjs.Ease.get(-1)).to({regX:100.5,regY:100.5,x:64.5,y:64.5},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,129,129);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol9();
	this.instance.parent = this;
	this.instance.setTransform(-884.3,141,1,1,0,0,0,250,141);

	this.instance_1 = new lib.Symbol9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-511.2,141,1,1,0,0,0,250,141);

	this.instance_2 = new lib.Symbol9();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-123.1,141,1,1,0,0,0,250,141);

	this.instance_3 = new lib.Symbol9();
	this.instance_3.parent = this;
	this.instance_3.setTransform(250,141,1,1,0,0,0,250,141);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(-1134.3,0,1634.3,282), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol7();
	this.instance.parent = this;
	this.instance.setTransform(22,15,1,1,0,0,0,22,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(0,0,44,30), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol13();
	this.instance.parent = this;
	this.instance.setTransform(22,15,1,1,0,0,0,22,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({scaleY:0.73,y:19},1).to({regY:15.1,scaleY:0.97,y:15.6},3).to({regY:15,scaleY:1,y:15},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,44,30);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FEFF01").ss(7.3,0,1).p("AAKFUQgFAAgFAAQiMAAhjhkQhkhjAAiNQAAiMBkhkQBjhjCMAAQCNAABjBjQBkBkAACMQAACJheBi");
	this.shape.setTransform(44.6,44.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.instance = new lib.Symbol12();
	this.instance.parent = this;
	this.instance.setTransform(46.5,45.5,1,1,0,0,0,22,15);

	this.instance_1 = new lib.Symbol8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(44.5,44.5,1,1,0,0,0,44.5,44.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,0,89,89), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol18();
	this.instance.parent = this;
	this.instance.setTransform(30.2,10.5,1,1,-9.5,0,0,30.1,10.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-762},99).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.3,-4.8,62.7,30.6);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol19();
	this.instance.parent = this;
	this.instance.setTransform(138,97,1,1,0,0,0,138,97);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:1.8,x:138.1,y:106.5},12,cjs.Ease.get(-1)).to({regX:138.1,rotation:3.7,y:117},13,cjs.Ease.get(1)).to({rotation:1.8,y:107},13,cjs.Ease.get(-1)).to({regX:138,rotation:0,x:138,y:97},13,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,276,194);


(lib.Symbol48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AHiLcQmHhpkqgrQksgsjrBEQjsBDC7oEQC7oDDcjDQDcjEEwAAQExAADXC+QDYC+gBJaQgCIBkbAAQgyAAg6gQg");
	mask.setTransform(29.2,-16.2);

	// Layer 3
	this.instance = new lib.Symbol49();
	this.instance.parent = this;
	this.instance.setTransform(7.1,11.1,0.258,0.258,0,0,0,24.7,24.7);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(13));

	// Layer 1
	this.instance_1 = new lib.Symbol42();
	this.instance_1.parent = this;
	this.instance_1.setTransform(16,75.9,1,1,0,0,0,16,23.2);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:23.2},14,cjs.Ease.get(1)).wait(14).to({rotation:18.5,x:21.8,y:70},11,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,52.7,32,5.9);


(lib.Symbol41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 8
	this.instance = new lib.Symbol43();
	this.instance.parent = this;
	this.instance.setTransform(-85,-55.3,0.924,0.924,5.3,0,0,6.1,22.4);
	this.instance.shadow = new cjs.Shadow("rgba(102,0,0,1)",0,0,7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(120).to({_off:false},0).wait(40));

	// Layer 7
	this.instance_1 = new lib.Symbol48();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-85.5,4,0.924,0.924,5.3,0,0,16,23.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(120).to({_off:false},0).wait(40));

	// Layer 6
	this.instance_2 = new lib.Symbol43();
	this.instance_2.parent = this;
	this.instance_2.setTransform(275.3,-57.6,0.924,0.924,5.3,0,0,6.1,22.4);
	this.instance_2.shadow = new cjs.Shadow("rgba(102,0,0,1)",0,0,7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(80).to({_off:false},0).to({_off:true},40).wait(40));

	// Layer 5
	this.instance_3 = new lib.Symbol48();
	this.instance_3.parent = this;
	this.instance_3.setTransform(274.8,1.6,0.924,0.924,5.3,0,0,16,23.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(80).to({_off:false},0).to({_off:true},40).wait(40));

	// Layer 4
	this.instance_4 = new lib.Symbol43();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-143,-1.1,1.238,1.238,-20.2,0,0,6,22.4);
	this.instance_4.shadow = new cjs.Shadow("rgba(102,0,0,1)",0,0,7);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(40).to({_off:false},0).to({_off:true},40).wait(80));

	// Layer 3
	this.instance_5 = new lib.Symbol48();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-109.4,70.8,1.238,1.238,-20.2,0,0,16,23.2);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(40).to({_off:false},0).to({_off:true},40).wait(80));

	// Layer 2
	this.instance_6 = new lib.Symbol43();
	this.instance_6.parent = this;
	this.instance_6.setTransform(32.4,-45.2,1,1,0,0,0,6,22.5);
	this.instance_6.shadow = new cjs.Shadow("rgba(102,0,0,1)",0,0,7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},40).wait(120));

	// Layer 1
	this.instance_7 = new lib.Symbol48();
	this.instance_7.parent = this;
	this.instance_7.setTransform(35.2,20.5,1,1,0,0,0,16,23.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true},40).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.1,-93.7,175,190.1);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol21();
	this.instance.parent = this;
	this.instance.setTransform(171.1,118,1,1,2.5,0,0,138.1,97);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:97.1,rotation:-4.8,x:165,y:126.6},7,cjs.Ease.get(-1)).to({regY:97.2,rotation:-13.5,x:158,y:136.2},8,cjs.Ease.get(1)).to({rotation:-6.3,x:168.3,y:117.8},9,cjs.Ease.get(-1)).to({rotation:1.7,x:179.8,y:97.3},10,cjs.Ease.get(1)).to({regY:97.1,rotation:7.3,x:219.9,y:113.3},8,cjs.Ease.get(-1)).to({rotation:12.4,x:284.8,y:127.2},7,cjs.Ease.get(1)).to({regY:97,scaleX:1,scaleY:1,rotation:23.8,x:305.5,y:143.8},8,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:33.7,x:312.9,y:158.2},7,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:21.8,x:261.9,y:133.8},7,cjs.Ease.get(-1)).to({regX:138.2,regY:97.1,scaleX:1,scaleY:1,rotation:9.9,x:220.9,y:109.3},7,cjs.Ease.get(1)).to({regY:97,rotation:0.8,x:200.4,y:113.3},8,cjs.Ease.get(-1)).to({regX:138.1,regY:97.1,rotation:-8.1,x:179.7,y:117.4},8,cjs.Ease.get(1)).to({regX:138.2,regY:97.2,rotation:-2.5,x:175.3,y:117.9},10,cjs.Ease.get(-1)).to({regX:138.1,regY:97,rotation:2.5,x:171.1,y:118},9,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(29,15.2,284.1,205.7);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol15();
	this.instance.parent = this;
	this.instance.setTransform(1384.3,141,1,1,0,0,0,250,141);
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(0,0,1634.3,282), null);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol17();
	this.instance.parent = this;
	this.instance.setTransform(817.1,141,1,1,0,0,0,817.1,141);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:1193.2},79).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1634.3,282);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol16();
	this.instance.parent = this;
	this.instance.setTransform(427,190,1,1,0,0,0,817.1,141);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(-390.1,49,1634.3,282), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol41();
	this.instance.parent = this;
	this.instance.setTransform(357.6,116.4,1,1,0,0,0,20,29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.back1();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,-6.4,841,297.4), null);


// stage content:
(lib.sniperdesert_640305 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.pric.alpha=0;
		this.gun.alpha=0;
		
		this.cursor = "none";
		this.pric.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor_2.bind(this));
		
		function fl_CustomMouseCursor_2() {
			this.pric.x = stage.mouseX/window.devicePixelRatio;
			this.pric.y = stage.mouseY/window.devicePixelRatio;
			this.gun.x = stage.mouseX/window.devicePixelRatio;
		}
		
		
		
		
		
		//---------------
		
		stage.canvas.addEventListener("mouseover", fl_Clickover3.bind(this));
		
		function fl_Clickover3()
		{
		
			this.pric.alpha=1;
			this.gun2.alpha=0;
			this.pric2.alpha=0;
			this.gun.alpha=1;
			
		
		}
		
		stage.canvas.addEventListener("mouseout", fl_Clickout3.bind(this));
		
		function fl_Clickout3()
		{
		
			this.pric.alpha=0;
			this.gun2.alpha=1;
			this.pric2.alpha=1;
			this.gun.alpha=0;
		
		}
		
		
		
		
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
		
		this.fon.x = - stage.mouseX/10/window.devicePixelRatio;
		this.back.x = - stage.mouseX/5/window.devicePixelRatio;
		}
		
		
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 12
	this.instance = new lib.Symbol23();
	this.instance.parent = this;
	this.instance.setTransform(357.2,65.8,1,1,0,0,0,236.1,37.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hp
	this.instance_1 = new lib.Symbol11();
	this.instance_1.parent = this;
	this.instance_1.setTransform(55.5,251.5,1,1,0,0,0,44.5,44.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// arm
	this.instance_2 = new lib.Symbol6();
	this.instance_2.parent = this;
	this.instance_2.setTransform(592,259,1,1,0,0,0,37,37);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// helic
	this.instance_3 = new lib.Symbol5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(694,27.5,1,1,0,0,0,30,10.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// snip
	this.gun2 = new lib.Symbol22();
	this.gun2.parent = this;
	this.gun2.setTransform(463,219,1,1,0,0,0,138,97);

	this.timeline.addTween(cjs.Tween.get(this.gun2).wait(1));

	// gun
	this.gun = new lib.Symbol3();
	this.gun.parent = this;
	this.gun.setTransform(734.1,322,1,1,0,0,0,2,193);

	this.timeline.addTween(cjs.Tween.get(this.gun).wait(1));

	// pric
	this.pric = new lib.Symbol4();
	this.pric.parent = this;
	this.pric.setTransform(890.5,131.5,1,1,0,0,0,100.5,100.5);

	this.timeline.addTween(cjs.Tween.get(this.pric).wait(1));

	// pric
	this.pric2 = new lib.Symbol20();
	this.pric2.parent = this;
	this.pric2.setTransform(70.3,137.6,1,1,0,0,0,64.5,64.5);

	this.timeline.addTween(cjs.Tween.get(this.pric2).wait(1));

	// dust
	this.instance_4 = new lib.Symbol14();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-310.9,211.1,1,1,0,0,0,250,141);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// back1
	this.back = new lib.Symbol2();
	this.back.parent = this;
	this.back.setTransform(-54.4,226.1,0.941,0.941,0,0,0,0.6,147.7);

	this.timeline.addTween(cjs.Tween.get(this.back).wait(1));

	// back2
	this.fon = new lib.Symbol1();
	this.fon.parent = this;
	this.fon.setTransform(-51.9,131.2,0.941,0.941,0,0,0,1.2,198.8);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-631,96.6,1959.2,457);
// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/armo.png?1485341917456", id:"armo"},
		{src:"images/back1.png?1485341917456", id:"back1"},
		{src:"images/back2.jpg?1485341917456", id:"back2"},
		{src:"images/dust.png?1485341917456", id:"dust"},
		{src:"images/health.png?1485341917456", id:"health"},
		{src:"images/helic.png?1485341917456", id:"helic"},
		{src:"images/pric.png?1485341917456", id:"pric"},
		{src:"images/sniper.png?1485341917456", id:"sniper"},
		{src:"images/soldir.png?1485341917456", id:"soldir"},
		{src:"images/zzzok.png?1485341917456", id:"zzzok"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;