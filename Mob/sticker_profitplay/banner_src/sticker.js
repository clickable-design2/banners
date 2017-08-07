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


(lib.devochka = function() {
	this.initialize(img.devochka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,232,428);


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


(lib.ruka = function() {
	this.initialize(img.ruka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,75,105);


(lib.txt = function() {
	this.initialize(img.txt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,279,73);


(lib.txt1 = function() {
	this.initialize(img.txt1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,279,77);// helper functions:

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


(lib.Символ62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.devochka();
	this.instance.parent = this;
	this.instance.setTransform(-116,-214);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ62, new cjs.Rectangle(-116,-214,232,428), null);


(lib.Символ60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ruka();
	this.instance.parent = this;
	this.instance.setTransform(-37.5,-52.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ60, new cjs.Rectangle(-37.5,-52.5,75,105), null);


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

	// txt1.png
	this.instance = new lib.txt1();
	this.instance.parent = this;
	this.instance.setTransform(-140,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ48, new cjs.Rectangle(-140,-40,279,77), null);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00CC33").ss(4,1,1).p("EhQBApmQASiRAljaQBKmzBjlrQCKn9CnklQDQluDygGQDtgFCDDpQBYCeBGFmQATBeAjC2QAgCWAiBaQBXDqCjgGQBYgDBGhfQA8hUA4inQAnh4A5jmQBRlKAThHQCHn0Cnj0QDmlQFmAFQFhAGCUDYQA7BWAkCFQAXBWAZCkQAcCzAQBGQAfCFAzBTQB/DRE/gGQFEgFDDl+QCJkNBto4QA4kvAbiPQAwj3AqiNQA1i3BChcQBLhoBjAAQC4AABKERQAcBoAVCwQANBmAWDaQAvGbBfC5QCJEOEjgGQCZgDBOhgQBDhRAaioQAPhkAKj9QAKkGATiOQBDnzEjkEQGFlcNLgLQNPAhGIinQEuiBApkBQAPhbBQh6");
	this.shape.setTransform(512.2,266.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ36, new cjs.Rectangle(-2,-2,1028.4,536.3), null);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#00CC00","#FFFFFF"],[0,1],-250.7,-465.2,265,214.1).s().p("EhQBAplQASiQAljaQBKm0BjlrQCKn8CnkmQDQluDygFQDtgFCDDpQBYCeBGFmIA2EUQAgCWAiBaQBXDpCjgFQBYgDBGhgQA8hTA4inQAnh4A5jmQBRlKAThHQCHn0Cnj0QDmlQFmAFQFhAGCUDXQA7BYAkCEQAXBWAZCkQAcCyAQBHQAfCEAzBTQB/DSE/gGQFEgFDDl+QCJkOBto3IBTm+QAwj3AqiNQA1i4BChbQBLhoBjAAQC4AABKERQAcBoAVCwQANBmAWDaQAvGbBfC5QCJENEjgFQCZgDBOhgQBDhSAainQAPhlAKj9QAKkFATiOQBDnzEjkEQGFlcNLgLQNPAhGIinQEuiBApkBQAPhbBQh6MAAABTKg");
	this.shape.setTransform(-512.2,266.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#00CC00","#FFFFFF"],[0,1],-176.3,-802.9,164.8,-22).s().p("EhQBBTLMAAAhTLQASiQAljaQBKmzBjlrQCKn9CnklQDQluDygGQDtgFCDDpQBYCeBGFnIA2ETQAgCXAiBZQBXDqCjgGQBYgDBGhfQA8hTA4inQAnh5A5jmQBRlKAThHQCHn0Cnj1QDmlQFmAGQFhAFCUDYQA7BXAkCFQAXBWAZClQAcCyAQBGQAfCFAzBTQB/DRE/gFQFEgGDDl+QCJkNBto4IBTm/QAwj2AqiOQA1i3BChcQBLhnBjAAQC4AABKEQQAcBoAVCwQANBnAWDaQAvGaBfC6QCJEOEjgFQCZgEBOhfQBDhSAaipQAPhkAKj9QAKkGATiNQBDnzEjkFQGFlbNLgMQNPAiGIinQEuiBApkBQAPhbBQh6MAAACmVg");
	this.shape_1.setTransform(512.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(-1024.3,-532.3,2048.7,1064.6), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.button();
	this.instance.parent = this;
	this.instance.setTransform(-168,-37);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(-168,-37,310,97), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt.png
	this.instance = new lib.txt();
	this.instance.parent = this;
	this.instance.setTransform(-140,-37);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(-140,-37,279,73), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#250E03").s().p("AinBhQgXgeAigXIASgNQANgJAPgDQBFADgEAMQgFANgDAEQgNAPgRALIgNAJQgcAQgfABQgHAAgFgGgABWgXQgMgDACgQQACgUAZgYQAYgYAZANQAhABgKAaQgBAEgRANQgQAMgWAKQgQAIgLAAIgGAAg");
	this.shape.setTransform(0,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(-17.7,-10.5,35.5,20.5), null);


(lib.Символ61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ60();
	this.instance.parent = this;
	this.instance.setTransform(24.2,41.6,1,1,0,0,0,24.2,41.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:24.1,scaleX:1,scaleY:1,rotation:-9.3,x:24.1,y:41.7},5,cjs.Ease.get(-1)).to({regX:24.2,scaleX:1,scaleY:1,rotation:-20,x:24.3,y:41.6},6,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:-10.8},5,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:0,x:24.2},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.5,-52.5,75,105);


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


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ22();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(-1024.3,-532.3,2048.7,1064.6), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 36
	this.instance = new lib.Символ36();
	this.instance.parent = this;
	this.instance.setTransform(818.1,-419.1,1,1,0,0,0,512.1,266.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 36
	this.instance_1 = new lib.Символ36();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-206.3,113.2,1,1,0,0,0,512.1,266.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Символ 18
	this.instance_2 = new lib.Символ18();
	this.instance_2.parent = this;
	this.instance_2.setTransform(306,-152.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(-720.4,-687.2,2052.7,1068.6), null);


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
p.nominalBounds = new cjs.Rectangle(-168,-37,310,97);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// jackpot.png
	this.instance = new lib.Символ11();
	this.instance.parent = this;
	this.instance.setTransform(-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(-140.5,-37.5,279,73), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AkZBCIH7j1IA4ByIn8D1g");
	var mask_graphics_1 = new cjs.Graphics().p("AkZBCIH7j1IA4ByIn8D1g");
	var mask_graphics_2 = new cjs.Graphics().p("AkZBCIH8j1IA3ByIn8D1g");
	var mask_graphics_3 = new cjs.Graphics().p("AkZBCIH8j1IA3ByIn8D1g");
	var mask_graphics_4 = new cjs.Graphics().p("AkZBBIH8j0IA3BzIn8D0g");
	var mask_graphics_5 = new cjs.Graphics().p("AkZBBIH8j0IA3BzIn7D0g");
	var mask_graphics_6 = new cjs.Graphics().p("AkZBBIH8j0IA3BzIn8D0g");
	var mask_graphics_7 = new cjs.Graphics().p("AkZBCIH8j1IA3ByIn8D1g");
	var mask_graphics_8 = new cjs.Graphics().p("AkZBCIH8j1IA3ByIn8D1g");
	var mask_graphics_9 = new cjs.Graphics().p("AkZBCIH7j1IA4ByIn8D1g");
	var mask_graphics_10 = new cjs.Graphics().p("AkZBCIH7j1IA4ByIn8D1g");
	var mask_graphics_11 = new cjs.Graphics().p("AkZBCIH7j1IA4ByIn8D1g");
	var mask_graphics_12 = new cjs.Graphics().p("AkZBCIH8j1IA3ByIn8D1g");
	var mask_graphics_13 = new cjs.Graphics().p("AkZBCIH8j1IA3ByIn8D1g");
	var mask_graphics_14 = new cjs.Graphics().p("AkZBBIH8j0IA3BzIn8D0g");
	var mask_graphics_15 = new cjs.Graphics().p("AkZBBIH8j0IA3BzIn7D0g");
	var mask_graphics_16 = new cjs.Graphics().p("AkZBBIH8j0IA3BzIn8D0g");
	var mask_graphics_17 = new cjs.Graphics().p("AkZBCIH8j1IA3ByIn8D1g");
	var mask_graphics_18 = new cjs.Graphics().p("AkZBCIH8j1IA3ByIn8D1g");
	var mask_graphics_19 = new cjs.Graphics().p("AkZBCIH7j1IA4ByIn8D1g");
	var mask_graphics_20 = new cjs.Graphics().p("AkZBCIH7j1IA4ByIn8D1g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-7.9,y:-10}).wait(1).to({graphics:mask_graphics_1,x:-6.8,y:-8.3}).wait(1).to({graphics:mask_graphics_2,x:-5.6,y:-6.6}).wait(1).to({graphics:mask_graphics_3,x:-4.4,y:-4.8}).wait(1).to({graphics:mask_graphics_4,x:-3.2,y:-3.1}).wait(1).to({graphics:mask_graphics_5,x:-2,y:-1.4}).wait(1).to({graphics:mask_graphics_6,x:-3.2,y:-3.1}).wait(1).to({graphics:mask_graphics_7,x:-4.4,y:-4.8}).wait(1).to({graphics:mask_graphics_8,x:-5.6,y:-6.6}).wait(1).to({graphics:mask_graphics_9,x:-6.8,y:-8.3}).wait(1).to({graphics:mask_graphics_10,x:-7.9,y:-10}).wait(1).to({graphics:mask_graphics_11,x:-6.8,y:-8.3}).wait(1).to({graphics:mask_graphics_12,x:-5.6,y:-6.6}).wait(1).to({graphics:mask_graphics_13,x:-4.4,y:-4.8}).wait(1).to({graphics:mask_graphics_14,x:-3.2,y:-3.1}).wait(1).to({graphics:mask_graphics_15,x:-2,y:-1.4}).wait(1).to({graphics:mask_graphics_16,x:-3.2,y:-3.1}).wait(1).to({graphics:mask_graphics_17,x:-4.4,y:-4.8}).wait(1).to({graphics:mask_graphics_18,x:-5.6,y:-6.6}).wait(1).to({graphics:mask_graphics_19,x:-6.8,y:-8.3}).wait(1).to({graphics:mask_graphics_20,x:-7.9,y:-10}).wait(25));

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.7,-10.5,35.5,18.5);


(lib.Символ63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ9();
	this.instance.parent = this;
	this.instance.setTransform(-17.7,-161);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ62();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ63, new cjs.Rectangle(-116,-214,232,428), null);


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


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ17();
	this.instance.parent = this;
	this.instance.setTransform(-305.9,153);
	this.instance.alpha = 0.512;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-1329.7,y:685},239).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1026.3,-534.3,2052.7,1068.6);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.btn1 = new lib.Символ16();
	this.btn1.parent = this;
	this.btn1.setTransform(0,0,1.662,1.662);

	this.timeline.addTween(cjs.Tween.get(this.btn1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(-279.1,-61.5,515.1,161.2), null);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt2.png
	this.instance = new lib.Символ48();
	this.instance.parent = this;
	this.instance.setTransform(110.3,5.8,1.945,1.945);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(34).to({_off:false},0).to({x:-1.7,alpha:1},9,cjs.Ease.get(1)).wait(40).to({x:-73.7,alpha:0},9,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.txt1 = new lib.Символ10();
	this.txt1.parent = this;
	this.txt1.setTransform(0,1.2,1.905,1.905,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.txt1).wait(34).to({x:-88,alpha:0},9,cjs.Ease.get(1)).to({_off:true},1).wait(39).to({_off:false,x:160},0).to({x:0,alpha:1},9,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-267.6,-70.4,531.4,139);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ruka.png - копия
	this.instance = new lib.Символ61();
	this.instance.parent = this;
	this.instance.setTransform(76.5,-124.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// devochka.png
	this.instance_1 = new lib.Символ63();
	this.instance_1.parent = this;
	this.instance_1.setTransform(7,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(-109,-198,232,428), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ12();
	this.instance.parent = this;
	this.instance.setTransform(-69.5,-109.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-98.9},9,cjs.Ease.get(-1)).to({y:-87.5},10,cjs.Ease.get(1)).to({y:-98.4},10,cjs.Ease.get(-1)).to({y:-109.3},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-178.5,-307.3,232,428);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.graf1 = new lib.Символ23();
	this.graf1.parent = this;
	this.graf1.setTransform(153.4,-85.5,1.26,1.26,0,0,0,-12,12.9);

	this.timeline.addTween(cjs.Tween.get(this.graf1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(-1124.7,-775,2586.5,1346.5), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.txt1 = new lib.Символ19();
	this.txt1.parent = this;
	this.txt1.setTransform(0,17.1,0.85,0.85,0,0,0,-1.9,16.1);

	this.timeline.addTween(cjs.Tween.get(this.txt1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(-225.8,-56.5,451.4,118.1), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.man1 = new lib.Символ8();
	this.man1.parent = this;
	this.man1.setTransform(-78.6,138.5,1.818,1.818,0,0,0,-61.3,87);

	this.timeline.addTween(cjs.Tween.get(this.man1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(-291.7,-578.3,421.8,778.1), null);


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
						minWidth = 460,
						minHeight = 300,
					
						/* Коэфициенты уменьшения */
						scaleW = iw / minWidth,
						scaleH = ih / minHeight,
						scaleWH = scaleW * scaleH;
		    
		    /* Позиции элементов по умолчанию */
		    
		    _this.btn.x = w < h ? iw * 0.7 : iw * 0.83;
		    _this.btn.y = w < h ? ih * 0.7 : ih * 0.5;
			
			_this.man.x = w < h ? iw * 0.2 : ((w < 481) ? iw * 0.12 : iw * 0.2);
		    _this.man.y = w < h ? ((w < h && w > 599) ? ih * 1.1 : ih) : ((w > h && w > 1020) ? ih * 1.1 : ih * 1.4);
			
			_this.txt.x = w < h ? iw * 0.7 : ((w < 481) ? iw * 0.45 : iw * 0.5);
		    _this.txt.y = w < h ? ih * 0.3 : ih * 0.5;
			
			_this.dollars_niz.x = w < h ? iw * 0.2 : iw * 0.2;
			_this.dollars_niz.y = ih;
		    
			_this.dollars_verh.x = w < h ? iw * 0.2 : iw * 0.2;
			_this.dollars_verh.y = 0;
			
			_this.graf.x = iw * 1.1;
			_this.graf.y = ih * 0.5;
		
			/* Функция ресайза */
		    function setScale(scale) {
				
		        _this.btn.scaleX = _this.btn.scaleY = ((w < h && w > 321 || w > h && w > 1020) ? scale * 0.75 : scale);
				_this.man.scaleX = _this.man.scaleY = ((w < h && w > 321 || w > h && w > 1020) ? scale * 0.75 : scale);
				_this.txt.scaleX = _this.txt.scaleY = ((w < h && w > 321 || w > h && w > 1020) ? scale * 0.75 : ((w < 740 && w > h) ? scale * 1.1 : scale));
				_this.dollars_verh.scaleX = _this.dollars_verh.scaleY = ((w < h) ? scale * 0.75 : scale);
				_this.dollars_niz.scaleX = _this.dollars_niz.scaleY = ((w < h) ? scale * 0.75 : scale);
				_this.graf.scaleX = _this.graf.scaleY = scale;
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

	// tors.png
	this.man = new lib.Символ1();
	this.man.parent = this;
	this.man.setTransform(773.9,204,1,1,0,0,0,-50,-98.8);

	this.timeline.addTween(cjs.Tween.get(this.man).wait(1));

	// btn.png
	this.btn = new lib.Символ20();
	this.btn.parent = this;
	this.btn.setTransform(371.6,649.5,1,1,0,0,0,-22.4,-12.5);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// Слой 19
	this.txt = new lib.Символ2();
	this.txt.parent = this;
	this.txt.setTransform(510.1,382.1);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	// Слой 1
	this.graf = new lib.Символ5();
	this.graf.parent = this;
	this.graf.setTransform(890.8,492,1,1,0,0,0,-336.5,196.2);

	this.timeline.addTween(cjs.Tween.get(this.graf).wait(1));

	// Символ 59
	this.dollars_verh = new lib.Символ59();
	this.dollars_verh.parent = this;
	this.dollars_verh.setTransform(672,-414.2,1,1,0,0,0,18.5,52.6);

	this.timeline.addTween(cjs.Tween.get(this.dollars_verh).wait(1));

	// Символ 58
	this.dollars_niz = new lib.Символ58();
	this.dollars_niz.parent = this;
	this.dollars_niz.setTransform(601,197.5);

	this.timeline.addTween(cjs.Tween.get(this.dollars_niz).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(614.5,-192,2586.5,1443.2);
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
		{src:"images/devochka.png", id:"devochka"},
		{src:"images/dol1.png", id:"dol1"},
		{src:"images/dol2.png", id:"dol2"},
		{src:"images/dol3.png", id:"dol3"},
		{src:"images/dol4.png", id:"dol4"},
		{src:"images/ruka.png", id:"ruka"},
		{src:"images/txt.png", id:"txt"},
		{src:"images/txt1.png", id:"txt1"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;