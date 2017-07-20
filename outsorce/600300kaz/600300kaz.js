(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,300);


(lib.btn = function() {
	this.initialize(img.btn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,285,107);


(lib.chip = function() {
	this.initialize(img.chip);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,81,82);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,36);


(lib.money = function() {
	this.initialize(img.money);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,154,91);


(lib.tenge100000 = function() {
	this.initialize(img.tenge100000);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,284,54);// helper functions:

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


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E1292B").s().p("AApBoQgJgEgHgGQgMgOAAgaIAAhsQAAgZAMgOQAHgHAJgDQAJgDAMgBQAYAAANAOQAGAHADAKQADAKABAMIAAAVIggAAIAAgWQAAgMgEgFQgFgEgIAAQgIAAgEAEQgFAFAAAMIAABvQAAAMAFAEQAEAFAIAAQAIAAAFgFQAEgEAAgMIAAgeIAgAAIAAAcQgBAOgDAJQgDAKgGAHQgGAGgKAEQgJADgMAAQgMAAgJgDgAlFBoQgJgEgGgGQgMgOAAgaIAAgaIAeAAIAAAcQABAMAFAFQAEAEAIABQAHAAAFgGQAFgEAAgPIAAgQQAAgPgFgFQgFgGgMgBIgFAAIAAgdIAHAAQAJABAGgGQAFgEAAgMIAAgNQAAgOgFgFQgFgEgHAAQgIAAgEAEQgFAFgBAMIAAAWIgeAAIAAgVQAAgZAMgOQAGgHAJgDQAJgDAMgBQAZAAAMAOQAHAHADAKQADAKAAAMIAAAGQAAAigYAJQAOAFAEAKQAGAMAAAQIAAAQQAAAOgDAJQgDAKgHAHQgFAGgKAEQgJADgNAAQgMAAgJgDgAIzBpIgGgmIgoAAIgGAmIgeAAIAhjRIAxAAIAhDRgAIIAmIAhAAIgQhpgAGwBpIAAhaIgmAAIAABaIghAAIAAjRIAhAAIAABaIAmAAIAAhaIAiAAIAADRgAE5BpIgGgmIgoAAIgGAmIgeAAIAijRIAwAAIAiDRgAEPAmIAgAAIgQhpgACeBpIAAizIgjAAIAAgeIBmAAIAAAeIgjAAIAACzgAgjBpIgbhTIgbBTIgeAAIAlhrIgjhmIAiAAIAZBNIAZhNIAfAAIgjBmIAlBrgAigBpIgGgmIgpAAIgFAmIgfAAIAijRIAwAAIAiDRgAjKAmIAfAAIgQhpgAmNBpIgHgmIgoAAIgGAmIgeAAIAhjRIAxAAIAiDRgAm4AmIAgAAIgQhpgAoIBpIgghTIgKATIAABAIghAAIAAjRIAhAAIAABcIAshcIAgAAIguBeIAuBzg");
	this.shape.setTransform(111.3,0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ai5CHIAAgYIhVAAIAAAYIghAAIAAg2IALABQAIgBAGgEQAFgDAAgNIAAifIBpAAIAACzIAQAAIAAA2gAjwA7QAAANgDAJIApAAIAAiVIgmAAgAmuBuQgJgEgHgGQgNgOAAgaIAAhsQAAgZANgOQAHgHAJgDQAJgDAMgBQAZAAAMAOQAHAHADAKQADAKAAAMIAABsQAAAOgDAJQgDAKgHAHQgGAGgJAEQgKADgMAAQgMAAgJgDgAmlhCQgFAFAAAMIAABvQAAAMAFAFQAFAEAHABQAIgBAFgEQAEgFAAgMIAAhvQAAgMgEgFQgFgEgIAAQgHAAgFAEgAumBuQgJgEgHgGQgNgOAAgaIAAhsQAAgZANgOQAHgHAJgDQAJgDAMgBQAZAAAMAOQAHAHADAKQADAKAAAMIAABsQAAAOgDAJQgDAKgHAHQgGAGgJAEQgKADgMAAQgMAAgJgDgAudhCQgFAFAAAMIAABvQAAAMAFAFQAFAEAHABQAIgBAFgEQAEgFAAgMIAAhvQAAgMgEgFQgFgEgIAAQgHAAgFAEgALBBvIAAgeIAMABQAIgBAFgEQAGgDAAgNIAAifIBoAAIAADRIghAAIAAizIgmAAIAAB/QAAAQgEAKQgEAKgHAGQgGAGgJACQgIACgKABgAiTBvIAAgeIALABQAIgBAFgEQAGgDAAgNIAAifIBoAAIAADRIghAAIAAizIgmAAIAAB/QAAAQgEAKQgEAKgGAGQgHAGgIACQgJACgJABgAtTBvIAAgeIAMABQAIgBAFgEQAGgDAAgNIAAifIBoAAIAADRIghAAIAAizIgmAAIAAB/QAAAQgEAKQgEAKgHAGQgGAGgJACQgIACgKABgAQYBvIAAiXIgpCXIgiAAIAAjRIAeAAIAAB9IAih9IApAAIAADRgANgBvIAAjRIBaAAIAAAeIg5AAIAAA6IAtAAIAAAeIgtAAIAAA9IA5AAIAAAegAJdBvIAAjRIBaAAIAAAeIg5AAIAAA6IAtAAIAAAeIgtAAIAAA9IA5AAIAAAegAIKBvIAAizIgiAAIAAgeIBmAAIAAAeIgjAAIAACzgAG7BvIAAiXIgpCXIgiAAIAAjRIAeAAIAAB9IAih9IApAAIAADRgAE/BvIgghTIgKASIAABBIghAAIAAhBIgKgSIggBTIgiAAIAuhzIguheIAhAAIArBbIAAhbIAhAAIAABbIAshbIAgAAIguBeIAuBzgABKBvIAAhWIgMAAQgLABgFAFQgFAGAAAPIgBAzIgBAEIgBAEIgiAAIADgMIABguQAAgQAEgMQAFgLANgGQgLgFgGgJQgFgLAAgQIAAgQQAAgZAMgMQAFgGAKgDQAJgDANAAIAyAAIAADRgAAtg/QgEAFAAALIAAAWQAAAMAFAEQAGAGAJgBIANAAIAAhAIgQAAQgJAAgEAFgAn4BvIghhTIgKATIAABAIghAAIAAjRIAhAAIAABcIAshcIAgAAIgtBeIAtBzgAq0BvIAAjRIAhAAIAABPIAPAAQAZAAAMANQANANAAAZIAAAbQAAAZgNAOQgGAGgJADQgJAEgNAAgAqTBRIAPAAQAIAAAEgEQAFgFAAgLIAAgfQAAgMgFgEQgEgEgIAAIgPAAgAwSBvIAAizIgjAAIAAgeIBmAAIAAAeIgiAAIAACzgAPehuIAAgYIBIAAIAAAYg");
	this.shape_1.setTransform(-63.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ48, new cjs.Rectangle(-170.9,-13.5,341.8,27), null);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#B2B2B2","#FFFFFF"],[0,0.173],0,-5,0,5.1).s().p("AgOA1IAAhpIAdAAIAABpg");
	this.shape.setTransform(41.6,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#B2B2B2","#FFFFFF"],[0,0.173],0,-5.2,0,5.2).s().p("AgeA1IAAhpIAdAAIAAAWIAFgWIAbAAIgcBpg");
	this.shape_1.setTransform(35.7,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#B2B2B2","#FFFFFF"],[0,0.173],0,-5.3,0,5.4).s().p("AAZA1IgGgmIgoAAIgFAmIgfAAIARhpIAdAAIgGAnIAfAAIgGgnIAhAAIARBpg");
	this.shape_2.setTransform(25.3,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#B2B2B2","#FFFFFF"],[0,0.173],0,-5,0,5.1).s().p("AguA1IAAhpIBdAAQgDAIgGAGQgGAHgIADQgKADgNAAIgOAAIAABOg");
	this.shape_3.setTransform(13.9,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#B2B2B2","#FFFFFF"],[0,0.173],0,-5,0,5.1).s().p("AgPA1IAAhpIAgAAIAABpg");
	this.shape_4.setTransform(0.7,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#B2B2B2","#FFFFFF"],[0,0.173],0,-5.2,0,5.2).s().p("AgOA1IAAhpIAdAAIAABpg");
	this.shape_5.setTransform(-4.9,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#B2B2B2","#FFFFFF"],[0,0.173],0,-5,0,5.1).s().p("AgeA1IAAhpIAdAAIAAAWIAFgWIAbAAIgcBpg");
	this.shape_6.setTransform(-10.7,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#B2B2B2","#FFFFFF"],[0,0.173],0.1,-5.3,0.1,5.4).s().p("AgPA1IAAhpIAfAAIAABpg");
	this.shape_7.setTransform(-17.9,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#B2B2B2","#FFFFFF"],[0,0.173],0,-4.9,0,4.9).s().p("AgwA1IAAhpIBcAAQAFALAAAQIAAAaQAAAZgNAOQgFAHgKACQgJAEgMAAgAgPAXIAPAAQAIAAADgEQAFgEAAgMIAAgfQAAgKgFgFQgDgEgIAAIgPAAg");
	this.shape_8.setTransform(-26,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#B2B2B2","#FFFFFF"],[0,0.173],0,-5.1,0,5.1).s().p("AgyA1IAAhpIBXAAIABABQAEAEADAGQAGALAAARIAAAQQAAAYgMANQgHAGgJAEQgKADgMAAgAgRAXIASAAQAIAAAFgEQAEgFAAgLIAAgSQAAgPgFgFQgFgFgKAAIgPAAg");
	this.shape_9.setTransform(-38,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ44, new cjs.Rectangle(-43.1,-5.3,86.2,10.6), null);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AGRBBIAAgkIgKAkIgbAAIAahdIApAAIAABdgAFGBBIAAhdIAeAAIAABdgAEEBBIgIg5IgJA5IgdAAIAPhdIAxAAIAPBdgACbBBQACgEAAgJIAAggQAAgLgEgEQgEgEgIAAIgQAAIAABAIghAAIAAhdIAxAAQAZAAAMANQAMANAAAZIAAAbIgBAPgAgJBBIAAhdIBXAAIAAAdIg3AAIAABAgAg+BBIAAgkIgKAkIgbAAIAZhdIApAAIAABdgAiJBBIAAhdIAdAAIAABdgAjCBBIAAhdIAhAAIAABdgAk0BBIAAhdIAhAAIAABOIAPAAQAZAAAMANIADACgAmuBBIAAhdIAyAAQANAAAJADQAKADAFAGQAGAGADAJQADAIAAAMIAAAIQAAAQgFAKQgEAIgGAEgAmNA4IANAAQAJAAAGgFQAFgEAAgNIAAgMQAAgLgEgFQgEgFgJAAIgQAAgAFXgoIAAgYIBIAAIAAAYg");
	this.shape.setTransform(0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ43, new cjs.Rectangle(-43.1,-6.4,86.2,13.1), null);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.chip();
	this.instance.parent = this;
	this.instance.setTransform(-24.5,-24.8,0.605,0.605);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ42, new cjs.Rectangle(-24.5,-24.8,49,49.6), null);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.chip();
	this.instance.parent = this;
	this.instance.setTransform(20.5,-34.9,0.702,0.702,75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ41, new cjs.Rectangle(-35.2,-34.9,70.4,69.9), null);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.chip();
	this.instance.parent = this;
	this.instance.setTransform(0.2,-40,0.695,0.695,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ40, new cjs.Rectangle(-40,-40,80.1,80.1), null);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.chip();
	this.instance.parent = this;
	this.instance.setTransform(-40.5,-41);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ38, new cjs.Rectangle(-40.5,-41,81,82), null);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.chip();
	this.instance.parent = this;
	this.instance.setTransform(-40.5,-41);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ36, new cjs.Rectangle(-40.5,-41,81,82), null);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.chip();
	this.instance.parent = this;
	this.instance.setTransform(-40.5,-41);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ30, new cjs.Rectangle(-40.5,-41,81,82), null);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E2292B").ss(2.8,1,1).p("Az32JMBA5AAAMAAAAsTMhaDAAAMAAAglj");
	this.shape.setTransform(0,2.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ26, new cjs.Rectangle(-289.5,-141.1,579,286.3), null);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Eg27AM+IAA57MBt3AAAIAAZ7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ24, new cjs.Rectangle(-351.5,-83,703.2,166), null);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tenge100000();
	this.instance.parent = this;
	this.instance.setTransform(-142,-27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(-142,-27,284,54), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E3292B").s().p("AgmBnQgIgEgGgHQgFgHgDgKQgDgJAAgNIAAhpQAAgNADgJQADgJAFgIQAGgHAIgEQAKgEALAAQAMAAAIAEQAJAEAFAHQAGAIADAJQADAJAAANIAABpQAAANgDAJQgDAKgGAHQgFAHgJAEQgIAEgMAAQgLAAgKgEgAgghbQgGAEgEAFQgDAFgCAIQgCAHAAAIIAABtQAAAIACAHQACAIADAFQAEAGAGACQAHADAIAAQAJAAAGgDQAFgCAEgGQAEgFACgIQABgHAAgIIAAhtQAAgIgBgHQgCgIgEgFQgEgFgFgEQgGgCgJAAQgIAAgHACgACmBpIAAi6IgsC5IgPAAIgsi4IAAC5IgMAAIAAjRIAUAAIAsC4IAri4IAUAAIAADRgAixBpIAAjRIAuAAQALAAAJAEQAJAEAGAGQAGAIADAJQACAJAAAMIAABpQAAAMgCAJQgDAKgGAHQgGAGgJAEQgJAEgLAAgAikBdIAhAAQAIAAAGgEQAHgCADgFQAFgFABgIQACgHAAgJIAAhpQAAgJgCgHQgBgHgFgGQgDgFgHgCQgGgEgIAAIghAAg");
	this.shape.setTransform(161.9,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("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");
	this.shape_1.setTransform(-18.8,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(-179.8,-10.7,359.6,21.5), null);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E1292B").s().p("AglBnQgIgEgHgIQgFgGgDgKQgDgJAAgMIAAhqQAAgMADgKQADgKAFgGQAHgIAIgEQAJgEALAAQAMAAAJAEQAIAEAGAIQAFAGADAKQADAKAAAMIAABqQAAAMgDAJQgDAKgFAGQgGAIgIAEQgJAEgMAAQgLAAgJgEgAgfhaQgGADgFAFQgDAFgCAHQgBAIAAAJIAABsQAAAJABAHQACAHADAFQAFAFAGADQAGADAIAAQAJAAAHgDQAEgDAEgFQAFgFACgHQABgHAAgJIAAhsQAAgJgBgIQgCgHgFgFQgEgFgEgDQgHgDgJAAQgIAAgGADgACiBpIAAi5IgsC4IgNAAIgsi4IAAC5IgNAAIAAjRIAUAAIAsC5IAri5IAVAAIAADRgAiuBpIAAjRIAuAAQALAAAJAEQAJADAGAIQAFAGAEAKQACAKAAALIAABpQAAALgCAKQgEAKgFAHQgGAGgJAEQgJAEgLAAgAihBcIAhAAQAIAAAGgCQAGgDAFgFQADgFACgHQACgIAAgIIAAhqQAAgKgCgGQgCgIgDgEQgFgGgGgCQgGgDgIAAIghAAg");
	this.shape.setTransform(-116.4,-1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("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");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(-192.5,-11.8,385.2,23.7), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-46,-10,0.928,0.928);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(-46,-10,148.5,33.4), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.btn();
	this.instance.parent = this;
	this.instance.setTransform(-142.5,-53.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(-142.5,-53.5,285,107), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnUM9IM46vIEKCAIs4avgAptLzIM46vIBxA2Is4avg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(-62.2,-95.7,124.4,191.5), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.money();
	this.instance.parent = this;
	this.instance.setTransform(-81.9,-48.4,1.063,1.063);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(-81.9,-48.4,163.8,96.8), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.money();
	this.instance.parent = this;
	this.instance.setTransform(-66.5,-67.9,1.063,1.063,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(-91.6,-67.9,183.3,135.9), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.money();
	this.instance.parent = this;
	this.instance.setTransform(-91.6,-25.5,1.063,1.063,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(-91.6,-67.9,183.3,135.9), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.money();
	this.instance.parent = this;
	this.instance.setTransform(-77,-78.6,1.231,1.231,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(-106,-78.6,212.2,157.3), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.money();
	this.instance.parent = this;
	this.instance.setTransform(-91.6,-25.5,1.063,1.063,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(-91.6,-67.9,183.3,135.9), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(-300,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(-300,-150,600,300), null);


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ19();
	this.instance.parent = this;
	this.instance.setTransform(-0.1,2.1,0.853,0.853,0,0,0,-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ49, new cjs.Rectangle(-164.3,-8,328.7,20.2), null);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ38();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:14,x:12.2,y:24.7},16,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:30,x:26,y:52.5},18,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:14.5,x:12.7,y:25.5},18,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:0,x:0,y:0},17,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.5,-41,81,82);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ36();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:14.8,y:20.2},34,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:30,y:41},35,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:14.8,x:0.1,y:20.5},35,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:0,x:0,y:0},35,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.5,-41,81,82);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ42();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ34, new cjs.Rectangle(-24.5,-24.8,49,49.6), null);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ40();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ32, new cjs.Rectangle(-40,-40,80.1,80.1), null);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ30();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:26.8,x:-22.8,y:33.7},26,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:60,x:-51,y:75},32,cjs.Ease.get(1)).to({regX:0.1,regY:0.1,scaleX:1,scaleY:1,rotation:30.4,x:-25.9,y:38.3},30,cjs.Ease.get(-1)).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:0,y:0},31,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.5,-41,81,82);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ41();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ28, new cjs.Rectangle(-35.2,-34.9,70.4,69.9), null);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ26();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.23},19,cjs.Ease.get(1)).to({alpha:1},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-289.5,-141.1,579,286.3);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgPBoQgJgEgHgGQgNgOAAgZIAAhtQAAgZANgOQAHgGAJgEQAJgDALAAQAYAAANANQAHAHADAKQAEAJAAANIAABtQAAANgEAJQgDAKgHAHQgGAGgJAEQgKADgMAAQgLAAgJgDgAgGhIQgEAFgBALIAABxQABALAEAFQAFAEAGAAQAIAAAFgEQAEgFABgLIAAhxQgBgLgEgFQgFgEgIAAQgGAAgFAEgAiFBoQgKgEgGgGQgOgOAAgZIAAhtQAAgZAOgOQAGgGAKgEQAJgDAMAAQAYAAANANQAGAHADAKQAEAJAAANIAABtQAAANgEAJQgDAKgGAHQgHAGgJAEQgJADgMAAQgMAAgJgDgAh8hIQgFAFAAALIAABxQAAALAFAFQAEAEAIAAQAIAAAEgEQAFgFAAgLIAAhxQAAgLgFgFQgEgEgIAAQgIAAgEAEgAj8BoQgKgEgFgGQgOgOAAgZIAAhtQAAgZAOgOQAFgGAKgEQAKgDAMAAQAYAAANANQAGAHADAKQAEAJgBANIAABtQABANgEAJQgDAKgGAHQgHAGgJAEQgJADgMAAQgMAAgKgDgAjzhIQgEAFAAALIAABxQAAALAEAFQAEAEAJAAQAHAAAFgEQAFgFAAgLIAAhxQAAgLgFgFQgFgEgHAAQgJAAgEAEgAmhBoQgJgEgHgGQgNgOAAgZIAAhtQAAgZANgOQAHgGAJgEQAKgDALAAQAZAAANANQAGAHADAKQADAJAAANIAABtQAAANgDAJQgDAKgGAHQgHAGgJAEQgJADgNAAQgLAAgKgDgAmYhIQgFAFABALIAABxQgBALAFAFQAFAEAHAAQAIAAAFgEQAFgFgBgLIAAhxQABgLgFgFQgFgEgIAAQgHAAgFAEgAoXBoQgKgEgGgGQgNgOAAgZIAAhtQAAgZANgOQAGgGAKgEQAJgDAMAAQAYAAANANQAGAHADAKQAEAJAAANIAABtQAAANgEAJQgDAKgGAHQgHAGgIAEQgKADgMAAQgMAAgJgDgAoOhIQgFAFAAALIAABxQAAALAFAFQAEAEAIAAQAHAAAGgEQAEgFAAgLIAAhxQAAgLgEgFQgGgEgHAAQgIAAgEAEgAI7BpIAAjRIBaAAIAAAeIg5AAIAAA7IAtAAIAAAdIgtAAIAAA9IA5AAIAAAegAHVBpIAAjRIBXAAIAAAeIg3AAIAACzgAGbBpIAAhaIgmAAIAABaIghAAIAAjRIAhAAIAABaIAmAAIAAhaIAiAAIAADRgADnBpIAAjRIBaAAIAAAeIg5AAIAAA7IAtAAIAAAdIgtAAIAAA9IA5AAIAAAegACUBpIAAizIgiAAIAAgeIBmAAIAAAeIgiAAIAACzgAp6BpIAAigIgaAAIAAgWQAKAAAGgCQAHgDADgDQAEgEADgFIADgKIAXAAIAADRg");

	// Слой 2
	this.instance = new lib.Символ13();
	this.instance.parent = this;
	this.instance.setTransform(-100.1,-14.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:119.3},40).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66,-10.7,28.1,21.5);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ23();
	this.instance.parent = this;
	this.instance.setTransform(-0.2,-1.4,2.072,2.072);
	this.instance.alpha = 0.762;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ22();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ21, new cjs.Rectangle(-336.4,-229.6,478.5,396.6), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 44
	this.instance = new lib.Символ44();
	this.instance.parent = this;
	this.instance.setTransform(0,7);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleY:1.47,skewX:47.1,x:-34.4},0).to({regX:-0.1,scaleY:1.17,skewX:-31.1,x:3.1,alpha:1},6).to({regX:0,scaleY:1,skewX:0,x:0},2).wait(30).to({regX:-0.1,scaleY:1.17,skewX:-31.1,x:3.1},2).to({regX:0,scaleY:1.47,skewX:47.1,x:-34.4,alpha:0},6).wait(1));

	// Символ 43
	this.instance_1 = new lib.Символ43();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-5.3);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleY:1.31,skewX:-40.1,x:32.5},0).to({regX:-0.1,scaleY:1.05,skewX:-17.8,x:-2,alpha:1},6).to({regX:0,scaleY:1,skewX:0,x:0},2).wait(30).to({regX:-0.1,scaleY:1.05,skewX:-17.8,x:-2},2).to({regX:0,scaleY:1.31,skewX:-40.1,x:32.5,alpha:0},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.1,-11.7,86.2,24);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ15();
	this.instance.parent = this;
	this.instance.alpha = 0;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.152},4,cjs.Ease.get(-1)).to({alpha:0.34},5,cjs.Ease.get(1)).to({alpha:0.172},5,cjs.Ease.get(-1)).to({alpha:0},5,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ15();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-142.5,-53.5,285,107);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AyTEcIAAo3MAknAAAIAAI3g");

	// Слой 2
	this.instance = new lib.Символ13();
	this.instance.parent = this;
	this.instance.setTransform(-169.8,-2.6);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:162.2},39).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117.1,-28.4,9.5,56.8);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ12();
	this.instance.parent = this;
	this.instance.setTransform(0.2,0.2);
	this.instance.alpha = 0.539;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ14();
	this.instance_1.parent = this;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003366").s().p("AkwAkIAAhHIJhAAIAABHg");
	this.shape.setTransform(6.6,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(-231.9,-98.2,374.4,191.5), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// money.png
	this.instance = new lib.Символ4();
	this.instance.parent = this;
	this.instance.setTransform(494.6,7.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13).to({y:-4.7},13,cjs.Ease.get(1)).to({y:7.3},15,cjs.Ease.get(1)).wait(2));

	// money.png
	this.instance_1 = new lib.Символ5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(368.9,18);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({y:6},13,cjs.Ease.get(1)).to({y:18},15,cjs.Ease.get(1)).wait(5));

	// money.png
	this.instance_2 = new lib.Символ6();
	this.instance_2.parent = this;
	this.instance_2.setTransform(232.9,7.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({y:-4.6},13,cjs.Ease.get(1)).to({y:7.4},15,cjs.Ease.get(1)).wait(8));

	// money.png
	this.instance_3 = new lib.Символ7();
	this.instance_3.parent = this;
	this.instance_3.setTransform(113.8,18);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({y:6},13,cjs.Ease.get(1)).to({y:18},15,cjs.Ease.get(1)).wait(11));

	// money.png
	this.instance_4 = new lib.Символ8();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-2.1,-1.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({y:-13.6},13,cjs.Ease.get(1)).to({y:-1.6},15,cjs.Ease.get(1)).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84,-60.6,670.2,157.3);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.05,scaleY:1.05},24,cjs.Ease.get(-1)).to({scaleX:1.1,scaleY:1.1},25,cjs.Ease.get(1)).to({scaleX:1.05,scaleY:1.05},25,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},25,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-300,-150,600,300);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ21();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.95,scaleY:0.95},5,cjs.Ease.get(-1)).to({scaleX:0.88,scaleY:0.88},7,cjs.Ease.get(1)).to({scaleX:0.93,scaleY:0.93},5,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-336.4,-229.6,478.5,396.6);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ34();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:10.5,x:28.1,y:14.1},22,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:22.5,x:60,y:30},25,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:11,x:29.3,y:14.7},24,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:0,x:0,y:0},23,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.5,-24.8,49,49.6);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ32();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:15,y:-9.1},22,cjs.Ease.get(-1)).to({rotation:60,y:-20},26,cjs.Ease.get(1)).to({rotation:15,y:-10.3},24,cjs.Ease.get(-1)).to({rotation:0,y:0},26,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40,-40,80.1,80.1);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ28();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:-28.8,y:7.7},14,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:-60,x:0.1,y:16},15,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:-29.9,x:0,y:8},15,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:0,y:0},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.2,-34.9,70.4,69.9);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// chip.png
	this.instance = new lib.Символ29();
	this.instance.parent = this;
	this.instance.setTransform(-298.9,-67.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// chip.png
	this.instance_1 = new lib.Символ31();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-119.1,-91,0.642,0.642,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// chip.png
	this.instance_2 = new lib.Символ33();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-30,160.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// chip.png
	this.instance_3 = new lib.Символ35();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-482.5,45.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// chip.png
	this.instance_4 = new lib.Символ37();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-482.5,161);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// chip.png
	this.instance_5 = new lib.Символ39();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-19.5,8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ27, new cjs.Rectangle(-523,-117.3,544,319.3), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 21
	this.instance = new lib.Символ45();
	this.instance.parent = this;
	this.instance.setTransform(-182.2,-95.4,1,1,0,0,0,-97.2,-31.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 20
	this.instance_1 = new lib.Символ20();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-84.5,-26.6,0.765,0.765,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Символ 18
	this.instance_2 = new lib.Символ18();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-84.7,-133.5,3.193,3.193,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(-421.4,-293.6,478.5,396.6), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.parent = this;
	this.instance.setTransform(0,5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.07,scaleY:1.07},4,cjs.Ease.get(-1)).to({scaleX:1.15,scaleY:1.15},5,cjs.Ease.get(1)).to({scaleX:1.07,scaleY:1.07},5,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-231.9,-93.2,374.4,191.5);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 45
	this.instance = new lib.Символ45();
	this.instance.parent = this;
	this.instance.setTransform(-111,-35.9,1.218,1.218,0,0,0,-97.2,-31.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30));

	// Символ 49
	this.instance_1 = new lib.Символ49();
	this.instance_1.parent = this;
	this.instance_1.setTransform(6.7,-57.4,1.019,1.019,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:-0.2,scaleX:1.13,scaleY:1.13,y:-57.5},6,cjs.Ease.get(-1)).to({regX:-0.1,regY:-0.1,scaleX:1.27,scaleY:1.27,x:6.5,y:-57.4},8,cjs.Ease.get(1)).to({regX:0,scaleX:1.16,scaleY:1.16,x:6.7},7,cjs.Ease.get(-1)).to({scaleX:1.02,scaleY:1.02},8,cjs.Ease.get(1)).wait(1));

	// Символ 48
	this.instance_2 = new lib.Символ48();
	this.instance_2.parent = this;
	this.instance_2.setTransform(6.6,-97.4,0.979,0.979);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:0.91,scaleY:0.91},6,cjs.Ease.get(-1)).to({regX:0.1,regY:-0.1,scaleX:0.81,scaleY:0.81,x:6.7,y:-97.5},8,cjs.Ease.get(1)).to({scaleX:0.89,scaleY:0.89},7,cjs.Ease.get(-1)).to({regX:0,regY:0,scaleX:0.98,scaleY:0.98,x:6.6,y:-97.4},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-402.6,-277.4,583,483.2);


(lib.Символ46 = function(mode,startPosition,loop) {
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

	// Слой 2
	this.instance = new lib.Символ47();
	this.instance.parent = this;
	this.instance.setTransform(-88.9,37.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-8.9,y:43.5,alpha:1},7,cjs.Ease.get(1)).wait(1).to({x:-88.9,y:37.5,alpha:0},7,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ17();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-1,1,1,0,0,0,-85,-95.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:81.1,alpha:0},7,cjs.Ease.get(1)).wait(1).to({x:0,alpha:1},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-491.5,-240,633.5,483.2);


// stage content:
(lib._600300kaz = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
		
		this.fon.x = - stage.mouseX / 25/window.devicePixelRatio;
		this.fon.y = - stage.mouseY / 25/window.devicePixelRatio;
		}
		
		var _this = this;
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		  function fl_MouseOverHandler_5()
		{
		    _this.main.gotoAndPlay(1);
		}
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		  function fl_MouseOutHandler_2()
		{
		    _this.main.gotoAndPlay(8);
		}
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 4
	this.instance = new lib.Символ16();
	this.instance.parent = this;
	this.instance.setTransform(57.5,19.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 7
	this.instance_1 = new lib.Символ25();
	this.instance_1.parent = this;
	this.instance_1.setTransform(299.7,149.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 5
	this.main = new lib.Символ46();
	this.main.parent = this;
	this.main.setTransform(203.9,119.7,1,1,0,0,0,-97.2,-0.8);

	this.timeline.addTween(cjs.Tween.get(this.main).wait(1));

	// Слой 8
	this.fon = new lib.Символ27();
	this.fon.parent = this;
	this.fon.setTransform(0,0,1,1,0,0,0,-542.5,-83);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

	// Слой 6
	this.instance_2 = new lib.Символ24();
	this.instance_2.parent = this;
	this.instance_2.setTransform(315.6,122.6,1.023,1);
	this.instance_2.alpha = 0.711;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 3
	this.instance_3 = new lib.Символ10();
	this.instance_3.parent = this;
	this.instance_3.setTransform(300.5,242.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Слой 2
	this.instance_4 = new lib.Символ3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(55,283.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Слой 1
	this.instance_5 = new lib.Символ2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(301,151,1.022,1.022);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(109.5,30.5,865.7,499.7);
// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg?1499679994769", id:"bg"},
		{src:"images/btn.png?1499679994769", id:"btn"},
		{src:"images/chip.png?1499679994769", id:"chip"},
		{src:"images/logo.png?1499679994769", id:"logo"},
		{src:"images/money.png?1499679994769", id:"money"},
		{src:"images/tenge100000.png?1499679994769", id:"tenge100000"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;