(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,770,385);


(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,103,48);


(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,83,50);


(lib.Bitmap3 = function() {
	this.initialize(img.Bitmap3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,87,51);


(lib.Bitmap4 = function() {
	this.initialize(img.Bitmap4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,105,53);


(lib.forrez3_03 = function() {
	this.initialize(img.forrez3_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,197,99);


(lib.forrez3_06 = function() {
	this.initialize(img.forrez3_06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,72,108);


(lib.forrez3_08 = function() {
	this.initialize(img.forrez3_08);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,133,111);


(lib.forrez3_11 = function() {
	this.initialize(img.forrez3_11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,70,61);


(lib.forrez3_14 = function() {
	this.initialize(img.forrez3_14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,81,53);


(lib.forrez3_22 = function() {
	this.initialize(img.forrez3_22);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,349,431);


(lib.forrez3_25 = function() {
	this.initialize(img.forrez3_25);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,164,129);


(lib.forrez3_29 = function() {
	this.initialize(img.forrez3_29);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,121,62);


(lib.forrez3_33 = function() {
	this.initialize(img.forrez3_33);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,101,108);


(lib.forrez3_37 = function() {
	this.initialize(img.forrez3_37);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,93,65);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,121,86);


(lib.mechb = function() {
	this.initialize(img.mechb);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,232,232);


(lib.mechs = function() {
	this.initialize(img.mechs);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,63,63);


(lib.posoh = function() {
	this.initialize(img.posoh);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,109,518);


(lib.redball = function() {
	this.initialize(img.redball);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,141,128);


(lib.toporb = function() {
	this.initialize(img.toporb);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,344,370);


(lib.topors = function() {
	this.initialize(img.topors);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,58,62);// helper functions:

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


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0.298)").s().p("Egf2Av5MAAAhfxMA/tAAAMAAABfxg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-203.9,-306.5,407.9,613);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0.498)").s().p("Egf2Av5MAAAhfxMA/tAAAMAAABfxg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-203.9,-306.5,407.9,613);


(lib.Symbol62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#010101","rgba(0,0,0,0)"],[0,1],0,-235.5,0,235.5).s().p("EhHZAkzMAAAhJlMCOyAAAMAAABJlg");
	this.shape.setTransform(457,235.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol62, new cjs.Rectangle(0,0,913.9,471), null);


(lib.Symbol61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AA4GVQgWAAgHgJQgHgJAEgVIAThlQAJg2AMgkIANgiIATgsIAWg0IgHAAQhAB0gvBFIhvCdQgNASgcAAIiHAAQgWAAgHgJQgHgIAEgVIBgocQADgWAKgIQAKgIAVAAIB+AAQAVAAAHAIQAHAIgEAWIgSBlQgLBDgOAoQgOAogkBIIAIAAIAjg+IAdgxQAXgnAYgiIBuieQANgRAcAAICHAAQAVAAAHAIQAGAIgDAWIhgIdQgDAVgKAIQgKAJgWAAgAAFj9QgZgGgSgMQgSgMgMgSQgMgSgFgYQgFgWAagJIBJgaQAPgFAGABQAFACAGAMQANAYAdAAQAcAAAVgYQALgLAFgCQAGgCAPAFIBCAaQAXAJgNAWQgNAYgSASQgSASgXAMQgXAMgbAGQgcAGggAAQghAAgZgGg");
	this.shape.setTransform(143.7,30.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AjzE1QgWAAgGgJQgHgIAEgVIBfocQADgWAKgIQAKgJAWAAIF6AAQAVAAAHAJQAHAIgEAWIgRBgQgDAXgKAIQgKAJgWAAIjXAAIgHAtICmAAQAVgBAHAJQAHAIgEAWIgRBgQgEAWgKAIQgJAIgWAAIimAAIgJAxIDdAAQAWAAAHAJQAHAJgFAVIgRBjQgEAVgKAIQgKAJgVAAg");
	this.shape_1.setTransform(87.8,39.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("Aj+E1QgVAAgHgHQgFgIACgWIBgoeQAFgWAJgHQAKgJAWAAIGNAAQAWAAAGAJQAIAIgGAVIgNBQQgEAWgLAIQgJAIgVAAIjqAAIgJA2IBcAAQAwABAkAPQAlAOAaAfQAaAfAIAkQAJAogIAuQgHAugWAkQgTAlggAYQgfAYgpANQgpANgvAAgAg+CYIA4AAQAbAAAQgMQAQgMAEgXQACgagLgKQgLgLgcABIg2AAg");
	this.shape_2.setTransform(33.1,39.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol61, new cjs.Rectangle(0,0,178.4,96.1), null);


(lib.Symbol58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.51,1],-21.9,0,22,0).s().p("AjbIkIAAxHIG3AAIAARHg");
	this.shape.setTransform(22,54.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol58, new cjs.Rectangle(0,0,43.9,109.5), null);


(lib.Symbol55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(2,1,1).p("ADJAAQAABTg7A7Qg7A7hTAAQhSAAg7g7Qg7g7AAhTQAAhSA7g7QA7g7BSAAQBTAAA7A7QA7A7AABSg");
	this.shape.setTransform(20.1,20.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol55, new cjs.Rectangle(-1,-1,42.1,42.1), null);


(lib.Symbol54copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(2,1,1).p("ADJAAQAABTg7A7Qg7A7hTAAQhSAAg7g7Qg7g7AAhTQAAhSA7g7QA7g7BSAAQBTAAA7A7QA7A7AABSg");
	this.shape.setTransform(20.1,20.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AiNCOQg6g7gBhTQABhSA6g7QA7g6BSgBQBTABA7A6QA6A7ABBSQgBBTg6A7Qg7A6hTABQhSgBg7g6g");
	this.shape_1.setTransform(20.1,20.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol54copy, new cjs.Rectangle(-1,-1,42.1,42.1), null);


(lib.Symbol48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AqsQFMAAAggJIVZAAMAAAAgJg");
	this.shape.setTransform(68.5,102.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol48, new cjs.Rectangle(0,0,137,205.8), null);


(lib.Symbol47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AqsQFMAAAggJIVZAAMAAAAgJg");
	this.shape.setTransform(68.5,102.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol47, new cjs.Rectangle(0,0,137,205.8), null);


(lib.Symbol45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.51,1],-4,11.6,3.7,-11.8).s().p("AlGAkIBNjoIJACgIhODpg");
	this.shape.setTransform(32.7,19.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol45, new cjs.Rectangle(0,0,65.4,39.4), null);


(lib.Symbol43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.51,1],-11.8,-11,11.8,10.8).s().p("AlHB2IGjnGIDsDbImjHGg");
	this.shape.setTransform(32.8,33.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol43, new cjs.Rectangle(0,0,65.7,67.3), null);


(lib.Symbol40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mechb();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.534,0.534);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol40, new cjs.Rectangle(0,0,124,124), null);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgfC1IgFgIIgFgIIgJgJIgJgGIgKgFIgLgCIAAgEQAKgDAFgJQAFgIAAgNIAAjdIgCgLIgEgJIgGgHIgIgEIAAgEIBKAAIAAAEQgHABgGAHQgHAIAAAKIAACgIAxh/IACgHIABgIIABgLQAAgHgDgEIgHgGIgJgDIAAgFIAIgEIAJgFIAKgHIAIgIIAHgJIAIgJIADAAIAAEeIACAIIADAKIAFAIQAEAEAGACIAAAFIhJAAQAAAAAAgBQgBAAAAAAQAAAAAAAAQAAgBAAAAIABgCQAHgDAHgGQAFgHAAgKIAAiOIg1COIAABEg");
	this.shape.setTransform(242.6,12.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhICgIgBgBIALgHQALgIAAgMIAAjPQAAgKgFgKQgFgLgJgCIgBAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQABAAAAAAIAXgSQANgLAOgUQABAAAAAAQAAAAABAAQAAAAABAAQAAAAAAABIAAAjIABAAIAJgGQAIgGAMAAQAQAAANAJQAMAJAIASQAMAcAAAkQAAARgCAOQgCAOgFAMQgIAUgMAKQgNALgRABQgKABgLgGQgJgEgBgDIAAgCIAAACIAABPQADAPAGAEIAMAJIAAABgAgPhKQgCAKAAAeQAAAbACAJQADANAGAGQAGAGAJAAQAMAAAHgHQAHgHADgOIACgwQgCgZgIgNQgHgNgNAAQgTAAgGAag");
	this.shape_1.setTransform(225.4,10.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag1CuIgPgWQgGgIgLgHIgYgPIgBgCQAKgDAIgJQAIgJAAgKIAAjfQAAgMgFgKQgIgMgNgBIgBgEIBqAAIAAAEIgJAGQgGAGABAMIASCDQABAAARiAIAAgHQAAgIgDgGQgDgFgHgDQAAAAABAAQAAAAAAAAQAAgBAAAAQAAAAgBgBIBrAAIAAADIgRAHQgJAHAAAUIAADcQAAAMAGAJQAHAIANAEQAAAAAAABQABAAgBABQAAAAAAAAQAAABgBAAIhVAAIAAgBIAAgCQAYgIAAgYIAAjNIgDAAIgpDwIgPAAIgkjvIgEAAIAAEWIAAAPIgBAAIgCAAg");
	this.shape_2.setTransform(205.8,14.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag7CWQgKgJgCgOIgBgRIACgUIAEgXIAkgKIgHAVIgEAVIgCAXQAAAEACADIAFAEQAEABACgCQADgDABgGIALgzIgijEQgCgLgGgHQgFgHgIgDIAAgFIBHAAIAAAEQgJADgEAIQgEAIACAOIASBsIAJgyIADgTIADgSIADgOIABgIQACgQgEgHQgFgGgHgCIAAgFIA/AAIABAFQgSACgHAhIgEAOIgFAdIgIAlIgIApIgIAqIgHAlIgGAdIgDAOQgDANgIAJQgHAKgNAAIgEAAQgPAAgIgIg");
	this.shape_3.setTransform(186.3,12.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgfC1IgEgIIgGgIIgJgJIgJgGIgKgFIgLgCIAAgEQAKgDAFgJQAFgIAAgNIAAjdIgCgLIgEgJIgGgHIgIgEIAAgEIBKAAIAAAEQgHABgGAHQgHAIAAAKIAACgIAxh/IACgHIACgIIAAgLQAAgHgDgEIgHgGIgJgDIAAgFIAIgEIAJgFIALgHIAHgIIAHgJIAIgJIADAAIAAEeIACAIIADAKIAFAIQAEAEAGACIAAAFIhJAAQAAAAAAgBQgBAAAAAAQAAAAAAAAQAAgBAAAAIABgCQAHgDAGgGQAGgHAAgKIAAiOIg1COIAABEg");
	this.shape_4.setTransform(160.3,12.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag3CuIgCgBIAAgKIgBgJIgDgMIgGgLIgGgIIgGgFIAAgGIAIAAQAFAAADgDQAEgEAEgHQADgIADgPIADgnIABg7QAAgsAEgbIAGgnQAEgRAFgHQgGgKgRAAIAAgHICAAAIABAHQgJAAgDADQgFAEgCAFIgBAMIAAANIAADOIABAMIACAMIAGAJQAEAEAGABIAAAGIhJAAIAAgFQAKgFAFgJQAFgLgBgOIAAjbIgHAAQgHAAgGAEQgFAFgDAPQgEAOgCAcIgCBJQgDBDgFAYQgGAjgHATQgJAXgMALIgCgBg");
	this.shape_5.setTransform(142.6,14.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgfC1IgFgIIgFgIIgJgJIgJgGIgKgFIgLgCIAAgEQAKgDAFgJQAFgIAAgNIAAjdIgCgLIgEgJIgGgHIgIgEIAAgEIBKAAIAAAEQgGABgHAHQgHAIAAAKIAACgIAxh/IACgHIABgIIABgLQAAgHgDgEIgHgGIgJgDIAAgFIAIgEIAJgFIAKgHIAIgIIAHgJIAIgJIADAAIAAEeIACAIIADAKIAFAIQAEAEAGACIAAAFIhJAAQAAAAAAgBQgBAAAAAAQAAAAAAAAQAAgBAAAAIABgCQAHgDAHgGQAFgHAAgKIAAiOIg1COIAABEg");
	this.shape_6.setTransform(124.2,12.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgfC1IgEgIIgHgIIgIgJIgJgGIgKgFIgLgCIAAgEQAKgDAFgJQAFgIAAgNIAAjdIgCgLIgEgJIgGgHIgIgEIAAgEIBKAAIAAAEQgHABgGAHQgHAIAAAKIAACgIAxh/IACgHIACgIIAAgLQAAgHgDgEIgHgGIgJgDIAAgFIAJgEIAJgFIAKgHIAHgIIAHgJIAHgJIAFAAIAAEeIABAIIACAKIAGAIQAEAEAGACIAAAFIhJAAQAAAAAAgBQgBAAAAAAQAAAAAAAAQAAgBABAAIAAgCQAHgDAGgGQAGgHAAgKIAAiOIg1COIAABEg");
	this.shape_7.setTransform(98.3,12.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AA4CrIgCgRIgFgPQgDgHgFgFQgFgEgGAAIg2AAQgMAAgHALQgHAKgBAbIgHAAIgDgLIgFgNIgJgMQgFgFgHgDIAAgEQAHAAAIgHQAGgIAFgPQAGgPADgYQAEgYAAghIAAgYQAAgpACgZQADgZADgOQADgQAGgGIgHgGIgHgEIgHgBIABgFIB/AAIAAAFQgHAAgDADIgGAIIgDALIgBAJIAADWIACAMIAFAOQAEAHAFAFQAGAFAKAAIAAAEIgMAPIgJAOQgEAIAAAHgAgDiGQgDAGgCAOIgEAmIgBA7IgCAxIgDAjIgEAaIAsAAIAAjoIgTAAQgDAAgDAFg");
	this.shape_8.setTransform(80.3,14);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhBCTIAAgFQAIgCAGgJQAGgIAAgJIAAjhQAAgUgXgKIABgFICHAAQgFARgWAlIgGAAIgHgPQgFgGgHAAIgaAAIAABgIAxAAIATgOIACAAIAAA7IgCAAIgIgIQgHgFgEAAIgxAAIAABjIAXABQAWAAAJgSIACAAIAXAvIAAADg");
	this.shape_9.setTransform(63.2,11.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhLCTIAAgDIAHgDIAGgGIAFgIIACgKIAAjpIgCgJIgFgJIgGgHIgHgCIAAgDICEAAIAAADIgIATIgHATIgDAUIgFAAQgBgIgDgHQgDgGgFgFQgGgEgLgBIgaAAIAABgIAJgGIAKgDIANgCQAJAAALAEQAMAEAKAKQAKALAGAQQAHARgBAbQgBAggIASQgJASgLAIQgMAJgLACIgSACgAgHABIgIAHIgGAIIAABlIAZAAQAKgBAIgFQAHgEAFgIQAJgQAAgZIgCgXQgCgLgEgIQgFgIgHgFQgIgDgLAAQgGAAgFABg");
	this.shape_10.setTransform(47,11.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgiCJQgQgQgJgeQgMgpAAg7QAAgYADgWQADgVAGgSQAJgcAPgOQAPgOAUgBQAqAAASA4QAGATADAVQADAXAAAaIgBAyQgDAugNAaQgSAkgjAAQgVAAgPgPgAgZhaQgJAcAAA4QAAB9AmgBQAggBAAh6QAAgkgGgeQgEgYgIgLQgHgMgKAAQgRAAgJAcg");
	this.shape_11.setTransform(29.8,11.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgdCpIgEgIIgFgIIgJgKQgKgJgKgFIgKgFIAAgFQAFAAAHgHQAGgHgBgRIAAjdQABgMgEgIQgEgIgMgDIAAgEICfAAIAAAEIgGADIgGAHIgFAKIgDALIAADfQABALAEAIQAEAIALAEIAAAEIhKAAIAAgEQATgJABgYIAAjiIgzAAIAAEzg");
	this.shape_12.setTransform(12.3,13.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol32, new cjs.Rectangle(1.9,-14.8,251.3,59.4), null);


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.redball();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol31, new cjs.Rectangle(0,0,141,128), null);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mechs();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol30, new cjs.Rectangle(0,0,63,63), null);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().rs(["rgba(255,0,0,0)","#FF0000","rgba(255,0,0,0)"],[0,0.51,1],0,0,0,0,0,6.1).ss(3,1,1).p("AArAAQAAASgMANQgNAMgSAAQgRAAgNgMQgMgNAAgSQAAgRAMgNQANgMARAAQASAAANAMQAMANAAARg");
	this.shape.setTransform(4.3,4.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol29, new cjs.Rectangle(-1.5,-1.5,11.6,11.6), null);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.redball();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol27, new cjs.Rectangle(0,0,141,128), null);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.topors();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol26, new cjs.Rectangle(0,0,58,62), null);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().p("EhNkAp4MAAAhTvMCbIAAAMAAABTvg");
	this.shape.setTransform(496.5,268);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol25, new cjs.Rectangle(0,0,992.9,536), null);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhKAVIgKgKIAgAAQACACAHAAQgCAEgFAEQgHAGgGAAQgEAAgHgGgAAeAAQAXgIAMgHQAKgHAIgDIAAgBIACASQAAAOgGADQgEACgRAAIgFAAQgVAAgCgLg");
	this.shape.setTransform(8.5,2.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol21, new cjs.Rectangle(0,0.1,17.1,5.5), null);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(0,0,105,53), null);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(0,0,87,51), null);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(0,0,83,50), null);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(0,0,103,48), null);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.298)").s().p("EhMEAoZMAAAhQxMCYKAAAMAAABQxg");
	this.shape.setTransform(451,232.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.instance = new lib.back();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.179,1.179);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(-35.9,-25.9,973.9,517), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.forrez3_03();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,0,197,99), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.forrez3_06();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,0,72,108), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.forrez3_08();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,133,111), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.forrez3_11();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,70,61), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.forrez3_14();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,81,53), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.forrez3_25();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,164,129), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.forrez3_29();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,121,62), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.forrez3_37();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,93,65), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.posoh();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,109,518), null);


(lib.Symbol60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol61();
	this.instance.parent = this;
	this.instance.setTransform(89.2,48.1,1,1,0,0,0,89.2,48.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({regX:89,scaleX:3.38,scaleY:3.38,x:88.7,y:48.2,alpha:0},5).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,178.4,96.1);


(lib.Symbol59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol58();
	this.instance.parent = this;
	this.instance.setTransform(21.9,54.8,1,1,0,0,0,21.9,54.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:220.5},19).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,43.9,109.5);


(lib.Symbol57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhLAcIgRgTIANgCIABAAIAvgIIgKBLIAhgLIApgtIABgEIAwAEIg2AzIAAAQIAsAbIAAALIhHAMIgFgbIgEgFIgjAEIgSAoIguADgAmWg3IgDgNIgLgGIA2gQIAgAgIA0gzIA9gHIggCIIgyAFIALhHIgsArIgfgiIgEgCIhABoIAQAGIAAAKIhpAogABjBnIAiiHIALACIAWAiIgSBlgAC5BcIAXhWIgHgOIAkgMIAqAhIAFgtIAtgBIgWBWIANAPIgwAKIgggeIgFAAIgIABIAAArgAHQApIgGgCIhLAVIgogYIAeg9IgWgUIBygWIgPAgIgyAFIgCA2IAogFIAEgSIAjgDIAwBGgAiphNIgNgRIADgFIBmgMIgPBYIAOAIIgzAIIgBgTIgdAJIgNAWIgvAEgAiVgxIAbgBIgDglgAgjhqIgIgRIB1gaIAWAVIgyBUIgBAAIgUAOIhEAIgAADhvIAAA7IAog8g");
	mask.setTransform(64,43.3);

	// Layer 2
	this.instance = new lib.Symbol59();
	this.instance.parent = this;
	this.instance.setTransform(-33.1,44.2,1,1,0,0,0,21.9,54.8);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.logo();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol57, new cjs.Rectangle(0,0,121,86), null);


(lib.Symbol54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol55();
	this.instance.parent = this;
	this.instance.setTransform(20.1,20.1,1,1,0,0,0,20.1,20.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.23,scaleY:1.23},4,cjs.Ease.get(-1)).to({regX:19.9,regY:19.9,scaleX:1.52,scaleY:1.52,x:19.8,y:19.8},5,cjs.Ease.get(1)).to({scaleX:1.26,scaleY:1.26,x:20,y:20},5,cjs.Ease.get(-1)).to({regX:20.1,regY:20.1,scaleX:1,scaleY:1,x:20.1,y:20.1},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,42.1,42.1);


(lib.Symbol53copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.Symbol54copy();
	this.instance.parent = this;
	this.instance.setTransform(20.1,20.1,0.239,0.239,0,0,0,20.1,20.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol54();
	this.instance_1.parent = this;
	this.instance_1.setTransform(20.1,20.1,1,1,0,0,0,20.1,20.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol53copy, new cjs.Rectangle(-1,-1,42.1,42.1), null);


(lib.Symbol53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.Symbol54copy();
	this.instance.parent = this;
	this.instance.setTransform(20.1,20.1,0.239,0.239,0,0,0,20.1,20.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol54();
	this.instance_1.parent = this;
	this.instance_1.setTransform(20.1,20.1,1,1,0,0,0,20.1,20.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol53, new cjs.Rectangle(-1,-1,42.1,42.1), null);


(lib.Symbol50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol48();
	this.instance.parent = this;
	this.instance.setTransform(68.5,102.9,1,1,0,0,0,68.5,102.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol50, new cjs.Rectangle(0,0,137,205.8), null);


(lib.Symbol49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol47();
	this.instance.parent = this;
	this.instance.setTransform(68.5,102.9,1,1,0,0,0,68.5,102.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol49, new cjs.Rectangle(0,0,137,205.8), null);


(lib.Symbol46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol45();
	this.instance.parent = this;
	this.instance.setTransform(37.1,9.2,1,1,0,0,0,32.6,19.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:14.1,y:120.1},39).wait(30).to({x:37.1,y:9.2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.5,-10.5,65.4,39.4);


(lib.Symbol44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol43();
	this.instance.parent = this;
	this.instance.setTransform(34.5,35.3,1,1,2.7,0,0,32.9,33.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-99.2,y:-97.7},39).wait(1).to({x:34.5,y:35.3},0).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,68.8,70.4);


(lib.Symbol42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ACqGfIABghIgZgWIABgDIABgMIADgMIgBgCInPnZIgYgpIABgCIAZgZIAAAAIHNHKIADgVIoEoJIhAiJICKBCIIGIBIADACIAEgDIAJgBInJnMIAdgbIAhAPIHnHbIAVgDIAbAdIABAEIAigEIAFBHIgdgMIgDADIgIAdIAsAqIgNAPIhDgnIgDACIgnAZIgaAiIAoA+IgRAMIgqglIggAPIAPAeIg8AFg");
	mask.setTransform(42.9,43.2);

	// Layer 2
	this.instance = new lib.Symbol44();
	this.instance.parent = this;
	this.instance.setTransform(109.8,109.4,1,1,0,0,0,34.4,35.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol40();
	this.instance_1.parent = this;
	this.instance_1.setTransform(62,62,1,1,0,0,0,62,62);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol42, new cjs.Rectangle(0,0,124,124), null);


(lib.Symbol41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol42();
	this.instance.parent = this;
	this.instance.setTransform(62,62,1,1,0,0,0,62,62);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:72},29).to({y:62},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,144.2,144.7);


(lib.Symbol39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhGlWQgMCEBWhQIABAAICQASQkyE7EMEpIgCADQmPjtDcnAg");
	mask.setTransform(15,64);

	// Layer 2
	this.instance = new lib.Symbol46();
	this.instance.parent = this;
	this.instance.setTransform(29.7,16.6,1,1,0,0,0,32.6,19.7);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.toporb();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.624,0.624);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol39, new cjs.Rectangle(0,0,214.8,231.1), null);


(lib.Symbol38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol39();
	this.instance.parent = this;
	this.instance.setTransform(107.4,115.5,1,1,0,0,0,107.4,115.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:107.5},19).to({y:115.5},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-13.6,214.8,244.7);


(lib.Symbol35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol41();
	this.instance.parent = this;
	this.instance.setTransform(97,98,1,1,0,0,0,97,98);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:7.3,x:97.1},14,cjs.Ease.get(-1)).to({rotation:15.2},15,cjs.Ease.get(1)).to({rotation:7.5,x:97},15,cjs.Ease.get(-1)).to({rotation:0},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,144.2,144.7);


(lib.Symbol34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol38();
	this.instance.parent = this;
	this.instance.setTransform(107.4,115.5,1,1,0,0,0,107.4,115.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:5.3,y:115.6},9,cjs.Ease.get(-1)).to({rotation:11.2},10,cjs.Ease.get(1)).to({rotation:5.5},10,cjs.Ease.get(-1)).to({rotation:0,y:115.5},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-13.6,214.8,244.7);


(lib.Symbol33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol32();
	this.instance.parent = this;
	this.instance.setTransform(127.9,14.8,1,1,0,0,0,127.9,14.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.1,scaleY:1.1},9,cjs.Ease.get(-1)).to({scaleX:1.2,scaleY:1.2,x:128},10,cjs.Ease.get(1)).to({scaleX:1.1,scaleY:1.1,y:14.9},10,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:127.9,y:14.8},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.9,-14.8,251.3,59.4);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol29();
	this.instance.parent = this;
	this.instance.setTransform(5.3,4.8,1,1,0,0,0,4.3,4.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:4.2,regY:3.8,scaleX:17.53,scaleY:17.53,x:4.8,y:1.6,alpha:0},28).wait(6).to({regX:4.3,regY:3.9,scaleX:9.19,scaleY:9.19,x:5.3,y:1.2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-1,11.6,11.6);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol25();
	this.instance.parent = this;
	this.instance.setTransform(481.5,251,1,1,0,0,0,496.4,267.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(42).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).wait(1).to({alpha:0},5).to({_off:true},1).wait(61).to({_off:false,alpha:1},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).wait(1).to({alpha:0},5).to({_off:true},1).wait(35));

	// Layer 3
	this.instance_1 = new lib.Symbol62();
	this.instance_1.parent = this;
	this.instance_1.setTransform(491.3,261.5,1,1,0,0,0,456.9,235.5);
	this.instance_1.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(160));

	// Layer 1
	this.instance_2 = new lib.Symbol16();
	this.instance_2.parent = this;
	this.instance_2.setTransform(489.9,253,1,1,0,0,0,453.9,227);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:469.9},79).to({x:489.9},80).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,973.9,517);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol30();
	this.instance.parent = this;
	this.instance.setTransform(61.5,65.5,1,1,0,0,0,31.5,31.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 3
	this.instance_1 = new lib.Symbol28();
	this.instance_1.parent = this;
	this.instance_1.setTransform(61.6,63,1,1,0,0,0,4.3,4.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Symbol 31
	this.instance_2 = new lib.Symbol31();
	this.instance_2.parent = this;
	this.instance_2.setTransform(70.5,64,1,1,0,0,0,70.5,64);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(0,0,141,128), null);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol26();
	this.instance.parent = this;
	this.instance.setTransform(61,62,1,1,0,0,0,29,31);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 3
	this.instance_1 = new lib.Symbol28();
	this.instance_1.parent = this;
	this.instance_1.setTransform(61.6,63,1,1,0,0,0,4.3,4.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Symbol 27
	this.instance_2 = new lib.Symbol27();
	this.instance_2.parent = this;
	this.instance_2.setTransform(70.5,64,1,1,0,0,0,70.5,64);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(0,0,141,128), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol21();
	this.instance.parent = this;
	this.instance.setTransform(150.4,58.1,1,1,0,0,0,8.5,2.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off:false},0).wait(1));

	// Layer 1
	this.instance_1 = new lib.forrez3_22();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,349,431);


(lib.sprite35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol17();
	this.instance.parent = this;
	this.instance.setTransform(11.5,14,1,1,0,0,0,51.5,24);
	this.instance.shadow = new cjs.Shadow("rgba(255,0,0,1)",0,0,3);
	this.instance.filters = [new cjs.BlurFilter(5, 5, 1)];
	this.instance.cache(-2,-2,107,52);

	this.instance_1 = new lib.Symbol18();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.5,15,1,1,0,0,0,41.5,25);
	this.instance_1.shadow = new cjs.Shadow("rgba(255,0,0,1)",0,0,3);
	this.instance_1.filters = [new cjs.BlurFilter(5, 5, 1)];
	this.instance_1.cache(-2,-2,87,54);

	this.instance_2 = new lib.Symbol19();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-1.5,12.5,1,1,0,0,0,43.5,25.5);
	this.instance_2.shadow = new cjs.Shadow("rgba(255,0,0,1)",0,0,3);
	this.instance_2.filters = [new cjs.BlurFilter(5, 5, 1)];
	this.instance_2.cache(-2,-2,91,55);

	this.instance_3 = new lib.Symbol20();
	this.instance_3.parent = this;
	this.instance_3.setTransform(9.5,10.5,1,1,0,0,0,52.5,26.5);
	this.instance_3.shadow = new cjs.Shadow("rgba(255,0,0,1)",0,0,3);
	this.instance_3.filters = [new cjs.BlurFilter(5, 5, 1)];
	this.instance_3.cache(-2,-2,109,57);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47,-17,121,66);


(lib.Symbol64copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol15();
	this.instance.parent = this;
	this.instance.setTransform(70.5,64,1,1,0,0,0,70.5,64);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol64copy, new cjs.Rectangle(0,0,141,128), null);


(lib.Symbol64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol15();
	this.instance.parent = this;
	this.instance.setTransform(70.5,64,1,1,0,0,0,70.5,64);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.04,scaleY:1.04,x:70.6,y:64.1},4,cjs.Ease.get(-1)).to({scaleX:1.09,scaleY:1.09,x:70.5,y:64},5,cjs.Ease.get(1)).to({scaleX:1.04,scaleY:1.04,x:70.7,y:64.1},5,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:70.5,y:64},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,141,128);


(lib.Symbol63copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol14();
	this.instance.parent = this;
	this.instance.setTransform(70.5,64,1,1,0,0,0,70.5,64);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol63copy, new cjs.Rectangle(0,0,141,128), null);


(lib.Symbol63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol14();
	this.instance.parent = this;
	this.instance.setTransform(70.5,64,1,1,0,0,0,70.5,64);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.04,scaleY:1.04,x:70.6},4,cjs.Ease.get(-1)).to({scaleX:1.1,scaleY:1.1,x:70.5},5,cjs.Ease.get(1)).to({scaleX:1.05,scaleY:1.05,x:70.6,y:64.1},5,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:70.5,y:64},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,141,128);


(lib.Symbol56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.kurm = new lib.Symbol53copy();
	this.kurm.parent = this;
	this.kurm.setTransform(78.7,20,1,1,0,0,0,20.1,20.1);

	this.timeline.addTween(cjs.Tween.get(this.kurm).to({guide:{path:[78.7,20,76.5,17.3,73.6,12.4,69.8,6,66.9,3.5,63.7,0.8,58.8,-0.8,55.5,-1.9,49.7,-2.9,39.9,-4.6,33.3,-5,24.2,-5.6,16.8,-4.3,8.3,-2.9,1.3,1.2,-6.3,5.6,-10.5,12.3,-17.8,23.8,-15.3,42.2,-14.4,49.4,-11.7,52.8,-8.7,56.5,-1.2,59,23.6,67.8,42.1,62.3,52.1,59.2,61.9,51.4,69.6,45.2,78.1,35.1,82.9,29.4,92.6,17.5,101.3,7.4,108.8,1.5,116.4,-4.2,122.4,-5.1,125.8,-5.7,130,-5.1,132.8,-4.8,137.6,-3.6,149.1,-0.7,155.8,2.6,165.3,7.3,169.8,14.6,173.5,20.8,174.8,31.4,176.6,46.9,171.5,56.3,168.3,62.2,162.3,66.2,156.5,70,149.6,71.3,137.3,73.7,122.5,69,109.2,64.9,103,57.5,100.1,53.9,95.9,44.3,94,39.9,92.2,36.7]}},49).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(57.6,-1.1,42.1,42.1);


(lib.Symbol52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol50();
	this.instance.parent = this;
	this.instance.setTransform(68.5,102.9,1,1,0,0,0,68.5,102.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol49();
	this.instance.parent = this;
	this.instance.setTransform(68.5,102.9,1,1,0,0,0,68.5,102.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol63();
	this.instance.parent = this;
	this.instance.setTransform(70.5,64,1,1,0,0,0,70.5,64);

	this.instance_1 = new lib.Symbol63copy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(70.5,64,1.086,1.086,0,0,0,70.5,64);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,141,128);


(lib.Symbol36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol64();
	this.instance.parent = this;
	this.instance.setTransform(70.5,64,1,1,0,0,0,70.5,64);

	this.instance_1 = new lib.Symbol64copy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(70.5,64,1.086,1.086,0,0,0,70.5,64);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,141,128);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(11));

	// Layer 8
	this.instance = new lib.Symbol33();
	this.instance.parent = this;
	this.instance.setTransform(136.7,62,1,1,0,0,0,127.9,14.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-141.5},9).to({y:62},10).wait(1));

	// mechs.png
	this.bsw = new lib.Symbol36();
	this.bsw.parent = this;
	this.bsw.setTransform(390,64,1,1,0,0,0,70.5,64);
	new cjs.ButtonHelper(this.bsw, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.bsw).to({x:223.5},9).to({x:390},10).wait(1));

	// topors.png
	this.btop = new lib.Symbol37();
	this.btop.parent = this;
	this.btop.setTransform(-114.5,64,1,1,0,0,0,70.5,64);
	new cjs.ButtonHelper(this.btop, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btop).to({x:61.3},9).to({x:-114.5},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-191,-5.5,657.6,139);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.sprite35();
	this.instance.parent = this;
	this.instance.setTransform(93.4,51.1,0.67,0.544,29.2,0,0,0.1,-0.1);
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.forrez3_33();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,143.8,108), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 14
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(168.6,5.4,3.439,1);
	this.instance._off = true;

	this.instance_1 = new lib.Tween2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(168.6,5.4);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},91).to({state:[{t:this.instance_1}]},2).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(91).to({_off:false},0).to({_off:true,scaleX:1,alpha:0},2).wait(1));

	// posoh.png
	this.instance_2 = new lib.Symbol2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(244.1,205.6,1,1,0,0,0,54.5,259);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:54.6,regY:258.9,rotation:-10,x:233.6,y:209.4},9).to({regX:54.5,regY:259,rotation:0,x:244.1,y:205.6},10).wait(1).to({regX:54.6,regY:258.9,rotation:-10,x:233.6,y:209.4},9).to({regX:54.5,regY:259,rotation:0,x:244.1,y:205.6},10).to({regX:54.6,regY:258.9,rotation:-10,x:233.6,y:209.4},10).to({regX:64.5,regY:214.1,x:235.6,y:163.6},1).to({rotation:1430},29).to({regX:54.6,regY:258.9,x:233.6,y:209.4},1).to({regX:54.5,regY:259,rotation:1440,x:244.1,y:205.6},9).to({regX:54.6,regY:258.9,scaleX:2.32,scaleY:2.32,x:227.3,y:279},2).to({regX:54.5,regY:259,scaleX:1,scaleY:1,x:244.1,y:205.6},2).wait(1));

	// for-rez3_33.png
	this.instance_3 = new lib.Symbol4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(175.2,111.2,1,1,0,0,0,19.6,45.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:5.2},9).to({rotation:0},10).wait(1).to({rotation:5.2},9).to({rotation:0},10).to({rotation:5.2},10).wait(30).to({rotation:0},10).to({scaleX:1.39,scaleY:1.39,rotation:11.5,x:173.1,y:95.7},2).to({scaleX:1,scaleY:1,rotation:0,x:175.2,y:111.2},2).wait(1));

	// for-rez3_25.png
	this.instance_4 = new lib.Symbol6();
	this.instance_4.parent = this;
	this.instance_4.setTransform(209.8,89.1,1,1,0,0,0,3.9,95.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleY:0.9},9,cjs.Ease.get(-1)).to({scaleY:0.77},10,cjs.Ease.get(1)).to({scaleY:0.89},10,cjs.Ease.get(-1)).to({scaleY:1},10,cjs.Ease.get(1)).wait(1).to({scaleY:0.9},13,cjs.Ease.get(-1)).to({scaleY:0.77},11,cjs.Ease.get(1)).to({scaleY:0.89},13,cjs.Ease.get(-1)).to({scaleY:1},12,cjs.Ease.get(1)).to({regY:95.4,scaleX:1.03,scaleY:1.03,x:210.1,y:90.8},2).to({regY:95.5,scaleX:1,scaleY:1,x:209.8,y:89.1},2).wait(1));

	// for-rez3_03.png
	this.instance_5 = new lib.Symbol12();
	this.instance_5.parent = this;
	this.instance_5.setTransform(163.7,45.5,1,1,0,0,0,16.1,87.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:16.2,rotation:-2,x:163.8,y:45.6},9).to({regX:16.1,rotation:0,x:163.7,y:45.5},10).wait(1).to({regX:16.2,rotation:-2,x:163.8,y:45.6},9).to({regX:16.1,rotation:0,x:163.7,y:45.5},10).wait(1).to({regX:16.2,rotation:-2,x:163.8,y:45.6},13).to({regX:16.1,rotation:0,x:163.7,y:45.5},11).wait(1).to({regX:16.2,rotation:-2,x:163.8,y:45.6},12).to({regX:16.1,rotation:0,x:163.7,y:45.5},12).to({scaleX:1.03,scaleY:1.03,x:162.5,y:45.9},2).to({scaleX:1,scaleY:1,x:163.7,y:45.5},2).wait(1));

	// for-rez3_08.png
	this.instance_6 = new lib.Symbol10();
	this.instance_6.parent = this;
	this.instance_6.setTransform(150.2,46.6,1,1,0,0,0,118.6,97.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:118.7,rotation:1.7,x:150.3},9).to({regX:118.6,rotation:0,x:150.2},10).wait(1).to({regX:118.7,rotation:1.7,x:150.3},9).to({regX:118.6,rotation:0,x:150.2},10).wait(1).to({regX:118.7,rotation:1.7,x:150.3},13).to({regX:118.6,rotation:0,x:150.2},11).wait(1).to({regX:118.7,rotation:1.7,x:150.3},12).to({regX:118.6,rotation:0,x:150.2},12).to({regX:118.7,scaleX:1.03,scaleY:1.03,x:148.7,y:47},2).to({regX:118.6,scaleX:1,scaleY:1,x:150.2,y:46.6},2).wait(1));

	// for-rez3_11.png
	this.instance_7 = new lib.Symbol9();
	this.instance_7.parent = this;
	this.instance_7.setTransform(323.6,-3.9,1,1,0,0,0,35,30.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regY:30.4,rotation:3.5,x:323.7,y:4.5},9,cjs.Ease.get(-1)).to({regX:35.1,rotation:8,y:15.1},10,cjs.Ease.get(1)).to({rotation:3.8,y:5.5},10,cjs.Ease.get(-1)).to({regX:35,regY:30.5,rotation:0,x:323.6,y:-3.9},10,cjs.Ease.get(1)).wait(1).to({regY:30.4,rotation:3.5,x:323.7,y:4.5},13,cjs.Ease.get(-1)).to({regX:35.1,rotation:8,y:15.1},11,cjs.Ease.get(1)).to({rotation:3.8,y:5.5},13,cjs.Ease.get(-1)).to({regX:35,regY:30.5,rotation:0,x:323.6,y:-3.9},12,cjs.Ease.get(1)).to({regY:30.4,scaleX:1.03,scaleY:1.03,x:327.7,y:-5.3},2).to({regY:30.5,scaleX:1,scaleY:1,x:323.6,y:-3.9},2).wait(1));

	// Symbol 9
	this.instance_8 = new lib.Symbol9();
	this.instance_8.parent = this;
	this.instance_8.setTransform(178.6,-11.5,1,1,0,0,0,35,30.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:35.1,rotation:6.8,x:176.5,y:-3.3},9,cjs.Ease.get(-1)).to({rotation:15.5,x:173.7,y:6.9},10,cjs.Ease.get(1)).to({regY:30.4,rotation:7.6,x:176.2,y:-2.4},10,cjs.Ease.get(-1)).to({regX:35,regY:30.5,rotation:0,x:178.6,y:-11.5},10,cjs.Ease.get(1)).wait(1).to({regX:35.1,rotation:6.8,x:176.5,y:-3.3},13,cjs.Ease.get(-1)).to({rotation:15.5,x:173.7,y:6.9},11,cjs.Ease.get(1)).to({regY:30.4,rotation:7.6,x:176.2,y:-2.4},13,cjs.Ease.get(-1)).to({regX:35,regY:30.5,rotation:0,x:178.6,y:-11.5},12,cjs.Ease.get(1)).to({regY:30.4,scaleX:1.03,scaleY:1.03,x:177.9,y:-13.1},2).to({regY:30.5,scaleX:1,scaleY:1,x:178.6,y:-11.5},2).wait(1));

	// for-rez3_29.png
	this.instance_9 = new lib.Symbol5();
	this.instance_9.parent = this;
	this.instance_9.setTransform(249.1,0.5,1,1,0,0,0,60.5,31);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({scaleX:1.09,scaleY:0.89,x:248.5,y:8.9},9,cjs.Ease.get(-1)).to({scaleX:1.2,scaleY:0.75,x:247.7,y:19.2},10,cjs.Ease.get(1)).to({regY:30.9,scaleX:1.1,scaleY:0.88,x:248.4,y:9.8},10,cjs.Ease.get(-1)).to({regY:31,scaleX:1,scaleY:1,x:249.1,y:0.5},10,cjs.Ease.get(1)).wait(1).to({scaleX:1.09,scaleY:0.89,x:248.5,y:8.9},13,cjs.Ease.get(-1)).to({scaleX:1.2,scaleY:0.75,x:247.7,y:19.2},11,cjs.Ease.get(1)).to({regY:30.9,scaleX:1.1,scaleY:0.88,x:248.4,y:9.8},13,cjs.Ease.get(-1)).to({regY:31,scaleX:1,scaleY:1,x:249.1,y:0.5},12,cjs.Ease.get(1)).to({scaleX:1.03,scaleY:1.03,x:250.7,y:-0.6},2).to({scaleX:1,scaleY:1,x:249.1,y:0.5},2).wait(1));

	// for-rez3_22.png
	this.instance_10 = new lib.Symbol7();
	this.instance_10.parent = this;
	this.instance_10.setTransform(182.7,242.5,1,1,0,0,0,174.5,215.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(89).to({scaleX:1.03,scaleY:1.03},2).to({scaleX:1,scaleY:1},2).wait(1));

	// for-rez3_37.png
	this.instance_11 = new lib.Symbol3();
	this.instance_11.parent = this;
	this.instance_11.setTransform(129.8,174.1,1,1,0,0,0,78.2,21.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({regY:22,rotation:11.2,y:174.2},9).to({regY:21.9,rotation:0,y:174.1},10).wait(1).to({regY:22,rotation:11.2,y:174.2},9).to({regY:21.9,rotation:0,y:174.1},10).to({regY:22,rotation:11.2,y:174.2},10).wait(30).to({regY:21.9,rotation:0,y:174.1},10).to({regY:22,scaleX:0.88,scaleY:0.88,y:174.2},2).to({regY:21.9,scaleX:1,scaleY:1,y:174.1},2).wait(1));

	// for-rez3_14.png
	this.instance_12 = new lib.Symbol8();
	this.instance_12.parent = this;
	this.instance_12.setTransform(202.7,156.3,1,1,0,0,0,5.3,25.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({regX:5.4,rotation:3.7,x:192.3},9).to({regX:5.3,rotation:0,x:202.7},10).wait(1).to({regX:5.4,rotation:3.7,x:192.3},9).to({regX:5.3,rotation:0,x:202.7},10).to({regX:5.4,rotation:3.7,x:192.3},10).wait(30).to({regX:5.3,rotation:0,x:202.7},10).to({regX:5.4,regY:25.2,scaleX:1.49,scaleY:1.49,x:199.5,y:161.6},2).to({regX:5.3,regY:25.1,scaleX:1,scaleY:1,x:202.7,y:156.3},2).wait(1));

	// for-rez3_06.png
	this.instance_13 = new lib.Symbol11();
	this.instance_13.parent = this;
	this.instance_13.setTransform(135.7,96.6,1,1,0,0,0,26.9,99.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({scaleY:0.92,y:96.7},9,cjs.Ease.get(-1)).to({scaleY:0.81,y:96.6},10,cjs.Ease.get(1)).to({scaleY:0.91},10,cjs.Ease.get(-1)).to({scaleY:1},10,cjs.Ease.get(1)).wait(1).to({scaleY:0.92,y:96.7},13,cjs.Ease.get(-1)).to({scaleY:0.81,y:96.6},11,cjs.Ease.get(1)).to({scaleY:0.91},13,cjs.Ease.get(-1)).to({scaleY:1},12,cjs.Ease.get(1)).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8.2,-53.4,361.7,518);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(120.9,227.3,0.727,0.727,0,0,0,174.3,259);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:232.3},39).to({y:227.3},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,263.1,376.9);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_20 = function() {
		this.stop();
	}
	this.frame_39 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(19).call(this.frame_20).wait(19).call(this.frame_39).wait(1));

	// Layer 1
	this.instance = new lib.Symbol22();
	this.instance.parent = this;
	this.instance.setTransform(141.6,180.9,1,1,0,0,0,131.6,188.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({x:66.6},18).wait(1).to({skewY:180,x:141.5},0).to({x:190.3},18).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10,-7.4,263.1,376.8);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Custom Mouse Cursor
		Replaces the default mouse cursor with the specified symbol instance.
		*/
		stage.canvas.style.cursor = "none";
		this.kur.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
			this.kur.x = stage.mouseX;
			this.kur.y = stage.mouseY;
		}
		//To restore the default mouse pointer, uncomment the following lines:
		//this.removeEventListener("tick", fl_CustomMouseCursor.bind(this));
		//stage.removeChild(kur);
		//stage.canvas.style.cursor = "default";
		var _this = this;
		
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		
		
		_this.kur.visible=false;
		_this.kur1.visible=true;
		_this.sw.visible=false;
		_this.top.visible=false;
		_this.bah.visible=false;
		
		function fl_MouseOverHandler_5()
		    {
			    _this.bbtt.gotoAndPlay(1);
				_this.kur.visible=true;
				_this.kur1.visible=false;
				_this.sw.visible=true;
				_this.bah.visible=true;
			    
		    }
		
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		
		
		      function fl_MouseOutHandler_2()
		    {
			    _this.bbtt.gotoAndPlay(10);
				_this.kur.visible=false;
				_this.kur1.visible=true;
				_this.sw.visible=false;
				_this.top.visible=false;
				_this.monk.gotoAndPlay(0);
				_this.bah.visible=false;
			    
		    }
		
			
		this.bbtt.bsw.addEventListener("mouseover", fl_ClickToGoToAndPlayFromFrame_1.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_1()
		{
		_this.sw.visible=true;
			_this.top.visible=false;
		}
		
		
		this.bbtt.btop.addEventListener("mouseover", fl_ClickToGoToAndPlayFromFrame_2.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_2()
		{
		_this.top.visible=true;
			_this.sw.visible=false;
		}
		
		
		this.rb.addEventListener("mouseover", fl_ClickToGoToAndPlayFromFrame_3.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_3()
		{
		this.monk.gotoAndPlay(2);
		}
		
		
		this.lb.addEventListener("mouseover", fl_ClickToGoToAndPlayFromFrame_4.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_4()
		{
		this.monk.gotoAndPlay(21);
		}
		
		
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		
		this.addEventListener("tick", fl_CustomMouseCursor22.bind(this));
		
		function fl_CustomMouseCursor22() {
		
		this.sw.x = stage.mouseX / 2;
		this.sw.y = stage.mouseY / 10;
		}
		
		this.addEventListener("tick", fl_CustomMouseCursor23.bind(this));
		
		function fl_CustomMouseCursor23() {
		
		this.top.x = stage.mouseX / 2;
		this.top.y = stage.mouseY / 7;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 12
	this.bah = new lib.Symbol60();
	this.bah.parent = this;
	this.bah.setTransform(122.3,289.1,1,1,0,0,0,89.2,48.1);
	this.bah.alpha = 0.359;

	this.timeline.addTween(cjs.Tween.get(this.bah).wait(1));

	// Layer 9 copy
	this.kur1 = new lib.Symbol56();
	this.kur1.parent = this;
	this.kur1.setTransform(64.5,209.1,1,1,0,0,0,20.1,20.1);

	this.timeline.addTween(cjs.Tween.get(this.kur1).wait(1));

	// Layer 9
	this.kur = new lib.Symbol53();
	this.kur.parent = this;
	this.kur.setTransform(-407.5,193.1,1,1,0,0,0,20.1,20.1);

	this.timeline.addTween(cjs.Tween.get(this.kur).wait(1));

	// Layer 10
	this.lb = new lib.Symbol52();
	this.lb.parent = this;
	this.lb.setTransform(54.9,309.6,1,1,0,0,0,68.5,102.9);
	new cjs.ButtonHelper(this.lb, 0, 1, 2, false, new lib.Symbol52(), 3);

	this.rb = new lib.Symbol51();
	this.rb.parent = this;
	this.rb.setTransform(192.6,309.6,1,1,0,0,0,68.5,102.9);
	new cjs.ButtonHelper(this.rb, 0, 1, 2, false, new lib.Symbol51(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.rb},{t:this.lb}]}).wait(1));

	// Layer 4
	this.top = new lib.Symbol34();
	this.top.parent = this;
	this.top.setTransform(55.4,34.5,1,1,0,0,0,-72.6,-252.5);

	this.timeline.addTween(cjs.Tween.get(this.top).wait(1));

	// Layer 3
	this.sw = new lib.Symbol35();
	this.sw.parent = this;
	this.sw.setTransform(77,36.1,1,1,0,0,0,-62,-281.9);

	this.timeline.addTween(cjs.Tween.get(this.sw).wait(1));

	// Layer 7
	this.monk = new lib.Symbol23();
	this.monk.parent = this;
	this.monk.setTransform(125.2,355.1,1,1,0,0,0,131.6,188.4);

	this.timeline.addTween(cjs.Tween.get(this.monk).wait(1));

	// Layer 6
	this.bbtt = new lib.Symbol13();
	this.bbtt.parent = this;
	this.bbtt.setTransform(85.5,150,0.73,0.73,0,0,0,86.4,106);

	this.timeline.addTween(cjs.Tween.get(this.bbtt).wait(1));

	// Layer 2
	this.instance = new lib.Symbol57();
	this.instance.parent = this;
	this.instance.setTransform(120.5,48,1,1,0,0,0,60.5,43);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol24();
	this.instance_1.parent = this;
	this.instance_1.setTransform(176,207.5,1,1,0,0,0,486.9,258.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-308.6,149.1,1091.6,587);
// library properties:
lib.properties = {
	width: 240,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/back.jpg?1490088378900", id:"back"},
		{src:"images/Bitmap1.png?1490088378900", id:"Bitmap1"},
		{src:"images/Bitmap2.png?1490088378900", id:"Bitmap2"},
		{src:"images/Bitmap3.png?1490088378900", id:"Bitmap3"},
		{src:"images/Bitmap4.png?1490088378900", id:"Bitmap4"},
		{src:"images/forrez3_03.png?1490088378900", id:"forrez3_03"},
		{src:"images/forrez3_06.png?1490088378900", id:"forrez3_06"},
		{src:"images/forrez3_08.png?1490088378900", id:"forrez3_08"},
		{src:"images/forrez3_11.png?1490088378900", id:"forrez3_11"},
		{src:"images/forrez3_14.png?1490088378900", id:"forrez3_14"},
		{src:"images/forrez3_22.png?1490088378900", id:"forrez3_22"},
		{src:"images/forrez3_25.png?1490088378900", id:"forrez3_25"},
		{src:"images/forrez3_29.png?1490088378900", id:"forrez3_29"},
		{src:"images/forrez3_33.png?1490088378900", id:"forrez3_33"},
		{src:"images/forrez3_37.png?1490088378900", id:"forrez3_37"},
		{src:"images/logo.png?1490088378900", id:"logo"},
		{src:"images/mechb.png?1490088378900", id:"mechb"},
		{src:"images/mechs.png?1490088378900", id:"mechs"},
		{src:"images/posoh.png?1490088378900", id:"posoh"},
		{src:"images/redball.png?1490088378900", id:"redball"},
		{src:"images/toporb.png?1490088378900", id:"toporb"},
		{src:"images/topors.png?1490088378900", id:"topors"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;