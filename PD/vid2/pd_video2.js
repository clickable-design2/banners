(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,400);


(lib.dollar = function() {
	this.initialize(img.dollar);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,332,180);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,272,60);// helper functions:

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


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AubVAMAAAgp/Ic3AAMAAAAp/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ33, new cjs.Rectangle(-92.4,-134.4,184.8,268.8), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F31527").s().p("AqqE6IAAhLIi5AAIAABLIhVAAIAAiYIAiAAQALgOAFgRQAEgQACgZIATmTID0AAIAAHbIAmAAIAACYgAsrBYQgCAfgGARQgFAPgLALIBxAAIAAmMIhJAAgANqDvIAAmEIhsGEIhZAAIAAooIBNAAIAAFdIAgh5IBHjkIBgAAIAAIogAGGDvIAAooIDlAAIAABPIiPAAIAAHZgABPDvIAAooIBXAAIAADQIApAAQAhAAAYAJQAYAJARARQAQARAIAaQAIAZAAAhIAABIQAAAhgIAZQgIAagQARQgRASgYAIQgYAJghAAgACmCgIApAAQAWAAAKgLQALgMAAgdIAAhTQAAgbgLgNQgKgLgWAAIgpAAgAhHDvIAAjtIhjAAIAADtIhXAAIAAooIBXAAIAADtIBjAAIAAjtIBYAAIAAIogAojDvIAAooIDtAAIAABPIiWAAIAACaIB3AAIAABPIh3AAIAAChICWAAIAABPg");
	this.shape.setTransform(95.3,31.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(0,0,190.6,62.8), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABaESQgZgJgQgSQgRgSgJgaQgIgaAAghIAAkfQAAggAIgbQAJgaARgRQAQgSAZgJQAZgKAfAAQAgAAAZAKQAZAJAQASQARARAJAaQAJAbAAAgIAAEfQAAAhgJAaQgJAagRASQgQASgZAJQgZAJggAAQgfAAgZgJgAByi+QgMANAAAdIAAEpQAAAdAMAOQALAMAVAAQAWAAAMgMQAMgOAAgdIAAkpQAAgdgMgNQgMgMgWAAQgVAAgLAMgAoYESQgYgJgRgSQgQgSgIgaQgIgaAAghIAAkfQAAghAIgaQAIgaAQgRQARgSAYgJQAZgKAfAAQAgAAAYAKQAZAJAQASQAQARAJAaQAIAaAAAhIAAA2IhSAAIAAg7QAAgdgMgNQgMgMgWAAQgVAAgLAMQgMANAAAdIAAEpQAAAdAMANQALAMAVAAQAWAAAMgMQAMgNAAgdIAAhPIBSAAIAABKQAAAhgIAaQgJAagQASQgQASgZAJQgYAJggAAQgfAAgZgJgAIUEVIAAmFIhtGFIhZAAIAAooIBOAAIAAFdIAgh5IBHjkIBfAAIAAIogAkqEVIAAooICEAAQAhAAAZAIQAYAHAQAQQAPAQAIAYQAHAXAAAhIAAAUQAAArgNAbQgOAcgdANQARAHANAKQAMALAIAPQAPAdAAAtIAAAuQAAAggJAYQgIAZgQAQQgRARgZAIQgZAJggAAgAjTDGIAyAAQAXAAAKgMQAMgNAAgeIAAgwQAAgmgNgPQgNgOgeAAIgnAAgAjTgyIAiAAQAaAAAMgNQAOgOAAgfIAAgfQAAgegKgNQgLgOgXAAIgqAAg");
	this.shape.setTransform(61,28.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(0,0,122.1,56.6), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkUESQgZgJgPgSQgRgSgJgaQgHgagBghIAAg9IBSAAIAABCQAAAdANAOQALAMAVAAQAXAAAKgNQAMgPAAgiIAAgsQAAgmgNgQQgOgQgdAAIgWAAIAAhOIAbAAQAaAAAMgNQANgOAAgfIAAgfQAAgkgMgPQgKgMgXAAQgVAAgMAMQgMANAAAdIAAAtIhQAAIAAgpQAAghAIgaQAIgaAQgRQAQgRAYgKQAYgJAgAAQAgAAAYAKQAYAJAQASQARARAIAaQAIAaAAAhIAAAPQABAsgQAcQgOAdgfAMQAQAHALALQALALAJAPQAOAcgBArIAAAsQAAAhgIAaQgIAagRASQgQASgYAJQgYAJggAAQggAAgYgJgApNESQgZgJgRgSQgRgSgIgaQgJgaAAghIAAkfQAAggAJgbQAIgaARgRQARgSAZgJQAZgKAfAAQAgAAAZAKQAZAJAQASQARARAJAaQAIAbABAgIAAEfQgBAhgIAaQgJAagRASQgQASgZAJQgZAJggAAQgfAAgZgJgAo2i+QgMANAAAdIAAEpQAAAdAMAOQAMAMAVAAQAWAAAMgMQAMgOgBgdIAAkpQABgdgMgNQgMgMgWAAQgVAAgMAMgAOEEVIAAmFIhsGFIhZAAIAAooIBNAAIAAFdIAhh5IBGjkIBgAAIAAIogAIuEVIAAmMIg8GMIhSAAIhBmGIAAGGIhLAAIAAooIB4AAIBAGHIA7mHIB5AAIAAIogAggEVIAAooIBVAAIAADQIAqAAQAgAAAYAIQAZAJAQASQAQARAIAYQAIAaAAAhIAABIQAAAhgIAaQgIAZgQASQgQARgZAJQgYAJggAAgAA1DGIAqAAQAWAAAJgMQALgMAAgcIAAhTQAAgdgLgMQgJgLgWAAIgqAAgAvSEVIAAooICDAAQAiAAAZAIQAYAHAPAQQAQAQAIAYQAHAXAAAhIAAAUQAAArgNAbQgOAcgdANQARAHANAKQAMALAIAPQAOAdAAAtIAAAuQABAggJAYQgIAZgQAQQgRARgZAIQgZAJggAAgAt7DGIAyAAQAWAAALgMQAMgNAAgeIAAgwQAAgmgOgPQgMgOgeAAIgnAAgAt7gyIAiAAQAZAAANgNQAOgOAAgfIAAgfQAAgegKgNQgLgOgXAAIgqAAg");
	this.shape.setTransform(97.9,28.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(0,0,195.8,56.6), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(0,0,272,60), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnrE9IAAhKIi5AAIAABKIhVAAIAAiYIAiAAQALgOAFgRQAEgQACgZIATmTID0AAIAAHbIAlAAIAACYgAptBcQgBAegGARQgGAQgLAKIByAAIAAmLIhJAAgAKMDvQgZgIgQgTQgRgRgIgaQgIgaAAghIAAg9IBSAAIAABCQAAAdAMANQALANAWAAQAXAAAKgNQAMgPAAgiIAAgsQAAgmgNgQQgOgQgeABIgVAAIAAhQIAaAAQAaAAAMgMQAOgOAAgfIAAggQAAgjgMgPQgKgNgXAAQgWABgLAMQgNANAAAcIAAAuIhPAAIAAgpQAAghAHgaQAJgaAPgSQAQgQAZgKQAXgJAgAAQAgAAAYAJQAZAKAQARQARASAHAaQAJAaAAAhIAAAOQAAAtgPAcQgOAdggAMQAQAHAMALQALAMAIAPQAOAaAAAsIAAAsQAAAhgJAaQgHAagRARQgQATgZAIQgYAKgggBQggABgXgKgAFTDvQgZgIgRgTQgRgRgJgaQgIgaAAghIAAkfQAAggAIgbQAJgaARgSQARgRAZgKQAYgJAgAAQAfAAAZAJQAZAKARARQARASAIAaQAJAbAAAgIAAEfQAAAhgJAaQgIAagRARQgRATgZAIQgZAKgfgBQggABgYgKgAFqjgQgMANAAAcIAAEqQAAAdAMANQALANAWAAQAWAAALgNQAMgNAAgdIAAkqQAAgcgMgNQgLgMgWgBQgWABgLAMgAxUDvQgYgIgQgTQgRgRgIgaQgIgaAAghIAAg9IBSAAIAABCQAAAdAMANQAMANAVAAQAWAAALgNQAMgPAAgiIAAgsQAAgmgOgQQgNgQgdABIgXAAIAAhQIAbAAQAaAAAMgMQAOgOAAgfIAAggQAAgjgMgPQgLgNgWAAQgVABgNAMQgMANABAcIAAAuIhRAAIAAgpQAAghAJgaQAHgaARgSQAPgQAYgKQAYgJAgAAQAgAAAYAJQAZAKAQARQARASAIAaQAIAaAAAhIAAAOQAAAtgPAcQgPAdgeAMQAPAHAMALQALAMAIAPQAOAaAAAsIAAAsQAAAhgIAaQgIAagRARQgQATgZAIQgYAKgggBQggABgYgKgAarDzIgQhlIhqAAIgPBlIhPAAIBYopIB/AAIBZIpgAaQBDIgrkXIgpEXIBUAAgAURDzIAAnZIhbAAIAAhQIENAAIAABQIhbAAIAAHZgARFDzIAAmFIhtGFIhZAAIAAopIBNAAIAAFeIAhh6IBHjkIBfAAIAAIpgAB2DzIAAnZIhiAAIAAHZIhWAAIAAopIERAAIAAIpgAllDzIAAopIDuAAIAABQIiXAAIAACZIB3AAIAABPIh3AAIAACiICXAAIAABPgA27DzIAAopIDtAAIAABQIiWAAIAACZIB3AAIAABPIh3AAIAACiICWAAIAABPgA8BDzIAAopIDzAAIAABQIidAAIAACNIAzAAQAgAAAZAJQAZAJAQARQARARAIAaQAIAYAAAiIAAA7QAAAhgIAaQgIAZgRASQgQARgZAJQgZAIggABgA6rCkIAzAAQAWAAALgMQALgMAAgdIAAhGQAAgcgLgMQgLgLgWAAIgzAAg");
	this.shape.setTransform(187.4,37);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(7.9,5.3,358.9,63.4), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F31527").s().p("AgEE9IAAhKIi6AAIAABKIhUAAIAAiYIAiAAQALgOAFgRQAEgQABgZIAUmTIDyAAIAAHbIAmAAIAACYgAiGBcQgBAegGARQgGAQgLAKIByAAIAAmLIhKAAgAMxDvQgZgIgRgTQgRgRgIgaQgJgaAAghIAAkfQAAggAJgbQAIgaARgRQARgTAZgIQAYgKAgAAQAgAAAZAKQAYAIARATQARARAIAaQAJAbAAAgIAAEfQAAAhgJAaQgIAagRARQgRATgYAIQgZAJggAAQggAAgYgJgANIjgQgMANAAAcIAAEqQAAAdAMANQALANAWAAQAWAAALgNQAMgNAAgdIAAkqQAAgcgMgNQgLgNgWAAQgWAAgLANgAnzDvQgZgIgRgTQgRgRgIgaQgJgaAAghIAAkfQAAggAJgbQAIgaARgRQARgTAZgIQAYgKAgAAQAgAAAZAKQAYAIARATQARARAIAaQAJAbAAAgIAAEfQAAAhgJAaQgIAagRARQgRATgYAIQgZAJggAAQggAAgYgJgAncjgQgMANAAAcIAAEqQAAAdAMANQALANAWAAQAWAAALgNQAMgNAAgdIAAkqQAAgcgMgNQgLgNgWAAQgWAAgLANgATrDzIhUjdIgbAzIAACqIhXAAIAAopIBXAAIAADxIBxjxIBXAAIh4D3IB4EygAHDDzIAAopICAAAQAgABAZAIQAYAJAQASQAQARAIAaQAJAZAAAhIAABIQAAAhgJAaQgIAZgQARQgQARgYAJQgZAIggABIgpAAIAADQgAIagrIApAAQAWAAAKgLQAKgNAAgdIAAhSQAAgdgKgNQgKgLgWABIgpAAgAFDDzIgPhlIhrAAIgPBlIhPAAIBYopIB/AAIBZIpgAEoBDIgqkXIgqEXIBUAAgArPDzIAAnZIhjAAIAAHZIhXAAIAAopIETAAIAAIpgA1DDzIAAopICDAAQAiABAYAHQAZAIAPAQQAQAQAHAXQAIAYAAAgIAAAVQAAAqgOAbQgOAcgcAOQARAHANALQAMAKAIAQQAOAbAAAuIAAAtQAAAhgIAXQgIAZgRARQgQARgZAIQgZAJghAAgAzsCkIAxAAQAXgBALgLQAMgNAAgeIAAgwQAAgmgOgPQgMgNgegBIgnAAgAzshVIAiAAQAZAAANgMQAOgOAAgfIAAggQAAgdgLgNQgKgOgXAAIgqAAg");
	this.shape.setTransform(134.8,31.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(0,0,269.7,63.4), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dollar();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(0,0,332,180), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgvTAYxMAAAgxhMBenAAAMAAAAxhg");
	this.shape.setTransform(302.8,158.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(0,0,605.7,317), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F31527").s().p("AEtF7IAAgwQgcgGgWgOQgUgOgPgVQgPgUgGgcQgIgcAAgjIAAguIBkAAIAAA1QAAAjAPAQQANAOAaAAQAbAAAOgOQAOgQAAgjQAAgZgJgVQgHgTgQgTQgPgSg3guQgygogWghQgPgYgIgbQgJgeAAgiQAAgiAHgbQAHgcAOgVQAOgVAVgNQAVgOAbgGIAAgyIBXAAIAAAyQAcAGAVANQAWAOAOAVQAOAVAHAbQAHAcAAAiIAAAVIhkAAIAAgbQAAgkgOgPQgNgQgaAAQgaAAgNAQQgOAPAAAkQAAAYAJAWQAJATAPATQAOARA5AvQAxAoAWAhQAPAYAIAaQAJAeAAAiQAAAigHAdQgIAbgOAVQgOAVgWAOQgVAOgcAGIAAAwgAhnFNQgegLgUgWQgVgWgKgfQgLggAAgoIAAldQAAgoALgfQAKggAVgVQAUgWAegLQAegLAmAAQAnAAAdALQAeALAVAWQAUAVAKAgQALAfAAAoIAAFdQAAAogLAgQgKAfgUAWQgVAWgeALQgdALgnAAQgmAAgegLgAhKjnQgPAQAAAjIAAFqQAAAiAPARQANAPAaAAQAbAAANgPQAOgRAAgiIAAlqQAAgjgOgQQgNgPgbAAQgaAAgNAPgAmjFQIAAoAIhSAAIAAhKQAeAAAUgHQAUgGANgMQASgRAPgrIBHAAIAAKfg");
	this.shape.setTransform(50.2,37.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(0,0,100.4,75.9), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],-62,0,62,0).s().p("AprYxMAAAgxhITXAAMAAAAxhg");
	this.shape.setTransform(62,158.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(0,0,124,317), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(325,136);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(325,136,700,400), null);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F31527").s().p("AgCCCIh/kDIEDAAIh/EDg");
	this.shape.setTransform(22,10.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ28, new cjs.Rectangle(9,-2.3,26,26), null);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ33();
	this.instance.parent = this;
	this.instance.setTransform(0.1,0,1.147,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ11();
	this.instance.parent = this;
	this.instance.setTransform(130.3,19.4,0.49,0.49,0,0,0,135.1,31.7);

	this.instance_1 = new lib.Символ5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(24.3,18.4,0.484,0.484,0,0,0,50.2,37.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(0,0,196.3,36.7), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 18
	this.instance = new lib.Символ18();
	this.instance.parent = this;
	this.instance.setTransform(473.9,37.4,1,1,0,0,0,95.2,31.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({scaleX:0.9,scaleY:0.9},4).to({regX:95.3,scaleX:1.07,scaleY:1.07,x:474.1},5).to({regX:95.2,scaleX:1,scaleY:1,x:473.9},9).wait(6));

	// Символ 17
	this.instance_1 = new lib.Символ17();
	this.instance_1.parent = this;
	this.instance_1.setTransform(301.3,33.5,1,1,0,0,0,61,28.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({regY:28.3,scaleX:0.84,scaleY:0.84,y:33.7},4).to({regY:28.2,scaleX:1.05,scaleY:1.05,y:33.5},5).to({scaleX:1,scaleY:1},9).wait(11));

	// Символ 16
	this.instance_2 = new lib.Символ16();
	this.instance_2.parent = this;
	this.instance_2.setTransform(124.8,33.5,1,1,0,0,0,97.9,28.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:98,regY:28.4,scaleX:0.85,scaleY:0.85,x:124.9,y:33.7},4).to({regX:97.9,regY:28.3,scaleX:1.06,scaleY:1.06,x:124.8,y:33.6},5).to({regY:28.2,scaleX:1,scaleY:1,y:33.5},9).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(26.9,5.3,542.4,63.4);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 19
	this.instance = new lib.Символ19();
	this.instance.parent = this;
	this.instance.setTransform(128.1,15.6,1,1,0,0,0,98.1,18.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({x:133.1},3).to({x:-195.9,y:13.2},5).to({x:128.1,y:15.6},11).to({x:133.1},4).to({x:128.1},4).wait(1));

	// Символ 12
	this.instance_1 = new lib.Символ12();
	this.instance_1.parent = this;
	this.instance_1.setTransform(332.1,41.7,0.495,0.495,0,0,0,184.8,87.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(59).to({x:326.1},3).to({x:629.1,y:40.9},5).to({x:332.1,y:41.7},11).to({x:326.1},4).to({x:332.1},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(30,-2.8,392.2,36.7);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.parent = this;
	this.instance.setTransform(166,90,1,1,0,0,0,166,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:94.8},9,cjs.Ease.get(-1)).to({y:100},10,cjs.Ease.get(1)).to({y:95},10,cjs.Ease.get(-1)).to({y:90},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,332,180);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.parent = this;
	this.instance.setTransform(305.3,62,0.919,1.893,0,-90,90,62.1,158.3);

	this.instance_1 = new lib.Символ2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(305.3,255.9,0.919,1.893,0,90,-90,62.1,158.3);

	this.instance_2 = new lib.Символ2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(547.9,158.4,0.919,1,0,0,180,62.1,158.4);

	this.instance_3 = new lib.Символ2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(62,158.5,1,1,0,0,0,62,158.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(0,0,605.7,317), null);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ28();
	this.instance.parent = this;
	this.instance.setTransform(13,13,1,1,0,0,0,13,13);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:23},7,cjs.Ease.get(-1)).to({y:33},7,cjs.Ease.get(1)).to({y:22.4},8,cjs.Ease.get(-1)).to({y:13},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(9,-2.3,26,26);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(5));

	// Слой 1
	this.instance = new lib.Символ14();
	this.instance.parent = this;
	this.instance.setTransform(218.4,29.3,0.805,0.805,0,0,0,298,41.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-2.7},4).to({y:29.3},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,436.9,51.1);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(5));

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.parent = this;
	this.instance.setTransform(166.1,25.4,1,1,0,0,0,196.1,22.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:22.9,scaleY:0.05,y:1.4,alpha:0},4).to({regY:22.5,scaleY:1,y:25.4,alpha:1},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,392.2,36.7);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ29();
	this.instance.parent = this;
	this.instance.setTransform(349.6,91.1,0.6,0.6,0,90,-90,13,13.1);

	this.instance_1 = new lib.Символ29();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-10.7,91.1,0.6,0.6,-90,0,0,13,13.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(40));

	// Слой 1
	this.instance_2 = new lib.Символ7();
	this.instance_2.parent = this;
	this.instance_2.setTransform(166,90,1,1,0,0,0,166,90);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-7,x:166.1,y:90.1},9,cjs.Ease.get(-1)).to({rotation:-15},10,cjs.Ease.get(1)).to({rotation:-7.3},10,cjs.Ease.get(-1)).to({rotation:0,x:166,y:90},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.9,0,378.8,180);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ8();
	this.instance.parent = this;
	this.instance.setTransform(63,33,1,1,0,0,0,166,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ32, new cjs.Rectangle(-122.9,-57,378.8,180), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.parent = this;
	this.instance.setTransform(216,90,1,1,0,0,0,166,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:57.6},34,cjs.Ease.get(-1)).to({x:-114},35,cjs.Ease.get(1)).to({x:81.3},35,cjs.Ease.get(-1)).to({x:216},35,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(30.1,0,378.8,180);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.parent = this;
	this.instance.setTransform(166,90,1,1,0,0,0,166,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(30.1,0,378.8,180), null);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(13).call(this.frame_14).wait(15).call(this.frame_29).wait(1));

	// Слой 5
	this.instance = new lib.Символ4();
	this.instance.parent = this;
	this.instance.setTransform(282.9,51.4,0.926,0.926,0,0,0,166,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(29));

	// Слой 1
	this.instance_1 = new lib.Символ32();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-45.4,0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({x:164.1},6,cjs.Ease.get(-1)).to({x:257.3},7,cjs.Ease.get(1)).to({x:62.1},7,cjs.Ease.get(-1)).to({x:-41.6},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(157,-32,350.8,166.7);


// stage content:
(lib.pd_video2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.but1.addEventListener("mouseover", fl_Clickover.bind(this));
		function fl_Clickover() {
			this.girl.gotoAndPlay(2);
		}
		
		this.but1.addEventListener("mouseout", fl_Clickout.bind(this));
		function fl_Clickout() {
			this.girl.gotoAndStop(0);
		}
		
		//---------------
		
		this.but2.addEventListener("mouseover", fl_Clickover2.bind(this));
		function fl_Clickover2() {
			this.girl.gotoAndPlay(16);
		}
		
		this.but2.addEventListener("mouseout", fl_Clickout2.bind(this));
		function fl_Clickout2() {
			this.girl.gotoAndStop(0);
		}
		
		
		
		stage.canvas.addEventListener("mouseover", fl_mouseover.bind(this));
		function fl_mouseover() {
			this.txt1.gotoAndPlay(1);
			this.txt2.gotoAndPlay(1);
		}
		
		stage.canvas.addEventListener("mouseout", fl_mouseout.bind(this));
		
		function fl_mouseout() {
			this.txt1.gotoAndPlay(5);
			this.txt2.gotoAndPlay(5);
		}
		
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
		
			this.fon.x = -stage.mouseX / 10;
			this.fon.y = -stage.mouseY / 10;
		}
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open(clickTAG, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 9
	this.but2 = new lib.Символ34();
	this.but2.parent = this;
	this.but2.setTransform(448.7,155.1,1.426,1.183);
	new cjs.ButtonHelper(this.but2, 0, 1, 2, false, new lib.Символ34(), 3);

	this.but1 = new lib.Символ34();
	this.but1.parent = this;
	this.but1.setTransform(146.7,155.2,1.426,1.183,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.but1, 0, 1, 2, false, new lib.Символ34(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.but1},{t:this.but2}]}).wait(1));

	// Слой 4
	this.txt2 = new lib.Символ23();
	this.txt2.parent = this;
	this.txt2.setTransform(300.1,125,1,1,0,0,0,218.4,25.6);

	this.txt1 = new lib.Символ22();
	this.txt1.parent = this;
	this.txt1.setTransform(300.1,74.9,1,1,0,0,0,196.1,22.2);

	this.instance = new lib.Символ15();
	this.instance.parent = this;
	this.instance.setTransform(300.1,27.8,0.566,0.566,0,0,0,136.1,30.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.txt1},{t:this.txt2}]}).wait(1));

	// Слой 3
	this.girl = new lib.Символ30();
	this.girl.parent = this;
	this.girl.setTransform(118.6,184);

	this.timeline.addTween(cjs.Tween.get(this.girl).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(297.8,147.6,1,1,0,0,0,302.8,158.5);
	this.instance_1.alpha = 0.609;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 5
	this.instance_2 = new lib.Символ6();
	this.instance_2.parent = this;
	this.instance_2.setTransform(297.8,147.6,1,1,0,0,0,302.8,158.5);
	this.instance_2.alpha = 0.672;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 1
	this.fon = new lib.Символ1();
	this.fon.parent = this;
	this.fon.setTransform(-51.1,10,1,1,0,0,0,350,200);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(223.9,96,702.4,400);
// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg?1487679345547", id:"bg"},
		{src:"images/dollar.png?1487679345547", id:"dollar"},
		{src:"images/logo.png?1487679345547", id:"logo"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;