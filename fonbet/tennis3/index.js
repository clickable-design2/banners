(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,820,464);


(lib.ball = function() {
	this.initialize(img.ball);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,18,18);


(lib.bodu = function() {
	this.initialize(img.bodu);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,98,330);


(lib.btngreen = function() {
	this.initialize(img.btngreen);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,146,89);


(lib.btnred = function() {
	this.initialize(img.btnred);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,146,89);


(lib.hand1 = function() {
	this.initialize(img.hand1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,61,24);


(lib.handl = function() {
	this.initialize(img.handl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,44,79);


(lib.head = function() {
	this.initialize(img.head);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,49,61);


(lib.hend = function() {
	this.initialize(img.hend);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,98,27);


(lib.Layer10 = function() {
	this.initialize(img.Layer10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,57,87);


(lib.Layer11 = function() {
	this.initialize(img.Layer11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,55,95);


(lib.leg1 = function() {
	this.initialize(img.leg1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,39,57);


(lib.leg2 = function() {
	this.initialize(img.leg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,79,87);


(lib.legr = function() {
	this.initialize(img.legr);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,48,38);


(lib.legr1 = function() {
	this.initialize(img.legr1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,42,101);


(lib.logored = function() {
	this.initialize(img.logored);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,219,67);


(lib.raketka = function() {
	this.initialize(img.raketka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,55,129);


(lib.service = function() {
	this.initialize(img.service);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,76,64);


(lib.service2 = function() {
	this.initialize(img.service2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,72,65);


(lib.service3 = function() {
	this.initialize(img.service3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,62,63);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ball();
	this.instance.parent = this;
	this.instance.setTransform(-9,-9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9,-9,18,18);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ball();
	this.instance.parent = this;
	this.instance.setTransform(-9,-9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9,-9,18,18);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.service3();
	this.instance.parent = this;
	this.instance.setTransform(153,0);

	this.instance_1 = new lib.service2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(77,-3);

	this.instance_2 = new lib.service();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-6,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol32, new cjs.Rectangle(-6,-3,221,67), null);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.btngreen();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.596,0.596);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25).to({x:-2},0).wait(1).to({x:2},0).wait(1).to({x:-2},0).wait(1).to({x:2},0).wait(1).to({x:0},0).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,87.1,53.1);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.btnred();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.596,0.596);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({x:-2},0).wait(1).to({x:2},0).wait(1).to({x:-2},0).wait(1).to({x:2},0).wait(1).to({x:0},0).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,87.1,53.1);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhfCuIAMhIIBBAAIgLBIgAg2gMIALgFQAbgKAhgUQAJgHAEgIQAFgJAAgLQAAgQgLgJQgMgJgVAAQgUAAgXAIQgXAKgYAQIAAg5QAYgRAZgIQAbgJAdAAQAWAAATAGQARAGANALQAMAKAFAPQAHAPgBARQABAXgIARQgGARgPAPQgOAOgWALQgWALgdAKIgIAiIgmAIg");
	this.shape.setTransform(131.8,22);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAICrIATh3QgbAEgXAAQgZAAgTgFQgTgGgNgLQgNgLgHgQQgHgQAAgWQAAgTADgUIAQhkIBAAAIgQBmIgCAcQAAAUAMAJQAHAGAKACQAKADAOAAQAWAAAWgFIAailIBBAAIg2FVg");
	this.shape_1.setTransform(104.8,22.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiTCgIBuiHQgMgGgKgIQgJgIgHgKQgGgKgEgMQgDgNAAgOQAAgbAKgVQAJgWATgPQASgPAbgHQAZgJAhABIBfAAIg2FUIhBAAIAViDIgcAAIhmCGgAARhzQgNAEgJAIQgKAIgFAMQgFALAAAOQAAAMAEAJQAEAJAHAGQAJAGAJACQAMAEAOAAIAYAAIAShtIgbAAQgRAAgPAEg");
	this.shape_2.setTransform(73.4,22.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgtCsIgpj7Ig5D5Ig6AAIBQlUIBSAAIAoD+IB5j+IBPAAIgcFUIhAAAIAVj5Ih4D7g");
	this.shape_3.setTransform(37.6,22.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol26, new cjs.Rectangle(14.7,-2,128.4,53), null);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhUC6IAxk3IhrAAIALg7IESAAIAAA7IhtAAIgwE3g");
	this.shape.setTransform(228.3,28.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiCC6IA7lyIDKAAIgJA7IiFAAIgOBYIBlAAIAAA8IhuAAIgQBnICJAAIgKA8g");
	this.shape_1.setTransform(198.3,28.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ah/C6IA7lyIBFAAIgUCFIASAAQAfABAZAGQAYAHAQAOQARANAIATQAIAUAAAZIgCAdQgDAOgGAMQgLAZgWARQgWAQgeAKQgeAIgkABgAgxCCIAWAAQATAAAPgFQAQgEALgKQAMgKAGgNQAHgNAAgRQAAgNgFgKQgEgLgIgGQgIgHgNgEQgMgDgQAAIgWAAg");
	this.shape_2.setTransform(169,28.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiBC6IA7lyIDIAAIAAA8IiOAAIgNBVIAZAAQAfAAAYAGQAXAHAQANQAPAMAIASQAHASAAAYQAAAcgKAXQgKAYgUARQgUAQgcAKQgdAIgiABgAg1CDIAdAAQASAAAOgFQAPgEAKgIQALgJAGgNQAGgMAAgQQAAgLgEgKQgEgJgHgGQgIgGgLgDQgMgDgPAAIgdAAg");
	this.shape_3.setTransform(140,28.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgyC+QgQgDgNgGQgOgFgLgJQgMgIgJgKIgRgYIgMgcQgGgTgEgwQAAgaAFgXQAEgZAIgXQAJgWAMgUQAMgTAPgPIAagVQANgJAOgGQAPgGAQgDQAPgEASAAIAhADQAQADAOAGQANAGAMAIQALAIAJALIARAXIAMAcQAKAqAAAZQAAAagFAYQgEAYgIAXQgJAWgMAUQgMAUgQAPIgYAVQgOAIgOAGQgPAHgQADQgQADgRAAgAgPiAQgQAGgNANQgKALgJAPQgJAPgGATQgHASgDAWQgEAUAAAXQAAAZAFATQAFATAKANQAKANAOAHQAOAHASAAQARAAAPgHQAPgHAOgNQAKgLAJgPQAJgPAGgSQAHgTADgVQAEgVAAgXQAAgZgFgTQgFgTgKgNQgKgNgOgHQgOgHgSAAQgRAAgPAIg");
	this.shape_4.setTransform(107.5,28);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhUC6IAxk3IhrAAIALg7IESAAIAAA7IhtAAIgwE3g");
	this.shape_5.setTransform(75.7,28.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgyC+QgQgDgNgGQgOgFgLgJQgMgIgJgKIgRgYIgMgcQgGgTgEgwQAAgaAFgXQAEgZAIgXQAJgWAMgUQAMgTAPgPIAagVQANgJAOgGQAPgGAQgDQAPgEASAAIAhADQAQADAOAGQANAGAMAIQALAIAJALIARAXIAMAcQAKAqAAAZQAAAagFAYQgEAYgIAXQgJAWgMAUQgMAUgQAPIgYAVQgOAIgOAGQgPAHgQADQgQADgRAAgAgPiAQgQAGgNANQgKALgJAPQgJAPgGATQgHASgDAWQgEAUAAAXQAAAZAFATQAFATAKANQAKANAOAHQAOAHASAAQARAAAPgHQAPgHAOgNQAKgLAJgPQAJgPAGgSQAHgTADgVQAEgVAAgXQAAgZgFgTQgFgTgKgNQgKgNgOgHQgOgHgSAAQgRAAgPAIg");
	this.shape_6.setTransform(39.4,28);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol25, new cjs.Rectangle(7,1.7,235.6,57.6), null);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlVioIAFgEIKgAAIAGAFIlVFUg");
	this.shape.setTransform(34.2,17.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(0,0,68.3,34.6), null);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAyDFIArkRIjKERIhJAAIA+mJIBHAAIgqELIDGkLIBMAAIg+GJg");
	this.shape.setTransform(190.7,27.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhFAEIgeC/IhLAAIA+mJIBKAAIgbCsICWisIBaAAIitC8IB3DCIhNAPg");
	this.shape_1.setTransform(155.9,28.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiODFIA+mJIBmAAQAeAAAWAHQAXAGAQAMQAOAMAIARQAIAQAAAUQAAATgGAQQgEAOgKANQgKALgNAJQgMAJgPAGIAYAMQALAIAHAKQAIAKADANQAFANAAAQQAAAdgMAYQgLAXgVAQQgWAQgeAIQgdAIgjAAgAg+CNIAjAAQAUAAAOgEQAQgEAMgIQALgJAGgMQAHgNAAgQQAAgOgFgKQgFgLgIgHQgKgHgOgEQgOgEgQAAIgdAAgAgighIAeAAQAPAAAOgEQAPgEAKgHQAKgIAGgLQAFgMAAgPQABgWgOgMQgPgMgdAAIgfAAg");
	this.shape_2.setTransform(121.2,27.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABTBgIiGAAIgwBkIhLAAIDHmLIBNAAIBJGAIhLAOgABKAiIgZiWIhHCWIBgAAg");
	this.shape_3.setTransform(84.6,28.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhZDFIAzlJIhwAAIALhAIEiAAIAABAIhzAAIgzFJg");
	this.shape_4.setTransform(54.9,27.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag9DAIgagNQgNgIgLgLQgJgKgIgOIgOgcQgHgVgFgzQAAgZAFgXQAEgYAHgVQAIgVAKgUQALgTAOgQQANgRAQgMQARgNASgJQATgKATgEQAVgEAWgBQAeABAbAIQAaAKAWAPIgVBEQgUgSgTgJQgXgKgXAAQgOAAgOADQgNAEgKAHQgYANgRAYQgRAXgIAeQgJAeAAAgQgBAcAHAWQAHAUALAPQAMANASAIQAQAGAVAAQAWAAAYgIQAYgIAWgOIAABCQgWAMgaAIQgcAHgbABQgtgFgTgHg");
	this.shape_5.setTransform(20.6,28);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(0,0,211,61), null);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAlBaIAcizIAiAAIgcCzgAhiBaIAcizIAiAAIgKBBIAJAAQAPAAAMAEQALADAIAGQAIAHAEAJQAEAJAAANIgCAOIgEAMQgFAMgLAIQgJAIgOAEQgPAFgSAAgAg9A/IALAAQAJAAAIgCQAIgDAFgEQAGgFADgGQADgHAAgIQAAgGgCgFQgCgFgEgDQgEgEgGgBQgGgCgIAAIgLAAg");
	this.shape.setTransform(194,13.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhCBaIAcizIAqAAQAQAAALAEQAMADAIAHQAIAGAEAKQAEAJAAAMQAAAOgFAMQgFALgKAHQgKAIgOAFQgUAEgLAAIgOAAIgKBDgAgSgDIAMAAQAJAAAIgCQAHgCAFgFQAFgEADgGQADgGgBgIQABgGgCgFQgDgFgDgDQgEgDgGgCQgGgCgIAAIgKAAg");
	this.shape_1.setTransform(176.9,13.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag8BaIAcizIBeAAIAAAfIhBAAIgXCUg");
	this.shape_2.setTransform(164,13.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAXBaIAUh8IhcB8IgiAAIAdizIAgAAIgTB5IBah5IAjAAIgdCzg");
	this.shape_3.setTransform(148.8,13.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag+BaIAcizIBhAAIgEAdIhAAAIgGArIAwAAIAAAcIg1AAIgIAyIBCAAIgFAdg");
	this.shape_4.setTransform(128.7,13.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAXBaIATh8IhbB8IgiAAIAdizIAgAAIgTB5IBah5IAjAAIgcCzg");
	this.shape_5.setTransform(113.3,13.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAUBaIANhOIhEAAIgNBOIgiAAIAdizIAhAAIgLBIIBEAAIAMhIIAiAAIgdCzg");
	this.shape_6.setTransform(96,13.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgoBaIAXiWIgzAAIAFgdICEAAIAAAdIg0AAIgXCWg");
	this.shape_7.setTransform(81,13.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag+BaIAcizIBhAAIgEAdIhAAAIgGArIAwAAIAAAcIg1AAIgIAyIBCAAIgFAdg");
	this.shape_8.setTransform(66.5,13.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhZA+QAMgDAHgFQAJgFAGgJQAGgJAFgNQAFgNAGgVIAVhKIBmAAIgdCyIgiAAIAYiWIgmAAIgPA3QgHAagIARQgLAWgGAHQgFAHgGADQgGAFgGADQgUAHgMABg");
	this.shape_9.setTransform(50.4,14);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAmAsIg8AAIgXAtIgiAAIBbizIAjAAIAhCuIgiAHgAAhAQIgKhEIghBEIArAAg");
	this.shape_10.setTransform(27,13.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAUBaIANhOIhEAAIgNBOIgiAAIAdizIAhAAIgLBIIBEAAIAMhIIAiAAIgdCzg");
	this.shape_11.setTransform(11.3,13.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(0,0,206,30), null);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhCpAmYMAAAhMvMCFTAAAMAAABMvg");
	this.shape.setTransform(426.6,245.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(0,0,853.3,491.2), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hend();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(0,0,98,27), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bodu();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,0,98,330), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.handl();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,0,44,79), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hand1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,61,24), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.head();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,49,61), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer11();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,55,95), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.leg1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,39,57), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.leg2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,79,87), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer10();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,57,87), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.legr();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,48,38), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.legr1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,42,101), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.raketka();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,55,129), null);


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol29();
	this.instance.parent = this;
	this.instance.setTransform(43.5,26.5,1,1,0,0,0,43.5,26.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:26.4,scaleX:1.07,scaleY:1.07,x:43.6,y:26.4},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,87.1,53.1);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol28();
	this.instance.parent = this;
	this.instance.setTransform(43.5,26.5,1,1,0,0,0,43.5,26.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:26.4,scaleX:1.15,scaleY:1.15},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,87.1,53.1);


(lib.Symbol27 = function(mode,startPosition,loop) {
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

	// Layer 4
	this.instance = new lib.Symbol32();
	this.instance.parent = this;
	this.instance.setTransform(11,-22.5,1,1,0,0,0,38,32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:30.9},4,cjs.Ease.get(-1)).to({y:97.5},5,cjs.Ease.get(1)).to({y:37.5},5,cjs.Ease.get(-1)).to({y:-22.5},5,cjs.Ease.get(1)).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol30();
	this.instance_1.parent = this;
	this.instance_1.setTransform(21.3,69.1,1.246,1.246,0,0,0,43.5,26.5);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.Symbol30(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:26.4,y:21.4},4,cjs.Ease.get(-1)).to({y:-38.2},5,cjs.Ease.get(1)).to({y:15.4},5,cjs.Ease.get(-1)).to({regY:26.5,y:69.1},5,cjs.Ease.get(1)).wait(1));

	// btngreen.png
	this.instance_2 = new lib.Symbol31();
	this.instance_2.parent = this;
	this.instance_2.setTransform(133.7,69.1,1.246,1.246,0,0,0,43.5,26.5);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.Symbol31(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:26.4,y:21.4},4,cjs.Ease.get(-1)).to({y:-38.2},5,cjs.Ease.get(1)).to({y:15.4},5,cjs.Ease.get(-1)).to({regY:26.5,y:69.1},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.1,-58,232.9,165.2);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 26
	this.instance = new lib.Symbol26();
	this.instance.parent = this;
	this.instance.setTransform(218.6,36,0.768,0.768,0,0,0,73.9,30.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:30.7,scaleX:0.82,scaleY:0.82,y:36.1},4,cjs.Ease.get(-1)).to({regX:74,regY:30.6,scaleX:0.89,scaleY:0.89,x:218.7},5,cjs.Ease.get(1)).to({scaleX:0.83,scaleY:0.83,x:218.6,y:36},5,cjs.Ease.get(-1)).to({regX:73.9,scaleX:0.77,scaleY:0.77},5,cjs.Ease.get(1)).wait(31));

	// Symbol 25
	this.instance_1 = new lib.Symbol25();
	this.instance_1.parent = this;
	this.instance_1.setTransform(75,30.6,0.755,0.755,0,0,0,124.7,30.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({regX:124.8,scaleX:0.8,scaleY:0.8},5,cjs.Ease.get(-1)).to({regY:30.4,scaleX:0.83,scaleY:0.83,y:30.5},4,cjs.Ease.get(1)).to({scaleX:0.79,scaleY:0.79,x:75.1,y:30.6},5,cjs.Ease.get(-1)).to({regX:124.7,regY:30.6,scaleX:0.76,scaleY:0.76,x:75},5,cjs.Ease.get(1)).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.9,8.8,285.5,43.5);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol20();
	this.instance.parent = this;
	this.instance.setTransform(10.5,5.4,0.308,0.308,0,0,0,34.1,17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:10.6,y:13.4},4,cjs.Ease.get(-1)).to({x:10.5,y:23.4},5,cjs.Ease.get(1)).to({regY:17.6,x:10.6,y:14.4},5,cjs.Ease.get(-1)).to({regY:17.4,x:10.5,y:5.4},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,21,10.7);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol16();
	this.instance.parent = this;
	this.instance.setTransform(409.6,229.6,1,1,0,0,0,426.6,245.6);
	this.instance.alpha = 0.352;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.back();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(-17,-16,853.3,491.2), null);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol17();
	this.instance.parent = this;
	this.instance.setTransform(235,107.5,1,1,0,0,0,103,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({scaleX:1.18,scaleY:1.18,x:235.1},9).to({scaleX:1,scaleY:1,x:235},10).wait(22));

	// Layer 1
	this.instance_1 = new lib.Symbol18();
	this.instance_1.parent = this;
	this.instance_1.setTransform(234.1,64.3,1,1,0,0,0,105.5,30.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.17,scaleY:1.17,x:234.2},9).to({scaleX:1,scaleY:1,x:234.1},10).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(128.6,33.8,211,88.7);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol15();
	this.instance.parent = this;
	this.instance.setTransform(427.1,248,1,1,0,0,0,410,232);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:417.1},49).to({x:427.1},50).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,853.3,491.2);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol21();
	this.instance.parent = this;
	this.instance.setTransform(-16.1,29.1,0.737,0.737,-90,0,0,10.5,5.3);

	this.instance_1 = new lib.Symbol21();
	this.instance_1.parent = this;
	this.instance_1.setTransform(36.8,28.3,0.737,0.737,90,0,0,10.5,5.2);

	this.instance_2 = new lib.Symbol21();
	this.instance_2.parent = this;
	this.instance_2.setTransform(11.3,54.6,0.737,0.737,180,0,0,10.5,5.2);

	this.instance_3 = new lib.Symbol21();
	this.instance_3.parent = this;
	this.instance_3.setTransform(10.5,1.7,0.737,0.737,0,0,0,10.5,5.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol22, new cjs.Rectangle(-20,-2.3,60.7,60.7), null);


(lib.Symbol19 = function(mode,startPosition,loop) {
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

	// Layer 2
	this.instance = new lib.Symbol24();
	this.instance.parent = this;
	this.instance.setTransform(-334.5,51.5,1,1,0,0,0,124.8,58);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-76.7},4,cjs.Ease.get(-1)).to({x:96.5},5,cjs.Ease.get(1)).to({x:-59.5},5,cjs.Ease.get(-1)).to({x:-214.5},5,cjs.Ease.get(1)).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol14();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-56.6,-31.8,1,1,0,0,0,71,21);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-203.2},4,cjs.Ease.get(-1)).to({x:-386.6},5,cjs.Ease.get(1)).to({x:-221.6},5,cjs.Ease.get(-1)).to({x:-56.6},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-473.2,-19,685.2,88.7);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_93 = function() {
		this.parent.txt.gotoAndPlay(1);
		this.parent.btn.gotoAndPlay(1);
	}
	this.frame_256 = function() {
		this.parent.txt.gotoAndPlay(10);
		this.parent.btn.gotoAndPlay(10);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(93).call(this.frame_93).wait(163).call(this.frame_256).wait(6));

	// Layer 15
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-278,176.1);
	this.instance._off = true;

	this.instance_1 = new lib.Tween2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(302.3,69.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({_off:false},0).to({guide:{path:[-277.9,176.1,-174.4,126.4,-51.5,103.8]}},2,cjs.Ease.get(-1)).to({_off:true,x:302.3,y:69.6},3,cjs.Ease.get(1)).wait(45).to({_off:false,x:-278,y:176.1},0).to({guide:{path:[-277.9,176.1,-118.1,99.3,88,87.3]}},4,cjs.Ease.get(-1)).to({_off:true,guide:{path:[88.1,87.1,188.6,81.2,300.4,90.7]}},163).wait(6));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(41).to({_off:false},3,cjs.Ease.get(1)).to({x:82.8,y:78.8},2,cjs.Ease.get(-1)).to({x:-262.2,y:-52.8},3,cjs.Ease.get(1)).to({_off:true},1).wait(43).to({_off:false,guide:{path:[88.1,87.1,188.6,81.2,300.4,90.7]}},163).to({x:-262.2,y:-52.8},5,cjs.Ease.get(-1)).wait(1));

	// Layer 17
	this.instance_2 = new lib.Symbol22();
	this.instance_2.parent = this;
	this.instance_2.setTransform(87.9,64.4,1,1,0,0,0,10.5,5.3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(93).to({_off:false},0).to({x:111.3,y:62.9},18).to({x:194.7,y:62},64).to({x:300.3,y:67.1},81).to({_off:true},1).wait(5));

	// raketka.png
	this.instance_3 = new lib.Symbol2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(248.9,80.5,1,1,0,0,0,20.5,102.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-4.8,x:244.5,y:83.2},4,cjs.Ease.get(-1)).to({rotation:-10.7,x:239.1,y:86.4},5,cjs.Ease.get(1)).to({rotation:-5.3,x:243.9,y:83.5},5,cjs.Ease.get(-1)).to({rotation:0,x:248.9,y:80.5},5,cjs.Ease.get(1)).wait(1).to({rotation:-4.8,x:244.5,y:83.2},4,cjs.Ease.get(-1)).to({rotation:-10.7,x:239.1,y:86.4},5,cjs.Ease.get(1)).to({rotation:-5.3,x:243.9,y:83.5},5,cjs.Ease.get(-1)).to({rotation:0,x:248.9,y:80.5},5,cjs.Ease.get(1)).to({regX:20.6,scaleX:1,scaleY:1,rotation:14.5,x:255.8,y:96.8},2,cjs.Ease.get(-1)).to({regX:20.7,scaleX:1,scaleY:1,rotation:36.4,x:266,y:121},3,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:21.8,x:259.2,y:104.8},2,cjs.Ease.get(-1)).to({regX:20.5,scaleX:1,scaleY:1,rotation:0,x:248.9,y:80.5},3,cjs.Ease.get(1)).wait(1).to({rotation:-4.8,x:244.5,y:83.2},4,cjs.Ease.get(-1)).to({rotation:-10.7,x:239.1,y:86.4},5,cjs.Ease.get(1)).to({rotation:-5.3,x:243.9,y:83.5},5,cjs.Ease.get(-1)).to({rotation:0,x:248.9,y:80.5},5,cjs.Ease.get(1)).wait(1).to({rotation:-4.8,x:244.5,y:83.2},4,cjs.Ease.get(-1)).to({rotation:-10.7,x:239.1,y:86.4},5,cjs.Ease.get(1)).to({rotation:-5.3,x:243.9,y:83.5},5,cjs.Ease.get(-1)).to({rotation:0,x:248.9,y:80.5},5,cjs.Ease.get(1)).to({regX:20.6,scaleX:1,scaleY:1,rotation:23.3,x:259.9,y:106.5},4,cjs.Ease.get(-1)).to({regX:20.7,scaleX:1,scaleY:1,rotation:36.4,x:266,y:121},163).to({regX:20.5,rotation:0,x:248.9,y:80.5},5,cjs.Ease.get(-1)).wait(1));

	// legr1.png
	this.instance_4 = new lib.Symbol3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(212,230.4,1,1,0,0,0,14,4.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:14.1,regY:4.5,rotation:6.3,x:215.5,y:231.1},4,cjs.Ease.get(-1)).to({regX:14,rotation:14.5,x:219.8,y:231.8},5,cjs.Ease.get(1)).to({rotation:7.1,x:215.9,y:231.1},5,cjs.Ease.get(-1)).to({regY:4.4,rotation:0,x:212,y:230.4},5,cjs.Ease.get(1)).wait(1).to({regX:14.1,regY:4.5,rotation:6.3,x:215.5,y:231.1},4,cjs.Ease.get(-1)).to({regX:14,rotation:14.5,x:219.8,y:231.8},5,cjs.Ease.get(1)).to({rotation:7.1,x:215.9,y:231.1},5,cjs.Ease.get(-1)).to({regY:4.4,rotation:0,x:212,y:230.4},5,cjs.Ease.get(1)).to({regX:14.1,rotation:-1.3,x:212.1,y:233.3},2,cjs.Ease.get(-1)).to({regX:14,regY:4.5,rotation:-3.5,x:212,y:237.7},3,cjs.Ease.get(1)).to({rotation:-2,y:234.8},2,cjs.Ease.get(-1)).to({regY:4.4,rotation:0,y:230.4},3,cjs.Ease.get(1)).wait(1).to({regX:14.1,regY:4.5,rotation:6.3,x:215.5,y:231.1},4,cjs.Ease.get(-1)).to({regX:14,rotation:14.5,x:219.8,y:231.8},5,cjs.Ease.get(1)).to({rotation:7.1,x:215.9,y:231.1},5,cjs.Ease.get(-1)).to({regY:4.4,rotation:0,x:212,y:230.4},5,cjs.Ease.get(1)).wait(1).to({regX:14.1,regY:4.5,rotation:6.3,x:215.5,y:231.1},4,cjs.Ease.get(-1)).to({regX:14,rotation:14.5,x:219.8,y:231.8},5,cjs.Ease.get(1)).to({rotation:7.1,x:215.9,y:231.1},5,cjs.Ease.get(-1)).to({regY:4.4,rotation:0,x:212,y:230.4},5,cjs.Ease.get(1)).to({regY:4.5,rotation:-2.1,x:212.1,y:235.1},4,cjs.Ease.get(-1)).to({rotation:-3.5,x:212,y:237.7},163).to({regY:4.4,rotation:0,y:230.4},5,cjs.Ease.get(-1)).wait(1));

	// legr.png
	this.instance_5 = new lib.Symbol4();
	this.instance_5.parent = this;
	this.instance_5.setTransform(232.2,321.6,1,1,0,0,0,9.2,8.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:224.8,y:323},4,cjs.Ease.get(-1)).to({x:215.6,y:324.8},5,cjs.Ease.get(1)).to({x:223.9,y:323.2},5,cjs.Ease.get(-1)).to({x:232.2,y:321.6},5,cjs.Ease.get(1)).wait(1).to({x:224.8,y:323},4,cjs.Ease.get(-1)).to({x:215.6,y:324.8},5,cjs.Ease.get(1)).to({x:223.9,y:323.2},5,cjs.Ease.get(-1)).to({x:232.2,y:321.6},5,cjs.Ease.get(1)).to({x:234.6,y:324.2},2,cjs.Ease.get(-1)).to({x:238.1,y:328.1},3,cjs.Ease.get(1)).to({x:235.7,y:325.5},2,cjs.Ease.get(-1)).to({x:232.2,y:321.6},3,cjs.Ease.get(1)).wait(1).to({x:224.8,y:323},4,cjs.Ease.get(-1)).to({x:215.6,y:324.8},5,cjs.Ease.get(1)).to({x:223.9,y:323.2},5,cjs.Ease.get(-1)).to({x:232.2,y:321.6},5,cjs.Ease.get(1)).wait(1).to({x:224.8,y:323},4,cjs.Ease.get(-1)).to({x:215.6,y:324.8},5,cjs.Ease.get(1)).to({x:223.9,y:323.2},5,cjs.Ease.get(-1)).to({x:232.2,y:321.6},5,cjs.Ease.get(1)).to({x:236,y:325.8},4,cjs.Ease.get(-1)).to({x:238.1,y:328.1},163).to({x:232.2,y:321.6},5,cjs.Ease.get(-1)).wait(1));

	// Layer 10.png
	this.instance_6 = new lib.Symbol5();
	this.instance_6.parent = this;
	this.instance_6.setTransform(149.9,155.6,1,1,0,0,0,18.9,9.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regY:9.7,rotation:-2.8,x:149.3,y:158.3},4,cjs.Ease.get(-1)).to({rotation:-6.5,x:148.7,y:161.6},5,cjs.Ease.get(1)).to({rotation:-3.1,x:149.3,y:158.7},5,cjs.Ease.get(-1)).to({regY:9.6,rotation:0,x:149.9,y:155.6},5,cjs.Ease.get(1)).wait(1).to({regY:9.7,rotation:-2.8,x:149.3,y:158.3},4,cjs.Ease.get(-1)).to({rotation:-6.5,x:148.7,y:161.6},5,cjs.Ease.get(1)).to({rotation:-3.1,x:149.3,y:158.7},5,cjs.Ease.get(-1)).to({regY:9.6,rotation:0,x:149.9,y:155.6},5,cjs.Ease.get(1)).to({rotation:8.8,x:147.9,y:154.4},2,cjs.Ease.get(-1)).to({regX:19.1,regY:9.7,rotation:21.9,x:144.8,y:152.5},3,cjs.Ease.get(1)).to({regX:19,regY:9.6,scaleX:1,scaleY:1,rotation:13.1,x:146.8,y:153.7},2,cjs.Ease.get(-1)).to({regX:18.9,scaleX:1,scaleY:1,rotation:0,x:149.9,y:155.6},3,cjs.Ease.get(1)).wait(1).to({regY:9.7,rotation:-2.8,x:149.3,y:158.3},4,cjs.Ease.get(-1)).to({rotation:-6.5,x:148.7,y:161.6},5,cjs.Ease.get(1)).to({rotation:-3.1,x:149.3,y:158.7},5,cjs.Ease.get(-1)).to({regY:9.6,rotation:0,x:149.9,y:155.6},5,cjs.Ease.get(1)).wait(1).to({regY:9.7,rotation:-2.8,x:149.3,y:158.3},4,cjs.Ease.get(-1)).to({rotation:-6.5,x:148.7,y:161.6},5,cjs.Ease.get(1)).to({rotation:-3.1,x:149.3,y:158.7},5,cjs.Ease.get(-1)).to({regY:9.6,rotation:0,x:149.9,y:155.6},5,cjs.Ease.get(1)).to({regY:9.7,scaleX:1,scaleY:1,rotation:14,x:146.6,y:153.7},4,cjs.Ease.get(-1)).to({regX:19.1,scaleX:1,scaleY:1,rotation:21.9,x:144.8,y:152.5},163).to({regX:18.9,regY:9.6,rotation:0,x:149.9,y:155.6},5,cjs.Ease.get(-1)).wait(1));

	// leg2.png
	this.instance_7 = new lib.Symbol6();
	this.instance_7.parent = this;
	this.instance_7.setTransform(174.6,235.2,1,1,0,0,0,62.6,12.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:3.5,x:177.2},4,cjs.Ease.get(-1)).to({rotation:8.2,x:180.4},5,cjs.Ease.get(1)).to({rotation:4,x:177.5},5,cjs.Ease.get(-1)).to({rotation:0,x:174.6},5,cjs.Ease.get(1)).wait(1).to({rotation:3.5,x:177.2},4,cjs.Ease.get(-1)).to({rotation:8.2,x:180.4},5,cjs.Ease.get(1)).to({rotation:4,x:177.5},5,cjs.Ease.get(-1)).to({rotation:0,x:174.6},5,cjs.Ease.get(1)).to({rotation:5,x:160.4,y:235.5},2,cjs.Ease.get(-1)).to({rotation:12.8,x:138.9,y:235.8},3,cjs.Ease.get(1)).to({regY:12.3,rotation:7.5,x:153.2,y:235.6},2,cjs.Ease.get(-1)).to({regY:12.2,rotation:0,x:174.6,y:235.2},3,cjs.Ease.get(1)).wait(1).to({rotation:3.5,x:177.2},4,cjs.Ease.get(-1)).to({rotation:8.2,x:180.4},5,cjs.Ease.get(1)).to({rotation:4,x:177.5},5,cjs.Ease.get(-1)).to({rotation:0,x:174.6},5,cjs.Ease.get(1)).wait(1).to({rotation:3.5,x:177.2},4,cjs.Ease.get(-1)).to({rotation:8.2,x:180.4},5,cjs.Ease.get(1)).to({rotation:4,x:177.5},5,cjs.Ease.get(-1)).to({rotation:0,x:174.6},5,cjs.Ease.get(1)).to({rotation:8,x:151.8,y:235.7},4,cjs.Ease.get(-1)).to({rotation:12.8,x:138.9,y:235.8},163).to({rotation:0,x:174.6,y:235.2},5,cjs.Ease.get(-1)).wait(1));

	// leg1.png
	this.instance_8 = new lib.Symbol7();
	this.instance_8.parent = this;
	this.instance_8.setTransform(120.4,300.4,1,1,0,0,0,21.4,7.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regY:7.3,rotation:6.8,x:119.6,y:296.9},4,cjs.Ease.get(-1)).to({regY:7.4,rotation:15.7,x:118.5,y:292.6},5,cjs.Ease.get(1)).to({rotation:7.8,x:119.4,y:296.5},5,cjs.Ease.get(-1)).to({rotation:0,x:120.4,y:300.4},5,cjs.Ease.get(1)).wait(1).to({regY:7.3,rotation:6.8,x:119.6,y:296.9},4,cjs.Ease.get(-1)).to({regY:7.4,rotation:15.7,x:118.5,y:292.6},5,cjs.Ease.get(1)).to({rotation:7.8,x:119.4,y:296.5},5,cjs.Ease.get(-1)).to({rotation:0,x:120.4,y:300.4},5,cjs.Ease.get(1)).to({x:100.7,y:295},2,cjs.Ease.get(-1)).to({x:71,y:286.8},3,cjs.Ease.get(1)).to({x:90.8,y:292.2},2,cjs.Ease.get(-1)).to({x:120.4,y:300.4},3,cjs.Ease.get(1)).wait(1).to({regY:7.3,rotation:6.8,x:119.6,y:296.9},4,cjs.Ease.get(-1)).to({regY:7.4,rotation:15.7,x:118.5,y:292.6},5,cjs.Ease.get(1)).to({rotation:7.8,x:119.4,y:296.5},5,cjs.Ease.get(-1)).to({rotation:0,x:120.4,y:300.4},5,cjs.Ease.get(1)).wait(1).to({regY:7.3,rotation:6.8,x:119.6,y:296.9},4,cjs.Ease.get(-1)).to({regY:7.4,rotation:15.7,x:118.5,y:292.6},5,cjs.Ease.get(1)).to({rotation:7.8,x:119.4,y:296.5},5,cjs.Ease.get(-1)).to({rotation:0,x:120.4,y:300.4},5,cjs.Ease.get(1)).to({x:88.8,y:291.7},4,cjs.Ease.get(-1)).to({x:71,y:286.8},163).to({x:120.4,y:300.4},5,cjs.Ease.get(-1)).wait(1));

	// Layer 11.png
	this.instance_9 = new lib.Symbol8();
	this.instance_9.parent = this;
	this.instance_9.setTransform(189.8,147.9,1,1,0,0,0,21.8,5.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({regY:6,rotation:-2.8,y:151.5},4,cjs.Ease.get(-1)).to({rotation:-6.2,y:155.8},5,cjs.Ease.get(1)).to({rotation:-3,y:151.9},5,cjs.Ease.get(-1)).to({regY:5.9,rotation:0,y:147.9},5,cjs.Ease.get(1)).wait(1).to({regY:6,rotation:-2.8,y:151.5},4,cjs.Ease.get(-1)).to({rotation:-6.2,y:155.8},5,cjs.Ease.get(1)).to({rotation:-3,y:151.9},5,cjs.Ease.get(-1)).to({regY:5.9,rotation:0,y:147.9},5,cjs.Ease.get(1)).to({regY:6,y:151.1},2,cjs.Ease.get(-1)).to({regY:5.9,rotation:0.2,y:155.7},3,cjs.Ease.get(1)).to({regX:21.9,regY:6,rotation:0,x:189.9,y:152.7},2,cjs.Ease.get(-1)).to({regX:21.8,regY:5.9,x:189.8,y:147.9},3,cjs.Ease.get(1)).wait(1).to({regY:6,rotation:-2.8,y:151.5},4,cjs.Ease.get(-1)).to({rotation:-6.2,y:155.8},5,cjs.Ease.get(1)).to({rotation:-3,y:151.9},5,cjs.Ease.get(-1)).to({regY:5.9,rotation:0,y:147.9},5,cjs.Ease.get(1)).wait(1).to({regY:6,rotation:-2.8,y:151.5},4,cjs.Ease.get(-1)).to({rotation:-6.2,y:155.8},5,cjs.Ease.get(1)).to({rotation:-3,y:151.9},5,cjs.Ease.get(-1)).to({regY:5.9,rotation:0,y:147.9},5,cjs.Ease.get(1)).to({x:189.9,y:152.9},4,cjs.Ease.get(-1)).to({rotation:0.2,x:189.8,y:155.7},163).to({rotation:0,y:147.9},5,cjs.Ease.get(-1)).wait(1));

	// head.png
	this.instance_10 = new lib.Symbol9();
	this.instance_10.parent = this;
	this.instance_10.setTransform(197.9,17.5,1,1,0,0,0,23.9,62.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({rotation:-1,y:20.5},4,cjs.Ease.get(-1)).to({rotation:-2.5,y:24.1},5,cjs.Ease.get(1)).to({rotation:-1.1,y:20.8},5,cjs.Ease.get(-1)).to({rotation:0,y:17.5},5,cjs.Ease.get(1)).wait(1).to({rotation:-1,y:20.5},4,cjs.Ease.get(-1)).to({rotation:-2.5,y:24.1},5,cjs.Ease.get(1)).to({rotation:-1.1,y:20.8},5,cjs.Ease.get(-1)).to({rotation:0,y:17.5},5,cjs.Ease.get(1)).to({rotation:3.5,x:209.2,y:22.8},2,cjs.Ease.get(-1)).to({rotation:8.8,x:225.8,y:30.6},3,cjs.Ease.get(1)).to({rotation:5.3,x:214.7,y:25.4},2,cjs.Ease.get(-1)).to({rotation:0,x:197.9,y:17.5},3,cjs.Ease.get(1)).wait(1).to({rotation:-1,y:20.5},4,cjs.Ease.get(-1)).to({rotation:-2.5,y:24.1},5,cjs.Ease.get(1)).to({rotation:-1.1,y:20.8},5,cjs.Ease.get(-1)).to({rotation:0,y:17.5},5,cjs.Ease.get(1)).wait(1).to({rotation:-1,y:20.5},4,cjs.Ease.get(-1)).to({rotation:-2.5,y:24.1},5,cjs.Ease.get(1)).to({rotation:-1.1,y:20.8},5,cjs.Ease.get(-1)).to({rotation:0,y:17.5},5,cjs.Ease.get(1)).to({rotation:5.5,x:215.9,y:26},4,cjs.Ease.get(-1)).to({rotation:8.8,x:225.8,y:30.6},163).to({rotation:0,x:197.9,y:17.5},5,cjs.Ease.get(-1)).wait(1));

	// hand1.png
	this.instance_11 = new lib.Symbol10();
	this.instance_11.parent = this;
	this.instance_11.setTransform(198.3,87.2,1,1,0,0,0,4.3,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({regY:13.3,rotation:-2.8,x:194.3,y:92.3},4,cjs.Ease.get(-1)).to({regX:4.4,rotation:-6.7,x:189.3,y:98.4},5,cjs.Ease.get(1)).to({regX:4.3,rotation:-3.3,x:193.8,y:92.9},5,cjs.Ease.get(-1)).to({regY:13.2,rotation:0,x:198.3,y:87.2},5,cjs.Ease.get(1)).wait(1).to({regY:13.3,rotation:-2.8,x:194.3,y:92.3},4,cjs.Ease.get(-1)).to({regX:4.4,rotation:-6.7,x:189.3,y:98.4},5,cjs.Ease.get(1)).to({regX:4.3,rotation:-3.3,x:193.8,y:92.9},5,cjs.Ease.get(-1)).to({regY:13.2,rotation:0,x:198.3,y:87.2},5,cjs.Ease.get(1)).to({regX:4.4,scaleX:1,scaleY:1,rotation:16.3,x:208.8,y:89.9},2,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:41.2,x:224.4,y:93.8},3,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:24.6,x:214.1,y:91.2},2,cjs.Ease.get(-1)).to({regX:4.3,scaleX:1,scaleY:1,rotation:0,x:198.3,y:87.2},3,cjs.Ease.get(1)).wait(1).to({regY:13.3,rotation:-2.8,x:194.3,y:92.3},4,cjs.Ease.get(-1)).to({regX:4.4,rotation:-6.7,x:189.3,y:98.4},5,cjs.Ease.get(1)).to({regX:4.3,rotation:-3.3,x:193.8,y:92.9},5,cjs.Ease.get(-1)).to({regY:13.2,rotation:0,x:198.3,y:87.2},5,cjs.Ease.get(1)).wait(1).to({regY:13.3,rotation:-2.8,x:194.3,y:92.3},4,cjs.Ease.get(-1)).to({regX:4.4,rotation:-6.7,x:189.3,y:98.4},5,cjs.Ease.get(1)).to({regX:4.3,rotation:-3.3,x:193.8,y:92.9},5,cjs.Ease.get(-1)).to({regY:13.2,rotation:0,x:198.3,y:87.2},5,cjs.Ease.get(1)).to({regY:13.3,scaleX:1,scaleY:1,rotation:26.3,x:215,y:91.5},4,cjs.Ease.get(-1)).to({regX:4.4,regY:13.2,scaleX:1,scaleY:1,rotation:41.2,x:224.4,y:93.8},163).to({regX:4.3,rotation:0,x:198.3,y:87.2},5,cjs.Ease.get(-1)).wait(1));

	// handl.png
	this.instance_12 = new lib.Symbol11();
	this.instance_12.parent = this;
	this.instance_12.setTransform(178.7,27.9,1,1,0,0,0,13.7,6.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({rotation:3.3,y:31.4},4,cjs.Ease.get(-1)).to({regX:13.8,rotation:7.7,x:178.8,y:35.7},5,cjs.Ease.get(1)).to({rotation:3.8,x:178.7,y:31.8},5,cjs.Ease.get(-1)).to({regX:13.7,rotation:0,y:27.9},5,cjs.Ease.get(1)).wait(1).to({rotation:3.3,y:31.4},4,cjs.Ease.get(-1)).to({regX:13.8,rotation:7.7,x:178.8,y:35.7},5,cjs.Ease.get(1)).to({rotation:3.8,x:178.7,y:31.8},5,cjs.Ease.get(-1)).to({regX:13.7,rotation:0,y:27.9},5,cjs.Ease.get(1)).to({rotation:-1.3,x:188.1,y:31.4},2,cjs.Ease.get(-1)).to({regX:13.8,rotation:-3.3,x:202.3,y:36.4},3,cjs.Ease.get(1)).to({rotation:-1.8,x:192.8,y:33},2,cjs.Ease.get(-1)).to({regX:13.7,rotation:0,x:178.7,y:27.9},3,cjs.Ease.get(1)).wait(1).to({rotation:3.3,y:31.4},4,cjs.Ease.get(-1)).to({regX:13.8,rotation:7.7,x:178.8,y:35.7},5,cjs.Ease.get(1)).to({rotation:3.8,x:178.7,y:31.8},5,cjs.Ease.get(-1)).to({regX:13.7,rotation:0,y:27.9},5,cjs.Ease.get(1)).wait(1).to({rotation:3.3,y:31.4},4,cjs.Ease.get(-1)).to({regX:13.8,rotation:7.7,x:178.8,y:35.7},5,cjs.Ease.get(1)).to({rotation:3.8,x:178.7,y:31.8},5,cjs.Ease.get(-1)).to({regX:13.7,rotation:0,y:27.9},5,cjs.Ease.get(1)).to({rotation:-2,x:193.8,y:33.3},4,cjs.Ease.get(-1)).to({regX:13.8,rotation:-3.3,x:202.3,y:36.4},163).to({regX:13.7,rotation:0,x:178.7,y:27.9},5,cjs.Ease.get(-1)).wait(1));

	// bodu.png
	this.instance_13 = new lib.Symbol12();
	this.instance_13.parent = this;
	this.instance_13.setTransform(170.2,150.9,1,1,0,0,0,50.2,150.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({y:153.8},4,cjs.Ease.get(-1)).to({y:157.4},5,cjs.Ease.get(1)).to({y:154.2},5,cjs.Ease.get(-1)).to({y:150.9},5,cjs.Ease.get(1)).wait(1).to({y:153.8},4,cjs.Ease.get(-1)).to({y:157.4},5,cjs.Ease.get(1)).to({y:154.2},5,cjs.Ease.get(-1)).to({y:150.9},5,cjs.Ease.get(1)).to({regY:150.8,rotation:5.3},2,cjs.Ease.get(-1)).to({regX:50.3,rotation:13.4,x:170.3,y:151},3,cjs.Ease.get(1)).to({rotation:8,y:150.9},2,cjs.Ease.get(-1)).to({regX:50.2,regY:150.9,rotation:0,x:170.2},3,cjs.Ease.get(1)).wait(1).to({y:153.8},4,cjs.Ease.get(-1)).to({y:157.4},5,cjs.Ease.get(1)).to({y:154.2},5,cjs.Ease.get(-1)).to({y:150.9},5,cjs.Ease.get(1)).wait(1).to({y:153.8},4,cjs.Ease.get(-1)).to({y:157.4},5,cjs.Ease.get(1)).to({y:154.2},5,cjs.Ease.get(-1)).to({y:150.9},5,cjs.Ease.get(1)).to({regX:50.3,rotation:8.5,x:170.4,y:151.1},4,cjs.Ease.get(-1)).to({regY:150.8,rotation:13.4,x:170.3,y:151},163).to({regX:50.2,regY:150.9,rotation:0,x:170.2,y:150.9},5,cjs.Ease.get(-1)).wait(1));

	// hend.png
	this.instance_14 = new lib.Symbol13();
	this.instance_14.parent = this;
	this.instance_14.setTransform(200.4,90.2,1,1,0,0,0,7.4,12.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({regX:7.5,regY:12.3,rotation:-2.8,x:200.5,y:90.3},4,cjs.Ease.get(-1)).to({regX:7.4,rotation:-6.2},5,cjs.Ease.get(1)).to({rotation:-3},5,cjs.Ease.get(-1)).to({regY:12.2,rotation:0,x:200.4,y:90.2},5,cjs.Ease.get(1)).wait(1).to({regX:7.5,regY:12.3,rotation:-2.8,x:200.5,y:90.3},4,cjs.Ease.get(-1)).to({regX:7.4,rotation:-6.2},5,cjs.Ease.get(1)).to({rotation:-3},5,cjs.Ease.get(-1)).to({regY:12.2,rotation:0,x:200.4,y:90.2},5,cjs.Ease.get(1)).to({regY:12.3,rotation:-5,x:195.2,y:90.3},2,cjs.Ease.get(-1)).to({regX:7.5,rotation:-12.8,x:187.5,y:90.2},3,cjs.Ease.get(1)).to({regY:12.4,rotation:-7.5,x:192.8,y:90.3},2,cjs.Ease.get(-1)).to({regX:7.4,regY:12.2,rotation:0,x:200.4,y:90.2},3,cjs.Ease.get(1)).wait(1).to({regX:7.5,regY:12.3,rotation:-2.8,x:200.5,y:90.3},4,cjs.Ease.get(-1)).to({regX:7.4,rotation:-6.2},5,cjs.Ease.get(1)).to({rotation:-3},5,cjs.Ease.get(-1)).to({regY:12.2,rotation:0,x:200.4,y:90.2},5,cjs.Ease.get(1)).wait(1).to({regX:7.5,regY:12.3,rotation:-2.8,x:200.5,y:90.3},4,cjs.Ease.get(-1)).to({regX:7.4,rotation:-6.2},5,cjs.Ease.get(1)).to({rotation:-3},5,cjs.Ease.get(-1)).to({regY:12.2,rotation:0,x:200.4,y:90.2},5,cjs.Ease.get(1)).to({regX:7.5,rotation:-8,x:192.2},4,cjs.Ease.get(-1)).to({regY:12.3,rotation:-12.8,x:187.5},163).to({regX:7.4,regY:12.2,rotation:0,x:200.4},5,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(99,-45,192,396.4);


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

	// Layer 5
	this.btn = new lib.Symbol27();
	this.btn.parent = this;
	this.btn.setTransform(152,325.6,1,1,0,0,0,73,44.5);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// Layer 4
	this.txt = new lib.Symbol19();
	this.txt.parent = this;
	this.txt.setTransform(127.1,167.4,1,1,0,0,0,76.7,37.9);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	// Layer 3
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(271.2,240.2,1.058,1.058,0,0,0,49.1,165.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.instance_1 = new lib.logored();
	this.instance_1.parent = this;
	this.instance_1.setTransform(48,24);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 1
	this.instance_2 = new lib.Symbol23();
	this.instance_2.parent = this;
	this.instance_2.setTransform(346.6,182.6,1,1,0,0,0,426.6,245.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122.8,87,1196,500.2);
// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/back.jpg?1496757372949", id:"back"},
		{src:"images/ball.png?1496757372949", id:"ball"},
		{src:"images/bodu.png?1496757372949", id:"bodu"},
		{src:"images/btngreen.png?1496757372949", id:"btngreen"},
		{src:"images/btnred.png?1496757372949", id:"btnred"},
		{src:"images/hand1.png?1496757372949", id:"hand1"},
		{src:"images/handl.png?1496757372949", id:"handl"},
		{src:"images/head.png?1496757372949", id:"head"},
		{src:"images/hend.png?1496757372949", id:"hend"},
		{src:"images/Layer10.png?1496757372949", id:"Layer10"},
		{src:"images/Layer11.png?1496757372949", id:"Layer11"},
		{src:"images/leg1.png?1496757372949", id:"leg1"},
		{src:"images/leg2.png?1496757372949", id:"leg2"},
		{src:"images/legr.png?1496757372949", id:"legr"},
		{src:"images/legr1.png?1496757372949", id:"legr1"},
		{src:"images/logored.png?1496757372949", id:"logored"},
		{src:"images/raketka.png?1496757372949", id:"raketka"},
		{src:"images/service.png?1496757372949", id:"service"},
		{src:"images/service2.png?1496757372949", id:"service2"},
		{src:"images/service3.png?1496757372949", id:"service3"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;