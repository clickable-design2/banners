(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 726,
	height: 270,
	fps: 24,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/back.jpg?1484925801592", id:"back"},
		{src:"images/finback.jpg?1484925801592", id:"finback"},
		{src:"images/kam.png?1484925801592", id:"kam"},
		{src:"images/kam2.png?1484925801592", id:"kam2"},
		{src:"images/kam3.png?1484925801592", id:"kam3"},
		{src:"images/kam4.png?1484925801592", id:"kam4"},
		{src:"images/logo.png?1484925801592", id:"logo"},
		{src:"images/mon1.png?1484925801592", id:"mon1"},
		{src:"images/mon2.png?1484925801592", id:"mon2"},
		{src:"images/sem.png?1484925801592", id:"sem"},
		{src:"images/tickpngкопия.png?1484925801592", id:"tickpngкопия"}
	]
};



lib.ssMetadata = [];


// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,467);


(lib.finback = function() {
	this.initialize(img.finback);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,467);


(lib.kam = function() {
	this.initialize(img.kam);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,109,109);


(lib.kam2 = function() {
	this.initialize(img.kam2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,109,109);


(lib.kam3 = function() {
	this.initialize(img.kam3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,109,101);


(lib.kam4 = function() {
	this.initialize(img.kam4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,109,109);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,310,60);


(lib.mon1 = function() {
	this.initialize(img.mon1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,162,221);


(lib.mon2 = function() {
	this.initialize(img.mon2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,130,213);


(lib.sem = function() {
	this.initialize(img.sem);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,109,104);


(lib.tickpngкопия = function() {
	this.initialize(img.tickpngкопия);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,65);


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mon2();
	this.instance.parent = this;
	this.instance.setTransform(53.4,-99.1,0.867,0.867,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(22.9,-99.1,141.7,200.8);


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mon1();
	this.instance.parent = this;
	this.instance.setTransform(10,-80,0.867,0.867);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10,-80,140.5,191.7);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(3,1,1).p("EgtngWGMBbPAAAMAAAAsNMhbPAAAg");
	this.shape.setTransform(292.1,141.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,587.2,286.1);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgaArQgKgKAAgTIAAgaQAAgUAKgLQAKgLAQAAQAQAAAKALQALALAAAUIAAAaQAAATgLAKQgKAMgQgBQgQABgKgMgAgIgdQgDAFAAAJIAAAeQAAAKADAGQADAEAFAAQAFAAAEgEQADgGAAgKIAAgeQAAgJgDgFQgEgGgFAAQgFAAgDAGg");
	this.shape.setTransform(3.7,5.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,7.5,11);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.finback();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.906,0.906);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,634.1,423);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.back();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.861,0.861);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,602.6,402);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AJ8B0IAAguIhjAAIAAAuIgrAAIAAhOIAJAAQAOAAAFgSQAGgSABgnIAEhLIB+AAIAACWIAUAAIAABOgAI8glQgBAZgEARQgEAUgHANIA8AAIAAh2IgqAAgAQ1AzQgVgWAAggIAAgiQAAghAVgXQAWgWAjAAQAjAAAWAWQAWAXAAAhIAAAiQAAAggWAWQgWAWgjAAQgjAAgWgWgARUhFQgKAMAAAUIAAAiQAAASAKANQAJAMARAAQARAAAKgMQAJgNAAgSIAAgiQAAgUgJgMQgKgNgRAAQgRAAgJANgACLAzQgWgWAAggIAAgiQAAghAWgXQAWgWAjAAQAiAAAWAWQAWAXAAAhIAAAiQAAAggVAWQgWAWgjAAQgjAAgWgWgACphFQgJAMAAAUIAAAiQAAASAJANQAJAMASAAQARAAAJgMQAJgNAAgSIAAgiQAAgUgJgMQgJgNgRAAQgSAAgJANgAt3A0QgVgUAAghIAAgmQAAgiAUgVQAUgVAhAAQAjAAATAQQAUARgBAfIAAABIgqAAQAAgSgHgHQgIgHgQAAQgPAAgHALQgIAMAAAUIAAAmQAAASAIAMQAJALAQAAQAPAAAGgHQAHgIAAgRIApAAIABABQAAAfgSARQgTAQghAAQgiAAgVgVgAPbBGIAAh1IgBAAIgpB1IgcAAIgohzIgBAAIAABzIgrAAIAAi2IA4AAIAqB/IAAAAIAqh/IA5AAIAAC2gAKwBGIAAi2IB5AAIAAAgIhOAAIAAApIBBAAIAAAhIhBAAIAAAsIBOAAIAAAggAEsBGIAAi2IB5AAIAAAgIhOAAIAAApIBBAAIAAAhIhBAAIAAAsIBOAAIAAAggAAwBGIAAhIIhCAAIAABIIgrAAIAAi2IArAAIAABNIBCAAIAAhNIArAAIAAC2gAiqBGIAAiWIgwAAIAAggICMAAIAAAgIgxAAIAACWgAkIBGIgLgkIg3AAIgLAkIgtAAIA8i2IAuAAIA9C2gAkdACIgRg4IgBAAIgRA4IAjAAgAm8BGIAAiWIguAAIAAAyQAAA2gSAXQgRAXgkAAIgEAAIAAggIAFAAQARAAAFgPQAFgNAAgoIAAhSICEAAIAAC2gAp0BGIAAiWIhEAAIAACWIgrAAIAAi2ICaAAIAAC2gAwaBGIAAi2IB6AAIAAAgIhPAAIAAApIBCAAIAAAhIhCAAIAAAsIBOAAIAAAggAy8BGIAAi2IB9AAIAAAgIhRAAIAAAdIAYAAQAhAAAUARQAUARAAAZQAAAcgUARQgUARghAAgAyQAmIAYAAQAOAAAIgJQAIgIAAgNQAAgKgIgIQgIgJgOAAIgYAAg");
	this.shape.setTransform(121.3,11.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,242.7,23.3);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663300").s().p("AJ8B0IAAguIhjAAIAAAuIgrAAIAAhOIAJAAQAOAAAFgSQAGgSABgnIAEhLIB+AAIAACWIAUAAIAABOgAI8glQgBAZgEARQgEAUgHANIA8AAIAAh2IgqAAgAQ1AzQgVgWAAggIAAgiQAAghAVgXQAWgWAjAAQAjAAAWAWQAWAXAAAhIAAAiQAAAggWAWQgWAWgjAAQgjAAgWgWgARUhFQgKAMAAAUIAAAiQAAASAKANQAJAMARAAQARAAAKgMQAJgNAAgSIAAgiQAAgUgJgMQgKgNgRAAQgRAAgJANgACLAzQgWgWAAggIAAgiQAAghAWgXQAWgWAjAAQAiAAAWAWQAWAXAAAhIAAAiQAAAggVAWQgWAWgjAAQgjAAgWgWgACphFQgJAMAAAUIAAAiQAAASAJANQAJAMASAAQARAAAJgMQAJgNAAgSIAAgiQAAgUgJgMQgJgNgRAAQgSAAgJANgAt3A0QgVgUAAghIAAgmQAAgiAUgVQAUgVAhAAQAjAAATAQQAUARgBAfIAAABIgqAAQAAgSgHgHQgIgHgQAAQgPAAgHALQgIAMAAAUIAAAmQAAASAIAMQAJALAQAAQAPAAAGgHQAHgIAAgRIApAAIABABQAAAfgSARQgTAQghAAQgiAAgVgVgAPbBGIAAh1IgBAAIgpB1IgcAAIgohzIgBAAIAABzIgrAAIAAi2IA4AAIAqB/IAAAAIAqh/IA5AAIAAC2gAKwBGIAAi2IB5AAIAAAgIhOAAIAAApIBBAAIAAAhIhBAAIAAAsIBOAAIAAAggAEsBGIAAi2IB5AAIAAAgIhOAAIAAApIBBAAIAAAhIhBAAIAAAsIBOAAIAAAggAAwBGIAAhIIhCAAIAABIIgrAAIAAi2IArAAIAABNIBCAAIAAhNIArAAIAAC2gAiqBGIAAiWIgwAAIAAggICMAAIAAAgIgxAAIAACWgAkIBGIgLgkIg3AAIgLAkIgtAAIA8i2IAuAAIA9C2gAkdACIgRg4IgBAAIgRA4IAjAAgAm8BGIAAiWIguAAIAAAyQAAA2gSAXQgRAXgkAAIgEAAIAAggIAFAAQARAAAFgPQAFgNAAgoIAAhSICEAAIAAC2gAp0BGIAAiWIhEAAIAACWIgrAAIAAi2ICaAAIAAC2gAwaBGIAAi2IB6AAIAAAgIhPAAIAAApIBCAAIAAAhIhCAAIAAAsIBOAAIAAAggAy8BGIAAi2IB9AAIAAAgIhRAAIAAAdIAYAAQAhAAAUARQAUARAAAZQAAAcgUARQgUARghAAgAyQAmIAYAAQAOAAAIgJQAIgIAAgNQAAgKgIgIQgIgJgOAAIgYAAg");
	this.shape.setTransform(121.3,11.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,242.7,23.3);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(0,-50,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-50,217,42);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.796)").s().p("AgzBJQgVgUAAgiIAAgkQAAgjAUgUQAUgWAgAAQAiAAATARQAUAQgBAfIAAABIgqAAQAAgRgHgHQgIgHgPAAQgOAAgHALQgIAMAAATIAAAlQAAAUAIALQAJAMAOAAQAPgBAGgGQAHgIAAgSIApAAIABABQAAAggSARQgTAPghAAQggABgVgWg");
	this.shape.setTransform(0.8,-20.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.5,-29.9,14.6,19);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.796)").s().p("AvLBRQgWgNABgaIAAgBIAqAAQAAAIAIAGQAJAHANgBQAQABAJgHQAJgGAAgJQAAgOgIgHQgIgFgQAAIgaAAIAAgfIAaAAQAPABAHgHQAHgFAAgMQAAgJgIgFQgIgHgPAAQgMABgIAFQgIAGAAAIIgpAAIAAgBQgBgWAUgPQAUgOAeAAQAiAAAUANQAUAOAAAZQAAANgIAKQgIALgOAGQAQAEAIALQAJAKAAAQQAAAZgVAPQgWAPgiAAQgeAAgVgOgANUBcIAAi3IArAAIAAA9IAZAAQAhAAAUASQAUAPAAAbQAAAbgUARQgUASghAAgAN/A7IAZAAQAOAAAIgIQAIgJAAgNQAAgLgIgJQgIgIgOAAIgZAAgALnBcIAAiWIgwAAIAAghICMAAIAAAhIgxAAIAACWgAKJBcIgLgkIg3AAIgLAkIgtAAIA8i3IAuAAIA9C3gAJ0AXIgRg4IgBAAIgRA4IAjAAgAF3BcIAAi3IA9AAQAiAAAUANQATANAAAZQAAANgGAKQgGALgNAFQAQACAIAKQAIALAAAPQAAAbgSAOQgSAOgiAAgAGiA7IAcAAQAOAAAHgGQAGgFAAgLQAAgMgGgGQgGgGgOAAIgdAAgAGigOIARAAQAQAAAHgFQAIgGAAgKQAAgMgHgGQgIgFgPAAIgSAAgAEvBcIAAi3IArAAIAAC3gACUBcIAAi3IAsAAIAAA9IAYAAQAhAAAUASQAUAPAAAbQAAAbgUARQgUASghAAgADAA7IAYAAQAOAAAIgIQAIgJAAgNQAAgLgIgJQgIgIgOAAIgYAAgAAoBcIAAiWIguAAIAAghICKAAIAAAhIgxAAIAACWgAg1BcIgLgkIg3AAIgKAkIguAAIA9i3IAuAAIA8C3gAhKAXIgRg4IgBAAIgRA4IAjAAgAlDBcIAAi3IB9AAIAAAhIhRAAIAAAcIAYAAQAhAAAUASQAUAPAAAbQAAAbgUARQgUASghAAgAkXA7IAYAAQAOAAAIgIQAIgJAAgNQAAgLgIgJQgIgIgOAAIgYAAgAl8BcIgLgkIg3AAIgLAkIgtAAIA8i3IAuAAIA9C3gAmRAXIgRg4IgBAAIgRA4IAjAAgAqOBcIAAi3IBHAAQAhAAATARQAUAQAAAcQAAAcgUAOQgTAQghAAIgcAAIAABAgApjgCIAcAAQAOAAAHgIQAIgHAAgNQAAgMgHgIQgIgIgOAAIgcAAgArHBcIgLgkIg3AAIgLAkIgtAAIA8i3IAuAAIA9C3gArcAXIgRg4IgBAAIgRA4IAjAAg");
	this.shape.setTransform(92.8,-19.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.5,-29.2,198.7,19);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.796)").s().p("AEvBJQgUgUgBgiIAAglQAAgiAVgUQATgWAhABQAkAAASAQQAUAQAAAgIgBAAIgqAAQAAgRgHgHQgIgIgQAAQgOAAgIAMQgIAMAAATIAAAlQAAATAIAMQAJALAQAAQAPABAGgIQAHgHAAgSIApAAIABACQAAAfgSARQgSAQgiAAQgiAAgVgWgAjfBeIgPgFIAFgeIAKACIAIAAQALAAAFgDQAFgFADgJIACgFIhDiCIAtAAIAoBRIABADIABAAIAkhUIAsAAIhFCRQgIAUgMAKQgMALgUAAgAHDBcIAAi3IAsAAIAAA9IAYAAQAhAAAUASQAUAPAAAbQAAAbgUARQgUASghAAgAHvA7IAYAAQAOAAAIgIQAIgJAAgNQAAgLgIgJQgIgIgOAAIgYAAgADWBcIAAhwIgBAAIhEBwIgrAAIAAi3IArAAIAABxIABAAIBEhxIArAAIAAC3gAAhBcIAAhFIggADQghAAgUgQQgVgNABggIAAg4IAqAAIAAA4QABARAHAHQAIAGAPAAIAggDIAAhTIAqAAIAAC3gAksBcIgLgkIg3AAIgKAkIgtAAIA8i3IAuAAIA8C3gAlBAXIgRg4IgBAAIgRA4IAjAAgAngBcIAAhLIhEAAIAABLIgrAAIAAi3IArAAIAABNIBEAAIAAhNIArAAIAAC3g");
	this.shape.setTransform(51.2,-19.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-29.2,118.5,19);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0.796)").s().p("AEvBIQgWgWAAgiIAAgfQAAgiAWgXQAVgVAkAAQAiAAAWAVQAWAXAAAiIAAAfQAAAigWAWQgWAXgiAAQgkAAgVgXgAFNgwQgJANAAATIAAAgQAAAUAJANQAJAMASAAQARAAAJgMQAJgNAAgUIAAggQAAgTgJgNQgJgNgRAAQgSAAgJANgAjnBRQgVgNABgbIAAAAIAqAAQAAAJAIAGQAJAFANAAQAPAAAKgFQAJgHAAgJQAAgOgIgGQgIgHgQABIgbAAIAAgfIAbAAQAOAAAIgFQAHgHAAgLQAAgIgIgHQgJgFgOgBQgMAAgIAGQgIAFAAAKIgqAAIAAgBQgBgYAVgOQAUgOAeAAQAiAAAUANQAUAOAAAaQAAAMgIAKQgIALgOAGQAPADAJAMQAJALAAAPQAAAagWAOQgVAPgiAAQgeAAgWgOgAHoBcIAAgiIArAAIAAAigADUBcIAAhLIhEAAIAABLIgsAAIAAi3IAsAAIAABOIBEAAIAAhOIArAAIAAC3gAAdBcIAAhwIgBAAIhBBwIgrAAIAAi3IArAAIAABxIAAAAIBChxIArAAIAAC3gAkwBcIgLgkIg3AAIgLAkIhjAAIgqhKIgNAAIAABKIgqAAIAAi3IAqAAIAABIIAJAAIAqhIIA2AAIg6BUIA+BiIA8i2IAuAAIA9C3gAlFAXIgRg3IgBAAIgRA3IAjAAgAHoAnQAAgSAHgIQAFgJARgKQAJgFAFgIQAEgIAAgKQAAgLgFgGQgGgHgKAAQgJABgGAEQgFAGAAAKIgrAAIAAAAQAAgbARgNQASgNAcAAQAdgBASAPQARAQAAAaQAAAQgJANQgKAMgOAHQgJAGgCAGQgDAFAAALg");
	this.shape.setTransform(63.4,-7.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.5,-16.8,115.8,19);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0.796)").s().p("AhFBcIAAi3IA9AAQAgAAAUANQASAMABAaQAAANgHAKQgFALgOAFQARACAIALQAIAKAAAPQAAAbgSAOQgTAOghAAgAgaA7IAaAAQAOAAAGgGQAHgFAAgLQAAgMgGgGQgGgGgOAAIgbAAgAgagOIARAAQANAAAIgFQAHgGAAgKQABgMgIgGQgHgFgNAAIgSAAg");
	this.shape.setTransform(-1,-8.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-17.6,14.1,18.5);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0.796)").s().p("Aq7BIQgVgWAAgiIAAgfQAAgiAVgWQAWgXAkAAQAiAAAWAXQAWAWAAAiIAAAfQAAAigWAWQgWAXgiAAQgkAAgWgXgAqcgwQgJANAAATIAAAgQAAAVAJAMQAJANASAAQARAAAJgNQAJgMAAgVIAAggQAAgTgJgNQgJgNgRAAQgSAAgJANgAOeBcIAAi3IArAAIAAA9IAZAAQAhAAAUARQAUAQAAAbQAAAbgUARQgUASghAAgAPJA7IAZAAQAOAAAIgIQAIgJAAgNQAAgMgIgIQgIgIgOAAIgZAAgAKOBcIAAi3IAsAAIAACWIA5AAIAAiWIArAAIAACWIA4AAIAAiWIArAAIAAC3gAH+BcIAAi3IB5AAIAAAhIhOAAIAAAoIBCAAIAAAfIhCAAIAAAuIBOAAIAAAhgAHFBcIgMgkIg3AAIgKAkIguAAIA9i3IAuAAIA9C3gAGvAXIgRg4IgBAAIgRA4IAjAAgACzBcIAAi3IA9AAQAiAAAUANQASANAAAZQABANgHAKQgFALgOAFQARACAIAKQAIALAAAPQAAAbgSAOQgTAOghAAgADeA7IAcAAQAOAAAGgGQAHgFAAgLQAAgMgGgGQgGgGgOgBIgdAAgADegOIARAAQAPAAAIgFQAHgFAAgLQABgMgIgGQgHgFgPAAIgSAAgABrBcIAAi3IArAAIAAC3gAguBcIAAi3IAsAAIAAA9IAWAAQAhAAAUARQAUAQAAAbQAAAbgUARQgUASghAAgAgCA7IAWAAQAOAAAIgIQAIgJAAgNQAAgMgIgIQgIgIgOAAIgWAAgAjTBcIAAi3IBGAAQAhAAATARQAUAQAAAcQAAAcgUAOQgTAQghAAIgcAAIAABAgAipgCIAcAAQAOAAAIgIQAHgHAAgNQAAgMgHgIQgIgIgOAAIgcAAgAllBcIAAi3IB9AAIAAAhIhRAAIAACWgAmsBcIAAhwIgBAAIhDBwIgsAAIAAi3IAsAAIAABwIAAAAIBEhwIArAAIAAC3gAtzBcIAAi3IBIAAQAgAAAUARQATAQAAAcQAAAcgTAOQgUAQggAAIgcAAIAABAgAtHgCIAcAAQAOAAAGgIQAIgHAAgNQAAgMgHgIQgIgIgNAAIgcAAgAu7BcIAAiWIhEAAIAACWIgrAAIAAi3ICbAAIAAC3g");
	this.shape.setTransform(90.7,-8.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.1,-17.6,213.5,19);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,0,0,0.796)","rgba(255,0,0,0.51)","rgba(255,0,0,0.761)"],[0,0.565,0.902],-388.5,0,388.5,0).s().rr(-388.5,-144.5,777,289,5.5);
	this.shape.setTransform(398,161.8,0.197,2.809,90);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(0,0,0,0.796)","rgba(0,0,0,0.51)","rgba(0,0,0,0.761)"],[0,0.565,0.902],-388.5,0,388.5,0).s().rr(-388.5,-144.5,777,289,5.5);
	this.shape_1.setTransform(398,161.4,0.442,2.809,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-10.3,812,343.6);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663300").s().p("Aj8BxIgSgFIAGgmIANAEIAJAAQANAAAHgFQAGgEAEgMIACgGIhSihIA4AAIAwBjIABAEIABAAIAshnIA3AAIhUC0QgKAWgPAOQgOANgaAAgAH+BwIAAjiIA1AAIAABLIAfAAQAoAAAZAVQAZATAAAiQAAAhgZAWQgZAVgoABgAIzBHIAfAAQARAAAKgLQAKgKAAgPQAAgPgKgKQgKgKgRAAIgfAAgAF4BwIAAi6Ig7AAIAAgoICsAAIAAAoIg8AAIAAC6gADzBwIAAiMIgBAAIhTCMIg1AAIAAjiIA1AAIAACLIAAAAIBUiLIA1AAIAADigAgYBwIAAi6Ig7AAIAAgoICqAAIAAAoIg8AAIAAC6gAnfBwIAAjiIBXAAQApAAAXAVQAYAUAAAiQAAAigYASQgXAVgpgBIgiAAIAABPgAmqgFIAiAAQARAAAKgJQAJgKAAgPQAAgPgJgKQgJgKgSAAIgiAAgAozBwIg0hbIgPAAIAABbIg1AAIAAjiIA1AAIAABZIALAAIA0hZIBCAAIhIBnIBOB7g");
	this.shape.setTransform(68.4,11.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,136.9,23.1);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().rr(-195.55,-41,391.1,82,5.5);
	this.shape.setTransform(195.6,41);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,391.1,82);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tickpngкопия();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,50,65);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.kam();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,109,109);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.kam2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,109,109);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.kam3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,109,101);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.kam4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,109,109);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sem();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,109,104);


(lib.Анимация3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(-8.3,135.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-188.7,100.5,360.9,69.1);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ47();
	this.instance.parent = this;
	this.instance.setTransform(3.7,5.5,1,1,0,0,0,3.7,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.5},9).to({alpha:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,7.5,11);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ46();
	this.instance.parent = this;
	this.instance.setTransform(82.7,5.5,1,1,0,0,0,3.7,5.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AABBEIAAhsIAYAAIABAJQADgFAFgDQAEgCAGAAQAPAAAIALQAIAMAAASIAAAAQAAASgIAKQgIALgOAAQgGAAgFgCQgEgCgDgEIAAAlgAAfgVQgDACgBADIAAAfQABADADABQADABAEAAQAHAAACgFQADgGABgJIAAAAQgBgKgDgGQgDgGgGAAQgEAAgDABgAFWAmIAAgVIAaAAIAAAVgADVAmIAAhOIAZAAIAAA7IASAAIAAg7IAZAAIAAA7IATAAIAAg7IAYAAIAABOgACoAmIAAhOIAYAAIAABOgABZAmIAAhOIAZAAIAAAYIANAAQAQAAALAHQAKAIgBALQABAMgKAIQgLAIgQAAgAByATIANAAQAFAAADgDQADgCAAgFQAAgEgDgCQgDgCgFAAIgNAAgAg8AmIAAhOIA3AAIAAATIgeAAIAAA7gAhiAmIAAgqIAAAAIgWAqIgZAAIAAhOIAZAAIAAAqIAAAAIAWgqIAZAAIAABOgAi+AmIAAhOIAYAAIAABOgAkNAmIAAhOIAZAAIAAAYIANAAQAQAAAKAHQALAIgBALQABAMgLAIQgKAIgQAAgAj0ATIANAAQAFAAADgDQADgCAAgFQAAgEgDgCQgDgCgFAAIgNAAgAlvAmIAAhpIAkAAQAUAAAKAHQAMAIAAAOQAAAIgEAGQgEAGgHADQAKACAFAGQAEAHAAAGQAAAQgKAIQgLAIgTAAgAlVATIAQAAQAHAAAEgDQAEgEAAgGQAAgGgDgCQgEgEgIAAIgQAAgAlVgXIAJAAQAJAAAEgDQAFgDAAgGQAAgHgFgDQgDgDgJAAIgKAAgAFWgZIAAgUIAaAAIAAAUg");
	this.shape.setTransform(36.8,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,86.4,13.9);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ42();
	this.instance.parent = this;
	this.instance.setTransform(301.2,201,1,1,0,0,0,301.2,201);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.03,scaleY:1.03,x:301.3,y:201.1},19,cjs.Ease.get(-1)).to({scaleX:1.06,scaleY:1.06},20,cjs.Ease.get(1)).to({scaleX:1.03,scaleY:1.03,x:301.4},20,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:301.2,y:201},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,602.6,402);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ39();
	this.instance.parent = this;
	this.instance.setTransform(163.8,36,1,1,0,0,0,121.3,11.7);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66CC00").s().rr(-195.55,-41,391.1,82,5.5);
	this.shape.setTransform(164.1,34.4,0.839,0.839);

	this.instance_1 = new lib.Символ38();
	this.instance_1.parent = this;
	this.instance_1.setTransform(163.8,36,1,1,0,0,0,121.3,11.7);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().rr(-195.55,-41,391.1,82,5.5);
	this.shape_1.setTransform(164.1,34.4,0.839,0.839);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape_1},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,328.1,68.8);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ37();
	this.instance.parent = this;
	this.instance.setTransform(164.1,34.4,1,1,0,0,0,164.1,34.4);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,328.1,68.8);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ44();
	this.instance.parent = this;
	this.instance.setTransform(308,39.5,1,1,0,0,0,317,211.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:316.9,scaleX:1.04,scaleY:1.04,y:39.6},23,cjs.Ease.get(-1)).to({regX:317,scaleX:1.08,scaleY:1.08,x:308.1},26,cjs.Ease.get(1)).to({scaleX:1.04,scaleY:1.04},34,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:308,y:39.5},31,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9,-172,634.1,423);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(242.7,-154.1,1.542,1.542);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.4,0.9,556.5,106.6);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ43();
	this.instance.parent = this;
	this.instance.setTransform(301.2,201,1,1,0,0,0,301.2,201);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,602.6,402);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ17();
	this.instance.parent = this;
	this.instance.setTransform(68.4,11.6,1,1,0,0,0,68.4,11.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,136.9,23.1);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ18();
	this.instance.parent = this;
	this.instance.setTransform(0,35.1,1,1,0,0,0,68.4,11.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ15();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,34.4,0.839,0.839,0,0,0,195.5,41);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-164,0,328.1,68.8);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.parent = this;
	this.instance.setTransform(56.5,54.5,1,1,0,0,0,54.5,54.5);

	this.instance_1 = new lib.Символ6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(54.5,512.5,1,1,0,0,0,54.5,54.5);

	this.instance_2 = new lib.Символ4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(55.5,277.5,1,1,0,0,0,54.5,50.5);

	this.instance_3 = new lib.Символ3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(55.5,392.5,1,1,0,0,0,54.5,54.5);

	this.instance_4 = new lib.Символ2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(55.5,161,1,1,0,0,0,54.5,52);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,111,567);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.parent = this;
	this.instance.setTransform(55.5,-1418.6,1,1,0,0,0,55.5,283.4);

	this.instance_1 = new lib.Символ12();
	this.instance_1.parent = this;
	this.instance_1.setTransform(55.5,-851.8,1,1,0,0,0,55.5,283.4);

	this.instance_2 = new lib.Символ12();
	this.instance_2.parent = this;
	this.instance_2.setTransform(55.5,-284.9,1,1,0,0,0,55.5,283.4);

	this.instance_3 = new lib.Символ12();
	this.instance_3.parent = this;
	this.instance_3.setTransform(55.5,283.4,1,1,0,0,0,55.5,283.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1702,111,2269);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ48();
	this.instance.parent = this;
	this.instance.setTransform(292.1,141.6,1,1,0,0,0,292.1,141.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.5},4).to({alpha:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,587.2,286.1);


(lib.Анимация2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.parent = this;
	this.instance.setTransform(164.1,-1.2,1,1,0,0,0,164.1,34.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC6600").s().rr(-195.55,-41,391.1,82,5.5);
	this.shape.setTransform(0,1.2,0.839,0.839);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-164,-35.6,328.1,71.3);


(lib.Анимация1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.parent = this;
	this.instance.setTransform(164.1,-2.2,1,1,0,0,0,164.1,34.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC6600").s().rr(-195.55,-41,391.1,82,5.5);
	this.shape.setTransform(0,2.2,0.839,0.839);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-164,-36.6,328.1,73.3);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ33();
	this.instance.parent = this;
	this.instance.setTransform(164.1,34.4,1,1,0,0,0,164.1,34.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:35.5},4,cjs.Ease.get(-1)).to({y:36.9},5,cjs.Ease.get(1)).to({y:35.7},5,cjs.Ease.get(-1)).to({y:34.4},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,328.1,68.8);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ36();
	this.instance.parent = this;
	this.instance.setTransform(176.5,-33.1,0.465,0.474,0,0,0,164.1,34.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666600").s().p("ArjCiQgVABgBgWIAAkZQABgWAVAAIXHAAQAVAAABAWIAAEZQgBAWgVgBg");
	this.shape.setTransform(176.5,-30.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(100.3,-49.4,152.5,35.2);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 8
	this.instance = new lib.Символ35();
	this.instance.parent = this;
	this.instance.setTransform(245,219.8,1,1,0,0,0,164.1,37.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(74).to({_off:false},0).to({y:129.8},10,cjs.Ease.get(1)).wait(116));

	// Слой 1
	this.instance_1 = new lib.Символ32();
	this.instance_1.parent = this;
	this.instance_1.setTransform(245.5,49,1,1,0,0,0,108.5,21);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(65).to({_off:false},0).to({scaleX:0.91,scaleY:0.91,y:49.1,alpha:1},9,cjs.Ease.get(1)).wait(126));

	// Символ 31
	this.instance_2 = new lib.Символ31();
	this.instance_2.parent = this;
	this.instance_2.setTransform(452.1,-2.1,1.911,1.911,0,0,0,7.4,9.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(60).to({_off:false},0).to({regX:7.3,scaleX:1.17,scaleY:1.17,x:451.9,y:-2,alpha:1},9,cjs.Ease.get(1)).wait(131));

	// Символ 30
	this.instance_3 = new lib.Символ30();
	this.instance_3.parent = this;
	this.instance_3.setTransform(318,-2,1.488,1.488,0,0,0,99.4,9.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(54).to({_off:false},0).to({regX:99.3,scaleX:1.17,scaleY:1.17,x:317.9,alpha:1},9,cjs.Ease.get(1)).wait(137));

	// Символ 29
	this.instance_4 = new lib.Символ29();
	this.instance_4.parent = this;
	this.instance_4.setTransform(123.5,-2,1.622,1.622,0,0,0,59.3,9.6);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(50).to({_off:false},0).to({regX:59.2,regY:9.5,scaleX:1.17,scaleY:1.17,alpha:1},8,cjs.Ease.get(1)).wait(142));

	// Символ 28
	this.instance_5 = new lib.Символ28();
	this.instance_5.parent = this;
	this.instance_5.setTransform(401.3,-46.3,1.65,1.65,0,0,0,58,9.4);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(8).to({_off:false},0).to({regX:57.9,regY:9.5,scaleX:1.17,scaleY:1.17,x:401.1,alpha:1},9,cjs.Ease.get(1)).wait(183));

	// Символ 27
	this.instance_6 = new lib.Символ27();
	this.instance_6.parent = this;
	this.instance_6.setTransform(314.9,-46.3,1.919,1.919,0,0,0,7,9.2);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(4).to({_off:false},0).to({scaleX:1.17,scaleY:1.17,alpha:1},9,cjs.Ease.get(1)).wait(187));

	// Символ 26
	this.instance_7 = new lib.Символ26();
	this.instance_7.parent = this;
	this.instance_7.setTransform(172.5,-46.4,1.485,1.485,0,0,0,106.9,9.4);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:106.8,regY:9.5,scaleX:1.17,scaleY:1.17,x:172.3,y:-46.3,alpha:1},9,cjs.Ease.get(1)).wait(191));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.2,-86.5,317.1,28.3);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_415 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_495 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(415).call(this.frame_415).wait(80).call(this.frame_495).wait(15));

	// Символ 50
	this.instance = new lib.Символ50();
	this.instance.parent = this;
	this.instance.setTransform(-33.9,696.6,1,1,13.7,0,0,53,99.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(264).to({_off:false},0).to({x:1.1,y:571.4},14,cjs.Ease.get(1)).wait(126).to({y:706.4},10).to({_off:true},1).wait(38).to({_off:false,x:-33.9,y:696.6},0).to({x:1.1,y:571.4},13,cjs.Ease.get(1)).wait(29).to({x:-84.9,y:700.4},14).wait(1));

	// Символ 49
	this.instance_1 = new lib.Символ49();
	this.instance_1.parent = this;
	this.instance_1.setTransform(576.3,676.4,1,1,-10.4,0,0,70.3,95.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(262).to({_off:false},0).to({x:535.3,y:557.4},14,cjs.Ease.get(1)).wait(125).to({y:687.5},10,cjs.Ease.get(-1)).to({_off:true},4).wait(36).to({_off:false,x:576.3,y:676.4},0).to({x:535.3,y:567.4},14,cjs.Ease.get(1)).wait(30).to({x:611.3,y:729.5},14,cjs.Ease.get(-1)).wait(1));

	// Слой 2
	this.instance_2 = new lib.Символ25();
	this.instance_2.parent = this;
	this.instance_2.setTransform(284.7,414.8,1,1,0,0,0,250.6,27.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(213).to({_off:false},0).wait(191).to({rotation:-21,x:339.3,y:1015.7},10,cjs.Ease.get(-1)).to({_off:true},1).wait(95));

	// Слой 6
	this.instance_3 = new lib.Символ35();
	this.instance_3.parent = this;
	this.instance_3.setTransform(280,613.8,1,1,0,0,0,164.1,37.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(447).to({_off:false},0).to({y:523.8},9,cjs.Ease.get(1)).wait(39).to({y:636.9},14,cjs.Ease.get(-1)).wait(1));

	// Слой 7
	this.instance_4 = new lib.Символ32();
	this.instance_4.parent = this;
	this.instance_4.setTransform(280.5,443,1,1,0,0,0,108.5,21);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(443).to({_off:false},0).to({scaleX:0.91,scaleY:0.91,y:443.1,alpha:1},9,cjs.Ease.get(1)).wait(43).to({y:624.1},14,cjs.Ease.get(-1)).wait(1));

	// Символ 31
	this.instance_5 = new lib.Символ31();
	this.instance_5.parent = this;
	this.instance_5.setTransform(487.1,391.9,1.911,1.911,0,0,0,7.4,9.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(441).to({_off:false},0).to({regX:7.3,scaleX:1.17,scaleY:1.17,x:486.9,y:392,alpha:1},9,cjs.Ease.get(1)).wait(45).to({x:886.9},14,cjs.Ease.get(-1)).wait(1));

	// Символ 30
	this.instance_6 = new lib.Символ30();
	this.instance_6.parent = this;
	this.instance_6.setTransform(353,392,1.488,1.488,0,0,0,99.4,9.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(439).to({_off:false},0).to({regX:99.3,scaleX:1.17,scaleY:1.17,x:352.9,alpha:1},9,cjs.Ease.get(1)).wait(47).to({x:721},14,cjs.Ease.get(-1)).wait(1));

	// Символ 29
	this.instance_7 = new lib.Символ29();
	this.instance_7.parent = this;
	this.instance_7.setTransform(158.5,392,1.622,1.622,0,0,0,59.3,9.6);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(437).to({_off:false},0).to({regX:59.2,regY:9.5,scaleX:1.17,scaleY:1.17,alpha:1},8,cjs.Ease.get(1)).wait(50).to({x:-110.6},14,cjs.Ease.get(-1)).wait(1));

	// Символ 28
	this.instance_8 = new lib.Символ28();
	this.instance_8.parent = this;
	this.instance_8.setTransform(436.3,347.7,1.65,1.65,0,0,0,58,9.4);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(434).to({_off:false},0).to({regX:57.9,regY:9.5,scaleX:1.17,scaleY:1.17,x:436.1,alpha:1},9,cjs.Ease.get(1)).wait(52).to({x:667.2},14,cjs.Ease.get(-1)).wait(1));

	// Символ 27
	this.instance_9 = new lib.Символ27();
	this.instance_9.parent = this;
	this.instance_9.setTransform(349.9,347.7,1.919,1.919,0,0,0,7,9.2);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(432).to({_off:false},0).to({scaleX:1.17,scaleY:1.17,alpha:1},9,cjs.Ease.get(1)).wait(54).to({y:256.7},14,cjs.Ease.get(-1)).wait(1));

	// Символ 26
	this.instance_10 = new lib.Символ26();
	this.instance_10.parent = this;
	this.instance_10.setTransform(207.5,347.6,1.485,1.485,0,0,0,106.9,9.4);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(430).to({_off:false},0).to({regX:106.8,regY:9.5,scaleX:1.17,scaleY:1.17,x:207.3,y:347.7,alpha:1},9,cjs.Ease.get(1)).wait(56).to({x:-147.4},14,cjs.Ease.get(-1)).wait(1));

	// Слой 1
	this.instance_11 = new lib.Символ24();
	this.instance_11.parent = this;
	this.instance_11.setTransform(290.1,135,1,1,0,0,0,304.1,135);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(199).to({y:479.1},10,cjs.Ease.get(-1)).to({y:469.1},2).to({y:479.1},2).wait(191).to({rotation:-21,x:367.4,y:1073.8},10,cjs.Ease.get(-1)).to({_off:true},1).wait(1).to({_off:false,rotation:0,x:290.1,y:135},0).to({y:479.1},10,cjs.Ease.get(-1)).to({y:469.1},2).to({y:479.1},2).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23,-172,634.1,423);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ14();
	this.instance.parent = this;
	this.instance.setTransform(42.6,10.5,1,1,-18,0,0,25.1,32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.88,scaleY:0.88,y:13},3).to({scaleX:1,scaleY:1,y:10.5},3).wait(80).to({scaleX:0.88,scaleY:0.88,y:13},3).to({scaleX:1,scaleY:1,y:10.5},3).wait(98));

	// Слой 2
	this.instance_1 = new lib.Анимация1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-93.9,-6.1);

	this.instance_2 = new lib.Анимация2("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-93.9,-5.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true,y:-5.1},3).to({_off:false,y:-6.1},3).wait(80).to({startPosition:0},0).to({_off:true,y:-5.1},3).wait(1).to({_off:false,y:-6.1},2).wait(98));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:false},3).to({_off:true,y:-6.1},3).wait(80).to({_off:false,y:-5.1},3).to({y:-5.5},1).to({_off:true,y:-6.1},2).wait(98));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-257.9,-42.8,334.3,92);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.parent = this;
	this.instance.setTransform(55.5,283.4,1,1,0,0,0,55.5,283.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1702,111,2269);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 9
	this.instance = new lib.Символ22();
	this.instance.parent = this;
	this.instance.setTransform(359.9,1821.7,1,1,0,0,0,228.6,14.6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(44).to({_off:false},0).to({alpha:1},10).wait(35).to({alpha:0},5).to({_off:true},42).wait(5).to({_off:false},0).to({alpha:1},10).wait(33).to({alpha:0},5).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ20();
	this.instance_1.parent = this;
	this.instance_1.setTransform(356.8,1851.3,1,1,0,0,0,391,154.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(39).to({_off:false},0).to({alpha:1},10).wait(40).to({alpha:0},5).wait(42).to({alpha:1},10).wait(38).to({alpha:0},5).wait(1));

	// Символ 9
	this.instance_2 = new lib.Символ9();
	this.instance_2.parent = this;
	this.instance_2.setTransform(663.9,2545,1,1,0,0,0,55.5,283.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(16).to({y:2478.4},4,cjs.Ease.get(-1)).to({y:2991.7},15,cjs.Ease.get(1)).wait(77).to({y:2950.4},5,cjs.Ease.get(-1)).to({y:3678.9},19,cjs.Ease.get(1)).wait(4).to({y:2545},0).wait(50));

	// Символ 9
	this.instance_3 = new lib.Символ9();
	this.instance_3.parent = this;
	this.instance_3.setTransform(510.7,2429.5,1,1,0,0,0,55.5,283.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(12).to({y:2362.9},4,cjs.Ease.get(-1)).to({y:2876.2},15,cjs.Ease.get(1)).wait(76).to({y:2834.9},5,cjs.Ease.get(-1)).to({y:3563.4},19,cjs.Ease.get(1)).wait(1).to({y:2428.9},0).wait(8).to({y:2429.5},0).wait(50));

	// Символ 9
	this.instance_4 = new lib.Символ9();
	this.instance_4.parent = this;
	this.instance_4.setTransform(356,2317,1,1,0,0,0,55.5,283.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(8).to({y:2250.4},4,cjs.Ease.get(-1)).to({y:2763.7},15,cjs.Ease.get(1)).wait(75).to({y:2722.4},5,cjs.Ease.get(-1)).to({y:3450.9},19,cjs.Ease.get(1)).wait(1).to({y:2316.4},0).wait(13).to({y:2317},0).wait(50));

	// Символ 9
	this.instance_5 = new lib.Символ9();
	this.instance_5.parent = this;
	this.instance_5.setTransform(201.4,2098,1,1,0,0,0,55.5,283.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4).to({y:2031.4},4,cjs.Ease.get(-1)).to({y:2544.7},15,cjs.Ease.get(1)).wait(74).to({y:2503.4},5,cjs.Ease.get(-1)).to({y:3231.9},19,cjs.Ease.get(1)).wait(1).to({y:2097.4},0).wait(18).to({y:2098},0).wait(50));

	// Символ 9
	this.instance_6 = new lib.Символ9();
	this.instance_6.parent = this;
	this.instance_6.setTransform(46.7,1985.5,1,1,0,0,0,55.5,283.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({y:1918.9},4,cjs.Ease.get(-1)).to({y:2432.2},15,cjs.Ease.get(1)).wait(73).to({y:2390.9},5,cjs.Ease.get(-1)).to({y:3119.4},19,cjs.Ease.get(1)).wait(1).to({y:1984.9},0).wait(23).to({y:1985.5},0).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.8,0,728.2,2828.5);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EggTAWFIAA7JMBA/AAAIAAbJgEggrgNiIAAoiMBA/AAAIAAIig");
	mask.setTransform(193.1,911.6);

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.parent = this;
	this.instance.setTransform(193.7,734.3,0.519,0.519,0,0,0,364.2,1414.2);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,770.2,378,282.7);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.parent = this;
	this.instance.setTransform(233.1,-182.5,1.233,1.233,0,0,0,189.1,734.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.9,-1087.5,516,1810.4);


// stage content:
(lib.finmax726270_nowin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		stage.canvas.addEventListener("mouseover", fl_Clickover2.bind(this));
		
		function fl_Clickover2()
		{
		    this.fin.gotoAndPlay(416);
		
		}
		
		stage.canvas.addEventListener("mouseout", fl_Clickout2.bind(this));
		
		function fl_Clickout2()
		{   
			this.fin.gotoAndPlay(497);
		
		}
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 5
	this.fin = new lib.Символ23();
	this.fin.parent = this;
	this.fin.setTransform(376,-163,1.214,1.214,0,0,0,304.2,134.9);

	this.timeline.addTween(cjs.Tween.get(this.fin).wait(1));

	// Слой 3
	this.instance = new lib.Символ11();
	this.instance.parent = this;
	this.instance.setTransform(428.3,246.5,0.561,0.561,0,0,0,25.2,32.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ10();
	this.instance_1.parent = this;
	this.instance_1.setTransform(364.7,-39.2,0.709,0.709,0,0,0,237.8,-106.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 2
	this.instance_2 = new lib.Символ5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(363,135.6,1.214,0.882,0,0,0,292.2,141.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 7
	this.instance_3 = new lib.Символ45();
	this.instance_3.parent = this;
	this.instance_3.setTransform(655.8,244,1.214,1.214,0,0,0,43.2,7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Слой 4
	this.instance_4 = new lib.Символ19();
	this.instance_4.parent = this;
	this.instance_4.setTransform(362.6,26.9,1.214,1.214,0,0,0,301.2,201);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(341.7,-599.8,770,1283.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;