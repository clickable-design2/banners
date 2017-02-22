(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1200);


(lib.basket = function() {
	this.initialize(img.basket);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,271,610);


(lib.button = function() {
	this.initialize(img.button);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,481,125);


(lib.chel = function() {
	this.initialize(img.chel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,369,358);


(lib.foot = function() {
	this.initialize(img.foot);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,506,481);


(lib.footer = function() {
	this.initialize(img.footer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,476);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,314,97);


(lib.logo1 = function() {
	this.initialize(img.logo1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,59);


(lib.logo2 = function() {
	this.initialize(img.logo2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,59);


(lib.logo3 = function() {
	this.initialize(img.logo3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,59);


(lib.logo4 = function() {
	this.initialize(img.logo4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,59);


(lib.logo5 = function() {
	this.initialize(img.logo5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,59);


(lib.LogosSportsbig = function() {
	this.initialize(img.LogosSportsbig);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,636);


(lib.LogosSports_small = function() {
	this.initialize(img.LogosSports_small);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1140,380);// helper functions:

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


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.basket();
	this.instance.parent = this;
	this.instance.setTransform(-135.5,-305);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-135.5,-305,271,610);


(lib.Symbol58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.button();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol58, new cjs.Rectangle(0,0,481,125), null);


(lib.Symbol56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.foot();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol56, new cjs.Rectangle(0,0,506,481), null);


(lib.Symbol52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.chel();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol52, new cjs.Rectangle(0,0,369,358), null);


(lib.Symbol50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.back();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.069,1.069);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol50, new cjs.Rectangle(0,0,2051.9,1282.4), null);


(lib.Symbol49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.LogosSports_small();
	this.instance.parent = this;
	this.instance.setTransform(66,22,0.884,0.884);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol49, new cjs.Rectangle(66,22,1007.7,335.9), null);


(lib.Symbol48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.footer();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol48, new cjs.Rectangle(0,0,1920,476), null);


(lib.Symbol47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.LogosSportsbig();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol47, new cjs.Rectangle(0,0,1920,636), null);


(lib.Symbol46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgEBCIhXB/IhoAAICVjJIhNisIBjgQIArBwIBJhsIBnAAIiGC4IBWC9IhkAQg");
	this.shape.setTransform(19.6,19.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol46, new cjs.Rectangle(0,0,39.1,39.5), null);


(lib.Symbol45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAlDBIAljqIisDqIhYAAIA9mBIBZAAIgkDeICjjeIBgAAIg9GBg");
	this.shape.setTransform(18.7,19.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol45, new cjs.Rectangle(0,0,37.4,38.7), null);


(lib.Symbol44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhCDCIgcj/Ig5D9IhSAAIBamBIB4AAIAcEDIBwkDIB1AAIghGBIhhAAIAYj9IhtD/g");
	this.shape.setTransform(23.4,19.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol44, new cjs.Rectangle(0,0,46.8,38.8), null);


(lib.Symbol43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkKDBIA9mBIBfAAIgxEyIBeAAIAxkyIBeAAIgxEyIBeAAIAxkyIBfAAIg+GBg");
	this.shape.setTransform(26.7,19.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol43, new cjs.Rectangle(0,0,53.4,38.7), null);


(lib.Symbol42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAlDBIAljqIisDqIhYAAIA9mBIBZAAIgkDeICjjeIBgAAIg9GBg");
	this.shape.setTransform(18.7,19.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol42, new cjs.Rectangle(0,0,37.4,38.7), null);


(lib.Symbol41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAlDBIAljqIisDqIhYAAIA9mBIBZAAIgkDeICjjeIBgAAIg9GBg");
	this.shape.setTransform(18.7,19.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol41, new cjs.Rectangle(0,0,37.4,38.7), null);


(lib.Symbol40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkKDBIA9mBIBfAAIgxEyIBeAAIAxkyIBeAAIgxEyIBeAAIAxkyIBfAAIg+GBg");
	this.shape.setTransform(26.7,19.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol40, new cjs.Rectangle(0,0,53.4,38.7), null);


(lib.Symbol39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ai1B2QAZAAAmgMQAZgKAPgUIhWkDIBigOIAzC2IBeiyIBnAAIigEMQgVAjgVAXQgWAYgZAPQgYANgdAHQgbAGgiAAg");
	this.shape.setTransform(18.2,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol39, new cjs.Rectangle(0,0,36.5,39.6), null);


(lib.Symbol38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAADBIASh7IgvADQgeAAgWgGQgYgGgPgMQgRgNgIgTQgJgUAAgaIAWijIBfAAIgWCTQAAATAMAKQANAJAcAAQAVAAAQgDIAdi2IBfAAIg9GBg");
	this.shape.setTransform(15.5,19.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol38, new cjs.Rectangle(0,0,31.1,38.7), null);


(lib.Symbol37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAADBIASh7IgvADQgeAAgWgGQgYgGgPgMQgRgNgIgTQgJgUAAgaIAWijIBfAAIgWCTQAAATAMAKQANAJAcAAQAVAAAQgDIAdi2IBfAAIg9GBg");
	this.shape.setTransform(15.5,19.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol37, new cjs.Rectangle(0,0,31.1,38.7), null);


(lib.Symbol36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABIBwIh5AAIglBQIhdAAIDCmDIBhAAIBEF2IhhARgAA+AlIgSiEIg9CEIBPAAg");
	this.shape.setTransform(18,19.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol36, new cjs.Rectangle(0,0,35.9,39.2), null);


(lib.Symbol35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjIBzQAXgDAPgJQAQgJAMgQQALgQAKgZQAJgXALgkIAxiuID1AAIg9GBIhfAAIAxkzIhEAAIgiB6QgOA0gPAhQgYArgPAPQgKALgNAKQgNAIgPAGQgtANgcACg");
	this.shape.setTransform(20.1,19.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol35, new cjs.Rectangle(0,0,40.2,39.4), null);


(lib.Symbol34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ai1B2QAZAAAmgMQAZgKAPgUIhWkDIBigOIAzC2IBeiyIBnAAIigEMQgVAjgVAXQgWAYgZAPQgYANgdAHQgbAGgiAAg");
	this.shape.setTransform(18.2,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol34, new cjs.Rectangle(0,0,36.5,39.6), null);


(lib.Symbol33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjIBzQAXgDAPgJQAQgJAMgQQALgQAKgZQAJgXALgkIAxiuID1AAIg9GBIhfAAIAxkzIhEAAIgiB6QgOA0gPAhQgYArgPAPQgKALgNAKQgNAIgPAGQgtANgcACg");
	this.shape.setTransform(20.1,19.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol33, new cjs.Rectangle(0,0,40.2,39.4), null);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiQDBIA9mBIBdAAIgTB/IAMAAQAjAAAaAIQAbAHASAPQASAOAJAVQAJAVAAAcQAAAQgDAQQgDAPgGAOQgGANgJALQgJAMgLAJQgiAWgWAGQgtAKgbAAgAgoB8IASAAQARAAANgFQANgFAKgJQAKgJAGgMQAFgNAAgQQAAgNgDgJQgEgKgHgGQgIgHgLgDQgLgDgNAAIgQAAg");
	this.shape.setTransform(14.5,19.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol32, new cjs.Rectangle(0,0,29.1,38.7), null);


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAdDBIAaidIh4AAIgYCdIhgAAIA+mBIBeAAIgXCSIB3AAIAXiSIBfAAIg9GBg");
	this.shape.setTransform(18.6,19.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol31, new cjs.Rectangle(0,0,37.1,38.7), null);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag5C+IgcgOQgMgHgLgLQgKgKgJgNQgIgNgFgPQgGgQgDgRIgDgmQAAgaAEgYQAEgXAIgXQAHgVALgSQALgTAOgQQAOgPAQgMQARgMASgJQASgIATgFQAUgEAVAAQAdAAAbAIQAaAIAVAPIgZBRQgSgQgRgHQgUgIgUAAQgZAAgUAMQgTAMgPAUQgOAVgIAaQgIAaAAAbQAAAXAGATQAFASALAMQALALAOAHQAOAFASAAQAUABAWgIQATgFAVgMIAABQQgUALgZAFQgaAHgcAAQgiAAgdgKg");
	this.shape.setTransform(15.3,20);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol30, new cjs.Rectangle(0,0,30.7,40), null);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiXDBIA+mBIB1AAQAeAAAXAGQAXAGAPAMQAQALAJARQAHARABAVQAAASgGAPQgFAPgKALQgJALgMAJIgaANQAbALANASQAIAKAEANQADANAAAPQAAAdgLAYQgKAXgWAQQgVAPgdAIQgeAIgjAAgAgyCAIAeAAQAPAAAMgEQANgEAJgHQAJgHAGgLQAFgLAAgNQAAgXgPgMQgQgMgcAAIgXAAgAgYgkIAaAAQAbAAARgNQAIgHAEgJQAGgKAAgMQgBgTgLgKQgNgKgZAAIgXAAg");
	this.shape.setTransform(15.2,19.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol29, new cjs.Rectangle(0,0,30.3,38.7), null);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiQDBIA9mBIBdAAIgTB/IAMAAQAjAAAaAIQAbAHASAPQASAOAJAVQAJAVAAAcQAAAQgDAQQgDAPgGAOQgGANgJALQgJAMgLAJQgiAWgWAGQgtAKgbAAgAgoB8IASAAQARAAANgFQANgFAKgJQAKgJAGgMQAFgNAAgQQAAgNgDgJQgEgKgHgGQgIgHgLgDQgLgDgNAAIgQAAg");
	this.shape.setTransform(14.5,19.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol28, new cjs.Rectangle(0,0,29.1,38.7), null);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABIBwIh5AAIglBQIhdAAIDCmDIBhAAIBEF2IhhARgAA+AlIgSiEIg9CEIBPAAg");
	this.shape.setTransform(18,19.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol27, new cjs.Rectangle(0,0,35.9,39.2), null);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiXDBIA+mBIB1AAQAeAAAXAGQAXAGAPAMQAQALAJARQAHARABAVQAAASgGAPQgFAPgKALQgJALgMAJIgaANQAbALANASQAIAKAEANQADANAAAPQAAAdgLAYQgKAXgWAQQgVAPgdAIQgeAIgjAAgAgyCAIAeAAQAPAAAMgEQANgEAJgHQAJgHAGgLQAFgLAAgNQAAgXgPgMQgQgMgcAAIgXAAgAgYgkIAaAAQAbAAARgNQAIgHAEgJQAGgKAAgMQgBgTgLgKQgNgKgZAAIgXAAg");
	this.shape.setTransform(15.2,19.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol26, new cjs.Rectangle(0,0,30.3,38.7), null);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhhDBIAxkyIhqAAIANhPIEoAAIAABPIhtAAIgvEyg");
	this.shape.setTransform(15.5,19.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol25, new cjs.Rectangle(0,0,31.1,38.7), null);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhhDBIAxkyIhqAAIANhPIEoAAIAABPIhtAAIgvEyg");
	this.shape.setTransform(15.5,19.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol24, new cjs.Rectangle(0,0,31.1,38.7), null);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABIBwIh5AAIglBQIhdAAIDCmDIBhAAIBEF2IhhARgAA+AlIgSiEIg9CEIBPAAg");
	this.shape.setTransform(18,19.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol23, new cjs.Rectangle(0,0,35.9,39.2), null);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag5C+IgcgOQgMgHgLgLQgKgKgJgNQgIgNgFgPQgGgQgDgRIgDgmQAAgaAEgYQAEgXAIgXQAHgVALgSQALgTAOgQQAOgPAQgMQARgMASgJQASgIATgFQAUgEAVAAQAdAAAbAIQAaAIAVAPIgZBRQgSgQgRgHQgUgIgUAAQgZAAgUAMQgTAMgPAUQgOAVgIAaQgIAaAAAbQAAAXAGATQAFASALAMQALALAOAHQAOAFASAAQAUABAWgIQATgFAVgMIAABQQgUALgZAFQgaAHgcAAQgiAAgdgKg");
	this.shape.setTransform(15.3,20);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol22, new cjs.Rectangle(0,0,30.7,40), null);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag5C+IgcgOQgMgHgLgLQgKgKgJgNQgIgNgFgPQgGgQgDgRIgDgmQAAgaAEgYQAEgXAIgXQAHgVALgSQALgTAOgQQAOgPAQgMQARgMASgJQASgIATgFQAUgEAVAAQAdAAAbAIQAaAIAVAPIgZBRQgSgQgRgHQgUgIgUAAQgZAAgUAMQgTAMgPAUQgOAVgIAaQgIAaAAAbQAAAXAGATQAFASALAMQALALAOAHQAOAFASAAQAUABAWgIQATgFAVgMIAABQQgUALgZAFQgaAHgcAAQgiAAgdgKg");
	this.shape.setTransform(15.3,20);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(0,0,30.7,40), null);


(lib.Symbol13copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,0,0,0)","#FF0000","rgba(255,0,0,0)"],[0,0.498,1],-55,0,55,0).s().p("AolVBMAAAgqBIRLAAMAAAAqBg");
	this.shape.setTransform(55,134.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13copy, new cjs.Rectangle(0,0,110,269), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.498,1],-55,0,55,0).s().p("AolVBMAAAgqBIRLAAMAAAAqBg");
	this.shape.setTransform(55,134.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(0,0,110,269), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,0,314,97), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,0,59,59), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,59,59), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,59,59), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,59,59), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,59,59), null);


(lib.Symbol57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol58();
	this.instance.parent = this;
	this.instance.setTransform(240.5,62.5,1,1,0,0,0,240.5,62.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:240.3,scaleX:1.02,scaleY:1.02,y:62.6},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,481,125);


(lib.Symbol55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol56();
	this.instance.parent = this;
	this.instance.setTransform(253,240.5,1,1,0,0,0,253,240.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-1.8,y:262.6},9,cjs.Ease.get(-1)).to({regY:240.6,rotation:-3.7,x:253.1,y:287.2},10,cjs.Ease.get(1)).to({rotation:-1.8,y:263.9},10,cjs.Ease.get(-1)).to({regY:240.5,rotation:0,x:253,y:240.5},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,506,481);


(lib.Symbol54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(135.5,305);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol54, new cjs.Rectangle(0,0,271,610), null);


(lib.Symbol53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol54();
	this.instance.parent = this;
	this.instance.setTransform(135.5,305,1,1,0,0,0,135.5,305);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:328.2},9,cjs.Ease.get(-1)).to({y:354},10,cjs.Ease.get(1)).to({y:329.5},10,cjs.Ease.get(-1)).to({y:305},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,271,610);


(lib.Symbol51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol52();
	this.instance.parent = this;
	this.instance.setTransform(184.5,397.1,1,1,0,0,0,184.5,343.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:184.4,regY:343.3,rotation:-1.5,y:392.7},9,cjs.Ease.get(-1)).to({regX:184.5,regY:343.2,rotation:-3.2,x:184.6,y:387.5},10,cjs.Ease.get(1)).to({regX:184.4,regY:343.3,rotation:-1.5,y:392.4},10,cjs.Ease.get(-1)).to({regX:184.5,regY:343.2,rotation:0,x:184.5,y:397.1},10,cjs.Ease.get(1)).to({regX:184.6,rotation:1.3,x:184.6,y:388.8},10,cjs.Ease.get(-1)).to({rotation:2.7,y:380.5},10,cjs.Ease.get(1)).to({rotation:1.1,x:184.5,y:389.7},11,cjs.Ease.get(-1)).to({regX:184.5,rotation:0,y:397.1},9,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,53.9,369,358);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol20();
	this.instance.parent = this;
	this.instance.setTransform(15.3,20,1,1,0,0,0,15.3,20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol21, new cjs.Rectangle(0,0,30.7,40), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 9 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("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");
	var mask_graphics_79 = new cjs.Graphics().p("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");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:465.9,y:79.9}).wait(79).to({graphics:mask_graphics_79,x:465.9,y:79.9}).wait(1));

	// Layer 8
	this.instance = new lib.Symbol13();
	this.instance.parent = this;
	this.instance.setTransform(-114,78.5,1,0.824,0,16.2,0,54.9,134.4);

	this.instance_1 = new lib.Symbol13copy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(376.1,78.5,1,0.798,0,7,0,55,134.4);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:397.3},19).to({_off:true},1).wait(59).to({_off:false,x:1019},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20).to({_off:false},0).to({regX:54.9,scaleY:0.82,skewX:16.2,x:1016.8},17).to({_off:true},42).wait(1));

	// logo.png
	this.instance_2 = new lib.Symbol12();
	this.instance_2.parent = this;
	this.instance_2.setTransform(157,48.5,1,1,0,0,0,157,48.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(80));

	// logo5.png
	this.instance_3 = new lib.Symbol7();
	this.instance_3.parent = this;
	this.instance_3.setTransform(29.5,130.5,1,1,0,0,0,29.5,29.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({scaleX:0.17},7).to({scaleX:1},7).wait(60));

	// logo2.png
	this.instance_4 = new lib.Symbol10();
	this.instance_4.parent = this;
	this.instance_4.setTransform(93.3,130.5,1,1,0,0,0,29.5,29.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(8).to({scaleX:0.19},7).to({scaleX:1},7).wait(58));

	// logo4.png
	this.instance_5 = new lib.Symbol8();
	this.instance_5.parent = this;
	this.instance_5.setTransform(157,130.5,1,1,0,0,0,29.5,29.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(11).to({scaleX:0.17},7).to({scaleX:1},7).wait(55));

	// logo3.png
	this.instance_6 = new lib.Symbol9();
	this.instance_6.parent = this;
	this.instance_6.setTransform(220.8,130.5,1,1,0,0,0,29.5,29.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(13).to({scaleX:0.24},7).to({scaleX:1},7).wait(53));

	// logo1.png
	this.instance_7 = new lib.Symbol11();
	this.instance_7.parent = this;
	this.instance_7.setTransform(284.5,130.5,1,1,0,0,0,29.5,29.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(15).to({scaleX:0.24},8).to({scaleX:1},8).wait(49));

	// Layer 10
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgEBCIhXB/IhnAAICUjJIhNisIBjgQIArBwIBJhsIBnAAIiGC4IBWC9IhjAQg");
	this.shape.setTransform(910.9,113);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAlDBIAljqIisDqIhYAAIA9mBIBZAAIgkDeICjjeIBgAAIg9GBg");
	this.shape_1.setTransform(875,113);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AkKDBIA9mBIBfAAIgxEyIBeAAIAxkyIBeAAIgxEyIBeAAIAxkyIBfAAIg+GBg");
	this.shape_2.setTransform(828.9,113);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAADBIASh7IgvADQgeAAgWgGQgYgGgPgMQgRgNgIgTQgJgUAAgaIAEgvIASh0IBfAAIgTB2IgDAdQAAATAMAKQANAJAcAAQAVAAAQgDIAdi2IBfAAIg9GBg");
	this.shape_3.setTransform(786.1,113);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ai1B2QAZAAAmgLQAZgLAPgUIhWkDIBigOIAzC1IBeixIBnAAIigEMQgVAjgVAXQgWAYgZAOQgYAOgdAGQgbAHgiAAg");
	this.shape_4.setTransform(752,113.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AjIBzQAWgDAQgJQAQgJAMgQQALgPAKgaQAJgXALgkIAxiuID1AAIg9GCIhfAAIAxk0IhEAAIgiB6QgPA0gOAhQgYArgOAPQgMALgMAJQgNAJgPAGQgtANgcACg");
	this.shape_5.setTransform(711.1,113.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABIBwIh5AAIglBQIhdAAIDCmDIBhAAIBEF2IhhARgAA+AmIgSiFIg9CFIBPAAg");
	this.shape_6.setTransform(659.3,113.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAdDBIAZidIh3AAIgZCdIheAAIA8mBIBgAAIgYCSIB4AAIAWiSIBgAAIg9GBg");
	this.shape_7.setTransform(624.8,113);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AiQDBIA9mBIBdAAIgTB/IAMAAQAjAAAaAIQAbAHASAPQASAOAJAVQAJAVAAAcQAAAQgDAQQgDAPgGAOQgGANgJALQgJAMgLAJQgiAWgWAGQgtAKgbAAgAgoB8IASAAQARAAANgFQANgFAKgJQAKgJAGgMQAFgNAAgQQAAgNgDgJQgEgKgHgGQgIgHgLgDQgLgDgNAAIgQAAg");
	this.shape_8.setTransform(577.8,113);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AiXDBIA9mBIB1AAQAfAAAXAGQAXAGAQAMQAQALAHARQAJARgBAVQAAASgFAPQgFAPgKALQgIALgNAJIgaANQAbALANASQAIAKADANQAFANAAAPQAAAdgMAYQgLAXgVAQQgVAPgeAIQgdAIgkAAgAgxCAIAdAAQAPAAALgEQANgEAKgHQAKgHAEgLQAGgLAAgNQAAgXgPgMQgQgMgcAAIgXAAgAgXgkIAYAAQAbAAARgNQAJgHAFgJQAEgKAAgMQAAgTgMgKQgMgKgYAAIgZAAg");
	this.shape_9.setTransform(546.1,113);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("ABHBwIh4AAIgkBQIheAAIDCmDIBhAAIBDF2IhgARgAA+AmIgSiFIg9CFIBPAAg");
	this.shape_10.setTransform(509.1,113.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhhDBIAxkyIhqAAIANhPIEoAAIAABPIhtAAIgvEyg");
	this.shape_11.setTransform(479,113);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag5C9IgcgMQgMgJgLgKQgKgKgJgNQgIgMgFgQQgGgPgDgTIgDgmQAAgaAEgXQAEgXAIgXQAHgUALgTQALgTAOgQQAOgPAQgNQARgMASgHQASgJATgFQAUgEAVAAQAdAAAbAJQAaAHAVAPIgZBQQgSgOgRgIQgUgIgUAAQgZAAgUAMQgTAMgPAVQgOATgIAbQgIAaAAAbQAAAYAGASQAFARALANQALALAOAHQAOAFASABQAUgBAWgGQATgHAVgLIAABRQgUAKgZAGQgaAGgcAAQgiAAgdgLg");
	this.shape_12.setTransform(445.5,113);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAlDBIAljqIisDqIhYAAIA9mBIBZAAIgkDeICjjeIBgAAIg9GBg");
	this.shape_13.setTransform(849.6,48.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhCDCIgcj+Ig5D9IhSAAIBamCIB4AAIAcEDIBwkDIB1AAIghGCIhhAAIAYj9IhtD+g");
	this.shape_14.setTransform(804.9,48.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAlDBIAljqIisDqIhYAAIA9mBIBZAAIgkDeICjjeIBgAAIg9GBg");
	this.shape_15.setTransform(763,48.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AkKDBIA9mBIBfAAIgxEyIBeAAIAxkyIBeAAIgxEyIBeAAIAxkyIBfAAIg+GBg");
	this.shape_16.setTransform(717,48.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAADBIASh7IgvADQgeAAgWgGQgYgGgPgMQgRgNgIgTQgJgUAAgaIAEgvIASh0IBfAAIgTB2IgDAdQAAATAMAKQANAJAcAAQAVAAAQgDIAdi2IBfAAIg9GBg");
	this.shape_17.setTransform(674.1,48.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ai1B2QAZAAAmgMQAZgKAPgUIhWkEIBigNIAzC2IBeiyIBnAAIigEMQgVAjgVAXQgWAYgZAPQgYANgdAHQgbAGgiAAg");
	this.shape_18.setTransform(640,48.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AjIB0QAWgFAQgIQAQgKAMgPQALgQAKgZQAJgXALglIAxitID1AAIg9GCIhfAAIAxk0IhFAAIghB6QgPA0gPAhQgWArgQAPQgLAMgMAJQgNAIgQAGQgrANgdACg");
	this.shape_19.setTransform(599.1,48.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ag5C+IgcgOQgMgHgLgLQgKgKgJgNQgIgNgFgPQgGgPgDgSIgDgnQAAgZAEgXQAEgZAIgVQAHgVALgUQALgSAOgQQAOgPAQgNQARgLASgJQASgIATgEQAUgFAVAAQAdAAAbAIQAaAIAVAPIgZBRQgSgPgRgIQgUgIgUAAQgZAAgUAMQgTAMgPAUQgOAVgIAZQgIAbAAAbQAAAXAGATQAFARALAMQALAMAOAGQAOAHASgBQAUABAWgIQATgFAVgMIAABQQgUALgZAFQgaAHgcAAQgiAAgdgKg");
	this.shape_20.setTransform(553.6,48.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AiQDBIA9mBIBdAAIgTB/IAMAAQAjAAAaAIQAbAHASAPQASAOAJAVQAJAVAAAcQAAAQgDAQQgDAPgGAOQgGANgJALQgJAMgLAJQgiAWgWAGQgtAKgbAAgAgoB8IASAAQARAAANgFQANgFAKgJQAKgJAGgMQAFgNAAgQQAAgNgDgJQgEgKgHgGQgIgHgLgDQgLgDgNAAIgQAAg");
	this.shape_21.setTransform(508.7,48.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AiXDBIA+mBIB0AAQAfAAAXAGQAXAGAPAMQAQALAJARQAHARABAVQgBASgFAPQgFAPgKALQgJALgMAJIgaANQAbALANASQAIAKADANQAEANAAAPQABAdgMAYQgKAXgWAQQgVAPgeAIQgdAIgjAAgAgyCAIAeAAQAPAAAMgEQANgEAJgHQAJgHAGgLQAFgLAAgNQAAgXgPgMQgQgMgcAAIgXAAgAgYgkIAZAAQAcAAAQgNQAJgHAEgJQAGgKgBgMQABgTgMgKQgNgKgYAAIgYAAg");
	this.shape_22.setTransform(477,48.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("ABIBwIh5AAIglBQIhcAAIDBmDIBhAAIBEF2IhhARgAA+AlIgSiEIg8CEIBOAAg");
	this.shape_23.setTransform(440,48.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AhhDBIAxkyIhqAAIANhPIEoAAIAABPIhtAAIgvEyg");
	this.shape_24.setTransform(409.9,48.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("Ag5C+IgcgOQgMgHgLgLQgKgKgJgNQgIgNgFgPQgGgPgDgSIgDgnQAAgZAEgXQAEgZAIgVQAHgVALgUQALgSAOgQQAOgPAQgNQARgLASgJQASgIATgEQAUgFAVAAQAdAAAbAIQAaAIAVAPIgZBRQgSgPgRgIQgUgIgUAAQgZAAgUAMQgTAMgPAUQgOAVgIAZQgIAbAAAbQAAAXAGATQAFARALAMQALAMAOAGQAOAHASgBQAUABAWgIQATgFAVgMIAABQQgUALgZAFQgaAHgcAAQgiAAgdgKg");
	this.shape_25.setTransform(376.4,48.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},79).wait(1));

	// Layer 2
	this.instance_8 = new lib.Symbol21();
	this.instance_8.parent = this;
	this.instance_8.setTransform(376.4,48.2,1,1,0,0,0,15.3,20);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(20).to({regY:20.1,rotation:-6.5,y:41.7},3).to({regY:20,rotation:0,y:48.2},3).wait(54));

	// Layer 5
	this.instance_9 = new lib.Symbol24();
	this.instance_9.parent = this;
	this.instance_9.setTransform(409.9,48.2,1,1,0,0,0,15.5,19.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(21).to({regY:19.4,rotation:-7.9,y:41.7},3).to({regY:19.3,rotation:0,y:48.2},3).wait(53));

	// Layer 4
	this.instance_10 = new lib.Symbol23();
	this.instance_10.parent = this;
	this.instance_10.setTransform(439.9,48.3,1,1,0,0,0,17.9,19.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(22).to({regX:18,rotation:-7.7,x:440,y:41.8},3).to({regX:17.9,rotation:0,x:439.9,y:48.3},3).wait(52));

	// Layer 3
	this.instance_11 = new lib.Symbol22();
	this.instance_11.parent = this;
	this.instance_11.setTransform(445.5,113,1,1,0,0,0,15.3,20);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(22).to({regY:20.1,rotation:-9,x:445.6,y:106.6},3).to({regY:20,rotation:0,x:445.5,y:113},3).wait(52));

	// Layer 13
	this.instance_12 = new lib.Symbol29();
	this.instance_12.parent = this;
	this.instance_12.setTransform(477,48.2,1,1,0,0,0,15.2,19.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(23).to({rotation:-10,y:41.6},3).to({rotation:0,y:48.2},3).wait(51));

	// Layer 6
	this.instance_13 = new lib.Symbol25();
	this.instance_13.parent = this;
	this.instance_13.setTransform(479,113,1,1,0,0,0,15.5,19.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(23).to({regY:19.4,rotation:-10.2,x:479.1,y:106.6},3).to({regY:19.3,rotation:0,x:479,y:113},3).wait(51));

	// Layer 12
	this.instance_14 = new lib.Symbol28();
	this.instance_14.parent = this;
	this.instance_14.setTransform(508.7,48.2,1,1,0,0,0,14.5,19.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(24).to({regY:19.4,rotation:-13.2,y:41.7},3).to({regY:19.3,rotation:0,y:48.2},3).wait(50));

	// Layer 11
	this.instance_15 = new lib.Symbol27();
	this.instance_15.parent = this;
	this.instance_15.setTransform(509.1,113.2,1,1,0,0,0,17.9,19.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(24).to({regY:19.7,rotation:-10.7,y:106.8},3).to({regY:19.6,rotation:0,y:113.2},3).wait(50));

	// Layer 7
	this.instance_16 = new lib.Symbol26();
	this.instance_16.parent = this;
	this.instance_16.setTransform(546.2,113,1,1,0,0,0,15.2,19.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(25).to({rotation:-11.2,y:106.5},3).to({rotation:0,y:113},3).wait(49));

	// Layer 14
	this.instance_17 = new lib.Symbol30();
	this.instance_17.parent = this;
	this.instance_17.setTransform(553.6,48.2,1,1,0,0,0,15.3,20);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(25).to({regY:20.1,rotation:-9.7,x:553.7,y:41.7},3).to({regY:20,rotation:0,x:553.6,y:48.2},3).wait(49));

	// Layer 16
	this.instance_18 = new lib.Symbol32();
	this.instance_18.parent = this;
	this.instance_18.setTransform(577.8,113,1,1,0,0,0,14.5,19.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(26).to({regX:14.6,regY:19.4,rotation:-11,x:577.9,y:106.6},3).to({regX:14.5,regY:19.3,rotation:0,x:577.8,y:113},3).wait(48));

	// Layer 17
	this.instance_19 = new lib.Symbol33();
	this.instance_19.parent = this;
	this.instance_19.setTransform(599.1,48.6,1,1,0,0,0,20.1,19.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(26).to({regX:20.2,rotation:-14.7,x:599.2,y:42},3).to({regX:20.1,rotation:0,x:599.1,y:48.6},3).wait(48));

	// Layer 15
	this.instance_20 = new lib.Symbol31();
	this.instance_20.parent = this;
	this.instance_20.setTransform(624.8,113,1,1,0,0,0,18.6,19.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(27).to({regY:19.4,rotation:-12.5,x:624.9,y:106.6},3).to({regY:19.3,rotation:0,x:624.8,y:113},3).wait(47));

	// Layer 18
	this.instance_21 = new lib.Symbol34();
	this.instance_21.parent = this;
	this.instance_21.setTransform(640,48.3,1,1,0,0,0,18.2,19.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(27).to({regY:19.9,rotation:-12.7,y:41.8},3).to({regY:19.8,rotation:0,y:48.3},3).wait(47));

	// Layer 20
	this.instance_22 = new lib.Symbol36();
	this.instance_22.parent = this;
	this.instance_22.setTransform(659.3,113.2,1,1,0,0,0,17.9,19.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(28).to({regY:19.7,rotation:-9,y:106.8},3).to({regY:19.6,rotation:0,y:113.2},3).wait(46));

	// Layer 21
	this.instance_23 = new lib.Symbol37();
	this.instance_23.parent = this;
	this.instance_23.setTransform(674.1,48.2,1,1,0,0,0,15.5,19.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(28).to({regX:15.6,rotation:-10.2,y:41.6},3).to({regX:15.5,rotation:0,y:48.2},3).wait(46));

	// Layer 19
	this.instance_24 = new lib.Symbol35();
	this.instance_24.parent = this;
	this.instance_24.setTransform(711.1,113.4,1,1,0,0,0,20.1,19.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(29).to({regY:19.8,rotation:-14.4,y:106.9},3).to({regY:19.7,rotation:0,y:113.4},3).wait(45));

	// Layer 24
	this.instance_25 = new lib.Symbol40();
	this.instance_25.parent = this;
	this.instance_25.setTransform(717,48.2,1,1,0,0,0,26.7,19.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(29).to({rotation:-10,x:717.1,y:41.6},3).to({rotation:0,x:717,y:48.2},3).wait(45));

	// Layer 23
	this.instance_26 = new lib.Symbol39();
	this.instance_26.parent = this;
	this.instance_26.setTransform(752,113.1,1,1,0,0,0,18.2,19.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(30).to({regY:19.9,rotation:-13.7,y:106.7},3).to({regY:19.8,rotation:0,y:113.1},3).wait(44));

	// Layer 25
	this.instance_27 = new lib.Symbol41();
	this.instance_27.parent = this;
	this.instance_27.setTransform(763.1,48.2,1,1,0,0,0,18.7,19.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(30).to({rotation:-12.5,y:41.6},3).to({rotation:0,y:48.2},3).wait(44));

	// Layer 22
	this.instance_28 = new lib.Symbol38();
	this.instance_28.parent = this;
	this.instance_28.setTransform(786.1,113,1,1,0,0,0,15.5,19.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(31).to({regY:19.4,rotation:-13.2,y:106.6},3).to({regY:19.3,rotation:0,y:113},3).wait(43));

	// Layer 28
	this.instance_29 = new lib.Symbol44();
	this.instance_29.parent = this;
	this.instance_29.setTransform(804.9,48.3,1,1,0,0,0,23.4,19.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(31).to({rotation:-11.5,y:41.7},3).to({rotation:0,y:48.3},3).wait(43));

	// Layer 27
	this.instance_30 = new lib.Symbol43();
	this.instance_30.parent = this;
	this.instance_30.setTransform(829,113,1,1,0,0,0,26.7,19.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(32).to({regY:19.4,rotation:-10,y:106.6},3).to({regY:19.3,rotation:0,y:113},3).wait(42));

	// Layer 29
	this.instance_31 = new lib.Symbol45();
	this.instance_31.parent = this;
	this.instance_31.setTransform(849.6,48.2,1,1,0,0,0,18.7,19.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(32).to({regY:19.4,rotation:-10.4,y:41.7},3).to({regY:19.3,rotation:0,y:48.2},3).wait(42));

	// Layer 26
	this.instance_32 = new lib.Symbol42();
	this.instance_32.parent = this;
	this.instance_32.setTransform(875,113,1,1,0,0,0,18.7,19.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(33).to({regY:19.4,rotation:-11,x:875.1,y:106.6},3).to({regY:19.3,rotation:0,x:875,y:113},3).wait(41));

	// Layer 30
	this.instance_33 = new lib.Symbol46();
	this.instance_33.parent = this;
	this.instance_33.setTransform(911,113,1,1,0,0,0,19.6,19.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(34).to({rotation:-9.7,x:910.9,y:106.5},3).to({rotation:0,x:911,y:113},3).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,930.5,160);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
		
		this.back.x = - stage.mouseX / -25;
		this.back.y = - stage.mouseY / -25;
		}
		
		this.addEventListener("tick", fl_CustomMouseCursor1.bind(this));
		
		function fl_CustomMouseCursor1() {
		
		this.bigs.x = - stage.mouseX / 15;
		this.bigs.y = - stage.mouseY / 15;
		}
		
		
		this.addEventListener("tick", fl_CustomMouseCursor2.bind(this));
		
		function fl_CustomMouseCursor2() {
		
		this.smals.x = - stage.mouseX / 35;
		this.smals.y = - stage.mouseY / 35;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 9
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(688.6,67.7,0.87,0.87,0,0,0,157,48.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 5
	this.instance_1 = new lib.Symbol48();
	this.instance_1.parent = this;
	this.instance_1.setTransform(960,732,1,1,0,0,0,960,238);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 6
	this.instance_2 = new lib.Symbol53();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1531.5,350,1,1,0,0,0,135.5,305);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Layer 8
	this.instance_3 = new lib.Symbol55();
	this.instance_3.parent = this;
	this.instance_3.setTransform(367,405.5,1,1,0,0,0,253,240.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Layer 3
	this.bigs = new lib.Symbol47();
	this.bigs.parent = this;
	this.bigs.setTransform(0.1,0.1,0.975,0.975,0,0,0,-27.7,-34.9);
	this.bigs.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.bigs).wait(1));

	// Layer 2
	this.instance_4 = new lib.Symbol57();
	this.instance_4.parent = this;
	this.instance_4.setTransform(965.5,613.9,1,1,0,0,0,240.5,62.5);
	new cjs.ButtonHelper(this.instance_4, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Layer 7
	this.instance_5 = new lib.Symbol51();
	this.instance_5.parent = this;
	this.instance_5.setTransform(963.7,368.7,1.133,1.133,0,0,0,184.6,179);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Layer 4
	this.smals = new lib.Symbol49();
	this.smals.parent = this;
	this.smals.setTransform(-1,1.6,1,1,0,0,0,-389.6,-262.6);
	this.smals.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.smals).wait(1));

	// Layer 1
	this.back = new lib.Symbol50();
	this.back.parent = this;
	this.back.setTransform(32.6,1.8,1,1,0,0,0,94.6,35.8);

	this.timeline.addTween(cjs.Tween.get(this.back).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(898,416,2051.9,1282.4);
// library properties:
lib.properties = {
	width: 1920,
	height: 900,
	fps: 24,
	color: "#400200",
	opacity: 1.00,
	manifest: [
		{src:"images/back.jpg?1487774335306", id:"back"},
		{src:"images/basket.png?1487774335306", id:"basket"},
		{src:"images/button.png?1487774335306", id:"button"},
		{src:"images/chel.png?1487774335306", id:"chel"},
		{src:"images/foot.png?1487774335306", id:"foot"},
		{src:"images/footer.png?1487774335306", id:"footer"},
		{src:"images/logo.png?1487774335306", id:"logo"},
		{src:"images/logo1.png?1487774335306", id:"logo1"},
		{src:"images/logo2.png?1487774335306", id:"logo2"},
		{src:"images/logo3.png?1487774335306", id:"logo3"},
		{src:"images/logo4.png?1487774335306", id:"logo4"},
		{src:"images/logo5.png?1487774335306", id:"logo5"},
		{src:"images/LogosSportsbig.png?1487774335306", id:"LogosSportsbig"},
		{src:"images/LogosSports_small.png?1487774335306", id:"LogosSports_small"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;