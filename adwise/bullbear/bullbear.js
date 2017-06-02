(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/back.jpg?1496403442182", id:"back"},
		{src:"images/bear.png?1496403442182", id:"bear"},
		{src:"images/beartale.png?1496403442182", id:"beartale"},
		{src:"images/bull.png?1496403442182", id:"bull"},
		{src:"images/bullhead.png?1496403442182", id:"bullhead"},
		{src:"images/bulltale.png?1496403442182", id:"bulltale"},
		{src:"images/logo.png?1496403442182", id:"logo"},
		{src:"images/pattern.png?1496403442182", id:"pattern"},
		{src:"images/white.jpg?1496403442182", id:"white"}
	]
};



lib.ssMetadata = [];


// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,326);


(lib.bear = function() {
	this.initialize(img.bear);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,238,188);


(lib.beartale = function() {
	this.initialize(img.beartale);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,91);


(lib.bull = function() {
	this.initialize(img.bull);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,293,227);


(lib.bullhead = function() {
	this.initialize(img.bullhead);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,152,99);


(lib.bulltale = function() {
	this.initialize(img.bulltale);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,39,115);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,138,38);


(lib.pattern = function() {
	this.initialize(img.pattern);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,297);


(lib.white = function() {
	this.initialize(img.white);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,326);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pattern();
	this.instance.setTransform(720,0,0.902,0.901,0,0,180);

	this.instance_1 = new lib.pattern();
	this.instance_1.setTransform(0,0,0.902,0.902);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,720,268);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgqA1IAAhpIAbAAIAAAkIASAAQATAAAKAJQALAHAAASQAAAQgKAKQgKAJgVAAgAgPAjIAPAAQAHgBAFgEQAEgEAAgIQAAgIgEgEQgFgFgHgBIgPAAg");
	this.shape.setTransform(129.6,24.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AAkBBIAAgZIhGAAIAAAZIgZAAIAAguIANAAQAFgJAEgKQADgKABgMQACgLgBgKIAAgVIBNAAIAABTIAQAAIAAAugAgGgmIgBATQgBAKgDAJQgDAJgGAKIAnAAIAAg+IgZAAg");
	this.shape_1.setTransform(117.3,25.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgXAwQgNgIgGgNQgIgMABgPQgBgPAIgMQAGgOANgGQALgIAPABQAPgBALAIQALAGAFAMQAGALgBAOIAAAEIgBAFIhHAAQAAAJAGAGQAEAGAHADQAFAEAIAAQAIAAAIgEQAIgDAHgFIAKAUQgJAGgLAFQgLADgMAAQgQAAgNgHgAAXgMQAAgLgFgFQgHgHgJAAQgIABgHAGQgHAGgCAKIAtAAIAAAAg");
	this.shape_2.setTransform(105,24.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgsA1IAAhpIAwAAQAQAAAKAHQAKAHAAANQAAAIgEAHQgDAFgHAEIAAABQAJAAAFAHQAFAGAAAJQAAALgGAGQgFAHgJAEQgJADgLAAgAgRAjIARAAQAJAAAFgDQAEgFAAgGQAAgGgFgFQgEgDgJAAIgRAAgAgRgIIARAAQAGAAADgEQAEgEAAgGQAAgGgEgDQgDgDgGgBIgRAAg");
	this.shape_3.setTransform(93.8,24.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AAkBBIAAgZIhHAAIAAAZIgZAAIAAguIAOAAQAGgJADgKQADgKABgMQABgLAAgKIAAgVIBNAAIAABTIAPAAIAAAugAgHgmIAAATQgBAKgDAJQgDAJgFAKIAlAAIAAg+IgZAAg");
	this.shape_4.setTransform(81.2,25.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgXAwQgNgIgHgNQgGgMgBgPQABgPAGgMQAHgOAMgGQANgIAOABQAPgBALAIQAKAGAGAMQAFALABAOIgBAEIAAAFIhIAAQABAJAEAGQAFAGAHADQAFAEAIAAQAIAAAIgEQAIgDAGgFIALAUQgJAGgLAFQgMADgLAAQgQAAgNgHgAAYgMQAAgLgHgFQgFgHgKAAQgIABgHAGQgGAGgCAKIAtAAIAAAAg");
	this.shape_5.setTransform(69,24.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AAyBKIgGhRIAAgKIAAgJIAAgFIAAAAIgCAFIgDAJIgEAKIgYA3IgVAAIgYg3IgEgKIgDgJIgCgFIAAAAIAAAEIAAAJIAAALIgGBRIgbAAIAMiTIAdAAIAdBJIADAIIADAJIAAADIAAAAIABgDIADgJIADgIIAehJIAcAAIAMCTg");
	this.shape_6.setTransform(54,22.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AsKEcQh3AAhThTQhThUgBh1QABh1BThTQBThTB3gBIYVAAQB3ABBTBTQBTBTABB1QgBB1hTBUQhTBTh3AAg");
	this.shape_7.setTransform(88.3,23.6,0.829,0.829);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgqA1IAAhpIAbAAIAAAkIASAAQATAAAKAJQALAHAAASQAAAQgKAKQgKAJgVAAgAgPAjIAPAAQAHgBAFgEQAEgEAAgIQAAgIgEgEQgFgFgHgBIgPAAg");
	this.shape_8.setTransform(130.7,24.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAkBBIAAgZIhGAAIAAAZIgaAAIAAguIAOAAQAGgJADgKQADgKABgMQACgLgBgKIAAgVIBNAAIAABTIAQAAIAAAugAgHgmIAAATQgBAKgDAJQgDAJgFAKIAlAAIAAg+IgZAAg");
	this.shape_9.setTransform(118.4,25.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgXAwQgMgIgIgNQgHgMAAgPQAAgPAHgMQAHgOAMgGQANgIAOABQAPgBALAIQAKAGAGAMQAGALAAAOIgBAEIgBAFIhHAAQABAJAFAGQAEAGAHADQAFAEAIAAQAIAAAIgEQAIgDAGgFIALAUQgIAGgMAFQgLADgMAAQgQAAgNgHgAAYgMQgBgLgFgFQgHgHgJAAQgIABgHAGQgHAGgCAKIAuAAIAAAAg");
	this.shape_10.setTransform(106.1,24.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgsA1IAAhpIAwAAQAQAAAKAHQAKAHAAANQAAAIgEAHQgDAFgHAEIAAABQAJAAAFAHQAFAGAAAJQAAALgGAGQgFAHgJAEQgJADgLAAgAgRAjIARAAQAJAAAFgDQAEgFAAgGQAAgGgFgFQgEgDgJAAIgRAAgAgRgIIARAAQAGAAADgEQAEgEAAgGQAAgGgEgDQgDgDgGgBIgRAAg");
	this.shape_11.setTransform(94.9,24.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAkBBIAAgZIhHAAIAAAZIgYAAIAAguIANAAQAFgJAEgKQADgKABgMQABgLAAgKIAAgVIBNAAIAABTIAPAAIAAAugAgGgmIgBATQgBAKgDAJQgDAJgGAKIAnAAIAAg+IgZAAg");
	this.shape_12.setTransform(82.3,25.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgWAwQgNgIgIgNQgGgMAAgPQAAgPAGgMQAHgOANgGQALgIAPABQAPgBALAIQAKAGAGAMQAFALABAOIgBAEIAAAFIhIAAQAAAJAFAGQAFAGAHADQAFAEAIAAQAIAAAIgEQAIgDAHgFIAKAUQgIAGgMAFQgMADgLAAQgQAAgMgHgAAXgMQABgLgHgFQgFgHgKAAQgIABgHAGQgGAGgCAKIAsAAIAAAAg");
	this.shape_13.setTransform(70.1,24.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAyBKIgGhRIAAgKIAAgJIAAgFIAAAAIgCAFIgDAJIgEAKIgYA3IgVAAIgYg3IgEgKIgDgJIgCgFIAAAAIAAAEIAAAJIAAALIgGBRIgbAAIAMiTIAdAAIAdBJIADAIIADAJIAAADIAAAAIABgDIADgJIADgIIAehJIAcAAIAMCTg");
	this.shape_14.setTransform(55.1,22.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CC3300").s().p("AsKEcQh3AAhThTQhThUgBh1QABh1BThTQBThTB3gBIYVAAQB3ABBTBTQBTBTABB1QgBB1hTBUQhTBTh3AAg");
	this.shape_15.setTransform(88.3,23.6,0.829,0.829);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,176.6,47.3);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AASA1IgagsIgOAAIAAAsIgaAAIAAhpIAaAAIAAApIANAAIAYgpIAeAAIgiAzIAAAAIAmA2g");
	this.shape.setTransform(104.1,25.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AAkA1IAAhpIAbAAIAABpgAg+A1IAAhpIAbAAIAAAkIATAAQAQABALAIQAKAHABASQAAAQgKAJQgKAKgSAAgAgjAiIAOAAQAKAAAEgEQAEgFAAgHQAAgIgEgEQgFgFgJgBIgOAAg");
	this.shape_1.setTransform(89.9,25.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgyBKIAAiTIBZAAIAAAXIg+AAIAAAjIAcAAQAOgBAKAHQAKAFAGAIQAGALAAANQAAAOgGALQgFAKgLAGQgKAFgOAAgAgXAzIAYAAQALAAAGgGQAGgGAAgLQAAgKgGgGQgHgGgLAAIgXAAg");
	this.shape_2.setTransform(76.1,23.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC00").s().p("AsKEcQh3AAhThTQhThUgBh1QABh1BThTQBThTB3gBIYVAAQB3ABBTBTQBTBTABB1QgBB1hTBUQhTBTh3AAg");
	this.shape_3.setTransform(88.3,23.6,0.829,0.829);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AASA1IgagsIgOAAIAAAsIgaAAIAAhpIAaAAIAAApIANAAIAYgpIAeAAIgiAzIAAAAIAmA2g");
	this.shape_4.setTransform(104.1,25.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAkA1IAAhpIAbAAIAABpgAg+A1IAAhpIAbAAIAAAkIATAAQAQABALAIQAKAHABASQAAAQgKAJQgKAKgSAAgAgjAiIAOAAQAKAAAEgEQAEgFAAgHQAAgIgEgEQgFgFgJgBIgOAAg");
	this.shape_5.setTransform(89.9,25.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgyBKIAAiTIBZAAIAAAXIg+AAIAAAjIAcAAQAOgBAKAHQAKAFAGAIQAGALAAANQAAAOgGALQgFAKgLAGQgKAFgOAAgAgXAzIAYAAQALAAAGgGQAGgGAAgLQAAgKgGgGQgHgGgLAAIgXAAg");
	this.shape_6.setTransform(76.1,23.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00CCFF").s().p("AsKEcQh3AAhThTQhThUgBh1QABh1BThTQBThTB3gBIYVAAQB3ABBTBTQBTBTABB1QgBB1hTBUQhTBTh3AAg");
	this.shape_7.setTransform(88.3,23.6,0.829,0.829);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,176.6,47.3);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bear();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,238,188);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.beartale();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,120,91);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bullhead();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,152,99);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bull();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,293,227);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bulltale();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,39,115);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg+pAX5MAAAgipMB9SgNIMAAAAvxg");
	mask.setTransform(401,173);

	// Слой 1
	this.instance = new lib.back();

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,20.1,800,306);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ28();
	this.instance.setTransform(1549.8,134,1,1,0,0,0,359.9,134);

	this.instance_1 = new lib.Символ28();
	this.instance_1.setTransform(955.9,134,1,1,0,0,0,359.9,134);

	this.instance_2 = new lib.Символ28();
	this.instance_2.setTransform(359.9,134,1,1,0,0,0,359.9,134);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1909.9,268);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ24();
	this.instance.setTransform(88.3,23.6,1,1,0,0,0,88.3,23.6);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,176.6,47.3);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ23();
	this.instance.setTransform(88.3,23.6,1,1,0,0,0,88.3,23.6);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,176.6,47.3);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ22();
	this.instance.setTransform(88.3,23.7,0.921,0.921,0,0,0,88.3,23.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.96,scaleY:0.96},7,cjs.Ease.get(-1)).to({regY:23.6,scaleX:1,scaleY:1,y:23.6},7,cjs.Ease.get(1)).to({scaleX:0.96,scaleY:0.96,y:23.7},8,cjs.Ease.get(-1)).to({regY:23.7,scaleX:0.92,scaleY:0.92},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7,1.9,162.6,43.5);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ21();
	this.instance.setTransform(88.3,23.6,1,1,0,0,0,88.3,23.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.96,scaleY:0.96,y:23.7},7,cjs.Ease.get(-1)).to({regY:23.7,scaleX:0.92,scaleY:0.92},7,cjs.Ease.get(1)).to({regY:23.8,scaleX:0.96,scaleY:0.96,y:23.8},8,cjs.Ease.get(-1)).to({regY:23.6,scaleX:1,scaleY:1,y:23.6},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,176.6,47.3);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ6();
	this.instance.setTransform(19.5,57.5,1,1,0,0,0,19.5,57.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,39,115);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ17();
	this.instance.setTransform(19.5,57.5,1,1,0,0,0,19.5,57.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:19.4,regY:57.6,rotation:8.8,x:27.6,y:62.1},4,cjs.Ease.get(-1)).to({regX:19.5,regY:57.5,rotation:20,x:38,y:67.7},5,cjs.Ease.get(1)).to({regX:19.6,scaleX:1,scaleY:1,rotation:9.8,x:28.9,y:62.6},5,cjs.Ease.get(-1)).to({regX:19.5,scaleX:1,scaleY:1,rotation:0,x:19.5,y:57.5},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,39,115);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.setTransform(146.5,113.5,1,1,0,0,0,146.5,113.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,293,227);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.setTransform(76,49.5,1,1,0,0,0,76,49.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:7.8,x:70.5,y:59},18,cjs.Ease.get(-1)).to({rotation:15,x:65.6,y:67.5},16,cjs.Ease.get(1)).to({rotation:6.8,x:71.2,y:57.8},19,cjs.Ease.get(-1)).to({rotation:0,x:76,y:49.5},16,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,152,99);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 13
	this.instance = new lib.Символ13();
	this.instance.setTransform(203,94,1,1,0,0,0,119,94);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({skewX:0.8,x:204.7,y:94.1},9,cjs.Ease.get(-1)).to({scaleY:1,skewX:2,x:206.4,y:94},10,cjs.Ease.get(1)).to({regX:119.1,scaleY:1,skewX:1,x:204.8,y:94.1},10,cjs.Ease.get(-1)).to({regX:119,skewX:0,x:203,y:94},10,cjs.Ease.get(1)).wait(1));

	// Символ 12
	this.instance_1 = new lib.Символ12();
	this.instance_1.setTransform(60,86.5,1,1,0,0,0,60,45.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1.01,skewX:-3.5,skewY:-6.1,x:65.2,y:89.9},9,cjs.Ease.get(-1)).to({regY:45.6,scaleX:0.99,scaleY:1.01,skewX:-7.4,skewY:-13.1,x:70.9,y:93.5},10,cjs.Ease.get(1)).to({scaleX:1,scaleY:1.01,skewX:-3.6,skewY:-6.5,x:65.6,y:90},10,cjs.Ease.get(-1)).to({regY:45.5,scaleX:1,scaleY:1,skewX:0,skewY:0,x:60,y:86.5},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,322,188);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.setTransform(400,224.5,1,1,0,0,0,400,163);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:400.1,regY:163.1,scaleX:1.02,scaleY:1.02,rotation:6,x:398.6,y:230.7},34,cjs.Ease.get(-1)).to({regY:163,scaleX:1.04,scaleY:1.03,rotation:12.5,x:396.9,y:236.6},35,cjs.Ease.get(1)).to({regX:400.2,scaleX:1.02,scaleY:1.02,rotation:6.1,x:398.6,y:230.6},35,cjs.Ease.get(-1)).to({regX:400,scaleX:1,scaleY:1,rotation:0,x:400,y:224.5},35,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,61.5,802,326);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ27();
	this.instance.setTransform(359.9,134,1,1,0,0,0,359.9,134);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-235},249).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1909.9,268);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ29();
	this.instance.setTransform(914.9,74,1,1,0,0,0,954.9,134);
	this.instance.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.white();
	this.instance_1.setTransform(0.2,0,0.781,1.035);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40,-60,1909.9,397.8);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 14
	this.instance = new lib.Символ14();
	this.instance.setTransform(309,49.5,1,1,0,0,0,76,49.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 15
	this.instance_1 = new lib.Символ15();
	this.instance_1.setTransform(146.5,137.5,1,1,0,0,0,146.5,113.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Символ 16
	this.instance_2 = new lib.Символ16();
	this.instance_2.setTransform(19.5,65.5,1,1,0,0,0,19.5,57.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,385,251);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 8
	this.instance = new lib.Символ18();
	this.instance.setTransform(192.5,125.5,1,1,0,0,0,192.5,125.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1,skewX:2,x:196.9},15,cjs.Ease.get(-1)).to({scaleY:1,skewX:3.9,x:201.1},14,cjs.Ease.get(1)).to({scaleY:1,skewX:1.8,x:196.6,y:125.6},16,cjs.Ease.get(-1)).to({scaleY:1,skewX:0,x:192.5,y:125.5},14,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,385,251);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 10
	this.instance = new lib.Символ10();
	this.instance.setTransform(-61.5,145.5,1,1,0,0,0,192.5,125.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:46.9,y:128.8},30,cjs.Ease.get(-1)).to({x:158.5,y:111.5},33,cjs.Ease.get(1)).to({x:45.4,y:129},45,cjs.Ease.get(-1)).to({x:-61.5,y:145.5},31,cjs.Ease.get(1)).wait(1));

	// Символ 9
	this.instance_1 = new lib.Символ9();
	this.instance_1.setTransform(307,109,1,1,0,0,0,161,94);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:415.4,y:92.3},38,cjs.Ease.get(-1)).to({x:527,y:75},34,cjs.Ease.get(1)).to({x:413.9,y:92.5},30,cjs.Ease.get(-1)).to({x:307,y:109},37,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-254,15,722,256);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.setTransform(507.2,82.7,1,1,0,0,0,253.2,97.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:6.8,y:82.8},34,cjs.Ease.get(-1)).to({regX:253.3,rotation:12.7,x:507.3},35,cjs.Ease.get(1)).to({rotation:6.8,y:82.9},35,cjs.Ease.get(-1)).to({regX:253.2,rotation:0,x:507.2,y:82.7},35,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,722,256);


// stage content:



(lib.bullbear = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVBXIAAgdIAcAAIAAAdgAgVAmIAAgMQAAgKAEgIQAEgHAGgEIAJgKQAHgFADgGQAEgGABgIQAAgIgHgGQgHgFgIgBQgHAAgGADQgHADgGAEIgRgUQAIgIALgEQAMgGAPAAQALAAAMAGQAMAFAIAKQAHALAAANQAAANgDAHQgFAJgGAGIgNAJQgGAFgEAGQgFAHABAHIAAAKg");
	this.shape.setTransform(332.4,270.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAYA9IgVgkIgCgEIgBgCIAAAAIAAACIgCAEIgWAkIgiAAIApg9Igog8IAjAAIATAhIADAFIAAADIAAAAIABgDIADgFIATghIAiAAIgnA8IApA9g");
	this.shape_1.setTransform(320.3,273.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag8BXIAAiqIAcAAIAAAJIAAAGIAAADIAAAAQAHgKAKgFQALgGAKAAQARAAAMAIQAMAIAHAPQAGAOABAUQgBATgHANQgHAOgMAIQgNAIgQAAQgJAAgKgEQgIgFgHgIIAAAAIAAADIAAAHIAAA1gAgOg3QgHAEgFAIQgEAJAAAOQAAAJADAJQAEAGAHAGQAGAFAKAAQAHAAAIgEQAGgFAFgGQADgJAAgMQABgSgJgKQgIgKgNAAQgHAAgHAEg");
	this.shape_2.setTransform(307,275.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgaA3QgPgIgIgPQgIgPAAgRQAAgSAIgOQAIgPAOgIQAOgIAQAAQASAAAMAIQAMAHAHAOQAGANAAARIAAAEIgBAFIhTAAQABALAGAHQAFAIAIADQAGAEAJAAQAKAAAJgEQAJgDAHgHIANAXQgKAIgNAEQgNAFgOAAQgSAAgPgJgAAbgOQAAgMgHgHQgHgHgKAAQgKAAgIAIQgIAGgCAMIA0AAIAAAAg");
	this.shape_3.setTransform(292.4,273.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgyA9IAAh5IA2AAQAUAAAKAIQAMAIAAAPQAAAJgEAHQgEAIgIADIAAABQALABAGAIQAEAIAAAJQAAAMgFAJQgHAHgKAEQgKAEgNAAgAgUAoIAVAAQAKAAAFgEQAFgEAAgIQAAgHgGgFQgFgFgJAAIgVAAgAgUgKIAUAAQAHABAEgFQAFgFgBgGQABgIgFgDQgEgEgIAAIgTAAg");
	this.shape_4.setTransform(279.5,273.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgOA9IAAhfIgpAAIAAgaIBvAAIAAAaIgqAAIAABfg");
	this.shape_5.setTransform(351.6,247.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAbA9IAAg/IAAgIIABgIIgBAAIgEAIIgFAIIgsA/IgdAAIAAh5IAdAAIAABAIAAAJIgBAFIABAAIAEgGIAFgIIArhAIAeAAIAAB5g");
	this.shape_6.setTransform(338.2,247.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AA6A9IgdgxIgPAAIAAAxIgbAAIAAgxIgPAAIgdAxIghAAIAmg9IAAgBIgjg7IAgAAIAbAwIAPAAIAAgwIAbAAIAAAwIAPAAIAbgwIAgAAIgiA7IAAABIAlA9g");
	this.shape_7.setTransform(321.4,247.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag8BXIAAiqIAdAAIAAAJIgBAGIAAADIABAAQAFgKALgFQAKgGALAAQARAAAMAIQAMAIAHAPQAGAOAAAUQAAATgHANQgHAOgNAIQgNAIgPAAQgKAAgIgEQgJgFgHgIIAAAAIAAADIAAAHIAAA1gAgOg3QgHAEgFAIQgEAJAAAOQAAAJADAJQAEAGAHAGQAGAFAKAAQAHAAAIgEQAGgFAEgGQAEgJABgMQAAgSgJgKQgIgKgNAAQgHAAgHAEg");
	this.shape_8.setTransform(304.9,250);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgaA3QgPgJgIgOQgIgPAAgRQAAgRAIgPQAIgOAOgJQAOgIAQAAQASAAAMAIQAMAHAHANQAGAOAAARIAAAEIgBAFIhTAAQABALAGAIQAFAGAIAEQAGAEAJAAQAKAAAJgEQAJgEAHgGIANAWQgKAJgNAFQgNAEgOAAQgSAAgPgJgAAbgOQAAgMgHgHQgHgHgKAAQgKABgIAGQgIAIgCALIA0AAIAAAAg");
	this.shape_9.setTransform(290.3,247.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAqBMIAAgdIhSAAIAAAdIgdAAIAAg2IAQAAQAGgKAEgMQADgMACgNIACgYIAAgZIBYAAIAABgIASAAIAAA2gAgIgsIgBAVQgBAMgDALQgDALgHALIAsAAIAAhIIgdAAg");
	this.shape_10.setTransform(276,249.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AghA3QgPgHgJgPQgJgOAAgTQAAgRAJgPQAJgOAPgJQAQgIARAAQASAAAQAIQAPAJAJAOQAJAPAAARQAAATgJAOQgJAPgPAHQgQAJgSAAQgRAAgQgJgAgRggQgIAFgFAIQgFAJAAAKQAAALAFAIQAFAJAIAFQAIAFAJAAQAKAAAIgFQAIgFAFgJQAFgIAAgLQAAgKgFgJQgFgIgIgFQgIgFgKAAQgJAAgIAFg");
	this.shape_11.setTransform(261,247.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AghA4QgPgIgJgPQgJgPAAgSQAAgRAJgPQAJgOAPgJQAQgIARAAQATAAAOAIQAQAJAJAOQAJAPAAARQAAASgJAPQgJAPgQAIQgOAIgTAAQgRAAgQgIgAgRggQgIAFgFAIQgFAJAAAKQAAALAFAJQAFAIAIAFQAIAFAJAAQAKAAAIgFQAIgFAFgIQAFgJAAgLQAAgKgFgJQgFgIgIgFQgIgFgKAAQgJAAgIAFg");
	this.shape_12.setTransform(319.3,222.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgOA9IAAhfIgoAAIAAgaIBtAAIAAAaIgoAAIAABfg");
	this.shape_13.setTransform(305.6,222.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAeBVIgohLIgWAAIAABLIggAAIAAipIAgAAIAABGIAWAAIAmhGIAiAAIgxBRIAAABIA0BXg");
	this.shape_14.setTransform(292.7,219.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 3
	this.instance = new lib.Символ20();
	this.instance.setTransform(489.8,248.6,1,1,0,0,0,88.3,23.6);

	this.instance_1 = new lib.Символ19();
	this.instance_1.setTransform(122.4,248.6,1,1,0,0,0,88.3,23.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ11();
	this.instance_2.setTransform(133,172,1,1,0,0,0,361,128);

	this.instance_3 = new lib.logo();
	this.instance_3.setTransform(10,7,0.581,0.581);

	this.instance_4 = new lib.Символ2();
	this.instance_4.setTransform(295.8,256,0.775,0.775,0,0,0,400.9,210.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	// Слой 2
	this.instance_5 = new lib.Символ26();
	this.instance_5.setTransform(295.4,162.8,1,1,0,0,0,312.4,168.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(72,84,2080.9,459.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;