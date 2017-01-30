(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.fish_03 = function() {
	this.initialize(img.fish_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,161,96);


(lib.fish_06 = function() {
	this.initialize(img.fish_06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,57,63);


(lib.garpun = function() {
	this.initialize(img.garpun);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,512,512);


(lib.og_1_03 = function() {
	this.initialize(img.og_1_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,169);


(lib.og_1_0511 = function() {
	this.initialize(img.og_1_0511);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,97,175);


(lib.og_1_07 = function() {
	this.initialize(img.og_1_07);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,93,113);


(lib.og_1_10 = function() {
	this.initialize(img.og_1_10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,87,80);


(lib.og_1_13 = function() {
	this.initialize(img.og_1_13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,41,88);


(lib.og_1_17 = function() {
	this.initialize(img.og_1_17);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,71,80);


(lib.og_1_21 = function() {
	this.initialize(img.og_1_21);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,51,40);


(lib.og_1_24 = function() {
	this.initialize(img.og_1_24);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,75,105);


(lib.og_1_27 = function() {
	this.initialize(img.og_1_27);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,56,111);


(lib.og_1_33 = function() {
	this.initialize(img.og_1_33);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,79,83);


(lib.og_1_333 = function() {
	this.initialize(img.og_1_333);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,21,22);


(lib.palez3 = function() {
	this.initialize(img.palez3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,70,70);


(lib.qbg = function() {
	this.initialize(img.qbg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,395);


(lib.rot = function() {
	this.initialize(img.rot);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,17,20);// helper functions:

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


(lib.Символ79 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.palez3();
	this.instance.parent = this;
	this.instance.setTransform(-15.4,-15.4,0.441,0.441);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ79, new cjs.Rectangle(-15.4,-15.4,30.9,30.9), null);


(lib.Символ77 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990000").s().p("AiXBVIgDgbIhCAAIgCAbIgfAAIAAg4QAEAAAEgDQADgCACgDQACgFACgMQAGgeACg4IBgAAIAABvIALAAIAAA4gAjRAdIArAAIAAhRIgfAAQgGBCgGAPgAKHA6IAAiMIAiAAIAAAzIAZAAQAKAAAJADQAJADAHAGQAFAGAEAJQAEAIgBAKQAAAKgDAIQgEAIgGAGQgGAFgKAEQgIADgKAAgAKpAeIAZAAQAHAAAEgGQADgEAAgHQAAgIgDgEQgEgEgHAAIgZAAgAG8A6IAAiMIAgAAIAABvIAoAAIAAhvIAhAAIAABvIAnAAIAAhvIAhAAIAACMgAF/A6IAAiMIAiAAIAACMgAENA6IAAiMIAhAAIAAAzIAYAAQAKAAAJADQAJADAGAGQAGAGAEAJQADAIAAAKQAAAKgDAIQgEAIgHAGQgGAFgIAEQgJADgKAAgAEuAeIAYAAQAHAAAEgGQADgEAAgHQAAgIgDgEQgEgEgHAAIgYAAgADTA6IAAg+QAAgNADgdIgBAAIgjBoIgcAAIgkhoIAAAAQADAdAAANIAAA+IgeAAIAAiMIAvAAIAgBdIAghdIAtAAIAACMgAgYA6IAAhAQAAgNACgKIgBAAIgJAUIgkBDIggAAIAAiMIAgAAIAABCIgCAWIABAAIAJgVIAkhDIAeAAIAACMgAk2A6QgMgBgKgDQgJgDgGgGQgHgGgCgIQgDgHgBgJIAAg3QABgJADgHQADgHAFgGQAHgGAIgDQALgEAMAAIAsAAIAAAeIgsAAQgIgBgEAFQgEAFgBAHIAAAKIA1AAIAAAcIg1AAIAAALQABAGAEAFQAFAFAHAAIAsAAIAAAdgAnhA6IAAiMIA1AAQALAAAIADQAJACAGAFQAHAGADAHQADAIAAAKQAAAKgEAHQgFAHgGAEIAIAEQADADADAEIAEAIQACAGAAAFQgBAKgEAIQgDAHgHAGQgGAEgJADQgJACgLABgAnAAeIAYAAQAIgBAEgEQADgDAAgIQgBgGgDgEQgEgDgIAAIgXAAgAnAgaIAUAAQAGAAAFgEQAEgDAAgHQAAgGgEgEQgEgDgIAAIgTAAgAoUA6IgFgYIgxAAIgFAYIgiAAIAdh3QACgHADgEQACgEAFgCQAEgDAGgCIAMgBIANABQAGACAEADQAEACADAEQADAEACAHIAdB3gAogAFIgNg6QgBgEgEAAQgDAAgBAEIgOA6IAkAAgAqkA6IAAg6IgrAAIAAA6IghAAIAAiMIAhAAIAAA2IArAAIAAg2IAiAAIAACMg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ77, new cjs.Rectangle(-75.3,-8.4,150.7,16.9), null);


(lib.Символ75 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fish_03();
	this.instance.parent = this;
	this.instance.setTransform(-77,-38,0.789,0.789);

	this.instance_1 = new lib.fish_06();
	this.instance_1.parent = this;
	this.instance_1.setTransform(32,-20,0.789,0.789);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ75, new cjs.Rectangle(-77,-38,154,75.8), null);


(lib.Символ71 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(8,1,1).p("AAAoVIAAFuADcAAIE6AAAAACsIAAFqAoVAAIFGAA");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF0000").ss(11.1,1,1).p("AF4AAQAACchuBuQhuBuicAAQibAAhuhuQhuhuAAicQAAibBuhuQBuhuCbAAQCcAABuBuQBuBuAACbg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ71, new cjs.Rectangle(-57.3,-57.3,114.7,114.7), null);


(lib.Символ69 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.garpun();
	this.instance.parent = this;
	this.instance.setTransform(-56,-54,0.281,0.281);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ69, new cjs.Rectangle(-56,-54,144,144), null);


(lib.Символ66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ArVCwIAAhIQAMABAKgEQAIgEAFgJQAHgMACgaIAHhCIAMibIDkAAIAAFYIhRAAIAAkQIhMAAIgGBTQgIBQgEAVQgGAbgIARQgIASgNAKQgMALgUAEQgQAEgWAAIgLAAgAkICtQgSgDgQgHQgPgGgNgKQgLgJgIgMQgJgLgGgOQgGgOgEgQQgFgWgCgwIABgRQABgWAFgfQAEgQAGgNQAGgPAJgLQAIgMANgJQALgKAPgGQAQgGASgEQATgEAXAAQAWAAAUAEQASAEAPAGQAPAGAMAKQALAJAKAMQAIALAGAPQAGANAEAQQAFAfABAWIABARQgCAwgFAWQgDAQgGAOQgGAOgJALQgIAMgNAJQgLAKgPAGQgQAHgSADQgUADgWAAQgXAAgTgDgAkHheQgNAIgIAQQgHANgBAVIgDAlQABAzAJAUQAJAQANAIQAQAIAZAAQAZAAAQgIQANgIAIgQQAJgUACgzIgCglQgDgVgGgNQgIgQgPgIQgOgJgZAAQgZAAgQAJgAJ3CtIAAhNIBRAAIAABNgAHiCtIAAigQAAgPABgOQABgNADgMIgDAAIgKAZIgMAYIhaClIhMAAIAAlYIBMAAIAACgQAAAYgEAhIACAAQALgeAMgYIBZijIBNAAIAAFYgAgLCtIAAlYICAAAQAaAAAVAGQAWAHAPAMQAQAMAJATQAIATgBAZQAAAXgLATQgFAHgGAGQgHAHgIAGQAKAEAKAHQAIAGAGAKQAHALADANQAEAMAAAPQAAAXgKAUQgIASgSANQgPAMgWAGQgWAGgaAAgABDBoIA9AAQATAAAIgLQAIgIAAgTQAAgQgJgJQgKgIgUAAIg5AAgABDgiIAxAAQARAAALgJQAKgIAAgQQAAgSgKgIQgKgIgTAAIgwAAgAKDBAIgajrIBtAAIgaDrg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ66, new cjs.Rectangle(-72.5,-17.5,145.1,35.2), null);


(lib.Символ65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("ArOBgIAAhHQAMABAKgFQAIgEAEgIQAIgMACgZIAHhDIBMAAQgHBQgFAUQgFAbgIARQgIATgNAKQgMALgUAEQgQADgXAAIgKAAgAkBBeQgSgEgQgGQgPgGgNgKQgLgKgIgLQgJgLgGgPQgGgOgEgPQgFgWgDgwIABgRIBTAAIgBARQABA0AJAUQAIAPAOAHQAQAJAYAAQAaAAAQgJQANgHAHgPQAKgUABg0IAAgRIBRAAIAAARQgCAwgEAWQgDAPgGAOQgHAPgIALQgIALgNAKQgLAKgPAGQgQAGgSAEQgUACgXAAQgWAAgTgCgAJ9BeIAAhOIBSAAIAABOgAHpBeIAAifIABgeIBMAAIAAC9gAEvBeIAAi9IBMAAIAAAFQAAAZgEAhIABAAQALgfANgZIAEgHIBMAAIgLAZIhaCkgAgEBeIAAi9IDeAAQgHAHgIAFQAKAFAKAIQAIAGAGAKQAHALADAMQAEAMAAAPQAAAXgKATQgJATgRAMQgPAMgWAHQgWAGgaAAgABJAZIA+AAQASAAAJgLQAHgJAAgRQAAgQgIgJQgKgJgUAAIg6AAgAn8BeIAAi9IBRAAIAAC9gAKKgPIgJhQIBLAAIgJBQg");
	this.shape.setTransform(-0.6,7.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990000").s().p("AJhBPIgRiZIBsAAIgRCZgAHKBPIADgZIgCAAIgLAZIhMAAIBUiZIBOAAIAACZgAEOBPIAAiZIBNAAIAACZgAglBPIAAiZICBAAQAZgBAVAHQAXAGAOAMQAQAMAJATQAJATgCAYQAAAYgLASQgEAHgGAGgAApA9IAxAAQASAAALgJQAKgIAAgQQAAgRgKgJQgKgHgUABIgwAAgAivBPIgBgUQgEgVgGgNQgHgPgPgJQgPgIgZAAQgYAAgQAIQgOAJgHAPQgIANgBAVIgBAUIhTAAQACgWAFgfQADgQAGgMQAHgPAIgLQAJgMAMgIQALgLAPgGQAQgGATgDQASgEAXgBQAXABATAEQATADAPAGQAOAGANALQALAIAKAMQAHALAGAPQAGAMAEAQQAFAfACAWgAodBPIAAhSIhLAAIgHBSIhMAAQAFhBAGhYIDkAAIAACZg");
	this.shape_1.setTransform(2.6,-9.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ65, new cjs.Rectangle(-72.5,-17.6,145.1,35.2), null);


(lib.Символ63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fish_06();
	this.instance.parent = this;
	this.instance.setTransform(28.6,-31.4,1,1,84.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ63, new cjs.Rectangle(-34.1,-31.4,68.2,62.8), null);


(lib.Символ62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fish_03();
	this.instance.parent = this;
	this.instance.setTransform(21.6,-41.5,0.499,0.499,86.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ62, new cjs.Rectangle(-26.2,-41.5,52.5,83), null);


(lib.Символ58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fish_06();
	this.instance.parent = this;
	this.instance.setTransform(-36.4,-40.3,1.279,1.279);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ58, new cjs.Rectangle(-36.4,-40.3,72.9,80.6), null);


(lib.Символ56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fish_03();
	this.instance.parent = this;
	this.instance.setTransform(-80.5,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ56, new cjs.Rectangle(-80.5,-48,161,96), null);


(lib.Символ54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ADpBGIAAgdIAWAAQAIAAAEgEQADgEACgIIgFAAQgHAAgFgCQgFgBgEgDQgEgDgDgFQgDgEgCgGIgXhGIAjAAIARA8IAAACIACADIABAAQACACAFgBIAGAAIAQhCIAkAAIgbBhQgDAMgEAHQgEAIgFAFQgGAFgIADQgIACgLAAgACpBGIgKgkQgDgLgFgEQgFgGgHABIgLAAIAAA4IghAAIAAiLIAhAAIAAA4IALAAIAcg4IAmAAIgkA/IADACQAJAFAIAVIASAwgAgeBGIAAiLIBfAAIAAAdIg/AAIAAAYIAYAAQALAAAJADIAMAGIADACIAAABQAGAEAEAIQADAJAAAJQAAAKgEAJQgDAIgHAFQgGAGgJADQgIADgLAAgAACApIAYAAQAIAAAEgEQADgEgBgIQAAgHgDgDQgDgEgIABIgYAAgAhaBGIAAiLIAhAAIAACLgAjMBGIAAiLIAhAAIAAAyIAXAAQAKAAAJAEQAIACAGAGIABABIACACQAFAEADAHQAEAJgBAKQAAAKgDAIQgEAJgGAFQgHAGgIADQgJADgKAAgAirAqIAXAAQAHAAAEgFQADgEAAgIQAAgHgDgFQgEgFgHAAIgXAAgAlKBGIAAiLIA6AAQALAAAJADQAJAEAGAGQAHAHADAJQAEAIAAAKQAAAIgCAHIgBADQgCAHgFAHIgIAGQgEAEgGACQgJADgMAAIgYAAIAAAtgAkogDIAYAAQAGAAADgBIADgDIAAAAQADgFAAgKIAAgIQgBgDgDgEQgEgDgHAAIgYAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ54, new cjs.Rectangle(-33,-7,66.2,14), null);


(lib.Символ53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC01").s().p("ADxAnIAAgdIAWAAQAIAAAEgEQAEgDABgHIgFAAQgGAAgFgCQgFgCgEgDQgEgDgDgFQgDgEgCgGIgDgJIAgAAIACADIAAAAQACACAFAAIAGAAIACgFIAhAAIgKAkQgDALgDAHQgEAIgFAFQgGAFgIADQgIACgMAAgACyAnIgKgkQgDgJgFgFQgFgFgHAAIgLAAIAAA3IgiAAIAAhNIBLAAIgBABIADACQAJAGAJAVIARAvgAgWAnIAAhNIBYAAIADACIABABQAGAGADAHQAEAJgBAKQAAAJgEAIQgDAIgGAGQgHAFgIADQgJADgKAAgAAKAKIAZAAQAIAAADgEQADgEAAgGQAAgIgDgDQgDgDgIAAIgZAAgAhSAnIAAhNIAhAAIAABNgAjEAnIAAhNIBaAAIABABIACACQAFAFADAHQADAJAAAKQAAAJgEAJQgDAIgHAFQgGAGgJADQgIADgLAAgAijALIAXAAQAIAAADgFQAEgEAAgHQAAgHgEgFQgDgEgIAAIgXAAgAlBAnIAAhNIAhAAIAAAFIAZAAQAFAAADgCIADgDIABAAIAjAAIgBADQgDAIgFAHIgIAHQgEADgFACQgKAEgLAAIgZAAIAAArg");
	this.shape.setTransform(-0.8,3.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9901").s().p("AEYAfIAPg9IAkAAIgRA9gADnAfIgUg9IAjAAIARA7IAAACgABfAfIAAg9IAhAAIAAA3IALAAIAcg3IAmAAIgkA9gAgeAfIAAg9IBfAAIAAAdIg/AAIAAAXIAYAAQALAAAJADQAGACAGAEgAhaAfIAAg9IAhAAIAAA9gAjMAfIAAg9IAhAAIAAAxIAXAAQAKAAAJAEQAIACAGAGgAkEAfQADgEAAgKIAAgIQgBgEgDgDQgEgDgHAAIgYAAIAAAgIgiAAIAAg9IA6AAQALAAAJAEQAJADAGAGQAHAHADAJQAEAIAAAKQAAAHgCAHg");
	this.shape_1.setTransform(0,-3.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ53, new cjs.Rectangle(-33,-7,66.2,14), null);


(lib.Символ52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AkEBHIAAgdQAFABAEgCQADgCACgDQADgFABgLIADgWIAAgEIAFg/IBcAAIAACLIghAAIAAhuIgeAAIgDAiIAAAEIgFAkQgCALgDAHQgEAIgFAEQgFAEgIACQgGABgJAAIgFAAgAhJBGIgOgEQgGgCgFgEIgIgJQgDgEgDgGIgEgMQgCgJgBgUIAAgCIABgEIACgVIAEgMQADgGADgFQAEgFAFgDQAEgEAGgDIAOgEQAIgBAJAAQAJAAAIABIAOAEQAGADAFAEIAIAIIAGALIADAMIADAVIAAAEIAAACQgBAUgCAJQgBAGgCAGQgCAGgEAEIgIAJQgFAEgGACIgOAEIgRABIgRgBgAhIgmQgGAEgDAGQgDAFAAAJIgBAOQAAAVAEAIQADAHAGADQAGADAKAAQAKAAAHgDQAFgDADgHQAEgIABgVIgBgOQgBgJgDgFQgDgGgGgEQgGgDgKAAQgKAAgGADgADlBGIAAhBIABgHIAAgEIABgKIgBAAIgEAKIgCAEIgDAFIgkBDIgfAAIAAiLIAfAAIAABBIAAACIgCAVIABAAIAJgVIAAgBIAkhCIAgAAIAACLgAAdBGIAAiLIA0AAQALAAAIADQAJACAGAFQAHAFADAIQAEAIgBAKQAAAJgEAIIgEAFIgEAEIgDABIAIAEQAEADACAEIAEAJQACAFAAAGQAAAKgEAIQgEAHgHAFQgGAFgJADQgJACgKAAgAA9AqIAZAAQAHAAAEgEQADgEAAgHQAAgHgEgDQgEgEgIAAIgXAAgAA9gNIAUAAQAHAAAEgEQAEgDAAgHQAAgHgEgDQgEgDgIAAIgTAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ52, new cjs.Rectangle(-26.1,-7.1,52.2,14.3), null);


(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AkEAlIAAgdQAFABAEgCQADgCACgDQADgEABgLIACgXIAfAAIgEAkQgCALgDAHQgEAIgFAEQgFAEgIACQgGABgJAAIgFAAgAhJAkIgOgEQgGgCgFgEIgIgJQgDgEgDgGIgEgLQgCgJgBgUIAAgDIAiAAIAAADQAAAVAEAIQADAGAGADQAGADAKAAQAKAAAHgDQAFgDADgGQAEgIABgVIAAgDIAgAAIAAADQgBAUgCAJQgBAFgCAGQgCAGgEAEIgIAJQgFAEgGACIgOAEIgRABIgRgBgADlAkIAAhAIAAgIIAgAAIAABIgACaAkIAAhIIAfAAIgCAWIABAAIAJgWIAfAAIgDAGIgkBCgAAdAkIAAhIIBXAAIgDABIAIAFQAEADACAEIAEAJQACAFAAAGQAAAJgEAIQgEAHgHAFQgGAFgJADQgJACgKAAgAA9AIIAZAAQAHAAAEgEQADgEAAgGQAAgHgEgDQgEgEgIAAIgXAAgAivAkIAAhIIAhAAIAABIg");
	this.shape.setTransform(0,3.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("ADbAiIABgEIABgKIgBAAIgEAKIgCAEIgfAAIAAAAIAkhCIAgAAIAABCgACQAiIAAhCIAfAAIAABAIAAACgAATAiIAAhCIA0AAQALABAIACQAJACAGAFQAHAGADAHQAEAIgBAJQAAAKgEAHIgFAFIgEAEgAAzAXIAUAAQAHAAAEgEQAEgDAAgGQAAgIgEgCQgEgDgIAAIgTAAgAgkAiIgBgMQgBgJgDgEQgDgHgGgCQgGgEgKAAQgKAAgGAEQgGACgDAHQgDAEAAAJIgBAMIgiAAIAAgEIADgVIAEgLQADgGADgFQAEgFAFgDQAEgEAGgCIAOgFQAIgBAJAAQAJAAAIABIAOAFQAGACAFAEIAIAIIAGALIAEALIACAVIABAEgAi5AiIAAglIgeAAIgDAhIgBAEIgfAAIABgEIAFg+IBcAAIAABCg");
	this.shape_1.setTransform(1,-3.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ51, new cjs.Rectangle(-26.1,-7.1,52.2,14.3), null);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(4,1,1).p("AAAjwQA5AAAvAXQAkARAeAeQBGBGAABkQAAAAAAAAQAABjhGBGQgeAegkARQgvAXg5AAIAAhmAAAjwIAAh3AAAiGIAAhqAAAFoIAAh5QgBAAgCAAQg7gBgxgaQgfgQgbgbQhGhGAAhjQAAAAAAAAQAAhkBGhGQAbgbAfgQQAxgaA7gBQACAAABAAACMAAIBkAAIB4AAAlnAAIB4AAIBmAA");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ46, new cjs.Rectangle(-38,-38,76,76), null);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fish_03();
	this.instance.parent = this;
	this.instance.setTransform(-80.5,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ40, new cjs.Rectangle(-80.5,-48,161,96), null);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fish_06();
	this.instance.parent = this;
	this.instance.setTransform(-28.5,-31.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ38, new cjs.Rectangle(-28.5,-31.5,57,63), null);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A7ECEA").s().p("Eg7/AHfIAAt/UAlxAFLAnOgGJQI8AuHvANQN0AhMhgeIAAN/g");
	this.shape.setTransform(0,-3.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A7ECEA").s().p("Eg7/AHbIAAt/UAl4AEiAnJgFYQI3AoHzAMQNoAcMhgaIALACIAANzIgBAKg");
	this.shape_1.setTransform(0,-2.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A7ECEA").s().p("Eg7+AHXIgBgBIAAt+UAl9AD5AnEgEnQIyAjH5AJQNjAYMngWIAJADIAAN0IgCAIg");
	this.shape_2.setTransform(0,-2.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A7ECEA").s().p("Eg7+AHTIgBAAIAAt/UAmEADPAm+gD1QIuAdH9AIQNfAUMrgTIAIAFIAANzIgEAHg");
	this.shape_3.setTransform(0,-1.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A7ECEA").s().p("Eg7+AHPIgBgBIAAt+UAmLACmAm4gDEQIpAXIDAGQNZAQMxgPIAGAGIAAN0IgFAFg");
	this.shape_4.setTransform(0,-1.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A7ECEA").s().p("Eg7+AHMIgBgBIAAt/UAmRAB9AmzgCTQIlARIHAEQNUANM3gMIAEAIIAANzIgHAFg");
	this.shape_5.setTransform(0,-1.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A7ECEA").s().p("Eg7+AHIIgBgCIAAt9UAmXABTAmtgBjQIgAMIOADQNPAIM7gHIADAJIAANzIgIADg");
	this.shape_6.setTransform(0,-0.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A7ECEA").s().p("Eg7+AHEIgBgCIAAt9UAmdAApAmogAxQIcAGISABQNKAENBgDIABAKIAANzIgKACg");
	this.shape_7.setTransform(0,-0.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A7ECEA").s().p("Eg7/AHAIAAt/MB3/AAAIAAN/g");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A7ECEA").s().p("Eg7/gG+UAmhAASAmkgAUIQuACQNIACNDgCIABAMIAANzMh3/AABg");
	this.shape_9.setTransform(0,-0.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#A7ECEA").s().p("Eg7/AHDIAAt/UAmeAAjAmngApQIbAFITABQNKADNBgDIABALIAANzIgKABg");
	this.shape_10.setTransform(0,-0.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#A7ECEA").s().p("Eg7+AHFIgBgCIAAt9UAmcAA0AmpgA+QIdAHIRACQNLAFM/gEIACAKIAANzIgKACg");
	this.shape_11.setTransform(0,-0.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#A7ECEA").s().p("Eg7+AHHIgBgCIAAt+UAmZABGAmrgBSQIfAJIPADQNNAHM+gHIACAKIAANzIgJADg");
	this.shape_12.setTransform(0,-0.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#A7ECEA").s().p("Eg7+AHIIgBgCIAAt9UAmWABXAmugBnQIhAMIMAEQNQAIM7gIIADAJIAANzIgIADg");
	this.shape_13.setTransform(0,-0.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#A7ECEA").s().p("Eg7+AHKIgBgCIAAt9UAmUABoAmwgB8QIjAPIKAEQNSAKM4gJIAEAIIAANzIgIAEg");
	this.shape_14.setTransform(0,-1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#A7ECEA").s().p("Eg7+AHLIgBgBIAAt+UAmRAB6AmzgCQQIkARIIAEQNUAMM3gLIAEAIIAANzIgHAEg");
	this.shape_15.setTransform(0,-1.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#A7ECEA").s().p("Eg7+AHNIgBgBIAAt+UAmOACMAm2gCmQIlAUIHAFQNWANM0gMIAFAHIAAN0IgHAEg");
	this.shape_16.setTransform(0,-1.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#A7ECEA").s().p("Eg7+AHPIgBgBIAAt/UAmLACeAm4gC7QIoAWIEAGQNYAPMzgOIAFAHIAANzIgGAGg");
	this.shape_17.setTransform(0,-1.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#A7ECEA").s().p("Eg7+AHQIgBgBIAAt+UAmJACvAm6gDPQIqAYIBAHQNbARMvgQIAHAGIAANzIgFAGg");
	this.shape_18.setTransform(0,-1.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#A7ECEA").s().p("Eg7+AHSIgBgBIAAt+UAmHADAAm7gDkQIsAbIAAHQNdATMtgRIAHAFIAANzIgEAHg");
	this.shape_19.setTransform(0,-1.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#A7ECEA").s().p("Eg7+AHUIgBgBIAAt/UAmEADSAm+gD4QIuAcH9AJQNfAUMrgTIAIAFIAANzIgEAIg");
	this.shape_20.setTransform(0,-1.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#A7ECEA").s().p("Eg7+AHVIgBgBIAAt+UAmBADjAnBgENQIvAfH8AKQNhAVMpgUIAIAEIAANzIgDAIg");
	this.shape_21.setTransform(0,-2.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#A7ECEA").s().p("Eg7+AHXIgBgBIAAt+UAl+AD0AnDgEiQIyAiH5AKQNjAXMngVIAJADIAAN0IgDAIg");
	this.shape_22.setTransform(0,-2.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#A7ECEA").s().p("Eg7+AHYIgBAAIAAt/UAl8AEGAnFgE2QI0AkH2AKQNmAaMkgYIAKADIAAN0IgCAIg");
	this.shape_23.setTransform(0,-2.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#A7ECEA").s().p("Eg7+AHaIgBgBIAAt+UAl5AEXAnIgFLQI1AnH1ALQNnAbMjgZIAKACIAANzIgBAKg");
	this.shape_24.setTransform(0,-2.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#A7ECEA").s().p("Eg7/AHcIAAuAUAl2AEpAnKgFgQI4ApHzAMQNpAdMggbIALACIAAN0IgBAKg");
	this.shape_25.setTransform(0,-2.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#A7ECEA").s().p("Eg7/AHdIAAt/UAl0AE6AnMgF0QI6AsHwAMQNsAeMegcIALABIgBN+g");
	this.shape_26.setTransform(0,-2.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#A7ECEA").s().p("Eg7/AHbIAAt/UAlnAEzAnWgFpQI+AzHvAAQN4AXMdgUIAAN/g");
	this.shape_27.setTransform(0,-2.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#A7ECEA").s().p("Eg7/AHXIAAt/UAlcAEaAnfgFIQJAA4HvgNQN8AOMZgLIAAN/g");
	this.shape_28.setTransform(0,-2.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#A7ECEA").s().p("Eg7/AHTIAAt/UAlRAEBAnngEnQJDA9HvgaQOAAEMVgBIAAN/g");
	this.shape_29.setTransform(0,-1.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#A7ECEA").s().p("Eg7/AHPIAAt/UAlGADoAnwgEGQJFBCHvgnQOEgFMRAIIAAN/g");
	this.shape_30.setTransform(0,-1.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#A7ECEA").s().p("Eg7/AHLIAAt/UAk7ADQAn4gDmQJIBHHvg0QOIgOMNARIAAN/g");
	this.shape_31.setTransform(0,-1.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#A7ECEA").s().p("Eg7/AHHIAAt/UAkxAC3AoAgDFQJKBMHvhBQOMgYMJAbIAAN/g");
	this.shape_32.setTransform(0,-0.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#A7ECEA").s().p("Eg7/AHJIAAt/UAkmACfAoJgCkQJMBQHvhNQOQgiMFAkIAAN/g");
	this.shape_33.setTransform(0,-0.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#A7ECEA").s().p("Eg7/AHMIAAt/UAkcACFAoQgCDQJPBWHvhbQOUgrMBAuIAAN/g");
	this.shape_34.setTransform(0,-1.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#A7ECEA").s().p("Eg7/AHOIAAt/UAkQABtAoagBiQJRBaHvhnQOYg1L9A3IAAN/g");
	this.shape_35.setTransform(0,-1.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#A7ECEA").s().p("Eg7/AHQIAAt/UAkGABUAohgBBQJUBfHvh0QOcg+L5BAIAAN/g");
	this.shape_36.setTransform(0,-1.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#A7ECEA").s().p("Eg7/AHTIAAt/UAj8AA7AoogAhQJXBlHviCQOghHL1BKIAAN/g");
	this.shape_37.setTransform(0,-1.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#A7ECEA").s().p("Eg7/AHVIAAt/UAjxAAjAoxAAAQJZBpHviOQOkhRLxBTIAAN/g");
	this.shape_38.setTransform(0,-2.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#A7ECEA").s().p("Eg7/AHXIAAt/UAjmAAKAo6AAhQJbBuHvibQOnhaLuBcIAAN/g");
	this.shape_39.setTransform(0,-2.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#A7ECEA").s().p("Eg7/AHaIAAt/UAjbgAPApDABBQJdBzHvioQOrhjLqBmIAAN/g");
	this.shape_40.setTransform(0,-2.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#A7ECEA").s().p("Eg7/AHcIAAt/UAjQgAnApLABiQJgB4Hvi1QOwhtLlBvIAAN/g");
	this.shape_41.setTransform(0,-2.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#A7ECEA").s().p("Eg7/AHfIAAt/UAjGgBBApSACDQJjB9HvjCQOzh2LiB5IAAN/g");
	this.shape_42.setTransform(0,-3.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#A7ECEA").s().p("Eg7/AHhIAAt/UAi7gBZApbACjQJlCCHvjPQO3iALeCDIAAN/g");
	this.shape_43.setTransform(0,-3.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#A7ECEA").s().p("Eg7/AHjIAAt/UAixgByApjADFQJnCHHvjcQO8iKLZCMIAAN/g");
	this.shape_44.setTransform(0,-3.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#A7ECEA").s().p("Eg7/AHmIAAt/UAimgCLAprADlQJqCMHvjpQO/iTLWCWIAAN/g");
	this.shape_45.setTransform(0,-3.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#A7ECEA").s().p("Eg7/AHoIAAt/UAibgCkAp0AEGQJsCRHvj2QPDicLSCfIAAN/g");
	this.shape_46.setTransform(0,-4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#A7ECEA").s().p("Eg7/AHqIAAt/UAiRgC8Ap8AEnQJuCVHvkCQPHimLOCoIAAN/g");
	this.shape_47.setTransform(0,-4.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#A7ECEA").s().p("Eg7/AHtIAAt/UAiFgDVAqFAFHQJxCbHvkQQPMivLJCyIAAN/g");
	this.shape_48.setTransform(0,-4.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#A7ECEA").s().p("Eg7/AHvIAAt/UAh7gDtAqMAFoQJ0CfHvkcQPPi5LGC7IAAN/g");
	this.shape_49.setTransform(0,-4.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#A7ECEA").s().p("Eg7/AHrIAAt/UAiLgDHAqAAE1QJwCYHvkIQPKiqLLCsIAAN/g");
	this.shape_50.setTransform(0,-4.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#A7ECEA").s().p("Eg7/AHoIAAt/UAicgCiApzAEEQJsCQHvj1QPDibLSCeIAAN/g");
	this.shape_51.setTransform(0,-4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#A7ECEA").s().p("Eg7/AHkIAAt/UAisgB7ApmADRQJpCJHvjhQO9iNLYCPIAAN/g");
	this.shape_52.setTransform(0,-3.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#A7ECEA").s().p("Eg7/AHhIAAt/UAi9gBWApaACfQJkCBHvjNQO3h+LeCBIAAN/g");
	this.shape_53.setTransform(0,-3.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#A7ECEA").s().p("Eg7/AHdIAAt/UAjNgAwApNABtQJhB6Hvi6QOxhwLkBzIAAN/g");
	this.shape_54.setTransform(0,-2.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#A7ECEA").s().p("Eg7/AHZIAAt/UAjdgAKApBAA7QJdByHvilQOrhiLqBkIAAN/g");
	this.shape_55.setTransform(0,-2.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#A7ECEA").s().p("Eg7/AHWIAAt/UAjuAAcAozAAIQJaBrHviSQOlhTLwBWIAAN/g");
	this.shape_56.setTransform(0,-2.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#A7ECEA").s().p("Eg7/AHSIAAt/UAj+ABCAoogApQJVBjHvh+QOehFL3BHIAAN/g");
	this.shape_57.setTransform(0,-1.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#A7ECEA").s().p("Eg7/AHPIAAt/UAkPABoAoagBcQJSBbHvhqQOYg2L9A5IAAN/g");
	this.shape_58.setTransform(0,-1.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#A7ECEA").s().p("Eg7/AHLIAAt/UAkfACOAoOgCOQJOBTHvhWQOTgoMCArIAAN/g");
	this.shape_59.setTransform(0,-1.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#A7ECEA").s().p("Eg7/AHHIAAt/UAkwAC0AoBgDAQJKBMHvhCQOMgaMJAcIAAN/g");
	this.shape_60.setTransform(0,-0.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#A7ECEA").s().p("Eg7/AHMIAAt/UAlAADaAn0gDyQJHBEHvguQOHgLMOANIAAN/g");
	this.shape_61.setTransform(0,-1.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#A7ECEA").s().p("Eg7/AHTIAAuAUAlQAEAAnogElQJDA+HvgbQOAAEMVgCIAAOAg");
	this.shape_62.setTransform(0,-1.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#A7ECEA").s().p("Eg7/AHZIAAuAUAlhAEmAnbgFWQI/A1HvgHQN6ASMbgQIAAOAg");
	this.shape_63.setTransform(0,-2.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#A7ECEA").s().p("Eg7/AHgIAAt/UAk1AFIAmVgGIQJYAkH/AiQORArNNgxIAAN/g");
	this.shape_64.setTransform(0,-3.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#A7ECEA").s().p("Eg7/AHiIAAt/UAj6AFEAlagGIQJ2AbINA2QOvA3N5hEIAAN/g");
	this.shape_65.setTransform(0,-3.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#A7ECEA").s().p("Eg7/AHkIAAuAUAi/AFAAkggGHQKRARIeBMQPMBCOlhYIAAOAg");
	this.shape_66.setTransform(0,-3.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#A7ECEA").s().p("Eg7/AHlIAAt/UAiEAE8AjlgGGQKvAGItBhQPpBOPRhrIAAN/g");
	this.shape_67.setTransform(0,-3.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#A7ECEA").s().p("Eg7/AHnIAAt/UAhIAE3AirgGFQLMgDI8B1QQIBZP8h9IAAN/g");
	this.shape_68.setTransform(0,-3.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#A7ECEA").s().p("Eg7/AHpIAAt/UAgMAE0AhygGFQLpgNJLCKQQlBlQoiRIAAN/g");
	this.shape_69.setTransform(0,-4.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#A7ECEA").s().p("Eg7/AHrIAAt/UAfRAEwAg3gGEQMFgXJdCfQRBBwRUikIAAN/g");
	this.shape_70.setTransform(0,-4.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#A7ECEA").s().p("Eg7/AHuIAAt/QeWEsf9mDQMighJsC0QRdB7SBi3IAAN/g");
	this.shape_71.setTransform(0,-4.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#A7ECEA").s().p("Eg7/AHxIAAt/QdbEofDmDQM+gqJ7DIQR7CHStjKIAAN/g");
	this.shape_72.setTransform(0,-4.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#A7ECEA").s().p("Eg7/AH0IAAt/QcfEkeKmCQNbg0KKDdQSYCSTZjdIAAN/g");
	this.shape_73.setTransform(0,-5.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#A7ECEA").s().p("Eg7/AH3IAAt/QbjEgdRmBQN3g+KaDyQS2CdUEjwIAAN/g");
	this.shape_74.setTransform(0,-5.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#A7ECEA").s().p("Eg7/AH6IAAt/QaoEccWmAQOUhJKpEHQTUCpUwkDIAAN/g");
	this.shape_75.setTransform(0,-5.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#A7ECEA").s().p("Eg7/AH9IAAt/QZsEYbcmAQOxhSK5EcQTxC0VckWIAAN/g");
	this.shape_76.setTransform(0,-6.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#A7ECEA").s().p("Eg7/AIAIAAt/QYxEUail/QPNhcLJExQUOC/WIkpIAAN/g");
	this.shape_77.setTransform(0,-6.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#A7ECEA").s().p("Eg7/AIDIAAt/QX2EQZnl+QPqhlLZFFQUrDLW0k9IAAN/g");
	this.shape_78.setTransform(0,-6.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#A7ECEA").s().p("Eg7/AIGIAAt/QW6EMYtl9QQIhvLoFaQVIDWXglQIAAN/g");
	this.shape_79.setTransform(0,-7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#A7ECEA").s().p("Eg7/AIJIAAt/QV/EIXzl8QQkh5L4FvQVlDhYMljIAAN/g");
	this.shape_80.setTransform(0,-7.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#A7ECEA").s().p("Eg7/AIMIAAt/QVEEFW4l8QRCiDMHGDQWCDsY4l1IAAN/g");
	this.shape_81.setTransform(0,-7.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#A7ECEA").s().p("Eg7/AIPIAAt/QUIEBV/l7QRfiNMVGYQWgD3ZkmIIAAN/g");
	this.shape_82.setTransform(0,-7.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#A7ECEA").s().p("Eg7/AITIAAt/QTMD8VFl6QR8iXMlGtQW9EDaQmbIAAN/g");
	this.shape_83.setTransform(0,-8.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#A7ECEA").s().p("Eg7/AIWIAAt/QSSD4UJl5QSZihM1HCQXaEOa8muIAAN/g");
	this.shape_84.setTransform(0,-8.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#A7ECEA").s().p("Eg7/AIZIAAt/QRWD0TQl5QS1iqNFHXQX4EZbnnBIAAN/g");
	this.shape_85.setTransform(0,-8.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#A7ECEA").s().p("Eg7/AIcIAAt/QQbDwSVl4QTSi0NVHsQYUElcUnVIAAN/g");
	this.shape_86.setTransform(0,-9.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#A7ECEA").s().p("Eg76AIUIgFgBIAAt+QQhDaSQlVQTEilNpHAQYEEFbjmWIA6gJIAANDIgFA2g");
	this.shape_87.setTransform(0,-8.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#A7ECEA").s().p("Eg76AILIgFgBIAAt+QQnDFSKk0QS2iTN9GSQYPDrbXltIA1gCIAANDIgLAwg");
	this.shape_88.setTransform(0,-7.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#A7ECEA").s().p("Eg77AIDIgEgCIAAt9QQsCvSGkSQSniDORFmQYaDSbNlGIAuAFIAANDIgQArg");
	this.shape_89.setTransform(0,-6.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#A7ECEA").s().p("Eg77AH6IgEgCIAAt9QQyCZSBjvQSYhzOmE5QYlC4bBkdIAoANIAANCIgVAlg");
	this.shape_90.setTransform(0,-5.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#A7ECEA").s().p("Eg78AHyIgDgCIAAt9QQ4CDR7jNQSLhiO6EMQYvCea1j1IAjAVIAANBIgbAgg");
	this.shape_91.setTransform(0,-5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#A7ECEA").s().p("Eg79AHqIgCgEIAAt7QQ+BtR2irQR8hSPODgQY6CDaqjMIAdAcIAANBIgfAbg");
	this.shape_92.setTransform(0,-4.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#A7ECEA").s().p("Eg79AHiIgCgEIAAt7QREBXRwiJQRuhBPjCzQZEBpafijIAXAjIAANAIglAWg");
	this.shape_93.setTransform(0,-3.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#A7ECEA").s().p("Eg7+AHZIgBgEIAAt7QRKBCRrhnQRggxP3CGQZPBPaSh6IASArIAAM/IgqAQg");
	this.shape_94.setTransform(0,-2.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#A7ECEA").s().p("Eg7+AHRIgBgFIAAt6QRQArRmhEQRRghQLBaQZaA0aIhRIALAyIAAM/IgvALg");
	this.shape_95.setTransform(0,-1.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#A7ECEA").s().p("Eg7+AHIIgBgFIAAt6QRWAWRhgiQRCgQQfAsQZlAaZ8goIAGA5IAAM/Ig1AFg");
	this.shape_96.setTransform(0,-0.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#A7ECEA").s().p("Eg7/AHEIAAuAUAmeAAmAmngAtQIcAGISABQNKAENBgEIABALIAAN0IgKABg");
	this.shape_97.setTransform(0,-0.3);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#A7ECEA").s().p("Eg7+AHHIgBgCIAAt9UAmZABJAmrgBXQIfAKIPADQNOAHM9gGIACAJIAANzIgJADg");
	this.shape_98.setTransform(0,-0.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#A7ECEA").s().p("Eg7+AHKIgBgBIAAt+UAmTABvAmxgCDQIjAPIKAEQNTALM3gKIAEAIIAAN0IgIADg");
	this.shape_99.setTransform(0,-1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#A7ECEA").s().p("Eg7+AHOIgBgBIAAt+UAmNACTAm2gCvQInAVIGAGQNWAOM0gNIAFAGIAAN0IgGAFg");
	this.shape_100.setTransform(0,-1.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#A7ECEA").s().p("Eg7+AHRIgBgBIAAt+UAmHAC4Am8gDaQIrAZIAAIQNcARMugQIAHAFIAAN0IgFAGg");
	this.shape_101.setTransform(0,-1.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#A7ECEA").s().p("Eg7+AHVIgBgBIAAt/UAmCADeAnAgEGQIvAeH8AJQNgAVMqgUIAIAFIAANzIgDAIg");
	this.shape_102.setTransform(0,-2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#A7ECEA").s().p("Eg7+AHYIgBgBIAAt+UAl8AECAnFgEyQIzAkH4AKQNkAZMlgXIAKACIAAN0IgCAJg");
	this.shape_103.setTransform(0,-2.4);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#A7ECEA").s().p("Eg7/AHbIAAt/UAl2AEnAnKgFdQI3AoH0AMQNpAcMggaIALACIAANzIgBAKg");
	this.shape_104.setTransform(0,-2.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape).wait(6).to({_off:true},1).wait(26).to({_off:false},0).to({_off:true},1).wait(37).to({_off:false},0).to({_off:true},1).wait(42).to({_off:false},0).wait(6));

	// Слой 1
	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#A7ECEA").s().p("Eg7/AHAIAAt/MB3/AAAIAAN/g");

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#A7ECEA").s().p("Eg7/gG+UAmhAASAmkgAUIQuACQNIACNDgCIABAMIAANzMh3/AABg");
	this.shape_106.setTransform(0,-0.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#A7ECEA").s().p("Eg7/AHDIAAt/UAmeAAjAmngApQIbAFITABQNKADNBgDIABALIAANzIgKABg");
	this.shape_107.setTransform(0,-0.3);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#A7ECEA").s().p("Eg7+AHFIgBgCIAAt9UAmcAA0AmpgA+QIdAHIRACQNLAFM/gEIACAKIAANzIgKACg");
	this.shape_108.setTransform(0,-0.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#A7ECEA").s().p("Eg7+AHHIgBgCIAAt+UAmZABGAmrgBSQIfAJIPADQNNAHM+gHIACAKIAANzIgJADg");
	this.shape_109.setTransform(0,-0.6);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#A7ECEA").s().p("Eg7+AHIIgBgCIAAt9UAmWABXAmugBnQIhAMIMAEQNQAIM7gIIADAJIAANzIgIADg");
	this.shape_110.setTransform(0,-0.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#A7ECEA").s().p("Eg7+AHKIgBgCIAAt9UAmUABoAmwgB8QIjAPIKAEQNSAKM4gJIAEAIIAANzIgIAEg");
	this.shape_111.setTransform(0,-1);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#A7ECEA").s().p("Eg7+AHLIgBgBIAAt+UAmRAB6AmzgCQQIkARIIAEQNUAMM3gLIAEAIIAANzIgHAEg");
	this.shape_112.setTransform(0,-1.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#A7ECEA").s().p("Eg7+AHNIgBgBIAAt+UAmOACMAm2gCmQIlAUIHAFQNWANM0gMIAFAHIAAN0IgHAEg");
	this.shape_113.setTransform(0,-1.3);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#A7ECEA").s().p("Eg7+AHPIgBgBIAAt/UAmLACeAm4gC7QIoAWIEAGQNYAPMzgOIAFAHIAANzIgGAGg");
	this.shape_114.setTransform(0,-1.4);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#A7ECEA").s().p("Eg7+AHQIgBgBIAAt+UAmJACvAm6gDPQIqAYIBAHQNbARMvgQIAHAGIAANzIgFAGg");
	this.shape_115.setTransform(0,-1.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#A7ECEA").s().p("Eg7+AHSIgBgBIAAt+UAmHADAAm7gDkQIsAbIAAHQNdATMtgRIAHAFIAANzIgEAHg");
	this.shape_116.setTransform(0,-1.8);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#A7ECEA").s().p("Eg7+AHUIgBgBIAAt/UAmEADSAm+gD4QIuAcH9AJQNfAUMrgTIAIAFIAANzIgEAIg");
	this.shape_117.setTransform(0,-1.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#A7ECEA").s().p("Eg7+AHVIgBgBIAAt+UAmBADjAnBgENQIvAfH8AKQNhAVMpgUIAIAEIAANzIgDAIg");
	this.shape_118.setTransform(0,-2.1);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#A7ECEA").s().p("Eg7+AHXIgBgBIAAt+UAl+AD0AnDgEiQIyAiH5AKQNjAXMngVIAJADIAAN0IgDAIg");
	this.shape_119.setTransform(0,-2.3);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#A7ECEA").s().p("Eg7+AHYIgBAAIAAt/UAl8AEGAnFgE2QI0AkH2AKQNmAaMkgYIAKADIAAN0IgCAIg");
	this.shape_120.setTransform(0,-2.4);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#A7ECEA").s().p("Eg7+AHaIgBgBIAAt+UAl5AEXAnIgFLQI1AnH1ALQNnAbMjgZIAKACIAANzIgBAKg");
	this.shape_121.setTransform(0,-2.6);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#A7ECEA").s().p("Eg7/AHcIAAuAUAl2AEpAnKgFgQI4ApHzAMQNpAdMggbIALACIAAN0IgBAKg");
	this.shape_122.setTransform(0,-2.7);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#A7ECEA").s().p("Eg7/AHdIAAt/UAl0AE6AnMgF0QI6AsHwAMQNsAeMegcIALABIgBN+g");
	this.shape_123.setTransform(0,-2.9);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#A7ECEA").s().p("Eg7/AHfIAAt/UAlxAFLAnOgGJQI8AuHvANQN0AhMhgeIAAN/g");
	this.shape_124.setTransform(0,-3.1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#A7ECEA").s().p("Eg7/AHbIAAt/UAlnAEzAnWgFpQI+AzHvAAQN4AXMdgUIAAN/g");
	this.shape_125.setTransform(0,-2.7);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#A7ECEA").s().p("Eg7/AHXIAAt/UAlcAEaAnfgFIQJAA4HvgNQN8AOMZgLIAAN/g");
	this.shape_126.setTransform(0,-2.3);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#A7ECEA").s().p("Eg7/AHTIAAt/UAlRAEBAnngEnQJDA9HvgaQOAAEMVgBIAAN/g");
	this.shape_127.setTransform(0,-1.9);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#A7ECEA").s().p("Eg7/AHPIAAt/UAlGADoAnwgEGQJFBCHvgnQOEgFMRAIIAAN/g");
	this.shape_128.setTransform(0,-1.5);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#A7ECEA").s().p("Eg7/AHLIAAt/UAk7ADQAn4gDmQJIBHHvg0QOIgOMNARIAAN/g");
	this.shape_129.setTransform(0,-1.1);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#A7ECEA").s().p("Eg7/AHHIAAt/UAkxAC3AoAgDFQJKBMHvhBQOMgYMJAbIAAN/g");
	this.shape_130.setTransform(0,-0.7);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#A7ECEA").s().p("Eg7/AHJIAAt/UAkmACfAoJgCkQJMBQHvhNQOQgiMFAkIAAN/g");
	this.shape_131.setTransform(0,-0.9);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#A7ECEA").s().p("Eg7/AHMIAAt/UAkcACFAoQgCDQJPBWHvhbQOUgrMBAuIAAN/g");
	this.shape_132.setTransform(0,-1.2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#A7ECEA").s().p("Eg7/AHOIAAt/UAkQABtAoagBiQJRBaHvhnQOYg1L9A3IAAN/g");
	this.shape_133.setTransform(0,-1.4);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#A7ECEA").s().p("Eg7/AHQIAAt/UAkGABUAohgBBQJUBfHvh0QOcg+L5BAIAAN/g");
	this.shape_134.setTransform(0,-1.6);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#A7ECEA").s().p("Eg7/AHTIAAt/UAj8AA7AoogAhQJXBlHviCQOghHL1BKIAAN/g");
	this.shape_135.setTransform(0,-1.9);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#A7ECEA").s().p("Eg7/AHVIAAt/UAjxAAjAoxAAAQJZBpHviOQOkhRLxBTIAAN/g");
	this.shape_136.setTransform(0,-2.1);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#A7ECEA").s().p("Eg7/AHXIAAt/UAjmAAKAo6AAhQJbBuHvibQOnhaLuBcIAAN/g");
	this.shape_137.setTransform(0,-2.3);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#A7ECEA").s().p("Eg7/AHaIAAt/UAjbgAPApDABBQJdBzHvioQOrhjLqBmIAAN/g");
	this.shape_138.setTransform(0,-2.6);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#A7ECEA").s().p("Eg7/AHcIAAt/UAjQgAnApLABiQJgB4Hvi1QOwhtLlBvIAAN/g");
	this.shape_139.setTransform(0,-2.8);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#A7ECEA").s().p("Eg7/AHfIAAt/UAjGgBBApSACDQJjB9HvjCQOzh2LiB5IAAN/g");
	this.shape_140.setTransform(0,-3.1);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#A7ECEA").s().p("Eg7/AHhIAAt/UAi7gBZApbACjQJlCCHvjPQO3iALeCDIAAN/g");
	this.shape_141.setTransform(0,-3.3);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#A7ECEA").s().p("Eg7/AHjIAAt/UAixgByApjADFQJnCHHvjcQO8iKLZCMIAAN/g");
	this.shape_142.setTransform(0,-3.5);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#A7ECEA").s().p("Eg7/AHmIAAt/UAimgCLAprADlQJqCMHvjpQO/iTLWCWIAAN/g");
	this.shape_143.setTransform(0,-3.8);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#A7ECEA").s().p("Eg7/AHoIAAt/UAibgCkAp0AEGQJsCRHvj2QPDicLSCfIAAN/g");
	this.shape_144.setTransform(0,-4);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#A7ECEA").s().p("Eg7/AHqIAAt/UAiRgC8Ap8AEnQJuCVHvkCQPHimLOCoIAAN/g");
	this.shape_145.setTransform(0,-4.2);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#A7ECEA").s().p("Eg7/AHtIAAt/UAiFgDVAqFAFHQJxCbHvkQQPMivLJCyIAAN/g");
	this.shape_146.setTransform(0,-4.5);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#A7ECEA").s().p("Eg7/AHvIAAt/UAh7gDtAqMAFoQJ0CfHvkcQPPi5LGC7IAAN/g");
	this.shape_147.setTransform(0,-4.7);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#A7ECEA").s().p("Eg7/AHrIAAt/UAiLgDHAqAAE1QJwCYHvkIQPKiqLLCsIAAN/g");
	this.shape_148.setTransform(0,-4.3);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#A7ECEA").s().p("Eg7/AHoIAAt/UAicgCiApzAEEQJsCQHvj1QPDibLSCeIAAN/g");
	this.shape_149.setTransform(0,-4);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#A7ECEA").s().p("Eg7/AHkIAAt/UAisgB7ApmADRQJpCJHvjhQO9iNLYCPIAAN/g");
	this.shape_150.setTransform(0,-3.6);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#A7ECEA").s().p("Eg7/AHhIAAt/UAi9gBWApaACfQJkCBHvjNQO3h+LeCBIAAN/g");
	this.shape_151.setTransform(0,-3.3);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#A7ECEA").s().p("Eg7/AHdIAAt/UAjNgAwApNABtQJhB6Hvi6QOxhwLkBzIAAN/g");
	this.shape_152.setTransform(0,-2.9);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#A7ECEA").s().p("Eg7/AHZIAAt/UAjdgAKApBAA7QJdByHvilQOrhiLqBkIAAN/g");
	this.shape_153.setTransform(0,-2.5);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#A7ECEA").s().p("Eg7/AHWIAAt/UAjuAAcAozAAIQJaBrHviSQOlhTLwBWIAAN/g");
	this.shape_154.setTransform(0,-2.2);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#A7ECEA").s().p("Eg7/AHSIAAt/UAj+ABCAoogApQJVBjHvh+QOehFL3BHIAAN/g");
	this.shape_155.setTransform(0,-1.8);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#A7ECEA").s().p("Eg7/AHPIAAt/UAkPABoAoagBcQJSBbHvhqQOYg2L9A5IAAN/g");
	this.shape_156.setTransform(0,-1.5);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#A7ECEA").s().p("Eg7/AHLIAAt/UAkfACOAoOgCOQJOBTHvhWQOTgoMCArIAAN/g");
	this.shape_157.setTransform(0,-1.1);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#A7ECEA").s().p("Eg7/AHHIAAt/UAkwAC0AoBgDAQJKBMHvhCQOMgaMJAcIAAN/g");
	this.shape_158.setTransform(0,-0.7);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#A7ECEA").s().p("Eg7/AHMIAAt/UAlAADaAn0gDyQJHBEHvguQOHgLMOANIAAN/g");
	this.shape_159.setTransform(0,-1.2);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#A7ECEA").s().p("Eg7/AHTIAAuAUAlQAEAAnogElQJDA+HvgbQOAAEMVgCIAAOAg");
	this.shape_160.setTransform(0,-1.8);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#A7ECEA").s().p("Eg7/AHZIAAuAUAlhAEmAnbgFWQI/A1HvgHQN6ASMbgQIAAOAg");
	this.shape_161.setTransform(0,-2.4);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#A7ECEA").s().p("Eg7/AHgIAAt/UAk1AFIAmVgGIQJYAkH/AiQORArNNgxIAAN/g");
	this.shape_162.setTransform(0,-3.2);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#A7ECEA").s().p("Eg7/AHiIAAt/UAj6AFEAlagGIQJ2AbINA2QOvA3N5hEIAAN/g");
	this.shape_163.setTransform(0,-3.4);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#A7ECEA").s().p("Eg7/AHkIAAuAUAi/AFAAkggGHQKRARIeBMQPMBCOlhYIAAOAg");
	this.shape_164.setTransform(0,-3.5);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#A7ECEA").s().p("Eg7/AHlIAAt/UAiEAE8AjlgGGQKvAGItBhQPpBOPRhrIAAN/g");
	this.shape_165.setTransform(0,-3.7);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#A7ECEA").s().p("Eg7/AHnIAAt/UAhIAE3AirgGFQLMgDI8B1QQIBZP8h9IAAN/g");
	this.shape_166.setTransform(0,-3.9);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#A7ECEA").s().p("Eg7/AHpIAAt/UAgMAE0AhygGFQLpgNJLCKQQlBlQoiRIAAN/g");
	this.shape_167.setTransform(0,-4.1);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#A7ECEA").s().p("Eg7/AHrIAAt/UAfRAEwAg3gGEQMFgXJdCfQRBBwRUikIAAN/g");
	this.shape_168.setTransform(0,-4.3);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#A7ECEA").s().p("Eg7/AHuIAAt/QeWEsf9mDQMighJsC0QRdB7SBi3IAAN/g");
	this.shape_169.setTransform(0,-4.6);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#A7ECEA").s().p("Eg7/AHxIAAt/QdbEofDmDQM+gqJ7DIQR7CHStjKIAAN/g");
	this.shape_170.setTransform(0,-4.9);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#A7ECEA").s().p("Eg7/AH0IAAt/QcfEkeKmCQNbg0KKDdQSYCSTZjdIAAN/g");
	this.shape_171.setTransform(0,-5.2);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#A7ECEA").s().p("Eg7/AH3IAAt/QbjEgdRmBQN3g+KaDyQS2CdUEjwIAAN/g");
	this.shape_172.setTransform(0,-5.5);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#A7ECEA").s().p("Eg7/AH6IAAt/QaoEccWmAQOUhJKpEHQTUCpUwkDIAAN/g");
	this.shape_173.setTransform(0,-5.8);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#A7ECEA").s().p("Eg7/AH9IAAt/QZsEYbcmAQOxhSK5EcQTxC0VckWIAAN/g");
	this.shape_174.setTransform(0,-6.1);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#A7ECEA").s().p("Eg7/AIAIAAt/QYxEUail/QPNhcLJExQUOC/WIkpIAAN/g");
	this.shape_175.setTransform(0,-6.4);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#A7ECEA").s().p("Eg7/AIDIAAt/QX2EQZnl+QPqhlLZFFQUrDLW0k9IAAN/g");
	this.shape_176.setTransform(0,-6.7);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#A7ECEA").s().p("Eg7/AIGIAAt/QW6EMYtl9QQIhvLoFaQVIDWXglQIAAN/g");
	this.shape_177.setTransform(0,-7);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#A7ECEA").s().p("Eg7/AIJIAAt/QV/EIXzl8QQkh5L4FvQVlDhYMljIAAN/g");
	this.shape_178.setTransform(0,-7.3);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#A7ECEA").s().p("Eg7/AIMIAAt/QVEEFW4l8QRCiDMHGDQWCDsY4l1IAAN/g");
	this.shape_179.setTransform(0,-7.6);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#A7ECEA").s().p("Eg7/AIPIAAt/QUIEBV/l7QRfiNMVGYQWgD3ZkmIIAAN/g");
	this.shape_180.setTransform(0,-7.9);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#A7ECEA").s().p("Eg7/AITIAAt/QTMD8VFl6QR8iXMlGtQW9EDaQmbIAAN/g");
	this.shape_181.setTransform(0,-8.3);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#A7ECEA").s().p("Eg7/AIWIAAt/QSSD4UJl5QSZihM1HCQXaEOa8muIAAN/g");
	this.shape_182.setTransform(0,-8.6);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#A7ECEA").s().p("Eg7/AIZIAAt/QRWD0TQl5QS1iqNFHXQX4EZbnnBIAAN/g");
	this.shape_183.setTransform(0,-8.9);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#A7ECEA").s().p("Eg7/AIcIAAt/QQbDwSVl4QTSi0NVHsQYUElcUnVIAAN/g");
	this.shape_184.setTransform(0,-9.2);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#A7ECEA").s().p("Eg7/AIaIAAt/QQcDqSUluQTOiwNbHfQX8EYbrmzIA/gPIgBN+g");
	this.shape_185.setTransform(0,-9);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#A7ECEA").s().p("Eg76AIXIgFAAIAAt/QQeDkSTlkQTKisNfHTQYAERbomoIA9gMIAANDIgDA4g");
	this.shape_186.setTransform(0,-8.7);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#A7ECEA").s().p("Eg76AIVIgFgBIAAt+QQgDeSRlbQTGinNmHGQYBEKbmmdIA7gKIAANDIgEA3g");
	this.shape_187.setTransform(0,-8.5);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#A7ECEA").s().p("Eg76AISIgFAAIAAt/QQhDYSQlRQTCiiNsG5QYEECbjmRIA5gIIAANDIgGA1g");
	this.shape_188.setTransform(0,-8.2);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#A7ECEA").s().p("Eg76AIQIgFgBIAAt+QQjDSSOlIQS+idNxGtQYJD6bemFIA4gGIAANDIgIAzg");
	this.shape_189.setTransform(0,-8);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#A7ECEA").s().p("Eg76AIOIgFgBIAAt+QQlDLSMk+QS7iZN2GhQYLDzbcl6IA2gEIAANDIgJAyg");
	this.shape_190.setTransform(0,-7.8);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#A7ECEA").s().p("Eg76AILIgFgBIAAt+QQmDGSLk1QS2iUN9GUQYPDrbXluIA1gCIAANDIgLAwg");
	this.shape_191.setTransform(0,-7.5);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#A7ECEA").s().p("Eg76AIJIgFgBIAAt+QQoC/SKkqQSxiQODGHQYRDlbVlkIAzABIAANCIgMAvg");
	this.shape_192.setTransform(0,-7.3);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#A7ECEA").s().p("Eg77AIHIgEgCIAAt9QQqC5SIkhQStiLOJF6QYUDebSlZIAxADIAANCIgNAug");
	this.shape_193.setTransform(0,-7.1);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#A7ECEA").s().p("Eg77AIEIgEgBIAAt+QQrCzSHkYQSqiGONFuQYYDXbPlNIAvAEIAANCIgPAsg");
	this.shape_194.setTransform(0,-6.8);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#A7ECEA").s().p("Eg77AICIgEgBIAAt+QQtCtSFkOQSmiCOTFiQYbDPbLlCIAuAHIAANCIgRAqg");
	this.shape_195.setTransform(0,-6.6);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#A7ECEA").s().p("Eg77AIAIgEgCIAAt9QQvCmSDkEQSih9OZFVQYeDHbHk2IAtAJIAANCIgSApg");
	this.shape_196.setTransform(0,-6.4);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#A7ECEA").s().p("Eg77AH9IgEgCIAAt9QQwChSCj7QSeh4OfFIQYgDAbFkrIArALIAANCIgUAng");
	this.shape_197.setTransform(0,-6.1);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#A7ECEA").s().p("Eg77AH7IgEgCIAAt9QQyCaSBjxQSZh0OlE8QYkC5bBkgIApANIAANCIgVAmg");
	this.shape_198.setTransform(0,-5.9);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#A7ECEA").s().p("Eg78AH5IgDgDIAAt8QQzCUSAjoQSVhvOrEvQYnCya+kUIAnAPIAANBIgWAlg");
	this.shape_199.setTransform(0,-5.7);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#A7ECEA").s().p("Eg78AH2IgDgCIAAt9QQ1COR+jeQSRhqOwEiQYqCqa8kIIAlARIAANBIgYAjg");
	this.shape_200.setTransform(0,-5.4);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#A7ECEA").s().p("Eg78AH0IgDgDIAAt8QQ3CHR8jUQSOhmO1EWQYuCja3j9IAkATIAANBIgaAig");
	this.shape_201.setTransform(0,-5.2);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#A7ECEA").s().p("Eg78AHxIgDgDIAAt8QQ4CCR7jLQSKhhO7EJQYwCba0jxIAjAVIAANBIgbAgg");
	this.shape_202.setTransform(0,-4.9);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#A7ECEA").s().p("Eg78AHvIgDgDIAAt8QQ6B8R5jBQSGhdPBD9QYzCTaxjlIAhAXIAANBIgdAeg");
	this.shape_203.setTransform(0,-4.7);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#A7ECEA").s().p("Eg78AHtIgDgDIAAt8QQ8B1R4i3QSBhYPHDvQY2CNaujaIAfAZIAANBIgdAdg");
	this.shape_204.setTransform(0,-4.5);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#A7ECEA").s().p("Eg78AHqIgDgDIAAt8QQ+BvR2itQR9hUPNDjQY5CGarjPIAdAbIAANBIgfAbg");
	this.shape_205.setTransform(0,-4.2);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#A7ECEA").s().p("Eg79AHoIgCgDIAAt8QQ/BpR1ikQR6hOPRDWQY8B+aojEIAcAeIAANBIggAZg");
	this.shape_206.setTransform(0,-4);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#A7ECEA").s().p("Eg79AHmIgCgEIAAt7QRBBiRziaQR2hKPYDKQY+B2aki3IAbAfIAANBIgiAYg");
	this.shape_207.setTransform(0,-3.8);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#A7ECEA").s().p("Eg79AHjIgCgDIAAt8QRCBdRyiRQRxhFPfC9QZCBvagisIAZAhIAANBIgkAWg");
	this.shape_208.setTransform(0,-3.5);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#A7ECEA").s().p("Eg79AHhIgCgEIAAt7QREBWRwiHQRthAPkCwQZFBnaeigIAXAjIAANBIglAVg");
	this.shape_209.setTransform(0,-3.3);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#A7ECEA").s().p("Eg79AHfIgCgEIAAt7QRGBQRvh9QRpg9PpCkQZJBhaaiWIAVAmIAANAIgmAUg");
	this.shape_210.setTransform(0,-3.1);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#A7ECEA").s().p("Eg79AHcIgCgEIAAt7QRHBKRuhzQRlg4PvCXQZLBZaXiKIAUAoIAANAIgoASg");
	this.shape_211.setTransform(0,-2.8);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#A7ECEA").s().p("Eg7+AHaIgBgFIAAt6QRJBERshqQRhgzP1CKQZOBSaUh/IASAqIAANAIgpARg");
	this.shape_212.setTransform(0,-2.6);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#A7ECEA").s().p("Eg7+AHYIgBgFIAAt6QRLA9RrhgQRcguP7B+QZRBKaQhzIARAsIAANAIgrAPg");
	this.shape_213.setTransform(0,-2.4);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#A7ECEA").s().p("Eg7+AHVIgBgEIAAt7QRNA4RphXQRYgqQAByQZVBCaNhnIAPAuIAANAIgtANg");
	this.shape_214.setTransform(0,-2.1);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#A7ECEA").s().p("Eg7+AHTIgBgFIAAt6QROAxRohNQRUglQGBlQZYA7aKhcIANAwIAANAIguAMg");
	this.shape_215.setTransform(0,-1.9);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#A7ECEA").s().p("Eg7+AHRIgBgFIAAt6QRQArRmhEQRQggQMBYQZaA0aIhQIALAyIAAM/IgvALg");
	this.shape_216.setTransform(0,-1.7);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#A7ECEA").s().p("Eg7+AHOIgBgFIAAt6QRSAlRkg6QRNgbQRBLQZdAtaEhFIAKA0IAAM/IgxAJg");
	this.shape_217.setTransform(0,-1.4);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#A7ECEA").s().p("Eg7+AHMIgBgFIAAt6QRTAfRjgxQRJgXQXA/QZgAlaBg5IAIA2IAAM/IgyAIg");
	this.shape_218.setTransform(0,-1.2);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#A7ECEA").s().p("Eg7+AHJIgBgFIAAt6QRVAZRignQREgSQcAyQZkAeZ9guIAHA5IAAM+Ig0AGg");
	this.shape_219.setTransform(0,-0.9);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#A7ECEA").s().p("Eg7+AHHIgBgFIAAt6QRXATRggdQRAgOQiAmQZoAWZ5giIAFA6IAAM/Ig2AEg");
	this.shape_220.setTransform(0,-0.7);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#A7ECEA").s().p("Eg7+AHFIgBgGIAAt5QRYAMRfgTQQ8gJQpAZQZpAPZ3gXIADA8IAAM/Ig3ADg");
	this.shape_221.setTransform(0,-0.5);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#A7ECEA").s().p("Eg7/gG9QRaAGRdgJQQ4gFQuANQZtAHZ0gLIABA/IAAM+Mh3/AABg");
	this.shape_222.setTransform(0,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_105}]}).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_191}]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_194}]},1).to({state:[{t:this.shape_195}]},1).to({state:[{t:this.shape_196}]},1).to({state:[{t:this.shape_197}]},1).to({state:[{t:this.shape_198}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_200}]},1).to({state:[{t:this.shape_201}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_203}]},1).to({state:[{t:this.shape_204}]},1).to({state:[{t:this.shape_205}]},1).to({state:[{t:this.shape_206}]},1).to({state:[{t:this.shape_207}]},1).to({state:[{t:this.shape_208}]},1).to({state:[{t:this.shape_209}]},1).to({state:[{t:this.shape_210}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_213}]},1).to({state:[{t:this.shape_214}]},1).to({state:[{t:this.shape_215}]},1).to({state:[{t:this.shape_216}]},1).to({state:[{t:this.shape_217}]},1).to({state:[{t:this.shape_218}]},1).to({state:[{t:this.shape_219}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_221}]},1).to({state:[{t:this.shape_222}]},1).to({state:[{t:this.shape_105}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-384,-50.9,768,95.8);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rot();
	this.instance.parent = this;
	this.instance.setTransform(-7.7,-9.1,0.912,0.912);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ33, new cjs.Rectangle(-7.7,-9.1,15.5,18.3), null);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.og_1_10();
	this.instance.parent = this;
	this.instance.setTransform(-43.5,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.5,-40,87,80);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006699").s().p("AlgISIAAwjILBAAIAAQjg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006699").s().p("Ao0ISIAAwjIRpAAIAAQjg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.og_1_333();
	this.instance.parent = this;
	this.instance.setTransform(-10.5,-11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ23, new cjs.Rectangle(-10.5,-11,21,22), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.og_1_03();
	this.instance.parent = this;
	this.instance.setTransform(-40,-84.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(-40,-84.5,80,169), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.og_1_0511();
	this.instance.parent = this;
	this.instance.setTransform(-48.5,-87.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(-48.5,-87.5,97,175), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.og_1_07();
	this.instance.parent = this;
	this.instance.setTransform(-46.5,-56.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(-46.5,-56.5,93,113), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.og_1_13();
	this.instance.parent = this;
	this.instance.setTransform(-20.5,-44);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(-20.5,-44,41,88), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.og_1_17();
	this.instance.parent = this;
	this.instance.setTransform(-35.5,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(-35.5,-40,71,80), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.og_1_21();
	this.instance.parent = this;
	this.instance.setTransform(-25.5,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(-25.5,-20,51,40), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.og_1_24();
	this.instance.parent = this;
	this.instance.setTransform(-37.5,-52.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(-37.5,-52.5,75,105), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.og_1_27();
	this.instance.parent = this;
	this.instance.setTransform(-28,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(-28,-55.5,56,111), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.og_1_33();
	this.instance.parent = this;
	this.instance.setTransform(-39.5,-41.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(-39.5,-41.5,79,83), null);


(lib.Символ80 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ79();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.77,x:-15.6,y:-19.2},3,cjs.Ease.get(1)).to({scaleY:1,x:0,y:0},3,cjs.Ease.get(1)).wait(1).to({scaleY:0.77,x:-15.6,y:-19.2},3,cjs.Ease.get(1)).to({scaleY:1,x:0,y:0},3,cjs.Ease.get(1)).wait(27));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.4,-15.4,30.9,30.9);


(lib.Символ78 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ80();
	this.instance.parent = this;
	this.instance.setTransform(117.9,3.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ77();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ78, new cjs.Rectangle(-75.3,-12.2,208.7,30.9), null);


(lib.Символ76 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 75
	this.instance = new lib.Символ75();
	this.instance.parent = this;
	this.instance.setTransform(183.5,187.4);
	this.instance.alpha = 0.488;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({x:149.1,y:221.8},5,cjs.Ease.get(1)).to({x:183.5,y:187.4},6,cjs.Ease.get(1)).wait(7));

	// Символ 75
	this.instance_1 = new lib.Символ75();
	this.instance_1.parent = this;
	this.instance_1.setTransform(92.2,96);
	this.instance_1.alpha = 0.488;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({x:57.8,y:130.4},5,cjs.Ease.get(1)).to({x:92.2,y:96},6,cjs.Ease.get(1)).wait(9));

	// Символ 75
	this.instance_2 = new lib.Символ75();
	this.instance_2.parent = this;
	this.instance_2.alpha = 0.488;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:-34.4,y:34.4},5,cjs.Ease.get(1)).to({x:0,y:0},6,cjs.Ease.get(1)).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77,-38,337.5,263.1);


(lib.Символ72 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ71();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ72, new cjs.Rectangle(-57.3,-57.3,114.7,114.7), null);


(lib.Символ70 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ69();
	this.instance.parent = this;
	this.instance.setTransform(62.5,54.4,1,1,30,0,0,62.4,54.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:6.5,y:54.5},14,cjs.Ease.get(-1)).to({rotation:-18.5,x:62.6},15,cjs.Ease.get(0.81)).to({regX:62.5,rotation:5.8},15,cjs.Ease.get(-1)).to({regX:62.4,rotation:30,x:62.5,y:54.4},15,cjs.Ease.get(0.81)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.9,-98.6,196.7,196.7);


(lib.Символ67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ65();
	this.instance.parent = this;
	this.instance.setTransform(0,-0.7);

	this.instance_1 = new lib.Символ66();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0.8);
	this.instance_1.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance_1.cache(-74,-19,149,39);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ67, new cjs.Rectangle(-74.5,-18.7,152,42), null);


(lib.Символ61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 63
	this.instance = new lib.Символ63();
	this.instance.parent = this;
	this.instance.setTransform(-1,28.2,0.771,0.771,0,0,0,-0.1,-21.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:-21.1,rotation:-26.2,x:12.5,y:14.8},4).to({regY:-21.2,rotation:0,x:-1,y:28.2},4).wait(1));

	// Символ 62
	this.instance_1 = new lib.Символ62();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleY:0.72,skewX:-24.2,skewY:-11.2,x:3.4,y:-3.6},4).to({scaleY:1,skewX:0,skewY:0,x:0,y:0},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.2,-41.5,53.5,110.2);


(lib.Символ59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ58();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.8,scaleY:1.01,skewX:-9.3,x:-6.5},3).to({scaleX:0.86,scaleY:1.03,skewX:20.6,skewY:7.7,x:-14.3},3).to({scaleX:1,scaleY:1,skewX:0,skewY:0,x:0},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.4,-40.3,72.9,80.6);


(lib.Символ57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ56();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ57, new cjs.Rectangle(-80.5,-48,161,96), null);


(lib.Символ55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// fish_06.png
	this.instance = new lib.Символ59();
	this.instance.parent = this;
	this.instance.setTransform(25.7,5.4,0.64,0.64,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// fish_03.png
	this.instance_1 = new lib.Символ57();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-29,0.7,0.64,0.64);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ55, new cjs.Rectangle(-80.5,-30,129.5,61.4), null);


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ53();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ54();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0.6);
	this.instance_1.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance_1.cache(-35,-9,70,18);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ50, new cjs.Rectangle(-35,-8.4,74,21), null);


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ51();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ52();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0.6);
	this.instance_1.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance_1.cache(-28,-9,56,18);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ49, new cjs.Rectangle(-28.1,-8.5,60,21), null);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 50
	this.instance = new lib.Символ50();
	this.instance.parent = this;
	this.instance.setTransform(164.9,12.5,2.468,2.468);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({scaleX:2.69,scaleY:2.69,x:179.2},5,cjs.Ease.get(-1)).to({scaleX:2.91,scaleY:2.91,x:193.5,y:12.3},5,cjs.Ease.get(1)).to({scaleX:2.69,scaleY:2.69,x:179.2,y:12.4},5,cjs.Ease.get(-1)).to({scaleX:2.47,scaleY:2.47,x:164.9,y:12.5},5,cjs.Ease.get(1)).wait(8));

	// Символ 49
	this.instance_1 = new lib.Символ49();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-173.8,12.9,2.468,2.468);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:2.69,scaleY:2.69,x:-189.7},5,cjs.Ease.get(-1)).to({scaleX:2.91,scaleY:2.91,x:-205.5,y:12.7},5,cjs.Ease.get(1)).to({scaleX:2.69,scaleY:2.69,x:-189.7,y:12.8},5,cjs.Ease.get(-1)).to({scaleX:2.47,scaleY:2.47,x:-173.8,y:12.9},5,cjs.Ease.get(1)).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-240.2,-5.3,492.5,42);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ46();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:18.2},0).wait(1).to({rotation:36.2},0).wait(1).to({rotation:54},0).wait(1).to({rotation:71.6},0).wait(1).to({rotation:88.9},0).wait(1).to({rotation:106.1},0).wait(1).to({rotation:123.1},0).wait(1).to({rotation:139.8},0).wait(1).to({rotation:156.4},0).wait(1).to({rotation:172.7},0).wait(1).to({rotation:188.8},0).wait(1).to({rotation:204.8},0).wait(1).to({rotation:220.5},0).wait(1).to({rotation:236},0).wait(1).to({rotation:251.3},0).wait(1).to({rotation:266.4},0).wait(1).to({rotation:281.3},0).wait(1).to({rotation:296},0).wait(1).to({rotation:310.5},0).wait(1).to({rotation:324.7},0).wait(1).to({rotation:338.8},0).wait(1).to({rotation:352.7},0).wait(1).to({rotation:366.3},0).wait(1).to({rotation:379.7},0).wait(1).to({rotation:393},0).wait(1).to({rotation:406},0).wait(1).to({rotation:418.8},0).wait(1).to({rotation:431.5},0).wait(1).to({rotation:443.9},0).wait(1).to({rotation:456.1},0).wait(1).to({rotation:468.1},0).wait(1).to({rotation:479.9},0).wait(1).to({rotation:491.4},0).wait(1).to({rotation:502.8},0).wait(1).to({rotation:514},0).wait(1).to({rotation:524.9},0).wait(1).to({rotation:535.7},0).wait(1).to({rotation:546.2},0).wait(1).to({rotation:556.6},0).wait(1).to({rotation:566.7},0).wait(1).to({rotation:576.7},0).wait(1).to({rotation:586.4},0).wait(1).to({rotation:595.9},0).wait(1).to({rotation:605.2},0).wait(1).to({rotation:614.3},0).wait(1).to({rotation:623.2},0).wait(1).to({rotation:631.9},0).wait(1).to({rotation:640.4},0).wait(1).to({rotation:648.6},0).wait(1).to({rotation:656.7},0).wait(1).to({rotation:664.6},0).wait(1).to({rotation:672.2},0).wait(1).to({rotation:679.7},0).wait(1).to({rotation:686.9},0).wait(1).to({rotation:693.9},0).wait(1).to({rotation:700.8},0).wait(1).to({rotation:707.4},0).wait(1).to({rotation:713.8},0).wait(1).to({rotation:720},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38,-38,76,76);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ47();
	this.instance.parent = this;
	this.instance.setTransform(-253.6,195.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-748.8},34,cjs.Ease.get(1)).to({x:-255.2,y:61.7},33,cjs.Ease.get(1)).to({x:-774.4,y:-19.9},32,cjs.Ease.get(1)).to({x:-460.8,y:12.1},30,cjs.Ease.get(1)).wait(10).to({scaleX:0.71,scaleY:0.71},5,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},5,cjs.Ease.get(1)).to({scaleX:0.71,scaleY:0.71},5,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},5,cjs.Ease.get(1)).to({x:-253.6,y:195.3},30,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-291.6,157.3,76,76);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ40();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ41, new cjs.Rectangle(-80.5,-48,161,96), null);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ38();
	this.instance.parent = this;
	this.instance.setTransform(-16,-4,1,1,0,0,0,-14.4,-4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0,regY:0,scaleY:0.99,rotation:-1.7,x:-1.6,y:-0.8},0).wait(1).to({scaleY:0.98,rotation:-2.7,y:-1.4},0).wait(1).to({scaleY:0.97,rotation:-3.9,y:-2},0).wait(1).to({scaleY:0.95,rotation:-6.1,x:-1.7,y:-3.1},0).wait(1).to({scaleY:0.91,rotation:-11,x:-1.9,y:-5.6},0).wait(1).to({regX:-14.5,regY:-4.1,scaleY:0.88,rotation:-15,x:-17,y:-7.2},0).wait(1).to({regX:0,regY:0,scaleY:0.89,rotation:-13.3,x:-1.9,y:-6.7},0).wait(1).to({scaleY:0.9,rotation:-12.3,y:-6.2},0).wait(1).to({scaleY:0.91,rotation:-11.1,x:-1.8,y:-5.6},0).wait(1).to({scaleY:0.93,rotation:-8.9,x:-1.7,y:-4.4},0).wait(1).to({scaleY:0.97,rotation:-4,x:-1.5,y:-1.9},0).wait(1).to({regX:-14.4,regY:-4,scaleY:1,rotation:0,x:-16,y:-4},0).wait(1).to({regX:0,regY:0,scaleY:0.99,rotation:3.8,x:-2.1,y:1.3},0).wait(1).to({scaleY:0.98,rotation:6.3,x:-2.5,y:2.1},0).wait(1).to({scaleY:0.97,rotation:9.9,x:-3,y:3.3},0).wait(1).to({scaleY:0.94,rotation:19.8,x:-4.8,y:6.3},0).wait(1).to({regX:-14.4,regY:-4,scaleY:0.91,rotation:30,x:-17.6,y:-1.1},0).wait(1).to({regX:0,regY:0,scaleY:0.92,rotation:27,x:-6.3,y:8.4},0).wait(1).to({scaleY:0.92,rotation:25.1,x:-5.9,y:7.8},0).wait(1).to({scaleY:0.93,rotation:23.3,x:-5.5,y:7.3},0).wait(1).to({scaleY:0.94,rotation:20.8,x:-5,y:6.6},0).wait(1).to({scaleY:0.95,rotation:15.5,x:-4,y:5},0).wait(1).to({scaleY:0.98,rotation:6.5,x:-2.5,y:2.1},0).wait(1).to({regX:-14.4,regY:-4,scaleY:1,rotation:0,x:-16,y:-4},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.1,-31.5,57,63);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ33();
	this.instance.parent = this;
	this.instance.alpha = 0.73;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.06,scaleY:1.06},2).to({scaleX:1,scaleY:1},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.7,-9.1,15.5,18.3);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ23();
	this.instance.parent = this;
	this.instance.setTransform(-9.9,-3.1,1,1,0,0,0,-9.9,-3.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-10,scaleX:1,scaleY:1,rotation:16.3,x:-4.6,y:4},9,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:34.7,x:1.4,y:11.8},10,cjs.Ease.get(1)).to({regX:-9.9,scaleX:1,scaleY:1,rotation:17.3,x:-4.2,y:4.4},10,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:0,x:-9.9,y:-3.1},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.5,-11,21,22);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ20();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ21, new cjs.Rectangle(-40,-84.5,80,169), null);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ18();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ24();
	this.instance_1.parent = this;
	this.instance_1.setTransform(12.5,-76);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(-48.5,-87.5,97,175), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(-20.5,-44,41,88), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(-35.5,-40,71,80), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(-25.5,-20,51,40), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ6();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(-37.5,-52.5,75,105), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(-28,-55.5,56,111), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(-39.5,-41.5,79,83), null);


(lib.Символ73 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ72();
	this.instance.parent = this;
	this.instance.setTransform(-66.2,-16.8,1,1,0,0,0,-66.2,-16.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0,regY:0,rotation:15,x:-6.6,y:16.6},0).wait(1).to({rotation:30,x:-17.3,y:30.8},0).wait(1).to({rotation:45,x:-31.3,y:41.9},0).wait(1).to({rotation:60,x:-47.6,y:48.9},0).wait(1).to({rotation:75,x:-65.3,y:51.5},0).wait(1).to({rotation:90,x:-83,y:49.4},0).wait(1).to({rotation:105,x:-99.6,y:42.8},0).wait(1).to({rotation:120,x:-113.8,y:32.1},0).wait(1).to({rotation:135,x:-124.9,y:18.1},0).wait(1).to({rotation:150,x:-131.9,y:1.8},0).wait(1).to({rotation:165,x:-134.5,y:-15.9},0).wait(1).to({rotation:180,x:-132.4,y:-33.6},0).wait(1).to({rotation:195,x:-125.8,y:-50.2},0).wait(1).to({rotation:210,x:-115.1,y:-64.4},0).wait(1).to({rotation:225,x:-101.1,y:-75.5},0).wait(1).to({rotation:240,x:-84.8,y:-82.5},0).wait(1).to({rotation:255,x:-67.1,y:-85.1},0).wait(1).to({rotation:270,x:-49.4,y:-83},0).wait(1).to({rotation:285,x:-32.8,y:-76.4},0).wait(1).to({rotation:300,x:-18.6,y:-65.7},0).wait(1).to({rotation:315,x:-7.5,y:-51.7},0).wait(1).to({rotation:330,x:-0.5,y:-35.4},0).wait(1).to({rotation:345,x:2.1,y:-17.7},0).wait(1).to({rotation:360,x:0,y:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.3,-57.3,114.7,114.7);


(lib.Символ68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ67();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.27,scaleY:1.27},12,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},12,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74.5,-18.7,152,42);


(lib.Символ64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ68();
	this.instance.parent = this;
	this.instance.setTransform(0,-4.8,1,1,0,0,0,0,-18.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:15,x:0.1,y:-4.9},5,cjs.Ease.get(1)).to({rotation:-15,x:0},9,cjs.Ease.get(1)).to({rotation:0,y:-4.8},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74.5,-5.2,152,42);


(lib.Символ60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ55();
	this.instance.parent = this;
	this.instance.setTransform(-825.5,149.7,0.7,0.7,0,-52.8,127.2,-70.2,6.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).to({skewX:29.7,skewY:209.7,guide:{path:[-825,147.7,-155,-470.7,-7.1,57.7]}},30).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ55();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-7.1,57.7,0.7,0.7,34.2,0,0,-70.2,6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-40.8,guide:{path:[-7.1,57.7,-303.5,-473.7,-825,147.7]}},35).to({_off:true},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.9,32.5,95.4,86.4);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 39
	this.instance = new lib.Символ39();
	this.instance.parent = this;
	this.instance.setTransform(68.8,6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 41
	this.instance_1 = new lib.Символ41();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-16.7,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ42, new cjs.Rectangle(-97.2,-48,192.9,96), null);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(5));

	// Слой 1
	this.instance = new lib.Символ31();
	this.instance.parent = this;
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},4).wait(1).to({alpha:0},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.7,-9.1,15.5,18.3);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.rot = new lib.Символ32();
	this.rot.parent = this;
	this.rot.setTransform(8.8,15.1);

	this.timeline.addTween(cjs.Tween.get(this.rot).wait(1));

	// Слой 1
	this.instance = new lib.Символ27();
	this.instance.parent = this;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(-43.5,-40,87,80), null);


(lib.Символ74 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ73();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.693,0.693);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ42();
	this.instance.parent = this;
	this.instance.setTransform(304.8,-12.8,0.617,0.617);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ43, new cjs.Rectangle(244.8,-42.4,119,59.2), null);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EhJ5gGEMAjEAAAQk1E1BlHCMgi2ACGQhfoJEhl0gArvGFQFklNiUmKIZth6IAAgOMA4vgAeUANiAIJgpMAF0g");
	var mask_graphics_91 = new cjs.Graphics().p("EhJ5gGEMAjEAAAQk1E1BlHCMgi2ACGQhfoJEhl0gArvGFQFklNiUmKIZth6IAAgOMA4vgAeUANiAIJgpMAF0g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-42.7,y:-16.6}).wait(91).to({graphics:mask_graphics_91,x:-42.7,y:-16.6}).wait(10));

	// Слой 5
	this.instance = new lib.Символ43();
	this.instance.parent = this;
	this.instance.setTransform(270,-10.1,0.792,0.792,0,0,0,244.8,-12.8);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(31).to({_off:false},0).to({regX:244.9,x:68.4,y:-7},9,cjs.Ease.get(0.87)).to({regX:244.8,x:-54.7,y:0.3},11).to({x:-166.7,y:-10.3},10).to({x:-278.7,y:-2.3},10).to({x:-368.4,y:-13.4},8).to({x:-502.8,y:-10.1},12).to({_off:true},1).wait(9));

	// fish_06.png
	this.instance_1 = new lib.Символ43();
	this.instance_1.parent = this;
	this.instance_1.setTransform(270.1,-10.1,0.651,0.651,0,0,0,245,-12.8);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(17).to({_off:false},0).to({regX:244.8,scaleX:0.62,scaleY:0.62,x:68.4,y:-7},9,cjs.Ease.get(0.87)).to({regY:-12.7,scaleX:0.55,scaleY:0.55,x:-54.7,y:0.3},11).to({regY:-12.8,scaleX:0.58,scaleY:0.58,x:-166.7,y:-10.3},10).to({regX:244.7,regY:-12.7,scaleX:0.66,scaleY:0.66,x:-278.7,y:-2.2},10).to({regX:244.8,regY:-12.8,scaleX:0.79,scaleY:0.79,x:-368.4,y:-13.4},8).to({x:-502.8,y:-10.1},12).to({_off:true},1).wait(23));

	// fish_06.png
	this.instance_2 = new lib.Символ43();
	this.instance_2.parent = this;
	this.instance_2.setTransform(270,-10.1,0.792,0.792,0,0,0,244.8,-12.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:244.9,x:68.4,y:-7},9,cjs.Ease.get(0.87)).to({regX:244.8,x:-54.7,y:0.3},11).to({x:-166.7,y:-10.3},10).to({x:-278.7,y:-2.3},10).to({x:-368.4,y:-13.4},8).to({x:-502.8,y:-10.1},12).wait(1).to({x:270},0).to({regX:244.9,x:68.4,y:-7},6,cjs.Ease.get(0.87)).to({regX:244.8,x:-54.7,y:0.3},8).to({x:-166.7,y:-10.3},6).to({x:-278.7,y:-2.3},7).to({x:-368.4,y:-13.4},5).to({x:-502.8,y:-10.1},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(269.9,-33.5,94.3,46.9);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.golova = new lib.Символ14();
	this.golova.parent = this;
	this.golova.setTransform(26.4,-20.4,1,1,0,0,0,26.4,-20.4);

	this.timeline.addTween(cjs.Tween.get(this.golova).to({rotation:-3.5,x:26.5},10,cjs.Ease.get(-1)).to({rotation:-8,x:26.4},10,cjs.Ease.get(0.82)).to({rotation:-4.1},9,cjs.Ease.get(-1)).to({rotation:0},10,cjs.Ease.get(0.82)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.5,-40,87,80);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.golova1 = new lib.Символ15();
	this.golova1.parent = this;
	this.golova1.setTransform(-67.7,-0.8);

	this.timeline.addTween(cjs.Tween.get(this.golova1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(-111.2,-56.5,157.7,113), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_39 = function() {
		this.gotoAndPlay(0);
	}
	this.frame_52 = function() {
		this.gotoAndPlay(41);
	}
	this.frame_65 = function() {
		this.gotoAndPlay(54);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(39).call(this.frame_39).wait(13).call(this.frame_52).wait(13).call(this.frame_65).wait(1));

	// Слой 5
	this.instance = new lib.Символ60();
	this.instance.parent = this;
	this.instance.setTransform(350.2,10);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40).to({_off:false},0).wait(26));

	// og_1_33.png
	this.instance_1 = new lib.Символ3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(23,117.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(53).to({x:36.5,y:117.1},0).to({scaleX:0.91,x:36.3,y:116.3},3,cjs.Ease.get(-1)).to({scaleX:0.82,x:36,y:115.6},3,cjs.Ease.get(1)).to({scaleX:0.9,x:36.2,y:116.2},3,cjs.Ease.get(-1)).to({scaleX:1,x:36.5,y:117.1},3,cjs.Ease.get(1)).wait(1));

	// og_1_27.png
	this.instance_2 = new lib.Символ5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(21.6,99.1,1,1,0,0,0,4,44);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:44.1,rotation:-4.3,x:21.3,y:99.2},9,cjs.Ease.get(-1)).to({rotation:-20,x:20,y:99.3},10,cjs.Ease.get(1)).to({regX:4.1,scaleX:1,scaleY:1,rotation:-14.8,x:20.5,y:99.2},10,cjs.Ease.get(-1)).to({regX:4,regY:44,scaleX:1,scaleY:1,rotation:0,x:21.6,y:99.1},10,cjs.Ease.get(1)).wait(1).to({regY:44.1,rotation:-4.3,x:21.3,y:99.2},3,cjs.Ease.get(-1)).to({rotation:-20,x:20,y:99.3},3,cjs.Ease.get(1)).to({regX:4.1,scaleX:1,scaleY:1,rotation:-14.8,x:20.5,y:99.2},3,cjs.Ease.get(-1)).to({regX:4,regY:44,scaleX:1,scaleY:1,rotation:0,x:21.6,y:99.1},3,cjs.Ease.get(1)).wait(1).to({rotation:-11.4,x:35.1,y:98.7},0).to({regY:44.1,scaleX:1,scaleY:1,rotation:-17.1,x:34.6,y:97.3},3,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:-22.9,x:34.2,y:95.7},3,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:-18,x:34.5,y:97.1},3,cjs.Ease.get(-1)).to({regY:44,scaleX:1,scaleY:1,rotation:-11.4,x:35.1,y:98.7},3,cjs.Ease.get(1)).wait(1));

	// og_1_03.png
	this.instance_3 = new lib.Символ21();
	this.instance_3.parent = this;
	this.instance_3.setTransform(23.6,-142.6,1,1,0,0,0,-8.4,-71.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:2.8,x:23.5,y:-138.7},9,cjs.Ease.get(-1)).to({regX:-8.3,rotation:12.4,x:23.2,y:-125},10,cjs.Ease.get(1)).to({regY:-71.7,scaleX:1,scaleY:1,rotation:9.3,x:23.3,y:-129.6},10,cjs.Ease.get(-1)).to({regX:-8.4,regY:-71.6,scaleX:1,scaleY:1,rotation:0,x:23.6,y:-142.6},10,cjs.Ease.get(1)).wait(1).to({rotation:2.8,x:23.5,y:-138.7},3,cjs.Ease.get(-1)).to({regX:-8.3,rotation:12.4,x:23.2,y:-125},3,cjs.Ease.get(1)).to({regY:-71.7,scaleX:1,scaleY:1,rotation:9.3,x:23.3,y:-129.6},3,cjs.Ease.get(-1)).to({regX:-8.4,regY:-71.6,scaleX:1,scaleY:1,rotation:0,x:23.6,y:-142.6},3,cjs.Ease.get(1)).wait(1).to({rotation:-10.5,x:-8.5,y:-137.4},0).to({rotation:-7,y:-133.7},3,cjs.Ease.get(-1)).to({regX:-8.3,rotation:-3.8,x:-8.4,y:-130},3,cjs.Ease.get(1)).to({regY:-71.7,rotation:-6.5,y:-133.3},3,cjs.Ease.get(-1)).to({regX:-8.4,regY:-71.6,rotation:-10.5,x:-8.5,y:-137.4},3,cjs.Ease.get(1)).wait(1));

	// Слой 6
	this.instance_4 = new lib.Символ61();
	this.instance_4.parent = this;
	this.instance_4.setTransform(54.8,-83.3,1,1,-30);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(40).to({_off:false},0).to({regX:0.1,regY:0.1,scaleX:1,scaleY:1,rotation:-22.3,x:50.1,y:-64.5},3,cjs.Ease.get(-1)).to({regY:0,scaleX:1,scaleY:1,rotation:-15,x:45,y:-53.9},3,cjs.Ease.get(1)).to({regY:-0.1,scaleX:1,scaleY:1,rotation:-22.3,x:50,y:-64.7},3,cjs.Ease.get(-1)).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:-30,x:54.8,y:-83.3},3,cjs.Ease.get(1)).wait(1).to({x:38.8,y:-80.9},0).wait(13));

	// og_1_24.png
	this.instance_5 = new lib.Символ7();
	this.instance_5.parent = this;
	this.instance_5.setTransform(49.2,90.1,1,1,0,0,0,0,40.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:0.1,regY:40.5,rotation:-5.3,y:89.8},9,cjs.Ease.get(-1)).to({regX:-0.1,regY:40.4,rotation:-23.5,x:48.8,y:88.2},10,cjs.Ease.get(1)).to({regX:0,scaleX:1,scaleY:1,rotation:-17.5,x:49,y:88.6},10,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:0,x:49.2,y:89.7},10,cjs.Ease.get(1)).wait(1).to({y:90.1},0).to({regX:0.1,regY:40.5,rotation:-5.3,y:89.8},3,cjs.Ease.get(-1)).to({regX:-0.1,regY:40.4,rotation:-23.5,x:48.8,y:88.2},3,cjs.Ease.get(1)).to({regX:0,scaleX:1,scaleY:1,rotation:-17.5,x:49,y:88.6},3,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:0,x:49.2,y:89.7},3,cjs.Ease.get(1)).wait(1).to({rotation:-11.7,x:59.7,y:89.2},0).to({scaleX:1,scaleY:1,rotation:-17.3,x:58.7,y:87.5},3,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:-23.2,x:57.8,y:85.7},3,cjs.Ease.get(1)).to({regX:0.1,scaleX:1,scaleY:1,rotation:-18.3,x:58.7,y:87.2},3,cjs.Ease.get(-1)).to({regX:0,scaleX:1,scaleY:1,rotation:-11.7,x:59.7,y:89.2},3,cjs.Ease.get(1)).wait(1));

	// og_1_05.png
	this.instance_6 = new lib.Символ19();
	this.instance_6.parent = this;
	this.instance_6.setTransform(53.3,-149.5,1,1,0,0,0,-14.4,-81.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:-14.3,rotation:2.3,x:52.6,y:-144.2},9,cjs.Ease.get(-1)).to({regY:-81.4,rotation:10.1,x:49.8,y:-126.1},10,cjs.Ease.get(1)).to({rotation:7.5,x:50.8,y:-131.9},10,cjs.Ease.get(-1)).to({regX:-14.4,regY:-81.2,rotation:0,x:53.3,y:-149.5},10,cjs.Ease.get(1)).wait(1).to({regX:-14.3,rotation:2.3,x:52.6,y:-144.2},3,cjs.Ease.get(-1)).to({regY:-81.4,rotation:10.1,x:49.8,y:-126.1},3,cjs.Ease.get(1)).to({rotation:7.5,x:50.8,y:-131.9},3,cjs.Ease.get(-1)).to({regX:-14.4,regY:-81.2,rotation:0,x:53.3,y:-149.5},3,cjs.Ease.get(1)).wait(1).to({rotation:-9.5,x:19.8,y:-147.7},0).to({rotation:-6.3,y:-142.7},3,cjs.Ease.get(-1)).to({regX:-14.3,rotation:-3.3,x:19.9,y:-137.7},3,cjs.Ease.get(1)).to({regX:-14.4,regY:-81.3,rotation:-5.8,y:-142},3,cjs.Ease.get(-1)).to({regY:-81.2,rotation:-9.5,x:19.8,y:-147.7},3,cjs.Ease.get(1)).wait(1));

	// og_1_21.png
	this.instance_7 = new lib.Символ9();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-81.5,17);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(66));

	// og_1_13.png
	this.instance_8 = new lib.Символ13();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-42.2,-30.4,1,1,0,0,0,16.2,39.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regY:39,rotation:-2,x:-39.5,y:-27.8},9,cjs.Ease.get(-1)).to({regY:38.9,rotation:-9.8,x:-30.4,y:-18.3},10,cjs.Ease.get(1)).to({rotation:-7.3,x:-33.4,y:-21.4},10,cjs.Ease.get(-1)).to({regY:39.1,rotation:0,x:-42.2,y:-30.4},10,cjs.Ease.get(1)).wait(1).to({regY:39,rotation:-2,x:-39.5,y:-27.8},3,cjs.Ease.get(-1)).to({regY:38.9,rotation:-9.8,x:-30.4,y:-18.3},3,cjs.Ease.get(1)).to({rotation:-7.3,x:-33.4,y:-21.4},3,cjs.Ease.get(-1)).to({regY:39.1,rotation:0,x:-42.2,y:-30.4},3,cjs.Ease.get(1)).wait(1).to({x:-58.7,y:-34.9},0).wait(13));

	// og_1_17.png
	this.instance_9 = new lib.Символ11();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-73.5,9.5,1,1,0,0,0,-14.4,16.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({regX:-14.5,rotation:4.5,x:-73.6,y:9.6},9,cjs.Ease.get(-1)).to({regY:16.5,rotation:20.1,y:9.4},10,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:15},10,cjs.Ease.get(-1)).to({regX:-14.4,regY:16.6,scaleX:1,scaleY:1,rotation:0,x:-73.5,y:9.5},10,cjs.Ease.get(1)).wait(1).to({regX:-14.5,rotation:4.5,x:-73.6,y:9.6},3,cjs.Ease.get(-1)).to({regY:16.5,rotation:20.1,y:9.4},3,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:15},3,cjs.Ease.get(-1)).to({regX:-14.4,regY:16.6,scaleX:1,scaleY:1,rotation:0,x:-73.5,y:9.5},3,cjs.Ease.get(1)).wait(1).to({rotation:-20.2},0).to({regX:-14.5,regY:16.5,scaleX:1,scaleY:1,rotation:-20.1,x:-73.6},3,cjs.Ease.get(-1)).to({regX:-14.4,regY:16.6,scaleX:1,scaleY:1,rotation:-20.2,x:-73.5},3,cjs.Ease.get(1)).to({regX:-14.5,regY:16.5,scaleX:1,scaleY:1,rotation:-20.1,x:-73.6},3,cjs.Ease.get(-1)).to({regX:-14.4,regY:16.6,scaleX:1,scaleY:1,rotation:-20.2,x:-73.5},3,cjs.Ease.get(1)).wait(1));

	// og_1_07.png
	this.tors = new lib.Символ17();
	this.tors.parent = this;
	this.tors.setTransform(-20.8,-92.8);

	this.timeline.addTween(cjs.Tween.get(this.tors).to({y:-89.1},9,cjs.Ease.get(-1)).to({y:-76.3},10,cjs.Ease.get(1)).to({y:-80.4},10,cjs.Ease.get(-1)).to({y:-92.8},10,cjs.Ease.get(1)).wait(1).to({y:-89.1},3,cjs.Ease.get(-1)).to({y:-76.3},3,cjs.Ease.get(1)).to({y:-80.4},3,cjs.Ease.get(-1)).to({y:-92.8},3,cjs.Ease.get(1)).wait(1).to({regX:-40.8,regY:-18.5,x:-78.1,y:-116},0).to({regX:-40.9,rotation:2.3},3,cjs.Ease.get(-1)).to({regX:-40.8,regY:-18.6,rotation:5,y:-116.1},3,cjs.Ease.get(1)).to({rotation:2.8,y:-116},3,cjs.Ease.get(-1)).to({regY:-18.5,rotation:0},3,cjs.Ease.get(1)).wait(1));

	// Слой 4
	this.instance_10 = new lib.qbg();
	this.instance_10.parent = this;
	this.instance_10.setTransform(428.5,-280,1.182,1.182,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(66));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-328,-280,756.5,466.9);


(lib.Символ22 = function(mode,startPosition,loop) {
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

	// Слой 11
	this.instance = new lib.Символ78();
	this.instance.parent = this;
	this.instance.setTransform(176.3,84.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:141.1,alpha:0.488},7,cjs.Ease.get(1)).wait(1).to({y:84.7,alpha:1},7).wait(1));

	// Слой 10
	this.instance_1 = new lib.Символ76();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-372.1,-79.9,0.412,0.412,0,-45,135,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-265.3},7,cjs.Ease.get(1)).wait(1).to({x:-372.1},7,cjs.Ease.get(1)).wait(1));

	// Слой 9
	this.instance_2 = new lib.Символ70();
	this.instance_2.parent = this;
	this.instance_2.setTransform(257,247.6);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:54,alpha:1},7).wait(1).to({y:247.6,alpha:0},7,cjs.Ease.get(1)).wait(1));

	// Слой 8
	this.instance_3 = new lib.Символ64();
	this.instance_3.parent = this;
	this.instance_3.setTransform(24.8,-323);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:-152.6},7).wait(1).to({y:-323},7,cjs.Ease.get(1)).wait(1));

	// Слой 7
	this.instance_4 = new lib.Символ48();
	this.instance_4.parent = this;
	this.instance_4.setTransform(25,-169.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:-387.8},7,cjs.Ease.get(1)).wait(1).to({y:-169.4},7).wait(1));

	// Слой 6
	this.instance_5 = new lib.Символ45();
	this.instance_5.parent = this;
	this.instance_5.setTransform(521,-128.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({y:258.5,alpha:0},7,cjs.Ease.get(1)).wait(1).to({y:-128.7,alpha:1},7).wait(1));

	// Слой 4 - копия
	this.instance_6 = new lib.Символ36();
	this.instance_6.parent = this;
	this.instance_6.setTransform(37.8,91,1,1.101,0,0,180,0,0.2);
	this.instance_6.alpha = 0.219;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regY:0.1,scaleY:1.3,y:263.5,alpha:0.148},7,cjs.Ease.get(1)).wait(1).to({regY:0.2,scaleY:1.1,y:91,alpha:0.219},7,cjs.Ease.get(-1)).wait(1));

	// Слой 5
	this.instance_7 = new lib.Символ37();
	this.instance_7.parent = this;
	this.instance_7.setTransform(80.5,90);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({y:411.6},7,cjs.Ease.get(1)).wait(1).to({y:90},7).wait(1));

	// Слой 4
	this.instance_8 = new lib.Символ36();
	this.instance_8.parent = this;
	this.instance_8.setTransform(37.8,104.5,1,1.101,0,0,0,0,0.2);
	this.instance_8.alpha = 0.219;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regY:0,scaleY:0.5,y:217,alpha:0.148},7,cjs.Ease.get(1)).wait(1).to({regY:0.2,scaleY:1.1,y:104.5,alpha:0.219},7,cjs.Ease.get(-1)).wait(1));

	// Слой 1
	this.dama = new lib.Символ1();
	this.dama.parent = this;
	this.dama.setTransform(7.9,-1.6);

	this.timeline.addTween(cjs.Tween.get(this.dama).to({scaleX:1.25,scaleY:1.25,x:-4.1,y:92.8},7,cjs.Ease.get(1)).wait(1).to({scaleX:1,scaleY:1,x:7.9,y:-1.6},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-456.9,-328.2,989.5,673.8);


// stage content:
(lib.fish640x305 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		
		stage.canvas.style.cursor = "none";
		this.priz.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
			this.priz.x = stage.mouseX/window.devicePixelRatio;
			this.priz.y = stage.mouseY/window.devicePixelRatio;
		}
		
		this.cursor = "none";
		
		var _this = this;
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		  function fl_MouseOverHandler_5()
		{
		_this.priz.gotoAndStop(1);
		_this.main.gotoAndPlay(1);
		_this.main.dama.gotoAndPlay(41);
		_this.main.dama.tors.golova1.golova.rot.gotoAndPlay(1);	
		}
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		  function fl_MouseOutHandler_2()
		{
		_this.priz.gotoAndStop(0);
		_this.main.gotoAndPlay(9);   
		_this.main.dama.gotoAndPlay(1);
		_this.main.dama.tors.golova1.golova.rot.gotoAndPlay(6);		
		}
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.btn.addEventListener("mouseover", fl_MouseOverHandler_11);
		function fl_MouseOverHandler_11()
		{
		_this.main.dama.gotoAndPlay(54);
		}
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.btn2.addEventListener("mouseover", fl_MouseOverHandler_22);
		
		function fl_MouseOverHandler_22()
		{
		_this.main.dama.gotoAndPlay(41);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 4
	this.priz = new lib.Символ74();
	this.priz.parent = this;
	this.priz.setTransform(891.2,223.6);

	this.timeline.addTween(cjs.Tween.get(this.priz).wait(1));

	// Слой 3
	this.btn2 = new lib.Символ26();
	this.btn2.parent = this;
	this.btn2.setTransform(123,140.5,5.603,3.488);
	new cjs.ButtonHelper(this.btn2, 0, 1, 2, false, new lib.Символ26(), 3);

	this.btn = new lib.Символ25();
	this.btn.parent = this;
	this.btn.setTransform(518.7,140.8,3.497,3.488,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.Символ25(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn},{t:this.btn2}]}).wait(1));

	// Слой 1
	this.main = new lib.Символ22();
	this.main.parent = this;
	this.main.setTransform(312.6,193.5);

	this.timeline.addTween(cjs.Tween.get(this.main).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(175.7,17.8,989.5,673.8);
// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/fish_03.png?1481701000509", id:"fish_03"},
		{src:"images/fish_06.png?1481701000509", id:"fish_06"},
		{src:"images/garpun.png?1481701000510", id:"garpun"},
		{src:"images/og_1_03.png?1481701000510", id:"og_1_03"},
		{src:"images/og_1_0511.png?1481701000510", id:"og_1_0511"},
		{src:"images/og_1_07.png?1481701000510", id:"og_1_07"},
		{src:"images/og_1_10.png?1481701000510", id:"og_1_10"},
		{src:"images/og_1_13.png?1481701000510", id:"og_1_13"},
		{src:"images/og_1_17.png?1481701000510", id:"og_1_17"},
		{src:"images/og_1_21.png?1481701000510", id:"og_1_21"},
		{src:"images/og_1_24.png?1481701000510", id:"og_1_24"},
		{src:"images/og_1_27.png?1481701000510", id:"og_1_27"},
		{src:"images/og_1_33.png?1481701000510", id:"og_1_33"},
		{src:"images/og_1_333.png?1481701000510", id:"og_1_333"},
		{src:"images/palez3.png?1481701000510", id:"palez3"},
		{src:"images/qbg.jpg?1481701000510", id:"qbg"},
		{src:"images/rot.png?1481701000510", id:"rot"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;