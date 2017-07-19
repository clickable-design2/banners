
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
p.nominalBounds = new cjs.Rectangle(0,0,1920,250);
(lib.btn = function() {
	this.initialize(img.btn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,392,102);
(lib.chip = function() {
	this.initialize(img.chip);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,81,82);
(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,306,69);
(lib.tow = function() {
	this.initialize(img.tow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,194,250);// helper functions:
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
(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(-960,-125);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(-960,-125,1920,250), null);
(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.chip();
	this.instance.parent = this;
	this.instance.setTransform(-40.5,-41);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(-40.5,-41,81,82), null);
(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.btn();
	this.instance.parent = this;
	this.instance.setTransform(-242,-63,1.235,1.235);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(-242,-63,484.1,126), null);
(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DE0715").s().p("Ah2EOQgcgGgZgKQgYgJgWgPQgWgNgTgSQgSgSgPgWQgOgVgKgaQgMgZgFgcQgFgdAAgeQAAgcAFgaQAFgdAKgXQAKgaAOgVQAOgWATgTQASgTAXgOQAVgPAagKQAZgKAcgFQAcgGAfgBQAdAAAcAGQAaAFAZAJQAZAKAWANQAXAPATATQATARANAVQAQAWAKAZQAKAZAFAcQAFAdAAAeQAAAdgFAcQgFAcgKAZQgKAZgQAWQgPAVgRAUQgTARgXAOQgWAPgZAJQgZAMgaADQgcAGgdAAQgeAAgcgEgAiDitQghAOgYAaQgYAZgMAhQgOAjAAAoQAAAnAOAjQAMAhAaAaQAYAZAfAOQAhAPAmABQApgBAhgPQAfgOAZgZQAWgaANghQALgjAAgnQAAgogMgjQgOghgYgZQgagagfgOQgggOglABQgmgBghAOgAtbEJIAAoSICcgCQAoAAAiAGQAiAFAcAKQAdALAXAOQAXAPASARQASASANAVQAOAWAHAXQAJAYAEAZIAEA0QAAAbgEAaQgFAbgJAYQgKAZgOAWQgPAVgTAUQgTASgYAOQgYAPgcALQgdAKghAGQghAFgmAAgAr+ixIAAFkIA8ABQAwAAAmgNQAmgNAagZQAagYANgiQAOgiAAgpQAAgpgOghQgNgfgagXQgagWglgNQgmgNgwAAgAL/EJIAAl/IinDsIgOAAIiqjpIAAF8IhdAAIAAoSIBeAAIC1D5ICuj5IBYAAIAAISg");
	this.shape.setTransform(190.4,29.9);
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("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");
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(-276.5,-57.4,553,114.8), null);
(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(-175.3,-44.3,350.6,88.7), null);
(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.tow();
	this.instance.parent = this;
	this.instance.setTransform(-97,-125);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(-97,-125,194,250), null);
(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-153,-34.5);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(-153,-34.5,306,69), null);
(lib.Анимация2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF275E","#FFEE5A"],[0,1],0,-30.2,0,30.2).s().p("AgsErQgXgGgUgLQgSgKgQgPQgPgQgNgUQgRgbgUhFQgIgngFhWQAAhEANg4QAHglAdg7QAMgUAQgPQAPgQATgKQAUgLAVgGQAXgGAYAAQAaAAAWAGQAWAGATALQATAKAPAQQAQAPALAUQAdA7AIAlQANA4AABEQAABFgNA4QgUBFgPAbQgNAUgOAQQgQAPgSAKQgUALgVAGQgXAGgZAAQgZAAgVgGgAgpjHQgTANgLAbQgLAZgGApQgGAoAAA1QAAA2AGApQAHAoALAbQANAZASANQARAOAYAAQAZAAATgNQASgMAKgbQALgaAGgpQAEgoAAg3QAAg2gEgoQgGgpgLgaQgLgZgTgNQgSgNgaAAQgXAAgSANg");
	this.shape.setTransform(-62.7,0);
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FF275E","#FFEE5A"],[0,1],0,-30.7,0,30.7).s().p("AgsErQgXgGgUgLQgSgKgQgPQgPgQgNgUQgRgbgUhFQgIgngFhWQAAhEANg4QAHglAdg7QAMgUAQgPQAPgQATgKQAUgLAVgGQAXgGAYAAQAaAAAWAGQAWAGATALQATAKAPAQQAQAPALAUQAdA7AIAlQANA4AABEQAABFgNA4QgUBFgPAbQgNAUgOAQQgQAPgSAKQgUALgVAGQgXAGgZAAQgZAAgVgGgAgpjHQgTANgLAbQgLAZgGApQgGAoAAA1QAAA2AGApQAHAoALAbQANAZASANQASAOAXAAQAZAAATgNQASgMAKgbQALgaAGgpQAEgoAAg3QAAg2gEgoQgGgpgLgaQgLgZgTgNQgSgNgaAAQgXAAgSANg");
	this.shape_1.setTransform(-109.8,0);
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FF275E","#FFEE5A"],[0,1],0,-30.7,0,30.7).s().p("AgsErQgXgGgUgLQgTgKgPgPQgPgQgNgUQgRgbgUhFQgIgngFhWQAAhEANg4QAHglAcg7QANgUAPgPQAQgQASgKQAVgLAVgGQAXgGAYAAQAZAAAXAGQAVAGAUALQASAKARAQQAPAPALAUQAdA7AIAlQANA4AABEQAABFgNA4QgUBFgPAbQgNAUgOAQQgQAPgTAKQgTALgWAGQgWAGgaAAQgYAAgVgGgAgqjHQgSANgLAbQgMAZgGApQgFAoAAA1QAAA2AFApQAIAoALAbQANAZATANQAQAOAXAAQAaAAASgNQASgMAKgbQAMgaAFgpQAFgoAAg3QAAg2gFgoQgFgpgMgaQgKgZgTgNQgTgNgZAAQgXAAgTANg");
	this.shape_2.setTransform(-174.8,0);
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FF275E","#FFEE5A"],[0,1],0,-30.7,0,30.7).s().p("AgtErQgWgGgUgLQgSgKgQgPQgPgQgNgUQgRgbgUhFQgIgngFhWQAAhEANg4QAHglAcg7QANgUAPgPQARgQARgKQAVgLAVgGQAXgGAYAAQAZAAAXAGQAWAGATALQASAKARAQQAPAPALAUQAcA7AJAlQANA4AABEQAABFgNA4QgUBFgQAbQgMAUgPAQQgPAPgTAKQgTALgVAGQgXAGgaAAQgYAAgWgGgAgqjHQgSANgMAbQgKAZgHApQgFAoAAA1QAAA2AFApQAIAoALAbQANAZATANQARAOAWAAQAaAAASgNQATgMAJgbQAMgaAFgpQAFgoAAg3QAAg2gFgoQgFgpgMgaQgKgZgTgNQgTgNgZAAQgXAAgTANg");
	this.shape_3.setTransform(-221.8,0);
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FF275E","#FFEE5A"],[0,1],0.1,-29.2,0.1,29.3).s().p("AAMEqIAAnJIhHA4Ig0hRICYhxIBHAAIAAJTg");
	this.shape_4.setTransform(-265.3,-0.1);
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FF275E","#FFEE5A"],[0,1],-0.1,-30.7,-0.1,30.7).s().p("AiwEqIAApTIFYAAIAABiIjuAAIAACUIDVAAIAABgIjVAAIAACbID2AAIAABig");
	this.shape_5.setTransform(258.9,0);
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#FF275E","#FFEE5A"],[0,1],2,-31.6,2,31).s().p("AinEqIAApTIFPAAIAABiIjmAAIAAHxg");
	this.shape_6.setTransform(215,0);
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#FF275E","#FFEE5A"],[0,1],-0.1,-30.2,-0.1,30.2).s().p("ACJEqIAAj+IkPAAIAAD+IhpAAIAApTIBpAAIAAD0IEPAAIAAj0IBnAAIAAJTg");
	this.shape_7.setTransform(157.7,0);
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#FF275E","#FFEE5A"],[0,1],-0.1,-30.7,-0.1,30.7).s().p("AivEqIAApTIFXAAIAABiIjuAAIAACUIDUAAIAABgIjUAAIAACbID2AAIAABig");
	this.shape_8.setTransform(102.5,0);
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#FF275E","#FFEE5A"],[0,1],0,-29.6,0,29.7).s().p("AgzEqIAAnxIjBAAIAAhiIHpAAIAABiIjBAAIAAHxg");
	this.shape_9.setTransform(51.2,0);
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#FF275E","#FFEE5A"],[0,1],0,-30.7,0,30.7).s().p("AgsErQgXgGgUgLQgSgKgQgPQgPgQgNgUQgRgbgUhFQgIgngFhWQAAhEANg4QAHglAdg7QAMgUAQgPQAPgQATgKQAUgLAVgGQAXgGAYAAQAaAAAWAGQAWAGATALQATAKAPAQQAQAPALAUQAdA7AIAlQANA4AABEQAABFgNA4QgUBFgPAbQgNAUgOAQQgQAPgSAKQgUALgVAGQgXAGgZAAQgZAAgVgGgAgpjHQgTANgLAbQgLAZgGApQgGAoAAA1QAAA2AGApQAHAoALAbQANAZASANQARAOAYAAQAZAAASgNQATgMAKgbQALgaAGgpQAEgoAAg3QAAg2gEgoQgGgpgLgaQgMgZgSgNQgSgNgaAAQgXAAgSANg");
	this.shape_10.setTransform(-15.7,0);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-276.5,-30.5,553.1,61);
(lib.Анимация1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF275E","#FFEE5A"],[0,1],0,-30.7,0,30.7).s().p("AgsErQgXgGgUgLQgSgKgQgPQgPgQgNgUQgRgbgUhFQgIgngFhWQAAhEANg4QAHglAdg7QAMgUAQgPQAPgQATgKQAUgLAVgGQAXgGAYAAQAaAAAWAGQAWAGATALQATAKAPAQQAQAPALAUQAdA7AIAlQANA4AABEQAABFgNA4QgUBFgPAbQgNAUgOAQQgQAPgSAKQgUALgVAGQgXAGgZAAQgZAAgVgGgAgpjHQgTANgLAbQgLAZgGApQgGAoAAA1QAAA2AGApQAHAoALAbQANAZASANQASAOAXAAQAZAAATgNQASgMAKgbQALgaAGgpQAEgoAAg3QAAg2gEgoQgGgpgLgaQgLgZgTgNQgSgNgaAAQgXAAgSANg");
	this.shape.setTransform(-109.8,0);
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FF275E","#FFEE5A"],[0,1],0,-30.2,0,30.2).s().p("AgsErQgXgGgUgLQgSgKgQgPQgPgQgNgUQgRgbgUhFQgIgngFhWQAAhEANg4QAHglAdg7QAMgUAQgPQAPgQATgKQAUgLAVgGQAXgGAYAAQAaAAAWAGQAWAGATALQATAKAPAQQAQAPALAUQAdA7AIAlQANA4AABEQAABFgNA4QgUBFgPAbQgNAUgOAQQgQAPgSAKQgUALgVAGQgXAGgZAAQgZAAgVgGgAgpjHQgTANgLAbQgLAZgGApQgGAoAAA1QAAA2AGApQAHAoALAbQANAZASANQARAOAYAAQAZAAATgNQASgMAKgbQALgaAGgpQAEgoAAg3QAAg2gEgoQgGgpgLgaQgLgZgTgNQgSgNgaAAQgXAAgSANg");
	this.shape_1.setTransform(-62.7,0);
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FF275E","#FFEE5A"],[0,1],0.1,-29.2,0.1,29.3).s().p("AAMEqIAAnJIhHA4Ig0hRICYhxIBHAAIAAJTg");
	this.shape_2.setTransform(-265.3,-0.1);
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FF275E","#FFEE5A"],[0,1],0,-30.7,0,30.7).s().p("AgsErQgXgGgUgLQgTgKgPgPQgPgQgNgUQgRgbgUhFQgIgngFhWQAAhEANg4QAHglAcg7QANgUAPgPQAQgQASgKQAVgLAVgGQAXgGAYAAQAZAAAXAGQAVAGAUALQASAKARAQQAPAPALAUQAdA7AIAlQANA4AABEQAABFgNA4QgUBFgPAbQgNAUgOAQQgQAPgTAKQgTALgWAGQgWAGgaAAQgYAAgVgGgAgqjHQgSANgLAbQgMAZgGApQgFAoAAA1QAAA2AFApQAIAoALAbQANAZATANQAQAOAXAAQAaAAASgNQASgMAKgbQAMgaAFgpQAFgoAAg3QAAg2gFgoQgFgpgMgaQgKgZgTgNQgTgNgZAAQgXAAgTANg");
	this.shape_3.setTransform(-174.8,0);
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FF275E","#FFEE5A"],[0,1],0,-30.7,0,30.7).s().p("AgtErQgWgGgUgLQgSgKgQgPQgPgQgNgUQgRgbgUhFQgIgngFhWQAAhEANg4QAHglAcg7QANgUAPgPQARgQARgKQAVgLAVgGQAXgGAYAAQAZAAAXAGQAWAGATALQASAKARAQQAPAPALAUQAcA7AJAlQANA4AABEQAABFgNA4QgUBFgQAbQgMAUgPAQQgPAPgTAKQgTALgVAGQgXAGgaAAQgYAAgWgGgAgqjHQgSANgMAbQgKAZgHApQgFAoAAA1QAAA2AFApQAIAoALAbQANAZATANQARAOAWAAQAaAAASgNQATgMAJgbQAMgaAFgpQAFgoAAg3QAAg2gFgoQgFgpgMgaQgKgZgTgNQgTgNgZAAQgXAAgTANg");
	this.shape_4.setTransform(-221.8,0);
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FF275E","#FFEE5A"],[0,1],2,-31.6,2,31).s().p("AinEqIAApTIFPAAIAABiIjmAAIAAHxg");
	this.shape_5.setTransform(215,0);
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#FF275E","#FFEE5A"],[0,1],-0.1,-30.7,-0.1,30.7).s().p("AiwEqIAApTIFYAAIAABiIjuAAIAACUIDVAAIAABgIjVAAIAACbID2AAIAABig");
	this.shape_6.setTransform(258.9,0);
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#FF275E","#FFEE5A"],[0,1],0,-30.7,0,30.7).s().p("AgsErQgXgGgUgLQgSgKgQgPQgPgQgNgUQgRgbgUhFQgIgngFhWQAAhEANg4QAHglAdg7QAMgUAQgPQAPgQATgKQAUgLAVgGQAXgGAYAAQAaAAAWAGQAWAGATALQATAKAPAQQAQAPALAUQAdA7AIAlQANA4AABEQAABFgNA4QgUBFgPAbQgNAUgOAQQgQAPgSAKQgUALgVAGQgXAGgZAAQgZAAgVgGgAgpjHQgTANgLAbQgLAZgGApQgGAoAAA1QAAA2AGApQAHAoALAbQANAZASANQARAOAYAAQAZAAASgNQATgMAKgbQALgaAGgpQAEgoAAg3QAAg2gEgoQgGgpgLgaQgMgZgSgNQgSgNgaAAQgXAAgSANg");
	this.shape_7.setTransform(-15.7,0);
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#FF275E","#FFEE5A"],[0,1],0,-29.6,0,29.7).s().p("AgzEqIAAnxIjBAAIAAhiIHpAAIAABiIjBAAIAAHxg");
	this.shape_8.setTransform(51.2,0);
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#FF275E","#FFEE5A"],[0,1],-0.1,-30.2,-0.1,30.2).s().p("ACJEqIAAj+IkPAAIAAD+IhpAAIAApTIBpAAIAAD0IEPAAIAAj0IBnAAIAAJTg");
	this.shape_9.setTransform(157.7,0);
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#FF275E","#FFEE5A"],[0,1],-0.1,-30.7,-0.1,30.7).s().p("AivEqIAApTIFXAAIAABiIjuAAIAACUIDUAAIAABgIjUAAIAACbID2AAIAABig");
	this.shape_10.setTransform(102.5,0);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-276.5,-30.5,553.1,61);
(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.Символ14();
	this.instance.parent = this;
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(-40.5,-41,81,82), null);
(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.parent = this;
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(-40.5,-41,81,82), null);
(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.Символ11();
	this.instance.parent = this;
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.9,scaleY:0.9},9,cjs.Ease.get(-1)).to({scaleX:0.8,scaleY:0.8},10,cjs.Ease.get(0.82)).to({scaleX:0.9,scaleY:0.9},10,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},10,cjs.Ease.get(0.82)).wait(1));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-242,-63,484.1,126);
(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 3
	this.instance = new lib.Символ9();
	this.instance.parent = this;
	this.instance.setTransform(-1.5,-120.2);
	this.instance.alpha = 0;
	this.instance._off = true;
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(72).to({_off:false},0).to({y:-0.2,alpha:1},10,cjs.Ease.get(1)).wait(41).to({y:133,alpha:0},10,cjs.Ease.get(1)).wait(1));
	// Слой 2
	this.instance_1 = new lib.Анимация1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-2.1,-100.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;
	this.instance_2 = new lib.Анимация2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-2.1,-0.1);
	this.instance_2._off = true;
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30).to({_off:false},0).to({_off:true,y:-0.1,alpha:1},10,cjs.Ease.get(1)).wait(94));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(30).to({_off:false},10,cjs.Ease.get(1)).wait(32).to({y:102.9,alpha:0},10,cjs.Ease.get(1)).to({_off:true},1).wait(51));
	// Слой 1
	this.instance_3 = new lib.Символ8();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-1.3,0,1.577,1.577);
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(30).to({y:140,alpha:0},10,cjs.Ease.get(1)).wait(83).to({y:-136},0).to({y:0,alpha:1},10,cjs.Ease.get(1)).wait(1));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-277.8,-69.8,552.8,139.8);
(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.parent = this;
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(-242,-63,484.1,126), null);
(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1 - копия
	this.instance = new lib.Символ18();
	this.instance.parent = this;
	this.instance.alpha = 0;
	this.instance.compositeOperation = "lighter";
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.05,scaleY:1.05,alpha:0.391},9,cjs.Ease.get(-1)).to({scaleX:1.12,scaleY:1.12,alpha:0.828},10,cjs.Ease.get(1)).to({scaleX:1.06,scaleY:1.06,alpha:0.414},10,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,alpha:0},10,cjs.Ease.get(1)).wait(1));
	// Слой 1
	this.instance_1 = new lib.Символ18();
	this.instance_1.parent = this;
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.05,scaleY:1.05},9,cjs.Ease.get(-1)).to({scaleX:1.12,scaleY:1.12},10,cjs.Ease.get(1)).to({scaleX:1.06,scaleY:1.06},10,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},10,cjs.Ease.get(1)).wait(1));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-960,-125,1920,250);
(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.parent = this;
	this.instance.setTransform(0,-0.1,0.73,0.73,45,0,0,-0.1,-0.1);
	this.instance.filters = [new cjs.BlurFilter(5, 5, 1)];
	this.instance.cache(-42,-43,85,86);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(-45,-45,94,94), null);
(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.parent = this;
	this.instance.setTransform(0.1,0.2,1.494,1.494,10.5,0,0,0.1,0.1);
	this.instance.filters = [new cjs.BlurFilter(8, 8, 1)];
	this.instance.cache(-42,-43,85,86);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(-74.7,-75.2,152,154), null);
(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Символ 12
	this.instance = new lib.Символ15();
	this.instance.parent = this;
	this.instance.setTransform(59,74.4);
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:14.3,x:44.5,y:97.9},13,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:30,x:29,y:123},15,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:14.8,x:44,y:98.7},15,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:0,x:59,y:74.4},15,cjs.Ease.get(1)).wait(1));
	// Символ 12
	this.instance_1 = new lib.Символ12();
	this.instance_1.parent = this;
	this.instance_1.setTransform(69.1,-48.1);
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,rotation:14.3,x:56.5,y:-39.3},13,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:30,x:43,y:-29.8},15,cjs.Ease.get(1)).to({regX:-0.1,regY:-0.1,scaleX:1,scaleY:1,rotation:14.8,x:56,y:-39.1},15,cjs.Ease.get(-1)).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:69.1,y:-48.1},15,cjs.Ease.get(1)).wait(1));
	// Символ 12
	this.instance_2 = new lib.Символ12();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-81.7,40.5,1,1,90);
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1,scaleY:1,rotation:68.4,x:-65.7,y:33.7},13,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:45,x:-48.6,y:26.5},15,cjs.Ease.get(1)).to({regX:-0.1,regY:0.1,scaleX:1,scaleY:1,rotation:67.7,x:-65.3,y:33.5},15,cjs.Ease.get(-1)).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:90,x:-81.7,y:40.5},15,cjs.Ease.get(1)).wait(1));
	// Символ 6
	this.instance_3 = new lib.Символ6();
	this.instance_3.parent = this;
	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:7.7},13,cjs.Ease.get(-1)).to({y:16},15,cjs.Ease.get(1)).to({y:8},15,cjs.Ease.get(-1)).to({y:0},15,cjs.Ease.get(1)).wait(1));
	// Символ 16
	this.instance_4 = new lib.Символ16();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-61.7,-68.6);
	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:1,scaleY:1,rotation:-14.3,y:-49.8},13,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:-30,y:-29.6},15,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:-14.8,x:-61.6,y:-49.1},15,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:0,x:-61.7,y:-68.6},15,cjs.Ease.get(1)).wait(1));
	// Символ 12
	this.instance_5 = new lib.Символ12();
	this.instance_5.parent = this;
	this.instance_5.setTransform(42,-120.3,0.73,0.73,90,0,0,-0.1,-0.1);
	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regY:-0.2,rotation:75.7,x:61.4,y:-91.5},13,cjs.Ease.get(-1)).to({regY:-0.1,rotation:60,x:82,y:-60.3},15,cjs.Ease.get(1)).to({regY:-0.2,rotation:75.2,x:62.1,y:-90.4},15,cjs.Ease.get(-1)).to({regY:-0.1,rotation:90,x:42,y:-120.3},15,cjs.Ease.get(1)).wait(1));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122.7,-149.9,259,303.1);
(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.tower1 = new lib.Символ5();
	this.tower1.parent = this;
	this.tower1.setTransform(-3.4,2.2);
	this.timeline.addTween(cjs.Tween.get(this.tower1).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(-126.1,-147.7,260,303.1), null);
(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Слой 1
	this.tower2 = new lib.Символ17();
	this.tower2.parent = this;
	this.timeline.addTween(cjs.Tween.get(this.tower2).wait(1));
}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(-126.1,-147.7,260,303.1), null);
// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		window._setCanvasSize = function() {
				var stageSize = getWindowSize();
				var w = stageSize.iw;
				var stageScale = 1;	
				var minWidth = 1650;
				var scaleW = w / minWidth;
				_this.logo.x = w * 0.12;
				_this.logo.y = 125;
				_this.btn.x = w * 0.85;
				_this.btn.y = 125;
				_this.bg.x = w * 0.5;
				_this.bg.y = 125;
				_this.tower.x = w * 0.65;
				_this.tower.y = 125;
				_this.tower1.x = 0;
				_this.tower1.y = 500;
				_this.txt.x = w * 0.4;
				_this.txt.y = 125;
			function setScale(scale) {
				_this.logo.scaleX = _this.logo.scaleY = scale * ((w < 551) ? 2 : 1);	
				_this.btn.scaleX = _this.btn.scaleY = scale * ((w < 551) ? 2 : 1);
				_this.tower.scaleX = _this.tower.scaleY = scale * ((w < 801) ? 2.3 : 1);
				_this.tower1.scaleX = _this.tower1.scaleY = scale * ((w < 801) ? 2.3 : 1);
				_this.txt.scaleX = _this.txt.scaleY = scale * ((w < 551) ? 2 : 1);
			}
			w < minWidth ? setScale(scaleW) : setScale(stageScale);
			if(w < 801){
				_this.logo.x = w * 0.5;
				_this.logo.y = 35;
				_this.btn.x = w * 0.8;
				_this.btn.y = 125;
				_this.bg.x = w * 0.5;
				_this.bg.y = 125;
				_this.tower.x = w * 0.53;
				_this.tower.y = 200;
				_this.tower1.x = 0;
				_this.tower1.y = 500;
				_this.txt.x = w * 0.22;
				_this.txt.y = 125;
			}
			if(w < 551){
				_this.logo.x = w * 0.5;
				_this.logo.y = 35;
				_this.btn.x = w * 0.5;
				_this.btn.y = 205;
				_this.bg.x = w * 0.5;
				_this.bg.y = 125;
				_this.tower.x = w;
				_this.tower.y = 125;
				_this.tower1.x = 0;
				_this.tower1.y = 125;
				_this.txt.x = w * 0.5;
				_this.txt.y = 115;
			}
		}
		window.onresize=function(){_setCanvasSize();}
		window.onresize();
		document.addEventListener("DOMContentLoaded", function(){ _setCanvasSize()});
	}
	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));
	// Слой 3
	this.logo = new lib.Символ2();
	this.logo.parent = this;
	this.logo.setTransform(222.9,125);
	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));
	// Слой 7
	this.tower1 = new lib.Символ5();
	this.tower1.parent = this;
	this.tower1.setTransform(-311.9,149.9);
	this.timeline.addTween(cjs.Tween.get(this.tower1).wait(1));
	// Слой 4
	this.btn = new lib.Символ3();
	this.btn.parent = this;
	this.btn.setTransform(1665.2,125);
	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));
	// Слой 5
	this.txt = new lib.Символ7();
	this.txt.parent = this;
	this.txt.setTransform(800,125);
	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));
	// Слой 6
	this.tower = new lib.Символ4();
	this.tower.parent = this;
	this.tower.setTransform(1274.5,122.9);
	this.timeline.addTween(cjs.Tween.get(this.tower).wait(1));
	// Слой 1
	this.bg = new lib.Символ1();
	this.bg.parent = this;
	this.bg.setTransform(960,125);
	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(525.4,100.1,2354.6,328);
// library properties:
lib.properties = {
	width: 1920,
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
		{src:"images/tow.png", id:"tow"}
	],
	preloads: []
};
})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;
