(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.bedro = function() {
	this.initialize(img.bedro);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,39,18);


(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1589,400);


(lib.bullet = function() {
	this.initialize(img.bullet);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,27,83);


(lib.galstuk = function() {
	this.initialize(img.galstuk);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,22,23);


(lib.golova = function() {
	this.initialize(img.golova);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,68,82);


(lib.kaplya = function() {
	this.initialize(img.kaplya);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,24,12);


(lib.lev1 = function() {
	this.initialize(img.lev1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,66);


(lib.lev2 = function() {
	this.initialize(img.lev2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,121,83);


(lib.lev3 = function() {
	this.initialize(img.lev3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,154,78);


(lib.morda = function() {
	this.initialize(img.morda);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,62,70);


(lib.noga = function() {
	this.initialize(img.noga);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,34,32);


(lib.prav1 = function() {
	this.initialize(img.prav1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,86,43);


(lib.prav2 = function() {
	this.initialize(img.prav2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,104,88);


(lib.prav3 = function() {
	this.initialize(img.prav3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,114,108);


(lib.rifle = function() {
	this.initialize(img.rifle);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,221,170);


(lib.telo = function() {
	this.initialize(img.telo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,47,54);


(lib.tushka = function() {
	this.initialize(img.tushka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,152,145);


(lib.w256h2561380453915MouseOptions256x25632 = function() {
	this.initialize(img.w256h2561380453915MouseOptions256x25632);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,256,256);// helper functions:

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
	this.instance = new lib.lev2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ55, new cjs.Rectangle(0,0,121,83), null);


(lib.Символ54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.prav2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ54, new cjs.Rectangle(0,0,104,88), null);


(lib.Символ53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lev3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ53, new cjs.Rectangle(0,0,154,78), null);


(lib.Символ52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.prav3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ52, new cjs.Rectangle(0,0,114,108), null);


(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.morda();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ51, new cjs.Rectangle(0,0,62,70), null);


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tushka();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ50, new cjs.Rectangle(0,0,152,145), null);


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A1JJwIDiyBMAmxgCcIvQVbg");
	this.shape.setTransform(135.4,95.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EA4F4F").s().p("EgrmALRIPQ1bMBDQgEMIEsctg");
	this.shape_1.setTransform(452.3,91.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ49, new cjs.Rectangle(0,0,731.4,183.8), null);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EA4F4F").s().p("AtiLGQgWAAAAgWIAA1fQAAgWAWAAIbFAAQAWAAAAAWIAAVfQAAAWgWAAg");
	this.shape.setTransform(88.9,71);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,177.8,142);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgIArQgEgDAAgFIABgFIADgEQADgDAFAAQAFAAAFADIACAEIABAFIgBAFIgCADQgFAEgFAAQgFAAgDgEgAgKAUIgChCIAZAAIgCBCg");
	this.shape.setTransform(71.3,16.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AATAhQgEgBgCgCQgCgDgBgEIgDAFIgFADQgEACgHAAIgIgBIgHgEIgGgHIgCgIQAAgGACgEIAFgGQADgDAFgCQAEgBAGAAIAHABIAGACIAAgCQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAgBAAIgDgDIgIgBQgMABgFADIgDgQIAMgDQAGgCAGAAQAGAAAFACQAGABAEADQAFADACAEQACAFAAAHIAAATIABAGQABABAEAAIAAANIgMABIgCAAgAgDAEQgEAAgCACQgCACABAEIACADIAEABQAEAAACgCQAEgCAAgEIAAgBQgEgDgEAAIgBAAg");
	this.shape_1.setTransform(65.6,17.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgtAfIAAg9IAVAAIAAAqIAPAAIAAgqIATAAIAAAqIAQAAIAAgqIAVAAIAAA9g");
	this.shape_2.setTransform(56.6,17.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAKAfIAAgcIgiAcIgGAAIAAg9IAVAAIAAAbIAhgcIAHAAIAAA+g");
	this.shape_3.setTransform(47.3,17.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAUAuIAAgqIgTAUIgCAAIgTgUIAAAqIgYAAIAAhbIAIAAIAkAoIAkgoIAIAAIAABbg");
	this.shape_4.setTransform(38,16);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgJAfQgGgCgFgEQgFgFgDgGIgBgGIgBgIIABgHIABgHQAEgGAFgEQAEgEAGgCQAGgCAFAAIAIABIAHACIAGAEIAEAEIADAGIABAGIgBAOIgmAAIABAFIAEADQADACAHABIALgCIAJgDIADARIgMADIgNACQgHAAgHgCgAALgHQAAgEgDgCQgCgCgEAAQgDAAgDACQgDACgBAEIATAAIAAAAg");
	this.shape_5.setTransform(25.8,17.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAKAfIAAgXIgTAAIAAAXIgVAAIAAg9IAVAAIAAAUIATAAIAAgUIAVAAIAAA9g");
	this.shape_6.setTransform(18.4,17.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAJAfIAAgSIgFAAIgLASIgXAAIAAgCIANgUQgFgDgDgFQgDgEAAgFIACgIQACgEADgDQACgEAFgBQAEgCAGAAIAkAAIAAA9gAgDgMQgBABAAAAQAAABgBAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQABABAAAAQAAABABAAQACACACAAIAIAAIAAgMIgIAAQgCAAgCACg");
	this.shape_7.setTransform(7.5,17.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AEeCRIqnAAQgWAAAAgWIAAk0QAAgWAWAAILTAAQAWAAAAAWIAAESIBAB3g");
	this.shape_8.setTransform(41.6,20.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ46, new cjs.Rectangle(0,0,83.2,41.6), null);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bedro();
	this.instance.parent = this;
	this.instance.setTransform(35.1,9,1,1,120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ43, new cjs.Rectangle(0,0,35.1,42.8), null);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.noga();
	this.instance.parent = this;
	this.instance.setTransform(46.4,25.8,1,1,143.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ42, new cjs.Rectangle(0,0,46.4,46), null);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bedro();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ41, new cjs.Rectangle(0,0,39,18), null);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.noga();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ40, new cjs.Rectangle(0,0,34,32), null);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(163.4,19.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ39, new cjs.Rectangle(17.6,3.3,291.7,31.7), null);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(140.7,24.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ38, new cjs.Rectangle(-22.1,6,325.7,36.5), null);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rifle();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ34, new cjs.Rectangle(0,0,110.5,85), null);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bullet();
	this.instance.parent = this;
	this.instance.setTransform(-41.9,6.6,0.487,0.487,-30);

	this.instance_1 = new lib.bullet();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-20.6,6.6,0.487,0.487,-30);

	this.instance_2 = new lib.bullet();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,6.6,0.487,0.487,-30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ31, new cjs.Rectangle(-41.9,0,73.6,41.6), null);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0033").ss(3,1,1).p("ADjgJQAAACABACQAAADAAACQAABbhBBBQhBBBhbAAQgCAAgBAAQhZgBhAhAQhAhBAAhbQAAgEAAgFQAAgCAAgBQAEhTA8g9QBAg/BZgBQABAAACAAQBbAABBBAQA9A+ADBVIBbAAAk9gJIBoAAAAEDdIAABpAAElFIAABp");
	this.shape.setTransform(31.8,22.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ26, new cjs.Rectangle(-1.5,-12,66.6,68.3), null);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0033").ss(2,1,1).p("ABFAWIhDgrAhEAWIBDgr");
	this.shape.setTransform(6.9,2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ25, new cjs.Rectangle(-1,-1,15.7,6.3), null);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#002D23").s().p("AoIAoQjZgQAAgYQAAgWDZgRQDYgQEwgBQEyABDYAQQDYARAAAWQAAAYjYAQQjYAQkyABQkwgBjYgQg");
	this.shape.setTransform(73.8,5.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(0,0,147.5,11.3), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rifle();
	this.instance.parent = this;
	this.instance.setTransform(0,5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(0,5,110.5,85), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(1226,8,0.795,0.791);

	this.instance_1 = new lib.bg();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,8,0.795,0.791);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(0,8,2488.7,316.5), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lev1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.789,0.789);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(0,0,46.6,52.1), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#002D23").s().p("AjjAaQhegLAAgPQAAgPBegKQBfgLCEAAQCFAABeALQBeAKAAAPQAAAPheALQheALiFAAQiEAAhfgLg");
	this.shape.setTransform(32.2,3.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(0,0,64.3,7.4), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.prav1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.789,0.789);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(0,0,67.9,33.9), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.telo();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.789,0.789);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(0,0,37.1,42.6), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.galstuk();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.789,0.789);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(0,0,17.4,18.2), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#303030").s().p("ADFBhQgmgnAAg6QAAg5AmgnQApgoBBABQAwgBAiAWQADAFgBAUQABATgDADQgogZgnAAQgoAAgbAZQgbAaAAApQAAAqAbAbQAbAZAoAAQATAAARgGIAAhUQAZgFAaAFIAABvQgOAJgYAGQgZAGgbAAQhBABgpgogAipBzQgCgGAAgUQgBgVADgEQAsAdAiAAQAUAAALgJQAMgJAAgOQAAgQgOgIQgJgGghgLQghgLgRgNQgYgTAAghQAAghAYgXQAZgXAqAAQApgBAgAWQADAGAAAUQABAUgEAEQgqgcgeAAQgSAAgLAJQgLAIAAAOQAAAPANAIQAKAGAgAJQAiAMARAMQAXAVAAAiQAAAmgaAWQgZAVgpgBQguAAgigVgAHDCCIAAkEQAVgEAUAEICJCtIAAitQAagFAaAFIAAEEQgUAEgVgEIiJisIAACsQgNADgNAAQgNAAgNgDgAA2CCIAAkEQAbgEAaAEIAAEEQgNADgNAAQgNAAgOgDgAmLCCIAAkEICzAAQAEAWgEAVIh/AAIAABAIByAAQAEAWgEAUIhyAAIAABEIB/AAQAEAWgEAVgAqoCCIAAkEIBfAAQA+AAAmAmQAmAlAAA3QAAA5gmAkQgmAmg+gBgAp1BXIAsAAQAlAAAYgXQAXgYAAgoQAAgngXgYQgYgYglAAIgsAAg");
	this.shape.setTransform(280,87.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF5054").s().p("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");
	this.shape_1.setTransform(179.9,30.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(0,0,359.9,100.9), null);


(lib.Символ14_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF5053").s().p("AgnAoQgRgQAAgYQAAgXARgQQAQgRAXAAQAYAAAQARQARAQAAAXQAAAYgRAQQgQARgYAAQgXAAgQgRg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14_1, new cjs.Rectangle(-5.6,-5.6,11.3,11.3), null);


(lib.Символ13_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FE5054").ss(1,1,1).p("ABaAAQAAAmgaAaQgaAagmAAQglAAgagaQgagaAAgmQAAglAagaQAagaAlAAQAmAAAaAaQAaAaAAAlg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13_1, new cjs.Rectangle(-10,-10,20,20), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D6957C").s().p("AAKABIgCgFIgDgFIgDgEIgTgVIAEABIAHAFIALAJIAFAFIAFAHIABAEIABAEIABAIIgBAHIgDAQIgCADg");
	this.shape.setTransform(-4.3,-13.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F7C6B0").s().p("AgCCHIgJgmIgBAAIABgBQgshDgthAQACgGABgHQAAgMgWg7IgHgTIAuhDIAFAOQAQgZAaANQAMAGAJALQAMgUAZAJQANAEALAJIAHgGQAKgFANADQARAEAOArQAPAtgDAqQgCAlgRAtQgJAXgIAQQAFASAkBTQgOAJg3ASIg0ASQgBgdgHgtgAgoiVIACADIAEAGIACAGIABAiIACgDIAEgQIABgIIgBgHIgBgFIgCgEIgEgHIgGgGIgLgIIgIgFIgDgBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(153,153,153,0.957)").s().p("AgICHIgJgmIgBAAIABgBQgshDgPhMQgFgNgFgFIgXgjQgUgcARgfIASgjIAAADIALABIABgFIABAEQAQgZAZANQANAGAJALQAMgUAZAJQANAEAKAJIAIgGQAKgFANADQAQAEAOArQAPAtgCAqQgCAlgRAtQgJAXgIAQQAFASAkBTQgOAJg3ASIg0ASQAAgdgIgtgAguiVIACADIAEAGIACAGIABAiIACgDIAEgQIAAgIIAAgHIgBgFIgCgEIgFgHIgFgGIgLgIIgIgFIgEgBg");
	this.shape_2.setTransform(0.8,0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(-12.7,-20.8,25.6,41.9), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ECA990").s().p("AgMAUQgFgCgDgIQgEgKAGgKQAHgJANgBQAIAAAGACQAOAXgPACQgHAAgJAIIgLAGIAAgBg");
	this.shape.setTransform(-2.7,-8.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F7C6B0").s().p("AgiAGQgehFAHggQAFgWAZgHQARgEANAgQAGALAPAxQALAiAZA7IguBEQgTgzgdhEgAgthiQgGAKAEAKQADAJAFACQABAAAKgGQAKgHAHgBQAOgBgNgZQgGgBgIAAQgOAAgHAKg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(-6,-12.5,12,25), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ECA990").s().p("AgMANIgEgBIAAgBQgCgLAOgQQAEgGAKACQAJACgDAHQgDAFAAAOIAAANg");
	this.shape.setTransform(-8.9,-4.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F7C6B0").s().p("AAUA1QgZgSgrgqQgNgMgbgIIgNgFIAaAJIAAgOQAAgOADgGQADgHgJgCQgKgCgFAHQgOAQACAMQgJgFgCgFQgIgPAPgOQAPgPAUABQAQAAAbAUQAOALATARQALAIALgIQAEgDADgFQAtBAAsBDIgBABIgLABQgnAAgxgig");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(153,153,153,0.949)").s().p("AAaA1QgZgRgrgqQgNgNgbgIIgNgEIgDgBIAAgBQgJgEgDgGQgHgOAOgPQAPgOAVAAQAQABAaAUQAOAKATASQAMAIAKgIQAFgEACgEQAnA2AmA5IgTAMIAHAJQgigEgqgeg");
	this.shape_2.setTransform(-0.7,0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(-12,-8.7,24,17.6), null);


(lib.Анимация10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.kaplya();
	this.instance.parent = this;
	this.instance.setTransform(-4.7,-4.1,0.471,0.471,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.1,-4.1,12.4,8.4);


(lib.Tween22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.w256h2561380453915MouseOptions256x25632();
	this.instance.parent = this;
	this.instance.setTransform(-30,-30,0.234,0.234);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30,-30,60,60);


(lib.Symbol36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgvA0IAAhnIAgAAIAAAoIAQAAQAYAAALAIQAMAIAAASQAAAOgLAHQgKAIgUAAgAgPAeIAQAAQAPAAAAgLQAAgKgPAAIgQAAg");
	this.shape.setTransform(127,12.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhFA0IAAhnIAgAAIAABNIAWAAIAAhNIAfAAIAABNIAWAAIAAhNIAgAAIAABng");
	this.shape_1.setTransform(113.1,12.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAkA0IAAhnIAgAAIAABngAhDA0IAAhnIAgAAIAAAoIARAAQAXAAALAIQAMAIAAASQAAAOgLAHQgKAIgTAAgAgjAeIARAAQAPAAAAgLQAAgKgPAAIgRAAg");
	this.shape_2.setTransform(97.2,12.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAgA0IAAhPIgUBPIgXAAIgUhPIAABPIgaAAIAAhnIAqAAIAPA/IAQg/IAqAAIAABng");
	this.shape_3.setTransform(82.5,12.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAUA0IAAg4IgmA4IgfAAIAAhnIAfAAIAAA4IAmg4IAeAAIAABng");
	this.shape_4.setTransform(64.7,12.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAiA/IAAgWIhCAAIAAAWIgaAAIAAguIALAAQAJgYAAggIAAgXIBWAAIAABPIALAAIAAAugAgJgjQAAAVgIAfIAhAAIAAg2IgZAAg");
	this.shape_5.setTransform(52.6,13.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgrA0IAAhnIBVAAIAAAWIg1AAIAAARIAxAAIAAAUIgxAAIAAAVIA3AAIAAAXg");
	this.shape_6.setTransform(41.5,12.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgvA0IAAhnIA7AAQAPAAAIAHQAIAIAAALQAAAJgGAHQgDAEgIACQALADAGAGQAFAGAAALQAAAHgEAHQgEAGgGAEQgEACgIACIgPABgAgPAeIAQAAQAIAAADgDQAEgDAAgFQAAgFgEgCQgDgEgIAAIgQAAgAgPgKIAOAAQAHAAADgCQADgDAAgFQAAgFgDgDQgDgCgGAAIgPAAg");
	this.shape_7.setTransform(30.7,12.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAXA0IgFgRIgkAAIgFARIghAAIAohnIAiAAIAnBngAALANIgLglIgLAlIAWAAg");
	this.shape_8.setTransform(19.2,12.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AASA0IAAgqIgiAAIAAAqIghAAIAAhnIAhAAIAAAlIAiAAIAAglIAfAAIAABng");
	this.shape_9.setTransform(7.5,12.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol36, new cjs.Rectangle(0.1,0,133.6,23.1), null);


(lib.shape109 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("AETAAQAAByhQBRQhRBQhyAAQhxAAhRhQQhQhRAAhyQAAhxBQhRQBRhQBxAAQByAABRBQQBQBRAABxg");
	this.shape.setTransform(27.5,27.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,58,58);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ48();
	this.instance.parent = this;
	this.instance.setTransform(47.1,67.6,1,1,0,0,0,88.9,71);
	this.instance._off = true;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

	// Слой 2
	this.buble = new lib.Символ46();
	this.buble.parent = this;
	this.buble.setTransform(-14.4,-27,1,1,0,0,0,41.6,20.8);
	this.buble._off = true;

	this.timeline.addTween(cjs.Tween.get(this.buble).wait(1).to({_off:false},0).wait(3));

	// Слой 1
	this.instance_1 = new lib.golova();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.789,0.789);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,53.7,64.7);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ39();
	this.instance.parent = this;
	this.instance.setTransform(174.2,17.2,1,1,0,0,0,174.2,17.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.06,scaleY:1.06,x:170,y:16.2},4,cjs.Ease.get(-1)).to({scaleX:1.13,scaleY:1.13,x:165.3,y:15.1},5,cjs.Ease.get(1)).to({regY:17.1,scaleX:1.06,scaleY:1.06,x:169.8,y:16.2},5,cjs.Ease.get(-1)).to({regY:17.2,scaleX:1,scaleY:1,x:174.2,y:17.2},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(17.6,3.3,291.7,31.7);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ34();
	this.instance.parent = this;
	this.instance.setTransform(55.2,42.5,1,1,0,0,0,55.2,42.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:41.6},9,cjs.Ease.get(-1)).to({y:40.5},10,cjs.Ease.get(1)).to({y:41.5},10,cjs.Ease.get(-1)).to({y:42.5},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,110.5,85);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ38();
	this.instance.parent = this;
	this.instance.setTransform(155.5,12.7,1,1,0,0,0,155.5,12.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.05,scaleY:1.05,x:154.8,y:12.6},4,cjs.Ease.get(-1)).to({regY:12.6,scaleX:1.09,scaleY:1.09,x:154.1,y:12.5},5,cjs.Ease.get(1)).to({scaleX:1.05,scaleY:1.05,x:154.8,y:12.6},5,cjs.Ease.get(-1)).to({regY:12.7,scaleX:1,scaleY:1,x:155.5,y:12.7},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.1,6,325.7,36.5);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ26();
	this.instance.parent = this;
	this.instance.setTransform(31.8,22.1,1,1,0,0,0,31.8,22.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-12,x:31.9},9).to({rotation:0,x:31.8},10).to({regX:31.9,rotation:11.5,x:32,y:22.3},10).to({regX:31.8,rotation:0,x:31.8,y:22.1},9).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ25();
	this.instance_1.parent = this;
	this.instance_1.setTransform(32.3,23.2,1,1,0,0,0,6.9,2.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:2.2,scaleX:1.22,scaleY:1.22,x:32.2,y:23.7},9).to({regY:2.1,scaleX:1,scaleY:1,x:32.3,y:23.2},10).to({regY:2.2,scaleX:1.22,scaleY:1.22,x:32.2,y:23.7},10).to({regY:2.1,scaleX:1,scaleY:1,x:32.3,y:23.2},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-12,66.6,68.3);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(11));

	// Слой 3
	this.instance = new lib.Символ32();
	this.instance.parent = this;
	this.instance.setTransform(157.6,-70.3,1,1,0,0,0,155.5,12.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:17.9},9).to({y:-70.3},10).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ35();
	this.instance_1.parent = this;
	this.instance_1.setTransform(152.1,27,1,1,0,0,0,174.2,17.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-63},9).to({y:27},10).wait(1));

	// Слой 2
	this.instance_2 = new lib.Символ49();
	this.instance_2.parent = this;
	this.instance_2.setTransform(39.3,-9.9,1,1,0,0,0,365.7,91.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-326.4,-101.8,731.3,183.8);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ18();
	this.instance.parent = this;
	this.instance.setTransform(55.2,47.5,1,1,0,0,0,55.2,47.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:45.9},9,cjs.Ease.get(-1)).to({y:44},10,cjs.Ease.get(1)).to({y:45.8},10,cjs.Ease.get(-1)).to({y:47.5},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,5,110.5,85);


(lib.Символ15_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.parent = this;
	this.instance.setTransform(570.8,163.1,1,1,0,0,0,570.8,163.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-648.2},79).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,8,2488.7,316.5);


(lib.Символ8_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.btn = new lib.Символ47();
	this.btn.parent = this;
	this.btn.setTransform(26.8,32.4,1,1,0,0,0,26.8,32.4);
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.Символ47(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8_1, new cjs.Rectangle(-56,-47.8,109.7,112.5), null);


(lib.Символ7_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ55();
	this.instance.parent = this;
	this.instance.setTransform(60.5,41.5,1,1,0,0,0,60.5,41.5);
	this.instance.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(-20, 0, 0, -149))];
	this.instance.cache(-2,-2,125,87);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7_1, new cjs.Rectangle(0,0,125,87), null);


(lib.Символ6_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ53();
	this.instance.parent = this;
	this.instance.setTransform(77,39,1,1,0,0,0,77,39);
	this.instance.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(-6, 0, 0, -149))];
	this.instance.cache(-2,-2,158,82);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6_1, new cjs.Rectangle(0,0,158,82), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ52();
	this.instance.parent = this;
	this.instance.setTransform(57,54,1,1,0,0,0,57,54);
	this.instance.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(-20, 0, 0, -149))];
	this.instance.cache(-2,-2,118,112);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(0,0,118,112), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ50();
	this.instance.parent = this;
	this.instance.setTransform(76,72.5,1,1,0,0,0,76,72.5);
	this.instance.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(-20, 0, 0, -149))];
	this.instance.cache(-2,-2,156,149);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(0,0,156,149), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ54();
	this.instance.parent = this;
	this.instance.setTransform(52,44,1,1,0,0,0,52,44);
	this.instance.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(-20, 0, 0, -149))];
	this.instance.cache(-2,-2,108,92);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(0,0,108,92), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ51();
	this.instance.parent = this;
	this.instance.setTransform(31,35,1,1,0,0,0,31,35);
	this.instance.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(-20, 0, 0, -149))];
	this.instance.cache(-2,-2,66,74);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(0,0,66,74), null);


(lib.Символ4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 8
	this.instance_1 = new lib.Символ8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(9.2,6.3,1.113,1.113,-5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,rotation:0,x:6.2,y:9.1},3,cjs.Ease.get(-1)).to({scaleX:1.11,scaleY:1.11,rotation:-5,x:9.2,y:6.3},7,cjs.Ease.get(1)).wait(1));

	// Символ 7
	this.instance_2 = new lib.Символ7();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-6.8,-20.4,1.176,1.176);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1,scaleY:1,x:-7.7,y:-17.1},3,cjs.Ease.get(-1)).to({scaleX:1.18,scaleY:1.18,x:-6.8,y:-20.4},7,cjs.Ease.get(1)).wait(1));

	// Символ 6
	this.instance_3 = new lib.Символ6();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-2.3,5.1,1,1,3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:0,x:-6.8,y:9.9},3,cjs.Ease.get(-1)).to({rotation:3,x:-2.3,y:5.1},7,cjs.Ease.get(1)).wait(1));

	// Слой 6
	this.instance_4 = new lib.Символ13_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-10.3,-26.4,0.111,0.111);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3).to({_off:false},0).to({scaleX:1.25,scaleY:1.25},3).to({alpha:0},4).wait(1));

	// Слой 7
	this.instance_5 = new lib.Символ14_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-10.3,-26.2,0.62,0.62);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(3).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},3).to({alpha:0},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.7,-35.1,40.3,65.8);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.parent = this;
	this.instance.setTransform(-12.7,-10.8,0.588,0.588,0,0,0,179.9,50.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ4_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1.8,37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(-118.5,-40.5,211.8,108.7), null);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol36();
	this.instance.parent = this;
	this.instance.setTransform(66.8,11.6,1,1,0,0,0,66.8,11.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol26, new cjs.Rectangle(0.1,0,133.6,23.1), null);


(lib.sprite110 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shape109("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sprite110, new cjs.Rectangle(-1.5,-1.5,58,58), null);


(lib.man = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// kaplya.png
	this.instance = new lib.Анимация10("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(45.8,38.1,0.765,0.765,-30,0,0,0.1,0.2);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:-15,x:24.2,y:40.8,alpha:1},4).to({regY:0.2,scaleX:1.76,scaleY:0.56,x:-2.7,y:44},5).to({regY:0,scaleX:1,scaleY:1,x:-10.3,y:46.8,alpha:0},5).to({startPosition:0},4).wait(1));

	// golova
	this.golova = new lib.Символ8_1();
	this.golova.parent = this;
	this.golova.setTransform(65.6,66,1,1,0,0,0,37.6,66);

	this.timeline.addTween(cjs.Tween.get(this.golova).to({regX:37.7,rotation:-6,x:65.7,y:61.1},4).to({regX:37.6,rotation:0,x:65.6,y:61},5).wait(5).to({y:66},4).wait(1));

	// galstuk
	this.instance_1 = new lib.Символ9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(74.4,66,1,1,0,0,0,17.4,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:0.1,rotation:10.3,y:61.1},4).to({regY:0,rotation:0,y:61},5).to({regY:0.1,rotation:8.5,y:61.1},5).to({regY:0,rotation:0,y:66},4).wait(1));

	// telo
	this.instance_2 = new lib.Символ10();
	this.instance_2.parent = this;
	this.instance_2.setTransform(67.6,81.3,1,1,0,0,0,18.6,21.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:76.3},4).wait(10).to({y:81.3},4).wait(1));

	// lev.noga
	this.instance_3 = new lib.Символ40();
	this.instance_3.parent = this;
	this.instance_3.setTransform(96,104.4,1,1,0,0,0,7,5.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:45,x:87.2,y:106.4},4).to({rotation:99.7,x:64.9,y:110.6},5).to({rotation:45,x:87.2,y:106.4},5).to({rotation:0,x:96,y:104.4},4).wait(1));

	// lev.bedro
	this.instance_4 = new lib.Символ41();
	this.instance_4.parent = this;
	this.instance_4.setTransform(81.5,100,1,1,0,0,0,19.5,9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:19.6,rotation:45,x:80,y:95.1},4).to({rotation:90,x:69.9,y:96.3},5).to({rotation:45,x:80,y:95.1},5).to({regX:19.5,rotation:0,x:81.5,y:100},4).wait(1));

	// prav.noga
	this.instance_5 = new lib.Символ42();
	this.instance_5.parent = this;
	this.instance_5.setTransform(40,109.9,1,1,0,0,0,39.5,22.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:56.3,y:116.4},2).to({x:72.5,y:113.2},2).to({regX:39.4,rotation:-120,x:81.2,y:110.8},5).to({regX:39.5,rotation:0,x:72.5,y:113.2},5).to({regX:39.6,rotation:15,x:56.3,y:116.4},2).to({regX:39.5,rotation:0,x:40,y:109.9},2).wait(1));

	// prav.bedro
	this.instance_6 = new lib.Символ43();
	this.instance_6.parent = this;
	this.instance_6.setTransform(62,100,1,1,0,0,0,28.4,18.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:-75,x:65.3,y:92.5},4).to({rotation:-99,x:68.8,y:92.6},5).to({rotation:-75,x:65.3,y:92.5},5).to({rotation:0,x:62,y:100},4).wait(1));

	// prav.ruka
	this.instance_7 = new lib.Символ12();
	this.instance_7.parent = this;
	this.instance_7.setTransform(57,75.1,1,1,0,0,0,57,26.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:-11,x:57.1,y:70.1},4).to({rotation:0,x:57},5).to({rotation:-9.2},5).to({rotation:0,y:75.1},4).wait(1));

	// lev.ruka
	this.instance_8 = new lib.Символ14();
	this.instance_8.parent = this;
	this.instance_8.setTransform(78,77.1,1,1,0,0,0,0,52.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({rotation:16.8,x:78.1,y:72.1},4).to({rotation:0,x:78},5).to({regX:0.1,rotation:4.2,x:78.1},5).to({regX:0,rotation:0,x:78,y:77.1},4).wait(1));

	// shadow
	this.instance_9 = new lib.Символ13();
	this.instance_9.parent = this;
	this.instance_9.setTransform(66,136.6,1,1,0,0,0,32.1,3.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(19));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,124.6,140.3);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween22("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(30,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(0,0,60,60), null);


(lib.Символ37 = function(mode,startPosition,loop) {
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
	this.kursor = new lib.Символ17();
	this.kursor.parent = this;
	this.kursor.setTransform(55.2,42.5,1,1,0,0,0,55.2,47.5);
	this.kursor.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.kursor).wait(1).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,110.5,85);


(lib.Символ36 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ33();
	this.instance.parent = this;
	this.instance.setTransform(55.2,42.5,1,1,0,0,0,55.2,42.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,110.5,85);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ24();
	this.instance.parent = this;
	this.instance.setTransform(-84.2,83.5,1,1,0,0,0,31.8,22.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-129.1,y:130.6},4).to({x:-180.8,y:69.7},5).to({x:-123.3,y:15.6},5).to({x:-76.2,y:50.1},5).to({x:-60.1,y:123.7},5).to({x:4.3,y:168.6},5).to({x:57.2,y:90.4},5).to({x:-0.3,y:21.4},5).to({x:-62.8,y:72.7},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117.5,49.4,66.6,68.3);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ24();
	this.instance.parent = this;
	this.instance.setTransform(-84.2,83.5,1,1,0,0,0,31.8,22.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-129.1,y:130.6},9).to({x:-180.8,y:69.7},10).to({x:-123.3,y:15.6},10).to({x:-76.2,y:50.1},10).to({x:-60.1,y:123.7},10).to({x:4.3,y:168.6},10).to({x:57.2,y:90.4},10).to({x:-0.3,y:21.4},10).to({x:-62.8,y:72.7},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117.5,49.4,66.6,68.3);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// morda
	this.instance = new lib.Символ2();
	this.instance.parent = this;
	this.instance.setTransform(204,104.1,1,1,0,0,0,13,42.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:13.1,rotation:-15,x:204.1,y:96.9},4).to({rotation:0},5).to({rotation:-15},5).to({regX:13,rotation:0,x:204,y:104.1},4).wait(1));

	// pra.noga
	this.instance_1 = new lib.Символ3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(91.2,170,1,1,0,0,0,91.2,37);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-45,y:162.7},4).to({regX:91.1,rotation:-125.4,x:115.2,y:178.7},5).to({regX:91.2,rotation:-45,x:91.2,y:162.7},5).to({rotation:0,y:170},4).wait(1));

	// tusha
	this.instance_2 = new lib.Символ4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(148,142.5,1,1,0,0,0,76,72.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:135.3},4).wait(10).to({y:142.5},4).wait(1));

	// pra.lapa
	this.instance_3 = new lib.Символ5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(139,91.9,1,1,0,0,0,57,91.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:57.1,rotation:10.2,x:139.1,y:84.8},4).to({regX:57,rotation:-34.8},5).to({regX:57.1,rotation:10.2},5).to({regX:57,rotation:0,x:139,y:91.9},4).wait(1));

	// lev.lapa
	this.instance_4 = new lib.Символ6_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(206.4,118.1,1,1,0,0,0,22.4,53.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:35.5,x:206.5,y:110.9},4).to({regX:22.5,rotation:58.5,y:111},5).to({regX:22.4,rotation:35.5,y:110.9},5).to({rotation:0,x:206.4,y:118.1},4).wait(1));

	// lev.noga
	this.instance_5 = new lib.Символ7_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(179.1,185.6,1,1,0,0,0,27.1,31.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:27.2,rotation:60,y:178.5},4).to({regX:27.1,rotation:177.8,x:107.2},5).to({regX:27.2,rotation:60,x:179.1},5).to({regX:27.1,rotation:0,y:185.6},4).wait(1));

	// shadow
	this.instance_6 = new lib.Символ19();
	this.instance_6.parent = this;
	this.instance_6.setTransform(133.9,244.7,1,1,0,0,0,73.8,5.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleX:1.08,x:134},4).to({scaleX:1,x:133.9},5).to({scaleX:1.08,x:134},5).to({scaleX:1,x:133.9},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,342,250.3);


(lib.Символ1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// medmed'
	this.instance_2 = new lib.Символ11();
	this.instance_2.parent = this;
	this.instance_2.setTransform(8,46.7,1,1,0,0,0,169,125.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:20},7,cjs.Ease.get(-1)).to({x:32},7,cjs.Ease.get(1)).to({x:8},10).to({x:34.2},7,cjs.Ease.get(-1)).to({x:64},8,cjs.Ease.get(1)).to({x:8},5).to({x:16},5,cjs.Ease.get(-1)).to({x:24},5,cjs.Ease.get(1)).to({x:16.6},7,cjs.Ease.get(-1)).to({x:8},8,cjs.Ease.get(1)).wait(1));

	// Man
	this.man = new lib.man();
	this.man.parent = this;
	this.man.setTransform(284.2,102,1,1,0,0,0,62.2,71);

	this.timeline.addTween(cjs.Tween.get(this.man).to({x:289.4},4,cjs.Ease.get(-1)).to({x:300.2},3).to({x:316.2},7,cjs.Ease.get(1)).to({x:284.2},10).wait(20).to({x:304.2},5,cjs.Ease.get(-1)).to({x:324.2},5,cjs.Ease.get(1)).to({x:305.6},7,cjs.Ease.get(-1)).to({x:284.2},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-161,-79,507.6,250.3);


(lib.sprite112 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol16();
	this.instance.parent = this;
	this.instance.setTransform(1.5,21.8,0.85,0.85,0,0,0,30,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[1.5,21.8,1.5,21.4,1.5,21,1.5,15.3,5.5,11.2,9.7,7.1,15.4,7.1,21.1,7.1,25.2,11.2,29.3,15.3,29.3,21,29.3,26.7,25.2,30.8,21.1,34.9,15.4,34.9,9.7,34.9,5.5,30.8,3.3,28.6,2.3,25.8]}},29).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24,-3.7,51,51);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(11));

	// Слой 1
	this.instance = new lib.Символ29();
	this.instance.parent = this;
	this.instance.setTransform(224.4,40.9,1,1,0,0,0,35,48.6);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).to({alpha:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(71.8,41.6,66.6,68.3);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(11));

	// Слой 1
	this.instance = new lib.Символ27();
	this.instance.parent = this;
	this.instance.setTransform(147.9,-18.2,1,1,0,0,0,31.8,32.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},9).to({alpha:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,66.6,68.3);


(lib.sprite113 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.sprite112();
	this.instance.parent = this;
	this.instance.setTransform(11.6,6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30));

	// Layer 1
	this.instance_1 = new lib.sprite110();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-8.7,-8.7,1.316,1.316);
	this.instance_1.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.5,-10.6,78.2,76.3);


(lib.Символ9_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance_1 = new lib.Symbol26();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-92.9,0.6,1,1,0,0,0,66.8,11.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.cir = new lib.sprite113();
	this.cir.parent = this;
	this.cir.setTransform(0.1,0.1,0.499,0.499,0,0,0,27.6,27.6);

	this.timeline.addTween(cjs.Tween.get(this.cir).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9_1, new cjs.Rectangle(-159.7,-19,178.8,38.1), null);


(lib.Символ72 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(11));

	// Слой 1
	this.instance = new lib.Символ9_1();
	this.instance.parent = this;
	this.instance.setTransform(147.5,16.7,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-50.5},9).to({x:147.5},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,-0.9,165,35.2);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(11));

	// Слой 1
	this.mouse = new lib.Символ72();
	this.mouse.parent = this;
	this.mouse.setTransform(82.5,16.6,1,1,0,0,0,82.5,16.6);

	this.timeline.addTween(cjs.Tween.get(this.mouse).to({x:-1.3},4,cjs.Ease.get(-1)).to({x:-106},5,cjs.Ease.get(1)).wait(5).to({x:82.5},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,-0.9,165,35.2);


// stage content:
(lib.misha = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		var myCanvas = document.getElementById("canvas");
		
		stage.canvas.style.cursor = "none";
		this.rifle.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
			this.rifle.x = stage.mouseX/window.devicePixelRatio;
			
		}
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		this.cursor = "none";
		
		
		myCanvas.addEventListener("mouseover", fl_Clickover);
		
		function fl_Clickover()
		{
		    _this.mouse.gotoAndPlay(1);
		    _this.rifle2.gotoAndPlay(2);
			_this.rifle.gotoAndPlay(2);
			_this.pricel1.gotoAndPlay(1);
			_this.pricel2.gotoAndPlay(1);
			_this.text.gotoAndPlay(1);
			
			
		}
		
		myCanvas.addEventListener("mouseout", fl_Clickout);
		
		function fl_Clickout()
		{
		    _this.mouse.gotoAndPlay(10);
		    _this.rifle2.gotoAndPlay(1);
			_this.rifle.gotoAndPlay(1);
			_this.pricel1.gotoAndPlay(10);
			_this.pricel2.gotoAndPlay(10);
			_this.text.gotoAndPlay(10);
		
			
		}
		
		
		stage.canvas.style.cursor = "none";
		this.pricel2.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor_2.bind(this));
		
		function fl_CustomMouseCursor_2() {
			this.pricel2.x = stage.mouseX/window.devicePixelRatio;
			this.pricel2.y = stage.mouseY/window.devicePixelRatio;
		}
		
		    this.pers.man.golova.btn.cursor = "none";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 1
	this.logo = new lib.Символ1();
	this.logo.parent = this;
	this.logo.setTransform(69.1,28.8,0.458,0.458);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

	// bullet
	this.instance = new lib.Символ31();
	this.instance.parent = this;
	this.instance.setTransform(616.7,280.2,0.724,0.724,0,0,0,15.8,20.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// mouse
	this.mouse = new lib.Символ45();
	this.mouse.parent = this;
	this.mouse.setTransform(92.2,279.8,1,1,0,0,0,82.5,16.6);

	this.timeline.addTween(cjs.Tween.get(this.mouse).wait(1));

	// rifle2
	this.rifle2 = new lib.Символ36();
	this.rifle2.parent = this;
	this.rifle2.setTransform(387.2,276.5,1,1,0,0,0,55.2,42.5);

	this.timeline.addTween(cjs.Tween.get(this.rifle2).wait(1));

	// rifle
	this.rifle = new lib.Символ37();
	this.rifle.parent = this;
	this.rifle.setTransform(387.2,276.5,1,1,0,0,0,55.2,42.5);

	this.timeline.addTween(cjs.Tween.get(this.rifle).wait(1));

	// pricel2
	this.pricel2 = new lib.Символ30();
	this.pricel2.parent = this;
	this.pricel2.setTransform(268.2,156.9,1,1,0,0,0,167.7,75.7);

	this.timeline.addTween(cjs.Tween.get(this.pricel2).wait(1));

	// pricel1
	this.pricel1 = new lib.Символ28();
	this.pricel1.parent = this;
	this.pricel1.setTransform(309.5,148.5,1,1,0,0,0,73.2,24.2);

	this.timeline.addTween(cjs.Tween.get(this.pricel1).wait(1));

	// personage
	this.pers = new lib.Символ1_1();
	this.pers.parent = this;
	this.pers.setTransform(276,200.5,1,1,0,0,0,77,72.5);

	this.timeline.addTween(cjs.Tween.get(this.pers).wait(1));

	// text
	this.text = new lib.Символ23();
	this.text.parent = this;
	this.text.setTransform(460.9,23.6,1,1,0,0,0,164.1,16.2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// bg
	this.instance_1 = new lib.Символ15_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(563.8,148.1,1,1,0,0,0,570.8,163.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(290.4,58.1,2511.4,413.4);
// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bedro.png?1496996022949", id:"bedro"},
		{src:"images/bg.jpg?1496996022949", id:"bg"},
		{src:"images/bullet.png?1496996022949", id:"bullet"},
		{src:"images/galstuk.png?1496996022949", id:"galstuk"},
		{src:"images/golova.png?1496996022949", id:"golova"},
		{src:"images/kaplya.png?1496996022949", id:"kaplya"},
		{src:"images/lev1.png?1496996022949", id:"lev1"},
		{src:"images/lev2.png?1496996022949", id:"lev2"},
		{src:"images/lev3.png?1496996022949", id:"lev3"},
		{src:"images/morda.png?1496996022949", id:"morda"},
		{src:"images/noga.png?1496996022949", id:"noga"},
		{src:"images/prav1.png?1496996022949", id:"prav1"},
		{src:"images/prav2.png?1496996022949", id:"prav2"},
		{src:"images/prav3.png?1496996022949", id:"prav3"},
		{src:"images/rifle.png?1496996022949", id:"rifle"},
		{src:"images/telo.png?1496996022949", id:"telo"},
		{src:"images/tushka.png?1496996022949", id:"tushka"},
		{src:"images/w256h2561380453915MouseOptions256x25632.png?1496996022949", id:"w256h2561380453915MouseOptions256x25632"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;