(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 360,
	fps: 24,
	color: "#333333",
	manifest: [
		{src:"images/back.jpg?1475581629530", id:"back"},
		{src:"images/back2.png?1475581629530", id:"back2"},
		{src:"images/chr.png?1475581629530", id:"chr"},
		{src:"images/dia.png?1475581629530", id:"dia"},
		{src:"images/shade.png?1475581629530", id:"shade"},
		{src:"images/spade.png?1475581629530", id:"spade"}
	]
};



// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,794);


(lib.back2 = function() {
	this.initialize(img.back2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.chr = function() {
	this.initialize(img.chr);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,285,309);


(lib.dia = function() {
	this.initialize(img.dia);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,285,309);


(lib.shade = function() {
	this.initialize(img.shade);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,285,309);


(lib.spade = function() {
	this.initialize(img.spade);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,285,309);


(lib.Символ65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAHBmQgGgCgBgGIgTg6IgdAnQgCADgEAAIgBAAQgEgCAAgFIAAioQAAgEAEgBQADgBAEACIBqCAQAEADgEAEQAAADgGAAIgugJIAUA4QACAGgCAFQgDAGgFABIgGACIgFgCg");
	this.shape.setTransform(6.1,10.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,12.1,20.8);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(167.3,19.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.8,4.5,329,29.7);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E53640").s().p("AClFFIAAoNIiaINIgVAAIiboNIAAINIgeAAIAAqJIAbAAICoJDICopDIAcAAIAAKJg");
	this.shape.setTransform(19.7,32.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,39.4,65.2);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E53640").s().p("AgwE/QgZgHgVgUQgUgTgNghQgNgiAAg2IAAkwQAAhTAjgtQAkgsBFAAQBGAAAjAsQAkAsgBBUIAAEwQAAA2gMAiQgOAigUASQgUAUgaAHQgYAGgYAAQgYAAgYgGgAhQkEQgdAjAABJIAAEwQAABKAdAkQAaAhA2AAQA1AAAdghQAbgiAAhMIAAkwQAAhKgbgiQgcgig2AAQg3AAgZAig");
	this.shape.setTransform(14.1,32.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,28.2,65.2);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E53640").s().p("AiEFFIAAqJIByAAQBMAAAnAuQAjArABBXIAAEpQgBBXgjArQgnAuhMAAgAhlEnIBTAAQA9AAAdgjQAegjgBhMIAAkpQABhMgegjQgdgjg9AAIhTAAg");
	this.shape.setTransform(13.3,32.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,26.6,65.2);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABDFAIAAi+QAAhUhRAAIg0AAIAAESIhTAAIAAp/ICHAAQBSAAAqAxQAnAsAABZQAABZgnAuIgEADIgFAEQAYAWANAgQAMAfAAAoIAAC+gAhCgjIA0AAQAfAAANgIQANgHADgFQAUgYAAg6QAAgggGgTQgFgUgKgLQgKgLgQgDQgPgEgSAAIg0AAg");
	this.shape.setTransform(18.3,32.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.2,0,30.2,64.2);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiFFAIAAp/IELAAIAABSIi4AAIAADFIC4AAIAABQIi4AAIAADHIC4AAIAABRg");
	this.shape.setTransform(16.8,32.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.4,0,27,64.2);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABSFAIiTkHIgiA1IAADSIhTAAIAAjoIgBAAIABgCIAAmVIBTAAIAAEYIC3kYIBkAAIjEEsIC+FTg");
	this.shape.setTransform(18.8,32.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.4,0,36.9,64.2);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhKEvQgcgQgOgRQglgwAAhVIAAkSQAAhVAlgvQAIgJAJgIQALgJAOgHQAQgIARgEQATgFAWAAQAvAAAcAQQAcARAOARQAlAvAABVIAAESQAABVglAwQgOARgcAQQgbARgwAAQguAAgcgRgAgUjrQgMACgLAJQgMAJgHAUQgIAVAAAlIAAESQAAAmAIAVQAHAUAMAKQALAJAMACQAKABAKAAQALAAAKgBQAMgCAMgJQALgKAIgUQAHgUAAgnIAAkSQAAglgHgVQgIgUgLgJQgLgJgNgCQgNgCgIAAQgIAAgMACg");
	this.shape.setTransform(15.5,32.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.8,31,64.2);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiVFAIAAp/ICHAAQBRAAAsAwQAnAuAABWQAABYgnAtQgrAvhSAAIg0AAIAAEXgAhCgoIA0AAQAgAAANgIQAMgIADgEQAVgUAAg7QAAgfgGgUQgGgTgKgKQgJgLgRgDQgOgEgTAAIg0AAg");
	this.shape.setTransform(15.1,32.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,30.1,64.2);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhGuAnQMAAAhOgMCNdAAAMAAABOgg");
	this.shape.setTransform(452.8,251.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,905.5,502.6);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.back();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,794,794);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AB/IcIAAgvIA8AAIAAAvgAhBGdQghgDgegMQgdgLgUgXQgTgXAAgnQAAgYAKgUQAKgTARgNQASgOAVgFQAUgHAZAAIAAAoQgTABgOAEQgQAEgMAIQgMAJgGALQgIAMABARQABAbARAPQATAPAZAGQAcAGAbABIBfgBQAZAAAbgIQAXgGATgQQARgPAAgdQAAgVgKgMQgHgLgQgIQgRgGgQgCIghgEIAAgoQAbAAAXAFQAXAFAUAMQASAMAMAVQALAUAAAdQAAAqgUAXQgTAXgdALQgdALgkACQgmADgbAAQgeAAgigDgAhJCLQghgEgbgNQgcgMgRgYQgSgXAAgnQAAglATgYQATgWAdgNQAcgMAkgEQAigDAfAAQAeAAAjADQAlAEAcAMQAcAMAUAYQATAXAAAnQAAAdgKATQgJAUgPANQgPANgWAHQgTAHgYAEQgTADgcABIgsABQgiAAgfgEgAhmgpQgZAIgRAQQgRARAAAdQAAAaARAPQARAPAYAIQAXAHAbACIAuACIAxgBQAdgBAbgHQAbgGASgQQATgPAAgfQAAgdgSgQQgSgQgYgHQgZgIgdgBIhhAAQgcABgZAIgAi7ijIAAgoIAiAAIAAgBQgVgNgKgVQgMgVAAgYIABgXQACgLADgJQAEgJAJgJQAIgJAQgJIAAgCQgXgQgKgXQgKgXAAgaQAAgZAHgRQAIgQAOgLQANgKATgDQATgFAXAAIEYAAIAAAoIkdAAQgLAAgMACQgLACgKAHQgIAFgFALQgGAJAAAQQAAAjAUAUQAVAVAkAAIEPAAIAAAoIkNAAQgRAAgMACQgOABgLAGQgLAFgHALQgHALAAAUQABALAFANQAFANAJALQAJAKAMAIQALAGAMAAIEcAAIAAAog");
	this.shape.setTransform(19.4,55.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.4,1.2,39.5,108.1);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC3333").s().p("AkLEDIAAoFIIXAAIAAIFg");
	this.shape.setTransform(26.9,26);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,53.8,51.9);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhLAoIAwguIAMAKIgeAdIBoAAIAAh5IARAAIAACIIh5AAIAeAeIgMALg");
	this.shape.setTransform(7.6,8.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,15.2,17.8);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("ABTBPIAAhWQAAgLgCgJQgCgJgEgGQgEgGgHgDQgGgEgIAAQgMAAgJAIQgJAHgEALQgCAHAAAHIAABeIgZAAIAAhbQAAgJgCgIQgCgIgFgGQgEgFgGgDQgGgEgIAAQgMAAgKAJQgJAIgEAMQgCAFAAAIIAABcIgbAAIgCiZIAZAAIABAZIABAAQAIgNAKgHQAGgEAIgCQAIgDAJAAQAIAAAHADQAGACAGAEQAKAIAFAOIAAAAQAHgMALgIQAHgFAIgDQAIgDALAAQAIAAAIADQAKAEAHAHQAIAIAFAMQAFAOAAAUIAABZg");
	this.shape.setTransform(11.1,7.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,22.3,15.9);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgdBLQgOgGgKgKQgKgLgFgOQgGgPAAgSQAAgRAGgQQAGgPAKgLQALgKAOgGQAOgFAOgBQAQAAAOAHQAOAFAKALQAKALAFAOQAFAPAAARQAAAJgCAJQgBAJgEAIQgGAQgLAKQgLAKgOAFQgNAEgNAAQgPAAgOgFgAgTg1QgJAFgGAIQgGAJgDALQgDALAAAJQAAAMAEAMQADAKAHAJQAGAHAJAFQAIAFAJAAQAJAAAJgFQAJgFAGgHQAGgJAEgKQADgMAAgMQAAgJgCgKQgDgLgFgIQgGgKgJgEQgJgGgMgBQgKAAgJAGg");
	this.shape.setTransform(7.6,8.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,15.2,16.2);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AggBtQgMgGgIgKQgKgKgFgPQgFgPAAgRQAAgTAGgQQAFgNAKgLQAJgLANgFQANgGAOAAQAKAAASAHQALAGAGALIAAAAIAAhdIAcAAIACDhIgaAAIgBgbIAAAAQgEAHgFAFQgFAGgHAEQgHAEgIADQgIACgHAAQgOAAgNgGgAgQgSQgJAEgGAIQgGAGgDALQgDALAAANQAAAMADAKQADALAFAHQAGAIAJAFQAJAEAJAAQAHAAAGgCQAHgCAFgFQAGgEAEgGQAEgHACgIIABgMIAAgbIgBgLQgDgMgLgJQgFgFgHgCQgHgDgIAAQgIAAgJAFg");
	this.shape.setTransform(7.3,11.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,14.7,23.1);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgkBPIgCiZIAZAAIABAeIACAAQACgHAFgHQADgGAFgEQAFgFAGgCQAHgDAIAAIAIABIAAAbIgKgBQgHAAgHADQgGACgFAFQgEAFgCAGQgDAHgCAIIgBANIAABRg");
	this.shape.setTransform(3.9,7.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,7.8,15.9);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgXBLQgNgGgKgKQgLgKgFgPQgFgOAAgSQAAgPAFgPQAFgQAKgLQAJgMANgGQAOgGAPAAQAJAAAIACQAIACAGADQAMAHAIAMQAGAKAEANQADAMAAAMIgBALIhrAAQAAAOAEAKQAFAKAHAHQAIAGAJAEQAHADALAAQAUAAAXgIIAFAUQgbAJgYAAQgRAAgOgFgAApgNQAAgIgCgHQgCgIgEgHQgEgHgIgEQgIgFgMAAQgHAAgJAEQgHAEgGAIQgFAGgDAIQgCAIgBAIIBQAAIAAAAg");
	this.shape.setTransform(6.9,8.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13.7,16.2);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AAeBxIgzhKIgPAPIAAA7IgcAAIAAjhIAcAAIAACNIABAAIA5hFIAiAAIg6A+IBCBbg");
	this.shape.setTransform(6.5,11.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13,22.7);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgdBLQgOgGgKgKQgKgLgFgOQgGgPAAgSQAAgRAGgQQAGgPAKgLQALgKAOgGQAOgFAOgBQAQAAAOAHQAOAFAKALQAKALAFAOQAFAPAAARQAAAJgCAJQgBAJgEAIQgGAQgLAKQgLAKgOAFQgNAEgNAAQgPAAgOgFgAgTg1QgJAFgGAIQgGAJgDALQgDALAAAJQAAAMAEAMQADAKAHAJQAGAHAJAFQAIAFAJAAQAJAAAJgFQAJgFAGgHQAGgJAEgKQADgMAAgMQAAgJgCgKQgDgLgFgIQgGgKgJgEQgJgGgMgBQgKAAgJAGg");
	this.shape.setTransform(7.6,8.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,15.2,16.2);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AhHBvIgCjZIAaAAIABAaIABAAQAEgGAFgGIANgJQAHgEAIgDQAIgCAIAAQAOAAAMAHQAMAFAIAKQAKALAFAOQAEAPAAASQgCAagDAIQgGAPgKALQgJAKgNAFQgNAGgOgBQgNAAgNgGQgMgHgIgLIAAAAIAABVgAgNhUQgGACgHAFQgFAEgEAHQgEAGgDAIIgBAMIABAmQACAFAEAGQAEAGAFAFQAGAEAHACQAGADAIAAQAJAAAJgFQAJgEAGgIQAGgIADgJQADgLAAgNQAAgMgDgLQgDgKgFgIQgGgIgJgEQgJgFgKAAQgGAAgHADg");
	this.shape.setTransform(7.4,11.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,14.8,22.2);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dia();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,285,309);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,1,1).p("AAAh0IAADp");
	this.shape.setTransform(0,11.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,2,25.5);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shade();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,285,309);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("Ai1B9QgLABgIgJQgIgHAAgMIAAjDQAAgLAIgIQAIgIALgBIFrAAQALABAIAIQAIAIAAALIAADDQAAAMgIAHQgIAJgLgBgAi1BiIFrAAIAAjDIlrAAgACBBGQgDAAAAgEIAAgVQAAgDADAAIAVAAQAEAAAAADIAAAVQAAAEgEAAgAhdBGQgDAAAAgEIAAgVQAAgDADAAIC7AAQAEAAAAADIAAAVQAAAEgEAAgAiVBGQgEgBAAgDIAAgVQAAgDAEAAIAVAAQAEAAAAADIAAAVQAAADgEABgABlAOQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBAAgBIAAgTQAAgBAAgBQAAAAABgBQAAAAABAAQAAgBABAAIAZAAIAAg0QAAgBAAgBQAAAAABgBQAAAAABAAQAAgBABAAIAVAAQABAAABABQAAAAABAAQAAABABAAQAAABAAABIAABLQAAABAAABQgBAAAAABQgBAAAAAAQgBABgBAAgAAtAOQgBAAgBgBQAAAAgBAAQAAgBgBAAQAAgBAAgBIAAgTQAAgBAAgBQABAAAAgBQABAAAAAAQABgBABAAIAVAAQABAAAAABQABAAAAAAQABABAAAAQAAABAAABIAAATQAAABAAABQAAAAgBABQAAAAgBAAQAAABgBAAgAgJAOQgBAAgBgBQAAAAgBAAQAAgBgBAAQAAgBAAgBIAAgTQAAgBAAgBQABAAAAgBQABAAAAAAQABgBABAAIATAAQABAAAAABQABAAAAAAQABABAAAAQAAABAAABIAAATQAAABAAABQAAAAgBABQAAAAgBAAQAAABgBAAgAhBAOQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBAAgBIAAgTQAAgBAAgBQAAAAABgBQAAAAABAAQAAgBABAAIAVAAQABAAABABQAAAAABAAQAAABABAAQAAABAAABIAAATQAAABAAABQgBAAAAABQgBAAAAAAQgBABgBAAgAiVAOQgEAAAAgEIAAgTQAAgEAEAAIAxAAQABAAABABQAAAAABAAQAAABABAAQAAABAAABIAAATQAAABAAABQgBAAAAABQgBAAAAAAQgBABgBAAgABJgpQgEABAAgEIAAgVQAAgDAEgBIAVAAQAEABAAADIAAAVQAAAEgEgBgAARgpQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAgBAAgBIAAgVQAAgBAAgBQABAAAAgBQABAAAAAAQABgBABAAIAVAAQABAAAAABQABAAAAAAQABABAAAAQAAABAAABIAAAVQAAABAAABQAAAAgBABQAAAAgBAAQAAAAgBAAgAglgpQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAgBAAgBIAAgVQAAgBAAgBQAAAAABgBQAAAAABAAQAAgBABAAIAVAAQABAAABABQAAAAAAAAQABABAAAAQAAABAAABIAAAVQAAABAAABQAAAAgBABQAAAAAAAAQgBAAgBAAgAhdgpQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAgBAAgBIAAgVQAAgBAAgBQAAAAABgBQAAAAABAAQAAgBABAAIAVAAQABAAABABQAAAAABAAQAAABABAAQAAABAAABIAAAVQAAABAAABQgBAAAAABQgBAAAAAAQgBAAgBAAgAiVgpQgEABAAgEIAAgVQAAgDAEgBIAVAAQAEABAAADIAAAVQAAAEgEgBg");
	this.shape.setTransform(21,12.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,42,25.2);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.chr();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,285,309);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AANA/IhVhVQAegUAUgeIBVBVQAKAKAAAPQAAAPgKAKQgKAKgPAAQgPAAgKgKg");
	this.shape.setTransform(30.6,30.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ApUWHQkUh0jUjVQjVjVh1kUQh4kdAAk4QAAk3B4kdQB1kUDVjVQDUjUEUh1QEdh5E3AAQE4AAEdB5QEUB1DVDUQDUDVB1EUQB4EdAAE3QAAE4h4EdQh1EUjUDVQjVDVkUB0QkdB4k4AAQk3AAkdh4gAm+wkQjPBYigCfQifCghYDPQhbDWAADoQAADqBbDWQBYDOCfCgQCgCgDPBYQDWBaDoAAQDqAADWhaQDOhZCgifQCfigBYjOQBbjWAAjqQAAjohbjWQhXjPigigQigifjOhYQjWhajqAAQjoAAjWBag");
	this.shape_1.setTransform(14.2,14.2,0.093,0.093);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AhQBRQgigiAAgvQAAguAigiQAigiAuAAQAvAAAiAiQAiAiAAAuQAAAvgiAiQgiAigvAAQguAAgigig");
	this.shape_2.setTransform(14.2,14.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,38,38);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E43640").s().p("ABGDwQgZgFgNgIIAOhRQAOAIAXAFQAWAGAUAAQAhAAARgQQARgOAAgZQAAgZgQgSQgMgOgjgWQgYgPgSgQQgRgQgLgSQgLgRgFgSQgFgRAAgRQAAgdAJgaQAKgaATgTQAUgUAcgLQAegLAlAAQAgAAAtARIgQBRQgigQgbAAQgdAAgQAPQgPAOAAAVQAAAWANAPQAOAPAoAYQAXAOARARQARANAKATQALARAFATQAEASAAAUQAAAhgLAbQgMAbgVATQgWAUgdAKQgeAKgjAAQgcAAgbgGgAo8DxIAAnbQAcgGBPgDQAnAAAbAGQAiAIAXAUQASAQAKAYQAJAWAAAaQAAAigRAcQgKAOgNALQgNALgSAIIAAADQAVAGAQAJQAQALALAQQALAPAGATQAGASAAAUQAAAegKAXQgJAYgSASQgLAMgOAJQgPAJgTAGQg7ANgpAAQgyAAglgFgAneCsIAVABQAeAAATgSQAKgJAFgNQAGgOAAgSQAAgSgGgOQgGgOgKgKQgTgSgegBIgUAAgAneiqIAACAIAUAAQAaAAAQgTQASgUAAgdQAAgcgNgQQgPgTgcAAQgQAAgIADgAGIDyIAAmMIhVAAIAAhXIEKAAIAABXIhWAAIAAGMgAjhDyIAAnjIDTAAIAABSIh1AAIAABwIBvAAIAABMIhvAAIAACDIB9AAIAABSg");
	this.shape.setTransform(63.6,31.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AGHDoQgegPgVgdQgPgUgTg3QgIgfgEhNQAAghAEgeQAEgeAIgZQAHgYALgUQAKgTANgPQAXgcAggOQAdgMAeAAQAqAAATAMIgNAvQgXgKgaAAQgUAAgTAKQgVALgPAWQgRAZgJAlQgLAoAAAzQAAA2AJAoQAJAkARAZQAPAWAVALQAUAKAXAAQAdAAAWgLIAJAuQgZANgtAAQgjAAgegOgAsaDwQgXgGgLgIIAMgwQANAIATAGQAUAGASAAQATAAAPgGQAPgGAKgLQALgLAFgPQAGgPAAgSQAAgggSgZQgOgUgggYQgngZgWgbQgOgSgIgTQgJgWAAgWQAAgbAJgYQAJgXARgRQASgRAXgKQAYgJAcAAQAeAAAnASIgOAvQgggQgaAAQgRAAgOAGQgMAFgJALQgRATAAAcQAAARAEAOQAFANAJAMQAMAPApAdQAWAPAQAOQAQARAKARQAKARAFATQAFASAAAUQAAAfgKAaQgKAZgTASQgTARgYAKQgZAJgdAAQgXAAgZgGgAMGDyIAAjjIiIAAIAADjIg4AAIAAnjIA4AAIAADQICIAAIAAjQIA3AAIAAHjgADKDyQgQg8gKg8IgKgqQgGgSgKgLQgJgLgNgEQgNgFgSAAIgVAAIAADTIg4AAIAAncQAigJAuAAQAlAAAaAIQAcAJASARQASASAIAZQAIAXAAAdQAAAXgFAUQgFATgLAQQgJAPgPAMQgOAJgSAJIAAACQAaAHAQAbQAOAaAJAwQALBDAQA4gABMjEIAAC6IAWAAQAUAAARgHQAQgHAMgNQALgNAHgRQAGgTAAgVQAAgWgFgQQgEgRgKgMQgKgMgQgGQgQgGgWgBQgTAAgJADgAhdDyIggiRIhsAAIggCRIg1AAIBunjIA+AAIBsHjgAjhA0IBcAAIgsjoIgDAAgAoiDyIAAnjIC5AAIAAAwIiBAAIAACgIB6AAIAAAtIh6AAIAAC2ICKAAIAAAwg");
	this.shape_1.setTransform(210,31.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.2,7.1,286.8,49.4);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.spade();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,285,309);


(lib.Символ57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.setTransform(142.5,154.5,1,1,0,0,0,142.5,154.5);
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance.cache(-2,-2,289,313);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,285,309);


(lib.Символ56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.setTransform(142.5,154.5,1,1,0,0,0,142.5,154.5);
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance.cache(-2,-2,289,313);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,285,309);


(lib.Символ55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.setTransform(142.5,154.5,1,1,0,0,0,142.5,154.5);
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance.cache(-2,-2,289,313);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,285,309);


(lib.Символ54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.setTransform(142.5,154.5,1,1,0,0,0,142.5,154.5);
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance.cache(-2,-2,289,313);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,285,309);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_245 = new cjs.Graphics().p("A/mFQIAAqfMA/NAAAIAAKfg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(245).to({graphics:mask_graphics_245,x:406.9,y:505.8}).wait(255));

	// Слой 10
	this.instance = new lib.Символ48();
	this.instance.setTransform(516.1,590.5,1,1,0,0,0,265.1,145.6);
	this.instance._off = true;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(245).to({_off:false},0).to({y:624.5},19,cjs.Ease.get(1)).wait(236));

	// Слой 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_224 = new cjs.Graphics().p("AkVF0IAArnIIrAAIAALng");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(224).to({graphics:mask_1_graphics_224,x:577.7,y:435.4}).wait(276));

	// Слой 1
	this.instance_1 = new lib.Символ33();
	this.instance_1.setTransform(571,503.1,0.603,0.603,0,0,0,19.8,54);
	this.instance_1._off = true;

	this.instance_1.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(224).to({_off:false},0).to({y:436.5},15,cjs.Ease.get(1)).wait(261));

	// Символ 46
	this.instance_2 = new lib.Символ46();
	this.instance_2.setTransform(529.2,168.8,1,1,0,0,0,19,31.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(214).to({scaleX:2.73,scaleY:2.73,rotation:22.7,x:884.1,y:499.4,alpha:0},0).to({scaleX:1,scaleY:1,rotation:0,x:529.2,y:435.9,alpha:1},10,cjs.Ease.get(1)).wait(276));

	// Символ 45
	this.instance_3 = new lib.Символ45();
	this.instance_3.setTransform(489.5,168.8,1,1,0,0,0,13.8,31.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(212).to({scaleX:2.73,scaleY:2.73,rotation:-36,x:614.4,y:141.1,alpha:0},0).to({scaleX:1,scaleY:1,rotation:0,x:489.5,y:435.9,alpha:1},10,cjs.Ease.get(1)).wait(278));

	// Символ 44
	this.instance_4 = new lib.Символ44();
	this.instance_4.setTransform(455.4,168.8,1,1,0,0,0,13.8,31.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(210).to({scaleX:2.73,scaleY:2.73,rotation:-39.7,x:560.1,y:907.7,alpha:0},0).to({scaleX:1,scaleY:1,rotation:0,x:455.4,y:435.9,alpha:1},10,cjs.Ease.get(1)).wait(280));

	// Символ 43
	this.instance_5 = new lib.Символ43();
	this.instance_5.setTransform(412,168.8,1,1,0,0,0,15.3,31.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(208).to({regY:31.3,scaleX:3.41,scaleY:3.41,rotation:20.2,x:470.7,y:777.7,alpha:0},0).to({regY:31.4,scaleX:1,scaleY:1,rotation:0,x:412,y:435.9,alpha:1},10,cjs.Ease.get(1)).wait(282));

	// Символ 42
	this.instance_6 = new lib.Символ42();
	this.instance_6.setTransform(377.1,168.8,1,1,0,0,0,13.4,31.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(206).to({scaleX:2.42,scaleY:2.42,rotation:-39.5,x:467.3,y:159.9,alpha:0},0).to({scaleX:1,scaleY:1,rotation:0,x:377.1,y:435.9,alpha:1},10,cjs.Ease.get(1)).wait(284));

	// Символ 41
	this.instance_7 = new lib.Символ41();
	this.instance_7.setTransform(342.9,168.8,1,1,0,0,0,16.3,31.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(204).to({regX:16.2,scaleX:2.51,scaleY:2.51,rotation:-32.2,x:134.8,y:708.1,alpha:0},0).to({regX:16.3,scaleX:1,scaleY:1,rotation:0,x:342.9,y:435.9,alpha:1},10,cjs.Ease.get(1)).wait(286));

	// Символ 40
	this.instance_8 = new lib.Символ40();
	this.instance_8.setTransform(305.3,168.8,1,1,0,0,0,15,32.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(202).to({scaleX:2.42,scaleY:2.42,rotation:26.5,x:186.4,y:127.5,alpha:0},0).to({scaleX:1,scaleY:1,rotation:0,x:305.3,y:435.9,alpha:1},10,cjs.Ease.get(1)).wait(288));

	// Символ 39
	this.instance_9 = new lib.Символ39();
	this.instance_9.setTransform(272,168.8,1,1,0,0,0,14.6,31.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(199).to({scaleX:2.42,scaleY:2.42,rotation:19,x:-60.4,y:421.2,alpha:0},0).to({scaleX:1,scaleY:1,rotation:0,x:272,y:435.9,alpha:1},10,cjs.Ease.get(1)).wait(291));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(257.4,136.9,292.2,65.7);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ35();
	this.instance.setTransform(397,397,1,1,0,0,0,397,397);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:396.9,scaleX:1.07,scaleY:1.07,rotation:-15,x:374.9,y:419.1},199).to({alpha:0},20).wait(281));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,794,794);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ4();
	this.instance.setTransform(16.4,16.4,0.868,0.868,0,0,0,18.9,18.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,32.9,32.9);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.setTransform(121.4,33.1,0.524,0.524,0,0,0,238,70.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,150.2,25.9);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ21();
	this.instance.setTransform(123.9,14.8,1,1,0,0,0,11.1,7.9);

	this.instance_1 = new lib.Символ20();
	this.instance_1.setTransform(101.7,15,1,1,0,0,0,7.5,8.1);

	this.instance_2 = new lib.Символ19();
	this.instance_2.setTransform(83.5,11.5,1,1,0,0,0,7.3,11.5);

	this.instance_3 = new lib.Символ18();
	this.instance_3.setTransform(70.7,14.8,1,1,0,0,0,3.9,7.9);

	this.instance_4 = new lib.Символ17();
	this.instance_4.setTransform(56.7,15,1,1,0,0,0,6.9,8.1);

	this.instance_5 = new lib.Символ16();
	this.instance_5.setTransform(42.4,11.3,1,1,0,0,0,6.5,11.3);

	this.instance_6 = new lib.Символ15();
	this.instance_6.setTransform(24.7,15,1,1,0,0,0,7.5,8.1);

	this.instance_7 = new lib.Символ14();
	this.instance_7.setTransform(7.4,18,1,1,0,0,0,7.4,11.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,135,29.1);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ7();
	this.instance.setTransform(353,24.9,0.666,0.666,0,0,0,20.9,12.6);
	this.instance.alpha = 0.211;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#DFDFDF").ss(1,1,1).p("A9rj+MA7XAAAIAAH9Mg7XAAAg");
	this.shape.setTransform(190,25.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A9rD/IAAn9MA7WAAAIAAH9g");
	this.shape_1.setTransform(190,25.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,382,53);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ65();
	this.instance.setTransform(6,10.4,1,1,0,0,0,6,10.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 65
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AAHBmQgGgCgBgGIgTg6IgdAnQgCADgEAAIgBAAQgEgCAAgFIAAioQAAgEAEgBQADgBAEACIBqCAQAEADgEAEQAAADgGAAIgugJIAUA4QACAGgCAFQgDAGgFABIgGACIgFgCg");
	this.shape.setTransform(6.1,10.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,12.1,21.4);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ37();
	this.instance.setTransform(452.7,250,1,1,0,0,0,452.8,251.3);
	this.instance.alpha = 0.32;

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1.5,1,1).p("EhGugnQMCNdAAAMAAABOhMiNdAAAg");
	this.shape.setTransform(452.7,250);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	// Слой 1
	this.instance_1 = new lib.back2();
	this.instance_1.setTransform(0,0,0.471,0.471);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.1,-2.3,907.5,510.8);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ23();
	this.instance.setTransform(27.3,26.8,1.105,1,0,0,180,7.6,8.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(179).to({y:-23.2,alpha:0},10,cjs.Ease.get(-1)).wait(311));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E43640").s().p("AkLEDIAAoFIIXAAIAAIFg");
	this.shape.setTransform(26.9,26);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC3333").s().p("AkLEDIAAoFIIXAAIAAIFg");
	this.shape_1.setTransform(26.9,26);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#990000").s().p("AkLEDIAAoFIIXAAIAAIFg");
	this.shape_2.setTransform(26.9,26);

	this.instance_1 = new lib.Символ27();
	this.instance_1.setTransform(26.9,25.9,1,1,0,0,0,26.9,25.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},152).to({state:[{t:this.shape_2}]},7).to({state:[{t:this.shape_1}]},3).to({state:[{t:this.instance_1}]},17).to({state:[{t:this.instance_1}]},10).wait(311));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(179).to({_off:false},0).to({y:-24.1,alpha:0},10,cjs.Ease.get(-1)).wait(311));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,53.8,51.9);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ11();
	this.instance.setTransform(0,11.8,1,1,0,0,0,0,11.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.211},4).to({alpha:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,1,24.5);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.setTransform(0,11.8,1,1,0,0,0,0,11.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,1,24.5);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ28();
	this.instance.setTransform(190,25.5,1,1,0,0,0,190,25.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(179).to({y:-22,alpha:0},11,cjs.Ease.get(-1)).wait(310));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,381,52);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ30();
	this.instance.setTransform(116.8,28.7,1,1,0,0,0,75.1,16.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(174).to({y:-0.3,alpha:0},20,cjs.Ease.get(-1)).wait(306));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(41.7,12.1,150.2,25.9);


(lib.Символ64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ55();
	this.instance.setTransform(180.8,184.9,0.901,0.901,-30,0,0,142.5,154.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,361.6,369.5);


(lib.Символ63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ54();
	this.instance.setTransform(118.6,124.1,0.667,0.667,14.9,0,0,142.6,154.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,237,248.3);


(lib.Символ62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ56();
	this.instance.setTransform(92.5,99.1,0.591,0.591,5.5,0,0,142.3,154.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,185.3,198.1);


(lib.Символ61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ62();
	this.instance.setTransform(92.6,99,1,1,0,0,0,92.6,99);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:91.6},13,cjs.Ease.get(-1)).to({y:82.5},16,cjs.Ease.get(1)).to({y:90.8},20,cjs.Ease.get(-1)).to({y:99},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,185.3,198.1);


(lib.Символ60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ57();
	this.instance.setTransform(122.4,127,0.653,0.653,-20.4,0,0,142.5,154.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:154.5,scaleX:0.65,scaleY:0.65,rotation:-20.3,y:135.1},24,cjs.Ease.get(-1)).to({regY:154.6,scaleX:0.65,scaleY:0.65,rotation:-20.4,y:143.5},25,cjs.Ease.get(1)).to({regX:142.4,scaleX:0.65,scaleY:0.65,rotation:-20.3,y:135.3},25,cjs.Ease.get(-1)).to({regX:142.5,scaleX:0.65,scaleY:0.65,rotation:-20.4,y:127},25,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,244.8,253.9);


(lib.Символ59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ64();
	this.instance.setTransform(180.8,184.8,1,1,0,0,0,180.8,184.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:193.8},24,cjs.Ease.get(-1)).to({y:201.3},20,cjs.Ease.get(1)).to({y:192.5},24,cjs.Ease.get(-1)).to({y:184.8},21,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,361.6,369.5);


(lib.Символ58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ63();
	this.instance.setTransform(118.5,124.2,1,1,0,0,0,118.5,124.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:132.3},19,cjs.Ease.get(-1)).to({y:140.7},20,cjs.Ease.get(1)).to({y:132.5},20,cjs.Ease.get(-1)).to({y:124.2},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,237,248.3);


(lib.Символ53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ61();
	this.instance.setTransform(692.8,313.2,0.504,0.504,-33.4,0,0,92.5,99);

	this.instance_1 = new lib.Символ59();
	this.instance_1.setTransform(966.7,282.6,0.346,0.346,65.2,0,0,180.8,184.8);

	this.instance_2 = new lib.Символ58();
	this.instance_2.setTransform(568.1,101.6,0.488,0.488,-45,0,0,118.4,124.2);

	this.instance_3 = new lib.Символ61();
	this.instance_3.setTransform(910.7,76.1,1,1,0,0,0,92.6,99);

	this.instance_4 = new lib.Символ60();
	this.instance_4.setTransform(365.5,81,1,1,0,0,0,122.4,127);

	this.instance_5 = new lib.Символ59();
	this.instance_5.setTransform(456.9,370.6,0.846,0.846,0,0,0,180.8,184.8);

	this.instance_6 = new lib.Символ58();
	this.instance_6.setTransform(851.9,402.7,1,1,0,0,0,118.5,124.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(243.1,-46,787.8,572.8);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ31();
	this.instance.setTransform(16.4,16.4,1,1,0,0,0,16.4,16.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(184).to({regY:14.3,scaleX:53.8,scaleY:53.8,rotation:167.5,x:-84.8,y:226,alpha:0},15,cjs.Ease.get(-1)).wait(301));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,32.9,32.9);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ25();
	this.instance.setTransform(6,10.3,1,1,0,0,0,6,10.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-545,y:-222.6},24,cjs.Ease.get(1)).wait(7).to({y:-220.6},0).wait(2).to({y:-222.6},0).wait(1).to({x:-535,y:-182.6},10,cjs.Ease.get(1)).wait(95).to({x:-448.5,y:-188.9},7,cjs.Ease.get(-1)).to({x:-138,y:-211.6},8,cjs.Ease.get(1)).wait(5).to({y:-208.6},0).wait(2).to({y:-211.6},0).wait(339));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,12.1,21.4);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ14();
	this.instance.setTransform(7.6,15.8,1,1,0,0,0,7.4,11.1);

	this.instance_1 = new lib.Символ15();
	this.instance_1.setTransform(24.9,12.8,1,1,0,0,0,7.5,8.1);

	this.instance_2 = new lib.Символ16();
	this.instance_2.setTransform(42.6,9.1,1,1,0,0,0,6.5,11.3);

	this.instance_3 = new lib.Символ17();
	this.instance_3.setTransform(56.9,12.8,1,1,0,0,0,6.9,8.1);

	this.instance_4 = new lib.Символ18();
	this.instance_4.setTransform(70.9,12.6,1,1,0,0,0,3.9,7.9);

	this.instance_5 = new lib.Символ19();
	this.instance_5.setTransform(83.7,9.3,1,1,0,0,0,7.3,11.5);

	this.instance_6 = new lib.Символ20();
	this.instance_6.setTransform(101.9,12.8,1,1,0,0,0,7.5,8.1);

	this.instance_7 = new lib.Символ21();
	this.instance_7.setTransform(124.1,12.6,1,1,0,0,0,11.1,7.9);

	this.instance_8 = new lib.Символ29();
	this.instance_8.setTransform(67.7,12.3,1,1,0,0,0,67.5,14.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},58).to({state:[{t:this.instance},{t:this.instance_1}]},7).to({state:[{t:this.instance},{t:this.instance_1},{t:this.instance_2}]},4).to({state:[{t:this.instance},{t:this.instance_1},{t:this.instance_2},{t:this.instance_3}]},4).to({state:[{t:this.instance},{t:this.instance_1},{t:this.instance_2},{t:this.instance_3},{t:this.instance_4}]},3).to({state:[{t:this.instance},{t:this.instance_1},{t:this.instance_2},{t:this.instance_3},{t:this.instance_4},{t:this.instance_5}]},17).to({state:[{t:this.instance},{t:this.instance_1},{t:this.instance_2},{t:this.instance_3},{t:this.instance_4},{t:this.instance_5},{t:this.instance_6}]},3).to({state:[{t:this.instance},{t:this.instance_1},{t:this.instance_2},{t:this.instance_3},{t:this.instance_4},{t:this.instance_5},{t:this.instance_6},{t:this.instance_7}]},12).to({state:[{t:this.instance},{t:this.instance_1},{t:this.instance_2},{t:this.instance_3},{t:this.instance_4},{t:this.instance_5},{t:this.instance_6},{t:this.instance_7}]},4).to({state:[{t:this.instance_8}]},67).to({state:[{t:this.instance_8}]},10).wait(311));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(179).to({_off:false},0).to({y:-37.7,alpha:0},10,cjs.Ease.get(-1)).wait(311));

	// Слой 1
	this.instance_9 = new lib.Символ9();
	this.instance_9.setTransform(-140,11.8,1,1,0,0,0,0,11.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(34).to({x:0},0).wait(24).to({x:16},0).wait(7).to({x:35},0).wait(4).to({x:50.5},0).wait(4).to({x:65.5},0).wait(3).to({x:77.5},0).wait(17).to({x:93},0).wait(3).to({x:112},0).wait(12).to({x:138},0).wait(71).to({y:-38.2,alpha:0},10,cjs.Ease.get(-1)).wait(311));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-140.5,-0.5,1,24.5);


// stage content:



(lib.poker_video_black_nobt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 10
	this.instance = new lib.Символ53();
	this.instance.setTransform(-272.8,67.7,0.948,0.948,0,0,0,46.8,114);
	this.instance.alpha = 0.051;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 7
	this.instance_1 = new lib.Символ36();
	this.instance_1.setTransform(94.1,-257,1,1,0,0,0,189.1,37.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1.5,1,1).p("EgyCgIlMBkFAAAIAARLMhkFAAAg");
	this.shape.setTransform(317.9,-57.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_1}]}).wait(1));

	// Слой 6
	this.instance_2 = new lib.Символ32();
	this.instance_2.setTransform(215.5,64.5,1,1,0,0,0,16.4,16.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 1
	this.instance_3 = new lib.Символ26();
	this.instance_3.setTransform(676.6,429.4,1,1,0,0,0,6,10.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Слой 1
	this.instance_4 = new lib.Символ12();
	this.instance_4.setTransform(102,184.3,1,1,0,0,0,0,11.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Слой 1
	this.instance_5 = new lib.Символ22();
	this.instance_5.setTransform(528,184.4,1,1,0,0,0,26.9,25.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Слой 1
	this.instance_6 = new lib.Символ2();
	this.instance_6.setTransform(363.8,56.9,1.293,1.293,0,0,0,137.2,18.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// Слой 1
	this.instance_7 = new lib.Символ6();
	this.instance_7.setTransform(294,184.5,1.089,1,0,0,0,190,25.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// Слой 8
	this.instance_8 = new lib.Символ34();
	this.instance_8.setTransform(347.5,148.5,0.954,0.954,0,0,0,397,397);
	this.instance_8.alpha = 0.051;
	this.instance_8.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// Слой 11
	this.instance_9 = new lib.Символ24();
	this.instance_9.setTransform(333.9,176.2,0.898,0.898,0,0,0,451.9,254.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(233.2,-50.5,828.8,757.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;