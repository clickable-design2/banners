
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
(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,405);
(lib.biletinakubok = function() {
	this.initialize(img.biletinakubok);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,267,46);
(lib.btn1 = function() {
	this.initialize(img.btn1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,46);
(lib.dengi = function() {
	this.initialize(img.dengi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,252,59);
(lib.doll = function() {
	this.initialize(img.doll);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,175,161);
(lib.doll2 = function() {
	this.initialize(img.doll2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,168);
(lib.hocheshpoluchit = function() {
	this.initialize(img.hocheshpoluchit);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,331,30);
(lib.iph = function() {
	this.initialize(img.iph);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,146);
(lib.iph2 = function() {
	this.initialize(img.iph2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,75,150);
(lib.iphone7 = function() {
	this.initialize(img.iphone7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,288,58);
(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,219,66);
(lib.mex = function() {
	this.initialize(img.mex);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,93,93);
(lib.mexball = function() {
	this.initialize(img.mexball);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,188,185);
(lib.money = function() {
	this.initialize(img.money);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,117,120);
(lib.n1 = function() {
	this.initialize(img.n1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,13,24);
(lib.n2 = function() {
	this.initialize(img.n2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,18,24);
(lib.n3 = function() {
	this.initialize(img.n3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,17,24);
(lib.new_zel = function() {
	this.initialize(img.new_zel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,93,93);
(lib.nzball = function() {
	this.initialize(img.nzball);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,188,185);
(lib.period = function() {
	this.initialize(img.period);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,220,54);
(lib.port = function() {
	this.initialize(img.port);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,93,93);
(lib.portball = function() {
	this.initialize(img.portball);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,188,185);
(lib.proydi = function() {
	this.initialize(img.proydi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,134,38);
(lib.rus = function() {
	this.initialize(img.rus);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,93,93);
(lib.rusball = function() {
	this.initialize(img.rusball);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,188,185);
(lib.stavka1 = function() {
	this.initialize(img.stavka1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,266,58);
(lib.stavka2 = function() {
	this.initialize(img.stavka2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,191,62);
(lib.stavka3 = function() {
	this.initialize(img.stavka3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,192,43);
(lib.ten = function() {
	this.initialize(img.ten);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,122);
(lib.tick = function() {
	this.initialize(img.tick);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,179,150);
(lib.tickets = function() {
	this.initialize(img.tickets);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,94,111);
(lib.tri = function() {
	this.initialize(img.tri);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,28);
(lib.vs = function() {
	this.initialize(img.vs);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,18,11);
(lib.zadaniya = function() {
	this.initialize(img.zadaniya);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,32);// helper functions:
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
(lib.Символ78 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.tickets();
	this.instance.parent = this;
	this.instance.setTransform(57,-32,0.581,0.581);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ78, new cjs.Rectangle(57,-32,54.6,64.5), null);
(lib.Символ77 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.money();
	this.instance.parent = this;
	this.instance.setTransform(-49.8,-18.4,0.634,0.634,-25.5);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ77, new cjs.Rectangle(-49.8,-50.3,99.7,100.6), null);
(lib.Символ76 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.iph2();
	this.instance.parent = this;
	this.instance.setTransform(-7.2,-35.1,0.428,0.428,15);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ76, new cjs.Rectangle(-23.8,-35.1,47.6,70.3), null);
(lib.Символ74 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 2
	this.instance = new lib.stavka3();
	this.instance.parent = this;
	this.instance.setTransform(-118,10);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ74, new cjs.Rectangle(-118,10,192,43), null);
(lib.Символ73 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.stavka2();
	this.instance.parent = this;
	this.instance.setTransform(-150,-13);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ73, new cjs.Rectangle(-150,-13,191,62), null);
(lib.Символ72 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 3
	this.instance = new lib.stavka1();
	this.instance.parent = this;
	this.instance.setTransform(-138,7);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ72, new cjs.Rectangle(-138,7,266,58), null);
(lib.Символ71 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.n3();
	this.instance.parent = this;
	this.instance.setTransform(-4,-5);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ71, new cjs.Rectangle(-4,-5,17,24), null);
(lib.Символ70 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.n2();
	this.instance.parent = this;
	this.instance.setTransform(-4,-5);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ70, new cjs.Rectangle(-4,-5,18,24), null);
(lib.Символ69 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.n1();
	this.instance.parent = this;
	this.instance.setTransform(5,-6);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ69, new cjs.Rectangle(5,-6,13,24), null);
(lib.Символ68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.vs();
	this.instance.parent = this;
	this.instance.setTransform(-9,-6);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ68, new cjs.Rectangle(-9,-6,18,11), null);
(lib.Символ67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.rus();
	this.instance.parent = this;
	this.instance.setTransform(-56,-25,0.547,0.547);
	this.instance_1 = new lib.mex();
	this.instance_1.parent = this;
	this.instance_1.setTransform(6,-25,0.547,0.547);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ67, new cjs.Rectangle(-56,-25,112.9,50.9), null);
(lib.Символ66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.rus();
	this.instance.parent = this;
	this.instance.setTransform(-55.9,-25.4,0.547,0.547);
	this.instance_1 = new lib.port();
	this.instance_1.parent = this;
	this.instance_1.setTransform(5.1,-25.4,0.547,0.547);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ66, new cjs.Rectangle(-55.9,-25.4,111.9,50.9), null);
(lib.Символ65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.rus();
	this.instance.parent = this;
	this.instance.setTransform(-57,-25,0.547,0.547);
	this.instance_1 = new lib.new_zel();
	this.instance_1.parent = this;
	this.instance_1.setTransform(5,-25,0.547,0.547);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ65, new cjs.Rectangle(-57,-25,112.9,50.9), null);
(lib.Символ63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.btn1();
	this.instance.parent = this;
	this.instance.setTransform(-60.6,-13.9,0.607,0.607);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ63, new cjs.Rectangle(-60.6,-13.9,121.3,27.9), null);
(lib.Символ57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Eg09AM/IAA59MBp7AAAIAAZ9g");
	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ57, new cjs.Rectangle(-339,-83.1,678,166.3), null);
(lib.Символ55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.iph();
	this.instance.parent = this;
	this.instance.setTransform(53,228);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ55, new cjs.Rectangle(53,228,150,146), null);
(lib.Символ54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.tick();
	this.instance.parent = this;
	this.instance.setTransform(-200,254,0.754,0.754);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ54, new cjs.Rectangle(-200,254,134.9,113.1), null);
(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1 - копия
	this.instance = new lib.zadaniya();
	this.instance.parent = this;
	this.instance.setTransform(-73,-14);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ46, new cjs.Rectangle(-73,-14,150,32), null);
(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1 - копия
	this.instance = new lib.tri();
	this.instance.parent = this;
	this.instance.setTransform(-31,-12);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ45, new cjs.Rectangle(-31,-12,64,28), null);
(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1 - копия
	this.instance = new lib.proydi();
	this.instance.parent = this;
	this.instance.setTransform(-65,-17);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ44, new cjs.Rectangle(-65,-17,134,38), null);
(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1 - копия
	this.instance = new lib.biletinakubok();
	this.instance.parent = this;
	this.instance.setTransform(-132,-20);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ39, new cjs.Rectangle(-132,-20,267,46), null);
(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1 - копия
	this.instance = new lib.dengi();
	this.instance.parent = this;
	this.instance.setTransform(-124,-17);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ36, new cjs.Rectangle(-124,-17,252,59), null);
(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1 - копия
	this.instance = new lib.hocheshpoluchit();
	this.instance.parent = this;
	this.instance.setTransform(-159,-9);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ34, new cjs.Rectangle(-159,-9,331,30), null);
(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1 - копия
	this.instance = new lib.iphone7();
	this.instance.parent = this;
	this.instance.setTransform(-142,-16);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ32, new cjs.Rectangle(-142,-16,288,58), null);
(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.ten();
	this.instance.parent = this;
	this.instance.setTransform(-61,-12.1,1,0.198);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ30, new cjs.Rectangle(-61,-12.1,122,24.2), null);
(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.portball();
	this.instance.parent = this;
	this.instance.setTransform(-24,-24,0.259,0.259);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ29, new cjs.Rectangle(-24,-24,48.7,48), null);
(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.ten();
	this.instance.parent = this;
	this.instance.setTransform(-88.6,-20.7,1.453,0.34);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ28, new cjs.Rectangle(-88.6,-20.7,177.3,41.5), null);
(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.ten();
	this.instance.parent = this;
	this.instance.setTransform(-101,-61);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ27, new cjs.Rectangle(-101,-61,122,122), null);
(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.ten();
	this.instance.parent = this;
	this.instance.setTransform(-71,-22,1,0.36);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ26, new cjs.Rectangle(-71,-22,122,43.9), null);
(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.rusball();
	this.instance.parent = this;
	this.instance.setTransform(-28,-28,0.298,0.298);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(-28,-28,56,55.1), null);
(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.mexball();
	this.instance.parent = this;
	this.instance.setTransform(-39,-38.4,0.415,0.415);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(-39,-38.4,78,76.8), null);
(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.nzball();
	this.instance.parent = this;
	this.instance.setTransform(-39,-38.4,0.415,0.415);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(-39,-38.4,78,76.8), null);
(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(-636,-130,1.468,1.468);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(-636,-130,939.5,594.6), null);
(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-151,-145,1.373,1.373);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(-151,-145,300.7,90.7), null);
(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.doll();
	this.instance.parent = this;
	this.instance.setTransform(-48.3,-44.4,0.552,0.552);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(-48.3,-44.4,96.6,88.9), null);
(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.doll2();
	this.instance.parent = this;
	this.instance.setTransform(-69,-46.4,0.552,0.552);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(-69,-46.4,138,92.8), null);
(lib.Символ14_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1 - копия
	this.instance_1 = new lib.period();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-109,-24);
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ14_1, new cjs.Rectangle(-109,-24,220,54), null);
(lib.Символ62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 3
	this.instance = new lib.Символ63();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.181,1.181);
	this.instance.alpha = 0.398;
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));
	// Слой 1
	this.instance_1 = new lib.Символ63();
	this.instance_1.parent = this;
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:1.18,scaleY:1.18},0).wait(1));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.6,-13.9,121.3,27.9);
(lib.Символ60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.Символ62();
	this.instance.parent = this;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ60, new cjs.Rectangle(-71.6,-16.4,143.3,33), null);
(lib.Символ59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.Символ60();
	this.instance.parent = this;
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.13,scaleY:1.13},9,cjs.Ease.get(-1)).to({scaleX:1.27,scaleY:1.27},10,cjs.Ease.get(1)).to({scaleX:1.14,scaleY:1.14},10,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},10,cjs.Ease.get(1)).wait(1));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.6,-13.9,121.3,27.9);
(lib.Символ58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.Символ57();
	this.instance.parent = this;
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ58, new cjs.Rectangle(-339,-83.1,678,166.3), null);
(lib.Символ56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.Символ55();
	this.instance.parent = this;
	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:8.7},19,cjs.Ease.get(-1)).to({y:20},25,cjs.Ease.get(1)).to({y:9.8},23,cjs.Ease.get(-1)).to({y:0},22,cjs.Ease.get(1)).wait(1));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(53,228,150,146);
(lib.Символ52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.Символ54();
	this.instance.parent = this;
	this.instance.setTransform(-91,362.2,1,1,0,0,0,-91,362.2);
	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-9.7},4,cjs.Ease.get(1)).to({rotation:0},4,cjs.Ease.get(1)).to({rotation:-9.7},4,cjs.Ease.get(1)).to({rotation:0},4,cjs.Ease.get(1)).wait(44));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200,254,134.9,113.1);
(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.Символ34();
	this.instance.parent = this;
	this.instance.setTransform(0,-0.7);
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.87,scaleY:0.87,y:-0.8},3,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,y:-0.7},3,cjs.Ease.get(1)).to({scaleX:0.87,scaleY:0.87,y:-0.8},3,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,y:-0.7},3,cjs.Ease.get(1)).wait(28));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-159,-9.7,331,30);
(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Символ 46
	this.instance = new lib.Символ46();
	this.instance.parent = this;
	this.instance.setTransform(25.5,11.1,1,1,0,0,0,-70.7,7.6);
	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:40.5},9,cjs.Ease.get(1)).to({x:25.5},10,cjs.Ease.get(1)).to({x:45.5},10,cjs.Ease.get(1)).to({x:25.5},10,cjs.Ease.get(1)).to({scaleX:1.3,scaleY:1.3},10,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},10,cjs.Ease.get(1)).wait(1));
	// Символ 45
	this.instance_1 = new lib.Символ45();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-9.8,12.8,1,1,0,0,0,0,11.5);
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:5.2},9,cjs.Ease.get(1)).to({x:-9.8},10,cjs.Ease.get(1)).to({regX:-0.1,scaleX:1.43,scaleY:1.43,x:-10},10,cjs.Ease.get(1)).to({regX:0,scaleX:1,scaleY:1,x:-9.8},10,cjs.Ease.get(1)).to({x:-24.8},10,cjs.Ease.get(1)).to({x:-9.8},10,cjs.Ease.get(1)).wait(1));
	// Символ 44
	this.instance_2 = new lib.Символ44();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-49.3,11.7,1,1,0,0,0,60.1,11.2);
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:11.1,scaleX:1.22,scaleY:1.22,y:11.6},9,cjs.Ease.get(1)).to({regY:11.2,scaleX:1,scaleY:1,y:11.7},10,cjs.Ease.get(1)).to({x:-64.3},10,cjs.Ease.get(1)).to({x:-49.3},10,cjs.Ease.get(1)).to({x:-64.3},10,cjs.Ease.get(1)).to({x:-49.3},10,cjs.Ease.get(1)).wait(1));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-174.4,-16.5,347.6,38);
(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 6
	this.instance = new lib.Символ78();
	this.instance.parent = this;
	this.instance.setTransform(-247.7,11.3);
	this.instance.alpha = 0;
	this.instance._off = true;
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(69).to({_off:false},0).to({x:-204.9,alpha:1},8,cjs.Ease.get(1)).wait(40).to({x:287.4,y:11,alpha:0},8,cjs.Ease.get(1)).wait(1));
	// Слой 3
	this.instance_1 = new lib.Символ39();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-334.5,11.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(69).to({_off:false},0).to({x:23,y:13.9,alpha:1},8,cjs.Ease.get(1)).wait(40).to({x:200.6,y:11.5,alpha:0},8,cjs.Ease.get(1)).wait(1));
	// Слой 5
	this.instance_2 = new lib.Символ77();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-266.5,6.3,0.79,0.79);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(29).to({_off:false},0).to({x:-107,alpha:1},8,cjs.Ease.get(1)).wait(32).to({x:59.8,alpha:0},8,cjs.Ease.get(1)).wait(49));
	// Слой 2
	this.instance_3 = new lib.Символ36();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-144.2,5.9,0.79,0.79);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(29).to({_off:false},0).to({x:15.3,alpha:1},8,cjs.Ease.get(1)).wait(32).to({x:182.1,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(48));
	// Слой 4
	this.instance_4 = new lib.Символ76();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-125.4,9.8,0.845,0.845);
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(29).to({x:70.4,alpha:0},8).wait(80).to({x:-234.1},0).to({x:-125.4,alpha:1},8).wait(1));
	// Слой 1
	this.instance_5 = new lib.Символ32();
	this.instance_5.parent = this;
	this.instance_5.setTransform(24.2,0.9,0.845,0.845);
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(29).to({x:220,alpha:0},8).wait(80).to({x:-84.5},0).to({x:24.2,alpha:1},8).wait(1));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-145.5,-19.9,293,59.4);
(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Символ 32
	this.instance = new lib.Символ35();
	this.instance.parent = this;
	this.instance.setTransform(-6.9,9.6);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ31, new cjs.Rectangle(-152.4,-10.3,293,59.4), null);
(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.Символ22();
	this.instance.parent = this;
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:-0.5,rotation:13.8,x:0.1,y:-0.5},0).wait(1).to({rotation:27.7,x:0.3,y:-0.4},0).wait(1).to({rotation:41.5,x:0.4,y:-0.3},0).wait(1).to({rotation:55.4},0).wait(1).to({rotation:69.2,x:0.5,y:-0.2},0).wait(1).to({rotation:83.1,y:0},0).wait(1).to({rotation:96.9},0).wait(1).to({rotation:110.8,y:0.2},0).wait(1).to({rotation:124.6,x:0.4,y:0.3},0).wait(1).to({rotation:138.5},0).wait(1).to({rotation:152.3,x:0.3,y:0.4},0).wait(1).to({rotation:166.2,x:0.1,y:0.5},0).wait(1).to({rotation:180,x:0,y:0.4},0).wait(1).to({rotation:193.8,x:-0.1,y:0.5},0).wait(1).to({rotation:207.7,x:-0.2,y:0.4},0).wait(1).to({rotation:221.5,x:-0.3,y:0.3},0).wait(1).to({rotation:235.4,x:-0.4},0).wait(1).to({rotation:249.2,y:0.2},0).wait(1).to({rotation:263.1,x:-0.5,y:0},0).wait(1).to({rotation:276.9},0).wait(1).to({rotation:290.8,x:-0.4,y:-0.2},0).wait(1).to({rotation:304.6,y:-0.3},0).wait(1).to({rotation:318.5,x:-0.3},0).wait(1).to({rotation:332.3,x:-0.2,y:-0.4},0).wait(1).to({rotation:346.2,x:-0.1,y:-0.5},0).wait(1).to({rotation:360,x:0},0).wait(1));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28,-28,56,55.1);
(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.Символ19();
	this.instance.parent = this;
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:25.7},0).wait(1).to({rotation:51.4},0).wait(1).to({rotation:77.1},0).wait(1).to({rotation:102.9,y:-0.1},0).wait(1).to({rotation:128.6},0).wait(1).to({rotation:154.3},0).wait(1).to({rotation:180},0).wait(1).to({rotation:205.7},0).wait(1).to({rotation:231.4},0).wait(1).to({rotation:257.1},0).wait(1).to({rotation:282.9,y:0},0).wait(1).to({rotation:308.6},0).wait(1).to({rotation:334.3},0).wait(1).to({rotation:360},0).wait(1));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39,-38.4,78,76.8);
(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.Символ17();
	this.instance.parent = this;
	this.instance.setTransform(-13,-63.6,0.392,0.392,0,0,0,-0.1,-0.1);
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.85,scaleY:0.85,guide:{path:[-12.9,-63.5,234.8,-23.4,395.4,202.6,397,201.3,398.6,200]}},15,cjs.Ease.get(0.99)).to({scaleY:0.68},1).to({regX:0,scaleX:1.14,scaleY:1.14,guide:{path:[398.6,200,542.5,82.6,680.7,104.7]}},9).wait(75));
	// Слой 3
	this.instance_1 = new lib.Символ27();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-14,210,1,0.411);
	this.instance_1.alpha = 0.301;
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:0.1,scaleX:0.93,scaleY:0.38,x:678.2,y:210.4,alpha:0.75},25,cjs.Ease.get(1)).wait(75));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115,-78.6,122,313.7);
(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.Символ29();
	this.instance.parent = this;
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0.4,rotation:12.4,x:0.4,y:0.1},0).wait(1).to({rotation:24.8,y:0.2},0).wait(1).to({rotation:37.2,x:0.3,y:0.3},0).wait(1).to({rotation:49.7},0).wait(1).to({rotation:62.1,x:0.2,y:0.4},0).wait(1).to({rotation:74.5,x:0.1},0).wait(1).to({rotation:86.9,x:0},0).wait(1).to({rotation:99.3},0).wait(1).to({rotation:111.7,x:-0.1,y:0.3},0).wait(1).to({rotation:124.1,x:-0.2},0).wait(1).to({rotation:136.6,x:-0.3},0).wait(1).to({rotation:149,y:0.2},0).wait(1).to({rotation:161.4,x:-0.4,y:0.1},0).wait(1).to({rotation:173.8,y:0},0).wait(1).to({rotation:186.2,y:-0.1},0).wait(1).to({rotation:198.6,y:-0.2},0).wait(1).to({rotation:211,x:-0.3},0).wait(1).to({rotation:223.4,y:-0.3},0).wait(1).to({rotation:235.9,x:-0.2,y:-0.4},0).wait(1).to({rotation:248.3,x:-0.1},0).wait(1).to({rotation:260.7,x:0},0).wait(1).to({rotation:273.1},0).wait(1).to({rotation:285.5,x:0.1},0).wait(1).to({rotation:297.9,x:0.2,y:-0.3},0).wait(1).to({rotation:310.3,x:0.3},0).wait(1).to({rotation:322.8,y:-0.2},0).wait(1).to({rotation:335.2,x:0.4,y:-0.1},0).wait(1).to({rotation:347.6},0).wait(1).to({rotation:360,y:0},0).wait(1));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24,-24,48.7,48);
(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.parent = this;
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.12,scaleY:1.12},14,cjs.Ease.get(-1)).to({scaleX:1.24,scaleY:1.24},15,cjs.Ease.get(1)).to({scaleX:1.12,scaleY:1.12},15,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},15,cjs.Ease.get(1)).wait(1));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-151,-145,300.7,90.7);
(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.Символ4();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.547,0.547,0,0,0,0,-0.1);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(-37.7,-25.4,75.5,50.8), null);
(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.Символ6();
	this.instance.parent = this;
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:-21.6},14,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:-45},15,cjs.Ease.get(1)).to({regX:0.1,regY:-0.1,scaleX:1,scaleY:1,rotation:-22.3,x:0.1,y:-0.1},15,cjs.Ease.get(-1)).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:0,y:0},15,cjs.Ease.get(1)).wait(1));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.3,-44.4,96.6,88.9);
(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.parent = this;
	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:8.1,y:8.1},21,cjs.Ease.get(-1)).to({x:16.9,y:16.9},23,cjs.Ease.get(1)).to({x:8.3,y:8.3},23,cjs.Ease.get(-1)).to({x:0,y:0},22,cjs.Ease.get(1)).wait(1));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.3,-44.4,96.6,88.9);
(lib.Символ81 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.Символ74();
	this.instance.parent = this;
	this.instance.setTransform(30.1,-57.9,0.616,0.616,0,0,0,0,-0.2);
	this.instance_1 = new lib.Символ71();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-75.6,-55.2,1.627,1.627);
	this.instance_2 = new lib.Символ67();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-2.8,6.2);
	this.instance_3 = new lib.Символ68();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-2.5,30.8);
	this.instance_4 = new lib.Символ59();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-2.3,58.2);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ81, new cjs.Rectangle(-82.1,-63.4,157.8,135.6), null);
(lib.Символ80 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.Символ73();
	this.instance.parent = this;
	this.instance.setTransform(39.4,-56.4,0.602,0.602,0,0,0,0.1,0.1);
	this.instance_1 = new lib.Символ70();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-86.1,-56.6,1.628,1.628);
	this.instance_2 = new lib.Символ66();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-13.9,5);
	this.instance_3 = new lib.Символ68();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-13.9,29.5);
	this.instance_4 = new lib.Символ59();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-13.7,57);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ80, new cjs.Rectangle(-92.6,-64.8,156.6,135.7), null);
(lib.Символ79 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.Символ72();
	this.instance.parent = this;
	this.instance.setTransform(19.3,-55.6,0.456,0.456,0,0,0,-0.1,0.1);
	this.instance_1 = new lib.Символ69();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-87.7,-56,1.725,1.725);
	this.instance_2 = new lib.Символ68();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-0.1,30.4);
	this.instance_3 = new lib.Символ65();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0.4,5.9);
	this.instance_4 = new lib.Символ59();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,57.9);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ79, new cjs.Rectangle(-79.1,-66.4,156.9,138.2), null);
(lib.Символ53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.Символ52();
	this.instance.parent = this;
	this.instance.setTransform(75.2,0);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ53, new cjs.Rectangle(-124.8,254,134.9,113.1), null);
(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_7 = function() {
		this.stop();
	}
	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7).call(this.frame_7).wait(9));
	// Символ 13
	this.instance = new lib.Символ13();
	this.instance.parent = this;
	this.instance.setTransform(4.5,-87.5,0.68,0.68);
	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.2,regY:-0.1,scaleX:0.74,scaleY:0.74,x:4.6,y:-148.5},7,cjs.Ease.get(1)).wait(1).to({regX:0,regY:0,scaleX:0.68,scaleY:0.68,x:4.5,y:-87.5},7).wait(1));
	// Слой 2
	this.instance_1 = new lib.Символ14_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(4.9,193.5,1.324,1.324,0,0,0,0.2,0.2);
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:146.1,alpha:0},4,cjs.Ease.get(1)).wait(7).to({y:193.5,alpha:1},4,cjs.Ease.get(1)).wait(1));
	// Символ 81
	this.instance_2 = new lib.Символ81();
	this.instance_2.parent = this;
	this.instance_2.setTransform(19.1,213.6,0.324,0.324,0,0,0,-2.3,1.4);
	this.instance_2.alpha = 0;
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:-2.4,scaleX:1.19,scaleY:1.19,x:7.2,y:352.3,alpha:1},7,cjs.Ease.get(1)).wait(1).to({regX:-2.3,scaleX:0.32,scaleY:0.32,x:19.1,y:213.6,alpha:0},7,cjs.Ease.get(1)).wait(1));
	// Символ 80
	this.instance_3 = new lib.Символ80();
	this.instance_3.parent = this;
	this.instance_3.setTransform(21.8,161.7,0.324,0.324,0,0,0,-5.4,1.4);
	this.instance_3.alpha = 0;
	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:-5.5,scaleX:1.19,scaleY:1.19,x:17,y:161.3,alpha:1},7,cjs.Ease.get(1)).wait(1).to({regX:-5.4,scaleX:0.32,scaleY:0.32,x:21.8,y:161.7,alpha:0},7,cjs.Ease.get(1)).wait(1));
	// Символ 79
	this.instance_4 = new lib.Символ79();
	this.instance_4.parent = this;
	this.instance_4.setTransform(19.1,110.8,0.324,0.324,0,0,0,0,1.4);
	this.instance_4.alpha = 0;
	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regY:1.2,scaleX:1.19,scaleY:1.19,x:7.2,y:-26,alpha:1},7,cjs.Ease.get(1)).wait(1).to({regY:1.4,scaleX:0.32,scaleY:0.32,x:19.1,y:110.8,alpha:0},7,cjs.Ease.get(1)).wait(1));
	// Слой 1
	this.instance_5 = new lib.Символ43();
	this.instance_5.parent = this;
	this.instance_5.setTransform(7.9,-85.3);
	this.instance_5.alpha = 0;
	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({y:-152.7,alpha:1},7).wait(1).to({y:-85.3,alpha:0},7).wait(1));
	// Символ 31
	this.instance_6 = new lib.Символ31();
	this.instance_6.parent = this;
	this.instance_6.setTransform(12.1,54.9,1.17,1.17);
	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({y:260.2,alpha:0},7,cjs.Ease.get(1)).wait(1).to({y:54.9,alpha:1},7,cjs.Ease.get(1)).wait(1));
	// Слой 10
	this.instance_7 = new lib.Символ51();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0.1,-58.3);
	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({y:-78.3,alpha:0},7,cjs.Ease.get(1)).wait(1).to({y:-58.3,alpha:1},7).wait(1));
	// Слой 6
	this.instance_8 = new lib.Символ58();
	this.instance_8.parent = this;
	this.instance_8.setTransform(5.2,75.8,1,0.639);
	this.instance_8.alpha = 0.75;
	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({scaleY:5.05,y:69.8,alpha:0.59},7,cjs.Ease.get(1)).wait(1).to({scaleY:0.64,y:75.8,alpha:0.75},7,cjs.Ease.get(1)).wait(1));
	// Слой 11
	this.instance_9 = new lib.Символ56();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-269.4,119.7);
	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({scaleX:1.42,scaleY:1.42,x:-384.1,y:-7.7},7,cjs.Ease.get(1)).wait(1).to({scaleX:1,scaleY:1,x:-269.4,y:119.7},7,cjs.Ease.get(-1)).wait(1));
	// Слой 5
	this.instance_10 = new lib.Символ53();
	this.instance_10.parent = this;
	this.instance_10.setTransform(209.3,119.4);
	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({scaleX:1.42,scaleY:1.42,x:297.4,y:-8.2},7,cjs.Ease.get(1)).wait(1).to({scaleX:1,scaleY:1,x:209.3,y:119.4},7,cjs.Ease.get(-1)).wait(1));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-333.8,-186.2,678,679.9);
(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.Символ23();
	this.instance.parent = this;
	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[0.1,0.1,224.9,-26.2,293,151.2,293,151.2,293,151.2]}},11).to({scaleY:0.89,guide:{path:[293,151.2,293.3,150.9,293.7,150.5]}},1).to({scaleY:1,guide:{path:[293.8,150.5,462.6,-42.7,635.2,151.2]}},18,cjs.Ease.get(0.33)).to({scaleY:0.87,guide:{path:[635.1,151.2,635.1,151.1,635.1,151.1]}},1).to({scaleY:1,guide:{path:[635.1,151.1,635.1,151.1,635.1,151.2,762.5,45.4,927.2,72.3]}},12).wait(1));
	// Слой 4
	this.instance_1 = new lib.Символ26();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.9,172.4,1.714,1.714,0,0,0,0,0.2);
	this.instance_1.alpha = 0.199;
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:0.1,scaleX:1.05,scaleY:1.05,x:291.5,y:169.7,alpha:0.91},11,cjs.Ease.get(1)).to({regX:0.1,regY:0.2,scaleX:1.62,scaleY:1.62,x:458.4,y:175.2,alpha:0.301},9).to({regX:0,regY:0.1,scaleX:1.05,scaleY:1.05,x:635.1,y:173.3,alpha:0.91},10).to({regY:0.2,scaleX:1.67,scaleY:1.67,x:902.2,y:178.5,alpha:0.219},13).wait(1));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122.6,-28,209.1,237.6);
(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.Символ20();
	this.instance.parent = this;
	this.instance.setTransform(7.6,290.7);
	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-0.1,scaleX:0.35,scaleY:0.35,guide:{path:[7.6,290.6,-330.5,92.2,-460.2,49.8,-589.9,7.5,-511.2,121.3]}},16,cjs.Ease.get(0.97)).to({regX:0,regY:-0.2,scaleX:0.26,scaleY:0.26,guide:{path:[-511.2,121.3,-487.3,155.9,-444,205]},alpha:0},8).wait(71));
	// Слой 3
	this.instance_1 = new lib.Символ28();
	this.instance_1.parent = this;
	this.instance_1.setTransform(7.7,328.8);
	this.instance_1.alpha = 0.59;
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:-0.1,regY:0.2,scaleX:0.49,scaleY:0.49,x:-531.7,y:253.9,alpha:0.359},16,cjs.Ease.get(1)).to({regX:0,regY:0,scaleX:0.46,scaleY:0.46,x:-449.1,y:218.5,alpha:0},8).wait(71));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81,252.3,177.3,97.3);
(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.parent = this;
	this.instance.setTransform(41,210.8);
	this.instance._off = true;
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(56).to({_off:false},0).to({guide:{path:[41,210.7,-183.1,152.6,-553.4,256.7,-771.5,45.2,-965.1,256.7,-1221.3,21.3,-1424.6,252.8,-1606.8,132.6,-1943.9,186.9]}},59).wait(1));
	// Слой 3
	this.instance_1 = new lib.Символ30();
	this.instance_1.parent = this;
	this.instance_1.setTransform(43.3,269,1.516,1.516,0,0,0,0.1,0.1);
	this.instance_1.alpha = 0.172;
	this.instance_1._off = true;
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(56).to({_off:false},0).to({scaleX:1,scaleY:1,x:-538.8,y:274.3,alpha:0.539},16).to({regY:0.2,scaleX:1.52,scaleY:1.52,x:-756.5,y:273.4,alpha:0.398},7).to({regY:0.1,scaleX:0.87,scaleY:0.87,x:-974.1,y:272.2,alpha:0.762},7).to({regX:0,regY:0.2,scaleX:1.32,scaleY:1.32,x:-1193.7,y:269.5,alpha:0.32},7).to({regX:-0.1,scaleX:1.01,scaleY:1.01,x:-1413.1,y:266.7,alpha:0.801},7).to({regX:0.1,regY:0.1,scaleX:1.52,scaleY:1.52,x:-1945.6,y:275.3,alpha:0.172},15).wait(1));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;
(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.parent = this;
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(-37.7,-25.4,75.5,50.8), null);
(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 2
	this.instance = new lib.Символ24();
	this.instance.parent = this;
	this.instance.setTransform(-561.6,201.4);
	this.instance.alpha = 0.879;
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	// portball.png
	this.instance_1 = new lib.Символ16();
	this.instance_1.parent = this;
	this.instance_1.setTransform(350.6,201.4,0.462,0.462);
	this.instance_1.alpha = 0.879;
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));
	// nzball.png
	this.instance_2 = new lib.Символ18();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-478.6,109.7,1.308,1.308);
	this.instance_2.alpha = 0.879;
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));
	// mexball.png
	this.instance_3 = new lib.Символ21();
	this.instance_3.parent = this;
	this.instance_3.setTransform(303.7,132.4,0.795,0.795,0,0,0,0.1,-0.1);
	this.instance_3.alpha = 0.879;
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));
	// Слой 1
	this.instance_4 = new lib.Символ14();
	this.instance_4.parent = this;
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(-684.2,-130,1064.4,594.6), null);
(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.parent = this;
	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-30},59).to({rotation:0},60).wait(1));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.7,-25.4,75.5,50.8);
(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.parent = this;
	this.instance.setTransform(-150.6,177.3,1,1,0,0,0,-150.6,177.3);
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.04,scaleY:1.04},21,cjs.Ease.get(-1)).to({scaleX:1.08,scaleY:1.08},23,cjs.Ease.get(1)).to({scaleX:1.04,scaleY:1.04},22,cjs.Ease.get(-1)).to({scaleX:1.03,scaleY:1.03,x:-150.7,y:177.4},3,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:-150.6,y:177.3},20).wait(1));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-684.2,-130,1064.4,594.6);
(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.parent = this;
	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:9.1},26,cjs.Ease.get(-1)).to({y:20},31,cjs.Ease.get(1)).to({y:9.8},29,cjs.Ease.get(-1)).to({y:0},28,cjs.Ease.get(1)).wait(1));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.7,-25.4,75.5,50.8);
(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 6
	this.instance = new lib.Символ11();
	this.instance.parent = this;
	this.instance.setTransform(-122.2,-145.7,1.176,1.176,15,0,0,0,-0.2);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	// doll2.png
	this.instance_1 = new lib.Символ11();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-246.1,-150.5,0.982,0.982,0,0,0,0,-0.1);
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));
	// Слой 5
	this.instance_2 = new lib.Символ5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-25.4,-163.2,0.956,0.956,0,0,0,0,-0.2);
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));
	// doll.png
	this.instance_3 = new lib.Символ5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-291.9,-129.2,0.593,0.593,0,0,0,-0.1,-0.1);
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));
	// Слой 1
	this.instance_4 = new lib.Символ11();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-252.7,-110.2,0.443,0.443,-15);
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));
	// Слой 4
	this.instance_5 = new lib.Символ5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-172.8,-144.7,0.291,0.291,-45,0,0,0.2,-0.2);
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(-320.5,-205.5,341.3,110.5), null);
// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		  function fl_MouseOverHandler_5()
		{
				_this.main.gotoAndPlay(1);
		}
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		  function fl_MouseOutHandler_2()
		{
				_this.main.gotoAndPlay(9);
		}
	}
	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));
	// Слой 4
	this.main = new lib.Символ42();
	this.main.parent = this;
	this.main.setTransform(145.3,226.3,0.791,0.791);
	this.timeline.addTween(cjs.Tween.get(this.main).wait(1));
	// Слой 2
	this.fon = new lib.Символ3();
	this.fon.parent = this;
	this.fon.setTransform(324,161.7,1.05,1.05);
	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));
	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.parent = this;
	this.instance.setTransform(322.9,129.7,1.05,1.05);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-245.3,245.9,1117.3,671.5);
// library properties:
lib.properties = {
	width: 300,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/bg.jpg", id:"bg"},
		{src:"images/biletinakubok.png", id:"biletinakubok"},
		{src:"images/btn1.png", id:"btn1"},
		{src:"images/dengi.png", id:"dengi"},
		{src:"images/doll.png", id:"doll"},
		{src:"images/doll2.png", id:"doll2"},
		{src:"images/hocheshpoluchit.png", id:"hocheshpoluchit"},
		{src:"images/iph.png", id:"iph"},
		{src:"images/iph2.png", id:"iph2"},
		{src:"images/iphone7.png", id:"iphone7"},
		{src:"images/logo.png", id:"logo"},
		{src:"images/mex.png", id:"mex"},
		{src:"images/mexball.png", id:"mexball"},
		{src:"images/money.png", id:"money"},
		{src:"images/n1.png", id:"n1"},
		{src:"images/n2.png", id:"n2"},
		{src:"images/n3.png", id:"n3"},
		{src:"images/new_zel.png", id:"new_zel"},
		{src:"images/nzball.png", id:"nzball"},
		{src:"images/period.png", id:"period"},
		{src:"images/port.png", id:"port"},
		{src:"images/portball.png", id:"portball"},
		{src:"images/proydi.png", id:"proydi"},
		{src:"images/rus.png", id:"rus"},
		{src:"images/rusball.png", id:"rusball"},
		{src:"images/stavka1.png", id:"stavka1"},
		{src:"images/stavka2.png", id:"stavka2"},
		{src:"images/stavka3.png", id:"stavka3"},
		{src:"images/ten.png", id:"ten"},
		{src:"images/tick.png", id:"tick"},
		{src:"images/tickets.png", id:"tickets"},
		{src:"images/tri.png", id:"tri"},
		{src:"images/vs.png", id:"vs"},
		{src:"images/zadaniya.png", id:"zadaniya"}
	],
	preloads: []
};
})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;
