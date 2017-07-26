(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.baba = function() {
	this.initialize(img.baba);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,169,392);


(lib.bablo = function() {
	this.initialize(img.bablo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,242,276);


(lib.btn = function() {
	this.initialize(img.btn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,308,80);


(lib.casinox = function() {
	this.initialize(img.casinox);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,409,86);


(lib.golova = function() {
	this.initialize(img.golova);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,92,97);


(lib.iphone = function() {
	this.initialize(img.iphone);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,149,300);


(lib.jackpot = function() {
	this.initialize(img.jackpot);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,289,93);


(lib.logo_pb = function() {
	this.initialize(img.logo_pb);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,386,80);


(lib.sisi = function() {
	this.initialize(img.sisi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,87,57);


(lib.slots = function() {
	this.initialize(img.slots);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,286,94);


(lib.smob = function() {
	this.initialize(img.smob);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,294,102);


(lib.uho1 = function() {
	this.initialize(img.uho1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,38,54);


(lib.uho2 = function() {
	this.initialize(img.uho2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,30,69);// helper functions:

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


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.uho2();
	this.instance.parent = this;
	this.instance.setTransform(-15,-34.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ35, new cjs.Rectangle(-15,-34.5,30,69), null);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.uho1();
	this.instance.parent = this;
	this.instance.setTransform(-19,-27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ34, new cjs.Rectangle(-19,-27,38,54), null);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0F0301").s().p("AhpAnQgggFALgaQACgEAFgCQAGgCAFAAQAfgEATAVQAFAGgGAFQgKAJgOACIgLABIgLgBgAAwgFQgDgDADgFQAIgQATgEQAPgDAPgBQAWgGADARQABALgLAGIgWALQgOAIgLAAQgPAAgKgPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ28, new cjs.Rectangle(-13,-4,26,8), null);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.smob();
	this.instance.parent = this;
	this.instance.setTransform(-147,-51);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ27, new cjs.Rectangle(-147,-51,294,102), null);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.slots();
	this.instance.parent = this;
	this.instance.setTransform(-143,-47);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ26, new cjs.Rectangle(-143,-47,286,94), null);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sisi();
	this.instance.parent = this;
	this.instance.setTransform(-43.5,-28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ23, new cjs.Rectangle(-43.5,-28.5,87,57), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo_pb();
	this.instance.parent = this;
	this.instance.setTransform(-215,-44,1.113,1.113);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(-215,-44,429.5,89), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.btn();
	this.instance.parent = this;
	this.instance.setTransform(-154,-37);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(-154,-37,308,80), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.jackpot();
	this.instance.parent = this;
	this.instance.setTransform(-144.5,-46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(-144.5,-46.5,289,93), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.iphone();
	this.instance.parent = this;
	this.instance.setTransform(-218.4,-195.8,1.751,1.751,-21.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(-218.4,-292.3,436.8,584.7), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bablo();
	this.instance.parent = this;
	this.instance.setTransform(-139.5,-244.7,1.632,1.632);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(-139.5,-244.7,394.9,450.3), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// casinox.png
	this.instance = new lib.casinox();
	this.instance.parent = this;
	this.instance.setTransform(-205,-43);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(-205,-43,409,86), null);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ35();
	this.instance.parent = this;
	this.instance.setTransform(0,31.8,1,1,0,0,0,0,31.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-0.1,scaleY:0.88,rotation:-5.2,y:32.1},5,cjs.Ease.get(1)).to({regX:0,scaleY:1,rotation:0,y:31.8},5,cjs.Ease.get(1)).wait(1).to({regX:-0.1,scaleY:0.88,rotation:-5.2,y:32.1},5,cjs.Ease.get(1)).to({regX:0,scaleY:1,rotation:0,y:31.8},5,cjs.Ease.get(1)).wait(29));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-34.5,30,69);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ34();
	this.instance.parent = this;
	this.instance.setTransform(9.4,26.9,1,1,0,0,0,9.4,26.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:5.2,y:27},5,cjs.Ease.get(1)).to({rotation:0,y:26.9},5,cjs.Ease.get(1)).wait(1).to({rotation:5.2,y:27},5,cjs.Ease.get(1)).to({rotation:0,y:26.9},5,cjs.Ease.get(1)).wait(29));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19,-27,38,54);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AjQgIIGRhIIAQBZImRBIg");
	var mask_graphics_1 = new cjs.Graphics().p("AjQgJIGRhHIAQBZImRBHg");
	var mask_graphics_2 = new cjs.Graphics().p("AjQgIIGRhHIAQBZImRBHg");
	var mask_graphics_3 = new cjs.Graphics().p("AjQgIIGRhIIAQBZImRBIg");
	var mask_graphics_4 = new cjs.Graphics().p("AjQgJIGRhHIAQBZImRBHg");
	var mask_graphics_5 = new cjs.Graphics().p("AjQgIIGRhHIAQBZImRBHg");
	var mask_graphics_6 = new cjs.Graphics().p("AjQgJIGRhHIAQBZImRBHg");
	var mask_graphics_7 = new cjs.Graphics().p("AjQgIIGRhIIAQBZImRBIg");
	var mask_graphics_8 = new cjs.Graphics().p("AjQgIIGRhHIAQBZImRBHg");
	var mask_graphics_9 = new cjs.Graphics().p("AjQgJIGRhHIAQBZImRBHg");
	var mask_graphics_10 = new cjs.Graphics().p("AjQgIIGRhIIAQBZImRBIg");
	var mask_graphics_11 = new cjs.Graphics().p("AjQgIIGRhIIAQBZImRBIg");
	var mask_graphics_12 = new cjs.Graphics().p("AjQgJIGRhHIAQBZImRBHg");
	var mask_graphics_13 = new cjs.Graphics().p("AjQgIIGRhHIAQBZImRBHg");
	var mask_graphics_14 = new cjs.Graphics().p("AjQgIIGRhIIAQBZImRBIg");
	var mask_graphics_15 = new cjs.Graphics().p("AjQgJIGRhHIAQBZImRBHg");
	var mask_graphics_16 = new cjs.Graphics().p("AjQgIIGRhHIAQBZImRBHg");
	var mask_graphics_17 = new cjs.Graphics().p("AjQgJIGRhHIAQBZImRBHg");
	var mask_graphics_18 = new cjs.Graphics().p("AjQgIIGRhIIAQBZImRBIg");
	var mask_graphics_19 = new cjs.Graphics().p("AjQgIIGRhHIAQBZImRBHg");
	var mask_graphics_20 = new cjs.Graphics().p("AjQgJIGRhHIAQBZImRBHg");
	var mask_graphics_21 = new cjs.Graphics().p("AjQgIIGRhIIAQBZImRBIg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-1.3,y:-7.2}).wait(1).to({graphics:mask_graphics_1,x:-1.3,y:-6}).wait(1).to({graphics:mask_graphics_2,x:-1.3,y:-4.7}).wait(1).to({graphics:mask_graphics_3,x:-1.3,y:-3.4}).wait(1).to({graphics:mask_graphics_4,x:-1.3,y:-2.1}).wait(1).to({graphics:mask_graphics_5,x:-1.3,y:-0.8}).wait(1).to({graphics:mask_graphics_6,x:-1.3,y:-2.1}).wait(1).to({graphics:mask_graphics_7,x:-1.3,y:-3.4}).wait(1).to({graphics:mask_graphics_8,x:-1.3,y:-4.7}).wait(1).to({graphics:mask_graphics_9,x:-1.3,y:-6}).wait(1).to({graphics:mask_graphics_10,x:-1.3,y:-7.2}).wait(1).to({graphics:mask_graphics_11,x:-1.3,y:-7.2}).wait(1).to({graphics:mask_graphics_12,x:-1.3,y:-6}).wait(1).to({graphics:mask_graphics_13,x:-1.3,y:-4.7}).wait(1).to({graphics:mask_graphics_14,x:-1.3,y:-3.4}).wait(1).to({graphics:mask_graphics_15,x:-1.3,y:-2.1}).wait(1).to({graphics:mask_graphics_16,x:-1.3,y:-0.8}).wait(1).to({graphics:mask_graphics_17,x:-1.3,y:-2.1}).wait(1).to({graphics:mask_graphics_18,x:-1.3,y:-3.4}).wait(1).to({graphics:mask_graphics_19,x:-1.3,y:-4.7}).wait(1).to({graphics:mask_graphics_20,x:-1.3,y:-6}).wait(1).to({graphics:mask_graphics_21,x:-1.3,y:-7.2}).wait(24));

	// Слой 1
	this.instance = new lib.Символ28();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13,-4,26,4.8);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ23();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.04,scaleY:1.04,x:-0.5,y:-0.1},19,cjs.Ease.get(-1)).to({scaleX:1.09,scaleY:1.09,x:-1,y:-0.3},20,cjs.Ease.get(0.86)).to({scaleX:1.04,scaleY:1.04,x:-0.5,y:-0.1},20,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:0,y:0},20,cjs.Ease.get(0.86)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.5,-28.5,87,57);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.logo_rio = new lib.Символ17();
	this.logo_rio.parent = this;
	this.logo_rio.setTransform(0,-0.3);
	this.logo_rio.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.logo_rio).wait(29).to({x:-50},0).to({x:0,alpha:1},10,cjs.Ease.get(1)).wait(30).to({x:-50,alpha:0},10,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.parent = this;
	this.instance.setTransform(0,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({x:70,alpha:0},10,cjs.Ease.get(1)).wait(30).to({x:0,alpha:1},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-215,-44.3,429.5,89);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ15();
	this.instance.parent = this;
	this.instance.alpha = 0;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.08,scaleY:1.08,alpha:0.238},4,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,alpha:0},4,cjs.Ease.get(1)).wait(1).to({scaleX:1.08,scaleY:1.08,alpha:0.238},4,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,alpha:0},4,cjs.Ease.get(1)).wait(27));

	// Слой 1
	this.instance_1 = new lib.Символ15();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.08,scaleY:1.08},4,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},4,cjs.Ease.get(1)).wait(1).to({scaleX:1.08,scaleY:1.08},4,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},4,cjs.Ease.get(1)).wait(27));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-154,-37,308,80);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// smob.png
	this.instance = new lib.Символ27();
	this.instance.parent = this;
	this.instance.setTransform(-152.6,0);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(109).to({_off:false},0).to({x:0,alpha:1},10,cjs.Ease.get(1)).wait(50).to({x:150.9,alpha:0},10,cjs.Ease.get(1)).wait(1));

	// slots.png
	this.instance_1 = new lib.Символ26();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-152,0);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(49).to({_off:false},0).to({x:0,alpha:1},10,cjs.Ease.get(1)).wait(50).to({x:152.6,alpha:0},10,cjs.Ease.get(1)).to({_off:true},1).wait(60));

	// jackpot.png
	this.instance_2 = new lib.Символ11();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(49).to({x:150,alpha:0},10,cjs.Ease.get(0.91)).to({_off:true},1).wait(109).to({_off:false,x:-156},0).to({x:-0.5,alpha:1},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-145,-47,289,93);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ6();
	this.instance.parent = this;
	this.instance.setTransform(32,72.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:18.3,y:37.7},29,cjs.Ease.get(-1)).to({x:4,y:2.1},30,cjs.Ease.get(1)).to({x:18,y:37.1},30,cjs.Ease.get(-1)).to({x:25.2,y:54.9},9,cjs.Ease.get(1)).to({x:32,y:72.1},21).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-186.4,-220.3,436.8,584.7);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.parent = this;
	this.instance.setTransform(209.7,145.3,1,1,0,0,0,209.7,145.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:145.4,rotation:-7.1,y:145.5},4,cjs.Ease.get(-1)).to({regY:145.3,rotation:-15,y:145.4},4,cjs.Ease.get(1)).to({rotation:-7.8,x:209.8},4,cjs.Ease.get(-1)).to({rotation:0,x:209.7,y:145.3},4,cjs.Ease.get(1)).wait(1).to({regY:145.4,rotation:-7.1,y:145.5},4,cjs.Ease.get(-1)).to({regY:145.3,rotation:-15,y:145.4},4,cjs.Ease.get(1)).to({rotation:-7.8,x:209.8},4,cjs.Ease.get(-1)).to({rotation:0,x:209.7,y:145.3},4,cjs.Ease.get(1)).wait(23));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-139.5,-244.7,394.9,450.3);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ29();
	this.instance.parent = this;
	this.instance.setTransform(-18.9,14.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.golova();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-46,-48.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ33, new cjs.Rectangle(-46,-48.5,92,97), null);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 35
	this.instance = new lib.Символ37();
	this.instance.parent = this;
	this.instance.setTransform(6,-52.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ33();
	this.instance_1.parent = this;
	this.instance_1.setTransform(36.9,13.1,1,1,0,0,0,36.9,13.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Символ 34
	this.instance_2 = new lib.Символ36();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-49.9,-37.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ31, new cjs.Rectangle(-68.9,-87,115,135.5), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.btn1 = new lib.Символ16();
	this.btn1.parent = this;
	this.btn1.setTransform(0,0,1.325,1.325);

	this.timeline.addTween(cjs.Tween.get(this.btn1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(-204,-49,408,106), null);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.txt1 = new lib.Символ10();
	this.txt1.parent = this;
	this.txt1.setTransform(0,1,1.378,1.378);

	this.timeline.addTween(cjs.Tween.get(this.txt1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(-199.7,-63.7,398.1,128.1), null);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ31();
	this.instance.parent = this;
	this.instance.setTransform(37.1,13.3,1,1,0,0,0,37.1,13.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:37,rotation:-2,x:37,y:13.4},14,cjs.Ease.get(-1)).to({regX:37.1,rotation:-4.2,x:37.1,y:13.3},15,cjs.Ease.get(1)).to({regX:37,rotation:-2,x:37,y:13.4},15,cjs.Ease.get(-1)).to({regX:37.1,rotation:0,x:37.1,y:13.3},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.9,-87,115,135.5);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ32();
	this.instance.parent = this;
	this.instance.setTransform(-15,-108.5);

	this.instance_1 = new lib.baba();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-84.5,-196);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(-84.5,-196,169,392), null);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ24();
	this.instance.parent = this;
	this.instance.setTransform(-20.5,-13.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ9();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(-84.5,-196,169,392), null);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ22();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:6.9},11,cjs.Ease.get(-1)).to({y:14.3},13,cjs.Ease.get(1)).to({y:7.3},12,cjs.Ease.get(-1)).to({y:0},12,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.5,-196,169,392);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ25();
	this.instance.parent = this;
	this.instance.setTransform(0,-70.5,1.514,1.514);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ21, new cjs.Rectangle(-127.9,-367.3,255.9,593.5), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ21();
	this.instance.parent = this;
	this.instance.setTransform(-16.5,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(-144.4,-387.3,255.9,593.5), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.man1 = new lib.Символ8();
	this.man1.parent = this;
	this.man1.setTransform(-5.7,83.7,1.191,1.191,0,0,0,-0.1,115);

	this.timeline.addTween(cjs.Tween.get(this.man1).wait(1));

	// Слой 2
	this.instance = new lib.Символ4();
	this.instance.parent = this;
	this.instance.setTransform(-220.6,-86.3,0.84,0.84);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(55.4,-132.6,0.84,0.84,56.3,0,0,-0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(-337.7,-514.5,663.7,726.8), null);


// stage content:
(lib.fullscreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		window._setCanvasSize = function() {
			
		    var /* Размер баннера */
				iw = window.innerWidth * 0.94,
				ih = window.innerHeight * 0.7,
			
				/* Размер окна браузера */
				w = window.innerWidth,
				h = window.innerHeight,
			
				/* Размер по умолчанию */
				defaultScale = 1,
			
				/* Минимальные размеры для ресайза */
				minWidth = ((w < h && w < 321) ? 450 : 550),
				minHeight = 550,
			
				/* Коэфициенты уменьшения */
				scaleW = iw / minWidth,
				scaleH = ih / minHeight,
				scaleWH = scaleW * scaleH;
		    
		    /* Позиции элементов по умолчанию */
		    
		    _this.btn.x = w < h ? iw * 0.5 : (w > 950 && w > h) ? iw * 0.72 : iw * 0.77;
		    _this.btn.y = w < h ? ((w < h && w > 599) ? ih * 0.92 : ih * 0.9) : ih * 0.8;
			
			_this.man.x = w < h ? iw / 2 : iw * 0.33;
		    _this.man.y = w < h ? ((w < h && w > 599) ? ih * 1.1 : ih) : ih * 1.1;
			
			_this.txt.x = w < h ? iw / 2 : ((w > 950) ? iw * 0.72 : iw * 0.77);
		    _this.txt.y = w < h ? ((w < h && w > 599) ? ih * 0.3 : ih * 0.28) : ih * 0.5;
			
			_this.logo.x = w < h ? iw * 0.5 : ((w > 950) ? iw * 0.72 : iw * 0.77);
		    _this.logo.y = w < h ? ((w < h && w > 599) ? ih * 0.12 : ih * 0.1) : ih * 0.2;
		    
		    
			/* Функция ресайза */
		    function setScale(scale) {
				
		        _this.btn.scaleX = _this.btn.scaleY = ((w < h && w > 599) ? scale * 0.8 : scale);
				_this.man.scaleX = _this.man.scaleY = ((w > h) ? scale * 1.2 : scale);
				_this.txt.scaleX = _this.txt.scaleY = ((w < h && w > 599) ? scale * 0.8 : scale);
				_this.logo.scaleX = _this.logo.scaleY = ((w < h && w > 599) ? scale * 0.8 : scale);
		    }
			
			/* Размер элементов по умолчанию */
		    setScale(defaultScale);
		
		    /* Ресайз */
		
		    if(iw < minWidth) {
		        setScale(scaleW);
		    }
		
		    if(ih < minHeight) {
		        setScale(scaleH);
		    }
		
		    if(iw < minWidth && ih < minHeight) {
		        setScale(scaleWH);
		    }
		
		    /* Ориентация устройства */
		
		    if(w > h) {
				//...///
		    }
					
		}
				
		window.onresize=function(){_setCanvasSize();}
		window.onresize();
		
		//Actions
		
		
		
		//Переход
		
		var target = document.getElementById("content_box");
		target.addEventListener("click", function(){window.top.postMessage('_MRMN.click.' + getAdHash(), '*');console.log("click");});
		
		window.onresize();
		document.addEventListener("DOMContentLoaded", function(){ _setCanvasSize()});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btn.png
	this.btn = new lib.Символ20();
	this.btn.parent = this;
	this.btn.setTransform(394,662);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// Слой 19
	this.txt = new lib.Символ19();
	this.txt.parent = this;
	this.txt.setTransform(510,399,1,1,0,0,0,-2,16);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	// logo_gonzo.png
	this.logo = new lib.Символ18();
	this.logo.parent = this;
	this.logo.setTransform(443,254.5);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

	// tors.png
	this.man = new lib.Символ1();
	this.man.parent = this;
	this.man.setTransform(792,382,1,1,0,0,0,-31.9,79.2);

	this.timeline.addTween(cjs.Tween.get(this.man).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(702,172.2,959.8,930.8);
// library properties:
lib.properties = {
	width: 1024,
	height: 768,
	fps: 30,
	color: "#FFFFFF",
	opacity: 0.00,
	webfonts: {},
	manifest: [
		{src:"images/baba.png", id:"baba"},
		{src:"images/bablo.png", id:"bablo"},
		{src:"images/btn.png", id:"btn"},
		{src:"images/casinox.png", id:"casinox"},
		{src:"images/golova.png", id:"golova"},
		{src:"images/iphone.png", id:"iphone"},
		{src:"images/jackpot.png", id:"jackpot"},
		{src:"images/logo_pb.png", id:"logo_pb"},
		{src:"images/sisi.png", id:"sisi"},
		{src:"images/slots.png", id:"slots"},
		{src:"images/smob.png", id:"smob"},
		{src:"images/uho1.png", id:"uho1"},
		{src:"images/uho2.png", id:"uho2"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;