(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,400);


(lib.chip111 = function() {
	this.initialize(img.chip111);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,176,180);


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


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AH3DfIAAm9IBGAAIAACoIAiAAQA1AAAaAcQAZAbAAA2IAAA6QAAA2gZAcQgOAOgTAHQgUAHgaAAgAI9CfIAiAAQAQAAAJgJQAJgJAAgYIAAhDQAAgYgJgJQgJgJgQAAIgiAAgAFJDfIAAl9IhKAAIAAhAIDZAAIAABAIhJAAIAAF9gACtDfIgNhRIhWAAIgMBRIhAAAIBHm9IBmAAIBIG9gACWBRIgijgIghDgIBDAAgAjcDfIAAm9IBmAAQA1AAAaAcQAaAcAAA2IAAA6QAAA2gaAbQgNAOgUAHQgTAHgbAAIggAAIAACogAiWgHIAgAAQARAAAJgJQAJgJAAgYIAAhDQAAgYgJgJQgJgJgRAAIggAAgAm1DfIAAm9IC4AAIAABAIhzAAIAAF9gAonDfIAAlCIhXFCIhIAAIAAm9IA+AAIAAEKIBIkKIBYAAIAAG9g");
	this.shape.setTransform(100.7,27);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ42, new cjs.Rectangle(29.6,4.8,142.2,44.6), null);


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


(lib.Символ5копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlZBvQgKgFgGgHQgGgHgEgLQgDgKAAgNIAAhzQAAgNADgKQAEgLAGgHQAGgIAKgDQAKgEANAAQANAAAJAEQAJADAHAIQAGAHAEALQADAKAAANIAABzQAAANgDAKQgEALgGAHQgHAHgJAFQgJADgNAAQgNAAgKgDgAlXhSQgGAIAAAQIAAB1QAAAQAGAIQAIAJANgBQANABAHgJQAGgIAAgQIAAh1QAAgQgGgIQgHgJgNAAQgNAAgIAJgAhiBxIAAgXQAOAAAHgEQAIgGACgMIAGgPIgzikIAZAAIAmCFIAhiFIAZAAIgwCuQgCAOgFAIQgEAKgGAGQgHAGgKADQgJADgMAAIgEAAgAj/BxIAAgYQAJAAAEgCQAFgBACgFQAFgGAAgRIAHipIBbAAIAADfIgZAAIAAjIIgrAAIgFCRQgBAOgCAJQgCAKgFAHQgGAIgIADQgJAEgMABgAGUBwIAAjfIAZAAIAABZIAWAAQANgBAKAEQAKADAGAHQAGAHAEAJQADAKAAAOIAAAbQAAAMgDAKQgDAKgGAHQgGAIgKADQgJAEgNAAgAGtBZIAYAAQANABAGgJQAHgHAAgPIAAgeQAAgQgHgHQgHgHgOAAIgWAAgAE/BwIAAjIIgpAAIAAgXIBrAAIAAAXIgpAAIAADIgADtBwIAAixIg4CxIgaAAIAAjfIAVAAIAACmIA4imIAcAAIAADfgABoBwIAAhjQgGAIgKAFQgIAFgLAAQgLAAgJgFQgHgDgGgIQgGgHgCgJQgDgKAAgKIAAhaIAYAAIAABYQABAOAHAIQAHAJANgBQAMAAAGgGQAHgGACgNIAAhdIAZAAIAADfgAmmBwIAAjIIg3AAIAADIIgZAAIAAjfIBpAAIAADfg");
	this.shape.setTransform(14.1,-4.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5копия, new cjs.Rectangle(-36.2,-16.1,100.6,22.8), null);


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


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.chip111();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(0,0,176,180), null);


(lib.Символ4копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FE1F2D").s().p("A7VGQIAAsfMA2rAAAIAAMfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4копия, new cjs.Rectangle(-175,-40,350,80), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FE1F2D").s().p("A7VGQIAAsfMA2rAAAIAAMfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(-175,-40,350,80), null);


(lib.Символ1копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990033").s().p("AuIDPIAAmdIcRAAIAAGdg");
	this.shape.setTransform(90.5,20.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1копия, new cjs.Rectangle(0,0,181,41.4), null);


(lib.Символ1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990033").s().p("AuIDPIAAmdIcRAAIAAGdg");
	this.shape.setTransform(90.5,20.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1_1, new cjs.Rectangle(0,0,181,41.4), null);


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


(lib.Символ13_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 19
	this.instance_1 = new lib.Символ19();
	this.instance_1.parent = this;
	this.instance_1.setTransform(128.1,15.6,1,1,0,0,0,98.1,18.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(59).to({x:133.1},3).to({x:-195.9,y:13.2},5).to({x:128.1,y:15.6},11).to({x:133.1},4).to({x:128.1},4).wait(1));

	// Символ 12
	this.instance_2 = new lib.Символ12();
	this.instance_2.parent = this;
	this.instance_2.setTransform(332.1,41.7,0.495,0.495,0,0,0,184.8,87.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(59).to({x:326.1},3).to({x:629.1,y:40.9},5).to({x:332.1,y:41.7},11).to({x:326.1},4).to({x:332.1},4).wait(1));

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


(lib.Символ14_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance_3 = new lib.Символ13();
	this.instance_3.parent = this;
	this.instance_3.setTransform(88,90,1,1,0,0,0,88,90);
	this.instance_3.alpha = 0;
	this.instance_3.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:0.172},6,cjs.Ease.get(-1)).to({alpha:0.398},8,cjs.Ease.get(1)).to({alpha:0.211},7,cjs.Ease.get(-1)).to({alpha:0.082},3,cjs.Ease.get(1)).to({alpha:0},5).wait(1));

	// Слой 1
	this.instance_4 = new lib.Символ13();
	this.instance_4.parent = this;
	this.instance_4.setTransform(88,90,1,1,0,0,0,88,90);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,176,180);


(lib.Символ12_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ14_1();
	this.instance.parent = this;
	this.instance.setTransform(88,90,1,1,0,0,0,88,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.97,x:88.1},0).wait(1).to({scaleX:0.94},0).wait(2).to({regX:88.1,scaleX:0.9},0).wait(1).to({regX:88.2,scaleX:0.81,x:88.3},0).wait(1).to({scaleX:0.69},0).wait(1).to({scaleX:0.5},0).wait(1).to({regX:88.3,scaleX:0.39},0).wait(1).to({regX:88.5,scaleX:0.33},0).wait(1).to({scaleX:0.25},0).wait(1).to({regX:88.7,scaleX:0.19},0).wait(1).to({regX:88.9,scaleX:0.14},0).wait(1).to({regX:89.2,scaleX:0.07},0).wait(1).to({regX:90.5,scaleX:0.03,x:86},0).to({_off:true},1).wait(1).to({_off:false,x:90.1},0).wait(1).to({regX:89.2,scaleX:0.07,x:88.6},0).wait(1).to({regX:88.9,scaleX:0.14},0).wait(1).to({regX:88.7,scaleX:0.19,x:89.3},0).wait(1).to({regX:88.5,scaleX:0.25,x:89.1},0).wait(1).to({scaleX:0.33,x:88.9},0).wait(1).to({regX:88.3,scaleX:0.39,x:88.4},0).wait(1).to({regX:88.2,scaleX:0.5},0).wait(1).to({scaleX:0.69,x:89.4},0).wait(1).to({scaleX:0.81,x:88.6},0).wait(1).to({regX:88.1,scaleX:0.9,x:88.8},0).wait(1).to({regX:88,scaleX:0.94,x:88.7},0).wait(1).to({x:89},0).wait(1).to({scaleX:0.97,x:88.1},0).wait(1).to({scaleX:1,x:88},0).wait(30));

	// Слой 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#A72429","#A72429","#FFFFFF","#FFFFFF","#A72429","#A72429","#FFFFFF","#FFFFFF","#A72429","#A72429","#FFFFFF"],[0,0.153,0.157,0.365,0.38,0.627,0.635,0.839,0.839,0.961,0.984],-7.4,89.8,-7.4,-89.9).s().p("Aj+OFIgI8JIB+AAICWA+QHkNKnKMhQg7AtiSAzg");
	this.shape_1.setTransform(110.9,90.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#A72429","#A72429","#FFFFFF","#FFFFFF","#A72429","#A72429","#FFFFFF","#FFFFFF","#A72429","#A72429","#FFFFFF"],[0,0.153,0.157,0.365,0.38,0.627,0.635,0.839,0.839,0.961,0.984],0,90.2,0,-90.1).s().p("Ai+OAIAA7/IBzAAQIWOSoWNtg");
	this.shape_2.setTransform(110.7,89.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#A72429","#A72429","#FFFFFF","#FFFFFF","#A72429","#A72429","#FFFFFF","#FFFFFF","#A72429","#A72429","#FFFFFF"],[0,0.153,0.157,0.365,0.38,0.627,0.635,0.839,0.839,0.961,0.984],-10.4,90.4,-10.4,-90.3).s().p("AigOLIAA8VIB0AAQGbOWmbN/g");
	this.shape_3.setTransform(109.1,90);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#A72429","#A72429","#FFFFFF","#FFFFFF","#A72429","#A72429","#FFFFFF","#FFFFFF","#A72429","#A72429","#FFFFFF"],[0,0.153,0.157,0.365,0.38,0.627,0.635,0.839,0.839,0.961,0.984],-4.7,89.7,-4.7,-91).s().p("Ah8OEIgX8HICbAAQEXOIkUN/g");
	this.shape_4.setTransform(103.4,90);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#A72429","#A72429","#FFFFFF","#FFFFFF","#A72429","#A72429","#FFFFFF","#FFFFFF","#A72429","#A72429","#FFFFFF"],[0,0.153,0.157,0.365,0.38,0.627,0.635,0.839,0.839,0.961,0.984],-7.2,90.2,-7.2,-90.6).s().p("AiAOJIAA8RIB1AAQEZOUkaN9g");
	this.shape_5.setTransform(102.4,89.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#A72429","#A72429","#FFFFFF","#FFFFFF","#A72429","#A72429","#FFFFFF","#FFFFFF","#A72429","#A72429","#FFFFFF"],[0,0.153,0.157,0.365,0.38,0.627,0.635,0.839,0.839,0.961,0.984],1.8,89.7,1.8,-91).s().p("AhXOEIAA8HIB1AAQB0N9h0OKg");
	this.shape_6.setTransform(100.5,90);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#A72429","#A72429","#FFFFFF","#FFFFFF","#A72429","#A72429","#FFFFFF","#FFFFFF","#A72429","#A72429","#FFFFFF"],[0,0.153,0.157,0.365,0.38,0.627,0.635,0.839,0.839,0.961,0.984],-9.1,90.4,-9.1,-90.3).s().p("AhTOLIAA8VIBTAAQCpOPipOGg");
	this.shape_7.setTransform(97.8,89.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#A72429","#A72429","#FFFFFF","#FFFFFF","#A72429","#A72429","#FFFFFF","#FFFFFF","#A72429","#A72429","#FFFFFF"],[0,0.153,0.157,0.365,0.38,0.627,0.635,0.839,0.839,0.961,0.984],-1.8,90.4,-1.8,-90.3).s().p("AhQOLIAA8VIB+AAQBFOKhFOLg");
	this.shape_8.setTransform(93.9,89.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#A72429","#A72429","#FFFFFF","#FFFFFF","#A72429","#A72429","#FFFFFF","#FFFFFF","#A72429","#A72429","#FFFFFF"],[0,0.153,0.157,0.365,0.38,0.627,0.635,0.839,0.839,0.961,0.984],0,90.4,0,-90.3).s().p("AhoOLIAA8VIDQAAIAAcVg");
	this.shape_9.setTransform(88.5,89.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#A72429","#A72429","#FFFFFF","#FFFFFF","#A72429","#A72429","#FFFFFF","#FFFFFF","#A72429","#A72429","#FFFFFF"],[0,0.153,0.157,0.365,0.38,0.627,0.635,0.839,0.839,0.961,0.984],1.8,90.4,1.8,-90.3).s().p("AgtOLQhFuLBFuKIB+AAIAAcVg");
	this.shape_10.setTransform(82.2,89.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#A72429","#A72429","#FFFFFF","#FFFFFF","#A72429","#A72429","#FFFFFF","#FFFFFF","#A72429","#A72429","#FFFFFF"],[0,0.153,0.157,0.365,0.38,0.627,0.635,0.839,0.839,0.961,0.984],9.1,90.4,9.1,-90.3).s().p("AABOLQipuGCpuPIBTAAIAAcVg");
	this.shape_11.setTransform(79.6,89.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#A72429","#A72429","#FFFFFF","#FFFFFF","#A72429","#A72429","#FFFFFF","#FFFFFF","#A72429","#A72429","#FFFFFF"],[0,0.153,0.157,0.365,0.38,0.627,0.635,0.839,0.839,0.961,0.984],-1.7,89.6,-1.7,-91.1).s().p("AgeODQhyuIByt9IB2AAIAAcFg");
	this.shape_12.setTransform(79.4,90.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#A72429","#A72429","#FFFFFF","#FFFFFF","#A72429","#A72429","#FFFFFF","#FFFFFF","#A72429","#A72429","#FFFFFF"],[0,0.153,0.157,0.365,0.38,0.627,0.635,0.839,0.839,0.961,0.984],7.2,89.9,7.2,-90.8).s().p("AANOGQkZt6EWuRIB3AAIAAcLg");
	this.shape_13.setTransform(76.5,89.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#A72429","#A72429","#FFFFFF","#FFFFFF","#A72429","#A72429","#FFFFFF","#FFFFFF","#A72429","#A72429","#FFFFFF"],[0,0.153,0.157,0.365,0.38,0.627,0.635,0.839,0.839,0.961,0.984],7,89.3,7,-91.4).s().p("AALOAQkPt1EJuKIB6AAIAAb/g");
	this.shape_14.setTransform(74.8,90.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#A72429","#A72429","#FFFFFF","#FFFFFF","#A72429","#A72429","#FFFFFF","#FFFFFF","#A72429","#A72429","#FFFFFF"],[0,0.153,0.157,0.365,0.38,0.627,0.635,0.839,0.839,0.961,0.984],10.4,89.7,10.4,-91.1).s().p("AAtOEQmYt5GSuNIB6AAIAAcGg");
	this.shape_15.setTransform(72.8,90.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#A72429","#A72429","#FFFFFF","#FFFFFF","#A72429","#A72429","#FFFFFF","#FFFFFF","#A72429","#A72429","#FFFFFF"],[0,0.153,0.157,0.365,0.38,0.627,0.635,0.839,0.839,0.961,0.984],27.4,90.1,27.4,-89.6).s().p("ADXN5QmLipgor0QAsrzGNhgIAAbwg");
	this.shape_16.setTransform(69.3,91.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#A72429","#A72429","#FFFFFF","#FFFFFF","#A72429","#A72429","#FFFFFF","#FFFFFF","#A72429","#A72429","#FFFFFF"],[0,0.153,0.157,0.365,0.38,0.627,0.635,0.839,0.839,0.961,0.984],6.4,91.3,6.4,-88.4).s().p("ACbN2QiRgVgFg6QoBsUH/tOIB7g6IB+AAIgDbrg");
	this.shape_17.setTransform(64.9,91.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},7).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[]},1).wait(36));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,176,180);


(lib.Символ10копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ1копия();
	this.instance.parent = this;
	this.instance.setTransform(90.5,20.7,1,1,0,0,0,90.5,20.7);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.289},9,cjs.Ease.get(-1)).to({alpha:0.609},10,cjs.Ease.get(1)).to({alpha:0.27},10,cjs.Ease.get(-1)).to({alpha:0},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,181,41.4);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ1_1();
	this.instance.parent = this;
	this.instance.setTransform(90.5,20.7,1,1,0,0,0,90.5,20.7);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.289},9,cjs.Ease.get(-1)).to({alpha:0.609},10,cjs.Ease.get(1)).to({alpha:0.27},10,cjs.Ease.get(-1)).to({alpha:0},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,181,41.4);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5копия();
	this.instance.parent = this;
	this.instance.setTransform(76.7,26.4);

	this.instance_1 = new lib.Символ10();
	this.instance_1.parent = this;
	this.instance_1.setTransform(90.5,20.7,1,1,0,0,0,90.5,20.7);

	this.instance_2 = new lib.Символ4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(90.5,20.7,0.517,0.517);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FE3E20").s().p("AviDkIAAnHIfFAAIAAHHg");
	this.shape.setTransform(90.5,20.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance,p:{scaleX:1,scaleY:1,x:76.7,y:26.4}}]}).to({state:[{t:this.shape},{t:this.instance,p:{scaleX:1.099,scaleY:1.099,x:75.3,y:27}}]},1).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance,p:{scaleX:1,scaleY:1,x:76.7,y:26.4}}]},1).to({state:[{t:this.instance_2},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,181,41.4);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.Символ42();
	this.instance.parent = this;
	this.instance.setTransform(-6.1,2,1,1,0,0,0,100,35.8);

	this.instance_1 = new lib.Символ10копия();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-6.5,-6.3,1.989,1.989,0,0,0,90.5,20.7);

	this.instance_2 = new lib.Символ4копия();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-6.5,-6.3,1.029,1.029);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(-352.5,-50,705.1,198), null);


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


(lib.Символ42_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ12_1();
	this.instance.parent = this;
	this.instance.setTransform(83.1,84.7,0.941,0.941,0,0,0,88.2,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.84,scaleY:0.84},6,cjs.Ease.get(-1)).to({scaleX:0.71,scaleY:0.71},8,cjs.Ease.get(0.99)).to({regY:90.1,scaleX:0.84,scaleY:0.84,x:83,y:84.8},8,cjs.Ease.get(-1)).to({regY:90,scaleX:0.94,scaleY:0.94,x:83.1,y:84.7},7,cjs.Ease.get(0.99)).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,165.7,169.5);


(lib.Символ6_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ44();
	this.instance.parent = this;
	this.instance.setTransform(0,-0.7,1,1,0,0,0,90.5,20.7);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ44(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ42_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1.5,-34.4,0.728,0.728,0,0,0,82.9,84.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6_1, new cjs.Rectangle(-99.5,-96.1,199,123.4), null);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(7));

	// Слой 1
	this.instance = new lib.Символ20();
	this.instance.parent = this;
	this.instance.setTransform(97.3,24.8,0.521,0.521,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:410},5).to({x:97.3},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,187.7,43);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(1));

	// Слой 1
	this.instance = new lib.Символ6_1();
	this.instance.parent = this;
	this.instance.setTransform(96.5,141.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:95.5,y:-35.5},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6,45.4,181,123.4);


(lib.Символ10_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance_1 = new lib.Символ8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(216,90,1,1,0,0,0,166,90);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:57.6},34,cjs.Ease.get(-1)).to({x:-114},35,cjs.Ease.get(1)).to({x:81.3},35,cjs.Ease.get(-1)).to({x:216},35,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(30.1,0,378.8,180);


(lib.Символ4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ10_1();
	this.instance.parent = this;
	this.instance.setTransform(166,90,1,1,0,0,0,166,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4_1, new cjs.Rectangle(30.1,0,378.8,180), null);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6).call(this.frame_6).wait(7));

	// Слой 1
	this.instance = new lib.Символ4_1();
	this.instance.parent = this;
	this.instance.setTransform(125.9,83.4,0.926,0.926,0,0,0,166,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:166.1,regY:90.2,scaleX:0.71,scaleY:0.71,x:11.4,y:87.8},6).to({regX:166,regY:90,scaleX:0.93,scaleY:0.93,x:125.9,y:83.4},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,350.8,166.7);


// stage content:
(lib.pd_video = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		stage.canvas.addEventListener("mouseover", fl_mouseover.bind(this));
		function fl_mouseover() {
			this.btc.gotoAndPlay(1);
			this.igr.gotoAndPlay(1);
			this.dooll.gotoAndPlay(1);
		}
		
		stage.canvas.addEventListener("mouseout", fl_mouseout.bind(this));
		
		function fl_mouseout() {
			this.btc.gotoAndStop(0);
			this.igr.gotoAndPlay(7);
			this.dooll.gotoAndPlay(7);
		}
		
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
		
		this.fon.x = - stage.mouseX / 10;
		this.fon.y = - stage.mouseY / 10;
		}
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 8
	this.igr = new lib.Символ43();
	this.igr.parent = this;
	this.igr.setTransform(197.9,-57.3,1,1,0,0,0,93.9,21.4);

	this.timeline.addTween(cjs.Tween.get(this.igr).wait(1));

	// Слой 6
	this.btc = new lib.Символ24();
	this.btc.parent = this;
	this.btc.setTransform(491,325.3,1,1,0,0,0,90.5,20.7);

	this.timeline.addTween(cjs.Tween.get(this.btc).wait(1));

	// Слой 4
	this.instance = new lib.Символ15();
	this.instance.parent = this;
	this.instance.setTransform(300.1,27.8,0.566,0.566,0,0,0,136.1,30.1);

	this.instance_1 = new lib.Символ14();
	this.instance_1.parent = this;
	this.instance_1.setTransform(300.1,128.6,0.805,0.805,0,0,0,298,41.6);

	this.instance_2 = new lib.Символ13_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(270.1,78,1,1,0,0,0,196.1,22.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 3
	this.dooll = new lib.Символ21();
	this.dooll.parent = this;
	this.dooll.setTransform(448.4,235,1,1,0,0,0,175.3,83.3);

	this.timeline.addTween(cjs.Tween.get(this.dooll).wait(1));

	// Слой 2
	this.instance_3 = new lib.Символ3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(297.8,147.6,1,1,0,0,0,302.8,158.5);
	this.instance_3.alpha = 0.609;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Слой 5
	this.instance_4 = new lib.Символ6();
	this.instance_4.parent = this;
	this.instance_4.setTransform(297.8,147.6,1,1,0,0,0,302.8,158.5);
	this.instance_4.alpha = 0.672;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Слой 1
	this.fon = new lib.Символ1();
	this.fon.parent = this;
	this.fon.setTransform(-51.1,10,1,1,0,0,0,350,200);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(223.9,71.3,700,552.1);
// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg?1487671667401", id:"bg"},
		{src:"images/chip111.png?1487671667401", id:"chip111"},
		{src:"images/dollar.png?1487671667401", id:"dollar"},
		{src:"images/logo.png?1487671667401", id:"logo"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;