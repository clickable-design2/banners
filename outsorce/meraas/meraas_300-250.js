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
p.nominalBounds = new cjs.Rectangle(0,0,302,252);


(lib.Image2 = function() {
	this.initialize(img.Image2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,302,252);


(lib.Image3 = function() {
	this.initialize(img.Image3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,182);


(lib.Image41 = function() {
	this.initialize(img.Image41);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,302,252);


(lib.Image42 = function() {
	this.initialize(img.Image42);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,302,252);


(lib.Image43 = function() {
	this.initialize(img.Image43);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,302,252);


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


(lib.Symbol41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgsA8QgVgVAAgmQAAgkAUgWQATgWAfAAQAOAAALAEQALAEAIAJQAIAJAFAMQAEANAAASIAAANIhpAAQAAAbAOAOQANAOAXAAQAIAAAJgCIAOgFIAMgGIAIgGIABAAIAAAcIgLAFIgMAEIgNADIgQABQgjAAgUgUgAApgQQAAgKgDgIQgCgHgEgFQgFgGgHgDQgHgDgKAAQgJAAgHADQgHADgGAGQgGAGgDAHQgDAIgBAJIBQAAIAAAAg");
	this.shape.setTransform(212.2,41.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgoBMIAAiXIAbAAIAAAWQANgMAKgFQALgFAJAAIAGAAIAFAAIAAAbIgCAAIgGgBIgIAAQgKAAgLAEQgIAFgJAJIAABrg");
	this.shape_1.setTransform(200.7,41.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgxA7QgSgWAAglQAAglATgWQASgUAeAAQAfAAASAUQATAWAAAlQAAAngTAVQgSAVgfAAQgeAAgTgWgAgegrQgLAPABAcQgBAdALAPQALAOATAAQAUAAALgOQAKgOAAgeQAAgcgKgPQgLgPgUAAQgTAAgLAPg");
	this.shape_2.setTransform(187.2,41.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABKBOIAAhXIgBgTQAAgKgDgEQgDgGgFgCQgFgDgJAAQgIAAgIAFQgKAFgKAJIABAFIAAAIIAABjIgYAAIAAhXIgBgTQgCgKgCgEQgDgGgFgCQgFgDgIAAQgJAAgJAFQgJAFgIAJIAABwIgbAAIAAiXIAbAAIAAAQQAJgJAKgGQAKgFAMgBQANAAALAHQAJAGAGAOQALgNAMgHQALgGANgBQAKAAAHADQAJAEAGAGQAGAIAEAKQACALAAAPIAABjg");
	this.shape_3.setTransform(167.9,41.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgPBYQgMgMAAgaIAAhUIgRAAIAAgVIARAAIAAgsIAaAAIAAAsIAuAAIAAAVIguAAIAABIIAAASQABAGABAGQADAEAFADQAFACAJAAQAHAAAFgCIAIgDIACAAIAAAXIgOAEIgOABQgUAAgMgMg");
	this.shape_4.setTransform(142.8,39.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgeBLQgIgDgHgHQgHgHgEgLQgDgLAAgPIAAhiIAaAAIAABVIABAVQAAAIADAGQAEAGAFACQAFADAKAAQAJAAALgFQALgGAIgHIAAhxIAaAAIAACXIgaAAIAAgRQgLALgLAFQgLAFgMAAQgKAAgJgDg");
	this.shape_5.setTransform(130.2,42);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgxA7QgSgWAAglQAAglATgWQASgUAeAAQAfAAATAUQASAWAAAlQAAAngSAVQgTAVgfAAQgfAAgSgWgAgdgrQgMAPAAAcQAAAdAMAPQAKAOATAAQAUAAALgOQALgOAAgeQAAgcgLgPQgLgPgUAAQgTAAgKAPg");
	this.shape_6.setTransform(114.8,41.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgdBnQgLgFgHgKQgIgKgEgPQgEgPAAgTQAAgUAFgOQAGgOAJgLQAIgKAMgGQALgGANAAQALAAAJADQAIACAJAGIAAhCIAaAAIAADTIgaAAIAAgPIgKAIIgKAGIgMAEIgMABQgMAAgLgFgAgZgNQgMANABAdQgBAaAJAPQAJAOATAAQAJAAAKgEQAKgFAJgIIAAhXQgJgFgIgBQgHgCgJAAQgTAAgLAPg");
	this.shape_7.setTransform(90.2,39);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAiBOIAAhVIgBgUQgBgJgCgGQgDgFgGgDQgGgDgKAAQgIAAgKAFQgKAFgKAJIAABwIgaAAIAAiXIAaAAIAAAQQAMgJAKgGQALgFAMgBQAXABANAPQAMAOAAAcIAABig");
	this.shape_8.setTransform(75.3,41.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgMBmIAAiXIAZAAIAACXgAgNhLIAAgaIAbAAIAAAag");
	this.shape_9.setTransform(64.3,39.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag8BmIAAjLIB5AAIAAAYIheAAIAAA6IBaAAIAAAXIhaAAIAABig");
	this.shape_10.setTransform(54.6,39.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AxMGGQjCAAAAjDIAAmGQAAjCDCAAMAiZAAAQDCAAAADCIAAGGQAADDjCAAg");
	this.shape_11.setTransform(129.5,39);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol41, new cjs.Rectangle(0,0,259,78), null);


(lib.Symbol39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgPBYQgMgMAAgaIAAhUIgRAAIAAgVIARAAIAAgsIAaAAIAAAsIAuAAIAAAVIguAAIAABIIAAASQABAGACAGQACAEAFADQAFACAJAAQAGAAAHgCIAHgDIACAAIAAAXIgPAEIgNABQgUAAgMgMg");
	this.shape.setTransform(187.3,16.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AAiBPIAAhWIAAgUQgBgJgEgGQgDgFgFgDQgGgDgJAAQgJAAgKAFQgKAFgKAIIAAByIgaAAIAAiYIAaAAIAAARQAMgKALgGQAKgFAMgBQAXABAMAPQANAOAAAdIAABig");
	this.shape_1.setTransform(174.8,18);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgsA8QgVgVAAgmQAAgkAUgWQATgWAfAAQAOAAALAEQALAEAIAJQAIAJAFAMQAEANAAASIAAANIhpAAQAAAbAOAOQANAOAWAAQAJAAAJgCIAOgFIAMgGIAIgGIABAAIAAAcIgLAFIgMAEIgNADIgQABQgkAAgTgUgAApgQQgBgKgCgIQgCgHgEgFQgEgGgIgDQgHgDgKAAQgJAAgHADQgHADgGAGQgGAGgDAHQgDAIgBAJIBQAAIAAAAg");
	this.shape_2.setTransform(159.6,18.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgaBqIgXgFIAAgbIACAAIAHADIAMADIANADIAOACQAKAAAJgEQAIgDAEgGQAFgFABgHQACgIAAgJIAAgOQgKAKgKAEQgKAEgOAAQgaAAgPgUQgQgTAAgkQAAgSAFgPQAGgOAJgLQAIgKAMgFQAMgFAMgBQALAAAJAEQAJACAIAFIACgGIAYAAIAACGQAAAngRASQgRASgiAAQgLAAgLgBgAgZhFQgLAOAAAbQAAAZAIANQAJANATAAQAJAAAKgEQALgEAIgHIAAhSQgJgGgIgCQgJgBgIAAQgSAAgLAOg");
	this.shape_3.setTransform(144,20.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgfBNQgJgEgGgGQgGgGgEgJQgEgKAAgKQAAgQAHgLQAHgKAOgHQANgGARgCIAlgDIAAgFQAAgJgDgGQgCgFgFgDQgFgDgHgBIgOgBQgJAAgMACQgMADgMAFIgBAAIAAgaIAUgFQANgCANAAQAPAAALACQALADAIAGQAJAGAEAKQAEAKAAAPIAABnIgaAAIAAgQIgIAHIgKAGIgOAGQgFABgLAAQgKAAgIgDgAAMAAQgNAAgJADQgKADgHAGQgGAHAAALQAAANAHAHQAHAHAPAAQALAAAKgFQAKgGAIgHIAAgqg");
	this.shape_4.setTransform(129,18.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgsA8QgVgVAAgmQAAgkAUgWQATgWAfAAQAOAAALAEQALAEAIAJQAIAJAFAMQAEANAAASIAAANIhpAAQAAAbAOAOQANAOAWAAQAJAAAJgCIAOgFIAMgGIAIgGIABAAIAAAcIgLAFIgMAEIgNADIgQABQgkAAgTgUgAApgQQgBgKgCgIQgCgHgEgFQgEgGgIgDQgHgDgKAAQgJAAgHADQgHADgGAGQgGAGgDAHQgDAIgBAJIBQAAIAAAAg");
	this.shape_5.setTransform(106.1,18.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgLBMIg5iXIAcAAIApB0IAph0IAbAAIg6CXg");
	this.shape_6.setTransform(91.9,18.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AgMBnIAAiYIAZAAIAACYgAgNhLIAAgaIAcAAIAAAag");
	this.shape_7.setTransform(81.8,15.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AggBMQgNgEgJgEIAAgeIABAAIAIAGIAMAHIAOAFQAIADAJAAIAMgCQAHgCADgCQAFgCACgFQACgDAAgHQAAgJgFgFQgFgEgNgDIgLgEIgPgDQgSgFgHgKQgIgKAAgQQAAgUAPgNQAQgNAZAAQAMAAANADQANADAJAFIAAAcIgCAAQgJgIgMgFQgNgEgMAAQgMAAgIAFQgJAFAAALQAAAKAFAFQAFAEAMAEIAMADIAOACQARAFAJAJQAIAKAAARQAAAKgDAIQgEAJgIAGQgIAHgKAEQgLADgOAAQgQAAgNgEg");
	this.shape_8.setTransform(72.6,18.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AgdBLQgKgDgGgHQgHgHgEgLQgDgLAAgPIAAhiIAZAAIAABVIACAVQABAIACAGQAEAGAFACQAGADAKAAQAIAAALgFQAKgGAJgHIAAhxIAaAAIAACXIgaAAIAAgRQgMALgKAFQgLAFgMAAQgKAAgIgDg");
	this.shape_9.setTransform(58.3,18.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AgMBqIAAjTIAZAAIAADTg");
	this.shape_10.setTransform(47.4,15.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AgPBLQgNgFgJgJQgKgLgFgPQgFgOAAgVQAAgSAFgQQAGgOAJgKQAJgKANgFQAOgGAOAAQANAAALAEQAMADAJAFIAAAdIgBAAIgHgGIgLgFIgMgGQgIgBgGAAQgTgBgMAPQgNAQAAAaQAAAcAMAPQAMAPAUAAQAMgBAMgFQALgFAJgIIABAAIAAAdIgJAEIgLAEIgMADIgNABQgPAAgNgFg");
	this.shape_11.setTransform(37.9,18.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AAkBMIgkg5IgmA5IgdAAIA1hLIg0hMIAfAAIAkA5IAmg5IAdAAIg1BLIA1BMg");
	this.shape_12.setTransform(24.7,18.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("Ag/BmIAAjLIB/AAIAAAYIhkAAIAAA4IBdAAIAAAXIhdAAIAABMIBkAAIAAAYg");
	this.shape_13.setTransform(10.4,15.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol39, new cjs.Rectangle(0,-4.2,194.1,37.8), null);


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
	this.shape.graphics.f("#000000").s().p("AgoCGIAAgBQAKgKALgNQALgOAIgRQAHgRAFgUQAFgTAAgXQAAgWgFgUQgFgUgHgRQgJgRgKgOQgLgNgKgJIAAgCIAfAAQAXAdAOAfQANAgAAAqQAAAqgNAgQgOAggXAcg");
	this.shape.setTransform(304.9,15.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag0BmIBdizIhpAAIAAgYICAAAIAAAfIhWCsg");
	this.shape_1.setTransform(292.3,12.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag+BoIAAgcIAagZIAXgZQAWgZAJgOQAIgQAAgRQAAgIgCgGQgDgHgFgEQgEgEgHgCQgFgCgHAAQgIAAgHACIgOAEIgLAGIgJAGIgCAAIAAgeQAJgDAPgFQAPgEAOAAQAbAAAQAQQAQAPAAAZQAAAMgCALQgDAJgFAJQgFAIgHAJIgPARIgcAdIgZAXIBjAAIAAAYg");
	this.shape_2.setTransform(277,12.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag+BoIAAgcIAagZIAXgZQAWgZAJgOQAIgQAAgRQAAgIgCgGQgDgHgFgEQgEgEgHgCQgFgCgHAAQgIAAgHACIgOAEIgLAGIgJAGIgCAAIAAgeQAJgDAPgFQAPgEAOAAQAbAAAQAQQAQAPAAAZQAAAMgCALQgDAJgFAJQgFAIgHAJIgPARIgcAdIgZAXIBjAAIAAAYg");
	this.shape_3.setTransform(261.8,12.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ag0BmIBdizIhoAAIAAgYIB/AAIAAAfIhXCsg");
	this.shape_4.setTransform(246.6,12.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgkBmQgPgDgKgGIAAgcIACAAQAJAGAOAGQAPAFAOABQAHgBAJgCQAIgCAGgHQAFgGADgHQADgIAAgLQAAgKgDgIQgDgGgGgEQgGgFgIgCQgIgBgIAAIgLAAIAAgVIAJAAQARgBAMgIQALgJAAgRQAAgHgDgGQgDgGgFgDQgFgDgGgCIgMgBIgPACIgPAEIgLAGIgJAGIgBAAIAAgdQAJgFAPgEQAPgEAOAAQANAAAKADQAKADAJAFQAJAHAEAJQAFAKAAAMQAAARgLANQgLANgQADIAAACIAOAEQAHADAHAFQAGAGAEAJQAEAJAAANQAAAOgFAMQgFAMgIAIQgJAKgNAEQgMAFgPAAQgQAAgPgEg");
	this.shape_5.setTransform(231,12.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgWBlQgMgEgIgJQgLgMgGgSQgGgTAAgbQAAgZAGgWQAFgVAMgQQAKgPASgJQARgJAWAAIANABIALACIAAAaIgBAAIgLgDQgIgCgHAAQgYAAgRARQgPARgDAiQAKgHAKgEQALgDAKAAQANAAAIACQAJADAKAHQAMAIAEAMQAGANAAASQAAAPgFAOQgFANgJAJQgJAJgMAFQgLAFgNAAQgNAAgLgFgAgTgCQgJACgJAFIgBAGIAAAHQABAVAEANQAEANAGAHQAGAHAGACQAHADAGAAQAQAAALgMQAJgMABgXQgBgNgDgIQgDgJgIgGQgFgDgGgBIgOgCQgJAAgJADg");
	this.shape_6.setTransform(216,12.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgxBQQgPgaAAg2QAAg2AQgZQAQgaAgAAQAiAAAPAaQAQAbAAA0QAAA3gQAZQgQAaghAAQghAAgQgagAgRhNQgIAFgFALQgEAKgBAQQgBAQAAATIABAkQABAOAEAMQAFAKAHAGQAHAFALAAQALAAAIgFQAHgFAEgLQAEgKACgQQACgPAAgVQAAgUgCgPQgCgQgEgKQgEgLgHgFQgIgFgLAAQgLAAgGAFg");
	this.shape_7.setTransform(191.9,12.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgwBQQgQgaAAg2QAAg2AQgZQAPgaAhAAQAhAAARAaQAPAbAAA0QAAA3gQAZQgQAaghAAQghAAgPgagAgShNQgHAFgEALQgEAKgCAQQgBAQgBATIACAkQABAOAFAMQADAKAIAGQAHAFALAAQAMAAAGgFQAIgFAEgLQAEgKABgQQACgPAAgVQAAgUgCgPQgBgQgEgKQgEgLgIgFQgGgFgMAAQgKAAgIAFg");
	this.shape_8.setTransform(176.7,12.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgaBmQgNgFgJgIQgIgIgFgMQgEgLAAgMQAAgRAJgOQAJgOAQgHIAAgBQgPgJgHgKQgHgKAAgQQAAgXARgPQASgPAZAAQAcAAARAOQAQAPAAAWQAAAOgIANQgIAOgPAHIAAABQASAHAJAMQAJAMAAATQAAAagSASQgTARgdAAQgOAAgMgEgAggASQgGALAAAPQAAASAMAMQALAMAPAAQASAAAKgKQAKgLAAgRQAAgNgEgHQgFgIgOgHIgNgGIgQgHQgMAHgGALgAgXhNQgKAIAAAOQAAAKAFAHQAFAHAKAGIANAGIAOAGQAMgJAEgJQAFgKAAgMQAAgOgKgJQgJgJgQAAQgOAAgJAIg");
	this.shape_9.setTransform(161.4,12.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAKCGQgXgcgOgfQgNggAAgrQAAgqANggQANgfAYgdIAfAAIAAACQgLAJgKANQgKAOgJARQgHARgFAUQgFAVAAAVQAAAXAFATQAFAUAHARQAJARAKAOQAKANALAKIAAABg");
	this.shape_10.setTransform(148.7,15.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AggBMQgNgEgJgEIAAgeIABAAIAIAGIAMAHIAOAFQAIADAJAAIAMgCQAHgBADgDQAFgCACgFQACgDAAgHQAAgJgFgFQgFgEgNgDIgLgEIgPgDQgSgFgHgKQgIgKAAgQQAAgUAPgNQAQgNAZAAQAMAAANADQANAEAJAEIAAAbIgCAAQgJgHgMgFQgNgEgMAAQgMAAgIAFQgJAFAAALQAAAKAFAFQAFAEAMADIAMAEIAOACQARAFAJAJQAIAJAAASQAAAJgDAJQgEAJgIAGQgIAHgKAEQgLADgOAAQgQAAgNgEg");
	this.shape_11.setTransform(128.3,15.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgfBNQgJgEgGgGQgGgGgEgJQgEgKAAgKQAAgQAHgLQAHgKAOgHQANgGARgCIAlgDIAAgFQAAgJgDgGQgCgFgFgDQgFgDgHgBIgOgBQgJAAgMACQgMADgMAFIgBAAIAAgaIAUgFQANgCANAAQAPAAALACQALADAIAGQAJAGAEAKQAEAKAAAPIAABnIgaAAIAAgQIgIAHIgKAGIgOAGQgFABgLAAQgKAAgIgDgAAMAAQgNAAgJADQgKADgHAGQgGAHAAALQAAANAHAHQAHAHAPAAQALAAAKgFQAKgGAIgHIAAgqg");
	this.shape_12.setTransform(114.1,15.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgfBNQgJgEgGgGQgGgGgEgJQgEgKAAgKQAAgQAHgLQAHgKAOgHQANgGARgCIAlgDIAAgFQAAgJgDgGQgCgFgFgDQgFgDgHgBIgOgBQgJAAgMACQgMADgMAFIgBAAIAAgaIAUgFQANgCANAAQAPAAALACQALADAIAGQAJAGAEAKQAEAKAAAPIAABnIgaAAIAAgQIgIAHIgKAGIgOAGQgFABgLAAQgKAAgIgDgAAMAAQgNAAgJADQgKADgHAGQgGAHAAALQAAANAHAHQAHAHAPAAQALAAAKgFQAKgGAIgHIAAgqg");
	this.shape_13.setTransform(99.4,15.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgoBMIAAiXIAaAAIAAAWQAOgMAKgFQAKgFAKAAIAGAAIAEAAIAAAbIgBAAIgGgBIgHAAQgLAAgLAEQgJAFgJAJIAABrg");
	this.shape_14.setTransform(88.9,15.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgtA8QgUgVAAgmQAAgkAUgWQATgWAfAAQAOAAALAEQALAEAIAJQAJAJAEAMQAEANAAASIAAANIhpAAQAAAbANAOQAOAOAWAAQAJAAAIgCIAPgFIALgGIAJgGIABAAIAAAcIgLAFIgMAEIgOADIgPABQgkAAgUgUgAApgQQgBgKgCgIQgCgHgEgFQgEgGgIgDQgGgDgLAAQgJAAgHADQgIADgFAGQgGAGgDAHQgDAIgBAJIBQAAIAAAAg");
	this.shape_15.setTransform(75.7,15.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AA8BmIAAivIg1B3IgPAAIg1h3IAACvIgZAAIAAjLIAlAAIAyBxIAxhxIAlAAIAADLg");
	this.shape_16.setTransform(57.5,12.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgxBQQgPgaAAg2QAAg2AQgZQAQgaAgAAQAiAAAPAaQAQAbAAA0QAAA3gQAZQgQAaghAAQghAAgQgagAgRhNQgIAFgFALQgEAKgBAQQgBAQAAATIABAkQABAOAEAMQAFAKAHAGQAHAFALAAQALAAAIgFQAHgFAEgLQAEgKACgQQACgPAAgVQAAgUgCgPQgCgQgEgKQgEgLgHgFQgIgFgLAAQgLAAgGAFg");
	this.shape_17.setTransform(30.4,12.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgwBQQgQgaAAg2QAAg2AQgZQAPgaAhAAQAhAAARAaQAPAbAAA0QAAA3gQAZQgQAaghAAQghAAgPgagAgShNQgHAFgEALQgEAKgCAQQgBAQgBATIACAkQABAOAFAMQADAKAIAGQAHAFALAAQAMAAAGgFQAIgFAEgLQAEgKABgQQACgPAAgVQAAgUgCgPQgBgQgEgKQgEgLgIgFQgGgFgMAAQgKAAgIAFg");
	this.shape_18.setTransform(15.1,12.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgaBmQgNgFgJgIQgIgIgFgMQgEgLAAgMQAAgRAJgOQAJgOAQgHIAAgBQgPgJgHgKQgHgKAAgQQAAgXARgPQASgPAZAAQAcAAARAOQAQAPAAAWQAAAOgIANQgIAOgPAHIAAABQASAHAJAMQAJAMAAATQAAAagSASQgTARgdAAQgOAAgMgEgAggASQgGALAAAPQAAASAMAMQALAMAPAAQASAAAKgKQAKgLAAgRQAAgNgEgHQgFgIgOgHIgNgGIgQgHQgMAHgGALgAgXhNQgKAIAAAOQAAAKAFAHQAFAHAKAGIANAGIAOAGQAMgJAEgJQAFgKAAgMQAAgOgKgJQgJgJgQAAQgOAAgJAIg");
	this.shape_19.setTransform(-0.2,12.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol36, new cjs.Rectangle(-9.8,-7,322.5,37.8), null);


(lib.Symbol34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image43();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol34, new cjs.Rectangle(0,0,302,252), null);


(lib.Symbol33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image42();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol33, new cjs.Rectangle(0,0,302,252), null);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image41();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol32, new cjs.Rectangle(0,0,302,252), null);


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image3();
	this.instance.parent = this;
	this.instance.setTransform(-26,-34,1.185,1.185);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol31, new cjs.Rectangle(-26,-34,355.4,215.6), null);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol30, new cjs.Rectangle(0,0,302,252), null);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol29, new cjs.Rectangle(0,0,302,252), null);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAiBqIAAhXIAAgTQgBgIgDgGQgDgGgGgCQgGgDgJAAQgJAAgKAFQgLAFgJAIIAABxIgaAAIAAjTIAaAAIAABMQALgKAMgFQAKgGAMAAQAXAAANAPQAMAPAAAbIAABjg");
	this.shape.setTransform(114.6,21.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgPBLQgNgFgJgJQgKgKgFgPQgFgQAAgTQAAgUAFgPQAGgOAJgKQAJgKANgFQAOgGAOAAQANAAALAEQAMADAJAFIAAAdIgBAAIgHgFIgLgHIgMgEQgIgCgGgBQgTAAgMAPQgNAPAAAcQAAAaAMAQQAMAPAUgBQAMAAAMgEQALgGAJgIIABAAIAAAdIgJAFIgLADIgMADIgNABQgPAAgNgFg");
	this.shape_1.setTransform(100.4,24.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgfBNQgJgEgGgGQgGgGgEgJQgEgKAAgKQAAgQAHgLQAHgKAOgHQANgGARgCIAlgDIAAgFQAAgJgDgGQgCgFgFgDQgFgDgHgBIgOgBQgJAAgMACQgMADgMAFIgBAAIAAgaIAUgFQANgCANAAQAPAAALACQALADAIAGQAJAGAEAKQAEAKAAAPIAABnIgaAAIAAgQIgIAHIgKAGIgOAGQgFABgLAAQgKAAgIgDgAAMAAQgNAAgJADQgKADgHAGQgGAHAAALQAAANAHAHQAHAHAPAAQALAAAKgFQAKgGAIgHIAAgqg");
	this.shape_2.setTransform(86,24.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgsA8QgVgVAAgmQAAgkAUgWQATgWAfAAQAOAAALAEQALAEAIAJQAIAJAFAMQAEANAAASIAAANIhpAAQAAAbAOAOQANAOAXAAQAIAAAJgCIAOgFIAMgGIAIgGIABAAIAAAcIgLAFIgMAEIgNADIgQABQgkAAgTgUgAApgQQgBgKgCgIQgCgHgEgFQgEgGgIgDQgHgDgKAAQgJAAgHADQgHADgGAGQgGAGgDAHQgDAIgBAJIBQAAIAAAAg");
	this.shape_3.setTransform(71.9,24.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgUBpQgIgDgJgFIgCAHIgYAAIAAjTIAaAAIAABMQAKgJALgGQALgGAOAAQAZAAAPAVQAPAVAAAjQAAAmgSAXQgSAWgbAAQgMAAgJgDgAgRgWQgLAFgJAHIAABXQAKAEAHACQAHACAJAAQAUAAALgOQAKgOABgeQgBgbgHgNQgJgOgSAAQgKAAgKAFg");
	this.shape_4.setTransform(57.3,21.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgsA8QgVgVAAgmQAAgkATgWQAUgWAfAAQAOAAALAEQALAEAIAJQAIAJAEAMQAFANAAASIAAANIhpAAQAAAbAOAOQANAOAXAAQAIAAAJgCIAOgFIAMgGIAHgGIACAAIAAAcIgLAFIgMAEIgNADIgQABQgjAAgUgUgAApgQQAAgKgCgIQgCgHgFgFQgFgGgGgDQgIgDgKAAQgJAAgHADQgHADgGAGQgGAGgDAHQgDAIgBAJIBQAAIAAAAg");
	this.shape_5.setTransform(33,24.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAiBqIAAhXIgBgTQAAgIgDgGQgDgGgGgCQgGgDgJAAQgJAAgKAFQgLAFgJAIIAABxIgaAAIAAjTIAaAAIAABMQALgKALgFQALgGAMAAQAXAAANAPQAMAPAAAbIAABjg");
	this.shape_6.setTransform(17.8,21.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgPBYQgMgMAAgaIAAhUIgRAAIAAgVIARAAIAAgsIAaAAIAAAsIAuAAIAAAVIguAAIAABIIAAASQABAGACAGQACAEAFADQAFACAJAAQAGAAAGgCIAIgDIACAAIAAAXIgOAEIgOABQgUAAgMgMg");
	this.shape_7.setTransform(5.4,22.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol27, new cjs.Rectangle(-1.5,2.3,125.9,37.8), null);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgPBYQgMgMAAgaIAAhUIgRAAIAAgVIARAAIAAgsIAaAAIAAAsIAuAAIAAAVIguAAIAABIIAAASQABAGABAGQADAEAFADQAFACAJAAQAHAAAFgCIAIgDIACAAIAAAXIgOAEIgOABQgUAAgMgMg");
	this.shape.setTransform(268.8,24.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgfBNQgJgEgGgGQgGgGgEgJQgEgKAAgKQAAgQAHgLQAHgKAOgHQANgGARgCIAlgDIAAgFQAAgJgDgGQgCgFgFgDQgFgDgHgBIgOgBQgJAAgMACQgMADgMAFIgBAAIAAgaIAUgFQANgCANAAQAPAAALACQALADAIAGQAJAGAEAKQAEAKAAAPIAABnIgaAAIAAgQIgIAHIgKAGIgOAGQgFABgLAAQgKAAgIgDgAAMAAQgNAAgJADQgKADgHAGQgGAHAAALQAAANAHAHQAHAHAPAAQALAAAKgFQAKgGAIgHIAAgqg");
	this.shape_1.setTransform(256.2,26.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgsA8QgVgVAAgmQAAgkAUgWQATgWAfAAQAOAAALAEQALAEAIAJQAIAJAFAMQAEANAAASIAAANIhpAAQAAAbAOAOQANAOAXAAQAIAAAJgCIAOgFIAMgGIAIgGIABAAIAAAcIgLAFIgMAEIgNADIgQABQgjAAgUgUgAApgQQAAgKgDgIQgCgHgEgFQgFgGgHgDQgHgDgKAAQgJAAgHADQgHADgGAGQgGAGgDAHQgDAIgBAJIBQAAIAAAAg");
	this.shape_2.setTransform(233.3,26.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgPBYQgMgMAAgaIAAhUIgRAAIAAgVIARAAIAAgsIAaAAIAAAsIAuAAIAAAVIguAAIAABIIABASQAAAGABAGQADAEAFADQAFACAJAAQAGAAAHgCIAIgDIABAAIAAAXIgPAEIgNABQgUAAgMgMg");
	this.shape_3.setTransform(221.4,24.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgMBmIAAiXIAZAAIAACXgAgNhLIAAgaIAbAAIAAAag");
	this.shape_4.setTransform(213.3,24.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgeBLQgIgDgHgHQgHgHgEgLQgDgLAAgPIAAhiIAaAAIAABVIAAAVQABAIADAGQAEAGAFACQAFADAKAAQAJAAALgFQALgGAJgHIAAhxIAZAAIAACXIgZAAIAAgRQgNALgKAFQgLAFgMAAQgKAAgJgDg");
	this.shape_5.setTransform(202.3,27.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AggBMQgNgEgJgFIAAgdIABAAIAIAGIAMAHIAOAFQAIACAJAAIAMgBQAHgBADgCQAFgDACgFQACgDAAgHQAAgJgFgFQgFgFgNgDIgLgDIgPgDQgSgFgHgJQgIgLAAgQQAAgUAPgNQAQgNAZAAQAMAAANADQANADAJAFIAAAbIgCAAQgJgHgMgEQgNgFgMAAQgMAAgIAFQgJAGAAALQAAAJAFAEQAFAGAMACIAMAEIAOADQARAEAJAIQAIAKAAARQAAAKgDAJQgEAJgIAGQgIAHgKADQgLAEgOAAQgQAAgNgEg");
	this.shape_6.setTransform(188.5,26.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AggBMQgNgEgJgFIAAgdIABAAIAIAGIAMAHIAOAFQAIACAJAAIAMgBQAHgBADgCQAFgDACgFQACgDAAgHQAAgJgFgFQgFgFgNgDIgLgDIgPgDQgSgFgHgJQgIgLAAgQQAAgUAPgNQAQgNAZAAQAMAAANADQANADAJAFIAAAbIgCAAQgJgHgMgEQgNgFgMAAQgMAAgIAFQgJAGAAALQAAAJAFAEQAFAGAMACIAMAEIAOADQARAEAJAIQAIAKAAARQAAAKgDAJQgEAJgIAGQgIAHgKADQgLAEgOAAQgQAAgNgEg");
	this.shape_7.setTransform(167.3,26.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgsA8QgVgVAAgmQAAgkATgWQAUgWAfAAQAOAAALAEQALAEAIAJQAIAJAEAMQAFANAAASIAAANIhpAAQAAAbAOAOQANAOAXAAQAIAAAJgCIAOgFIAMgGIAHgGIACAAIAAAcIgLAFIgMAEIgNADIgQABQgjAAgUgUgAApgQQAAgKgCgIQgCgHgFgFQgFgGgGgDQgIgDgKAAQgJAAgHADQgHADgGAGQgGAGgDAHQgDAIgBAJIBQAAIAAAAg");
	this.shape_8.setTransform(153.6,26.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgMBqIAAjTIAZAAIAADTg");
	this.shape_9.setTransform(143,23.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgfBNQgJgEgGgGQgGgGgEgJQgEgKAAgKQAAgQAHgLQAHgKAOgHQANgGARgCIAlgDIAAgFQAAgJgDgGQgCgFgFgDQgFgDgHgBIgOgBQgJAAgMACQgMADgMAFIgBAAIAAgaIAUgFQANgCANAAQAPAAALACQALADAIAGQAJAGAEAKQAEAKAAAPIAABnIgaAAIAAgQIgIAHIgKAGIgOAGQgFABgLAAQgKAAgIgDgAAMAAQgNAAgJADQgKADgHAGQgGAHAAALQAAANAHAHQAHAHAPAAQALAAAKgFQAKgGAIgHIAAgqg");
	this.shape_10.setTransform(132,26.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AggBMQgNgEgJgFIAAgdIABAAIAIAGIAMAHIAOAFQAIACAJAAIAMgBQAHgBADgCQAFgDACgFQACgDAAgHQAAgJgFgFQgFgFgNgDIgLgDIgPgDQgSgFgHgJQgIgLAAgQQAAgUAPgNQAQgNAZAAQAMAAANADQANADAJAFIAAAbIgCAAQgJgHgMgEQgNgFgMAAQgMAAgIAFQgJAGAAALQAAAJAFAEQAFAGAMACIAMAEIAOADQARAEAJAIQAIAKAAARQAAAKgDAJQgEAJgIAGQgIAHgKADQgLAEgOAAQgQAAgNgEg");
	this.shape_11.setTransform(119.1,26.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgtA8QgUgVAAgmQAAgkATgWQAUgWAfAAQAOAAALAEQALAEAIAJQAJAJADAMQAFANAAASIAAANIhpAAQAAAbANAOQAOAOAXAAQAIAAAIgCIAPgFIALgGIAIgGIACAAIAAAcIgLAFIgMAEIgOADIgPABQgkAAgUgUgAApgQQgBgKgBgIQgCgHgFgFQgFgGgGgDQgIgDgKAAQgJAAgHADQgIADgFAGQgGAGgDAHQgDAIgBAJIBQAAIAAAAg");
	this.shape_12.setTransform(96.7,26.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAjBqIAAhXIgBgTQgBgIgEgGQgDgGgFgCQgGgDgJAAQgJAAgKAFQgLAFgJAIIAABxIgaAAIAAjTIAaAAIAABMQAMgKALgFQAKgGAMAAQAXAAAMAPQANAPAAAbIAABjg");
	this.shape_13.setTransform(81.5,23.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgPBYQgMgMAAgaIAAhUIgRAAIAAgVIARAAIAAgsIAaAAIAAAsIAuAAIAAAVIguAAIAABIIAAASQABAGABAGQADAEAFADQAFACAJAAQAHAAAFgCIAIgDIACAAIAAAXIgOAEIgOABQgUAAgMgMg");
	this.shape_14.setTransform(69.1,24.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgPBYQgMgMAAgaIAAhUIgRAAIAAgVIARAAIAAgsIAaAAIAAAsIAuAAIAAAVIguAAIAABIIAAASQABAGABAGQADAEAFADQAFACAJAAQAHAAAFgCIAIgDIACAAIAAAXIgOAEIgOABQgUAAgMgMg");
	this.shape_15.setTransform(51,24.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgMBmIAAiXIAZAAIAACXgAgOhLIAAgaIAcAAIAAAag");
	this.shape_16.setTransform(43,24.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AggBMQgNgEgJgFIAAgdIABAAIAIAGIAMAHIAOAFQAIACAJAAIAMgBQAHgBADgCQAFgDACgFQACgDAAgHQAAgJgFgFQgFgFgNgDIgLgDIgPgDQgSgFgHgJQgIgLAAgQQAAgUAPgNQAQgNAZAAQAMAAANADQANADAJAFIAAAbIgCAAQgJgHgMgEQgNgFgMAAQgMAAgIAFQgJAGAAALQAAAJAFAEQAFAGAMACIAMAEIAOADQARAEAJAIQAIAKAAARQAAAKgDAJQgEAJgIAGQgIAHgKADQgLAEgOAAQgQAAgNgEg");
	this.shape_17.setTransform(33.7,26.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgMBmIAAiXIAZAAIAACXgAgOhLIAAgaIAcAAIAAAag");
	this.shape_18.setTransform(24.2,24.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgNBmIhHjLIAdAAIA4CoIA4ioIAcAAIhHDLg");
	this.shape_19.setTransform(12.6,24.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol26, new cjs.Rectangle(2.2,4.5,273.3,37.8), null);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgaBmQgNgFgJgIQgIgIgFgMQgEgLAAgMQAAgRAJgOQAJgOAQgHIAAgBQgPgJgHgKQgHgKAAgQQAAgXARgPQASgPAZAAQAcAAARAOQAQAPAAAWQAAAOgIANQgIAOgPAHIAAABQASAHAJAMQAJAMAAATQAAAagSASQgTARgdAAQgOAAgMgEgAggASQgGALAAAPQAAASAMAMQALAMAPAAQASAAAKgKQAKgLAAgRQAAgNgEgHQgFgIgOgHIgNgGIgQgHQgMAHgGALgAgXhNQgKAIAAAOQAAAKAFAHQAFAHAKAGIANAGIAOAGQAMgJAEgJQAFgKAAgMQAAgOgKgJQgJgJgQAAQgOAAgJAIg");
	this.shape.setTransform(121.6,22.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgxBmIAAgVIAlAAIAAiHIglAAIAAgTQAWAAAKgFQAJgGACgRIATAAIAAC2IAkAAIAAAVg");
	this.shape_1.setTransform(106.8,22);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgxBQQgPgaAAg2QAAg2AQgZQAQgaAgAAQAiAAAPAaQAQAbAAA0QAAA3gQAZQgQAaghAAQggAAgRgagAgRhNQgIAFgFALQgEAKgBAQQgBAQAAATIABAkQABAOAEAMQAFAKAHAGQAHAFALAAQALAAAIgFQAHgFAEgLQAEgKACgQQACgPAAgVQAAgUgCgPQgCgQgEgKQgEgLgHgFQgIgFgLAAQgLAAgGAFg");
	this.shape_2.setTransform(91.1,22.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag+BoIAAgcIAagZIAXgZQAWgZAJgOQAIgQAAgRQAAgIgCgHQgDgGgFgEQgEgEgHgCQgFgCgHAAQgIAAgHACIgOAEIgLAGIgJAFIgCAAIAAgdQAJgDAPgFQAPgEAOAAQAbAAAQAPQAQAQAAAZQAAAMgCAKQgDAKgFAJQgFAIgHAIIgPASIgcAdIgZAXIBjAAIAAAYg");
	this.shape_3.setTransform(76,21.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgwBmIAAgVIAlAAIAAiHIglAAIAAgTQAUAAAKgFQAKgGABgRIAVAAIAAC2IAkAAIAAAVg");
	this.shape_4.setTransform(52.3,22);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAWB2QgPgNgBgYIgEAAIgCAAQgUAAgQgHQgRgHgMgNQgMgOgGgUQgGgTgBgYQABgaAGgUQAGgTAMgOQAMgNARgHQAQgIAUAAQAVAAAQAIQAQAHAMANQALANAHAUQAGAUAAAaQAAAmgPAaQgPAZgbAKIACANQACAGAEAEQADAEAGACQAFACAJAAIANgBIALgEIADAAIAAAZIgPADIgQABQgXAAgOgNgAgZhlQgLAFgJALQgHAKgFAQQgEAQgBAUQABAnAQAVQARAVAcAAQAcAAAQgVQARgVAAgnQAAgVgEgPQgEgQgJgKQgHgLgMgFQgLgFgOAAQgOAAgLAFg");
	this.shape_5.setTransform(34.4,24.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAiBOIAAhVIAAgUQgBgJgDgFQgDgGgGgDQgGgDgJAAQgJAAgKAFQgLAFgJAJIAABwIgaAAIAAiXIAaAAIAAAQQALgKALgFQALgFAMAAQAXgBANAQQAMAOAAAcIAABig");
	this.shape_6.setTransform(7.9,24.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgMBmIAAiXIAZAAIAACXgAgOhLIAAgaIAdAAIAAAag");
	this.shape_7.setTransform(-3.1,22);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol25, new cjs.Rectangle(-8.4,2.3,139.7,37.8), null);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgsA8QgVgVAAgmQAAgkAUgWQATgWAfAAQAOAAALAEQALAEAIAJQAIAJAFAMQAEANAAASIAAANIhpAAQAAAbAOAOQANAOAWAAQAJAAAIgCIAPgFIAMgGIAIgGIABAAIAAAcIgLAFIgMAEIgNADIgQABQgkAAgTgUgAApgQQgBgKgCgIQgCgHgEgFQgEgGgIgDQgGgDgLAAQgJAAgHADQgIADgFAGQgGAGgDAHQgDAIgBAJIBQAAIAAAAg");
	this.shape.setTransform(308.7,26.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABKBOIAAhXIgBgTQAAgKgEgEQgCgGgFgCQgFgDgJAAQgHAAgKAFQgJAFgKAJIABAFIAAAIIAABjIgZAAIAAhXIgBgTQAAgKgDgEQgCgGgGgCQgFgDgJAAQgIAAgJAFQgJAFgIAJIAABwIgaAAIAAiXIAaAAIAAAQQAJgKALgFQAJgFAMAAQAOgBAKAHQAKAGAFAOQAMgNALgHQALgGANAAQAJAAAJACQAIADAGAHQAGAIADAKQAEALAAAPIAABjg");
	this.shape_1.setTransform(289.6,26.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgxA7QgSgWAAglQAAglATgWQASgUAeAAQAfAAATAUQASAWAAAlQAAAngSAVQgTAVgfAAQgfgBgSgVgAgdgrQgLAPAAAcQAAAdALAPQAKAOATAAQAUAAALgOQALgOAAgeQAAgcgLgPQgLgPgUAAQgTAAgKAPg");
	this.shape_2.setTransform(270.2,26.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAiBqIAAhXIgBgTQgBgIgCgGQgDgGgGgCQgGgDgKAAQgIAAgKAFQgKAFgKAIIAABxIgaAAIAAjTIAaAAIAABMQAMgKAKgFQALgGAMAAQAXAAANAPQAMAPAAAbIAABjg");
	this.shape_3.setTransform(254.8,23.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAlBMIglh0IgkB0IgYAAIgniXIAbAAIAbB1IAkh1IAVAAIAlB1IAZh1IAaAAIgnCXg");
	this.shape_4.setTransform(227.8,26.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgtA8QgUgVAAgmQAAgkATgWQAUgWAfAAQAOAAALAEQALAEAIAJQAJAJADAMQAFANAAASIAAANIhpAAQAAAbAOAOQANAOAXAAQAIAAAJgCIAOgFIALgGIAIgGIACAAIAAAcIgLAFIgMAEIgOADIgPABQgjAAgVgUgAApgQQAAgKgCgIQgCgHgFgFQgFgGgGgDQgIgDgKAAQgJAAgHADQgIADgFAGQgGAGgDAHQgDAIgBAJIBQAAIAAAAg");
	this.shape_5.setTransform(210.2,26.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAiBOIAAhVIAAgUQgBgJgEgFQgDgGgFgDQgGgDgJAAQgJAAgKAFQgKAFgKAJIAABwIgaAAIAAiXIAaAAIAAAQQAMgKALgFQAKgFAMAAQAXgBAMAQQANAOAAAcIAABig");
	this.shape_6.setTransform(195,26.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgoBMIAAiXIAbAAIAAAWQANgMAKgFQALgFAJAAIAGAAIAEAAIAAAbIgBAAIgGgBIgIAAQgKAAgLAEQgJAFgIAJIAABrg");
	this.shape_7.setTransform(174.3,26.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgeBLQgIgDgHgHQgHgHgDgLQgEgLAAgPIAAhiIAaAAIAABVIAAAVQABAIAEAGQADAGAFACQAFADAKAAQAJAAALgFQALgGAJgHIAAhxIAZAAIAACXIgZAAIAAgRQgNALgKAFQgLAFgMAAQgKAAgJgDg");
	this.shape_8.setTransform(160.5,27.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgxA7QgSgWAAglQAAglATgWQATgUAdAAQAfAAATAUQASAWAAAlQAAAngSAVQgTAVgfAAQgfgBgSgVgAgdgrQgLAPAAAcQAAAdALAPQAKAOATAAQAUAAALgOQALgOAAgeQAAgcgLgPQgLgPgUAAQgTAAgKAPg");
	this.shape_9.setTransform(145.2,26.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgoBoIAcg/Ig4iQIAcAAIApBvIAphvIAbAAIhRDPg");
	this.shape_10.setTransform(130.8,29.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgxA7QgSgWAAglQAAglASgWQAUgUAdAAQAfAAASAUQATAWAAAlQAAAngTAVQgSAVgfAAQgfgBgSgVgAgdgrQgMAPAAAcQAAAdAMAPQAKAOATAAQAUAAALgOQALgOAAgeQAAgcgLgPQgLgPgUAAQgTAAgKAPg");
	this.shape_11.setTransform(107.5,26.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgPBYQgMgMAAgaIAAhUIgRAAIAAgVIARAAIAAgsIAaAAIAAAsIAuAAIAAAVIguAAIAABIIABASQAAAGABAGQADAEAFADQAFACAJAAQAGAAAHgCIAIgDIABAAIAAAXIgPAEIgNABQgUAAgMgMg");
	this.shape_12.setTransform(95.4,24.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAiBOIAAhVIgBgUQgBgJgCgFQgDgGgGgDQgGgDgKAAQgIAAgKAFQgKAFgKAJIAABwIgaAAIAAiXIAaAAIAAAQQALgKALgFQALgFAMAAQAXgBANAQQAMAOAAAcIAABig");
	this.shape_13.setTransform(82.8,26.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgMBmIAAiXIAZAAIAACXgAgNhLIAAgaIAcAAIAAAag");
	this.shape_14.setTransform(71.8,24.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgtA8QgUgVAAgmQAAgkATgWQAUgWAfAAQAOAAALAEQALAEAIAJQAJAJADAMQAFANAAASIAAANIhpAAQAAAbANAOQAOAOAXAAQAIAAAIgCIAPgFIALgGIAIgGIACAAIAAAcIgLAFIgMAEIgOADIgPABQgkAAgUgUgAApgQQgBgKgBgIQgCgHgFgFQgFgGgGgDQgIgDgKAAQgJAAgHADQgHADgGAGQgGAGgDAHQgDAIgBAJIBQAAIAAAAg");
	this.shape_15.setTransform(52.6,26.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgLBMIg5iXIAcAAIApB0IAph0IAbAAIg6CXg");
	this.shape_16.setTransform(38.4,26.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgxA7QgSgWAAglQAAglASgWQAUgUAdAAQAfAAASAUQATAWAAAlQAAAngTAVQgSAVgfAAQgegBgTgVgAgegrQgKAPgBAcQABAdAKAPQALAOATAAQAUAAALgOQAKgOAAgeQAAgcgKgPQgLgPgUAAQgTAAgLAPg");
	this.shape_17.setTransform(24.1,26.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AA8BmIAAivIg1B3IgPAAIg1h3IAACvIgZAAIAAjLIAlAAIAyBxIAxhxIAlAAIAADLg");
	this.shape_18.setTransform(5.7,24.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol24, new cjs.Rectangle(-11.5,4.5,334,37.8), null);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AggBMQgNgEgJgFIAAgdIABAAIAIAGIAMAHIAOAFQAIACAJAAIAMgBQAHgBADgCQAFgDACgFQACgDAAgHQAAgJgFgFQgFgFgNgDIgLgDIgPgDQgSgFgHgJQgIgLAAgQQAAgUAPgNQAQgNAZAAQAMAAANADQANADAJAFIAAAbIgCAAQgJgHgMgEQgNgFgMAAQgMAAgIAFQgJAGAAALQAAAJAFAEQAFAGAMACIAMAEIAOADQARAEAJAIQAIAKAAARQAAAKgDAJQgEAJgIAGQgIAHgKADQgLAEgOAAQgQAAgNgEg");
	this.shape.setTransform(230.4,20.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgtA8QgUgVAAgmQAAgkATgWQAUgWAfAAQAOAAALAEQALAEAIAJQAJAJADAMQAFANAAASIAAANIhpAAQAAAbANAOQAOAOAWAAQAJAAAIgCIAPgFIALgGIAIgGIACAAIAAAcIgLAFIgMAEIgOADIgPABQgjAAgVgUgAApgQQgBgKgBgIQgDgHgEgFQgFgGgGgDQgIgDgKAAQgJAAgHADQgHADgGAGQgGAGgDAHQgDAIgBAJIBQAAIAAAAg");
	this.shape_1.setTransform(216.7,20.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgMBmIAAiXIAZAAIAACXgAgOhLIAAgaIAdAAIAAAag");
	this.shape_2.setTransform(206.2,17.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgPBYQgMgMAAgaIAAhUIgRAAIAAgVIARAAIAAgsIAaAAIAAAsIAuAAIAAAVIguAAIAABIIABASQAAAGABAGQADAEAFADQAFACAJAAQAGAAAHgCIAIgDIABAAIAAAXIgPAEIgNABQgUAAgMgMg");
	this.shape_3.setTransform(198.4,18.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgMBmIAAiXIAZAAIAACXgAgNhLIAAgaIAbAAIAAAag");
	this.shape_4.setTransform(190.4,17.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAjBOIAAhVIgBgUQgCgJgDgFQgDgGgFgDQgGgDgKAAQgIAAgKAFQgLAFgJAJIAABwIgaAAIAAiXIAaAAIAAAQQALgKAMgFQAKgFAMAAQAWgBANAQQANAOAAAcIAABig");
	this.shape_5.setTransform(179.4,19.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgtA8QgUgVAAgmQAAgkATgWQAUgWAfAAQAOAAALAEQALAEAIAJQAJAJADAMQAFANAAASIAAANIhpAAQAAAbAOAOQANAOAXAAQAIAAAJgCIAOgFIALgGIAIgGIACAAIAAAcIgLAFIgMAEIgOADIgPABQgjAAgVgUgAApgQQAAgKgCgIQgCgHgFgFQgFgGgGgDQgIgDgKAAQgJAAgHADQgIADgFAGQgGAGgDAHQgDAIgBAJIBQAAIAAAAg");
	this.shape_6.setTransform(164.3,20.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABKBOIAAhXIgBgTQgBgKgDgEQgCgGgFgCQgFgDgIAAQgJAAgIAFQgKAFgJAJIAAAFIAAAIIAABjIgYAAIAAhXIgBgTQgBgKgDgEQgDgGgFgCQgFgDgIAAQgJAAgJAFQgJAFgJAJIAABwIgaAAIAAiXIAaAAIAAAQQALgKAJgFQAKgFAMAAQANgBALAHQAJAGAGAOQAMgNALgHQALgGANAAQAKAAAHACQAJADAGAHQAGAIAEAKQACALAAAPIAABjg");
	this.shape_7.setTransform(145.2,19.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgfBNQgJgEgGgGQgGgGgEgJQgEgKAAgKQAAgQAHgLQAHgKAOgHQANgGARgCIAlgDIAAgFQAAgJgDgGQgCgFgFgDQgFgDgHgBIgOgBQgJAAgMACQgMADgMAFIgBAAIAAgaIAUgFQANgCANAAQAPAAALACQALADAIAGQAJAGAEAKQAEAKAAAPIAABnIgaAAIAAgQIgIAHIgKAGIgOAGQgFABgLAAQgKAAgIgDgAAMAAQgNAAgJADQgKADgHAGQgGAHAAALQAAANAHAHQAHAHAPAAQALAAAKgFQAKgGAIgHIAAgqg");
	this.shape_8.setTransform(125.6,20.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgPBLQgNgFgJgJQgKgKgFgPQgFgQAAgTQAAgUAFgPQAGgOAJgKQAJgKANgFQAOgGAOAAQANAAALAEQAMADAJAFIAAAdIgBAAIgHgFIgLgHIgMgEQgIgCgGgBQgTAAgMAPQgNAPAAAcQAAAaAMAQQAMAPAUgBQAMAAAMgEQALgGAJgIIABAAIAAAdIgJAFIgLADIgMADIgNABQgPAAgNgFg");
	this.shape_9.setTransform(103.7,20.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgMBmIAAiXIAZAAIAACXgAgOhLIAAgaIAcAAIAAAag");
	this.shape_10.setTransform(93.9,17.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgPBYQgMgMAAgaIAAhUIgRAAIAAgVIARAAIAAgsIAaAAIAAAsIAuAAIAAAVIguAAIAABIIABASQAAAGACAGQACAEAFADQAFACAJAAQAGAAAHgCIAIgDIABAAIAAAXIgPAEIgNABQgUAAgMgMg");
	this.shape_11.setTransform(86.2,18.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AggBMQgNgEgJgFIAAgdIABAAIAIAGIAMAHIAOAFQAIACAJAAIAMgBQAHgBADgCQAFgDACgFQACgDAAgHQAAgJgFgFQgFgFgNgDIgLgDIgPgDQgSgFgHgJQgIgLAAgQQAAgUAPgNQAQgNAZAAQAMAAANADQANADAJAFIAAAbIgCAAQgJgHgMgEQgNgFgMAAQgMAAgIAFQgJAGAAALQAAAJAFAEQAFAGAMACIAMAEIAOADQARAEAJAIQAIAKAAARQAAAKgDAJQgEAJgIAGQgIAHgKADQgLAEgOAAQgQAAgNgEg");
	this.shape_12.setTransform(75.3,20.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgfBNQgJgEgGgGQgGgGgEgJQgEgKAAgKQAAgQAHgLQAHgKAOgHQANgGARgCIAlgDIAAgFQAAgJgDgGQgCgFgFgDQgFgDgHgBIgOgBQgJAAgMACQgMADgMAFIgBAAIAAgaIAUgFQANgCANAAQAPAAALACQALADAIAGQAJAGAEAKQAEAKAAAPIAABnIgaAAIAAgQIgIAHIgKAGIgOAGQgFABgLAAQgKAAgIgDgAAMAAQgNAAgJADQgKADgHAGQgGAHAAALQAAANAHAHQAHAHAPAAQALAAAKgFQAKgGAIgHIAAgqg");
	this.shape_13.setTransform(61.1,20.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgPBYQgMgMAAgaIAAhUIgRAAIAAgVIARAAIAAgsIAaAAIAAAsIAuAAIAAAVIguAAIAABIIABASQAAAGACAGQACAEAFADQAFACAJAAQAGAAAHgCIAIgDIABAAIAAAXIgPAEIgNABQgUAAgMgMg");
	this.shape_14.setTransform(49.7,18.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAiBOIAAhVIAAgUQgBgJgDgFQgDgGgGgDQgGgDgJAAQgJAAgKAFQgLAFgJAJIAABwIgaAAIAAiXIAaAAIAAAQQALgKAMgFQAKgFAMAAQAXgBANAQQAMAOAAAcIAABig");
	this.shape_15.setTransform(37.2,19.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgfBNQgJgEgGgGQgGgGgEgJQgEgKAAgKQAAgQAHgLQAHgKAOgHQANgGARgCIAlgDIAAgFQAAgJgDgGQgCgFgFgDQgFgDgHgBIgOgBQgJAAgMACQgMADgMAFIgBAAIAAgaIAUgFQANgCANAAQAPAAALACQALADAIAGQAJAGAEAKQAEAKAAAPIAABnIgaAAIAAgQIgIAHIgKAGIgOAGQgFABgLAAQgKAAgIgDgAAMAAQgNAAgJADQgKADgHAGQgGAHAAALQAAANAHAHQAHAHAPAAQALAAAKgFQAKgGAIgHIAAgqg");
	this.shape_16.setTransform(21.5,20.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgdBrIAAiDIgSAAIAAgUIASAAIAAgGQAAgbANgOQAOgPAXAAIAOAAIANACIAAAYIgCAAIgJgCIgMgBQgQAAgHAGQgHAIABATIAAAGIApAAIAAAUIgoAAIAACDg");
	this.shape_17.setTransform(11.3,17.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol23, new cjs.Rectangle(4.1,-2.2,234.5,37.8), null);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgcAtIAYhZIAhAAIglBZg");
	this.shape.setTransform(225.5,37.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AggBMQgNgEgJgFIAAgdIABAAIAIAGIAMAHIAOAFQAIACAJAAIAMgBQAHgBADgCQAFgDACgFQACgDAAgHQAAgJgFgFQgFgFgNgDIgLgDIgPgDQgSgFgHgJQgIgLAAgQQAAgUAPgNQAQgNAZAAQAMAAANADQANADAJAFIAAAbIgCAAQgJgHgMgEQgNgFgMAAQgMAAgIAFQgJAGAAALQAAAJAFAEQAFAGAMACIAMAEIAOADQARAEAJAIQAIAKAAARQAAAKgDAJQgEAJgIAGQgIAHgKADQgLAEgOAAQgQAAgNgEg");
	this.shape_1.setTransform(215.6,29.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAlBMIglh0IgkB0IgYAAIgniXIAbAAIAbB1IAkh1IAVAAIAlB1IAZh1IAaAAIgnCXg");
	this.shape_2.setTransform(198.8,29.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgsA8QgVgVAAgmQAAgkAUgWQATgWAfAAQAOAAALAEQALAEAIAJQAIAJAFAMQAEANAAASIAAANIhpAAQAAAbAOAOQANAOAXAAQAIAAAJgCIAOgFIAMgGIAIgGIABAAIAAAcIgLAFIgMAEIgNADIgQABQgjAAgUgUgAApgQQAAgKgDgIQgCgHgEgFQgFgGgHgDQgHgDgKAAQgJAAgHADQgHADgGAGQgGAGgDAHQgDAIgBAJIBQAAIAAAAg");
	this.shape_3.setTransform(181.1,29.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgMBmIAAiXIAZAAIAACXgAgNhLIAAgaIAbAAIAAAag");
	this.shape_4.setTransform(170.6,26.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgLBMIg5iXIAcAAIApB0IAph0IAbAAIg6CXg");
	this.shape_5.setTransform(160.4,29.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgnBMIAAiXIAaAAIAAAWQANgMAKgFQALgFAJAAIAGAAIAFAAIAAAbIgCAAIgGgBIgIAAQgKAAgKAEQgKAFgIAJIAABrg");
	this.shape_6.setTransform(140.6,29.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgfBNQgJgEgGgGQgGgGgEgJQgEgKAAgKQAAgQAHgLQAHgKAOgHQANgGARgCIAlgDIAAgFQAAgJgDgGQgCgFgFgDQgFgDgHgBIgOgBQgJAAgMACQgMADgMAFIgBAAIAAgaIAUgFQANgCANAAQAPAAALACQALADAIAGQAJAGAEAKQAEAKAAAPIAABnIgaAAIAAgQIgIAHIgKAGIgOAGQgFABgLAAQgKAAgIgDgAAMAAQgNAAgJADQgKADgHAGQgGAHAAALQAAANAHAHQAHAHAPAAQALAAAKgFQAKgGAIgHIAAgqg");
	this.shape_7.setTransform(126.9,29.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgMBqIAAjTIAZAAIAADTg");
	this.shape_8.setTransform(116.9,26.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgdBLQgJgDgHgHQgHgHgDgLQgEgLAAgPIAAhiIAZAAIAABVIABAVQACAIADAGQADAGAFACQAGADAJAAQAJAAALgFQAKgGAKgHIAAhxIAZAAIAACXIgZAAIAAgRQgMALgLAFQgLAFgMAAQgKAAgIgDg");
	this.shape_9.setTransform(105.8,29.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgPBLQgNgFgJgJQgKgKgFgPQgFgQAAgTQAAgUAFgPQAGgOAJgKQAJgKANgFQAOgGAOAAQANAAALAEQAMADAJAFIAAAdIgBAAIgHgFIgLgHIgMgEQgIgCgGgBQgTAAgMAPQgNAPAAAcQAAAaAMAQQAMAPAUgBQAMAAAMgEQALgGAJgIIABAAIAAAdIgJAFIgLADIgMADIgNABQgPAAgNgFg");
	this.shape_10.setTransform(91.8,29.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgfBNQgJgEgGgGQgGgGgEgJQgEgKAAgKQAAgQAHgLQAHgKAOgHQANgGARgCIAlgDIAAgFQAAgJgDgGQgCgFgFgDQgFgDgHgBIgOgBQgJAAgMACQgMADgMAFIgBAAIAAgaIAUgFQANgCANAAQAPAAALACQALADAIAGQAJAGAEAKQAEAKAAAPIAABnIgaAAIAAgQIgIAHIgKAGIgOAGQgFABgLAAQgKAAgIgDgAAMAAQgNAAgJADQgKADgHAGQgGAHAAALQAAANAHAHQAHAHAPAAQALAAAKgFQAKgGAIgHIAAgqg");
	this.shape_11.setTransform(77.4,29.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgPBYQgMgMAAgaIAAhUIgRAAIAAgVIARAAIAAgsIAaAAIAAAsIAuAAIAAAVIguAAIAABIIAAASQABAGABAGQADAEAFADQAFACAJAAQAHAAAFgCIAIgDIACAAIAAAXIgOAEIgOABQgUAAgMgMg");
	this.shape_12.setTransform(66,27.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgPBLQgNgFgJgJQgKgKgFgPQgFgQAAgTQAAgUAFgPQAGgOAJgKQAJgKANgFQAOgGAOAAQANAAALAEQAMADAJAFIAAAdIgBAAIgHgFIgLgHIgMgEQgIgCgGgBQgTAAgMAPQgNAPAAAcQAAAaAMAQQAMAPAUgBQAMAAAMgEQALgGAJgIIABAAIAAAdIgJAFIgLADIgMADIgNABQgPAAgNgFg");
	this.shape_13.setTransform(54.9,29.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgtA8QgUgVAAgmQAAgkATgWQAUgWAfAAQAOAAALAEQALAEAIAJQAJAJADAMQAFANAAASIAAANIhpAAQAAAbAOAOQANAOAXAAQAIAAAJgCIAOgFIALgGIAIgGIACAAIAAAcIgLAFIgMAEIgOADIgPABQgjAAgVgUgAApgQQAAgKgCgIQgCgHgFgFQgFgGgGgDQgIgDgKAAQgJAAgHADQgIADgFAGQgGAGgDAHQgDAIgBAJIBQAAIAAAAg");
	this.shape_14.setTransform(41,29.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag/BrIAAjQIAaAAIAAAQQAJgJAMgGQAMgGAMAAQAbAAAPAVQAOAVAAAjQAAAlgSAXQgSAWgcAAQgKAAgKgCQgIgDgJgFIAABAgAgShMQgKAEgJAIIAABWQAKAFAHABQAHACAKAAQASAAALgOQALgPAAgbQAAgagHgPQgJgOgSAAQgLAAgKAFg");
	this.shape_15.setTransform(26.4,31.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AggBMQgNgEgJgFIAAgdIABAAIAIAGIAMAHIAOAFQAIACAJAAIAMgBQAHgBADgCQAFgDACgFQACgDAAgHQAAgJgFgFQgFgFgNgDIgLgDIgPgDQgSgFgHgJQgIgLAAgQQAAgUAPgNQAQgNAZAAQAMAAANADQANADAJAFIAAAbIgCAAQgJgHgMgEQgNgFgMAAQgMAAgIAFQgJAGAAALQAAAJAFAEQAFAGAMACIAMAEIAOADQARAEAJAIQAIAKAAARQAAAKgDAJQgEAJgIAGQgIAHgKADQgLAEgOAAQgQAAgNgEg");
	this.shape_16.setTransform(12.1,29.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol22, new cjs.Rectangle(3.6,6.8,228.6,37.8), null);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgcAtIAYhZIAhAAIglBZg");
	this.shape.setTransform(260.7,44.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AggBMQgNgEgJgFIAAgdIABAAIAIAGIAMAHIAOAFQAIACAJAAIAMgBQAHgBADgCQAFgDACgFQACgDAAgHQAAgJgFgFQgFgFgNgDIgLgDIgPgDQgSgFgHgKQgIgKAAgQQAAgUAPgNQAQgNAZAAQAMAAANADQANADAJAFIAAAbIgCAAQgJgHgMgEQgNgFgMAAQgMAAgIAFQgJAGAAALQAAAJAFAEQAFAGAMACIAMAEIAOADQARAEAJAIQAIAKAAARQAAAKgDAJQgEAJgIAGQgIAHgKADQgLAEgOAAQgQAAgNgEg");
	this.shape_1.setTransform(250.7,35.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgPBYQgMgMAAgaIAAhUIgRAAIAAgVIARAAIAAgsIAaAAIAAAsIAuAAIAAAVIguAAIAABIIAAASQABAGACAGQACAEAFADQAFACAJAAQAHAAAFgCIAIgDIACAAIAAAXIgOAEIgOABQgUAAgMgMg");
	this.shape_2.setTransform(239.8,33.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAjBOIAAhVIgBgUQgCgJgDgFQgDgGgFgDQgGgDgJAAQgJAAgKAFQgLAFgJAJIAABwIgaAAIAAiXIAaAAIAAAQQAMgKALgFQAKgFAMAAQAWgBANAQQANAOAAAcIAABig");
	this.shape_3.setTransform(227.2,35.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgsA8QgVgVAAgmQAAgkATgWQAUgWAfAAQAOAAALAEQALAEAIAJQAIAJAEAMQAFANAAASIAAANIhpAAQAAAbAOAOQANAOAXAAQAIAAAJgCIAOgFIAMgGIAHgGIACAAIAAAcIgLAFIgMAEIgNADIgQABQgjAAgUgUgAApgQQAAgKgCgIQgCgHgFgFQgFgGgGgDQgIgDgKAAQgJAAgHADQgHADgGAGQgGAGgDAHQgDAIgBAJIBQAAIAAAAg");
	this.shape_4.setTransform(212.1,35.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABKBOIAAhXIgBgTQgBgKgDgEQgCgGgFgCQgFgDgIAAQgIAAgJAFQgKAFgJAJIAAAFIAAAIIAABjIgZAAIAAhXIAAgTQgCgKgCgEQgCgGgGgCQgFgDgJAAQgIAAgJAFQgJAFgJAJIAABwIgaAAIAAiXIAaAAIAAAQQALgKAJgFQAKgFAMAAQANgBALAHQAJAGAGAOQALgNAMgHQALgGANAAQAKAAAHACQAJADAGAHQAGAIADAKQADALAAAPIAABjg");
	this.shape_5.setTransform(193,35.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgPBYQgMgMAAgaIAAhUIgRAAIAAgVIARAAIAAgsIAaAAIAAAsIAuAAIAAAVIguAAIAABIIABASQAAAGACAGQACAEAFADQAFACAJAAQAGAAAHgCIAIgDIABAAIAAAXIgPAEIgNABQgUAAgMgMg");
	this.shape_6.setTransform(176.6,33.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgnBMIAAiXIAaAAIAAAWQANgMAKgFQAKgFAKAAIAGAAIAFAAIAAAbIgCAAIgGgBIgIAAQgKAAgKAEQgKAFgIAJIAABrg");
	this.shape_7.setTransform(167.7,35.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgfBNQgJgEgGgGQgGgGgEgJQgEgKAAgKQAAgQAHgLQAHgKAOgHQANgGARgCIAlgDIAAgFQAAgJgDgGQgCgFgFgDQgFgDgHgBIgOgBQgJAAgMACQgMADgMAFIgBAAIAAgaIAUgFQANgCANAAQAPAAALACQALADAIAGQAJAGAEAKQAEAKAAAPIAABnIgaAAIAAgQIgIAHIgKAGIgOAGQgFABgLAAQgKAAgIgDgAAMAAQgNAAgJADQgKADgHAGQgGAHAAALQAAANAHAHQAHAHAPAAQALAAAKgFQAKgGAIgHIAAgqg");
	this.shape_8.setTransform(154,35.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag/BrIAAjQIAaAAIAAAQQAKgJALgGQALgGAOAAQAaAAAOAVQAPAVAAAjQAAAlgSAXQgTAWgbAAQgKAAgJgCQgJgDgJgFIAABAgAgShMQgKAEgJAIIAABWQAKAFAHABQAIACAIAAQAUAAALgOQALgPgBgbQABgagJgPQgIgOgTAAQgKAAgKAFg");
	this.shape_9.setTransform(139.9,38.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgfBNQgJgEgGgGQgGgGgEgJQgEgKAAgKQAAgQAHgLQAHgKAOgHQANgGARgCIAlgDIAAgFQAAgJgDgGQgCgFgFgDQgFgDgHgBIgOgBQgJAAgMACQgMADgMAFIgBAAIAAgaIAUgFQANgCANAAQAPAAALACQALADAIAGQAJAGAEAKQAEAKAAAPIAABnIgaAAIAAgQIgIAHIgKAGIgOAGQgFABgLAAQgKAAgIgDgAAMAAQgNAAgJADQgKADgHAGQgGAHAAALQAAANAHAHQAHAHAPAAQALAAAKgFQAKgGAIgHIAAgqg");
	this.shape_10.setTransform(123.9,35.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AggBMQgNgEgJgFIAAgdIABAAIAIAGIAMAHIAOAFQAIACAJAAIAMgBQAHgBADgCQAFgDACgFQACgDAAgHQAAgJgFgFQgFgFgNgDIgLgDIgPgDQgSgFgHgKQgIgKAAgQQAAgUAPgNQAQgNAZAAQAMAAANADQANADAJAFIAAAbIgCAAQgJgHgMgEQgNgFgMAAQgMAAgIAFQgJAGAAALQAAAJAFAEQAFAGAMACIAMAEIAOADQARAEAJAIQAIAKAAARQAAAKgDAJQgEAJgIAGQgIAHgKADQgLAEgOAAQgQAAgNgEg");
	this.shape_11.setTransform(102.2,35.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgeBLQgIgDgHgHQgHgHgEgLQgDgLAAgPIAAhiIAaAAIAABVIAAAVQABAIADAGQAEAGAFACQAFADAKAAQAJAAALgFQALgGAJgHIAAhxIAZAAIAACXIgZAAIAAgRQgNALgKAFQgLAFgMAAQgKAAgJgDg");
	this.shape_12.setTransform(88,36.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgxA7QgSgWAAglQAAglATgWQASgUAeAAQAfAAATAUQASAWAAAlQAAAngSAVQgTAVgfAAQgfgBgSgVgAgdgrQgLAPAAAcQAAAdALAPQAKAOATAAQAUAAALgOQALgOAAgeQAAgcgLgPQgLgPgUAAQgTAAgKAPg");
	this.shape_13.setTransform(72.6,35.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgMBmIAAiXIAZAAIAACXgAgOhLIAAgaIAcAAIAAAag");
	this.shape_14.setTransform(61.9,33.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgPBLQgNgFgJgJQgKgKgFgPQgFgQAAgTQAAgUAFgPQAGgOAJgKQAJgKANgFQAOgGAOAAQANAAALAEQAMADAJAFIAAAdIgBAAIgHgFIgLgHIgMgEQgIgCgGgBQgTAAgMAPQgNAPAAAcQAAAaAMAQQAMAPAUgBQAMAAAMgEQALgGAJgIIABAAIAAAdIgJAFIgLADIgMADIgNABQgPAAgNgFg");
	this.shape_15.setTransform(52.4,35.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgfBNQgJgEgGgGQgGgGgEgJQgEgKAAgKQAAgQAHgLQAHgKAOgHQANgGARgCIAlgDIAAgFQAAgJgDgGQgCgFgFgDQgFgDgHgBIgOgBQgJAAgMACQgMADgMAFIgBAAIAAgaIAUgFQANgCANAAQAPAAALACQALADAIAGQAJAGAEAKQAEAKAAAPIAABnIgaAAIAAgQIgIAHIgKAGIgOAGQgFABgLAAQgKAAgIgDgAAMAAQgNAAgJADQgKADgHAGQgGAHAAALQAAANAHAHQAHAHAPAAQALAAAKgFQAKgGAIgHIAAgqg");
	this.shape_16.setTransform(38,35.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ag/BrIAAjQIAaAAIAAAQQAKgJALgGQAMgGANAAQAaAAAPAVQAOAVAAAjQAAAlgSAXQgTAWgbAAQgLAAgIgCQgJgDgJgFIAABAgAgShMQgKAEgJAIIAABWQAKAFAHABQAIACAJAAQASAAALgOQAMgPgBgbQABgagJgPQgIgOgTAAQgJAAgLAFg");
	this.shape_17.setTransform(23.9,38.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgnBlQgQgFgNgGIAAgiIACAAQANAMARAIQARAGAQABQAVAAAMgKQALgKAAgOQAAgNgGgHQgGgIgNgEIgQgEIgUgFQgKgDgJgEQgIgEgGgGQgHgHgDgJQgEgJAAgMQAAgZAUgQQATgSAdABQARgBAPAEQAPADANAHIAAAhIgCAAQgJgKgQgGQgPgHgQAAQgSAAgMAJQgMAJAAAOQAAANAHAIQAHAHANAEIAUAFIAVAGQAVAGAKAMQAJANAAATQAAAMgFALQgEAMgJAIQgKAJgMAFQgNAFgRgBQgXABgPgFg");
	this.shape_18.setTransform(8.1,33.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol21, new cjs.Rectangle(-2,13.5,269.3,37.8), null);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgdBnQgLgFgHgKQgHgKgFgPQgEgPAAgTQAAgUAGgOQAFgOAIgLQAJgKAMgGQALgGAMAAQAMAAAIADQAJACAJAGIAAhCIAaAAIAADTIgaAAIAAgPIgKAIIgKAGIgLAEIgNABQgNAAgKgFgAgZgNQgMANAAAdQABAaAIAPQAJAOATAAQAJAAAKgEQALgFAIgIIAAhXQgJgFgHgBQgIgCgJAAQgTAAgLAPg");
	this.shape.setTransform(375.5,15.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgMBqIAAjTIAZAAIAADTg");
	this.shape_1.setTransform(365.1,14.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgoBMIAAiXIAbAAIAAAWQANgMAKgFQALgFAJAAIAGAAIAEAAIAAAbIgBAAIgGgBIgIAAQgKAAgLAEQgIAFgJAJIAABrg");
	this.shape_2.setTransform(357.8,17.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgxA7QgSgWAAglQAAglASgWQATgUAeAAQAfAAASAUQATAWAAAlQAAAngTAVQgSAVgfAAQgegBgTgVgAgegrQgLAPABAcQgBAdALAPQALAOATAAQAUAAALgOQAKgOAAgeQAAgcgKgPQgLgPgUAAQgTAAgLAPg");
	this.shape_3.setTransform(344.3,17.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAlBMIglh0IgkB0IgYAAIgniXIAbAAIAbB1IAkh1IAVAAIAlB1IAZh1IAaAAIgnCXg");
	this.shape_4.setTransform(326.3,17.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgtA8QgUgVAAgmQAAgkATgWQAUgWAfAAQAOAAALAEQALAEAIAJQAJAJADAMQAFANAAASIAAANIhpAAQAAAbANAOQAOAOAWAAQAJAAAIgCIAPgFIALgGIAIgGIACAAIAAAcIgLAFIgMAEIgOADIgPABQgjAAgVgUgAApgQQAAgKgDgIQgBgHgFgFQgEgGgIgDQgGgDgLAAQgJAAgHADQgHADgGAGQgGAGgDAHQgDAIgBAJIBQAAIAAAAg");
	this.shape_5.setTransform(299.9,17.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAjBqIAAhXIgBgTQgCgIgDgGQgDgGgFgCQgGgDgKAAQgIAAgKAFQgLAFgJAIIAABxIgaAAIAAjTIAaAAIAABMQALgKAMgFQAKgGAMAAQAWAAANAPQANAPAAAbIAABjg");
	this.shape_6.setTransform(284.7,14.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgPBYQgMgMAAgaIAAhUIgRAAIAAgVIARAAIAAgsIAaAAIAAAsIAuAAIAAAVIguAAIAABIIABASQAAAGABAGQADAEAFADQAFACAJAAQAHAAAGgCIAIgDIABAAIAAAXIgPAEIgNABQgUAAgMgMg");
	this.shape_7.setTransform(272.3,15.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAiBOIAAhVIgBgUQgBgJgCgFQgEgGgFgDQgGgDgJAAQgJAAgKAFQgKAFgKAJIAABwIgaAAIAAiXIAaAAIAAAQQALgKALgFQALgFAMAAQAXgBANAQQAMAOAAAcIAABig");
	this.shape_8.setTransform(251,17.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgMBmIAAiXIAZAAIAACXgAgNhLIAAgaIAcAAIAAAag");
	this.shape_9.setTransform(240,15.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgMBqIAAjTIAZAAIAADTg");
	this.shape_10.setTransform(224.9,14.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgsA8QgVgVAAgmQAAgkAUgWQATgWAfAAQAOAAALAEQALAEAIAJQAIAJAFAMQAEANAAASIAAANIhpAAQAAAbAOAOQANAOAXAAQAIAAAJgCIAOgFIAMgGIAIgGIABAAIAAAcIgLAFIgMAEIgNADIgQABQgjAAgUgUgAApgQQAAgKgDgIQgCgHgEgFQgFgGgHgDQgHgDgKAAQgJAAgHADQgHADgGAGQgGAGgDAHQgDAIgBAJIBQAAIAAAAg");
	this.shape_11.setTransform(214.4,17.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgtA8QgUgVAAgmQAAgkATgWQAUgWAfAAQAOAAALAEQALAEAIAJQAJAJADAMQAFANAAASIAAANIhpAAQAAAbANAOQAOAOAXAAQAIAAAIgCIAPgFIALgGIAIgGIACAAIAAAcIgLAFIgMAEIgOADIgPABQgkAAgUgUgAApgQQgBgKgBgIQgCgHgFgFQgFgGgGgDQgIgDgKAAQgJAAgHADQgIADgFAGQgGAGgDAHQgDAIgBAJIBQAAIAAAAg");
	this.shape_12.setTransform(199.7,17.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAjBqIAAhXIgBgTQgBgIgEgGQgDgGgFgCQgGgDgJAAQgJAAgKAFQgLAFgJAIIAABxIgaAAIAAjTIAaAAIAABMQAMgKALgFQAKgGAMAAQAXAAAMAPQANAPAAAbIAABjg");
	this.shape_13.setTransform(184.6,14.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAlBMIglh0IgkB0IgYAAIgniXIAbAAIAbB1IAkh1IAVAAIAlB1IAZh1IAaAAIgnCXg");
	this.shape_14.setTransform(166.3,17.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAjBOIAAhVIgBgUQgCgJgDgFQgDgGgFgDQgGgDgJAAQgJAAgKAFQgLAFgJAJIAABwIgaAAIAAiXIAaAAIAAAQQAMgKALgFQAKgFAMAAQAWgBANAQQANAOAAAcIAABig");
	this.shape_15.setTransform(139.5,17.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgxA7QgSgWAAglQAAglATgWQATgUAdAAQAfAAATAUQASAWAAAlQAAAngSAVQgTAVgfAAQgfgBgSgVgAgdgrQgLAPAAAcQAAAdALAPQAKAOATAAQAUAAALgOQALgOAAgeQAAgcgLgPQgLgPgUAAQgTAAgKAPg");
	this.shape_16.setTransform(124,17.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgMBmIAAiXIAZAAIAACXgAgOhLIAAgaIAcAAIAAAag");
	this.shape_17.setTransform(113.3,15.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgPBYQgMgMAAgaIAAhUIgRAAIAAgVIARAAIAAgsIAaAAIAAAsIAuAAIAAAVIguAAIAABIIABASQAAAGACAGQACAEAFADQAFACAJAAQAGAAAHgCIAIgDIABAAIAAAXIgPAEIgNABQgUAAgMgMg");
	this.shape_18.setTransform(105.5,15.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgfBNQgJgEgGgGQgGgGgEgJQgEgKAAgKQAAgQAHgLQAHgKAOgHQANgGARgCIAlgDIAAgFQAAgJgDgGQgCgFgFgDQgFgDgHgBIgOgBQgJAAgMACQgMADgMAFIgBAAIAAgaIAUgFQANgCANAAQAPAAALACQALADAIAGQAJAGAEAKQAEAKAAAPIAABnIgaAAIAAgQIgIAHIgKAGIgOAGQgFABgLAAQgKAAgIgDgAAMAAQgNAAgJADQgKADgHAGQgGAHAAALQAAANAHAHQAHAHAPAAQALAAAKgFQAKgGAIgHIAAgqg");
	this.shape_19.setTransform(92.9,17.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgLBMIg5iXIAcAAIApB0IAph0IAbAAIg6CXg");
	this.shape_20.setTransform(79.6,17.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgoBMIAAiXIAaAAIAAAWQAOgMAKgFQALgFAJAAIAGAAIAEAAIAAAbIgBAAIgGgBIgIAAQgKAAgLAEQgJAFgJAJIAABrg");
	this.shape_21.setTransform(68.5,17.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgsA8QgVgVAAgmQAAgkAUgWQATgWAfAAQAOAAALAEQALAEAIAJQAIAJAFAMQAEANAAASIAAANIhpAAQAAAbANAOQAOAOAWAAQAJAAAIgCIAPgFIAMgGIAIgGIABAAIAAAcIgLAFIgMAEIgNADIgQABQgkAAgTgUgAApgQQgBgKgCgIQgCgHgEgFQgEgGgIgDQgGgDgLAAQgJAAgHADQgIADgFAGQgGAGgDAHQgDAIgBAJIBQAAIAAAAg");
	this.shape_22.setTransform(55.3,17.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AggBMQgNgEgJgFIAAgdIABAAIAIAGIAMAHIAOAFQAIACAJAAIAMgBQAHgBADgCQAFgDACgFQACgDAAgHQAAgJgFgFQgFgFgNgDIgLgDIgPgDQgSgFgHgJQgIgLAAgQQAAgUAPgNQAQgNAZAAQAMAAANADQANADAJAFIAAAbIgCAAQgJgHgMgEQgNgFgMAAQgMAAgIAFQgJAGAAALQAAAJAFAEQAFAGAMACIAMAEIAOADQARAEAJAIQAIAKAAARQAAAKgDAJQgEAJgIAGQgIAHgKADQgLAEgOAAQgQAAgNgEg");
	this.shape_23.setTransform(41.9,17.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgUBpQgJgDgIgFIgCAHIgYAAIAAjTIAaAAIAABMQAJgJAMgGQALgGANAAQAbAAAPAVQAOAVAAAjQAAAmgSAXQgSAWgcAAQgLAAgJgDgAgSgWQgKAFgJAHIAABXQAJAEAIACQAHACAKAAQATAAAKgOQAMgOAAgeQgBgbgHgNQgJgOgSAAQgKAAgLAFg");
	this.shape_24.setTransform(28.3,15.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgxA7QgSgWAAglQAAglATgWQATgUAdAAQAfAAATAUQASAWAAAlQAAAngSAVQgTAVgfAAQgfgBgSgVgAgdgrQgLAPAAAcQAAAdALAPQAKAOATAAQAUAAALgOQALgOAAgeQAAgcgLgPQgLgPgUAAQgTAAgKAPg");
	this.shape_25.setTransform(12.4,17.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(2.7,-4.5,383.1,37.8), null);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgPBYQgMgMAAgaIAAhUIgRAAIAAgVIARAAIAAgsIAaAAIAAAsIAuAAIAAAVIguAAIAABIIAAASQABAGACAGQACAEAFADQAFACAJAAQAHAAAFgCIAIgDIACAAIAAAXIgOAEIgOABQgUAAgMgMg");
	this.shape.setTransform(247.9,24.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AggBMQgNgEgJgFIAAgdIABAAIAIAGIAMAHIAOAFQAIACAJAAIAMgBQAHgBADgCQAFgDACgFQACgDAAgHQAAgJgFgFQgFgFgNgDIgLgDIgPgDQgSgFgHgJQgIgLAAgQQAAgUAPgNQAQgNAZAAQAMAAANADQANADAJAFIAAAbIgCAAQgJgHgMgEQgNgFgMAAQgMAAgIAFQgJAGAAALQAAAJAFAEQAFAGAMACIAMAEIAOADQARAEAJAIQAIAKAAARQAAAKgDAJQgEAJgIAGQgIAHgKADQgLAEgOAAQgQAAgNgEg");
	this.shape_1.setTransform(237,26.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgsA8QgVgVAAgmQAAgkATgWQAUgWAfAAQAOAAALAEQALAEAIAJQAIAJAEAMQAFANAAASIAAANIhpAAQAAAbAOAOQANAOAXAAQAIAAAJgCIAOgFIAMgGIAHgGIACAAIAAAcIgLAFIgMAEIgNADIgQABQgjAAgUgUgAApgQQAAgKgCgIQgCgHgFgFQgFgGgGgDQgIgDgKAAQgJAAgHADQgHADgGAGQgGAGgDAHQgDAIgBAJIBQAAIAAAAg");
	this.shape_2.setTransform(223.3,26.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgaBqIgXgFIAAgbIACAAIAHADIAMAEIANACIANABQALABAJgEQAIgDAEgFQAFgGACgIQABgHAAgJIAAgOQgKAJgKAFQgKAEgOAAQgaAAgQgTQgPgUAAgjQAAgTAFgPQAGgPAJgKQAJgKALgFQAMgFAMAAQAMAAAIACQAIADAJAFIACgGIAYAAIAACGQAAAngRASQgQATgjAAQgLAAgLgCgAgZhFQgMAPABAaQgBAZAJANQAJANATAAQAJAAALgEQAKgEAIgHIAAhTQgJgEgIgCQgIgCgJgBQgSAAgLAPg");
	this.shape_3.setTransform(207.7,29.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgoBMIAAiXIAaAAIAAAWQAOgMAKgFQALgFAJAAIAGAAIAEAAIAAAbIgBAAIgGgBIgHAAQgLAAgLAEQgJAFgJAJIAABrg");
	this.shape_4.setTransform(196.4,26.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgfBNQgJgEgGgGQgGgGgEgJQgEgKAAgKQAAgQAHgLQAHgKAOgHQANgGARgCIAlgDIAAgFQAAgJgDgGQgCgFgFgDQgFgDgHgBIgOgBQgJAAgMACQgMADgMAFIgBAAIAAgaIAUgFQANgCANAAQAPAAALACQALADAIAGQAJAGAEAKQAEAKAAAPIAABnIgaAAIAAgQIgIAHIgKAGIgOAGQgFABgLAAQgKAAgIgDgAAMAAQgNAAgJADQgKADgHAGQgGAHAAALQAAANAHAHQAHAHAPAAQALAAAKgFQAKgGAIgHIAAgqg");
	this.shape_5.setTransform(182.7,26.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgMBqIAAjTIAZAAIAADTg");
	this.shape_6.setTransform(172.7,23.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhLBZQgSgQAAgbQAAgMADgJQADgJAGgIQAFgGAHgFIAOgKQgOgJgHgKQgHgKAAgQQAAgJAEgJQAEgIAGgGQAHgGAKgFQALgEAMAAQAXAAANAMQAPAMAAASIgCAPQgCAHgEAGQgFAHgHAGQgGAFgNAFIAvAxQACgMABgNIAAgiIAbAAIAAAOQAAAMgDARQgEAQgHAOIAwAzIgjAAIgcgdQgOARgOAIQgOAIgTAAQgbAAgSgRgAgxACIgIAJQgDAFgCAHQgDAIAAAJQAAATAMAMQALANAUAAQANAAAJgGQALgFAJgMIg+hAgAgxhPQgHAIAAAMIABAKIAEAJIAIAJIANAJQAIgCAFgFQAFgEADgFIAEgKIABgMQAAgNgIgIQgIgGgKAAQgMAAgHAIg");
	this.shape_7.setTransform(152.2,24.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgPBYQgMgMAAgaIAAhUIgRAAIAAgVIARAAIAAgsIAaAAIAAAsIAuAAIAAAVIguAAIAABIIAAASQABAGACAGQACAEAFADQAFACAJAAQAHAAAFgCIAIgDIACAAIAAAXIgOAEIgOABQgUAAgMgMg");
	this.shape_8.setTransform(128.6,24.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AggBMQgNgEgJgFIAAgdIABAAIAIAGIAMAHIAOAFQAIACAJAAIAMgBQAHgBADgCQAFgDACgFQACgDAAgHQAAgJgFgFQgFgFgNgDIgLgDIgPgDQgSgFgHgJQgIgLAAgQQAAgUAPgNQAQgNAZAAQAMAAANADQANADAJAFIAAAbIgCAAQgJgHgMgEQgNgFgMAAQgMAAgIAFQgJAGAAALQAAAJAFAEQAFAGAMACIAMAEIAOADQARAEAJAIQAIAKAAARQAAAKgDAJQgEAJgIAGQgIAHgKADQgLAEgOAAQgQAAgNgEg");
	this.shape_9.setTransform(117.8,26.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgsA8QgVgVAAgmQAAgkATgWQAUgWAfAAQAOAAALAEQALAEAIAJQAIAJAEAMQAFANAAASIAAANIhpAAQAAAbAOAOQANAOAXAAQAIAAAJgCIAOgFIAMgGIAHgGIACAAIAAAcIgLAFIgMAEIgNADIgQABQgjAAgUgUgAApgQQAAgKgCgIQgCgHgFgFQgFgGgGgDQgIgDgKAAQgJAAgHADQgHADgGAGQgGAGgDAHQgDAIgBAJIBQAAIAAAAg");
	this.shape_10.setTransform(104.1,26.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgMBqIAAjTIAZAAIAADTg");
	this.shape_11.setTransform(93.5,23.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgMBqIAAjTIAZAAIAADTg");
	this.shape_12.setTransform(87.1,23.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgfBNQgJgEgGgGQgGgGgEgJQgEgKAAgKQAAgQAHgLQAHgKAOgHQANgGARgCIAlgDIAAgFQAAgJgDgGQgCgFgFgDQgFgDgHgBIgOgBQgJAAgMACQgMADgMAFIgBAAIAAgaIAUgFQANgCANAAQAPAAALACQALADAIAGQAJAGAEAKQAEAKAAAPIAABnIgaAAIAAgQIgIAHIgKAGIgOAGQgFABgLAAQgKAAgIgDgAAMAAQgNAAgJADQgKADgHAGQgGAHAAALQAAANAHAHQAHAHAPAAQALAAAKgFQAKgGAIgHIAAgqg");
	this.shape_13.setTransform(76.1,26.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgPBYQgMgMAAgaIAAhUIgRAAIAAgVIARAAIAAgsIAaAAIAAAsIAuAAIAAAVIguAAIAABIIABASQAAAGABAGQADAEAFADQAFACAJAAQAGAAAHgCIAIgDIABAAIAAAXIgPAEIgNABQgUAAgMgMg");
	this.shape_14.setTransform(64.7,24.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgtA8QgUgVAAgmQAAgkATgWQAUgWAfAAQAOAAALAEQALAEAIAJQAJAJAEAMQAEANAAASIAAANIhpAAQAAAbANAOQAOAOAWAAQAJAAAIgCIAPgFIALgGIAJgGIABAAIAAAcIgLAFIgMAEIgOADIgPABQgjAAgVgUgAApgQQAAgKgDgIQgBgHgFgFQgEgGgIgDQgGgDgLAAQgJAAgHADQgHADgGAGQgGAGgDAHQgDAIgBAJIBQAAIAAAAg");
	this.shape_15.setTransform(43.8,26.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAjBqIAAhXIgBgTQgCgIgDgGQgDgGgFgCQgGgDgKAAQgIAAgKAFQgLAFgJAIIAABxIgaAAIAAjTIAaAAIAABMQALgKAMgFQAKgGAMAAQAWAAANAPQANAPAAAbIAABjg");
	this.shape_16.setTransform(28.7,23.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgPBYQgMgMAAgaIAAhUIgRAAIAAgVIARAAIAAgsIAaAAIAAAsIAuAAIAAAVIguAAIAABIIABASQAAAGABAGQADAEAFADQAFACAJAAQAHAAAFgCIAJgDIABAAIAAAXIgPAEIgNABQgUAAgMgMg");
	this.shape_17.setTransform(16.3,24.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(9.4,4.5,245.1,37.8), null);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgcAtIAYhZIAhAAIglBZg");
	this.shape.setTransform(214.9,43.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgMBnIAAiYIAZAAIAACYgAgOhLIAAgbIAdAAIAAAbg");
	this.shape_1.setTransform(207.9,32.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgfBNQgJgEgGgGQgGgGgEgJQgEgKAAgKQAAgQAHgLQAHgKAOgHQANgGARgCIAlgDIAAgFQAAgJgDgGQgCgFgFgDQgFgDgHgBIgOgBQgJAAgMACQgMADgMAFIgBAAIAAgaIAUgFQANgCANAAQAPAAALACQALADAIAGQAJAGAEAKQAEAKAAAPIAABnIgaAAIAAgQIgIAHIgKAGIgOAGQgFABgLAAQgKAAgIgDgAAMAAQgNAAgJADQgKADgHAGQgGAHAAALQAAANAHAHQAHAHAPAAQALAAAKgFQAKgGAIgHIAAgqg");
	this.shape_2.setTransform(196.9,35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgUBpQgIgDgJgFIgCAHIgYAAIAAjTIAaAAIAABMQAKgJALgGQALgGAOAAQAZAAAPAVQAPAVAAAjQAAAmgSAXQgSAWgbAAQgMAAgJgDgAgRgWQgLAFgJAHIAABXQAKAEAHACQAHACAJAAQAUAAALgOQAKgOABgeQgBgbgHgNQgJgOgSAAQgKAAgKAFg");
	this.shape_3.setTransform(182.8,32.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgeBLQgIgDgHgHQgHgHgEgLQgDgLAAgPIAAhiIAaAAIAABVIAAAVQABAIADAGQAEAGAFACQAFADAKAAQAJAAALgFQALgGAJgHIAAhxIAZAAIAACXIgZAAIAAgRQgNALgKAFQgLAFgMAAQgKAAgJgDg");
	this.shape_4.setTransform(166.7,35.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhPBmIAAjLIAuAAQAdAAAPAFQARAEALAHQAUANALAWQAKAVAAAdQAAAcgLAWQgLAXgTAMQgQAKgPADQgPAEgZAAgAg0BPIAVAAQASAAANgDQANgDALgIQAOgKAHgPQAHgQAAgYQAAgXgIgQQgHgRgQgJQgKgHgMgDQgMgDgSAAIgVAAg");
	this.shape_5.setTransform(150.1,32.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAjBPIAAhXIgCgTQgBgJgDgGQgCgGgGgCQgGgDgKAAQgIAAgKAFQgKAGgKAHIAAByIgaAAIAAiYIAaAAIAAARQAMgLAKgFQALgGAMAAQAWAAAOAPQAMAPAAAdIAABig");
	this.shape_6.setTransform(123.5,34.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgMBnIAAiYIAZAAIAACYgAgNhLIAAgbIAbAAIAAAbg");
	this.shape_7.setTransform(112.5,32.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AA4BmIgSg5IhMAAIgTA5IgbAAIBEjLIAgAAIBGDLgAAfAWIgfhfIgfBfIA+AAg");
	this.shape_8.setTransform(101,32.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgxA7QgSgVAAgmQAAglATgVQASgWAeAAQAfAAATAWQASAVAAAlQAAAngSAVQgTAUgfAAQgfAAgSgVgAgdgrQgLAPAAAcQAAAdALAPQAKAPATAAQAUAAALgPQALgOAAgeQAAgcgLgPQgLgOgUAAQgTAAgKAOg");
	this.shape_9.setTransform(76.2,35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgPBYQgMgMAAgaIAAhUIgRAAIAAgVIARAAIAAgsIAaAAIAAAsIAuAAIAAAVIguAAIAABIIABASQAAAGABAGQADAEAFADQAFACAJAAQAHAAAFgCIAJgDIABAAIAAAXIgOAEIgOABQgUAAgMgMg");
	this.shape_10.setTransform(64.1,33);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgPBYQgMgMAAgaIAAhUIgRAAIAAgVIARAAIAAgsIAaAAIAAAsIAuAAIAAAVIguAAIAABIIABASQAAAGABAGQADAEAFADQAFACAJAAQAHAAAFgCIAJgDIABAAIAAAXIgPAEIgNABQgUAAgMgMg");
	this.shape_11.setTransform(46,33);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAkBMIgkg5IgmA5IgdAAIA1hLIg0hMIAfAAIAkA5IAlg5IAeAAIg1BLIA1BMg");
	this.shape_12.setTransform(34.3,35);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgsA8QgVgVAAgmQAAgkAUgWQATgWAfAAQAOAAALAEQALAEAIAJQAIAJAFAMQAEANAAASIAAANIhpAAQAAAbAOAOQANAOAXAAQAIAAAJgCIAOgFIAMgGIAIgGIABAAIAAAcIgLAFIgMAEIgNADIgQABQgjAAgUgUgAApgQQAAgKgCgIQgDgHgEgFQgFgGgHgDQgHgDgKAAQgJAAgHADQgHADgGAGQgGAGgDAHQgDAIgBAJIBQAAIAAAAg");
	this.shape_13.setTransform(20,35);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AArBmIhZivIAACvIgaAAIAAjLIAmAAIBRCgIAAigIAaAAIAADLg");
	this.shape_14.setTransform(3.3,32.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(-8.1,12.7,229.7,37.8), null);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AggBMQgNgEgJgFIAAgdIABAAIAIAGIAMAHIAOAFQAIACAJAAIAMgBQAHgBADgCQAFgDACgFQACgDAAgHQAAgJgFgFQgFgFgNgDIgLgDIgPgDQgSgFgHgKQgIgKAAgQQAAgUAPgNQAQgNAZAAQAMAAANADQANADAJAFIAAAbIgCAAQgJgHgMgEQgNgFgMAAQgMAAgIAFQgJAGAAALQAAAJAFAEQAFAGAMACIAMAEIAOADQARAEAJAIQAIAKAAARQAAAKgDAJQgEAJgIAGQgIAHgKADQgLAEgOAAQgQAAgNgEg");
	this.shape.setTransform(167.5,15.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgnBMIAAiXIAaAAIAAAWQANgMAKgFQALgFAJAAIAGAAIAFAAIAAAbIgCAAIgGgBIgIAAQgKAAgKAEQgKAFgIAJIAABrg");
	this.shape_1.setTransform(157,15.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgsA8QgVgVAAgmQAAgkAUgWQATgWAfAAQAOAAALAEQALAEAIAJQAIAJAFAMQAEANAAASIAAANIhpAAQAAAbAOAOQANAOAXAAQAIAAAJgCIAOgFIAMgGIAIgGIABAAIAAAcIgLAFIgMAEIgNADIgQABQgjAAgUgUgAApgQQAAgKgDgIQgCgHgEgFQgFgGgGgDQgIgDgKAAQgJAAgHADQgHADgGAGQgGAGgDAHQgDAIgBAJIBQAAIAAAAg");
	this.shape_2.setTransform(143.8,15.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgPBYQgMgMAAgaIAAhUIgRAAIAAgVIARAAIAAgsIAaAAIAAAsIAuAAIAAAVIguAAIAABIIABASQAAAGABAGQADAEAFADQAFACAJAAQAGAAAHgCIAIgDIABAAIAAAXIgPAEIgNABQgUAAgMgMg");
	this.shape_3.setTransform(131.8,13.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgfBNQgJgEgGgGQgGgGgEgJQgEgKAAgKQAAgQAHgLQAHgKAOgHQANgGARgCIAlgDIAAgFQAAgJgDgGQgCgFgFgDQgFgDgHgBIgOgBQgJAAgMACQgMADgMAFIgBAAIAAgaIAUgFQANgCANAAQAPAAALACQALADAIAGQAJAGAEAKQAEAKAAAPIAABnIgaAAIAAgQIgIAHIgKAGIgOAGQgFABgLAAQgKAAgIgDgAAMAAQgNAAgJADQgKADgHAGQgGAHAAALQAAANAHAHQAHAHAPAAQALAAAKgFQAKgGAIgHIAAgqg");
	this.shape_4.setTransform(119.2,15.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAlBMIglh0IgkB0IgYAAIgniXIAbAAIAbB1IAkh1IAVAAIAlB1IAZh1IAaAAIgnCXg");
	this.shape_5.setTransform(102.2,15.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgsA8QgVgVAAgmQAAgkAUgWQATgWAfAAQAOAAALAEQALAEAIAJQAIAJAFAMQAEANAAASIAAANIhpAAQAAAbAOAOQANAOAWAAQAJAAAIgCIAPgFIAMgGIAIgGIABAAIAAAcIgLAFIgMAEIgNADIgQABQgkAAgTgUgAApgQQgBgKgCgIQgCgHgEgFQgEgGgIgDQgGgDgLAAQgJAAgHADQgIADgFAGQgGAGgDAHQgDAIgBAJIBQAAIAAAAg");
	this.shape_6.setTransform(84.6,15.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgeBLQgJgDgGgHQgHgHgEgLQgDgLAAgPIAAhiIAaAAIAABVIABAVQABAIACAGQAEAGAFACQAFADALAAQAIAAALgFQAKgGAJgHIAAhxIAaAAIAACXIgaAAIAAgRQgMALgKAFQgLAFgMAAQgKAAgJgDg");
	this.shape_7.setTransform(69.3,15.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgMBqIAAjTIAZAAIAADTg");
	this.shape_8.setTransform(58.4,12.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgTBpQgJgDgJgFIgCAHIgYAAIAAjTIAaAAIAABMQAKgJALgGQALgGAOAAQAaAAAOAVQAPAVAAAjQAAAmgSAXQgSAWgbAAQgMAAgIgDgAgRgWQgLAFgJAHIAABXQAJAEAIACQAIACAIAAQAUAAALgOQALgOAAgeQAAgbgJgNQgIgOgTAAQgJAAgKAFg");
	this.shape_9.setTransform(48,12.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgPBYQgMgMAAgaIAAhUIgRAAIAAgVIARAAIAAgsIAaAAIAAAsIAuAAIAAAVIguAAIAABIIAAASQABAGACAGQACAEAFADQAFACAJAAQAHAAAFgCIAIgDIACAAIAAAXIgOAEIgOABQgUAAgMgMg");
	this.shape_10.setTransform(26.5,13.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgfBNQgJgEgGgGQgGgGgEgJQgEgKAAgKQAAgQAHgLQAHgKAOgHQANgGARgCIAlgDIAAgFQAAgJgDgGQgCgFgFgDQgFgDgHgBIgOgBQgJAAgMACQgMADgMAFIgBAAIAAgaIAUgFQANgCANAAQAPAAALACQALADAIAGQAJAGAEAKQAEAKAAAPIAABnIgaAAIAAgQIgIAHIgKAGIgOAGQgFABgLAAQgKAAgIgDgAAMAAQgNAAgJADQgKADgHAGQgGAHAAALQAAANAHAHQAHAHAPAAQALAAAKgFQAKgGAIgHIAAgqg");
	this.shape_11.setTransform(13.9,15.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(5,-6.7,170.7,37.8), null);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AggBMQgNgEgJgFIAAgdIABAAIAIAGIAMAHIAOAFQAIACAJAAIAMgBQAHgBADgCQAFgDACgFQACgDAAgHQAAgJgFgFQgFgFgNgDIgLgDIgPgDQgSgFgHgJQgIgLAAgQQAAgUAPgNQAQgNAZAAQAMAAANADQANADAJAFIAAAbIgCAAQgJgHgMgEQgNgFgMAAQgMAAgIAFQgJAGAAALQAAAJAFAEQAFAGAMACIAMAEIAOADQARAEAJAIQAIAKAAARQAAAKgDAJQgEAJgIAGQgIAHgKADQgLAEgOAAQgQAAgNgEg");
	this.shape.setTransform(226.1,24.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AggBMQgNgEgJgFIAAgdIABAAIAIAGIAMAHIAOAFQAIACAJAAIAMgBQAHgBADgCQAFgDACgFQACgDAAgHQAAgJgFgFQgFgFgNgDIgLgDIgPgDQgSgFgHgJQgIgLAAgQQAAgUAPgNQAQgNAZAAQAMAAANADQANADAJAFIAAAbIgCAAQgJgHgMgEQgNgFgMAAQgMAAgIAFQgJAGAAALQAAAJAFAEQAFAGAMACIAMAEIAOADQARAEAJAIQAIAKAAARQAAAKgDAJQgEAJgIAGQgIAHgKADQgLAEgOAAQgQAAgNgEg");
	this.shape_1.setTransform(213.6,24.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgsA8QgVgVAAgmQAAgkATgWQAUgWAfAAQAOAAALAEQALAEAIAJQAIAJAEAMQAFANAAASIAAANIhpAAQAAAbAOAOQANAOAXAAQAIAAAJgCIAOgFIAMgGIAHgGIACAAIAAAcIgLAFIgMAEIgNADIgQABQgjAAgUgUgAApgQQAAgKgCgIQgCgHgFgFQgFgGgGgDQgIgDgKAAQgJAAgHADQgHADgGAGQgGAGgDAHQgDAIgBAJIBQAAIAAAAg");
	this.shape_2.setTransform(199.9,24.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgnBMIAAiXIAaAAIAAAWQANgMAKgFQALgFAJAAIAGAAIAFAAIAAAbIgCAAIgGgBIgIAAQgKAAgKAEQgKAFgIAJIAABrg");
	this.shape_3.setTransform(188.5,24.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgdBnQgLgFgHgKQgIgKgEgPQgEgPAAgTQAAgUAGgOQAFgOAIgLQAJgKAMgGQALgGAMAAQAMAAAIADQAJACAJAGIAAhCIAaAAIAADTIgaAAIAAgPIgKAIIgKAGIgLAEIgNABQgNAAgKgFgAgZgNQgMANABAdQAAAaAIAPQAJAOATAAQAJAAAKgEQALgFAIgIIAAhXQgJgFgHgBQgIgCgJAAQgTAAgLAPg");
	this.shape_4.setTransform(174.3,21.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgfBNQgJgEgGgGQgGgGgEgJQgEgKAAgKQAAgQAHgLQAHgKAOgHQANgGARgCIAlgDIAAgFQAAgJgDgGQgCgFgFgDQgFgDgHgBIgOgBQgJAAgMACQgMADgMAFIgBAAIAAgaIAUgFQANgCANAAQAPAAALACQALADAIAGQAJAGAEAKQAEAKAAAPIAABnIgaAAIAAgQIgIAHIgKAGIgOAGQgFABgLAAQgKAAgIgDgAAMAAQgNAAgJADQgKADgHAGQgGAHAAALQAAANAHAHQAHAHAPAAQALAAAKgFQAKgGAIgHIAAgqg");
	this.shape_5.setTransform(159.3,24.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgPBYQgMgMAAgaIAAhUIgRAAIAAgVIARAAIAAgsIAaAAIAAAsIAuAAIAAAVIguAAIAABIIAAASQABAGACAGQACAEAFADQAFACAJAAQAGAAAHgCIAHgDIACAAIAAAXIgPAEIgNABQgUAAgMgMg");
	this.shape_6.setTransform(139.2,22.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAjBOIAAhVIgBgUQgBgJgEgFQgDgGgFgDQgGgDgJAAQgJAAgKAFQgKAFgKAJIAABwIgaAAIAAiXIAaAAIAAAQQAMgKALgFQAKgFAMAAQAWgBANAQQANAOAAAcIAABig");
	this.shape_7.setTransform(126.6,24.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgxA7QgSgWAAglQAAglASgWQATgUAeAAQAfAAASAUQATAWAAAlQAAAngTAVQgSAVgfAAQgegBgTgVgAgegrQgLAPABAcQgBAdALAPQALAOATAAQAUAAALgOQAKgOAAgeQAAgcgKgPQgLgPgUAAQgTAAgLAPg");
	this.shape_8.setTransform(111.2,24.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgnBMIAAiXIAZAAIAAAWQAOgMAKgFQAKgFAKAAIAGAAIAFAAIAAAbIgCAAIgGgBIgHAAQgLAAgKAEQgJAFgKAJIAABrg");
	this.shape_9.setTransform(99.5,24.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgdBrIAAiDIgSAAIAAgUIASAAIAAgGQAAgbANgOQAOgPAXAAIAOAAIANACIAAAYIgCAAIgJgCIgMgBQgQAAgHAGQgHAIABATIAAAGIApAAIAAAUIgpAAIAACDg");
	this.shape_10.setTransform(90,21.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgnBMIAAiXIAaAAIAAAWQANgMAKgFQALgFAJAAIAGAAIAFAAIAAAbIgCAAIgGgBIgIAAQgKAAgKAEQgKAFgIAJIAABrg");
	this.shape_11.setTransform(80.7,24.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgtA8QgUgVAAgmQAAgkATgWQAUgWAfAAQAOAAALAEQALAEAIAJQAJAJADAMQAFANAAASIAAANIhpAAQAAAbAOAOQANAOAXAAQAIAAAJgCIAOgFIALgGIAIgGIACAAIAAAcIgLAFIgMAEIgOADIgPABQgjAAgVgUgAApgQQAAgKgCgIQgCgHgFgFQgFgGgGgDQgIgDgKAAQgJAAgHADQgIADgFAGQgGAGgDAHQgDAIgBAJIBQAAIAAAAg");
	this.shape_12.setTransform(67.5,24.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgPBYQgMgMAAgaIAAhUIgRAAIAAgVIARAAIAAgsIAaAAIAAAsIAuAAIAAAVIguAAIAABIIABASQAAAGACAGQACAEAFADQAFACAJAAQAGAAAHgCIAIgDIABAAIAAAXIgPAEIgNABQgUAAgMgMg");
	this.shape_13.setTransform(55.6,22.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgfBNQgJgEgGgGQgGgGgEgJQgEgKAAgKQAAgQAHgLQAHgKAOgHQANgGARgCIAlgDIAAgFQAAgJgDgGQgCgFgFgDQgFgDgHgBIgOgBQgJAAgMACQgMADgMAFIgBAAIAAgaIAUgFQANgCANAAQAPAAALACQALADAIAGQAJAGAEAKQAEAKAAAPIAABnIgaAAIAAgQIgIAHIgKAGIgOAGQgFABgLAAQgKAAgIgDgAAMAAQgNAAgJADQgKADgHAGQgGAHAAALQAAANAHAHQAHAHAPAAQALAAAKgFQAKgGAIgHIAAgqg");
	this.shape_14.setTransform(43,24.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AApBmIgpioIgoCoIgeAAIg0jLIAcAAIApCoIApioIAaAAIApCqIApiqIAbAAIgzDLg");
	this.shape_15.setTransform(24.5,22.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(5.5,2.3,233.1,37.8), null);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgbBqIgVgFIAAgbIABAAIAIADIALAEIAOACIAMABQAMABAHgEQAJgDAFgFQAEgGABgIQACgHABgJIAAgOQgLAJgKAFQgKAEgOAAQgaAAgPgTQgQgUAAgjQAAgTAGgPQAEgPAKgKQAJgKALgFQAMgFALAAQAMAAAJACQAJADAJAFIABgGIAYAAIAACGQAAAngRASQgRATghAAQgMAAgMgCgAgZhFQgMAPAAAaQAAAZAJANQAIANAUAAQAJAAAKgEQALgEAJgHIAAhTQgKgEgIgCQgJgCgHgBQgTAAgLAPg");
	this.shape.setTransform(126.3,34.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAjBOIAAhVIgBgUQgBgJgEgFQgDgGgFgDQgGgDgJAAQgJAAgKAFQgKAFgKAJIAABwIgaAAIAAiXIAaAAIAAAQQAMgKALgFQAKgFAMAAQAWgBANAQQANAOAAAcIAABig");
	this.shape_1.setTransform(111.3,31.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgMBmIAAiXIAZAAIAACXgAgOhLIAAgaIAdAAIAAAag");
	this.shape_2.setTransform(100.3,28.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAiBOIAAhVIgBgUQAAgJgDgFQgDgGgGgDQgGgDgJAAQgJAAgKAFQgLAFgJAJIAABwIgaAAIAAiXIAaAAIAAAQQALgKALgFQALgFAMAAQAXgBANAQQAMAOAAAcIAABig");
	this.shape_3.setTransform(89.4,31.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAjBOIAAhVIgBgUQgCgJgDgFQgDgGgFgDQgGgDgJAAQgJAAgKAFQgLAFgJAJIAABwIgaAAIAAiXIAaAAIAAAQQAMgKALgFQAKgFAMAAQAWgBANAQQANAOAAAcIAABig");
	this.shape_4.setTransform(73.8,31.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgeBLQgJgDgGgHQgHgHgEgLQgDgLAAgPIAAhiIAaAAIAABVIABAVQABAIACAGQAEAGAFACQAFADALAAQAIAAALgFQAKgGAJgHIAAhxIAaAAIAACXIgaAAIAAgRQgMALgKAFQgLAFgMAAQgKAAgJgDg");
	this.shape_5.setTransform(58.1,31.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgPBYQgMgMAAgaIAAhUIgRAAIAAgVIARAAIAAgsIAaAAIAAAsIAuAAIAAAVIguAAIAABIIABASQAAAGABAGQADAEAFADQAFACAJAAQAGAAAHgCIAIgDIABAAIAAAXIgPAEIgNABQgUAAgMgMg");
	this.shape_6.setTransform(45.8,29.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AggBMQgNgEgJgFIAAgdIABAAIAIAGIAMAHIAOAFQAIACAJAAIAMgBQAHgBADgCQAFgDACgFQACgDAAgHQAAgJgFgFQgFgFgNgDIgLgDIgPgDQgSgFgHgJQgIgLAAgQQAAgUAPgNQAQgNAZAAQAMAAANADQANADAJAFIAAAbIgCAAQgJgHgMgEQgNgFgMAAQgMAAgIAFQgJAGAAALQAAAJAFAEQAFAGAMACIAMAEIAOADQARAEAJAIQAIAKAAARQAAAKgDAJQgEAJgIAGQgIAHgKADQgLAEgOAAQgQAAgNgEg");
	this.shape_7.setTransform(34.9,31.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AA4BmIgSg5IhMAAIgTA5IgbAAIBEjLIAhAAIBFDLgAAfAWIgfhfIgfBfIA+AAg");
	this.shape_8.setTransform(11.4,28.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(-3.4,9,144.4,37.8), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AAiBOIAAhVIgBgUQgBgJgCgFQgDgGgGgDQgGgDgKAAQgIAAgKAFQgKAFgKAJIAABwIgaAAIAAiXIAaAAIAAAQQAMgKAKgFQALgFAMAAQAXgBANAQQAMAOAAAcIAABig");
	this.shape.setTransform(294.9,22.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgfBNQgJgEgGgGQgGgGgEgJQgEgKAAgKQAAgQAHgLQAHgKAOgHQANgGARgCIAlgDIAAgFQAAgJgDgGQgCgFgFgDQgFgDgHgBIgOgBQgJAAgMACQgMADgMAFIgBAAIAAgaIAUgFQANgCANAAQAPAAALACQALADAIAGQAJAGAEAKQAEAKAAAPIAABnIgaAAIAAgQIgIAHIgKAGIgOAGQgFABgLAAQgKAAgIgDgAAMAAQgNAAgJADQgKADgHAGQgGAHAAALQAAANAHAHQAHAHAPAAQALAAAKgFQAKgGAIgHIAAgqg");
	this.shape_1.setTransform(279.2,22.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgMBqIAAjTIAZAAIAADTg");
	this.shape_2.setTransform(269.2,19.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag/BrIAAjQIAaAAIAAAQQAKgJALgGQAMgGAMAAQAbAAAPAVQAOAVAAAjQAAAlgSAXQgTAWgbAAQgLAAgIgCQgJgDgJgFIAABAgAgShMQgKAEgJAIIAABWQAKAFAHABQAIACAJAAQASAAALgOQAMgPgBgbQABgagJgPQgIgOgTAAQgJAAgLAFg");
	this.shape_3.setTransform(258.8,25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgPBYQgMgMAAgaIAAhUIgRAAIAAgVIARAAIAAgsIAaAAIAAAsIAuAAIAAAVIguAAIAABIIAAASQABAGACAGQACAEAFADQAFACAJAAQAGAAAHgCIAHgDIACAAIAAAXIgOAEIgOABQgUAAgMgMg");
	this.shape_4.setTransform(237.3,20.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAiBOIAAhVIAAgUQgBgJgEgFQgDgGgFgDQgGgDgJAAQgJAAgKAFQgKAFgKAJIAABwIgaAAIAAiXIAaAAIAAAQQAMgKALgFQAKgFAMAAQAXgBAMAQQANAOAAAcIAABig");
	this.shape_5.setTransform(224.7,22.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgsA8QgVgVAAgmQAAgkAUgWQATgWAfAAQAOAAALAEQALAEAIAJQAIAJAFAMQAEANAAASIAAANIhpAAQAAAbAOAOQANAOAWAAQAJAAAJgCIAOgFIAMgGIAIgGIABAAIAAAcIgLAFIgMAEIgNADIgQABQgkAAgTgUgAApgQQgBgKgCgIQgCgHgEgFQgEgGgIgDQgHgDgKAAQgJAAgHADQgHADgGAGQgGAGgDAHQgDAIgBAJIBQAAIAAAAg");
	this.shape_6.setTransform(209.6,22.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABKBOIAAhXIgBgTQAAgKgEgEQgCgGgFgCQgFgDgIAAQgJAAgJAFQgJAFgKAJIABAFIAAAIIAABjIgZAAIAAhXIgBgTQgBgKgCgEQgCgGgGgCQgFgDgJAAQgIAAgJAFQgJAFgJAJIAABwIgZAAIAAiXIAZAAIAAAQQAKgKALgFQAJgFAMAAQANgBALAHQAKAGAFAOQAMgNALgHQALgGANAAQAJAAAJACQAIADAGAHQAGAIADAKQAEALAAAPIAABjg");
	this.shape_7.setTransform(190.5,22.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgoBoIAcg/Ig4iQIAcAAIApBvIAphvIAbAAIhRDPg");
	this.shape_8.setTransform(171.7,25.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgfBNQgJgEgGgGQgGgGgEgJQgEgKAAgKQAAgQAHgLQAHgKAOgHQANgGARgCIAlgDIAAgFQAAgJgDgGQgCgFgFgDQgFgDgHgBIgOgBQgJAAgMACQgMADgMAFIgBAAIAAgaIAUgFQANgCANAAQAPAAALACQALADAIAGQAJAGAEAKQAEAKAAAPIAABnIgaAAIAAgQIgIAHIgKAGIgOAGQgFABgLAAQgKAAgIgDgAAMAAQgNAAgJADQgKADgHAGQgGAHAAALQAAANAHAHQAHAHAPAAQALAAAKgFQAKgGAIgHIAAgqg");
	this.shape_9.setTransform(157.1,22.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag/BrIAAjQIAaAAIAAAQQAKgJALgGQALgGAOAAQAaAAAOAVQAPAVAAAjQAAAlgSAXQgTAWgbAAQgKAAgJgCQgJgDgJgFIAABAgAgShMQgKAEgJAIIAABWQAKAFAHABQAIACAIAAQAUAAALgOQALgPgBgbQABgagJgPQgIgOgTAAQgKAAgKAFg");
	this.shape_10.setTransform(143.1,25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAnBbQgNgPAAgfQAAgeANgPQAMgOAXAAQAYAAAMAOQANAPAAAeQAAAfgNAPQgMAPgYAAQgXAAgMgPgAA3AOQgEALAAAUQAAAVAEALQAFALAOAAQAPAAAEgLQAFgLAAgVQAAgUgFgLQgEgLgPAAQgOAAgFALgAhABmIBqjLIAXAAIhqDLgAhtAAQgNgOAAgeQAAgfANgPQAMgPAXAAQAYAAAMAPQANAPAAAfQAAAegNAOQgMAPgYAAQgXAAgMgPgAhdhMQgEALAAAVQAAAUAEALQAFALAOAAQAPAAAEgLQAFgLAAgUQAAgVgFgLQgEgKgPAAQgOAAgFAKg");
	this.shape_11.setTransform(112.4,19.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgjBlQgOgDgKgGIAAgcIACAAIAJAFIAMAFIAPAFQAHABAIAAQAHAAAIgDQAIgDAGgGQAFgGADgIQACgIAAgLQAAgLgDgHQgDgHgFgEQgHgGgIgBQgIgCgKAAIgWACIgSACIAAhoIBuAAIAAAYIhUAAIAAA2IAKgBIAJAAQAOAAALADQALACAKAIQAKAIAGAKQAEALAAATQAAAPgEAMQgFANgIAJQgJAJgMAGQgOAFgOAAQgPAAgOgDg");
	this.shape_12.setTransform(91.3,20);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgzBmIBcizIhpAAIAAgYICBAAIAAAfIhXCsg");
	this.shape_13.setTransform(76.1,19.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgyCBIBOkBIAXAAIhOEBg");
	this.shape_14.setTransform(62.4,21.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAnBbQgNgPAAgfQAAgeANgPQAMgOAXAAQAYAAAMAOQANAPAAAeQAAAfgNAPQgMAPgYAAQgXAAgMgPgAA3AOQgEALAAAUQAAAVAEALQAFALAOAAQAPAAAEgLQAFgLAAgVQAAgUgFgLQgEgLgPAAQgOAAgFALgAhABmIBqjLIAXAAIhqDLgAhtAAQgNgOAAgeQAAgfANgPQAMgPAXAAQAYAAAMAPQANAPAAAfQAAAegNAOQgMAPgYAAQgXAAgMgPgAhdhMQgEALAAAVQAAAUAEALQAFALAOAAQAPAAAEgLQAFgLAAgUQAAgVgFgLQgEgKgPAAQgOAAgFAKg");
	this.shape_15.setTransform(43.9,19.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgjBlQgOgDgKgGIAAgcIACAAIAJAFIAMAFIAPAFQAHABAIAAQAIAAAHgDQAIgDAGgGQAEgGAEgIQACgIAAgLQAAgLgDgHQgDgHgFgEQgHgGgIgBQgIgCgKAAIgXACIgRACIAAhoIBvAAIAAAYIhVAAIAAA2IAKgBIAIAAQAPAAALADQALACAKAIQAKAIAFAKQAGALgBATQAAAPgEAMQgFANgIAJQgJAJgMAGQgNAFgPAAQgPAAgOgDg");
	this.shape_16.setTransform(22.8,20);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ag+BoIAAgcIAagZIAXgZQAWgZAJgOQAIgQAAgRQAAgIgCgHQgDgGgFgEQgEgEgHgCQgFgCgHAAQgIAAgHACIgOAEIgLAGIgJAFIgCAAIAAgdQAJgDAPgFQAPgEAOAAQAbAAAQAPQAQAQAAAZQAAAMgCAKQgDAKgFAJQgFAIgHAIIgPASIgcAdIgZAXIBjAAIAAAYg");
	this.shape_17.setTransform(7.5,19.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(-2.2,0,307.1,37.8), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgaBqIgXgFIAAgbIACAAIAHADIAMAEIAOACIAMABQALABAJgEQAIgDAEgFQAFgGACgIQACgHAAgJIAAgOQgLAJgKAFQgKAEgOAAQgaAAgQgTQgPgUAAgjQAAgTAFgPQAGgPAJgKQAJgKALgFQAMgFAMAAQAMAAAIACQAIADAKAFIABgGIAYAAIAACGQAAAngRASQgQATgjAAQgLAAgLgCgAgZhFQgMAPAAAaQAAAZAJANQAJANATAAQAJAAALgEQAKgEAJgHIAAhTQgKgEgIgCQgIgCgJgBQgSAAgLAPg");
	this.shape.setTransform(257.5,25.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAiBOIAAhVIgBgUQgBgJgCgFQgDgGgGgDQgGgDgKAAQgIAAgKAFQgKAFgKAJIAABwIgaAAIAAiXIAaAAIAAAQQALgKALgFQALgFAMAAQAXgBANAQQAMAOAAAcIAABig");
	this.shape_1.setTransform(242.6,22.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgMBmIAAiXIAZAAIAACXgAgNhLIAAgaIAcAAIAAAag");
	this.shape_2.setTransform(231.6,19.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgLBMIg5iXIAcAAIApB0IAph0IAbAAIg6CXg");
	this.shape_3.setTransform(221.4,22.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgMBmIAAiXIAZAAIAACXgAgNhLIAAgaIAcAAIAAAag");
	this.shape_4.setTransform(211.3,19.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgMBqIAAjTIAZAAIAADTg");
	this.shape_5.setTransform(204.9,19.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgdBnQgLgFgHgKQgIgKgEgPQgEgPAAgTQAAgUAFgOQAGgOAJgLQAIgKAMgGQALgGANAAQALAAAJADQAIACAKAGIAAhCIAZAAIAADTIgZAAIAAgPIgLAIIgKAGIgMAEIgMABQgMAAgLgFgAgZgNQgMANABAdQgBAaAJAPQAJAOATAAQAJAAAKgEQAKgFAKgIIAAhXQgKgFgIgBQgHgCgJAAQgTAAgLAPg");
	this.shape_6.setTransform(184.7,19.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAiBOIAAhVIgBgUQgBgJgCgFQgDgGgGgDQgGgDgKAAQgIAAgKAFQgKAFgKAJIAABwIgaAAIAAiXIAaAAIAAAQQAMgKAKgFQALgFAMAAQAXgBANAQQAMAOAAAcIAABig");
	this.shape_7.setTransform(169.8,22.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgfBNQgJgEgGgGQgGgGgEgJQgEgKAAgKQAAgQAHgLQAHgKAOgHQANgGARgCIAlgDIAAgFQAAgJgDgGQgCgFgFgDQgFgDgHgBIgOgBQgJAAgMACQgMADgMAFIgBAAIAAgaIAUgFQANgCANAAQAPAAALACQALADAIAGQAJAGAEAKQAEAKAAAPIAABnIgaAAIAAgQIgIAHIgKAGIgOAGQgFABgLAAQgKAAgIgDgAAMAAQgNAAgJADQgKADgHAGQgGAHAAALQAAANAHAHQAHAHAPAAQALAAAKgFQAKgGAIgHIAAgqg");
	this.shape_8.setTransform(154.1,22.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgMBqIAAjTIAZAAIAADTg");
	this.shape_9.setTransform(144.1,19.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AggBMQgNgEgJgFIAAgdIABAAIAIAGIAMAHIAOAFQAIACAJAAIAMgBQAHgBADgCQAFgDACgFQACgDAAgHQAAgJgFgFQgFgFgNgDIgLgDIgPgDQgSgFgHgJQgIgLAAgQQAAgUAPgNQAQgNAZAAQAMAAANADQANADAJAFIAAAbIgCAAQgJgHgMgEQgNgFgMAAQgMAAgIAFQgJAGAAALQAAAJAFAEQAFAGAMACIAMAEIAOADQARAEAJAIQAIAKAAARQAAAKgDAJQgEAJgIAGQgIAHgKADQgLAEgOAAQgQAAgNgEg");
	this.shape_10.setTransform(134.9,22.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgMBmIAAiXIAZAAIAACXgAgOhLIAAgaIAcAAIAAAag");
	this.shape_11.setTransform(125.3,19.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgsA8QgVgVAAgmQAAgkAUgWQATgWAfAAQAOAAALAEQALAEAIAJQAIAJAFAMQAEANAAASIAAANIhpAAQAAAbAOAOQANAOAWAAQAJAAAJgCIAOgFIAMgGIAIgGIABAAIAAAcIgLAFIgMAEIgNADIgQABQgkAAgTgUgAApgQQgBgKgCgIQgCgHgEgFQgEgGgIgDQgHgDgKAAQgJAAgHADQgHADgGAGQgGAGgDAHQgDAIgBAJIBQAAIAAAAg");
	this.shape_12.setTransform(106.1,22.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgLBMIg5iXIAcAAIApB0IAph0IAbAAIg6CXg");
	this.shape_13.setTransform(91.9,22.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgMBmIAAiXIAZAAIAACXgAgNhLIAAgaIAcAAIAAAag");
	this.shape_14.setTransform(81.8,19.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AggBMQgNgEgJgFIAAgdIABAAIAIAGIAMAHIAOAFQAIACAJAAIAMgBQAHgBADgCQAFgDACgFQACgDAAgHQAAgJgFgFQgFgFgNgDIgLgDIgPgDQgSgFgHgJQgIgLAAgQQAAgUAPgNQAQgNAZAAQAMAAANADQANADAJAFIAAAbIgCAAQgJgHgMgEQgNgFgMAAQgMAAgIAFQgJAGAAALQAAAJAFAEQAFAGAMACIAMAEIAOADQARAEAJAIQAIAKAAARQAAAKgDAJQgEAJgIAGQgIAHgKADQgLAEgOAAQgQAAgNgEg");
	this.shape_15.setTransform(72.6,22.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgdBLQgKgDgGgHQgHgHgEgLQgDgLAAgPIAAhiIAZAAIAABVIACAVQABAIACAGQAEAGAFACQAGADAKAAQAIAAALgFQAKgGAJgHIAAhxIAaAAIAACXIgaAAIAAgRQgMALgKAFQgLAFgMAAQgKAAgIgDg");
	this.shape_16.setTransform(58.3,22.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgMBqIAAjTIAZAAIAADTg");
	this.shape_17.setTransform(47.4,19.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgPBLQgNgFgJgJQgKgKgFgPQgFgQAAgTQAAgUAFgPQAGgOAJgKQAJgKANgFQAOgGAOAAQANAAALAEQAMADAJAFIAAAdIgBAAIgHgFIgLgHIgMgEQgIgCgGgBQgTAAgMAPQgNAPAAAcQAAAaAMAQQAMAPAUgBQAMAAAMgEQALgGAJgIIABAAIAAAdIgJAFIgLADIgMADIgNABQgPAAgNgFg");
	this.shape_18.setTransform(37.9,22.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAkBMIgkg5IgmA5IgdAAIA1hLIg0hMIAfAAIAkA5IAmg5IAdAAIg1BLIA1BMg");
	this.shape_19.setTransform(24.7,22.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ag/BmIAAjLIB/AAIAAAYIhkAAIAAA4IBdAAIAAAXIhdAAIAABMIBkAAIAAAYg");
	this.shape_20.setTransform(10.4,19.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,268,37.8), null);


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


(lib.Symbol35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol41();
	this.instance.parent = this;
	this.instance.setTransform(129.5,39,1,1,0,0,0,129.5,39);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.97,scaleY:0.97,x:129.6,y:39.1},8,cjs.Ease.get(-1)).to({regX:129.6,regY:39.1,scaleX:0.94,scaleY:0.94,y:39.2},6,cjs.Ease.get(1)).to({scaleX:0.97,scaleY:0.97,y:39.1},8,cjs.Ease.get(-1)).to({regX:129.5,regY:39,scaleX:1,scaleY:1,x:129.5,y:39},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,259,78);


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
p.nominalBounds = new cjs.Rectangle(2.2,30.6,273.3,37.8);


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
p.nominalBounds = new cjs.Rectangle(-11.5,18,334,37.8);


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
p.nominalBounds = new cjs.Rectangle(-2,27,269.3,37.8);


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
p.nominalBounds = new cjs.Rectangle(79.4,26.1,229.7,37.8);


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
p.nominalBounds = new cjs.Rectangle(49.8,35.9,144.4,37.8);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol5();
	this.instance.parent = this;
	this.instance.setTransform(139.5,20,1,1,0,0,0,139.5,20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,268,37.8), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_599 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(599).call(this.frame_599).wait(1));

	// Symbol 14
	this.instance = new lib.Symbol14();
	this.instance.parent = this;
	this.instance.setTransform(1179.5,56.4,1,1,0,0,0,123,52.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(518).to({_off:false},0).to({alpha:1},14,cjs.Ease.get(1)).wait(68));

	// Symbol 12
	this.instance_1 = new lib.Symbol12();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1179.4,56.1,1,1,0,0,0,138.8,39);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(444).to({_off:false},0).to({alpha:1},14,cjs.Ease.get(1)).wait(45).to({alpha:0},15,cjs.Ease.get(-1)).to({_off:true},1).wait(81));

	// Symbol 11
	this.instance_2 = new lib.Symbol11();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1179.5,55.3,1,1,0,0,0,155.5,39);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(370).to({_off:false},0).to({alpha:1},14,cjs.Ease.get(1)).wait(45).to({alpha:0},15,cjs.Ease.get(-1)).to({_off:true},1).wait(155));

	// Symbol 10
	this.instance_3 = new lib.Symbol10();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1179.5,69.8,1,1,0,0,0,145.2,20);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(296).to({_off:false},0).to({y:56.3,alpha:1},14,cjs.Ease.get(1)).wait(45).to({y:42.9,alpha:0},15,cjs.Ease.get(-1)).to({_off:true},75).wait(155));

	// Symbol 9
	this.instance_4 = new lib.Symbol9();
	this.instance_4.parent = this;
	this.instance_4.setTransform(1179.5,54.3,1,1,0,0,0,132.7,58);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(222).to({_off:false},0).to({alpha:1},14,cjs.Ease.get(1)).wait(45).to({alpha:0},15,cjs.Ease.get(-1)).to({_off:true},1).wait(303));

	// Symbol 8
	this.instance_5 = new lib.Symbol8();
	this.instance_5.parent = this;
	this.instance_5.setTransform(1179.4,54.5,1,1,0,0,0,194.2,58);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(148).to({_off:false},0).to({alpha:1},14,cjs.Ease.get(1)).wait(45).to({alpha:0},15,cjs.Ease.get(-1)).to({_off:true},1).wait(377));

	// Symbol 7
	this.instance_6 = new lib.Symbol7();
	this.instance_6.parent = this;
	this.instance_6.setTransform(1179.4,54.3,1,1,0,0,0,122,58);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(74).to({_off:false},0).to({alpha:1},14,cjs.Ease.get(1)).wait(45).to({alpha:0},15,cjs.Ease.get(-1)).to({_off:true},1).wait(451));

	// Symbol 6
	this.instance_7 = new lib.Symbol6();
	this.instance_7.parent = this;
	this.instance_7.setTransform(1179.4,56.3,1,1,0,0,0,139.5,20);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({alpha:1},14,cjs.Ease.get(1)).wait(45).to({alpha:0},15,cjs.Ease.get(-1)).to({_off:true},1).wait(525));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().dr(-96.95,-35.25,193.9,70.5);
	this.shape.setTransform(1175.6,73.2,2.352,2.017);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(600));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(947.6,2.2,456.2,142.2);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_599 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(599).call(this.frame_599).wait(1));

	// Layer 1
	this.instance = new lib.Symbol42();
	this.instance.parent = this;
	this.instance.setTransform(-67.7,28,1,1,0,0,0,97,35.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:91},14,cjs.Ease.get(1)).wait(445).to({x:-76.5},10,cjs.Ease.get(-1)).wait(131));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-164.7,-7.2,193.9,70.5);


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
p.nominalBounds = new cjs.Rectangle(17.2,0,218.4,65.8);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_599 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(599).call(this.frame_599).wait(1));

	// Symbol 40
	this.instance = new lib.Symbol40();
	this.instance.parent = this;
	this.instance.setTransform(1.3,-27.3,1,1,0,0,0,126.4,62.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(524).to({_off:false},0).wait(76));

	// Symbol 37
	this.instance_1 = new lib.Symbol37();
	this.instance_1.parent = this;
	this.instance_1.setTransform(100.1,-35.8,0.844,0.844,0,0,0,117,84.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(459).to({_off:false},0).wait(55).to({alpha:0},10).to({_off:true},1).wait(75));

	// Symbol 34
	this.instance_2 = new lib.Symbol34();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0,1,1,0,0,0,151,126);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(370).to({_off:false},0).to({scaleX:1.02,scaleY:1.02,x:0.2,y:0.1,alpha:1},14,cjs.Ease.get(-1)).to({regX:150.9,scaleX:1.12,scaleY:1.12,x:0,y:1.1},60).to({regX:151,scaleX:1.15,scaleY:1.15,y:1.3,alpha:0},15).to({_off:true},1).wait(140));

	// Symbol 33
	this.instance_3 = new lib.Symbol33();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,0,1,1,0,0,0,151,126);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(296).to({_off:false},0).to({scaleX:1.02,scaleY:1.02,x:0.2,y:0.1,alpha:1},14,cjs.Ease.get(-1)).to({scaleX:1.15,scaleY:1.15,x:0,y:1.3},74).to({_off:true},1).wait(215));

	// Symbol 32
	this.instance_4 = new lib.Symbol32();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,0,1,1,0,0,0,151,126);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(222).to({_off:false},0).to({scaleX:1.02,scaleY:1.02,x:0.2,y:0.1,alpha:1},14,cjs.Ease.get(-1)).to({scaleX:1.15,scaleY:1.15,x:0,y:1.3},74).to({_off:true},1).wait(289));

	// Symbol 31
	this.instance_5 = new lib.Symbol31();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,0,1,1,0,0,0,150,91);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(148).to({_off:false},0).to({regX:149.9,scaleX:1.02,scaleY:1.02,x:0.1,y:0.1,alpha:1},14,cjs.Ease.get(-1)).to({regX:150,scaleX:1.15,scaleY:1.15,x:0,y:1.2},74).to({_off:true},1).wait(363));

	// Symbol 30
	this.instance_6 = new lib.Symbol30();
	this.instance_6.parent = this;
	this.instance_6.setTransform(0,0,1,1,0,0,0,151,126);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(74).to({_off:false},0).to({scaleX:1.02,scaleY:1.02,x:0.2,y:0.1,alpha:1},14,cjs.Ease.get(-1)).to({scaleX:1.15,scaleY:1.15,x:0,y:1.3},74).to({_off:true},1).wait(437));

	// Symbol 29
	this.instance_7 = new lib.Symbol29();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0,0,1,1,0,0,0,151,126);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleX:1.02,scaleY:1.02,x:0.2,y:0.1,alpha:1},14,cjs.Ease.get(-1)).to({scaleX:1.15,scaleY:1.15,x:0,y:1.3},74).to({_off:true},1).wait(511));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-151,-126,302,252);


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
	this.instance_1.setTransform(-192.7,456.3,0.67,0.67,0,0,0,664.8,424.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// back
	this.instance_2 = new lib.Symbol28();
	this.instance_2.parent = this;
	this.instance_2.setTransform(450.5,339.5,1,1,0,0,0,299.5,215.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.7,116,457,277.6);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
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