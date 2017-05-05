(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"binomo_arrowman_600_300_atlas_", frames: [[277,121,90,80],[0,0,275,450],[332,262,42,25],[277,203,76,57],[277,306,23,10],[277,262,53,42],[376,121,1,285],[192,529,150,41],[277,0,148,119],[192,452,235,75],[0,577,235,75],[0,452,190,123]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
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



(lib.arrow = function() {
	this.spriteSheet = ss["binomo_arrowman_600_300_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.back = function() {
	this.spriteSheet = ss["binomo_arrowman_600_300_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.baks = function() {
	this.spriteSheet = ss["binomo_arrowman_600_300_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.foot = function() {
	this.spriteSheet = ss["binomo_arrowman_600_300_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.galstena = function() {
	this.spriteSheet = ss["binomo_arrowman_600_300_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hand = function() {
	this.spriteSheet = ss["binomo_arrowman_600_300_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.line = function() {
	this.spriteSheet = ss["binomo_arrowman_600_300_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.logobin = function() {
	this.spriteSheet = ss["binomo_arrowman_600_300_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.man = function() {
	this.spriteSheet = ss["binomo_arrowman_600_300_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.max = function() {
	this.spriteSheet = ss["binomo_arrowman_600_300_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.min = function() {
	this.spriteSheet = ss["binomo_arrowman_600_300_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.tale = function() {
	this.spriteSheet = ss["binomo_arrowman_600_300_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();
// helper functions:

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


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#365500").s().rr(-96.5,-30.8,193,61.6,7.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96.5,-30.8,193,61.6);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#365500").s().rr(-96.5,-30.8,193,61.6,7.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96.5,-30.8,193,61.6);


(lib.Symbol48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag8AgIAAgnIACgBIAvAuIAAiGIAdAAIAACGIAqguIABABIAAAnIg5BBg");
	this.shape.setTransform(6.1,9.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol48, new cjs.Rectangle(0,0,12.2,19.5), null);


(lib.Symbol44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9DCC50").s().p("ApaCkIAjjeIAnAAIgDAXQAJgNAOgGQAIgEAIgCQAJgCAKAAQAIAAAIACQAIABAGADQANAIAIAMQAIALADAPQADAOgCAQQgCAPgHAOQgHAPgLALQgLALgPAGQgPAHgRAAQgJAAgIgDQgHgBgHgDQgLgHgHgKIgOBZgAn1gXQgHACgGAFQgLAGgHALIgGAkQADALAJAGQAJAHANAAQAKAAAIgDQAJgEAGgGQAHgGAEgIQAEgIACgKQABgIgBgIQgCgGgEgHQgEgGgGgDQgHgDgJAAQgIAAgHACgAN4CIIAGgmQgSgDgQgEQgPgGgNgHIAHgtQALAJAZAJQASAFAUAAQAUABAMgGQAGgDADgDQAEgFABgFQABgIgEgFQgEgGgIgEIgngQIgVgKQgKgFgHgHQgHgJgEgJQgDgLACgOQACgNAHgKQAGgJALgIQAKgGAMgFQAMgEAOgBIAGgmIAjAAIgHAnQAPACAOAEQANAEAKAGIgHArQgNgKgRgFQgQgEgSAAQgSAAgKAFQgLAEgCAJQgBAIAEAFQAEAFAIAFIAnAQIAVAKQAKAGAHAHQAIAHADAKQADAMgCAOQgCAOgIAMQgHAKgLAIQgKAGgOAEQgMAEgOABIgHAmgAteCHIAGgpIhvAAIgGApIgpAAIAMhLIAVAAQAJgMAHgNQAGgOAFgPQAHgSAIguIB9AAIgTB2IAXAAIgMBLgAuVAWQgHAVgLARIA7AAIAOhUIgrAAQgFAcgHASgAKpBgQgKgCgJgEQgJgFgHgGQgHgHgFgHQgFgIgDgKIgFgTQgCgOADgeQACgPAKgcIAKgTQAGgJAHgHIAPgNQAJgHAKgDQAKgEALgDQALgCANAAQAMAAALADQAKACAJAEQAJAEAHAHQAHAGAFAIQAFAHADAKQAEAJABAKQACAegDAPQgGAegGAMQgOAZgJAKIgPAOQgJAGgKAEQgKAEgLACQgLADgNAAQgMAAgLgDgALFhPQgLAEgIAIQgIAKgFANQgGANgDASQgCAQABANQAAANAFAJQAFAJAIAEQAJAGAMgBQAOAAALgEQAKgFAJgIQAIgJAFgNQAFgOADgRQADgQgBgNQgBgNgFgKQgEgIgJgFQgIgFgNAAQgOAAgKAFgAHJBgQgLgCgJgEQgIgFgHgGQgHgHgFgHQgFgIgEgKIgFgTQgCgOADgeQADgPAKgcIAKgTQAFgJAHgHIAQgNQAIgHAKgDQAKgEALgDQAMgCAMAAQANAAALADQAKACAJAEQAJAEAHAHQAGAGAGAIQAEAHAEAKQADAJACAKQABAegCAPQgHAegGAMQgNAZgJAKIgQAOQgIAGgKAEQgKAEgLACQgMADgMAAQgNAAgKgDgAHkhPQgKAEgIAIQgJAKgFANQgFANgDASQgDAQABANQABANAEAJQAFAJAJAEQAIAGANgBQAOAAAKgEQALgFAIgIQAIgJAGgNQAFgOADgRQACgQgBgNQAAgNgFgKQgFgIgIgFQgJgFgNAAQgNAAgLAFgADoBgQgKgCgJgEQgJgFgHgGQgHgHgFgHQgFgIgDgKIgFgTQgCgOADgeQACgPAKgcIAKgTQAGgJAHgHIAPgNQAJgHAKgDQAKgEALgDQALgCANAAQAMAAALADQAKACAJAEQAJAEAHAHQAHAGAFAIQAFAHADAKQAEAJABAKQACAegDAPQgGAegGAMQgOAZgJAKIgPAOQgJAGgKAEQgKAEgLACQgLADgNAAQgMAAgLgDgAEEhPQgLAEgIAIQgIAKgFANQgGANgDASQgCAQABANQAAANAFAJQAFAJAIAEQAJAGAMgBQAOAAALgEQAKgFAJgIQAIgJAFgNQAFgOADgRQADgQgBgNQgBgNgFgKQgEgIgJgFQgIgFgNAAQgOAAgKAFgAriBgQgHgBgHgDQgNgHgIgMQgIgMgDgPQgDgPADgRQACgOAHgOQAHgOALgLQALgKAPgHQAPgHARABQAKAAAJACQAIADAHAEQAMAIAHANIAEgaIAnAAIgZCYIgmAAIADgWQgKALgNAIQgHADgJACQgJADgKAAQgJAAgIgDgArFgWQgIADgHAHQgGAGgEAHQgEAIgCAKQgBAIABAIQACAIADAFQAFAGAGAEQAHADAJAAQAKAAARgIQAMgHAHgLIAGgjQgDgLgJgHQgJgHgNAAQgKAAgJADgAALBeIAHgpIApAAIAUh/IgrAPIAHgrIA3gUIAkAAIgcCvIAkAAIgHApgAirBeIAShzIgxAAIAGglICOAAIgGAlIgxAAIgSBzgAkfBeIANhTIhRBTIgnAAIAYiYIAtAAIgOBTIBRhTIAnAAIgYCYg");
	this.shape.setTransform(101.5,16.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol44, new cjs.Rectangle(0,0,203.1,32.8), null);


(lib.Symbol41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.arrow();
	this.instance.parent = this;
	this.instance.setTransform(8,-7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol41, new cjs.Rectangle(8,-7,90,80), null);


(lib.Symbol38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Ag6AdIA6g5IA7A5");
	this.shape.setTransform(5.9,2.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol38, new cjs.Rectangle(-1,-1,13.7,7.9), null);


(lib.Symbol37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AgsAsQgRgSgBgaQABgZARgTQATgRAZgBQAaABASARQATATAAAZQAAAagTASQgSATgaAAQgZAAgTgTg");
	this.shape.setTransform(6.3,6.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol37, new cjs.Rectangle(0,0,12.5,12.5), null);


(lib.Symbol36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66CC00").s().p("AroAKIAAgTIXRAAIAAATg");
	this.shape.setTransform(74.5,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol36, new cjs.Rectangle(0,0,149,2), null);


(lib.Symbol34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hand();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol34, new cjs.Rectangle(0,0,53,42), null);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.galstena();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol32, new cjs.Rectangle(0,0,23,10), null);


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.foot();
	this.instance.parent = this;
	this.instance.setTransform(3,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol31, new cjs.Rectangle(3,0,76,57), null);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.man();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol29, new cjs.Rectangle(0,0,148,119), null);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tale();
	this.instance.parent = this;
	this.instance.setTransform(8.2,6,1,1,-8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol27, new cjs.Rectangle(8.2,-20.3,205.2,148.2), null);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.baks();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol24, new cjs.Rectangle(0,0,42,25), null);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E1C00C").s().p("AghBRQgIgHACgMQACgIAIgJIgDgGIgvhMIgFgJQgCgGACgGQACgGAFgEQALgHALAHQAEACAFAHQADAAAEACQgEgJAGgJQAGgJALAAQAIAAAJAHIACACQALAJAQAUQARAVAZAgIAHAKQAIALABAFQAEAJgDAJQgFAMgOAAQgMAAgHgMQABANgLAHQgKAIgLgGQgFAIgSADIgKABQgKAAgGgEgAgXgoIABgBIgDgCIACADg");
	this.shape.setTransform(158.8,33.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFDE32").s().p("AA+BrQgJgCgHgIIgLgOIgWgXQgYgigRgVQgQgSgMgKIgCgBQgIgKgCgEQgCgIACgGIgDgFQgFgGgEgIQgEgJACgIQACgLALgDQAFgCAFABIABAAQAFgEAHABQAHABAEAEQAFAFADAIQAIAOAKAQIAEAFIAFADQAJAHgBANQgCAHgDAEIAGAGQAEAFgBAGIAUAXIAWAYIAVAYQAHAJABAGQADAJgHAIQgGAGgIAAIgDAAg");
	this.shape_1.setTransform(164.3,28.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.instance = new lib.min();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.821,0.821);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(0,0,193,61.6), null);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9DCC50").s().p("AAYAYQgKAAgOgDIgggFIgKgBIgEgBQgKgFgBgLQAAgMAKgGQAJgFASADIA0AHIAMABQAGABAEAFQAEAFAAAFQABAGgDAGQgDAFgGADQgFACgKAAIgEAAIgEAAg");
	this.shape.setTransform(160.7,18.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#86C242").s().p("AgSBWQgFgHgBgLIgDgUIgDgXQgBgNADgJIgWAFQgMADgJgGQgMgIAFgSQgHgDgCgJQgDgJAEgHQAHgPATgCQgDgGgBgHQAAgHAEgFQAHgJAVABIAEAAIAKABIAgAFQAOADAKAAIAEADIAEAEIAIgBQAJgBAHAHQAEAEAGALQAIASABAMQACAUgKALQgFAFgIADQgIADgIgDQgLgGgGgBQgBAIAIAPQANAdgGATQgEAKgMAKQgLAKgMAAIgDAAQgPAAgKgOg");
	this.shape_1.setTransform(159.3,29.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.instance = new lib.max();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.821,0.821);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(0,0,193,61.6), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.line();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,1,285), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgwvAY7MAAAgx1MBhfAAAMAAAAx1g");
	this.shape.setTransform(312,159.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,624,319), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.back();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.705,0.705);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,194,317.5), null);


(lib.Symbol47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol48();
	this.instance.parent = this;
	this.instance.setTransform(6,9.7,1,1,0,0,0,6,9.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:14.5},9).to({y:9.7},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,12.2,19.5);


(lib.Symbol45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol44();
	this.instance.parent = this;
	this.instance.setTransform(101.5,16.4,1,1,0,0,0,101.5,16.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol45, new cjs.Rectangle(0,0,203.1,32.8), null);


(lib.Symbol43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol45();
	this.instance.parent = this;
	this.instance.setTransform(101.5,16.4,1,1,0,0,0,101.5,16.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.719},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,203.1,32.8);


(lib.Symbol42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol43();
	this.instance.parent = this;
	this.instance.setTransform(101.6,17,1,1,0,0,0,101.5,16.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmyBjIAGgoIhvAAIgGAoIgpAAIAMhKIAVAAQAJgMAHgNQAGgNAFgPQAHgUAIgtIB9AAIgTB2IAXAAIgMBKgAnpgMQgHATgLASIA7AAIAOhUIgrAAQgFAcgHATgALsA6QgQgGgKgLQgGgFgEgGQgEgIgDgHQgCgIgBgIQAAgJABgKQACgOAKgWQAJgNANgLQAMgIAPgFQANgFAOAAQAMAAAKADQAJABAHAFQAIAEAFAFQAGAGAEAHQADAHACAHIACARQAAAQgGASIhsAAQAAAHAEAGQAEAGAHAEQAJAFAXACQAPAAANgDQAMgDAKgFIgGAkQgKAFgNACQgPADgRAAQgSAAgPgFgAMIg+QgHACgFAFQgGAFgDAFQgEAHgCAHIBEAAQAEgLgGgKQgDgGgFgDQgHgDgJAAQgIAAgHACgAGhA6QgPgFgKgKIgJgLQgEgHgDgIQgCgIgBgJQAAgJACgKQABgKAEgKQADgJAFgIQAHgKARgOQANgJAQgFQAPgEAQAAQANAAANADQAMADAKAHIgGAlQgIgGgJgDQgKgCgLAAQgKAAgJACQgJACgIAGQgIAFgGAIQgFAJgCALQgCALADAHQACAIAGAFQAGAFAIADQAIACAJAAQAMAAANgDQALgDALgGIgGAoQgMAFgNACQgMADgOAAQgRAAgPgFgABKA6QgPgGgKgLIgJgMQgEgHgCgHQgDgJAAgIQAAgIABgKQACgOAKgVQAJgOAOgKQAMgJAQgFQAQgFARAAQAQAAAOAGQAPAFAKALIAJAMQAEAHACAIQADAHAAAKQABAJgCAKQgBAKgEAHIgHAQQgJAOgOAKQgNAJgPAFQgQAFgQAAQgRAAgOgFgABqg4QgIAEgGAFQgGAGgEAHQgEAIgCAKQgBAIABAHQACAHAEAGQAEAFAHADQAHADAJABQAJAAAIgDQAIgEAGgFQAGgGAFgHQAEgHABgKQABgIgBgIQgBgHgEgGQgFgFgGgDQgHgEgJABQgJAAgJACgAk4A6QgQgGgKgLQgGgFgEgGQgEgIgDgHQgCgIgBgIQAAgJABgKQACgOAKgWQAJgNANgLQAMgIAPgFQANgFAOAAQAMAAAKADQAJABAHAFQAIAEAFAFQAGAGAEAHQADAHACAHIACARQAAAQgGASIhsAAQAAAHAEAGQAEAGAHAEQAJAFAXACQAPAAANgDQAMgDAKgFIgGAkQgKAFgNACQgPADgRAAQgSAAgPgFgAkcg+QgHACgFAFQgGAFgDAFQgEAHgCAHIBEAAQAEgLgGgKQgDgGgFgDQgHgDgJAAQgIAAgHACgAsRA9QgIgCgGgDQgNgGgJgNQgIgLgCgQQgDgNACgRQADgPAHgOQAHgOALgLQALgLAOgHQAPgGASAAQAKAAAJADQAIACAGAEQAMAIAHANIAEgZIAnAAIgYCYIgnAAIADgXQgJAMgOAHQgHAEgIACQgJACgKAAQgJAAgIgCgAr0g5QgIADgHAHQgHAFgEAIQgEAIgBAKQgCAJACAHQABAHAEAGQAEAGAHAEQAHACAIAAQALABARgJQALgGAHgLIAGgkQgCgLgJgHQgKgGgNgBQgKAAgIAEgAOLA7IAShzIgxAAIAGglICOAAIgGAlIgxAAIgSBzgAJqA7IAHgvQgWAFgPAAQgMAAgLgDQgKgDgIgHQgIgGgDgLQgDgLACgOIAJg3IAsAAIgJA0QgBAMAGAGQAGAEALAAQAQAAAPgGIAKhEIAsAAIgYCYgAgzA7IAPhZIgsA2IgXAAIgbg3IgPBaIgrAAIAYiYIApAAIAkBLIA8hLIArAAIgXCYgAuVA7IAJg7Ig+AAIgJA7IgsAAIAYiYIAtAAIgKA5IA+AAIAJg5IAtAAIgZCYgADhAAIAGglIB3AAIgGAlg");
	this.shape.setTransform(313.7,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol42, new cjs.Rectangle(0.1,0.6,416,32.8), null);


(lib.Symbol40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol38();
	this.instance.parent = this;
	this.instance.setTransform(246.8,41.5,0.491,0.491,0,0,0,5.8,2.9);

	this.instance_1 = new lib.Symbol38();
	this.instance_1.parent = this;
	this.instance_1.setTransform(182.4,6.5,0.491,0.491,180,0,0,5.8,2.9);

	this.instance_2 = new lib.Symbol38();
	this.instance_2.parent = this;
	this.instance_2.setTransform(131.4,56.4,0.491,0.491,0,0,0,5.8,2.9);

	this.instance_3 = new lib.Symbol38();
	this.instance_3.parent = this;
	this.instance_3.setTransform(84.1,21.3,0.491,0.491,180,0,0,5.8,2.9);

	this.instance_4 = new lib.Symbol37();
	this.instance_4.parent = this;
	this.instance_4.setTransform(246.5,42,1,1,0,0,0,6.2,6.2);

	this.instance_5 = new lib.Symbol37();
	this.instance_5.parent = this;
	this.instance_5.setTransform(182.1,6.2,1,1,0,0,0,6.2,6.2);

	this.instance_6 = new lib.Symbol37();
	this.instance_6.parent = this;
	this.instance_6.setTransform(131.4,57,1,1,0,0,0,6.2,6.2);

	this.instance_7 = new lib.Symbol37();
	this.instance_7.parent = this;
	this.instance_7.setTransform(84.2,21.2,1,1,0,0,0,6.2,6.2);

	this.instance_8 = new lib.Symbol36();
	this.instance_8.parent = this;
	this.instance_8.setTransform(108.7,38.2,0.41,1.436,0,-142.5,37.5,74.5,1.1);

	this.instance_9 = new lib.Symbol36();
	this.instance_9.parent = this;
	this.instance_9.setTransform(157.7,31.1,0.505,1.436,0,-45,135,74.5,1.2);

	this.instance_10 = new lib.Symbol36();
	this.instance_10.parent = this;
	this.instance_10.setTransform(215.1,23.1,0.505,1.436,0,-150,30,74.5,1.2);

	this.instance_11 = new lib.Symbol36();
	this.instance_11.parent = this;
	this.instance_11.setTransform(286.7,31.1,0.563,1.393,-15,0,0,74,1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol40, new cjs.Rectangle(78,0,249.8,63.3), null);


(lib.Symbol39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol40();
	this.instance.parent = this;
	this.instance.setTransform(465.7,31.6,1,1,0,0,0,163.8,31.6);

	this.instance_1 = new lib.Symbol40();
	this.instance_1.parent = this;
	this.instance_1.setTransform(223.7,31.6,1,1,0,0,0,163.8,31.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol39, new cjs.Rectangle(137.9,0,491.8,63.3), null);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol34();
	this.instance.parent = this;
	this.instance.setTransform(26.5,21,1,1,0,0,0,26.5,21);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:26.4,rotation:-7.3,x:28.2,y:24.5},8,cjs.Ease.get(-1)).to({regX:26.5,regY:21.1,rotation:-15,x:30,y:27.9},8,cjs.Ease.get(1)).to({rotation:-7.3,x:28.3,y:24.5},8,cjs.Ease.get(-1)).to({regY:21,rotation:0,x:26.5,y:21},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,53,42);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol32();
	this.instance.parent = this;
	this.instance.setTransform(11.5,5,1,1,0,0,0,11.5,5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:-30,x:12,y:9},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,23,10);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol41();
	this.instance.parent = this;
	this.instance.setTransform(45,40,1,1,0,0,0,45,40);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:40.1,rotation:6.3,x:44.2,y:44.2},9,cjs.Ease.get(-1)).to({regY:40,rotation:15,x:43.1,y:49.4},10,cjs.Ease.get(1)).to({rotation:7.8,x:43.9,y:45.1},10,cjs.Ease.get(-1)).to({rotation:0,x:45,y:40},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8,-7,90,80);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.instance = new lib.Symbol24();
	this.instance.parent = this;
	this.instance.setTransform(115.7,80.5,0.654,0.654,-36.5,0,0,21.1,12.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:20.8,scaleX:0.38,scaleY:0.38,rotation:-149.3,x:68.7,y:53.6},14).to({regX:21.4,regY:12.8,scaleX:0.29,scaleY:0.29,rotation:-276.5,x:51.7,y:44.1,alpha:0},5).wait(1));

	// Layer 5
	this.instance_1 = new lib.Symbol24();
	this.instance_1.parent = this;
	this.instance_1.setTransform(69.2,73.2,0.38,0.38,-164.9,0,0,20.7,12.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:21,regY:12.3,scaleX:0.36,scaleY:0.36,rotation:-172.8,x:65.5,y:72.7},1).to({regX:21.6,regY:12.7,scaleX:0.27,scaleY:0.27,rotation:-300,x:47.3,y:70.9,alpha:0},5).wait(1).to({regX:21.1,scaleX:0.62,scaleY:0.62,rotation:-420,x:116.4,y:78.2,alpha:1},0).to({regX:20.9,regY:12.6,scaleX:0.4,scaleY:0.4,rotation:-516.7,x:72.8,y:73.5},12).wait(1));

	// Layer 4
	this.instance_2 = new lib.Symbol24();
	this.instance_2.parent = this;
	this.instance_2.setTransform(70,84.3,0.579,0.579,-123.3,0,0,21.1,12.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:12.4,scaleX:0.42,scaleY:0.42,rotation:-187.8,x:36.8,y:89.4},8).to({regX:21.4,regY:12.7,scaleX:0.31,scaleY:0.31,rotation:-315,x:16.1,y:92.7,alpha:0},5).wait(1).to({regX:21.1,regY:12.6,scaleX:0.71,scaleY:0.71,rotation:-435,x:94.6,y:80.4,alpha:1},0).to({regY:12.7,scaleX:0.6,scaleY:0.6,rotation:-475.3,x:74,y:83.7},5).wait(1));

	// Layer 3
	this.instance_3 = new lib.Symbol24();
	this.instance_3.parent = this;
	this.instance_3.setTransform(74.5,47.8,0.554,0.554,-95.6,0,0,21.1,12.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:12.6,scaleX:0.46,scaleY:0.46,rotation:-127.8,x:62.8,y:33.3},4).to({regX:21.2,regY:12.5,scaleX:0.35,scaleY:0.35,rotation:-255,x:48.1,y:15.2,alpha:0},5).wait(1).to({regY:12.6,scaleX:0.79,scaleY:0.79,rotation:-375,x:103.6,y:84.1,alpha:1},0).to({regY:12.7,scaleX:0.58,scaleY:0.58,rotation:-447.7,x:77.4,y:51.3},9).wait(1));

	// Layer 2
	this.instance_4 = new lib.Symbol24();
	this.instance_4.parent = this;
	this.instance_4.setTransform(34.8,74.4,0.325,0.325,110.8,0,0,20.9,12.2);
	this.instance_4.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:21.4,regY:12.8,scaleX:0.29,scaleY:0.29,rotation:60,x:27,y:73.6,alpha:0},2).wait(1).to({regX:21.1,regY:12.7,scaleX:0.65,scaleY:0.65,rotation:-60,x:100,y:81.4,alpha:1},0).to({regX:20.9,regY:12.4,scaleX:0.38,scaleY:0.38,rotation:-172.8,x:46.3,y:75.6},14).to({regY:12.3,scaleX:0.34,scaleY:0.34,rotation:-223.6,x:38.7,y:74.8,alpha:0.602},2).wait(1));

	// Layer 1
	this.instance_5 = new lib.Symbol24();
	this.instance_5.parent = this;
	this.instance_5.setTransform(94.6,73,0.714,0.714,-69.2,0,0,21.1,12.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:21.2,scaleX:0.46,scaleY:0.46,rotation:-157.8,x:46.9,y:54.4},11).to({regY:12.7,scaleX:0.35,scaleY:0.35,rotation:-285,x:25.1,y:46.1,alpha:0},5).wait(1).to({regX:21.1,regY:12.6,scaleX:0.79,scaleY:0.79,rotation:-405,x:107.6,y:78,alpha:1},0).to({scaleX:0.74,scaleY:0.74,rotation:-421.2,x:99,y:74.6},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(28.5,35.6,103,63);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol47();
	this.instance.parent = this;
	this.instance.setTransform(160.8,31.6,1.185,1.185,0,0,0,5.9,9.7);
	this.instance.alpha = 0.75;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFDE32").s().p("AAmC0QgGgFAAgIQAAgJAFgFQAEgEAJgFIAKgKIABgJQAEgMgBgFQAAgGgFgJQgJgOgTgYIgcggQgmgqgPgcIgIgPIgNgeQgNgbgNgPQgMgNgEgIQgDgGAAgHQAAgHAEgEQAKgKAPAHQAJAFAJANIASAWQABgHAGgFQAHgFAHABQAJAAAHAKQAGAIABALIABAUQAAAMADAHQADAOARAQQAUAUAFAHQAGAKAKAVQAGAKAXAdQAUAYAGASQALAggTAfIgGAJIgCACQgBADgHAHIgKAMQgJAJgNABIgEABQgIAAgHgGg");
	this.shape.setTransform(163.4,32.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E1C00C").s().p("AAFBaQgKgDgGgNIgIgXQgGgMgPgRIgTgWQgNgPgDgHQgIgOAGgNQADgGAHgDQAHgEAGADQAAgKAFgIQAEgIAIgDQAGgCALABIAMABIAHAQQAOAcAoArIAbAfIgBADQgGAKgQAAQACAOgEAIQgDAHgIADQgIAEgIgDQgBAIgHAEQgFADgFAAIgFgBg");
	this.shape_1.setTransform(158.4,34.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.instance_1 = new lib.min();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.821,0.821);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E1C00C").s().p("AAJAsIgCgCQgFgBgEgFQgEgEgHgOIgEgIIgPgRQgLgOABgLQACgLALgEQAKgFAJAIQAEADAFAIIABABIAEADQADACAHAMIAEAGIANAOQAKAKACAJQABAKgFAIQgHAIgJAAQgIAAgGgGg");
	this.shape_2.setTransform(154.9,33.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.instance_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol22, new cjs.Rectangle(0,0,193,61.6), null);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// min.png
	this.instance = new lib.Symbol22();
	this.instance.parent = this;
	this.instance.setTransform(97.8,32.1,1,1,0,0,0,96.5,30.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:97.2,y:31.5},9,cjs.Ease.get(-1)).to({x:96.5,y:30.8},10,cjs.Ease.get(1)).to({x:97.2,y:31.5},10,cjs.Ease.get(-1)).to({x:97.8,y:32.1},10,cjs.Ease.get(1)).wait(1));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#534400").s().rr(-96.5,-30.8,193,61.6,7.1);
	this.shape.setTransform(99.5,33.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.3,1.3,194.8,63.4);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol19();
	this.instance.parent = this;
	this.instance.setTransform(96.5,30.8,1,1,0,0,0,96.5,30.8);
	this.instance.alpha = 0.148;
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol21();
	this.instance_1.parent = this;
	this.instance_1.setTransform(98,32.3,1,1,0,0,0,98,32.3);

	this.instance_2 = new lib.Symbol22();
	this.instance_2.parent = this;
	this.instance_2.setTransform(97.8,32.1,1,1,0,0,0,96.5,30.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#534400").s().p("At9E0QhHAAAAhHIAAnZQAAhHBHAAIb7AAQBHAAAABHIAAHZQAABHhHAAg");
	this.shape.setTransform(99.5,33.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.shape},{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.3,1.3,194.8,63.4);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol47();
	this.instance.parent = this;
	this.instance.setTransform(163.3,28.5,1.185,1.185,180,0,0,5.9,9.7);
	this.instance.alpha = 0.75;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9DCC50").s().p("ABbBBQgIgCgGgKIgLgQQgMgRgXgJQgQgHgZgEIgBAAIg9gNIgXgFQgLgCgFgFQgGgGABgNQABgLAFgFQAHgHANACQAMABARAEIAcAHQAQADAfADQAgAEAQADQALACAEAEQAFAEAAAIQAAAHgDAGQASAUAMAQQAHAKABAGQABAMgIAHQgGAEgGAAIgHgBg");
	this.shape.setTransform(166.3,21.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#86C242").s().p("AgXBjQgCgDgDgKIgHgPIgIgbIgHgYQgDgLAAgJQgegCgIgQQgDgEgCgMQgCgJACgHQADgIASgIQAPgFAKgBIgDgGQgDgHACgHQADgIAGgDQAFgCALAAIAPAAIA9AMIAAAAIAIAGQARAPABAMIABAJQABADAEADIAHAEQAIAGADAKQADALgDAKQgEAPgRATQgMAOgOAMQgQANgLgDQgCAPgFAIQgHANgKADIgHABQgKAAgFgHgAA0gLIgCADIgCAEQgDADgBAFIAAAAIALgKIACgDQAAAAAAAAQAAAAAAgBQABAAgBAAQAAAAAAgBIAAgBIgDgBQAAAAAAAAQgBAAAAABQAAAAgBAAQAAAAAAABg");
	this.shape_1.setTransform(160.4,30.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	// Layer 1
	this.instance_1 = new lib.max();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.821,0.821);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(0,0,193,61.6), null);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// max.png
	this.instance = new lib.Symbol17();
	this.instance.parent = this;
	this.instance.setTransform(96.5,30.8,1,1,0,0,0,96.5,30.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:97.1,y:31.4},9,cjs.Ease.get(-1)).to({x:97.8,y:32.1},10,cjs.Ease.get(1)).to({x:97.2,y:31.5},10,cjs.Ease.get(-1)).to({x:96.5,y:30.8},10,cjs.Ease.get(1)).wait(1));

	// Layer 3
	this.instance_1 = new lib.Tween1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(99.5,33.8);

	this.instance_2 = new lib.Tween2("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(99.5,33.8);
	this.instance_2._off = true;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#365500").s().rr(-96.5,-30.8,193,61.6,7.1);
	this.shape.setTransform(99.5,33.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_1}]},9).to({state:[{t:this.instance_2}]},10).to({state:[{t:this.instance_2}]},10).to({state:[{t:this.shape}]},10).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({startPosition:0},9,cjs.Ease.get(-1)).to({_off:true},10,cjs.Ease.get(1)).wait(21));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},10,cjs.Ease.get(1)).to({startPosition:0},10,cjs.Ease.get(-1)).to({_off:true},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,196,64.6);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol16();
	this.instance.parent = this;
	this.instance.setTransform(96.5,30.8,1,1,0,0,0,96.5,30.8);
	this.instance.alpha = 0.211;
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol15();
	this.instance_1.parent = this;
	this.instance_1.setTransform(98,32.3,1,1,0,0,0,98,32.3);

	this.instance_2 = new lib.Symbol17();
	this.instance_2.parent = this;
	this.instance_2.setTransform(96.5,30.8,1,1,0,0,0,96.5,30.8);

	this.instance_3 = new lib.Tween1("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(99.5,33.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_3},{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,196,64.6);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol18();
	this.instance.parent = this;
	this.instance.setTransform(98,32.3,1,1,0,0,0,98,32.3);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(0,0,196,64.6), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol14();
	this.instance.parent = this;
	this.instance.setTransform(98,32.3,1,1,0,0,0,98,32.3);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,0,196,64.6), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol9();
	this.instance.parent = this;
	this.instance.setTransform(1086.4,164.5,1,1,0,0,0,0.5,142.5);

	this.instance_1 = new lib.Symbol9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1142.4,164.5,1,1,0,0,0,0.5,142.5);

	this.instance_2 = new lib.Symbol9();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1194.4,193.5,1,1,0,0,0,0.5,142.5);

	this.instance_3 = new lib.Symbol9();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1250.4,142.5,1,1,0,0,0,0.5,142.5);

	this.instance_4 = new lib.Symbol9();
	this.instance_4.parent = this;
	this.instance_4.setTransform(651.5,164.5,1,1,0,0,0,0.5,142.5);

	this.instance_5 = new lib.Symbol9();
	this.instance_5.parent = this;
	this.instance_5.setTransform(707.5,164.5,1,1,0,0,0,0.5,142.5);

	this.instance_6 = new lib.Symbol9();
	this.instance_6.parent = this;
	this.instance_6.setTransform(759.5,193.5,1,1,0,0,0,0.5,142.5);

	this.instance_7 = new lib.Symbol9();
	this.instance_7.parent = this;
	this.instance_7.setTransform(815.5,142.5,1,1,0,0,0,0.5,142.5);

	this.instance_8 = new lib.Symbol9();
	this.instance_8.parent = this;
	this.instance_8.setTransform(868.4,164.5,1,1,0,0,0,0.5,142.5);

	this.instance_9 = new lib.Symbol9();
	this.instance_9.parent = this;
	this.instance_9.setTransform(924.4,164.5,1,1,0,0,0,0.5,142.5);

	this.instance_10 = new lib.Symbol9();
	this.instance_10.parent = this;
	this.instance_10.setTransform(976.4,193.5,1,1,0,0,0,0.5,142.5);

	this.instance_11 = new lib.Symbol9();
	this.instance_11.parent = this;
	this.instance_11.setTransform(1032.4,142.5,1,1,0,0,0,0.5,142.5);

	this.instance_12 = new lib.Symbol9();
	this.instance_12.parent = this;
	this.instance_12.setTransform(435.5,164.5,1,1,0,0,0,0.5,142.5);

	this.instance_13 = new lib.Symbol9();
	this.instance_13.parent = this;
	this.instance_13.setTransform(491.5,164.5,1,1,0,0,0,0.5,142.5);

	this.instance_14 = new lib.Symbol9();
	this.instance_14.parent = this;
	this.instance_14.setTransform(543.5,193.5,1,1,0,0,0,0.5,142.5);

	this.instance_15 = new lib.Symbol9();
	this.instance_15.parent = this;
	this.instance_15.setTransform(599.5,142.5,1,1,0,0,0,0.5,142.5);

	this.instance_16 = new lib.Symbol9();
	this.instance_16.parent = this;
	this.instance_16.setTransform(0.5,164.5,1,1,0,0,0,0.5,142.5);

	this.instance_17 = new lib.Symbol9();
	this.instance_17.parent = this;
	this.instance_17.setTransform(56.5,164.5,1,1,0,0,0,0.5,142.5);

	this.instance_18 = new lib.Symbol9();
	this.instance_18.parent = this;
	this.instance_18.setTransform(108.5,193.5,1,1,0,0,0,0.5,142.5);

	this.instance_19 = new lib.Symbol9();
	this.instance_19.parent = this;
	this.instance_19.setTransform(164.5,142.5,1,1,0,0,0,0.5,142.5);

	this.instance_20 = new lib.Symbol9();
	this.instance_20.parent = this;
	this.instance_20.setTransform(217.5,164.5,1,1,0,0,0,0.5,142.5);

	this.instance_21 = new lib.Symbol9();
	this.instance_21.parent = this;
	this.instance_21.setTransform(273.5,164.5,1,1,0,0,0,0.5,142.5);

	this.instance_22 = new lib.Symbol9();
	this.instance_22.parent = this;
	this.instance_22.setTransform(325.5,193.5,1,1,0,0,0,0.5,142.5);

	this.instance_23 = new lib.Symbol9();
	this.instance_23.parent = this;
	this.instance_23.setTransform(381.5,142.5,1,1,0,0,0,0.5,142.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,1250.9,336), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(977.5,177.7,1.12,1.12,0,0,0,97,158.7);

	this.instance_1 = new lib.Symbol2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(760.3,177.7,1.12,1.12,0,0,180,97,158.7);

	this.instance_2 = new lib.Symbol2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(108.9,177.7,1.119,1.12,0,0,0,97,158.7);

	this.instance_3 = new lib.Symbol2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(543,177.7,1.12,1.12,0,0,0,97,158.7);

	this.instance_4 = new lib.Symbol2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(325.8,177.7,1.12,1.12,0,0,180,97,158.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0.4,0,1085.7,355.5), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol4();
	this.instance.parent = this;
	this.instance.setTransform(434.4,177.7,1,1,0,0,0,434.4,177.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:1.4},49).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.4,0,1085.7,355.5);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(260.4,139.7,1,1,0,0,0,434.4,177.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-173.6,-38,1085.7,355.5), null);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// galstena.png
	this.instance = new lib.Symbol28();
	this.instance.parent = this;
	this.instance.setTransform(57.5,66,1,1,0,0,0,11.5,5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:80.2},9,cjs.Ease.get(-1)).to({y:96},10,cjs.Ease.get(1)).to({y:81},10,cjs.Ease.get(-1)).to({y:66},10,cjs.Ease.get(1)).to({y:80.2},9,cjs.Ease.get(-1)).to({y:96},10,cjs.Ease.get(1)).to({y:81},10,cjs.Ease.get(-1)).to({y:66},10,cjs.Ease.get(1)).wait(1));

	// Symbol 26
	this.instance_1 = new lib.Symbol26();
	this.instance_1.parent = this;
	this.instance_1.setTransform(158.5,115.9,1,1,5.2,0,0,45.1,40);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:5,x:158.6,y:130.3},9,cjs.Ease.get(-1)).to({rotation:5.1,y:146},10,cjs.Ease.get(1)).to({regY:40.1,rotation:5,y:131.1},10,cjs.Ease.get(-1)).to({regY:40,rotation:5.2,x:158.5,y:115.9},10,cjs.Ease.get(1)).to({rotation:5,x:158.6,y:130.3},9,cjs.Ease.get(-1)).to({rotation:5.1,y:146},10,cjs.Ease.get(1)).to({regY:40.1,rotation:5,y:131.1},10,cjs.Ease.get(-1)).to({regY:40,rotation:5.2,x:158.5,y:115.9},10,cjs.Ease.get(1)).wait(1));

	// Symbol 27
	this.instance_2 = new lib.Symbol27();
	this.instance_2.parent = this;
	this.instance_2.setTransform(84.2,114.8,1,1,5.2,0,0,95,61.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:5,x:84.3,y:129.1},9,cjs.Ease.get(-1)).to({rotation:5.1,x:84.4,y:144.8},10,cjs.Ease.get(1)).to({rotation:5,y:129.8},10,cjs.Ease.get(-1)).to({rotation:5.2,x:84.2,y:114.8},10,cjs.Ease.get(1)).to({rotation:5,x:84.3,y:129.1},9,cjs.Ease.get(-1)).to({rotation:5.1,x:84.4,y:144.8},10,cjs.Ease.get(1)).to({rotation:5,y:129.8},10,cjs.Ease.get(-1)).to({rotation:5.2,x:84.2,y:114.8},10,cjs.Ease.get(1)).wait(1));

	// foot.png
	this.instance_3 = new lib.Symbol31();
	this.instance_3.parent = this;
	this.instance_3.setTransform(85,116.5,1,1,0,0,0,38,28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:130.7},9,cjs.Ease.get(-1)).to({y:146.5},10,cjs.Ease.get(1)).to({y:131.5},10,cjs.Ease.get(-1)).to({y:116.5},10,cjs.Ease.get(1)).to({y:130.7},9,cjs.Ease.get(-1)).to({y:146.5},10,cjs.Ease.get(1)).to({y:131.5},10,cjs.Ease.get(-1)).to({y:116.5},10,cjs.Ease.get(1)).wait(1));

	// man.png
	this.instance_4 = new lib.Symbol29();
	this.instance_4.parent = this;
	this.instance_4.setTransform(120,49.5,1,1,0,0,0,74,59.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:63.7},9,cjs.Ease.get(-1)).to({y:79.5},10,cjs.Ease.get(1)).to({y:64.5},10,cjs.Ease.get(-1)).to({y:49.5},10,cjs.Ease.get(1)).to({y:63.7},9,cjs.Ease.get(-1)).to({y:79.5},10,cjs.Ease.get(1)).to({y:64.5},10,cjs.Ease.get(-1)).to({y:49.5},10,cjs.Ease.get(1)).wait(1));

	// hand.png
	this.instance_5 = new lib.Symbol30();
	this.instance_5.parent = this;
	this.instance_5.setTransform(34.5,73,1,1,0,0,0,26.5,21);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({y:87.2},9,cjs.Ease.get(-1)).to({y:103},10,cjs.Ease.get(1)).to({y:88},10,cjs.Ease.get(-1)).to({y:73},10,cjs.Ease.get(1)).to({y:87.2},9,cjs.Ease.get(-1)).to({y:103},10,cjs.Ease.get(1)).to({y:88},10,cjs.Ease.get(-1)).to({y:73},10,cjs.Ease.get(1)).wait(1));

	// tale.png
	this.instance_6 = new lib.Symbol23();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-54.4,87,1,1,0,0,0,21,12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({y:101.2},9,cjs.Ease.get(-1)).to({y:117},10,cjs.Ease.get(1)).to({y:102},10,cjs.Ease.get(-1)).to({y:87},10,cjs.Ease.get(1)).to({y:101.2},9,cjs.Ease.get(-1)).to({y:117},10,cjs.Ease.get(1)).to({y:102},10,cjs.Ease.get(-1)).to({y:87},10,cjs.Ease.get(1)).wait(1));

	// Layer 10 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AxQPPIAA+dMAihAAAIAAedg");
	var mask_graphics_78 = new cjs.Graphics().p("AxQPPIAA+dMAihAAAIAAedg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-29.5,y:97.5}).wait(78).to({graphics:mask_graphics_78,x:-29.5,y:97.5}).wait(1));

	// Layer 11
	this.instance_7 = new lib.Symbol39();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-124.6,132.8,1,1,0,0,0,193.8,31.6);

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:-364.9},78).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-140,-10,355.5,201.4);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol10();
	this.instance.parent = this;
	this.instance.setTransform(267.9,168,1,1,0,0,0,299.9,168);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:50.9},99).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,0,1250.9,336);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol25();
	this.instance.parent = this;
	this.instance.setTransform(222.5,91,1,1,0,0,0,106.5,91);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(-64.6,-10,491.8,205), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(269.7,196.7,1,1,0,0,0,97,158.7);
	this.instance.alpha = 0.23;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(-1,0,1085.7,355.5), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol11();
	this.instance.parent = this;
	this.instance.setTransform(645.1,302.5,1,1,0,0,0,625.5,168);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Symbol 6
	this.instance_1 = new lib.Symbol6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(556.2,177.7,1,1,0,0,0,542.9,177.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Symbol 5
	this.instance_2 = new lib.Symbol5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(311.9,189.6,1,1,0,0,0,311.9,159.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(-12.4,0,1250.9,470.5), null);


// stage content:
(lib.binomo_arrowman_600300 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol42();
	this.instance.parent = this;
	this.instance.setTransform(382.4,30.6,1,1,0,0,0,208.6,17.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgTBUQgCgDABgFQAAgEADgCQADgCAEAAQAEAAADADQACADgBAEQAAAEgDACQgDADgEAAQgEAAgDgDgAgLAmIASh8IAOAAIgVB8g");
	this.shape.setTransform(585.8,58.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AglA5QgKgFgHgIQgHgJgCgLQgDgMACgMQACgNAHgMQAGgLAJgIQAJgIALgEQALgEAMAAQAIAAAIACQAHACAGAEIAKAJQAEAEADAGIAEgZIAMAAIgSB1IgNAAIAEgYIgKAKQgGAFgGAEQgHADgIACQgHACgIAAQgNAAgKgEgAgOgsQgJADgIAGQgHAHgFAIQgGAKgBAKQgCALACAJQACAJAFAGQAGAHAHADQAIAEAKAAQAIAAAHgDQAIgCAHgFQAHgFAGgGQAFgFAEgHIAFgfQgCgHgDgGQgEgGgFgEQgFgFgHgCQgIgDgIAAQgIAAgJAEg");
	this.shape_1.setTransform(575.2,60.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgWA6QgKgEgIgIQgIgIgDgMIgCgMIABgOIAEgPIAGgNQAHgLAKgHQAKgHAMgEQAKgDAMAAQAKAAAJACQAJADAHAFIgCANQgGgFgJgDQgIgDgJAAQgKAAgJADQgJADgIAGQgJAGgFAJQgHAJgCAMQgBAMACAKQADAJAGAGQAGAGAIADQAJADAJAAQAKAAAJgDQAKgDAJgFIgCAPQgJAEgKACQgJACgLAAQgLAAgLgDg");
	this.shape_2.setTransform(561.9,60.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhFBXIAbiqIANAAIgEAZIAKgMIANgJQAHgDAGgCQAIgCAJAAQAMAAAKAEQAKAFAHAJQAHAIACAMQADALgCAOQgCANgGAKQgGALgJAIQgJAIgMAFQgLADgMAAQgIAAgHgCQgIgBgFgFQgGgDgEgGQgEgEgCgGIgNBPgAABhHQgHADgHAEQgHAFgFAGQgGAGgDAHIgGAfQACAIADAEQAEAGAFAFQAGAEAHADQAHACAHAAQAKAAAJgDQAJgDAHgHQAIgGAFgIQAFgJABgMQACgKgCgKQgCgIgFgHQgGgGgHgEQgIgDgJgBQgJAAgIADg");
	this.shape_3.setTransform(547.5,63.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhGBWIADgNQAEACAFAAQAFAAAFgCQAFgCAFgEQALgMAHgLIAIgOIgoh0IAPAAIAhBnIA7hnIAPAAIhQCIIgLASQgHAGgFAFQgGAEgGACQgFACgGAAQgIAAgGgBg");
	this.shape_4.setTransform(533.9,63.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAeA7Igmg4IgbAAIgJA4IgNAAIASh1IAOAAIgIAyIAcAAIAvgyIARAAIg3A5IApA8g");
	this.shape_5.setTransform(521.7,60.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgXA6QgLgEgIgIQgEgDgDgFQgEgFgBgGQgCgGgBgHQAAgHABgHQACgJAHgRQAGgLAKgIQAJgHALgEQALgEAKAAQAIAAAHABIAMAFQAFADAEAEQAEAEACAFQAFAKABAMQAAAMgFALIhgAAQgBALADAIQAEAIAHAFQAGAFAJACQAIADAIAAQALAAALgDQALgDAIgEIgCAOQgIAEgLACQgKACgLAAQgMAAgLgDgAgHgtQgIADgHAGQgHAFgFAIQgFAJgCAKIBUAAQACgHAAgHQgBgIgEgGQgEgHgHgEQgIgFgLAAQgJAAgIADg");
	this.shape_6.setTransform(502,60.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAeA7IAPhdIheBdIgMAAIASh1IAPAAIgPBeIBdheIAMAAIgSB1g");
	this.shape_7.setTransform(488.1,60.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAdA7IAIg1IhLAAIgIA1IgOAAIASh1IAOAAIgIA1IBLAAIAJg1IANAAIgSB1g");
	this.shape_8.setTransform(473.8,60.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgXA6QgLgEgIgIQgEgDgDgFQgEgFgBgGQgCgGgBgHQAAgHABgHQACgJAHgRQAGgLAKgIQAJgHALgEQALgEAKAAQAIAAAHABIAMAFQAFADAEAEQAEAEACAFQAFAKABAMQAAAMgFALIhgAAQgBALADAIQAEAIAHAFQAGAFAJACQAIADAIAAQALAAALgDQALgDAIgEIgCAOQgIAEgLACQgKACgLAAQgMAAgLgDgAgHgtQgIADgHAGQgHAFgFAIQgFAJgCAKIBUAAQACgHAAgHQgBgIgEgGQgEgHgHgEQgIgFgLAAQgJAAgIADg");
	this.shape_9.setTransform(460.2,60.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhGA6IACgMQAEABAGABQAIAAAHgIQAGgHAGgNQAHgTANg7IBSAAIgTB0IgOAAIARhoIg3AAIgKAsQgFAUgHANQgGAOgIAHQgEAEgFACQgFACgFgBQgJAAgGgBg");
	this.shape_10.setTransform(445.4,60.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag3A7IASh1IA8AAQAIAAAHADQAGACAFAEQAEAEACAGQACAGgCAHQgBAKgGAHQgGAGgJADQAJACAFAGQADAEABAFQABAFgBAGQgCAHgDAGQgDAGgGAEQgFAEgIACQgIACgJAAgAgnAvIAtAAQANAAAIgFQAEgDADgEQACgEABgGQABgGgBgEQgCgDgDgDQgFgDgLAAIgxAAgAgfgGIAuAAQALAAAHgFQAHgFABgKQABgFgBgEQgBgEgDgCQgGgEgLAAIgtAAg");
	this.shape_11.setTransform(432.2,60.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AglA5QgKgFgHgIQgHgJgCgLQgDgMACgMQACgNAHgMQAGgLAJgIQAJgIALgEQALgEAMAAQAIAAAIACQAHACAGAEIAKAJQAEAEADAGIAEgZIAMAAIgSB1IgNAAIAEgYIgKAKQgGAFgGAEQgHADgIACQgHACgIAAQgNAAgKgEgAgOgsQgJADgIAGQgHAHgFAIQgGAKgBAKQgCALACAJQACAJAFAGQAGAHAHADQAIAEAKAAQAIAAAHgDQAIgCAHgFQAHgFAGgGQAFgFAEgHIAFgfQgCgHgDgGQgEgGgFgEQgFgFgHgCQgIgDgIAAQgIAAgJAEg");
	this.shape_12.setTransform(418.1,60.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhFBXIAbiqIANAAIgEAZIAKgMIANgJQAHgDAGgCQAIgCAJAAQAMAAAKAEQAKAFAHAJQAHAIACAMQADALgCAOQgCANgGAKQgGALgJAIQgJAIgMAFQgLADgMAAQgIAAgHgCQgIgBgFgFQgGgDgEgGQgEgEgCgGIgNBPgAABhHQgHADgHAEQgHAFgFAGQgGAGgDAHIgGAfQACAIADAEQAEAGAFAFQAGAEAHADQAHACAHAAQAKAAAJgDQAJgDAHgHQAIgGAFgIQAFgJABgMQACgKgCgKQgCgIgFgHQgGgGgHgEQgIgDgJgBQgJAAgIADg");
	this.shape_13.setTransform(402.5,63.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAdA7IAQhoIhLAAIgQBoIgOAAIASh1IBnAAIgSB1g");
	this.shape_14.setTransform(388.3,60.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AglA5QgKgFgHgIQgHgJgCgLQgDgMACgMQACgNAHgMQAGgLAJgIQAJgIALgEQALgEAMAAQAIAAAIACQAHACAGAEIAKAJQAEAEADAGIAEgZIAMAAIgSB1IgNAAIAEgYIgKAKQgGAFgGAEQgHADgIACQgHACgIAAQgNAAgKgEgAgOgsQgJADgIAGQgHAHgFAIQgGAKgBAKQgCALACAJQACAJAFAGQAGAHAHADQAIAEAKAAQAIAAAHgDQAIgCAHgFQAHgFAGgGQAFgFAEgHIAFgfQgCgHgDgGQgEgGgFgEQgFgFgHgCQgIgDgIAAQgIAAgJAEg");
	this.shape_15.setTransform(373.7,60.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAdA7IAIg1IhLAAIgIA1IgOAAIASh1IAOAAIgIA1IBLAAIAJg1IANAAIgSB1g");
	this.shape_16.setTransform(359,60.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAeBQIAOhdIhcBdIgNAAIASh1IAPAAIgQBeIBeheIAMAAIgSB1gAgCg6QgJgCgGgGIACgNQAHAGAIADQAFACAKAAQAIAAAJgCQAIgDAJgGIgCANQgIAGgJACQgIACgIAAQgKAAgGgCg");
	this.shape_17.setTransform(338.5,58.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AglA5QgKgFgHgIQgHgJgCgLQgDgMACgMQACgNAHgMQAGgLAJgIQAJgIALgEQALgEAMAAQAIAAAIACQAHACAGAEIAKAJQAEAEADAGIAEgZIAMAAIgSB1IgNAAIAEgYIgKAKQgGAFgGAEQgHADgIACQgHACgIAAQgNAAgKgEgAgOgsQgJADgIAGQgHAHgFAIQgGAKgBAKQgCALACAJQACAJAFAGQAGAHAHADQAIAEAKAAQAIAAAHgDQAIgCAHgFQAHgFAGgGQAFgFAEgHIAFgfQgCgHgDgGQgEgGgFgEQgFgFgHgCQgIgDgIAAQgIAAgJAEg");
	this.shape_18.setTransform(323.7,60.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AA0BLIAEghIhtAAIgFAhIgOAAIAIgtIAQAAIANgWIAKgWIAIgcIAHggIBSAAIgRBoIARAAIgHAtgAgNgJQgMAbgJAMIBMAAIAOhbIg4AAQgIAlgFAPg");
	this.shape_19.setTransform(307.4,62.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AglA5QgKgFgHgIQgHgJgCgLQgDgMACgMQACgNAHgMQAGgLAJgIQAJgIALgEQALgEAMAAQAIAAAIACQAHACAGAEIAKAJQAEAEADAGIAEgZIAMAAIgSB1IgNAAIAEgYIgKAKQgGAFgGAEQgHADgIACQgHACgIAAQgNAAgKgEgAgOgsQgJADgIAGQgHAHgFAIQgGAKgBAKQgCALACAJQACAJAFAGQAGAHAHADQAIAEAKAAQAIAAAHgDQAIgCAHgFQAHgFAGgGQAFgFAEgHIAFgfQgCgHgDgGQgEgGgFgEQgFgFgHgCQgIgDgIAAQgIAAgJAEg");
	this.shape_20.setTransform(293.4,60.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgyA7IASh1IBTAAIgCANIhFAAIgRBog");
	this.shape_21.setTransform(281.3,60.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhGBWIACgNQAFACAFAAQAGAAAEgCQAFgCAEgEQAMgMAGgLIAIgOIgnh0IAPAAIAhBnIA7hnIAQAAIhQCIIgNASQgFAGgGAFQgGAEgFACQgHACgGAAQgHAAgGgBg");
	this.shape_22.setTransform(268.5,63.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgeA5QgLgEgHgIQgIgIgDgLIgCgNIABgNQABgKAIgQQAHgLAKgIQAJgHAMgEQAMgEALAAQALAAALAEQAKAEAIAIQAHAIAEAMQACAQgBAJIgEAOIgFAMQgHALgKAIQgKAIgMAEQgLADgLAAQgMAAgKgEgAgKgsQgJADgIAHQgIAGgFAJQgFAJgCALQgBAKACAKQACAIAGAHQAFAGAIADQAIADAKAAQAJAAAJgDQAKgDAHgGQAIgHAFgJQAFgJACgLQACgKgCgKQgDgIgFgHQgGgGgIgDQgIgDgJAAQgJAAgKADg");
	this.shape_23.setTransform(248.5,60.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgXA7IAQhoIgtAAIACgNIBoAAIgDANIgtAAIgPBog");
	this.shape_24.setTransform(236.5,60.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgWA6QgKgEgIgIQgIgIgDgMIgCgMIABgOIAEgPIAGgNQAHgLAKgHQAKgHAMgEQAKgDAMAAQAKAAAJACQAJADAHAFIgCANQgGgFgJgDQgIgDgJAAQgKAAgJADQgJADgIAGQgJAGgFAJQgHAJgCAMQgBAMACAKQADAJAGAGQAGAGAIADQAJADAJAAQAKAAAJgDQAKgDAJgFIgCAPQgJAEgKACQgJACgLAAQgLAAgLgDg");
	this.shape_25.setTransform(224.3,60.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgeA5QgLgEgHgIQgIgIgDgLIgCgNIABgNQABgKAIgQQAHgLAKgIQAJgHAMgEQAMgEALAAQALAAALAEQAKAEAIAIQAHAIAEAMQACAQgBAJIgEAOIgFAMQgHALgKAIQgKAIgMAEQgLADgLAAQgMAAgKgEgAgKgsQgJADgIAHQgIAGgFAJQgFAJgCALQgBAKACAKQACAIAGAHQAFAGAIADQAIADAKAAQAJAAAJgDQAKgDAHgGQAIgHAFgJQAFgJACgLQACgKgCgKQgDgIgFgHQgGgGgIgDQgIgDgJAAQgJAAgKADg");
	this.shape_26.setTransform(210.6,60.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AhFBXIAbiqIANAAIgEAZIAKgMIANgJQAHgDAGgCQAIgCAJAAQAMAAAKAEQAKAFAHAJQAHAIACAMQADALgCAOQgCANgGAKQgGALgJAIQgJAIgMAFQgLADgMAAQgIAAgHgCQgIgBgFgFQgGgDgEgGQgEgEgCgGIgNBPgAABhHQgHADgHAEQgHAFgFAGQgGAGgDAHIgGAfQACAIADAEQAEAGAFAFQAGAEAHADQAHACAHAAQAKAAAJgDQAJgDAHgHQAIgGAFgIQAFgJABgMQACgKgCgKQgCgIgFgHQgGgGgHgEQgIgDgJgBQgJAAgIADg");
	this.shape_27.setTransform(195.4,63.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAdA7IAQhoIhLAAIgQBoIgOAAIASh1IBnAAIgSB1g");
	this.shape_28.setTransform(181.2,60.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	// Layer 3
	this.instance_1 = new lib.Symbol13();
	this.instance_1.parent = this;
	this.instance_1.setTransform(470.5,229.8,1,1,0,0,0,96.5,30.8);

	this.instance_2 = new lib.Symbol12();
	this.instance_2.parent = this;
	this.instance_2.setTransform(470.5,150.8,1,1,0,0,0,96.5,30.8);

	this.instance_3 = new lib.Symbol8();
	this.instance_3.parent = this;
	this.instance_3.setTransform(133.2,180.2,1.062,1.062,0,0,0,139.5,91);

	this.instance_4 = new lib.logobin();
	this.instance_4.parent = this;
	this.instance_4.setTransform(13,9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// Layer 1
	this.instance_5 = new lib.Symbol7();
	this.instance_5.parent = this;
	this.instance_5.setTransform(532.6,139.7,1,1,0,0,0,549.5,177.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(216.6,112,1304.9,470.5);
// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 28,
	color: "#000000",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/binomo_arrowman_600_300_atlas_.png", id:"binomo_arrowman_600_300_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;