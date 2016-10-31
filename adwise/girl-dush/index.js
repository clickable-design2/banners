(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/arrow.png?1477907478525", id:"arrow"},
		{src:"images/back.jpg?1477907478525", id:"back"},
		{src:"images/bulk.png?1477907478525", id:"bulk"},
		{src:"images/bulk2.png?1477907478525", id:"bulk2"},
		{src:"images/dush_03.png?1477907478525", id:"dush_03"},
		{src:"images/dush_06.png?1477907478525", id:"dush_06"},
		{src:"images/girl1_03.png?1477907478525", id:"girl1_03"},
		{src:"images/girl1_06.png?1477907478525", id:"girl1_06"},
		{src:"images/girl1_09.png?1477907478525", id:"girl1_09"},
		{src:"images/girl1_13.png?1477907478525", id:"girl1_13"},
		{src:"images/mochalka.png?1477907478525", id:"mochalka"},
		{src:"images/w256h2561380453915MouseOptions256x25632.png?1477907478525", id:"w256h2561380453915MouseOptions256x25632"}
	]
};



lib.ssMetadata = [];


// symbols:



(lib.arrow = function() {
	this.initialize(img.arrow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,149,174);


(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,359);


(lib.bulk = function() {
	this.initialize(img.bulk);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,150);


(lib.bulk2 = function() {
	this.initialize(img.bulk2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,210,210);


(lib.dush_03 = function() {
	this.initialize(img.dush_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,53,286);


(lib.dush_06 = function() {
	this.initialize(img.dush_06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,163,233);


(lib.girl1_03 = function() {
	this.initialize(img.girl1_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,115,102);


(lib.girl1_06 = function() {
	this.initialize(img.girl1_06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,83,257);


(lib.girl1_09 = function() {
	this.initialize(img.girl1_09);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,157,233);


(lib.girl1_13 = function() {
	this.initialize(img.girl1_13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,164);


(lib.mochalka = function() {
	this.initialize(img.mochalka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,159);


(lib.w256h2561380453915MouseOptions256x25632 = function() {
	this.initialize(img.w256h2561380453915MouseOptions256x25632);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,256,256);


(lib.Символ85 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.298)").s().p("AiHXZQgVgEgXgNQgQgJgYgUQgRgNgDgKQgDgKAGgUIA3ioQAGgUAGgOIAUgmQAWgrAKg4QAHgsACg9IABhqQADg4AIgpQgBgGABgJIAQiXQACgTgDgJQgFgLgTgMIgmgaQgYgPgKgLQgOgQgNgkQgvgHgbgLQgngQgPgeQgEgHgFgQQgEgPgEgIQgFgJgJgMIgQgUQgTgcgEgpQgEgcADgwQAEhEAGg4QACgWAGgNQADgHAKgNQALgMADgHQAGgMACgQIgBgeIgKikQggAZgjAmQgUAVgpAwIhBBOQgdAkAHAXQADAKAMAKQAQAQADAFQAQAXgLAxQgJAngOAPQgSAXgoAHIhGAJQguAHgpAYQgpAZgcAlQgKANgPAYIgYAmQggAsgkALIgZAHQgOAEgHAIIgLATQgGAMgIAEQgHADgMgDIgUgGIgTgCQgLgBgGgFQgIgIABgTQABhOAZhOQAIgaALgLQAFgGALgIIARgMQAXgRAWgkIAmg8IAugzQAsgxAXg+IARguQAOgnAfg1QAjg7AQgfQATgkATgpIBQiqQASgmAIgUQAKgcAPg5QAYhaALg4IAIgqQAFgXAHgRQAHgPAQgZQATgcAGgMIAIgQQAFgIAGgEQAFgDAMgFQAMgEAFgEQAGgFAHgOQAHgOAFgFQANgOAjAAQA1gCA0ACQAkAAAWAGQASAFAgASIBDAlQAxAdAXgUQAKgIAJgYQBLjWAahYQAKgiAHgQQAMgbARgRQASgRAkgPQBSghA0ATQAaAJASAUIAOAQQAIAJAGAFQARAOAgAEIA1AHQAKADAHAHQAIAIgFAHQAYACBXAAQBEABAqAHQAhAGAzARQAaAIAMAKQANAJAOAVQAuA+AVAmIARAgQAKASAKALIAbAdQARASAHANQAOAXADAmQAGAugIAmQgEARgIAVIgOAmQgJAZgPA0QgLAhgRAqIgiBIIhtD2QgoBcgMAyIgJAqQgFAZgHAQIgSAnQgMAYgEAQQgEANgCAmIgDBdQgEBXAFAwIAJBDQAFAngDAcQgCAZgPAxIg0ClQgNAqgMASQgXAjg3AZQhRAlhqAJQhDAFhegFQAFAVACASQAFAtgRAhQgGAMgSAXQgSAWgGANQgMAXgEA3QgGBVABAhIABA7QgCAigKAXQgFAMgKAPIgTAaQgbAmgVAsQgOAfgEAGQgLAVgOAMQgNAMgYAJIgnANQglAOgUAFQgXAHgTAAIgQgBg");
	this.shape.setTransform(111.6,149.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,223.2,299.7);


(lib.Символ82 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.298)").s().p("AmCGSIgLgCIgIgGQgVgQgKghQgFgSgDgmQgGhhAPgzIAmhtQAHgUAFgHQAEgHAMgQQAIgOAFgRQADgRgIgFQgFgDgGADIgIAAQgSAAgSAUQgQAYgMAKIAog2QAUgZAIgRIAKgcQAHgOAOgPIAZgZQASgRAegnQAdghAZgPIAggRQATgKALgJIAQgPQAKgGAYgEQAagFA2gWQAZgJAKgLIAKgIQAFgFAFgDQAJgDAXACQAxAIAzgDQApgDAPAFQAIADAHAEQAEADAKANQAJAKAHADQAGADAOABQAPABAFABQAKAEALAJQAgAbARANIAGAEQAGAOAGAJIAQAVQAKAMADAJQADAIACAQIAJAWQAKAVACAZQADAdgFAjQgEAYgLAoIgHAaIgHATQgDAHAAAZQACAXgCAWQAAAJgDADQgCACgCAAQgDgDgDAAQgJgBgGAKIgFARQgDARgQAXIgaAlIgIAQIgKAQQgLAPgcANIgsAXIgYASQgQAOgHAEQgZAQg1APQgrANgrAKIhbAZQgxAMgYAFQguAIguAAQhMAAhLgYg");
	this.shape.setTransform(44.7,42.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,89.4,85.3);


(lib.Символ79 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","#000000","rgba(0,0,0,0)"],[0,0.498,1],-280.5,0,280.6,0).s().p("Egr0AGCIAAsDMBXpAAAIAAMDg");
	this.shape.setTransform(280.6,38.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,561.2,77.2);


(lib.Символ77 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#C5B7C1","#F7F0FA"],[0,1],-5,0,5,0).s().p("AgxCLIAAkWIBjAAIAAEWg");
	this.shape.setTransform(25.1,33.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#C5B7C1","#F7F0FA"],[0,1],-5,0,5,0).s().p("AgxCLIAAkWIBjAAIAAEWg");
	this.shape_1.setTransform(5,33.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#C5B7C1","#F7F0FA"],[0,1],-5,0,5,0).s().p("AgxCLIAAkWIBjAAIAAEWg");
	this.shape_2.setTransform(15.1,33.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#C5B7C1","#F7F0FA"],[0,1],-33.9,17,0,-16.9).s().p("AioCLIAAkWIAAjHIFRFSIlRFTg");
	this.shape_3.setTransform(47.1,33.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,64.1,67.9);


(lib.Символ74 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.back();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,359);


(lib.Символ67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dush_03();
	this.instance.parent = this;
	this.instance.setTransform(0,327,0.693,0.693);

	this.instance_1 = new lib.dush_06();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.693,0.693);

	this.instance_2 = new lib.dush_03();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,142,0.693,0.693);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,113,525.3);


(lib.Символ66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E5E5E5","#C9C9C9","#B2B2B2","#FAFAFC"],[0,0.086,0.294,1],0,13.7,0,-13.7).s().p("AhQCdIgBg6IAPABQAQAAAKgGQAIgGAFgRIAEgKIhxjaIBQAAIA+CHIAAABIA0iIIBOAAIhoD1QgRAmgTAPQgVAPgdABg");
	this.shape.setTransform(13.7,15.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,27.4,31.6);


(lib.Символ65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E5E5E5","#C9C9C9","#B2B2B2","#FAFAFC"],[0,0.086,0.294,1],0,13.3,0,-13.2).s().p("AAsCbIhBh7IgjAAIAAB7IhLAAIAAk1IBLAAIAAB4IAdAAIA6h4IBbAAIhWCQIBgClg");
	this.shape.setTransform(13.3,15.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,26.6,31.2);


(lib.Символ64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E5E5E5","#C9C9C9","#B2B2B2","#FAFAFC"],[0,0.086,0.294,1],0,13,0,-13).s().p("AglCbIAAj7IhcAAIAAg6IEDAAIAAA6IheAAIAAD7g");
	this.shape.setTransform(13,15.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,26.1,31.2);


(lib.Символ63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E5E5E5","#C9C9C9","#B2B2B2","#FAFAFC"],[0,0.086,0.294,1],0,13.6,0,-13.6).s().p("AhFCNQgfgSgRgiQgRgjgBgrIAAgQQAAguARgjQARgiAfgUQAfgSAngBQAnAAAfATQAfATARAjQARAjABAtIAAALQAAAvgRAiQgRAkgfASQggAUgnAAQgmgBgfgSgAg6gPIgBAUQAAAvAQAYQAPAZAcAAQAcAAAQgZQAPgXAAguIAAgMQAAgvgPgYQgQgYgcAAQg3AAgDBVg");
	this.shape.setTransform(13.6,16);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,27.3,32);


(lib.Символ62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E5E5E5","#C9C9C9","#B2B2B2","#FAFAFC"],[0,0.086,0.294,1],0,13.1,0,-13).s().p("AheB4QgjgoAAhJIAAgOQAAguAQgiQAQgiAdgTQAfgTAlAAQA4AAAjAeQAjAeAEA0IhLAAQgBgcgNgMQgNgNgcAAQgaAAgNAVQgNAVgBAuIAAAUQAAAyAMAVQANAWAcAAQAbAAAOgMQANgNABgaIBKAAQgBAggQAZQgQAZgdAOQgdAOgmAAQg6AAgkgog");
	this.shape.setTransform(13.1,16);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,26.1,32.1);


(lib.Символ61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E5E5E5","#C9C9C9","#B2B2B2","#FAFAFC"],[0,0.086,0.294,1],0,15,0,-15).s().p("ABECbIgSg6IhkAAIgSA6IhRAAIBzk1IBEAAIBzE1gAAgAnIgghqIggBqIBAAAg");
	this.shape.setTransform(15,15.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,30,31.2);


(lib.Символ60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E5E5E5","#C9C9C9","#B2B2B2","#FAFAFC"],[0,0.086,0.294,1],0,12.3,0,-12.2).s().p("Ah5CbIAAk1IB6AAQAkAAAbANQAcANAPAYQAPAZAAAeQAAAughAZQggAcg5AAIguAAIAABpgAgugGIAvAAQAWAAAMgLQALgLAAgUQAAgWgLgNQgNgNgUAAIgwAAg");
	this.shape.setTransform(12.3,15.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,24.5,31.2);


(lib.Символ59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E5E5E5","#C9C9C9","#B2B2B2","#FAFAFC"],[0,0.086,0.294,1],0,13.3,0,-13.2).s().p("AAsCbIhBh7IgjAAIAAB7IhLAAIAAk1IBLAAIAAB4IAdAAIA6h4IBbAAIhWCQIBgClg");
	this.shape.setTransform(13.3,15.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,26.6,31.2);


(lib.Символ58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E5E5E5","#C9C9C9","#B2B2B2","#FAFAFC"],[0,0.086,0.294,1],0,14.2,0,-14.1).s().p("AiMC4IAAlwIBZAAIAACAIAuAAQAqAAAiAPQAiAPASAaQASAaAAAkQAAA3goAhQgpAjhCgBgAgzB0IAuAAQAZAAAQgPQAQgPAAgZQAAgXgQgOQgPgOgaABIguAAg");
	this.shape.setTransform(14.2,18.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,28.4,37);


(lib.Символ57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E5E5E5","#C9C9C9","#B2B2B2","#FAFAFC"],[0,0.086,0.294,1],0,-16.5,0,16.5).s().p("ABLC4IAAkqIhRAAIgGB5QgEBBgOAnQgOAmgZARQgaASgtAAIgYAAIAAhEIANgCQAbgDALgdQAMgdAEhCIAGirIEAAAIAAFwg");
	this.shape.setTransform(16.5,18.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,33.1,37);


(lib.Символ56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E5E5E5","#C9C9C9","#B2B2B2","#FAFAFC"],[0,0.086,0.294,1],0,-14.1,0,14.2).s().p("AiMC4IAAlwIBZAAIAACAIAuAAQAqAAAiAPQAiAPASAaQASAaAAAkQAAA3goAhQgpAjhCgBgAgzB0IAuAAQAZAAAQgPQAQgPAAgZQAAgXgQgOQgPgOgaABIguAAg");
	this.shape.setTransform(14.2,18.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#E5E5E5","#C9C9C9","#B2B2B2","#FAFAFC"],[0,0.086,0.294,1],0,4.5,0,-4.4).s().p("AgrC4IAAlwIBXAAIAAFwg");
	this.shape_1.setTransform(35.5,18.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,40,37);


(lib.Символ55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E5E5E5","#C9C9C9","#B2B2B2","#FAFAFC"],[0,0.086,0.294,1],0,20,0,-19.9).s().p("ABuC4IAAhWIAIivIhZEFIg5AAIhakFIAJCvIAABWIhZAAIAAlwIB1AAIBREAIBSkAIB1AAIAAFwg");
	this.shape.setTransform(20,18.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,40,37);


(lib.Символ54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E5E5E5","#C9C9C9","#B2B2B2","#FAFAFC"],[0,0.086,0.294,1],0,-17.8,0,17.8).s().p("ABSC4IgWhFIh4AAIgVBFIhgAAICIlwIBSAAICJFwgAAnAvIgnh/IgnB/IBOAAg");
	this.shape.setTransform(17.8,18.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,35.7,37);


(lib.Символ53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E5E5E5","#C9C9C9","#B2B2B2","#FAFAFC"],[0,0.086,0.294,1],0,15.5,0,-15.4).s().p("ABBC4IAAiaIiBAAIAACaIhZAAIAAlwIBZAAIAACTICBAAIAAiTIBZAAIAAFwg");
	this.shape.setTransform(15.5,18.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,30.9,37);


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.698)").s().p("A78uUMA35AAAIowccMgvJAANg");
	this.shape.setTransform(178.9,91.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,357.9,183.5);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dush_06();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.276,0.276);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,45,64.3);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("AGPAAQAAClh1B1Qh1B1ilAAQikAAh1h1Qh1h1AAilQAAikB1h1QB1h1CkAAQClAAB1B1QB1B1AACkg");
	this.shape.setTransform(39.9,39.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.2)").s().p("AkZEaQh1h1AAilQAAikB1h1QB1h1CkAAQClAAB1B1QB1B1AACkQAAClh1B1Qh1B1ilAAQikAAh1h1g");
	this.shape_1.setTransform(39.9,39.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,81.9,81.9);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("AGPAAQAAClh1B1Qh1B1ilAAQikAAh1h1Qh1h1AAilQAAikB1h1QB1h1CkAAQClAAB1B1QB1B1AACkg");
	this.shape.setTransform(39.9,39.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.2)").s().p("AkZEaQh1h1AAilQAAikB1h1QB1h1CkAAQClAAB1B1QB1B1AACkQAAClh1B1Qh1B1ilAAQikAAh1h1g");
	this.shape_1.setTransform(39.9,39.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,81.9,81.9);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mochalka();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.383,0.383);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,76.5,60.9);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,153,255,0.498)").s().p("AgDBLQgPgGgKgSQgKgRgFgbQgGgZgLglQgLgmAgAaQAgAZASAMQAUALANAKQAMAJAFANQAFANgDAPQgEAPgKAKQgLAKgPACIgJABQgKAAgHgEg");
	this.shape.setTransform(6.5,7.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13,15.9);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(2,1,1).p("AEsAAQAAB8hYBYQgZAYgaARQhHAvhaAAQh7AAhYhYQhYhYAAh8QAAhZAvhHQARgbAYgYQBYhYB7AAQB8AABYBYQBYBYAAB7g");
	this.shape.setTransform(30,30);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,62,62);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(2,1,1).p("AA0AAQAAAPgIANQgDAEgFAEQgPAQgVAAQgUAAgQgQQgPgPAAgVQAAgUAPgQQAFgEAEgDQANgIAOAAQAVAAAPAPQAQAQAAAUg");
	this.shape.setTransform(5.2,5.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,12.5,12.5);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.arrow();
	this.instance.parent = this;
	this.instance.setTransform(90.3,2.4,0.507,0.507,91.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,90.3,77.9);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl1_09();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,157,233);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl1_13();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,120,164);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl1_06();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,83,257);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl1_03();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,115,102);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bulk2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,210,210);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bulk2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,210,210);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bulk();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,150,150);


(lib.Анимация1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mochalka();
	this.instance.parent = this;
	this.instance.setTransform(-33.9,-27,0.34,0.34);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.9,-27,68,54);


(lib.Tween22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.w256h2561380453915MouseOptions256x25632();
	this.instance.parent = this;
	this.instance.setTransform(-30,-30,0.234,0.234);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30,-30,60,60);


(lib.Symbol36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AguA0IAAhnIAgAAIAAApIAPAAQAXgBAMAJQALAHAAARQAAAPgKAHQgLAIgTAAgAgOAdIAOAAQAPAAAAgLQAAgKgPABIgOAAg");
	this.shape.setTransform(127,12.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhEA0IAAhnIAgAAIAABNIAVAAIAAhNIAeAAIAABNIAWAAIAAhNIAgAAIAABng");
	this.shape_1.setTransform(113.1,12.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAjA0IAAhnIAgAAIAABngAhCA0IAAhnIAgAAIAAApIARAAQAVgBAMAJQALAHAAARQAAAPgKAHQgLAIgRAAgAgiAdIAQAAQAPAAAAgLQAAgKgPABIgQAAg");
	this.shape_2.setTransform(97.2,12.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAgA0IAAhOIgVBOIgVAAIgVhOIAABOIgaAAIAAhnIAqAAIAPA+IAQg+IAqAAIAABng");
	this.shape_3.setTransform(82.5,12.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AATA0IAAg4IglA4IgeAAIAAhnIAeAAIAAA4IAlg4IAeAAIAABng");
	this.shape_4.setTransform(64.7,12.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAhA/IAAgXIhAAAIAAAXIgaAAIAAgvIAKAAQAKgXgBgfIAAgYIBWAAIAABOIAKAAIAAAvgAgJgjQABAWgIAdIAfAAIAAg0IgYAAg");
	this.shape_5.setTransform(52.6,13.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgqA0IAAhnIBUAAIAAAXIg0AAIAAAQIAwAAIAAAUIgwAAIAAAUIA1AAIAAAYg");
	this.shape_6.setTransform(41.5,12.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgvA0IAAhnIA7AAQAPABAIAHQAIAHAAALQAAAJgGAIQgEAEgHACQALACAFAGQAGAGAAAKQAAAIgEAGQgEAHgHADQgEADgIABIgOACgAgOAdIAOAAQAJAAADgCQADgEAAgFQAAgEgDgDQgDgDgJAAIgOAAgAgOgJIAOAAQAFAAADgDQADgDAAgEQAAgGgDgCQgDgDgFAAIgOAAg");
	this.shape_7.setTransform(30.7,12.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAXA0IgGgRIgiAAIgFARIghAAIAnhnIAhAAIAnBngAALAMIgLgkIgKAkIAVAAg");
	this.shape_8.setTransform(19.2,12.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AARA0IAAgqIghAAIAAAqIggAAIAAhnIAgAAIAAAlIAhAAIAAglIAgAAIAABng");
	this.shape_9.setTransform(7.5,12.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,133.6,23.1);


(lib.shape109 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("AETAAQAABxhRBRQhRBRhxAAQhwAAhRhRQhRhRAAhxQAAhwBRhRQBRhRBwAAQBxAABRBRQBRBRAABwg");
	this.shape.setTransform(27.5,27.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,58,58);


(lib.Символ84 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ85();
	this.instance.parent = this;
	this.instance.setTransform(111.6,149.8,1,1,0,0,0,111.6,149.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},9).to({alpha:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,223.2,299.7);


(lib.Символ83 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ84();
	this.instance.parent = this;
	this.instance.setTransform(111.6,149.8,1,1,0,0,0,111.6,149.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ80 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ82();
	this.instance.parent = this;
	this.instance.setTransform(44.6,42.6,1,1,0,0,0,44.6,42.6);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},9).to({alpha:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,89.4,85.3);


(lib.Символ78 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ77();
	this.instance.parent = this;
	this.instance.setTransform(18,19.1,0.563,0.563,0,0,0,31.9,33.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:48},4).to({x:18},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,36.1,38.2);


(lib.Символ76 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(34,27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,68,54);


(lib.Символ68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ67();
	this.instance.parent = this;
	this.instance.setTransform(56.5,262.6,1,1,0,0,0,56.5,262.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:272.3},14,cjs.Ease.get(-1)).to({y:282.6},15,cjs.Ease.get(1)).to({y:272.6},15,cjs.Ease.get(-1)).to({y:262.6},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,113,525.3);


(lib.Символ52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ53();
	this.instance.parent = this;
	this.instance.setTransform(15.5,18.5,1,1,0,0,0,15.5,18.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1.01,skewX:-7.1,x:9.2,y:14.5},2,cjs.Ease.get(-1)).to({scaleY:1,skewX:0,x:15.5,y:18.5},3,cjs.Ease.get(1)).to({scaleY:1,skewX:5.3,x:17.3},2,cjs.Ease.get(-1)).to({scaleY:1,skewX:0,x:15.5},2,cjs.Ease.get(1)).wait(11));

	// Слой 3
	this.instance_1 = new lib.Символ54();
	this.instance_1.parent = this;
	this.instance_1.setTransform(51.5,18.5,1,1,0,0,0,17.8,18.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({regX:17.9,scaleY:1.01,skewX:-7.1,x:45.2,y:14.5},2,cjs.Ease.get(-1)).to({regX:17.8,scaleY:1,skewX:0,x:51.5,y:18.5},3,cjs.Ease.get(1)).to({scaleY:1,skewX:5.3,x:53.2},2,cjs.Ease.get(-1)).to({scaleY:1,skewX:0,x:51.5},2,cjs.Ease.get(1)).wait(9));

	// Слой 4
	this.instance_2 = new lib.Символ55();
	this.instance_2.parent = this;
	this.instance_2.setTransform(91.9,18.5,1,1,0,0,0,19.9,18.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({regX:20,scaleY:1.01,skewX:-7.1,x:85.7,y:14.5},2,cjs.Ease.get(-1)).to({regX:19.9,scaleY:1,skewX:0,x:91.9,y:18.5},3,cjs.Ease.get(1)).to({scaleY:1,skewX:5.3,x:93.7},2,cjs.Ease.get(-1)).to({scaleY:1,skewX:0,x:91.9},2,cjs.Ease.get(1)).wait(7));

	// Слой 5
	this.instance_3 = new lib.Символ56();
	this.instance_3.parent = this;
	this.instance_3.setTransform(137.5,18.5,1,1,0,0,0,19.9,18.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({regX:20,scaleY:1.01,skewX:-7.1,x:131.2,y:14.5},2,cjs.Ease.get(-1)).to({regX:19.9,scaleY:1,skewX:0,x:137.5,y:18.5},3,cjs.Ease.get(1)).to({scaleY:1,skewX:5.3,x:139.2},2,cjs.Ease.get(-1)).to({scaleY:1,skewX:0,x:137.5},2,cjs.Ease.get(1)).wait(5));

	// Слой 7
	this.instance_4 = new lib.Символ57();
	this.instance_4.parent = this;
	this.instance_4.setTransform(177.6,18.5,1,1,0,0,0,16.5,18.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(8).to({regX:16.6,scaleY:1.01,skewX:-7.1,x:171.3,y:14.5},2,cjs.Ease.get(-1)).to({regX:16.5,scaleY:1,skewX:0,x:177.6,y:18.5},3,cjs.Ease.get(1)).to({scaleY:1,skewX:5.3,x:179.3},2,cjs.Ease.get(-1)).to({scaleY:1,skewX:0,x:177.6},2,cjs.Ease.get(1)).wait(3));

	// Слой 8
	this.instance_5 = new lib.Символ58();
	this.instance_5.parent = this;
	this.instance_5.setTransform(213.8,18.5,1,1,0,0,0,14.2,18.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10).to({scaleY:1.01,skewX:-7.1,x:207.5,y:14.5},2,cjs.Ease.get(-1)).to({scaleY:1,skewX:0,x:213.8,y:18.5},3,cjs.Ease.get(1)).to({scaleY:1,skewX:5.3,x:215.6},2,cjs.Ease.get(-1)).to({scaleY:1,skewX:0,x:213.8},2,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,228,37);


(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ59();
	this.instance.parent = this;
	this.instance.setTransform(13.2,16.1,1,1,0,0,0,13.2,15.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1.01,skewX:8.3,x:21,y:12},2,cjs.Ease.get(-1)).to({scaleY:1,skewX:0,x:13.2,y:16.1},2,cjs.Ease.get(-1)).to({scaleY:1.02,skewX:-10.3,x:10.3},2,cjs.Ease.get(-1)).to({scaleY:1,skewX:0,x:13.2},1,cjs.Ease.get(1)).wait(15));

	// Слой 3
	this.instance_1 = new lib.Символ60();
	this.instance_1.parent = this;
	this.instance_1.setTransform(40.6,16.1,1,1,0,0,0,12.2,15.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({scaleY:1.01,skewX:8.3,x:48.3,y:12},2,cjs.Ease.get(-1)).to({scaleY:1,skewX:0,x:40.6,y:16.1},2,cjs.Ease.get(-1)).to({regX:12.3,scaleY:1.02,skewX:-10.3,x:37.7},2,cjs.Ease.get(-1)).to({regX:12.2,scaleY:1,skewX:0,x:40.6},1,cjs.Ease.get(1)).wait(13));

	// Слой 4
	this.instance_2 = new lib.Символ61();
	this.instance_2.parent = this;
	this.instance_2.setTransform(69.5,16.1,1,1,0,0,0,15,15.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({scaleY:1.01,skewX:8.3,x:77.3,y:12},2,cjs.Ease.get(-1)).to({scaleY:1,skewX:0,x:69.5,y:16.1},2,cjs.Ease.get(-1)).to({regX:15.1,scaleY:1.02,skewX:-10.3,x:66.7},2,cjs.Ease.get(-1)).to({regX:15,scaleY:1,skewX:0,x:69.5},1,cjs.Ease.get(1)).wait(11));

	// Слой 5
	this.instance_3 = new lib.Символ62();
	this.instance_3.parent = this;
	this.instance_3.setTransform(99,16,1,1,0,0,0,13.1,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({scaleY:1.01,skewX:8.3,x:106.7,y:12},2,cjs.Ease.get(-1)).to({scaleY:1,skewX:0,x:99,y:16},2,cjs.Ease.get(-1)).to({scaleY:1.02,skewX:-10.3,x:96.1},2,cjs.Ease.get(-1)).to({scaleY:1,skewX:0,x:99},1,cjs.Ease.get(1)).wait(9));

	// Слой 6
	this.instance_4 = new lib.Символ63();
	this.instance_4.parent = this;
	this.instance_4.setTransform(128.2,16.1,1,1,0,0,0,13.6,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(8).to({scaleY:1.01,skewX:8.3,x:136,y:12},2,cjs.Ease.get(-1)).to({scaleY:1,skewX:0,x:128.2,y:16.1},2,cjs.Ease.get(-1)).to({scaleY:1.02,skewX:-10.3,x:125.3},2,cjs.Ease.get(-1)).to({scaleY:1,skewX:0,x:128.2},1,cjs.Ease.get(1)).wait(7));

	// Слой 7
	this.instance_5 = new lib.Символ64();
	this.instance_5.parent = this;
	this.instance_5.setTransform(157.1,16.1,1,1,0,0,0,13,15.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10).to({scaleY:1.01,skewX:8.3,x:164.9,y:12},2,cjs.Ease.get(-1)).to({scaleY:1,skewX:0,x:157.1,y:16.1},2,cjs.Ease.get(-1)).to({regX:13.1,scaleY:1.02,skewX:-10.3,x:154.3},2,cjs.Ease.get(-1)).to({regX:13,scaleY:1,skewX:0,x:157.1},1,cjs.Ease.get(1)).wait(5));

	// Слой 8
	this.instance_6 = new lib.Символ65();
	this.instance_6.parent = this;
	this.instance_6.setTransform(186.5,16.1,1,1,0,0,0,13.2,15.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(12).to({scaleY:1.01,skewX:8.3,x:194.2,y:12},2,cjs.Ease.get(-1)).to({scaleY:1,skewX:0,x:186.5,y:16.1},2,cjs.Ease.get(-1)).to({regX:13.3,scaleY:1.02,skewX:-10.3,x:183.6},2,cjs.Ease.get(-1)).to({regX:13.2,scaleY:1,skewX:0,x:186.5},1,cjs.Ease.get(1)).wait(3));

	// Слой 9
	this.instance_7 = new lib.Символ66();
	this.instance_7.parent = this;
	this.instance_7.setTransform(213.1,16.3,1,1,0,0,0,13.7,15.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(14).to({regX:13.8,scaleY:1.01,skewX:8.3,x:220.9,y:12.2},2,cjs.Ease.get(-1)).to({regX:13.7,scaleY:1,skewX:0,x:213.1,y:16.3},2,cjs.Ease.get(-1)).to({regX:13.8,scaleY:1.02,skewX:-10.3,x:210.3},2,cjs.Ease.get(-1)).to({regX:13.7,scaleY:1,skewX:0,x:213.1},1,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,226.8,32.1);


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ76();
	this.instance.parent = this;
	this.instance.setTransform(34,27,1,1,0,0,0,34,27);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:33.9,regY:27.1,rotation:-2,x:33.9,y:27.2},4,cjs.Ease.get(-1)).to({regX:34,regY:27,rotation:-10.9,x:34,y:27},5,cjs.Ease.get(1)).to({rotation:-5.3,y:27.1},5).to({rotation:0,y:27},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,68,54);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ47();
	this.instance.parent = this;
	this.instance.setTransform(22.5,32.1,1,1,0,0,0,22.5,32.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:22.4,rotation:8,x:22.4},4,cjs.Ease.get(-1)).to({regX:22.5,regY:32.2,rotation:18.2,x:22.5,y:32.3},5,cjs.Ease.get(1)).to({regX:22.6,regY:32.1,scaleX:1,scaleY:1,rotation:9,x:22.7,y:32.2},5,cjs.Ease.get(-1)).to({regX:22.5,scaleX:1,scaleY:1,rotation:0,x:22.5,y:32.1},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,45,64.3);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 47
	this.instance = new lib.Символ48();
	this.instance.parent = this;
	this.instance.setTransform(41.5,42.1,1,1,0,0,0,22.5,32.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ44();
	this.instance_1.parent = this;
	this.instance_1.setTransform(39.9,39.9,1,1,0,0,0,39.9,39.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,80.9,80.9);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ49();
	this.instance.parent = this;
	this.instance.setTransform(40,40,1,1,0,0,0,34,27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 41
	this.instance_1 = new lib.Символ41();
	this.instance_1.parent = this;
	this.instance_1.setTransform(39.9,39.9,1,1,0,0,0,39.9,39.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,80.9,80.9);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ38();
	this.instance.parent = this;
	this.instance.setTransform(38.2,30.4,1,1,0,0,0,38.2,30.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-27.2,y:30.5},19).to({rotation:0,y:30.4},20).to({rotation:31.2,x:38.3},20).to({rotation:0,x:38.2},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,76.5,60.9);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ39();
	this.instance.parent = this;
	this.instance.setTransform(26.4,132,1,1,0,0,0,38.2,30.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[26.3,131.9,22.8,125.3,21.2,116.1,20.6,112.6,20.2,106.8]}},11,cjs.Ease.get(-1)).to({guide:{path:[20.4,106.9,20,99.5,20,88.5,20,71,41.6,41.6,46.6,34.7,51.8,28.6]}},12,cjs.Ease.get(1)).to({guide:{path:[51.8,28.4,46.6,34.4,41.6,41.3,37,47.6,33.3,53.3]}},12,cjs.Ease.get(-1)).to({guide:{path:[33.3,53.5,19.8,74.7,19.8,88.4,19.8,108,21.2,116.1,22.8,125.3,26.4,131.9]}},11,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.8,101.6,76.5,60.9);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance = new lib.Символ35();
	this.instance.parent = this;
	this.instance.setTransform(-6.1,-19.6,0.392,0.392,0,0,0,6.2,7.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:6.5,regY:7.9,x:142.9,y:131.8},27).wait(1).to({x:-17.1,y:-30.7},0).to({regX:6.4,regY:7.8,x:-11.6,y:-25.1},1).wait(1));

	// Слой 1 - копия: 2 - копия: 2 - копия: 2 - копия
	this.instance_1 = new lib.Символ35();
	this.instance_1.parent = this;
	this.instance_1.setTransform(4.9,-8.4,0.392,0.392,0,0,0,6.4,7.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:6.5,regY:7.9,x:142.9,y:131.8},25).wait(1).to({x:-17.1,y:-30.7},0).to({regX:6.4,regY:7.8,x:-0.5,y:-13.9},3).wait(1));

	// Слой 1 - копия: 2 - копия: 2 - копия: 2
	this.instance_2 = new lib.Символ35();
	this.instance_2.parent = this;
	this.instance_2.setTransform(21.6,8.5,0.392,0.392,0,0,0,6.7,7.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:6.5,regY:7.9,x:142.9,y:131.8},22).wait(1).to({x:-17.1,y:-30.7},0).to({regY:7.8,x:16,y:2.9},6).wait(1));

	// Слой 1 - копия: 2 - копия: 2 - копия
	this.instance_3 = new lib.Символ35();
	this.instance_3.parent = this;
	this.instance_3.setTransform(38.2,25.4,0.392,0.392,0,0,0,6.7,8.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:6.5,regY:7.9,x:142.9,y:131.8},19).wait(1).to({x:-17.1,y:-30.7},0).to({x:32.6,y:19.7},9).wait(1));

	// Слой 1 - копия: 2 - копия: 2
	this.instance_4 = new lib.Символ35();
	this.instance_4.parent = this;
	this.instance_4.setTransform(60.2,47.8,0.392,0.392,0,0,0,6.7,8.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:6.5,regY:7.9,x:142.9,y:131.8},15).wait(1).to({x:-17.1,y:-30.7},0).to({x:54.6,y:42.1},13).wait(1));

	// Слой 1 - копия: 2 - копия
	this.instance_5 = new lib.Символ35();
	this.instance_5.parent = this;
	this.instance_5.setTransform(82.3,70.2,0.392,0.392,0,0,0,6.7,8.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:6.5,regY:7.9,x:142.9,y:131.8},11).wait(1).to({x:-17.1,y:-30.7},0).to({x:76.7,y:64.5},17).wait(1));

	// Слой 1 - копия: 2
	this.instance_6 = new lib.Символ35();
	this.instance_6.parent = this;
	this.instance_6.setTransform(104.3,92.6,0.392,0.392,0,0,0,6.7,8.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:6.5,regY:7.9,x:142.9,y:131.8},7).wait(1).to({x:-17.1,y:-30.7},0).to({x:98.8,y:86.9},21).wait(1));

	// Слой 1 - копия
	this.instance_7 = new lib.Символ35();
	this.instance_7.parent = this;
	this.instance_7.setTransform(126.5,115,0.392,0.392,0,0,0,6.7,8.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:6.5,regY:7.9,x:142.9,y:131.8},3).wait(1).to({x:-17.1,y:-30.7},0).to({x:120.9,y:109.4},25).wait(1));

	// Слой 1
	this.instance_8 = new lib.Символ35();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-17.1,-30.7,0.392,0.392,0,0,0,6.5,7.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({x:142.9,y:131.8},29).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.6,-33.8,148.6,151.9);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// КРАСОТКУ
	this.instance = new lib.Символ51();
	this.instance.parent = this;
	this.instance.setTransform(121.8,97.3,1.124,1.124,0,0,0,113.3,16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// НАМЫЛЬ
	this.instance_1 = new lib.Символ52();
	this.instance_1.parent = this;
	this.instance_1.setTransform(122.2,33.4,1.124,1.124,0,0,0,114,18.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 2
	this.instance_2 = new lib.Символ50();
	this.instance_2.parent = this;
	this.instance_2.setTransform(130.6,58.2,1,1,0,0,0,178.9,91.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.3,-33.6,357.9,183.5);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ30();
	this.instance.parent = this;
	this.instance.setTransform(24.5,24.4,0.812,0.812,0,0,0,30.1,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:29.9,scaleX:0.33,scaleY:0.33,x:24.4},19).to({regY:30,scaleX:0.81,scaleY:0.81,x:24.5},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.8,-0.8,50.3,50.3);


(lib.Символ28копия2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ37();
	this.instance.parent = this;
	this.instance.setTransform(-45.9,0.5,1,1,-19.2,0,0,38.2,30.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 30
	this.instance_1 = new lib.Символ31();
	this.instance_1.parent = this;
	this.instance_1.setTransform(29.8,30.1,1,1,0,0,0,24.4,24.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Символ 30
	this.instance_2 = new lib.Символ30();
	this.instance_2.parent = this;
	this.instance_2.setTransform(30,30,1,1,0,0,0,30,30);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Символ 29
	this.instance_3 = new lib.Символ29();
	this.instance_3.parent = this;
	this.instance_3.setTransform(29.8,29.7,1,1,0,0,0,5.2,5.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69.8,-1,130.9,142.7);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 30
	this.instance = new lib.Символ31();
	this.instance.parent = this;
	this.instance.setTransform(29.8,30.1,1,1,0,0,0,24.4,24.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 30
	this.instance_1 = new lib.Символ30();
	this.instance_1.parent = this;
	this.instance_1.setTransform(30,30,1,1,0,0,0,30,30);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Символ 29
	this.instance_2 = new lib.Символ29();
	this.instance_2.parent = this;
	this.instance_2.setTransform(29.8,29.7,1,1,0,0,0,5.2,5.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,62,62);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ26();
	this.instance.parent = this;
	this.instance.setTransform(45.1,38.9,1,1,0,0,0,45.1,38.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:5.1},9).to({x:45.1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,90.3,77.9);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ21();
	this.instance.parent = this;
	this.instance.setTransform(60,82,1,1,0,0,0,60,82);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,120,164);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.parent = this;
	this.instance.setTransform(105,105,1,1,0,0,0,105,105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,210,210);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ4();
	this.instance.parent = this;
	this.instance.setTransform(32,32,0.427,0.427,0,0,0,75,75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.parent = this;
	this.instance.setTransform(43,43,0.41,0.41,0,0,0,105,105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,86,86);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.parent = this;
	this.instance.setTransform(32,32,1,1,0,0,0,32,32);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},49).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.Анимация4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ78();
	this.instance.parent = this;
	this.instance.setTransform(-115.5,0,1,1,180,0,0,18,19.1);

	this.instance_1 = new lib.Символ78();
	this.instance_1.parent = this;
	this.instance_1.setTransform(115.5,0,1,1,0,0,0,18,19.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-133.6,-19.1,267.2,38.2);


(lib.Анимация3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ78();
	this.instance.parent = this;
	this.instance.setTransform(-125.5,2,1,1,180,0,0,18,19.1);

	this.instance_1 = new lib.Символ78();
	this.instance_1.parent = this;
	this.instance_1.setTransform(115.5,0,1,1,0,0,0,18,19.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-143.6,-19.1,277.2,40.2);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol36();
	this.instance.parent = this;
	this.instance.setTransform(66.8,11.6,1,1,0,0,0,66.8,11.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,133.6,23.1);


(lib.sprite110 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shape109("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,58,58);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween22("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(30,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,60,60);


(lib.Символ81 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ80();
	this.instance.parent = this;
	this.instance.setTransform(44.6,42.6,1,1,0,0,0,44.6,42.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ71 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ28();
	this.instance.parent = this;
	this.instance.setTransform(29.5,28,1,1,0,0,0,30,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[29.6,28.1,21.4,22,10.7,12.3,0.5,3.2,-3.9,0,-11.7,-5.5,-20.5,-8,-30.6,-10.9,-45.4,-10.9,-67.3,-10.9,-77.4,8.1,-84.4,21.3,-84.4,39.6,-84.4,58.7,-72.4,68,-59.6,78,-30.9,78,-20.7,78,-4.2,72.2,13.8,65.2,21.6,63,30.3,60.4,38.9,52,40.7,50,54.5,34.1,62.5,24.8,72.4,11.5,80.3,1.1,83.7,-2.2,88.8,-7.2,95.5,-9,102.1,-10.9,115,-10.9,138.7,-10.9,152.5,11.1,164.5,30.3,164.5,57,164.5,74.5,138.5,86,130.1,89.6,120.2,92.1,112.8,94,111,94,99.4,94,85.7,83.6,75.1,75.5,69.5,67,66.7,62.7,58.8,55.9,54.2,52.1,51.8,50.1]}},49).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-3,62,62);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ40();
	this.instance.parent = this;
	this.instance.setTransform(39.9,39.9,1,1,0,0,0,39.9,39.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,80.9,80.9);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ43();
	this.instance.parent = this;
	this.instance.setTransform(39.9,39.9,1,1,0,0,0,39.9,39.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,80.9,80.9);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия: 2 - копия: 2 - копия: 2
	this.instance = new lib.Символ34();
	this.instance.parent = this;
	this.instance.setTransform(26.2,41.9,1,1,0,0,0,6.5,8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1 - копия: 2 - копия: 2 - копия
	this.instance_1 = new lib.Символ34();
	this.instance_1.parent = this;
	this.instance_1.setTransform(12.2,41.9,1,1,0,0,0,6.5,8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1 - копия: 2 - копия: 2
	this.instance_2 = new lib.Символ34();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1.6,45.5,1,1,3.2,0,0,6.4,8.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 1 - копия: 2 - копия
	this.instance_3 = new lib.Символ34();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-12.4,69.9,1,1,2.5,0,0,6.4,8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Слой 1 - копия: 2
	this.instance_4 = new lib.Символ34();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-5.4,52.4,1,1,4.7,0,0,6.4,8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Слой 1 - копия
	this.instance_5 = new lib.Символ34();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-16,59.5,1,1,11.6,0,0,6.4,8.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Слой 1
	this.instance_6 = new lib.Символ34();
	this.instance_6.parent = this;
	this.instance_6.setTransform(8.7,45.4,1,1,2,0,0,6.5,8);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.9,0,185.5,191.7);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ28();
	this.instance.parent = this;
	this.instance.setTransform(30,30,1,1,0,0,0,30,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,62,62);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ81();
	this.instance.parent = this;
	this.instance.setTransform(62.7,49.7,1,1,0,0,0,44.6,42.6);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ81(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ19();
	this.instance_1.parent = this;
	this.instance_1.setTransform(57.5,51,1,1,0,0,0,57.5,51);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,115,102);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.parent = this;
	this.instance.setTransform(139,139,1.323,1.323,0,0,0,105,105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,277.9,277.9);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ18();
	this.instance.parent = this;
	this.instance.setTransform(139,139,1,1,0,0,0,139,139);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.07,x:138},14).to({scaleX:1,scaleY:1.05,x:139},15).to({scaleY:1},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,277.9,277.9);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ17();
	this.instance.parent = this;
	this.instance.setTransform(139,139,1,1,0,0,0,139,139);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.95,scaleY:0.95,x:139.1,y:139.1},4).to({scaleX:1,scaleY:1,x:139,y:139},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,277.9,277.9);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.parent = this;
	this.instance.setTransform(139,139,1,1,0,0,0,139,139);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.92,y:127.5},14).to({scaleY:1,y:139},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,277.9,277.9);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.parent = this;
	this.instance.setTransform(43,43,1,1,0,0,0,43,43);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-360},69).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,86,86);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.parent = this;
	this.instance.setTransform(43,43,1,1,0,0,0,43,43);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,86,86);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия: 2 - копия
	this.instance = new lib.Символ9();
	this.instance.parent = this;
	this.instance.setTransform(651.8,1.6,0.344,0.344,0,0,0,43.5,43);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:43.1,regY:43.1,x:662.7,y:-95.7},24).wait(1).to({x:614.5,y:329.8},0).to({regX:43.3,x:651.3,y:5.6},80).wait(1));

	// Слой 1 - копия: 2
	this.instance_1 = new lib.Символ9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(325.3,149.9,0.344,0.344,0,0,0,43.5,43.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:43,regY:43.1,x:350.9,y:-55.7},56).wait(1).to({regX:43.1,x:302.7,y:329.8},0).to({regX:43.3,regY:43.3,x:324.8,y:153.6},48).wait(1));

	// Слой 1 - копия
	this.instance_2 = new lib.Символ9();
	this.instance_2.parent = this;
	this.instance_2.setTransform(821.3,55.7,0.344,0.344,0,0,0,43.5,43.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:43,regY:43.1,x:836.8,y:-75.7},34).wait(1).to({regX:43.1,x:788.6,y:329.8},0).to({regX:43.3,regY:43.3,x:820.8,y:59.5},70).wait(1));

	// Слой 1
	this.instance_3 = new lib.Символ9();
	this.instance_3.parent = this;
	this.instance_3.setTransform(590.9,-75.5,0.344,0.344,0,0,0,43.3,43);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:43,regY:43.1,x:593.2,y:-95.7},5).wait(1).to({x:545,y:329.8},0).to({regX:43.1,x:590.4,y:-71.4},99).wait(1));

	// Символ 6 - копия: 2 - копия: 2
	this.instance_4 = new lib.Символ6();
	this.instance_4.parent = this;
	this.instance_4.setTransform(727.4,99.8,0.344,0.344,0,0,0,32.4,32.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:32.1,regY:32.1,x:713.7,y:-100.6},52).wait(1).to({regY:31.9,x:741.2,y:304},0).to({regX:32.2,regY:32.1,x:727.7,y:103.7},52).wait(1));

	// Символ 6 - копия: 2 - копия
	this.instance_5 = new lib.Символ6();
	this.instance_5.parent = this;
	this.instance_5.setTransform(416.6,59.8,0.344,0.344,0,0,0,32.2,32.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:32.1,regY:32.1,x:406,y:-90.6},40).wait(1).to({regX:31.9,regY:31.9,x:433.5,y:304},0).to({regX:32.1,regY:32.1,x:416.8,y:63.5},64).wait(1));

	// Символ 6 - копия: 2
	this.instance_6 = new lib.Символ6();
	this.instance_6.parent = this;
	this.instance_6.setTransform(559.5,7.4,0.344,0.344,0,0,0,32.4,32.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:32.1,x:552.1,y:-100.6},28).wait(1).to({regY:31.9,x:579.6,y:304},0).to({regX:32.2,regY:32.1,x:559.7,y:11.2},76).wait(1));

	// Символ 6 - копия
	this.instance_7 = new lib.Символ6();
	this.instance_7.parent = this;
	this.instance_7.setTransform(361.5,-41.7,0.344,0.344,0,0,0,32.4,31.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:32.1,regY:32.1,x:358,y:-90.6},13).wait(1).to({regY:31.9,x:385.5,y:304},0).to({regX:32.2,x:361.7,y:-37.9},91).wait(1));

	// Символ 6
	this.instance_8 = new lib.Символ6();
	this.instance_8.parent = this;
	this.instance_8.setTransform(842.2,304,0.344,0.344,0,0,0,32.1,31.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regY:32.1,x:814.7,y:-90.6},105).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(310.3,-90.3,542.9,405.3);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// girl1_03.png
	this.instance = new lib.Символ24();
	this.instance.parent = this;
	this.instance.setTransform(-1.6,13.2,1,1,-2.5,0,0,28.4,90.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:28.3,rotation:-7.7,x:-1.7,y:13.3},11).wait(16).to({regX:28.4,rotation:-2.5,x:-1.6,y:13.2},12).wait(1));

	// girl1_06.png
	this.instance_1 = new lib.Символ20();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-61.7,297.5,1,1,0,0,0,26.3,247.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:26.2,regY:247.6,rotation:0.9,x:-61.8,y:297.6},19).to({regX:26.3,regY:247.5,rotation:0,x:-61.7,y:297.5},20).wait(1));

	// girl1_13.png
	this.instance_2 = new lib.Символ23();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-83,154.7,1,1,0.9,0,0,84,113.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-1},19).to({rotation:0.9},20).wait(1));

	// girl1_09.png
	this.instance_3 = new lib.Символ22();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-17.5,116.5,1,1,0,0,0,78.5,116.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-167.8,-80.6,253.3,387.7);


(lib.sprite112 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol16();
	this.instance.parent = this;
	this.instance.setTransform(1.5,21.8,0.85,0.85,0,0,0,30,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[1.5,21.7,1.5,21.3,1.5,20.9,1.5,15.3,5.6,11.2,9.7,7.1,15.3,7.1,21.1,7.1,25.2,11.2,29.3,15.3,29.3,20.9,29.3,26.7,25.2,30.8,21.1,34.9,15.3,34.9,9.7,34.9,5.6,30.8,3.3,28.5,2.3,25.7]}},29).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24,-3.7,51,51);


(lib.Символ69 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ36();
	this.instance.parent = this;
	this.instance.setTransform(137.8,76,1,1,0,0,0,74.2,76);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(26.7,0,185.5,191.7);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ14();
	this.instance.parent = this;
	this.instance.setTransform(139,139,1,1,0,0,0,139,139);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.91,scaleY:0.94,x:126.5,y:148.1},9).to({scaleX:1,scaleY:1,x:139,y:139},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,277.9,277.9);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.parent = this;
	this.instance.setTransform(83.1,-251.9,1,1,0,0,0,139,139);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(111).to({x:113.1,y:-591.9},70).wait(92).to({alpha:0.031},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.9,-390.9,277.9,277.9);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ83();
	this.instance.parent = this;
	this.instance.setTransform(113.1,230.1,1,1,0,0,0,111.6,149.8);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ83(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(245.5,205.5,1,1,0,0,0,78.5,128.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.8,-3.6,253.3,387.7);


(lib.sprite113 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.sprite112();
	this.instance.parent = this;
	this.instance.setTransform(11.6,6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30));

	// Layer 1
	this.instance_1 = new lib.sprite110();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-8.7,-8.7,1.316,1.316);
	this.instance_1.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.5,-10.6,78.2,76.3);


(lib.Символ75 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.parent = this;
	this.instance.setTransform(100.3,154.8,0.79,0.79,0,0,0,126.1,192.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.298)").s().p("AgGBGQgJgHgDgGQgEgHABgOQABgLAHgVIAQg1IABgCIAEgEIAEgHIADgGIACgEIAFgFQgMAigEATIgEAcQgCAdACAtIgIgIg");
	this.shape.setTransform(120.5,56);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,200.2,306.3);


(lib.Символ73 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ75();
	this.instance.parent = this;
	this.instance.setTransform(370.2,194.2,1,1,0,0,0,100,153.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ74();
	this.instance_1.parent = this;
	this.instance_1.setTransform(320,179.5,1,1,0,0,0,320,179.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#F7F0FA"],[0,1],-76.5,0,76.6,0).s().p("Ar8fVMAAAg+pIX5AAMAAAA+pg");
	this.shape.setTransform(-65.5,185.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#C5B7C1","#F7F0FA"],[0,1],-94.5,0,94.5,0).s().p("AuwfLMAAAg+VIdhAAMAAAA+Vg");
	this.shape_1.setTransform(721.7,188.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-142,-15,958.3,403.1);


(lib.Символ70 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ69();
	this.instance.parent = this;
	this.instance.setTransform(106,95.9,1,1,0,0,0,106,95.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:110.4},14,cjs.Ease.get(-1)).to({y:125.9},15,cjs.Ease.get(1)).to({y:110.9},15,cjs.Ease.get(-1)).to({y:95.9},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(26.7,0,185.5,191.7);


(lib.Символ28копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ70();
	this.instance.parent = this;
	this.instance.setTransform(51.4,35,1,1,0,0,0,106,95.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ68();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-32.5,180.6,1,1,0,0,0,56.5,262.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Символ 30
	this.instance_2 = new lib.Символ31();
	this.instance_2.parent = this;
	this.instance_2.setTransform(29.8,30.1,1,1,0,0,0,24.4,24.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Символ 30
	this.instance_3 = new lib.Символ30();
	this.instance_3.parent = this;
	this.instance_3.setTransform(30,30,1,1,0,0,0,30,30);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Символ 29
	this.instance_4 = new lib.Символ29();
	this.instance_4.parent = this;
	this.instance_4.setTransform(29.8,29.7,1,1,0,0,0,5.2,5.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89,-82,246.5,525.3);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Слой 1
	this.instance = new lib.Символ33();
	this.instance.parent = this;
	this.instance.setTransform(30,30,1,1,0,0,0,30,30);

	this.instance_1 = new lib.Символ28копия();
	this.instance_1.parent = this;
	this.instance_1.setTransform(30,30,1,1,0,0,0,30,30);

	this.instance_2 = new lib.Символ28копия2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(30,30,1,1,0,0,0,30,30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,62,62);


(lib.Символ9_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance_1 = new lib.Symbol26();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-28.9,59.9,1,1,0,0,0,66.8,11.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.cir = new lib.sprite113();
	this.cir.parent = this;
	this.cir.setTransform(-28.5,24.8,0.638,0.638,0,0,0,27.5,27.5);

	this.timeline.addTween(cjs.Tween.get(this.cir).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.7,0.4,133.7,71.1);


(lib.Символ72 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(6));

	// Слой 1
	this.instance = new lib.Символ25();
	this.instance.parent = this;
	this.instance.setTransform(55.7,51.9,1,1,-19.5,0,0,45.2,39.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:225.7},4).to({x:55.7},5).wait(1));

	// Слой 4
	this.instance_1 = new lib.Анимация3("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-184.5,229,0.843,0.843);

	this.instance_2 = new lib.Анимация4("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-183.5,320);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true,scaleX:1,scaleY:1,x:-183.5,y:320},4).to({_off:false,scaleX:0.84,scaleY:0.84,x:-184.5,y:229},5).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:false},4).to({_off:true,scaleX:0.84,scaleY:0.84,x:-184.5,y:229},5).wait(1));

	// Слой 3
	this.instance_3 = new lib.Символ9_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-163.7,201.1,0.842,0.842);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:320.1},4).to({y:201.1},5).wait(1));

	// Слой 5
	this.instance_4 = new lib.Символ79();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-188.2,230.7,1,1.052,0,0,0,280.6,38.6);
	this.instance_4.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleY:1,y:342.7,alpha:1},4).to({scaleY:1.05,y:230.7,alpha:0.699},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-468.8,0,579.9,271.3);


// stage content:



(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		stage.canvas.style.cursor = "none";
		this.kur.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
			this.kur.x = stage.mouseX;
			this.kur.y = stage.mouseY;
		}
		//Чтобы восстановить курсор мыши по умолчанию, раскомментируйте следующие строки:
		//this.removeEventListener("tick", fl_CustomMouseCursor.bind(this));
		//stage.removeChild(kur);
		//stage.canvas.style.cursor = "default";
		
		
		
		
		this.b1.addEventListener("mouseover", fl_ClickToGoToAndPlayFromFrame_2.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_2()
		{
		this.kur.gotoAndStop(1);
		
		}
		
		
		this.b2.addEventListener("mouseover", fl_ClickToGoToAndPlayFromFrame_3.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_3()
		{
		this.kur.gotoAndStop(2);
		}
		
		
		
		
		var _this = this;
		
		_this.kur.visible=false;
		_this.kkk.visible=true;
		
		stage.canvas.onmouseover = fl_MouseOverHandler_8;
		
		function fl_MouseOverHandler_8()
		    {
				_this.kur.visible=true;
				_this.kkk.visible=false;
				_this.str.gotoAndPlay(1);
		    }
		
		stage.canvas.onmouseout = fl_MouseOutHandler_9;
		
		
		      function fl_MouseOutHandler_9()
		    {
				_this.kur.visible=false;
				_this.kkk.visible=true;
				_this.str.gotoAndPlay(5);
		
		    }
			
			
		this.addEventListener("tick", fl_CustomMouseCursor1.bind(this));
		
		function fl_CustomMouseCursor1() {
		
		this.fon.x = - stage.mouseX / 30;
		}
		
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// txt
	this.instance = new lib.Символ32();
	this.instance.parent = this;
	this.instance.setTransform(146.8,61.5,0.769,0.769,0,0,0,160.8,65.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 11
	this.kkk = new lib.Символ71();
	this.kkk.parent = this;
	this.kkk.setTransform(307.6,142.1,1,1,0,0,0,30,30);

	this.timeline.addTween(cjs.Tween.get(this.kkk).wait(1));

	// Слой 9
	this.kur = new lib.Символ27();
	this.kur.parent = this;
	this.kur.setTransform(-112.9,174.1,1,1,0,0,0,30,30);

	this.timeline.addTween(cjs.Tween.get(this.kur).wait(1));

	// Символ 40
	this.b1 = new lib.Символ45();
	this.b1.parent = this;
	this.b1.setTransform(48.7,256.2,1,1,0,0,0,39.9,39.9);
	new cjs.ButtonHelper(this.b1, 0, 1, 1);

	this.b2 = new lib.Символ46();
	this.b2.parent = this;
	this.b2.setTransform(589.2,255.1,1,1,0,0,0,39.9,39.9);
	new cjs.ButtonHelper(this.b2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.b2},{t:this.b1}]}).wait(1));

	// Слой 4
	this.str = new lib.Символ72();
	this.str.parent = this;
	this.str.setTransform(563.3,76.9,1,1,0,0,0,55.5,51.7);

	this.timeline.addTween(cjs.Tween.get(this.str).wait(1));

	// Слой 8
	this.instance_1 = new lib.Символ11();
	this.instance_1.parent = this;
	this.instance_1.setTransform(362,839,1,1,0,0,0,105,105);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 7
	this.instance_2 = new lib.Символ3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-150,222,1,1,0,0,0,105,193);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 5
	this.text = new cjs.Text("", "57px 'Roboto-Black'", "#FFFFFF");
	this.text.lineHeight = 69;
	this.text.parent = this;
	this.text.setTransform(37.1,61.2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Egx5gXzMBjzAAAMAAAAvnMhjzAAAg");
	this.shape.setTransform(320.1,152.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.fon = new lib.Символ73();
	this.fon.parent = this;
	this.fon.setTransform(-31,0,1,1,0,0,0,-51,43);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(176.1,91.2,980.2,682.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;