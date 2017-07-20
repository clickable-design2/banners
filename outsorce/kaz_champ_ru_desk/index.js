
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
p.nominalBounds = new cjs.Rectangle(0,0,600,300);
(lib.btn = function() {
	this.initialize(img.btn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,285,107);
(lib.chip = function() {
	this.initialize(img.chip);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,81,82);
(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,370,83);
(lib.money = function() {
	this.initialize(img.money);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,154,91);
(lib.tenge100000 = function() {
	this.initialize(img.tenge100000);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,284,54);
(lib.three = function() {
	this.initialize(img.three);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,124,106);
(lib.tow = function() {
	this.initialize(img.tow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,151,280);
(lib.two = function() {
	this.initialize(img.two);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,94,153);// helper functions:
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
	this.instance = new lib.tow();
	this.instance.parent = this;
	this.instance.setTransform(-151.1,-280.3,2.002,2.002);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ53, new cjs.Rectangle(-151.1,-280.3,302.3,560.6), null);
(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E1292B").s().p("AApBoQgJgEgHgGQgMgOAAgaIAAhsQAAgZAMgOQAHgHAJgDQAJgDAMgBQAYAAANAOQAGAHADAKQADAKABAMIAAAVIggAAIAAgWQAAgMgEgFQgFgEgIAAQgIAAgEAEQgFAFAAAMIAABvQAAAMAFAEQAEAFAIAAQAIAAAFgFQAEgEAAgMIAAgeIAgAAIAAAcQgBAOgDAJQgDAKgGAHQgGAGgKAEQgJADgMAAQgMAAgJgDgAlFBoQgJgEgGgGQgMgOAAgaIAAgaIAeAAIAAAcQABAMAFAFQAEAEAIABQAHAAAFgGQAFgEAAgPIAAgQQAAgPgFgFQgFgGgMgBIgFAAIAAgdIAHAAQAJABAGgGQAFgEAAgMIAAgNQAAgOgFgFQgFgEgHAAQgIAAgEAEQgFAFgBAMIAAAWIgeAAIAAgVQAAgZAMgOQAGgHAJgDQAJgDAMgBQAZAAAMAOQAHAHADAKQADAKAAAMIAAAGQAAAigYAJQAOAFAEAKQAGAMAAAQIAAAQQAAAOgDAJQgDAKgHAHQgFAGgKAEQgJADgNAAQgMAAgJgDgAIzBpIgGgmIgoAAIgGAmIgeAAIAhjRIAxAAIAhDRgAIIAmIAhAAIgQhpgAGwBpIAAhaIgmAAIAABaIghAAIAAjRIAhAAIAABaIAmAAIAAhaIAiAAIAADRgAE5BpIgGgmIgoAAIgGAmIgeAAIAijRIAwAAIAiDRgAEPAmIAgAAIgQhpgACeBpIAAizIgjAAIAAgeIBmAAIAAAeIgjAAIAACzgAgjBpIgbhTIgbBTIgeAAIAlhrIgjhmIAiAAIAZBNIAZhNIAfAAIgjBmIAlBrgAigBpIgGgmIgpAAIgFAmIgfAAIAijRIAwAAIAiDRgAjKAmIAfAAIgQhpgAmNBpIgHgmIgoAAIgGAmIgeAAIAhjRIAxAAIAiDRgAm4AmIAgAAIgQhpgAoIBpIgghTIgKATIAABAIghAAIAAjRIAhAAIAABcIAshcIAgAAIguBeIAuBzg");
	this.shape.setTransform(111.3,0.6);
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ai5CHIAAgYIhVAAIAAAYIghAAIAAg2IALABQAIgBAGgEQAFgDAAgNIAAifIBpAAIAACzIAQAAIAAA2gAjwA7QAAANgDAJIApAAIAAiVIgmAAgAmuBuQgJgEgHgGQgNgOAAgaIAAhsQAAgZANgOQAHgHAJgDQAJgDAMgBQAZAAAMAOQAHAHADAKQADAKAAAMIAABsQAAAOgDAJQgDAKgHAHQgGAGgJAEQgKADgMAAQgMAAgJgDgAmlhCQgFAFAAAMIAABvQAAAMAFAFQAFAEAHABQAIgBAFgEQAEgFAAgMIAAhvQAAgMgEgFQgFgEgIAAQgHAAgFAEgAumBuQgJgEgHgGQgNgOAAgaIAAhsQAAgZANgOQAHgHAJgDQAJgDAMgBQAZAAAMAOQAHAHADAKQADAKAAAMIAABsQAAAOgDAJQgDAKgHAHQgGAGgJAEQgKADgMAAQgMAAgJgDgAudhCQgFAFAAAMIAABvQAAAMAFAFQAFAEAHABQAIgBAFgEQAEgFAAgMIAAhvQAAgMgEgFQgFgEgIAAQgHAAgFAEgALBBvIAAgeIAMABQAIgBAFgEQAGgDAAgNIAAifIBoAAIAADRIghAAIAAizIgmAAIAAB/QAAAQgEAKQgEAKgHAGQgGAGgJACQgIACgKABgAiTBvIAAgeIALABQAIgBAFgEQAGgDAAgNIAAifIBoAAIAADRIghAAIAAizIgmAAIAAB/QAAAQgEAKQgEAKgGAGQgHAGgIACQgJACgJABgAtTBvIAAgeIAMABQAIgBAFgEQAGgDAAgNIAAifIBoAAIAADRIghAAIAAizIgmAAIAAB/QAAAQgEAKQgEAKgHAGQgGAGgJACQgIACgKABgAQYBvIAAiXIgpCXIgiAAIAAjRIAeAAIAAB9IAih9IApAAIAADRgANgBvIAAjRIBaAAIAAAeIg5AAIAAA6IAtAAIAAAeIgtAAIAAA9IA5AAIAAAegAJdBvIAAjRIBaAAIAAAeIg5AAIAAA6IAtAAIAAAeIgtAAIAAA9IA5AAIAAAegAIKBvIAAizIgiAAIAAgeIBmAAIAAAeIgjAAIAACzgAG7BvIAAiXIgpCXIgiAAIAAjRIAeAAIAAB9IAih9IApAAIAADRgAE/BvIgghTIgKASIAABBIghAAIAAhBIgKgSIggBTIgiAAIAuhzIguheIAhAAIArBbIAAhbIAhAAIAABbIAshbIAgAAIguBeIAuBzgABKBvIAAhWIgMAAQgLABgFAFQgFAGAAAPIgBAzIgBAEIgBAEIgiAAIADgMIABguQAAgQAEgMQAFgLANgGQgLgFgGgJQgFgLAAgQIAAgQQAAgZAMgMQAFgGAKgDQAJgDANAAIAyAAIAADRgAAtg/QgEAFAAALIAAAWQAAAMAFAEQAGAGAJgBIANAAIAAhAIgQAAQgJAAgEAFgAn4BvIghhTIgKATIAABAIghAAIAAjRIAhAAIAABcIAshcIAgAAIgtBeIAtBzgAq0BvIAAjRIAhAAIAABPIAPAAQAZAAAMANQANANAAAZIAAAbQAAAZgNAOQgGAGgJADQgJAEgNAAgAqTBRIAPAAQAIAAAEgEQAFgFAAgLIAAgfQAAgMgFgEQgEgEgIAAIgPAAgAwSBvIAAizIgjAAIAAgeIBmAAIAAAeIgiAAIAACzgAPehuIAAgYIBIAAIAAAYg");
	this.shape_1.setTransform(-63.1,0);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ48, new cjs.Rectangle(-170.9,-13.5,341.8,27), null);
(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#B2B2B2","#FFFFFF"],[0,0.173],0,-5,0,5.1).s().p("AgOA1IAAhpIAdAAIAABpg");
	this.shape.setTransform(41.6,0);
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#B2B2B2","#FFFFFF"],[0,0.173],0,-5.2,0,5.2).s().p("AgeA1IAAhpIAdAAIAAAWIAFgWIAbAAIgcBpg");
	this.shape_1.setTransform(35.7,0);
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#B2B2B2","#FFFFFF"],[0,0.173],0,-5.3,0,5.4).s().p("AAZA1IgGgmIgoAAIgFAmIgfAAIARhpIAdAAIgGAnIAfAAIgGgnIAhAAIARBpg");
	this.shape_2.setTransform(25.3,0);
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#B2B2B2","#FFFFFF"],[0,0.173],0,-5,0,5.1).s().p("AguA1IAAhpIBdAAQgDAIgGAGQgGAHgIADQgKADgNAAIgOAAIAABOg");
	this.shape_3.setTransform(13.9,0);
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#B2B2B2","#FFFFFF"],[0,0.173],0,-5,0,5.1).s().p("AgPA1IAAhpIAgAAIAABpg");
	this.shape_4.setTransform(0.7,0);
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#B2B2B2","#FFFFFF"],[0,0.173],0,-5.2,0,5.2).s().p("AgOA1IAAhpIAdAAIAABpg");
	this.shape_5.setTransform(-4.9,0);
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#B2B2B2","#FFFFFF"],[0,0.173],0,-5,0,5.1).s().p("AgeA1IAAhpIAdAAIAAAWIAFgWIAbAAIgcBpg");
	this.shape_6.setTransform(-10.7,0);
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#B2B2B2","#FFFFFF"],[0,0.173],0.1,-5.3,0.1,5.4).s().p("AgPA1IAAhpIAfAAIAABpg");
	this.shape_7.setTransform(-17.9,0);
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#B2B2B2","#FFFFFF"],[0,0.173],0,-4.9,0,4.9).s().p("AgwA1IAAhpIBcAAQAFALAAAQIAAAaQAAAZgNAOQgFAHgKACQgJAEgMAAgAgPAXIAPAAQAIAAADgEQAFgEAAgMIAAgfQAAgKgFgFQgDgEgIAAIgPAAg");
	this.shape_8.setTransform(-26,0);
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#B2B2B2","#FFFFFF"],[0,0.173],0,-5.1,0,5.1).s().p("AgyA1IAAhpIBXAAIABABQAEAEADAGQAGALAAARIAAAQQAAAYgMANQgHAGgJAEQgKADgMAAgAgRAXIASAAQAIAAAFgEQAEgFAAgLIAAgSQAAgPgFgFQgFgFgKAAIgPAAg");
	this.shape_9.setTransform(-38,0);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ44, new cjs.Rectangle(-43.1,-5.3,86.2,10.6), null);
(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AGRBBIAAgkIgKAkIgbAAIAahdIApAAIAABdgAFGBBIAAhdIAeAAIAABdgAEEBBIgIg5IgJA5IgdAAIAPhdIAxAAIAPBdgACbBBQACgEAAgJIAAggQAAgLgEgEQgEgEgIAAIgQAAIAABAIghAAIAAhdIAxAAQAZAAAMANQAMANAAAZIAAAbIgBAPgAgJBBIAAhdIBXAAIAAAdIg3AAIAABAgAg+BBIAAgkIgKAkIgbAAIAZhdIApAAIAABdgAiJBBIAAhdIAdAAIAABdgAjCBBIAAhdIAhAAIAABdgAk0BBIAAhdIAhAAIAABOIAPAAQAZAAAMANIADACgAmuBBIAAhdIAyAAQANAAAJADQAKADAFAGQAGAGADAJQADAIAAAMIAAAIQAAAQgFAKQgEAIgGAEgAmNA4IANAAQAJAAAGgFQAFgEAAgNIAAgMQAAgLgEgFQgEgFgJAAIgQAAgAFXgoIAAgYIBIAAIAAAYg");
	this.shape.setTransform(0,0.1);
	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ43, new cjs.Rectangle(-43.1,-6.4,86.2,13.1), null);
(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.chip();
	this.instance.parent = this;
	this.instance.setTransform(-24.5,-24.8,0.605,0.605);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ42, new cjs.Rectangle(-24.5,-24.8,49,49.6), null);
(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.chip();
	this.instance.parent = this;
	this.instance.setTransform(20.5,-34.9,0.702,0.702,75);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ41, new cjs.Rectangle(-35.2,-34.9,70.4,69.9), null);
(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.chip();
	this.instance.parent = this;
	this.instance.setTransform(0.2,-40,0.695,0.695,45);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ40, new cjs.Rectangle(-40,-40,80.1,80.1), null);
(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.chip();
	this.instance.parent = this;
	this.instance.setTransform(-40.5,-41);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ38, new cjs.Rectangle(-40.5,-41,81,82), null);
(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.chip();
	this.instance.parent = this;
	this.instance.setTransform(-40.5,-41);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ36, new cjs.Rectangle(-40.5,-41,81,82), null);
(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.chip();
	this.instance.parent = this;
	this.instance.setTransform(-40.5,-41);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ30, new cjs.Rectangle(-40.5,-41,81,82), null);
(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Eg27AV4MAAAgrwMBt3AAAMAAAArwg");
	this.shape.setTransform(0,-10);
	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ24, new cjs.Rectangle(-351.5,-150.1,703.2,280.1), null);
(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.tenge100000();
	this.instance.parent = this;
	this.instance.setTransform(-142,-27);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(-142,-27,284,54), null);
(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E3292B").s().p("AgmBnQgIgEgGgHQgFgHgDgKQgDgJAAgNIAAhpQAAgNADgJQADgJAFgIQAGgHAIgEQAKgEALAAQAMAAAIAEQAJAEAFAHQAGAIADAJQADAJAAANIAABpQAAANgDAJQgDAKgGAHQgFAHgJAEQgIAEgMAAQgLAAgKgEgAgghbQgGAEgEAFQgDAFgCAIQgCAHAAAIIAABtQAAAIACAHQACAIADAFQAEAGAGACQAHADAIAAQAJAAAGgDQAFgCAEgGQAEgFACgIQABgHAAgIIAAhtQAAgIgBgHQgCgIgEgFQgEgFgFgEQgGgCgJAAQgIAAgHACgACmBpIAAi6IgsC5IgPAAIgsi4IAAC5IgMAAIAAjRIAUAAIAsC4IAri4IAUAAIAADRgAixBpIAAjRIAuAAQALAAAJAEQAJAEAGAGQAGAIADAJQACAJAAAMIAABpQAAAMgCAJQgDAKgGAHQgGAGgJAEQgJAEgLAAgAikBdIAhAAQAIAAAGgEQAHgCADgFQAFgFABgIQACgHAAgJIAAhpQAAgJgCgHQgBgHgFgGQgDgFgHgCQgGgEgIAAIghAAg");
	this.shape.setTransform(161.9,0);
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("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");
	this.shape_1.setTransform(-18.8,0);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(-179.8,-10.7,359.6,21.5), null);
(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E1292B").s().p("AglBnQgIgEgHgIQgFgGgDgKQgDgJAAgMIAAhqQAAgMADgKQADgKAFgGQAHgIAIgEQAJgEALAAQAMAAAJAEQAIAEAGAIQAFAGADAKQADAKAAAMIAABqQAAAMgDAJQgDAKgFAGQgGAIgIAEQgJAEgMAAQgLAAgJgEgAgfhaQgGADgFAFQgDAFgCAHQgBAIAAAJIAABsQAAAJABAHQACAHADAFQAFAFAGADQAGADAIAAQAJAAAHgDQAEgDAEgFQAFgFACgHQABgHAAgJIAAhsQAAgJgBgIQgCgHgFgFQgEgFgEgDQgHgDgJAAQgIAAgGADgACiBpIAAi5IgsC4IgNAAIgsi4IAAC5IgNAAIAAjRIAUAAIAsC5IAri5IAVAAIAADRgAiuBpIAAjRIAuAAQALAAAJAEQAJADAGAIQAFAGAEAKQACAKAAALIAABpQAAALgCAKQgEAKgFAHQgGAGgJAEQgJAEgLAAgAihBcIAhAAQAIAAAGgCQAGgDAFgFQADgFACgHQACgIAAgIIAAhqQAAgKgCgGQgCgIgDgEQgFgGgGgCQgGgDgIAAIghAAg");
	this.shape.setTransform(-116.4,-1);
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("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");
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(-192.5,-11.8,385.2,23.7), null);
(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-110,-25,0.59,0.59);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(-110,-25,218.4,49), null);
(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.btn();
	this.instance.parent = this;
	this.instance.setTransform(-142.5,-53.5);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(-142.5,-53.5,285,107), null);
(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnUM9IM46vIEKCAIs4avgAptLzIM46vIBxA2Is4avg");
	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(-62.2,-95.7,124.4,191.5), null);
(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.money();
	this.instance.parent = this;
	this.instance.setTransform(-82,-28,1.063,1.063);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(-82,-28,163.8,96.8), null);
(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.money();
	this.instance.parent = this;
	this.instance.setTransform(-66.5,-67.9,1.063,1.063,15);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(-91.6,-67.9,183.3,135.9), null);
(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.money();
	this.instance.parent = this;
	this.instance.setTransform(-91.6,-25.5,1.063,1.063,-15);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(-91.6,-67.9,183.3,135.9), null);
(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.money();
	this.instance.parent = this;
	this.instance.setTransform(-77,-78.6,1.231,1.231,15);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(-106,-78.6,212.2,157.3), null);
(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.money();
	this.instance.parent = this;
	this.instance.setTransform(-91.6,4.4,1.063,1.063,-15);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(-91.6,-38,183.3,135.9), null);
(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(-405,-235,1.294,1.294);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(-405,-235,776.2,388.1), null);
(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.Символ19();
	this.instance.parent = this;
	this.instance.setTransform(-0.1,2.1,0.853,0.853,0,0,0,-0.1,0.1);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ49, new cjs.Rectangle(-164.3,-8,328.7,20.2), null);
(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.Символ38();
	this.instance.parent = this;
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:14,x:12.2,y:24.7},16,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:30,x:26,y:52.5},18,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:14.5,x:12.7,y:25.5},18,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:0,x:0,y:0},17,cjs.Ease.get(1)).wait(1));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.5,-41,81,82);
(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.Символ36();
	this.instance.parent = this;
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:14.8,y:20.2},34,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:30,y:41},35,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:14.8,x:0.1,y:20.5},35,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:0,x:0,y:0},35,cjs.Ease.get(1)).wait(1));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.5,-41,81,82);
(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.Символ42();
	this.instance.parent = this;
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ34, new cjs.Rectangle(-24.5,-24.8,49,49.6), null);
(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.Символ40();
	this.instance.parent = this;
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ32, new cjs.Rectangle(-40,-40,80.1,80.1), null);
(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.Символ30();
	this.instance.parent = this;
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:26.8,x:-22.8,y:33.7},26,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:60,x:-51,y:75},32,cjs.Ease.get(1)).to({regX:0.1,regY:0.1,scaleX:1,scaleY:1,rotation:30.4,x:-25.9,y:38.3},30,cjs.Ease.get(-1)).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:0,y:0},31,cjs.Ease.get(1)).wait(1));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.5,-41,81,82);
(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.Символ41();
	this.instance.parent = this;
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ28, new cjs.Rectangle(-35.2,-34.9,70.4,69.9), null);
(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// tow.png
	this.instance = new lib.Символ53();
	this.instance.parent = this;
	this.instance.setTransform(844.2,0.3);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	// two.png
	this.instance_1 = new lib.two();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1131,-247,2.617,2.617);
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));
	// three.png
	this.instance_2 = new lib.three();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-1565,-136,2.439,2.439);
	this.instance_3 = new lib.three();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1207,-235,3.216,3.216);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ26, new cjs.Rectangle(-1565,-280,3170.8,560.6), null);
(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgPBoQgJgEgHgGQgNgOAAgZIAAhtQAAgZANgOQAHgGAJgEQAJgDALAAQAYAAANANQAHAHADAKQAEAJAAANIAABtQAAANgEAJQgDAKgHAHQgGAGgJAEQgKADgMAAQgLAAgJgDgAgGhIQgEAFgBALIAABxQABALAEAFQAFAEAGAAQAIAAAFgEQAEgFABgLIAAhxQgBgLgEgFQgFgEgIAAQgGAAgFAEgAiFBoQgKgEgGgGQgOgOAAgZIAAhtQAAgZAOgOQAGgGAKgEQAJgDAMAAQAYAAANANQAGAHADAKQAEAJAAANIAABtQAAANgEAJQgDAKgGAHQgHAGgJAEQgJADgMAAQgMAAgJgDgAh8hIQgFAFAAALIAABxQAAALAFAFQAEAEAIAAQAIAAAEgEQAFgFAAgLIAAhxQAAgLgFgFQgEgEgIAAQgIAAgEAEgAj8BoQgKgEgFgGQgOgOAAgZIAAhtQAAgZAOgOQAFgGAKgEQAKgDAMAAQAYAAANANQAGAHADAKQAEAJgBANIAABtQABANgEAJQgDAKgGAHQgHAGgJAEQgJADgMAAQgMAAgKgDgAjzhIQgEAFAAALIAABxQAAALAEAFQAEAEAJAAQAHAAAFgEQAFgFAAgLIAAhxQAAgLgFgFQgFgEgHAAQgJAAgEAEgAmhBoQgJgEgHgGQgNgOAAgZIAAhtQAAgZANgOQAHgGAJgEQAKgDALAAQAZAAANANQAGAHADAKQADAJAAANIAABtQAAANgDAJQgDAKgGAHQgHAGgJAEQgJADgNAAQgLAAgKgDgAmYhIQgFAFABALIAABxQgBALAFAFQAFAEAHAAQAIAAAFgEQAFgFgBgLIAAhxQABgLgFgFQgFgEgIAAQgHAAgFAEgAoXBoQgKgEgGgGQgNgOAAgZIAAhtQAAgZANgOQAGgGAKgEQAJgDAMAAQAYAAANANQAGAHADAKQAEAJAAANIAABtQAAANgEAJQgDAKgGAHQgHAGgIAEQgKADgMAAQgMAAgJgDgAoOhIQgFAFAAALIAABxQAAALAFAFQAEAEAIAAQAHAAAGgEQAEgFAAgLIAAhxQAAgLgEgFQgGgEgHAAQgIAAgEAEgAI7BpIAAjRIBaAAIAAAeIg5AAIAAA7IAtAAIAAAdIgtAAIAAA9IA5AAIAAAegAHVBpIAAjRIBXAAIAAAeIg3AAIAACzgAGbBpIAAhaIgmAAIAABaIghAAIAAjRIAhAAIAABaIAmAAIAAhaIAiAAIAADRgADnBpIAAjRIBaAAIAAAeIg5AAIAAA7IAtAAIAAAdIgtAAIAAA9IA5AAIAAAegACUBpIAAizIgiAAIAAgeIBmAAIAAAeIgiAAIAACzgAp6BpIAAigIgaAAIAAgWQAKAAAGgCQAHgDADgDQAEgEADgFIADgKIAXAAIAADRg");
	// Слой 2
	this.instance = new lib.Символ13();
	this.instance.parent = this;
	this.instance.setTransform(-100.1,-14.4);
	var maskedShapeInstanceList = [this.instance];
	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}
	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:119.3},40).wait(31));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66,-10.7,28.1,21.5);
(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 2
	this.instance = new lib.Символ23();
	this.instance.parent = this;
	this.instance.setTransform(-0.2,-1.4,2.072,2.072);
	this.instance.alpha = 0.762;
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	// Слой 1
	this.instance_1 = new lib.Символ22();
	this.instance_1.parent = this;
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ21, new cjs.Rectangle(-336.4,-229.6,478.5,396.6), null);
(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Символ 44
	this.instance = new lib.Символ44();
	this.instance.parent = this;
	this.instance.setTransform(0,7);
	this.instance.alpha = 0;
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleY:1.47,skewX:47.1,x:-34.4},0).to({regX:-0.1,scaleY:1.17,skewX:-31.1,x:3.1,alpha:1},6).to({regX:0,scaleY:1,skewX:0,x:0},2).wait(30).to({regX:-0.1,scaleY:1.17,skewX:-31.1,x:3.1},2).to({regX:0,scaleY:1.47,skewX:47.1,x:-34.4,alpha:0},6).wait(13));
	// Символ 43
	this.instance_1 = new lib.Символ43();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-5.3);
	this.instance_1.alpha = 0;
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleY:1.31,skewX:-40.1,x:32.5},0).to({regX:-0.1,scaleY:1.05,skewX:-17.8,x:-2,alpha:1},6).to({regX:0,scaleY:1,skewX:0,x:0},2).wait(30).to({regX:-0.1,scaleY:1.05,skewX:-17.8,x:-2},2).to({regX:0,scaleY:1.31,skewX:-40.1,x:32.5,alpha:0},6).wait(13));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.1,-11.7,86.2,24);
(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1 - копия
	this.instance = new lib.Символ15();
	this.instance.parent = this;
	this.instance.alpha = 0;
	this.instance.compositeOperation = "lighter";
	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.148},4,cjs.Ease.get(-1)).to({alpha:0.34},5,cjs.Ease.get(1)).to({alpha:0.172},5,cjs.Ease.get(-1)).to({alpha:0},5,cjs.Ease.get(1)).wait(1));
	// Слой 1
	this.instance_1 = new lib.Символ15();
	this.instance_1.parent = this;
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-142.5,-53.5,285,107);
(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AyTEcIAAo3MAknAAAIAAI3g");
	// Слой 2
	this.instance = new lib.Символ13();
	this.instance.parent = this;
	this.instance.setTransform(-169.8,-2.6);
	var maskedShapeInstanceList = [this.instance];
	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}
	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:162.2},39).wait(31));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117.1,-28.4,9.5,56.8);
(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 2
	this.instance = new lib.Символ12();
	this.instance.parent = this;
	this.instance.setTransform(0.2,0.2);
	this.instance.alpha = 0.539;
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	// Слой 1
	this.instance_1 = new lib.Символ14();
	this.instance_1.parent = this;
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003366").s().p("AkwAkIAAhHIJhAAIAABHg");
	this.shape.setTransform(6.6,-0.2);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_1}]}).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(-231.9,-98.2,374.4,191.5), null);
(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// money.png
	this.instance = new lib.Символ4();
	this.instance.parent = this;
	this.instance.setTransform(494.6,7.3);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13).to({y:-4.7},13,cjs.Ease.get(1)).to({y:7.3},15,cjs.Ease.get(1)).wait(2));
	// money.png
	this.instance_1 = new lib.Символ5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(368.9,18);
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({y:6},13,cjs.Ease.get(1)).to({y:18},15,cjs.Ease.get(1)).wait(5));
	// money.png
	this.instance_2 = new lib.Символ6();
	this.instance_2.parent = this;
	this.instance_2.setTransform(232.9,7.4);
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({y:-4.6},13,cjs.Ease.get(1)).to({y:7.4},15,cjs.Ease.get(1)).wait(8));
	// money.png
	this.instance_3 = new lib.Символ7();
	this.instance_3.parent = this;
	this.instance_3.setTransform(113.8,18);
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({y:6},13,cjs.Ease.get(1)).to({y:18},15,cjs.Ease.get(1)).wait(11));
	// money.png
	this.instance_4 = new lib.Символ8();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-2.1,-1.6);
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({y:-13.6},13,cjs.Ease.get(1)).to({y:-1.6},15,cjs.Ease.get(1)).wait(14));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.1,-60.6,670.3,165.8);
(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.parent = this;
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.05,scaleY:1.05},24,cjs.Ease.get(-1)).to({scaleX:1.1,scaleY:1.1},25,cjs.Ease.get(1)).to({scaleX:1.05,scaleY:1.05},25,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},25,cjs.Ease.get(1)).wait(1));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-405,-235,776.2,388.1);
(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.money1 = new lib.Символ3();
	this.money1.parent = this;
	this.money1.setTransform(-614.2,-11.5,1,1,0,0,0,245,6.5);
	this.money1_1 = new lib.Символ3();
	this.money1_1.parent = this;
	this.money1_1.setTransform(598.1,-11.5,1,1,0,0,0,245,6.5);
	this.money1_2 = new lib.Символ3();
	this.money1_2.parent = this;
	this.money1_2.setTransform(-6.1,-11.5,1,1,0,0,0,245,6.5);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.money1_2},{t:this.money1_1},{t:this.money1}]}).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ51, new cjs.Rectangle(-943.3,-78.6,1882.6,165.8), null);
(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Символ 2
	this.instance = new lib.Символ2();
	this.instance.parent = this;
	this.instance.setTransform(-8.2,66.1,3.211,3.211,0,0,0,-0.1,0.2);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ50, new cjs.Rectangle(-1308.3,-689.1,2492.3,1246.2), null);
(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.Символ21();
	this.instance.parent = this;
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.95,scaleY:0.95},5,cjs.Ease.get(-1)).to({scaleX:0.88,scaleY:0.88},7,cjs.Ease.get(1)).to({scaleX:0.93,scaleY:0.93},5,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},7,cjs.Ease.get(1)).wait(1));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-336.4,-229.6,478.5,396.6);
(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.Символ34();
	this.instance.parent = this;
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:10.5,x:28.1,y:14.1},22,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:22.5,x:60,y:30},25,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:11,x:29.3,y:14.7},24,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:0,x:0,y:0},23,cjs.Ease.get(1)).wait(1));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.5,-24.8,49,49.6);
(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.Символ32();
	this.instance.parent = this;
	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:15,y:-9.1},22,cjs.Ease.get(-1)).to({rotation:60,y:-20},26,cjs.Ease.get(1)).to({rotation:15,y:-10.3},24,cjs.Ease.get(-1)).to({rotation:0,y:0},26,cjs.Ease.get(1)).wait(1));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40,-40,80.1,80.1);
(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.Символ28();
	this.instance.parent = this;
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:-28.8,y:7.7},14,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:-60,x:0.1,y:16},15,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:-29.9,x:0,y:8},15,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:0,y:0},15,cjs.Ease.get(1)).wait(1));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.2,-34.9,70.4,69.9);
(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.Символ29();
	this.instance.parent = this;
	this.instance.setTransform(914.5,-141.6,1.387,1.387);
	this.instance_1 = new lib.Символ29();
	this.instance_1.parent = this;
	this.instance_1.setTransform(460.4,-141.6,1.387,1.387);
	this.instance_2 = new lib.Символ31();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1109.7,-173.7,0.89,0.89,0,0,0,-0.1,-0.1);
	this.instance_3 = new lib.Символ33();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1436.3,-50,1.387,1.387);
	this.instance_4 = new lib.Символ35();
	this.instance_4.parent = this;
	this.instance_4.setTransform(946,62.1,1.387,1.387);
	this.instance_5 = new lib.Символ35();
	this.instance_5.parent = this;
	this.instance_5.setTransform(293.3,-28.9,1.387,1.387);
	this.instance_6 = new lib.Символ37();
	this.instance_6.parent = this;
	this.instance_6.setTransform(695,-6.4,1.387,1.387);
	this.instance_7 = new lib.Символ37();
	this.instance_7.parent = this;
	this.instance_7.setTransform(338.3,153.4,1.387,1.387);
	this.instance_8 = new lib.Символ39();
	this.instance_8.parent = this;
	this.instance_8.setTransform(1283.1,107.3,1.387,1.387);
	this.instance_9 = new lib.Символ29();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-836.4,-141.6,1.387,1.387);
	this.instance_10 = new lib.Символ29();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-1290.5,-141.6,1.387,1.387);
	this.instance_11 = new lib.Символ31();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-641.3,-173.7,0.89,0.89,0,0,0,-0.1,-0.1);
	this.instance_12 = new lib.Символ33();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-454.5,-105.1,1.387,1.387);
	this.instance_13 = new lib.Символ35();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-805,62.1,1.387,1.387);
	this.instance_14 = new lib.Символ35();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-1457.7,-28.9,1.387,1.387);
	this.instance_15 = new lib.Символ37();
	this.instance_15.parent = this;
	this.instance_15.setTransform(-1055.9,-6.4,1.387,1.387);
	this.instance_16 = new lib.Символ37();
	this.instance_16.parent = this;
	this.instance_16.setTransform(-1412.7,153.4,1.387,1.387);
	this.instance_17 = new lib.Символ39();
	this.instance_17.parent = this;
	this.instance_17.setTransform(-569.5,65,1.387,1.387);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ25, new cjs.Rectangle(-1491.7,-210.1,2983.4,420.4), null);
(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Символ 21
	this.instance = new lib.Символ45();
	this.instance.parent = this;
	this.instance.setTransform(-182.2,-95.4,1,1,0,0,0,-97.2,-31.4);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	// Символ 20
	this.instance_1 = new lib.Символ20();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-84.5,-26.6,0.765,0.765,0,0,0,-0.1,-0.1);
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));
	// Символ 18
	this.instance_2 = new lib.Символ18();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-84.7,-133.5,3.193,3.193,0,0,0,-0.1,-0.1);
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(-421.4,-293.6,478.5,396.6), null);
(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.parent = this;
	this.instance.setTransform(0,5);
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.07,scaleY:1.07},4,cjs.Ease.get(-1)).to({scaleX:1.15,scaleY:1.15},5,cjs.Ease.get(1)).to({scaleX:1.07,scaleY:1.07},5,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},5,cjs.Ease.get(1)).wait(1));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-231.9,-93.2,374.4,191.5);
(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Символ 45
	this.instance = new lib.Символ45();
	this.instance.parent = this;
	this.instance.setTransform(-111,-35.9,1.218,1.218,0,0,0,-97.2,-31.4);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30));
	// Символ 49
	this.instance_1 = new lib.Символ49();
	this.instance_1.parent = this;
	this.instance_1.setTransform(6.7,-57.4,1.019,1.019,0,0,0,0,-0.1);
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:-0.2,scaleX:1.13,scaleY:1.13,y:-57.5},6,cjs.Ease.get(-1)).to({regX:-0.1,regY:-0.1,scaleX:1.27,scaleY:1.27,x:6.5,y:-57.4},8,cjs.Ease.get(1)).to({regX:0,scaleX:1.16,scaleY:1.16,x:6.7},7,cjs.Ease.get(-1)).to({scaleX:1.02,scaleY:1.02},8,cjs.Ease.get(1)).wait(1));
	// Символ 48
	this.instance_2 = new lib.Символ48();
	this.instance_2.parent = this;
	this.instance_2.setTransform(6.6,-97.4,0.979,0.979);
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:0.91,scaleY:0.91},6,cjs.Ease.get(-1)).to({regX:0.1,regY:-0.1,scaleX:0.81,scaleY:0.81,x:6.7,y:-97.5},8,cjs.Ease.get(1)).to({scaleX:0.89,scaleY:0.89},7,cjs.Ease.get(-1)).to({regX:0,regY:0,scaleX:0.98,scaleY:0.98,x:6.6,y:-97.4},8,cjs.Ease.get(1)).wait(1));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-402.6,-277.4,583,483.2);
(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 2
	this.instance = new lib.Символ47();
	this.instance.parent = this;
	this.instance.setTransform(-8.9,43.5);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({x:-88.9,y:37.5,alpha:0},7).wait(46).to({x:-8.9,y:43.5,alpha:1},7).wait(1));
	// Слой 1
	this.instance_1 = new lib.Символ17();
	this.instance_1.parent = this;
	this.instance_1.setTransform(81.1,-1,1,1,0,0,0,-85,-95.5);
	this.instance_1.alpha = 0;
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(59).to({x:0,alpha:1},7).wait(46).to({x:81.1,alpha:0},7).wait(1));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-411.5,-234,634.6,483.2);
(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 2
	this.instance = new lib.Символ24();
	this.instance.parent = this;
	this.instance.setTransform(671.8,76.4,5.676,1.858,0,0,0,0.1,0);
	this.instance.alpha = 0.422;
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	// chip.png - копия
	this.instance_1 = new lib.Символ25();
	this.instance_1.parent = this;
	this.instance_1.setTransform(630,54.7);
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));
	// Слой 1
	this.instance_2 = new lib.Символ26();
	this.instance_2.parent = this;
	this.instance_2.setTransform(667.5,140);
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ27, new cjs.Rectangle(-1324.2,-202.5,3991.2,623.2), null);
(lib.Символ52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.main = new lib.Символ46();
	this.main.parent = this;
	this.main.setTransform(-18.1,5.5,0.72,0.72,0,0,0,-1,8.9);
	this.timeline.addTween(cjs.Tween.get(this.main).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ52, new cjs.Rectangle(-313.6,-169.4,456.7,347.9), null);
// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
				window._setCanvasSize = function() {
					var stageSize = getWindowSize();
					var w = stageSize.iw;
					_this.bg.x = w * 0.5;
					_this.bg.y = 125;
					_this.money.x = w * 0.5;
					_this.money.y = 250;
					_this.btn.x = w * 0.5;
					_this.btn.y = 195;
					_this.main.x = w * 0.5;
					_this.main.y = 90;
					_this.fon.x = w * 0.5;
					_this.fon.y = 125;
					_this.logo.x = w * 0.5;
					_this.logo.y = 500;
					if(w > 950){
						_this.bg.x = w * 0.5;
						_this.bg.y = 125;
						_this.money.x = w * 0.5;
						_this.money.y = 250;
						_this.main.x = w * 0.5;
						_this.main.y = 125;
						_this.fon.x = w * 0.5;
						_this.fon.y = 125;
						_this.logo.x = w * 0.15;
						_this.logo.y = 125;
						_this.btn.x = w * 0.85;
						_this.btn.y = 125;
					}
				}
				window.onresize=function(){_setCanvasSize();}
				window.onresize();
				document.addEventListener("DOMContentLoaded", function(){ _setCanvasSize()});
	}
	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));
	// Слой 3
	this.btn = new lib.Символ10();
	this.btn.parent = this;
	this.btn.setTransform(300.1,195.5,0.984,0.984);
	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));
	// Слой 4
	this.logo = new lib.Символ16();
	this.logo.parent = this;
	this.logo.setTransform(57.5,19.5);
	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));
	// Слой 5
	this.main = new lib.Символ52();
	this.main.parent = this;
	this.main.setTransform(300.1,91.1,1.142,1.142,0,0,0,-18.1,0.6);
	this.timeline.addTween(cjs.Tween.get(this.main).wait(1));
	// Слой 2
	this.money = new lib.Символ51();
	this.money.parent = this;
	this.money.setTransform(306.2,212.5,0.578,0.578,0,0,0,0.1,0);
	this.timeline.addTween(cjs.Tween.get(this.money).wait(1));
	// Слой 8
	this.fon = new lib.Символ27();
	this.fon.parent = this;
	this.fon.setTransform(277.4,124.7,0.685,0.685,0,0,0,630.8,64.8);
	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));
	// Слой 6
	this.bg = new lib.Символ50();
	this.bg.parent = this;
	this.bg.setTransform(299.2,114,1.134,1.134,0,0,0,-62.2,-66);
	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-813.5,-467.5,2825.4,1412.7);
// library properties:
lib.properties = {
	width: 600,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/bg.jpg", id:"bg"},
		{src:"images/btn.png", id:"btn"},
		{src:"images/chip.png", id:"chip"},
		{src:"images/logo.png", id:"logo"},
		{src:"images/money.png", id:"money"},
		{src:"images/tenge100000.png", id:"tenge100000"},
		{src:"images/three.png", id:"three"},
		{src:"images/tow.png", id:"tow"},
		{src:"images/two.png", id:"two"}
	],
	preloads: []
};
})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;
