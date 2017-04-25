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



(lib.deathskullandbones = function() {
	this.initialize(img.deathskullandbones);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,128,128);


(lib.security1 = function() {
	this.initialize(img.security1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,32,32);// helper functions:

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


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAeB9QgYgXAAgtIAAgOIA8AAIAAALQAAASAGALQAGAMANAAQANAAAGgKQAFgJAAgXQAAgXgJgHQgIgIgYAAIgOAAIAAgsIAKAAQAYAAAJgHQAJgIAAgXQAAgNgFgJQgGgIgLAAQgLAAgGAHQgHAIAAANIAAAPIg8AAIAAgIQAAgSAFgPQAFgOAKgLQAWgZArAAQASAAAPAEQAPAFALAKQAXAUAAAgQAAAYgIANQgJASgXAGQAOAFAJAIQAKAGAEAJQAIAPAAAgQAAAVgFAQQgGAQgLALQgXAUgqAAQgnAAgWgVgAhKCMIgThAIgRBAIhDAAIAzhqIgwhsIBAAAIARA9IATg9IA/AAIgwBsIAwBqg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ33, new cjs.Rectangle(-17.8,-14.6,35.7,29.3), null);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ArHCeQgWgWAAgxIAAh8QAAgRAFgOQAGgPAKgLQANgMASgGQARgFAYAAQAXAAASAFQASAHAMALQAXAWAAAkIAAAaIhGAAIAAggQABgLgJgFQgHgHgKAAQgKABgGAFQgHAFAAALIAACPQAAAQAGAGQAFAIAMAAQAMAAAGgIQAIgHgBgPIAAgnIBGAAIAAAbQgBAwgWAWQgLAMgSAFQgSAGgYAAQgwAAgXgXgABDCpIAAgzIAIACIAIABQAQgBADgRQACgxAAg7IAAhqIC2AAIAAEeIhFAAIAAjlIgtAAIAABfQAAAngEAbQgEAbgHAPQgJAOgMAIQgOAHgSAAQgRAAgUgJgAKdCvIAAhDIAMhsIg8CvIhDAAIAAkeIBCAAIAABIIgHBEQgDAWAAARIA7izIBBAAIAAEegAG7CvIAAhuIgOAAIgoBuIhLAAIA2h/QgSgJgLgUQgFgLgDgLQgDgMAAgNQAAgRAGgPQAFgPAKgMQALgMAOgGQAOgFATgBIBoAAIAAEegAGWgxQgIAJAAAQQAAARAIAKQAHAKANAAIARAAIAAhIIgQAAQgOAAgHAKgAhwCvIAAkeICgAAIAAA2IhaAAIAAA4IBTAAIAAA1IhTAAIAABFIBaAAIAAA2gAlICvIAAkeIBlAAQATABAOADQAOAEAJAIQAOALAHASQAHARgBAaQAAAvgaAWQgVARgkAAIgfAAIAABwgAkCAMIAMAAQAOAAAJgIQAFgEACgHQADgHAAgKQAAgUgJgHQgIgIgRAAIgLAAgAnVCvIAAjlIg2AAIAAg5ICoAAIAAA5IgyAAIAADlgAJriDQgLgDgHgGQgSgNAAgbIAbAAQABAMAMAFQAJAEANAAQAPAAAHgEQAJgFADgMIAbAAQgBAZgSAOQgJAHgLADQgLACgMAAQgOABgLgDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ32, new cjs.Rectangle(-73.4,-18.1,146.9,36.2), null);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("ArHCeQgWgWAAgxIAAh8QAAgRAFgOQAGgPAKgLQANgMASgGQARgFAYAAQAXAAASAFQASAHAMALQAXAWAAAkIAAAaIhGAAIAAggQABgLgJgFQgHgHgKAAQgKABgGAFQgHAFAAALIAACPQAAAQAGAGQAFAIAMAAQAMAAAGgIQAIgHgBgPIAAgnIBGAAIAAAbQgBAwgWAWQgLAMgSAFQgSAGgYAAQgwAAgXgXgABDCpIAAgzIAIACIAIABQAQgBADgRQACgxAAg7IAAhqIC2AAIAAEeIhFAAIAAjlIgtAAIAABfQAAAngEAbQgEAbgHAPQgJAOgMAIQgOAHgSAAQgRAAgUgJgAKdCvIAAhDIAMhsIg8CvIhDAAIAAkeIBCAAIAABIIgHBEQgDAWAAARIA7izIBBAAIAAEegAG7CvIAAhuIgOAAIgoBuIhLAAIA2h/QgSgJgLgUQgFgLgDgLQgDgMAAgNQAAgRAGgPQAFgPAKgMQALgMAOgGQAOgFATgBIBoAAIAAEegAGWgxQgIAJAAAQQAAARAIAKQAHAKANAAIARAAIAAhIIgQAAQgOAAgHAKgAhwCvIAAkeICgAAIAAA2IhaAAIAAA4IBTAAIAAA1IhTAAIAABFIBaAAIAAA2gAlICvIAAkeIBlAAQATABAOADQAOAEAJAIQAOALAHASQAHARgBAaQAAAvgaAWQgVARgkAAIgfAAIAABwgAkCAMIAMAAQAOAAAJgIQAFgEACgHQADgHAAgKQAAgUgJgHQgIgIgRAAIgLAAgAnVCvIAAjlIg2AAIAAg5ICoAAIAAA5IgyAAIAADlgAJriDQgLgDgHgGQgSgNAAgbIAbAAQABAMAMAFQAJAEANAAQAPAAAHgEQAJgFADgMIAbAAQgBAZgSAOQgJAHgLADQgLACgMAAQgOABgLgDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ31, new cjs.Rectangle(-73.4,-18.1,146.9,36.2), null);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#009900").ss(4.4,1,1).p("ArSBYQgDgagBgbQgBgRAAgSQAAksDVjVQDVjWEtAAQASAAARABQAbABAaADALShgQAGAvAAAxQAAEujWDVQjVDVktAAQgxAAgvgG");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#009900").ss(2,1,1).p("AqnqnICnCnIAvAuAHCHBIBCBDICkCk");
	this.shape_1.setTransform(-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ30, new cjs.Rectangle(-75,-75,150,150), null);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#009900").ss(2,1,1).p("AF7l7IAAAAQCeCeAADdQgBANAAAMQgBAVgCATAE+k+IA9g9AhAoUQATgDAVAAQAMgBAMAAQDeAACdCdIBlhlABHIUQgjAFgkAAQjdAAidieIgBAAIAzgyAl7F7QicidAAjeQgBgkAFgjAnfHfIBkhk");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ29, new cjs.Rectangle(-54.6,-54.6,109.3,109.3), null);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EiUuBHAMAAAiN/MEpdAAAMAAACN/gAoJoJQjXDYAAExQAAExDXDYQDYDYExAAQExAADYjYQDYjYAAkxQAAkxjYjYQjYjXkxAAQkxAAjYDXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(-951.9,-454.3,1903.8,908.8), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009A00").s().p("ACBB6QgIgKgFgOQgEgNAAgSIAAiGQAAgRAEgOQAFgNAIgLQAVgXAuAAQAZAAASAGQARAGAKAMQAJAKAFANQADAOABARIAACGQgBASgEANQgEAOgJAKQgVAYgxAAQgtAAgWgYgACzhaQgEAGAAAQIAACJQAAAPAEAHQAFAHAMAAQANAAAFgHQAEgGAAgQIAAiJQAAgPgFgHQgFgHgMAAQgNAAgEAHgAhGB6QgJgKgEgOQgFgNABgSIAAiGQgBgRAFgOQAEgNAJgLQAVgXAuAAQAYAAASAGQARAGALAMQAIAKAEANQAFAOAAARIAACGQgBASgEANQgEAOgIAKQgWAYgwAAQgtAAgWgYgAgUhaQgEAGAAAQIAACJQAAAPAEAHQAFAHAMAAQAMAAAFgHQADgGAAgQIAAiJQABgPgFgHQgFgHgLAAQgNAAgEAHgAjgCMIAAjBIg7AAIAAgsIAEAAQAPAAAMgDQAMgDAKgGQAUgLADgUIAsAAIABEYg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#01FF66").s().p("AA3CIQgQgEgJgJQgKgIgEgLQgDgKAAgPIAAidQgBgPAFgLQAEgLAKgIQAJgIARgEQAQgEAXAAQAXAAAQAEQAPAEAKAIQAKAHAEAMQAEALAAAPIAAAXIhCAAIAAgOQAAgMgEgDQgCgDgKAAQgJAAgDADQgDADgBAMIAAAmIAZAAQAYAAAOAEQAQAFAKANQAFAHAEAJQACALAAAOIAAAvQAAAPgDAKQgEALgKAIQgKAJgQAEQgQAEgZAAQgYAAgRgEgABQBGQABAMADADQADADAJAAQAKAAACgDQAEgDAAgMIAAgnQAAgNgJAAIgXAAgAiICIQgRgEgJgJQgJgIgEgLQgEgKAAgPIAAidQAAgPAFgLQADgLAKgIQAKgIAQgEQAQgEAYAAQAXAAAQAEQAPAEAKAIQAJAHAEAMQAFALAAAPIAAAXIhDAAIAAgOQABgMgEgDQgDgDgJAAQgKAAgDADQgDADAAAMIAAAmIAZAAQAXAAAPAEQAQAFAKANQAFAHADAJQACALABAOIAAAvQgBAPgDAKQgEALgKAIQgJAJgRAEQgQAEgYAAQgZAAgQgEgAhvBGQAAAMADADQADADAKAAQAJAAADgDQAEgDgBgMIAAgnQAAgNgJAAIgWAAg");
	this.shape_1.setTransform(-8.7,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9901").s().p("AA3CIQgQgEgKgIQgJgHgEgMQgEgLAAgPIAAgWIBDAAIAAANQAAAMAEADQADADAJAAQAJAAADgDQAEgDAAgMIAAgjQAAgPgJAAIgTAAIAAgxIATAAQAJAAAAgOIAAgaQAAgMgEgDQgDgDgJAAQgJAAgDADQgEADAAAMIAAAOIhDAAIAAgXQAAgPAEgLQAEgMAJgHQAKgIAQgEQARgEAXAAQAYAAAQAEQAQAEAKAIQAJAIAFALQAEALAAAPIAAAdQAAAPgEAKQgGANgMAFQAMAEAFAMQAFAMAAASIAAAnQAAAPgEAKQgEALgJAIQgJAJgRAEQgRAEgYAAQgXAAgRgEgAiGCIQgQgEgKgIQgJgHgFgMQgEgLAAgPIAAgWIBEAAIAAANQAAAMAEADQADADAJAAQAJAAADgDQAEgDAAgMIAAgjQgBgPgIAAIgUAAIAAgxIAUAAQAIAAABgOIAAgaQAAgMgEgDQgDgDgJAAQgJAAgDADQgEADAAAMIAAAOIhEAAIAAgXQAAgPAEgLQAFgMAJgHQAKgIAQgEQAQgEAYAAQAXAAARAEQAQAEAKAIQAJAIAEALQAEALAAAPIAAAdQAAAPgEAKQgFANgNAFQAMAEAGAMQAEAMAAASIAAAnQAAAPgDAKQgEALgJAIQgKAJgQAEQgRAEgYAAQgYAAgQgEg");
	this.shape_2.setTransform(-9,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgjA8QAAgPAHgNQAGgMAMgJQAKgKAjgOIANgGIAFgCIAGgFQAFgGAAgKIAAgZQAAgMgEgEQgDgCgIAAQgJAAgEACQgDAEAAAMIAAAUIhBAAIAAgdQAAgPADgLQAFgMAJgHQAKgIAOgEQARgEAXAAQAUAAAQAEQAPAEAIAIQAKAHAFAMQADALAAAPIAAAvQAAAQgFALQgGAKgLAIQgMAJgQAIIgiASIgGAFQgEAGAAAMIAAAJIBiAAIAAA3IilAAgAiACKIAAkPIBDAAIAAEPg");
	this.shape_3.setTransform(-13.7,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgnCIQgQgEgKgIQgJgHgEgMQgFgLAAgPIAAidQAAgPAFgLQAEgMAJgHQAKgIAQgEQAQgEAXAAQAYAAAQAEQAQAEAKAIQAJAHAFAMQAEALAAAPIAACdQAAAPgEALQgFAMgJAHQgKAIgQAEQgQAEgYAAQgXAAgQgEgAgLhUQgEADAAAMIAACLQAAAMAEADQADADAIAAQAJAAADgDQAEgDAAgMIAAiLQAAgMgEgDQgDgDgJAAQgIAAgDADg");
	this.shape_4.setTransform(-18.4,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},299).to({state:[{t:this.shape_2}]},301).to({state:[{t:this.shape_3}]},220).to({state:[{t:this.shape_4}]},49).wait(153));

	// Слой 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("ACBB6QgIgKgFgOQgEgNAAgSIAAiGQAAgRAEgOQAFgNAIgLQAVgXAuAAQAZAAASAGQARAGAKAMQAJAKAFANQADAOABARIAACGQgBASgEANQgEAOgJAKQgVAYgxAAQgtAAgWgYgACzhaQgEAGAAAQIAACJQAAAPAEAHQAFAHAMAAQANAAAFgHQAEgGAAgQIAAiJQAAgPgFgHQgFgHgMAAQgNAAgEAHgAhGB6QgJgKgEgOQgFgNABgSIAAiGQgBgRAFgOQAEgNAJgLQAVgXAuAAQAYAAASAGQARAGALAMQAIAKAEANQAFAOAAARIAACGQgBASgEANQgEAOgIAKQgWAYgwAAQgtAAgWgYgAgUhaQgEAGAAAQIAACJQAAAPAEAHQAFAHAMAAQAMAAAFgHQADgGAAgQIAAiJQABgPgFgHQgFgHgLAAQgNAAgEAHgAjgCMIAAjBIg7AAIAAgsIAEAAQAPAAAMgDQAMgDAKgGQAUgLADgUIAsAAIABEYg");
	this.shape_5.setTransform(0,1.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AA3CIQgQgEgJgJQgKgIgEgLQgDgKAAgPIAAidQgBgPAFgLQAEgLAKgIQAJgIARgEQAQgEAXAAQAXAAAQAEQAPAEAKAIQAKAHAEAMQAEALAAAPIAAAXIhCAAIAAgOQAAgMgEgDQgCgDgKAAQgJAAgDADQgDADgBAMIAAAmIAZAAQAYAAAOAEQAQAFAKANQAFAHAEAJQACALAAAOIAAAvQAAAPgDAKQgEALgKAIQgKAJgQAEQgQAEgZAAQgYAAgRgEgABQBGQABAMADADQADADAJAAQAKAAACgDQAEgDAAgMIAAgnQAAgNgJAAIgXAAgAiICIQgRgEgJgJQgJgIgEgLQgEgKAAgPIAAidQAAgPAFgLQADgLAKgIQAKgIAQgEQAQgEAYAAQAXAAAQAEQAPAEAKAIQAJAHAEAMQAFALAAAPIAAAXIhDAAIAAgOQABgMgEgDQgDgDgJAAQgKAAgDADQgDADAAAMIAAAmIAZAAQAXAAAPAEQAQAFAKANQAFAHADAJQACALABAOIAAAvQgBAPgDAKQgEALgKAIQgJAJgRAEQgQAEgYAAQgZAAgQgEgAhvBGQAAAMADADQADADAKAAQAJAAADgDQAEgDgBgMIAAgnQAAgNgJAAIgWAAg");
	this.shape_6.setTransform(-8.7,1.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AA3CIQgQgEgKgIQgJgHgEgMQgEgLAAgPIAAgWIBDAAIAAANQAAAMAEADQADADAJAAQAJAAADgDQAEgDAAgMIAAgjQAAgPgJAAIgTAAIAAgxIATAAQAJAAAAgOIAAgaQAAgMgEgDQgDgDgJAAQgJAAgDADQgEADAAAMIAAAOIhDAAIAAgXQAAgPAEgLQAEgMAJgHQAKgIAQgEQARgEAXAAQAYAAAQAEQAQAEAKAIQAJAIAFALQAEALAAAPIAAAdQAAAPgEAKQgGANgMAFQAMAEAFAMQAFAMAAASIAAAnQAAAPgEAKQgEALgJAIQgJAJgRAEQgRAEgYAAQgXAAgRgEgAiGCIQgQgEgKgIQgJgHgFgMQgEgLAAgPIAAgWIBEAAIAAANQAAAMAEADQADADAJAAQAJAAADgDQAEgDAAgMIAAgjQgBgPgIAAIgUAAIAAgxIAUAAQAIAAABgOIAAgaQAAgMgEgDQgDgDgJAAQgJAAgDADQgEADAAAMIAAAOIhEAAIAAgXQAAgPAEgLQAFgMAJgHQAKgIAQgEQAQgEAYAAQAXAAARAEQAQAEAKAIQAJAIAEALQAEALAAAPIAAAdQAAAPgEAKQgFANgNAFQAMAEAGAMQAEAMAAASIAAAnQAAAPgDAKQgEALgJAIQgKAJgQAEQgRAEgYAAQgYAAgQgEg");
	this.shape_7.setTransform(-9,1.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgjA9QAAgQAHgMQAGgNAMgJQAKgKAjgOIANgGIAFgCIAGgFQAFgGAAgLIAAgZQAAgLgEgDQgDgDgIgBQgJABgEADQgDADAAALIAAAVIhBAAIAAgeQAAgPADgKQAFgMAJgIQAKgHAOgEQARgEAXAAQAUAAAQAEQAPAEAIAHQAKAIAFAMQADAKAAAPIAAAwQAAAQgFAMQgGAKgLAHQgMAJgQAIIgiASIgGAEQgEAHAAAMIAAAJIBiAAIAAA2IilABgAiACJIAAkOIBDAAIAAEOg");
	this.shape_8.setTransform(-13.7,1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgnCIQgQgEgKgIQgJgHgEgMQgFgLAAgPIAAidQAAgPAFgLQAEgMAJgHQAKgIAQgEQAQgEAXAAQAYAAAQAEQAQAEAKAIQAJAHAFAMQAEALAAAPIAACdQAAAPgEALQgFAMgJAHQgKAIgQAEQgQAEgYAAQgXAAgQgEgAgLhUQgEADAAAMIAACLQAAAMAEADQADADAIAAQAJAAADgDQAEgDAAgMIAAiLQAAgMgEgDQgDgDgJAAQgIAAgDADg");
	this.shape_9.setTransform(-18.4,1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5}]}).to({state:[{t:this.shape_6}]},299).to({state:[{t:this.shape_7}]},301).to({state:[{t:this.shape_8}]},220).to({state:[{t:this.shape_9}]},49).wait(153));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.3,-14.6,56.7,30.4);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.security1();
	this.instance.parent = this;
	this.instance.setTransform(-16,-16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(-16,-16,32,32), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AQ5EXIAAhPIlIAAIAAmAIBeAAIAAEyIA9AAIAAkyIBZAAIAAEyIA+AAIAAkyIBcAAIAAEyIAUAAIAACdgA2wCxQgfgdAAhBIAAioQAAgXAHgUQAIgTAOgOQASgQAXgIQAYgIAfAAQAfAAAZAIQAYAIARAQQAdAdAAAwIAAAjIhcAAIAAgrQAAgOgLgIQgLgIgMAAQgNAAgJAIQgKAGABAOIAADAQAAAWAHAKQAIAJAQAAQAQAAAIgJQAKgLAAgVIAAgyIBcAAIAAAjQAABBgeAdQgPAQgYAIQgYAHghAAQhAAAgegfgATRDIIAAmDIDzAAIAAA1IiiAAIAABtICEAAIAAAyIiEAAIAAB4ICuAAIAAA3gAHuDIIAAmAIDYAAIAABIIh6AAIAABLIBxAAIAABHIhxAAIAABdIB6AAIAABJgADSDIIAAhaIARiQIhRDqIhaAAIAAmAIBZAAIAABgIgLBbQgDAfAAAWIBPjwIBZAAIAAGAgAhBDIIgOhOIhHAAIgMBOIhcAAIBUmAIBvAAIBUGAgAiMA1IAxAAIgaingAoFDIIAAmAICHAAQAZAAATAFQATAFANALQATAOAJAZQAJAYgBAhQABBBgkAcQgbAXgyAAIgpAAIAACXgAmngTIAQAAQATAAAMgKQAHgGADgKQADgKAAgMQAAgbgMgKQgLgKgXAAIgOAAgAr0DIIAAmAIDMAAIAABMIhtAAIAAE0gAuGDIIAAmAIBeAAIAAGAgAyiDIIAAmAIBdAAIAACWIAqAAQAYAAATAFQAUAGANALQAkAdAABCQAAAhgJAYQgJAXgSAPQgbAWgxAAgAxFCDIAPAAQAWAAALgKQANgLAAgaQAAgPgEgJQgDgKgHgGQgLgKgTAAIgRAAgACPjTQgOgEgKgIQgYgSAAgkIAkAAQACARAPAFQAMAGATAAQASAAALgGQALgFAFgRIAjAAQAAAigZASQgLAJgPAEQgPAEgRAAQgSAAgPgDgAVojcIAAg6IA7AAIAAA6gAT7jcIAAg6IA6AAIAAA6g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(-148.8,-27.9,297.6,55.8), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.deathskullandbones();
	this.instance.parent = this;
	this.instance.setTransform(-33,-43,0.516,0.516);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(-33,-43,66,66), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AiEB/QgMgMgFgRQgGgQAAgWIAAiAQAAgkAWgVQAYgYAvABQAvgBAXAYQALALAGAOQAFAPAAASIAAB/QAAAWgFARQgGAQgLAMQgLALgRAGQgSAFgYAAQgvAAgXgWgAhPhbQgHAHAAALIAACRQAAAMAHAIQAHAGAKAAQAKAAAHgGQAHgHAAgNIAAiRQAAgLgHgHQgHgGgKAAQgKAAgHAGgANwCKIAAg0IAHACIAJABQAQAAACgSQADgxAAg7IAAhpIC2AAIAAEdIhFAAIAAjkIguAAIAABfQAAAngDAbQgEAbgIAPQgIAOgNAHQgNAIgSAAQgSAAgTgJgASBCPIAAhCIA+AAIAABCgAMiCPIgKg5Ig1AAIgJA5IhFAAIA/kdIBSAAIBAEdgALqAiIAlAAIgTh9gAHSCPIAAkdIBkAAQATAAAOADQAOAFAKAHQANALAHATQAHARAAAZQAAAwgbAVQgUARglAAIgfAAIAABwgAIXgTIAMAAQAPAAAIgIQAFgEADgIQACgGAAgLQAAgUgJgHQgIgIgRAAIgLAAgAEgCPIAAkdICXAAIAAA5IhRAAIAADkgAC2CPIAAhCIAMhsIg8CuIhDAAIAAkdIBDAAIAABIQAAALgHA5IgEAnIA7izIBCAAIAAEdgAluCPIAAkdIBkAAQATAAAOADQAOAFAKAHQANALAHATQAHARAAAZQAAAwgbAVQgUARglAAIgfAAIAABwgAkpgTIAMAAQAPAAAIgIQAFgEADgIQACgGAAgLQAAgUgJgHQgIgIgRAAIgLAAgAnfCPIAAjkIguAAIAADkIhFAAIAAkdIC4AAIAAEdgAsnCPIAAkdIBFAAIAAEdgAv7CPIAAkdIBGAAIAABvIAfAAQASAAAOAEQAOAFALAJQAaAVAAAwQAAAZgGASQgHARgOAMQgUAPgkAAgAu1BcIALAAQAQAAAJgHQAJgJAAgTQAAgKgDgHQgCgIgFgEQgJgIgOAAIgMAAgAyICPIAAjkIg2AAIAAg5ICoAAIAAA5IgyAAIAADkgASPAyIgOh/IAAhFIA+AAIAABFIgOB/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(-121.5,-14.9,243.1,29.9), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhCtAgYMAAAhAvMCFbAAAMAAABAvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(-426.9,-207.2,854,414.5), null);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 24
	this.instance = new lib.Символ29();
	this.instance.parent = this;
	this.instance.setTransform(-0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-0.1,regY:-0.1,scaleX:0.65,scaleY:0.65,rotation:-45,x:-0.3},39,cjs.Ease.get(1)).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:-0.1},40,cjs.Ease.get(1)).wait(1));

	// Символ 23
	this.instance_1 = new lib.Символ30();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:90},39,cjs.Ease.get(1)).to({rotation:0},40,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-75,150,150);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.parent = this;
	this.instance.setTransform(18,-0.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#009900").ss(1,1,1).p("AiWgiIB0AAIAAh0IBFAAIAAB0IB0AAIAABFIh0AAIAAB0IhFAAIAAh0Ih0AAg");
	this.shape.setTransform(-31.2,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FF66").s().p("AgQCGIAAh1Ih1AAIAAghIB1AAIAAh1IAhAAIAAB1IB1AAIAAAhIh1AAIAAB1g");
	this.shape_1.setTransform(-31.2,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(-47.3,-16.1,93.6,32.2), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ31();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ32();
	this.instance_1.parent = this;
	this.instance_1.filters = [new cjs.BlurFilter(5, 5, 1)];
	this.instance_1.cache(-75,-20,151,40);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(-76.4,-21.1,156,46), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9900").s().p("AAeB9QgYgXAAgtIAAgOIA8AAIAAALQAAASAGALQAGAMANAAQANAAAGgKQAFgJAAgXQAAgXgJgHQgIgIgYAAIgOAAIAAgsIAKAAQAYAAAJgHQAJgIAAgXQAAgNgFgJQgGgIgLAAQgLAAgGAHQgHAIAAANIAAAPIg8AAIAAgIQAAgSAFgPQAFgOAKgLQAWgZArAAQASAAAPAEQAPAFALAKQAXAUAAAgQAAAYgIANQgJASgXAGQAOAFAJAIQAKAGAEAJQAIAPAAAgQAAAVgFAQQgGAQgLALQgXAUgqAAQgnAAgWgVgAhKCMIgThAIgRBAIhDAAIAzhqIgwhsIBAAAIARA9IATg9IA/AAIgwBsIAwBqg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.instance = new lib.Символ33();
	this.instance.parent = this;
	this.instance.setTransform(0,0.8);
	this.instance.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance.cache(-20,-17,40,33);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(-19.8,-15.8,42,36), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.88,scaleY:0.88},9,cjs.Ease.get(-1)).to({scaleX:0.74,scaleY:0.74},10,cjs.Ease.get(1)).to({scaleX:0.87,scaleY:0.87},10,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-148.8,-27.9,297.6,55.8);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ6();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.18,scaleY:1.18},9,cjs.Ease.get(-1)).to({scaleX:1.38,scaleY:1.38},10,cjs.Ease.get(1)).to({scaleX:1.19,scaleY:1.19},10,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.5,-14.9,243.1,29.9);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.Символ10();
	this.instance.parent = this;
	this.instance.setTransform(0.5,108.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(892).to({_off:false},0).to({y:88.8,alpha:1},8,cjs.Ease.get(1)).wait(84).to({y:108.8,alpha:0},11).wait(27));

	// Слой 3
	this.instance_1 = new lib.Символ8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-14);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(884).to({_off:false},0).to({y:1,alpha:1},8,cjs.Ease.get(1)).wait(103).to({y:-14,alpha:0},8,cjs.Ease.get(1)).wait(19));

	// Слой 2
	this.instance_2 = new lib.Символ7();
	this.instance_2.parent = this;
	this.instance_2.setTransform(2.2,-66.9);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(875).to({_off:false},0).to({y:-106.9,alpha:1},9).wait(119).to({alpha:0},9,cjs.Ease.get(1)).wait(10));

	// Слой 1
	this.instance_3 = new lib.Символ3();
	this.instance_3.parent = this;
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(865).to({_off:false},0).to({alpha:0.621},10).wait(137).to({alpha:0},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// prizel.png
	this.instance = new lib.Символ25();
	this.instance.parent = this;
	this.instance.setTransform(-0.1,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ22();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.1,1.4);
	this.instance_1.alpha = 0.59;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(-952,-452.9,1903.8,908.8), null);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.parent = this;
	this.instance.setTransform(22.7,0);

	this.instance_1 = new lib.Символ11();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-20.8,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(-40.6,-16,79.3,37.9), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.parent = this;
	this.instance.setTransform(-18.2,18.1,1,1,0,0,0,0,18.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-0.1,scaleX:1.15,scaleY:1.15,x:-18.3,y:18.2},4,cjs.Ease.get(1)).to({regX:0,scaleX:1,scaleY:1,x:-18.2,y:18.1},4,cjs.Ease.get(1)).to({regX:-0.1,scaleX:1.15,scaleY:1.15,x:-18.3,y:18.2},4,cjs.Ease.get(1)).to({regX:0,scaleX:1,scaleY:1,x:-18.2,y:18.1},4,cjs.Ease.get(1)).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94.7,-21.1,156,46);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.parent = this;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.parent = this;
	this.instance.setTransform(18.3,51.2);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:0,alpha:1},10).wait(862).to({y:51.2,alpha:0},7,cjs.Ease.get(1)).wait(141));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.4,30.1,156,46);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 19
	this.instance = new lib.Символ19();
	this.instance.parent = this;
	this.instance.setTransform(143.6,2.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 18
	this.instance_1 = new lib.Символ18();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-355.5,2.5,1,1,0,0,0,-0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Символ 17
	this.instance_2 = new lib.Символ17();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-108.8,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(-402.1,-13.6,584.4,90.4), null);


// stage content:
(lib.tanki = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		stage.canvas.style.cursor = "none";
		this.kurs.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor_2.bind(this));
		
		function fl_CustomMouseCursor_2() {
			this.kurs.x = stage.mouseX;
			this.kurs.y = stage.mouseY;
		}
		
		this.cursor = "none";
		
		var _this = this;
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		  function fl_MouseOverHandler_5()
		{
		    _this.kurs.gotoAndStop(1);
		}
		
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		  function fl_MouseOutHandler_2()
		{
		    _this.kurs.gotoAndStop(0);
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 3
	this.instance = new lib.Символ4();
	this.instance.parent = this;
	this.instance.setTransform(318,156);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 4
	this.instance_1 = new lib.Символ14();
	this.instance_1.parent = this;
	this.instance_1.setTransform(428.8,274.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.kurs = new lib.Символ2();
	this.kurs.parent = this;
	this.kurs.setTransform(321,152.5);

	this.timeline.addTween(cjs.Tween.get(this.kurs).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(346.7,413.5,584.4,89.4);
// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 30,
	color: "#FFFFFF",
	opacity: 0.00,
	webfonts: {},
	manifest: [
		{src:"images/deathskullandbones.png", id:"deathskullandbones"},
		{src:"images/security1.png", id:"security1"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;