(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
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



(lib.background = function() {
	this.initialize(img.background);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,600);


(lib.chip = function() {
	this.initialize(img.chip);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,207,160);


(lib.girl = function() {
	this.initialize(img.girl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,386,468);


(lib.hand = function() {
	this.initialize(img.hand);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,111,164);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,133,30);


(lib.tower = function() {
	this.initialize(img.tower);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,449);// helper functions:

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


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("EgxwAOzIAA9lMBjhAAAIAAdlg");
	this.shape.setTransform(318.5,94.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol24, new cjs.Rectangle(0,0,637.1,189.5), null);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1B130F").ss(1,1,1).p("EgiegDDMBE9AAAIAAGHMhE9AAAg");
	this.shape.setTransform(220.7,19.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("EgieADEIAAmHMBE9AAAIAAGHg");
	this.shape_1.setTransform(220.7,19.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol23, new cjs.Rectangle(-1,-1,443.5,41.2), null);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIBgIAAgWIARAAIAAAWgAgHAhIAAiAIAPAAIAACAg");
	this.shape.setTransform(284.1,47.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgnA3QgRgUAAgfIAAgGQAAgfARgUQARgUAZAAQAaAAAOARQAPAQAAAdIAAALIhjAAIAAAEQAAAZANAQQAMAQAVAAQANAAAKgFQAMgEAGgHIAHALQgHAIgMAFQgMAFgRAAQgbAAgRgTgAgagvQgLAOgCAUIAAAAIBRAAIAAgDQAAgTgKgMQgLgNgSAAQgRAAgMANg");
	this.shape_1.setTransform(274.3,49.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag4BkIAAjEIAMAAIADAWQAHgMALgGQALgHAPAAQAZAAAPAVQAOAUAAAiIAAADQAAAfgOATQgPATgZAAQgOAAgLgGQgLgFgIgLIAABKgAgZhOQgKAIgGAMIAABEQAGALAKAHQAKAHAPAAQAUAAALgQQALgPAAgZIAAgDQAAgbgLgRQgLgRgUAAQgQAAgJAHg");
	this.shape_2.setTransform(260.1,52.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAmBHIAAhzIAAAAIhMBzIgPAAIAAiNIAPAAIAABzIABAAIBLhzIAQAAIAACNg");
	this.shape_3.setTransform(244.8,49.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAmBHIAAhBIhMAAIAABBIgPAAIAAiNIAPAAIAABAIBMAAIAAhAIAQAAIAACNg");
	this.shape_4.setTransform(229.8,49.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag4BkIAAjEIAMAAIADAWQAHgMALgGQALgHAPAAQAZAAAPAVQAOAUAAAiIAAADQAAAfgOATQgPATgZAAQgOAAgLgGQgLgFgIgLIAABKgAgZhOQgKAIgGAMIAABEQAGALAKAHQAKAHAPAAQAUAAALgQQALgPAAgZIAAgDQAAgbgLgRQgLgRgUAAQgQAAgJAHg");
	this.shape_5.setTransform(215.1,52.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AguBjIgGgBIACgNIAFABIAFAAQAKAAAGgHQAHgIAEgLIAHgTIg3iMIASAAIAnBnIAEARIABAAIArh4IASAAIg+ClQgFAOgJAKQgJAKgRAAg");
	this.shape_6.setTransform(200.7,52.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgIBHIAAiAIgyAAIAAgNIB1AAIAAANIg0AAIAACAg");
	this.shape_7.setTransform(187.2,49.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AA9BHIAAhyIgBAAIg2ByIgKAAIg3h0IgBAAIAAB0IgQAAIAAiNIAVAAIA3B3IABAAIA4h3IAUAAIAACNg");
	this.shape_8.setTransform(164,49.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgtA2QgRgUAAggIAAgDQAAggARgUQASgUAbAAQAdAAARAUQARAUAAAgIAAADQAAAggRAUQgRAUgdAAQgbAAgSgUgAghgrQgNARAAAZIAAADQAAAZANARQAMARAVAAQAXAAAMgRQANgRAAgZIAAgDQAAgZgNgRQgNgRgWAAQgVAAgMARg");
	this.shape_9.setTransform(146.6,49.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAmBHIAAhBIhMAAIAABBIgPAAIAAiNIAPAAIAABAIBMAAIAAhAIAQAAIAACNg");
	this.shape_10.setTransform(131.6,49.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgIBHIAAiAIgyAAIAAgNIB1AAIAAANIg0AAIAACAg");
	this.shape_11.setTransform(117.3,49.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgtA/QgLgLAAgTQAAgTAQgMQARgLAaAAIAjAAIAAgSQAAgPgKgJQgJgJgSAAQgPAAgKAIQgKAIAAAMIgPAAIAAgBQgBgQAPgMQAOgMAXAAQAXAAAOAMQAPAMAAAWIAABGIABAOIACAOIgQAAIgCgNIgBgLQgHAMgOAIQgNAHgQAAQgVAAgMgLgAgcALQgNAJAAANQAAAMAJAIQAHAHAOAAQASAAANgJQANgIAFgOIAAgbIgjAAQgSAAgNAJg");
	this.shape_12.setTransform(103,49.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAuBHIAAiAIg7AAIAAAyQAAApgKATQgKASgWAAIgHAAIABgOIAFAAQAOAAAHgOQAGgPABgjIAAg/IBaAAIAACNg");
	this.shape_13.setTransform(87.8,49.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAmBHIAAiAIhMAAIAACAIgPAAIAAiNIBrAAIAACNg");
	this.shape_14.setTransform(73.6,49.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgoA2QgQgUAAgfIAAgFQAAgfAQgUQAQgUAbAAQAXAAAPAOQAQAOgBAWIAAABIgOAAQAAgRgLgKQgMgLgQAAQgVAAgLARQgLAQAAAZIAAAFQAAAZALAQQALARAVAAQAPAAAMgJQAMgJAAgQIAOAAIAAABQABATgQAOQgQANgWAAQgbAAgQgUg");
	this.shape_15.setTransform(59.2,49.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgoA3QgQgUgBgfIAAgGQAAgfASgUQARgUAZAAQAaAAAOARQAOAQABAdIAAALIhjAAIAAAEQAAAZAMAQQANAQAUAAQAOAAALgFQAKgEAIgHIAGALQgHAIgMAFQgNAFgRAAQgaAAgSgTgAgagvQgMAOgCAUIABAAIBQAAIAAgDQABgTgLgMQgJgNgTAAQgRAAgMANg");
	this.shape_16.setTransform(45.5,49.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgtBTQgRgUAAgfIAAgrQAAglASgSQASgSAhgCQATAAALgEQAKgEAAgJIAMAAIAAABQABAQgMAHQgNAHgaAAQgbABgPAOQgQANACAbIABABQAGgMAOgIQANgIAPAAQAcAAARAVQAQAUAAAeIAAAFQAAAfgRAUQgSAVgcAAQgcAAgRgVgAgigNQgNAQAAAYIAAAFQAAAYANARQAMARAWAAQAWAAAMgRQANgRAAgYIAAgFQAAgYgNgQQgMgRgWAAQgWAAgMARg");
	this.shape_17.setTransform(31.2,46.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ag4BHIAAiNIA0AAQAaAAAPAJQAOAKAAATQAAALgGAIQgHAIgMAEQAOACAJAJQAIAJAAANQAAATgOAKQgOAKgZAAgAgoA6IAsAAQASAAAKgHQAJgHAAgNQAAgLgJgHQgKgHgSAAIgsAAgAgogHIAmAAQASAAAKgGQAKgGAAgNQAAgNgKgGQgLgGgTAAIgkAAg");
	this.shape_18.setTransform(9.9,49.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFCC00").s().p("AgrA3QgSgUAAgfIAAgEQAAggARgVQARgUAeAAQAdAAAPASQAPARAAAeIAAATIhUAAIAAABQABAOAIAJQAIAJAOAAQANAAAJgCQAJgDAKgFIAKAYQgIAHgPAEQgOAFgSAAQgfAAgRgTgAgOgjQgGAIgCANIABAAIAuAAIAAgCQAAgNgGgHQgFgHgLAAQgLAAgGAIg");
	this.shape_19.setTransform(284.2,19.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFCC00").s().p("AgwBHIAAiNIBhAAIAAAdIg6AAIAABwg");
	this.shape_20.setTransform(272.1,19.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFCC00").s().p("AAYBHIAAg3IgvAAIAAA3IgmAAIAAiNIAmAAIAAA5IAvAAIAAg5IAmAAIAACNg");
	this.shape_21.setTransform(258.3,19.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFCC00").s().p("AgrA3QgSgUAAgfIAAgEQAAggARgVQARgUAeAAQAdAAAPASQAPARAAAeIAAATIhUAAIAAABQABAOAIAJQAIAJAOAAQANAAAJgCQAJgDAKgFIAKAYQgIAHgPAEQgOAFgSAAQgfAAgRgTgAgOgjQgGAIgCANIABAAIAuAAIAAgCQAAgNgGgHQgFgHgLAAQgLAAgGAIg");
	this.shape_22.setTransform(243.7,19.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFCC00").s().p("AgSBHIAAhwIgtAAIAAgdIB/AAIAAAdIgtAAIAABwg");
	this.shape_23.setTransform(229.6,19.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFCC00").s().p("AguBPQgSgTAAgiIAAg0QAAghASgUQARgTAdAAQAdAAASATQASAUAAAhIAAA0QAAAigSATQgRAUgeAAQgdAAgRgUgAgTg6QgHAKAAASIAAA8QAAATAHAKQAIAKALAAQANAAAGgKQAIgKgBgTIAAg8QABgSgIgKQgGgKgNAAQgMAAgHAKg");
	this.shape_24.setTransform(208.1,17.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFCC00").s().p("AguBPQgSgTAAgiIAAg0QAAghASgUQASgTAcAAQAdAAASATQASAUAAAhIAAA0QAAAigSATQgSAUgdAAQgcAAgSgUgAgTg6QgGAKAAASIAAA8QAAATAGAKQAIAKALAAQAMAAAIgKQAGgKAAgTIAAg8QAAgSgGgKQgIgKgMAAQgMAAgHAKg");
	this.shape_25.setTransform(192.6,17.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFCC00").s().p("AguBPQgSgTAAgiIAAg0QAAghASgUQARgTAdAAQAdAAASATQASAUAAAhIAAA0QAAAigSATQgRAUgeAAQgdAAgRgUgAgSg6QgIAKABASIAAA8QgBATAIAKQAGAKAMAAQAMAAAHgKQAIgKAAgTIAAg8QAAgSgIgKQgHgKgMAAQgMAAgGAKg");
	this.shape_26.setTransform(177.2,17.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFCC00").s().p("AguBPQgSgTAAgiIAAg0QAAghASgUQARgTAdAAQAdAAASATQASAUAAAhIAAA0QAAAigSATQgSAUgdAAQgdAAgRgUgAgSg6QgIAKABASIAAA8QgBATAIAKQAGAKAMAAQAMAAAIgKQAGgKABgTIAAg8QgBgSgGgKQgIgKgMAAQgMAAgGAKg");
	this.shape_27.setTransform(155,17.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFCC00").s().p("AguBPQgSgTAAgiIAAg0QAAghASgUQARgTAdAAQAdAAASATQASAUAAAhIAAA0QAAAigSATQgSAUgdAAQgdAAgRgUgAgSg6QgIAKAAASIAAA8QAAATAIAKQAGAKAMAAQAMAAAHgKQAIgKgBgTIAAg8QABgSgIgKQgHgKgMAAQgMAAgGAKg");
	this.shape_28.setTransform(139.6,17.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFCC00").s().p("AABBhIAAidIgnAAIAAgeIBNgGIAADBg");
	this.shape_29.setTransform(123,17.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAmBkIAAh0IAAAAIhMB0IgPAAIAAiOIAPAAIAABzIABABIBLh0IAQAAIAACOgAgbhKQgKgKAAgOIAAgBIANAAQAAALAGAFQAGAHAMAAQAMAAAGgHQAGgGAAgKIANAAIAAABQAAAPgKAJQgKAJgRAAQgRAAgKgJg");
	this.shape_30.setTransform(102.3,17.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgtA/QgLgLAAgTQAAgTAQgMQARgLAaAAIAjAAIAAgSQAAgPgKgJQgJgJgSAAQgPAAgKAIQgKAIAAAMIgPAAIAAgBQgBgQAPgMQAOgMAXAAQAXAAAOAMQAPAMAAAWIAABGIABAOIACAOIgQAAIgCgNIgBgLQgHAMgOAIQgNAHgQAAQgVAAgMgLgAgcALQgNAJAAANQAAAMAJAIQAHAHAOAAQASAAANgJQANgIAFgOIAAgbIgjAAQgSAAgNAJg");
	this.shape_31.setTransform(87.3,19.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("Ag4BkIAAjEIAMAAIADAWQAHgMALgGQALgHAPAAQAZAAAPAVQAOAUAAAiIAAADQAAAfgOATQgPATgZAAQgOAAgLgGQgLgFgIgLIAABKgAgZhOQgKAIgGAMIAABEQAGALAKAHQAKAHAPAAQAUAAALgQQALgPAAgZIAAgDQAAgbgLgRQgLgRgUAAQgQAAgJAHg");
	this.shape_32.setTransform(73.1,22.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgrBHIAAiNIBXAAIAAANIhHAAIAACAg");
	this.shape_33.setTransform(60.5,19.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAmBHIAAhzIAAAAIhMBzIgPAAIAAiNIAPAAIAABzIABAAIBLhzIAQAAIAACNg");
	this.shape_34.setTransform(46.5,19.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AA+BHIAAiNIAQAAIAACNgAhNBHIAAiNIAQAAIAAA5IApAAQAXAAAOAMQAOAKAAATQAAATgOAMQgOAMgXAAgAg9A6IApAAQASAAAIgIQAJgJAAgMQAAgNgJgIQgIgIgSAAIgpAAg");
	this.shape_35.setTransform(28.9,19.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AhBBgIAAi/IA5AAQAcAAARAMQARANAAAZQAAAPgIAKQgIAMgOAEQASADAMAMQALAOAAARQAAAbgRANQgQAOgcAAgAgxBTIA1AAQAVAAANgLQAMgKgBgTQABgSgMgKQgMgLgVAAIgCAAIg0AAgAgxgJIAuAAQAUAAALgKQAKgIAAgSQAAgSgMgKQgMgIgWgBIgpAAg");
	this.shape_36.setTransform(11,17.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(0,0,300.1,65.3), null);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#01B5C3").s().p("Ag0A/QgMgMAAgUQAAgVAQgKQARgMAfAAIAUAAIAAgLQAAgLgFgFQgGgGgJAAQgKAAgFAFQgFAEAAAIIglAAIAAgBQgBgSARgNQAQgNAaAAQAaAAAQANQAQANAAAYIAAA6QAAAKABAJQACAJADAIIgmAAIgEgKIgCgLQgGAKgKAHQgJAHgNAAQgWAAgNgLgAgTAPQgGAGAAAJQAAAHAFAEQAEAFAIAAQAJAAAIgFQAIgFADgHIAAgUIgUAAQgNAAgGAGg");
	this.shape.setTransform(411.2,19.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#01B5C3").s().p("AAYBHIAAg3IgvAAIAAA3IgmAAIAAiNIAmAAIAAA5IAvAAIAAg5IAmAAIAACNg");
	this.shape_1.setTransform(396.4,19.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#01B5C3").s().p("Ag0A/QgMgMAAgUQAAgVAQgKQARgMAfAAIAUAAIAAgLQAAgLgFgFQgGgGgJAAQgKAAgFAFQgFAEAAAIIglAAIAAgBQgBgSARgNQAQgNAaAAQAaAAAQANQAQANAAAYIAAA6QAAAKABAJQACAJADAIIgmAAIgEgKIgCgLQgGAKgKAHQgJAHgNAAQgWAAgNgLgAgTAPQgGAGAAAJQAAAHAFAEQAEAFAIAAQAJAAAIgFQAIgFADgHIAAgUIgUAAQgNAAgGAGg");
	this.shape_2.setTransform(381.5,19.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#01B5C3").s().p("AgTBHIAAhwIgtAAIAAgdICBAAIAAAdIguAAIAABwg");
	this.shape_3.setTransform(367.3,19.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#01B5C3").s().p("AgrA2QgSgUAAggIAAgDQAAgfASgVQARgUAeAAQAaAAAQAPQAQAPAAAZIAAAAIgkAAQAAgLgFgHQgGgHgLAAQgOAAgGAMQgGALAAATIAAADQAAATAGAMQAGALAPAAQAKAAAGgFQAFgHAAgKIAkAAIAAABQAAAWgQAPQgRAOgYAAQgfAAgRgUg");
	this.shape_4.setTransform(353.3,19.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#01B5C3").s().p("AAXBHIgXgvIgWAvIgsAAIAthHIgrhGIArAAIAVAtIAAAAIAWgtIArAAIgrBGIAtBHg");
	this.shape_5.setTransform(339.5,19.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#01B5C3").s().p("Ag0A/QgMgMAAgUQAAgVAQgKQARgMAfAAIAUAAIAAgLQAAgLgFgFQgGgGgJAAQgKAAgFAFQgFAEAAAIIglAAIAAgBQgBgSARgNQAQgNAaAAQAaAAAQANQAQANAAAYIAAA6QAAAKABAJQACAJADAIIgmAAIgEgKIgCgLQgGAKgKAHQgJAHgNAAQgWAAgNgLgAgTAPQgGAGAAAJQAAAHAFAEQAEAFAIAAQAJAAAIgFQAIgFADgHIAAgUIgUAAQgNAAgGAGg");
	this.shape_6.setTransform(325.3,19.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#01B5C3").s().p("AgtA/QgSgMABgVIAAgBIAlAAQAAAHAHAFQAHAFALAAQAMAAAHgFQAGgFAAgIQAAgJgGgEQgHgEgMAAIgXAAIAAgYIAXAAQALAAAGgEQAGgEAAgIQAAgGgGgFQgGgFgLAAQgKAAgGAEQgHAEAAAIIglAAIAAgBQgBgTARgMQARgMAaAAQAcAAARALQARALAAAUQAAAJgGAIQgHAIgLAFQANADAHAJQAHAIAAAMQAAAUgTALQgSAMgcAAQgaAAgSgLg");
	this.shape_7.setTransform(310.6,19.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#01B5C3").s().p("Ag0A/QgMgMAAgUQAAgVAQgKQARgMAfAAIAUAAIAAgLQAAgLgFgFQgGgGgJAAQgKAAgFAFQgFAEAAAIIglAAIAAgBQgBgSARgNQAQgNAaAAQAaAAAQANQAQANAAAYIAAA6QAAAKABAJQACAJADAIIgmAAIgEgKIgCgLQgGAKgKAHQgJAHgNAAQgWAAgNgLgAgTAPQgGAGAAAJQAAAHAFAEQAEAFAIAAQAJAAAIgFQAIgFADgHIAAgUIgUAAQgNAAgGAGg");
	this.shape_8.setTransform(295.8,19.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#01B5C3").s().p("AAcBgIg0hQIgOAAIAABQIgnAAIAAi/IAnAAIAABOIALAAIA0hOIAvAAIhCBaIBIBlg");
	this.shape_9.setTransform(280.9,17.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#01B5C3").s().p("AAYBmIAAhXIgBAAIguBXIgmAAIAAiNIAmAAIAABVIABAAIAuhVIAmAAIAACNgAgghJQgNgLABgRIAAAAIAcAAQAAAGAFAFQAEAEAHAAQAIAAAEgEQAEgFAAgGIAdAAIAAAAQABARgNALQgMAKgVAAQgUAAgMgKg");
	this.shape_10.setTransform(257.1,16.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#01B5C3").s().p("AgrA3QgSgUAAgfIAAgEQAAggARgVQARgUAeAAQAdAAAPASQAPARAAAeIAAATIhUAAIAAABQABAOAIAJQAIAJAOAAQANAAAJgCQAJgDAKgFIAKAYQgIAHgPAEQgOAFgSAAQgfAAgRgTgAgOgjQgGAIgCANIABAAIAuAAIAAgCQAAgNgGgHQgFgHgLAAQgLAAgGAIg");
	this.shape_11.setTransform(242.5,19.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#01B5C3").s().p("AAeBHIAAhwIgiAAIAAAfQAAAqgNATQgMAUggAAIgGAAIAAgeIAEAAQANAAAEgLQAEgLAAgdIAAg8IBuAAIAACNg");
	this.shape_12.setTransform(227.3,19.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#01B5C3").s().p("AgrA3QgSgUAAgfIAAgEQAAggARgVQARgUAeAAQAdAAAPASQAPARAAAeIAAATIhUAAIAAABQABAOAIAJQAIAJAOAAQANAAAJgCQAJgDAKgFIAKAYQgIAHgPAEQgOAFgSAAQgfAAgRgTgAgOgjQgGAIgCANIABAAIAuAAIAAgCQAAgNgGgHQgFgHgLAAQgLAAgGAIg");
	this.shape_13.setTransform(213.3,19.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#01B5C3").s().p("AgTBHIAAhwIgtAAIAAgdICAAAIAAAdIgtAAIAABwg");
	this.shape_14.setTransform(199.2,19.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#01B5C3").s().p("AAYBHIAAhWIgBAAIguBWIgmAAIAAiNIAmAAIAABVIABAAIAuhVIAmAAIAACNg");
	this.shape_15.setTransform(184.5,19.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#01B5C3").s().p("AA6BHIgcg2IgLAAIAAA2IglAAIAAg2IgKAAIgdA2IgxAAIAvhMIgthBIAxAAIAdA1IAIAAIAAg1IAlAAIAAA1IAIAAIAdg1IAxAAIgsBBIAuBMg");
	this.shape_16.setTransform(165.9,19.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#01B5C3").s().p("AAaBHIAAgyIgXAAIgbAyIgnAAIAfg4QgNgGgHgJQgHgKAAgNQAAgVARgNQAQgNAbAAIA/AAIAACNgAgOgjQgGAGAAAHQAAAHAGAGQAFAFAKAAIAZAAIAAglIgZAAQgJAAgGAGg");
	this.shape_17.setTransform(140.2,19.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#01B5C3").s().p("AAeBHIAAhwIgiAAIAAAfQAAAqgNATQgMAUggAAIgGAAIAAgeIAEAAQANAAAEgLQAEgLAAgdIAAg8IBuAAIAACNg");
	this.shape_18.setTransform(125,19.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#01B5C3").s().p("AAqBfIAAgvIhUAAIAAAvIgmAAIAAhNIAJAAIAEAAQALAAAEgMQAFgMAAgdIAEg7IBoAAIAABwIAUAAIAABNgAgIgjIgDAfQgDAMgEAKIApAAIAAhRIgdAAg");
	this.shape_19.setTransform(109.1,22.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#01B5C3").s().p("AgwA2QgSgUAAghIAAgBQAAggARgVQASgUAfAAQAfAAASAUQASAVAAAgIAAABQAAAhgSAUQgSAUgfAAQgfAAgRgUgAgVgfQgHAMAAATIAAABQAAAUAHAMQAHALAOAAQAPAAAHgLQAHgMAAgUIAAgBQAAgTgHgMQgHgMgPAAQgOAAgHAMg");
	this.shape_20.setTransform(85.8,19.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#01B5C3").s().p("AARBHIgeg1IgPAAIAAA1IgnAAIAAiNIAnAAIAAA2IALAAIAgg2IAxAAIgwBCIA0BLg");
	this.shape_21.setTransform(71.3,19.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#01B5C3").s().p("Ag/BHIAAiNIAnAAIAAAuIAaAAQAcAAARANQAQAMABAWQgBAVgQAOQgRANgcAAgAgYAqIAaAAQALAAAHgFQAFgGAAgIQAAgIgFgFQgHgGgLAAIgaAAg");
	this.shape_22.setTransform(55.8,19.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#01B5C3").s().p("AAeBHIAAhwIgiAAIAAAfQAAAqgNATQgMAUggAAIgGAAIAAgeIAEAAQANAAAEgLQAEgLAAgdIAAg8IBuAAIAACNg");
	this.shape_23.setTransform(39.7,19.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#01B5C3").s().p("AgwA2QgSgUAAghIAAgBQAAggARgVQASgUAfAAQAfAAASAUQASAVAAAgIAAABQAAAhgSAUQgSAUgfAAQgfAAgRgUgAgVgfQgHAMAAATIAAABQAAAUAHAMQAHALAOAAQAPAAAHgLQAHgMAAgUIAAgBQAAgTgHgMQgHgMgPAAQgOAAgHAMg");
	this.shape_24.setTransform(25.1,19.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#01B5C3").s().p("AgTBgIAAihIg2AAIAAgeICTAAIAAAeIg3AAIAAChg");
	this.shape_25.setTransform(9.8,17.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(0,0,420.7,35.7), null);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#101626").s().p("AgeAmQgNgNAAgWIAAgDQAAgWAMgPQANgOAUAAQAVAAAKAMQALANAAAVIAAANIg7AAIAAAAQABALAFAGQAFAGALAAQAJAAAGgBIAOgGIAGARQgGAFgJADQgLADgMAAQgVAAgNgOgAgKgYQgEAFgBAJIABABIAgAAIAAgCQAAgJgEgFQgEgFgIAAQgHAAgFAGg");
	this.shape.setTransform(249.9,35.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#101626").s().p("AghAyIAAhjIBDAAIAAAVIgoAAIAABOg");
	this.shape_1.setTransform(241.4,35.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#101626").s().p("AARAyIAAgnIghAAIAAAnIgaAAIAAhjIAaAAIAAApIAhAAIAAgpIAbAAIAABjg");
	this.shape_2.setTransform(231.6,35.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#101626").s().p("AgeAmQgNgNAAgWIAAgDQAAgWAMgPQAMgOAVAAQAUAAALAMQALANAAAVIAAANIg7AAIAAAAQABALAFAGQAGAGAKAAQAJAAAGgBIAOgGIAHARQgHAFgJADQgLADgMAAQgWAAgMgOgAgJgYQgFAFgBAJIAAABIAhAAIAAgCQgBgJgDgFQgEgFgIAAQgHAAgEAGg");
	this.shape_3.setTransform(221.4,35.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#101626").s().p("AgNAyIAAhOIgfAAIAAgVIBaAAIAAAVIghAAIAABOg");
	this.shape_4.setTransform(211.5,35.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#101626").s().p("AggA4QgMgNAAgYIAAgkQAAgZAMgNQANgOATAAQAVAAAMAOQANANAAAZIAAAkQAAAYgNANQgMANgVAAQgTAAgNgNgAgNgpQgFAIABAMIAAAqQgBAOAFAGQAFAIAIgBQAJABAFgIQAFgGAAgOIAAgqQAAgMgFgIQgFgGgJgBQgIABgFAGg");
	this.shape_5.setTransform(196.3,33.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#101626").s().p("AggA4QgNgNAAgYIAAgkQAAgZANgNQAMgOAUAAQAVAAAMAOQANANAAAZIAAAkQAAAYgNANQgMANgVAAQgUAAgMgNgAgNgpQgFAIAAAMIAAAqQAAAOAFAGQAFAIAIgBQAJABAFgIQAFgGAAgOIAAgqQAAgMgFgIQgFgGgJgBQgIABgFAGg");
	this.shape_6.setTransform(185.4,33.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#101626").s().p("AggA4QgNgNAAgYIAAgkQAAgZANgNQAMgOAUAAQAUAAANAOQAMANAAAZIAAAkQAAAYgMANQgNANgUAAQgUAAgMgNgAgNgpQgFAIAAAMIAAAqQAAAOAFAGQAFAIAIgBQAJABAFgIQAFgGgBgOIAAgqQABgMgFgIQgFgGgJgBQgIABgFAGg");
	this.shape_7.setTransform(174.5,33.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#101626").s().p("AggA4QgNgNAAgYIAAgkQAAgZANgNQAMgOAUAAQAUAAANAOQAMANAAAZIAAAkQABAYgMANQgOANgUAAQgUAAgMgNgAgNgpQgEAIAAAMIAAAqQAAAOAEAGQAFAIAIgBQAJABAFgIQAEgGAAgOIAAgqQAAgMgEgIQgFgGgJgBQgIABgFAGg");
	this.shape_8.setTransform(158.9,33.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#101626").s().p("AggA4QgMgNAAgYIAAgkQAAgZAMgNQANgOATAAQAVAAAMAOQANANAAAZIAAAkQAAAYgMANQgNANgVAAQgTAAgNgNgAgNgpQgEAIAAAMIAAAqQAAAOAEAGQAFAIAIgBQAJABAFgIQAEgGAAgOIAAgqQAAgMgEgIQgFgGgJgBQgIABgFAGg");
	this.shape_9.setTransform(148,33.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#101626").s().p("AAABEIAAhuIgaAAIAAgUIA2gGIAACIg");
	this.shape_10.setTransform(136.3,33.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#101626").s().p("AglAyIAAhjIALAAIAAAoIAcAAQARAAAKAIQAJAIAAANQAAANgJAJQgKAIgRAAgAgaApIAcAAQANAAAGgGQAGgGAAgJQAAgIgGgGQgHgGgMAAIgcAAg");
	this.shape_11.setTransform(122.3,35.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#101626").s().p("AgFAyIAAhaIgkAAIAAgJIBTAAIAAAJIglAAIAABag");
	this.shape_12.setTransform(112.1,35.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#101626").s().p("AgfAsQgIgIAAgNQgBgOAMgIQAMgIASAAIAYAAIAAgMQABgKgHgHQgHgGgNAAQgKAAgHAGQgHAFAAAJIgKAAIgBgBQAAgLALgJQAJgIAQAAQARAAAJAIQALAIAAAQIAAAxIABAKIACAKIgMAAIgCgJIgBgIQgEAJgKAEQgJAGgMAAQgOAAgIgIgAgUAIQgJAGAAAJQAAAIAHAGQAFAFAKAAQAMAAAJgGQAJgGADgKIAAgTIgYAAQgMAAgKAHg");
	this.shape_13.setTransform(102.1,35.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#101626").s().p("AgnBGIAAiKIAIAAIACAQQAFgIAIgFQAIgEAKAAQASAAALAOQAJAOABAYIAAACQgBAWgJANQgLAOgSAAQgJAAgIgEQgIgEgFgIIAAA0gAgSg3QgGAGgEAIIAAAwQADAIAIAFQAHAEAKAAQAOAAAIgLQAIgLAAgRIAAgCQgBgTgHgMQgIgMgOAAQgLAAgHAFg");
	this.shape_14.setTransform(92.1,37.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#101626").s().p("AgeAyIAAhjIA9AAIAAAJIgyAAIAABag");
	this.shape_15.setTransform(83.2,35.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#101626").s().p("AAbAyIAAhRIAAAAIg1BRIgLAAIAAhjIALAAIAABRIABAAIA0hRIALAAIAABjg");
	this.shape_16.setTransform(73.3,35.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#101626").s().p("AAsAyIAAhjIALAAIAABjgAg2AyIAAhjIALAAIAAAoIAdAAQAQAAAKAIQAKAIAAANQAAANgKAJQgKAIgQAAgAgrApIAdAAQANAAAFgGQAHgGAAgJQAAgIgHgGQgFgGgNAAIgdAAg");
	this.shape_17.setTransform(61,35.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#101626").s().p("AgtBDIAAiGIAnAAQAUABAMAIQAMAJAAASQAAAKgGAHQgFAJgLACQAOACAHAJQAJAJAAANQAAASgMAKQgMAJgTAAgAgiA6IAlAAQAPAAAIgHQAIgIAAgNQABgMgJgHQgIgIgOAAIgBAAIglAAgAgigGIAgAAQANAAAIgHQAHgGAAgNQAAgMgIgGQgJgHgPAAIgcAAg");
	this.shape_18.setTransform(48.4,33.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#1B130F").ss(1,1,1).p("AxnlkMAjPAAAQCUAABoBoQBpBpAACTIAAAAQAACUhpBpQhoBoiUAAMgjPAAAQiUAAhohoQhphpAAiUIAAAAQAAiTBphpQBohoCUAAg");
	this.shape_19.setTransform(148.5,35.8,1,1.001);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#FFD600","#FF8C01"],[0,1],-148.4,0,148.5,0).s().p("AxmFlQiUAAhphoQhohpgBiUIAAAAQABiTBohpQBphoCUAAMAjNAAAQCUAABpBoQBpBpgBCTIAAAAQABCUhpBpQhpBoiUAAg");
	this.shape_20.setTransform(148.5,35.8,1,1.001);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgeAmQgNgNAAgWIAAgDQAAgWAMgPQANgOAUAAQAVAAAKAMQALANAAAVIAAANIg7AAIAAAAQABALAFAGQAFAGALAAQAJAAAGgBIAOgGIAGARQgGAFgJADQgLADgMAAQgVAAgNgOgAgKgYQgEAFgBAJIABABIAgAAIAAgCQAAgJgEgFQgEgFgIAAQgHAAgFAGg");
	this.shape_21.setTransform(249.9,35.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AghAyIAAhjIBDAAIAAAVIgoAAIAABOg");
	this.shape_22.setTransform(241.4,35.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AARAyIAAgnIghAAIAAAnIgaAAIAAhjIAaAAIAAApIAhAAIAAgpIAbAAIAABjg");
	this.shape_23.setTransform(231.6,35.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgeAmQgNgNAAgWIAAgDQAAgWAMgPQAMgOAVAAQAUAAALAMQALANAAAVIAAANIg7AAIAAAAQABALAFAGQAGAGAKAAQAJAAAGgBIAOgGIAHARQgHAFgJADQgLADgMAAQgWAAgMgOgAgJgYQgFAFgBAJIAAABIAhAAIAAgCQgBgJgDgFQgEgFgIAAQgHAAgEAGg");
	this.shape_24.setTransform(221.4,35.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgNAyIAAhOIgfAAIAAgVIBaAAIAAAVIghAAIAABOg");
	this.shape_25.setTransform(211.5,35.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AggA4QgMgNAAgYIAAgkQAAgZAMgNQANgOATAAQAVAAAMAOQANANAAAZIAAAkQAAAYgNANQgMANgVAAQgTAAgNgNgAgNgpQgFAIABAMIAAAqQgBAOAFAGQAFAIAIgBQAJABAFgIQAFgGAAgOIAAgqQAAgMgFgIQgFgGgJgBQgIABgFAGg");
	this.shape_26.setTransform(196.3,33.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AggA4QgNgNAAgYIAAgkQAAgZANgNQAMgOAUAAQAVAAAMAOQANANAAAZIAAAkQAAAYgNANQgMANgVAAQgUAAgMgNgAgNgpQgFAIAAAMIAAAqQAAAOAFAGQAFAIAIgBQAJABAFgIQAFgGAAgOIAAgqQAAgMgFgIQgFgGgJgBQgIABgFAGg");
	this.shape_27.setTransform(185.4,33.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AggA4QgNgNAAgYIAAgkQAAgZANgNQAMgOAUAAQAUAAANAOQAMANAAAZIAAAkQAAAYgMANQgNANgUAAQgUAAgMgNgAgNgpQgFAIAAAMIAAAqQAAAOAFAGQAFAIAIgBQAJABAFgIQAFgGgBgOIAAgqQABgMgFgIQgFgGgJgBQgIABgFAGg");
	this.shape_28.setTransform(174.5,33.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AggA4QgNgNAAgYIAAgkQAAgZANgNQAMgOAUAAQAUAAANAOQAMANAAAZIAAAkQABAYgMANQgOANgUAAQgUAAgMgNgAgNgpQgEAIAAAMIAAAqQAAAOAEAGQAFAIAIgBQAJABAFgIQAEgGAAgOIAAgqQAAgMgEgIQgFgGgJgBQgIABgFAGg");
	this.shape_29.setTransform(158.9,33.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AggA4QgMgNAAgYIAAgkQAAgZAMgNQANgOATAAQAVAAAMAOQANANAAAZIAAAkQAAAYgMANQgNANgVAAQgTAAgNgNgAgNgpQgEAIAAAMIAAAqQAAAOAEAGQAFAIAIgBQAJABAFgIQAEgGAAgOIAAgqQAAgMgEgIQgFgGgJgBQgIABgFAGg");
	this.shape_30.setTransform(148,33.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAABEIAAhuIgaAAIAAgUIA2gGIAACIg");
	this.shape_31.setTransform(136.3,33.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AglAyIAAhjIALAAIAAAoIAcAAQARAAAKAIQAJAIAAANQAAANgJAJQgKAIgRAAgAgaApIAcAAQANAAAGgGQAGgGAAgJQAAgIgGgGQgHgGgMAAIgcAAg");
	this.shape_32.setTransform(122.3,35.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgFAyIAAhaIgkAAIAAgJIBTAAIAAAJIglAAIAABag");
	this.shape_33.setTransform(112.1,35.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgfAsQgIgIAAgNQgBgOAMgIQAMgIASAAIAYAAIAAgMQABgKgHgHQgHgGgNAAQgKAAgHAGQgHAFAAAJIgKAAIgBgBQAAgLALgJQAJgIAQAAQARAAAJAIQALAIAAAQIAAAxIABAKIACAKIgMAAIgCgJIgBgIQgEAJgKAEQgJAGgMAAQgOAAgIgIgAgUAIQgJAGAAAJQAAAIAHAGQAFAFAKAAQAMAAAJgGQAJgGADgKIAAgTIgYAAQgMAAgKAHg");
	this.shape_34.setTransform(102.1,35.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgnBGIAAiKIAIAAIACAQQAFgIAIgFQAIgEAKAAQASAAALAOQAJAOABAYIAAACQgBAWgJANQgLAOgSAAQgJAAgIgEQgIgEgFgIIAAA0gAgSg3QgGAGgEAIIAAAwQADAIAIAFQAHAEAKAAQAOAAAIgLQAIgLAAgRIAAgCQgBgTgHgMQgIgMgOAAQgLAAgHAFg");
	this.shape_35.setTransform(92.1,37.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgeAyIAAhjIA9AAIAAAJIgyAAIAABag");
	this.shape_36.setTransform(83.2,35.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAbAyIAAhRIAAAAIg1BRIgLAAIAAhjIALAAIAABRIABAAIA0hRIALAAIAABjg");
	this.shape_37.setTransform(73.3,35.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAsAyIAAhjIALAAIAABjgAg2AyIAAhjIALAAIAAAoIAdAAQAQAAAKAIQAKAIAAANQAAANgKAJQgKAIgQAAgAgrApIAdAAQANAAAFgGQAHgGAAgJQAAgIgHgGQgFgGgNAAIgdAAg");
	this.shape_38.setTransform(61,35.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgtBDIAAiGIAnAAQAUABAMAIQAMAJAAASQAAAKgGAHQgFAJgLACQAOACAHAJQAJAJAAANQAAASgMAKQgMAJgTAAgAgiA6IAlAAQAPAAAIgHQAIgIAAgNQABgMgJgHQgIgIgOAAIgBAAIglAAgAgigGIAgAAQANAAAIgHQAHgGAAgNQAAgMgIgGQgJgHgPAAIgcAAg");
	this.shape_39.setTransform(48.4,33.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#E52200").s().p("AxmFlQiUAAhphoQhohpgBiUIAAAAQABiTBohpQBphoCUAAMAjNAAAQCUAABpBoQBpBpgBCTIAAAAQABCUhpBpQhpBoiUAAg");
	this.shape_40.setTransform(148.5,35.8,1,1.001);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_40},{t:this.shape_19},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,299,73.5);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,133,30), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.chip();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,207,160), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hand();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,111,164), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.girl();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,386,468), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.background();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,1920,600), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tower();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,300,449), null);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(150,224.5,1,1,0,0,0,150,224.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol21, new cjs.Rectangle(0,0,300,449), null);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_94 = new cjs.Graphics().p("A4CC5QhMAAg3g2Qg2g3AAhMQAAhMA2g2QA3g2BMAAMAnsAAAQAqAAAjAQIAhgBQAmgBBOABICsABIBYgCQBEgEgKAJQgKAJg8AMQg8ANgKAHIgKAKQAdALAXAUQAUAAALAEQAHADAGAGQAFAHAAAIIBMARQAUAEBUgIQBUgJhDATIhcAaQgaAGgTAAQgoAAgmALQAHAEAAAKQABAJgGAHQgIAJgVAEQAZABAJAFQAUAHDMAGQjCAOAKABIARABQAJABAHAGQAHAGAAAHQAAANgPAFQgGACgTAAQgUABgoAGQF6AipCgDIgwAHIijAEQgZAHgcAAg");
	var mask_graphics_95 = new cjs.Graphics().p("A4CC5QhMAAg3g2Qg2g3AAhMQAAhMA2g2QA3g2BMAAMAnsAAAQAqAAAjAQIAhgBQAmgBBOABICsABIBYgCQBEgEgKAJQgKAJg8AMQg8ANgKAHIgKAKQAdALAXAUQAUAAALAEQAHADAGAGQAFAHAAAIIBMARQAUAEBUgIQBUgJhDATIhcAaQgaAGgTAAQgoAAgmALQAHAEAAAKQABAJgGAHQgIAJgVAEQAZABAJAFQAUAHDMAGQjCAOAKABIARABQAJABAHAGQAHAGAAAHQAAANgPAFQgGACgTAAQgUABgoAGQF6AipCgDIgwAHIijAEQgZAHgcAAg");
	var mask_graphics_96 = new cjs.Graphics().p("A4CC5QhMAAg3g2Qg2g3AAhMQAAhMA2g2QA3g2BMAAMAnsAAAQAqAAAjAQIAhgBQAmgBBOABICsABIBYgCQBEgEgKAJQgKAJg8AMQg8ANgKAHIgKAKQAdALAXAUQAUAAALAEQAHADAGAGQAFAHAAAIIBMARQAUAEBUgIQBUgJhDATIhcAaQgaAGgTAAQgoAAgmALQAHAEAAAKQABAJgGAHQgIAJgVAEQAZABAJAFQAUAHDMAGQjCAOAKABIARABQAJABAHAGQAHAGAAAHQAAANgPAFQgGACgTAAQgUABgoAGQF6AipCgDIgwAHIijAEQgZAHgcAAg");
	var mask_graphics_97 = new cjs.Graphics().p("A4CC5QhMAAg3g2Qg2g3AAhMQAAhMA2g2QA3g2BMAAMAnsAAAQAqAAAjAQIAhgBQAmgBBOABICsABIBYgCQBEgEgKAJQgKAJg8AMQg8ANgKAHIgKAKQAdALAXAUQAUAAALAEQAHADAGAGQAFAHAAAIIBMARQAUAEBUgIQBUgJhDATIhcAaQgaAGgTAAQgoAAgmALQAHAEAAAKQABAJgGAHQgIAJgVAEQAZABAJAFQAUAHDMAGQjCAOAKABIARABQAJABAHAGQAHAGAAAHQAAANgPAFQgGACgTAAQgUABgoAGQF6AipCgDIgwAHIijAEQgZAHgcAAg");
	var mask_graphics_98 = new cjs.Graphics().p("A4CC5QhMAAg3g2Qg2g3AAhMQAAhMA2g2QA3g2BMAAMAnsAAAQAqAAAjAQIAhgBQAmgBBOABICsABIBYgCQBEgEgKAJQgKAJg8AMQg8ANgKAHIgKAKQAdALAXAUQAUAAALAEQAHADAGAGQAFAHAAAIIBMARQAUAEBUgIQBUgJhDATIhcAaQgaAGgTAAQgoAAgmALQAHAEAAAKQABAJgGAHQgIAJgVAEQAZABAJAFQAUAHDMAGQjCAOAKABIARABQAJABAHAGQAHAGAAAHQAAANgPAFQgGACgTAAQgUABgoAGQF6AipCgDIgwAHIijAEQgZAHgcAAg");
	var mask_graphics_99 = new cjs.Graphics().p("A4CC5QhMAAg3g2Qg2g3AAhMQAAhMA2g2QA3g2BMAAMAnsAAAQAqAAAjAQIAhgBQAmgBBOABICsABIBYgCQBEgEgKAJQgKAJg8AMQg8ANgKAHIgKAKQAdALAXAUQAUAAALAEQAHADAGAGQAFAHAAAIIBMARQAUAEBUgIQBUgJhDATIhcAaQgaAGgTAAQgoAAgmALQAHAEAAAKQABAJgGAHQgIAJgVAEQAZABAJAFQAUAHDMAGQjCAOAKABIARABQAJABAHAGQAHAGAAAHQAAANgPAFQgGACgTAAQgUABgoAGQF6AipCgDIgwAHIijAEQgZAHgcAAg");
	var mask_graphics_100 = new cjs.Graphics().p("A4CC5QhMAAg3g2Qg2g3AAhMQAAhMA2g2QA3g2BMAAMAnsAAAQAqAAAjAQIAhgBQAmgBBOABICsABIBYgCQBEgEgKAJQgKAJg8AMQg8ANgKAHIgKAKQAdALAXAUQAUAAALAEQAHADAGAGQAFAHAAAIIBMARQAUAEBUgIQBUgJhDATIhcAaQgaAGgTAAQgoAAgmALQAHAEAAAKQABAJgGAHQgIAJgVAEQAZABAJAFQAUAHDMAGQjCAOAKABIARABQAJABAHAGQAHAGAAAHQAAANgPAFQgGACgTAAQgUABgoAGQF6AipCgDIgwAHIijAEQgZAHgcAAg");
	var mask_graphics_101 = new cjs.Graphics().p("A4CC5QhMAAg3g2Qg2g3AAhMQAAhMA2g2QA3g2BMAAMAnsAAAQAqAAAjAQIAhgBQAmgBBOABICsABIBYgCQBEgEgKAJQgKAJg8AMQg8ANgKAHIgKAKQAdALAXAUQAUAAALAEQAHADAGAGQAFAHAAAIIBMARQAUAEBUgIQBUgJhDATIhcAaQgaAGgTAAQgoAAgmALQAHAEAAAKQABAJgGAHQgIAJgVAEQAZABAJAFQAUAHDMAGQjCAOAKABIARABQAJABAHAGQAHAGAAAHQAAANgPAFQgGACgTAAQgUABgoAGQF6AipCgDIgwAHIijAEQgZAHgcAAg");
	var mask_graphics_102 = new cjs.Graphics().p("A4CC5QhMAAg3g2Qg2g3AAhMQAAhMA2g2QA3g2BMAAMAnsAAAQAqAAAjAQIAhgBQAmgBBOABICsABIBYgCQBEgEgKAJQgKAJg8AMQg8ANgKAHIgKAKQAdALAXAUQAUAAALAEQAHADAGAGQAFAHAAAIIBMARQAUAEBUgIQBUgJhDATIhcAaQgaAGgTAAQgoAAgmALQAHAEAAAKQABAJgGAHQgIAJgVAEQAZABAJAFQAUAHDMAGQjCAOAKABIARABQAJABAHAGQAHAGAAAHQAAANgPAFQgGACgTAAQgUABgoAGQF6AipCgDIgwAHIijAEQgZAHgcAAg");
	var mask_graphics_103 = new cjs.Graphics().p("A4CC5QhMAAg3g2Qg2g3AAhMQAAhMA2g2QA3g2BMAAMAnsAAAQAqAAAjAQIAhgBQAmgBBOABICsABIBYgCQBEgEgKAJQgKAJg8AMQg8ANgKAHIgKAKQAdALAXAUQAUAAALAEQAHADAGAGQAFAHAAAIIBMARQAUAEBUgIQBUgJhDATIhcAaQgaAGgTAAQgoAAgmALQAHAEAAAKQABAJgGAHQgIAJgVAEQAZABAJAFQAUAHDMAGQjCAOAKABIARABQAJABAHAGQAHAGAAAHQAAANgPAFQgGACgTAAQgUABgoAGQF6AipCgDIgwAHIijAEQgZAHgcAAg");
	var mask_graphics_104 = new cjs.Graphics().p("A4CC5QhMAAg3g2Qg2g3AAhMQAAhMA2g2QA3g2BMAAMAnsAAAQAqAAAjAQIAhgBQAmgBBOABICsABIBYgCQBEgEgKAJQgKAJg8AMQg8ANgKAHIgKAKQAdALAXAUQAUAAALAEQAHADAGAGQAFAHAAAIIBMARQAUAEBUgIQBUgJhDATIhcAaQgaAGgTAAQgoAAgmALQAHAEAAAKQABAJgGAHQgIAJgVAEQAZABAJAFQAUAHDMAGQjCAOAKABIARABQAJABAHAGQAHAGAAAHQAAANgPAFQgGACgTAAQgUABgoAGQF6AipCgDIgwAHIijAEQgZAHgcAAg");
	var mask_graphics_105 = new cjs.Graphics().p("A4CC5QhMAAg3g2Qg2g3AAhMQAAhMA2g2QA3g2BMAAMAnsAAAQAqAAAjAQIAhgBQAmgBBOABICsABIBYgCQBEgEgKAJQgKAJg8AMQg8ANgKAHIgKAKQAdALAXAUQAUAAALAEQAHADAGAGQAFAHAAAIIBMARQAUAEBUgIQBUgJhDATIhcAaQgaAGgTAAQgoAAgmALQAHAEAAAKQABAJgGAHQgIAJgVAEQAZABAJAFQAUAHDMAGQjCAOAKABIARABQAJABAHAGQAHAGAAAHQAAANgPAFQgGACgTAAQgUABgoAGQF6AipCgDIgwAHIijAEQgZAHgcAAg");
	var mask_graphics_106 = new cjs.Graphics().p("A4CC5QhMAAg3g2Qg2g3AAhMQAAhMA2g2QA3g2BMAAMAnsAAAQAqAAAjAQIAhgBQAmgBBOABICsABIBYgCQBEgEgKAJQgKAJg8AMQg8ANgKAHIgKAKQAdALAXAUQAUAAALAEQAHADAGAGQAFAHAAAIIBMARQAUAEBUgIQBUgJhDATIhcAaQgaAGgTAAQgoAAgmALQAHAEAAAKQABAJgGAHQgIAJgVAEQAZABAJAFQAUAHDMAGQjCAOAKABIARABQAJABAHAGQAHAGAAAHQAAANgPAFQgGACgTAAQgUABgoAGQF6AipCgDIgwAHIijAEQgZAHgcAAg");
	var mask_graphics_107 = new cjs.Graphics().p("A4CC5QhMAAg3g2Qg2g3AAhMQAAhMA2g2QA3g2BMAAMAnsAAAQAqAAAjAQIAhgBQAmgBBOABICsABIBYgCQBEgEgKAJQgKAJg8AMQg8ANgKAHIgKAKQAdALAXAUQAUAAALAEQAHADAGAGQAFAHAAAIIBMARQAUAEBUgIQBUgJhDATIhcAaQgaAGgTAAQgoAAgmALQAHAEAAAKQABAJgGAHQgIAJgVAEQAZABAJAFQAUAHDMAGQjCAOAKABIARABQAJABAHAGQAHAGAAAHQAAANgPAFQgGACgTAAQgUABgoAGQF6AipCgDIgwAHIijAEQgZAHgcAAg");
	var mask_graphics_108 = new cjs.Graphics().p("A4CC5QhMAAg3g2Qg2g3AAhMQAAhMA2g2QA3g2BMAAMAnsAAAQAqAAAjAQIAhgBQAmgBBOABICsABIBYgCQBEgEgKAJQgKAJg8AMQg8ANgKAHIgKAKQAdALAXAUQAUAAALAEQAHADAGAGQAFAHAAAIIBMARQAUAEBUgIQBUgJhDATIhcAaQgaAGgTAAQgoAAgmALQAHAEAAAKQABAJgGAHQgIAJgVAEQAZABAJAFQAUAHDMAGQjCAOAKABIARABQAJABAHAGQAHAGAAAHQAAANgPAFQgGACgTAAQgUABgoAGQF6AipCgDIgwAHIijAEQgZAHgcAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(94).to({graphics:mask_graphics_94,x:-172.4,y:18.5}).wait(1).to({graphics:mask_graphics_95,x:-148.5,y:18.5}).wait(1).to({graphics:mask_graphics_96,x:-124.6,y:18.5}).wait(1).to({graphics:mask_graphics_97,x:-100.7,y:18.5}).wait(1).to({graphics:mask_graphics_98,x:-76.8,y:18.5}).wait(1).to({graphics:mask_graphics_99,x:-52.9,y:18.5}).wait(1).to({graphics:mask_graphics_100,x:-29,y:18.5}).wait(1).to({graphics:mask_graphics_101,x:-5,y:18.5}).wait(1).to({graphics:mask_graphics_102,x:18.9,y:18.5}).wait(1).to({graphics:mask_graphics_103,x:42.8,y:18.5}).wait(1).to({graphics:mask_graphics_104,x:66.7,y:18.5}).wait(1).to({graphics:mask_graphics_105,x:90.6,y:18.5}).wait(1).to({graphics:mask_graphics_106,x:114.5,y:18.5}).wait(1).to({graphics:mask_graphics_107,x:138.4,y:18.5}).wait(1).to({graphics:mask_graphics_108,x:162.3,y:18.5}).wait(82));

	// Symbol 19
	this.instance = new lib.Symbol19();
	this.instance.parent = this;
	this.instance.setTransform(150.1,32.6,1,1,0,0,0,150.1,32.6);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(94).to({_off:false},0).wait(80).to({y:42.6,alpha:0},15).wait(1));

	// Layer 7 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_104 = new cjs.Graphics().p("A4CC5QhMAAg3g3Qg2g1AAhNQAAhMA2g2QA3g2BMAAMAnsAAAQAqAAAjARIAhgCQAmgBBOABICsACIBYgEQBEgDgKAJQgKAIg8ANQg8ANgKAIIgKAKQAdAKAXAUQAUAAALAFQAHACAGAHQAFAGAAAHIBMARQAUAFBUgIQBUgJhDAUIhcAZQgaAGgTAAQgoAAgmALQAHAEAAAJQABAKgGAGQgIAKgVAFQAZABAJADQAUAIDMAHQjCANAKAAIARABQAJACAHAFQAHAHAAAIQAAAMgPAGQgGACgTAAQgUAAgoAGQF6AipCgDIgwAHIijAEQgZAHgcAAg");
	var mask_1_graphics_105 = new cjs.Graphics().p("A4CC5QhMAAg3g3Qg2g1AAhNQAAhMA2g2QA3g2BMAAMAnsAAAQAqAAAjARIAhgCQAmgBBOABICsACIBYgDQBEgEgKAJQgKAIg8AOQg8AMgKAIIgKAKQAdAJAXAVQAUAAALAFQAHACAGAHQAFAGAAAHIBMARQAUAFBUgIQBUgIhDASIhcAaQgaAGgTAAQgoAAgmALQAHAEAAAJQABAKgGAGQgIAKgVAFQAZABAJADQAUAHDMAIQjCANAKAAIARABQAJACAHAFQAHAHAAAIQAAAMgPAGQgGABgTAAQgUABgoAGQF6AipCgDIgwAHIijAEQgZAHgcAAg");
	var mask_1_graphics_106 = new cjs.Graphics().p("A4CC5QhMAAg3g2Qg2g3AAhMQAAhMA2g2QA3g2BMAAMAnsAAAQAqAAAjARIAhgCQAmgBBOABICsACIBYgEQBEgCgKAIQgKAIg8ANQg8ANgKAHIgKALQAdAJAXAVQAUAAALAEQAHADAGAGQAFAHAAAHIBMASQAUAEBUgIQBUgJhDAUIhcAZQgaAGgTAAQgoAAgmALQAHAEAAAKQABAJgGAHQgIAKgVADQAZACAJAEQAUAGDMAHQjCANAKABIARABQAJACAHAGQAHAFAAAIQAAANgPAFQgGADgTAAQgUAAgoAGQF6AipCgDIgwAHIijAEQgZAHgcAAg");
	var mask_1_graphics_107 = new cjs.Graphics().p("A4CC5QhMAAg3g2Qg2g2AAhNQAAhMA2g2QA3g2BMAAMAnsAAAQAqAAAjARIAhgCQAmgBBOABICsACIBYgEQBEgCgKAIQgKAIg8ANQg8ANgKAIIgKAKQAdAJAXAVQAUAAALAFQAHACAGAHQAFAGAAAHIBMASQAUAEBUgIQBUgJhDAUIhcAZQgaAGgTAAQgoAAgmALQAHAEAAAJQABAKgGAHQgIAKgVADQAZACAJADQAUAIDMAHQjCANAKAAIARABQAJACAHAGQAHAFAAAJQAAAMgPAGQgGACgTAAQgUAAgoAGQF6AipCgDIgwAHIijAEQgZAHgcAAg");
	var mask_1_graphics_108 = new cjs.Graphics().p("A4CC5QhMAAg3g2Qg2g3AAhMQAAhMA2g2QA3g2BMAAMAnsAAAQAqAAAjAQIAhgBQAmgBBOABICsABIBYgDQBEgDgKAJQgKAJg8AMQg8ANgKAHIgKAKQAdALAXAUQAUAAALAEQAHADAGAGQAFAHAAAIIBMARQAUAEBUgIQBUgJhDATIhcAaQgaAGgTAAQgoAAgmALQAHAEAAAKQABAJgGAHQgIAJgVAEQAZABAJAFQAUAHDMAGQjCAOAKABIARABQAJABAHAGQAHAGAAAHQAAANgPAFQgGACgTAAQgUABgoAGQF6AipCgDIgwAHIijAEQgZAHgcAAg");
	var mask_1_graphics_109 = new cjs.Graphics().p("A4CC5QhMAAg3g2Qg2g3AAhMQAAhMA2g2QA3g2BMAAMAnsAAAQAqAAAjAQIAhgBQAmgBBOABICsABIBYgDQBEgCgKAIQgKAJg8AMQg8ANgKAHIgKAKQAdALAXAUQAUAAALAEQAHADAGAGQAFAHAAAIIBMARQAUAEBUgIQBUgJhDAUIhcAZQgaAGgTAAQgoAAgmALQAHAEAAAKQABAJgGAHQgIAJgVAEQAZABAJAFQAUAGDMAHQjCANAKACIARAAQAJACAHAGQAHAGAAAHQAAANgPAFQgGACgTABQgUAAgoAGQF6AipCgDIgwAHIijAEQgZAHgcAAg");
	var mask_1_graphics_110 = new cjs.Graphics().p("A4CC5QhMAAg3g3Qg2g2AAhMQAAhLA2g3QA3g2BMAAMAnsAAAQAqAAAjAQIAhgBQAmgBBOABICsABIBYgCQBEgDgKAIQgKAJg8ANQg8AMgKAHIgKAKQAdAKAXAVQAUAAALAEQAHADAGAHQAFAGAAAIIBMAQQAUAFBUgIQBUgIhDASIhcAaQgaAGgTAAQgoAAgmALQAHAEAAAKQABAJgGAGQgIALgVAEQAZABAJADQAUAHDMAHQjCANAKACIARABQAJABAHAFQAHAGAAAJQAAAMgPAFQgGACgTAAQgUABgoAGQF6AipCgDIgwAHIijAEQgZAHgcAAg");
	var mask_1_graphics_111 = new cjs.Graphics().p("A4CC5QhMAAg3g3Qg2g2AAhMQAAhLA2g3QA3g2BMAAMAnsAAAQAqAAAjAQIAhgBQAmgBBOABICsABIBYgCQBEgEgKAJQgKAJg8ANQg8AMgKAHIgKAKQAdALAXAUQAUAAALAEQAHADAGAGQAFAHAAAIIBMARQAUAEBUgIQBUgIhDASIhcAaQgaAGgTAAQgoAAgmALQAHAEAAAKQABAJgGAGQgIALgVADQAZABAJAFQAUAHDMAGQjCAOAKABIARABQAJABAHAGQAHAGAAAHQAAANgPAFQgGACgTAAQgUABgoAGQF6AipCgDIgwAHIijAEQgZAHgcAAg");
	var mask_1_graphics_112 = new cjs.Graphics().p("A4CC5QhMAAg3g2Qg2g3AAhMQAAhMA2g2QA3g2BMAAMAnsAAAQAqAAAjAQIAhgBQAmgBBOABICsABIBYgCQBEgEgKAJQgKAJg8AMQg8ANgKAHIgKAKQAdALAXAUQAUAAALAEQAHADAGAGQAFAHAAAIIBMARQAUAEBUgIQBUgJhDATIhcAaQgaAGgTAAQgoAAgmALQAHAEAAAKQABAJgGAHQgIAJgVAEQAZABAJAFQAUAHDMAGQjCAOAKABIARABQAJABAHAGQAHAGAAAHQAAANgPAFQgGACgTAAQgUABgoAGQF6AipCgDIgwAHIijAEQgZAHgcAAg");
	var mask_1_graphics_113 = new cjs.Graphics().p("A4CC5QhMAAg3g3Qg2g1AAhNQAAhLA2g3QA3g2BMAAMAnsAAAQAqAAAjAQIAhgBQAmgBBOABICsABIBYgCQBEgEgKAJQgKAIg8AOQg8AMgKAIIgKAKQAdAJAXAVQAUAAALAFQAHACAGAHQAFAGAAAHIBMARQAUAFBUgIQBUgIhDASIhcAaQgaAGgTAAQgoAAgmALQAHAEAAAJQABAKgGAGQgIAKgVAFQAZABAJADQAUAHDMAIQjCAMAKABIARACQAJABAHAFQAHAHAAAIQAAAMgPAGQgGABgTAAQgUABgoAGQF6AipCgDIgwAHIijAEQgZAHgcAAg");
	var mask_1_graphics_114 = new cjs.Graphics().p("A4CC5QhMAAg3g3Qg2g2AAhMQAAhLA2g3QA3g2BMAAMAnsAAAQAqAAAjAQIAhgBQAmgBBOABICsABIBYgCQBEgDgKAIQgKAJg8ANQg8AMgKAHIgKAKQAdAKAXAVQAUAAALAEQAHADAGAHQAFAGAAAIIBMAQQAUAFBUgIQBUgIhDASIhcAaQgaAGgTAAQgoAAgmALQAHAEAAAKQABAJgGAGQgIALgVAEQAZABAJADQAUAHDMAHQjCANAKACIARABQAJABAHAFQAHAGAAAJQAAAMgPAGQgGABgTAAQgUABgoAGQF6AipCgDIgwAHIijAEQgZAHgcAAg");
	var mask_1_graphics_115 = new cjs.Graphics().p("A4CC5QhMAAg3g2Qg2g2AAhNQAAhMA2g2QA3g2BMAAMAnsAAAQAqAAAjARIAhgCQAmgBBOABICsACIBYgEQBEgDgKAJQgKAIg8ANQg8ANgKAIIgKAKQAdAKAXAUQAUAAALAFQAHACAGAHQAFAGAAAHIBMARQAUAFBUgIQBUgJhDAUIhcAZQgaAGgTAAQgoAAgmALQAHAEAAAJQABAKgGAHQgIAJgVAFQAZABAJADQAUAIDMAHQjCANAKAAIARABQAJACAHAFQAHAHAAAIQAAAMgPAGQgGACgTAAQgUAAgoAGQF6AipCgDIgwAHIijAEQgZAHgcAAg");
	var mask_1_graphics_116 = new cjs.Graphics().p("A4CC5QhMAAg3g3Qg2g1AAhNQAAhMA2g2QA3g2BMAAMAnsAAAQAqAAAjARIAhgCQAmgBBOABICsACIBYgDQBEgEgKAJQgKAIg8AOQg8AMgKAIIgKAKQAdAKAXAUQAUAAALAFQAHACAGAHQAFAGAAAHIBMARQAUAFBUgIQBUgIhDASIhcAaQgaAGgTAAQgoAAgmALQAHAEAAAJQABAKgGAGQgIAKgVAFQAZABAJADQAUAHDMAIQjCANAKAAIARABQAJACAHAFQAHAHAAAIQAAAMgPAGQgGACgTAAQgUAAgoAGQF6AipCgDIgwAHIijAEQgZAHgcAAg");
	var mask_1_graphics_117 = new cjs.Graphics().p("A4CC5QhMAAg3g2Qg2g3AAhMQAAhMA2g2QA3g2BMAAMAnsAAAQAqAAAjARIAhgCQAmgBBOABICsACIBYgEQBEgCgKAIQgKAIg8ANQg8ANgKAHIgKALQAdAJAXAVQAUAAALAEQAHADAGAGQAFAHAAAHIBMASQAUAEBUgIQBUgJhDAUIhcAZQgaAGgTAAQgoAAgmALQAHAEAAAJQABAKgGAHQgIAKgVADQAZACAJAEQAUAGDMAHQjCANAKABIARABQAJACAHAGQAHAFAAAIQAAANgPAFQgGADgTAAQgUAAgoAGQF6AipCgDIgwAHIijAEQgZAHgcAAg");
	var mask_1_graphics_118 = new cjs.Graphics().p("A4CC5QhMAAg3g2Qg2g2AAhNQAAhMA2g2QA3g2BMAAMAnsAAAQAqAAAjARIAhgCQAmgBBOABICsACIBYgEQBEgCgKAIQgKAIg8ANQg8ANgKAIIgKAKQAdAJAXAVQAUAAALAFQAHACAGAHQAFAGAAAHIBMARQAUAFBUgIQBUgJhDAUIhcAZQgaAGgTAAQgoAAgmALQAHAEAAAJQABAKgGAHQgIAKgVADQAZACAJAEQAUAHDMAHQjCANAKAAIARABQAJACAHAFQAHAGAAAJQAAAMgPAGQgGACgTAAQgUAAgoAGQF6AipCgDIgwAHIijAEQgZAHgcAAg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(104).to({graphics:mask_1_graphics_104,x:-165.1,y:46.8}).wait(1).to({graphics:mask_1_graphics_105,x:-141.7,y:46.9}).wait(1).to({graphics:mask_1_graphics_106,x:-118.4,y:47.1}).wait(1).to({graphics:mask_1_graphics_107,x:-95,y:47.2}).wait(1).to({graphics:mask_1_graphics_108,x:-71.6,y:47.3}).wait(1).to({graphics:mask_1_graphics_109,x:-48.2,y:47.4}).wait(1).to({graphics:mask_1_graphics_110,x:-24.8,y:47.6}).wait(1).to({graphics:mask_1_graphics_111,x:-1.4,y:47.7}).wait(1).to({graphics:mask_1_graphics_112,x:22,y:47.8}).wait(1).to({graphics:mask_1_graphics_113,x:45.3,y:47.9}).wait(1).to({graphics:mask_1_graphics_114,x:68.7,y:48}).wait(1).to({graphics:mask_1_graphics_115,x:92.1,y:48.2}).wait(1).to({graphics:mask_1_graphics_116,x:115.5,y:48.3}).wait(1).to({graphics:mask_1_graphics_117,x:138.9,y:48.4}).wait(1).to({graphics:mask_1_graphics_118,x:162.3,y:48.5}).wait(72));

	// Layer 8
	this.instance_1 = new lib.Symbol19();
	this.instance_1.parent = this;
	this.instance_1.setTransform(150.1,32.6,1,1,0,0,0,150.1,32.6);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(104).to({_off:false},0).wait(70).to({y:42.6,alpha:0},15).wait(1));

	// Layer 4 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_0 = new cjs.Graphics().p("A4CC5QhMAAg3g2Qg2g3AAhMQAAhMA2g2QA3g2BMAAMAnsAAAQAqAAAjAQIAhgBQAmgBBOABICsABIBYgDQBEgDgKAJQgKAJg8ANQg8AMgKAHIgKAKQAdALAXAUQAUAAALAEQAHADAGAGQAFAHAAAIIBMARQAUAEBUgIQBUgJhDATIhcAaQgaAGgTAAQgoAAgmALQAHAEAAAKQABAJgGAHQgIAJgVAEQAZABAJAFQAUAHDMAGQjCAOAKABIARABQAJABAHAGQAHAGAAAHQAAANgPAFQgGACgTAAQgUABgoAGQF6AipCgDIgwAHIijAEQgZAHgcAAg");
	var mask_2_graphics_1 = new cjs.Graphics().p("A4WC5QhOAAg3g2Qg3g3AAhMQAAhMA3g2QA3g2BOAAMAoOAAAQAqAAAkAQIAhgBQAngBBOABICvABIBZgDQBFgDgKAJQgLAJg8ANQg9AMgKAHIgKAKQAdALAYAUQAUAAALAEQAHADAGAGQAFAHAAAIIBNARQAVAEBVgIQBUgJhDATIhdAaQgbAGgTAAQgoAAgnALQAHAEAAAKQABAJgGAHQgIAJgWAEQAaABAJAFQAUAHDPAGQjFAOAKABIARABQAKABAHAGQAHAGAAAHQAAANgPAFQgHACgSAAQgVABgpAGQGAAipKgDIgxAHIilAEQgZAHgcAAg");
	var mask_2_graphics_2 = new cjs.Graphics().p("A4rC5QhOAAg4g2Qg4g3AAhMQAAhMA4g2QA4g2BOAAMAowAAAQArAAAkAQIAigBQAngBBQABICwABIBbgDQBGgDgLAJQgKAJg+ANQg9AMgLAHIgKAKQAfALAXAUQAVAAAKAEQAIADAGAGQAFAHAAAIIBPARQAUAEBWgIQBWgJhEATIhfAaQgaAGgUAAQgpAAgoALQAIAEAAAKQABAJgGAHQgJAJgVAEQAZABAKAFQAVAHDRAGQjIAOALABIARABQAKABAHAGQAHAGAAAHQAAANgPAFQgHACgTAAQgVABgpAGQGEAipRgDIgyAHIimAEQgaAHgdAAg");
	var mask_2_graphics_3 = new cjs.Graphics().p("A5AC5QhQAAg4g2Qg4g3AAhMQAAhMA4g2QA4g2BQAAMApSAAAQAsAAAkAQIAigBQAogBBRABICzABIBbgDQBHgDgKAJQgLAJg+ANQg/AMgKAHIgKAKQAeALAYAUQAVAAALAEQAIADAFAGQAGAHAAAIIBPARQAVAEBXgIQBXgJhFATIhgAaQgbAGgUAAQgpAAgoALQAHAEABAKQAAAJgGAHQgIAJgWAEQAaABAKAFQAUAHDUAGQjKAOALABIARABQAKABAHAGQAIAGAAAHQAAANgQAFQgHACgTAAQgVABgqAGQGKAipagDIgyAHIipAEQgaAHgdAAg");
	var mask_2_graphics_4 = new cjs.Graphics().p("A5UC5QhRAAg5g2Qg5g3AAhMQAAhMA5g2QA5g2BRAAMAp0AAAQAsAAAlAQIAigBQApgBBSABIC1ABIBdgDQBHgDgKAJQgLAJg/ANQg/AMgLAHQgHAGgDAEQAfALAYAUQAVAAALAEQAIADAGAGQAFAHABAIIBQARQAVAEBYgIQBYgJhGATIhhAaQgbAGgVAAQgpAAgpALQAIAEAAAKQABAJgGAHQgJAJgWAEQAaABAKAFQAVAHDXAGQjNAOALABIASABQAKABAGAGQAIAGAAAHQAAANgPAFQgHACgUAAQgVABgrAGQGPAiphgDIgzAHIirAEQgaAHgeAAg");
	var mask_2_graphics_5 = new cjs.Graphics().p("A5pC5QhRAAg6g2Qg6g3AAhMQAAhMA6g2QA6g2BRAAMAqXAAAQAsAAAmAQIAigBQApgBBTABIC4ABIBegDQBIgDgLAJQgKAJhAANQhAAMgLAHIgLAKQAgALAYAUQAWAAALAEQAIADAGAGQAFAHABAIIBRARQAVAEBagIQBZgJhHATIhiAaQgcAGgVAAQgqAAgpALQAHAEABAKQAAAJgFAHQgJAJgXAEQAbABAKAFQAVAHDZAGQjPAOALABIASABQAKABAHAGQAIAGAAAHQAAANgQAFQgHACgTAAQgWABgrAGQGTAipogDIg0AHIitAEQgbAHgdAAg");
	var mask_2_graphics_6 = new cjs.Graphics().p("A59C5QhTAAg7g2Qg6g3AAhMQAAhMA6g2QA7g2BTAAMAq4AAAQAtAAAmAQIAjgBQAqgBBUABIC5ABIBggDQBJgDgLAJQgLAJhAANQhBAMgLAHQgHAGgEAEQAgALAZAUQAVAAAMAEQAIADAGAGQAFAHABAIIBSARQAWAEBagIQBagJhHATIhkAaQgcAGgVAAQgrAAgpALQAHAEABAKQAAAJgFAHQgKAJgWAEQAbABAKAFQAWAHDbAGQjRAOALABIASABQAKABAHAGQAIAGAAAHQAAANgQAFQgHACgUAAQgWABgrAGQGYAipwgDIg0AHIiwAEQgbAHgeAAg");
	var mask_2_graphics_7 = new cjs.Graphics().p("A6SC5QhUAAg7g2Qg7g3AAhMQAAhMA7g2QA7g2BUAAMArbAAAQAtAAAnAQIAjgBQAqgBBVABIC8ABIBhgDQBKgDgLAJQgLAJhCANQhBAMgLAHIgLAKQAgALAZAUQAWAAAMAEQAIADAGAGQAFAHABAIIBTARQAWAEBcgIQBbgJhJATIhkAaQgdAGgVAAQgrAAgqALQAHAEABAKQAAAJgGAHQgJAJgXAEQAcABAKAFQAWAHDeAGQjUAOALABIATABQAKABAHAGQAIAGAAAHQAAANgQAFQgHACgUAAQgXABgsAGQGeAip4gDIg1AHIiyAEQgbAHgeAAg");
	var mask_2_graphics_8 = new cjs.Graphics().p("A6nC5QhVAAg8g2Qg8g3AAhMQAAhMA8g2QA8g2BVAAMAr8AAAQAvAAAnAQIAkgBQAqgBBWABIC/ABIBhgDQBLgDgLAJQgLAJhCANQhDAMgLAHQgHAGgEAEQAhALAZAUQAWAAAMAEQAIADAGAGQAGAHABAIIBUARQAWAEBdgIQBcgJhJATIhmAaQgdAGgWAAQgrAAgrALQAIAEAAAKQABAJgGAHQgKAJgXAEQAcABAKAFQAXAHDhAGQjXAOALABIATABQAKABAIAGQAIAGAAAHQAAANgRAFQgHACgUAAQgXABgsAGQGiAiqAgDIg1AHIi0AEQgcAHgfAAg");
	var mask_2_graphics_9 = new cjs.Graphics().p("A68C5QhVAAg9g2Qg9g3AAhMQAAhMA9g2QA9g2BVAAMAsfAAAQAvAAAnAQIAlgBQArgBBXABIDAABIBjgDQBMgDgLAJQgLAJhDANQhEAMgLAHQgHAGgEAEQAhALAaAUQAWAAAMAEQAIADAGAGQAGAHABAIIBVARQAWAEBegIQBegJhLATIhnAaQgdAGgWAAQgsAAgrALQAIAEAAAKQABAJgGAHQgKAJgXAEQAcABAKAFQAXAHDkAGQjaAOAMABIATABQAKABAHAGQAJAGAAAHQAAANgRAFQgHACgVAAQgXABgtAGQGoAiqIgDIg2AHIi2AEQgcAHgfAAg");
	var mask_2_graphics_10 = new cjs.Graphics().p("A7QC5QhXAAg+g2Qg9g3AAhMQAAhMA9g2QA+g2BXAAMAtAAAAQAwAAAoAQIAlgBQArgBBYABIDDABIBkgDQBNgDgLAJQgMAJhEANQhEAMgLAHIgLAKQAhALAaAUQAXAAAMAEQAIADAGAGQAGAHABAIIBWARQAXAEBfgIQBegJhLATIhoAaQgeAGgWAAQgtAAgrALQAIAEAAAKQABAJgGAHQgKAJgYAEQAdABAKAFQAXAHDnAGQjcAOALABIATABQALABAHAGQAJAGAAAHQAAANgRAFQgHACgVAAQgYABgtAGQGtAiqQgDIg2AHIi5AEQgcAHggAAg");
	var mask_2_graphics_11 = new cjs.Graphics().p("A7kC5QhYAAg/g2Qg+g3AAhMQAAhMA+g2QA/g2BYAAMAtiAAAQAwAAApAQIAlgBQAsgBBZABIDFABIBlgDQBOgDgLAJQgMAJhEANQhFAMgMAHQgHAGgEAEQAiALAaAUQAXAAAMAEQAJADAGAGQAGAHAAAIIBYARQAWAEBhgIQBggJhNATIhpAaQgeAGgWAAQguAAgsALQAIAEABAKQAAAJgGAHQgKAJgYAEQAdABALAFQAXAHDpAGQjeAOALABIATABQALABAIAGQAIAGAAAHQAAANgRAFQgHACgVAAQgYABguAGQGyAiqXgDIg3AHIi7AEQgdAHggAAg");
	var mask_2_graphics_12 = new cjs.Graphics().p("A76C5QhYAAg/g2Qg/g3AAhMQAAhMA/g2QA/g2BYAAMAuFAAAQAxAAApAQIAlgBQAtgBBaABIDIABIBmgDQBPgDgMAJQgMAJhFANQhGAMgLAHQgIAGgEAEQAiALAbAUQAXAAAMAEQAJADAGAGQAGAHABAIIBYARQAXAEBigIQBhgJhNATIhrAaQgeAGgXAAQguAAgtALQAJAEAAAKQABAJgHAHQgKAJgYAEQAdABALAFQAXAHDtAGQjiAOAMABIAUABQALABAHAGQAJAGAAAHQAAANgRAFQgIACgVAAQgYABgvAGQG3AiqfgDIg4AHIi8AEQgdAHghAAg");
	var mask_2_graphics_13 = new cjs.Graphics().p("A8OC5QhaAAhAg2Qg/g3AAhMQAAhMA/g2QBAg2BaAAMAunAAAQAxAAApAQIAmgBQAugBBbABIDKABIBngDQBQgDgMAJQgMAJhGANQhHAMgMAHQgHAGgEAEQAjALAaAUQAYAAAMAEQAJADAGAGQAGAHABAIIBZARQAYAEBigIQBigJhOATIhsAaQgeAGgXAAQgvAAgtALQAJAEAAAKQABAJgHAHQgKAJgYAEQAdABALAFQAYAHDvAGQjkAOAMABIATABQALABAIAGQAJAGAAAHQAAANgSAFQgHACgWAAQgYABgvAGQG8AiqngDIg4AHIi/AEQgeAHggAAg");
	var mask_2_graphics_14 = new cjs.Graphics().p("A8jC5QhaAAhBg2QhAg3AAhMQAAhMBAg2QBBg2BaAAMAvJAAAQAyAAAqAQIAmgBQAugBBcABIDMABIBpgDQBRgDgMAJQgMAJhHANQhIAMgMAHQgHAGgEAEQAjALAbAUQAYAAAMAEQAJADAGAGQAGAHABAIIBaARQAYAEBkgIQBjgJhPATIhtAaQgfAGgXAAQgvAAguALQAJAEAAAKQABAJgHAHQgKAJgZAEQAeABALAFQAYAHDyAGQjnAOAMABIAUABQALABAIAGQAJAGAAAHQAAANgSAFQgIACgVAAQgZABgvAGQHBAiqvgDIg5AHIjBAEQgeAHghAAg");
	var mask_2_graphics_15 = new cjs.Graphics().p("A83C5QhcAAhBg2QhBg3AAhMQAAhMBBg2QBBg2BcAAMAvrAAAQAyAAAqAQIAngBQAugBBdABIDPABIBqgDQBRgDgMAJQgMAJhIANQhIAMgMAHQgIAGgEAEQAkALAbAUQAYAAANAEQAJADAHAGQAGAHAAAIIBcARQAXAEBlgIQBlgJhQATIhvAaQgfAGgXAAQgwAAguALQAIAEABAKQAAAJgGAHQgKAJgaAEQAfABALAFQAYAHD0AGQjpAOAMABIAVABQALABAIAGQAJAGAAAHQAAANgSAFQgIACgWAAQgZABgwAGQHGAiq2gDIg6AHIjDAEQgeAHghAAg");
	var mask_2_graphics_16 = new cjs.Graphics().p("A9MC5QhdAAhCg2QhBg3AAhMQAAhMBBg2QBCg2BdAAMAwNAAAQAzAAArAQIAngBQAvgBBeABIDRABIBrgDQBSgDgMAJQgMAJhJANQhJAMgMAHQgIAGgEAEQAkALAcAUQAYAAANAEQAJADAHAGQAGAHAAAIIBdARQAYAEBmgIQBlgJhQATIhwAaQggAGgXAAQgwAAgvALQAIAEABAKQAAAJgGAHQgLAJgZAEQAfABALAFQAYAHD3AGQjrAOAMABIAVABQALABAIAGQAJAGAAAHQAAANgSAFQgIACgXAAQgYABgxAGQHLAiq+gDIg6AHIjFAEQgfAHgiAAg");
	var mask_2_graphics_17 = new cjs.Graphics().p("A9gC5QheAAhDg2QhCg3AAhMQAAhMBCg2QBDg2BeAAMAwvAAAQAzAAArAQIAogBQAvgBBfABIDUABIBsgDQBTgDgMAJQgMAJhKANQhKAMgMAHQgIAGgEAEQAkALAcAUQAZAAANAEQAJADAHAGQAGAHABAIIBdARQAYAEBngIQBngJhSATIhxAaQggAGgXAAQgxAAgvALQAIAEABAKQAAAJgGAHQgLAJgaAEQAfABAMAFQAZAHD5AGQjuAOAMABIAVABQAMABAIAGQAJAGAAAHQAAANgSAFQgIACgXAAQgZABgxAGQHQAirGgDIg7AHIjHAEQgfAHgiAAg");
	var mask_2_graphics_18 = new cjs.Graphics().p("A91C5QhfAAhDg2QhDg3AAhMQAAhMBDg2QBDg2BfAAMAxRAAAQA0AAAsAQIAogBQAwgBBgABIDWABIBtgDQBUgDgMAJQgNAJhKANQhLAMgMAHQgIAGgEAEQAkALAdAUQAZAAAMAEQAKADAHAGQAGAHABAIIBeARQAZAEBogIQBngJhSATIhyAaQggAGgZAAQgxAAgwALQAJAEABAKQAAAJgGAHQgLAJgaAEQAfABAMAFQAZAHD8AGQjxAOANABIAVABQAMABAIAGQAJAGAAAHQAAANgSAFQgJACgXAAQgZABgyAGQHWAirOgDIg8AHIjJAEQgfAHgjAAg");
	var mask_2_graphics_19 = new cjs.Graphics().p("A+KC5QhgAAhEg2QhEg3AAhMQAAhMBEg2QBEg2BgAAMAx0AAAQA0AAAsAQIApgBQAwgBBhABIDYABIBvgDQBVgDgNAJQgMAJhLANQhMAMgMAHQgJAGgEAEQAlALAdAUQAZAAANAEQAKADAHAGQAGAHABAIIBfARQAZAEBpgIQBpgJhTATIh0AaQggAGgZAAQgxAAgxALQAJAEABAKQAAAJgHAHQgKAJgbAEQAgABAMAFQAZAHD/AGQjzAOAMABIAWABQALABAJAGQAJAGAAAHQAAANgTAFQgIACgXAAQgaABgyAGQHaAirVgDIg8AHIjMAEQggAHgiAAg");
	var mask_2_graphics_20 = new cjs.Graphics().p("A+eC5QhhAAhFg2QhFg3AAhMQAAhMBFg2QBFg2BhAAMAyVAAAQA1AAAtAQIApgBQAxgBBiABIDaABIBwgDQBWgDgNAJQgNAJhMANQhMAMgNAHQgIAGgEAEQAlALAdAUQAaAAANAEQAKADAHAGQAGAHABAIIBgARQAZAEBrgIQBqgJhUATIh1AaQghAGgZAAQgyAAgxALQAJAEABAKQAAAJgHAHQgLAJgaAEQAgABAMAFQAZAHECAGQj2AOANABIAVABQAMABAJAGQAJAGAAAHQAAANgTAFQgIACgYAAQgaABgyAGQHfAirdgDIg9AHIjOAEQggAHgjAAg");
	var mask_2_graphics_21 = new cjs.Graphics().p("A+zC5QhiAAhFg2QhGg3AAhMQAAhMBGg2QBFg2BiAAMAy4AAAQA1AAAtAQIAqgBQAxgBBjABIDdABIBxgDQBXgDgNAJQgNAJhNANQhNAMgNAHIgMAKQAmALAdAUQAaAAANAEQAKADAHAGQAGAHABAIIBhARQAaAEBrgIQBrgJhVATIh2AaQghAGgZAAQgzAAgxALQAJAEABAKQAAAJgHAHQgLAJgbAEQAhABAMAFQAZAHEFAGQj5AOANABIAWABQAMABAIAGQAKAGAAAHQAAANgTAFQgJACgXAAQgaABg0AGQHlAirlgDIg+AHIjQAEQggAHgjAAg");
	var mask_2_graphics_22 = new cjs.Graphics().p("A/IC5QhiAAhHg2QhGg3AAhMQAAhMBGg2QBHg2BiAAMAzaAAAQA2AAAuAQIAqgBQAygBBkABIDfABIBxgDQBZgDgNAJQgNAJhOANQhOAMgNAHQgIAGgEAEQAmALAdAUQAaAAAOAEQAKADAHAGQAGAHABAIIBiARQAaAEBtgIQBsgJhWATIh3AaQgiAGgZAAQgzAAgyALQAJAEABAKQAAAJgHAHQgLAJgbAEQAgABANAFQAaAHEHAGQj7AOANABIAWABQAMABAIAGQAKAGAAAHQAAANgTAFQgJACgYAAQgaABg0AGQHqAirtgDIg+AHIjSAEQghAHgkAAg");
	var mask_2_graphics_23 = new cjs.Graphics().p("A/dC5QhkAAhHg2QhGg3AAhMQAAhMBGg2QBHg2BkAAMAz8AAAQA3AAAuAQIAqgBQAzgBBlABIDhABIBzgDQBZgDgNAJQgNAJhPANQhOAMgNAHQgJAGgEAEQAmALAeAUQAbAAANAEQAKADAHAGQAHAHABAIIBjARQAaAEBugIQBtgJhXATIh4AaQgiAGgaAAQgzAAgzALQAKAEAAAKQABAJgIAHQgLAJgbAEQAhABAMAFQAaAHELAGQj+AOANABIAWABQAMABAJAGQAKAGAAAHQAAANgUAFQgJACgYAAQgaABg1AGQHvAir0gDIg/AHIjVAEQghAHgkAAg");
	var mask_2_graphics_24 = new cjs.Graphics().p("A/xC5QhlAAhIg2QhHg3AAhMQAAhMBHg2QBIg2BlAAMA0dAAAQA4AAAuAQIArgBQAzgBBmABIDkABIB0gDQBagDgNAJQgOAJhPANQhPAMgOAHQgIAGgEAEQAnALAeAUQAaAAAOAEQAKADAHAGQAHAHABAIIBkARQAaAEBvgIQBvgJhYATIh6AaQgiAGgaAAQg0AAgzALQAKAEAAAKQABAJgIAHQgLAJgcAEQAiABAMAFQAbAHENAGQkBAOANABIAXABQAMABAJAGQAKAGAAAHQAAANgUAFQgJACgYAAQgbABg1AGQH0Air8gDIhAAHIjXAEQghAHglAAg");
	var mask_2_graphics_25 = new cjs.Graphics().p("EggGAC5QhmAAhIg2QhIg3AAhMQAAhMBIg2QBIg2BmAAMA1AAAAQA4AAAvAQIArgBQAzgBBoABIDmABIB1gDQBbgDgOAJQgNAJhQANQhQAMgOAHQgIAGgFAEQAoALAeAUQAbAAAOAEQAKADAHAGQAHAHABAIIBlARQAbAEBwgIQBvgJhYATIh7AaQgjAGgaAAQg1AAgzALQAJAEABAKQAAAJgHAHQgLAJgcAEQAhABANAFQAbAHEPAGQkDAOAOABIAWABQANABAJAGQAKAGAAAHQAAANgUAFQgJACgZAAQgbABg1AGQH4AisDgDIhBAHIjYAEQgiAHglAAg");
	var mask_2_graphics_26 = new cjs.Graphics().p("EggaAC5QhnAAhJg2QhJg3AAhMQAAhMBJg2QBJg2BnAAMA1iAAAQA4AAAwAQIArgBQA0gBBpABIDoABIB2gDQBcgDgOAJQgNAJhRANQhRAMgNAHQgJAGgFAEQAoALAfAUQAbAAAOAEQAKADAIAGQAGAHABAIIBnARQAbAEBxgIQBwgJhZATIh8AaQgjAGgaAAQg2AAg0ALQAKAEAAAKQABAJgHAHQgMAJgcAEQAiABAMAFQAcAHESAGQkGAOAOABIAXABQAMABAJAGQAKAGAAAHQAAANgUAFQgJACgZAAQgbABg2AGQH9AisLgDIhBAHIjbAEQgiAHglAAg");
	var mask_2_graphics_27 = new cjs.Graphics().p("EggvAC5QhoAAhKg2QhJg3AAhMQAAhMBJg2QBKg2BoAAMA2EAAAQA5AAAwAQIAsgBQA1gBBpABIDrABIB3gDQBdgDgOAJQgNAJhSANQhSAMgNAHQgJAGgFAEQAoALAfAUQAcAAAOAEQAKADAIAGQAHAHABAIIBnARQAbAEBygIQBygJhaATIh+AaQgjAGgbAAQg1AAg1ALQAKAEAAAKQABAJgIAHQgLAJgdAEQAjABAMAFQAcAHEVAGQkIAOANABIAXABQANABAJAGQAKAGAAAHQAAANgUAFQgJACgZAAQgcABg3AGQIDAisTgDIhBAHIjeAEQgiAHgmAAg");
	var mask_2_graphics_28 = new cjs.Graphics().p("EghEAC5QhpAAhKg2QhLg3AAhMQAAhMBLg2QBKg2BpAAMA2mAAAQA6AAAwAQIAtgBQA1gBBqABIDtABIB5gDQBdgDgOAJQgNAJhTANQhSAMgOAHQgJAGgFAEQApALAfAUQAcAAAOAEQALADAHAGQAHAHABAIIBpARQAbAEBzgIQBzgJhbATIh/AaQgjAGgbAAQg3AAg1ALQAKAEABAKQAAAJgHAHQgMAJgdAEQAjABANAFQAcAHEXAGQkLAOAOABIAYABQAMABAJAGQALAGAAAHQAAANgVAFQgJACgZAAQgcABg3AGQIHAisagDIhDAHIjfAEQgjAHgmAAg");
	var mask_2_graphics_29 = new cjs.Graphics().p("EghYAC5QhqAAhMg2QhLg3AAhMQAAhMBLg2QBMg2BqAAMA3IAAAQA6AAAxAQIAtgBQA1gBBsABIDvABIB6gDQBegDgOAJQgOAJhTANQhTAMgOAHQgJAGgFAEQApALAgAUQAcAAAOAEQALADAHAGQAHAHABAIIBqARQAbAEB1gIQB0gJhcATIiAAaQgkAGgbAAQg3AAg2ALQAKAEABAKQAAAJgHAHQgMAJgdAEQAjABANAFQAcAHEaAGQkNAOAOABIAXABQANABAJAGQALAGAAAHQAAANgVAFQgJACgaAAQgcABg4AGQINAisigDIhDAHIjiAEQgjAHgmAAg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:mask_2_graphics_0,x:-172.4,y:17.2}).wait(1).to({graphics:mask_2_graphics_1,x:-158.8,y:17.2}).wait(1).to({graphics:mask_2_graphics_2,x:-145.3,y:17.2}).wait(1).to({graphics:mask_2_graphics_3,x:-131.7,y:17.2}).wait(1).to({graphics:mask_2_graphics_4,x:-118.2,y:17.2}).wait(1).to({graphics:mask_2_graphics_5,x:-104.6,y:17.2}).wait(1).to({graphics:mask_2_graphics_6,x:-91.1,y:17.2}).wait(1).to({graphics:mask_2_graphics_7,x:-77.5,y:17.2}).wait(1).to({graphics:mask_2_graphics_8,x:-63.9,y:17.2}).wait(1).to({graphics:mask_2_graphics_9,x:-50.4,y:17.2}).wait(1).to({graphics:mask_2_graphics_10,x:-36.8,y:17.2}).wait(1).to({graphics:mask_2_graphics_11,x:-23.3,y:17.2}).wait(1).to({graphics:mask_2_graphics_12,x:-9.7,y:17.2}).wait(1).to({graphics:mask_2_graphics_13,x:3.8,y:17.2}).wait(1).to({graphics:mask_2_graphics_14,x:17.4,y:17.2}).wait(1).to({graphics:mask_2_graphics_15,x:30.9,y:17.2}).wait(1).to({graphics:mask_2_graphics_16,x:44.5,y:17.2}).wait(1).to({graphics:mask_2_graphics_17,x:58,y:17.2}).wait(1).to({graphics:mask_2_graphics_18,x:71.6,y:17.2}).wait(1).to({graphics:mask_2_graphics_19,x:85.1,y:17.2}).wait(1).to({graphics:mask_2_graphics_20,x:98.7,y:17.2}).wait(1).to({graphics:mask_2_graphics_21,x:112.2,y:17.2}).wait(1).to({graphics:mask_2_graphics_22,x:125.8,y:17.2}).wait(1).to({graphics:mask_2_graphics_23,x:139.4,y:17.2}).wait(1).to({graphics:mask_2_graphics_24,x:152.9,y:17.2}).wait(1).to({graphics:mask_2_graphics_25,x:166.5,y:17.2}).wait(1).to({graphics:mask_2_graphics_26,x:180,y:17.2}).wait(1).to({graphics:mask_2_graphics_27,x:193.5,y:17.2}).wait(1).to({graphics:mask_2_graphics_28,x:207.1,y:17.2}).wait(1).to({graphics:mask_2_graphics_29,x:220.7,y:17.2}).wait(161));

	// Symbol 18
	this.instance_2 = new lib.Symbol18();
	this.instance_2.parent = this;
	this.instance_2.setTransform(210.3,17.8,1,1,0,0,0,210.3,17.8);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(79).to({y:27.8,alpha:0},15).to({_off:true},1).wait(95));

	// Layer 2
	this.instance_3 = new lib.Symbol23();
	this.instance_3.parent = this;
	this.instance_3.setTransform(232.6,21.3,1.087,1,0,0,0,220.7,19.6);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(190));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.7,0,480.8,41.4);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol16();
	this.instance.parent = this;
	this.instance.setTransform(148.5,35.8,1,1,0,0,0,148.5,35.8);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:148.6,scaleX:0.95,scaleY:0.95,x:148.6},22,cjs.Ease.quadInOut).to({regX:148.5,scaleX:1,scaleY:1,x:148.5},23,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,299,73.5);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol6();
	this.instance.parent = this;
	this.instance.setTransform(103.5,80,1,1,0,0,0,103.5,80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(0,0,207,160), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol21();
	this.instance.parent = this;
	this.instance.setTransform(150,224.5,1,1,0,0,0,150,224.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:110},38,cjs.Ease.quadInOut).to({x:150},37,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,449);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(193,234,1,1,0,0,0,193,234);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,386,468), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol4();
	this.instance.parent = this;
	this.instance.setTransform(55.5,82,1,1,0,0,0,55.5,82);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,111,164), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 14
	this.instance = new lib.Symbol14();
	this.instance.parent = this;
	this.instance.setTransform(253.2,151.7,0.539,0.539,-22.7,0,0,103.4,80.2);
	this.instance.filters = [new cjs.BlurFilter(7, 7, 1)];
	this.instance.cache(-2,-2,211,164);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:131.7},34,cjs.Ease.quadInOut).to({y:151.7},35,cjs.Ease.quadInOut).wait(1));

	// Symbol 14
	this.instance_1 = new lib.Symbol14();
	this.instance_1.parent = this;
	this.instance_1.setTransform(260.7,62,0.347,0.347,-52.7,0,0,103.5,80.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:80.4,scaleX:0.35,scaleY:0.35,x:260.6,y:57.6},16).wait(1).to({y:67.6},34,cjs.Ease.quadInOut).to({regY:80.6,scaleX:0.35,scaleY:0.35,y:62.3},18,cjs.Ease.quadInOut).wait(1));

	// Symbol 14
	this.instance_2 = new lib.Symbol14();
	this.instance_2.parent = this;
	this.instance_2.setTransform(44.5,122,0.285,0.285,22.3,0,0,104,80.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:103.8,scaleX:0.29,scaleY:0.29,x:44.4,y:122.7},6).wait(1).to({y:112.7},34,cjs.Ease.quadInOut).to({regX:103.9,scaleX:0.28,scaleY:0.28,y:121.9},28,cjs.Ease.quadInOut).wait(1));

	// Symbol 14
	this.instance_3 = new lib.Symbol14();
	this.instance_3.parent = this;
	this.instance_3.setTransform(159,119.8,0.414,0.414,-7.5,0,0,103.9,80.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:103.7,regY:80.2,rotation:-7.7,x:158.8,y:102.4},26).wait(1).to({y:122.4},34,cjs.Ease.quadInOut).to({regX:103.8,regY:80.3,rotation:-7.6,x:158.9,y:120.3},8,cjs.Ease.quadInOut).wait(1));

	// Layer 2
	this.instance_4 = new lib.Symbol24();
	this.instance_4.parent = this;
	this.instance_4.setTransform(186.6,110.6,1,1,0,0,0,318.5,94.7);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(70));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-131.9,15.9,637.1,212.4);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 4
	this.instance = new lib.Symbol9();
	this.instance.parent = this;
	this.instance.setTransform(215.2,330.8,1,1,-9.9,0,0,55.6,82);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-1.3,x:224.4,y:328.1},9,cjs.Ease.get(-1)).to({regX:55.5,rotation:8.2,x:234.5,y:325},10,cjs.Ease.get(1)).to({regX:55.6,rotation:-0.8,x:224.9,y:328},10,cjs.Ease.get(-1)).to({rotation:-9.9,x:215.2,y:330.8},10,cjs.Ease.get(1)).wait(1));

	// Symbol 3
	this.instance_1 = new lib.Symbol10();
	this.instance_1.parent = this;
	this.instance_1.setTransform(193,234,1,1,0,0,0,193,234);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,386,468);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol5();
	this.instance.parent = this;
	this.instance.setTransform(193,234,1,1,0,0,0,193,234);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,0,386,468), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol11();
	this.instance.parent = this;
	this.instance.setTransform(193,234,1,1,0,0,0,193,234);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:245},39,cjs.Ease.quadInOut).to({y:234},40,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,386,468);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.girl2 = new lib.Symbol12();
	this.girl2.parent = this;
	this.girl2.setTransform(110,133.4,0.57,0.57,0,0,0,193,234.1);

	this.timeline.addTween(cjs.Tween.get(this.girl2).to({x:130},49,cjs.Ease.quadInOut).to({x:110},50,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,220,266.7);


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
				//var minWidth = 1650;
				//var scaleW = w / minWidth;
				
				_this.logo.x = 1;
				_this.logo.y = 10;
				
				_this.btn.x = w < 551 ? w / 2 : 170;
				_this.btn.y = 200;
				
				_this.bg.x = w * 0.5;
				_this.bg.y = 125;
				
				_this.chips.x = w * 0.55;
				_this.chips.y = 160;
				
			
				_this.tower.x = w * 0.45;
				_this.tower.y = 200;
			
				_this.girl.x = w < 800 ? w - 200 : w * 0.75;
				_this.girl.y = 1;
				_this.girl.visible = w < 551 ? false : true;
		
				_this.txt.x = 15;
				_this.txt.y = 80;
				
				var Elements = [_this.btn, _this.chips, _this.logo, _this.tower, _this.girl, _this.txt];
				
		
		
			
			
			
			function ResizeAll(){
				
				for(var i = 0; i < Elements.length; i++){
					var el = Elements[i];
					el.scaleX = el.scaleY = w < el.nominalBounds.width ? w / el.nominalBounds.width : 1;
					console.log(w / el.nominalBounds.width);
					
				}
				
			}
			
			ResizeAll();
		
		
				
		
		}
					
		window.onresize=function(){_setCanvasSize();}
		window.onresize();
		document.addEventListener("DOMContentLoaded", function(){ _setCanvasSize()});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// txt
	this.txt = new lib.Symbol17();
	this.txt.parent = this;
	this.txt.setTransform(18.2,94.1,1,1,0,0,0,-7.2,20.4);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	// Symbol 15
	this.btn = new lib.Symbol15();
	this.btn.parent = this;
	this.btn.setTransform(173.9,191.9,1,1,0,0,0,148.5,35.8);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// Symbol 12
	this.girl = new lib.Symbol22();
	this.girl.parent = this;
	this.girl.setTransform(9.9,0);

	this.timeline.addTween(cjs.Tween.get(this.girl).wait(1));

	// logo
	this.logo = new lib.Symbol7();
	this.logo.parent = this;
	this.logo.setTransform(2.5,3.1,1,1,0,0,0,-25.5,-18);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

	// chips
	this.chips = new lib.Symbol8();
	this.chips.parent = this;
	this.chips.setTransform(522.9,150.8,1,1,0,0,0,164.9,114.7);

	this.timeline.addTween(cjs.Tween.get(this.chips).wait(1));

	// Symbol 1
	this.tower = new lib.Symbol13();
	this.tower.parent = this;
	this.tower.setTransform(584.2,224.5,1,1,0,0,0,150,224.5);
	this.tower.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.tower).wait(1));

	// Symbol 2
	this.bg = new lib.Symbol2();
	this.bg.parent = this;
	this.bg.setTransform(960,125,1,1,0,0,0,960,300);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(640.7,-50,2239.4,624);
// library properties:
lib.properties = {
	id: '354734A50BDF40A2AAE218A8D0B01E18',
	width: 1920,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/background.jpg", id:"background"},
		{src:"images/chip.png", id:"chip"},
		{src:"images/girl.png", id:"girl"},
		{src:"images/hand.png", id:"hand"},
		{src:"images/logo.png", id:"logo"},
		{src:"images/tower.png", id:"tower"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['354734A50BDF40A2AAE218A8D0B01E18'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;