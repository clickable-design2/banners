(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.arm = function() {
	this.initialize(img.arm);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,62,177);


(lib.armer = function() {
	this.initialize(img.armer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,124,232);


(lib.armol = function() {
	this.initialize(img.armol);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,96,74);


(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,400);


(lib.bak = function() {
	this.initialize(img.bak);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,103);


(lib.bank = function() {
	this.initialize(img.bank);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,113,229);


(lib.bankaka = function() {
	this.initialize(img.bankaka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,142,211);


(lib.bodom = function() {
	this.initialize(img.bodom);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,420,516);


(lib.body = function() {
	this.initialize(img.body);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,232,323);


(lib.curs = function() {
	this.initialize(img.curs);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,69,79);


(lib.fing = function() {
	this.initialize(img.fing);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,28,55);


(lib.goobe = function() {
	this.initialize(img.goobe);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,34,22);


(lib.hand = function() {
	this.initialize(img.hand);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,70,60);


(lib.handry = function() {
	this.initialize(img.handry);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,92,84);


(lib.head = function() {
	this.initialize(img.head);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,133,204);


(lib.heady = function() {
	this.initialize(img.heady);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,143,157);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,170,35);


(lib.rotto = function() {
	this.initialize(img.rotto);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,69,39);


(lib.shold = function() {
	this.initialize(img.shold);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,83,169);// helper functions:

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


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bodom();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.848,0.848);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ46, new cjs.Rectangle(0,0,356.2,437.6), null);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.armol();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.848,0.848);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ45, new cjs.Rectangle(0,0,81.4,62.8), null);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shold();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.848,0.848);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ44, new cjs.Rectangle(0,0,70.4,143.4), null);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3A2A28").s().p("ABPASQgfgdgngOQgmgNglAmQgmAoAFgSQAFgRAXgSQAXgUAlgCQAjgBAgAWQAfAUALAVQAEAJgCAAQgEAAgRgSg");
	this.shape.setTransform(9.5,3.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3A2A28").s().p("ABMAcQgggTgngJQgmgLgjAZQgiAZAEgRQADgSAXgSQAXgUAlgCQAjgBAgAWQAfAUALAVQAGALgHAAQgFAAgPgJg");
	this.shape_1.setTransform(9.6,3.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3A2A28").s().p("ABJAlIhIgPQgmgIgfAMQggALACgSQADgRAXgTQAWgUAlgBQAkgCAfAWQAfAVALAVQAIAPgQAAIgPgCg");
	this.shape_2.setTransform(9.6,3.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3A2A28").s().p("AgCAqQgmgFgdgDQgdgCABgSQABgRAXgTQAXgUAlgCQAjgBAgAWQAfAVALAUQALAVglAEQgQACgRAAQgUAAgTgDg");
	this.shape_3.setTransform(9.7,4.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3A2A28").s().p("AgHA4QglgDgagQQgagQAAgSQAAgRAXgUQAWgUAlgBQAkgCAfAWQAfAWALAUQALAUgmAQQghAOgfAAIgLgBg");
	this.shape_4.setTransform(9.7,5.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3A2A28").s().p("AgBAlQgmgHgeADQgeACACgSQABgRAXgTQAXgUAlgCQAjgBAgAWQAfAUALAVQALAVgkAAIgFAAQgiAAghgFg");
	this.shape_5.setTransform(9.7,4.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3A2A28").s().p("ABLAgQghgPgmgKQgmgJgiAUQghAVADgSQADgRAXgTQAXgUAlgBQAjgCAgAWQAfAVALAVQAGAMgIAAQgHAAgNgGg");
	this.shape_6.setTransform(9.6,3.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape}]},1).to({state:[]},1).wait(32));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,0,20.1,7.2);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rotto();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ39, new cjs.Rectangle(0,0,69,39), null);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fing();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ37, new cjs.Rectangle(0,0,28,55), null);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlAAZIAFhSIJ8AhIgFBSg");
	mask.setTransform(61.1,31.9);

	// Слой 1
	this.instance = new lib.bankaka();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ35, new cjs.Rectangle(29,26.1,64.2,11.7), null);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CF1D1D").s().p("ADgEmIAAgnQgXgDgSgKQgRgLgMgQQgLgQgFgWQgGgWAAgaIAAgfIA1AAIAAAjQAAAjAPASQAPATAeAAQAfAAAPgTQAOgSAAgjQAAgVgHgSQgHgPgNgPQgNgQgtgiQgpgegSgZQgNgRgHgUQgHgWAAgaQAAgbAGgVQAFgWALgQQALgQARgKQARgKAXgEIAAgpIAvAAIAAApQAXAEARAKQARAKAMARQALAQAFAWQAGAVAAAaIAAAOIg2AAIAAgRQAAgjgOgTQgPgUgeAAQgdAAgPAUQgOATAAAjQAAAUAHASQAHAPAMAPQAOAQAtAiQAqAeASAZQAMARAHAUQAHAWAAAaQAAAagFAVQgGAWgLARQgMAQgRAKQgRALgXADIAAAngAhXD9QgVgJgPgSQgPgQgHgYQgHgYAAgdIAAkHQAAgeAHgXQAHgYAPgRQAPgRAVgJQAXgJAcAAQAeAAAVAJQAWAJAPARQAPARAHAYQAHAXAAAeIAAEHQAAAdgHAYQgHAYgPAQQgPASgWAJQgVAJgeAAQgcAAgXgJgAhRi8QgPATAAAkIAAENQAAAjAPATQAPAUAeAAQAfAAAOgUQAPgTAAgjIAAkNQAAgkgPgTQgOgUgfAAQgeAAgPAUgAkiEBIAAmiQgsAUgbACIAAgvQAUgBAPgFQAOgGALgJQAQgPALggIAoAAIAAH/g");
	this.shape.setTransform(36.2,29.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ31, new cjs.Rectangle(0,0,72.5,58.8), null);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAlEXIAAhDIjIAAIAABDIg0AAIAAh0IAfAAQAMgNAFgSQAEgPABgZIATlyIDEAAIAAG5IAlAAIAAB0gAhtBbQgBAcgFAPQgGASgKALICBAAIAAmHIhbAAgACaDUIAAgxQAgACAPgLQAQgLAHgcIALggIhwlpIA2AAIBTElIBJklIA5AAIhpF+QgHAegIASQgKAWgOAOQgOANgWAHQgRAFgYAAIgPgBgAH5DUIAAm4IhbAAIAAgyIDsAAIAAAyIhbAAIAAG4gAksDUIhejmIgaAtIAAC5Ig2AAIAAi5IgZgvIheDoIg4AAIBwkaIhtjQIA3AAIB1DiIAAjiIA2AAIAADiIB3jiIA2AAIhsDPIBwEbg");
	this.shape.setTransform(65,27.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ30, new cjs.Rectangle(0,0,130,55.9), null);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AHMD1IAAjRIgnAAQgSAAgMADQgOAEgIAIQgLAJgEAOQgEAOAAAVIAABMQAAAogKAUIg3AAQAJgTAAgoIAAhMIAFgkQADgSAHgMQAHgNAMgJQALgJARgFQgQgFgLgIQgLgJgIgNQgHgMgDgQIgFhNQAAgcAHgVQAGgVANgOQANgOAWgIQAUgGAdAAIBtAAIAAHpgAFrixQgNAQAAAhIAAAwQAAATAEAOQAEANALAHQAPAOAiAAIAqAAIAAi1Ig1AAQgeAAgOARgAAOD1IAAnpIDOAAIAAAyIiYAAIAACYIA5AAQAdAAAWAHQAVAHAPAOQAPAOAHAVQAHAWgBAdIAAA2QAAAdgFAWQgIAWgOAQQgOAPgVAIQgUAHgeAAgABEDEIA8AAQAeAAAOgQQAOgRAAghIAAg9QAAgjgPgPQgPgNgfAAIg5AAgAjuD1IAAnpIDKAAIAAAyIiTAAIAACnIB4AAIAAAwIh4AAIAACvICTAAIAAAxgAmnD1IAAm3IhaAAIAAgyIDrAAIAAAyIhaAAIAAG3g");
	this.shape.setTransform(51.4,24.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ29, new cjs.Rectangle(0,0,102.8,49.1), null);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CF1D1D").s().p("ABSD8QgVgJgPgRQgPgRgHgYQgHgXAAgeIAAkHQAAgeAHgXQAHgYAPgRQAPgRAVgIQAXgKAcAAQAeAAAWAKQAWAIAPARQAPARAHAYQAHAXAAAeIAAEHQAAAegHAXQgHAYgPARQgPARgWAJQgWAJgeAAQgcAAgXgJgABYi8QgPATAAAjIAAEOQAAAjAPATQAPATAeAAQAfAAAPgTQAPgTAAgjIAAkOQAAgkgPgSQgPgUgfAAQgeAAgPAUgAniD8QgVgJgPgRQgOgRgHgYQgHgXAAgeIAAkHQAAgeAHgXQAHgXAOgSQAPgRAVgIQAWgKAdAAQAdAAAWAKQAWAIAOARQAOASAHAXQAHAXAAAeIAAAuIg2AAIAAgxQAAgkgOgSQgPgUgfAAQgeAAgPAUQgPASAAAkIAAEOQAAAiAPAUQAPATAeAAQAfAAAPgTQAOgTAAgjIAAhDIA2AAIAAA/QAAAegHAXQgHAYgOARQgOARgWAJQgWAJgdAAQgdAAgWgJgAHvEAIAAmWIiCGWIg7AAIAAn/IAyAAIAAF8IB/l8IBAAAIAAH/gAkIEAIAAn/IBzAAQAeAAAVAIQAVAGANAOQANAOAHAWQAGAVAAAdIAAAXQAAAqgNAZQgHAMgMAJQgMAJgQAGQASAFAOAJQANAJAIAOQAIAOAEASIAEBSQAAAdgHAWQgIAWgOAQQgPAPgVAIQgXAIgdAAgAjPDMIA9AAQAfAAAOgRQAPgQAAglIAAgtQAAgVgEgPQgEgOgJgJQgJgJgOgEQgMgDgTgBIgyAAgAjPgmIAsAAQAkABAPgOQAJgIAEgOQAFgNAAgTIAAgfQAAgigNgQQgOgRgeABIg4AAg");
	this.shape.setTransform(54.7,26.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ27, new cjs.Rectangle(0,0,109.4,52.2), null);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiuD8QgVgJgQgRQgOgRgHgXQgIgYAAgdIAAkIQAAgdAIgYQAHgYAOgRQAQgRAVgJQAXgJAcAAQAeAAAWAJQAWAJAPARQAOARAIAYQAHAYAAAdIAAEIQAAAdgHAYQgIAXgOARQgPARgWAJQgWAJgeAAQgcAAgXgJgAipi8QgPATAAAjIAAENQAAAkAPATQAQATAeAAQAfAAAPgTQAPgTAAgkIAAkNQAAgkgPgSQgPgUgfAAQgeAAgQAUgAo/EBIAAg0QASAAALgFQALgEAGgJQAKgPABgoIAPmDIDPAAIAAH/Ig4AAIAAnLIhiAAIgMFMQgBAfgFAXQgGAYgLAQQgMARgUAIQgTAJgdAAgAIMEAIAAmWIiCGWIg8AAIAAn/IAzAAIAAF8IB/l8IBAAAIAAH/gAAwEAIAAn/IBzAAQAeAAAVAHQAVAIAOAOQANAOAGAVQAGAVAAAcIAAAZQAAApgNAYQgHANgLAKQgNAIgQAFQATAGANAKQANAIAIAOQAJAOADASIAEBSQAAAdgHAWQgHAWgPAQQgPAQgVAHQgXAIgdAAgABqDMIA8AAQAfAAAOgRQAQgQgBglIAAgtQAAgVgDgOQgFgPgJgJQgIgJgOgEQgNgDgTAAIgxAAgABqglIAsAAQAjgBAPgOQAJgHAFgNQAEgNAAgVIAAgdQAAgjgNgRQgOgQgdAAIg4AAg");
	this.shape.setTransform(57.6,31.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ26, new cjs.Rectangle(0,5,115.1,52.2), null);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.curs();
	this.instance.parent = this;
	this.instance.setTransform(32.4,41.7,0.873,0.873,-8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ25, new cjs.Rectangle(32.4,32.8,69.8,77.1), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.curs();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(0,0,69,79), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bak();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(0,0,100,103), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.back();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(0,0,800,400), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(0,0,170,35), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bank();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(0,0,113,229), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.body();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(0,0,232,323), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hand();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(0,0,70,60), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.head();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(0,0,133,204), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.goobe();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(0,0,34,22), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.handry();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(0,0,92,84), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.arm();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(0,0,62,177), null);


(lib.Символ52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ15();
	this.instance.parent = this;
	this.instance.setTransform(50,51.5,1,1,0,0,0,50,51.5);
	this.instance.alpha = 0.5;
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(3));

	// Слой 1
	this.instance_1 = new lib.Символ15();
	this.instance_1.parent = this;
	this.instance_1.setTransform(50,51.5,1,1,0,0,0,50,51.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,103);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ39();
	this.instance.parent = this;
	this.instance.setTransform(34.5,19.5,1,1,0,0,0,34.5,19.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:19.4,scaleY:1.15,y:21.4},24).to({regY:19.5,scaleY:1,y:19.5},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,69,39);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ37();
	this.instance.parent = this;
	this.instance.setTransform(24.4,31.9,1,1,23,0,0,14,27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:27.6,scaleX:1,scaleY:1,rotation:10.8,x:19,y:29.7},10,cjs.Ease.get(-1)).to({regY:27.5,scaleX:1,scaleY:1,rotation:0,x:14,y:27.5},9,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:11.3,x:19.2,y:29.8},10,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:23,x:24.4,y:31.9},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.8,1.1,47.3,61.6);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ35();
	this.instance.parent = this;
	this.instance.setTransform(61.1,24.6,0.998,1,0,-174.3,5.7,60.9,32.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AreQ1MAGFghpQIJAmIvAYMgAhAgrg");
	mask.setTransform(43,131);

	// Слой 1
	this.instance_1 = new lib.bankaka();
	this.instance_1.parent = this;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ34, new cjs.Rectangle(-2.6,-159.2,162,370.2), null);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// armer.png
	this.instance = new lib.armer();
	this.instance.parent = this;
	this.instance.setTransform(0,39);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// fing.png
	this.instance_1 = new lib.Символ36();
	this.instance_1.parent = this;
	this.instance_1.setTransform(103,27.5,1,1,0,0,0,14,27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ33, new cjs.Rectangle(0,1.1,137,269.9), null);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ40();
	this.instance.parent = this;
	this.instance.setTransform(93.8,104.1,1.051,1,0,0,180,9.8,5.7);

	this.instance_1 = new lib.Символ40();
	this.instance_1.parent = this;
	this.instance_1.setTransform(55.5,105.3,1,1,0,0,0,9.8,5.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ38();
	this.instance_2.parent = this;
	this.instance_2.setTransform(75.5,159.5,1,1,0,0,0,34.5,19.5);

	this.instance_3 = new lib.heady();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ32, new cjs.Rectangle(0,0,143,179), null);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ31();
	this.instance.parent = this;
	this.instance.setTransform(36.2,29.4,1,1,0,0,0,36.2,29.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.629},9).to({alpha:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,72.5,58.8);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_26 = function() {
		this.stop();
	}
	this.frame_60 = function() {
		this.stop();
	}
	this.frame_95 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(26).call(this.frame_26).wait(34).call(this.frame_60).wait(35).call(this.frame_95).wait(1));

	// Символ 30
	this.instance = new lib.Символ30();
	this.instance.parent = this;
	this.instance.setTransform(-97,29.9,1,1,0,0,0,65,27.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:71},14,cjs.Ease.get(1)).wait(18).to({x:-99},10,cjs.Ease.get(-1)).wait(37).to({x:71},10,cjs.Ease.get(1)).wait(7));

	// Символ 29
	this.instance_1 = new lib.Символ29();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-110.6,-37.6,1,1,0,0,0,51.4,24.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({x:57.4},14,cjs.Ease.get(1)).wait(9).to({x:-112.6},10,cjs.Ease.get(-1)).wait(47).to({x:57.4},10,cjs.Ease.get(1)).wait(2));

	// Символ 28
	this.instance_2 = new lib.Символ28();
	this.instance_2.parent = this;
	this.instance_2.setTransform(39.2,205.6,1,1,0,0,0,36.2,29.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(12).to({_off:false},0).to({y:95.6},14,cjs.Ease.get(1)).wait(70));

	// Символ 27
	this.instance_3 = new lib.Символ27();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-98.3,25.6,1,1,0,0,0,54.6,26.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(48).to({_off:false},0).to({x:61.7},12,cjs.Ease.get(1)).wait(1).to({x:-98.3},12,cjs.Ease.get(-1)).to({_off:true},22).wait(1));

	// Символ 26
	this.instance_4 = new lib.Символ26();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-96.4,-44,1,1,0,0,0,57.6,26.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(41).to({_off:false},0).to({x:63.6},12,cjs.Ease.get(1)).wait(15).to({x:-96.4},12,cjs.Ease.get(-1)).to({_off:true},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-162,2,130,55.9);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ52();
	this.instance.parent = this;
	this.instance.setTransform(50,51.5,1,1,0,0,0,50,51.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ52(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(0,0,100,103), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ17();
	this.instance.parent = this;
	this.instance.setTransform(34.5,39.5,1,1,0,0,0,34.5,39.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(0,0,69,79), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.Символ19();
	this.instance.parent = this;
	this.instance.setTransform(20.4,47.3,0.771,0.771,-173.3,0,0,50,51.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-208.5,x:192,y:-70.2},8,cjs.Ease.get(0.99)).to({regY:51.5,scaleX:0.77,scaleY:0.77,rotation:-247.7,x:235.4,y:26.7},7,cjs.Ease.get(-1)).to({regY:51.6,scaleX:0.77,scaleY:0.77,rotation:-286.7,x:251,y:96.2},7,cjs.Ease.get(1)).to({regY:51.5,scaleX:0.77,scaleY:0.77,rotation:-270,x:178.3,y:100.3},12,cjs.Ease.get(-1)).to({regX:50.1,regY:51.6,scaleX:0.77,scaleY:0.77,rotation:-232.5,x:133,y:104.3},12,cjs.Ease.get(1)).to({rotation:-272,x:131.9,y:180.1},12,cjs.Ease.get(-1)).to({regY:51.5,rotation:-301.8,x:123.9,y:239.4},13,cjs.Ease.get(1)).to({rotation:-266.5,x:66.8,y:234.1},15,cjs.Ease.get(-1)).to({regY:51.4,rotation:-245.3,x:-29.7,y:210},15,cjs.Ease.get(1)).to({regY:51.5,scaleX:0.77,scaleY:0.77,rotation:-277.3,x:24.6,y:295.1},15,cjs.Ease.get(-1)).to({regY:51.4,scaleX:0.77,scaleY:0.77,rotation:-303,x:65.3,y:362},15,cjs.Ease.get(1)).to({_off:true},1).wait(5));

	// Слой 3
	this.instance_1 = new lib.Символ19();
	this.instance_1.parent = this;
	this.instance_1.setTransform(61.5,59.4,0.813,0.813,18.2,0,0,50.1,51.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11).to({_off:false},0).to({rotation:-42.7,x:230.9,y:-185},12).to({_off:true},1).wait(29).to({_off:false,rotation:18.2,x:61.5,y:59.4},0).to({rotation:-42.7,x:230.9,y:-185},12).to({_off:true},1).wait(29).to({_off:false,rotation:18.2,x:61.5,y:59.4},0).to({rotation:-42.7,x:230.9,y:-185},12).to({_off:true},1).wait(29));

	// Слой 2
	this.instance_2 = new lib.Символ19();
	this.instance_2.parent = this;
	this.instance_2.setTransform(42.5,50.8,0.739,0.739,-32,0,0,49.9,51.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(22).to({_off:false},0).to({regX:50.1,regY:51.4,scaleX:1.25,scaleY:1.25,rotation:65,x:296.7,y:-147.2},11).to({_off:true},1).wait(30).to({_off:false,regX:49.9,regY:51.6,scaleX:0.74,scaleY:0.74,rotation:-32,x:42.5,y:50.8},0).to({regX:50.1,regY:51.4,scaleX:1.25,scaleY:1.25,rotation:65,x:296.7,y:-147.2},11).to({_off:true},1).wait(30).to({_off:false,regX:49.9,regY:51.6,scaleX:0.74,scaleY:0.74,rotation:-32,x:42.5,y:50.8},0).to({regX:50.1,regY:51.4,scaleX:1.25,scaleY:1.25,rotation:65,x:296.7,y:-147.2},11).to({_off:true},1).wait(19));

	// Слой 1
	this.instance_3 = new lib.Символ19();
	this.instance_3.parent = this;
	this.instance_3.setTransform(55.4,29.3,0.799,0.799,145.3,0,0,50,51.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(33).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:225.8,x:206.6,y:-59.6},9).to({regX:49.9,regY:51.4,scaleX:1,scaleY:1,rotation:311.4,x:331.9,y:-98.2},10).to({_off:true},1).wait(22).to({_off:false,regX:50,regY:51.5,scaleX:0.8,scaleY:0.8,rotation:145.3,x:55.4,y:29.3},0).to({scaleX:1,scaleY:1,rotation:225.8,x:206.6,y:-59.6},9).to({regX:49.9,regY:51.4,scaleX:1,scaleY:1,rotation:311.4,x:331.9,y:-98.2},10).to({_off:true},1).wait(22).to({_off:false,regX:50,regY:51.5,scaleX:0.8,scaleY:0.8,rotation:145.3,x:55.4,y:29.3},0).to({scaleX:1,scaleY:1,rotation:225.8,x:206.6,y:-59.6},9).to({regX:49.9,regY:51.4,scaleX:1,scaleY:1,rotation:311.4,x:331.9,y:-98.2},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.5,3.5,85.8,87.9);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ18();
	this.instance.parent = this;
	this.instance.setTransform(34.6,105.3,1,1,27.7,0,0,34.6,39.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:-42.8,x:34.9,y:13.8},14,cjs.Ease.get(-1)).to({regX:34.5,scaleX:1,scaleY:1,rotation:-118.3,x:-46.7,y:-84.2},15,cjs.Ease.get(1)).to({regX:34.6,scaleX:1,scaleY:1,rotation:-42.8,x:34.9,y:13.8},15,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:27.7,x:34.6,y:105.3},14,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.4,54.2,97.8,102.1);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bank.png
	this.instance = new lib.Символ8();
	this.instance.parent = this;
	this.instance.setTransform(284.5,268.5,1,1,0,0,0,56.5,114.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-1.3,x:280.3,y:266.9},12,cjs.Ease.get(-1)).to({regX:56.6,rotation:-2.7,x:276.1,y:267},12,cjs.Ease.get(1)).to({rotation:-1.3,x:280.2},12,cjs.Ease.get(-1)).to({regX:56.5,rotation:0,x:284.5,y:268.5},13,cjs.Ease.get(1)).wait(1));

	// arm.png
	this.instance_1 = new lib.Символ2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(39,314.5,1,1,0,0,0,31,88.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:31.1,rotation:3,x:40.5,y:310.2},12,cjs.Ease.get(-1)).to({rotation:6.2,x:41.9,y:307.7},12,cjs.Ease.get(1)).to({regY:88.6,rotation:3.1,x:40.5,y:310.4},12,cjs.Ease.get(-1)).to({regX:31,regY:88.5,rotation:0,x:39,y:314.5},13,cjs.Ease.get(1)).wait(1));

	// handry.png
	this.instance_2 = new lib.Символ3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(62,207,1,1,0,0,0,46,42);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleY:1,skewX:-3.5,x:66.7,y:203.6},12,cjs.Ease.get(-1)).to({scaleY:1.01,skewX:-7.1,x:71.3,y:202.1},12,cjs.Ease.get(1)).to({regX:46.1,scaleY:1,skewX:-3.6,x:66.9,y:203.8},12,cjs.Ease.get(-1)).to({regX:46,scaleY:1,skewX:0,x:62,y:207},13,cjs.Ease.get(1)).wait(1));

	// goobe.png
	this.instance_3 = new lib.Символ4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(126,171,1,1,0,0,0,17,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:17.1,scaleY:0.91,skewX:0.3,skewY:-0.8,x:125.2,y:168.2},12,cjs.Ease.get(-1)).to({regY:11.2,scaleX:1,scaleY:0.83,skewX:0.5,skewY:-1.8,x:124.1,y:167.2},12,cjs.Ease.get(1)).to({scaleX:1,scaleY:0.91,skewX:0.3,skewY:-0.8,x:125.1,y:168.4},12,cjs.Ease.get(-1)).to({regX:17,regY:11,scaleY:1,skewX:0,skewY:0,x:126,y:171},13,cjs.Ease.get(1)).wait(1));

	// head.png
	this.instance_4 = new lib.Символ5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(102.5,102,1,1,0,0,0,66.5,102);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-1.3,x:100.2,y:100.7},12,cjs.Ease.get(-1)).to({rotation:-2.7,x:97.8,y:101.4},12,cjs.Ease.get(1)).to({rotation:-1.3,x:100.1,y:101},12,cjs.Ease.get(-1)).to({rotation:0,x:102.5,y:102},13,cjs.Ease.get(1)).wait(1));

	// body.png
	this.instance_5 = new lib.Символ7();
	this.instance_5.parent = this;
	this.instance_5.setTransform(116,315.5,1,1,0,0,0,116,161.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({y:312.6},12,cjs.Ease.get(-1)).to({y:311.6},12,cjs.Ease.get(1)).to({y:312.8},12,cjs.Ease.get(-1)).to({y:315.5},13,cjs.Ease.get(1)).wait(1));

	// hand.png
	this.instance_6 = new lib.Символ6();
	this.instance_6.parent = this;
	this.instance_6.setTransform(221,372,1,1,0,0,0,35,30);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regY:30.1,rotation:2.8,x:219.9,y:369.5},12,cjs.Ease.get(-1)).to({regY:30,rotation:5.7,x:218.9,y:368.7},12,cjs.Ease.get(1)).to({regY:30.1,rotation:2.8,x:219.9,y:369.7},12,cjs.Ease.get(-1)).to({regY:30,rotation:0,x:221,y:372},13,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,341,477);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ32();
	this.instance.parent = this;
	this.instance.setTransform(64.6,65.8,0.848,0.848,0,0,0,71.5,89.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ43, new cjs.Rectangle(3.9,-10.1,121.3,151.8), null);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ33();
	this.instance.parent = this;
	this.instance.setTransform(52.6,115,0.848,0.848,0,0,0,62,135.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ42, new cjs.Rectangle(0,0.9,116.1,229), null);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 34
	this.instance = new lib.Символ34();
	this.instance.parent = this;
	this.instance.setTransform(236.1,116.6,1,1,0,0,0,71,105.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 13
	this.instance_1 = new lib.Символ13();
	this.instance_1.parent = this;
	this.instance_1.setTransform(238.6,67.7,1,1,-44.7,0,0,50,51.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(134.6,-148.1,190,397.9), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.parent = this;
	this.instance.setTransform(122.3,171.1,0.717,0.717,0,0,0,170.6,238.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:175.8},16,cjs.Ease.get(-1)).to({y:181.1},18,cjs.Ease.get(1)).to({regY:238.7,y:176.2},18,cjs.Ease.get(-1)).to({regY:238.6,y:171.1},18,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,244.5,342);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ22();
	this.instance.parent = this;
	this.instance.setTransform(0.6,77.6,0.848,0.848,0,0,0,154.5,105.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ41, new cjs.Rectangle(-16.3,-137.4,161.1,337.5), null);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 22
	this.instance = new lib.Символ41();
	this.instance.parent = this;
	this.instance.setTransform(253.7,114.4,1,1,0,0,0,65.8,21.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-4.6,x:241.3,y:112.4},19,cjs.Ease.get(-1)).to({rotation:-9.7,x:228.2,y:110.4},20,cjs.Ease.get(1)).to({rotation:-4.8,x:240.7,y:112.3},19,cjs.Ease.get(-1)).to({rotation:0,x:253.7,y:114.4},20,cjs.Ease.get(1)).wait(1));

	// armol.png
	this.instance_1 = new lib.Символ45();
	this.instance_1.parent = this;
	this.instance_1.setTransform(224.9,267.4,1,1,0,0,0,40.7,31.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.97,skewX:-1,x:223.4,y:267.5},19,cjs.Ease.get(-1)).to({regX:40.8,scaleX:0.93,scaleY:1,skewX:-2.2,x:221.9,y:267.4},20,cjs.Ease.get(1)).to({regY:31.5,scaleX:0.97,scaleY:1,skewX:-1,x:223.8,y:267.5},19,cjs.Ease.get(-1)).to({regX:40.7,regY:31.4,scaleX:1,skewX:0,x:225.7,y:267.4},20,cjs.Ease.get(1)).wait(1));

	// Символ 33
	this.instance_2 = new lib.Символ42();
	this.instance_2.parent = this;
	this.instance_2.setTransform(24.6,145.7,1,1,0,0,0,52.6,114.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:52.5,regY:115,rotation:-7.8,x:15.9,y:149.3},9,cjs.Ease.get(-1)).to({regX:52.6,regY:114.9,rotation:-16.4,x:6.2,y:153.1},10,cjs.Ease.get(1)).to({regY:115,rotation:-8.1,x:15.4,y:149.5},10,cjs.Ease.get(-1)).to({regY:114.9,rotation:0,x:24.6,y:145.7},10,cjs.Ease.get(1)).to({regX:52.5,regY:115,rotation:-7.8,x:15.9,y:149.3},9,cjs.Ease.get(-1)).to({regX:52.6,regY:114.9,rotation:-16.4,x:6.2,y:153.1},10,cjs.Ease.get(1)).to({regY:115,rotation:-8.1,x:15.4,y:149.5},10,cjs.Ease.get(-1)).to({regY:114.9,rotation:0,x:24.6,y:145.7},10,cjs.Ease.get(1)).wait(1));

	// Символ 32
	this.instance_3 = new lib.Символ43();
	this.instance_3.parent = this;
	this.instance_3.setTransform(119.1,66.9,1,1,0,0,0,60.6,75.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:60.7,rotation:-2.3,x:118.4,y:66.3},9,cjs.Ease.get(-1)).to({rotation:-5.2,x:117.6,y:65.4},10,cjs.Ease.get(1)).to({regX:60.8,regY:75.8,rotation:-2.5,x:118.5,y:66},10,cjs.Ease.get(-1)).to({regX:60.6,regY:75.9,rotation:0,x:119.1,y:66.9},10,cjs.Ease.get(1)).to({regX:60.7,rotation:-2.3,x:118.4,y:66.3},9,cjs.Ease.get(-1)).to({rotation:-5.2,x:117.6,y:65.4},10,cjs.Ease.get(1)).to({regX:60.8,regY:75.8,rotation:-2.5,x:118.5,y:66},10,cjs.Ease.get(-1)).to({regX:60.6,regY:75.9,rotation:0,x:119.1,y:66.9},10,cjs.Ease.get(1)).wait(1));

	// shold.png
	this.instance_4 = new lib.Символ44();
	this.instance_4.parent = this;
	this.instance_4.setTransform(44.2,184.7,1,1,0,0,0,35.2,71.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleY:1,skewX:-1.8,skewY:-3.8,x:46.5,y:186.8},9,cjs.Ease.get(-1)).to({regX:35.1,regY:71.8,scaleY:1,skewX:-4.2,skewY:-8,x:48.9,y:188.9},10,cjs.Ease.get(1)).to({regX:35.2,scaleY:1,skewX:-2,skewY:-3.8,x:46.7,y:186.8},10,cjs.Ease.get(-1)).to({regY:71.7,scaleY:1,skewX:0,skewY:0,x:44.2,y:184.7},10,cjs.Ease.get(1)).to({scaleY:1,skewX:-1.8,skewY:-3.8,x:46.5,y:186.8},9,cjs.Ease.get(-1)).to({regX:35.1,regY:71.8,scaleY:1,skewX:-4.2,skewY:-8,x:48.9,y:188.9},10,cjs.Ease.get(1)).to({regX:35.2,scaleY:1,skewX:-2,skewY:-3.8,x:46.7,y:186.8},10,cjs.Ease.get(-1)).to({regY:71.7,scaleY:1,skewX:0,skewY:0,x:44.2,y:184.7},10,cjs.Ease.get(1)).wait(1));

	// bodom.png
	this.instance_5 = new lib.Символ46();
	this.instance_5.parent = this;
	this.instance_5.setTransform(150.1,243.6,1,1,0,0,0,178.1,218.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(79));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28,-45,360.6,507.4);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.parent = this;
	this.instance.setTransform(179.7,171,1,1,0,0,0,139.7,171);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:150.3},24,cjs.Ease.get(-1)).to({x:119.7},25,cjs.Ease.get(1)).to({x:149.7},25,cjs.Ease.get(-1)).to({x:179.7},25,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(40,0,244.5,342);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ23();
	this.instance.parent = this;
	this.instance.setTransform(145.7,171,1,1,0,0,0,139.7,171);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(46,0,244.5,342), null);


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ24();
	this.instance.parent = this;
	this.instance.setTransform(175.6,179.4,0.939,0.939,0,0,0,137.1,169);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ49, new cjs.Rectangle(20.5,-21.7,338.8,476.7), null);


(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ49();
	this.instance.parent = this;
	this.instance.setTransform(181.1,213,1,1,0,0,0,181.1,213);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ51, new cjs.Rectangle(20.5,-21.7,338.8,476.7), null);


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ51();
	this.instance.parent = this;
	this.instance.setTransform(181.1,213,1,1,0,0,0,181.1,213);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:216.9},14,cjs.Ease.get(-1)).to({y:221.1},15,cjs.Ease.get(1)).to({y:217.1},15,cjs.Ease.get(-1)).to({y:213},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(20.5,-21.7,338.8,476.7);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ50();
	this.instance.parent = this;
	this.instance.setTransform(181.1,213,1,1,0,0,0,181.1,213);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:196.7},29,cjs.Ease.get(-1)).to({x:213.3},31,cjs.Ease.get(1)).to({x:198},28,cjs.Ease.get(-1)).to({x:181.1},31,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(20.5,-21.7,338.8,476.7);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(15).call(this.frame_29).wait(1));

	// Слой 4
	this.cur = new lib.Символ12();
	this.cur.parent = this;
	this.cur.setTransform(326.1,171.9,0.873,0.873,0,0,0,34.6,39.6);

	this.timeline.addTween(cjs.Tween.get(this.cur).to({alpha:0},14).to({alpha:1},15).wait(1));

	// Слой 2
	this.instance = new lib.Символ48();
	this.instance.parent = this;
	this.instance.setTransform(123,208.9,0.995,0.995,0,0,0,181,213);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},14).to({alpha:0},15).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(122.2,171,1,1,0,0,0,122.2,171);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0},14).to({alpha:1},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.7,-24.7,405.4,474.4);


// stage content:
(lib.pd_girlbanka_640305 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		
		this.cur.alpha=0;
		
		this.cursor = "none";
		this.cur.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor_2.bind(this));
		
		function fl_CustomMouseCursor_2() {
			this.cur.x = stage.mouseX/window.devicePixelRatio;
			this.cur.y = stage.mouseY/window.devicePixelRatio;
		
		
		}
		
		stage.canvas.addEventListener("mouseover", fl_Clickover3.bind(this));
		
		function fl_Clickover3()
		{
		
		
			this.girl.gotoAndPlay(1);
			this.tek.gotoAndPlay(27);
			this.cur.alpha=1;
		
			
		
		}
		
		stage.canvas.addEventListener("mouseout", fl_Clickout3.bind(this));
		
		function fl_Clickout3()
		{
		
		
			this.girl.gotoAndPlay(15);
			this.tek.gotoAndPlay(61);
			this.cur.alpha=0;
		
		
		}
		
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Символ 12
	this.cur = new lib.Символ25();
	this.cur.parent = this;
	this.cur.setTransform(822.5,239.1,1,1,0,0,0,34.9,38.6);

	this.timeline.addTween(cjs.Tween.get(this.cur).wait(1));

	// Символ 11
	this.instance = new lib.Символ11();
	this.instance.parent = this;
	this.instance.setTransform(102.1,33.5,1,1,0,0,0,85,17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 10
	this.tek = new lib.Символ21();
	this.tek.parent = this;
	this.tek.setTransform(117.5,239.8,1,1,0,0,0,106.5,74.1);

	this.girl = new lib.Символ10();
	this.girl.parent = this;
	this.girl.setTransform(341.7,175.1,1,1,0,0,0,122.2,171);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.girl},{t:this.tek}]}).wait(1));

	// back.jpg
	this.instance_1 = new lib.Символ14();
	this.instance_1.parent = this;
	this.instance_1.setTransform(322,155,0.82,0.82,0,0,0,400,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(169,131.9,1040.8,474.4);
// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/arm.png?1484132177054", id:"arm"},
		{src:"images/armer.png?1484132177054", id:"armer"},
		{src:"images/armol.png?1484132177054", id:"armol"},
		{src:"images/back.jpg?1484132177054", id:"back"},
		{src:"images/bak.png?1484132177054", id:"bak"},
		{src:"images/bank.png?1484132177054", id:"bank"},
		{src:"images/bankaka.png?1484132177054", id:"bankaka"},
		{src:"images/bodom.png?1484132177054", id:"bodom"},
		{src:"images/body.png?1484132177054", id:"body"},
		{src:"images/curs.png?1484132177054", id:"curs"},
		{src:"images/fing.png?1484132177054", id:"fing"},
		{src:"images/goobe.png?1484132177054", id:"goobe"},
		{src:"images/hand.png?1484132177054", id:"hand"},
		{src:"images/handry.png?1484132177054", id:"handry"},
		{src:"images/head.png?1484132177054", id:"head"},
		{src:"images/heady.png?1484132177054", id:"heady"},
		{src:"images/logo.png?1484132177054", id:"logo"},
		{src:"images/rotto.png?1484132177054", id:"rotto"},
		{src:"images/shold.png?1484132177054", id:"shold"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;