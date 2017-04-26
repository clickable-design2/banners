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
	this.shape.graphics.f("#FFFFFF").s().p("Ag1B+IAAj7IBrAAIAAAkIhEAAIAABGIA2AAIAAAjIg2AAIAABKIBEAAIAAAkg");
	this.shape.setTransform(204.6,37.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAVB+IgBgEIgBgGIgBgJIAAgMIAAgnQgBgSgFgHQgHgIgMAAIgOAAIAABnIgnAAIAAj7IA7AAQAOAAAMAEQALADAHAIQAHAHAEAKQADAMAAAOIAAAUQAAATgHANQgGANgNAFQAHADAFAFQAGAFACAHQAGANAAAVIAAAmIABARIADAOgAgVgMIAQAAQAKABAGgHQAGgFAAgPIAAgZQAAgOgFgGQgEgGgKAAIgTAAg");
	this.shape_1.setTransform(190.9,37.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgZB9QgLgFgIgHQgPgRAAgeIAAiDQAAgeAPgQQAIgJALgEQAMgEANAAQAdAAAQARQAHAHAEAMQAEAMAAAPIAACDQAAAPgEAMQgEAMgHAIQgIAHgLAFQgLAEgPAAQgNAAgMgEgAgOhWQgFAFAAAOIAACHQAAAOAFAFQAGAGAIAAQAJAAAGgGQAGgFAAgOIAAiHQAAgOgGgFQgGgGgJAAQgIAAgGAGg");
	this.shape_2.setTransform(176.2,37.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAuB+IAAi0IgcC0IgkAAIgeixIAACxIgiAAIAAj7IA3AAIAcCyIAbiyIA3AAIAAD7g");
	this.shape_3.setTransform(159.3,37.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgTB+IAAjXIgpAAIAAgkIB5AAIAAAkIgpAAIAADXg");
	this.shape_4.setTransform(137.6,37.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgYB8QgLgFgIgIQgPgQAAgfIAAi+IAoAAIAADBQAAAOAFAFQAGAGAJgBQAJABAFgGQAFgFAAgOIAAjBIAmAAIAAC+QAAAPgDAMQgEAMgIAIQgHAIgLAFQgMADgOAAQgNAAgLgDg");
	this.shape_5.setTransform(124,37.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgZB9QgLgFgIgHQgPgRAAgeIAAiDQAAgeAPgQQAIgJALgEQAMgEANAAQAdAAAQARQAHAHAEAMQAEAMAAAPIAACDQAAAPgEAMQgEAMgHAIQgIAHgLAFQgLAEgPAAQgNAAgMgEgAgOhWQgFAFAAAOIAACHQAAAOAFAFQAGAGAIAAQAJAAAGgGQAGgFAAgOIAAiHQAAgOgGgFQgGgGgJAAQgIAAgGAGg");
	this.shape_6.setTransform(109.7,37.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag8B+IAAj7IA+AAQAeAAAOAQQAPAQAAAeIAAB/QAAAegPAQQgHAIgLAEQgLAEgPAAgAgUBaIAVAAQAJAAAGgFQAFgGAAgNIAAiDQAAgNgFgGQgGgFgJAAIgVAAg");
	this.shape_7.setTransform(89.9,37.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAWB+Igwi2IAAC2IgkAAIAAj7IAyAAIAoCWIAAiWIAjAAIAAD7g");
	this.shape_8.setTransform(74.7,37.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgTB+IAAj7IAnAAIAAD7g");
	this.shape_9.setTransform(63.6,37.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgzB+IAAj7IBnAAIAAAkIhAAAIAABMIAyAAIAAAjIgyAAIAABog");
	this.shape_10.setTransform(54.5,37.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AxMGGQjCAAAAjDIAAmGQAAjCDCAAMAiZAAAQDCAAAADCIAAGGQAADDjCAAg");
	this.shape_11.setTransform(129.5,39);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol41, new cjs.Rectangle(0,0,259,78), null);


(lib.Symbol39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgTB+IAAjXIgpAAIAAgkIB5AAIAAAkIgpAAIAADXg");
	this.shape.setTransform(188.2,16.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AAWB+Igwi2IAAC2IgkAAIAAj7IAyAAIAoCWIAAiWIAjAAIAAD7g");
	this.shape_1.setTransform(174,16.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("Ag1B+IAAj7IBrAAIAAAkIhDAAIAABHIA1AAIAAAiIg1AAIAABKIBDAAIAAAkg");
	this.shape_2.setTransform(160,16.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgYB9QgLgEgIgJQgPgQAAgfIAAiCQAAgeAPgRQAIgHALgFQAKgEAOAAQAdAAAPAQQAIAJAEALQADAMAAAPIAAAZIglAAIAAgbQAAgOgGgFQgGgGgIAAQgJAAgFAGQgGAFAAAOIAACHQAAANAGAGQAFAFAJAAQAIAAAGgFQAGgGAAgNIAAgvIgSAAIAAgjIA3AAIAABPQAAAQgDALQgEANgIAHQgHAJgLAEQgMAEgOAAQgOAAgKgEg");
	this.shape_3.setTransform(146.2,16.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AAdB+IgGgtIgwAAIgHAtIgkAAIAoj7IA5AAIAoD7gAARAuIgSh+IgTB+IAlAAg");
	this.shape_4.setTransform(131.8,16.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("Ag1B+IAAj7IBrAAIAAAkIhDAAIAABHIA1AAIAAAiIg1AAIAABKIBDAAIAAAkg");
	this.shape_5.setTransform(112.6,16.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgdB+Igmj7IAnAAIAeDNIAejNIAkAAIgmD7g");
	this.shape_6.setTransform(98.6,16.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AgTB+IAAj7IAnAAIAAD7g");
	this.shape_7.setTransform(87.9,16.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AgZB9QgKgEgJgJQgOgQAAgfIAAgRIAlAAIAAAUQAAANAGAGQAGAFAJAAQAIAAAFgFQAHgGgBgNQABgNgHgKQgFgJgIgJIgSgSIgTgSQgIgLgHgNQgFgNAAgTQAAgeAOgRQAPgQAcAAQAeAAAOAQQAOARAAAeIAAAKIglAAIAAgMQAAgOgFgFQgGgGgJAAQgIAAgGAGQgEAFAAAOQAAANAFAKQAGAJAHAKIATARIASATQAKAKAFANQAGAOAAARQAAAQgEALQgEANgHAHQgHAJgLAEQgLAEgPAAQgOAAgLgEg");
	this.shape_8.setTransform(77.8,16.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AgYB7QgLgEgIgHQgPgRAAgeIAAjAIAnAAIAADCQABANAFAGQAGAGAJAAQAIAAAGgGQAFgGABgNIAAjCIAlAAIAADAQAAAPgDAMQgFALgHAJQgHAHgMAEQgKAEgPABQgOgBgKgEg");
	this.shape_9.setTransform(63.9,16.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AgzB+IAAj7IAnAAIAADXIBAAAIAAAkg");
	this.shape_10.setTransform(51.2,16.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AgZB9QgLgEgHgJQgPgQAAgfIAAiCQAAgeAPgRQAHgHALgFQAMgEANAAQAeAAAPAQQAHAJAEALQADAMAAAPIAAAZIglAAIAAgbQAAgOgGgFQgFgGgKAAQgIAAgGAGQgFAFAAAOIAACHQAAANAFAGQAGAFAIAAQAKAAAFgFQAGgGAAgNIAAgkIAlAAIAAAhQAAAQgDALQgEANgHAHQgIAJgLAEQgMAEgOAAQgNAAgMgEg");
	this.shape_11.setTransform(37.7,16.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AAeB+IgghjIggBjIglAAIAsiBIgph6IApAAIAdBdIAehdIAlAAIgpB6IAsCBg");
	this.shape_12.setTransform(23,16.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("Ag1B+IAAj7IBrAAIAAAkIhEAAIAABHIA2AAIAAAiIg2AAIAABKIBEAAIAAAkg");
	this.shape_13.setTransform(8.9,16.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol39, new cjs.Rectangle(0,0,196.9,40), null);


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
	this.shape.graphics.f("#000000").s().p("AghB+IAAghIAKAAQAJAAAFgEQAEgEAAgOIAAiNQAAgNgEgFQgFgFgJAAIgKAAIAAggIAMAAQAPAAAKADQAKAEAHAFQANANAAAeIAACNQAAAegNAMQgHAHgKADQgKADgPAAg");
	this.shape.setTransform(292.5,16.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgmB+IA5jXIhNAAIAAgkIB1AAIAAAjIg6DYg");
	this.shape_1.setTransform(281.4,16.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag6B/IAAgeQAAgTAFgOQAHgOAJgMIASgVIATgWQAIgLAGgNQAFgOAAgTQABgQgGgGQgGgHgIABQgJgBgGAHQgGAFABAOIAAAbIgmAAIAAgZQAAgfAPgQQAHgIALgFQALgDAOAAQAdAAAPAQQAHAIAEAMQAEALAAAQQAAAUgGARQgHARgJAMQgKAOgKALIgSAWQgKAKgEAKQgGAKADALIBJAAIAAAkg");
	this.shape_2.setTransform(267.4,16.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag6B/IAAgeQAAgTAGgOQAGgOAIgMIATgVIATgWQAIgLAFgNQAHgOAAgTQgBgQgFgGQgGgHgIABQgKgBgFAHQgGAFAAAOIAAAbIglAAIAAgZQAAgfAPgQQAHgIAMgFQALgDANAAQAdAAAPAQQAIAIADAMQAEALAAAQQAAAUgGARQgHARgJAMQgJAOgLALIgTAWQgIAKgFAKQgGAKADALIBKAAIAAAkg");
	this.shape_3.setTransform(253.1,16.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgmB+IA5jXIhNAAIAAgkIB1AAIAAAjIg6DYg");
	this.shape_4.setTransform(238.6,16.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgZB9QgLgEgHgJQgPgQAAgfIAAgUIAlAAIAAAXQAAAOAFAFQAGAGAKAAQAIAAAFgGQAGgGAAgQIAAgUQAAgSgGgHQgGgHgNgBIgNAAIAAgjIAPAAQAKAAAHgFQAGgGAAgPIAAgOQAAgRgGgGQgFgGgIAAQgKAAgGAGQgFAFAAAOIAAAQIglAAIAAgOQAAgeAPgRQAHgHALgFQALgEAOAAQAdAAAPAQQAIAJADALQAEAMAAAPIAAAHQAAApgcALQAPAGAHANQAGANAAAUIAAATQAAAQgEALQgDANgIAHQgIAJgKAEQgMAEgOAAQgOAAgLgEg");
	this.shape_5.setTransform(224.4,16.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgZB9QgLgEgIgJQgPgQAAgfIAAh/QAAgRAEgLQADgNAHgIQAQgRAdAAQAdAAAPAQQAIAJADALQAFAMAAAPIAAAHIgmAAIAAgJQAAgOgFgFQgGgGgKAAQgJAAgGAGQgFAHAAASIAAAuQAKgWAZAAQAWAAALAOQAFAIADAKQADALAAAOIAAAtQAAAQgEALQgDANgJAHQgHAJgLAEQgLAEgPAAQgOAAgLgEgAgOADQgGAGABANIAAAuQgBANAGAGQAFAFAJAAQAJAAAGgFQAGgGgBgNIAAguQABgNgGgGQgGgEgJAAQgJAAgFAEg");
	this.shape_6.setTransform(210.2,16.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgZB9QgLgEgIgJQgPgQAAgfIAAiCQAAgeAPgRQAIgHALgFQAMgEANAAQAdAAAQAQQAHAJAEALQAEAMAAAPIAACCQAAAQgEALQgEANgHAHQgIAJgLAEQgLAEgPAAQgNAAgMgEgAgOhWQgFAFAAAOIAACHQAAAOAFAFQAGAGAIAAQAJAAAGgGQAGgFAAgOIAAiHQAAgOgGgFQgGgGgJAAQgIAAgGAGg");
	this.shape_7.setTransform(190.3,16.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgZB9QgLgEgIgJQgPgQAAgfIAAiCQAAgeAPgRQAIgHALgFQAMgEANAAQAdAAAQAQQAHAJAEALQAEAMAAAPIAACCQAAAQgEALQgEANgHAHQgIAJgLAEQgLAEgPAAQgNAAgMgEgAgOhWQgFAFAAAOIAACHQAAAOAFAFQAGAGAIAAQAJAAAGgGQAGgFAAgOIAAiHQAAgOgGgFQgGgGgJAAQgIAAgGAGg");
	this.shape_8.setTransform(176.1,16.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgaB9QgLgEgIgJQgIgHgEgNQgEgLAAgQIAAgTQAAgTAGgNQAGgNANgHQgNgGgGgNQgGgNAAgTIAAgIQAAgPAEgMQAEgLAIgJQAQgQAdAAQAPAAAMAEQALAFAIAHQAQARAAAeIAAAIQAAAlgZAOQANAHAGANQAGANAAATIAAATQAAAfgQAQQgIAJgLAEQgMAEgPAAQgOAAgMgEgAgPAUQgGAGAAAPIAAAYQAAAQAGAGQAHAGAIAAQAJAAAHgGQAGgGAAgQIAAgYQAAgPgGgGQgGgIgKAAQgJAAgGAIgAgPhWQgGAGAAARIAAAOQAAAPAGAGQAGAFAJAAQAJAAAHgFQAGgGAAgPIAAgOQAAgRgGgGQgHgGgJAAQgIAAgHAGg");
	this.shape_9.setTransform(161.8,16.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAWB+QgPAAgKgDQgKgDgHgHQgHgGgDgLQgDgKAAgPIAAiNQAAgPADgKQADgLAHgHQAHgGAKgDQAKgDAPAAIAMAAIAAAgIgKAAQgJAAgFAFQgEAFAAANIAACNQAAAOAEAEQAFAEAJAAIAKAAIAAAhg");
	this.shape_10.setTransform(150.8,16.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgZB9QgKgEgJgJQgOgQAAgfIAAgRIAlAAIAAAUQAAANAGAGQAFAFAKAAQAIAAAGgFQAFgGAAgNQAAgNgFgKQgHgJgHgJIgTgSIgSgSQgIgLgHgNQgFgNAAgTQAAgeAOgRQAPgQAcAAQAeAAAOAQQAPARAAAeIAAAKIgmAAIAAgMQAAgOgFgFQgFgGgKAAQgIAAgFAGQgGAFAAAOQABANAFAKQAGAJAHAKIATARIATATQAIAKAGANQAGAOAAARQAAAQgEALQgEANgHAHQgIAJgLAEQgLAEgOAAQgOAAgLgEg");
	this.shape_11.setTransform(133.5,16.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAdB+IgGgtIgwAAIgHAtIgkAAIAoj7IA5AAIAoD7gAARAuIgSh+IgTB+IAlAAg");
	this.shape_12.setTransform(119.4,16.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAdB+IgGgtIgwAAIgHAtIgkAAIAoj7IA5AAIAoD7gAARAuIgSh+IgTB+IAlAAg");
	this.shape_13.setTransform(104.7,16.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAVB+IgBgFIgBgFIgBgIIAAgNIAAgnQgBgSgFgIQgHgGgMgBIgOAAIAABnIgnAAIAAj7IA7AAQAOAAAMADQALAEAHAHQAHAIAEAKQADAMAAAOIAAAUQAAATgHANQgGANgNAFQAHADAFAFQAGAFACAHQAGAOAAATIAAAnIABARIADAOgAgVgMIAQAAQAKAAAGgFQAGgGAAgPIAAgZQAAgOgFgGQgEgGgKAAIgTAAg");
	this.shape_14.setTransform(90.6,16.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("Ag1B+IAAj7IBrAAIAAAkIhDAAIAABHIA1AAIAAAiIg1AAIAABKIBDAAIAAAkg");
	this.shape_15.setTransform(76.6,16.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAuB+IAAizIgcCzIgkAAIgeixIAACxIgiAAIAAj7IA3AAIAcCyIAbiyIA3AAIAAD7g");
	this.shape_16.setTransform(60,16.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgZB9QgLgEgIgJQgPgQAAgfIAAiCQAAgeAPgRQAIgHALgFQAMgEANAAQAdAAAQAQQAHAJAEALQAEAMAAAPIAACCQAAAQgEALQgEANgHAHQgIAJgLAEQgLAEgPAAQgNAAgMgEgAgOhWQgFAFAAAOIAACHQAAAOAFAFQAGAGAIAAQAJAAAGgGQAGgFAAgOIAAiHQAAgOgGgFQgGgGgJAAQgIAAgGAGg");
	this.shape_17.setTransform(37.6,16.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgZB9QgLgEgIgJQgPgQAAgfIAAiCQAAgeAPgRQAIgHALgFQAMgEANAAQAdAAAQAQQAHAJAEALQAEAMAAAPIAACCQAAAQgEALQgEANgHAHQgIAJgLAEQgLAEgPAAQgNAAgMgEgAgOhWQgFAFAAAOIAACHQAAAOAFAFQAGAGAIAAQAJAAAGgGQAGgFAAgOIAAiHQAAgOgGgFQgGgGgJAAQgIAAgGAGg");
	this.shape_18.setTransform(23.4,16.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgaB9QgLgEgIgJQgIgHgEgNQgEgLAAgQIAAgTQAAgTAGgNQAGgNANgHQgNgGgGgNQgGgNAAgTIAAgIQAAgPAEgMQAEgLAIgJQAQgQAdAAQAPAAAMAEQALAFAIAHQAQARAAAeIAAAIQAAAlgZAOQANAHAGANQAGANAAATIAAATQAAAfgQAQQgIAJgLAEQgMAEgPAAQgOAAgMgEgAgPAUQgGAGAAAPIAAAYQAAAQAGAGQAHAGAIAAQAJAAAHgGQAGgGAAgQIAAgYQAAgPgGgGQgGgIgKAAQgJAAgGAIgAgPhWQgGAGAAARIAAAOQAAAPAGAGQAGAFAJAAQAJAAAHgFQAGgGAAgPIAAgOQAAgRgGgGQgHgGgJAAQgIAAgHAGg");
	this.shape_19.setTransform(9.1,16.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol36, new cjs.Rectangle(0,0,299.7,40), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AAWB+IAAhsIgsAAIAABsIgnAAIAAj7IAnAAIAABsIAsAAIAAhsIApAAIAAD7g");
	this.shape.setTransform(113.2,16.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgZB9QgLgEgHgJQgPgQAAgfIAAiCQAAgeAPgRQAHgHALgFQALgEAOAAQAeAAAOAQQAIAJADALQAEAMAAAPIAAAZIglAAIAAgbQAAgOgGgFQgFgGgKAAQgIAAgFAGQgGAFAAAOIAACHQAAANAGAGQAFAFAIAAQAKAAAFgFQAGgGAAgNIAAgkIAlAAIAAAhQAAAQgEALQgDANgIAHQgHAJgLAEQgLAEgPAAQgOAAgLgEg");
	this.shape_1.setTransform(98.6,16.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAdB+IgGgtIgwAAIgHAtIgkAAIAoj7IA5AAIAoD7gAARAuIgSh+IgTB+IAlAAg");
	this.shape_2.setTransform(84.3,16.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag1B+IAAj7IBrAAIAAAkIhEAAIAABHIA2AAIAAAiIg2AAIAABKIBEAAIAAAkg");
	this.shape_3.setTransform(70.6,16.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag8B+IAAj7IA7AAQAPAAALADQALAEAHAHQAHAIAEAKQADAMAAAOIAAAJQAAATgGANQgGAMgOAHQAJADAFAEQAGAFADAGQAHAOAAAVIAAAUQAAAegPAOQgIAJgLADQgLAEgPAAgAgVBaIAWAAQAKAAAFgGQAFgFAAgOIAAgWQAAgRgGgHQgFgGgNgBIgSAAgAgVgXIAQAAQAKAAAGgFQAGgGAAgPIAAgOQAAgOgEgGQgFgGgKAAIgTAAg");
	this.shape_4.setTransform(56.7,16.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag1B+IAAj7IBrAAIAAAkIhDAAIAABHIA1AAIAAAiIg1AAIAABKIBDAAIAAAkg");
	this.shape_5.setTransform(37.3,16.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAWB+IAAhsIgsAAIAABsIgoAAIAAj7IAoAAIAABsIAsAAIAAhsIAoAAIAAD7g");
	this.shape_6.setTransform(22.8,16.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgTB+IAAjXIgpAAIAAgkIB5AAIAAAkIgpAAIAADXg");
	this.shape_7.setTransform(8.6,16.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol27, new cjs.Rectangle(0,0,122.9,40), null);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgTB+IAAjXIgpAAIAAgkIB5AAIAAAkIgpAAIAADXg");
	this.shape.setTransform(269,16.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAdB+IgGgtIgwAAIgHAtIgkAAIAoj7IA5AAIAoD7gAARAuIgSh+IgTB+IAlAAg");
	this.shape_1.setTransform(255.2,16.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag1B+IAAj7IBrAAIAAAkIhEAAIAABHIA2AAIAAAiIg2AAIAABKIBEAAIAAAkg");
	this.shape_2.setTransform(236,16.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgTB+IAAjXIgpAAIAAgkIB5AAIAAAkIgpAAIAADXg");
	this.shape_3.setTransform(222.7,16.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgTB+IAAj7IAnAAIAAD7g");
	this.shape_4.setTransform(212.8,16.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgYB7QgLgEgIgHQgPgRAAgeIAAjAIAoAAIAADCQAAANAFAGQAGAGAJAAQAJAAAFgGQAFgGAAgNIAAjCIAmAAIAADAQAAAPgDAMQgEALgIAJQgHAHgLAEQgMAEgOABQgNgBgLgEg");
	this.shape_5.setTransform(202.3,16.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgZB9QgLgEgHgJQgPgQAAgfIAAgRIAlAAIAAAUQAAANAGAGQAGAFAJAAQAIAAAFgFQAHgGgBgNQABgNgHgKQgFgJgIgJIgSgSIgTgSQgJgLgGgNQgFgNAAgTQAAgeAPgRQAOgQAcAAQAeAAAOAQQAOARAAAeIAAAKIglAAIAAgMQAAgOgFgFQgFgGgKAAQgIAAgGAGQgEAFAAAOQgBANAGAKQAGAJAIAKIASARIASATQAKAKAFANQAGAOAAARQAAAQgEALQgDANgIAHQgIAJgKAEQgMAEgOAAQgOAAgLgEg");
	this.shape_6.setTransform(188.4,16.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgZB9QgKgEgIgJQgPgQAAgfIAAgRIAlAAIAAAUQAAANAGAGQAFAFAKAAQAIAAAFgFQAHgGAAgNQAAgNgHgKQgFgJgIgJIgSgSIgTgSQgJgLgFgNQgGgNAAgTQAAgeAPgRQAOgQAcAAQAdAAAPAQQAOARAAAeIAAAKIglAAIAAgMQAAgOgFgFQgFgGgKAAQgIAAgGAGQgEAFAAAOQgBANAGAKQAGAJAIAKIASARIASATQAKAKAFANQAGAOAAARQAAAQgEALQgDANgIAHQgIAJgKAEQgMAEgOAAQgOAAgLgEg");
	this.shape_7.setTransform(169.4,16.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag1B+IAAj7IBrAAIAAAkIhDAAIAABHIA1AAIAAAiIg1AAIAABKIBDAAIAAAkg");
	this.shape_8.setTransform(156.3,16.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgzB+IAAj7IAnAAIAADXIBAAAIAAAkg");
	this.shape_9.setTransform(143.9,16.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAdB+IgGgtIgwAAIgHAtIgkAAIAoj7IA5AAIAoD7gAARAuIgSh+IgTB+IAlAAg");
	this.shape_10.setTransform(129.9,16.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgZB9QgKgEgIgJQgPgQAAgfIAAgRIAlAAIAAAUQAAANAGAGQAFAFAKAAQAIAAAFgFQAHgGAAgNQAAgNgHgKQgFgJgIgJIgSgSIgTgSQgJgLgFgNQgGgNAAgTQAAgeAPgRQAOgQAcAAQAdAAAPAQQAOARAAAeIAAAKIglAAIAAgMQAAgOgFgFQgFgGgKAAQgIAAgGAGQgEAFAAAOQgBANAGAKQAGAJAIAKIASARIASATQAKAKAFANQAGAOAAARQAAAQgEALQgDANgIAHQgIAJgKAEQgMAEgOAAQgOAAgLgEg");
	this.shape_11.setTransform(115.9,16.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag1B+IAAj7IBrAAIAAAkIhDAAIAABHIA1AAIAAAiIg1AAIAABKIBDAAIAAAkg");
	this.shape_12.setTransform(97.2,16.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAWB+IAAhsIgsAAIAABsIgoAAIAAj7IAoAAIAABsIAsAAIAAhsIAoAAIAAD7g");
	this.shape_13.setTransform(82.7,16.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgTB+IAAjXIgpAAIAAgkIB5AAIAAAkIgpAAIAADXg");
	this.shape_14.setTransform(68.5,16.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgTB+IAAjXIgpAAIAAgkIB5AAIAAAkIgpAAIAADXg");
	this.shape_15.setTransform(50,16.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgTB+IAAj7IAnAAIAAD7g");
	this.shape_16.setTransform(40.2,16.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgZB9QgLgEgIgJQgOgQAAgfIAAgRIAlAAIAAAUQAAANAGAGQAGAFAJAAQAIAAAGgFQAFgGABgNQgBgNgFgKQgHgJgHgJIgTgSIgSgSQgJgLgFgNQgGgNAAgTQAAgeAPgRQAOgQAcAAQAeAAAOAQQAPARAAAeIAAAKIgmAAIAAgMQAAgOgFgFQgGgGgJAAQgIAAgFAGQgFAFgBAOQAAANAGAKQAGAJAIAKIASARIATATQAIAKAGANQAGAOAAARQAAAQgEALQgEANgHAHQgIAJgLAEQgLAEgOAAQgOAAgLgEg");
	this.shape_17.setTransform(30.1,16.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgTB+IAAj7IAnAAIAAD7g");
	this.shape_18.setTransform(19.9,16.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgcB+Igoj7IApAAIAcDNIAfjNIAkAAIgnD7g");
	this.shape_19.setTransform(9.3,16.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol26, new cjs.Rectangle(0,0,277.6,40), null);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgaB9QgLgEgIgJQgIgHgEgNQgEgLAAgQIAAgTQAAgTAGgNQAGgNANgHQgNgGgGgNQgGgNAAgTIAAgIQAAgPAEgMQAEgLAIgJQAQgQAdAAQAPAAAMAEQALAFAIAHQAQARAAAeIAAAIQAAAlgZAOQANAHAGANQAGANAAATIAAATQAAAfgQAQQgIAJgLAEQgMAEgPAAQgOAAgMgEgAgPAUQgGAGAAAPIAAAYQAAAQAGAGQAHAGAIAAQAJAAAHgGQAGgGAAgQIAAgYQAAgPgGgGQgGgIgKAAQgJAAgGAIgAgPhWQgGAGAAARIAAAOQAAAPAGAGQAGAFAJAAQAJAAAHgFQAGgGAAgPIAAgOQAAgRgGgGQgHgGgJAAQgIAAgHAGg");
	this.shape.setTransform(113.7,16.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgDB+IAAjAIgfAAIAAgcQALABAIgDQAHgCAFgFQADgEAEgGIAEgMIAbAAIAAD7g");
	this.shape_1.setTransform(99.7,16.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgZB9QgLgEgIgJQgPgQAAgfIAAiCQAAgeAPgRQAIgHALgFQAMgEANAAQAdAAAQAQQAHAJAEALQAEAMAAAPIAACCQAAAQgEALQgEANgHAHQgIAJgLAEQgLAEgPAAQgNAAgMgEgAgOhWQgFAFAAAOIAACHQAAAOAFAFQAGAGAIAAQAJAAAGgGQAGgFAAgOIAAiHQAAgOgGgFQgGgGgJAAQgIAAgGAGg");
	this.shape_2.setTransform(85.2,16.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag6B/IAAgeQAAgTAFgOQAHgOAJgMIASgVIATgWQAIgLAGgNQAFgOAAgTQABgQgGgGQgGgHgIABQgJgBgGAHQgGAFABAOIAAAbIgmAAIAAgZQAAgfAPgQQAHgIALgFQALgDAOAAQAdAAAPAQQAHAIAEAMQAEALAAAQQAAAUgGARQgHARgJAMQgKAOgKALIgSAWQgKAKgEAKQgGAKADALIBJAAIAAAkg");
	this.shape_3.setTransform(71.2,16.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgEB+IAAjAIgeAAIAAgcQAMABAHgDQAHgCAFgFQAEgEADgGIAFgMIAaAAIAAD7g");
	this.shape_4.setTransform(51.4,16.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AA6CHQgNAAgIgEQgJgFgEgIIgNADIgNACQgPAAgLgEQgLgFgIgIQgQgQAAgfIAAiCQAAgeAQgRQAIgIALgEQALgEAPAAQAcAAAPAQQAIAIAEAMQAEAMAAAPIAACCIgCAUQgCAJgEAHQACADACABIAHABIAEAAIAAAjgAgRhcQgGAFAAAOIAACHQAAANAGAGQAFAGAKAAQAIAAAFgGQAGgGAAgNIAAiHQAAgOgGgFQgFgGgIAAQgKAAgFAGg");
	this.shape_5.setTransform(37.2,17);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAWB+Igwi2IAAC2IgkAAIAAj7IAyAAIAoCWIAAiWIAjAAIAAD7g");
	this.shape_6.setTransform(16.5,16.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgTB+IAAj7IAnAAIAAD7g");
	this.shape_7.setTransform(5.5,16.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol25, new cjs.Rectangle(0,0,122.9,40), null);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag1B+IAAj7IBrAAIAAAkIhDAAIAABHIA1AAIAAAiIg1AAIAABKIBDAAIAAAkg");
	this.shape.setTransform(299.7,16.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAuB+IAAizIgcCzIgkAAIgeixIAACxIgiAAIAAj7IA3AAIAcCyIAbiyIA3AAIAAD7g");
	this.shape_1.setTransform(283.1,16.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgZB9QgLgEgIgJQgPgQAAgfIAAiCQAAgeAPgRQAIgHALgFQAMgEANAAQAdAAAQAQQAHAJAEALQAEAMAAAPIAACCQAAAQgEALQgEANgHAHQgIAJgLAEQgLAEgPAAQgNAAgMgEgAgOhWQgFAFAAAOIAACHQAAAOAFAFQAGAGAIAAQAJAAAGgGQAGgFAAgOIAAiHQAAgOgGgFQgGgGgJAAQgIAAgGAGg");
	this.shape_2.setTransform(266.3,16.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAWB+IAAhsIgsAAIAABsIgoAAIAAj7IAoAAIAABsIAsAAIAAhsIApAAIAAD7g");
	this.shape_3.setTransform(251.5,16.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAPB+IgOiFIgNCFIg3AAIgcj7IAnAAIAVDGIATjGIAlAAIAUDHIAVjHIAiAAIgcD7g");
	this.shape_4.setTransform(228.1,16.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag1B+IAAj7IBrAAIAAAkIhDAAIAABHIA1AAIAAAiIg1AAIAABKIBDAAIAAAkg");
	this.shape_5.setTransform(211.7,16.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAWB+Igwi2IAAC2IgkAAIAAj7IAyAAIAoCWIAAiWIAjAAIAAD7g");
	this.shape_6.setTransform(197.1,16.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAVB+IgBgFIgBgFIgBgIIAAgNIAAgnQgBgSgGgIQgFgGgNgBIgOAAIAABnIgnAAIAAj7IA7AAQAOAAAMADQALAEAHAHQAHAIAEAKQADAMAAAOIAAAUQAAATgHANQgGANgNAFQAHADAGAFQAFAFACAHQAGAOAAATIAAAnIABARIAEAOgAgVgMIAPAAQALAAAGgFQAGgGAAgPIAAgZQAAgOgFgGQgEgGgKAAIgTAAg");
	this.shape_7.setTransform(177.1,16.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgZB7QgLgEgHgHQgPgRAAgeIAAjAIAoAAIAADCQAAANAFAGQAGAGAIAAQAKAAAFgGQAGgGgBgNIAAjCIAmAAIAADAQAAAPgEAMQgDALgIAJQgHAHgLAEQgMAEgOABQgNgBgMgEg");
	this.shape_8.setTransform(162.3,16.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgZB9QgLgEgIgJQgPgQAAgfIAAiCQAAgeAPgRQAIgHALgFQAMgEANAAQAdAAAQAQQAHAJAEALQAEAMAAAPIAACCQAAAQgEALQgEANgHAHQgIAJgLAEQgLAEgPAAQgNAAgMgEgAgOhWQgFAFAAAOIAACHQAAAOAFAFQAGAGAIAAQAJAAAGgGQAGgFAAgOIAAiHQAAgOgGgFQgGgGgJAAQgIAAgGAGg");
	this.shape_9.setTransform(148,16.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgTB+IAAhUIgyinIAqAAIAdBzIAehzIAmAAIgyCnIAABUg");
	this.shape_10.setTransform(133.8,16.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgZB9QgLgEgIgJQgPgQAAgfIAAiCQAAgeAPgRQAIgHALgFQAMgEANAAQAdAAAQAQQAHAJAEALQAEAMAAAPIAACCQAAAQgEALQgEANgHAHQgIAJgLAEQgLAEgPAAQgNAAgMgEgAgOhWQgFAFAAAOIAACHQAAAOAFAFQAGAGAIAAQAJAAAGgGQAGgFAAgOIAAiHQAAgOgGgFQgGgGgJAAQgIAAgGAGg");
	this.shape_11.setTransform(114,16.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgTB+IAAjXIgpAAIAAgkIB5AAIAAAkIgpAAIAADXg");
	this.shape_12.setTransform(100.4,16.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAWB+Igwi2IAAC2IgkAAIAAj7IAyAAIAoCWIAAiWIAjAAIAAD7g");
	this.shape_13.setTransform(86.2,16.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgTB+IAAj7IAnAAIAAD7g");
	this.shape_14.setTransform(75.2,16.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag1B+IAAj7IBrAAIAAAkIhDAAIAABHIA1AAIAAAiIg1AAIAABKIBDAAIAAAkg");
	this.shape_15.setTransform(59.9,16.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgdB+Igmj7IAnAAIAeDNIAejNIAkAAIgmD7g");
	this.shape_16.setTransform(45.8,16.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgZB9QgLgEgIgJQgPgQAAgfIAAiCQAAgeAPgRQAIgHALgFQAMgEANAAQAdAAAQAQQAHAJAEALQAEAMAAAPIAACCQAAAQgEALQgEANgHAHQgIAJgLAEQgLAEgPAAQgNAAgMgEgAgOhWQgFAFAAAOIAACHQAAAOAFAFQAGAGAIAAQAJAAAGgGQAGgFAAgOIAAiHQAAgOgGgFQgGgGgJAAQgIAAgGAGg");
	this.shape_17.setTransform(31.4,16.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAuB+IAAizIgcCzIgkAAIgeixIAACxIgiAAIAAj7IA3AAIAcCyIAbiyIA3AAIAAD7g");
	this.shape_18.setTransform(14.6,16.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol24, new cjs.Rectangle(0,0,310.9,40), null);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgZB9QgKgEgJgJQgOgQAAgfIAAgRIAlAAIAAAUQAAANAGAGQAFAFAKAAQAIAAAGgFQAFgGAAgNQAAgNgFgKQgHgJgHgJIgTgSIgSgSQgIgLgHgNQgFgNAAgTQAAgeAOgRQAPgQAcAAQAeAAAOAQQAPARAAAeIAAAKIgmAAIAAgMQAAgOgFgFQgFgGgKAAQgIAAgFAGQgGAFAAAOQABANAFAKQAGAJAHAKIATARIATATQAIAKAGANQAGAOAAARQAAAQgEALQgDANgIAHQgIAJgLAEQgLAEgOAAQgOAAgLgEg");
	this.shape.setTransform(233.8,16.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag1B+IAAj7IBrAAIAAAkIhEAAIAABHIA2AAIAAAiIg2AAIAABKIBEAAIAAAkg");
	this.shape_1.setTransform(220.7,16.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgTB+IAAj7IAnAAIAAD7g");
	this.shape_2.setTransform(210.5,16.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgTB+IAAjXIgpAAIAAgkIB5AAIAAAkIgpAAIAADXg");
	this.shape_3.setTransform(200.6,16.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgTB+IAAj7IAnAAIAAD7g");
	this.shape_4.setTransform(190.7,16.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAWB+Igwi2IAAC2IgkAAIAAj7IAyAAIAoCWIAAiWIAjAAIAAD7g");
	this.shape_5.setTransform(179.6,16.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag1B+IAAj7IBrAAIAAAkIhDAAIAABHIA1AAIAAAiIg1AAIAABKIBDAAIAAAkg");
	this.shape_6.setTransform(165.6,16.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAuB+IAAizIgcCzIgkAAIgeixIAACxIgiAAIAAj7IA3AAIAcCyIAbiyIA3AAIAAD7g");
	this.shape_7.setTransform(149,16.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAdB+IgGgtIgwAAIgHAtIgkAAIAoj7IA5AAIAoD7gAARAuIgSh+IgTB+IAlAAg");
	this.shape_8.setTransform(132,16.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgYB9QgLgEgIgJQgPgQAAgfIAAiCQAAgeAPgRQAIgHALgFQALgEANAAQAeAAAPAQQAHAJAEALQADAMAAAPIAAAZIglAAIAAgbQAAgOgGgFQgFgGgJAAQgJAAgGAGQgFAFAAAOIAACHQAAANAFAGQAGAFAJAAQAJAAAFgFQAGgGAAgNIAAgkIAlAAIAAAhQAAAQgDALQgEANgHAHQgIAJgLAEQgMAEgOAAQgNAAgLgEg");
	this.shape_9.setTransform(112.3,16.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgTB+IAAj7IAnAAIAAD7g");
	this.shape_10.setTransform(101.9,16.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgTB+IAAjXIgpAAIAAgkIB5AAIAAAkIgpAAIAADXg");
	this.shape_11.setTransform(92,16.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgZB9QgKgEgJgJQgOgQAAgfIAAgRIAlAAIAAAUQAAANAGAGQAGAFAJAAQAIAAAGgFQAFgGAAgNQAAgNgFgKQgHgJgHgJIgSgSIgTgSQgIgLgHgNQgFgNAAgTQAAgeAOgRQAPgQAcAAQAdAAAPAQQAPARAAAeIAAAKIgmAAIAAgMQAAgOgFgFQgGgGgJAAQgIAAgFAGQgGAFAAAOQABANAFAKQAGAJAHAKIATARIASATQAKAKAFANQAGAOAAARQAAAQgEALQgEANgHAHQgHAJgLAEQgLAEgPAAQgOAAgLgEg");
	this.shape_12.setTransform(78.8,16.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAdB+IgGgtIgwAAIgHAtIgkAAIAoj7IA5AAIAoD7gAARAuIgSh+IgTB+IAlAAg");
	this.shape_13.setTransform(64.7,16.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgTB+IAAjXIgpAAIAAgkIB5AAIAAAkIgpAAIAADXg");
	this.shape_14.setTransform(50.9,16.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAWB+Igwi2IAAC2IgkAAIAAj7IAyAAIAoCWIAAiWIAjAAIAAD7g");
	this.shape_15.setTransform(36.8,16.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAdB+IgGgtIgwAAIgHAtIgkAAIAoj7IA5AAIAoD7gAARAuIgSh+IgTB+IAlAAg");
	this.shape_16.setTransform(21.8,16.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgzB+IAAj7IBnAAIAAAkIhAAAIAABMIAyAAIAAAjIgyAAIAABog");
	this.shape_17.setTransform(8.8,16.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol23, new cjs.Rectangle(0,0,242.6,40), null);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNAlIAKgkIgPAAIAAglIAlAAIAAAiIgRAng");
	this.shape.setTransform(230.3,28.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgZB9QgKgEgIgJQgPgQAAgfIAAgRIAlAAIAAAUQAAANAGAGQAFAFAKAAQAIAAAFgFQAHgGAAgNQAAgNgHgKQgFgJgIgJIgSgSIgTgSQgJgLgFgNQgGgNAAgTQAAgeAPgRQAOgQAcAAQAdAAAPAQQAOARAAAeIAAAKIglAAIAAgMQAAgOgFgFQgFgGgKAAQgIAAgGAGQgEAFAAAOQgBANAGAKQAGAJAIAKIASARIASATQAKAKAFANQAGAOAAARQAAAQgEALQgDANgIAHQgIAJgKAEQgMAEgOAAQgOAAgLgEg");
	this.shape_1.setTransform(220.3,16.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAPB+IgOiFIgNCFIg3AAIgcj7IAnAAIAVDGIATjGIAlAAIAUDHIAVjHIAiAAIgcD7g");
	this.shape_2.setTransform(203.4,16.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag1B+IAAj7IBrAAIAAAkIhDAAIAABHIA1AAIAAAiIg1AAIAABKIBDAAIAAAkg");
	this.shape_3.setTransform(186.9,16.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgTB+IAAj7IAnAAIAAD7g");
	this.shape_4.setTransform(176.7,16.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgdB+Igmj7IAnAAIAeDNIAejNIAkAAIgmD7g");
	this.shape_5.setTransform(166.1,16.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAVB+IgBgFIgCgFIAAgIIgBgNIAAgnQABgSgHgIQgGgGgNgBIgNAAIAABnIgoAAIAAj7IA8AAQAPAAALADQALAEAHAHQAHAIADAKQAEAMAAAOIAAAUQAAATgGANQgHANgNAFQAIADAEAFQAGAFADAHQAFAOAAATIAAAnIABARIAEAOgAgVgMIAPAAQAKAAAHgFQAGgGAAgPIAAgZQAAgOgEgGQgGgGgJAAIgTAAg");
	this.shape_6.setTransform(146.4,16.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAdB+IgGgtIgwAAIgHAtIgkAAIAoj7IA5AAIAoD7gAARAuIgSh+IgTB+IAlAAg");
	this.shape_7.setTransform(131.5,16.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgzB+IAAj7IAnAAIAADXIBAAAIAAAkg");
	this.shape_8.setTransform(118.6,16.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgYB7QgLgEgIgHQgPgRAAgeIAAjAIAnAAIAADCQAAANAHAGQAFAGAJAAQAIAAAGgGQAFgGABgNIAAjCIAlAAIAADAQAAAPgDAMQgFALgHAJQgHAHgMAEQgLAEgOABQgOgBgKgEg");
	this.shape_9.setTransform(104.8,16.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgZB9QgLgEgHgJQgPgQAAgfIAAiCQAAgeAPgRQAHgHALgFQAMgEANAAQAeAAAPAQQAHAJADALQAEAMAAAPIAAAZIglAAIAAgbQAAgOgGgFQgFgGgJAAQgJAAgGAGQgFAFAAAOIAACHQAAANAFAGQAGAFAJAAQAJAAAFgFQAGgGAAgNIAAgkIAlAAIAAAhQAAAQgEALQgDANgHAHQgIAJgLAEQgMAEgOAAQgNAAgMgEg");
	this.shape_10.setTransform(90.8,16.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAdB+IgGgtIgwAAIgHAtIgkAAIAoj7IA5AAIAoD7gAARAuIgSh+IgTB+IAlAAg");
	this.shape_11.setTransform(76.4,16.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgTB+IAAjXIgpAAIAAgkIB5AAIAAAkIgpAAIAADXg");
	this.shape_12.setTransform(62.6,16.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgZB9QgKgEgIgJQgPgQAAgfIAAiCQAAgeAPgRQAIgHAKgFQAMgEANAAQAdAAAPAQQAIAJADALQAEAMAAAPIAAAZIglAAIAAgbQAAgOgGgFQgGgGgJAAQgIAAgFAGQgGAFAAAOIAACHQAAANAGAGQAFAFAIAAQAJAAAGgFQAGgGAAgNIAAgkIAlAAIAAAhQAAAQgEALQgDANgIAHQgHAJgLAEQgLAEgPAAQgNAAgMgEg");
	this.shape_13.setTransform(49.3,16.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag1B+IAAj7IBrAAIAAAkIhEAAIAABHIA2AAIAAAiIg2AAIAABKIBEAAIAAAkg");
	this.shape_14.setTransform(36,16.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag6B+IAAj7IA6AAQAdAAAPAQQAPAPAAAgIAAAgQAAAegPAPQgHAIgLAFQgMADgOAAIgSAAIAABfgAgSgEIASAAQAJAAAFgEQAFgGAAgNIAAgnQAAgNgFgFQgFgFgJAAIgSAAg");
	this.shape_15.setTransform(22.9,16.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgZB9QgLgEgHgJQgPgQAAgfIAAgRIAlAAIAAAUQAAANAGAGQAGAFAJAAQAIAAAFgFQAHgGAAgNQAAgNgHgKQgFgJgIgJIgSgSIgTgSQgJgLgGgNQgFgNAAgTQAAgeAOgRQAPgQAcAAQAeAAAOAQQAOARAAAeIAAAKIglAAIAAgMQAAgOgFgFQgFgGgKAAQgIAAgGAGQgEAFAAAOQgBANAGAKQAGAJAIAKIASARIASATQAKAKAFANQAGAOAAARQAAAQgEALQgDANgIAHQgIAJgKAEQgMAEgOAAQgOAAgLgEg");
	this.shape_16.setTransform(8.9,16.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol22, new cjs.Rectangle(0,0,235.7,40), null);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNAlIAKgkIgPAAIAAglIAlAAIAAAiIgRAng");
	this.shape.setTransform(259.9,28.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgZB9QgLgEgHgJQgPgQAAgfIAAgRIAlAAIAAAUQAAANAGAGQAGAFAJAAQAIAAAFgFQAHgGAAgNQAAgNgHgKQgFgJgIgJIgTgSIgSgSQgJgLgFgNQgGgNAAgTQAAgeAPgRQAOgQAcAAQAdAAAPAQQAOARAAAeIAAAKIglAAIAAgMQAAgOgFgFQgGgGgJAAQgIAAgGAGQgEAFAAAOQgBANAGAKQAGAJAIAKIASARIATATQAJAKAFANQAGAOAAARQAAAQgEALQgDANgIAHQgIAJgLAEQgKAEgPAAQgOAAgLgEg");
	this.shape_1.setTransform(249.9,16.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgTB+IAAjXIgpAAIAAgkIB5AAIAAAkIgpAAIAADXg");
	this.shape_2.setTransform(236.6,16.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAWB+Igwi2IAAC2IgkAAIAAj7IAyAAIAoCWIAAiWIAjAAIAAD7g");
	this.shape_3.setTransform(222.5,16.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag1B+IAAj7IBrAAIAAAkIhDAAIAABHIA1AAIAAAiIg1AAIAABKIBDAAIAAAkg");
	this.shape_4.setTransform(208.5,16.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAuB+IAAizIgcCzIgkAAIgeixIAACxIgiAAIAAj7IA3AAIAcCyIAbiyIA3AAIAAD7g");
	this.shape_5.setTransform(191.9,16.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgTB+IAAjXIgpAAIAAgkIB5AAIAAAkIgpAAIAADXg");
	this.shape_6.setTransform(175.7,16.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAVB+IgBgFIgCgFIAAgIIgBgNIAAgnQAAgSgFgIQgHgGgNgBIgNAAIAABnIgnAAIAAj7IA7AAQAPAAALADQALAEAHAHQAHAIADAKQAEAMAAAOIAAAUQAAATgHANQgGANgNAFQAIADAEAFQAGAFACAHQAGAOAAATIAAAnIABARIADAOgAgVgMIAQAAQAJAAAHgFQAGgGAAgPIAAgZQAAgOgEgGQgGgGgJAAIgTAAg");
	this.shape_7.setTransform(162.4,16.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAdB+IgGgtIgwAAIgHAtIgkAAIAoj7IA5AAIAoD7gAARAuIgSh+IgTB+IAlAAg");
	this.shape_8.setTransform(147.4,16.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag6B+IAAj7IA6AAQAdAAAPAQQAPAPAAAgIAAAgQAAAegPAPQgHAIgLAFQgMADgOAAIgSAAIAABfgAgSgEIASAAQAJAAAFgEQAFgGAAgNIAAgnQAAgNgFgFQgFgFgJAAIgSAAg");
	this.shape_9.setTransform(133.9,16.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAdB+IgGgtIgwAAIgHAtIgkAAIAoj7IA5AAIAoD7gAARAuIgSh+IgTB+IAlAAg");
	this.shape_10.setTransform(119.2,16.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgZB9QgKgEgIgJQgPgQAAgfIAAgRIAlAAIAAAUQAAANAGAGQAFAFAKAAQAIAAAFgFQAHgGAAgNQAAgNgHgKQgFgJgIgJIgSgSIgTgSQgJgLgFgNQgGgNAAgTQAAgeAPgRQAOgQAcAAQAdAAAPAQQAOARAAAeIAAAKIglAAIAAgMQAAgOgFgFQgFgGgKAAQgIAAgGAGQgEAFAAAOQgBANAGAKQAGAJAIAKIASARIASATQAKAKAFANQAGAOAAARQAAAQgEALQgDANgIAHQgIAJgKAEQgMAEgOAAQgOAAgLgEg");
	this.shape_11.setTransform(99.7,16.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgZB7QgKgEgIgHQgPgRAAgeIAAjAIAnAAIAADCQAAANAHAGQAFAGAIAAQAJAAAGgGQAGgGAAgNIAAjCIAlAAIAADAQAAAPgEAMQgEALgHAJQgHAHgMAEQgLAEgOABQgNgBgMgEg");
	this.shape_12.setTransform(85.8,16.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgZB9QgLgEgIgJQgPgQAAgfIAAiCQAAgeAPgRQAIgHALgFQAMgEANAAQAdAAAQAQQAHAJAEALQAEAMAAAPIAACCQAAAQgEALQgEANgHAHQgIAJgLAEQgLAEgPAAQgNAAgMgEgAgOhWQgFAFAAAOIAACHQAAAOAFAFQAGAGAIAAQAJAAAGgGQAGgFAAgOIAAiHQAAgOgGgFQgGgGgJAAQgIAAgGAGg");
	this.shape_13.setTransform(71.5,16.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgTB+IAAj7IAnAAIAAD7g");
	this.shape_14.setTransform(61,16.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgZB9QgLgEgHgJQgPgQAAgfIAAiCQAAgeAPgRQAHgHALgFQAMgEANAAQAeAAAPAQQAHAJADALQAEAMAAAPIAAAZIglAAIAAgbQAAgOgGgFQgFgGgKAAQgIAAgGAGQgFAFAAAOIAACHQAAANAFAGQAGAFAIAAQAKAAAFgFQAGgGAAgNIAAgkIAlAAIAAAhQAAAQgEALQgDANgHAHQgIAJgLAEQgMAEgOAAQgNAAgMgEg");
	this.shape_15.setTransform(50.7,16.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAdB+IgGgtIgwAAIgHAtIgkAAIAoj7IA5AAIAoD7gAARAuIgSh+IgTB+IAlAAg");
	this.shape_16.setTransform(36.4,16.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ag6B+IAAj7IA6AAQAdAAAPAQQAPAPAAAgIAAAgQAAAegPAPQgHAIgLAFQgMADgOAAIgSAAIAABfgAgSgEIASAAQAJAAAFgEQAFgGAAgNIAAgnQAAgNgFgFQgFgFgJAAIgSAAg");
	this.shape_17.setTransform(22.8,16.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgZB9QgKgEgJgJQgOgQAAgfIAAgRIAlAAIAAAUQAAANAGAGQAFAFAKAAQAIAAAGgFQAFgGAAgNQAAgNgFgKQgHgJgHgJIgTgSIgSgSQgIgLgHgNQgFgNAAgTQAAgeAOgRQAPgQAcAAQAeAAAOAQQAPARAAAeIAAAKIgmAAIAAgMQAAgOgFgFQgFgGgKAAQgIAAgFAGQgGAFAAAOQABANAFAKQAGAJAHAKIATARIATATQAIAKAGANQAGAOAAARQAAAQgEALQgEANgHAHQgIAJgLAEQgLAEgOAAQgOAAgLgEg");
	this.shape_18.setTransform(8.8,16.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol21, new cjs.Rectangle(0,0,265.3,40), null);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag8B+IAAj7IA+AAQAeAAAOAQQAPAPAAAgIAAB+QAAAfgPAPQgHAIgLAEQgLAEgPAAgAgUBaIAVAAQAJAAAGgGQAFgFAAgOIAAiCQAAgNgFgGQgGgFgJAAIgVAAg");
	this.shape.setTransform(379.3,16.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgzB+IAAj7IAnAAIAADXIBAAAIAAAkg");
	this.shape_1.setTransform(366.2,16.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAVB+IgBgFIgBgFIgBgIIAAgNIAAgnQAAgSgHgIQgFgGgNgBIgOAAIAABnIgnAAIAAj7IA7AAQAOAAAMADQALAEAHAHQAHAIAEAKQADAMAAAOIAAAUQAAATgHANQgGANgNAFQAHADAGAFQAFAFADAHQAFAOAAATIAAAnIABARIAEAOgAgVgMIAPAAQAKAAAHgFQAGgGAAgPIAAgZQAAgOgFgGQgEgGgKAAIgTAAg");
	this.shape_2.setTransform(352.7,16.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgZB9QgLgEgIgJQgPgQAAgfIAAiCQAAgeAPgRQAIgHALgFQAMgEANAAQAdAAAQAQQAHAJAEALQAEAMAAAPIAACCQAAAQgEALQgEANgHAHQgIAJgLAEQgLAEgPAAQgNAAgMgEgAgOhWQgFAFAAAOIAACHQAAAOAFAFQAGAGAIAAQAJAAAGgGQAGgFAAgOIAAiHQAAgOgGgFQgGgGgJAAQgIAAgGAGg");
	this.shape_3.setTransform(337.9,16.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAPB+IgOiFIgNCFIg3AAIgcj7IAnAAIAVDGIATjGIAlAAIAUDHIAVjHIAiAAIgcD7g");
	this.shape_4.setTransform(320.7,16.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag1B+IAAj7IBrAAIAAAkIhEAAIAABHIA2AAIAAAiIg2AAIAABKIBEAAIAAAkg");
	this.shape_5.setTransform(298.7,16.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAWB+IAAhsIgsAAIAABsIgnAAIAAj7IAnAAIAABsIAsAAIAAhsIApAAIAAD7g");
	this.shape_6.setTransform(284.2,16.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgTB+IAAjXIgpAAIAAgkIB5AAIAAAkIgpAAIAADXg");
	this.shape_7.setTransform(270,16.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAWB+Igwi2IAAC2IgkAAIAAj7IAyAAIAoCWIAAiWIAjAAIAAD7g");
	this.shape_8.setTransform(250.3,16.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgTB+IAAj7IAnAAIAAD7g");
	this.shape_9.setTransform(239.2,16.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgzB+IAAj7IAnAAIAADXIBAAAIAAAkg");
	this.shape_10.setTransform(224.7,16.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag1B+IAAj7IBrAAIAAAkIhDAAIAABHIA1AAIAAAiIg1AAIAABKIBDAAIAAAkg");
	this.shape_11.setTransform(211.7,16.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag1B+IAAj7IBrAAIAAAkIhDAAIAABHIA1AAIAAAiIg1AAIAABKIBDAAIAAAkg");
	this.shape_12.setTransform(198.5,16.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAWB+IAAhsIgsAAIAABsIgoAAIAAj7IAoAAIAABsIAsAAIAAhsIAoAAIAAD7g");
	this.shape_13.setTransform(184,16.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAPB+IgOiFIgNCFIg3AAIgcj7IAnAAIAVDGIATjGIAlAAIAUDHIAVjHIAiAAIgcD7g");
	this.shape_14.setTransform(166.1,16.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAWB+Igwi2IAAC2IgkAAIAAj7IAyAAIAoCWIAAiWIAjAAIAAD7g");
	this.shape_15.setTransform(142.8,16.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgZB9QgLgEgIgJQgPgQAAgfIAAiCQAAgeAPgRQAIgHALgFQAMgEANAAQAdAAAQAQQAHAJAEALQAEAMAAAPIAACCQAAAQgEALQgEANgHAHQgIAJgLAEQgLAEgPAAQgNAAgMgEgAgOhWQgFAFAAAOIAACHQAAAOAFAFQAGAGAIAAQAJAAAGgGQAGgFAAgOIAAiHQAAgOgGgFQgGgGgJAAQgIAAgGAGg");
	this.shape_16.setTransform(128,16.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgTB+IAAj7IAnAAIAAD7g");
	this.shape_17.setTransform(117.5,16.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgTB+IAAjXIgpAAIAAgkIB5AAIAAAkIgpAAIAADXg");
	this.shape_18.setTransform(107.6,16.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAdB+IgGgtIgwAAIgHAtIgkAAIAoj7IA5AAIAoD7gAARAuIgSh+IgTB+IAlAAg");
	this.shape_19.setTransform(93.8,16.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgcB+Igoj7IApAAIAcDNIAfjNIAlAAIgoD7g");
	this.shape_20.setTransform(79.3,16.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAVB+IgBgFIgCgFIAAgIIgBgNIAAgnQAAgSgFgIQgHgGgNgBIgNAAIAABnIgnAAIAAj7IA7AAQAPAAALADQALAEAHAHQAHAIADAKQAEAMAAAOIAAAUQAAATgHANQgGANgNAFQAIADAEAFQAGAFACAHQAGAOAAATIAAAnIABARIADAOgAgVgMIAQAAQAJAAAHgFQAGgGAAgPIAAgZQAAgOgEgGQgGgGgJAAIgTAAg");
	this.shape_21.setTransform(65.2,16.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("Ag1B+IAAj7IBrAAIAAAkIhDAAIAABHIA1AAIAAAiIg1AAIAABKIBDAAIAAAkg");
	this.shape_22.setTransform(51.2,16.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgZB9QgLgEgHgJQgPgQAAgfIAAgRIAlAAIAAAUQAAANAGAGQAGAFAJAAQAIAAAFgFQAHgGgBgNQABgNgHgKQgFgJgIgJIgSgSIgTgSQgJgLgGgNQgFgNAAgTQAAgeAOgRQAPgQAcAAQAeAAAOAQQAOARAAAeIAAAKIglAAIAAgMQAAgOgFgFQgFgGgKAAQgIAAgGAGQgEAFAAAOQgBANAGAKQAGAJAHAKIATARIASATQAKAKAFANQAGAOAAARQAAAQgEALQgDANgIAHQgIAJgKAEQgMAEgOAAQgOAAgLgEg");
	this.shape_23.setTransform(37.7,16.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("Ag8B+IAAj7IA7AAQAPAAALADQALAEAHAHQAHAIAEAKQADAMAAAOIAAAJQAAATgGANQgGAMgOAHQAJADAFAEQAGAFADAGQAHAOAAAVIAAAUQAAAegPAOQgIAJgLADQgLAEgPAAgAgVBaIAWAAQAKAAAFgGQAFgFAAgOIAAgWQAAgRgGgHQgFgGgNgBIgSAAgAgVgXIAQAAQAKAAAGgFQAGgGAAgPIAAgOQAAgOgEgGQgFgGgKAAIgTAAg");
	this.shape_24.setTransform(23.9,16.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgZB9QgLgEgIgJQgPgQAAgfIAAiCQAAgeAPgRQAIgHALgFQAMgEANAAQAdAAAQAQQAHAJAEALQAEAMAAAPIAACCQAAAQgEALQgEANgHAHQgIAJgLAEQgLAEgPAAQgNAAgMgEgAgOhWQgFAFAAAOIAACHQAAAOAFAFQAGAGAIAAQAJAAAGgGQAGgFAAgOIAAiHQAAgOgGgFQgGgGgJAAQgIAAgGAGg");
	this.shape_25.setTransform(9.2,16.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(0,0,388.5,40), null);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgTB+IAAjXIgpAAIAAgkIB5AAIAAAkIgpAAIAADXg");
	this.shape.setTransform(255.3,16.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgZB9QgKgEgJgJQgOgQAAgfIAAgRIAlAAIAAAUQAAANAGAGQAGAFAJAAQAIAAAGgFQAFgGAAgNQAAgNgFgKQgHgJgHgJIgSgSIgTgSQgIgLgHgNQgFgNAAgTQAAgeAOgRQAPgQAcAAQAdAAAPAQQAPARAAAeIAAAKIgmAAIAAgMQAAgOgFgFQgGgGgJAAQgIAAgFAGQgGAFABAOQAAANAFAKQAGAJAHAKIATARIASATQAKAKAFANQAGAOAAARQAAAQgEALQgEANgHAHQgHAJgLAEQgLAEgPAAQgOAAgLgEg");
	this.shape_1.setTransform(242.2,16.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag1B+IAAj7IBrAAIAAAkIhDAAIAABHIA1AAIAAAiIg1AAIAABKIBDAAIAAAkg");
	this.shape_2.setTransform(229.1,16.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgYB9QgLgEgIgJQgPgQAAgfIAAiCQAAgeAPgRQAIgHALgFQALgEANAAQAdAAAQAQQAHAJAEALQADAMAAAPIAAAZIglAAIAAgbQAAgOgGgFQgGgGgIAAQgJAAgGAGQgFAFAAAOIAACHQAAANAFAGQAGAFAJAAQAIAAAGgFQAGgGAAgNIAAgvIgSAAIAAgjIA3AAIAABPQAAAQgDALQgEANgHAHQgIAJgLAEQgMAEgOAAQgNAAgLgEg");
	this.shape_3.setTransform(215.2,16.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAVB+IgBgFIgBgFIgBgIIAAgNIAAgnQgBgSgFgIQgGgGgNgBIgOAAIAABnIgnAAIAAj7IA7AAQAOAAAMADQALAEAHAHQAHAIAEAKQADAMAAAOIAAAUQAAATgHANQgGANgNAFQAHADAGAFQAFAFACAHQAGAOAAATIAAAnIABARIAEAOgAgVgMIAPAAQALAAAGgFQAGgGAAgPIAAgZQAAgOgFgGQgEgGgKAAIgTAAg");
	this.shape_4.setTransform(201.4,16.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAdB+IgGgtIgwAAIgHAtIgkAAIAoj7IA5AAIAoD7gAARAuIgSh+IgTB+IAlAAg");
	this.shape_5.setTransform(186.4,16.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgzB+IAAj7IAnAAIAADXIBAAAIAAAkg");
	this.shape_6.setTransform(173.5,16.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgoB7QgIgDgGgHQgFgIgDgKQgCgLAAgOIAAgaQAAgTAGgNQAGgNAPgHQgbgLAAgoIAAgFQAAgfAOgPQAHgJAMgDQALgFAPAAIAsAAIAAAkIgsAAQgJABgFAFQgGAGAAANIAAAQQAAAPAGAFQAHAGALAAIAQAAIAAgcIAoAAIAAAcIAKAAIAAAjIgKAAIAABTIAAARIAEANIgoAAIgCgHIgCgMQgKAXgaAAQgLgBgIgEgAgTASQgGAHAAASIAAAYQAAANAGAGQAFAGAKAAQAIgBAFgFQAFgEABgNIAAg6IgPAAQgNAAgGAHg");
	this.shape_7.setTransform(154.4,16.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgTB+IAAjXIgpAAIAAgkIB5AAIAAAkIgpAAIAADXg");
	this.shape_8.setTransform(134.4,16.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgZB9QgKgEgJgJQgOgQAAgfIAAgRIAlAAIAAAUQAAANAGAGQAFAFAKAAQAIAAAGgFQAFgGAAgNQAAgNgFgKQgHgJgHgJIgSgSIgTgSQgIgLgHgNQgFgNAAgTQAAgeAOgRQAPgQAcAAQAdAAAPAQQAPARAAAeIAAAKIgmAAIAAgMQAAgOgFgFQgGgGgJAAQgIAAgFAGQgGAFAAAOQABANAFAKQAGAJAHAKIATARIASATQAJAKAGANQAGAOAAARQAAAQgEALQgDANgIAHQgHAJgLAEQgMAEgOAAQgOAAgLgEg");
	this.shape_9.setTransform(121.2,16.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag1B+IAAj7IBrAAIAAAkIhDAAIAABHIA1AAIAAAiIg1AAIAABKIBDAAIAAAkg");
	this.shape_10.setTransform(108.1,16.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgzB+IAAj7IAnAAIAADXIBAAAIAAAkg");
	this.shape_11.setTransform(95.7,16.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgzB+IAAj7IAnAAIAADXIBAAAIAAAkg");
	this.shape_12.setTransform(83.4,16.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAdB+IgGgtIgwAAIgHAtIgkAAIAoj7IA5AAIAoD7gAARAuIgSh+IgTB+IAlAAg");
	this.shape_13.setTransform(69.4,16.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgTB+IAAjXIgpAAIAAgkIB5AAIAAAkIgpAAIAADXg");
	this.shape_14.setTransform(55.6,16.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag1B+IAAj7IBrAAIAAAkIhDAAIAABHIA1AAIAAAiIg1AAIAABKIBDAAIAAAkg");
	this.shape_15.setTransform(37.3,16.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAWB+IAAhsIgsAAIAABsIgoAAIAAj7IAoAAIAABsIAsAAIAAhsIAoAAIAAD7g");
	this.shape_16.setTransform(22.8,16.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgTB+IAAjXIgpAAIAAgkIB5AAIAAAkIgpAAIAADXg");
	this.shape_17.setTransform(8.6,16.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(0,0,263.9,40), null);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNAlIAKgkIgPAAIAAglIAlAAIAAAiIgRAng");
	this.shape.setTransform(208,28.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgTB+IAAj7IAnAAIAAD7g");
	this.shape_1.setTransform(201.3,16.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAdB+IgGgtIgwAAIgHAtIgkAAIAoj7IA5AAIAoD7gAARAuIgSh+IgTB+IAlAAg");
	this.shape_2.setTransform(190.5,16.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag8B+IAAj7IA7AAQAPAAALADQALAEAHAHQAHAIAEAKQADAMAAAOIAAAJQAAATgGANQgGAMgOAHQAJADAFAEQAGAFADAGQAHAOAAAVIAAAUQAAAegPAOQgIAJgLADQgLAEgPAAgAgVBaIAWAAQAKAAAFgGQAFgFAAgOIAAgWQAAgRgGgHQgFgGgNgBIgSAAgAgVgXIAQAAQAKAAAGgFQAGgGAAgPIAAgOQAAgOgEgGQgFgGgKAAIgTAAg");
	this.shape_3.setTransform(176.2,16.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgYB7QgLgEgIgHQgPgRAAgeIAAjAIAnAAIAADCQAAANAHAGQAFAGAJAAQAIAAAGgGQAFgGABgNIAAjCIAlAAIAADAQAAAPgDAMQgFALgHAJQgHAHgMAEQgLAEgOABQgOgBgKgEg");
	this.shape_4.setTransform(161.5,16.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag8B+IAAj7IA+AAQAeAAAOAQQAPAPAAAgIAAB+QAAAfgPAPQgHAIgLAEQgLAEgPAAgAgUBaIAVAAQAJAAAGgGQAFgFAAgOIAAiCQAAgNgFgGQgGgFgJAAIgVAAg");
	this.shape_5.setTransform(147.2,16.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAWB+Igwi2IAAC2IgkAAIAAj7IAyAAIAoCWIAAiWIAjAAIAAD7g");
	this.shape_6.setTransform(126.4,16.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgTB+IAAj7IAnAAIAAD7g");
	this.shape_7.setTransform(115.4,16.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAdB+IgGgtIgwAAIgHAtIgkAAIAoj7IA5AAIAoD7gAARAuIgSh+IgTB+IAlAAg");
	this.shape_8.setTransform(104.6,16.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgZB9QgLgEgIgJQgPgQAAgfIAAiCQAAgeAPgRQAIgHALgFQAMgEANAAQAdAAAQAQQAHAJAEALQAEAMAAAPIAACCQAAAQgEALQgEANgHAHQgIAJgLAEQgLAEgPAAQgNAAgMgEgAgOhWQgFAFAAAOIAACHQAAAOAFAFQAGAGAIAAQAJAAAGgGQAGgFAAgOIAAiHQAAgOgGgFQgGgGgJAAQgIAAgGAGg");
	this.shape_9.setTransform(84.6,16.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgTB+IAAjXIgpAAIAAgkIB5AAIAAAkIgpAAIAADXg");
	this.shape_10.setTransform(71,16.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgTB+IAAjXIgpAAIAAgkIB5AAIAAAkIgpAAIAADXg");
	this.shape_11.setTransform(52.5,16.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAeB+IgghjIggBjIglAAIAsiBIgph6IApAAIAdBdIAehdIAlAAIgpB6IAsCBg");
	this.shape_12.setTransform(38.4,16.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag1B+IAAj7IBrAAIAAAkIhEAAIAABHIA2AAIAAAiIg2AAIAABKIBEAAIAAAkg");
	this.shape_13.setTransform(24.3,16.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAWB+Igwi2IAAC2IgkAAIAAj7IAyAAIAoCWIAAiWIAjAAIAAD7g");
	this.shape_14.setTransform(9.7,16.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(0,0,213.4,40), null);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgZB9QgLgEgIgJQgOgQAAgfIAAgRIAlAAIAAAUQAAANAGAGQAGAFAJAAQAIAAAGgFQAFgGABgNQgBgNgFgKQgHgJgHgJIgTgSIgSgSQgJgLgFgNQgGgNAAgTQAAgeAPgRQAOgQAcAAQAeAAAOAQQAPARAAAeIAAAKIgmAAIAAgMQAAgOgFgFQgGgGgJAAQgIAAgFAGQgFAFgBAOQAAANAGAKQAGAJAIAKIASARIATATQAIAKAGANQAGAOAAARQAAAQgEALQgEANgHAHQgIAJgLAEQgLAEgOAAQgOAAgLgEg");
	this.shape.setTransform(171.8,16.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAVB+IgBgFIgCgFIAAgIIgBgNIAAgnQAAgSgFgIQgHgGgNgBIgNAAIAABnIgoAAIAAj7IA8AAQAPAAALADQALAEAHAHQAHAIADAKQAEAMAAAOIAAAUQAAATgGANQgHANgNAFQAIADAEAFQAGAFACAHQAGAOAAATIAAAnIABARIADAOgAgVgMIAQAAQAJAAAHgFQAGgGAAgPIAAgZQAAgOgEgGQgGgGgJAAIgTAAg");
	this.shape_1.setTransform(158.2,16.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag1B+IAAj7IBrAAIAAAkIhDAAIAABHIA1AAIAAAiIg1AAIAABKIBDAAIAAAkg");
	this.shape_2.setTransform(144.3,16.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgTB+IAAjXIgpAAIAAgkIB5AAIAAAkIgpAAIAADXg");
	this.shape_3.setTransform(130.9,16.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAdB+IgGgtIgwAAIgHAtIgkAAIAoj7IA5AAIAoD7gAARAuIgSh+IgTB+IAlAAg");
	this.shape_4.setTransform(117.1,16.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAPB+IgOiFIgNCFIg3AAIgcj7IAnAAIAVDGIATjGIAlAAIAUDHIAVjHIAiAAIgcD7g");
	this.shape_5.setTransform(99.7,16.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag1B+IAAj7IBrAAIAAAkIhEAAIAABHIA2AAIAAAiIg2AAIAABKIBEAAIAAAkg");
	this.shape_6.setTransform(83.2,16.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgYB7QgLgEgIgHQgPgRAAgeIAAjAIAnAAIAADCQAAANAHAGQAFAGAJAAQAIAAAGgGQAFgGABgNIAAjCIAlAAIAADAQAAAPgDAMQgFALgHAJQgHAHgMAEQgLAEgOABQgOgBgKgEg");
	this.shape_7.setTransform(69.2,16.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgzB+IAAj7IAnAAIAADXIBAAAIAAAkg");
	this.shape_8.setTransform(56.5,16.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag8B+IAAj7IA7AAQAPAAALADQALAEAHAHQAHAIAEAKQADAMAAAOIAAAJQAAATgGANQgGAMgOAHQAJADAFAEQAGAFADAGQAHAOAAAVIAAAUQAAAegPAOQgIAJgLADQgLAEgPAAgAgVBaIAWAAQAKAAAFgGQAFgFAAgOIAAgWQAAgRgGgHQgFgGgNgBIgSAAgAgVgXIAQAAQAKAAAGgFQAGgGAAgPIAAgOQAAgOgEgGQgFgGgKAAIgTAAg");
	this.shape_9.setTransform(42.8,16.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgTB+IAAjXIgpAAIAAgkIB5AAIAAAkIgpAAIAADXg");
	this.shape_10.setTransform(23.2,16.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAdB+IgGgtIgwAAIgHAtIgkAAIAoj7IA5AAIAoD7gAARAuIgSh+IgTB+IAlAAg");
	this.shape_11.setTransform(9.4,16.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(0,0,180.6,40), null);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgZB9QgKgEgIgJQgPgQAAgfIAAgRIAlAAIAAAUQAAANAGAGQAFAFAKAAQAIAAAFgFQAHgGAAgNQAAgNgHgKQgFgJgIgJIgSgSIgTgSQgJgLgFgNQgGgNAAgTQAAgeAPgRQAOgQAcAAQAdAAAPAQQAOARAAAeIAAAKIglAAIAAgMQAAgOgFgFQgFgGgKAAQgIAAgGAGQgEAFAAAOQgBANAGAKQAGAJAIAKIASARIASATQAKAKAFANQAGAOAAARQAAAQgEALQgDANgIAHQgIAJgKAEQgMAEgOAAQgOAAgLgEg");
	this.shape.setTransform(232.4,16.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgZB9QgKgEgJgJQgOgQAAgfIAAgRIAlAAIAAAUQAAANAGAGQAFAFAKAAQAIAAAGgFQAFgGAAgNQAAgNgFgKQgHgJgHgJIgTgSIgSgSQgIgLgHgNQgFgNAAgTQAAgeAOgRQAPgQAcAAQAeAAAOAQQAPARAAAeIAAAKIgmAAIAAgMQAAgOgFgFQgFgGgKAAQgIAAgFAGQgGAFAAAOQABANAFAKQAGAJAHAKIATARIATATQAIAKAGANQAGAOAAARQAAAQgEALQgEANgHAHQgIAJgLAEQgLAEgOAAQgOAAgLgEg");
	this.shape_1.setTransform(219,16.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag1B+IAAj7IBrAAIAAAkIhEAAIAABHIA2AAIAAAiIg2AAIAABKIBEAAIAAAkg");
	this.shape_2.setTransform(205.9,16.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAVB+IgBgFIgBgFIgBgIIgBgNIAAgnQAAgSgFgIQgHgGgMgBIgOAAIAABnIgnAAIAAj7IA7AAQAOAAAMADQALAEAHAHQAHAIADAKQAEAMAAAOIAAAUQAAATgHANQgGANgNAFQAIADAEAFQAGAFACAHQAGAOAAATIAAAnIABARIADAOgAgVgMIAQAAQAKAAAGgFQAGgGAAgPIAAgZQAAgOgEgGQgGgGgJAAIgTAAg");
	this.shape_3.setTransform(192.2,16.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag8B+IAAj7IA+AAQAeAAAOAQQAPAPAAAgIAAB+QAAAfgPAPQgHAIgLAEQgLAEgPAAgAgUBaIAVAAQAJAAAGgGQAFgFAAgOIAAiCQAAgNgFgGQgGgFgJAAIgVAAg");
	this.shape_4.setTransform(177.4,16.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAdB+IgGgtIgwAAIgHAtIgkAAIAoj7IA5AAIAoD7gAARAuIgSh+IgTB+IAlAAg");
	this.shape_5.setTransform(162.6,16.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgTB+IAAjXIgpAAIAAgkIB5AAIAAAkIgpAAIAADXg");
	this.shape_6.setTransform(143.2,16.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAWB+Igwi2IAAC2IgkAAIAAj7IAyAAIAoCWIAAiWIAjAAIAAD7g");
	this.shape_7.setTransform(129.1,16.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgZB9QgLgEgIgJQgPgQAAgfIAAiCQAAgeAPgRQAIgHALgFQAMgEANAAQAdAAAQAQQAHAJAEALQAEAMAAAPIAACCQAAAQgEALQgEANgHAHQgIAJgLAEQgLAEgPAAQgNAAgMgEgAgOhWQgFAFAAAOIAACHQAAAOAFAFQAGAGAIAAQAJAAAGgGQAGgFAAgOIAAiHQAAgOgGgFQgGgGgJAAQgIAAgGAGg");
	this.shape_8.setTransform(114.3,16.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAVB+IgBgFIgBgFIgBgIIAAgNIAAgnQAAgSgHgIQgFgGgOgBIgNAAIAABnIgoAAIAAj7IA8AAQAOAAAMADQALAEAHAHQAHAIAEAKQADAMAAAOIAAAUQAAATgGANQgHANgNAFQAHADAGAFQAFAFADAHQAFAOAAATIAAAnIABARIAEAOgAgVgMIAPAAQAKAAAHgFQAGgGAAgPIAAgZQAAgOgFgGQgEgGgKAAIgTAAg");
	this.shape_9.setTransform(100.3,16.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgzB+IAAj7IBnAAIAAAkIhAAAIAABMIAyAAIAAAjIgyAAIAABog");
	this.shape_10.setTransform(87,16.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAVB+IgBgFIgCgFIAAgIIgBgNIAAgnQABgSgHgIQgGgGgNgBIgNAAIAABnIgoAAIAAj7IA8AAQAPAAALADQALAEAHAHQAHAIADAKQAEAMAAAOIAAAUQAAATgGANQgHANgNAFQAIADAEAFQAGAFADAHQAFAOAAATIAAAnIABARIAEAOgAgVgMIAPAAQAKAAAHgFQAGgGAAgPIAAgZQAAgOgEgGQgGgGgJAAIgTAAg");
	this.shape_11.setTransform(73.5,16.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag1B+IAAj7IBrAAIAAAkIhDAAIAABHIA1AAIAAAiIg1AAIAABKIBDAAIAAAkg");
	this.shape_12.setTransform(59.6,16.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgTB+IAAjXIgpAAIAAgkIB5AAIAAAkIgpAAIAADXg");
	this.shape_13.setTransform(46.2,16.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAdB+IgGgtIgwAAIgHAtIgkAAIAoj7IA5AAIAoD7gAARAuIgSh+IgTB+IAlAAg");
	this.shape_14.setTransform(32.4,16.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAPB+IgOiFIgNCFIg3AAIgcj7IAnAAIAVDGIATjGIAlAAIAUDHIAVjHIAiAAIgcD7g");
	this.shape_15.setTransform(15,16.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(0,0,244,40), null);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgZB9QgLgEgHgJQgPgQAAgfIAAiCQAAgeAPgRQAHgHALgFQALgEAOAAQAeAAAPAQQAHAJADALQAEAMAAAPIAAAZIglAAIAAgbQAAgOgGgFQgFgGgKAAQgIAAgFAGQgGAFAAAOIAACHQAAANAGAGQAFAFAIAAQAKAAAFgFQAGgGAAgNIAAgvIgSAAIAAgjIA3AAIAABPQAAAQgEALQgDANgHAHQgIAJgLAEQgLAEgPAAQgOAAgLgEg");
	this.shape.setTransform(125.6,16.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAWB+Igwi2IAAC2IgkAAIAAj7IAyAAIAoCWIAAiWIAjAAIAAD7g");
	this.shape_1.setTransform(110.9,16.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgTB+IAAj7IAnAAIAAD7g");
	this.shape_2.setTransform(99.9,16.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAWB+Igwi2IAAC2IgkAAIAAj7IAyAAIAoCWIAAiWIAjAAIAAD7g");
	this.shape_3.setTransform(88.8,16.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAWB+Igwi2IAAC2IgkAAIAAj7IAyAAIAoCWIAAiWIAjAAIAAD7g");
	this.shape_4.setTransform(73.4,16.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgYB7QgLgEgIgHQgPgRAAgeIAAjAIAnAAIAADCQABANAFAGQAGAGAJAAQAIAAAGgGQAFgGAAgNIAAjCIAmAAIAADAQAAAPgDAMQgFALgHAJQgHAHgMAEQgKAEgPABQgNgBgLgEg");
	this.shape_5.setTransform(58.6,16.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgTB+IAAjXIgpAAIAAgkIB5AAIAAAkIgpAAIAADXg");
	this.shape_6.setTransform(45,16.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgZB9QgLgEgHgJQgPgQAAgfIAAgRIAlAAIAAAUQAAANAGAGQAGAFAJAAQAIAAAFgFQAHgGgBgNQABgNgHgKQgFgJgIgJIgSgSIgTgSQgJgLgGgNQgFgNAAgTQAAgeAOgRQAPgQAcAAQAeAAAOAQQAOARAAAeIAAAKIglAAIAAgMQAAgOgFgFQgFgGgKAAQgIAAgGAGQgEAFAAAOQgBANAGAKQAGAJAIAKIASARIASATQAKAKAFANQAGAOAAARQAAAQgEALQgDANgIAHQgIAJgKAEQgMAEgOAAQgOAAgLgEg");
	this.shape_7.setTransform(31.8,16.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAdB+IgGgtIgwAAIgHAtIgkAAIAoj7IA5AAIAoD7gAARAuIgSh+IgTB+IAlAAg");
	this.shape_8.setTransform(12.2,16.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(0,0,137.5,40), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AAWB+Igwi2IAAC2IgkAAIAAj7IAyAAIAoCWIAAiWIAjAAIAAD7g");
	this.shape.setTransform(280.4,16.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAdB+IgGgtIgwAAIgHAtIgkAAIAoj7IA5AAIAoD7gAARAuIgSh+IgTB+IAlAAg");
	this.shape_1.setTransform(265.4,16.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgzB+IAAj7IAnAAIAADXIBAAAIAAAkg");
	this.shape_2.setTransform(252.5,16.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag6B+IAAj7IA6AAQAdAAAPAQQAPAPAAAgIAAAgQAAAegPAPQgHAIgLAFQgMADgOAAIgSAAIAABfgAgSgEIASAAQAJAAAFgEQAFgGAAgNIAAgnQAAgNgFgFQgFgFgJAAIgSAAg");
	this.shape_3.setTransform(239.6,16.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgTB+IAAjXIgpAAIAAgkIB5AAIAAAkIgpAAIAADXg");
	this.shape_4.setTransform(220.3,16.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAWB+Igwi2IAAC2IgkAAIAAj7IAyAAIAoCWIAAiWIAjAAIAAD7g");
	this.shape_5.setTransform(206.1,16.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag1B+IAAj7IBrAAIAAAkIhEAAIAABHIA2AAIAAAiIg2AAIAABKIBEAAIAAAkg");
	this.shape_6.setTransform(192.1,16.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAuB+IAAizIgcCzIgkAAIgeixIAACxIgiAAIAAj7IA3AAIAcCyIAbiyIA3AAIAAD7g");
	this.shape_7.setTransform(175.5,16.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgTB+IAAhUIgyinIAqAAIAdBzIAehzIAmAAIgyCnIAABUg");
	this.shape_8.setTransform(158.7,16.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAdB+IgGgtIgwAAIgHAtIgkAAIAoj7IA5AAIAoD7gAARAuIgSh+IgTB+IAlAAg");
	this.shape_9.setTransform(144.2,16.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag6B+IAAj7IA6AAQAdAAAPAQQAPAPAAAgIAAAgQAAAegPAPQgHAIgLAFQgMADgOAAIgSAAIAABfgAgSgEIASAAQAJAAAFgEQAFgGAAgNIAAgnQAAgNgFgFQgFgFgJAAIgSAAg");
	this.shape_10.setTransform(130.7,16.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAuB+QgIgDgEgFQgKgLAAgTIAAhSQAAgKACgHQADgHAFgFQAJgLATAAQAJAAAIADQAHACAEAGQAGAFACAHQADAHAAAKIAABSQAAATgLALQgEAFgHADQgIADgJAAQgJAAgHgDgAAyAEIAABWQAAAHACAFQAEADAGABQAHgBADgDQADgEABgIIAAhWQgBgIgDgEQgDgDgHAAQgNgBABAQgAg+B9IBjj7IAXAAIhiD7gAhOAhQgHgDgFgFQgKgLAAgSIAAhTQAAgJACgIQADgHAFgGQAJgLATAAQAKAAAHADQAHADAFAFQAEAGADAHQADAIAAAJIAABTQAAASgKALQgFAFgHADQgHACgKAAQgJAAgHgCgAhKhZIAABXQAAAGACAEQAEAFAGAAQAHAAADgFQADgDABgHIAAhXQgBgIgDgEQgDgDgHAAQgNAAABAPg");
	this.shape_11.setTransform(106.6,16.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgZB7QgLgEgHgIQgPgRAAgeIAAgVIAmAAIAAAYQgBANAGAGQAGAFAJAAQAJAAAFgFQAFgGAAgNIAAg4QAAgNgFgFQgFgFgJAAQgJAAgGAFQgGAFABANIAAAHIgmAAIAHiRIBoAAIAAAkIhEAAIgDA9QALgSAXAAQAVAAALAOQAFAIADAKQADALAAANIAAA4QAAAPgEAMQgDAMgIAIQgHAIgLAEQgLAEgPABQgOgBgLgEg");
	this.shape_12.setTransform(88.2,16.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgmB+IA5jXIhNAAIAAgkIB1AAIAAAjIg6DYg");
	this.shape_13.setTransform(73.9,16.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhCB+IBij7IAjAAIhjD7g");
	this.shape_14.setTransform(59.9,16.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAuB+QgHgDgFgFQgKgLAAgTIAAhSQAAgKADgHQACgHAFgFQAJgLAUAAQAJAAAHADQAHACAEAGQAFAFADAHQADAHgBAKIAABSQABATgLALQgEAFgHADQgHADgJAAQgKAAgHgDgAAxAEIAABWQABAHADAFQADADAHABQAFgBAEgDQAEgEgBgIIAAhWQABgIgEgEQgEgDgFAAQgOgBAAAQgAg+B9IBjj7IAXAAIhiD7gAhOAhQgHgDgFgFQgJgLAAgSIAAhTQAAgJACgIQACgHAFgGQAKgLASAAQAKAAAHADQAHADAFAFQAEAGADAHQADAIgBAJIAABTQAAASgJALQgFAFgHADQgHACgKAAQgJAAgHgCgAhKhZIAABXQAAAGADAEQADAFAGAAQAGAAAEgFQADgDAAgHIAAhXQAAgIgDgEQgEgDgGAAQgMAAAAAPg");
	this.shape_15.setTransform(41.8,16.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgYB7QgLgEgIgIQgPgRAAgeIAAgVIAlAAIAAAYQABANAFAGQAGAFAJAAQAJAAAFgFQAGgGAAgNIAAg4QAAgNgGgFQgFgFgJAAQgJAAgGAFQgFAFgBANIAAAHIglAAIAIiRIBnAAIAAAkIhEAAIgEA9QAMgSAWAAQAWAAALAOQAGAIADAKQACALAAANIAAA4QAAAPgDAMQgFAMgHAIQgHAIgMAEQgKAEgPABQgOgBgKgEg");
	this.shape_16.setTransform(23.4,16.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ag6B/IAAgeQAAgTAFgOQAGgOAJgMIATgVIATgWQAIgLAGgNQAFgOABgTQAAgQgGgGQgGgHgIABQgJgBgGAHQgFAFgBAOIAAAbIglAAIAAgZQAAgfAPgQQAHgIAMgFQAKgDAOAAQAdAAAPAQQAHAIAEAMQAEALAAAQQAAAUgHARQgFARgKAMQgJAOgLALIgTAWQgJAKgEAKQgFAKABALIBLAAIAAAkg");
	this.shape_17.setTransform(9.4,16.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,290.3,40), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgZB9QgLgEgHgJQgPgQAAgfIAAiCQAAgeAPgRQAHgHALgFQAMgEANAAQAeAAAPAQQAHAJADALQAEAMAAAPIAAAZIglAAIAAgbQAAgOgGgFQgFgGgKAAQgIAAgGAGQgFAFAAAOIAACHQAAANAFAGQAGAFAIAAQAKAAAFgFQAGgGAAgNIAAgvIgSAAIAAgjIA3AAIAABPQAAAQgEALQgDANgHAHQgIAJgLAEQgMAEgOAAQgNAAgMgEg");
	this.shape.setTransform(269.9,16.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAWB+Igwi2IAAC2IgkAAIAAj7IAyAAIAoCWIAAiWIAjAAIAAD7g");
	this.shape_1.setTransform(255.2,16.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgTB+IAAj7IAnAAIAAD7g");
	this.shape_2.setTransform(244.1,16.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgcB+Igoj7IApAAIAcDNIAfjNIAlAAIgoD7g");
	this.shape_3.setTransform(233.5,16.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgTB+IAAj7IAnAAIAAD7g");
	this.shape_4.setTransform(222.9,16.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgzB+IAAj7IAnAAIAADXIBAAAIAAAkg");
	this.shape_5.setTransform(213.9,16.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag8B+IAAj7IA+AAQAeAAAOAQQAPAPAAAgIAAB+QAAAfgPAPQgHAIgLAEQgLAEgPAAgAgUBaIAVAAQAJAAAGgGQAFgFAAgOIAAiCQAAgNgFgGQgGgFgJAAIgVAAg");
	this.shape_6.setTransform(194.5,16.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAWB+Igwi2IAAC2IgkAAIAAj7IAyAAIAoCWIAAiWIAjAAIAAD7g");
	this.shape_7.setTransform(179.3,16.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAdB+IgGgtIgwAAIgHAtIgkAAIAoj7IA5AAIAoD7gAARAuIgSh+IgTB+IAlAAg");
	this.shape_8.setTransform(164.3,16.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgzB+IAAj7IAnAAIAADXIBAAAIAAAkg");
	this.shape_9.setTransform(151.4,16.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgZB9QgLgEgIgJQgOgQAAgfIAAgRIAlAAIAAAUQAAANAGAGQAGAFAJAAQAIAAAGgFQAFgGABgNQgBgNgFgKQgHgJgHgJIgTgSIgSgSQgJgLgFgNQgGgNAAgTQAAgeAPgRQAOgQAcAAQAeAAAOAQQAPARAAAeIAAAKIgmAAIAAgMQAAgOgFgFQgGgGgJAAQgIAAgFAGQgFAFgBAOQAAANAGAKQAGAJAIAKIASARIATATQAIAKAGANQAGAOAAARQAAAQgEALQgEANgHAHQgIAJgLAEQgLAEgOAAQgOAAgLgEg");
	this.shape_10.setTransform(138.1,16.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgTB+IAAj7IAnAAIAAD7g");
	this.shape_11.setTransform(127.9,16.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag1B+IAAj7IBrAAIAAAkIhDAAIAABHIA1AAIAAAiIg1AAIAABKIBDAAIAAAkg");
	this.shape_12.setTransform(112.6,16.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgdB+Igmj7IAnAAIAeDNIAejNIAkAAIgmD7g");
	this.shape_13.setTransform(98.6,16.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgTB+IAAj7IAnAAIAAD7g");
	this.shape_14.setTransform(87.9,16.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgZB9QgKgEgJgJQgOgQAAgfIAAgRIAlAAIAAAUQAAANAGAGQAGAFAJAAQAIAAAFgFQAHgGgBgNQABgNgHgKQgFgJgIgJIgSgSIgTgSQgIgLgHgNQgFgNAAgTQAAgeAOgRQAPgQAcAAQAeAAAOAQQAOARAAAeIAAAKIglAAIAAgMQAAgOgFgFQgGgGgJAAQgIAAgGAGQgEAFAAAOQAAANAFAKQAGAJAHAKIATARIASATQAKAKAFANQAGAOAAARQAAAQgEALQgEANgHAHQgHAJgLAEQgLAEgPAAQgOAAgLgEg");
	this.shape_15.setTransform(77.8,16.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgYB7QgLgEgIgHQgPgRAAgeIAAjAIAnAAIAADCQABANAFAGQAGAGAJAAQAIAAAGgGQAFgGABgNIAAjCIAlAAIAADAQAAAPgDAMQgFALgHAJQgHAHgMAEQgKAEgPABQgOgBgKgEg");
	this.shape_16.setTransform(63.9,16.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgzB+IAAj7IAnAAIAADXIBAAAIAAAkg");
	this.shape_17.setTransform(51.2,16.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgZB9QgLgEgHgJQgPgQAAgfIAAiCQAAgeAPgRQAHgHALgFQAMgEANAAQAeAAAPAQQAHAJAEALQADAMAAAPIAAAZIglAAIAAgbQAAgOgGgFQgFgGgKAAQgIAAgGAGQgFAFAAAOIAACHQAAANAFAGQAGAFAIAAQAKAAAFgFQAGgGAAgNIAAgkIAlAAIAAAhQAAAQgDALQgEANgHAHQgIAJgLAEQgMAEgOAAQgNAAgMgEg");
	this.shape_18.setTransform(37.7,16.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAeB+IgghjIggBjIglAAIAsiBIgph6IApAAIAdBdIAehdIAlAAIgpB6IAsCBg");
	this.shape_19.setTransform(23,16.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ag1B+IAAj7IBrAAIAAAkIhEAAIAABHIA2AAIAAAiIg2AAIAABKIBEAAIAAAkg");
	this.shape_20.setTransform(8.9,16.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,279.1,40), null);


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
p.nominalBounds = new cjs.Rectangle(0,26.1,277.6,40);


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
p.nominalBounds = new cjs.Rectangle(0,13.5,310.9,40);


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
p.nominalBounds = new cjs.Rectangle(0,13.5,265.3,40);


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
p.nominalBounds = new cjs.Rectangle(87.6,13.5,213.4,40);


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
p.nominalBounds = new cjs.Rectangle(53.3,26.9,137.5,40);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol5();
	this.instance.parent = this;
	this.instance.setTransform(139.5,20,1,1,0,0,0,139.5,20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,279.1,40), null);


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
	this.shape.setTransform(1175.6,59.8,2.352,2.017);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(600));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(947.6,-11.2,456.2,142.2);


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
p.nominalBounds = new cjs.Rectangle(-4.7,116,457,268.7);
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