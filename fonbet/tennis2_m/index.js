(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,500);


(lib.ball = function() {
	this.initialize(img.ball);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,59);


(lib.botton = function() {
	this.initialize(img.botton);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,295,75);


(lib.chsi = function() {
	this.initialize(img.chsi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,127,45);


(lib.girl = function() {
	this.initialize(img.girl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,436,684);


(lib.Layer1 = function() {
	this.initialize(img.Layer1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,79,78);


(lib.Layer2 = function() {
	this.initialize(img.Layer2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,78);


(lib.Layer3 = function() {
	this.initialize(img.Layer3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,74,79);


(lib.Layer4 = function() {
	this.initialize(img.Layer4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,78,67);


(lib.logored = function() {
	this.initialize(img.logored);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,263,80);


(lib.mgnov = function() {
	this.initialize(img.mgnov);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,152,49);


(lib.prilog = function() {
	this.initialize(img.prilog);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,139,46);


(lib.sred = function() {
	this.initialize(img.sred);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,161,51);// helper functions:

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


(lib.Symbol53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ball();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.423,0.423);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol53, new cjs.Rectangle(0,0,25,25), null);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA7DnIAzlBIjvFBIhWAAIBKnNIBTAAIgyE6IDpk6IBaAAIhJHNg");
	this.shape.setTransform(246.1,34);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AirDnIBJnNIBsAAQAoAAAfAJQAeAIAVARQAUARAKAYQAKAYAAAgQAAAkgMAdQgNAegaAUQgaAVgjALQg0AMgeAAIgjAAIgbCrgAgvgJIAeAAQAYAAAVgFQATgGAOgLQANgMAGgQQAHgQAAgTQAAgRgFgMQgFgMgKgJQgLgIgPgEQgPgFgVAAIgbAAg");
	this.shape_1.setTransform(205.8,34);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABiBxIieAAIg4B1IhZAAIDrnPIBaAAIBWHDIhYAQgABXApIgdixIhUCxIBxAAg");
	this.shape_2.setTransform(162.4,34.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ACQCwIkjAAIgQBqIhTAAIAcizQAlghAagcQAcgfAVgfQAVggARgnQAQgmAOgvIAdhtIEAAAIg9F+IA2AAIgcCyIhVALgAAlibQgLAtgQAlQgNAkgSAfQgSAdgXAbQgVAagbAZIDRAAIAzk6IhhAAg");
	this.shape_3.setTransform(116.4,39.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag/DsQgTgDgRgIQgRgGgOgLQgPgKgLgNIgVgdIgPgjQgIgZgEg7QAAggAFgeQAGgeAKgcQALgcAPgZQAPgYATgTIAfgaQARgLASgIQASgHAUgEQATgEAXAAIApADQATAEARAHQARAHAPAKQAOALALANIAVAdIAPAjQAMA1AAAeQAAAggGAeQgFAfgKAcQgLAdgPAXQgPAZgTATIgfAaQgRALgSAHQgSAIgUAEQgUAEgVAAgAgTihQgTAJgRAQQgNAOgLASQgLATgIAXQgIAYgEAaQgFAaAAAcQAAAfAGAYQAGAYANAQQAMARASAHQARAJAXAAQAVAAATgJQATgIAQgRQANgNAMgSQALgTAIgXQAIgYAEgaQAFgaAAgcQAAgfgHgZQgGgXgMgRQgMgQgSgIQgSgJgWAAQgVABgTAIg");
	this.shape_4.setTransform(72.2,34);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAzDnIA9mCIiuAAIg9GCIhXAAIBJnNIFdAAIhKHNg");
	this.shape_5.setTransform(27.1,34);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(0,0,271,74.1), null);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiKBpQAPgBANgEQANgCALgHQAKgFAJgIQAJgJAHgKIABgCIhFjKIA7gJIAwCbIBXiYIBAAAIiKDeQgNAXgQAQQgPAQgRAJQgRAKgUAFQgSAFgXAAg");
	this.shape.setTransform(255.9,22.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABfBzIi/AAIgLBFIg2AAIATh1QAYgVARgTQASgUAOgTQAOgWALgZQAKgZAJgfIAUhHICnAAIgoD5IAjAAIgSB1Ig4AHgAAZhlQgIAdgKAYQgJAYgMAVQgLASgPASQgOARgSAQICJAAIAhjNIg/AAg");
	this.shape_1.setTransform(222.3,25.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhpCXIAvktICkAAIgGAwIhsAAIgMBJIBSAAIAAAvIhaAAIgNBVIBvAAIgHAwg");
	this.shape_2.setTransform(198.6,22.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhpCXIAwktICjAAIAAAyIh0AAIgKBFIAUAAQAZAAAUAFQATAFANALQAMAKAGAOQAGAPAAATQAAAXgIATQgJATgQAOQgQANgXAIQgXAHgcAAgAgrBrIAXAAQAPAAALgEQAMgEAJgGQAJgHAEgLQAFgKAAgNQAAgJgDgHQgDgIgGgFQgGgFgJgCQgKgDgMAAIgXAAg");
	this.shape_3.setTransform(174.8,22.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgpCbQgMgDgMgEQgLgFgJgHQgJgGgIgJIgOgTIgKgXQgEgQgDgmQAAgVADgUQAEgUAHgSQAGgTALgPQAJgQAMgNIAVgRQALgHAMgFQAMgFANgCQAMgDAPAAIAbACQANADALAEQAKAFAKAHQAJAGAIAJIANATIAKAXQAIAiAAAUQAAAVgDAUQgEAUgHASQgHATgJAPQgKAQgNANIgUARQgLAHgMAFQgMAFgNACQgNADgNAAgAgMhpQgNAGgLALQgIAIgHAMQgIANgFAPQgFAPgDARQgDARAAATQAAAUAEAQQAEAPAIALQAIALAMAFQAMAFAPAAQANAAANgFQAMgGAKgLQAIgIAIgMQAHgNAFgPQAGgPADgRQADgRAAgTQAAgUgFgQQgEgPgHgLQgJgLgLgFQgMgFgOAAQgOAAgMAFg");
	this.shape_4.setTransform(148.3,22.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAhCXIAoj8IhxAAIgoD8Ig5AAIAwktIDjAAIgvEtg");
	this.shape_5.setTransform(118.8,22.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhqCXIAxktICjAAIgHAwIhsAAIgLBJIBSAAIAAAvIhaAAIgNBVIBwAAIgIAwg");
	this.shape_6.setTransform(85.2,22.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhpCXIAwktICjAAIAAAyIh0AAIgKBFIAUAAQAZAAAUAFQATAFANALQAMAKAGAOQAGAPAAATQAAAXgIATQgJATgQAOQgQANgXAIQgXAHgcAAgAgrBrIAXAAQAPAAALgEQAMgEAJgGQAJgHAEgLQAFgKAAgNQAAgJgDgHQgDgIgGgFQgGgFgJgCQgKgDgMAAIgXAAg");
	this.shape_7.setTransform(61.4,22.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhpCXIAwktICjAAIgGAwIhtAAIgLBJIBSAAIAAAvIhaAAIgNBVIBvAAIgHAwg");
	this.shape_8.setTransform(40.1,22.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgvCUIgUgKQgJgGgJgJQgIgIgGgKIgKgWQgGgQgDgnQAAgUAEgRQACgSAGgRQAGgQAIgPQAIgPAKgMQALgNANgJQANgKAOgHQAOgHAOgEQARgEARAAQAWAAAWAIQATAGARANIgQA0QgPgOgPgHQgRgIgSAAQgLAAgLADQgKACgIAGQgSAKgNASQgNASgGAYQgIAXABAYQAAAVAEARQAGAQAJALQAJAKANAGQANAFAQAAQAQAAAUgGQARgGASgLIAAAyQgRAKgVAGQgVAGgUAAQgjgDgPgGg");
	this.shape_9.setTransform(16.7,22.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(0,0,269.2,48.5), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.girl();
	this.instance.parent = this;
	this.instance.setTransform(413.8,-24,1.334,1.334,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(-168,-24,581.8,912.8), null);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.botton();
	this.instance.parent = this;
	this.instance.setTransform(-19,9,0.91,0.91);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(-19,9,268.4,68.3), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.chsi();
	this.instance.parent = this;
	this.instance.setTransform(-10,55,0.694,0.694);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.Layer4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1,-18,0.863,0.863);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(-10,-18,88.2,104.3), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.prilog();
	this.instance.parent = this;
	this.instance.setTransform(0,51,0.692,0.692);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.Layer2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(18,-23,0.828,0.828);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,-23,96.2,105.9), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.mgnov();
	this.instance.parent = this;
	this.instance.setTransform(11,48,0.645,0.645);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.Layer3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(29,-22,0.763,0.763);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(11,-22,98,101.6), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.sred();
	this.instance.parent = this;
	this.instance.setTransform(-12,46,0.684,0.684);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.Layer1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(12,-24,0.814,0.814);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(-12,-24,110.2,104.9), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logored();
	this.instance.parent = this;
	this.instance.setTransform(-40,-2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-40,-2,263,80), null);


(lib.Symbol52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol53();
	this.instance.parent = this;
	this.instance.setTransform(26.6,-61.9,0.843,0.843,0,0,0,12.5,12.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:12.3,scaleX:0.88,scaleY:0.88,rotation:896.5,guide:{path:[26.6,-61.8,-8.7,-56.5,-41.8,-42.8,-78.1,-27.7,-111.6,-6.9,-128.4,3.5,-140.7,17.8,-143.2,20.7,-146.2,23.2,-148,20,-150.3,17.1]}},12,cjs.Ease.get(-1)).to({regY:12.5,scaleX:1,scaleY:1,rotation:1800,guide:{path:[-150.5,17,-155.6,10.8,-163.1,5.9,-177.7,-3.5,-197,-5.2,-239.1,-8.9,-278.3,1.4,-295.8,6,-308.4,17.3,-308.4,19.8,-308.4,22.2,-321.7,16.9,-333.3,14.5,-349,11,-366,12.4,-385.3,14,-399.2,22.2,-410.9,22.2,-422.6,22.2,-589.8,31.2,-757,40.1]}},37,cjs.Ease.get(1)).wait(51));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(16.1,-72.3,21.1,21);


(lib.Symbol33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#182410","rgba(24,36,16,0)"],[0,1],0,-6.4,0,6.4).s().p("EguvAAyIAAhjMBdfAAAIAABjg");
	this.shape.setTransform(290.3,247.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.instance = new lib.Symbol52();
	this.instance.parent = this;
	this.instance.setTransform(1185,535,1.597,1.597,0,0,0,12.6,12.5);

	this.instance_1 = new lib.back();
	this.instance_1.parent = this;
	this.instance_1.setTransform(6,244,1.54,1.54);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#182410").s().p("EhiMAhVMAAAhCpMDEZAAAMAAABCpg");
	this.shape_1.setTransform(628.5,102);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol33, new cjs.Rectangle(-8.9,-111.2,1265.9,1125.5), null);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.logo = new lib.Symbol3();
	this.logo.parent = this;
	this.logo.setTransform(134.4,31,1.033,1.033,0,0,0,90,28);
	this.logo.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,8);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol29, new cjs.Rectangle(-9,-9,293,104), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 9 copy.png
	this.instance = new lib.Symbol13();
	this.instance.parent = this;
	this.instance.setTransform(214,573.5,1,1,0,0,0,214,558.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:594.2},34,cjs.Ease.get(-1)).to({y:615.6},35,cjs.Ease.get(1)).to({y:594.6},35,cjs.Ease.get(-1)).to({y:573.5},35,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-168,-9,581.8,912.8);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// СЕБЕ ПОБЕДУ
	this.instance = new lib.Symbol14();
	this.instance.parent = this;
	this.instance.setTransform(129.7,86.7,1,1,0,0,0,134.6,24.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.94,scaleY:0.94},8,cjs.Ease.get(-1)).to({scaleX:0.87,scaleY:0.87},9,cjs.Ease.get(1)).to({regY:24.3,scaleX:0.94,scaleY:0.94},9,cjs.Ease.get(-1)).to({regY:24.2,scaleX:1,scaleY:1},8,cjs.Ease.get(1)).to({scaleX:1.05,scaleY:1.05},9,cjs.Ease.get(-1)).to({scaleX:1.1,scaleY:1.1},8,cjs.Ease.get(1)).to({regY:24.3,scaleX:1.05,scaleY:1.05,x:129.8,y:86.8},9,cjs.Ease.get(-1)).to({regY:24.2,scaleX:1,scaleY:1,x:129.7,y:86.7},9,cjs.Ease.get(1)).wait(1));

	// ПОДАРИ
	this.instance_1 = new lib.Symbol15();
	this.instance_1.parent = this;
	this.instance_1.setTransform(129.9,28.7,1,1,0,0,0,135.5,37);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.03,scaleY:1.03,x:130,y:28.8},8,cjs.Ease.get(-1)).to({scaleX:1.07,scaleY:1.07},9,cjs.Ease.get(1)).to({scaleX:1.03,scaleY:1.03,x:129.9,y:28.7},9,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},8,cjs.Ease.get(1)).to({scaleX:0.88,scaleY:0.88,y:28.8},9,cjs.Ease.get(-1)).to({scaleX:0.78,scaleY:0.78,y:28.7},8,cjs.Ease.get(1)).to({regX:135.6,scaleX:0.89,scaleY:0.89,x:130},9,cjs.Ease.get(-1)).to({regX:135.5,scaleX:1,scaleY:1,x:129.9},9,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.6,-8.3,271,119.3);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol17();
	this.instance.parent = this;
	this.instance.setTransform(115.5,33.5,1,1,0,0,0,115.5,33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({scaleX:0.98,scaleY:0.98,x:115.6,y:33.6},2,cjs.Ease.get(-1)).to({scaleX:0.94,scaleY:0.94,y:33.5},3,cjs.Ease.get(1)).to({scaleX:0.96,scaleY:0.96,y:33.6},2,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:115.5,y:33.5},3,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19,9,268.4,68.3);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ser4.png
	this.instance = new lib.Symbol9();
	this.instance.parent = this;
	this.instance.setTransform(47,-57.5,1,1,0,0,0,35,35.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(54).to({y:-21.1,alpha:0.398},2,cjs.Ease.get(-1)).to({y:33.5,alpha:1},3,cjs.Ease.get(1)).wait(11).to({x:44},1).to({x:50},1).to({x:44},1).to({x:50},1).to({x:47},1).wait(28).to({y:-2.9,alpha:0.602},2,cjs.Ease.get(-1)).to({y:-57.5,alpha:0},3,cjs.Ease.get(1)).to({_off:true},1).wait(7));

	// ser3.png
	this.instance_1 = new lib.Symbol8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(148.5,-53,1,1,0,0,0,36.5,36);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(56).to({y:-16.6,alpha:0.398},2,cjs.Ease.get(-1)).to({y:38,alpha:1},3,cjs.Ease.get(1)).wait(27).to({x:145.5},1).to({x:151.5},1).to({x:145.5},1).to({x:151.5},1).to({x:148.5},1).wait(12).to({y:1.6,alpha:0.602},2,cjs.Ease.get(-1)).to({y:-53,alpha:0},3,cjs.Ease.get(1)).to({_off:true},1).wait(5));

	// ser2.png
	this.instance_2 = new lib.Symbol7();
	this.instance_2.parent = this;
	this.instance_2.setTransform(152.5,36,1,1,0,0,0,40.5,37);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(29).to({x:149.5},1).to({x:155.5},1).to({x:149.5},1).to({x:155.5},1).to({x:152.5},1).wait(17).to({y:4,alpha:0.602},2,cjs.Ease.get(-1)).to({y:-44,alpha:0},3,cjs.Ease.get(1)).wait(54).to({y:-12,alpha:0.398},2,cjs.Ease.get(-1)).to({y:36,alpha:1},3,cjs.Ease.get(1)).wait(1));

	// ser1.png
	this.instance_3 = new lib.Symbol6();
	this.instance_3.parent = this;
	this.instance_3.setTransform(45,37.5,1,1,0,0,0,43,36.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(12).to({x:42},1).to({x:48},1).to({x:42},1).to({x:48},1).to({x:45},1).wait(32).to({y:5.5,alpha:0.602},2,cjs.Ease.get(-1)).to({y:-42.5,alpha:0},3,cjs.Ease.get(1)).wait(54).to({y:-10.5,alpha:0.398},2,cjs.Ease.get(-1)).to({y:37.5,alpha:1},3,cjs.Ease.get(1)).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-112,231,193.9);


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol5();
	this.instance.parent = this;
	this.instance.setTransform(96.4,270.7,1.816,1.816,0,0,0,43.1,37.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol31, new cjs.Rectangle(0,0,419.4,352.1), null);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol24();
	this.instance.parent = this;
	this.instance.setTransform(137.5,62.3,1,1,0,0,0,131.9,54);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol26, new cjs.Rectangle(0,0,271,119.3), null);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol16();
	this.instance.parent = this;
	this.instance.setTransform(115.5,33.5,1,1,0,0,0,115.5,33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.03,scaleY:1.03},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19,9,268.4,68.3);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol18();
	this.instance.parent = this;
	this.instance.setTransform(225.4,50.7,1.602,1.602,0,0,0,115.7,33.6);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Symbol18(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol32, new cjs.Rectangle(2.1,9.9,445,113.1), null);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol26();
	this.instance.parent = this;
	this.instance.setTransform(211.1,92.8,1.557,1.557,0,0,0,135.6,59.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol30, new cjs.Rectangle(0,0,421.8,185.6), null);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		window._setCanvasSize = function() {
			
		    var s = getWindowSize();
			
				defaultScale = 1,
			
				minWidth = 600,
				minHeight = 600,
			
				scaleW = s.iw / minWidth,
				scaleH = s.ih / minHeight,
				scaleWH = scaleW * scaleH;
		    
		    /* Position */
		    
		    _this.girl.x = s.iw * 0.2;
			_this.girl.y = s.ih * 0.6;
			
			_this.logo.x = s.iw * 0.2;
			_this.logo.y = s.ih * 0.1;
			
			_this.txt.x = s.iw * 0.7;
			_this.txt.y = s.ih * 0.17;
			
			_this.pr.x = s.iw * 0.7;
			_this.pr.y = s.ih * 0.4;
			
			_this.button.x = s.iw * 0.7;
			_this.button.y = s.ih * 0.87;
			
			_this.back.x = s.iw * 0.7;
			_this.back.y = s.ih * 0.5;
			
			function setScale(scale) {
				_this.girl.scaleX = _this.girl.scaleY = ((s.iw < s.ih) ? scale * 0.8 : scale * 0.7);
				_this.back.scaleX = _this.back.scaleY = scale;
				_this.logo.scaleX = _this.logo.scaleY = ((s.iw < s.ih) ? scale * 1.1 : scale);
				_this.txt.scaleX = _this.txt.scaleY = scale;
				_this.pr.scaleX = _this.pr.scaleY = ((s.iw < s.ih) ? scale * 0.6 : scale);
				_this.button.scaleX = _this.button.scaleY = scale;
			}
			
			setScale(defaultScale);
		
		    /* Rescale */
		
		    if(s.iw < minWidth) {
		        setScale(scaleW);
		    }
		
		    if(s.ih < minHeight) {
		        setScale(scaleH);
		    }
		
		    if(s.iw < minWidth && s.ih < minHeight) {
		        setScale(scaleWH);
		    }
			
			if(s.iw < s.ih) {
				
				_this.girl.x = s.iw * 0.4;
				_this.girl.y = s.ih * 0.75;
				
				_this.logo.x = s.iw * 0.5;
				_this.logo.y = s.ih * 0.1;
				
				_this.txt.x = s.iw * 0.5;
				_this.txt.y = s.ih * 0.25;
				
				_this.pr.x = s.iw * 0.5;
				_this.pr.y = s.ih * 0.35;
				
				_this.button.x = s.iw * 0.5;
				_this.button.y = s.ih * 0.9;
				
				_this.back.x = s.iw * 0.8;
				_this.back.y = s.ih * 0.5;	
				
			}
				
		}
				
		window.onresize=function(){_setCanvasSize();}
		window.onresize();
		document.addEventListener("DOMContentLoaded", function(){ _setCanvasSize()});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Symbol 18
	this.button = new lib.Symbol32();
	this.button.parent = this;
	this.button.setTransform(772.5,658.4,1,1,0,0,0,224.5,59.9);

	this.timeline.addTween(cjs.Tween.get(this.button).wait(1));

	// Layer 1
	this.girl = new lib.Symbol2();
	this.girl.parent = this;
	this.girl.setTransform(203.8,397.6,0.761,0.761,0,0,180,168.7,357);

	this.timeline.addTween(cjs.Tween.get(this.girl).wait(1));

	// Layer 3
	this.logo = new lib.Symbol29();
	this.logo.parent = this;
	this.logo.setTransform(187.9,66.1,1,1,0,0,0,135.9,41.3);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

	// Symbol 26
	this.txt = new lib.Symbol30();
	this.txt.parent = this;
	this.txt.setTransform(767.8,112.6,1,1,0,0,0,210.9,92.8);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	// Symbol 5
	this.pr = new lib.Symbol31();
	this.pr.parent = this;
	this.pr.setTransform(769.7,315.9,1,1,0,0,0,209.7,176);

	this.timeline.addTween(cjs.Tween.get(this.pr).wait(1));

	// Layer 2
	this.back = new lib.Symbol33();
	this.back.parent = this;
	this.back.setTransform(672,449.2,1,1,0,0,0,776,471.7);

	this.timeline.addTween(cjs.Tween.get(this.back).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(399.1,250.2,1265.9,1125.5);
// library properties:
lib.properties = {
	width: 1024,
	height: 768,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/back.jpg?1499412071884", id:"back"},
		{src:"images/ball.png?1499412071884", id:"ball"},
		{src:"images/botton.png?1499412071884", id:"botton"},
		{src:"images/chsi.png?1499412071884", id:"chsi"},
		{src:"images/girl.png?1499412071884", id:"girl"},
		{src:"images/Layer1.png?1499412071884", id:"Layer1"},
		{src:"images/Layer2.png?1499412071884", id:"Layer2"},
		{src:"images/Layer3.png?1499412071884", id:"Layer3"},
		{src:"images/Layer4.png?1499412071884", id:"Layer4"},
		{src:"images/logored.png?1499412071884", id:"logored"},
		{src:"images/mgnov.png?1499412071884", id:"mgnov"},
		{src:"images/prilog.png?1499412071884", id:"prilog"},
		{src:"images/sred.png?1499412071884", id:"sred"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;