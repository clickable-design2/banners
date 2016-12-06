(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,691,360);


(lib.back1 = function() {
	this.initialize(img.back1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,691,360);


(lib.blick = function() {
	this.initialize(img.blick);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,136,135);


(lib.g1 = function() {
	this.initialize(img.g1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,95);


(lib.g2 = function() {
	this.initialize(img.g2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,35,100);


(lib.g5 = function() {
	this.initialize(img.g5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,252,228);


(lib.g6 = function() {
	this.initialize(img.g6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,10,6);


(lib.g7 = function() {
	this.initialize(img.g7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,53,97);


(lib.g8 = function() {
	this.initialize(img.g8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,115,188);


(lib.g9 = function() {
	this.initialize(img.g9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,68,67);


(lib.mish = function() {
	this.initialize(img.mish);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,119);


(lib.mouse = function() {
	this.initialize(img.mouse);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);// helper functions:

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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,255,0,0.6)").s().p("AmEGBQihifAAjiQAAjhChifQCiihDiAAQDjAACiChQChCfAADhQAADiihCfQiiCgjjAAQjiAAiiigg");
	this.shape.setTransform(55,54.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ46, new cjs.Rectangle(0,0,110,109.1), null);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AguDSQgRgQAAgbQAAgcAQgOQAQgQAfAAQAfAAAQAQQAPAOAAAcQAAAbgQAQQgRAPgdAAQgdAAgRgPgAgxA9IgPkdICBAAIgPEdg");
	this.shape.setTransform(137.6,46.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABsEpIAAi6QAAgqAFhSIgCAAIixE2IiTAAIAAm6IBrAAIAAC9IgGB5IADAAICvk2ICUAAIAAG6gAhsjQQgkgdgFg7IBjAAQACAeAMANQALAOAZAAQAsAAAEg5IBlAAQgNB0iIAAQhIAAgkgcg");
	this.shape_1.setTransform(102.4,38.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiCDdIAAm5IEFAAIAABgIiOAAIAABFICEAAIAABfIiEAAIAABUICOAAIAABhg");
	this.shape_2.setTransform(60.1,46.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AijDdIAAm5IEiAAIAABgIiqAAIAABDIASAAQBcAAAwAiQAwAhAABDQAABGgvAlQgwAlhYAAgAgrCBIAQAAQAlAAAQgMQARgNAAgYQAAgYgSgMQgRgLgjAAIgQAAg");
	this.shape_3.setTransform(23.2,46.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ42, new cjs.Rectangle(0,0,148.6,88.4), null);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.back1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ37, new cjs.Rectangle(0,0,691,360), null);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(3,1,1).p("AjbunIE2E2IjNDNICgChIigCgICpCpIhyB0ICfCgIg/A/IB7BrAGlknIjNDOICgCfIBpBpAGlknICgChIBQBQAD7nRICqCqABbpxICgCgIjNDOICqCqIihCfIChChIh0BzIBvBuIUV0VAGRunIk2E2AF4BGIigChIBpBpAiGEFIgFAEAg7C6IhLBLICrCUIgHAHABzM1IAPAPABzM1IhpBpACgH6IAzgyAQHuJIpiJiAJFiGIjNDMAVIuJIsDMDALRunInWHWAmFiQIhaBaAkSkDIhzBzICgCgIhYBXIgCADAuOt/IJ8J8AyJuTIMEMDA14tDIQ7OqIC3CeAhyhjIhzBzICqCqAhymkIigChICgCgApNt/IHbHbA5zuxIbmbmA8xuJIc7c7AcyuJI6/a+");
	this.shape.setTransform(184.2,94.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ34, new cjs.Rectangle(-1.5,-1.5,371.4,192.2), null);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgoC1QgOgOAAgXQAAgYAOgNQAOgNAaAAQAaAAAOANQAOANAAAYQAAAXgOAOQgPANgZAAQgZAAgPgNgAgqA1IgNj2IBvAAIgND2g");
	this.shape.setTransform(318.5,40);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiyC8IAAhQQAPAFAKAAQAOAAAHgLQAHgLAGgbIAQhkIAUicIEHAAIAAF8IhoAAIAAkoIhJAAQgEBBgLBCQgJBDgKAcQgJAbgNAQQgPAQgUAIQgVAIgdAAQgWAAgSgFg");
	this.shape_1.setTransform(288.7,39.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiICSQgwgyAAhgQAAhfAwgyQAvgyBaAAQBbAAAvAyQAuAxAABgQAABggvAyQgvAyhbAAQhZAAgvgygAhMAAQAABuBMABQAnAAATgbQATgbAAg5QAAg4gTgbQgTgbgmgBQhNABAABug");
	this.shape_2.setTransform(249.8,39.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ah+C+IAAl7ID9AAIAABSIiWAAIAAEpg");
	this.shape_3.setTransform(215.6,39.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABdD/IAAifQAAgkAFhIIgCAAIiYELIiAAAIAAl7IBdAAIAACiIgFBpIACAAICXkLIB/AAIAAF7gAhdizQgfgYgDg0IBUAAQACAaAJAMQALALAVAAQAmAAAEgxIBWAAQgLBkh1AAQg+AAgfgYg");
	this.shape_4.setTransform(162.4,33.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhwC+IAAl7IDhAAIAABSIh6AAIAAA8IBxAAIAABSIhxAAIAABIIB6AAIAABTg");
	this.shape_5.setTransform(126,39.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AiMC+IAAl7ID6AAIAABSIiSAAIAAA6IAOAAQBPAAAqAeQAqAbAAA6QAAA8gpAhQgpAfhMAAgAgkBvIANAAQAgAAAOgLQAOgKAAgVQAAgVgPgKQgPgKgeAAIgNAAg");
	this.shape_6.setTransform(94.3,39.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABRC/IgThHIh6AAIgUBHIhxAAIB9l9ICIAAIB+F9gAApAjIgQg9IgOg2IgLgwIgIAsIgfB3IBQAAg");
	this.shape_7.setTransform(56.7,39.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AiXCvIAAhYQAWALAjAHQAiAHAcAAQArAAASgJQATgJAAgWQAAgmhXAAIgsAAIAAhTIAoAAQAeAAAQgCQARgEAIgGQAIgHAAgOQAAgcg2AAQg0AAgoAaIgrhHQAigVAkgKQAjgJAwAAQA/AAAmAaQAmAaAAArQAABLhaAQIAAACQA0AEAaAWQAbAXAAAoQAAAigTAaQgUAagkAOQgkAOgxAAQhbAAg2gVg");
	this.shape_8.setTransform(19.5,39.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ32, new cjs.Rectangle(0,0,328,76.1), null);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(3,1,1).p("AEoAAQAAB6hXBXQhXBXh6AAQh6AAhWhXQhXhXAAh6QAAh6BXhWQBWhXB6AAQB6AABXBXQBXBWAAB6g");
	this.shape.setTransform(29.6,29.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ26, new cjs.Rectangle(-1.5,-1.5,62.1,62.1), null);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.blick();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.352,0.352);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ25, new cjs.Rectangle(0,0,47.9,47.6), null);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.back();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ23, new cjs.Rectangle(0,0,691,360), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.g6();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(0,0,10,6), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.g1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(0,0,122,95), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.g5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(0,0,252,228), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.g8();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(0,0,115,188), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.g9();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(0,0,68,67), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.g7();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(0,0,53,97), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.g2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(0,0,35,100), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.498)").s().p("Az1B+QoOg0AAhKQAAhJIOg1QIOg0LnAAQLoAAIOA0QIOA1AABJQAABKoOA0QoOA1roAAQrnAAoOg1g");
	this.shape.setTransform(179.6,17.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(0,0,359.1,35.7), null);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mouse();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.686,0.686);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ43, new cjs.Rectangle(0,0,43.9,43.9), null);


(lib.Анимация6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.g9();
	this.instance.parent = this;
	this.instance.setTransform(-52.2,-51.5,1.537,1.537);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.2,-51.5,104.6,103);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ46();
	this.instance.parent = this;
	this.instance.setTransform(55,54.6,1,1,0,0,0,55,54.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},4).to({alpha:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,110,109.1);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ45();
	this.instance.parent = this;
	this.instance.setTransform(55,54.6,1,1,0,0,0,55,54.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ43_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance_1 = new lib.Анимация6("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(52.3,51.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.94,scaleY:0.94},9,cjs.Ease.get(-1)).to({scaleX:0.88,scaleY:0.88},10,cjs.Ease.get(1)).to({scaleX:0.94,scaleY:0.94,x:52.2},11,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:52.3},9,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,104.6,103);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ42();
	this.instance.parent = this;
	this.instance.setTransform(74.3,44.2,1,1,0,0,0,74.3,44.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:74.2,scaleX:1.24,scaleY:1.24,x:74.2},4).to({regX:74.3,scaleX:1,scaleY:1,x:74.3},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,148.6,88.4);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ44();
	this.instance.parent = this;
	this.instance.setTransform(59,58.7,1,1,0,0,0,55,54.6);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ44(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.mish();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ39, new cjs.Rectangle(0,0,120,119), null);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия: 2 - копия
	this.instance = new lib.Символ39();
	this.instance.parent = this;
	this.instance.setTransform(300,63.6,0.449,0.449,0,0,0,60,59.6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(47).to({_off:false},0).to({alpha:1},3).wait(1).to({regX:60.2,scaleX:0.07},9).to({regX:60,scaleX:0.45},10).wait(20).to({alpha:0},3).to({_off:true},1).wait(94));

	// Слой 1 - копия: 2
	this.instance_1 = new lib.Символ39();
	this.instance_1.parent = this;
	this.instance_1.setTransform(70,138.6,0.449,0.449,0,0,0,60,59.6);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(94).to({_off:false},0).to({alpha:1},3).wait(1).to({regX:60.2,scaleX:0.07},9).to({regX:60,scaleX:0.45},10).wait(20).to({alpha:0},3).to({_off:true},1).wait(47));

	// Слой 1 - копия
	this.instance_2 = new lib.Символ39();
	this.instance_2.parent = this;
	this.instance_2.setTransform(301,140.6,0.449,0.449,0,0,0,60,59.6);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(141).to({_off:false},0).to({alpha:1},3).wait(1).to({regX:60.2,scaleX:0.07},9).to({regX:60,scaleX:0.45},10).wait(20).to({alpha:0},3).wait(1));

	// Слой 1
	this.instance_3 = new lib.Символ39();
	this.instance_3.parent = this;
	this.instance_3.setTransform(70,63.6,0.449,0.449,0,0,0,60,59.6);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:1},3).wait(1).to({regX:60.2,scaleX:0.07},9).to({regX:60,scaleX:0.45},10).wait(20).to({alpha:0},3).to({_off:true},1).wait(141));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(43.1,36.8,53.9,53.5);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ23();
	this.instance.parent = this;
	this.instance.setTransform(345.5,180,1,1,0,0,0,345.5,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ36, new cjs.Rectangle(0,0,691,360), null);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ34();
	this.instance.parent = this;
	this.instance.setTransform(184.2,94.6,1,1,0,0,0,184.2,94.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},39).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,371.4,192.2);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AXfD2QgPgOAAgXIAAAAQAAgYAPgNIAAAAQANgNAbAAIAAAAQAbAAAOANIAAAAQANANAAAYIAAAAQAAAXgNAOIAAAAQgPANgaAAIAAAAQgaAAgOgNgAQqD8IAAhQQAPAFAKAAIAAAAQAOAAAHgLIAAAAQAHgLAGgbIAAAAIARhlIAUibIEHAAIAAF8IhnAAIAAkoIhJAAQgGBAgKBEIAAAAQgKBDgJAbIAAAAQgJAbgOAQIAAAAQgOAQgVAIIAAAAQgVAIgcAAIAAAAQgXAAgSgFgALQDPQgwgyAAhgIAAAAQAAheAwgyIAAAAQAvgzBbAAIAAAAQBbAAAvAyIAAAAQAuAyABBfIAAAAQAABggwAyIAAAAQguAyhcAAIAAAAQhaAAgvgygAMNA9QgBBvBNAAIAAAAQAnAAAUgbIAAAAQASgbABg5IAAAAQgBg5gTgaIAAAAQgTgbgmAAIAAAAQhNAAAABugA49DtIAAhZQAWALAjAIIAAAAQAhAGAcAAIAAAAQAtAAASgJIAAAAQASgJAAgVIAAAAQAAgnhXAAIAAAAIgsAAIAAhTIAnAAQAeAAASgDIAAAAQARgDAHgGIAAAAQAIgHAAgNIAAAAQAAgdg3AAIAAAAQg0AAgnAbIAAAAIgrhHQAigWAkgJIAAAAQAigJAyAAIAAAAQA/AAAmAaIAAAAQAmAaAAAqIAAAAQAABLhaAPIAAAAIAAACQA0AFAaAXIAAAAQAaAXAAAnIAAAAQABAjgUAaIAAAAQgTAagkAOIAAAAQgkANgyAAIAAAAQhbAAg2gUgAGED8IAAl8ID+AAIAABTIiXAAIAAEpgABMD8IAAifQAAgkAFhIIAAAAIgCAAIiYELIiAAAIAAl8IBdAAIAACjIgFBoIACAAICXkLIB/AAIAAF8gAnuD8IAAl8IDjAAIAABTIh8AAIAAA7IBzAAIAABSIhzAAIAABIIB8AAIAABUgAtGD8IAAl8ID6AAIAABTIiTAAIAAA5IAPAAQBQAAApAdIAAAAQAqAdAAA6IAAAAQAAA8gpAgIAAAAQgpAghNAAIAAAAgArfCtIAOAAQAhAAAOgLIAAAAQANgLAAgUIAAAAQAAgVgOgKIAAAAQgPgKgfAAIAAAAIgOAAgAvgD8IgThHIh7AAIgUBHIhxAAIB9l9ICIAAIB+F9gAwIBgIgRg+IgNg1IgMgwIgJAsIgeB3IBRAAgAXdB2IgOj2IBxAAIgOD2gAhui2QgfgZgDgzIAAAAIBUAAQACAaAJALIAAAAQALAMAVAAIAAAAQAmAAAEgxIAAAAIBWAAQgLBkh1AAIAAAAQg+AAgfgYg");
	mask.setTransform(164.1,33.5);

	// Слой 2
	this.instance = new lib.Символ33();
	this.instance.parent = this;
	this.instance.setTransform(156.9,63.6,1,1,0,0,0,184.2,94.6);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1 - копия
	this.instance_1 = new lib.Символ32();
	this.instance_1.parent = this;
	this.instance_1.setTransform(164,38.1,1,1,0,0,0,164,38.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ31, new cjs.Rectangle(0,0,328,76.1), null);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ26();
	this.instance.parent = this;
	this.instance.setTransform(9.5,9.5,0.586,0.586,0,0,0,29.6,29.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:29.3,regY:29.3,scaleX:0.8,scaleY:0.8,x:9.4,y:9.4},4).wait(1).to({regX:29.6,regY:29.6,scaleX:0.32,scaleY:0.32,x:9.5,y:9.5},0).to({scaleX:0.53,scaleY:0.53},4).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ26();
	this.instance_1.parent = this;
	this.instance_1.setTransform(9.5,9.5,0.321,0.321,0,0,0,29.6,29.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:29.3,regY:29.3,scaleX:0.8,scaleY:0.8,x:9.4,y:9.4,alpha:0},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.7,-8.7,36.4,36.4);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ28();
	this.instance.parent = this;
	this.instance.setTransform(29.6,29.6,1,1,0,0,0,9.5,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ26();
	this.instance_1.parent = this;
	this.instance_1.setTransform(29.6,29.6,1,1,0,0,0,29.6,29.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(6,6,6,0.098)").s().p("AjQDRQhXhXABh6QgBh6BXhWQBWhWB6gBQB7ABBWBWQBXBWgBB6QABB6hXBXQhWBWh7ABQh6gBhWhWg");
	this.shape.setTransform(29.3,29.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ27, new cjs.Rectangle(-1.5,-1.5,62.1,62.1), null);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия: 2 - копия: 2 - копия: 2
	this.instance = new lib.Символ25();
	this.instance.parent = this;
	this.instance.setTransform(264,-26.2,0.374,0.374,0,0,0,23.9,23.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(18).to({_off:false},0).to({scaleX:1,scaleY:1,x:263.9,alpha:1},2).to({_off:true},1).wait(21));

	// Слой 1 - копия: 2 - копия: 2 - копия
	this.instance_1 = new lib.Символ25();
	this.instance_1.parent = this;
	this.instance_1.setTransform(394,-16.2,0.374,0.374,0,0,0,23.9,23.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(39).to({_off:false},0).to({scaleX:1,scaleY:1,x:393.9,alpha:1},2).wait(1));

	// Слой 1 - копия: 2 - копия: 2
	this.instance_2 = new lib.Символ25();
	this.instance_2.parent = this;
	this.instance_2.setTransform(504,23.8,0.374,0.374,0,0,0,23.9,23.8);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(23).to({_off:false},0).to({scaleX:1,scaleY:1,x:503.9,alpha:1},2).to({_off:true},1).wait(16));

	// Слой 1 - копия: 2 - копия
	this.instance_3 = new lib.Символ25();
	this.instance_3.parent = this;
	this.instance_3.setTransform(94,-26.2,0.374,0.374,0,0,0,23.9,23.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(8).to({_off:false},0).to({scaleX:1,scaleY:1,x:93.9,alpha:1},2).to({_off:true},1).wait(31));

	// Слой 1 - копия: 2
	this.instance_4 = new lib.Символ25();
	this.instance_4.parent = this;
	this.instance_4.setTransform(324,23.8,0.374,0.374,0,0,0,23.9,23.8);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(30).to({_off:false},0).to({scaleX:1,scaleY:1,x:323.9,alpha:1},2).to({_off:true},1).wait(9));

	// Слой 1 - копия
	this.instance_5 = new lib.Символ25();
	this.instance_5.parent = this;
	this.instance_5.setTransform(174,3.8,0.374,0.374,0,0,0,23.9,23.8);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(14).to({_off:false},0).to({scaleX:1,scaleY:1,x:173.9,alpha:1},2).to({_off:true},1).wait(25));

	// Слой 1
	this.instance_6 = new lib.Символ25();
	this.instance_6.parent = this;
	this.instance_6.setTransform(24,23.8,0.374,0.374,0,0,0,23.9,23.8);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleX:1,scaleY:1,x:23.9,alpha:1},2).to({_off:true},1).wait(39));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(15.1,14.9,17.9,17.8);


(lib.Символ21 = function(mode,startPosition,loop) {
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

	// Слой 5
	this.instance = new lib.Символ38();
	this.instance.parent = this;
	this.instance.setTransform(223,114.5,1,1,0,0,0,60,59.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},4).to({alpha:0},5).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ37();
	this.instance_1.parent = this;
	this.instance_1.setTransform(345.5,180,1,1,0,0,0,345.5,180);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},4).to({alpha:0},5).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ36();
	this.instance_2.parent = this;
	this.instance_2.setTransform(345.5,180,1,1,0,0,0,345.5,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,691,360);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.parent = this;
	this.instance.setTransform(5,3,1,1,0,0,0,5,3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(0,0,10,6), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ4();
	this.instance.parent = this;
	this.instance.setTransform(26.5,48.5,1,1,0,0,0,26.5,48.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(0,0,53,97), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.parent = this;
	this.instance.setTransform(17.5,50,1,1,0,0,0,17.5,50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(0,0,35,100), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// g2.png
	this.instance = new lib.Символ5();
	this.instance.parent = this;
	this.instance.setTransform(88.1,151.5,1,1,0,0,0,17.5,50);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:17.6,rotation:2.8,x:93.9,y:153.2},9,cjs.Ease.get(-1)).to({rotation:6.3,x:100.2,y:155},10,cjs.Ease.get(1)).to({rotation:3,x:94.1,y:153.3},10,cjs.Ease.get(-1)).to({regX:17.5,rotation:0,x:88.1,y:151.5},10,cjs.Ease.get(1)).to({regX:17.6,rotation:6.3,x:100.2,y:155},3).to({regX:17.5,rotation:0,x:88.1,y:151.5},7,cjs.Ease.get(-1)).wait(1));

	// Слой 10 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("ACMSeIAAAAIAAAAQlRAAgijFIAAAAIgBgEIAAAAIAAAAIAAAAIAAgCIAAAAIgBgFIAAAAIAAgBIAAAAQg7kxkwAAIAAAAIAAAAIAAAAIgBAAIAAAAQgxAAg4AIIAAAAIgBAAIAAAAIHXEvInYkvIgDgCIA11kIAAnbIUlANIALJdIAAABIACAFIAgZ3QlcBUjbAAIAAAAIgBAAIAAAAIAAAAgAjoPTgAjuPSIAGABg");
	var mask_graphics_1 = new cjs.Graphics().p("ACMSeIAAAAIAAAAQlSAAgijHIAAAAIAAgCIAAAAIAAAAIAAAAIAAgCIAAAAIgBgFIAAAAIAAgBIAAAAQg7kxkwAAIAAAAIAAAAIAAAAIAAAAIAAAAQgyAAg4AIIAAAAIgBAAIAAAAIHXEvInYkvIgDgCIA11kIAAnbIUlANIALJdIAAABIACAFIAgZ3QlcBUjbAAIAAAAIgBAAIAAAAIAAAAgAjoPTgAjuPSIAGABg");
	var mask_graphics_2 = new cjs.Graphics().p("ACMSeIAAAAIAAAAQlWAAgejLIAAAAIgBgFIAAAAIAAgBIAAAAQg7kxkwAAIAAAAIAAAAIAAAAIgBAAIAAAAQgxAAg4AIIAAAAIgBAAIAAAAIHXEvInYkvIgDgCIA11kIAAnbIUlANIALJdIAAABIACAFIAgZ3QlcBUjbAAIAAAAIgBAAIAAAAIAAAAgAjoPTgAjuPSIAGABg");
	var mask_graphics_3 = new cjs.Graphics().p("ACMSeIAAAAIAAAAQlRAAgijFIAAAAIgBgEIAAAAIAAAAIAAAAIAAgCIAAAAIgBgFIAAAAIAAgBIAAAAQg7kxkwAAIAAAAIAAAAIAAAAIgBAAIAAAAQgvAAg2AHIAAAAIgCABIAAAAIgBAAIAAAAIgCAAIAAAAIHXEvInYkvIgDgCIA11kIAAnbIUlANIALJdIAAABIACAFIAgZ3IgSAEIAAAAIgEABIAAAAIgBABIAAAAIgDAAIAAAAIgEABIAAAAIAAAAIAAAAQlHBNjSAAIAAAAIgBAAIAAAAIAAAAgAjoPTgAjuPSIAGABg");
	var mask_graphics_4 = new cjs.Graphics().p("ACMSeIAAAAIAAAAQlWAAgejLIAAAAIgBgFIAAAAIAAgBIAAAAQg7kxkwAAIAAAAIAAAAIAAAAIAAAAIAAAAQgyAAg4AIIAAAAIgBAAIAAAAIHXEvInYkvIgDgCIA11kIAAnbIUlANIALJdIAAABIACAFIAgZ3IgSAEIAAAAIgEABIAAAAIgBABIAAAAIgDAAIAAAAIgEABIAAAAIAAAAIAAAAQlHBNjSAAIAAAAIgBAAIAAAAIAAAAgAjoPTgAjuPSIAGABg");
	var mask_graphics_5 = new cjs.Graphics().p("ACMSeIAAAAIAAAAQlSAAgijHIAAAAIAAgCIAAAAIAAAAIAAAAIAAgCIAAAAIgBgFIAAAAIAAgBIAAAAQg7kxkwAAIAAAAIAAAAIAAAAIAAAAIAAAAQgxAAg2AHIAAAAIgBABIAAAAIgCAAIAAAAIgBAAIAAAAIHXEvInYkvIgDgCIA11kIAAnbIUlANIALJdIAAABIACAFIAgZ3QlcBUjbAAIAAAAIgBAAIAAAAIAAAAgAjoPTgAjuPSIAGABg");
	var mask_graphics_6 = new cjs.Graphics().p("ACMSeIAAAAIAAAAQlSAAgijHIAAAAIAAgCIAAAAIAAAAIAAAAIAAgCIAAAAIgBgFIAAAAIAAgBIAAAAQg7kxkwAAIAAAAIAAAAIAAAAIgBAAIAAAAQgvAAg2AHIAAAAIgCABIAAAAIgBAAIAAAAIgCAAIAAAAIHXEvInYkvIgDgCIA11kIAAnbIUlANIALJdIAAABIACAFIAgZ3QlcBUjbAAIAAAAIgBAAIAAAAIAAAAgAjoPTgAjuPSIAGABg");
	var mask_graphics_7 = new cjs.Graphics().p("ACMSeIAAAAIAAAAQlWAAgejLIAAAAIgBgFIAAAAIAAgBIAAAAQg7kxkwAAIAAAAIAAAAIAAAAIAAAAIAAAAQgyAAg4AIIAAAAIgBAAIAAAAIHXEvInYkvIgDgCIA11kIAAnbIUlANIALJdIAAABIACAFIAgZ3QlcBUjbAAIAAAAIgBAAIAAAAIAAAAgAjoPTgAjuPSIAGABg");
	var mask_graphics_8 = new cjs.Graphics().p("ACMSeIAAAAIAAAAQlSAAgijHIAAAAIAAgCIAAAAIAAAAIAAAAIAAgCIAAAAIgBgFIAAAAIAAgBIAAAAQg7kxkwAAIAAAAIAAAAIAAAAIAAAAIAAAAQgyAAg4AIIAAAAIgBAAIAAAAIHXEvInYkvIgDgCIA11kIAAnbIUlANIALJdIAAABIACAFIAgZ3QlcBUjbAAIAAAAIgBAAIAAAAIAAAAgAjoPTgAjuPSIAGABg");
	var mask_graphics_9 = new cjs.Graphics().p("ACMSeIAAAAIAAAAQlSAAgijHIAAAAIAAgCIAAAAIAAAAIAAAAIAAgCIAAAAIgBgFIAAAAIAAgBIAAAAQg7kxkwAAIAAAAIAAAAIAAAAIgBAAIAAAAQgvAAg2AHIAAAAIgCABIAAAAIgBAAIAAAAIgCAAIAAAAIHXEvInYkvIgDgCIA11kIAAnbIUlANIALJdIAAABIACAFIAgZ3QlcBUjbAAIAAAAIgBAAIAAAAIAAAAgAjoPTgAjuPSIAGABg");
	var mask_graphics_10 = new cjs.Graphics().p("ACMSeIAAAAIAAAAQlSAAgijHIAAAAIAAgCIAAAAIAAAAIAAAAIAAgCIAAAAIgBgFIAAAAIAAgBIAAAAQg7kxkwAAIAAAAIAAAAIAAAAIAAAAIAAAAQgxAAg2AHIAAAAIgBABIAAAAIgCAAIAAAAIgBAAIAAAAIHXEvInYkvIgDgCIA11kIAAnbIUlANIALJdIAAABIACAFIAgZ3QlcBUjbAAIAAAAIgBAAIAAAAIAAAAgAjoPTgAjuPSIAGABg");
	var mask_graphics_11 = new cjs.Graphics().p("ACMSeIAAAAIAAAAQlSAAgijHIAAAAIAAgCIAAAAIAAAAIAAAAIAAgCIAAAAIgBgFIAAAAIAAgBIAAAAQg7kxkwAAIAAAAIAAAAIAAAAIgBAAIAAAAQgvAAg2AHIAAAAIgCABIAAAAIgBAAIAAAAIgCAAIAAAAIHXEvInYkvIgDgCIA11kIAAnbIUlANIALJdIAAABIACAFIAgZ3QlcBUjbAAIAAAAIgBAAIAAAAIAAAAgAjoPTgAjuPSIAGABg");
	var mask_graphics_12 = new cjs.Graphics().p("ACMSeIAAAAIAAAAQlRAAgijFIAAAAIgBgEIAAAAIAAAAIAAAAIAAgCIAAAAIgBgFIAAAAIAAgBIAAAAQg7kxkwAAIAAAAIAAAAIAAAAIAAAAIAAAAQgyAAg4AIIAAAAIgBAAIAAAAIHXEvInYkvIgDgCIA11kIAAnbIUlANIALJdIAAABIACAFIAgZ3IgSAEIAAAAIgEABIAAAAIgBABIAAAAIgDAAIAAAAIgEABIAAAAIAAAAIAAAAQlHBNjSAAIAAAAIgBAAIAAAAIAAAAgAjoPTgAjuPSIAGABg");
	var mask_graphics_13 = new cjs.Graphics().p("ACMSeIAAAAIAAAAQlSAAgijHIAAAAIAAgCIAAAAIAAAAIAAAAIAAgCIAAAAIgBgFIAAAAIAAgBIAAAAQg7kxkwAAIAAAAIAAAAIAAAAIAAAAIAAAAQgxAAg2AHIAAAAIgBABIAAAAIgCAAIAAAAIgBAAIAAAAIHXEvInYkvIgDgCIA11kIAAnbIUlANIALJdIAAABIACAFIAgZ3QlcBUjbAAIAAAAIgBAAIAAAAIAAAAgAjoPTgAjuPSIAGABg");
	var mask_graphics_14 = new cjs.Graphics().p("ACMSeIAAAAIAAAAQlWAAgejLIAAAAIgBgFIAAAAIAAgBIAAAAQg7kxkwAAIAAAAIAAAAIAAAAIAAAAIAAAAQgyAAg4AIIAAAAIgBAAIAAAAIHXEvInYkvIgDgCIA11kIAAnbIUlANIALJdIAAABIACAFIAgZ3QlcBUjbAAIAAAAIgBAAIAAAAIAAAAgAjoPTgAjuPSIAGABg");
	var mask_graphics_15 = new cjs.Graphics().p("ACMSeIAAAAIAAAAQlWAAgejLIAAAAIgBgFIAAAAIAAgBIAAAAQg7kxkwAAIAAAAIAAAAIAAAAIAAAAIAAAAQgyAAg4AIIAAAAIgBAAIAAAAIHXEvInYkvIgDgCIA11kIAAnbIUlANIALJdIAAABIACAFIAgZ3QlcBUjbAAIAAAAIgBAAIAAAAIAAAAgAjoPTgAjuPSIAGABg");
	var mask_graphics_16 = new cjs.Graphics().p("ACMSeIAAAAIAAAAQlSAAgijHIAAAAIAAgCIAAAAIAAAAIAAAAIAAgCIAAAAIgBgFIAAAAIAAgBIAAAAQg7kxkwAAIAAAAIAAAAIAAAAIAAAAIAAAAQgxAAg2AHIAAAAIgBABIAAAAIgCAAIAAAAIgBAAIAAAAIHXEvInYkvIgDgCIA11kIAAnbIUlANIALJdIAAABIACAFIAgZ3QlcBUjbAAIAAAAIgBAAIAAAAIAAAAgAjoPTgAjuPSIAGABg");
	var mask_graphics_17 = new cjs.Graphics().p("ACMSeIAAAAIAAAAQlRAAgijFIAAAAIgBgEIAAAAIAAAAIAAAAIAAgCIAAAAIgBgFIAAAAIAAgBIAAAAQg7kxkwAAIAAAAIAAAAIAAAAIAAAAIAAAAQgyAAg4AIIAAAAIgBAAIAAAAIHXEvInYkvIgDgCIA11kIAAnbIUlANIALJdIAAABIACAFIAgZ3IgSAEIAAAAIgEABIAAAAIgBABIAAAAIgDAAIAAAAIgEABIAAAAIAAAAIAAAAQlHBNjSAAIAAAAIgBAAIAAAAIAAAAgAjoPTgAjuPSIAGABg");
	var mask_graphics_18 = new cjs.Graphics().p("ACMSeIAAAAIAAAAQlSAAgijHIAAAAIAAgCIAAAAIAAAAIAAAAIAAgCIAAAAIgBgFIAAAAIAAgBIAAAAQg7kxkwAAIAAAAIAAAAIAAAAIgBAAIAAAAQgvAAg2AHIAAAAIgCABIAAAAIgBAAIAAAAIgCAAIAAAAIHXEvInYkvIgDgCIA11kIAAnbIUlANIALJdIAAABIACAFIAgZ3QlcBUjbAAIAAAAIgBAAIAAAAIAAAAgAjoPTgAjuPSIAGABg");
	var mask_graphics_19 = new cjs.Graphics().p("ACMSeIAAAAIAAAAQlSAAgijHIAAAAIAAgCIAAAAIAAAAIAAAAIAAgCIAAAAIgBgFIAAAAIAAgBIAAAAQg7kxkwAAIAAAAIAAAAIAAAAIAAAAIAAAAQgxAAg2AHIAAAAIgBABIAAAAIgCAAIAAAAIgBAAIAAAAIHXEvInYkvIgDgCIA11kIAAnbIUlANIALJdIAAABIACAFIAgZ3QlcBUjbAAIAAAAIgBAAIAAAAIAAAAgAjoPTgAjuPSIAGABg");
	var mask_graphics_20 = new cjs.Graphics().p("ACMSeIAAAAIAAAAQlSAAgijHIAAAAIAAgCIAAAAIAAAAIAAAAIAAgCIAAAAIgBgCIAAAAQg5k1kyAAIAAAAIAAAAIAAAAIgBAAIAAAAQgwAAg2AHIAAAAIgBABIAAAAIgCAAIAAAAIgBAAIAAAAIHXEvInYkvIgDgCIA11kIAAnbIUlANIALJdIAAABIACAFIAgZ3QlcBUjbAAIAAAAIgBAAIAAAAIAAAAgAjoPTgAjuPSIAGABg");
	var mask_graphics_21 = new cjs.Graphics().p("ACMSeIAAAAIAAAAQlSAAgijHIAAAAIAAgCIAAAAIAAAAIAAAAIAAgCIAAAAIgBgCIAAAAQg5k1kyAAIAAAAIAAAAIAAAAIAAAAIAAAAQgyAAg4AIIAAAAIgBAAIAAAAIHXEvInYkvIgDgCIA11kIAAnbIUlANIALJdIAAABIACAFIAgZ3QlcBUjbAAIAAAAIgBAAIAAAAIAAAAgAjoPTgAjuPSIAGABg");
	var mask_graphics_22 = new cjs.Graphics().p("ACMSeIAAAAIAAAAQlSAAgijHIAAAAIAAgCIAAAAIAAAAIAAAAIAAgCIAAAAIgBgFIAAAAIAAgBIAAAAQg7kxkwAAIAAAAIAAAAIAAAAIAAAAIAAAAQgxAAg2AHIAAAAIgBABIAAAAIgCAAIAAAAIgBAAIAAAAIHXEvInYkvIgDgCIA11kIAAnbIUlANIALJdIAAABIACAFIAgZ3QlcBUjbAAIAAAAIgBAAIAAAAIAAAAgAjoPTgAjuPSIAGABg");
	var mask_graphics_23 = new cjs.Graphics().p("ACMSeIAAAAIAAAAQlSAAgijHIAAAAIAAgCIAAAAIAAAAIAAAAIAAgCIAAAAIgBgCIAAAAQg5k1kyAAIAAAAIAAAAIAAAAIgBAAIAAAAQgvAAg2AHIAAAAIgCABIAAAAIgBAAIAAAAIgCAAIAAAAIHXEvInYkvIgDgCIA11kIAAnbIUlANIALJdIAAABIACAFIAgZ3QlcBUjbAAIAAAAIgBAAIAAAAIAAAAgAjoPTgAjuPSIAGABg");
	var mask_graphics_24 = new cjs.Graphics().p("ACMSeIAAAAIAAAAQlSAAgijHIAAAAIAAgCIAAAAIAAAAIAAAAIAAgCIAAAAIgBgCIAAAAQg5k1kyAAIAAAAIAAAAIAAAAIgBAAIAAAAQgvAAg2AHIAAAAIgCABIAAAAIgBAAIAAAAIgCAAIAAAAIHXEvInYkvIgDgCIA11kIAAnbIUlANIALJdIAAABIACAFIAgZ3QlcBUjbAAIAAAAIgBAAIAAAAIAAAAgAjoPTgAjuPSIAGABg");
	var mask_graphics_25 = new cjs.Graphics().p("ACMSeIAAAAIAAAAQlSAAgijHIAAAAIAAgCIAAAAIAAAAIAAAAIAAgCIAAAAIgBgFIAAAAIAAgBIAAAAQg7kxkwAAIAAAAIAAAAIAAAAIAAAAIAAAAQgxAAg2AHIAAAAIgBABIAAAAIgCAAIAAAAIgBAAIAAAAIHXEvInYkvIgDgCIA11kIAAnbIUlANIALJdIAAABIACAFIAgZ3QlcBUjbAAIAAAAIgBAAIAAAAIAAAAgAjoPTgAjuPSIAGABg");
	var mask_graphics_26 = new cjs.Graphics().p("ACMSeIAAAAIAAAAQlSAAgijHIAAAAIAAgCIAAAAIAAAAIAAAAIAAgCIAAAAIgBgCIAAAAQg5k1kyAAIAAAAIAAAAIAAAAIAAAAIAAAAQgyAAg4AIIAAAAIgBAAIAAAAIHXEvInYkvIgDgCIA11kIAAnbIUlANIALJdIAAABIACAFIAgZ3QlcBUjbAAIAAAAIgBAAIAAAAIAAAAgAjoPTgAjuPSIAGABg");
	var mask_graphics_27 = new cjs.Graphics().p("ACMSeIAAAAIAAAAQlSAAgijHIAAAAIAAgCIAAAAIAAAAIAAAAIAAgCIAAAAIgBgCIAAAAQg5k1kyAAIAAAAIAAAAIAAAAIgBAAIAAAAQgwAAg2AHIAAAAIgBABIAAAAIgCAAIAAAAIgBAAIAAAAIHXEvInYkvIgDgCIA11kIAAnbIUlANIALJdIAAABIACAFIAgZ3QlcBUjbAAIAAAAIgBAAIAAAAIAAAAgAjoPTgAjuPSIAGABg");
	var mask_graphics_28 = new cjs.Graphics().p("ACMSeIAAAAIAAAAQlSAAgijHIAAAAIAAgCIAAAAIAAAAIAAAAIAAgCIAAAAIgBgFIAAAAIAAgBIAAAAQg7kxkwAAIAAAAIAAAAIAAAAIAAAAIAAAAQgxAAg2AHIAAAAIgBABIAAAAIgCAAIAAAAIgBAAIAAAAIHXEvInYkvIgDgCIA11kIAAnbIUlANIALJdIAAABIACAFIAgZ3QlcBUjbAAIAAAAIgBAAIAAAAIAAAAgAjoPTgAjuPSIAGABg");
	var mask_graphics_29 = new cjs.Graphics().p("ACMSeIAAAAIAAAAQlSAAgijHIAAAAIAAgCIAAAAIAAAAIAAAAIAAgCIAAAAIgBgCIAAAAQg5k1kyAAIAAAAIAAAAIAAAAIgBAAIAAAAQgwAAg2AHIAAAAIgBABIAAAAIgCAAIAAAAIgBAAIAAAAIHXEvInYkvIgDgCIA11kIAAnbIUlANIALJdIAAABIACAFIAgZ3QlcBUjbAAIAAAAIgBAAIAAAAIAAAAgAjoPTgAjuPSIAGABg");
	var mask_graphics_30 = new cjs.Graphics().p("ACMSeIAAAAIAAAAQlRAAgijFIAAAAIgBgEIAAAAIAAAAIAAAAIAAgCIAAAAIgBgFIAAAAIAAgBIAAAAQg7kxkwAAIAAAAIAAAAIAAAAIgBAAIAAAAQgxAAg4AIIAAAAIgBAAIAAAAIHXEvInYkvIgDgCIA11kIAAnbIUlANIALJdIAAABIACAFIAgZ3QlcBUjbAAIAAAAIgBAAIAAAAIAAAAgAjoPTgAjuPSIAGABg");
	var mask_graphics_31 = new cjs.Graphics().p("ACMSeIAAAAIAAAAQlSAAgijHIAAAAIAAgCIAAAAIAAAAIAAAAIAAgCIAAAAIgBgCIAAAAQg5k1kyAAIAAAAIAAAAIAAAAIgBAAIAAAAQgwAAg2AHIAAAAIgBABIAAAAIgCAAIAAAAIgBAAIAAAAIHXEvInYkvIgDgCIA11kIAAnbIUlANIALJdIAAABIACAFIAgZ3QlcBUjbAAIAAAAIgBAAIAAAAIAAAAgAjoPTgAjuPSIAGABg");
	var mask_graphics_32 = new cjs.Graphics().p("ACMSeIAAAAIAAAAQlSAAgijHIAAAAIAAgCIAAAAIAAAAIAAAAIAAgCIAAAAIgBgCIAAAAQg5k1kyAAIAAAAIAAAAIAAAAIgBAAIAAAAQgvAAg2AHIAAAAIgCABIAAAAIgBAAIAAAAIgCAAIAAAAIHXEvInYkvIgDgCIA11kIAAnbIUlANIALJdIAAABIACAFIAgZ3QlcBUjbAAIAAAAIgBAAIAAAAIAAAAgAjoPTgAjuPSIAGABg");
	var mask_graphics_33 = new cjs.Graphics().p("ACMSeIAAAAIAAAAQlRAAgijFIAAAAIgBgEIAAAAIAAAAIAAAAIAAgCIAAAAIgBgFIAAAAIAAgBIAAAAQg7kxkwAAIAAAAIAAAAIAAAAIgBAAIAAAAQgxAAg4AIIAAAAIgBAAIAAAAIHXEvInYkvIgDgCIA11kIAAnbIUlANIALJdIAAABIACAFIAgZ3QlcBUjbAAIAAAAIgBAAIAAAAIAAAAgAjoPTgAjuPSIAGABg");
	var mask_graphics_34 = new cjs.Graphics().p("ACMSeIAAAAIAAAAQlSAAgijHIAAAAIAAgCIAAAAIAAAAIAAAAIAAgCIAAAAIgBgCIAAAAQg5k1kyAAIAAAAIAAAAIAAAAIAAAAIAAAAQgyAAg4AIIAAAAIgBAAIAAAAIHXEvInYkvIgDgCIA11kIAAnbIUlANIALJdIAAABIACAFIAgZ3QlcBUjbAAIAAAAIgBAAIAAAAIAAAAgAjoPTgAjuPSIAGABg");
	var mask_graphics_35 = new cjs.Graphics().p("ACMSeIAAAAIAAAAQlSAAgijHIAAAAIAAgCIAAAAIAAAAIAAAAIAAgCIAAAAIgBgCIAAAAQg5k1kyAAIAAAAIAAAAIAAAAIAAAAIAAAAQgyAAg4AIIAAAAIgBAAIAAAAIHXEvInYkvIgDgCIA11kIAAnbIUlANIALJdIAAABIACAFIAgZ3QlcBUjbAAIAAAAIgBAAIAAAAIAAAAgAjoPTgAjuPSIAGABg");
	var mask_graphics_36 = new cjs.Graphics().p("ACMSeIAAAAIAAAAQlRAAgijFIAAAAIgBgEIAAAAIAAAAIAAAAIAAgCIAAAAIgBgFIAAAAIAAgBIAAAAQg7kxkwAAIAAAAIAAAAIAAAAIgBAAIAAAAQgxAAg4AIIAAAAIgBAAIAAAAIHXEvInYkvIgDgCIA11kIAAnbIUlANIALJdIAAABIACAFIAgZ3QlcBUjbAAIAAAAIgBAAIAAAAIAAAAgAjoPTgAjuPSIAGABg");
	var mask_graphics_37 = new cjs.Graphics().p("ACMSeIAAAAIAAAAQlSAAgijHIAAAAIAAgCIAAAAIAAAAIAAAAIAAgCIAAAAIgBgCIAAAAQg5k1kyAAIAAAAIAAAAIAAAAIgBAAIAAAAQgvAAg2AHIAAAAIgCABIAAAAIgBAAIAAAAIgCAAIAAAAIHXEvInYkvIgDgCIA11kIAAnbIUlANIALJdIAAABIACAFIAgZ3QlcBUjbAAIAAAAIgBAAIAAAAIAAAAgAjoPTgAjuPSIAGABg");
	var mask_graphics_38 = new cjs.Graphics().p("ACMSeIAAAAIAAAAQlSAAgijHIAAAAIAAgCIAAAAIAAAAIAAAAIAAgCIAAAAIgBgCIAAAAQg5k1kyAAIAAAAIAAAAIAAAAIgBAAIAAAAQgwAAg2AHIAAAAIgBABIAAAAIgCAAIAAAAIgBAAIAAAAIHXEvInYkvIgDgCIA11kIAAnbIUlANIALJdIAAABIACAFIAgZ3QlcBUjbAAIAAAAIgBAAIAAAAIAAAAgAjoPTgAjuPSIAGABg");
	var mask_graphics_39 = new cjs.Graphics().p("ACMSeIAAAAIAAAAQlRAAgijFIAAAAIgBgEIAAAAIAAAAIAAAAIAAgCIAAAAIgBgFIAAAAIAAgBIAAAAQg7kxkwAAIAAAAIAAAAIAAAAIgBAAIAAAAQgxAAg4AIIAAAAIgBAAIAAAAIHXEvInYkvIgDgCIA11kIAAnbIUlANIALJdIAAABIACAFIAgZ3QlcBUjbAAIAAAAIgBAAIAAAAIAAAAgAjoPTgAjuPSIAGABg");
	var mask_graphics_40 = new cjs.Graphics().p("ACMSeIAAAAIAAAAQlWAAgejLIAAAAIgBgFIAAAAIAAgBIAAAAQg7kxkwAAIAAAAIAAAAIAAAAIgBAAIAAAAQgvAAg2AHIAAAAIgCABIAAAAIgBAAIAAAAIgCAAIAAAAIHXEvInYkvIgDgCIA11kIAAnbIUlANIALJdIAAABIACAFIAgZ3QlcBUjbAAIAAAAIgBAAIAAAAIAAAAgAjoPTgAjuPSIAGABg");
	var mask_graphics_41 = new cjs.Graphics().p("ACMSeIAAAAIAAAAQlSAAgijHIAAAAIAAgCIAAAAIAAAAIAAAAIAAgCIAAAAIgBgFIAAAAIAAgBIAAAAQg7kxkwAAIAAAAIAAAAIAAAAIAAAAIAAAAQgyAAg4AIIAAAAIgBAAIAAAAIHXEvInYkvIgDgCIA11kIAAnbIUlANIALJdIAAABIACAFIAgZ3QlcBUjbAAIAAAAIgBAAIAAAAIAAAAgAjoPTgAjuPSIAGABg");
	var mask_graphics_42 = new cjs.Graphics().p("ACMSeIAAAAIAAAAQlSAAgijHIAAAAIAAgCIAAAAIAAAAIAAAAIAAgCIAAAAIgBgFIAAAAIAAgBIAAAAQg7kxkwAAIAAAAIAAAAIAAAAIAAAAIAAAAQgxAAg2AHIAAAAIgBABIAAAAIgCAAIAAAAIgBAAIAAAAIHXEvInYkvIgDgCIA11kIAAnbIUlANIALJdIAAABIACAFIAgZ3QlcBUjbAAIAAAAIgBAAIAAAAIAAAAgAjoPTgAjuPSIAGABg");
	var mask_graphics_43 = new cjs.Graphics().p("ACMSeIAAAAIAAAAQlSAAgijHIAAAAIAAgCIAAAAIAAAAIAAAAIAAgCIAAAAIgBgFIAAAAIAAgBIAAAAQg7kxkwAAIAAAAIAAAAIAAAAIAAAAIAAAAQgxAAg4AIIAAAAIgCAAIAAAAIHXEvInYkvIgDgCIA11kIAAnbIUlANIALJdIAAABIACAFIAgZ3QlcBUjbAAIAAAAIgBAAIAAAAIAAAAgAjoPTgAjuPSIAGABg");
	var mask_graphics_44 = new cjs.Graphics().p("ACMSeIAAAAIAAAAQlSAAgijHIAAAAIAAgCIAAAAIAAAAIAAAAIAAgCIAAAAIgBgFIAAAAIAAgBIAAAAQg7kxkwAAIAAAAIAAAAIAAAAIAAAAIAAAAQgxAAg2AHIAAAAIgBABIAAAAIgCAAIAAAAIgBAAIAAAAIHXEvInYkvIgDgCIA11kIAAnbIUlANIALJdIAAABIACAFIAgZ3QlcBUjbAAIAAAAIgBAAIAAAAIAAAAgAjoPTgAjuPSIAGABg");
	var mask_graphics_45 = new cjs.Graphics().p("ACMSeIAAAAIAAAAQlSAAgijHIAAAAIAAgCIAAAAIAAAAIAAAAIAAgCIAAAAIgBgCIAAAAQg5k1kyAAIAAAAIAAAAIAAAAIAAAAIAAAAQgyAAg4AIIAAAAIgBAAIAAAAIHXEvInYkvIgDgCIA11kIAAnbIUlANIALJdIAAABIACAFIAgZ3QlcBUjbAAIAAAAIgBAAIAAAAIAAAAgAjoPTgAjuPSIAGABg");
	var mask_graphics_46 = new cjs.Graphics().p("ACMSeIAAAAIAAAAQlSAAgijHIAAAAIAAgCIAAAAIAAAAIAAAAIAAgCIAAAAIgBgFIAAAAIAAgBIAAAAQg7kxkwAAIAAAAIAAAAIAAAAIAAAAIAAAAQgyAAg4AIIAAAAIgBAAIAAAAIHXEvInYkvIgDgCIA11kIAAnbIUlANIALJdIAAABIACAFIAgZ3QlcBUjbAAIAAAAIgBAAIAAAAIAAAAgAjoPTgAjuPSIAGABg");
	var mask_graphics_47 = new cjs.Graphics().p("ACMSeIAAAAIAAAAQlSAAgijHIAAAAIAAgCIAAAAIAAAAIAAAAIAAgCIAAAAIgBgFIAAAAIAAgBIAAAAQg7kxkwAAIAAAAIAAAAIAAAAIgBAAIAAAAQgvAAg2AHIAAAAIgCABIAAAAIgBAAIAAAAIgCAAIAAAAIHXEvInYkvIgDgCIA11kIAAnbIUlANIALJdIAAABIACAFIAgZ3QlcBUjbAAIAAAAIgBAAIAAAAIAAAAgAjoPTgAjuPSIAGABg");
	var mask_graphics_48 = new cjs.Graphics().p("ACMSeIAAAAIAAAAQlQAAgjjFIAAAAIgBgEIAAAAIAAAAIAAAAIAAgCIAAAAIgBgFIAAAAIAAgBIAAAAQg7kxkwAAIAAAAIAAAAIAAAAIgBAAIAAAAQgvAAg2AHIAAAAIgCABIAAAAIgBAAIAAAAIgCAAIAAAAIHXEvInYkvIgDgCIA11kIAAnbIUlANIALJdIAAABIACAFIAgZ3QlcBUjbAAIAAAAIgBAAIAAAAIAAAAgAjoPTgAjuPSIAGABg");
	var mask_graphics_49 = new cjs.Graphics().p("ACMSeIAAAAIAAAAQlRAAgijFIAAAAIgBgEIAAAAIAAAAIAAAAIAAgCIAAAAIgBgFIAAAAIAAgBIAAAAQg7kxkwAAIAAAAIAAAAIAAAAIgBAAIAAAAQgxAAg4AIIAAAAIgBAAIAAAAIHXEvInYkvIgDgCIA11kIAAnbIUlANIALJdIAAABIACAFIAgZ3QlcBUjbAAIAAAAIgBAAIAAAAIAAAAgAjoPTgAjuPSIAGABg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:271.5,y:101.9}).wait(1).to({graphics:mask_graphics_1,x:271.6,y:101.9}).wait(1).to({graphics:mask_graphics_2,x:272,y:101.8}).wait(1).to({graphics:mask_graphics_3,x:272.6,y:101.6}).wait(1).to({graphics:mask_graphics_4,x:273.5,y:101.3}).wait(1).to({graphics:mask_graphics_5,x:274.6,y:100.9}).wait(1).to({graphics:mask_graphics_6,x:275.9,y:100.5}).wait(1).to({graphics:mask_graphics_7,x:277.5,y:99.9}).wait(1).to({graphics:mask_graphics_8,x:279.4,y:99.3}).wait(1).to({graphics:mask_graphics_9,x:281.5,y:98.6}).wait(1).to({graphics:mask_graphics_10,x:283.6,y:97.9}).wait(1).to({graphics:mask_graphics_11,x:285.5,y:97.3}).wait(1).to({graphics:mask_graphics_12,x:287.1,y:96.7}).wait(1).to({graphics:mask_graphics_13,x:288.5,y:96.3}).wait(1).to({graphics:mask_graphics_14,x:289.8,y:95.9}).wait(1).to({graphics:mask_graphics_15,x:290.8,y:95.5}).wait(1).to({graphics:mask_graphics_16,x:291.5,y:95.3}).wait(1).to({graphics:mask_graphics_17,x:292.1,y:95.1}).wait(1).to({graphics:mask_graphics_18,x:292.4,y:95}).wait(1).to({graphics:mask_graphics_19,x:292.5,y:94.9}).wait(1).to({graphics:mask_graphics_20,x:292.4,y:95}).wait(1).to({graphics:mask_graphics_21,x:292.1,y:95.1}).wait(1).to({graphics:mask_graphics_22,x:291.6,y:95.2}).wait(1).to({graphics:mask_graphics_23,x:290.8,y:95.5}).wait(1).to({graphics:mask_graphics_24,x:289.9,y:95.8}).wait(1).to({graphics:mask_graphics_25,x:288.7,y:96.2}).wait(1).to({graphics:mask_graphics_26,x:287.4,y:96.6}).wait(1).to({graphics:mask_graphics_27,x:285.8,y:97.2}).wait(1).to({graphics:mask_graphics_28,x:284,y:97.8}).wait(1).to({graphics:mask_graphics_29,x:282,y:98.4}).wait(1).to({graphics:mask_graphics_30,x:280,y:99.1}).wait(1).to({graphics:mask_graphics_31,x:278.2,y:99.7}).wait(1).to({graphics:mask_graphics_32,x:276.7,y:100.2}).wait(1).to({graphics:mask_graphics_33,x:275.3,y:100.7}).wait(1).to({graphics:mask_graphics_34,x:274.1,y:101.1}).wait(1).to({graphics:mask_graphics_35,x:273.2,y:101.4}).wait(1).to({graphics:mask_graphics_36,x:272.5,y:101.6}).wait(1).to({graphics:mask_graphics_37,x:271.9,y:101.8}).wait(1).to({graphics:mask_graphics_38,x:271.6,y:101.9}).wait(1).to({graphics:mask_graphics_39,x:271.5,y:101.9}).wait(1).to({graphics:mask_graphics_40,x:278.5,y:99.6}).wait(1).to({graphics:mask_graphics_41,x:285.5,y:97.3}).wait(1).to({graphics:mask_graphics_42,x:292.5,y:94.9}).wait(1).to({graphics:mask_graphics_43,x:292.1,y:95.1}).wait(1).to({graphics:mask_graphics_44,x:290.8,y:95.5}).wait(1).to({graphics:mask_graphics_45,x:288.7,y:96.2}).wait(1).to({graphics:mask_graphics_46,x:285.7,y:97.2}).wait(1).to({graphics:mask_graphics_47,x:281.8,y:98.5}).wait(1).to({graphics:mask_graphics_48,x:277.1,y:100.1}).wait(1).to({graphics:mask_graphics_49,x:271.5,y:101.9}).wait(1));

	// g9.png
	this.instance_1 = new lib.Символ6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(260,165.5,1,1,0,0,0,34,33.5);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,rotation:23.3,x:273.9,y:166.3},9,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:49.2,x:289.5,y:167.1},10,cjs.Ease.get(1)).to({regX:34.1,scaleX:1,scaleY:1,rotation:24.6,x:274.9,y:166.4},10,cjs.Ease.get(-1)).to({regX:34,scaleX:1,scaleY:1,rotation:0,x:260,y:165.5},11,cjs.Ease.get(1)).to({rotation:49.2,x:259.5,y:17.1},4,cjs.Ease.get(-1)).to({rotation:0,x:260,y:165.5},5,cjs.Ease.get(-1)).wait(1));

	// g8.png
	this.instance_2 = new lib.Символ7();
	this.instance_2.parent = this;
	this.instance_2.setTransform(337.5,185,1,1,0,0,0,57.5,94);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:5.5,x:347.8,y:188.6},9,cjs.Ease.get(-1)).to({rotation:12,x:359.3,y:192.5},10,cjs.Ease.get(1)).to({regX:57.6,rotation:5.8,x:348.5,y:188.9},10,cjs.Ease.get(-1)).to({regX:57.5,rotation:0,x:337.5,y:185},10,cjs.Ease.get(1)).to({regX:57.6,rotation:-1.8,x:338.2,y:176.8},3).to({regX:57.5,rotation:0,x:337.5,y:185},7,cjs.Ease.get(-1)).wait(1));

	// g7.png
	this.instance_3 = new lib.Символ8();
	this.instance_3.parent = this;
	this.instance_3.setTransform(88.1,243.6,1,1,0,0,0,26.5,48.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:48.6,rotation:1.8,x:89.7,y:244.6},9,cjs.Ease.get(-1)).to({regY:48.5,rotation:4,x:91.4,y:245.6},10,cjs.Ease.get(1)).to({regY:48.6,rotation:1.8,x:89.7,y:244.7},10,cjs.Ease.get(-1)).to({regY:48.5,rotation:0,x:88.1,y:243.6},10,cjs.Ease.get(1)).to({rotation:4,x:91.4,y:245.6},3).to({rotation:0,x:88.1,y:243.6},7,cjs.Ease.get(-1)).wait(1));

	// g6.png
	this.instance_4 = new lib.Символ9();
	this.instance_4.parent = this;
	this.instance_4.setTransform(78,89,1,1,0,0,0,5,3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:83,y:90.9},9,cjs.Ease.get(-1)).to({x:88.5,y:93},10,cjs.Ease.get(1)).to({x:83.3,y:91},10,cjs.Ease.get(-1)).to({x:78,y:89},10,cjs.Ease.get(1)).to({x:88.5,y:93},3).to({x:78,y:89},7,cjs.Ease.get(-1)).wait(1));

	// g5.png
	this.instance_5 = new lib.Символ10();
	this.instance_5.parent = this;
	this.instance_5.setTransform(126,114,1,1,0,0,0,126,114);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:-2.5,x:131.7},9,cjs.Ease.get(-1)).to({rotation:-5.4,x:138.1,y:114.1},10,cjs.Ease.get(1)).to({rotation:-2.6,x:132.1,y:114},10,cjs.Ease.get(-1)).to({rotation:0,x:126},10,cjs.Ease.get(1)).to({rotation:-5.4,x:138.1,y:114.1},3).to({rotation:0,x:126,y:114},7,cjs.Ease.get(-1)).wait(1));

	// g1.png
	this.instance_6 = new lib.Символ11();
	this.instance_6.parent = this;
	this.instance_6.setTransform(246,231.5,1,1,0,0,0,61,47.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regY:47.6,rotation:5.1,x:250.9,y:226.5},9,cjs.Ease.get(-1)).to({regX:61.1,regY:47.5,rotation:11,x:256.3,y:220.8},10,cjs.Ease.get(1)).to({rotation:5.3,x:251.2,y:226.1},10,cjs.Ease.get(-1)).to({regX:61,rotation:0,x:246,y:231.5},10,cjs.Ease.get(1)).to({regX:61.1,rotation:11,x:256.3,y:220.8},3).to({regX:61,rotation:0,x:246,y:231.5},7,cjs.Ease.get(-1)).wait(1));

	// Слой 9
	this.instance_7 = new lib.Символ2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(183.4,280.9,1,1,0,0,0,179.6,17.9);
	this.instance_7.filters = [new cjs.BlurFilter(29, 29, 1)];
	this.instance_7.cache(-2,-2,363,40);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.2,0,426,337);


(lib.Символ44_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance_1 = new lib.Символ43();
	this.instance_1.parent = this;
	this.instance_1.setTransform(21.9,21.9,1,1,0,0,0,21.9,21.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-360},59).to({scaleX:0.68,scaleY:0.68,x:22,y:22},5,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:21.9,y:21.9},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,43.9,43.9);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ31();
	this.instance.parent = this;
	this.instance.setTransform(164,38.1,1,1,0,0,0,164,38.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.07,x:152},9).to({regX:163.9,scaleX:0.95,x:131.4},10).wait(1).to({regX:164,scaleX:1.07,x:152},10).to({scaleX:1,x:164},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.8,-32.5,371.4,192.2);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ27();
	this.instance.parent = this;
	this.instance.setTransform(27.6,27.7,1,1,0,0,0,29.6,29.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[27.6,27.8,24.8,24.6,21.1,19.9,14.7,11.8,10.7,8.2,1.2,-0.4,-14.3,-4.8,-24.3,-7.6,-43.2,-9.8,-58.7,-11.6,-66.6,-12.2,-79.7,-13.3,-90.2,-12.9,-109.9,-12.3,-129.3,-6.7,-137.1,-4.4,-142.5,-1.6,-149.4,1.8,-153.8,6.5,-159.1,12.3,-161.9,21.1,-164.2,28.2,-165,37.9,-165.6,44.6,-165.1,49.5,-164.6,55.8,-162.2,60.5,-158.3,68.3,-147.5,74.9,-129.1,86.1,-102.2,88.9,-85.1,90.7,-53.4,89.2,-45.9,88.9,-42.3,88.4,-36.1,87.6,-31.5,85.8,-27.1,84.1,-19.7,79.3,1.9,65.4,22.3,51.1,30.6,45.4,35,41.8,41.8,36.4,46.3,31.1,50.1,26.7,56.8,17,63,8.6,68.8,4.8,74.6,0.9,82.9,-0.9,89,-2.2,98.3,-2.7,111.6,-3.4,120.6,-1.4,132.6,1.3,138.8,9,141.8,12.5,144.1,18.4,147,25.6,147.8,32.6,148.6,40.2,146.8,47,144.8,54.3,140,59.9,134.9,65.7,128,67.9,124.9,68.9,120.8,69.3,118.3,69.5,113.4,69.5,101.4,69.6,94.8,68.9,84.6,67.9,76.9,64.7,72.9,63.1,68.2,60.3,65.6,58.7,59.9,54.9,50.2,48.3,40.5,41.8,41.3,44,43,46]}},49).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.5,-3.4,62.1,62.1);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ27();
	this.instance.parent = this;
	this.instance.setTransform(30.1,30.1,1,1,0,0,0,29.6,29.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[30,30,30.1,29.9,30.2,29.8,30.6,28.9,29.3,27.8,23.1,21.9,16.8,16,15.3,14.5,14.3,13.9,12.8,12.8,11.4,12.5,10.6,12.4,9.3,12.4,7.8,12.4,7.1,12.3,6.2,12.2,5,11.7,3.7,11.2,3,10.9,0.4,10.1,-4,10.2,-10.1,10.4,-11.3,10.3,-12.5,10.2,-15,10,-17.1,10,-18.3,11,-20.5,12.7,-20.5,17.5,-20.4,21.1,-20.1,24,-19.7,28.3,-18.6,30.3,-16.7,33.8,-11.2,35.8,-9.4,36.4,-8.6,36.9,-7.3,37.8,-6.5,38.1,-6.1,38.3,-3.7,38.6,-2.4,38.8,-0.6,39.4,0.4,39.8,2.5,40.5,5.7,41.5,10.1,41.8,12.7,41.9,17.9,41.8,22.3,41.7,24.5,41.1,26.6,40.5,29.4,38.8,31.9,37.3,34.3,35.9,37,34.5,37.7,33.8,38.3,33.3,38.8,32.5,39.2,32,39.8,31,41.9,27.9,47.2,23.1,49.1,21.3,50.5,20.2,54.6,17.2,60.8,16,66.4,15,69.4,16.9,71.8,18.4,73.4,22.5,76,28.6,76,35.9,76,38.7,74.9,40.3,73.3,41.9,72.9,42.9,72.7,43.3,72.5,44.5,72.3,45.5,71.9,46,71.6,46.4,70.9,46.8,69.9,47.4,69.8,47.4,69.3,47.8,68.5,48.6,67.7,49.5,67.2,49.8,65.9,50.6,64,50.6,59.3,50.9,55,48.4,53.5,47.6,51,45.5,48.3,43.4,47,42.6,45,41.4,42.3,40.6,40.7,40.1,37.7,39.4]}},49).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,62.1,62.1);


(lib.Символ12 = function(mode,startPosition,loop) {
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

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.parent = this;
	this.instance.setTransform(126,114,1,1,0,0,0,126,114);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},4).to({alpha:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.2,-16.7,406.2,334.7);


(lib.Символ40 = function(mode,startPosition,loop) {
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

	// Слой 4 - копия
	this.instance = new lib.Символ41();
	this.instance.parent = this;
	this.instance.setTransform(454.8,250.4,0.676,0.676,0,0,0,74.2,44.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:281.8},4).to({x:454.8},5).wait(1));

	// Слой 4
	this.instance_1 = new lib.Символ41();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-365.2,250.4,0.676,0.676,0,0,0,74.2,44.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-196.2},4).to({x:-365.2},5).wait(1));

	// Слой 3
	this.instance_2 = new lib.Символ43_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(45.2,390.5,1,1,0,0,0,52.2,51.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:278.5},4).to({y:390.5},5).wait(1));

	// Слой 5
	this.instance_3 = new lib.Символ44_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(323.5,269.4,1,1,0,0,0,21.9,21.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:349.4},4).to({y:269.4},5).wait(1));

	// Слой 1
	this.instance_4 = new lib.Символ35();
	this.instance_4.parent = this;
	this.instance_4.setTransform(156.8,63.6,1,1,0,0,0,156.8,63.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:-26.4},4).to({y:63.6},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-415.4,-32.5,920.5,474.6);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		stage.canvas.style.cursor = "none";
		this.kur.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
			this.kur.x = stage.mouseX/window.devicePixelRatio;
			this.kur.y = stage.mouseY/window.devicePixelRatio;
		}
		
		
		this.addEventListener("tick", fl_CustomMouseCursor1.bind(this));
		
		function fl_CustomMouseCursor1() {
		
		this.fon.x = - stage.mouseX / 20;
		this.fon.y = - stage.mouseY / 20;
		}
		
		
		var _this = this;
		
		_this.kur.visible=false;
		_this.kur1.visible=true;
		
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		  function fl_MouseOverHandler_5()
		{
		    _this.girl.gotoAndPlay(1);
			_this.kur.visible=true;
			_this.kur1.visible=false;
			_this.fon.gotoAndPlay(1);
			_this.txt.gotoAndPlay(1);
		}
		
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		  function fl_MouseOutHandler_2()
		{
		    _this.girl.gotoAndPlay(5);
			_this.kur.visible=false;
			_this.kur1.visible=true;
			_this.fon.gotoAndPlay(5);
			_this.txt.gotoAndPlay(5);
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 4
	this.kur1 = new lib.Символ30();
	this.kur1.parent = this;
	this.kur1.setTransform(427.1,147.7,1,1,0,0,0,29.6,29.6);

	this.timeline.addTween(cjs.Tween.get(this.kur1).wait(1));

	// Слой 5
	this.txt = new lib.Символ40();
	this.txt.parent = this;
	this.txt.setTransform(435.5,63.7,1,1,0,0,0,156.8,63.6);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	// Слой 3
	this.kur = new lib.Символ29();
	this.kur.parent = this;
	this.kur.setTransform(-68.5,103.7,1,1,0,0,0,29.6,29.6);

	this.timeline.addTween(cjs.Tween.get(this.kur).wait(1));

	// Слой 2
	this.girl = new lib.Символ12();
	this.girl.parent = this;
	this.girl.setTransform(292.3,141.3,1,1,0,0,0,197.5,141);

	this.timeline.addTween(cjs.Tween.get(this.girl).wait(1));

	// Слой 2
	this.instance = new lib.Символ24();
	this.instance.parent = this;
	this.instance.setTransform(51.9,151.8,1,1,0,0,0,23.9,23.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.fon = new lib.Символ21();
	this.fon.parent = this;
	this.fon.setTransform(2.1,-1.2,1,1,0,0,0,24.1,32.8);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(183.3,118.5,920.5,476.1);
// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/back.jpg?1481041528557", id:"back"},
		{src:"images/back1.jpg?1481041528557", id:"back1"},
		{src:"images/blick.png?1481041528557", id:"blick"},
		{src:"images/g1.png?1481041528557", id:"g1"},
		{src:"images/g2.png?1481041528557", id:"g2"},
		{src:"images/g5.png?1481041528557", id:"g5"},
		{src:"images/g6.png?1481041528557", id:"g6"},
		{src:"images/g7.png?1481041528557", id:"g7"},
		{src:"images/g8.png?1481041528557", id:"g8"},
		{src:"images/g9.png?1481041528557", id:"g9"},
		{src:"images/mish.png?1481041528557", id:"mish"},
		{src:"images/mouse.png?1481041528557", id:"mouse"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;