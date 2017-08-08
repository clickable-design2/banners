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



(lib.button = function() {
	this.initialize(img.button);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,310,97);


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


(lib.leo = function() {
	this.initialize(img.leo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,333,600);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,101,36);


(lib.reus = function() {
	this.initialize(img.reus);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,277,600);


(lib.ron = function() {
	this.initialize(img.ron);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,408,600);


(lib.txt1 = function() {
	this.initialize(img.txt1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,280,82);


(lib.txt2 = function() {
	this.initialize(img.txt2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,275,90);


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


(lib.Символ67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-126.4,-43,2.608,2.608);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ67, new cjs.Rectangle(-126.4,-43,263.4,93.9), null);


(lib.Символ65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.leo();
	this.instance.parent = this;
	this.instance.setTransform(-103.5,-186.5,0.622,0.622);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ65, new cjs.Rectangle(-103.5,-186.5,207,373), null);


(lib.Символ63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ron();
	this.instance.parent = this;
	this.instance.setTransform(-140.5,-206.6,0.689,0.689);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ63, new cjs.Rectangle(-140.5,-206.6,281,413.2), null);


(lib.Символ61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.reus();
	this.instance.parent = this;
	this.instance.setTransform(-116.3,-252,0.84,0.84);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ61, new cjs.Rectangle(-116.3,-252,232.7,504), null);


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
	this.instance.setTransform(-138,-49);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ48, new cjs.Rectangle(-138,-49,275,90), null);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.txt3();
	this.instance.parent = this;
	this.instance.setTransform(-142,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ47, new cjs.Rectangle(-142,-32,284,72), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.button();
	this.instance.parent = this;
	this.instance.setTransform(-168,-34);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(-168,-34,310,97), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.txt1();
	this.instance.parent = this;
	this.instance.setTransform(-140,-38);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(-140,-38,280,82), null);


(lib.Символ68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ67();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.13,scaleY:1.13},5,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},5,cjs.Ease.get(1)).wait(1).to({scaleX:1.13,scaleY:1.13},5,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},5,cjs.Ease.get(1)).wait(29));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-126.4,-43,263.4,93.9);


(lib.Символ66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ65();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-2.5,y:6.9},19,cjs.Ease.get(-1)).to({rotation:-5.4,y:14},20,cjs.Ease.get(1)).to({regX:0.1,regY:0.1,rotation:-2.6,x:0.1,y:7.1},20,cjs.Ease.get(-1)).to({regX:0,regY:0,rotation:0,x:0,y:0},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103.5,-186.5,207,373);


(lib.Символ64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ63();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:1.8,x:-13.2,y:14.6},11,cjs.Ease.get(-1)).to({rotation:4.2,x:-30,y:33},14,cjs.Ease.get(1)).to({regX:-0.1,regY:0.1,rotation:2.3,x:-16.6,y:18.4},13,cjs.Ease.get(-1)).to({regX:0,regY:0,rotation:0,x:0,y:0},16,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-140.5,-206.6,281,413.2);


(lib.Символ62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ61();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-2.2,y:17.6},15,cjs.Ease.get(-1)).to({rotation:0,y:37},16,cjs.Ease.get(1)).to({rotation:4.2,y:18.5},16,cjs.Ease.get(-1)).to({rotation:0,y:0},16,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116.3,-252,232.7,504);


(lib.Символ60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// reus.png
	this.instance = new lib.Символ62();
	this.instance.parent = this;
	this.instance.setTransform(-60.6,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// leo.png
	this.instance_1 = new lib.Символ66();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-170.2,-23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// ron.png
	this.instance_2 = new lib.Символ64();
	this.instance_2.parent = this;
	this.instance_2.setTransform(133.2,-31.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ60, new cjs.Rectangle(-273.7,-252,547.4,504), null);


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
p.nominalBounds = new cjs.Rectangle(-168,-34,310,97);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// jackpot.png
	this.instance = new lib.Символ11();
	this.instance.parent = this;
	this.instance.setTransform(-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(-140.5,-38.5,280,82), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ68();
	this.instance.parent = this;
	this.instance.setTransform(1.5,-1,0.731,0.731,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(-91,-32.4,192.6,68.7), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// reus.png
	this.instance = new lib.Символ60();
	this.instance.parent = this;
	this.instance.setTransform(-13.3,149.9,1.328,1.328,0,0,0,-52.9,147.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(-306.5,-381,727,669.4), null);


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


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.btn1 = new lib.Символ16();
	this.btn1.parent = this;
	this.btn1.setTransform(0,0,1.662,1.662);

	this.timeline.addTween(cjs.Tween.get(this.btn1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(-279.1,-56.5,515.1,161.2), null);


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
p.nominalBounds = new cjs.Rectangle(-267.6,-72.3,533.3,156.1);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.txt4 = new lib.Символ19();
	this.txt4.parent = this;
	this.txt4.setTransform(-1.1,10.3,0.892,0.892,0,0,0,-2,16);

	this.timeline.addTween(cjs.Tween.get(this.txt4).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(-237.8,-68.4,475.5,139.3), null);


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
				minWidth = ((w < h && w < 321) ? 450 : 600),
				minHeight = 550,
			
				/* Коэфициенты уменьшения */
				scaleW = iw / minWidth,
				scaleH = ih / minHeight,
				scaleWH = scaleW * scaleH;
		    
		    /* Позиции элементов по умолчанию */
		    
		    _this.btn.x = w < h ? iw * 0.5 : (w > 950 && w > h) ? iw * 0.79 : iw * 0.77;
		    _this.btn.y = w < h ? ((w < h && w > 599) ? ih * 0.91 : ih * 0.9) : ih * 0.8;
			
			_this.man.x = w < h ? iw / 2 : iw * 0.26;
		    _this.man.y = w < h ? ((w < h && w > 599) ? ih * 1.1 : ih) : ih * 1.1;
			
			_this.txt.x = w < h ? iw / 2 : ((w > 950) ? iw * 0.79 : iw * 0.77);
		    _this.txt.y = w < h ? ((w < h && w > 599) ? ih * 0.25 : ih * 0.27) : ih * 0.47;
			
			_this.logo.x = w < h ? iw * 0.5 : ((w > 950) ? iw * 0.79 : iw * 0.77);
		    _this.logo.y = w < h ? ((w < h && w > 599) ? ih * 0.08 : ih * 0.09) : ih * 0.2;
			
			_this.dollars_niz.x = w < h ? iw * 0.5 : iw * 0.3;
			_this.dollars_niz.y = w < h ? ih * 0.5 : ih;
		    
			_this.dollars_verh.x = w < h ? iw * 0.5 : iw * 0.3;
			_this.dollars_verh.y = 0;
		    
			/* Функция ресайза */
		    function setScale(scale) {
				
		        _this.btn.scaleX = _this.btn.scaleY = ((w < h && w > 599 || w > h && w > 1020) ? scale * 0.75 : ((w < 481) ? scale * 1.2 : (w > h && w > 959) ? scale * 0.9 : scale));
				_this.man.scaleX = _this.man.scaleY = ((w > h) ? ((w > 1020) ? scale : ((w < 481) ? scale * 1.3 : scale * 1.1)) : w > 599 ? scale * 0.9 : scale);
				_this.txt.scaleX = _this.txt.scaleY = ((w < h && w > 599 || w > h && w > 1020) ? ((w < h && w > 767) ? scale : scale * 0.67) : ((w < 481) ? scale * 1.14 : (w > h && w > 959) ? scale * 0.9 : scale));
				_this.logo.scaleX = _this.logo.scaleY = ((w < h && w > 599) ? scale * 0.8 : ((w < 481) ? scale * 1.4 : scale));
				_this.dollars_verh.scaleX = _this.dollars_verh.scaleY = scale;
				_this.dollars_niz.scaleX = _this.dollars_niz.scaleY = scale;
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
	this.txt = new lib.Символ2();
	this.txt.parent = this;
	this.txt.setTransform(511.1,388.8);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	// logo_gonzo.png
	this.logo = new lib.Символ3();
	this.logo.parent = this;
	this.logo.setTransform(442.7,254.7);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

	// tors.png
	this.man = new lib.Символ1();
	this.man.parent = this;
	this.man.setTransform(816.9,460,1,1,0,0,0,-7,157.2);

	this.timeline.addTween(cjs.Tween.get(this.man).wait(1));

	// Символ 59
	this.dollars_verh = new lib.Символ59();
	this.dollars_verh.parent = this;
	this.dollars_verh.setTransform(628.8,-465.2,1,1,0,0,0,-24.7,1.6);

	this.timeline.addTween(cjs.Tween.get(this.dollars_verh).wait(1));

	// Символ 58
	this.dollars_niz = new lib.Символ58();
	this.dollars_niz.parent = this;
	this.dollars_niz.setTransform(601,197.5);

	this.timeline.addTween(cjs.Tween.get(this.dollars_niz).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(626.9,-192,1129.5,1342.7);
// library properties:
lib.properties = {
	width: 1024,
	height: 768,
	fps: 30,
	color: "#FFFFFF",
	opacity: 0.00,
	webfonts: {},
	manifest: [
		{src:"images/button.png", id:"button"},
		{src:"images/dol1.png", id:"dol1"},
		{src:"images/dol2.png", id:"dol2"},
		{src:"images/dol3.png", id:"dol3"},
		{src:"images/dol4.png", id:"dol4"},
		{src:"images/leo.png", id:"leo"},
		{src:"images/logo.png", id:"logo"},
		{src:"images/reus.png", id:"reus"},
		{src:"images/ron.png", id:"ron"},
		{src:"images/txt1.png", id:"txt1"},
		{src:"images/txt2.png", id:"txt2"},
		{src:"images/txt3.png", id:"txt3"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;