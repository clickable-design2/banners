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



(lib.b_palez_L = function() {
	this.initialize(img.b_palez_L);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,14,34);


(lib.b_palez_p = function() {
	this.initialize(img.b_palez_p);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,18,29);


(lib.dark = function() {
	this.initialize(img.dark);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1630,370);


(lib.dol1 = function() {
	this.initialize(img.dol1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,129,88);


(lib.dol2 = function() {
	this.initialize(img.dol2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,132,208);


(lib.dol3 = function() {
	this.initialize(img.dol3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,103,101);


(lib.dol4 = function() {
	this.initialize(img.dol4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,111,70);


(lib.palzi_L = function() {
	this.initialize(img.palzi_L);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,40,47);


(lib.palzi_p = function() {
	this.initialize(img.palzi_p);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,32,51);


(lib.ruka_L = function() {
	this.initialize(img.ruka_L);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,46,78);


(lib.ruka_p = function() {
	this.initialize(img.ruka_p);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,39,94);


(lib.targ = function() {
	this.initialize(img.targ);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,84,84);


(lib.txt = function() {
	this.initialize(img.txt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,265,37);


(lib.txt1 = function() {
	this.initialize(img.txt1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,280,34);


(lib.txt2 = function() {
	this.initialize(img.txt2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,279,32);// helper functions:

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


(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dark();
	this.instance.parent = this;
	this.instance.setTransform(-815,-72,1,0.389);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ51, new cjs.Rectangle(-815,-72,1630,144), null);


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dol1();
	this.instance.parent = this;
	this.instance.setTransform(-54.9,-37.4,0.851,0.851);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ49, new cjs.Rectangle(-54.9,-37.4,109.9,75), null);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dol2();
	this.instance.parent = this;
	this.instance.setTransform(-56.2,-88.5,0.851,0.851);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ47, new cjs.Rectangle(-56.2,-88.5,112.4,177.1), null);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dol3();
	this.instance.parent = this;
	this.instance.setTransform(-43.8,-43,0.851,0.851);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ45, new cjs.Rectangle(-43.8,-43,87.7,86), null);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dol4();
	this.instance.parent = this;
	this.instance.setTransform(-47.2,-29.8,0.851,0.851);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ43, new cjs.Rectangle(-47.2,-29.8,94.5,59.6), null);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dol1();
	this.instance.parent = this;
	this.instance.setTransform(-54.9,-37.5,0.851,0.851);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ41, new cjs.Rectangle(-54.9,-37.5,109.9,75), null);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dol2();
	this.instance.parent = this;
	this.instance.setTransform(-56.2,-88.5,0.851,0.851);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ39, new cjs.Rectangle(-56.2,-88.5,112.4,177.1), null);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.txt2();
	this.instance.parent = this;
	this.instance.setTransform(-216.2,-24.8,1.55,1.55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ38, new cjs.Rectangle(-216.2,-24.8,432.5,49.6), null);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dol3();
	this.instance.parent = this;
	this.instance.setTransform(-43.8,-43,0.851,0.851);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ36, new cjs.Rectangle(-43.8,-43,87.7,86), null);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dol4();
	this.instance.parent = this;
	this.instance.setTransform(-47.2,-29.8,0.851,0.851);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ34, new cjs.Rectangle(-47.2,-29.8,94.5,59.6), null);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dol1();
	this.instance.parent = this;
	this.instance.setTransform(-54.9,-37.5,0.851,0.851);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ33, new cjs.Rectangle(-54.9,-37.5,109.9,75), null);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dol4();
	this.instance.parent = this;
	this.instance.setTransform(-47.2,-29.8,0.851,0.851);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ32, new cjs.Rectangle(-47.2,-29.8,94.5,59.6), null);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dol3();
	this.instance.parent = this;
	this.instance.setTransform(-43.8,-43,0.851,0.851);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ31, new cjs.Rectangle(-43.8,-43,87.7,86), null);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dol2();
	this.instance.parent = this;
	this.instance.setTransform(-56.2,-88.5,0.851,0.851);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ30, new cjs.Rectangle(-56.2,-88.5,112.4,177.1), null);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.targ();
	this.instance.parent = this;
	this.instance.setTransform(-87.1,-87.1,2.075,2.075);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ21, new cjs.Rectangle(-87.1,-87.1,174.3,174.3), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.txt1();
	this.instance.parent = this;
	this.instance.setTransform(-217,-26.3,1.55,1.55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(-217,-26.3,434,52.7), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.txt();
	this.instance.parent = this;
	this.instance.setTransform(-205.3,-28.7,1.55,1.55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(-205.3,-28.7,410.8,57.4), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.b_palez_p();
	this.instance.parent = this;
	this.instance.setTransform(-9,-14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(-9,-14.5,18,29), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.palzi_p();
	this.instance.parent = this;
	this.instance.setTransform(-16,-25.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(-16,-25.5,32,51), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ruka_p();
	this.instance.parent = this;
	this.instance.setTransform(-19.5,-47);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(-19.5,-47,39,94), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ruka_L();
	this.instance.parent = this;
	this.instance.setTransform(-23,-39);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(-23,-39,46,78), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.palzi_L();
	this.instance.parent = this;
	this.instance.setTransform(-20,-23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(-20,-23.5,40,47), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.b_palez_L();
	this.instance.parent = this;
	this.instance.setTransform(-7,-17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(-7,-17,14,34), null);


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ49();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:4.9},0).wait(1).to({rotation:9.7},0).wait(1).to({rotation:14.6},0).wait(1).to({rotation:19.5},0).wait(1).to({rotation:24.3},0).wait(1).to({rotation:29.2},0).wait(1).to({rotation:34.1},0).wait(1).to({rotation:38.9},0).wait(1).to({rotation:43.8},0).wait(1).to({rotation:48.6},0).wait(1).to({rotation:53.5},0).wait(1).to({rotation:58.4},0).wait(1).to({rotation:63.2},0).wait(1).to({rotation:68.1},0).wait(1).to({rotation:73},0).wait(1).to({rotation:77.8},0).wait(1).to({rotation:82.7},0).wait(1).to({rotation:87.6},0).wait(1).to({rotation:92.4,x:-0.1},0).wait(1).to({rotation:97.3},0).wait(1).to({rotation:102.2},0).wait(1).to({rotation:107},0).wait(1).to({rotation:111.9},0).wait(1).to({rotation:116.8},0).wait(1).to({rotation:121.6},0).wait(1).to({rotation:126.5},0).wait(1).to({rotation:131.4},0).wait(1).to({rotation:136.2},0).wait(1).to({rotation:141.1},0).wait(1).to({rotation:145.9},0).wait(1).to({rotation:150.8},0).wait(1).to({rotation:155.7},0).wait(1).to({rotation:160.5},0).wait(1).to({rotation:165.4},0).wait(1).to({rotation:170.3},0).wait(1).to({rotation:175.1},0).wait(1).to({rotation:180},0).wait(1).to({rotation:184.9},0).wait(1).to({rotation:189.7},0).wait(1).to({rotation:194.6},0).wait(1).to({rotation:199.5},0).wait(1).to({rotation:204.3},0).wait(1).to({rotation:209.2},0).wait(1).to({rotation:214.1},0).wait(1).to({rotation:218.9},0).wait(1).to({rotation:223.8},0).wait(1).to({rotation:228.6},0).wait(1).to({rotation:233.5},0).wait(1).to({rotation:238.4},0).wait(1).to({rotation:243.2},0).wait(1).to({rotation:248.1},0).wait(1).to({rotation:253},0).wait(1).to({rotation:257.8},0).wait(1).to({rotation:262.7},0).wait(1).to({rotation:267.6},0).wait(1).to({rotation:272.4,x:0},0).wait(1).to({rotation:277.3},0).wait(1).to({rotation:282.2},0).wait(1).to({rotation:287},0).wait(1).to({rotation:291.9},0).wait(1).to({rotation:296.8},0).wait(1).to({rotation:301.6},0).wait(1).to({rotation:306.5},0).wait(1).to({rotation:311.4},0).wait(1).to({rotation:316.2},0).wait(1).to({rotation:321.1},0).wait(1).to({rotation:325.9},0).wait(1).to({rotation:330.8},0).wait(1).to({rotation:335.7},0).wait(1).to({rotation:340.5},0).wait(1).to({rotation:345.4},0).wait(1).to({rotation:350.3},0).wait(1).to({rotation:355.1},0).wait(1).to({rotation:360},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.9,-37.4,109.9,75);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ47();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:1},0).wait(1).to({rotation:2},0).wait(1).to({rotation:3},0).wait(1).to({rotation:4},0).wait(1).to({rotation:5},0).wait(1).to({rotation:6},0).wait(1).to({rotation:7},0).wait(1).to({rotation:8},0).wait(1).to({rotation:9.1},0).wait(1).to({rotation:10.1},0).wait(1).to({rotation:11.1},0).wait(1).to({rotation:12.1},0).wait(1).to({rotation:13.1},0).wait(1).to({rotation:14.1},0).wait(1).to({rotation:15.1},0).wait(1).to({rotation:16.2},0).wait(1).to({rotation:17.2},0).wait(1).to({rotation:18.2},0).wait(1).to({rotation:19.2},0).wait(1).to({rotation:20.2},0).wait(1).to({rotation:21.3},0).wait(1).to({rotation:22.3},0).wait(1).to({rotation:23.3},0).wait(1).to({rotation:24.3},0).wait(1).to({rotation:25.4},0).wait(1).to({rotation:26.4},0).wait(1).to({rotation:27.4},0).wait(1).to({rotation:28.5},0).wait(1).to({rotation:29.5},0).wait(1).to({rotation:30.5},0).wait(1).to({rotation:31.6},0).wait(1).to({rotation:32.6},0).wait(1).to({rotation:33.6},0).wait(1).to({rotation:34.7},0).wait(1).to({rotation:35.7},0).wait(1).to({rotation:36.8},0).wait(1).to({rotation:37.8},0).wait(1).to({rotation:38.8},0).wait(1).to({rotation:39.9},0).wait(1).to({rotation:40.9},0).wait(1).to({rotation:42},0).wait(1).to({rotation:43},0).wait(1).to({rotation:44.1},0).wait(1).to({rotation:45.1},0).wait(1).to({rotation:46.2},0).wait(1).to({rotation:47.2},0).wait(1).to({rotation:48.3},0).wait(1).to({rotation:49.3},0).wait(1).to({rotation:50.4},0).wait(1).to({rotation:51.4},0).wait(1).to({rotation:52.5},0).wait(1).to({rotation:53.5},0).wait(1).to({rotation:54.6},0).wait(1).to({rotation:55.6},0).wait(1).to({rotation:56.7},0).wait(1).to({rotation:57.8},0).wait(1).to({rotation:58.8},0).wait(1).to({rotation:59.9},0).wait(1).to({rotation:61},0).wait(1).to({rotation:62},0).wait(1).to({rotation:63.1},0).wait(1).to({rotation:64.1},0).wait(1).to({rotation:65.2},0).wait(1).to({rotation:66.3},0).wait(1).to({rotation:67.4},0).wait(1).to({rotation:68.4},0).wait(1).to({rotation:69.5},0).wait(1).to({rotation:70.6},0).wait(1).to({rotation:71.6},0).wait(1).to({rotation:72.7},0).wait(1).to({rotation:73.8},0).wait(1).to({rotation:74.9},0).wait(1).to({rotation:76},0).wait(1).to({rotation:77},0).wait(1).to({rotation:78.1},0).wait(1).to({rotation:79.2},0).wait(1).to({rotation:80.3},0).wait(1).to({rotation:81.4},0).wait(1).to({rotation:82.4},0).wait(1).to({rotation:83.5},0).wait(1).to({rotation:84.6},0).wait(1).to({rotation:85.7},0).wait(1).to({rotation:86.8},0).wait(1).to({rotation:87.9},0).wait(1).to({rotation:89},0).wait(1).to({rotation:90.1},0).wait(1).to({rotation:91.2},0).wait(1).to({rotation:92.3},0).wait(1).to({rotation:93.4},0).wait(1).to({rotation:94.4},0).wait(1).to({rotation:95.5},0).wait(1).to({rotation:96.6},0).wait(1).to({rotation:97.7},0).wait(1).to({rotation:98.8},0).wait(1).to({rotation:99.9},0).wait(1).to({rotation:101.1},0).wait(1).to({rotation:102.2},0).wait(1).to({rotation:103.3},0).wait(1).to({rotation:104.4},0).wait(1).to({rotation:105.5},0).wait(1).to({rotation:106.6},0).wait(1).to({rotation:107.7},0).wait(1).to({rotation:108.8},0).wait(1).to({rotation:109.9},0).wait(1).to({rotation:111},0).wait(1).to({rotation:112.1},0).wait(1).to({rotation:113.3},0).wait(1).to({rotation:114.4},0).wait(1).to({rotation:115.5},0).wait(1).to({rotation:116.6},0).wait(1).to({rotation:117.7},0).wait(1).to({rotation:118.8},0).wait(1).to({rotation:120},0).wait(1).to({rotation:121.1},0).wait(1).to({rotation:122.2},0).wait(1).to({rotation:123.3},0).wait(1).to({rotation:124.5},0).wait(1).to({rotation:125.6},0).wait(1).to({rotation:126.7},0).wait(1).to({rotation:127.8},0).wait(1).to({rotation:129},0).wait(1).to({rotation:130.1},0).wait(1).to({rotation:131.2},0).wait(1).to({rotation:132.4},0).wait(1).to({rotation:133.5},0).wait(1).to({rotation:134.6},0).wait(1).to({rotation:135.8},0).wait(1).to({rotation:136.9},0).wait(1).to({rotation:138},0).wait(1).to({rotation:139.2},0).wait(1).to({rotation:140.3},0).wait(1).to({rotation:141.5},0).wait(1).to({rotation:142.6},0).wait(1).to({rotation:143.7},0).wait(1).to({rotation:144.9},0).wait(1).to({rotation:146},0).wait(1).to({rotation:147.2},0).wait(1).to({rotation:148.3},0).wait(1).to({rotation:149.5},0).wait(1).to({rotation:150.6},0).wait(1).to({rotation:151.8},0).wait(1).to({rotation:152.9},0).wait(1).to({rotation:154.1},0).wait(1).to({rotation:155.2},0).wait(1).to({rotation:156.4},0).wait(1).to({rotation:157.5},0).wait(1).to({rotation:158.7},0).wait(1).to({rotation:159.8},0).wait(1).to({rotation:161},0).wait(1).to({rotation:162.2},0).wait(1).to({rotation:163.3},0).wait(1).to({rotation:164.5},0).wait(1).to({rotation:165.7},0).wait(1).to({rotation:166.8},0).wait(1).to({rotation:168},0).wait(1).to({rotation:169.1},0).wait(1).to({rotation:170.3},0).wait(1).to({rotation:171.5},0).wait(1).to({rotation:172.7},0).wait(1).to({rotation:173.8},0).wait(1).to({rotation:175},0).wait(1).to({rotation:176.2},0).wait(1).to({rotation:177.3},0).wait(1).to({rotation:178.5},0).wait(1).to({rotation:179.7},0).wait(1).to({rotation:180.9},0).wait(1).to({rotation:182},0).wait(1).to({rotation:183.2},0).wait(1).to({rotation:184.4},0).wait(1).to({rotation:185.6},0).wait(1).to({rotation:186.8},0).wait(1).to({rotation:187.9},0).wait(1).to({rotation:189.1},0).wait(1).to({rotation:190.3},0).wait(1).to({rotation:191.5},0).wait(1).to({rotation:192.7},0).wait(1).to({rotation:193.9},0).wait(1).to({rotation:195.1},0).wait(1).to({rotation:196.3},0).wait(1).to({rotation:197.5},0).wait(1).to({rotation:198.6},0).wait(1).to({rotation:199.8},0).wait(1).to({rotation:201},0).wait(1).to({rotation:202.2},0).wait(1).to({rotation:203.4},0).wait(1).to({rotation:204.6},0).wait(1).to({rotation:205.8},0).wait(1).to({rotation:207},0).wait(1).to({rotation:208.2},0).wait(1).to({rotation:209.4},0).wait(1).to({rotation:210.6},0).wait(1).to({rotation:211.8},0).wait(1).to({rotation:213},0).wait(1).to({rotation:214.2},0).wait(1).to({rotation:215.5},0).wait(1).to({rotation:216.7},0).wait(1).to({rotation:217.9},0).wait(1).to({rotation:219.1},0).wait(1).to({rotation:220.3},0).wait(1).to({rotation:221.5},0).wait(1).to({rotation:222.7},0).wait(1).to({rotation:223.9},0).wait(1).to({rotation:225.1},0).wait(1).to({rotation:226.4},0).wait(1).to({rotation:227.6},0).wait(1).to({rotation:228.8},0).wait(1).to({rotation:230},0).wait(1).to({rotation:231.2},0).wait(1).to({rotation:232.5},0).wait(1).to({rotation:233.7},0).wait(1).to({rotation:234.9},0).wait(1).to({rotation:236.1},0).wait(1).to({rotation:237.4},0).wait(1).to({rotation:238.6},0).wait(1).to({rotation:239.8},0).wait(1).to({rotation:241},0).wait(1).to({rotation:242.3},0).wait(1).to({rotation:243.5},0).wait(1).to({rotation:244.7},0).wait(1).to({rotation:246},0).wait(1).to({rotation:247.2},0).wait(1).to({rotation:248.4},0).wait(1).to({rotation:249.7},0).wait(1).to({rotation:250.9},0).wait(1).to({rotation:252.2},0).wait(1).to({rotation:253.4},0).wait(1).to({rotation:254.6},0).wait(1).to({rotation:255.9},0).wait(1).to({rotation:257.1},0).wait(1).to({rotation:258.4},0).wait(1).to({rotation:259.6},0).wait(1).to({rotation:260.9},0).wait(1).to({rotation:262.1},0).wait(1).to({rotation:263.4},0).wait(1).to({rotation:264.6},0).wait(1).to({rotation:265.9},0).wait(1).to({rotation:267.1},0).wait(1).to({rotation:268.4},0).wait(1).to({rotation:269.6},0).wait(1).to({rotation:270.9},0).wait(1).to({rotation:272.1},0).wait(1).to({rotation:273.4},0).wait(1).to({rotation:274.6},0).wait(1).to({rotation:275.9},0).wait(1).to({rotation:277.2},0).wait(1).to({rotation:278.4},0).wait(1).to({rotation:279.7},0).wait(1).to({rotation:280.9},0).wait(1).to({rotation:282.2},0).wait(1).to({rotation:283.5},0).wait(1).to({rotation:284.7},0).wait(1).to({rotation:286},0).wait(1).to({rotation:287.3},0).wait(1).to({rotation:288.5},0).wait(1).to({rotation:289.8},0).wait(1).to({rotation:291.1},0).wait(1).to({rotation:292.4},0).wait(1).to({rotation:293.6},0).wait(1).to({rotation:294.9},0).wait(1).to({rotation:296.2},0).wait(1).to({rotation:297.5},0).wait(1).to({rotation:298.7},0).wait(1).to({rotation:300},0).wait(1).to({rotation:301.3},0).wait(1).to({rotation:302.6},0).wait(1).to({rotation:303.9},0).wait(1).to({rotation:305.1},0).wait(1).to({rotation:306.4},0).wait(1).to({rotation:307.7},0).wait(1).to({rotation:309},0).wait(1).to({rotation:310.3},0).wait(1).to({rotation:311.6},0).wait(1).to({rotation:312.9},0).wait(1).to({rotation:314.2},0).wait(1).to({rotation:315.5},0).wait(1).to({rotation:316.7},0).wait(1).to({rotation:318},0).wait(1).to({rotation:319.3},0).wait(1).to({rotation:320.6},0).wait(1).to({rotation:321.9},0).wait(1).to({rotation:323.2},0).wait(1).to({rotation:324.5},0).wait(1).to({rotation:325.8},0).wait(1).to({rotation:327.1},0).wait(1).to({rotation:328.4},0).wait(1).to({rotation:329.7},0).wait(1).to({rotation:331},0).wait(1).to({rotation:332.3},0).wait(1).to({rotation:333.6},0).wait(1).to({rotation:335},0).wait(1).to({rotation:336.3},0).wait(1).to({rotation:337.6},0).wait(1).to({rotation:338.9},0).wait(1).to({rotation:340.2},0).wait(1).to({rotation:341.5},0).wait(1).to({rotation:342.8},0).wait(1).to({rotation:344.1},0).wait(1).to({rotation:345.5},0).wait(1).to({rotation:346.8},0).wait(1).to({rotation:348.1},0).wait(1).to({rotation:349.4},0).wait(1).to({rotation:350.7},0).wait(1).to({rotation:352},0).wait(1).to({rotation:353.4},0).wait(1).to({rotation:354.7},0).wait(1).to({rotation:356},0).wait(1).to({rotation:357.3},0).wait(1).to({rotation:358.7},0).wait(1).to({rotation:360},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.2,-88.5,112.4,177.1);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ45();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:4.5},0).wait(1).to({rotation:8.9},0).wait(1).to({rotation:13.3},0).wait(1).to({rotation:17.7},0).wait(1).to({rotation:22},0).wait(1).to({rotation:26.3},0).wait(1).to({rotation:30.6},0).wait(1).to({rotation:34.9},0).wait(1).to({rotation:39.1},0).wait(1).to({rotation:43.3},0).wait(1).to({rotation:47.5},0).wait(1).to({rotation:51.7},0).wait(1).to({rotation:55.8},0).wait(1).to({rotation:59.9},0).wait(1).to({rotation:64},0).wait(1).to({rotation:68},0).wait(1).to({rotation:72},0).wait(1).to({rotation:76},0).wait(1).to({rotation:80},0).wait(1).to({rotation:83.9},0).wait(1).to({rotation:87.8},0).wait(1).to({rotation:91.7},0).wait(1).to({rotation:95.5},0).wait(1).to({rotation:99.3},0).wait(1).to({rotation:103.1},0).wait(1).to({rotation:106.9},0).wait(1).to({rotation:110.6},0).wait(1).to({rotation:114.3},0).wait(1).to({rotation:118},0).wait(1).to({rotation:121.7},0).wait(1).to({rotation:125.3},0).wait(1).to({rotation:128.9},0).wait(1).to({rotation:132.5},0).wait(1).to({rotation:136},0).wait(1).to({rotation:139.5},0).wait(1).to({rotation:143},0).wait(1).to({rotation:146.5},0).wait(1).to({rotation:149.9},0).wait(1).to({rotation:153.3},0).wait(1).to({rotation:156.7},0).wait(1).to({rotation:160},0).wait(1).to({rotation:163.3},0).wait(1).to({rotation:166.6},0).wait(1).to({rotation:169.9},0).wait(1).to({rotation:173.1},0).wait(1).to({rotation:176.3},0).wait(1).to({rotation:179.5},0).wait(1).to({rotation:182.7},0).wait(1).to({rotation:185.8},0).wait(1).to({rotation:188.9},0).wait(1).to({rotation:191.9},0).wait(1).to({rotation:195},0).wait(1).to({rotation:198},0).wait(1).to({rotation:201},0).wait(1).to({rotation:204},0).wait(1).to({rotation:206.9},0).wait(1).to({rotation:209.8},0).wait(1).to({rotation:212.7},0).wait(1).to({rotation:215.5},0).wait(1).to({rotation:218.3},0).wait(1).to({rotation:221.1},0).wait(1).to({rotation:223.9},0).wait(1).to({rotation:226.6},0).wait(1).to({rotation:229.3},0).wait(1).to({rotation:232},0).wait(1).to({rotation:234.7},0).wait(1).to({rotation:237.3},0).wait(1).to({rotation:239.9},0).wait(1).to({rotation:242.4},0).wait(1).to({rotation:245},0).wait(1).to({rotation:247.5},0).wait(1).to({rotation:250},0).wait(1).to({rotation:252.4},0).wait(1).to({rotation:254.9},0).wait(1).to({rotation:257.3},0).wait(1).to({rotation:259.7},0).wait(1).to({rotation:262},0).wait(1).to({rotation:264.3},0).wait(1).to({rotation:266.6},0).wait(1).to({rotation:268.9},0).wait(1).to({rotation:271.1},0).wait(1).to({rotation:273.3},0).wait(1).to({rotation:275.5},0).wait(1).to({rotation:277.7},0).wait(1).to({rotation:279.8},0).wait(1).to({rotation:281.9},0).wait(1).to({rotation:283.9},0).wait(1).to({rotation:286},0).wait(1).to({rotation:288},0).wait(1).to({rotation:290},0).wait(1).to({rotation:291.9},0).wait(1).to({rotation:293.9},0).wait(1).to({rotation:295.8},0).wait(1).to({rotation:297.7},0).wait(1).to({rotation:299.5},0).wait(1).to({rotation:301.3},0).wait(1).to({rotation:303.1},0).wait(1).to({rotation:304.9},0).wait(1).to({rotation:306.6},0).wait(1).to({rotation:308.3},0).wait(1).to({rotation:310},0).wait(1).to({rotation:311.7},0).wait(1).to({rotation:313.3},0).wait(1).to({rotation:314.9},0).wait(1).to({rotation:316.4},0).wait(1).to({rotation:318},0).wait(1).to({rotation:319.5},0).wait(1).to({rotation:321},0).wait(1).to({rotation:322.4},0).wait(1).to({rotation:323.9},0).wait(1).to({rotation:325.3},0).wait(1).to({rotation:326.7},0).wait(1).to({rotation:328},0).wait(1).to({rotation:329.3},0).wait(1).to({rotation:330.6},0).wait(1).to({rotation:331.9},0).wait(1).to({rotation:333.1},0).wait(1).to({rotation:334.3},0).wait(1).to({rotation:335.5},0).wait(1).to({rotation:336.7},0).wait(1).to({rotation:337.8},0).wait(1).to({rotation:338.9},0).wait(1).to({rotation:339.9},0).wait(1).to({rotation:341},0).wait(1).to({rotation:342},0).wait(1).to({rotation:343},0).wait(1).to({rotation:343.9},0).wait(1).to({rotation:344.9},0).wait(1).to({rotation:345.8},0).wait(1).to({rotation:346.7},0).wait(1).to({rotation:347.5},0).wait(1).to({rotation:348.3},0).wait(1).to({rotation:349.1},0).wait(1).to({rotation:349.9},0).wait(1).to({rotation:350.6},0).wait(1).to({rotation:351.3},0).wait(1).to({rotation:352},0).wait(1).to({rotation:352.7},0).wait(1).to({rotation:353.3},0).wait(1).to({rotation:353.9},0).wait(1).to({rotation:354.4},0).wait(1).to({rotation:355},0).wait(1).to({rotation:355.5},0).wait(1).to({rotation:356},0).wait(1).to({rotation:356.4},0).wait(1).to({rotation:356.9},0).wait(1).to({rotation:357.3},0).wait(1).to({rotation:357.7},0).wait(1).to({rotation:358},0).wait(1).to({rotation:358.3},0).wait(1).to({rotation:358.6},0).wait(1).to({rotation:358.9},0).wait(1).to({rotation:359.1},0).wait(1).to({rotation:359.3},0).wait(1).to({rotation:359.5},0).wait(1).to({rotation:359.7},0).wait(1).to({rotation:359.8},0).wait(1).to({rotation:359.9},0).wait(2).to({rotation:360},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.8,-43,87.7,86);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ43();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:4.5},0).wait(1).to({rotation:8.9},0).wait(1).to({rotation:13.3},0).wait(1).to({rotation:17.8},0).wait(1).to({rotation:22.1},0).wait(1).to({rotation:26.5},0).wait(1).to({rotation:30.8},0).wait(1).to({rotation:35.2},0).wait(1).to({rotation:39.5},0).wait(1).to({rotation:43.7},0).wait(1).to({rotation:48},0).wait(1).to({rotation:52.2},0).wait(1).to({rotation:56.4},0).wait(1).to({rotation:60.6},0).wait(1).to({rotation:64.8},0).wait(1).to({rotation:68.9},0).wait(1).to({rotation:73},0).wait(1).to({rotation:77.1},0).wait(1).to({rotation:81.2},0).wait(1).to({rotation:85.3},0).wait(1).to({rotation:89.3},0).wait(1).to({rotation:93.3},0).wait(1).to({rotation:97.3},0).wait(1).to({rotation:101.3},0).wait(1).to({rotation:105.2},0).wait(1).to({rotation:109.1},0).wait(1).to({rotation:113},0).wait(1).to({rotation:116.9},0).wait(1).to({rotation:120.8},0).wait(1).to({rotation:124.6},0).wait(1).to({rotation:128.4},0).wait(1).to({rotation:132.2},0).wait(1).to({rotation:136},0).wait(1).to({rotation:139.7},0).wait(1).to({rotation:143.4},0).wait(1).to({rotation:147.1},0).wait(1).to({rotation:150.8},0).wait(1).to({rotation:154.5},0).wait(1).to({rotation:158.1},0).wait(1).to({rotation:161.7},0).wait(1).to({rotation:165.3},0).wait(1).to({rotation:168.9},0).wait(1).to({rotation:172.4},0).wait(1).to({rotation:176},0).wait(1).to({rotation:179.5},0).wait(1).to({rotation:183},0).wait(1).to({rotation:186.4},0).wait(1).to({rotation:189.9},0).wait(1).to({rotation:193.3},0).wait(1).to({rotation:196.7},0).wait(1).to({rotation:200},0).wait(1).to({rotation:203.4},0).wait(1).to({rotation:206.7},0).wait(1).to({rotation:210},0).wait(1).to({rotation:213.3},0).wait(1).to({rotation:216.6},0).wait(1).to({rotation:219.8},0).wait(1).to({rotation:223},0).wait(1).to({rotation:226.2},0).wait(1).to({rotation:229.4},0).wait(1).to({rotation:232.5},0).wait(1).to({rotation:235.7},0).wait(1).to({rotation:238.8},0).wait(1).to({rotation:241.9},0).wait(1).to({rotation:244.9},0).wait(1).to({rotation:248},0).wait(1).to({rotation:251},0).wait(1).to({rotation:254},0).wait(1).to({rotation:257},0).wait(1).to({rotation:259.9},0).wait(1).to({rotation:262.8},0).wait(1).to({rotation:265.8},0).wait(1).to({rotation:268.6},0).wait(1).to({rotation:271.5},0).wait(1).to({rotation:274.3},0).wait(1).to({rotation:277.2},0).wait(1).to({rotation:280},0).wait(1).to({rotation:282.7},0).wait(1).to({rotation:285.5},0).wait(1).to({rotation:288.2},0).wait(1).to({rotation:290.9},0).wait(1).to({rotation:293.6},0).wait(1).to({rotation:296.3},0).wait(1).to({rotation:299},0).wait(1).to({rotation:301.6},0).wait(1).to({rotation:304.2},0).wait(1).to({rotation:306.8},0).wait(1).to({rotation:309.3},0).wait(1).to({rotation:311.8},0).wait(1).to({rotation:314.4},0).wait(1).to({rotation:316.8},0).wait(1).to({rotation:319.3},0).wait(1).to({rotation:321.8},0).wait(1).to({rotation:324.2},0).wait(1).to({rotation:326.6},0).wait(1).to({rotation:329},0).wait(1).to({rotation:331.3},0).wait(1).to({rotation:333.7},0).wait(1).to({rotation:336},0).wait(1).to({rotation:338.3},0).wait(1).to({rotation:340.6},0).wait(1).to({rotation:342.8},0).wait(1).to({rotation:345},0).wait(1).to({rotation:347.2},0).wait(1).to({rotation:349.4},0).wait(1).to({rotation:351.6},0).wait(1).to({rotation:353.7},0).wait(1).to({rotation:355.8},0).wait(1).to({rotation:357.9},0).wait(1).to({rotation:360},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.2,-29.8,94.5,59.6);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ41();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:4.4},0).wait(1).to({rotation:8.7},0).wait(1).to({rotation:13},0).wait(1).to({rotation:17.3},0).wait(1).to({rotation:21.5},0).wait(1).to({rotation:25.8},0).wait(1).to({rotation:30},0).wait(1).to({rotation:34.1},0).wait(1).to({rotation:38.3},0).wait(1).to({rotation:42.4},0).wait(1).to({rotation:46.6},0).wait(1).to({rotation:50.6},0).wait(1).to({rotation:54.7},0).wait(1).to({rotation:58.8},0).wait(1).to({rotation:62.8},0).wait(1).to({rotation:66.8},0).wait(1).to({rotation:70.7},0).wait(1).to({rotation:74.7},0).wait(1).to({rotation:78.6},0).wait(1).to({rotation:82.5},0).wait(1).to({rotation:86.4},0).wait(1).to({rotation:90.2,y:-0.1},0).wait(1).to({rotation:94},0).wait(1).to({rotation:97.8},0).wait(1).to({rotation:101.6},0).wait(1).to({rotation:105.3},0).wait(1).to({rotation:109.1},0).wait(1).to({rotation:112.8},0).wait(1).to({rotation:116.5},0).wait(1).to({rotation:120.1},0).wait(1).to({rotation:123.7},0).wait(1).to({rotation:127.3},0).wait(1).to({rotation:130.9},0).wait(1).to({rotation:134.5},0).wait(1).to({rotation:138},0).wait(1).to({rotation:141.5},0).wait(1).to({rotation:145},0).wait(1).to({rotation:148.5},0).wait(1).to({rotation:151.9},0).wait(1).to({rotation:155.3},0).wait(1).to({rotation:158.7},0).wait(1).to({rotation:162.1},0).wait(1).to({rotation:165.4},0).wait(1).to({rotation:168.7},0).wait(1).to({rotation:172},0).wait(1).to({rotation:175.3},0).wait(1).to({rotation:178.5},0).wait(1).to({rotation:181.8},0).wait(1).to({rotation:185},0).wait(1).to({rotation:188.1},0).wait(1).to({rotation:191.3},0).wait(1).to({rotation:194.4},0).wait(1).to({rotation:197.5},0).wait(1).to({rotation:200.6},0).wait(1).to({rotation:203.6},0).wait(1).to({rotation:206.7},0).wait(1).to({rotation:209.7},0).wait(1).to({rotation:212.6},0).wait(1).to({rotation:215.6},0).wait(1).to({rotation:218.5},0).wait(1).to({rotation:221.4},0).wait(1).to({rotation:224.3},0).wait(1).to({rotation:227.2},0).wait(1).to({rotation:230},0).wait(1).to({rotation:232.8},0).wait(1).to({rotation:235.6},0).wait(1).to({rotation:238.4},0).wait(1).to({rotation:241.1},0).wait(1).to({rotation:243.8},0).wait(1).to({rotation:246.5},0).wait(1).to({rotation:249.2},0).wait(1).to({rotation:251.8},0).wait(1).to({rotation:254.4},0).wait(1).to({rotation:257},0).wait(1).to({rotation:259.6},0).wait(1).to({rotation:262.1},0).wait(1).to({rotation:264.7},0).wait(1).to({rotation:267.2},0).wait(1).to({rotation:269.6},0).wait(1).to({rotation:272.1,y:0},0).wait(1).to({rotation:274.5},0).wait(1).to({rotation:276.9},0).wait(1).to({rotation:279.3},0).wait(1).to({rotation:281.6},0).wait(1).to({rotation:284},0).wait(1).to({rotation:286.3},0).wait(1).to({rotation:288.6},0).wait(1).to({rotation:290.8},0).wait(1).to({rotation:293},0).wait(1).to({rotation:295.3},0).wait(1).to({rotation:297.4},0).wait(1).to({rotation:299.6},0).wait(1).to({rotation:301.7},0).wait(1).to({rotation:303.8},0).wait(1).to({rotation:305.9},0).wait(1).to({rotation:308},0).wait(1).to({rotation:310},0).wait(1).to({rotation:312},0).wait(1).to({rotation:314},0).wait(1).to({rotation:316},0).wait(1).to({rotation:317.9},0).wait(1).to({rotation:319.9},0).wait(1).to({rotation:321.8},0).wait(1).to({rotation:323.6},0).wait(1).to({rotation:325.5},0).wait(1).to({rotation:327.3},0).wait(1).to({rotation:329.1},0).wait(1).to({rotation:330.9},0).wait(1).to({rotation:332.6},0).wait(1).to({rotation:334.3},0).wait(1).to({rotation:336.1},0).wait(1).to({rotation:337.7},0).wait(1).to({rotation:339.4},0).wait(1).to({rotation:341},0).wait(1).to({rotation:342.6},0).wait(1).to({rotation:344.2},0).wait(1).to({rotation:345.8},0).wait(1).to({rotation:347.3},0).wait(1).to({rotation:348.8},0).wait(1).to({rotation:350.3},0).wait(1).to({rotation:351.7},0).wait(1).to({rotation:353.2},0).wait(1).to({rotation:354.6},0).wait(1).to({rotation:356},0).wait(1).to({rotation:357.3},0).wait(1).to({rotation:358.7},0).wait(1).to({rotation:360},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.9,-37.5,109.9,75);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ39();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:2.7},0).wait(1).to({rotation:5.4},0).wait(1).to({rotation:8.1},0).wait(1).to({rotation:10.8},0).wait(1).to({rotation:13.4},0).wait(1).to({rotation:16.1},0).wait(1).to({rotation:18.7},0).wait(1).to({rotation:21.4},0).wait(1).to({rotation:24},0).wait(1).to({rotation:26.6},0).wait(1).to({rotation:29.2},0).wait(1).to({rotation:31.8},0).wait(1).to({rotation:34.4},0).wait(1).to({rotation:37},0).wait(1).to({rotation:39.6},0).wait(1).to({rotation:42.1},0).wait(1).to({rotation:44.7},0).wait(1).to({rotation:47.2},0).wait(1).to({rotation:49.8},0).wait(1).to({rotation:52.3},0).wait(1).to({rotation:54.8},0).wait(1).to({rotation:57.3},0).wait(1).to({rotation:59.8},0).wait(1).to({rotation:62.3},0).wait(1).to({rotation:64.8},0).wait(1).to({rotation:67.2},0).wait(1).to({rotation:69.7},0).wait(1).to({rotation:72.1},0).wait(1).to({rotation:74.6},0).wait(1).to({rotation:77},0).wait(1).to({rotation:79.4},0).wait(1).to({rotation:81.8},0).wait(1).to({rotation:84.2},0).wait(1).to({rotation:86.6},0).wait(1).to({rotation:89},0).wait(1).to({rotation:91.3},0).wait(1).to({rotation:93.7},0).wait(1).to({rotation:96},0).wait(1).to({rotation:98.4},0).wait(1).to({rotation:100.7},0).wait(1).to({rotation:103},0).wait(1).to({rotation:105.3},0).wait(1).to({rotation:107.6},0).wait(1).to({rotation:109.9},0).wait(1).to({rotation:112.2},0).wait(1).to({rotation:114.4},0).wait(1).to({rotation:116.7},0).wait(1).to({rotation:118.9},0).wait(1).to({rotation:121.2},0).wait(1).to({rotation:123.4},0).wait(1).to({rotation:125.6},0).wait(1).to({rotation:127.8},0).wait(1).to({rotation:130},0).wait(1).to({rotation:132.2},0).wait(1).to({rotation:134.4},0).wait(1).to({rotation:136.6},0).wait(1).to({rotation:138.7},0).wait(1).to({rotation:140.9},0).wait(1).to({rotation:143},0).wait(1).to({rotation:145.2},0).wait(1).to({rotation:147.3},0).wait(1).to({rotation:149.4},0).wait(1).to({rotation:151.5},0).wait(1).to({rotation:153.6},0).wait(1).to({rotation:155.7},0).wait(1).to({rotation:157.8},0).wait(1).to({rotation:159.8},0).wait(1).to({rotation:161.9},0).wait(1).to({rotation:163.9},0).wait(1).to({rotation:166},0).wait(1).to({rotation:168},0).wait(1).to({rotation:170},0).wait(1).to({rotation:172},0).wait(1).to({rotation:174},0).wait(1).to({rotation:176},0).wait(1).to({rotation:178},0).wait(1).to({rotation:179.9},0).wait(1).to({rotation:181.9},0).wait(1).to({rotation:183.8},0).wait(1).to({rotation:185.8},0).wait(1).to({rotation:187.7},0).wait(1).to({rotation:189.6},0).wait(1).to({rotation:191.5},0).wait(1).to({rotation:193.4},0).wait(1).to({rotation:195.3},0).wait(1).to({rotation:197.2},0).wait(1).to({rotation:199},0).wait(1).to({rotation:200.9},0).wait(1).to({rotation:202.8},0).wait(1).to({rotation:204.6},0).wait(1).to({rotation:206.4},0).wait(1).to({rotation:208.2},0).wait(1).to({rotation:210},0).wait(1).to({rotation:211.8},0).wait(1).to({rotation:213.6},0).wait(1).to({rotation:215.4},0).wait(1).to({rotation:217.2},0).wait(1).to({rotation:218.9},0).wait(1).to({rotation:220.7},0).wait(1).to({rotation:222.4},0).wait(1).to({rotation:224.2},0).wait(1).to({rotation:225.9},0).wait(1).to({rotation:227.6},0).wait(1).to({rotation:229.3},0).wait(1).to({rotation:231},0).wait(1).to({rotation:232.7},0).wait(1).to({rotation:234.4},0).wait(1).to({rotation:236},0).wait(1).to({rotation:237.7},0).wait(1).to({rotation:239.3},0).wait(1).to({rotation:241},0).wait(1).to({rotation:242.6},0).wait(1).to({rotation:244.2},0).wait(1).to({rotation:245.8},0).wait(1).to({rotation:247.4},0).wait(1).to({rotation:249},0).wait(1).to({rotation:250.6},0).wait(1).to({rotation:252.1},0).wait(1).to({rotation:253.7},0).wait(1).to({rotation:255.2},0).wait(1).to({rotation:256.8},0).wait(1).to({rotation:258.3},0).wait(1).to({rotation:259.8},0).wait(1).to({rotation:261.3},0).wait(1).to({rotation:262.8},0).wait(1).to({rotation:264.3},0).wait(1).to({rotation:265.8},0).wait(1).to({rotation:267.2},0).wait(1).to({rotation:268.7},0).wait(1).to({rotation:270.1},0).wait(1).to({rotation:271.6},0).wait(1).to({rotation:273},0).wait(1).to({rotation:274.4},0).wait(1).to({rotation:275.8},0).wait(1).to({rotation:277.2},0).wait(1).to({rotation:278.6},0).wait(1).to({rotation:280},0).wait(1).to({rotation:281.4},0).wait(1).to({rotation:282.7},0).wait(1).to({rotation:284.1},0).wait(1).to({rotation:285.4},0).wait(1).to({rotation:286.8},0).wait(1).to({rotation:288.1},0).wait(1).to({rotation:289.4},0).wait(1).to({rotation:290.7},0).wait(1).to({rotation:292},0).wait(1).to({rotation:293.3},0).wait(1).to({rotation:294.6},0).wait(1).to({rotation:295.8},0).wait(1).to({rotation:297.1},0).wait(1).to({rotation:298.3},0).wait(1).to({rotation:299.5},0).wait(1).to({rotation:300.8},0).wait(1).to({rotation:302},0).wait(1).to({rotation:303.2},0).wait(1).to({rotation:304.4},0).wait(1).to({rotation:305.6},0).wait(1).to({rotation:306.7},0).wait(1).to({rotation:307.9},0).wait(1).to({rotation:309.1},0).wait(1).to({rotation:310.2},0).wait(1).to({rotation:311.4},0).wait(1).to({rotation:312.5},0).wait(1).to({rotation:313.6},0).wait(1).to({rotation:314.7},0).wait(1).to({rotation:315.8},0).wait(1).to({rotation:316.9},0).wait(1).to({rotation:318},0).wait(1).to({rotation:319},0).wait(1).to({rotation:320.1},0).wait(1).to({rotation:321.1},0).wait(1).to({rotation:322.2},0).wait(1).to({rotation:323.2},0).wait(1).to({rotation:324.2},0).wait(1).to({rotation:325.2},0).wait(1).to({rotation:326.2},0).wait(1).to({rotation:327.2},0).wait(1).to({rotation:328.2},0).wait(1).to({rotation:329.2},0).wait(1).to({rotation:330.1},0).wait(1).to({rotation:331.1},0).wait(1).to({rotation:332},0).wait(1).to({rotation:333},0).wait(1).to({rotation:333.9},0).wait(1).to({rotation:334.8},0).wait(1).to({rotation:335.7},0).wait(1).to({rotation:336.6},0).wait(1).to({rotation:337.5},0).wait(1).to({rotation:338.3},0).wait(1).to({rotation:339.2},0).wait(1).to({rotation:340.1},0).wait(1).to({rotation:340.9},0).wait(1).to({rotation:341.7},0).wait(1).to({rotation:342.6},0).wait(1).to({rotation:343.4},0).wait(1).to({rotation:344.2},0).wait(1).to({rotation:345},0).wait(1).to({rotation:345.8},0).wait(1).to({rotation:346.5},0).wait(1).to({rotation:347.3},0).wait(1).to({rotation:348.1},0).wait(1).to({rotation:348.8},0).wait(1).to({rotation:349.5},0).wait(1).to({rotation:350.3},0).wait(1).to({rotation:351},0).wait(1).to({rotation:351.7},0).wait(1).to({rotation:352.4},0).wait(1).to({rotation:353.1},0).wait(1).to({rotation:353.8},0).wait(1).to({rotation:354.4},0).wait(1).to({rotation:355.1},0).wait(1).to({rotation:355.7},0).wait(1).to({rotation:356.4},0).wait(1).to({rotation:357},0).wait(1).to({rotation:357.6},0).wait(1).to({rotation:358.2},0).wait(1).to({rotation:358.8},0).wait(1).to({rotation:359.4},0).wait(1).to({rotation:360},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.2,-88.5,112.4,177.1);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ36();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:2.9},0).wait(1).to({rotation:5.8},0).wait(1).to({rotation:8.7},0).wait(1).to({rotation:11.6},0).wait(1).to({rotation:14.5},0).wait(1).to({rotation:17.4},0).wait(1).to({rotation:20.3},0).wait(1).to({rotation:23.2},0).wait(1).to({rotation:26.1},0).wait(1).to({rotation:29},0).wait(1).to({rotation:31.9},0).wait(1).to({rotation:34.8},0).wait(1).to({rotation:37.7},0).wait(1).to({rotation:40.6},0).wait(1).to({rotation:43.5},0).wait(1).to({rotation:46.5},0).wait(1).to({rotation:49.4},0).wait(1).to({rotation:52.3},0).wait(1).to({rotation:55.2},0).wait(1).to({rotation:58.1},0).wait(1).to({rotation:61},0).wait(1).to({rotation:63.9},0).wait(1).to({rotation:66.8},0).wait(1).to({rotation:69.7},0).wait(1).to({rotation:72.6},0).wait(1).to({rotation:75.5},0).wait(1).to({rotation:78.4},0).wait(1).to({rotation:81.3},0).wait(1).to({rotation:84.2},0).wait(1).to({rotation:87.1},0).wait(1).to({rotation:90},0).wait(1).to({rotation:92.9},0).wait(1).to({rotation:95.8},0).wait(1).to({rotation:98.7},0).wait(1).to({rotation:101.6},0).wait(1).to({rotation:104.5},0).wait(1).to({rotation:107.4},0).wait(1).to({rotation:110.3},0).wait(1).to({rotation:113.2},0).wait(1).to({rotation:116.1},0).wait(1).to({rotation:119},0).wait(1).to({rotation:121.9},0).wait(1).to({rotation:124.8},0).wait(1).to({rotation:127.7},0).wait(1).to({rotation:130.6},0).wait(1).to({rotation:133.5},0).wait(1).to({rotation:136.5},0).wait(1).to({rotation:139.4},0).wait(1).to({rotation:142.3},0).wait(1).to({rotation:145.2},0).wait(1).to({rotation:148.1},0).wait(1).to({rotation:151},0).wait(1).to({rotation:153.9},0).wait(1).to({rotation:156.8},0).wait(1).to({rotation:159.7},0).wait(1).to({rotation:162.6},0).wait(1).to({rotation:165.5},0).wait(1).to({rotation:168.4},0).wait(1).to({rotation:171.3},0).wait(1).to({rotation:174.2},0).wait(1).to({rotation:177.1},0).wait(1).to({rotation:180},0).wait(1).to({rotation:182.9},0).wait(1).to({rotation:185.8},0).wait(1).to({rotation:188.7},0).wait(1).to({rotation:191.6},0).wait(1).to({rotation:194.5},0).wait(1).to({rotation:197.4},0).wait(1).to({rotation:200.3},0).wait(1).to({rotation:203.2},0).wait(1).to({rotation:206.1},0).wait(1).to({rotation:209},0).wait(1).to({rotation:211.9},0).wait(1).to({rotation:214.8},0).wait(1).to({rotation:217.7},0).wait(1).to({rotation:220.6},0).wait(1).to({rotation:223.5},0).wait(1).to({rotation:226.5},0).wait(1).to({rotation:229.4},0).wait(1).to({rotation:232.3},0).wait(1).to({rotation:235.2},0).wait(1).to({rotation:238.1},0).wait(1).to({rotation:241},0).wait(1).to({rotation:243.9},0).wait(1).to({rotation:246.8},0).wait(1).to({rotation:249.7},0).wait(1).to({rotation:252.6},0).wait(1).to({rotation:255.5},0).wait(1).to({rotation:258.4},0).wait(1).to({rotation:261.3},0).wait(1).to({rotation:264.2},0).wait(1).to({rotation:267.1},0).wait(1).to({rotation:270},0).wait(1).to({rotation:272.9},0).wait(1).to({rotation:275.8},0).wait(1).to({rotation:278.7},0).wait(1).to({rotation:281.6},0).wait(1).to({rotation:284.5},0).wait(1).to({rotation:287.4},0).wait(1).to({rotation:290.3},0).wait(1).to({rotation:293.2},0).wait(1).to({rotation:296.1},0).wait(1).to({rotation:299},0).wait(1).to({rotation:301.9},0).wait(1).to({rotation:304.8},0).wait(1).to({rotation:307.7},0).wait(1).to({rotation:310.6},0).wait(1).to({rotation:313.5},0).wait(1).to({rotation:316.5},0).wait(1).to({rotation:319.4},0).wait(1).to({rotation:322.3},0).wait(1).to({rotation:325.2},0).wait(1).to({rotation:328.1},0).wait(1).to({rotation:331},0).wait(1).to({rotation:333.9},0).wait(1).to({rotation:336.8},0).wait(1).to({rotation:339.7},0).wait(1).to({rotation:342.6},0).wait(1).to({rotation:345.5},0).wait(1).to({rotation:348.4},0).wait(1).to({rotation:351.3},0).wait(1).to({rotation:354.2},0).wait(1).to({rotation:357.1},0).wait(1).to({rotation:360},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.8,-43,87.7,86);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ34();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:6},0).wait(1).to({rotation:12},0).wait(1).to({rotation:17.9},0).wait(1).to({rotation:23.8},0).wait(1).to({rotation:29.6},0).wait(1).to({rotation:35.4},0).wait(1).to({rotation:41.1},0).wait(1).to({rotation:46.8},0).wait(1).to({rotation:52.4},0).wait(1).to({rotation:58},0).wait(1).to({rotation:63.5},0).wait(1).to({rotation:69},0).wait(1).to({rotation:74.4},0).wait(1).to({rotation:79.8},0).wait(1).to({rotation:85.1},0).wait(1).to({rotation:90.4},0).wait(1).to({rotation:95.6},0).wait(1).to({rotation:100.8},0).wait(1).to({rotation:105.9},0).wait(1).to({rotation:111},0).wait(1).to({rotation:116.1},0).wait(1).to({rotation:121},0).wait(1).to({rotation:126},0).wait(1).to({rotation:130.8},0).wait(1).to({rotation:135.7},0).wait(1).to({rotation:140.5},0).wait(1).to({rotation:145.2},0).wait(1).to({rotation:149.9},0).wait(1).to({rotation:154.5},0).wait(1).to({rotation:159.1},0).wait(1).to({rotation:163.6},0).wait(1).to({rotation:168.1},0).wait(1).to({rotation:172.6},0).wait(1).to({rotation:176.9},0).wait(1).to({rotation:181.3},0).wait(1).to({rotation:185.6},0).wait(1).to({rotation:189.8},0).wait(1).to({rotation:194},0).wait(1).to({rotation:198.1},0).wait(1).to({rotation:202.2},0).wait(1).to({rotation:206.3},0).wait(1).to({rotation:210.3},0).wait(1).to({rotation:214.2},0).wait(1).to({rotation:218.1},0).wait(1).to({rotation:221.9},0).wait(1).to({rotation:225.7},0).wait(1).to({rotation:229.5},0).wait(1).to({rotation:233.2},0).wait(1).to({rotation:236.8},0).wait(1).to({rotation:240.4},0).wait(1).to({rotation:243.9},0).wait(1).to({rotation:247.4},0).wait(1).to({rotation:250.9},0).wait(1).to({rotation:254.3},0).wait(1).to({rotation:257.6},0).wait(1).to({rotation:260.9},0).wait(1).to({rotation:264.2},0).wait(1).to({rotation:267.4},0).wait(1).to({rotation:270.5},0).wait(1).to({rotation:273.6},0).wait(1).to({rotation:276.7},0).wait(1).to({rotation:279.7},0).wait(1).to({rotation:282.6},0).wait(1).to({rotation:285.5},0).wait(1).to({rotation:288.4},0).wait(1).to({rotation:291.2},0).wait(1).to({rotation:293.9},0).wait(1).to({rotation:296.6},0).wait(1).to({rotation:299.3},0).wait(1).to({rotation:301.9},0).wait(1).to({rotation:304.4},0).wait(1).to({rotation:306.9},0).wait(1).to({rotation:309.4},0).wait(1).to({rotation:311.8},0).wait(1).to({rotation:314.2},0).wait(1).to({rotation:316.5},0).wait(1).to({rotation:318.7},0).wait(1).to({rotation:320.9},0).wait(1).to({rotation:323.1},0).wait(1).to({rotation:325.2},0).wait(1).to({rotation:327.2},0).wait(1).to({rotation:329.3},0).wait(1).to({rotation:331.2},0).wait(1).to({rotation:333.1},0).wait(1).to({rotation:335},0).wait(1).to({rotation:336.8},0).wait(1).to({rotation:338.6},0).wait(1).to({rotation:340.3},0).wait(1).to({rotation:341.9},0).wait(1).to({rotation:343.5},0).wait(1).to({rotation:345.1},0).wait(1).to({rotation:346.6},0).wait(1).to({rotation:348.1},0).wait(1).to({rotation:349.5},0).wait(1).to({rotation:350.9},0).wait(1).to({rotation:352.2},0).wait(1).to({rotation:353.4},0).wait(1).to({rotation:354.7},0).wait(1).to({rotation:355.8},0).wait(1).to({rotation:356.9},0).wait(1).to({rotation:358},0).wait(1).to({rotation:359},0).wait(1).to({rotation:360},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.2,-29.8,94.5,59.6);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ33();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:5.6},0).wait(1).to({rotation:11.3},0).wait(1).to({rotation:16.9},0).wait(1).to({rotation:22.5},0).wait(1).to({rotation:28.1},0).wait(1).to({rotation:33.8},0).wait(1).to({rotation:39.4},0).wait(1).to({rotation:45},0).wait(1).to({rotation:50.6},0).wait(1).to({rotation:56.3},0).wait(1).to({rotation:61.9},0).wait(1).to({rotation:67.5},0).wait(1).to({rotation:73.1},0).wait(1).to({rotation:78.8},0).wait(1).to({rotation:84.4},0).wait(1).to({rotation:90},0).wait(1).to({rotation:95.6,y:-0.1},0).wait(1).to({rotation:101.3},0).wait(1).to({rotation:106.9},0).wait(1).to({rotation:112.5},0).wait(1).to({rotation:118.1},0).wait(1).to({rotation:123.8},0).wait(1).to({rotation:129.4},0).wait(1).to({rotation:135},0).wait(1).to({rotation:140.6},0).wait(1).to({rotation:146.3},0).wait(1).to({rotation:151.9},0).wait(1).to({rotation:157.5},0).wait(1).to({rotation:163.1},0).wait(1).to({rotation:168.8},0).wait(1).to({rotation:174.4},0).wait(1).to({rotation:180},0).wait(1).to({rotation:185.6},0).wait(1).to({rotation:191.3},0).wait(1).to({rotation:196.9},0).wait(1).to({rotation:202.5},0).wait(1).to({rotation:208.1},0).wait(1).to({rotation:213.8},0).wait(1).to({rotation:219.4},0).wait(1).to({rotation:225},0).wait(1).to({rotation:230.6},0).wait(1).to({rotation:236.3},0).wait(1).to({rotation:241.9},0).wait(1).to({rotation:247.5},0).wait(1).to({rotation:253.1},0).wait(1).to({rotation:258.8},0).wait(1).to({rotation:264.4},0).wait(1).to({rotation:270,x:0.1,y:0},0).wait(1).to({rotation:275.6,x:0},0).wait(1).to({rotation:281.3},0).wait(1).to({rotation:286.9},0).wait(1).to({rotation:292.5},0).wait(1).to({rotation:298.1},0).wait(1).to({rotation:303.8},0).wait(1).to({rotation:309.4},0).wait(1).to({rotation:315},0).wait(1).to({rotation:320.6},0).wait(1).to({rotation:326.3},0).wait(1).to({rotation:331.9},0).wait(1).to({rotation:337.5},0).wait(1).to({rotation:343.1},0).wait(1).to({rotation:348.8},0).wait(1).to({rotation:354.4},0).wait(1).to({rotation:360},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.9,-37.5,109.9,75);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ32();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:3.3},0).wait(1).to({rotation:6.5},0).wait(1).to({rotation:9.8},0).wait(1).to({rotation:13},0).wait(1).to({rotation:16.2},0).wait(1).to({rotation:19.5},0).wait(1).to({rotation:22.6},0).wait(1).to({rotation:25.8},0).wait(1).to({rotation:29},0).wait(1).to({rotation:32.1},0).wait(1).to({rotation:35.3},0).wait(1).to({rotation:38.4},0).wait(1).to({rotation:41.5},0).wait(1).to({rotation:44.6},0).wait(1).to({rotation:47.6},0).wait(1).to({rotation:50.7},0).wait(1).to({rotation:53.7},0).wait(1).to({rotation:56.7},0).wait(1).to({rotation:59.8},0).wait(1).to({rotation:62.8},0).wait(1).to({rotation:65.7},0).wait(1).to({rotation:68.7},0).wait(1).to({rotation:71.6},0).wait(1).to({rotation:74.6},0).wait(1).to({rotation:77.5},0).wait(1).to({rotation:80.4},0).wait(1).to({rotation:83.3},0).wait(1).to({rotation:86.2},0).wait(1).to({rotation:89},0).wait(1).to({rotation:91.9},0).wait(1).to({rotation:94.7},0).wait(1).to({rotation:97.5},0).wait(1).to({rotation:100.3},0).wait(1).to({rotation:103.1},0).wait(1).to({rotation:105.9},0).wait(1).to({rotation:108.6},0).wait(1).to({rotation:111.4},0).wait(1).to({rotation:114.1},0).wait(1).to({rotation:116.8},0).wait(1).to({rotation:119.5},0).wait(1).to({rotation:122.2},0).wait(1).to({rotation:124.8},0).wait(1).to({rotation:127.5},0).wait(1).to({rotation:130.1},0).wait(1).to({rotation:132.7},0).wait(1).to({rotation:135.3},0).wait(1).to({rotation:137.9},0).wait(1).to({rotation:140.5},0).wait(1).to({rotation:143.1},0).wait(1).to({rotation:145.6},0).wait(1).to({rotation:148.1},0).wait(1).to({rotation:150.7},0).wait(1).to({rotation:153.2},0).wait(1).to({rotation:155.6},0).wait(1).to({rotation:158.1},0).wait(1).to({rotation:160.6},0).wait(1).to({rotation:163},0).wait(1).to({rotation:165.4},0).wait(1).to({rotation:167.8},0).wait(1).to({rotation:170.2},0).wait(1).to({rotation:172.6},0).wait(1).to({rotation:175},0).wait(1).to({rotation:177.3},0).wait(1).to({rotation:179.7},0).wait(1).to({rotation:182},0).wait(1).to({rotation:184.3},0).wait(1).to({rotation:186.6},0).wait(1).to({rotation:188.9},0).wait(1).to({rotation:191.1},0).wait(1).to({rotation:193.4},0).wait(1).to({rotation:195.6},0).wait(1).to({rotation:197.8},0).wait(1).to({rotation:200},0).wait(1).to({rotation:202.2},0).wait(1).to({rotation:204.4},0).wait(1).to({rotation:206.5},0).wait(1).to({rotation:208.6},0).wait(1).to({rotation:210.8},0).wait(1).to({rotation:212.9},0).wait(1).to({rotation:215},0).wait(1).to({rotation:217.1},0).wait(1).to({rotation:219.1},0).wait(1).to({rotation:221.2},0).wait(1).to({rotation:223.2},0).wait(1).to({rotation:225.2},0).wait(1).to({rotation:227.2},0).wait(1).to({rotation:229.2},0).wait(1).to({rotation:231.2},0).wait(1).to({rotation:233.1},0).wait(1).to({rotation:235.1},0).wait(1).to({rotation:237},0).wait(1).to({rotation:238.9},0).wait(1).to({rotation:240.8},0).wait(1).to({rotation:242.7},0).wait(1).to({rotation:244.6},0).wait(1).to({rotation:246.4},0).wait(1).to({rotation:248.3},0).wait(1).to({rotation:250.1},0).wait(1).to({rotation:251.9},0).wait(1).to({rotation:253.7},0).wait(1).to({rotation:255.5},0).wait(1).to({rotation:257.2},0).wait(1).to({rotation:259},0).wait(1).to({rotation:260.7},0).wait(1).to({rotation:262.4},0).wait(1).to({rotation:264.2},0).wait(1).to({rotation:265.8},0).wait(1).to({rotation:267.5},0).wait(1).to({rotation:269.2},0).wait(1).to({rotation:270.8},0).wait(1).to({rotation:272.4},0).wait(1).to({rotation:274.1},0).wait(1).to({rotation:275.7},0).wait(1).to({rotation:277.2},0).wait(1).to({rotation:278.8},0).wait(1).to({rotation:280.4},0).wait(1).to({rotation:281.9},0).wait(1).to({rotation:283.4},0).wait(1).to({rotation:284.9},0).wait(1).to({rotation:286.4},0).wait(1).to({rotation:287.9},0).wait(1).to({rotation:289.4},0).wait(1).to({rotation:290.8},0).wait(1).to({rotation:292.3},0).wait(1).to({rotation:293.7},0).wait(1).to({rotation:295.1},0).wait(1).to({rotation:296.5},0).wait(1).to({rotation:297.8},0).wait(1).to({rotation:299.2},0).wait(1).to({rotation:300.5},0).wait(1).to({rotation:301.9},0).wait(1).to({rotation:303.2},0).wait(1).to({rotation:304.5},0).wait(1).to({rotation:305.8},0).wait(1).to({rotation:307},0).wait(1).to({rotation:308.3},0).wait(1).to({rotation:309.5},0).wait(1).to({rotation:310.8},0).wait(1).to({rotation:312},0).wait(1).to({rotation:313.2},0).wait(1).to({rotation:314.3},0).wait(1).to({rotation:315.5},0).wait(1).to({rotation:316.6},0).wait(1).to({rotation:317.8},0).wait(1).to({rotation:318.9},0).wait(1).to({rotation:320},0).wait(1).to({rotation:321.1},0).wait(1).to({rotation:322.2},0).wait(1).to({rotation:323.2},0).wait(1).to({rotation:324.3},0).wait(1).to({rotation:325.3},0).wait(1).to({rotation:326.3},0).wait(1).to({rotation:327.3},0).wait(1).to({rotation:328.3},0).wait(1).to({rotation:329.3},0).wait(1).to({rotation:330.2},0).wait(1).to({rotation:331.1},0).wait(1).to({rotation:332.1},0).wait(1).to({rotation:333},0).wait(1).to({rotation:333.9},0).wait(1).to({rotation:334.7},0).wait(1).to({rotation:335.6},0).wait(1).to({rotation:336.5},0).wait(1).to({rotation:337.3},0).wait(1).to({rotation:338.1},0).wait(1).to({rotation:338.9},0).wait(1).to({rotation:339.7},0).wait(1).to({rotation:340.5},0).wait(1).to({rotation:341.2},0).wait(1).to({rotation:342},0).wait(1).to({rotation:342.7},0).wait(1).to({rotation:343.4},0).wait(1).to({rotation:344.1},0).wait(1).to({rotation:344.8},0).wait(1).to({rotation:345.5},0).wait(1).to({rotation:346.1},0).wait(1).to({rotation:346.8},0).wait(1).to({rotation:347.4},0).wait(1).to({rotation:348},0).wait(1).to({rotation:348.6},0).wait(1).to({rotation:349.2},0).wait(1).to({rotation:349.7},0).wait(1).to({rotation:350.3},0).wait(1).to({rotation:350.8},0).wait(1).to({rotation:351.3},0).wait(1).to({rotation:351.8},0).wait(1).to({rotation:352.3},0).wait(1).to({rotation:352.8},0).wait(1).to({rotation:353.2},0).wait(1).to({rotation:353.7},0).wait(1).to({rotation:354.1},0).wait(1).to({rotation:354.5},0).wait(1).to({rotation:354.9},0).wait(1).to({rotation:355.3},0).wait(1).to({rotation:355.7},0).wait(1).to({rotation:356},0).wait(1).to({rotation:356.4},0).wait(1).to({rotation:356.7},0).wait(1).to({rotation:357},0).wait(1).to({rotation:357.3},0).wait(1).to({rotation:357.6},0).wait(1).to({rotation:357.8},0).wait(1).to({rotation:358.1},0).wait(1).to({rotation:358.3},0).wait(1).to({rotation:358.5},0).wait(1).to({rotation:358.7},0).wait(1).to({rotation:358.9},0).wait(1).to({rotation:359.1},0).wait(1).to({rotation:359.2},0).wait(1).to({rotation:359.4},0).wait(1).to({rotation:359.5},0).wait(1).to({rotation:359.6},0).wait(1).to({rotation:359.7},0).wait(1).to({rotation:359.8},0).wait(1).to({rotation:359.9},0).wait(2).to({rotation:360},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.2,-29.8,94.5,59.6);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ31();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:3.4},0).wait(1).to({rotation:6.8},0).wait(1).to({rotation:10.1},0).wait(1).to({rotation:13.5},0).wait(1).to({rotation:16.9},0).wait(1).to({rotation:20.2},0).wait(1).to({rotation:23.6},0).wait(1).to({rotation:26.9},0).wait(1).to({rotation:30.2},0).wait(1).to({rotation:33.6},0).wait(1).to({rotation:36.9},0).wait(1).to({rotation:40.2},0).wait(1).to({rotation:43.5},0).wait(1).to({rotation:46.8},0).wait(1).to({rotation:50.1},0).wait(1).to({rotation:53.4},0).wait(1).to({rotation:56.7},0).wait(1).to({rotation:60},0).wait(1).to({rotation:63.3},0).wait(1).to({rotation:66.5},0).wait(1).to({rotation:69.8},0).wait(1).to({rotation:73.1},0).wait(1).to({rotation:76.3},0).wait(1).to({rotation:79.6},0).wait(1).to({rotation:82.8},0).wait(1).to({rotation:86},0).wait(1).to({rotation:89.3},0).wait(1).to({rotation:92.5},0).wait(1).to({rotation:95.7},0).wait(1).to({rotation:98.9},0).wait(1).to({rotation:102.1},0).wait(1).to({rotation:105.3},0).wait(1).to({rotation:108.5},0).wait(1).to({rotation:111.7},0).wait(1).to({rotation:114.8},0).wait(1).to({rotation:118},0).wait(1).to({rotation:121.2},0).wait(1).to({rotation:124.3},0).wait(1).to({rotation:127.5},0).wait(1).to({rotation:130.6},0).wait(1).to({rotation:133.8},0).wait(1).to({rotation:136.9},0).wait(1).to({rotation:140.1},0).wait(1).to({rotation:143.2},0).wait(1).to({rotation:146.3},0).wait(1).to({rotation:149.4},0).wait(1).to({rotation:152.5},0).wait(1).to({rotation:155.6},0).wait(1).to({rotation:158.7},0).wait(1).to({rotation:161.8},0).wait(1).to({rotation:164.9},0).wait(1).to({rotation:167.9},0).wait(1).to({rotation:171},0).wait(1).to({rotation:174.1},0).wait(1).to({rotation:177.1},0).wait(1).to({rotation:180.2},0).wait(1).to({rotation:183.2},0).wait(1).to({rotation:186.3},0).wait(1).to({rotation:189.3},0).wait(1).to({rotation:192.3},0).wait(1).to({rotation:195.3},0).wait(1).to({rotation:198.3},0).wait(1).to({rotation:201.3},0).wait(1).to({rotation:204.3},0).wait(1).to({rotation:207.3},0).wait(1).to({rotation:210.3},0).wait(1).to({rotation:213.3},0).wait(1).to({rotation:216.3},0).wait(1).to({rotation:219.3},0).wait(1).to({rotation:222.2},0).wait(1).to({rotation:225.2},0).wait(1).to({rotation:228.1},0).wait(1).to({rotation:231.1},0).wait(1).to({rotation:234},0).wait(1).to({rotation:237},0).wait(1).to({rotation:239.9},0).wait(1).to({rotation:242.8},0).wait(1).to({rotation:245.7},0).wait(1).to({rotation:248.6},0).wait(1).to({rotation:251.5},0).wait(1).to({rotation:254.4},0).wait(1).to({rotation:257.3},0).wait(1).to({rotation:260.2},0).wait(1).to({rotation:263.1},0).wait(1).to({rotation:266},0).wait(1).to({rotation:268.8},0).wait(1).to({rotation:271.7},0).wait(1).to({rotation:274.5},0).wait(1).to({rotation:277.4},0).wait(1).to({rotation:280.2},0).wait(1).to({rotation:283.1},0).wait(1).to({rotation:285.9},0).wait(1).to({rotation:288.7},0).wait(1).to({rotation:291.5},0).wait(1).to({rotation:294.3},0).wait(1).to({rotation:297.2},0).wait(1).to({rotation:300},0).wait(1).to({rotation:302.7},0).wait(1).to({rotation:305.5},0).wait(1).to({rotation:308.3},0).wait(1).to({rotation:311.1},0).wait(1).to({rotation:313.9},0).wait(1).to({rotation:316.6},0).wait(1).to({rotation:319.4},0).wait(1).to({rotation:322.1},0).wait(1).to({rotation:324.9},0).wait(1).to({rotation:327.6},0).wait(1).to({rotation:330.3},0).wait(1).to({rotation:333.1},0).wait(1).to({rotation:335.8},0).wait(1).to({rotation:338.5},0).wait(1).to({rotation:341.2},0).wait(1).to({rotation:343.9},0).wait(1).to({rotation:346.6},0).wait(1).to({rotation:349.3},0).wait(1).to({rotation:352},0).wait(1).to({rotation:354.7},0).wait(1).to({rotation:357.3},0).wait(1).to({rotation:360},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.8,-43,87.7,86);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ30();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:3.8},0).wait(1).to({rotation:7.7},0).wait(1).to({rotation:11.5},0).wait(1).to({rotation:15.3},0).wait(1).to({rotation:19.1},0).wait(1).to({rotation:23},0).wait(1).to({rotation:26.8},0).wait(1).to({rotation:30.6},0).wait(1).to({rotation:34.5},0).wait(1).to({rotation:38.3},0).wait(1).to({rotation:42.1},0).wait(1).to({rotation:46},0).wait(1).to({rotation:49.8},0).wait(1).to({rotation:53.6},0).wait(1).to({rotation:57.4},0).wait(1).to({rotation:61.3},0).wait(1).to({rotation:65.1},0).wait(1).to({rotation:68.9},0).wait(1).to({rotation:72.8},0).wait(1).to({rotation:76.6},0).wait(1).to({rotation:80.4},0).wait(1).to({rotation:84.3},0).wait(1).to({rotation:88.1},0).wait(1).to({rotation:91.9},0).wait(1).to({rotation:95.7},0).wait(1).to({rotation:99.6},0).wait(1).to({rotation:103.4},0).wait(1).to({rotation:107.2},0).wait(1).to({rotation:111.1},0).wait(1).to({rotation:114.9},0).wait(1).to({rotation:118.7},0).wait(1).to({rotation:122.6},0).wait(1).to({rotation:126.4},0).wait(1).to({rotation:130.2},0).wait(1).to({rotation:134},0).wait(1).to({rotation:137.9},0).wait(1).to({rotation:141.7},0).wait(1).to({rotation:145.5},0).wait(1).to({rotation:149.4},0).wait(1).to({rotation:153.2},0).wait(1).to({rotation:157},0).wait(1).to({rotation:160.9},0).wait(1).to({rotation:164.7},0).wait(1).to({rotation:168.5},0).wait(1).to({rotation:172.3},0).wait(1).to({rotation:176.2},0).wait(1).to({rotation:180},0).wait(1).to({rotation:183.8},0).wait(1).to({rotation:187.7},0).wait(1).to({rotation:191.5},0).wait(1).to({rotation:195.3},0).wait(1).to({rotation:199.1},0).wait(1).to({rotation:203},0).wait(1).to({rotation:206.8},0).wait(1).to({rotation:210.6},0).wait(1).to({rotation:214.5},0).wait(1).to({rotation:218.3},0).wait(1).to({rotation:222.1},0).wait(1).to({rotation:226},0).wait(1).to({rotation:229.8},0).wait(1).to({rotation:233.6},0).wait(1).to({rotation:237.4},0).wait(1).to({rotation:241.3},0).wait(1).to({rotation:245.1},0).wait(1).to({rotation:248.9},0).wait(1).to({rotation:252.8},0).wait(1).to({rotation:256.6},0).wait(1).to({rotation:260.4},0).wait(1).to({rotation:264.3},0).wait(1).to({rotation:268.1},0).wait(1).to({rotation:271.9},0).wait(1).to({rotation:275.7},0).wait(1).to({rotation:279.6},0).wait(1).to({rotation:283.4},0).wait(1).to({rotation:287.2},0).wait(1).to({rotation:291.1},0).wait(1).to({rotation:294.9},0).wait(1).to({rotation:298.7},0).wait(1).to({rotation:302.6},0).wait(1).to({rotation:306.4},0).wait(1).to({rotation:310.2},0).wait(1).to({rotation:314},0).wait(1).to({rotation:317.9},0).wait(1).to({rotation:321.7},0).wait(1).to({rotation:325.5},0).wait(1).to({rotation:329.4},0).wait(1).to({rotation:333.2},0).wait(1).to({rotation:337},0).wait(1).to({rotation:340.9},0).wait(1).to({rotation:344.7},0).wait(1).to({rotation:348.5},0).wait(1).to({rotation:352.3},0).wait(1).to({rotation:356.2},0).wait(1).to({rotation:360},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.2,-88.5,112.4,177.1);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 29
	this.instance = new lib.Символ29();
	this.instance.parent = this;
	this.instance.setTransform(253,-25);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(21).to({_off:false},0).to({x:313,y:270},14).to({x:173,y:722.5},28).to({x:253,y:1135.5},24).wait(1));

	// Символ 28
	this.instance_1 = new lib.Символ28();
	this.instance_1.parent = this;
	this.instance_1.setTransform(92.3,-7.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(13).to({_off:false},0).to({x:152.3,y:287.3},14).to({x:12.3,y:739.8},28).to({x:92.3,y:1152.8},24).to({_off:true},1).wait(8));

	// Символ 27
	this.instance_2 = new lib.Символ27();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-80.1,-12.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).to({x:-20.1,y:282.5},14).to({x:-160.1,y:735},28).to({x:-80.1,y:1148},24).to({_off:true},1).wait(15));

	// Символ 26
	this.instance_3 = new lib.Символ26();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-251.7,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:-191.7,y:295.1},14).to({x:-331.7,y:747.5},28).to({x:-251.7,y:1160.6},24).to({_off:true},1).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-307.9,-88.5,112.4,177.1);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// dol4.png
	this.instance = new lib.Символ35();
	this.instance.parent = this;
	this.instance.setTransform(250,-4.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40).to({_off:false},0).to({x:374.5,y:481.4},24).to({x:38.3,y:874.1},35).to({x:250,y:1145.8},20).wait(1));

	// dol3.png
	this.instance_1 = new lib.Символ37();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-253.4,-1.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30).to({_off:false},0).to({x:-128.9,y:484.6},24).to({x:-465.1,y:877.3},35).to({x:-253.4,y:1149},20).to({_off:true},1).wait(10));

	// dol2.png
	this.instance_2 = new lib.Символ40();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-65,0);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24).to({_off:false},0).to({x:59.4,y:486.1},24).to({x:-276.8,y:878.8},35).to({x:-65,y:1150.5},20).to({_off:true},1).wait(16));

	// dol1.png
	this.instance_3 = new lib.Символ42();
	this.instance_3.parent = this;
	this.instance_3.setTransform(66.7,-5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(17).to({_off:false},0).to({x:191.1,y:481.1},24).to({x:-145.1,y:873.8},35).to({x:66.7,y:1145.5},20).to({_off:true},1).wait(23));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// dol4.png
	this.instance = new lib.Символ44();
	this.instance.parent = this;
	this.instance.setTransform(-60.9,13.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(16).to({_off:false},0).to({x:-220.9,y:371.5},35).to({x:99.1,y:915.3},41).to({x:-60.9,y:1193.9},33).to({_off:true},1).wait(16).to({_off:false,y:13.3},0).to({x:-220.9,y:371.5},35).to({x:99.1,y:915.3},41).to({x:-60.9,y:1193.9},33).wait(1));

	// dol4.png
	this.instance_1 = new lib.Символ46();
	this.instance_1.parent = this;
	this.instance_1.setTransform(75.7,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-84.3,y:358.7},35).to({x:235.7,y:902.5},56).to({x:75.7,y:1181.1},33).wait(2).to({y:0.5},0).to({x:-84.3,y:358.7},35).to({x:235.7,y:902.5},56).to({x:75.7,y:1181.1},33).wait(2));

	// dol2.png
	this.instance_2 = new lib.Символ48();
	this.instance_2.parent = this;
	this.instance_2.setTransform(243,0);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(85).to({_off:false},0).to({x:83,y:358.2},39).to({x:403,y:902.1},56).to({x:243,y:1180.7},27).to({_off:true},1).wait(44));

	// dol1.png
	this.instance_3 = new lib.Символ50();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-244.2,0.9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(69).to({_off:false},0).to({x:-404.2,y:359.1},39).to({x:-84.2,y:903},56).to({x:-244.2,y:1181.6},27).to({_off:true},1).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(31.8,-42.5,87.7,86);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// dol4.png - копия: 2
	this.instance = new lib.Символ25();
	this.instance.parent = this;
	this.instance.setTransform(-27,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// dol4.png - копия
	this.instance_1 = new lib.Символ24();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-29.7,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// dol4.png
	this.instance_2 = new lib.Символ23();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-35.8,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(-335,-88.5,418.7,177.1), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ21();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.87,scaleY:0.87},11,cjs.Ease.get(-1)).to({scaleX:0.71,scaleY:0.71},13,cjs.Ease.get(1)).to({scaleX:0.85,scaleY:0.85},12,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},13,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87.1,-87.1,174.3,174.3);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ20();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:3},0).wait(1).to({rotation:6.1},0).wait(1).to({rotation:9.1},0).wait(1).to({rotation:12.1},0).wait(1).to({rotation:15.1},0).wait(1).to({rotation:18.2},0).wait(1).to({rotation:21.2},0).wait(1).to({rotation:24.2},0).wait(1).to({rotation:27.2},0).wait(1).to({rotation:30.3},0).wait(1).to({rotation:33.3},0).wait(1).to({rotation:36.3},0).wait(1).to({rotation:39.3},0).wait(1).to({rotation:42.4},0).wait(1).to({rotation:45.4},0).wait(1).to({rotation:48.4},0).wait(1).to({rotation:51.4},0).wait(1).to({rotation:54.5},0).wait(1).to({rotation:57.5},0).wait(1).to({rotation:60.5},0).wait(1).to({rotation:63.5},0).wait(1).to({rotation:66.6},0).wait(1).to({rotation:69.6},0).wait(1).to({rotation:72.6},0).wait(1).to({rotation:75.6},0).wait(1).to({rotation:78.7},0).wait(1).to({rotation:81.7},0).wait(1).to({rotation:84.7},0).wait(1).to({rotation:87.7},0).wait(1).to({rotation:90.8},0).wait(1).to({rotation:93.8},0).wait(1).to({rotation:96.8},0).wait(1).to({rotation:99.8},0).wait(1).to({rotation:102.9},0).wait(1).to({rotation:105.9},0).wait(1).to({rotation:108.9},0).wait(1).to({rotation:111.9},0).wait(1).to({rotation:115},0).wait(1).to({rotation:118},0).wait(1).to({rotation:121},0).wait(1).to({rotation:124},0).wait(1).to({rotation:127.1},0).wait(1).to({rotation:130.1},0).wait(1).to({rotation:133.1},0).wait(1).to({rotation:136.1},0).wait(1).to({rotation:139.2},0).wait(1).to({rotation:142.2},0).wait(1).to({rotation:145.2},0).wait(1).to({rotation:148.2},0).wait(1).to({rotation:151.3},0).wait(1).to({rotation:154.3},0).wait(1).to({rotation:157.3},0).wait(1).to({rotation:160.3},0).wait(1).to({rotation:163.4},0).wait(1).to({rotation:166.4},0).wait(1).to({rotation:169.4},0).wait(1).to({rotation:172.4},0).wait(1).to({rotation:175.5},0).wait(1).to({rotation:178.5},0).wait(1).to({rotation:181.5},0).wait(1).to({rotation:184.5},0).wait(1).to({rotation:187.6},0).wait(1).to({rotation:190.6},0).wait(1).to({rotation:193.6},0).wait(1).to({rotation:196.6},0).wait(1).to({rotation:199.7},0).wait(1).to({rotation:202.7},0).wait(1).to({rotation:205.7},0).wait(1).to({rotation:208.7},0).wait(1).to({rotation:211.8},0).wait(1).to({rotation:214.8},0).wait(1).to({rotation:217.8},0).wait(1).to({rotation:220.8},0).wait(1).to({rotation:223.9},0).wait(1).to({rotation:226.9},0).wait(1).to({rotation:229.9},0).wait(1).to({rotation:232.9},0).wait(1).to({rotation:236},0).wait(1).to({rotation:239},0).wait(1).to({rotation:242},0).wait(1).to({rotation:245},0).wait(1).to({rotation:248.1},0).wait(1).to({rotation:251.1},0).wait(1).to({rotation:254.1},0).wait(1).to({rotation:257.1},0).wait(1).to({rotation:260.2},0).wait(1).to({rotation:263.2},0).wait(1).to({rotation:266.2},0).wait(1).to({rotation:269.2},0).wait(1).to({rotation:272.3},0).wait(1).to({rotation:275.3},0).wait(1).to({rotation:278.3},0).wait(1).to({rotation:281.3},0).wait(1).to({rotation:284.4},0).wait(1).to({rotation:287.4},0).wait(1).to({rotation:290.4},0).wait(1).to({rotation:293.4},0).wait(1).to({rotation:296.5},0).wait(1).to({rotation:299.5},0).wait(1).to({rotation:302.5},0).wait(1).to({rotation:305.5},0).wait(1).to({rotation:308.6},0).wait(1).to({rotation:311.6},0).wait(1).to({rotation:314.6},0).wait(1).to({rotation:317.6},0).wait(1).to({rotation:320.7},0).wait(1).to({rotation:323.7},0).wait(1).to({rotation:326.7},0).wait(1).to({rotation:329.7},0).wait(1).to({rotation:332.8},0).wait(1).to({rotation:335.8},0).wait(1).to({rotation:338.8},0).wait(1).to({rotation:341.8},0).wait(1).to({rotation:344.9},0).wait(1).to({rotation:347.9},0).wait(1).to({rotation:350.9},0).wait(1).to({rotation:353.9},0).wait(1).to({rotation:357},0).wait(1).to({rotation:360},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87.1,-87.1,174.3,174.3);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ51();
	this.instance.parent = this;
	this.instance.setTransform(0,-91.1,1,1.083,0,0,0,0,-0.1);
	this.instance.alpha = 0.629;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(-815,-169,1630,156), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt1.png
	this.instance = new lib.Символ14();
	this.instance.parent = this;
	this.instance.setTransform(0,29.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:-6.1},0).to({y:29.5,alpha:1},7,cjs.Ease.get(1)).wait(24).to({rotation:2.5,y:21.6},3).to({rotation:0,y:111.8,alpha:0},7).to({_off:true},1).wait(37));

	// txt.png - копия
	this.instance_1 = new lib.Символ13();
	this.instance_1.parent = this;
	this.instance_1.setTransform(11.4,-27.2);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({y:-62.7},0).to({y:-27.2,alpha:1},7,cjs.Ease.get(1)).wait(20).to({rotation:-2.2,y:-35.1},3).to({rotation:0,y:55.2,alpha:0},7).to({_off:true},1).wait(37));

	// txt2.png
	this.instance_2 = new lib.Символ38();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0.2,61.8);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(35).to({y:-52.7},0).to({y:11.7,alpha:1},5).to({y:-0.2},2).wait(27).to({y:-16},3).to({y:32.5,alpha:0},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-217,-55.9,434,142.5);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ruka_p.png
	this.instance = new lib.Символ8();
	this.instance.parent = this;
	this.instance.setTransform(1.5,14);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40));

	// palzi_p.png
	this.instance_1 = new lib.Символ9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(20.4,-11.9,1,1,0,0,0,12.4,23.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.94,scaleY:0.95,rotation:-4.3},9,cjs.Ease.get(-1)).to({regX:12.6,scaleX:0.86,scaleY:0.89,rotation:-9.2,x:20.6},10,cjs.Ease.get(1)).to({regX:12.7,scaleX:0.93,scaleY:0.95,rotation:-4.5,x:20.7},10,cjs.Ease.get(-1)).to({regX:12.4,scaleX:1,scaleY:1,rotation:0,x:20.4},10,cjs.Ease.get(1)).wait(1));

	// b_palez_p.png
	this.instance_2 = new lib.Символ11();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-16.4,-7.7,1,1,0,0,0,-1.4,14);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:7,y:-7.6},9,cjs.Ease.get(-1)).to({regX:-1.6,regY:13.8,scaleY:0.83,rotation:15,x:-16.5,y:-7.9},10,cjs.Ease.get(1)).to({scaleY:1,rotation:7.3,y:-7.8},10,cjs.Ease.get(-1)).to({regX:-1.4,regY:14,rotation:0,x:-16.4,y:-7.7},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24,-61,48,122);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// palzi_L.png
	this.instance = new lib.Символ6();
	this.instance.parent = this;
	this.instance.setTransform(-19.4,-5.6,1,1,0,0,0,-11.7,23.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.97,scaleY:0.97,rotation:7},9,cjs.Ease.get(-1)).to({regX:-11.8,scaleX:0.95,scaleY:0.95,rotation:15,x:-19.5,y:-5.7},10,cjs.Ease.get(1)).to({scaleX:0.97,scaleY:0.97,rotation:7.3,y:-5.6},10,cjs.Ease.get(-1)).to({regX:-11.7,scaleX:1,scaleY:1,rotation:0,x:-19.4},10,cjs.Ease.get(1)).wait(1));

	// ruka_L.png
	this.instance_1 = new lib.Символ7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(2,12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40));

	// b_palez_L.png
	this.instance_2 = new lib.Символ5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(23.3,2.5,1,1,0,0,0,2.3,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:15.9,rotation:-5},9,cjs.Ease.get(-1)).to({rotation:-11,y:2.4},10,cjs.Ease.get(1)).to({regX:2.4,rotation:-5.3,x:23.5,y:2.6},10,cjs.Ease.get(-1)).to({regX:2.3,regY:16,rotation:0,x:23.3,y:2.5},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.7,-52.3,55.7,103.9);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ruka_p.png
	this.instance = new lib.Символ10();
	this.instance.parent = this;
	this.instance.setTransform(69.3,42,1,1,0,0,0,10.3,56);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:10.4,regY:55.9,rotation:-7,x:69.4},9,cjs.Ease.get(-1)).to({rotation:-15,y:47.2},10,cjs.Ease.get(1)).to({rotation:-7.3,y:42.1},10,cjs.Ease.get(-1)).to({regX:10.3,regY:56,rotation:0,x:69.3,y:42},10,cjs.Ease.get(1)).wait(1));

	// ruka_L.png
	this.instance_1 = new lib.Символ3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-43.7,35.9,1,1,0,0,0,-5.7,45.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:-5.8,rotation:7,x:-43.8,y:41.2},9,cjs.Ease.get(-1)).to({rotation:15},10,cjs.Ease.get(1)).to({rotation:7.3,x:-43.7},10,cjs.Ease.get(-1)).to({regX:-5.7,rotation:0,y:35.9},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65.7,-75,148.7,122);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ12();
	this.instance.parent = this;
	this.instance.setTransform(0,-0.6,1.398,1.398,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(-303.3,-78.6,606.7,199.1), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ17();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-232.8},25,cjs.Ease.get(-1)).to({x:-503},29,cjs.Ease.get(1)).to({x:-246.9},28,cjs.Ease.get(-1)).to({x:0},27,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87.1,-87.1,174.3,174.3);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ18();
	this.instance.parent = this;
	this.instance.setTransform(0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:34.7},21,cjs.Ease.get(-1)).to({y:72.4},23,cjs.Ease.get(1)).to({y:35.5},23,cjs.Ease.get(-1)).to({y:0.2},22,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87,-87,174.3,174.3);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.parent = this;
	this.instance.setTransform(-55.2,15,1.3,1.3,0,0,0,8,-2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:7.9,x:-82.3},18,cjs.Ease.get(-1)).to({regX:8,x:-188.6},22,cjs.Ease.get(1)).to({regX:7.9,x:-70.9},18,cjs.Ease.get(-1)).to({x:-25.6},20,cjs.Ease.get(1)).to({x:9.1},20,cjs.Ease.get(-1)).to({regX:8,x:113.1},20,cjs.Ease.get(1)).to({x:-13.1},20,cjs.Ease.get(-1)).to({x:-55.2},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-151,-79.2,193.2,158.5);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.Символ16();
	this.instance.parent = this;
	this.instance.setTransform(150.9,-236.2,1.022,1.022,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 5
	this.instance_1 = new lib.Символ22();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-19.4,-738.8,0.862,0.862,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 3
	this.instance_2 = new lib.Символ4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-37.8,3.5,1.092,1.092,0,0,0,-49.6,57.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(-308.1,-815,548.2,842.3), null);


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
			
			_this.man.x = w < h ? iw / 2 : iw * 0.33;
		    _this.man.y = w < h ? ((w < h && w > 599) ? ih * 1.1 : ih) : ih * 1.1;
			
			_this.txt.x = w < h ? iw / 2 : ((w > 950) ? iw * 0.75 : iw * 0.77);
		    _this.txt.y = w < h ? ih * 0.2 : ih * 0.5;
			
			_this.dark.x = iw * 0.5;
			_this.dark.y = w < h ? 0 : ih * 2;
		    
			/* Функция ресайза */
		    function setScale(scale) {
				
				_this.man.scaleX = _this.man.scaleY = ((w < h) ? scale * 0.8 : scale);
				_this.txt.scaleX = _this.txt.scaleY = ((w < h || w > h && w > 1023) ? scale * 0.55 : scale);
				_this.dark.scaleX = _this.dark.scaleY = scale;
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

	// Слой 19
	this.txt = new lib.Символ19();
	this.txt.parent = this;
	this.txt.setTransform(510,382,1,1,0,0,0,-2,-1);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	// Слой 1
	this.dark = new lib.Символ15();
	this.dark.parent = this;
	this.dark.setTransform(471.9,-128.5,1,1,0,0,0,0,-111.5);

	this.timeline.addTween(cjs.Tween.get(this.dark).wait(1));

	// tors.png
	this.man = new lib.Символ1();
	this.man.parent = this;
	this.man.setTransform(792.3,318,1,1,0,0,0,-31.6,15.2);

	this.timeline.addTween(cjs.Tween.get(this.man).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(168.9,-128.2,1630,1015.8);
// library properties:
lib.properties = {
	width: 1024,
	height: 768,
	fps: 30,
	color: "#FFFFFF",
	opacity: 0.00,
	webfonts: {},
	manifest: [
		{src:"images/b_palez_L.png", id:"b_palez_L"},
		{src:"images/b_palez_p.png", id:"b_palez_p"},
		{src:"images/dark.png", id:"dark"},
		{src:"images/dol1.png", id:"dol1"},
		{src:"images/dol2.png", id:"dol2"},
		{src:"images/dol3.png", id:"dol3"},
		{src:"images/dol4.png", id:"dol4"},
		{src:"images/palzi_L.png", id:"palzi_L"},
		{src:"images/palzi_p.png", id:"palzi_p"},
		{src:"images/ruka_L.png", id:"ruka_L"},
		{src:"images/ruka_p.png", id:"ruka_p"},
		{src:"images/targ.png", id:"targ"},
		{src:"images/txt.png", id:"txt"},
		{src:"images/txt1.png", id:"txt1"},
		{src:"images/txt2.png", id:"txt2"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;