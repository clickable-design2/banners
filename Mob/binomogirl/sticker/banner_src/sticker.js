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



(lib.btn = function() {
	this.initialize(img.btn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,281,71);


(lib.dol1 = function() {
	this.initialize(img.dol1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,208,154);


(lib.dol2 = function() {
	this.initialize(img.dol2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,129,88);


(lib.dol3 = function() {
	this.initialize(img.dol3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,149,146);


(lib.dol4 = function() {
	this.initialize(img.dol4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,111,70);


(lib.golova = function() {
	this.initialize(img.golova);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,126,121);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,180,56);


(lib.phone = function() {
	this.initialize(img.phone);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,54,103);


(lib.ruka = function() {
	this.initialize(img.ruka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,75,65);


(lib.telo = function() {
	this.initialize(img.telo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,183,225);


(lib.txt1 = function() {
	this.initialize(img.txt1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,280,72);


(lib.txt2 = function() {
	this.initialize(img.txt2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,275,66);


(lib.txt3 = function() {
	this.initialize(img.txt3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,284,72);// helper functions:

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


(lib.Символ53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dol4();
	this.instance.parent = this;
	this.instance.setTransform(-78.6,-49.6,1.417,1.417);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ53, new cjs.Rectangle(-78.6,-49.6,157.3,99.2), null);


(lib.Символ52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dol1();
	this.instance.parent = this;
	this.instance.setTransform(-147.4,-109.1,1.417,1.417);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ52, new cjs.Rectangle(-147.4,-109.1,294.8,218.3), null);


(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dol2();
	this.instance.parent = this;
	this.instance.setTransform(-91.4,-62.3,1.417,1.417);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ51, new cjs.Rectangle(-91.4,-62.3,182.8,124.7), null);


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dol3();
	this.instance.parent = this;
	this.instance.setTransform(-105.6,-103.4,1.417,1.417);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ50, new cjs.Rectangle(-105.6,-103.4,211.2,206.9), null);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.txt2();
	this.instance.parent = this;
	this.instance.setTransform(-137.5,-33);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ48, new cjs.Rectangle(-137.5,-33,275,66), null);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.txt3();
	this.instance.parent = this;
	this.instance.setTransform(-142,-36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ47, new cjs.Rectangle(-142,-36,284,72), null);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#250E03").s().p("Aj2BEQgQgCgFgIQgGgIAAgJQAAgJAegMQAdgNAgABQAgACAjATQAiATgyAJQgzAJgYACIgVAAIgTAAgAB7gPQAcggAXgHQAYgIAigEQAjgEAEAHQAEAGgCAKQgBAJgPAIQgOAJgWAHQgXAIg0AKQgOADgIAAQgWAAAVgWg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ45, new cjs.Rectangle(-27.4,-6.8,54.8,13.7), null);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.telo();
	this.instance.parent = this;
	this.instance.setTransform(-121.2,-149,1.325,1.325);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ42, new cjs.Rectangle(-121.2,-149,242.4,298.1), null);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.phone();
	this.instance.parent = this;
	this.instance.setTransform(-35.8,-68.2,1.325,1.325);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ38, new cjs.Rectangle(-35.8,-68.2,71.6,136.5), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.btn();
	this.instance.parent = this;
	this.instance.setTransform(-154,-37);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(-154,-37,281,71), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ruka();
	this.instance.parent = this;
	this.instance.setTransform(-49.7,-43,1.325,1.325);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(-49.7,-43,99.4,86.1), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.txt1();
	this.instance.parent = this;
	this.instance.setTransform(-140,-36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(-140,-36,280,72), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-149,-46,1.656,1.656);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(-149,-46,298,92.7), null);


(lib.Символ57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ53();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:58.3,y:13},13,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:30,y:60.8},16,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:-15.2,y:14.4},15,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:0,y:0},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.6,-49.6,157.3,99.2);


(lib.Символ56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ50();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:-74.6,y:-32.1},24,cjs.Ease.get(-1)).to({regX:-0.1,regY:-0.1,scaleX:1,scaleY:1,rotation:-30,x:-0.1,y:-65.7},25,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:15.2,x:0,y:-32.9},25,cjs.Ease.get(-1)).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,y:0},25,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-105.6,-103.4,211.2,206.9);


(lib.Символ55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ51();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:20.3,y:-32},15,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:45,y:-70.4},18,cjs.Ease.get(1)).to({regX:-0.1,regY:-0.1,scaleX:1,scaleY:1,rotation:21.8,y:-34.4},20,cjs.Ease.get(-1)).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,y:0},19,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.4,-62.3,182.8,124.7);


(lib.Символ54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ52();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:-13.5,x:-14.5,y:24},20,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:-30,x:-32,y:52.8},24,cjs.Ease.get(1)).to({regX:-0.1,regY:-0.1,scaleX:1,scaleY:1,rotation:-35.5,x:-16.5,y:26.9},22,cjs.Ease.get(-1)).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:0,y:0},23,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-147.4,-109.1,294.8,218.3);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 46 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AllgWIKuh2IAdCjIquB2g");
	var mask_graphics_1 = new cjs.Graphics().p("AllgWIKuh2IAdCjIquB2g");
	var mask_graphics_2 = new cjs.Graphics().p("AllgWIKuh2IAdCjIquB2g");
	var mask_graphics_3 = new cjs.Graphics().p("AllgWIKuh2IAdCjIquB2g");
	var mask_graphics_4 = new cjs.Graphics().p("AllgWIKuh2IAdCjIquB2g");
	var mask_graphics_5 = new cjs.Graphics().p("AllgWIKuh2IAdCjIquB2g");
	var mask_graphics_6 = new cjs.Graphics().p("AllgWIKuh2IAdCjIquB2g");
	var mask_graphics_7 = new cjs.Graphics().p("AllgWIKuh2IAdCjIquB2g");
	var mask_graphics_8 = new cjs.Graphics().p("AllgWIKuh2IAdCjIquB2g");
	var mask_graphics_9 = new cjs.Graphics().p("AllgWIKuh2IAdCjIquB2g");
	var mask_graphics_10 = new cjs.Graphics().p("AllgWIKuh2IAdCjIquB2g");
	var mask_graphics_11 = new cjs.Graphics().p("AllgWIKuh2IAdCjIquB2g");
	var mask_graphics_12 = new cjs.Graphics().p("AllgWIKuh2IAdCjIquB2g");
	var mask_graphics_13 = new cjs.Graphics().p("AllgWIKuh2IAdCjIquB2g");
	var mask_graphics_14 = new cjs.Graphics().p("AllgWIKuh2IAdCjIquB2g");
	var mask_graphics_15 = new cjs.Graphics().p("AllgWIKuh2IAdCjIquB2g");
	var mask_graphics_16 = new cjs.Graphics().p("AllgWIKuh2IAdCjIquB2g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-1.4,y:-12.5}).wait(1).to({graphics:mask_graphics_1,x:-1.4,y:-9.7}).wait(1).to({graphics:mask_graphics_2,x:-1.4,y:-6.9}).wait(1).to({graphics:mask_graphics_3,x:-1.4,y:-4}).wait(1).to({graphics:mask_graphics_4,x:-1.4,y:-1.2}).wait(1).to({graphics:mask_graphics_5,x:-1.4,y:-4}).wait(1).to({graphics:mask_graphics_6,x:-1.4,y:-6.9}).wait(1).to({graphics:mask_graphics_7,x:-1.4,y:-9.7}).wait(1).to({graphics:mask_graphics_8,x:-1.4,y:-12.5}).wait(1).to({graphics:mask_graphics_9,x:-1.4,y:-9.7}).wait(1).to({graphics:mask_graphics_10,x:-1.4,y:-6.9}).wait(1).to({graphics:mask_graphics_11,x:-1.4,y:-4}).wait(1).to({graphics:mask_graphics_12,x:-1.4,y:-1.2}).wait(1).to({graphics:mask_graphics_13,x:-1.4,y:-4}).wait(1).to({graphics:mask_graphics_14,x:-1.4,y:-6.9}).wait(1).to({graphics:mask_graphics_15,x:-1.4,y:-9.7}).wait(1).to({graphics:mask_graphics_16,x:-1.4,y:-12.5}).wait(24));

	// Символ 45
	this.instance = new lib.Символ45();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.4,-6.8,54.8,8.5);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ42();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ43, new cjs.Rectangle(-121.2,-149,242.4,298.1), null);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ44();
	this.instance.parent = this;
	this.instance.setTransform(-27.3,3.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.golova();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-83.4,-80.1,1.325,1.325);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ40, new cjs.Rectangle(-83.4,-80.1,166.9,160.3), null);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ38();
	this.instance.parent = this;
	this.instance.setTransform(5.4,62.1,1,1,0,0,0,5.4,62.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:5.5},14,cjs.Ease.get(-1)).to({rotation:11.7,y:62.2},15,cjs.Ease.get(1)).to({rotation:5.8},15,cjs.Ease.get(-1)).to({rotation:0,y:62.1},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.8,-68.2,71.6,136.5);


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
p.nominalBounds = new cjs.Rectangle(-154,-37,281,71);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.parent = this;
	this.instance.setTransform(48.2,23.1,1,1,0,0,0,48.2,23.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:48.3,rotation:-2.8,x:48.4},10,cjs.Ease.get(-1)).to({regX:48.2,rotation:-6.2,x:48.2},11,cjs.Ease.get(1)).to({rotation:-3.1,x:48.3,y:23.2},11,cjs.Ease.get(-1)).to({rotation:0,x:48.2,y:23.1},12,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.7,-43,99.4,86.1);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// jackpot.png
	this.instance = new lib.Символ11();
	this.instance.parent = this;
	this.instance.setTransform(-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(-140.5,-36.5,280,72), null);


(lib.Символ59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ57();
	this.instance.parent = this;
	this.instance.setTransform(-291.7,12.5);

	this.instance_1 = new lib.Символ54();
	this.instance_1.parent = this;
	this.instance_1.setTransform(223,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ59, new cjs.Rectangle(-370.4,-109.1,740.8,218.3), null);


(lib.Символ58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ56();
	this.instance.parent = this;
	this.instance.setTransform(-239.3,0);

	this.instance_1 = new lib.Символ55();
	this.instance_1.parent = this;
	this.instance_1.setTransform(253.5,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ58, new cjs.Rectangle(-344.9,-103.4,689.8,206.9), null);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ40();
	this.instance.parent = this;
	this.instance.setTransform(81.5,45.8,1,1,0,0,0,81.5,45.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-1.3,y:45.9},14,cjs.Ease.get(-1)).to({rotation:-3,x:81.6},15,cjs.Ease.get(1)).to({regY:45.9,rotation:-1.3,y:46},15,cjs.Ease.get(-1)).to({regY:45.8,rotation:0,x:81.5,y:45.8},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83.4,-80.1,166.9,160.3);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.btn1 = new lib.Символ16();
	this.btn1.parent = this;
	this.btn1.setTransform(0,0,1.662,1.662);

	this.timeline.addTween(cjs.Tween.get(this.btn1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(-255.9,-61.5,467,118), null);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt3.png
	this.instance = new lib.Символ47();
	this.instance.parent = this;
	this.instance.setTransform(123.2,0,1.871,1.871);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(63).to({_off:false},0).to({x:0,alpha:1},9,cjs.Ease.get(1)).wait(32).to({x:-104,alpha:0},10,cjs.Ease.get(1)).wait(1));

	// txt2.png
	this.instance_1 = new lib.Символ48();
	this.instance_1.parent = this;
	this.instance_1.setTransform(110.3,5.8,1.945,1.945);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24).to({_off:false},0).to({x:-1.7,alpha:1},9,cjs.Ease.get(1)).wait(30).to({x:-73.7,alpha:0},9,cjs.Ease.get(1)).to({_off:true},1).wait(42));

	// Слой 1
	this.txt1 = new lib.Символ10();
	this.txt1.parent = this;
	this.txt1.setTransform(0,1.2,1.905,1.905,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.txt1).wait(24).to({x:-88,alpha:0},9,cjs.Ease.get(1)).to({_off:true},1).wait(70).to({_off:false,x:160},0).to({x:0,alpha:1},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-267.6,-68.5,533.3,137.1);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ruka.png
	this.instance = new lib.Символ14();
	this.instance.parent = this;
	this.instance.setTransform(-28.3,40.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// phone.png
	this.instance_1 = new lib.Символ39();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-106.2,-34.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// golova.png
	this.instance_2 = new lib.Символ41();
	this.instance_2.parent = this;
	this.instance_2.setTransform(25.5,-126.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// telo.png
	this.instance_3 = new lib.Символ43();
	this.instance_3.parent = this;
	this.instance_3.setTransform(19.2,64);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(-142,-207,282.4,420.1), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ12();
	this.instance.parent = this;
	this.instance.setTransform(-69.5,-109.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-98.9},9,cjs.Ease.get(-1)).to({y:-87.5},10,cjs.Ease.get(1)).to({y:-98.4},10,cjs.Ease.get(-1)).to({y:-109.3},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-211.5,-316.3,282.4,420.1);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.man1 = new lib.Символ8();
	this.man1.parent = this;
	this.man1.setTransform(-78.7,50.4,1.017,1.017,0,0,0,-61.4,87);

	this.timeline.addTween(cjs.Tween.get(this.man1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(-231.4,-359.8,287.3,427.4), null);


// stage content:
(lib.sticker = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
					window._setCanvasSize = function() {
						
			var /* Размер баннера */
				iw = window.innerWidth,
				ih = window.innerHeight,
			
				/* Размер окна браузера */
				w = window.innerWidth,
				h = window.innerHeight / 0.35,
			
				/* Размер по умолчанию */
				defaultScale = 1,
			
				/* Минимальные размеры для ресайза */
				minWidth = 300,
				minHeight = 300,
			
				/* Коэфициенты уменьшения */
				scaleW = iw / minWidth,
				scaleH = ih / minHeight,
				scaleWH = scaleW * scaleH;
		    
		    /* Позиции элементов по умолчанию */
		    
		    _this.btn.x = w < h ? iw * 0.7 : iw * 0.83;
		    _this.btn.y = w < h ? ih * 0.8 : ih * 0.5;
			
			_this.man.x = w < h ? iw * 0.2 : iw * 0.15;
		    _this.man.y = w < h ? ih : ih * 1.4;
			
			_this.txt.x = w < h ? iw * 0.7 : ((w < 490) ? iw * 0.45 : iw * 0.49);
		    _this.txt.y = w < h ? ih * 0.5 : ih * 0.7;
			
			_this.logo.x = w < h ? iw * 0.7 : ((w < 490) ? iw * 0.45 : iw * 0.49);
		    _this.logo.y = w < h ? ih * 0.14 : ih * 0.24;
			
			_this.dollars_niz.x = iw * 0.15;
			_this.dollars_niz.y = ih;
		    
			_this.dollars_verh.x = iw * 0.15;
			_this.dollars_verh.y = 0;
		    
			/* Функция ресайза */
		    function setScale(scale) {
				
		        _this.btn.scaleX = _this.btn.scaleY = w < h ? scale * 0.6 : ((w > 1020) ? scale * 0.8 : scale);
				_this.man.scaleX = _this.man.scaleY = w < h ? scale * 0.8 : scale;
				_this.txt.scaleX = _this.txt.scaleY = w < h ? scale * 0.6 : ((w > 1020) ? scale * 0.8 : scale);
				_this.logo.scaleX = _this.logo.scaleY = w < h ? scale * 0.8 : scale;
				_this.dollars_verh.scaleX = _this.dollars_verh.scaleY = w < h ? scale * 0.5 : ((w > 1020) ? scale * 0.8 : scale);
				_this.dollars_niz.scaleX = _this.dollars_niz.scaleY = w < h ? scale * 0.5 : ((w > 1020) ? scale * 0.8 : scale);
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
	this.btn.setTransform(371.6,659.5,1,1,0,0,0,-22.4,-2.5);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// Слой 19
	this.txt = new lib.Символ19();
	this.txt.parent = this;
	this.txt.setTransform(510,399,1,1,0,0,0,-2,16);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	// logo_gonzo.png
	this.logo = new lib.Символ3();
	this.logo.parent = this;
	this.logo.setTransform(442.7,254.7);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

	// tors.png
	this.man = new lib.Символ1();
	this.man.parent = this;
	this.man.setTransform(747.9,357,1,1,0,0,0,-76,54.2);

	this.timeline.addTween(cjs.Tween.get(this.man).wait(1));

	// Символ 59
	this.dollars_verh = new lib.Символ59();
	this.dollars_verh.parent = this;
	this.dollars_verh.setTransform(584.7,-465.2,1,1,0,0,0,-68.8,1.6);

	this.timeline.addTween(cjs.Tween.get(this.dollars_verh).wait(1));

	// Символ 58
	this.dollars_niz = new lib.Символ58();
	this.dollars_niz.parent = this;
	this.dollars_niz.setTransform(601,197.5);

	this.timeline.addTween(cjs.Tween.get(this.dollars_niz).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(650.1,-192,885.8,1294.5);
// library properties:
lib.properties = {
	width: 1024,
	height: 768,
	fps: 30,
	color: "#FFFFFF",
	opacity: 0.00,
	webfonts: {},
	manifest: [
		{src:"images/btn.png", id:"btn"},
		{src:"images/dol1.png", id:"dol1"},
		{src:"images/dol2.png", id:"dol2"},
		{src:"images/dol3.png", id:"dol3"},
		{src:"images/dol4.png", id:"dol4"},
		{src:"images/golova.png", id:"golova"},
		{src:"images/logo.png", id:"logo"},
		{src:"images/phone.png", id:"phone"},
		{src:"images/ruka.png", id:"ruka"},
		{src:"images/telo.png", id:"telo"},
		{src:"images/txt1.png", id:"txt1"},
		{src:"images/txt2.png", id:"txt2"},
		{src:"images/txt3.png", id:"txt3"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;