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
		{src:"images/arm.png?1485356465249", id:"arm"},
		{src:"images/awp.png?1485356465249", id:"awp"},
		{src:"images/bullet.png?1485356465249", id:"bullet"},
		{src:"images/hp.png?1485356465249", id:"hp"},
		{src:"images/maps.png?1485356465249", id:"maps"},
		{src:"images/maxresdefault.jpg?1485356465249", id:"maxresdefault"},
		{src:"images/pricel.png?1485356465249", id:"pricel"},
		{src:"images/ter.png?1485356465249", id:"ter"},
		{src:"images/ui.png?1485356465249", id:"ui"},
		{src:"images/ui3.png?1485356465249", id:"ui3"}
	]
};



lib.ssMetadata = [];


// symbols:



(lib.arm = function() {
	this.initialize(img.arm);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,14,15);


(lib.awp = function() {
	this.initialize(img.awp);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,143);


(lib.bullet = function() {
	this.initialize(img.bullet);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,106,68);


(lib.hp = function() {
	this.initialize(img.hp);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,14,15);


(lib.maps = function() {
	this.initialize(img.maps);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,154,148);


(lib.maxresdefault = function() {
	this.initialize(img.maxresdefault);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,400);


(lib.pricel = function() {
	this.initialize(img.pricel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1027,820);


(lib.ter = function() {
	this.initialize(img.ter);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,67,195);


(lib.ui = function() {
	this.initialize(img.ui);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,126,36);


(lib.ui3 = function() {
	this.initialize(img.ui3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,131,33);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF3800","#FF0C00"],[0,1],0,15.9,0,-15.8).s().p("ABHCCIAAiSIiAB3IgVAPIgYAIIgVAEIgiAAIAAkDIAHAAQAkAAAWAMQALAGAGALQAFAKABAOIAABcIAcgYIAGgFIBbhYQALgKAMgFIAWgJIAWgEIAjAAIAAEDg");
	this.shape.setTransform(254.1,23);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FF3800","#FF0C00"],[0,1],0,18.1,0,-18).s().p("AizCDIBUhnQgkgBgUgPQgTgMgBgaIAAgxQAAgbAWgOQAVgOAlAAIEPAAIAAEDIgngCQgPgCgLgGQgXgOAAgkIAAiQIiwAAIAAAxICGAAIh7Cdg");
	this.shape_1.setTransform(216,23.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FF3800","#FF0C00"],[0,1],0,17.7,0,-17.6).s().p("ABXCDIAAjOIivAAIAADOIhXAAIAAjLQAAgQAGgKQAGgLALgHQALgHAOgEIAfgDIEQAAIAAEFg");
	this.shape_2.setTransform(176,23.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FF3800","#FF0C00"],[0,1],0,17.7,0,-17.6).s().p("AhhCDIgegEQgPgDgKgIQgKgHgHgKQgGgKAAgNIAAiYQAAgMAGgJQAHgKAKgIQAKgHAPgEQAPgEAPAAIDBAAQAkAAAVAOQAXAPAAAaIkIAAIAAAxICmAAIAAA2IimAAIAAAxIEIAAQAAAOgHAKQgFALgMAGQgLAHgOADIgfADg");
	this.shape_3.setTransform(136.6,23.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FF3800","#FF0C00"],[0,1],0,17.7,0,-17.6).s().p("AiviCIEPAAQAjAAAXAOQAWAPAAAaIAAAxQAAANgHALQgGAIgOAHQgOAIgRADIgpAEIiBAAIACgTIAJgQQAHgJAKgFQAJgFAOAAIBZAAIAAgxIiwAAIAACQQABAlgXANQgMAIgOACIgnACg");
	this.shape_4.setTransform(97.1,23.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FF3800","#FF0C00"],[0,1],0,17.9,0,-17.8).s().p("AgqCDIAAjOIiHAAIAAgIQAAgbARgKQAQgKAdAAIElAAIAAAMQAAARgIAIQgIAJgLAEIgYAEIhSABIAACXQAAAdgOAOQgNAMgiAAg");
	this.shape_5.setTransform(57.4,23.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#FF3800","#FF0C00"],[0,1],0,17.7,0,-17.6).s().p("AhhCDIgegEQgPgDgKgIQgLgHgGgKQgGgKAAgNIAAiYQAAgMAGgKQAGgKALgHQAKgHAPgEQAOgEAQAAIDBAAQAkAAAWAOQAWAPAAAaQAAAPgJAIIgQALQgLAIgPAEIgdAEIgJAAIAAgyIivAAIAACYICwAAIAAg2IBYAAIAAA0QAAAPgHAKQgGALgLAHQgLAGgPAEIgeADg");
	this.shape_6.setTransform(17.7,23.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#FF3800","#FF0C00"],[0,1],-6.9,0,6.9,0).s().p("AhEACIAAgtIBEAlIBFglIAAAtIhFAqg");
	this.shape_7.setTransform(253.9,4.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 2
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CC0000").s().p("AJ1C1IBUhoQglgBgTgOQgUgOAAgaIAAgvQAAgbAWgPQAVgNAlAAIERAAIAAEDIgngCQgPgCgLgGQgXgOAAglIAAiPIiyAAIAAAuICJAAIh+CggAHyC1IAAjOIixAAIAADOIhYAAIAAjMQAAgPAHgLQAGgLALgHQALgHAOgEIAegCIETAAIAAEFgAhRC1IgegFQgPgDgKgIQgKgHgHgKQgGgJAAgNIAAiYQAAgMAGgKQAHgKAKgIQAKgHAPgEQAPgDAPAAIDBAAQAkAAAVANQAXAPAAAbIkIAAIAAAuICmAAIAAA4IimAAIAAAyIEIAAQAAANgHALQgFAKgMAGQgLAHgOAEIgfADgAophQIEQAAQAjAAAXANQAXAPAAAbIAAAuQAAAOgIALQgGAKgNAHQgOAHgSADIgoAEIiEAAIADgTIAJgSQAGgIAKgFQAKgGANAAIBbAAIAAguIixAAIAACQQAAAlgWANQgMAIgPACIgmACgAsyC1IAAjOIiHAAIAAgIQAAgbARgKQAQgKAdAAIEnAAIAAALQABARgJAJQgHAIgMAEIgYAFIhSABIAACXQAAAdgNANQgNANglAAgAz2C1IgegFQgPgDgKgIQgKgHgHgKQgGgJAAgNIAAiYQAAgMAGgLQAHgJAKgIQAKgHAPgEQAOgDAQAAIDDAAQAlAAAVANQAXAPAAAbQgBAOgIAIIgQAKQgMAIgOAEIgeADIgIAAIAAgvIiyAAIAACYICzAAIAAg2IBXAAIAAA0QAAAOgGAKQgHALgLAHQgLAGgPAEIgeAEgATuCzIAAiUIiCB5IgVAOIgYAJIgUAEIgjAAIAAkDIAHAAQAjAAAXAMQALAGAGALQAFAKABAOIAABcIAdgbIAFgEIBdhWQALgLALgFIAXgIIAWgEIAjAAIAAEDgARgiFIAAgvIBEAlIBGglIAAAvIhGApg");
	this.shape_8.setTransform(136.7,18.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,271.6,36.4);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3700").s().p("ANuCDIAAhoIiwAAIAAAqQgBATgFAKQgHALgLAHQgLAIgQADIggAEIgFAAIAAjLQAAgPAHgMQAGgLAKgGQALgHAOgEIAfgDIESAAIAAEFgAK+gaICwAAIAAgxIiwAAgADbiCIERAAQAkAAAWAOQAXAPgBAaIAAAxQABANgIALQgGAIgOAIQgNAGgSAEIgpADIiDAAIADgSIAJgRQAGgHAKgGQAJgFAOAAIBbAAIAAgxIixAAIAACRQAAAkgXANQgMAIgOACIgnACgAitiCIEOAAQAkAAAXAOQAWAPAAAaIAAAxQAAANgHALQgGAIgOAIQgOAGgRAEIgpADIiBAAIACgSIAJgRQAHgHAKgGQAJgFANAAIBaAAIAAgxIivAAIAACRQAAAkgXANQgMAIgPACIgmACgAnpCDIgegEQgPgDgKgIQgLgIgGgJQgHgKAAgMIAAiYQAAgMAHgLQAGgKALgHQAKgHAPgEQAOgEAQAAIDDAAQAjAAAWAOQAWAPABAaIkKAAIAAAxICoAAIAAA1IioAAIAAAyIEKAAQAAAOgHAKQgGAKgLAHQgLAHgPADIgeADgAtACDIAAjOIiHAAIAAgHQABgcAQgKQAQgKAdAAIEoAAIAAAMQgBARgHAJQgJAIgLADIgXAGIhSAAIAACYQAAAcgOANQgNANgkAAg");
	this.shape.setTransform(96.8,13.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC3300").s().p("ANuCDIAAhoIiwAAIAAAqQgBATgFAKQgHALgLAHQgLAIgQADIggAEIgFAAIAAjLQAAgPAHgMQAFgLAMgGQAKgHAOgEIAfgDIESAAIAAEFgAK+gaICwAAIAAgxIiwAAgADbiCIERAAQAkAAAWAOQAWAPAAAaIAAAxQAAANgGALQgHAIgOAIQgNAGgSAEIgpADIiDAAIADgSIAJgRQAGgHAKgGQAJgFAOAAIBbAAIAAgxIixAAIAACRQAAAkgXANQgMAIgOACIgnACgAitiCIEPAAQAjAAAWAOQAXAPAAAaIAAAxQAAANgHALQgGAIgOAIQgOAGgSAEIgoADIiBAAIACgSIAJgRQAHgHAJgGQAKgFANAAIBaAAIAAgxIiwAAIAACRQABAkgXANQgMAIgOACIgnACgAnpCDIgegEQgPgDgLgIQgKgIgGgJQgHgKAAgMIAAiYQAAgMAHgLQAGgKAKgHQALgHAPgEQAOgEAPAAIDEAAQAjAAAWAOQAWAPABAaIkKAAIAAAxICoAAIAAA1IioAAIAAAyIEKAAQAAAOgHAKQgGAKgLAHQgLAHgPADIgeADgAtACDIAAjOIiHAAIAAgHQAAgcARgKQAQgKAdAAIEoAAIAAAMQgBARgHAJQgJAIgLADIgYAGIhSAAIAACYQABAcgOANQgNANglAAg");
	this.shape_1.setTransform(98.7,13.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,195.5,26.3);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF0000","#FF4400"],[0,1],0,-22.8,0,22.9).s().p("AjjCqIAAlTIFWAAQA1ABAeARQAeARAAAaIAAAKQAAAMgJAPQgJAPgPAIQgVAMggACIAAACIAdAHIAYALQAPAJAJALQAJANAAAQIAAAwQAAAZgKASQgKARgPAJQgQAKgUADIgsAFgAhyBkIDlAAIAAhAIjlAAgAhygiIDlAAIAAg/IjlAAg");
	this.shape.setTransform(22.8,17);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FF0000","#FF4400"],[0,1],0,-22.8,0,22.9).s().p("ABxCqIAAiGIjjAAIAAA2QAAAYgHANQgJANgOALQgPAJgUAEIgpAGIgHAAIAAkIQAAgTAIgPQAIgOAPgJQAOgJARgFIAogEIFhAAIAAFTgAhygiIDjAAIAAg/IjjAAg");
	this.shape_1.setTransform(73.9,17);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FF0000","#FF4400"],[0,1],0,-22.8,0,22.9).s().p("ABxCqIAAkLIjjAAIAAELIhxAAIAAkIQAAgTAIgPQAIgOAOgJQAOgJASgFIAogEIFhAAIAAFTg");
	this.shape_2.setTransform(125,17);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FF0000","#FF4400"],[0,1],0,-20.5,0,20.5).s().p("ABcCpIAAi+IimCbIgbATIgeAKIgbAFIgtABIAAlRIAIAAQAvABAcAQQAPAHAIAOQAHANAAASIAAB4IAmggIAGgGIB4hzQAMgMAQgGIAdgLIAcgGIAtgBIAAFRg");
	this.shape_3.setTransform(173.8,16.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CC0000").s().p("AGICpIAAkLIjlAAIAAELIhxAAIAAkGQAAgVAIgOQAIgOAOgJQAOgJASgEIAogFIFjAAIAAFSgAh2CpIAAiGIjlAAIAAA2QAAAZgHANQgIAOgPAKQgPAJgUAFIgpAEIgHAAIAAkGQAAgVAJgOQAHgOAPgJQAOgJASgEIAngFIFjAAIAAFSgAlbgiIDlAAIAAhAIjlAAgAvKCpIAAlSIFYAAQA1AAAeARQAeASAAAZIAAAKQAAANgJAPQgJAPgPAJQgVALggACIAAACIAdAHIAYAMQAPAIAJALQAJAOAAAPIAAAxQAAAYgKARQgKARgPAKQgQAKgUAEIgsADgAtZBjIDnAAIAAhAIjnAAgAtZgiIDnAAIAAhAIjnAAgANaCoIAAi+IinCaIgcATIgeALIgbAFIgtABIAAlRIAIAAQAvAAAdAQQAPAJAHANQAHANAAASIAAB4IAmggIAHgHIB5hyQAMgMAQgHIAegLIAcgFIAtgBIAAFRg");
	this.shape_4.setTransform(99.3,16.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.1,196.5,34.2);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ACB887").s().p("AgpA3QgPAAgJgHQgIgGAAgHIAAgDIBuAAIAAgUIg+AAQgLAAgFgDIgJgGQgDgDgBgBIAAgJIBbAAIAAgVIhTAAQgPAAgFgFQgGgGgBgIIAAgEIBuAAQAKAAAHACQAHACAEADQAFADACAEQACADAAAEIgCAGQgBAFgCADQgDAEgGACQgFADgIAAIAAABIAJACIAHADQAFADADACQADADAAAJIAAATQAAAHgDAEQgEAFgFACIgMAEIgNABg");
	this.shape.setTransform(7.4,5.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,14.9,11.1);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ACB887").s().p("AAsAtQgDgDAAgDQAAgDADgDIBChCIhGAAQgKAAgGgCQgGgCgDgDQgEgDgCgEIgBgFIAAgDIBqAAQANAAAHADQAIADACAFQADAEgBAFQgBAFgCADIhPBTQgPgFgFgGgAhyAxQgPAAgIgGQgIgGAAgHIAAgDIBrAAIAAgTIg9AAQgKAAgGgDQgFgCgDgDQgDgCAAgDIgBgFIAAgDIBZAAIAAgUIhRAAQgOAAgGgFQgFgFgBgIIAAgEIBrAAQAKAAAGACQAHACAEADQAEACACAEIACAHIgBAGQgBAEgDAEQgCADgGADQgFACgIAAIAAABIAJACIAHACIAHAHQADACAAAIIAAASQAAAHgDAEQgDAEgFACQgFADgHABIgMABg");
	this.shape.setTransform(14.6,5.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,29.3,11.4);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ACB887").s().p("AAnA2QgHAAgGgCQgGgCgFgCIgHgHQgCgEAAgGIAAg+QAAgFACgEIAHgHQAFgDAGgBQAGgCAHAAIBQAAQAIAAAFACQAHABAEACQAJAHAAAKIAAA+QAAAGgDAFQgCAEgFACQgEADgGABQgGACgHAAgAAqAfIBKAAIAAg+IhKAAgAhyA2QgKAAgHgCIgLgEQgEgDgCgEQgDgEAAgDIAAgDIBuAAIAAgUIhNAAQgTAAgHgHQgDgDgCgCQgCgEAAgFIAAgrICSAAIAAAEQAAAEgDAEQgDADgEACIgKAFIgNAAIhNAAIAAAVIBMAAQALAAAGABQAHADADACQAEADACABIABAHIAAAYQAAAFgBAEIgGAIQgDADgHABQgHACgJAAg");
	this.shape.setTransform(15.3,5.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,30.5,10.9);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ACB887").s().p("ABlA3QgHAAgGgCIgLgFQgEgDgCgEQgDgEAAgFIAAg/QAAgGADgEQACgEAEgDQAEgDAHgBQAGgCAHAAIBRAAQAHAAAHACQAGABAEADQAKAGAAALIAAA/QgBAGgCAEQgCAEgFADQgFADgGABQgGACgHAAgABpAgIBKAAIAAg/IhKAAgAg6A3QgHAAgGgCIgKgFQgFgDgDgEQgCgEAAgFIAAg/QAAgGACgEQADgEAFgDQAEgDAGgBQAGgCAHAAIBPAAQAHAAAHACQAFABAFADQAKAGgBALIAAA/QABAGgDAEQgDAEgEADQgFADgGABQgGACgHAAgAg2AgIBIAAIAAg/IhIAAgAjXAzQAAgIAEgDQAFgEAEgCIANgCIAMAAIAAg/IgDAAQgHAAgGgBQgGgBgEgDQgFgDgDgDQgCgDgBgFIAAgEIApAAQAJAAAHACQAGABAFADQAEADABAEQABADAAAFIAABBIAkAAIAAADQAAAHgEAEQgEAEgFACIgLACIhXABg");
	this.shape.setTransform(21.6,5.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,43.2,11.1);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Eg5/AdqMAAAg7TMBz/AAAMAAAA7Tg");
	this.shape.setTransform(371.2,189.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,742.4,379.7);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgLAYQgHgDgDgFQgDgCgBgIIAAgIQABgLAIgGQAJgGAHABIAAgCQAJACAJAGQAIAJAAAIQAAAFgDAGQgCAHgDADQgFAHgKAAIgBAAQgGAAgHgDg");
	this.shape.setTransform(2.7,2.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,5.4,5.6);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ter();
	this.instance.parent = this;
	this.instance.setTransform(0,5,0.269,0.269);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,5,18.1,52.5);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EBcTBKiMAAAiVDMBQzAAAMAAACVDgEitFBKiMAAAiVDMBQyAAAMAAACVDg");
	this.shape.setTransform(556.8,442.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.instance = new lib.pricel();
	this.instance.parent = this;
	this.instance.setTransform(-34,-32,1.153,1.153);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-551,-34.2,2215.7,954.2);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AQJEEIhpgJQg9gFgrgBIhKgCQgsgCgegDQgagDglgHIg+gLQhbgOhxgEQhHgDiHACIubAIQivAChggIQgkgDgWgIQgYgIgOgPIBLg4IBBg0QAQgKAOgLQAPgMARgQIA5gnQA+gwApgvQAJgKAEgIQAFgFABgGIBxhZQALgKAGgIQATAHAXALIBAAeQAjAPA3ANIBbAUQBTAVB1AxIDBBSIBPAcQAyASAcALIAHADQCWAABcAFQBMADAuAJIAzALQAhAIATADQAaAEAjACIA9ABQBLABCpANQAfADARAEQAZAHAQAOQAZAWgDAkQgDAlgbASQgRALgZACIgOABIgfgCgAtoiUIAJgGIgKAJIABgDg");
	this.shape.setTransform(131.9,27.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(16.9,1.1,230.1,52.4);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bullet();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.193,0.193);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,20.5,13.2);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.792,1],-133.4,0,133.6,0).s().p("A02CFIAAkJMAptAAAIAAEJg");
	this.shape.setTransform(133.5,13.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,267,26.7);


(lib.Символ8_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","#FFCC00","#FFFF00"],[0,0.478,1],0,0,0,0,0,4.7).s().p("AAAAuIgCgkIgdAXIAYgdIgmgEIAkgDIgWgcIAdAXIACglIAAAAIAFAlIAbgXIABAAIgXAdIAkACIAAAAIglAEIAXAcIAAABIgcgXIgEAkg");
	this.shape_1.setTransform(2.7,2.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.9,-1.9,9.3,9.3);


(lib.Анимация26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ui();
	this.instance.parent = this;
	this.instance.setTransform(-34.7,-9.9,0.552,0.552);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.7,-9.9,69.6,19.9);


(lib.Анимация25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ui();
	this.instance.parent = this;
	this.instance.setTransform(-34.7,-9.9,0.552,0.552);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.7,-9.9,69.6,19.9);


(lib.Анимация24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ui3();
	this.instance.parent = this;
	this.instance.setTransform(-36.1,-9.1,0.552,0.552);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.1,-9.1,72.3,18.2);


(lib.Анимация23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ui3();
	this.instance.parent = this;
	this.instance.setTransform(-36.1,-9.1,0.552,0.552);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.1,-9.1,72.3,18.2);


(lib.Анимация22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hp();
	this.instance.parent = this;
	this.instance.setTransform(-47,-7.5);

	this.instance_1 = new lib.arm();
	this.instance_1.parent = this;
	this.instance_1.setTransform(33,-7.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47,-7.5,94,15);


(lib.Анимация21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hp();
	this.instance.parent = this;
	this.instance.setTransform(-47,-7.5);

	this.instance_1 = new lib.arm();
	this.instance_1.parent = this;
	this.instance_1.setTransform(33,-7.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47,-7.5,94,15);


(lib.Анимация20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ACB887").s().p("ABkA3QgGAAgGgCIgLgFQgEgDgDgEQgCgEAAgFIAAg/QAAgGACgEQADgEAEgDQAEgDAHgBQAGgCAGAAIBSAAQAHAAAHACQAFABAFADQAJAGAAALIAAA/QAAAGgCAEQgCAEgFADQgFADgGABQgGACgHAAgABpAgIBKAAIAAg/IhKAAgAg6A3QgIAAgFgCIgLgFQgEgDgDgEQgCgEAAgFIAAg/QAAgGACgEQADgEAEgDQAFgDAGgBQAFgCAIAAIBPAAQAHAAAHACQAFABAFADQAKAGgBALIAAA/QABAGgDAEQgDAEgEADQgFADgGABQgGACgHAAgAg2AgIBHAAIAAg/IhHAAgAjXAzQAAgIAEgDQAFgEAEgCQAGgCAGAAIANAAIAAg/IgDAAQgHAAgGgBQgGgBgEgDQgFgDgDgDQgCgDgBgFIAAgEIApAAQAJAAAGACQAHABAEADQAEADACAEQABADAAAFIAABBIAjAAIAAADQAAAHgDAEQgFAEgEACQgGACgGAAIhWABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.6,-5.5,43.2,11.1);


(lib.Анимация19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ACB887").s().p("ABkA3QgGAAgGgCIgLgFQgEgDgDgEQgCgEAAgFIAAg/QAAgGACgEQADgEAEgDQAEgDAHgBQAGgCAGAAIBSAAQAHAAAHACQAFABAFADQAJAGAAALIAAA/QAAAGgCAEQgCAEgFADQgFADgGABQgGACgHAAgABpAgIBKAAIAAg/IhKAAgAg6A3QgIAAgFgCIgLgFQgEgDgDgEQgCgEAAgFIAAg/QAAgGACgEQADgEAEgDQAFgDAGgBQAFgCAIAAIBPAAQAHAAAHACQAFABAFADQAKAGgBALIAAA/QABAGgDAEQgDAEgEADQgFADgGABQgGACgHAAgAg2AgIBHAAIAAg/IhHAAgAjXAzQAAgIAEgDQAFgEAEgCQAGgCAGAAIANAAIAAg/IgDAAQgHAAgGgBQgGgBgEgDQgFgDgDgDQgCgDgBgFIAAgEIApAAQAJAAAGACQAHABAEADQAEADACAEQABADAAAFIAABBIAjAAIAAADQAAAHgDAEQgFAEgEACQgGACgGAAIhWABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.6,-5.5,43.2,11.1);


(lib.Анимация18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ui();
	this.instance.parent = this;
	this.instance.setTransform(-34.7,-9.9,0.552,0.552);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.7,-9.9,69.6,19.9);


(lib.Анимация17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ui();
	this.instance.parent = this;
	this.instance.setTransform(-34.7,-9.9,0.552,0.552);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.7,-9.9,69.6,19.9);


(lib.Анимация16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ui3();
	this.instance.parent = this;
	this.instance.setTransform(-36.1,-9.1,0.552,0.552);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.1,-9.1,72.3,18.2);


(lib.Анимация15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ui3();
	this.instance.parent = this;
	this.instance.setTransform(-36.1,-9.1,0.552,0.552);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.1,-9.1,72.3,18.2);


(lib.Анимация14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hp();
	this.instance.parent = this;
	this.instance.setTransform(-47,-7.5);

	this.instance_1 = new lib.arm();
	this.instance_1.parent = this;
	this.instance_1.setTransform(33,-7.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47,-7.5,94,15);


(lib.Анимация13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hp();
	this.instance.parent = this;
	this.instance.setTransform(-47,-7.5);

	this.instance_1 = new lib.arm();
	this.instance_1.parent = this;
	this.instance_1.setTransform(33,-7.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47,-7.5,94,15);


(lib.Анимация12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ACB887").s().p("ABkA3QgGAAgGgCIgLgFQgEgDgDgEQgCgEAAgFIAAg/QAAgGACgEQADgEAEgDQAEgDAHgBQAGgCAGAAIBSAAQAHAAAHACQAFABAFADQAJAGAAALIAAA/QAAAGgCAEQgCAEgFADQgFADgGABQgGACgHAAgABpAgIBKAAIAAg/IhKAAgAg6A3QgIAAgFgCIgLgFQgEgDgDgEQgCgEAAgFIAAg/QAAgGACgEQADgEAEgDQAFgDAGgBQAFgCAIAAIBPAAQAHAAAHACQAFABAFADQAKAGgBALIAAA/QABAGgDAEQgDAEgEADQgFADgGABQgGACgHAAgAg2AgIBHAAIAAg/IhHAAgAjXAzQAAgIAEgDQAFgEAEgCQAGgCAGAAIANAAIAAg/IgDAAQgHAAgGgBQgGgBgEgDQgFgDgDgDQgCgDgBgFIAAgEIApAAQAJAAAGACQAHABAEADQAEADACAEQABADAAAFIAABBIAjAAIAAADQAAAHgDAEQgFAEgEACQgGACgGAAIhWABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.6,-5.5,43.2,11.1);


(lib.Анимация11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ACB887").s().p("ABkA3QgGAAgGgCIgLgFQgEgDgDgEQgCgEAAgFIAAg/QAAgGACgEQADgEAEgDQAEgDAHgBQAGgCAGAAIBSAAQAHAAAHACQAFABAFADQAJAGAAALIAAA/QAAAGgCAEQgCAEgFADQgFADgGABQgGACgHAAgABpAgIBKAAIAAg/IhKAAgAg6A3QgIAAgFgCIgLgFQgEgDgDgEQgCgEAAgFIAAg/QAAgGACgEQADgEAEgDQAFgDAGgBQAFgCAIAAIBPAAQAHAAAHACQAFABAFADQAKAGgBALIAAA/QABAGgDAEQgDAEgEADQgFADgGABQgGACgHAAgAg2AgIBHAAIAAg/IhHAAgAjXAzQAAgIAEgDQAFgEAEgCQAGgCAGAAIANAAIAAg/IgDAAQgHAAgGgBQgGgBgEgDQgFgDgDgDQgCgDgBgFIAAgEIApAAQAJAAAGACQAHABAEADQAEADACAEQABADAAAFIAABBIAjAAIAAADQAAAHgDAEQgFAEgEACQgGACgGAAIhWABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.6,-5.5,43.2,11.1);


(lib.Анимация10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ui();
	this.instance.parent = this;
	this.instance.setTransform(-34.7,-9.9,0.552,0.552);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.7,-9.9,69.6,19.9);


(lib.Анимация9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ui();
	this.instance.parent = this;
	this.instance.setTransform(-34.7,-9.9,0.552,0.552);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.7,-9.9,69.6,19.9);


(lib.Анимация8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ui3();
	this.instance.parent = this;
	this.instance.setTransform(-36.1,-9.1,0.552,0.552);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.1,-9.1,72.3,18.2);


(lib.Анимация7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ui3();
	this.instance.parent = this;
	this.instance.setTransform(-36.1,-9.1,0.552,0.552);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.1,-9.1,72.3,18.2);


(lib.Анимация6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hp();
	this.instance.parent = this;
	this.instance.setTransform(-47,-7.5);

	this.instance_1 = new lib.arm();
	this.instance_1.parent = this;
	this.instance_1.setTransform(33,-7.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47,-7.5,94,15);


(lib.Анимация5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hp();
	this.instance.parent = this;
	this.instance.setTransform(-47,-7.5);

	this.instance_1 = new lib.arm();
	this.instance_1.parent = this;
	this.instance_1.setTransform(33,-7.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47,-7.5,94,15);


(lib.Анимация4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ACB887").s().p("ABkA3QgGAAgGgCIgLgFQgEgDgDgEQgCgEAAgFIAAg/QAAgGACgEQADgEAEgDQAEgDAHgBQAGgCAGAAIBSAAQAHAAAHACQAFABAFADQAJAGAAALIAAA/QAAAGgCAEQgCAEgFADQgFADgGABQgGACgHAAgABpAgIBKAAIAAg/IhKAAgAg6A3QgIAAgFgCIgLgFQgEgDgDgEQgCgEAAgFIAAg/QAAgGACgEQADgEAEgDQAFgDAGgBQAFgCAIAAIBPAAQAHAAAHACQAFABAFADQAKAGgBALIAAA/QABAGgDAEQgDAEgEADQgFADgGABQgGACgHAAgAg2AgIBHAAIAAg/IhHAAgAjXAzQAAgIAEgDQAFgEAEgCQAGgCAGAAIANAAIAAg/IgDAAQgHAAgGgBQgGgBgEgDQgFgDgDgDQgCgDgBgFIAAgEIApAAQAJAAAGACQAHABAEADQAEADACAEQABADAAAFIAABBIAjAAIAAADQAAAHgDAEQgFAEgEACQgGACgGAAIhWABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.6,-5.5,43.2,11.1);


(lib.Анимация3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ACB887").s().p("ABkA3QgGAAgGgCIgLgFQgEgDgDgEQgCgEAAgFIAAg/QAAgGACgEQADgEAEgDQAEgDAHgBQAGgCAGAAIBSAAQAHAAAHACQAFABAFADQAJAGAAALIAAA/QAAAGgCAEQgCAEgFADQgFADgGABQgGACgHAAgABpAgIBKAAIAAg/IhKAAgAg6A3QgIAAgFgCIgLgFQgEgDgDgEQgCgEAAgFIAAg/QAAgGACgEQADgEAEgDQAFgDAGgBQAFgCAIAAIBPAAQAHAAAHACQAFABAFADQAKAGgBALIAAA/QABAGgDAEQgDAEgEADQgFADgGABQgGACgHAAgAg2AgIBHAAIAAg/IhHAAgAjXAzQAAgIAEgDQAFgEAEgCQAGgCAGAAIANAAIAAg/IgDAAQgHAAgGgBQgGgBgEgDQgFgDgDgDQgCgDgBgFIAAgEIApAAQAJAAAGACQAHABAEADQAEADACAEQABADAAAFIAABBIAjAAIAAADQAAAHgDAEQgFAEgEACQgGACgGAAIhWABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.6,-5.5,43.2,11.1);


(lib.Анимация2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.maxresdefault();
	this.instance.parent = this;
	this.instance.setTransform(-329,-188,0.94,0.94);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-329,-188,658,376);


(lib.Анимация1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.maxresdefault();
	this.instance.parent = this;
	this.instance.setTransform(-329,-188,0.94,0.94);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-329,-188,658,376);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ28();
	this.instance.parent = this;
	this.instance.setTransform(134.9,18.2,1,1,0,0,0,134.9,18.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:135,regY:18.1,scaleX:1.04,scaleY:1.04,rotation:6,x:140.9,y:18},4).to({regX:134.9,regY:18.2,scaleX:1,scaleY:1,rotation:0,x:134.9,y:18.2},5).to({scaleX:1.05,scaleY:1.05,rotation:-4.9,x:141.2,y:16.9},5).to({scaleX:1,scaleY:1,rotation:0,x:134.9,y:18.2},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,271.6,36.4);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ24();
	this.instance.parent = this;
	this.instance.setTransform(121.9,-16.4,1,1,0,0,0,97.1,17);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:16.9,scaleX:1.05,scaleY:1.05,x:96.4,y:-18.1},7,cjs.Ease.get(-1)).to({regX:97,scaleX:1.1,scaleY:1.1,x:70.6,y:-19.7},7,cjs.Ease.get(1)).to({regX:97.1,regY:17,scaleX:1,scaleY:1,x:121.9,y:-16.4},10).to({regX:97.2,regY:16.9,scaleX:0.9,scaleY:0.9,x:139.1,y:-14.7},7,cjs.Ease.get(-1)).to({regX:97.1,regY:17,scaleX:0.78,scaleY:0.78,x:158.6,y:-12.7},8,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:121.9,y:-16.4},10).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ25();
	this.instance_1.parent = this;
	this.instance_1.setTransform(122.3,19,1,1,0,0,0,96.8,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.95,scaleY:0.95,x:125,y:17.6},7,cjs.Ease.get(-1)).to({regX:96.9,scaleX:0.9,scaleY:0.9,x:127.8,y:16.2},7,cjs.Ease.get(1)).to({regX:96.8,scaleX:1,scaleY:1,x:122.3,y:19},10).to({scaleX:1.06,scaleY:1.06,x:106,y:19.7},7,cjs.Ease.get(-1)).to({scaleX:1.13,scaleY:1.13,x:87.4,y:20.7},8,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:122.3,y:19},10).wait(1));

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#616161","#000000"],[0,1],-64.6,111.6,64.7,-111.7).s().p("A3cIPIknwdMAzgAAAIEnQdg");
	this.shape.setTransform(123.2,1.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.4,-51.3,359.3,105.6);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.maxresdefault();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.94,0.94);

	this.instance_1 = new lib.Анимация1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(329,188);
	this.instance_1._off = true;

	this.instance_2 = new lib.Анимация2("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(329,186.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},12).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},12).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance}]},1).wait(3));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({_off:true,y:186.8},2).wait(13).to({_off:false,y:188},0).to({y:189.8},2).to({_off:true,scaleX:0.94,scaleY:0.94,x:0,y:0},1).wait(12).to({_off:false,scaleX:1,scaleY:1,x:329,y:188,mode:"synched",startPosition:0},0).to({_off:true,y:186.8},2).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},2).to({_off:true,scaleX:0.94,scaleY:0.94,x:0,y:0},1).wait(27).to({_off:false,scaleX:1,scaleY:1,x:329,y:186.8,mode:"synched",startPosition:0},2).to({_off:true,scaleX:0.94,scaleY:0.94,x:0,y:0},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,658,376);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ13();
	this.instance.parent = this;
	this.instance.setTransform(35,33.9,1,1,0,0,0,2.6,2.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},4).to({alpha:1},5).wait(1));

	// Слой 1
	this.instance_1 = new lib.maps();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.556,0.556);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,85.6,82.2);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8_1();
	this.instance.parent = this;
	this.instance.setTransform(2.3,25.5,1.611,1.611,0,0,0,2.7,2.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:3.3,y:25.8,alpha:0},2).wait(2).to({x:3.6,y:25.5,alpha:1},0).to({x:5,y:25.8,alpha:0},2).wait(3).to({x:8.6,y:26.6,alpha:1},0).to({x:4.5,y:26.1,alpha:0},2).to({_off:true},3).wait(5).to({_off:false,x:2.9,y:25.5,alpha:1},0).to({x:1.7,alpha:0},2).to({_off:true},3).wait(5).to({_off:false,x:-4.8,y:23.4,alpha:1},0).to({x:-0.1,y:25.5,alpha:0},2).wait(3).to({x:0.4,y:25.1,alpha:1},0).to({x:1.9,y:25.5,alpha:0},2).to({_off:true},3).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ11();
	this.instance_1.parent = this;
	this.instance_1.setTransform(10.8,31.7,1,1,0,0,0,10.8,31.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:16.4,y:32.1},9,cjs.Ease.get(-1)).to({x:10.8,y:31.7},10,cjs.Ease.get(1)).to({x:2.8,y:31},10,cjs.Ease.get(-1)).to({x:10.8,y:31.7},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.2,5,23.3,52.5);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AEED8QgIgBgYgHQgfgKg9gHQg/gIgcgJIgugPQgcgIgUgDQgZgCgIgCQgGgCgEgEIgBAAQgSAAgOgDQgKgCgIgDIgEgBQgSAAgJgCQgIgCgGgDIgLgCQgUgFgKgHIgBAAQgPgDgNgHIgSgLIgEgCIgLgDQgGgDgFgDQgNgJgBgVQgBgOAGgLQABgbANgrIAkiAQAGgUAFgIIATgeIAKgVQAHgMAHgHQAKgJATgDQALgCAWACICWAKIAFAAQAfgBATADQAPADAMAFIATAFQAqANAUAJQAhANAYAQQAjAZAYAlQAYAlAGArQAEAUAAAxIgBCOQAAAZgEAPQgGAWgRAIQgJAFgLAAIgKgBg");
	mask.setTransform(6.6,16.4);

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.parent = this;
	this.instance.setTransform(10.8,31.7,1,1,0,0,0,10.8,31.7);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40));

	// Слой 3
	this.instance_1 = new lib.Символ14();
	this.instance_1.parent = this;
	this.instance_1.setTransform(150.1,134.2,1,1,0,0,0,371.2,189.8);
	this.instance_1.alpha = 0.199;
	this.instance_1._off = true;
	this.instance_1.filters = [new cjs.BlurFilter(5, 5, 1)];
	this.instance_1.cache(-2,-2,746,384);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({alpha:0},2).wait(13).to({alpha:0.199},0).to({alpha:0},2).wait(13).to({alpha:0.199},0).to({alpha:0},2).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.2,5,23.3,36.7);


(lib.Символ7 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ8();
	this.instance.parent = this;
	this.instance.setTransform(513.5,410,1,1,0,0,0,513.5,410);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).to({alpha:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-551,-34.2,2215.7,954.2);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ5();
	this.instance.parent = this;
	this.instance.setTransform(107.1,112.3,1,1,0,0,0,123.5,26.8);
	this.instance.alpha = 0.352;
	this.instance.filters = [new cjs.BlurFilter(9, 9, 1)];
	this.instance.cache(15,-1,234,56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.awp();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.916,0.916);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.5,0,243,148.6);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ6();
	this.instance.parent = this;
	this.instance.setTransform(114.5,65.5,1,1,0,0,0,114.5,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:64.3},19).to({y:65.5},20).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.5,0,243,148.6);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 6
	this.instance = new lib.Символ3();
	this.instance.parent = this;
	this.instance.setTransform(365.3,290.6,0.803,0.803,0,0,0,10.3,6.7);
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 172, 184, 135, 0)];
	this.instance.cache(-2,-2,25,17);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ACB887").s().p("Ag5BfIA5i8IAWAAIg5C8gAEQA0QgIABgFgCQgGgBgFgEQgDgDgDgDQgDgFAAgEIAAg+QAAgFADgEQADgEADgDQAFgDAGgCQAFgBAIAAIBPAAQAHAAAHABQAFABAFAEQAJAGAAALIAAA9QAAAFgDAFQgDADgDAEIgLADIgNABgAETAfIBJAAIAAg9IhJAAgABxA0QgOAAgJgFQgHgGAAgIIAAgCIBsAAIAAgVIg+AAQgLAAgFgCQgFgCgDgEQgDgCgBgCIgBgGIAAgDIBbAAIAAgTIhTAAQgOAAgGgGQgFgFAAgIIAAgEIBsAAQAKAAAGACIAMAFIAGAGQACADAAAEIgCAHQgBADgDAEQgCADgFAEQgGACgHAAIAAAAIAJACQAEABADADIAHAEQADADAAAJIAAATQAAAHgEAEQgCAEgGACQgFADgHAAIgMABgAjnA0QgGABgGgCQgGgBgEgEQgFgDgDgDQgCgFAAgEIAAg+QAAgFACgEQADgEAFgDQAEgDAGgCIAMgBIBPAAQAIAAAGABQAGABAFAEQAIAGABALIAAA9QgBAFgCAFQgDADgEAEIgKADIgOABgAjjAfIBIAAIAAg9IhIAAgAl/AxQAAgHADgEQAEgEAGgBIALgCIAOAAIAAg9IgFAAIgMgBQgFgCgEgDQgFgCgDgEQgDgDABgEIAAgEIAmAAQAJAAAHABQAHACADADQAEADACADQACAEAAAEIAABAIAiAAIAAACQAAAIgEADQgEAEgGACQgEACgGAAIhUAAg");
	this.shape.setTransform(312.6,290);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape},{t:this.instance}]},29).to({state:[{t:this.shape},{t:this.instance}]},2).to({state:[{t:this.shape},{t:this.instance}]},37).to({state:[{t:this.shape},{t:this.instance}]},2).to({state:[{t:this.shape},{t:this.instance}]},34).to({state:[{t:this.shape},{t:this.instance}]},2).wait(40));

	// Слой 5
	this.instance_1 = new lib.Символ2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(319.2,289.7,0.468,1,180,0,0,133.4,13.3);
	this.instance_1.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(146));

	// Слой 12
	this.instance_2 = new lib.Символ19();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-143.6,291.4,1,1,0,0,0,7.4,5.5);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(104).to({alpha:1},2).wait(40));

	// Слой 11
	this.instance_3 = new lib.Символ18();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-136.2,291.9,1,1,0,0,0,14.7,5.7);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(68).to({alpha:1},2).wait(34).to({alpha:0},2).wait(40));

	// Слой 10
	this.instance_4 = new lib.Символ17();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-135.6,291.5,1,1,0,0,0,15.2,5.5);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(29).to({alpha:1},2).wait(37).to({alpha:0},2).wait(76));

	// Слой 9
	this.instance_5 = new lib.Символ16();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-125.6,291.4,1,1,0,0,0,21.6,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(29).to({alpha:0},2).wait(115));

	// Слой 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#ACB887").s().p("ABkA3QgGAAgGgCIgLgFQgEgDgDgEQgCgEAAgFIAAg/QAAgGACgEQADgEAEgDQAEgDAHgBQAGgCAGAAIBSAAQAHAAAHACQAFABAFADQAJAGAAALIAAA/QAAAGgCAEQgCAEgFADQgFADgGABQgGACgHAAgABpAgIBKAAIAAg/IhKAAgAg6A3QgIAAgFgCIgLgFQgEgDgDgEQgCgEAAgFIAAg/QAAgGACgEQADgEAEgDQAFgDAGgBQAFgCAIAAIBPAAQAHAAAHACQAFABAFADQAKAGgBALIAAA/QABAGgDAEQgDAEgEADQgFADgGABQgGACgHAAgAg2AgIBHAAIAAg/IhHAAgAjXAzQAAgIAEgDQAFgEAEgCQAGgCAGAAIANAAIAAg/IgDAAQgHAAgGgBQgGgBgEgDQgFgDgDgDQgCgDgBgFIAAgEIApAAQAJAAAGACQAHABAEADQAEADACAEQABADAAAFIAABBIAjAAIAAADQAAAHgDAEQgFAEgEACQgGACgGAAIhWABg");
	this.shape_1.setTransform(-207,291.5);

	this.instance_6 = new lib.Анимация3("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-207,291.5);
	this.instance_6._off = true;

	this.instance_7 = new lib.Анимация4("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(-207,291.5);

	this.instance_8 = new lib.Анимация11("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(-207,291.5);
	this.instance_8._off = true;

	this.instance_9 = new lib.Анимация12("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(-207,291.5);

	this.instance_10 = new lib.Анимация19("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(-207,291.5);
	this.instance_10._off = true;

	this.instance_11 = new lib.Анимация20("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(-207,291.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.instance_6}]},29).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},37).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_10}]},34).to({state:[{t:this.instance_11}]},2).wait(40));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(29).to({_off:false},0).to({_off:true},2).wait(115));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(68).to({_off:false},0).to({_off:true},2).wait(76));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(104).to({_off:false},0).to({_off:true},2).wait(40));

	// Слой 3
	this.instance_12 = new lib.hp();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-251,283);

	this.instance_13 = new lib.arm();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-171,283);

	this.instance_14 = new lib.Анимация5("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(-204,290.5);
	this.instance_14._off = true;

	this.instance_15 = new lib.Анимация6("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(-204,290.5);

	this.instance_16 = new lib.Анимация13("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(-204,290.5);
	this.instance_16._off = true;

	this.instance_17 = new lib.Анимация14("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(-204,290.5);

	this.instance_18 = new lib.Анимация21("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(-204,290.5);
	this.instance_18._off = true;

	this.instance_19 = new lib.Анимация22("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(-204,290.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12}]}).to({state:[{t:this.instance_14}]},29).to({state:[{t:this.instance_15}]},2).to({state:[{t:this.instance_16}]},37).to({state:[{t:this.instance_17}]},2).to({state:[{t:this.instance_18}]},34).to({state:[{t:this.instance_19}]},2).wait(40));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(29).to({_off:false},0).to({_off:true},2).wait(115));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(68).to({_off:false},0).to({_off:true},2).wait(76));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(104).to({_off:false},0).to({_off:true},2).wait(40));

	// Слой 7
	this.instance_20 = new lib.ui3();
	this.instance_20.parent = this;
	this.instance_20.setTransform(53,-2,0.552,0.552);

	this.instance_21 = new lib.Анимация7("synched",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(89.2,7.1);
	this.instance_21._off = true;

	this.instance_22 = new lib.Анимация8("synched",0);
	this.instance_22.parent = this;
	this.instance_22.setTransform(89.2,7.1);

	this.instance_23 = new lib.Анимация15("synched",0);
	this.instance_23.parent = this;
	this.instance_23.setTransform(89.2,7.1);
	this.instance_23._off = true;

	this.instance_24 = new lib.Анимация16("synched",0);
	this.instance_24.parent = this;
	this.instance_24.setTransform(89.2,7.1);

	this.instance_25 = new lib.Анимация23("synched",0);
	this.instance_25.parent = this;
	this.instance_25.setTransform(89.2,7.1);
	this.instance_25._off = true;

	this.instance_26 = new lib.Анимация24("synched",0);
	this.instance_26.parent = this;
	this.instance_26.setTransform(89.2,7.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_20}]}).to({state:[{t:this.instance_21}]},29).to({state:[{t:this.instance_22}]},2).to({state:[{t:this.instance_23}]},37).to({state:[{t:this.instance_24}]},2).to({state:[{t:this.instance_25}]},34).to({state:[{t:this.instance_26}]},2).wait(40));
	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(29).to({_off:false},0).to({_off:true},2).wait(115));
	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(68).to({_off:false},0).to({_off:true},2).wait(76));
	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(104).to({_off:false},0).to({_off:true},2).wait(40));

	// Слой 1
	this.instance_27 = new lib.ui();
	this.instance_27.parent = this;
	this.instance_27.setTransform(1,-3,0.552,0.552);

	this.instance_28 = new lib.Анимация9("synched",0);
	this.instance_28.parent = this;
	this.instance_28.setTransform(35.8,6.9);
	this.instance_28._off = true;

	this.instance_29 = new lib.Анимация10("synched",0);
	this.instance_29.parent = this;
	this.instance_29.setTransform(35.8,6.9);

	this.instance_30 = new lib.Анимация17("synched",0);
	this.instance_30.parent = this;
	this.instance_30.setTransform(35.8,6.9);
	this.instance_30._off = true;

	this.instance_31 = new lib.Анимация18("synched",0);
	this.instance_31.parent = this;
	this.instance_31.setTransform(35.8,6.9);

	this.instance_32 = new lib.Анимация25("synched",0);
	this.instance_32.parent = this;
	this.instance_32.setTransform(35.8,6.9);
	this.instance_32._off = true;

	this.instance_33 = new lib.Анимация26("synched",0);
	this.instance_33.parent = this;
	this.instance_33.setTransform(35.8,6.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_27}]}).to({state:[{t:this.instance_28}]},29).to({state:[{t:this.instance_29}]},2).to({state:[{t:this.instance_30}]},37).to({state:[{t:this.instance_31}]},2).to({state:[{t:this.instance_32}]},34).to({state:[{t:this.instance_33}]},2).wait(40));
	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(29).to({_off:false},0).to({_off:true},2).wait(115));
	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(68).to({_off:false},0).to({_off:true},2).wait(76));
	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(104).to({_off:false},0).to({_off:true},2).wait(40));

	// Слой 4
	this.instance_34 = new lib.Символ2();
	this.instance_34.parent = this;
	this.instance_34.setTransform(-157.9,290.1,0.762,1,0,0,0,133.5,13.4);
	this.instance_34.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(146));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-259.6,-3,641.2,306.4);


(lib.Символ27 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ29();
	this.instance.parent = this;
	this.instance.setTransform(404.7,7.4,1,1,0,0,0,135.8,18.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:86.7},9).to({x:404.7},10).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ23();
	this.instance_1.parent = this;
	this.instance_1.setTransform(82.5,64.7,1,1,0,0,0,96.8,31.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:415},9).to({x:82.5},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.8,-17.7,611.3,105.6);


(lib.Символ22 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ15();
	this.instance.parent = this;
	this.instance.setTransform(329,188,1,1,0,0,0,329,188);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:328.9,scaleX:1.2,scaleY:1.2,x:374.8,y:243},9).to({regX:329,scaleX:1,scaleY:1,x:329,y:188},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,658,376);


(lib.Символ21 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ9();
	this.instance.parent = this;
	this.instance.setTransform(16.1,26.7,1,1,0,0,0,10.8,31.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:10.9,regY:31.6,scaleX:2.14,scaleY:2.14,x:16.6,y:52.2},9).to({regX:10.8,regY:31.7,scaleX:1,scaleY:1,x:16.1,y:26.7},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.9,-14,63.6,66.5);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoandplay();
	}
	this.frame_59 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_64 = function() {
		this.stop(1);
	}
	this.frame_74 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(59).call(this.frame_59).wait(5).call(this.frame_64).wait(10).call(this.frame_74).wait(1));

	// Слой 1
	this.instance = new lib.Символ4();
	this.instance.parent = this;
	this.instance.setTransform(131,65.5,1,1,0,0,0,114.5,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:87.1},14,cjs.Ease.get(-1)).to({x:41},15,cjs.Ease.get(1)).to({x:86},15,cjs.Ease.get(-1)).to({x:131},15,cjs.Ease.get(1)).wait(5).to({regX:114.4,scaleX:1.17,scaleY:1.3,rotation:5,x:45.6,y:49.8},5).to({alpha:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(11.9,0,245,148.6);


// stage content:



(lib.snipe_cs640x305 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		stage.canvas.style.cursor = "none";
		this.pricel.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
			this.pricel.x = stage.mouseX/window.devicePixelRatio;
			this.pricel.y = stage.mouseY/window.devicePixelRatio;
		}
		
		stage.canvas.addEventListener("mouseover", fl_Clickover.bind(this));
		
		function fl_Clickover()
		{
		    this.awp.gotoAndPlay(65);
		    this.pricel.gotoAndPlay(1);
		    this.ter.gotoAndPlay(1);
			this.bg.gotoAndPlay(1);
			this.text.gotoAndPlay(1);
		}
		
		stage.canvas.addEventListener("mouseout", fl_Clickout.bind(this));
		
		function fl_Clickout()
		{
		    this.awp.gotoAndPlay(1);
		    this.pricel.gotoAndPlay(10);
		    this.ter.gotoAndPlay(10);
			this.bg.gotoAndPlay(10);
			this.text.gotoAndPlay(10);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// text
	this.text = new lib.Символ27();
	this.text.parent = this;
	this.text.setTransform(491,75.9,1,1,0,0,0,98.2,32.9);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// maps
	this.instance = new lib.Символ12();
	this.instance.parent = this;
	this.instance.setTransform(43.4,41.5,0.866,0.866,0,0,0,42.8,41.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// ui
	this.instance_1 = new lib.Символ1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(321,20,1,1,0,0,0,63,18);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// pricel
	this.pricel = new lib.Символ7();
	this.pricel.parent = this;
	this.pricel.setTransform(276.2,113,1,1,0,0,0,502.2,410);

	this.timeline.addTween(cjs.Tween.get(this.pricel).wait(1));

	// ter
	this.ter = new lib.Символ21();
	this.ter.parent = this;
	this.ter.setTransform(166.7,37.2,1,1,0,0,0,11.9,19.2);

	this.timeline.addTween(cjs.Tween.get(this.ter).wait(1));

	// awp
	this.awp = new lib.Символ20();
	this.awp.parent = this;
	this.awp.setTransform(377.1,252.5,1,1,0,0,0,123.5,69.5);

	this.timeline.addTween(cjs.Tween.get(this.awp).wait(1));

	// bg
	this.bg = new lib.Символ22();
	this.bg.parent = this;
	this.bg.setTransform(319,143,1,1,0,0,0,329,188);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-457,-178.7,2215.7,954.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;