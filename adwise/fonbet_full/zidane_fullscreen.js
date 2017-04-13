(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1320,919);


(lib.blik = function() {
	this.initialize(img.blik);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,224,84);


(lib.corona = function() {
	this.initialize(img.corona);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,243,404);


(lib.cup = function() {
	this.initialize(img.cup);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,295,500);


(lib.desk1 = function() {
	this.initialize(img.desk1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,338,205);


(lib.desk2 = function() {
	this.initialize(img.desk2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,264,173);


(lib.fog = function() {
	this.initialize(img.fog);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,408,96);


(lib.konf = function() {
	this.initialize(img.konf);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,408);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,276,84);


(lib.man = function() {
	this.initialize(img.man);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,272,444);


(lib.text = function() {
	this.initialize(img.text);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,310,37);


(lib.text2 = function() {
	this.initialize(img.text2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,302,44);


(lib.uzor = function() {
	this.initialize(img.uzor);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,500);// helper functions:

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


(lib.Символ54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.konf();
	this.instance.parent = this;
	this.instance.setTransform(-400,-204);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ54, new cjs.Rectangle(-400,-204,800,408), null);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.467,0.976],-69.6,-27.1,69.6,-27.1).s().p("EgJWAscQhh1mAA7FQAA14A/yUITxAAQA/SUAAV4QAAbFhiVmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ27, new cjs.Rectangle(-69.6,-284.4,139.2,568.8), null);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.uzor, null, new cjs.Matrix2D(0.151,0,0,0.151,-37.8,-125.6)).s().p("A5lKsIAA1WQY9MWaOsCIAAVCg");
	this.shape.setTransform(163.8,60.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(0,-8.3,327.6,136.7), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFAD00","#FFCC00"],[0,1],-37.1,-10,37.2,9.9).s().p("AB+M3IqGitQgwgOANgwIFw1fQANgwAxANIKGCuQAwANgNAwIlwVeQgLAnggAAQgIAAgLgDg");
	this.shape.setTransform(55.9,82.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(0,0,111.8,165.1), null);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-9,0,0.929,0.929);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(-9,0,256.3,78), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.text2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(0,0,302,44), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.text();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(0,0,310,37), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.man();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(0,0,272,444), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AsiBvIgDgnIhyAAIgDAnIgjAAIAAhJIATAAQARgrAGg/QABgRAMgLQAGgFAIgDQAHgDAKAAIBQAAIAACRIAYAAIAABJgAtihGQgDADAAAHQgEAlgFAWQgFAVgJASIA0AAIAAhvIgQAAQgGAAgEADgAPjBLIgbgEIAFgiQAYABAIgBQAHgCADgJIACgFIgKAAQgLAAgFgFQgHgGgCgKIgjhrIAyAAIAYBbQAAABAAAAQABABAAAAQABAAAAABQABAAABAAIAFAAIAaheIAyAAIgpCDQgEANgEAJQgFAKgFAFQgKAMgUACIgKAAIgMAAgACrBGQgPgFgJgLQgJgKgFgSQgEgSAAgZQAAgaAEgSQAFgSAJgKQARgVAsAAQAQAAAOACQAPABAMAEIgFAkIg0gBQgRAAgFAKQgDAGgBAKIgBAZIABAYQABAKADAGQAFAKARAAQAlAAAUgCIADAkQgMAEgPACQgPACgSAAQgWAAgPgFgAwnBGQgPgFgJgLQgJgKgFgSQgEgSAAgZQAAgaAEgSQAFgSAJgKQARgVArAAQARAAAOACQAOABANAEIgFAkIg1gBQgPAAgGAKQgDAGgCAKIgBAZIABAYQACAKADAGQAGAKAPAAQAmAAAUgCIADAkQgMAEgPACQgOACgUAAQgVAAgPgFgApfBJIgDgmQALgBAFgEQAHgDACgJQAIgVAFg9QABgVALgLQALgLAWAAIBSAAIAACzIgyAAIAAiRIgQAAQgOAAgBANQgFBDgJAYQgIAbgRAJQgIAFgKABIgKABIgOgBgAJvBIIAAizQAogCAhAAQAlAAANAKQAIAFAEAJQADAJAAAOQAAAUgIAKQgDAEgHADQgFADgJABIAAABQAKABAHAEQAIADAEAGQAJALAAAWQAAAbgPAKQgOAKgiAAQgkAAgtgCgAKeAnIAZABQAOAAAFgFQAEgEAAgOQAAgOgEgEQgGgEgNAAIgZAAgAKegjIAYAAQAMAAAEgEQAEgEABgMQgBgMgEgEQgEgDgNAAIgXAAgAhPBIIgCAAIAAizIAyAAIAABAIAUAAQAnAAAOANQAIAGADAMQAFALAAAQQAAARgFALQgCAMgIAGQgGAHgNADQgLADgQAAQgyAAgagCgAgfAmIAUABQAMAAADgFQAEgFAAgQQAAgOgEgFQgDgGgMAAIgUAAgArgA+QgMgLAAgRIAAhnQAAgJADgHQACgHAHgFQAKgKATAAQA/AAAaACIgDAkIhCAAQgGAAgDACQgDADAAAGIAAAWIBFAAIAAAhIhFAAIAAAaQAAAGADADQADADAGAAIBCAAIADAjQgvADgqAAQgTAAgKgLgAN+BIIgTg8QgEgGgDgEQgEgEgFgBIgUgBQACAIAAAIIAAA8IgxAAIAAizIAxAAIAAAwQAAALgCALIAIAAQAJAAAGgDQAGgDADgFQAHgMAKgqIACgFIAyAAIgSA5IgFAIQgCAFgCACIgGAFIgGAEIgSAEIAAACQALABAHAEQAHACAFAFQAFAFAFAJIAVBCgAItBIIgKgrIg3AAIgLArIgyAAIAyimQABgGAEgDQAFgEAGAAIAtAAQAGAAAFAEQAEADACAGIAxCmgAIZgFIgOhBIgHAAIgPBBIAkAAgAFIBIIAAiNIgzAAIAAgmICYAAIAAAmIg0AAIAACNgAjJBIIAAiNIg0AAIAAgmICZAAIAAAmIg0AAIAACNgAkwBIIgLgrIg3AAIgLArIgyAAIAximQACgGAEgDQAFgEAGAAIAtAAQAGAAAEAEQAFADACAGIAwCmgAlFgFIgOhBIgHAAIgPBBIAkAAg");
	this.shape.setTransform(132.8,38.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC0000").s().p("Az1AwQgyAAABgxIAAgeQAIAeAnAAMAnsAAAQAxAAACguIAAAuQAAAxgzAAg");
	this.shape_1.setTransform(132,70.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#E50000","#FF1723"],[0,1],-132,0,132.1,0).s().p("Az2FhQgnAAgIgeQgDgJAAgLIAApdQAAgyAyAAMAntAAAQAyAAAAAyIAAJgQgCAvgwAAg");
	this.shape_2.setTransform(131.9,35.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(-0.2,0,264.2,75.6), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.corona();
	this.instance.parent = this;
	this.instance.setTransform(23,-15,0.473,0.473);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(23,-15,115,191.2), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.desk1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(0,0,338,205), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.cup();
	this.instance.parent = this;
	this.instance.setTransform(0,-1,0.181,0.181);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(0,-1,53.5,90.6), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.blik();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(0,0,224,84), null);


(lib.Символ10_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AsiBvIgDgnIhxAAIgEAnIgjAAIAAhJIAUAAQAQgrAGg/QACgRAMgLQAFgFAHgDQAIgDAKAAIBQAAIAACRIAYAAIAABJgAthhGQgEADgBAHQgDAlgFAWQgFAVgJASIA1AAIAAhvIgRAAQgGAAgDADgAPkBLIgdgEIAGgiQAYABAIgBQAIgCADgJIABgFIgKAAQgKAAgHgFQgFgGgEgKIgjhrIAzAAIAYBbQAAABAAAAQABABAAAAQABAAAAABQABAAABAAIAEAAIAbheIAyAAIgpCDQgEANgFAJQgEAKgFAFQgKAMgUACIgKAAIgLAAgACrBGQgQgFgIgLQgJgKgEgSQgFgSAAgZQAAgaAFgSQAEgSAJgKQASgVAqAAQARAAAOACQAOABAMAEIgDAkIg2gBQgPAAgGAKQgDAGgCAKIgBAZIABAYQACAKADAGQAGAKAPAAQAnAAASgCIAFAkQgMAEgPACQgQACgTAAQgVAAgPgFgAwnBGQgQgFgIgLQgJgKgEgSQgFgSAAgZQAAgaAFgSQAEgSAJgKQASgVArAAQAQAAAOACQAOABAMAEIgDAkIg1gBQgRAAgFAKQgDAGgBAKIgBAZIABAYQABAKADAGQAFAKARAAQAmAAASgCIAFAkQgMAEgPACQgQACgSAAQgWAAgPgFgApfBJIgDgmQAKgBAHgEQAFgDAEgJQAHgVAEg9QACgVAMgLQAKgLAVAAIBSAAIAACzIgwAAIAAiRIgRAAQgOAAgBANQgGBDgHAYQgJAbgRAJQgIAFgLABIgJABIgOgBgAJuBIIAAizQAqgCAfAAQAmAAAOAKQAHAFADAJQAEAJAAAOQAAAUgHAKQgFAEgFADQgHADgIABIAAABQAKABAIAEQAGADAFAGQAIALAAAWQABAbgOAKQgPAKgiAAQgkAAgugCgAKeAnIAZABQAOAAAEgFQAFgEAAgOQAAgOgFgEQgEgEgPAAIgYAAgAKegjIAYAAQAMAAAEgEQAFgEgBgMQABgMgFgEQgFgDgMAAIgXAAgAhPBIIgBAAIAAizIAwAAIAABAIAVAAQAnAAAPANQAHAGAEAMQADALAAAQQAAARgDALQgEAMgGAGQgIAHgLADQgMADgPAAQgzAAgagCgAggAmIAVABQAMAAADgFQAFgFAAgQQAAgOgFgFQgEgGgLAAIgVAAgArgA+QgMgLAAgRIAAhnQAAgJADgHQADgHAGgFQAKgKATAAQA/AAAaACIgCAkIhEAAQgGAAgCACQgDADAAAGIAAAWIBFAAIAAAhIhFAAIAAAaQAAAGADADQACADAGAAIBEAAIACAjQgvADgqAAQgTAAgKgLgAN9BIIgSg8QgEgGgEgEQgDgEgGgBIgUgBQADAIAAAIIAAA8IgxAAIAAizIAxAAIAAAwQAAALgDALIAJAAQAJAAAGgDQAGgDADgFQAHgMALgqIABgFIAxAAIgSA5IgDAIQgDAFgDACIgEAFIgIAEIgRAEIAAACQALABAHAEQAHACAFAFQAFAFAEAJIAXBCgAIuBIIgLgrIg3AAIgLArIgyAAIAximQABgGAFgDQAFgEAFAAIAuAAQAGAAAEAEQAFADACAGIAwCmgAIagFIgPhBIgHAAIgPBBIAlAAgAFIBIIAAiNIgzAAIAAgmICZAAIAAAmIg0AAIAACNgAjJBIIAAiNIgzAAIAAgmICYAAIAAAmIg0AAIAACNgAkwBIIgLgrIg3AAIgLArIgyAAIAximQACgGAEgDQAFgEAFAAIAuAAQAGAAAEAEQAFADABAGIAyCmgAlEgFIgPhBIgHAAIgPBBIAlAAg");
	this.shape.setTransform(132.7,38.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#009900","#339900"],[0,1],-132,0,132,0).s().p("Az1FdQgyAAAAgxIAApWQAAgzAyAAMAnrAAAQAyAAAAAzIAAJWQAAAxgyAAg");
	this.shape_1.setTransform(132,35.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Слой 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006600").s().p("Az1E7QgyAAAAgyIAAoRQAAgyAyAAMAnrAAAQAyAAAAAyIAAIRQAAAygyAAg");
	this.shape_2.setTransform(132.1,44);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10_1, new cjs.Rectangle(0,0.4,264.2,75.1), null);


(lib.Символ56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ54();
	this.instance.parent = this;
	this.instance.setTransform(0,-206.5);

	this.instance_1 = new lib.Символ54();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,206.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ56, new cjs.Rectangle(-400,-410.5,800,821), null);


(lib.Символ55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ56();
	this.instance.parent = this;
	this.instance.setTransform(0,-206.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:205.5},89).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-400,-616.9,800,821);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ27();
	this.instance.parent = this;
	this.instance.setTransform(512,-16,1.23,1.527,0,24.6,0);
	this.instance.alpha = 0.441;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1.58,skewX:28.1,x:476,y:-15.9},15,cjs.Ease.get(-1)).to({scaleY:1.65,skewX:32.7,x:430.5,y:-16},19,cjs.Ease.get(1)).to({scaleY:1.54,skewX:24.6,x:503.8,y:-15.9},20,cjs.Ease.get(-1)).to({scaleY:1.47,skewX:18.8,x:558.8,y:-16},15,cjs.Ease.get(1)).to({scaleY:1.49,skewX:21.6,x:536.1,y:-15.9},17,cjs.Ease.get(-1)).to({scaleY:1.53,skewX:24.6,x:512,y:-16},18,cjs.Ease.get(1)).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ27();
	this.instance_1.parent = this;
	this.instance_1.setTransform(267.2,70.4,1.23,1.512,0,-9.9,0);
	this.instance_1.alpha = 0.441;
	this.instance_1.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleY:1.45,skewX:1.3,x:251.2,y:24.1},15,cjs.Ease.get(-1)).to({scaleY:1.38,skewX:15.7,x:230.7,y:-34.4},19,cjs.Ease.get(1)).to({scaleY:1.57,skewX:-10,x:345.8,y:25.5},20,cjs.Ease.get(-1)).to({scaleY:1.71,skewX:-29.4,x:432.2,y:70.4},15,cjs.Ease.get(1)).to({scaleY:1.61,skewX:-19.8,x:352.2,y:70.5},17,cjs.Ease.get(-1)).to({scaleY:1.51,skewX:-9.9,x:267.2,y:70.4},18,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ27();
	this.instance_2.parent = this;
	this.instance_2.setTransform(72,-4.8,1.23,1.273,0,-22,16.2);
	this.instance_2.alpha = 0.441;
	this.instance_2.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1.23,scaleY:1.27,skewX:-25.8,skewY:12.1,x:95.7,y:-21.8},15,cjs.Ease.get(-1)).to({scaleX:1.23,scaleY:1.27,skewX:-31,skewY:7.2,x:125.5,y:-43.2},19,cjs.Ease.get(1)).to({scaleX:1.23,scaleY:1.23,skewX:-23.1,skewY:12.3,x:74.7,y:-27.2},20,cjs.Ease.get(-1)).to({scaleX:1.23,scaleY:1.2,skewX:-17.2,skewY:16.2,x:36.7,y:-15},15,cjs.Ease.get(1)).to({scaleX:1.23,scaleY:1.23,skewX:-19.5,skewY:16.1,x:53.9,y:-10},17,cjs.Ease.get(-1)).to({scaleX:1.23,scaleY:1.27,skewX:-22,skewY:16.2,x:72,y:-4.8},18,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-145.9,-410.8,924.7,904.8);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ20();
	this.instance.parent = this;
	this.instance.setTransform(55.9,82.5,1,1,0,0,0,55.9,82.5);
	this.instance.alpha = 0.5;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ21, new cjs.Rectangle(0,0,111.8,165.1), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ10();
	this.instance.parent = this;
	this.instance.setTransform(62,37.1,0.379,0.379,0,0,0,169,102.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(-2,-1.6,128,77.7), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ16();
	this.instance.parent = this;
	this.instance.setTransform(74.1,87.2,0.402,0.402,0,0,0,136.1,222);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(19.4,-1.9,109.3,178.4), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.desk2();
	this.instance.parent = this;
	this.instance.setTransform(12,3,0.376,0.382);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ10();
	this.instance_1.parent = this;
	this.instance_1.setTransform(62,37.1,0.379,0.379,0,0,0,169,102.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(-2,-1.6,128,77.7), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ17();
	this.instance.parent = this;
	this.instance.setTransform(155,18.6,1.11,1.11,0,0,0,155,18.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:155.1,regY:18.6,scaleX:0.93,scaleY:0.93,x:155.1,y:18.7},9,cjs.Ease.get(-1)).to({regY:18.5,scaleX:0.74,scaleY:0.74,y:18.5},10,cjs.Ease.get(1)).to({regY:18.6,scaleX:0.92,scaleY:0.92,y:18.6},10,cjs.Ease.get(-1)).to({regX:155,regY:18.5,scaleX:1.11,scaleY:1.11,x:155},10,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ18();
	this.instance_1.parent = this;
	this.instance_1.setTransform(154.1,59.1,0.861,0.861,0,0,0,151,22.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:151.1,scaleX:0.99,scaleY:0.99,y:59.2},9,cjs.Ease.get(-1)).to({regX:151,scaleX:1.14,scaleY:1.14,x:154},10,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:154.1},10,cjs.Ease.get(-1)).to({scaleX:0.86,scaleY:0.86,y:59.1},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17,-2,344.1,80);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AzPGGQgxAAAAgyIAAqnQAAgyAxAAMAmeAAAQAzAAAAAyIAAKnQAAAygzAAg");
	mask.setTransform(313.4,-26.6);

	// Слой 5
	this.instance = new lib.Символ21();
	this.instance.parent = this;
	this.instance.setTransform(99.8,-23.8,1,1,0,0,0,55.9,82.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:315.5},25,cjs.Ease.get(-1)).to({x:595.8},26,cjs.Ease.get(1)).to({_off:true},1).wait(55));

	// Слой 4
	this.instance_1 = new lib.Символ19();
	this.instance_1.parent = this;
	this.instance_1.setTransform(322.2,-26.6,1,1,0,0,0,128.2,39);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(107));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(185,-65.6,256.3,78);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ6();
	this.instance.parent = this;
	this.instance.setTransform(112,42,1,1,0,0,0,112,42);
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(0,0,224,84), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ5();
	this.instance.parent = this;
	this.instance.setTransform(19,25,1,1,0,0,0,112,42);
	this.instance.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.531},9,cjs.Ease.get(-1)).to({alpha:0.789},10,cjs.Ease.get(1)).to({alpha:0.57},9,cjs.Ease.get(-1)).to({alpha:0.301},11,cjs.Ease.get(1)).wait(16));

	// Слой 1
	this.instance_1 = new lib.Символ9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(26.5,45,1,1,0,0,0,26.5,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(55));

	// Слой 4
	this.instance_2 = new lib.fog();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-173,154.8,1,0.946,0,180,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(55));

	// Слой 2
	this.instance_3 = new lib.fog();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-173,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(55));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-173,-32,408,186.8);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// doska.png
	this.instance = new lib.Символ11();
	this.instance.parent = this;
	this.instance.setTransform(15.8,102.1,1,1,0,0,0,61.8,36.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:92.6},9,cjs.Ease.get(-1)).to({y:82},10,cjs.Ease.get(1)).to({y:82.1},10,cjs.Ease.get(-1)).to({y:92.1},9).to({y:102.1},10,cjs.Ease.get(1)).wait(31));

	// doska2.png
	this.instance_1 = new lib.Символ13();
	this.instance_1.parent = this;
	this.instance_1.setTransform(202.8,103.1,1,1,0,0,0,61.8,36.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({y:103},10,cjs.Ease.get(-1)).to({y:90.5},9).to({y:77.8},10,cjs.Ease.get(1)).to({y:77.9},11,cjs.Ease.get(-1)).to({y:90.5},9).to({y:103.1},10,cjs.Ease.get(1)).wait(1));

	// Слой 2
	this.instance_2 = new lib.Символ22();
	this.instance_2.parent = this;
	this.instance_2.setTransform(110.3,185.6,1,1,0,0,0,163.8,64.2);
	this.instance_2.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(-89, 0, 0, 0))];
	this.instance_2.cache(-2,-10,332,141);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(79));

	// konte.png
	this.instance_3 = new lib.Символ12();
	this.instance_3.parent = this;
	this.instance_3.setTransform(13.2,75,1,1,0,0,0,69.2,88.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(79));

	// corona.png
	this.instance_4 = new lib.Символ14();
	this.instance_4.parent = this;
	this.instance_4.setTransform(202.9,72.5,0.896,0.896,0,0,0,78.5,88.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(79));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.5,-20,331,273.1);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ55();
	this.instance.parent = this;
	this.instance.setTransform(591.3,316.5,1.989,1.989);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.bg();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(-204.3,-910.6,1591.2,1829.6), null);


(lib.Символ9_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance_1 = new lib.Символ15();
	this.instance_1.parent = this;
	this.instance_1.setTransform(132.2,38.1,1,1,0,0,0,131.9,37.8);

	this.instance_2 = new lib.Символ10_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(132.3,35.3,1,1,0,0,0,132,35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0.3,264.2,75.6);


(lib.Символ8_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance_2 = new lib.Символ9_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(131.9,35.3,1,1,0,0,0,131.9,37.8);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8_1, new cjs.Rectangle(0.1,-2.2,264.4,75.6), null);


// stage content:
(lib.zidane_fullscreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		canvas.style.cursor = "pointer";
		canvas.addEventListener("click", function() {
		    window.callClick();
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 17
	this.instance = new lib.Символ8_1();
	this.instance.parent = this;
	this.instance.setTransform(457.5,618.3,1,1,0,0,0,131.9,35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 16
	this.instance_1 = new lib.Символ7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(303.5,245.3,1,1,0,0,0,155,22);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 13
	this.instance_2 = new lib.Символ8();
	this.instance_2.parent = this;
	this.instance_2.setTransform(459.5,79.7,1,1,0,0,0,155,40.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 15
	this.instance_3 = new lib.Символ3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(365.9,451.9,2.895,2.895,0,0,0,78.5,88.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Слой 14
	this.instance_4 = new lib.Символ4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(459,452.7,2.895,2.895,0,0,0,26.6,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Слой 18
	this.fara = new lib.Символ28();
	this.fara.parent = this;
	this.fara.setTransform(85,398.2,1.191,1.191,0,0,0,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.fara).wait(1));

	// Слой 12
	this.instance_5 = new lib.Символ1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(460,459.5,1,1,0,0,0,660,459.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(55.7,-453.1,1591.2,1897);
// library properties:
lib.properties = {
	width: 920,
	height: 915,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg?1491568202753", id:"bg"},
		{src:"images/blik.png?1491568202753", id:"blik"},
		{src:"images/corona.png?1491568202753", id:"corona"},
		{src:"images/cup.png?1491568202753", id:"cup"},
		{src:"images/desk1.png?1491568202753", id:"desk1"},
		{src:"images/desk2.jpg?1491568202753", id:"desk2"},
		{src:"images/fog.png?1491568202753", id:"fog"},
		{src:"images/konf.png?1491568202753", id:"konf"},
		{src:"images/logo.png?1491568202753", id:"logo"},
		{src:"images/man.png?1491568202753", id:"man"},
		{src:"images/text.png?1491568202753", id:"text"},
		{src:"images/text2.png?1491568202753", id:"text2"},
		{src:"images/uzor.jpg?1491568202753", id:"uzor"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;