(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,768,432);


(lib.Fogpng = function() {
	this.initialize(img.Fogpng);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,305);


(lib.justice = function() {
	this.initialize(img.justice);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,347);


(lib.left = function() {
	this.initialize(img.left);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,53);


(lib.Light = function() {
	this.initialize(img.Light);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,638,276);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,246,292);


(lib.right = function() {
	this.initialize(img.right);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,146,58);


(lib.YourText = function() {
	this.initialize(img.YourText);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,569,87);


(lib.Растровоеизображение15 = function() {
	this.initialize(img.Растровоеизображение15);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,226,256);// helper functions:

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


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Fogpng();
	this.instance.parent = this;
	this.instance.setTransform(1638,0);

	this.instance_1 = new lib.Fogpng();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1076,0);

	this.instance_2 = new lib.Fogpng();
	this.instance_2.parent = this;
	this.instance_2.setTransform(508,0);

	this.instance_3 = new lib.Fogpng();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-50,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ49, new cjs.Rectangle(-50,0,2328,305), null);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.YourText();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.805,0.805);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(0,0,457.8,70), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF0030","#FF0000"],[0,1],-6.7,0,6.7,0).s().p("AgKBCQgYgEgQgUQgQgTAAgXQAAgWAQgUQARgTAXgEQAWgEAWANQAVANAIAWQAIAVgIAXQgIAWgVAMQgRAKgRAAIgKgBg");
	this.shape.setTransform(6.7,6.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(0,0,13.4,13.4), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Растровоеизображение15();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.113,0.113);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(0,0,25.5,28.9), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Am6BsIAAitIBJAAQArAAABAsIAAAcQAAAsgsAAIgsAAIAAA5gAmdAVIAsAAQAIAAADgEQAEgDAAgHIAAgcQAAgIgEgEQgDgDgIAAIgsAAgAHnAJIAAhKIAeAAIAABKQAAAIADADQAEAEAHAAQAdgEAPgXIAAg+IAdAAIAAB0IgdAAIAAgNQgXAPgVAAQgsAAAAgsgAqXA1QgrAAAAgsIAAghQAAgsArAAIAeAAQArAAAAAsIAAAhQAAAsgrAAgAqhgjQgEADAAAIIAAAhQAAAPAOAAIAeAAQAHAAAEgEQAEgDgBgIIAAghQABgIgEgDQgEgEgHABIgeAAQgGgBgEAEgAOgAzQgrAAgBgsIAAgcQABgsArAAIBIAAIAAAdIhIAAQgHAAgEADQgEAEABAIIAAAcQAAAOAOAAIBIAAIAAAegAMVAzQgTAAgIgKQgKgJAAgSQAAgjAlAAIAyAAQAAgIgDgEQgEgDgHAAIhEAAIAAgdIBEAAQArAAAAAsIAABIgAMNAOQAAAHAIAAIAyAAIAAgOIgyAAQgIAAAAAHgALEAzIAAgsIgsAAQgsAAAAgrIAAgdIAdAAIAAAdQAAAPAPAAIAsAAIAAgsIAcAAIAAB0gAGMAzQgrAAAAgsIAAgfQAAgsAsAAIAfAAQAsAAAAAsIAAAcIhaAAIAAADQAAAOAOAAIBGAAIAAAegAGBgjQgDADAAAIIA9AAQAAgIgDgDQgFgEgGABIghAAQgGgBgFAEgAEJAzQgtAAABgsIAAgcQgBgsAtAAIBIAAIAAAdIhIAAQgIAAgEADQgDAEAAAIIAAAcQAAAOAPAAIBIAAIAAAegAgrAzIAAh0IAeAAIAAAdIApAAQAtAAgBArQAAAsgrAAgAgNAVIAqAAQAHAAAEgEQADgDABgHQgBgHgDgDQgEgEgHAAIgqAAgAiEAzIAAhXIgrAAIAAgdIB0AAIAAAdIgrAAIAABXgAkKAzQgsAAAAgsIAAgfQAAgsAtAAIAeAAQAsAAABAsIAAAcIhaAAIAAADQAAAOAOAAIBFAAIAAAegAkVgjQgDADAAAIIA8AAQAAgIgEgDQgDgEgHABIggAAQgIgBgDAEgAoSAzIAAhXIgsAAIAAgdIB0AAIAAAdIgrAAIAABXgArvAzIAAhAIgrBAIgshAIAABAIgdAAIAAh0IAdAAIAsBBIArhBIAdAAIAAB0gAu8AzQgrAAgBgsIAAgcQABgsArAAIBJAAIAAAdIhJAAQgHAAgEADQgDAEgBAIIAAAcQAAAOAPAAIBJAAIAAAegAIThPIAAgdIAdAAIAAAdg");
	this.shape.setTransform(100.1,10.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(0,0,200.1,21.7), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Растровоеизображение15();
	this.instance.parent = this;
	this.instance.setTransform(87,15,0.113,0.113);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AuDkKIcHAAQAyAAAAAyIAAGxQAAAygyAAI8HAAQgyAAAAgyIAAmxQAAgyAyAAg");
	this.shape.setTransform(99.9,29.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#00A404","#01D616"],[0,1],0,30.9,0,-30.8).s().p("Au2ElQgyAAAAguIAAntQAAguAyAAIdtAAQAyAAAAAuIAAHtQAAAugyAAg");
	this.shape_1.setTransform(100.1,29.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Слой 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006600").s().p("Au2EnQgyAAAAgyIAAnpQAAgyAyAAIdtAAQAyAAAAAyIAAHpQAAAygyAAg");
	this.shape_2.setTransform(100.1,34.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(0,0,200.2,63.7), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9900").s().p("AhiI+QisgdiFiAQiFiBgjirQgjiqBGirQBHiqCShgQCThfC3AEQC5AECOBlQBrBMBBB2QBCB3AHCDQAHCCg0B8Qg0B9hiBXQhiBYiCAlQhRAXhQAAQgxAAgwgIg");
	this.shape.setTransform(58.4,58.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(0,0,116.8,116.5), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgwWAZUMAAAgynMBgtAAAMAAAAyng");
	this.shape.setTransform(309.5,162);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(0,0,619,324), null);


(lib.Анимация2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(-384,-216);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-384,-216,768,432);


(lib.Анимация1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(-384,-216);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-384,-216,768,432);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ22();
	this.instance.parent = this;
	this.instance.setTransform(228.9,35,1,1,0,0,0,228.9,35);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.04,scaleY:1.04},14,cjs.Ease.get(-1)).to({regX:228.8,scaleX:1.09,scaleY:1.09,x:228.8,y:35.1},15,cjs.Ease.get(1)).to({regY:34.9,scaleX:1.04,scaleY:1.04,x:228.9},15,cjs.Ease.get(-1)).to({regX:228.9,regY:35,scaleX:1,scaleY:1,y:35},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,457.8,70);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ20();
	this.instance.parent = this;
	this.instance.setTransform(6.7,6.7,1,1,0,0,0,6.7,6.7);
	this.instance.compositeOperation = "lighter";
	this.instance.filters = [new cjs.BlurFilter(12, 12, 1)];
	this.instance.cache(-2,-2,17,17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(-6,-6,29,29), null);


(lib.Символ16 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ17();
	this.instance.parent = this;
	this.instance.setTransform(100,10.8,1,1,0,0,0,100,10.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-140.7},9).to({y:10.8},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,200.1,21.7);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AuDkKIcHAAQAyAAAAAyIAAGxQAAAygyAAI8HAAQgyAAAAgyIAAmxQAAgyAyAAg");
	this.shape.setTransform(99.8,29.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(20));

	// Слой 6
	this.instance = new lib.Символ18();
	this.instance.parent = this;
	this.instance.setTransform(100.1,29.6,1,1,0,0,0,12.8,14.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:101.5},4,cjs.Ease.get(-1)).to({x:103.1},5,cjs.Ease.get(1)).to({x:101.6},5,cjs.Ease.get(-1)).to({x:100.1},5,cjs.Ease.get(1)).wait(1));

	// Слой 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FF0030","#FF0000"],[0,1],0,30.2,0,-30.1).s().p("Au1EkQgyAAAAgzIAAnhQAAgzAyAAIdrAAQAyAAAAAzIAAHhQAAAzgyAAg");
	this.shape_1.setTransform(100,29.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(20));

	// Слой 5
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC0000").s().p("Au2EPQgyAAAAgyIAAm5QAAgyAyAAIdtAAQAyAAAAAyIAAG5QAAAygyAAg");
	this.shape_2.setTransform(100.1,36);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,200.2,63.1);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.Символ49();
	this.instance.parent = this;
	this.instance.setTransform(1153,151.5,1,1,0,0,0,1164,152.5);
	this.instance.alpha = 0.711;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-525.9},300).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61,-1,2328,305);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.Символ19();
	this.instance.parent = this;
	this.instance.setTransform(172.4,100.2,1,1,0,0,0,6.7,6.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.586},6,cjs.Ease.get(-1)).to({alpha:0.031},8,cjs.Ease.get(1)).to({alpha:0.484},7,cjs.Ease.get(-1)).to({alpha:1},8,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.justice();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.827,0.827);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

	// Слой 3
	this.instance_2 = new lib.left();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-91,260,0.573,0.573);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(30));

	// Слой 2
	this.instance_3 = new lib.right();
	this.instance_3.parent = this;
	this.instance_3.setTransform(529,261,0.483,0.483);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91,0,690.5,290.4);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.parent = this;
	this.instance.setTransform(79.5,79.1,1.361,1.361,0,0,0,58.4,58.1);
	this.instance.compositeOperation = "lighter";
	this.instance.filters = [new cjs.BlurFilter(47, 47, 1)];
	this.instance.cache(-2,-2,121,121);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(-24,-24,210,210), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.413,0.413);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(101));

	// Слой 2
	this.instance_1 = new lib.Символ6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(51.8,47.9,1,1,0,0,0,79.4,79.2);
	this.instance_1.alpha = 0.148;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0.395},24,cjs.Ease.get(-1)).to({alpha:0.289},25,cjs.Ease.get(1)).to({alpha:0.406},25,cjs.Ease.get(-1)).to({alpha:0.148},26,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.6,-55.3,210,210);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ4();
	this.instance.parent = this;
	this.instance.setTransform(49.8,60.3,1,1,0,0,0,50.8,60.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:58.9},24,cjs.Ease.get(-1)).to({y:57.3},25,cjs.Ease.get(1)).to({y:58.8},25,cjs.Ease.get(-1)).to({y:60.3},26,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.6,-55.3,210,210);


(lib.Символ1 = function(mode,startPosition,loop) {
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

	// Слой 2
	this.instance = new lib.Символ2();
	this.instance.parent = this;
	this.instance.setTransform(447.5,247.1,1,1,0,0,0,309.4,162);
	this.instance.alpha = 0.289;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.578},9).to({alpha:0.289},10).wait(1));

	// Слой 1
	this.instance_1 = new lib.Анимация1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(384,216);

	this.instance_2 = new lib.Анимация2("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(384,216);

	this.instance_3 = new lib.bg();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},9).to({state:[{t:this.instance_3}]},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,768,432);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ11();
	this.instance.parent = this;
	this.instance.setTransform(100,29.2,1,1,0,0,0,100,29.2);

	this.instance_1 = new lib.Символ14();
	this.instance_1.parent = this;
	this.instance_1.setTransform(100.3,29.2,1,1,0,0,0,100.1,29.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,200.2,63.1);


(lib.Символ10 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ3();
	this.instance.parent = this;
	this.instance.setTransform(79.5,91.6,1,1,0,0,0,50.8,60.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:261.6},9).to({y:91.6},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24,-24,210,210);


(lib.Символ15 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ12();
	this.instance.parent = this;
	this.instance.setTransform(100.1,31.6,1,1,0,0,0,100.1,31.6);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-125.9},9).to({y:31.6},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,200.4,63.7);


// stage content:
(lib.JL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{bg:0});

	// timeline functions:
	this.frame_0 = function() {
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		
		stage.canvas.addEventListener("mouseover", fl_Clickover1.bind(this));
		
		function fl_Clickover1()
		{
		    
			this.logo.gotoAndPlay(1);
			this.btn.gotoAndPlay(1);
			this.bg.gotoAndPlay(1);
			this.text.gotoAndPlay(1);
			
			
		    
		}
		
		stage.canvas.addEventListener("mouseout", fl_Clickout1.bind(this));
		
		function fl_Clickout1()
		{
		   
			this.logo.gotoAndPlay(10);
			this.btn.gotoAndPlay(10);
			this.bg.gotoAndPlay(10);
			this.text.gotoAndPlay(10);
			
		  
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// text2
	this.text = new lib.Символ16();
	this.text.parent = this;
	this.text.setTransform(298.3,427.8,1,1,0,0,0,100,10.8);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// btn
	this.btn = new lib.Символ15();
	this.btn.parent = this;
	this.btn.setTransform(299.1,374.6,1,1,0,0,0,100.2,31.8);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// logo
	this.logo = new lib.Символ10();
	this.logo.parent = this;
	this.logo.setTransform(300.8,218.9,1,1,0,0,0,79.4,79.2);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

	// text
	this.instance = new lib.Символ21();
	this.instance.parent = this;
	this.instance.setTransform(299.9,40,1,1,0,0,0,228.9,35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// fog
	this.instance_1 = new lib.Символ9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(640,222.4,1,1,0,0,0,640,190);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// league
	this.instance_2 = new lib.Символ7();
	this.instance_2.parent = this;
	this.instance_2.setTransform(308.3,165.4,0.949,0.949,0,0,0,264.7,143.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 4
	this.instance_3 = new lib.Light();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-36,41);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// bg
	this.bg = new lib.Символ1();
	this.bg.parent = this;
	this.bg.setTransform(242,120,1,1,0,0,0,384,216);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(158,54,2409,534.7);
// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg?1490885990124", id:"bg"},
		{src:"images/Fogpng.png?1490885990124", id:"Fogpng"},
		{src:"images/justice.png?1490885990124", id:"justice"},
		{src:"images/left.png?1490885990124", id:"left"},
		{src:"images/Light.png?1490885990124", id:"Light"},
		{src:"images/logo.png?1490885990124", id:"logo"},
		{src:"images/right.png?1490885990124", id:"right"},
		{src:"images/YourText.png?1490885990124", id:"YourText"},
		{src:"images/Растровоеизображение15.png?1490885990124", id:"Растровоеизображение15"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;