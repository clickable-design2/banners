(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"danbolig300_600_atlas_", frames: [[802,0,64,64],[802,66,64,64],[0,0,800,533]]}
];



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



(lib.money = function() {
	this.spriteSheet = ss["danbolig300_600_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.moneyw = function() {
	this.spriteSheet = ss["danbolig300_600_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.street = function() {
	this.spriteSheet = ss["danbolig300_600_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
// helper functions:

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


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhZDDIAAgwQAAgUAFgSQAEgQAKgQQALgTAeghQAdggALgTQAJgPAEgQQAGgSAAgUQAAgYgJgLQgHgJgPAAQgPAAgIAJQgIAJAAAUIAAAqIg5AAIAAgmQAAgXAFgSQAGgSAMgMQALgNARgGQARgHAVAAQAWAAARAHQARAGALANQAMAMAFASQAGASAAAXQAAAWgFAUQgFASgJASIgTAeIgWAbQg7A+AAAfIAAAJIByAAIAAA3g");
	this.shape.setTransform(13.2,-115.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgmC/QgRgHgMgMQgLgNgGgSQgFgSAAgXIAAggIA5AAIAAAkQAAAUAIAJQAIAJAPAAQAOAAAIgJQAIgLAAgYIAAgeQAAgagJgLQgJgLgUAAIgVAAIAAg3IAYAAQARAAAJgIQAJgKAAgXIAAgVQAAgZgIgKQgIgJgOAAQgPAAgIAJQgIAJAAAUIAAAZIg5AAIAAgVQAAgYAFgRQAGgTALgMQAMgMARgHQARgGAVAAQAWAAARAGQARAHALAMQAMAMAFATQAGARAAAYIAAAJQAAAggKATQgLAUgVAJQALAFAIAHQAIAHAGALQAJAUAAAeIAAAeQAAAXgGASQgFASgMANQgLAMgRAHQgRAGgWAAQgVAAgRgGg");
	this.shape_1.setTransform(12.9,-49);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhZDDIAAgwQAAgUAFgSQAEgQAKgQQALgTAeghQAdggALgTQAJgPAEgQQAGgSAAgUQAAgYgJgLQgHgJgPAAQgPAAgIAJQgIAJAAAUIAAAqIg5AAIAAgmQAAgXAFgSQAGgSAMgMQALgNARgGQARgHAVAAQAWAAARAHQARAGALANQAMAMAFASQAGASAAAXQAAAWgFAUQgFASgJASIgTAeIgWAbQg7A+AAAfIAAAJIByAAIAAA3g");
	this.shape_2.setTransform(13.2,23.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ23, new cjs.Rectangle(0,-139,26,198.1), null);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgnC+QgRgGgLgNQgMgMgGgSQgGgSAAgXIAAjEQAAgYAGgSQAFgUAMgMQALgNARgGQASgHAWAAQAWAAARAHQARAGAMAMQALANAGARQAGATAAAXIAAAJIg6AAIAAgNQAAgUgIgKQgIgIgPAAQgQAAgIAKQgJALAAAbIAABGQAIgRAOgIQANgJAVAAQAQAAANAFQAMAGAJALQAIALAEARQAFAPAAAWIAABGQAAAXgGASQgGASgMAMQgMANgRAGQgRAHgWAAQgVAAgSgHgAgWAGQgJAIAAAVIAABFQAAAUAJAJQAIAJAOAAQAPAAAIgJQAIgJAAgUIAAhFQAAgVgIgIQgIgIgPAAQgOAAgIAIg");
	this.shape.setTransform(13,198.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgnC/QgQgHgMgNQgMgMgGgSQgGgSAAgXIAAjHQAAgXAGgSQAGgTAMgMQAMgMAQgHQASgGAVAAQAWAAARAGQARAHAMAMQAMAMAFATQAHASAAAXIAADHQAAAXgHASQgFASgMAMQgMANgRAHQgRAGgWAAQgVAAgSgGgAgWiEQgJAJAAAUIAADPQAAAUAJAJQAHAJAPAAQAPAAAIgJQAIgJAAgUIAAjPQAAgUgIgJQgIgJgPAAQgPAAgHAJg");
	this.shape_1.setTransform(12.9,604.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgGDBIAAklIgvAAIAAgrQARAAAMgEQALgEAHgGQAKgKAJgYIApAAIAAGAg");
	this.shape_2.setTransform(13.3,537);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhZDDIAAgwQAAgUAFgSQAEgQAKgQQALgTAeghQAdggALgTQAJgPAEgQQAGgSAAgUQAAgYgJgLQgHgJgPAAQgPAAgIAJQgIAJAAAUIAAAqIg5AAIAAgmQAAgXAFgSQAGgSAMgMQALgNARgGQARgHAVAAQAWAAARAHQARAGALANQAMAMAFASQAGASAAAXQAAAWgFAUQgFASgJASIgTAeIgWAbQg7A+AAAfIAAAJIByAAIAAA3g");
	this.shape_3.setTransform(13.2,469.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgmC/QgRgHgMgMQgLgNgGgSQgFgSAAgXIAAggIA5AAIAAAkQAAAUAIAJQAIAJAPAAQAOAAAIgJQAIgLAAgXIAAgfQAAgagJgMQgJgLgUABIgVAAIAAg3IAYAAQARAAAJgIQAJgKAAgXIAAgVQAAgZgIgKQgIgJgOAAQgPAAgIAJQgIAJAAAUIAAAZIg5AAIAAgVQAAgYAFgSQAGgRALgMQAMgNARgGQARgHAVAAQAWAAARAHQARAGALANQAMAMAFARQAGASAAAYIAAAKQAAAfgKATQgLAUgVAJQALAFAIAHQAIAIAGAKQAJAUAAAeIAAAeQAAAXgGASQgFASgMANQgLAMgRAHQgRAGgWAAQgVAAgRgGg");
	this.shape_4.setTransform(12.9,401.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgnC+QgQgGgMgNQgMgMgGgSQgGgSAAgXIAAjHQAAgXAGgTQAGgRAMgNQAMgMAQgHQASgGAVAAQAWAAARAGQARAHAMAMQAMANAFARQAHATAAAXIAADHQAAAXgHASQgFASgMAMQgMANgRAGQgRAHgWAAQgVAAgSgHgAgWiFQgJAKAAAUIAADPQAAAUAJAJQAHAJAPAAQAPAAAIgJQAIgJAAgUIAAjPQAAgUgIgKQgIgIgPAAQgPAAgHAIg");
	this.shape_5.setTransform(12.9,-72.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgnC/QgQgHgMgNQgLgMgGgSQgGgSAAgXIAAgKIA5AAIAAAOQAAAUAJAJQAIAJAPAAQAQAAAIgKQAIgLAAgaIAAhHQgHARgOAJQgOAIgUAAQgQAAgNgGQgMgFgJgMQgIgKgFgRQgEgPAAgWIAAhGQAAgXAGgSQAGgTAMgMQAMgMARgHQARgGAVAAQAWAAARAGQASAHALAMQAMAMAGATQAGASAAAXIAADEQAAAYgGATQgFASgMANQgLANgSAHQgRAGgXAAQgWAAgRgGgAgWiEQgIAJAAAUIAABGQAAATAIAKQAIAHAOAAQAPAAAIgHQAIgKAAgTIAAhGQAAgUgIgJQgIgJgPABQgOgBgIAJg");
	this.shape_6.setTransform(12.8,-4.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgnC/QgSgHgMgMQgMgNgGgSQgHgSAAgXIAAgeQAAgdAJgTQAKgWATgKQgTgJgJgUQgKgUAAgcIAAgMQAAgXAHgSQAGgTAMgLQAMgNASgHQARgGAWAAQAXAAASAGQARAHAMANQAMALAHATQAGASAAAXIAAAMQAAAcgKAUQgJAUgTAJQAUAKAJAWQAJATAAAdIAAAeQAAAXgGASQgHASgMANQgMAMgRAHQgSAGgXAAQgWAAgRgGgAgYAeQgJAKAAAXIAAAkQAAAXAKALQAIAJAPAAQAQAAAIgJQAKgLAAgXIAAgkQAAgXgJgKQgIgKgRAAQgPAAgJAKgAgXiEQgKALAAAYIAAAVQAAAXAKAKQAIAIAPAAQAQAAAIgIQAKgLAAgWIAAgVQAAgYgKgLQgIgJgQAAQgPAAgIAJg");
	this.shape_7.setTransform(12.9,63.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag6DAIBXlIIh2AAIAAg4IC0AAIAAA1IhZFLg");
	this.shape_8.setTransform(12.9,130.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAODBIAAhHIhzAAIAAg3IBskDIBCAAIAAEDIAdAAIAAA3IgdAAIAABHgAguBDIA8AAIAAiPg");
	this.shape_9.setTransform(13,333.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgmC8QgRgGgLgNQgMgMgGgSQgFgSAAgXIAAggIA5AAIAAAkQAAAUAJAJQAHAIAPAAQAOAAAJgIQAHgJABgUIAAhVQgBgTgHgJQgJgJgOAAQgPAAgHAJQgJAJAAATIAAAMIg5AAIALjfICeAAIAAA3IhoAAIgFBcQAIgOANgHQANgHASAAQARAAAMAGQANAGAJALQAHALAFAQQAEARAAAUIAABWQAAAXgFASQgGASgMAMQgLANgRAGQgRAHgWAAQgVAAgRgHg");
	this.shape_10.setTransform(13,266.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(0,-96.3,26,736), null);


(lib.Symbol38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#254245").ss(2,1,1).p("AqnnoIVPAAIAAPRI1PAAg");
	this.shape.setTransform(68,48.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AqnHpIAAvRIVPAAIAAPRg");
	this.shape_1.setTransform(68,48.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.moneyw();
	this.instance.parent = this;
	this.instance.setTransform(213,6,0.701,0.701);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag5BfIAAi9IBuAAIAAAXIhTAAIAAA8IBDAAIAAAWIhDAAIAAA9IBYAAIAAAXg");
	this.shape.setTransform(185.3,31.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAnBfIgohLIgoAAIAABLIgbAAIAAi9IA8AAIAVABQAIABAGADQAHADAGAFQAFAFAEAGQAEAHACAHQACAIAAAJQAAAJgDAIQgCAJgEAHQgFAGgGAFQgGAFgIACIAAABIAGAIIAoBKgAgpgDIAmAAQAHAAAGgCQAGgDAFgEQAFgFABgGQADgHAAgIQAAgWgRgIQgIgDgPAAIgfAAg");
	this.shape_1.setTransform(169.6,31.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgTBgQgJgCgJgDQgJgEgIgFQgIgFgHgIQgHgGgFgJQgGgIgDgIQgEgJgBgKQgCgKAAgKQAAgKACgJQABgKAEgJQADgIAGgIQAFgIAHgGQAHgIAIgFQAIgFAJgEQAIgDAKgCQAKgCAJAAQAKAAAKACQAKACAIADQAJAEAIAFQAIAFAHAIQAHAGAFAIQAGAIADAIQADAJACAKQACAJAAAKQAAAKgCAKQgCAKgDAJQgDAIgGAIQgFAJgHAGQgHAIgIAFQgIAFgJAEQgIADgKACQgKACgKAAQgJAAgKgCgAgbhEQgNAFgJAKQgLALgEANQgFANgBAPQABAPAFAOQAEANALALQAJALANAGQANAEAOABQAQgBAMgEQANgGAKgLQAJgLAFgNQAGgOgBgPQABgPgGgNQgFgNgJgLQgVgUgegBQgOABgNAFg");
	this.shape_2.setTransform(149.1,31.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABGBfIgJh3IAAgcIgBAAIgKAcIgmBVIgXAAIgmhVIgKgcIAAAAIgBAcIgJB3IgbAAIAQi9IAcAAIAsBmIAIAZIAAAAIAKgZIAshmIAbAAIAQC9g");
	this.shape_3.setTransform(126.5,31.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAiBhIg1haIgOgbIgCgGIAAAAIACAhIAABaIgvAAIAAjBIAvAAIA1BbIANAbIADAEIAAAAIgCgfIAAhbIAvAAIAADBg");
	this.shape_4.setTransform(98.2,31.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAaBhIgihBIgWAAIAABBIgvAAIAAjBIBDAAIAVACQAJABAGACQAJAEAHAFQAGAFAFAHQAEAHADAJQACAJAAAKQAAAIgCAIQgCAIgEAHQgEAHgFAFQgFAFgHAEIAAAAIAIAMIAlBEgAgegIIAVAAQAKAAAHgGQAGgHAAgKQAAgJgDgFQgCgFgHgDQgEgCgMAAIgQAAg");
	this.shape_5.setTransform(80.2,31.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAqBhIgMgpIg7AAIgMApIgxAAIBCjBIAxAAIBBDBgAATASIgLglIgIghIAAAAIgHAhIgLAlIAlAAg");
	this.shape_6.setTransform(61.4,31.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag9BhIAAjBIB3AAIAAApIhIAAIAAAjIA5AAIAAAnIg5AAIAAAlIBMAAIAAApg");
	this.shape_7.setTransform(45.2,31.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag+BhIAAjBIAvAAIAACYIBOAAIAAApg");
	this.shape_8.setTransform(30.4,31.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("A08FEIAAqHMAp5AAAIAAKHg");
	this.shape_9.setTransform(134.1,32.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol36, new cjs.Rectangle(0,0,268.1,64.9), null);


(lib.Symbol35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.money();
	this.instance.parent = this;
	this.instance.setTransform(213,6,0.701,0.701);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Ag5BfIAAi9IBuAAIAAAXIhTAAIAAA8IBDAAIAAAWIhDAAIAAA9IBYAAIAAAXg");
	this.shape.setTransform(185.7,31.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AAnBfIgnhLIgpAAIAABLIgbAAIAAi9IA9AAIATABQAKABAFADQAHADAFAFQAGAFAEAGQAEAHACAHQACAIAAAJQAAAJgCAIQgDAJgFAHQgDAGgHAFQgHAFgHACIAAABIAGAIIAoBKgAgpgDIAmAAQAHAAAGgCQAGgDAFgEQAFgFACgGQACgHAAgIQAAgWgSgIQgHgDgOAAIggAAg");
	this.shape_1.setTransform(170,31.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgTBhQgKgDgJgDQgIgDgIgGQgIgFgHgHQgHgIgFgHQgFgJgEgJQgDgJgCgJQgCgKAAgJQAAgLACgKQACgJADgJQAEgIAFgIQAFgHAHgHQAHgHAIgGQAIgFAIgDQAJgEAKgCQAKgCAJABQAKgBALACQAJACAJAEQAJADAHAFQAIAGAHAHQAHAHAFAHQAGAIADAIQADAJACAJQACAKAAALQAAAJgCAKQgCAJgDAJQgDAJgGAJQgFAHgHAIQgHAHgIAFQgHAGgJADQgJADgJADQgLACgKAAQgJAAgKgCgAgahEQgNAFgLALQgJAKgGANQgEANAAAQQAAAOAEAOQAGANAJALQALALANAFQAMAGAOgBQAPABANgGQAMgFAKgLQAKgLAGgNQAEgOAAgOQAAgQgEgNQgGgNgKgKQgUgWgeABQgOgBgMAGg");
	this.shape_2.setTransform(149.5,31.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("ABGBfIgJh3IAAgcIgBAAIgKAcIgmBVIgXAAIgmhVIgKgcIAAAAIgBAcIgJB3IgbAAIAQi9IAcAAIAsBmIAIAZIAAAAIAKgZIAshmIAbAAIAQC9g");
	this.shape_3.setTransform(126.9,31.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AAiBgIg1haIgOgaIgCgFIAAAAIACAfIAABaIgvAAIAAi/IAvAAIA1BaIANAaIADAGIAAAAIgCggIAAhaIAvAAIAAC/g");
	this.shape_4.setTransform(98.6,31.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AAZBgIghhBIgWAAIAABBIgvAAIAAi/IBDAAIAVABQAKABAFACQAJAEAGAEQAHAGAEAHQAFAHACAJQADAJAAAKQAAAJgCAHQgCAIgDAHQgFAGgEAFQgGAHgHADIAAABIAHALIAmBDgAgegIIAUAAQALAAAGgGQAHgGAAgLQAAgJgDgFQgDgFgFgCQgFgDgMAAIgQAAg");
	this.shape_5.setTransform(80.6,31.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AAqBgIgMgoIg7AAIgMAoIgwAAIBCi/IAwAAIBCC/gAATATIgLgmIgHggIgBAAIgHAgIgLAmIAlAAg");
	this.shape_6.setTransform(61.8,31.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("Ag9BgIAAi/IB3AAIAAAoIhIAAIAAAjIA5AAIAAAoIg5AAIAAAkIBMAAIAAAog");
	this.shape_7.setTransform(45.6,31.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("Ag+BgIAAi/IAvAAIAACXIBOAAIAAAog");
	this.shape_8.setTransform(30.8,31.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("A08FEIAAqHMAp5AAAIAAKHg");
	this.shape_9.setTransform(134.1,32.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol35, new cjs.Rectangle(0,0,268.1,64.9), null);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.street();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.806,0.806);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol27, new cjs.Rectangle(0,0,645.2,429.9), null);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIBVIAAgTIASAAIAAATgAgHAoIAAh8IAQAAIgBB8g");
	this.shape.setTransform(271.1,12.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgdA9IAAh4IAQAAIAAAWIgBAKIAAAAQACgHAEgGQAFgGADgFQAGgEAFgDQAGgCAHAAIAHABIAAAQIgGgBQgHAAgFACQgGADgEAEQgEAEgDAGIgGALQgDALAAANIAAAzg");
	this.shape_1.setTransform(264.4,14.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgQA7QgLgEgJgJQgSgSAAgcQAAgOAEgLQAEgLAJgJQAIgJALgFQALgDAMAAQAMAAAJADQAJAFAHAIQAHAHADALQADAJAAAMIAAAHIhcAAQAAAMADAIQAEAJAHAHQAGAGAJADQAIAEAJgBQAVAAAQgOIAHAMQgIAJgNAEQgMAEgMAAQgMAAgMgEgAAngLQgBgKgCgGQgDgHgFgGQgEgEgGgCQgHgDgHAAQgHAAgHADQgHACgFAFQgGAEgDAIQgEAGgCAKIBMAAIAAAAg");
	this.shape_2.setTransform(252.8,14.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAFBKQgJgEgFgKQgDgFgCgGQgCgIAAgIIAAg+IgQAAIAAgNIAQAAIAAgjIAQAAIAAAjIAeAAIAAANIgeAAIAAA8QAAAKACAHQADAGAFADQAFAFAMABIAGAAIAAAOIgHABQgMAAgJgEg");
	this.shape_3.setTransform(242.4,13.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgWA7QgLgFgJgIIAJgLQAGAGAKAFQAJADALAAQAKAAAHgFQAHgFgBgKQAAgEgCgFQgDgCgFgDQgEgEgQgHQgQgFgHgGQgFgEgDgFQgCgGAAgHQAAgHADgHQADgGAGgEQAFgFAIgDQAIgBAHAAQAMAAAJACQAJAEAIAGIgIANQgFgFgIgDQgJgDgIAAQgKAAgHAEQgHAFAAAKQAAAEADAFQACADAFADIAWAKQAPAFAHAGQAFAFADAFQACAFAAAHQAAAPgLAKQgHAFgHACQgHACgJAAQgNAAgLgEg");
	this.shape_4.setTransform(233,14.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgkA2QgGgFgDgGQgDgHAAgIQAAgKAFgIQAEgJAKgEQAJgFAOgCQANgDASAAIAHAAIAAgDQAAgJgCgGQgCgFgDgEQgEgEgGgCQgFgCgIAAQgIAAgJADQgIADgIAGIgIgNQAIgGALgEQAMgDALAAQALAAAJACQAIADAGAGQAGAGADAJQADAJAAALIAABNIgQAAIAAgPIABgKIgBAAQgCAGgEAFIgKAIQgFAEgHADQgFABgHAAQgQABgNgKgAgCABQgNACgIAGIgGAHQgCAFAAAGQAAAJAHAHQAEADAFACQAFABAGAAQAHAAAHgDQAHgEAFgGQAFgIADgHQACgIAAgJIAAgEIgHAAQgQAAgLABg");
	this.shape_5.setTransform(221.1,14.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgQBVIAAhpIgPAAIAAgOIAPAAIAAgGQAAgNAEgKQAFgKAHgEQAGgEAGgCQAGgBAHAAIAHAAIAAAPIgGgBQgKAAgHAFQgEAEgDAGQgCAGAAAKIAAAFIAeAAIAAAOIgeAAIAABpg");
	this.shape_6.setTransform(211.7,12.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag3BRIgCgCIAHgNQAGAFAIAAQAHAAAGgFQAGgFAEgKIAHgRIgyh3IASAAIAjBXIAEANIABAAIAEgNIAjhXIARAAIg7CSQgCAFgEAFIgHAIIgKAFQgGACgGAAQgKAAgJgFg");
	this.shape_7.setTransform(195.2,17.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAFBKQgJgEgFgKQgDgFgCgGQgCgIAAgIIAAg+IgQAAIAAgNIAQAAIAAgjIAQAAIAAAjIAeAAIAAANIgeAAIAAA8QAAAKACAHQADAGAFADQAFAFAMABIAGAAIAAAOIgHABQgMAAgJgEg");
	this.shape_8.setTransform(185.2,13.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgeA9IAAh4IAQAAIAAAWIgBAKIABAAQADgHAEgGQAEgGAEgFQAEgEAGgDQAHgCAGAAIAGABIAAAQIgFgBQgHAAgGACQgFADgFAEQgDAEgEAGIgEALQgEALAAANIAAAzg");
	this.shape_9.setTransform(177.6,14.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgQA7QgLgEgJgJQgSgSAAgcQAAgOAEgLQAEgLAJgJQAIgJALgFQALgDAMAAQAMAAAJADQAJAFAHAIQAHAHADALQADAJAAAMIAAAHIhcAAQAAAMADAIQAEAJAHAHQAGAGAJADQAIAEAJgBQAVAAAQgOIAHAMQgIAJgNAEQgMAEgMAAQgMAAgMgEgAAngLQgBgKgCgGQgDgHgFgGQgEgEgGgCQgHgDgHAAQgHAAgHADQgHACgFAFQgGAEgDAIQgEAGgCAKIBMAAIAAAAg");
	this.shape_10.setTransform(165.9,14.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag2BWIAAioIAPAAIAAAMIAAAKIAAAAQADgGAEgFQAFgFAFgDQAFgDAHgCQAGgBAGAAQANAAAJAEQAKAEAHAJQAHAJAEALQADAMAAAOQAAAcgPARQgPASgYAAIgLgCIgLgFQgGgDgEgEQgEgFgDgFIgBAAIABAKIAAA7gAgPhDQgHADgFAGQgFAGgDAJQgDAKAAALQAAAKACAJQADAHAFAIQALAOARAAQAIAAAHgDQAHgEAFgGQAGgHADgIQADgJAAgLQAAgLgDgJQgDgIgFgHQgGgHgHgDQgHgDgIAAQgHAAgIADg");
	this.shape_11.setTransform(152.6,17.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgYA7QgMgEgJgKQgJgJgEgLQgFgMAAgNQAAgNAFgMQAEgKAJgJQAJgKAMgEQALgEANAAQANAAALAEQAMAEAJAKQATARAAAbQAAANgFAMQgEALgKAJQgJAKgMAEQgLAEgNAAQgNAAgLgEgAgSgsQgIADgHAHQgGAHgEAJQgDAIgBAKQABAKADAIQAEAJAGAIQAHAGAIAEQAJAEAJgBQAJABAJgEQAJgEAGgGQAHgIADgJQAEgIAAgKQAAgKgEgIQgDgJgHgHQgGgHgJgDQgJgEgJAAQgJAAgJAEg");
	this.shape_12.setTransform(137.6,14.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgdA9IAAh4IAPAAIAAAWIgBAKIABAAQADgHADgGQAEgGAEgFQAFgEAGgDQAGgCAHAAIAGABIAAAQIgFgBQgHAAgGACQgFADgFAEQgDAEgEAGIgEALQgEALAAANIAAAzg");
	this.shape_13.setTransform(126.5,14.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag2BWIAAioIAPAAIAAAMIAAAKIAAAAQADgGAEgFQAFgFAFgDQAFgDAHgCQAGgBAGAAQANAAAJAEQAKAEAHAJQAHAJAEALQADAMAAAOQAAAcgPARQgPASgYAAIgLgCIgLgFQgGgDgEgEQgEgFgDgFIgBAAIABAKIAAA7gAgPhDQgHADgFAGQgFAGgDAJQgDAKAAALQAAAKACAJQADAHAFAIQALAOARAAQAIAAAHgDQAHgEAFgGQAGgHADgIQADgJAAgLQAAgLgDgJQgDgIgFgHQgGgHgHgDQgHgDgIAAQgHAAgIADg");
	this.shape_14.setTransform(114.8,17.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgeA9IAAh4IAQAAIAAAWIAAAKIAAAAQADgHAEgGQADgGAFgFQAFgEAFgDQAGgCAHAAIAGABIAAAQIgGgBQgGAAgFACQgGADgEAEQgEAEgEAGIgFALQgDALAAANIAAAzg");
	this.shape_15.setTransform(97.8,14.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgcA7QgIgDgFgGQgFgGgCgIQgDgJAAgMIAAhMIAQAAIAABIQABAIABAHQABAHADAEQADAFAFACQAFACAIABQAJgBAIgDQAIgEAHgIQAGgHADgJQADgJAAgJIAAg6IAQAAIAAB4IgQAAIAAgTIABgJIgBAAQgCAFgEAFIgLALQgGAFgHACQgHADgJAAQgLAAgHgDg");
	this.shape_16.setTransform(85.7,15);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgYA7QgLgEgKgKQgJgJgFgLQgEgMAAgNQAAgNAEgMQAFgKAJgJQAKgKALgEQAMgEAMAAQANAAAMAEQALAEAJAKQATARAAAbQAAANgFAMQgFALgJAJQgJAKgLAEQgMAEgNAAQgMAAgMgEgAgSgsQgIADgHAHQgHAHgDAJQgEAIABAKQgBAKAEAIQADAJAHAIQAHAGAIAEQAJAEAJgBQAKABAIgEQAIgEAHgGQAHgIAEgJQADgIAAgKQAAgKgDgIQgEgJgHgHQgHgHgIgDQgIgEgKAAQgJAAgJAEg");
	this.shape_17.setTransform(71.2,14.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ag2BRIgDgCIAGgNQAIAFAHAAQAHAAAGgFQAFgFAFgKIAHgRIgyh3IASAAIAkBXIADANIAAAAIAFgNIAjhXIARAAIg7CSQgCAFgEAFIgIAIIgKAFQgFACgGAAQgLAAgHgFg");
	this.shape_18.setTransform(57.2,17.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgGBQQgEgDgDgGQgDgGAAgJIAAiMIAQAAIAACIQAAAJADAFQADAEAHAAIAEAAIAAAPIgGAAQgLAAgGgFg");
	this.shape_19.setTransform(42.7,12.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgGBQQgEgDgDgGQgDgGAAgJIAAiMIAQAAIAACIQAAAJADAFQADAEAHAAIAEAAIAAAPIgGAAQgLAAgGgFg");
	this.shape_20.setTransform(36.8,12.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgQA7QgLgEgJgJQgSgSAAgcQAAgOAEgLQAEgLAJgJQAIgJALgFQALgDAMAAQAMAAAJADQAJAFAHAIQAHAHADALQADAJAAAMIAAAHIhcAAQAAAMADAIQAEAJAHAHQAGAGAJADQAIAEAJgBQAVAAAQgOIAHAMQgIAJgNAEQgMAEgMAAQgMAAgMgEgAAngLQgBgKgCgGQgDgHgFgGQgEgEgGgCQgHgDgHAAQgHAAgHADQgHACgFAFQgGAEgDAIQgEAGgCAKIBMAAIAAAAg");
	this.shape_21.setTransform(26.5,14.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgOBWIgNgEIgNgHQgHgEgFgFIAKgNQAJAJALAFQANAFAKAAQAIAAAGgCQAGgCAFgEQAFgEACgFQACgGABgGQAAgIgFgGQgDgFgGgFIgNgIIgPgHIgQgHIgNgJQgGgGgDgGQgEgIAAgJQAAgLAEgIQADgIAIgGQAHgGAKgDQAJgEALAAQANAAAMAFQALAEAJAIIgIAOQgIgHgKgEQgJgEgLAAQgGAAgGACQgHACgFAEQgFAEgCAFQgDAFAAAHQAAAHAEAGQADAFAGAEQAGAEAHAEIAPAHIAQAGQAIAFAFAFQAGAFADAIQAFAHAAAKQAAAKgEAJQgDAIgIAHQgHAGgJADQgJAEgMAAg");
	this.shape_22.setTransform(13.4,12.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol25, new cjs.Rectangle(4.7,0,272.2,28.7), null);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAdBTIgthNIgMgXIgCgFIAAAAIACAcIAABNIgpAAIAAilIApAAIAtBOIALAWIACAFIABAAIgCgbIAAhOIApAAIAAClg");
	this.shape.setTransform(273.2,13.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgRBUQgJgCgHgDQgJgDgHgEIgMgLQgZgZAAgkQABgJABgIQACgJADgHQADgIAEgHIALgMIAMgLIAQgIQAHgDAJgBQAJgCAIAAQAKAAAIACQAIABAJADQAHAEAHAEIAOALIAKAMQAFAHADAIQADAHABAJQABAIAAAJQABAkgYAZIgOALQgHAEgHADQgJADgIACQgIACgKAAQgIAAgJgCgAgRgsQgIADgGAHQgHAHgDAIQgDAJAAAKQAAAUANAOQAGAHAIAEQAIADAJAAQAJAAAJgDQAHgEAHgHQAGgHADgJQAEgIAAgKQAAgKgEgJQgDgIgGgHQgHgHgHgDQgJgEgJAAQgIAAgJAEg");
	this.shape_1.setTransform(255,13.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgTBTIAAilIAnAAIAAClg");
	this.shape_2.setTransform(241.8,13.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgUBTIAAiCIgxAAIAAgjICLAAIAAAjIgyAAIAACCg");
	this.shape_3.setTransform(230.8,13.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAkBTIgKgjIgzAAIgKAjIgqAAIA4ilIAqAAIA4ClgAAQAQIgJggIgHgcIAAAAIgGAcIgJAgIAfAAg");
	this.shape_4.setTransform(215.8,13.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgHBUQgJgBgIgEQgIgDgHgEQgHgFgGgGQgYgYAAglQAAgJACgIQABgIADgIQADgIAFgGQAFgHAGgGQAYgZAlAAIARACIARAEQAIADAHAFIANAKIgSAeQgJgHgLgFQgLgFgLAAQgMAAgHAEQgJADgGAHQgMAOAAAUQAAAJADAJQADAIAGAIQAGAHAJAEQAIADALAAQAMAAALgFQALgFAKgKIAVAeQgbAcgoAAQgKAAgHgCg");
	this.shape_5.setTransform(200.1,13.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgRBUQgJgCgIgDQgIgDgHgEIgMgLQgZgZAAgkQABgJABgIQACgJADgHQADgIAEgHIALgMIAMgLIAPgIQAIgDAJgBQAJgCAIAAQAKAAAIACQAIABAJADQAHAEAHAEIAOALIAKAMQAFAHADAIQADAHABAJQABAIAAAJQABAkgYAZIgOALQgHAEgHADQgJADgIACQgIACgKAAQgIAAgJgCgAgRgsQgIADgGAHQgHAHgDAIQgDAJAAAKQAAAUANAOQAGAHAIAEQAIADAJAAQAJAAAJgDQAHgEAHgHQAGgHADgJQAEgIAAgKQAAgKgEgJQgDgIgGgHQgHgHgHgDQgJgEgJAAQgIAAgJAEg");
	this.shape_6.setTransform(182.1,13.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag1BTIAAilIApAAIAACCIBCAAIAAAjg");
	this.shape_7.setTransform(167,13.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAWBTIgdg4IgTAAIAAA4IgoAAIAAilIA5AAIASABQAIABAGACQAHADAFAEQAGAFAEAGQAEAGACAIQADAHgBAJQAAAHgBAHQgCAHgDAGIgIAKQgEAFgHACIAAABIAHAKIAgA6gAgagHIASAAQAJAAAGgFQAFgFAAgKQAAgHgDgEQgCgFgFgCQgDgCgLAAIgOAAg");
	this.shape_8.setTransform(147.3,13.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgbBQIgMgGQgGgDgEgFQgFgEgEgFIgGgLQgDgIgBgSIAAhnIAoAAIAABnQAAAHACAFQACAFAEADQAEADAFACQAFACAGAAQAHAAAFgCQAFgCAEgDQAEgDACgFQACgFAAgHIAAhnIAoAAIAABnQgBASgDAIIgGALQgEAFgFAEIgKAIIgMAGQgRAEgLAAQgTgBgIgDg");
	this.shape_9.setTransform(130.4,13.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgRBUQgJgCgIgDQgHgDgIgEIgNgLQgYgZAAgkQAAgJACgIQACgJADgHQACgIAFgHIAKgMIANgLIAPgIQAIgDAJgBQAJgCAIAAQAKAAAIACQAIABAJADQAHAEAHAEIAOALIAKAMQAFAHADAIQADAHABAJQACAIAAAJQAAAkgYAZIgOALQgHAEgHADQgJADgIACQgIACgKAAQgIAAgJgCgAgRgsQgIADgGAHQgGAHgEAIQgDAJAAAKQAAAUANAOQAGAHAIAEQAIADAJAAQAJAAAJgDQAHgEAHgHQAGgHAEgJQADgIAAgKQAAgKgDgJQgEgIgGgHQgHgHgHgDQgJgEgJAAQgIAAgJAEg");
	this.shape_10.setTransform(112.5,13.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgTBTIAAhEIg3hhIAvAAIASAoIAJAYIABAAIAJgYIATgoIAuAAIg3BhIAABEg");
	this.shape_11.setTransform(95.7,13.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgUBTIAAiCIgyAAIAAgjICMAAIAAAjIgyAAIAACCg");
	this.shape_12.setTransform(75.4,13.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgHBUQgJgBgIgEQgIgDgHgEQgHgFgGgGQgYgYAAglQAAgJACgIQABgIADgIQADgIAFgGQAFgHAGgGQAYgZAlAAIARACIARAEQAIADAHAFIANAKIgSAeQgJgHgLgFQgLgFgLAAQgMAAgHAEQgJADgGAHQgMAOAAAUQAAAJADAJQADAIAGAIQAGAHAJAEQAIADALAAQAMAAALgFQALgFAKgKIAVAeQgbAcgoAAQgKAAgHgCg");
	this.shape_13.setTransform(60.1,13.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag1BTIAAilIBnAAIAAAjIg+AAIAAAeIAyAAIAAAiIgyAAIAAAfIBBAAIAAAjg");
	this.shape_14.setTransform(45.4,13);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag1BTIAAilIAoAAIAACCIBDAAIAAAjg");
	this.shape_15.setTransform(32.7,13);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag0BTIAAilIBmAAIAAAjIg+AAIAAAeIAyAAIAAAiIgyAAIAAAfIBBAAIAAAjg");
	this.shape_16.setTransform(19.4,13);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgPBUQgIgBgIgDQgIgDgHgFQgHgEgFgGIAVgfQAIAHAKAFQAMAFAIAAQAIAAAGgDQADgDAAgFQAAgFgCgDQgDgDgGgDIgYgLIgNgIQgHgEgFgEQgGgGgDgHQgDgIAAgJQABgLAEgJQAEgKAIgGQAJgIAKgDQAMgEAMAAQAKAAASAFIAMAGIAMAIIgRAhQgIgGgJgEQgLgEgJAAQgIAAgFADQgEADAAAFQAAAGAFAEQAGAEAHAEIASAHQAKAFAIAFQAIAFAFAIIAEAKQABAGABAGQAAALgFAJQgDAJgJAIQgHAHgLAEQgLAEgOAAQgHAAgIgCg");
	this.shape_17.setTransform(5.6,13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol22, new cjs.Rectangle(-3.2,1.2,287.6,27.7), null);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BD250F").s().p("A3bEuIAApbMAu3AAAIAAJbg");
	this.shape.setTransform(150,30.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(0,0,300,60.4), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#254245").s().p("A3bNkIAA7HMAu3AAAIAAbHg");
	this.shape.setTransform(150,86.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,173.6);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#435385").s().p("AgbDQIgLAAIAAgjQAbAAAGgEQAFgEAAgUIAAkIIAnAAIAAEMQAAAZgJANQgOAWgmAAgAAAiiIAAguIAnAAIAAAug");
	this.shape.setTransform(326.3,50.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#435385").s().p("AhLBcQgfgfAAg6QAAg4AfgjQAegkAxAAQAZABAXALQAYAMAMATQALARAEAYQAEAQAAAjIiqAAQABAkAPAWQAQAVAgAAQAfABASgVQALgMAEgQIAnAAQgCANgIAQQgJAQgLAKQgSASgaAGQgOADgRABQgsAAgeghgABCgTQgCgagJgQQgQgcgmAAQgaAAgSATQgSAUgBAfICAAAIAAAAg");
	this.shape_1.setTransform(310.5,50.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#435385").s().p("AgVB2IhXjrIAuAAIA+C/IBCi/IArAAIhZDrg");
	this.shape_2.setTransform(286.9,50.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#435385").s().p("AhKBmQgWgYgBgkIAmAAQACAUAIALQAPATAlAAQAWAAARgKQARgJAAgUQAAgPgNgIQgJgFgagHIgfgHQgegIgPgIQgagQAAgdQAAghAZgVQAYgUApAAQA1AAAYAfQAPAUgBAXIglAAQgBgOgJgLQgNgPgiAAQgXAAgMAIQgLAJAAAOQAAAPAPAJQAJAGASAEIAZAGQAsALAOAIQAXAQAAAgQAAAggYAWQgYAXgxAAQg0AAgXgXg");
	this.shape_3.setTransform(264.5,50.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#435385").s().p("AAvB2Igvi1IguC1IgqAAIhDjrIArAAIAtC5IAui5IAsAAIAuC4IAwi4IAoAAIhFDrg");
	this.shape_4.setTransform(236.9,50.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#435385").s().p("AhPBcQgdghAAg3QAAg6AegjQAegjAxAAQAuAAAfAeQAfAeAAA7QAAA4gcAlQgbAlg5AAQgwAAgcghgAgzg+QgQAbAAAmQAAAmAQAZQAQAZAjAAQAnAAAOgeQAPgeAAgjQAAghgLgUQgQghgpAAQgjAAgQAcg");
	this.shape_5.setTransform(208,50.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#435385").s().p("AgTChIAAlCIAnAAIAAFCg");
	this.shape_6.setTransform(190.8,45.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#435385").s().p("AgMCKQgKgOAAgWIAAibIggAAIAAghIAgAAIAAhBIAnAAIAABBIAmAAIAAAhIgmAAIAACYQAAANAJAEQAEACALAAIAGAAIAIgBIAAAgIgOADIgQAAQgbAAgKgOg");
	this.shape_7.setTransform(179.3,47.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#435385").s().p("AA4B4IAAiTQgBgWgGgNQgLgWgbAAQgNAAgJADQgQAFgNAOQgKAMgCANQgDAMgBAXIAAB6IgnAAIAAjqIAlAAIAAAhQARgUATgJQASgJAXAAQAxAAASAjQAKATAAAjIAACWg");
	this.shape_8.setTransform(160.9,49.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#435385").s().p("AhLBcQgfgfAAg6QAAg4AfgjQAegkAxAAQAZABAXALQAYAMAMATQALARAEAYQAEAQAAAjIiqAAQABAkAPAWQAQAVAgAAQAfABASgVQALgMAEgQIAnAAQgCANgIAQQgJAQgLAKQgSASgaAGQgOADgRABQgsAAgeghgABCgTQgCgagJgQQgQgcgmAAQgaAAgSATQgSAUgBAfICAAAIAAAAg");
	this.shape_9.setTransform(135.6,50.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#435385").s().p("AgVB2IhXjrIAuAAIA+C/IBCi/IArAAIhZDrg");
	this.shape_10.setTransform(112,50.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#435385").s().p("AhLBcQgfgfAAg6QAAg4AfgjQAegkAxAAQAZABAXALQAYAMAMATQALARAEAYQAEAQAAAjIiqAAQABAkAPAWQAQAVAgAAQAfABASgVQALgMAEgQIAnAAQgCANgIAQQgJAQgLAKQgSASgaAGQgOADgRABQgsAAgeghgABCgTQgCgagJgQQgQgcgmAAQgaAAgSATQgSAUgBAfICAAAIAAAAg");
	this.shape_11.setTransform(88.1,50.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#435385").s().p("ABOChIgDgLIgDgZIgCg2QgCgfgVgLQgMgGgaAAIhgAAIAACKIgsAAIAAlCICSAAQAkAAAYAMQAsAUAAA3QAAAegLASQgNASgVALQATAIAKAMQAJAMABAcIACAsQAAATADAIQAEAQAKAEIAAAHgAhXgMIBhAAQAegBASgLQARgNAAggQAAgigYgNQgNgHgWABIhnAAg");
	this.shape_12.setTransform(60.5,45.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#435385").ss(2.7,1,1).p("A4omfMAxRAAAQBdAABBBBQBCBCAABcIAAGBQAABchCBCQhBBBhdAAMgxRAAAQhdAAhBhBQhChCAAhcIAAmBQAAhcBChCQBBhBBdAAg");
	this.shape_13.setTransform(186.6,48.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("A5qHhQhdAAhBhBQhChCAAhcIAAoDQAAhcBChCQBBhBBdAAMAzVAAAQBdAABBBBQBCBCAABcIAAIDQAABchCBCQhBBBhdAAg");
	this.shape_14.setTransform(186.7,48.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgbDQIgLAAIAAgjQAbAAAGgEQAFgEAAgUIAAkIIAnAAIAAEMQAAAZgJANQgOAWgmAAgAAAiiIAAguIAnAAIAAAug");
	this.shape_15.setTransform(326.3,50.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhLBcQgfgfAAg6QAAg4AfgjQAegkAxAAQAZABAXALQAYAMAMATQALARAEAYQAEAQAAAjIiqAAQABAkAPAWQAQAVAgAAQAfABASgVQALgMAEgQIAnAAQgCANgIAQQgJAQgLAKQgSASgaAGQgOADgRABQgsAAgeghgABCgTQgCgagJgQQgQgcgmAAQgaAAgSATQgSAUgBAfICAAAIAAAAg");
	this.shape_16.setTransform(310.5,50.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgVB2IhXjrIAuAAIA+C/IBCi/IArAAIhZDrg");
	this.shape_17.setTransform(286.9,50.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AhKBmQgWgYgBgkIAmAAQACAUAIALQAPATAlAAQAWAAARgKQARgJAAgUQAAgPgNgIQgJgFgagHIgfgHQgegIgPgIQgagQAAgdQAAghAZgVQAYgUApAAQA1AAAYAfQAPAUgBAXIglAAQgBgOgJgLQgNgPgiAAQgXAAgMAIQgLAJAAAOQAAAPAPAJQAJAGASAEIAZAGQAsALAOAIQAXAQAAAgQAAAggYAWQgYAXgxAAQg0AAgXgXg");
	this.shape_18.setTransform(264.5,50.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAvB2Igvi1IguC1IgqAAIhDjrIArAAIAtC5IAui5IAsAAIAuC4IAwi4IAoAAIhFDrg");
	this.shape_19.setTransform(236.9,50.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhPBcQgdghAAg3QAAg6AegjQAegjAxAAQAuAAAfAeQAfAeAAA7QAAA4gcAlQgbAlg5AAQgwAAgcghgAgzg+QgQAbAAAmQAAAmAQAZQAQAZAjAAQAnAAAOgeQAPgeAAgjQAAghgLgUQgQghgpAAQgjAAgQAcg");
	this.shape_20.setTransform(208,50.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgTChIAAlCIAnAAIAAFCg");
	this.shape_21.setTransform(190.8,45.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgMCKQgKgOAAgWIAAibIggAAIAAghIAgAAIAAhBIAnAAIAABBIAmAAIAAAhIgmAAIAACYQAAANAJAEQAEACALAAIAGAAIAIgBIAAAgIgOADIgQAAQgbAAgKgOg");
	this.shape_22.setTransform(179.3,47.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AA4B4IAAiTQgBgWgGgNQgLgWgbAAQgNAAgJADQgQAFgNAOQgKAMgCANQgDAMgBAXIAAB6IgnAAIAAjqIAlAAIAAAhQARgUATgJQASgJAXAAQAxAAASAjQAKATAAAjIAACWg");
	this.shape_23.setTransform(160.9,49.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AhLBcQgfgfAAg6QAAg4AfgjQAegkAxAAQAZABAXALQAYAMAMATQALARAEAYQAEAQAAAjIiqAAQABAkAPAWQAQAVAgAAQAfABASgVQALgMAEgQIAnAAQgCANgIAQQgJAQgLAKQgSASgaAGQgOADgRABQgsAAgeghgABCgTQgCgagJgQQgQgcgmAAQgaAAgSATQgSAUgBAfICAAAIAAAAg");
	this.shape_24.setTransform(135.6,50.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgVB2IhXjrIAuAAIA+C/IBCi/IArAAIhZDrg");
	this.shape_25.setTransform(112,50.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AhLBcQgfgfAAg6QAAg4AfgjQAegkAxAAQAZABAXALQAYAMAMATQALARAEAYQAEAQAAAjIiqAAQABAkAPAWQAQAVAgAAQAfABASgVQALgMAEgQIAnAAQgCANgIAQQgJAQgLAKQgSASgaAGQgOADgRABQgsAAgeghgABCgTQgCgagJgQQgQgcgmAAQgaAAgSATQgSAUgBAfICAAAIAAAAg");
	this.shape_26.setTransform(88.1,50.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("ABOChIgDgLIgDgZIgCg2QgCgfgVgLQgMgGgaAAIhgAAIAACKIgsAAIAAlCICSAAQAkAAAYAMQAsAUAAA3QAAAegLASQgNASgVALQATAIAKAMQAJAMABAcIACAsQAAATADAIQAEAQAKAEIAAAHgAhXgMIBhAAQAegBASgLQARgNAAggQAAgigYgNQgNgHgWABIhnAAg");
	this.shape_27.setTransform(60.5,45.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(2.7,1,1).p("A4omfMAxRAAAQBdAABBBBQBCBCAABcIAAGBQAABchCBCQhBBBhdAAMgxRAAAQhdAAhBhBQhChCAAhcIAAmBQAAhcBChCQBBhBBdAAg");
	this.shape_28.setTransform(186.6,48.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#435385").s().p("A5qHhQhdAAhBhBQhChCAAhcIAAoDQAAhcBChCQBBhBBdAAMAzVAAAQBdAABBBBQBCBCAABcIAAIDQAABchCBCQhBBBhdAAg");
	this.shape_29.setTransform(186.7,48.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,373.4,96.3);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#435385").s().p("AgZDDIgKgBIAAggQAZgBAFgDQAFgEAAgTIAAj2IAkAAIAAD6QAAAYgIAMQgNAUgjAAgAAAiXIAAgrIAkAAIAAArg");
	this.shape.setTransform(339,51);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#435385").s().p("AhGBWQgdgeAAg1QAAg0AdghQAcghAtAAQAYAAAWALQAVALAMARQALARADAWQAEAPAAAgIifAAQABAiAOAUQAPAUAeAAQAdAAARgTQAJgLAEgPIAlAAQgCAMgIAPQgIAPgKAKQgRAQgYAGQgOADgPAAQgpAAgcgegAA+gSQgDgYgIgOQgPgbgjAAQgYAAgRASQgRATgBAcIB4AAIAAAAg");
	this.shape_1.setTransform(324.2,50.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#435385").s().p("AgUBuIhRjbIAsAAIA5CyIA9iyIApAAIhUDbg");
	this.shape_2.setTransform(302.2,50.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#435385").s().p("AhGBWQgdgeAAg1QAAg0AdghQAcghAtAAQAYAAAWALQAVALAMARQALARADAWQAEAPAAAgIifAAQABAiAOAUQAPAUAeAAQAdAAARgTQAJgLAEgPIAlAAQgCAMgIAPQgIAPgKAKQgRAQgYAGQgOADgPAAQgpAAgcgegAA+gSQgDgYgIgOQgPgbgjAAQgYAAgRASQgRATgBAcIB4AAIAAAAg");
	this.shape_3.setTransform(279.9,50.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#435385").s().p("Ag9COQgZgQgCghIAmAAQACAOAIAIQANANAaAAQApAAANgeQAEgJACgQIABgmQgLARgPAIQgPAIgZAAQgkAAgagZQgbgaAAg5QAAg3AbgfQAagfAnAAQAYAAAUAMQAKAIALANIAAgbIAiAAIAADGQAAAqgMAYQgXAtg/AAQgjAAgYgQgAgxhYQgIATAAAgQAAAlAPASQAPAUAZAAQAnAAAQgkQAJgTAAgbQAAgpgRgUQgQgUgaAAQgmAAgOAlg");
	this.shape_4.setTransform(256,55.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#435385").s().p("AA0BwIAAiJQAAgUgGgNQgJgUgbAAQgLAAgJADQgQAEgKAOQgKAKgDAMQgDAMAAAVIAAByIgkAAIAAjaIAjAAIAAAfQAPgTARgJQASgIAVAAQAuAAARAgQAIASABAhIAACMg");
	this.shape_5.setTransform(233.4,50.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#435385").s().p("AhKBWQgbgfAAgzQAAg3AcggQAcghAuAAQAqAAAdAdQAeAcAAA3QAAAzgaAjQgaAjg1AAQgtAAgagfgAgwg6QgPAaAAAjQAAAjAPAXQAQAYAgAAQAkAAANgbQAOgdAAggQAAgfgKgUQgPgegmAAQggAAgQAag");
	this.shape_6.setTransform(209.8,50.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#435385").s().p("ABICXIhriXIgxAuIAABpIgoAAIAAktIAoAAIAACUICWiUIA5AAIiAB6ICCCzg");
	this.shape_7.setTransform(186.1,46.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#435385").s().p("AhGBWQgdgeAAg1QAAg0AdghQAcghAtAAQAYAAAWALQAVALAMARQALARADAWQAEAPAAAgIifAAQABAiAOAUQAPAUAeAAQAdAAARgTQAJgLAEgPIAlAAQgCAMgIAPQgIAPgKAKQgRAQgYAGQgOADgPAAQgpAAgcgegAA+gSQgDgYgIgOQgPgbgjAAQgYAAgRASQgRATgBAcIB4AAIAAAAg");
	this.shape_8.setTransform(146.8,50.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#435385").s().p("Ag0BwIAAjaIAiAAIAAAmQAFgMAQgPQARgQAVAAIAEAAIAIABIAAAnIgFgBIgHAAQgcAAgOASQgOASAAAXIAAB9g");
	this.shape_9.setTransform(129.6,50.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#435385").s().p("AgLCBQgJgNAAgVIAAiRIgeAAIAAgeIAeAAIAAg9IAkAAIAAA9IAjAAIAAAeIgjAAIAACPQAAALAIAEQAEACAKAAIAGAAIAHgBIAAAeIgNACIgPABQgZAAgJgNg");
	this.shape_10.setTransform(115.4,47.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#435385").s().p("AhFBfQgUgXgCghIAkAAQABATAIAKQAOARAjAAQAVABAPgJQAQgJAAgTQAAgOgMgIQgJgEgXgGIgdgHQgdgHgNgIQgZgPAAgaQAAgfAXgUQAXgTAmAAQAyAAAWAdQAOATgBAVIgiAAQgBgMgIgLQgNgOggAAQgVAAgLAIQgLAIAAANQAAAOAPAJQAIAFAQAEIAYAGQApAJANAIQAWAOAAAfQAAAegXAVQgWAVguAAQgxAAgVgWg");
	this.shape_11.setTransform(99.3,50.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#435385").s().p("AhGBWQgdgeAAg1QAAg0AdghQAcghAtAAQAYAAAWALQAVALAMARQALARADAWQAEAPAAAgIifAAQABAiAOAUQAPAUAeAAQAdAAARgTQAJgLAEgPIAlAAQgCAMgIAPQgIAPgKAKQgRAQgYAGQgOADgPAAQgpAAgcgegAA+gSQgDgYgIgOQgPgbgjAAQgYAAgRASQgRATgBAcIB4AAIAAAAg");
	this.shape_12.setTransform(76.9,50.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#435385").s().p("AgVCXIhuktIAtAAIBWEAIBVkAIAvAAIhvEtg");
	this.shape_13.setTransform(51.7,46.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#435385").ss(2.7,1,1).p("A4omfMAxRAAAQBdAABBBBQBCBCAABcIAAGBQAABchCBCQhBBBhdAAMgxRAAAQhdAAhBhBQhChCAAhcIAAmBQAAhcBChCQBBhBBdAAg");
	this.shape_14.setTransform(186.6,48.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("A5qHhQhdAAhBhBQhChCAAhcIAAoDQAAhcBChCQBBhBBdAAMAzVAAAQBdAABBBBQBCBCAABcIAAIDQAABchCBCQhBBBhdAAg");
	this.shape_15.setTransform(186.7,48.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgZDDIgKgBIAAggQAZgBAFgDQAFgEAAgTIAAj2IAkAAIAAD6QAAAYgIAMQgNAUgjAAgAAAiXIAAgrIAkAAIAAArg");
	this.shape_16.setTransform(339,51);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhGBWQgdgeAAg1QAAg0AdghQAcghAtAAQAYAAAWALQAVALAMARQALARADAWQAEAPAAAgIifAAQABAiAOAUQAPAUAeAAQAdAAARgTQAJgLAEgPIAlAAQgCAMgIAPQgIAPgKAKQgRAQgYAGQgOADgPAAQgpAAgcgegAA+gSQgDgYgIgOQgPgbgjAAQgYAAgRASQgRATgBAcIB4AAIAAAAg");
	this.shape_17.setTransform(324.2,50.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgUBuIhRjbIAsAAIA5CyIA9iyIApAAIhUDbg");
	this.shape_18.setTransform(302.2,50.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhGBWQgdgeAAg1QAAg0AdghQAcghAtAAQAYAAAWALQAVALAMARQALARADAWQAEAPAAAgIifAAQABAiAOAUQAPAUAeAAQAdAAARgTQAJgLAEgPIAlAAQgCAMgIAPQgIAPgKAKQgRAQgYAGQgOADgPAAQgpAAgcgegAA+gSQgDgYgIgOQgPgbgjAAQgYAAgRASQgRATgBAcIB4AAIAAAAg");
	this.shape_19.setTransform(279.9,50.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ag9COQgZgQgCghIAmAAQACAOAIAIQANANAaAAQApAAANgeQAEgJACgQIABgmQgLARgPAIQgPAIgZAAQgkAAgagZQgbgaAAg5QAAg3AbgfQAagfAnAAQAYAAAUAMQAKAIALANIAAgbIAiAAIAADGQAAAqgMAYQgXAtg/AAQgjAAgYgQgAgxhYQgIATAAAgQAAAlAPASQAPAUAZAAQAnAAAQgkQAJgTAAgbQAAgpgRgUQgQgUgaAAQgmAAgOAlg");
	this.shape_20.setTransform(256,55.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AA0BwIAAiJQAAgUgGgNQgJgUgbAAQgLAAgJADQgQAEgKAOQgKAKgDAMQgDAMAAAVIAAByIgkAAIAAjaIAjAAIAAAfQAPgTARgJQASgIAVAAQAuAAARAgQAIASABAhIAACMg");
	this.shape_21.setTransform(233.4,50.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhKBWQgbgfAAgzQAAg3AcggQAcghAuAAQAqAAAdAdQAeAcAAA3QAAAzgaAjQgaAjg1AAQgtAAgagfgAgwg6QgPAaAAAjQAAAjAPAXQAQAYAgAAQAkAAANgbQAOgdAAggQAAgfgKgUQgPgegmAAQggAAgQAag");
	this.shape_22.setTransform(209.8,50.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("ABICXIhriXIgxAuIAABpIgoAAIAAktIAoAAIAACUICWiUIA5AAIiAB6ICCCzg");
	this.shape_23.setTransform(186.1,46.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AhGBWQgdgeAAg1QAAg0AdghQAcghAtAAQAYAAAWALQAVALAMARQALARADAWQAEAPAAAgIifAAQABAiAOAUQAPAUAeAAQAdAAARgTQAJgLAEgPIAlAAQgCAMgIAPQgIAPgKAKQgRAQgYAGQgOADgPAAQgpAAgcgegAA+gSQgDgYgIgOQgPgbgjAAQgYAAgRASQgRATgBAcIB4AAIAAAAg");
	this.shape_24.setTransform(146.8,50.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("Ag0BwIAAjaIAiAAIAAAmQAFgMAQgPQARgQAVAAIAEAAIAIABIAAAnIgFgBIgHAAQgcAAgOASQgOASAAAXIAAB9g");
	this.shape_25.setTransform(129.6,50.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgLCBQgJgNAAgVIAAiRIgeAAIAAgeIAeAAIAAg9IAkAAIAAA9IAjAAIAAAeIgjAAIAACPQAAALAIAEQAEACAKAAIAGAAIAHgBIAAAeIgNACIgPABQgZAAgJgNg");
	this.shape_26.setTransform(115.4,47.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AhFBfQgUgXgCghIAkAAQABATAIAKQAOARAjAAQAVABAPgJQAQgJAAgTQAAgOgMgIQgJgEgXgGIgdgHQgdgHgNgIQgZgPAAgaQAAgfAXgUQAXgTAmAAQAyAAAWAdQAOATgBAVIgiAAQgBgMgIgLQgNgOggAAQgVAAgLAIQgLAIAAANQAAAOAPAJQAIAFAQAEIAYAGQApAJANAIQAWAOAAAfQAAAegXAVQgWAVguAAQgxAAgVgWg");
	this.shape_27.setTransform(99.3,50.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AhGBWQgdgeAAg1QAAg0AdghQAcghAtAAQAYAAAWALQAVALAMARQALARADAWQAEAPAAAgIifAAQABAiAOAUQAPAUAeAAQAdAAARgTQAJgLAEgPIAlAAQgCAMgIAPQgIAPgKAKQgRAQgYAGQgOADgPAAQgpAAgcgegAA+gSQgDgYgIgOQgPgbgjAAQgYAAgRASQgRATgBAcIB4AAIAAAAg");
	this.shape_28.setTransform(76.9,50.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgVCXIhuktIAtAAIBWEAIBVkAIAvAAIhvEtg");
	this.shape_29.setTransform(51.7,46.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(2.7,1,1).p("A4omfMAxRAAAQBdAABBBBQBCBCAABcIAAGBQAABchCBCQhBBBhdAAMgxRAAAQhdAAhBhBQhChCAAhcIAAmBQAAhcBChCQBBhBBdAAg");
	this.shape_30.setTransform(186.6,48.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#435385").s().p("A5qHhQhdAAhBhBQhChCAAhcIAAoDQAAhcBChCQBBhBBdAAMAzVAAAQBdAABBBBQBCBCAABcIAAIDQAABchCBCQhBBBhdAAg");
	this.shape_31.setTransform(186.7,48.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,373.4,96.3);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#435385").s().p("AgbDRIgLgBIAAgiQAbgCAFgDQAGgEAAgUIAAkIIAmAAIAAEMQAAAagIANQgNAVgnAAgAAAiiIAAguIAmAAIAAAug");
	this.shape.setTransform(286,48.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#435385").s().p("AhLBdQgfggAAg6QAAg4AfgjQAegkAxABQAZAAAXALQAYAMAMASQALATAEAXQAEARAAAiIiqAAQABAkAPAVQAQAXAgAAQAfgBASgUQALgMAEgQIAnAAQgCANgIAQQgJAQgLAKQgSASgaAGQgOAEgRgBQgsAAgegfgABCgUQgCgZgJgPQgQgdgmAAQgaAAgSAUQgSATgBAeICAAAIAAAAg");
	this.shape_1.setTransform(270.2,48.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#435385").s().p("AgVB2IhXjrIAuAAIA+C/IBCi/IArAAIhZDrg");
	this.shape_2.setTransform(246.6,48.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#435385").s().p("AhKBmQgWgYgBgkIAmAAQACAUAIALQAPATAlAAQAWAAARgKQARgJAAgUQAAgPgNgIQgJgFgagHIgfgHQgegIgPgIQgagQAAgdQAAghAZgVQAYgUApAAQA1AAAYAfQAPAUgBAXIglAAQgBgOgJgLQgNgPgiAAQgXAAgMAIQgLAJAAAOQAAAPAPAJQAJAGASAEIAZAGQAsALAOAIQAXAQAAAgQAAAggYAWQgYAXgxAAQg0AAgXgXg");
	this.shape_3.setTransform(224.2,48.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#435385").s().p("AgTCiIAAlDIAnAAIAAFDg");
	this.shape_4.setTransform(208,44.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#435385").s().p("AhZBpQgVgVAAgdQAAghAUgSQAVgRAhgEIA+gIQAOgCAEgJQADgGAAgKQAAgUgPgJQgOgJgaAAQgfAAgNARQgHAJgCASIglAAQABgsAbgRQAbgQAkgBQApABAZAQQAaAPAAAhIAACHQAAAGADAEQACADAIABIAGAAIAHgBIAAAcIgOAEIgNAAQgUAAgKgOQgEgIgCgOQgMAQgXAMQgWAMgbAAQghgBgUgTgAAbAEIgWAFIgXADQgWADgKAGQgTALAAAWQAAARANAKQAMAKARAAQAVAAATgKQAhgQAAglIAAgeQgIADgLADg");
	this.shape_5.setTransform(190.9,48.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#435385").s().p("AhKCFQgdghAAg3QAAgyAagmQAagmAxAAQAaAAASAMQALAGANARIAAh3IAmAAIAAFDIgkAAIAAghQgOAWgSAJQgTAKgXAAQgoAAgcghgAgrgXQgSAWAAAsQAAAmAQAZQAQAaAiAAQAbAAASgYQARgYAAgsQAAgrgSgWQgSgVgbAAQgcAAgTAXg");
	this.shape_6.setTransform(164.6,44.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#435385").s().p("AhKBmQgWgYgBgkIAmAAQACAUAIALQAPATAlAAQAWAAARgKQARgJAAgUQAAgPgNgIQgJgFgagHIgfgHQgegIgPgIQgagQAAgdQAAghAZgVQAYgUApAAQA1AAAYAfQAPAUgBAXIglAAQgBgOgJgLQgNgPgiAAQgXAAgMAIQgLAJAAAOQAAAPAPAJQAJAGASAEIAZAGQAsALAOAIQAXAQAAAgQAAAggYAWQgYAXgxAAQg0AAgXgXg");
	this.shape_7.setTransform(141.8,48.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#435385").s().p("AgTCiIAAjpIAnAAIAADpgAgTh0IAAgtIAnAAIAAAtg");
	this.shape_8.setTransform(125.5,44.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#435385").s().p("ABOCiIgDgLIgDgaIgCg1QgCgggVgLQgMgGgaAAIhgAAIAACLIgsAAIAAlDICSAAQAkAAAYALQAsAVAAA4QAAAdgLASQgNATgVAKQATAHAKANQAJANABAbIACAsQAAATADAJQAEAPAKAEIAAAIgAhXgNIBhAAQAeAAASgMQARgMAAggQAAgjgYgMQgNgGgWgBIhnAAg");
	this.shape_9.setTransform(105.2,44.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#435385").ss(2.7,1,1).p("A4omfMAxRAAAQBdAABBBBQBCBCAABcIAAGBQAABchCBCQhBBBhdAAMgxRAAAQhdAAhBhBQhChCAAhcIAAmBQAAhcBChCQBBhBBdAAg");
	this.shape_10.setTransform(186.6,48.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("A5qHhQhdAAhBhBQhChCAAhcIAAoDQAAhcBChCQBBhBBdAAMAzVAAAQBdAABBBBQBCBCAABcIAAIDQAABchCBCQhBBBhdAAg");
	this.shape_11.setTransform(186.7,48.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgbDRIgLgBIAAgiQAbgCAFgDQAGgEAAgUIAAkIIAmAAIAAEMQAAAagIANQgNAVgnAAgAAAiiIAAguIAmAAIAAAug");
	this.shape_12.setTransform(286,48.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhLBdQgfggAAg6QAAg4AfgjQAegkAxABQAZAAAXALQAYAMAMASQALATAEAXQAEARAAAiIiqAAQABAkAPAVQAQAXAgAAQAfgBASgUQALgMAEgQIAnAAQgCANgIAQQgJAQgLAKQgSASgaAGQgOAEgRgBQgsAAgegfgABCgUQgCgZgJgPQgQgdgmAAQgaAAgSAUQgSATgBAeICAAAIAAAAg");
	this.shape_13.setTransform(270.2,48.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgVB2IhXjrIAuAAIA+C/IBCi/IArAAIhZDrg");
	this.shape_14.setTransform(246.6,48.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhKBmQgWgYgBgkIAmAAQACAUAIALQAPATAlAAQAWAAARgKQARgJAAgUQAAgPgNgIQgJgFgagHIgfgHQgegIgPgIQgagQAAgdQAAghAZgVQAYgUApAAQA1AAAYAfQAPAUgBAXIglAAQgBgOgJgLQgNgPgiAAQgXAAgMAIQgLAJAAAOQAAAPAPAJQAJAGASAEIAZAGQAsALAOAIQAXAQAAAgQAAAggYAWQgYAXgxAAQg0AAgXgXg");
	this.shape_15.setTransform(224.2,48.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgTCiIAAlDIAnAAIAAFDg");
	this.shape_16.setTransform(208,44.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhZBpQgVgVAAgdQAAghAUgSQAVgRAhgEIA+gIQAOgCAEgJQADgGAAgKQAAgUgPgJQgOgJgaAAQgfAAgNARQgHAJgCASIglAAQABgsAbgRQAbgQAkgBQApABAZAQQAaAPAAAhIAACHQAAAGADAEQACADAIABIAGAAIAHgBIAAAcIgOAEIgNAAQgUAAgKgOQgEgIgCgOQgMAQgXAMQgWAMgbAAQghgBgUgTgAAbAEIgWAFIgXADQgWADgKAGQgTALAAAWQAAARANAKQAMAKARAAQAVAAATgKQAhgQAAglIAAgeQgIADgLADg");
	this.shape_17.setTransform(190.9,48.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AhKCFQgdghAAg3QAAgyAagmQAagmAxAAQAaAAASAMQALAGANARIAAh3IAmAAIAAFDIgkAAIAAghQgOAWgSAJQgTAKgXAAQgoAAgcghgAgrgXQgSAWAAAsQAAAmAQAZQAQAaAiAAQAbAAASgYQARgYAAgsQAAgrgSgWQgSgVgbAAQgcAAgTAXg");
	this.shape_18.setTransform(164.6,44.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhKBmQgWgYgBgkIAmAAQACAUAIALQAPATAlAAQAWAAARgKQARgJAAgUQAAgPgNgIQgJgFgagHIgfgHQgegIgPgIQgagQAAgdQAAghAZgVQAYgUApAAQA1AAAYAfQAPAUgBAXIglAAQgBgOgJgLQgNgPgiAAQgXAAgMAIQgLAJAAAOQAAAPAPAJQAJAGASAEIAZAGQAsALAOAIQAXAQAAAgQAAAggYAWQgYAXgxAAQg0AAgXgXg");
	this.shape_19.setTransform(141.8,48.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgTCiIAAjpIAnAAIAADpgAgTh0IAAgtIAnAAIAAAtg");
	this.shape_20.setTransform(125.5,44.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("ABOCiIgDgLIgDgaIgCg1QgCgggVgLQgMgGgaAAIhgAAIAACLIgsAAIAAlDICSAAQAkAAAYALQAsAVAAA4QAAAdgLASQgNATgVAKQATAHAKANQAJANABAbIACAsQAAATADAJQAEAPAKAEIAAAIgAhXgNIBhAAQAeAAASgMQARgMAAggQAAgjgYgMQgNgGgWgBIhnAAg");
	this.shape_21.setTransform(105.2,44.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(2.7,1,1).p("A4omfMAxRAAAQBdAABBBBQBCBCAABcIAAGBQAABchCBCQhBBBhdAAMgxRAAAQhdAAhBhBQhChCAAhcIAAmBQAAhcBChCQBBhBBdAAg");
	this.shape_22.setTransform(186.6,48.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#435385").s().p("A5qHhQhdAAhBhBQhChCAAhcIAAoDQAAhcBChCQBBhBBdAAMAzVAAAQBdAABBBBQBCBCAABcIAAIDQAABchCBCQhBBBhdAAg");
	this.shape_23.setTransform(186.7,48.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,373.4,96.3);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#435385").s().p("AgbDRIgLgBIAAgiQAbgCAGgDQAFgEAAgUIAAkIIAnAAIAAEMQAAAZgJANQgOAWgmAAgAAAiiIAAguIAnAAIAAAug");
	this.shape.setTransform(298.9,50.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#435385").s().p("AhLBdQgfghAAg5QAAg4AfgjQAegkAxABQAZAAAXAMQAYALAMASQALATAEAXQAEARAAAiIiqAAQABAkAPAVQAQAXAggBQAfAAASgUQALgMAEgQIAnAAQgCANgIAQQgJAQgLAKQgSASgaAGQgOAEgRgBQgsAAgegfgABCgUQgCgZgJgPQgQgdgmAAQgaAAgSAUQgSATgBAeICAAAIAAAAg");
	this.shape_1.setTransform(283.1,50.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#435385").s().p("AgVB2IhXjrIAuAAIA+C/IBCi/IArAAIhZDrg");
	this.shape_2.setTransform(259.5,50.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#435385").s().p("AhKBmQgWgYgBgkIAmAAQACAUAIALQAPATAlAAQAWAAARgKQARgJAAgUQAAgPgNgIQgJgFgagHIgfgHQgegIgPgIQgagQAAgdQAAghAZgVQAYgUApAAQA1AAAYAfQAPAUgBAXIglAAQgBgOgJgLQgNgPgiAAQgXAAgMAIQgLAJAAAOQAAAPAPAJQAJAGASAEIAZAGQAsALAOAIQAXAQAAAgQAAAggYAWQgYAXgxAAQg0AAgXgXg");
	this.shape_3.setTransform(237.2,50.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#435385").s().p("AhKCFQgdghAAg3QAAgyAagmQAagmAxAAQAaAAASAMQALAGANARIAAh3IAmAAIAAFDIgkAAIAAghQgOAWgSAJQgTAKgXAAQgoAAgcghgAgrgXQgSAWAAAsQAAAmAQAZQAQAaAiAAQAbAAASgYQARgYAAgsQAAgrgSgWQgSgVgbAAQgcAAgTAXg");
	this.shape_4.setTransform(212.5,46.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#435385").s().p("AhZBoQgVgTAAgeQAAghAUgSQAVgRAhgEIA+gIQAOgCAEgJQADgGAAgKQAAgUgPgJQgOgJgaAAQgfAAgNARQgHAJgCASIglAAQABgsAbgQQAbgRAkgBQApABAZAQQAaAPAAAhIAACHQAAAGADAEQACADAIABIAGAAIAHgBIAAAdIgOADIgNAAQgUAAgKgOQgEgHgCgPQgMAQgXAMQgWAMgbAAQghAAgUgVgAAbAEIgWAFIgXADQgWADgKAGQgTAKAAAXQAAARANAKQAMAKARAAQAVAAATgKQAhgQAAglIAAgeQgIADgLADg");
	this.shape_5.setTransform(188.8,50.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#435385").s().p("Ag4B4IAAjqIAlAAIAAApQAFgMARgRQASgRAYAAIADAAIAJABIAAApIgGAAIgHgBQgeAAgPAUQgQATAAAZIAACGg");
	this.shape_6.setTransform(169.7,49.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#435385").s().p("AA3B4IAAiTQAAgWgGgNQgKgWgcAAQgNAAgJADQgRAFgMAOQgJAMgEANQgCAMAAAXIAAB6IgoAAIAAjqIAlAAIAAAhQASgUASgJQASgJAXAAQAyAAARAjQAKATAAAjIAACWg");
	this.shape_7.setTransform(148.5,49.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#435385").s().p("AhPBcQgdghAAg3QAAg6AegjQAegjAxAAQAuAAAfAeQAfAeAAA7QAAA4gcAlQgbAlg5AAQgwAAgcghgAgzg+QgQAbAAAmQAAAmAQAZQAQAZAjAAQAnAAAOgeQAPgeAAgjQAAghgLgUQgQghgpAAQgjAAgQAcg");
	this.shape_8.setTransform(123.1,50.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#435385").s().p("ABxCiIAAi+IABghIAAgwIhcEPIgqAAIhekPIAAAJIABAlIABAjIAAC+IgqAAIAAlCIA/AAIBbEPIBdkPIA+AAIAAFCg");
	this.shape_9.setTransform(92.3,45.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#435385").ss(2.7,1,1).p("A4omfMAxRAAAQBdAABBBBQBCBCAABcIAAGBQAABchCBCQhBBBhdAAMgxRAAAQhdAAhBhBQhChCAAhcIAAmBQAAhcBChCQBBhBBdAAg");
	this.shape_10.setTransform(186.6,48.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("A5qHhQhdAAhBhBQhChCAAhcIAAoDQAAhcBChCQBBhBBdAAMAzVAAAQBdAABBBBQBCBCAABcIAAIDQAABchCBCQhBBBhdAAg");
	this.shape_11.setTransform(186.7,48.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgbDRIgLgBIAAgiQAbgCAGgDQAFgEAAgUIAAkIIAnAAIAAEMQAAAZgJANQgOAWgmAAgAAAiiIAAguIAnAAIAAAug");
	this.shape_12.setTransform(298.9,50.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhLBdQgfghAAg5QAAg4AfgjQAegkAxABQAZAAAXAMQAYALAMASQALATAEAXQAEARAAAiIiqAAQABAkAPAVQAQAXAggBQAfAAASgUQALgMAEgQIAnAAQgCANgIAQQgJAQgLAKQgSASgaAGQgOAEgRgBQgsAAgegfgABCgUQgCgZgJgPQgQgdgmAAQgaAAgSAUQgSATgBAeICAAAIAAAAg");
	this.shape_13.setTransform(283.1,50.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgVB2IhXjrIAuAAIA+C/IBCi/IArAAIhZDrg");
	this.shape_14.setTransform(259.5,50.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhKBmQgWgYgBgkIAmAAQACAUAIALQAPATAlAAQAWAAARgKQARgJAAgUQAAgPgNgIQgJgFgagHIgfgHQgegIgPgIQgagQAAgdQAAghAZgVQAYgUApAAQA1AAAYAfQAPAUgBAXIglAAQgBgOgJgLQgNgPgiAAQgXAAgMAIQgLAJAAAOQAAAPAPAJQAJAGASAEIAZAGQAsALAOAIQAXAQAAAgQAAAggYAWQgYAXgxAAQg0AAgXgXg");
	this.shape_15.setTransform(237.2,50.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhKCFQgdghAAg3QAAgyAagmQAagmAxAAQAaAAASAMQALAGANARIAAh3IAmAAIAAFDIgkAAIAAghQgOAWgSAJQgTAKgXAAQgoAAgcghgAgrgXQgSAWAAAsQAAAmAQAZQAQAaAiAAQAbAAASgYQARgYAAgsQAAgrgSgWQgSgVgbAAQgcAAgTAXg");
	this.shape_16.setTransform(212.5,46.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhZBoQgVgTAAgeQAAghAUgSQAVgRAhgEIA+gIQAOgCAEgJQADgGAAgKQAAgUgPgJQgOgJgaAAQgfAAgNARQgHAJgCASIglAAQABgsAbgQQAbgRAkgBQApABAZAQQAaAPAAAhIAACHQAAAGADAEQACADAIABIAGAAIAHgBIAAAdIgOADIgNAAQgUAAgKgOQgEgHgCgPQgMAQgXAMQgWAMgbAAQghAAgUgVgAAbAEIgWAFIgXADQgWADgKAGQgTAKAAAXQAAARANAKQAMAKARAAQAVAAATgKQAhgQAAglIAAgeQgIADgLADg");
	this.shape_17.setTransform(188.8,50.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ag4B4IAAjqIAlAAIAAApQAFgMARgRQASgRAYAAIADAAIAJABIAAApIgGAAIgHgBQgeAAgPAUQgQATAAAZIAACGg");
	this.shape_18.setTransform(169.7,49.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AA3B4IAAiTQAAgWgGgNQgKgWgcAAQgNAAgJADQgRAFgMAOQgJAMgEANQgCAMAAAXIAAB6IgoAAIAAjqIAlAAIAAAhQASgUASgJQASgJAXAAQAyAAARAjQAKATAAAjIAACWg");
	this.shape_19.setTransform(148.5,49.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhPBcQgdghAAg3QAAg6AegjQAegjAxAAQAuAAAfAeQAfAeAAA7QAAA4gcAlQgbAlg5AAQgwAAgcghgAgzg+QgQAbAAAmQAAAmAQAZQAQAZAjAAQAnAAAOgeQAPgeAAgjQAAghgLgUQgQghgpAAQgjAAgQAcg");
	this.shape_20.setTransform(123.1,50.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("ABxCiIAAi+IABghIAAgwIhcEPIgqAAIhekPIAAAJIABAlIABAjIAAC+IgqAAIAAlCIA/AAIBbEPIBdkPIA+AAIAAFCg");
	this.shape_21.setTransform(92.3,45.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(2.7,1,1).p("A4omfMAxRAAAQBdAABBBBQBCBCAABcIAAGBQAABchCBCQhBBBhdAAMgxRAAAQhdAAhBhBQhChCAAhcIAAmBQAAhcBChCQBBhBBdAAg");
	this.shape_22.setTransform(186.6,48.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#435385").s().p("A5qHhQhdAAhBhBQhChCAAhcIAAoDQAAhcBChCQBBhBBdAAMAzVAAAQBdAABBBBQBCBCAABcIAAIDQAABchCBCQhBBBhdAAg");
	this.shape_23.setTransform(186.7,48.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,373.4,96.3);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#435385").s().p("AgpDTIgRgCIAAglIADAAIALACIALABQARAAAKgEQAKgEAFgJQAFgIABgMIACgeIAAjIIgrAAIAAgiIBUAAIAAD7QABAqgXAWQgWAWgnAAgAALinIAAgrIAvAAIAAArg");
	this.shape.setTransform(325.6,50.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#435385").s().p("AhJBgQggghAAg9QAAg7AfgjQAggkAxAAQAYAAARAHQARAGAOAOQANAOAHAVQAHAUAAAdIAAAWIipAAQAAArAWAWQAVAXAlAAQAOAAANgDIAYgIIASgKIANgJIADAAIAAAtIgSAIIgUAGIgWAFIgZACQg5AAghghgABCgaQgBgRgDgMQgEgMgGgIQgIgJgLgFQgLgFgRAAQgQAAgLAFQgLAFgKAJQgJAKgFAMQgEAMgCAPICBAAIAAAAg");
	this.shape_1.setTransform(309,49.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#435385").s().p("AgSB7Ihcj1IAtAAIBCC9IBCi9IAsAAIhdD1g");
	this.shape_2.setTransform(284.9,50);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#435385").s().p("Ag0B6QgWgHgOgHIAAguIADAAIAMAJIATAKIAXAJQANAEAOAAIAUgCQALgDAFgDQAIgFADgGQADgGAAgLQAAgPgIgHQgIgIgUgFIgUgFIgXgFQgcgIgNgQQgNgSAAgYQAAghAZgVQAZgVApAAQAVAAAUAFQAUAFAPAIIAAAsIgCAAQgRgMgSgHQgUgIgUAAQgUAAgNAJQgOAIgBASQAAAPAJAIQAIAHASAFIAUAFIAYAFQAbAHAOAPQAOAQAAAbQAAAQgHAOQgGAOgMAKQgNALgRAGQgQAGgZAAQgYAAgVgHg");
	this.shape_3.setTransform(263,50);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#435385").s().p("AgvCsIAAjSIgcAAIAAgiIAcAAIAAgJQAAgsAVgXQAVgXAnAAIAWABIAUADIAAAmIgCAAIgQgEIgSgCQgaAAgLAMQgKAMAAAeIAAAJIBDAAIAAAiIhCAAIAADSg");
	this.shape_4.setTransform(245.6,45.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#435385").s().p("AgvCsIAAjSIgcAAIAAgiIAcAAIAAgJQAAgsAVgXQAVgXAnAAIAWABIAUADIAAAmIgCAAIgQgEIgSgCQgaAAgLAMQgKAMAAAeIAAAJIBDAAIAAAiIhCAAIAADSg");
	this.shape_5.setTransform(230.3,45.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#435385").s().p("AhAB7IAAj1IApAAIAAAlQAXgUAPgIQASgJAPAAIAKABIAHABIAAArIgCAAIgKgCIgNAAQgQAAgRAHQgPAHgPAPIAACtg");
	this.shape_6.setTransform(214.3,50);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#435385").s().p("AhPBfQgegkAAg7QAAg8AfgjQAeghAwAAQAyAAAeAhQAeAiAAA9QAAA+geAiQgeAhgyAAQgyAAgdgigAgxhGQgRAXAAAvQAAAuARAYQASAXAfAAQAgABASgXQARgYAAgvQAAgvgRgXQgSgXggAAQgfAAgSAXg");
	this.shape_7.setTransform(191.6,50);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#435385").s().p("AgZCNQgTgTAAgqIAAiHIgcAAIAAgiIAcAAIAAhGIAqAAIAABGIBLAAIAAAiIhLAAIAAB0IAAAdQABAKADAIQAEAIAIAFQAJADAOAAQAKAAAKgDIANgFIADAAIAAAlIgYAFIgWACQghAAgTgTg");
	this.shape_8.setTransform(171.1,46.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#435385").s().p("Ag0B6QgVgHgPgHIAAguIACAAIANAJIATAKIAXAJQAMAEAOAAIAUgCQALgDAGgDQAIgFADgGQAEgGAAgLQgBgPgHgHQgJgIgUgFIgUgFIgXgFQgcgIgNgQQgMgSAAgYQAAghAZgVQAYgVApAAQAVAAAUAFQAVAFAOAIIAAAsIgDAAQgPgMgUgHQgTgIgUAAQgTAAgPAJQgNAIAAASQgBAPAJAIQAIAHASAFIAVAFIAXAFQAbAHAOAPQAOAQAAAbQAAAQgGAOQgHAOgMAKQgNALgRAGQgQAGgYAAQgZAAgVgHg");
	this.shape_9.setTransform(152.7,50);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#435385").s().p("AA3B+IAAiKIgBggQgCgPgFgIQgFgKgJgFQgJgEgPAAQgPAAgQAIQgRAJgPANIAAC2IgqAAIAAj0IAqAAIAAAbQASgQASgKQASgIATAAQAkAAAVAYQAUAYAAAsIAACfg");
	this.shape_10.setTransform(128.9,49.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#435385").s().p("AhAB7IAAj1IApAAIAAAlQAXgUAPgIQASgJAQAAIAJABIAHABIAAArIgCAAIgKgCIgNAAQgQAAgRAHQgPAHgPAPIAACtg");
	this.shape_11.setTransform(108.6,50);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#435385").s().p("AhJBgQggghAAg9QAAg7AfgjQAggkAxAAQAYAAARAHQASAGANAOQANAOAHAVQAHAUAAAdIAAAWIipAAQAAArAWAWQAVAXAlAAQAOAAANgDIAYgIIASgKIANgJIADAAIAAAtIgSAIIgUAGIgWAFIgZACQg5AAghghgABCgaQgBgRgDgMQgDgMgIgIQgGgJgMgFQgLgFgRAAQgQAAgLAFQgMAFgJAJQgJAKgFAMQgEAMgCAPICBAAIAAAAg");
	this.shape_12.setTransform(86.3,49.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#435385").s().p("AhuCkIAAlHIBXAAQAiAAASADQARACAQAJQASAJAHAQQAJAOgBAVQABAXgMASQgNASgVALIAAACQAdAIAQAUQAQAVAAAfQAAAYgJATQgJATgQAMQgTAPgUAFQgVAGghABgAhDB/IAkAAQAcgBAQgDQARgCAMgJQAMgIAGgLQAGgLAAgRQAAgSgGgNQgFgMgQgIQgKgGgMgBIgigCIgyAAgAhDgeIAyAAQAUAAAJgBQAKgDAKgGQAKgHAFgKQADgLAAgPQAAgMgDgIQgFgJgIgFQgLgGgNgBIgigCIgrAAg");
	this.shape_13.setTransform(61.3,45.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#435385").ss(2.7,1,1).p("A4omfMAxRAAAQBdAABBBBQBCBCAABcIAAGBQAABchCBCQhBBBhdAAMgxRAAAQhdAAhBhBQhChCAAhcIAAmBQAAhcBChCQBBhBBdAAg");
	this.shape_14.setTransform(186.6,48.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("A5qHhQhdAAhBhBQhChCAAhcIAAoDQAAhcBChCQBBhBBdAAMAzVAAAQBdAABBBBQBCBCAABcIAAIDQAABchCBCQhBBBhdAAg");
	this.shape_15.setTransform(186.7,48.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgpDTIgRgCIAAglIADAAIALACIALABQARAAAKgEQAKgEAFgJQAFgIABgMIACgeIAAjIIgrAAIAAgiIBUAAIAAD7QABAqgXAWQgWAWgnAAgAALinIAAgrIAvAAIAAArg");
	this.shape_16.setTransform(325.6,50.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhJBgQggghAAg9QAAg7AfgjQAggkAxAAQAYAAARAHQARAGAOAOQANAOAHAVQAHAUAAAdIAAAWIipAAQAAArAWAWQAVAXAlAAQAOAAANgDIAYgIIASgKIANgJIADAAIAAAtIgSAIIgUAGIgWAFIgZACQg5AAghghgABCgaQgBgRgDgMQgEgMgGgIQgIgJgLgFQgLgFgRAAQgQAAgLAFQgLAFgKAJQgJAKgFAMQgEAMgCAPICBAAIAAAAg");
	this.shape_17.setTransform(309,49.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgSB7Ihcj1IAtAAIBCC9IBCi9IAsAAIhdD1g");
	this.shape_18.setTransform(284.9,50);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ag0B6QgWgHgOgHIAAguIADAAIAMAJIATAKIAXAJQANAEAOAAIAUgCQALgDAFgDQAIgFADgGQADgGAAgLQAAgPgIgHQgIgIgUgFIgUgFIgXgFQgcgIgNgQQgNgSAAgYQAAghAZgVQAZgVApAAQAVAAAUAFQAUAFAPAIIAAAsIgCAAQgRgMgSgHQgUgIgUAAQgUAAgNAJQgOAIgBASQAAAPAJAIQAIAHASAFIAUAFIAYAFQAbAHAOAPQAOAQAAAbQAAAQgHAOQgGAOgMAKQgNALgRAGQgQAGgZAAQgYAAgVgHg");
	this.shape_19.setTransform(263,50);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgvCsIAAjSIgcAAIAAgiIAcAAIAAgJQAAgsAVgXQAVgXAnAAIAWABIAUADIAAAmIgCAAIgQgEIgSgCQgaAAgLAMQgKAMAAAeIAAAJIBDAAIAAAiIhCAAIAADSg");
	this.shape_20.setTransform(245.6,45.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgvCsIAAjSIgcAAIAAgiIAcAAIAAgJQAAgsAVgXQAVgXAnAAIAWABIAUADIAAAmIgCAAIgQgEIgSgCQgaAAgLAMQgKAMAAAeIAAAJIBDAAIAAAiIhCAAIAADSg");
	this.shape_21.setTransform(230.3,45.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhAB7IAAj1IApAAIAAAlQAXgUAPgIQASgJAPAAIAKABIAHABIAAArIgCAAIgKgCIgNAAQgQAAgRAHQgPAHgPAPIAACtg");
	this.shape_22.setTransform(214.3,50);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AhPBfQgegkAAg7QAAg8AfgjQAeghAwAAQAyAAAeAhQAeAiAAA9QAAA+geAiQgeAhgyAAQgyAAgdgigAgxhGQgRAXAAAvQAAAuARAYQASAXAfAAQAgABASgXQARgYAAgvQAAgvgRgXQgSgXggAAQgfAAgSAXg");
	this.shape_23.setTransform(191.6,50);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgZCNQgTgTAAgqIAAiHIgcAAIAAgiIAcAAIAAhGIAqAAIAABGIBLAAIAAAiIhLAAIAAB0IAAAdQABAKADAIQAEAIAIAFQAJADAOAAQAKAAAKgDIANgFIADAAIAAAlIgYAFIgWACQghAAgTgTg");
	this.shape_24.setTransform(171.1,46.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("Ag0B6QgVgHgPgHIAAguIACAAIANAJIATAKIAXAJQAMAEAOAAIAUgCQALgDAGgDQAIgFADgGQAEgGAAgLQgBgPgHgHQgJgIgUgFIgUgFIgXgFQgcgIgNgQQgMgSAAgYQAAghAZgVQAYgVApAAQAVAAAUAFQAVAFAOAIIAAAsIgDAAQgPgMgUgHQgTgIgUAAQgTAAgPAJQgNAIAAASQgBAPAJAIQAIAHASAFIAVAFIAXAFQAbAHAOAPQAOAQAAAbQAAAQgGAOQgHAOgMAKQgNALgRAGQgQAGgYAAQgZAAgVgHg");
	this.shape_25.setTransform(152.7,50);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AA3B+IAAiKIgBggQgCgPgFgIQgFgKgJgFQgJgEgPAAQgPAAgQAIQgRAJgPANIAAC2IgqAAIAAj0IAqAAIAAAbQASgQASgKQASgIATAAQAkAAAVAYQAUAYAAAsIAACfg");
	this.shape_26.setTransform(128.9,49.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AhAB7IAAj1IApAAIAAAlQAXgUAPgIQASgJAQAAIAJABIAHABIAAArIgCAAIgKgCIgNAAQgQAAgRAHQgPAHgPAPIAACtg");
	this.shape_27.setTransform(108.6,50);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AhJBgQggghAAg9QAAg7AfgjQAggkAxAAQAYAAARAHQASAGANAOQANAOAHAVQAHAUAAAdIAAAWIipAAQAAArAWAWQAVAXAlAAQAOAAANgDIAYgIIASgKIANgJIADAAIAAAtIgSAIIgUAGIgWAFIgZACQg5AAghghgABCgaQgBgRgDgMQgDgMgIgIQgGgJgMgFQgLgFgRAAQgQAAgLAFQgMAFgJAJQgJAKgFAMQgEAMgCAPICBAAIAAAAg");
	this.shape_28.setTransform(86.3,49.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AhuCkIAAlHIBXAAQAiAAASADQARACAQAJQASAJAHAQQAJAOgBAVQABAXgMASQgNASgVALIAAACQAdAIAQAUQAQAVAAAfQAAAYgJATQgJATgQAMQgTAPgUAFQgVAGghABgAhDB/IAkAAQAcgBAQgDQARgCAMgJQAMgIAGgLQAGgLAAgRQAAgSgGgNQgFgMgQgIQgKgGgMgBIgigCIgyAAgAhDgeIAyAAQAUAAAJgBQAKgDAKgGQAKgHAFgKQADgLAAgPQAAgMgDgIQgFgJgIgFQgLgGgNgBIgigCIgrAAg");
	this.shape_29.setTransform(61.3,45.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(2.7,1,1).p("A4omfMAxRAAAQBdAABBBBQBCBCAABcIAAGBQAABchCBCQhBBBhdAAMgxRAAAQhdAAhBhBQhChCAAhcIAAmBQAAhcBChCQBBhBBdAAg");
	this.shape_30.setTransform(186.6,48.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#435385").s().p("A5qHhQhdAAhBhBQhChCAAhcIAAoDQAAhcBChCQBBhBBdAAMAzVAAAQBdAABBBBQBCBCAABcIAAIDQAABchCBCQhBBBhdAAg");
	this.shape_31.setTransform(186.7,48.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,373.4,96.3);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#435385").s().p("AgoDTIgRgCIAAglIACAAIALACIALABQAQAAALgEQAJgEAGgJQAFgIABgMIACgeIAAjIIgsAAIAAgiIBWAAIAAD7QAAAqgXAWQgXAWgmAAgAAMinIAAgrIAvAAIAAArg");
	this.shape.setTransform(302.3,51.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#435385").s().p("AhIBgQghghAAg9QAAg7AggjQAfgkAyAAQAWAAASAHQARAGAOAOQANAOAHAVQAHAUAAAdIAAAWIipAAQAAArAVAWQAWAXAlAAQANAAAOgDIAXgIIATgKIANgJIACAAIAAAtIgSAIIgTAGIgVAFIgZACQg6AAggghgABCgaQgBgRgDgMQgEgMgGgIQgIgJgKgFQgMgFgRAAQgPAAgMAFQgMAFgJAJQgJAKgFAMQgEAMgCAPICBAAIAAAAg");
	this.shape_1.setTransform(284.7,50.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#435385").s().p("AgSB7Ihcj1IAtAAIBCC9IBCi9IAsAAIhdD1g");
	this.shape_2.setTransform(259.6,50.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#435385").s().p("Ag0B6QgVgHgPgHIAAguIADAAIAMAJIATAKIAXAJQAMAEAPAAIATgCQALgDAGgDQAIgFADgGQAEgGAAgLQgBgPgHgHQgIgIgVgFIgUgFIgXgFQgcgIgNgQQgMgSAAgYQAAghAZgVQAYgVApAAQAUAAAVAFQAVAFAOAIIAAAsIgDAAQgPgMgUgHQgTgIgUAAQgTAAgOAJQgPAIAAASQAAAPAJAIQAIAHASAFIAVAFIAXAFQAbAHAOAPQAOAQAAAbQAAAQgGAOQgHAOgMAKQgNALgRAGQgQAGgYAAQgZAAgVgHg");
	this.shape_3.setTransform(236.7,50.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#435385").s().p("AhIBgQghghAAg9QAAg7AfgjQAggkAyAAQAWAAASAHQARAGAOAOQANAOAHAVQAHAUAAAdIAAAWIipAAQAAArAVAWQAWAXAlAAQANAAAOgDIAXgIIATgKIANgJIADAAIAAAtIgTAIIgTAGIgWAFIgYACQg6AAggghgABCgaQAAgRgEgMQgDgMgIgIQgGgJgMgFQgLgFgRAAQgPAAgMAFQgLAFgKAJQgJAKgFAMQgFAMgBAPICBAAIAAAAg");
	this.shape_4.setTransform(212.6,50.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#435385").s().p("AhmCrIAAlPIApAAIAAAaQAPgOAUgJQASgJAVAAQArAAAYAhQAXAhAAA5QAAA8geAkQgdAlgsAAQgSAAgOgFQgOgEgPgJIAABngAgdh7QgRAHgPANIAACKQARAIALADQAMACAOAAQAfAAATgXQARgYAAgsQAAgqgOgXQgNgXgeAAQgRAAgPAIg");
	this.shape_5.setTransform(187.2,54.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#435385").s().p("AB3B+IAAiNQgBgRgBgOQgBgOgEgJQgEgIgJgFQgIgEgOAAQgMAAgPAIQgPAIgPAOIABAJIAAANIAACgIgpAAIAAiNIgBgfQgBgOgEgJQgFgIgIgFQgJgEgNAAQgOAAgOAJQgPAIgOAMIAAC3IgpAAIAAj1IApAAIAAAcQARgQAPgJQAQgJAUAAQAVAAARAKQAQAJAIAXQATgVASgKQASgLAUAAQARAAANAFQANAEAJAMQAKALAGARQAFAQAAAaIAACgg");
	this.shape_6.setTransform(153.1,50.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#435385").s().p("AgzB7QgNgFgLgLQgKgKgGgPQgGgOAAgRQAAgZALgSQALgRAXgLQAVgJAcgEIA8gFIAAgIQAAgPgFgIQgEgJgIgFQgIgFgLgCIgXgCQgOAAgTAFQgUAEgTAIIgDAAIAAgqIAhgHQAWgEAUAAQAZAAARAEQARAEAOAKQAOAKAGAQQAHAQAAAXIAACnIgpAAIAAgaIgOALIgQAKIgVAJQgKADgSAAQgPAAgOgGgAAUgCQgWACgOAEQgQAFgLAKQgLALAAASQAAAWAMAKQAMALAXAAQASAAAQgIQAQgJAOgMIAAhDg");
	this.shape_7.setTransform(119.5,50.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#435385").s().p("AgZCNQgTgTAAgpIAAiHIgcAAIAAgjIAcAAIAAhGIAqAAIAABGIBLAAIAAAjIhLAAIAABzIAAAdQABAKADAJQAEAHAIAEQAJAEAOAAQAKAAAKgDIANgFIADAAIAAAmIgYAEIgWADQghgBgTgTg");
	this.shape_8.setTransform(99.2,47.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#435385").s().p("Ag/CiQgZgHgWgLIAAg2IADAAQAVATAcAMQAbALAZAAQAjAAATgPQASgPAAgZQAAgUgKgLQgJgNgVgGIgbgHIgggIQgQgFgOgGQgNgGgLgLQgKgKgFgPQgGgPAAgTQAAgoAfgbQAfgaAvgBQAcABAYAFQAZAGAVAJIAAA0IgEAAQgPgOgZgLQgYgKgbAAQgdAAgTAPQgTANAAAYQAAAUALANQALAMAVAGIAhAIIAhAIQAiALAQAUQAPAVAAAfQAAASgHATQgIATgOANQgQAOgUAIQgUAHgdABQgjAAgZgIg");
	this.shape_9.setTransform(77.2,46.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#435385").ss(2.7,1,1).p("A4omfMAxRAAAQBdAABBBBQBCBCAABcIAAGBQAABchCBCQhBBBhdAAMgxRAAAQhdAAhBhBQhChCAAhcIAAmBQAAhcBChCQBBhBBdAAg");
	this.shape_10.setTransform(186.6,48.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("A5qHhQhdAAhBhBQhChCAAhcIAAoDQAAhcBChCQBBhBBdAAMAzVAAAQBdAABBBBQBCBCAABcIAAIDQAABchCBCQhBBBhdAAg");
	this.shape_11.setTransform(186.7,48.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgoDTIgRgCIAAglIACAAIALACIALABQAQAAALgEQAJgEAGgJQAFgIABgMIACgeIAAjIIgsAAIAAgiIBWAAIAAD7QAAAqgXAWQgXAWgmAAgAAMinIAAgrIAvAAIAAArg");
	this.shape_12.setTransform(302.3,51.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhIBgQghghAAg9QAAg7AggjQAfgkAyAAQAWAAASAHQARAGAOAOQANAOAHAVQAHAUAAAdIAAAWIipAAQAAArAVAWQAWAXAlAAQANAAAOgDIAXgIIATgKIANgJIACAAIAAAtIgSAIIgTAGIgVAFIgZACQg6AAggghgABCgaQgBgRgDgMQgEgMgGgIQgIgJgKgFQgMgFgRAAQgPAAgMAFQgMAFgJAJQgJAKgFAMQgEAMgCAPICBAAIAAAAg");
	this.shape_13.setTransform(284.7,50.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgSB7Ihcj1IAtAAIBCC9IBCi9IAsAAIhdD1g");
	this.shape_14.setTransform(259.6,50.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag0B6QgVgHgPgHIAAguIADAAIAMAJIATAKIAXAJQAMAEAPAAIATgCQALgDAGgDQAIgFADgGQAEgGAAgLQgBgPgHgHQgIgIgVgFIgUgFIgXgFQgcgIgNgQQgMgSAAgYQAAghAZgVQAYgVApAAQAUAAAVAFQAVAFAOAIIAAAsIgDAAQgPgMgUgHQgTgIgUAAQgTAAgOAJQgPAIAAASQAAAPAJAIQAIAHASAFIAVAFIAXAFQAbAHAOAPQAOAQAAAbQAAAQgGAOQgHAOgMAKQgNALgRAGQgQAGgYAAQgZAAgVgHg");
	this.shape_15.setTransform(236.7,50.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhIBgQghghAAg9QAAg7AfgjQAggkAyAAQAWAAASAHQARAGAOAOQANAOAHAVQAHAUAAAdIAAAWIipAAQAAArAVAWQAWAXAlAAQANAAAOgDIAXgIIATgKIANgJIADAAIAAAtIgTAIIgTAGIgWAFIgYACQg6AAggghgABCgaQAAgRgEgMQgDgMgIgIQgGgJgMgFQgLgFgRAAQgPAAgMAFQgLAFgKAJQgJAKgFAMQgFAMgBAPICBAAIAAAAg");
	this.shape_16.setTransform(212.6,50.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhmCrIAAlPIApAAIAAAaQAPgOAUgJQASgJAVAAQArAAAYAhQAXAhAAA5QAAA8geAkQgdAlgsAAQgSAAgOgFQgOgEgPgJIAABngAgdh7QgRAHgPANIAACKQARAIALADQAMACAOAAQAfAAATgXQARgYAAgsQAAgqgOgXQgNgXgeAAQgRAAgPAIg");
	this.shape_17.setTransform(187.2,54.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AB3B+IAAiNQgBgRgBgOQgBgOgEgJQgEgIgJgFQgIgEgOAAQgMAAgPAIQgPAIgPAOIABAJIAAANIAACgIgpAAIAAiNIgBgfQgBgOgEgJQgFgIgIgFQgJgEgNAAQgOAAgOAJQgPAIgOAMIAAC3IgpAAIAAj1IApAAIAAAcQARgQAPgJQAQgJAUAAQAVAAARAKQAQAJAIAXQATgVASgKQASgLAUAAQARAAANAFQANAEAJAMQAKALAGARQAFAQAAAaIAACgg");
	this.shape_18.setTransform(153.1,50.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgzB7QgNgFgLgLQgKgKgGgPQgGgOAAgRQAAgZALgSQALgRAXgLQAVgJAcgEIA8gFIAAgIQAAgPgFgIQgEgJgIgFQgIgFgLgCIgXgCQgOAAgTAFQgUAEgTAIIgDAAIAAgqIAhgHQAWgEAUAAQAZAAARAEQARAEAOAKQAOAKAGAQQAHAQAAAXIAACnIgpAAIAAgaIgOALIgQAKIgVAJQgKADgSAAQgPAAgOgGgAAUgCQgWACgOAEQgQAFgLAKQgLALAAASQAAAWAMAKQAMALAXAAQASAAAQgIQAQgJAOgMIAAhDg");
	this.shape_19.setTransform(119.5,50.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgZCNQgTgTAAgpIAAiHIgcAAIAAgjIAcAAIAAhGIAqAAIAABGIBLAAIAAAjIhLAAIAABzIAAAdQABAKADAJQAEAHAIAEQAJAEAOAAQAKAAAKgDIANgFIADAAIAAAmIgYAEIgWADQghgBgTgTg");
	this.shape_20.setTransform(99.2,47.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("Ag/CiQgZgHgWgLIAAg2IADAAQAVATAcAMQAbALAZAAQAjAAATgPQASgPAAgZQAAgUgKgLQgJgNgVgGIgbgHIgggIQgQgFgOgGQgNgGgLgLQgKgKgFgPQgGgPAAgTQAAgoAfgbQAfgaAvgBQAcABAYAFQAZAGAVAJIAAA0IgEAAQgPgOgZgLQgYgKgbAAQgdAAgTAPQgTANAAAYQAAAUALANQALAMAVAGIAhAIIAhAIQAiALAQAUQAPAVAAAfQAAASgHATQgIATgOANQgQAOgUAIQgUAHgdABQgjAAgZgIg");
	this.shape_21.setTransform(77.2,46.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(2.7,1,1).p("A4omfMAxRAAAQBdAABBBBQBCBCAABcIAAGBQAABchCBCQhBBBhdAAMgxRAAAQhdAAhBhBQhChCAAhcIAAmBQAAhcBChCQBBhBBdAAg");
	this.shape_22.setTransform(186.6,48.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#435385").s().p("A5qHhQhdAAhBhBQhChCAAhcIAAoDQAAhcBChCQBBhBBdAAMAzVAAAQBdAABBBBQBCBCAABcIAAIDQAABchCBCQhBBBhdAAg");
	this.shape_23.setTransform(186.7,48.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,373.4,96.3);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#254245").s().p("ArHFZIihqxIbRAAIAAKxg");
	this.shape.setTransform(76.7,34.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-10.6,0,174.7,69), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3lGGIAAsLMAvLAAAIAAMLg");
	this.shape.setTransform(151,39);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,302,78), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#254245").s().p("AANAYIgFgPIgRAAIgGAPIgIAAIASgvIAIAAIAVAvgAgDgJIgFANIAPAAIgHgWg");
	this.shape.setTransform(127.7,37);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#254245").s().p("AgOAYIAAgvIAbAAIAAAFIgUAAIAAAPIATAAIAAAFIgTAAIAAARIAWAAIAAAFg");
	this.shape_1.setTransform(121.9,37);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#254245").s().p("AgUAYIAAgvIAOgBQANAAAHAGQAIAGAAAMQAAALgIAHQgIAHgOAAgAgOgSIAAAlIAHABQAVAAABgUQgBgTgUAAIgIABg");
	this.shape_2.setTransform(115.8,37);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#254245").s().p("AAKAZIgDgMQgCgKgIAAIgGAAIAAAWIgHAAIAAgvQAFgBAIgBQAJAAAFAFQAFAEAAAFQAAAJgKACIAAAAQAFACACAIIAEAOgAgJgSIAAASIAHAAQALAAAAgJQAAgKgMABg");
	this.shape_3.setTransform(109.5,37);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#254245").s().p("AgQASQgHgHAAgKQAAgLAHgHQAHgHAJAAQALAAAHAHQAGAHAAAKQAAALgHAHQgGAHgLAAQgJAAgHgHgAgLgNQgFAGAAAIQABAIAEAFQAEAGAHAAQAIAAAEgGQAFgFAAgJQAAgHgEgGQgFgFgIAAQgHAAgEAFg");
	this.shape_4.setTransform(103,37);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#254245").s().p("AANAYIgQgYIgJgQIgBABIABAnIgHAAIAAgvIAIAAIAQAXQAFAHAEAJIAAgnIAGAAIAAAvg");
	this.shape_5.setTransform(96.1,37);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#254245").s().p("AgVAYIAAgvIAPgBQANAAAHAGQAIAGAAAMQAAALgIAHQgIAHgOAAgAgOgSIAAAlIAHABQAWAAAAgUQAAgTgVAAIgIABg");
	this.shape_6.setTransform(86.3,37);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#254245").s().p("AgOAYIAAgvIAcAAIAAAFIgVAAIAAAPIAUAAIAAAFIgUAAIAAARIAWAAIAAAFg");
	this.shape_7.setTransform(80.2,37);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#254245").s().p("AAUAYIgCgpIgQApIgEAAIgPgpIgCApIgHAAIAEgvIAJAAIANAnIAPgnIAJAAIADAvg");
	this.shape_8.setTransform(73.5,37);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#254245").s().p("AAKAZIgDgMQgCgKgIAAIgGAAIAAAWIgHAAIAAgvQAFgBAIgBQAJAAAFAFQAEAEAAAFQAAAJgJACIAAAAQAFACACAIQACAJACAFgAgJgSIAAASIAHAAQALAAAAgJQAAgKgMABg");
	this.shape_9.setTransform(63.6,37);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#254245").s().p("AgOAYIAAgvIAcAAIAAAFIgVAAIAAAPIAUAAIAAAFIgUAAIAAARIAWAAIAAAFg");
	this.shape_10.setTransform(58,37);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#254245").s().p("AgVAYIAAgvIAPgBQANAAAHAGQAIAGAAAMQAAALgIAHQgIAHgOAAgAgOgSIAAAlIAHABQAWAAAAgUQAAgTgVAAIgIABg");
	this.shape_11.setTransform(51.9,37);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#254245").s().p("AgLAXIABgEIAGABQAJAAAAgNIAAgeIAHAAIAAAfQAAAQgPAAg");
	this.shape_12.setTransform(45.9,37.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#254245").s().p("AgOAYIAAgvIAbAAIAAAFIgUAAIAAAPIATAAIAAAFIgTAAIAAARIAWAAIAAAFg");
	this.shape_13.setTransform(41.2,37);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#254245").s().p("AgQAYIAAguQAFgCAIAAQAIAAAFAEQAFADAAAFQAAAIgJADQALABAAAKQAAAGgFAEQgFAFgMAAgAgJATIAGABQANAAAAgKQAAgJgNAAIgGAAgAgJgSIAAAPIAGAAQALAAAAgIQAAgIgLAAg");
	this.shape_14.setTransform(35.6,37);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#254245").s().p("AAKAZIgDgMQgCgKgIAAIgGAAIAAAWIgHAAIAAgvQAFgBAIgBQAJAAAFAFQAEAEAAAFQAAAJgKACIAAAAQAGACACAIQACAJACAFgAgJgSIAAASIAHAAQAKAAAAgJQAAgKgLABg");
	this.shape_15.setTransform(29.9,37);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#254245").s().p("AAPAYIgGgPIgSAAIgFAPIgHAAIASgvIAHAAIASAvgAgHAEIAPAAIgFgNIgDgJIAAAAg");
	this.shape_16.setTransform(23.6,37);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#254245").s().p("AAUAYIgCgpIAAAAIgQApIgEAAIgPgpIgCApIgHAAIAEgvIAIAAIAOAnIAPgnIAJAAIADAvg");
	this.shape_17.setTransform(16.6,37);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#254245").s().p("AAPAYIgFgPIgSAAIgGAPIgHAAIASgvIAHAAIASAvgAgHAEIAPAAIgFgNIgDgJg");
	this.shape_18.setTransform(9.5,37);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#254245").s().p("AgPAWIACgFQAGADAGAAQAKAAAAgIQAAgHgJgDQgOgDAAgKQAAgFAFgEQAFgEAGAAQAHAAAFACIgCAGQgEgDgGAAQgJAAAAAIQAAAFAJAEQAOAEAAAJQAAAGgFAEQgFAEgIAAQgJAAgEgDg");
	this.shape_19.setTransform(3.6,37);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#254245").s().p("AAiBtQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAgBAAAAIAAgFQAAgIgDgDQgEgDgLAAIg1gHQgUgBgIgIQgJgIAAgRQAAgSAUgMQgagPAAgiIAAgRQABgdARgOQASgRAoABQAOgBARAEIAwAAQAKAAAAAGIAAALQAAAGgGACIgPADQAGAMAAAQIAAARQAAA7hKAAIgLAAQgLAGAAAIQAAAHAKAAIA2AGQAWADAJAKQAJALAAAUIgBAJQAAABAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAgAgjhHQgJAHAAAQIAAAQQAAARAJAHQAJAGAUAAQATAAAJgHQAJgGAAgRIAAgQQAAgQgJgHQgIgHgUgBQgVABgIAHg");
	this.shape_20.setTransform(119.7,17.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#254245").s().p("AgOB5QgHAAAAgGIAAilQAAgFAHAAIAdAAQAGAAAAAFIAAClQAAAGgGAAgAgPhQQgGABgBgHIAAgcQABgGAGAAIAfAAQAHAAgBAGIAAAcQABAHgHgBg");
	this.shape_21.setTransform(105.6,12.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#254245").s().p("AgOB4QgHAAAAgGIAAjjQAAgGAHAAIAdAAQAHAAAAAGIAADjQAAAGgHAAg");
	this.shape_22.setTransform(96.8,12.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#254245").s().p("Ag5BFQgUgVAAgkIAAgYQAAgjAUgVQAVgXAkABQAlgBAVAXQAUAVAAAjIAAAYQAAAkgUAVQgVAXglgBQgkABgVgXgAgZgrQgJAMAAATIAAAYQAAAVAJALQAJALAQAAQARAAAJgLQAJgLAAgVIAAgYQAAgTgJgMQgJgLgRAAQgQAAgJALg");
	this.shape_23.setTransform(82.9,15.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#254245").s().p("AhCBxQgGgBgCgCQgBgBAAgFIAAjaQAAgGAGgBIAeAAQAHABAAAGIAAA4QAPgDAQABQAmAAAUAUQATAVAAAlIAAAYQAAAmgTAVQgUAUgmAAQgfAAgigIgAgggYIAABtQANACASAAQATAAAIgNQAHgLAAgVIAAgYQAAgUgHgMQgIgMgTAAQgPAAgQACg");
	this.shape_24.setTransform(64.4,12.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E32119").s().p("AAnBaQgHAAAAgGIAAhmQAAgWgEgGQgGgIgRAAQgOAAgWAMIAAB+QgBAGgGAAIgeAAQgGAAgBgGIAAilQABgFAGAAIAdAAQAGAAAAAFIAAAHQAOgJAMgDQAKgDAQAAQAhAAANAVQALAPAAAjIAABmQgBAGgGAAg");
	this.shape_25.setTransform(45,15.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E32119").s().p("AhHAmIAAgBQAAgbATgMQATgOApgBIAVAAIAAgNQAAgOgHgHQgHgEgPAAQgigBgSADIgCAAQgGAAAAgGIAAgUQAAgFAGgCQAbgEAbAAQBIAAAAA8IAABwQABAHgIAAIgbAAQgHAAAAgHIAAgEQgYAOgVgBQg5AAAAg1gAgUASQgHAFAAAOIAAABQAAALAGAFQAFAEAMAAQARAAAQgIIAAgoIgVAAQgUAAgIAIg");
	this.shape_26.setTransform(26,15.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E32119").s().p("Ag4BlQgTgVAAgmIAAgYQAAglATgVQAUgUAmAAQAQgBAPADIAAg4QAAgGAHgBIAeAAQAGABAAAGIAADaQAAAFgBABIgIADQgiAIgfAAQgmAAgUgUgAgZgOQgHAMAAAUIAAAYQAAAVAHALQAIANATAAQASAAANgCIAAhtQgQgCgPAAQgTAAgIAMg");
	this.shape_27.setTransform(7.6,12.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,130.1,39.5), null);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ23();
	this.instance.parent = this;
	this.instance.setTransform(13,29.5,1,1,0,0,0,13,29.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(359).to({y:103},5).wait(360).to({y:168.5},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-139,26,198.1);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ22();
	this.instance.parent = this;
	this.instance.setTransform(13,77.5,1,1,0,0,0,13,319.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(17).to({y:75.5},0).to({y:77.5},1).to({y:144.5},5).wait(27).to({y:142.5},0).to({y:144.5},1).to({y:280.2},5).wait(44).to({y:278.2},0).to({y:280.2},1).to({y:348.7},6).wait(46).to({y:346.7},0).to({y:348.7},1).to({y:416.2},6).wait(33).to({y:414.2},0).to({y:416.2},1).to({y:483.7},5).wait(54).to({y:481.7},0).to({y:483.7},1).to({y:619.2},6).wait(47).to({y:617.2},0).to({y:619.2},1).to({y:686.7},7).wait(40).to({y:684.7},0).to({y:686.7},1).to({y:754.2},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-338.7,26,736);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ24();
	this.instance.parent = this;
	this.instance.setTransform(88.2,29.5,1,1,0,0,0,13,29.5);

	this.instance_1 = new lib.Символ21();
	this.instance_1.parent = this;
	this.instance_1.setTransform(115.1,-308.8,1,1,0,0,0,13,29.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgmC+QgRgGgMgNQgLgMgGgSQgFgSAAgXIAAggIA5AAIAAAkQAAAUAIAJQAIAJAPAAQAOAAAIgJQAIgKABgZIAAgeQgBgagJgLQgJgMgUAAIgVAAIAAg2IAYAAQARAAAJgJQAJgKABgVIAAgWQgBgYgIgLQgIgJgOAAQgPAAgIAIQgIAKAAAUIAAAYIg5AAIAAgUQAAgXAFgTQAGgRALgNQAMgMARgHQARgGAVAAQAWAAARAGQARAHALAMQAMANAFARQAGATAAAXIAAAJQAAAggKATQgLAUgVAJQALAFAIAHQAIAHAGALQAJATAAAfIAAAeQAAAXgGASQgFASgMAMQgLANgRAGQgRAHgWAAQgVAAgRgHg");
	this.shape.setTransform(60.5,24);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhZDDIAAgwQAAgUAFgSQAEgQAKgQQALgTAeghQAdggALgTQAJgPAEgQQAGgSAAgUQAAgYgJgLQgHgJgPAAQgPAAgIAJQgIAJAAAUIAAAqIg5AAIAAgmQAAgXAFgSQAGgSAMgMQALgNARgGQARgHAVAAQAWAAARAHQARAGALANQAMAMAFASQAGASAAAXQAAAWgFAUQgFASgJASIgTAeIgWAbQg7A+AAAfIAAAJIByAAIAAA3g");
	this.shape_1.setTransform(25.4,23.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgGDBIAAklIgvAAIAAgrQARAAAMgEQALgEAHgGQAKgKAJgYIApAAIAAGAg");
	this.shape_2.setTransform(1.3,24);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(-12,-677,140.1,736), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AsiFiIAArDIZFAAIAALDg");
	mask.setTransform(84,36.8);

	// Слой 2
	this.instance = new lib.Символ13();
	this.instance.parent = this;
	this.instance.setTransform(82.7,42,1,1,0,0,0,61.4,29.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(9.3,1.4,140,70.1), null);


(lib.veskon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Symbol9();
	this.instance.parent = this;
	this.instance.setTransform(187.9,48.1,1,1,0,0,0,186.7,48.1);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.veskon, new cjs.Rectangle(1.2,0,373.4,96.3), null);


(lib.Symbol37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol38();
	this.instance.parent = this;
	this.instance.setTransform(68,48.9,1,1,0,0,0,68,48.9);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Symbol38(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol37, new cjs.Rectangle(-1,-1,138,99.7), null);


(lib.Symbol34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol36();
	this.instance.parent = this;
	this.instance.setTransform(134.1,32.4,1,1,0,0,0,134.1,32.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.02,scaleY:1.02,x:134.2},14,cjs.Ease.get(-1)).to({scaleX:1.05,scaleY:1.05,y:32.5},15,cjs.Ease.get(1)).to({regX:134,scaleX:1.03,scaleY:1.03,x:134.1},15,cjs.Ease.get(-1)).to({regX:134.1,scaleX:1,scaleY:1,y:32.4},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,268.1,64.9);


(lib.Symbol33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol35();
	this.instance.parent = this;
	this.instance.setTransform(134.1,32.4,1,1,0,0,0,134.1,32.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.03,scaleY:1.03,x:134.2,y:32.5},15,cjs.Ease.get(-1)).to({regX:134,scaleX:1.06,scaleY:1.06,x:134.1},14,cjs.Ease.get(1)).to({regX:133.9,scaleX:1.03,scaleY:1.03},15,cjs.Ease.get(-1)).to({regX:134.1,scaleX:1,scaleY:1,y:32.4},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,268.1,64.9);


(lib.Symbol32 = function(mode,startPosition,loop) {
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

	// Layer 5
	this.instance = new lib.Symbol37();
	this.instance.parent = this;
	this.instance.setTransform(134.1,39.9,2.207,0.904,0,0,0,68,48.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40));

	// Symbol 34
	this.instance_1 = new lib.Symbol34();
	this.instance_1.parent = this;
	this.instance_1.setTransform(135.9,35.9,1,0.049,0,0,0,134.1,32.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({regY:32.4,scaleY:1},10,cjs.Ease.get(1)).wait(1).to({regY:32.5,scaleY:0.05},9,cjs.Ease.get(-1)).to({_off:true},1).wait(10));

	// Symbol 33
	this.instance_2 = new lib.Symbol33();
	this.instance_2.parent = this;
	this.instance_2.setTransform(136.2,35.9,1,1,0,0,0,134.1,32.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:32.5,scaleY:0.05},9,cjs.Ease.get(-1)).to({_off:true},1).wait(19).to({_off:false},0).to({regY:32.4,scaleY:1},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.1,3.5,268.1,64.9);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Символ10();
	this.instance.parent = this;
	this.instance.setTransform(261.5,31.4,0.741,0.741,0,0,0,107.1,39.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgYAcIAAg3IAWAAQAFAAAFACQAGACADAEQAEADABAFQADAGAAAFQAAAGgDAGQgBAFgEADQgDAEgGACQgFACgFAAgAgQAWIAOAAQADAAAEgBQAEgCACgDIAFgHQABgEAAgFQAAgEgBgEIgFgHQgCgDgEgCQgEgBgDAAIgOAAg");
	this.shape.setTransform(279,57.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgPAcIAAg3IAIAAIAAAxIAXAAIAAAGg");
	this.shape_1.setTransform(272.4,57.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgLAbQgFgCgDgEQgEgEgCgFQgCgGAAgGQAAgFACgGQACgFAEgEQADgEAFgCQAGgCAFAAQAHAAAEACQAFACAEAEQAEAEACAFQACAGAAAFQAAAGgCAGQgCAFgEAEQgEAEgFACQgEACgHAAQgFAAgGgCgAgHgUQgEACgDADIgDAHQgCAEAAAEQAAAFACAEIADAHQADADAEACQAEABADAAQAFAAAEgBQADgCACgDIAFgHQABgEAAgFQAAgEgBgEIgFgHQgCgDgDgCQgEgBgFAAQgDAAgEABg");
	this.shape_2.setTransform(265.3,57.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgJAbIgIgFIACgEIABgBIABAAIABAAIABABIACACIADABIADABIADABIAFgBIADgCIADgEIAAgEIgBgEIgDgDIgEgCIgEgBIgFgCIgFgCIgDgEIgBgGIABgGIAEgFIAFgEIAHgBQAFAAADACIAHAEIgCAEIAAAAIgBABIgCgBIgCgBIgEgCIgEgBIgEABIgDACIgCADIgBADQAAABAAAAQAAABABAAQAAABAAAAQAAABABAAIADADIADACIAFABIAFACIAEACIADAEIABAGIgBAHIgDAGIgGAEIgIABQgFAAgEgCg");
	this.shape_3.setTransform(258.2,57.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgCAcIAAgWIgWghIAHAAIACAAIABACIANAVIABADIAAABIABgBIABgDIAOgVIABgCIABAAIAHAAIgVAhIAAAWg");
	this.shape_4.setTransform(248.4,57.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgXAcIAAg3IAVAAQAFAAAFACQAFACAEAEQAEADACAFQACAGgBAFQABAGgCAGQgCAFgEADQgEAEgFACQgFACgFAAgAgQAWIAOAAQAEAAADgBQAEgCADgDIAEgHQABgEAAgFQAAgEgBgEIgEgHQgDgDgEgCQgDgBgEAAIgOAAg");
	this.shape_5.setTransform(241.5,57.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAUAcIgBAAIgBgCIgFgNIgYAAIgGANIAAACIgCAAIgGAAIAXg3IAGAAIAXA3gAAKAHIgIgWIgBgCIgBgDIAAADIAAACIgJAWIATAAg");
	this.shape_6.setTransform(234,57.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgQAcIAAg3IAiAAIAAAGIgaAAIAAATIAUAAIAAAFIgUAAIAAATIAaAAIAAAGg");
	this.shape_7.setTransform(227.6,57.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAOAcQgBAAAAAAQAAAAgBAAQAAAAAAgBQgBAAAAAAIgOgVIgBgBIgCAAIgGAAIAAAXIgIAAIAAg3IAQAAIAJABQADABADACIADAFQACADAAADIgBAGIgDAFIgEACIgGACIADADIAQAWgAgMAAIAIAAIAEgBIAFgCIACgEIABgEQABgFgEgDQgDgCgGAAIgIAAg");
	this.shape_8.setTransform(221.3,57.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgPAcIAAg3IAIAAIAAAxIAXAAIAAAGg");
	this.shape_9.setTransform(215.1,57.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAVAcIgCAAIgBgCIgFgNIgZAAIgFANIAAACIgDAAIgFAAIAWg3IAHAAIAXA3gAALAHIgJgWIgBgCIgBgDIAAADIgBACIgJAWIAVAAg");
	this.shape_10.setTransform(208.5,57.6);

	this.instance_1 = new lib.Symbol4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(243.5,36.5,0.716,1.051,0,0,0,82.2,34.7);

	this.instance_2 = new lib.Symbol1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(91.3,36.7,1.223,1.223,0,0,0,65,19.8);

	this.instance_3 = new lib.Symbol3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(151,36.3,1,0.93,0,0,0,151,39);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol28, new cjs.Rectangle(0,-489.8,303.9,562.4), null);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol27();
	this.instance.parent = this;
	this.instance.setTransform(322.6,214.9,1,1,0,0,0,322.6,214.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:299.6},49,cjs.Ease.get(-1)).to({x:276.1},50,cjs.Ease.get(1)).to({x:299.4},50,cjs.Ease.get(-1)).to({x:322.6},50,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,645.2,429.9);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol25();
	this.instance.parent = this;
	this.instance.setTransform(139,14.3,1,1,0,0,0,139,14.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.711},29).to({alpha:0.77},6).to({alpha:1},24).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.7,0,272.2,28.7);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol24();
	this.instance.parent = this;
	this.instance.setTransform(139,14.3,1,1,0,0,0,139,14.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol23, new cjs.Rectangle(4.7,0,272.2,28.7), null);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol22();
	this.instance.parent = this;
	this.instance.setTransform(138.8,15.7,1,1,0,0,0,138.8,15.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.711},19).to({alpha:0.754},3).to({alpha:1},17).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.2,1.2,287.6,27.7);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol21();
	this.instance.parent = this;
	this.instance.setTransform(149.7,6,1,1,0,0,0,138.8,15.7);

	this.instance_1 = new lib.Symbol16();
	this.instance_1.parent = this;
	this.instance_1.setTransform(149.9,13.9,0.999,0.804,0,-0.1,0.1,150,42.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(0,-20.6,299.7,49.1), null);


(lib.sta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Symbol5();
	this.instance.parent = this;
	this.instance.setTransform(187.9,48.1,1,1,0,0,0,186.7,48.1);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sta, new cjs.Rectangle(1.2,0,373.4,96.3), null);


(lib.ris = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Symbol8();
	this.instance.parent = this;
	this.instance.setTransform(187.9,48.1,1,1,0,0,0,186.7,48.1);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ris, new cjs.Rectangle(1.2,0,373.4,96.3), null);


(lib.rev = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Symbol10();
	this.instance.parent = this;
	this.instance.setTransform(187.9,48.1,1,1,0,0,0,186.7,48.1);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.rev, new cjs.Rectangle(1.2,0,373.4,96.3), null);


(lib.mon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Symbol7();
	this.instance.parent = this;
	this.instance.setTransform(187.9,48.1,1,1,0,0,0,186.7,48.1);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mon, new cjs.Rectangle(1.2,0,373.4,96.3), null);


(lib.ber = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Symbol6();
	this.instance.parent = this;
	this.instance.setTransform(187.9,48.1,1,1,0,0,0,186.7,48.1);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ber, new cjs.Rectangle(1.2,0,373.4,96.3), null);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol17();
	this.instance.parent = this;
	this.instance.setTransform(149.8,59.2,1,1,0,0,0,149.8,38.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgWBeIAAhNIg+huIA0AAIAVAuIALAbIAAAAIALgbIAVguIA1AAIg+BuIAABNg");
	this.shape.setTransform(277.9,24.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AApBeIgLgoIg6AAIgLAoIgwAAIBAi7IAvAAIBAC7gAASASIgKgkIgIggIAAAAIgGAgIgMAkIAkAAg");
	this.shape_1.setTransform(260.9,24.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhRBeIAAi7IBDAAQALAAAJACQAKACAJADQAIADAIAEIAOALIAMANQAFAIADAIQADAJACAKQACAKAAAKQAAALgCAKQgCAKgDAIQgDAJgFAIIgMANQgGAHgIAEQgIAEgIADQgJAEgKACQgJABgLAAgAgjA3IATAAQAMAAAIgEQAKgEAHgGQAGgIAEgKQADgKAAgNQAAgMgEgKQgDgKgHgIQgGgGgKgEQgIgEgMAAIgTAAg");
	this.shape_2.setTransform(243,24.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgUBfQgJgCgJgDQgJgDgIgFQgIgGgHgHQgbgcAAgpQAAgLABgJQACgJAEgJQADgIAFgIQAFgIAHgGQAHgIAIgFQAIgFAJgDQAJgDAJgCQAKgCAKAAQALAAAKACQAJACAJADQAJADAIAFQAIAFAHAIIAMAOQAFAIADAIQAEAJABAJQACAJAAALQAAApgbAcQgHAHgIAGQgIAFgJADQgJADgJACQgKACgLAAQgKAAgKgCgAgTgyQgJAEgIAHQgHAJgDAJQgEAJAAAMQAAAXAOAQQAIAIAJAEQAJAEAKAAQALAAAJgEQAJgEAHgIQAHgIAEgKQAEgKAAgLQAAgMgEgJQgEgKgHgIQgHgHgJgEQgJgEgLAAQgKAAgJAEg");
	this.shape_3.setTransform(222.1,24.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgWBeIAAiUIg5AAIAAgnICfAAIAAAnIg5AAIAACUg");
	this.shape_4.setTransform(203.1,24.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgWBeIAAiUIg5AAIAAgnICfAAIAAAnIg5AAIAACUg");
	this.shape_5.setTransform(180,24.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgWBeIAAi7IAtAAIAAC7g");
	this.shape_6.setTransform(167.4,24.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag5BeIAAi7IByAAIAAAoIhEAAIAAAnIA5AAIAAAnIg5AAIAABFg");
	this.shape_7.setTransform(156.8,24.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgUBgQgJgDgJgDQgJgEgIgFQgIgFgHgHQgbgcAAgpQAAgKABgKQACgJAEgIQADgJAFgIQAFgHAHgIQAHgGAIgFQAIgFAJgEQAJgEAJgBQAKgCAKAAQALAAAKACQAJABAJAEQAJAEAIAFQAIAFAHAGIAMAPQAFAIADAJQAEAIABAJQACAKAAAKQAAApgbAcQgHAHgIAFQgIAFgJAEQgJADgJADQgKABgLAAQgKAAgKgBgAgTgyQgJAEgIAIQgHAHgDAKQgEAJAAAMQAAAXAOAQQAIAIAJAEQAJAEAKAAQALAAAJgEQAJgEAHgIQAHgIAEgKQAEgKAAgLQAAgMgEgJQgEgKgHgHQgHgIgJgEQgJgEgLAAQgKAAgJAEg");
	this.shape_8.setTransform(138.3,24.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAZBeIghhAIgVAAIAABAIguAAIAAi7IBBAAIAVACQAJABAGACQAIADAGAFQAHAFAEAHQAFAHACAIQADAJAAAKQAAAIgCAIQgCAIgEAGQgDAGgGAGQgFAFgHAEIAAAAIAIALIAkBCgAgdgIIAUAAQAKAAAGgGQAHgGAAgLQAAgIgDgFQgDgEgFgDQgFgDgMABIgPAAg");
	this.shape_9.setTransform(119.9,24.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhFBeIAAi7IBNAAQAcAAARATQAIAIAEAMQAEALABAPQgBAOgEAMQgEALgIAJQgRASgcAAIgfAAIAAA6gAgXgCIAWAAQAFgBAFgCQAFgBADgDQAFgIABgLQgBgMgFgGQgGgIgLABIgXAAg");
	this.shape_10.setTransform(102.8,24.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag7BeIAAi7IB0AAIAAAoIhHAAIAAAiIA4AAIAAAmIg4AAIAAAjIBKAAIAAAog");
	this.shape_11.setTransform(80.2,24.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAbBeIgnhMIgTAAIAABMIguAAIAAi7IAuAAIAABIIATAAIAmhIIAxAAIgzBaIAAABIA2Bgg");
	this.shape_12.setTransform(64.2,24.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AApBeIgMgoIg5AAIgMAoIgvAAIBAi7IAwAAIA/C7gAATASIgLgkIgHggIgBAAIgHAgIgKAkIAkAAg");
	this.shape_13.setTransform(45.8,24.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AA4BeIgGhVIAAgaIAAgEIAAAAIgLAeIgTA2IgnAAIgTg2IgLgeIAAAAQABARgBANIgGBVIguAAIAPi7IAyAAIAbBQIAJAdIAAAAIAKgdIAbhQIAyAAIAPC7g");
	this.shape_14.setTransform(25.6,24.2);

	this.instance_1 = new lib.Symbol16();
	this.instance_1.parent = this;
	this.instance_1.setTransform(149.9,34.5,0.999,0.804,0,-0.1,0.1,150,42.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,299.7,49.1);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol30();
	this.instance.parent = this;
	this.instance.setTransform(149.8,29.6,1,1,0,0,0,149.8,29.6);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol29, new cjs.Rectangle(0,0,299.7,49.1), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 9
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#6F6F6F","#666666","#CCCCCC","#6C6C6C","#999999"],[0.129,0.365,0.533,0.788,1],-10.1,0,10.2,0).s().p("AhlDnIAAnNIDLAAIAAHNg");
	this.shape.setTransform(-386,400.3);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(53).to({_off:false},0).to({_off:true},21).wait(21));

	// veskon
	this.instance = new lib.veskon();
	this.instance.parent = this;
	this.instance.setTransform(-287.5,402.8,0.465,0.465,0,0,0,191.3,54);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:186.9,scaleX:0.01,x:-383},24,cjs.Ease.get(-1)).to({regX:190.1,scaleX:0.02,skewY:180,x:-385.4},1).to({regX:191.5,scaleX:0.25,x:-442.4},28,cjs.Ease.get(1)).to({regX:193.2,scaleX:0.03,x:-384.8},19,cjs.Ease.get(-1)).to({regX:186.9,scaleX:0.01,skewY:0,x:-377.4},1).to({regX:191.3,scaleX:0.47,x:-287.5},21,cjs.Ease.get(1)).wait(1));

	// Layer 10
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#6F6F6F","#666666","#CCCCCC","#6C6C6C","#999999"],[0.129,0.365,0.533,0.788,1],-10.1,0,10.2,0).s().p("AhlDrIAAnVIDLAAIAAHVg");
	this.shape_1.setTransform(-386,259.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#6F6F6F","#666666","#CCCCCC","#6C6C6C","#999999"],[0.129,0.365,0.533,0.788,1],-10.1,0,10.2,0).s().p("AhlDgIAAm/IDLAAIAAG/g");
	this.shape_2.setTransform(-386,261.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[]},9).to({state:[{t:this.shape_2}]},74).wait(12));

	// ber
	this.instance_1 = new lib.ber();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-418.4,263.9,0.155,0.465,0,0,180,191.8,54.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:193.2,regY:54.1,scaleX:0.03,x:-384.8},7).to({regX:186.9,scaleX:0.01,skewY:0,x:-377.4},1).to({regX:191.3,scaleX:0.47,x:-287.5},21,cjs.Ease.get(1)).wait(1).to({regX:186.9,scaleX:0.01,x:-383},24,cjs.Ease.get(-1)).to({regX:190.1,scaleX:0.02,skewY:180,x:-385.4},1).to({regX:191.5,scaleX:0.25,x:-442.4},28,cjs.Ease.get(1)).to({regX:191.8,regY:54.2,scaleX:0.17,x:-423.2},11,cjs.Ease.get(-1)).wait(1));

	// Layer 11
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#6F6F6F","#666666","#CCCCCC","#6C6C6C","#999999"],[0.129,0.365,0.533,0.788,1],-10.1,0,10.2,0).s().p("AhlE2IAAprIDLAAIAAJrg");
	this.shape_3.setTransform(-386,208.9);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(67).to({_off:false},0).to({_off:true},21).wait(7));

	// sta
	this.instance_2 = new lib.sta();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-324.6,217.6,0.276,0.465,0,0,0,186.8,54.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:191.3,regY:54,scaleX:0.47,x:-287.5,y:217.5},13).wait(1).to({regX:186.9,scaleX:0.01,x:-383},24,cjs.Ease.get(-1)).to({regX:190.1,scaleX:0.02,skewY:180,x:-385.4},1).to({regX:191.5,scaleX:0.25,x:-442.4},28,cjs.Ease.get(1)).to({regX:193.2,scaleX:0.03,x:-382.4},19,cjs.Ease.get(-1)).to({regX:186.9,scaleX:0.01,skewY:0,x:-375},1).to({regX:187,regY:54.1,scaleX:0.26,x:-327.4},7,cjs.Ease.get(1)).wait(1));

	// Layer 12
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#6F6F6F","#666666","#CCCCCC","#6C6C6C","#999999"],[0.129,0.365,0.533,0.788,1],-10.1,0,10.2,0).s().p("AhlDfIAAm9IDLAAIAAG9g");
	this.shape_4.setTransform(-386,446.6);
	this.shape_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(32).to({_off:false},0).to({_off:true},21).wait(42));

	// rev
	this.instance_3 = new lib.rev();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-361.1,449.2,0.113,0.465,0,0,0,191,54.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:186.9,regY:54,scaleX:0.01,x:-383},3).to({regX:190.1,scaleX:0.02,skewY:180,x:-385.4},1).to({regX:191.5,scaleX:0.25,x:-442.4},28,cjs.Ease.get(1)).to({regX:193.2,scaleX:0.03,x:-384.8},19,cjs.Ease.get(-1)).to({regX:186.9,scaleX:0.01,skewY:0,x:-377.4},1).to({regX:191.3,scaleX:0.47,x:-287.5},21,cjs.Ease.get(1)).wait(1).to({regX:191.2,regY:54.1,scaleX:0.15,x:-353.8},20,cjs.Ease.get(-1)).wait(1));

	// Layer 13
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#6F6F6F","#666666","#CCCCCC","#6C6C6C","#999999"],[0.129,0.365,0.533,0.788,1],-10.1,0,10.2,0).s().p("AhlDxIAAnhIDLAAIAAHhg");
	this.shape_5.setTransform(-386,353.6);
	this.shape_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(4).to({_off:false},0).to({_off:true},21).wait(70));

	// ris
	this.instance_4 = new lib.ris();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-441,356.6,0.239,0.465,0,0,180,190.3,54.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:191.5,regY:54,scaleX:0.25,x:-442.4,y:356.5},4).to({regX:193.2,scaleX:0.03,x:-384.8},19,cjs.Ease.get(-1)).to({regX:186.9,scaleX:0.01,skewY:0,x:-377.4},1).to({regX:191.3,scaleX:0.47,x:-287.5},21,cjs.Ease.get(1)).wait(1).to({regX:186.9,scaleX:0.01,x:-383},24,cjs.Ease.get(-1)).to({regX:190.1,scaleX:0.02,skewY:180,x:-385.4},1).to({regX:190.2,regY:54.1,scaleX:0.24,x:-440.7,y:356.6},23,cjs.Ease.get(1)).wait(1));

	// Layer 14
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#6F6F6F","#666666","#CCCCCC","#6C6C6C","#999999"],[0.129,0.365,0.533,0.788,1],-10.1,0,10.2,0).s().p("Ahlf4MAAAg/vIDLAAMAAAA/vg");
	this.shape_6.setTransform(-386,372);
	this.shape_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(40).to({_off:false},0).to({_off:true},21).wait(34));

	// mon
	this.instance_5 = new lib.mon();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-317.3,310.2,0.322,0.465,0,0,0,191.2,54.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:186.9,regY:54,scaleX:0.01,x:-383},11).to({regX:190.1,scaleX:0.02,skewY:180,x:-385.4},1).to({regX:191.5,scaleX:0.25,x:-442.4},28,cjs.Ease.get(1)).to({regX:193.2,scaleX:0.03,x:-384.8},19,cjs.Ease.get(-1)).to({regX:186.9,scaleX:0.01,skewY:0,x:-377.4},1).to({regX:191.3,scaleX:0.47,x:-287.5},21,cjs.Ease.get(1)).wait(1).to({regY:54.1,scaleX:0.35,x:-311.3},12,cjs.Ease.get(-1)).wait(1));

	// Layer 2
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#6F6F6F","#666666","#CCCCCC","#6C6C6C","#999999"],[0.129,0.365,0.533,0.788,1],-10.1,0,10.2,0).s().p("EgBlAiNMAAAhEZIDLAAMAAABEZg");
	this.shape_7.setTransform(-386,357.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(95));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-485,138.3,282.8,437.8);


// stage content:
(lib.danbolig300600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.button.addEventListener("mouseover", fl_Clickover.bind(this));
		
		function fl_Clickover()
		{
		    this.button.gotoAndPlay(2);
		
		}
		
		this.button.addEventListener("mouseout", fl_Clickout.bind(this));
		
		function fl_Clickout()
		{   
			this.button.gotoAndPlay(21);
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#254245").ss(2,1,1).p("EgXWguyMAutAAAMAAABdlMgutAAAg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 3
	this.button = new lib.Symbol32();
	this.button.parent = this;
	this.button.setTransform(149.4,548.7,1,1,0,0,0,134.1,32.4);

	this.timeline.addTween(cjs.Tween.get(this.button).wait(1));

	// Layer 2
	this.instance = new lib.Symbol29();
	this.instance.parent = this;
	this.instance.setTransform(149.8,101.2,1,1,0,0,0,149.8,29.6);

	this.instance_1 = new lib.Symbol23();
	this.instance_1.parent = this;
	this.instance_1.setTransform(151,492.9,1,1,0,0,0,139,14.3);

	this.instance_2 = new lib.Symbol13();
	this.instance_2.parent = this;
	this.instance_2.setTransform(150,534,1,0.766,0,0,0,150,86.8);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 1
	this.instance_3 = new lib.Symbol28();
	this.instance_3.parent = this;
	this.instance_3.setTransform(151,36.2,1,1,0,0,0,151,36.2);

	this.instance_4 = new lib.Symbol2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(582,241.6,1,1,0,0,0,117.2,289.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3}]}).wait(1));

	// Layer 4
	this.instance_5 = new lib.Symbol26();
	this.instance_5.parent = this;
	this.instance_5.setTransform(189.6,263.9,1,1,0,0,0,322.6,214.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(17,-189.9,645.2,1090.4);
// library properties:
lib.properties = {
	width: 300,
	height: 600,
	fps: 24,
	color: "#006633",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/danbolig300_600_atlas_.png", id:"danbolig300_600_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;