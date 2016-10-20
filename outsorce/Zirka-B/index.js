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
		{src:"images/b1_03.png?1476955482348", id:"b1_03"},
		{src:"images/b1_05.png?1476955482348", id:"b1_05"},
		{src:"images/b1_06.png?1476955482348", id:"b1_06"},
		{src:"images/b1_11.png?1476955482348", id:"b1_11"},
		{src:"images/b1_14.png?1476955482348", id:"b1_14"},
		{src:"images/back.jpg?1476955482348", id:"back"},
		{src:"images/blik.png?1476955482348", id:"blik"},
		{src:"images/Logo.png?1476955482348", id:"Logo"},
		{src:"images/u100.jpg?1476955482348", id:"u100"},
		{src:"images/u200.jpg?1476955482348", id:"u200"},
		{src:"images/u500.jpg?1476955482348", id:"u500"}
	]
};



lib.ssMetadata = [];


// symbols:



(lib.b1_03 = function() {
	this.initialize(img.b1_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,71,66);


(lib.b1_05 = function() {
	this.initialize(img.b1_05);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,113,94);


(lib.b1_06 = function() {
	this.initialize(img.b1_06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,30,36);


(lib.b1_11 = function() {
	this.initialize(img.b1_11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,25,40);


(lib.b1_14 = function() {
	this.initialize(img.b1_14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,18,40);


(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,718,393);


(lib.blik = function() {
	this.initialize(img.blik);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,73,55);


(lib.Logo = function() {
	this.initialize(img.Logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,286,118);


(lib.u100 = function() {
	this.initialize(img.u100);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,215,114);


(lib.u200 = function() {
	this.initialize(img.u200);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,219,110);


(lib.u500 = function() {
	this.initialize(img.u500);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,228,109);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.u200();
	this.instance.parent = this;
	this.instance.setTransform(0,82.9,1,1,-22.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,244.4,184.7);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.u100();
	this.instance.parent = this;
	this.instance.setTransform(0,93.4,1,1,-25.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,243.2,196.1);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFD200","#FFE205","#FFFF0B","#FFFFFF"],[0,0.384,0.78,1],-2.4,0,2.4,0).s().p("AAAAVQgGAAgFgBQgEgCgCgDQgGgGAAgIIAAgBIABgIQACgEADgCQACgDAEgCQAFgBAGAAIABAAQAGAAAFABQAEACADADQADACAAAEIABAIIAAABQABAIgFAGQgDADgEACQgFABgGAAg");
	this.shape.setTransform(2.4,14.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFD200","#FFE205","#FFFF0B","#FFFFFF"],[0,0.384,0.78,1],0,2.4,0,-2.4).s().p("AgNAzIgJhlIAuAAIgKBlg");
	this.shape_1.setTransform(2.5,5.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.9,16.4);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFD200","#FFE205","#FFFF0B","#FFFFFF"],[0,0.384,0.78,1],0,9.1,0,-9).s().p("AhPBRIgKgCIAAgkIAOAAQAJAAADgFQADgEABgJIAEhqICRAAIAACgIgrAAIAAh5Ig9AAIgDBIQgBANgDAJQgDAKgFAGQgGAHgKADQgJAEgOgBg");
	this.shape.setTransform(9.1,8.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.1,16.4);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFD200","#FFE205","#FFFF0B","#FFFFFF"],[0,0.384,0.78,1],0,7.2,0,-7.1).s().p("AgDBVQgaAAgRgHQgSgGgJgLQgGgFgDgGQgEgGgCgIQgEgOAAgQIAAgLQAAgQAEgPQAEgOALgLQAJgKASgHQARgGAaAAIAHAAQANAAALACQAKABAJADQAJAEAHAEQAGAEAGAFQAKALAEAOQAEAPAAAQIAAALQAAAQgEAOQgCAIgEAGQgDAGgFAFQgGAGgGAEQgHAEgJADIgTAFQgLACgNAAgAgbgpQgLADgFAHQgEAGgBAJIAAAhQABAIAEAHQAFAHALADQAJAEASAAQASAAAKgEQALgDAFgHQAEgHABgIIAAghQgBgJgEgGQgFgHgLgDQgQgEgMAAQgVABgGADg");
	this.shape.setTransform(9.4,8.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.7,17.1);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFD200","#FFE205","#FFFF0B","#FFFFFF"],[0,0.384,0.78,1],0,7.2,0,-7.2).s().p("AhHBQIAAifICOAAIAAAnIhiAAIAAB4g");
	this.shape.setTransform(7.2,8.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,14.4,16.1);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFDFD","rgba(255,255,255,0)"],[0,0.51,1],-29.5,0,29.8,0).s().p("Aj9JFIhVyJIJRAAIBUSJg");
	this.shape.setTransform(-255.7,60.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-289.7,2.6,67.9,116.4);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF0000","#F16464","#FF0000","#FFFFFF","#FF0000"],[0,0.435,0.6,0.937,1],0,30.5,0,-30.5).s().p("AweDkQg7AAAAg7IAAlRQAAg7A7AAMAg9AAAQA7AAAAA7IAAFRQAAA7g7AAg");
	this.shape.setTransform(111.4,22.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,222.9,45.8);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFD200","#FFE205","#FFFF0B","#FFFFFF"],[0,0.384,0.78,1],0,19.8,0,-19.8).s().p("AAUDWQg+AAgqgPQgrgQgZgbQgMgNgJgQQgJgQgFgSQgKgkAAgqIAAgdQAAgpAKgkQAKglAZgbQAZgbArgPQAqgQA+AAIAWAAQApAAAnAFQAmAFAmAKIAABiIhVgRIhKgFQgtAAgaAJQgaAJgMAPQgLAQgCAWIgDAuIADAvQACAWALAQQAMAQAaAJQAaAJAtAAIBKgFIBVgSIAABjQgmAJgmAFQgnAFgpAAg");
	this.shape.setTransform(19.8,21.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,39.7,43);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFD200","#FFE205","#FFFF0B","#FFFFFF"],[0,0.384,0.78,1],0,22.4,0,-22.3).s().p("AiTDKIAAhiIAcAFIAZABQAaAAALgHQAKgIAHgPIi2kHIAAgYIBtAAIB7DDIBujDIBnAAIAAAYIi8FBQgNAWgSAPQgPAQgXAIQgXAJghAAg");
	this.shape.setTransform(22.4,20.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,44.8,41.8);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFD200","#FFE205","#FFFF0B","#FFFFFF"],[0,0.384,0.78,1],0,21.5,0,-21.4).s().p("ABqDKIAAiXIjSAAIAACXIhtAAIAAmTIBtAAIAACdIDSAAIAAidIBsAAIAAGTg");
	this.shape.setTransform(21.5,20.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,43,40.6);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFD200","#FFE205","#FFFF0B","#FFFFFF"],[0,0.384,0.78,1],0,23.6,0,-23.5).s().p("AgJDWQhCAAgsgPQgrgQgagbQgNgNgJgQQgJgQgFgSQgKgkAAgqIAAgdQAAgpAKgkQAKglAagbQAagbArgPQArgQBDAAIATAAQAhAAAcAEQAbAEAWAIQAWAIARAKQARALANANQAaAbAKAlQAKAkAAApIAAAdQAAApgKAlQgFASgJAQQgJAQgNANQgNANgRALQgRALgWAIQgWAHgbAFQgcADghAAgAhIhqQgaAKgLAQQgMAQgCAVIAABXQACAVAMARQALAQAaAKQAaAJAuAAQAvAAAagJQAagKALgQQAMgRADgVIAAhXQgDgVgMgQQgLgQgagKQgqgKgfAAQg3AEgRAGg");
	this.shape.setTransform(23.6,21.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,47.2,43);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFD200","#FFE205","#FFFF0B","#FFFFFF"],[0,0.384,0.78,1],0,20.6,0,-20.5).s().p("AhfDNIhtgJIAAmTIGCAAIAABhIkVAAIAAA8QAegFAfAAIBOgBQAgAAAvAKQAfAJASARQASAQAIAUQAHAWAAAZIAAAYQAAAZgIAWQgHAWgUARQgUAQghAKQgzAJgiAAgAhfAsIAAA+IBuAFIA2gCQATgDAJgFQAJgFABgGIACgPIgCgOQgBgHgKgFQgIgFgUgCIhtgCg");
	this.shape.setTransform(20.6,20.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,41.2,41.8);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFD200","#FFE205","#FFFF0B","#FFFFFF"],[0,0.384,0.78,1],0,7.3,0,-7.2).s().p("AAhA7IAAgqIhBAAIAAAqIgnAAIAAh2IAnAAIAAAsIBBAAIAAgsIAnAAIAAB2g");
	this.shape.setTransform(7.2,6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,14.5,12);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFD200","#FFE205","#FFFF0B","#FFFFFF"],[0,0.384,0.78,1],0,7.3,0,-7.2).s().p("AhHBcIAAiyIAKAAIANAIQALgHANgCQANgEAOAAQAUAAANAFIAMAGQAFADAEAEQAIAIADALQAEALAAAMIAAAKQAAAMgEAJQgDALgIAIQgEAFgFADIgMAFQgNAFgUAAQgJAAgJgBIgRgFIAAA9gAgQg2QgJABgHACIAAAyQAPADASAAQAMAAAHgCQAGgBADgEQADgEABgFIAAgXQgBgGgDgEQgDgEgGgCQgHgDgMAAQgIAAgJACg");
	this.shape.setTransform(7.2,9.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,14.5,18.5);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFD200","#FFE205","#FFFF0B","#FFFFFF"],[0,0.384,0.78,1],0,5.3,0,-5.3).s().p("Ag0A7IAAh2IBpAAIAAAiIhCAAIAABUg");
	this.shape.setTransform(5.3,6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,10.6,12);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFD200","#FFE205","#FFFF0B","#FFFFFF"],[0,0.384,0.78,1],0,7.7,0,-7.6).s().p("AgDBVQgVAAgOgHQgOgGgIgLQgEgFgDgGQgDgGgCgIQgDgOAAgQIAAgLQAAgQADgPQAEgOAIgLQAIgKAOgHQAOgGAVAAIAHAAQALAAAIACQAJABAHADQAOAHAIAKQAFAGADAGIAEANQADAPAAAQIAAALQAAAQgDAOIgEAOQgDAGgFAFQgIALgOAGQgHADgJACQgIACgLAAgAgSgpQgHADgDAHQgDAGAAAJIAAAhQAAAIADAHQADAHAHADQAHAEALAAQAMAAAHgEQAHgDADgHQADgHABgIIAAghQgBgJgDgGQgDgHgHgDQgHgEgMAAQgLAAgHAEg");
	this.shape.setTransform(7.7,8.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,15.4,17.1);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFD200","#FFE205","#FFFF0B","#FFFFFF"],[0,0.384,0.78,1],0,7.7,0,-7.6).s().p("AgDBVQgVAAgOgHQgOgGgIgLQgEgFgDgGQgDgGgCgIQgDgOAAgQIAAgLQAAgQADgPQAEgOAIgLQAIgKAOgHQAOgGAVAAIAHAAQALAAAIACQAJABAHADQAOAHAIAKQAFAGADAGIAEANQADAPAAAQIAAALQAAAQgDAOIgEAOQgDAGgFAFQgIALgOAGQgHADgJACQgIACgLAAgAgSgpQgHADgDAHQgDAGAAAJIAAAhQAAAIADAHQADAHAHADQAHAEALAAQAMAAAHgEQAHgDADgHQADgHABgIIAAghQgBgJgDgGQgDgHgHgDQgHgEgMAAQgLAAgHAEg");
	this.shape.setTransform(7.7,8.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,15.4,17.1);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFD200","#FFE205","#FFFF0B","#FFFFFF"],[0,0.384,0.78,1],0,7.7,0,-7.6).s().p("AgDBVQgVAAgOgHQgOgGgIgLQgEgFgDgGQgDgGgCgIQgDgOAAgQIAAgLQAAgQADgPQAEgOAIgLQAIgKAOgHQAOgGAVAAIAHAAQALAAAIACQAJABAHADQAOAHAIAKQAFAGADAGIAEANQADAPAAAQIAAALQAAAQgDAOIgEAOQgDAGgFAFQgIALgOAGQgHADgJACQgIACgLAAgAgSgpQgHADgDAHQgDAGAAAJIAAAhQAAAIADAHQADAHAHADQAHAEALAAQAMAAAHgEQAHgDADgHQADgHABgIIAAghQgBgJgDgGQgDgHgHgDQgHgEgMAAQgLAAgHAEg");
	this.shape.setTransform(7.7,8.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,15.4,17.1);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFD200","#FFE205","#FFFF0B","#FFFFFF"],[0,0.384,0.78,1],0,7,0,-6.9).s().p("AhEBSIAAgmIA3AAIAAhBIgyAcIAAgnIBSgxIAJAAIAAB9IApAAIAAAmg");
	this.shape.setTransform(7,8.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,14,16.6);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFD200","#FFE205","#FFFF0B","#FFFFFF"],[0,0.384,0.78,1],0,8.4,0,-8.4).s().p("AgVBQIAAh5Ig+AAIAAgmICnAAIAAAmIg/AAIAAB5g");
	this.shape.setTransform(305.2,12);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFD200","#FFE205","#FFFF0B","#FFFFFF"],[0,0.384,0.78,1],0,8.5,0,-8.5).s().p("AAqBQIAAhlIhTBlIgrAAIAAifIArAAIAABlIBThlIArAAIAACfg");
	this.shape_1.setTransform(286.1,12);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFD200","#FFE205","#FFFF0B","#FFFFFF"],[0,0.384,0.78,1],0,7.3,0,-7.2).s().p("AgJBVQgRAAgPgCQgQgCgOgEIAAgoIAgAHQAPACARAAQANAAAJgBQAJgBAEgCQAEgCABgDIABgFIgBgFQAAgCgEgCIgMgCIgpgBIAAglIAmgBQAHgBAEgCQADgCABgCIAAgGIgBgFQAAgDgEgCQgEgCgIgBIgUgBQgQAAgOACQgNACgPAFIAAgoQANgEAOgCQAPgCAPAAIAFAAQANAAAVAEQAOADAJAHQAIAGADAIQAEAIAAAKIAAAFQAAALgIAJQgHAKgUADQALABAIAEQAHAEAFAEQAFAFABAFQACAFAAAGIAAAFQAAAJgDAJQgEAIgJAGQgIAGgQAEQgPAEgVAAg");
	this.shape_2.setTransform(266.8,12);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFD200","#FFE205","#FFFF0B","#FFFFFF"],[0,0.384,0.78,1],0,9.4,0,-9.3).s().p("AgDBVQgaAAgRgHQgSgGgJgLQgGgFgDgGQgEgGgCgIQgEgOAAgQIAAgLQAAgQAEgPQAEgOALgLQAJgKASgHQARgGAaAAIAHAAQANAAALACQAKABAJADQAJAEAHAEQAGAEAGAFQAKALAEAOQAEAPAAAQIAAALQAAAQgEAOQgCAIgEAGQgDAGgFAFQgGAGgGAEQgHAEgJADIgTAFQgLACgNAAgAgbgpQgLADgEAHQgFAGgBAJIAAAhQABAIAFAHQAEAHALADQAJAEASAAQASAAAKgEQALgDAFgHQAEgHABgIIAAghQgBgJgEgGQgFgHgLgDQgQgEgMAAQgVABgGADg");
	this.shape_3.setTransform(247,12);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FFD200","#FFE205","#FFFF0B","#FFFFFF"],[0,0.384,0.78,1],0,8.3,0,-8.2).s().p("AAnBQIAAh5IhNAAIAAB5IgrAAIAAifICjAAIAACfg");
	this.shape_4.setTransform(226.2,12);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FFD200","#FFE205","#FFFF0B","#FFFFFF"],[0,0.384,0.78,1],0,7.7,0,-7.6).s().p("AhLBQIAAifICXAAIAAAmIhsAAIAAAZIBUAAIAAAkIhUAAIAAAVIBsAAIAAAng");
	this.shape_5.setTransform(207.4,12);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#FFD200","#FFE205","#FFFF0B","#FFFFFF"],[0,0.384,0.78,1],0,10.3,0,-10.2).s().p("ABABlIAAgrIh/AAIAAAbIgdAQIgJAAIAAhRIASAAQAFgDACgHQACgIAAgKIAFhdICTAAIAAB5IAYAAIAABBIgdAQgAghAFIgFAPIBIAAIAAhSIg/AAg");
	this.shape_6.setTransform(187.6,14.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#FFD200","#FFE205","#FFFF0B","#FFFFFF"],[0,0.384,0.78,1],0,8.5,0,-8.5).s().p("AAqBQIAAhlIhTBlIgrAAIAAifIArAAIAABlIBThlIArAAIAACfg");
	this.shape_7.setTransform(160.7,12);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#FFD200","#FFE205","#FFFF0B","#FFFFFF"],[0,0.384,0.78,1],0,2.1,0,-2.2).s().p("AgUBQIAAifIApAAIAACfg");
	this.shape_8.setTransform(146.7,12);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#FFD200","#FFE205","#FFFF0B","#FFFFFF"],[0,0.384,0.78,1],0,7.9,0,-7.9).s().p("AhNBNIAAifIAqAAIAAA7QAMgCAMgBIAfAAQARAAAMAEQAKAEAIAGQAGAIADAHQADAJgBAKIAAAKQAAAKgCAJQgEAKgGAGQgIAIgMADQgSAFgNAAgAgjANIAAAdIArACQAMAAAGgCQAHAAAEgDQACgCABgDIABgHIgBgGQgBgDgDgDQgDgCgHgBIgUgBg");
	this.shape_9.setTransform(135,12.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#FFD200","#FFE205","#FFFF0B","#FFFFFF"],[0,0.384,0.78,1],0,8.4,0,-8.4).s().p("AhSBQIAAifIBcgFQAOAAATAEQAOAEAHAGQAJAHACAJQAEAIAAAKIAAAFQgBALgGAIQgGAJgQADQAKABAFAEQAIADADAEQAEAFABAFQACAEAAAGIAAAFQABAJgEAJQgDAJgJAGQgIAHgOAEQgWAEgOAAgAgoAsIBDABQAJgBADgCQAEgCABgDIABgFIgBgFQAAgCgFgCIgMgCIhDgBgAgogrIAAAaIBAgBQAIgBAEgCQADgCAAgCIABgGIgBgGQAAgCgEgCQgEgCgGgBg");
	this.shape_10.setTransform(115.6,12);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#FFD200","#FFE205","#FFFF0B","#FFFFFF"],[0,0.384,0.78,1],0,8.2,0,-8.1).s().p("AhQBSIAAifIBugEQAJABAHADQANAEAIAIQAIAIADAKQADALAAAMIAAAJQAAAMgDAJQgDAKgHAIQgIAIgMAEQgGADgIABIgvABQgMAAgMgCIAAArgAglgpIAAApIApADQANAAAGgCQAHgBAEgCQADgEABgEIAAgTQgBgFgDgDQgEgDgGgCQgGgBgNAAg");
	this.shape_11.setTransform(96.1,11.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#FFD200","#FFE205","#FFFF0B","#FFFFFF"],[0,0.384,0.78,1],0,7.7,0,-7.6).s().p("AhLBQIAAifICXAAIAAAmIhsAAIAAAZIBUAAIAAAkIhUAAIAAAVIBsAAIAAAng");
	this.shape_12.setTransform(77.4,12);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#FFD200","#FFE205","#FFFF0B","#FFFFFF"],[0,0.384,0.78,1],0,8.3,0,-8.2).s().p("AAnBQIAAh5IhNAAIAAB5IgrAAIAAifICjAAIAACfg");
	this.shape_13.setTransform(58.1,12);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#FFD200","#FFE205","#FFFF0B","#FFFFFF"],[0,0.384,0.78,1],0,9.3,0,-9.3).s().p("AA2BQIgOgfIhPAAIgOAfIgnAAIAAgJIBIiWIApAAIBHCWIAAAJgAgXANIAvAAIgYg1g");
	this.shape_14.setTransform(32.2,12);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#FFD200","#FFE205","#FFFF0B","#FFFFFF"],[0,0.384,0.78,1],0,8.5,0,-8.5).s().p("AApBQIAAg8IhRAAIAAA8IgsAAIAAifIAsAAIAAA/IBRAAIAAg/IArAAIAACfg");
	this.shape_15.setTransform(12.2,12);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#FFD200","#FFE205","#FFFF0B","#FFFFFF"],[0,0.384,0.78,1],-3.6,0,3.6,0).s().p("AAAAQQgKAAgGgCQgHgDgFgEQgEgDgBgEQgBgEAAgGIAAgFIAVAAIAAAFQAAADADADQADACAHABIABAAQAHgBADgCQADgDAAgDIAAgFIAWAAIAAAFQAAAGgCAEQgBAEgEADQgFAEgGADQgHACgKAAg");
	this.shape_16.setTransform(160.7,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.7,-1,309.9,25.3);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.698)").s().p("AijCNIAAkZIFGAAIAAEZg");
	this.shape.setTransform(16.4,14.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,32.8,28.3);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.b1_05();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,113,94);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.608)").s().p("AkXAYQh1gKAAgOQAAgNB1gKQB0gLCjAAQCkAAB0ALQB0AKAAANQAAAOh0AKQh0ALikAAQijAAh0gLg");
	this.shape.setTransform(39.7,3.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,79.4,7.1);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.b1_06();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,30,36);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.b1_11();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,25,40);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.b1_14();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18,40);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.b1_03();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,71,66);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.blik();
	this.instance.parent = this;
	this.instance.setTransform(-262,-7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({x:-244,y:33},0).wait(3).to({x:-324,y:63},0).wait(3).to({x:153,y:13},0).wait(3).to({x:50,y:1},0).wait(3).to({x:222,y:-32},0).wait(3).to({x:-298,y:45},0).wait(3).to({x:-261,y:-7},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-262,-7,73,55);


(lib.Анимация3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.u500();
	this.instance.parent = this;
	this.instance.setTransform(-114,-54.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-114,-54.5,228,109);


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(114,54.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,228,109);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ41();
	this.instance.parent = this;
	this.instance.setTransform(345.1,52.8,1.366,0.84,0,30.8,0,25.1,60.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:736.1,y:55.8},19).wait(40).to({x:343.8,y:52.8},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110.1,11.2,142.8,83.9);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ36();
	this.instance.parent = this;
	this.instance.setTransform(111.4,22.9,1,1,0,0,0,111.4,22.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,222.9,45.8);


(lib.Символ39_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AweDkQg7AAAAg7IAAlRQAAg7A7AAMAg9AAAQA7AAAAA7IAAFRQAAA7g7AAg");
	mask.setTransform(111.4,22.9);

	// Слой 2
	this.instance_1 = new lib.Символ42();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-32.8,25.9,1,1,0,0,0,25.2,60.2);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1 - копия
	this.instance_2 = new lib.Символ40();
	this.instance_2.parent = this;
	this.instance_2.setTransform(111.4,22.9,1,1,0,0,0,111.4,22.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,222.9,45.8);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAEA8IgfgBIgggCIAAh0IAgAAIAAAqQAJgCAJAAIARAAIAEAAQAJAAAOADQAJADAGAFQAFAFACAFQADAHAAAHIAAAHQAAAIgDAHQgCAGgGAFQgGAFgJADQgKADgPAAgAgLAIIgQABIAAAVIASACIANAAIAPgBIAIgCQADgCAAgCIABgFIgBgFQAAgBAAAAQAAgBgBgBQAAAAAAAAQgBgBgBAAIgIgDIgRgBg");
	this.shape.setTransform(161.6,23.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgPA6IAAhYIguAAIAAgbIB6AAIAAAbIguAAIAABYg");
	this.shape_1.setTransform(147.8,22.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAeA6IAAhJIg8BJIgfAAIAAhzIAfAAIAABJIA8hJIAgAAIAABzg");
	this.shape_2.setTransform(133.8,22.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAcA6IAAgkQgJABgJAAIgRAAIgFAAQgOAAgIgDQgKgDgFgGQgFgGgDgGQgCgHAAgJIAAgoIAgAAIAAAkIABAIQAAADACACQADADAFABQAFABAJAAIAOAAIAQgBIAAg1IAfAAIAABzg");
	this.shape_3.setTransform(119.1,22.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgiA8IgIgCIAAgcIAIABIAIABQAHAAADgDQADgCACgEIg1hLIAAgHIAgAAIAiA4IAhg4IAeAAIAAAHIgwBOIgHAOQgEAGgFAFQgDAEgHADQgHACgJAAg");
	this.shape_4.setTransform(105.2,23.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag6A7IgHgBIAAgbIAFAAIAFAAQAHAAADgDQABgDABgHIADhMIBqAAIAABzIgfAAIAAhYIgtAAIgCA0QgBAKgCAHQgCAHgEAFQgEAEgIADQgGADgLgBg");
	this.shape_5.setTransform(90.4,23);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgBA+QgUAAgMgEQgNgFgIgIIgGgIIgEgLQgDgKAAgMIAAgHQAAgMADgLQADgKAHgIQAIgIANgEQAMgFAUAAIAEAAIARABQAIABAHADQAGACAFADIAJAHQAHAIAEAKQACALAAAMIAAAHQAAAMgCAKIgFALIgGAIIgJAHIgLAGIgPADIgRABgAgUgeQgHADgEAFQgDAFgBAGIAAALIAAANQABAFADAFQAEAFAHADQAIADAMAAQAOAAAHgDQAIgDADgFQADgFABgFIABgNIgBgLQgBgGgDgFQgDgFgIgDQgMgDgJAAQgPABgFACg");
	this.shape_6.setTransform(75.5,22.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAdA6IAAhYIg5AAIAABYIgfAAIAAhzIB3AAIAABzg");
	this.shape_7.setTransform(60.3,22.9);

	this.instance = new lib.Символ39_1();
	this.instance.parent = this;
	this.instance.setTransform(111.4,22.9,1,1,0,0,0,111.4,22.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-168.1,-23.1,391,83.9);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ38();
	this.instance.parent = this;
	this.instance.setTransform(111.4,22.9,1,1,0,0,0,111.4,22.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:22.8,scaleX:1.12,scaleY:1.12,x:111.5,y:22.8},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-168.1,-23.1,391,83.9);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 35
	this.instance = new lib.Символ35();
	this.instance.parent = this;
	this.instance.setTransform(230.4,30.1,1,1,0,0,0,19.8,21.4);
	this.instance.shadow = new cjs.Shadow("rgba(255,255,32,1)",1,1,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(16).to({y:22.6},3).to({y:30.1},3).wait(1));

	// Символ 34
	this.instance_1 = new lib.Символ34();
	this.instance_1.parent = this;
	this.instance_1.setTransform(183.2,30.8,1,1,0,0,0,22.4,20.9);
	this.instance_1.shadow = new cjs.Shadow("rgba(255,255,32,1)",1,1,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(13).to({y:23.3},3).to({y:30.8},3).wait(4));

	// Символ 33
	this.instance_2 = new lib.Символ33();
	this.instance_2.parent = this;
	this.instance_2.setTransform(133.5,30.1,1,1,0,0,0,21.4,20.2);
	this.instance_2.shadow = new cjs.Shadow("rgba(255,255,32,1)",1,1,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10).to({y:22.6},3).to({y:30.1},3).wait(7));

	// Символ 32
	this.instance_3 = new lib.Символ32();
	this.instance_3.parent = this;
	this.instance_3.setTransform(80.7,30.1,1,1,0,0,0,23.6,21.4);
	this.instance_3.shadow = new cjs.Shadow("rgba(255,255,32,1)",1,1,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(7).to({y:22.6},3).to({y:30.1},3).wait(10));

	// Символ 31
	this.instance_4 = new lib.Символ31();
	this.instance_4.parent = this;
	this.instance_4.setTransform(29.9,30.8,1,1,0,0,0,20.6,20.9);
	this.instance_4.shadow = new cjs.Shadow("rgba(255,255,32,1)",1,1,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({y:23.3},3).to({y:30.8},3).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7.3,6.7,249.4,51.2);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ28();
	this.instance.parent = this;
	this.instance.setTransform(116,14,1,1,0,0,0,7.2,6);
	this.instance.shadow = new cjs.Shadow("rgba(255,255,32,1)",1,1,1);

	this.instance_1 = new lib.Символ27();
	this.instance_1.parent = this;
	this.instance_1.setTransform(98.6,16.7,1,1,0,0,0,7.2,9.2);
	this.instance_1.shadow = new cjs.Shadow("rgba(255,255,32,1)",1,1,1);

	this.instance_2 = new lib.Символ26();
	this.instance_2.parent = this;
	this.instance_2.setTransform(84.1,14,1,1,0,0,0,5.3,6);
	this.instance_2.shadow = new cjs.Shadow("rgba(255,255,32,1)",1,1,1);

	this.instance_3 = new lib.Символ25();
	this.instance_3.parent = this;
	this.instance_3.setTransform(62.4,12,1,1,0,0,0,7.7,8.5);
	this.instance_3.shadow = new cjs.Shadow("rgba(255,255,32,1)",1,1,1);

	this.instance_4 = new lib.Символ24();
	this.instance_4.parent = this;
	this.instance_4.setTransform(45.2,12,1,1,0,0,0,7.7,8.5);
	this.instance_4.shadow = new cjs.Shadow("rgba(255,255,32,1)",1,1,1);

	this.instance_5 = new lib.Символ23();
	this.instance_5.parent = this;
	this.instance_5.setTransform(27.9,12,1,1,0,0,0,7.7,8.5);
	this.instance_5.shadow = new cjs.Shadow("rgba(255,255,32,1)",1,1,1);

	this.instance_6 = new lib.Символ22();
	this.instance_6.parent = this;
	this.instance_6.setTransform(10.9,11.7,1,1,0,0,0,7,8.2);
	this.instance_6.shadow = new cjs.Shadow("rgba(255,255,32,1)",1,1,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.9,1.5,127.9,31.1);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ48();
	this.instance.parent = this;
	this.instance.setTransform(24.5,133,1,1,0,0,0,24.5,133);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-3.7},24).to({rotation:0},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,244.4,184.7);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.parent = this;
	this.instance.setTransform(122.2,92.4,1,1,0,0,0,122.2,92.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1,skewX:2,x:122.3,y:92.5},4,cjs.Ease.get(-1)).to({scaleY:1,skewX:4.7,x:122.2,y:92.4},5,cjs.Ease.get(1)).to({scaleY:1,skewX:2.3,x:122.3},5,cjs.Ease.get(-1)).to({scaleY:1,skewX:0,x:122.2},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,244.4,184.7);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ47();
	this.instance.parent = this;
	this.instance.setTransform(37.7,141.5,1,1,0,0,0,37.7,141.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-5.8,x:37.8},19).to({rotation:0,x:37.7},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,243.2,196.1);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.parent = this;
	this.instance.setTransform(121.6,98,1,1,0,0,0,121.6,98);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1,skewX:-2.1,y:98.1},2,cjs.Ease.get(-1)).to({scaleY:1,skewX:-4.5,y:98},2,cjs.Ease.get(1)).to({scaleY:1,skewX:-2.5,y:98.1},2,cjs.Ease.get(-1)).to({scaleY:1,skewX:0,y:98},3,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,243.2,196.1);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ46();
	this.instance.parent = this;
	this.instance.setTransform(58.2,19.6,1,1,0,0,0,2.4,8.2);
	this.instance.shadow = new cjs.Shadow("rgba(255,255,32,1)",1,1,1);

	this.instance_1 = new lib.Символ45();
	this.instance_1.parent = this;
	this.instance_1.setTransform(43.8,19.6,1,1,0,0,0,9.1,8.2);
	this.instance_1.shadow = new cjs.Shadow("rgba(255,255,32,1)",1,1,1);

	this.instance_2 = new lib.Символ44();
	this.instance_2.parent = this;
	this.instance_2.setTransform(23.5,19.5,1,1,0,0,0,9.3,8.5);
	this.instance_2.shadow = new cjs.Shadow("rgba(255,255,32,1)",1,1,1);

	this.instance_3 = new lib.Символ43();
	this.instance_3.parent = this;
	this.instance_3.setTransform(4.9,19.5,1,1,0,0,0,7.2,8.1);
	this.instance_3.shadow = new cjs.Shadow("rgba(255,255,32,1)",1,1,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.3,9,71.1,26);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// b1_03.png
	this.instance = new lib.Символ3();
	this.instance.parent = this;
	this.instance.setTransform(36.9,24.5,1,1,0,0,0,35.9,24.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:38.7,y:25.6},4).to({x:36.9,y:24.5},5).to({regX:35.8,regY:24.6,rotation:-2.2,x:32.7,y:26},5).to({regX:35.9,regY:24.5,rotation:0,x:36.9,y:24.5},5).wait(1));

	// b1_14.png
	this.instance_1 = new lib.Символ4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(21.7,78.1,1,1,0,0,0,7.7,35.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:7.8,regY:35,rotation:8.9,x:21.8,y:78},4).to({regX:7.7,regY:35.1,rotation:0,x:21.7,y:78.1},5).to({regX:7.8,rotation:-5.9,x:21.8,y:78.5},5).to({regX:7.7,rotation:0,x:21.7,y:78.1},5).wait(1));

	// b1_11.png
	this.instance_2 = new lib.Символ5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(58.4,77.1,1,1,0,0,0,19.4,35.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:5.7},4).to({rotation:0},5).to({regX:19.5,regY:35.2,rotation:-7.2,x:58.2,y:76.1},5).to({regX:19.4,regY:35.1,rotation:0,x:58.4,y:77.1},5).wait(1));

	// b1_06.png
	this.instance_3 = new lib.Символ6();
	this.instance_3.parent = this;
	this.instance_3.setTransform(37,38,1,1,0,0,0,15,18);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-3.7,x:40.5},4).to({rotation:0,x:37},5).to({regX:15.1,regY:18.1,rotation:-2.5,x:33,y:38.2},5).to({regX:15,regY:18,rotation:0,x:37,y:38},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,0,71,83);


(lib.Анимация2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ37();
	this.instance.parent = this;
	this.instance.setTransform(56,4.5,1,1,0,0,0,111.4,22.9);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,255,255,0.498)").ss(1,1,1).p("AwejjMAg9AAAQA7AAAAA7IAAFRQAAA7g7AAMgg9AAAQg7AAAAg7IAAlRQAAg7A7AAg");
	this.shape.setTransform(56,4.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-223.5,-41.5,404.7,83.9);


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ49();
	this.instance.parent = this;
	this.instance.setTransform(114,54.5,1,1,0,0,0,114,54.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,228,109);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ19();
	this.instance.parent = this;
	this.instance.setTransform(168.3,29.2,2.823,2.823,0,0,0,63.5,13.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,344.2,71.4);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.parent = this;
	this.instance.setTransform(34.5,33,1,1,0,0,0,35.5,33);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30).to({skewY:180},0).wait(30));

	// Слой 2
	this.instance_1 = new lib.Символ8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(39,80.4,1,1,0,0,0,39.7,3.6);
	this.instance_1.filters = [new cjs.BlurFilter(16, 16, 1)];
	this.instance_1.cache(-2,-2,83,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30).to({x:35.1,y:79.8},0).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.7,0,98,95.8);


(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ50();
	this.instance.parent = this;
	this.instance.setTransform(114,54.5,1,1,0,0,0,114,54.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,228,109);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ29();
	this.instance.parent = this;
	this.instance.setTransform(168.5,31.8,1,1,0,0,0,168.5,31.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:168.3,scaleX:1.17,x:168.3},14).to({regX:168.5,scaleX:1,x:168.5},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,344.2,71.4);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ51();
	this.instance.parent = this;
	this.instance.setTransform(222.8,55.3,1,1,0,0,0,222.8,55.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:5.7,x:222.9},24,cjs.Ease.get(-1)).to({rotation:0,x:222.8},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,228,109);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ17();
	this.instance.parent = this;
	this.instance.setTransform(114,54.5,1,1,0,0,0,114,54.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1,skewX:2.8,y:54.6},3,cjs.Ease.get(-1)).to({scaleY:1,skewX:5.6,y:54.5},3,cjs.Ease.get(1)).to({scaleY:1,skewX:2.8,y:54.6},3,cjs.Ease.get(-1)).to({scaleY:1,skewX:0,y:54.5},3,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,228,109);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 12
	this.instance = new lib.Анимация2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(12.6,191.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(132).to({_off:false},0).to({y:125.1},2,cjs.Ease.get(-1)).to({y:17.1},3,cjs.Ease.get(0.99)).to({startPosition:0},97).to({y:125.1},3,cjs.Ease.get(-0.99)).to({y:191.1},2,cjs.Ease.get(1)).wait(1));

	// Слой 9
	this.instance_1 = new lib.Символ20();
	this.instance_1.parent = this;
	this.instance_1.setTransform(77.1,-267.9,1,1,0,0,0,129.1,35.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(130).to({_off:false},0).to({y:-203.6},4,cjs.Ease.get(-1)).to({x:74.1,y:-169.7},3,cjs.Ease.get(0.99)).wait(95).to({x:77.1,y:-203.6},3,cjs.Ease.get(-0.99)).to({y:-267.9},4,cjs.Ease.get(1)).wait(1));

	// 1000 грн
	this.instance_2 = new lib.Символ30();
	this.instance_2.parent = this;
	this.instance_2.setTransform(70.9,-82.9,3.364,3.364,0,0,0,168.3,31.7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(130).to({_off:false},0).to({regX:168.5,regY:31.8,scaleX:1,scaleY:1,rotation:-360,x:69.1,y:-98.3,alpha:1},7).wait(95).to({regX:168.3,regY:31.7,scaleX:3.36,scaleY:3.36,rotation:0,x:70.8,y:-82.9,alpha:0},7).wait(1));

	// НА ПЕРВЫЙ ДЕПОЗИТ
	this.instance_3 = new lib.Символ21();
	this.instance_3.parent = this;
	this.instance_3.setTransform(68.4,126.5,1,1,0,0,0,158.1,14);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(130).to({_off:false},0).to({y:40.8},4,cjs.Ease.get(-1)).to({y:-38.5},3,cjs.Ease.get(0.99)).wait(95).to({y:40.8},3,cjs.Ease.get(-0.99)).to({y:126.5},4,cjs.Ease.get(1)).wait(1));

	// Символ 16
	this.instance_4 = new lib.Символ16();
	this.instance_4.parent = this;
	this.instance_4.setTransform(502.1,77.5,1,1,18.7,0,0,114,54.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(114).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:15,x:437,y:51.6},4,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:10.5,x:355.6,y:19},5,cjs.Ease.get(1)).wait(117));

	// Символ 14
	this.instance_5 = new lib.Символ14();
	this.instance_5.parent = this;
	this.instance_5.setTransform(490,21.4,1,1,43.1,0,0,122.2,92.3);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(84).to({_off:false},0).to({regY:92.2,scaleX:1,scaleY:1,x:428.2,y:3.4},4,cjs.Ease.get(-1)).to({regY:92.3,scaleX:1,scaleY:1,x:351.1,y:-19.1},5,cjs.Ease.get(1)).wait(147));

	// 200.jpg
	this.instance_6 = new lib.Символ14();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-397.9,118.4,1,1,0,0,0,122.2,92.4);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(56).to({_off:false},0).to({rotation:2.3,x:-304.9,y:71.6},4,cjs.Ease.get(-1)).to({rotation:5,x:-211.9,y:24.7},4,cjs.Ease.get(1)).wait(176));

	// Слой 4
	this.instance_7 = new lib.Символ12();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-392.4,52.5,1,1,0,0,0,121.6,98);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(26).to({_off:false},0).to({x:-313,y:23.9},4,cjs.Ease.get(-1)).to({x:-233.6,y:-4.7},4,cjs.Ease.get(1)).wait(206));

	// Слой 8
	this.instance_8 = new lib.Символ18();
	this.instance_8.parent = this;
	this.instance_8.setTransform(68.2,-99.6,1,1,0,0,0,16.4,14.1);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(129).to({_off:false},0).to({regX:16,regY:13.6,scaleX:20.85,scaleY:11.74,x:66.3,y:-88.3},8).wait(94).to({regX:16.4,regY:14.1,scaleX:1,scaleY:1,x:68.2,y:-99.6},8).wait(1));

	// Слой 3
	this.instance_9 = new lib.Символ11();
	this.instance_9.parent = this;
	this.instance_9.setTransform(302.4,-202.8,1,1,0,0,0,35.1,14);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(24).to({_off:false},0).to({scaleX:1.38,scaleY:1.38},3).to({scaleX:1,scaleY:1},3).to({scaleX:1.38,scaleY:1.38},3).to({scaleX:1,scaleY:1},3).to({_off:true},1).wait(17).to({_off:false},0).to({scaleX:1.38,scaleY:1.38},3).to({scaleX:1,scaleY:1},3).to({scaleX:1.38,scaleY:1.38},3).to({scaleX:1,scaleY:1},3).to({_off:true},1).wait(15).to({_off:false},0).to({scaleX:1.38,scaleY:1.38},3).to({scaleX:1,scaleY:1},3).to({scaleX:1.38,scaleY:1.38},3).to({scaleX:1,scaleY:1},3).to({_off:true},1).wait(18).to({_off:false},0).to({scaleX:1.38,scaleY:1.38},3).to({scaleX:1,scaleY:1},3).to({scaleX:1.38,scaleY:1.38},3).to({scaleX:1,scaleY:1},3).to({_off:true},1).wait(114));

	// Слой 1 - копия: 2 - копия
	this.instance_10 = new lib.Символ10();
	this.instance_10.parent = this;
	this.instance_10.setTransform(56.5,118.5,1,1,0,0,0,56.5,47);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(89).to({_off:false},0).to({y:66.5},9).wait(5).to({regX:56.9,regY:46.9,scaleX:0.15,scaleY:0.15,rotation:360,x:10.7,y:-122.5},10,cjs.Ease.get(-1)).to({regX:57.1,regY:46.5,scaleX:0.12,scaleY:0.12},2,cjs.Ease.get(1)).to({regX:56.9,regY:46.9,scaleX:0.15,scaleY:0.15,y:-109.5},3,cjs.Ease.get(-1)).to({y:-65.9},4).to({y:-46.4},2).to({y:-50.3},2).to({y:-47.1},2).to({_off:true},1).wait(111));

	// Слой 1 - копия: 2
	this.instance_11 = new lib.Символ10();
	this.instance_11.parent = this;
	this.instance_11.setTransform(56.5,118.5,1,1,0,0,0,56.5,47);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(58).to({_off:false},0).to({y:66.5},9).wait(5).to({regX:56.9,regY:46.9,scaleX:0.15,scaleY:0.15,rotation:360,x:127.7,y:-122.5},10,cjs.Ease.get(-1)).to({regX:57.1,regY:46.5,scaleX:0.12,scaleY:0.12},2,cjs.Ease.get(1)).to({regX:56.9,regY:46.9,scaleX:0.15,scaleY:0.15,y:-109.5},3,cjs.Ease.get(-1)).to({y:-65.9},4).to({y:-46.4},2).to({y:-50.3},2).to({y:-47.1},2).wait(31).to({_off:true},1).wait(111));

	// Слой 1 - копия
	this.instance_12 = new lib.Символ10();
	this.instance_12.parent = this;
	this.instance_12.setTransform(56.5,118.5,1,1,0,0,0,56.5,47);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(30).to({_off:false},0).to({y:66.5},9).wait(5).to({regX:56.9,regY:46.9,scaleX:0.15,scaleY:0.15,rotation:360,x:-28.3,y:-122.5},10,cjs.Ease.get(-1)).to({regX:57.1,regY:46.5,scaleX:0.12,scaleY:0.12},2,cjs.Ease.get(1)).to({regX:56.9,regY:46.9,scaleX:0.15,scaleY:0.15,y:-109.5},3,cjs.Ease.get(-1)).to({y:-65.9},4).to({y:-46.4},2).to({y:-50.3},2).to({x:-21.8,y:-47.1},2).wait(59).to({_off:true},1).wait(111));

	// Слой 1
	this.instance_13 = new lib.Символ10();
	this.instance_13.parent = this;
	this.instance_13.setTransform(56.5,118.5,1,1,0,0,0,56.5,47);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({y:66.5},9).wait(5).to({regX:56.9,regY:46.9,scaleX:0.15,scaleY:0.15,rotation:360,x:173.2,y:-122.5},10,cjs.Ease.get(-1)).to({regX:57.1,regY:46.5,scaleX:0.12,scaleY:0.12},2,cjs.Ease.get(1)).to({regX:56.9,regY:46.9,scaleX:0.15,scaleY:0.15,y:-109.5},3,cjs.Ease.get(-1)).to({y:-65.9},4).to({y:-46.4},2).to({y:-50.3},2).to({y:-47.1},2).wait(89).to({_off:true},1).wait(111));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,71.5,113,94);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ2();
	this.instance.parent = this;
	this.instance.setTransform(362.8,220.5,1,1,0,0,0,35.5,41.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2 - копия
	this.instance_1 = new lib.Символ39();
	this.instance_1.parent = this;
	this.instance_1.setTransform(373.6,124.2,0.688,0.688,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 2
	this.instance_2 = new lib.Символ39();
	this.instance_2.parent = this;
	this.instance_2.setTransform(366.1,141.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 1
	this.instance_3 = new lib.back();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,718,393);


// stage content:
(lib.index = function(mode,startPosition,loop) {
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
	this.instance = new lib.Logo();
	this.instance.parent = this;
	this.instance.setTransform(6,-1,0.685,0.685);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(295.5,279,1,1,0,0,0,56.5,47);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ7();
	this.instance_2.parent = this;
	this.instance_2.setTransform(306,136.5,1,1,0,0,0,359,196.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(247,90,718,457.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;