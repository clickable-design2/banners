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
		{src:"images/background2.jpg?1479900176455", id:"background2"},
		{src:"images/girl0.png?1479900176455", id:"girl0"},
		{src:"images/girl1.png?1479900176455", id:"girl1"},
		{src:"images/girl2.png?1479900176455", id:"girl2"},
		{src:"images/girl3.png?1479900176455", id:"girl3"},
		{src:"images/girl4.png?1479900176455", id:"girl4"},
		{src:"images/girl5.png?1479900176455", id:"girl5"},
		{src:"images/girl6.png?1479900176455", id:"girl6"},
		{src:"images/girl7.png?1479900176455", id:"girl7"},
		{src:"images/girl8.png?1479900176455", id:"girl8"},
		{src:"images/girl9.png?1479900176455", id:"girl9"},
		{src:"images/mouse.png?1479900176455", id:"mouse"},
		{src:"images/pautina.png?1479900176455", id:"pautina"},
		{src:"images/spider0.png?1479900176455", id:"spider0"},
		{src:"images/spider1.png?1479900176455", id:"spider1"},
		{src:"images/spider3.png?1479900176455", id:"spider3"},
		{src:"images/spider4.png?1479900176455", id:"spider4"},
		{src:"images/spider5.png?1479900176455", id:"spider5"},
		{src:"images/tapok.png?1479900176455", id:"tapok"}
	]
};



lib.ssMetadata = [];


// symbols:



(lib.background2 = function() {
	this.initialize(img.background2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,400);


(lib.girl0 = function() {
	this.initialize(img.girl0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,302,127);


(lib.girl1 = function() {
	this.initialize(img.girl1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,219,196);


(lib.girl2 = function() {
	this.initialize(img.girl2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,52,79);


(lib.girl3 = function() {
	this.initialize(img.girl3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,195,96);


(lib.girl4 = function() {
	this.initialize(img.girl4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,71,183);


(lib.girl5 = function() {
	this.initialize(img.girl5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,193,172);


(lib.girl6 = function() {
	this.initialize(img.girl6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,41,91);


(lib.girl7 = function() {
	this.initialize(img.girl7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,71);


(lib.girl8 = function() {
	this.initialize(img.girl8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,131,132);


(lib.girl9 = function() {
	this.initialize(img.girl9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,179,102);


(lib.mouse = function() {
	this.initialize(img.mouse);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,46,58);


(lib.pautina = function() {
	this.initialize(img.pautina);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,596);


(lib.spider0 = function() {
	this.initialize(img.spider0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,70);


(lib.spider1 = function() {
	this.initialize(img.spider1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,28,39);


(lib.spider3 = function() {
	this.initialize(img.spider3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,34,21);


(lib.spider4 = function() {
	this.initialize(img.spider4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,14,46);


(lib.spider5 = function() {
	this.initialize(img.spider5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,32,23);


(lib.tapok = function() {
	this.initialize(img.tapok);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,99,140);


(lib.Символ69 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("ABaBHQgCgBgCgCQgCgCAAgEQAAgEAEgJIAJgTIgIgVIgQgiQgJgVgCgDQgDgEgHgCQgGgCAAgCQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAIAZAAIAGAAIADACQACADAHASIAQAnIACACIABgCIANgiIABgKQAAgJgHgCQgHgCgBgDQAAAAAAgBQABAAAAAAQAAgBAAAAQABAAAAAAIBgAAQAIAAACADQABADAAAWQAAAFgDAAQgBAAgDgIQgCgEgDgDQgCgDgFgCIgFgBIgJAAIgHABQgBABgBAAQAAAAgBABQAAAAAAABQgBAAAAABQgCAFAAAXIAAAJQAAAAAAAAQABAAAAAAQAAABAAAAQABAAAAAAIACgBIABgCIAEgHIAVAAQAFgBAFACQAFACAEAEQAKAJAAAOQAAAHgDAGQgCAHgGAFQgGAHgIACQgHAEgJAAIggAAQgBAAgBgBQAAAAgBAAQAAAAgBgBQAAAAgBgBQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAAAgBIAAhXQAAgFgDgEIgBgBQgCAIgIAUIgbBEIgDALQAAAHAIACQAHACAAABQAAABAAABQAAAAAAABQgBAAAAAAQAAAAgBABgACwgBQgDABAAADIABAfIABAEQACACAEAAIAIAAQAIAAAHgHQADgDACgEIABgGIAAgGQAAgHgFgGIgGgDQgEgCgEAAIgKAAQgBAAAAABQgBAAAAAAQgBAAgBABQAAAAgBABgAlWBHQgDgBgCgCQgCgCAAgEQAAgEAEgJIAJgTIgIgVIgPgiQgJgVgDgDQgDgEgGgCQgGgCgBgCQAAAAAAgBQABAAAAAAQABgBAAAAQABAAABAAIAYAAIAGAAIADACQACADAIASIAQAnIABACIACgCIAMgiIACgKQAAgJgIgCQgHgCAAgDQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAABAAIAzAAQAHAAACACQABACAAAOIAAAZQAAAAAAABQAAAAABAAQAAABAAAAQAAAAABAAIAHgHQALgLAGgIQAFgGAAgEQAAgCgIgDQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBAAgBIAAgBIAcAAQABAAABAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAADgDAEQgDAFgGAFIgZAZIACABIAHABQAFAAAEADIAFAEIAQAfQAGALADAEIAIAEQAFABAAACIgCADIgFABIgVAAIgFgBIgDgDQgBgBgJgXIgHgSIgEgGIgEgDIgDgBIgDAAQgGAAgDABQgCACAAABIAAATQAAAIACAHIABAEIACAEQACACAFABQAFACABACQAAABAAAAQgBABAAAAQAAAAgBAAQAAABgBAAIgdAAQgDAAgCgDQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAhXQAAgFgDgEIgCgBQgCAIgIAUIgbBEIgCALQAAAHAHACQAIACAAABQAAABAAABQAAAAgBABQAAAAAAAAQgBAAAAABgAGuAjQgHgJgEgKQgEgKAAgKQAAgXAOgRQAQgSAbAAQANgBAKAFQALAEAIAJQAOAPAAAaQAAALgEALQgEAKgHAIQgIAJgKAEQgKAEgNAAQgZAAgRgSgAHJgxQgFADgFAFQgJALAAATQAAALACAIQADAJAFAJQAFAIAHAEQAGAFAJAAQAGAAAGgDQAFgDAFgFQAEgFADgIQACgIAAgJQAAgJgCgJQgDgLgFgHQgKgSgRAAQgGAAgGADgAiuAjQgHgJgEgKQgEgKAAgKQAAgXAOgRQAQgSAbAAQANgBAKAFQALAEAIAJQAOAPAAAaQAAALgEALQgEAKgHAIQgIAJgKAEQgKAEgNAAQgZAAgRgSgAiTgxQgFADgFAFQgJALAAATQAAALACAIQADAJAFAJQAFAIAHAEQAGAFAJAAQAGAAAGgDQAFgDAFgFQAEgFADgIQACgIAAgJQAAgJgCgJQgDgLgFgHQgKgSgRAAQgGAAgGADgAF0A0QgDAAgCgDQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAhQQAAgBAAAAQABgBAAAAQABgBAAAAQABAAABgBIAGgDIABgCQAAgBAAAAQAAAAgBgBQAAAAAAAAQAAAAgBAAIgJAAIgKABIgJADIgNAJIgCgBIAAgBIACgKIAGgPQABgCADAAIA2ACQAIAAAEgDIAIgHQABABAAAAQAAAAABAAQAAAAAAABQAAAAAAABIgDAKIgFANIgBABIgSgBQgEAAgBAGIAAA5QAAAIABAHIACAEIACAEQACACAFABQAFACAAACQAAABAAAAQAAABAAAAQgBAAAAAAQAAABgBAAgAE7A0QAAAAgBgBQgBAAAAAAQgBAAAAAAQgBgBAAAAIgCgFIAAhKIgzBKIgEAFIgEACIgHAAQAAAAgBgBQgBAAAAAAQgBAAAAgBQgBAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAhXQAAgFgDgEQgDgDgDgBIgEgCQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBIABgCIACAAIAZAAQADAAACACIACAEIAABLIAzhOQABgDADAAIAKAAQADAAACACIACAEIAABYQAAAFADADQACADAEABIADACIACACIgBACIgDABgAhCA0QgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAhXQAAgFgDgEQgDgDgDgBIgEgCQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBIABgCIACAAIAzAAQAHAAAGABQAFACAEAEQAEADACAEQACAEAAAEQAAAHgDAEQgBAEgEADQgDADgFADIgHACIAJABIAGABQADABADACIAEAEIADAFQACAEAAAFQAAAQgJALQgGAIgLADQgKAEgOAAgAgxgBQgCABAAAFQAAAaABAFQABADAGAAQANAAAHgFQAHgHAAgLQAAgGgBgEQgCgEgEgCQgFgDgJAAQgJAAgDACgAgygyQAAABAAAAQgBAAAAABQAAAAAAABQAAABAAABIAAAmQAAAAAAAAQAAAAAAAAQAAABABAAQAAAAABAAIABgBIACgCIAEgHIACAAQAGgBAEgEQADgCABgDQABgEAAgEQAAgHgEgEIgGgEIgIgBIgHAAgAmSA0IgGgBIgEgEIgHgUQgCgGgBgBIgdAAQAAAAgBABQgBAAAAAAQgBAAAAABQgBAAAAAAQgCADgCAFIgCAHQAAAFAHADQAHACABACQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBABIg0AAQgDAAgCgDIgCgEIABhhQAAAAAAAAQAAAAgBAAQAAgBAAAAQgBAAAAAAIgBABIgCACIgCAFQgCADgCAAIghAAIgFAAIgCADIAABDIACALIADADQABACAGABQAFACAAACQAAABAAAAQAAABAAAAQgBAAAAAAQAAABgBAAIgeAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAgBgBAAQAAgBAAAAQAAgBAAgBIAAhXQAAgFgDgEQgDgDgEgBIgDgCQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBIABgCIACAAIBhAAQADAAACACQAAABABAAQAAABAAAAQABABAAAAQAAAAAAABIAABSIACAMIADADIAAABQAAgGAJgaIATgtQAJgXACgDIACgBIAHAAIACACQAIARAGATIALAbIAOAhQACADAEADIAFACIAEABIACADQAAAAAAABQAAAAgBAAQAAAAAAABQAAAAgBAAIgFABgAm5gYIgGARQgHAQAAADIAAABIABABIADgDIAEgEIABgBIAMAAIAEgBQAAAAAAAAQABAAAAAAQAAgBAAAAQAAAAAAgBIAAgDIgFgNQgGgOgBABgAI7AnQgFgEAAgGQAAgGAFgEQAEgEAFAAQAGAAAEAEQAEADAAAHQAAAHgEADQgEAEgGAAQgFAAgEgEgAI7gRQgFgEAAgGQAAgHAFgEQAEgDAFgBQAGABAEADQAEAEAAAHQAAAFgEAFQgEAEgGgBQgFABgEgEg");
	this.shape.setTransform(59.5,7.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,119,14.2);


(lib.Символ63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF66CC").s().p("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");
	this.shape.setTransform(258.1,169.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.1,0,574.6,339.4);


(lib.Символ59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("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");
	this.shape.setTransform(100.4,18.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,200.7,37.6);


(lib.Символ58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("ACDChIgpAAQgIAAgFgFQgEgFgCgHIAAgkIAAixIiNDVIgMANIgLAEIgSAAQgIAAgFgGQgGgFAAgGIAAgkIAAjXQAAgOgHgJQgIgKgKgEIgJgCQgFgCAAgFIADgFIAHgCIAdAAIApAAQAIAAAGAGQAFAFAAAGIAAAkIAAC1ICNjgQAEgIAHgCIAeAAQAIAAAFAGQAGAFAAAGIAAAkIAADXQAAANAHAKQAIAKAKADIAJAEQAEACABADQAAAEgDACIgHACg");
	this.shape.setTransform(172,29.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("ABZChIgEAAQgIAAgGgFQgEgFgBgHIAAgkIAAgpIAAg2IAAgXQAAgEgGgBIgCACIgFAFIgHALQgFAKgFAAIhcAAIgNABIgGADIAAA0QAAAXAEASIADANIAHAMQAGAFAPAEQAOADAAAGQABAHgHABIhPAAIgGAAQgIAAgFgGQgGgFAAgGIAAgkIABjXQABgMgJgLQgHgKgLgEIgJgCQgEgCAAgFQAAgHAKAAIAdAAIApAAQAIAAAFAGQAGAFAAAGIAAAkIgCBKIAAAZQAAAEAFABIAFgCIAEgFIAKgXIAIAAIBcAAIAMgDQAHgCAAgFIAAgJIAAg3QAAgNgHgKQgIgKgKgEIgKgCQgEgCgBgFQAAgHALAAIAdAAIApAAQAHAAAGAGQAGAFgBAGIAACgIAAA0QAAAWAFATIACANIAJAMQAEAFAPAEQAPADAAAGQAAAHgHABg");
	this.shape_1.setTransform(141.2,29.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC00").s().p("ABZChIgFAAQgIAAgGgGQgFgFAAgGIAAgkIABjXIAAgZQABgDgGgCIgDACIgFAGIgHANQgFAJgFAAIhcAAQgGAAgGADQgGADgBAEIAAByIAABAIAAANIAEARIAEAOIAHAJQAEAFAQAFQANADACAGQAAAHgHABIhOAAIgGAAQgIAAgFgFQgEgFgBgHIAAgkIAAjXQAAgOgIgJQgHgKgLgEIgJgCQgFgCAAgFQAAgDADgCIAHgCIAeAAIDxAAQAIAAAFAGQAGAFAAAGIAACgIAAA0IAAAYIADARIAFAPIAFAJQAGAFAPAFQANADABAGQABAHgGABg");
	this.shape_2.setTransform(109.6,29.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC00").s().p("AheDDIAAlDIC0AAIAAAiIiGAAIAABmIBvAAIAAAiIhvAAIAAB2ICPAAIAAAjgAAZicIAAgmIAlAAIAAAmgAg8icIAAgmIAmAAIAAAmg");
	this.shape_3.setTransform(81.6,26);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC00").s().p("AA+ChQgFAAgEgFQgIgMgbhJIgrh5QgDgHgDgBQgCAAgFAIQgKAUgXA9QgWA/gBASIADAKIAFAIQAFAFAVAGQALAEABAGQAAAKgLAAIhQAAQgHAAgEgEIgCgIQAAgGAWhDIAxiBIAWg8IARgqQADgFAGAAIAWAAQADAAAFAFQADAKAaBAIAvB0QAaBBAPAWIAHAJIAJAHIAPAGQAHADABAFQABAJgSAAg");
	this.shape_4.setTransform(55.7,29.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCC00").s().p("ACjChQgRAAgfgFIgSgCIgTAAIgjACIgpAFIgmgFIgYgCIgNAAQgbAAgRAEIgdADQgRAAgGgGQgEgFAAgXIAAjqQAAgOgHgJQgIgKgKgEIgKgCQgEgCAAgFQAAgHAKAAIAdAAIApAAQAHAAAGAGQAGAFAAAGIAADtIAAAhQAAAEAFABQAEAAAFgHIAIgMIAFgKIAQAEIAQACQALAAAFgJQAEgJAAgXIAAivQAAgOgIgJQgHgKgKgEIgJgCQgFgCAAgFQAAgDADgCIAHgCIAdAAIAnAAQAHAAAGAGQAGAFAAAGIAADtIAAAhQAAADAFACIAEgCIAFgGIAHgKIAGgLIAQAEIAQACQALAAAFgJQAEgJAAgXIAAivQAAgOgHgJQgIgKgKgEIgJgCQgFgCAAgFQAAgDADgCIAHgCIAdAAIApAAQAHAAAGAGQAGAFAAAGIAACKQAAA+ADAiIAFAcQADALAEAEQAFAEAQAFQAOACAAAIQAAAIgIAAg");
	this.shape_5.setTransform(23.6,29.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,201.2,57);


(lib.Символ57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pautina();
	this.instance.parent = this;
	this.instance.setTransform(261,0,0.408,0.408,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,261,243);


(lib.Символ54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.background2();
	this.instance.parent = this;
	this.instance.setTransform(9,-27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(9,-27,750,400);


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF9900","#FF3333"],[0,1],-19.3,0,19.4,0).s().p("AjAUuMAAAgpbIGBAAMAAAApbg");
	this.shape.setTransform(36.7,132.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(17.4,0,38.7,265.3);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(2,1,1).p("Ai+2OIF9AAMAAAAsdIl9AAg");
	this.shape.setTransform(34.9,142.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(14.8,-1,40.3,286.7);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFCC00").ss(4,1,1).p("AEEgLQAAACAAABQAABqhNBMQhLBLhpABQgBAAgCAAQhqAAhNhMQhMhMAAhqQAAgBAAgCQAAgDAAgCQADhmBJhKQBNhMBqAAIAAAAQBrAABMBMQBMBMABBpgADFgLIA/AAIA8AAAAAkMIAABIAAAk/IAAAzAk/gLIA8AAIA/AAAADD6IAAg1AADFAIAAhG");
	this.shape.setTransform(32,32);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgOAQQgHgHAAgJQAAgIAHgHQAGgGAIAAQAJAAAGAGQAHAHAAAIQAAAJgHAHQgGAGgJAAQgIAAgGgGg");
	this.shape_1.setTransform(32.3,31);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,68,68.1);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tapok();
	this.instance.parent = this;
	this.instance.setTransform(23.3,0,1.244,1.244,7.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,145.4,189.2);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABHAWQgOgGgBgKQAAgJAMgJQANgIASgCQASgCANAHQANAGABAKQABAJgNAIQgMAJgTACIgGAAQgOAAgKgFgAhhAWQgTgCgOgIQgNgJAAgIQABgLAOgGQAQgGATACQAUACANAIQAOAJgBAJQAAAKgPAGQgMAFgPAAIgIgBg");
	this.shape.setTransform(14.5,2.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,29,5.6);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF00FF").ss(2,1,1).p("AC0izQAJARguBBQguBBhLBJQhJBLg7AoQg8ApgJgRQgKgRAuhCQAuhBBLhIQBJhMA7goQA9goAJARg");
	this.shape.setTransform(18.2,18.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,38.5,39.1);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF00FF").ss(2,1,1).p("AD/AAQgGAShOAOQhPANhoAAQhqAAhHgNQhHgOAGgSQAFgSBPgNQBOgOBoABQBqgBBHAOQBHANgFASg");
	this.shape.setTransform(25.6,4.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,53.2,11.2);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF00FF").ss(2,1,1).p("ADMCaQgQAKhHgjQhHglhThAQhUg+gxg1Qgwg2APgKQAQgNBHAkQBHAlBSBAQBVA9AxA2QAwA1gPANg");
	this.shape.setTransform(20.8,15.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,43.7,33.3);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FB7EFE").s().p("Ag+DdQgtAAgWgKQgagLgVgdQghgqgPg3QgOgzADg3QACgeAHgUQAJgXAcgfQAWgYARgNQAVgPAjgMQA+gUA2gBQBCABAxAdQAdARAVAZQAVAaAKAfQAGASAFAcQAIApgBAUQAAAvgaAuQgYAognAiQgeAYgbAJQgWAHgvgBg");
	this.shape.setTransform(23.7,22.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,47.4,44.4);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl7();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,71);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl0();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,302,127);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl9();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,179,102);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,219,196);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,193,172);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,71,183);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,52,79);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,195,96);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl6();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,41,91);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgyIAaEMAAAg0HMBkQAAAMAAAA0Hg");
	this.shape.setTransform(320.9,166.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,641.8,333.7);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.spider1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,28,39);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.spider3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,34,21);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.spider4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,14,46);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.spider5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,32,23);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.spider0();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,59,70);


(lib.Символ21_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance_1 = new lib.mouse();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,46,58);


(lib.Символ20_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACtBXIAAitIAcAAIAABCIANAAQALAAAHACQAHADAGAGQAFAFACAHQADAHAAALIAAAXQAAAKgDAIQgCAJgFAFQgGAGgHACQgHADgLAAgADJA+IANAAQAHAAADgDQAEgFgBgJIAAgaQABgJgEgEQgDgDgHAAIgNAAgAAYBXIAAitIAbAAIAACUIAYAAIAAiUIAbAAIAACUIAYAAIAAiUIAcAAIAACtgAgWBXIAAitIAaAAIAACtgAh3BXIAAitIAcAAIAABCIAMAAQALAAAIACQAHADAFAGQAGAFACAHQADAHAAALIAAAXQAAAKgDAIQgCAJgGAFQgFAGgHACQgIADgLAAgAhbA+IAMAAQAIAAACgDQAEgFAAgJIAAgaQAAgJgEgEQgCgDgIAAIgMAAgAilBXIAAh8IgTB8IgaAAIgVh6IAAB6IgXAAIAAitIAmAAIAUB6IATh6IAmAAIAACtg");
	this.shape.setTransform(25.6,8.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,51.1,17.5);


(lib.Символ19_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACvBjIAAgYIg7AAIAAAYIgbAAIAAgwIAMAAIAEgKIACgNIAGh+IBNAAIAACVIAMAAIAAAwgACGAcQgBAJgCAGQgBAEgDAEIAkAAIAAh8IgYAAgAEYBLIAAh5IgiB5IgcAAIAAitIAYAAIAABtIAghtIAfAAIAACtgAAEBLIAAitIBKAAIAAAZIgvAAIAAAxIAlAAIAAAYIglAAIAAAyIAvAAIAAAZgAhgBLIAAitIApAAQALAAAIADQAHACAGAFQAFAFACAIQACAHABAKIAAAHQgBANgEAJQgFAJgIAEQAFACAEAEQAEADADAFQAEAHAAAOIAAAPQAAAKgCAIQgDAHgFAGQgGAFgIADQgHACgLAAgAhEAyIAPAAQAHAAAEgEQADgEAAgJIAAgPQAAgMgDgFQgFgCgJAAIgMAAgAhEgbIAKAAQAJAAADgEQAFgEAAgKIAAgKQAAgJgEgEQgDgFgHAAIgNAAgAiIBLIgFgfIgiAAIgFAfIgYAAIAcitIAnAAIAcCtgAiRAUIgNhXIgNBXIAaAAgAj2BLIAAhLIgeAAIAABLIgcAAIAAitIAcAAIAABLIAeAAIAAhLIAdAAIAACtg");
	this.shape.setTransform(30.6,9.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,61.1,19.9);


(lib.Анимация13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(-68,-1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.2,-123.5,20.5,245);


(lib.Анимация15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("Ai4WPMAAAgsdIFxAAMAAAAsdg");
	this.shape.setTransform(8.4,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.1,-142.3,37.1,284.7);


(lib.Анимация13_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF99").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.2,-122.5,20.5,245);


(lib.Анимация2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl8();
	this.instance.parent = this;
	this.instance.setTransform(-65.5,-66);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65.5,-66,131,132);


(lib.Анимация1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl8();
	this.instance.parent = this;
	this.instance.setTransform(-65.5,-66);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65.5,-66,131,132);


(lib.Символ68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AgQA2QgJgEgHgJIgFgJIgFgJQgDgLAAgMQAAgMADgKQADgKAGgJQANgQAVgBQAVABAMAQQAGAJADAKQADALAAALQAAAZgNAQQgNASgTgBQgIABgJgFgAgHgsQgEACgEAEQgDAGgCAJQgCAJAAALQAAANACAKQABAJAEAHQAEAHAEADQAFACAEAAQAGAAAEgCQAEgEADgGQAGgNAAgaQAAgJgCgJQgCgIgEgGQgIgMgJAAQgEAAgDADg");
	this.shape.setTransform(128.6,6.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgQA2QgJgEgHgJIgFgJIgFgJQgDgLAAgMQAAgMADgKQADgKAGgJQANgQAVgBQAVABAMAQQAGAJADAKQADALAAALQAAAZgNAQQgNASgTgBQgIABgJgFgAgHgsQgEACgEAEQgDAGgCAJQgCAJAAALQAAANACAKQABAJAEAHQAEAHAEADQAFACAEAAQAGAAAEgCQAEgEADgGQAGgNAAgaQAAgJgCgJQgCgIgEgGQgIgMgJAAQgEAAgDADg");
	this.shape_1.setTransform(128.6,6.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},4).wait(1));

	// Слой 1
	this.instance = new lib.Символ69();
	this.instance.parent = this;
	this.instance.setTransform(59.5,7.1,1,1,0,0,0,59.5,7.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-3.5,134.5,21.2);


(lib.Символ62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ63();
	this.instance.parent = this;
	this.instance.setTransform(272.7,134.7,1,1,0,0,0,272.7,134.7);
	this.instance.shadow = new cjs.Shadow("rgba(255,204,255,1)",0,0,16);
	this.instance.compositeOperation = "lighter";
	this.instance.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance.cache(-31,-2,579,343);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.1,-10,598,363);


(lib.Символ61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ62();
	this.instance.parent = this;
	this.instance.setTransform(285.2,134.7,1,1,0,0,0,272.7,134.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:287.7,y:127.2,alpha:0.699},14).to({x:320.2,y:114.7,alpha:1},15).to({x:295.2,y:88.5,alpha:0.691},15).to({x:270.2,y:67.2,alpha:1},15).to({x:257.7,alpha:0.691},15).to({x:254,y:92.2,alpha:1},15).to({x:285.2,y:134.7,alpha:0.691},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.6,-10,597,363);


(lib.Символ56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ58();
	this.instance.parent = this;
	this.instance.setTransform(100.6,28.5,1,1,0,0,0,100.6,28.5);
	this.instance.shadow = new cjs.Shadow("rgba(255,153,0,1)",0,0,8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-4,213,69);


(lib.Символ55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ59();
	this.instance.parent = this;
	this.instance.setTransform(100.4,18.8,1,1,0,0,0,100.4,18.8);
	this.instance.shadow = new cjs.Shadow("rgba(255,153,0,1)",0,0,8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-4,212,49);


(lib.Символ52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ55();
	this.instance.parent = this;
	this.instance.setTransform(312.4,21.4,1,1,0,0,0,100.4,18.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:332.4},13).to({scaleX:1.1,scaleY:1.1,x:322.4,y:19.6},10,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:332.4,y:21.4},12,cjs.Ease.get(1)).to({x:312.4},14).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ56();
	this.instance_1.parent = this;
	this.instance_1.setTransform(8.1,17.6,1,1,0,0,0,11.6,28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-8.9},13).to({regY:28.4,rotation:-5},10).to({rotation:-5.5,x:-8.8},3).wait(7).to({regY:28.5,rotation:0,x:-8.9},2).to({x:8.1},14).wait(1));

	// Слой 2
	this.instance_2 = new lib.Символ57();
	this.instance_2.parent = this;
	this.instance_2.setTransform(71.4,96.5,1,1,0,0,0,130.4,121.5);
	this.instance_2.alpha = 0.34;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59,-25,480,243);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ38();
	this.instance.parent = this;
	this.instance.setTransform(32,33.3,1.211,1.211,0,0,0,32,32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.2,-7.8,82.3,82.4);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ34();
	this.instance.parent = this;
	this.instance.setTransform(20.2,171,1,1,0,0,0,20.2,171);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-12,x:20.3},9).to({rotation:0,x:20.2},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,145.4,189.2);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ25();
	this.instance.parent = this;
	this.instance.setTransform(4.5,-6.6,1,1,0,0,0,20.8,15.7);
	this.instance.shadow = new cjs.Shadow("rgba(204,0,255,1)",0,0,7);
	this.instance.compositeOperation = "lighter";
	this.instance.filters = [new cjs.BlurFilter(6, 6, 1)];
	this.instance.cache(-3,-3,48,37);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.3,-34.3,69,58);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ28();
	this.instance.parent = this;
	this.instance.setTransform(25.6,4.5,1,1,0,0,0,25.6,4.5);
	this.instance.shadow = new cjs.Shadow("rgba(204,0,255,1)",0,0,6);
	this.instance.compositeOperation = "lighter";
	this.instance.filters = [new cjs.BlurFilter(2, 2, 1)];
	this.instance.cache(-3,-3,57,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9,-9,73,31);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ29();
	this.instance.parent = this;
	this.instance.setTransform(18.2,18.6,1,1,0,0,0,18.2,18.6);
	this.instance.shadow = new cjs.Shadow("rgba(204,0,255,1)",0,0,6);
	this.instance.compositeOperation = "lighter";
	this.instance.filters = [new cjs.BlurFilter(6, 6, 1)];
	this.instance.cache(-3,-3,43,43);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-11,62,63);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.Символ30();
	this.instance.parent = this;
	this.instance.setTransform(17.3,26.2,1,1,0,0,0,4.5,-6.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:-6.8,rotation:109.3,x:19.4},9,cjs.Ease.get(-0.51)).to({regX:4.6,scaleX:1,scaleY:1,rotation:54.7,x:18.5,y:26.1},10).to({regX:4.5,regY:-6.7,scaleX:1,scaleY:1,rotation:0,x:17.3,y:26.2},10).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ26();
	this.instance_1.parent = this;
	this.instance_1.setTransform(23.5,26.8,1,1,0,0,0,18.2,18.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:180,y:26.7},9,cjs.Ease.get(-0.51)).to({regY:18.5,scaleX:1,scaleY:1,rotation:66.7},10,cjs.Ease.get(0.52)).to({regY:18.6,scaleX:1,scaleY:1,rotation:0,y:26.8},10).wait(1));

	// Слой 2
	this.instance_2 = new lib.Символ27();
	this.instance_2.parent = this;
	this.instance_2.setTransform(23.2,26.9,1,1,0,0,0,25.6,4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:19.9},9,cjs.Ease.get(-0.51)).to({y:34.4},10,cjs.Ease.get(0.52)).to({y:26.9},10).wait(1));

	// Слой 1
	this.instance_3 = new lib.Символ24();
	this.instance_3.parent = this;
	this.instance_3.setTransform(23.7,22.2,1,1,0,0,0,23.7,22.2);
	this.instance_3.alpha = 0.789;
	this.instance_3.shadow = new cjs.Shadow("rgba(204,51,204,1)",0,0,25);
	this.instance_3.compositeOperation = "lighter";
	this.instance_3.filters = [new cjs.BlurFilter(7, 7, 1)];
	this.instance_3.cache(-2,-2,51,48);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:0.7,scaleY:0.7,x:21.1,y:24.8},9,cjs.Ease.get(-0.51)).to({scaleX:0.89,scaleY:0.89,x:22.7,y:23.2},10,cjs.Ease.get(0.52)).to({scaleX:1,scaleY:1,x:23.7,y:22.2},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62,-62,179,176);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ23();
	this.instance.parent = this;
	this.instance.setTransform(43.4,4.7,1,1,0,0,0,23.7,22.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ22();
	this.instance_1.parent = this;
	this.instance_1.setTransform(50,35.5,1,1,0,0,0,50,35.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.3,-48.5,114,119.5);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ31();
	this.instance.parent = this;
	this.instance.setTransform(91.1,42.1,1,1,0,0,0,14.5,2.8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(18).to({alpha:1},1).to({alpha:0},1).wait(38).to({alpha:1},1).to({alpha:0},1).wait(39).to({alpha:1},1).to({alpha:0},1).wait(1));

	// Слой 1
	this.instance_1 = new lib.Анимация1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(65.5,66);

	this.instance_2 = new lib.Анимация2("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(65.5,66);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},101).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},101).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,131,132);


(lib.Символ10 = function(mode,startPosition,loop) {
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

	// Слой 2
	this.instance = new lib.Символ11();
	this.instance.parent = this;
	this.instance.setTransform(375,204.6,1.169,1.165,0,0,0,320.9,167);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:166.9,scaleX:1.24,scaleY:1.23,x:386.7,y:183.2,alpha:0.191},9).to({regY:167,scaleX:1.17,scaleY:1.17,x:375,y:204.6},10).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ54();
	this.instance_1.parent = this;
	this.instance_1.setTransform(375,200,1,1,0,0,0,375,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:200.1,scaleX:1.06,scaleY:1.06,x:376.2,y:202.2},9).to({regY:200,scaleX:1,scaleY:1,x:375,y:200},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-27,759,425.8);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// spider0.png
	this.instance = new lib.Символ4();
	this.instance.parent = this;
	this.instance.setTransform(306,-107.5,1,1,0,0,0,26,32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10));

	// spider5.png
	this.instance_1 = new lib.Символ6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(291.6,-115.1,1,1,0,0,0,25.1,10.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:25.2,regY:10.2,scaleX:1.03,skewX:15,skewY:29,x:291.7,y:-115.2},4).to({regX:25.1,regY:10.4,scaleX:1,skewX:0,skewY:0,x:291.6,y:-115.1},5).wait(1));

	// spider4.png
	this.instance_2 = new lib.Символ7();
	this.instance_2.parent = this;
	this.instance_2.setTransform(306,-107.5,1,1,0,0,0,2,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:2.1,regY:5.4,scaleX:1.14,skewY:-28.5,y:-107.6},4).to({regX:2,regY:5.5,scaleX:1,skewY:0,y:-107.5},5).wait(1));

	// spider3.png
	this.instance_3 = new lib.Символ8();
	this.instance_3.parent = this;
	this.instance_3.setTransform(311,-113,1,1,0,0,0,5,5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:5.1,scaleX:1.02,skewX:-15,skewY:-27.8,x:311.1,y:-112.9},4).to({regX:5,scaleX:1,skewX:0,skewY:0,x:311,y:-113},5).wait(1));

	// spider1.png
	this.instance_4 = new lib.Символ9();
	this.instance_4.parent = this;
	this.instance_4.setTransform(291.6,-115,1,1,7.7,0,0,28.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regY:-0.4,scaleX:1.02,rotation:0,skewX:10.5,skewY:22.7,x:291.7,y:-115.3},4).to({regY:-0.1,scaleX:1,rotation:7.7,skewX:0,skewY:0,x:291.6,y:-115},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(258.5,-140,81.5,73);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// girl8.png
	this.instance = new lib.Символ12();
	this.instance.parent = this;
	this.instance.setTransform(-12.8,24,1,1,0,0,0,83.2,66);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:83.1,rotation:6,x:-12.9,y:24.1},19).wait(10).to({regX:83,rotation:0.2,x:-13},10).to({regX:83.1,rotation:6,x:-12.9},20).to({regX:83.2,rotation:0,x:-12.8,y:24},30).wait(1));

	// girl7.png
	this.instance_1 = new lib.Символ13();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-16.6,144.8,1,1,0,0,0,89.4,54.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:54.9,rotation:6.2,x:-27.8,y:138.5},19).wait(10).to({regX:89.3,regY:55,rotation:13.5,x:-26.2,y:140.5},10).to({regX:89.4,regY:54.9,rotation:6.2,x:-27.8,y:138.5},20).to({regY:54.8,rotation:0,x:-16.6,y:144.8},30).wait(1));

	// girl6.png
	this.instance_2 = new lib.Символ14();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-27.5,81.7,1,1,0,0,0,20.5,20.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:8},19).wait(10).to({regX:20.4,regY:20.8,rotation:6.3,x:-27.6,y:81.8},10).to({regX:20.5,regY:20.7,rotation:8,x:-27.5,y:81.7},20).to({rotation:0},30).wait(1));

	// girl3.png
	this.instance_3 = new lib.Символ15();
	this.instance_3.parent = this;
	this.instance_3.setTransform(115.2,27.3,1,1,0,0,0,13.2,87.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:11.7,x:70.5,y:25.3},19).to({regY:87.2,rotation:14.2},10).to({regX:13.3,rotation:16.2,x:70.6},5).to({regX:13.2,rotation:12.2,x:70.5},5).to({regX:13.3,rotation:16.2,x:70.6},10).to({regX:13.2,rotation:14.2,x:70.5},10).to({regY:87.3,rotation:0,x:115.2,y:27.3},30).wait(1));

	// girl2.png
	this.instance_4 = new lib.Символ16();
	this.instance_4.parent = this;
	this.instance_4.setTransform(297,-60,1,1,0,0,0,25,20);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:25.1,regY:19.9,rotation:-3.3,x:266.3,y:-23.4},19).to({regX:25.2,rotation:3.3,y:-18.9},10).to({regY:19.8,rotation:0.1,x:267.2,y:-12.7},5).to({regY:19.9,rotation:-2.5,x:266.4,y:-26.1},5).to({regY:19.8,rotation:0.1,x:267.2,y:-12.7},10).to({regY:19.9,rotation:3.3,x:266.3,y:-18.9},10).to({regX:25,regY:20,rotation:0,x:297,y:-60},30).wait(1));

	// girl4.png
	this.instance_5 = new lib.Символ17();
	this.instance_5.parent = this;
	this.instance_5.setTransform(74.2,174.9,1,1,0,0,0,16.2,162.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regY:163,rotation:-15,x:74.3,y:175},19).wait(40).to({regY:162.9,rotation:0,x:74.2,y:174.9},30).wait(1));

	// girl5.png
	this.instance_6 = new lib.Символ18();
	this.instance_6.parent = this;
	this.instance_6.setTransform(83.5,156.2,1,1,0,0,0,27.5,158.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:-6.5,x:81.9,y:162.6},19).to({regX:27.6,rotation:-3.5,x:82},10).wait(10).to({regY:158.3,rotation:3.2,y:162.7},20).to({regX:27.5,regY:158.2,rotation:0,x:83.5,y:156.2},30).wait(1));

	// girl1.png
	this.instance_7 = new lib.Символ19();
	this.instance_7.parent = this;
	this.instance_7.setTransform(59.5,98,1,1,0,0,0,109.5,98);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(90));

	// girl9.png
	this.instance_8 = new lib.Символ20();
	this.instance_8.parent = this;
	this.instance_8.setTransform(18.4,10.1,1.021,1,0,0,11.7,8.4,51);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({skewX:-4,skewY:7.7,y:10.2},19).to({regX:8.5,scaleX:1.01,skewY:2.9,x:18.5},10).to({regX:8.6,scaleX:1.01,skewY:6,x:18.6},10).to({regX:8.4,scaleX:1.02,skewY:7.7,x:18.4},20).to({skewX:0,skewY:11.7,y:10.1},30).wait(1));

	// girl0.png
	this.instance_9 = new lib.Символ21();
	this.instance_9.parent = this;
	this.instance_9.setTransform(183,133.1,1,1,0,0,0,151,63.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117.3,-80,451.4,276.6);


(lib.Символ18_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 20
	this.instance_1 = new lib.Символ20_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(63,228.1,0.92,0.92,0,0,0,25.6,8.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Символ 19
	this.instance_2 = new lib.Символ19_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(67.6,207,0.92,0.92,0,0,0,30.6,9.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(39.5,197.9,56.2,38.2);


(lib.Символ17_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance_1 = new lib.Символ21_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(92.1,330.8,1,1,0,0,0,23,29);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({guide:{path:[92,330.7,87.8,330.3,84.7,327.3,81.3,323.9,81.3,319,81.3,314.2,84.7,310.8,86.9,308.6,89.7,307.8]}},9).to({guide:{path:[89.7,307.8,91.3,307.3,93,307.3,97.8,307.3,101.3,310.8,104.6,314.1,104.7,318.8]}},10).to({guide:{path:[104.7,318.8,104.7,319,104.7,319,104.7,323.9,101.3,327.4,97.8,330.8,93,330.8,92.5,330.8,92,330.8]}},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(69.1,301.8,46,58);


(lib.Символ16_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.instance_1 = new lib.Символ18_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(61.5,48,1,1,0,0,0,39.5,28);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// mouse
	this.instance_2 = new lib.Символ17_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-3,47.1,0.63,0.63,0,0,0,23,29.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(26,217.9,91.7,38.2);


(lib.Анимация9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация13("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(76,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.2,-122,20.5,245);


(lib.Символ70 = function(mode,startPosition,loop) {
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

	// Слой 1
	this.instance = new lib.Символ68();
	this.instance.parent = this;
	this.instance.setTransform(49.6,9,0.833,0.833,0,0,0,59.5,7.2);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).to({alpha:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,112,17.6);


(lib.Символ66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_79 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_80 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(79).call(this.frame_79).wait(1).call(this.frame_80).wait(1));

	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.parent = this;
	this.instance.setTransform(97.4,27.7,0.566,0.566,-75,0,0,299.2,-103.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:299,rotation:-30,x:87.8,y:170.7},9).to({regX:298.9,rotation:-45,y:200.6},5).to({rotation:45},1).to({x:-54,y:260.9},9).to({regY:-103.4,rotation:-127.5,x:-54.1,y:261},1).to({x:79.6,y:210.4},9).to({regX:298.8,regY:-103.3,rotation:-112.5,x:79.7,y:211},2).to({y:214.9},1).to({x:82.9,y:218.8},1).to({x:85.5,y:222.1},1).to({x:87.5,y:225.3},1).to({regY:-103.4,rotation:-127.5,x:143.2,y:235.7},9).to({x:201.1},5).to({regX:298.7,rotation:-187.5,x:201.2},1).to({y:158.7},9).to({regX:298.6,regY:-103.5,rotation:-247.5,y:158.8},1).to({x:130,y:78.6},9).to({x:91,y:13.6},5).wait(1).to({regX:299.2,rotation:-75,x:97.4,y:27.7},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(74.7,0.5,46.9,52.9);


(lib.Символ65 = function(mode,startPosition,loop) {
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

	// Слой 1
	this.mouse = new lib.Символ16_1();
	this.mouse.parent = this;
	this.mouse.setTransform(45.8,19.1,1,1,0,0,0,71.8,237);

	this.timeline.addTween(cjs.Tween.get(this.mouse).to({alpha:0},9).to({alpha:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,91.7,38.2);


(lib.Символ64 = function(mode,startPosition,loop) {
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

	// Слой 1
	this.instance = new lib.Символ61();
	this.instance.parent = this;
	this.instance.setTransform(289.4,134.7,1,1,0,0,0,272.7,134.7);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).to({alpha:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-10,598,363);


(lib.Символ60 = function(mode,startPosition,loop) {
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

	// Слой 1
	this.baba = new lib.Символ1();
	this.baba.parent = this;
	this.baba.setTransform(232.5,161,0.904,0.904,0,0,0,151.1,98);

	this.timeline.addTween(cjs.Tween.get(this.baba).to({regY:98.1,scaleX:1.09,scaleY:1.09,x:278.8,y:144.4},9).to({regY:98,scaleX:0.9,scaleY:0.9,x:232.5,y:161},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.2,0,411.1,250.1);


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ48();
	this.instance.parent = this;
	this.instance.setTransform(26.9,142.3,1,1,0,0,0,26.9,142.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60));

	// Слой 3
	this.instance_1 = new lib.Анимация9("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(28.6,142.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({startPosition:0},59).wait(1));

	// Слой 6
	this.instance_2 = new lib.Анимация13_1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(35.2,143.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({startPosition:0},59).wait(1));

	// Слой 2
	this.instance_3 = new lib.Символ50();
	this.instance_3.parent = this;
	this.instance_3.setTransform(26.9,147.7,1,1.034,0,0,0,28,132.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:132.8,scaleY:1,y:152.2},14).to({scaleY:1.04,y:146.6},15).to({scaleY:1.07,y:142.5},15).to({regY:132.7,scaleY:1.03,y:147.7},15).wait(1));

	// Слой 4
	this.instance_4 = new lib.Анимация15("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(26.9,142.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({startPosition:0},59).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(14.8,-1,40.3,286.7);


(lib.Символ42 = function(mode,startPosition,loop) {
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

	// Слой 1
	this.instance = new lib.Символ37();
	this.instance.parent = this;
	this.instance.setTransform(34.6,33,1,1,0,0,0,32,32);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).to({alpha:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.6,-6.8,82.3,82.4);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ37();
	this.instance.parent = this;
	this.instance.setTransform(34.6,33,1,1,0,0,0,32,32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.6,-6.8,82.3,82.4);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ37();
	this.instance.parent = this;
	this.instance.setTransform(-103.1,2.2,1,1,0,0,0,32,32);

	this.instance_1 = new lib.Символ40();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-113,-15.8,1,1,0,0,0,34.1,33.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},19).to({state:[{t:this.instance}]},20).to({state:[{t:this.instance}]},20).to({state:[{t:this.instance}]},20).to({state:[{t:this.instance}]},21).to({state:[{t:this.instance}]},20).to({state:[{t:this.instance}]},19).to({state:[{t:this.instance_1}]},20).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:26.3,y:61.5},19).to({x:125.5,y:25.9},20).to({x:68.7,y:-68.8},20).to({x:-107.4,y:-7.2},20).to({x:-281.7,y:69.7},21).to({x:-365,y:25.9},20).to({x:-273.8,y:-35.9},19).to({_off:true,regX:34.1,regY:33.4,x:-113,y:-15.8},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-368,-79.2,501.5,152.4);


(lib.Символ35 = function(mode,startPosition,loop) {
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

	// Слой 1
	this.instance = new lib.Символ33();
	this.instance.parent = this;
	this.instance.setTransform(72.7,94.5,1,1,0,0,0,72.7,94.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).to({alpha:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,145.4,189.2);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_174 = function() {
		this.gotoAndPlay(10);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(170).call(this.frame_174).wait(1));

	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.parent = this;
	this.instance.setTransform(-152.5,83.3,0.566,0.566,-45,0,0,299.4,-103.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({x:-125.5,y:155.3},4).to({regY:-103.5,scaleX:0.57,scaleY:0.57,rotation:0,x:23.2,y:89.7},1).to({regX:299.3,scaleX:0.57,scaleY:0.57,rotation:45},1).wait(4).to({regX:299.4,rotation:60,x:-80.3,y:76},16).wait(5).to({regY:-103.4,rotation:30,x:-105.6,y:101.3},5).to({regY:-103.5,rotation:90,x:-128.5,y:89.8},5).to({regX:299.3,regY:-103.4,x:-163.1,y:49.6},9).to({regX:299.4,regY:-103.5,x:-192.7,y:-29.6},15).to({rotation:30,x:-192.8},3).wait(7).to({regX:299,rotation:24.1,x:-274.8,y:-9.1},8).to({regX:299.1,rotation:47.1,y:-12.9},4).to({regX:299.4,rotation:45,x:-393.1,y:-25.4},8).wait(20).to({x:-232.1,y:-255.2},0).to({y:-94.2},15).to({regX:299.2,rotation:-30,x:-232.2},1).wait(7).to({y:-2.2},13).to({rotation:-75,x:-232.3,y:-2.1},1).wait(4).to({x:-25.3,y:216.4},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-174.9,52.7,51.7,56.3);


(lib.Символ51 = function(mode,startPosition,loop) {
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

	// Слой 1
	this.shkala = new lib.Символ49();
	this.shkala.parent = this;
	this.shkala.setTransform(28,142.3,1,1,0,0,0,26.9,142.3);
	this.shkala.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.shkala).to({alpha:1},9).to({alpha:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(15.9,-1,40.3,286.7);


(lib.Символ41 = function(mode,startPosition,loop) {
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

	// Слой 1
	this.instance = new lib.Символ36();
	this.instance.parent = this;
	this.instance.setTransform(163.8,56.9,1,1,0,0,0,26,26);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},9).to({alpha:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.6,-6.8,82.3,82.4);


// stage content:



(lib.LOAspider600x300 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.cursor = "none";
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		stage.canvas.addEventListener("mouseover", fl_Clickover.bind(this));
		
		function fl_Clickover()
		{
		    this.pricel1.gotoAndPlay(1);
		    this.pricel2.gotoAndPlay(1);
		    this.tapok.gotoAndPlay(1);
			this.spider.gotoAndPlay(5);
			this.shkala.gotoAndPlay(1);
			this.fon.gotoAndPlay(1);
			this.baba.gotoAndPlay(1);
			this.lights.gotoAndPlay(1);
			this.mouse.gotoAndPlay(1);
			this.spider2.gotoAndPlay(1);
			this.text2.gotoAndPlay(1);
			
			
			
			
		}
		
		stage.canvas.addEventListener("mouseout", fl_Clickout.bind(this));
		
		function fl_Clickout()
		{
		    this.pricel1.gotoAndPlay(10);
		    this.pricel2.gotoAndPlay(10);
		    this.tapok.gotoAndPlay(10);
			this.spider.gotoAndPlay(1);
			this.shkala.gotoAndPlay(10);
			this.fon.gotoAndPlay(10);
			this.baba.gotoAndPlay(10);
			this.lights.gotoAndPlay(10);
			this.mouse.gotoAndPlay(10);
			this.spider2.gotoAndPlay(81);
			this.text2.gotoAndPlay(10);
		}
		
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
		
		this.fon.x = - stage.mouseX / 15;
		
		}
		
		
		stage.canvas.style.cursor = "none";
		this.tapok.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor_2.bind(this));
		
		function fl_CustomMouseCursor_2() {
			this.tapok.x = stage.mouseX;
			
		}
		
		
		stage.canvas.style.cursor = "none";
		this.pricel2.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor_3.bind(this));
		
		function fl_CustomMouseCursor_3() {
			this.pricel2.x = stage.mouseX;
			this.pricel2.y = stage.mouseY;
		}
		;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// shkala
	this.shkala = new lib.Символ51();
	this.shkala.parent = this;
	this.shkala.setTransform(562,150.4,1,1,0,0,0,28,142.3);

	this.timeline.addTween(cjs.Tween.get(this.shkala).wait(1));

	// pricel2
	this.pricel2 = new lib.Символ42();
	this.pricel2.parent = this;
	this.pricel2.setTransform(435,195,1,1,0,0,0,79.2,73.4);

	this.timeline.addTween(cjs.Tween.get(this.pricel2).wait(1));

	// pricel1
	this.pricel1 = new lib.Символ41();
	this.pricel1.parent = this;
	this.pricel1.setTransform(353.8,155.6,1,1,0,0,0,81.9,33.4);

	this.timeline.addTween(cjs.Tween.get(this.pricel1).wait(1));

	// tapok
	this.tapok = new lib.Символ35();
	this.tapok.parent = this;
	this.tapok.setTransform(319.4,236.1,1,1,0,0,0,-52.5,94.5);

	this.timeline.addTween(cjs.Tween.get(this.tapok).wait(1));

	// text
	this.instance = new lib.Символ52();
	this.instance.parent = this;
	this.instance.setTransform(205.3,33.3,1,1,0,0,0,180,18.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// spider2
	this.spider2 = new lib.Символ66();
	this.spider2.parent = this;
	this.spider2.setTransform(262.8,327.7,1,1,180,0,0,25.9,27.6);

	this.timeline.addTween(cjs.Tween.get(this.spider2).wait(1));

	// spider
	this.spider = new lib.Символ32();
	this.spider.parent = this;
	this.spider.setTransform(338.5,220.7,0.904,0.904,0,0,0,23.1,20.7);

	this.timeline.addTween(cjs.Tween.get(this.spider).wait(1));

	// text2
	this.text2 = new lib.Символ70();
	this.text2.parent = this;
	this.text2.setTransform(61,288.4,1,1,0,0,0,56,8.8);

	this.timeline.addTween(cjs.Tween.get(this.text2).wait(1));

	// baba
	this.baba = new lib.Символ60();
	this.baba.parent = this;
	this.baba.setTransform(202.4,178.9,1,1,0,0,0,199,125);

	this.timeline.addTween(cjs.Tween.get(this.baba).wait(1));

	// mouse
	this.mouse = new lib.Символ65();
	this.mouse.parent = this;
	this.mouse.setTransform(530.4,185.9,1,1,0,0,0,31.3,-66.3);

	this.timeline.addTween(cjs.Tween.get(this.mouse).wait(1));

	// lights
	this.lights = new lib.Символ64();
	this.lights.parent = this;
	this.lights.setTransform(298.9,193.8,1,1,0,0,0,287.3,169.7);

	this.timeline.addTween(cjs.Tween.get(this.lights).wait(1));

	// fon
	this.fon = new lib.Символ10();
	this.fon.parent = this;
	this.fon.setTransform(-59.5,22,1,1,0,0,0,24.5,71);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(216,74,759,453.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;