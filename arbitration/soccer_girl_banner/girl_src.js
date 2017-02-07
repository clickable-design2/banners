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



(lib.ball = function() {
	this.initialize(img.ball);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,68,70);


(lib.ball_2 = function() {
	this.initialize(img.ball_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,56,55);


(lib.body = function() {
	this.initialize(img.body);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,158,241);


(lib.hand_darts = function() {
	this.initialize(img.hand_darts);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,139,161);


(lib.head = function() {
	this.initialize(img.head);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,106,87);


(lib.left_arm = function() {
	this.initialize(img.left_arm);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,32,83);


(lib.left_leg_in = function() {
	this.initialize(img.left_leg_in);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,70,100);


(lib.left_leg_out = function() {
	this.initialize(img.left_leg_out);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,155,150);


(lib.right_arm = function() {
	this.initialize(img.right_arm);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,28,59);


(lib.right_leg_in = function() {
	this.initialize(img.right_leg_in);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,76,106);


(lib.right_leg_out = function() {
	this.initialize(img.right_leg_out);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,164,159);


(lib.shadow = function() {
	this.initialize(img.shadow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,246,39);// helper functions:

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


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hand_darts();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol21, new cjs.Rectangle(0,0,139,161), null);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.22)").s().p("Ao/JAQjvjvAAlRQAAlQDvjvQDvjvFQAAQFRAADvDvQDvDvgBFQQABFRjvDvQjvDvlRgBQlQABjvjvg");
	this.shape.setTransform(81.5,81.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(0,0,162.9,162.9), null);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ALUA+IglgFIALg0QAkABALgCQAIgCAGgDQAFgEAEgIIADgGIgNAAQgRAAgIgJQgJgJgCgQIgCgIICUAAIgXAwQgUApgNANQgKAKgLAFQgLAFgPACIgNAAIgcgBgAoNA4QgNgEgIgFQgJgGgHgJQgGgIgEgLQgFgLgCgOQgBgPACgjIBPAAIgDAbQAAAQADAJQAEAJAHADQAIAEANAAQAOAAAJgEQAJgDAGgKQAGgJAFgSIAFgYIBPAAQgHAngGAQQgFANgHAKQgHALgHAIQgJAIgKAFQgJAGgNADQghAGgWAAQgpgCgPgFgAIqA6IAQhsQgUAJgWAFQgVAFgPAAQgTAAgPgEQgOgFgIgIQgFgGgDgIIDaABIgRB3gAEdA6IAPhmIgbAAQgNAAgGAFQgIAFgFAMIgdBQIhRAAIAihVQAEgMAHgIQAFgHAIgFIAFgDIC4AAIgSB4gAAiA6IAMh4IBEAAIgMB4gAjmA6IAVh4IBFAAIgWB4gArIA6IARh4IBMAAIgRB4gAtjA6IASh4IBLAAIgRB4gAhNARQgMAAgHgHQgHgHgBgKIgFg3IA3AAIgBAgIAGAAIAKggIA2AAIgTA5QgDALgIAFQgHAGgNAAg");
	this.shape.setTransform(143,9.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(56.3,3.5,173.5,12.6), null);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AHiBcIADg8IitAAIgOA8Ig4AAIAPhvIAdAAIAIgQQAKgWAMgiIBQAAQgMAjgJAVIgIAQIBJAAIAKhIIBLABIgKBHIAlAAIgPBvgAnqAeQgMgEgJgFQgJgHgHgIQgGgHgEgLQgEgLgCgMIAAgDQgCgQADglIBOAAIgDAdQAAARADAJIABABQADAIAIAEQAHADANAAQAOAAAJgDQAIgEAGgIIABgCQAGgKAFgRIAGgbIBPAAQgHAogGAQIgBACQgFAOgHAKQgGAKgIAHQgJAJgKAFQgJAGgMADQgiAGgVAAQgqgCgPgFgALoAgIARh6IBHAAIgRB6gAJAAgIASh6IBHAAIgJAfIADAAQAHgRAJgOIA8AAIhVB6gACsAgIgGhAIhVAAIgZBAIhNAAIA0h7IBJAAIgBACIA5AAIAAgCIBFAAIASB7gAh4AgIARh7IBMAAIgRB7gAkTAgIARh7IBMAAIgRB7gAqlAgIASh7IBMAAIgSB7gAs/AgIARh7IBMAAIgSB7g");
	this.shape.setTransform(92.8,12.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(9.6,3.3,166.5,18.4), null);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#CCCCCC","#FFFFFF"],[0,1],-12.4,0,12.5,0).s().p("AAeBEIAMhUIhOAAIgMBUIhMAAIATiHIDmAAIgTCHIhMAAg");
	this.shape.setTransform(69.7,16.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#CCCCCC","#FFFFFF"],[0,1],-12.4,0,12.5,0).s().p("AAqBHIAAgCQAEgaAAgPQAAgQgDgJQgEgJgIgDQgHgDgNgBQgNABgIADQgKAEgGAJQgGAJgEASQgEAPgEAZIhPAAIAAgCQADgbAMgoQAFgOAHgKQAGgLAIgIQAJgIAJgGQAKgFAMgEQAPgEAngCIAeACQAPACALADQAMADAJAHQAJAGAHAHQAHAKAEAKQAEAMACANQADAOgBASIgDAiIhPAAg");
	this.shape_1.setTransform(96.8,16.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#CCCCCC","#FFFFFF"],[0,1],-7.4,0,7.5,0).s().p("AAUBEIgHhOIgGAAIgNBOIhEAAIAUhuQACgNAHgGQAGgGANAAIBBAAQAMAAAHAGQAHAHABAMIAJBuIg3AAg");
	this.shape_2.setTransform(128.9,16.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#CCCCCC","#FFFFFF"],[0,1],-8,0,8.1,0).s().p("AABBEIAIhOIgGAAIgbBOIg4AAIAlhxQADgMAIgFQAHgGAMAAIBEAAQANAAAHAIQAHAHgCANIgLBtIhEgBg");
	this.shape_3.setTransform(146.7,16.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#CCCCCC","#FFFFFF"],[0,1],-11.4,0,11.5,0).s().p("AhdBHQgJgHgFgKQgFgKgBgOQgCgMACgPQADgVAJgOQAIgOAOgJQAOgIAVgEQASgCAbAAQA2AAA8ADIgTCJIi9AAgAgbgIQgIAGgDARQgDAUAGAJQAGAHASAAIAiAAIAJhCIghAAQgTAAgHAHg");
	this.shape_4.setTransform(170.5,16.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#CCCCCC","#FFFFFF"],[0,1],-12.2,0,12.3,0).s().p("Ah6BEQAAgKABgLIAQhzIBMAAIgPBlQgCANAGAFQAEAFAOAAQAOAAAKgDQANgCARgHIAPhwIBMAAIgUCJIjhgBg");
	this.shape_5.setTransform(196.6,16.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#CCCCCC","#FFFFFF"],[0,1],-4.6,0,4.6,0).s().p("AgUBFIgZiJIBKAAIARCJIhCAAg");
	this.shape_6.setTransform(215.9,16.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#CCCCCC","#FFFFFF"],[0,1],-6.8,0,6.9,0).s().p("AhEBFIA6iJIBOAAIg9CJIhLAAg");
	this.shape_7.setTransform(228.9,16.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(57.3,9.2,178.5,14.3), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#CCCCCC","#FFFFFF"],[0,1],-12.4,0,12.5,0).s().p("AAeBDIALhSIhOAAIgLBSIhLAAIASiFIDlAAIgSCFIhMAAg");
	this.shape.setTransform(23.5,8.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#CCCCCC","#FFFFFF"],[0,1],-12.4,0,12.4,0).s().p("AAqBGQAEgaAAgPQAAgQgDgJQgEgIgIgEQgHgDgNAAQgNAAgIADQgKAFgGAIQgGAKgEARQgEAOgEAYIhPAAQADgcAMgnQAFgNAHgLQAGgLAIgIQAJgIAJgFQAKgGAMgDQAPgFAngCIAeACQAPACALADQAMAEAJAGQAJAGAHAIQAHAJAEALQAEALACANQADAOgBASIgDAgIhPAAg");
	this.shape_1.setTransform(50.5,8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#CCCCCC","#FFFFFF"],[0,1],-12.4,0,12.5,0).s().p("AAeBDIAMhSIhOAAIgMBSIhMAAIATiFIDmAAIgTCFIhMAAg");
	this.shape_2.setTransform(79.2,8.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#CCCCCC","#FFFFFF"],[0,1],-9.3,0,9.4,0).s().p("AAaBDIgGgyQgBgJAAgTIgLAAIgcBOIhJAAIAzhzQADgJAHgFQAHgEAJAAIBEAAQAJAAAHAGQAHAGABAIIARBxIhDAAg");
	this.shape_3.setTransform(105.5,8.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#CCCCCC","#FFFFFF"],[0,1],-11.2,0,11.2,0).s().p("AATBDIALhSIgVAAQgLAAgGAFQgHAFgDANQgHAigIAZIhOAAQAKgfAMgtQAEgOAGgLQAHgLAJgHQAJgHAMgEQAMgDAOAAICAAAIgTCFIhKAAg");
	this.shape_4.setTransform(135.8,8.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#CCCCCC","#FFFFFF"],[0,1],-4.5,0,4.6,0).s().p("AgsBDIASiFIBIAAIgTCFIhHAAg");
	this.shape_5.setTransform(156.5,8.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#CCCCCC","#FFFFFF"],[0,1],-8.3,0,8.3,0).s().p("AgGBDQAEgWAGgVIgDAAQgOAdgGALIgDADIg8AAIBciFIBJAAIgTCFIhGAAg");
	this.shape_6.setTransform(169.4,8.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(11.1,1,166.6,14), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgeAfIkcgfIEcgeIAekcIAfEcIEcAeIkcAfIgfEcgAgHAIIAPAAIAAgPIgPAAg");
	this.shape.setTransform(31.5,31.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,0,62.9,62.9), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Ao/JAQjvjvAAlRQAAlQDvjvQDvjvFQAAQFRAADvDvQDvDvgBFQQABFRjvDvQjvDvlRgBQlQABjvjvgAoaoZQjgDfABE6QgBE8DgDfQDfDfE7AAQE8AADejfQDgjfgBk8QABk6jgjfQjejgk8AAQk7AAjfDgg");
	this.shape.setTransform(81.5,81.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,162.9,162.9), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#33FF00","rgba(51,255,0,0)"],[0,1],0,0,0,0,0,43.9).s().p("Ak0E1Qh/iBAAi0QAAizB/iBQCBh/CzAAQC0AACAB/QCACBAACzQAAC0iACBQiAB/i0AAQizAAiBh/g");
	this.shape.setTransform(43.6,43.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,87.3,87.3), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F50902").s().p("Ag2BxQgJgEgGgFQgHgFgFgHQgFgIgDgIQgDgKgBgMQgCgPAEgoQADgWAJghIAJgUQAFgJAGgHQAGgHAIgEQAHgGAJgCQAMgFAegCIAYACQALACAIADQAJADAHAGQAGAEAFAIQAFAHADAJQADAKABALQABAigEAVQgHAogFAQIgJAUQgFAIgGAIQgGAGgIAFQgHAEgJAEQgJADgLABIgWABQgegCgMgDgAgFhDQgHADgFAHQgEAIgEANIgJBJQgBAOACAIQACAHAGADQAFACAKAAQAKAAAGgCQAHgDAFgIQAEgHAEgPIAJhIQABgNgDgIQgCgHgGgDQgFgDgJAAQgLAAgFADg");
	this.shape.setTransform(9.5,11.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,19,23.7), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#482F51").s().p("AgdAKQgMgEAAgGQAAgFAMgEQANgEAQAAQARAAAMAEQAMAEAAAFQAAAGgMAEQgMAEgRAAQgQAAgNgEg");
	this.shape.setTransform(4.2,1.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,8.3,2.8), null);


(lib.shadow_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shadow();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.shadow_1, new cjs.Rectangle(0,0,246,39), null);


(lib.right_leg_out_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.right_leg_out();
	this.instance.parent = this;
	this.instance.setTransform(3,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.right_leg_out_1, new cjs.Rectangle(3,0,164,159), null);


(lib.right_leg_in_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjxF1QiXg+gshbQgthbDxj0QDwj1DTgSQDUgSAQAoQAPAogZBDQgZBDASAlQATAmkKEPQjXDdiMAAQghAAgcgMg");
	mask.setTransform(47.4,40.1);

	// Layer 1 copy
	this.instance = new lib.right_leg_in();
	this.instance.parent = this;
	this.instance.setTransform(19,-15);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.right_leg_in();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.right_leg_in_1, new cjs.Rectangle(0,0,91.9,106), null);


(lib.right_arm_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.right_arm();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.right_arm_1, new cjs.Rectangle(0,0,28,59), null);


(lib.left_leg_out_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.left_leg_out();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.left_leg_out_1, new cjs.Rectangle(0,0,155,150), null);


(lib.left_leg_in_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiiEVQiNhRgziLQgziJBDh0QBDh0CTgYQAVgEhCAOQBmASAcAHQAdAHA3AEQA3AEAaAJIAAA3QAbgpAHACQAHACAMAHQASAMAgAaIBSBDQAbAnARAvQAzCIhDB1QhDBziTAZQgjAGgjAAQhuAAhrg9g");
	mask.setTransform(24.6,33);

	// Layer 2
	this.instance = new lib.left_leg_in();
	this.instance.parent = this;
	this.instance.setTransform(-19,-18);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.left_leg_in();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.left_leg_in_1, new cjs.Rectangle(-13.1,-0.7,83.2,100.8), null);


(lib.left_arm_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.left_arm();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.left_arm_1, new cjs.Rectangle(0,0,32,83), null);


(lib.ball_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ball_2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ball_2_1, new cjs.Rectangle(0,0,56,55), null);


(lib.title = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 16
	this.instance = new lib.Symbol16();
	this.instance.parent = this;
	this.instance.setTransform(218.3,233.6,1,1,0,0,0,142.3,7.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(54).to({_off:false},0).to({x:158.3,alpha:1},14,cjs.Ease.get(1)).to({regX:142.2,scaleX:1.14,scaleY:1.14,x:158,y:235.1},5,cjs.Ease.get(-1)).to({regX:142.3,scaleX:1,scaleY:1,x:158.3,y:233.6},25,cjs.Ease.get(1)).to({x:98.3,alpha:0},10,cjs.Ease.get(-1)).wait(1));

	// Symbol 14
	this.instance_1 = new lib.Symbol14();
	this.instance_1.parent = this;
	this.instance_1.setTransform(100.4,214.5,1,1,0,0,0,143.9,11.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(54).to({_off:false},0).to({x:160.4,alpha:1},14,cjs.Ease.get(1)).to({scaleX:1.14,scaleY:1.14,y:213.4},5,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,y:214.5},25,cjs.Ease.get(1)).to({x:220.4,alpha:0},10,cjs.Ease.get(-1)).wait(1));

	// Symbol 15
	this.instance_2 = new lib.Symbol15();
	this.instance_2.parent = this;
	this.instance_2.setTransform(220.2,233.6,1,1,0,0,0,94.2,7.9);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:160.2,alpha:1},14,cjs.Ease.get(1)).to({scaleX:1.14,scaleY:1.14,y:234.6},5,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,y:233.6},25,cjs.Ease.get(1)).to({x:100.2,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(54));

	// Symbol 13
	this.instance_3 = new lib.Symbol13();
	this.instance_3.parent = this;
	this.instance_3.setTransform(99.1,218.5,1,1,0,0,0,92.7,7.1);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:159.1,alpha:1},14,cjs.Ease.get(1)).to({scaleX:1.14,scaleY:1.14,x:159,y:217.4},5,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:159.1,y:218.5},25,cjs.Ease.get(1)).to({x:219.1,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(54));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,0,0,0)","#FF0000","rgba(255,0,0,0)"],[0,0.482,1],-133,0,133,0).s().p("A0yEAIAAn/MAplAAAIAAH/g");
	this.shape.setTransform(157.8,227.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(109));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(17.5,202.1,284.6,51.3);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol12();
	this.instance.parent = this;
	this.instance.setTransform(81.8,81.8,1,1,0,0,0,31.4,31.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-360},19).wait(1));

	// Layer 1 copy 2
	this.instance_1 = new lib.Symbol10();
	this.instance_1.parent = this;
	this.instance_1.setTransform(81.5,81.5,0.711,0.711,0,0,0,81.5,81.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.78,scaleY:0.78},4,cjs.Ease.get(-1)).to({scaleX:0.86,scaleY:0.86,x:81.6,y:81.6},5,cjs.Ease.get(1)).to({scaleX:0.78,scaleY:0.78},5,cjs.Ease.get(-1)).to({scaleX:0.71,scaleY:0.71,x:81.5,y:81.5},5,cjs.Ease.get(1)).wait(1));

	// Layer 1 copy
	this.instance_2 = new lib.Symbol10();
	this.instance_2.parent = this;
	this.instance_2.setTransform(81.5,81.5,0.856,0.856,0,0,0,81.5,81.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:0.79,scaleY:0.79},4,cjs.Ease.get(-1)).to({scaleX:0.71,scaleY:0.71},5,cjs.Ease.get(1)).to({scaleX:0.78,scaleY:0.78},5,cjs.Ease.get(-1)).to({scaleX:0.86,scaleY:0.86},5,cjs.Ease.get(1)).wait(1));

	// Layer 3
	this.instance_3 = new lib.Symbol17();
	this.instance_3.parent = this;
	this.instance_3.setTransform(81,81.9,1,1,0,0,0,81.5,81.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,0.4,162.9,162.9);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol7();
	this.instance.parent = this;
	this.instance.setTransform(9.5,11.8,1,1,0,0,0,9.5,11.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.441},7).to({alpha:1},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,19,23.7);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol6();
	this.instance.parent = this;
	this.instance.setTransform(324.7,47.6,1,1,0,0,0,9.5,11.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAlCOIACgpIh0AAIgKApIglAAIAKhLIATAAQAKgTAOglQAHgVAJgjQADgKAEgHQAEgHAHgFQAGgFAIgCQAIgDAKAAIBVAAIgVCXIAZAAIgKBLgAAAguQgFAEgCAJQgHAggHATQgLAhgIAQIAxAAIAQh0IgOAAQgIAAgDADgAprBlQgIgDgGgEQgHgEgEgGQgEgFgDgIIgEgRQgCgNADgjQADgRAIgcIAIgQQAEgIAGgFIAMgJQAGgEAIgCQALgDAbgBIAUABIARADQAIADAGADQAHAEAEAGQAFAGADAIQADAHABAKIABAVIgCAaQgGAhgFANQgDAJgFAIQgEAGgGAGQgFAGgHADQgHADgIADQgXAFgOgBQgcgBgKgDgApBguQgGADgFAGQgEAGgDANQgDAKgDATQgCARAAAKQgBALADAHQACAFAFADQAFADAJgBQAJABAGgDQAHgDAEgGQAEgHADgLIAGgfQACgQAAgLQABgKgDgHQgCgGgFgDQgFgCgJAAQgKABgFACgAMIBlIAOhdQACgQAFgOIgCAAQgJAUgFAFIhEBiIgyAAIAai5IAxAAIgNBaQgBANgHAUIACAAQAHgPAJgNIBChfIAyAAIgbC5gAJFBlIAOhdQACgQAFgOIgCAAQgJAUgFAFIhEBiIgyAAIAai5IAxAAIgNBaQgBANgHAUIACAAQAHgPAJgNIBChfIAyAAIgbC5gAGABlIALhQIg2AAIgLBQIgzAAIAai5IAzAAIgJBFIA1AAIAKhFIAzAAIgbC5gADVBlIgEgrIg5AAIgRArIg1AAIBLisQACgHAFgCQAFgEAGAAIAuAAQAHAAAEAFQAFAEABAFIAaCrgADNAUIgFgvIgBgTIgIAAIgFATIgTAvIAmAAgAirBlIgFgrIg5AAIgRArIg0AAIBKisQADgHAEgCQAFgEAGAAIAvAAQAGAAAFAFQAFAEAAAFIAbCrgAi0AUIgEgvIgBgTIgIAAIgGATIgTAvIAmAAgAlxBlIAViWIg1AAIgWCWIgzAAIAai5ICcAAIgaC5gArpBlIAViWIg1AAIgWCWIgzAAIAai5ICcAAIgaC5gALwhlQgKgDgFgGQgGgGgCgIQgCgIADgJIAfAAQgDAMAEAFQADAEAJAAQAIAAAFgEQAFgGABgLIAeAAQAAAJgEAIQgDAIgHAGQgGAGgJADQgKAFgLAAQgMAAgJgFg");
	this.shape.setTransform(193.9,47.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.788)").s().p("EgglAGbILAs0IDIAAMAzDAAAIinDCIoZJyg");
	this.shape_1.setTransform(208.6,63.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(255,0,0,0)","#FF0000","rgba(255,0,0,0)"],[0,0.482,1],-199.1,20.2,147.6,20.2).s().p("AT4DQICnjCMgzDAAAIC+jeMA2LAAAIlmGgg");
	this.shape_2.setTransform(273.3,20.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,456.2,104.3), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ball_2_1();
	this.instance.parent = this;
	this.instance.setTransform(28,79.5,1,1,0,0,0,28,27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:207.4},11,cjs.Ease.get(-1)).to({regY:27.6,scaleY:0.91,y:210.2},1).to({regY:27.5,scaleY:1,y:207.4},1).to({y:79.5},12,cjs.Ease.get(1)).to({y:207.4},13,cjs.Ease.get(-1)).to({regY:27.6,scaleY:0.91,y:210.2},1).to({regY:27.5,scaleY:1,y:207.4},1).to({y:79.5},13,cjs.Ease.get(1)).wait(1));

	// Layer 2
	this.instance_1 = new lib.shadow_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(30,236.1,0.618,0.799,0,0,0,122.9,19.6);
	this.instance_1.alpha = 0.309;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},12,cjs.Ease.get(-1)).to({alpha:0.309},13,cjs.Ease.get(1)).to({alpha:1},14,cjs.Ease.get(-1)).to({alpha:0.309},14,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46,52,152.1,199.6);


(lib.light = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay(Math.random() * 15);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(18));

	// Layer 1
	this.instance = new lib.Symbol9();
	this.instance.parent = this;
	this.instance.setTransform(43.6,43.6,1,1,0,0,0,43.6,43.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.65,scaleY:0.65},4,cjs.Ease.get(-1)).to({scaleX:0.21,scaleY:0.21,x:43.7,y:43.7},5,cjs.Ease.get(1)).to({regX:43.7,regY:43.7,scaleX:0.6,scaleY:0.6},4,cjs.Ease.get(-1)).to({regX:43.6,regY:43.6,scaleX:1,scaleY:1,x:43.6,y:43.6},4,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,87.3,87.3);


(lib.head_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 copy
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(49.8,43.1,1,0.092,0,1.3,-178.7,4.2,2.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({regY:1.5,scaleY:1.31,y:44.9},3).to({regY:2.1,scaleY:0.09,y:43.1},3).to({_off:true},1).wait(1).to({_off:false},0).to({regY:1.5,scaleY:1.31,y:44.9},3).to({regY:2.1,scaleY:0.09,y:43.1},3).to({_off:true},1).wait(24));

	// Layer 2
	this.instance_1 = new lib.Symbol2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(68.7,41.5,1,0.092,-8.5,0,0,4.2,1.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({regY:1.5,scaleY:1.31,x:69,y:43.3},3).to({regY:1.9,scaleY:0.09,x:68.7,y:41.5},3).to({_off:true},1).wait(1).to({_off:false},0).to({regY:1.5,scaleY:1.31,x:69,y:43.3},3).to({regY:1.9,scaleY:0.09,x:68.7,y:41.5},3).to({_off:true},1).wait(24));

	// Layer 1
	this.instance_2 = new lib.head();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,106,87);


(lib.darts = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol21();
	this.instance.parent = this;
	this.instance.setTransform(69.5,80.5,1,1,0,0,0,69.5,80.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:92.8},5,cjs.Ease.get(-1)).to({y:107.6},6,cjs.Ease.get(1)).to({y:95.1},6,cjs.Ease.get(-1)).to({y:80.5},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,139,161);


(lib.body_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.light();
	this.instance.parent = this;
	this.instance.setTransform(69,187,1,1,0,0,0,43.6,43.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.body();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.body_1, new cjs.Rectangle(0,0,158,241), null);


(lib.ball_in = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.light();
	this.instance.parent = this;
	this.instance.setTransform(32.6,28.4,0.613,0.613,0,0,0,43.6,43.6);

	this.instance_1 = new lib.ball();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ball_in, new cjs.Rectangle(0,0,68,70), null);


(lib.ball_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ball_in();
	this.instance.parent = this;
	this.instance.setTransform(26,33.4,1,1,0,0,0,34,35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({x:36.8},13,cjs.Ease.get(1)).to({x:26},5,cjs.Ease.get(-1)).to({scaleX:0.91,x:22.8},3).to({scaleX:1,x:26},3).to({regX:33.9,scaleX:0.94,x:23.5},3).to({regX:34,scaleX:1,x:26},3).to({regX:33.9,scaleX:0.99,x:24.4},3).to({regX:34,scaleX:1,x:26},3).wait(17).to({scaleX:1.13,scaleY:1.13,y:34.6},3,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,y:33.4},6,cjs.Ease.get(1)).wait(9).to({scaleX:1.13,scaleY:1.13,y:34.6},3,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,y:33.4},6,cjs.Ease.get(1)).wait(12));

	// Layer 1 copy
	this.instance_1 = new lib.ball_in();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-13.6,31,1,1,0,0,0,34,35);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({x:-18},13,cjs.Ease.get(1)).to({x:-13.6},5,cjs.Ease.get(-1)).to({scaleX:0.92,x:-10.8},3).to({scaleX:1,x:-13.6},3).to({scaleX:0.96,x:-11.4},3).to({scaleX:1,x:-13.6},3).to({scaleX:1,x:-12.3},3).to({scaleX:1,x:-13.6},3).wait(8).to({scaleX:1.13,scaleY:1.13,y:33},3,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,y:31},6,cjs.Ease.get(1)).wait(9).to({scaleX:1.13,scaleY:1.13,y:33},3,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,y:31},6,cjs.Ease.get(1)).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.6,-4,107.6,72.4);


(lib.title_out = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(21));

	// Layer 2
	this.instance = new lib.Symbol5();
	this.instance.parent = this;
	this.instance.setTransform(82.4,264,1,1,0,0,0,228.1,52.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({_off:false},0).to({x:174.9,y:171.5},5,cjs.Ease.get(1)).to({x:160.6,y:185.8},7,cjs.Ease.get(-1)).wait(1).to({x:174.9,y:171.5},7,cjs.Ease.get(1)).to({x:82.4,y:264},5,cjs.Ease.get(-1)).to({_off:true},1).wait(7));

	// Layer 1
	this.title = new lib.title();
	this.title.parent = this;
	this.title.setTransform(197.1,33.5,1.381,1.381,0,0,0,160.2,226.3);

	this.timeline.addTween(cjs.Tween.get(this.title).to({x:248},7,cjs.Ease.get(1)).to({x:-217.4},5,cjs.Ease.get(-1)).wait(15).to({x:248},5,cjs.Ease.get(1)).to({x:197.1},7,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,392.9,70.8);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(16));

	// Layer 1
	this.instance = new lib.darts();
	this.instance.parent = this;
	this.instance.setTransform(48.5,174.2,0.698,0.698,0,0,0,69.5,80.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:56.2},14,cjs.Ease.get(1)).to({y:174.2},15,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,118,97,112.4);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol11();
	this.instance.parent = this;
	this.instance.setTransform(22,53.9,0.664,0.664,0,0,0,81.5,81.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:81.4,x:52},6,cjs.Ease.get(-1)).to({regX:81.5,x:87},7,cjs.Ease.get(1)).to({x:54.5},7,cjs.Ease.get(-1)).to({x:22},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.4,0,108.1,108.1);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol11();
	this.instance.parent = this;
	this.instance.setTransform(63.6,150.3,0.664,0.664,0,0,0,81.5,81.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:23.8,y:0.4},14,cjs.Ease.get(1)).to({x:43.4,y:53.9},12,cjs.Ease.get(-1)).to({x:163.3,y:1.1},15,cjs.Ease.get(1)).to({x:100.1,y:53.9},10,cjs.Ease.get(-1)).to({x:58.4,y:184.9},11,cjs.Ease.get(1)).to({x:63.6,y:150.3},10,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(9.1,96.4,108.1,108.1);


(lib.Symbol8 = function(mode,startPosition,loop) {
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

	// Layer 1
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(74,-24.5,1,1,0,0,0,28,27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},9).to({alpha:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,152.1,199.6);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.right_arm_1();
	this.instance.parent = this;
	this.instance.setTransform(111.3,50.3,1,1,0,0,0,14,29.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(92));

	// left_arm
	this.instance_1 = new lib.left_arm_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(16,103.5,1,1,0,0,0,16,41.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleY:0.95,y:105.4},6,cjs.Ease.get(-1)).to({regY:41.6,scaleY:0.89,y:107.8},10,cjs.Ease.get(1)).wait(37).to({scaleY:0.94,y:105.7},8,cjs.Ease.get(-1)).to({regY:41.5,scaleY:1,y:103.5},10,cjs.Ease.get(1)).wait(21));

	// head
	this.instance_2 = new lib.head_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(72,43.5,1,1,0,0,0,53,43.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-2.5,x:71.2,y:44.3},6,cjs.Ease.get(-1)).to({regX:53.1,regY:43.6,rotation:-5.7,x:70.2,y:45.1},10,cjs.Ease.get(1)).wait(37).to({rotation:-2.8,x:71.2,y:44.4},8,cjs.Ease.get(-1)).to({regX:53,regY:43.5,rotation:0,x:72,y:43.5},10,cjs.Ease.get(1)).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,125.3,145);


(lib.girl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 12
	this.instance = new lib.ball_1();
	this.instance.parent = this;
	this.instance.setTransform(115.2,24.1,1.082,1.082,0,0,0,6.2,32.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(100));

	// right_leg_out.png
	this.instance_1 = new lib.right_leg_out_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(286,90.5,1,1,0,0,0,82,79.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:79.6,rotation:7,x:270.1,y:99},9).to({regY:79.5,rotation:0,x:286,y:90.5},7).wait(1).to({regY:79.6,rotation:7,x:270.1,y:99},9).to({regY:79.5,rotation:0,x:286,y:90.5},7).to({scaleX:1,scaleY:1,rotation:-23.3,x:300.7,y:52.8},5,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:-51.4,x:315.2,y:7.7},11,cjs.Ease.get(1)).wait(5).to({x:318.4},0).to({rotation:-36.5,x:317.6,y:32.2},4,cjs.Ease.get(-1)).to({rotation:-51.4,x:315.6,y:7.7},4,cjs.Ease.get(1)).to({rotation:-36.5,x:317.6,y:32.2},4,cjs.Ease.get(-1)).to({rotation:-51.4,x:315.6,y:7.7},4,cjs.Ease.get(1)).wait(4).to({x:318.4},0).to({scaleX:1,scaleY:1,rotation:-25.3,x:313,y:57.1},4,cjs.Ease.get(-1)).to({regY:79.6,scaleX:1,scaleY:1,rotation:7,x:270.1,y:99},10,cjs.Ease.get(1)).to({regY:79.5,rotation:0,x:286,y:90.5},11,cjs.Ease.get(-1)).wait(1));

	// right_leg_in.png
	this.instance_2 = new lib.right_leg_in_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(184,64,1,1,0,0,0,38,53);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:38.1,regY:53.1,scaleX:0.99,scaleY:1,rotation:-3,x:180.6,y:65.3},9).to({regX:38,regY:53,scaleX:1,scaleY:1,rotation:0,x:184,y:64},7).wait(1).to({regX:38.1,regY:53.1,scaleX:0.99,scaleY:1,rotation:-3,x:180.6,y:65.3},9).to({regX:38,regY:53,scaleX:1,scaleY:1,rotation:0,x:184,y:64},7).wait(5).to({regY:53.1,rotation:-3.7,x:182.8,y:65.7},11,cjs.Ease.get(1)).wait(25).to({regY:53,rotation:0,x:184,y:64},0).to({regY:53.1,scaleX:0.99,scaleY:1,rotation:-1.3,x:182.5,y:64.8},4,cjs.Ease.get(-1)).to({regX:38.1,scaleX:0.99,scaleY:1,rotation:-3,x:180.6,y:65.3},10,cjs.Ease.get(1)).to({regX:38,regY:53,scaleX:1,scaleY:1,rotation:0,x:184,y:64},11,cjs.Ease.get(-1)).wait(1));

	// left_leg_out.png
	this.instance_3 = new lib.left_leg_out_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-53.5,85,1,1,0,0,0,77.5,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-8.7,x:-39,y:91.1},9).to({rotation:0,x:-53.5,y:85},7).wait(1).to({rotation:-8.7,x:-39,y:91.1},9).to({rotation:0,x:-53.5,y:85},7).to({scaleX:1,scaleY:1,rotation:27.3,x:-60.6,y:44.3},5,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:60,x:-69.3,y:-4.6},11,cjs.Ease.get(1)).wait(5).to({regX:77.4,rotation:47.3,x:-78.1,y:14},4,cjs.Ease.get(-1)).to({regX:77.5,rotation:60,x:-69.3,y:-4.6},4,cjs.Ease.get(1)).to({regX:77.4,rotation:47.3,x:-78.1,y:14},4,cjs.Ease.get(-1)).to({regX:77.5,rotation:60,x:-69.3,y:-4.6},4,cjs.Ease.get(1)).wait(4).to({scaleX:1,scaleY:1,rotation:29.3,x:-79.8,y:39.7},4,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:-8.7,x:-39,y:91.1},10,cjs.Ease.get(1)).to({rotation:0,x:-53.5,y:85},11,cjs.Ease.get(-1)).wait(1));

	// left_leg_in.png
	this.instance_4 = new lib.left_leg_in_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(44,61,1,1,0,0,0,35,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:35.1,regY:50.1,rotation:2.7,x:44.6,y:59.6},9).to({regX:35,regY:50,rotation:0,x:44,y:61},7).wait(1).to({regX:35.1,regY:50.1,rotation:2.7,x:44.6,y:59.6},9).to({regX:35,regY:50,rotation:0,x:44,y:61},7).wait(41).to({regX:35.1,rotation:1.1,x:44.4,y:60.4},4,cjs.Ease.get(-1)).to({regY:50.1,rotation:2.7,x:44.6,y:59.6},10,cjs.Ease.get(1)).to({regX:35,regY:50,rotation:0,x:44,y:61},11,cjs.Ease.get(-1)).wait(1));

	// left_arm.png
	this.instance_5 = new lib.Symbol1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(102.5,-54.5,1,1,0,0,0,62.5,72.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(33).to({scaleY:0.99,y:-53},5,cjs.Ease.get(-1)).to({scaleY:0.98,y:-49.6},11,cjs.Ease.get(1)).wait(25).to({scaleY:0.98,y:-51},4,cjs.Ease.get(-1)).to({scaleY:1,y:-54.5},10,cjs.Ease.get(1)).wait(12));

	// body.png
	this.instance_6 = new lib.body_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(119,39.5,1,1,0,0,0,79,120.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(33).to({scaleY:0.99,y:40.4},5,cjs.Ease.get(-1)).to({scaleY:0.98,y:42.3},11,cjs.Ease.get(1)).wait(25).to({regY:120.4,scaleY:0.98,y:41.5},4,cjs.Ease.get(-1)).to({regY:120.5,scaleY:1,y:39.5},10,cjs.Ease.get(1)).wait(12));

	// shadow_left
	this.instance_7 = new lib.shadow_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-35.9,129.7,1.521,1,-15,0,0,122.9,19.6);
	this.instance_7.alpha = 0.59;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:122.8,regY:19.7,scaleX:1.24,x:-11.8,y:135.8},9).to({regX:122.9,regY:19.6,scaleX:1.52,x:-35.9,y:129.7},7).wait(1).to({regX:122.8,regY:19.7,scaleX:1.24,x:-11.8,y:135.8},9).to({regX:122.9,regY:19.6,scaleX:1.52,x:-36,y:129.7},7).to({regX:122.8,regY:19.7,scaleX:1.65,scaleY:1,rotation:-14.8,x:-51.7,y:134,alpha:0.461},5,cjs.Ease.get(-1)).to({scaleX:1.81,scaleY:1,rotation:-15,x:-70.3,y:139,alpha:0.309},11,cjs.Ease.get(1)).wait(25).to({regX:122.7,scaleX:1.65,scaleY:1,rotation:-14.8,x:-53.8,y:138.1,alpha:0.391},4,cjs.Ease.get(-1)).to({regX:122.8,scaleX:1.24,scaleY:1,rotation:-15,x:-11.8,y:135.8,alpha:0.59},10,cjs.Ease.get(1)).to({regX:122.9,regY:19.6,scaleX:1.52,x:-36,y:129.7},11,cjs.Ease.get(-1)).wait(1));

	// shadow_right
	this.instance_8 = new lib.shadow_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(254,137.7,1.521,1,0,15,-165,122.9,19.6);
	this.instance_8.alpha = 0.578;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:122.8,regY:19.7,scaleX:1.3,x:215.9,y:140.4},9).to({regX:122.9,regY:19.6,scaleX:1.52,x:254,y:137.7},7).wait(1).to({regX:122.8,regY:19.7,scaleX:1.3,x:215.9,y:140.4},9).to({regX:122.9,regY:19.6,scaleX:1.52,x:254,y:137.7},7).to({regX:122.8,regY:19.7,scaleX:1.84,scaleY:1,skewX:14.8,skewY:-165.2,x:292.2,y:148,alpha:0.383},5,cjs.Ease.get(-1)).to({scaleX:2.22,scaleY:1,skewX:15,skewY:-165,x:337.6,y:160.1,alpha:0.148},11,cjs.Ease.get(1)).wait(25).to({scaleX:1.96,scaleY:1,skewX:14.8,skewY:-165.2,x:302.7,y:154.5,alpha:0.27},4,cjs.Ease.get(-1)).to({scaleX:1.3,scaleY:1,skewX:15,skewY:-165,x:215.9,y:140.4,alpha:0.578},10,cjs.Ease.get(1)).to({regX:122.9,regY:19.6,scaleX:1.52,x:254,y:137.7},11,cjs.Ease.get(-1)).wait(1));

	// shadow_left_cross
	this.instance_9 = new lib.shadow_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-48.6,168.1,1.161,1,0,-165,15,122.9,19.7);
	this.instance_9.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({regX:122.8,regY:19.6,scaleX:0.75,x:-33.5,y:169.7},9).to({regX:122.9,regY:19.7,scaleX:1.16,x:-48.6,y:168.1},7).wait(1).to({regX:122.8,regY:19.6,scaleX:0.75,x:-33.5,y:169.7},9).to({regX:122.9,regY:19.7,scaleX:1.16,x:-48.6,y:168.1},7).to({scaleX:0.98,scaleY:1,skewX:-165.2,skewY:14.8,x:-27.3,y:173.8,alpha:0.344},5,cjs.Ease.get(-1)).to({scaleX:0.59,scaleY:1,skewX:-165,skewY:15,x:19.8,y:186.4,alpha:0},11,cjs.Ease.get(1)).wait(25).to({regX:122.8,scaleX:0.63,scaleY:1,skewX:-165.2,skewY:14.8,x:4.6,y:181.6,alpha:0.145},4,cjs.Ease.get(-1)).to({regY:19.6,scaleX:0.75,scaleY:1,skewX:-165,skewY:15,x:-33.5,y:169.7,alpha:0.5},10,cjs.Ease.get(1)).to({regX:122.9,regY:19.7,scaleX:1.16,x:-48.6,y:168.1},11,cjs.Ease.get(-1)).wait(1));

	// shadow.png
	this.instance_10 = new lib.shadow_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(114,132.5,1,1,0,0,0,123,19.5);

	this.instance_11 = new lib.shadow_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(114,119.5,1,1,0,0,0,123,19.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10}]}).to({state:[{t:this.instance_11},{t:this.instance_10}]},99).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-221.5,-127,661.1,351.2);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(16));

	// Layer 1
	this.instance = new lib.girl();
	this.instance.parent = this;
	this.instance.setTransform(340.1,148.5,1,1,0,0,0,118.5,21.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:194.5},14,cjs.Ease.get(1)).to({x:340.1},15,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,661.1,351.2);


// stage content:
(lib.girl_src = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		_this.target_2.visible = false;
		_this.target_1.visible = true;
		stage.canvas.addEventListener("mouseover", MouseOver);
		stage.canvas.addEventListener("mouseout", MouseOut);
		
		function MouseOver(){
				_this.girl.gotoAndPlay(1);
				_this.darts.gotoAndPlay(1);
				_this.ball.gotoAndPlay(1);
				_this.title.gotoAndPlay(1);
				_this.target_2.visible = true;
				_this.target_1.visible = false;
			}
		
		function MouseOut(){
				_this.girl.gotoAndPlay(15);
				_this.darts.gotoAndPlay(15);
				_this.ball.gotoAndPlay(10);
				_this.title.gotoAndPlay(20);
				_this.target_2.visible = false;
				_this.target_1.visible = true;
			}
		
		
		stage.canvas.style.cursor = "none";
		this.target_2.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
			this.target_2.x = stage.mouseX / window.devicePixelRatio;
			this.target_2.y = stage.mouseY / window.devicePixelRatio;
		}
		
		document.addEventListener("click", function(){window.open(clickTAG, "_blank");});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.darts = new lib.Symbol20();
	this.darts.parent = this;
	this.darts.setTransform(595.5,254.5,1,1,0,0,0,48.5,56.1);

	this.timeline.addTween(cjs.Tween.get(this.darts).wait(1));

	// target_2
	this.target_2 = new lib.Symbol19();
	this.target_2.parent = this;
	this.target_2.setTransform(-166.1,152.4,1,1,0,0,0,54.1,54.1);

	this.timeline.addTween(cjs.Tween.get(this.target_2).wait(1));

	// target_1
	this.target_1 = new lib.Symbol18();
	this.target_1.parent = this;
	this.target_1.setTransform(444.9,144.4,1,1,0,0,0,54.1,54.1);

	this.timeline.addTween(cjs.Tween.get(this.target_1).wait(1));

	// title
	this.title = new lib.title_out();
	this.title.parent = this;
	this.title.setTransform(182.1,133.7,1,1,0,0,0,196.5,35.4);

	this.timeline.addTween(cjs.Tween.get(this.title).wait(1));

	// ball
	this.ball = new lib.Symbol8();
	this.ball.parent = this;
	this.ball.setTransform(175.3,150.2,1,1,0,0,0,76,87.5);

	this.timeline.addTween(cjs.Tween.get(this.ball).wait(1));

	// girl
	this.girl = new lib.Symbol4();
	this.girl.parent = this;
	this.girl.setTransform(454.1,183.6,1,1,0,0,0,330.6,175.6);

	this.timeline.addTween(cjs.Tween.get(this.girl).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(67.3,160.5,1037.3,420.7);
// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 30,
	color: "#339966",
	opacity: 0.00,
	webfonts: {},
	manifest: [
		{src:"images/ball.png", id:"ball"},
		{src:"images/ball_2.png", id:"ball_2"},
		{src:"images/body.png", id:"body"},
		{src:"images/hand_darts.png", id:"hand_darts"},
		{src:"images/head.png", id:"head"},
		{src:"images/left_arm.png", id:"left_arm"},
		{src:"images/left_leg_in.png", id:"left_leg_in"},
		{src:"images/left_leg_out.png", id:"left_leg_out"},
		{src:"images/right_arm.png", id:"right_arm"},
		{src:"images/right_leg_in.png", id:"right_leg_in"},
		{src:"images/right_leg_out.png", id:"right_leg_out"},
		{src:"images/shadow.png", id:"shadow"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;