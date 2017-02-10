(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1421,400);


(lib.den_03 = function() {
	this.initialize(img.den_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,146,122);


(lib.den_06 = function() {
	this.initialize(img.den_06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,83,78);


(lib.den_10 = function() {
	this.initialize(img.den_10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,47,66);


(lib.den_13 = function() {
	this.initialize(img.den_13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,79,100);


(lib.den_133 = function() {
	this.initialize(img.den_133);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,28,17);


(lib.den_16 = function() {
	this.initialize(img.den_16);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,46,45);


(lib.den_21 = function() {
	this.initialize(img.den_21);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,41,40);


(lib.den_24 = function() {
	this.initialize(img.den_24);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,46,44);


(lib.den_27 = function() {
	this.initialize(img.den_27);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,66,79);


(lib.den_33 = function() {
	this.initialize(img.den_33);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,54,52);


(lib.dollar = function() {
	this.initialize(img.dollar);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,49,42);


(lib.sfdbsdfgsg6 = function() {
	this.initialize(img.sfdbsdfgsg6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,20,43);


(lib.ten = function() {
	this.initialize(img.ten);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,90);// helper functions:

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


(lib.Символ85 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AkGCFIAAgsIhxAAIgEAsIhEAAIAAhpIAUAAQAHgSAIgnQACgWAChBIAAgLIDBAAIAACbIAZAAIgHBpgAlQg/QAAAbgEAYQgDATgGAVIA5AAIAAheIgsAAgApkBWIgUgKIgRgNIgNgRIgLgTIgGgWIgCgXQAAgQAIgdQAHgUAPgQQAPgPAUgJIAUgGQAMgDAMAAQANAAANADQAMACAKAFQALAFAIAGQAIAHAHAIQAOAQAGAWQAHAVAAAYIAAAPIiRAAQAFARAMAJQAMAJARAAQAOAAAMgFQALgFALgMIAqAjQgIAKgJAIQgKAIgLAGQgMAGgNADQgOADgQAAQghgDgOgFgAoWgkQgDgSgJgLQgLgKgOAAQgPAAgLAKQgKALgCASIBLAAIAAAAgAxiBZQgOgEgKgJQgKgJgFgMQgGgNABgQQAAgRAFgMQAHgMALgJQALgIAQgFQAPgEATAAQAVAAAfAIIAAgDQABgRgLgJQgGgFgIgCQgIgCgLAAQgQAAgPADQgNACgPAHIgQg2QAUgIATgEQAWgFAbAAQATAAAeAHQAUAHANANQAMALAGARQAGARgBAXIAAB8IhLAAIAAgXQgLANgQAHQgRAIgTAAQgQAAgNgFgAw8ACQgJAIAAAMQAAALAIAHQAGAGANAAQAQAAALgKQALgKgBgQIAAgKQgNgEgQAAQgRAAgJAGgAS6BZIAAjYIBLAAIAABEIAlAAQATAAARAFQAQAFAMAJQAMAJAHAOQAGAOAAARQAAARgFAOQgHAOgLAKQgMAKgPAFQgQAFgTAAgAUFAjIAYAAQAOAAAHgGQAIgGAAgLQAAgLgIgFQgHgGgOAAIgYAAgANCBZIAAjYIBNAAIAACbIA1AAIAAibIBLAAIAACbIA2AAIAAibIBMAAIAADYgALOBZIAAjYIBMAAIAADYgAHrBZIAAjYIBNAAIAABEIAkAAQAUAAAQAFQAQAFAMAJQAMAJAHAOQAGAOABARQgBARgFAOQgHAOgLAKQgLAKgQAFQgQAFgTAAgAI4AjIAXAAQAOAAAIgGQAHgGAAgLQAAgLgHgFQgIgGgOAAIgXAAgAF2BZIAAhqIg0BJIgzhIIAABpIhLAAIAAjYIBNAAIAyBLIAyhLIBOAAIAADYgAgcBZIAAhsIhIBsIhFAAIAAjYIBJAAIAABtIBIhtIBFAAIAADYgAuUBZIAAjYICBAAQATAAAQAFQAOAFAJAKQAIAHADAIQADAJAAALQAAASgJANQgIALgQAGIARAIQAIAFAGAGQAEAGAEAIQACAJAAALQAAAOgGALQgFALgLAIQgKAIgPAEQgQAEgTAAgAtKAoIAfAAQAOAAAHgGQAHgFAAgKQAAgJgHgFQgHgFgPAAIgeAAgAtKgpIAaAAQAMAAAIgFQAHgFAAgJQAAgIgHgFQgHgFgMAAIgbAAgAz4BZIAAhPIg/AAIAABPIhLAAIAAjYIBLAAIAABNIA/AAIAAhNIBMAAIAADYg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ85, new cjs.Rectangle(-141.1,-13.2,282.3,26.6), null);


(lib.Символ82 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.den_133();
	this.instance.parent = this;
	this.instance.setTransform(-14,-8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ82, new cjs.Rectangle(-14,-8.5,28,17), null);


(lib.Символ81 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFB284").s().p("AA7AFQgMgCAAgDQAAgCAMgCQAOgDATAAQASAAANADQAOACAAACQAAADgOACQgNADgSgBQgTABgOgDgAh6AFQgOgCAAgDQAAgCAOgCQANgDASAAQATAAANADQANACAAACQAAADgNACQgNADgTgBQgSABgNgDg");
	this.shape.setTransform(0,-3.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFB284").s().p("AA/ALQgNgEAAgHQAAgFANgEQANgGATAAQASAAANAGQAOAQgOAEQgNAFgSAAQgTAAgNgFgAh3ALQgNgEAAgHQAAgFANgEQANgGATAAQASAAANAGQAOAEAAAFQAAAHgOAEQgNAFgSAAQgTAAgNgFg");
	this.shape_1.setTransform(-0.3,-2.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFB284").s().p("AA/AQQgNgGAAgKQAAgJANgHQANgIATAAQASAAANAIQAOAagOAGQgNAJgSAAQgTAAgNgJgAh3AQQgNgGAAgKQAAgJANgHQANgIATAAQASAAANAIQAOAHAAAJQAAAKgOAGQgNAJgSAAQgTAAgNgJg");
	this.shape_2.setTransform(-0.3,-2.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFB284").s().p("AA/AWQgNgJAAgNQAAgMANgJQANgLATAAQASAAANALQAOAigOAJQgNALgSAAQgTAAgNgLgAh3AWQgNgJAAgNQAAgMANgJQANgLATAAQASAAANALQAOAJAAAMQAAANgOAJQgNALgSAAQgTAAgNgLg");
	this.shape_3.setTransform(-0.3,-1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFB284").s().p("AA7AcQgMgLAAgRQAAgQAMgLQAOgOATAAQASAAANAOQAOALAAAQQAAARgOALQgNAOgSAAQgTAAgOgOgAh6AcQgOgLAAgRQAAgQAOgLQANgOASAAQATAAANAOQANALAAAQQAAARgNALQgNAOgTAAQgSAAgNgOg");
	this.shape_4.setTransform(0,-0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.6,-4.5,27.3,1.5);


(lib.Символ76 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.sfdbsdfgsg6, null, new cjs.Matrix2D(0.557,0,0,0.557,-5.5,-12.2)).s().p("AAPBqQg5gGgNAJIAAjbIBYAAQAJADAOAAIAADaIgpgFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ76, new cjs.Rectangle(-5.5,-11.1,11.1,22.3), null);


(lib.Символ73 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("Aj4IUIFtxnIDDBAIltRngAk3DoICgnrIBVAcIigHrg");
	this.shape.setTransform(-3.1,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ73, new cjs.Rectangle(-34.3,-59.5,62.4,119.1), null);


(lib.Символ72 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#1F480A","#1AFF00"],[0,1],0,13.3,0,-13.2).s().p("ABKCNIgVgyIhrAAIgUAyIhSAAIB3kZIBLAAIB3EZgAgfAeIA+AAIgfhOg");
	this.shape.setTransform(-14.5,4.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#1F480A","#1AFF00"],[0,1],0,14.2,0,-14.2).s().p("AA1CMIg1hVIg2BVIhXAAIBgiNIhciKIBZAAIAxBPIAyhPIBXAAIhcCJIBgCOg");
	this.shape_1.setTransform(-73.6,4.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#1F480A","#1AFF00"],[0,1],0,12.5,0,-12.5).s().p("Ah8CMIAAkXICPAAQAZAAAUAGQASAHAMAMQAKAJAEALQAFAMAAAOQAAAMgDAKQgDAKgGAIQgGAHgJAGIgRAJQAOAFAKAEQAKAHAHAIQAIAIADALQAEAMAAAOQAAASgHAOQgHAOgOAKQgNAKgUAGQgUAFgZAAgAgxBNIA8AAQARABAKgHQAKgHAAgNQAAgMgJgGQgLgHgSAAIg7AAgAgxgbIAxAAQARgBAKgGQAJgGAAgMQAAgMgJgGQgJgHgRAAIgyAAg");
	this.shape_2.setTransform(-44,4.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#1F480A","#1AFF00"],[0,1],0,13.3,0,-13.2).s().p("ABJCNIgUgyIhrAAIgUAyIhRAAIB3kZIBJAAIB3EZgAgfAeIA9AAIgehOg");
	this.shape_3.setTransform(43.7,4.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#1F480A","#1AFF00"],[0,1],0,12.9,0,-12.8).s().p("AA0CMIAAicIhrCcIhJAAIAAkXIBNAAIAACdIBridIBJAAIAAEXg");
	this.shape_4.setTransform(75,4.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#1F480A","#1AFF00"],[0,1],0,4.1,0,-4.1).s().p("AgaAeQgLgDgKgJQgJgIgFgKQgGgLgDgPIArgIQAEAMAGAGQAHAGAKABQALgBAHgGQAGgGAEgMIArAIQgDAPgFALQgGAKgKAIQgJAJgMADQgMAFgOAAQgOAAgMgFg");
	this.shape_5.setTransform(75.2,-14.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#1F480A","#1AFF00"],[0,1],0,12.3,0,-12.3).s().p("AgmCMIAAjTIhUAAIAAhEID1AAIAABEIhVAAIAADTg");
	this.shape_6.setTransform(14.6,4.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ72, new cjs.Rectangle(-87.8,-18.3,175.6,36.7), null);


(lib.Символ70 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AMhC4IAAieIhsCeIhIAAIAAkXIBMAAIAACcIBticIBIAAIAAEXgAH+C4IgUgzIhsAAIgUAzIhSAAIB3kZIBLAAIB3EZgAHTBJIgfhOIgfBOIA+AAgABrC4IAAjUIhUAAIAAhDID2AAIAABDIhVAAIAADUgAhHC4IgUgzIhsAAIgUAzIhSAAIB3kZIBLAAIB2EZgAhyBJIgfhOIgfBOIA+AAgAo0C4IAAkXICPAAQAaAAATAGQATAGAMANQAJAIAFAMQAFAMAAAOQAAALgEAKQgDAJgGAIQgFAHgJAHIgRAJQAOAEAJAGQALAHAHAHQAHAJAEALQAEALAAAOQAAASgHAPQgHAOgOAKQgOAKgTAFQgUAFgZABgAnpB5IA8AAQASAAAKgHQAJgGAAgOQAAgLgJgGQgKgIgTAAIg7AAgAnpAPIAxAAQASAAAJgGQAKgGAAgMQAAgMgJgGQgJgGgRAAIgzAAgAqrC4Ig1hVIg2BVIhXAAIBgiPIhciIIBZAAIAyBPIAyhPIBXAAIhcCHIBgCQgALVh2QgLgDgKgJQgJgIgFgKQgGgMgDgPIArgIQAEAMAGAGQAHAGALABQALgBAHgGQAGgGAEgMIArAIQgDAPgFAMQgGAKgKAIQgJAJgMADQgMAFgOAAQgPAAgMgFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ70, new cjs.Rectangle(-87.8,-18.3,175.6,36.7), null);


(lib.Символ66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AVPE3IAAkLIi3ELIh7AAIAAnaICCAAIAAEKIC4kKIB7AAIAAHagANiE3IgjhUIi3AAIgiBUIiLAAIDKndICAAAIDJHdgAMZB8Ig1iGIg1CGIBqAAgAC1E3IAAlnIiOAAIAAhzIGhAAIAABzIiPAAIAAFngAh5E3IgjhUIi3AAIgiBUIiKAAIDKndIB/AAIDJHdgAjCB8Ig0iGIg2CGIBqAAgAu+E3IAAnaIDzAAQAtAAAgAMQAfAKAVAUQAQAQAHATQAJAUAAAYQAAAUgGARQgFAPgKAOQgKANgOAKIgdAQQAXAIAQAJQASALAMANQAMAPAHATQAGASAAAZQAAAdgMAZQgMAZgXAQQgXARghAJQgiAJgrAAgAs+DNIBmAAQAeAAAQgLQARgMAAgWQAAgTgQgLQgRgMggAAIhkAAgAs+AZIBSAAQAfAAAQgKQAQgKAAgVQAAgTgPgMQgPgKgdAAIhWAAgAyHE3IhbiPIhcCPIiTAAICjjyIicjoICXAAIBUCGIBViGICUAAIicDnICjDzgATOjIQgTgHgQgNQgPgOgKgTQgKgTgEgZIBIgNQAHATALAKQAMALARAAQATAAAMgLQALgJAHgUIBIANQgEAZgKATQgKATgQAOQgPANgVAHQgUAHgZAAQgYAAgVgHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ66, new cjs.Rectangle(-149,-31.1,298.1,62.3), null);


(lib.Символ65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AVPE3IAAkLIi3ELIh7AAIAAnaICCAAIAAEKIC4kKIB7AAIAAHagANiE3IgjhUIi3AAIgiBUIiLAAIDKndICAAAIDJHdgAMZB8Ig1iGIg1CGIBqAAgAC1E3IAAlnIiOAAIAAhzIGhAAIAABzIiPAAIAAFngAh5E3IgjhUIi3AAIgiBUIiKAAIDKndIB/AAIDJHdgAjCB8Ig0iGIg2CGIBqAAgAu+E3IAAnaIDzAAQAtAAAgAMQAfAKAVAUQAQAQAHATQAJAUAAAYQAAAUgGARQgFAPgKAOQgKANgOAKIgdAQQAXAIAQAJQASALAMANQAMAPAHATQAGASAAAZQAAAdgMAZQgMAZgXAQQgXARghAJQgiAJgrAAgAs+DNIBmAAQAeAAAQgLQARgMAAgWQAAgTgQgLQgRgMggAAIhkAAgAs+AZIBSAAQAfAAAQgKQAQgKAAgVQAAgTgPgMQgPgKgdAAIhWAAgAyHE3IhbiPIhcCPIiTAAICjjyIicjoICXAAIBUCGIBViGICUAAIicDnICjDzgATOjIQgTgHgQgNQgPgOgKgTQgKgTgEgZIBIgNQAHATALAKQAMALARAAQATAAAMgLQALgJAHgUIBIANQgEAZgKATQgKATgQAOQgPANgVAHQgUAHgZAAQgYAAgVgHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ65, new cjs.Rectangle(-149,-31.1,298.1,62.3), null);


(lib.Символ59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjaDTIAAg3IiVAAIgFA3IhGAAIAAh8IAZAAIAMgmQAGgVADgXQAEgXACgdIABhMIDWAAIAADSIAfAAIgJB8gAk6g0QgCA3gEAXQgFAegLAfIBTAAIAAiPIg9AAgAhUCbQgPgGgQgJIAfg3QAOAJARAAQAGAAAGgCQAHgDAGgGIhujOIBXAAIA+CCIA8iCIBVAAIhuDUQgJATgKANQgKANgLAJQgLAIgNAFQgNADgQAAQgTAAgSgEgAQCCcIAAidIhsCdIhJAAIAAkXIBNAAIAACcIBsicIBJAAIAAEXgALfCcIgVgzIhsAAIgUAzIhRAAIB3kaIBLAAIB3EagAK0AtIgfhOIggBOIA/AAgAGQCcIAAigIhHBsIgCAAIhHhsIAACgIhMAAIAAkXIBSAAIBDBsIBDhsIBSAAIAAEXgAseCcIAAkXIDhAAIAABBIiUAAIAAArICGAAIAAA8IiGAAIAAAsICWAAIAABDgAudCcIAAhrIhjAAIAABrIhOAAIAAkXIBOAAIAABoIBjAAIAAhoIBOAAIAAEXgAO2iSQgMgEgJgHQgJgJgGgKQgGgMgCgOIAqgJQAEAMAHAGQAHAHAKAAQALAAAHgHQAHgFAEgNIAqAJQgCAOgGAMQgGAKgJAJQgJAHgMAEQgMAFgPAAQgOAAgMgFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ59, new cjs.Rectangle(-110.2,-21.1,220.6,42.3), null);


(lib.Символ58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjaDTIAAg3IiVAAIgFA3IhGAAIAAh8IAZAAIAMgmQAGgVADgXQAEgXACgdIABhMIDWAAIAADSIAfAAIgJB8gAk6g0QgCA3gEAXQgFAegLAfIBTAAIAAiPIg9AAgAhUCbQgPgGgQgJIAfg3QAOAJARAAQAGAAAGgCQAHgDAGgGIhujOIBXAAIA+CCIA8iCIBVAAIhuDUQgJATgKANQgKANgLAJQgLAIgNAFQgNADgQAAQgTAAgSgEgAQCCcIAAidIhsCdIhJAAIAAkXIBNAAIAACcIBsicIBJAAIAAEXgALfCcIgVgzIhsAAIgUAzIhRAAIB3kaIBLAAIB3EagAK0AtIgfhOIggBOIA/AAgAGQCcIAAigIhHBsIgCAAIhHhsIAACgIhMAAIAAkXIBSAAIBDBsIBDhsIBSAAIAAEXgAseCcIAAkXIDhAAIAABBIiUAAIAAArICGAAIAAA8IiGAAIAAAsICWAAIAABDgAudCcIAAhrIhjAAIAABrIhOAAIAAkXIBOAAIAABoIBjAAIAAhoIBOAAIAAEXgAO2iSQgMgEgJgHQgJgJgGgKQgGgMgCgOIAqgJQAEAMAHAGQAHAHAKAAQALAAAHgHQAHgFAEgNIAqAJQgCAOgGAMQgGAKgJAJQgJAHgMAEQgMAFgPAAQgOAAgMgFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ58, new cjs.Rectangle(-110.2,-21.1,220.6,42.3), null);


(lib.Символ56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dollar();
	this.instance.parent = this;
	this.instance.setTransform(-24.5,-21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ56, new cjs.Rectangle(-24.5,-21,49,42), null);


(lib.Символ54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dollar();
	this.instance.parent = this;
	this.instance.setTransform(-24.5,-21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ54, new cjs.Rectangle(-24.5,-21,49,42), null);


(lib.Символ52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("EiENAWgMAAAgs/MEIbAAAMAAAAs/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ52, new cjs.Rectangle(-846.2,-144,1692.4,288.1), null);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(6.2,1,1).p("ACekuQABABABABQAKAFAKAGQAgAVAdAcQAkAlAXApAErClQgXAogjAkQgdAcggAVQgKAGgKAFQgBABgBABAkriiQAXgpAkglQAZgYAagSQAPgKAPgIAifEtQgPgIgPgKQgagSgZgYQgjgkgXgo");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ40, new cjs.Rectangle(-33,-33.3,66,66.6), null);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(4,1,1).p("AA5hqQAEABADADQAMAHAKAKQANANAIAPABrA6QgIAPgNAMQgKALgMAHQgDACgEACAhqg5QAIgPANgNQAJgIAJgHQAFgEAGgCAg4BrQgGgDgFgDQgJgHgJgJQgNgMgIgP");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ33, new cjs.Rectangle(-12.6,-12.7,25.3,25.5), null);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ten();
	this.instance.parent = this;
	this.instance.setTransform(-45,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ28, new cjs.Rectangle(-45,-45,90,90), null);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.den_03();
	this.instance.parent = this;
	this.instance.setTransform(-73,-61);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(-73,-61,146,122), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.den_10();
	this.instance.parent = this;
	this.instance.setTransform(-23.5,-33);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(-23.5,-33,47,66), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.den_13();
	this.instance.parent = this;
	this.instance.setTransform(-39.5,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(-39.5,-50,79,100), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.den_16();
	this.instance.parent = this;
	this.instance.setTransform(-23,-22.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(-23,-22.5,46,45), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.den_21();
	this.instance.parent = this;
	this.instance.setTransform(-20.5,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(-20.5,-20,41,40), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.den_24();
	this.instance.parent = this;
	this.instance.setTransform(-23,-22);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(-23,-22,46,44), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.den_27();
	this.instance.parent = this;
	this.instance.setTransform(-33,-39.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(-33,-39.5,66,79), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.den_33();
	this.instance.parent = this;
	this.instance.setTransform(-27,-26);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(-27,-26,54,52), null);


(lib.Символ84 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkGCFIAAgsIhxAAIgEAsIhEAAIAAhpIAUAAQAHgSAIgnQACgWAChBIAAgLIDBAAIAACbIAZAAIgHBpgAlQg/QAAAbgEAYQgDATgGAVIA5AAIAAheIgsAAgApkBWIgUgKIgRgNIgNgRIgLgTIgGgWIgCgXQAAgQAIgdQAHgUAPgQQAPgPAUgJIAUgGQAMgDAMAAQANAAANADQAMACAKAFQALAFAIAGQAIAHAHAIQAOAQAGAWQAHAVAAAYIAAAPIiRAAQAFARAMAJQAMAJARAAQAOAAAMgFQALgFALgMIAqAjQgIAKgJAIQgKAIgLAGQgMAGgNADQgOADgQAAQghgDgOgFgAoWgkQgDgSgJgLQgLgKgOAAQgPAAgLAKQgKALgCASIBLAAIAAAAgAxiBZQgOgEgKgJQgKgJgFgMQgGgNABgQQAAgRAFgMQAHgMALgJQALgIAQgFQAPgEATAAQAVAAAfAIIAAgDQABgRgLgJQgGgFgIgCQgIgCgLAAQgQAAgPADQgNACgPAHIgQg2QAUgIATgEQAWgFAbAAQATAAAeAHQAUAHANANQAMALAGARQAGARgBAXIAAB8IhLAAIAAgXQgLANgQAHQgRAIgTAAQgQAAgNgFgAw8ACQgJAIAAAMQAAALAIAHQAGAGANAAQAQAAALgKQALgKgBgQIAAgKQgNgEgQAAQgRAAgJAGgAS6BZIAAjYIBLAAIAABEIAlAAQATAAARAFQAQAFAMAJQAMAJAHAOQAGAOAAARQAAARgFAOQgHAOgLAKQgMAKgPAFQgQAFgTAAgAUFAjIAYAAQAOAAAHgGQAIgGAAgLQAAgLgIgFQgHgGgOAAIgYAAgANCBZIAAjYIBNAAIAACbIA1AAIAAibIBLAAIAACbIA2AAIAAibIBMAAIAADYgALOBZIAAjYIBMAAIAADYgAHrBZIAAjYIBNAAIAABEIAkAAQAUAAAQAFQAQAFAMAJQAMAJAHAOQAGAOABARQgBARgFAOQgHAOgLAKQgLAKgQAFQgQAFgTAAgAI4AjIAXAAQAOAAAIgGQAHgGAAgLQAAgLgHgFQgIgGgOAAIgXAAgAF2BZIAAhqIg0BJIgzhIIAABpIhLAAIAAjYIBNAAIAyBLIAyhLIBOAAIAADYgAgcBZIAAhsIhIBsIhFAAIAAjYIBJAAIAABtIBIhtIBFAAIAADYgAuUBZIAAjYICBAAQATAAAQAFQAOAFAJAKQAIAHADAIQADAJAAALQAAASgJANQgIALgQAGIARAIQAIAFAGAGQAEAGAEAIQACAJAAALQAAAOgGALQgFALgLAIQgKAIgPAEQgQAEgTAAgAtKAoIAfAAQAOAAAHgGQAHgFAAgKQAAgJgHgFQgHgFgPAAIgeAAgAtKgpIAaAAQAMAAAIgFQAHgFAAgJQAAgIgHgFQgHgFgMAAIgbAAgAz4BZIAAhPIg/AAIAABPIhLAAIAAjYIBLAAIAABNIA/AAIAAhNIBMAAIAADYg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.instance = new lib.Символ85();
	this.instance.parent = this;
	this.instance.setTransform(0,1);
	this.instance.filters = [new cjs.BlurFilter(3, 3, 1)];
	this.instance.cache(-143,-15,286,31);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ84, new cjs.Rectangle(-143.1,-14.3,290,34), null);


(lib.Символ83 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ82();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.176,1.176);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:-0.1,scaleX:0.79,scaleY:0.75,y:-2},4,cjs.Ease.get(1)).to({regY:0,scaleX:1.18,scaleY:1.18,y:0},4,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.4,-10,32.9,20);


(lib.Символ78 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ84();
	this.instance.parent = this;
	this.instance.setTransform(5.9,5.3,0.42,0.42);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ78, new cjs.Rectangle(-55.3,-1.9,126,18), null);


(lib.Символ77 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ78();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.88,scaleY:0.88},7,cjs.Ease.get(-1)).to({scaleX:0.77,scaleY:0.77},7,cjs.Ease.get(1)).to({scaleX:0.88,scaleY:0.88},7,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.3,-1.9,126,18);


(lib.Символ75 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ77();
	this.instance.parent = this;
	this.instance.setTransform(104.9,16.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(41));

	// Слой 1
	this.instance_1 = new lib.Символ76();
	this.instance_1.parent = this;
	this.instance_1.setTransform(24.5,9.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({guide:{path:[24.5,9.4,25,8.6,25.7,7.9,29,4.6,33.6,4.6,38.2,4.6,41.5,7.9,44.7,11,44.7,15.7,44.7,18.5,43.4,20.9]}},21).to({guide:{path:[43.5,20.8,42.7,22.2,41.5,23.5,38.2,26.7,33.6,26.7,29.7,26.7,26.7,24.3]}},8).to({guide:{path:[26.7,24.3,26.2,23.9,25.7,23.5,22.5,20.2,22.5,15.6,22.5,12.1,24.5,9.4]}},11).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(18.9,-1.8,156.7,35.2);


(lib.Символ74 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ75();
	this.instance.parent = this;
	this.instance.setTransform(451.3,77.2,1.128,1.128,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ74, new cjs.Rectangle(472.5,75.1,175.8,39.5), null);


(lib.Символ71 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AMhC4IAAieIhsCeIhIAAIAAkXIBMAAIAACcIBticIBIAAIAAEXgAH+C4IgUgzIhsAAIgUAzIhSAAIB3kZIBLAAIB3EZgAGVBJIA+AAIgfhOgABrC4IAAjUIhUAAIAAhDID2AAIAABDIhVAAIAADUgAhHC4IgUgzIhsAAIgUAzIhSAAIB3kZIBLAAIB2EZgAiwBJIA+AAIgfhOgAo0C4IAAkXICPAAQAaAAATAGIAAAAQATAGAMANIAAAAQAJAIAFAMIAAAAQAFAMAAAOIAAAAQAAAMgEAJIAAAAQgDAJgGAIIAAAAQgFAHgJAHIAAAAIgRAJQAOAEAJAGIAAAAQALAHAHAHIAAAAQAHAJAEALIAAAAQAEALAAAOIAAAAQAAASgHAPIAAAAQgHAOgOAKIAAAAQgOAKgTAFIAAAAQgUAFgZABIAAAAgAnpB5IA8AAQASAAAKgHIAAAAQAJgGAAgNIAAAAQAAgMgJgGIAAAAQgKgIgTAAIAAAAIg7AAgAnpAPIAxAAQASAAAJgGIAAAAQAKgGAAgMIAAAAQAAgMgJgGIAAAAQgJgGgRAAIAAAAIgzAAgAqrC4Ig1hVIg2BVIhXAAIBgiPIhciIIBZAAIAyBPIAyhPIBXAAIhcCIIBgCPgALVh2QgLgDgKgJIAAAAQgJgIgFgKIAAAAQgGgMgDgPIAAAAIArgIQAEAMAGAGIAAAAQAHAGALABIAAAAQALgBAHgGIAAAAQAGgGAEgMIAAAAIArAIQgDAPgFAMIAAAAQgGAKgKAIIAAAAQgJAJgMADIAAAAQgMAFgOAAIAAAAQgPAAgMgFg");

	// Слой 2
	this.instance = new lib.Символ73();
	this.instance.parent = this;
	this.instance.setTransform(-111.8,2.9);
	this.instance.alpha = 0.539;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:135,alpha:0.309},39).wait(16));

	// Слой 1
	this.instance_1 = new lib.Символ72();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(55));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87.8,-18.3,175.6,36.7);


(lib.Символ69 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ70();
	this.instance.parent = this;
	this.instance.setTransform(0,0.5);
	this.instance.filters = [new cjs.BlurFilter(3, 3, 1)];
	this.instance.cache(-90,-20,180,41);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ69, new cjs.Rectangle(-89.8,-19.8,182,43), null);


(lib.Символ68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ71();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ69();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ68, new cjs.Rectangle(-146.1,-56.6,238.4,119.1), null);


(lib.Символ64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ65();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ66();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,3.1);
	this.instance_1.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance_1.cache(-151,-33,302,66);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ64, new cjs.Rectangle(-151,-31.1,306,71.1), null);


(lib.Символ57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ58();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ59();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,1.7);
	this.instance_1.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance_1.cache(-112,-23,225,46);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ57, new cjs.Rectangle(-112.2,-21.5,228,49), null);


(lib.Символ55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ56();
	this.instance.parent = this;
	this.instance.alpha = 0.578;
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Слой 1
	this.instance_1 = new lib.dollar();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-24.5,-21);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.5,-21,49,42);


(lib.Символ53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ54();
	this.instance.parent = this;
	this.instance.alpha = 0.578;
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Слой 1
	this.instance_1 = new lib.dollar();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-24.5,-21);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.5,-21,49,42);


(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ53();
	this.instance.parent = this;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ51, new cjs.Rectangle(-24.5,-21,49,42), null);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ51();
	this.instance.parent = this;
	this.instance.setTransform(-3.5,-5,1,1,0,0,0,-3.5,-5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0,regY:0,rotation:23,x:-2.2,y:1},0).wait(1).to({rotation:45.6,x:-4.6},0).wait(1).to({rotation:68,x:-6.8,y:0.1},0).wait(1).to({rotation:90.1,x:-8.5,y:-1.5},0).wait(1).to({rotation:111.8,x:-9.4,y:-3.6},0).wait(1).to({rotation:133.3,x:-9.5,y:-5.9},0).wait(1).to({rotation:154.5,x:-8.8,y:-8},0).wait(1).to({rotation:175.4,x:-7.4,y:-9.7},0).wait(1).to({rotation:196,x:-5.5,y:-10.8},0).wait(1).to({rotation:216.3,x:-3.4,y:-11.1},0).wait(1).to({rotation:236.3,x:-1.3,y:-10.7},0).wait(1).to({rotation:256,x:0.5,y:-9.6},0).wait(1).to({rotation:275.4,x:1.8,y:-8},0).wait(1).to({rotation:294.5,x:2.5,y:-6.1},0).wait(1).to({rotation:313.3,y:-4.1},0).wait(1).to({rotation:331.8,x:1.9,y:-2.2},0).wait(1).to({rotation:350.1,x:0.8,y:-0.7},0).wait(1).to({rotation:368,x:-0.7,y:0.4},0).wait(1).to({rotation:385.6,x:-2.5,y:1},0).wait(1).to({rotation:402.9,x:-4.3},0).wait(1).to({rotation:420,x:-6.1,y:0.5},0).wait(1).to({rotation:436.7,x:-7.6,y:-0.4},0).wait(1).to({rotation:453.2,x:-8.7,y:-1.8},0).wait(1).to({rotation:469.3,x:-9.4,y:-3.4},0).wait(1).to({rotation:485.2,x:-9.6,y:-5},0).wait(1).to({rotation:500.8,x:-9.4,y:-6.7},0).wait(1).to({rotation:516,x:-8.7,y:-8.1},0).wait(1).to({rotation:531,x:-7.7,y:-9.4},0).wait(1).to({rotation:545.6,x:-6.5,y:-10.3},0).wait(1).to({rotation:560,x:-5.1,y:-10.9},0).wait(1).to({rotation:574.1,x:-3.6,y:-11.1},0).wait(1).to({rotation:587.9,x:-2.1,y:-10.9},0).wait(1).to({rotation:601.4,x:-0.8,y:-10.5},0).wait(1).to({rotation:614.6,x:0.4,y:-9.7},0).wait(1).to({rotation:627.5,x:1.3,y:-8.7},0).wait(1).to({rotation:640.1,x:2,y:-7.6},0).wait(1).to({rotation:652.4,x:2.5,y:-6.3},0).wait(1).to({rotation:664.4,x:2.6,y:-5.1},0).wait(1).to({rotation:676.1,x:2.5,y:-3.8},0).wait(1).to({rotation:687.5,x:2.1,y:-2.7},0).wait(1).to({rotation:698.6,x:1.6,y:-1.6},0).wait(1).to({rotation:709.5,x:0.9,y:-0.7},0).wait(1).to({rotation:720,x:0,y:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.5,-21,49,42);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ55();
	this.instance.parent = this;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ44, new cjs.Rectangle(-24.5,-21,49,42), null);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ40();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ34, new cjs.Rectangle(-33,-33.3,66,66.6), null);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ33();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:-18.5},0).wait(1).to({rotation:-36.9},0).wait(1).to({rotation:-55.4},0).wait(1).to({rotation:-73.8},0).wait(1).to({rotation:-92.3},0).wait(1).to({rotation:-110.8},0).wait(1).to({rotation:-129.2},0).wait(1).to({rotation:-147.7},0).wait(1).to({rotation:-166.2},0).wait(1).to({rotation:-184.6},0).wait(1).to({rotation:-203.1},0).wait(1).to({rotation:-221.5},0).wait(1).to({rotation:-240},0).wait(1).to({rotation:-258.5},0).wait(1).to({rotation:-276.9},0).wait(1).to({rotation:-295.4},0).wait(1).to({rotation:-313.8},0).wait(1).to({rotation:-332.3},0).wait(1).to({rotation:-350.8},0).wait(1).to({rotation:-369.2},0).wait(1).to({rotation:-387.7},0).wait(1).to({rotation:-406.2},0).wait(1).to({rotation:-424.6},0).wait(1).to({rotation:-443.1},0).wait(1).to({rotation:-461.5},0).wait(1).to({rotation:-480},0).wait(1).to({rotation:-498.5},0).wait(1).to({rotation:-516.9},0).wait(1).to({rotation:-535.4},0).wait(1).to({rotation:-553.8},0).wait(1).to({rotation:-572.3},0).wait(1).to({rotation:-590.8},0).wait(1).to({rotation:-609.2},0).wait(1).to({rotation:-627.7},0).wait(1).to({rotation:-646.2},0).wait(1).to({rotation:-664.6},0).wait(1).to({rotation:-683.1},0).wait(1).to({rotation:-701.5},0).wait(1).to({rotation:-720},0).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ34();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({rotation:9.2},0).wait(1).to({rotation:18.5},0).wait(1).to({rotation:27.7},0).wait(1).to({rotation:36.9},0).wait(1).to({rotation:46.2},0).wait(1).to({rotation:55.4},0).wait(1).to({rotation:64.6},0).wait(1).to({rotation:73.8},0).wait(1).to({rotation:83.1},0).wait(1).to({rotation:92.3},0).wait(1).to({rotation:101.5},0).wait(1).to({rotation:110.8},0).wait(1).to({rotation:120},0).wait(1).to({rotation:129.2},0).wait(1).to({rotation:138.5},0).wait(1).to({rotation:147.7},0).wait(1).to({rotation:156.9},0).wait(1).to({rotation:166.2},0).wait(1).to({rotation:175.4},0).wait(1).to({rotation:184.6},0).wait(1).to({rotation:193.8},0).wait(1).to({rotation:203.1},0).wait(1).to({rotation:212.3},0).wait(1).to({rotation:221.5},0).wait(1).to({rotation:230.8},0).wait(1).to({rotation:240},0).wait(1).to({rotation:249.2},0).wait(1).to({rotation:258.5},0).wait(1).to({rotation:267.7},0).wait(1).to({rotation:276.9},0).wait(1).to({rotation:286.2},0).wait(1).to({rotation:295.4},0).wait(1).to({rotation:304.6},0).wait(1).to({rotation:313.8},0).wait(1).to({rotation:323.1},0).wait(1).to({rotation:332.3},0).wait(1).to({rotation:341.5},0).wait(1).to({rotation:350.8},0).wait(1).to({rotation:360},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33,-33.3,66,66.6);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ52();
	this.instance.parent = this;
	this.instance.setTransform(15.4,-90.4);
	this.instance.alpha = 0.578;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.bg();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-710.5,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ30, new cjs.Rectangle(-830.8,-234.4,1692.4,434.5), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ19();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(-73,-61,146,122), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ17();
	this.instance.parent = this;
	this.instance.setTransform(0,28.1,1,1,0,0,0,0,28.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-7.7,x:0.1,y:28.2},4,cjs.Ease.get(1)).to({rotation:0,x:0,y:28.1},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.5,-33,47,66);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.06,scaleY:1.06},4,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.5,-50,79,100);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(-23,-22.5,46,45), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ11();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(-20.5,-20,41,40), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(-23,-22,46,44), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.parent = this;
	this.instance.setTransform(-0.7,-30.3,1,1,0,0,0,-2.4,-33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:10.8,y:-30.4},5,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:24.5},5,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:10.8},4,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:0,y:-30.3},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.3,-36.3,66,79);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.parent = this;
	this.instance.setTransform(25.5,7,1,1,0,0,0,25.5,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(-27,-26,54,52), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ81();
	this.instance.parent = this;
	this.instance.setTransform(9.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ83();
	this.instance_1.parent = this;
	this.instance_1.setTransform(9,22.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.den_06();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-41.5,-39);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(-41.5,-39,83,78), null);


(lib.Символ79 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ68();
	this.instance.parent = this;
	this.instance.setTransform(0,-0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.17,scaleY:1.17},8,cjs.Ease.get(-1)).to({scaleX:1.33,scaleY:1.33},8,cjs.Ease.get(1)).to({scaleX:1.15,scaleY:1.15},10,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-146.1,-57.3,238.4,119.1);


(lib.Символ67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ64();
	this.instance.parent = this;
	this.instance.setTransform(0,-52.9);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-1.5,alpha:1},9,cjs.Ease.get(1)).wait(40).to({y:-52.9,alpha:0},9,cjs.Ease.get(1)).wait(27));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-151,-84.1,306,72.1);


(lib.Символ60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ57();
	this.instance.parent = this;
	this.instance.setTransform(0,-1.1,1.344,1.344);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ60, new cjs.Rectangle(-150.2,-29.5,304,64.2), null);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ44();
	this.instance.parent = this;
	this.instance.setTransform(-14,2,1,1,0,0,0,-14,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0,regY:0,rotation:12.5,x:0.1,y:3.1},0).wait(1).to({rotation:25.1,x:-0.5,y:6.1},0).wait(1).to({rotation:37.6,x:-1.7,y:8.9},0).wait(1).to({rotation:50.1,x:-3.5,y:11.5},0).wait(1).to({rotation:62.6,x:-5.8,y:13.5},0).wait(1).to({rotation:75.1,x:-8.5,y:15},0).wait(1).to({rotation:87.6,x:-11.4,y:15.9},0).wait(1).to({rotation:100,x:-14.5,y:16.1},0).wait(1).to({rotation:112.5,x:-17.5,y:15.7},0).wait(1).to({rotation:124.9,x:-20.4,y:14.6},0).wait(1).to({rotation:137.4,x:-23,y:12.9},0).wait(1).to({rotation:149.8,x:-25.1,y:10.8},0).wait(1).to({rotation:162.3,x:-26.7,y:8.2},0).wait(1).to({rotation:174.7,x:-27.8,y:5.3},0).wait(1).to({rotation:187.1,x:-28.1,y:2.3},0).wait(1).to({rotation:199.5,x:-27.9,y:-0.8},0).wait(1).to({rotation:211.9,x:-26.9,y:-3.7},0).wait(1).to({rotation:224.3,x:-25.4,y:-6.3},0).wait(1).to({rotation:236.7,x:-23.4,y:-8.6},0).wait(1).to({rotation:249,x:-20.9,y:-10.4},0).wait(1).to({rotation:261.4,x:-18.1,y:-11.5},0).wait(1).to({rotation:273.8,x:-15.1,y:-12.1},0).wait(1).to({rotation:286.1,x:-12,y:-12},0).wait(1).to({rotation:298.4,x:-9.1,y:-11.3},0).wait(1).to({rotation:310.8,x:-6.4,y:-9.9},0).wait(1).to({rotation:323.1,x:-4,y:-8},0).wait(1).to({rotation:335.4,x:-2.1,y:-5.6},0).wait(1).to({rotation:347.7,x:-0.7,y:-2.9},0).wait(1).to({rotation:360,x:0,y:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.5,-21,49,42);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// dollar.png - копия: 2
	this.instance = new lib.Символ47();
	this.instance.parent = this;
	this.instance.setTransform(276.6,164);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(37).to({_off:false},0).to({x:-472.6,y:-86},40).wait(1).to({x:276.6,y:-96},0).to({x:-472.6,y:84},14).to({_off:true},10).wait(2));

	// dollar.png - копия: 2 - копия
	this.instance_1 = new lib.Символ48();
	this.instance_1.parent = this;
	this.instance_1.setTransform(261.6,-58);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(37).to({_off:false},0).to({x:-482.6,y:13},64).to({_off:true},1).wait(2));

	// dollar.png - копия: 2
	this.instance_2 = new lib.Символ47();
	this.instance_2.parent = this;
	this.instance_2.setTransform(276.6,74);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(31).to({_off:false},0).to({x:-472.6,y:-26},15).wait(1).to({x:276.6,y:74},0).to({x:-472.6,y:84},40).to({_off:true},16).wait(1));

	// dollar.png - копия: 2
	this.instance_3 = new lib.Символ48();
	this.instance_3.parent = this;
	this.instance_3.setTransform(261.6,-58);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({_off:false},0).to({x:-482.6,y:13},71).to({_off:true},1).wait(13));

	// dollar.png - копия
	this.instance_4 = new lib.Символ47();
	this.instance_4.parent = this;
	this.instance_4.setTransform(276.6,74);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(25).to({_off:false},0).to({x:-472.6,y:-26},34).wait(1).to({x:276.6,y:74},0).to({x:-472.6,y:84},34).wait(10));

	// dollar.png - копия: 2
	this.instance_5 = new lib.Символ48();
	this.instance_5.parent = this;
	this.instance_5.setTransform(261.6,-58);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(25).to({_off:false},0).to({x:-482.6,y:13},78).wait(1));

	// dollar.png
	this.instance_6 = new lib.Символ47();
	this.instance_6.parent = this;
	this.instance_6.setTransform(276.6,74);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:-472.6,y:-26},34).wait(1).to({x:276.6,y:74},0).to({x:-472.6,y:84},34).to({_off:true},10).wait(25));

	// dollar.png
	this.instance_7 = new lib.Символ48();
	this.instance_7.parent = this;
	this.instance_7.setTransform(261.6,-58);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:-482.6,y:13},78).to({_off:true},1).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(237.1,-79,64,174);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ33();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:-18.5},0).wait(1).to({rotation:-36.9},0).wait(1).to({rotation:-55.4},0).wait(1).to({rotation:-73.8},0).wait(1).to({rotation:-92.3},0).wait(1).to({rotation:-110.8},0).wait(1).to({rotation:-129.2},0).wait(1).to({rotation:-147.7},0).wait(1).to({rotation:-166.2},0).wait(1).to({rotation:-184.6},0).wait(1).to({rotation:-203.1},0).wait(1).to({rotation:-221.5},0).wait(1).to({rotation:-240},0).wait(1).to({rotation:-258.5},0).wait(1).to({rotation:-276.9},0).wait(1).to({rotation:-295.4},0).wait(1).to({rotation:-313.8},0).wait(1).to({rotation:-332.3},0).wait(1).to({rotation:-350.8},0).wait(1).to({rotation:-369.2},0).wait(1).to({rotation:-387.7},0).wait(1).to({rotation:-406.2},0).wait(1).to({rotation:-424.6},0).wait(1).to({rotation:-443.1},0).wait(1).to({rotation:-461.5},0).wait(1).to({rotation:-480},0).wait(1).to({rotation:-498.5},0).wait(1).to({rotation:-516.9},0).wait(1).to({rotation:-535.4},0).wait(1).to({rotation:-553.8},0).wait(1).to({rotation:-572.3},0).wait(1).to({rotation:-590.8},0).wait(1).to({rotation:-609.2},0).wait(1).to({rotation:-627.7},0).wait(1).to({rotation:-646.2},0).wait(1).to({rotation:-664.6},0).wait(1).to({rotation:-683.1},0).wait(1).to({rotation:-701.5},0).wait(1).to({rotation:-720},0).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ34();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({rotation:9.2},0).wait(1).to({rotation:18.5},0).wait(1).to({rotation:27.7},0).wait(1).to({rotation:36.9},0).wait(1).to({rotation:46.2},0).wait(1).to({rotation:55.4},0).wait(1).to({rotation:64.6},0).wait(1).to({rotation:73.8},0).wait(1).to({rotation:83.1},0).wait(1).to({rotation:92.3},0).wait(1).to({rotation:101.5},0).wait(1).to({rotation:110.8},0).wait(1).to({rotation:120},0).wait(1).to({rotation:129.2},0).wait(1).to({rotation:138.5},0).wait(1).to({rotation:147.7},0).wait(1).to({rotation:156.9},0).wait(1).to({rotation:166.2},0).wait(1).to({rotation:175.4},0).wait(1).to({rotation:184.6},0).wait(1).to({rotation:193.8},0).wait(1).to({rotation:203.1},0).wait(1).to({rotation:212.3},0).wait(1).to({rotation:221.5},0).wait(1).to({rotation:230.8},0).wait(1).to({rotation:240},0).wait(1).to({rotation:249.2},0).wait(1).to({rotation:258.5},0).wait(1).to({rotation:267.7},0).wait(1).to({rotation:276.9},0).wait(1).to({rotation:286.2},0).wait(1).to({rotation:295.4},0).wait(1).to({rotation:304.6},0).wait(1).to({rotation:313.8},0).wait(1).to({rotation:323.1},0).wait(1).to({rotation:332.3},0).wait(1).to({rotation:341.5},0).wait(1).to({rotation:350.8},0).wait(1).to({rotation:360},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33,-33.3,66,66.6);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ32();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ35, new cjs.Rectangle(-33,-33.3,66,66.6), null);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ30();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-709.9},46).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-830.8,-234.4,1692.4,434.5);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 14
	this.instance = new lib.Символ14();
	this.instance.parent = this;
	this.instance.setTransform(52.5,14.5,1,1,0,0,0,17.5,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-8.7,x:52.6},4,cjs.Ease.get(1)).to({rotation:0,x:52.5},5,cjs.Ease.get(1)).wait(1));

	// Символ 20
	this.instance_1 = new lib.Символ20();
	this.instance_1.parent = this;
	this.instance_1.setTransform(60.6,-56.1,1,1,0,0,0,60.6,-56.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-3.5,x:57.7,y:-53.1},4,cjs.Ease.get(1)).to({rotation:0,x:60.6,y:-56.1},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73,-61,146,122);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ6();
	this.instance.parent = this;
	this.instance.setTransform(-12.9,3.8);

	this.instance_1 = new lib.Символ10();
	this.instance_1.parent = this;
	this.instance_1.setTransform(16.9,-7.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ24, new cjs.Rectangle(-39.9,-29.7,79.8,59.5), null);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ24();
	this.instance.parent = this;
	this.instance.setTransform(5,-24.5,1,1,0,0,0,5,-24.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:-37.1,x:20.3,y:-21.4},5,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:-83.5,x:39.4,y:-17.5},5,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:-46.4,x:24.2,y:-20.5},4,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:0,x:5,y:-24.5},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.9,-29.7,79.8,59.5);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.parent = this;
	this.instance.setTransform(-0.2,-31,1,1,0.1,0,0,-2,-32.8);

	this.instance_1 = new lib.Символ12();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-15.9,-24.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(-36.4,-44.4,72.8,89), null);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ22();
	this.instance.parent = this;
	this.instance.setTransform(-28.6,-37.5,1,1,0,0,0,-28.6,-37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:-37.6,scaleX:1,scaleY:1,rotation:40.4,x:-28.5,y:-37.6},5,cjs.Ease.get(-1)).to({regY:-37.5,scaleX:1,scaleY:1,rotation:90.8,x:-62.9,y:-27},5,cjs.Ease.get(1)).to({regY:-37.4,scaleX:1,scaleY:1,rotation:50.4,x:-28.6,y:-37.5},4,cjs.Ease.get(-1)).to({regY:-37.5,scaleX:1,scaleY:1,rotation:0},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.4,-44.4,72.8,89);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:3.5},5,cjs.Ease.get(-1)).to({y:0},4,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.5,-39,83,78);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// den_06.png
	this.instance = new lib.Символ4();
	this.instance.parent = this;
	this.instance.setTransform(26.5,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// den_33.png
	this.instance_1 = new lib.Символ23();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.8,88.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// den_27.png
	this.instance_2 = new lib.Символ21();
	this.instance_2.parent = this;
	this.instance_2.setTransform(86.4,84.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// den_16.png
	this.instance_3 = new lib.Символ25();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-47,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// den_13.png
	this.instance_4 = new lib.Символ16();
	this.instance_4.parent = this;
	this.instance_4.setTransform(23.5,31);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// den_10.png
	this.instance_5 = new lib.Символ18();
	this.instance_5.parent = this;
	this.instance_5.setTransform(53.5,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(-120,-87,242.8,216), null);


(lib.Символ80 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ79();
	this.instance.parent = this;
	this.instance.setTransform(-29.2,2.2,1,1,0,0,0,-29.2,2.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ80, new cjs.Rectangle(-146.1,-57.3,238.4,119.1), null);


(lib.Символ61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ67();
	this.instance.parent = this;
	this.instance.setTransform(-0.7,61.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ60();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ61, new cjs.Rectangle(-151.7,-29.5,305.5,76.9), null);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ39();
	this.instance.parent = this;
	this.instance.setTransform(-18,-17,1,1,0,0,0,-18,-17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0,regY:0,rotation:9.2,x:-3,y:2.7},0).wait(1).to({rotation:18.5,x:-6.3,y:4.8},0).wait(1).to({rotation:27.7,x:-10,y:6.4},0).wait(1).to({rotation:36.9,x:-13.8,y:7.4},0).wait(1).to({rotation:46.2,x:-17.8,y:7.8},0).wait(1).to({rotation:55.4,x:-21.8,y:7.5},0).wait(1).to({rotation:64.6,x:-25.6,y:6.5},0).wait(1).to({rotation:73.8,x:-29.3,y:5},0).wait(1).to({rotation:83.1,x:-32.7,y:2.9},0).wait(1).to({rotation:92.3,x:-35.7,y:0.3},0).wait(1).to({rotation:101.5,x:-38.3,y:-2.8},0).wait(1).to({rotation:110.8,x:-40.3,y:-6.2},0).wait(1).to({rotation:120,x:-41.7,y:-9.9},0).wait(1).to({rotation:129.2,x:-42.6,y:-13.8},0).wait(1).to({rotation:138.5,x:-42.7,y:-17.8},0).wait(1).to({rotation:147.7,x:-42.3,y:-21.7},0).wait(1).to({rotation:156.9,x:-41.2,y:-25.6},0).wait(1).to({rotation:166.2,x:-39.5,y:-29.2},0).wait(1).to({rotation:175.4,x:-37.3,y:-32.5},0).wait(1).to({rotation:184.6,x:-34.6,y:-35.4},0).wait(1).to({rotation:193.8,x:-31.4,y:-37.8},0).wait(1).to({rotation:203.1,x:-27.9,y:-39.7},0).wait(1).to({rotation:212.3,x:-24.1,y:-41},0).wait(1).to({rotation:221.5,x:-20.2,y:-41.7},0).wait(1).to({rotation:230.8,x:-16.2},0).wait(1).to({rotation:240,x:-12.3,y:-41.1},0).wait(1).to({rotation:249.2,x:-8.5,y:-39.9},0).wait(1).to({rotation:258.5,x:-4.9,y:-38},0).wait(1).to({rotation:267.7,x:-1.7,y:-35.7},0).wait(1).to({rotation:276.9,x:1,y:-32.8},0).wait(1).to({rotation:286.2,x:3.3,y:-29.6},0).wait(1).to({rotation:295.4,x:5.1,y:-26},0).wait(1).to({rotation:304.6,x:6.2,y:-22.2},0).wait(1).to({rotation:313.8,x:6.7,y:-18.2},0).wait(1).to({rotation:323.1,x:6.6,y:-14.2},0).wait(1).to({rotation:332.3,x:5.8,y:-10.3},0).wait(1).to({rotation:341.5,x:4.5,y:-6.6},0).wait(1).to({rotation:350.8,x:2.5,y:-3.1},0).wait(1).to({rotation:360,x:0,y:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33,-33.3,66,66.6);


(lib.Символ41 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ42();
	this.instance.parent = this;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ35();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-480.1},69,cjs.Ease.get(1)).to({x:0},70,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33,-33.3,66,66.6);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.parent = this;
	this.instance.setTransform(-1.4,-20.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ26, new cjs.Rectangle(-121.4,-107.9,242.8,216), null);


(lib.Символ62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ61();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.07,scaleY:1.07},8,cjs.Ease.get(-1)).to({scaleX:1.15,scaleY:1.15},8,cjs.Ease.get(1)).to({scaleX:1.07,scaleY:1.07},10,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-151.7,-29.5,305.5,76.9);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ36();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:206.1},49,cjs.Ease.get(1)).to({y:0},50,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33,-33.3,66,66.6);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ26();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:13.5},4,cjs.Ease.get(1)).to({y:0},5,cjs.Ease.get(1)).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ28();
	this.instance_1.parent = this;
	this.instance_1.setTransform(34,120,1.323,0.289);
	this.instance_1.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:2.54,alpha:0.191},4,cjs.Ease.get(1)).to({scaleX:1.32,alpha:0.102},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.4,-107.9,242.8,241);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ27();
	this.instance.parent = this;
	this.instance.setTransform(-217.6,21);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-142.1},30,cjs.Ease.get(-1)).to({x:-61.6},32,cjs.Ease.get(1)).to({x:-144.6},33,cjs.Ease.get(-1)).to({x:-217.6},29,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-339,-87,242.8,241);


(lib.Символ63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ62();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-8},7,cjs.Ease.get(-1)).to({rotation:1},9,cjs.Ease.get(1)).to({rotation:11.3},10,cjs.Ease.get(-1)).to({rotation:0},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-151.7,-29.5,305.5,76.9);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ37();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ38, new cjs.Rectangle(-33,-33.3,66,66.6), null);


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

	// Слой 2
	this.instance = new lib.Символ74();
	this.instance.parent = this;
	this.instance.setTransform(-132.8,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:65.2},7).wait(1).to({y:0.7},7).wait(1));

	// Слой 7
	this.instance_1 = new lib.Символ80();
	this.instance_1.parent = this;
	this.instance_1.setTransform(218,-111.1);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-141.7,alpha:1},7,cjs.Ease.get(1)).wait(1).to({y:-173.9,alpha:0},7,cjs.Ease.get(1)).wait(1));

	// Слой 6
	this.instance_2 = new lib.Символ63();
	this.instance_2.parent = this;
	this.instance_2.setTransform(345.5,-129.5,0.798,0.798);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:-191.2,alpha:0},7,cjs.Ease.get(1)).wait(1).to({y:-129.5,alpha:1},7,cjs.Ease.get(1)).wait(1));

	// Слой 5
	this.instance_3 = new lib.Символ43();
	this.instance_3.parent = this;
	this.instance_3.setTransform(359.5,-67);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(16));

	// Слой 3
	this.instance_4 = new lib.Символ38();
	this.instance_4.parent = this;
	this.instance_4.setTransform(463.8,-137.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({alpha:0},7,cjs.Ease.get(1)).wait(1).to({alpha:1},7,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_5 = new lib.Символ2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(217.7,-33.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:0.1,regY:-0.1,scaleX:1.11,scaleY:1.11,x:313.7,y:-2.9},7,cjs.Ease.get(1)).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:217.7,y:-33.4},7,cjs.Ease.get(1)).wait(1));

	// Слой 2
	this.instance_6 = new lib.Символ31();
	this.instance_6.parent = this;
	this.instance_6.setTransform(596.5,2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:0.1,regY:0.1,scaleX:1.11,scaleY:1.11,x:607,y:36.6},7,cjs.Ease.get(1)).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:596.5,y:2},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-234.3,-232.4,1692.4,434.5);


// stage content:
(lib._600x300 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		
		stage.canvas.style.cursor = "none";
		this.prizel.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
			this.prizel.x = stage.mouseX/window.devicePixelRatio;
			this.prizel.y = stage.mouseY/window.devicePixelRatio;
		}
		
		
		
		
		var _this = this;
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		  function fl_MouseOverHandler_5()
		{
		    _this.prizel.gotoAndStop(1);
			_this.main.gotoAndPlay(1);
		}
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		  function fl_MouseOutHandler_2()
		{
		    _this.prizel.gotoAndStop(0);
			_this.main.gotoAndPlay(9);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 2
	this.prizel = new lib.Символ41();
	this.prizel.parent = this;
	this.prizel.setTransform(-345,134.1);

	this.timeline.addTween(cjs.Tween.get(this.prizel).wait(1));

	// Слой 1
	this.main = new lib.Символ29();
	this.main.parent = this;
	this.main.setTransform(130.5,184.5,1,1,0,0,0,48.1,0);

	this.timeline.addTween(cjs.Tween.get(this.main).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(148,102,1692.4,434.5);
// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg?1486714501163", id:"bg"},
		{src:"images/den_03.png?1486714501163", id:"den_03"},
		{src:"images/den_06.png?1486714501163", id:"den_06"},
		{src:"images/den_10.png?1486714501163", id:"den_10"},
		{src:"images/den_13.png?1486714501163", id:"den_13"},
		{src:"images/den_133.png?1486714501163", id:"den_133"},
		{src:"images/den_16.png?1486714501163", id:"den_16"},
		{src:"images/den_21.png?1486714501163", id:"den_21"},
		{src:"images/den_24.png?1486714501163", id:"den_24"},
		{src:"images/den_27.png?1486714501163", id:"den_27"},
		{src:"images/den_33.png?1486714501163", id:"den_33"},
		{src:"images/dollar.png?1486714501163", id:"dollar"},
		{src:"images/sfdbsdfgsg6.png?1486714501163", id:"sfdbsdfgsg6"},
		{src:"images/ten.png?1486714501163", id:"ten"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;