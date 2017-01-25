(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1375,620);


(lib.patr = function() {
	this.initialize(img.patr);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,13,70);


(lib.pri = function() {
	this.initialize(img.pri);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,342,300);


(lib.pri1 = function() {
	this.initialize(img.pri1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,256,256);


(lib.shot = function() {
	this.initialize(img.shot);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,23,23);


(lib.snip = function() {
	this.initialize(img.snip);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,256,173);


(lib.ter = function() {
	this.initialize(img.ter);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,13,38);// helper functions:

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


(lib.Символ62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF0000","#53EB00"],[0,1],-78.6,0,78.6,0).s().p("AsRBYIAAivIYjAAIAACvg");
	this.shape.setTransform(91,3.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ADeByIAAguIAvAAIAAAugAAAByIAAjjIAsAAIAADjgAhxByIibjjIA3AAICbDjgAkMByIA/hdIAcApIgkA0gABEAXIAAgsIAbAAQAIAAAHgIQAHgHAAgJQAAgIgHgIQgHgGgIgBIgbAAIAAgtIAbAAQAcAAATAVQALAJAEAMQAFAMABAOQgBAOgFAMQgEAMgLAJQgTAUgcABgADegBIAAgvIAvAAIAAAvgAiVg9IAkg0IA3AAIg/Beg");
	this.shape_1.setTransform(-22,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FF0000","#53EB00"],[0,1],-74.5,0,82.7,0).s().p("ArpBYIAAivIXTAAIAACvg");
	this.shape_2.setTransform(86.9,3.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ADeByIAAguIAvAAIAAAugAAAByIAAjjIAsAAIAADjgAhxByIibjjIA3AAICbDjgAkMByIA/hdIAcApIgkA0gABEAXIAAgsIAbAAQAIAAAHgIQAHgHAAgJQAAgIgHgIQgHgGgIgBIgbAAIAAgtIAbAAQAcAAATAVQAVAhAAAOQgBAOgFAMQgEAMgLAJQgTAUgcABgADegBIAAgvIAvAAIAAAvgAiVg9IAkg0IA3AAIg/Beg");
	this.shape_3.setTransform(-22,0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FF0000","#53EB00"],[0,1],-70.5,0,86.7,0).s().p("ArABYIAAivIWBAAIAACvg");
	this.shape_4.setTransform(82.9,3.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FF0000","#53EB00"],[0,1],-66.4,0,90.8,0).s().p("AqYBYIAAivIUxAAIAACvg");
	this.shape_5.setTransform(78.8,3.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#FF0000","#53EB00"],[0,1],-62.4,0,94.8,0).s().p("ApvBYIAAivITfAAIAACvg");
	this.shape_6.setTransform(74.8,3.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#FF0000","#53EB00"],[0,1],-58,0,99.2,0).s().p("ApEBYIAAivISIAAIAACvg");
	this.shape_7.setTransform(70.4,3.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#FF0000","#53EB00"],[0,1],-53.7,0,103.5,0).s().p("AoYBYIAAivIQxAAIAACvg");
	this.shape_8.setTransform(66.1,3.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#FF0000","#53EB00"],[0,1],-49.3,0,107.9,0).s().p("AntBYIAAivIPbAAIAACvg");
	this.shape_9.setTransform(61.7,3.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#FF0000","#53EB00"],[0,1],-45,0,112.2,0).s().p("AnBBYIAAivIODAAIAACvg");
	this.shape_10.setTransform(57.4,3.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#FF0000","#53EB00"],[0,1],-41.2,0,116,0).s().p("AmcBYIAAivIM5AAIAACvg");
	this.shape_11.setTransform(53.6,3.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#FF0000","#53EB00"],[0,1],-37.5,0,119.7,0).s().p("Al2BYIAAivILtAAIAACvg");
	this.shape_12.setTransform(49.9,3.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#FF0000","#53EB00"],[0,1],-33.7,0,123.5,0).s().p("AlRBYIAAivIKiAAIAACvg");
	this.shape_13.setTransform(46.1,3.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#FF0000","#53EB00"],[0,1],-30,0,127.2,0).s().p("AkrBYIAAivIJXAAIAACvg");
	this.shape_14.setTransform(42.4,3.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#FF0000","#53EB00"],[0,1],-23.4,0,133.8,0).s().p("AjqBYIAAivIHUAAIAACvg");
	this.shape_15.setTransform(35.8,3.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#FF0000","#53EB00"],[0,1],-16.9,0,140.3,0).s().p("AioBYIAAivIFRAAIAACvg");
	this.shape_16.setTransform(29.3,3.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#FF0000","#53EB00"],[0,1],-10.3,0,146.9,0).s().p("AhnBYIAAivIDOAAIAACvg");
	this.shape_17.setTransform(22.7,3.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#FF0000","#53EB00"],[0,1],-3.8,0,153.4,0).s().p("AglBYIAAivIBLAAIAACvg");
	this.shape_18.setTransform(16.2,3.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},39).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape_4}]},1).to({state:[{t:this.shape_3},{t:this.shape_5}]},1).to({state:[{t:this.shape_1},{t:this.shape_6}]},1).to({state:[{t:this.shape_1},{t:this.shape_6}]},16).to({state:[{t:this.shape_3},{t:this.shape_7}]},1).to({state:[{t:this.shape_3},{t:this.shape_8}]},1).to({state:[{t:this.shape_3},{t:this.shape_9}]},1).to({state:[{t:this.shape_1},{t:this.shape_10}]},1).to({state:[{t:this.shape_1},{t:this.shape_10}]},1).to({state:[{t:this.shape_1},{t:this.shape_10}]},39).to({state:[{t:this.shape_3},{t:this.shape_11}]},1).to({state:[{t:this.shape_3},{t:this.shape_12}]},1).to({state:[{t:this.shape_3},{t:this.shape_13}]},1).to({state:[{t:this.shape_1},{t:this.shape_14}]},1).to({state:[{t:this.shape_1},{t:this.shape_14}]},16).to({state:[{t:this.shape_3},{t:this.shape_15}]},1).to({state:[{t:this.shape_3},{t:this.shape_16}]},1).to({state:[{t:this.shape_17},{t:this.shape_3}]},1).to({state:[{t:this.shape_1},{t:this.shape_18}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49,-11.3,218.6,23.2);


(lib.Символ61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Au+O+QmNmMAAoyQAAoxGNmNQGNmNIxAAQIyAAGMGNQGOGNAAIxQAAIymOGMQmMGOoyAAQoxAAmNmOg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ61, new cjs.Rectangle(-135.6,-135.6,271.2,271.2), null);


(lib.Символ59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pri1();
	this.instance.parent = this;
	this.instance.setTransform(-112,-112,0.875,0.875);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ59, new cjs.Rectangle(-112,-112,224,224), null);


(lib.Символ58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pri();
	this.instance.parent = this;
	this.instance.setTransform(-195,511.7,1.139,1.139,0,180,0);

	this.instance_1 = new lib.pri();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-195,-171,1.139,1.139);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ58, new cjs.Rectangle(-195,-171,389.5,682.7), null);


(lib.Символ53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AJhBHICrisIAADoIguAAIAAh6Ih9CAgAqHBbQALgDAKgFQALgFAIgIIAiAfQgOAOgTAJQgWAMgTAAgAruBhQgdggAAgwQAAgXAIgUQAHgUAOgQQAPgQAUgJQATgKAYgCIAAAtQgZAFgRASQgJAKgFAMQgEALAAAPQAAAgARATQAIAIALAGQAKAGAOADIAAAtQgxgGgdghgAHsCDIAAjiIAuAAIAADigAFwCDIAjhRQAIAGALACQAMADAPAAIgeBGgAEZCDIhdi1IAagzIB3DogABeCDIBRibIAZAwIg3BrgAgrCDIAAgtIBeAAIAAAtgAhwCDIAAjiIAtAAIAADigAlQCDIAAjiIAtAAIAADigAniCDIAAidIAtAAIAACdgAG5AoQgbAAgUgUQgUgUAAgbQAAgcAUgUQAUgVAbABIAbAAIAAAtIgbAAQgIAAgHAHQgHAHAAAIQAAAKAHAGQAHAIAIAAIAbAAIAAAsgAgrAoIAAgsIBeAAIAAAsgAkLAoIAAgsIAbAAQAIAAAHgIQAHgGAAgKQAAgHgHgIQgHgHgIAAIgbAAIAAgtIAbAAQAcgBATAVQAKAKAFALQAFAMAAAOQAAAOgFAMQgFALgKALQgTAUgcAAgAJhhfIAtAAIAABYIgtAtgApvgtQgLgGgNgDIAAgtQANABAbAKQAUAKAOAOIgiAfQgHgHgJgFgAgrgyIAAgtIBeAAIAAAtgAoTgyIAAgtICOAAIAAAtgAKyiIIA+AAIg+BAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ53, new cjs.Rectangle(-77.9,-13.6,156,27.3), null);


(lib.Символ52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AJhBHICrisIAADoIguAAIAAh6Ih9CAgAqHBbQALgDAKgFQALgFAIgIIAiAfQgOAOgTAJQgWAMgTAAgAruBhQgdggAAgwQAAgXAIgUQAHgUAOgQQAPgQAUgJQATgKAYgCIAAAtQgZAFgRASQgJAKgFAMQgEALAAAPQAAAgARATQAIAIALAGQAKAGAOADIAAAtQgxgGgdghgAHsCDIAAjiIAuAAIAADigAFwCDIAjhRQAIAGALACQAMADAPAAIgeBGgAEZCDIhdi1IAagzIB3DogABeCDIBRibIAZAwIg3BrgAgrCDIAAgtIBeAAIAAAtgAhwCDIAAjiIAtAAIAADigAlQCDIAAjiIAtAAIAADigAniCDIAAidIAtAAIAACdgAG5AoQgbAAgUgUQgUgUAAgbQAAgcAUgUQAUgVAbABIAbAAIAAAtIgbAAQgIAAgHAHQgHAHAAAIQAAAKAHAGQAHAIAIAAIAbAAIAAAsgAgrAoIAAgsIBeAAIAAAsgAkLAoIAAgsIAbAAQAIAAAHgIQAHgGAAgKQAAgHgHgIQgHgHgIAAIgbAAIAAgtIAbAAQAcgBATAVQAKAKAFALQAFAMAAAOQAAAOgFAMQgFALgKALQgTAUgcAAgAJhhfIAtAAIAABYIgtAtgApvgtQgLgGgNgDIAAgtQANABAbAKQAUAKAOAOIgiAfQgHgHgJgFgAgrgyIAAgtIBeAAIAAAtgAoTgyIAAgtICOAAIAAAtgAKyiIIA+AAIg+BAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ52, new cjs.Rectangle(-77.9,-13.6,156,27.3), null);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AB1hxIAuAAIAAB5IB9h+IAABBIirCsgAMqBYQghgegFgvIAuAAQACANAGALQAFALAKAJQAKAJANAFQAMAFAPAAQAdgBAUgSQAKgKAGgLQAFgKABgNIAvAAQAAAWgJAUQgJATgSAPQgkAgguAAQgvAAgigfgAHdBJQALgCAKgFQALgGAIgIIAiAfQgOAOgTAKQgWAMgTAAgAF2BQQgdghAAgvQAAgYAIgTQAHgVAOgPQAPgRAUgJQATgJAYgDIAAAtQgZAFgRASQgJAKgFAMQgEANAAAOQAAAfARATQAIAIALAHQAKAFAOADIAAAuQgxgHgdgggAloBYQgigegFgvIAvAAQABANAGALQAGALAKAJQAKAJAMAFQAMAFAPAAQAdgBAUgSQALgKAFgLQAGgKABgNIAuAAQAAAWgJAUQgJATgSAPQgjAggvAAQgvAAghgfgARzByIAAgtIAZAAQALAAAGgIQAHgHAAgMQAMAAAMgIQANgIAHgKQAEALAAANQAAAPgFANQgFAMgKAMQgKALgNAGQgMAFgPAAgAQtByIAAjjIAuAAIAADjgAKCByIAAidIAtAAIAACdgADzByIAAhYIAtgtIAACFgAhlByIAAjjIAtAAIAADjgApaByIAAjjIAtAAIAADjgAsiByIAAjjIAtAAIAADjgAvGByIAAgtIBeAAIAAAtgAwMByIAAjjIAtAAIAADjgAyiByIAAidIAtAAIAACdgARzAXIAAgtIAbAAQAIAAAHgHQAHgHAAgJQAAgIgHgHQgHgIgIABIgbAAIAAguIAbAAQAOAAALAFQAMAFAKAKQAUAVAAAbQAAAOgFAMQgFAMgKAJQgTAVgcAAgAgfAXIAAgtIAaAAQAHAAAHgHQAHgHAAgJQAAgIgHgHQgHgIgHABIgaAAIAAguIAaAAQAbAAAUAUQAKALAFALQAFAMAAAOQAAAOgFAMQgFAMgKAJQgUAVgbAAgAoVAXIAAgtIAbAAQAIAAAHgHQAHgHAAgJQAAgIgHgHQgHgIgIABIgbAAIAAguIAbAAQAcAAATAUQAKALAFALQAFAMAAAOQAAAOgFAMQgFAMgKAJQgTAVgcAAgArcAXIAAgtIAaAAQAIAAAHgHQAHgHAAgJQAAgIgHgHQgHgIgIABIgaAAIAAguIAaAAQAcAAAUAUQAKALAFALQAFAMAAAOQAAAOgFAMQgFAMgKAJQgUAVgcAAgAvGAXIAAgtIBeAAIAAAtgAPCgLQgDgagUgSQgTgSgdAAQgdAAgUASQgTASgFAaIguAAQAFgvAhgdQAhgfAwAAQAXAAAVAIQAVAHARAQQAkAfAAAtgAjQgLQgEgagTgSQgUgSgdAAQgcAAgUASQgUASgEAaIgvAAQAFgvAhgdQAhgfAwAAQAYAAAUAIQAVAHASAQQAjAfAAAtgAH1g/QgLgFgNgEIAAgtQANACAbAKQAUAJAOAOIgiAgQgHgIgJgFgAJRhDIAAguICOAAIAAAugAvGhDIAAguIBeAAIAAAugAzThDIAAguICOAAIAAAug");
	this.shape.setTransform(10.1,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ48, new cjs.Rectangle(-113.5,-11.9,247.3,23.8), null);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AGLhxIAuAAIAAB5IB9h+IAABBIirCsgAIJByIAAhYIAtgtIAACFgACwByIAAjjIAtAAIAADjgAAPByIAAgtIBfAAIAAAtgAg2ByIAAjjIAtAAIAADjgAjWByIAAgtIAcAAQAHAAAHgIQAHgHAAgIQAAgJgHgHQgHgIgHABIgcAAIAAgtIAbAAQAOAAALAGQAMAEALALQATATAAAcQAAANgEAMQgGAMgJALQgUAUgcAAgAkbByIAAjjIAtAAIAADjgAn9ByIB0jjIAyAAIh0DjgAD2AXIAAgtIAbAAQAHAAAHgHQAIgHgBgJQABgIgIgHQgHgIgHABIgbAAIAAguIAbAAQAbAAAUAUQAKALAFALQAFAMAAAOQAAAOgFAMQgFAMgKAJQgUAVgbAAgAAPAXIAAgtIBfAAIAAAtgAo1hxIA1AAIAuBZIgYAugAAPhDIAAguIBfAAIAAAugAjWhDIAAguIBOAAIAAAug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ47, new cjs.Rectangle(-56.6,-11.9,113.3,23.8), null);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AGLhxIAuAAIAAB5IB9h+IAABBIirCsgAIJByIAAhYIAtgtIAACFgACwByIAAjjIAtAAIAADjgAAPByIAAgtIBfAAIAAAtgAg2ByIAAjjIAtAAIAADjgAjWByIAAgtIAcAAQAHAAAHgIQAHgHAAgIQAAgJgHgHQgHgIgHABIgcAAIAAgtIAbAAQAOAAALAGQAMAEALALQATATAAAcQAAANgEAMQgGAMgJALQgUAUgcAAgAkbByIAAjjIAtAAIAADjgAn9ByIB0jjIAyAAIh0DjgAD2AXIAAgtIAbAAQAHAAAHgHQAIgHgBgJQABgIgIgHQgHgIgHABIgbAAIAAguIAbAAQAbAAAUAUQAKALAFALQAFAMAAAOQAAAOgFAMQgFAMgKAJQgUAVgbAAgAAPAXIAAgtIBfAAIAAAtgAo1hxIA1AAIAuBZIgYAugAAPhDIAAguIBfAAIAAAugAjWhDIAAguIBOAAIAAAug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ46, new cjs.Rectangle(-56.6,-11.9,113.3,23.8), null);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AB2hxIAtAAIAAB6IB+h/IAABBIirCsgAvHB3IAAgtIBfAAIAAAtgAwMB3IAAjjIAtAAIAADjgAyjB3IAAidIAtAAIAACdgAMrBYQgigegFgvIAvAAQABANAGALQAGALAKAJQAKAJAMAFQAMAEAPAAQAdAAAUgSQALgJAFgLQAGgLABgNIAuAAQAAAWgJAUQgJATgSAQQgjAegvAAQgvAAghgegAHdBJQAMgCAKgGQAKgFAIgHIAiAeQgOAOgSAKQgWALgUAAgAF3BQQgdggAAgwQAAgXAHgVQAHgTAPgRQAOgQAUgJQAUgJAYgCIAAAtQgZAEgRASQgKAKgEANQgFAMAAAOQAAAfARATQAIAJALAFQALAGAOADIAAAtQgygFgcghgAloBYQghgegFgvIAuAAQACANAGALQAFALAKAJQAKAJANAFQAMAEAPAAQAdAAAUgSQAKgJAGgLQAFgLABgNIAvAAQAAAWgJAUQgJATgSAQQgkAeguAAQgvAAgigegARzByIAAgtIAaAAQALAAAGgHQAGgIAAgLQAMAAANgJQANgIAGgKQAFALAAANQAAAPgFANQgFANgKALQgLALgMAFQgNAGgPAAgAQuByIAAjjIAtAAIAADjgAKCByIAAieIAtAAIAACegADzByIAAhYIAugsIAACEgAhkByIAAjjIAtAAIAADjgApaByIAAjjIAtAAIAADjgAsjByIAAjjIAtAAIAADjgAvHAcIAAgtIBfAAIAAAtgARzAWIAAgsIAcAAQAIABAHgIQAGgHAAgJQAAgIgGgIQgHgGgIgBIgcAAIAAgtIAbAAQAOAAAMAFQAMAGAKAKQAUATAAAcQAAAOgFAMQgFAMgKAJQgUAUgcAAgAgfAWIAAgsIAbAAQAHABAHgIQAHgHAAgJQAAgIgHgIQgHgGgHgBIgbAAIAAgtIAbAAQAbAAATAVQAKAKAFALQAFAMAAAOQAAAOgFAMQgFAMgKAJQgTAUgbAAgAoUAWIAAgsIAaAAQAIABAHgIQAHgHAAgJQAAgIgHgIQgHgGgIgBIgaAAIAAgtIAaAAQAcAAAUAVQAKAKAFALQAFAMAAAOQAAAOgFAMQgFAMgKAJQgUAUgcAAgAreAWIAAgsIAbAAQAIABAHgIQAHgHAAgJQAAgIgHgIQgHgGgIgBIgbAAIAAgtIAbAAQAcAAATAVQAKAKAFALQAFAMAAAOQAAAOgFAMQgFAMgKAJQgTAUgcAAgAPDgLQgEgagTgRQgUgTgdABQgcgBgUATQgUARgEAaIgvAAQAFguAhgfQAhgeAwAAQAYAAAUAIQAVAIASAPQAjAfAAAtgAjQgLQgDgagUgRQgTgTgdABQgdgBgUATQgTARgFAaIguAAQAFguAhgfQAhgeAwAAQAXAAAVAIQAVAIARAPQAkAfAAAtgAH1g+QgLgHgNgCIAAgtQAOAAAaAKQAUAKAOAPIgiAeQgHgHgJgEgAvHg+IAAguIBfAAIAAAugAzUg+IAAguICPAAIAAAugAJRhEIAAgtICPAAIAAAtg");
	this.shape.setTransform(10.2,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ45, new cjs.Rectangle(-113.5,-12.4,247.4,23.8), null);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shot();
	this.instance.parent = this;
	this.instance.setTransform(-7.4,-7.4,0.643,0.643);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.4,-7.4,14.8,14.8);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Eg0zAZgMAAAgy/MBpnAAAMAAAAy/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ40, new cjs.Rectangle(-338,-163.2,676,326.4), null);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9933").s().p("AgeAAIA9gnIAABPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ38, new cjs.Rectangle(-3,-4,6.2,8.1), null);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgeAAIA9gnIAABPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ37, new cjs.Rectangle(-3,-4,6.2,8.1), null);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shot();
	this.instance.parent = this;
	this.instance.setTransform(-4.3,-4.3,0.378,0.378);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ31, new cjs.Rectangle(-4.3,-4.3,8.7,8.7), null);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ter();
	this.instance.parent = this;
	this.instance.setTransform(-6.5,-19);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ30, new cjs.Rectangle(-6.5,-19,13,38), null);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ter();
	this.instance.parent = this;
	this.instance.setTransform(-6.5,-19);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ27, new cjs.Rectangle(-6.5,-19,13,38), null);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ter();
	this.instance.parent = this;
	this.instance.setTransform(-6.5,-19);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ26, new cjs.Rectangle(-6.5,-19,13,38), null);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AC0BZQgigegFgvIAvAAQADAaAUASQAKAJAMAEQAMAFAPAAQAdAAAUgTQALgKAFgKQAGgLABgMIAuAAQAAAXgJATQgJATgSAPQgRAPgVAIQgUAIgYAAQgvAAghgegAAzByIAAiOIgOAMIAAg4IA7guIAADogAjeByIibjjIA3AAICbDjgAl5ByIA/hdIAcApIgkA0gAFMgLQgEgagTgRQgUgSgdAAQgcAAgUARQgKAJgGALQgGALgCANIgvAAQAFguAhgeQAhgfAwAAQAYAAAUAIQAVAIASAPQAjAfAAAtgAkCg8IAkg1IA3AAIg/Beg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ23, new cjs.Rectangle(-37.8,-11.8,75.7,23.8), null);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AC0BZQgigegFgvIAvAAQADAaAUASQAKAJAMAEQAMAFAPAAQAdAAAUgTQALgKAFgKQAGgLABgMIAuAAQAAAXgJATQgJATgSAPQgRAPgVAIQgUAIgYAAQgvAAghgegAAzByIAAiOIgOAMIAAg4IA7guIAADogAjeByIibjjIA3AAICbDjgAl5ByIA/hdIAcApIgkA0gAFMgLQgEgagTgRQgUgSgdAAQgcAAgUARQgKAJgGALQgGALgCANIgvAAQAFguAhgeQAhgfAwAAQAYAAAUAIQAVAIASAPQAjAfAAAtgAkCg8IAkg1IA3AAIg/Beg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(-37.8,-11.8,75.7,23.8), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.patr();
	this.instance.parent = this;
	this.instance.setTransform(-6.5,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(-6.5,-35,13,70), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhljAwaMAAAhgzMDLHAAAMAAABgzgAqCp+QkHEHAAF1QAAF0EHEIQEIEHF1AAQF0AAEIkHQEHkIAAl0QAAl1kHkHQkIkIl0AAQl1AAkIEIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(-650,-309.7,1300,619.6), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiUCMQg1hHAChYQADhaAygxQAygzBXAAQBWAAA+A9QA9A+AABWQAABXg9A9Qg+A+hWAAQhXAAg0hGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(-20,-21,40,42), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.snip();
	this.instance.parent = this;
	this.instance.setTransform(-128,-86.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(-128,-86.5,256,173), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(-687.5,-310);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(-687.5,-310,1375,620), null);


(lib.Символ60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ59();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ60, new cjs.Rectangle(-112,-112,224,224), null);


(lib.Символ57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ58();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ60();
	this.instance_1.parent = this;
	this.instance_1.setTransform(33,-18);
	this.instance_1.alpha = 0.52;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 3
	this.instance_2 = new lib.Символ61();
	this.instance_2.parent = this;
	this.instance_2.setTransform(33,-18);
	this.instance_2.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ57, new cjs.Rectangle(-195,-171,389.5,682.7), null);


(lib.Символ54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ52();
	this.instance.parent = this;
	this.instance.setTransform(0,-0.4);

	this.instance_1 = new lib.Символ53();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0.4);
	this.instance_1.filters = [new cjs.BlurFilter(3, 3, 1)];
	this.instance_1.cache(-80,-16,160,31);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ54, new cjs.Rectangle(-79.9,-15.2,163,35), null);


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ47();
	this.instance.parent = this;
	this.instance.setTransform(0,-1);

	this.instance_1 = new lib.Символ46();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,1);
	this.instance_1.filters = [new cjs.BlurFilter(3, 3, 1)];
	this.instance_1.cache(-59,-14,117,28);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ50, new cjs.Rectangle(-58.6,-12.9,120,30), null);


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ48();
	this.instance.parent = this;
	this.instance.setTransform(0,-1);

	this.instance_1 = new lib.Символ45();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,1);
	this.instance_1.filters = [new cjs.BlurFilter(3, 3, 1)];
	this.instance_1.cache(-115,-14,251,28);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ49, new cjs.Rectangle(-115.5,-13.4,254,31), null);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 50
	this.instance = new lib.Символ50();
	this.instance.parent = this;
	this.instance.setTransform(-180.9,-11.8,1.48,1.48,0,0,0,-56.7,-12.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-56.8,scaleX:1.06,scaleY:1.06,x:-181},8,cjs.Ease.get(-1)).to({regX:-56.7,scaleX:0.53,scaleY:0.53,x:-180.9},10,cjs.Ease.get(1)).to({scaleX:0.98,scaleY:0.98,x:-181},9,cjs.Ease.get(-1)).to({scaleX:1.48,scaleY:1.48,x:-180.9},10,cjs.Ease.get(1)).wait(1));

	// Символ 49
	this.instance_1 = new lib.Символ49();
	this.instance_1.parent = this;
	this.instance_1.setTransform(180.9,-12,0.776,0.776,0,0,0,113.5,-13);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1},8,cjs.Ease.get(-1)).to({regY:-12.8,scaleX:1.28,scaleY:1.28,y:-11.7},10,cjs.Ease.get(1)).to({scaleX:1.04,scaleY:1.04,y:-11.9},9,cjs.Ease.get(-1)).to({regY:-13,scaleX:0.78,scaleY:0.78,y:-12},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-182.8,-12.7,385.5,44.8);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 - копия
	this.instance = new lib.Символ40();
	this.instance.parent = this;
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(58).to({_off:false},0).to({alpha:0.301},2).to({alpha:0},3).wait(1));

	// Слой 1 - копия
	this.instance_1 = new lib.Символ40();
	this.instance_1.parent = this;
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(54).to({_off:false},0).to({alpha:0.301},2).to({alpha:0},3).to({_off:true},1).wait(4));

	// Слой 2
	this.instance_2 = new lib.Символ40();
	this.instance_2.parent = this;
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(38).to({_off:false},0).to({alpha:0.301},2).to({alpha:0},3).to({_off:true},1).wait(20));

	// Слой 1
	this.instance_3 = new lib.Символ40();
	this.instance_3.parent = this;
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(34).to({_off:false},0).to({alpha:0.301},2).to({alpha:0},3).to({_off:true},1).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ37();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ38();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.2,0,1.198,1.198);
	this.instance_1.alpha = 0.75;
	this.instance_1.filters = [new cjs.BlurFilter(2, 2, 1)];
	this.instance_1.cache(-5,-6,10,12);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ35, new cjs.Rectangle(-4.8,-5.9,12,14), null);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ26();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ29, new cjs.Rectangle(-6.5,-19,13,38), null);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 8
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AgGARQgCgIAAgJQAAgIACgIQADgHADAAQAEAAACAHQAEAIAAAIQAAAJgEAIQgCAHgEAAQgDAAgDgHg");
	this.shape.setTransform(-6.2,-7.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("AAAAiQgGgBgEgMQgFgMAAgOIAAgBQAAgLADgKIAAADIgBAFIARAIIAAgCQACAAACgHQACgEABgJIACABIABAEQACALAAAIIAAAJQgBAKgDAIIgCAHQgEAHgEACIgCAAIAAAAg");
	this.shape_1.setTransform(-6.7,90.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFDD55").s().p("AgMAaIABgFIAAgDIADgWQACgLAEgFQACgHADAAQADgIACADQAGAZgBAQIgBADQgBAJgCAEQgCAGgCABIAAACIgRgIg");
	this.shape_2.setTransform(-6.8,85.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC00").s().p("AgBAtQgIgBgHgQQgFgRAAgUQAAgTAEgPIAAAAIgBAGIAhAEIAAgJIAAgCIAFAAIAAAFIACAcIAAALQgCAPgEAMIgDAIQgFAKgIAAIgBAAg");
	this.shape_3.setTransform(-7.2,187.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFEEAA").s().p("AgRA1IACgFIAAgCIADglIAEgXIAGgWQAEgWADABQALAjACAaIgBAXIgBATIAAADIAAAJIghgFg");
	this.shape_4.setTransform(-7.3,178);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgZBSIADgKQALiVALgEQAMgEAIBaIAFBNg");
	this.shape_5.setTransform(-7.5,270.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFCC00").s().p("AgUAiQgIgVAAgbQAAgXAFgTIAyAAIACAqQAAAbgJAVQgIAXgMAAQgLAAgJgXg");
	this.shape_6.setTransform(-7.7,284.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},30).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).to({state:[]},1).wait(11));

	// Слой 7
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFCC00").s().p("AgGARQgCgIAAgJQAAgIACgIQADgHADAAQAEAAACAHQAEAIAAAIQAAAJgEAIQgCAHgEAAQgDAAgDgHg");
	this.shape_7.setTransform(-6.2,-7.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFCC00").s().p("AAAAhQgGAAgFgMQgEgMAAgOIAAgBQAAgMADgLIAAAFIgBAFIARAIIAAgCQACgBACgGIADgNIACABIAAADIADAUIAAAJQgBAKgDAIIgCAGQgEAIgFABIgBABIAAgBg");
	this.shape_8.setTransform(-4.3,90.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFDD55").s().p("AgMAaIABgFIAAgFIAAgBIADgTQACgLADgFQADgHACAAQADgIADADQAFAZAAAQIgBADIgDANQgCAGgCABIAAACIgRgIg");
	this.shape_9.setTransform(-4.4,85.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFCC00").s().p("AgBAtQgIgBgGgQQgGgRAAgUQAAgTAEgPIgBAGIAiAEIgBgJIAAgCIAFAAIABAFIABAcQABAHgBAEQgBAPgFAMIgDAIQgFAKgHAAIgCAAg");
	this.shape_10.setTransform(-2.4,187.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFEEAA").s().p("AgRA1IABgFIABgCIADglIAFgXIAFgWQAEgWAEABQAKAjACAaIgBAXIgBATIAAADIABAJIgigFg");
	this.shape_11.setTransform(-2.5,178);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgYBSIACgKQALiVAMgEQAMgEAHBaIAGBNg");
	this.shape_12.setTransform(-0.2,270.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFCC00").s().p("AgUAiQgIgVAAgbQAAgXAFgTIAyAAIACAqQAAAbgJAVQgIAXgMAAQgLAAgJgXg");
	this.shape_13.setTransform(-0.4,284.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_7}]},29).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[]},1).wait(12));

	// Слой 6
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFCC00").s().p("AgGARQgCgIAAgJQAAgIACgIQADgHADAAQAEAAACAHQAEAIAAAIQAAAJgEAIQgCAHgEAAQgDAAgDgHg");
	this.shape_14.setTransform(-6.2,-7.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFCC00").s().p("AAAAhQgGAAgFgMQgEgMAAgOIAAgBQAAgNADgLIAAAGIgBAFIARAIIAAgCQACgBACgGIADgNIACABIAAADIADAUIAAAJQgBAKgDAIIgCAGQgEAIgFABIgBABIAAgBg");
	this.shape_15.setTransform(-7.2,90.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFDD55").s().p("AgMAaIABgFIAAgGIADgTQACgLADgFQADgHACAAQADgIADADQAFAZAAAQIgBADIgDANQgCAGgCABIAAACIgRgIg");
	this.shape_16.setTransform(-7.3,85.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFCC00").s().p("AgBAtQgIgBgGgQQgGgRAAgUQAAgTAEgPIgBAGIAiAEIgBgJIAAgCIAFAAIABAFIABAcQABAHgBAEQgBAPgFAMIgDAIQgFAKgHAAIgCAAg");
	this.shape_17.setTransform(-8.2,187.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFEEAA").s().p("AgRA1IABgFIABgCIADglIAFgXIAFgWQAEgWAEABQAKAjACAaIgBAXIAAATIgBADIABAJIgigFg");
	this.shape_18.setTransform(-8.3,178);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgZBSIADgKQALiVALgEQAMgEAIBaIAGBNg");
	this.shape_19.setTransform(-8.9,270.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFCC00").s().p("AgUAiQgIgVAAgbQAAgXAFgTIAyAAIACAqQAAAbgJAVQgIAXgMAAQgLAAgJgXg");
	this.shape_20.setTransform(-9.1,284.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_14}]},27).to({state:[{t:this.shape_16},{t:this.shape_15}]},1).to({state:[{t:this.shape_18},{t:this.shape_17}]},1).to({state:[{t:this.shape_20},{t:this.shape_19}]},1).to({state:[]},1).wait(14));

	// Слой 5
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFCC00").s().p("AgGARQgCgIAAgJQAAgIACgIQADgHADAAQAEAAACAHQAEAIAAAIQAAAJgEAIQgCAHgEAAQgDAAgDgHg");
	this.shape_21.setTransform(-6.2,-7.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFCC00").s().p("AAAAhQgGAAgFgMQgEgMAAgOIAAgBQAAgLADgKIAAADIgBAFIARAIIAAgCQACgBACgGQACgEABgJIACABIABADIACAUIAAAJQgBAKgDAIIgCAGQgEAIgFABIgBABIAAgBg");
	this.shape_22.setTransform(-4.8,90.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFDD55").s().p("AgMAaIABgFIAAgDIADgWQACgLADgFQADgHACAAQAEgIACADQAFAZAAAQIgBADQgBAJgCAEQgCAGgCABIAAACIgRgIg");
	this.shape_23.setTransform(-4.9,85.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFCC00").s().p("AgBAtQgIgBgGgQQgGgRAAgUQAAgTAEgPIAAAAIgBAGIAiAEIgBgJIABgCIAEAAIAAAFIACAcIAAALQgCAPgEAMIgDAIQgFAKgHAAIgCAAg");
	this.shape_24.setTransform(-3.3,187.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFEEAA").s().p("AgRA1IABgFIABgCIADglIAFgXIAFgWQADgWAFABQAKAjACAaIgBAXIAAATIgBADIABAJIgigFg");
	this.shape_25.setTransform(-3.4,178);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgYBSIACgKQALiVAMgEQAMgEAHBaIAFBNg");
	this.shape_26.setTransform(-1.7,270.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFCC00").s().p("AgUAiQgIgVAAgbQAAgXAFgTIAyAAIACAqQAAAbgJAVQgIAXgMAAQgLAAgJgXg");
	this.shape_27.setTransform(-1.9,284.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_21}]},25).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[]},1).wait(16));

	// Слой 4
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFCC00").s().p("AgGARQgCgIAAgJQAAgIACgIQADgHADAAQAEAAACAHQAEAIAAAIQAAAJgEAIQgCAHgEAAQgDAAgDgHg");
	this.shape_28.setTransform(-6.2,-7.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFCC00").s().p("AAAAiQgGgBgEgMQgFgMAAgOIAAgBQAAgLADgKIAAADIgBAFIARAIIAAgCQACAAACgHQACgEABgJIACABIABAEQACALAAAIIAAAJQgBAKgDAIIgCAHQgEAHgEACIgCAAIAAAAg");
	this.shape_29.setTransform(-8.2,90.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFDD55").s().p("AgMAaIABgFIAAgDIADgWQACgLAEgFQACgHADAAQADgIACADQAGAZgBAQIgBADQgBAJgCAEQgCAGgCABIAAACIgRgIg");
	this.shape_30.setTransform(-8.3,85.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFEEAA").s().p("AgRA1IABgFIABgCIAEglIADgXIAGgWQADgWAFABQAKAjACAaIgBAXIgBATIAAADIAAAJIghgFg");
	this.shape_31.setTransform(-10.2,178);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFCC00").s().p("AgBAtQgIgBgHgQQgFgRAAgUQAAgTAEgPIAAAAIgBAGIAhAEIAAgJIAAgCIAFAAIAAAFIACAcIAAALQgCAPgEAMIgDAIQgFAKgIAAIgBAAg");
	this.shape_32.setTransform(-10.1,187.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgZBSIADgKQALiVAMgEQAMgEAHBaIAGBNg");
	this.shape_33.setTransform(-11.8,270.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFCC00").s().p("AgUAiQgIgVAAgbQAAgXAFgTIAyAAIACAqQAAAbgJAVQgIAXgMAAQgLAAgJgXg");
	this.shape_34.setTransform(-12,284.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_28}]},23).to({state:[{t:this.shape_30},{t:this.shape_29}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_34},{t:this.shape_33}]},1).to({state:[]},1).wait(18));

	// Слой 3
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFCC00").s().p("AgGARQgCgIAAgJQAAgIACgIQADgHADAAQAEAAACAHQAEAIAAAIQAAAJgEAIQgCAHgEAAQgDAAgDgHg");
	this.shape_35.setTransform(-6.2,-7.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFCC00").s().p("AAAAhQgGAAgFgMQgEgMAAgOIAAgBQAAgLADgKIAAADIgBAFIARAIIAAgCQACgBACgGQACgEABgJIACABIABADIACAUIAAAJQgBAKgDAIIgCAGQgEAIgFABIgBABIAAgBg");
	this.shape_36.setTransform(-6.2,90.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFDD55").s().p("AgMAaIABgFIAAgDIADgWQACgLADgFQADgHACAAQAEgIACADQAFAZAAAQIgBADQgBAJgCAEQgCAGgCABIAAACIgRgIg");
	this.shape_37.setTransform(-6.3,85.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFCC00").s().p("AgBAtQgIgBgGgQQgGgRAAgUQAAgTAEgPIAAAAIgBAGIAiAEIgBgJIABgCIAEAAIAAAFIACAcIAAALQgCAPgEAMIgDAIQgFAKgHAAIgCAAg");
	this.shape_38.setTransform(-6.2,187.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFEEAA").s().p("AgRA1IABgFIABgCIADglIAFgXIAFgWQADgWAFABQAKAjACAaIgBAXIAAATIgBADIABAJIgigFg");
	this.shape_39.setTransform(-6.3,178);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgYBSIACgKQALiVAMgEQAMgEAHBaIAFBNg");
	this.shape_40.setTransform(-6.1,270.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFCC00").s().p("AgUAiQgIgVAAgbQAAgXAFgTIAyAAIACAqQAAAbgJAVQgIAXgMAAQgLAAgJgXg");
	this.shape_41.setTransform(-6.2,284.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_35}]},21).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[]},1).wait(20));

	// Слой 2
	this.instance = new lib.Символ41();
	this.instance.parent = this;
	this.instance.setTransform(-6,-8.8);
	this.instance._off = true;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(19));

	// Слой 1
	this.instance_1 = new lib.Символ27();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15).to({scaleY:1,skewX:-2.6,x:-0.8},0).wait(1).to({scaleY:1,skewX:0,x:0},0).wait(1).to({scaleY:1,skewX:-2.6,x:-0.8},0).wait(1).to({scaleY:1,skewX:0,x:0},0).wait(1).to({scaleY:1,skewX:-2.6,x:-0.8},0).wait(1).to({scaleY:1,skewX:0,x:0},0).wait(1).to({scaleY:1,skewX:-2.6,x:-0.8},0).wait(1).to({scaleY:1,skewX:0,x:0},0).wait(1).to({scaleY:1,skewX:-2.6,x:-0.8},0).wait(1).to({scaleY:1,skewX:0,x:0},0).wait(1).to({scaleY:1,skewX:-2.6,x:-0.8},0).wait(1).to({scaleY:1,skewX:0,x:0},0).wait(19));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.5,-19,13,38);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4 - копия: 2 - копия
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFCC00").ss(1,1,1).p("AgBgIQAEAUgCgD");
	this.shape.setTransform(1,-2.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFCC00").ss(2.3,1,1).p("AgEALQgBAIAFgRQADgDACgL");
	this.shape_1.setTransform(-7.1,55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFCC00").ss(3.5,1,1).p("AgHAhQgEAKAKgnQAFgQAFgW");
	this.shape_2.setTransform(-15.2,112.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFCC00").ss(4.8,1,1).p("AgJA2QgHAMAOg7QAHggAIge");
	this.shape_3.setTransform(-23.3,170);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFCC00").ss(6,1,1).p("AAIgqQgDAJgBAIQgRBQAKgO");
	this.shape_4.setTransform(-32.3,231);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(6,1,1).p("AAIgjQgJApgHAe");
	this.shape_5.setTransform(-30.6,223.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},15).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[]},1).wait(30));

	// Слой 4 - копия: 2
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFCC00").ss(1,1,1).p("AgBgIQAEAUgCgD");
	this.shape_6.setTransform(1,-2.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFD940").ss(2.3,1,1).p("AgEALQgBAIAFgRQAEgDABgL");
	this.shape_7.setTransform(-1.5,55);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFE680").ss(3.5,1,1).p("AgHAhQgEAKAKgnQAFgQAFgW");
	this.shape_8.setTransform(-3.9,112.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFF2BF").ss(4.8,1,1).p("AgJA2QgHAMANg7QAIggAHge");
	this.shape_9.setTransform(-6.4,170);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFCC00").ss(6,1,1).p("AAIgqQgDAJgBAIQgRBQAKgO");
	this.shape_10.setTransform(-9.8,231);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(6,1,1).p("AAJgjQgKApgGAe");
	this.shape_11.setTransform(-8.1,223.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_6}]},13).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[]},1).wait(32));

	// Слой 4 - копия
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFCC00").ss(1,1,1).p("AgBgIQAEAUgCgD");
	this.shape_12.setTransform(1,-2.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFCC00").ss(2.3,1,1).p("AgEALQgBAIAFgRQAEgDABgL");
	this.shape_13.setTransform(-6.2,55);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFCC00").ss(3.5,1,1).p("AgGAhQgFAKAKgnQAFgQAFgW");
	this.shape_14.setTransform(-13.3,112.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFCC00").ss(4.8,1,1).p("AgJA2QgHAMANg7QAIggAHge");
	this.shape_15.setTransform(-20.5,170);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFCC00").ss(6,1,1).p("AAIgqQgDAJgBAIQgRBQAKgO");
	this.shape_16.setTransform(-28.5,231);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(6,1,1).p("AAIgjQgJApgHAe");
	this.shape_17.setTransform(-26.9,223.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_12}]},11).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[]},1).wait(34));

	// Слой 4
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFCC00").ss(1,1,1).p("AgBgIQAEAUgCgD");
	this.shape_18.setTransform(1,-2.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFD940").ss(2.3,1,1).p("AgEALQgBAIAFgRQAEgDABgL");
	this.shape_19.setTransform(-4.3,55);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFE680").ss(3.5,1,1).p("AgGAhQgFAKAKgnQAFgQAFgW");
	this.shape_20.setTransform(-9.6,112.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFF2BF").ss(4.8,1,1).p("AgJA2QgHAMAOg7QAHggAIge");
	this.shape_21.setTransform(-14.9,170);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFCC00").ss(6,1,1).p("AAIgqQgCAJgCAIQgRBQAKgO");
	this.shape_22.setTransform(-21,231);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFFFFF").ss(6,1,1).p("AAJgjQgKApgHAe");
	this.shape_23.setTransform(-19.4,223.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_18}]},9).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[]},1).wait(36));

	// Слой 3
	this.instance = new lib.Символ31();
	this.instance.parent = this;
	this.instance.setTransform(-0.6,-3.6,1.379,1.379);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(42));

	// Слой 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgaDhIAHjdIhnAAIAAjpID1AAIAAHLg");
	mask.setTransform(4,1.7);

	// Слой 2
	this.instance_1 = new lib.Символ30();
	this.instance_1.parent = this;
	this.instance_1.setTransform(2.2,3.7,0.746,0.746);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({skewX:0.8,x:2.4},0).wait(1).to({skewX:0,x:2.2},0).wait(1).to({skewX:0.8,x:2.4},0).wait(1).to({skewX:0,x:2.2},0).wait(1).to({skewX:0.8,x:2.4},0).wait(1).to({skewX:0,x:2.2},0).wait(1).to({skewX:0.8,x:2.4},0).wait(1).to({skewX:0,x:2.2},0).wait(42));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.7,-10.5,9.7,28.4);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ22();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ23();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ21, new cjs.Rectangle(-37.8,-11.8,75.7,24.5), null);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 18
	this.instance = new lib.Символ18();
	this.instance.parent = this;
	this.instance.setTransform(53.9,0,1,1,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({y:-8},6,cjs.Ease.get(1)).to({y:0},7,cjs.Ease.get(1)).wait(18));

	// Символ 18
	this.instance_1 = new lib.Символ18();
	this.instance_1.parent = this;
	this.instance_1.setTransform(30.8,0,1,1,30);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({y:-8},6,cjs.Ease.get(1)).to({y:0},7,cjs.Ease.get(1)).wait(22));

	// Символ 18
	this.instance_2 = new lib.Символ18();
	this.instance_2.parent = this;
	this.instance_2.setTransform(7.6,0,1,1,30);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({y:-8},6,cjs.Ease.get(1)).to({y:0},7,cjs.Ease.get(1)).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.5,-33.5,92.6,67.1);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ57();
	this.instance.parent = this;
	this.instance.setTransform(-31.2,18.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ17();
	this.instance_1.parent = this;
	this.instance_1.alpha = 0.48;
	this.instance_1.filters = [new cjs.BlurFilter(7, 7, 1)];
	this.instance_1.cache(-652,-312,1304,624);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(-654,-313.7,1312,844.2), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AkwFLIFWrBIC9BbIlWLCgAmREcIFXrCIA6AdIlXLBg");
	var mask_graphics_1 = new cjs.Graphics().p("AkYFLIFXrBIC9BbIlXLCgAl5EcIFYrCIA5AdIlXLBg");
	var mask_graphics_2 = new cjs.Graphics().p("AkAFLIFXrBIC9BbIlXLCgAlhEcIFYrCIA5AdIlWLBg");
	var mask_graphics_3 = new cjs.Graphics().p("AjnFLIFWrBIC9BbIlXLCgAlJEcIFXrCIA7AdIlXLBg");
	var mask_graphics_4 = new cjs.Graphics().p("AjZFLIFXrBIC9BbIlXLCgAk6EcIFXrCIA6AdIlWLBg");
	var mask_graphics_5 = new cjs.Graphics().p("AjZFLIFXrBIC9BbIlXLCgAk6EcIFXrCIA6AdIlWLBg");
	var mask_graphics_6 = new cjs.Graphics().p("AjZFLIFXrBIC9BbIlXLCgAk6EcIFXrCIA6AdIlWLBg");
	var mask_graphics_7 = new cjs.Graphics().p("AjZFLIFXrBIC9BbIlXLCgAk6EcIFXrCIA6AdIlWLBg");
	var mask_graphics_8 = new cjs.Graphics().p("AjZFLIFXrBIC9BbIlXLCgAk6EcIFXrCIA6AdIlWLBg");
	var mask_graphics_9 = new cjs.Graphics().p("AjZFLIFXrBIC9BbIlXLCgAk6EcIFXrCIA6AdIlWLBg");
	var mask_graphics_10 = new cjs.Graphics().p("AjZFLIFXrBIC9BbIlXLCgAk6EcIFXrCIA6AdIlWLBg");
	var mask_graphics_11 = new cjs.Graphics().p("AjZFLIFXrBIC9BbIlXLCgAk6EcIFXrCIA6AdIlWLBg");
	var mask_graphics_12 = new cjs.Graphics().p("AjZFLIFXrBIC9BbIlXLCgAk6EcIFXrCIA6AdIlWLBg");
	var mask_graphics_13 = new cjs.Graphics().p("AjZFLIFXrBIC9BbIlXLCgAk6EcIFXrCIA6AdIlWLBg");
	var mask_graphics_14 = new cjs.Graphics().p("AjZFLIFXrBIC9BbIlXLCgAk6EcIFXrCIA6AdIlWLBg");
	var mask_graphics_15 = new cjs.Graphics().p("AjZFLIFXrBIC9BbIlXLCgAk6EcIFXrCIA6AdIlWLBg");
	var mask_graphics_16 = new cjs.Graphics().p("AjZFLIFXrBIC9BbIlXLCgAk6EcIFXrCIA6AdIlWLBg");
	var mask_graphics_17 = new cjs.Graphics().p("AjPFLIFXrBIC9BbIlXLCgAkwEcIFXrCIA6AdIlWLBg");
	var mask_graphics_18 = new cjs.Graphics().p("Ai3FLIFXrBIC9BbIlYLCgAkYEcIFXrCIA6AdIlWLBg");
	var mask_graphics_19 = new cjs.Graphics().p("AieFLIFWrBIC9BbIlXLCgAj/EcIFWrCIA7AdIlXLBg");
	var mask_graphics_20 = new cjs.Graphics().p("AiGFLIFXrBIC8BbIlXLCgAjnEcIFXrCIA6AdIlXLBg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-40.2,y:-4.5}).wait(1).to({graphics:mask_graphics_1,x:-37.8,y:-4.2}).wait(1).to({graphics:mask_graphics_2,x:-35.4,y:-3.9}).wait(1).to({graphics:mask_graphics_3,x:-33,y:-3.6}).wait(1).to({graphics:mask_graphics_4,x:-29.6,y:-3.4}).wait(1).to({graphics:mask_graphics_5,x:-24.7,y:-3.1}).wait(1).to({graphics:mask_graphics_6,x:-19.9,y:-2.8}).wait(1).to({graphics:mask_graphics_7,x:-15,y:-2.5}).wait(1).to({graphics:mask_graphics_8,x:-10.2,y:-2.3}).wait(1).to({graphics:mask_graphics_9,x:-5.3,y:-2}).wait(1).to({graphics:mask_graphics_10,x:-0.5,y:-1.7}).wait(1).to({graphics:mask_graphics_11,x:4.4,y:-1.4}).wait(1).to({graphics:mask_graphics_12,x:9.2,y:-1.2}).wait(1).to({graphics:mask_graphics_13,x:14.1,y:-0.9}).wait(1).to({graphics:mask_graphics_14,x:18.9,y:-0.6}).wait(1).to({graphics:mask_graphics_15,x:23.8,y:-0.3}).wait(1).to({graphics:mask_graphics_16,x:28.6,y:-0.1}).wait(1).to({graphics:mask_graphics_17,x:32.5,y:0.2}).wait(1).to({graphics:mask_graphics_18,x:34.9,y:0.5}).wait(1).to({graphics:mask_graphics_19,x:37.3,y:0.8}).wait(1).to({graphics:mask_graphics_20,x:39.7,y:1}).wait(31));

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(51));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-21,2.5,42);


(lib.Символ55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ54();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.215,1.215);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ55, new cjs.Rectangle(-96.7,-18.1,196,41), null);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.parent = this;
	this.instance.setTransform(56.9,-25.7);
	this.instance.alpha = 0.18;

	this.instance_1 = new lib.Символ3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.927,0.927);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ43, new cjs.Rectangle(-118.7,-80.2,237.4,160.5), null);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ35();
	this.instance.parent = this;
	this.instance.setTransform(0.1,-6.3,1,1,-90);

	this.instance_1 = new lib.Символ35();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-10.3,4.9,1,1,180);

	this.instance_2 = new lib.Символ35();
	this.instance_2.parent = this;
	this.instance_2.setTransform(10.4,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ39, new cjs.Rectangle(-14.8,-10.8,33.4,24), null);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ39();
	this.instance.parent = this;
	this.instance.setTransform(-10.3,0.4,1,1,0,0,0,0,5.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-0.1,scaleX:0.9,scaleY:0.9,x:-10.4,y:0.5},6,cjs.Ease.get(-1)).to({scaleX:0.81,scaleY:0.81,y:0.4},6,cjs.Ease.get(1)).to({scaleX:0.9,scaleY:0.9,y:0.5},6,cjs.Ease.get(-1)).to({regX:0,scaleX:1,scaleY:1,x:-10.3,y:0.4},6,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.2,-15.8,32.4,24);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AgEAPQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAAAABAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAIAGgPQAGgRgEATQAAAGgCAHIAAAGQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAAAAAQgBABgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBg");
	this.shape.setTransform(-1.3,-4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("AgFARIgBAAQAAAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBgBAAIAAgBQAAgDADgBIABgCIABgCIABgBIAEgHIAHgHIAFgEQABgCgBAHIgBABIAAAAIgBAKQAAAAAAABQAAAAAAABQAAABAAAAQAAAAgBABIgCAFQgBAFgCACIgBABIgCAAIgCABIgDgBg");
	this.shape_1.setTransform(-6.7,42.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFD940").s().p("AgKAXQAAgDADgCIAJgXQAMgggEAbIgCAKIgBAIIgBABIAAAAIABgBQABgHgBACIgFAEIgHAHIgEAIIgBABg");
	this.shape_2.setTransform(-6.3,40.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC00").s().p("AgBANQgEABgDgCIgBgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAAAgBIAAgBQAAgDADgCIACgCIADgEIABgDIAFAAIADABIALAAIAAgCIABgBIgBACIgBAHQAAAGgEAEQgDAFgDACIgBAAIgCABIgBgBg");
	this.shape_3.setTransform(-12.2,89.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFE680").s().p("AgJAgIgEgBIgBAAIAAAAIAEgIIANggQAQgpgFAhIgCANIgCANIgCAPIgCAFIAAABIgBACIgJABIgFgBg");
	this.shape_4.setTransform(-11.3,84.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCC00").s().p("AgEAWQgFAAgEgEIgBgBIgDgDIgCgFIAAgBQAAgEADgEIACgCIAEgEIAEgJIABgDIAPgCIAKgCIgBAIIgCALIgBAHQAAAGgFAGQgEAFgGABIgBAAIgCABIgCgBg");
	this.shape_5.setTransform(-17.5,134.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFF2BF").s().p("AAIAhIgJACIgQACIgBADIAAAAIAFgLIAPgoQAVgzgFApIgDAPIgDAQIgDATIgBAKIgBACIABgIg");
	this.shape_6.setTransform(-16.3,129.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgWAyIAZg+QAdhNgNBSIgKA5g");
	this.shape_7.setTransform(-21.4,173.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFCC00").s().p("AgRATQgGgGAAgHQAAgGAGgFQADgDAHgQIAfAAIgEAdQgBAIgGAGQgGAGgIAAQgKAAgGgGg");
	this.shape_8.setTransform(-22.9,181.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},44).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_8},{t:this.shape_7}]},1).to({state:[]},1).wait(11));

	// Слой 5
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFCC00").s().p("AgEAPQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAAAABAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAIAGgPQAGgRgEATQAAAGgCAHIAAAGQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAAAAAQgBABgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBg");
	this.shape_9.setTransform(-1.3,-4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFCC00").s().p("AgFARIAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBgBAAIAAgBQAAgDADgBIABgCIABgCIABgBIAEgHIAHgHIAFgEQABgCgBAHIgBABIAAAAIgBAKQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABIgCAFQgBAFgCACIAAABIgDAAIgCABIgDgBg");
	this.shape_10.setTransform(-4.7,40.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFD940").s().p("AgKAXQAAgDADgCIAJgXQAMgggEAbIgCAKIgBAIIgBABIAAAAIABgBQABgHgBACIgFAEIgHAHIgEAIIgBABg");
	this.shape_11.setTransform(-4.3,38.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFCC00").s().p("AgBAOQgEAAgDgDIgBAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAAAIAAgBQAAgEADgBIACgDIADgEIABgDIAFABIADABIALgBIAAgCIABgBIgBADIgBAHQAAAFgEAFQgDAEgDACIgBABIgCAAIgBAAg");
	this.shape_12.setTransform(-8.2,85.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFE680").s().p("AgJAgIgEgBIgBAAIAAAAIAEgIIANggQAQgpgFAhIgCANIgCANIgCAPIgCAFIAAABIgBACIgJABIgFgBg");
	this.shape_13.setTransform(-7.3,80.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFCC00").s().p("AgEAWQgFAAgEgEIgBgBIgDgDIgCgFIAAgBQAAgEADgEIACgCIAEgEIAEgJIABgDIAPgCIAKgCIgBAIIgCALIgBAHQAAAGgFAGQgEAFgGABIgBAAIgCABIgCgBg");
	this.shape_14.setTransform(-11.5,128.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFF2BF").s().p("AAIAhIgJACIgQACIgBADIAAAAIAFgLIAPgoQAVgzgFApIgDAPIgDAQIgDATIgBAKIgBACIABgIg");
	this.shape_15.setTransform(-10.3,123.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgWAyIAZg+QAdhNgNBSIgKA5g");
	this.shape_16.setTransform(-13.4,165.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFCC00").s().p("AgRATQgGgGAAgHQAAgGAGgFQADgDAHgQIAfAAIgEAdQgBAIgGAGQgGAGgIAAQgKAAgGgGg");
	this.shape_17.setTransform(-14.9,173.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_9}]},41).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[]},1).wait(14));

	// Слой 4
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFCC00").s().p("AgEAPQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAAAABAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAIAGgPQAGgRgEATQAAAGgCAHIAAAGQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAAAAAQgBABgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBg");
	this.shape_18.setTransform(-1.3,-4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFCC00").s().p("AgFARIgBAAQAAAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIAAgBQAAgDACgBIABgCIABgCIABgBIAEgHIAHgHIAFgEQABgCgBAHIgBABIAAAAIgBAKQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABIgBAFQgCAFgCACIgBABIgCAAIgCABIgDgBg");
	this.shape_19.setTransform(-8.7,40.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFD940").s().p("AgKAXQAAgDADgCIAJgXQAMgggEAbIgCAKIgBAIIgBABIAAAAIABgBQABgHgBACIgFAEIgHAHIgEAIIgBABg");
	this.shape_20.setTransform(-8.3,38.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFCC00").s().p("AgBAOQgEAAgDgDIgBAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAAAIAAgBQAAgEADgBIACgDIADgEIABgDIAFABIADABIALgBIAAgCIABgBIgBADIgBAHQAAAFgEAFQgDAEgDACIgBABIgCAAIgBAAg");
	this.shape_21.setTransform(-16.2,85.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFE680").s().p("AgJAgIgEgBIgBAAIAAAAIAEgIIANggQAQgpgFAhIgCANIgCANIgCAPIgCAFIAAABIgBACIgJABIgFgBg");
	this.shape_22.setTransform(-15.3,80.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFCC00").s().p("AgEAWQgFAAgEgEIgBgBIgDgDIgCgFIAAgBQAAgEADgEIACgCIAEgEIAEgJIABgDIAPgCIAKgCIgBAIIgCALIgBAHQAAAGgFAGQgEAFgGABIgBAAIgCABIgCgBg");
	this.shape_23.setTransform(-23.5,128.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFF2BF").s().p("AAIAhIgJACIgQACIgBADIAAAAIAFgLIAPgoQAVgzgFApIgDAPIgDAQIgDATIgBAKIgBACIABgIg");
	this.shape_24.setTransform(-22.3,123.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgWAyIAZg+QAdhNgNBSIgKA5g");
	this.shape_25.setTransform(-29.4,165.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFCC00").s().p("AgRATQgGgGAAgHQAAgGAGgFQADgDAHgQIAfAAIgEAdQgBAIgGAGQgGAGgIAAQgKAAgGgGg");
	this.shape_26.setTransform(-30.9,173.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_18}]},38).to({state:[{t:this.shape_20},{t:this.shape_19}]},1).to({state:[{t:this.shape_22},{t:this.shape_21}]},1).to({state:[{t:this.shape_24},{t:this.shape_23}]},1).to({state:[{t:this.shape_26},{t:this.shape_25}]},1).to({state:[]},1).wait(17));

	// Слой 3
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFCC00").s().p("AgEAPQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAAAABAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAIAGgPQAGgRgEATQAAAGgCAHIAAAGQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAAAAAQgBABgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBg");
	this.shape_27.setTransform(-1.3,-4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFCC00").s().p("AgFARIgBAAQAAAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBgBAAIAAgBQAAgDADgBIABgCIABgCIABgBIAEgHIAHgHIAFgEQABgCgBAHIgBABIAAAAIgBAKQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABIgCAFQgBAFgCACIgBABIgCAAIgCABIgDgBg");
	this.shape_28.setTransform(-6.7,40.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFD940").s().p("AgKAXQAAgDADgCIAJgXQAMgggEAbIgCAKIgBAIIgBABIAAAAIABgBQABgHgBACIgFAEIgHAHIgEAIIgBABg");
	this.shape_29.setTransform(-6.3,38.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFCC00").s().p("AgBAOQgEAAgDgDIgBAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAAAgBgBQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAAAAAIAAgBQAAgEADgBIACgDIADgEIABgDIAFABIADABIALgBIAAgCIABgBIgBADIgBAHQAAAFgEAFQgDAEgDACIgBABIgCAAIgBAAg");
	this.shape_30.setTransform(-12.2,85.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFE680").s().p("AgJAgIgEgBIgBAAIAAAAIAEgIIANggQAQgpgFAhIgCANIgCANIgCAPIgCAFIAAABIgBACIgJABIgFgBg");
	this.shape_31.setTransform(-11.3,80.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFCC00").s().p("AgEAWQgFAAgEgEIgBgBIgDgDIgCgFIAAgBQAAgEADgEIACgCIAEgEIAEgJIABgDIAPgCIAKgCIgBAIIgCALIgBAHQAAAGgFAGQgEAFgGABIgBAAIgCABIgCgBg");
	this.shape_32.setTransform(-17.5,128.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFF2BF").s().p("AAIAhIgJACIgQACIgBADIAAAAIAFgLIAPgoQAVgzgFApIgDAPIgDAQIgDATIgBAKIgBACIABgIg");
	this.shape_33.setTransform(-16.3,123.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgWAyQAJgUAQgqQAehNgOBSIgKA5g");
	this.shape_34.setTransform(-21.4,165.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFCC00").s().p("AgRATQgGgGAAgHQAAgGAGgFQADgDAHgQIAfAAIgEAdQgBAIgGAGQgGAGgIAAQgKAAgGgGg");
	this.shape_35.setTransform(-22.9,173.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_27}]},35).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[]},1).wait(20));

	// Слой 2
	this.instance = new lib.shot();
	this.instance.parent = this;
	this.instance.setTransform(-3,-7,0.201,0.201);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(23));

	// Слой 7 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgJBjIAAhPIANgKIAHgXIhggJIAAhWICqAAIAADZg");
	mask.setTransform(0.9,-0.2);

	// Слой 1
	this.instance_1 = new lib.Символ29();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.1,0,0.394,0.394,0,0,0,0.2,-0.1);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30).to({skewX:-1,x:0},0).wait(1).to({skewX:0,x:0.1},0).wait(1).to({skewX:-1,x:0},0).wait(1).to({skewX:0,x:0.1},0).wait(1).to({skewX:-1,x:0},0).wait(1).to({skewX:0,x:0.1},0).wait(1).to({skewX:-1,x:0},0).wait(1).to({skewX:0,x:0.1},0).wait(23));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-7.5,5.1,15);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ21();
	this.instance.parent = this;
	this.instance.setTransform(78.8,-12.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ19();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-30.7,-16);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(-46.3,-49.5,163,67.1), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.parent = this;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ43();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(34).to({x:8,y:8},2).to({x:0,y:0},2).to({x:8,y:8},2).to({x:0,y:0},2).wait(10).to({x:8,y:8},2).to({x:0,y:0},2).to({x:8,y:8},2).to({x:0,y:0},2).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118.7,-80.2,237.4,160.5);


(lib.Символ56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ55();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.15,scaleY:1.15},9,cjs.Ease.get(-1)).to({scaleX:1.31,scaleY:1.31},10,cjs.Ease.get(0.97)).to({scaleX:1.16,scaleY:1.16},10,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},10,cjs.Ease.get(0.97)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96.7,-18.1,196,41);


(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ56();
	this.instance.parent = this;
	this.instance.setTransform(20.6,86);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-6.5},7,cjs.Ease.get(1)).to({rotation:11.7,x:20.5},12,cjs.Ease.get(1)).to({rotation:0,x:20.6},6,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.2,67.9,197,42);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ36();
	this.instance.parent = this;
	this.instance.setTransform(-37.7,-20.6,1.353,1.353,0,0,0,-10.3,-0.1);

	this.instance_1 = new lib.Символ36();
	this.instance_1.parent = this;
	this.instance_1.setTransform(75.5,-39.8,1.353,1.353,0,0,0,-10.3,-0.1);

	this.instance_2 = new lib.Символ36();
	this.instance_2.parent = this;
	this.instance_2.setTransform(16.5,-14.2,1.353,1.353,0,0,0,-10.3,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Символ 32
	this.instance_3 = new lib.Символ32();
	this.instance_3.parent = this;
	this.instance_3.setTransform(76.1,-36.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Символ 28
	this.instance_4 = new lib.Символ28();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-37.9,-15.5,0.518,0.518,0,0,180,-0.2,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Символ 25
	this.instance_5 = new lib.Символ25();
	this.instance_5.parent = this;
	this.instance_5.setTransform(15.1,-12.2,0.713,0.713);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Символ 1
	this.instance_6 = new lib.Символ1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(0.1,-32.1,0.507,0.507,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ33, new cjs.Rectangle(-348.2,-189.1,696.4,314), null);


(lib.Символ24 = function(mode,startPosition,loop) {
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

	// Слой 4
	this.instance = new lib.Символ62();
	this.instance.parent = this;
	this.instance.setTransform(-56.6,17.3,0.506,0.506,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-0.1,regY:-0.2,x:-56.7,y:-238.1},7,cjs.Ease.get(1)).wait(1).to({regX:0,regY:-0.1,x:-56.6,y:17.3},7,cjs.Ease.get(1)).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ51();
	this.instance_1.parent = this;
	this.instance_1.setTransform(202.2,-413.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-306.3},7,cjs.Ease.get(1)).wait(1).to({y:-413.1},7,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ20();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-35.1,103.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:0},7,cjs.Ease.get(1)).wait(1).to({y:103.2},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81.4,-345.2,405.4,466);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ4();
	this.instance.parent = this;
	this.instance.setTransform(94.5,73.5,1,1,0,0,0,94.5,73.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-2,x:94.6},19,cjs.Ease.get(-1)).to({rotation:-4.5,x:94.5},20,cjs.Ease.get(1)).to({rotation:-2.1,x:94.6,y:73.6},20,cjs.Ease.get(-1)).to({rotation:0,x:94.5,y:73.5},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118.7,-80.2,237.4,160.5);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ33();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:16.9},39,cjs.Ease.get(-1)).to({x:34.4},40,cjs.Ease.get(1)).to({x:17.2},42,cjs.Ease.get(-1)).to({x:0},40,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-348.2,-189.1,696.4,314);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ter.png
	this.instance = new lib.Символ34();
	this.instance.parent = this;
	this.instance.setTransform(0,32.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(-348.2,-157,696.4,314), null);


(lib.Символ6 = function(mode,startPosition,loop) {
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

	// Слой 5
	this.instance = new lib.Символ42();
	this.instance.parent = this;
	this.instance.setTransform(341.9,153.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(16));

	// Слой 4
	this.instance_1 = new lib.Символ44();
	this.instance_1.parent = this;
	this.instance_1.setTransform(334.6,35,1.15,1.15);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-89.8},7,cjs.Ease.get(1)).wait(1).to({y:35},7,cjs.Ease.get(1)).wait(1));

	// Слой 3
	this.instance_2 = new lib.Символ5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(543.9,231.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1.3,scaleY:1.3,x:802.4,y:417.4},7,cjs.Ease.get(1)).wait(1).to({scaleX:1,scaleY:1,x:543.9,y:231.8},7,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.bg = new lib.Символ2();
	this.bg.parent = this;
	this.bg.setTransform(320,152.5);

	this.timeline.addTween(cjs.Tween.get(this.bg).to({regX:0.1,regY:0.1,scaleX:3.15,scaleY:3.15,x:288.2,y:104.6},7,cjs.Ease.get(1)).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:320,y:152.5},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.2,-4.5,696.4,316.6);


// stage content:
(lib.new_sniper640x305 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		stage.canvas.style.cursor = "none";
		this.prizel.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
			this.prizel.x = stage.mouseX/window.devicePixelRatio;
			this.prizel.y = stage.mouseY/window.devicePixelRatio;
		}
		
		var _this = this;
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		  function fl_MouseOverHandler_5()
		{
		    _this.main.gotoAndPlay(1);
			_this.prizel.gotoAndStop(1);
			_this.patr.gotoAndPlay(1);
		}
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		  function fl_MouseOutHandler_2()
		{
		    _this.main.gotoAndPlay(9);
			_this.prizel.gotoAndStop(0);
			_this.patr.gotoAndPlay(9);	
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// patroni
	this.patr = new lib.Символ24();
	this.patr.parent = this;
	this.patr.setTransform(97.2,262);

	this.timeline.addTween(cjs.Tween.get(this.patr).wait(1));

	// prizel
	this.prizel = new lib.Символ16();
	this.prizel.parent = this;
	this.prizel.setTransform(320,152.5);

	this.timeline.addTween(cjs.Tween.get(this.prizel).wait(1));

	// main
	this.main = new lib.Символ6();
	this.main.parent = this;
	this.main.setTransform(-15,2.5);

	this.timeline.addTween(cjs.Tween.get(this.main).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(276.8,69.3,696.4,466);
// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg?1485347208643", id:"bg"},
		{src:"images/patr.png?1485347208643", id:"patr"},
		{src:"images/pri.png?1485347208643", id:"pri"},
		{src:"images/pri1.png?1485347208643", id:"pri1"},
		{src:"images/shot.png?1485347208643", id:"shot"},
		{src:"images/snip.png?1485347208643", id:"snip"},
		{src:"images/ter.png?1485347208643", id:"ter"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;