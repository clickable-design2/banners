(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,419);


(lib.book = function() {
	this.initialize(img.book);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,230,97);


(lib.chuvak_03 = function() {
	this.initialize(img.chuvak_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,212,442);


(lib.chuvak_06 = function() {
	this.initialize(img.chuvak_06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,63,166);


(lib.chuvak_08 = function() {
	this.initialize(img.chuvak_08);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,74,196);


(lib.chuvak_10 = function() {
	this.initialize(img.chuvak_10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,156,139);


(lib.chuvak_12 = function() {
	this.initialize(img.chuvak_12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,91,174);


(lib.chuvak_14 = function() {
	this.initialize(img.chuvak_14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,54,186);


(lib.chuvak_17 = function() {
	this.initialize(img.chuvak_17);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,111,220);


(lib.chuvak_25 = function() {
	this.initialize(img.chuvak_25);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,131,196);


(lib.fivemln = function() {
	this.initialize(img.fivemln);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,62);


(lib.fon = function() {
	this.initialize(img.fon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,469);


(lib.handcursor = function() {
	this.initialize(img.handcursor);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.imac = function() {
	this.initialize(img.imac);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,220,176);


(lib.lenta = function() {
	this.initialize(img.lenta);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,713,209);


(lib.logo_top = function() {
	this.initialize(img.logo_top);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,94,75);


(lib.pod = function() {
	this.initialize(img.pod);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,63,95);


(lib.rou = function() {
	this.initialize(img.rou);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,166,166);


(lib.such = function() {
	this.initialize(img.such);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,378,361);// helper functions:

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


(lib.Символ68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AmBGCQifigAAjiQAAjhCfigQCgifDhAAQDiAACgCfQCfCgAADhQAADiifCgQigCfjiAAQjhAAigifg");
	this.shape.setTransform(54.5,54.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ68, new cjs.Rectangle(0,0,109,109), null);


(lib.Символ66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.handcursor();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.635,0.635);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ66, new cjs.Rectangle(0,0,63.6,63.6), null);


(lib.Символ54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(6,1,1).p("AEytLIFQAJIgIE1ApcotIAIk2IFdAKAklNMIlcgJIAJlQAJeIUIgKFQIlPgJ");
	this.shape.setTransform(64.2,86.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-3,134.3,179.5);


(lib.Символ52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo_top();
	this.instance.parent = this;
	this.instance.setTransform(-47,-37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ52, new cjs.Rectangle(-47,-37.5,94,75), null);


(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.such();
	this.instance.parent = this;
	this.instance.setTransform(5,-140,0.77,0.77);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ51, new cjs.Rectangle(5,-140,291.2,278.1), null);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CC33CC").ss(3,1,1).p("AAqAAQAAARgNAMQgMANgRAAQgQAAgNgNQgMgMAAgRQAAgQAMgNQANgMAQAAQARAAAMAMQANANAAAQg");
	this.shape.setTransform(4.2,4.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ47, new cjs.Rectangle(-1.5,-1.5,11.3,11.3), null);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CC33CC").ss(3,1,1).p("AHCAAQAAC7iECDQiDCEi7AAQi6AAiEiEQiDiDAAi7QAAi6CDiEQCEiDC6AAQC7AACDCDQCECEAAC6g");
	this.shape.setTransform(45,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ43, new cjs.Rectangle(-1.5,-1.5,93,93), null);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC33CC").s().p("ArvARIApgNIA1jDIBpAAIgbCgIAAAlICtAAIgIjFIBnAAIAFDDIArAOIgOCeIgOABIgfABIgsACIgMhYIkBAAIgPBVIhSAOIgDABgAjcBgQgOgDgEgIIAAhCIArgNIAxjFIBYAAIgBATIB1gBIAAgSIBbAAIAmDFIAqAOIgBA6IizAAIABg8IArgNIgZhrIiJAAIgaBsIAsAOIAABCIiJAOgAY8BcIgEh9ICOAIIgCB1gAVIiXIgqAAIAACcIArANIAAA7IjKAAIAAg7IAsgNIAAjEIEFAAIA4DEIAqANIAAA7IiHABIgGACIgEACgAMoBBQgrgOgigbQg9gtgEiNIAAgdIB/AAIABAdIADAhQAEAhALAXQAKAaAUAMQAUAMAfAAQAeAAAVgNQAUgNALgaQAKgYAFgkIAEgbIACgdICBAAIgBAdQgEAvgGAXQgVBAgRAbQgxBOh7AAIgHAAQgwAAgpgMgAxGBBQgsgOgigbQg8gtgEiNIgBgdICAAAIABAdIADAhQAEAhAKAXQAKAaAVAMQAUAMAfAAQAeAAAUgNQAVgNAKgaQAKgYAGgkIAEgbIACgdICBAAIgCAdQgDAvgGAXQgVBAgRAbQgxBOh7AAIgHAAQgxAAgogMgAD9BNIAAg8IAsgNIAAjDIBzAAIAAAZIAaAAQATAAAUgGQARgGANgNICDAAIgCAGQgDAMgFALIgIAPQgMATgVAPQgWAPgiAKQghAIgyABIgjgCIAABVIAqAOIAAA7gA23BNIAAg8IAsgNIAAjDIByAAIAADDIArAOIAAA7gA7IBNIAAg8IArgNIABjDIBzAAIAADDIAqAOIAAA7gAZBgvIgKiQICSAAIgLCXg");
	this.shape.setTransform(173.7,49.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC66CC").s().p("AYuCYIgRkvIC1AAIgREvgASjCYIAAi2IgsgIIAAhRICeAKIAADXIAqAAIA9jXICLgKIAABRIgrAIIg4CrIAEALgAPcCYIAAgCIAAgMIAAgCIAAgFIAAgHIgCgrIgEgbQgFgggLgUQgWgog2AAQhXAAgPB3QgDAUAAAXIAAAMIAAACIAAAMIAAACIiAAAIAAgCIAAgKIABgCIAAgCIAAgMQACgWADgVIAEgUQAJgnAPghQAQgiAZgYQAZgZAhgOQAYgKAagEIA0gFQB/gCAwBNQAlA4AKBNQACAVABAWIAAAMIAAACIAAAAIAAAMIAAACgAHzCYIACgCIADgDIAHgJIABgCIAEgMQADgMgBgOQAAgJgBgIQgDgMgFgJQgIgPgNgJQgNgJgOgEIgcgFIgeAAIAACGIhyAAIAAi2IgsgJIAAhQIB6AGQBDACA9ATQAdAIAZAPQAYAPAUAUQATAUAKAdQALAdACAlIAAAEIgBAiIAAAFIgBAMIAAACIgDAMIgBACgAAxCYIAAgWIgYiSIg3AAIgjCVIgBATIhYAAIAyjMIg1ADIgDhEID7ANIAyEAgAmnCYIgIiyIhkAIIgdCqIhqAAIA3jUIg1AEIgDg/IFTAJIAIEGgAuTCYIAAgCIAAgMIAAgCIAAgFIAAgHIgCgrIgDgbQgGgggLgUQgWgog2AAQhWAAgPB3QgDAUAAAXIgBAMIAAACIAAAMIAAACIh/AAIAAgCIAAgKIAAgCIAAgCIABgMQABgWAEgVIAEgUQAJgnAPghQAQgiAYgYQAZgZAigOQAYgKAagEIA0gFQB+gCAxBNQAkA4AKBNQADAVABAWIAAAMIAAACIAAAAIgBAMIAAACgA2UCYIAAimIiegNIAACzIhzAAIAAi2IgsgJIAAhRICmAKIEKAAIAAEGg");
	this.shape_1.setTransform(174.6,15.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ35, new cjs.Rectangle(0,0,349.2,68.8), null);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC33CC").s().p("AlSCPIhJgQIgsgDIAAg8IArgMIAAjHIFcAAIAEAKIAGATQAEARAEAWIAEAkQAAAbgJAaQgKAcgRAaQgOAVgZARQgZARgiANQgWAHgaAFIg2ADgAkrh8IAAC0IA/gBQAUgBASgIQARgJARgQQANgLAHgRQAHgSAAgYIgDghQgDgOgNgJQgMgIgRgFIgkgGIgygCgAHdA+IArgNIABjEIDVAAIhiCtIAAAXIArANIgBA7IjBABQgHABgBAEgACGBtQgrgOgigbQg8gtgEiNIAAgdIB+AAIABAdIADAhQAEAhALAYQAKAYAUAMQAUAMAfAAQAeAAAVgNQAUgMALgaQAKgYAFgkIAEgbIACgdICBAAIgBAdQgEAvgGAXQgVBAgRAbQgxBOh7AAIgHAAQgwAAgpgMgALhB5IAAg7IArgNIABjEIByAAIgBDEIAsANIgBA7gAsiBtQgqgLghgXQg7grgBiWIAAgWIAAgHICAAAIAAAJIAAAUQAAASACASQAEAZAIAVQAIAWATAPQATAQAeAJQAoAJAgAAIAmAAIAchkIBHAAIgZCgIh4AYIg2ACQgzAAgqgMg");
	this.shape.setTransform(93.8,53.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC66CC").s().p("AMjDDIAAg7IgNgCIgjA9IjVAAIAAi2IgrgJIAAhQICdAJIAADjIANADICCjmIB1AAIAAEGgAFYDDIAAgCIAAgMIAAgCIAAgFIAAgHIgDgrIgDgaQgFghgMgUQgWgpg1AAQhXAAgPB4QgDAUAAAXIgBAMIAAACIAAAMIAAACIh/AAIAAgCIAAgKIABgCIAAgCIAAgMQACgVADgWIAEgUQAJgnAPgiQAQghAYgYQAagZAhgOQAYgJAagFIA0gFQB+gCAxBNQAlA4AKBNQACAVABAWIAAAMIAAACIAAABIAAALIAAACgAmGDDIgBi0IgqgIIgBhRICnAOIA3gLIAtgFQAXAAARAFQASAFAMAJQAVASAOAZQAPAZAEAaIACAdQgBAlgJAVIgEAFQgNAVgPAFIACAPIAPABIALAFIADADIACACIAGAMIABACgAjYALIgZAJIgVALIgOAPIAABwIAVACIAvgCQAUgCARgIQARgHAMgOIADgDQAKgNAAgUQgBgGgFgDIgIgFIAOAAIgBgQQgCgbgSgNQgRgMgYAAgAuTDDIAAgCIAAgMIAAgCIABgMQACgWAFgVQAIgnARgmQARgkAZgZQAZgZAfgOQAigNAlgFQAmgGAiAAIB9AAIAdC4IhKAAIgahjIglACQggAAgnAMQgbAIgTASQgUASgIAbIgOA2IgCAUIgBAMIAAACIgBAMIAAACgAJhhuIAXhVIDjAqIgPA4g");
	this.shape_1.setTransform(91.7,19.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ34, new cjs.Rectangle(0,0,187.7,68.6), null);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC33CC").s().p("ACmCPIhJgPIgsgEIAAg8IArgNIAAjGIFcAAIAEAKIAGATQAFARAEAWIADAkQAAAbgJAbQgJAbgSAaQgOAVgYASQgZAQgjANQgWAHgaAEIg2AFgADNh7IABC0IA/gCQATAAASgJQASgJARgPQAMgMAHgRQAHgRAAgZIgDgiQgDgNgMgIQgNgJgRgFIgkgGIgigDgAlCBtQgsgNgigcQg8gtgEiNIgBgdICAAAIABAdIADAhQAEAhAKAXQALAZAUALQAUANAfAAQAeAAAUgNQAVgMALgaQAJgYAGgkIAEgbIACgdICBAAIgCAdQgDAugGAYQgVBAgRAaQgxBPh7AAIgHAAQgxAAgogMgAL0B5IAAg8IAsgLIABjFIByAAIgBDFIAsAMIgBA7gAHxB5IAAg8IArgLIAAjFIDWAAIhiCtIAAAYIArAMIgBA7gAqcB5IAAg8IAsgLIgYhsIgNhWIAAgDIBeAAIAlDFIApALIAAA8gAu9B5IAAg8IAqgLIAxjFIBYAAIgLBZIgZBsIAsALIAAA8g");
	this.shape.setTransform(95.8,42.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC66CC").s().p("AMLCMIAAg7IgMgDIgjA+IjVAAIAAi2IgrgIIgBhRICeAJIAADiIAMADICDjlIB1AAIAAEGgABHCMIgBizIgqgIIAAhSICmAOIA3gMIAtgEQAXAAASAFQARAFAMAJQAVASAOAZQAPAZAEAaIACAdQAAAlgKAVIgDAFQgNAVgQAFIACAOIAQACIALAFIACADIACACIAGAMIABACgAD1grIgZAIIgVAMIgOAOIAABwIAVACIAwgCQATgCARgIQARgHAMgOIADgDQAKgNAAgVQAAgFgGgEIgIgEIAOAAIgBgQQgCgagSgNQgRgMgXAAgAicCMIAAgCIAAgMIAAgCIAAgFIAAgHIgCgrIgDgbQgGgggLgTQgWgpg2AAQhWAAgPB3QgDAUAAAXIgBAMIAAACIAAAMIAAACIh/AAIAAgCIAAgKIAAgCIAAgCIABgMQABgWAEgVIAEgUQAJgnAPghQAQgiAYgYQAZgZAigOQAYgKAagEIA0gFQB+gCAxBNQAkA5AKBMQADAVABAWIAAAMIAAACIAAAAIgBAMIAAACgAqqCMIABgdIgkiRIgpAAIgnCSIgBAAIgCAcIhYAAIAzjTIg0AEIgDhAID8AJIAzEGg");
	this.shape_1.setTransform(98,14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ33, new cjs.Rectangle(0,0,191.6,57.5), null);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fivemln();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ31, new cjs.Rectangle(0,0,300,62), null);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(78.1,8.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ30, new cjs.Rectangle(0,0,156.2,17.7), null);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhRbAImIAAxLMCi3AAAIAARLg");
	this.shape.setTransform(521.2,55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ27, new cjs.Rectangle(0,0,1042.4,110), null);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC66").s().p("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");
	this.shape.setTransform(356.1,50);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("EA1PACtIgJhfIgKj5IC1gBIgID5IgJBggEAylACtIAAgbIgPAbIi7AAIAAh9IgigGIAAhJICGALIAACzIBlizIBlAAIAADBgEAsbACtIABhxIgigHIAAhJICGAMIAAC1gEAnuACtIAAh+IgigFIAAhJICGALIABB+QBmgEAoAmQAPAOAJATgEAk3ACtIgFh0IhDAFIgTBvIhdAAIAliOIgnACIgDhAIDPAMIBDAAIAHDAgAaGCtIgph9IghgGIgBhJIB3ALIAwCnIAWAAIgBhjIghgGIAAhJICGALIAACoIAXgBIAuinIBvgKIAIBIIghAGIgpB9gAWXCtIgShvIgiAAIgbBvIhNAAIAiiKIgnACIgDhAIDPAMIAkC8gAN/CtIAAh9IgigGIAAhJICGALIAACoIAWgBIAvinIB3gLIAABJIghAGIgpB9gADcCtIAAh3IhLgHIgWBPIhDgBIAXiRIAAgLICEALID8AAIAWCRIhDAAIgXhPIhKAHIAAB4gAkFCtIAAh+IgigFIAAhJICGALICyAAIAXCQIhDAAIgWhOIhwALIABBlIBvAAIABAPgAnKCtIgShvIgiAAIgbBvIhNAAIAiiKIgnACIgDhAIDPAMIAkC8gAv1CtIAAh4IghgGIAAhIICFAKQAxgOAjABQAiABATAQQAnAdAFAuIAAACQAGAtgNAYQgNAXgOAEQAPAAAIAHIABAAIADAEgAtYAxQgRABgRAHQgQAHgGAJIgBBSQAcADAXgEQATgEAQgKQAPgKABgXIAAgWQgBgVgOgHQgMgIgQAAIgCAAgAzLCtIABhxIgigHIAAhJICGAMIAAC1gA34CtIAAh+IgigFIAAhJICGALIABB+QBmgEAoAmQAPAOAJATgA6UCtQAEgLAAgPQAAgZgMgMQgNgMgOgEQgOgFgZACIAABSIhkAAIAAh+IgigFIAAhJICGALQBQAFAxAnQAwAnACBKIgBAkgEgiiACtIAAh7IgigGIAAhIICGALICzAAIAXCPIhEAAIgWhNIhwALIAABxgEglbACtIAAgbIgPAbIi8AAIAAh9IgigGIAAhJICGALIAACzIBmizIBlAAIAADBgEgrlACtIAAhxIghgHIAAhJICFAMIAAC1gEgwTACtIAAh+IgigFIAAhJICGALIABB+QBmgEApAmQAPAOAJATgEgzHACtQgLgIgRgFIgjgGIgjgCIgsADIAAASIhwAAIgBjcIgqgJIAAhRICmAOIA3gMIAtgFQAXAAASAFQARAFAMAKQAVARAOAaQAPAZAEAaIACAdQAAAqgNAUQgNAWgQAEIACAPIAQABIALAFQAHAIAIAVQAFANAEATgEg0XgAzIgZAIIgVAMIgOAOIAABvIBFAAQATgCARgHQARgIAMgOQANgNAAgXQAAgGgGgDIgIgFIAOAAIgBgPQgCgbgSgMQgRgNgXAAgEAwOgAqIAThOIC8AhIgNA3g");
	this.shape_1.setTransform(356.9,17.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ25, new cjs.Rectangle(0,0,713.9,65.5), null);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC66").s().p("EgigACbIgLhDIi+AAIgMBDIhOAAIgBgGIAAgGIgKh6IAhgLIAsikIBdAAIgZCPIAAAWIB7gBIgHikIBcAAIAFCkIAhALIgLCGgAM3BcQgVgCgEgOIAAg3IAggGIAqipIBNAAIAAABIgBAYIBQgBIAAgYIBPAAIAhCoIAhAGIgBA5IiXAAIAAg4IAigGIgShOIhiAAIgTBOIAhAGIABA9IhsALgA1OBcQgWgCgEgOIAAg3IAhgGIAqipIBNAAIgBABIAAAYIBPgBIAAgYIBQAAIAgCoIAhAGIgBA5IiXAAIABg4IAhgGIgShOIhhAAIgTBOIAhAGIABA9IhtALgEAkKABOQgigLgbgWQgbgWgNgsQgLgqABg9IAAgJIAAgLIABgKIBvAAIgBAKIAAAMIACAsIAJApQAMAoAtAKQAdAJAZAAIAZgBIAVhNIBDAAIgVCHIhhATIgsABQgoAAghgLgAoLBOQgigLgbgWQgbgWgNgsQgLgqABg9IAAgJIAAgLIABgKIBvAAIgBAKIAAAMIACAsIAJApQAMAoAtAKQAdAJAZAAIAZgBIAVhNIBDAAIgVCHIhhATIgsABQgoAAghgLgA5kBOQgigLgagWQgbgWgNgsQgMgqABg9IAAgJIABgLIAAgKIBvAAIAAAKIgBAMIADAsIAIApQAMAoAtAKQAeAJAYAAIAZgBIAWhNIBDAAIgWCHIhgATIgsABQgoAAgigLgEAtxABYIgEh+ICOAIIgCB2gADmBNIAAg4IAigLIAXhvIgggCQgWgBgSgUQgIgIgHgMIgCgCIgCgIIDDAAIgaCkIAhALIAAA4gEgq0ABNIAAg4IAjgLIAWhvIgggCQgfgCgYgnIgBgCIgDgIIDDAAIgZCkIAhALIAAA4gAWIAvQgZgPgPghQgPgigEg2IgXgBIgFAAIgDAAIgBAPIABBVIAEABIAdAIIAAA5IioAAIAAg5IAEAAIAZgIIAEgBIABikIDxAAIAAAGIAEA8QADAZAIARQAOAjAsAAQAVAAAPgKQAOgJAIgTQAIgTADgaQADgOABgQIABgUIAAgJIAAgBIBwAAIAAAKIAAAIIAAAMQgCApgIAiQgKAngUAcQgoA6hjAAIgFAAQhIAAg1gdgEAqiABMIAAg5IAhgJIAAg3IgkAAIggB5Ih5AAIAAg5IAEAAIAZgIIAEgBIAYhSQghgUgHggIgCgGIgCgYIBnAAQACAGAEAEIABABQAMAMAPAEIARADQAKABANAAIAAgfIBlAAIAACkIAhAJIAAA5gAdZBMIABg4IAhgKIAAikIBlAAIAACjIAhALIABA4gAJmBMIAAg5IAigJIAAhwIhaABQgXAAgOgJQgJgGgGgIIgGgJIgEgLIgDgKID/AAIAACkIAiAJIAAA5gAgwBMIABg4IAhgKIgRhOIgJhCIAAgUIBPAAIAfCkIAhAKIAAA4gAkPBMIAAg4IAhgKIApikIBOAAIgBAVIgJBBIgTBOIAhAKIAAA4gEgg0ABMIAAg5IAigJIAAikIDVAAIABA1IhxAAIgBBkIBwALIAWhOIBEAAIgXCQgEgv9ABIIAAg7IAsgNIAAiaIByAAIAACaIAsANIAAA7gEAt2gAzIgKhnICSAAIgLBtg");
	this.shape.setTransform(326.9,50);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("EAvHACtIgIhfIgKj5IC1gBIgID5IgJBggEAsfACtIAAhSQgZgBgOAEQgPAFgMALQgMAMAAAZQAAAPAEALIhnAAIgDgjQAAglAOgdQAOgcAXgUQAXgUAhgKQAggLApgDICGgLIAABJIgiAGIAAB9gEAj3ACtQABgWAEgVQAHgfANgdQAbg7A1gWQAYgJAZgEIAxgFIAtAAIBKALIAWCIIhFAAIgThHIgzAFIgbAHQgVAFgNANQgOANgHAUQgJAegDAhgAfWCtIAAh3IhLgHIgWBPIhDgBIAXiRIAAgLICFALID7AAIAWCRIhDAAIgWhPIhLAHIAAB4gAaoCtQgBghgEgYQgDgYgJgPQgPgegoAAQhJAAgCB+IjxAAIAAh+IgFAAIgFgBIgTgDIgGgBIAAhJIAMABIAJABIByAJIAACzIAJAAIAHgBIARAAQADgcAJgaQAHgaANgXQAbgxAtgRIAwgPQAYgGAZACQBAAFAyArQAvApAEBygARfCtIgShvIgjAAIgaBvIhNAAIAhiKIgmACIgDhAIDPAMIAkC8gAJHCtIgCgOIADhvIgigGIAAhJIB3ALIAICkIA+ADIAAinIBjAAIABDBgAEeCtIgoh9IgjgGIAAhJIB4ALIAvCnIAWAAIAYipIBugJIAABJIgiAFIgTB+gAAyCtIAAgGIgbhsIgXAAIgdBuIAAAEIhNAAIAiiPIgnADIgChBIDOAMIAkDBgAofCtQACgWAFgVQAGgfANgdQAbg7A1gWQAXgJAZgEIAygFIAuAAIBJALIAVCIIhDAAIgThHIg0AFIgbAHQgVAFgOANQgNANgGAUQgLAegCAhgAwnCtIgShvIgiAAIgaBvIhOAAIAiiKIgmACIgEhAIDPAMIAkC8gA53CtQABgWAFgVQAGgfAOgdQAbg7A1gWQAXgJAZgEIAxgFIBVAEIAiAHIAWCIIhEAAIgThHIgzAFIgcAHQgUAFgOANQgOANgGAUQgKAegDAhgA+3CtIAAh+IgjgFIAAhJICGALIC0AAIAXCQIhEAAIgWhOIhxALIABBlIBwAAIABAPgEghuACtIgGh0IhCAFIgTBvIhdAAIAliOIgoACIgChAIDPAMIBDAAIAHDAgEgp7ACtIgph9IgigGIAAhJIB3ALIAvCnIAXAAIAXipIBvgJIAABJIgiAFIgTB+gEgt2ACtIAAgEIh7ABQgaAAgQgJQgQgJgJgQQgJgPgDgVIgChLIAFhNIgrgHIgBhSICLAKIAKDUIBeAEIAAjYIByAAIAAEwg");
	this.shape_1.setTransform(317.8,17.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ24, new cjs.Rectangle(0,0,635.6,65.5), null);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC66").s().p("A4oCWIgLhDIi/AAIgLBDIhOAAIgBgGIgLiAIAigLIApiaIBeAAIgXCFIAAAWIB7gBIgHiaIBbAAIAFCaIAiALIgMCGgAA2BHIAAg3IAhgGIAnifIBPAAIAAAPIBQgBIAAgOIBRAAIAeCeIAiAGIgBA5IiXAAIAAg4IAigGIgShOIhiAAIgTBOIAhAGIABA9IhUAJIgvABQgWgCgEgOgEgo0ABHIAAg3IAggGIAoifIBPAAIgBAPIBQgBIAAgOIBRAAIAfCeIAhAGIgBA5IiXAAIABg4IAhgGIgShOIhiAAIgTBOIAhAGIABA9IhTAJIgvABQgWgCgEgOgAToBJQgjgLgagWQgbgWgNgsQgNgtAChDIABgLIBvAAIAAAMIACAsIAJApQAMAoAsALQAeAIAYAAIAagBIAVhNIBDAAIgWCHIhgATIgsABQgoAAghgLgEgguABSIhmgLIgXiQIBEAAIAVBOIAZAAQAZAAAegIQATgEAIgKQAKgJAAgPIAEhBIh3AAIAAgJIABgiIDPAAIgHAJIABABQAMACAJAUQALAUgLAuQgGAegKAVQgKAWgNAPQgOAPgPAKQgRAJgSAGQgbAGggAAIgbgBgEAzGABHIAAg5IAhgJIAAg3IgkAAIgfB5Ih6AAIAAg5IAEAAIAZgIIAFgBIAXhSQgkgWgFgkIgCgOIBtAAIABABQAMAMAPAEQAOAFAZgBIAAgVIBlAAIAACaIAhAJIAAA5gEAtwABHIAAg4IAhgKIACiaIBkAAIgBCaIAiAKIgBA4gEAqnABHIAAg4IAigKIAAiaIC1AAIhQCPIAAALIAhAKIgBA4gEAocABHIgvixIgdAAIguCxIh5AAIAAg4IAhgKIAtiaIDQAAIAsCaIAiAKIAAA4gEAhvABHIAAg4IAigKIABiaIBkAAIAACaIAiAKIgBA4gAemBHIAAg4IAhgKIAAiaIC2AAIhQCPIAAALIAgAKIAAA4gAZmBHIAAg4IAigKIAAiaIBkAAIAACZIAiALIABA4gAJcBHIAAg5IAhgJIAAg3IgkAAIggB5Ih5AAIAAg5IADAAIAZgIIAFgBIAYhSQglgWgFgkIgBgOIBsAAIABABQAMAMAPAEQAPAFAZgBIAAgVIBkAAIAACaIAiAJIAAA5gAiEBHIAAg5IAigJIAAh6IhvAAIABB6IAgAJIAAA5IinAAIAAg5IAhgJIAAiaIE4AAIAACaIAhAJIAAA5gAoQBHIAAg5IAjgJIAAhwIhaABQgXAAgOgJQgOgJgHgOIgFgLID8AAIABCaIAhAJIAAA5gAtjBHIAAg4IAggKIACiaIBkAAIgBCaIAiAKIgBA4gAwuBHIAAg4IAjgKIAAiaIC1AAIhRCPIAAALIAiAKIgBA4gAzpBHIAAg5IAigJIAAh6IhvAAIABB6IAgAJIAAA5IinAAIAAg5IAhgJIAAiaIE5AAIAACaIAhAJIAAA5gEgt+ABHIAAg5IAigJIAAiaIBkAAIAAAVQAXABARgFQAPgEAMgMIAAgBIBuAAIgGAYQgEANgIALQgJALgNAKQgNAKgSAHQgTAHgaADQgaADgigBIAAA3IAhAKIAAA5gEgxcABEIAAg8IArgMIAAiRIBzAAIAACRIArAMIAAA8gEg1uABEIAAg8IAsgMIAAiRIBzAAIABCQIAqANIAAA8g");
	this.shape.setTransform(343.9,47.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("EAzoACiIAAhbQgZgBgOAEQgOAEgMAMQgMALAAAZQgBAYALAMIhtAAIgEgtQABglAOgcQANgdAXgTQAXgTAhgMQAhgKAogDICGgLIAABIIghAHIAACGgEAuTACiIAAgkIgVAkIi1AAIAAiGIgigHIAAhIICGALIAACzIBlizIBlAAIAADKgEAl3ACiIAAgCIgqiEIgigHIAAhIIB2ALIAvCmIAdAAIAvimIB3AAIAAA9IgiAHIgrCEIABACgEAiSACiIAAgkIgVAkIi2AAIAAiGIghgHIAAhIICFALIAACzIBmizIBlAAIAADKgAaICiIAAiAIhLgIIgXBQIhCgBIAWiRIAAgLICFALID8AAIAVCRIhCAAIgXhPIhLAHIAACBgAR5CiQABgaAFgaQAHgfANgeQAbg6A1gWQAYgJAYgFIAygFIAtABIBKAKIAWCJIhFAAIgShHIg0AEIgbAHQgVAGgOAMQgNANgHAUQgLAjgCAmgAJ+CiIAAhbQgZgBgOAEQgOAEgNAMQgMALAAAZQgBAYALAMIhsAAIgEgtQAAglAOgcQANgdAYgTQAXgTAhgMQAggKApgDICGgLIAABIIgiAHIAACGgAEdCiIAAgKIgShvIgiAAIgbBwIgBAJIhPAAIAkiTIgmABIgEhAIDPAMIAnDGgAk2CiIAAiGIghgHIAAhIICHALIgBCbIBvAAIAAibIBkAAIAADKgAqGCiQgDgLgCgMIADhvIgigHIAAhIIB3ALIAICkIA+ACIAAimIBjAAIAADKgAtBCiIAAgkIgVAkIi1AAIAAiGIgjgHIAAhIICGALIAACzIBmizIBlAAIAADKgA2bCiIAAiGIghgHIAAhIICHALIgBCbIBvAAIAAibIBlAAIAADKgA5RCiIgFh9IhEAEIgUB5IheAAIAoiXIgnACIgEhAIDPAMIBEAAIAGDJgEghPACiIABgYIBzAAIgFhAQgBgOgJgKQgJgJgRgFIgbgHIgzgDIgVBPIhEABIAXiSQAqgJAfgCQAhgCAmADQAmADAjAPQAiAOALAdIAXBGQAOAygPAUIgIALgEglOACiIAAgKIgShvIgiAAIgbBwIAAAJIhPAAIAkiTIgnABIgDhAIDPAMIAmDGgEgq1ACiQAMgLgBgZQAAgZgMgMQgNgLgOgFQgOgEgZABIAABcIhkAAIAAiHIgigGIAAhIICGALQBQAFAxAmQAwAoADBJIgCAtIgBABgEgwxACiIAAjZIiegNIAADmIhzAAIABjpIgtgJIAAhRICmAKIEKAAIAAE5g");
	this.shape_1.setTransform(343.9,16.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ23, new cjs.Rectangle(0,0,687.7,62.4), null);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.chuvak_03();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(0,0,212,442), null);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.chuvak_06();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ21, new cjs.Rectangle(0,0,63,166), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.chuvak_08();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(0,0,74,196), null);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.chuvak_10();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(0,0,156,139), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rou();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.067,0.067);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(0,0,11.1,11.1), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rou();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(0,0,166,166), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.chuvak_12();
	this.instance.parent = this;
	this.instance.setTransform(0,-2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(0,-2,91,174), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.chuvak_14();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(0,0,54,186), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.chuvak_17();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(0,0,111,220), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.chuvak_25();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(0,0,131,196), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fon();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.833,0.833);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(0,0,666,390.5), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.back();
	this.instance.parent = this;
	this.instance.setTransform(0,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(0,-70,700,419), null);


(lib.Символ67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ66();
	this.instance.parent = this;
	this.instance.setTransform(-0.5,42.2,1,1,-24.7,0,0,31.8,31.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:1.5,x:32.4,y:40},14,cjs.Ease.get(-1)).to({regX:31.7,rotation:29.7,x:67.8,y:37.7},15,cjs.Ease.get(1)).to({regX:31.8,rotation:1.5,x:32.5,y:40.1},15,cjs.Ease.get(-1)).to({rotation:-24.7,x:-0.5,y:42.2},14,cjs.Ease.get(1)).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.7,0,84.3,84.3);


(lib.Символ65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ68();
	this.instance.parent = this;
	this.instance.setTransform(54.5,54.5,1,1,0,0,0,54.5,54.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ65, new cjs.Rectangle(0,0,109,109), null);


(lib.Символ60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ67();
	this.instance.parent = this;
	this.instance.setTransform(121.7,-73,0.811,0.811,0,0,0,31.8,31.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ30();
	this.instance_1.parent = this;
	this.instance_1.setTransform(115.1,-25.7,1,1,0,0,0,78.1,8.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(116.5,77.1,0.849,0.849);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_1}]}).wait(1));

	// Слой 2
	this.instance_2 = new lib.Символ65();
	this.instance_2.parent = this;
	this.instance_2.setTransform(118.1,6.5,1.909,1.909,0,0,0,54.6,54.4);
	this.instance_2.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ60, new cjs.Rectangle(13.9,-98.8,208.1,209.6), null);


(lib.Символ57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ52();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.13,scaleY:1.13},17,cjs.Ease.get(-1)).to({scaleX:1.25,scaleY:1.25},17,cjs.Ease.get(1)).to({scaleX:1.13,scaleY:1.13},17,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},18,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47,-37.5,94,75);


(lib.Символ56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ54();
	this.instance.parent = this;
	this.instance.setTransform(129,38.4,1.229,1.229,97.5,0,0,64,86.7);
	this.instance._off = true;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Слой 1
	this.instance_1 = new lib.book();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,7.9,1,1,-2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,233.2,104.8);


(lib.Символ55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ54();
	this.instance.parent = this;
	this.instance.setTransform(113.4,94.1,1.458,1.458,107.5,0,0,64.2,86.7);
	this.instance._off = true;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Слой 1
	this.instance_1 = new lib.imac();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,220,176);


(lib.Символ53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ54();
	this.instance.parent = this;
	this.instance.setTransform(33.1,43.3,0.654,0.654,-17,0,0,64,86.7);
	this.instance._off = true;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Слой 1
	this.instance_1 = new lib.pod();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63,95);


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ51();
	this.instance.parent = this;
	this.instance.setTransform(72,131,1,1,0,0,0,72,131);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-2.3,x:72.1,y:127.5},4,cjs.Ease.get(-1)).to({rotation:-5.2,y:123},5,cjs.Ease.get(1)).to({regX:71.9,regY:130.9,rotation:-2.5,x:72,y:127},5,cjs.Ease.get(-1)).to({rotation:-1.5,x:72.1,y:128.6},1,cjs.Ease.get(1)).to({regX:72,regY:131,rotation:0,x:72,y:131},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5,-140,291.2,278.1);


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(16));

	// Слой 1
	this.instance = new lib.Символ50();
	this.instance.parent = this;
	this.instance.setTransform(72,131,1,1,0,0,0,72,131);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-83},14,cjs.Ease.get(1)).to({y:131},15,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5,-140,291.2,278.1);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ55();
	this.instance.parent = this;
	this.instance.setTransform(110,88,1,1,0,0,0,110,88);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ46, new cjs.Rectangle(-37.9,-36.2,302.4,260.5), null);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ56();
	this.instance.parent = this;
	this.instance.setTransform(116.5,52.4,1,1,0,0,0,116.5,52.4);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ45, new cjs.Rectangle(0,-56.6,247.9,190.5), null);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ53();
	this.instance.parent = this;
	this.instance.setTransform(31.5,47.5,1,1,0,0,0,31.5,47.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ44, new cjs.Rectangle(-22.7,-23.2,111.8,133), null);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 47
	this.instance = new lib.Символ47();
	this.instance.parent = this;
	this.instance.setTransform(0.1,0.1,1,1,0,0,0,4.2,4.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:4.1,regY:4.1,scaleX:1.1,scaleY:1.1,x:0,y:0},9,cjs.Ease.get(-1)).to({regX:4.2,regY:4.2,scaleX:1,scaleY:1,x:0.1,y:0.1},10,cjs.Ease.get(-1)).wait(6));

	// Символ 43
	this.instance_1 = new lib.Символ43();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,1.172,1.172,0,0,0,45,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({scaleX:1.29,scaleY:1.29,x:0.1,y:0.1},9,cjs.Ease.get(-1)).to({scaleX:1.17,scaleY:1.17,x:0,y:0},10,cjs.Ease.get(-1)).wait(4));

	// Символ 43
	this.instance_2 = new lib.Символ43();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0,1,1,0,0,0,45,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({scaleX:1.1,scaleY:1.1,x:0.1,y:0.1},9,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:0,y:0},10,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.5,-54.5,109,109);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ44();
	this.instance.parent = this;
	this.instance.setTransform(24.4,35.3,0.486,0.486,-3,0,0,31.6,47.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ41, new cjs.Rectangle(7.8,11.4,33.1,47.7), null);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ45();
	this.instance.parent = this;
	this.instance.setTransform(90.3,77,0.503,0.503,-33.1,0,0,116.5,52.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ40, new cjs.Rectangle(26.9,22.9,126.9,108.1), null);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ46();
	this.instance.parent = this;
	this.instance.setTransform(84.2,69.8,0.532,0.532,5,0,0,110.1,88);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ39, new cjs.Rectangle(21.7,18,124.9,103.6), null);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 41
	this.instance = new lib.Символ41();
	this.instance.parent = this;
	this.instance.setTransform(115.9,325.1,1,1,38.5,0,0,25.4,32.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:17.2},16,cjs.Ease.get(1)).to({y:325.1},8,cjs.Ease.get(-1)).wait(21));

	// Символ 40
	this.instance_1 = new lib.Символ40();
	this.instance_1.parent = this;
	this.instance_1.setTransform(354.3,342.4,1,1,-12.7,0,0,89.7,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12).to({y:34.4},16,cjs.Ease.get(1)).to({y:342.4},8,cjs.Ease.get(-1)).wait(9));

	// Символ 39
	this.instance_2 = new lib.Символ39();
	this.instance_2.parent = this;
	this.instance_2.setTransform(241.2,353.7,1,1,30.7,0,0,86,74.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20).to({y:45.8},16,cjs.Ease.get(1)).to({y:353.7},8,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(87.2,276.7,330,144.4);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 35
	this.instance = new lib.Символ35();
	this.instance.parent = this;
	this.instance.setTransform(629.5,43.1,1,1,0,0,0,174.6,34.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({scaleX:1.05,scaleY:1.05},5,cjs.Ease.get(-1)).to({scaleX:1.09,scaleY:1.09},5,cjs.Ease.get(1)).to({scaleX:1.05,scaleY:1.05,y:43},5,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,y:43.1},5,cjs.Ease.get(1)).wait(20));

	// Символ 34
	this.instance_1 = new lib.Символ34();
	this.instance_1.parent = this;
	this.instance_1.setTransform(323.2,34.3,1,1,0,0,0,93.8,34.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({regX:93.9,scaleX:1.07,scaleY:1.07,x:323.4},5,cjs.Ease.get(-1)).to({regY:34.2,scaleX:1.15,scaleY:1.15,y:34.2},5,cjs.Ease.get(1)).to({scaleX:1.07,scaleY:1.07,x:323.3,y:34.4},5,cjs.Ease.get(-1)).to({regX:93.8,regY:34.3,scaleX:1,scaleY:1,x:323.2,y:34.3},5,cjs.Ease.get(1)).wait(30));

	// Символ 33
	this.instance_2 = new lib.Символ33();
	this.instance_2.parent = this;
	this.instance_2.setTransform(95.8,39.9,1,1,0,0,0,95.8,28.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1.08,scaleY:1.08,x:95.9,y:40},5,cjs.Ease.get(-1)).to({scaleX:1.16,scaleY:1.16,x:95.8,y:39.9},5,cjs.Ease.get(1)).to({scaleX:1.08,scaleY:1.08,x:95.9},5,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:95.8},5,cjs.Ease.get(1)).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,804,77.4);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ31();
	this.instance.parent = this;
	this.instance.setTransform(150,31,1,1,0,0,0,150,31);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.03,scaleY:1.03,x:150.1,y:31.1},4,cjs.Ease.get(-1)).to({regY:30.9,scaleX:1.08,scaleY:1.08,x:150,y:31},5,cjs.Ease.get(1)).to({scaleX:1.04,scaleY:1.04},5,cjs.Ease.get(-1)).to({regY:31,scaleX:1,scaleY:1},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,62);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Eg+XAAcIAAg3MB8uAAAIAAA3g");
	var mask_graphics_1 = new cjs.Graphics().p("Eg+XABAIAAh/MB8uAAAIAAB/g");
	var mask_graphics_2 = new cjs.Graphics().p("Eg+XABkIAAjHMB8uAAAIAADHg");
	var mask_graphics_3 = new cjs.Graphics().p("Eg+XACIIAAkPMB8uAAAIAAEPg");
	var mask_graphics_4 = new cjs.Graphics().p("Eg+XACsIAAlXMB8uAAAIAAFXg");
	var mask_graphics_5 = new cjs.Graphics().p("Eg+XADRIAAmhMB8uAAAIAAGhg");
	var mask_graphics_6 = new cjs.Graphics().p("Eg+XAD1IAAnpMB8uAAAIAAHpg");
	var mask_graphics_7 = new cjs.Graphics().p("Eg+XAEZIAAoxMB8uAAAIAAIxg");
	var mask_graphics_8 = new cjs.Graphics().p("Eg+XAE9IAAp5MB8uAAAIAAJ5g");
	var mask_graphics_9 = new cjs.Graphics().p("Eg+XAFhIAArBMB8uAAAIAALBg");
	var mask_graphics_69 = new cjs.Graphics().p("Eg+XAFhIAArBMB8uAAAIAALBg");
	var mask_graphics_70 = new cjs.Graphics().p("Eg+XAE9IAAp5MB8uAAAIAAJ5g");
	var mask_graphics_71 = new cjs.Graphics().p("Eg+XAEZIAAoxMB8uAAAIAAIxg");
	var mask_graphics_72 = new cjs.Graphics().p("Eg+XAD1IAAnpMB8uAAAIAAHpg");
	var mask_graphics_73 = new cjs.Graphics().p("Eg+XADRIAAmhMB8uAAAIAAGhg");
	var mask_graphics_74 = new cjs.Graphics().p("Eg+XACsIAAlXMB8uAAAIAAFXg");
	var mask_graphics_75 = new cjs.Graphics().p("Eg+XACIIAAkPMB8uAAAIAAEPg");
	var mask_graphics_76 = new cjs.Graphics().p("Eg+XABkIAAjHMB8uAAAIAADHg");
	var mask_graphics_77 = new cjs.Graphics().p("Eg+XABAIAAh/MB8uAAAIAAB/g");
	var mask_graphics_78 = new cjs.Graphics().p("Eg+XAAcIAAg3MB8uAAAIAAA3g");
	var mask_graphics_79 = new cjs.Graphics().p("Eg+XAAcIAAg3MB8uAAAIAAA3g");
	var mask_graphics_80 = new cjs.Graphics().p("Eg+XABAIAAh/MB8uAAAIAAB/g");
	var mask_graphics_81 = new cjs.Graphics().p("Eg+XABkIAAjHMB8uAAAIAADHg");
	var mask_graphics_82 = new cjs.Graphics().p("Eg+XACIIAAkPMB8uAAAIAAEPg");
	var mask_graphics_83 = new cjs.Graphics().p("Eg+XACsIAAlXMB8uAAAIAAFXg");
	var mask_graphics_84 = new cjs.Graphics().p("Eg+XADRIAAmhMB8uAAAIAAGhg");
	var mask_graphics_85 = new cjs.Graphics().p("Eg+XAD1IAAnpMB8uAAAIAAHpg");
	var mask_graphics_86 = new cjs.Graphics().p("Eg+XAEZIAAoxMB8uAAAIAAIxg");
	var mask_graphics_87 = new cjs.Graphics().p("Eg+XAE9IAAp5MB8uAAAIAAJ5g");
	var mask_graphics_88 = new cjs.Graphics().p("Eg+XAFhIAArBMB8uAAAIAALBg");
	var mask_graphics_148 = new cjs.Graphics().p("Eg+XAFhIAArBMB8uAAAIAALBg");
	var mask_graphics_149 = new cjs.Graphics().p("Eg+XAE9IAAp5MB8uAAAIAAJ5g");
	var mask_graphics_150 = new cjs.Graphics().p("Eg+XAEZIAAoxMB8uAAAIAAIxg");
	var mask_graphics_151 = new cjs.Graphics().p("Eg+XAD1IAAnpMB8uAAAIAAHpg");
	var mask_graphics_152 = new cjs.Graphics().p("Eg+XADRIAAmhMB8uAAAIAAGhg");
	var mask_graphics_153 = new cjs.Graphics().p("Eg+XACsIAAlXMB8uAAAIAAFXg");
	var mask_graphics_154 = new cjs.Graphics().p("Eg+XACIIAAkPMB8uAAAIAAEPg");
	var mask_graphics_155 = new cjs.Graphics().p("Eg+XABkIAAjHMB8uAAAIAADHg");
	var mask_graphics_156 = new cjs.Graphics().p("Eg+XABAIAAh/MB8uAAAIAAB/g");
	var mask_graphics_157 = new cjs.Graphics().p("Eg+XAAcIAAg3MB8uAAAIAAA3g");
	var mask_graphics_158 = new cjs.Graphics().p("Eg+XAAcIAAg3MB8uAAAIAAA3g");
	var mask_graphics_159 = new cjs.Graphics().p("Eg+XABAIAAh/MB8uAAAIAAB/g");
	var mask_graphics_160 = new cjs.Graphics().p("Eg+XABkIAAjHMB8uAAAIAADHg");
	var mask_graphics_161 = new cjs.Graphics().p("Eg+XACIIAAkPMB8uAAAIAAEPg");
	var mask_graphics_162 = new cjs.Graphics().p("Eg+XACsIAAlXMB8uAAAIAAFXg");
	var mask_graphics_163 = new cjs.Graphics().p("Eg+XADRIAAmhMB8uAAAIAAGhg");
	var mask_graphics_164 = new cjs.Graphics().p("Eg+XAD1IAAnpMB8uAAAIAAHpg");
	var mask_graphics_165 = new cjs.Graphics().p("Eg+XAEZIAAoxMB8uAAAIAAIxg");
	var mask_graphics_166 = new cjs.Graphics().p("Eg+XAE9IAAp5MB8uAAAIAAJ5g");
	var mask_graphics_167 = new cjs.Graphics().p("Eg+XAFhIAArBMB8uAAAIAALBg");
	var mask_graphics_227 = new cjs.Graphics().p("Eg+XAFhIAArBMB8uAAAIAALBg");
	var mask_graphics_228 = new cjs.Graphics().p("Eg+XAE9IAAp5MB8uAAAIAAJ5g");
	var mask_graphics_229 = new cjs.Graphics().p("Eg+XAEZIAAoxMB8uAAAIAAIxg");
	var mask_graphics_230 = new cjs.Graphics().p("Eg+XAD1IAAnpMB8uAAAIAAHpg");
	var mask_graphics_231 = new cjs.Graphics().p("Eg+XADRIAAmhMB8uAAAIAAGhg");
	var mask_graphics_232 = new cjs.Graphics().p("Eg+XACsIAAlXMB8uAAAIAAFXg");
	var mask_graphics_233 = new cjs.Graphics().p("Eg+XACIIAAkPMB8uAAAIAAEPg");
	var mask_graphics_234 = new cjs.Graphics().p("Eg+XABkIAAjHMB8uAAAIAADHg");
	var mask_graphics_235 = new cjs.Graphics().p("Eg+XABAIAAh/MB8uAAAIAAB/g");
	var mask_graphics_236 = new cjs.Graphics().p("Eg+XAAcIAAg3MB8uAAAIAAA3g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:354.2,y:33.4}).wait(1).to({graphics:mask_graphics_1,x:354.2,y:33.4}).wait(1).to({graphics:mask_graphics_2,x:354.2,y:33.3}).wait(1).to({graphics:mask_graphics_3,x:354.2,y:33.3}).wait(1).to({graphics:mask_graphics_4,x:354.2,y:33.3}).wait(1).to({graphics:mask_graphics_5,x:354.2,y:33.3}).wait(1).to({graphics:mask_graphics_6,x:354.2,y:33.3}).wait(1).to({graphics:mask_graphics_7,x:354.2,y:33.3}).wait(1).to({graphics:mask_graphics_8,x:354.2,y:33.3}).wait(1).to({graphics:mask_graphics_9,x:354.2,y:33.3}).wait(60).to({graphics:mask_graphics_69,x:354.2,y:33.3}).wait(1).to({graphics:mask_graphics_70,x:354.2,y:33.3}).wait(1).to({graphics:mask_graphics_71,x:354.2,y:33.3}).wait(1).to({graphics:mask_graphics_72,x:354.2,y:33.3}).wait(1).to({graphics:mask_graphics_73,x:354.2,y:33.3}).wait(1).to({graphics:mask_graphics_74,x:354.2,y:33.3}).wait(1).to({graphics:mask_graphics_75,x:354.2,y:33.3}).wait(1).to({graphics:mask_graphics_76,x:354.2,y:33.3}).wait(1).to({graphics:mask_graphics_77,x:354.2,y:33.4}).wait(1).to({graphics:mask_graphics_78,x:354.2,y:33.4}).wait(1).to({graphics:mask_graphics_79,x:354.2,y:33.4}).wait(1).to({graphics:mask_graphics_80,x:354.2,y:33.4}).wait(1).to({graphics:mask_graphics_81,x:354.2,y:33.3}).wait(1).to({graphics:mask_graphics_82,x:354.2,y:33.3}).wait(1).to({graphics:mask_graphics_83,x:354.2,y:33.3}).wait(1).to({graphics:mask_graphics_84,x:354.2,y:33.3}).wait(1).to({graphics:mask_graphics_85,x:354.2,y:33.3}).wait(1).to({graphics:mask_graphics_86,x:354.2,y:33.3}).wait(1).to({graphics:mask_graphics_87,x:354.2,y:33.3}).wait(1).to({graphics:mask_graphics_88,x:354.2,y:33.3}).wait(60).to({graphics:mask_graphics_148,x:354.2,y:33.3}).wait(1).to({graphics:mask_graphics_149,x:354.2,y:33.3}).wait(1).to({graphics:mask_graphics_150,x:354.2,y:33.3}).wait(1).to({graphics:mask_graphics_151,x:354.2,y:33.3}).wait(1).to({graphics:mask_graphics_152,x:354.2,y:33.3}).wait(1).to({graphics:mask_graphics_153,x:354.2,y:33.3}).wait(1).to({graphics:mask_graphics_154,x:354.2,y:33.3}).wait(1).to({graphics:mask_graphics_155,x:354.2,y:33.3}).wait(1).to({graphics:mask_graphics_156,x:354.2,y:33.4}).wait(1).to({graphics:mask_graphics_157,x:354.2,y:33.4}).wait(1).to({graphics:mask_graphics_158,x:354.2,y:33.4}).wait(1).to({graphics:mask_graphics_159,x:354.2,y:33.4}).wait(1).to({graphics:mask_graphics_160,x:354.2,y:33.3}).wait(1).to({graphics:mask_graphics_161,x:354.2,y:33.3}).wait(1).to({graphics:mask_graphics_162,x:354.2,y:33.3}).wait(1).to({graphics:mask_graphics_163,x:354.2,y:33.3}).wait(1).to({graphics:mask_graphics_164,x:354.2,y:33.3}).wait(1).to({graphics:mask_graphics_165,x:354.2,y:33.3}).wait(1).to({graphics:mask_graphics_166,x:354.2,y:33.3}).wait(1).to({graphics:mask_graphics_167,x:354.2,y:33.3}).wait(60).to({graphics:mask_graphics_227,x:354.2,y:33.3}).wait(1).to({graphics:mask_graphics_228,x:354.2,y:33.3}).wait(1).to({graphics:mask_graphics_229,x:354.2,y:33.3}).wait(1).to({graphics:mask_graphics_230,x:354.2,y:33.3}).wait(1).to({graphics:mask_graphics_231,x:354.2,y:33.3}).wait(1).to({graphics:mask_graphics_232,x:354.2,y:33.3}).wait(1).to({graphics:mask_graphics_233,x:354.2,y:33.3}).wait(1).to({graphics:mask_graphics_234,x:354.2,y:33.3}).wait(1).to({graphics:mask_graphics_235,x:354.2,y:33.4}).wait(1).to({graphics:mask_graphics_236,x:354.2,y:33.4}).wait(1));

	// Символ 23
	this.instance = new lib.Символ23();
	this.instance.parent = this;
	this.instance.setTransform(346.9,34.3,1,1,0,0,0,343.9,31.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},79).wait(158));

	// Символ 25
	this.instance_1 = new lib.Символ25();
	this.instance_1.parent = this;
	this.instance_1.setTransform(356.9,30.8,1,1,0,0,0,356.9,32.8);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(79).to({_off:false},0).wait(78).to({_off:true},1).wait(79));

	// Символ 24
	this.instance_2 = new lib.Символ24();
	this.instance_2.parent = this;
	this.instance_2.setTransform(317.8,32.8,1,1,0,0,0,317.8,32.8);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(158).to({_off:false},0).wait(79));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,30.6,687.7,5.6);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		if (this.currentFrame = true){
		this.gotoAndPlay(Math.random() * 160);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(160));

	// Слой 1
	this.instance = new lib.Символ14();
	this.instance.parent = this;
	this.instance.setTransform(5.5,5.5,1,1,0,0,0,5.5,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-108.5,y:1467.7},159).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,11.1,11.1);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		if (this.currentFrame = true){
		this.gotoAndPlay(Math.random() * 30);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(30));

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.parent = this;
	this.instance.setTransform(83,83,1,1,0,0,0,83,83);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:1192.5,y:5062.7},29).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,166,166);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// chuvak_10.png
	this.instance = new lib.Символ19();
	this.instance.parent = this;
	this.instance.setTransform(95.6,-53.4,1,1,0,0,0,78,69.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,skewX:-2.6,skewY:-3.3,x:92.5,y:-49.1},13,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,skewX:-5,skewY:-6.4,x:89.7,y:-45.4},11,cjs.Ease.get(1)).to({regY:69.4,scaleX:1,scaleY:1,skewX:-2.3,skewY:-3,x:92.7,y:-49.6},13,cjs.Ease.get(-1)).to({regY:69.5,scaleX:1,scaleY:1,skewX:0,skewY:0,x:95.6,y:-53.4},12,cjs.Ease.get(1)).wait(1));

	// chuvak_08.png
	this.instance_1 = new lib.Символ20();
	this.instance_1.parent = this;
	this.instance_1.setTransform(185,237.2,1,1,0,0,0,37,98);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:37.1,scaleX:1,scaleY:1,skewX:10.5,skewY:9.8,x:163.8,y:236.5},13,cjs.Ease.get(-1)).to({scaleX:0.99,scaleY:1.01,skewX:19.5,skewY:18.4,x:145.6,y:235.9},11,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,skewX:9.3,skewY:8.8,x:166.1,y:236.6},13,cjs.Ease.get(-1)).to({regX:37,scaleX:1,scaleY:1,skewX:0,skewY:0,x:185,y:237.2},12,cjs.Ease.get(1)).wait(1));

	// chuvak_25.png
	this.instance_2 = new lib.Символ7();
	this.instance_2.parent = this;
	this.instance_2.setTransform(97.5,469.2,1,1,0,0,0,65.5,98);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleY:1,skewX:-2,x:92.9},13,cjs.Ease.get(-1)).to({scaleY:1,skewX:-3.7,x:89},11,cjs.Ease.get(1)).to({scaleY:1,skewX:-1.8,x:93.4},13,cjs.Ease.get(-1)).to({scaleY:1,skewX:0,x:97.5},12,cjs.Ease.get(1)).wait(1));

	// chuvak_17.png
	this.instance_3 = new lib.Символ8();
	this.instance_3.parent = this;
	this.instance_3.setTransform(165.5,490.2,1,1,0,0,0,55.5,110);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleY:1,skewX:-2,x:161.7},13,cjs.Ease.get(-1)).to({scaleY:1,skewX:-3.7,x:158.4},11,cjs.Ease.get(1)).to({regX:55.6,scaleY:1,skewX:-1.8,x:162.2},13,cjs.Ease.get(-1)).to({regX:55.5,scaleY:1,skewX:0,x:165.5},12,cjs.Ease.get(1)).wait(1));

	// chuvak_14.png
	this.instance_4 = new lib.Символ9();
	this.instance_4.parent = this;
	this.instance_4.setTransform(38,83.2,1,1,0,0,0,27,93);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({skewY:-0.5,x:36.3,y:86.8},13,cjs.Ease.get(-1)).to({regX:27.1,scaleX:1,skewX:0.2,skewY:-1.3,x:34.8,y:89.8},11,cjs.Ease.get(1)).to({regX:27.2,regY:92.9,scaleX:1,skewX:0,skewY:-0.5,x:36.6,y:86.4},13,cjs.Ease.get(-1)).to({regX:27,regY:93,skewY:0,x:38,y:83.2},12,cjs.Ease.get(1)).wait(1));

	// chuvak_06.png
	this.instance_5 = new lib.Символ21();
	this.instance_5.parent = this;
	this.instance_5.setTransform(189.5,90.2,1,1,0,0,0,31.5,83);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleY:1.02,skewX:1.5,x:185.2,y:95.4},13,cjs.Ease.get(-1)).to({scaleY:1.04,skewX:3.1,x:181.5,y:99.7},11,cjs.Ease.get(1)).to({regX:31.6,scaleY:1.02,skewX:1.3,x:185.7,y:94.7},13,cjs.Ease.get(-1)).to({regX:31.5,scaleY:1,skewX:0,x:189.5,y:90.2},12,cjs.Ease.get(1)).wait(1));

	// chuvak_03.png
	this.instance_6 = new lib.Символ22();
	this.instance_6.parent = this;
	this.instance_6.setTransform(106,205.2,1,1,0,0,0,106,221);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({skewX:0.8,x:101.6,y:208.5},13,cjs.Ease.get(-1)).to({skewX:1.4,x:97.7,y:211.2},11,cjs.Ease.get(1)).to({skewX:0.5,x:102.1,y:208.1},13,cjs.Ease.get(-1)).to({skewX:0,x:106,y:205.2},12,cjs.Ease.get(1)).wait(1));

	// chuvak_12.png
	this.instance_7 = new lib.Символ10();
	this.instance_7.parent = this;
	this.instance_7.setTransform(6.5,214.2,1,1,0,0,0,45.5,87);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleX:1,scaleY:1,skewX:-4.5,skewY:-5.3,x:9.9,y:218.9},13,cjs.Ease.get(-1)).to({regX:45.4,scaleX:1,scaleY:1,skewX:-8.4,skewY:-9.7,x:12.6,y:222.8},11,cjs.Ease.get(1)).to({regY:87.1,scaleX:1,scaleY:1,skewX:-4,skewY:-4.5,x:9.5,y:218.4},13,cjs.Ease.get(-1)).to({regX:45.5,regY:87,scaleX:1,scaleY:1,skewX:0,skewY:0,x:6.5,y:214.2},12,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39,-122.9,261,723.1);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ4();
	this.instance.parent = this;
	this.instance.setTransform(333,195.2,1,1,0,0,0,333,195.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(0,0,666,390.5), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.parent = this;
	this.instance.setTransform(346.6,207.5,0.99,0.99,0,0,0,349.9,209.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:337.1,y:207.6},28,cjs.Ease.get(-1)).to({x:326.6,y:207.5},31,cjs.Ease.get(1)).to({x:336.6,y:207.6},30,cjs.Ease.get(-1)).to({x:346.6,y:207.5},30,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-69.3,693.3,415);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.parent = this;
	this.instance.setTransform(333,195.2,1,1,0,0,0,333,195.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:338.4},27,cjs.Ease.get(-1)).to({x:343},32,cjs.Ease.get(1)).to({x:338.4},32,cjs.Ease.get(-1)).to({x:333},28,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,666,390.5);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(16));

	// Слой 3
	this.instance = new lib.Символ32();
	this.instance.parent = this;
	this.instance.setTransform(360.1,108.1,0.65,0.65,0,0,0,402.1,38.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:402.2,y:64.5},7,cjs.Ease.get(-1)).to({regX:402.1,y:21.1},7,cjs.Ease.get(1)).to({regX:402.2,y:67.5},8,cjs.Ease.get(-1)).to({regX:402.1,y:108.1},7,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ26();
	this.instance_1.parent = this;
	this.instance_1.setTransform(359.9,24.9,0.7,0.7,0,0,0,356.9,32.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:357,regY:32.9,x:360,y:80},7,cjs.Ease.get(-1)).to({regX:356.9,regY:32.8,x:359.9,y:134.9},7,cjs.Ease.get(1)).to({regX:357,regY:32.9,x:360,y:76.4},8,cjs.Ease.get(-1)).to({regX:356.9,regY:32.8,x:359.9,y:24.9},7,cjs.Ease.get(1)).wait(1));

	// Слой 2
	this.instance_2 = new lib.Символ27();
	this.instance_2.parent = this;
	this.instance_2.setTransform(299,42.1,1,1,0,0,0,521.2,55);
	this.instance_2.alpha = 0.84;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-222.2,-12.9,1042.4,146);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ28();
	this.instance.parent = this;
	this.instance.setTransform(567.4,150,0.71,0.71,0,0,0,150,31);

	this.instance_1 = new lib.lenta();
	this.instance_1.parent = this;
	this.instance_1.setTransform(346.4,95,0.617,0.617);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 2
	this.instance_2 = new lib.Символ60();
	this.instance_2.parent = this;
	this.instance_2.setTransform(576.1,134.5,1.092,1.092,0,0,0,123,11.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ29, new cjs.Rectangle(346.4,13.7,439.9,228.7), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.parent = this;
	this.instance.setTransform(723.1,12.9,0.156,0.156,0,0,0,83,83);

	this.instance_1 = new lib.Символ12();
	this.instance_1.parent = this;
	this.instance_1.setTransform(676.1,12.9,0.156,0.156,0,0,0,83,83);

	this.instance_2 = new lib.Символ12();
	this.instance_2.parent = this;
	this.instance_2.setTransform(628,12.9,0.156,0.156,0,0,0,83,83);

	this.instance_3 = new lib.Символ12();
	this.instance_3.parent = this;
	this.instance_3.setTransform(581,12.9,0.156,0.156,0,0,0,83,83);

	this.instance_4 = new lib.Символ12();
	this.instance_4.parent = this;
	this.instance_4.setTransform(533,12.9,0.156,0.156,0,0,0,83,83);

	this.instance_5 = new lib.Символ12();
	this.instance_5.parent = this;
	this.instance_5.setTransform(486,12.9,0.156,0.156,0,0,0,83,83);

	this.instance_6 = new lib.Символ12();
	this.instance_6.parent = this;
	this.instance_6.setTransform(438,12.9,0.156,0.156,0,0,0,83,83);

	this.instance_7 = new lib.Символ12();
	this.instance_7.parent = this;
	this.instance_7.setTransform(391,12.9,0.156,0.156,0,0,0,83,83);

	this.instance_8 = new lib.Символ12();
	this.instance_8.parent = this;
	this.instance_8.setTransform(345,12.9,0.156,0.156,0,0,0,83,83);

	this.instance_9 = new lib.Символ12();
	this.instance_9.parent = this;
	this.instance_9.setTransform(298,12.9,0.156,0.156,0,0,0,83,83);

	this.instance_10 = new lib.Символ12();
	this.instance_10.parent = this;
	this.instance_10.setTransform(250,12.9,0.156,0.156,0,0,0,83,83);

	this.instance_11 = new lib.Символ12();
	this.instance_11.parent = this;
	this.instance_11.setTransform(203,12.9,0.156,0.156,0,0,0,83,83);

	this.instance_12 = new lib.Символ12();
	this.instance_12.parent = this;
	this.instance_12.setTransform(155,12.9,0.156,0.156,0,0,0,83,83);

	this.instance_13 = new lib.Символ12();
	this.instance_13.parent = this;
	this.instance_13.setTransform(108,12.9,0.156,0.156,0,0,0,83,83);

	this.instance_14 = new lib.Символ12();
	this.instance_14.parent = this;
	this.instance_14.setTransform(59.9,12.9,0.156,0.156,0,0,0,83,83);

	this.instance_15 = new lib.Символ12();
	this.instance_15.parent = this;
	this.instance_15.setTransform(12.9,12.9,0.156,0.156,0,0,0,83,83);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(0,0,736,25.8), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.parent = this;
	this.instance.setTransform(628.5,5.6,0.067,0.067,0,0,0,83.4,83.4);

	this.instance_1 = new lib.Символ12();
	this.instance_1.parent = this;
	this.instance_1.setTransform(608.3,5.6,0.067,0.067,0,0,0,82.7,83.4);

	this.instance_2 = new lib.Символ12();
	this.instance_2.parent = this;
	this.instance_2.setTransform(587.8,5.6,0.067,0.067,0,0,0,83.4,83.4);

	this.instance_3 = new lib.Символ12();
	this.instance_3.parent = this;
	this.instance_3.setTransform(567.7,5.6,0.067,0.067,0,0,0,83.4,83.4);

	this.instance_4 = new lib.Символ12();
	this.instance_4.parent = this;
	this.instance_4.setTransform(547.2,5.6,0.067,0.067,0,0,0,83.4,83.4);

	this.instance_5 = new lib.Символ12();
	this.instance_5.parent = this;
	this.instance_5.setTransform(527,5.6,0.067,0.067,0,0,0,82.7,83.4);

	this.instance_6 = new lib.Символ12();
	this.instance_6.parent = this;
	this.instance_6.setTransform(506.5,5.6,0.067,0.067,0,0,0,83.4,83.4);

	this.instance_7 = new lib.Символ12();
	this.instance_7.parent = this;
	this.instance_7.setTransform(486.4,5.6,0.067,0.067,0,0,0,83.4,83.4);

	this.instance_8 = new lib.Символ12();
	this.instance_8.parent = this;
	this.instance_8.setTransform(466.7,5.6,0.067,0.067,0,0,0,83.4,83.4);

	this.instance_9 = new lib.Символ12();
	this.instance_9.parent = this;
	this.instance_9.setTransform(446.6,5.6,0.067,0.067,0,0,0,83.4,83.4);

	this.instance_10 = new lib.Символ12();
	this.instance_10.parent = this;
	this.instance_10.setTransform(426.1,5.6,0.067,0.067,0,0,0,83.4,83.4);

	this.instance_11 = new lib.Символ12();
	this.instance_11.parent = this;
	this.instance_11.setTransform(406,5.6,0.067,0.067,0,0,0,83.4,83.4);

	this.instance_12 = new lib.Символ12();
	this.instance_12.parent = this;
	this.instance_12.setTransform(385.4,5.6,0.067,0.067,0,0,0,83.4,83.4);

	this.instance_13 = new lib.Символ12();
	this.instance_13.parent = this;
	this.instance_13.setTransform(365.3,5.6,0.067,0.067,0,0,0,83.4,83.4);

	this.instance_14 = new lib.Символ12();
	this.instance_14.parent = this;
	this.instance_14.setTransform(344.8,5.6,0.067,0.067,0,0,0,83.4,83.4);

	this.instance_15 = new lib.Символ12();
	this.instance_15.parent = this;
	this.instance_15.setTransform(324.6,5.6,0.067,0.067,0,0,0,82.7,83.4);

	this.instance_16 = new lib.Символ12();
	this.instance_16.parent = this;
	this.instance_16.setTransform(309.4,5.6,0.067,0.067,0,0,0,83.4,83.4);

	this.instance_17 = new lib.Символ12();
	this.instance_17.parent = this;
	this.instance_17.setTransform(289.2,5.6,0.067,0.067,0,0,0,82.7,83.4);

	this.instance_18 = new lib.Символ12();
	this.instance_18.parent = this;
	this.instance_18.setTransform(268.7,5.6,0.067,0.067,0,0,0,83.4,83.4);

	this.instance_19 = new lib.Символ12();
	this.instance_19.parent = this;
	this.instance_19.setTransform(248.6,5.6,0.067,0.067,0,0,0,83.4,83.4);

	this.instance_20 = new lib.Символ12();
	this.instance_20.parent = this;
	this.instance_20.setTransform(228.1,5.6,0.067,0.067,0,0,0,83.4,83.4);

	this.instance_21 = new lib.Символ12();
	this.instance_21.parent = this;
	this.instance_21.setTransform(207.9,5.6,0.067,0.067,0,0,0,82.7,83.4);

	this.instance_22 = new lib.Символ12();
	this.instance_22.parent = this;
	this.instance_22.setTransform(187.4,5.6,0.067,0.067,0,0,0,83.4,83.4);

	this.instance_23 = new lib.Символ12();
	this.instance_23.parent = this;
	this.instance_23.setTransform(167.3,5.6,0.067,0.067,0,0,0,83.4,83.4);

	this.instance_24 = new lib.Символ12();
	this.instance_24.parent = this;
	this.instance_24.setTransform(147.6,5.6,0.067,0.067,0,0,0,83.4,83.4);

	this.instance_25 = new lib.Символ12();
	this.instance_25.parent = this;
	this.instance_25.setTransform(127.5,5.6,0.067,0.067,0,0,0,83.4,83.4);

	this.instance_26 = new lib.Символ12();
	this.instance_26.parent = this;
	this.instance_26.setTransform(107,5.6,0.067,0.067,0,0,0,83.4,83.4);

	this.instance_27 = new lib.Символ12();
	this.instance_27.parent = this;
	this.instance_27.setTransform(86.9,5.6,0.067,0.067,0,0,0,83.4,83.4);

	this.instance_28 = new lib.Символ12();
	this.instance_28.parent = this;
	this.instance_28.setTransform(66.3,5.6,0.067,0.067,0,0,0,83.4,83.4);

	this.instance_29 = new lib.Символ12();
	this.instance_29.parent = this;
	this.instance_29.setTransform(46.2,5.6,0.067,0.067,0,0,0,83.4,83.4);

	this.instance_30 = new lib.Символ12();
	this.instance_30.parent = this;
	this.instance_30.setTransform(25.7,5.6,0.067,0.067,0,0,0,83.4,83.4);

	this.instance_31 = new lib.Символ12();
	this.instance_31.parent = this;
	this.instance_31.setTransform(5.5,5.6,0.067,0.067,0,0,0,82.7,83.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(0,0,634,11.1), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.parent = this;
	this.instance.setTransform(679.8,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_1 = new lib.Символ15();
	this.instance_1.parent = this;
	this.instance_1.setTransform(672.2,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_2 = new lib.Символ15();
	this.instance_2.parent = this;
	this.instance_2.setTransform(662.6,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_3 = new lib.Символ15();
	this.instance_3.parent = this;
	this.instance_3.setTransform(655,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_4 = new lib.Символ15();
	this.instance_4.parent = this;
	this.instance_4.setTransform(648.3,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_5 = new lib.Символ15();
	this.instance_5.parent = this;
	this.instance_5.setTransform(640.7,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_6 = new lib.Символ15();
	this.instance_6.parent = this;
	this.instance_6.setTransform(631.1,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_7 = new lib.Символ15();
	this.instance_7.parent = this;
	this.instance_7.setTransform(623.5,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_8 = new lib.Символ15();
	this.instance_8.parent = this;
	this.instance_8.setTransform(618.1,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_9 = new lib.Символ15();
	this.instance_9.parent = this;
	this.instance_9.setTransform(610.5,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_10 = new lib.Символ15();
	this.instance_10.parent = this;
	this.instance_10.setTransform(600.9,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_11 = new lib.Символ15();
	this.instance_11.parent = this;
	this.instance_11.setTransform(593.3,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_12 = new lib.Символ15();
	this.instance_12.parent = this;
	this.instance_12.setTransform(586.6,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_13 = new lib.Символ15();
	this.instance_13.parent = this;
	this.instance_13.setTransform(579,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_14 = new lib.Символ15();
	this.instance_14.parent = this;
	this.instance_14.setTransform(569.4,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_15 = new lib.Символ15();
	this.instance_15.parent = this;
	this.instance_15.setTransform(561.8,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_16 = new lib.Символ15();
	this.instance_16.parent = this;
	this.instance_16.setTransform(556.1,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_17 = new lib.Символ15();
	this.instance_17.parent = this;
	this.instance_17.setTransform(548.5,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_18 = new lib.Символ15();
	this.instance_18.parent = this;
	this.instance_18.setTransform(538.9,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_19 = new lib.Символ15();
	this.instance_19.parent = this;
	this.instance_19.setTransform(531.3,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_20 = new lib.Символ15();
	this.instance_20.parent = this;
	this.instance_20.setTransform(524.6,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_21 = new lib.Символ15();
	this.instance_21.parent = this;
	this.instance_21.setTransform(517,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_22 = new lib.Символ15();
	this.instance_22.parent = this;
	this.instance_22.setTransform(507.4,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_23 = new lib.Символ15();
	this.instance_23.parent = this;
	this.instance_23.setTransform(499.8,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_24 = new lib.Символ15();
	this.instance_24.parent = this;
	this.instance_24.setTransform(494.2,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_25 = new lib.Символ15();
	this.instance_25.parent = this;
	this.instance_25.setTransform(486.6,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_26 = new lib.Символ15();
	this.instance_26.parent = this;
	this.instance_26.setTransform(477,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_27 = new lib.Символ15();
	this.instance_27.parent = this;
	this.instance_27.setTransform(469.4,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_28 = new lib.Символ15();
	this.instance_28.parent = this;
	this.instance_28.setTransform(462.7,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_29 = new lib.Символ15();
	this.instance_29.parent = this;
	this.instance_29.setTransform(455.1,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_30 = new lib.Символ15();
	this.instance_30.parent = this;
	this.instance_30.setTransform(445.5,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_31 = new lib.Символ15();
	this.instance_31.parent = this;
	this.instance_31.setTransform(437.9,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_32 = new lib.Символ15();
	this.instance_32.parent = this;
	this.instance_32.setTransform(432.2,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_33 = new lib.Символ15();
	this.instance_33.parent = this;
	this.instance_33.setTransform(424.6,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_34 = new lib.Символ15();
	this.instance_34.parent = this;
	this.instance_34.setTransform(415,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_35 = new lib.Символ15();
	this.instance_35.parent = this;
	this.instance_35.setTransform(407.4,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_36 = new lib.Символ15();
	this.instance_36.parent = this;
	this.instance_36.setTransform(400.7,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_37 = new lib.Символ15();
	this.instance_37.parent = this;
	this.instance_37.setTransform(393.1,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_38 = new lib.Символ15();
	this.instance_38.parent = this;
	this.instance_38.setTransform(383.5,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_39 = new lib.Символ15();
	this.instance_39.parent = this;
	this.instance_39.setTransform(375.9,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_40 = new lib.Символ15();
	this.instance_40.parent = this;
	this.instance_40.setTransform(370.4,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_41 = new lib.Символ15();
	this.instance_41.parent = this;
	this.instance_41.setTransform(362.8,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_42 = new lib.Символ15();
	this.instance_42.parent = this;
	this.instance_42.setTransform(353.2,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_43 = new lib.Символ15();
	this.instance_43.parent = this;
	this.instance_43.setTransform(345.6,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_44 = new lib.Символ15();
	this.instance_44.parent = this;
	this.instance_44.setTransform(338.9,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_45 = new lib.Символ15();
	this.instance_45.parent = this;
	this.instance_45.setTransform(331.3,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_46 = new lib.Символ15();
	this.instance_46.parent = this;
	this.instance_46.setTransform(321.7,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_47 = new lib.Символ15();
	this.instance_47.parent = this;
	this.instance_47.setTransform(314.1,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_48 = new lib.Символ15();
	this.instance_48.parent = this;
	this.instance_48.setTransform(308.4,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_49 = new lib.Символ15();
	this.instance_49.parent = this;
	this.instance_49.setTransform(300.8,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_50 = new lib.Символ15();
	this.instance_50.parent = this;
	this.instance_50.setTransform(291.2,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_51 = new lib.Символ15();
	this.instance_51.parent = this;
	this.instance_51.setTransform(283.6,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_52 = new lib.Символ15();
	this.instance_52.parent = this;
	this.instance_52.setTransform(276.9,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_53 = new lib.Символ15();
	this.instance_53.parent = this;
	this.instance_53.setTransform(269.3,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_54 = new lib.Символ15();
	this.instance_54.parent = this;
	this.instance_54.setTransform(259.7,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_55 = new lib.Символ15();
	this.instance_55.parent = this;
	this.instance_55.setTransform(252.1,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_56 = new lib.Символ15();
	this.instance_56.parent = this;
	this.instance_56.setTransform(243.5,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_57 = new lib.Символ15();
	this.instance_57.parent = this;
	this.instance_57.setTransform(235.9,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_58 = new lib.Символ15();
	this.instance_58.parent = this;
	this.instance_58.setTransform(226.3,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_59 = new lib.Символ15();
	this.instance_59.parent = this;
	this.instance_59.setTransform(218.7,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_60 = new lib.Символ15();
	this.instance_60.parent = this;
	this.instance_60.setTransform(212,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_61 = new lib.Символ15();
	this.instance_61.parent = this;
	this.instance_61.setTransform(204.4,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_62 = new lib.Символ15();
	this.instance_62.parent = this;
	this.instance_62.setTransform(194.8,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_63 = new lib.Символ15();
	this.instance_63.parent = this;
	this.instance_63.setTransform(187.2,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_64 = new lib.Символ15();
	this.instance_64.parent = this;
	this.instance_64.setTransform(181.5,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_65 = new lib.Символ15();
	this.instance_65.parent = this;
	this.instance_65.setTransform(173.9,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_66 = new lib.Символ15();
	this.instance_66.parent = this;
	this.instance_66.setTransform(164.3,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_67 = new lib.Символ15();
	this.instance_67.parent = this;
	this.instance_67.setTransform(156.7,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_68 = new lib.Символ15();
	this.instance_68.parent = this;
	this.instance_68.setTransform(150,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_69 = new lib.Символ15();
	this.instance_69.parent = this;
	this.instance_69.setTransform(142.4,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_70 = new lib.Символ15();
	this.instance_70.parent = this;
	this.instance_70.setTransform(132.8,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_71 = new lib.Символ15();
	this.instance_71.parent = this;
	this.instance_71.setTransform(125.2,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_72 = new lib.Символ15();
	this.instance_72.parent = this;
	this.instance_72.setTransform(119.8,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_73 = new lib.Символ15();
	this.instance_73.parent = this;
	this.instance_73.setTransform(112.2,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_74 = new lib.Символ15();
	this.instance_74.parent = this;
	this.instance_74.setTransform(102.6,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_75 = new lib.Символ15();
	this.instance_75.parent = this;
	this.instance_75.setTransform(95,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_76 = new lib.Символ15();
	this.instance_76.parent = this;
	this.instance_76.setTransform(88.3,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_77 = new lib.Символ15();
	this.instance_77.parent = this;
	this.instance_77.setTransform(80.7,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_78 = new lib.Символ15();
	this.instance_78.parent = this;
	this.instance_78.setTransform(71.1,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_79 = new lib.Символ15();
	this.instance_79.parent = this;
	this.instance_79.setTransform(63.5,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_80 = new lib.Символ15();
	this.instance_80.parent = this;
	this.instance_80.setTransform(57.8,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_81 = new lib.Символ15();
	this.instance_81.parent = this;
	this.instance_81.setTransform(50.2,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_82 = new lib.Символ15();
	this.instance_82.parent = this;
	this.instance_82.setTransform(40.6,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_83 = new lib.Символ15();
	this.instance_83.parent = this;
	this.instance_83.setTransform(33,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_84 = new lib.Символ15();
	this.instance_84.parent = this;
	this.instance_84.setTransform(26.3,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_85 = new lib.Символ15();
	this.instance_85.parent = this;
	this.instance_85.setTransform(18.7,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_86 = new lib.Символ15();
	this.instance_86.parent = this;
	this.instance_86.setTransform(9.1,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_87 = new lib.Символ15();
	this.instance_87.parent = this;
	this.instance_87.setTransform(1.5,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_87},{t:this.instance_86},{t:this.instance_85},{t:this.instance_84},{t:this.instance_83},{t:this.instance_82},{t:this.instance_81},{t:this.instance_80},{t:this.instance_79},{t:this.instance_78},{t:this.instance_77},{t:this.instance_76},{t:this.instance_75},{t:this.instance_74},{t:this.instance_73},{t:this.instance_72},{t:this.instance_71},{t:this.instance_70},{t:this.instance_69},{t:this.instance_68},{t:this.instance_67},{t:this.instance_66},{t:this.instance_65},{t:this.instance_64},{t:this.instance_63},{t:this.instance_62},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(0,0,681.3,2.9), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ18();
	this.instance.parent = this;
	this.instance.setTransform(908.1,43,1,1,0,0,0,367.9,12.9);

	this.instance_1 = new lib.Символ17();
	this.instance_1.parent = this;
	this.instance_1.setTransform(857.1,13.4,1,1,0,0,0,316.9,5.5);

	this.instance_2 = new lib.Символ16();
	this.instance_2.parent = this;
	this.instance_2.setTransform(894.9,1.4,1,1,0,0,0,340.6,1.4);

	this.instance_3 = new lib.Символ15();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1576.8,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_4 = new lib.Символ15();
	this.instance_4.parent = this;
	this.instance_4.setTransform(1569.2,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.instance_5 = new lib.Символ15();
	this.instance_5.parent = this;
	this.instance_5.setTransform(1559.6,1.4,0.262,0.262,0,0,180,5.5,5.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(540.2,0,1038,55.9), null);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(16));

	// Слой 1
	this.instance = new lib.Символ29();
	this.instance.parent = this;
	this.instance.setTransform(40.8,85.7,0.872,0.872,0,0,0,393.1,112);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},14).to({alpha:1},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,383.5,199.4);


// stage content:
(lib.stihiya640x305 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//----------------
		
		this.pric.alpha=0;
		
		
		this.cursor = "none";
		this.pric.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor_2.bind(this));
		
		function fl_CustomMouseCursor_2() {
			this.pric.x = stage.mouseX/window.devicePixelRatio;
			this.pric.y = stage.mouseY/window.devicePixelRatio;
			this.such.x = stage.mouseX/window.devicePixelRatio;
		}
		
		
		
		
		
		//---------------
		
		stage.canvas.addEventListener("mouseover", fl_Clickover3.bind(this));
		
		function fl_Clickover3()
		{
		
		
			this.tek.gotoAndPlay(1);
			this.round.gotoAndPlay(1);
			this.such.gotoAndPlay(1);
			this.pric.alpha=1;
			
		
		}
		
		stage.canvas.addEventListener("mouseout", fl_Clickout3.bind(this));
		
		function fl_Clickout3()
		{
		
			this.tek.gotoAndPlay(15);
			this.round.gotoAndPlay(15);
			this.such.gotoAndPlay(15);
			this.pric.alpha=0;	
		
		}
		
		
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 8
	this.pric = new lib.Символ42();
	this.pric.parent = this;
	this.pric.setTransform(-25,519.9,0.583,0.583,0,0,0,-0.1,1.1);

	this.timeline.addTween(cjs.Tween.get(this.pric).wait(1));

	// Слой 6
	this.instance = new lib.Символ57();
	this.instance.parent = this;
	this.instance.setTransform(43.2,39.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ11();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-459.2,10.1,1,1,0,0,0,83,83);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 4
	this.tek = new lib.Символ36();
	this.tek.parent = this;
	this.tek.setTransform(330,282.9,1,1,0,0,0,364.9,38.5);

	this.timeline.addTween(cjs.Tween.get(this.tek).wait(1));

	// Слой 10
	this.such = new lib.Символ49();
	this.such.parent = this;
	this.such.setTransform(544.2,567.2,1,1,0,0,0,72,131);

	this.timeline.addTween(cjs.Tween.get(this.such).wait(1));

	// Слой 3
	this.instance_2 = new lib.Символ6();
	this.instance_2.parent = this;
	this.instance_2.setTransform(558.1,193.1,0.502,0.502,0,0,0,106,221.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 1
	this.round = new lib.Символ48();
	this.round.parent = this;
	this.round.setTransform(300.7,120.1,1,1,0,0,0,191.7,99.7);

	this.timeline.addTween(cjs.Tween.get(this.round).wait(1));

	// Символ 3
	this.instance_3 = new lib.Символ3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(337.7,182.5,1,1,0,0,0,346.7,207.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Слой 5
	this.instance_4 = new lib.Символ38();
	this.instance_4.parent = this;
	this.instance_4.setTransform(246.2,184.9,1,1,0,0,0,222.3,179.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Символ 1
	this.instance_5 = new lib.Символ1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(313,154.3,1,1,0,0,0,333,195.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(62.9,58.2,1293.2,668.6);
// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/back.png?1481301186982", id:"back"},
		{src:"images/book.png?1481301186982", id:"book"},
		{src:"images/chuvak_03.png?1481301186982", id:"chuvak_03"},
		{src:"images/chuvak_06.png?1481301186982", id:"chuvak_06"},
		{src:"images/chuvak_08.png?1481301186982", id:"chuvak_08"},
		{src:"images/chuvak_10.png?1481301186982", id:"chuvak_10"},
		{src:"images/chuvak_12.png?1481301186982", id:"chuvak_12"},
		{src:"images/chuvak_14.png?1481301186982", id:"chuvak_14"},
		{src:"images/chuvak_17.png?1481301186982", id:"chuvak_17"},
		{src:"images/chuvak_25.png?1481301186982", id:"chuvak_25"},
		{src:"images/fivemln.png?1481301186982", id:"fivemln"},
		{src:"images/fon.jpg?1481301186982", id:"fon"},
		{src:"images/handcursor.png?1481301186982", id:"handcursor"},
		{src:"images/imac.png?1481301186982", id:"imac"},
		{src:"images/lenta.png?1481301186982", id:"lenta"},
		{src:"images/logo_top.png?1481301186982", id:"logo_top"},
		{src:"images/pod.png?1481301186982", id:"pod"},
		{src:"images/rou.png?1481301186982", id:"rou"},
		{src:"images/such.png?1481301186982", id:"such"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;