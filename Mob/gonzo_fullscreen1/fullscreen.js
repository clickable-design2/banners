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



(lib.bonus = function() {
	this.initialize(img.bonus);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,304,72);


(lib.bonus1000 = function() {
	this.initialize(img.bonus1000);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,180,51);


(lib.boroda = function() {
	this.initialize(img.boroda);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,36,23);


(lib.btn = function() {
	this.initialize(img.btn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,308,80);


(lib.coin = function() {
	this.initialize(img.coin);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,42,50);


(lib.freespin = function() {
	this.initialize(img.freespin);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,298,23);


(lib.hat = function() {
	this.initialize(img.hat);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,52);


(lib.logo_gonzo = function() {
	this.initialize(img.logo_gonzo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,39);


(lib.logo_rio = function() {
	this.initialize(img.logo_rio);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,76,79);


(lib.noga1 = function() {
	this.initialize(img.noga1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,70,71);


(lib.noga2 = function() {
	this.initialize(img.noga2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,98,77);


(lib.plecho1 = function() {
	this.initialize(img.plecho1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,28,40);


(lib.plecho2 = function() {
	this.initialize(img.plecho2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,19,47);


(lib.ruka1 = function() {
	this.initialize(img.ruka1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,45,81);


(lib.ruka11 = function() {
	this.initialize(img.ruka11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,44,43);


(lib.ruka2 = function() {
	this.initialize(img.ruka2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,58,57);


(lib.ruka21 = function() {
	this.initialize(img.ruka21);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,36,39);


(lib.slot = function() {
	this.initialize(img.slot);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,171,300);


(lib.smobil = function() {
	this.initialize(img.smobil);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,304,146);


(lib.spins320 = function() {
	this.initialize(img.spins320);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,184,80);


(lib.tors = function() {
	this.initialize(img.tors);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,91,134);


(lib.venz = function() {
	this.initialize(img.venz);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,54,33);// helper functions:

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


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo_rio();
	this.instance.parent = this;
	this.instance.setTransform(-60,-62,1.579,1.579);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(-60,-62,120,124.8), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.btn();
	this.instance.parent = this;
	this.instance.setTransform(-154,-37);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(-154,-37,308,80), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bonus();
	this.instance.parent = this;
	this.instance.setTransform(-152,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(-152,-30,304,72), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.freespin();
	this.instance.parent = this;
	this.instance.setTransform(-149,-11.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(-149,-11.5,298,23), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.venz();
	this.instance.parent = this;
	this.instance.setTransform(149,-17,1,1,0,0,180);

	this.instance_1 = new lib.venz();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-148,-17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 1
	this.instance_2 = new lib.spins320();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-92,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(-148,-40,297,80), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.venz();
	this.instance.parent = this;
	this.instance.setTransform(152,-22,1,1,0,0,180);

	this.instance_1 = new lib.venz();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-153,-22);

	this.instance_2 = new lib.bonus1000();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-91,-31);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(-153,-31,305,51), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.slot();
	this.instance.parent = this;
	this.instance.setTransform(-139.5,-244.7,1.632,1.632);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(-139.5,-244.7,279,489.5), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.smobil();
	this.instance.parent = this;
	this.instance.setTransform(-152,-73);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(-152,-73,304,146), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo_gonzo();
	this.instance.parent = this;
	this.instance.setTransform(-195,-30.4,1.56,1.56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(-195,-30.4,390,60.9), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.boroda();
	this.instance.parent = this;
	this.instance.setTransform(-2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(-2,0,36,23), null);


(lib.Символ13_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance_1 = new lib.noga1();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13_1, new cjs.Rectangle(0,0,70,71), null);


(lib.Символ12_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance_3 = new lib.noga2();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12_1, new cjs.Rectangle(0,0,98,77), null);


(lib.Символ11_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance_3 = new lib.ruka1();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11_1, new cjs.Rectangle(0,0,45,81), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ruka11();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(0,0,44,43), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.plecho1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(0,0,28,40), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hat();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(0,0,122,52), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.plecho2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(0,0,19,47), null);


(lib.Символ5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance_1 = new lib.ruka21();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5_1, new cjs.Rectangle(0,0,36,39), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ruka2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(0,0,58,57), null);


(lib.Символ2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance_1 = new lib.coin();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2_1, new cjs.Rectangle(0,0,42,50), null);


(lib.Символ18_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.logo_rio = new lib.Символ17();
	this.logo_rio.parent = this;
	this.logo_rio.setTransform(0,-0.3);
	this.logo_rio.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.logo_rio).wait(29).to({x:-50},0).to({x:0,alpha:1},10,cjs.Ease.get(1)).wait(30).to({x:-50,alpha:0},10,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({x:70,alpha:0},10,cjs.Ease.get(1)).wait(30).to({x:0,alpha:1},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-195,-62.3,390,124.8);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.08,scaleY:1.08},4,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},4,cjs.Ease.get(1)).wait(1).to({scaleX:1.08,scaleY:1.08},4,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},4,cjs.Ease.get(1)).wait(27));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-154,-37,308,80);


(lib.Символ10_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance_1 = new lib.Символ3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(86.7,-2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(84).to({_off:false},0).to({x:-20.4,alpha:1},5).to({x:0},3).wait(41).to({x:33.2},3).to({x:-107.1,alpha:0},5).wait(1));

	// bonus1000.png
	this.instance_2 = new lib.Символ11();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-71.5,-37.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(36).to({_off:false},0).to({x:13,alpha:1},6).to({x:0},2).wait(40).to({x:13},2).to({x:-71.5,alpha:0},6).to({_off:true},1).wait(49));

	// bonus.png
	this.instance_3 = new lib.Символ14();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-71.5,27);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(36).to({_off:false},0).to({x:13,alpha:1},6).to({x:0},2).wait(40).to({x:13},2).to({x:-71.5,alpha:0},6).to({_off:true},1).wait(49));

	// spins320.png
	this.instance_4 = new lib.Символ12();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,-23);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(36).to({x:-13},2).to({x:84.5,alpha:0},6).wait(89).to({x:-13,alpha:1},6).to({x:0},2).wait(1));

	// freespin.png
	this.instance_5 = new lib.Символ13();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,49.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(36).to({x:-13},2).to({x:84.5,alpha:0},6).wait(89).to({x:-13,alpha:1},6).to({x:0},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-149,-63,298,124);


(lib.Символ4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance_1 = new lib.Символ5();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:15.5},28,cjs.Ease.get(-1)).to({y:32},30,cjs.Ease.get(1)).to({y:16},30,cjs.Ease.get(-1)).to({y:0},31,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-139.5,-244.7,279,489.5);


(lib.Символ17_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance_1 = new lib.Символ18();
	this.instance_1.parent = this;
	this.instance_1.setTransform(17,11.6,1,1,0,0,0,17,11.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,skewY:4.2,x:15.5,y:12.4},4).to({regY:11.7,scaleX:1,skewY:1.5,x:16.4,y:12},3).to({regY:11.6,scaleX:1,skewY:0,x:17,y:11.6},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,0,36,23);


(lib.Символ15_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance_1 = new lib.Символ7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(60.9,26,1,1,0,0,0,60.9,26);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15_1, new cjs.Rectangle(0,0,122,52), null);


(lib.Символ14_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Растровое изображение 3
	this.instance_1 = new lib.tors();
	this.instance_1.parent = this;
	this.instance_1.setTransform(33,42);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Символ 17
	this.instance_2 = new lib.Символ17_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(104.3,75.4,1,1,0,0,0,17,11.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14_1, new cjs.Rectangle(33,42,91,134), null);


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
	this.txt1 = new lib.Символ10_1();
	this.txt1.parent = this;
	this.txt1.setTransform(0,1,1.378,1.378);

	this.timeline.addTween(cjs.Tween.get(this.txt1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(-205.2,-85.7,410.5,170.8), null);


(lib.Символ16_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 2
	this.instance_1 = new lib.Символ2_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(166.4,88,1,1,52.5,0,0,21.1,25.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:25,scaleX:0.99,scaleY:1.01,rotation:0,skewX:101.4,skewY:99.1,x:163.3,y:124},9,cjs.Ease.get(-1)).to({regX:21.2,scaleX:1,scaleY:1,rotation:400.5,skewX:0,skewY:0,x:161.2,y:-32.7},10,cjs.Ease.get(1)).to({regX:21.1,scaleX:1.02,scaleY:0.98,rotation:1080,skewX:72,skewY:69.4,x:167,y:105.3},10).to({regY:25.1,scaleX:1,scaleY:1,rotation:1132.5,skewX:0,skewY:0,x:166.4,y:88},5,cjs.Ease.get(-1)).wait(1));

	// Символ 15
	this.instance_2 = new lib.Символ15_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(79.2,26,1,1,0,0,0,60.9,26);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:61,regY:25.9,scaleX:1,scaleY:1,skewX:-4.7,skewY:-2.2,x:79.3,y:27.8},9,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,skewX:-0.5,skewY:-0.3,y:26.2},10,cjs.Ease.get(1)).to({regX:60.9,regY:26,skewX:0,skewY:0,x:79.2,y:26},6).to({regX:61,regY:26.1,scaleX:1.01,scaleY:0.99,skewX:8.5,skewY:11.7,x:80.8,y:31.4},4).to({regX:60.9,regY:26,scaleX:1,scaleY:1,skewX:0,skewY:0,x:79.2,y:26},5).wait(1));

	// Символ 14
	this.instance_3 = new lib.Символ14_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(102,118,1,1,0,0,0,102.7,118.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1,skewY:2.5,y:120.3},9,cjs.Ease.get(-1)).to({scaleX:1,skewY:0.3,y:118.3},10,cjs.Ease.get(1)).to({skewY:0,y:118},6).to({regY:118.6,scaleX:1,skewY:3.4,x:102.5,y:121.4},4).to({regY:118.7,scaleX:1,skewY:0,x:102,y:118},5).wait(1));

	// Символ 11
	this.instance_4 = new lib.Символ11_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(23,145.4,1,1,0,0,0,22.5,40.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regY:40.3,scaleX:1.02,scaleY:0.98,skewX:36.2,skewY:38.9,x:6.8,y:131.4},9,cjs.Ease.get(-1)).to({regY:40.4,scaleX:1,scaleY:1,skewX:5,skewY:5.3,x:20.6,y:143.5},10,cjs.Ease.get(1)).to({regY:40.2,scaleX:1,scaleY:1,skewX:0,skewY:0,x:23,y:145.4},6).to({scaleX:1.01,scaleY:1,skewX:5.8,skewY:10.8,x:19.5,y:139.9},4).to({scaleX:1,scaleY:1,skewX:0,skewY:0,x:23,y:145.4},5).wait(1));

	// Символ 10
	this.instance_5 = new lib.Символ10();
	this.instance_5.parent = this;
	this.instance_5.setTransform(21.9,106,1,1,0,0,0,21.9,21.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:22,scaleX:1.02,scaleY:0.99,skewX:20.4,skewY:24.3,x:23.9,y:97.2},9,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,skewX:2.8,skewY:3.3,x:22.2,y:104.8},10,cjs.Ease.get(1)).to({regX:21.9,scaleX:1,scaleY:1,skewX:0,skewY:0,x:21.9,y:106},6).to({regY:21.3,scaleX:1.01,scaleY:1,skewX:5.8,skewY:10.8,x:22.4,y:100.7},4).to({regY:21.2,scaleX:1,scaleY:1,skewX:0,skewY:0,x:21.9,y:106},5).wait(1));

	// Символ 9
	this.instance_6 = new lib.Символ9();
	this.instance_6.parent = this;
	this.instance_6.setTransform(34.9,92.7,1,1,0,0,0,14.2,20.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regY:20.1,scaleX:1.01,scaleY:1,skewX:6.9,skewY:11.4,x:36.7,y:89.9},9,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,skewX:0.8,skewY:1.5,x:35.1,y:92.3},10,cjs.Ease.get(1)).to({regY:20.2,scaleX:1,scaleY:1,skewX:0,skewY:0,x:34.9,y:92.7},6).to({regX:14.1,regY:20.1,scaleX:1.01,scaleY:1,skewX:5.8,skewY:10.8,x:36.5,y:89.9},4).to({regX:14.2,regY:20.2,scaleX:1,scaleY:1,skewX:0,skewY:0,x:34.9,y:92.7},5).wait(1));

	// Символ 6
	this.instance_7 = new lib.Символ6();
	this.instance_7.parent = this;
	this.instance_7.setTransform(107.1,104.7,1,1,0,0,0,9.5,23.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleX:1,scaleY:1,skewX:5,skewY:7.4,x:104.4,y:106.8},9,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,skewX:-9.5,skewY:-9.3,x:107.1,y:102.4},10,cjs.Ease.get(1)).to({regY:23.6,scaleY:1,rotation:-12,skewX:0,skewY:0,x:107.5,y:101.7},6).to({regX:9.6,scaleX:0.99,scaleY:1.02,rotation:0,skewX:-6.4,skewY:2.8,x:108,y:108.1},4).to({regX:9.5,regY:23.7,scaleX:1,scaleY:1,skewX:0,skewY:0,x:107.1,y:104.7},5).wait(1));

	// Символ 5
	this.instance_8 = new lib.Символ5_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(127.3,108,1,1,0,0,0,18.2,19.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regY:19.3,scaleX:1.01,scaleY:0.99,skewX:19.2,skewY:21.1,x:121.9,y:114.6},9,cjs.Ease.get(-1)).to({regY:19.2,scaleX:1,scaleY:1,skewX:-7.5,skewY:-7.3,x:127.2,y:102.8},10,cjs.Ease.get(1)).to({regY:19.3,scaleX:1,scaleY:1,rotation:-12,skewX:0,skewY:0,x:128,y:100.8},6).to({regY:19.4,scaleX:0.99,scaleY:1.02,rotation:0,skewX:-6.4,skewY:2.8,x:128.2,y:112.5},4).to({regY:19.2,scaleX:1,scaleY:1,skewX:0,skewY:0,x:127.3,y:108},5).wait(1));

	// Символ 4
	this.instance_9 = new lib.Символ4();
	this.instance_9.parent = this;
	this.instance_9.setTransform(166,95.7,1,1,0,0,0,29.1,28.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({regX:29.2,scaleX:1.02,scaleY:0.98,skewX:47.9,skewY:47.7,x:157.2,y:128.7},9,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:-12,skewX:0,skewY:0,x:161.8,y:83.8},10,cjs.Ease.get(1)).to({regX:29.1,scaleX:1,scaleY:1,rotation:10.1,x:164.5,y:91.8},6).to({regY:28.6,scaleX:1.02,scaleY:0.98,rotation:0,skewX:25.6,skewY:27.7,x:165,y:114.5},4).to({regY:28.4,scaleX:1,scaleY:1,skewX:0,skewY:0,x:166,y:95.7},5,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,199.1,186.2);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 15
	this.instance = new lib.Символ16_1();
	this.instance.parent = this;
	this.instance.setTransform(71.4,94.4,1,1,0,0,0,98.5,92.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:96.9},19,cjs.Ease.get(-1)).to({y:99.4},20,cjs.Ease.get(1)).to({y:96.9},20,cjs.Ease.get(-1)).to({y:94.4},20,cjs.Ease.get(1)).wait(1));

	// Символ 13
	this.instance_1 = new lib.Символ13_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(6.9,202.3,1,1,0,0,0,34.9,35.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleY:0.97,skewX:0.3,x:7.2,y:203.5},19,cjs.Ease.get(-1)).to({scaleY:0.93,skewX:0.9,x:7.4,y:204.8},20,cjs.Ease.get(1)).to({scaleY:0.97,skewX:0.3,x:7.2,y:203.6},20,cjs.Ease.get(-1)).to({scaleY:1,skewX:0,x:6.9,y:202.3},20,cjs.Ease.get(1)).wait(1));

	// Символ 12
	this.instance_2 = new lib.Символ12_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(95.2,199.1,1,1,0,0,0,49.2,38.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleY:0.97,y:200.4},19,cjs.Ease.get(-1)).to({scaleY:0.93,y:201.8},20,cjs.Ease.get(1)).to({scaleY:0.96,y:200.5},20,cjs.Ease.get(-1)).to({scaleY:1,y:199.1},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28,1.5,199.9,236.3);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ1();
	this.instance.parent = this;
	this.instance.setTransform(45.3,-5.4,1.496,1.496,0.5,0,0,102.6,118.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(-151.7,-181.9,301,354.9), null);


(lib.Символ1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.man1 = new lib.Символ8();
	this.man1.parent = this;
	this.man1.setTransform(0.6,119.2,1.418,1.418,0,0,0,0,115);

	this.timeline.addTween(cjs.Tween.get(this.man1).wait(1));

	// Слой 2
	this.instance_3 = new lib.Символ4_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(136.5,-40.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1_1, new cjs.Rectangle(-214.6,-302,490.6,506.5), null);


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
		    _this.btn.y = w < h ? ((w < h && w > 599) ? ih * 0.6 : ih * 0.52) : ih * 0.8;
			
			_this.man.x = w < h ? iw / 2 : iw * 0.22;
		    _this.man.y = w < h ? ((w < h && w > 599) ? ih * 1.1 : ih) : ih * 0.85;
			
			_this.txt.x = w < h ? iw / 2 : ((w > 950) ? iw * 0.72 : iw * 0.77);
		    _this.txt.y = w < h ? ((w < h && w > 599) ? ih * 0.36 : ih * 0.32) : ih * 0.5;
			
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
	this.txt.setTransform(512,383);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	// tors.png
	this.man = new lib.Символ1_1();
	this.man.parent = this;
	this.man.setTransform(852.9,312.8,1,1,0,0,0,29,10);

	this.timeline.addTween(cjs.Tween.get(this.man).wait(1));

	// logo_gonzo.png
	this.logo = new lib.Символ18_1();
	this.logo.parent = this;
	this.logo.setTransform(443,254.5);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(702,384.7,909.9,718.3);
// library properties:
lib.properties = {
	width: 1024,
	height: 768,
	fps: 30,
	color: "#FFFFFF",
	opacity: 0.00,
	webfonts: {},
	manifest: [
		{src:"images/bonus.png", id:"bonus"},
		{src:"images/bonus1000.png", id:"bonus1000"},
		{src:"images/boroda.png", id:"boroda"},
		{src:"images/btn.png", id:"btn"},
		{src:"images/coin.png", id:"coin"},
		{src:"images/freespin.png", id:"freespin"},
		{src:"images/hat.png", id:"hat"},
		{src:"images/logo_gonzo.png", id:"logo_gonzo"},
		{src:"images/logo_rio.png", id:"logo_rio"},
		{src:"images/noga1.png", id:"noga1"},
		{src:"images/noga2.png", id:"noga2"},
		{src:"images/plecho1.png", id:"plecho1"},
		{src:"images/plecho2.png", id:"plecho2"},
		{src:"images/ruka1.png", id:"ruka1"},
		{src:"images/ruka11.png", id:"ruka11"},
		{src:"images/ruka2.png", id:"ruka2"},
		{src:"images/ruka21.png", id:"ruka21"},
		{src:"images/slot.png", id:"slot"},
		{src:"images/smobil.png", id:"smobil"},
		{src:"images/spins320.png", id:"spins320"},
		{src:"images/tors.png", id:"tors"},
		{src:"images/venz.png", id:"venz"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;