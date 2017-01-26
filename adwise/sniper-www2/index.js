(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.ammo = function() {
	this.initialize(img.ammo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,118,29);


(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,687,386);


(lib.backzoom = function() {
	this.initialize(img.backzoom);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,754,416);


(lib.HP = function() {
	this.initialize(img.HP);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,118,29);


(lib.pricel = function() {
	this.initialize(img.pricel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,562,414);


(lib.puha = function() {
	this.initialize(img.puha);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,353,235);


(lib.solder = function() {
	this.initialize(img.solder);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,16,34);


(lib.vspih = function() {
	this.initialize(img.vspih);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,176,131);// helper functions:

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


(lib.Tween7copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0.945)").s().p("AhXCWIAAkrIBFAAIAAB2IAgAAQAXAAAQAHQAQAHAKATQAJAVAAAlQAAAjgJAUQgKAUgQAHQgQAIgXAAgAgSBrIAMAAQAKAAAGgEQAFgFACgJIABgdQAAgdgEgKQgEgKgQAAIgMAAg");
	this.shape.setTransform(37.1,-2.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,0,0,0.945)").s().p("AASCWIAAiPIgkAAIAACPIhFAAIAAkrIBFAAIAABwIAkAAIAAhwIBGAAIAAErg");
	this.shape_1.setTransform(17.6,-2.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,0,0,0.945)").s().p("AhXBFIAAiIQAAghALgTQAMgUAUgIQAUgIAYAAQAZAAAUAIQAUAIALAUQAMATAAAhIAACIQAABXhYAAQhXAAAAhXgAgShTIAACoQAAAXASAAQASAAAAgXIAAioQAAgXgSgBQgSABAAAXg");
	this.shape_2.setTransform(-1.9,-2.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,0,0,0.945)").s().p("AhICWIAAkrICRAAIAAAuIhLAAIAAD9g");
	this.shape_3.setTransform(-19.1,-2.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,0,0,0.945)").s().p("AhXBFIAAiIQAAghALgTQAMgUAUgIQAUgIAYAAQAZAAAUAIQAUAIALAUQAMATAAAhIAACIQAABXhYAAQhXAAAAhXgAgShTIAACoQAAAXASAAQASAAAAgXIAAioQAAgXgSgBQgSABAAAXg");
	this.shape_4.setTransform(-37.1,-2.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.7,-18.9,95.6,37.9);


(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.949)").s().p("AhXCWIAAkrIBFAAIAAB2IAgAAQAXAAAQAHQAQAHAKATQAJAVAAAlQAAAjgJAUQgKAUgQAHQgQAIgXAAgAgSBrIAMAAQAKAAAGgEQAFgFACgJIABgdQAAgdgEgKQgEgKgQAAIgMAAg");
	this.shape.setTransform(37.1,-2.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.949)").s().p("AASCWIAAiPIgkAAIAACPIhFAAIAAkrIBFAAIAABwIAkAAIAAhwIBGAAIAAErg");
	this.shape_1.setTransform(17.6,-2.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.949)").s().p("AhXBFIAAiIQAAghALgTQAMgUAUgIQAUgIAYAAQAZAAAUAIQAUAIALAUQAMATAAAhIAACIQAABXhYAAQhXAAAAhXgAgShTIAACoQAAAXASAAQASAAAAgXIAAioQAAgXgSgBQgSABAAAXg");
	this.shape_2.setTransform(-1.9,-2.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.949)").s().p("AhICWIAAkrICRAAIAAAuIhLAAIAAD9g");
	this.shape_3.setTransform(-19.1,-2.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.949)").s().p("AhXBFIAAiIQAAghALgTQAMgUAUgIQAUgIAYAAQAZAAAUAIQAUAIALAUQAMATAAAhIAACIQAABXhYAAQhXAAAAhXgAgShTIAACoQAAAXASAAQASAAAAgXIAAioQAAgXgSgBQgSABAAAXg");
	this.shape_4.setTransform(-37.1,-2.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.7,-18.9,95.6,37.9);


(lib.Symbol37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0.949)").s().p("Ai/ggIBjAAIAAh+IC/AAIAAB+IBdAAIjAC/g");
	this.shape.setTransform(19.2,15.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol37, new cjs.Rectangle(0,0,38.3,31.8), null);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.953)").s().p("AAaCoIgJhSIgpAAIgNBSIhCAAIA5lPIBrAAIArFPgAALAjIgMiVIgBAAIgOCVIAbAAg");
	this.shape.setTransform(10.4,16.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol32, new cjs.Rectangle(0,0,20.8,33.7), null);


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.953)").s().p("AAZCoIgvipIgBAAIAACpIhOAAIAAlPIBOAAIAACZIABAAIAxiZIBKAAIg0CUIA1C7g");
	this.shape.setTransform(10.2,16.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol31, new cjs.Rectangle(0,0,20.4,33.7), null);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.953)").s().p("AAeCoIAAkcIgiAAIAADLQgBAngPAVQgOAVgdAAIgsAAIAAgzIAPAAQAMAAAFgFQAEgEAAgPIAAkEICzAAIAAFPg");
	this.shape.setTransform(10.8,16.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol30, new cjs.Rectangle(0,0,21.6,33.7), null);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.953)").s().p("AhQCoIAAlPIChAAIAAAzIhTAAIAABKIBQAAIAAAyIhQAAIAABtIBTAAIAAAzg");
	this.shape.setTransform(8.1,16.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol29, new cjs.Rectangle(0,0,16.3,33.7), null);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.953)").s().p("AhiCoIAAlPIBgAAQAxAAAaAPQAaAQAAApIAAA+QAAAigaATQgbASgmAAIgcAAIAACCgAgUgJIANAAQAMAAAGgFQAGgFACgLIAAhDQgCgLgGgGQgGgFgMAAIgNAAg");
	this.shape.setTransform(9.9,16.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol28, new cjs.Rectangle(0,0,19.9,33.7), null);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.953)").s().p("AgmCoIAAkcIg3AAIAAgzIC7AAIAAAzIg3AAIAAEcg");
	this.shape.setTransform(9.4,16.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol27, new cjs.Rectangle(0,0,18.9,33.7), null);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.953)").s().p("AhiBNIAAiZQAAhiBiAAQAvAAAaAUQAaATAAAzIAAAlIhOAAIAAguQAAgbgVAAQgUAAAAAbIAAC8QAAAaAUAAQAVAAAAgaIAAg6IBOAAIAAAtQAABdhjAAQhiAAAAhig");
	this.shape.setTransform(9.9,17.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol26, new cjs.Rectangle(0,0,19.9,35), null);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.953)").s().p("AAfCoIAAjAIgBAAIg2DAIhNAAIAAlPIBIAAIAAC/IAAAAIA1i/IBOAAIAAFPg");
	this.shape.setTransform(10.2,16.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol25, new cjs.Rectangle(0,0,20.3,33.7), null);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.953)").s().p("ABNCoIAAkeIgBAAIguEeIhEAAIgtkeIgBAAIAAEeIg/AAIAAlPIB0AAIAgDuIABAAIAhjuIBxAAIAAFPg");
	this.shape.setTransform(14.8,16.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol24, new cjs.Rectangle(0,0,29.6,33.7), null);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.953)").s().p("AAfCoIAAjAIgBAAIg2DAIhNAAIAAlPIBIAAIAAC/IAAAAIA1i/IBOAAIAAFPg");
	this.shape.setTransform(10.2,16.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol23, new cjs.Rectangle(0,0,20.3,33.7), null);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.953)").s().p("AAVCoIAAigIgpAAIAACgIhOAAIAAlPIBOAAIAAB9IApAAIAAh9IBOAAIAAFPg");
	this.shape.setTransform(9.9,16.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol22, new cjs.Rectangle(0,0,19.9,33.7), null);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.953)").s().p("AhiBNIAAiZQAAhiBiAAQAvAAAaAUQAaATAAAzIAAAlIhOAAIAAguQAAgbgVAAQgUAAAAAbIAAC8QAAAaAUAAQAVAAAAgaIAAg6IBOAAIAAAtQAABdhjAAQhiAAAAhig");
	this.shape.setTransform(9.9,17.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol21, new cjs.Rectangle(0,0,19.9,35), null);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.vspih();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(0,0,176,131), null);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.backzoom();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(0,0,754,416), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,0,0,0)","#FF0000"],[0,1],-15,0.1,0,-15,0.1,543.7).s().p("Eg7DAgWMAAAhArMB2FAAAIACACMAAABApg");
	this.shape.setTransform(553,306.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(175,99.8,756,414), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Symbol11, null, null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.vspih();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,176,131), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","rgba(0,0,0,0.486)","rgba(0,0,0,0)"],[0,0.773,1],-183,0,183,0).s().p("EgclAjPMAAAhGdMA5LAAAIAAPLQn4AblrFsQmJGIAAIqQAAIrGJGJQFrFsH4AaIAANfg");
	this.shape.setTransform(183,225.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,366,451), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pricel();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.815,0.815);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,458,337.4), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.puha();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,353,235), null);


(lib.Symbol38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol6();
	this.instance.parent = this;
	this.instance.setTransform(229,168.7,1,1,0,0,0,229,168.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:155.7},19).to({scaleX:1.02,scaleY:1.02,y:168.7},20).to({scaleX:1,scaleY:1,y:181.7},20).to({y:168.7},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,458,337.4);


(lib.Symbol36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol37();
	this.instance.parent = this;
	this.instance.setTransform(19.2,15.8,1,1,0,0,0,19.2,15.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:15.9,scaleX:0.72,scaleY:0.72,y:54.9},4).to({regY:15.8,scaleX:1,scaleY:1,y:15.8},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,38.3,31.8);


(lib.Symbol34copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween7copy("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(47.8,19);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol34copy, new cjs.Rectangle(0,0,95.6,37.9), null);


(lib.Symbol34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween7("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(47.8,19);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol34, new cjs.Rectangle(0,0,95.6,37.9), null);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol21();
	this.instance.parent = this;
	this.instance.setTransform(12,18.4,1,1,0,0,0,9.9,17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:5.5,y:11.9},3).to({x:12,y:18.4},3).wait(54));

	// Layer 3
	this.instance_1 = new lib.Symbol22();
	this.instance_1.parent = this;
	this.instance_1.setTransform(33.9,18.4,1,1,0,0,0,9.9,16.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({x:27.4,y:11.9},3).to({x:33.9,y:18.4},3).wait(51));

	// Layer 4
	this.instance_2 = new lib.Symbol23();
	this.instance_2.parent = this;
	this.instance_2.setTransform(56.1,18.4,1,1,0,0,0,10.2,16.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({x:49.6,y:11.9},3).to({x:56.1,y:18.4},3).wait(48));

	// Layer 5
	this.instance_3 = new lib.Symbol24();
	this.instance_3.parent = this;
	this.instance_3.setTransform(83.1,18.4,1,1,0,0,0,14.8,16.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({x:76.6,y:11.9},3).to({x:83.1,y:18.4},3).wait(45));

	// Layer 6
	this.instance_4 = new lib.Symbol25();
	this.instance_4.parent = this;
	this.instance_4.setTransform(110,18.4,1,1,0,0,0,10.2,16.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(12).to({x:103.5,y:11.9},3).to({x:110,y:18.4},3).wait(42));

	// Layer 7
	this.instance_5 = new lib.Symbol26();
	this.instance_5.parent = this;
	this.instance_5.setTransform(143.1,18.4,1,1,0,0,0,9.9,17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15).to({x:136.6,y:11.9},3).to({x:143.1,y:18.4},3).wait(39));

	// Layer 8
	this.instance_6 = new lib.Symbol27();
	this.instance_6.parent = this;
	this.instance_6.setTransform(164.1,18.4,1,1,0,0,0,9.4,16.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(18).to({x:157.6,y:11.9},3).to({x:164.1,y:18.4},3).wait(36));

	// Layer 9
	this.instance_7 = new lib.Symbol28();
	this.instance_7.parent = this;
	this.instance_7.setTransform(185.2,18.4,1,1,0,0,0,9.9,16.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(21).to({x:178.7,y:11.9},3).to({x:185.2,y:18.4},3).wait(33));

	// Layer 10
	this.instance_8 = new lib.Symbol29();
	this.instance_8.parent = this;
	this.instance_8.setTransform(205.2,18.4,1,1,0,0,0,8.1,16.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(24).to({x:198.7,y:11.9},3).to({x:205.2,y:18.4},3).wait(30));

	// Layer 11
	this.instance_9 = new lib.Symbol30();
	this.instance_9.parent = this;
	this.instance_9.setTransform(225,18.4,1,1,0,0,0,10.8,16.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(27).to({x:218.5,y:11.9},3).to({x:225,y:18.4},3).wait(27));

	// Layer 12
	this.instance_10 = new lib.Symbol31();
	this.instance_10.parent = this;
	this.instance_10.setTransform(248.1,18.4,1,1,0,0,0,10.2,16.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(30).to({x:241.6,y:11.9},3).to({x:248.1,y:18.4},3).wait(24));

	// Layer 13
	this.instance_11 = new lib.Symbol32();
	this.instance_11.parent = this;
	this.instance_11.setTransform(269.7,18.4,1,1,0,0,0,10.4,16.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(33).to({x:263.2,y:11.9},3).to({x:269.7,y:18.4},3).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.1,1,278.1,34.9);


(lib.Symbol19 = function(mode,startPosition,loop) {
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

	// Layer 4
	this.instance = new lib.Symbol36();
	this.instance.parent = this;
	this.instance.setTransform(208.1,119.6,0.836,0.836,0,0,0,19.2,15.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:71.6},4).to({x:208.1},5).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol20();
	this.instance_1.parent = this;
	this.instance_1.setTransform(455.1,77.9,1,1,0,0,0,140.8,21.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-0.1},4).to({y:77.9},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(192,57.7,402.4,75.3);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol16();
	this.instance.parent = this;
	this.instance.setTransform(88,65.5,1,1,0,0,0,88,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(33));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,176,131);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Symbol15();
	this.instance.parent = this;
	this.instance.setTransform(378,207.5,1,1,0,0,0,88,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.instance_1 = new lib.solder();
	this.instance_1.parent = this;
	this.instance_1.setTransform(374,196);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 1
	this.instance_2 = new lib.Symbol14();
	this.instance_2.parent = this;
	this.instance_2.setTransform(377,208,1,1,0,0,0,377,208);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,754,416), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol11();
	this.instance.parent = this;
	this.instance.setTransform(85,160.5,1,1,0,0,0,88,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.back();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,687,386), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Symbol7();
	this.instance.parent = this;
	this.instance.setTransform(435.5,177.9,1.109,1.109,180,0,0,183,225.5);

	this.instance_1 = new lib.Symbol7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(20.6,169.2,1.109,1.109,0,0,0,183,225.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 1
	this.instance_2 = new lib.Symbol38();
	this.instance_2.parent = this;
	this.instance_2.setTransform(229,168.7,1,1,0,0,0,229,168.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.6)").s().p("EhA6AinMAAAhFNMCB1AAAMAAABFNgAl33fQlgAQkIBdQiaA3iBBSQiJBYhlByQiYCuhLDxQhFDhAID6QADBMAPCWIAWDjQA+CeAyBqQAyBqBXBrQBWBsBwBhQBvBhAuBSQAuBRB3ApQB2ApCcAfQDXAqCqAOQDRARCygXQDKgZCthOQC7hUCBiHQA2g4BAhYIBtiYIAog3QAWggANgbQARghAZhOQAviPAVhIQBzmHg6lEQgRhZghhoQgZhLgshvQglhggdg7QgohTgsg9QhniPiwhkQiXhWjHg0QiegoiegQQhxgLh9AAQhDAAhHADg");
	this.shape.setTransform(258.5,176.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-182.4,-80.9,856.4,509), null);


(lib.Symbol35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol34();
	this.instance.parent = this;
	this.instance.setTransform(47.8,18.9,1,1,0,0,0,47.8,18.9);

	this.instance_1 = new lib.Symbol34copy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(47.8,18.9,1,1,0,0,0,47.8,18.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,95.6,37.9);


(lib.Symbol33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol35();
	this.instance.parent = this;
	this.instance.setTransform(47.8,18.9,1,1,0,0,0,47.8,18.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:47.7,scaleX:1.27,scaleY:1.27,x:47.7},4).to({regX:47.8,scaleX:1,scaleY:1,x:47.8},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,95.6,37.9);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.961)").s().p("AgfBDQgMgKAAgUIAAhGQAAgQAHgKQAGgKAKgDQAKgEAKAAQANAAAKAEQAJADAGAKQAGAJAAARIAABGQAAAUgMAKQgLAKgVAAQgTAAgMgKgAgIgrIAABWQAAAKAIAAQAJAAAAgKIAAhWQAAgKgJABQgIgBAAAKg");
	this.shape.setTransform(100.3,314.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.961)").s().p("AgfBDQgMgKAAgUIAAhGQAAgQAHgKQAGgKAKgDQAKgEAKAAQANAAAKAEQAJADAGAKQAGAJAAARIAABGQAAAUgMAKQgLAKgVAAQgTAAgMgKgAgIgrIAABWQAAAKAIAAQAJAAAAgKIAAhWQAAgKgJABQgIgBAAAKg");
	this.shape_1.setTransform(90.6,314.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.961)").s().p("AgEBKIAAhtIgZAAIAAgWQALAAAJgDQAJgEAAgJIAeAAIAACTg");
	this.shape_2.setTransform(80,314.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.961)").s().p("AggBDQgMgJAAgUIAAgQQAAgKAHgHQAHgFAJgDIAAAAQgJgCgHgHQgHgGAAgMIAAgLQAAgTAOgIQAOgIARAAQATAAAMAIQANAIAAATIAAANQAAAIgHAIQgHAHgKACIAAAAQAIADAFABQAFADADAGQADAGAAALIAAAMQAAANgGAJQgGAIgLAEQgKAEgMAAQgUAAgMgKgAgJATIAAAbQAAAHAJAAQAFAAADgBQACgCAAgEIAAgbQAAgKgKAAQgJAAAAAKgAgHgyQgCADAAAEIAAAWQAAAGACABQADACAEAAQAFAAADgCQACgBAAgHIAAgVQAAgKgKABQgEAAgDACg");
	this.shape_3.setTransform(85.8,314.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.961)").s().p("AgrAjIAAhMQAAgRAOgJQANgJARAAQArAAAAAkIAAATIgjAAIAAgTQAAgFgCgEQgCgEgFABQgEgBgCAEQgCAEAAAFIAAAkQAGgFAEgDQAGgCAHAAQAMAAAJAHQAIAHAAAOIAAAYQAAAUgNAJQgMAKgRAAQgtAAAAgqgAgFAOQgDADAAADIAAAbQAAAGAIAAQAJAAAAgHIAAgaQAAgIgIAAQgEAAgCACg");
	this.shape_4.setTransform(85.8,314.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,0,0,0.961)").s().p("AgfBDQgMgKAAgUIAAhGQAAgQAHgKQAGgKAKgDQAKgEAKAAQANAAAKAEQAJADAGAKQAGAJAAARIAABGQAAAUgMAKQgLAKgVAAQgTAAgMgKgAgIgrIAABWQAAAKAIAAQAJAAAAgKIAAhWQAAgKgJABQgIgBAAAKg");
	this.shape_5.setTransform(95.5,314.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,0,0,0.961)").s().p("AgVBHQgKgEgGgHQgGgIAAgKIAAgdIAiAAIAAAcQAAAEADAEQADACADAAQAEAAADgCQACgEAAgEIAAglQAAgFgCgDQgDgDgEAAQgCAAgDAEQgEADAAADIgiAAIAAhOIBWAAIAAAWIg1AAIgBAPIgBANIABAAQALgKAOAAQAOAAAIAIQAIAJAAASIAAAhQAAAQgGAJQgGAJgKAEQgKAFgMAAQgLAAgKgFg");
	this.shape_6.setTransform(85.8,314.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,0,0,0.957)").s().p("AgfBDQgMgKAAgUIAAhGQAAgQAHgKQAGgKAKgDQAKgEAKAAQANAAAKAEQAJADAGAKQAGAJAAARIAABGQAAAUgMAKQgLAKgVAAQgTAAgMgKgAgIgrIAABWQAAAKAIAAQAJAAAAgKIAAhWQAAgKgJABQgIgBAAAKg");
	this.shape_7.setTransform(95.5,314.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,0,0,0.957)").s().p("AADBKIAAgiIgxAAIAAgXIAphaIAoAAIAABaIAMAAIAAAXIgMAAIAAAigAgXARIAaAAIAAg8IAAAAg");
	this.shape_8.setTransform(85.8,314.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,0,0,0.957)").s().p("AgVBHQgKgEgGgHQgGgIAAgKIAAgdIAiAAIAAAcQAAAEADAEQADACADAAQAEAAADgCQACgEAAgEIAAglQAAgFgCgDQgDgDgEAAQgCAAgDAEQgEADAAADIgiAAIAAhOIBWAAIAAAWIg1AAIgBAPIgBANIABAAQALgKAOAAQAOAAAIAIQAIAJAAASIAAAhQAAAQgGAJQgGAJgKAEQgKAFgMAAQgLAAgKgFg");
	this.shape_9.setTransform(95.5,314.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,0,0,0.957)").s().p("AgqArIAAgaIAiAAIAAAZQAAALAIAAQAJAAAAgLIAAgTQAAgIgEgDQgEgCgIAAIgLAAIAAgXIANAAQAOAAAAgNIAAgRQAAgEgDgDQgCgCgEAAQgFAAgBADQgCAFAAAIIAAAQIgiAAIAAgVQAAgNAGgIQAHgIAKgDQAKgDAJAAQALAAAKADQAKADAGAIQAGAIAAALIAAAJQAAAQgFAGQgGAIgKABIAAACQALABAFAFQAFAGAAAOIAAAQQAAASgMAJQgMAJgTAAQgqAAAAgig");
	this.shape_10.setTransform(85.8,314.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,0,0,0.957)").s().p("AgrBMIAAgTQAAgQAHgNQAHgNAOgPQAOgPAFgIQAFgIAAgJQAAgLgJAAQgIAAAAALIAAAVIgjAAIAAgQQAAgRAHgJQAGgIAKgDQAKgDALABQALgBAKAEQAJADAHAJQAGAJAAAOQAAAMgFAKQgFAJgIAJIgRATQgIAIgEAJIgCADIgCADIgBAEIAAAEIA0AAIAAAWg");
	this.shape_11.setTransform(85.7,314.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,0,0,0.957)").s().p("AgEBKIAAhtIgZAAIAAgWQALAAAJgDQAJgEABgJIAdAAIAACTg");
	this.shape_12.setTransform(94.5,314.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,0,0,0.957)").s().p("AgEBKIAAhtIgYAAIAAgWQALAAAIgDQAJgEAAgJIAeAAIAACTg");
	this.shape_13.setTransform(84.9,314.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.953)").s().p("AgfBDQgMgKAAgUIAAhGQAAgQAHgKQAGgKAKgDQAKgEAKAAQANAAAKAEQAJADAGAKQAGAJAAARIAABGQAAAUgMAKQgLAKgVAAQgTAAgMgKgAgIgrIAABWQAAAKAIAAQAJAAAAgKIAAhWQAAgKgJABQgIgBAAAKg");
	this.shape_14.setTransform(100.3,314.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.953)").s().p("AgfBDQgMgKAAgUIAAhGQAAgQAHgKQAGgKAKgDQAKgEAKAAQANAAAKAEQAJADAGAKQAGAJAAARIAABGQAAAUgMAKQgLAKgVAAQgTAAgMgKgAgIgrIAABWQAAAKAIAAQAJAAAAgKIAAhWQAAgKgJABQgIgBAAAKg");
	this.shape_15.setTransform(90.6,314.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.953)").s().p("AgEBKIAAhtIgZAAIAAgWQALAAAJgDQAJgEAAgJIAeAAIAACTg");
	this.shape_16.setTransform(80,314.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape,p:{x:100.3}}]}).to({state:[{t:this.shape_3},{t:this.shape,p:{x:95.5}}]},2).to({state:[{t:this.shape_4},{t:this.shape,p:{x:95.5}}]},2).to({state:[{t:this.shape_6},{t:this.shape_5}]},2).to({state:[]},33).to({state:[{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_10},{t:this.shape_9}]},2).to({state:[{t:this.shape_11},{t:this.shape_7}]},2).to({state:[{t:this.shape_13},{t:this.shape_12}]},2).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},33).wait(1));

	// Layer 2
	this.instance = new lib.HP();
	this.instance.parent = this;
	this.instance.setTransform(21,301);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(80));

	// Layer 1
	this.instance_1 = new lib.Symbol12();
	this.instance_1.parent = this;
	this.instance_1.setTransform(363.1,203.1,1,1,0,0,0,538,302.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(33).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(33));

	// Layer 1
	this.instance_2 = new lib.Symbol10();
	this.instance_2.parent = this;
	this.instance_2.setTransform(88.1,161.5,0.58,0.58,0,0,0,88,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(33).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(33));

	// Layer 1
	this.instance_3 = new lib.Symbol8();
	this.instance_3.parent = this;
	this.instance_3.setTransform(343.5,193,1,1,0,0,0,343.5,193);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({y:183},0).wait(1).to({x:333.5,y:193},0).wait(1).to({x:343.5,y:203},0).wait(1).to({x:353.5,y:193},0).wait(1).to({x:343.5,y:183},0).wait(1).to({y:193},0).wait(33).to({x:340.5},0).wait(1).to({x:343.5},0).wait(1).to({y:183},0).wait(1).to({x:333.5,y:193},0).wait(1).to({x:343.5,y:203},0).wait(1).to({x:353.5,y:193},0).wait(1).to({x:343.5,y:183},0).wait(1).to({y:193},0).wait(33).to({x:340.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,0,759,414);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol33();
	this.instance.parent = this;
	this.instance.setTransform(476.6,52.3,1,1,0,0,0,47.8,18.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.instance_1 = new lib.ammo();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-77,274);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 1
	this.instance_2 = new lib.Symbol5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(229,168.7,1,1,0,0,0,229,168.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-182.4,-80.9,856.4,509), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_24 = function() {
		this.stop();
		this.parent.back.gotoAndStop(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(5).call(this.frame_24).wait(4));

	// Layer 2
	this.instance = new lib.Symbol4();
	this.instance.parent = this;
	this.instance.setTransform(33,43.7,1,1,0,0,0,229,168.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({_off:false},0).to({_off:true},1).wait(3));

	// Layer 1
	this.instance_1 = new lib.Symbol3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(176.5,117.5,1,1,0,0,0,176.5,117.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:127.5},9).to({y:117.5},10).wait(2).to({regX:176.4,regY:117.4,scaleX:1.8,scaleY:1.8,x:38.4,y:32.5},2).to({_off:true},1).wait(1).to({_off:false},0).to({regX:176.5,regY:117.5,scaleX:1,scaleY:1,x:176.5,y:117.5},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,353,235);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
		
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
		
		this.fon.x = - stage.mouseX / 5;
		this.fon.y = - stage.mouseY / 5;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// back.jpg
	this.instance = new lib.Symbol17();
	this.instance.parent = this;
	this.instance.setTransform(378.5,203,1,1,0,0,0,343.5,193);

	this.fon = new lib.Symbol9();
	this.fon.parent = this;
	this.fon.setTransform(-48,-14,1,1,0,0,0,-40,-16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.fon}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(32,10,759,414);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		
		
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		
		function fl_MouseOverHandler_5()
		    {
			    _this.stvol.gotoAndPlay(21);
				_this.text.gotoAndPlay(1);
		
		    }
		
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		
		
		      function fl_MouseOutHandler_2()
		    {
			    _this.stvol.gotoAndPlay(25);
				_this.back.gotoAndStop(0);
				_this.text.gotoAndPlay(5);
		
		
		    }
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 4
	this.text = new lib.Symbol19();
	this.text.parent = this;
	this.text.setTransform(173.1,-0.7,1,1,0,0,0,297.9,45);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// Layer 2
	this.stvol = new lib.Symbol2();
	this.stvol.parent = this;
	this.stvol.setTransform(465.5,230.5,1,1,0,0,0,176.5,117.5);

	this.timeline.addTween(cjs.Tween.get(this.stvol).wait(1));

	// Layer 1
	this.back = new lib.Symbol1();
	this.back.parent = this;
	this.back.setTransform(337,160,1,1,0,0,0,377,208);

	this.timeline.addTween(cjs.Tween.get(this.back).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(312,114.5,759,414);
// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/ammo.png?1485423181411", id:"ammo"},
		{src:"images/back.jpg?1485423181411", id:"back"},
		{src:"images/backzoom.jpg?1485423181411", id:"backzoom"},
		{src:"images/HP.png?1485423181411", id:"HP"},
		{src:"images/pricel.png?1485423181411", id:"pricel"},
		{src:"images/puha.png?1485423181411", id:"puha"},
		{src:"images/solder.png?1485423181411", id:"solder"},
		{src:"images/vspih.png?1485423181411", id:"vspih"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;