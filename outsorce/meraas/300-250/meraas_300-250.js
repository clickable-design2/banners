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



(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,181,38);


(lib.BWlogo = function() {
	this.initialize(img.BWlogo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,113,38);


(lib.core_logo = function() {
	this.initialize(img.core_logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,234,113);


(lib.Image1 = function() {
	this.initialize(img.Image1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,500);


(lib.Image2 = function() {
	this.initialize(img.Image2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,500);


(lib.Image3 = function() {
	this.initialize(img.Image3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,500);


(lib.Image41 = function() {
	this.initialize(img.Image41);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,500);


(lib.Image42 = function() {
	this.initialize(img.Image42);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,500);


(lib.Image43 = function() {
	this.initialize(img.Image43);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,500);


(lib.Meraaslogo = function() {
	this.initialize(img.Meraaslogo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,128);// helper functions:

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


(lib.Symbol39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgCBaQgIgDgEgHQgFgHgBgJQgCgJAAgLIAAhOIgWAAIAAgTIAWAAIAAgoIAYAAIAAAoIAmAAIAAATIgmAAIAABUQAAALAFAGQAEAHAKAAIALgBIAIgCIAFASIgNAEIgPABQgMAAgHgEg");
	this.shape.setTransform(195.1,17.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AAlBLIAAhbQAAgUgHgIQgEgEgFgCQgGgCgHAAQgIAAgHACQgIADgHAGQgHAGgDAHQgEAHAAALIAABVIgZAAIAAiQIAZAAIAAAWQAKgOANgGQANgHANAAQAZAAAMAOQAMANAAAaIAABgg");
	this.shape_1.setTransform(182.2,19.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgaBIQgNgFgIgKQgSgUAAgkQAAgSAFgOQAFgOAJgKQAJgKANgGQAMgFAOAAQARAAAMAFQAMAGAIAKQAIAJADAMQAEANAAAQIAAALIhqAAQAAALADAJQADAKAFAHQAGAGAHAEQAJAEAJABQARgBAJgGQAKgHAGgPIAUAJQgDAIgGAHQgEAHgIAFQgHAGgKADQgLADgNAAQgPAAgNgFgAAqgLQAAgKgCgJQgDgIgEgGQgGgGgHgEQgIgDgKAAQgIAAgIADQgIADgFAFQgLANgCAWIBSAAIAAAAg");
	this.shape_2.setTransform(166.2,19.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgVBlQgKgDgIgFQgIgFgFgGQgFgHgDgJIAUgJQAHANAJAHQAFADAHACQAGABAIABQALAAAJgDQAHgEAFgGQAFgHACgIQABgKAAgMIAAgPQgIALgLAHQgHADgHABQgHACgGAAQgQAAgLgFQgMgGgIgKQgIgKgDgNQgEgNAAgPQAAgQAEgOQAFgNAJgKQAIgJALgGQANgFAOgBQAMAAAMAGQAMAFAJANIAAgTIAYAAIAAB4QAAATgDAQQgCAOgIALQgDAFgFAEIgLAHQgNAFgTAAQgNAAgLgCgAgOhPQgJADgFAGQgGAHgDAKQgDAKAAAOQAAAPADAKQAEAJAFAGQAGAGAIADQAHADAHAAQAJAAAIgDQAIgDAGgGQAFgHAEgIQADgJAAgNIAAgFQAAgOgDgKQgEgJgFgGQgGgHgIgCQgHgDgJAAQgIAAgHADg");
	this.shape_3.setTransform(149.7,22.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("ABEBkIgWg4IhcAAIgWA4IgbAAIBTjHIAZAAIBTDHgAAlAWIglhdIglBdIBKAAg");
	this.shape_4.setTransform(131.6,16.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgaBIQgMgFgKgKQgRgUAAgkQAAgSAFgOQAFgOAJgKQAJgKANgGQANgFAOAAQAQAAAMAFQAMAGAIAKQAHAJAEAMQAEANAAAQIAAALIhqAAQAAALACAJQADAKAGAHQAFAGAJAEQAHAEALABQAQgBAKgGQAIgHAGgPIAVAJQgDAIgFAHQgGAHgHAFQgIAGgKADQgJADgNAAQgQAAgNgFgAAqgLQAAgKgCgJQgDgIgFgGQgEgGgIgEQgHgDgLAAQgIAAgIADQgHADgGAFQgLANgCAWIBSAAIAAAAg");
	this.shape_5.setTransform(107.6,19.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgMBIIg6iQIAcAAIArB1IArh1IAbAAIg6CQg");
	this.shape_6.setTransform(92.3,19.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AgLBkIAAiQIAXAAIAACQgAgMhGIAAgdIAZAAIAAAdg");
	this.shape_7.setTransform(81.8,16.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AgRBLQgKgCgIgDQgJgEgGgFQgGgFgEgHIAPgPQAJALAMAHQAMAFAPABQAKAAAGgCQAGgCAEgDQAIgGAAgLQgBgJgFgGQgFgGgPgCIgWgDQgWgEgLgIQgHgFgDgIQgDgGAAgKQAAgKAFgIQAEgIAHgFQAIgGAKgDQALgDAMAAQAPAAAJADQALAEAHAFQAGAEAFAHQAEAGABAFIgTAJQgFgLgJgGQgEgDgHgCQgFgCgJABQgIAAgHABQgIACgDAEQgEADgCADQgCAEAAAEQAAAJAGAGQAFAFARACIATADQANADAJADQAJADAGAFQAMAKAAATQAAATgPAMQgPANgcAAQgLAAgKgCg");
	this.shape_8.setTransform(71.3,19.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AgiBHQgJgDgFgHQgGgGgDgKQgCgKAAgNIAAhgIAYAAIAABbQAAAUAHAIQAGAJAPAAQAPAAANgMQAHgGAEgHQAEgHAAgLIAAhVIAYAAIAACQIgYAAIAAgWQgLAOgMAGIgNAFQgFACgIAAQgMAAgJgEg");
	this.shape_9.setTransform(56.2,19.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AgLBkIAAjHIAXAAIAADHg");
	this.shape_10.setTransform(45.2,16.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AgZBIQgNgFgIgLQgRgUAAgkQAAgQAEgOQAFgOAJgLQAJgKANgFQANgGAPAAQAMAAAJAEQAKADAIAGQAGAGAFAIQAEAHADAJIgWAIIgFgMQgDgFgFgEQgEgEgFgDQgGgDgIABQgKAAgJAEQgHAEgFAIQgGAHgCALQgCALAAAKQAAAMACAKQACALAFAHQAFAIAIAFQAIAEALAAQAQAAAJgIIAIgJIAHgPIAUAJQgDAJgFAIQgFAIgHAFQgIAHgKACQgKAEgNAAQgPAAgNgFg");
	this.shape_11.setTransform(34.3,19.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AAnBIIgng6IgnA6IgbAAIA1hKIgxhGIAdAAIAhA0IAkg0IAaAAIgvBFIA1BLg");
	this.shape_12.setTransform(19.4,19.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AhFBkIAAjHICIAAIAAAXIhuAAIAAA/IBoAAIAAAWIhoAAIAABEIBxAAIAAAXg");
	this.shape_13.setTransform(4.2,16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol39, new cjs.Rectangle(-7,-4.2,209,39.9), null);


(lib.Symbol38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.core_logo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol38, new cjs.Rectangle(0,0,234,113), null);


(lib.Symbol36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgZBwQAIgNAFgOQAFgOADgNQAGgcAAgeQAAgdgGgbQgDgOgFgNQgFgOgIgNIAWAAQAGALAGANQAFANAEAPQAEAOACAPQACAPAAAOQAAAPgCAQQgCAPgEAOQgIAdgNAXg");
	this.shape.setTransform(306.8,18.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgcBaQANgqAPgoQAKgZAagzIhgAAIAAgVIB5AAIAAATQgaA0gLAZQgUA2gGAdg");
	this.shape_1.setTransform(296.5,17.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag6BcIAAgSIAVgTIAYgVIAUgTQAKgJAGgIQAGgIADgJQADgIAAgKQABgIgDgGQgCgHgFgEQgJgJgPAAQgHAAgHACQgGACgGAEQgEAEgDAGQgFAFgBAHIgVgGQADgIAEgIQAFgIAIgHQAHgGALgEQAKgDAMAAQAOAAALAEQAKADAHAHQAIAHADAKQAFAKAAALQgBAMgDAKQgDAKgHAJQgHAKgKAKIgZAXIgOANIgQANIBWAAIAAAVg");
	this.shape_2.setTransform(282.3,16.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag6BcIAAgSIAWgTIAWgVIAWgTQAIgJAHgIQAGgIADgJQADgIABgKQgBgIgCgGQgCgHgEgEQgKgJgPAAQgIAAgGACQgGACgGAEQgEAEgEAGQgDAFgCAHIgWgGQAEgIAEgIQAGgIAHgHQAHgGALgEQAKgDAMAAQAOAAALAEQAKADAIAHQAHAHADAKQAEAKABALQAAAMgEAKQgDAKgHAJQgHAKgKAKIgZAXIgOANIgQANIBWAAIAAAVg");
	this.shape_3.setTransform(267.7,16.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgcBaQANgqAPgoQAKgZAagzIhgAAIAAgVIB5AAIAAATQgaA0gLAZQgUA2gGAdg");
	this.shape_4.setTransform(253.1,17.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgYBbQgMgFgHgHQgHgHgFgIQgEgJgCgHIAUgHIAGANQAEAGAFAFQAFAFAHACQAHACAJABQAJAAAHgCQAHgDAFgEQAKgJAAgRQAAgSgKgIQgKgHgRAAIgTAAIAAgUIATAAQAPAAAJgIQAEgEACgGQACgFABgJQgBgOgIgHQgFgDgGgDQgHgCgIAAQgHAAgGACQgHADgEADQgLAIgFAPIgUgGQADgJAFgIQAFgHAGgGQAIgHAKgEQALgEANABQAOAAALADQAKAEAIAGQAGAGAEAJQADAIAAAKQABAIgCAGQgBAHgEAEQgGAKgOAIQAIADAHADQAFAEAEAGQAGALABAQQAAAMgEAKQgEALgHAHQgHAHgMAFQgMADgPAAQgPAAgLgDg");
	this.shape_5.setTransform(238.6,17.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgdBXQgHgEgEgFQgFgEgDgGQgIgMgCgPQgDgOAAgPQAAgfAGgUIAGgTIAJgOIAKgKQAFgEAGgCQANgGAMABQALAAAJACQAJADAHAFQAGAFAFAHQAEAHACAHIgUAIQgFgMgIgGQgHgHgNAAQgKAAgHAEQgIADgGAJQgGAJgEAOQgDANgBAVIAKgLQAFgEAFgDQAMgGAPABQAOgBAKAFQALAEAGAJQAHAHADALQADAKAAAMQAAAOgEALQgEAMgJAIQgIAIgLAFQgMADgOAAQgRAAgMgHgAgLgEQgHADgHAEQgFAGgDAHQgDAJAAALQABAIACAHQACAHAFAGQAFAFAHAEQAHADAHAAQAJgBAHgCQAIgDAFgFQALgLAAgUQAAgIgCgHQgCgJgEgFQgFgFgHgDQgGgCgLAAQgHAAgHABg");
	this.shape_6.setTransform(223.8,17.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgbBZQgMgGgJgLQgIgLgFgTQgEgRAAgZQAAgPAFgaIAGgRQADgHAEgFIAKgLIALgHQAMgFAPAAQAPAAAMAFIALAHIAKALQAIALAFASQAEAaAAAPQAAAZgEARIgGARIgHANIgKAKQgFAEgGADQgNAFgPAAQgPAAgMgFgAgShEQgJAFgEAJQgFALgCANQgDAOAAAQQAAASADANQACAOAFAKQAEAJAJAFQAIAGAKAAQAMAAAIgGQAIgFAFgJQAEgKADgOQACgOAAgRQAAgQgCgOQgDgNgEgLQgFgJgIgFQgIgFgMAAQgKAAgIAFg");
	this.shape_7.setTransform(202.6,17.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgbBZQgMgGgJgLQgIgLgFgTQgEgRAAgZQAAgPAFgaIAGgRQADgHAEgFIAKgLIALgHQAMgFAPAAQAPAAAMAFIALAHIAKALQAIALAFASQAEAaAAAPQAAAZgEARIgGARIgHANIgKAKQgFAEgGADQgNAFgPAAQgPAAgMgFgAgShEQgJAFgEAJQgFALgCANQgDAOAAAQQAAASADANQACAOAFAKQAEAJAJAFQAIAGAKAAQAMAAAIgGQAIgFAFgJQAEgKADgOQACgOAAgRQAAgQgCgOQgDgNgEgLQgFgJgIgFQgIgFgMAAQgKAAgIAFg");
	this.shape_8.setTransform(187.2,17.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgcBbQgMgEgJgHQgIgHgEgKQgEgKAAgMQAAgJADgIQAEgGAEgGQAFgFAGgDIALgFQgMgEgIgLQgIgLAAgQQAAgLAEgJQAEgJAHgHQAIgHALgEQAMgEAOABQAQAAALADQAMAEAHAHQAIAHADAJQAEAJAAALQAAAQgIALQgIALgMADIAMAFIAKAJQAFAFADAHQADAHAAAKQAAAMgEAKQgEAKgIAHQgIAHgNAEQgMADgRAAQgPAAgNgDgAgTALQgIACgFAEQgFAFgCAGQgDAHAAAGQAAAJADAGQACAGAGAFQAFAEAIADQAIACAKAAQAMAAAIgCQAIgDAFgEQAKgKAAgQQAAgHgCgGQgCgGgFgFQgFgEgIgCQgJgCgMgBQgLAAgIADgAgRhJQgHADgFAEQgEAFgDAGQgCAGAAAHQAAAPAKAJQAEAEAIACQAHACAJAAQAUAAAKgIQAEgEADgHQACgGAAgHQAAgHgCgGQgCgGgFgFQgFgEgHgDQgHgCgLAAQgJAAgIACg");
	this.shape_9.setTransform(171.9,17.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAEBwQgGgLgGgNQgFgOgEgOQgIgdAAgfQAAgeAIgcQAEgPAFgNQAGgNAGgLIAWAAQgPAagHAcQgFAbAAAdQAAAeAFAcIAJAbQAFAOAIANg");
	this.shape_10.setTransform(161.4,18.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgWBfQgNgDgJgEQgKgFgIgHQgIgHgFgJIARgPQAGAIAGAGQAHAGAIAFQAHADAJACQAJACAKAAQANAAAJgDQAJgCAFgEQAGgFACgHQADgFAAgIQAAgLgIgIQgJgJgVgEIgZgEQgOgCgLgFQgKgCgIgHQgHgGgEgJQgEgIAAgMQAAgNAFgJQAGgKAJgHQAKgHANgDQANgEAPAAQAQAAANAFQAMADAJAGQAJAGAFAHQAFAIACAHIgVAJQgDgGgEgGQgEgGgGgEQgMgIgVAAQgMAAgJACQgJADgGAEQgGAEgCAFQgDAGAAAGQAAAHACAEQACAGAEADQAEAEAIADQAHADAKABIAcAFQAdAFAOAMQAHAHAEAJQADAIAAAMQAAALgEAKQgFAKgJAHQgJAIgOAFQgNADgSAAQgOAAgMgCg");
	this.shape_11.setTransform(142.8,16.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AA/BdIgVg0IhVAAIgUA0IgZAAIBNi5IAXAAIBNC5gAAiAUIgihWIgiBWIBEAAg");
	this.shape_12.setTransform(125,16.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AA/BdIgVg0IhVAAIgUA0IgZAAIBNi5IAXAAIBNC5gAAiAUIgihWIgiBWIBEAAg");
	this.shape_13.setTransform(106.6,16.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAtBdIgjhOIgOABIgrAAIAABNIgYAAIAAi5IBEAAQASAAANAEQAOAEAIAHQAIAHADAKQADAJAAAMQABAIgCAHQgCAIgEAHQgHAMgRAHIAnBTgAgvgEIArAAQAMAAAJgCQAJgCAEgFQAFgEADgHQACgGAAgJQAAgIgCgGQgDgGgFgEQgFgEgIgDQgJgCgMAAIgrAAg");
	this.shape_14.setTransform(89.5,16.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AhABdIAAi5IB+AAIAAAVIhmAAIAAA6IBhAAIAAAVIhhAAIAABAIBpAAIAAAVg");
	this.shape_15.setTransform(72.7,16.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("ABIBdIAAiUIg/CUIgSAAIg+iTIAACTIgWAAIAAi5IAdAAIBACcIBCicIAcAAIAAC5g");
	this.shape_16.setTransform(52.7,16.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgbBZQgMgGgJgLQgIgLgFgTQgEgRAAgZQAAgPAFgaIAGgRQADgHAEgFIAKgLIALgHQAMgFAPAAQAPAAAMAFIALAHIAKALQAIALAFASQAEAaAAAPQAAAZgEARIgGARIgHANIgKAKQgFAEgGADQgNAFgPAAQgPAAgMgFgAgShEQgJAFgEAJQgFALgCANQgDAOAAAQQAAASADANQACAOAFAKQAEAJAJAFQAIAGAKAAQAMAAAIgGQAIgFAFgJQAEgKADgOQACgOAAgRQAAgQgCgOQgDgNgEgLQgFgJgIgFQgIgFgMAAQgKAAgIAFg");
	this.shape_17.setTransform(27.8,17.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgbBZQgMgGgJgLQgIgLgFgTQgEgRAAgZQAAgPAFgaIAGgRQADgHAEgFIAKgLIALgHQAMgFAPAAQAPAAAMAFIALAHIAKALQAIALAFASQAEAaAAAPQAAAZgEARIgGARIgHANIgKAKQgFAEgGADQgNAFgPAAQgPAAgMgFgAgShEQgJAFgEAJQgFALgCANQgDAOAAAQQAAASADANQACAOAFAKQAEAJAJAFQAIAGAKAAQAMAAAIgGQAIgFAFgJQAEgKADgOQACgOAAgRQAAgQgCgOQgDgNgEgLQgFgJgIgFQgIgFgMAAQgKAAgIAFg");
	this.shape_18.setTransform(12.4,17.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgcBbQgMgEgJgHQgIgHgEgKQgEgKAAgMQAAgJADgIQAEgGAEgGQAFgFAGgDIALgFQgMgEgIgLQgIgLAAgQQAAgLAEgJQAEgJAHgHQAIgHALgEQAMgEAOABQAQAAALADQAMAEAHAHQAIAHADAJQAEAJAAALQAAAQgIALQgIALgMADIAMAFIAKAJQAFAFADAHQADAHAAAKQAAAMgEAKQgEAKgIAHQgIAHgNAEQgMADgRAAQgPAAgNgDgAgTALQgIACgFAEQgFAFgCAGQgDAHAAAGQAAAJADAGQACAGAGAFQAFAEAIADQAIACAKAAQAMAAAIgCQAIgDAFgEQAKgKAAgQQAAgHgCgGQgCgGgFgFQgFgEgIgCQgJgCgMgBQgLAAgIADgAgRhJQgHADgFAEQgEAFgDAGQgCAGAAAHQAAAPAKAJQAEAEAIACQAHACAJAAQAUAAAKgIQAEgEADgHQACgGAAgHQAAgHgCgGQgCgGgFgFQgFgEgHgDQgHgCgLAAQgJAAgIACg");
	this.shape_19.setTransform(-2.9,17.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol36, new cjs.Rectangle(-12.6,-2.8,325.6,37.3), null);


(lib.Symbol35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap1();
	this.instance.parent = this;
	this.instance.setTransform(40,31);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().rr(-129.5,-39,259,78,19.5);
	this.shape.setTransform(129.6,53.3,0.826,0.826);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol35, new cjs.Rectangle(22.6,21.2,213.9,64.4), null);


(lib.Symbol34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image43();
	this.instance.parent = this;
	this.instance.setTransform(-4,-33,0.62,0.62);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol34, new cjs.Rectangle(-4,-33,310,310), null);


(lib.Symbol33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image42();
	this.instance.parent = this;
	this.instance.setTransform(0,-59,0.602,0.602);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol33, new cjs.Rectangle(0,-59,301.3,301.3), null);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image41();
	this.instance.parent = this;
	this.instance.setTransform(0,-20,0.604,0.604);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol32, new cjs.Rectangle(0,-20,302,302), null);


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image3();
	this.instance.parent = this;
	this.instance.setTransform(-24,-44,1.242,1.242);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol31, new cjs.Rectangle(-24,-44,621.1,621.1), null);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image2();
	this.instance.parent = this;
	this.instance.setTransform(-22,-4,1.234,1.234);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol30, new cjs.Rectangle(-22,-4,617.2,617.2), null);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image1();
	this.instance.parent = this;
	this.instance.setTransform(-19,0,1.201,1.201);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol29, new cjs.Rectangle(-19,0,600.6,600.6), null);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAlBkIAAhbQAAgUgHgIQgEgEgFgCQgGgCgHAAQgIAAgHACQgIAEgHAFQgHAHgDAHQgEAFAAAMIAABVIgZAAIAAjHIAZAAIAABNQAKgOANgGQANgHANAAQAZAAAMAOQAMANAAAZIAABhg");
	this.shape.setTransform(117.9,19.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgZBIQgNgFgIgKQgSgVABgjQgBgRAFgOQAFgPAJgKQAJgJANgGQANgGAPAAQAMAAAKAEQAKADAHAGQAGAGAFAIQAEAHADAJIgWAIIgFgMQgDgFgFgFQgEgEgFgCQgHgCgHgBQgKABgJAEQgHAEgFAIQgGAHgCALQgCAKAAALQAAAMACAKQACALAFAHQAFAIAIAEQAIAFALAAQAQAAAJgIIAIgJIAHgPIAUAJQgDAJgFAIQgFAHgHAHQgHAFgKAEQgLADgNAAQgQAAgMgFg");
	this.shape_1.setTransform(102.1,22.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AguBBQgIgFgDgIQgDgIgBgLQABgPAGgJQAGgJALgFQAKgFANgDQANgBANgBIAZgBIAAgGQAAgIgBgHQgCgHgFgEQgHgIgSAAQgIAAgFACQgHABgEADQgJAGgEAKIgUgJQAGgOANgJQAIgFAJgCQALgDALAAQAQABAKAEQALAEAHAGQAGAIADAJQAEALAAANIAABdIgYAAIAAgUQgIAJgMAIQgMAGgRAAQgWAAgNgLgAAOABQgOABgJACQgLACgFAEQgGAEgCAFQgDAGABAIQAAAKAGAHQADADAGACQAFACAIgBQARABALgJQARgJgBgWIAAgRg");
	this.shape_2.setTransform(86.4,22);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgaBIQgNgFgJgKQgRgUAAgkQAAgRAFgPQAFgPAJgKQAJgKANgEQAMgGAOAAQARAAAMAGQAMAFAIAJQAHAKAFANQADANAAAPIAAALIhrAAQAAALADAJQADAKAGAGQAFAIAJADQAHAFAKAAQARAAAKgIQAJgGAGgOIAUAIQgEAIgEAHQgFAHgIAGQgIAFgJADQgKADgOAAQgPAAgNgFgAAqgLQAAgLgDgIQgBgIgGgGQgEgGgIgEQgHgDgLAAQgIAAgIADQgHADgGAFQgLAMgCAXIBSAAIAAAAg");
	this.shape_3.setTransform(71.3,22.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhLBkIAAjHIBJAAQAUAAAOAEQAOAEAIAGQAJAIADAIQAEAKAAAMQAAAGgCAHIgFALQgHALgPAHQATAGAIAOQAIAMAAAPQAAAMgEALQgEALgJAHQgJAIgOAFQgOAEgVAAgAgxBPIAxAAQAOAAAKgDQAKgCAGgEQAFgGADgGQACgHAAgIQAAgTgLgIQgFgFgKgCQgJgCgNAAIgzAAgAgxgPIAxAAQAMAAAIgCQAJgBAFgFQAFgDADgHQACgFAAgJQAAgIgCgGQgDgGgGgEQgLgHgaAAIgtAAg");
	this.shape_4.setTransform(54.6,19.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgaBIQgNgFgIgKQgSgUAAgkQAAgRAFgPQAFgPAJgKQAJgKANgEQANgGANAAQARAAAMAGQAMAFAIAJQAIAKADANQAEANAAAPIAAALIhrAAQABALADAJQADAKAFAGQAGAIAHADQAJAFAJAAQARAAAJgIQAJgGAHgOIAUAIQgEAIgFAHQgEAHgIAGQgHAFgKADQgLADgNAAQgPAAgNgFgAAqgLQAAgLgDgIQgCgIgEgGQgGgGgHgEQgHgDgLAAQgJAAgHADQgIADgFAFQgLAMgCAXIBSAAIAAAAg");
	this.shape_5.setTransform(30.7,22.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAlBkIAAhbQAAgUgHgIQgEgEgFgCQgGgCgHAAQgIAAgHACQgIAEgHAFQgHAHgDAHQgEAFAAAMIAABVIgZAAIAAjHIAZAAIAABNQAKgOANgGQANgHANAAQAZAAAMAOQAMANAAAZIAABhg");
	this.shape_6.setTransform(14.7,19.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgCBaQgIgDgEgHQgFgHgBgJQgCgJAAgLIAAhOIgWAAIAAgTIAWAAIAAgoIAYAAIAAAoIAmAAIAAATIgmAAIAABUQAAALAFAGQAEAHAKAAIALgBIAIgCIAFASIgNAEIgPABQgMAAgHgEg");
	this.shape_7.setTransform(2,20.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol27, new cjs.Rectangle(-5,-1.6,133,39.9), null);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgCBaQgIgDgEgHQgFgHgBgJQgCgJAAgLIAAhOIgWAAIAAgTIAWAAIAAgoIAYAAIAAAoIAmAAIAAATIgmAAIAABUQAAALAFAGQAEAHAKAAIALgBIAIgCIAFASIgNAEIgPABQgMAAgHgEg");
	this.shape.setTransform(276.4,26.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgvBCQgGgGgEgIQgEgIAAgLQAAgPAHgJQAGgJAKgEQALgGAOgCQANgCANgBIAYgBIAAgFQAAgJgCgIQgCgGgDgEQgJgIgRAAQgHAAgHABQgFACgFADQgJAGgEAKIgUgJQAFgOAOgJQAIgEAJgDQAKgDAMABQAPAAAMADQAKAFAHAGQAHAIADAJQACALAAANIAABdIgXAAIAAgUQgIAJgMAHQgMAIgRAAQgWgBgOgKgAAOABQgOABgKACQgKACgFAEQgGAEgCAFQgCAGgBAIQABALAGAGQAEADAFACQAFACAIAAQARgBAMgHQAPgKAAgXIAAgQg");
	this.shape_1.setTransform(263.5,28.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgaBIQgNgFgIgKQgSgUAAgkQAAgRAFgPQAFgPAJgJQAJgLANgEQAMgGAOAAQARAAAMAGQAMAFAIAKQAIAIADAOQAEANAAAPIAAALIhqAAQAAALADAKQADAJAFAHQAGAGAHAFQAJADAJAAQARABAJgIQAKgGAFgPIAVAJQgDAIgGAHQgEAHgIAFQgHAGgKADQgLADgNAAQgPAAgNgFgAAqgLQAAgKgCgJQgDgIgEgGQgGgGgHgDQgIgEgKAAQgIAAgIADQgIADgFAGQgLAMgCAWIBSAAIAAAAg");
	this.shape_2.setTransform(242.3,28.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgCBaQgIgDgEgHQgFgHgBgJQgCgJAAgLIAAhOIgWAAIAAgTIAWAAIAAgoIAYAAIAAAoIAmAAIAAATIgmAAIAABUQAAALAFAGQAEAHAKAAIALgBIAIgCIAFASIgNAEIgPABQgMAAgHgEg");
	this.shape_3.setTransform(229.5,26.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgLBkIAAiQIAXAAIAACQgAgMhHIAAgcIAZAAIAAAcg");
	this.shape_4.setTransform(221.4,25.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgiBHQgJgDgFgHQgGgGgDgKQgCgKAAgNIAAhgIAYAAIAABbQAAAUAHAIQAGAJAPAAQAPAAANgMQAHgGAEgHQAEgHAAgLIAAhVIAYAAIAACQIgYAAIAAgWQgLAOgMAGIgNAFQgFACgIAAQgMAAgJgEg");
	this.shape_5.setTransform(210.4,28.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgYBnQgNgEgLgEQgKgGgJgIQgIgHgGgKIATgQQAGAJAHAGQAHAHAIAFQAIADAKACQAKADALAAQANAAAKgDQAJgDAGgFQAGgFADgGQADgGAAgIQAAgNgJgJQgJgJgXgEIgbgFQgPgCgLgFQgMgDgIgHQgIgGgEgKQgFgJAAgMQAAgPAGgKQAGgKAKgIQALgGAOgEQAOgEAQAAQASAAANAEQAOAEAJAGQAJAHAGAIQAGAIACAIIgWAKQgEgIgFgGQgEgGgHgFQgMgIgXAAQgNAAgKACQgKACgGAFQgGAFgDAFQgDAHAAAHQAAAHADAFQACAFAEAEQAFAEAIADQAHADALABIAfAGQAfAGAPAMQAIAIAEAJQADAJAAAMQAAANgFALQgFAKgJAJQgKAIgPAEQgPAFgTAAQgPAAgNgCg");
	this.shape_6.setTransform(193,25.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgRBLQgKgBgIgEQgIgEgHgFQgGgFgEgIIAOgOQAKALAMAHQAMAFAQAAQAJABAGgCQAGgCAEgDQAIgHAAgJQAAgKgGgGQgFgGgPgCIgWgDQgWgEgLgJQgHgEgDgHQgDgIAAgJQAAgKAFgIQADgIAJgFQAHgGAKgDQALgDAMAAQAPAAAJAEQALADAHAFQAGAFAEAGQAEAGACAFIgTAJQgFgLgJgGQgEgEgHgBQgFgCgJAAQgJABgGACQgIABgDADQgEADgCAEQgCAEAAAEQAAAJAGAFQAFAGARACIATAEQANACAJADQAJAEAGADQAMAMgBARQAAAVgOALQgPANgcAAQgLAAgKgCg");
	this.shape_7.setTransform(170.2,28.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgaBIQgNgFgJgKQgRgUAAgkQAAgRAFgPQAFgPAJgJQAJgLANgEQAMgGAPAAQAQAAAMAGQAMAFAIAKQAHAIAFAOQADANAAAPIAAALIhrAAQAAALADAKQADAJAGAHQAFAGAJAFQAHADALAAQAQABAKgIQAJgGAGgPIAUAJQgEAIgEAHQgFAHgIAFQgIAGgJADQgKADgNAAQgQAAgNgFgAAqgLQAAgKgDgJQgBgIgGgGQgEgGgIgDQgHgEgLAAQgIAAgIADQgHADgGAGQgLAMgCAWIBSAAIAAAAg");
	this.shape_8.setTransform(155,28.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgLBkIAAjHIAXAAIAADHg");
	this.shape_9.setTransform(143.9,25.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AguBCQgIgGgDgIQgDgIgBgLQABgPAGgJQAGgJALgEQAKgGANgCQANgCANgBIAZgBIAAgFQAAgJgCgIQgBgGgFgEQgHgIgSAAQgIAAgFABQgGACgFADQgIAGgFAKIgUgJQAFgOAOgJQAHgEAKgDQALgDALABQAPAAAMADQAKAFAHAGQAGAIAEAJQADALAAANIAABdIgYAAIAAgUQgIAJgMAHQgMAIgRAAQgWgBgNgKgAAOABQgOABgJACQgLACgFAEQgGAEgCAFQgCAGgBAIQABALAGAGQADADAGACQAFACAIAAQARgBALgHQARgKgBgXIAAgQg");
	this.shape_10.setTransform(132.8,28.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgYBnQgNgEgLgEQgKgGgJgIQgIgHgGgKIATgQQAGAJAHAGQAHAHAIAFQAIADAKACQAKADALAAQANAAAKgDQAJgDAGgFQAGgFADgGQADgGAAgIQAAgNgJgJQgJgJgXgEIgbgFQgPgCgLgFQgMgDgIgHQgIgGgEgKQgFgJAAgMQAAgPAGgKQAGgKAKgIQALgGAOgEQAOgEAQAAQASAAANAEQAOAEAJAGQAJAHAGAIQAGAIACAIIgWAKQgEgIgFgGQgEgGgHgFQgMgIgXAAQgNAAgKACQgKACgGAFQgGAFgDAFQgDAHAAAHQAAAHADAFQACAFAEAEQAFAEAIADQAHADALABIAfAGQAfAGAPAMQAIAIAEAJQADAJAAAMQAAANgFALQgFAKgJAJQgKAIgPAEQgPAFgTAAQgPAAgNgCg");
	this.shape_11.setTransform(116.1,25.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgaBIQgNgFgIgKQgSgUAAgkQAAgRAFgPQAFgPAJgJQAJgLANgEQANgGANAAQARAAAMAGQAMAFAIAKQAIAIAEAOQADANAAAPIAAALIhrAAQABALADAKQADAJAFAHQAGAGAHAFQAJADAJAAQARABAJgIQAJgGAHgPIAUAJQgEAIgFAHQgEAHgIAFQgHAGgKADQgLADgNAAQgPAAgNgFgAAqgLQAAgKgDgJQgCgIgEgGQgGgGgHgDQgHgEgLAAQgJAAgHADQgIADgFAGQgLAMgCAWIBSAAIAAAAg");
	this.shape_12.setTransform(92.8,28.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAlBkIAAhcQAAgSgHgJQgEgEgFgCQgGgCgHAAQgIAAgHACQgIAEgHAFQgHAGgDAIQgEAFAAAMIAABVIgZAAIAAjHIAZAAIAABNQAKgOANgGQANgGANAAQAZAAAMANQAMAOAAAZIAABgg");
	this.shape_13.setTransform(76.8,25.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgCBaQgIgDgEgHQgFgHgBgJQgCgJAAgLIAAhOIgWAAIAAgTIAWAAIAAgoIAYAAIAAAoIAmAAIAAATIgmAAIAABUQAAALAFAGQAEAHAKAAIALgBIAIgCIAFASIgNAEIgPABQgMAAgHgEg");
	this.shape_14.setTransform(64.1,26.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgCBaQgIgDgEgHQgFgHgBgJQgCgJAAgLIAAhOIgWAAIAAgTIAWAAIAAgoIAYAAIAAAoIAmAAIAAATIgmAAIAABUQAAALAFAGQAEAHAKAAIALgBIAIgCIAFASIgNAEIgPABQgMAAgHgEg");
	this.shape_15.setTransform(48.2,26.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgLBkIAAiQIAXAAIAACQgAgMhHIAAgcIAZAAIAAAcg");
	this.shape_16.setTransform(40.1,25.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgRBLQgKgBgIgEQgJgEgGgFQgGgFgFgIIAQgOQAJALAMAHQAMAFAPAAQAKABAGgCQAGgCAEgDQAHgHABgJQgBgKgFgGQgFgGgPgCIgWgDQgWgEgLgJQgHgEgDgHQgDgIAAgJQAAgKAFgIQAEgIAHgFQAIgGAKgDQALgDAMAAQAPAAAKAEQAKADAHAFQAGAFAFAGQAEAGABAFIgUAJQgEgLgJgGQgEgEgHgBQgFgCgJAAQgIABgIACQgGABgEADQgEADgCAEQgCAEAAAEQAAAJAGAFQAGAGAPACIAUAEQANACAJADQAJAEAGADQAMAMAAARQAAAVgPALQgPANgcAAQgLAAgKgCg");
	this.shape_17.setTransform(29.6,28.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgLBkIAAiQIAXAAIAACQgAgMhHIAAgcIAZAAIAAAcg");
	this.shape_18.setTransform(19.2,25.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgLBkIhSjHIAeAAIA/CnIBCinIAcAAIhRDHg");
	this.shape_19.setTransform(6.3,25.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol26, new cjs.Rectangle(-5.6,4.5,288.8,39.9), null);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgeBiQgOgEgJgIQgJgHgEgLQgEgKAAgNQAAgLADgHQAEgIAFgGQAFgGAHgDIALgFQgMgEgJgMQgIgMAAgSQAAgMAEgJQADgKAJgHQAIgIAMgDQAMgFAQAAQARAAAMAFQANADAIAHQAIAIAEAKQADAJAAAMQAAASgIAMQgJALgMAEIAMAFQAGAEAFAGQAFAFAEAJQADAHAAALQAAANgEAKQgEALgJAHQgJAIgOAEQgNAEgSAAQgRAAgNgEgAgVAMQgIADgGAEQgFAFgDAGQgCAHAAAIQAAAIADAHQACAGAGAGQAGAFAIACQAJADALAAQAMAAAJgDQAJgCAFgFQALgKAAgRQAAgIgCgHQgCgGgGgFQgFgFgJgCQgJgDgNAAQgMAAgJADgAgShOQgIADgFAFQgFAFgCAGQgDAHAAAGQAAASAKAIQAFAFAIACQAIACAKAAQAWAAAKgJQAFgEACgHQADgGAAgJQAAgHgCgGQgDgHgFgEQgFgFgIgDQgIgDgLAAQgKAAgIADg");
	this.shape.setTransform(118.7,23.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAPBhIAAimIgsAbIgKgSIA4gkIAXAAIAADBg");
	this.shape_1.setTransform(102.7,23.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgdBgQgNgGgJgNQgKgLgEgUQgFgTAAgaQAAgRAFgcIAGgSQAEgIAEgGQAFgGAGgFQAFgFAHgDQANgGAQAAQAQAAANAGQAHADAFAFQAGAFAEAGQAJAMAFAUQAFAcAAARQAAAagFATIgGASQgDAHgFAGQgEAHgGAEQgGAFgGADQgOAGgQAAQgQAAgNgGgAgUhJQgJAFgFAKQgFALgDAPQgCAPAAASQAAASACAPQADAPAFAKQAFAKAJAGQAJAFALAAQANAAAIgFQAJgGAFgKQAFgKACgPQADgPAAgSQAAgSgDgPQgCgPgFgLQgFgKgJgFQgIgGgNABQgLgBgJAGg");
	this.shape_2.setTransform(89.5,23.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag/BkIAAgUIAYgVIAZgVIAWgWQAKgKAGgIQAIgJACgJQAEgJAAgLQAAgJgDgGQgCgHgEgFQgKgJgRAAQgIAAgHACQgHACgGAEQgFAFgDAFQgEAGgCAIIgXgHQADgJAFgIQAGgIAIgIQAIgGALgEQALgFAOABQAOgBAMAFQAMAEAHAIQAIAHADALQAFAJAAANQAAANgEALQgDALgHAJQgIALgLALIgaAYIgQAPIgRAOIBcAAIAAAXg");
	this.shape_3.setTransform(73.3,23.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAPBhIAAimIgsAbIgKgSIA4gkIAXAAIAADBg");
	this.shape_4.setTransform(51.6,23.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAzBUQgWAMgdAAQgKAAgJgBQgLgCgIgEQgJgEgIgFQgHgFgHgGQgHgHgEgJQgFgIgEgJQgHgUAAgYQAAgZAHgTQAEgKAFgJQAFgHAGgHQANgOASgHQASgHAUAAQALAAAKACQAKABAJAEQARAHANAOQANAMAHAUQAEAKABALQACALAAAMQAAAagHAUQgEAKgGAIQgFAJgHAGIABAAIAZAdIgQAPgAgdhUQgNAFgKALQgIALgEAPQgFAPAAATQAAASAFAPQAEAPAIALQAKALANAGQANAGAQgBQAKAAAJgCQAIgCAIgDIAAgBIgZgdIAQgOIAaAdIAAAAQASgVAAgmQAAgTgFgPQgEgPgJgLQgJgLgNgFQgNgHgRAAQgQAAgNAHg");
	this.shape_5.setTransform(35.5,24.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAlBLIAAhbQAAgUgHgIQgEgEgFgCQgGgCgHAAQgIAAgHACQgIADgHAGQgHAGgDAHQgEAHAAALIAABVIgZAAIAAiQIAZAAIAAAWQAKgOANgGQANgHANAAQAZAAAMAOQAMANAAAaIAABgg");
	this.shape_6.setTransform(10.2,25.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgLBkIAAiQIAXAAIAACQgAgMhHIAAgcIAZAAIAAAcg");
	this.shape_7.setTransform(-1,23.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol25, new cjs.Rectangle(-6.2,2.3,135.3,39.9), null);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgaBIQgNgFgJgKQgRgUAAgkQAAgRAFgPQAFgPAJgJQAJgLANgEQAMgGAPAAQAQAAAMAGQAMAFAIAKQAHAIAFAOQADANAAAPIAAALIhrAAQAAALADAKQADAJAGAHQAFAGAJAFQAHADALAAQAQABAKgIQAJgGAGgPIAUAJQgEAIgEAHQgFAHgIAFQgIAGgJADQgKADgNAAQgQAAgNgFgAAqgLQAAgKgDgJQgBgIgGgGQgEgGgIgDQgHgEgLAAQgIAAgIADQgIADgFAGQgLAMgCAWIBSAAIAAAAg");
	this.shape.setTransform(316.1,28.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABOBLIAAheQAAgKgCgGQgBgHgEgEQgDgDgEgCQgFgBgGAAQgHAAgHACQgHACgHAGQgFAEgEAHQgDAHAAAIIAABbIgYAAIAAheQAAgJgBgHQgCgGgDgEQgHgHgMAAQgPAAgMALQgFAFgEAHQgFAHAAALIAABWIgYAAIAAiQIAYAAIAAAWQAKgNAMgHQALgHANAAQAIAAAGACQAHACAFAEQAJAHAFANIAKgMQAGgFAGgEQANgHAOAAQAKAAAJADQAIADAGAGQAGAGADAJQACAKAAANIAABjg");
	this.shape_1.setTransform(296.1,28);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgdBIQgNgGgJgKQgJgJgFgPQgEgOAAgRQAAgRAFgPQAFgOAJgJQAKgLANgFQANgGAPAAQAQAAAMAGQAOAFAIAKQAKAKAEAOQAFAOAAARQAAARgFAOQgEAPgKAKQgIAKgOAGQgNAFgQAAQgQAAgNgFgAgTg0QgIAFgGAHQgFAIgDAKQgCALAAALQAAAMACALQADAKAFAIQAFAHAJAFQAIAEALAAQAMAAAIgEQAJgFAFgHQAFgIADgLQADgJAAgNQAAgLgDgLQgDgKgFgIQgFgHgJgFQgIgDgMAAQgLAAgIADg");
	this.shape_2.setTransform(275.6,28.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AA3BkIAAhcIhtAAIAABcIgaAAIAAjHIAaAAIAABVIBtAAIAAhVIAaAAIAADHg");
	this.shape_3.setTransform(256.9,25.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAhBJIghhzIggBzIgZAAIgriQIAbAAIAdByIAihxIAYAAIAgBxIAdhyIAZAAIgpCQg");
	this.shape_4.setTransform(230.2,28.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgaBIQgNgFgIgKQgSgUAAgkQAAgRAFgPQAFgPAJgJQAJgLANgEQANgGANAAQARAAAMAGQAMAFAIAKQAIAIAEAOQADANAAAPIAAALIhrAAQABALADAKQADAJAFAHQAGAGAHAFQAJADAJAAQARABAJgIQAJgGAHgPIAUAJQgEAIgFAHQgEAHgIAFQgHAGgKADQgLADgNAAQgPAAgNgFgAAqgLQAAgKgDgJQgCgIgEgGQgGgGgHgDQgHgEgLAAQgJAAgHADQgIADgFAGQgLAMgCAWIBSAAIAAAAg");
	this.shape_5.setTransform(212,28.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AA4BkIhvieIAACeIgZAAIAAjHIAaAAIBtCfIAAifIAZAAIAADHg");
	this.shape_6.setTransform(193.8,25.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgnBKIAAiQIAZAAIAAAWQAIgMAKgHQALgFAMAAIANABIgDAWIgGgBIgGgBQgHABgHACQgHACgFAGQgGAGgEAGQgDAIAAAIIAABWg");
	this.shape_7.setTransform(172.9,28.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgiBHQgJgDgFgHQgGgGgDgKQgCgKAAgNIAAhgIAYAAIAABbQAAAUAHAIQAGAJAPAAQAPAAANgMQAHgGAEgHQAEgHAAgLIAAhVIAYAAIAACQIgYAAIAAgWQgLAOgMAGIgNAFQgFACgIAAQgMAAgJgEg");
	this.shape_8.setTransform(159.2,28.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgdBIQgNgGgIgKQgKgJgFgPQgEgOAAgRQAAgRAFgPQAFgOAKgJQAIgLANgFQANgGAPAAQARAAANAGQAMAFAJAKQAKAKAFAOQAEAOAAARQAAARgEAOQgGAPgJAKQgJAKgNAGQgNAFgQAAQgQAAgNgFgAgTg0QgIAFgFAHQgGAIgDAKQgCALAAALQAAAMACALQADAKAFAIQAGAHAIAFQAIAEALAAQALAAAJgEQAIgFAGgHQAFgIADgLQACgJAAgNQAAgLgCgLQgDgKgFgIQgGgHgIgFQgJgDgLAAQgLAAgIADg");
	this.shape_9.setTransform(143,28.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgvBjIgMgDIAFgUQAIADAIAAQAJAAAEgFQAFgEAFgNIAGgPIg9iNIAcAAIAtBxIAphxIAbAAIg/CeIgIARQgDAIgFAFQgEAFgHADQgGADgKAAg");
	this.shape_10.setTransform(127.3,30.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgdBIQgMgGgJgKQgJgJgGgPQgEgOAAgRQAAgRAFgPQAFgOAJgJQAKgLAMgFQANgGAQAAQAQAAANAGQANAFAIAKQAKAKAFAOQAEAOAAARQAAARgEAOQgFAPgKAKQgIAKgOAGQgNAFgQAAQgQAAgNgFgAgTg0QgIAFgFAHQgGAIgDAKQgCALAAALQAAAMACALQADAKAFAIQAGAHAIAFQAIAEALAAQAMAAAIgEQAIgFAGgHQAFgIADgLQADgJAAgNQAAgLgDgLQgDgKgFgIQgGgHgIgFQgIgDgMAAQgLAAgIADg");
	this.shape_11.setTransform(105.4,28.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgCBaQgIgDgEgHQgFgHgBgJQgCgJAAgLIAAhOIgWAAIAAgTIAWAAIAAgoIAYAAIAAAoIAmAAIAAATIgmAAIAABUQAAALAFAGQAEAHAKAAIALgBIAIgCIAFASIgNAEIgPABQgMAAgHgEg");
	this.shape_12.setTransform(92.3,26.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAlBLIAAhbQAAgUgHgIQgEgEgFgCQgGgCgHAAQgIAAgHACQgIADgHAGQgHAGgDAHQgEAHAAALIAABVIgZAAIAAiQIAZAAIAAAWQAKgOANgGQANgHANAAQAZAAAMAOQAMANAAAaIAABgg");
	this.shape_13.setTransform(79.4,28);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgLBkIAAiQIAXAAIAACQgAgMhHIAAgcIAZAAIAAAcg");
	this.shape_14.setTransform(68.2,25.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgaBIQgNgFgIgKQgSgUAAgkQAAgRAFgPQAFgPAJgJQAJgLANgEQANgGANAAQARAAAMAGQAMAFAIAKQAIAIADAOQAEANAAAPIAAALIhrAAQABALADAKQADAJAFAHQAGAGAHAFQAJADAJAAQARABAJgIQAJgGAHgPIAUAJQgEAIgFAHQgEAHgIAFQgHAGgKADQgLADgNAAQgPAAgNgFgAAqgLQAAgKgDgJQgCgIgEgGQgGgGgHgDQgHgEgLAAQgJAAgHADQgIADgFAGQgLAMgCAWIBSAAIAAAAg");
	this.shape_15.setTransform(50.9,28.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgMBJIg6iQIAcAAIAqB1IAsh1IAbAAIg6CQg");
	this.shape_16.setTransform(35.6,28.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgdBIQgMgGgJgKQgJgJgGgPQgEgOAAgRQAAgRAFgPQAFgOAJgJQAKgLAMgFQANgGAQAAQAQAAANAGQANAFAIAKQAKAKAFAOQAEAOAAARQAAARgEAOQgFAPgKAKQgIAKgOAGQgNAFgQAAQgQAAgNgFgAgTg0QgIAFgFAHQgGAIgDAKQgCALAAALQAAAMACALQADAKAFAIQAGAHAIAFQAIAEALAAQAMAAAIgEQAIgFAGgHQAFgIADgLQADgJAAgNQAAgLgDgLQgDgKgFgIQgGgHgIgFQgIgDgMAAQgLAAgIADg");
	this.shape_17.setTransform(19.9,28.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("ABOBkIAAifIhECfIgTAAIhEieIAACeIgXAAIAAjHIAfAAIBFCoIBHioIAeAAIAADHg");
	this.shape_18.setTransform(-0.8,25.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol24, new cjs.Rectangle(-18.3,4.5,347.6,39.9), null);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRBLQgKgCgJgDQgHgEgHgFQgGgFgFgHIAPgPQAKALAMAHQAMAFAQABQAIAAAHgCQAGgCAEgDQAIgGgBgLQABgJgGgGQgFgGgQgCIgVgDQgVgEgNgIQgFgFgEgIQgDgGAAgKQAAgKAEgIQAFgIAIgFQAHgGALgDQAKgDAMAAQAOAAAKADQALAEAHAFQAHAEADAHQAEAGACAFIgTAJQgGgLgIgGQgFgDgFgCQgHgCgIABQgIAAgIABQgGACgEAEQgFADgBADQgCAEAAAEQAAAJAGAGQAFAFAQACIAVADQAMADAJADQAJADAGAFQALAKAAATQABATgQAMQgOANgcAAQgLAAgKgCg");
	this.shape.setTransform(240.6,19.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgaBIQgMgFgJgKQgSgUAAgkQAAgSAFgOQAFgOAJgKQAJgKANgGQANgFAOAAQAQAAAMAFQAMAGAIAKQAHAJAEAMQAEANAAAQIAAALIhqAAQAAALACAJQADAKAGAHQAFAGAJAEQAHAEALABQAQgBAKgGQAIgHAGgPIAVAJQgDAIgFAHQgGAHgHAFQgIAGgKADQgKADgMAAQgQAAgNgFgAAqgLQAAgKgCgJQgDgIgFgGQgEgGgIgEQgHgDgLAAQgJAAgHADQgHADgGAFQgLANgCAWIBSAAIAAAAg");
	this.shape_1.setTransform(225.4,19.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgLBkIAAiQIAXAAIAACQgAgMhGIAAgdIAZAAIAAAdg");
	this.shape_2.setTransform(214.2,16.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgCBaQgIgDgEgHQgFgHgBgJQgCgJAAgLIAAhOIgWAAIAAgTIAWAAIAAgoIAYAAIAAAoIAmAAIAAATIgmAAIAABUQAAALAFAGQAEAHAKAAIALgBIAIgCIAFASIgNAEIgPABQgMAAgHgEg");
	this.shape_3.setTransform(206.3,17.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgLBkIAAiQIAXAAIAACQgAgMhGIAAgdIAZAAIAAAdg");
	this.shape_4.setTransform(198.2,16.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAlBLIAAhbQAAgUgHgIQgEgEgFgCQgGgCgHAAQgIAAgHACQgIADgHAGQgHAGgDAHQgEAHAAALIAABVIgZAAIAAiQIAZAAIAAAWQAKgOANgGQANgHANAAQAZAAAMAOQAMANAAAaIAABgg");
	this.shape_5.setTransform(187.1,19.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgaBIQgNgFgIgKQgSgUAAgkQAAgSAFgOQAFgOAJgKQAJgKANgGQAMgFAOAAQARAAAMAFQAMAGAIAKQAIAJADAMQAEANAAAQIAAALIhqAAQAAALADAJQADAKAFAHQAGAGAHAEQAJAEAJABQARgBAJgGQAKgHAFgPIAVAJQgDAIgGAHQgEAHgIAFQgHAGgLADQgKADgNAAQgPAAgNgFgAAqgLQAAgKgCgJQgDgIgEgGQgGgGgHgEQgIgDgKAAQgIAAgIADQgIADgFAFQgLANgCAWIBSAAIAAAAg");
	this.shape_6.setTransform(171.2,19.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABOBLIAAheQAAgKgCgGQgBgHgEgEQgDgDgEgCQgFgBgGAAQgHAAgHACQgHACgHAGQgFAEgEAHQgDAHAAAIIAABbIgYAAIAAheQAAgJgBgHQgCgGgDgEQgHgHgMAAQgPAAgMALQgFAFgEAHQgFAHAAALIAABWIgYAAIAAiQIAYAAIAAAWQAKgNAMgHQALgHANAAQAIAAAGACQAHACAFAEQAJAHAFANIAKgMQAGgFAGgEQANgHAOAAQAKAAAJADQAIADAGAGQAGAGADAJQACAKAAANIAABjg");
	this.shape_7.setTransform(151.1,19.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ABEBkIgWg4IhcAAIgWA4IgbAAIBTjHIAZAAIBTDHgAAlAWIglhdIglBdIBKAAg");
	this.shape_8.setTransform(129.1,16.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgZBIQgMgFgKgLQgQgUgBgkQABgQAEgOQAFgOAJgLQAJgKANgFQANgGAPAAQAMAAAJAEQALADAGAGQAIAGAEAIQAEAHADAJIgWAIIgFgMQgDgFgFgEQgEgEgGgDQgFgDgIABQgLAAgHAEQgIAEgGAIQgFAHgDALQgCALAAAKQAAAMACAKQADALAEAHQAGAIAIAFQAIAEALAAQAQAAAJgIIAJgJIAGgPIAVAJQgEAJgFAIQgFAIgIAFQgGAHgLACQgJAEgNAAQgQAAgNgFg");
	this.shape_9.setTransform(105.2,19.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgLBkIAAiQIAXAAIAACQgAgMhGIAAgdIAZAAIAAAdg");
	this.shape_10.setTransform(94.2,16.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgCBaQgIgDgEgHQgFgHgBgJQgCgJAAgLIAAhOIgWAAIAAgTIAWAAIAAgoIAYAAIAAAoIAmAAIAAATIgmAAIAABUQAAALAFAGQAEAHAKAAIALgBIAIgCIAFASIgNAEIgPABQgMAAgHgEg");
	this.shape_11.setTransform(86.3,17.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgRBLQgKgCgIgDQgJgEgGgFQgGgFgEgHIAPgPQAJALAMAHQAMAFAPABQAKAAAGgCQAGgCAEgDQAIgGAAgLQgBgJgFgGQgFgGgPgCIgWgDQgVgEgMgIQgHgFgDgIQgDgGAAgKQAAgKAFgIQAEgIAHgFQAIgGAKgDQALgDAMAAQAPAAAJADQALAEAHAFQAGAEAFAHQAEAGABAFIgUAJQgEgLgJgGQgEgDgHgCQgFgCgJABQgIAAgHABQgIACgDAEQgEADgCADQgCAEAAAEQAAAJAGAGQAFAFARACIATADQANADAJADQAJADAGAFQAMAKAAATQAAATgPAMQgPANgcAAQgLAAgKgCg");
	this.shape_12.setTransform(74,19.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgvBCQgGgGgEgIQgDgIAAgLQgBgOAHgKQAGgJAKgFQALgFAOgDQANgCANAAIAZgBIAAgGQgBgJgCgHQgCgGgDgEQgIgIgSAAQgHAAgHABQgFACgFADQgJAGgEAKIgUgIQAFgPAPgJQAHgFAJgCQALgCALgBQAQAAALAFQAKADAHAIQAHAGADALQACAKAAANIAABdIgXAAIAAgUQgIAKgMAGQgMAIgRgBQgWABgOgLgAAOACQgOAAgKACQgKADgFADQgGAEgCAGQgDAFAAAHQAAALAHAHQADADAGACQAFABAIABQARAAAMgJQAQgKAAgWIAAgPg");
	this.shape_13.setTransform(58.9,19.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgCBaQgIgDgEgHQgFgHgBgJQgCgJAAgLIAAhOIgWAAIAAgTIAWAAIAAgoIAYAAIAAAoIAmAAIAAATIgmAAIAABUQAAALAFAGQAEAHAKAAIALgBIAIgCIAFASIgNAEIgPABQgMAAgHgEg");
	this.shape_14.setTransform(47,17.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAlBLIAAhbQAAgUgHgIQgEgEgFgCQgGgCgHAAQgIAAgHACQgIADgHAGQgHAGgDAHQgEAHAAALIAABVIgZAAIAAiQIAZAAIAAAWQAKgOANgGQANgHANAAQAZAAAMAOQAMANAAAaIAABgg");
	this.shape_15.setTransform(34.1,19.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgvBCQgGgGgEgIQgDgIAAgLQAAgOAGgKQAGgJAKgFQALgFANgDQANgCANAAIAagBIAAgGQAAgJgCgHQgCgGgFgEQgIgIgRAAQgIAAgFABQgHACgEADQgIAGgFAKIgUgIQAGgPAOgJQAGgFALgCQAKgCALgBQAPAAALAFQALADAHAIQAGAGADALQADAKABANIAABdIgYAAIAAgUQgIAKgMAGQgMAIgRgBQgWABgOgLgAAOACQgOAAgJACQgKADgGADQgGAEgCAGQgCAFAAAHQgBALAHAHQADADAGACQAFABAIABQARAAALgJQAQgKABgWIAAgPg");
	this.shape_16.setTransform(18.2,19.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhBBkIAAjHICDAAIAAAXIhoAAIAABBIBiAAIAAAXIhiAAIAABYg");
	this.shape_17.setTransform(3.4,16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol23, new cjs.Rectangle(-7.4,-4.2,257.4,39.9), null);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQAeIAIg7IAZAAIgOA7g");
	this.shape.setTransform(236.5,33.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgRBLQgKgBgIgFQgJgDgGgGQgGgFgEgGIAPgPQAJAMAMAFQAMAHAPAAQAKgBAGgBQAGgCAEgDQAHgHABgKQgBgIgFgGQgFgHgPgCIgWgEQgWgCgLgJQgHgFgDgHQgDgIAAgJQAAgKAFgIQAEgIAHgGQAIgFAKgDQALgDAMAAQAPAAAKADQAKAEAHAEQAGAGAFAGQAEAGABAGIgUAJQgEgMgJgGQgEgDgHgCQgFgBgJgBQgIAAgHACQgHACgEAEQgEADgCADQgCAEAAAEQAAAJAGAFQAGAGAPACIAUADQANACAJAEQAJAEAGAEQAMALAAARQAAAVgQAMQgOAMgcAAQgLAAgKgCg");
	this.shape_1.setTransform(226.2,26.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAgBJIgghzIggBzIgZAAIgriRIAbAAIAdBzIAihxIAYAAIAgBxIAdhzIAaAAIgqCRg");
	this.shape_2.setTransform(208.7,26.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgaBIQgNgFgIgKQgSgUAAgkQAAgRAFgPQAFgPAJgKQAJgKANgEQAMgGAOAAQARAAAMAGQAMAFAIAJQAIAKADANQAEANAAAPIAAALIhqAAQAAALADAJQADAKAFAGQAGAIAHADQAJAFAJAAQARAAAJgIQAKgGAFgOIAVAIQgDAIgGAHQgEAHgIAGQgHAFgKADQgLADgNAAQgPAAgNgFgAAqgLQAAgLgCgIQgDgIgEgGQgGgGgHgEQgIgDgKAAQgIAAgIADQgIADgFAFQgLAMgCAXIBSAAIAAAAg");
	this.shape_3.setTransform(190.5,26.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgLBkIAAiQIAXAAIAACQgAgMhHIAAgcIAZAAIAAAcg");
	this.shape_4.setTransform(179.4,23.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgLBkIhSjHIAeAAIBACmIBBimIAcAAIhRDHg");
	this.shape_5.setTransform(166.5,23.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgnBKIAAiRIAZAAIAAAXQAIgMAKgGQALgHAMAAIANABIgDAXIgGgBIgGAAQgHAAgHACQgHADgFAFQgGAGgEAGQgDAHAAAJIAABWg");
	this.shape_6.setTransform(146.1,26.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgvBBQgGgFgEgIQgEgIABgLQAAgPAGgJQAGgJAKgFQALgFANgDQAOgBAMgBIAagBIAAgGQAAgIgCgHQgDgHgDgEQgJgIgRAAQgHAAgHACQgGABgEADQgIAGgFAKIgUgJQAGgOAOgJQAGgFALgCQAJgDAMAAQAPABALAEQALAEAHAGQAGAIADAJQADALAAANIAABdIgXAAIAAgUQgIAJgMAIQgMAGgRAAQgWAAgOgLgAAOABQgOABgKACQgJACgGAEQgGAEgCAFQgCAGAAAIQgBAKAHAHQADADAGACQAFACAIgBQARABAMgJQAPgJABgWIAAgRg");
	this.shape_7.setTransform(132.4,26.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgLBkIAAjHIAXAAIAADHg");
	this.shape_8.setTransform(122.2,23.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgiBHQgJgDgFgHQgGgGgDgKQgCgKAAgNIAAhgIAYAAIAABbQAAAUAHAIQAGAJAPAAQAPAAANgMQAHgGAEgHQAEgHAAgLIAAhVIAYAAIAACQIgYAAIAAgWQgLAOgMAGIgNAFQgFACgIAAQgMAAgJgEg");
	this.shape_9.setTransform(111.1,26.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgZBIQgNgFgJgKQgRgVAAgjQAAgRAFgOQAFgPAJgKQAJgJANgGQANgGAPAAQAMAAAKAEQAJADAHAGQAIAGAEAIQAFAHACAJIgWAIIgFgMQgDgFgEgFQgFgEgFgCQgHgCgHgBQgLABgHAEQgJAEgFAIQgFAHgCALQgDAKAAALQAAAMADAKQACALAEAHQAGAIAIAEQAIAFALAAQAQAAAJgIIAJgJIAGgPIAVAJQgEAJgFAIQgFAHgIAHQgHAFgJAEQgKADgOAAQgPAAgNgFg");
	this.shape_10.setTransform(95.5,26.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgvBBQgGgFgEgIQgEgIABgLQAAgPAGgJQAGgJAKgFQALgFANgDQAOgBANgBIAZgBIAAgGQAAgIgCgHQgDgHgDgEQgJgIgRAAQgHAAgHACQgGABgEADQgIAGgFAKIgUgJQAGgOAOgJQAGgFALgCQAJgDAMAAQAPABALAEQALAEAHAGQAGAIADAJQADALAAANIAABdIgXAAIAAgUQgIAJgMAIQgMAGgRAAQgWAAgOgLgAAOABQgOABgKACQgJACgGAEQgGAEgCAFQgCAGAAAIQgBAKAHAHQADADAGACQAFACAIgBQARABAMgJQAPgJABgWIAAgRg");
	this.shape_11.setTransform(79.8,26.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgCBaQgIgDgEgHQgFgHgBgJQgCgJAAgLIAAhOIgWAAIAAgTIAWAAIAAgoIAYAAIAAAoIAmAAIAAATIgmAAIAABUQAAALAFAGQAEAHAKAAIALgBIAIgCIAFASIgNAEIgPABQgMAAgHgEg");
	this.shape_12.setTransform(67.9,24.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgZBIQgMgFgKgKQgQgVgBgjQABgRAEgOQAFgPAJgKQAJgJANgGQANgGAPAAQAMAAAJAEQALADAGAGQAIAGAEAIQAEAHADAJIgWAIIgFgMQgDgFgFgFQgEgEgGgCQgFgCgIgBQgLABgHAEQgJAEgFAIQgFAHgDALQgBAKgBALQABAMABAKQADALAFAHQAFAIAIAEQAIAFALAAQAQAAAJgIIAIgJIAHgPIAUAJQgDAJgFAIQgFAHgIAHQgGAFgLAEQgKADgMAAQgRAAgMgFg");
	this.shape_13.setTransform(55.2,26.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgaBIQgNgFgJgKQgRgUAAgkQAAgRAFgPQAFgPAJgKQAJgKANgEQAMgGAOAAQARAAAMAGQAMAFAIAJQAHAKAFANQADANAAAPIAAALIhrAAQAAALADAJQADAKAGAGQAFAIAJADQAHAFAKAAQARAAAKgIQAJgGAGgOIAUAIQgEAIgEAHQgFAHgIAGQgIAFgJADQgKADgOAAQgPAAgNgFgAAqgLQAAgLgDgIQgBgIgGgGQgEgGgIgEQgHgDgLAAQgIAAgIADQgHADgGAFQgLAMgCAXIBSAAIAAAAg");
	this.shape_14.setTransform(39.4,26.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhCBmIAAjHIAYAAIAAAWQAJgNAMgGQAMgHAPAAQAPAAAMAGQALAGAIAJQAIALAEANQADAPAAAQQAAASgEANQgFAPgIAKQgIAKgMAFQgMAGgPAAQgLAAgMgFQgGgCgGgEIgKgLIAABIgAgPhNQgIADgGAGQgGAHgEAJQgDAKAAANIAAAJQAAAOADAJQADAKAGAGQAGAHAIADQAHADAJAAQAJAAAHgDQAIgEAGgGQAFgHADgLQAEgKAAgQQAAgQgEgLQgDgKgGgGQgGgHgHgDQgHgCgHgBQgJAAgIAEg");
	this.shape_15.setTransform(23.2,29.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgYBmQgNgCgLgGQgKgFgJgHQgIgIgGgKIATgQQAGAJAHAGQAHAHAIAEQAIAFAKACQAKACALAAQANAAAKgDQAJgDAGgFQAGgEADgHQADgGAAgIQAAgNgJgJQgJgJgXgEIgbgEQgPgDgLgEQgMgEgIgGQgIgIgEgJQgFgJAAgMQAAgOAGgLQAGgKAKgHQALgIAOgDQAOgEAQAAQASAAANAEQAOAEAJAHQAJAGAGAIQAGAIACAIIgWAJQgEgHgFgGQgEgGgHgEQgMgJgXAAQgNAAgKADQgKACgGAEQgGAFgDAGQgDAFAAAHQAAAHADAGQACAFAEAEQAFAEAIADQAHADALABIAfAGQAfAGAPANQAIAGAEALQADAIAAANQAAAMgFALQgFAKgJAJQgKAIgPAEQgPAFgTAAQgPAAgNgDg");
	this.shape_16.setTransform(5.1,23.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol22, new cjs.Rectangle(-6.2,2.9,248.1,39.9), null);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQAeIAIg7IAZAAIgOA7g");
	this.shape.setTransform(271.2,40.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgRBLQgKgBgJgFQgHgDgHgGQgGgFgEgGIAOgPQAKAMAMAFQAMAHAQAAQAIgBAHgBQAGgCAEgDQAIgHgBgKQABgIgGgGQgFgHgPgCIgWgEQgWgCgMgJQgFgFgEgHQgDgIAAgJQAAgKAEgIQAFgIAIgGQAHgFALgDQAKgDAMAAQAOAAAKADQALAEAHAEQAGAGAEAGQAEAGACAGIgTAJQgGgMgIgGQgFgDgFgCQgGgBgJgBQgJAAgGACQgIACgDAEQgEADgCADQgCAEAAAEQAAAJAGAFQAFAGARACIAUADQAMACAJAEQAJAEAGAEQALALAAARQABAVgPAMQgPAMgcAAQgLAAgKgCg");
	this.shape_1.setTransform(260.9,33.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgCBaQgIgDgEgHQgFgHgBgJQgCgJAAgLIAAhOIgWAAIAAgTIAWAAIAAgoIAYAAIAAAoIAmAAIAAATIgmAAIAABUQAAALAFAGQAEAHAKAAIALgBIAIgCIAFASIgNAEIgPABQgMAAgHgEg");
	this.shape_2.setTransform(248.9,31.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAlBLIAAhbQAAgUgHgIQgEgEgFgCQgGgCgHAAQgIAAgHACQgIADgHAGQgHAGgDAHQgEAHAAALIAABVIgZAAIAAiQIAZAAIAAAWQAKgOANgGQANgHANAAQAZAAAMAOQAMANAAAaIAABgg");
	this.shape_3.setTransform(236,33.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgaBIQgMgFgKgKQgRgUAAgkQAAgRAFgPQAFgPAJgKQAJgKANgEQANgGAOAAQAQAAAMAGQAMAFAIAJQAHAKAEANQAEANAAAPIAAALIhqAAQAAALACAJQADAKAGAGQAFAIAJADQAHAFALAAQAQAAAKgIQAIgGAGgOIAVAIQgDAIgFAHQgGAHgHAGQgIAFgKADQgJADgNAAQgQAAgNgFgAAqgLQAAgLgCgIQgDgIgFgGQgEgGgIgEQgHgDgLAAQgIAAgIADQgIADgFAFQgLAMgCAXIBSAAIAAAAg");
	this.shape_4.setTransform(220.1,33.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABOBLIAAheQAAgKgCgGQgBgHgEgEQgDgDgEgCQgFgBgGAAQgHAAgHACQgHACgHAGQgFAEgEAHQgDAHAAAIIAABbIgYAAIAAheQAAgJgBgHQgCgGgDgEQgHgHgMAAQgPAAgMALQgFAFgEAHQgFAHAAALIAABWIgYAAIAAiQIAYAAIAAAWQAKgNAMgHQALgHANAAQAIAAAGACQAHACAFAEQAJAHAFANIAKgMQAGgFAGgEQANgHAOAAQAKAAAJADQAIADAGAGQAGAGADAJQACAKAAANIAABjg");
	this.shape_5.setTransform(200,33.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgCBaQgIgDgEgHQgFgHgBgJQgCgJAAgLIAAhOIgWAAIAAgTIAWAAIAAgoIAYAAIAAAoIAmAAIAAATIgmAAIAABUQAAALAFAGQAEAHAKAAIALgBIAIgCIAFASIgNAEIgPABQgMAAgHgEg");
	this.shape_6.setTransform(183.2,31.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgnBKIAAiRIAZAAIAAAXQAIgMAKgGQALgHAMAAIANABIgDAXIgGgBIgGAAQgHAAgHACQgHADgFAFQgGAGgEAGQgDAHAAAKIAABVg");
	this.shape_7.setTransform(173.9,33.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AguBBQgIgFgDgIQgDgIgBgLQABgPAGgJQAGgJALgFQAKgFANgDQANgBANgBIAZgBIAAgGQAAgIgBgHQgCgHgFgEQgHgIgSAAQgIAAgFACQgHABgEADQgJAGgEAKIgUgJQAGgOANgJQAIgFAJgCQALgDALAAQAQABAKAEQALAEAHAGQAGAIADAJQAEALAAANIAABdIgYAAIAAgUQgIAJgMAIQgMAGgRAAQgWAAgNgLgAAOABQgOABgJACQgLACgFAEQgGAEgCAFQgDAGABAIQAAAKAGAHQADADAGACQAFACAIgBQARABALgJQARgJgBgWIAAgRg");
	this.shape_8.setTransform(160.2,33.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhCBmIAAjHIAYAAIAAAWQAJgNAMgGQAMgHAPAAQAPAAAMAGQALAGAIAJQAIALAEANQADAPAAAQQAAASgEAOQgFAOgIAKQgIAKgMAFQgMAGgPAAQgLAAgMgFQgGgCgGgEIgKgLIAABIgAgPhNQgIADgGAGQgGAHgEAJQgDAKAAANIAAAJQAAAOADAJQADAKAGAGQAGAHAIADQAHADAJAAQAJAAAHgDQAIgEAGgGQAFgHADgLQAEgKAAgQQAAgQgEgLQgDgKgGgGQgGgHgHgDQgHgCgHgBQgJAAgIAEg");
	this.shape_9.setTransform(144.9,35.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("ABEBkIgWg4IhcAAIgWA4IgbAAIBTjHIAZAAIBTDHgAAlAWIglhdIglBdIBKAAg");
	this.shape_10.setTransform(126.4,30.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgRBLQgKgBgJgFQgHgDgHgGQgGgFgEgGIAOgPQAKAMAMAFQAMAHAQAAQAIgBAHgBQAGgCAEgDQAIgHgBgKQABgIgGgGQgFgHgPgCIgWgEQgWgCgMgJQgFgFgEgHQgDgIAAgJQAAgKAEgIQAFgIAIgGQAHgFALgDQAKgDAMAAQAOAAAKADQALAEAHAEQAGAGAEAGQAFAGABAGIgTAJQgGgMgIgGQgFgDgFgCQgGgBgJgBQgJAAgGACQgIACgDAEQgEADgCADQgCAEAAAEQAAAJAGAFQAFAGARACIAUADQAMACAJAEQAJAEAGAEQALALAAARQABAVgPAMQgPAMgcAAQgLAAgKgCg");
	this.shape_11.setTransform(103,33.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgiBHQgJgDgFgHQgGgGgDgKQgCgKAAgNIAAhgIAYAAIAABbQAAAUAHAIQAGAJAPAAQAPAAANgMQAHgGAEgHQAEgHAAgLIAAhVIAYAAIAACQIgYAAIAAgWQgLAOgMAGIgNAFQgFACgIAAQgMAAgJgEg");
	this.shape_12.setTransform(87.8,33.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgcBHQgNgEgKgKQgIgKgFgPQgFgOAAgRQAAgRAFgPQAFgNAJgLQAKgKANgFQANgGAOAAQARAAAMAGQANAFAKAKQAJAKAEAOQAFAOAAARQAAASgFAOQgFAOgIAKQgKAKgNAFQgNAGgQAAQgPAAgNgGgAgTgzQgIAEgGAIQgFAHgDAKQgCAKAAAMQAAANACAKQADAKAFAIQAGAHAIAEQAIAFALAAQALAAAJgFQAIgEAGgHQAGgHACgMQACgKAAgMQAAgMgCgKQgCgKgGgHQgGgIgIgEQgJgFgLAAQgLAAgIAFg");
	this.shape_13.setTransform(71.6,33.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgLBkIAAiQIAXAAIAACQgAgMhHIAAgcIAZAAIAAAcg");
	this.shape_14.setTransform(60.1,30.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgZBIQgNgFgIgKQgRgVAAgjQAAgRAEgOQAFgPAJgKQAJgJANgGQANgGAPAAQAMAAAKAEQAJADAIAGQAGAGAFAIQAEAHADAJIgWAIIgFgMQgDgFgFgFQgEgEgGgCQgFgCgIgBQgKABgJAEQgHAEgFAIQgGAHgCALQgCAKAAALQAAAMACAKQACALAFAHQAFAIAIAEQAIAFALAAQAQAAAJgIIAIgJIAHgPIAUAJQgDAJgFAIQgFAHgHAHQgIAFgJAEQgLADgNAAQgPAAgNgFg");
	this.shape_15.setTransform(49.1,33.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AguBBQgIgFgDgIQgDgIgBgLQABgPAGgJQAGgJALgFQAKgFANgDQANgBANgBIAZgBIAAgGQAAgIgCgHQgBgHgFgEQgHgIgSAAQgIAAgFACQgGABgFADQgIAGgFAKIgUgJQAFgOAOgJQAIgFAJgCQALgDALAAQAPABAMAEQAKAEAHAGQAGAIAEAJQADALAAANIAABdIgYAAIAAgUQgIAJgMAIQgMAGgRAAQgWAAgNgLgAAOABQgOABgJACQgLACgFAEQgGAEgCAFQgCAGgBAIQABAKAGAHQADADAGACQAFACAIgBQARABALgJQARgJgBgWIAAgRg");
	this.shape_16.setTransform(33.4,33.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhCBmIAAjHIAYAAIAAAWQAJgNAMgGQAMgHAPAAQAPAAAMAGQALAGAIAJQAIALAEANQADAPAAAQQAAASgEAOQgFAOgIAKQgIAKgMAFQgMAGgPAAQgLAAgMgFQgGgCgGgEIgKgLIAABIgAgPhNQgIADgGAGQgGAHgEAJQgDAKAAANIAAAJQAAAOADAJQADAKAGAGQAGAHAIADQAHADAJAAQAJAAAHgDQAIgEAGgGQAFgHADgLQAEgKAAgQQAAgQgEgLQgDgKgGgGQgGgHgHgDQgHgCgHgBQgJAAgIAEg");
	this.shape_17.setTransform(18.1,35.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgYBmQgNgCgLgGQgKgFgJgHQgIgIgGgKIATgQQAGAJAHAGQAHAHAIAEQAIAFAKACQAKACALAAQANAAAKgDQAJgDAGgFQAGgEADgHQADgHAAgHQAAgNgJgJQgJgJgXgEIgbgEQgPgDgLgEQgMgEgIgGQgIgIgEgJQgFgJAAgMQAAgOAGgLQAGgKAKgHQALgIAOgDQAOgEAQAAQASAAANAEQAOAEAJAHQAJAGAGAIQAGAIACAIIgWAJQgEgHgFgGQgEgGgHgEQgMgJgXAAQgNAAgKADQgKACgGAEQgGAFgDAGQgDAFAAAHQAAAHADAGQACAFAEAEQAFAEAIADQAHADALABIAfAGQAfAGAPANQAIAGAEALQADAIAAAMQAAANgFALQgFAKgJAJQgKAIgPAEQgPAFgTAAQgPAAgNgDg");
	this.shape_18.setTransform(0,30.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol21, new cjs.Rectangle(-11.3,9.6,287.9,39.9), null);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgTBlQgHgCgGgDQgMgFgHgLQgIgKgEgOQgDgOAAgQQAAgSAEgNQAFgPAIgKQAJgKAMgFQAMgGAPAAQAKAAALAFQAHACAFAFQAFAEAGAHIAAhJIAYAAIAADHIgYAAIAAgVQgJAMgLAHIgOAFQgGABgIAAgAgPgbQgIADgFAHQgGAHgDAKQgDAKgBAQQAAAPAEALQAEALAFAHQAGAGAHADQAHADAIAAQAHAAAHgCQAGgCAGgFQAJgHAEgKQAEgKABgPIAAgKQAAgRgFgJQgDgKgJgGQgGgFgGgCQgHgCgHAAQgJAAgHADg");
	this.shape.setTransform(386.6,14.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgLBkIAAjHIAXAAIAADHg");
	this.shape_1.setTransform(375.4,14.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgnBJIAAiQIAZAAIAAAXQAIgMAKgGQALgHAMABIANAAIgDAXIgGgBIgGgBQgHAAgHADQgHADgFAFQgGAFgEAHQgDAIAAAJIAABUg");
	this.shape_2.setTransform(367.8,17.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgdBHQgNgEgIgLQgKgJgFgOQgEgPAAgSQAAgQAFgOQAFgOAKgLQAIgKANgGQANgFAPAAQARAAANAFQAMAGAJAKQAKAKAFAOQAEAOAAARQAAARgEAPQgGAOgJAKQgJAKgNAFQgNAGgQAAQgQAAgNgGgAgTg0QgIAFgFAIQgGAGgDALQgCALAAALQAAAMACALQADALAFAHQAGAIAIAEQAIAEALAAQALAAAJgEQAIgEAGgIQAFgIADgKQACgKAAgNQAAgLgCgLQgDgLgFgGQgGgIgIgFQgJgDgLAAQgLAAgIADg");
	this.shape_3.setTransform(353.6,17.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAvBkIgvimIguCmIgbAAIg8jHIAdAAIAtCmIAvilIAbAAIAuClIAtimIAcAAIg7DHg");
	this.shape_4.setTransform(331.5,14.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgaBIQgMgFgKgKQgRgUAAgkQAAgSAFgOQAFgOAJgKQAJgKANgGQANgFAOAAQAQAAAMAFQAMAGAIAKQAHAJAEAMQAEANAAAQIAAALIhqAAQAAALACAJQADAKAGAHQAFAGAJAEQAHAEALABQAQgBAKgGQAIgHAGgPIAVAJQgDAIgFAHQgGAHgHAFQgIAGgKADQgKADgMAAQgQAAgNgFgAAqgLQAAgKgCgJQgDgIgFgGQgEgGgIgEQgHgDgLAAQgJAAgHADQgHADgGAFQgLANgCAWIBSAAIAAAAg");
	this.shape_5.setTransform(303.7,17.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAlBkIAAhbQAAgTgHgJQgEgEgFgCQgGgCgHAAQgIAAgHADQgIACgHAHQgHAGgDAGQgEAGAAALIAABWIgZAAIAAjHIAZAAIAABNQAKgOANgGQANgGANgBQAZAAAMAOQAMANAAAZIAABhg");
	this.shape_6.setTransform(287.7,14.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgCBaQgIgDgEgHQgFgHgBgJQgCgJAAgLIAAhOIgWAAIAAgTIAWAAIAAgoIAYAAIAAAoIAmAAIAAATIgmAAIAABUQAAALAFAGQAEAHAKAAIALgBIAIgCIAFASIgNAEIgPABQgMAAgHgEg");
	this.shape_7.setTransform(275,15.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAlBLIAAhbQAAgUgHgIQgEgEgFgCQgGgCgHAAQgIAAgHACQgIADgHAGQgHAGgDAHQgEAHAAALIAABVIgZAAIAAiQIAZAAIAAAWQAKgOANgGQANgHANAAQAZAAAMAOQAMANAAAaIAABgg");
	this.shape_8.setTransform(255.9,17);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgLBkIAAiQIAXAAIAACQgAgMhGIAAgdIAZAAIAAAdg");
	this.shape_9.setTransform(244.7,14.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgLBkIAAjHIAXAAIAADHg");
	this.shape_10.setTransform(232.2,14.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgaBIQgNgFgIgKQgSgUAAgkQAAgSAFgOQAFgOAJgKQAJgKANgGQAMgFAOAAQARAAAMAFQAMAGAIAKQAIAJADAMQAEANAAAQIAAALIhqAAQAAALADAJQADAKAFAHQAGAGAHAEQAJAEAJABQARgBAJgGQAKgHAFgPIAVAJQgDAIgGAHQgEAHgIAFQgHAGgLADQgKADgNAAQgPAAgNgFgAAqgLQAAgKgCgJQgDgIgEgGQgGgGgHgEQgIgDgKAAQgIAAgIADQgIADgFAFQgLANgCAWIBSAAIAAAAg");
	this.shape_11.setTransform(221.1,17.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgaBIQgMgFgJgKQgSgUAAgkQAAgSAFgOQAFgOAJgKQAJgKANgGQANgFANAAQARAAAMAFQAMAGAIAKQAIAJAEAMQADANAAAQIAAALIhrAAQAAALAEAJQADAKAFAHQAGAGAHAEQAIAEAKABQARgBAJgGQAJgHAHgPIAUAJQgEAIgFAHQgEAHgIAFQgHAGgKADQgLADgNAAQgPAAgNgFgAAqgLQAAgKgDgJQgCgIgEgGQgGgGgHgEQgIgDgKAAQgJAAgHADQgHADgGAFQgLANgCAWIBSAAIAAAAg");
	this.shape_12.setTransform(205.2,17.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAlBkIAAhbQAAgTgHgJQgEgEgFgCQgGgCgHAAQgIAAgHADQgIACgHAHQgHAGgDAGQgEAGAAALIAABWIgZAAIAAjHIAZAAIAABNQAKgOANgGQANgGANgBQAZAAAMAOQAMANAAAZIAABhg");
	this.shape_13.setTransform(189.2,14.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAvBkIgvimIguCmIgbAAIg8jHIAdAAIAtCmIAvilIAbAAIAuClIAtimIAcAAIg7DHg");
	this.shape_14.setTransform(167.5,14.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAlBLIAAhbQAAgUgHgIQgEgEgFgCQgGgCgHAAQgIAAgHACQgIADgHAGQgHAGgDAHQgEAHAAALIAABVIgZAAIAAiQIAZAAIAAAWQAKgOANgGQANgHANAAQAZAAAMAOQAMANAAAaIAABgg");
	this.shape_15.setTransform(139.7,17);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgcBHQgNgEgKgLQgIgJgFgOQgFgPAAgSQAAgQAFgOQAFgOAJgLQAKgKANgGQANgFAOAAQARAAAMAFQANAGAKAKQAJAKAEAOQAFAOAAARQAAARgFAPQgFAOgIAKQgJAKgOAFQgNAGgQAAQgPAAgNgGgAgTg0QgIAFgGAIQgFAGgDALQgCALAAALQAAAMACALQADALAFAHQAGAIAIAEQAIAEALAAQALAAAJgEQAIgEAGgIQAGgIACgKQACgKABgNQgBgLgCgLQgCgLgGgGQgGgIgIgFQgJgDgLAAQgLAAgIADg");
	this.shape_16.setTransform(123.3,17.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgLBkIAAiQIAXAAIAACQgAgMhGIAAgdIAZAAIAAAdg");
	this.shape_17.setTransform(111.7,14.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgCBaQgIgDgEgHQgFgHgBgJQgCgJAAgLIAAhOIgWAAIAAgTIAWAAIAAgoIAYAAIAAAoIAmAAIAAATIgmAAIAABUQAAALAFAGQAEAHAKAAIALgBIAIgCIAFASIgNAEIgPABQgMAAgHgEg");
	this.shape_18.setTransform(103.8,15.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AguBCQgIgGgDgIQgDgIgBgLQABgOAGgKQAGgJALgFQAKgFANgDQANgCANAAIAZgBIAAgGQAAgJgBgHQgCgGgFgEQgHgIgSAAQgIAAgFABQgGACgFADQgIAGgFAKIgUgIQAFgPAOgJQAHgFAKgCQALgCALgBQAPAAAMAFQAKADAHAIQAGAGAEALQADAKAAANIAABdIgYAAIAAgUQgIAKgMAGQgMAIgRgBQgWABgNgLgAAOACQgOAAgJACQgLADgFADQgGAEgCAGQgCAFgBAHQABALAGAHQADADAGACQAFABAIABQARAAALgJQARgKgBgWIAAgPg");
	this.shape_19.setTransform(91,17.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgMBIIg6iQIAcAAIAqB1IAsh1IAbAAIg6CQg");
	this.shape_20.setTransform(76.6,17.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgnBJIAAiQIAZAAIAAAXQAIgMAKgGQALgHAMABIANAAIgDAXIgGgBIgGgBQgHAAgHADQgHADgFAFQgGAFgEAHQgDAIAAAJIAABUg");
	this.shape_21.setTransform(64.9,17.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgaBIQgMgFgJgKQgSgUAAgkQAAgSAFgOQAFgOAJgKQAJgKANgGQAMgFAPAAQAQAAAMAFQAMAGAIAKQAIAJADAMQAEANAAAQIAAALIhqAAQAAALACAJQADAKAGAHQAGAGAHAEQAJAEAKABQAQgBAJgGQAKgHAFgPIAVAJQgDAIgGAHQgFAHgHAFQgHAGgLADQgKADgMAAQgQAAgNgFgAAqgLQAAgKgCgJQgCgIgFgGQgFgGgIgEQgIgDgKAAQgIAAgIADQgHADgGAFQgLANgCAWIBSAAIAAAAg");
	this.shape_22.setTransform(51.1,17.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgRBLQgKgCgIgDQgJgEgGgFQgGgFgEgHIAPgPQAJALAMAHQAMAFAPABQAKAAAGgCQAGgCAEgDQAIgGAAgLQgBgJgFgGQgFgGgPgCIgWgDQgWgEgLgIQgHgFgDgIQgDgGAAgKQAAgKAFgIQAEgIAHgFQAIgGAKgDQALgDAMAAQAPAAAJADQALAEAHAFQAGAEAFAHQAEAGABAFIgUAJQgEgLgJgGQgEgDgHgCQgFgCgJABQgIAAgHABQgIACgDAEQgEADgCADQgCAEAAAEQAAAJAGAGQAFAFARACIATADQANADAJADQAJADAGAFQAMAKAAATQAAATgPAMQgPANgcAAQgLAAgKgCg");
	this.shape_23.setTransform(35.8,17.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgUBhQgMgFgKgNIAAATIgYAAIAAjHIAYAAIAABLQAJgMAMgGQAMgHAPAAQAPAAAMAGQALAGAIAKQAIAKAEAOQADANAAAQQAAASgEAPQgFAOgIAKQgIAKgMAGQgMAFgPAAQgMAAgLgFgAgPgbQgIADgGAGQgGAHgEAJQgDAJAAANIAAAJQAAAOADAKQADAKAGAHQAGAGAIADQAHADAJAAQAJAAAHgDQAIgDAGgHQAFgHADgLQAEgLAAgPQAAgQgEgKQgDgLgGgGQgGgHgHgDQgHgCgHAAQgJAAgIADg");
	this.shape_24.setTransform(20.4,14.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgTBnQgLgCgIgDQgKgDgHgFQgIgGgGgHQgHgGgFgIQgEgIgEgKQgHgUAAgYQAAgYAHgUQAEgKAFgIQAFgJAGgGQANgNASgIQASgHAUAAQALAAAKACQAKACAJADQASAHAMANQANAOAHATQADAKACALQACALAAAMQAAAYgHAUQgHATgMAOQgHAHgIAFQgHAFgJAEQgJADgKACQgKACgLAAQgJAAgKgCgAgdhMQgOAGgJALQgIAKgEAQQgFAPAAASQAAATAFAPQAEAQAIAKQAJALAOAGQANAFAQABQARgBANgFQANgGAJgLQAJgKAEgQQAFgPAAgTQAAgSgFgPQgEgQgJgKQgJgLgNgGQgNgFgRgBQgQABgNAFg");
	this.shape_25.setTransform(0.6,14.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(-12.6,-6.4,409.9,39.9), null);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgCBaQgIgDgEgHQgFgHgBgJQgCgJAAgLIAAhOIgWAAIAAgTIAWAAIAAgoIAYAAIAAAoIAmAAIAAATIgmAAIAABUQAAALAFAGQAEAHAKAAIALgBIAIgCIAFASIgNAEIgPABQgMAAgHgEg");
	this.shape.setTransform(258.3,22.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgRBLQgKgBgJgFQgHgDgHgGQgGgFgFgGIAPgPQAKAMAMAFQAMAHAQAAQAIgBAHgBQAGgCAEgDQAIgHgBgKQABgIgGgGQgFgHgQgCIgVgEQgVgCgNgJQgFgFgEgHQgDgIAAgJQAAgKAEgIQAFgIAIgGQAHgFALgDQAKgDAMAAQAOAAAKADQALAEAHAEQAHAGADAGQAEAGACAGIgTAJQgGgMgIgGQgFgDgFgCQgHgBgIgBQgIAAgIACQgGACgEAEQgFADgBADQgCAEAAAEQAAAJAGAFQAFAGAQACIAVADQAMACAJAEQAJAEAGAEQALALAAARQABAVgQAMQgOAMgcAAQgLAAgKgCg");
	this.shape_1.setTransform(246,24.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgaBIQgMgFgKgKQgRgUAAgkQAAgRAFgPQAFgPAJgKQAJgKANgEQANgGAOAAQAQAAAMAGQAMAFAIAJQAHAKAEANQAEANAAAPIAAALIhqAAQAAALACAJQADAKAGAGQAFAIAJADQAHAFALAAQAQAAAKgIQAIgGAGgOIAVAIQgDAIgFAHQgGAHgHAGQgIAFgKADQgKADgMAAQgQAAgNgFgAAqgLQAAgLgCgIQgDgIgEgGQgFgGgIgEQgHgDgLAAQgJAAgHADQgHADgGAFQgLAMgCAXIBSAAIAAAAg");
	this.shape_2.setTransform(230.8,24.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgVBkQgLgCgHgFQgHgFgGgHQgFgHgDgIIAUgKQAHAOAJAHQAFADAGACQAIACAHgBQALAAAJgCQAHgDAFgHQAEgGADgKQABgJAAgMIAAgQQgHANgNAGQgFADgHACQgIACgGAAQgQAAgLgHQgMgFgIgKQgHgKgEgMQgEgNAAgPQAAgRAFgOQAEgNAJgKQAIgJALgGQAMgGAPAAQALABANAFQAMAEAJANIAAgSIAYAAIAAB4QAAATgCAPQgEAPgGAKQgEAGgFAEIgLAHQgNAGgTgBQgOAAgKgDgAgOhPQgJADgFAGQgGAHgDAKQgDAKAAAOQAAAPADAJQAEAKAFAGQAGAGAIADQAGADAIAAQAJAAAIgEQAIgCAGgHQAFgFAEgJQAEgKgBgMIAAgFQABgOgEgJQgEgLgFgGQgGgFgIgEQgIgCgIAAQgIAAgHADg");
	this.shape_3.setTransform(214.2,27);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgnBKIAAiRIAZAAIAAAXQAIgMAKgGQALgHAMAAIANABIgDAXIgGgBIgGAAQgHAAgHACQgHADgFAFQgGAGgEAGQgDAHAAAJIAABWg");
	this.shape_4.setTransform(201.7,24.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgvBBQgGgFgEgIQgDgIAAgLQgBgPAHgJQAGgJAKgFQALgFAOgDQANgBANgBIAZgBIAAgGQgBgIgCgHQgCgHgDgEQgIgIgSAAQgHAAgHACQgFABgFADQgJAGgEAKIgUgJQAFgOAPgJQAHgFAJgCQALgDALAAQAQABALAEQAKAEAHAGQAHAIADAJQACALAAANIAABdIgXAAIAAgUQgIAJgMAIQgMAGgRAAQgWAAgOgLgAAOABQgOABgKACQgKACgFAEQgGAEgCAFQgDAGAAAIQAAAKAHAHQADADAGACQAFACAIgBQARABAMgJQAQgJAAgWIAAgRg");
	this.shape_5.setTransform(188,24.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhCBkIAAjHIAaAAIAACwIBsAAIAAAXg");
	this.shape_6.setTransform(173.4,21.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgvBiQgNgFgIgHQgIgIgDgKQgEgLAAgLQAAgLAEgJQADgJAGgHQAGgHAIgFIARgKQgIgJgGgMQgHgLAAgOQAAgKADgIQAEgIAGgFQAGgGAJgDQAIgEALAAQALAAAIADQAIAEAHAFQAFAGADAHQADAIAAAIQAAAKgDAIQgDAIgGAGQgFAGgIAFIgNAKIAuA3QAFgKACgKIAFgWIAWAFIgHAbQgFAOgHANIAdAiIgcAAIgQgRQgJAKgOAGQgOAGgRAAQgTAAgOgFgAgnAJIgKAJQgEAFgDAGQgCAGAAAIQAAAIACAIQACAHAGAFQAFAGAJADQAJADANAAQAOAAAJgFQAKgFAGgHIg2hBgAgfhNQgGAGAAANQAAALAGAIIAMARIALgGIAJgIQAEgFACgFQADgGAAgHQAAgNgGgGQgGgGgKAAQgNAAgGAHg");
	this.shape_7.setTransform(149.9,21.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgCBaQgIgDgEgHQgFgHgBgJQgCgJAAgLIAAhOIgWAAIAAgTIAWAAIAAgoIAYAAIAAAoIAmAAIAAATIgmAAIAABUQAAALAFAGQAEAHAKAAIALgBIAIgCIAFASIgNAEIgPABQgMAAgHgEg");
	this.shape_8.setTransform(129.5,22.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgRBLQgKgBgIgFQgJgDgGgGQgGgFgEgGIAPgPQAJAMAMAFQAMAHAPAAQAKgBAGgBQAGgCAEgDQAIgHAAgKQgBgIgFgGQgFgHgPgCIgWgEQgVgCgMgJQgHgFgDgHQgDgIAAgJQAAgKAFgIQAEgIAHgGQAIgFAKgDQALgDAMAAQAPAAAJADQALAEAHAEQAGAGAFAGQAEAGABAGIgUAJQgEgMgJgGQgEgDgHgCQgFgBgJgBQgIAAgHACQgIACgDAEQgEADgCADQgCAEAAAEQAAAJAGAFQAFAGARACIATADQANACAJAEQAJAEAGAEQAMALAAARQAAAVgPAMQgPAMgcAAQgLAAgKgCg");
	this.shape_9.setTransform(117.2,24.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgaBIQgNgFgJgKQgRgUAAgkQAAgRAFgPQAFgPAJgKQAJgKANgEQAMgGAOAAQARAAAMAGQAMAFAIAJQAHAKAFANQADANAAAPIAAALIhrAAQAAALAEAJQADAKAFAGQAFAIAIADQAJAFAJAAQARAAAJgIQAKgGAGgOIAUAIQgEAIgFAHQgEAHgIAGQgIAFgJADQgLADgNAAQgPAAgNgFgAAqgLQAAgLgDgIQgBgIgGgGQgFgGgHgEQgIgDgKAAQgJAAgHADQgHADgGAFQgLAMgCAXIBSAAIAAAAg");
	this.shape_10.setTransform(102,24.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgLBkIAAjHIAXAAIAADHg");
	this.shape_11.setTransform(90.9,21.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgLBkIAAjHIAXAAIAADHg");
	this.shape_12.setTransform(84.6,21.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AguBBQgIgFgDgIQgEgIAAgLQAAgPAHgJQAGgJALgFQAKgFAOgDQANgBANgBIAYgBIAAgGQAAgIgCgHQgBgHgFgEQgIgIgRAAQgIAAgGACQgFABgFADQgIAGgFAKIgUgJQAFgOAOgJQAHgFAKgCQAKgDAMAAQAPABAMAEQAKAEAHAGQAGAIAEAJQACALABANIAABdIgYAAIAAgUQgIAJgMAIQgMAGgRAAQgWAAgNgLgAAOABQgOABgKACQgKACgFAEQgGAEgCAFQgCAGgBAIQABAKAGAHQAEADAFACQAFACAIgBQARABAMgJQAPgJAAgWIAAgRg");
	this.shape_13.setTransform(73.5,24.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgMBkIAAiwIhHAAIAAgXICnAAIAAAXIhHAAIAACwg");
	this.shape_14.setTransform(57.6,21.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgaBIQgMgFgKgKQgRgUAAgkQAAgRAFgPQAFgPAJgKQAJgKANgEQANgGAOAAQAQAAAMAGQAMAFAIAJQAHAKAEANQAEANAAAPIAAALIhqAAQAAALACAJQADAKAGAGQAFAIAJADQAHAFALAAQAQAAAKgIQAIgGAGgOIAVAIQgDAIgFAHQgGAHgHAGQgIAFgKADQgKADgMAAQgQAAgNgFgAAqgLQAAgLgCgIQgDgIgFgGQgEgGgIgEQgHgDgLAAQgJAAgHADQgHADgGAFQgLAMgCAXIBSAAIAAAAg");
	this.shape_15.setTransform(34.6,24.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAlBkIAAhbQAAgUgHgIQgEgEgFgCQgGgCgHAAQgIAAgHACQgIAEgHAFQgHAHgDAHQgEAFAAAMIAABVIgZAAIAAjHIAZAAIAABNQAKgOANgGQANgHANAAQAZAAAMAOQAMANAAAZIAABhg");
	this.shape_16.setTransform(18.6,21.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgCBaQgIgDgEgHQgFgHgBgJQgCgJAAgLIAAhOIgWAAIAAgTIAWAAIAAgoIAYAAIAAAoIAmAAIAAATIgmAAIAABUQAAALAFAGQAEAHAKAAIALgBIAIgCIAFASIgNAEIgPABQgMAAgHgEg");
	this.shape_17.setTransform(5.9,22.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(-1.2,0.6,266.3,39.9), null);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQAeIAIg7IAZAAIgOA7g");
	this.shape.setTransform(217.5,39.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgLBkIAAiQIAXAAIAACQgAgMhGIAAgdIAZAAIAAAdg");
	this.shape_1.setTransform(211.4,29.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgvBCQgGgGgEgIQgEgIABgLQAAgOAGgKQAGgJAKgEQALgGANgDQAOgCAMAAIAagBIAAgGQAAgJgCgHQgDgGgDgEQgJgIgRAAQgHAAgHABQgGACgEADQgIAGgFAKIgUgIQAGgPAOgJQAGgFALgCQAJgCAMAAQAPAAALADQALAFAHAHQAGAGADALQADAKAAANIAABdIgXAAIAAgUQgIAKgMAGQgMAIgRgBQgWABgOgLgAAOACQgOAAgKACQgJADgGADQgGAEgCAGQgCAFAAAHQgBALAHAHQADADAGACQAFABAIABQARgBAMgHQAPgLABgWIAAgPg");
	this.shape_2.setTransform(200.4,32.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgUBhQgMgFgKgNIAAATIgYAAIAAjHIAYAAIAABLQAJgMAMgGQAMgHAPAAQAPAAAMAGQALAGAIAKQAIAKAEAOQADANAAAQQAAASgEAPQgFAOgIAKQgIAKgMAGQgMAFgPAAQgMAAgLgFgAgPgbQgIADgGAGQgGAHgEAJQgDAJAAANIAAAJQAAAOADAKQADAKAGAHQAGAGAIADQAHADAJAAQAJAAAHgDQAIgDAGgHQAFgHADgLQAEgLAAgPQAAgQgEgKQgDgLgGgGQgGgHgHgDQgHgCgHAAQgJAAgIADg");
	this.shape_3.setTransform(185.1,29.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgiBHQgJgDgFgHQgGgGgDgKQgCgKAAgNIAAhgIAYAAIAABbQAAAUAHAIQAGAJAPAAQAPAAANgMQAHgGAEgHQAEgHAAgLIAAhVIAYAAIAACQIgYAAIAAgWQgLAOgMAGIgNAFQgFACgIAAQgMAAgJgEg");
	this.shape_4.setTransform(168.7,32.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhVBkIAAjHIBKAAQAtAAAaAZQANANAHASQAGASAAAZQAAALgCAMQgCALgDAIQgHAUgOANQgNAMgUAHIgUAEQgKACgMAAgAg7BNIArAAQAmABASgVQATgUAAglQAAgSgEgOQgEgPgJgKQgJgKgNgFQgNgEgSAAIgwAAg");
	this.shape_5.setTransform(150.8,29.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAlBLIAAhbQAAgUgHgIQgEgEgFgCQgGgCgHAAQgIAAgHACQgIADgHAGQgHAGgDAHQgEAHAAALIAABVIgZAAIAAiQIAZAAIAAAWQAKgOANgGQANgHANAAQAZAAAMAOQAMANAAAaIAABgg");
	this.shape_6.setTransform(125.9,32.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgLBkIAAiQIAXAAIAACQgAgMhGIAAgdIAZAAIAAAdg");
	this.shape_7.setTransform(114.7,29.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ABEBkIgWg4IhcAAIgWA4IgbAAIBTjHIAZAAIBTDHgAAlAWIglheIglBeIBKAAg");
	this.shape_8.setTransform(101.6,29.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgcBHQgNgEgKgLQgIgJgFgOQgFgPAAgSQAAgQAFgOQAFgOAKgKQAIgLAOgGQANgFAOAAQARAAAMAFQANAGAKAKQAJAKAEAOQAFAOAAARQAAARgFAPQgEAOgJAKQgKAKgNAFQgNAGgQAAQgPAAgNgGgAgTg0QgIAFgGAIQgFAGgDALQgCALAAALQAAAMACALQADALAFAHQAGAIAIAEQAIAEALAAQAMAAAIgEQAJgEAFgIQAGgIACgKQADgLgBgMQABgLgDgLQgCgLgGgGQgFgIgJgFQgIgDgMAAQgLAAgIADg");
	this.shape_9.setTransform(77.1,32.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgCBaQgIgDgEgHQgFgHgBgJQgCgJAAgLIAAhOIgWAAIAAgTIAWAAIAAgoIAYAAIAAAoIAmAAIAAATIgmAAIAABUQAAALAFAGQAEAHAKAAIALgBIAIgCIAFASIgNAEIgPABQgMAAgHgEg");
	this.shape_10.setTransform(64,30.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgCBaQgIgDgEgHQgFgHgBgJQgCgJAAgLIAAhOIgWAAIAAgTIAWAAIAAgoIAYAAIAAAoIAmAAIAAATIgmAAIAABUQAAALAFAGQAEAHAKAAIALgBIAIgCIAFASIgNAEIgPABQgMAAgHgEg");
	this.shape_11.setTransform(48.1,30.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAnBIIgng6IgoA6IgbAAIA2hKIgwhGIAcAAIAiA0IAkg0IAaAAIgwBFIA0BLg");
	this.shape_12.setTransform(36.1,32.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgaBIQgMgFgJgKQgSgUAAgkQAAgSAFgOQAFgOAJgKQAJgLANgFQANgFANAAQARAAAMAFQAMAGAIAKQAIAIAEANQADAOAAAPIAAALIhrAAQAAALAEAJQADAKAFAHQAGAGAHAEQAIAEAKAAQARAAAJgGQAJgHAHgPIAUAJQgEAIgFAHQgEAHgIAFQgHAGgKADQgLADgNAAQgPAAgNgFgAAqgLQAAgLgDgIQgCgIgEgGQgGgGgHgEQgIgDgKAAQgJAAgHADQgHADgGAGQgLAMgCAWIBSAAIAAAAg");
	this.shape_13.setTransform(21.1,32.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AA4BkIhvieIAACeIgZAAIAAjHIAaAAIBtCfIAAifIAZAAIAADHg");
	this.shape_14.setTransform(2.9,29.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(-9.5,8.8,232.4,39.9), null);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRBLQgKgBgIgFQgJgDgGgGQgGgFgFgGIAQgPQAJAMAMAFQAMAHAPAAQAJgBAHgBQAGgCAEgDQAHgHABgKQgBgIgFgGQgFgHgQgCIgVgEQgVgCgMgJQgGgFgEgHQgDgIAAgJQAAgKAFgIQAEgIAHgGQAIgFAKgDQALgDAMAAQAOAAALADQAKAEAHAEQAGAGAFAGQAEAGABAGIgUAJQgEgMgJgGQgEgDgGgCQgHgBgIgBQgIAAgIACQgGACgEAEQgEADgCADQgCAEAAAEQAAAJAGAFQAGAGAPACIAUADQANACAJAEQAKAEAFAEQAMALAAARQgBAVgPAMQgOAMgcAAQgLAAgKgCg");
	this.shape.setTransform(169.6,15.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgnBKIAAiRIAZAAIAAAXQAIgMAKgGQALgHAMAAIANABIgDAXIgGgBIgGAAQgHAAgHACQgHADgFAFQgGAGgEAGQgDAHAAAJIAABWg");
	this.shape_1.setTransform(158,15.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgaBIQgNgFgJgKQgRgUAAgkQAAgRAFgPQAFgPAJgKQAJgKANgEQAMgGAOAAQARAAAMAGQAMAFAIAJQAHAKAFANQADANAAAPIAAALIhrAAQAAALADAJQADAKAGAGQAFAIAJADQAHAFAKAAQARAAAKgIQAJgGAGgOIAUAIQgEAIgEAHQgFAHgIAGQgIAFgJADQgKADgOAAQgPAAgNgFgAAqgLQAAgLgDgIQgBgIgGgGQgEgGgIgEQgHgDgLAAQgIAAgIADQgHADgGAFQgLAMgCAXIBSAAIAAAAg");
	this.shape_2.setTransform(144.2,15.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgCBaQgIgDgEgHQgFgHgBgJQgCgJAAgLIAAhOIgWAAIAAgTIAWAAIAAgoIAYAAIAAAoIAmAAIAAATIgmAAIAABUQAAALAFAGQAEAHAKAAIALgBIAIgCIAFASIgNAEIgPABQgMAAgHgEg");
	this.shape_3.setTransform(131.5,13.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgvBBQgGgFgEgIQgEgIAAgLQAAgPAHgJQAGgJALgFQAKgFAOgDQANgBANgBIAYgBIAAgGQAAgIgCgHQgCgHgDgEQgIgIgSAAQgHAAgHACQgFABgFADQgIAGgFAKIgUgJQAFgOAOgJQAIgFAJgCQAKgDAMAAQAPABAMAEQAKAEAHAGQAHAIADAKQACAKAAANIAABdIgXAAIAAgUQgIAJgMAIQgMAGgRAAQgWAAgOgLgAAOABQgOABgKACQgKACgFAEQgGAEgCAFQgCAGgBAIQABAKAGAHQAEADAFACQAFACAIgBQARABAMgJQAPgJAAgWIAAgQg");
	this.shape_4.setTransform(118.6,15.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAgBJIgghzIggBzIgZAAIgriRIAbAAIAeBzIAhhxIAXAAIAhBxIAdhzIAaAAIgrCRg");
	this.shape_5.setTransform(101.3,15.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgaBIQgMgFgJgKQgSgUAAgkQAAgRAFgPQAFgPAJgKQAJgKANgEQAMgGAPAAQAQAAAMAGQAMAFAIAJQAIAKADANQAEANAAAPIAAALIhqAAQAAALACAJQADAKAGAGQAGAIAHADQAJAFAKAAQAQAAAJgIQAKgGAFgOIAVAIQgDAIgGAHQgFAHgHAGQgHAFgLADQgKADgMAAQgQAAgNgFgAAqgLQAAgLgCgIQgCgIgFgGQgFgGgIgEQgIgDgKAAQgIAAgIADQgHADgGAFQgLAMgCAXIBSAAIAAAAg");
	this.shape_6.setTransform(83.1,15.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgiBHQgJgDgFgHQgGgGgDgKQgCgKAAgNIAAhgIAYAAIAABbQAAAUAHAIQAGAJAPAAQAPAAANgMQAHgGAEgHQAEgHAAgLIAAhVIAYAAIAACQIgYAAIAAgWQgLAOgMAGIgNAFQgFACgIAAQgMAAgJgEg");
	this.shape_7.setTransform(67.2,15.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgLBkIAAjHIAXAAIAADHg");
	this.shape_8.setTransform(56.2,12.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhLBkIAAjHIBJAAQAUAAAOAEQAOAEAIAGQAJAIADAIQAEAKAAAMQAAAGgCAHIgFALQgHALgPAHQATAGAIAOQAIAMAAAPQAAAMgEALQgEALgJAHQgJAIgOAFQgOAEgVAAgAgxBPIAxAAQAOAAAKgDQAKgCAGgEQAFgGADgGQACgHAAgIQAAgTgLgIQgFgFgKgCQgJgCgNAAIgzAAgAgxgPIAxAAQAMAAAIgBQAJgCAFgFQAFgDADgHQACgFAAgJQAAgIgCgGQgDgGgGgDQgLgIgaAAIgtAAg");
	this.shape_9.setTransform(44.3,12.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgCBaQgIgDgEgHQgFgHgBgJQgCgJAAgLIAAhOIgWAAIAAgTIAWAAIAAgoIAYAAIAAAoIAmAAIAAATIgmAAIAABUQAAALAFAGQAEAHAKAAIALgBIAIgCIAFASIgNAEIgPABQgMAAgHgEg");
	this.shape_10.setTransform(23.6,13.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AguBBQgIgFgDgIQgDgIgBgLQABgPAGgJQAGgJALgFQAKgFANgDQANgBANgBIAZgBIAAgGQAAgIgBgHQgCgHgFgEQgHgIgSAAQgIAAgFACQgHABgEADQgJAGgEAKIgUgJQAGgOANgJQAIgFAJgCQALgDALAAQAQABAKAEQALAEAHAGQAGAIADAKQAEAKAAANIAABdIgYAAIAAgUQgIAJgMAIQgMAGgRAAQgWAAgNgLgAAOABQgOABgJACQgLACgFAEQgGAEgCAFQgDAGABAIQAAAKAGAHQADADAGACQAFACAIgBQARABALgJQARgJgBgWIAAgQg");
	this.shape_11.setTransform(10.8,15.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(1.6,-8.4,177.5,39.9), null);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRBLQgKgBgJgEQgHgEgHgFQgGgFgFgIIAPgOQAKALAMAHQAMAFAQAAQAIABAHgCQAGgCAEgDQAIgHgBgJQABgKgGgGQgFgGgQgCIgVgDQgVgEgNgJQgFgEgEgHQgDgIAAgJQAAgKAEgIQAFgIAIgFQAHgGALgDQAKgDAMAAQAOAAAKAEQALADAHAFQAHAFADAGQAEAGACAFIgTAJQgGgLgIgGQgFgEgFgBQgHgCgIAAQgIABgIACQgGABgEADQgFADgBAEQgCAEAAAEQAAAJAGAFQAFAGAQACIAVAEQAMACAJADQAJAEAGADQALAMAAARQABAVgQALQgOANgcAAQgLAAgKgCg");
	this.shape.setTransform(238.3,22.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgRBLQgKgBgIgEQgJgEgGgFQgGgFgFgIIAQgOQAJALAMAHQAMAFAPAAQAJABAHgCQAGgCAEgDQAHgHAAgJQAAgKgFgGQgFgGgQgCIgVgDQgVgEgNgJQgFgEgEgHQgDgIAAgJQAAgKAEgIQAEgIAIgFQAIgGAKgDQALgDAMAAQAOAAALAEQAKADAHAFQAHAFAEAGQADAGACAFIgUAJQgEgLgJgGQgFgEgFgBQgHgCgIAAQgIABgIACQgGABgEADQgFADgBAEQgCAEAAAEQAAAJAGAFQAGAGAPACIAVAEQAMACAJADQAKAEAFADQAMAMAAARQgBAVgPALQgOANgcAAQgLAAgKgCg");
	this.shape_1.setTransform(223.7,22.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgaBIQgNgFgIgKQgSgUAAgkQAAgRAFgPQAFgPAJgJQAJgLANgEQAMgGAOAAQARAAAMAGQAMAFAIAKQAIAIADANQAEAOAAAPIAAALIhqAAQAAALADAKQADAJAFAHQAGAGAHAFQAJADAJAAQARABAJgIQAKgGAFgPIAVAJQgDAIgGAHQgEAHgIAFQgHAGgKADQgLADgNAAQgPAAgNgFgAAqgLQAAgKgCgJQgDgIgEgGQgGgGgHgDQgIgEgKAAQgIAAgIADQgIADgFAGQgLALgCAXIBSAAIAAAAg");
	this.shape_2.setTransform(208.5,22.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgnBKIAAiQIAZAAIAAAWQAIgMAKgHQALgFAMAAIANABIgDAWIgGgBIgGAAQgHAAgHACQgHACgFAGQgGAGgEAGQgDAIAAAIIAABWg");
	this.shape_3.setTransform(196.1,22.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgTBlQgHgCgGgDQgMgFgHgLQgIgKgDgOQgEgOAAgQQAAgSAEgNQAFgPAIgKQAJgKAMgFQAMgGAPAAQAKAAALAFQAHACAFAFQAFAEAGAHIAAhJIAYAAIAADHIgYAAIAAgVQgJAMgMAHIgNAFQgHABgHAAgAgPgbQgIADgFAHQgGAHgDAKQgEAKAAAQQAAAPAEALQADALAGAHQAGAGAHADQAHADAIAAQAHAAAGgCQAHgCAGgFQAIgHAFgKQAEgKABgPIAAgKQAAgRgFgJQgDgKgJgGQgGgFgGgCQgHgCgHAAQgJAAgHADg");
	this.shape_4.setTransform(181.8,19.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABEBkIgWg4IhcAAIgWA4IgbAAIBTjHIAZAAIBTDHgAAlAWIglheIglBeIBKAAg");
	this.shape_5.setTransform(163.7,19.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgCBaQgIgDgEgHQgFgHgBgJQgCgJAAgLIAAhOIgWAAIAAgTIAWAAIAAgoIAYAAIAAAoIAmAAIAAATIgmAAIAABUQAAALAFAGQAEAHAKAAIALgBIAIgCIAFASIgNAEIgPABQgMAAgHgEg");
	this.shape_6.setTransform(142.9,20.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAlBLIAAhbQAAgUgHgIQgEgEgFgCQgGgCgHAAQgIAAgHACQgIADgHAGQgHAGgDAHQgEAHAAALIAABVIgZAAIAAiQIAZAAIAAAWQAKgOANgGQANgHANAAQAZAAAMAOQAMANAAAaIAABgg");
	this.shape_7.setTransform(130,22.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgcBIQgNgGgKgKQgIgJgFgPQgFgOAAgRQAAgRAFgPQAFgOAKgJQAIgLANgFQAOgGAOAAQARAAAMAGQANAFAKAKQAJAKAEAOQAFAOAAARQAAARgFAOQgEAPgJAKQgKAKgNAGQgNAFgQAAQgPAAgNgFgAgTgzQgIAEgGAHQgFAIgDAKQgCALAAALQAAAMACALQADAKAFAIQAFAHAJAFQAIAEALAAQAMAAAIgEQAJgFAFgHQAGgIACgLQADgJgBgNQABgLgDgLQgCgKgGgIQgFgHgJgEQgIgEgMAAQgLAAgIAEg");
	this.shape_8.setTransform(113.6,22.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgnBKIAAiQIAZAAIAAAWQAIgMAKgHQALgFAMAAIANABIgDAWIgGgBIgGAAQgHAAgHACQgHACgFAGQgGAGgEAGQgDAIAAAIIAABWg");
	this.shape_9.setTransform(100.8,22.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgWBlIAAh9IgWAAIAAgTIAWAAIAAgMQAAgMAEgIQADgJAGgGQAGgFAHgDQAIgCAJAAIAMAAIANADIgFATIgIgCIgIAAQgKAAgGAFQgIAGABANIAAANIAkAAIAAATIgkAAIAAB9g");
	this.shape_10.setTransform(90.7,19.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgnBKIAAiQIAZAAIAAAWQAIgMAKgHQALgFAMAAIANABIgDAWIgGgBIgGAAQgHAAgHACQgHACgFAGQgGAGgEAGQgDAIAAAIIAABWg");
	this.shape_11.setTransform(81.2,22.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgaBIQgMgFgJgKQgSgUAAgkQAAgRAFgPQAFgPAJgJQAJgLANgEQANgGANAAQARAAAMAGQAMAFAIAKQAIAIAEANQADAOAAAPIAAALIhrAAQAAALAEAKQADAJAFAHQAGAGAHAFQAIADAKAAQARABAJgIQAJgGAHgPIAUAJQgEAIgFAHQgEAHgIAFQgHAGgKADQgLADgNAAQgPAAgNgFgAAqgLQAAgKgDgJQgCgIgEgGQgGgGgHgDQgIgEgKAAQgJAAgHADQgHADgGAGQgLALgCAXIBSAAIAAAAg");
	this.shape_12.setTransform(67.5,22.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgCBaQgIgDgEgHQgFgHgBgJQgCgJAAgLIAAhOIgWAAIAAgTIAWAAIAAgoIAYAAIAAAoIAmAAIAAATIgmAAIAABUQAAALAFAGQAEAHAKAAIALgBIAIgCIAFASIgNAEIgPABQgMAAgHgEg");
	this.shape_13.setTransform(54.7,20.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgvBCQgGgGgEgIQgEgIABgLQgBgPAHgJQAGgJAKgEQALgGAOgCQANgCANgBIAZgBIAAgFQAAgJgDgIQgCgGgDgEQgIgIgSAAQgHAAgHABQgFACgFADQgIAGgFAKIgUgJQAFgOAPgJQAGgEALgDQAJgDAMABQAPAAALADQALAFAHAGQAHAIADAJQACALAAANIAABdIgXAAIAAgUQgIAJgMAIQgMAHgRAAQgWgBgOgKgAAOABQgOABgKACQgJACgGAEQgGAEgCAFQgDAGAAAIQAAALAHAGQADADAGACQAFACAIAAQARgBAMgHQAQgKAAgXIAAgQg");
	this.shape_14.setTransform(41.9,22.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAvBkIgvimIguCmIgbAAIg8jHIAdAAIAtCmIAvilIAbAAIAuClIAtimIAcAAIg7DHg");
	this.shape_15.setTransform(21.1,19.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(2.2,-1.3,248.7,39.9), null);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVBkQgLgCgHgFQgHgFgGgHQgFgHgDgIIAUgKQAHAOAJAHQAFADAGACQAIACAHgBQAMAAAHgCQAJgDAEgHQAEgGACgKQACgJAAgMIAAgQQgHANgNAFQgGAEgGACQgIACgHAAQgPAAgMgHQgMgFgHgKQgIgKgDgMQgEgNAAgPQAAgRAFgOQAEgNAIgKQAJgJALgGQAMgGAPAAQALABAMAFQAMAEAKANIAAgSIAYAAIAAB4QAAATgCAPQgEAPgGAKQgEAGgFAEIgLAHQgNAGgUgBQgMAAgLgDgAgPhPQgIADgFAGQgGAHgDAKQgDAKAAAOQAAAPADAJQAEAKAGAGQAFAGAHADQAIADAHAAQAJAAAIgEQAIgCAFgHQAGgFAEgJQAEgKAAgMIAAgFQAAgOgEgJQgEgLgGgGQgFgFgIgEQgHgCgJAAQgIAAgIADg");
	this.shape.setTransform(130.7,33.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAlBLIAAhbQAAgUgHgIQgEgEgFgCQgGgCgHAAQgIAAgHACQgIADgHAGQgHAGgDAHQgEAHAAALIAABVIgZAAIAAiQIAZAAIAAAWQAKgOANgGQANgHANAAQAZAAAMAOQAMANAAAaIAABgg");
	this.shape_1.setTransform(114.7,30.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgLBkIAAiQIAXAAIAACQgAgMhHIAAgcIAZAAIAAAcg");
	this.shape_2.setTransform(103.5,28.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAlBLIAAhbQAAgUgHgIQgEgEgFgCQgGgCgHAAQgIAAgHACQgIADgHAGQgHAGgDAHQgEAHAAALIAABVIgZAAIAAiQIAZAAIAAAWQAKgOANgGQANgHANAAQAZAAAMAOQAMANAAAaIAABgg");
	this.shape_3.setTransform(92.4,30.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAlBLIAAhbQAAgUgHgIQgEgEgFgCQgGgCgHAAQgIAAgHACQgIADgHAGQgHAGgDAHQgEAHAAALIAABVIgZAAIAAiQIAZAAIAAAWQAKgOANgGQANgHANAAQAZAAAMAOQAMANAAAaIAABgg");
	this.shape_4.setTransform(76.5,30.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgiBHQgJgDgFgHQgGgGgDgKQgCgKAAgNIAAhgIAYAAIAABbQAAAUAHAIQAGAJAPAAQAPAAANgMQAHgGAEgHQAEgHAAgLIAAhVIAYAAIAACQIgYAAIAAgWQgLAOgMAGIgNAFQgFACgIAAQgMAAgJgEg");
	this.shape_5.setTransform(60.6,31.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgCBaQgIgDgEgHQgFgHgBgJQgCgJAAgLIAAhOIgWAAIAAgTIAWAAIAAgoIAYAAIAAAoIAmAAIAAATIgmAAIAABUQAAALAFAGQAEAHAKAAIALgBIAIgCIAFASIgNAEIgPABQgMAAgHgEg");
	this.shape_6.setTransform(48,29.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgYBmQgNgCgLgGQgKgFgJgHQgIgIgGgKIATgQQAGAJAHAGQAHAHAIAEQAIAFAKACQAKACALAAQANAAAKgDQAJgDAGgFQAGgEADgHQADgHAAgHQAAgNgJgJQgJgJgXgEIgbgEQgPgDgLgEQgMgEgIgGQgIgIgEgJQgFgJAAgMQAAgOAGgLQAGgKAKgHQALgIAOgDQAOgEAQAAQASAAANAEQAOAEAJAHQAJAGAGAIQAGAIACAIIgWAJQgEgHgFgGQgEgGgHgEQgMgJgXAAQgNAAgKADQgKACgGAEQgGAFgDAGQgDAFAAAHQAAAHADAGQACAFAEAEQAFAEAIADQAHADALABIAfAGQAfAGAPANQAIAGAEALQADAIAAAMQAAANgFALQgFAKgJAJQgKAIgPAEQgPAFgTAAQgPAAgNgDg");
	this.shape_7.setTransform(33.5,28.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ABEBkIgWg4IhcAAIgWA4IgbAAIBTjHIAZAAIBTDHgAAlAWIglhdIglBdIBKAAg");
	this.shape_8.setTransform(8.1,28.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(-6.9,7.4,151.4,39.9), null);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Meraaslogo();
	this.instance.parent = this;
	this.instance.setTransform(-27,-17,0.995,0.995);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(-27,-17,298.6,127.4), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAlBLIAAhbQAAgUgHgIQgEgEgFgCQgGgCgHAAQgIAAgHACQgIADgHAGQgHAGgDAHQgEAHAAALIAABVIgZAAIAAiQIAZAAIAAAWQAKgOANgGQANgHANAAQAZAAAMAOQAMANAAAaIAABgg");
	this.shape.setTransform(294.7,25.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgvBBQgGgFgEgIQgDgIAAgLQAAgPAGgJQAGgJAKgFQALgFANgDQANgBANgBIAagBIAAgGQAAgIgCgHQgDgHgEgEQgIgIgRAAQgIAAgFACQgHABgEADQgIAGgFAKIgUgJQAGgOAOgJQAGgFALgCQAJgDAMAAQAPABALAEQALAEAHAGQAGAIADAJQADALABANIAABdIgYAAIAAgUQgIAJgMAIQgMAGgRAAQgWAAgOgLgAAOABQgOABgJACQgKACgGAEQgGAEgCAFQgCAGAAAIQgBAKAHAHQADADAGACQAFACAIgBQARABALgJQAQgJABgWIAAgRg");
	this.shape_1.setTransform(278.8,25.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgLBkIAAjHIAXAAIAADHg");
	this.shape_2.setTransform(268.5,22.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhKBkIAAjHIBKAAQAOAAAWAEQAOAFAIAIQAKAIADALQADALAAAMQAAAOgDALQgEAMgJAHQgIAJgPAFQgWAEgNAAIgwAAIAABOgAgwAAIAwAAQAOAAAJgBQAJgCAGgGQAGgFADgIQACgHAAgJQAAgLgDgGQgCgIgGgFQgFgEgLgCQgJgDgNAAIgwAAg");
	this.shape_3.setTransform(256.7,22.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgCBaQgIgDgEgHQgFgHgBgJQgCgJAAgLIAAhOIgWAAIAAgTIAWAAIAAgoIAYAAIAAAoIAmAAIAAATIgmAAIAABUQAAALAFAGQAEAHAKAAIALgBIAIgCIAFASIgNAEIgPABQgMAAgHgEg");
	this.shape_4.setTransform(236.1,23.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAlBLIAAhbQAAgUgHgIQgEgEgFgCQgGgCgHAAQgIAAgHACQgIADgHAGQgHAGgDAHQgEAHAAALIAABVIgZAAIAAiQIAZAAIAAAWQAKgOANgGQANgHANAAQAZAAAMAOQAMANAAAaIAABgg");
	this.shape_5.setTransform(223.2,25.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgaBIQgMgFgJgKQgSgUAAgkQAAgRAFgPQAFgPAJgKQAJgKANgEQAMgGAPAAQAQAAAMAGQAMAFAIAJQAIAKADANQAEANAAAPIAAALIhqAAQAAALACAJQADAKAGAGQAGAIAHADQAJAFAKAAQAQAAAJgIQAKgGAFgOIAVAIQgDAIgGAHQgFAHgHAGQgHAFgLADQgKADgMAAQgQAAgNgFgAAqgLQAAgLgCgIQgCgIgFgGQgFgGgIgEQgIgDgKAAQgIAAgIADQgHADgGAFQgLAMgCAXIBSAAIAAAAg");
	this.shape_6.setTransform(207.3,25.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABOBLIAAheQAAgKgCgGQgBgHgEgEQgDgDgEgCQgFgBgGAAQgHAAgHACQgHACgHAGQgFAEgEAHQgDAHAAAIIAABbIgYAAIAAheQAAgJgBgHQgCgGgDgEQgHgHgMAAQgPAAgMALQgFAFgEAHQgFAHAAALIAABWIgYAAIAAiQIAYAAIAAAWQAKgNAMgHQALgHANAAQAIAAAGACQAHACAFAEQAJAHAFANIAKgMQAGgFAGgEQANgHAOAAQAKAAAJADQAIADAGAGQAGAGADAJQACAKAAANIAABjg");
	this.shape_7.setTransform(187.2,25.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgvBjIgMgDIAFgUQAIADAIAAQAJAAAEgFQAFgEAFgNIAGgPIg9iNIAcAAIAtBxIAphxIAbAAIg/CeIgIARQgDAIgFAFQgEAFgHADQgGADgKAAg");
	this.shape_8.setTransform(167.9,28.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgvBBQgGgFgEgIQgEgIABgLQAAgPAGgJQAGgJAKgFQALgFANgDQAOgBAMgBIAagBIAAgGQAAgIgCgHQgDgHgDgEQgJgIgRAAQgHAAgHACQgGABgEADQgIAGgFAKIgUgJQAGgOAOgJQAGgFALgCQAJgDAMAAQAPABALAEQALAEAHAGQAGAIADAJQADALAAANIAABdIgXAAIAAgUQgIAJgMAIQgMAGgRAAQgWAAgOgLgAAOABQgOABgKACQgJACgGAEQgGAEgCAFQgCAGAAAIQgBAKAHAHQADADAGACQAFACAIgBQARABAMgJQAPgJABgWIAAgRg");
	this.shape_9.setTransform(152.7,25.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhKBkIAAjHIBKAAQAOAAAWAEQAOAFAIAIQAKAIADALQADALABAMQgBAOgDALQgEAMgJAHQgJAJgOAFQgWAEgOAAIgvAAIAABOgAgwAAIAvAAQAPAAAJgBQAJgCAHgGQAFgFADgIQACgHAAgJQAAgLgDgGQgCgIgGgFQgFgEgLgCQgJgDgOAAIgvAAg");
	this.shape_10.setTransform(136.9,22.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAyBiQgIgDgHgIQgGgHgFgLQgDgMAAgPQAAgQAEgLQAEgLAGgHQAHgHAIgEQAKgEAJAAQALAAAKAEQAIAEAGAHQAHAHAEALQADALABAQQgBAPgDAMQgEALgGAHQgHAIgIADQgKAEgLAAQgKAAgJgEgAAyALQgGAKAAAVQAAAVAGAJQAHAKAMAAQAOAAAGgKQAHgJgBgVQABgVgHgKQgGgKgOAAQgMAAgHAKgAg8BgIBhjAIAXAAIhgDAgAhYAPQgKgEgGgHQgGgGgEgLQgDgMAAgQQAAgPADgLQAEgMAGgHQAHgHAJgEQAJgEAKAAQAKAAAJAEQAKAEAGAHQAHAHADAMQAEALgBAPQAAAQgCAMQgFALgFAGQgHAHgJAEQgJAEgLAAQgLAAgIgEgAhYhHQgHAKAAAUQAAAVAHAKQAHAKAMAAQANAAAGgKQAHgKAAgVQAAgUgHgKQgGgKgNAAQgMAAgHAKg");
	this.shape_11.setTransform(108.2,23.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgYBfQgLgDgIgHQgIgHgGgJQgFgIgDgKIAWgIIAHANQADAHAGAEQAFAFAHADQAIADAJAAQASAAALgLQAKgLAAgYQAAgJgCgIQgDgIgEgFQgJgLgVAAQgNAAgIAEQgKAEgIAIIgWAAIAJhpIBpAAIAAAWIhUAAIgGA8QAJgHAKgDQAKgDANAAQAPAAAMAFQALAFAHAIQAIAJACAKQAEALAAANQAAARgEAMQgEANgJAIQgRARgeAAQgOAAgMgEg");
	this.shape_12.setTransform(87.4,23.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgeBhQAOguAQgqQALgcAcg3IhoAAIAAgWICDAAIAAAVQgdA4gLAbQgVA6gIAfg");
	this.shape_13.setTransform(71.6,23.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgsBnIA/jNIAZAAIg/DNg");
	this.shape_14.setTransform(59.7,22.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAyBiQgIgDgHgIQgGgHgEgLQgEgMAAgPQAAgQAEgLQAEgLAGgHQAHgHAIgEQAKgEAKAAQAKAAAKAEQAIAEAGAHQAHAHAEALQADALABAQQgBAPgDAMQgEALgGAHQgHAIgIADQgKAEgKAAQgLAAgJgEgAAyALQgGAKAAAVQAAAVAGAJQAHAKANAAQANAAAGgKQAHgJgBgVQABgVgHgKQgGgKgNAAQgNAAgHAKgAg8BgIBhjAIAYAAIhhDAgAhYAPQgKgEgGgHQgHgGgDgLQgEgMABgQQgBgPAEgLQAEgMAGgHQAHgHAJgEQAJgEAKAAQALAAAIAEQAKAEAGAHQAGAHAEAMQADALAAAPQAAAQgDAMQgEALgFAGQgHAHgJAEQgJAEgLAAQgKAAgJgEgAhYhHQgHAKAAAUQAAAVAHAKQAGAKANAAQAMAAAHgKQAHgKAAgVQAAgUgHgKQgHgKgMAAQgNAAgGAKg");
	this.shape_15.setTransform(42.2,23.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgYBfQgLgDgIgHQgIgHgGgJQgFgIgDgKIAWgIIAGANQAEAHAGAEQAFAFAHADQAIADAJAAQASAAALgLQAKgLAAgYQAAgJgCgIQgCgIgFgFQgJgLgVAAQgMAAgJAEQgKAEgIAIIgVAAIAJhpIBoAAIAAAWIhUAAIgGA8QAKgHAJgDQAKgDANAAQAPAAAMAFQALAFAHAIQAIAJACAKQAEALAAANQAAARgFAMQgDANgJAIQgRARgeAAQgOAAgMgEg");
	this.shape_16.setTransform(21.3,23.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ag+BkIAAgVIAWgUIAagVIAWgWQAKgKAGgIQAIgJACgJQAEgJAAgLQAAgIgCgIQgDgGgEgFQgKgJgRAAQgIAAgHACQgHACgFAFQgGAEgDAGQgEAFgCAHIgXgFQADgKAFgIQAFgIAJgIQAIgGALgEQALgFAOAAQAOAAAMAFQAMAEAHAHQAIAIADAKQAFALAAANQAAAMgEALQgDALgIAKQgHAKgLALIgbAZIgPANIgRAPIBcAAIAAAXg");
	this.shape_17.setTransform(5.5,23);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(-4.2,2,309,39.8), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVBkQgLgCgHgFQgIgFgFgHQgFgHgDgHIAUgKQAGANAKAHQAFAEAGABQAIACAHAAQALgBAIgDQAJgDAEgGQAEgHACgJQACgJABgMIAAgQQgJANgMAFQgGAEgGACQgIABgHAAQgPABgMgHQgMgFgHgKQgHgKgEgNQgEgNAAgPQAAgQAFgNQAEgOAIgKQAJgKAMgFQALgGAQABQAKAAAMAEQAMAGAKAMIAAgSIAYAAIAAB5QAAASgCAQQgEAOgGAKQgEAGgFAEIgLAHQgMAFgVABQgMAAgLgEgAgPhPQgHADgGAGQgGAGgDALQgDAKAAAOQAAAPADAKQAEAJAGAGQAFAGAHADQAIADAHAAQAJAAAIgEQAIgCAFgHQAGgFAEgJQAEgJAAgNIAAgFQAAgOgEgKQgEgKgGgGQgFgFgIgEQgHgCgJAAQgIAAgIADg");
	this.shape.setTransform(276.2,26.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAlBLIAAhbQAAgUgHgIQgEgEgFgCQgGgCgHAAQgIAAgHACQgIADgHAGQgHAGgDAHQgEAHAAALIAABVIgZAAIAAiQIAZAAIAAAWQAKgOANgGQANgHANAAQAZAAAMAOQAMANAAAaIAABgg");
	this.shape_1.setTransform(260.1,23.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgLBkIAAiQIAXAAIAACQgAgMhHIAAgcIAZAAIAAAcg");
	this.shape_2.setTransform(249,21);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgMBJIg6iQIAcAAIArB1IArh1IAbAAIg6CQg");
	this.shape_3.setTransform(238.5,23.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgLBkIAAiQIAXAAIAACQgAgMhHIAAgcIAZAAIAAAcg");
	this.shape_4.setTransform(228.1,21);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhCBkIAAjHIAZAAIAACwIBtAAIAAAXg");
	this.shape_5.setTransform(217.4,21);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgUBlQgGgCgGgDQgLgFgIgLQgHgKgEgOQgEgOAAgQQAAgSAFgNQAEgPAIgKQAJgKALgFQAMgGAPAAQALAAAMAFQAFACAGAFQAFAEAFAHIAAhJIAZAAIAADHIgYAAIAAgVQgJAMgMAHIgMAFQgIABgHAAgAgPgbQgHADgHAHQgFAHgEAKQgDAKAAAQQABAPADALQAEALAFAHQAGAGAHADQAHADAIAAQAHAAAGgCQAHgCAGgFQAIgHAFgKQAFgKAAgPIAAgKQgBgRgEgJQgDgKgJgGQgGgFgHgCQgFgCgIAAQgIAAgIADg");
	this.shape_6.setTransform(193.7,21.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAlBLIAAhbQAAgUgHgIQgEgEgFgCQgGgCgHAAQgIAAgHACQgIADgHAGQgHAGgDAHQgEAHAAALIAABVIgZAAIAAiQIAZAAIAAAWQAKgOANgGQANgHANAAQAZAAAMAOQAMANAAAaIAABgg");
	this.shape_7.setTransform(177.7,23.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgvBCQgGgGgEgIQgDgIAAgLQAAgPAGgJQAGgJAKgEQALgGANgCQANgCANgBIAagBIAAgFQAAgJgCgIQgCgGgFgEQgIgIgRAAQgIAAgFABQgHACgEADQgIAGgFAKIgUgJQAGgOAOgJQAGgEALgDQAKgDALABQAPAAALADQALAFAHAGQAGAIADAJQADALABANIAABdIgYAAIAAgUQgIAJgMAIQgMAHgRAAQgWgBgOgKgAAOABQgOABgJACQgKACgGAEQgGAEgCAFQgCAGAAAIQgBALAHAGQADADAGACQAFACAIAAQARgBALgHQAQgKABgXIAAgQg");
	this.shape_8.setTransform(161.8,23.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgLBkIAAjHIAXAAIAADHg");
	this.shape_9.setTransform(151.5,21);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgRBLQgKgBgJgEQgHgEgHgFQgGgGgFgHIAPgOQAKALAMAHQAMAFAQAAQAIABAHgCQAGgCAEgDQAHgHAAgJQABgKgGgGQgFgGgQgCIgVgDQgVgEgNgJQgFgEgEgHQgDgIAAgJQAAgKAEgIQAFgIAIgFQAHgGALgDQAKgDAMAAQAOAAALAEQAKADAHAFQAHAFAEAGQADAGACAFIgUAJQgEgLgJgGQgFgEgFgBQgHgCgIAAQgIABgIACQgGABgEADQgFADgBAEQgCAEAAAEQAAAJAGAFQAGAGAPACIAVAEQAMACAJADQAJAEAGADQALAMAAARQAAAVgPALQgOANgcAAQgLAAgKgCg");
	this.shape_10.setTransform(141,23.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgMBkIAAjHIAZAAIAADHg");
	this.shape_11.setTransform(130.3,21);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgaBIQgMgFgKgKQgRgUAAgkQAAgRAFgPQAFgPAJgJQAJgLANgEQANgGAOAAQAQAAAMAGQAMAFAIAKQAHAIAFAOQADANAAAPIAAALIhrAAQAAALADAKQAEAJAFAHQAFAGAJAFQAHADALAAQAQABAKgIQAIgGAGgPIAVAJQgEAIgEAHQgGAHgHAFQgIAGgKADQgJADgNAAQgQAAgNgFgAAqgLQAAgKgDgJQgBgIgGgGQgEgGgIgDQgHgEgLAAQgIAAgIADQgIADgFAGQgLALgCAXIBSAAIAAAAg");
	this.shape_12.setTransform(112.6,23.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgMBJIg6iQIAcAAIArB1IAsh1IAaAAIg6CQg");
	this.shape_13.setTransform(97.3,23.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgLBkIAAiQIAXAAIAACQgAgMhHIAAgcIAZAAIAAAcg");
	this.shape_14.setTransform(86.9,21);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgRBLQgKgBgIgEQgJgEgGgFQgGgGgFgHIAQgOQAJALAMAHQAMAFAPAAQAKABAGgCQAGgCAEgDQAHgHABgJQgBgKgFgGQgFgGgPgCIgWgDQgWgEgLgJQgHgEgDgHQgDgIAAgJQAAgKAFgIQAEgIAHgFQAIgGAKgDQALgDAMAAQAPAAAKAEQAKADAHAFQAGAFAFAGQAEAGABAFIgUAJQgEgLgJgGQgEgEgHgBQgFgCgJAAQgIABgIACQgGABgEADQgEADgCAEQgCAEAAAEQAAAJAGAFQAGAGAPACIAUAEQANACAJADQAJAEAGADQAMAMAAARQAAAVgPALQgPANgcAAQgLAAgKgCg");
	this.shape_15.setTransform(76.4,23.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgiBHQgJgDgFgHQgGgGgDgKQgCgKAAgNIAAhgIAYAAIAABbQAAAUAHAIQAGAJAPAAQAPAAANgMQAHgGAEgHQAEgHAAgLIAAhVIAYAAIAACQIgYAAIAAgWQgLAOgMAGIgNAFQgFACgIAAQgMAAgJgEg");
	this.shape_16.setTransform(61.2,23.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgLBkIAAjHIAXAAIAADHg");
	this.shape_17.setTransform(50.3,21);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgZBIQgMgFgJgLQgRgUgBgjQABgRAEgOQAFgPAJgJQAJgKANgGQANgGAPAAQAMAAAJAEQAKADAHAGQAHAGAFAHQAEAJADAIIgWAIIgFgLQgDgGgFgEQgEgEgGgDQgFgCgIAAQgLgBgIAFQgIAEgEAIQgGAHgDALQgBAKAAALQAAAMABAKQADALAFAHQAFAIAIAFQAIAEALAAQAQAAAJgIIAIgKIAHgNIAUAJQgDAIgFAIQgFAIgIAFQgHAGgKADQgKAEgMAAQgRAAgMgFg");
	this.shape_18.setTransform(39.3,23.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAoBJIgog7IgnA7IgbAAIA1hMIgxhEIAdAAIAhAzIAkgzIAaAAIgvBEIA1BMg");
	this.shape_19.setTransform(24.5,23.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhFBkIAAjHICIAAIAAAXIhuAAIAAA/IBoAAIAAAVIhoAAIAABGIBxAAIAAAWg");
	this.shape_20.setTransform(9.3,21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-1.9,0,288.8,39.9), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.BWlogo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,113,38), null);


(lib.Symbol42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(123.3,41.8,1,1,0,0,0,56.5,19);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().rr(-96.95,-35.25,193.9,70.5,5);
	this.shape.setTransform(97,35.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol42, new cjs.Rectangle(0,0,193.9,70.5), null);


(lib.Symbol40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_74 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(74).call(this.frame_74).wait(1));

	// Symbol 36
	this.instance = new lib.Symbol36();
	this.instance.parent = this;
	this.instance.setTransform(126.3,108.4,0.843,0.843,0,0,0,149.8,20);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({alpha:1},14,cjs.Ease.get(1)).wait(52));

	// Symbol 35
	this.instance_1 = new lib.Symbol35();
	this.instance_1.parent = this;
	this.instance_1.setTransform(126.3,32.9,0.843,0.843,0,0,0,129.4,39);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},14,cjs.Ease.get(1)).wait(61));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(36.2,17.9,180.4,54.3);


(lib.Symbol37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 39
	this.instance = new lib.Symbol39();
	this.instance.parent = this;
	this.instance.setTransform(0,149.8,1,1,0,0,0,98.4,20);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({_off:false},0).to({alpha:1},14).wait(55));

	// Symbol 38
	this.instance_1 = new lib.Symbol38();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,56.5,1,1,0,0,0,117,56.5);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},14).wait(61));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117,0,234,113);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_375 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(375).call(this.frame_375).wait(1));

	// Symbol 40
	this.instance = new lib.Symbol40();
	this.instance.parent = this;
	this.instance.setTransform(1.3,-27.3,1,1,0,0,0,126.4,62.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(315).to({_off:false},0).wait(61));

	// Symbol 37
	this.instance_1 = new lib.Symbol37();
	this.instance_1.parent = this;
	this.instance_1.setTransform(100.1,-35.8,0.844,0.844,0,0,0,117,84.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(270).to({_off:false},0).wait(39).to({alpha:0},6).to({_off:true},1).wait(60));

	// Symbol 34
	this.instance_2 = new lib.Symbol34();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0,1,1,0,0,0,151,126);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(215).to({_off:false},0).to({scaleX:1.02,scaleY:1.02,x:0.2,y:0.1,alpha:1},8,cjs.Ease.get(-1)).to({regX:150.9,scaleX:1.12,scaleY:1.12,x:0,y:1.1},38).to({regX:151,scaleX:1.15,scaleY:1.15,y:1.3,alpha:0},9).to({_off:true},1).wait(105));

	// Symbol 33
	this.instance_3 = new lib.Symbol33();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,0,1,1,0,0,0,151,126);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(172).to({_off:false},0).to({scaleX:1.02,scaleY:1.02,x:0.2,y:0.1,alpha:1},7,cjs.Ease.get(-1)).to({scaleX:1.15,scaleY:1.15,x:0,y:1.3},44).to({_off:true},1).wait(152));

	// Symbol 32
	this.instance_4 = new lib.Symbol32();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,0,1,1,0,0,0,151,126);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(126).to({_off:false},0).to({scaleX:1.02,scaleY:1.02,x:0.2,y:0.1,alpha:1},8,cjs.Ease.get(-1)).to({scaleX:1.15,scaleY:1.15,x:0,y:1.3},45).to({_off:true},1).wait(196));

	// Symbol 31
	this.instance_5 = new lib.Symbol31();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-70.6,-90.5,0.509,0.509,0,0,0,150.1,91);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(83).to({_off:false},0).to({regX:149.9,scaleX:0.52,scaleY:0.52,x:-70.5,alpha:1},6,cjs.Ease.get(-1)).to({regX:150,scaleX:0.59,scaleY:0.59,x:-77.6,y:-89.9},45).to({_off:true},1).wait(241));

	// Symbol 30
	this.instance_6 = new lib.Symbol30();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-70.5,-90.5,0.509,0.509,0,0,0,151.1,126);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(39).to({_off:false},0).to({regX:151,regY:125.9,scaleX:0.52,scaleY:0.52,alpha:1},5,cjs.Ease.get(-1)).to({scaleX:0.59,scaleY:0.59,x:-80.6,y:-89.9},45).to({_off:true},1).wait(286));

	// Symbol 29
	this.instance_7 = new lib.Symbol29();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-70.5,-90.5,0.509,0.509,0,0,0,151.1,126);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:151,regY:125.9,scaleX:0.52,scaleY:0.52,alpha:1},14,cjs.Ease.get(-1)).to({scaleX:0.59,scaleY:0.59,x:-74.6,y:-89.9},30).to({_off:true},1).wait(331));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-157.1,-154.6,305.5,305.6);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 27
	this.instance = new lib.Symbol27();
	this.instance.parent = this;
	this.instance.setTransform(138.9,84.6,1,1,0,0,0,61.5,20);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({_off:false},0).to({y:58.5,alpha:1},14,cjs.Ease.get(1)).wait(54));

	// Symbol 26
	this.instance_1 = new lib.Symbol26();
	this.instance_1.parent = this;
	this.instance_1.setTransform(138.8,46.1,1,1,0,0,0,138.8,20);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:20,alpha:1},14,cjs.Ease.get(1)).wait(61));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.6,30.6,288.8,39.9);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 25
	this.instance = new lib.Symbol25();
	this.instance.parent = this;
	this.instance.setTransform(155.5,73.5,1,1,0,0,0,61.5,20);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).to({y:60,alpha:1},14,cjs.Ease.get(1)).wait(53));

	// Symbol 24
	this.instance_1 = new lib.Symbol24();
	this.instance_1.parent = this;
	this.instance_1.setTransform(155.5,33.5,1,1,0,0,0,155.5,20);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:20,alpha:1},14,cjs.Ease.get(1)).wait(61));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.3,18,347.6,39.8);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 23
	this.instance = new lib.Symbol23();
	this.instance.parent = this;
	this.instance.setTransform(132.7,113.5,1,1,0,0,0,121.3,20);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({_off:false},0).to({y:100,alpha:1},14,cjs.Ease.get(1)).wait(46));

	// Symbol 22
	this.instance_1 = new lib.Symbol22();
	this.instance_1.parent = this;
	this.instance_1.setTransform(132.7,73.5,1,1,0,0,0,117.9,20);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).to({y:60,alpha:1},14,cjs.Ease.get(1)).wait(55));

	// Symbol 21
	this.instance_2 = new lib.Symbol21();
	this.instance_2.parent = this;
	this.instance_2.setTransform(132.7,33.5,1,1,0,0,0,132.7,20);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:20,alpha:1},14,cjs.Ease.get(1)).wait(61));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.3,23.1,287.9,39.8);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 20
	this.instance = new lib.Symbol20();
	this.instance.parent = this;
	this.instance.setTransform(194.2,113.2,1,1,0,0,0,194.2,20);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({_off:false},0).to({y:99.8,alpha:1},14,cjs.Ease.get(1)).wait(46));

	// Symbol 19
	this.instance_1 = new lib.Symbol19();
	this.instance_1.parent = this;
	this.instance_1.setTransform(194.2,73.5,1,1,0,0,0,131.9,20);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).to({y:60,alpha:1},14,cjs.Ease.get(1)).wait(55));

	// Symbol 18
	this.instance_2 = new lib.Symbol18();
	this.instance_2.parent = this;
	this.instance_2.setTransform(194.3,33.5,1,1,0,0,0,106.7,20);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:20,alpha:1},14,cjs.Ease.get(1)).wait(61));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(78.1,22.2,232.4,39.8);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 17
	this.instance = new lib.Symbol17();
	this.instance.parent = this;
	this.instance.setTransform(122,126.9,1,1,0,0,0,90.3,20);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(17).to({_off:false},0).to({y:100,alpha:1},12,cjs.Ease.get(1)).wait(46));

	// Symbol 16
	this.instance_1 = new lib.Symbol16();
	this.instance_1.parent = this;
	this.instance_1.setTransform(122,86.9,1,1,0,0,0,122,20);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({y:60,alpha:1},15,cjs.Ease.get(1)).wait(51));

	// Symbol 15
	this.instance_2 = new lib.Symbol15();
	this.instance_2.parent = this;
	this.instance_2.setTransform(122.1,46.9,1,1,0,0,0,68.8,20);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:20,alpha:1},13,cjs.Ease.get(1)).wait(62));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(46.3,34.3,151.4,39.8);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol5();
	this.instance.parent = this;
	this.instance.setTransform(139.5,20,1,1,0,0,0,139.5,20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(-1.9,0,288.8,39.9), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_374 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(374).call(this.frame_374).wait(1));

	// Symbol 14
	this.instance = new lib.Symbol14();
	this.instance.parent = this;
	this.instance.setTransform(1179.5,56.4,1,1,0,0,0,123,52.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(315).to({_off:false},0).to({alpha:1},6,cjs.Ease.get(1)).wait(54));

	// Symbol 12
	this.instance_1 = new lib.Symbol12();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1179.4,56.1,1,1,0,0,0,138.8,39);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(270).to({_off:false},0).to({alpha:1},7,cjs.Ease.get(1)).wait(31).to({alpha:0},7,cjs.Ease.get(-1)).to({_off:true},1).wait(59));

	// Symbol 11
	this.instance_2 = new lib.Symbol11();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1179.5,55.3,1,1,0,0,0,155.5,39);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(225).to({_off:false},0).to({alpha:1},7,cjs.Ease.get(1)).wait(31).to({alpha:0},7,cjs.Ease.get(-1)).to({_off:true},1).wait(104));

	// Symbol 10
	this.instance_3 = new lib.Symbol10();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1179.5,69.8,1,1,0,0,0,145.2,20);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(180).to({_off:false},0).to({y:56.3,alpha:1},9,cjs.Ease.get(1)).wait(27).to({y:42.9,alpha:0},8,cjs.Ease.get(-1)).to({_off:true},1).wait(150));

	// Symbol 9
	this.instance_4 = new lib.Symbol9();
	this.instance_4.parent = this;
	this.instance_4.setTransform(1179.5,54.3,1,1,0,0,0,132.7,58);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(136).to({_off:false},0).to({alpha:1},7,cjs.Ease.get(1)).wait(29).to({alpha:0},8,cjs.Ease.get(-1)).to({_off:true},1).wait(194));

	// Symbol 8
	this.instance_5 = new lib.Symbol8();
	this.instance_5.parent = this;
	this.instance_5.setTransform(1179.4,54.5,1,1,0,0,0,194.2,58);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(90).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).wait(29).to({alpha:0},8,cjs.Ease.get(-1)).to({_off:true},1).wait(238));

	// Symbol 7
	this.instance_6 = new lib.Symbol7();
	this.instance_6.parent = this;
	this.instance_6.setTransform(1179.4,54.3,1,1,0,0,0,122,58);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(44).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).wait(27).to({alpha:0},9,cjs.Ease.get(-1)).to({_off:true},1).wait(285));

	// Symbol 6
	this.instance_7 = new lib.Symbol6();
	this.instance_7.parent = this;
	this.instance_7.setTransform(1179.4,56.3,1,1,0,0,0,139.5,20);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({alpha:1},8,cjs.Ease.get(1)).wait(27).to({alpha:0},9,cjs.Ease.get(-1)).to({_off:true},1).wait(330));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgjoALHIAA2NMBHRAAAIAAWNg");
	this.shape.setTransform(1175.6,73.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(375));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(947.6,2.2,456.2,142.2);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_374 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(374).call(this.frame_374).wait(1));

	// Layer 1
	this.instance = new lib.Symbol42();
	this.instance.parent = this;
	this.instance.setTransform(-67.7,28,1,1,0,0,0,97,35.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:91},14,cjs.Ease.get(1)).wait(240).to({x:-76.5},10,cjs.Ease.get(-1)).wait(111));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-164.7,-7.2,193.9,70.5);


// stage content:
(lib.meraas_300250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("A3WzcMAutAAAMAAAAm5MgutAAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// logo
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(37.1,22,0.733,0.733,0,0,0,96.9,35.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// text
	this.instance_1 = new lib.Symbol4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(149.5,220.9,0.718,0.718,0,0,0,1175.5,73.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// back
	this.instance_2 = new lib.Symbol28();
	this.instance_2.parent = this;
	this.instance_2.setTransform(450.5,339.5,1,1,0,0,0,299.5,215.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.7,94.4,468,305.6);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 25,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Bitmap1.png", id:"Bitmap1"},
		{src:"images/BWlogo.png", id:"BWlogo"},
		{src:"images/core_logo.jpg", id:"core_logo"},
		{src:"images/Image1.jpg", id:"Image1"},
		{src:"images/Image2.jpg", id:"Image2"},
		{src:"images/Image3.jpg", id:"Image3"},
		{src:"images/Image41.jpg", id:"Image41"},
		{src:"images/Image42.jpg", id:"Image42"},
		{src:"images/Image43.jpg", id:"Image43"},
		{src:"images/Meraaslogo.png", id:"Meraaslogo"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;