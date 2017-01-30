(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/blik.png?1482402748762", id:"blik"},
		{src:"images/csgo_logo.png?1482402748762", id:"csgo_logo"},
		{src:"images/fon.jpg?1482402748762", id:"fon"},
		{src:"images/giphy_0.png?1482402748762", id:"giphy_0"},
		{src:"images/giphy_1.png?1482402748762", id:"giphy_1"},
		{src:"images/giphy_2.png?1482402748762", id:"giphy_2"},
		{src:"images/giphy_3.png?1482402748762", id:"giphy_3"},
		{src:"images/giphy_4.png?1482402748762", id:"giphy_4"},
		{src:"images/giphy_5.png?1482402748762", id:"giphy_5"},
		{src:"images/item_02.png?1482402748762", id:"item_02"},
		{src:"images/item_09.png?1482402748762", id:"item_09"},
		{src:"images/item_14.png?1482402748762", id:"item_14"},
		{src:"images/item_16.png?1482402748762", id:"item_16"},
		{src:"images/logo.png?1482402748762", id:"logo"},
		{src:"images/maxresdefault.png?1482402748762", id:"maxresdefault"},
		{src:"images/OpenCaseNow.png?1482402748762", id:"OpenCaseNow"},
		{src:"images/OpenCaseNow2.png?1482402748762", id:"OpenCaseNow2"},
		{src:"images/Pointing.png?1482402748762", id:"Pointing"},
		{src:"images/slide.png?1482402748762", id:"slide"}
	]
};



lib.ssMetadata = [];


// symbols:



(lib.blik = function() {
	this.initialize(img.blik);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,67,133);


(lib.csgo_logo = function() {
	this.initialize(img.csgo_logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,319,79);


(lib.fon = function() {
	this.initialize(img.fon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,360);


(lib.giphy_0 = function() {
	this.initialize(img.giphy_0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,246);


(lib.giphy_1 = function() {
	this.initialize(img.giphy_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,246);


(lib.giphy_2 = function() {
	this.initialize(img.giphy_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,246);


(lib.giphy_3 = function() {
	this.initialize(img.giphy_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,246);


(lib.giphy_4 = function() {
	this.initialize(img.giphy_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,246);


(lib.giphy_5 = function() {
	this.initialize(img.giphy_5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,246);


(lib.item_02 = function() {
	this.initialize(img.item_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,286,118);


(lib.item_09 = function() {
	this.initialize(img.item_09);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,221,142);


(lib.item_14 = function() {
	this.initialize(img.item_14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,268,142);


(lib.item_16 = function() {
	this.initialize(img.item_16);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,123,60);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,225,95);


(lib.maxresdefault = function() {
	this.initialize(img.maxresdefault);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,132);


(lib.OpenCaseNow = function() {
	this.initialize(img.OpenCaseNow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,268,82);


(lib.OpenCaseNow2 = function() {
	this.initialize(img.OpenCaseNow2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,268,82);


(lib.Pointing = function() {
	this.initialize(img.Pointing);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,187);


(lib.slide = function() {
	this.initialize(img.slide);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,218);


(lib.Символ52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.Pointing, null, new cjs.Matrix2D(0.306,0,0,0.306,-23,-28.6)).s().p("AjkEeIAAo7IHJAAIAAI7g");
	this.shape.setTransform(23,28.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,46,57.3);


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.OpenCaseNow2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,268,82);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgdbA8vMAAAh5dMA63AAAMAAAB5dg");
	this.shape.setTransform(188.4,388.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,376.9,777.6);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.giphy_0();
	this.instance.parent = this;

	this.instance_1 = new lib.giphy_1();
	this.instance_1.parent = this;

	this.instance_2 = new lib.giphy_2();
	this.instance_2.parent = this;

	this.instance_3 = new lib.giphy_3();
	this.instance_3.parent = this;

	this.instance_4 = new lib.giphy_4();
	this.instance_4.parent = this;

	this.instance_5 = new lib.giphy_5();
	this.instance_5.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_4}]},3).to({state:[{t:this.instance_5}]},3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,200,246);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.csgo_logo();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.912,0.912);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,290.9,72.1);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Pointing();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.306,0.306);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,46,57.3);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.giphy_0();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.119,1.34,0,-90,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,329.8,223.7);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.blik();
	this.instance.parent = this;
	this.instance.setTransform(71,5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(71,5,67,133);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.giphy_0();
	this.instance.parent = this;
	this.instance.setTransform(0,182,0.91,1.09,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,268.2,182);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Pointing();
	this.instance.parent = this;
	this.instance.setTransform(-17,5,0.391,0.391);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17,5,58.7,73.2);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,204,255,0.796)").s().p("An/C1QgUgCgOgGIgUACQgwAEgZgNQgXgMgKgbQgKgbALgYQAWgzBfgJQA9gGBmAAIBZAAQBAgKBIgQQBbgXAjgFQAagDAzgDQA2gFA+gQQAsgMBHgYQBLgZBLgbQAdgLAOgDQAZgFAUAGQAKACAIAFIATgGQAcgKAXABQAcAAAXAPQAZAQAEAYQAEAUgJAVQgIATgRAOQgOAMgVAKQgOAGgZAJIi4A8QhmAhhTATQhJAShdAQIimAZQhFAKgmABQgVAAgjgDIgPgCIgGABQgsAGhhAJQgWACgRAAIgRAAg");
	this.shape.setTransform(67.7,18.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,135.4,36.4);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,204,255,0.796)").s().p("AIXDDQiBgFhAgEQhrgHhVgMQhLgKhagUIilgmQhEgPgkgOQgUgIgfgPIgNgHIgGgBQgrgLhegbQgigIgTgJQgRgJgMgLIgSgGQgvgOgSgUQgSgUABgdQABgdATgSQAngnBcAaQA7ARBfAmIBSAgQBAAOBJAJQBdAMAiAJQAYAHAyAQQA0APBBAIQAtAFBKADQBPADBQACQAfABAOACQAZAFAQAMQAJAGAGAIIATAAQAeACAWAJQAaAKAPAWQARAYgEAZQgEAUgQAPQgPAPgUAHQgSAGgXABIgSABIgYgBg");
	this.shape.setTransform(67.4,19.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,134.9,39.3);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.item_02();
	this.instance.parent = this;
	this.instance.setTransform(165.5,14.5,0.58,0.58,0,-15,165);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.1,14.5,178.1,109.1);


(lib.Анимация7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AAwA8IAAhIIgwA0Igvg0IAABIIgoAAIAAh3IAIAAIAIAAIALACIAKAEQAGACAFAFIAnArIApgrQAEgFAFgCIALgEIALgCIAIAAIAIAAIAAB3g");
	this.shape.setTransform(163.3,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("AgrA8QgIAAgGgCQgHgCgFgDQgFgDgCgFQgDgFAAgFIAAhFQAAgGADgEQADgFAEgDQAFgEAHgBQAGgCAIAAIBWAAQAJAAAGACQAHABAFADQAKAHAAAMIAABFQAAAGgDAFQgCAEgFADQgFADgHACQgHABgIABgAgnAjIBPAAIAAhFIhPAAg");
	this.shape_1.setTransform(145,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC00").s().p("AgrA8QgIAAgGgCQgHgCgEgDQgGgDgCgFQgDgFAAgGIAAhEQAAgGADgEQACgFAGgDQAEgDAHgCQAGgCAIAAIBWAAQAJAAAGACQAIABAEADQALAIAAALQgBAHgEAEIgHAFIgMAGQgGACgIAAIgDAAIAAgYIhQAAIAABFIBQAAIAAgZIAoAAIAAAYQAAAHgDAEQgDAFgFADQgEADgIACQgGABgIABg");
	this.shape_2.setTransform(127.4,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC00").s().p("AgOATIAAglIAdAAIAAAlg");
	this.shape_3.setTransform(116.4,4.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC00").s().p("AgYA8QgHgBgGgBQgHgCgGgDQgEgDgDgFQgEgEAAgHIAAhdIAFAAQAQABAKAFQAKAIAAALIAABFIBSAAQgBAGgDAFQgDAFgFADIgMAEQgGABgIABg");
	this.shape_4.setTransform(107.2,0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCC00").s().p("AgXA8QgIgBgHgBQgHgCgFgDQgFgDgDgFQgCgEAAgHIAAhdIADAAQARABAKAFQAJAIAAALIAABFIBTAAQgBAGgDAFQgDAFgFADIgMAEQgGABgIABg");
	this.shape_5.setTransform(93.4,0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFCC00").s().p("AAoA8IAAgvIhPAAIAAASQgBAJgCAEQgCAFgGAEQgFADgHACQgHACgIAAIgDAAIAAhdQAAgGAEgFQACgFAGgEQAFgDAGgBQAGgCAIAAIB7AAIAAB3gAgngLIBPAAIAAgXIhPAAg");
	this.shape_6.setTransform(77.7,0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFCC00").s().p("AAhA8Ig3hHIA8AAIAAgXIhPAAIAABBQAAAIgDAGQgCAGgFADQgGADgGABIgOABIgEAAIAAh2IB7AAQARABAJAFQAKAIAAALIAAAYQAAAKgJAFQgJAGgQACIAmAvg");
	this.shape_7.setTransform(59.9,0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFCC00").s().p("AgrA8QgIAAgGgCQgGgCgFgDQgFgDgDgFQgDgFAAgGIAAhEQAAgGADgEQADgFAFgDQAEgDAHgCQAGgCAIAAIBXAAQAQABAKAFQAFAEADAEQACAFAAAGIh3AAIAAAXIBLAAIAAAYIhLAAIAAAWIB3AAQAAAGgDAFQgCAEgFADQgFADgHACQgHABgHABg");
	this.shape_8.setTransform(42.2,0.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFCC00").s().p("AAwA8IAAhIIgwA0Igvg0IAABIIgoAAIAAh3IAIAAIAIAAIALACIAKAEQAGACAFAFIAnArIApgrQAEgFAFgCIALgEIALgCIAIAAIAIAAIAAB3g");
	this.shape_9.setTransform(23.9,0.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFCC00").s().p("AAoA8IAAgvIhQAAIAAASQABAJgDAEQgCAFgGAEQgFADgHACQgHACgIAAIgCAAIAAhdQAAgGACgFQAEgFAFgEQAEgDAHgBQAHgCAHAAIB8AAIAAB3gAgogLIBQAAIAAgXIhQAAg");
	this.shape_10.setTransform(5.6,0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFCC00").s().p("AgrA8QgIAAgGgCQgGgCgFgDQgFgDgDgFQgDgFAAgGIAAhEQAAgGADgEQADgFAFgDQAEgDAHgCQAGgCAIAAIBXAAQARABAJAFQAKAHAAAMIh3AAIAABFIBPAAIAAgWIgcAAQgNAAgKgHQgLgGgBgHIAAgEIBnAAIAAAtQAAAHgDAEQgCAFgFADQgFADgHACQgHABgHABg");
	this.shape_11.setTransform(-12,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.8,-6.1,197.8,15.6);


(lib.Анимация6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-103.8,-43.8,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103.8,-43.8,207.6,87.7);


(lib.Анимация5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-103.8,-43.8,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103.8,-43.8,207.6,87.7);


(lib.Анимация1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.maxresdefault();
	this.instance.parent = this;
	this.instance.setTransform(-136.7,-36.1,0.547,0.547);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136.7,-36.1,273.5,72.2);


(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(1));

	// Слой 1
	this.instance = new lib.Символ52();
	this.instance.parent = this;
	this.instance.setTransform(22.9,28.7,1,1,0,0,0,22.9,28.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.35,scaleY:1.35},4).to({scaleX:1,scaleY:1},5).to({scaleX:1.35,scaleY:1.35},5).to({scaleX:1,scaleY:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,46,57.3);


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Слой 1
	this.instance = new lib.Символ50();
	this.instance.parent = this;
	this.instance.setTransform(134,41,1,1,0,0,0,134,41);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:41.1,scaleX:0.9,scaleY:0.9,x:134.1,y:41.1},4).to({regY:41,scaleX:1,scaleY:1,x:134,y:41},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,268,82);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AM+BSIgPgCQgHgBgFgDQgGgEgDgEQgEgGAAgGIB+AAIAAgXIhYAAIgOgCQgHgBgFgEQgFgDgDgFQgEgEAAgHIAAgTQAAgHAEgFQADgGAFgDQAFgEAHgBIAOgCIBaAAQASAAAKAGQAGADACAFQADAFAAAHIh8AAIAAAVIBVAAIAOABQAHACAGADQAFACADAFQAEAFAAAGIAAAZQAAANgLAHQgKAGgSAAgADABSQgKAAgJgCQgJgDgIgEQgHgEgFgHQgEgGAAgIICnAAIAAgfIh1AAQgKAAgJgDQgJgBgHgFQgHgEgEgEQgEgHAAgJIAAgbQAAgKAEgIQAEgHAHgEQAHgFAJgCQAJgCAKAAIB4AAQAYAAAOAIQAOAIAAATIimAAIAAAeIByAAIATACQAKACAHAEQAHADAFAFQAEAHAAAHIAAAhQAAAJgDAHQgEAGgHAFQgPAIgYAAgAqXBSQgKAAgJgCQgKgDgHgEQgHgEgFgHQgEgGAAgIICnAAIAAgfIh1AAQgKAAgJgDQgJgBgHgFQgHgEgEgEQgEgHAAgJIAAgbQAAgKAEgIQAEgHAHgEQAHgFAJgCQAJgCAKAAIB4AAQAXAAAPAIQAOAIAAATIimAAIAAAeIBxAAIAUACQAKACAHAEQAHADAEAFQAFAHAAAHIAAAhQAAAJgEAHQgDAGgHAFQgPAIgYAAgAJWBSIgOgCIgMgFIgIgIQgDgFAAgGIAAhgIApAAIAAB6gAH+BSIgNgCIgJgDIgGgDIg7gxIAAAhQAAAHgCAEQgEAFgFADIgMADIgOACIgEAAIAAh6IApAAIAAA1IA2g1IAuAAIg4A4IBLBCgAh8BSQgKAAgJgDQgJgCgHgFQgHgEgEgGQgDgGAAgIIAAhfQAAgIADgGQAEgHAHgEQAHgFAJgCQAJgCAKAAIB5AAQAKAAAJACQAJACAHAFQAOAIAAARIAABfQAAAJgEAGQgEAGgHAFQgHADgJADQgJACgJAAgAh2AwIBvAAIAAheIhvAAgAltBSQgKAAgJgDQgIgCgHgFQgHgEgEgHQgEgGAAgIIAAheQAAgIAEgGQAEgGAHgEQAGgFAJgCQAJgDAKAAIB6AAQAXAAAOAIQANAJAAASIimAAIAABeIBvAAIAAgfIgnAAQgUAAgOgJQgOgIgCgKIAAgGICQAAIAAA/QAAAJgEAGQgEAHgHAEQgGAEgKADQgJACgKAAgAuLBSQgKAAgJgDQgJgCgHgFQgGgEgEgHQgEgGAAgIIAAheQAAgIAEgGQAEgGAGgEQAHgFAJgCQAJgDAKAAIB6AAQALAAAJACQAKACAGAFQAPAJAAARQAAAIgGAGIgKAHQgHAFgJACQgJADgKAAIgFAAIAAgfIhvAAIAABeIBvAAIAAgiIA3AAIAAAhQAAAJgEAGQgEAHgHAEQgHAEgJADQgJACgKAAgALzBRIgLgCIgKgEIgKgHIg9g5IAABGIgpAAIAAh5IAbACIALAEQAFADAFAEIArAoIADACIAOAMIAAgqQAAgHADgEQACgFAGgDQAKgGARAAIADAAIAAB5gAnZBIIAAgyIAoAAIAAAygAnZAAIAAgxIAoAAIAAAxg");
	this.shape.setTransform(95.8,5.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 2
	this.fire2 = new lib.Символ46();
	this.fire2.parent = this;
	this.fire2.setTransform(11.3,10.9,1.475,1.768,0,-90,90,99.9,122.9);
	this.fire2.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.fire2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-206,-136.4,434.9,295);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Am5BYIhUhpIBbAAIAAghIh3AAIAABgQAAAMgEAIQgEAIgHAFQgIAEgJACIgbABIAAitIC2AAQAZAAAPAKQAOAJAAASIAAAiQAAAQgNAIQgOAKgXABIA3BFgAI4BXIAAhRIg0A7Ig1g7IAABRIgrAAIAAiBIARAAIALABIAMAFQAGACAFAFIAtAuIAtguQAEgFAHgCIALgFIAMgBIARAAIAACBgAEFBXIgOgCQgIgCgFgDQgGgEgDgFQgCgFAAgGIAAhLQAAgHACgEQADgGAGgDQAFgEAIgCIAOgBIBiAAQASgBALAIQALAGAAAOIAABMQAAAHgEAFQgCAFgGADQgFADgHABIgQACgAELA8IBYAAIAAhLIhYAAgAAaBXIAAiBICIAAQASgBALAIQALAHAAANIAABKQAAAIgDAFQgDAFgGADQgGADgGACIgQACgABHA8IBYAAIAAhLIhYAAgAjZBXIAAg0IhZAAIAAAVQAAAJgDAGQgDAEgGAFQgGADgHACIgQACIgDAAIAAhlQAAgHADgFQADgGAGgDQAFgEAIgCIAPgBICJAAIAACBgAkyAIIBZAAIAAgXIhZAAgAgKBWIgLgCIgMgEIgLgHIhAg9IAABKIgsAAIAAiAIASAAIAKABIANAFQAFACAFAFIAvAqIACADIAPANIAAgtQAAgHADgFQADgFAFgDQAMgHAPABIAEAAIAACAg");
	this.shape.setTransform(61.3,8.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 2
	this.fire = new lib.Символ46();
	this.fire.parent = this;
	this.fire.setTransform(-19.2,9.5,1.2,1.437,-90,0,0,100,122.9);
	this.fire.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.fire).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-195.8,-110.4,353.6,239.9);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.OpenCaseNow();
	this.instance.parent = this;
	this.instance.setTransform(-46,-25);

	this.instance_1 = new lib.Символ49();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-46,-25);

	this.instance_2 = new lib.OpenCaseNow2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-46,-25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46,-25,268,82);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ42();
	this.instance.parent = this;
	this.instance.setTransform(14.8,529.8,0.377,0.377,-0.2,0,0,0.3,34.9);
	this.instance.alpha = 0.699;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 4
	this.instance_1 = new lib.Символ47();
	this.instance_1.parent = this;
	this.instance_1.setTransform(188.4,358.9,1,0.868,0,0,0,188.4,388.8);
	this.instance_1.alpha = 0.09;
	this.instance_1.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 2
	this.instance_2 = new lib.fon();
	this.instance_2.parent = this;
	this.instance_2.setTransform(9,664,1,1,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,21.4,376.9,674.9);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ35();
	this.instance.parent = this;
	this.instance.setTransform(22.9,28.7,1,1,0,0,0,22.9,28.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,46,57.3);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация7("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(167.1,6.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(144.3,0.1,197.8,15.6);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AEuGTIgBgBIpZAAIgCAAIgBgBIgBgBIgBgBIAAgBIAAAAIAAgBIAAgBIAAgBIABAAIgBgCIABAAIAAgCIABgBIAEgLIABgCIABgEIAAAAIAAgCIABAAIAAgBIADgMIABgDIABgDIABgGIgBgBIABgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAAAIABgBIpjAAIgBABIhNAAQgEgCgDgEIgCgEIgEgDQgEgFgCgGIgEgPIgDgFIgBgGIgBgBQgFgGAAgJQAAgIAEgGIAJgIIAIgGIADgCQACgFAFgEIAHgEIABgBIAAgCIABgFIAFgZIAEgYIAfhyQAPg2AEgcQACgLACgHIAAAAIAAgBIgBgBIAAAAIAAgBIgIgDIgXgLQgLgIgGgDIgHgDQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBgDABgCIABgCIABgEIABgBIABgDIACgHIACgCIAAgDIAAgBIABAAIgBgBIABgBIABgBQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAIAAAAIABgBIABgEIADgDIACgCIABAAIAAgBIA/AAIABABIAIAAIAAgBIARAAIABABIAEAAIKIAAIACgMQAFgzAIggQANgtAWgeQAKgNAVgUQAHgRARgNQALgKAbgNQAhgPAVgDQAOgCAYABIA8ABQAjADAZAIQAjAKAhAZQAeAZAWAiQAVAjAJAnQAEAWAEA6IAAAPICPAAIAFAAIABAAIAGAAIGtAAIAEAAIAEgBIBoAAQAEAAABABQACACAAAEIAAAPIgBAHIgGAGIgTAMQgIAFgIAGIgIAHIgHAFQADAJgFAQQgPA0gSBQQgPBAgLAhIABAXIAAACIAAAAIAFAHIAKALQAGAGAAAHIABACIADAEIADAEIAAABQACADgBACIgBACIgBAEIgHAOIAAADIgFAIIgCAFIgCAIIgDAHIgCACIAAACIAAABIAAAAIgBABIAAAAIAAAAIgBABIAAAAIgBAAIAAABIgHAAIAAABIgDAAIAAgBIgiABIg5gBIgBAAIgBAAIAAAAInNAAIgCAFIgCAOIgIAVIgBABIAAABIgCAGIgFATIgBACIgFAGIgCABIgCAAIgCAAg");
	var mask_graphics_1 = new cjs.Graphics().p("AEuGTIgBgBIpZAAIgCAAIgBgBIgBgBIgBgBIAAgBIAAAAIAAgBIAAgBIAAgBIABAAIgBgCIABAAIAAgCIABgBIAEgLIABgCIABgEIAAAAIAAgCIABAAIAAgBIADgMIABgDIABgDIABgGIgBgBIABgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAAAIABgBIpjAAIgBABIhNAAQgEgCgDgEIgCgEIgEgDQgEgFgCgGIgEgPIgDgFIgBgGIgBgBQgFgGAAgJQAAgIAEgGIAJgIIAIgGIADgCQACgFAFgEIAHgEIABgBIAAgCIABgFIAFgZIAEgYIAfhyQAPg2AEgcQACgLACgHIAAAAIAAgBIgBgBIAAAAIAAgBIgIgDIgXgLQgLgIgGgDIgHgDQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBgDABgCIABgCIABgEIABgBIABgDIACgHIACgCIAAgDIAAgBIABAAIgBgBIABgBIABgBQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAIAAAAIABgBIABgEIADgDIACgCIABAAIAAgBIA/AAIABABIAIAAIAAgBIARAAIABABIAEAAIKIAAIACgMQAFgzAIggQANgtAWgeQAKgNAVgUQAHgRARgNQALgKAbgNQAhgPAVgDQAOgCAYABIA8ABQAjADAZAIQAjAKAhAZQAeAZAWAiQAVAjAJAnQAEAWAEA6IAAAPICPAAIAFAAIABAAIAGAAIGtAAIAEAAIAEgBIBoAAQAEAAABABQACACAAAEIAAAPIgBAHIgGAGIgTAMQgIAFgIAGIgIAHIgHAFQADAJgFAQQgPA0gSBQQgPBAgLAhIABAXIAAACIAAAAIAFAHIAKALQAGAGAAAHIABACIADAEIADAEIAAABQACADgBACIgBACIgBAEIgHAOIAAADIgFAIIgCAFIgCAIIgDAHIgCACIAAACIAAABIAAAAIgBABIAAAAIAAAAIgBABIAAAAIgBAAIAAABIgHAAIAAABIgDAAIAAgBIgiABIg5gBIgBAAIgBAAIAAAAInNAAIgCAFIgCAOIgIAVIgBABIAAABIgCAGIgFATIgBACIgFAGIgCABIgCAAIgCAAg");
	var mask_graphics_2 = new cjs.Graphics().p("AEuGTIgBgBIpZAAIgCAAIgBgBIgBgBIgBgBIAAgBIAAAAIAAgBIAAgBIAAgBIABAAIgBgCIABAAIAAgCIABgBIAEgLIABgCIABgEIAAAAIAAgCIABAAIAAgBIADgMIABgDIABgDIABgGIgBgBIABgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAAAIABgBIpjAAIgBABIhNAAQgEgCgDgEIgCgEIgEgDQgEgFgCgGIgEgPIgDgFIgBgGIgBgBQgFgGAAgJQAAgIAEgGIAJgIIAIgGIADgCQACgFAFgEIAHgEIABgBIAAgCIABgFIAFgZIAEgYIAfhyQAPg2AEgcQACgLACgHIAAAAIAAgBIgBgBIAAAAIAAgBIgIgDIgXgLQgLgIgGgDIgHgDQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBgDABgCIABgCIABgEIABgBIABgDIACgHIACgCIAAgDIAAgBIABAAIgBgBIABgBIABgBQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAIAAAAIABgBIABgEIADgDIACgCIABAAIAAgBIA/AAIABABIAIAAIAAgBIARAAIABABIAEAAIKIAAIACgMQAFgzAIggQANgtAWgeQAKgNAVgUQAHgRARgNQALgKAbgNQAhgPAVgDQAOgCAYABIA8ABQAjADAZAIQAjAKAhAZQAeAZAWAiQAVAjAJAnQAEAWAEA6IAAAPICPAAIAFAAIABAAIAGAAIGtAAIAEAAIAEgBIBoAAQAEAAABABQACACAAAEIAAAPIgBAHIgGAGIgTAMQgIAFgIAGIgIAHIgHAFQADAJgFAQQgPA0gSBQQgPBAgLAhIABAXIAAACIAAAAIAFAHIAKALQAGAGAAAHIABACIADAEIADAEIAAABQACADgBACIgBACIgBAEIgHAOIAAADIgFAIIgCAFIgCAIIgDAHIgCACIAAACIAAABIAAAAIgBABIAAAAIAAAAIgBABIAAAAIgBAAIAAABIgHAAIAAABIgDAAIAAgBIgiABIg5gBIgBAAIgBAAIAAAAInNAAIgCAFIgCAOIgIAVIgBABIAAABIgCAGIgFATIgBACIgFAGIgCABIgCAAIgCAAg");
	var mask_graphics_3 = new cjs.Graphics().p("AEuGTIgBgBIpZAAIgCAAIgBgBIgBgBIgBgBIAAgBIAAAAIAAgBIAAgBIAAgBIABAAIgBgCIABAAIAAgCIABgBIAEgLIABgCIABgEIAAAAIAAgCIABAAIAAgBIADgMIABgDIABgDIABgGIgBgBIABgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAAAIABgBIpjAAIgBABIhNAAQgEgCgDgEIgCgEIgEgDQgEgFgCgGIgEgPIgDgFIgBgGIgBgBQgFgGAAgJQAAgIAEgGIAJgIIAIgGIADgCQACgFAFgEIAHgEIABgBIAAgCIABgFIAFgZIAEgYIAfhyQAPg2AEgcQACgLACgHIAAAAIAAgBIgBgBIAAAAIAAgBIgIgDIgXgLQgLgIgGgDIgHgDQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBgDABgCIABgCIABgEIABgBIABgDIACgHIACgCIAAgDIAAgBIABAAIgBgBIABgBIABgBQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAIAAAAIABgBIABgEIADgDIACgCIABAAIAAgBIA/AAIABABIAIAAIAAgBIARAAIABABIAEAAIKIAAIACgMQAFgzAIggQANgtAWgeQAKgNAVgUQAHgRARgNQALgKAbgNQAhgPAVgDQAOgCAYABIA8ABQAjADAZAIQAjAKAhAZQAeAZAWAiQAVAjAJAnQAEAWAEA6IAAAPICPAAIAFAAIABAAIAGAAIGtAAIAEAAIAEgBIBoAAQAEAAABABQACACAAAEIAAAPIgBAHIgGAGIgTAMQgIAFgIAGIgIAHIgHAFQADAJgFAQQgPA0gSBQQgPBAgLAhIABAXIAAACIAAAAIAFAHIAKALQAGAGAAAHIABACIADAEIADAEIAAABQACADgBACIgBACIgBAEIgHAOIAAADIgFAIIgCAFIgCAIIgDAHIgCACIAAACIAAABIAAAAIgBABIAAAAIAAAAIgBABIAAAAIgBAAIAAABIgHAAIAAABIgDAAIAAgBIgiABIg5gBIgBAAIgBAAIAAAAInNAAIgCAFIgCAOIgIAVIgBABIAAABIgCAGIgFATIgBACIgFAGIgCABIgCAAIgCAAg");
	var mask_graphics_4 = new cjs.Graphics().p("AEuGTIgBgBIpZAAIgCAAIgBgBIgBgBIgBgBIAAgBIAAAAIAAgBIAAgBIAAgBIABAAIgBgCIABAAIAAgCIABgBIAEgLIABgCIABgEIAAAAIAAgCIABAAIAAgBIADgMIABgDIABgDIABgGIgBgBIABgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAAAIABgBIpjAAIgBABIhNAAQgEgCgDgEIgCgEIgEgDQgEgFgCgGIgEgPIgDgFIgBgGIgBgBQgFgGAAgJQAAgIAEgGIAJgIIAIgGIADgCQACgFAFgEIAHgEIABgBIAAgCIABgFIAFgZIAEgYIAfhyQAPg2AEgcQACgLACgHIAAAAIAAgBIgBgBIAAAAIAAgBIgIgDIgXgLQgLgIgGgDIgHgDQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBgDABgCIABgCIABgEIABgBIABgDIACgHIACgCIAAgDIAAgBIABAAIgBgBIABgBIABgBQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAIAAAAIABgBIABgEIADgDIACgCIABAAIAAgBIA/AAIABABIAIAAIAAgBIARAAIABABIAEAAIKIAAIACgMQAFgzAIggQANgtAWgeQAKgNAVgUQAHgRARgNQALgKAbgNQAhgPAVgDQAOgCAYABIA8ABQAjADAZAIQAjAKAhAZQAeAZAWAiQAVAjAJAnQAEAWAEA6IAAAPICPAAIAFAAIABAAIAGAAIGtAAIAEAAIAEgBIBoAAQAEAAABABQACACAAAEIAAAPIgBAHIgGAGIgTAMQgIAFgIAGIgIAHIgHAFQADAJgFAQQgPA0gSBQQgPBAgLAhIABAXIAAACIAAAAIAFAHIAKALQAGAGAAAHIABACIADAEIADAEIAAABQACADgBACIgBACIgBAEIgHAOIAAADIgFAIIgCAFIgCAIIgDAHIgCACIAAACIAAABIAAAAIgBABIAAAAIAAAAIgBABIAAAAIgBAAIAAABIgHAAIAAABIgDAAIAAgBIgiABIg5gBIgBAAIgBAAIAAAAInNAAIgCAFIgCAOIgIAVIgBABIAAABIgCAGIgFATIgBACIgFAGIgCABIgCAAIgCAAg");
	var mask_graphics_5 = new cjs.Graphics().p("AEuGTIgBgBIpZAAIgCAAIgBgBIgBgBIgBgBIAAgBIAAAAIAAgBIAAgBIAAgBIABAAIgBgCIABAAIAAgCIABgBIAEgLIABgCIABgEIAAAAIAAgCIABAAIAAgBIADgMIABgDIABgDIABgGIgBgBIABgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAAAIABgBIpjAAIgBABIhNAAQgEgCgDgEIgCgEIgEgDQgEgFgCgGIgEgPIgDgFIgBgGIgBgBQgFgGAAgJQAAgIAEgGIAJgIIAIgGIADgCQACgFAFgEIAHgEIABgBIAAgCIABgFIAFgZIAEgYIAfhyQAPg2AEgcQACgLACgHIAAAAIAAgBIgBgBIAAAAIAAgBIgIgDIgXgLQgLgIgGgDIgHgDQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBgDABgCIABgCIABgEIABgBIABgDIACgHIACgCIAAgDIAAgBIABAAIgBgBIABgBIABgBQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAIAAAAIABgBIABgEIADgDIACgCIABAAIAAgBIA/AAIABABIAIAAIAAgBIARAAIABABIAEAAIKIAAIACgMQAFgzAIggQANgtAWgeQAKgNAVgUQAHgRARgNQALgKAbgNQAhgPAVgDQAOgCAYABIA8ABQAjADAZAIQAjAKAhAZQAeAZAWAiQAVAjAJAnQAEAWAEA6IAAAPICPAAIAFAAIABAAIAGAAIGtAAIAEAAIAEgBIBoAAQAEAAABABQACACAAAEIAAAPIgBAHIgGAGIgTAMQgIAFgIAGIgIAHIgHAFQADAJgFAQQgPA0gSBQQgPBAgLAhIABAXIAAACIAAAAIAFAHIAKALQAGAGAAAHIABACIADAEIADAEIAAABQACADgBACIgBACIgBAEIgHAOIAAADIgFAIIgCAFIgCAIIgDAHIgCACIAAACIAAABIAAAAIgBABIAAAAIAAAAIgBABIAAAAIgBAAIAAABIgHAAIAAABIgDAAIAAgBIgiABIg5gBIgBAAIgBAAIAAAAInNAAIgCAFIgCAOIgIAVIgBABIAAABIgCAGIgFATIgBACIgFAGIgCABIgCAAIgCAAg");
	var mask_graphics_6 = new cjs.Graphics().p("AEuGTIgBgBIpZAAIgCAAIgBgBIgBgBIgBgBIAAgBIAAAAIAAgBIAAgBIAAgBIABAAIgBgCIABAAIAAgCIABgBIAEgLIABgCIABgEIAAAAIAAgCIABAAIAAgBIADgMIABgDIABgDIABgGIgBgBIABgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAAAIABgBIpjAAIgBABIhNAAQgEgCgDgEIgCgEIgEgDQgEgFgCgGIgEgPIgDgFIgBgGIgBgBQgFgGAAgJQAAgIAEgGIAJgIIAIgGIADgCQACgFAFgEIAHgEIABgBIAAgCIABgFIAFgZIAEgYIAfhyQAPg2AEgcQACgLACgHIAAAAIAAgBIgBgBIAAAAIAAgBIgIgDIgXgLQgLgIgGgDIgHgDQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBgDABgCIABgCIABgEIABgBIABgDIACgHIACgCIAAgDIAAgBIABAAIgBgBIABgBIABgBQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAIAAAAIABgBIABgEIADgDIACgCIABAAIAAgBIA/AAIABABIAIAAIAAgBIARAAIABABIAEAAIKIAAIACgMQAFgzAIggQANgtAWgeQAKgNAVgUQAHgRARgNQALgKAbgNQAhgPAVgDQAOgCAYABIA8ABQAjADAZAIQAjAKAhAZQAeAZAWAiQAVAjAJAnQAEAWAEA6IAAAPICPAAIAFAAIABAAIAGAAIGtAAIAEAAIAEgBIBoAAQAEAAABABQACACAAAEIAAAPIgBAHIgGAGIgTAMQgIAFgIAGIgIAHIgHAFQADAJgFAQQgPA0gSBQQgPBAgLAhIABAXIAAACIAAAAIAFAHIAKALQAGAGAAAHIABACIADAEIADAEIAAABQACADgBACIgBACIgBAEIgHAOIAAADIgFAIIgCAFIgCAIIgDAHIgCACIAAACIAAABIAAAAIgBABIAAAAIAAAAIgBABIAAAAIgBAAIAAABIgHAAIAAABIgDAAIAAgBIgiABIg5gBIgBAAIgBAAIAAAAInNAAIgCAFIgCAOIgIAVIgBABIAAABIgCAGIgFATIgBACIgFAGIgCABIgCAAIgCAAg");
	var mask_graphics_7 = new cjs.Graphics().p("AEuGTIgBgBIpZAAIgCAAIgBgBIgBgBIgBgBIAAgBIAAAAIAAgBIAAgBIAAgBIABAAIgBgCIABAAIAAgCIABgBIAEgLIABgCIABgEIAAAAIAAgCIABAAIAAgBIADgMIABgDIABgDIABgGIgBgBIABgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAAAIABgBIpjAAIgBABIhNAAQgEgCgDgEIgCgEIgEgDQgEgFgCgGIgEgPIgDgFIgBgGIgBgBQgFgGAAgJQAAgIAEgGIAJgIIAIgGIADgCQACgFAFgEIAHgEIABgBIAAgCIABgFIAFgZIAEgYIAfhyQAPg2AEgcQACgLACgHIAAAAIAAgBIgBgBIAAAAIAAgBIgIgDIgXgLQgLgIgGgDIgHgDQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBgDABgCIABgCIABgEIABgBIABgDIACgHIACgCIAAgDIAAgBIABAAIgBgBIABgBIABgBQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAIAAAAIABgBIABgEIADgDIACgCIABAAIAAgBIA/AAIABABIAIAAIAAgBIARAAIABABIAEAAIKIAAIACgMQAFgzAIggQANgtAWgeQAKgNAVgUQAHgRARgNQALgKAbgNQAhgPAVgDQAOgCAYABIA8ABQAjADAZAIQAjAKAhAZQAeAZAWAiQAVAjAJAnQAEAWAEA6IAAAPICPAAIAFAAIABAAIAGAAIGtAAIAEAAIAEgBIBoAAQAEAAABABQACACAAAEIAAAPIgBAHIgGAGIgTAMQgIAFgIAGIgIAHIgHAFQADAJgFAQQgPA0gSBQQgPBAgLAhIABAXIAAACIAAAAIAFAHIAKALQAGAGAAAHIABACIADAEIADAEIAAABQACADgBACIgBACIgBAEIgHAOIAAADIgFAIIgCAFIgCAIIgDAHIgCACIAAACIAAABIAAAAIgBABIAAAAIAAAAIgBABIAAAAIgBAAIAAABIgHAAIAAABIgDAAIAAgBIgiABIg5gBIgBAAIgBAAIAAAAInNAAIgCAFIgCAOIgIAVIgBABIAAABIgCAGIgFATIgBACIgFAGIgCABIgCAAIgCAAg");
	var mask_graphics_8 = new cjs.Graphics().p("AEuGTIgBgBIpZAAIgCAAIgBgBIgBgBIgBgBIAAgBIAAAAIAAgBIAAgBIAAgBIABAAIgBgCIABAAIAAgCIABgBIAEgLIABgCIABgEIAAAAIAAgCIABAAIAAgBIADgMIABgDIABgDIABgGIgBgBIABgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAAAIABgBIpjAAIgBABIhNAAQgEgCgDgEIgCgEIgEgDQgEgFgCgGIgEgPIgDgFIgBgGIgBgBQgFgGAAgJQAAgIAEgGIAJgIIAIgGIADgCQACgFAFgEIAHgEIABgBIAAgCIABgFIAFgZIAEgYIAfhyQAPg2AEgcQACgLACgHIAAAAIAAgBIgBgBIAAAAIAAgBIgIgDIgXgLQgLgIgGgDIgHgDQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBgDABgCIABgCIABgEIABgBIABgDIACgHIACgCIAAgDIAAgBIABAAIgBgBIABgBIABgBQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAIAAAAIABgBIABgEIADgDIACgCIABAAIAAgBIA/AAIABABIAIAAIAAgBIARAAIABABIAEAAIKIAAIACgMQAFgzAIggQANgtAWgeQAKgNAVgUQAHgRARgNQALgKAbgNQAhgPAVgDQAOgCAYABIA8ABQAjADAZAIQAjAKAhAZQAeAZAWAiQAVAjAJAnQAEAWAEA6IAAAPICPAAIAFAAIABAAIAGAAIGtAAIAEAAIAEgBIBoAAQAEAAABABQACACAAAEIAAAPIgBAHIgGAGIgTAMQgIAFgIAGIgIAHIgHAFQADAJgFAQQgPA0gSBQQgPBAgLAhIABAXIAAACIAAAAIAFAHIAKALQAGAGAAAHIABACIADAEIADAEIAAABQACADgBACIgBACIgBAEIgHAOIAAADIgFAIIgCAFIgCAIIgDAHIgCACIAAACIAAABIAAAAIgBABIAAAAIAAAAIgBABIAAAAIgBAAIAAABIgHAAIAAABIgDAAIAAgBIgiABIg5gBIgBAAIgBAAIAAAAInNAAIgCAFIgCAOIgIAVIgBABIAAABIgCAGIgFATIgBACIgFAGIgCABIgCAAIgCAAg");
	var mask_graphics_9 = new cjs.Graphics().p("AEuGTIgBgBIpZAAIgCAAIgBgBIgBgBIgBgBIAAgBIAAAAIAAgBIAAgBIAAgBIABAAIgBgCIABAAIAAgCIABgBIAEgLIABgCIABgEIAAAAIAAgCIABAAIAAgBIADgMIABgDIABgDIABgGIgBgBIABgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAAAIABgBIpjAAIgBABIhNAAQgEgCgDgEIgCgEIgEgDQgEgFgCgGIgEgPIgDgFIgBgGIgBgBQgFgGAAgJQAAgIAEgGIAJgIIAIgGIADgCQACgFAFgEIAHgEIABgBIAAgCIABgFIAFgZIAEgYIAfhyQAPg2AEgcQACgLACgHIAAAAIAAgBIgBgBIAAAAIAAgBIgIgDIgXgLQgLgIgGgDIgHgDQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBgDABgCIABgCIABgEIABgBIABgDIACgHIACgCIAAgDIAAgBIABAAIgBgBIABgBIABgBQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAIAAAAIABgBIABgEIADgDIACgCIABAAIAAgBIA/AAIABABIAIAAIAAgBIARAAIABABIAEAAIKIAAIACgMQAFgzAIggQANgtAWgeQAKgNAVgUQAHgRARgNQALgKAbgNQAhgPAVgDQAOgCAYABIA8ABQAjADAZAIQAjAKAhAZQAeAZAWAiQAVAjAJAnQAEAWAEA6IAAAPICPAAIAFAAIABAAIAGAAIGtAAIAEAAIAEgBIBoAAQAEAAABABQACACAAAEIAAAPIgBAHIgGAGIgTAMQgIAFgIAGIgIAHIgHAFQADAJgFAQQgPA0gSBQQgPBAgLAhIABAXIAAACIAAAAIAFAHIAKALQAGAGAAAHIABACIADAEIADAEIAAABQACADgBACIgBACIgBAEIgHAOIAAADIgFAIIgCAFIgCAIIgDAHIgCACIAAACIAAABIAAAAIgBABIAAAAIAAAAIgBABIAAAAIgBAAIAAABIgHAAIAAABIgDAAIAAgBIgiABIg5gBIgBAAIgBAAIAAAAInNAAIgCAFIgCAOIgIAVIgBABIAAABIgCAGIgFATIgBACIgFAGIgCABIgCAAIgCAAg");
	var mask_graphics_10 = new cjs.Graphics().p("AEuGTIgBgBIpZAAIgCAAIgBgBIgBgBIgBgBIAAgBIAAAAIAAgBIAAgBIAAgBIABAAIgBgCIABAAIAAgCIABgBIAEgLIABgCIABgEIAAAAIAAgCIABAAIAAgBIADgMIABgDIABgDIABgGIgBgBIABgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAAAIABgBIpjAAIgBABIhNAAQgEgCgDgEIgCgEIgEgDQgEgFgCgGIgEgPIgDgFIgBgGIgBgBQgFgGAAgJQAAgIAEgGIAJgIIAIgGIADgCQACgFAFgEIAHgEIABgBIAAgCIABgFIAFgZIAEgYIAfhyQAPg2AEgcQACgLACgHIAAAAIAAgBIgBgBIAAAAIAAgBIgIgDIgXgLQgLgIgGgDIgHgDQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBgDABgCIABgCIABgEIABgBIABgDIACgHIACgCIAAgDIAAgBIABAAIgBgBIABgBIABgBQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAIAAAAIABgBIABgEIADgDIACgCIABAAIAAgBIA/AAIABABIAIAAIAAgBIARAAIABABIAEAAIKIAAIACgMQAFgzAIggQANgtAWgeQAKgNAVgUQAHgRARgNQALgKAbgNQAhgPAVgDQAOgCAYABIA8ABQAjADAZAIQAjAKAhAZQAeAZAWAiQAVAjAJAnQAEAWAEA6IAAAPICPAAIAFAAIABAAIAGAAIGtAAIAEAAIAEgBIBoAAQAEAAABABQACACAAAEIAAAPIgBAHIgGAGIgTAMQgIAFgIAGIgIAHIgHAFQADAJgFAQQgPA0gSBQQgPBAgLAhIABAXIAAACIAAAAIAFAHIAKALQAGAGAAAHIABACIADAEIADAEIAAABQACADgBACIgBACIgBAEIgHAOIAAADIgFAIIgCAFIgCAIIgDAHIgCACIAAACIAAABIAAAAIgBABIAAAAIAAAAIgBABIAAAAIgBAAIAAABIgHAAIAAABIgDAAIAAgBIgiABIg5gBIgBAAIgBAAIAAAAInNAAIgCAFIgCAOIgIAVIgBABIAAABIgCAGIgFATIgBACIgFAGIgCABIgCAAIgCAAg");
	var mask_graphics_11 = new cjs.Graphics().p("AEuGTIgBgBIpZAAIgCAAIgBgBIgBgBIgBgBIAAgBIAAAAIAAgBIAAgBIAAgBIABAAIgBgCIABAAIAAgCIABgBIAEgLIABgCIABgEIAAAAIAAgCIABAAIAAgBIADgMIABgDIABgDIABgGIgBgBIABgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAAAIABgBIpjAAIgBABIhNAAQgEgCgDgEIgCgEIgEgDQgEgFgCgGIgEgPIgDgFIgBgGIgBgBQgFgGAAgJQAAgIAEgGIAJgIIAIgGIADgCQACgFAFgEIAHgEIABgBIAAgCIABgFIAFgZIAEgYIAfhyQAPg2AEgcQACgLACgHIAAAAIAAgBIgBgBIAAAAIAAgBIgIgDIgXgLQgLgIgGgDIgHgDQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBgDABgCIABgCIABgEIABgBIABgDIACgHIACgCIAAgDIAAgBIABAAIgBgBIABgBIABgBQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAIAAAAIABgBIABgEIADgDIACgCIABAAIAAgBIA/AAIABABIAIAAIAAgBIARAAIABABIAEAAIKIAAIACgMQAFgzAIggQANgtAWgeQAKgNAVgUQAHgRARgNQALgKAbgNQAhgPAVgDQAOgCAYABIA8ABQAjADAZAIQAjAKAhAZQAeAZAWAiQAVAjAJAnQAEAWAEA6IAAAPICPAAIAFAAIABAAIAGAAIGtAAIAEAAIAEgBIBoAAQAEAAABABQACACAAAEIAAAPIgBAHIgGAGIgTAMQgIAFgIAGIgIAHIgHAFQADAJgFAQQgPA0gSBQQgPBAgLAhIABAXIAAACIAAAAIAFAHIAKALQAGAGAAAHIABACIADAEIADAEIAAABQACADgBACIgBACIgBAEIgHAOIAAADIgFAIIgCAFIgCAIIgDAHIgCACIAAACIAAABIAAAAIgBABIAAAAIAAAAIgBABIAAAAIgBAAIAAABIgHAAIAAABIgDAAIAAgBIgiABIg5gBIgBAAIgBAAIAAAAInNAAIgCAFIgCAOIgIAVIgBABIAAABIgCAGIgFATIgBACIgFAGIgCABIgCAAIgCAAg");
	var mask_graphics_12 = new cjs.Graphics().p("AEuGTIgBgBIpZAAIgCAAIgBgBIgBgBIgBgBIAAgBIAAAAIAAgBIAAgBIAAgBIABAAIgBgCIABAAIAAgCIABgBIAEgLIABgCIABgEIAAAAIAAgCIABAAIAAgBIADgMIABgDIABgDIABgGIgBgBIABgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAAAIABgBIpjAAIgBABIhNAAQgEgCgDgEIgCgEIgEgDQgEgFgCgGIgEgPIgDgFIgBgGIgBgBQgFgGAAgJQAAgIAEgGIAJgIIAIgGIADgCQACgFAFgEIAHgEIABgBIAAgCIABgFIAFgZIAEgYIAfhyQAPg2AEgcQACgLACgHIAAAAIAAgBIgBgBIAAAAIAAgBIgIgDIgXgLQgLgIgGgDIgHgDQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBgDABgCIABgCIABgEIABgBIABgDIACgHIACgCIAAgDIAAgBIABAAIgBgBIABgBIABgBQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAIAAAAIABgBIABgEIADgDIACgCIABAAIAAgBIA/AAIABABIAIAAIAAgBIARAAIABABIAEAAIKIAAIACgMQAFgzAIggQANgtAWgeQAKgNAVgUQAHgRARgNQALgKAbgNQAhgPAVgDQAOgCAYABIA8ABQAjADAZAIQAjAKAhAZQAeAZAWAiQAVAjAJAnQAEAWAEA6IAAAPICPAAIAFAAIABAAIAGAAIGtAAIAEAAIAEgBIBoAAQAEAAABABQACACAAAEIAAAPIgBAHIgGAGIgTAMQgIAFgIAGIgIAHIgHAFQADAJgFAQQgPA0gSBQQgPBAgLAhIABAXIAAACIAAAAIAFAHIAKALQAGAGAAAHIABACIADAEIADAEIAAABQACADgBACIgBACIgBAEIgHAOIAAADIgFAIIgCAFIgCAIIgDAHIgCACIAAACIAAABIAAAAIgBABIAAAAIAAAAIgBABIAAAAIgBAAIAAABIgHAAIAAABIgDAAIAAgBIgiABIg5gBIgBAAIgBAAIAAAAInNAAIgCAFIgCAOIgIAVIgBABIAAABIgCAGIgFATIgBACIgFAGIgCABIgCAAIgCAAg");
	var mask_graphics_13 = new cjs.Graphics().p("AEuGTIgBgBIpZAAIgCAAIgBgBIgBgBIgBgBIAAgBIAAAAIAAgBIAAgBIAAgBIABAAIgBgCIABAAIAAgCIABgBIAEgLIABgCIABgEIAAAAIAAgCIABAAIAAgBIADgMIABgDIABgDIABgGIgBgBIABgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAAAIABgBIpjAAIgBABIhNAAQgEgCgDgEIgCgEIgEgDQgEgFgCgGIgEgPIgDgFIgBgGIgBgBQgFgGAAgJQAAgIAEgGIAJgIIAIgGIADgCQACgFAFgEIAHgEIABgBIAAgCIABgFIAFgZIAEgYIAfhyQAPg2AEgcQACgLACgHIAAAAIAAgBIgBgBIAAAAIAAgBIgIgDIgXgLQgLgIgGgDIgHgDQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBgDABgCIABgCIABgEIABgBIABgDIACgHIACgCIAAgDIAAgBIABAAIgBgBIABgBIABgBQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAIAAAAIABgBIABgEIADgDIACgCIABAAIAAgBIA/AAIABABIAIAAIAAgBIARAAIABABIAEAAIKIAAIACgMQAFgzAIggQANgtAWgeQAKgNAVgUQAHgRARgNQALgKAbgNQAhgPAVgDQAOgCAYABIA8ABQAjADAZAIQAjAKAhAZQAeAZAWAiQAVAjAJAnQAEAWAEA6IAAAPICPAAIAFAAIABAAIAGAAIGtAAIAEAAIAEgBIBoAAQAEAAABABQACACAAAEIAAAPIgBAHIgGAGIgTAMQgIAFgIAGIgIAHIgHAFQADAJgFAQQgPA0gSBQQgPBAgLAhIABAXIAAACIAAAAIAFAHIAKALQAGAGAAAHIABACIADAEIADAEIAAABQACADgBACIgBACIgBAEIgHAOIAAADIgFAIIgCAFIgCAIIgDAHIgCACIAAACIAAABIAAAAIgBABIAAAAIAAAAIgBABIAAAAIgBAAIAAABIgHAAIAAABIgDAAIAAgBIgiABIg5gBIgBAAIgBAAIAAAAInNAAIgCAFIgCAOIgIAVIgBABIAAABIgCAGIgFATIgBACIgFAGIgCABIgCAAIgCAAg");
	var mask_graphics_14 = new cjs.Graphics().p("AEuGTIgBgBIpZAAIgCAAIgBgBIgBgBIgBgBIAAgBIAAAAIAAgBIAAgBIAAgBIABAAIgBgCIABAAIAAgCIABgBIAEgLIABgCIABgEIAAAAIAAgCIABAAIAAgBIADgMIABgDIABgDIABgGIgBgBIABgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAAAIABgBIpjAAIgBABIhNAAQgEgCgDgEIgCgEIgEgDQgEgFgCgGIgEgPIgDgFIgBgGIgBgBQgFgGAAgJQAAgIAEgGIAJgIIAIgGIADgCQACgFAFgEIAHgEIABgBIAAgCIABgFIAFgZIAEgYIAfhyQAPg2AEgcQACgLACgHIAAAAIAAgBIgBgBIAAAAIAAgBIgIgDIgXgLQgLgIgGgDIgHgDQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBgDABgCIABgCIABgEIABgBIABgDIACgHIACgCIAAgDIAAgBIABAAIgBgBIABgBIABgBQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAIAAAAIABgBIABgEIADgDIACgCIABAAIAAgBIA/AAIABABIAIAAIAAgBIARAAIABABIAEAAIKIAAIACgMQAFgzAIggQANgtAWgeQAKgNAVgUQAHgRARgNQALgKAbgNQAhgPAVgDQAOgCAYABIA8ABQAjADAZAIQAjAKAhAZQAeAZAWAiQAVAjAJAnQAEAWAEA6IAAAPICPAAIAFAAIABAAIAGAAIGtAAIAEAAIAEgBIBoAAQAEAAABABQACACAAAEIAAAPIgBAHIgGAGIgTAMQgIAFgIAGIgIAHIgHAFQADAJgFAQQgPA0gSBQQgPBAgLAhIABAXIAAACIAAAAIAFAHIAKALQAGAGAAAHIABACIADAEIADAEIAAABQACADgBACIgBACIgBAEIgHAOIAAADIgFAIIgCAFIgCAIIgDAHIgCACIAAACIAAABIAAAAIgBABIAAAAIAAAAIgBABIAAAAIgBAAIAAABIgHAAIAAABIgDAAIAAgBIgiABIg5gBIgBAAIgBAAIAAAAInNAAIgCAFIgCAOIgIAVIgBABIAAABIgCAGIgFATIgBACIgFAGIgCABIgCAAIgCAAg");
	var mask_graphics_15 = new cjs.Graphics().p("AEuGTIgBgBIpZAAIgCAAIgBgBIgBgBIgBgBIAAgBIAAAAIAAgBIAAgBIAAgBIABAAIgBgCIABAAIAAgCIABgBIAEgLIABgCIABgEIAAAAIAAgCIABAAIAAgBIADgMIABgDIABgDIABgGIgBgBIABgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAAAIABgBIpjAAIgBABIhNAAQgEgCgDgEIgCgEIgEgDQgEgFgCgGIgEgPIgDgFIgBgGIgBgBQgFgGAAgJQAAgIAEgGIAJgIIAIgGIADgCQACgFAFgEIAHgEIABgBIAAgCIABgFIAFgZIAEgYIAfhyQAPg2AEgcQACgLACgHIAAAAIAAgBIgBgBIAAAAIAAgBIgIgDIgXgLQgLgIgGgDIgHgDQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBgDABgCIABgCIABgEIABgBIABgDIACgHIACgCIAAgDIAAgBIABAAIgBgBIABgBIABgBQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAIAAAAIABgBIABgEIADgDIACgCIABAAIAAgBIA/AAIABABIAIAAIAAgBIARAAIABABIAEAAIKIAAIACgMQAFgzAIggQANgtAWgeQAKgNAVgUQAHgRARgNQALgKAbgNQAhgPAVgDQAOgCAYABIA8ABQAjADAZAIQAjAKAhAZQAeAZAWAiQAVAjAJAnQAEAWAEA6IAAAPICPAAIAFAAIABAAIAGAAIGtAAIAEAAIAEgBIBoAAQAEAAABABQACACAAAEIAAAPIgBAHIgGAGIgTAMQgIAFgIAGIgIAHIgHAFQADAJgFAQQgPA0gSBQQgPBAgLAhIABAXIAAACIAAAAIAFAHIAKALQAGAGAAAHIABACIADAEIADAEIAAABQACADgBACIgBACIgBAEIgHAOIAAADIgFAIIgCAFIgCAIIgDAHIgCACIAAACIAAABIAAAAIgBABIAAAAIAAAAIgBABIAAAAIgBAAIAAABIgHAAIAAABIgDAAIAAgBIgiABIg5gBIgBAAIgBAAIAAAAInNAAIgCAFIgCAOIgIAVIgBABIAAABIgCAGIgFATIgBACIgFAGIgCABIgCAAIgCAAg");
	var mask_graphics_16 = new cjs.Graphics().p("AEuGTIgBgBIpZAAIgCAAIgBgBIgBgBIgBgBIAAgBIAAAAIAAgBIAAgBIAAgBIABAAIgBgCIABAAIAAgCIABgBIAEgLIABgCIABgEIAAAAIAAgCIABAAIAAgBIADgMIABgDIABgDIABgGIgBgBIABgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAAAIABgBIpjAAIgBABIhNAAQgEgCgDgEIgCgEIgEgDQgEgFgCgGIgEgPIgDgFIgBgGIgBgBQgFgGAAgJQAAgIAEgGIAJgIIAIgGIADgCQACgFAFgEIAHgEIABgBIAAgCIABgFIAFgZIAEgYIAfhyQAPg2AEgcQACgLACgHIAAAAIAAgBIgBgBIAAAAIAAgBIgIgDIgXgLQgLgIgGgDIgHgDQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBgDABgCIABgCIABgEIABgBIABgDIACgHIACgCIAAgDIAAgBIABAAIgBgBIABgBIABgBQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAIAAAAIABgBIABgEIADgDIACgCIABAAIAAgBIA/AAIABABIAIAAIAAgBIARAAIABABIAEAAIKIAAIACgMQAFgzAIggQANgtAWgeQAKgNAVgUQAHgRARgNQALgKAbgNQAhgPAVgDQAOgCAYABIA8ABQAjADAZAIQAjAKAhAZQAeAZAWAiQAVAjAJAnQAEAWAEA6IAAAPICPAAIAFAAIABAAIAGAAIGtAAIAEAAIAEgBIBoAAQAEAAABABQACACAAAEIAAAPIgBAHIgGAGIgTAMQgIAFgIAGIgIAHIgHAFQADAJgFAQQgPA0gSBQQgPBAgLAhIABAXIAAACIAAAAIAFAHIAKALQAGAGAAAHIABACIADAEIADAEIAAABQACADgBACIgBACIgBAEIgHAOIAAADIgFAIIgCAFIgCAIIgDAHIgCACIAAACIAAABIAAAAIgBABIAAAAIAAAAIgBABIAAAAIgBAAIAAABIgHAAIAAABIgDAAIAAgBIgiABIg5gBIgBAAIgBAAIAAAAInNAAIgCAFIgCAOIgIAVIgBABIAAABIgCAGIgFATIgBACIgFAGIgCABIgCAAIgCAAg");
	var mask_graphics_17 = new cjs.Graphics().p("AEuGTIgBgBIpZAAIgCAAIgBgBIgBgBIgBgBIAAgBIAAAAIAAgBIAAgBIAAgBIABAAIgBgCIABAAIAAgCIABgBIAEgLIABgCIABgEIAAAAIAAgCIABAAIAAgBIADgMIABgDIABgDIABgGIgBgBIABgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAAAIABgBIpjAAIgBABIhNAAQgEgCgDgEIgCgEIgEgDQgEgFgCgGIgEgPIgDgFIgBgGIgBgBQgFgGAAgJQAAgIAEgGIAJgIIAIgGIADgCQACgFAFgEIAHgEIABgBIAAgCIABgFIAFgZIAEgYIAfhyQAPg2AEgcQACgLACgHIAAAAIAAgBIgBgBIAAAAIAAgBIgIgDIgXgLQgLgIgGgDIgHgDQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBgDABgCIABgCIABgEIABgBIABgDIACgHIACgCIAAgDIAAgBIABAAIgBgBIABgBIABgBQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAIAAAAIABgBIABgEIADgDIACgCIABAAIAAgBIA/AAIABABIAIAAIAAgBIARAAIABABIAEAAIKIAAIACgMQAFgzAIggQANgtAWgeQAKgNAVgUQAHgRARgNQALgKAbgNQAhgPAVgDQAOgCAYABIA8ABQAjADAZAIQAjAKAhAZQAeAZAWAiQAVAjAJAnQAEAWAEA6IAAAPICPAAIAFAAIABAAIAGAAIGtAAIAEAAIAEgBIBoAAQAEAAABABQACACAAAEIAAAPIgBAHIgGAGIgTAMQgIAFgIAGIgIAHIgHAFQADAJgFAQQgPA0gSBQQgPBAgLAhIABAXIAAACIAAAAIAFAHIAKALQAGAGAAAHIABACIADAEIADAEIAAABQACADgBACIgBACIgBAEIgHAOIAAADIgFAIIgCAFIgCAIIgDAHIgCACIAAACIAAABIAAAAIgBABIAAAAIAAAAIgBABIAAAAIgBAAIAAABIgHAAIAAABIgDAAIAAgBIgiABIg5gBIgBAAIgBAAIAAAAInNAAIgCAFIgCAOIgIAVIgBABIAAABIgCAGIgFATIgBACIgFAGIgCABIgCAAIgCAAg");
	var mask_graphics_18 = new cjs.Graphics().p("AEuGTIgBgBIpZAAIgCAAIgBgBIgBgBIgBgBIAAgBIAAAAIAAgBIAAgBIAAgBIABAAIgBgCIABAAIAAgCIABgBIAEgLIABgCIABgEIAAAAIAAgCIABAAIAAgBIADgMIABgDIABgDIABgGIgBgBIABgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAAAIABgBIpjAAIgBABIhNAAQgEgCgDgEIgCgEIgEgDQgEgFgCgGIgEgPIgDgFIgBgGIgBgBQgFgGAAgJQAAgIAEgGIAJgIIAIgGIADgCQACgFAFgEIAHgEIABgBIAAgCIABgFIAFgZIAEgYIAfhyQAPg2AEgcQACgLACgHIAAAAIAAgBIgBgBIAAAAIAAgBIgIgDIgXgLQgLgIgGgDIgHgDQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBgDABgCIABgCIABgEIABgBIABgDIACgHIACgCIAAgDIAAgBIABAAIgBgBIABgBIABgBQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAIAAAAIABgBIABgEIADgDIACgCIABAAIAAgBIA/AAIABABIAIAAIAAgBIARAAIABABIAEAAIKIAAIACgMQAFgzAIggQANgtAWgeQAKgNAVgUQAHgRARgNQALgKAbgNQAhgPAVgDQAOgCAYABIA8ABQAjADAZAIQAjAKAhAZQAeAZAWAiQAVAjAJAnQAEAWAEA6IAAAPICPAAIAFAAIABAAIAGAAIGtAAIAEAAIAEgBIBoAAQAEAAABABQACACAAAEIAAAPIgBAHIgGAGIgTAMQgIAFgIAGIgIAHIgHAFQADAJgFAQQgPA0gSBQQgPBAgLAhIABAXIAAACIAAAAIAFAHIAKALQAGAGAAAHIABACIADAEIADAEIAAABQACADgBACIgBACIgBAEIgHAOIAAADIgFAIIgCAFIgCAIIgDAHIgCACIAAACIAAABIAAAAIgBABIAAAAIAAAAIgBABIAAAAIgBAAIAAABIgHAAIAAABIgDAAIAAgBIgiABIg5gBIgBAAIgBAAIAAAAInNAAIgCAFIgCAOIgIAVIgBABIAAABIgCAGIgFATIgBACIgFAGIgCABIgCAAIgCAAg");
	var mask_graphics_19 = new cjs.Graphics().p("AEuGTIgBgBIpZAAIgCAAIgBgBIgBgBIgBgBIAAgBIAAAAIAAgBIAAgBIAAgBIABAAIgBgCIABAAIAAgCIABgBIAEgLIABgCIABgEIAAAAIAAgCIABAAIAAgBIADgMIABgDIABgDIABgGIgBgBIABgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAAAIABgBIpjAAIgBABIhNAAQgEgCgDgEIgCgEIgEgDQgEgFgCgGIgEgPIgDgFIgBgGIgBgBQgFgGAAgJQAAgIAEgGIAJgIIAIgGIADgCQACgFAFgEIAHgEIABgBIAAgCIABgFIAFgZIAEgYIAfhyQAPg2AEgcQACgLACgHIAAAAIAAgBIgBgBIAAAAIAAgBIgIgDIgXgLQgLgIgGgDIgHgDQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBgDABgCIABgCIABgEIABgBIABgDIACgHIACgCIAAgDIAAgBIABAAIgBgBIABgBIABgBQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAIAAAAIABgBIABgEIADgDIACgCIABAAIAAgBIA/AAIABABIAIAAIAAgBIARAAIABABIAEAAIKIAAIACgMQAFgzAIggQANgtAWgeQAKgNAVgUQAHgRARgNQALgKAbgNQAhgPAVgDQAOgCAYABIA8ABQAjADAZAIQAjAKAhAZQAeAZAWAiQAVAjAJAnQAEAWAEA6IAAAPICPAAIAFAAIABAAIAGAAIGtAAIAEAAIAEgBIBoAAQAEAAABABQACACAAAEIAAAPIgBAHIgGAGIgTAMQgIAFgIAGIgIAHIgHAFQADAJgFAQQgPA0gSBQQgPBAgLAhIABAXIAAACIAAAAIAFAHIAKALQAGAGAAAHIABACIADAEIADAEIAAABQACADgBACIgBACIgBAEIgHAOIAAADIgFAIIgCAFIgCAIIgDAHIgCACIAAACIAAABIAAAAIgBABIAAAAIAAAAIgBABIAAAAIgBAAIAAABIgHAAIAAABIgDAAIAAgBIgiABIg5gBIgBAAIgBAAIAAAAInNAAIgCAFIgCAOIgIAVIgBABIAAABIgCAGIgFATIgBACIgFAGIgCABIgCAAIgCAAg");
	var mask_graphics_20 = new cjs.Graphics().p("AEuGTIgBgBIpZAAIgCAAIgBgBIgBgBIgBgBIAAgBIAAAAIAAgBIAAgBIAAgBIABAAIgBgCIABAAIAAgCIABgBIAEgLIABgCIABgEIAAAAIAAgCIABAAIAAgBIADgMIABgDIABgDIABgGIgBgBIABgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAAAIABgBIpjAAIgBABIhNAAQgEgCgDgEIgCgEIgEgDQgEgFgCgGIgEgPIgDgFIgBgGIgBgBQgFgGAAgJQAAgIAEgGIAJgIIAIgGIADgCQACgFAFgEIAHgEIABgBIAAgCIABgFIAFgZIAEgYIAfhyQAPg2AEgcQACgLACgHIAAAAIAAgBIgBgBIAAAAIAAgBIgIgDIgXgLQgLgIgGgDIgHgDQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBgDABgCIABgCIABgEIABgBIABgDIACgHIACgCIAAgDIAAgBIABAAIgBgBIABgBIABgBQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAIAAAAIABgBIABgEIADgDIACgCIABAAIAAgBIA/AAIABABIAIAAIAAgBIARAAIABABIAEAAIKIAAIACgMQAFgzAIggQANgtAWgeQAKgNAVgUQAHgRARgNQALgKAbgNQAhgPAVgDQAOgCAYABIA8ABQAjADAZAIQAjAKAhAZQAeAZAWAiQAVAjAJAnQAEAWAEA6IAAAPICPAAIAFAAIABAAIAGAAIGtAAIAEAAIAEgBIBoAAQAEAAABABQACACAAAEIAAAPIgBAHIgGAGIgTAMQgIAFgIAGIgIAHIgHAFQADAJgFAQQgPA0gSBQQgPBAgLAhIABAXIAAACIAAAAIAFAHIAKALQAGAGAAAHIABACIADAEIADAEIAAABQACADgBACIgBACIgBAEIgHAOIAAADIgFAIIgCAFIgCAIIgDAHIgCACIAAACIAAABIAAAAIgBABIAAAAIAAAAIgBABIAAAAIgBAAIAAABIgHAAIAAABIgDAAIAAgBIgiABIg5gBIgBAAIgBAAIAAAAInNAAIgCAFIgCAOIgIAVIgBABIAAABIgCAGIgFATIgBACIgFAGIgCABIgCAAIgCAAg");
	var mask_graphics_21 = new cjs.Graphics().p("AEuGTIgBgBIpZAAIgCAAIgBgBIgBgBIgBgBIAAgBIAAAAIAAgBIAAgBIAAgBIABAAIgBgCIABAAIAAgCIABgBIAEgLIABgCIABgEIAAAAIAAgCIABAAIAAgBIADgMIABgDIABgDIABgGIgBgBIABgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAAAIABgBIpjAAIgBABIhNAAQgEgCgDgEIgCgEIgEgDQgEgFgCgGIgEgPIgDgFIgBgGIgBgBQgFgGAAgJQAAgIAEgGIAJgIIAIgGIADgCQACgFAFgEIAHgEIABgBIAAgCIABgFIAFgZIAEgYIAfhyQAPg2AEgcQACgLACgHIAAAAIAAgBIgBgBIAAAAIAAgBIgIgDIgXgLQgLgIgGgDIgHgDQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBgDABgCIABgCIABgEIABgBIABgDIACgHIACgCIAAgDIAAgBIABAAIgBgBIABgBIABgBQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAIAAAAIABgBIABgEIADgDIACgCIABAAIAAgBIA/AAIABABIAIAAIAAgBIARAAIABABIAEAAIKIAAIACgMQAFgzAIggQANgtAWgeQAKgNAVgUQAHgRARgNQALgKAbgNQAhgPAVgDQAOgCAYABIA8ABQAjADAZAIQAjAKAhAZQAeAZAWAiQAVAjAJAnQAEAWAEA6IAAAPICPAAIAFAAIABAAIAGAAIGtAAIAEAAIAEgBIBoAAQAEAAABABQACACAAAEIAAAPIgBAHIgGAGIgTAMQgIAFgIAGIgIAHIgHAFQADAJgFAQQgPA0gSBQQgPBAgLAhIABAXIAAACIAAAAIAFAHIAKALQAGAGAAAHIABACIADAEIADAEIAAABQACADgBACIgBACIgBAEIgHAOIAAADIgFAIIgCAFIgCAIIgDAHIgCACIAAACIAAABIAAAAIgBABIAAAAIAAAAIgBABIAAAAIgBAAIAAABIgHAAIAAABIgDAAIAAgBIgiABIg5gBIgBAAIgBAAIAAAAInNAAIgCAFIgCAOIgIAVIgBABIAAABIgCAGIgFATIgBACIgFAGIgCABIgCAAIgCAAg");
	var mask_graphics_22 = new cjs.Graphics().p("AEuGTIgBgBIpZAAIgCAAIgBgBIgBgBIgBgBIAAgBIAAAAIAAgBIAAgBIAAgBIABAAIgBgCIABAAIAAgCIABgBIAEgLIABgCIABgEIAAAAIAAgCIABAAIAAgBIADgMIABgDIABgDIABgGIgBgBIABgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAAAIABgBIpjAAIgBABIhNAAQgEgCgDgEIgCgEIgEgDQgEgFgCgGIgEgPIgDgFIgBgGIgBgBQgFgGAAgJQAAgIAEgGIAJgIIAIgGIADgCQACgFAFgEIAHgEIABgBIAAgCIABgFIAFgZIAEgYIAfhyQAPg2AEgcQACgLACgHIAAAAIAAgBIgBgBIAAAAIAAgBIgIgDIgXgLQgLgIgGgDIgHgDQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBgDABgCIABgCIABgEIABgBIABgDIACgHIACgCIAAgDIAAgBIABAAIgBgBIABgBIABgBQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAIAAAAIABgBIABgEIADgDIACgCIABAAIAAgBIA/AAIABABIAIAAIAAgBIARAAIABABIAEAAIKIAAIACgMQAFgzAIggQANgtAWgeQAKgNAVgUQAHgRARgNQALgKAbgNQAhgPAVgDQAOgCAYABIA8ABQAjADAZAIQAjAKAhAZQAeAZAWAiQAVAjAJAnQAEAWAEA6IAAAPICPAAIAFAAIABAAIAGAAIGtAAIAEAAIAEgBIBoAAQAEAAABABQACACAAAEIAAAPIgBAHIgGAGIgTAMQgIAFgIAGIgIAHIgHAFQADAJgFAQQgPA0gSBQQgPBAgLAhIABAXIAAACIAAAAIAFAHIAKALQAGAGAAAHIABACIADAEIADAEIAAABQACADgBACIgBACIgBAEIgHAOIAAADIgFAIIgCAFIgCAIIgDAHIgCACIAAACIAAABIAAAAIgBABIAAAAIAAAAIgBABIAAAAIgBAAIAAABIgHAAIAAABIgDAAIAAgBIgiABIg5gBIgBAAIgBAAIAAAAInNAAIgCAFIgCAOIgIAVIgBABIAAABIgCAGIgFATIgBACIgFAGIgCABIgCAAIgCAAg");
	var mask_graphics_23 = new cjs.Graphics().p("AEuGTIgBgBIpZAAIgCAAIgBgBIgBgBIgBgBIAAgBIAAAAIAAgBIAAgBIAAgBIABAAIgBgCIABAAIAAgCIABgBIAEgLIABgCIABgEIAAAAIAAgCIABAAIAAgBIADgMIABgDIABgDIABgGIgBgBIABgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAAAIABgBIpjAAIgBABIhNAAQgEgCgDgEIgCgEIgEgDQgEgFgCgGIgEgPIgDgFIgBgGIgBgBQgFgGAAgJQAAgIAEgGIAJgIIAIgGIADgCQACgFAFgEIAHgEIABgBIAAgCIABgFIAFgZIAEgYIAfhyQAPg2AEgcQACgLACgHIAAAAIAAgBIgBgBIAAAAIAAgBIgIgDIgXgLQgLgIgGgDIgHgDQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBgDABgCIABgCIABgEIABgBIABgDIACgHIACgCIAAgDIAAgBIABAAIgBgBIABgBIABgBQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAIAAAAIABgBIABgEIADgDIACgCIABAAIAAgBIA/AAIABABIAIAAIAAgBIARAAIABABIAEAAIKIAAIACgMQAFgzAIggQANgtAWgeQAKgNAVgUQAHgRARgNQALgKAbgNQAhgPAVgDQAOgCAYABIA8ABQAjADAZAIQAjAKAhAZQAeAZAWAiQAVAjAJAnQAEAWAEA6IAAAPICPAAIAFAAIABAAIAGAAIGtAAIAEAAIAEgBIBoAAQAEAAABABQACACAAAEIAAAPIgBAHIgGAGIgTAMQgIAFgIAGIgIAHIgHAFQADAJgFAQQgPA0gSBQQgPBAgLAhIABAXIAAACIAAAAIAFAHIAKALQAGAGAAAHIABACIADAEIADAEIAAABQACADgBACIgBACIgBAEIgHAOIAAADIgFAIIgCAFIgCAIIgDAHIgCACIAAACIAAABIAAAAIgBABIAAAAIAAAAIgBABIAAAAIgBAAIAAABIgHAAIAAABIgDAAIAAgBIgiABIg5gBIgBAAIgBAAIAAAAInNAAIgCAFIgCAOIgIAVIgBABIAAABIgCAGIgFATIgBACIgFAGIgCABIgCAAIgCAAg");
	var mask_graphics_24 = new cjs.Graphics().p("AEuGTIgBgBIpZAAIgCAAIgBgBIgBgBIgBgBIAAgBIAAAAIAAgBIAAgBIAAgBIABAAIgBgCIABAAIAAgCIABgBIAEgLIABgCIABgEIAAAAIAAgCIABAAIAAgBIADgMIABgDIABgDIABgGIgBgBIABgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAAAIABgBIpjAAIgBABIhNAAQgEgCgDgEIgCgEIgEgDQgEgFgCgGIgEgPIgDgFIgBgGIgBgBQgFgGAAgJQAAgIAEgGIAJgIIAIgGIADgCQACgFAFgEIAHgEIABgBIAAgCIABgFIAFgZIAEgYIAfhyQAPg2AEgcQACgLACgHIAAAAIAAgBIgBgBIAAAAIAAgBIgIgDIgXgLQgLgIgGgDIgHgDQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBgDABgCIABgCIABgEIABgBIABgDIACgHIACgCIAAgDIAAgBIABAAIgBgBIABgBIABgBQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAIAAAAIABgBIABgEIADgDIACgCIABAAIAAgBIA/AAIABABIAIAAIAAgBIARAAIABABIAEAAIKIAAIACgMQAFgzAIggQANgtAWgeQAKgNAVgUQAHgRARgNQALgKAbgNQAhgPAVgDQAOgCAYABIA8ABQAjADAZAIQAjAKAhAZQAeAZAWAiQAVAjAJAnQAEAWAEA6IAAAPICPAAIAFAAIABAAIAGAAIGtAAIAEAAIAEgBIBoAAQAEAAABABQACACAAAEIAAAPIgBAHIgGAGIgTAMQgIAFgIAGIgIAHIgHAFQADAJgFAQQgPA0gSBQQgPBAgLAhIABAXIAAACIAAAAIAFAHIAKALQAGAGAAAHIABACIADAEIADAEIAAABQACADgBACIgBACIgBAEIgHAOIAAADIgFAIIgCAFIgCAIIgDAHIgCACIAAACIAAABIAAAAIgBABIAAAAIAAAAIgBABIAAAAIgBAAIAAABIgHAAIAAABIgDAAIAAgBIgiABIg5gBIgBAAIgBAAIAAAAInNAAIgCAFIgCAOIgIAVIgBABIAAABIgCAGIgFATIgBACIgFAGIgCABIgCAAIgCAAg");
	var mask_graphics_25 = new cjs.Graphics().p("AEuGTIgBgBIpZAAIgCAAIgBgBIgBgBIgBgBIAAgBIAAAAIAAgBIAAgBIAAgBIABAAIgBgCIABAAIAAgCIABgBIAEgLIABgCIABgEIAAAAIAAgCIABAAIAAgBIADgMIABgDIABgDIABgGIgBgBIABgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAAAIABgBIpjAAIgBABIhNAAQgEgCgDgEIgCgEIgEgDQgEgFgCgGIgEgPIgDgFIgBgGIgBgBQgFgGAAgJQAAgIAEgGIAJgIIAIgGIADgCQACgFAFgEIAHgEIABgBIAAgCIABgFIAFgZIAEgYIAfhyQAPg2AEgcQACgLACgHIAAAAIAAgBIgBgBIAAAAIAAgBIgIgDIgXgLQgLgIgGgDIgHgDQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBgDABgCIABgCIABgEIABgBIABgDIACgHIACgCIAAgDIAAgBIABAAIgBgBIABgBIABgBQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAIAAAAIABgBIABgEIADgDIACgCIABAAIAAgBIA/AAIABABIAIAAIAAgBIARAAIABABIAEAAIKIAAIACgMQAFgzAIggQANgtAWgeQAKgNAVgUQAHgRARgNQALgKAbgNQAhgPAVgDQAOgCAYABIA8ABQAjADAZAIQAjAKAhAZQAeAZAWAiQAVAjAJAnQAEAWAEA6IAAAPICPAAIAFAAIABAAIAGAAIGtAAIAEAAIAEgBIBoAAQAEAAABABQACACAAAEIAAAPIgBAHIgGAGIgTAMQgIAFgIAGIgIAHIgHAFQADAJgFAQQgPA0gSBQQgPBAgLAhIABAXIAAACIAAAAIAFAHIAKALQAGAGAAAHIABACIADAEIADAEIAAABQACADgBACIgBACIgBAEIgHAOIAAADIgFAIIgCAFIgCAIIgDAHIgCACIAAACIAAABIAAAAIgBABIAAAAIAAAAIgBABIAAAAIgBAAIAAABIgHAAIAAABIgDAAIAAgBIgiABIg5gBIgBAAIgBAAIAAAAInNAAIgCAFIgCAOIgIAVIgBABIAAABIgCAGIgFATIgBACIgFAGIgCABIgCAAIgCAAg");
	var mask_graphics_26 = new cjs.Graphics().p("AEuGTIgBgBIpZAAIgCAAIgBgBIgBgBIgBgBIAAgBIAAAAIAAgBIAAgBIAAgBIABAAIgBgCIABAAIAAgCIABgBIAEgLIABgCIABgEIAAAAIAAgCIABAAIAAgBIADgMIABgDIABgDIABgGIgBgBIABgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAAAIABgBIpjAAIgBABIhNAAQgEgCgDgEIgCgEIgEgDQgEgFgCgGIgEgPIgDgFIgBgGIgBgBQgFgGAAgJQAAgIAEgGIAJgIIAIgGIADgCQACgFAFgEIAHgEIABgBIAAgCIABgFIAFgZIAEgYIAfhyQAPg2AEgcQACgLACgHIAAAAIAAgBIgBgBIAAAAIAAgBIgIgDIgXgLQgLgIgGgDIgHgDQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBgDABgCIABgCIABgEIABgBIABgDIACgHIACgCIAAgDIAAgBIABAAIgBgBIABgBIABgBQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAIAAAAIABgBIABgEIADgDIACgCIABAAIAAgBIA/AAIABABIAIAAIAAgBIARAAIABABIAEAAIKIAAIACgMQAFgzAIggQANgtAWgeQAKgNAVgUQAHgRARgNQALgKAbgNQAhgPAVgDQAOgCAYABIA8ABQAjADAZAIQAjAKAhAZQAeAZAWAiQAVAjAJAnQAEAWAEA6IAAAPICPAAIAFAAIABAAIAGAAIGtAAIAEAAIAEgBIBoAAQAEAAABABQACACAAAEIAAAPIgBAHIgGAGIgTAMQgIAFgIAGIgIAHIgHAFQADAJgFAQQgPA0gSBQQgPBAgLAhIABAXIAAACIAAAAIAFAHIAKALQAGAGAAAHIABACIADAEIADAEIAAABQACADgBACIgBACIgBAEIgHAOIAAADIgFAIIgCAFIgCAIIgDAHIgCACIAAACIAAABIAAAAIgBABIAAAAIAAAAIgBABIAAAAIgBAAIAAABIgHAAIAAABIgDAAIAAgBIgiABIg5gBIgBAAIgBAAIAAAAInNAAIgCAFIgCAOIgIAVIgBABIAAABIgCAGIgFATIgBACIgFAGIgCABIgCAAIgCAAg");
	var mask_graphics_27 = new cjs.Graphics().p("AEuGTIgBgBIpZAAIgCAAIgBgBIgBgBIgBgBIAAgBIAAAAIAAgBIAAgBIAAgBIABAAIgBgCIABAAIAAgCIABgBIAEgLIABgCIABgEIAAAAIAAgCIABAAIAAgBIADgMIABgDIABgDIABgGIgBgBIABgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAAAIABgBIpjAAIgBABIhNAAQgEgCgDgEIgCgEIgEgDQgEgFgCgGIgEgPIgDgFIgBgGIgBgBQgFgGAAgJQAAgIAEgGIAJgIIAIgGIADgCQACgFAFgEIAHgEIABgBIAAgCIABgFIAFgZIAEgYIAfhyQAPg2AEgcQACgLACgHIAAAAIAAgBIgBgBIAAAAIAAgBIgIgDIgXgLQgLgIgGgDIgHgDQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBgDABgCIABgCIABgEIABgBIABgDIACgHIACgCIAAgDIAAgBIABAAIgBgBIABgBIABgBQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAIAAAAIABgBIABgEIADgDIACgCIABAAIAAgBIA/AAIABABIAIAAIAAgBIARAAIABABIAEAAIKIAAIACgMQAFgzAIggQANgtAWgeQAKgNAVgUQAHgRARgNQALgKAbgNQAhgPAVgDQAOgCAYABIA8ABQAjADAZAIQAjAKAhAZQAeAZAWAiQAVAjAJAnQAEAWAEA6IAAAPICPAAIAFAAIABAAIAGAAIGtAAIAEAAIAEgBIBoAAQAEAAABABQACACAAAEIAAAPIgBAHIgGAGIgTAMQgIAFgIAGIgIAHIgHAFQADAJgFAQQgPA0gSBQQgPBAgLAhIABAXIAAACIAAAAIAFAHIAKALQAGAGAAAHIABACIADAEIADAEIAAABQACADgBACIgBACIgBAEIgHAOIAAADIgFAIIgCAFIgCAIIgDAHIgCACIAAACIAAABIAAAAIgBABIAAAAIAAAAIgBABIAAAAIgBAAIAAABIgHAAIAAABIgDAAIAAgBIgiABIg5gBIgBAAIgBAAIAAAAInNAAIgCAFIgCAOIgIAVIgBABIAAABIgCAGIgFATIgBACIgFAGIgCABIgCAAIgCAAg");
	var mask_graphics_28 = new cjs.Graphics().p("AEuGTIgBgBIpZAAIgCAAIgBgBIgBgBIgBgBIAAgBIAAAAIAAgBIAAgBIAAgBIABAAIgBgCIABAAIAAgCIABgBIAEgLIABgCIABgEIAAAAIAAgCIABAAIAAgBIADgMIABgDIABgDIABgGIgBgBIABgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAAAIABgBIpjAAIgBABIhNAAQgEgCgDgEIgCgEIgEgDQgEgFgCgGIgEgPIgDgFIgBgGIgBgBQgFgGAAgJQAAgIAEgGIAJgIIAIgGIADgCQACgFAFgEIAHgEIABgBIAAgCIABgFIAFgZIAEgYIAfhyQAPg2AEgcQACgLACgHIAAAAIAAgBIgBgBIAAAAIAAgBIgIgDIgXgLQgLgIgGgDIgHgDQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBgDABgCIABgCIABgEIABgBIABgDIACgHIACgCIAAgDIAAgBIABAAIgBgBIABgBIABgBQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAIAAAAIABgBIABgEIADgDIACgCIABAAIAAgBIA/AAIABABIAIAAIAAgBIARAAIABABIAEAAIKIAAIACgMQAFgzAIggQANgtAWgeQAKgNAVgUQAHgRARgNQALgKAbgNQAhgPAVgDQAOgCAYABIA8ABQAjADAZAIQAjAKAhAZQAeAZAWAiQAVAjAJAnQAEAWAEA6IAAAPICPAAIAFAAIABAAIAGAAIGtAAIAEAAIAEgBIBoAAQAEAAABABQACACAAAEIAAAPIgBAHIgGAGIgTAMQgIAFgIAGIgIAHIgHAFQADAJgFAQQgPA0gSBQQgPBAgLAhIABAXIAAACIAAAAIAFAHIAKALQAGAGAAAHIABACIADAEIADAEIAAABQACADgBACIgBACIgBAEIgHAOIAAADIgFAIIgCAFIgCAIIgDAHIgCACIAAACIAAABIAAAAIgBABIAAAAIAAAAIgBABIAAAAIgBAAIAAABIgHAAIAAABIgDAAIAAgBIgiABIg5gBIgBAAIgBAAIAAAAInNAAIgCAFIgCAOIgIAVIgBABIAAABIgCAGIgFATIgBACIgFAGIgCABIgCAAIgCAAg");
	var mask_graphics_29 = new cjs.Graphics().p("AEuGTIgBgBIpZAAIgCAAIgBgBIgBgBIgBgBIAAgBIAAAAIAAgBIAAgBIAAgBIABAAIgBgCIABAAIAAgCIABgBIAEgLIABgCIABgEIAAAAIAAgCIABAAIAAgBIADgMIABgDIABgDIABgGIgBgBIABgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAAAIABgBIpjAAIgBABIhNAAQgEgCgDgEIgCgEIgEgDQgEgFgCgGIgEgPIgDgFIgBgGIgBgBQgFgGAAgJQAAgIAEgGIAJgIIAIgGIADgCQACgFAFgEIAHgEIABgBIAAgCIABgFIAFgZIAEgYIAfhyQAPg2AEgcQACgLACgHIAAAAIAAgBIgBgBIAAAAIAAgBIgIgDIgXgLQgLgIgGgDIgHgDQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBgDABgCIABgCIABgEIABgBIABgDIACgHIACgCIAAgDIAAgBIABAAIgBgBIABgBIABgBQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAIAAAAIABgBIABgEIADgDIACgCIABAAIAAgBIA/AAIABABIAIAAIAAgBIARAAIABABIAEAAIKIAAIACgMQAFgzAIggQANgtAWgeQAKgNAVgUQAHgRARgNQALgKAbgNQAhgPAVgDQAOgCAYABIA8ABQAjADAZAIQAjAKAhAZQAeAZAWAiQAVAjAJAnQAEAWAEA6IAAAPICPAAIAFAAIABAAIAGAAIGtAAIAEAAIAEgBIBoAAQAEAAABABQACACAAAEIAAAPIgBAHIgGAGIgTAMQgIAFgIAGIgIAHIgHAFQADAJgFAQQgPA0gSBQQgPBAgLAhIABAXIAAACIAAAAIAFAHIAKALQAGAGAAAHIABACIADAEIADAEIAAABQACADgBACIgBACIgBAEIgHAOIAAADIgFAIIgCAFIgCAIIgDAHIgCACIAAACIAAABIAAAAIgBABIAAAAIAAAAIgBABIAAAAIgBAAIAAABIgHAAIAAABIgDAAIAAgBIgiABIg5gBIgBAAIgBAAIAAAAInNAAIgCAFIgCAOIgIAVIgBABIAAABIgCAGIgFATIgBACIgFAGIgCABIgCAAIgCAAg");
	var mask_graphics_30 = new cjs.Graphics().p("AEuGTIgBgBIpZAAIgCAAIgBgBIgBgBIgBgBIAAgBIAAAAIAAgBIAAgBIAAgBIABAAIgBgCIABAAIAAgCIABgBIAEgLIABgCIABgEIAAAAIAAgCIABAAIAAgBIADgMIABgDIABgDIABgGIgBgBIABgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAAAIABgBIpjAAIgBABIhNAAQgEgCgDgEIgCgEIgEgDQgEgFgCgGIgEgPIgDgFIgBgGIgBgBQgFgGAAgJQAAgIAEgGIAJgIIAIgGIADgCQACgFAFgEIAHgEIABgBIAAgCIABgFIAFgZIAEgYIAfhyQAPg2AEgcQACgLACgHIAAAAIAAgBIgBgBIAAAAIAAgBIgIgDIgXgLQgLgIgGgDIgHgDQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBgDABgCIABgCIABgEIABgBIABgDIACgHIACgCIAAgDIAAgBIABAAIgBgBIABgBIABgBQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAIAAAAIABgBIABgEIADgDIACgCIABAAIAAgBIA/AAIABABIAIAAIAAgBIARAAIABABIAEAAIKIAAIACgMQAFgzAIggQANgtAWgeQAKgNAVgUQAHgRARgNQALgKAbgNQAhgPAVgDQAOgCAYABIA8ABQAjADAZAIQAjAKAhAZQAeAZAWAiQAVAjAJAnQAEAWAEA6IAAAPICPAAIAFAAIABAAIAGAAIGtAAIAEAAIAEgBIBoAAQAEAAABABQACACAAAEIAAAPIgBAHIgGAGIgTAMQgIAFgIAGIgIAHIgHAFQADAJgFAQQgPA0gSBQQgPBAgLAhIABAXIAAACIAAAAIAFAHIAKALQAGAGAAAHIABACIADAEIADAEIAAABQACADgBACIgBACIgBAEIgHAOIAAADIgFAIIgCAFIgCAIIgDAHIgCACIAAACIAAABIAAAAIgBABIAAAAIAAAAIgBABIAAAAIgBAAIAAABIgHAAIAAABIgDAAIAAgBIgiABIg5gBIgBAAIgBAAIAAAAInNAAIgCAFIgCAOIgIAVIgBABIAAABIgCAGIgFATIgBACIgFAGIgCABIgCAAIgCAAg");
	var mask_graphics_31 = new cjs.Graphics().p("AEuGTIgBgBIpZAAIgCAAIgBgBIgBgBIgBgBIAAgBIAAAAIAAgBIAAgBIAAgBIABAAIgBgCIABAAIAAgCIABgBIAEgLIABgCIABgEIAAAAIAAgCIABAAIAAgBIADgMIABgDIABgDIABgGIgBgBIABgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAAAIABgBIpjAAIgBABIhNAAQgEgCgDgEIgCgEIgEgDQgEgFgCgGIgEgPIgDgFIgBgGIgBgBQgFgGAAgJQAAgIAEgGIAJgIIAIgGIADgCQACgFAFgEIAHgEIABgBIAAgCIABgFIAFgZIAEgYIAfhyQAPg2AEgcQACgLACgHIAAAAIAAgBIgBgBIAAAAIAAgBIgIgDIgXgLQgLgIgGgDIgHgDQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBgDABgCIABgCIABgEIABgBIABgDIACgHIACgCIAAgDIAAgBIABAAIgBgBIABgBIABgBQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAIAAAAIABgBIABgEIADgDIACgCIABAAIAAgBIA/AAIABABIAIAAIAAgBIARAAIABABIAEAAIKIAAIACgMQAFgzAIggQANgtAWgeQAKgNAVgUQAHgRARgNQALgKAbgNQAhgPAVgDQAOgCAYABIA8ABQAjADAZAIQAjAKAhAZQAeAZAWAiQAVAjAJAnQAEAWAEA6IAAAPICPAAIAFAAIABAAIAGAAIGtAAIAEAAIAEgBIBoAAQAEAAABABQACACAAAEIAAAPIgBAHIgGAGIgTAMQgIAFgIAGIgIAHIgHAFQADAJgFAQQgPA0gSBQQgPBAgLAhIABAXIAAACIAAAAIAFAHIAKALQAGAGAAAHIABACIADAEIADAEIAAABQACADgBACIgBACIgBAEIgHAOIAAADIgFAIIgCAFIgCAIIgDAHIgCACIAAACIAAABIAAAAIgBABIAAAAIAAAAIgBABIAAAAIgBAAIAAABIgHAAIAAABIgDAAIAAgBIgiABIg5gBIgBAAIgBAAIAAAAInNAAIgCAFIgCAOIgIAVIgBABIAAABIgCAGIgFATIgBACIgFAGIgCABIgCAAIgCAAg");
	var mask_graphics_32 = new cjs.Graphics().p("AEuGTIgBgBIpZAAIgCAAIgBgBIgBgBIgBgBIAAgBIAAAAIAAgBIAAgBIAAgBIABAAIgBgCIABAAIAAgCIABgBIAEgLIABgCIABgEIAAAAIAAgCIABAAIAAgBIADgMIABgDIABgDIABgGIgBgBIABgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAAAIABgBIpjAAIgBABIhNAAQgEgCgDgEIgCgEIgEgDQgEgFgCgGIgEgPIgDgFIgBgGIgBgBQgFgGAAgJQAAgIAEgGIAJgIIAIgGIADgCQACgFAFgEIAHgEIABgBIAAgCIABgFIAFgZIAEgYIAfhyQAPg2AEgcQACgLACgHIAAAAIAAgBIgBgBIAAAAIAAgBIgIgDIgXgLQgLgIgGgDIgHgDQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBgDABgCIABgCIABgEIABgBIABgDIACgHIACgCIAAgDIAAgBIABAAIgBgBIABgBIABgBQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAIAAAAIABgBIABgEIADgDIACgCIABAAIAAgBIA/AAIABABIAIAAIAAgBIARAAIABABIAEAAIKIAAIACgMQAFgzAIggQANgtAWgeQAKgNAVgUQAHgRARgNQALgKAbgNQAhgPAVgDQAOgCAYABIA8ABQAjADAZAIQAjAKAhAZQAeAZAWAiQAVAjAJAnQAEAWAEA6IAAAPICPAAIAFAAIABAAIAGAAIGtAAIAEAAIAEgBIBoAAQAEAAABABQACACAAAEIAAAPIgBAHIgGAGIgTAMQgIAFgIAGIgIAHIgHAFQADAJgFAQQgPA0gSBQQgPBAgLAhIABAXIAAACIAAAAIAFAHIAKALQAGAGAAAHIABACIADAEIADAEIAAABQACADgBACIgBACIgBAEIgHAOIAAADIgFAIIgCAFIgCAIIgDAHIgCACIAAACIAAABIAAAAIgBABIAAAAIAAAAIgBABIAAAAIgBAAIAAABIgHAAIAAABIgDAAIAAgBIgiABIg5gBIgBAAIgBAAIAAAAInNAAIgCAFIgCAOIgIAVIgBABIAAABIgCAGIgFATIgBACIgFAGIgCABIgCAAIgCAAg");
	var mask_graphics_33 = new cjs.Graphics().p("AEuGTIgBgBIpZAAIgCAAIgBgBIgBgBIgBgBIAAgBIAAAAIAAgBIAAgBIAAgBIABAAIgBgCIABAAIAAgCIABgBIAEgLIABgCIABgEIAAAAIAAgCIABAAIAAgBIADgMIABgDIABgDIABgGIgBgBIABgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAAAIABgBIpjAAIgBABIhNAAQgEgCgDgEIgCgEIgEgDQgEgFgCgGIgEgPIgDgFIgBgGIgBgBQgFgGAAgJQAAgIAEgGIAJgIIAIgGIADgCQACgFAFgEIAHgEIABgBIAAgCIABgFIAFgZIAEgYIAfhyQAPg2AEgcQACgLACgHIAAAAIAAgBIgBgBIAAAAIAAgBIgIgDIgXgLQgLgIgGgDIgHgDQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBgDABgCIABgCIABgEIABgBIABgDIACgHIACgCIAAgDIAAgBIABAAIgBgBIABgBIABgBQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAIAAAAIABgBIABgEIADgDIACgCIABAAIAAgBIA/AAIABABIAIAAIAAgBIARAAIABABIAEAAIKIAAIACgMQAFgzAIggQANgtAWgeQAKgNAVgUQAHgRARgNQALgKAbgNQAhgPAVgDQAOgCAYABIA8ABQAjADAZAIQAjAKAhAZQAeAZAWAiQAVAjAJAnQAEAWAEA6IAAAPICPAAIAFAAIABAAIAGAAIGtAAIAEAAIAEgBIBoAAQAEAAABABQACACAAAEIAAAPIgBAHIgGAGIgTAMQgIAFgIAGIgIAHIgHAFQADAJgFAQQgPA0gSBQQgPBAgLAhIABAXIAAACIAAAAIAFAHIAKALQAGAGAAAHIABACIADAEIADAEIAAABQACADgBACIgBACIgBAEIgHAOIAAADIgFAIIgCAFIgCAIIgDAHIgCACIAAACIAAABIAAAAIgBABIAAAAIAAAAIgBABIAAAAIgBAAIAAABIgHAAIAAABIgDAAIAAgBIgiABIg5gBIgBAAIgBAAIAAAAInNAAIgCAFIgCAOIgIAVIgBABIAAABIgCAGIgFATIgBACIgFAGIgCABIgCAAIgCAAg");
	var mask_graphics_34 = new cjs.Graphics().p("AEuGTIgBgBIpZAAIgCAAIgBgBIgBgBIgBgBIAAgBIAAAAIAAgBIAAgBIAAgBIABAAIgBgCIABAAIAAgCIABgBIAEgLIABgCIABgEIAAAAIAAgCIABAAIAAgBIADgMIABgDIABgDIABgGIgBgBIABgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAAAIABgBIpjAAIgBABIhNAAQgEgCgDgEIgCgEIgEgDQgEgFgCgGIgEgPIgDgFIgBgGIgBgBQgFgGAAgJQAAgIAEgGIAJgIIAIgGIADgCQACgFAFgEIAHgEIABgBIAAgCIABgFIAFgZIAEgYIAfhyQAPg2AEgcQACgLACgHIAAAAIAAgBIgBgBIAAAAIAAgBIgIgDIgXgLQgLgIgGgDIgHgDQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBgDABgCIABgCIABgEIABgBIABgDIACgHIACgCIAAgDIAAgBIABAAIgBgBIABgBIABgBQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAIAAAAIABgBIABgEIADgDIACgCIABAAIAAgBIA/AAIABABIAIAAIAAgBIARAAIABABIAEAAIKIAAIACgMQAFgzAIggQANgtAWgeQAKgNAVgUQAHgRARgNQALgKAbgNQAhgPAVgDQAOgCAYABIA8ABQAjADAZAIQAjAKAhAZQAeAZAWAiQAVAjAJAnQAEAWAEA6IAAAPICPAAIAFAAIABAAIAGAAIGtAAIAEAAIAEgBIBoAAQAEAAABABQACACAAAEIAAAPIgBAHIgGAGIgTAMQgIAFgIAGIgIAHIgHAFQADAJgFAQQgPA0gSBQQgPBAgLAhIABAXIAAACIAAAAIAFAHIAKALQAGAGAAAHIABACIADAEIADAEIAAABQACADgBACIgBACIgBAEIgHAOIAAADIgFAIIgCAFIgCAIIgDAHIgCACIAAACIAAABIAAAAIgBABIAAAAIAAAAIgBABIAAAAIgBAAIAAABIgHAAIAAABIgDAAIAAgBIgiABIg5gBIgBAAIgBAAIAAAAInNAAIgCAFIgCAOIgIAVIgBABIAAABIgCAGIgFATIgBACIgFAGIgCABIgCAAIgCAAg");
	var mask_graphics_35 = new cjs.Graphics().p("AEuGTIgBgBIpZAAIgCAAIgBgBIgBgBIgBgBIAAgBIAAAAIAAgBIAAgBIAAgBIABAAIgBgCIABAAIAAgCIABgBIAEgLIABgCIABgEIAAAAIAAgCIABAAIAAgBIADgMIABgDIABgDIABgGIgBgBIABgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAAAIABgBIpjAAIgBABIhNAAQgEgCgDgEIgCgEIgEgDQgEgFgCgGIgEgPIgDgFIgBgGIgBgBQgFgGAAgJQAAgIAEgGIAJgIIAIgGIADgCQACgFAFgEIAHgEIABgBIAAgCIABgFIAFgZIAEgYIAfhyQAPg2AEgcQACgLACgHIAAAAIAAgBIgBgBIAAAAIAAgBIgIgDIgXgLQgLgIgGgDIgHgDQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBgDABgCIABgCIABgEIABgBIABgDIACgHIACgCIAAgDIAAgBIABAAIgBgBIABgBIABgBQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAIAAAAIABgBIABgEIADgDIACgCIABAAIAAgBIA/AAIABABIAIAAIAAgBIARAAIABABIAEAAIKIAAIACgMQAFgzAIggQANgtAWgeQAKgNAVgUQAHgRARgNQALgKAbgNQAhgPAVgDQAOgCAYABIA8ABQAjADAZAIQAjAKAhAZQAeAZAWAiQAVAjAJAnQAEAWAEA6IAAAPICPAAIAFAAIABAAIAGAAIGtAAIAEAAIAEgBIBoAAQAEAAABABQACACAAAEIAAAPIgBAHIgGAGIgTAMQgIAFgIAGIgIAHIgHAFQADAJgFAQQgPA0gSBQQgPBAgLAhIABAXIAAACIAAAAIAFAHIAKALQAGAGAAAHIABACIADAEIADAEIAAABQACADgBACIgBACIgBAEIgHAOIAAADIgFAIIgCAFIgCAIIgDAHIgCACIAAACIAAABIAAAAIgBABIAAAAIAAAAIgBABIAAAAIgBAAIAAABIgHAAIAAABIgDAAIAAgBIgiABIg5gBIgBAAIgBAAIAAAAInNAAIgCAFIgCAOIgIAVIgBABIAAABIgCAGIgFATIgBACIgFAGIgCABIgCAAIgCAAg");
	var mask_graphics_36 = new cjs.Graphics().p("AEuGTIgBgBIpZAAIgCAAIgBgBIgBgBIgBgBIAAgBIAAAAIAAgBIAAgBIAAgBIABAAIgBgCIABAAIAAgCIABgBIAEgLIABgCIABgEIAAAAIAAgCIABAAIAAgBIADgMIABgDIABgDIABgGIgBgBIABgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAAAIABgBIpjAAIgBABIhNAAQgEgCgDgEIgCgEIgEgDQgEgFgCgGIgEgPIgDgFIgBgGIgBgBQgFgGAAgJQAAgIAEgGIAJgIIAIgGIADgCQACgFAFgEIAHgEIABgBIAAgCIABgFIAFgZIAEgYIAfhyQAPg2AEgcQACgLACgHIAAAAIAAgBIgBgBIAAAAIAAgBIgIgDIgXgLQgLgIgGgDIgHgDQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBgDABgCIABgCIABgEIABgBIABgDIACgHIACgCIAAgDIAAgBIABAAIgBgBIABgBIABgBQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAIAAAAIABgBIABgEIADgDIACgCIABAAIAAgBIA/AAIABABIAIAAIAAgBIARAAIABABIAEAAIKIAAIACgMQAFgzAIggQANgtAWgeQAKgNAVgUQAHgRARgNQALgKAbgNQAhgPAVgDQAOgCAYABIA8ABQAjADAZAIQAjAKAhAZQAeAZAWAiQAVAjAJAnQAEAWAEA6IAAAPICPAAIAFAAIABAAIAGAAIGtAAIAEAAIAEgBIBoAAQAEAAABABQACACAAAEIAAAPIgBAHIgGAGIgTAMQgIAFgIAGIgIAHIgHAFQADAJgFAQQgPA0gSBQQgPBAgLAhIABAXIAAACIAAAAIAFAHIAKALQAGAGAAAHIABACIADAEIADAEIAAABQACADgBACIgBACIgBAEIgHAOIAAADIgFAIIgCAFIgCAIIgDAHIgCACIAAACIAAABIAAAAIgBABIAAAAIAAAAIgBABIAAAAIgBAAIAAABIgHAAIAAABIgDAAIAAgBIgiABIg5gBIgBAAIgBAAIAAAAInNAAIgCAFIgCAOIgIAVIgBABIAAABIgCAGIgFATIgBACIgFAGIgCABIgCAAIgCAAg");
	var mask_graphics_37 = new cjs.Graphics().p("AEuGTIgBgBIpZAAIgCAAIgBgBIgBgBIgBgBIAAgBIAAAAIAAgBIAAgBIAAgBIABAAIgBgCIABAAIAAgCIABgBIAEgLIABgCIABgEIAAAAIAAgCIABAAIAAgBIADgMIABgDIABgDIABgGIgBgBIABgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAAAIABgBIpjAAIgBABIhNAAQgEgCgDgEIgCgEIgEgDQgEgFgCgGIgEgPIgDgFIgBgGIgBgBQgFgGAAgJQAAgIAEgGIAJgIIAIgGIADgCQACgFAFgEIAHgEIABgBIAAgCIABgFIAFgZIAEgYIAfhyQAPg2AEgcQACgLACgHIAAAAIAAgBIgBgBIAAAAIAAgBIgIgDIgXgLQgLgIgGgDIgHgDQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBgDABgCIABgCIABgEIABgBIABgDIACgHIACgCIAAgDIAAgBIABAAIgBgBIABgBIABgBQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAIAAAAIABgBIABgEIADgDIACgCIABAAIAAgBIA/AAIABABIAIAAIAAgBIARAAIABABIAEAAIKIAAIACgMQAFgzAIggQANgtAWgeQAKgNAVgUQAHgRARgNQALgKAbgNQAhgPAVgDQAOgCAYABIA8ABQAjADAZAIQAjAKAhAZQAeAZAWAiQAVAjAJAnQAEAWAEA6IAAAPICPAAIAFAAIABAAIAGAAIGtAAIAEAAIAEgBIBoAAQAEAAABABQACACAAAEIAAAPIgBAHIgGAGIgTAMQgIAFgIAGIgIAHIgHAFQADAJgFAQQgPA0gSBQQgPBAgLAhIABAXIAAACIAAAAIAFAHIAKALQAGAGAAAHIABACIADAEIADAEIAAABQACADgBACIgBACIgBAEIgHAOIAAADIgFAIIgCAFIgCAIIgDAHIgCACIAAACIAAABIAAAAIgBABIAAAAIAAAAIgBABIAAAAIgBAAIAAABIgHAAIAAABIgDAAIAAgBIgiABIg5gBIgBAAIgBAAIAAAAInNAAIgCAFIgCAOIgIAVIgBABIAAABIgCAGIgFATIgBACIgFAGIgCABIgCAAIgCAAg");
	var mask_graphics_38 = new cjs.Graphics().p("AEuGTIgBgBIpZAAIgCAAIgBgBIgBgBIgBgBIAAgBIAAAAIAAgBIAAgBIAAgBIABAAIgBgCIABAAIAAgCIABgBIAEgLIABgCIABgEIAAAAIAAgCIABAAIAAgBIADgMIABgDIABgDIABgGIgBgBIABgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAAAIABgBIpjAAIgBABIhNAAQgEgCgDgEIgCgEIgEgDQgEgFgCgGIgEgPIgDgFIgBgGIgBgBQgFgGAAgJQAAgIAEgGIAJgIIAIgGIADgCQACgFAFgEIAHgEIABgBIAAgCIABgFIAFgZIAEgYIAfhyQAPg2AEgcQACgLACgHIAAAAIAAgBIgBgBIAAAAIAAgBIgIgDIgXgLQgLgIgGgDIgHgDQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBgDABgCIABgCIABgEIABgBIABgDIACgHIACgCIAAgDIAAgBIABAAIgBgBIABgBIABgBQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAIAAAAIABgBIABgEIADgDIACgCIABAAIAAgBIA/AAIABABIAIAAIAAgBIARAAIABABIAEAAIKIAAIACgMQAFgzAIggQANgtAWgeQAKgNAVgUQAHgRARgNQALgKAbgNQAhgPAVgDQAOgCAYABIA8ABQAjADAZAIQAjAKAhAZQAeAZAWAiQAVAjAJAnQAEAWAEA6IAAAPICPAAIAFAAIABAAIAGAAIGtAAIAEAAIAEgBIBoAAQAEAAABABQACACAAAEIAAAPIgBAHIgGAGIgTAMQgIAFgIAGIgIAHIgHAFQADAJgFAQQgPA0gSBQQgPBAgLAhIABAXIAAACIAAAAIAFAHIAKALQAGAGAAAHIABACIADAEIADAEIAAABQACADgBACIgBACIgBAEIgHAOIAAADIgFAIIgCAFIgCAIIgDAHIgCACIAAACIAAABIAAAAIgBABIAAAAIAAAAIgBABIAAAAIgBAAIAAABIgHAAIAAABIgDAAIAAgBIgiABIg5gBIgBAAIgBAAIAAAAInNAAIgCAFIgCAOIgIAVIgBABIAAABIgCAGIgFATIgBACIgFAGIgCABIgCAAIgCAAg");
	var mask_graphics_39 = new cjs.Graphics().p("AEuGTIgBgBIpZAAIgCAAIgBgBIgBgBIgBgBIAAgBIAAAAIAAgBIAAgBIAAgBIABAAIgBgCIABAAIAAgCIABgBIAEgLIABgCIABgEIAAAAIAAgCIABAAIAAgBIADgMIABgDIABgDIABgGIgBgBIABgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAAAIABgBIpjAAIgBABIhNAAQgEgCgDgEIgCgEIgEgDQgEgFgCgGIgEgPIgDgFIgBgGIgBgBQgFgGAAgJQAAgIAEgGIAJgIIAIgGIADgCQACgFAFgEIAHgEIABgBIAAgCIABgFIAFgZIAEgYIAfhyQAPg2AEgcQACgLACgHIAAAAIAAgBIgBgBIAAAAIAAgBIgIgDIgXgLQgLgIgGgDIgHgDQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBgDABgCIABgCIABgEIABgBIABgDIACgHIACgCIAAgDIAAgBIABAAIgBgBIABgBIABgBQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAIAAAAIABgBIABgEIADgDIACgCIABAAIAAgBIA/AAIABABIAIAAIAAgBIARAAIABABIAEAAIKIAAIACgMQAFgzAIggQANgtAWgeQAKgNAVgUQAHgRARgNQALgKAbgNQAhgPAVgDQAOgCAYABIA8ABQAjADAZAIQAjAKAhAZQAeAZAWAiQAVAjAJAnQAEAWAEA6IAAAPICPAAIAFAAIABAAIAGAAIGtAAIAEAAIAEgBIBoAAQAEAAABABQACACAAAEIAAAPIgBAHIgGAGIgTAMQgIAFgIAGIgIAHIgHAFQADAJgFAQQgPA0gSBQQgPBAgLAhIABAXIAAACIAAAAIAFAHIAKALQAGAGAAAHIABACIADAEIADAEIAAABQACADgBACIgBACIgBAEIgHAOIAAADIgFAIIgCAFIgCAIIgDAHIgCACIAAACIAAABIAAAAIgBABIAAAAIAAAAIgBABIAAAAIgBAAIAAABIgHAAIAAABIgDAAIAAgBIgiABIg5gBIgBAAIgBAAIAAAAInNAAIgCAFIgCAOIgIAVIgBABIAAABIgCAGIgFATIgBACIgFAGIgCABIgCAAIgCAAg");
	var mask_graphics_79 = new cjs.Graphics().p("AEuGTIgBgBIpZAAIgCAAIgBgBIgBgBIgBgBIAAgBIAAAAIAAgBIAAgBIAAgBIABAAIgBgCIABAAIAAgCIABgBIAEgLIABgCIABgEIAAAAIAAgCIABAAIAAgBIADgMIABgDIABgDIABgGIgBgBIABgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAAAIABgBIpjAAIgBABIhNAAQgEgCgDgEIgCgEIgEgDQgEgFgCgGIgEgPIgDgFIgBgGIgBgBQgFgGAAgJQAAgIAEgGIAJgIIAIgGIADgCQACgFAFgEIAHgEIABgBIAAgCIABgFIAFgZIAEgYIAfhyQAPg2AEgcQACgLACgHIAAAAIAAgBIgBgBIAAAAIAAgBIgIgDIgXgLQgLgIgGgDIgHgDQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBgDABgCIABgCIABgEIABgBIABgDIACgHIACgCIAAgDIAAgBIABAAIgBgBIABgBIABgBQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAIAAAAIABgBIABgEIADgDIACgCIABAAIAAgBIA/AAIABABIAIAAIAAgBIARAAIABABIAEAAIKIAAIACgMQAFgzAIggQANgtAWgeQAKgNAVgUQAHgRARgNQALgKAbgNQAhgPAVgDQAOgCAYABIA8ABQAjADAZAIQAjAKAhAZQAeAZAWAiQAVAjAJAnQAEAWAEA6IAAAPICPAAIAFAAIABAAIAGAAIGtAAIAEAAIAEgBIBoAAQAEAAABABQACACAAAEIAAAPIgBAHIgGAGIgTAMQgIAFgIAGIgIAHIgHAFQADAJgFAQQgPA0gSBQQgPBAgLAhIABAXIAAACIAAAAIAFAHIAKALQAGAGAAAHIABACIADAEIADAEIAAABQACADgBACIgBACIgBAEIgHAOIAAADIgFAIIgCAFIgCAIIgDAHIgCACIAAACIAAABIAAAAIgBABIAAAAIAAAAIgBABIAAAAIgBAAIAAABIgHAAIAAABIgDAAIAAgBIgiABIg5gBIgBAAIgBAAIAAAAInNAAIgCAFIgCAOIgIAVIgBABIAAABIgCAGIgFATIgBACIgFAGIgCABIgCAAIgCAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:112.3,y:49}).wait(1).to({graphics:mask_graphics_1,x:112.3,y:49}).wait(1).to({graphics:mask_graphics_2,x:112.3,y:49}).wait(1).to({graphics:mask_graphics_3,x:112.3,y:49}).wait(1).to({graphics:mask_graphics_4,x:112.3,y:49}).wait(1).to({graphics:mask_graphics_5,x:112.3,y:49}).wait(1).to({graphics:mask_graphics_6,x:112.3,y:49}).wait(1).to({graphics:mask_graphics_7,x:112.3,y:49}).wait(1).to({graphics:mask_graphics_8,x:112.3,y:49}).wait(1).to({graphics:mask_graphics_9,x:112.3,y:49}).wait(1).to({graphics:mask_graphics_10,x:112.3,y:49}).wait(1).to({graphics:mask_graphics_11,x:112.3,y:49}).wait(1).to({graphics:mask_graphics_12,x:112.3,y:49}).wait(1).to({graphics:mask_graphics_13,x:112.3,y:49}).wait(1).to({graphics:mask_graphics_14,x:112.3,y:49}).wait(1).to({graphics:mask_graphics_15,x:112.3,y:49}).wait(1).to({graphics:mask_graphics_16,x:112.3,y:49}).wait(1).to({graphics:mask_graphics_17,x:112.3,y:49}).wait(1).to({graphics:mask_graphics_18,x:112.3,y:49}).wait(1).to({graphics:mask_graphics_19,x:112.3,y:49}).wait(1).to({graphics:mask_graphics_20,x:112.3,y:49}).wait(1).to({graphics:mask_graphics_21,x:112.3,y:49}).wait(1).to({graphics:mask_graphics_22,x:112.3,y:49}).wait(1).to({graphics:mask_graphics_23,x:112.3,y:49}).wait(1).to({graphics:mask_graphics_24,x:112.3,y:49}).wait(1).to({graphics:mask_graphics_25,x:112.3,y:49}).wait(1).to({graphics:mask_graphics_26,x:112.3,y:49}).wait(1).to({graphics:mask_graphics_27,x:112.3,y:49}).wait(1).to({graphics:mask_graphics_28,x:112.3,y:49}).wait(1).to({graphics:mask_graphics_29,x:112.3,y:49}).wait(1).to({graphics:mask_graphics_30,x:112.3,y:49}).wait(1).to({graphics:mask_graphics_31,x:112.3,y:49}).wait(1).to({graphics:mask_graphics_32,x:112.3,y:49}).wait(1).to({graphics:mask_graphics_33,x:112.3,y:49}).wait(1).to({graphics:mask_graphics_34,x:112.3,y:49}).wait(1).to({graphics:mask_graphics_35,x:112.3,y:49}).wait(1).to({graphics:mask_graphics_36,x:112.3,y:49}).wait(1).to({graphics:mask_graphics_37,x:112.3,y:49}).wait(1).to({graphics:mask_graphics_38,x:112.3,y:49}).wait(1).to({graphics:mask_graphics_39,x:112.3,y:49}).wait(40).to({graphics:mask_graphics_79,x:112.3,y:49}).wait(1));

	// Слой 2
	this.instance = new lib.Символ31();
	this.instance.parent = this;
	this.instance.setTransform(-28.3,43.2,1,1,23,0,0,95.5,52.3);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:265.7},39).wait(41));

	// Слой 1
	this.instance_1 = new lib.Анимация5("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(111.8,50.8);

	this.instance_2 = new lib.Анимация6("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(111.8,50.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},39).to({state:[{t:this.instance_2}]},40).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},39).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8,7,207.6,87.7);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAaBTIhDgsIgGgGIAAhNIAEAAQARgBAMAIQALAFAAAMIAAArIAEAFIAkAZIAmgZIAGgFIAAgrQAAgKAMgIQAMgGAQAAIAEAAIAABNIgGAGIhSAzgAHWBWIg/hQIBFAAIAAgXIhZAAIAABHQAAATgMAGQgFAEgIAAIgTABIAAiAICIAAQATgBAKAIQALAHAAANIAAAXQAAAMgKAIQgJAHgTABIAqA0gAJJBSQAAgJAFgFQAFgFAGgCQAHgCAHgBIA+AAIAAgZIhnABIgNgBQgHgCgFgFQgFgEAAgKIAAg4IAPAAIAOADQAGACAFAFQAEAEAAAJIAAAbIBZAAIAAgyIAsAAIAABnQAAAIgEAFQgFAFgGADQgGAEgIAAIhrABgAC5BVIgPgCQgHgCgGgDQgFgEgDgFQgDgFAAgHIAAhKQAAgGADgFQADgGAFgDIANgGQAHgBAIAAIBhAAQATgBAKAIQAGADACAGQADAFAAAGIiEAAIAAAXIBUAAIAAAbIhUAAIAAAZICEAAQAAAHgDAFQgDAGgFADQgGADgHABIgQACgAhIBVIgPgCQgHgCgGgDQgFgEgDgFQgDgFAAgHIAAhlIArAAIAACBgAjjBVIgPgCQgIgCgFgDQgGgDgDgFQgDgFAAgIIAAhlIAEAAQASgBALAIQAFADADAGQADAFAAAGIAABLIBbAAQAAAHgEAGQgDAFgFADQgGADgHABIgQACgAmpBVIgPgCQgHgCgGgDQgFgEgDgFQgDgFAAgHIAAhKQAAgGADgFQADgGAFgDIANgGQAHgBAIAAIBhAAQATgBAKAIQAGADACAGQADAFAAAGIiEAAIAAAXIBUAAIAAAbIhUAAIAAAZICEAAQAAAHgDAFQgDAGgFADQgGADgHABIgQACgArQBVIAAiuIC2AAQAYAAAPAKQAOAJAAASIAABkQAAAKgEAGQgEAIgHAEQgIAEgJADQgKACgLAAgAqVAxIB2AAIAAhlIh2AAg");
	this.shape.setTransform(72.2,9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 2
	this.instance = new lib.Символ46();
	this.instance.parent = this;
	this.instance.setTransform(1.8,13.8,1.2,1.437,0,-90,90,100,122.9);
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-174.8,-106.2,353.6,239.9);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AkwBYIgPgDQgIgBgGgDQgGgEgEgFQgDgGAAgGICGAAIAAgZIheAAIgPgBQgHgDgGgDQgGgEgDgEQgDgFAAgHIAAgVQAAgHADgGQADgGAGgDQAGgEAHgCIAPgBIBgAAQATAAALAGQAFADADAGQADAFAAAHIiEAAIAAAXIBbAAIAPABQAIABAFADQAGAEAEAEQADAGAAAHIAAAZQABAOgMAIQgMAGgSABgAHuBXIAAhmIhDAAIAAgEQAAgNAIgGQAIgEAPAAICUAAIAAAGQAAAIgFAEQgEAFgFACIgMACIgpAAIAABKQAAAQgGAGQgIAGgRAAgAC2BXIAAg0IhYAAIAAAVQAAAJgEAGQgCAEgHAFQgFADgIACIgQACIgCAAIAAhlQAAgHACgFQADgGAGgDQAGgEAHgCIAPgBICKAAIAACBgABeAIIBYAAIAAgXIhYAAgAhRBXIAAhmIhDAAIAAgEQAAgNAIgGQAIgEAPAAICSAAIAAAGQgBAIgEAEQgDAFgGACIgMACIgnAAIAABKQAAAQgHAGQgGAGgSAAgAooBXQgLAAgJgDQgJgDgIgEQgHgEgFgIQgEgGAAgJIAAiJIA7AAIAACugAGFBWIgLgCIgMgEIgKgHIhAg9IAABKIgsAAIAAiAIASAAIAKABIAMAFQAFACAGAFIAuAqIADADIAPANIAAgtQAAgHACgFQADgFAGgDQALgHASABIAEAAIAACAgAmABWIgLgCIgMgEIgKgHIhAg9IAABKIgsAAIAAiAIASAAIAKABIAMAFQAFACAFAFIAvAqIADADIAPANIAAgtQAAgHADgFQADgFAFgDQALgHASABIADAAIAACAg");
	this.shape.setTransform(60.6,8.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 2
	this.instance = new lib.Символ46();
	this.instance.parent = this;
	this.instance.setTransform(-13.8,7,1.119,1.341,-90,0,0,99.9,122.9);
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-178.6,-105,329.8,223.8);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AoYAnIgGgGIAAhNIAEAAQAQgBAMAIQAMAFAAAMIAAArIAFAFIAlAZIAmgZIAFgFIAAgrQAAgKANgIQALgGARAAIAEAAIAABNIgHAGIhGAsIgLAHgAInBWIg/hQIBEAAIAAgXIhZAAIAABHQAAATgLAGQgGAEgHAAIgUABIAAiAICJAAQASgBALAIQALAHAAANIAAAXQAAAMgKAIQgKAHgSABIAqA0gAKaBSQAAgJAFgFQAEgFAHgCQAGgCAHgBIA/AAIAAgZIhnABIgOgBQgHgCgFgFQgEgEAAgKIAAg4IAPAAIANADQAGACAFAFQAFAEAAAJIAAAbIBZAAIAAgyIAsAAIAABnQAAAIgFAFQgEAFgGADQgHAEgIAAIhqABgAEJBVIgPgCQgHgCgFgDQgGgEgDgFQgDgFAAgGIAAhLQAAgHADgEQADgGAGgDQAFgEAHgCIAPgBIBiAAQASgBALAIQALAGAAAOIAABMQAAAHgEAFQgDAFgFADQgFADgIABIgPACgAEOA6IBZAAIAAhLIhZAAgABeBVIAAhmIhDAAIAAgEQAAgNAIgGQAIgEAPAAICTAAIAAAGQAAAIgEAEQgEAFgFACIgMACIgpAAIAABKQAAAQgHAGQgHAGgSAAgAk0BVIgPgCQgIgCgFgDQgGgEgDgFQgDgFAAgHIAAhKQAAgGADgFQADgGAGgDIANgGQAHgBAHAAIBiAAQASgBALAIQAFADADAGQADAFAAAGIiFAAIAAAXIBUAAIAAAbIhUAAIAAAZICFAAQAAAHgDAFQgDAGgGADQgFADgIABIgPACgArtBVQgKAAgKgDQgJgDgHgEQgHgEgFgIQgEgGAAgJIAAiJIA7AAIAACugAgJBUIgLgCIgMgEIgKgHIhBg9IAABKIgsAAIAAiAIASAAIALABIAMAFQAFACAFAFIAvAqIADADIAOANIAAgtQAAgHADgFQADgFAGgDQALgHAQABIADAAIAACAgApEBUIgLgCIgMgEIgKgHIhBg9IAABKIgsAAIAAiAIAJAAIAUABIAMAFQAFACAFAFIAvAqIADADIAOANIAAgtQAAgHADgFQADgFAGgDQALgHASABIADAAIAACAg");
	this.shape.setTransform(80.2,9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 2
	this.instance = new lib.Символ46();
	this.instance.parent = this;
	this.instance.setTransform(15.6,7.5,1.2,1.437,0,-90,90,100,122.9);
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-161.1,-112.4,353.6,239.9);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AquBYIgPgDQgIgBgGgDQgFgEgEgFQgEgGAAgGICGAAIAAgZIheAAIgPgBQgHgDgGgDQgFgEgDgEQgEgFAAgHIAAgVQAAgHAEgGQADgGAFgDQAGgEAHgCIAQgBIBfAAQATAAALAGQAGADADAGQADAFAAAHIiFAAIAAAXIBbAAIAPABQAIABAGADQAFAEAEAEQAEAGAAAHIAAAZQAAAOgMAIQgLAGgTABgANSBXIgPgCQgHgCgGgDQgFgEgDgFQgDgFAAgHIAAhKQAAgGADgFQADgGAFgDIANgGQAHgBAIAAIBhAAQATgBAKAIQAGADACAGQADAFAAAGIiEAAIAAAXIBUAAIAAAbIhUAAIAAAZICEAAQAAAHgDAFQgDAGgFADQgGADgHABIgQACgAK3BXIgPgCQgIgCgFgDQgGgDgDgFQgDgFAAgIIAAhlIAEAAQASgBALAIQAFADADAGQADAFAAAGIAABLIBbAAQAAAHgEAGQgDAFgFADQgGADgHABIgQACgAHKBXIAAiBICEAAQAVAAAMAGQALAHAAAKIAAAEQAAAFgDAFQgDAFgGACQgIAEgNACIALADIAKAFQAGADADAFQADAFAAAGIAAATQAAAJgEAHQgDAHgGADQgGAEgIABIgRACgAH1A8IBZAAIAAgZIhZAAgAH1AIIBZAAIAAgXIhZAAgAGIBXIAAg0IhYAAIAAAVQAAAJgDAGQgDAEgGAFQgGADgHACIgQACIgDAAIAAhlQAAgHADgFQADgGAGgDQAFgEAHgCIAQgBICJAAIAACBgAEwAIIBYAAIAAgXIhYAAgACABXIAAhmIhEAAIAAgEQAAgNAIgGQAIgEAPAAICUAAIAAAGQAAAIgEAEQgEAFgGACIgMACIgpAAIAABKQAAAQgGAGQgHAGgSAAgAhhBXIgOgCQgIgCgFgDQgGgEgDgFQgDgFAAgHIAAhKQAAgHADgEQADgGAGgDIANgGQAHgBAIAAIBgAAQARgBALAIQALAHAAANQAAAHgEAEIgIAEQgGAEgHACIgOACIgDAAIAAgXIhZAAIAABLIBZAAIAAgbIAqAAIAAAaQAAAHgEAGQgDAFgFADQgFADgIACIgOACgAklBXIgPgCQgIgCgFgDQgGgEgDgFQgDgFAAgHIAAhKQAAgGADgFQADgGAGgDIANgGQAHgBAHAAIBiAAQASgBALAIQAFADADAGQADAFAAAGIiFAAIAAAXIBUAAIAAAbIhUAAIAAAZICFAAQAAAHgDAFQgDAGgGADQgFADgIABIgPACgAoSgqICJAAQASgBALAIQALAHAAANIAAAXQAAANgOAHQgGADgJADIhWABIABgJIAFgJQADgEAFgDQAFgCAGAAIAuAAIAAgXIhZAAIAABHQAAASgLAIQgGADgHABIgUABgAumBXQgLAAgJgDQgJgDgIgEQgHgEgEgIQgEgGAAgJIAAiJIA6AAIAACugAr+BWIgLgCIgLgEIgLgHIhAg9IAABKIgsAAIAAiAIAJAAIATABIAMAFQAGACAFAFIAuAqIADADIAPANIAAgtQAAgHADgFQADgFAFgDQALgHASABIAEAAIAACAg");
	this.shape.setTransform(98.8,8.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 2
	this.instance = new lib.Символ46();
	this.instance.parent = this;
	this.instance.setTransform(17.2,5.2,1.501,1.798,-90,0,0,99.8,122.8);
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-203.7,-145.2,442.4,300.2);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AOgBVIgPgCQgHgBgGgEQgFgEgEgFQgEgFAAgFICCAAIAAgZIhbAAIgPgBIgMgGQgFgDgDgFQgEgFAAgHIAAgTQAAgIAEgFQADgGAFgEQAGgDAGgBIAQgCIBcAAQATgBAKAHQAGADADAFQADAGAAAHIiBAAIAAAVIBnABQAHACAGADQAFADAEAFQAEAFAAAHIAAAZQAAANgMAHQgLAHgSAAgAnDBVIg9hOIBCAAIAAgVIhWAAIAABEQAAASgLAGQgGAEgHABIgTABIAAh9ICFAAQASAAAKAGQALAIAAANIAAAVQAAANgKAHQgJAHgSAAIAoAzgALeBVIgOgCQgIgCgFgEQgFgEgDgEQgDgFgBgGIAAhJQABgFADgGQADgFAFgDIANgFQAGgCAIAAIBfAAQARAAAKAGQAGAEADAFQACAFAAAHIiAAAIAAAVIBRAAIAAAbIhRAAIAAAZICAAAQAAAGgDAFQgCAFgGADQgGAEgGABIgPACgAIeBVIgPgCQgGgCgGgEQgFgEgDgEQgEgFABgGIAAhJQgBgGAEgFQADgFAFgDIAMgFQAIgCAHAAIBfAAQARAAALAGQALAIAAANQAAAGgFAFIgHADQgHAEgGACIgOABIgFAAIAAgVIhVAAIAABJIBWAAIAAgbIAqAAIAAAaQAAAGgDAFQgDAFgFAEIgNAFIgOACgAEKBVIAAgzIhWAAIAAAUQAAAKgDAEQgCAFgGAFQgGADgIACIgPACIgDAAIAAhiQAAgHADgGQAEgFAEgEQAGgDAHgBIAPgCICFAAIAAB+gAC0AHIBWAAIAAgVIhWAAgABKBVIAAgzIhUAAIAAAzIgqAAIAAhkQgBgGAEgFQADgFAFgDQAFgDAHgCQAHgCAIAAIAEAAIAAAwIBUAAIAAgwIArAAIAAB+gAj7BVQgLgBgIgCQgKgCgGgFQgIgFgDgHQgFgFAAgJIAAhiQAAgHAFgHQADgGAIgFQAGgEAKgDQAIgDAMAAIB9AAQAMAAAJACQAKADAHAFQAPAJAAARQAAAKgGAEIgLAIQgHAFgJACQgKADgKAAIgFAAIAAggIhzAAIAABiIBzAAIAAgjIA4AAIAAAiQAAAIgEAIQgEAGgGAFQgIAEgJADQgJACgLAAgApXBVIgPgCQgHgCgFgEQgFgEgDgEQgEgFABgGIAAhjIAqAAIAAB+gAq8BVIAAgzIhXAAIAAAUQAAAKgCAEQgDAFgGAFQgFADgIACIgPACIgEAAIAAhiQAAgHAEgGQADgFAFgEQAGgDAGgBIAQgCICFAAIAAB+gAsTAHIBXAAIAAgVIhXAAgAwjgwQABgOAFgHQAGgHAHgEQAHgDAKAAICtgBQABAHgDAIQgDAIgGAFQgIADgKADQgKACgRAAIhgAAIAAAfIBFAAIAAAiIhFAAIAAAbQABAMgEAJQgEAIgHAFQgHAEgKABIgaACgAHbBUIgTgCIgLgEIgLgIIg+g6IAABIIgrAAIAAh9IARAAIALACIAMAEQAFADAFAEIAtApIADACIAOAOIAAgtQAAgGADgFQACgFAGgDQALgHARABIAEAAIAAB9g");
	this.shape.setTransform(106,16.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 2
	this.instance = new lib.Символ46();
	this.instance.parent = this;
	this.instance.setTransform(31.1,17.7,1.506,1.805,-90,0,0,100,122.8);
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-190.5,-132.9,444.1,301.3);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 6
	this.instance = new lib.Символ44();
	this.instance.parent = this;
	this.instance.setTransform(-396.6,7,1,1,0,0,0,61.3,8.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:73.8},29,cjs.Ease.get(1)).wait(26).to({x:600.4},30).to({x:590.4},185,cjs.Ease.get(1)).wait(1));

	// Слой 7
	this.instance_1 = new lib.Символ45();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-697.5,32.5,1,1,0,0,0,101.9,8.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:113.9},29,cjs.Ease.get(1)).wait(26).to({x:465.5},30).to({x:458.4},79,cjs.Ease.get(1)).to({x:455.5},106).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ25();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-222,8.6,1,1,0,0,0,106,8.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(85).to({_off:false},0).to({x:106},29,cjs.Ease.get(1)).to({x:105.9},26).to({x:880},30,cjs.Ease.get(-1)).to({x:530},25).to({x:978},30).to({x:-222},1).wait(45));

	// Слой 2
	this.instance_3 = new lib.Символ26();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-324.3,8.5,1,1,0,0,0,98.8,8.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(114).to({_off:false},0).wait(26).to({x:113.5},30,cjs.Ease.get(1)).wait(25).to({x:723.7},30).to({x:-324.3},1).wait(45));

	// Слой 3
	this.instance_4 = new lib.Символ27();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-342.6,29.1,1,1,0,0,0,80.2,9);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(114).to({_off:false},0).to({x:-566.6},26).to({x:95.1},30,cjs.Ease.get(1)).wait(25).to({x:529.4},30).to({x:-342.6},1).wait(45));

	// Слой 4
	this.instance_5 = new lib.Символ28();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-581.7,8.8,1,1,0,0,0,60.6,8.8);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(114).to({_off:false},0).wait(26).to({x:-285.7},30).wait(25).to({x:95.2},30,cjs.Ease.get(1)).wait(25).to({x:809},20).wait(1));

	// Слой 5
	this.instance_6 = new lib.Символ29();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-570.1,29,1,1,0,0,0,72.2,9);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(114).to({_off:false},0).wait(26).to({x:-274.1},30).to({x:-554.1},25).to({x:106.9},30,cjs.Ease.get(1)).wait(25).to({x:644.6},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1005.4,-112.7,705.2,295);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ43();
	this.instance.parent = this;
	this.instance.setTransform(13.8,68.8,0.665,0.665,0,0,0,90.5,27.9);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ43(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.9,33.6,178.2,54.6);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ19();
	this.instance.parent = this;
	this.instance.setTransform(30.5,75,1,1,0,0,0,30.5,75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17,5,58.7,73.2);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ17();
	this.instance.parent = this;
	this.instance.setTransform(67.7,18.2,1,1,0,0,0,67.7,18.2);
	this.instance.shadow = new cjs.Shadow("rgba(0,204,255,1)",0,0,12);
	this.instance.filters = [new cjs.BlurFilter(12, 12, 1)];
	this.instance.cache(-2,-2,139,40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19,-19,177,78);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.parent = this;
	this.instance.setTransform(67.4,19.7,1,1,0,0,0,67.4,19.7);
	this.instance.shadow = new cjs.Shadow("rgba(0,204,255,1)",0,0,12);
	this.instance.filters = [new cjs.BlurFilter(12, 12, 1)];
	this.instance.cache(-2,-2,139,43);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19,-19,176,81);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.parent = this;
	this.instance.setTransform(90.5,72.4,1,1,0,0,0,90.5,72.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.16,scaleY:1.16,x:100.7,y:75.9},9,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:90.5,y:72.4},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.1,14.5,178.1,109.1);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(136.7,36.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,273.5,72.2);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ11();
	this.instance.parent = this;
	this.instance.setTransform(136.7,36.1,1,1,0,0,0,136.7,36.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.11,scaleY:1.11,y:36.2},9).to({scaleX:1,scaleY:1,y:36.1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,273.5,72.2);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.parent = this;
	this.instance.setTransform(70.9,86.4,1,1,0,0,0,90.5,72.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.5,28.5,178.1,109.1);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ21();
	this.instance.parent = this;
	this.instance.setTransform(118.9,102.4,1,1,0,0,0,19.2,59.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(22.7,76.2,178.2,54.5);


(lib.Символ7 = function(mode,startPosition,loop) {
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

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.parent = this;
	this.instance.setTransform(95.9,95.9,1,1,0,0,0,95.9,95.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:219.4,alpha:0},14,cjs.Ease.get(-1)).to({y:95.9,alpha:1},15,cjs.Ease.get(1)).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(116.1,203.3,1,1,0,0,0,90.5,72.4);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:90.8,scaleX:0.91,scaleY:0.91,rotation:15,x:120.4,y:105.8,alpha:1},14,cjs.Ease.get(-1)).to({regX:90.5,scaleX:1,scaleY:1,rotation:0,x:116.1,y:203.3,alpha:0},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(11.1,76.2,189.8,192.3);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.parent = this;
	this.instance.setTransform(140.9,52.9,1.169,1.169,0,0,0,136.7,36.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.9,10.7,319.7,84.4);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ21();
	this.instance.parent = this;
	this.instance.setTransform(19.2,59.8,1,1,0,0,0,19.2,59.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.9,33.7,178.2,54.5);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AJ1CjIgLgCIgJgDIgHgGQgDgFAAgEIBfAAIAAgSIhCAAIgLgBQgFgBgEgDIgGgGQgDgDAAgGIAAgPQAAgGADgEQACgEAEgDQAEgCAFgBIALgCIBEAAQAOAAAIAFQAEACACAEQACAEAAAFIhfAAIAAARIBBAAIALABIAKAEQAEACACADQADAEAAAFIAAASQAAALgIAFQgIAFgOAAgACSCjQgIAAgHgCIgNgFQgFgDgEgGQgDgEAAgHIB/AAIAAgXIhZAAQgIAAgGgCQgHgBgFgEQgGgDgDgFQgDgFAAgGIAAgVQAAgIADgFQADgGAGgDQAFgEAHgBQAGgCAIAAIBbAAQASAAALAGQALAGAAAPIh+AAIAAAXIBkABQAIABAFADQAGADADAFQAEAFAAAGIAAAZQAAAHgDAFQgDAFgFADQgLAHgTAAgAn3CjQgHAAgHgCQgHgCgFgDQgGgDgEgGQgDgEAAgHIB/AAIAAgXIhZAAQgIAAgGgCQgHgBgGgEQgFgDgDgFQgDgFAAgGIAAgVQAAgIADgFQADgGAFgDQAGgEAHgBQAGgCAIAAIBbAAQASAAALAGQALAGAAAPIh+AAIAAAXIBkABQAIABAFADQAGADADAFQAEAFAAAGIAAAZQAAAHgDAFQgDAFgFADQgMAHgRAAgAHFCiIgKgBIgJgEIgHgGQgBgEAAgFIAAhKIAeAAIAABegAGDCiIgKgBIgHgCIgFgDIgsglIAAAZQAAAFgCAEIgGAFIgKADIgLABIgCAAIAAheIAfAAIAAAqIAogqIAkAAIgrAsIA5AygAheCiQgHAAgHgCQgHgCgFgDQgFgDgDgFQgDgFAAgGIAAhJQAAgGADgFQADgFAFgDQAFgEAHgBQAHgCAHAAIBcAAQAHAAAHACQAHABAFAEQALAGAAANIAABKQAAAHgDAEQgDAFgGADIgLAFQgHABgHAAgAhZCIIBUAAIAAhIIhUAAgAkVCiQgHAAgHgCQgGgCgFgDQgFgDgEgFQgCgFAAgGIAAhJQAAgGACgFQAEgEAFgDQAFgEAGgCQAHgCAIAAIBcAAQASAAAKAGQAKAHAAAOIh+AAIAABIIBVAAIAAgXIgeAAQgPAAgLgHQgLgGgBgJIAAgEIBtAAIAAAxQAAAHgDAEQgDAGgFADQgFADgHACQgHABgIAAgAqwCiQgHAAgHgCQgGgCgGgDQgFgDgDgFQgDgFAAgGIAAhJQAAgGADgFQADgEAFgDQAFgEAHgCQAHgCAIAAIBcAAQAJAAAGACQAIABAFAEQALAHAAANQAAAGgFAEIgIAGQgFADgHACQgGACgIAAIgDAAIAAgXIhVAAIAABIIBVAAIAAgZIApAAIAAAZQAAAGgDAFQgDAGgFADQgFADgHACQgHABgIAAgAI0CgIgIgDIgHgFIgugrIAAA1IggAAIAAheIAVACIAIADQAEACAEADIAhAgIACABIAKAKIAAgiQAAgFADgDQACgEAEgCQAHgFANAAIADAAIAABegAlmCbIAAgmIAeAAIAAAmgAlmBjIAAgmIAeAAIAAAmgAlbgcIhAhRIBFAAIAAgZIhZAAIAABKQAAAJgDAGQgDAHgGADQgGAEgHABIgUABIAAiFICKAAQATAAALAHQALAIAAANIAAAZQAAANgKAHQgKAIgSAAIAqA1gAGjgdIAAg9IgoAtIgogtIAAA9IghAAIAAhjIANAAIAIABIAJADQAFACAEAEIAiAkIAigkQADgEAFgCIAJgDIAJgBIANAAIAABjgAC6gdIgMgBIgJgEQgEgDgCgEQgDgDAAgFIAAg7QAAgEADgEQACgEAEgDQAEgDAFgBIAMgBIBKAAQANAAAJAFQAIAFAAAKIAAA7QAAAGgDADQgCAEgEACQgEADgFABIgMABgAC+gxIBDAAIAAg7IhDAAgAAHgdIAAhjIBnAAQAOAAAIAFQAJAGAAAJIAAA6QAAAGgDAEQgCAEgEACIgKAEIgMABgAApgxIBDAAIAAg7IhDAAgAixgdIAAgnIhDAAIAAAQQAAAHgCAEQgDAEgEADQgEACgGACIgMABIgCAAIAAhNQAAgGACgEQACgEAFgDQAEgDAFgBIAMgBIBoAAIAABjgAj0hZIBDAAIAAgTIhDAAgAgUgdIgIgCIgJgDIgIgGIgxguIAAA5IghAAIAAhjIANAAIAIABIAJAEQAFABADAEIAkAiIACABIALAKIAAgjQAAgGACgDQACgEAFgDQAIgEAOAAIACAAIAABjg");
	this.shape.setTransform(72.6,16.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 3
	this.instance = new lib.Символ22();
	this.instance.parent = this;
	this.instance.setTransform(13.7,7.6,1,1,0,0,0,134.1,91);
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ32();
	this.instance_1.parent = this;
	this.instance_1.setTransform(9.2,28.5,1,1,0,0,0,164.8,111.9);
	this.instance_1.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-155.6,-83.4,329.8,223.7);


(lib.Символ3 = function(mode,startPosition,loop) {
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

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.parent = this;
	this.instance.setTransform(68.3,56.1,1,1,0,0,0,68.3,56.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:173.8,alpha:0},14,cjs.Ease.get(-1)).to({y:56.1,alpha:1},15,cjs.Ease.get(1)).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(42.2,209.5,1,1,10.7,0,0,155.1,41);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:0,x:42.1,y:47,alpha:1},14,cjs.Ease.get(-1)).to({y:209.5,alpha:0},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-138.9,33.7,329.8,256.1);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.item_16();
	this.instance.parent = this;
	this.instance.setTransform(66.9,66.5,1,1,-18);

	this.instance_1 = new lib.item_09();
	this.instance_1.parent = this;

	this.instance_2 = new lib.Символ16();
	this.instance_2.parent = this;
	this.instance_2.setTransform(122.9,113.3,1,1,-0.5,0,0,67.8,18.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,221,155.5);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.item_16();
	this.instance.parent = this;
	this.instance.setTransform(35,51);

	this.instance_1 = new lib.item_14();
	this.instance_1.parent = this;

	this.instance_2 = new lib.Символ14();
	this.instance_2.parent = this;
	this.instance_2.setTransform(98,115.6,1,1,0,0,0,67.4,19.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,268,158.9);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(11));

	// Слой 1
	this.instance = new lib.Символ34();
	this.instance.parent = this;
	this.instance.setTransform(22.9,28.7,1,1,0,0,0,22.9,28.7);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},4).to({scaleX:1.17,scaleY:1.17,x:26.9,y:23.8},5).to({scaleX:1,scaleY:1,x:22.9,y:28.7},5).to({scaleX:1.17,scaleY:1.17,x:26.9,y:23.8},5).to({scaleX:1,scaleY:1,x:22.9,y:28.7},10).to({alpha:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,46,57.3);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(1));

	// Слой 1
	this.instance = new lib.Символ18();
	this.instance.parent = this;
	this.instance.setTransform(19.7,-21.5,0.816,0.816,0,0,0,30.6,75);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:30.4,scaleX:0.95,scaleY:0.95,x:26.1,y:-21.9},4).to({regX:30.6,scaleX:0.82,scaleY:0.82,x:19.7,y:-21.5},5).to({regX:30.4,scaleX:0.95,scaleY:0.95,x:26.1,y:-21.9},5).to({regX:30.6,scaleX:0.82,scaleY:0.82,x:19.7,y:-21.5},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.1,-78.6,47.9,59.7);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ40();
	this.instance.parent = this;
	this.instance.setTransform(110.5,71,1,1,0,0,0,110.5,71);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,221,155.5);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ38();
	this.instance.parent = this;
	this.instance.setTransform(134,78.4,1,1,0,0,0,134,78.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,268,158.9);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(10).call(this.frame_19).wait(1));

	// Слой 1
	this.instance = new lib.Символ20();
	this.instance.parent = this;
	this.instance.setTransform(24.9,88.4,1,1,0,0,0,24.9,61.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},9).to({alpha:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.1,-51.3,47.9,59.7);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ39();
	this.instance.parent = this;
	this.instance.setTransform(134,78.4,1,1,0,0,0,134,78.4);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,268,158.9);


// stage content:
(lib.gamerall300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		stage.canvas.style.cursor = "none";
		this.kursor.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
			this.kursor.x = stage.mouseX;
			this.kursor.y = stage.mouseY;
		}
		
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		
		 this.cursor = "none";
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		
		
		stage.canvas.addEventListener("mouseover", fl_Clickover.bind(this));
		
		function fl_Clickover()
		{
		    this.hand.gotoAndPlay(1);
		    this.kursor.gotoAndPlay(1);
		   
		}
		
		stage.canvas.addEventListener("mouseout", fl_Clickout.bind(this));
		
		function fl_Clickout()
		{
		    this.hand.gotoAndPlay(20);
			this.kursor.gotoAndPlay(30);
		    
		}
		
		this.vip.addEventListener("mouseover", fl_Clickover1.bind(this));
		
		function fl_Clickover1()
		{
			this.vopros1.gotoAndPlay(2);
		   
		   
		}
		
		this.vip.addEventListener("mouseout", fl_Clickout1.bind(this));
		
		function fl_Clickout1()
		{
		    this.vopros1.gotoAndPlay(16);
		    
		    
		}
		
		this.blood.addEventListener("mouseover", fl_Clickover2.bind(this));
		
		function fl_Clickover2()
		{
			this.vopros2.gotoAndPlay(2);
		   
		   
		}
		
		this.blood.addEventListener("mouseout", fl_Clickout2.bind(this));
		
		function fl_Clickout2()
		{
		    this.vopros2.gotoAndPlay(16);
		    
		    
		}
		
		var _this = this;
		
		setTimeout(function () {
		 _this.gotoAndStop(1);
		
		}, 25000);
		 
		 this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// hand
	this.hand = new lib.Символ23();
	this.hand.parent = this;
	this.hand.setTransform(190.8,275.3,1,1,0,0,0,10.1,65.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.Pointing, null, new cjs.Matrix2D(0.319,0,0,0.319,-23.9,-29.8)).s().p("AjuEqIAApTIHdAAIAAJTg");
	this.shape.setTransform(185.4,187.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hand}]}).to({state:[{t:this.shape}]},1).wait(1));

	// kursor
	this.kursor = new lib.Символ36();
	this.kursor.parent = this;
	this.kursor.setTransform(267.9,189.7,1,1,0,0,0,22.9,28.7);

	this.kursor_1 = new lib.Символ51();
	this.kursor_1.parent = this;
	this.kursor_1.setTransform(403.9,189.7,1,1,0,0,0,22.9,28.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.kursor}]}).to({state:[{t:this.kursor_1}]},1).wait(1));

	// logo
	this.logo = new lib.Символ30();
	this.logo.parent = this;
	this.logo.setTransform(151.8,27,0.583,0.583,0,0,0,112.5,47.5);

	this.instance = new lib.Символ31();
	this.instance.parent = this;
	this.instance.setTransform(538.4,85.4,0.583,0.583,23,0,0,95.5,52.3);

	this.instance_1 = new lib.Анимация5("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(151.4,28.9,0.583,0.583,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo}]}).to({state:[{t:this.instance_1},{t:this.instance}]},1).wait(1));

	// vip case
	this.vip = new lib.Символ2();
	this.vip.parent = this;
	this.vip.setTransform(-115.7,466.5,0.728,0.728,0,0,0,134.4,71.3);

	this.instance_2 = new lib.Символ39();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-116,471.7,0.728,0.728,0,0,0,133.9,78.4);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.vip}]}).to({state:[{t:this.instance_2}]},1).wait(1));

	// ?
	this.vopros1 = new lib.Символ3();
	this.vopros1.parent = this;
	this.vopros1.setTransform(-104.6,391.4,0.523,0.523,0,0,0,68.5,56.2);

	this.instance_3 = new lib.Символ5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-104.7,391.4,0.523,0.523,0,0,0,68.2,56.1);

	this.instance_4 = new lib.Символ6();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-118.3,471.6,0.523,0.523,10.7,0,0,155.1,41.1);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.vopros1}]}).to({state:[{t:this.instance_4},{t:this.instance_3}]},1).wait(1));

	// kraska
	this.instance_5 = new lib.slide();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-10.3,431.8,0.6,0.6,0,16.2,-163.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(img.slide, null, new cjs.Matrix2D(-0.576,-0.167,-0.167,0.576,162.2,-21)).s().p("A5UDSIFszmMAs9ANDIlsTmg");
	this.shape_1.setTransform(-172.5,452.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	// blood case
	this.blood = new lib.Символ1();
	this.blood.parent = this;
	this.blood.setTransform(153.8,189.7,0.754,0.754,0,0,0,110.9,71.3);

	this.instance_6 = new lib.Символ40();
	this.instance_6.parent = this;
	this.instance_6.setTransform(153.5,189.4,0.754,0.754,0,0,0,110.5,71);
	new cjs.ButtonHelper(this.instance_6, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.blood}]}).to({state:[{t:this.instance_6}]},1).wait(1));

	// ?
	this.vopros2 = new lib.Символ7();
	this.vopros2.parent = this;
	this.vopros2.setTransform(140.1,106.8,0.646,0.646,0,0,0,96.2,95.9);

	this.instance_7 = new lib.Символ21();
	this.instance_7.parent = this;
	this.instance_7.setTransform(154.7,111,0.646,0.646,0,0,0,19.2,59.8);

	this.instance_8 = new lib.Символ12();
	this.instance_8.parent = this;
	this.instance_8.setTransform(140.3,185.2,0.646,0.646,0,0,0,90.6,72.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.vopros2}]}).to({state:[{t:this.instance_8},{t:this.instance_7}]},1).wait(1));

	// Слой 1
	this.instance_9 = new lib.Символ4();
	this.instance_9.parent = this;
	this.instance_9.setTransform(151.6,72,1,1,0,0,0,72.6,16.3);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({_off:false},0).wait(1));

	// text
	this.text = new lib.Символ24();
	this.text.parent = this;
	this.text.setTransform(149.1,64.5,0.758,0.758,0,0,0,106,8.7);

	this.timeline.addTween(cjs.Tween.get(this.text).to({_off:true},1).wait(1));

	// text2
	this.instance_10 = new lib.Символ33();
	this.instance_10.parent = this;
	this.instance_10.setTransform(175.6,241.8,0.693,0.693,0,0,0,167.3,6.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC00").s().p("AAhApIAAgxIghAjIgggjIAAAxIgbAAIAAhRIAFAAIAFAAIAIABIAHADQAEABADAEIAbAeIAcgeQADgEADgBIAIgDIAIgBIAGAAIAEAAIAABRg");
	this.shape_2.setTransform(288.5,241.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC00").s().p("AgdApIgKgBIgIgDIgFgGQgCgDAAgEIAAgvQAAgEACgDQACgDADgCQADgDAFgBQAEgBAGAAIA7AAQAGAAAEABIAIADQAHAFAAAIIAAAvQAAAFgCADQgBADgEACIgIADIgKABgAgbAYIA3AAIAAgvIg3AAg");
	this.shape_3.setTransform(275.8,241.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC00").s().p("AgeApIgJgBIgIgDIgGgGQgCgDAAgEIAAgvQAAgEACgDIAGgFIAIgEQAFgBAEAAIA8AAQAGAAAFABIAIADQAGAFABAIQAAAFgDADIgFADQgEADgEABQgFABgFAAIgCAAIAAgQIg3AAIAAAvIA3AAIAAgRIAbAAIAAARQAAAEgCADQgBAEgEACQgEACgEABIgKABg");
	this.shape_4.setTransform(263.7,241.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCC00").s().p("AgJANIAAgZIATAAIAAAZg");
	this.shape_5.setTransform(256,244.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFCC00").s().p("AgQApIgKgBQgEgBgEgCQgEgCgCgDQgCgEAAgEIAAhAIADAAQAMAAAGAEQAHAFAAAIIAAAvIA5AAQgBAFgDADQgCADgDACIgHADIgKABg");
	this.shape_6.setTransform(249.7,241.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFCC00").s().p("AgQApIgKgBQgEgBgEgCQgEgCgCgDQgCgEABgEIAAhAIACAAQAMAAAGAEQAHAFAAAIIAAAvIA5AAQgBAFgDADQgCADgDACIgHADIgKABg");
	this.shape_7.setTransform(240.1,241.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFCC00").s().p("AAcApIAAggIg3AAIAAAMQAAAHgCADQgCADgDADIgIADIgLABIgCAAIAAg/QABgFACgDQACgDADgDIAIgDQAFgBAEAAIBWAAIAABRgAgbgHIA3AAIAAgQIg3AAg");
	this.shape_8.setTransform(229.2,241.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFCC00").s().p("AAXApIgmgwIApAAIAAgQIg2AAIAAAsQAAAGgCAEQgCAEgDACQgEADgEAAIgKABIgDAAIAAhRIBVAAQALAAAHAEQAHAFAAAIIAAAQQAAAHgGAEQgHAEgLABIAbAgg");
	this.shape_9.setTransform(216.9,241.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFCC00").s().p("AgdApIgKgBIgIgDIgFgGQgCgDAAgEIAAgvQAAgEACgDIAFgFIAIgEQAFgBAFAAIA7AAQAMAAAHAEQADADACADQABADAAAEIhSAAIAAAQIA0AAIAAAQIg0AAIAAAPIBSAAQAAAFgBADQgCADgEACIgIADIgKABg");
	this.shape_10.setTransform(204.6,241.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFCC00").s().p("AAhApIAAgxIghAjIgggjIAAAxIgcAAIAAhRIAGAAIAGAAIAGABIAIADQAEABADAEIAbAeIAcgeQADgEADgBIAIgDIAIgBIAFAAIAFAAIAABRg");
	this.shape_11.setTransform(191.9,241.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFCC00").s().p("AAbApIAAggIg2AAIAAAMQAAAHgBADQgDADgEADIgIADIgKABIgBAAIAAg/QAAgFABgDQACgDAEgDIAIgDQAEgBAGAAIBUAAIAABRgAgbgHIA2AAIAAgQIg2AAg");
	this.shape_12.setTransform(179.2,241.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFCC00").s().p("AgdApIgKgBIgIgDIgFgGQgCgDAAgEIAAgvQAAgEACgDIAFgFIAIgEQAFgBAFAAIA7AAQAMAAAHAEQAGAEAAAJIhSAAIAAAvIA3AAIAAgPIgUAAQgIAAgHgFQgIgEAAgEIAAgDIBGAAIAAAfQAAAEgCAEQgBADgEACQgDACgFABIgKABg");
	this.shape_13.setTransform(167,241.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10}]}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},1).wait(1));

	// kraska
	this.instance_11 = new lib.slide();
	this.instance_11.parent = this;
	this.instance_11.setTransform(19.3,136.1,0.664,0.664,-8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.bf(img.slide, null, new cjs.Matrix2D(0.657,-0.092,0.092,0.657,-174.3,-48.7)).s().p("A7OnmMAzVgHLIDIWXMgzVAHLg");
	this.shape_14.setTransform(193.6,184.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11}]}).to({state:[{t:this.shape_14}]},1).wait(1));

	// fon
	this.instance_12 = new lib.Символ41();
	this.instance_12.parent = this;
	this.instance_12.setTransform(151.7,72.5,0.854,0.854,0,0,0,190.5,338.6);

	this.instance_13 = new lib.Символ42();
	this.instance_13.parent = this;
	this.instance_13.setTransform(1.7,235.8,0.322,0.322,-0.2,0,0,0.4,34.9);
	this.instance_13.alpha = 0.699;
	this.instance_13.compositeOperation = "lighter";

	this.instance_14 = new lib.Символ47();
	this.instance_14.parent = this;
	this.instance_14.setTransform(150.6,75.4,0.854,0.741,0,0,0,188.3,388.8);
	this.instance_14.alpha = 0.09;
	this.instance_14.compositeOperation = "lighter";

	this.instance_15 = new lib.fon();
	this.instance_15.parent = this;
	this.instance_15.setTransform(-3.3,350.4,0.854,0.854,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12}]}).to({state:[{t:this.instance_15},{t:this.instance_14},{t:this.instance_13}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-543.7,-73.4,1061.7,755.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;