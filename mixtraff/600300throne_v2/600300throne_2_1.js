(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.bg4 = function() {
	this.initialize(img.bg4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,360);


(lib.btn = function() {
	this.initialize(img.btn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,262,114);


(lib.curs = function() {
	this.initialize(img.curs);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,60,60);


(lib.log = function() {
	this.initialize(img.log);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,108);


(lib.man1 = function() {
	this.initialize(img.man1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,217,400);


(lib.man2 = function() {
	this.initialize(img.man2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,275,300);


(lib.woman = function() {
	this.initialize(img.woman);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,176,300);// helper functions:

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


(lib.Символ55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.man2();
	this.instance.parent = this;
	this.instance.setTransform(-102.6,-112,0.747,0.747);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ55, new cjs.Rectangle(-102.6,-112,205.4,224), null);


(lib.Символ54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Au6U3MAAAgptId1AAMAAAAptg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.man1();
	this.instance.parent = this;
	this.instance.setTransform(-73,-134.5,0.673,0.673);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ52, new cjs.Rectangle(-73,-134.5,146,269.1), null);


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AuSVGMAAAgqLIclAAMAAAAqLg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ48 = function(mode,startPosition,loop) {
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
	this.instance = new lib.curs();
	this.instance.parent = this;
	this.instance.setTransform(-30,-30);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AuwUZMAAAgoxIdhAAMAAAAoxg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ31, new cjs.Rectangle(-58.1,-15.9,116.3,32), null);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("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IgEACIgDACIhHADIgCgBIgCgDIACgDIADgCIAWgBIAFgCIABgDQADgFADgNIAEifQAAgKgCgDQgDgDgGgBIgTAAIgEgBQAAAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAgBQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBAAAAIAEgBIBQACIAPgCIAFABQAAAAAAAAQAAAAABABQAAAAAAAAQAAABAAABQAAAFgHAAIgLABQgEAAgDADQgFAHgDAYQgCAZAAAsIACBDIAPgWIBUiNIAJgLQAEgEAIAAIA3gCIAEABQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAABQAAAFgHAAIgGAAIgLACIgDABQgBABgCAKIgEA6IgBAhIABBPQABAKABACIAEACIARACIAJAAIAFABIABACQgBADgCACIgFABIhdgBIgOABgAkkBYIgBgDIABgCIADgCQANAAAIgBQAHgBACgDQACgDABgNIAGiiQAAgKgDgDQgCgDgGgBIgUAAIgDgBQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAgBAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAIADgBIBgAAIAEABQAAAAABAAQAAAAAAABQAAAAAAAAQAAABAAAAQABAGgHAAIgGAAIgLACIgEABQgBAAgBALIgEA6IgCAhIAAA3IACAYQAAAKACACIAEABIARADIAJAAIAFABIABADQAAAAgBABQAAABAAAAQAAABgBAAQAAAAgBABIgFABIgFAAIgKgBIgPgBIhNACgAnjBYQgBAAAAAAQgBgBAAAAQAAgBAAAAQgBgBAAgBIACgDIABgCIAFABQAIAAAEgEQAEgEACgLQACgLABgSIABh2IgFgUIgEgIQgDgDgDAAIgQgBIgDAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAIADgBIBPACIAPgCIADABQABAAAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAFgGAAIgVADIgCAFIgDANIgEBFIAYgGQANgCAMAAQANAAAXAFQAOAFAKAJQAKAIAEAKQAFALAAAMQAAAMgFAMQgFAMgKAJQgJAJgOAGQgPAGgSAAgAmTgWQgKACgLAEIADBOQgBAGAFADQAEAEAGACIANADIAMAAQALAAAIgEQAJgFAGgHQAFgHADgJQADgJAAgJQAAgLgDgKQgDgJgFgHQgHgIgKgEQgJgFgPAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ30, new cjs.Rectangle(-71.4,-15.7,142.9,31.6), null);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.woman();
	this.instance.parent = this;
	this.instance.setTransform(-65.5,-111.6,0.744,0.744);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ26, new cjs.Rectangle(-65.5,-111.6,131,223.3), null);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg4();
	this.instance.parent = this;
	this.instance.setTransform(-320,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(-320,-180,640,360), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.btn();
	this.instance.parent = this;
	this.instance.setTransform(-89.6,-39,0.684,0.684);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(-89.6,-39,179.3,78), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.curs();
	this.instance.parent = this;
	this.instance.setTransform(-30,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(-30,-30,60,60), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Символ14, null, null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.log();
	this.instance.parent = this;
	this.instance.setTransform(-57.2,-41.2,0.763,0.763);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(-57.2,-41.2,114.5,82.5), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.man2();
	this.instance.parent = this;
	this.instance.setTransform(-102.6,-112,0.747,0.747);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(-102.6,-112,205.4,224), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.man1();
	this.instance.parent = this;
	this.instance.setTransform(-72.9,-134.5,0.672,0.672);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(-72.9,-134.5,146,269), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.woman();
	this.instance.parent = this;
	this.instance.setTransform(-65.5,-111.6,0.744,0.744);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(-65.5,-111.6,131,223.3), null);


(lib.Символ56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_8 = function() {
		this.stop();
	}
	this.frame_15 = function() {
		this.stop();
	}
	this.frame_23 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(7).call(this.frame_15).wait(8).call(this.frame_23).wait(8));

	// Слой 1 - копия
	this.instance = new lib.Символ55();
	this.instance.parent = this;
	this.instance.alpha = 0;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.12,scaleY:1.12,x:-12.3,y:-13.4,alpha:0.371},7,cjs.Ease.get(1)).wait(1).to({scaleX:1,scaleY:1,x:0,y:0,alpha:0},7,cjs.Ease.get(1)).to({scaleX:0.73,scaleY:0.73,x:27.6,y:30,alpha:0.27},7,cjs.Ease.get(1)).wait(1).to({scaleX:1,scaleY:1,x:0,y:0,alpha:0},7,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ55();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.12,scaleY:1.12,x:-12.3,y:-13.4},7,cjs.Ease.get(1)).wait(1).to({scaleX:1,scaleY:1,x:0,y:0},7,cjs.Ease.get(1)).to({scaleX:0.73,scaleY:0.73,x:27.6,y:30,alpha:0.27},7,cjs.Ease.get(1)).wait(1).to({scaleX:1,scaleY:1,x:0,y:0,alpha:1},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102.6,-112,205.4,224);


(lib.Символ53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_8 = function() {
		this.stop();
	}
	this.frame_15 = function() {
		this.stop();
	}
	this.frame_23 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(7).call(this.frame_15).wait(8).call(this.frame_23).wait(8));

	// Слой 1 - копия
	this.instance = new lib.Символ52();
	this.instance.parent = this;
	this.instance.alpha = 0;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.14,scaleY:1.14,y:-10,alpha:0.43},7,cjs.Ease.get(1)).wait(1).to({scaleX:1,scaleY:1,y:0,alpha:0},7,cjs.Ease.get(1)).to({scaleX:0.69,scaleY:0.69,y:8,alpha:0.27},7).wait(1).to({scaleX:1,scaleY:1,y:0,alpha:0},7).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ52();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.14,scaleY:1.14,y:-10},7,cjs.Ease.get(1)).wait(1).to({scaleX:1,scaleY:1,y:0},7,cjs.Ease.get(1)).to({scaleX:0.69,scaleY:0.69,y:8,alpha:0.27},7).wait(1).to({scaleX:1,scaleY:1,y:0,alpha:1},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73,-134.5,146,269.1);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ26();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ27, new cjs.Rectangle(-65.5,-111.6,131,223.3), null);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ18();
	this.instance.parent = this;
	this.instance.alpha = 0;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.211},14,cjs.Ease.get(1)).to({alpha:0},15,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ18();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.6,-39,179.3,78);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_8 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(8));

	// Слой 1
	this.instance = new lib.Символ24();
	this.instance.parent = this;
	this.instance.setTransform(6.6,28.4);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-6,alpha:1},7,cjs.Ease.get(1)).wait(1).to({y:28.4,alpha:0},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83,-10.6,179.3,78);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ19();
	this.instance.parent = this;
	this.instance.alpha = 0;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.98,scaleY:0.98,alpha:0.176},10,cjs.Ease.get(-1)).to({scaleX:0.94,scaleY:0.94,alpha:0.422},14,cjs.Ease.get(1)).to({scaleX:0.97,scaleY:0.97,alpha:0.203},13,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,alpha:0},12,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ19();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.98,scaleY:0.98},10,cjs.Ease.get(-1)).to({scaleX:0.94,scaleY:0.94},14,cjs.Ease.get(1)).to({scaleX:0.97,scaleY:0.97},13,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},12,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320,-180,640,360);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ11();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.02,scaleY:1.02},0).wait(1).to({scaleX:1.1,scaleY:1.1},0).wait(1).to({scaleX:1.18,scaleY:1.18},0).wait(1).to({scaleX:1.21,scaleY:1.21},0).wait(1).to({scaleX:1.19,scaleY:1.19},0).wait(1).to({scaleX:1.11,scaleY:1.11},0).wait(1).to({scaleX:1.03,scaleY:1.03},0).wait(1).to({scaleX:1,scaleY:1},0).wait(2).to({scaleX:1.02,scaleY:1.02},0).wait(1).to({scaleX:1.1,scaleY:1.1},0).wait(1).to({scaleX:1.18,scaleY:1.18},0).wait(1).to({scaleX:1.21,scaleY:1.21},0).wait(1).to({scaleX:1.19,scaleY:1.19},0).wait(1).to({scaleX:1.11,scaleY:1.11},0).wait(1).to({scaleX:1.03,scaleY:1.03},0).wait(1).to({scaleX:1,scaleY:1},0).wait(23));

	// Слой 2
	this.instance_1 = new lib.Символ14();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.5,2.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:1.02,scaleY:1.02,alpha:0.974},0).wait(1).to({scaleX:1.11,scaleY:1.11,alpha:0.835},0).wait(1).to({scaleX:1.18,scaleY:1.18,alpha:0.736},0).wait(1).to({scaleX:1.19,scaleY:1.19,alpha:0.711},0).wait(1).to({scaleX:1.18,scaleY:1.18,alpha:0.737},0).wait(1).to({scaleX:1.08,scaleY:1.08,alpha:0.876},0).wait(1).to({scaleX:1.02,scaleY:1.02,alpha:0.975},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(2).to({scaleX:1.02,scaleY:1.02,alpha:0.974},0).wait(1).to({scaleX:1.11,scaleY:1.11,alpha:0.835},0).wait(1).to({scaleX:1.18,scaleY:1.18,alpha:0.736},0).wait(1).to({scaleX:1.19,scaleY:1.19,alpha:0.711},0).wait(1).to({scaleX:1.18,scaleY:1.18,alpha:0.737},0).wait(1).to({scaleX:1.08,scaleY:1.08,alpha:0.876},0).wait(1).to({scaleX:1.02,scaleY:1.02,alpha:0.975},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(23));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.2,-41.2,114.5,82.5);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(-102.6,-112,205.4,224), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(-72.9,-134.5,146,269), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(-65.5,-111.6,131,223.3), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.parent = this;
	this.instance.setTransform(116,-38);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:3.5},5,cjs.Ease.get(1)).wait(30).to({x:262.5},8,cjs.Ease.get(1)).wait(39).to({x:504.6},7,cjs.Ease.get(1)).wait(36).to({x:116},11,cjs.Ease.get(1)).wait(1));

	// man2.png
	this.instance_1 = new lib.Символ10();
	this.instance_1.parent = this;
	this.instance_1.setTransform(460.7,13);
	this.instance_1.alpha = 0;
	this.instance_1.compositeOperation = "lighter";
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(90).to({_off:false},0).to({scaleX:1.1,scaleY:1.1,x:450.1,y:1.5,alpha:0.422},7,cjs.Ease.get(1)).wait(32).to({scaleX:1,scaleY:1,x:460.7,y:13,alpha:0},7).wait(1));

	// man2.png
	this.instance_2 = new lib.Символ10();
	this.instance_2.parent = this;
	this.instance_2.setTransform(460.7,13);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(90).to({scaleX:1.1,scaleY:1.1,x:450.1,y:1.5},7,cjs.Ease.get(1)).wait(32).to({scaleX:1,scaleY:1,x:460.7,y:13},7).wait(1));

	// man1.png
	this.instance_3 = new lib.Символ8();
	this.instance_3.parent = this;
	this.instance_3.setTransform(231,27.5);
	this.instance_3.alpha = 0;
	this.instance_3.compositeOperation = "lighter";
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(44).to({_off:false},0).to({scaleX:1.15,scaleY:1.15,y:26.5,alpha:0.379},7,cjs.Ease.get(1)).wait(31).to({scaleX:1,scaleY:1,y:27.5,alpha:0},7).to({_off:true},41).wait(7));

	// man1.png
	this.instance_4 = new lib.Символ8();
	this.instance_4.parent = this;
	this.instance_4.setTransform(231,27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(44).to({scaleX:1.15,scaleY:1.15,y:26.5},7,cjs.Ease.get(1)).wait(31).to({scaleX:1,scaleY:1,y:27.5},7).wait(48));

	// woman.png - копия
	this.instance_5 = new lib.Символ6();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-0.5,-0.3);
	this.instance_5.alpha = 0;
	this.instance_5.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(5).to({scaleX:1.11,scaleY:1.11,x:6.5,y:-12.3,alpha:0.422},8).wait(22).to({scaleX:1,scaleY:1,x:-0.5,y:-0.3,alpha:0},8).to({_off:true},1).wait(93));

	// woman.png
	this.instance_6 = new lib.Символ6();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-0.5,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(5).to({scaleX:1.11,scaleY:1.11,x:6.5,y:-12.3},8).wait(22).to({scaleX:1,scaleY:1,x:-0.5,y:-0.3},8).wait(94));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66,-112,629.4,274);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF9200","#FFDC46"],[0,1],0,11.6,0,-11.5).s().p("AgvBpQgUgHgPgOQgPgNgJgTQgEgKgCgLQgDgLABgMQAAgaAKgWQAKgWARgPQAIgIAKgGQAJgGALgFQALgEALgCQALgCALAAQAWAAAUAGIATAIIARALQAOANAKASQAEAJACALQACAKABAMQgBAWgIAWQgKAWgPASQgQASgWALQgWAKgZAAQgXAAgVgGgAgdhdQgNAIgJANQgJANgFARQgEASAAAVQgBAaAHAUQAGATAKANIAMALIAMAIQAOAGANAAQAIAAAIgCQAHgCAGgEQANgIAIgOQAJgNAEgSQAEgSAAgUQAAgOgGgbQgFgTgKgOQgJgNgNgHQgOgHgOAAQgQAAgNAHg");
	this.shape.setTransform(-25.9,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FF9200","#FFDC46"],[0,1],0,9.5,0,-9.4).s().p("AheBxIABgDIACgBIAFABQAIAAAEgFQAEgGACgMQACgLAAgUIABh2QgBgLgCgGQgDgHgEgEQgDgDgFgCIgJgBQAAAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBIAAgCIABgCIACgCIALABIB4ABIAQgCIAJgDIAEgDIADgFQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAABIgEAKIgLAqIgEABQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAIACgJQAAgDgGgCIgNgDIhDgCIgCAJIgDBEIAYgHQAMgCAMAAQANAAAWAGQAPAFAKAIQAKAJAEALQAFALAAALQAAAMgFAMQgFALgKAKQgJAJgOAFQgPAGgSAAQgPAAgPgCQgPgDgPgHQgEAEgGACIgOAGIgOADIgMABQgBAAAAAAQgBAAAAgBQAAAAgBgBQAAgBAAgBgAgLAAQgKACgLAFIACBOQAAAGAFAEQAEAEAGACIANACIALABQALAAAIgFQAJgEAFgIQAGgHADgJQADgJAAgJQAAgKgDgKQgDgKgGgIQgGgHgKgFQgKgDgOAAg");
	this.shape_1.setTransform(-48.6,-0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FF9200","#FFDC46"],[0,1],-0.1,5.2,-0.1,-10.2).s().p("AgCCFIACgcQAAgIgDgFQgFgFgOgBIjCACIgEgBQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAgFAHgBIALAAIAJgCIABgGIACgMIAEikQgBgJgCgCIgEgCIgIgBIgSgBIgEgBIgBgEQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAIAFgBIBSACIAZgDIACACIABADIgBACIgDACQgNAAgHACQgIABgBACQgDAGgCAOIgFBNIAABQQADADAGACIAfAEIAuAAIAQgCIACgQIADhtIgBgeIgCgVIgBgIIgFgCIgIgBIgRgBIgEgBIgBgEQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAIAFgBIBQACIAMgBIAJgBIAEgBIADACIABADIgBACIgEACQgMAAgIACQgHABgBACIgDAQIgGClIAAADIAfAAIAGACIADACIAAAEIAAADQAGgEAEgIIALgYIAJgbIAch6IAagOIg1gDIgQgCIgCgDIgBgFQAAgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAIA1AJIBVgBIAagEIACABIABAEQAAADgDABIgIADIgfACQAAAAAAAAQgBAAAAABQAAAAAAABQAAAAAAABIAgCwIAHAUIAGABIALAAQAAAAABAAQAAAAAAABQAAAAAAAAQABABAAAAIABAEQAAAAAAAAQgBABAAAAQAAAAgBAAQAAABgBAAIgLgBIgNAAIgwABIgCgBIgBgDIABgDIACgBIAHAAQAEAAAAgCIgPhVIgNgCIgmAAQgJABgFADIgKAqIgBAOQAAANAFAFQAFAGAIAAIAKgBIADgBQABAAAAABQABAAAAAAQAAAAABAAQAAABAAAAIgCACIgKAIQgFADgGAAIgxgCIgFABIgBAHIgFAVQgEAKgFAHQgFAHgGAAQgFAAAAgGgAB2hyIgHANIgaBUIA8gLIgShZQgBAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAAAQgDAAgDAFg");
	this.shape_2.setTransform(35.5,2.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FF9200","#FFDC46"],[0,1],0,5.9,0,-5.9).s().p("AAQBsIgBgDIACgDIADgBIAVgCIAFgBIACgEIAEgJIADgUIAEiIIhtCtIgDACIgFACIhGAEIgDgCIgBgDIABgDIAEgBIAWgCIAFgBIABgEQADgEACgOIAGhEIAAhbQgBgKgCgDQgDgCgFgBIgUAAIgEgCQAAAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAAAIADgBIBRABIAPgBIAFAAQAAAAAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAFgHABIgLAAQgEABgDACQgFAIgDAXQgCAZAAArIACBEIBiijIAJgLQAEgDAHAAIA4gCIAEAAQAAAAABAAQAAAAABABQAAAAAAABQAAAAAAABQAAAFgHABIgFAAIgNACIgCAAQgCABgBAKIgFA7IgBAfIACBQQABAKACACIADACIARACIAJABIAEAAIACACQAAADgDACIgEABIhrABg");
	this.shape_3.setTransform(-0.6,-0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FF9200","#FFDC46"],[0,1],-4.1,0,4.2,0).s().p("AgMASIgMgHIgRgPIAXgQIAKAKIAHAGQAEADAEAAIAHgCIAIgFIAIgGIAEgHIAHAIIgHAKIgKALIgMAKQgGAEgGAAQgGAAgGgEg");
	this.shape_4.setTransform(1,-13.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 1
	this.instance = new lib.Символ31();
	this.instance.parent = this;
	this.instance.setTransform(0,0.8);
	this.instance.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance.cache(-60,-18,120,36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(-60.1,-17.2,124,39), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF9200","#FFDC46"],[0,1],0,8.9,0,-8.9).s().p("AAQBsIgBgDIABgDIADgBIAXgCIADgCIADgCIAEgJIADgUIAEiJIhtCtIgEADIgDABIhHAEIgCgCIgCgDIACgDIADgBIAWgCIAFgCIABgCQADgFADgOIAEifQAAgKgCgDQgDgDgGgBIgTAAIgEgBQAAAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQABgBAAAAQAAAAAAgBIAEgBIBQACIAPgCIAFABQAAAAAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAFgHAAIgLABQgEAAgDAEQgFAGgDAYQgCAZAAAsIACBDIAPgVIBTiOIAJgKQAEgEAIgBIA3gCIAEABQABAAAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAFgHAAIgGAAIgLACIgDABQgBABgCALIgEA5IgBAhIABBQQABAJABACIAEACIARACIAJABIAFAAIABACQgBAEgCABIgFABIhdgBIgOACg");
	this.shape.setTransform(58.2,-1.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FF9200","#FFDC46"],[0,1],0.1,7.5,0.1,-12.5).s().p("Ah0CUIgDgCIgBgDQAAgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAHgBALgFIAkgWIAKgHQABgCACgLIAHhnIgDhgQgBgNgCgFQgBgEgDAAIgKAAIgFAAIgDgBIAAgDQAAgBAAAAQAAgBABAAQAAgBAAAAQAAAAABgBIA3ABQAAAAABAAQABAAAAAAQABAAAAAAQAAAAAAgBIAhgKQAJgCAKAAQAmAAAVAQQAVAQAAAbQAAAMgCAKQgCALgFAJQgJASgPANQgQANgTAGIgTAFIgTACIgNAAIgJgCIABBBQABAKABADQABAAAAABQAAAAABAAQAAABABAAQAAAAABAAIATgBIACACIAAAEIgCABIgbAFIghAMIg7AiQgJAEgEAAgAASiJIgLAEIgHAEIgEAFIgDByQABAEAIAEQAJACAOAAQAOAAALgEQALgFAHgJQAIgKAFgPQAEgOAAgUQAAgOgEgLQgEgMgIgIQgHgIgKgEQgKgFgLAAg");
	this.shape_1.setTransform(32.3,0.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FF9200","#FFDC46"],[0,1],0,11.6,0,-11.5).s().p("AggB4Ig6AEQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABgBIAHAAQAEAAABgDIAAhtQAAgmgCgVQgCgWgDgEQgCgCgEgBIgPgBIgGAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAgBgBIgBgDQAAgFAEAAICRgBIA1AFQABAAACgFIAEgMIAFgMQADgGAEAAIAHAEQABAAAAABQAAAAAAABQAAAAgBABQgBABgBAAQgHAGgEAJQgFAJgDANIgEALIgCAQQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQgDAAgBgFIgGgIQgEgFgHgEQgHgDgJgDQgKgDgMAAIg8gBIgDBRIBMgBIAegGQAGgBACgDQABAAAAgBQAAAAABAAQAAAAABAAQAAAAABAAIADABIgCAHIgGAWIgCAOQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBgBQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBAAAAQgCgFgEgDQgFgCgHgCIgRgCIhFAAIADBXIA9gCIAmgGQAHgCADgDIAEgHIACgIIABgBIACgBIADACIgDAaIAAAJIABAHIgBAFIgCAEg");
	this.shape_2.setTransform(15.1,-3.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FF9200","#FFDC46"],[0,1],0,9.5,0,-9.4).s().p("AheBxIABgDIACgBIAFABQAIAAAEgFQAEgGACgMQACgLAAgUIABh2QgBgLgCgGQgDgHgEgEQgDgDgFgCIgJgBQAAAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBIAAgCIABgCIACgCICDACIAQgCIAJgDIAEgDIADgFQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABIgPA0IgEABQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAIACgJQAAgDgGgCIgNgDIhDgCIgCAJIgDBEIAYgHQAMgCAMAAQANAAAWAGQAPAFAKAIQAKAJAEALQAFALAAALQAAAMgFAMQgFALgKAKQgJAJgOAFQgPAGgSAAQgPAAgPgCQgPgDgPgHQgEAEgGACIgOAGIgOADIgMABQgBAAAAAAQgBAAAAgBQAAAAgBgBQAAgBAAgBgAgLAAQgKACgLAFIACBOQAAAGAFAEQAEAEAGACIANACIALABQALAAAIgFQAJgEAFgIQAGgHADgJQADgJAAgJQAAgKgDgKQgDgKgGgIQgGgHgKgFQgKgDgOAAg");
	this.shape_3.setTransform(-7.4,-2.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FF9200","#FFDC46"],[0,1],0,11.6,0,-11.5).s().p("Ag5BrIgBgCIABgDIAEgBQAMAAAIgCQAHgBACgCQACgEACgNIAFiiQAAgKgCgCQgDgEgGgBIgTAAIgEgBQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAgBABAAQAAAAAAgBIAEgBIBeAAIAEABQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAABQAAAFgHAAIgFAAIgMACIgDABQgBAAgCALIgEA6IgCAhIAAA3IACAYQABAKABACIAFABIARADIAIABIAFAAIABADQAAABAAAAQgBABAAAAQAAABgBAAQAAABgBAAIgEABIgGAAIgKgBIgPgBIhLADg");
	this.shape_4.setTransform(-23.5,-1.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FF9200","#FFDC46"],[0,1],0,9.8,0,-9.7).s().p("AhYBrQgBAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAgBIABgDIACgCIAFABQAIAAAEgEQAEgEACgLQACgLAAgSIABh2IgEgUIgFgIQgCgDgDAAIgQgBIgDAAQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBQAAgBABAAQAAgBAAAAQAAgBABAAIADgBIBPACIANgCIAEABQABAAAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAFgGAAIgUADIgCAFIgDANIgEBFIAYgGQAMgCAMAAQANAAAWAFQAPAFAKAIQAKAIAEALQAFALAAAMQAAAMgFAMQgFAMgKAJQgJAJgOAGQgPAGgSAAgAgIgDQgKACgLADIACBPQAAAGAFADQAEAEAGACIAMADIAMAAQALAAAIgEQAJgFAFgHQAGgHADgJQADgJAAgJQAAgLgDgKQgDgJgGgIQgGgIgKgDQgKgFgOAAg");
	this.shape_5.setTransform(-39.5,-1.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#FF9200","#FFDC46"],[0,1],0,10.8,0,-10.7).s().p("AgFB0IgjgIIgOgEIgSAIQgKAEgLAAIgLgBQgDgCAAgDIABgCIABgDIABgBIADAAQACACADABIAHAAQAHAAAFgFQAFgDACgIIADgMIAEhRQAAgngCgWQgCgWgEgEIgGgCIgHgCIgOAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAgBAAAAIgCgDQAAgGAEABIAxACQAIAAAGgCIAegLQAIgCALgBQAPABAMACQAMACAJAFQAJAFAFAIQAFAIAAALQAAAMgEAJQgGAKgIAHQgHAIgJAFIgPAIIAYAEQAOACALAHQALAEAIAKQAEAEACAHQABAFAAAIQAAALgEAKQgFALgIAJQgHAIgLAIQgKAHgKAGQgMAEgLAEQgLACgKAAgAgcgFIABBGIABAKQABAFADAGQAEAFAFAEQAFAEAIACQAGADAKAAQAJAAAJgDQAIgDAGgIQAGgHADgLQAFgLAAgQQgBgOgEgKQgFgJgIgGQgIgGgMgCQgMgDgNAAgAgBhnIgKADIgIAFQgEADgBAFIgEBFIADABIAhABIAHgCIAFgCIAGgEQAGgDADgJQAFgJAAgPQAAgLgDgJQgDgHgFgGQgFgGgGgCQgGgDgGAAg");
	this.shape_6.setTransform(-60.7,-2.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 1
	this.instance = new lib.Символ30();
	this.instance.parent = this;
	this.instance.setTransform(0,0.8);
	this.instance.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance.cache(-73,-18,147,36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(-73.4,-17,150,39), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 3
	this.instance = new lib.Символ3();
	this.instance.parent = this;
	this.instance.setTransform(133.3,-0.8,0.7,0.7,0,0,0,58.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.03,scaleY:1.03,x:133.5,y:-1},14,cjs.Ease.get(-1)).to({regX:58.4,regY:-0.2,scaleX:1.38,scaleY:1.38,x:133.7},15,cjs.Ease.get(1)).to({scaleX:1.04,scaleY:1.04,x:133.6,y:-0.9},15,cjs.Ease.get(-1)).to({regX:58.1,regY:-0.1,scaleX:0.7,scaleY:0.7,x:133.3,y:-0.8},15,cjs.Ease.get(1)).wait(1));

	// Символ 2
	this.instance_1 = new lib.Символ2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-133.5,1,1.24,1.24,0,0,0,-71.5,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.95,scaleY:0.95,x:-133.6,y:1.1},14,cjs.Ease.get(-1)).to({regX:-71.7,scaleX:0.65,scaleY:0.65,x:-133.7,y:1},15,cjs.Ease.get(1)).to({regY:0.2,scaleX:0.94,scaleY:0.94},15,cjs.Ease.get(-1)).to({regX:-71.5,regY:0.1,scaleX:1.24,scaleY:1.24,x:-133.5},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-135.4,-19.7,274.5,46);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_8 = function() {
		this.stop();
	}
	this.frame_15 = function() {
		this.stop();
	}
	this.frame_23 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(7).call(this.frame_15).wait(8).call(this.frame_23).wait(8));

	// Слой 1 - копия
	this.instance = new lib.Символ27();
	this.instance.parent = this;
	this.instance.alpha = 0;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.1,regY:-0.1,scaleX:1.13,scaleY:1.13,x:8.3,y:-14,alpha:0.43},7,cjs.Ease.get(1)).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:0,y:0,alpha:0},7,cjs.Ease.get(1)).to({scaleX:0.83,scaleY:0.83,x:-11,y:18.8,alpha:0.27},7,cjs.Ease.get(1)).wait(1).to({scaleX:1,scaleY:1,x:0,y:0,alpha:0},7).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ27();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:0.1,regY:-0.1,scaleX:1.13,scaleY:1.13,x:8.3,y:-14},7,cjs.Ease.get(1)).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:0,y:0},7,cjs.Ease.get(1)).to({scaleX:0.83,scaleY:0.83,x:-11,y:18.8,alpha:0.27},7,cjs.Ease.get(1)).wait(1).to({scaleX:1,scaleY:1,x:0,y:0,alpha:1},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65.5,-111.6,131,223.3);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_8 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(8));

	// Слой 1
	this.instance = new lib.Символ24();
	this.instance.parent = this;
	this.instance.setTransform(6.6,28.4);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-6,alpha:1},7,cjs.Ease.get(1)).wait(1).to({y:28.4,alpha:0},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83,-10.6,179.3,78);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_8 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(8));

	// Слой 1
	this.instance = new lib.Символ24();
	this.instance.parent = this;
	this.instance.setTransform(6.6,28.4);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-6,alpha:1},7,cjs.Ease.get(1)).wait(1).to({y:28.4,alpha:0},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83,-10.6,179.3,78);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.vibrat_btn2 = new lib.Символ25();
	this.vibrat_btn2.parent = this;
	this.vibrat_btn2.setTransform(-0.2,46.7);

	this.timeline.addTween(cjs.Tween.get(this.vibrat_btn2).wait(70));

	// Слой 1
	this.man11 = new lib.Символ53();
	this.man11.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.man11).to({y:-4.4},15,cjs.Ease.get(-1)).to({y:-10},19,cjs.Ease.get(1)).to({y:-4.5},19,cjs.Ease.get(-1)).to({y:0},16,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83.2,-134.5,179.3,269.1);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.vibrat_btn3 = new lib.Символ28();
	this.vibrat_btn3.parent = this;
	this.vibrat_btn3.setTransform(-20.2,60);

	this.timeline.addTween(cjs.Tween.get(this.vibrat_btn3).wait(80));

	// Слой 1
	this.man22 = new lib.Символ56();
	this.man22.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.man22).to({y:3.9},19,cjs.Ease.get(-1)).to({y:8},20,cjs.Ease.get(1)).to({y:4},20,cjs.Ease.get(-1)).to({y:0},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103.2,-112,206,239.4);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.vibrat_btn1 = new lib.Символ16();
	this.vibrat_btn1.parent = this;
	this.vibrat_btn1.setTransform(19.5,74.5);

	this.timeline.addTween(cjs.Tween.get(this.vibrat_btn1).wait(60));

	// Слой 1
	this.baba1 = new lib.Символ29();
	this.baba1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.baba1).to({y:4.9},14,cjs.Ease.get(-1)).to({y:10},15,cjs.Ease.get(1)).to({y:5},15,cjs.Ease.get(-1)).to({y:0},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65.5,-111.6,181.3,253.5);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// woman.png
	this.baba = new lib.Символ21();
	this.baba.parent = this;
	this.baba.setTransform(-244.1,-25.3);

	this.timeline.addTween(cjs.Tween.get(this.baba).wait(1));

	// man2.png
	this.man2 = new lib.Символ22();
	this.man2.parent = this;
	this.man2.setTransform(217,-12);

	this.timeline.addTween(cjs.Tween.get(this.man2).wait(1));

	// man1.png
	this.man1 = new lib.Символ23();
	this.man1.parent = this;
	this.man1.setTransform(-12.6,2.5);

	this.timeline.addTween(cjs.Tween.get(this.man1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(-309.6,-137,629.3,274.1), null);


(lib.Символ17 = function(mode,startPosition,loop) {
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

	// Слой 4
	this.instance = new lib.Символ1();
	this.instance.parent = this;
	this.instance.setTransform(-0.1,-114.7,1.154,1.154);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// Слой 3
	this.instance_1 = new lib.Символ12();
	this.instance_1.parent = this;
	this.instance_1.setTransform(241.1,-113.4,0.703,0.703,0,0,0,-0.1,-0.2);

	this.instance_2 = new lib.Символ12();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-240.9,-113.4,0.703,0.703,0,0,0,-0.1,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(2));

	// Слой 2
	this.pers11 = new lib.Символ4();
	this.pers11.parent = this;
	this.pers11.setTransform(-236,42.9);

	this.pers = new lib.Символ20();
	this.pers.parent = this;
	this.pers.setTransform(7.7,68);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pers11}]}).to({state:[{t:this.pers}]},1).wait(1));

	// Слой 1
	this.instance_3 = new lib.Символ13();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-1,3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-321,-177,648.4,381.9);


// stage content:
(lib._600300throne_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		stage.canvas.style.cursor = "none";
		this.kurs.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
			this.kurs.x = stage.mouseX/window.devicePixelRatio;
			this.kurs.y = stage.mouseY/window.devicePixelRatio;
		}
		
		this.cursor = "none";
		this.baba_btn.cursor = "none";
		this.man1_btn.cursor = "none";
		this.man2_btn.cursor = "none";
		
		
		var _this = this;
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		  function fl_MouseOverHandler_5()
		{
			_this.kurs.gotoAndStop(1);
			_this.main_1.gotoAndStop(1);
		}
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		  function fl_MouseOutHandler_2()
		{
			_this.kurs.gotoAndStop(0);
			_this.main_1.gotoAndStop(0);
		}
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.baba_btn.addEventListener("mouseover", fl_MouseOverHandler_11);
		
		function fl_MouseOverHandler_11()
		{
			_this.main_1.pers.baba.baba1.gotoAndPlay(1);
			_this.main_1.pers.man1.man11.gotoAndPlay(16);
			_this.main_1.pers.man2.man22.gotoAndPlay(16);
			_this.main_1.pers.baba.vibrat_btn1.gotoAndPlay(1);
		}
		
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.baba_btn.addEventListener("mouseout", fl_MouseOutHandler_33);
		
		function fl_MouseOutHandler_33()
		{
			_this.main_1.pers.baba.baba1.gotoAndPlay(9);
			_this.main_1.pers.man1.man11.gotoAndPlay(24);
			_this.main_1.pers.man2.man22.gotoAndPlay(24);
			_this.main_1.pers.baba.vibrat_btn1.gotoAndPlay(9);
		}
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.man1_btn.addEventListener("mouseover", fl_MouseOverHandler_92);
		
		function fl_MouseOverHandler_92()
		{
			_this.main_1.pers.man1.man11.gotoAndPlay(1);
			_this.main_1.pers.baba.baba1.gotoAndPlay(16);
			_this.main_1.pers.man2.man22.gotoAndPlay(16);
			_this.main_1.pers.man1.vibrat_btn2.gotoAndPlay(1);
		}
		
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.man1_btn.addEventListener("mouseout", fl_MouseOutHandler_82);
		
		function fl_MouseOutHandler_82()
		{
			_this.main_1.pers.man1.man11.gotoAndPlay(9);
			_this.main_1.pers.baba.baba1.gotoAndPlay(24);
			_this.main_1.pers.man2.man22.gotoAndPlay(24);
			_this.main_1.pers.man1.vibrat_btn2.gotoAndPlay(9);
		}
		
		
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.man2_btn.addEventListener("mouseover", fl_MouseOverHandler_113);
		
		function fl_MouseOverHandler_113()
		{
			_this.main_1.pers.man2.man22.gotoAndPlay(1);
			_this.main_1.pers.baba.baba1.gotoAndPlay(16);
			_this.main_1.pers.man1.man11.gotoAndPlay(16);
			_this.main_1.pers.man2.vibrat_btn3.gotoAndPlay(1);
		}
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.man2_btn.addEventListener("mouseout", fl_MouseOutHandler_223);
		
		function fl_MouseOutHandler_223()
		{
			_this.main_1.pers.man2.man22.gotoAndPlay(9);
			_this.main_1.pers.baba.baba1.gotoAndPlay(24);
			_this.main_1.pers.man1.man11.gotoAndPlay(24);
			_this.main_1.pers.man2.vibrat_btn3.gotoAndPlay(9);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 3
	this.kurs = new lib.Символ48();
	this.kurs.parent = this;
	this.kurs.setTransform(450,378,1,1,0,0,0,-26,-18);

	this.timeline.addTween(cjs.Tween.get(this.kurs).wait(1));

	// Слой 4
	this.man2_btn = new lib.Символ54();
	this.man2_btn.parent = this;
	this.man2_btn.setTransform(534.1,183.6,0.985,1);
	new cjs.ButtonHelper(this.man2_btn, 0, 1, 2, false, new lib.Символ54(), 3);

	this.man1_btn = new lib.Символ49();
	this.man1_btn.parent = this;
	this.man1_btn.setTransform(297.6,186.1,0.913,1);
	new cjs.ButtonHelper(this.man1_btn, 0, 1, 2, false, new lib.Символ49(), 3);

	this.baba_btn = new lib.Символ43();
	this.baba_btn.parent = this;
	this.baba_btn.setTransform(70.1,180.7,0.804,1,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.baba_btn, 0, 1, 2, false, new lib.Символ43(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.baba_btn},{t:this.man1_btn},{t:this.man2_btn}]}).wait(1));

	// Слой 2
	this.main_1 = new lib.Символ17();
	this.main_1.parent = this;
	this.main_1.setTransform(300,150);

	this.timeline.addTween(cjs.Tween.get(this.main_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(279,123,649.2,381.9);
// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg4.jpg?1496839665158", id:"bg4"},
		{src:"images/btn.png?1496839665158", id:"btn"},
		{src:"images/curs.png?1496839665158", id:"curs"},
		{src:"images/log.png?1496839665158", id:"log"},
		{src:"images/man1.png?1496839665158", id:"man1"},
		{src:"images/man2.png?1496839665158", id:"man2"},
		{src:"images/woman.png?1496839665158", id:"woman"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;