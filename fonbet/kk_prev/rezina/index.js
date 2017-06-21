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
p.nominalBounds = new cjs.Rectangle(0,0,200,46);


(lib.doll = function() {
	this.initialize(img.doll);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,175,161);


(lib.doll2 = function() {
	this.initialize(img.doll2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,168);


(lib.iph = function() {
	this.initialize(img.iph);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,146);


(lib.iph2 = function() {
	this.initialize(img.iph2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,75,150);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,219,66);


(lib.mexball = function() {
	this.initialize(img.mexball);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,188,185);


(lib.money = function() {
	this.initialize(img.money);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,117,120);


(lib.nzball = function() {
	this.initialize(img.nzball);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,188,185);


(lib.portball = function() {
	this.initialize(img.portball);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,188,185);


(lib.rusball = function() {
	this.initialize(img.rusball);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,188,185);


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
p.nominalBounds = new cjs.Rectangle(0,0,94,111);// helper functions:

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
	this.instance.setTransform(-21,-32,0.581,0.581);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ78, new cjs.Rectangle(-21,-32,54.6,64.5), null);


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


(lib.Символ75 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABRCaQgZgJgNgSQgbgkANhbQAGgsALggQALgfARgRQAhgiBIAAQBHAAAcAkQANATAEAgQAEAfgGAtQgNBbghAhQghAihHAAQgkAAgagJgAB9hRQgIALgGAWQgGAVgFAgQgIA9AJAVQAEAKALAFQALAGARAAQAkAAAPgXQARgWAJg/QAJg+gJgVQgFgJgLgGQgLgFgSAAQgkAAgPAWgA9hCaQgZgJgNgSQgbgkANhbQAGgsALggQALgfARgRQAhgiBIAAQBHAAAcAkQANATAEAgQAEAfgGAtQgNBbghAhQghAihHAAQgkAAgagJgA81hRQgIALgGAWQgGAVgFAgQgIA9AJAVQAEAKALAFQALAGARAAQAkAAAPgXQARgWAJg/QAJg+gJgVQgFgJgLgGQgLgFgSAAQgkAAgPAWgAKiChQgUgCgVgFIALgwQAqACANgEQANgFANgVIAFgJIgPAAQgPAAgJgIQgJgIgDgQIgli9IBEAAIAbCiQAAAGAGAAIAMAAIBMioIBJAAIhsDmQgTApgTAUQgTAUgeADIgNAAQgLAAgLgBgAbuCdIArk1IBFAAIgQBzIArAAQAgAAAWAFQAVAGALAMQAXAVgIA5QgIA4gYAVQgMAJgTAGQgUAFgbAAQhXAAgrgEgAc6BsIApAAQAfAAAJgJQAGgEADgLQAEgJACgPQAEgegHgKQgDgFgIgDQgJgCgOAAIguAAgAqVCdIArk1IBFAAIgQBzIArAAQAgAAAWAFQAVAGALAMQAXAVgIA5QgIA4gYAVQgMAJgTAGQgUAFgbAAQhXAAgrgEgApJBsIApAAQAfAAAJgJQAGgEADgLQAEgJACgPQAEgegHgKQgDgFgIgDQgJgCgOAAIguAAgAEuCfIgDg3IANgDIANgFQAHgDAGgHIAMgQQAMgWAKghQAKghAQhKQAGgeAUgPQATgPAhAAICEAAIgsE1IhEAAIAlkEIglAAQgQAAgHAGQgHAHgEAQIgfB6QgJAbgKASQgTAlgcARQgVANgbAAIgPgBgA01CKQgJgJgDgPQgDgNACgRIAZiwQABgPAGgLQAGgLAJgIQAUgRAgAAQBiAAAtAFIgJAzIh0AAQgNAAgGAFQgFAFgCAOIgHAvIB7AAIgHAvIh6AAIgIA8QgCANAFAFQAEAFANAAIBzAAIgCAzQhIAFg+AAQgnAAgRgVgEAhIACdQgNAAgFgGQgGgGABgNIADgVQACgLAGgFQAGgGAMAAIAOAAQANAAAGAGQAFAHgCAMIgDAVQgDAWgWAAgAYmCdIAkj+IhcAAIAHg3ID9AAIgHA3IhcAAIgkD+gAVhCdIAaixQADgZAIgYIgDAAIgXApIiCC5IhHAAIAsk1IBCAAIgYCvQgEAWgJAcIAEAAQAKgVAOgVICBi3IBGAAIgsE1gAQfCdIATiEQgZAOgYAGQgYAHgVAAQgVAAgPgFQgPgFgJgJQgRgTAFgmIASiAIBFAAIgQB0QgDARAHAHQAGAHASAAQAjAAAngVIASh+IBFAAIgsE1gAhyCdIAkkEIhrAAIglEEIhFAAIAsk1ID2AAIgsE1gAxICdIArk1IBEAAIgmEEIBWAAIAlkEIBCAAIgkEEIBWAAIAlkEIBCAAIgrE1gA3NCdIASiEQgZAOgXAGQgYAHgWAAQgVAAgPgFQgOgFgJgJQgSgTAGgmIASiAIBEAAIgQB0QgDARAHAHQAHAHARAAQAjAAAngVIASh+IBFAAIgrE1gEggKACdIgtiKIgEAAIhUCKIhMAAIBoieIg1iXIBEAAIAoCAIAGAAIBQiAIBIAAIhgCXIA5CegEAg/AA7IAGgaIAKgXQAMgWAOgOIAbgbQAMgPADgMQADgRgHgGQgIgFgVAAIhdACIAAguIBsgKQAZAAARAEQASAFAMAJQAXASgFAlQgDARgJAPQgJAQgOALIgaAXQgOALgLARQgMASgEAUg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ75, new cjs.Rectangle(-226.8,-16.3,453.6,32.7), null);


(lib.Символ65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ten();
	this.instance.parent = this;
	this.instance.setTransform(-61,-30,1,0.492);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ65, new cjs.Rectangle(-61,-30,122,60), null);


(lib.Символ64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.portball();
	this.instance.parent = this;
	this.instance.setTransform(-59.9,-59,0.638,0.638);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ64, new cjs.Rectangle(-59.9,-59,119.9,118), null);


(lib.Символ63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ten();
	this.instance.parent = this;
	this.instance.setTransform(-61,-21.9,1,0.36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ63, new cjs.Rectangle(-61,-21.9,122,43.9), null);


(lib.Символ62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.nzball();
	this.instance.parent = this;
	this.instance.setTransform(-40,-39.4,0.426,0.426);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ62, new cjs.Rectangle(-40,-39.4,80,78.8), null);


(lib.Символ61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ten();
	this.instance.parent = this;
	this.instance.setTransform(-129,-24,2.115,0.394);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ61, new cjs.Rectangle(-129,-24,258,48), null);


(lib.Символ60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ten();
	this.instance.parent = this;
	this.instance.setTransform(-61,-61);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ60, new cjs.Rectangle(-61,-61,122,122), null);


(lib.Символ59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rusball();
	this.instance.parent = this;
	this.instance.setTransform(-74,-72.8,0.787,0.787);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ59, new cjs.Rectangle(-74,-72.8,148,145.6), null);


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
	this.instance.setTransform(-115,65,2.12,2.12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ55, new cjs.Rectangle(-115,65,318,309.5), null);


(lib.Символ54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tick();
	this.instance.parent = this;
	this.instance.setTransform(-286,182,1.234,1.234);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ54, new cjs.Rectangle(-286,182,221,185.1), null);


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mexball();
	this.instance.parent = this;
	this.instance.setTransform(-49.3,-48.5,0.524,0.524);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ50, new cjs.Rectangle(-49.3,-48.5,98.6,97), null);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ41, new cjs.Rectangle(-212.6,-31.9,425.2,63.9), null);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("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");
	this.shape.setTransform(0,16.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AGwBtIADgXQgzgEgSgUQgJgKgDgQQgEgQAEgVQADgWAHgQQAHgQAMgJQAMgJATgGQATgFAbgBIADgYIA4AAIgDAZQAyADATAUQAJAKADAQQADAQgDAVQgGAtgXASQgYASg1ADIgDAXgAHuAtQAZgCAJgJQAIgKAEgZQADgXgGgKQgHgIgWgDgAGnghQgEAFgDAJQgDAJgCAMQgDAYAGAJQADAEAHADQAHADAMAAIANhZQgYACgJAJgAnOBoIAdjOIA4AAIgKBKIAVAAQAtAAAQAPQAQAOgGAoQgGAngPANQgQANgmAAQg+AAgegCgAmQBCIATAAQARAAAFgFQAFgFADgTQACgTgDgFQgDgHgPABIgWAAgA2ZBoIAdjOQAjgCAoAAQAnAAAjACIgKApIhYAAIgGApIAXAAQAXAAAPADQAPAEAJAHQARAOgGAkQgCATgGALQgFANgIAHQgRANgngBQg+AAgfgCgA1cBCIAWAAQASAAAGgFQAGgFACgSQACgPgEgEQgEgFgQABIgYAAgATGBpIgCgsQAQgDAGgDQAHgFAFgKQAMgYARhMQAJgqAtAAIBhAAIgdDOIg4AAIAYioIgQAAQgKABgFADQgEAEgCAKIgRBCQgIAbgGANQgIAOgIAKQgJAKgKAFQgKAFgMACIgIAAIgSgBgAwPBpIgCgsQAPgDAGgDQAHgFAFgKQANgYAQhMQAKgqAsAAIBiAAIgeDOIg4AAIAYioIgQAAQgKABgEADQgEAEgDAKIgRBCQgIAbgGANQgHAOgJAKQgIAKgLAFQgKAFgMACIgIAAIgRgBgAsVBlQgJgDgGgIQgMgOADgYIAPhwQADgUAOgLQAGgGAJgDQAJgDALAAQBJAAAbADIgGApIhLAAQgIAAgDADQgEADgBAHIgDAaIBNAAIgEAkIhPAAIgEAgQgBAHADADQADADAHAAIBKAAIgBApQgZADhHAAQgNAAgJgEgASJBoIgFgxIg/AAIgTAxIg7AAIBTjBQADgGAFgEQAFgDAHAAIA0AAQAHAAAFAEQAFAFABAGIAdC/gARVANIArAAIgHhJIgIAAgAOuBoIAMhZIg8AAIgMBZIg5AAIAdjOIA5AAIgLBMIA8AAIALhMIA4AAIgdDOgALeBoIAPhoQADgRAFgRIgCAAQgLAXgFAHIhLBsIg4AAIAdjOIA3AAIgPBlQgBANgIAXIADAAQAHgSAKgNIBKhqIA2AAIgdDOgADWBoIgFgxIhAAAIgSAxIg7AAIBTjBQADgGAFgEQAFgDAHAAIA0AAQAGAAAGAEQAFAFAAAGIAeC/gACiANIAqAAIgGhJIgJAAgAgFBoIAMhZIg7AAIgNBZIg4AAIAdjOIA4AAIgKBMIA6AAIALhMIA4AAIgdDOgAkXBoIAdjOIA5AAIgeDOgApYBoIAXiiIg7AAIAGgsICuAAIgGAsIg7AAIgXCigAxeBoIAPhoQACgRAGgRIgCAAQgLAXgGAHIhKBsIg4AAIAdjOIA2AAIgOBlQgCANgHAXIACAAQAIgSAJgNIBLhqIA2AAIgdDOg");
	this.shape_1.setTransform(-0.7,-21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ40, new cjs.Rectangle(-212.6,-31.9,425.2,63.9), null);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AtSEEIAEheIkJAAIgXBeIhVAAIAYitIArAAQAyheApiiQAMgsAcgXQAdgVAtAAIDFAAIgwFYIA4AAIgXCtgAupipQgKAHgEAVQgSBKgSA5QgUA6gUAnIByAAIAkkJIgfAAQgSAAgLAJgABTCmIA7mnIB0AAIgUCYIAtAAQBcAAAhAeQAgAggMBQQgKBOghAcQgQAOgcAIQgcAHgnAAQiAAAg/gGgADSBZIApAAQAiAAAMgLQALgKAFgmQAGgmgHgMQgGgMggAAIgvAAgAqDChQgUgHgNgPQgYgeAGgxIAgjlQAGgrAcgYQANgLARgGQATgGAXAAQCWAAA4AHIgOBUIiZAAQgRAAgGAFQgHAHgDAPIgGAzICeAAIgJBOIihAAIgIBAQgDAOAGAHQAHAFAOAAICYAAIgCBVQg0AGiRAAQgaAAgSgIgAQcCmIAfjVQAEgjAMgjIgEAAQgWAugMAPIiZDeIhyAAIA7mnIBwAAIgeDQQgDAcgQAuIAGAAQAPgjAUgcICYjbIBvAAIg8GngAHPCmIAvlMQAHgrAagaQANgMARgGQARgGASAAQBiAABkAJIgMBSIiJAAQgSAAgHAFQgIAHgCARIgsExgAhsCmIAZi1Ih6AAIgaC1Ih0AAIA7mnIB0AAIgVCdIB5AAIAXidIByAAIg8Gng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ38, new cjs.Rectangle(-122,-26,244,52), null);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AtSEEIAEheIkJAAIgXBeIhVAAIAYitIArAAQAyheApiiQAMgsAcgXQAdgVAtAAIDFAAIgwFYIA4AAIgXCtgAupipQgKAHgEAVQgSBKgSA5QgUA6gUAnIByAAIAkkJIgfAAQgSAAgLAJgABTCmIA7mnIB0AAIgUCYIAtAAQBcAAAhAeQAgAggMBQQgKBOghAcQgQAOgcAIQgcAHgnAAQiAAAg/gGgADSBZIApAAQAiAAAMgLQALgKAFgmQAGgmgHgMQgGgMggAAIgvAAgAqDChQgUgHgNgPQgYgeAGgxIAgjlQAGgrAcgYQANgLARgGQATgGAXAAQCWAAA4AHIgOBUIiZAAQgRAAgGAFQgHAHgDAPIgGAzICeAAIgJBOIihAAIgIBAQgDAOAGAHQAHAFAOAAICYAAIgCBVQg0AGiRAAQgaAAgSgIgAQcCmIAfjVQAEgjAMgjIgEAAQgWAugMAPIiZDeIhyAAIA7mnIBwAAIgeDQQgDAcgQAuIAGAAQAPgjAUgcICYjbIBvAAIg8GngAHPCmIAvlMQAHgrAagaQANgMARgGQARgGASAAQBiAABkAJIgMBSIiJAAQgSAAgHAFQgIAHgCARIgsExgAhsCmIAZi1Ih6AAIgaC1Ih0AAIA7mnIB0AAIgVCdIB5AAIAXidIByAAIg8Gng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ37, new cjs.Rectangle(-122,-26,244,52), null);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AFkCPQgNgQgFgXQgFgYAEggQAHhGAhgbQARgMAZgGQAZgHAiAAQAhABAXAFQAXAGANAKQAZAVgHAqQgFAggWAOQgXAMgxAEIhAAEQAAATAJAGQAKAGAVAAQAtAAAxgGIAGA2QgrAShCABQhJAAgbgggAG9gFQgJAIgGAcIAogDQASgBAHgFQAIgFACgOQABgLgGgEQgFgDgTAAQgWABgJAJgAi2CnQgYgGgPgQQgbgdAJhEQAFgjAKgXQALgWAPgOQAfgbBFgBQAjAAAXAIQAZAHAOAQQANAPAFAYQAEAYgFAiQgKBDgeAbQgfAbhEAAQgjAAgYgIgAiFAAQgFAGgDAOIgIAiQgFAlAGAMQACAFAHADQAHADAMAAQAWAAAKgNQAFgHAEgNIAGghQAGgmgFgLQgGgMgWAAQgYAAgJANgALiCpIBvjfQAKgSANgPIiQAAIAFhHIDLAAQAYAAAIAMQAIAMgJAVIiNEagADDCpIAViUQACgOgDgEQgDgEgKABQgXAAgiAaIgUCPIhWAAIAgjsIBFAAIAAAtQA1gzA1gBQAQABAMAEQAMAEAIAJQAIAKAEALQADANgDARIgYCugAl8CpIAViYQACgKgCgEQgDgDgJAAQgMAAgPAGQgPAHgRAOIgUCOIhXAAIAvlNIBXAAIgKBPQgEAbgKAdQAZgVAXgMQAYgMAXAAQARABANAEQAMAEAJAJQARASgGAhIgYCugAs+CpIAvlHQAegEBhgCQAjABAZAGQAZAHAMALQAOANAFAWQADAXgDAfQgJA+gcAVQgNAMgXAFQgXAGggAAQgbAAgegFIgQB2gAq/hhIgNBXIApAAQAYAAAJgIQAJgIAEgfQAEgYgHgJQgGgIgVgBgAvLCpIAijsIBVAAIggDsgAuKhhQgbAAAEgbIADgaQACgYAaAAIAiAAQAOAAAGAIQAHAGgCAOIgDAZQgCAMgHAFQgHAHgNAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ33, new cjs.Rectangle(-97.2,-17.4,194.4,34.9), null);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.btn();
	this.instance.parent = this;
	this.instance.setTransform(-94,-22,0.944,0.944);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ25, new cjs.Rectangle(-94,-22,188.7,43.4), null);


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
p.nominalBounds = new cjs.Rectangle(-115,65,318,309.5);


(lib.Символ52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ54();
	this.instance.parent = this;
	this.instance.setTransform(-91,362.2,1,1,0,0,0,-91,362.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-9.7},4,cjs.Ease.get(1)).to({rotation:0},4,cjs.Ease.get(1)).to({rotation:-9.7},4,cjs.Ease.get(1)).to({rotation:0},4,cjs.Ease.get(1)).wait(44));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-286,182,221,185.1);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ64();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:-8.2},0).wait(1).to({rotation:-16.4},0).wait(1).to({rotation:-24.5},0).wait(1).to({rotation:-32.7},0).wait(1).to({rotation:-40.9},0).wait(1).to({rotation:-49.1},0).wait(1).to({rotation:-57.3},0).wait(1).to({rotation:-65.5},0).wait(1).to({rotation:-73.6},0).wait(1).to({rotation:-81.8},0).wait(1).to({rotation:-90},0).wait(1).to({rotation:-98.2},0).wait(1).to({rotation:-106.4},0).wait(1).to({rotation:-114.5},0).wait(1).to({rotation:-122.7},0).wait(1).to({rotation:-130.9},0).wait(1).to({rotation:-139.1},0).wait(1).to({rotation:-147.3},0).wait(1).to({rotation:-155.5},0).wait(1).to({rotation:-163.6},0).wait(1).to({rotation:-171.8},0).wait(1).to({rotation:-180},0).wait(1).to({rotation:-188.2},0).wait(1).to({rotation:-196.4},0).wait(1).to({rotation:-204.5},0).wait(1).to({rotation:-212.7},0).wait(1).to({rotation:-220.9},0).wait(1).to({rotation:-229.1},0).wait(1).to({rotation:-237.3},0).wait(1).to({rotation:-245.5},0).wait(1).to({rotation:-253.6},0).wait(1).to({rotation:-261.8},0).wait(1).to({rotation:-270},0).wait(1).to({rotation:-278.2},0).wait(1).to({rotation:-286.4},0).wait(1).to({rotation:-294.5},0).wait(1).to({rotation:-302.7},0).wait(1).to({rotation:-310.9},0).wait(1).to({rotation:-319.1},0).wait(1).to({rotation:-327.3},0).wait(1).to({rotation:-335.5},0).wait(1).to({rotation:-343.6},0).wait(1).to({rotation:-351.8},0).wait(1).to({rotation:-360},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.9,-59,119.9,118);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ62();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:6.1},0).wait(1).to({rotation:12.2},0).wait(1).to({rotation:18.3},0).wait(1).to({rotation:24.4},0).wait(1).to({rotation:30.5},0).wait(1).to({rotation:36.6},0).wait(1).to({rotation:42.7},0).wait(1).to({rotation:48.8},0).wait(1).to({rotation:54.9},0).wait(1).to({rotation:61},0).wait(1).to({rotation:67.1},0).wait(1).to({rotation:73.2},0).wait(1).to({rotation:79.3},0).wait(1).to({rotation:85.4},0).wait(1).to({rotation:91.5,y:-0.1},0).wait(1).to({rotation:97.6},0).wait(1).to({rotation:103.7},0).wait(1).to({rotation:109.8},0).wait(1).to({rotation:115.9},0).wait(1).to({rotation:122},0).wait(1).to({rotation:128.1},0).wait(1).to({rotation:134.2},0).wait(1).to({rotation:140.3},0).wait(1).to({rotation:146.4},0).wait(1).to({rotation:152.5},0).wait(1).to({rotation:158.6},0).wait(1).to({rotation:164.7},0).wait(1).to({rotation:170.8},0).wait(1).to({rotation:176.9},0).wait(1).to({rotation:183.1},0).wait(1).to({rotation:189.2},0).wait(1).to({rotation:195.3},0).wait(1).to({rotation:201.4},0).wait(1).to({rotation:207.5},0).wait(1).to({rotation:213.6},0).wait(1).to({rotation:219.7},0).wait(1).to({rotation:225.8},0).wait(1).to({rotation:231.9},0).wait(1).to({rotation:238},0).wait(1).to({rotation:244.1},0).wait(1).to({rotation:250.2},0).wait(1).to({rotation:256.3},0).wait(1).to({rotation:262.4},0).wait(1).to({rotation:268.5},0).wait(1).to({rotation:274.6,y:0},0).wait(1).to({rotation:280.7},0).wait(1).to({rotation:286.8},0).wait(1).to({rotation:292.9},0).wait(1).to({rotation:299},0).wait(1).to({rotation:305.1},0).wait(1).to({rotation:311.2},0).wait(1).to({rotation:317.3},0).wait(1).to({rotation:323.4},0).wait(1).to({rotation:329.5},0).wait(1).to({rotation:335.6},0).wait(1).to({rotation:341.7},0).wait(1).to({rotation:347.8},0).wait(1).to({rotation:353.9},0).wait(1).to({rotation:360},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40,-39.4,80,78.8);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ59();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:-9.2},0).wait(1).to({rotation:-18.5},0).wait(1).to({rotation:-27.7},0).wait(1).to({rotation:-36.9},0).wait(1).to({rotation:-46.2},0).wait(1).to({rotation:-55.4},0).wait(1).to({rotation:-64.6},0).wait(1).to({rotation:-73.8},0).wait(1).to({rotation:-83.1},0).wait(1).to({rotation:-92.3},0).wait(1).to({rotation:-101.5},0).wait(1).to({rotation:-110.8},0).wait(1).to({rotation:-120},0).wait(1).to({rotation:-129.2},0).wait(1).to({rotation:-138.5},0).wait(1).to({rotation:-147.7},0).wait(1).to({rotation:-156.9},0).wait(1).to({rotation:-166.2},0).wait(1).to({rotation:-175.4},0).wait(1).to({rotation:-184.6},0).wait(1).to({rotation:-193.8},0).wait(1).to({rotation:-203.1},0).wait(1).to({rotation:-212.3},0).wait(1).to({rotation:-221.5},0).wait(1).to({rotation:-230.8},0).wait(1).to({rotation:-240},0).wait(1).to({rotation:-249.2},0).wait(1).to({rotation:-258.5},0).wait(1).to({rotation:-267.7},0).wait(1).to({rotation:-276.9},0).wait(1).to({rotation:-286.2},0).wait(1).to({rotation:-295.4},0).wait(1).to({rotation:-304.6},0).wait(1).to({rotation:-313.8},0).wait(1).to({rotation:-323.1},0).wait(1).to({rotation:-332.3},0).wait(1).to({rotation:-341.5},0).wait(1).to({rotation:-350.8},0).wait(1).to({rotation:-360},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74,-72.8,148,145.6);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ25();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.95,scaleY:0.95},14,cjs.Ease.get(-1)).to({scaleX:0.89,scaleY:0.89},15,cjs.Ease.get(1)).to({scaleX:0.95,scaleY:0.95},15,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94,-22,188.7,43.4);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ40();
	this.instance.parent = this;
	this.instance.setTransform(-0.1,0.3,0.919,0.919,0,0,0,-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ41();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.1,1.6,0.919,0.919,0,0,0,-0.1,0.1);
	this.instance_1.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance_1.cache(-215,-34,429,68);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ39, new cjs.Rectangle(-197.4,-29.9,398,65), null);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ38();
	this.instance.parent = this;
	this.instance.setTransform(0,10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ37();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,11.5);
	this.instance_1.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance_1.cache(-124,-28,248,56);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ36, new cjs.Rectangle(-124,-16.5,252,59), null);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA6BuQgSgGgKgNQgTgaAJhBQAFgfAHgXQAJgWALgMQAYgYA0AAQAyAAAUAaQAKANACAXQADAWgEAfQgJBBgYAYQgYAZgzAAQgZAAgSgHgABZg6QgGAIgEAQQgEAPgEAWQgGAsAHAPQADAIAHADQAIAEANAAQAZAAALgQQAMgQAGgtQAHgsgHgPQgDgHgIgEQgIgDgMAAQgaAAgLAPgA1FBuQgRgGgKgNQgUgaAKhBQAEgfAIgXQAIgWAMgMQAYgYAzAAQAzAAAUAaQAJANADAXQADAWgFAfQgJBBgYAYQgXAZgzAAQgZAAgTgHgA0mg6QgFAIgEAQQgFAPgEAWQgFAsAGAPQADAIAIADQAIAEAMAAQAaAAALgQQAMgQAGgtQAGgsgGgPQgDgHgJgEQgHgDgNAAQgaAAgLAPgAHhBzQgOgBgPgEIAIgiQAeABAJgDQAJgDAJgPIAEgGIgLAAQgLAAgGgGQgHgGgCgLIgaiIIAxAAIATB1QAAAEAFAAIAIAAIA2h5IA0AAIhNClQgNAdgOAPQgOANgVADIgIAAIgRgBgATyBwIAfjdIAyAAIgMBTIAfAAQAXAAAPAEQAPAEAIAIQARAPgGApQgGAogRAOQgIAHgOAEQgOAEgUAAQg+AAgfgDgAUoBNIAeAAQAWAAAHgGQAEgDACgIQADgGABgLQAEgWgGgHQgCgDgGgCIgQgBIghAAgAnYBwIAfjdIAxAAIgLBTIAeAAQAXAAAQAEQAPAEAIAIQAQAPgGApQgFAogRAOQgJAHgOAEQgOAEgTAAQg+AAgfgDgAmiBNIAdAAQAWAAAHgGQAEgDADgIQACgGACgLQADgWgFgHQgCgDgGgCIgRgBIggAAgADXBxIgCgnIATgGQAFgCAEgFIAIgLQAKgQAHgXQAGgYAMg0QAFgVANgLQAOgMAXAAIBfAAIgfDdIgxAAIAai5IgaAAQgLAAgGAEQgFAFgCALIgXBXQgGAUgHANQgNAagUAMQgQAJgSAAIgMgBgAu4BjQgHgHgCgKQgCgKACgMIASh+QABgKAEgIQAEgIAHgGQAOgLAXAAQBFAAAhADIgGAkIhTAAQgJAAgFAEQgEAEgBAJIgFAiIBYAAIgFAhIhXAAIgGArQgCAJAEAEQADAEAKAAIBRAAIgBAkQgzADgtAAQgbAAgNgOgAXqBwQgKAAgDgEQgFgEACgKIABgOQACgIAEgEQAFgEAHAAIAKAAQAKAAAEAEQAEAFgBAIIgCAQQgCAPgQAAgARkBwIAZi1IhBAAIAEgoIC2AAIgGAoIhBAAIgaC1gAPXBwIATh+QACgSAFgRIgCAAIgQAdIhdCEIgzAAIAgjdIAvAAIgRB9QgDAQgGAUIACAAQAHgOAKgQIBciDIAyAAIgfDdgALxBwIAOheQgSAKgRAEQgRAGgQAAQgPAAgLgEQgKgEgGgGQgMgOADgbIANhcIAxAAIgLBTQgDANAGAFQAEAEANAAQAZAAAcgOIANhbIAxAAIggDdgAhSBwIAbi5IhNAAIgaC5IgyAAIAfjdICwAAIgfDdgAsPBwIAfjdIAxAAIgbC6IA9AAIAai6IAwAAIgaC6IA9AAIAai6IAwAAIgfDdgAwlBwIAOheQgTAKgQAEQgRAGgQAAQgPAAgKgEQgKgEgHgGQgMgOADgbIAOhcIAwAAIgLBTQgCANAEAFQAFAEAMAAQAaAAAcgOIAMhbIAyAAIgfDdgA29BwIgghiIgEAAIg8BiIg2AAIBKhwIglhtIAwAAIAdBcIAEAAIA5hcIA0AAIhFBtIApBwgAXjAqIAEgSIAIgQQAIgQAKgKIATgUQAJgKACgIQADgNgGgEQgFgEgPAAIhDACIAAghIBNgIQASAAAMAEQANADAJAHQAQAMgDAbQgDAMgGALQgHALgJAIIgTARQgKAHgIAMQgIANgDAOg");
	this.shape.setTransform(5.2,3.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.instance = new lib.Символ75();
	this.instance.parent = this;
	this.instance.setTransform(5.2,4.9,0.714,0.714,0,0,0,0.1,0.1);
	this.instance.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance.cache(-229,-18,458,37);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ34, new cjs.Rectangle(-158.8,-8.8,331,30), null);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AIDDPQgUgXgGghQgHggAEgqIAAgIQALhlAwgnQAYgSAlgJQAjgJAxAAQAxABAhAHQAhAIASAPQAkAfgJA9QgHAogZAVIgHAEQghAThIAGIhcAGQAAAaANAJQAOAJAfAAQBBAABGgJIAKBNQg+AchgAAQhqAAgmgtgAKDgJQgNANgIApIA5gFQAagBALgIQALgHACgUQACgQgIgGQgIgEgbAAQggABgNAMgAkHDyQgkgKgVgWQgmgpAMhcIAAgIQAHgxAPgiQAPghAWgUQAtgoBjAAQAzAAAiALQAkALAUAVQATAWAHAkQAGAigHAxIAAABQgOBggsAnQgtAnhiAAQgyAAgjgKgAjBAAQgHAJgFAUIgLAxQgHA1AIARQAEAJAKADQAKAEARABQAggBAPgTQAGgJAGgTIAJgwQAIg2gHgQQgIgSggAAQgiAAgOATgAQrD0ICglDQAOgZATgWIjRAAIAIhnIElAAQAjgBAMATQAMASgOAdIjLGYgAEaD0IAejWQADgUgEgGQgFgFgPAAQggABgxAlIgdDPIh9AAIAvlVIBjAAIABBBQBLhKBOgBQAWAAARAHQASAFAMAOQAMAOAFAQQAEATgEAXIgjD9gAomD0IAfjbQACgQgDgFQgDgFgNAAQgSABgVAJQgWAJgZAVIgcDNIh+AAIBEngIB9AAIgPBwQgFAngOAsQAjghAigQQAjgRAgAAQAZAAATAHQASAFANAOQAYAagIAuIgkD9gAywD0IBEnZQArgGCMgBQAzgBAkAKQAkAJASARQAUASAHAgQAFAhgFAtQgNBagpAfQgSAQghAIQgLADgMACQgZADgfAAQgfAAgigDIgSgCIgXCpgAv5iOIgSCAIA7AAQAjAAAMgMQANgMAHgtQAFgigJgNQgKgNgdAAgA17D0IAwlVIB8AAIgvFVgA0diOQgnAAAFgnIAEgkQAEgiAlAAIAxAAQAUAAAJAKQAKAKgDAUIgFAjQgCARgKAIQgLAJgSAAg");
	this.shape.setTransform(0,9.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.instance = new lib.Символ33();
	this.instance.parent = this;
	this.instance.setTransform(0,11.9,1.445,1.445);
	this.instance.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance.cache(-99,-19,198,39);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ32, new cjs.Rectangle(-142.4,-15.5,288,58.2), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(-151,-145,300.7,90.7), null);


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


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ50();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:12.4},0).wait(1).to({rotation:24.8},0).wait(1).to({rotation:37.2},0).wait(1).to({rotation:49.7},0).wait(1).to({rotation:62.1},0).wait(1).to({rotation:74.5},0).wait(1).to({rotation:86.9},0).wait(1).to({rotation:99.3,x:-0.1},0).wait(1).to({rotation:111.7},0).wait(1).to({rotation:124.1},0).wait(1).to({rotation:136.6},0).wait(1).to({rotation:149},0).wait(1).to({rotation:161.4},0).wait(1).to({rotation:173.8},0).wait(1).to({rotation:186.2},0).wait(1).to({rotation:198.6},0).wait(1).to({rotation:211},0).wait(1).to({rotation:223.4},0).wait(1).to({rotation:235.9},0).wait(1).to({rotation:248.3},0).wait(1).to({rotation:260.7},0).wait(1).to({rotation:273.1,x:0},0).wait(1).to({rotation:285.5},0).wait(1).to({rotation:297.9},0).wait(1).to({rotation:310.3},0).wait(1).to({rotation:322.8},0).wait(1).to({rotation:335.2},0).wait(1).to({rotation:347.6},0).wait(1).to({rotation:360},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.3,-48.5,98.6,97);


(lib.Символ53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ52();
	this.instance.parent = this;
	this.instance.setTransform(75.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ53, new cjs.Rectangle(-210.8,182,221,185.1), null);


(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ34();
	this.instance.parent = this;
	this.instance.setTransform(0,-0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.87,scaleY:0.87,y:-0.8},3,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,y:-0.7},3,cjs.Ease.get(1)).to({scaleX:0.87,scaleY:0.87,y:-0.8},3,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,y:-0.7},3,cjs.Ease.get(1)).wait(28));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-158.8,-9.5,331,30);


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ48();
	this.instance.parent = this;
	this.instance.setTransform(0,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:0},13,cjs.Ease.get(-0.5)).to({scaleY:0.94,y:3.6},1).to({scaleY:1,y:0},1).to({y:-120},11,cjs.Ease.get(1)).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ65();
	this.instance_1.parent = this;
	this.instance_1.setTransform(2.3,54,2.361,1,0,0,0,0.1,0);
	this.instance_1.alpha = 0.352;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:0.1,scaleX:1.51,scaleY:0.64,x:2.4,y:54.1,alpha:0.828},14).to({regY:0,scaleX:2.36,scaleY:1,x:2.3,y:54,alpha:0.352},12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-142,-179,288.1,263);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ46();
	this.instance.parent = this;
	this.instance.setTransform(0,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:0},7,cjs.Ease.get(-0.5)).to({scaleY:0.85,y:6},1).to({scaleY:1,y:0},1).to({y:-30},6,cjs.Ease.get(1)).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ63();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1.2,37.2,1.885,1.885,0,0,0,-0.1,0.1);
	this.instance_1.alpha = 0.352;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:-1,y:37,alpha:1},8).to({regX:-0.1,regY:0.1,scaleX:1.89,scaleY:1.89,x:-1.2,y:37.2,alpha:0.352},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116,-69.4,230,147.8);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ44();
	this.instance.parent = this;
	this.instance.setTransform(0,-164);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:0},12,cjs.Ease.get(-0.5)).to({scaleY:0.92,y:6.1},1).to({scaleY:1,y:0},1).to({y:-164},12,cjs.Ease.get(1)).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ61();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,73,1.497,1.497);
	this.instance_1.alpha = 0.27;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:0.1,scaleX:0.57,scaleY:0.57,y:73.1,alpha:0.891},13).to({regY:0,scaleX:1.5,scaleY:1.5,y:73,alpha:0.27},13).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-193,-236.8,386.1,345.7);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.parent = this;
	this.instance.setTransform(0,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:0},9,cjs.Ease.get(-0.5)).to({scaleY:0.85,y:7.5},1).to({scaleY:1,y:0},1).to({y:-130},8,cjs.Ease.get(1)).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ60();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1.2,47.5,1.59,0.613,0,0,0,0.1,0);
	this.instance_1.alpha = 0.449;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:0,scaleX:1,scaleY:0.39,x:1,alpha:1},10).to({regX:0.1,scaleX:1.59,scaleY:0.61,x:1.2,alpha:0.449},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96,-178.5,194,263.4);


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
p.nominalBounds = new cjs.Rectangle(-145.5,-19.9,293.1,59.4);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 32
	this.instance = new lib.Символ35();
	this.instance.parent = this;
	this.instance.setTransform(-6.9,9.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ31, new cjs.Rectangle(-152.4,-10.3,293.1,59.4), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(-37.7,-25.4,75.5,50.8), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// nzball.png
	this.instance = new lib.Символ47();
	this.instance.parent = this;
	this.instance.setTransform(889,-1.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// portball.png
	this.instance_1 = new lib.Символ49();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1166,22);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// rusball.png
	this.instance_2 = new lib.Символ45();
	this.instance_2.parent = this;
	this.instance_2.setTransform(18,5.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// mexball.png
	this.instance_3 = new lib.Символ43();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-226.7,-19.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(-322.7,-231,1634.7,345.7), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-30},59).to({rotation:0},60).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.7,-25.4,75.5,50.8);


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
	this.instance.setTransform(416.8,-131.7,2.123,2.123,15,0,0,0,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// doll2.png
	this.instance_1 = new lib.Символ11();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-623.1,-151.5,1.773,1.773,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 5
	this.instance_2 = new lib.Символ5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(172.7,-135.9,1.267,1.267,0,0,0,0.1,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// doll.png
	this.instance_3 = new lib.Символ5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-840.8,-138.6,1.072,1.072,0,0,0,-0.1,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Слой 1
	this.instance_4 = new lib.Символ11();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-274.4,-148.7,1.22,1.22,-15,0,0,0,-0.1);

	this.instance_5 = new lib.Символ11();
	this.instance_5.parent = this;
	this.instance_5.setTransform(869,-118.2,0.8,0.8,-15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4}]}).wait(1));

	// Слой 4
	this.instance_6 = new lib.Символ5();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-484.9,-152.4,0.802,0.802,-45,0,0,0.2,-0.4);

	this.instance_7 = new lib.Символ5();
	this.instance_7.parent = this;
	this.instance_7.setTransform(651.3,-142.6,0.525,0.525,-45,0,0,0.2,-0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(-892.4,-204.6,1795.8,146.1), null);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this,
		canvasBox = document.getElementById('canvasBox'),
		canvasBg = document.getElementById('canvas_bg'),
		apearBox = document.getElementById('apearBox');
		
		
		window._setCanvasSize = function() {
				
			var sScale = getWindowSize(),
				iw = sScale.iw,
				ih = 250;
			
			
			/* Позиции элементов по умолчанию */
			
			_this.logo.x = iw / 2;
			_this.logo.y = ih * 0.15;
			
			_this.btn.x = iw / 2;
			_this.btn.y = ih * 0.85;
			
			_this.txt.x = iw / 2;
			_this.txt.y = ih * 0.6;
			
			_this.hochesh.x = iw / 2;
			_this.hochesh.y = ih * 0.35;
			
			_this.iphone.x = iw * 0.15;
			_this.iphone.y = ih;
			
			_this.txt_bg.x = iw / 2;
			_this.txt_bg.y = ih * 0.6;
			
			_this.tickets.x = iw * 0.85;
			_this.tickets.y = ih;
			
			_this.bablo.x = iw / 2;
			_this.bablo.y = 0;
			
			_this.balls.x = iw / 2;
			_this.balls.y = ih;
		}
					
		window.onresize=function(){_setCanvasSize();}
		window.onresize();
		
		//Actions
		
		apearBox.classList.remove('remove');
		apearBox.classList.add('add');
		
		canvasBox.addEventListener('click', function(){
		window.callClick();
		});
		
		canvasBox.style.backgroundColor = 'rgba(0,0,0,1)';
		
		//Переход
		
		window.onresize();
		document.addEventListener("DOMContentLoaded", function(){ _setCanvasSize()});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Символ 13
	this.logo = new lib.Символ13();
	this.logo.parent = this;
	this.logo.setTransform(959.7,37.6,0.566,0.566,0,0,0,-0.5,-99.6);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

	// Слой 1
	this.btn = new lib.Символ42();
	this.btn.parent = this;
	this.btn.setTransform(959.1,217.1,1.353,1.353);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// Символ 51
	this.hochesh = new lib.Символ51();
	this.hochesh.parent = this;
	this.hochesh.setTransform(956.2,78.3,0.813,0.813,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.hochesh).wait(1));

	// Символ 31
	this.txt = new lib.Символ31();
	this.txt.parent = this;
	this.txt.setTransform(959.2,149.5,0.899,0.899,0,0,0,-8.2,19.4);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	// Символ 58
	this.txt_bg = new lib.Символ58();
	this.txt_bg.parent = this;
	this.txt_bg.setTransform(960.3,148.6,2.832,0.422,0,0,0,0.1,0);
	this.txt_bg.alpha = 0.75;

	this.timeline.addTween(cjs.Tween.get(this.txt_bg).wait(1));

	// Символ 56
	this.iphone = new lib.Символ56();
	this.iphone.parent = this;
	this.iphone.setTransform(693.6,250.2,0.49,0.49,0,0,0,13.7,344);

	this.timeline.addTween(cjs.Tween.get(this.iphone).wait(1));

	// Символ 53
	this.tickets = new lib.Символ53();
	this.tickets.parent = this;
	this.tickets.setTransform(1214.7,258.5,0.697,0.697,0,0,0,-68,357.9);

	this.timeline.addTween(cjs.Tween.get(this.tickets).wait(1));

	// Слой 2
	this.bablo = new lib.Символ3();
	this.bablo.parent = this;
	this.bablo.setTransform(960,-30.1,0.903,0.903,0,0,0,-74.5,-179);

	this.timeline.addTween(cjs.Tween.get(this.bablo).wait(1));

	// Слой 18
	this.balls = new lib.Символ1();
	this.balls.parent = this;
	this.balls.setTransform(1020.1,250.1,1,1,0,0,0,494.1,88.6);

	this.timeline.addTween(cjs.Tween.get(this.balls).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,55.5,1920,345.7);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/btn.png", id:"btn"},
		{src:"images/doll.png", id:"doll"},
		{src:"images/doll2.png", id:"doll2"},
		{src:"images/iph.png", id:"iph"},
		{src:"images/iph2.png", id:"iph2"},
		{src:"images/logo.png", id:"logo"},
		{src:"images/mexball.png", id:"mexball"},
		{src:"images/money.png", id:"money"},
		{src:"images/nzball.png", id:"nzball"},
		{src:"images/portball.png", id:"portball"},
		{src:"images/rusball.png", id:"rusball"},
		{src:"images/ten.png", id:"ten"},
		{src:"images/tick.png", id:"tick"},
		{src:"images/tickets.png", id:"tickets"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;