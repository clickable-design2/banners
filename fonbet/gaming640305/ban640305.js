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



(lib.babaluk = function() {
	this.initialize(img.babaluk);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,280,273);


(lib.babamech = function() {
	this.initialize(img.babamech);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,201);


(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,400);


(lib.blik = function() {
	this.initialize(img.blik);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,35,140);


(lib.btn = function() {
	this.initialize(img.btn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,406,162);


(lib.gamepad = function() {
	this.initialize(img.gamepad);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,66,48);


(lib.like = function() {
	this.initialize(img.like);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,66,64);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,25);


(lib.mangun = function() {
	this.initialize(img.mangun);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,160);


(lib.orc = function() {
	this.initialize(img.orc);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,133);


(lib.txt1 = function() {
	this.initialize(img.txt1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,279,49);


(lib.txt2 = function() {
	this.initialize(img.txt2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,345,54);


(lib.wallet = function() {
	this.initialize(img.wallet);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,66,66);// helper functions:

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


(lib.Символ57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.gamepad();
	this.instance.parent = this;
	this.instance.setTransform(-33,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ57, new cjs.Rectangle(-33,-24,66,48), null);


(lib.Символ56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Eg+fAKsIAA1XMB8/AAAIAAVXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ56, new cjs.Rectangle(-400,-68.4,800,136.8), null);


(lib.Символ55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AsPDGQghAAAAgiIAAlHQAAgiAhAAIYfAAQAiAAgBAiIAAFHQABAigiAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ55, new cjs.Rectangle(-81.7,-19.8,163.5,39.6), null);


(lib.Символ53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AxfFIIAAqPMAi/AAAIAAKPg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Eg0bAZAMAAAgx/MBo3AAAMAAAAx/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ52, new cjs.Rectangle(-335.6,-160,671.2,320), null);


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABbByIAAgRIg+AAIAAhTIAWAAIAAA/IAdAAIAAg/IAXAAIAAA/IAKAAIgCAlgAiLBlIAAgJIgJgBIgJgCIgHgDIgHgFIgEgFIgDgHIgDgHIgBgIIABgHIADgHIADgHIAFgFIAGgFIAHgDIAJgCIAJgBIAAgHIAYAAIAAAHIAJABIAJACIAHADIAGAFIAFAFIADAHIACAHIABAHIgBAIIgCAHIgDAHIgFAFIgGAFIgHADIgIACIgKABIAAAJgAhzBHIAHgBIAGgDIAEgGQACgDAAgDQAAgFgCgCIgEgGQgDgCgDgBIgHgBgAiTAnQgDABgDACQgCADgBADQgCACABAFQgBADACADQABAEACACIAGADIAIABIAAghIgIABgAj+BlIAAgJIgJgBIgJgCIgHgDIgGgFIgFgFIgDgHIgCgHIgBgIIABgHIACgHIADgHIAGgFIAFgFIAHgDIAJgCIAJgBIAAgHIAYAAIAAAHIAKABIAIACIAIADIAFAFIAGAFIADAHIACAHIABAHIgBAIIgCAHIgDAHIgGAFIgFAFIgIADIgIACIgKABIAAAJgAjmBHIAIgBIAFgDIAFgGQABgDAAgDQAAgFgBgCIgFgGQgCgCgDgBIgIgBgAkFAnQgEABgCACQgDADgBADQgBACAAAFQAAADABADQABAEADACIAGADIAHABIAAghIgHABgAlnBiIgKgEQgEgCgDgEIgHgGIARgNQADAFAFACQAEADAHgBIAGgBIAGgDIAEgFIADgFIgbAAIAAgRIAbAAIgDgGIgFgEIgFgEIgGgBQgGABgFACQgEACgEAEIgQgNIAHgGIAHgGIAJgDIALgBIAKABIAIACIAIAEIAGAFIAFAHIAEAIIADAIIABAJIgBAJIgDAIIgEAHIgFAHIgGAFIgIAEIgIACIgJABIgMgBgAm9BiIgJgCIgIgEIgHgGIgFgGIgEgHIgDgIIAAgJIAAgJIADgIIAEgIIAFgHIAHgEIAIgFIAJgCIAJgBIAJABIAJACIAIAEIAGAFIAFAHIAFAIIACAIIABAJIgBAJIgCAIIgFAHIgFAGIgGAGIgIADIgJADIgJABIgJgBgAm9AiQgEACgDAEQgDADgBAEQgBAEAAAFQAAAEABAEQABAEADADIAHAGIAJABQAFAAAEgBIAHgGIADgGQACgFAAgEQAAgFgCgEIgDgHIgHgGQgEgBgFAAQgFAAgEABgAIgBhIAAhTIAXAAIAABTgAHPBhIAAhTIAXAAIAAAaIANAAQAIAAAGABQAGACAFAEQAFADADAGIABAGIABAGQAAAHgCAFQgDAGgEAEQgFADgGACQgGACgIAAgAHmBOIANAAQAFAAAEgCQACgDAAgFQAAgFgCgCQgEgDgFAAIgNAAgAGUBhIAAg/IgYAAIAAgUIBJAAIAAAUIgZAAIAAA/gAFaBhIAAgfIgeAAIAAAfIgXAAIAAhTIAXAAIAAAfIAeAAIAAgfIAYAAIAABTgADVBhIAAhTIBEAAIAAATIgtAAIAAANIAoAAIAAATIgoAAIAAAMIAtAAIAAAUgACvBhIAAgvIghAvIgVAAIAAhTIAXAAIAAAvIAggvIAWAAIAABTgAgJBhIAAgvIggAvIgWAAIAAhTIAXAAIAAAvIAhgvIAVAAIAABTgAoBBhIgVgeIgJAJIAAAVIgXAAIAAhTIAXAAIAAAiIAdgiIAbAAIgfAjIAhAwgAAGgbIgIgDIgHgDIgGgGIgGgHIgEgHIgDgIIgBgJIABgJIADgIIAEgHIAGgHIAGgFIAIgFIAHgCIAKAAIAJAAIAJACIAHAFIAHAFIAFAHIAFAHIACAIIABAJIgBAJIgCAIIgFAHIgFAHIgHAFIgIAEIgIADIgKAAIgJAAgAAHhbQgEACgCADQgDADgBAFQgCAEABAEQgBAEACAFQABAEADADIAGAFQAEACAFgBQAEABAEgCIAHgFIAEgHQADgFAAgEQAAgEgDgEIgEgIIgHgFQgDgBgGgBQgEABgEABgAhSgbIgIgDIgHgDIgGgGIgGgGIgDgHIgDgJIgBgJIABgJIADgIIADgHIAGgHIAGgFIAHgFIAJgCIAJAAIAMABIAKADQAEACAEAEIAFAHIgRANQgDgEgEgDQgFgCgGgBQgEAAgEACQgDACgDADQgDADgCAFQgBAEAAAEIABAJIAFAHQADADADACQAEABAEAAIAGgBIAFgBQAEgCAEgGIARAMIgGAIIgIAHQgEACgGABQgGABgHAAIgJAAgAD9gcIAAhUIBDAAIAAAUIgtAAIAAANIApAAIAAASIgpAAIAAANIAtAAIAAAUgADWgcIAAgwIggAwIgWAAIAAhUIAYAAIAAAvIAggvIAWAAIAABUgAB+gcIgVgfIgJAKIAAAVIgXAAIAAhUIAXAAIAAAiIAdgiIAbAAIgfAkIAhAwgAiXgcIAAhUIAXAAIAABUgAjngcIAAhUIAWAAIAAAbIAOAAQAHgBAGACQAHACAEAEQAFADADAGIABAFIACAHQAAAGgDAGQgDAFgEAEQgEAEgHACQgGACgHAAgAjRgwIANAAQAGABADgDQADgDAAgFQAAgEgDgDQgDgCgGAAIgNAAgAk9gcIAAhUIArAAQAIAAAFACQAGACAEAEIAEAFQACAEgBAEIgBAHIgCAFIgFAEIgEADIAGADIAFAEQADADABADIABAIQAAAFgCAFQgCAEgEADQgFADgGABQgFACgIAAgAkmgvIASAAQAFAAADgCQADgCAAgEQAAgDgDgCQgDgCgFAAIgSAAgAkmhOIAOAAQAGAAACgDQADgBABgEQgBgEgDgCQgCgCgGAAIgOAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ49, new cjs.Rectangle(-56.7,-11.4,113.4,22.9), null);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AguBpIABgSIAGAAQABAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAQADgCABgFQACgFABgLIABgeIAAgLIBAAAIAABTIgXAAIAAg/IgTAAIAAADIgCAgIgCAKIgEAIIgEAGIgEADIgGACIgGAAIgNgBgAEyBpIAAhTIAYAAIAABTgADiBpIAAhTIAXAAIAAAaIANAAQAHAAAHABQAGADAFADQAEADADAGIACAGIABAHQAAAGgDAFQgCAGgFAEQgEADgGACQgGACgIAAgAD5BWIAMAAQAGAAADgCQADgDAAgFQAAgEgDgDQgDgDgGAAIgMAAgACnBpIAAg/IgZAAIAAgUIBKAAIAAAUIgaAAIAAA/gAByBpIgGgOIghAAIgGAOIgYAAIAkhUIAWAAIAkBUgABlBJIgJgYIgKAYIATAAgAhLBpIAAg/IgdAAIAAA/IgXAAIAAhTIBLAAIAABTgAilBpIAAhTIAXAAIAABTgAj2BpIAAhTIAXAAIAAAaIANAAQAIAAAGABQAHADAEADQAFADADAGIABAGIABAHQAAAGgCAFQgDAGgEAEQgFADgGACQgGACgIAAgAjfBWIANAAQAFAAAEgCQADgDAAgFQAAgEgDgDQgEgDgFAAIgNAAgAlLBpIAAhTIArAAQAIAAAFABQAGACAEAEIAEAGQABADAAAFIgBAGIgDAGIgEADIgFADIAHAEIAFAEQADADABADIABAIQAAAFgCAEQgCAFgFADQgEACgGACQgGACgHgBgAk1BXIASAAQAGAAADgCQADgDAAgDQAAgDgDgCQgDgCgGgBIgSAAgAk1A3IAPAAQAFAAADgCQADgCAAgDQAAgEgDgCQgCgCgGAAIgPAAgAiWgTIgJgDIgIgDIgGgGIgGgHIgEgHIgCgIIgBgJIABgJIACgIIAEgHIAGgHIAGgFIAIgFIAJgCIAJAAIAKAAIAIACIAIAEIAGAGIAGAHIAEAHIACAIIABAJIgBAJIgCAIIgEAHIgGAHIgGAFIgIAEIgJADIgJAAIgJAAgAiWhTQgEACgCADQgDADgCAFQgBAEAAAEQAAAEABAEQACAFADADIAGAFIAJABQAFAAAEgBIAHgFIAEgHQACgFAAgEQAAgEgCgEIgEgIIgHgFQgEgBgFgBQgFABgEABgAF9gUIAAhUIBEAAIAAAUIgtAAIAAAMIApAAIAAATIgpAAIAAANIAtAAIAAAUgAFXgUIAAhUIAYAAIAABUgAEHgUIAAhUIAXAAIAAAbIANAAQAHgBAHACQAGACAFAEQAEADADAGIACAFIABAHQAAAGgDAGQgCAFgFAEQgEAEgGACQgGACgIAAgAEegoIAMAAQAGAAADgCQADgDAAgEQAAgFgDgDQgDgCgGAAIgMAAgADhgUIAAggIgeAAIAAAgIgXAAIAAhUIAXAAIAAAfIAeAAIAAgfIAXAAIAABUgACGgUIAAggIgeAAIAAAgIgXAAIAAhUIAXAAIAAAfIAeAAIAAgfIAXAAIAABUgAABgUIAAhUIBDAAIAAAUIgsAAIAAAMIAoAAIAAATIgoAAIAAANIAtAAIAAAUgAhUgUIAAhUIArAAQAIAAAGACQAFACAEAEIAEAFQACAEAAAEIgBAHIgDAFIgEAEIgFADIAHADIAFAEQACADABADIABAIQAAAFgCAFQgCAEgEADQgEADgGABQgGACgIAAgAg9gnIASAAQAFAAADgBQADgDAAgEQAAgDgDgCQgDgCgFAAIgSAAgAg9hGIAPAAQAFgBADgCQADgCAAgDQAAgEgDgCQgDgBgFAAIgPAAgAjdgUIAAggIgeAAIAAAgIgXAAIAAhUIAXAAIAAAfIAeAAIAAgfIAXAAIAABUgAlYgUIAAhUIA8AAIAAAUIglAAIAABAgAl+gUIAAgwIgWAgIAAAAIgWggIAAAwIgWAAIAAhUIAYAAIAUAgIAUggIAZAAIAABUg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ48, new cjs.Rectangle(-44.9,-10.6,89.9,21.3), null);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjJC2IgJgDIgHgEIgHgFIgFgHIgEgHIgDgIIgBgJIABgJIADgIIAEgIIAFgGIAHgFIAIgFIAIgCIAKgBIAJABIAJACIAHAEIAHAGIAFAGIAEAIIADAIIABAJIgBAJIgDAIIgEAHIgFAHIgHAFIgIAEIgIADIgKAAIgJAAgAjIB2QgEACgDADQgDADgBAEQgCAEAAAFQAAAEACAEQABAFADADIAHAFIAJABQAEAAAEgBIAHgFIAEgHQACgFAAgEQAAgFgCgEIgEgHIgHgFQgEgCgFAAQgEAAgEACgAkiC2IgIgDIgHgEIgHgFIgFgGIgEgIIgCgIIgBgJIABgJIACgIIAEgIIAFgGIAHgGIAHgEIAJgCIAJgBIAMABIAJAEQAFACADAEIAGAHIgRANQgDgFgFgCQgEgDgGAAQgEAAgEACQgEACgDADQgCADgCAEQgBAEAAAFIABAJIAEAHQADADAEABQAEACAEAAIAGgBIAFgCQAEgCAEgFIARAMIgGAIIgIAGQgFADgFABQgGABgHAAIgJAAgAEkC1IAAgwIggAwIgWAAIAAhUIAXAAIAAAvIAhgvIAVAAIAABUgADIC1IAAgwIggAwIgWAAIAAhUIAXAAIAAAvIAhgvIAVAAIAABUgABYC1IAAhAIgZAAIAAgUIBJAAIAAAUIgZAAIAABAgAAdC1IAAhUIAYAAIAABUgAgyC1IAAhUIAXAAIAAAaIANAAQAHAAAHACQAFACAFADQAEAEADAFIACAGIABAHQAAAGgDAGQgCAFgFAEQgEAEgGACQgFACgIAAgAgbChIAMAAQAGAAADgCQADgDAAgFQAAgEgDgDQgDgDgGAAIgMAAgAiGC1IAAhUIBDAAIAAAUIgsAAIAAAJIAQAAQAIAAAGACQAGACAEADQAFADACAFQADAIAAAEQAAAHgCAFQgDAFgEAEQgEADgGACQgGACgIAAgAhvChIAQAAQAFAAADgCQADgCAAgFQAAgEgDgCQgDgCgFAAIgQAAgAEOBaIgHgDIgEgGIgDgIIANgCQABADACACQACACAEAAQADAAACgCQACgCABgDIANACQgBAEgCAEQgBADgDADIgGADIgIABIgIgBgAgcA3IgJgCIgHgEIgHgGIgFgGIgEgIIgDgIIgBgJIABgJIADgHIAEgHIAFgHIAHgFIAIgEIAIgDIAKAAIAJA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JABQAFAAAEgBIAHgFIAEgHQACgFAAgEQAAgFgCgEIgEgHIgHgFQgEgCgFAAQgFAAgEACgAnThGIgJgDIgIgEIgGgFIgGgHIgEgHIgCgIIgBgJIABgJIACgIIAEgIIAGgGIAGgFIAIgFIAJgCIAJgBIAKABIAIACIAIAEIAGAGIAGAGIAEAIIACAIIABAJIgBAJIgCAIIgEAHIgGAHIgGAFIgIAEIgJADIgJAAIgJAAgAnTiGQgEACgCADQgDADgCAEQgBAEAAAFQAAAEABAEQACAFADADIAGAFIAJABQAFAAAEgBIAHgFIAEgHQACgFAAgEQAAgFgCgEIgEgHIgHgFQgEgCgFAAQgFAAgEACgAmahIIACgSIAFABQABAAABAAQAAAAABgBQAAAAABAAQAAAAABgBQACgCACgEQACgGABgLIABgeIAAgLIBAAAIAABUIgXAAIAAhAIgTAAIAAADIgCAgIgDAKIgDAIIgEAGIgFAEIgFABIgGABIgOgCgAIBhHIAAhUIAkAAQAIAAAGACQAHACAEAEQAFADACAGQADAIAAAEIgBAIIgCAGIgDAFIgFAEQgEAEgHACQgHACgIAAIgLAAIAAAYgAIYhxIALAAIAGgBIAEgCQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAAAgBIABgFIgBgEQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAgBIgEgCIgGgBIgLAAgAFJhHIAAhUIBEAAIAAAUIgtAAIAAAJIARAAQAHAAAGACQAGACAFADQAEADADAFQACAIAAAEQAAAHgCAFQgCAFgEAEQgFADgGACQgGACgHAAgAFghbIAQAAQAFAAADgCQADgCAAgFQAAgEgDgCQgDgCgFAAIgQAAgAEjhHIAAhUIAYAAIAABUgADThHIAAhUIAXAAIAAAaIANAAQAHAAAHACQAGACAFADQAEAEADAFIACAGIABAHQAAAGgDAGQgCAFgFAEQgEAEgGACQgGACgIAAgADqhbIAMAAQAGAAADgCQADgDAAgFQAAgEgDgDQgDgDgGAAIgMAAgAB9hHIAAhUIArAAQAIAAAGACQAFACAEADIAEAGQACAEAAAEIgBAHIgDAFIgEAEIgFADIAHADIAFAEQACADABADIABAIQAAAFgCAEQgCAFgEADQgEADgGABQgGACgIAAgACUhaIASAAQAFAAADgCQADgCAAgEQAAgDgDgCQgDgCgFAAIgSAAgACUh6IAPAAQAFAAADgCQADgCAAgDQAAgEgDgCQgDgCgFAAIgPAAgAA2hHIAAgwIggAwIgWAAIAAhUIAXAAIAAAvIAhgvIAVAAIAABUgAjmhHIAAhUIAXAAIAAA/IAYAAIAAg/IAXAAIAAA/IAYAAIAAg/IAXAAIAABUgAk3hHIAAhUIAXAAIAAAaIANAAQAIAAAGACQAHACAEADQAFAEADAFIABAGIABAHQAAAGgCAGQgDAFgEAEQgFAEgGACQgGACgIAAgAkghbIANAAQAFAAAEgCQADgDAAgFQAAgEgDgDQgEgDgFAAIgNAAgApIhHIAAhUIBDAAIAAAUIgsAAIAAAJIAQAAQAIAAAGACQAGACAEADQAFADACAFQADAIAAAEQAAAHgCAFQgDAFgEAEQgEADgGACQgGACgIAAgAoxhbIAQAAQAFAAADgCQADgCAAgFQAAgEgDgCQgDgCgFAAIgQAAgAAgiiIgHgDIgEgGIgDgIIANgCQABADACACQACACAEAAQADAAACgCQACgCABgDIANACQgBAEgCAEQgBADgDADIgGADIgIABIgIgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ47, new cjs.Rectangle(-66.3,-18.2,132.6,36.5), null);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33FF00").s().p("AAXAgQgJgFABgEQAAgFAJgGQAIgGAHgBQAHgBAHADQAIADgBAIQgBAHgHAGQgGAFgHAAQgHAAgJgEgAg0gGQgFgFgBgFQgCgEADgHQADgFAFgDQAGgCADAFQADAFABAFQACAFgDAHQgDAHgDACIgCAAQgDAAgEgFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ42, new cjs.Rectangle(-5.9,-3.6,12,7.3), null);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AglAmQgMgLgFgSQgFgRAFgQQAFgPANgDQAMgDAtAAQAuABgMAXQgLAWgWAVQgWAUgMADIgHABQgJAAgJgIg");
	this.shape.setTransform(2.5,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E77600").s().p("Ag0A7QgTgRgIgdQgHgbAIgYQAIgYATgFQATgFA5ACQA5ABABAgQACAfgoAjQgoAkgSAFIgKACQgOAAgPgNgAgsgqQgNADgFAPQgFAQAFARQAFASAMALQAMALANgEQAMgDAWgUQAWgVALgWQALgXgtgBIgNAAQgiAAgKADg");
	this.shape_1.setTransform(3.3,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ39, new cjs.Rectangle(-5,-7.3,16.7,14.4), null);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.babaluk();
	this.instance.parent = this;
	this.instance.setTransform(-163.9,-106.6,1,1,-11.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ37, new cjs.Rectangle(-163.9,-161.1,327.9,322.3), null);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wallet();
	this.instance.parent = this;
	this.instance.setTransform(-33,-33);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ24, new cjs.Rectangle(-33,-33,66,66), null);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.like();
	this.instance.parent = this;
	this.instance.setTransform(-33,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ23, new cjs.Rectangle(-33,-32,66,64), null);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.txt1();
	this.instance.parent = this;
	this.instance.setTransform(-140,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ21, new cjs.Rectangle(-140,-35,279,49), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.txt2();
	this.instance.parent = this;
	this.instance.setTransform(-173,-42);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(-173,-42,345,54), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#660000").s().p("AqOBPIAAgbIhQAAIgCAbIgaAAIAAg1IAMAAIAGgQQADgJABgKIAEgXIAAgsIBeAAIAABmIAQAAIgEA1gArEgmQgCAagCAKQgFAUgDAIIAyAAIAAhMIgmAAgAMRA0QgHgBgHgEIALgWQAIAFAIAAQAEAAAEgCQAEgDAEgFIg0hgIAgAAIAkBEIAehEIAgAAIgyBjQgEAIgFAGQgFAHgFADQgFADgGACQgGACgHABQgHAAgHgDgACWA1QgGgBgGgDIgLgGIgKgIIgIgKQgDgFgDgGQgCgGgBgHQgCgFAAgIQAAgGACgHQABgGACgHIAGgLQADgGAFgDQAEgFAGgEQAFgEAHgCIAMgEQAIgBAHAAQAJAAAHABQAHABAGADQAJAFALAKIgQAUQgJgIgGgDQgLgDgHAAQgJAAgHADQgGADgFAGQgFAFgDAHQgDAIAAAIQAAAJADAGQADAHAFAGQAFAGAGADQAHADAJAAQAHAAALgEQAHgEAJgHIASATIgKAJIgNAIIgNAEQgIACgJAAIgPgCgAtGA1QgHgBgGgDIgLgGIgKgIIgIgKIgGgLIgDgNIgCgNIACgNIADgNIAGgLIAIgJIAKgJQAGgEAGgCIAMgEQAIgBAHAAQAIAAAJABQAGABAGADQAJAFAMAKIgRAUQgJgIgGgDQgLgDgHAAQgJAAgHADQgGADgFAGQgFAFgDAHQgDAIAAAIQAAAJADAGQADAHAFAGQAFAGAGADQAHADAJAAQAHAAALgEQAHgEAJgHIASATQgFAGgFADIgNAIQgGADgHABQgIACgJAAQgIAAgGgCgAnwA0IADgXIAEAAQAGAAAEgDQAFgDADgIQADgIACgOIABgqIAAgbIBcAAIAACAIgcAAIAAhmIglAAIAAAJQgBAjgCALIgDARIgEAMIgGAJQgEAFgEABQgDADgFABIgKAAQgJAAgHgBgALUA0Igpg2IgPAPIAAAnIgcAAIAAiAIAcAAIAAA4IA1g4IAiAAIg0A2IA3BKgAH6A0IAAiAIA8AAQALAAAJADQAIACAGAGQAFAEACAGQACAFAAAIQAAAFgBAFQgCAEgCADQgFAGgHAFIAKAEIAHAHQAEADACAFQABAGAAAFQAAAJgDAHQgEAHgHAEQgGAFgIACQgKACgKAAgAIWAbIAiAAQAJAAAFgDIAFgFQABgDAAgDQAAgHgGgDQgCgCgEgBIgKAAIggAAgAIWgYIAaAAQAKAAAFgEIAEgDQABgDAAgEQAAgGgEgEQgFgEgJABIgcAAgAHIA0IgLgdIg3AAIgMAdIgeAAIA4iBIAaAAIA4CBgAGzgBIgSgqIgRAqIAjAAgAEPA0IAAhmIgoAAIAAgaIBrAAIAAAaIgnAAIAABmgAhMA0IAAiAIAdAAIAAAsIAbAAQAMAAAIADQAIACAGAGQAGAFADAJQADAHAAAIQAAALgDAHQgDAJgGAFQgHAGgIADQgJADgMAAgAgvAaIAZAAIAJgBIAHgDQACgCACgEQABgDAAgFQAAgEgBgDIgEgEQgDgDgEAAQgEgCgFAAIgZAAgAimA0IAAhmIgmAAIAAgaIBrAAIAAAaIgoAAIAABmgAj1A0IgMgdIg3AAIgMAdIgdAAIA4iBIAaAAIA3CBgAkLgBIgRgqIgRAqIAiAAgApfA0IAAiAIBjAAIAAAZIhGAAIAAAaIA9AAIAAAZIg9AAIAAAbIBGAAIAAAZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(-89.1,-7.9,178.3,15.9), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.blik();
	this.instance.parent = this;
	this.instance.setTransform(-17.5,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(-17.5,-70,35,140), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.btn();
	this.instance.parent = this;
	this.instance.setTransform(-106.9,-42.6,0.527,0.527);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(-106.9,-42.6,213.9,85.4), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-75,-12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(-75,-12.5,150,25), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(-320,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(-320,-200,640,400), null);


(lib.Анимация2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.blik();
	this.instance.parent = this;
	this.instance.setTransform(-17.5,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.5,-70,35,140);


(lib.Анимация1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.blik();
	this.instance.parent = this;
	this.instance.setTransform(-17.5,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.5,-70,35,140);


(lib.Символ58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ57();
	this.instance.parent = this;
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance.cache(-35,-26,70,52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ58, new cjs.Rectangle(-33,-24,66,48), null);


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ55();
	this.instance.parent = this;
	this.instance.alpha = 0.781;
	this.instance.filters = [new cjs.BlurFilter(8, 8, 1)];
	this.instance.cache(-84,-22,168,44);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ50, new cjs.Rectangle(-85.7,-23.8,174,50), null);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ42();
	this.instance.parent = this;
	this.instance.filters = [new cjs.BlurFilter(2, 2, 1)];
	this.instance.cache(-8,-6,16,11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ43, new cjs.Rectangle(-6.9,-4.6,17,12), null);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ39();
	this.instance.parent = this;
	this.instance.setTransform(18.2,16.5,0.81,1);
	this.instance.filters = [new cjs.BlurFilter(6, 6, 1)];
	this.instance.cache(-7,-9,21,18);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ39();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.81,1);
	this.instance_1.filters = [new cjs.BlurFilter(6, 6, 1)];
	this.instance_1.cache(-7,-9,21,18);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ40, new cjs.Rectangle(-7,-10.3,41.2,40.5), null);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AixBDQkeickTi6QgyhqCxAxQHeCRF1CzIH+Fkg");
	mask.setTransform(73.6,-8.7);

	// Слой 3
	this.instance = new lib.Анимация1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-41.5,-31);

	this.instance_1 = new lib.Анимация2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(177.5,14);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},29).wait(31));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:177.5,y:14},29).wait(31));

	// Слой 1
	this.instance_2 = new lib.babamech();
	this.instance_2.parent = this;
	this.instance_2.setTransform(150,-100.5,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-100.5,300,201);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ37();
	this.instance.parent = this;
	this.instance.alpha = 0;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.102},9,cjs.Ease.get(-1)).to({alpha:0.41},10,cjs.Ease.get(1)).to({alpha:0.105},10,cjs.Ease.get(-1)).to({alpha:0},10,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.babaluk();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-163.9,-106.6,1,1,-11.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-163.9,-161.1,327.9,322.3);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABbByIAAgRIg+AAIAAhTIAWAAIAAA/IAdAAIAAg/IAXAAIAAA/IAKAAIgCAlgAiLBlIAAgJIgJgBIgJgCIgHgDIgHgFIgEgFIgDgHIgDgHIgBgIIABgHIADgHIADgHIAFgFIAGgFIAHgDIAJgCIAJgBIAAgHIAYAAIAAAHIAJABIAJACIAHADIAGAFIAFAFIADAHIACAHIABAHIgBAIIgCAHIgDAHIgFAFIgGAFIgHADIgIACIgKABIAAAJgAhzBHIAHgBIAGgDIAEgGQACgDAAgDQAAgFgCgCIgEgGQgDgCgDgBIgHgBgAiTAnQgDABgDACQgCADgBADQgCACABAFQgBADACADQABAEACACIAGADIAIABIAAghIgIABgAj+BlIAAgJIgJgBIgJgCIgHgDIgGgFIgFgFIgDgHIgCgHIgBgIIABgHIACgHIADgHIAGgFIAFgFIAHgDIAJgCIAJgBIAAgHIAYAAIAAAHIAKABIAIACIAIADIAFAFIAGAFIADAHIACAHIABAHIgBAIIgCAHIgDAHIgGAFIgFAFIgIADIgIACIgKABIAAAJgAjmBHIAIgBIAFgDIAFgGQABgDAAgDQAAgFgBgCIgFgGQgCgCgDgBIgIgBgAkFAnQgEABgCACQgDADgBADQgBACAAAFQAAADABADQABAEADACIAGADIAHABIAAghIgHABgAlnBiIgKgEQgEgCgDgEIgHgGIARgNQADAFAFACQAEADAHgBIAGgBIAGgDIAEgFIADgFIgbAAIAAgRIAbAAIgDgGIgFgEIgFgEIgGgBQgGABgFACQgEACgEAEIgQgNIAHgGIAHgGIAJgDIALgBIAKABIAIACIAIAEIAGAFIAFAHIAEAIIADAIIABAJIgBAJIgDAIIgEAHIgFAHIgGAFIgIAEIgIACIgJABIgMgBgAm9BiIgJgCIgIgEIgHgGIgFgGIgEgHIgDgIIAAgJIAAgJIADgIIAEgIIAFgHIAHgEIAIgFIAJgCIAJgBIAJABIAJACIAIAEIAGAFIAFAHIAFAIIACAIIABAJIgBAJIgCAIIgFAHIgFAGIgGAGIgIADIgJADIgJABIgJgBgAm9AiQgEACgDAEQgDADgBAEQgBAEAAAFQAAAEABAEQABAEADADIAHAGIAJABQAFAAAEgBIAHgGIADgGQACgFAAgEQAAgFgCgEIgDgHIgHgGQgEgBgFAAQgFAAgEABgAIgBhIAAhTIAXAAIAABTgAHPBhIAAhTIAXAAIAAAaIANAAQAIAAAGABQAGACAFAEQAFADADAGIABAGIABAGQAAAHgCAFQgDAGgEAEQgFADgGACQgGACgIAAgAHmBOIANAAQAFAAAEgCQACgDAAgFQAAgFgCgCQgEgDgFAAIgNAAgAGUBhIAAg/IgYAAIAAgUIBJAAIAAAUIgZAAIAAA/gAFaBhIAAgfIgeAAIAAAfIgXAAIAAhTIAXAAIAAAfIAeAAIAAgfIAYAAIAABTgADVBhIAAhTIBEAAIAAATIgtAAIAAANIAoAAIAAATIgoAAIAAAMIAtAAIAAAUgACvBhIAAgvIghAvIgVAAIAAhTIAXAAIAAAvIAggvIAWAAIAABTgAgJBhIAAgvIggAvIgWAAIAAhTIAXAAIAAAvIAhgvIAVAAIAABTgAoBBhIgVgeIgJAJIAAAVIgXAAIAAhTIAXAAIAAAiIAdgiIAbAAIgfAjIAhAwgAAGgbIgIgDIgHgDIgGgGIgGgHIgEgHIgDgIIgBgJIABgJIADgIIAEgHIAGgHIAGgFIAIgFIAHgCIAKAAIAJAAIAJACIAHAFIAHAFIAFAHIAFAHIACAIIABAJIgBAJIgCAIIgFAHIgFAHIgHAFIgIAEIgIADIgKAAIgJAAgAAHhbQgEACgCADQgDADgBAFQgCAEABAEQgBAEACAFQABAEADADIAGAFQAEACAFgBQAEABAEgCIAHgFIAEgHQADgFAAgEQAAgEgDgEIgEgIIgHgFQgDgBgGgBQgEABgEABgAhSgbIgIgDIgHgDIgGgGIgGgGIgDgHIgDgJIgBgJIABgJIADgIIADgHIAGgHIAGgFIAHgFIAJgCIAJAAIAMABIAKADQAEACAEAEIAFAHIgRANQgDgEgEgDQgFgCgGgBQgEAAgEACQgDACgDADQgDADgCAFQgBAEAAAEIABAJIAFAHQADADADACQAEABAEAAIAGgBIAFgBQAEgCAEgGIARAMIgGAIIgIAHQgEACgGABQgGABgHAAIgJAAgAD9gcIAAhUIBDAAIAAAUIgtAAIAAANIApAAIAAASIgpAAIAAANIAtAAIAAAUgADWgcIAAgwIggAwIgWAAIAAhUIAYAAIAAAvIAggvIAWAAIAABUgAB+gcIgVgfIgJAKIAAAVIgXAAIAAhUIAXAAIAAAiIAdgiIAbAAIgfAkIAhAwgAiXgcIAAhUIAXAAIAABUgAjngcIAAhUIAWAAIAAAbIAOAAQAHgBAGACQAHACAEAEQAFADADAGIABAFIACAHQAAAGgDAGQgDAFgEAEQgEAEgHACQgGACgHAAgAjRgwIANAAQAGABADgDQADgDAAgFQAAgEgDgDQgDgCgGAAIgNAAgAk9gcIAAhUIArAAQAIAAAFACQAGACAEAEIAEAFQACAEgBAEIgBAHIgCAFIgFAEIgEADIAGADIAFAEQADADABADIABAIQAAAFgCAFQgCAEgEADQgFADgGABQgFACgIAAgAkmgvIASAAQAFAAADgCQADgCAAgEQAAgDgDgCQgDgCgFAAIgSAAgAkmhOIAOAAQAGAAACgDQADgBABgEQgBgEgDgCQgCgCgGAAIgOAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.instance = new lib.Символ49();
	this.instance.parent = this;
	this.instance.filters = [new cjs.BlurFilter(6, 6, 1)];
	this.instance.cache(-59,-13,117,27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ27, new cjs.Rectangle(-59.7,-14.4,122,32), null);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AguBpIABgSIAGAAQABAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAQADgCABgFQACgFABgLIABgeIAAgLIBAAAIAABTIgXAAIAAg/IgTAAIAAADIgCAgIgCAKIgEAIIgEAGIgEADIgGACIgGAAIgNgBgAEyBpIAAhTIAYAAIAABTgADiBpIAAhTIAXAAIAAAaIANAAQAHAAAHABQAGADAFADQAEADADAGIACAGIABAHQAAAGgDAFQgCAGgFAEQgEADgGACQgGACgIAAgAD5BWIAMAAQAGAAADgCQADgDAAgFQAAgEgDgDQgDgDgGAAIgMAAgACnBpIAAg/IgZAAIAAgUIBKAAIAAAUIgaAAIAAA/gAByBpIgGgOIghAAIgGAOIgYAAIAkhUIAWAAIAkBUgABlBJIgJgYIgKAYIATAAgAhLBpIAAg/IgdAAIAAA/IgXAAIAAhTIBLAAIAABTgAilBpIAAhTIAXAAIAABTgAj2BpIAAhTIAXAAIAAAaIANAAQAIAAAGABQAHADAEADQAFADADAGIABAGIABAHQAAAGgCAFQgDAGgEAEQgFADgGACQgGACgIAAgAjfBWIANAAQAFAAAEgCQADgDAAgFQAAgEgDgDQgEgDgFAAIgNAAgAlLBpIAAhTIArAAQAIAAAFABQAGACAEAEIAEAGQABADAAAFIgBAGIgDAGIgEADIgFADIAHAEIAFAEQADADABADIABAIQAAAFgCAEQgCAFgFADQgEACgGACQgGACgHgBgAk1BXIASAAQAGAAADgCQADgDAAgDQAAgDgDgCQgDgCgGgBIgSAAgAk1A3IAPAAQAFAAADgCQADgCAAgDQAAgEgDgCQgCgCgGAAIgPAAgAiWgTIgJgDIgIgDIgGgGIgGgHIgEgHIgCgIIgBgJIABgJIACgIIAEgHIAGgHIAGgFIAIgFIAJgCIAJAAIAKAAIAIACIAIAEIAGAGIAGAHIAEAHIACAIIABAJIgBAJIgCAIIgEAHIgGAHIgGAFIgIAEIgJADIgJAAIgJAAgAiWhTQgEACgCADQgDADgCAFQgBAEAAAEQAAAEABAEQACAFADADIAGAFIAJABQAFAAAEgBIAHgFIAEgHQACgFAAgEQAAgEgCgEIgEgIIgHgFQgEgBgFgBQgFABgEABgAF9gUIAAhUIBEAAIAAAUIgtAAIAAAMIApAAIAAATIgpAAIAAANIAtAAIAAAUgAFXgUIAAhUIAYAAIAABUgAEHgUIAAhUIAXAAIAAAbIANAAQAHgBAHACQAGACAFAEQAEADADAGIACAFIABAHQAAAGgDAGQgCAFgFAEQgEAEgGACQgGACgIAAgAEegoIAMAAQAGAAADgCQADgDAAgEQAAgFgDgDQgDgCgGAAIgMAAgADhgUIAAggIgeAAIAAAgIgXAAIAAhUIAXAAIAAAfIAeAAIAAgfIAXAAIAABUgACGgUIAAggIgeAAIAAAgIgXAAIAAhUIAXAAIAAAfIAeAAIAAgfIAXAAIAABUgAABgUIAAhUIBDAAIAAAUIgsAAIAAAMIAoAAIAAATIgoAAIAAANIAtAAIAAAUgAhUgUIAAhUIArAAQAIAAAGACQAFACAEAEIAEAFQACAEAAAEIgBAHIgDAFIgEAEIgFADIAHADIAFAEQACADABADIABAIQAAAFgCAFQgCAEgEADQgEADgGABQgGACgIAAgAg9gnIASAAQAFAAADgBQADgDAAgEQAAgDgDgCQgDgCgFAAIgSAAgAg9hGIAPAAQAFgBADgCQADgCAAgDQAAgEgDgCQgDgBgFAAIgPAAgAjdgUIAAggIgeAAIAAAgIgXAAIAAhUIAXAAIAAAfIAeAAIAAgfIAXAAIAABUgAlYgUIAAhUIA8AAIAAAUIglAAIAABAgAl+gUIAAgwIgWAgIAAAAIgWggIAAAwIgWAAIAAhUIAYAAIAUAgIAUggIAZAAIAABUg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.instance = new lib.Символ48();
	this.instance.parent = this;
	this.instance.filters = [new cjs.BlurFilter(6, 6, 1)];
	this.instance.cache(-47,-13,94,25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ26, new cjs.Rectangle(-47.9,-13.6,98,30), null);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjJC2IgJgDIgHgEIgHgFIgFgHIgEgHIgDgIIgBgJIABgJIADgIIAEgIIAFgGIAHgFIAIgFIAIgCIAKgBIAJABIAJACIAHAEIAHAGIAFAGIAEAIIADAIIABAJIgBAJIgDAIIgEAHIgFAHIgHAFIgIAEIgIADIgKAAIgJAAgAjIB2QgEACgDADQgDADgBAEQgCAEAAAFQAAAEACAEQABAFADADIAHAFIAJABQAEAAAEgBIAHgFIAEgHQACgFAAgEQAAgFgCgEIgEgHIgHgFQgEgCgFAAQgEAAgEACgAkiC2IgIgDIgHgEIgHgFIgFgGIgEgIIgCgIIgBgJIABgJIACgIIAEgIIAFgGIAHgGIAHgEIAJgCIAJgBIAMABIAJAEQAFACADAEIAGAHIgRANQgDgFgFgCQgEgDgGAAQgEAAgEACQgEACgDADQgCADgCAEQgBAEAAAFIABAJIAEAHQADADAEABQAEACAEAAIAGgBIAFgCQAEgCAEgFIARAMIgGAIIgIAGQgFADgFABQgGABgHAAIgJAAgAEkC1IAAgwIggAwIgWAAIAAhUIAXAAIAAAvIAhgvIAVAAIAABUgADIC1IAAgwIggAwIgWAAIAAhUIAXAAIAAAvIAhgvIAVAAIAABUgABYC1IAAhAIgZAAIAAgUIBJAAIAAAUIgZAAIAABAgAAdC1IAAhUIAYAAIAABUgAgyC1IAAhUIAXAAIAAAaIANAAQAHAAAHACQAFACAFADQAEAEADAFIACAGIABAHQAAAGgDAGQgCAFgFAEQgEAEgGACQgFACgIAAgAgbChIAMAAQAGAAADgCQADgDAAgFQAAgEgDgDQgDgDgGAAIgMAAgAiGC1IAAhUIBDAAIAAAUIgsAAIAAAJIAQAAQAIAAAGACQAGACAEADQAFADACAFQADAIAAAEQAAAHgCAFQgDAFgEAEQgEADgGACQgGACgIAAgAhvChIAQAAQAFAAADgCQADgCAAgFQAAgEgDgCQgDgCgFAAIgQAAgAEOBaIgHgDIgEgGIgDgIIANgCQABADACACQACACAEAAQADAAACgCQACgCABgDIANACQgBAEgCAEQgBADgDADIgGADIgIABIgIgBgAgcA3IgJgCIgHgEIgHgGIgFgGIgEgIIgDgIIgBgJIABgJIADgHIAEgHIAFgHIAHgFIAIgEIAIgDIAKAAIAJA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JABQAFAAAEgBIAHgFIAEgHQACgFAAgEQAAgFgCgEIgEgHIgHgFQgEgCgFAAQgFAAgEACgAnThGIgJgDIgIgEIgGgFIgGgHIgEgHIgCgIIgBgJIABgJIACgIIAEgIIAGgGIAGgFIAIgFIAJgCIAJgBIAKABIAIACIAIAEIAGAGIAGAGIAEAIIACAIIABAJIgBAJIgCAIIgEAHIgGAHIgGAFIgIAEIgJADIgJAAIgJAAgAnTiGQgEACgCADQgDADgCAEQgBAEAAAFQAAAEABAEQACAFADADIAGAFIAJABQAFAAAEgBIAHgFIAEgHQACgFAAgEQAAgFgCgEIgEgHIgHgFQgEgCgFAAQgFAAgEACgAmahIIACgSIAFABQABAAABAAQAAAAABgBQAAAAABAAQAAAAABgBQACgCACgEQACgGABgLIABgeIAAgLIBAAAIAABUIgXAAIAAhAIgTAAIAAADIgCAgIgDAKIgDAIIgEAGIgFAEIgFABIgGABIgOgCgAIBhHIAAhUIAkAAQAIAAAGACQAHACAEAEQAFADACAGQADAIAAAEIgBAIIgCAGIgDAFIgFAEQgEAEgHACQgHACgIAAIgLAAIAAAYgAIYhxIALAAIAGgBIAEgCQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAAAgBIABgFIgBgEQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAgBIgEgCIgGgBIgLAAgAFJhHIAAhUIBEAAIAAAUIgtAAIAAAJIARAAQAHAAAGACQAGACAFADQAEADADAFQACAIAAAEQAAAHgCAFQgCAFgEAEQgFADgGACQgGACgHAAgAFghbIAQAAQAFAAADgCQADgCAAgFQAAgEgDgCQgDgCgFAAIgQAAgAEjhHIAAhUIAYAAIAABUgADThHIAAhUIAXAAIAAAaIANAAQAHAAAHACQAGACAFADQAEAEADAFIACAGIABAHQAAAGgDAGQgCAFgFAEQgEAEgGACQgGACgIAAgADqhbIAMAAQAGAAADgCQADgDAAgFQAAgEgDgDQgDgDgGAAIgMAAgAB9hHIAAhUIArAAQAIAAAGACQAFACAEADIAEAGQACAEAAAEIgBAHIgDAFIgEAEIgFADIAHADIAFAEQACADABADIABAIQAAAFgCAEQgCAFgEADQgEADgGABQgGACgIAAgACUhaIASAAQAFAAADgCQADgCAAgEQAAgDgDgCQgDgCgFAAIgSAAgACUh6IAPAAQAFAAADgCQADgCAAgDQAAgEgDgCQgDgCgFAAIgPAAgAA2hHIAAgwIggAwIgWAAIAAhUIAXAAIAAAvIAhgvIAVAAIAABUgAjmhHIAAhUIAXAAIAAA/IAYAAIAAg/IAXAAIAAA/IAYAAIAAg/IAXAAIAABUgAk3hHIAAhUIAXAAIAAAaIANAAQAIAAAGACQAHACAEADQAFAEADAFIABAGIABAHQAAAGgCAGQgDAFgEAEQgFAEgGACQgGACgIAAgAkghbIANAAQAFAAAEgCQADgDAAgFQAAgEgDgDQgEgDgFAAIgNAAgApIhHIAAhUIBDAAIAAAUIgsAAIAAAJIAQAAQAIAAAGACQAGACAEADQAFADACAFQADAIAAAEQAAAHgCAFQgDAFgEAEQgEADgGACQgGACgIAAgAoxhbIAQAAQAFAAADgCQADgCAAgFQAAgEgDgCQgDgCgFAAIgQAAgAAgiiIgHgDIgEgGIgDgIIANgCQABADACACQACACAEAAQADAAACgCQACgCABgDIANACQgBAEgCAEQgBADgDADIgGADIgIABIgIgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.instance = new lib.Символ47();
	this.instance.parent = this;
	this.instance.filters = [new cjs.BlurFilter(5, 5, 1)];
	this.instance.cache(-68,-20,137,41);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ25, new cjs.Rectangle(-69.3,-21.2,142,46), null);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.gamepad();
	this.instance.parent = this;
	this.instance.setTransform(-33,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ58();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,1.6);
	this.instance_1.filters = [new cjs.BlurFilter(3, 3, 1)];
	this.instance_1.cache(-35,-26,70,52);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(-35,-24.4,74,55), null);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 27
	this.instance = new lib.Символ27();
	this.instance.parent = this;
	this.instance.setTransform(154.3,26.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(58).to({_off:false},0).wait(5).to({y:51.8},0).to({y:21.8,alpha:1},5).to({y:26.8},2).wait(41).to({y:21.8},2).to({y:51.8,alpha:0},5).wait(5).to({y:26.8},0).wait(1));

	// Символ 26
	this.instance_1 = new lib.Символ26();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.2,26);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(58).to({_off:false},0).wait(3).to({y:51},0).to({y:21,alpha:1},5).to({y:26},2).wait(45).to({y:21},2).to({y:51,alpha:0},5).wait(3).to({y:26},0).wait(1));

	// Символ 25
	this.instance_2 = new lib.Символ25();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-153.8,31.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(58).to({_off:false},0).wait(1).to({y:56.1},0).to({y:26.1,alpha:1},5).to({y:31.1},2).wait(49).to({y:26.1},2).to({y:56.1,alpha:0},5).wait(1).to({y:31.1},0).wait(1));

	// like.png
	this.instance_3 = new lib.Символ23();
	this.instance_3.parent = this;
	this.instance_3.setTransform(154,-30);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(58).to({_off:false},0).wait(5).to({x:244},0).to({x:134,alpha:1},5).to({x:154},2).wait(41).to({y:-50},2).to({y:50,alpha:0},6).to({_off:true},1).wait(4));

	// wallet.png
	this.instance_4 = new lib.Символ24();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,-30);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(58).to({_off:false},0).wait(3).to({x:90},0).to({x:-20,alpha:1},5).to({x:0},2).wait(45).to({y:-50},2).to({y:50,alpha:0},6).to({_off:true},1).wait(2));

	// gamepad.png
	this.instance_5 = new lib.Символ22();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-154,-30);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(58).to({_off:false},0).wait(1).to({x:-64},0).to({x:-174,alpha:1},5).to({x:-154},2).wait(49).to({y:-50},2).to({y:50,alpha:0},6).wait(1));

	// txt2.png
	this.instance_6 = new lib.Символ20();
	this.instance_6.parent = this;
	this.instance_6.setTransform(0,24.5);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(4).to({x:130},0).to({x:-20,alpha:1},6).to({x:0},2).wait(32).to({rotation:5.9,y:4.5},3).to({y:109.6,alpha:0},7).to({_off:true},1).wait(69));

	// txt1.png
	this.instance_7 = new lib.Символ21();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0,-27);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({x:130},0).to({x:-20,alpha:1},6).to({x:0},2).wait(39).to({rotation:-4.5,y:-47},3).to({y:58.1,alpha:0},7).to({_off:true},1).wait(65));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-173,-62,345,98.5);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ19();
	this.instance.parent = this;
	this.instance.setTransform(0,16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(-173,-46,345,98.5), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(-50.1,-69.3,100.3,138.7), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AsKDEQgnAAAAgmIAAk7QAAgmAnAAIYVAAQAnAAAAAmIAAE7QAAAmgnAAg");

	// Слой 2
	this.instance = new lib.Символ11();
	this.instance.parent = this;
	this.instance.setTransform(-131.9,-4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:129.7},29).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81.8,-19.6,0,39.3);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.85,scaleY:0.85},6,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},6,cjs.Ease.get(1)).to({scaleX:0.85,scaleY:0.85},6,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},6,cjs.Ease.get(1)).wait(36));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-12.5,150,25);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ1();
	this.instance.parent = this;
	this.instance.alpha = 0;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({alpha:0.262},5,cjs.Ease.get(1)).to({alpha:0},5,cjs.Ease.get(1)).wait(1).to({alpha:0.262},5,cjs.Ease.get(1)).to({alpha:0},5,cjs.Ease.get(1)).wait(25));

	// Слой 1
	this.instance_1 = new lib.Символ1();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320,-200,640,400);


(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(5));

	// Слой 1
	this.instance = new lib.Символ50();
	this.instance.parent = this;
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.941},4).wait(1).to({alpha:0},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.7,-23.8,174,50);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ43();
	this.instance.parent = this;
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},4).to({alpha:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.9,-4.6,17,12);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ40();
	this.instance.parent = this;
	this.instance.setTransform(-11.8,-8.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.289},9,cjs.Ease.get(1)).to({alpha:1},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.8,-18.4,41.2,39.5);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ29();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:2.5,x:-6.8,y:4.3},12,cjs.Ease.get(-1)).to({rotation:4,x:-14.7,y:9.2},14,cjs.Ease.get(1)).to({rotation:0,x:-7.6,y:4.8},12,cjs.Ease.get(-1)).to({x:0,y:0},13,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-163.9,-161.1,327.9,322.3);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ30();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-4.4},14,cjs.Ease.get(-1)).to({y:-8.5},13,cjs.Ease.get(1)).to({y:-4.4},13,cjs.Ease.get(-1)).to({y:0},14,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-101,300,201.5);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ44();
	this.instance.parent = this;
	this.instance.setTransform(7.4,18.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.orc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-100,-66.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ32, new cjs.Rectangle(-100,-66.5,200,133), null);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ41();
	this.instance.parent = this;
	this.instance.setTransform(83,-23.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.mangun();
	this.instance_1.parent = this;
	this.instance_1.setTransform(100,-80,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ31, new cjs.Rectangle(-100,-80,205.4,160), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ12();
	this.instance.parent = this;
	this.instance.setTransform(0.1,1,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.4,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 4
	this.green = new lib.Символ51();
	this.green.parent = this;
	this.green.setTransform(-0.4,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.green).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ7();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(-182.5,-73.6,289.5,138.7), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.04,scaleY:1.04},20,cjs.Ease.get(-1)).to({scaleX:1.09,scaleY:1.09},24,cjs.Ease.get(1)).to({scaleX:1.05,scaleY:1.05},22,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},23,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320,-200,640,400);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.53,1.53);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:131.2,y:-131.1,alpha:0.391},79).to({x:264,y:-264,alpha:0},80).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-489.6,-306,979.2,612);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ46();
	this.instance.parent = this;
	this.instance.setTransform(-153.6,91.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ3();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ45, new cjs.Rectangle(-643.2,-214.8,979.2,612), null);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ32();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-7.9,y:-4.2},22,cjs.Ease.get(-1)).to({x:-15.9,y:-8.4},22,cjs.Ease.get(1)).to({x:-8.1,y:-4.3},22,cjs.Ease.get(-1)).to({x:0,y:0},23,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-66.5,200,133);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ31();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:3.7},5,cjs.Ease.get(-1)).to({y:8},6,cjs.Ease.get(1)).to({y:4.3},6,cjs.Ease.get(-1)).to({y:0},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-80,205.4,160);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// orc.png
	this.instance = new lib.Символ36();
	this.instance.parent = this;
	this.instance.setTransform(202.6,87.7,1.174,1.174);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// mangun.png
	this.instance_1 = new lib.Символ33();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-209,101,1.227,1.227);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// babamech.png
	this.instance_2 = new lib.Символ34();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-226.9,-24.3,1,1,22);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// babaluk.png
	this.instance_3 = new lib.Символ35();
	this.instance_3.parent = this;
	this.instance_3.setTransform(266.2,-46.5,1,1,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ28, new cjs.Rectangle(-403.6,-244.6,869.9,443.8), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.btnmove = new lib.Символ6();
	this.btnmove.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.btnmove).to({scaleX:1.07,scaleY:1.07},14,cjs.Ease.get(-1)).to({scaleX:1.15,scaleY:1.15},15,cjs.Ease.get(1)).to({scaleX:1.08,scaleY:1.08},15,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-182.5,-73.6,289.5,138.7);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.btn1 = new lib.Символ15();
	this.btn1.parent = this;
	this.btn1.setTransform(0,0,1.142,1.142);

	this.timeline.addTween(cjs.Tween.get(this.btn1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(-208.4,-84.1,330.6,158.5), null);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_8 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(8));

	// Символ 16
	this.btn = new lib.Символ16();
	this.btn.parent = this;
	this.btn.setTransform(-31.3,227.9);

	this.timeline.addTween(cjs.Tween.get(this.btn).to({y:125.5},7,cjs.Ease.get(1)).wait(1).to({y:227.9},7,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.txt = new lib.Символ18();
	this.txt.parent = this;
	this.txt.setTransform(-31.5,31.6);

	this.timeline.addTween(cjs.Tween.get(this.txt).to({scaleX:1.14,scaleY:1.14,y:5.5},7,cjs.Ease.get(1)).wait(1).to({scaleX:1,scaleY:1,y:31.6},7,cjs.Ease.get(1)).wait(1));

	// Символ 28
	this.pers = new lib.Символ28();
	this.pers.parent = this;
	this.pers.setTransform(-31.3,22.7);

	this.timeline.addTween(cjs.Tween.get(this.pers).to({scaleX:1.14,scaleY:1.14},7,cjs.Ease.get(1)).wait(1).to({scaleX:1,scaleY:1},7,cjs.Ease.get(1)).wait(1));

	// Слой 6
	this.instance = new lib.Символ56();
	this.instance.parent = this;
	this.instance.setTransform(-4.9,34.2);
	this.instance.alpha = 0.641;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1.11,y:11},7,cjs.Ease.get(1)).wait(1).to({scaleY:1,y:34.2},7,cjs.Ease.get(1)).wait(1));

	// Слой 5
	this.instance_1 = new lib.Символ52();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-28.5,27);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0.34},7).wait(1).to({alpha:0},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-434.9,-221.9,869.9,524.1);


// stage content:
(lib.ban640305 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		  function fl_MouseOverHandler_5()
		{
		    _this.main.gotoAndPlay(1);
		}
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		  function fl_MouseOutHandler_2()
		{
		    _this.main.gotoAndPlay(9);
		}
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.btn_green.addEventListener("mouseover", fl_MouseOverHandler);
		
		function fl_MouseOverHandler()
		{
			_this.main.btn.btn1.btnmove.green.gotoAndPlay(1);
		}
		
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.btn_green.addEventListener("mouseout", fl_MouseOutHandler);
		
		function fl_MouseOutHandler()
		{
			_this.main.btn.btn1.btnmove.green.gotoAndPlay(6);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 7
	this.btn_green = new lib.Символ53();
	this.btn_green.parent = this;
	this.btn_green.setTransform(316,254.4);
	new cjs.ButtonHelper(this.btn_green, 0, 1, 2, false, new lib.Символ53(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_green).wait(1));

	// Слой 2
	this.instance = new lib.Символ5();
	this.instance.parent = this;
	this.instance.setTransform(320,35.5,1.277,1.277);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.main = new lib.Символ38();
	this.main.parent = this;
	this.main.setTransform(351.3,129.8);

	this.timeline.addTween(cjs.Tween.get(this.main).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ45();
	this.instance_1.parent = this;
	this.instance_1.setTransform(320,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.2,60.4,1109.5,689.3);
// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/babaluk.png", id:"babaluk"},
		{src:"images/babamech.png", id:"babamech"},
		{src:"images/bg.jpg", id:"bg"},
		{src:"images/blik.png", id:"blik"},
		{src:"images/btn.png", id:"btn"},
		{src:"images/gamepad.png", id:"gamepad"},
		{src:"images/like.png", id:"like"},
		{src:"images/logo.png", id:"logo"},
		{src:"images/mangun.png", id:"mangun"},
		{src:"images/orc.png", id:"orc"},
		{src:"images/txt1.png", id:"txt1"},
		{src:"images/txt2.png", id:"txt2"},
		{src:"images/wallet.png", id:"wallet"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;