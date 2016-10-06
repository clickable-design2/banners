(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 500,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.box = function() {
	this.spriteSheet = ss["garage500_300_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.but = function() {
	this.spriteSheet = ss["garage500_300_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.cat = function() {
	this.spriteSheet = ss["garage500_300_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ffon = function() {
	this.spriteSheet = ss["garage500_300_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hed = function() {
	this.spriteSheet = ss["garage500_300_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.key = function() {
	this.spriteSheet = ss["garage500_300_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.lap = function() {
	this.spriteSheet = ss["garage500_300_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.leg = function() {
	this.spriteSheet = ss["garage500_300_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.man = function() {
	this.spriteSheet = ss["garage500_300_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.show = function() {
	this.spriteSheet = ss["garage500_300_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.stopa = function() {
	this.spriteSheet = ss["garage500_300_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.stre = function() {
	this.spriteSheet = ss["garage500_300_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.xv = function() {
	this.spriteSheet = ss["garage500_300_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.zam = function() {
	this.spriteSheet = ss["garage500_300_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhQCGQgKgGABgKIAAgIIgZiIIgmB6QgBADACAGIADAIIgBAEQgCAGgKAEQgKAEgLAAQgbAAAAgOQgBgGAHgFQAGgEAAgDIA8i0IgDgOQAAgFAEgHQADgGAHgGQAOgNAMAAQAIAAAGAGQAFAGABAKIgCATIAkC7QABADAFAEQAGADABADIABAGQAAAJgLAHQgLAHgNAAQgIAAgFgEgACZCFIgEgBIgNgBQgIgBgGgEQgHgDgHgFQgMgKgKgPQgKgPgGgSQgHgQgBgQIgeAFIAABCQAGAMgBAHQABAGgFACQgFAEgKAAIgLgDIgLgEIgJgFQgDgCgBgDQAAgHAHgKIAAg5QgEgCgCgEQgCgEABgFQgBgLAIgLIAAhpQgGgJAAgFQAAgJAGgDQAGgFAKAAQAHAAAFACIAMAGQAFADACAEQADAEABADQAAAEgJAQIAABVIAegEQACgdAEgXQAEgWAHgQQAGgQAHgIQAHgJAHAAIAUAEIAcgEQAHAAAIAEQAGADAHAHQAGAFAGAIIAJAQQAIAQAEAUQADAWAAAZQABAbgGAaQgFAagJATQgIAUgMAMQgLALgMAAIgDAAgAB+hdQgGAIgFANQgEAOgDAQQgDARAAARIAFAqIANArQADAJAFAEQAEAGADAAQARAAAKgtQAGgWACgdQAAgZgCgUQgDgTgFgMQgFgNgGgHQgHgGgHAAQgHAAgFAJgAFdB7QgNgFAAgFQAAgHAFgKIAAhcQgSAqgjAAQgOAAgKgLQgJgKgGgVQgKgiAAhNIgFgOQAAgFAJgFQAKgEALgBQAYABAAASIgCAIIgCAJQAAAyADAYQAEAZAGAAQAJAAAIgKQAHgLAIgVQAGgTAEgPQACgQAAgNQgFgLAAgEQAAgHAGgFQAGgDALAAQAQAAAKAHQAKAHAAAHQAAAEgJAQIAADDQAGALAAAHQAAAGgFADQgEADgKAAQgMgBgMgGgAl5B7QgOgFAAgFQABgHAFgKIgDjHQgFgJgBgGQAAgIAHgDQAFgFAMAAQAPAAALAIQAJAHAAAHQAAAEgIAQIADBcIAIAAQALgaAUgoQAQgbAQgYIADgKQAFgIAIAAQAJAAAMAJQAPALgCANQgBAIgQAEIg8BpQATAdAmAjQAJACACACIADADQAFAFAAAFQAAAJgHAJQgHAHgHAEQgGAEgIAAQgGAAgDgDQgCgCgCgIIgDgJQgYgXgcgqIgRAAIAAA5QAGALAAAIQAAAGgFACQgFAEgJAAQgMgBgMgGg");
	this.shape.setTransform(46.4,20.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.9,6.7,79,27.6);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AEMDCQgNgGAAgFQAAgHAGgKIADgoIhvALIAAAgQAFAKAAAJQAAAFgEADQgFACgKAAQgQAAgKgFQgLgGAAgFQAAgGAGgKIAAgtQgFgKAAgFQAAgIAFgEQAEgEAKAAQADAAAHAEQAMgoALgvQAMgsAMg1QgGgKAAgFQAAgIAGgEQAGgEAMAAQAKAAAIAEIAQAGQAGgEALAAQAOAAALAIQAKAGAAAIQAAADgIAQIAJCYIALgCQALAAAFAHQAGAHAAAIQAAADgIAQIgDA1QAFAKAAAJQAAAFgFADQgEACgKAAQgMAAgMgFgACzBaIA9gEIgLigIgGgCgAFZCPQgKgGAAgFQAAgGAGgKIgDjOQgGgJAAgGQAAgIAGgEQAGgDAMAAQAOAAALAHQAJAHAAAHQAAAEgIAQIAECGQAlhXAjhFIgBgGQAAgQAWAAQANAAAMAGQALAHAAAIQAAAEgIAQIAADAQAFALAAAIQAAALgTAAQgLAAgNgGQgNgGAAgFQAAgGAGgKIAAiBQgXA4gxBhIgDAIQgFAHgKADIgGABQgKAAgLgHgAhRCPQgKgGAAgFQAAgGAGgKIgDjOQgGgJAAgGQAAgIAGgEQAGgDAMAAQAOAAALAHQAJAHAAAHQAAAEgIAQIAECGQAlhXAhhFIgBgGQAAgQAWAAQANAAAMAGQALAHAAAIQAAAEgIAQIAADAQAFALAAAIQAAALgTAAQgLAAgNgGQgNgGAAgFQAAgGAGgKIAAiBQgXA4gvBhIgDAIQgFAHgKADIgGABQgKAAgLgHgAknCPQgLgEgLgJQgKgKACgFQACgGAIgHQARg9AOgpQAUg8APgnQgCgMACgEQAEgIAKAAIAPABQAMABAJADQAMAEABAFQABAEgEARQALAxAUBIQAPgJAJACQALACAGAJQAGAKAAAKQAAAQgWAAIgNAAIALAlQALALAAAIQAAAJgQAEQgHACgIAAQgTAAgCgHQgEgPABgEIgOgpIhIALIgIAeQACAMgCAIQgDAHgIAAQgFAAgGgCgAj8AuIAwgJIgThKgAn1CLQgNgGAAgFQAAgGAGgKIAAhGIgEgGQgBgEAAgGQAAgIACgFIADgJIAAhfQgFgJAAgFQAAgIAGgEQAGgEALAAQAPAAAKAHQAKAHAAAHQAAAEgIAQIAABOIBAgKIAAhQQgFgLAAgHQAAgFADgCQAFgEAEAAIALAAQAMgBAKAFQAHADADAEQADAEAAAGQAAAEgIAQIAAA+IAGAGQACADAAAGQAAAIgCAGQgDAHgDAEIAABQQAGAOAAAFQAAALgTAAQgMAAgNgGQgMgGAAgFQAAgGAFgKIAAhIIhAAKIAABOQAGALAAAIQAAAFgFADQgFADgKAAQgLAAgNgGgAg1iiIgBgMQAAgJAFgEQAGgFALAAQAIAAAFADQAEACACAFQAAAGgEAFQAEAKANABQAHAAAFgFQAFgFAEgJQgEgJAEgFQADgFALAAQAJAAAHAFQAGAEAAAJQgBAFgFADQgKAlgpABQgsAAgJgcg");
	this.shape.setTransform(73.9,19.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(22.4,-0.4,103.1,39.9);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.stre();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,81,76);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.box();
	this.instance.setTransform(1.5,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.5,0.9,90,60);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.key();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,36,66);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.but();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,49,58);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hed();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,83,88);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.leg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,94,117);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.stopa();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,52,63);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lap();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,21,54);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.xv();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,34,61);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.show();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,231,171);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#990000").ss(1,1,1).p("Eg2cgjSMBs5AAAMAAABGlMhs5AAAg");
	this.shape.setTransform(348.5,226);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Eg2cAjTMAAAhGlMBs4AAAMAAABGlg");
	this.shape_1.setTransform(348.5,226);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ffon();
	this.instance.setTransform(-552,-65.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-552,-65.3,631,435);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.zam();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,42,61);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ31();
	this.instance.setTransform(26.4,24.8,0.653,0.653,0,0,0,40.4,37.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,53,49.7);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ33();
	this.instance.setTransform(26.4,24.8,1,1,0,0,0,26.4,24.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:34.8},4).to({y:24.8},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,53,49.7);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ10();
	this.instance.setTransform(48,30.1,1,1,0,0,0,115.5,85.5);
	this.instance.alpha = 0.352;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ30();
	this.instance_1.setTransform(46.5,31.5,1,1,0,0,0,46.5,31.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:1.11,scaleY:1.11},0).wait(1));

	// Слой 2
	this.instance_2 = new lib.show();
	this.instance_2.setTransform(-51.9,-43.9,0.865,0.865);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.5,0.9,90,60);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 40
	this.instance = new lib.Символ40();
	this.instance.setTransform(273.4,47.7,1.134,1.134,0,0,0,50.6,20.5);
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance.cache(5,5,83,32);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.07,scaleY:1.07,y:47.8},9,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,y:47.7},10,cjs.Ease.get(1)).to({scaleX:1.07,scaleY:1.07,y:47.8},10,cjs.Ease.get(-1)).to({scaleX:1.13,scaleY:1.13,y:47.7},10,cjs.Ease.get(1)).wait(1));

	// Символ 39
	this.instance_1 = new lib.Символ39();
	this.instance_1.setTransform(68.8,44.5,1,1,0,0,0,57.6,20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.07,scaleY:1.07},9,cjs.Ease.get(-1)).to({scaleX:1.14,scaleY:1.14},10,cjs.Ease.get(1)).to({regY:20.6,scaleX:1.07,scaleY:1.07,y:44.6},10,cjs.Ease.get(-1)).to({regY:20.5,scaleX:1,scaleY:1,y:44.5},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(33.5,23.6,279.9,39.9);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ25();
	this.instance.setTransform(24.4,29.1,1,1,0,0,0,24.4,29.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:7.5,x:28,y:32.5},22).to({rotation:0,x:24.4,y:29.1},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,49,58);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ23();
	this.instance.setTransform(41.5,43.8,1,1,0,0,0,41.5,43.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({skewX:2.2,skewY:3.1,x:42.2,y:46},27).to({skewX:0,skewY:0,x:41.5,y:43.8},23).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,83,88);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.man();
	this.instance.setTransform(0,-1.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCF2C6").s().p("AB7CYQjmg3AAgZQAAgEACgDQgMgFAAgJQAAgRAcABIgBgDQAAgGAHgGQAGgGAAgDIgFg6IABgNQADgKAFgFIAAAAIgCgBQgQgKgKgHQgNgLAAgMIACgHIgIgBQgKgBgFgGQgCgDAAgFQAAgFACgDQAIgNAqAJQAzALgBAYQAAAFgGAHQAMAJAbALQANAFAAANQAAAGgGAJQAPANA3BDQA5BIAGATIAAAjIgPgDgAAZBfIgJgEIgSgGIAbAKgAAuA/IgJAAIgFACQAFABAQAHIACAAQAPAHAEgBQAAgCgFgHIgGgIgAggAhIAFAAIgCgDIgDADgAg0gxIABAAIgBgBg");
	this.shape.setTransform(261,91.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F9F2CA").s().p("ABLA1Qg3hDgPgNQAGgJAAgGQAAgNgNgFQgbgKgMgJQAGgHAAgGQABgYgzgKQgqgKgIANQgCgFAAgEQAAgDACgBIACgBIgEgBIAAgFIDMAxIBHARIAADdQgGgTg5hIgAA3BiIgCgBIgHgKIARAAIAGAIQAFAGAAADIgBAAQgFAAgNgGgAhLg0IACABIAAAAIgCgBgAh4hjIAIAAIgCAHIgGgHg");
	this.shape_1.setTransform(261,89.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ24();
	this.instance_1.setTransform(163.5,84.9,1,1,0,0,0,24.4,29.1);

	this.instance_2 = new lib.Символ22();
	this.instance_2.setTransform(75,44.7,1,1,0,0,0,41.5,43.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1.1,308,137);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ20();
	this.instance.setTransform(47.1,58.5,1,1,0,0,0,47.1,58.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:5.4,x:43.1,y:63.2},29).to({rotation:0,x:47.1,y:58.5},34).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,94,117);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ18();
	this.instance.setTransform(26.2,31.6,1,1,0,0,0,26.2,31.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1.01,skewX:-3.3,skewY:-9.5,x:24.9,y:27.8},11).to({scaleY:1,skewX:0,skewY:0,x:26.2,y:31.6},13).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,52,63);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ14();
	this.instance.setTransform(17.1,30.5,1,1,0,0,0,17.1,30.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1.08,rotation:-4.2,x:17.8,y:33},23).to({scaleY:1,rotation:0,x:17.1,y:30.5},29).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,34,61);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.setTransform(10.7,26.8,1,1,0,0,0,10.7,26.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:4,x:9.3,y:26},21).to({rotation:0,x:10.7,y:26.8},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,21,54);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.setTransform(19.6,30.6,1,1,7.5,0,0,21.1,30.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.2,-2.5,49.6,66);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ29();
	this.instance.setTransform(259.1,31.6,1,1,0,0,0,46.5,31.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.instance_1 = new lib.Символ29();
	this.instance_1.setTransform(45.1,30.6,1,1,0,0,0,46.5,31.5);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.9,-56.3,445,172);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ19();
	this.instance.setTransform(273.5,78.6,1,1,0,0,0,47.1,58.5);

	this.instance_1 = new lib.Символ21();
	this.instance_1.setTransform(149.9,68.5,1,1,0,0,0,149.9,68.5);

	this.instance_2 = new lib.Символ17();
	this.instance_2.setTransform(328.8,89.7,1,1,0,0,0,26.2,31.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1.1,354.6,138.2);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.setTransform(66.2,72.5,1,1,0,0,0,17.1,30.5);

	this.instance_1 = new lib.Символ12();
	this.instance_1.setTransform(36.8,62.8,1,1,0,0,0,10.7,26.8);

	this.instance_2 = new lib.cat();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,88,103);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ28();
	this.instance.setTransform(18,14.9,1,1,16.7,0,0,18,14.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:18.1,rotation:6.8,x:18.1,y:15},6,cjs.Ease.get(-1)).to({regY:15,rotation:-6.4},8,cjs.Ease.get(1)).to({rotation:5.8},8,cjs.Ease.get(-1)).to({regX:18,regY:14.9,rotation:16.7,x:18,y:14.9},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.9,-4.5,53.5,73.6);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ27();
	this.instance.setTransform(161.4,-10.7,1.253,1.253,0,0,0,162.3,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,350.6,50.1);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.setTransform(26.5,33.1,1,1,0,0,0,21.2,30.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:21.1,rotation:-23,x:28.8},21).to({regX:21.2,rotation:0,x:26.5},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,49.6,66);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.setTransform(26.5,33.1,1,1,0,0,0,21.2,30.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:30.6,rotation:22.4,x:24.2,y:32.6},12).to({regY:30.5,rotation:0,x:26.5,y:33.1},12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,49.6,66);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ32();
	this.instance.setTransform(26.4,24.8,1,1,0,0,0,26.4,24.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({x:235.5},0).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,53,49.7);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.setTransform(26.5,33.1,1,1,0,0,0,21.2,30.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:30.4,rotation:-15,x:29.6,y:33.8},14).to({regY:30.5,rotation:0,x:26.5,y:33.1},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,49.6,66);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.setTransform(26.5,33.1,1,1,0,0,0,21.2,30.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-20.7,x:27.3,y:31.5},19).to({rotation:0,x:26.5,y:33.1},21).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,49.6,66);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.setTransform(26.5,33.1,1,1,0,0,0,21.2,30.5);
	this.instance.shadow = new cjs.Shadow("rgba(255,0,0,1)",0,0,5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-6,65,81);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ38();
	this.instance.setTransform(175.3,19.7,1,1,0,0,0,175.3,19.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,350.6,50.1);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ11();
	this.instance.setTransform(24.8,33,1,1,0,0,0,24.8,33);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-24,x:26.4},17).to({rotation:0,x:24.8},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-6,65,81);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ37();
	this.instance.setTransform(25.3,154,1,1,0,0,0,24.8,33);

	this.instance_1 = new lib.Символ36();
	this.instance_1.setTransform(27.3,195.2,1.032,1,0,0,180,24.8,33);

	this.instance_2 = new lib.Символ35();
	this.instance_2.setTransform(27.1,113.7,1,1,-15,0,0,24.7,32.9);

	this.instance_3 = new lib.Символ26();
	this.instance_3.setTransform(24.8,73,1,1,0,0,0,24.8,33);

	this.instance_4 = new lib.Символ16();
	this.instance_4.setTransform(28.6,32.9,1.058,1,0,9.9,-170.1,24.8,33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.2,1.3,66,236.9);


// stage content:



(lib.garage500300 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		
		this.button.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open(clickTAG, "_blank");
		}
		
		
		this.box.addEventListener("click", fl_ClickToGoToWebPage1);
		
		function fl_ClickToGoToWebPage1() {
			window.open(clickTAG, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 3
	this.box = new lib.Символ7();
	this.box.setTransform(254.5,170,1,1,0,0,0,152,30.5);

	this.instance = new lib.Символ4();
	this.instance.setTransform(241.7,254.4,1,1,0,0,0,177.5,68.5);

	this.instance_1 = new lib.Символ3();
	this.instance_1.setTransform(437.6,277.1,1,1,0,0,0,44,51.5);

	this.instance_2 = new lib.Символ1();
	this.instance_2.setTransform(475.2,41.1,1,1,0,0,0,18,33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.box}]}).wait(1));

	// Слой 6
	this.button = new lib.Символ9();
	this.button.setTransform(277.5,145,1,1,0,0,0,348.5,226);
	new cjs.ButtonHelper(this.button, 0, 1, 2, false, new lib.Символ9(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button).wait(1));

	// Слой 1
	this.arrow = new lib.Символ34();
	this.arrow.setTransform(147.9,96.4,1,1,0,0,0,26.4,24.8);

	this.timeline.addTween(cjs.Tween.get(this.arrow).wait(1));

	// Слой 2
	this.instance_3 = new lib.Символ41();
	this.instance_3.setTransform(257.4,27.2,1,1,0,0,0,175.3,19.7);
	this.instance_3.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,10);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Слой 4
	this.instance_4 = new lib.Символ6();
	this.instance_4.setTransform(264.2,102.6,1,1,0,0,0,25.7,114.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Слой 7
	this.instance_5 = new lib.Символ8();
	this.instance_5.setTransform(260.2,277.1,1,1,0,0,0,21.2,30.5);

	this.instance_6 = new lib.Символ5();
	this.instance_6.setTransform(339,136.2,1.029,0.979,0,0,0,-159.1,150);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgWAnQAXgnAXgmIAABNg");
	this.shape.setTransform(181.7,-62.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_6},{t:this.instance_5}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(178,68,699,454);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;