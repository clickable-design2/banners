(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/agagag.png?1477659301895", id:"agagag"},
		{src:"images/bulletpng.png?1477659301895", id:"bulletpng"},
		{src:"images/fon.jpg?1477659301895", id:"fon"},
		{src:"images/gggo.png?1477659301895", id:"gggo"},
		{src:"images/gob1_02.png?1477659301895", id:"gob1_02"},
		{src:"images/gob1_05.png?1477659301895", id:"gob1_05"},
		{src:"images/gob1_08.png?1477659301895", id:"gob1_08"},
		{src:"images/gob1_12.png?1477659301895", id:"gob1_12"},
		{src:"images/gob1_15.png?1477659301895", id:"gob1_15"},
		{src:"images/gob1_19.png?1477659301895", id:"gob1_19"},
		{src:"images/gobl1_03.png?1477659301895", id:"gobl1_03"},
		{src:"images/gobl1_06.png?1477659301895", id:"gobl1_06"},
		{src:"images/gobl1_09.png?1477659301895", id:"gobl1_09"},
		{src:"images/gobl1_12.png?1477659301895", id:"gobl1_12"},
		{src:"images/gobl1_17.png?1477659301895", id:"gobl1_17"},
		{src:"images/ruj.png?1477659301895", id:"ruj"}
	]
};



lib.ssMetadata = [];


// symbols:



(lib.agagag = function() {
	this.initialize(img.agagag);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,18,40);


(lib.bulletpng = function() {
	this.initialize(img.bulletpng);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,33);


(lib.fon = function() {
	this.initialize(img.fon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,305);


(lib.gggo = function() {
	this.initialize(img.gggo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,106);


(lib.gob1_02 = function() {
	this.initialize(img.gob1_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,416,280);


(lib.gob1_05 = function() {
	this.initialize(img.gob1_05);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,66,53);


(lib.gob1_08 = function() {
	this.initialize(img.gob1_08);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,31,26);


(lib.gob1_12 = function() {
	this.initialize(img.gob1_12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,51,32);


(lib.gob1_15 = function() {
	this.initialize(img.gob1_15);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,39,61);


(lib.gob1_19 = function() {
	this.initialize(img.gob1_19);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,118,101);


(lib.gobl1_03 = function() {
	this.initialize(img.gobl1_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,72);


(lib.gobl1_06 = function() {
	this.initialize(img.gobl1_06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,97,219);


(lib.gobl1_09 = function() {
	this.initialize(img.gobl1_09);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,127,162);


(lib.gobl1_12 = function() {
	this.initialize(img.gobl1_12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,44,45);


(lib.gobl1_17 = function() {
	this.initialize(img.gobl1_17);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,41,39);


(lib.ruj = function() {
	this.initialize(img.ruj);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,128);


(lib.Символ108 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("AhxjsQA0gZA9gBQBJABA7AjADzhjQATAuABA1IAAAAQAAA+gZA0ABlD0QgvATg2gBQg1ABgvgTAjjCEQgjg7AAhJIAAAAQABg1ATgu");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF0000").ss(3,1,1).p("AEsAAIglAAIhEAAIAAAAQAAAvgSAmAAAkrIAAAmIAABDQA2ABAsAaAC1hJQAOAjAAAmAAADDIAABEIAAAlABLC2QgjAOgogBQgnABgjgOAjCAAIhDAAIgmAAAjCAAQAAgmAPgjAioBjQgagsAAg3IAAAAAhTivQAmgSAtgB");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.5,-31.5,63.1,63.1);


(lib.Символ107 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.gggo();
	this.instance.parent = this;
	this.instance.setTransform(-22.6,-20,0.377,0.377);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.6,-20,45.3,40);


(lib.Символ105 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.agagag();
	this.instance.parent = this;
	this.instance.setTransform(-2,-13,0.639,0.639);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-13,11.5,25.6);


(lib.Символ104 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah0A6IAAgMIg+AAIAAAMIgWAAIAAgjIALAAIAjhQIAMAAIAlBQIAKAAIAAAjgAiFAXIgPgkIgOAkIAdAAgAICAuIAAhmIAbAAIAAAfIATAAQAGAAAKADQAHADAFAGQAFAFACAGQACAFAAAHQAAAHgCAGQgCAHgFAFQgFAFgHADQgKADgGAAgAIdAXIATAAQAFAAADgEQADgEAAgFQAAgFgDgEQgDgCgFAAIgTAAgAFkAuIAAhmIAcAAIAABOIAZAAIAAhOIAbAAIAABOIAZAAIAAhOIAbAAIAABmgAEvAuIAAhmIAbAAIAABmgADJAuIAAhmIAbAAIAAAfIASAAQAHAAAKADQAHADAEAGQAFAFACAGQADAFAAAHQAAAHgDAGQgCAHgFAFQgEAFgHADQgKADgHAAgADkAXIASAAQAGAAADgEQADgEAAgFQgBgFgCgEQgEgCgFAAIgSAAgACTAuIAAguIgWAXIgDAAIgWgXIAAAuIgbAAIAAhmIAKAAIApAtIApgtIAJAAIAABmgAgTAuIAAgxIg1AxIgJAAIAAhmIAbAAIAAAzIA0gzIAIAAIAABmgAkUAuIAAhmIBBAAIAAAYIgmAAIAAAPIAjAAIAAAVIgjAAIAAATIAoAAIAAAXgAl6AuIAAhmIAtAAQAGAAAGADQAGACAFAFQAEAEACAGQADAGAAAGQAAAFgCAFQgCAFgEADQAGADADAEQADAFAAAHQAAAHgCAGQgCAGgEAFQgEAEgGADQgGACgIAAgAlgAXIAVAAQAEAAACgDQACgDAAgDQAAgEgCgCQgCgDgEAAIgVAAgAlggPIARAAQADAAADgDQACgCAAgEQAAgDgCgCQgDgDgDAAIgRAAgAmhAuIgGgNIgpAAIgGANIgaAAIAAgDIAvhkIALAAIAvBkIAAADgAmwAKIgMgZIgLAZIAXAAgAoZAuIAAgpIggAAIAAApIgbAAIAAhmIAbAAIAAAmIAgAAIAAgmIAbAAIAABmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.8,-5.8,119.6,11.6);


(lib.Символ102 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AHJBdQgJgDgIgEIgPgLQgHgHgFgHQgHgIgDgJQgFgKgCgLQgCgLAAgMQAAhBBjgiQAMAAAZAHQAJADAIAEQAHAFAHAHQAIAGAFAHQAGAIAEAJQAEAKACALQACALABALQAABChkAiQgYgCgMgFgAHcgvQgKADgGAHQgHAGgEAJQgEALAAALQAAAMAEALQAEAJAHAHQAGAGAKAEQAIADAKAAQAJAAAIgDQAJgEAHgGQAHgHAEgJQAEgLAAgMQAAgLgEgLQgEgJgHgGQgHgHgJgDQgIgEgJAAQgKAAgIAEgApEBdQgJgDgHgEIgPgLQgIgHgFgHQgGgIgEgJQgEgKgCgLQgDgLAAgMQAAhBBjgiQANAAAYAHQAJADAIAEQAIAFAHAHQAHAGAFAHQAGAIAFAJQADAKACALQADALAAALQAABChkAiQgYgCgMgFgAoxgvQgJADgGAHQgIAGgDAJQgFALAAALQAAAMAFALQADAJAIAHQAGAGAJAEQAJADAJAAQAJAAAIgDQAKgEAGgGQAHgHAEgJQAEgLABgMQgBgLgEgLQgEgJgHgGQgGgHgKgDQgIgEgJAAQgJAAgJAEgAJ2BgIAAjAIBSAAQAMABAMAEQALAFAIAIQAIAIAFAKQAEALABANQAAAJgFAJQgEAJgHAHQAMADAFAKQAHALAAANQAAANgFALQgEALgHAIQgHAIgMAFQgMAFgOAAgAKlA0IAoAAQAHAAAEgFQAEgFgBgHQABgGgEgFQgEgFgHAAIgoAAgAKlgUIAgAAQAHAAAEgFQADgFAAgFQAAgHgDgEQgFgGgGAAIggAAgAEyBgIAAhOIg8AAIAABOIgyAAIAAjAIAyAAIAABGIA8AAIAAhGIAzAAIAADAgABfBgIAAhfIhfBfIgSAAIAAjAIAwAAIAABgIBihhIASAAIAADBgAhcBgIgyhwIgxBwIgxAAIAAgHIBYi7IAVAAIBXC7IAAAHgAmXBgIAAjAICLAAIAAAsIhaAAIAAAYIAkAAQAMAAASAFQANAGAKAJQAIAIAEAKQAEALABAMQgBAMgEALQgEALgIAJQgKAKgNAEQgSAGgMAAgAlmA0IAkAAQAJAAAHgHQAEgFAAgHQABgIgGgFQgGgGgJAAIgkAAgAsMBgIAAjAIB5AAIAAAsIhGAAIAACUg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.1,-10,156.2,20.1);


(lib.Символ101 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AHJBdQgJgDgIgEIgPgLQgHgHgFgHQgHgIgDgJQgFgKgCgLQgCgLAAgMQAAhBBjgiQAMAAAZAHQAJADAIAEQAHAFAHAHQAIAGAFAHQAGAIAEAJQAEAKACALQACALABALQAABChkAiQgYgCgMgFgAHcgvQgKADgGAHQgHAGgEAJQgEALAAALQAAAMAEALQAEAJAHAHQAGAGAKAEQAIADAKAAQAJAAAIgDQAJgEAHgGQAHgHAEgJQAEgLAAgMQAAgLgEgLQgEgJgHgGQgHgHgJgDQgIgEgJAAQgKAAgIAEgApEBdQgJgDgHgEIgPgLQgIgHgFgHQgGgIgEgJQgEgKgCgLQgDgLAAgMQAAhBBjgiQANAAAYAHQAJADAIAEQAIAFAHAHQAHAGAFAHQAGAIAFAJQADAKACALQADALAAALQAABChkAiQgYgCgMgFgAoxgvQgJADgGAHQgIAGgDAJQgFALAAALQAAAMAFALQADAJAIAHQAGAGAJAEQAJADAJAAQAJAAAIgDQAKgEAGgGQAHgHAEgJQAEgLABgMQgBgLgEgLQgEgJgHgGQgGgHgKgDQgIgEgJAAQgJAAgJAEgAJ2BgIAAjAIBSAAQAMABAMAEQALAFAIAIQAIAIAFAKQAEALABANQAAAJgFAJQgEAJgHAHQAMADAFAKQAHALAAANQAAANgFALQgEALgHAIQgHAIgMAFQgMAFgOAAgAKlA0IAoAAQAHAAAEgFQAEgFgBgHQABgGgEgFQgEgFgHAAIgoAAgAKlgUIAgAAQAHAAAEgFQADgFAAgFQAAgHgDgEQgFgGgGAAIggAAgAEyBgIAAhOIg8AAIAABOIgyAAIAAjAIAyAAIAABGIA8AAIAAhGIAzAAIAADAgABfBgIAAhfIhfBfIgSAAIAAjAIAwAAIAABgIBihhIASAAIAADBgAhcBgIgyhwIgxBwIgxAAIAAgHIBYi7IAVAAIBXC7IAAAHgAmXBgIAAjAICLAAIAAAsIhaAAIAAAYIAkAAQAMAAASAFQANAGAKAJQAIAIAEAKQAEALABAMQgBAMgEALQgEALgIAJQgKAKgNAEQgSAGgMAAgAlmA0IAkAAQAJAAAHgHQAEgFAAgHQABgIgGgFQgGgGgJAAIgkAAgAsMBgIAAjAIB5AAIAAAsIhGAAIAACUg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.1,-10,156.2,20.1);


(lib.Символ100 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjmCzQgRgGgPgJQgPgJgNgMQgOgMgKgPQgMgPgHgSQgIgSgEgUQgEgWgBgXQAAh+C9g/QAXAAAvALQARAGAPAKQAPAIANAMQAOAMAKAPQAJAQAIARQAIASAEAUQAEAWAAAWQAAB/i7A/QgvgDgWgIgAjDhcQgQAHgNAMQgOANgGASQgJATABAXQgBAYAJATQAGATAOAMQANANAQAGQARAHARgBQASABARgHQAQgGANgNQANgMAIgTQAIgTAAgYQAAgXgIgTQgIgSgNgNQgNgMgQgHQgRgGgSAAQgRAAgRAGgAHRC3IAAlvIBfAAIAAC2IC7i3IAiAAIAAFwIhhAAIAAi1Ii6C1gAETC3IAAiBIgUAAQgXAAgUgCQgVgDgRgGQgQgHgOgJQgNgJgLgMQgKgKgIgPQgHgQgFgSQgFgYgEg9IAAguIBiAAIAAAuQAAA5AKATQAJAPAPAGQAQAIAbAAIATAAIAAiXIBfAAIAAFvgAoFC3IAAikIhOBSIgLAAIhNhSIAACkIhhAAIAAlwIAiAAICRCgICTigIAhAAIAAFwg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.1,-19.1,156.3,38.2);


(lib.Символ99 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AjmCzQgRgGgPgJQgPgJgNgMQgOgMgKgPQgMgPgHgSQgIgSgEgUQgEgWgBgXQAAh+C9g/QAXAAAvALQARAGAPAKQAPAIANAMQAOAMAKAPQAJAQAIARQAIASAEAUQAEAWAAAWQAAB/i7A/QgvgDgWgIgAjDhcQgQAHgNAMQgOANgGASQgJATABAXQgBAYAJATQAGATAOAMQANANAQAGQARAHARgBQASABARgHQAQgGANgNQANgMAIgTQAIgTAAgYQAAgXgIgTQgIgSgNgNQgNgMgQgHQgRgGgSAAQgRAAgRAGgAHRC3IAAlvIBfAAIAAC2IC7i3IAiAAIAAFwIhhAAIAAi1Ii6C1gAETC3IAAiBIgUAAQgXAAgUgCQgVgDgRgGQgQgHgOgJQgNgJgLgMQgKgKgIgPQgHgQgFgSQgFgYgEg9IAAguIBiAAIAAAuQAAA5AKATQAJAPAPAGQAQAIAbAAIATAAIAAiXIBfAAIAAFvgAoFC3IAAikIhOBSIgLAAIhNhSIAACkIhhAAIAAlwIAiAAICRCgICTigIAhAAIAAFwg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.1,-19.1,156.3,38.2);


(lib.Символ96 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A21Y9MAAAgx5MAsNAAAMABeAx5g");
	this.shape.setTransform(10,-12.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136.3,-172.4,292.6,319.5);


(lib.Символ93 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bulletpng();
	this.instance.parent = this;
	this.instance.setTransform(12.3,-18.7,0.424,0.424,105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.2,-22.3,24.5,44.6);


(lib.Символ92 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bulletpng();
	this.instance.parent = this;
	this.instance.setTransform(12.3,-18.7,0.424,0.424,105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.2,-22.3,24.5,44.6);


(lib.Символ91 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bulletpng();
	this.instance.parent = this;
	this.instance.setTransform(12.3,-18.7,0.424,0.424,105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.2,-22.3,24.5,44.6);


(lib.Символ89 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","#000000","rgba(0,0,0,0)"],[0,0.831,1],0.1,-34,0.1,34).s().p("Eg2OAFeIAAq7MBsdAAAIAAK7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-347.1,-35,694.2,70.1);


(lib.Символ88 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#66FF00").ss(3,1,1).p("AAAkrIAAAmIAABDIAABqAAAjCQA2ABAsAaAEsAAIglAAIhEAAIh4AAADDAAIAAAAQAAAvgSAmABLC2QgjAOgogBQgnABgjgOAAABVIAABuIAABEIAAAlAC1hJQAOAjAAAmAjCAAIhDAAIgmAAAhJAAIh5AAAioBjQgagsAAg3IAAAAQAAgmAPgjAhTivQAmgSAtgB");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#66FF00").ss(1,1,1).p("AhxjsQA0gZA9gBQBJABA7AjADzhjQAUAuAAA1IAAAAQAAA+gZA0ABlD0QgvATg2gBQg1ABgvgTAjjCEQgjg7AAhJIAAAAQAAg1AUgu");
	this.shape_1.setTransform(0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.5,-31.5,63.1,63.1);


(lib.Символ84 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AsNCsQgMgCgMgEQgMgFgLgGQgLgGgJgIQgKgJgIgKQgHgLgGgNQgGgNgDgOQgDgPAAgRQAAgQADgPQADgNAGgMQAGgNAHgLQAIgKAKgJQAJgIALgHQALgGAMgEIAYgGIAZgCQAWAAATAFQAVAGARAMQAWATAHAMQAGAKAFALQAEAMABALIhCAAQgDgIgGgIQgFgHgHgFQgIgEgJgDQgJgCgLAAQgOAAgMAFQgMAFgJAKQgJAKgEAMQgFANAAAQQAAAPAFANQAEANAJAKQAJALALAFQANAGAOABQALAAAKgDQAJgDAIgFQAIgGAFgHQAGgJACgKIBDAAQgCAOgEAMQgEAMgGAKQgGAJgIAJQgHAHgIAHQgRAMgWAGQgUAGgWAAgAKZCsIAAkGIBFAAIAAB/ICFiBIAZAAIAAEHIhGAAIAAiBIiFCCgAIQCrIAAhNIgjAAIgtBNIhMAAIAAgJIA0hUQgMgIgJgMQgIgMgFgOQgEgNgBgPQAAgMADgOQAEgOAHgMQAIgNALgJQAMgKAPgFQAQgFATAAIB0AAIAAEFgAHLgUQgHAJAAAMQAAANAHAJQAIAKANAAIAwAAIAAg/IgwAAQgOAAgHAKgAEeCrIhDiaIhECaIhCAAIAAgJIB3kAIAdAAIB3EAIAAAJgAhpCrIAAkFICiAAIAAA8IhfAAIAAAjIBXAAIAAA8IhXAAIAAAuIBjAAIAAA8gAlvCrIAAkFIB0AAQAgAAAnAeQAMAOAGASQAGARAAARQAAATgGARQgGASgMANQgMAPgSAIQgJAEgKACQgKACgMAAIgwAAIAABDgAkrArIAwAAQANAAAIgLQAHgLAAgPQABgOgIgKQgDgGgGgDQgFgDgHAAIgwAAgAocCrIAAjJIhBAAIAAg8IDEAAIAAA8IhAAAIAADJgAL5htQgMgEgJgIQgIgIgEgMQgFgMgBgQIAngEQABAKAHAGQAGAFAMAAQANAAAGgFQAIgFABgLIAnAEQAAAQgFAMQgEAMgJAIQgIAIgMAEQgMAEgQAAQgPAAgMgEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.2,-17.4,178.5,34.8);


(lib.Символ83 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AsNCsQgMgCgMgEQgMgFgLgGQgLgGgJgIQgKgJgIgKQgHgLgGgNQgGgNgDgOQgDgPAAgRQAAgQADgPQADgNAGgMQAGgNAHgLQAIgKAKgJQAJgIALgHQALgGAMgEIAYgGIAZgCQAWAAATAFQAVAGARAMQAWATAHAMQAGAKAFALQAEAMABALIhCAAQgDgIgGgIQgFgHgHgFQgIgEgJgDQgJgCgLAAQgOAAgMAFQgMAFgJAKQgJAKgEAMQgFANAAAQQAAAPAFANQAEANAJAKQAJALALAFQANAGAOABQALAAAKgDQAJgDAIgFQAIgGAFgHQAGgJACgKIBDAAQgCAOgEAMQgEAMgGAKQgGAJgIAJQgHAHgIAHQgRAMgWAGQgUAGgWAAgAKZCsIAAkGIBFAAIAAB/ICFiBIAZAAIAAEHIhGAAIAAiBIiFCCgAIQCrIAAhNIgjAAIgtBNIhMAAIAAgJIA0hUQgMgIgJgMQgIgMgFgOQgEgNgBgPQAAgMADgOQAEgOAHgMQAIgNALgJQAMgKAPgFQAQgFATAAIB0AAIAAEFgAHLgUQgHAJAAAMQAAANAHAJQAIAKANAAIAwAAIAAg/IgwAAQgOAAgHAKgAEeCrIhDiaIhECaIhCAAIAAgJIB3kAIAdAAIB3EAIAAAJgAhpCrIAAkFICiAAIAAA8IhfAAIAAAjIBXAAIAAA8IhXAAIAAAuIBjAAIAAA8gAlvCrIAAkFIB0AAQAgAAAnAeQAMAOAGASQAGARAAARQAAATgGARQgGASgMANQgMAPgSAIQgJAEgKACQgKACgMAAIgwAAIAABDgAkrArIAwAAQANAAAIgLQAHgLAAgPQABgOgIgKQgDgGgGgDQgFgDgHAAIgwAAgAocCrIAAjJIhBAAIAAg8IDEAAIAAA8IhAAAIAADJgAL5htQgMgEgJgIQgIgIgEgMQgFgMgBgQIAngEQABAKAHAGQAGAFAMAAQANAAAGgFQAIgFABgLIAnAEQAAAQgFAMQgEAMgJAIQgIAIgMAEQgMAEgQAAQgPAAgMgEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.2,-17.4,178.5,34.8);


(lib.Символ78 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ruj();
	this.instance.parent = this;
	this.instance.setTransform(-75,-64);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-64,150,128);


(lib.Символ74 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AhnGnQgIgTABgZIACg6QADjogBjfQgZgFgHgZIgBgFQhBBkhWBLQgIAIgNgDQhdgSBChQQAtg4AhhBQAVgrAOgrQAUg7AygiQAtgfAtALQAUAFgDAWQgLBEA4AKQBkASAYheQALgrAngLQAkAOAPAgQADAIAKAGQA/AjAdA8QACAFAIAFQBCAuhSAhQgpAQgbgjQgigtgngfQADBiARBdQAGAdALAbQAkBWBDBFQAxAyhAATQhiAchOg7QgOgKgRAIQhmA0AaB2QANA7gZAxQg3gLg6ABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.7,-43.3,73.4,86.7);


(lib.Символ70 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AAGC7Qg6g5gvg/QghgsgPgyQgThEgLhEQgHgvAqAhQASAPALAWQANAWAQARQAJguAngbQAZgRAZgKQBXgCAfBaIACAGQA2gngLBIQgUCJhQBwQgTAbgUAAQgQAAgQgPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.9,-20.3,35.8,40.6);


(lib.Символ69 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.gob1_05();
	this.instance.parent = this;
	this.instance.setTransform(-37.5,-30.1,1.136,1.136);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.5,-30.1,75,60.3);


(lib.Символ65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AAiB8Qg9gjgLhMQgCgLgKgIQg4g1gBhAQAAgIAKgBQA2gGAaAgQAHAKADAOQAHAxAgAmQBKABACBIQABAXgPARQgNAQgSAAQgNAAgQgKg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.9,-13.4,21.8,26.8);


(lib.Символ60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AACBEQgFgGgDgHQgLgIgEgLIAAgBIgCgCIgCgCIgCgCIAAgBIgBAAIgBgCQgPgKgCgRQgHg4A2gOQA4AMgLA5QgFAUgJALQAHAOgNAVQgFAIgHAAQgFAAgHgEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.8,-7.3,9.7,14.6);


(lib.Символ55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AB4C4QgPgEgOgIQgNgIgLgKQgLgLgIgNQgJgOgEgPQgFgQAAgRIBTAAQABARALAKQALAJATAAQATAAALgNQAKgMABgTQgBgTgJgMQgHgKgPgFQgMgDgSgCIggABIAAgLIAxhmIhqAAIAAhUIDrAAIAAAOIhFB8QAWAFAPAMQAOALAJAPQAIAMAEASQAEAQAAATQAAAYgIAXQgJAXgQASQgRATgYALQgjALgVAAQgUAAgRgEgAiXBkIgmhBIgCAAIglBBIg6AAIAAgIIBDhkIg8haIAAgIIA4AAIAgA2IACAAIAhg2IA3AAIAAAIIg8BaIBDBkIAAAIg");
	this.shape.setTransform(3.6,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.1,-18.8,57.5,37.7);


(lib.Символ54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.gob1_15();
	this.instance.parent = this;
	this.instance.setTransform(-19.5,-30.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.5,-30.5,39,61);


(lib.Символ53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AonJYIAAyvIRPAAIAASvg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AE4LxQgzgRg5gFQhwgKAmhZQAIgTASgNQB1hVg3iJQgJgWgHgaQgLglgJgkQgggoAMg7QgGgegDgeQgSgEgSAAQhdgFhJgtQhUBDAFB3QAAAIgDAGIAGAMQANAjgkARQhFAfhAgYQgigOgmAEQhYAHg9grQgNgJAJgPQAjg7BDATQADABAHgBQBzgJgPhmQgDgZgOgZQgwhYBig2QBegzBdg3QAygdgegoQgrg5gWhDQgghhhXhBQgOgLgIgSQgphXAwg/QAEgFAHAAQAuABAmANIATgDQBSgGBOgNQCdgaCKA0QALAEALAHQCtBcgLDGQgDAnAGAnQAlDziSDEQgRAXgHAcQAICSAcCIQAHAeAAAeQASBlgNBnQgJBHg3AAQgSAAgYgIgAjAqFIACAFIAFgGIgBAAIgGABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.1,-76.1,102.3,152.2);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AhsCNQgGgCgDgFQgwgEAYgoQAxhTBBhFQAqgxA2gjQADgCACAAQBLAIABBDQAAAMgJAIQhRBEhJBJQgDADgCAGQgSA0goAAQgOAAgSgIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-14.9,30.1,29.8);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("ABFCxQhIgtgnhRQgTgogqgGQgTgDgUgFQgmgNAYghQgtg2ArgvQAYgZAdgKQCLgHgLB4QAAAEgEADQAoBPBPA1QBTA4hSA0QgSAMgSAAQgRAAgRgKg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18,-18.7,36.1,37.5);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.gobl1_06();
	this.instance.parent = this;
	this.instance.setTransform(-48.5,-109.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.5,-109.5,97,219);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AnKL9IAA35IOVAAIAAX5g");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","#000000"],[0,1],0,44.1,0,-44).s().p("EgzoAICIAAwEMBnRAAAIAAQEg");
	this.shape.setTransform(9,-137.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.instance = new lib.fon();
	this.instance.parent = this;
	this.instance.setTransform(-344,-163.9,1.075,1.075);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-344,-189.4,688,353.4);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AhaD6Qg3g9gphMQgMgWgCgUQgFgIgBgLQgCgSADgPQglhVgRhbQgBgGAIgBIAKgCQAgAWAQAdQAHggAVgcQgCgXAegSQAugcAzgMQBdgFBBA7QAIAIACAMQAFAugBArQA1g5Axg5IALgOQAIAJADAKQARAWggAkIgLANIgaAuQgDAMgLANQgIAKgJAHQgGAGgJAHIgKAHIgZARQgOBKgiBIQgGANgLAKQg5A2hBAlQgGAEgFAAQgIAAgGgIgAhNBmQABAKgBgKg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.1,-25.8,52.2,51.6);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABUC4QgPgEgOgIQgNgIgLgKQgLgLgIgNQgJgOgDgPQgEgQAAgRIBRAAQABARALAKQALAJATAAQATAAALgNQAKgMABgTQgBgTgJgMQgHgKgPgFQgMgDgSgCIggABIAAgLIAxhmIhqAAIAAhUIDrAAIAAAOIhFB8QAWAFAPAMQAOALAJAPQAIAMAEASQAEAQAAATQAAAYgIAXQgJAXgQASQgRATgYALQgjALgVAAQgUAAgRgEgAhzBkIgmhBIgCAAIglBBIg6AAIAAgIIBDhkIg8haIAAgIIA4AAIAgA2IACAAIAhg2IA3AAIAAAIIg8BaIBDBkIAAAIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.1,-18.8,50.3,37.7);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#313131").s().p("AIZNRQkjhekehkQlZh3DziwQIMCoHgDWQAgAPgfAfQhQBTh0AAQg8AAhGgWgAX2LsQgPgFgQgOQh2htAhiIQAOg9A+gCQCHA2AkBBIANAKQAagaApgNQAPgdAsgdQgXhnB7g/QCwBRgwBwQBOA4iOBtQgNAKgPAFQgqAghVAbQh5AngugWIgYANQgZANgWAAQgWAAgTgOgAPMHUQgWhKAjgoQAMhNA+gtIgKADQh6AihegaQkpANjiiSQiEhWgqhmQhRgcgghdQkVAijuhTQgcARgqARQhgAohiAiQkBBbjzCAQhWAvhegEQiYgFBSh4QBniaCwhGQC/hNDHg3QCJgmCJgSIAfAOQBxhoDSA8QAQAFANgCQFpguAyDmQCrB2CyBdQBJAlBWgHQB1gKA6AcQA1gHA3ABQBUAIAsAVIAGgEQEDB8h7CBQAjBfi4BmQhCAlgngDIgNACIgKABQggAAgLgngA16nQQkijWl5APQhlAEAEhjQAEhmBkgKQJPAWG3FXQAlAdgqAdQhSA6hVAAQhhAAhlhLgAbrm9QiIiDEPgjQHaA8mECGQg2ATguAAQhIAAgxgvg");
	this.shape.setTransform(5.8,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-210.9,-87.1,433.5,174.4);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.gob1_02();
	this.instance.parent = this;
	this.instance.setTransform(-208,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-208,-140,416,280);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.gob1_08();
	this.instance.parent = this;
	this.instance.setTransform(-15.5,-13);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.5,-13,31,26);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.gob1_12();
	this.instance.parent = this;
	this.instance.setTransform(-25.5,-16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.5,-16,51,32);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.gob1_19();
	this.instance.parent = this;
	this.instance.setTransform(-59,-50.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59,-50.5,118,101);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.gobl1_09();
	this.instance.parent = this;
	this.instance.setTransform(-63.5,-81);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.5,-81,127,162);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.gobl1_12();
	this.instance.parent = this;
	this.instance.setTransform(-22,-22.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22,-22.5,44,45);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.gobl1_17();
	this.instance.parent = this;
	this.instance.setTransform(-20.5,-19.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.5,-19.5,41,39);


(lib.Символ106 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ105();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.78,y:-10},4,cjs.Ease.get(1)).to({scaleY:1,y:0},4,cjs.Ease.get(1)).wait(1).to({scaleY:0.78,y:-10},4,cjs.Ease.get(1)).to({scaleY:1,y:0},4,cjs.Ease.get(1)).wait(23));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-13,11.5,25.6);


(lib.Символ98 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ101();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},19,cjs.Ease.get(1)).to({alpha:1},20,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ102();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.1,-10,156.2,20.1);


(lib.Символ97 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ99();
	this.instance.parent = this;
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},19,cjs.Ease.get(1)).to({alpha:0},20,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ100();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.1,-19.1,156.3,38.2);


(lib.Символ85 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ88();
	this.instance.parent = this;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ81 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ108();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.87,scaleY:0.87},9,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.5,-31.5,63.1,63.1);


(lib.Символ79 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ78();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-64,150,128);


(lib.Символ75 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ74();
	this.instance.parent = this;
	this.instance.filters = [new cjs.BlurFilter(15, 15, 1)];
	this.instance.cache(-39,-45,77,91);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.7,-51.3,92,106);


(lib.Символ71 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ70();
	this.instance.parent = this;
	this.instance.filters = [new cjs.BlurFilter(11, 11, 1)];
	this.instance.cache(-20,-22,40,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.9,-26.3,50,56);


(lib.Символ66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ65();
	this.instance.parent = this;
	this.instance.filters = [new cjs.BlurFilter(10, 10, 1)];
	this.instance.cache(-13,-15,26,31);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.9,-18.4,34,40);


(lib.Символ61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ60();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.8,-7.3,9.7,14.6);


(lib.Символ58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ83();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.484},15,cjs.Ease.get(-1)).to({alpha:0},14,cjs.Ease.get(1)).to({alpha:0.5},15,cjs.Ease.get(-1)).to({alpha:1},15,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ84();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60));

	// Слой 2
	this.instance_2 = new lib.Символ89();
	this.instance_2.parent = this;
	this.instance_2.setTransform(7.3,1.2);
	this.instance_2.alpha = 0.609;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-339.8,-33.8,694.2,70.1);


(lib.Символ57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 93
	this.instance = new lib.Символ93();
	this.instance.parent = this;
	this.instance.setTransform(19.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({y:-7.5},6,cjs.Ease.get(1)).to({y:0},6,cjs.Ease.get(1)).wait(22));

	// Символ 92
	this.instance_1 = new lib.Символ92();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({y:-7.5},6,cjs.Ease.get(1)).to({y:0},6,cjs.Ease.get(1)).wait(25));

	// Символ 91
	this.instance_2 = new lib.Символ91();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-19.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({y:-7.5},6,cjs.Ease.get(1)).to({y:0},6,cjs.Ease.get(1)).wait(27));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.4,-22.3,62.8,44.6);


(lib.Символ56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ55();
	this.instance.parent = this;
	this.instance.setTransform(-3.5,0,1,1.253,0,44.5,0);
	this.instance.filters = [new cjs.BlurFilter(6, 6, 1)];
	this.instance.cache(-27,-21,62,42);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.2,-19.8,100,42);


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ49();
	this.instance.parent = this;
	this.instance.filters = [new cjs.BlurFilter(16, 16, 1)];
	this.instance.cache(-53,-78,106,156);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.1,-84.1,122,172);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ45();
	this.instance.parent = this;
	this.instance.filters = [new cjs.BlurFilter(8, 8, 1)];
	this.instance.cache(-17,-17,34,34);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19,-18.9,42,40);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ41();
	this.instance.parent = this;
	this.instance.filters = [new cjs.BlurFilter(9, 9, 1)];
	this.instance.cache(-20,-21,40,42);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23,-23.7,50,50);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ37();
	this.instance.parent = this;
	this.instance.filters = [new cjs.BlurFilter(12, 12, 1)];
	this.instance.cache(-28,-28,56,56);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},9).to({alpha:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.1,-37.8,83,81);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ34();
	this.instance.parent = this;
	this.instance.setTransform(2.3,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ57();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-58.5,-3.4);

	this.instance_2 = new lib.Символ56();
	this.instance_2.parent = this;
	this.instance_2.setTransform(14.3,0.8);
	this.instance_2.alpha = 0.551;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.9,-25.7,155,49.7);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ30();
	this.instance.parent = this;
	this.instance.filters = [new cjs.BlurFilter(10, 10, 1)];
	this.instance.cache(-213,-89,438,178);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-215.9,-92.1,446,188);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ21();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.5,-13,31,26);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ19();
	this.instance.parent = this;
	this.instance.setTransform(-16.8,0,1,1,0,0,0,-16.8,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-5},19,cjs.Ease.get(-1)).to({rotation:-10.5,y:0.1},20,cjs.Ease.get(1)).to({regY:-0.1,rotation:-5.1,x:-16.9,y:0},20,cjs.Ease.get(-1)).to({regY:0,rotation:0,x:-16.8},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.5,-16,51,32);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.parent = this;
	this.instance.setTransform(23.6,-37.2,1,1,0,0,0,23.6,-37.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:-37.1,rotation:2,x:23.7,y:-37.1},21,cjs.Ease.get(-1)).to({regX:23.7,regY:-37.2,rotation:4.2,x:23.8,y:-37.2},23,cjs.Ease.get(1)).to({regX:23.6,rotation:2,x:23.6,y:-37.1},23,cjs.Ease.get(-1)).to({rotation:0,y:-37.2},22,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59,-50.5,118,101);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22,-22.5,44,45);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.parent = this;
	this.instance.setTransform(16,-12.4,1,1,0,0,0,16,-11.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:8.1,x:16.1},11,cjs.Ease.get(-1)).to({rotation:18},13,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:9.3,x:16.2},12,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:0,x:16},13,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.5,-20.3,41,39);


(lib.Символ103 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ106();
	this.instance.parent = this;
	this.instance.setTransform(88,-3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 4
	this.instance_1 = new lib.Символ81();
	this.instance_1.parent = this;
	this.instance_1.setTransform(20.7,-106.1,1.7,1.7,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 3
	this.instance_2 = new lib.Символ107();
	this.instance_2.parent = this;
	this.instance_2.setTransform(20.7,-106);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 1
	this.instance_3 = new lib.Символ104();
	this.instance_3.parent = this;
	this.instance_3.setTransform(9,-0.8,1.151,1.151);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.8,-159.6,157.3,169.2);


(lib.Символ90 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 6
	this.instance = new lib.Символ103();
	this.instance.parent = this;
	this.instance.setTransform(-46.3,310.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40));

	// Символ 98
	this.instance_1 = new lib.Символ98();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-28,101.8,1,1,0,0,0,0,-10.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:-0.1,regY:-10,scaleX:1.07,scaleY:1.07,x:-28.1,y:101.9},9,cjs.Ease.get(-1)).to({regX:0,scaleX:1.15,scaleY:1.15,x:-28},10,cjs.Ease.get(1)).to({regX:-0.1,scaleX:1.08,scaleY:1.08,x:-28.1},10,cjs.Ease.get(-1)).to({regX:0,regY:-10.1,scaleX:1,scaleY:1,x:-28,y:101.8},10,cjs.Ease.get(1)).wait(1));

	// Символ 97
	this.instance_2 = new lib.Символ97();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-28,93.5,1,1,0,0,0,0,19.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:-0.1,scaleX:0.87,scaleY:0.87,x:-28.1},9,cjs.Ease.get(-1)).to({scaleX:0.73,scaleY:0.73},10,cjs.Ease.get(1)).to({regY:19.2,scaleX:0.86,scaleY:0.86,y:93.6},10,cjs.Ease.get(-1)).to({regX:0,regY:19.1,scaleX:1,scaleY:1,x:-28,y:93.5},10,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_3 = new lib.Символ96();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-72.4,174.1,1,1.094);
	this.instance_3.alpha = 0.52;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-208.7,-14.5,292.6,349.5);


(lib.Символ82 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ81();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.5,-31.5,63.1,63.1);


(lib.Символ80 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ79();
	this.instance.parent = this;
	this.instance.setTransform(-67.5,54.8,1,1,0,0,0,-67.5,54.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:4.8,y:54.9},16,cjs.Ease.get(-1)).to({regX:-67.4,regY:54.7,rotation:11.2,x:-67.4,y:54.7},22,cjs.Ease.get(1)).to({rotation:5.1},22,cjs.Ease.get(-1)).to({regX:-67.5,regY:54.8,rotation:0,x:-67.5,y:54.8},19,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-64,150,128);


(lib.Символ76 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ75();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},9).to({alpha:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.7,-51.3,92,106);


(lib.Символ72 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ71();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},9).to({alpha:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.9,-26.3,50,56);


(lib.Символ67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ66();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},9).to({alpha:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.9,-18.4,34,40);


(lib.Символ62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ61();
	this.instance.parent = this;
	this.instance.filters = [new cjs.BlurFilter(6, 6, 1)];
	this.instance.cache(-7,-9,14,19);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.8,-10.3,18,24);


(lib.Символ59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ58();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.24,scaleY:1.24,y:2.4},14,cjs.Ease.get(-1)).to({regX:-0.1,scaleX:1.31,scaleY:1.31,x:-0.2,y:5.1},15,cjs.Ease.get(1)).to({regX:0,scaleX:1.23,scaleY:1.23,x:0,y:2.4},16,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,y:0},14,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-339.8,-33.8,694.2,70.1);


(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ50();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},9).to({alpha:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.1,-84.1,122,172);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ46();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},9).to({alpha:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19,-18.9,42,40);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ42();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},9).to({alpha:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23,-23.7,50,50);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(5));

	// Слой 1
	this.instance = new lib.Символ35();
	this.instance.parent = this;
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},4).wait(1).to({alpha:0},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.1,-31.8,68,66);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ31();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-215.9,-92.1,446,188);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.krasgolova = new lib.Символ36();
	this.krasgolova.parent = this;
	this.krasgolova.setTransform(1.9,1.9);

	this.timeline.addTween(cjs.Tween.get(this.krasgolova).wait(1));

	// Слой 1
	this.instance = new lib.gobl1_03();
	this.instance.parent = this;
	this.instance.setTransform(-32,-36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,-36,69.8,72.1);


(lib.Символ95 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ90();
	this.instance.parent = this;
	this.instance.setTransform(29.3,-187.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-179.5,-201.8,292.6,349.5);


(lib.Символ86 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ82();
	this.instance.parent = this;
	this.instance.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:200.6},62,cjs.Ease.get(1)).to({y:0},107,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.5,-31.5,63.1,63.1);


(lib.Символ77 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(5));

	// Слой 1
	this.instance = new lib.Символ76();
	this.instance.parent = this;
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},4).wait(1).to({alpha:0},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.7,-51.3,92,106);


(lib.Символ73 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(5));

	// Слой 1
	this.instance = new lib.Символ72();
	this.instance.parent = this;
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},4).wait(1).to({alpha:0},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.9,-26.3,50,56);


(lib.Символ68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(5));

	// Слой 1
	this.instance = new lib.Символ67();
	this.instance.parent = this;
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},4).wait(1).to({alpha:0},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.9,-18.4,34,40);


(lib.Символ63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ62();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},9).to({alpha:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.8,-10.3,18,24);


(lib.Символ52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(5));

	// Слой 1
	this.instance = new lib.Символ51();
	this.instance.parent = this;
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},4).wait(1).to({alpha:0},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.1,-84.1,122,172);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(5));

	// Слой 1
	this.instance = new lib.Символ47();
	this.instance.parent = this;
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},4).wait(1).to({alpha:0},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19,-18.9,42,40);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(5));

	// Слой 1
	this.instance = new lib.Символ43();
	this.instance.parent = this;
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},4).wait(1).to({alpha:0},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23,-23.7,50,50);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.krasnoj2 = new lib.Символ68();
	this.krasnoj2.parent = this;
	this.krasnoj2.setTransform(-11.1,-1.6);

	this.timeline.addTween(cjs.Tween.get(this.krasnoj2).wait(1));

	// Символ 20
	this.instance = new lib.Символ20();
	this.instance.parent = this;
	this.instance.setTransform(4.8,3.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 22
	this.instance_1 = new lib.Символ22();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-14.8,-6.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.3,-20,60.6,40);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.krastela = new lib.Символ77();
	this.krastela.parent = this;
	this.krastela.setTransform(-108.9,-83.3);

	this.timeline.addTween(cjs.Tween.get(this.krastela).wait(1));

	// Слой 1
	this.instance = new lib.Символ25();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-208,-140,416,280);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.krasgolova2 = new lib.Символ73();
	this.krasgolova2.parent = this;
	this.krasgolova2.setTransform(-2.2,-1.3);

	this.timeline.addTween(cjs.Tween.get(this.krasgolova2).wait(1));

	// Слой 1
	this.instance = new lib.Символ69();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.5,-30.1,75,60.3);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.krastelo = new lib.Символ52();
	this.krastelo.parent = this;
	this.krastelo.setTransform(-11.6,-4);

	this.timeline.addTween(cjs.Tween.get(this.krastelo).wait(1));

	// Слой 1
	this.instance = new lib.Символ11();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.8,-88.1,134.3,172);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.kraskop = new lib.Символ44();
	this.kraskop.parent = this;
	this.kraskop.setTransform(13.1,-20.1);

	this.timeline.addTween(cjs.Tween.get(this.kraskop).wait(1));

	// Слой 1
	this.instance = new lib.Символ40();
	this.instance.parent = this;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.5,-109.5,97,219);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.krasnoj = new lib.Символ48();
	this.krasnoj.parent = this;
	this.krasnoj.setTransform(6.2,-7.5);

	this.timeline.addTween(cjs.Tween.get(this.krasnoj).wait(1));

	// Символ 4
	this.instance = new lib.Символ4();
	this.instance.parent = this;
	this.instance.setTransform(-12.5,12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 6
	this.instance_1 = new lib.Символ6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(11,-9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33,-32,66,63.2);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.golova1 = new lib.Символ1();
	this.golova1.parent = this;
	this.golova1.setTransform(-4,26,1,1,0,0,0,-4,26);

	this.timeline.addTween(cjs.Tween.get(this.golova1).to({rotation:-2.5,x:-4.1,y:27.2},14,cjs.Ease.get(-1)).to({regY:25.9,rotation:-4.4,x:-4,y:27.7},10,cjs.Ease.get(1)).to({regY:26,rotation:-2,y:27},13,cjs.Ease.get(-1)).to({rotation:0,y:26},12,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,-36,69.8,72.1);


(lib.Символ87 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ86();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-372.1},66,cjs.Ease.get(1)).to({x:0},73,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.5,-31.5,63.1,63.1);


(lib.Символ64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(5));

	// Слой 1
	this.instance = new lib.Символ63();
	this.instance.parent = this;
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},4).wait(1).to({alpha:0},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.8,-10.3,18,24);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.noj21 = new lib.Символ27();
	this.noj21.parent = this;
	this.noj21.setTransform(-24.2,-14,1,1,0,0,0,-23.6,-13.6);

	this.timeline.addTween(cjs.Tween.get(this.noj21).to({rotation:-4.5},19,cjs.Ease.get(-1)).to({rotation:-9.5,x:-24.3,y:-13.9},20,cjs.Ease.get(1)).to({regX:-23.5,rotation:-4.6,x:-24.2,y:-14},20,cjs.Ease.get(-1)).to({regX:-23.6,rotation:0},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.9,-20.4,60.6,40);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.golova21 = new lib.Символ23();
	this.golova21.parent = this;
	this.golova21.setTransform(-12,-0.1,1,1,0,0,0,-12,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.golova21).to({rotation:2.3,x:-12.1,y:-0.2},30,cjs.Ease.get(-1)).to({rotation:4.5,x:-12,y:-0.1},29,cjs.Ease.get(1)).to({rotation:2.3,x:-12.1,y:0},29,cjs.Ease.get(-1)).to({rotation:0,x:-12,y:-0.1},31,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.5,-30.1,75,60.3);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.krasshit = new lib.Символ64();
	this.krasshit.parent = this;
	this.krasshit.setTransform(-10.9,-11.8);

	this.timeline.addTween(cjs.Tween.get(this.krasshit).wait(1));

	// Слой 1
	this.instance = new lib.Символ54();
	this.instance.parent = this;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.5,-30.5,39,61);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.kop1 = new lib.Символ9();
	this.kop1.parent = this;
	this.kop1.setTransform(30.8,-9.4,1,1,0,0,0,30.8,-9.4);

	this.timeline.addTween(cjs.Tween.get(this.kop1).to({rotation:-1.8,x:30.9},11,cjs.Ease.get(-1)).to({regX:30.9,regY:-9.5,rotation:-4,x:31,y:-9.5},13,cjs.Ease.get(1)).to({regY:-9.4,rotation:-2,x:30.9,y:-9.4},12,cjs.Ease.get(-1)).to({regX:30.8,rotation:0,x:30.8},13,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.5,-109.5,97,219);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.noj1 = new lib.Символ7();
	this.noj1.parent = this;
	this.noj1.setTransform(23.2,-16.9,1,1,0,0,0,23.2,-16.9);

	this.timeline.addTween(cjs.Tween.get(this.noj1).to({rotation:4.1,x:23.3},11,cjs.Ease.get(-1)).to({rotation:9.2,x:23.2},13,cjs.Ease.get(1)).to({regY:-17,rotation:4.3,x:23.3},13,cjs.Ease.get(-1)).to({regY:-16.9,rotation:0,x:23.2},12,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33,-32,66,63.2);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shit1 = new lib.Символ17();
	this.shit1.parent = this;
	this.shit1.setTransform(-10.2,-18.4,1,1,0,0,0,-10.2,-18.4);

	this.timeline.addTween(cjs.Tween.get(this.shit1).to({rotation:4.5},29,cjs.Ease.get(-1)).to({rotation:9.2},30,cjs.Ease.get(1)).to({rotation:4.5,y:-18.5},30,cjs.Ease.get(-1)).to({rotation:0,y:-18.4},30,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.5,-30.5,39,61);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// gob1_19.png
	this.instance = new lib.Символ16();
	this.instance.parent = this;
	this.instance.setTransform(188.6,96.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// gob1_15.png
	this.shit = new lib.Символ18();
	this.shit.parent = this;
	this.shit.setTransform(-44.9,-60.1);

	this.timeline.addTween(cjs.Tween.get(this.shit).wait(1));

	// gob1_12.png
	this.noj2 = new lib.Символ28();
	this.noj2.parent = this;
	this.noj2.setTransform(-102.1,-42.8);

	this.timeline.addTween(cjs.Tween.get(this.noj2).wait(1));

	// gob1_05.png
	this.golova2 = new lib.Символ24();
	this.golova2.parent = this;
	this.golova2.setTransform(-82.9,-94.4);

	this.timeline.addTween(cjs.Tween.get(this.golova2).wait(1));

	// gob1_02.png
	this.tela = new lib.Символ26();
	this.tela.parent = this;
	this.tela.setTransform(19.6,26.4);

	this.timeline.addTween(cjs.Tween.get(this.tela).wait(1));

	// gob1_08.png
	this.instance_1 = new lib.Символ32();
	this.instance_1.parent = this;
	this.instance_1.setTransform(30,64);
	this.instance_1.alpha = 0.43;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-188.4,-124.6,448.5,291);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 2
	this.golova = new lib.Символ2();
	this.golova.parent = this;
	this.golova.setTransform(0.1,-52.5);

	this.timeline.addTween(cjs.Tween.get(this.golova).wait(1));

	// Символ 10
	this.kop = new lib.Символ10();
	this.kop.parent = this;
	this.kop.setTransform(19.6,0);

	this.timeline.addTween(cjs.Tween.get(this.kop).wait(1));

	// Символ 8
	this.noj = new lib.Символ8();
	this.noj.parent = this;
	this.noj.setTransform(-39.9,-13.5);

	this.timeline.addTween(cjs.Tween.get(this.noj).wait(1));

	// Символ 12
	this.telo = new lib.Символ12();
	this.telo.parent = this;
	this.telo.setTransform(9.4,19.5);

	this.timeline.addTween(cjs.Tween.get(this.telo).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.9,-109.5,145.8,219);


(lib.Символ29 = function(mode,startPosition,loop) {
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

	// Слой 6
	this.instance = new lib.Символ33();
	this.instance.parent = this;
	this.instance.setTransform(-280.4,173.2,0.706,0.706);
	this.instance.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,y:87.5,alpha:1},5).to({y:100},2).wait(1).to({y:87.5},2).to({scaleX:0.71,scaleY:0.71,y:173.2,alpha:0.301},5).wait(1));

	// Слой 5
	this.instance_1 = new lib.Символ95();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-274.7,-32.3,1,1,0,0,0,0,-21.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0},7).wait(1).to({alpha:1},7).wait(1));

	// Слой 4
	this.instance_2 = new lib.Символ87();
	this.instance_2.parent = this;
	this.instance_2.setTransform(204.4,-123);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:0},4).wait(7).to({alpha:1},4).wait(1));

	// Слой 3
	this.instance_3 = new lib.Символ80();
	this.instance_3.parent = this;
	this.instance_3.setTransform(210,200.1,0.749,0.749);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1,scaleY:1,y:67},5).to({y:82},2).wait(1).to({y:67},2).to({scaleX:0.75,scaleY:0.75,y:200.1},5).wait(1));

	// goblin
	this.goblin = new lib.Символ13();
	this.goblin.parent = this;
	this.goblin.setTransform(183.7,-50.9,0.717,0.717);

	this.timeline.addTween(cjs.Tween.get(this.goblin).to({regX:0.1,regY:0.1,scaleX:0.9,scaleY:0.9,x:109.7,y:-58.2},7,cjs.Ease.get(1)).wait(1).to({regX:0,regY:0,scaleX:0.72,scaleY:0.72,x:183.7,y:-50.9},7,cjs.Ease.get(1)).wait(1));

	// Символ 14
	this.goblinbaba = new lib.Символ14();
	this.goblinbaba.parent = this;
	this.goblinbaba.setTransform(-0.1,-4.6,0.897,0.897);

	this.timeline.addTween(cjs.Tween.get(this.goblinbaba).to({scaleX:1.12,scaleY:1.12,x:-120.1,y:-0.5},7,cjs.Ease.get(1)).wait(1).to({scaleX:0.9,scaleY:0.9,x:-0.1,y:-4.6},7,cjs.Ease.get(1)).wait(1));

	// Слой 7
	this.instance_4 = new lib.Символ59();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-43.7,-300.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:-128.7},5).to({y:-147.7},2).wait(1).to({y:-128.7},2).to({y:-300.3},5).wait(1));

	// Слой 1
	this.fon = new lib.Символ38();
	this.fon.parent = this;
	this.fon.setTransform(-66,-23);

	this.timeline.addTween(cjs.Tween.get(this.fon).to({scaleX:1.25,scaleY:1.25,x:-145,y:-23.5},7,cjs.Ease.get(1)).wait(1).to({scaleX:1,scaleY:1,x:-66,y:-23},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-454.2,-334.1,764.8,582.1);


// stage content:



(lib.goblins640x305 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		var _this = this;
		stage.canvas.onmouseover = fl_MouseOverHandler_52;
		  function fl_MouseOverHandler_52()
		{
		    _this.main.gotoAndPlay(1);
			_this.prizel.gotoAndStop(1);
		}
		stage.canvas.onmouseout = fl_MouseOutHandler_277;
		  function fl_MouseOutHandler_277()
		{
		    _this.main.gotoAndPlay(8);
			_this.prizel.gotoAndStop(0);
		}
		
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.btngoblin.addEventListener("mouseover", fl_MouseOverHandler);
		
		function fl_MouseOverHandler()
		{
			_this.main.goblin.golova.golova1.krasgolova.gotoAndPlay(1);
			_this.main.goblin.kop.kop1.kraskop.gotoAndPlay(1);
			_this.main.goblin.noj.noj1.krasnoj.gotoAndPlay(1);
			_this.main.goblin.telo.krastelo.gotoAndPlay(1);
		}
		
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.btngoblin.addEventListener("mouseout", fl_MouseOutHandler);
		
		function fl_MouseOutHandler()
		{
			_this.main.goblin.golova.golova1.krasgolova.gotoAndPlay(6);
			_this.main.goblin.kop.kop1.kraskop.gotoAndPlay(6);
			_this.main.goblin.noj.noj1.krasnoj.gotoAndPlay(6);
			_this.main.goblin.telo.krastelo.gotoAndPlay(6);
		}
		
		
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.btngobl2.addEventListener("mouseover", fl_MouseOverHandler_24);
		
		function fl_MouseOverHandler_24()
		{
			_this.main.goblinbaba.shit.shit1.krasshit.gotoAndPlay(1);
			_this.main.goblinbaba.noj2.noj21.krasnoj2.gotoAndPlay(1);
		    _this.main.goblinbaba.golova2.golova21.krasgolova2.gotoAndPlay(1);
			_this.main.goblinbaba.tela.krastela.gotoAndPlay(1);
		}
		
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.btngobl2.addEventListener("mouseout", fl_MouseOutHandler_22);
		
		function fl_MouseOutHandler_22()
		{
			_this.main.goblinbaba.shit.shit1.krasshit.gotoAndPlay(6);
			_this.main.goblinbaba.noj2.noj21.krasnoj2.gotoAndPlay(6);
			_this.main.goblinbaba.golova2.golova21.krasgolova2.gotoAndPlay(6);
			_this.main.goblinbaba.tela.krastela.gotoAndPlay(6);
		}
		
		
		stage.canvas.style.cursor = "none";
		this.prizel.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
			this.prizel.x = stage.mouseX;
			this.prizel.y = stage.mouseY;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 3
	this.prizel = new lib.Символ85();
	this.prizel.parent = this;
	this.prizel.setTransform(809.5,123.8);

	this.timeline.addTween(cjs.Tween.get(this.prizel).wait(1));

	// Слой 2
	this.btngobl2 = new lib.Символ53();
	this.btngobl2.parent = this;
	this.btngobl2.setTransform(164.3,100.1);
	new cjs.ButtonHelper(this.btngobl2, 0, 1, 2, false, new lib.Символ53(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btngobl2).wait(1));

	// Символ 14
	this.btngoblin = new lib.Символ39();
	this.btngoblin.parent = this;
	this.btngoblin.setTransform(484,125.6);
	new cjs.ButtonHelper(this.btngoblin, 0, 1, 2, false, new lib.Символ39(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btngoblin).wait(1));

	// goblin
	this.main = new lib.Символ29();
	this.main.parent = this;
	this.main.setTransform(375.6,175.6);

	this.timeline.addTween(cjs.Tween.get(this.main).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(241.4,-6.1,764.8,582.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;