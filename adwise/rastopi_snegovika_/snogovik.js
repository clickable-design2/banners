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
		{src:"images/bashka.png?1482946203293", id:"bashka"},
		{src:"images/bedro.png?1482946203293", id:"bedro"},
		{src:"images/bedro2.png?1482946203293", id:"bedro2"},
		{src:"images/bg2.jpg?1482946203293", id:"bg2"},
		{src:"images/FIRE.png?1482946203293", id:"FIRE"},
		{src:"images/golova.png?1482946203293", id:"golova"},
		{src:"images/mouse.png?1482946203293", id:"mouse"},
		{src:"images/noga.png?1482946203293", id:"noga"},
		{src:"images/noga2.png?1482946203293", id:"noga2"},
		{src:"images/nogi.png?1482946203293", id:"nogi"},
		{src:"images/ognemet.png?1482946203293", id:"ognemet"},
		{src:"images/plechopngкопия.png?1482946203293", id:"plechopngкопия"},
		{src:"images/plecho2.png?1482946203293", id:"plecho2"},
		{src:"images/plecho_t.png?1482946203293", id:"plecho_t"},
		{src:"images/rukapngкопия.png?1482946203293", id:"rukapngкопия"},
		{src:"images/ruka2.png?1482946203293", id:"ruka2"},
		{src:"images/ruka_t.png?1482946203293", id:"ruka_t"},
		{src:"images/shlyapa.png?1482946203293", id:"shlyapa"},
		{src:"images/telopngкопия.png?1482946203293", id:"telopngкопия"},
		{src:"images/telo_t.png?1482946203293", id:"telo_t"},
		{src:"images/zuby.png?1482946203293", id:"zuby"}
	]
};



lib.ssMetadata = [];


// symbols:



(lib.bashka = function() {
	this.initialize(img.bashka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,79);


(lib.bedro = function() {
	this.initialize(img.bedro);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,218,426);


(lib.bedro2 = function() {
	this.initialize(img.bedro2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,197,336);


(lib.bg2 = function() {
	this.initialize(img.bg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,400);


(lib.FIRE = function() {
	this.initialize(img.FIRE);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,174,374);


(lib.golova = function() {
	this.initialize(img.golova);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,170,192);


(lib.mouse = function() {
	this.initialize(img.mouse);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,46,58);


(lib.noga = function() {
	this.initialize(img.noga);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,268,277);


(lib.noga2 = function() {
	this.initialize(img.noga2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,416,148);


(lib.nogi = function() {
	this.initialize(img.nogi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,144,130);


(lib.ognemet = function() {
	this.initialize(img.ognemet);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,202,201);


(lib.plechopngкопия = function() {
	this.initialize(img.plechopngкопия);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,85,74);


(lib.plecho2 = function() {
	this.initialize(img.plecho2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,45,69);


(lib.plecho_t = function() {
	this.initialize(img.plecho_t);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,115,210);


(lib.rukapngкопия = function() {
	this.initialize(img.rukapngкопия);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,138,99);


(lib.ruka2 = function() {
	this.initialize(img.ruka2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,128,56);


(lib.ruka_t = function() {
	this.initialize(img.ruka_t);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,213,186);


(lib.shlyapa = function() {
	this.initialize(img.shlyapa);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,104);


(lib.telopngкопия = function() {
	this.initialize(img.telopngкопия);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,87,101);


(lib.telo_t = function() {
	this.initialize(img.telo_t);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,382,199);


(lib.zuby = function() {
	this.initialize(img.zuby);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,40,20);


(lib.Символ57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0)","#FF0000"],[0,1],0,0,0,0,0,365.1).s().p("Egy8AZnMAAAgzNMBl5AAAMAAAAzNg");
	this.shape.setTransform(326.2,164);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,652.3,328);


(lib.Символ54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AhiAoIAAgMIAFAAIAAgyIgMAAIABgRIAeABIAOAoIAWgjIAMgCIACA8IAEAAIAAALIgSABIAAgLIADAAIgCghIgRAcIAFAAIAAALIgUAAIAAgLIADAAIgOgjIgCAqIADAAIABANgABIAEIgRAgIgOAAIAWgmIgVgkIAPgCIAQAbIAQgbIAPACIgWAiIAYAmIgMAEgAAVAlIgEgZIgRABIgEAXIgOgBIARg/IgIABIAAgMIAWAAIAaBMgAABACIAPAAIgIgWg");
	this.shape.setTransform(10.7,4.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,21.4,8.3);


(lib.Символ53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ai7VaIAA6QIF3AAIAAaQg");
	mask.setTransform(18.9,137);

	// Слой 2
	this.instance = new lib.FIRE();
	this.instance.parent = this;
	this.instance.setTransform(-21,103,0.474,0.474);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Ai7VaMAAAgqzIF3AAMAAAAqzg");
	this.shape.setTransform(18.9,137);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,37.8,274.1);


(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990033").s().p("AJ/CrIAAgtIANAAIgEjpIhsEAIhKgLIAHj6IgjAAIAAgsIBsABIgGAtIgLgCIgICyIBkjVIBqABIAAAtIgegBIAADkIAXAAIAAAtgADSCoIgEgpIAUAAIgCjxIgPAAIAAgtIDcAAIAAAxIicgFIAADvIAaAAIAAAsgAjOCXQgJgHgFgLQgEgLgCgNIgBgbIAsgPIAEAnQABAHADAAQANAAAIgLQAIgKAGgQIAchfQAFgMAHgCIABAAIhXhkIAjggIB4CFIAEhZIgrAAIAAgsIBXgFIgDCGICFiDIAgAfIhiBjIABAAQAGADAEAMIATBgQAEAPAIALQAHAJALABQADAAACgHIAGgdIADgKIAqAPQAAANgDANQgDAOgGALQgGALgKAHQgKAIgPAAQgSAAgNgJQgNgIgKgOQgKgOgHgRIgbhiIgjAUIgICJIgDAAIgpADIAGiJIgggUIgmBiQgIARgMAOQgMAOgOAIQgOAJgSgBQgOABgJgIgAmECXQgNgDgLgHQgWgNgOgWQgKgPgMgjQgHgcAAgcQAAgfAIgeQAFgUARgiIAPgWQAJgKAKgHQALgIAMgDQAMgEANAAQAQAAAOAEQAOADAMAIQAYAPAQAWQATAhAFASQAIAdAAAbQAAAegIAdQgJAegPAXQgIAMgKAJQgKAKgLAHQgMAHgNAEQgNADgOABQgPgBgNgDgAmBhwQgNAMgIATQgJATgEAYQgFAYAAAWQAAAUAEATQADATAGAOQAGAOAKAJQAKAKAOAAQALAAALgHQALgGAKgLQAKgLAJgOQAJgPAHgQQAHgQADgRQAEgQAAgRQAAgPgEgRQgFgPgJgOQgKgNgOgIQgOgJgUAAQgRAAgNAMgAqQCJQgbgVgLgOQgPgUgJgZQgIgZAAgXQAAgeALgcQALgeASgWIATgUIAWgRQAXgNAZAAQAPAAANAFQAOAFAOAKQAbAVAXAtIgsAIQgOgUgQgJQgPgJgOAAQgQAAgOAJQgNAHgKAOQgLAOgGATQgGARAAASQAAAQAGARQAGARAKAOQAKANAOAIQAOAJAPAAQAWAAAVgNQAVgNARgSIAcAlIgaAXQgOAMgPAHQgQAIgRAGQgRAEgQAAQgcAAgVgNg");
	this.shape.setTransform(72.7,17.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCCFF").s().p("AJ/CrIAAgtIANAAIgEjpIhsEAIhKgLIAHj6IgjAAIAAgtIBsACIgGAtIgLgBIgICxIBkjVIBqABIAAAtIgegBIAADkIAXAAIAAAtgADSCoIgEgpIAUAAIgCjxIgPAAIAAgtIDcAAIAAAxIicgFIAADvIAaAAIAAAsgAjOCXQgJgHgFgLQgEgLgCgNIgBgbIAsgPIAEAnQABAHADAAQANAAAIgKQAIgLAGgQIAchfQAFgMAHgCIABAAIhXhkIAjggIB4CFIAEhZIgrAAIAAgsIBXgFIgDCGICFiDIAgAfIhiBjIABAAQAGADAEAMIATBgQAEAPAIALQAHAJALABQADAAACgHIAGgdIADgKIAqAPQAAANgDANQgDAOgGALQgGALgKAHQgKAIgPAAQgSAAgNgJQgNgIgKgOQgKgOgHgRIgbhiIgjAUIgICJIgDAAIgpADIAGiJIgggUIgmBiQgIARgMAOQgMAOgOAIQgOAJgSgBQgOABgJgIgAmECXQgNgDgLgHQgWgNgOgWQgKgPgMgjQgHgcAAgcQAAgfAIgeQAFgUARgiIAPgWQAJgKAKgHQALgIAMgDQAMgEANAAQAQAAAOAEQAOADAMAIQAYAPAQAWQATAhAFASQAIAdAAAbQAAAegIAdQgJAegPAYQgIALgKAJQgKAKgLAHQgMAHgNAEQgNADgOABQgPgBgNgDgAmBhwQgNAMgIATQgJATgEAYQgFAYAAAWQAAAUAEATQADATAGAOQAGAOAKAJQAKAKAOAAQALAAALgHQALgGAKgLQAKgLAJgOQAJgPAHgQQAHgQADgRQAEgQAAgRQAAgPgEgRQgFgPgJgOQgKgNgOgIQgOgJgUAAQgRAAgNAMgAqQCJQgbgVgLgNQgPgVgJgZQgIgZAAgXQAAgeALgcQALgeASgWIATgUIAWgRQAXgNAZAAQAPAAANAFQAOAFAOAKQAbAVAXAtIgsAIQgOgUgQgJQgPgJgOAAQgQAAgOAJQgNAHgKAOQgLAOgGATQgGARAAASQAAAQAGARQAGARAKANQAKAOAOAIQAOAJAPAAQAWAAAVgNQAVgNARgSIAcAlIgaAXQgOAMgPAHQgQAIgRAGQgRAEgQAAQgcAAgVgNg");
	this.shape_1.setTransform(70.4,16.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.3,-0.4,147.8,34.8);


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990033").s().p("AQdCvIAAguIANAAIgEjoIhsEAIhJgMIAGj5IgiAAIAAgtIBrACIgFAtIgLgCIgJCyIBkjVIBqABIAAAtIgdgBIgBDjIAYAAIAAAugAtjCqIAAgyIAXABIAAjSIgzgBIADhHIB+AHIA3CqIBaiXIAwgGIAJD7IATgBIAAAtIhNADIACgtIALABIgGiNIhFB5IASgBIAAAtIhQABIAAgtIAMAAIg9iVIgECwIALAAIAEA2gAGiCiIgCkOIhPAAIACg0IDYgCIALAxIhlgEIAFEZgABcB2IARgBIgIkPIDWAAIAAAtIibAAIAABFIBbAAIgEAtIhYADIgFBsIB5gDIAJguIAsAKIAABPIjqAHgAx0B2IARgBIgIkPIDWAAIAAAtIibAAIAABFIBbAAIgEAtIhYADIgFBsIB5gDIAJguIAsAKIAABPIjqAHgAL4CaQgNgIgKgOQgKgOgHgRIgbhkIgjAWIgICJIgtgEIANkOIgrABIAAgtIBZgFIgECGICGiEIAgAgIhiBjIABAAQAGADAEAMIATBfQAEAQAIAKQAHALALAAQAEAAABgHIAGgdIADgKIAqAPQAAANgDANQgDAOgGALQgGALgKAHQgKAHgOAAQgSAAgOgIgAnjCQQgOgJgNgNQgNgNgNgSIAlgcIAlAhIATAMQAKAEAKAAQAOAAAKgHQAJgHAHgMQAGgLADgNQADgOAAgLIgCgcIgGgcIgSATQgJAGgJAFQgUAJgSAAQgUAAgPgHQgPgIgLgLQgKgMgFgRQgGgRAAgTIAFhZIAzgBIgHBQIACASQACAJAFAIQAEAIAHAFQAHAGAKAAQAQAAANgKQAMgJAHgNQAIgNAEgPQAFgQAAgLIgDguIAugGIACBPIANB/QAAATgHAVQgHAVgMASQgNASgTAMQgTAMgZAAQgbAAgcgRgAhcCdIAAlJIAWgCQAZAAAZAHQAYAHAUAMQAUAMANAQQAGAIADAJQAEAJAAAKQAAAOgIAPQgIAQgRAPQAMAJAJAKQAIAIAGALQALAXAAAYQAAAPgDAMQgCAMgGAKQgKATgSAKQgSALgYAEQgWAEgbAAgAgsgBIgEBxIAYADQAQAAALgFQANgGAJgJQAIgIAEgLQAFgMAAgLQAAgLgFgLQgDgKgJgIQgIgJgMgEQgKgDgRAAgAgygtIANAAQAOAAALgCQALgDAGgGQARgMAAgWQAAgMgFgHQgFgHgJgEQgHgEgNgBIgegCg");
	this.shape.setTransform(114.2,17.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCCFF").s().p("AQdCvIAAguIANAAIgEjoIhsEAIhJgMIAGj5IgiAAIAAgtIBrACIgFAtIgLgCIgJCyIBkjVIBqABIAAAtIgdgBIgBDjIAYAAIAAAugAtjCqIAAgyIAXABIAAjSIgzgBIADhHIB+AHIA3CqIBaiXIAwgGIAJD7IATgBIAAAtIhNADIACgtIALABIgGiNIhFB5IASgBIAAAtIhQABIAAgtIAMAAIg9iVIgECwIALAAIAEA2gAGiCiIgCkOIhPAAIACg0IDYgCIALAxIhlgEIAFEZgABcB2IARgBIgIkPIDWAAIAAAtIibAAIAABFIBbAAIgEAtIhYADIgFBsIB5gDIAJguIAsAKIAABPIjqAHgAx0B2IARgBIgIkPIDWAAIAAAtIibAAIAABFIBbAAIgEAtIhYADIgFBsIB5gDIAJguIAsAKIAABPIjqAHgAL4CaQgNgIgKgOQgKgOgHgRIgbhkIgjAWIgICJIgtgEIANkOIgrABIAAgtIBZgFIgECGICGiEIAgAgIhiBjIABAAQAGADAEAMIATBfQAEAQAIAKQAHALALAAQAEAAABgHIAGgdIADgKIAqAPQAAANgDANQgDAOgGALQgGALgKAHQgKAHgOAAQgSAAgOgIgAnjCQQgOgJgNgNQgNgNgNgSIAlgcIAlAhIATAMQAKAEAKAAQAOAAAKgHQAJgHAHgMQAGgLADgNQADgOAAgLIgCgcIgGgcIgSATQgJAGgJAFQgUAJgSAAQgUAAgPgHQgPgIgLgLQgKgMgFgRQgGgRAAgTIAFhZIAzgBIgHBQIACASQACAJAFAIQAEAIAHAFQAHAGAKAAQAQAAANgKQAMgJAHgNQAIgNAEgPQAFgQAAgLIgDguIAugGIACBPIANB/QAAATgHAVQgHAVgMASQgNASgTAMQgTAMgZAAQgbAAgcgRgAhcCdIAAlJIAWgCQAZAAAZAHQAYAHAUAMQAUAMANAQQAGAIADAJQAEAJAAAKQAAAOgIAPQgIAQgRAPQAMAJAJAKQAIAIAGALQALAXAAAYQAAAPgDAMQgCAMgGAKQgKATgSAKQgSALgYAEQgWAEgbAAgAgsgBIgEBxIAYADQAQAAALgFQANgGAJgJQAIgIAEgLQAFgMAAgLQAAgLgFgLQgDgKgJgIQgIgJgMgEQgKgDgRAAgAgygtIANAAQAOAAALgCQALgDAGgGQARgMAAgWQAAgMgFgHQgFgHgJgEQgHgEgNgBIgegCg");
	this.shape_1.setTransform(112.4,17.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.8,0,230.2,35.3);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990033").s().p("AL5CrIAAguIANAAIgEjoIhsEAIhJgMIAGj6IgiAAIAAgsIBrACIgFAtIgLgCIgJCxIBkjVIBqACIAAAtIgdgCIgBDkIAYAAIAAAugAF3heIgjAFIACg5IDLgGIAHE0IgwgBIgCj/IhKABIABEBIgxAEgAhACeIgCkOIhPAAIACg0IDWgDIALAyIhjgFIAFEagAnrA1IhKADIgTBeIg5gEIBFkHIghACIAAgvIBhgBIBpE9IhGABgAouAKIA+gBIgghfgAC0CXQgNgDgLgHQgWgOgOgVQgKgPgMgkQgHgbAAgcQAAgfAIgeQAFgVARgiIAPgVQAJgKAKgHQALgIAMgEQAMgEANAAQAQAAAOAEQAOAEAMAIQAYAOAQAXQATAgAFATQAIAcAAAcQAAAdgIAeQgJAegPAXQgIAMgKAJQgKAJgLAIQgMAGgNAFQgNADgOAAQgPAAgNgDgAC3hxQgNAMgIAUQgJATgEAYQgFAXAAAXQAAATAEATQADATAGAPQAGAOAKAJQAKAJAOABQALAAALgHQALgGAKgLQAKgLAJgPQAJgOAHgQQAHgRADgQQAEgRAAgRQAAgPgEgQQgFgQgJgOQgKgNgOgIQgOgIgUgBQgRAAgNAMgAs1CYIADkEIgeAEIACgyIBHACQAeAAAYAKQAXAJAQAOQAQANAIASQAJARAAASQAAARgIAQQgHAQgPALQgPANgYAIQgiAKgVABIAIBzgAsFhuIAABoIASACQANAAALgEQAKgFAHgHQAHgHADgKQAEgJAAgKQAAgLgEgLQgEgJgHgIQgHgHgLgFQgKgFgPAAgAlECIQgbgUgLgOQgPgVgJgZQgIgZAAgXQAAgdALgdQALgdASgWIATgVIAWgQQAXgNAZgBQAPAAANAGQAOAEAOAKQAbAVAXAuIgsAIQgOgVgQgJQgPgIgOgBQgQAAgOAJQgNAIgKAOQgLAOgGASQgGASAAARQAAARAGAQQAGARAKAOQAKAOAOAIQAOAJAPAAQAWAAAVgNQAVgNARgSIAcAlIgaAXQgOALgPAIQgQAIgRAFQgRAFgQAAQgcAAgVgOg");
	this.shape.setTransform(85,17.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCCFF").s().p("AL5CqIAAgtIANAAIgEjoIhsEAIhJgMIAGj6IgiAAIAAgsIBrACIgFAtIgLgCIgJCxIBkjVIBqACIAAAtIgdgCIgBDkIAYAAIAAAtgAF3heIgjAGIACg6IDLgGIAHE0IgwgBIgCj/IhKABIABEBIgxAEgAhACeIgCkOIhPAAIACg0IDWgDIALAyIhjgFIAFEagAnrA1IhKADIgTBeIg5gEIBFkHIghABIAAguIBhgBIBpE9IhGABgAouAKIA+gBIgghfgAC0CXQgNgDgLgHQgWgOgOgVQgKgPgMgkQgHgbAAgcQAAgfAIgfQAFgUARgiIAPgVQAJgKAKgHQALgIAMgEQAMgEANAAQAQAAAOAEQAOAEAMAIQAYAOAQAXQATAgAFATQAIAcAAAcQAAAdgIAeQgJAegPAXQgIAMgKAJQgKAJgLAIQgMAGgNAFQgNADgOAAQgPAAgNgDgAC3hxQgNAMgIAUQgJATgEAYQgFAXAAAXQAAATAEATQADATAGAPQAGAOAKAJQAKAJAOABQALAAALgHQALgGAKgLQAKgLAJgPQAJgOAHgQQAHgRADgQQAEgRAAgRQAAgPgEgQQgFgQgJgOQgKgNgOgIQgOgIgUgBQgRAAgNAMgAs1CYIADkEIgeAEIACgyIBHACQAeAAAYAJQAXAKAQAOQAQANAIASQAJARAAASQAAARgIAQQgHAQgPALQgPANgYAIQgiAKgVABIAIBzgAsFhuIAABoIASACQANAAALgEQAKgFAHgHQAHgHADgKQAEgJAAgKQAAgLgEgLQgEgJgHgIQgHgHgLgFQgKgFgPAAgAlECIQgbgUgLgOQgPgVgJgZQgIgZAAgXQAAgdALgdQALgdASgWIATgVIAWgQQAXgNAZgBQAPAAANAGQAOAEAOAKQAbAVAXAuIgsAIQgOgVgQgJQgPgIgOgBQgQAAgOAJQgNAIgKAOQgLAOgGASQgGASAAARQAAARAGAQQAGARAKAOQAKAOAOAIQAOAJAPAAQAWAAAVgNQAVgNARgSIAcAkIgaAYQgOALgPAIQgQAIgRAFQgRAFgQAAQgcAAgVgOg");
	this.shape_1.setTransform(83,17.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,0,172,34.7);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990033").s().p("AHlCvIAAguIANAAIgEjoIhsEAIhKgMIAHj5IgjAAIAAgtIBsACIgGAtIgLgCIgICyIBkjVIBqABIAAAtIgegBIAADjIAXAAIAAAugAl5CsIgEgqIAUAAIgCjwIgPAAIAAgtIDcgBIAAAyIicgFIAADvIAaAAIAAAsgAsshZIgjAFIACg6IBMgJIADCOIBLgJIABiDIAwABIAHE0IgwgBIgCh+IhKABIABCAIgxAEgApyB2IARgBIgIkPIDWAAIAAAtIibAAIAABFIBbAAIgEAtIhYADIgFBsIB5gDIAJguIAsAKIAABPIjqAHgAL/CaQgOgIgKgOQgKgOgGgRIgbhkIgkAWIgICJIgtgEIAOkOIgsABIAAgtIBagFIgECGICFiEIAhAgIhiBjIABAAQAGADAEAMIASBfQAFAQAHAKQAHALAMAAQADAAACgHIAFgdIADgKIAqAPQAAANgDANQgDAOgGALQgGALgKAHQgKAHgOAAQgSAAgNgIgAPxA5IhKADIgTBeIg5gDIBFkIIghACIAAgvIBhgBIBpE9IhGACgAOuAPIA+gBIgghfgABiCdIAAlJIAWgCQAZAAAaAHQAZAHAUAMQAVAMAMAQQAHAIADAJQADAJAAAKQAAAOgIAPQgIAQgRAPQAMAJAJAKQAJAIAFALQALAXAAAYQAAAPgCAMQgDAMgFAKQgLATgSAKQgSALgYAEQgYAEgbAAgACSgBIgDBxIAXADQARAAANgFQAMgGAJgJQAJgIAEgLQAEgMAAgLQAAgLgEgLQgEgKgIgIQgIgJgNgEQgMgDgRAAgACNgtIAMAAQAOAAAMgCQALgDAIgGQAQgMAAgWQAAgMgFgHQgFgHgJgEQgJgEgNgBIgdgCgAg8CbQgMgDgMgHQgWgNgOgWQgKgPgLgjQgHgcAAgeQAAgdAHgeQAFgVARgiIAQgVQAJgKAKgHQAKgIAMgDQAMgEAOAAQAQAAAOAEQAMADALAIQAYAOAQAXQATAgAFATQAJAdAAAbQAAAdgJAeQgIAegQAXQgIAMgJAJQgKAKgLAHQgMAHgLAEQgNADgPAAQgPAAgNgDgAg4hsQgNAMgJATQgIATgFAYQgEAYAAAWQAAAUADATQADASAHAPQAGAOAKAJQAJAJAOABQALAAALgHQAMgGAJgLQAJgLAJgOQAJgPAGgQQAHgRAEgRQAEgQAAgRQAAgPgFgQQgEgQgKgNQgJgNgPgJQgMgIgUAAQgQAAgNAMgAwCCMQgbgUgLgOQgPgUgJgZQgIgZAAgYQAAgdALgdQALgdASgWIATgVIAWgQQAXgNAZAAQAPAAANAFQAOAFAOAKQAbAUAXAuIgsAIQgOgUgQgJQgPgJgOAAQgQAAgOAIQgNAIgKAOQgLAOgGASQgGASAAASQAAAQAGARQAGARAKANQAKAOAOAIQAOAJAPAAQAWAAAVgNQAVgNARgSIAcAlIgaAXQgOALgPAIQgQAIgRAFQgRAFgQAAQgcAAgVgOg");
	this.shape.setTransform(109.7,17.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCCFF").s().p("AHlCvIAAguIANAAIgEjoIhsEAIhKgMIAHj5IgjAAIAAgtIBsACIgGAtIgLgCIgICyIBkjVIBqABIAAAtIgegBIAADjIAXAAIAAAugAl5CsIgEgqIAUAAIgCjwIgPAAIAAgtIDcgBIAAAyIicgFIAADvIAaAAIAAAsgAsshZIgjAFIACg6IBMgJIADCOIBLgJIABiDIAwABIAHE0IgwgBIgCh+IhKABIABCAIgxAEgApyB2IARgBIgIkPIDWAAIAAAtIibAAIAABFIBbAAIgEAtIhYADIgFBsIB5gDIAJguIAsAKIAABPIjqAHgAL/CaQgOgIgKgOQgKgOgGgRIgbhkIgkAWIgICJIgtgEIAOkOIgsABIAAgtIBagFIgECGICFiEIAhAgIhiBjIABAAQAGADAEAMIASBfQAFAQAHAKQAHALAMAAQADAAACgHIAFgdIADgKIAqAPQAAANgDANQgDAOgGALQgGALgKAHQgKAHgOAAQgSAAgNgIgAPxA5IhKADIgTBeIg5gDIBFkIIghACIAAgvIBhgBIBpE9IhGACgAOuAPIA+gBIgghfgABiCdIAAlJIAWgCQAZAAAaAHQAZAHAUAMQAVAMAMAQQAHAIADAJQADAJAAAKQAAAOgIAPQgIAQgRAPQAMAJAJAKQAJAIAFALQALAXAAAYQAAAPgCAMQgDAMgFAKQgLATgSAKQgSALgYAEQgYAEgbAAgACSgBIgDBxIAXADQARAAANgFQAMgGAJgJQAJgIAEgLQAEgMAAgLQAAgLgEgLQgEgKgIgIQgIgJgNgEQgMgDgRAAgACNgtIAMAAQAOAAAMgCQALgDAIgGQAQgMAAgWQAAgMgFgHQgFgHgJgEQgJgEgNgBIgdgCgAg8CbQgMgDgMgHQgWgNgOgWQgKgPgLgjQgHgcAAgeQAAgdAHgeQAFgVARgiIAQgVQAJgKAKgHQAKgIAMgDQAMgEAOAAQAQAAAOAEQAMADALAIQAYAOAQAXQATAgAFATQAJAdAAAbQAAAdgJAeQgIAegQAXQgIAMgJAJQgKAKgLAHQgMAHgLAEQgNADgPAAQgPAAgNgDgAg4hsQgNAMgJATQgIATgFAYQgEAYAAAWQAAAUADATQADASAHAPQAGAOAKAJQAJAJAOABQALAAALgHQAMgGAJgLQAJgLAJgOQAJgPAGgQQAHgRAEgRQAEgQAAgRQAAgPgFgQQgEgQgKgNQgJgNgPgJQgMgIgUAAQgQAAgNAMgAwCCMQgbgUgLgOQgPgUgJgZQgIgZAAgYQAAgdALgdQALgdASgWIATgVIAWgQQAXgNAZAAQAPAAANAFQAOAFAOAKQAbAUAXAuIgsAIQgOgUgQgJQgPgJgOAAQgQAAgOAIQgNAIgKAOQgLAOgGASQgGASAAASQAAAQAGARQAGARAKANQAKAOAOAIQAOAJAPAAQAWAAAVgNQAVgNARgSIAcAlIgaAXQgOALgPAIQgQAIgRAFQgRAFgQAAQgcAAgVgOg");
	this.shape_1.setTransform(107.9,17.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.8,0,221.3,35.4);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AkoCVQgrgOg0gjQg7gmgXgjQgQgYgEgZQgFgdALgZQALgaAcgMQAcgMAYAMQAMAGALANIATAXQAcAiAhAWQAQALAQAGQABgIAEgKQALghAdgKQAdgKAuAOIA8ATQAUAHAQADQAKgDALgCQATgDAkABQBKABBAgIQAugEARABIARACQAmgLAZgXQAJgJAXgeQASgaAQgLQATgNAYAAQAYAAATANQATANAIAXQAJAXgIAWQgGASgYAfIgNAYQgIAQgIAJQgNARgmAUQggAQgWAKQgSAagnANQgOAFgZAFIgnAIIglALQgeAHgwgCIhOgEIghABQgPAAgMgDIgMACQgrAGg6AAIgIABQhEAAgvgRg");
	this.shape.setTransform(49.6,16.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,99.3,33.2);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgHAWQgJgDgEgIQgDgIAAgEIACgIQADgHAHgEQAHgEAFABQAIAAAGAFQAGAFACAIQACAGgEAJQgEAJgIADQgEACgFAAQgCAAgFgCg");
	this.shape.setTransform(28,5.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgFAhQgLgCgIgIQgHgIgBgMQgCgJAFgJQAGgJAKgGQAKgEAJACQAKACAIAIQAIAIABALQACAJgGAKQgFAKgKAEQgHAEgHAAIgFgBg");
	this.shape_1.setTransform(1.5,2.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("ACEAfIgCgBIgCAAIgCAAIgBgBIgDgEQgCgDABgCIADgFIACgCIABAAQACgDAEAAQAAABAAAAQAAAAABAAQAAAAAAAAQAAAAAAgBQAEAAACADQADACAAAEIAAADIAAABIgCAFIgCACIgDABIgCABIgCgBgAiLgBIgDgGQgBgHABgDQABgGAGgEQAFgDAGAAIAAgBQAJACAGAIIADAIQAAAHgEAGQgFADgGABIgFABQgJAAgEgGg");
	this.shape_2.setTransform(14.4,3.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.9,-1.3,32.3,9);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(2,1,1).p("ACCgKIBEAAAgBiSQA1AAAnAnQAlAlACAzQAAAEAAAEQAAAAAAABQAAA1gnAnQgnAng1ABIAABHAgBjAIAAAuIAACIICDAAAiKgKQAAgBAAAAQAAgEABgEQACgzAlglQAngnA4AAQABAAABAAAjFgKIA7AAICJAAIAACEQgBAAgBAAQg4AAgngoQgngngBg1");
	this.shape.setTransform(19.8,19.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,41.6,40.7);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(2,1,1).p("AEsAAQAAB8hYBYQhYBYh8AAQh7AAhYhYQhYhYAAh8QAAh7BYhYQBYhYB7AAQB8AABYBYQBYBYAAB7g");
	this.shape.setTransform(30.1,30.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,62.1,62.1);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.plecho2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.884,0.884);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,39.8,61);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ruka2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.884,0.884);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,113.1,49.5);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.plechopngкопия();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.884,0.884);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,75.1,65.4);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rukapngкопия();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.884,0.884);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,122,87.5);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.zuby();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.884,0.884);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,35.4,17.7);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shlyapa();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.884,0.884);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,106.1,91.9);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.933,0.933);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,653.4,373.4);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AOJMjIgGAAQgVACgngNQh2gmhVgoQgtgUhpg5Ih1g+QhVgugkgcQgagUgmgmQgwgugPgNQgYgVhVg+QhCgygkgmQgbgdgdgqIgCgEQgRgOgJgKQgTgTgsg6QjhkzkEkSQgdgfgQgOQgbgYgZgOIgegPQgSgKgKgJQgKgJgFgKQgKgEgTgEQgVgGgLgEQgmgQgIgeQgFgVAPgUQAPgUAWAAQAMAAAOAGIAZAMQAOAGAeALQAdAKAOAGQAnASA7A0QDUC3CzDbQB/CbBpCkIAdAsQAfAdAfAUIAjAWQAVAOALAPQANASgCAYIAAAEIAcAOQAbAOAOALQAOALARASIAcAhQAnAtA+ArQAmAaBOAtQBzBDA2AdQBgAyBRAeQAwASAyAOQAUAFAOAGIACgDQACgEABgHIACgKQAJgZAXgIQAMgEAMACQAMADAJAIQAPANACAXQACAPgFAZQgHAagKAPQgTAagdAEIgJABQgJAAgJgDg");
	this.shape.setTransform(100.2,80.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,200.3,161.3);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgKCoQgngRgTgnIgCgEIgQgIQghgSggghQgcgbgMgWQgRgkAHgpQAIgqAdgaQAdgbAqgFQAqgEAiAUIAXASQAQALALAFQANAGAcAHQAmALAiAaQAfAYAOAcQAOAZgBAfQgBAggPAaQgPAagbAQQgKAGgKAEQgLAMgNAIQgaAQgeACIgJAAQgaAAgVgLg");
	this.shape.setTransform(20.4,17.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,40.9,35.9);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AdtIPQgigEgzgOQkmhMj1iSQgjgVhjg/QhSg2gzgcQiNhOi9g+Qh5gpjhg7QiPgnhQgTQh6gdhngNQjHgZkSASQk9AdieANQkYAWjGgPQkEgUjHhYQgxgVgSgYQgogyAmhCQAkhABDgOQA4gLBJATIB/AoQDvBLF3glQBogKDSgbQC9gWB9gCQDggEENAyQC1AhExBRQC/AzBqAkQCiA2B6BCQBHAmB3BNQCEBUA5AgQDFBvDiA1QBSAUArAYQA+AkAFA4QADAqgfAkQgeAhgrAMQgZAHgdAAQgPAAgQgCg");
	this.shape.setTransform(208.8,52.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,417.6,105.8);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AOgKZQgjgHgogcIhCg0QgygnhHgkQgpgVhZgnQlZiSkSh4Ik1iEQhugtgzgZQhYgrg/gtQhDguhRhPQhchbgugsQgqglgSgXQgegkgGgkQgHgvAcgsQAbgrAugRQArgQAyAJQAvAIApAcQAgAWArAvQA1A7ARAPIAuAkQAeAYAQANIAkAkQAXAXAOAMQApAiA7AZQAnARBHAVICMAqQBRAZA5AZQAoASA5AgQAdAQA6AiQAZAOBUAmQAuAXB6BAQBqA4BAAdQBIAgCSA+QB7A7BDBJQA9BBABBFQAAA7gzAqQgoAhgtAAQgMAAgMgCg");
	this.shape.setTransform(108.9,66.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,217.8,133.6);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bedro();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,218,426);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.golova();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,170,192);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.plecho_t();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,115,210);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.telo_t();
	this.instance.parent = this;
	this.instance.setTransform(-1,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,382,199);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3300FF").s().p("AAAAdQgGgBgEgFIgDgDIgBAAQgIgBgFgHQgGgGABgGQACgJAGgFIAOgEQABACAIgHQAFgHACACQACABgDAHQgEAGAIgFQAHgEACgDQAEAKgIAKIAFAAQARACgEAHQgKAIgDAIIABgBIAAABQgDAFgGADQgEADgFAAIgCgBg");
	this.shape.setTransform(3.3,9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("AAFA1IgBABQADgIALgHQAEgKgSgBIgEAAQAIgLgFgKQgBADgGAFQgHAEADgGQADgGgBgCQgCgCgIAIQgIAHAAgCIgOAEQAJgHAIgJIALgJIAHgJQAjgqABADIAEAMQADgFgCAbIgDAlQgBAMgEAGQgEAHgLAGIgKAFIAAgBg");
	this.shape_1.setTransform(4.8,5.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,8.7,12);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ognemet();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.78,0.78);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,157.7,156.9);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bashka();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.884,0.884);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,79.6,69.8);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.nogi();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.884,0.884);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,127.3,114.9);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.telopngкопия();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.884,0.884);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,76.9,89.3);


(lib.Символ21_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mouse();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,46,58);


(lib.Символ20_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ACtBXIAAitIAcAAIAABCIANAAQALAAAHACQAHADAGAGQAFAFACAHQADAHAAALIAAAXQAAAKgDAIQgCAJgFAFQgGAGgHACQgHADgLAAgADJA+IANAAQAHAAADgDQAEgFgBgJIAAgaQABgJgEgEQgDgDgHAAIgNAAgAAYBXIAAitIAbAAIAACUIAYAAIAAiUIAbAAIAACUIAYAAIAAiUIAcAAIAACtgAgWBXIAAitIAaAAIAACtgAh3BXIAAitIAcAAIAABCIAMAAQALAAAIACQAHADAFAGQAGAFACAHQADAHAAALIAAAXQAAAKgDAIQgCAJgGAFQgFAGgHACQgIADgLAAgAhbA+IAMAAQAIAAACgDQAEgFAAgJIAAgaQAAgJgEgEQgCgDgIAAIgMAAgAilBXIAAh8IgTB8IgaAAIgVh6IAAB6IgXAAIAAitIAmAAIAUB6IATh6IAmAAIAACtg");
	this.shape_1.setTransform(25.6,8.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,51.1,17.5);


(lib.Символ19_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ACvBjIAAgYIg7AAIAAAYIgbAAIAAgwIAMAAIAEgKIACgNIAGh+IBNAAIAACVIAMAAIAAAwgACGAcQgBAJgCAGQgBAEgDAEIAkAAIAAh8IgYAAgAEYBLIAAh5IgiB5IgcAAIAAitIAYAAIAABtIAghtIAfAAIAACtgAAEBLIAAitIBKAAIAAAZIgvAAIAAAxIAlAAIAAAYIglAAIAAAyIAvAAIAAAZgAhgBLIAAitIApAAQALAAAIADQAHACAGAFQAFAFACAIQACAHABAKIAAAHQgBANgEAJQgFAJgIAEQAFACAEAEQAEADADAFQAEAHAAAOIAAAPQAAAKgCAIQgDAHgFAGQgGAFgIADQgHACgLAAgAhEAyIAPAAQAHAAAEgEQADgEAAgJIAAgPQAAgMgDgFQgFgCgJAAIgMAAgAhEgbIAKAAQAJAAADgEQAFgEAAgKIAAgKQAAgJgEgEQgDgFgHAAIgNAAgAiIBLIgFgfIgiAAIgFAfIgYAAIAcitIAnAAIAcCtgAiRAUIgNhXIgNBXIAaAAgAj2BLIAAhLIgeAAIAABLIgcAAIAAitIAcAAIAABLIAeAAIAAhLIAdAAIAACtg");
	this.shape_1.setTransform(30.6,9.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,61.1,19.9);


(lib.Символ58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ57();
	this.instance.parent = this;
	this.instance.setTransform(326.2,164,1,1,0,0,0,326.2,164);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,652.3,328);


(lib.Символ56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ58();
	this.instance.parent = this;
	this.instance.setTransform(326.2,164,1,1,0,0,0,326.2,164);
	this.instance.alpha = 0.199;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.121},4).to({alpha:0.199},5).to({alpha:0.121},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,652.3,328);


(lib.Символ52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.Символ54();
	this.instance.parent = this;
	this.instance.setTransform(-15.9,1,1,1,0,0,0,10.7,4.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:4,scaleX:1.18,scaleY:1.18,x:-15.3,y:0.2},9).to({rotation:-15,x:-15.4},5).wait(5).to({regY:4.1,scaleX:1,scaleY:1,rotation:0,x:-15.9,y:1},0).to({regY:4,scaleX:1.18,scaleY:1.18,x:-15.3,y:0.2},9).to({rotation:15},5).to({regY:4.1,scaleX:1,scaleY:1,rotation:0,x:-15.9,y:1},11).wait(1));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFCC00").ss(2,1,1).p("Ai71ZIF3AAMAAAAqzIl3AAg");
	this.shape.setTransform(18.9,137);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(45));

	// Слой 2
	this.instance_1 = new lib.Символ53();
	this.instance_1.parent = this;
	this.instance_1.setTransform(18.9,154.7,1,0.871,0,0,0,18.9,137);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleY:1,y:137},14).to({scaleY:0.87,y:154.7},5).to({scaleY:1,y:137},14).to({scaleY:0.87,y:154.7},11).wait(1));

	// Слой 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF99").s().p("Ai7VaMAAAgqzIF3AAMAAAAqzg");
	this.shape_1.setTransform(18.9,137);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.6,-3.1,88.1,282.6);


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ51();
	this.instance.parent = this;
	this.instance.setTransform(21,15,1,1,0,0,0,72.7,17.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.08,scaleY:1.08,rotation:-7.7,x:11.6,y:11.1},9).to({regX:72.6,rotation:7.3,x:18.8,y:8.9},5).to({regX:72.7,rotation:-7.7,x:11.6,y:11.1},5).to({scaleX:1,scaleY:1,rotation:0,x:21,y:15},10).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ50();
	this.instance_1.parent = this;
	this.instance_1.setTransform(27,59,1,1,0,0,0,114.2,17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:114.1,regY:17.6,scaleX:1.08,scaleY:1.08,rotation:-7.7,x:24.4,y:57.4},9).to({regX:114,rotation:7.3,x:19.1,y:57},5).to({regX:114.1,rotation:-7.7,x:24.4,y:57.4},5).to({regX:114.2,regY:17.5,scaleX:1,scaleY:1,rotation:0,x:27,y:59},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89,-2.7,230.2,79.5);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ47();
	this.instance.parent = this;
	this.instance.setTransform(80.5,17.1,1,1,0,0,0,85,17.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:84.9,scaleX:1.21,scaleY:1.21,rotation:-10,x:90.3,y:16.4},14).to({x:82.2,y:24.6},5).to({x:90.3},5).to({regX:85,scaleX:1.09,scaleY:1.09,rotation:0,x:83.4,y:18.4},5).to({scaleX:1,scaleY:1,x:80.5,y:17.1},10).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ46();
	this.instance_1.parent = this;
	this.instance_1.setTransform(83.7,66.4,1,1,0,0,0,109.7,17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:17.6,scaleX:1.15,scaleY:1.15,rotation:-10,x:101.7,y:71},14).to({regX:109.6,x:93.5,y:79.2},5).to({regX:109.7,x:101.7},5).to({scaleX:1.09,scaleY:1.09,rotation:0,x:86.9,y:72.2},5).to({regY:17.5,scaleX:1,scaleY:1,x:83.7,y:66.4},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.8,0,221.3,84.3);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ38();
	this.instance.parent = this;
	this.instance.setTransform(14.3,3.2,1,1,0,0,0,14.3,3.2);
	this.instance.shadow = new cjs.Shadow("rgba(255,0,0,1)",0,0,0);
	this.instance.filters = [new cjs.BlurFilter(7, 7, 1)];
	this.instance.cache(-4,-3,36,13);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.9,-6.3,45,22);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.parent = this;
	this.instance.setTransform(63.6,57.5,1,1,0,0,0,63.6,57.5);
	this.instance.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(25, 0, 0, 37))];
	this.instance.cache(-2,-2,131,119);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ40();
	this.instance_1.parent = this;
	this.instance_1.setTransform(66.8,105.3,1,1,0,0,0,49.6,16.6);
	this.instance_1.alpha = 0.301;
	this.instance_1.filters = [new cjs.BlurFilter(7, 7, 1)];
	this.instance_1.cache(-2,-2,103,37);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,131,129.7);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.parent = this;
	this.instance.setTransform(38.5,44.6,1,1,0,0,0,38.5,44.6);
	this.instance.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(25, 0, 0, 37))];
	this.instance.cache(-2,-2,81,93);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80,93);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.parent = this;
	this.instance.setTransform(39.8,34.9,1,1,0,0,0,39.8,34.9);
	this.instance.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(25, 0, 0, 37))];
	this.instance.cache(-2,-2,84,74);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,83,73);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_79 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_84 = function() {
		this.play();
	}
	this.frame_139 = function() {
		this.gotoAndPlay(85);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(79).call(this.frame_79).wait(5).call(this.frame_84).wait(55).call(this.frame_139).wait(1));

	// shlyapa.png
	this.instance = new lib.Символ26();
	this.instance.parent = this;
	this.instance.setTransform(71.2,-136,1,1,0,0,0,53,46);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:45.9,rotation:-1.5,x:70.1,y:-136.5},19,cjs.Ease.get(-1)).to({regX:53.1,regY:46,rotation:-6.7,x:66.3,y:-137.5},20,cjs.Ease.get(1)).to({rotation:-1.5,x:70,y:-136.3},20,cjs.Ease.get(-1)).to({regX:53,rotation:0,x:71.2,y:-136},20,cjs.Ease.get(1)).wait(5).to({regY:45.9,scaleY:0.96,y:-121.7},15).wait(25).to({regY:46,scaleY:1,y:-136},15).wait(1));

	// zuby.png
	this.instance_1 = new lib.Символ27();
	this.instance_1.parent = this;
	this.instance_1.setTransform(74.9,-56.2,1,1,0,0,0,17.7,8.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleY:1.06,rotation:-1.5,x:75.9,y:-56.7},19,cjs.Ease.get(-1)).to({scaleY:1.26,rotation:-6.7,x:79.3,y:-58.7},20,cjs.Ease.get(1)).to({scaleY:1.07,rotation:-1.5,x:76.1,y:-56.9},20,cjs.Ease.get(-1)).to({scaleY:1,rotation:0,x:74.9,y:-56.2},20,cjs.Ease.get(1)).wait(5).to({scaleY:0.62,y:-53.5},7).to({scaleY:0.96,y:-45.1},8).wait(25).to({scaleY:1,y:-56.2},15).wait(1));

	// Слой 12
	this.instance_2 = new lib.Символ37();
	this.instance_2.parent = this;
	this.instance_2.setTransform(82.4,-72.2,1,1,0,0,0,14.3,3.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(84).to({_off:false},0).to({scaleY:0.96,y:-60.1},15).wait(25).to({scaleY:1,y:-72.2},15).wait(1));

	// bashka.png
	this.instance_3 = new lib.Символ28();
	this.instance_3.parent = this;
	this.instance_3.setTransform(65,-81.1,1,1,0,0,0,39.8,34.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-1.5,x:65.4,y:-81.4},19,cjs.Ease.get(-1)).to({rotation:-6.7,x:66.5,y:-82.2},20,cjs.Ease.get(1)).to({regX:39.9,rotation:-1.5,x:65.5,y:-81.4},20,cjs.Ease.get(-1)).to({regX:39.8,rotation:0,x:65,y:-81.1},20,cjs.Ease.get(1)).wait(5).to({scaleY:0.96,y:-69},15).wait(25).to({scaleY:1,y:-81.1},15).wait(1));

	// ruka.png - копия
	this.instance_4 = new lib.Символ29();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-40.5,-15.8,1,1,0,0,0,18.1,26.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-2.5,x:-40.4,y:-16.9},19,cjs.Ease.get(-1)).to({rotation:-11.2,x:-40.2,y:-20.3},20,cjs.Ease.get(1)).to({rotation:-2.8,x:-40.4,y:-16.9},20,cjs.Ease.get(-1)).to({rotation:0,x:-40.5,y:-15.8},20,cjs.Ease.get(1)).wait(5).to({scaleX:1,scaleY:0.96,skewX:-22.3,skewY:-20.7,x:0,y:19.5},15).to({regX:18,scaleX:1,scaleY:1,rotation:-6.3,skewX:0,skewY:0,x:-2.3,y:17.8},5,cjs.Ease.get(-1)).to({regX:18.1,scaleX:1,scaleY:0.96,rotation:0,skewX:-22.3,skewY:-20.7,x:0,y:19.5},5,cjs.Ease.get(1)).to({regX:18,scaleX:1,scaleY:1,rotation:-6.3,skewX:0,skewY:0,x:-2.3,y:16.2},7,cjs.Ease.get(-1)).to({regX:18.1,scaleX:1,scaleY:0.96,rotation:0,skewX:-22.3,skewY:-20.7,x:0,y:19.5},8,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,skewX:0,skewY:0,x:-40.5,y:-15.8},15).wait(1));

	// plecho.png - копия
	this.instance_5 = new lib.Символ30();
	this.instance_5.parent = this;
	this.instance_5.setTransform(19.9,-48.3,1,1,0,0,0,68.9,32.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:68.8,regY:32.6,rotation:0.8,y:-48.4},19,cjs.Ease.get(-1)).to({regY:32.7,rotation:3.7,y:-48.3},20,cjs.Ease.get(1)).to({rotation:0.8,x:20},20,cjs.Ease.get(-1)).to({regX:68.9,rotation:0,x:19.9},20,cjs.Ease.get(1)).wait(5).to({regY:32.6,scaleX:0.99,scaleY:0.97,skewX:-37.9,skewY:-35.6,x:31.1,y:-37.7},15).wait(25).to({regY:32.7,scaleX:1,scaleY:1,skewX:0,skewY:0,x:19.9,y:-48.3},15).wait(1));

	// ruka2.png
	this.instance_6 = new lib.Символ32();
	this.instance_6.parent = this;
	this.instance_6.setTransform(99.3,3,1,1,0,0,0,17.3,34);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:17.4,regY:33.9,rotation:-2,y:2.8},19,cjs.Ease.get(-1)).to({regX:17.3,rotation:-9.2,x:99,y:2.5},20,cjs.Ease.get(1)).to({regX:17.4,rotation:-2.3,x:99.4,y:2.9},20,cjs.Ease.get(-1)).to({regX:17.3,regY:34,rotation:0,x:99.3,y:3},20,cjs.Ease.get(1)).wait(5).to({regY:33.9,scaleX:1,scaleY:0.96,skewX:9.6,skewY:8.8,x:99.4,y:11.5},15).to({scaleX:1,scaleY:1,rotation:-18.8,skewX:0,skewY:0,x:97.8,y:-3.5},5,cjs.Ease.get(-1)).to({scaleX:1,scaleY:0.96,rotation:0,skewX:9.6,skewY:8.8,x:99.4,y:11.5},5,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:-18.8,skewX:0,skewY:0,x:99,y:2.3},7,cjs.Ease.get(-1)).to({scaleX:1,scaleY:0.96,rotation:0,skewX:9.6,skewY:8.8,x:99.4,y:11.5},8,cjs.Ease.get(1)).to({regY:34,scaleX:1,scaleY:1,skewX:0,skewY:0,x:99.3,y:3},15).wait(1));

	// plecho2.png
	this.instance_7 = new lib.Символ33();
	this.instance_7.parent = this;
	this.instance_7.setTransform(96.9,-24.5,1,1,0,0,0,19.9,30.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({y:-24.6},19,cjs.Ease.get(-1)).to({y:-25.2},20,cjs.Ease.get(1)).to({y:-24.6},20,cjs.Ease.get(-1)).to({y:-24.5},20,cjs.Ease.get(1)).wait(5).to({regY:30.4,scaleY:0.96,y:-14.8},15).wait(25).to({regY:30.5,scaleY:1,y:-24.5},15).wait(1));

	// telo.png - копия
	this.instance_8 = new lib.Символ31();
	this.instance_8.parent = this;
	this.instance_8.setTransform(49.5,-29.4,1,1,0,0,0,38.5,44.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({scaleX:1.01,scaleY:1.01,x:49.1,y:-29.5},19,cjs.Ease.get(-1)).to({scaleX:1.05,scaleY:1.05,x:47.7,y:-29.7},20,cjs.Ease.get(1)).to({regY:44.5,scaleX:1.01,scaleY:1.01,x:49.1,y:-29.5},20,cjs.Ease.get(-1)).to({regY:44.6,scaleX:1,scaleY:1,x:49.5,y:-29.4},20,cjs.Ease.get(1)).wait(5).to({scaleY:0.96,y:-19.4},15).wait(25).to({scaleY:1,y:-29.4},15).wait(1));

	// nogi.png
	this.instance_9 = new lib.Символ34();
	this.instance_9.parent = this;
	this.instance_9.setTransform(56.6,61.5,1,1,0,0,0,63.6,57.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(84).to({scaleY:0.96,y:67.6},15).wait(25).to({scaleY:1,y:61.5},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.6,-182,253.8,315.7);


(lib.Символ23 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ56();
	this.instance.parent = this;
	this.instance.setTransform(328.1,206.2,1,1,0,0,0,326.2,164);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).to({alpha:0},10).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ24();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,654.2,373.4);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bedro2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ21();
	this.instance_1.parent = this;
	this.instance_1.setTransform(139.8,323.1,1,1,0,0,0,20.4,17.9);
	this.instance_1.alpha = 0.289;
	this.instance_1.filters = [new cjs.BlurFilter(8, 8, 1)];
	this.instance_1.cache(-2,-2,45,40);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,197,349.2);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.noga();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ19();
	this.instance_1.parent = this;
	this.instance_1.setTransform(108.4,107.4,1,1,0,0,0,108.9,66.8);
	this.instance_1.alpha = 0.289;
	this.instance_1.filters = [new cjs.BlurFilter(5, 5, 1)];
	this.instance_1.cache(-2,-2,222,138);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.5,0,271.5,277);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.noga2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ20();
	this.instance_1.parent = this;
	this.instance_1.setTransform(206.5,104.7,1,1,0,0,0,208.8,52.9);
	this.instance_1.alpha = 0.289;
	this.instance_1.filters = [new cjs.BlurFilter(6, 6, 1)];
	this.instance_1.cache(-2,-2,422,110);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.3,0,427,164.8);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.ruka_t();
	this.instance.parent = this;
	this.instance.setTransform(1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ22();
	this.instance_1.parent = this;
	this.instance_1.setTransform(111.1,108.3,1,1,0,0,0,100.2,80.6);
	this.instance_1.alpha = 0.289;
	this.instance_1.filters = [new cjs.BlurFilter(8, 8, 1)];
	this.instance_1.cache(-2,-2,204,165);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,0,218.9,196.7);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ruka_t.png
	this.instance = new lib.Символ12();
	this.instance.parent = this;
	this.instance.setTransform(-48.1,124.6,0.465,0.465,0,0,0,106.4,93.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:106.3,skewX:1.3,x:-48.2,y:124.5},14,cjs.Ease.get(-1)).to({regX:106.2,regY:93.4,scaleY:0.47,skewX:6,y:124.6},15,cjs.Ease.get(1)).to({regY:93.5,scaleY:0.47,skewX:1.3},15,cjs.Ease.get(-1)).to({regX:106.4,regY:93.2,scaleY:0.47,skewX:0,x:-48.1},15,cjs.Ease.get(1)).wait(1));

	// golova.png
	this.instance_1 = new lib.Символ16();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-57.5,75,0.465,0.465,0,0,0,123.8,154.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:123.7,rotation:-3.3,x:-57.6,y:74.5},14,cjs.Ease.get(-1)).to({regX:123.8,regY:154.7,rotation:-15,x:-57.5,y:73},15,cjs.Ease.get(1)).to({rotation:-3.6,x:-57.6,y:74.4},15,cjs.Ease.get(-1)).to({regY:154.6,rotation:0,x:-57.5,y:75},15,cjs.Ease.get(1)).wait(1));

	// plecho_t.png
	this.instance_2 = new lib.Символ13();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-36,81.7,0.465,0.465,0,0,0,31.9,35);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:0.8,y:81.8},14,cjs.Ease.get(-1)).to({regY:35.1,rotation:3.7,x:-36.1,y:81.7},15,cjs.Ease.get(1)).to({rotation:0.8,x:-36,y:81.6},15,cjs.Ease.get(-1)).to({regY:35,rotation:0,y:81.7},15,cjs.Ease.get(1)).wait(1));

	// noga2.png
	this.instance_3 = new lib.Символ14();
	this.instance_3.parent = this;
	this.instance_3.setTransform(252.3,204.2,0.465,0.465,0,0,0,208.2,74.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:208.3,regY:74.2,x:252.4,y:204},14,cjs.Ease.get(-1)).to({regX:208.2,regY:74.1,x:252.3,y:203.2},15,cjs.Ease.get(1)).to({regX:208.3,regY:74.2,x:252.4,y:204},15,cjs.Ease.get(-1)).to({regX:208.2,regY:74.1,x:252.3,y:204.2},15,cjs.Ease.get(1)).wait(1));

	// noga.png
	this.instance_4 = new lib.Символ15();
	this.instance_4.parent = this;
	this.instance_4.setTransform(73.9,279.5,0.465,0.465,0,0,0,133.9,138.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:134,regY:138.8,x:74.3,y:278.9},14,cjs.Ease.get(-1)).to({regX:133.9,regY:138.6,x:75.9,y:276.5},15,cjs.Ease.get(1)).to({regX:134,regY:138.8,x:74.4,y:278.8},15,cjs.Ease.get(-1)).to({regX:133.9,regY:138.6,x:73.9,y:279.5},15,cjs.Ease.get(1)).wait(1));

	// bedro.png
	this.instance_5 = new lib.Символ18();
	this.instance_5.parent = this;
	this.instance_5.setTransform(58.4,144.6,0.465,0.465,0,0,0,109,213.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:109.2,skewX:-0.3,x:58.5,y:144.7},14,cjs.Ease.get(-1)).to({regX:109.1,skewX:-2.1,y:144.6},15,cjs.Ease.get(1)).to({regX:109.2,skewX:-0.5,y:144.7},15,cjs.Ease.get(-1)).to({regX:109,skewX:0,x:58.4,y:144.6},15,cjs.Ease.get(1)).wait(1));

	// bedro2.png
	this.instance_6 = new lib.Символ17();
	this.instance_6.parent = this;
	this.instance_6.setTransform(131.8,121.9,0.465,0.465,0,0,0,98.7,168.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regY:168.3,x:131.7},14,cjs.Ease.get(-1)).to({regX:98.9,skewX:-0.2,x:131.1,y:122},15,cjs.Ease.get(1)).to({regX:99,regY:168.4,skewX:0,x:131.7,y:121.9},15,cjs.Ease.get(-1)).to({regX:98.7,regY:168.2,x:131.8},15,cjs.Ease.get(1)).wait(1));

	// telo_t.png
	this.instance_7 = new lib.Символ11();
	this.instance_7.parent = this;
	this.instance_7.setTransform(15.2,103.6,0.465,0.465,0,0,0,190.9,99.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({skewY:0.3},14,cjs.Ease.get(-1)).to({regY:99.7,skewY:1.2,y:103.7},15,cjs.Ease.get(1)).to({regY:99.8,skewY:0.3},15,cjs.Ease.get(-1)).to({regY:99.6,skewY:0,y:103.6},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115.1,3.1,470.5,340.8);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ36();
	this.instance.parent = this;
	this.instance.setTransform(30.8,31.6,1,1,0,0,0,19.8,19.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:19.9,regY:19.2,rotation:45,x:29.9,y:31.2},9).to({rotation:90},10).to({rotation:45},10).to({regX:19.8,regY:19.3,rotation:0,x:30.8,y:31.6},10).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ35();
	this.instance_1.parent = this;
	this.instance_1.setTransform(30.6,30.6,1,1,0,0,0,30.1,30.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.87,scaleY:0.87,y:30.2},9).to({scaleX:1,scaleY:1,x:31,y:31},10).to({scaleX:0.87,scaleY:0.87,x:31.1,y:30.2},10).to({scaleX:1,scaleY:1,x:30.6,y:30.6},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,62.1,62.1);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.parent = this;
	this.instance.setTransform(4.4,6,1,1,0,0,0,4.4,6);
	this.instance.shadow = new cjs.Shadow("rgba(255,153,51,1)",0,0,1);
	this.instance.filters = [new cjs.BlurFilter(2, 2, 1)];
	this.instance.cache(-2,-2,13,16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-3,18,21);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ7();
	this.instance.parent = this;
	this.instance.setTransform(37.4,92.1,0.523,0.523,0,0,0,4.4,6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({scaleX:1,scaleY:1,x:38.8,y:89.5},5).to({regX:4.5,scaleX:0.79,scaleY:0.79,x:37.9,y:90.7},5).to({regX:4.4,scaleX:1,scaleY:1,x:38.8,y:89.5},5).to({scaleX:0.52,scaleY:0.52,x:37.4,y:92.1},15).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(78.5,79.2,1,1,0,0,0,78.8,78.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.3,0.8,157.7,156.9);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.parent = this;
	this.instance.setTransform(78.8,78.4,1,1,0,0,0,78.8,78.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:85.9},14).to({y:78.4},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.3,0.8,157.7,156.9);


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
	this.instance_2 = new lib.Символ21_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(92.1,330.8,1,1,0,0,0,23,29);
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_2.cache(-2,-2,50,62);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({guide:{path:[92,330.7,87.8,330.3,84.7,327.3,81.3,323.9,81.3,319,81.3,314.2,84.7,310.8,86.9,308.6,89.7,307.8]}},9).to({guide:{path:[89.7,307.8,91.3,307.3,93,307.3,97.8,307.3,101.3,310.8,104.6,314.1,104.7,318.8]}},10).to({guide:{path:[104.7,318.8,104.7,319,104.7,319,104.7,323.9,101.3,327.4,97.8,330.8,93,330.8,92.5,330.8,92,330.8]}},10).wait(1));

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


(lib.Символ55 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ52();
	this.instance.parent = this;
	this.instance.setTransform(133.6,140.2,1,1,0,0,0,18.9,137);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:45.6},9).to({x:133.6},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(88,0,88.1,282.6);


(lib.Символ48 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ49();
	this.instance.parent = this;
	this.instance.setTransform(165.1,-110.6,1,1,0,0,0,72.7,17.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:39.4},9).to({y:-110.6},10).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ45();
	this.instance_1.parent = this;
	this.instance_1.setTransform(112.8,17.1,1,1,0,0,0,85,17.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-117.9},9).to({y:17.1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-130.5,233.6,214.8);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.parent = this;
	this.instance.setTransform(24,18.7,0.772,0.772,0,0,0,30.1,30.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-22.1,y:33.4},9).to({x:-28.1,y:6.4},5).to({x:27.6,y:13.8},10).to({x:80.9,y:8.2},10).to({x:70.9,y:-11.9},5).to({x:29.4,y:8.1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.3,-14,123.1,57);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.parent = this;
	this.instance.setTransform(-130.5,134.1,1,1,0,0,0,30.1,30.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-326.3,y:169.5},14).to({x:-330,y:85.1},10).to({x:-118.5,y:122},15).to({x:106.5,y:157.1},15).to({x:133.5,y:76.1},10).to({x:-104.1,y:113},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-363.8,64.8,521.1,117.9);


(lib.Символ39 = function(mode,startPosition,loop) {
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
	this.kursor = new lib.Символ4();
	this.kursor.parent = this;
	this.kursor.setTransform(79.2,77.6,1,1,0,0,0,78.8,78.4);
	this.kursor.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.kursor).to({alpha:1},9).to({alpha:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,157.7,156.9);


(lib.Символ42 = function(mode,startPosition,loop) {
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
	this.mouse = new lib.Символ16_1();
	this.mouse.parent = this;
	this.mouse.setTransform(-3,-188.9,1,1,0,0,0,23,29);

	this.timeline.addTween(cjs.Tween.get(this.mouse).to({x:-153},14).to({x:-3},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,91.7,38.2);


(lib.Символ44 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ43();
	this.instance.parent = this;
	this.instance.setTransform(22.6,25.3,1,1,0,0,0,23.2,23.2);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).to({alpha:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.3,-2.8,47.9,47.9);


(lib.Символ42_1 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ41();
	this.instance.parent = this;
	this.instance.setTransform(190.3,-74.3,1,1,0,0,0,30.1,30.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},9).to({alpha:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,62.1,62.1);


// stage content:



(lib.snogovik = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		stage.canvas.style.cursor = "none";
		this.kursor.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
			this.kursor.x = stage.mouseX;
			
		}
		
		stage.canvas.addEventListener("mouseover", fl_Clickover.bind(this));
		
		function fl_Clickover()
		{
		    this.snowman.gotoAndPlay(85);
		    this.mouse.gotoAndPlay(1);
		    this.kursor.gotoAndPlay(1);
			this.pricel1.gotoAndPlay(1);
			this.pricel.gotoAndPlay(1);
			this.text.gotoAndPlay(1);
			this.shkala.gotoAndPlay(1);
			this.bg.gotoAndPlay(1);
		}
		
		stage.canvas.addEventListener("mouseout", fl_Clickout.bind(this));
		
		function fl_Clickout()
		{
		    this.snowman.gotoAndPlay(1);
		    this.mouse.gotoAndPlay(15);
		    this.kursor.gotoAndPlay(10);
			this.pricel1.gotoAndPlay(10);
			this.pricel.gotoAndPlay(10);
			this.text.gotoAndPlay(10);
			this.shkala.gotoAndPlay(10);
			this.bg.gotoAndPlay(10);
		}
		
		
		stage.canvas.style.cursor = "none";
		this.pricel.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor_2.bind(this));
		
		function fl_CustomMouseCursor_2() {
			this.pricel.x = stage.mouseX;
			this.pricel.y = stage.mouseY;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// text
	this.text = new lib.Символ48();
	this.text.parent = this;
	this.text.setTransform(455.6,61.4,1,1,0,0,0,110.6,42.1);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// pricel1
	this.pricel1 = new lib.Символ42_1();
	this.pricel1.parent = this;
	this.pricel1.setTransform(332.2,156.2,1,1,0,0,0,94.6,-6.7);

	this.timeline.addTween(cjs.Tween.get(this.pricel1).wait(1));

	// kursor
	this.kursor = new lib.Символ39();
	this.kursor.parent = this;
	this.kursor.setTransform(487.5,231.2,1,1,0,0,0,78.8,78.4);

	this.timeline.addTween(cjs.Tween.get(this.kursor).wait(1));

	// pricel
	this.pricel = new lib.Символ44();
	this.pricel.parent = this;
	this.pricel.setTransform(434.9,190.5,1.237,1.237,0,0,0,71,77.7);

	this.timeline.addTween(cjs.Tween.get(this.pricel).wait(1));

	// mouse
	this.mouse = new lib.Символ42();
	this.mouse.parent = this;
	this.mouse.setTransform(37.6,187.7,1,1,0,0,0,31.3,-75.4);

	this.timeline.addTween(cjs.Tween.get(this.mouse).wait(1));

	// snowman
	this.snowman = new lib.Символ25();
	this.snowman.parent = this;
	this.snowman.setTransform(262,240,1,1,0,0,0,72,65);

	this.timeline.addTween(cjs.Tween.get(this.snowman).wait(1));

	// girl
	this.instance = new lib.Символ10();
	this.instance.parent = this;
	this.instance.setTransform(314.2,262,0.888,0.888,0,0,0,208.1,213.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// skala
	this.shkala = new lib.Символ55();
	this.shkala.parent = this;
	this.shkala.setTransform(609.7,154.7,1,1,0,0,0,44.1,141.3);

	this.timeline.addTween(cjs.Tween.get(this.shkala).wait(1));

	// bg
	this.bg = new lib.Символ23();
	this.bg.parent = this;
	this.bg.setTransform(317.7,131.7,1,1,0,0,0,326.7,186.7);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(311,41.3,750.7,489.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;