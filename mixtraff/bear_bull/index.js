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



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,644,417);


(lib.button_green = function() {
	this.initialize(img.button_green);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,184,46);


(lib.button_orange = function() {
	this.initialize(img.button_orange);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,184,45);


(lib.cursor = function() {
	this.initialize(img.cursor);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,52,57);


(lib.graph = function() {
	this.initialize(img.graph);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,674,360);


(lib.Layer1 = function() {
	this.initialize(img.Layer1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,257,173);


(lib.Layer10 = function() {
	this.initialize(img.Layer10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,46,57);


(lib.Layer11 = function() {
	this.initialize(img.Layer11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,57,93);


(lib.Layer12 = function() {
	this.initialize(img.Layer12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,30,89);


(lib.Layer13 = function() {
	this.initialize(img.Layer13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,89,83);


(lib.Layer14 = function() {
	this.initialize(img.Layer14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,156,120);


(lib.Layer15 = function() {
	this.initialize(img.Layer15);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,94,119);


(lib.Layer16 = function() {
	this.initialize(img.Layer16);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,43,20);


(lib.Layer17 = function() {
	this.initialize(img.Layer17);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,81,112);


(lib.Layer18 = function() {
	this.initialize(img.Layer18);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,23,23);


(lib.Layer19 = function() {
	this.initialize(img.Layer19);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,305,175);


(lib.Layer5 = function() {
	this.initialize(img.Layer5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,96,85);


(lib.Layer6 = function() {
	this.initialize(img.Layer6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,65,130);


(lib.Layer7 = function() {
	this.initialize(img.Layer7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,27,33);


(lib.Layer8 = function() {
	this.initialize(img.Layer8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,34,17);


(lib.Layer9 = function() {
	this.initialize(img.Layer9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,20,20);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,159,44);


(lib.mmoney = function() {
	this.initialize(img.mmoney);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,581,32);


(lib.txt1000txt = function() {
	this.initialize(img.txt1000txt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,333,63);


(lib.txt_strategy = function() {
	this.initialize(img.txt_strategy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,363,31);// helper functions:

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
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.494,1],-13.7,0,13.8,0).s().p("AjPFKICNqSIESAAIiNKSg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.8,-32.9,41.7,65.9);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.494,1],-13.7,0,13.8,0).s().p("AjPFKICNqSIESAAIiNKSg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.8,-32.9,41.7,65.9);


(lib.Symbol45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mmoney();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol45, new cjs.Rectangle(0,0,581,32), null);


(lib.Symbol41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.graph();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol41, new cjs.Rectangle(0,0,674,360), null);


(lib.Symbol36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.494,1],-16.9,0,17,0).s().p("AjWEgIBao/IFTAAIhaI/g");
	this.shape.setTransform(21.5,28.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol36, new cjs.Rectangle(0,0,42.9,57.6), null);


(lib.Symbol35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.6)").s().p("AgNCkIAAghQgWgCgSgJQgSgIgOgPIAZgjQAMAMARAIQASAHAPAAQARAAAKgIQAFgEADgFQADgGAAgIQAAgLgNgKQgKgIgTgIIgkgRQgJgEgIgFQgIgHgFgIQgGgIgEgJQgDgKAAgKQAAgOAFgMQAEgLAKgLQAJgKANgGQAMgGAPgCIAAgiIAdAAIAAAhQATABAQAHQAQAHANALIgUAmQgMgKgPgGQgPgGgPAAQgPAAgLAIQgLAJAAANQAAAIAFAGQAEAGAKAFIAoATIAeAPQAOAIAIAPQAFAHACAIQACAJAAAJQAAAPgEAMQgFAMgJAKQgKALgNAGQgMAGgRACIAAAhg");
	this.shape.setTransform(99.1,17.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.6)").s().p("AgWCCQgLgDgJgFQgJgFgIgHQgHgIgFgJQgHgMgJgeQgFgWAAgdQAAgdAFgWQAEgSAHgOQAHgQAKgKQALgLAPgFQAPgGASAAQAXAAASAIQARAIAMARQALAQAGAZQAGAZAAAgQgBAWgCARQgDAUgFAPQgGAQgJAMQgKAMgNAIQgJAFgLADQgLACgNAAQgLAAgLgCgAgShTQgJAGgFALQgGALgDARQgDAQAAAWQAAAWADARQADARAGALQAFALAJAGQAIAGAKAAQAMAAAIgGQAIgGAGgLQAGgLACgRQADgRAAgWQAAgWgDgQQgCgRgGgLQgGgLgIgGQgIgFgMAAQgKAAgIAFg");
	this.shape_1.setTransform(77.3,17.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.6)").s().p("AgWCCQgLgDgJgFQgJgFgIgHQgHgIgFgJQgHgMgJgeQgFgWAAgdQAAgdAFgWQAEgSAHgOQAHgQAKgKQALgLAPgFQAPgGASAAQAXAAASAIQARAIAMARQALAQAGAZQAGAZAAAgQgBAWgCARQgDAUgFAPQgGAQgJAMQgKAMgNAIQgJAFgLADQgLACgNAAQgLAAgLgCgAgShTQgJAGgFALQgGALgDARQgDAQAAAWQAAAWADARQADARAGALQAFALAJAGQAIAGAKAAQAMAAAIgGQAIgGAGgLQAGgLACgRQADgRAAgWQAAgWgDgQQgCgRgGgLQgGgLgIgGQgIgFgMAAQgKAAgIAFg");
	this.shape_2.setTransform(54.7,17.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.6)").s().p("AgWCCQgLgDgJgFQgJgFgIgHQgHgIgFgJQgHgMgJgeQgFgWAAgdQAAgdAFgWQAEgSAHgOQAHgQAKgKQALgLAPgFQAPgGASAAQAXAAASAIQARAIAMARQALAQAGAZQAGAZAAAgQgBAWgCARQgDAUgFAPQgGAQgJAMQgKAMgNAIQgJAFgLADQgLACgNAAQgLAAgLgCgAgShTQgJAGgFALQgGALgDARQgDAQAAAWQAAAWADARQADARAGALQAFALAJAGQAIAGAKAAQAMAAAIgGQAIgGAGgLQAGgLACgRQADgRAAgWQAAgWgDgQQgCgRgGgLQgGgLgIgGQgIgFgMAAQgKAAgIAFg");
	this.shape_3.setTransform(32.1,17.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.6)").s().p("AhLCAIAAgoIA4AAIAAiNIAAgRIgBAAQgDAGgIAIIgVAUIgbgdIBAg+IAoAAIAADXIA3AAIAAAog");
	this.shape_4.setTransform(11.8,17.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol35, new cjs.Rectangle(0,0,111.7,40), null);


(lib.Symbol34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.txt1000txt();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol34, new cjs.Rectangle(0,0,333,63), null);


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.button_orange();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol31, new cjs.Rectangle(0,0,184,45), null);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.button_green();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol28, new cjs.Rectangle(0,0,184,46), null);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cursor();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol26, new cjs.Rectangle(0,0,52,57), null);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cursor();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol23, new cjs.Rectangle(0,0,52,57), null);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer13();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol21, new cjs.Rectangle(0,0,89,83), null);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer14();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(0,0,156,120), null);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer15();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(0,0,94,119), null);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer16();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(0,0,43,20), null);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer17();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(0,0,81,112), null);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer18();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(0,0,23,23), null);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer19();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(0,0,305,175), null);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(0,0,257,173), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(0,0,96,85), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer6();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,0,65,130), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer7();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,0,27,33), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer8();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,34,17), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer9();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,20,20), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer10();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,46,57), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer11();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,57,93), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer12();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,30,89), null);


(lib.Symbol43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol45();
	this.instance.parent = this;
	this.instance.setTransform(912.9,16,1,1,0,0,0,290.5,16);

	this.instance_1 = new lib.Symbol45();
	this.instance_1.parent = this;
	this.instance_1.setTransform(331.9,16,1,1,0,0,0,290.5,16);

	this.instance_2 = new lib.Symbol45();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-830.1,16,1,1,0,0,0,290.5,16);

	this.instance_3 = new lib.Symbol45();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-249.1,16,1,1,0,0,0,290.5,16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol43, new cjs.Rectangle(-1120.6,0,2324,32), null);


(lib.Symbol42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol43();
	this.instance.parent = this;
	this.instance.setTransform(832.5,16,1,1,0,0,0,290.5,16);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:251.5},99).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-578.6,0,2324,32);


(lib.Symbol40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol41();
	this.instance.parent = this;
	this.instance.setTransform(1678.9,180,1,1,0,0,0,337,180);

	this.instance_1 = new lib.Symbol41();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1009.5,180,1,1,0,0,180,337,180);

	this.instance_2 = new lib.Symbol41();
	this.instance_2.parent = this;
	this.instance_2.setTransform(340,180,1,1,0,0,0,337,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol40, new cjs.Rectangle(3,0,2012.9,360), null);


(lib.Symbol39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol40();
	this.instance.parent = this;
	this.instance.setTransform(337,180,1,1,0,0,0,337,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-1001.6},198).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,0,2012.9,360);


(lib.Symbol37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol36();
	this.instance.parent = this;
	this.instance.setTransform(21.4,28.8,1,1,0,0,0,21.4,28.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({x:450.4},20).wait(20).to({x:21.4},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,42.9,57.6);


(lib.Symbol33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("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");
	mask.setTransform(181.8,14.8);

	// Layer 3
	this.instance = new lib.Symbol37();
	this.instance.parent = this;
	this.instance.setTransform(-26.9,16.9,1,1,0,0,0,21.4,28.8);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.txt_strategy();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol33, new cjs.Rectangle(0,0,363,31), null);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.Symbol35();
	this.instance.parent = this;
	this.instance.setTransform(277.7,23.2,1,1,0,0,0,55.8,20);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({_off:false},0).to({alpha:1},3).to({alpha:0},3).to({alpha:1},3).to({alpha:0},3).to({_off:true},1).wait(18));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ACuChQgMgDgMgFQgMgFgKgHQgLgHgKgKQgKgJgGgLQgIgLgEgMQgFgMgCgNQgDgNAAgOQAAgOADgMQACgMAFgMQAEgMAIgKQAGgKAKgJQAKgKALgHQAKgHAMgFQAMgFAMgCQANgDAOAAQA4AAAnAnQAJAJAHAKQAIAKAEAMQAFAMACAMQACAMABAOQgBAOgCANQgCANgFAMQgEAMgIALQgHALgJAJQgKAKgLAHQgKAHgMAFQgMAFgNADQgNACgOAAQgOAAgNgCgACpgzQgPAGgNAMQgLAOgHAPQgGAPAAASQAAAUAGAQQAHAQALANQANANAPAHQAPAGARAAQASAAAPgGQAPgHANgNQALgNAHgQQAFgQAAgUQAAgSgFgPQgHgPgLgOQgNgMgPgGQgPgHgSAAQgRAAgPAHgAvXChQgMgDgLgFQgMgFgKgGQgJgHgJgIIAZggQAMAMAOAHQAQAIAQAAQALAAAIgDQAJgDAFgFQAGgEADgIQAEgHAAgJQAAgIgEgIQgCgGgGgFQgFgEgIgDQgHgCgJAAIgfAAIAAglIAZAAQAIgBAHgCQAIgDAGgEQAEgFAEgGQADgHAAgHQgBgIgCgGQgDgHgEgEQgGgFgHgDQgIgCgJAAQgPAAgOAFQgNAGgNAKIgTghQAigdAwAAQARABAOAEQANAFAMAKQALAJAGAMQAFANAAAQQAAAKgBAIQgDAIgFAHQgEAGgGAGQgHAGgJAGIAAAAQAKADAIAGQAIAFAGAIQAFAIADAJQADAKAAAKQAAASgHAOQgGAOgNALQgMALgQAEQgPAGgUAAQgMAAgMgCgAPoCeIACi5IAAAAIgVAmIhhCTIguAAIAAj+IAuAAIgCC6IAAAAIAVgoIBhiSIAvAAIAAD+gAL1CeIgXhBIhZAAIgVBBIgwAAIBaj+IAwAAIBaD+gALTA3IghhrIgBAAIggBrIBCAAgAG2CeIAAjWIhUAAIAAgoIDWAAIAAAoIhUAAIAADWgAiICeIAAj+ICcAAIAAAoIhtAAIAAA6IAyAAQATAAAOAGQANAFALAKQALALAGAOQAGAPgBASQABARgGAOQgFAOgLALQgLALgOAFQgOAGgSgBgAhZB3IAsAAQAJgBAHgCQAIgDAFgEQAFgGADgHQACgGAAgJQAAgJgCgHQgEgHgEgFQgGgGgHgCQgIgDgKAAIgqAAgAjZCeIgWhBIhaAAIgVBBIgwAAIBaj+IAxAAIBaD+gAj6A3IghhrIgBAAIghBrIBDAAgApOCeIAAj+IBjAAQASAAAPAGQAOAFAMAMQALALAGAPQAFAQAAASQAAARgFAQQgGAPgLAMQgMALgOAHQgPAFgSABIg0AAIAABXgAofAeIArAAQALAAAHgDQAJgDAFgGQAGgFADgJQADgHAAgKQAAgKgDgIQgDgIgGgFQgFgGgJgDQgHgDgKAAIgsAAgAqfCeIgVhBIhaAAIgWBBIgvAAIBZj+IAxAAIBaD+gArAA3IgghrIgBAAIgiBrIBDAAgAOZhvQgKgDgJgHQgJgGgDgKQgFgJAAgMIAAgEIAjAAIAAAEQAAAMAHAFQAHAGAKAAQAKAAAHgGQAIgGgBgLIAAgEIAjAAIAAAEQAAAMgEAJQgFAKgIAGQgJAHgLADQgKAEgMAAQgMAAgLgEg");
	mask.setTransform(106.4,17.8);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.494,1],-13.7,0,13.8,0).s().p("AjPFKICNqSIESAAIiNKSg");
	this.shape.setTransform(-23.1,19.6);

	this.instance_1 = new lib.Tween1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-23,19.6);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween2("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(224,19.6);

	var maskedShapeInstanceList = [this.shape,this.instance_1,this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.instance_1}]},14).to({state:[{t:this.instance_2}]},15).to({state:[{t:this.instance_2}]},40).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({_off:true,x:224},15).wait(41));

	// Layer 1
	this.instance_3 = new lib.Symbol34();
	this.instance_3.parent = this;
	this.instance_3.setTransform(166.5,31.5,1,1,0,0,0,166.5,31.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(70));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,333,63);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol28();
	this.instance.parent = this;
	this.instance.setTransform(92,23,1,1,0,0,0,92,23);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.06,scaleY:1.06,y:23.1},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,184,46);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol31();
	this.instance.parent = this;
	this.instance.setTransform(92,22.5,1,1,0,0,0,92,22.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol27, new cjs.Rectangle(0,0,184,45), null);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol26();
	this.instance.parent = this;
	this.instance.setTransform(26,28.5,1,1,0,0,0,26,28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol25, new cjs.Rectangle(0,0,52,57), null);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol25();
	this.instance.parent = this;
	this.instance.setTransform(26,28.5,1,1,0,0,0,26,28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({regX:25.9,regY:28.6,scaleX:0.89,scaleY:0.89,x:23.1,y:31.8},3).to({regX:26,regY:28.5,scaleX:1,scaleY:1,x:26,y:28.5},3).wait(18).to({y:-7.2},5,cjs.Ease.get(-1)).to({y:-43},5,cjs.Ease.get(1)).wait(17).to({regX:26.1,regY:28.6,scaleX:0.9,scaleY:0.9,x:23.5,y:-40},3).to({regX:26,regY:28.5,scaleX:1,scaleY:1,x:26,y:-43},3).wait(17).to({y:-7.2},5,cjs.Ease.get(-1)).to({y:28.5},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,52,57);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 11.png
	this.instance = new lib.Symbol7();
	this.instance.parent = this;
	this.instance.setTransform(35.7,79.5,1,1,-2.5,0,0,32.6,26.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:26.3,rotation:5.7,x:35.8,y:78},2).to({regX:32.5,regY:26.2,rotation:-15.3,x:35.7,y:78.3},4).to({rotation:-34.5,x:35.8,y:80.7},4).to({rotation:-47.4,x:35.9},3).to({rotation:-33,y:79.5},3).to({regX:32.4,rotation:-21},3).to({regX:32.5,regY:26.4,rotation:-7.3,x:36,y:79.7},3).to({regX:32.6,regY:26.2,rotation:-2.5,x:35.7,y:79.5},4).wait(1));

	// Layer 10.png
	this.instance_1 = new lib.Symbol8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(18.2,129.5,1,1,13.7,0,0,30.9,16.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:30.8,rotation:35.2,x:14.5,y:123.8},2).to({regX:30.9,regY:16.7,rotation:39.9,x:36.7,y:127.7},4).to({rotation:-24.3,x:50,y:130.5},4).to({regY:16.8,rotation:-41.3,x:60.7,y:128.2},3).to({regX:31,rotation:-42.8,x:42.7,y:131.5},3).to({regX:30.9,rotation:-29.8,x:32.6,y:129.9},3).to({rotation:-6.1,x:24.6,y:126.3},3).to({regY:16.6,rotation:13.7,x:18.2,y:129.5},4).wait(1));

	// Layer 9.png
	this.instance_2 = new lib.Symbol9();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-7.6,155.2,1,1,51.7,0,0,9.8,6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:65.9,x:-19.1,y:138.5},2).to({regX:10,rotation:67,x:1.8,y:137.9},4).to({scaleX:1,scaleY:1,rotation:52,x:21.1,y:160},2).to({regX:9.8,regY:6.6,scaleX:1,scaleY:1,rotation:22.3,x:45.4,y:165.7},2).to({regY:6.7,rotation:-5.2,x:67,y:164.1},3).to({regY:6.8,rotation:-15.9,x:48.6,y:168.2},3).to({rotation:2.8,x:29.8,y:166.3},3).to({rotation:16.5,x:8.1,y:162.2},3).to({regY:6.5,rotation:51.7,x:-7.6,y:155.2},4).wait(1));

	// Layer 6.png
	this.instance_3 = new lib.Symbol12();
	this.instance_3.parent = this;
	this.instance_3.setTransform(157.4,42.2,1,1,-23.7,0,0,33,21.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-16},2).to({regX:33.1,regY:21.4,rotation:-5.7,x:157.6},4).to({rotation:3.7},4).to({regY:21.5,rotation:12.7,y:42.3},3).to({regY:21.6,rotation:21.4,x:157.5,y:42.4},3).to({rotation:-2.6,x:157.6},3).to({regX:33.2,regY:21.7,rotation:-13.5,x:157.7},3).to({regX:33,regY:21.3,rotation:-23.7,x:157.4,y:42.2},4).wait(1));

	// llp
	this.instance_4 = new lib.Symbol11();
	this.instance_4.parent = this;
	this.instance_4.setTransform(207.9,134.9,1,1,-24.2,0,0,14.8,5.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-0.2,x:196.7,y:138.1},2).to({rotation:-0.2,x:178.3,y:146.1},4).to({regY:5.5,rotation:30.2,x:161.5,y:145.4},4).to({x:143.1,y:145},3).to({regY:5.4,rotation:60.7,x:126.3,y:139.1},3).to({rotation:70.5,x:166.3},3).to({regX:14.9,rotation:15.5,x:191.2},3).to({regX:14.8,rotation:-24.2,x:207.9,y:134.9},4).wait(1));

	// llp2
	this.instance_5 = new lib.Symbol10();
	this.instance_5.parent = this;
	this.instance_5.setTransform(222.2,155.5,1,1,7.5,0,0,11.2,1.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:11.3,regY:1.7,rotation:9.5,x:201.8,y:162.7},2).to({regX:11.4,rotation:15.2,x:182.7,y:170.1},4).to({regX:11.5,rotation:33.9,x:152.7,y:168.1},4).to({regX:11.6,regY:1.6,rotation:58.4,x:135.7,y:165.9},3).to({rotation:85.6,x:108.5,y:153.4},3).to({regX:11.7,regY:1.4,rotation:105.1,x:148.6,y:150.4},3).to({regX:11.8,rotation:54.1,x:190.7,y:161.4},3).to({regX:11.2,regY:1.6,rotation:7.5,x:222.2,y:155.5},4).wait(1));

	// Layer 5.png
	this.instance_6 = new lib.Symbol13();
	this.instance_6.parent = this;
	this.instance_6.setTransform(243,15.9,1,1,0,0,0,12,15.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({y:17.5},2).to({rotation:8.2,y:18.8},4).to({regY:15.8,rotation:16.2,x:243.1,y:17.1},4).to({regY:15.9,rotation:14.7,x:240.2,y:15.6},3).to({regY:15.8,rotation:9.7,x:243.1,y:15.9},3).to({regY:15.9,rotation:0,x:242.2,y:14.7},3).to({rotation:-3.2,x:243,y:15.9},3).to({rotation:0},4).wait(1));

	// Layer 1.png
	this.instance_7 = new lib.Symbol14();
	this.instance_7.parent = this;
	this.instance_7.setTransform(128.5,86.5,1,1,0,0,0,128.5,86.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:0.9,x:128.6,y:86.6},2).to({regX:128.4,rotation:2,x:128.4},4).to({regX:128.5,rotation:1.2,x:128.5},4).to({rotation:0,y:86.5},3).to({regX:128.6,rotation:0.4,x:128.7,y:86.6},3).to({regX:128.5,rotation:-0.4,x:128.5},3).to({rotation:0,y:86.5},3).wait(5));

	// Layer 12.png
	this.instance_8 = new lib.Symbol6();
	this.instance_8.parent = this;
	this.instance_8.setTransform(18,68.7,1,1,0,0,0,24,77.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:23.9,rotation:1.5,x:18.4,y:67.9},2).to({regX:24,rotation:0,x:20,y:67.5},4).to({x:18,y:68.7},4).to({rotation:-11.2,x:18.1,y:70},3).to({rotation:0,x:18,y:68.7},3).to({y:69.9},3).to({y:68.7},3).wait(5));

	// lp2
	this.instance_9 = new lib.Symbol11();
	this.instance_9.parent = this;
	this.instance_9.setTransform(158,138.9,1,1,44.5,0,0,13.9,5.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({x:189.9},2).to({rotation:-45.5,x:210,y:130.9},4).to({regX:14,regY:5.9,rotation:-9.4,x:189.6,y:144},4).to({rotation:6.9,x:173.2,y:148.4},3).to({rotation:21.3,x:169.2,y:144.5},3).to({rotation:26,x:161.2},3).to({regX:14.1,rotation:35.2,x:160.9},3).to({regX:13.9,regY:5.8,rotation:44.5,x:158,y:138.9},4).wait(1));

	// lp
	this.instance_10 = new lib.Symbol10();
	this.instance_10.parent = this;
	this.instance_10.setTransform(145.4,158.8,1,1,92.7,0,0,12.1,3.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({regY:3.6,rotation:123.9,x:177.4,y:158},2).to({regX:12.2,rotation:-11.5,x:230,y:144},4).to({rotation:-2.4,x:198.3,y:168.8},4).to({rotation:11.6,x:175,y:174},3).to({x:166.3,y:170.3},3).to({rotation:30.1,x:155.1,y:168.3},3).to({rotation:44.1,x:151.1,y:166.3},3).to({regX:12.1,regY:3.7,rotation:92.7,x:145.4,y:158.8},4).wait(1));

	// Layer 11.png copy
	this.instance_11 = new lib.Symbol7();
	this.instance_11.parent = this;
	this.instance_11.setTransform(44.3,78.5,1,1,-44.4,0,0,36.4,32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({regX:36.3,regY:32.6,rotation:-36.7,y:78.7},2).to({rotation:-20.9},4).wait(4).to({regX:36.4,rotation:16.6,x:51.6,y:87.2},3).to({rotation:4.8,x:51.5},3).to({regX:36.3,rotation:-14.4,y:84.3},3).to({regX:36.4,regY:32.8,rotation:-29.1,x:51.7,y:84.5},3).to({regY:32.5,rotation:-44.4,x:44.3,y:78.5},4).wait(1));

	// Layer 10.png copy
	this.instance_12 = new lib.Symbol8();
	this.instance_12.parent = this;
	this.instance_12.setTransform(56.8,121.3,1,1,-57.6,0,0,37.9,13.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({regY:13.5,rotation:-44.9,x:54.5,y:121},2).to({rotation:-13.4,x:47.1,y:122.5},4).to({rotation:14.3,x:47},4).to({rotation:24.7,x:24.3,y:122.4},3).to({rotation:46.3,x:35.9,y:129.6},3).to({regX:38,regY:13.4,rotation:47.3,x:52,y:132.9},3).to({regY:13.5,rotation:1.7,x:60.8,y:126.6},3).to({regX:37.9,regY:13.4,rotation:-57.6,x:56.8,y:121.3},4).wait(1));

	// Layer 9.png copy
	this.instance_13 = new lib.Symbol9();
	this.instance_13.parent = this;
	this.instance_13.setTransform(72.3,159.7,1,1,-13.9,0,0,10.1,5);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({x:60.3,y:162.9},2).to({rotation:-0.5,x:45.1,y:162.7},2).to({rotation:19.5,x:28.8,y:160},2).to({x:12,y:149.2},4).to({rotation:54.7,x:-12.4,y:142},3).to({rotation:64.7,x:-7.2,y:132},3).to({regX:10.2,rotation:76,x:9.5,y:136.5},3).to({regY:4.9,rotation:42.2,x:34,y:157.6},3).to({scaleX:1,scaleY:1,rotation:9.3,x:48.6,y:163.8},2).to({regX:10.1,regY:5,scaleX:1,scaleY:1,rotation:-13.9,x:72.3,y:159.7},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.3,-9,351.3,189.8);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 13.png
	this.instance = new lib.Symbol21();
	this.instance.parent = this;
	this.instance.setTransform(292.1,119.9,1,1,0,0,0,26.1,39.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:26,rotation:3.5,y:121.6},3).to({y:120},3).to({regX:26.1,rotation:0,y:119.9},3).to({y:118.7},3).to({rotation:-4.7,y:119.9},3).to({rotation:0},3).wait(4));

	// Layer 14.png
	this.instance_1 = new lib.Symbol20();
	this.instance_1.parent = this;
	this.instance_1.setTransform(237.7,71.1,1,1,0,0,0,99.7,41.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({regY:41.2,rotation:-1.4,y:71.2},3).wait(3).to({regX:99.8,rotation:1.5,x:237.8},3).to({regX:99.7,rotation:3.5},3).to({regY:41.3,rotation:-3.5,y:71.3},3).to({regY:41.1,rotation:0,x:237.7,y:71.1},3).wait(1));

	// lb2
	this.instance_2 = new lib.Symbol17();
	this.instance_2.parent = this;
	this.instance_2.setTransform(63.3,115.6,1,1,27.9,0,0,46.3,15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:46.5,regY:15.6,rotation:0.7,x:63.5,y:103.7},3).to({regY:15.7,rotation:-13.7,y:115},3).to({regY:15.8,rotation:-8,x:63.6,y:115.5},3).to({regX:46.6,rotation:-2.3,x:63.7},3).to({rotation:7.4,x:63.6},3).to({rotation:16.2,x:63.7},3).to({regX:46.3,regY:15.5,rotation:27.9,x:63.3,y:115.6},3).wait(1));

	// lb2-2
	this.instance_3 = new lib.Symbol16();
	this.instance_3.parent = this;
	this.instance_3.setTransform(36.9,197.1,1,1,15,0,0,11.5,11.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:11.6,regY:11.6,rotation:30.4,x:68.9,y:197.2},3).to({rotation:-0.8,x:95.3,y:199.2},3).to({rotation:-0.8,x:92.1},3).to({x:84.1,y:201.2},3).to({x:72.1,y:202.4},3).to({x:56.1,y:200},3).to({regX:11.5,regY:11.5,rotation:15,x:36.9,y:197.1},3).wait(1));

	// l2
	this.instance_4 = new lib.Symbol19();
	this.instance_4.parent = this;
	this.instance_4.setTransform(200.2,118.2,1,1,-4.2,0,0,57.2,18.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:57.3,rotation:-0.3,x:200.3,y:118.3},3).to({rotation:6.7},3).to({regX:57.4,rotation:15.9,x:200.4},3).to({rotation:27.4},3).to({regX:57.5,regY:18.3,rotation:31.6,y:114.1},3).to({regY:18.4,rotation:0.3,x:200.5,y:114},3).to({regX:57.2,regY:18.2,rotation:-4.2,x:200.2,y:118.2},3).wait(1));

	// l2-2
	this.instance_5 = new lib.Symbol18();
	this.instance_5.parent = this;
	this.instance_5.setTransform(214.9,203.5,1,1,0.5,0,0,9.7,4.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:206.9},3).to({x:194.9,y:203.1},3).to({regX:9.8,regY:4.3,rotation:5.2,x:183,y:201.6},3).to({regY:4.4,rotation:12.4,x:167,y:194.8},3).to({rotation:17.4,x:159.6,y:188.3},3).to({regX:9.9,rotation:9.7,x:207.7,y:196.3},3).to({regX:9.7,regY:4.2,rotation:0.5,x:214.9,y:203.5},3).wait(1));

	// Layer 19.png
	this.instance_6 = new lib.Symbol15();
	this.instance_6.parent = this;
	this.instance_6.setTransform(152.5,117.5,1,1,0,0,0,152.5,87.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:1.2},3).to({rotation:0},3).to({regY:87.6,rotation:0.9,x:152.6,y:117.6},3).to({regY:87.5,rotation:0,x:152.5,y:117.5},3).to({regX:152.6,rotation:1,x:152.6},3).to({regX:152.5,rotation:0,x:152.5},3).wait(4));

	// l1
	this.instance_7 = new lib.Symbol19();
	this.instance_7.parent = this;
	this.instance_7.setTransform(200.5,118.2,1,1,12.8,0,0,57.4,18.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:22.7,y:115.4},3).to({regY:18.3,rotation:1.7,x:200.4,y:115.5},3).to({regY:18.4,rotation:-13,x:200.5,y:115.6},3).to({regX:57.5,rotation:-11,x:200.6,y:117.9},3).to({rotation:0.2,x:200.5,y:118},3).to({regY:18.5,rotation:7,y:118.1},3).to({regX:57.4,regY:18.2,rotation:12.8,y:118.2},3).wait(1));

	// l1-2
	this.instance_8 = new lib.Symbol18();
	this.instance_8.parent = this;
	this.instance_8.setTransform(197.9,207.6,1,1,0,0,0,21.5,10);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:21.6,rotation:17.7,x:183.6,y:205.3},3).to({regY:10.1,rotation:12.2,x:214.8,y:201.3},3).to({regX:21.7,regY:10.2,rotation:0.2,x:239.7,y:200.7},3).to({rotation:-8.7,x:236.1,y:204.3},3).to({rotation:-2.8,x:219.3,y:208.3},3).to({rotation:0.6,x:208.6},3).to({regX:21.5,regY:10,rotation:0,x:197.9,y:207.6},3).wait(1));

	// lb1
	this.instance_9 = new lib.Symbol17();
	this.instance_9.parent = this;
	this.instance_9.setTransform(63.2,115.5,1,1,0,0,0,46.2,15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({regX:46.3,rotation:10,x:63.3},3).to({rotation:15.2,x:63.4},3).to({rotation:25.7,x:63.3,y:113.5},3).to({regX:46.4,rotation:30.6,x:63.4,y:110},3).to({regY:15.6,rotation:9.7,y:110.1},3).to({regX:46.5,rotation:-3.3,y:110},3).to({regX:46.2,regY:15.5,rotation:0,x:63.2,y:115.5},3).wait(1));

	// lb1-2
	this.instance_10 = new lib.Symbol16();
	this.instance_10.parent = this;
	this.instance_10.setTransform(80.5,201.5,1,1,0,0,0,11.5,11.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({x:62.5},3).to({x:56.9},3).to({regY:11.6,rotation:16.7,x:40.8,y:197.6},3).to({regX:11.6,rotation:33.7,x:34.9,y:192.4},3).to({rotation:13.7,x:73.7,y:193.2},3).to({regX:11.7,rotation:-14.5,x:86.4,y:194.2},3).to({regX:11.5,regY:11.5,rotation:0,x:80.5,y:201.5},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.8,30,377.9,194.6);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol33();
	this.instance.parent = this;
	this.instance.setTransform(163.5,-83.5,1,1,0,0,0,181.5,15.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(69).to({_off:false},0).to({y:-42.7},2,cjs.Ease.get(-1)).to({y:18.6},3,cjs.Ease.get(1)).wait(70).to({alpha:0},5).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol32();
	this.instance_1.parent = this;
	this.instance_1.setTransform(166.5,31.5,1,1,0,0,0,166.5,31.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(69).to({alpha:0},5).to({_off:true},1).wait(69).to({_off:false,y:-72.5,alpha:1},0).to({y:-30.9},2,cjs.Ease.get(-1)).to({y:31.5},3,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.9,-13.3,376.9,76.4);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.749)").s().p("Eg5VAfaMAAAg+zMByrAAAMAAAA+zg");
	this.shape.setTransform(335,175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.instance = new lib.Symbol39();
	this.instance.parent = this;
	this.instance.setTransform(327,166,1,1,0,0,0,337,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.back();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-31.9,-25.9,2037.9,443), null);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol27();
	this.instance.parent = this;
	this.instance.setTransform(92,22.5,1,1,0,0,0,92,22.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:22.4,scaleX:1.07,scaleY:1.07,x:92.1,y:22.4},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,184,45);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol5();
	this.instance.parent = this;
	this.instance.setTransform(158.7,95.5,1,1,0,0,0,128.5,86.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol22, new cjs.Rectangle(5.9,0,351.3,189.8), null);


(lib.Symbol38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 22
	this.instance = new lib.Symbol22();
	this.instance.parent = this;
	this.instance.setTransform(208.4,99.6,1,1,0,0,0,178.6,96.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(44).to({_off:false},0).to({alpha:1},5).wait(40).to({alpha:0},10).wait(1));

	// Symbol 3
	this.instance_1 = new lib.Symbol3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(175.4,57.5,1,1,0,0,0,152.5,87.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(39).to({alpha:0},10).to({_off:true},1).wait(44).to({_off:false},0).to({alpha:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,377.9,194.6);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// bull
	this.instance = new lib.Symbol22();
	this.instance.parent = this;
	this.instance.setTransform(136.9,116.5,1,1,0,0,0,178.6,96.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// all
	this.instance_1 = new lib.Symbol38();
	this.instance_1.parent = this;
	this.instance_1.setTransform(128.9,113.4,1,1,0,0,0,188.9,97.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(2));

	// bear
	this.instance_2 = new lib.Symbol3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(115.4,73.7,1,1,0,0,0,152.5,87.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60,16.2,377.9,194.6);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		
		_this.kursor.visible=false;
		_this.kursor2.visible=true;
		
		
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		
		function fl_MouseOverHandler_5()
		    {
				_this.kursor.visible=true;
				_this.kursor2.visible=false;
		    }
		
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		
		
		      function fl_MouseOutHandler_2()
		    {
			    _this.kursor.visible=false;
				_this.kursor2.visible=true;
		    }
		
			
		this.bt1.addEventListener("mouseover", fl_ClickToGoToAndPlayFromFrame_1.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_1()
		{
		this.bb.gotoAndPlay(1);
		}
		
		this.bt1.addEventListener("mouseout", fl_ClickToGoToAndPlayFromFrame_2.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_2()
		{
		this.bb.gotoAndPlay(0);
		}
		
		
		
		
		this.bt2.addEventListener("mouseover", fl_ClickToGoToAndPlayFromFrame_3.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_3()
		{
		this.bb.gotoAndPlay(2);
		}
		
		this.bt2.addEventListener("mouseout", fl_ClickToGoToAndPlayFromFrame_4.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_4()
		{
		this.bb.gotoAndPlay(0);
		}
		
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 6 copy
	this.kursor = new lib.Symbol23();
	this.kursor.parent = this;
	this.kursor.setTransform(734,145.5,1,1,0,0,0,26,28.5);

	this.timeline.addTween(cjs.Tween.get(this.kursor).wait(1));

	// Layer 10
	this.instance = new lib.Symbol42();
	this.instance.parent = this;
	this.instance.setTransform(307.5,289,1,1,0,0,0,290.5,16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bear
	this.bb = new lib.Symbol4();
	this.bb.parent = this;
	this.bb.setTransform(195.5,179.2,1,1,0,0,0,152.5,87.5);

	this.timeline.addTween(cjs.Tween.get(this.bb).wait(1));

	// Layer 6
	this.kursor2 = new lib.Symbol24();
	this.kursor2.parent = this;
	this.kursor2.setTransform(560,240.5,1,1,0,0,0,26,28.5);

	this.timeline.addTween(cjs.Tween.get(this.kursor2).wait(1));

	// Layer 5
	this.instance_1 = new lib.logo();
	this.instance_1.parent = this;
	this.instance_1.setTransform(32,9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 4
	this.instance_2 = new lib.Symbol2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(398.5,45.5,1,1,0,0,0,166.5,31.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Layer 3
	this.bt1 = new lib.Symbol30();
	this.bt1.parent = this;
	this.bt1.setTransform(479,219,1,1,0,0,0,92,23);
	new cjs.ButtonHelper(this.bt1, 0, 1, 2, false, new lib.Symbol30(), 3);

	this.bt2 = new lib.Symbol29();
	this.bt2.parent = this;
	this.bt2.setTransform(479,148.5,1,1,0,0,0,92,22.5);
	new cjs.ButtonHelper(this.bt2, 0, 1, 2, false, new lib.Symbol29(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bt2},{t:this.bt1}]}).wait(1));

	// Layer 1
	this.instance_3 = new lib.Symbol1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(300,168.5,1,1,0,0,0,322,208.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-261.6,84.1,2545.6,443);
// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/back.jpg", id:"back"},
		{src:"images/button_green.png", id:"button_green"},
		{src:"images/button_orange.png", id:"button_orange"},
		{src:"images/cursor.png", id:"cursor"},
		{src:"images/graph.png", id:"graph"},
		{src:"images/Layer1.png", id:"Layer1"},
		{src:"images/Layer10.png", id:"Layer10"},
		{src:"images/Layer11.png", id:"Layer11"},
		{src:"images/Layer12.png", id:"Layer12"},
		{src:"images/Layer13.png", id:"Layer13"},
		{src:"images/Layer14.png", id:"Layer14"},
		{src:"images/Layer15.png", id:"Layer15"},
		{src:"images/Layer16.png", id:"Layer16"},
		{src:"images/Layer17.png", id:"Layer17"},
		{src:"images/Layer18.png", id:"Layer18"},
		{src:"images/Layer19.png", id:"Layer19"},
		{src:"images/Layer5.png", id:"Layer5"},
		{src:"images/Layer6.png", id:"Layer6"},
		{src:"images/Layer7.png", id:"Layer7"},
		{src:"images/Layer8.png", id:"Layer8"},
		{src:"images/Layer9.png", id:"Layer9"},
		{src:"images/logo.png", id:"logo"},
		{src:"images/mmoney.png", id:"mmoney"},
		{src:"images/txt1000txt.png", id:"txt1000txt"},
		{src:"images/txt_strategy.png", id:"txt_strategy"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;