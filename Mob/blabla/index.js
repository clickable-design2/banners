(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.Car = function() {
	this.initialize(img.Car);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,205,85);


(lib.City1 = function() {
	this.initialize(img.City1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,248);


(lib.City2 = function() {
	this.initialize(img.City2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,214);


(lib.City3 = function() {
	this.initialize(img.City3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,222);


(lib.Logo = function() {
	this.initialize(img.Logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,91,91);


(lib.Oblako = function() {
	this.initialize(img.Oblako);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,985,147);


(lib.Shar = function() {
	this.initialize(img.Shar);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,182,270);// helper functions:

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


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0299DE").s().p("A0rFSQhqAAAAhqIAAnPQAAhqBqAAMApXAAAQBqAAAABqIAAHPQAABqhqAAg");
	this.shape.setTransform(143,33.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(0,0,285.9,67.6), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Logo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(0,0,91,91), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Car();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(0,0,205,85), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgfAfQgNgMAAgTQAAgSANgNQANgNASAAQATAAAMANQANANABASQgBATgNAMQgMANgTABQgSgBgNgNg");
	this.shape.setTransform(4.5,4.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(0,0,8.9,8.9), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Shar();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,0.864);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(0,0,182,233.2), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Oblako();
	this.instance.parent = this;
	this.instance.setTransform(-1176,0);

	this.instance_1 = new lib.Oblako();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(-1176,0,2161,147), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.City2();
	this.instance.parent = this;
	this.instance.setTransform(1707,48);

	this.instance_1 = new lib.City3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(692,40);

	this.instance_2 = new lib.City2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-1337,48);

	this.instance_3 = new lib.City1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-322,14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(-1337,14,4068,248), null);


(lib.Анимация16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABGDdIAAihIglAAIhWChIiIAAIB6jBQgigTgSgeQgSgeAAgnQAAiCC0AAICTAAIAAG5gAAAh2QgQALAAAXQAAAbAQAOQAOAOAiAAIAWAAIAAhlIgZAAQgdAAgQAMg");
	this.shape.setTransform(168.3,1.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABsDdIAAi5QAAgpAFhUIgBAAIiyE2IiTAAIAAm5IBrAAIAAC+IgGB4IADAAICwk2ICTAAIAAG5g");
	this.shape_1.setTransform(123.8,1.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ACODdIAAjCIABggIADhbIgCAAIhaE9IhwAAIhbk+IgDAAQAHBSAAAsIAADAIhqAAIAAm5ICfAAIBcE5IACAAIBak5ICgAAIAAG5g");
	this.shape_2.setTransform(67.7,1.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AifCpQg3g6AAhvQAAhuA3g6QA3g7BpAAQBpAAA3A6QA2A6AABvQAABwg3A6Qg2A6hqAAQhnAAg4g7gAhYAAQAACABYAAQAtAAAWgfQAWgfAAhCQAAhBgWggQgWgggsAAQhZAAAACBg");
	this.shape_3.setTransform(12.9,1.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABFDdIAAi0IiJAAIAAC0Ih4AAIAAm5IB4AAIAACkICJAAIAAikIB5AAIAAG5g");
	this.shape_4.setTransform(-35.4,1.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AifCpQg3g6AAhvQAAhuA3g6QA3g7BpAAQBpAAA3A6QA2A6AABvQAABwg3A6Qg2A6hqAAQhnAAg4g7gAhYAAQAACABYAAQAtAAAWgfQAWgfAAhCQAAhBgWggQgWgggsAAQhZAAAACBg");
	this.shape_5.setTransform(-83.9,1.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AA6DdIiCjfIAADfIh4AAIAAm5IB4AAIAADWIB9jWICEAAIiJDTICRDmg");
	this.shape_6.setTransform(-126.4,1.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AivDKIAAhkQBIAcBEAAQAnAAAXgUQAXgUACgnIivAAIAAhfICvAAQgCgogYgWQgXgWgnAAQgWAAgeAIQgfAHgZAMIgihdQApgSAjgHQAigHAkAAQBlAAA3A7QA3A7AABsQAABug3A7Qg3A6hoAAQhPAAg9gZg");
	this.shape_7.setTransform(-171.6,1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-194.1,-44.2,388.3,88.4);


(lib.Анимация15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABGDdIAAihIglAAIhWChIiIAAIB6jBQgigTgSgeQgSgeAAgnQAAiCC0AAICTAAIAAG5gAAAh2QgQALAAAXQAAAbAQAOQAOAOAiAAIAWAAIAAhlIgZAAQgdAAgQAMg");
	this.shape.setTransform(168.3,1.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABsDdIAAi5QAAgpAFhUIgBAAIiyE2IiTAAIAAm5IBrAAIAAC+IgGB4IADAAICwk2ICTAAIAAG5g");
	this.shape_1.setTransform(123.8,1.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ACODdIAAjCIABggIADhbIgCAAIhaE9IhwAAIhbk+IgDAAQAHBSAAAsIAADAIhqAAIAAm5ICfAAIBcE5IACAAIBak5ICgAAIAAG5g");
	this.shape_2.setTransform(67.7,1.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AifCpQg3g6AAhvQAAhuA3g6QA3g7BpAAQBpAAA3A6QA2A6AABvQAABwg3A6Qg2A6hqAAQhnAAg4g7gAhYAAQAACABYAAQAtAAAWgfQAWgfAAhCQAAhBgWggQgWgggsAAQhZAAAACBg");
	this.shape_3.setTransform(12.9,1.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABFDdIAAi0IiJAAIAAC0Ih4AAIAAm5IB4AAIAACkICJAAIAAikIB5AAIAAG5g");
	this.shape_4.setTransform(-35.4,1.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AifCpQg3g6AAhvQAAhuA3g6QA3g7BpAAQBpAAA3A6QA2A6AABvQAABwg3A6Qg2A6hqAAQhnAAg4g7gAhYAAQAACABYAAQAtAAAWgfQAWgfAAhCQAAhBgWggQgWgggsAAQhZAAAACBg");
	this.shape_5.setTransform(-83.9,1.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AA6DdIiCjfIAADfIh4AAIAAm5IB4AAIAADWIB9jWICEAAIiJDTICRDmg");
	this.shape_6.setTransform(-126.4,1.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AivDKIAAhkQBIAcBEAAQAnAAAXgUQAXgUACgnIivAAIAAhfICvAAQgCgogYgWQgXgWgnAAQgWAAgeAIQgfAHgZAMIgihdQApgSAjgHQAigHAkAAQBlAAA3A7QA3A7AABsQAABug3A7Qg3A6hoAAQhPAAg9gZg");
	this.shape_7.setTransform(-171.6,1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-194.1,-44.2,388.3,88.4);


(lib.Анимация14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABGDdIAAihIglAAIhWChIiIAAIB6jBQgigTgSgeQgSgeAAgnQAAiCC0AAICTAAIAAG5gAAAh2QgQALAAAXQAAAbAQAOQAOAOAiAAIAWAAIAAhlIgZAAQgdAAgQAMg");
	this.shape.setTransform(168.3,1.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABsDdIAAi5QAAgpAFhUIgBAAIiyE2IiTAAIAAm5IBrAAIAAC+IgGB4IADAAICwk2ICTAAIAAG5g");
	this.shape_1.setTransform(123.8,1.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ACODdIAAjCIABggIADhbIgCAAIhaE9IhwAAIhbk+IgDAAQAHBSAAAsIAADAIhqAAIAAm5ICfAAIBcE5IACAAIBak5ICgAAIAAG5g");
	this.shape_2.setTransform(67.7,1.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AifCpQg3g6AAhvQAAhuA3g6QA3g7BpAAQBpAAA3A6QA2A6AABvQAABwg3A6Qg2A6hqAAQhnAAg4g7gAhYAAQAACABYAAQAtAAAWgfQAWgfAAhCQAAhBgWggQgWgggsAAQhZAAAACBg");
	this.shape_3.setTransform(12.9,1.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABFDdIAAi0IiJAAIAAC0Ih4AAIAAm5IB4AAIAACkICJAAIAAikIB5AAIAAG5g");
	this.shape_4.setTransform(-35.4,1.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AifCpQg3g6AAhvQAAhuA3g6QA3g7BpAAQBpAAA3A6QA2A6AABvQAABwg3A6Qg2A6hqAAQhnAAg4g7gAhYAAQAACABYAAQAtAAAWgfQAWgfAAhCQAAhBgWggQgWgggsAAQhZAAAACBg");
	this.shape_5.setTransform(-83.9,1.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AA6DdIiCjfIAADfIh4AAIAAm5IB4AAIAADWIB9jWICEAAIiJDTICRDmg");
	this.shape_6.setTransform(-126.4,1.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AivDKIAAhkQBIAcBEAAQAnAAAXgUQAXgUACgnIivAAIAAhfICvAAQgCgogYgWQgXgWgnAAQgWAAgeAIQgfAHgZAMIgihdQApgSAjgHQAigHAkAAQBlAAA3A7QA3A7AABsQAABug3A7Qg3A6hoAAQhPAAg9gZg");
	this.shape_7.setTransform(-171.6,1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-194.1,-44.2,388.3,88.4);


(lib.Анимация13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AguDSQgRgPAAgcQAAgcAQgOQAQgQAfAAQAfAAAQAQQAPAOAAAcQAAAcgQAPQgRAPgdAAQgdAAgRgPgAgxA+IgPkeICBAAIgPEeg");
	this.shape.setTransform(158.1,2.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiCDdIAAm5IEFAAIAABgIiOAAIAABFICEAAIAABfIiEAAIAABUICOAAIAABhg");
	this.shape_1.setTransform(133,1.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiSDdIAAm5IEmAAIAABgIivAAIAAFZg");
	this.shape_2.setTransform(98.8,1.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AifCpQg3g6AAhvQAAhuA3g6QA3g7BpAAQBpAAA3A6QA2A6AABvQAABwg3A6Qg2A6hqAAQhnAAg4g7gAhYAAQAACABYAAQAtAAAWgfQAWgfAAhCQAAhBgWggQgWgggsAAQhZAAAACBg");
	this.shape_3.setTransform(54.5,1.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AigDdIAAm5ICaAAQBSAAAqAkQArAlAABDQAABLgsAnQgsAohPAAIgiAAIAACTgAgogWIAWAAQAaAAAPgPQARgPgBgbQABgtgxAAIgfAAg");
	this.shape_4.setTransform(11.6,1.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AifCpQg3g6AAhvQAAhuA3g6QA3g7BpAAQBpAAA3A6QA2A6AABvQAABwg3A6Qg2A6hqAAQhnAAg4g7gAhYAAQAACABYAAQAtAAAWgfQAWgfAAhCQAAhBgWggQgWgggsAAQhZAAAACBg");
	this.shape_5.setTransform(-34,1.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ACBEiIAAiKIkBAAIAACKIh1AAIAAjsIAlAAQAnhCAahYQAahZAHhkIEnAAIAAFXIA9AAIAADsgAhSA2ICSAAIAAj1IhNAAQgNCCg4Bzg");
	this.shape_6.setTransform(-84.3,8.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AipDdIAAm5ICaAAQBZAAAsAbQAsAaAAA5QAAAlgTAaQgTAbggAHIAAADQAqAKASAaQASAZAAApQAAA8gtAjQgtAihOAAgAgyCBIAqAAQA3AAAAgvQAAgWgPgMQgPgMgbAAIgoAAgAgygzIAkAAQAZAAAOgKQAOgLAAgVQAAglg3AAIgiAAg");
	this.shape_7.setTransform(-145.2,1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-169.1,-44.2,338.2,88.4);


(lib.Анимация12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AguDSQgRgPAAgcQAAgcAQgOQAQgQAfAAQAfAAAQAQQAPAOAAAcQAAAcgQAPQgRAPgdAAQgdAAgRgPgAgxA+IgPkeICBAAIgPEeg");
	this.shape.setTransform(158.1,2.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiCDdIAAm5IEFAAIAABgIiOAAIAABFICEAAIAABfIiEAAIAABUICOAAIAABhg");
	this.shape_1.setTransform(133,1.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiSDdIAAm5IEmAAIAABgIivAAIAAFZg");
	this.shape_2.setTransform(98.8,1.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AifCpQg3g6AAhvQAAhuA3g6QA3g7BpAAQBpAAA3A6QA2A6AABvQAABwg3A6Qg2A6hqAAQhnAAg4g7gAhYAAQAACABYAAQAtAAAWgfQAWgfAAhCQAAhBgWggQgWgggsAAQhZAAAACBg");
	this.shape_3.setTransform(54.5,1.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AigDdIAAm5ICaAAQBSAAAqAkQArAlAABDQAABLgsAnQgsAohPAAIgiAAIAACTgAgogWIAWAAQAaAAAPgPQARgPgBgbQABgtgxAAIgfAAg");
	this.shape_4.setTransform(11.6,1.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AifCpQg3g6AAhvQAAhuA3g6QA3g7BpAAQBpAAA3A6QA2A6AABvQAABwg3A6Qg2A6hqAAQhnAAg4g7gAhYAAQAACABYAAQAtAAAWgfQAWgfAAhCQAAhBgWggQgWgggsAAQhZAAAACBg");
	this.shape_5.setTransform(-34,1.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ACBEiIAAiKIkBAAIAACKIh1AAIAAjsIAlAAQAnhCAahYQAahZAHhkIEnAAIAAFXIA9AAIAADsgAhSA2ICSAAIAAj1IhNAAQgNCCg4Bzg");
	this.shape_6.setTransform(-84.3,8.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AipDdIAAm5ICaAAQBZAAAsAbQAsAaAAA5QAAAlgTAaQgTAbggAHIAAADQAqAKASAaQASAZAAApQAAA8gtAjQgtAihOAAgAgyCBIAqAAQA3AAAAgvQAAgWgPgMQgPgMgbAAIgoAAgAgygzIAkAAQAZAAAOgKQAOgLAAgVQAAglg3AAIgiAAg");
	this.shape_7.setTransform(-145.2,1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-169.1,-44.2,338.2,88.4);


(lib.Анимация11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AguDSQgRgPAAgcQAAgcAQgOQAQgQAfAAQAfAAAQAQQAPAOAAAcQAAAcgQAPQgRAPgdAAQgdAAgRgPgAgxA+IgPkeICBAAIgPEeg");
	this.shape.setTransform(158.1,2.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiCDdIAAm5IEFAAIAABgIiOAAIAABFICEAAIAABfIiEAAIAABUICOAAIAABhg");
	this.shape_1.setTransform(133,1.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiSDdIAAm5IEmAAIAABgIivAAIAAFZg");
	this.shape_2.setTransform(98.8,1.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AifCpQg3g6AAhvQAAhuA3g6QA3g7BpAAQBpAAA3A6QA2A6AABvQAABwg3A6Qg2A6hqAAQhnAAg4g7gAhYAAQAACABYAAQAtAAAWgfQAWgfAAhCQAAhBgWggQgWgggsAAQhZAAAACBg");
	this.shape_3.setTransform(54.5,1.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AigDdIAAm5ICaAAQBSAAAqAkQArAlAABDQAABLgsAnQgsAohPAAIgiAAIAACTgAgogWIAWAAQAaAAAPgPQARgPgBgbQABgtgxAAIgfAAg");
	this.shape_4.setTransform(11.6,1.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AifCpQg3g6AAhvQAAhuA3g6QA3g7BpAAQBpAAA3A6QA2A6AABvQAABwg3A6Qg2A6hqAAQhnAAg4g7gAhYAAQAACABYAAQAtAAAWgfQAWgfAAhCQAAhBgWggQgWgggsAAQhZAAAACBg");
	this.shape_5.setTransform(-34,1.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ACBEiIAAiKIkBAAIAACKIh1AAIAAjsIAlAAQAnhCAahYQAahZAHhkIEnAAIAAFXIA9AAIAADsgAhSA2ICSAAIAAj1IhNAAQgNCCg4Bzg");
	this.shape_6.setTransform(-84.3,8.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AipDdIAAm5ICaAAQBZAAAsAbQAsAaAAA5QAAAlgTAaQgTAbggAHIAAADQAqAKASAaQASAZAAApQAAA8gtAjQgtAihOAAgAgyCBIAqAAQA3AAAAgvQAAgWgPgMQgPgMgbAAIgoAAgAgygzIAkAAQAZAAAOgKQAOgLAAgVQAAglg3AAIgiAAg");
	this.shape_7.setTransform(-145.2,1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-169.1,-44.2,338.2,88.4);


(lib.Анимация10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhtC6IAAlzIDbAAIAABRIh3AAIAAA6IBuAAIAABQIhuAAIAABGIB3AAIAABSg");
	this.shape.setTransform(145.9,1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABjC6IAAlzIBmAAIAAFzgAjIC6IAAlzIBmAAIAACEIAFAAQBNAAAoAeQApAcABA5QAAA8gpAgQgoAghKAAgAhiBsIAEAAQA7ABAAgtQAAgqg8ABIgDAAg");
	this.shape_1.setTransform(106.8,1.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AA6C6IAAiYIh0AAIAACYIhlAAIAAlzIBlAAIAACKIB0AAIAAiKIBlAAIAAFzg");
	this.shape_2.setTransform(62.8,1.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ACeC6Ihti7IAAC7IhgAAIAAi7IhuC7IhvAAIB2jCIhtixIBtAAIBnC0IAAi0IBgAAIAAC0IBni0IBtAAIhuCxIB2DCg");
	this.shape_3.setTransform(16.1,1.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhuC6IAAlzIDdAAIAABRIh4AAIAAA6IBvAAIAABQIhvAAIAABGIB4AAIAABSg");
	this.shape_4.setTransform(-24.2,1.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABsD0IAAh0IjXAAIAAB0IhjAAIAAjGIAfAAQAig4AWhKQAVhLAHhUID2AAIAAEhIA0AAIAADGgAhFAuIB7AAIAAjPIhBAAQgKBtgwBig");
	this.shape_5.setTransform(-60.8,7.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABPC7IgShGIh4AAIgTBGIhuAAIB5l1ICFAAIB7F1gAAoAjIgQg9IgNg0IgLguIgIAqIgeB1IBOAAg");
	this.shape_6.setTransform(-100.5,1.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AA6C6IAAiYIh0AAIAACYIhkAAIAAlzIBkAAIAACKIB0AAIAAiKIBlAAIAAFzg");
	this.shape_7.setTransform(-139.4,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-161.1,-37.1,322.3,74.4);


(lib.Анимация9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhtC6IAAlzIDbAAIAABRIh3AAIAAA6IBuAAIAABQIhuAAIAABGIB3AAIAABSg");
	this.shape.setTransform(145.9,1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABjC6IAAlzIBmAAIAAFzgAjIC6IAAlzIBmAAIAACEIAFAAQBNAAAoAeQApAcABA5QAAA8gpAgQgoAghKAAgAhiBsIAEAAQA7ABAAgtQAAgqg8ABIgDAAg");
	this.shape_1.setTransform(106.8,1.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AA6C6IAAiYIh0AAIAACYIhlAAIAAlzIBlAAIAACKIB0AAIAAiKIBlAAIAAFzg");
	this.shape_2.setTransform(62.8,1.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ACeC6Ihti7IAAC7IhgAAIAAi7IhuC7IhvAAIB2jCIhtixIBtAAIBnC0IAAi0IBgAAIAAC0IBni0IBtAAIhuCxIB2DCg");
	this.shape_3.setTransform(16.1,1.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhuC6IAAlzIDdAAIAABRIh4AAIAAA6IBvAAIAABQIhvAAIAABGIB4AAIAABSg");
	this.shape_4.setTransform(-24.2,1.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABsD0IAAh0IjXAAIAAB0IhjAAIAAjGIAfAAQAig4AWhKQAVhLAHhUID2AAIAAEhIA0AAIAADGgAhFAuIB7AAIAAjPIhBAAQgKBtgwBig");
	this.shape_5.setTransform(-60.8,7.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABPC7IgShGIh4AAIgTBGIhuAAIB5l1ICFAAIB7F1gAAoAjIgQg9IgNg0IgLguIgIAqIgeB1IBOAAg");
	this.shape_6.setTransform(-100.5,1.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AA6C6IAAiYIh0AAIAACYIhkAAIAAlzIBkAAIAACKIB0AAIAAiKIBlAAIAAFzg");
	this.shape_7.setTransform(-139.4,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-161.1,-37.1,322.3,74.4);


(lib.Анимация8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABbC6IAAibQAAgjAFhGIgCAAIiVEEIh8AAIAAlzIBaAAIAACgIgFBlIACAAICUkFIB8AAIAAFzg");
	this.shape.setTransform(152.3,1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAxC6Ihui7IAAC7IhlAAIAAlzIBlAAIAAC0IBqi0IBuAAIhyCxIB6DCg");
	this.shape_1.setTransform(114.2,1.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABbC6IAAibQAAgjAFhGIgCAAIiVEEIh8AAIAAlzIBaAAIAACgIgFBlIACAAICUkFIB8AAIAAFzg");
	this.shape_2.setTransform(71.9,1.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AA/C6IAAiJQg/AVgzAAQg1ABgegaQgdgbAAguIAAidIBlAAIAAB8QAAAbALAMQALALAYAAQAfABAwgSIAAidIBlAAIAAFzg");
	this.shape_3.setTransform(29.5,1.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgxC6IAAkhIhbAAIAAhSIEZAAIAABSIhbAAIAAEhg");
	this.shape_4.setTransform(-4.9,1.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AigC1IAAhQQAYAJAlAAQAPAAALgGQALgIAHgSIh5kKIBsAAIAuByIAGAPIAHAUIAHATIAEARIADAAQAJgiARgvIAmhoIBsAAIhxEEQgVAxgUAXQgUAYgcAKQgcAKgqAAQgjAAgegHg");
	this.shape_5.setTransform(-37.5,1.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AA0C6IAAkhIhnAAIAAEhIhlAAIAAlzIEwAAIAAFzg");
	this.shape_6.setTransform(-75.1,1.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AiFCPQgvgxAAheQAAhcAvgxQAugyBYAAQBYABAuAwQAuAxAABdQAABeguAxQguAwhZAAQhWAAgvgwgAhKAAQAABsBKAAQAmAAATgaQASgbAAg3QAAg3gSgaQgUgbgkAAQhLAAAABsg");
	this.shape_7.setTransform(-115.1,1.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AA0C6IAAkhIhnAAIAAEhIhlAAIAAlzIEwAAIAAFzg");
	this.shape_8.setTransform(-155.1,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-176.1,-37.1,352.3,74.4);


(lib.Анимация7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABbC6IAAibQAAgjAFhGIgCAAIiVEEIh8AAIAAlzIBaAAIAACgIgFBlIACAAICUkFIB8AAIAAFzg");
	this.shape.setTransform(152.3,1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAxC6Ihui7IAAC7IhlAAIAAlzIBlAAIAAC0IBqi0IBuAAIhyCxIB6DCg");
	this.shape_1.setTransform(114.3,1.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABbC6IAAibQAAgjAFhGIgCAAIiVEEIh8AAIAAlzIBaAAIAACgIgFBlIACAAICUkFIB8AAIAAFzg");
	this.shape_2.setTransform(72,1.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AA/C6IAAiJQg/AVgzAAQg1ABgegaQgdgbAAguIAAidIBlAAIAAB8QAAAbALAMQALALAYAAQAfABAwgSIAAidIBlAAIAAFzg");
	this.shape_3.setTransform(29.6,1.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgxC6IAAkhIhbAAIAAhSIEZAAIAABSIhaAAIAAEhg");
	this.shape_4.setTransform(-4.9,1.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AigC1IAAhQQAYAJAlAAQAPAAALgGQALgIAHgSIh5kKIBsAAIAuByIAGAPIAHAUIAHATIAEARIADAAQAJgiARgvIAmhoIBsAAIhxEEQgVAxgUAXQgUAYgcAKQgcAKgqAAQgjAAgegHg");
	this.shape_5.setTransform(-37.4,1.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAzC6IAAkhIhlAAIAAEhIhlAAIAAlzIEwAAIAAFzg");
	this.shape_6.setTransform(-75,1.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AiFCPQgvgxAAheQAAhcAugxQAvgyBXAAQBZABAuAwQAuAxAABdQAABeguAxQgvAwhYAAQhXAAgugwgAhKAAQAABsBKAAQAmAAASgaQATgbAAg3QAAg3gTgaQgSgbgmAAQhKAAAABsg");
	this.shape_7.setTransform(-115,1.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAzC6IAAkhIhmAAIAAEhIhkAAIAAlzIEwAAIAAFzg");
	this.shape_8.setTransform(-155,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-176.1,-37.1,352.3,74.4);


(lib.Анимация6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhtC6IAAlzIDbAAIAABRIh3AAIAAA6IBuAAIAABQIhuAAIAABGIB3AAIAABSg");
	this.shape.setTransform(145.9,1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABjC6IAAlzIBmAAIAAFzgAjIC6IAAlzIBmAAIAACEIAFAAQBNAAAoAeQApAcABA5QAAA8gpAgQgoAghKAAgAhiBsIAEAAQA7ABAAgtQAAgqg8ABIgDAAg");
	this.shape_1.setTransform(106.8,1.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AA6C6IAAiYIh0AAIAACYIhlAAIAAlzIBlAAIAACKIB0AAIAAiKIBlAAIAAFzg");
	this.shape_2.setTransform(62.8,1.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ACeC6Ihti7IAAC7IhgAAIAAi7IhuC7IhvAAIB2jCIhtixIBtAAIBnC0IAAi0IBgAAIAAC0IBni0IBtAAIhuCxIB2DCg");
	this.shape_3.setTransform(16.1,1.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhuC6IAAlzIDdAAIAABRIh4AAIAAA6IBvAAIAABQIhvAAIAABGIB4AAIAABSg");
	this.shape_4.setTransform(-24.2,1.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABsD0IAAh0IjXAAIAAB0IhjAAIAAjGIAfAAQAig4AWhKQAVhLAHhUID2AAIAAEhIA0AAIAADGgAhFAuIB7AAIAAjPIhBAAQgKBtgwBig");
	this.shape_5.setTransform(-60.8,7.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABPC7IgShGIh4AAIgTBGIhuAAIB5l1ICFAAIB7F1gAAoAjIgQg9IgNg0IgLguIgIAqIgeB1IBOAAg");
	this.shape_6.setTransform(-100.5,1.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AA6C6IAAiYIh0AAIAACYIhkAAIAAlzIBkAAIAACKIB0AAIAAiKIBlAAIAAFzg");
	this.shape_7.setTransform(-139.4,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-161.1,-37.1,322.3,74.4);


(lib.Анимация5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhuC6IAAlzIDdAAIAABRIh4AAIAAA6IBvAAIAABQIhvAAIAABGIB4AAIAABSg");
	this.shape.setTransform(145.8,1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABjC6IAAlzIBlAAIAAFzgAjHC6IAAlzIBkAAIAACEIAGAAQBOAAAoAeQAoAcAAA5QAAA8goAgQgoAghKAAgAhjBsIAFAAQA7ABAAgtQAAgqg8ABIgEAAg");
	this.shape_1.setTransform(106.7,1.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AA7C6IAAiYIh0AAIAACYIhmAAIAAlzIBmAAIAACKIB0AAIAAiKIBlAAIAAFzg");
	this.shape_2.setTransform(62.7,1.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ACeC6Ihti7IAAC7IhgAAIAAi7IhuC7IhvAAIB2jCIhtixIBtAAIBnC0IAAi0IBgAAIAAC0IBni0IBtAAIhuCxIB2DCg");
	this.shape_3.setTransform(16,1.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhtC6IAAlzIDbAAIAABRIh3AAIAAA6IBuAAIAABQIhuAAIAABGIB3AAIAABSg");
	this.shape_4.setTransform(-24.2,1.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABsD0IAAh0IjYAAIAAB0IhiAAIAAjGIAgAAQAgg4AWhKQAWhLAGhUID4AAIAAEhIAyAAIAADGgAhEAuIB6AAIAAjPIhBAAQgLBtguBig");
	this.shape_5.setTransform(-60.8,7.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABPC7IgShGIh4AAIgTBGIhuAAIB5l1ICFAAIB7F1gAAoAjIgQg9IgNg0IgLguIgIAqIgeB1IBOAAg");
	this.shape_6.setTransform(-100.6,1.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AA7C6IAAiYIh0AAIAACYIhmAAIAAlzIBmAAIAACKIB0AAIAAiKIBlAAIAAFzg");
	this.shape_7.setTransform(-139.4,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-161.1,-37.1,322.3,74.4);


(lib.Анимация4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABbC6IAAibQAAgjAFhGIgCAAIiVEEIh8AAIAAlzIBaAAIAACgIgFBlIACAAICUkFIB8AAIAAFzg");
	this.shape.setTransform(152.3,1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAxC6Ihui7IAAC7IhlAAIAAlzIBlAAIAAC0IBqi0IBuAAIhyCxIB6DCg");
	this.shape_1.setTransform(114.3,1.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABbC6IAAibQAAgjAFhGIgCAAIiVEEIh8AAIAAlzIBaAAIAACgIgFBlIACAAICUkFIB8AAIAAFzg");
	this.shape_2.setTransform(72,1.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AA/C6IAAiJQg/AVgzAAQg1ABgegaQgdgbAAguIAAidIBlAAIAAB8QAAAbALAMQALALAYAAQAfABAwgSIAAidIBlAAIAAFzg");
	this.shape_3.setTransform(29.6,1.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgxC6IAAkhIhbAAIAAhSIEZAAIAABSIhaAAIAAEhg");
	this.shape_4.setTransform(-4.9,1.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AigC1IAAhQQAYAJAlAAQAPAAALgGQALgIAHgSIh5kKIBsAAIAuByIAGAPIAHAUIAHATIAEARIADAAQAJgiARgvIAmhoIBsAAIhxEEQgVAxgUAXQgUAYgcAKQgcAKgqAAQgjAAgegHg");
	this.shape_5.setTransform(-37.4,1.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAzC6IAAkhIhlAAIAAEhIhlAAIAAlzIEwAAIAAFzg");
	this.shape_6.setTransform(-75,1.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AiFCPQgvgxAAheQAAhcAugxQAvgyBXAAQBZABAuAwQAuAxAABdQAABeguAxQgvAwhYAAQhXAAgugwgAhKAAQAABsBKAAQAmAAASgaQATgbAAg3QAAg3gTgaQgSgbgmAAQhKAAAABsg");
	this.shape_7.setTransform(-115,1.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAzC6IAAkhIhmAAIAAEhIhkAAIAAlzIEwAAIAAFzg");
	this.shape_8.setTransform(-155,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-176.1,-37.1,352.3,74.4);


(lib.Анимация3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABbC6IAAibQAAgjAFhGIgCAAIiVEEIh8AAIAAlzIBaAAIAACgIgFBlIACAAICUkFIB8AAIAAFzg");
	this.shape.setTransform(152.3,1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAxC6Ihui7IAAC7IhlAAIAAlzIBlAAIAAC0IBqi0IBuAAIhyCxIB6DCg");
	this.shape_1.setTransform(114.3,1.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABbC6IAAibQAAgjAFhGIgCAAIiVEEIh8AAIAAlzIBaAAIAACgIgFBlIACAAICUkFIB8AAIAAFzg");
	this.shape_2.setTransform(72,1.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AA/C6IAAiJQg/AVgzAAQg1ABgegaQgdgbAAguIAAidIBlAAIAAB8QAAAbALAMQALALAYAAQAfABAwgSIAAidIBlAAIAAFzg");
	this.shape_3.setTransform(29.6,1.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgxC6IAAkhIhbAAIAAhSIEZAAIAABSIhaAAIAAEhg");
	this.shape_4.setTransform(-4.9,1.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AigC1IAAhQQAYAJAlAAQAPAAALgGQALgIAHgSIh5kKIBsAAIAuByIAGAPIAHAUIAHATIAEARIADAAQAJgiARgvIAmhoIBsAAIhxEEQgVAxgUAXQgUAYgcAKQgcAKgqAAQgjAAgegHg");
	this.shape_5.setTransform(-37.4,1.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAzC6IAAkhIhlAAIAAEhIhlAAIAAlzIEwAAIAAFzg");
	this.shape_6.setTransform(-75,1.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AiFCPQgvgxAAheQAAhcAugxQAvgyBXAAQBZABAuAwQAuAxAABdQAABeguAxQgvAwhYAAQhXAAgugwgAhKAAQAABsBKAAQAmAAASgaQATgbAAg3QAAg3gTgaQgSgbgmAAQhKAAAABsg");
	this.shape_7.setTransform(-115,1.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAzC6IAAkhIhmAAIAAEhIhkAAIAAlzIEwAAIAAFzg");
	this.shape_8.setTransform(-155,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-176.1,-37.1,352.3,74.4);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgnkAMDQhqAAAAhpIAA0QQAAhqBqABMBPKAAAQBpgBAABqIAAUQQAABphpAAg");
	mask.setTransform(238.6,77.2);

	// Слой 4
	this.instance = new lib.Анимация11("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(676.6,99.7,0.883,0.883);
	this.instance._off = true;

	this.instance_1 = new lib.Анимация12("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(315.7,99.7,0.883,0.883);
	this.instance_1._off = true;

	this.instance_2 = new lib.Анимация13("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(165.1,99.7,0.883,0.883);
	this.instance_2._off = true;

	this.text = new cjs.Text("В ДОРОГЕ!", "bold 62px 'Open Sans Extrabold'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 86;
	this.text.parent = this;
	this.text.setTransform(-192.6,62.4,0.883,0.883);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.text];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},65).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_2}]},55).to({state:[{t:this.text}]},5).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(65).to({_off:false},0).to({_off:true,x:315.7},4).wait(61));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(65).to({_off:false},4).to({_off:true,x:165.1},55).wait(6));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(69).to({_off:false},55).to({_off:true,x:-192.6,y:62.4,text:"В ДОРОГЕ!",font:"bold 62px 'Open Sans Extrabold'",color:"#FFFFFF",textAlign:NaN,lineHeight:86.4,lineWidth:334},5).wait(1));

	// Слой 3
	this.instance_3 = new lib.Анимация14("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-213,48.6,0.883,0.883);
	this.instance_3._off = true;

	this.instance_4 = new lib.Анимация15("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(187.5,48.6,0.883,0.883);
	this.instance_4._off = true;

	this.instance_5 = new lib.Анимация16("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(297,48.6,0.883,0.883);
	this.instance_5._off = true;

	this.text_1 = new cjs.Text("ЭКОНОМИЯ", "bold 62px 'Open Sans Extrabold'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 86;
	this.text_1.parent = this;
	this.text_1.setTransform(695.8,11.3,0.883,0.883);

	var maskedShapeInstanceList = [this.instance_3,this.instance_4,this.instance_5,this.text_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},65).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_5}]},55).to({state:[{t:this.text_1}]},5).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(65).to({_off:false},0).to({_off:true,x:187.5},4).wait(61));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(65).to({_off:false},4).to({_off:true,x:297},55).wait(6));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(69).to({_off:false},55).to({_off:true,x:695.8,y:11.3,text:"ЭКОНОМИЯ",font:"bold 62px 'Open Sans Extrabold'",color:"#FFFFFF",textAlign:NaN,lineHeight:86.4,lineWidth:384},5).wait(1));

	// Слой 2
	this.instance_6 = new lib.Анимация3("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(695,103.7);

	this.instance_7 = new lib.Анимация4("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(276.5,103.7);
	this.instance_7._off = true;

	this.instance_8 = new lib.Анимация7("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(168,103.7);
	this.instance_8._off = true;

	this.instance_9 = new lib.Анимация8("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(-250.4,103.7);

	var maskedShapeInstanceList = [this.instance_6,this.instance_7,this.instance_8,this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_7}]},4).to({state:[{t:this.instance_8}]},55).to({state:[{t:this.instance_9}]},5).to({state:[]},1).wait(65));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true,x:276.5},4).wait(126));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:false},4).to({_off:true,x:168},55).wait(71));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(4).to({_off:false},55).to({_off:true,x:-250.4},5).wait(66));

	// Слой 1
	this.instance_10 = new lib.Анимация5("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(-204.3,46.7);

	this.instance_11 = new lib.Анимация6("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(183.1,46.7);
	this.instance_11._off = true;

	this.instance_12 = new lib.Анимация9("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(291.6,46.7);
	this.instance_12._off = true;

	this.instance_13 = new lib.Анимация10("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(710.1,46.7);

	var maskedShapeInstanceList = [this.instance_10,this.instance_11,this.instance_12,this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10}]}).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_12}]},55).to({state:[{t:this.instance_13}]},5).to({state:[]},1).wait(65));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({_off:true,x:183.1},4).wait(126));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({_off:false},4).to({_off:true,x:291.6},55).wait(71));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(4).to({_off:false},55).to({_off:true,x:710.1},5).wait(66));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag/BsIAAjXIB/AAIAAAvIhFAAIAAAiIBAAAIAAAuIhAAAIAAAoIBFAAIAAAwg");
	this.shape.setTransform(233.1,33.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag/BsIAAjXIB/AAIAAAvIhFAAIAAAiIBAAAIAAAuIhAAAIAAAoIBFAAIAAAwg");
	this.shape_1.setTransform(216.5,33.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAiBsIAAhYIhDAAIAABYIg6AAIAAjXIA6AAIAABQIBDAAIAAhQIA6AAIAADXg");
	this.shape_2.setTransform(196.2,33.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhPBsIAAjXICNAAIAAAvIhSAAIAAAhIAIAAQAtAAAXAQQAYAQAAAhQAAAigXASQgYASgrAAgAgUA/IAIAAQARAAAIgGQAIgGAAgMQAAgMgJgGQgIgFgRAAIgHAAg");
	this.shape_3.setTransform(175.3,33.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhNBTQgbgdAAg2QAAg1AbgdQAbgcAyAAQA0AAAaAcQAbAcAAA2QAAA2gbAdQgaAcg0AAQgyAAgbgcgAgqAAQAAA/AqAAQAWAAALgQQAKgPAAggQABgfgMgQQgKgPgWAAQgqAAAAA+g");
	this.shape_4.setTransform(152.9,33.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhNBsIAAjXIBKAAQAoAAAVASQAUASAAAgQAAAlgVASQgVAVgnAAIgQAAIAABHgAgTgKIALAAQAMAAAIgHQAHgIAAgNQAAgWgXAAIgPAAg");
	this.shape_5.setTransform(131.9,33.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AA/COIAAhEIh9AAIAABEIg5AAIAAhzIASAAQATggANgrQANgrADgyICPAAIAACoIAeAAIAABzgAgnAbIBHAAIAAh4IgmAAQgGBAgbA4g");
	this.shape_6.setTransform(109.3,36.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhNBTQgbgdAAg2QAAg1AbgdQAbgcAyAAQAzAAAbAcQAbAcAAA2QAAA2gbAdQgaAcg0AAQgyAAgbgcgAgqAAQAAA/AqAAQAWAAALgQQALgPAAggQAAgfgMgQQgKgPgWAAQgqAAAAA+g");
	this.shape_7.setTransform(85.7,33.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAdBsIAAinIg6AAIAACnIg7AAIAAjXICxAAIAADXg");
	this.shape_8.setTransform(62.5,33.4);

	this.instance = new lib.Символ17();
	this.instance.parent = this;
	this.instance.setTransform(143,33.8,1,1,0,0,0,143,33.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(0,0,285.9,67.6), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ19();
	this.instance.parent = this;
	this.instance.setTransform(143,33.8,1,1,0,0,0,143,33.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.08,scaleY:1.08,y:33.9},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,285.9,67.6);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.parent = this;
	this.instance.setTransform(45.5,45.5,1,1,0,0,0,45.5,45.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.95,scaleY:1.03,x:45.6,y:44},5,cjs.Ease.get(-1)).to({scaleX:0.86,scaleY:1.09,x:45.5,y:41.6},5,cjs.Ease.get(1)).to({scaleX:0.92,scaleY:1.05,y:43.2},5,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,y:45.5},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,91,91);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ20();
	this.instance.parent = this;
	this.instance.setTransform(543.5,7.4,1,1,0,0,0,407.1,44.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ18();
	this.instance_1.parent = this;
	this.instance_1.setTransform(789.7,44.6,1,1,0,0,0,143,33.8);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ15();
	this.instance_2.parent = this;
	this.instance_2.setTransform(51.7,42.4,1,1,0,0,0,45.5,45.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(-229.1,-36.8,1236.7,154.3), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.parent = this;
	this.instance.setTransform(102.5,42.5,1,1,0,0,0,102.5,42.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.98,scaleY:1.04,y:40.9},6,cjs.Ease.get(-1)).to({scaleX:0.96,scaleY:1.07,y:39.4},7,cjs.Ease.get(1)).to({scaleX:0.98,scaleY:1.04,y:41},7,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,y:42.5},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,205,85);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия: 2
	this.instance = new lib.Символ10();
	this.instance.parent = this;
	this.instance.setTransform(-1,-5.8,1.406,1.406,0,0,0,4.5,4.4);
	this.instance.alpha = 0.66;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:4.4,scaleX:3.07,scaleY:3.07,x:26.8,y:-6.5,alpha:0.039},9).to({regX:4.5,regY:4.5,scaleX:0.48,scaleY:0.48,x:-16.5,y:-5.3,alpha:1},1).to({regY:4.4,scaleX:1.22,scaleY:1.22,x:-4.1,y:-5.8,alpha:0.727},4).wait(1));

	// Слой 1 - копия
	this.instance_1 = new lib.Символ10();
	this.instance_1.parent = this;
	this.instance_1.setTransform(17.5,-6.2,2.514,2.514,0,0,0,4.5,4.5);
	this.instance_1.alpha = 0.25;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:4.4,regY:4.4,scaleX:3.07,scaleY:3.07,x:26.8,y:-6.5,alpha:0.039},3).to({regX:4.5,regY:4.5,scaleX:0.48,scaleY:0.48,x:-16.5,y:-5.3,alpha:1},1).to({scaleX:2.33,scaleY:2.33,x:14.4,y:-6.2,alpha:0.313},10).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ10();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-16.5,-5.3,0.483,0.483,0,0,0,4.5,4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:4.4,regY:4.4,scaleX:3.07,scaleY:3.07,x:26.8,y:-6.5,alpha:0.039},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.6,-17.5,47.2,22.4);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.parent = this;
	this.instance.setTransform(102.5,42.5,1,1,0,0,0,102.5,42.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ11();
	this.instance_1.parent = this;
	this.instance_1.setTransform(220.2,72.1,1,1,0,0,0,4.5,4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(0,0,244.3,85), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ6();
	this.instance.parent = this;
	this.instance.setTransform(91,116.6,1,1,0,0,0,91,116.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:290.5},80,cjs.Ease.get(-1)).to({x:487.5},79,cjs.Ease.get(1)).to({x:304.1},74,cjs.Ease.get(-1)).to({x:91},86,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,182,233.2);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ4();
	this.instance.parent = this;
	this.instance.setTransform(489.5,73.5,1,1,0,0,0,492.5,73.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:1666.8},349).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1179,0,2161,147);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.parent = this;
	this.instance.setTransform(-1194.9,110,1,1,0,0,0,512,124);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:1849},249).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3043.9,0,4068,248);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ9();
	this.instance.parent = this;
	this.instance.setTransform(3563.5,192.5,1,1,0,0,0,102.5,42.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(5077.9,124,1,1,0,0,0,2034,124);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(0,0,4068,248), null);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5
	this.instance = new lib.Символ14();
	this.instance.parent = this;
	this.instance.setTransform(88.5,691.5,1,1,0,0,0,45.5,45.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 4
	this.instance_1 = new lib.Символ7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(378,232.6,1,1,0,0,0,91,116.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 3
	this.instance_2 = new lib.Символ3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(513.5,116.5,1,1,0,0,0,492.5,73.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 2
	this.instance_3 = new lib.Символ8();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-501,483.7,1,1,0,0,0,2539,124);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Слой 1
	this.instance_4 = new lib.back();
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2528,384,4090.5,768);
// library properties:
lib.properties = {
	width: 1024,
	height: 768,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/back.jpg?1481017245234", id:"back"},
		{src:"images/Car.png?1481017245234", id:"Car"},
		{src:"images/City1.png?1481017245234", id:"City1"},
		{src:"images/City2.png?1481017245234", id:"City2"},
		{src:"images/City3.png?1481017245234", id:"City3"},
		{src:"images/Logo.png?1481017245234", id:"Logo"},
		{src:"images/Oblako.png?1481017245234", id:"Oblako"},
		{src:"images/Shar.png?1481017245234", id:"Shar"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;