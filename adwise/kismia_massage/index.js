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



(lib.ava = function() {
	this.initialize(img.ava);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,231,250);


(lib.letter = function() {
	this.initialize(img.letter);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,137,137);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,137,31);


(lib.moon = function() {
	this.initialize(img.moon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,203,207);


(lib.sign = function() {
	this.initialize(img.sign);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,16,16);// helper functions:

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


(lib.text_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAEAzQgHgDgFgFQgGgFgCgHIgDgIIAAgJQAAgGADgJQADgGAFgFQAGgFAFgCQAHgCAHAAQAHAAAKADQAHADAEAFQAEAGABAGQABAIgCAJIg0AAQAAAEACAEIAEAHQADADAEABQAFACAFAAIANgBQAHgBAGgDIACAMQgHADgHACIgNABIgDAAQgHAAgHgCgAAKgIIgGADIgEAFIgDAHIAnAAQAAgEgBgDIgEgEIgGgEIgIgBIgHABgABTA0IAAg5IgXAAIAAgPIA+AAIAAAPIgXAAIAAA5gAg4A0IAAgvIgwAAIAAAvIgRAAIAAhoIARAAIAAAqIAwAAIAAgqIASAAIAABog");
	this.shape.setTransform(155.7,8.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A01735").s().p("Ah4A8IAAgPIhFAAIAAAPIgRAAIAAgeIAEAAIAGgBIAEgDQACgEABgIIAJhJIBBAAIAABZIALAAIAAAegAisAPQgCAMgEADIAuAAIAAhKIghAAgAC+AsQgDgDAAgEQAAgEADgDQADgCAEAAQAEAAADACQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAhEAsQgIgDgFgFQgGgFgCgHIgDgIIAAgJQAAgGADgJQADgGAFgFQAGgFAGgCQAHgCAHAAQAHAAAKADQAHADAEAFQAEAGABAHQABAHgCAJIg1AAQAAAEACAEIAFAHQADADAEABQAFACAFAAIANgBQAHgBAGgDIACAMQgHADgHACIgNABIgDAAQgHAAgHgCgAg+gPIgGADIgFAGIgDAGIAoAAQAAgDgBgDIgEgFIgGgEIgIgBIgHABgABxAtIAAgsIguAsIgEAAIAAhIIAQAAIAAArIAtgrIAFAAIAABIgAAKAtIAAg5IgWAAIAAgPIA9AAIAAAPIgXAAIAAA5gAC+gDQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDACgEAAQgEAAgDgCg");
	this.shape_1.setTransform(23,8.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.4,2.8,165.6,12.1);


(lib.text_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADnBHIAAhVIAAgJQgCgDgGAAIAAgMIAIgBIAIACQADABABADQACADAAAFIAEgHIAGgEQAEgCAKgBQAIAAAHADQAFADAFAFQADAGADAGQACAHAAAIQAAAHgDAHQgDAHgFAFQgFAFgHADQgGACgHAAQgFAAgEgCIgJgEIAAAqgAECgXQgDACgDADIgDAGIgCAIIAAATIAKAFIAJABQAEAAAEgCIAFgEQAEgDABgFQACgEgBgEQABgFgCgEQgBgEgCgDQgDgEgDgCQgEgBgFAAQgEAAgEABgAh5AzIAAgRIg0AAIAAARIgPAAIgBgdIADAAQAEAAACgCQACgCACgDIADgQIAFgkIAzAAIAAA7IAKAAIgBAdgAieADIgDAMQgBAEgDADIAhAAIAAgtIgXAAgAAMAhQgIgCgEgFQgGgGgDgHIgCgIIgBgHQABgGADgKQADgHAFgFQAFgEAGgCQAHgDAHAAQAGAAAKADQAIADADAGQAFAFABAIQABAHgCAIIg1AAQAAAFACAEIAFAHQADACAEACQAEABAFAAIAOgBQAGgBAGgCIADAMQgHADgHABIgNACIgDAAQgIAAgGgDgAARgZIgFADIgGAFIgCAIIAoAAQAAgEgCgEIgDgFIgHgDIgHgBIgIABgAj1AhQgHgCgFgFQgGgGgCgHIgDgIIgBgHQABgGADgKQADgHAFgFQAGgEAGgCQAHgDAHAAQAHAAAJADQAHADAFAGQADAFABAIQACAHgCAIIg2AAQAAAFACAEIAGAHQACACAFACQAFABAFAAIAMgBQAHgBAHgCIACAMQgHADgHABIgOACIgCAAQgIAAgHgDgAjugZIgHADIgEAFIgDAIIAoAAQAAgEgBgEIgFgFIgGgDIgHgBIgHABgAFJAiIgIgEQgDgDgDgEQgCgFAAgFQAAgGACgFQACgEAEgDQAEgDAFgCQAFgBAGAAIALABQAGABAFADIAAgHQAAgEgCgCQgBgDgDgBQgEgDgIAAIgOABIgKAEIgCgMIAMgEQAHgCAIAAIAMABQAGACAEADQAFADADAFQACAFAAAHIAAAcQAAAGACACQAAADAGgBIAAAJQgKACgEgCQgDgBgCgDIgBgIQgCAEgDACIgGAEQgEACgEABIgIABQgFAAgFgCgAFYAAQgGAAgFACIgDAEQgBADAAADQAAAFAEADQAEADAFAAQAIAAAFgDIAFgFQACgCABgEIAAgGIgJgDIgIAAIgCAAgABfAhQgIgCgFgFQgFgFgDgHIgDgHIgBgIQAAgGAEgLQADgGAFgFQAFgFAHgDQAHgCAHAAQAGAAAGABQAFACAFADQAFAEAEAEQADAGABAGIgPAAQgDgGgEgDQgGgDgGAAQgEAAgEACQgFABgCADQgEADgCAFQgCAEAAAGQABAEABAFQACAEAEADQACADAFACIAHABQAHAAAFgDIAEgEQADgDABgDIAPAAQAAAHgEAFQgEAFgEAEQgFADgGACQgGABgGAAQgHAAgGgCgAhIAhQgGgCgGgFQgGgFgDgHIgCgHIgBgIQAAgGADgLQADgGAGgFQAFgFAHgDQAHgCAHAAQAGAAAFABQAGACAFADQAFAEADAEQAEAGABAGIgPAAQgDgGgFgDQgEgDgHAAQgFAAgDACQgFABgDADQgDADgBAFQgCAEgBAGQAAAEACAFQACAEADADQADADAFACIAIABQAGAAAFgDIAFgEQACgDABgDIAQAAQgBAHgEAFQgDAFgGAEQgEADgGACQgGABgGAAQgHAAgHgCgACvAiIAAg5IgXAAIAAgOIA+AAIAAAOIgXAAIAAA5gAkxAiIAAhAIgeAlIgCAAIgfglIAABAIgSAAIAAhoIAHAAIArA2IArg2IAGAAIAABog");
	this.shape.setTransform(181.7,9.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A01735").s().p("AhxBJIAAgqIgJAEIgJACQgFAAgEgBIgHgEQgEgCgCgDIgFgHIgDgJIgBgLIABgLIADgJIAFgHIAGgGIAHgCIAJgBIAJABIAJAEIAAgpIAQAAIAAApIAKgEIAJgBIAIABIAIACIAGAGIAEAHIADAJIABALIgBALIgDAJIgEAHIgGAFIgIAEQgEABgEAAIgJgCIgKgEIAAAqgAhVgWQgGABgGAFIAAAhQAGAEAGABQAGABAFgDQAEgCADgFQADgGAAgHQAAgHgDgGQgDgFgEgDQgEgBgEAAIgDAAgAiHgVQgFADgDAFQgCAGAAAHQAAAHACAGQADAFAFACQAEADAGgBQAGgBAHgEIAAghQgHgFgGgBIgCAAQgFAAgDABgAlOBJIAAhVIAAgKQgCgCgFAAIAAgMIAIgBIAHACQADABABACQACAEAAAEIAEgGIAGgEQAEgCALgCQAHAAAHAEQAGADAEAFQAEAGACAGQACAHAAAHQAAAIgDAHQgDAHgFAFQgFAFgGADQgHACgHAAQgFgBgEgBIgJgEIAAAqgAkygVQgEACgCADIgEAFIgCAIIAAAUIAKAEIAJABQAEABAEgCIAGgEQADgDABgFQACgEAAgFIgCgIQgBgFgCgCQgDgEgDgCQgEgBgFgBQgEABgDABgAGrAkQgDgEAAgDQAAgFADgDQADgCAEAAQAEAAADACQADADAAAFQAAADgDAEQgDACgEAAQgEAAgDgCgAgMAjQgHgDgFgEQgGgGgDgHIgCgIIgBgHQABgGADgKQADgHAFgFQAFgEAHgCQAGgDAHAAQAGAAAKADQAHADAEAGQAEAFABAHQACAIgCAIIg1AAQAAAFACAEIAFAHQADACAFABQAEACAEAAIANgBQAHgBAGgCIACALQgGADgHACIgOACIgCAAQgHAAgHgDgAgGgYIgGADIgFAGIgCAIIAnAAQAAgFgCgDIgEgFIgGgEIgHAAIgHAAgAjjAjQgGgCgGgFQgFgFgDgHIgDgHIgBgJQAAgGAEgKQADgGAFgFQAFgFAHgCQAHgDAHAAQAHAAAHACQAHACAGAFQAFAFADAHQACAEABAEIABAIIgBAJQgBAEgCADQgDAHgFAFQgFAFgIACQgGACgIABQgHgBgHgCgAjVgXIgIACQgEACgDADIgFAHQgBAEAAAFQAAAFABAFQACAEAEADQADADAEABIAIACIAIgCQAEgBADgDQADgDACgEQABgFAAgFQAAgFgCgFQgBgEgEgDQgDgDgEgCIgGgBIgCAAgACbAjQgHgCgGgFQgFgFgDgHIgDgHIgBgJQAAgGAEgKQADgGAFgFQAGgGAGgCQAHgDAHAAQAGAAAGACQAGABAEAEQAFADAEAFQADAGABAFIgPAAQgCgFgFgDQgFgDgHAAQgEAAgEABQgEACgDADQgEADgBAFQgCAEAAAFQAAAFABAFQACAEAEADQADADAEABIAIACQAGAAAFgDIAFgFQACgCABgDIAQAAQgBAGgEAGQgDAFgFADQgFAEgGACQgFABgHAAQgHAAgGgCgABGAjQgHgCgFgFQgGgFgDgHIgCgHIgBgJQAAgGADgKQADgGAGgFQAFgGAHgCQAHgDAHAAQAGAAAFACQAGABAFAEQAFADADAFQAEAGABAFIgPAAQgDgFgFgDQgFgDgGAAQgFAAgEABQgEACgDADQgDADgCAFQgCAEAAAFQAAAFACAFQACAEADADQADADAEABIAIACQAHAAAFgDIAEgFQADgCABgDIAPAAQgBAGgDAGQgEAFgFADQgEAEgGACQgGABgGAAQgHAAgHgCgAFeAkIAAgXIgOAAIgRAXIgSAAIAAgCIATgYIgGgEIgFgEIgDgGIgCgHQAAgFACgFQACgEADgDQAEgDAEgCIALgCIAkAAIAABHgAFFgUQgEAEAAAFQAAAGAEACQADADAGAAIAQAAIAAgXIgQAAQgGAAgDADgAEOAkIAAgqIguAqIgFAAIAAhHIAQAAIAAAqIAugqIAFAAIAABHgAl5AkIAAhYIgwAAIAABYIgSAAIAAhoIBTAAIAABogAGrgMQgDgDAAgEQAAgEADgCQADgDAEgBQAEABADADQADACAAAEQAAAEgDADQgDADgEAAQgEAAgDgDg");
	this.shape_1.setTransform(47.7,9.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.3,2.4,217.1,14.6);


(lib.text_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sign();
	this.instance.parent = this;
	this.instance.setTransform(0,0.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADHA+IAAgRIg0AAIAAARIgPAAIAAgdIACAAQAEAAACgCQACgBACgEIADgRIAFgjIAzAAIAAA7IAKAAIAAAdgACiAPIgCALQgCAEgDADIAhAAIAAgtIgWAAgAjQAtQgGgCgFgEQgEgEgDgGQgDgGAAgHIAPAAQAAAEACADIAEAFIAGADIAHABIAJgBIAGgEQADgDABgEQACgDAAgFQAAgGgDgFQgDgDgFgCQgFgDgFAAQgGAAgGABIAAgDIAYgjIgqAAIAAgOIBCAAIAAADIgaAlQAGABAFACQAFACAEAFIAFAJQACAFAAAGQAAAIgCAGQgDAGgEAFQgFAFgHACQgHADgIAAQgHAAgHgCgAP5AtQgHgDgFgEQgFgEgDgHIgCgHIgBgIQAAgFACgHIAFgJIAfgyIAUAAIgaApQAEgCAGAAQAHgBAHADQAHACAEAEQAFAFADAGQADAFAAAIIgBAIIgCAHQgDAHgGAEQgFAEgHADQgHACgIAAQgJAAgHgCgAQAgGQgEABgDADQgDACgBAEQgCAEAAAEQAAAFACADQABAEADADQADADAEABIAJABIAIgBIAHgEQADgDACgEQABgDAAgFQAAgEgBgEQgCgEgDgCIgHgEIgIgBIgJABgANUAtQgHgDgFgEQgGgEgDgHIgCgHIgBgIQAAgFACgHIAFgJIAggyIATAAIgZApQAEgCAFAAQAIgBAGADQAHACAFAEQAFAFACAGQADAFAAAIIgBAIIgCAHQgDAHgFAEQgFAEgIADQgHACgIAAQgIAAgHgCgANagGQgEABgCADQgDACgCAEQgCAEAAAEQAAAFACADQACAEADADQACADAFABIAIABIAJgBIAHgEQADgDABgEQACgDAAgFQAAgEgCgEQgBgEgDgCIgHgEIgJgBIgJABgAL4AsQgHgCgGgFQgFgEgCgGQgDgGAAgHIABgJQABgEADgCIAGgHIAHgEQgFgEgDgFQgDgFAAgHQgBgFADgFQACgGAEgDQAEgEAGgCQAHgCAHAAQAHAAAGACQAGACAEAEQAFAEACAEQACAFAAAGQAAAGgDAGQgDAFgGAEIAIAEIAFAHIAEAGQACAEAAAFQAAAHgDAGQgDAGgFAEQgFAFgHACQgIADgIAAQgJAAgHgDgAL/gDIgHADQgDACgBAEQgCADAAAFQAAAEACAEQABADADACQADADAEABQAEABAFABQAEgBAEgBQAEgBADgDIAFgFQACgFAAgDQAAgFgCgDQgCgEgDgCQgDgCgEgBQgEgCgEAAQgFAAgEACgAMBguQgDABgCACQgDACgBADIgBAGIABAGQABADADACIAFACIAHABIAGgBIAGgCQACgCABgDIACgGQAAgDgCgDIgDgFQgFgDgHAAIgHAAgADwAtIgJgEQgDgDgCgEQgDgFAAgEQAAgHACgFQACgFAEgDQAEgDAFgCQAFAAAGAAIALAAQAGABAFAEIAAgHQAAgDgCgDQgBgDgCgBQgFgCgIgBIgNACIgLADIgCgMIAMgEQAHgBAIgBIAMABQAGACAFADQAFADACAFQADAFAAAIIAAAbQAAAGABACQABADAFgBIABAJQgLACgEgCQgDgBgBgCIgCgIQgCADgDADIgGAEQgEACgEAAIgIABQgFAAgEgCgAD+AKQgGAAgEAEIgDADQgCADAAAEQAAAEAFAEQADACAGAAQAHAAAFgDIAFgFQACgCABgEIAAgFIgJgEIgHgBIgDAAgABGAsQgHgCgFgFQgGgEgDgHIgCgIIgBgJQAAgGADgKQADgGAGgFQAFgFAHgCQAGgCAHgBQAIAAAHACQAHADAFAFQAGAEADAHQACAEAAADIABAJIgBAJQAAAEgCAEQgDAHgGAEQgFAFgHACQgHADgHAAQgHAAgHgDgABTgNIgIACQgDABgDADIgFAHQgCADAAAGQAAAFACAFQACAFADACQADADAEACIAIACIAIgCQAEgCADgDQADgDACgEQACgFAAgFQAAgGgCgDQgCgFgDgDQgDgDgEgBIgHgBIgCAAgAweAtQgFAAgFgCIgJgFIgIgFIgGgIIgGgJIgDgLIgBgLIABgMIADgKIAGgKIAGgIIAIgGIAJgEQAFgCAFAAIALgCQAHABAIACQAIACAGAEQAHAFAEAGQAGAKABAFIgRAAQgCgFgDgDQgDgDgEgDQgEgDgFgBIgKgBQgIAAgGADQgHACgEAGQgFAFgDAHQgCAHAAAIQAAAHACAHQADAGAFAFQAEAGAHACQAHADAHABIALgCIAJgDIAHgHQADgEACgGIARAAIgDAJIgEAIQgFAHgHAEQgGAFgIACQgHACgJAAIgKgBgAViAtIAAgVIg0AAIAAgIIAyhKIASAAIAABDIAKAAIAAAPIgKAAIAAAVgAVDAKIAgAAIABgwgATrAtIAagoQgEACgGAAQgIAAgHgCQgGgDgFgCQgFgFgDgGQgCgHAAgIQAAgGADgKQACgGAGgEQAFgFAHgBQAHgDAIAAQAJAAAHADQAHABAFAFQAFAEADAGQADAKAAAGQAAAGgBAFIgGAMIgfAwgAT1gtIgHAEQgDACgCAEQgBAEAAAFQAAAFABADQACAEADADIAHAEQAEABAEAAQAFAAAEgBIAHgEQADgDABgEQACgDAAgFQAAgFgCgEQgBgEgDgCIgHgEIgJgBIgIABgAS/AtIgTgcIgBAAIgTAcIgRAAIAAgBIAbglIgXgfIAAgCIAQAAIAQAYIABAAIAQgYIARAAIAAACIgYAgIAaAkIAAABgAQ7AtIAAgDIApg1QAFgFACgGQACgHgBgFQgBgGgDgDIgFgDIgHAAQgEgBgDACIgFADQgCADgBACQgCAEAAAEIgOAAQAAgHACgHQACgFAEgEQAEgDAGgCQAGgCAIgBIAKACIAJADIAGAGIAEAHQABAFAAAEIgBAJIgDALIgGAKIgcAiIAoAAIAAAOgAPJAtIgTgcIgBAAIgTAcIgRAAIAAgBIAbglIgXgfIAAgCIAQAAIAQAYIABAAIAQgYIARAAIAAACIgYAgIAaAkIAAABgAgNAtIAAhHIAyAAIAAAPIgjAAIAAA4gAhfAtIAAgVIgzAAIAAgIIAxhKIASAAIAABDIAKAAIAAAPIgKAAIAAAVgAh+AKIAgAAIABgwgApWAtIgLgVIgwAAIgKAVIgSAAIAAgCIAxhnIAIAAIAwBnIAAACgApmAJIgSgpIgTApIAlAAgArMAtIAAgtIgwAAIAAAtIgRAAIAAhnIARAAIAAApIAwAAIAAgpIASAAIAABngAs4AtIABhGIhABGIgGAAIAAhnIARAAIgBBFIBAhGIAGAAIAABogAu8AtIAAhYIgfAAIAAgPIBOAAIAAAPIgeAAIAABYgAxuAtIAChGIhBBGIgGAAIAAhnIASAAIgCBFIBAhGIAHAAIAABogA0UAtIAAhnIArAAQAJAAAHADQAHACAFAGQAEAFADAGQACAHAAAIQAAAHgCAGQgDAHgFAEQgEAFgHADQgHADgJAAIgaAAIAAAfgA0DAAIAaAAQAFgBADgBQAEgBADgEQADgDABgDQACgFAAgEQAAgEgCgEQgBgEgDgDQgDgDgDgCQgEgCgFAAIgaAAgA03AtIgfgtIgJABIgKAAIAAAsIgSAAIAAhnIASAAIAAAuIALAAQAGgBADgCQAFgCADgHIAEgPQACgGACgDQADgFADgCQAEgDAGgBQAGgBAIACIAAAMQgIgBgEACQgDADgDAHIgFARQgDAIgFADIAiAyIAAACg");
	this.shape.setTransform(162.7,8.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.5,303.1,16);


(lib.text_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AuhAzIAAgNIg6AAIAAANIgOAAIAAgZIADAAIAGgBQAAAAABAAQAAgBAAAAQABAAAAgBQAAAAAAgBQACgDABgHIAIg9IA2AAIAABLIAKAAIAAAZgAvMANQgCAKgDAEIAmAAIAAg/IgcAAgAPFAzIAAgNIhoAAIAAhXIAOAAIAABKIAgAAIAAhKIAOAAIAABKIAgAAIAAhKIAOAAIAABLIALAAIAAAZgA3jAmIACgMIAHACIAEgBIAFgDIADgFIAFgKIggg4IAAgCIAQAAIAXAsIABAAIAVgsIAPAAIAAABIgiBFIgGAKQgDAEgEADQgFADgFgBQgFAAgIgCgAVrAnIgJgCIgHgEIgHgFIgFgHIgFgIIgCgJIgBgJIABgKIADgJIAEgIIAFgGIAHgFIAHgFIAJgCIAJAAIAJAAIAIACIAIAFIAGAFIAGAGIAEAIIACAJIABAKIAAAJIgCAIIgFAIQgCAEgDADIgGAFIgIAFIgJACIgKABIgIgBgAVogiQgGABgDAEQgFAFgCAGQgCAGAAAHQAAAHACAGQACAGAFAEQADAEAGACQAGACAGAAQAGAAAFgCQAGgCAEgEQAFgEABgGQADgGAAgHQAAgHgDgGQgBgGgFgFQgEgEgGgBQgFgCgGAAQgGAAgGACgALDAnIgIgCIgIgEIgHgFIgFgHIgEgIIgDgJIgBgJIABgKIADgJIAEgIIAGgGIAHgFIAHgFIAJgCIAIAAIAJAAIAIACIAIAFIAHAFIAFAGIAFAIIACAJIABAKIgBAJIgCAIIgEAIQgCAEgEADIgGAFIgIAFIgIACIgKABIgJgBgALBgiQgGABgEAEQgEAFgCAGQgDAGAAAHQAAAHACAGQADAGAEAEQAEAEAGACQAFACAGAAQAHAAAFgCQAFgCAFgEQAEgEACgGQACgGAAgHQAAgHgCgGQgCgGgEgFQgFgEgFgBQgFgCgHAAQgGAAgFACgAJeAnIgIgCIgIgEIgHgFIgFgHIgFgIIgCgJIgBgJIABgKIADgJIAEgIIAGgGIAGgFIAIgFIAIgCIAJAAIAJAAIAIACIAIAFIAHAFIAFAGIAEAIIADAJIABAKIgBAJIgCAIIgFAIQgCAEgDADIgGAFIgIAFIgJACIgJABIgJgBgAJbgiQgFABgEAEQgFAFgCAGQgCAGAAAHQAAAHACAGQACAGAFAEQAEAEAFACQAGACAGAAQAGAAAGgCQAFgCAEgEQAFgEACgGQACgGAAgHQAAgHgCgGQgCgGgFgFQgEgEgFgBQgGgCgGAAQgGAAgGACgAExAnIgIgCIgIgEIgHgFIgFgHIgFgIIgCgJIgBgJIABgKIADgJIAEgIIAGgGIAGgFIAIgFIAIgCIAJAAIAJAAIAIACIAIAFIAHAFIAFAGIAEAIIADAJIABAKIgBAJIgCAIIgFAIQgBAEgEADIgGAFIgIAFIgJACIgJABIgJgBgAEugiQgFABgEAEQgFAFgBAGQgDAGAAAHQAAAHACAGQACAGAFAEQAEAEAFACQAGACAGAAQAGAAAGgCQAFgCAEgEQAFgEACgGQACgGAAgHQAAgHgCgGQgCgGgFgFQgEgEgFgBQgGgCgGAAQgGAAgGACgAkzAnIgIgCIgIgEIgHgFIgFgHIgFgIIgCgJIgBgJIABgKIADgJIAEgIIAGgGIAGgFIAIgFIAIgCIAJAAIAJAAIAIACIAIAFIAHAFIAFAGIAEAIIADAJIABAKIgBAJIgCAIIgFAIQgCAEgDADIgGAFIgIAFQgEACgFAAIgJABIgJgBgAk2giQgFABgEAEQgFAFgCAGQgCAGAAAHQAAAHACAGQACAGAFAEQAEAEAFACQAGACAGAAQAGAAAGgCQAFgCAEgEQAFgEACgGQACgGAAgHQAAgHgCgGQgCgGgFgFQgEgEgFgBQgGgCgGAAQgGAAgGACgAsJAnIgIgCIgIgEIgHgFIgFgHIgFgIIgCgJIgBgJIABgKIADgJIAEgIIAFgGIAHgFIAIgFIAIgCIAJAAIAJAAIAIACIAIAFIAGAFIAGAGIAEAIIADAJIABAKIgBAJIgCAIIgFAIQgCAEgDADIgGAFIgIAFQgEACgFAAIgKABIgIgBgAsMgiQgFABgEAEQgFAFgCAGQgCAGAAAHQAAAHACAGQACAGAFAEQAEAEAFACQAGACAGAAQAGAAAGgCQAFgCAEgEQAFgEACgGQACgGAAgHQAAgHgCgGQgCgGgFgFQgEgEgFgBQgGgCgGAAQgGAAgGACgAwnAnIgIgCIgIgEIgHgFIgFgHIgFgIIgCgJIgBgJIABgKIADgJIAEgIIAGgGIAGgFIAIgFIAIgCIAJAAIAJAAIAIACIAIAFIAHAFIAFAGIAEAIIADAJIABAKIgBAJIgCAIIgFAIQg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");
	this.shape.setTransform(153.5,7.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.1,2.7,302.8,10.3);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,137,31);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F7BA30").s().rr(-67,-21,134,42,6);
	this.shape.setTransform(81,25.2,1.209,1.202);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiTA0IAAgNIg8AAIAAANIgOAAIAAgaIADAAIAFgBQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAAAQACgDABgIIAHg/IA5AAIAABNIAJAAIAAAagAjAANQgBALgFACIAoAAIAAhAIgdAAgAkqAmIACgMIAGACIAGgBIAEgDIADgGIAFgKIghg5IAAgCIARAAIAYAuIABAAIAVguIAQAAIAAACIgkBGIgGALQgDAEgEADQgFACgFAAQgFAAgIgDgAgjAnIAAgMIAHAAQABAAAAAAQABAAABAAQAAgBABAAQAAAAABgBQACgCABgIIAIhCIA5AAIAABaIgPAAIAAhNIgeAAIgEA1IgDANQgCAFgDADQgEADgFABIgDAAIgLgBgADtAnIAAhaIAOAAIAAAeIAXAAQAIgBAFADQAGADAEAEQAEAEADAGQACAEAAAGQAAAHgCAFQgDAFgEAFQgEAEgGACQgFADgIAAgAD7AZIAXAAIAHgBQADgBACgCQADgDABgDQACgDAAgEQAAgEgCgDQgBgBgDgDQgCgCgDgCIgHgBIgXAAgAC2AnIAAhNIgaAAIAAgNIBDAAIAAANIgbAAIAABNgAB/AnIABg9Ig4A9IgEAAIAAhaIAOAAIgBA8IA3g9IAGAAIAABbgAg1AnIgJgTIgpAAIgJATIgQAAIAAgCIAqhZIAHAAIApBZIAAACgAhDAHIgQgjIgQAjIAgAAg");
	this.shape.setTransform(68.7,21.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,1,1).rr(-67,-21,134,42,6);
	this.shape_1.setTransform(67,21);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(-1,-1,136,44), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AitAuIgJgCIgIgEIgGgFIgGgHIgEgIIgDgKIgBgKIABgJIADgKIAEgIIAGgHIAHgFIAHgEIAJgCIAJgBIAJABIAJACIAIAEIAHAFIAGAHIAEAIIACAKIABAJIAAAKIgDAJIgEAIQgCAEgEADIgGAFIgIAFIgJACIgKABIgJgBgAiwgdQgFACgEADQgFAFgCAGQgDAGABAHQAAAIABAGQADAGAFAFQAEADAFACQAGADAGAAQAHAAAGgDQAFgCAFgDQAEgFACgGQACgGABgIQgBgHgCgGQgCgGgEgFQgFgDgFgCQgGgDgHAAQgGAAgGADgAE7AtIAAhaIAOAAIAAAeIAXAAQAIAAAFADQAGACAEAEQAEAEADAFQACAFAAAHQAAAGgCAGQgDAFgEAEQgEAEgGADQgFADgIgBgAFJAgIAXAAIAHgBQADgBACgDQADgDABgDQACgDAAgDQAAgEgCgDQgBgDgDgDQgCgCgDAAIgHgBIgXAAgAEEAtIAAhMIgaAAIAAgOIBDAAIAAAOIgbAAIAABMgADYAtIgJgSIgqAAIgJASIgQAAIAAgBIArhZIAHAAIApBZIAAABgADJAOIgPgjIgQAjIAfAAgABgAtIAAhMIgaAAIAAgOIBEAAIAAAOIgbAAIAABMgAApAtIABg9Ig2A9IgFAAIAAhaIAPAAIgBA9IA2g9IAGAAIAABagAg3AtIAAghIgMACIgKAAIgJgDIgIgEIgFgHIgEgHIgCgKIgBgNIAAgPIAPAAIAAAPQABAMABAEIADAGIADAFIAGADIAGAAQAHAAAJgBIAAgsIAPAAIAABagAkhAtIAAhaIAmAAQAHABAGACQAGACAEAFQAEAFADAFQABAGAAAHQAAAGgBAGQgDAEgEAFQgEAFgGACQgGACgHAAIgXAAIAAAbgAkSAFIAXAAQADAAADgCQAEgBACgCIAEgGIABgHIgBgHIgEgGIgGgEQgDgCgDAAIgXAAgAlHAtIAAhLIgpAAIAABLIgPAAIAAhaIBIAAIAABag");
	this.shape.setTransform(68.1,21.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F7BA30").s().rr(-67,-21,134,42,6);
	this.shape_1.setTransform(67,21);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B48720").s().rr(-67,-21,134,42,6);
	this.shape_2.setTransform(67,22.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,134,43.8), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("Al2F2QiaiagBjcQABjaCaicQCciaDagBQDcABCaCaQCcCcAADaQAADcicCaQiaCcjcAAQjaAAicicg");
	this.shape.setTransform(53,53);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AAJARIAogRIgogQIAAgOIA6AZIAAALIg6AZgAhCARIAogRIgogQIAAgOIA6AZIAAALIg6AZg");
	this.shape.setTransform(146.4,32.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9C1A35").s().p("Ag5AxQgFgBgFgBIgIgFIgHgFIgGgHIgFgJIgDgJIgBgMIABgKIADgKIAFgJIAGgHIAHgFIAIgFQAFgBAFgBIAKgBQAHAAAHACQAHACAGAEQAGAEAFAGQAFAJABAGIgPAAIgGgIIgGgGIgIgDIgKgBQgHAAgGADQgGACgEAFQgFAFgDAGQgBAGAAAHQAAAIABAGQADAGAFAFQAEAFAGACQAHADAGAAIALgBIAHgEIAHgGQADgEACgFIAPAAIgCAJIgDAHQgFAGgGAFQgGAEgIACQgGACgJAAIgJgBgAFvAxIgKgUIgtAAIgKAUIgQAAIAAgCIAthgIAHAAIAtBgIAAACgAE9APIAjAAIgRgmgAEBAxIAAgsIgtAAIAAAsIgQAAIAAhhIAQAAIAAAnIAtAAIAAgnIAQAAIAABhgACcAxIABhBIg7BBIgHAAIAAhhIARAAIgBBAIA7hBIAGAAIAABigAAgAxIAAhSIgcAAIAAgPIBJAAIAAAPIgdAAIAABSgAiEAxIABhBIg7BBIgGAAIAAhhIARAAIgBBAIA7hBIAGAAIAABigAkfAxIAAhhIApAAQAIAAAHADQAFADAFAEQAFAFACAGQADAGgBAIQABAGgDAGQgDAGgEAFQgFAFgFACQgIADgHAAIgYAAIAAAdgAkOAFIAYAAQAEAAADgBIAHgEQACgCABgEIABgIIgBgIIgDgGQgDgDgEgBQgDgCgEAAIgYAAgAlAAxIgcgrIgJABIgJAAIAAAqIgRAAIAAhhIARAAIAAAsIALgBQAFgBADgBQAEgCADgHIAEgOIAEgJQADgEADgCQADgDAFgBQAGgBAIACIAAALQgIAAgDACQgEACgCAIIgEAOQgEAIgEADIAgAvIAAACg");
	this.shape_1.setTransform(51.6,32.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("ACwA7IAAgPIhZAAIAAhDIAPAAIAAA1IAZAAIAAg1IAPAAIAAA1IAZAAIAAg1IAPAAIAAA3IAIAAIAAAbgAHPArQgHgDgFgEQgFgFgCgHIgCgHIgCgIQABgGADgIQADgGAFgFQAEgEAHgCQAGgCAGAAQAHAAAJADQAGACAEAFQAEAFABAHQABAGgBAJIgzAAQAAAEACAEQACAEADACIAHAEIAJABQAGABAGgBQAGgBAGgDIACAMIgNAEIgMABQgJAAgHgCgAHVgMIgGADQgDACgCADIgCAGIAlAAQABgDgCgDIgEgFIgGgDIgHgBIgGABgADeArQgGgDgFgEQgFgFgDgHIgCgHIgBgIQAAgGADgIQADgGAFgFQAFgEAGgCQAHgCAGAAQAGAAAJADQAHACADAFQAFAFABAHQABAGgCAJIgyAAQAAAEACAEQABAEADACIAIAEIAIABQAHABAFgBQAHgBAGgDIACAMIgNAEIgNABQgIAAgIgCgADkgMIgGADQgDACgBADIgDAGIAmAAQAAgDgCgDIgEgFIgFgDIgHgBIgHABgAAWArQgGgDgEgEQgFgEgCgGQgDgFAAgHQgBgGAAgMIACgJIACgJQACgEADgDIAGgHQAEgDADgCIAKgFQAHgCACgCQABgBABAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAIANAAQACAEgBAEQAAADgDADIgGAFIgHAEQgOAFgGAEQgEADgCAEQgCAEgCAGIAFgFIAFgEIAIgDIAHgBQAFAAAJACQAGADAEAFQAEAFACAGQADAFAAAHQAAAHgDAGQgCAHgEAEQgFAFgGACQgKADgFAAQgIAAgHgCgAAcgHQgEABgCADQgDADgCADIgBAIQAAAFABAEQACAEADACQADADAEABQADACAFAAQAEAAAEgCQADgBADgDQADgDACgEQABgEAAgEIgCgIQgBgDgDgDQgDgDgEgBQgEgCgEAAQgFAAgDACgAlOArQgHgDgEgEQgFgFgDgHIgCgHIgBgIQAAgGADgIQADgGAFgFQAFgEAGgCQAHgCAGAAQAGAAAJADQAHACAEAFQAEAFAAAHQACAGgCAJIgyAAQAAAEACAEQABAEADACIAIAEIAIABQAHABAFgBQAHgBAGgDIACAMIgNAEIgNABQgIAAgIgCgAlIgMIgGADQgDACgBADIgCAGIAlAAQAAgDgBgDIgFgFIgFgDIgHgBIgHABgAI/ArQgHgCgEgFQgGgEgCgHIgDgHIAAgIQAAgGADgJQADgGAEgEQAFgFAHgCQAGgCAHAAQAGAAAHACQAGACAGAEQAFAFADAGIACAGIABAJIgBAIIgCAHQgDAHgFAEQgFAFgHACQgGACgGAAQgIAAgGgCgAJMgLIgIACQgDABgDADQgDACgBADQgCAFAAAFQAAAFACAEIAEAHQADADAEABQAEACAEAAQADAAAEgCQADgBADgDQAEgDABgEQACgEgBgFQABgGgCgEIgFgGIgGgEIgGgBIgCAAgAg8ArQgHgCgEgFQgFgEgDgHIgDgHIgBgIQABgGADgJQACgGAFgEQAGgFAGgCQAGgCAGAAQAIAAAGACQAHACAFAEQAFAFADAGIACAGIABAJIgBAIIgCAHQgDAHgFAEQgFAFgGACQgHACgHAAQgGAAgHgCgAgwgLIgHACQgEABgCADQgDACgCADQgBAFAAAFQAAAFABAEIAGAHQACADAEABQADACAEAAQAFAAADgCQAEgBADgDQADgDABgEQABgEAAgFQAAgGgBgEIgFgGIgHgEIgGgBIgCAAgAiOArQgHgCgFgFQgFgEgDgHIgCgHIgBgIQAAgGADgJQADgGAFgEQAFgFAHgCQAGgCAGAAQAHAAAGACQAHACAFAEQAFAFAEAGIACAGIABAJIgBAIIgCAHQgEAHgEAEQgGAFgGACQgGACgHAAQgHAAgGgCgAiCgLIgHACQgEABgDADQgCACgCADQgCAFABAFQgBAFACAEIAFAHQACADAEABQAEACAEAAQAEAAAEgCQADgBADgDQADgDABgEQACgEAAgFQAAgGgCgEIgEgGIgHgEIgGgBIgCAAgAjdArQgGgDgFgEQgGgFgCgGIgDgHIgBgIQAAgGAEgJQACgGAGgFQAEgEAHgCQAGgDAGAAQAHAAAEACQAGABAEADQAEADAEAFQADAFACAGIgPAAQgCgGgFgCQgEgDgHAAIgIABIgGAEIgFAGQgBAFgBAFQABAFABAEIAFAHIAGAEQAEACAEAAQAGAAAFgDIAEgEIADgGIAPAAQgBAHgEAFIgHAIQgFADgGABQgFACgFAAQgHAAgGgCgAmgArQgGgCgFgFQgFgEgDgHIgCgHIgBgIQgBgGAEgJQADgGAFgEQAEgFAHgCQAGgCAHAAQAGAAAHACQAGACAFAEQAGAFADAGIACAGIABAJIgBAIIgCAHQgDAHgFAEQgFAFgHACQgGACgGAAQgIAAgGgCgAmTgLIgHACQgFABgCADQgDACgBADQgCAFAAAFQAAAFACAEIAEAHQADADAEABQAEACAEAAQAEAAADgCQADgBADgDQADgDACgEQABgEABgFQgBgGgBgEIgFgGIgHgEIgFgBIgCAAgAo8ArQgHgCgEgFQgGgEgCgHIgDgHIgBgIQAAgGAEgJQACgGAFgEQAFgFAHgCQAFgCAHAAQAHAAAHACQAGACAFAEQAGAFADAGIABAGIABAJIgBAIIgBAHQgEAHgFAEQgEAFgHACQgGACgHAAQgHAAgGgCgAowgLIgHACQgEABgCADQgEACgBADQgBAFgBAFQABAFABAEIAFAHQACADAEABQAEACAEAAQAEAAADgCQAEgBADgDQADgDABgEQACgEAAgFQAAgGgCgEIgEgGIgHgEIgGgBIgCAAgAKOAsIAAg1IgVAAIAAgOIA6AAIAAAOIgVAAIAAA1gAGaAsIAAgpIgrApIgDAAIAAhDIAOAAIAAAoIAqgoIAGAAIAABDgAFJAsIAAgdIghAAIAAAdIgOAAIAAhDIAOAAIAAAZIAhAAIAAgZIAPAAIAABDgAn8gXIAkABIAJACQAFACADADQACAEAAAGQAAAFgCACQgDAEgEACIAGACIADAEQAEAEAAAHQAAAGgDAEQgDAEgEACQgDACgGAAIgoABgAntAgIANAAQAHAAADgBQABAAABgBQAAAAABAAQAAAAABgBQAAAAABgBQABgCAAgDQAAgDgBgCIgFgDQgDgBgHAAIgNAAgAntADIAMAAIAJgBIADgCIABgEIgBgEQAAAAgBgBQAAAAAAAAQgBgBAAAAQgBAAAAAAQgEgCgFAAIgMAAgAp1AsIAAgsIgsAAIAAAsIgRAAIAAhhIARAAIAAAnIAsAAIAAgnIAQAAIAABhg");
	this.shape_2.setTransform(82.4,15.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AFoC5IyRAAQg8gBAAg7IAAl7QAAg9A8AAIZTAAQA8AAAAA9IAAF7QAAA7g8ABIlCAAQACBBAwBBg");
	this.shape_3.setTransform(87,31.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,174.1,63.1), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.298)").s().p("AlRFSQiMiMAAjGQAAjFCMiMQCMiMDFAAQAcAAAcADQCiASB4B3QCMCMAADFQAADGiMCMQh4B4iiARQgcADgcAAQjFAAiMiMg");
	this.shape.setTransform(47.8,47.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,95.6,95.6), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.letter();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,137,137), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#D69997","#D7575A"],[0,1],-300,0,300,0).s().p("EghJAhIQtutuAAzaQAAzZNutwQNwtuTZAAQTaAANuNuQNwNwAATZQAATatwNuQtuNwzaAAQzZAAtwtwg");
	this.shape.setTransform(300,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,600,600), null);


(lib.moon_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.moon();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.moon_1, new cjs.Rectangle(0,0,203,207), null);


(lib.girl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ava();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.girl, new cjs.Rectangle(0,0,231,250), null);


(lib.devider = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.318)").s().p("A3rAFIAAgJMAvXAAAIAAAJg");
	this.shape.setTransform(151.6,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,303.1,1);


(lib.yellow_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(11));

	// Layer 3
	this.instance = new lib.Symbol11();
	this.instance.parent = this;
	this.instance.setTransform(67,22,0.92,0.964,0,0,0,80.9,25.2);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Symbol11(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

	// Layer 1
	this.instance_1 = new lib.Symbol9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(67,21.9,1,1,0,0,0,67,21.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.11,scaleY:1.11,x:67.1,y:22},9,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:67,y:21.9},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.4,-2.3,149,48.7);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_57 = function() {
		this.gotoAndPlay(0);
	}
	this.frame_69 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(57).call(this.frame_57).wait(12).call(this.frame_69).wait(12));

	// Layer 3
	this.instance = new lib.Symbol5();
	this.instance.parent = this;
	this.instance.setTransform(68.6,63.7,0.735,0.735,0,0,0,47.9,47.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(58).to({_off:false},0).to({regX:47.8,regY:47.8,scaleX:1,scaleY:1,x:69.5,y:61.8,alpha:1},11,cjs.Ease.get(1)).to({regX:47.9,regY:47.9,scaleX:0.74,scaleY:0.74,x:68.6,y:63.7,alpha:0},10).to({_off:true},1).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(68.5,68.5,0.795,0.795,0,0,0,68.5,68.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1},14,cjs.Ease.get(1)).to({rotation:-24,x:71.1,y:67.5},3,cjs.Ease.get(-1)).to({rotation:0,x:68.5,y:68.5},3,cjs.Ease.get(1)).to({rotation:-24,x:71.1,y:67.5},3,cjs.Ease.get(-1)).to({rotation:0,x:68.5,y:68.5},3,cjs.Ease.get(1)).to({rotation:-24,x:71.1,y:67.5},3,cjs.Ease.get(-1)).to({rotation:0,x:68.5,y:68.5},3,cjs.Ease.get(1)).to({rotation:-24,x:71.1,y:67.5},3,cjs.Ease.get(-1)).to({rotation:0,x:68.5,y:68.5},3,cjs.Ease.get(1)).to({scaleX:0.72,scaleY:0.72},12,cjs.Ease.get(-1)).to({scaleX:0.8,scaleY:0.8},7,cjs.Ease.get(1)).to({regX:68.4,scaleX:1.1,scaleY:1.1,rotation:-9.5,x:70.5,y:68.6},12,cjs.Ease.get(1)).to({regX:68.5,scaleX:0.8,scaleY:0.8,rotation:0,x:68.5,y:68.5},11,cjs.Ease.get(-1)).wait(1));

	// Layer 4
	this.instance_2 = new lib.Symbol6();
	this.instance_2.parent = this;
	this.instance_2.setTransform(14,48.7,0.382,0.382,0,0,0,87,25);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(58).to({_off:false},0).to({scaleX:1,scaleY:1,x:-39.9,y:25.1,alpha:1},11,cjs.Ease.get(1)).to({scaleX:0.38,scaleY:0.38,x:14,y:48.7,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(14.1,14.1,108.9,108.9);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_39 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(39).call(this.frame_39).wait(1));

	// Layer 1
	this.icon = new lib.Symbol4();
	this.icon.parent = this;
	this.icon.setTransform(68.5,68.5,1,1,0,0,0,68.5,68.5);
	this.icon.alpha = 0;
	this.icon._off = true;

	this.timeline.addTween(cjs.Tween.get(this.icon).wait(26).to({_off:false},0).to({alpha:1},13).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol12();
	this.instance.parent = this;
	this.instance.setTransform(68.5,15.5,1,1,0,0,0,68.5,15.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.68},6).to({alpha:1},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,137,31);


(lib.ghost_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(11));

	// Layer 3
	this.instance = new lib.Symbol11();
	this.instance.parent = this;
	this.instance.setTransform(67.1,21,0.835,0.854,0,0,0,80.9,25.2);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Symbol11(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

	// Layer 1
	this.instance_1 = new lib.Symbol10();
	this.instance_1.parent = this;
	this.instance_1.setTransform(67,21,1,1,0,0,0,67,21);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0.5},9).to({alpha:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,135.3,43.2);


(lib.circle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.parent.tekst.gotoAndPlay(1);
		this.parent.massage_icon.gotoAndPlay(1);
		this.parent.ava.gotoAndPlay(1);
	}
	this.frame_105 = function() {
		this.gotoAndPlay(19);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(91).call(this.frame_105).wait(1));

	// Layer 1
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(300,300,0.02,0.02,0,0,0,299.9,299.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({regX:300,regY:300,scaleX:1,scaleY:1},18,cjs.Ease.get(1)).to({scaleX:1.06,scaleY:1.06,x:300.1,y:300.1},21,cjs.Ease.get(-1)).to({scaleX:1.13,scaleY:1.13},21,cjs.Ease.get(1)).to({regX:299.9,regY:299.9,scaleX:1.07,scaleY:1.07,x:300,y:300},22,cjs.Ease.get(-1)).to({regX:300,regY:300,scaleX:1,scaleY:1},22,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.ava_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_34 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(34).call(this.frame_34).wait(1));

	// Layer 1
	this.instance = new lib.moon_1();
	this.instance.parent = this;
	this.instance.setTransform(101.5,103.5,1,1,0,0,0,101.5,103.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).wait(1).to({rotation:79.4,y:103.6,alpha:0.221},0).wait(1).to({rotation:136.3,y:103.5,alpha:0.378},0).wait(1).to({rotation:176.4,alpha:0.49},0).wait(1).to({rotation:205.6,alpha:0.571},0).wait(1).to({rotation:228.2,alpha:0.634},0).wait(1).to({rotation:246.9,alpha:0.686},0).wait(1).to({rotation:263.2,alpha:0.731},0).wait(1).to({rotation:278.2,x:101.6,alpha:0.773},0).wait(1).to({rotation:291.4,alpha:0.81},0).wait(1).to({rotation:302.9,x:101.5,alpha:0.841},0).wait(1).to({rotation:312.9,alpha:0.869},0).wait(1).to({rotation:321.6,x:101.6,alpha:0.893},0).wait(1).to({rotation:329,x:101.5,alpha:0.914},0).wait(1).to({rotation:335.4,x:101.6,alpha:0.932},0).wait(1).to({rotation:340.8,x:101.5,alpha:0.947},0).wait(1).to({rotation:345.4,alpha:0.959},0).wait(1).to({rotation:349.2,alpha:0.97},0).wait(1).to({rotation:352.4,alpha:0.979},0).wait(1).to({rotation:354.9,x:101.6,alpha:0.986},0).wait(1).to({rotation:356.8,alpha:0.991},0).wait(1).to({rotation:358.3,x:101.5,alpha:0.995},0).wait(1).to({rotation:359.3,x:101.6,alpha:0.998},0).wait(1).to({rotation:359.8,alpha:0.999},0).wait(1).to({rotation:360,x:101.5,alpha:1},0).wait(1));

	// Layer 2
	this.instance_1 = new lib.girl();
	this.instance_1.parent = this;
	this.instance_1.setTransform(101.5,103.5,0.128,0.128,0,0,0,113.9,115.9);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).wait(1).to({regX:115.5,regY:125,scaleX:0.32,scaleY:0.32,x:102,y:106.4,alpha:0.221},0).wait(1).to({scaleX:0.46,scaleY:0.46,x:102.3,y:107.7,alpha:0.378},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:102.4,y:108.6,alpha:0.49},0).wait(1).to({scaleX:0.63,scaleY:0.63,x:102.5,y:109.2,alpha:0.571},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:102.6,y:109.7,alpha:0.634},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:102.7,y:110.2,alpha:0.686},0).wait(1).to({scaleX:0.77,scaleY:0.77,y:110.5,alpha:0.731},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:102.8,y:110.9,alpha:0.773},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:102.9,y:111.1,alpha:0.81},0).wait(1).to({scaleX:0.86,scaleY:0.86,y:111.4,alpha:0.841},0).wait(1).to({scaleX:0.89,scaleY:0.89,y:111.6,alpha:0.869},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:103.1,y:111.8,alpha:0.893},0).wait(1).to({scaleX:0.93,scaleY:0.93,y:112,alpha:0.914},0).wait(1).to({scaleX:0.94,scaleY:0.94,y:112.2,alpha:0.932},0).wait(1).to({scaleX:0.95,scaleY:0.95,y:112.3,alpha:0.947},0).wait(1).to({scaleX:0.97,scaleY:0.97,y:112.4,alpha:0.959},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:103.2,y:112.5,alpha:0.97},0).wait(1).to({scaleX:0.98,scaleY:0.98,alpha:0.979},0).wait(1).to({scaleX:0.99,scaleY:0.99,y:112.6,alpha:0.986},0).wait(1).to({scaleX:0.99,scaleY:0.99,alpha:0.991},0).wait(1).to({scaleX:1,scaleY:1,y:112.7,alpha:0.995},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.998},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.999},0).wait(1).to({regX:114,regY:116,x:101.5,y:103.6,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_24 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(24).call(this.frame_24).wait(1));

	// text_4
	this.instance = new lib.text_4();
	this.instance.parent = this;
	this.instance.setTransform(-279.8,144.4,1,1,0,0,0,85.2,9.5);
	this.instance._off = true;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({_off:false},0).to({x:86.2},9,cjs.Ease.get(1)).wait(1));

	// text_3
	this.instance_1 = new lib.text_3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-254.5,119.8,1,1,0,0,0,111.5,9.5);
	this.instance_1._off = true;
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12).to({_off:false},0).to({x:111.5},9,cjs.Ease.get(1)).wait(4));

	// text_2
	this.instance_2 = new lib.text_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-210.3,93.1,1,1,0,0,0,153,9.5);
	this.instance_2._off = true;
	new cjs.ButtonHelper(this.instance_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({x:155.8},9,cjs.Ease.get(1)).wait(7));

	// devider
	this.instance_3 = new lib.devider();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-211.6,71.6,1,1,0,0,0,151.6,0.5);
	this.instance_3._off = true;
	new cjs.ButtonHelper(this.instance_3, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({_off:false},0).to({x:154.4},9,cjs.Ease.get(1)).wait(10));

	// text_1
	this.instance_4 = new lib.text_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-211.2,54.1,1,1,0,0,0,154,8.5);
	this.instance_4._off = true;
	new cjs.ButtonHelper(this.instance_4, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3).to({_off:false},0).to({x:154.8},9,cjs.Ease.get(1)).wait(13));

	// logo
	this.logo = new lib.logo_1();
	this.logo.parent = this;
	this.logo.setTransform(-294.8,15.5,1,1,0,0,0,68.5,15.5);

	this.timeline.addTween(cjs.Tween.get(this.logo).to({x:71.3},9,cjs.Ease.get(1)).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-363.3,0,137,31);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		
		if(window.devicePixelRatio == 1){
			stage.scaleX = stage.scaleY = 2;
			stage.canvas.width = 600 * 2;
			stage.canvas.height = 300 * 2;
			stage.canvas.style.width = '600px';
			stage.canvas.style.height = '300px';
		}
		
		if(window.devicePixelRatio > 1){
			stage.scaleX = stage.scaleY = window.devicePixelRatio;
			stage.canvas.width = 600 * window.devicePixelRatio;
			stage.canvas.height = 300 * window.devicePixelRatio;
			stage.canvas.style.width = '600px';
			stage.canvas.style.height = '300px';
		}
		
		
		this.read.alpha = 0;
		this.del.alpha = 0;
		this.dialog.alpha = 0;
		
		setTimeout(function(){ 
			
			_this.cicrcle.gotoAndPlay(1);
		
			var target = _this.read;
			var tween = createjs.Tween.get(target, {loop: false}).to({alpha: 1}, 700);
		
			var target2 = _this.del;
			var twee2n = createjs.Tween.get(target2, {loop: false}).to({alpha: 1}, 700);
		
			var target3 = _this.dialog;
			var twee3n = createjs.Tween.get(target3, {loop: false}).to({alpha: 1}, 700);
		
		
		}, 1000);
		
		
		this.dialog.addEventListener("mouseover", function(){_this.massage_icon.icon.gotoAndPlay(58);});
		this.dialog.addEventListener("mouseout", function(){_this.massage_icon.icon.gotoAndPlay(70);});
		
		this.read.addEventListener("mouseover", function(){_this.read.gotoAndPlay(1);});
		this.read.addEventListener("mouseout", function(){_this.read.gotoAndPlay(10);});
		
		this.del.addEventListener("mouseover", function(){_this.del.gotoAndPlay(1);});
		this.del.addEventListener("mouseout", function(){_this.del.gotoAndPlay(10);});
		
		stage.canvas.addEventListener("click", function(){window.open(clickTAG, "_blank");});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// dialg
	this.dialog = new lib.Symbol7();
	this.dialog.parent = this;
	this.dialog.setTransform(512.2,215.1,1,1,0,0,0,53,53);
	new cjs.ButtonHelper(this.dialog, 0, 1, 2, false, new lib.Symbol7(), 3);

	this.timeline.addTween(cjs.Tween.get(this.dialog).wait(1));

	// massage_icon
	this.massage_icon = new lib.Symbol1();
	this.massage_icon.parent = this;
	this.massage_icon.setTransform(444,151);

	this.timeline.addTween(cjs.Tween.get(this.massage_icon).wait(1));

	// buttons
	this.del = new lib.ghost_btn();
	this.del.parent = this;
	this.del.setTransform(199.6,212.9);

	this.read = new lib.yellow_btn();
	this.read.parent = this;
	this.read.setTransform(110.5,234.8,1,1,0,0,0,67,21.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.read},{t:this.del}]}).wait(1));

	// tekst
	this.tekst = new lib.Symbol8();
	this.tekst.parent = this;
	this.tekst.setTransform(194.7,119.9,1,1,0,0,0,154.4,76.9);

	this.timeline.addTween(cjs.Tween.get(this.tekst).wait(1));

	// ava
	this.ava = new lib.ava_1();
	this.ava.parent = this;
	this.ava.setTransform(455.5,150.5,1,1,0,0,0,101.5,103.5);

	this.timeline.addTween(cjs.Tween.get(this.ava).wait(1));

	// circle
	this.cicrcle = new lib.circle();
	this.cicrcle.parent = this;
	this.cicrcle.setTransform(151,150,1,1,0,0,0,300,300);
	this.cicrcle.shadow = new cjs.Shadow("rgba(0,0,0,0.286)",3,3,121);

	this.timeline.addTween(cjs.Tween.get(this.cicrcle).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.1,-126,888.1,544);
// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 30,
	color: "#660099",
	opacity: 0.00,
	webfonts: {},
	manifest: [
		{src:"images/ava.png", id:"ava"},
		{src:"images/letter.png", id:"letter"},
		{src:"images/logo.png", id:"logo"},
		{src:"images/moon.png", id:"moon"},
		{src:"images/sign.png", id:"sign"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;