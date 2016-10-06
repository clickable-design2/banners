(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 600,
	height: 200,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/arm.png", id:"arm"},
		{src:"images/back.jpg", id:"back"},
		{src:"images/body.png", id:"body"},
		{src:"images/head.png", id:"head"},
		{src:"images/keys.png", id:"keys"},
		{src:"images/money11.png", id:"money11"},
		{src:"images/nap.png", id:"nap"},
		{src:"images/strela.png", id:"strela"},
		{src:"images/tors.png", id:"tors"},
		{src:"images/vulk.png", id:"vulk"}
	]
};



// symbols:



(lib.arm = function() {
	this.initialize(img.arm);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,139);


(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,676,420);


(lib.body = function() {
	this.initialize(img.body);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,188,555);


(lib.head = function() {
	this.initialize(img.head);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,73,72);


(lib.keys = function() {
	this.initialize(img.keys);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,108,95);


(lib.money11 = function() {
	this.initialize(img.money11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,329,266);


(lib.nap = function() {
	this.initialize(img.nap);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,75,102);


(lib.strela = function() {
	this.initialize(img.strela);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,125,62);


(lib.tors = function() {
	this.initialize(img.tors);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,108);


(lib.vulk = function() {
	this.initialize(img.vulk);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,136);


(lib.Символ20 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.749)").s().p("EAnQAEUQgcgrAAgRIk1gDQi2gdhkgUQiugijZhIQg6gTgygoQgygygYgVQgOgMg0gDQiMgGi0gMQgwgDgSgYQgQgXglAAQhBAohQAoQihBOhZAAQg6AAgVgTQgOgagPgKQgzBDgqAgQhOA7hrAHImiAAQiiAChqgjQhBgVhZg6Qhag4g+gVQhrgkihAAQgrAAgcAKQgLAFgcATQgzAhhlAAQhDAAhigWQhigXgIAAQg/AAgXAVQgNANgXAiQhHBBlWAAQg2AAgVgQQgVgQgIAAQgiAAgZAZQgOAPgXApQgWAogQAQQgaAZgjAAQgvAAgVglQgNgWAAgUQAAgXAVgwQAYg2AmgwQBqiICSAAQA2AAAUAoQAMAUAAAXIA0ACIA8ADICCgDQAMgGAYgXQAegcASgOQBJg2BkAAQBmAAA0ANQAhAJAmAXIBdAAQBSg5ArgFQAfgDBjAIQB/AAAigOIAPgJQAIgFAOAAQAoAABVBCQAqAhAoAkQANAHAkAcQAbAUAkANQAgAKAjAAQAVAAApgDQBSgDBSApIGJAAQAiAJAjgbQAUgPAqgyQAqgzAbgUQAqgiAuAAQA1AAAoAlQAUASANASQAjAABdg1QBIgpBAguQAngdAggBQAXgBA3ARQCpAzDMAFQCkAcB/BOQBHAsBvBTQDaAXBSAPQA1AKB5AeIF4ACQA5ATBIC4QAAAVgQAYQgXAggoAAQgvAAgkg5g");
	this.shape.setTransform(267.5,33.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,535,66.8);


(lib.Символ18 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(252,248,0,0)","#FFFF99","rgba(250,244,0,0.031)"],[0,0.49,0.945],-49.7,0,49.8,0).s().p("AnwM1IAA5pIPhAAIAAZpg");
	this.shape.setTransform(49.8,82.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,99.5,164.3);


(lib.Символ15 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.vulk();
	this.instance.setTransform(1.2,-156.9,4.351,4.351);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1.2,-156.9,870.2,591.7);


(lib.Символ10 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.nap();
	this.instance.setTransform(106,0,1.093,1);

	this.instance_1 = new lib.nap();
	this.instance_1.setTransform(51,0);

	this.instance_2 = new lib.nap();

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,188,102);


(lib.Символ8 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.tors();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,100,108);


(lib.Символ6 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.strela();
	this.instance.setTransform(30,0,0.484,0.484,90);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,30,60.5);


(lib.Символ3 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.head();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,73,72);


(lib.Символ1 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#CFCFCF"],[0,1],-12.3,0,12.3,0).s().p("AhWBWQgkgkAAgyQAAgxAkglQAkgkAyAAQAyAAAkAkQAlAlAAAxQAAAyglAkQgkAlgyAAQgyAAgkglg");
	this.shape.setTransform(12.3,12.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,24.7,24.7);


(lib.Symbol23 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiPJfQldgXkEiSQk5ixgBj9QAAj8E4i2QE4i2G6gDQG4gDE5CxQE5CxABD9QABD8k4C2QkECWlbAcQhIAGhMAAIgXABQg+AAg7gFg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-106.7,-61.2,213.5,122.4);


(lib.Symbol22 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgZFKQgWh0gViBQgmjoAAhlQAAgqAegXQAWgQAdAAQAvAAAxA8QA2BCgcA7QggBHgfA5QgfBAgHBnIgOCzg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.7,-33,21.5,66.1);


(lib.Symbol10 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.arm();
	this.instance.setTransform(-31.7,-69.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-31.7,-69.5,64,139);


(lib.Symbol4 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.nap();
	this.instance.setTransform(-20.5,-27.8,0.547,0.547);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20.5,-27.8,41,55.8);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ18();
	this.instance.setTransform(77.9,94.9,1,1,23,0,0,49.7,82);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:371.4},39).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,155.7,190.1);


(lib.Символ17 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.setTransform(168.1,29.1,0.353,0.231,0,-28.2,0,432.2,142.7);
	this.instance.filters = [new cjs.ColorFilter(0.25, 0.25, 0.25, 1, 0, 0, 0, 0)];
	this.instance.cache(-1,-159,874,596);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16.7,-32,371.7,120.7);


(lib.Символ11 = function() {
	this.initialize();

	// Слой 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("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");
	mask.setTransform(80.4,30.4);

	// Слой 2
	this.instance = new lib.Символ10();
	this.instance.setTransform(78.5,23,1,1,0,0,0,94,51);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(4.1,4.3,152.6,52.2);


(lib.Символ9 = function() {
	this.initialize();

	// Слой 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AqNCwQgHgEgFgGQgSgKAAgEQAAgGAGgKIgGjNQgHgJAAgGQABgIAGgEQAGgEAMAAQALAAAHACIAKACIAPgFQAOgFASAAQAVAAAMAGQANAGAFAMQADAKAAAKQAAAngrAhIARgCQAbAAADAnQAAAQgJAVQgLAUgVAZQgqAygXACQgJgBgGgEgAplAwQgLAHgMAMIADA+QALgIAVgTQAVgUAEgZQAAgPgQAAQgLAAgKAGgAprg9QgJADgNAIIAEBHQA3gvAAgXQAAgPgSAAQgKAAgJADgAndCwIgPgJIgLgKQgEgFAAgDIACgIIAEgJIgIjEIgFgPIgBgFQAAgHAFgDQAHgEAKAAIANACIANAEQAFADAEAEQADAEAAAFQAAAIgDAFIgIAJIADBAIAYgIIAXgCQAZAAAPAKQAIAGADAKQAFAJAAAOQAAAMgFAMQgEAMgHAMQgGALgJALIgSAUIgkAdQgDAHgFADQgFACgFAAQgGAAgIgEgAm/AqQgJAEgHAGIAEBCIANgIQAJgHAJgJQAIgJAHgKQAFgKABgIQgBgLgEgEQgDgFgLAAQgLAAgKAFgAIDCsQgKgGAAgGQAAgGAGgKIgDjUQgGgKAAgFQAAgJAHgEQAGgEAMAAQAOAAALAIQALAHAAAIQAAAEgJAQIAECKQAmhZAkhHIgCgHQAAgQAYAAQANAAAMAGQAMAHAAAJQgBAEgHAQIAADGQAFALAAAJQAAALgUAAQgMAAgNgGQgNgGAAgGQAAgGAGgKIAAiHQgYA8gyBkIgEAIQgEAHgLADIgGABQgLAAgLgHgAkGCsQgLgGAAgGQAAgGAGgKIgDjUQgGgKAAgFQAAgJAHgEQAFgEANAAQAOAAAMAIQAKAHAAAIQAAAEgJAQIADCKQAnhZAkhHIgCgHQAAgQAXAAQAOAAAMAGQALAHAAAJQABAEgJAQIAADGQAGALAAAJQAAALgUAAQgMAAgNgGQgNgGAAgGQAAgGAGgKIAAiHQgXA8gzBkIgEAIQgEAHgLADIgGABQgLAAgKgHgAEnCsQgMgEgLgKQgKgJABgGQADgGAJgIQARg+AOgsQAVg8APgoQgCgNACgEQAEgIALAAIAPABQAMAAALAEQALAEABAFQABAEgEASQALAzAVBJQAQgJAJACQALACAGAKQAHAKAAAKQAAARgXAAIgOAAIAMAmQALAMAAAIQAAAJgQAEQgIACgIAAQgTAAgCgHQgEgQAAgDIgNgrIhLAMIgJAfQADAMgDAIQgCAHgJAAQgEAAgHgCgAFUBIIAxgJIgVhNgAg6CnQgNgHAAgFQAAgGAGgKIAAjHQgGgKAAgGQAAgIAGgEQAGgEAMAAQAJAAAHADIBLgKQAMgIAFAAQAIAAAIANQAGALABALQAAAJgFAFQgFAGgFAAQgHABgOgGIhDAJIAAC+QAGALAAAIQAAAGgFADQgFADgKAAQgMAAgNgGgABwClQgNgHAAgFQAAgGAGgKIAAjOQgGgJAAgGQAAgIAGgEQAGgEANAAQAMAAALAGQAggOASAAQAPAAAKAGIATATQAFAIAAALQAAAfgeA2QggA8gXAAQgDAAgHgIIAABDQAGALAAAIQAAAGgFADQgFADgKAAQgMAAgNgGgACXgrIAABLQAEAAAHgJIARgYQALgSAFgOQAFgOAAgKQAAgMgKAAQgNAAgaAagAlSClQgNgHABgFQgBgGAHgKIgGjOQgFgJAAgGQAAgIAGgEQAGgEAMAAQAPAAALAHQAKAHAAAIQAAAEgIAQIAFDGQAGALgBAIQAAAGgEADQgGADgJAAQgNAAgNgGgAIhiOIgCgMQAAgKAGgEQAFgFAMAAQAIAAAFADQAEACACAEQAAAHgDAGQADAKAQABQAHAAAFgFQAFgFAEgKQgDgKADgEQAEgFAMgBQAIABAHAEQAIAFgBAJQgBAFgFADQgLAmgsACQgtAAgJgdg");
	mask.setTransform(81.5,14);

	// Слой 3
	this.instance = new lib.Символ19();
	this.instance.setTransform(-60.9,10.2,1,1,0,0,0,77.9,95);

	this.instance.mask = mask;

	// Слой 2
	this.instance_1 = new lib.Символ10();
	this.instance_1.setTransform(78.5,29,1,1,0,0,0,94,51);

	this.instance_1.mask = mask;

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(12.4,-4.1,138.2,36.3);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.setTransform(50,54,1,1,0,0,0,50,54);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.03,scaleY:1.01,y:54.5},14).to({scaleX:1,scaleY:1,y:54},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,108);


(lib.Символ4 = function() {
	this.initialize();

	// Слой 4
	this.instance = new lib.Символ17();
	this.instance.setTransform(331.6,305.1,1,1,0,0,0,168,29.1);
	this.instance.alpha = 0.359;

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg4OAhWMAAAhCrMBwdAAAMAAABCrgEgsWAXMMBUpAAAIu2sVMg35AAAg");
	mask.setTransform(345,195.3);

	// Слой 3
	this.instance_1 = new lib.money11();
	this.instance_1.setTransform(104.2,234.9,0.293,0.293,-8.3);

	this.instance_2 = new lib.money11();
	this.instance_2.setTransform(173.1,223.9,0.293,0.293,-8.3);

	this.instance_3 = new lib.money11();
	this.instance_3.setTransform(251.7,204.8,0.293,0.293,15.9);

	this.instance_4 = new lib.money11();
	this.instance_4.setTransform(389.6,233.8,0.293,0.293,84.1);

	this.instance_5 = new lib.money11();
	this.instance_5.setTransform(344.5,281.6,0.293,0.293,-52.7);

	this.instance_6 = new lib.money11();
	this.instance_6.setTransform(552.3,277.5,0.293,0.293,-31.2);

	this.instance_7 = new lib.money11();
	this.instance_7.setTransform(458.5,290.6,0.293,0.293,-52.7);

	this.instance_8 = new lib.money11();
	this.instance_8.setTransform(493.6,284.4,0.293,0.293,-29.2);

	this.instance_9 = new lib.money11();
	this.instance_9.setTransform(570.8,276,0.293,0.293);

	this.instance_10 = new lib.money11();
	this.instance_10.setTransform(426.8,213,0.293,0.293);

	this.instance_1.mask = this.instance_2.mask = this.instance_3.mask = this.instance_4.mask = this.instance_5.mask = this.instance_6.mask = this.instance_7.mask = this.instance_8.mask = this.instance_9.mask = this.instance_10.mask = mask;

	// Слой 5
	this.instance_11 = new lib.Символ20();
	this.instance_11.setTransform(392,242,1,1,0,0,0,267.5,33.4);
	this.instance_11.alpha = 0.602;
	this.instance_11.filters = [new cjs.BlurFilter(13, 13, 1)];
	this.instance_11.cache(-2,-2,539,71);

	// Слой 1
	this.instance_12 = new lib.back();
	this.instance_12.setTransform(1,0,0.966,0.928);

	this.addChild(this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1,0,674.2,389.6);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.setTransform(36.5,36.1,1,1,0,0,0,36.5,36.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:36,y:36},0).wait(1).to({rotation:0.1,y:36.1},0).wait(1).to({rotation:0.3,x:36.6,y:36.2},0).wait(1).to({rotation:0.5,y:36.4},0).wait(1).to({rotation:0.9,x:36.7,y:36.6},0).wait(1).to({rotation:1.2,x:36.8,y:36.9},0).wait(1).to({rotation:1.7,y:37.2},0).wait(1).to({rotation:2.2,x:36.9,y:37.5},0).wait(1).to({regY:36.1,rotation:2.8,x:37,y:38},0).wait(1).to({regY:36,rotation:3.4,x:37.2,y:38.3},0).wait(1).to({rotation:3.9,y:38.7},0).wait(1).to({rotation:4.4,x:37.3,y:39},0).wait(1).to({rotation:4.8,y:39.2},0).wait(1).to({rotation:5.2,x:37.4,y:39.5},0).wait(1).to({rotation:5.5,x:37.5,y:39.7},0).wait(1).to({rotation:5.7,y:39.8},0).wait(1).to({rotation:5.9,y:39.9},0).wait(1).to({rotation:6,y:40},0).wait(1).to({regY:36.1,x:37.6,y:40.1},0).wait(1).to({regY:36,x:37.5,y:40},0).wait(1).to({rotation:5.9,y:39.9},0).wait(1).to({rotation:5.7,y:39.8},0).wait(1).to({rotation:5.5,y:39.7},0).wait(1).to({rotation:5.2,x:37.4,y:39.5},0).wait(1).to({rotation:4.8,x:37.3,y:39.3},0).wait(1).to({rotation:4.4,y:39},0).wait(1).to({rotation:4,x:37.2,y:38.7},0).wait(1).to({rotation:3.4,x:37.1,y:38.3},0).wait(1).to({regY:36.1,rotation:2.8,y:38.1},0).wait(1).to({regY:36,rotation:2.3,x:36.9,y:37.6},0).wait(1).to({rotation:1.8,x:36.8,y:37.3},0).wait(1).to({rotation:1.4,y:37},0).wait(1).to({rotation:1,x:36.7,y:36.7},0).wait(1).to({rotation:0.7,x:36.6,y:36.5},0).wait(1).to({rotation:0.4,y:36.3},0).wait(1).to({rotation:0.3,y:36.2},0).wait(1).to({rotation:0.1,x:36.5,y:36.1},0).wait(1).to({rotation:0,y:36},0).wait(1).to({regY:36.1,y:36.1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,73,72);


(lib.Symbol24 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Symbol23();
	this.instance.setTransform(-0.8,-0.3,0.517,1.074,2);

	this.instance_1 = new lib.Symbol22();
	this.instance_1.setTransform(-61.6,-20.3,1,0.446,90.4);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-76.5,-67.9,133.2,135.2);


(lib.Symbol20 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000066").s().p("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");
	this.shape.setTransform(438.1,-955.7);

	// Layer 1
	this.instance = new lib.Symbol24();
	this.instance.setTransform(436.9,-954.4,1.983,1.849,0,-179,1);

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(284.6,-1076.9,262.5,246.2);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol4();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.22,scaleY:1.22},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.5,-27.8,41,55.8);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol20();
	this.instance.setTransform(-760.9,-23.6,0.28,0.199,0,-122.2,57.8,282.1,-920.8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:282.2,regY:-920.7,scaleX:0.86,scaleY:0.61,skewX:-180.4,skewY:-0.4,x:-705.6,y:-23.5,alpha:1},4).to({regX:282.1,regY:-920.8,skewX:-180.9,skewY:-0.9},1).to({regX:282.2,regY:-920.7,skewX:-180.4,skewY:-0.4},1).to({regX:282.1,regY:-920.8,skewX:-180.9,skewY:-0.9},1).to({regX:282.2,regY:-920.7,skewX:-180.4,skewY:-0.4},1).to({skewX:-180.3,skewY:-0.3},25).to({skewX:-180.4,skewY:-0.4},6).to({y:-271.9,alpha:0},10).wait(51));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FFFF").s().p("AhQA4QgigXAAghQAAgfAigYQAigXAugBQAvABAhAXQAjAYgBAfQABAhgjAXQghAYgvgBQguABgigYg");
	this.shape.setTransform(-1008.7,-289.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},39).wait(61));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1020.2,-297.2,313.5,352);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol10();
	this.instance.setTransform(-5.5,48,1,1,0,0,0,-5.5,48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0.2,regY:0,x:0.2,y:0},0).wait(2).to({rotation:0.1},0).wait(1).to({x:0.3},0).wait(1).to({rotation:0.2},0).wait(1).to({x:0.4},0).wait(1).to({rotation:0.3,x:0.5},0).wait(1).to({rotation:0.4,y:0.1},0).wait(1).to({rotation:0.5,x:0.6},0).wait(1).to({rotation:0.7,x:0.7},0).wait(1).to({regX:-5.5,regY:48,rotation:0.8,x:-5.5,y:48},0).wait(1).to({regX:0.2,regY:0,rotation:1,x:1,y:0.1},0).wait(1).to({rotation:1.1,x:1.2},0).wait(1).to({rotation:1.3,x:1.3},0).wait(1).to({rotation:1.4,x:1.4,y:0.2},0).wait(1).to({rotation:1.6,x:1.5},0).wait(1).to({rotation:1.7,x:1.6},0).wait(1).to({rotation:1.8,x:1.7},0).wait(2).to({rotation:1.9,x:1.8},0).wait(3).to({regX:-5.5,regY:48,rotation:2,x:-5.5,y:48},0).wait(1).to({regX:0.2,regY:0,rotation:1.9,x:1.8,y:0.2},0).wait(3).to({rotation:1.8},0).wait(1).to({x:1.7},0).wait(1).to({rotation:1.7,x:1.6},0).wait(1).to({rotation:1.6,x:1.5},0).wait(1).to({rotation:1.5},0).wait(1).to({rotation:1.4,x:1.3},0).wait(1).to({rotation:1.3,x:1.2},0).wait(1).to({rotation:1.1,x:1.1},0).wait(1).to({rotation:1,x:1},0).wait(1).to({regX:-5.5,regY:48,rotation:0.8,x:-5.5,y:48},0).wait(1).to({regX:0.2,regY:0,rotation:0.7,x:0.8,y:0.1},0).wait(1).to({rotation:0.6,x:0.7},0).wait(1).to({rotation:0.4,x:0.6},0).wait(1).to({x:0.5,y:0},0).wait(1).to({rotation:0.3},0).wait(1).to({rotation:0.2,x:0.4},0).wait(1).to({rotation:0.1},0).wait(1).to({x:0.3},0).wait(1).to({rotation:0},0).wait(3).to({regX:-5.5,regY:48,x:-5.5,y:48},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.7,-69.5,64,139);


(lib.Symbol9 = function() {
	this.initialize();

	// Symbol 10
	this.instance = new lib.Symbol11();
	this.instance.setTransform(62.3,-139.7);

	// Layer 1
	this.instance_1 = new lib.Символ7();
	this.instance_1.setTransform(-163.2,-151.2,1,1,0,0,0,-110.3,53);

	this.instance_2 = new lib.Символ2();
	this.instance_2.setTransform(18,-238.4,1,1,0,0,0,36.5,36.1);

	this.instance_3 = new lib.body();
	this.instance_3.setTransform(-92.1,-277.5);

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-92.1,-277.5,188,555);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol9();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:1.4},7,cjs.Ease.get(-1)).to({y:3},8,cjs.Ease.get(1)).to({y:1.5},7,cjs.Ease.get(-1)).to({y:0},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92.1,-277.5,188,555);


(lib.Symbol7 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Символ6();
	this.instance.setTransform(0,0,1,1,0,0,0,15,30.2);
	this.instance.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(0, 17, 26, 0))];
	this.instance.cache(-2,-2,34,65);

	this.instance_1 = new lib.Символ6();
	this.instance_1.setTransform(1.7,-2,1,1,0,0,0,15,30.2);
	this.instance_1.filters = [new cjs.ColorFilter(0.41, 0.41, 0.41, 1, 60.18, 0, 0, 0)];
	this.instance_1.cache(-2,-2,34,65);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-15,-32.2,34,66);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol7();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:20},9).to({y:0},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-32.2,34,66);


(lib.Symbol2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Symbol15();
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-24.9,-33.8,49.8,67.8);


(lib.Символ13 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ11();
	this.instance.setTransform(80,23.5,1,1,0,0,0,80,23.5);
	this.instance.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(83, 52, 63, 1))];
	this.instance.cache(2,2,157,56);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-15.5,-28,191,106);


(lib.Символ12 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.setTransform(81.5,22.6,1,1,0,0,0,81.5,23);
	this.instance.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(83, 52, 63, 1))];
	this.instance.cache(10,-6,142,40);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-138.8,-85.2,314,193);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.18,scaleY:1.18},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.5,-27.8,41,55.8);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.2,scaleY:1.2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.5,-27.8,41,55.8);


(lib.Symbol5 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Symbol12();
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-29.8,-40.4,59.6,81);


(lib.Symbol3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Symbol13();
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-29.4,-39.9,58.8,80);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.Symbol6();
	this.instance.setTransform(1.5,-81.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(73).to({_off:false},0).wait(31).to({x:62.5},0).wait(35).to({x:121.5},0).wait(35));

	// Symbol 3
	this.instance_1 = new lib.Symbol3();
	this.instance_1.setTransform(62,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-20.9},4,cjs.Ease.get(-1)).to({y:-30.7},5,cjs.Ease.get(1)).wait(15).to({y:-15.9},7,cjs.Ease.get(-1)).to({y:1},8,cjs.Ease.get(1)).to({x:131,y:0},6,cjs.Ease.get(-1)).to({x:62,y:1},7).to({x:-4,y:0},7).to({x:-1.9},7).to({x:62,y:1},7,cjs.Ease.get(1)).wait(101));

	// Слой 2
	this.instance_2 = new lib.Символ1();
	this.instance_2.setTransform(62.2,12.3,0.745,0.745,0,0,0,12.3,12.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},39).wait(135));

	// Symbol 5
	this.instance_3 = new lib.Symbol5();
	this.instance_3.setTransform(121,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(39).to({scaleX:0.68,scaleY:0.68,x:125.7,y:-17.9},6,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:-1,y:1},7).to({scaleX:0.66,scaleY:0.66,x:85,y:-16.3},7).to({scaleX:1,scaleY:1,x:62,y:0},7).to({x:121},7,cjs.Ease.get(1)).wait(101));

	// Symbol 2
	this.instance_4 = new lib.Symbol2();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(39).to({scaleX:0.71,scaleY:0.71,x:60,y:-18.3},6,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:121,y:1},7).to({x:130,y:0},7).to({scaleX:0.71,scaleY:0.71,x:4,y:-15.9},7).to({scaleX:1,scaleY:1,x:0,y:0},7,cjs.Ease.get(1)).wait(101));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.5,-27.8,162,56.8);


// stage content:



(lib._600200 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 1
	this.instance = new lib.Symbol14();
	this.instance.setTransform(536.2,64.1,0.589,0.589);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 11
	this.instance_1 = new lib.Symbol1();
	this.instance_1.setTransform(222,153.5,1.258,1.258);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 13
	this.instance_2 = new lib.keys();
	this.instance_2.setTransform(447,120);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 14
	this.instance_3 = new lib.Symbol8();
	this.instance_3.setTransform(83,225.6,0.755,0.755);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Слой 15
	this.instance_4 = new lib.Символ15();
	this.instance_4.setTransform(541.7,39,0.122,0.122,0,0,0,432.1,142.2);

	this.instance_5 = new lib.Символ13();
	this.instance_5.setTransform(318.5,65.5,0.778,0.785,0,-4.1,-11.5,78.5,23);
	this.instance_5.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,5);

	this.instance_6 = new lib.Символ12();
	this.instance_6.setTransform(315.7,35.5,0.778,0.785,0,-4.1,-11.5,78.6,29.1);
	this.instance_6.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,5);

	this.text = new cjs.Text("в честь 20-ти летия", "33px 'otrada'", "#FF0000");
	this.text.textAlign = "center";
	this.text.lineHeight = 34;
	this.text.setTransform(423.1,538);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]}).wait(1));

	// Слой 16
	this.instance_7 = new lib.Символ4();
	this.instance_7.setTransform(314.4,74,1,1,0,0,0,326.4,194.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(235,-39,758,714);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;