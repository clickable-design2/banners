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



(lib.background = function() {
	this.initialize(img.background);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,621,349);


(lib.binomodarit = function() {
	this.initialize(img.binomodarit);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,208,29);


(lib.blik = function() {
	this.initialize(img.blik);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,34,116);


(lib.girl1 = function() {
	this.initialize(img.girl1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,298,300);


(lib.girl2 = function() {
	this.initialize(img.girl2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,259,287);


(lib.kdepozitu = function() {
	this.initialize(img.kdepozitu);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,169,29);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,159,43);


(lib.mishka = function() {
	this.initialize(img.mishka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.promokod = function() {
	this.initialize(img.promokod);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,263,45);


(lib.ruka = function() {
	this.initialize(img.ruka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,65,103);


(lib.ruka2 = function() {
	this.initialize(img.ruka2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,104,201);// helper functions:

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


(lib.Символ83 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mishka();
	this.instance.parent = this;
	this.instance.setTransform(-32,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ83, new cjs.Rectangle(-32,-32,64,64), null);


(lib.Символ81 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhyBMIgCgbIhVAAIgDAbIgPAAIAAgsIANAAQAGgQAEgTQAFgUABgaQABgLAIgHQAHgHANAAIAvAAIAABqIAPAAIAAAsgAilg2QgDADAAAGQgDAhgDAMIgEAQIgHAQIAwAAIAAhYIgTAAQgGAAgDACgAI+AxIAAAAIAAh7IAWAAIAAAwIAWAAQAMAAAIACQAJACAEAEQAKAJAAAVQAAALgCAIQgDAHgEAEQgJAJgWAAIgvgCgAJUAgIAWAAQANAAADgEQACgCABgEIABgKIgBgLQgBgDgCgCQgEgFgMAAIgWAAgAD2AxIAAAAIAAh7IAWAAIAAAwIAVAAQANAAAIACQAJACAEAEQAKAJAAAVQAAALgCAIQgDAHgEAEQgJAJgWAAQgeAAgRgCgAEMAgIAVAAQANAAAEgEQACgCABgEIABgKIgBgLQgBgDgCgCQgEgFgNAAIgVAAgAmoAxIAAh7QAQgBAcAAQAYAAAJAGQAKAHAAATQAAAHgCAFQgBAFgCADQgFAHgMABIAAABQAOABAGAJQADAEABAFQABAGAAAHQAAATgJAHQgEADgIACQgIACgLAAQghAAgRgCgAmSAgIAYABIALgBQAEgBACgCQAFgEAAgLIgBgKQgCgEgCgBQgFgFgNAAIgXAAgAmSgWIAXAAQALAAAFgEQACgCABgDIABgJQAAgKgFgEIgGgCIgggBgAkoAwQgFgCgEgDQgHgGAAgLIAAhNQAAgLAHgGQAEgDAFgCQAEgBAGAAQAnAAAQABIgBARIgwAAQgFAAgCADQgCACAAAGIAAAWIAyAAIAAARIgyAAIAAAbQAAAFACADQACACAFAAIAwAAIABARIg3ACQgGAAgEgCgAGTAxIAAh7IAWAAIAABqIAmAAIAAhqIAWAAIAABqIAnAAIAAhqIAWAAIAAB7gAFgAxIAAh7IAXAAIAAB7gADGAxIgEhpIgDAAIgWBSQgBAEgCABQgCACgEAAIgRAAQgIAAgCgHIgWhSIgDAAIgEBpIgWAAIAFhyQAAgFACgCQADgCAEAAIAXAAQAIAAABAIIAWBTIACAAIAWhTQACgIAHAAIAXAAQAFAAACACQACACABAFIAEBygAgDAxIAAhQIABgQIgBAAIgHAPIgvBRIgXAAIAAh7IAWAAIAABPQAAAJgCAIIACAAIAHgPIAuhRIAWAAIAAB7gAnNAxIgLgjIguAAIgKAjIgXAAIAlh1QACgGAGAAIAWAAQAHAAACAGIAlB1gAndgDIgPg2IgFAAIgPA2IAjAAgApMAxIAAg4IgxAAIAAA4IgXAAIAAh7IAXAAIAAAxIAxAAIAAgxIAWAAIAAB7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ81, new cjs.Rectangle(-66.1,-7.6,132.1,15.3), null);


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7D5D56").s().p("ADHAwQgYgGgqgEQgpgEAVgQQAWgQAbgFQAbgFAXAGQAXAFARAIQARAHgFAOQgEAPgTAEQgHABgIAAQgNAAgOgEgAh6ARQgvgIgcAAQgbAAgUgJQgTgKgBgRQgBgSAUgDQAVgDAbAAQAcAAAcAOQAbAOATAXQAPATgYAAIgSgCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ49, new cjs.Rectangle(-26.5,-5.2,53.1,10.5), null);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ruka2();
	this.instance.parent = this;
	this.instance.setTransform(46.8,-90.4,0.9,0.9,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ45, new cjs.Rectangle(-46.8,-90.4,93.6,180.9), null);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AnhglIAtiqIOXD1IguCqg");
	var mask_graphics_1 = new cjs.Graphics().p("AniglIAuiqIOWD1IgtCqg");
	var mask_graphics_2 = new cjs.Graphics().p("AniglIAuiqIOXD1IguCqg");
	var mask_graphics_3 = new cjs.Graphics().p("AnhglIAtiqIOWD1IgtCqg");
	var mask_graphics_4 = new cjs.Graphics().p("AniglIAuiqIOXD1IguCqg");
	var mask_graphics_5 = new cjs.Graphics().p("AnhglIAtiqIOXD1IguCqg");
	var mask_graphics_6 = new cjs.Graphics().p("AniglIAuiqIOXD1IguCqg");
	var mask_graphics_7 = new cjs.Graphics().p("AnhglIAtiqIOWD1IgtCqg");
	var mask_graphics_8 = new cjs.Graphics().p("AniglIAuiqIOXD1IguCqg");
	var mask_graphics_9 = new cjs.Graphics().p("AniglIAuiqIOWD1IgtCqg");
	var mask_graphics_10 = new cjs.Graphics().p("AnhglIAtiqIOXD1IguCqg");
	var mask_graphics_11 = new cjs.Graphics().p("AniglIAuiqIOWD1IgtCqg");
	var mask_graphics_12 = new cjs.Graphics().p("AniglIAuiqIOXD1IguCqg");
	var mask_graphics_13 = new cjs.Graphics().p("AnhglIAtiqIOWD1IgtCqg");
	var mask_graphics_14 = new cjs.Graphics().p("AniglIAuiqIOXD1IguCqg");
	var mask_graphics_15 = new cjs.Graphics().p("AnhglIAtiqIOXD1IguCqg");
	var mask_graphics_16 = new cjs.Graphics().p("AniglIAuiqIOXD1IguCqg");
	var mask_graphics_17 = new cjs.Graphics().p("AnhglIAtiqIOWD1IgtCqg");
	var mask_graphics_18 = new cjs.Graphics().p("AniglIAuiqIOXD1IguCqg");
	var mask_graphics_19 = new cjs.Graphics().p("AniglIAuiqIOWD1IgtCqg");
	var mask_graphics_20 = new cjs.Graphics().p("AnhglIAtiqIOXD1IguCqg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:6.5,y:-16.2}).wait(1).to({graphics:mask_graphics_1,x:5.5,y:-13.1}).wait(1).to({graphics:mask_graphics_2,x:4.6,y:-10}).wait(1).to({graphics:mask_graphics_3,x:3.6,y:-6.8}).wait(1).to({graphics:mask_graphics_4,x:2.7,y:-3.7}).wait(1).to({graphics:mask_graphics_5,x:1.7,y:-0.6}).wait(1).to({graphics:mask_graphics_6,x:2.7,y:-3.7}).wait(1).to({graphics:mask_graphics_7,x:3.6,y:-6.8}).wait(1).to({graphics:mask_graphics_8,x:4.6,y:-10}).wait(1).to({graphics:mask_graphics_9,x:5.5,y:-13.1}).wait(1).to({graphics:mask_graphics_10,x:6.5,y:-16.2}).wait(1).to({graphics:mask_graphics_11,x:5.5,y:-13.1}).wait(1).to({graphics:mask_graphics_12,x:4.6,y:-10}).wait(1).to({graphics:mask_graphics_13,x:3.6,y:-6.8}).wait(1).to({graphics:mask_graphics_14,x:2.7,y:-3.7}).wait(1).to({graphics:mask_graphics_15,x:1.7,y:-0.6}).wait(1).to({graphics:mask_graphics_16,x:2.7,y:-3.7}).wait(1).to({graphics:mask_graphics_17,x:3.6,y:-6.8}).wait(1).to({graphics:mask_graphics_18,x:4.6,y:-10}).wait(1).to({graphics:mask_graphics_19,x:5.5,y:-13.1}).wait(1).to({graphics:mask_graphics_20,x:6.5,y:-16.2}).wait(20));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7D5D56").s().p("ADpBWQgNgKgdgIQgdgJgTgDQgSgEgDgNQgDgNAYgRQAYgQAhAQQAhAQAKAYQAKAYgDALQgDAGgEAAQgEAAgGgEgAiWgRQgkgMgggGQgggGABgKQAAgKAggSQAfgSApAOQAqAOAWAPQAXAPAIAPQAIAPglACIgGAAQghAAgggKg");

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-9,50.1,13.7);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ruka();
	this.instance.parent = this;
	this.instance.setTransform(-32.5,-51.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ41, new cjs.Rectangle(-32.5,-51.5,65,103), null);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFD400","#FF9900"],[0,1],0,21.6,0,-21.5).s().p("AxeEsQhgAAAAhhIAAmVQAAhhBgAAMAi9AAAQBgAAAABhIAAGVQAABhhgAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ38, new cjs.Rectangle(-121.5,-30,243.1,60), null);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#401000").s().p("AKzAoQACgSAFgMQAGgNAIgIQARgSAfAAQAXABAOAKQgCgdgRgMQgJgHgOgEQgPgFgUgEIAGgeQAhADAXALQAXAIAPAQQAPAQAFAXQAFAYgEAeQgGAugUAVQgUAVgpAAQhIAAAJhGgALsAMQgEAFgDAGQgDAIgBAKQgDAUAEAIQADAEAFACQAEABAHABQAJgBAGgCQAHgEADgGQAEgGADgLIAGgdIABgIQgLgIgNABQgRAAgHAJgAINBcQgRgTAGgqQAGgpATgSQATgRApAAQApAAAQASQAQATgGAqQgGAqgTARQgTARgoAAQgpAAgQgSgAJHgKQgHADgEAEQgIAJgEAcQgEAaAFAIQAFAIARABQAJgBAGgCQAHgCAEgFQAIgJADgbQAEgbgEgHQgFgJgRAAQgJAAgGACgAB7BrQgHgDgFgFQgKgMADgTIAPhtIAtAAIgOBhQgCAJADAEQADAEAHAAQAJgBAKgEQAJgFAPgOIANhaIArAAIgUCTIgiAAIAAgcQghAggfAAQgLAAgIgDgAqABdQgIgKgCgPQgCgRAEgWQADgXAGgNQAHgQAJgIQATgOAqAAQANAAALACQAKACAKAEQAJAFAEAJQAEAJgCAMQgDANgKAIQgKAHgSACIAAABQAWABAJAKQAEAGACAHQABAIgCAKQgDAWgQAJQgRAIgkAAQgtAAgPgRgApAApIgeADQgDAWAFAGQAEAGAQAAQARAAAIgDQAHgFABgLQACgKgGgFQgEgDgLAAIgGAAgApHgMQgGACgDAEQgGAGgEASIAbgDQAQgBAGgDQAGgEACgGQACgIgFgDQgFgDgPAAQgJAAgGABgAkYBpQgOgFgIgJQgQgTAGgqQAGgpASgRQASgRAoAAQAjAAAVAJIgGAbIgsAAQgLAAgHACQgIACgEAEQgJAIgDAZQgDAaAFAIQAGAIAUAAQAcAAATgDIADAdQgXAKgjAAQgUAAgOgFgAnVBZQgIgJgDgPQgCgPACgVQADgVAGgOQAGgQAKgHQATgQAqAAQATAAAOADQANADAHAHQAOANgEAYQgDAVgOAJQgHAEgLADQgLADgPABIgrADQAAAPAHAFQAHAFAPAAQAdAAAcgDIADAcQgZALgoAAQgqAAgQgVgAmNgNQgSAAgHAIQgHAGgEAWIAjgDQAMgBAFgEQAGgEABgKQABgJgFgDQgEgCgLAAIgEAAgAtJBqIAdjOQAagCAxgBQAUAAAOADQAOAEAIAFQAHAGADALQADAMgCAPQgCALgDAJQgDAIgFAGQgJAKgUACIAAABQAVABAJAOQAJAOgEAbQgCAPgFALQgGAKgIAGQgQALgmAAQg7AAgegDgAsYBKIAgAAQAUAAAIgGQAHgGADgSQACgSgFgFQgGgHgSAAIgjAAgAsLgQIAfAAQARAAAHgGQAHgFADgRQACgOgFgFQgGgEgQAAIghAAgAG5BqQgJgqgDgIQgFgKgLgBIgUAAIAAANIgHAwIgsAAIAViTIAsAAIgFAnIgEAQIAJAAQARAAAIgKQAIgJAQgkIAvAAQgUApgHAKQgFAGgGAFQgHAEgIACIgLACIAAABIAQADQAGADAEAEQAEADADAIIANA3gAAUBqIANhiQABgIgCgEQgDgDgGAAQgIgBgIAFQgIAEgOANIgNBcIgrAAIAOhiQACgIgDgEQgCgDgIAAQgIgBgIAFQgIADgOANIgNBdIgsAAIAUiTIAjAAIAAAbQAPgPAPgJQAPgHAOAAQAQAAAKAHQAJAHABANQAcgbAcAAQAUAAAJALQAFAGACAHQABAIgBAKIgQBtg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ37, new cjs.Rectangle(-84.2,-11,168.5,22), null);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AgbAbQgKgLgBgQQABgPAKgMQAMgKAPgBQAQABALAKQAMAMAAAPQAAAQgMALQgLAMgQAAQgPAAgMgMg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ36, new cjs.Rectangle(-3.8,-3.8,7.7,7.7), null);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AxeEsQhgAAAAhhIAAmVQAAhhBgAAMAi9AAAQBgAAAABhIAAGVQAABhhgAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ32, new cjs.Rectangle(-121.5,-30,243.1,60), null);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Eg0qAO7IAA91MBpVAAAIAAd1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ30, new cjs.Rectangle(-337,-95.5,674.2,191.1), null);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.blik();
	this.instance.parent = this;
	this.instance.setTransform(-5.7,-60.2,1,1,11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ29, new cjs.Rectangle(-27.7,-60.2,55.5,120.4), null);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.promokod();
	this.instance.parent = this;
	this.instance.setTransform(-131,-22);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ25, new cjs.Rectangle(-131,-22,263,45), null);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.blik();
	this.instance.parent = this;
	this.instance.setTransform(-17,-58);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(-17,-58,34,116), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(0.3,1,1).p("A6pr/MA1TAAAA6prBMA1TAAAA6ppKMA1TAAAA6pqIMA1TAAAA6pmeMA1TAAAA6plfMA1TAAAA6pnWMA1TAAAA6poVMA1TAAAA6pg8MA1TAAAA6piwMA1TAAAA6phxMA1TAAAA6pjoMA1TAAAA6pknMA1TAAAA6pACMA1TAAAA6pB5MA1TAAAA6pA6MA1TAAAA6pKJMA1TAAAA6pLIMA1TAAAA6pMAMA1TAAAA6pGbMA1TAAAA6pHaMA1TAAAA6pJRMA1TAAAA6pISMA1TAAAA6pEoMA1TAAAA6pFmMA1TAAAA6pDvMA1TAAAA6pCxMA1TAAA");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(-171.5,-77.8,343.2,155.6), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.kdepozitu();
	this.instance.parent = this;
	this.instance.setTransform(-85,-14);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(-85,-14,169,29), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,1,1).p("AUEsyIAAZlAGysyIAAZlEAhggMyIAAZlEAuygMyIAAZlAmxsyIAAZlEguxgMyIAAZlEghfgMyIAAZlA0DsyIAAZl");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(-300.3,-82.9,600.7,165.9), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.binomodarit();
	this.instance.parent = this;
	this.instance.setTransform(-104,-14);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(-104,-14,208,29), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-79.5,-21.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(-79.5,-21.5,159,43), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.background();
	this.instance.parent = this;
	this.instance.setTransform(-310.5,-174.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(-310.5,-174.5,621,349), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#5B7066").ss(0.4,1,1).p("EhnzgHyIF1GfICHioIAqB5IAvg0IAXBGIB3jxIEvGhICWhpIDADAIBkhJICfE6ICVBBIG6AAICgBCIAigpIAoBEIBugpIA0ghIAAAtIAogcIAXATIAUg8IAdA8IBDgZIA2AZIAdArIBNghIAph5IBeCKIBJAAIAPBJIAjgrIAahBIAaBBIArhIIArBIIAahBIAaBBIAiArIAPhJIBKAAIBdiKIAqB5IBNAhIAdgrIA1gZIBDAZIAeg8IAUA8IAWgTIAoAcIAAgtIA1AhIBtApIAohEIAjApICgj+IG6C8ICUhBICfk6IBlBJIDAjAICVBpIEvmhIB4DxIAXhGIAuA0IArh5ICGCoIAAoQIFHIQICejVIEGDVICGioIArB5IAug0IAXBGICdJtIEWjPICJC+IAAoVIDADAIBlhJICfE6ICUBBIG6AAICgBCIAjgpIAoBEIBtgpIA1ghIAAAtIAogcIAWATIAUg8IAeA8IBDgZIA1AZIAdArIBNghIAqh5IBdCKIBKAAIAPBJIAigrIAahBIAaBBIArhIIArBIIAahBIAaBBIAjArIAPhJIBJAAIBeiKIApB5IBNAhIAdgrIA2gZIBDAZIAdg8IAUA8IAXgTIAoAcIAAgtIA0AhIBuApIAohEIAiApICghCIG6AAICVhBICfk6IBkBJIDAjAICWBpIEvmhIB3DxIAXhGIAvA0IAqh5ICHCoIF1mf");
	this.shape.setTransform(0,-8.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#5B7066").ss(0.4,1,1).p("EBn0AAAMgz6AAAMgz6AAAMgz5AAAMgz6AAA");
	this.shape_1.setTransform(0,69.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],0,-44.1,0,55.3).s().p("A58K2IAAkYIArBIIAahBIAaBBIAjArIAOhJIBKAAIBdiKIAqB5IBNAhIAdgrIA1gZIBEAZIAdg8IAUA8IAXgTIAnAcIAAgtIA1AhIBtApIAphEIAiApICgj+IG6C8ICUhBICfk5IBkBIIDAjAICWBqIEumiIB4DxIAXhGIAuA0IArh5ICGCoIAAoPIF2Vrg");
	this.shape_2.setTransform(-166.1,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],18.7,-44.1,18.7,55.3).s().p("A3BK2Il21rIFHIPICejVIEGDVICHioIAqB5IAvg0IAXBGICdJtIEWjPICJC+IAAoVIDADAIBjhIICfE5ICVBBIG6AAICgBCIAigpIAoBEIBugpIA0ghIAAAtIAogcIAXATIAUg8IAdA8IBDgZIA2AZIAdArIBNghIAph5IBeCKIBJAAIAPBJIAjgrIAahBIAaBBIArhIIAAEYg");
	this.shape_3.setTransform(147.4,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],0,-49.7,0,49.7).s().p("A58J+IAAkZIArBJIAahBIAaBBIAiArIAQhJIBJAAIBdiKIAqB5IBNAhIAdgrIA2gZIBCAZIAeg8IAUA8IAXgTIAnAcIAAgtIA1AhIBtApIAphFIAiAqICghCIG6AAICThBICgk6IBkBJIDAjBICWBrIEvmiIB3DxIAXhGIAvAzIAqh4ICGCoIF2mfIAAT7g");
	this.shape_4.setTransform(498.3,5.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],0,-49.7,0,49.7).s().p("A58J+IAAz7IF2GfICGioIAqB4IAvgzIAXBGIB3jxIEvGiICWhrIDADBIBkhJICgE6ICTBBIG6AAICgBCIAigqIApBFIBtgpIA1ghIAAAtIAngcIAXATIAUg8IAdA8IBDgZIA2AZIAdArIBNghIAqh5IBdCKIBJAAIAPBJIAjgrIAahBIAaBBIArhJIAAEZg");
	this.shape_5.setTransform(-498.3,5.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(-665.4,-70.4,1330.8,140.9), null);


(lib.Символ84 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ83();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.57,0.57);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ84, new cjs.Rectangle(-18.2,-18.2,36.5,36.5), null);


(lib.Символ56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AnNAuIAXjFIOEBqIgXDFg");
	var mask_graphics_1 = new cjs.Graphics().p("AnNAuIAXjFIOEBqIgXDFg");
	var mask_graphics_2 = new cjs.Graphics().p("AnNAuIAXjFIOEBqIgXDFg");
	var mask_graphics_3 = new cjs.Graphics().p("AnNAuIAXjFIOEBqIgXDFg");
	var mask_graphics_4 = new cjs.Graphics().p("AnNAuIAXjFIOEBqIgXDFg");
	var mask_graphics_5 = new cjs.Graphics().p("AnNAuIAXjFIOEBqIgXDFg");
	var mask_graphics_6 = new cjs.Graphics().p("AnNAuIAXjFIOEBqIgXDFg");
	var mask_graphics_7 = new cjs.Graphics().p("AnNAuIAXjFIOEBqIgXDFg");
	var mask_graphics_8 = new cjs.Graphics().p("AnNAuIAXjFIOEBqIgXDFg");
	var mask_graphics_9 = new cjs.Graphics().p("AnNAuIAXjFIOEBqIgXDFg");
	var mask_graphics_10 = new cjs.Graphics().p("AnNAuIAXjFIOEBqIgXDFg");
	var mask_graphics_11 = new cjs.Graphics().p("AnNAuIAXjFIOEBqIgXDFg");
	var mask_graphics_12 = new cjs.Graphics().p("AnNAuIAXjFIOEBqIgXDFg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:1.5,y:-14.9}).wait(1).to({graphics:mask_graphics_1,x:0.2,y:-10.3}).wait(1).to({graphics:mask_graphics_2,x:-1.1,y:-5.7}).wait(1).to({graphics:mask_graphics_3,x:-2.4,y:-1.1}).wait(1).to({graphics:mask_graphics_4,x:-1.1,y:-5.7}).wait(1).to({graphics:mask_graphics_5,x:0.2,y:-10.3}).wait(1).to({graphics:mask_graphics_6,x:1.5,y:-14.9}).wait(1).to({graphics:mask_graphics_7,x:0.2,y:-10.3}).wait(1).to({graphics:mask_graphics_8,x:-1.1,y:-5.7}).wait(1).to({graphics:mask_graphics_9,x:-2.4,y:-1.1}).wait(1).to({graphics:mask_graphics_10,x:-1.1,y:-5.7}).wait(1).to({graphics:mask_graphics_11,x:0.2,y:-10.3}).wait(1).to({graphics:mask_graphics_12,x:1.5,y:-14.9}).wait(25));

	// Слой 1
	this.instance = new lib.Символ49();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(37));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.5,-5.2,53.1,5.6);


(lib.Символ52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ43();
	this.instance.parent = this;
	this.instance.setTransform(94,-114.9);
	this.instance.alpha = 0.852;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.girl2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-137,-182,1.062,1.062);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ52, new cjs.Rectangle(-137,-182,285.7,304.8), null);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ45();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ47, new cjs.Rectangle(-46.8,-90.4,93.6,180.9), null);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ41();
	this.instance.parent = this;
	this.instance.setTransform(-25.6,47.1,1,1,0,0,0,-26.4,50);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:49.9,rotation:3.6},14,cjs.Ease.get(-1)).to({regY:50,rotation:7.7},15,cjs.Ease.get(1)).to({rotation:3.8,x:-25.7,y:47.2},15,cjs.Ease.get(-1)).to({rotation:0,x:-25.6,y:47.1},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.7,-54.4,65,103);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ38();
	this.instance.parent = this;
	this.instance.alpha = 0;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.191},14,cjs.Ease.get(1)).to({alpha:0},15,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ38();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.5,-30,243.1,60);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ37();
	this.instance.parent = this;
	this.instance.setTransform(-0.3,-1.1,0.881,0.881);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1 - копия
	this.instance_1 = new lib.Символ33();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ32();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,3.3);
	this.instance_2.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance_2.cache(-123,-32,247,64);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ31, new cjs.Rectangle(-123.5,-30,250,68.3), null);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AMeCCQgagoAOhcIAAAAQAGguAMggIAAAAQALggAQgTIAAAAQAgglBDAAIAAAAQAkAAAXAKIAAAAQAXAJANAUIAAAAQALAVADAhIAAAAQADAggHAuIAAAAQgNBcggAlIAAAAQgQATgZAJIAAAAQgYAJgiAAIAAAAQhFAAgYgngAODhpQgMAFgHAMIAAAAQgIAMgGAWIAAAAQgFAXgFAgIAAAAQgKBDAIAWIAAAAQADALAKAFIAAAAQAKAGAQAAIAAAAQAhAAAPgXIAAAAQAIgLAFgXIAAAAQAHgXAFggIAAAAQADghABgXIAAAAQAAgWgEgLIAAAAQgHgWgfAAIAAAAQgRAAgMAGgADrCdIAHg0IBnACQAhABALgHIAAAAQANgGADgVIAAAAQABgQgEgHIAAAAQgFgFgQgGIAAAAIg+gaQgkgOgMgWIAAAAQgGgNgCgNIAAAAQgCgQADgRIAAAAQAGg0AdgRIAAAAQAdgTA+ABIAAAAQAfAAAaADIAAAAQAaADAXAHIAAAAIgHAxIhlgCQgdAAgKAFIAAAAQgKAFgEAWIAAAAQgCAQAFAGIAAAAQAFAGASAHIAAAAIA7AXQAlAPAMAUIAAAAQAMAXgFAmIAAAAQgHA2gcASIAAAAQgNAKgYAFIAAAAQgYAFghgBIAAAAQg3AAg5gMgAgEChQgZgIgOgPIAAAAQgdghAKhJIAAAAIAbjCIBIAAIgcDEQgGAtAJAQIAAAAQAJAQAhAAIAAAAQARAAANgEIAAAAQAMgEAIgJIAAAAQAPgRAGgtIAAAAIAbjCIBJAAIgcDEQgLBMggAeIAAAAQgQAPgZAGIAAAAQgYAIgjAAIAAAAQgjAAgXgIgAqfCgQgagJgOgUIAAAAQgcglANhgIAAAAQAHgvALghIAAAAQAMggASgSIAAAAQAigkBMAAIAAAAQBLAAAdAmIAAAAQAOAUAEAhIAAAAQAEAhgGAvIAAAAQgOBfgiAkIAAAAQgjAkhLgBIAAAAQgmAAgbgJgApxhXQgIAMgGAXIAAAAQgGAWgGAhIAAAAQgJBAAKAWIAAAAQAFALALAFIAAAAQAMAGASAAIAAAAQAlAAAQgYIAAAAQASgWAJhDIAAAAQAKhBgKgWIAAAAQgFgKgLgFIAAAAQgMgGgSAAIAAAAQgmAAgRAXgAIuCnQgagCgdgHIAAAAIALg3QAtAHAigCIAAAAQAhgCARgMIAAAAQAJgHAFgKIAAAAQAFgJACgNIAAAAQADgXgMgJIAAAAQgNgIgkgDIAAAAIgtgGQgMgBgHgIIAAAAQgFgIABgMIAAAAIAciLIC+AAIgKA4IiDAAIgMA8IAlAFQBqAMgMBYIAAAAQgHA0gfAcIAAAAQggAbg5ADIAAAAIgOAAIAAAAQgRAAgSgCgAwPCkIAulGQAqgEBNAAIAAAAQAfAAAWAEIAAAAQAWAGAMAJIAAAAQAZASgHAzIAAAAQgDASgEANIAAAAQgGAMgHAJIAAAAQgQARgeADIAAAAIAAADQAhACAPAWIAAAAQANAVgFArIAAAAQgEAYgJAQIAAAAQgIARgNAIIAAAAQgaARg7AAIAAAAQheAAgvgDgAvCBwIBOgCQALgCAGgEIAAAAQAMgKAEgcIAAAAQAEgdgJgIIAAAAQgJgKgcgBIAAAAIg3AAgAutgeIAyAAQAaABAMgKIAAAAQALgJADgaIAAAAQAEgWgIgIIAAAAQgIgHgaAAIAAAAIg1AAgAjPCkQgLAAgFgGIAAAAQgGgFgFgNIAAAAIhAitQgKgWgFgbIAAAAIgEAAIgfD2IhFAAIArkuQABgMAIgGIAAAAQAGgGAMAAIAAAAIAoAAQAKAAAGAFIAAAAQAGAGAFAMIAAAAIA/CnQAKAdAGAZIAAAAIAGAAQAAgdADgYIAAAAIAai/IBFAAIgrEtQgDAZgYAAIAAAAg");

	// Слой 2 - копия
	this.instance = new lib.Символ29();
	this.instance.parent = this;
	this.instance.setTransform(-130.9,-10.9);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({x:139.4},15).wait(16));

	// Слой 2
	this.instance_1 = new lib.Символ29();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-130.9,-10.9);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:139.4},15).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103.9,-16.9,0.7,33.9);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ28();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFD400","#F79E02"],[0,1],0,16,0,-15.9).s().p("AAyCjQgLAAgFgFQgGgFgFgNIg/itQgKgXgFgaIgEAAIgfD1IhFAAIArktQABgMAIgGQAGgGAMAAIAoAAQAKAAAGAFQAGAGAFALIA+CnQAKAeAGAYIAGAAQAAgcADgZIAai+IBFAAIgrEtQgDAYgYAAg");
	this.shape.setTransform(-25.8,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFD400","#F79E02"],[0,1],0,16.8,0,-16.7).s().p("AhTCgQgagJgOgUQgcglANhgQAHgvALghQAMggASgSQAigkBLAAQBLAAAdAmQAOAUAEAhQAEAhgGAvQgOBfgiAkQgjAkhKgBQgmAAgbgJgAglhXQgIAMgGAXQgGAVgGAiQgJBAAKAWQAFALALAFQAMAGASAAQAkAAAQgYQASgWAJhDQAKhBgKgWQgFgKgLgFQgMgGgSAAQglAAgRAXg");
	this.shape_1.setTransform(-58.8,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFD400","#F79E02"],[0,1],0,16.2,0,-16.1).s().p("AiHCkIAulGQAqgEBMAAQAfAAAWAEQAWAGAMAJQAZASgHAzQgDASgEANQgGAMgHAJQgQARgeADIAAADQAhACAPAWQANAVgFArQgEAYgJAQQgIARgNAIQgaARg7AAQhdAAgvgDgAg6BwIBNgCQALgCAGgFQAMgJAEgcQAEgdgJgIQgJgKgcgBIg2AAgAglgeIAxAAQAaABAMgKQALgJADgaQAEgWgIgIQgIgHgaAAIg0AAg");
	this.shape_2.setTransform(-90.4,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFD400","#F79E02"],[0,1],0,17.1,0,-17.1).s().p("AhwCCQgZgoANhcQAHguALggQALggAQgTQAhglBCAAQAjAAAYAKQAXAJAMAUQAMAVACAgQAEAhgIAuQgMBcghAlQgPATgaAJQgYAJghAAQhFAAgYgngAgKhpQgMAFgIAMQgHAMgGAWQgGAXgFAgQgJBDAHAWQAEALAJAFQALAGAPAAQAhAAAPgXQAHgLAGgXQAGgXAFggQAEghABgXQAAgWgEgLQgHgWggAAQgQAAgLAGg");
	this.shape_3.setTransform(91.1,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FFD400","#F79E02"],[0,1],0,16.5,0,-16.4).s().p("AhHCkQgagCgcgHIAKg4QAtAIAjgCQAhgCAPgMQAJgHAGgKQAEgJADgNQADgXgMgJQgNgIgkgDIgtgGQgLgBgHgIQgGgJACgMIAciKIC8AAIgJA4IiCAAIgNA8IAkAEQBrAMgMBZQgHA0ggAcQgfAag5AEIgOAAQgQAAgTgCg");
	this.shape_4.setTransform(63,0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FFD400","#F79E02"],[0,1],0,16.5,0,-16.5).s().p("AhUCeQgZgIgOgQQgdggAKhKIAbjBIBJAAIgcDEQgGAtAJAQQAJAQAhAAQARAAAMgEQAMgFAIgIQAPgRAGguIAbjBIBJAAIgcDEQgLBLggAeQgQAPgZAHQgYAIgiAAQgjAAgYgIg");
	this.shape_5.setTransform(8,0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#FFD400","#F79E02"],[0,1],0,16.8,0,-16.7).s().p("AiBCdIAGg0IBnACQAhABALgHQAMgGADgVQABgQgEgHQgFgFgPgGIg+gaQgjgOgNgWQgFgNgDgOQgCgPADgRQAGg0AegRQAdgTA8ABQAfAAAaADQAaADAYAHIgHAxIhlgCQgcAAgLAFQgKAFgDAWQgDAQAFAGQAFAGASAHIA6AXQAlAPAMAUQAMAXgFAmQgHA2gbASQgOAKgYAFQgXAFghgBQg3AAg4gMg");
	this.shape_6.setTransform(36.6,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ27, new cjs.Rectangle(-158.7,-71.1,262.7,120.4), null);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ27();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#490000").s().p("AMeCCQgagoAOhcQAGguAMggQALggAQgUQAgglBDAAQAkAAAXAKQAXAKANAUQALAVADAgQADAhgHAuQgNBdggAlQgQARgZAKQgYAKgiAAQhFAAgYgogAODhqQgMAGgHAMQgIAMgGAWQgFAXgFAgQgKBDAIAWQADALAKAGQAKAFAQAAQAhAAAPgXQAIgMAFgWQAHgWAFghQADghABgWQAAgXgEgLQgHgWgfAAQgRAAgMAFgADrCdIAHg0IBnADQAhgBALgGQANgHADgUQABgRgEgFQgFgGgQgHIg+gZQgkgOgMgXQgGgMgCgOQgCgOADgSQAGg0AdgSQAdgRA+gBQAfAAAaAEQAaAEAXAGIgHAxIhlgCQgdgBgKAGQgKAEgEAXQgCAQAFAGQAFAGASAHIA7AXQAlAPAMAVQAMAVgFAnQgHA1gcAUQgNAJgYAFQgYAFghAAQg3AAg5gNgAgECiQgZgJgOgQQgdggAKhKIAbjBIBIAAIgcDFQgGAsAJAQQAJAQAhAAQARAAANgDQAMgGAIgIQAPgQAGgvIAbjBIBJAAIgcDFQgLBKggAeQgQAPgZAIQgYAHgjABQgjgBgXgHgAqfCgQgagKgOgTQgcglANhgQAHguALgiQAMggASgSQAiglBMAAQBLAAAdAnQAOAUAEAhQAEAhgGAvQgOBggiAjQgjAkhLAAQgmAAgbgKgApxhYQgIAMgGAYQgGAWgGAhQgJBAAKAWQAFALALAGQAMAFASAAQAlAAAQgXQASgYAJhCQAKhBgKgWQgFgKgLgGQgMgFgSAAQgmAAgRAWgAIuCnQgagCgdgHIALg4QAtAJAigDQAhgBARgNQAJgHAFgKQAFgJACgNQADgWgMgKQgNgIgkgDIgtgFQgMgCgHgIQgFgJABgMIAciKIC+AAIgKA4IiDAAIgMA9IAlADQBqAMgMBZQgHA0gfAcQggAbg5ADIgOAAQgRAAgSgCgAwPCjIAulFQAqgEBNAAQAfAAAWAFQAWAEAMAKQAZASgHAzQgDARgEAOQgGANgHAIQgQARgeADIAAADQAhACAPAVQANAXgFApQgEAZgJARQgIAQgNAJQgaAQg7AAQheAAgvgEgAvCBwIBOgDQALgBAGgFQAMgJAEgdQAEgcgJgJQgJgJgcgBIg3AAgAutgeIAyAAQAaAAAMgJQALgJADgaQAEgWgIgIQgIgHgaAAIg1AAgAjPCjQgLAAgFgFQgGgFgFgNIhAitQgKgXgFgaIgEAAIgfD1IhFAAIArktQABgMAIgGQAGgGAMAAIAoAAQAKAAAGAFQAGAGAFALIA/CoQAKAdAGAZIAGAAQAAgdADgZIAai+IBFAAIgrEtQgDAZgYgBg");
	this.shape.setTransform(0,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ26, new cjs.Rectangle(-158.7,-71.1,262.7,120.4), null);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ22();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ21, new cjs.Rectangle(-17,-58,34,116), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ30();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,0.88);
	this.instance.alpha = 0.738;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(-337,-84,674.2,168.1), null);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjZCYQgdgvAQhsIAAAAQAHg1AOgmIAAAAQANgmASgWIAAAAQAmgrBOAAIAAAAQAqAAAaAMIAAAAQAbALAPAYIAAAAQANAXADAnIAAAAQAEAmgIA2IAAAAQgPBsgmArIAAAAQgRAVgeALIAAAAQgcALgoAAIAAAAQhQAAgdgugAhih7QgOAGgJAOIAAAAQgIANgIAaIAAAAQgGAbgGAmIAAAAQgLBOAJAaIAAAAQAEANALAGIAAAAQAMAHATAAIAAAAQAmAAASgbIAAAAQAJgNAHgaIAAAAQAHgbAGgmIAAAAQAEgnABgbIAAAAQAAgZgFgNIAAAAQgIgaglAAIAAAAQgTAAgOAHgAnxDDQgegDgigHIAAAAIANhBQA0AJAogDIAAAAQAngBAUgPIAAAAQAKgJAGgKIAAAAQAGgMADgOIAAAAQADgbgOgKIAAAAQgPgKgrgEIAAAAIg0gHQgOgBgIgJIAAAAQgHgLACgOIAAAAIAgiiIDeAAIgLBCIiZAAIgOBGIArAFQB8AOgNBoIAAAAQgJA9glAgIAAAAQgkAghEADIAAAAIgTABIAAAAQgSAAgUgDgAF9CqQgTgZAIhBIAAAAQAKg+AWgWIAAAAQAXgZAyAAIAAAAQA3AAASAaIAAAAQAKANADAWIAAAAQADAXgFAfIAAAAQgFAggIAWIAAAAQgIAVgLAMIAAAAQgLAMgTAHIAAAAQgSAFgaAAIAAAAQg1AAgTgbgAG9AeQgJAOgGAqIAAAAQgGAoAFAMIAAAAQAFAOATAAIAAAAQAYAAAIgOIAAAAQAJgOAFgsIAAAAQAGgmgFgNIAAAAQgFgNgUgBIAAAAQgWABgIAOgACoC/IEbl9IA3AAIkZF9gACAADQgTgaAJg/IAAAAQAJg/AWgYIAAAAQAMgMARgGIAAAAQATgGAaAAIAAAAQAaAAATAGIAAAAQASAHAJANIAAAAQALAOABAWIAAAAQADAXgEAgIAAAAQgKA/gWAWIAAAAQgXAYgyAAIAAAAQg2AAgTgagAC/iKQgIAPgGArIAAAAQgFAmAEANIAAAAQAEAOAVAAIAAAAQAXAAAIgPIAAAAQAJgNAGgrIAAAAQAFgngFgOIAAAAQgFgNgTAAIAAAAQgXAAgJAOg");

	// Слой 2 - копия: 2
	this.instance = new lib.Символ21();
	this.instance.parent = this;
	this.instance.setTransform(-88,-2,1,1,19.7);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).to({x:87.7},17).wait(2));

	// Слой 2 - копия: 2
	this.instance_1 = new lib.Символ21();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-88,-2,1,1,19.7);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11).to({_off:false},0).to({x:87.7},17).wait(10));

	// Слой 2 - копия
	this.instance_2 = new lib.Символ21();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-88,-2,1,1,19.7);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).to({x:87.7},17).wait(15));

	// Слой 2
	this.instance_3 = new lib.Символ21();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-88,-2,1,1,19.7);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:87.7},17).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.2,-19.8,3.8,39.6);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ19();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#F79D00","#FFD400"],[0,1],0,-19.6,0,19.6).s().p("AhSDAQgfgDgigIIANhBQA1AJAngDQAogBASgPQAKgIAHgLQAFgMADgOQAEgbgPgKQgPgKgpgEIg1gGQgNgCgJgJQgGgKACgOIAgiiIDdAAIgMBBIiXAAIgPBHIArAEQB7AOgNBoQgIA9glAgQglAghCADIgUABQgSAAgTgCg");
	this.shape.setTransform(-41.4,0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#F79D00","#FFD400"],[0,1],0,-16.9,0,16.9).s().p("AioC/IEal9IA3AAIkZF9g");
	this.shape_1.setTransform(33.8,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#F79D00","#FFD400"],[0,1],0,-11.6,0,11.6).s().p("AhTBXQgTgaAIhAQAKg9AWgYQAXgYAxAAQA3AAASAaQAKANADAWQADAYgFAeQgFAfgIAWQgIAVgLAMQgLAMgTAHQgSAFgZAAQg1AAgTgagAgTg1QgJAOgGAqQgGAnAFAMQAFAOATAAQAXAAAIgOQAJgNAFgsQAGgmgFgNQgFgNgUAAQgVAAgIAOg");
	this.shape_2.setTransform(46.5,8.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#F79D00","#FFD400"],[0,1],0,-11.4,0,11.5).s().p("AhTBYQgTgbAJg/QAJg+AWgYQAMgMARgGQATgGAZAAQAaAAATAGQASAHAJANQALANABAXQADAWgEAgQgKA+gWAXQgXAYgxAAQg2AAgTgZgAgUg1QgIAOgGArQgFAmAEANQAEANAVAAQAWAAAIgOQAJgNAGgrQAFgmgFgOQgFgNgTAAQgWAAgJAOg");
	this.shape_3.setTransform(21.2,-8.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#F79D00","#FFD400"],[0,1],0,-20.4,0,20.5).s().p("AiDCYQgdgvAQhsQAHg1AOgmQANgmASgWQAmgrBNAAQAqAAAbAMQAbALAPAYQANAXADAnQAEAmgIA2QgPBsgmArQgSAVgeALQgcALgnAAQhQAAgdgugAgMh7QgOAGgJAOQgIANgIAaQgGAbgGAmQgLBOAJAaQAEANALAGQAMAHATAAQAlAAASgbQAJgNAHgaQAHgbAGgmQAEgnABgbQAAgZgFgNQgIgaglAAQgTAAgNAHg");
	this.shape_4.setTransform(-8.6,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(-123.6,-62.3,179.8,120.7), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ18();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5F0000").s().p("AjZCYQgdgvAQhrQAHg2AOgmQANglASgXQAmgrBOAAQAqAAAaAMQAbALAPAYQANAXADAmQAEAngIA2QgPBsgmArQgRAVgeALQgcALgoAAQhQAAgdgugAhih7QgOAGgJAOQgIANgIAaQgGAbgGAmQgLBOAJAaQAEANALAGQAMAHATAAQAmAAASgbQAJgOAHgZQAHgbAGgmQAEgnABgbQAAgZgFgNQgIgaglAAQgTAAgOAHgAnxDDQgegCgigIIANhBQA0AJAogDQAngBAUgPQAKgJAGgLQAGgLADgOQADgbgOgLQgPgJgrgEIg0gHQgOgBgIgJQgHgLACgOIAgiiIDeAAIgLBBIiZAAIgOBHIArAFQB8AOgNBoQgJA9glAgQgkAghEADIgTABQgSAAgUgDgAF9CqQgTgZAIhBQAKg9AWgXQAXgZAyAAQA3AAASAbQAKAMADAWQADAYgFAeQgFAggIAWQgIAVgLAMQgLAMgTAHQgSAFgaAAQg1AAgTgbgAG9AeQgJAOgGAqQgGAoAFAMQAFAOATAAQAYAAAIgOQAJgOAFgsQAGgmgFgNQgFgNgUgBQgWABgIAOgACoC/IEbl9IA3AAIkZF9gACAADQgTgaAJg/QAJg/AWgYQAMgMARgGQATgGAaAAQAaAAATAGQASAHAJANQALAOABAWQADAWgEAhQgKA/gWAWQgXAYgyAAQg2AAgTgagAC/iKQgIAPgGArQgFAnAEAMQAEAOAVAAQAXAAAIgPQAJgNAGgrQAFgngFgOQgFgNgTAAQgXAAgJAOg");
	this.shape.setTransform(0,1.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(-123.6,-62.3,179.8,120.7), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-85.7},19).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-299.8,-82.4,599.7,164.9);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ6();
	this.instance.parent = this;
	this.instance.setTransform(-664.4,0);

	this.instance_1 = new lib.Символ6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(664.4,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(-1329,-69.6,2658,139.3), null);


(lib.Символ6_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.74,scaleY:0.74},4,cjs.Ease.get(1)).to({scaleX:1.01,scaleY:1.01},3,cjs.Ease.get(1)).to({scaleX:0.88,scaleY:0.88},3,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},3,cjs.Ease.get(1)).wait(39));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.5,-21.5,159,43);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(-310.5,-174.5,621,349), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ6_1();
	this.instance.parent = this;
	this.instance.setTransform(-100,10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(-179.5,-11.5,159,43), null);


(lib.Символ5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhfM0IAA5nMA1ZAAAIAAZng");
	mask.setTransform(332.2,-15.4);

	// Слой 3
	this.instance_1 = new lib.Символ12();
	this.instance_1.parent = this;
	this.instance_1.setTransform(661.3,-15.1);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(300));

	// Слой 5
	this.instance_2 = new lib.Символ36();
	this.instance_2.parent = this;
	this.instance_2.setTransform(420.7,37.2);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:411.1,y:41},3).to({x:387.9,y:33.7},9).to({x:382.8},11).to({x:387.9,y:28.3},2).to({y:-3.1},4).to({x:392,y:3.9},1).to({x:399.4,y:-14.9},3).to({x:404.5,y:-4.9},2).to({x:420.6,y:-47},3).to({x:424.5,y:-22.9},2).to({y:-27.5},1).to({y:-23.9},1).to({x:422.3,y:-36.1},1).to({x:426.4,y:-20.5},2).to({x:436.9,y:-60.4},6).to({x:448.4,y:-20.5},6).to({x:452,y:-35.6},2).to({y:-23.7},1).to({x:452.1,y:-30.8},1).to({x:450.9,y:-22.4},1).to({x:449.9,y:-45.6},3).to({x:439.7,y:-5.2},9).to({x:446.1,y:-15.7},2).to({x:460.2,y:3.9},1).to({y:-3.3},2).to({x:468.2,y:28.3},2).to({x:479,y:34.3},1).to({x:504.2},4).to({x:511.4,y:41.5},2).to({x:512.6,y:37.9},1).to({x:420.7,y:37.2},1).to({x:411.1,y:41},3).to({x:387.9,y:33.7},9).to({x:382.8},11).to({x:387.9,y:28.3},2).to({y:-3.1},4).to({x:392,y:3.9},1).to({x:399.4,y:-14.9},3).to({x:404.5,y:-4.9},2).to({x:420.6,y:-47},3).to({x:424.5,y:-22.9},2).to({y:-27.5},1).to({y:-23.9},1).to({x:422.3,y:-36.1},1).to({x:426.4,y:-20.5},2).to({x:436.9,y:-60.4},6).to({x:448.4,y:-20.5},6).to({x:452,y:-35.6},2).to({y:-23.7},1).to({x:452.1,y:-30.8},1).to({x:450.9,y:-22.4},1).to({x:449.9,y:-45.6},3).to({x:439.7,y:-5.2},9).to({x:446.1,y:-15.7},2).to({x:460.2,y:3.9},1).to({y:-3.3},2).to({x:468.2,y:28.3},2).to({x:479,y:34.3},1).to({x:504.2},4).to({x:511.4,y:41.5},2).to({x:512.6,y:37.9},1).to({x:420.7,y:37.2},1).to({x:411.1,y:41},3).to({x:387.9,y:33.7},9).to({x:382.8},11).to({x:387.9,y:28.3},2).to({y:-3.1},4).to({x:392,y:3.9},1).to({x:399.4,y:-14.9},3).to({x:404.5,y:-4.9},2).to({x:420.6,y:-47},3).to({x:424.5,y:-22.9},2).to({y:-27.5},1).to({y:-23.9},1).to({x:422.3,y:-36.1},1).to({x:426.4,y:-20.5},2).to({x:436.9,y:-60.4},6).to({x:448.4,y:-20.5},6).to({x:452,y:-35.6},2).to({y:-23.7},1).to({x:452.1,y:-30.8},1).to({x:450.9,y:-22.4},1).to({x:449.9,y:-45.6},3).to({x:439.7,y:-5.2},9).to({x:446.1,y:-15.7},2).to({x:460.2,y:3.9},1).to({y:-3.3},2).to({x:468.2,y:28.3},2).to({x:479,y:34.3},1).to({x:504.2},4).to({x:511.4,y:41.5},2).to({x:452,y:-23.7},1).to({x:452.1,y:-30.8},1).to({x:450.9,y:-22.4},1).to({x:449.9,y:-45.6},3).to({x:439.7,y:-5.2},9).to({x:446.1,y:-15.7},2).to({x:460.2,y:3.9},1).to({y:-3.3},2).to({x:468.2,y:28.3},2).to({x:479,y:34.3},1).to({x:504.2},4).to({x:511.4,y:41.5},2).to({x:512.6,y:37.9},1).to({x:420.7,y:37.2},1).wait(1));

	// Слой 1
	this.instance_3 = new lib.Символ8();
	this.instance_3.parent = this;
	this.instance_3.setTransform(664.1,-2.8);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:-664.7,y:-2.7},299).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(322.7,-97.4,341.8,164.1);


(lib.Символ85 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ84();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.82,y:-11.7},9,cjs.Ease.get(1)).to({scaleY:1,y:0},10,cjs.Ease.get(1)).to({scaleY:0.82,y:-11.7},10,cjs.Ease.get(1)).to({scaleY:1,y:0},10,cjs.Ease.get(1)).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.2,-18.2,36.5,36.5);


(lib.Символ54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ42();
	this.instance.parent = this;
	this.instance.setTransform(-39.5,-17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ52();
	this.instance_1.parent = this;
	this.instance_1.setTransform(20,20,0.91,0.91);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ54, new cjs.Rectangle(-104.7,-145.7,260.1,277.5), null);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ47();
	this.instance.parent = this;
	this.instance.setTransform(-44.6,-82.1,1,1,0,0,0,-44.6,-82.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:-82.2,rotation:2,y:-82.2},14,cjs.Ease.get(-1)).to({regY:-82.1,rotation:4.5,y:-82.1},15,cjs.Ease.get(1)).to({regY:-82,rotation:2.1,y:-82},15,cjs.Ease.get(-1)).to({regY:-82.1,rotation:0,y:-82.1},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.8,-90.4,93.6,180.9);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ26();
	this.instance.parent = this;
	this.instance.setTransform(-85,18.3,1.062,1.062,0,0,0,0.1,0.1);

	this.instance_1 = new lib.Символ25();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-85.4,-24.8,0.688,0.688);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ46, new cjs.Rectangle(-253.6,-57.4,279,127.9), null);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ31();
	this.instance.parent = this;
	this.instance.setTransform(0,-1.8,1.135,1.135);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.25,scaleY:1.25},6,cjs.Ease.get(-1)).to({scaleX:1.39,scaleY:1.39},8,cjs.Ease.get(1)).to({scaleX:1.27,scaleY:1.27},7,cjs.Ease.get(-1)).to({scaleX:1.14,scaleY:1.14},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-139.9,-35.9,283,76.7);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.05,scaleY:1.05},14,cjs.Ease.get(-1)).to({scaleX:1.1,scaleY:1.1},15,cjs.Ease.get(1)).to({scaleX:1.05,scaleY:1.05},16,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},14,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-310.5,-174.5,621,349);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 17
	this.instance = new lib.Символ17();
	this.instance.parent = this;
	this.instance.setTransform(0.1,0.2,1,1.066);
	this.instance.alpha = 0.27;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 5
	this.instance_1 = new lib.Символ5_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-493.5,15.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(-1158.4,-82.2,2658,164.9), null);


(lib.Символ126 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ85();
	this.instance.parent = this;
	this.instance.setTransform(66.9,0);

	this.instance_1 = new lib.Символ81();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-19,3.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ126, new cjs.Rectangle(-85.1,-18.2,170.3,36.5), null);


(lib.Символ55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ54();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-1.8,y:6.6},14,cjs.Ease.get(-1)).to({x:-3.7,y:13.6},15,cjs.Ease.get(1)).to({x:-1.8,y:6.8},15,cjs.Ease.get(-1)).to({x:0,y:0},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.7,-145.7,260.1,277.5);


(lib.Символ53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ55();
	this.instance.parent = this;
	this.instance.setTransform(-71,20,1,1,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ53, new cjs.Rectangle(-209.9,-158.5,313.8,332.9), null);


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ56();
	this.instance.parent = this;
	this.instance.setTransform(405.2,-33.2);
	this.instance.alpha = 0.93;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ48();
	this.instance_1.parent = this;
	this.instance_1.setTransform(490.1,47.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.girl1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(536.6,-133,0.901,0.901,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ50, new cjs.Rectangle(268,-133,268.9,270.5), null);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ39();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.772,0.772);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:0.7,scaleY:0.7},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108.4,-27.7,220,59.8);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ40();
	this.instance.parent = this;
	this.instance.setTransform(-100,-6);
	new cjs.ButtonHelper(this.instance, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ35, new cjs.Rectangle(-208.4,-33.7,220,59.9), null);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.parent = this;
	this.instance.setTransform(350.7,14.1,2.055,2.055,0,0,0,170.7,7);
	this.instance.alpha = 0.379;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ23, new cjs.Rectangle(-2380.3,-169.3,5461.5,338.7), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 6
	this.instance = new lib.Символ126();
	this.instance.parent = this;
	this.instance.setTransform(0.2,106.9,0.841,0.841);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(120));

	// Слой 5
	this.instance_1 = new lib.Символ46();
	this.instance_1.parent = this;
	this.instance_1.setTransform(100.5,39.9,1.189,1.189,0,0,0,-0.1,-1.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(59).to({_off:false},0).to({y:-26.8,alpha:1},5).to({y:-0.1},2).wait(46).to({y:-26.8},2).to({y:39.9,alpha:0},5).wait(1));

	// Символ 15
	this.instance_2 = new lib.Символ15();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,53.2,1.246,1.246);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({x:-125.6},0).to({x:9.3,alpha:1},5,cjs.Ease.get(1)).to({x:0},2,cjs.Ease.get(1)).wait(37).to({rotation:5.2,y:43.9},2).to({rotation:0,y:153,alpha:0},6).to({_off:true},1).wait(60));

	// Символ 14
	this.instance_3 = new lib.Символ14();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,0,1.246,1.246);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({y:32.5},0).to({y:-9.3,alpha:1},5,cjs.Ease.get(1)).to({y:0},2,cjs.Ease.get(1)).wait(40).to({rotation:-10.5,y:-9.3},2).to({rotation:0,y:99.8,alpha:0},6).to({_off:true},1).wait(60));

	// Символ 11
	this.instance_4 = new lib.Символ11();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,-53.1,1.246,1.246);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({x:102.3},0).to({x:-9.3,alpha:1},5,cjs.Ease.get(1)).to({x:0},2,cjs.Ease.get(1)).wait(43).to({regX:-0.1,regY:-0.1,rotation:5.7,x:-0.1,y:-62.4},2).to({regX:0,regY:0,rotation:0,x:0,y:46.7,alpha:0},6).to({_off:true},1).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-154,-77.6,283.6,199.9);


(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ50();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:14.5},14,cjs.Ease.get(-1)).to({y:30},15,cjs.Ease.get(1)).to({y:15},15,cjs.Ease.get(-1)).to({y:0},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(268,-133,268.9,270.5);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ4();
	this.instance.parent = this;
	this.instance.setTransform(0.2,-0.3,1.098,1.098);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(-169,-85.6,311.4,219.5), null);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(9));

	// Слой 13
	this.instance = new lib.Символ53();
	this.instance.parent = this;
	this.instance.setTransform(205.6,97.7);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:27.7,alpha:1},8,cjs.Ease.get(1)).wait(1).to({y:97.7,alpha:0},8,cjs.Ease.get(1)).wait(1));

	// Слой 12
	this.instance_1 = new lib.Символ51();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-204.5,17);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-200.5,y:122,alpha:0},8,cjs.Ease.get(1)).wait(1).to({x:-204.5,y:17,alpha:1},8,cjs.Ease.get(1)).wait(1));

	// Слой 10
	this.instance_2 = new lib.Символ46();
	this.instance_2.parent = this;
	this.instance_2.setTransform(20.1,17.6,1.189,1.189,0,0,0,-0.1,-1.1);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:-10.9,alpha:1},8,cjs.Ease.get(1)).wait(1).to({y:17.6,alpha:0},8,cjs.Ease.get(1)).wait(1));

	// Слой 7
	this.btn = new lib.Символ35();
	this.btn.parent = this;
	this.btn.setTransform(20.2,238.6);
	this.btn.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.btn).to({y:79.5,alpha:1},6).to({regX:-0.1,x:20.1,y:99.5},2).wait(1).to({regX:0,x:20.2},0).to({y:79.5},2).to({y:238.6,alpha:0},6).wait(1));

	// logo
	this.logo = new lib.Символ1();
	this.logo.parent = this;
	this.logo.setTransform(20.1,-109.4);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(18));

	// txt1
	this.txt1 = new lib.Символ16();
	this.txt1.parent = this;
	this.txt1.setTransform(-80,24.7,0.886,0.886);

	this.timeline.addTween(cjs.Tween.get(this.txt1).to({x:20,alpha:0},8,cjs.Ease.get(1)).wait(1).to({x:-80,alpha:1},8,cjs.Ease.get(1)).wait(1));

	// plashka
	this.plashka = new lib.Символ20();
	this.plashka.parent = this;
	this.plashka.setTransform(28.1,23.1);

	this.timeline.addTween(cjs.Tween.get(this.plashka).to({regY:0.1,scaleY:2.09,y:7.3},8,cjs.Ease.get(1)).wait(1).to({regY:0,scaleY:1,y:23.1},8,cjs.Ease.get(1)).wait(1));

	// graph
	this.graph = new lib.Символ23();
	this.graph.parent = this;
	this.graph.setTransform(336.4,1.6,1,1,0,0,0,350.4,0.1);

	this.timeline.addTween(cjs.Tween.get(this.graph).wait(18));

	// bg
	this.bg = new lib.Символ10();
	this.bg.parent = this;
	this.bg.setTransform(19.6,0);

	this.timeline.addTween(cjs.Tween.get(this.bg).to({scaleX:1.14,scaleY:1.14},8,cjs.Ease.get(1)).wait(1).to({scaleX:1,scaleY:1},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2394.4,-174.5,5461.5,446.6);


// stage content:
(lib.girl_bonus50_600300 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		 stage.scaleX = stage.scaleY = 2;
		
		 stage.canvas.width = 600 * 2;
		 stage.canvas.height = 300 * 2;
		 stage.canvas.style.width = '600px'/window.devicePixelRatio;
		 stage.canvas.style.height = '300px'/window.devicePixelRatio;
		
		var _this = this;
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		  function fl_MouseOverHandler_5()
		{
		    _this.main.gotoAndPlay(1);
		}
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		  function fl_MouseOutHandler_2()
		{
		    _this.main.gotoAndPlay(10);
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 5
	this.main = new lib.Символ24();
	this.main.parent = this;
	this.main.setTransform(616.4,149.5,1,1,0,0,0,336.4,0);

	this.timeline.addTween(cjs.Tween.get(this.main).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1814.4,125,5461.5,446.6);
// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/background.jpg", id:"background"},
		{src:"images/binomodarit.png", id:"binomodarit"},
		{src:"images/blik.png", id:"blik"},
		{src:"images/girl1.png", id:"girl1"},
		{src:"images/girl2.png", id:"girl2"},
		{src:"images/kdepozitu.png", id:"kdepozitu"},
		{src:"images/logo.png", id:"logo"},
		{src:"images/mishka.png", id:"mishka"},
		{src:"images/promokod.png", id:"promokod"},
		{src:"images/ruka.png", id:"ruka"},
		{src:"images/ruka2.png", id:"ruka2"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;