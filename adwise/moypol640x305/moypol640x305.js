(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.background = function() {
	this.initialize(img.background);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,400);


(lib.golova = function() {
	this.initialize(img.golova);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,99,139);


(lib.levbedro = function() {
	this.initialize(img.levbedro);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,157,131);


(lib.levnoga = function() {
	this.initialize(img.levnoga);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,149,88);


(lib.levplecho = function() {
	this.initialize(img.levplecho);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,128,98);


(lib.levruka = function() {
	this.initialize(img.levruka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,103,75);


(lib.mo4a = function() {
	this.initialize(img.mo4a);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,387,290);


(lib.pravbedro = function() {
	this.initialize(img.pravbedro);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,98,197);


(lib.pravnoga = function() {
	this.initialize(img.pravnoga);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,49,117);


(lib.pravplecho = function() {
	this.initialize(img.pravplecho);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,159,116);


(lib.pravruka = function() {
	this.initialize(img.pravruka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,213,114);


(lib.shlang = function() {
	this.initialize(img.shlang);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,182,200);


(lib.telo = function() {
	this.initialize(img.telo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,348,197);


(lib.vedro = function() {
	this.initialize(img.vedro);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,244,175);


(lib.w256h2561380453915MouseOptions256x25632 = function() {
	this.initialize(img.w256h2561380453915MouseOptions256x25632);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,256,256);// helper functions:

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


(lib.Символ53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AHcDgQgUgJgLgSQgMgSgBgSQgCgTAJgNQAKgPATgDQAQAJAfAFQAgAEAdgGQAigGARgTQAJgKAEgOQADgPgDgSQgLAKgXAIQgWAHgZACQgbACgWgDQgZgEgOgKQgYgRgMgdQgKgWgDglIgEhFQgCgsgFgbQAGgOAQgMQAQgMAUgFQAWgGATAFQAWAFAOARQAQASACAeIgBA+QABBKAagBQAmgBgOiTQgBgYAPgPQANgPAVgEQAVgFAVAFQAVAGANANQAOAQAIAlQAFAdACAoQAFCZgVBCQgJAZgMAUQgOAWgTAPQgUAQgaAJQgbAJgjACIgUAAQg9AAgggRgAnfDwQgegBgRgRQgLgKgFgPQgGgQAAgWIAAkbQgBgKgcACQgcADgIAMQAFCBAABZQATCKhhAAQgaAAgQgJQgPgHgHgQQgKgTgBg2IAAj5QAAgxgGgoQAfgNBJgNQAxgHA6gDQAigBAaADQAfAEAVAIQAXAJAMARQANASgBAZQAAEeACBMQgIANgYALQgZALgZAAIgCAAgAEADoQgOgGgHgNQgGgMgCgSIgDiEQgiAIgcAAIABCUQgWAfg8AAQgZAAgOgGQgOgGgHgNQgJgRgBg0IgBkIQAAg7gGgqQAzgTAfAAQAiAAATAPQAKAIAGANQAFANAAASIAACAQAogDAYgGIgBhtQgBgfAKgQQAIgOAPgIQASgIAcAAQAhAAATAPQALAIAFANQAGANgBASQAGEmgDBWQgVAfg8AAQgZAAgPgGgAkHDsQghgCgTgMQgRgMgIgVQgJgaABhRIgBibQgChfgHhEICTgEQBUAAAkAEQAYAFANAUQANATgBAYQAAAYgOAPQgPARgZgBQhHgCgiACIAAA7QApAEA/gCQAVAAAOARQAMAPABAVQABAWgMAOQgNARgXAAIhnACIAAA0QAaAEAogBQAngBAvgHQANAgACAZQABAXgJARQgKAQgTAJQgSAJgcACQgsACglAAQglAAgegCg");
	this.shape.setTransform(76.8,24.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ53, new cjs.Rectangle(0,0,153.6,48.3), null);


(lib.Символ52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Aj5EyQgNgEgJgJQgNgMgHgYIgXiUIgNhXQgJgrgIgUQAUDfAAArQAAAUgFAQQgGAPgLALQgKALgOAGQgOAGgQAAQgSAAgOgHQgOgGgKgNQgJgMgFgRQgFgRABgVIABkFQgBgrgIg3QAVgJAdgHQAkgIAfgBQAngBAbALQAPAGALALQALAKAHAQQAHAPAGAmIAMBJIAPB3QAThmAPhkQAEgZALgTQAKgSAPgNQAOgLASgGQARgGASAAQASAAARAGQARAFANALQAOALAJAPQAJARADAUQAEBmABBEIACBmQACA2AFAhQgIAOgVAKQgUAKgaAAQgXAAgPgIQgOgHgJgNQgNgTgBgdQgDgYADhXQAEhtAAg2QgfDVgGBFQgCASgHAOQgHAOgKAIQgUAQgaAAQgTAAgPgFgAqxE2QhJgIgoggQgQgMgNgRQgPgSgJgWQgLgZgGgeQgGgfgBgmQgBgmAMg+QAJgcAcgtQAXgcAggTQAegQAigGQAhgGAfAFQAgAFAYAOQAaAPANAWQAPAZgBAdQgBAOgJANQgIALgNAJQgNAIgQACQgRAEgPgEQADgXgNgNQgLgLgRABQgPAAgNAKQgMAKgIATQgIAQgEAWQgDAWABAXQACAYAFAVQAHAWALAQQALARAPAIQARAJAVgCQAZgDASgHQAYgKAggYQAPADAJAJQAJAIABANQADAZgWAfQgLAPgPANQgRAOgUAKQgVALgYAFQgWAFgXAAIgIAAgADJExQgkgIgagVQgOgNgMgRQgMgSgJgXQgJgZgFgfQgFghAAgoQAAgrAOhEQAHgYAKgTQAKgTANgPQANgPAPgKQAPgLASgHQAjgOAsAAQAqAAAhANQASAGAPALQAPAKAMAPQANAPAKASQAKAUAHAXQAPBFAAAtQAAAngFAhQgFAegKAZQgJAXgNASQgMARgPAMQgbAVgkAJQgbAHgiAAIgKAAQgeAAgXgFgAELgvQgPAAgKAVQgOAtAAA0QgBA5ALA1QAIAYAUAAQAKAAAIgIQAHgJAFgRQALgjAAhBQAAh3giAAIgGABgAInExQgQgEgKgLQgKgLgFgSQgFgTgBgbQgEiTAAh3QgBgjgIg/QA3gUAfAAQAiAAARAPQAJAIAFANQAFANAAASIgEDNQAPg+AviUQALgjAWgOQAVgNApAAQAiAAATARQAKAIAFANQAGANAAAQIAAEVQACBVAEAQQgHANgWAJQgZALgjAAQgVAAgOgGQgMgGgHgMQgKgRAAgtIACi2QgIATgLA0QgOA8gJAcQgUA4gQATQgNAQgPAIQgQAJgTABIgEAAQgTAAgOgEgAJ3i4QgVgFgPgKQgNgLgHgOQgHgOABgPQABgPAJgOQAJgPATgMQAyATAbACQAWACAXgFQAZgFAbgOQATANAHAQQAHAPgDAPQgEAPgMANQgLAMgSAJQg7ATggACIgJAAQgTAAgQgDg");
	this.shape.setTransform(88,31.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ52, new cjs.Rectangle(0,0,176,62.3), null);


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AA8QmIAAiQIATAAIAACQgAhCQmIAAiQIATAAIAAA7IAmAAQAMAAAJADQAKADAGAGQAGAFADAIQADAIAAAKQAAAJgDAIQgDAIgGAFQgFAGgJADQgIADgKAAgAgvQVIAoAAIAKgBQAFgCAEgDQAEgDACgEQACgFAAgHQAAgIgCgEQgDgFgEgDQgEgDgGgCIgMgBIgkAAgAAnNpIAAgfIhjAAIAAAfIgSAAIAAgwIANAAIAHgUIAGghIAEhKIBZAAIAAB/IAQAAIAAAwgAgmMjIgHAWIBCAAIAAhuIgzAAgAgZJuQgKgDgIgFQgIgFgFgHQgGgIgEgIQgEgIgCgJIgBgTQAAgRAEgOQAFgNAJgKQAJgKANgGQANgFARAAQAPAAANAFQANAGAJAKQAJAKAFANQAFAOAAARQAAAJgCAKQgCAJgEAIQgEAIgFAIQgGAHgIAFQgIAFgKADQgKADgKAAQgMAAgKgDgAgZHwQgJAEgHAIQgGAIgEAKQgDALAAANQAAANADALQADALAGAHQAHAIAJAEQAKAFANAAQALAAAKgFQAKgEAGgIQAGgHADgLQADgLAAgNQAAgNgDgLQgDgKgHgIQgGgIgKgEQgJgFgLAAQgNAAgJAFgAhCGSIAAiQIBCABIALACIAKAEIAIAHQADAEACAGQACAFAAAHIgBAIIgDAJIgGAIQgDADgGACIAJAEIAJAHQADAEADAGQACAGAAAIIgBAKIgEAKIgGAJIgJAHQgGADgHACQgIACgIAAgAgvGBIAmAAQAJAAAGgCQAGgCAEgDQAEgDACgFQACgEAAgGQAAgGgCgEQgCgFgEgDQgEgDgGgCQgGgCgJAAIgmAAgAgvE/IAkAAQAJAAAFgBQAGgCADgDQADgDABgFIABgJQAAgFgBgEQgCgEgDgCQgEgDgGgCQgEgBgIAAIgkAAgAhCglIAAiQIA8AAQALAAAIADQAJADAGAGQAFAFADAIQADAIAAAJQAAAKgDAHQgDAIgFAGQgGAFgJADQgIADgLAAIgpAAIAAA8gAgvhyIAnAAQAOAAAHgGQAHgHAAgMQAAgMgHgHQgHgGgOAAIgnAAgAgZkBQgKgDgIgFQgIgFgFgHQgGgIgEgIQgEgIgCgJIgBgTQAAgRAEgOQAFgNAJgKQAJgKANgGQANgFARAAQAPAAANAFQANAGAJAKQAJAKAFANQAFAOAAARQAAAJgCAKQgCAJgEAIQgEAIgFAIQgGAHgIAFQgIAFgKADQgKADgKAAQgMAAgKgDgAgZl/QgJAEgHAIQgGAIgEAKQgDALAAANQAAANADALQADALAGAHQAHAIAJAEQAKAFANAAQALAAAKgFQAKgEAGgIQAGgHADgLQADgLAAgNQAAgNgDgLQgDgKgHgIQgGgIgKgEQgJgFgLAAQgNAAgJAFgAAcndIAAh/IhLAAIAAB/IgTAAIAAiQIBxAAIAACQgAAdq5IgPgsIg3AAIgQAsIgVAAIA2iSIAXAAIAzCSgAAJr0IgVhAIgZBAIAuAAgAAcuVIAAhEIhLAAIAABEIgTAAIAAiQIATAAIAAA7IBLAAIAAg7IATAAIAACQg");
	this.shape.setTransform(10.2,109.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ50, new cjs.Rectangle(2.4,3.1,15.8,212.4), null);


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(0.2,1,1).p("Ag9gBIB7AAIAAADIh7AAg");
	this.shape.setTransform(27.2,2.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("Ag9ACIAAgDIB7AAIAAADg");
	this.shape_1.setTransform(27.2,2.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("ABdAlIgTgfIgUAfIgNAAIAaglIgYgjIANAAIASAcIASgcIAMAAIgZAjIAaAlgAAcAlIgIgXIgbAAIgIAXIgKAAIAahIIALAAIAbBIgAASAGIgMgeIgLAeIAXAAgAgrAlIAAg9IgVA9IgKAAIgVg9IABA9IgKAAIAAhIIAOAAIAVA8IAVg8IAOAAIAABIg");
	this.shape_2.setTransform(12.3,5.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ49, new cjs.Rectangle(1.8,1.3,32.7,7.5), null);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#3399FF"],[0,1],-18.9,0,19,0).s().p("Ai8VzMAAAgrlIF5AAMAAAArlg");
	this.shape.setTransform(18.9,139.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ46, new cjs.Rectangle(0,0,37.9,278.9), null);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Eg1oAaaMAAAg0zMBrRAAAMAAAA0zg");
	this.shape.setTransform(343.3,169);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ43, new cjs.Rectangle(0,0,686.7,338), null);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33CCFF").s().p("AgfClIAAjCIgeAAIA0iHIAXAAIAwCIIgbAAIAADBg");
	this.shape.setTransform(6.2,16.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ41, new cjs.Rectangle(0,0,12.3,33), null);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shlang();
	this.instance.parent = this;
	this.instance.setTransform(72.7,6.2,0.601,0.66,27.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ38, new cjs.Rectangle(12.3,6.2,157.7,167.5), null);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgjAkQgPgPAAgVQAAgUAPgPQAPgPAUAAQAVAAAPAPQAPAPgBAUQABAVgPAPQgPAPgVgBQgUABgPgPg");
	this.shape.setTransform(5.1,5.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ31, new cjs.Rectangle(0,0,10.1,10.1), null);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#66CC00").ss(2,1,1).p("AC+AAQAABPg4A3Qg3A4hPAAQhOAAg3g4Qg4g3AAhPQAAhOA4g3QA3g4BOAAQBPAAA3A4QA4A3AABOg");
	this.shape.setTransform(19,19);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ30, new cjs.Rectangle(-1,-1,39.9,39.9), null);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(2,1,1).p("AEEAAQAABshMBMQhMBMhsAAQhrAAhMhMQhMhMAAhsQAAhrBMhMQBMhMBrAAQBsAABMBMQBMBMAABrg");
	this.shape.setTransform(26,26);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ29, new cjs.Rectangle(-1,-1,54,54), null);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#115603","#45AF35"],[0,0.549],0,18.6,0,-18.6).s().p("ABmDwQgeAAgSgSQgKgJgFgPQgGgRAAgVIAAkbQgBgLgcADQgbACgIANQAFCBgBBZQAUCJhhAAQgaAAgQgIQgPgIgIgPQgJgTgCg3IAAj5QAAgwgFgpQAfgMBJgOQAxgHA5gCQAhgBAbADQAeADAWAIQAXAKAMAQQANASgBAaQAAEeACBMQgIANgZAKQgYALgZAAIgCAAg");
	this.shape.setTransform(18.6,24.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#115603","#45AF35"],[0,0.549],0,16.3,0,-16.2).s().p("AhDDtQghgCgTgMQgRgLgIgVQgJgbABhQIgBibQgChfgHhEICTgEQBTAAAkADQAYAFANAVQANATgBAXQAAAYgOAPQgPASgZgBQhHgDghADIAAA7QAoAEA/gDQAVAAAOARQAMAQABAUQABAWgMAPQgNARgXAAIhmABIAAA0QAZAFAogBQAngCAvgHQANAhACAYQABAYgJAQQgKAQgTAJQgSAJgcACQgsACgkAAQglAAgegCg");
	this.shape_1.setTransform(57.2,24);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#115603","#45AF35"],[0,0.549],0,18.7,0,-18.7).s().p("ABBDpQgOgGgHgNQgGgLgDgTIgCiDQghAHgcAAIABCUQgWAgg8AAQgZAAgPgHQgNgGgIgNQgJgQgBg0IAAkIQgBg8gFgpQAzgUAfAAQAiAAATAQQAKAIAFAMQAGAOAAASIAAB/QAmgDAZgFIgBhuQgBgeAKgRQAIgNAOgIQASgJAcAAQAiAAATAQQALAIAFAMQAGAOgBASQAGElgDBWQgVAgg8AAQgZAAgPgHg");
	this.shape_2.setTransform(95.9,24);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#115603","#45AF35"],[0,0.549],0,17.8,0,-17.8).s().p("AhxDgQgTgKgMgSQgLgRgCgSQgBgTAJgOQAJgOAUgEQAPAKAfAEQAhAFAdgGQAhgHAQgSQAKgLADgOQAEgOgDgTQgMALgWAHQgVAHgaACQgaADgXgEQgYgEgOgKQgZgRgMgcQgJgXgEgkIgDhFQgCgsgFgcQAGgOAQgMQAQgMAUgFQAVgFAUAFQAVAEAPASQAPASACAdIgBA/QABBJAaAAQAmgBgPiTQAAgYAOgQQANgOAWgFQAUgEAVAFQAWAFANAOQAOAQAHAkQAGAeABAnQAGCZgWBCQgIAagNAUQgOAWgSAPQgUAQgaAJQgcAJgiABIgTABQg9AAghgRg");
	this.shape_3.setTransform(135.7,24.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ25, new cjs.Rectangle(0,0,153.6,48.3), null);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#115603","#45AF35"],[0,0.549],0,18.6,0,-18.5).s().p("AAFDwQhJgIgoggQgQgMgNgRQgOgSgKgWQgLgZgFgeQgHgfAAgmQgCglANg/QAIgcAdgtQAWgcAhgTQAdgQAigGQAggGAgAFQAfAFAZAOQAZAPAOAWQAOAZgBAdQgBAOgIANQgIALgOAJQgNAIgQADQgQAEgPgEQACgYgNgNQgKgLgRABQgQAAgMAKQgLAKgJATQgIARgDAWQgEAWACAWQABAYAGAVQAGAWALAQQALARAPAIQARAJAUgCQAagDARgHQAZgKAfgYQAQADAJAJQAIAIACANQADAZgWAfQgLAPgQANQgQAOgUAKQgWALgYAFQgVAFgXAAIgIAAg");
	this.shape.setTransform(18.5,38.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#115603","#45AF35"],[0,0.549],0,23.3,0,-23.2).s().p("AgbDsQgNgFgJgIQgNgNgHgXIgXiUIgNhXQgJgsgIgTQAUDfAAArQAAATgFAQQgGAQgLALQgLALgOAFQgNAGgQAAQgSAAgPgGQgNgHgKgMQgJgMgFgRQgFgRAAgVIACkGQgCgqgHg4QAVgJAdgGQAjgJAggBQAngBAbAMQAOAGAMAKQALALAHAPQAGAQAHAlIAMBLIANB1QAUhlAPhkQAEgZALgUQAJgSAPgMQAPgMARgGQASgGASABQASAAARAFQARAGANAKQAOALAKAQQAJAQACAUQAEBnACBEIACBlQABA3AGAgQgIAPgVAKQgWAKgZAAQgXAAgQgJQgNgGgKgNQgNgTAAgdQgDgZADhXQAEhrgBg3QgfDUgFBFQgCATgIAOQgGANgLAJQgTAQgbAAQgRAAgPgFg");
	this.shape_1.setTransform(65.8,38.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#115603","#45AF35"],[0,0.549],0,19.2,0,-19.2).s().p("Ag/DrQgkgIgagVQgOgNgMgRQgMgSgKgXQgIgZgFgfQgFghAAgoQAAgqAOhFQAHgYAKgTQAKgTANgPQAMgPAPgKQAQgLASgHQAigOAsAAQAqAAAhANQASAGAPALQAPAKAMAPQANAPAKASQAKAUAHAXQAPBGAAAsQAAAngGAhQgEAegKAZQgJAXgOASQgLARgQAMQgaAVgkAJQgbAHghAAIgKAAQgeAAgXgFgAACh1QgOAAgKAVQgOAuAAAzQgCA5AMA1QAIAYATAAQAKAAAIgIQAHgJAFgRQAKgjAAhBQAAh3ghAAIgGABg");
	this.shape_2.setTransform(114.5,38.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#115603","#45AF35"],[0,0.549],0,12.2,0,-12.1).s().p("Ag6A9QgVgEgPgKQgNgLgHgOQgHgOABgOQABgQAJgOQAJgPATgMQAyATAbACQAVACAXgFQAZgFAbgOQATANAHAQQAHAPgDAQQgEANgMANQgLANgSAIQg7AUgfABIgJABQgTAAgQgEg");
	this.shape_3.setTransform(157,6.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#115603","#45AF35"],[0,0.549],0,19.5,0,-19.4).s().p("AiGDrQgPgEgKgLQgKgLgFgSQgFgTgBgbQgEiSAAh4QgBgjgJg/QA3gUAfAAQAjAAARAPQAJAIAFANQAEANAAASIgEDNQAQg9AtiVQAMgjAWgOQAVgNApAAQAiAAATARQAKAIAFANQAFANAAAQIAAEVQADBVAEAQQgIANgVAJQgZALgkAAQgVAAgNgGQgNgGgGgMQgKgRAAgtIABi1QgHATgMAzQgNA8gJAcQgUA4gQATQgMAQgPAIQgQAJgTABIgFABQgTAAgOgFg");
	this.shape_4.setTransform(156.5,38.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ24, new cjs.Rectangle(0,0,176,62.3), null);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgcCKQgSAAgOgEIgNgFIgQABQgaAAgQgFQgNgFgMgIQgXgCgSgDQhEgMgpglQgXgUgNgcQgNgbABgeQACgeASgSQARgRAaADQAaACAOATQAEAFAGANQAGAMAEAGQALAOAVAIIAIgFQAVgKAUAGIAMAGQARACANAKIABAAIBtABQAVAAAKgCQASgCAjgLQAYgFAzgGQAsgHAXgTIAIgVQANgZAVgMQAagNAXAKQAQAHAKARQAJAQABATIAAAKQACARgFAQQgDANgIAOIgHANIgIAMQgGALgHAIQgJALgOAJQgZAYgUAPQghAYggAJQgWAFgeABIg2AAIhHAAIgTAAIgMAAg");
	this.shape.setTransform(35.5,13.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(0,0,71,27.7), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.background();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(0,0,700,400), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AIGFBQhAgCiAgMIjMgSQgHAEgJABQgMACgUgFQgmgIgUgGQgfgJgWgOQgPgJgTgPIghgbQgWgSgGgJQgIgNAAgRQAAgGABgGQgLgDgIgJQgLgNgCgUQgFgmASghQAGgKAKgMIATgWIACgDQglgPgmgJIgYgGIgJgDIgJADQgOAFgegEIiQgUQhQgLgrgIQgWgEgKgGQgKgHgGgMQgGgLABgMIgigMIhGgcQgXgJgkgJIg9gOQghgJgMgPQgIgJgBgNQgCgMAEgLQAKgYAZgFQANgCAQAEIAcAJQAPAFAlAIQAiAIASAGQAPAFAiAQQAeAOATAFIAjAJIAiAIIAjAMIAYAFIAYAHQAcAJALATIABADIAdADIBKAIQAdACAQAGQAIACAHAEQARgJAcADQAaACAcAMIAVAKIAUAJIAoALQAYAGANAJQAMAKAHAQQAHAQgDAQQgEAQgMALQgMAJgOABIgGANQgEAGgRATQgOAPgEAMQgCAJAAATIgBAEIAFACQAJAFAOAOQAkAkAYAPQAWAMAhAJIADgCQAMgDAdADQB2ANC2AOQBKAGAlAAIAcAAQAPACAKAGIAFADQANgKAXgGQAPgDAFgFQAGgFAGgOQAEgHAGgFIACgJQAEgUAQgKQANgHAegEIATgHIATgGQAWgEAEgCQAGgDAHgHIALgMQAMgKARABQARAAAMALQAQAQAAAgQAAAagMAPQgKAMgWAGQgaAFgMAFIgYAMQgPAIgKADQgLADgLAAQgEAQgPAVQgRAVgNAHQgIAFgMADIgWAEIgVAFQgNACgJgBQgKgCgJgGQgKAHgPACQgKACgPAAIgIAAg");
	this.shape.setTransform(88.2,32.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(0,0,176.4,64.2), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABbEkQgSgFgVgcQgegngNgdIgBgCIgBgBQgPgQgIgoIgUhgQgGgagBgPIAAgLIgCgHQgEgPABgXQABgZAAgNIgBgiQgEgJgFgHQgLAOgSADQgSAEgQgIQgPgJgGgRQgHgSAGgQQAEgNAPgPQARgPAIgIIASgVQALgMAKgFQAOgIARACQAQABALALQAHAIAFAOIAIAYIACAHQAgATAIAyQADARAAAaIAAArIAAAEIACAOIAHA1IAIA4IAAAEQAHAPADAMQAEAQgBAWIAAADIAAABQALAQAAANIAAAEQAIAOAKAQIAPAXQAHAOABALQADAYgRAQQgIAIgLADQgGACgGAAIgKgBg");
	this.shape.setTransform(14.6,29.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(0,0,29.3,58.6), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AIbDVQgagMgegUQgSgMgigZQgggZgJgKIgCgCIgogUQgPgHgKgHIhpgQQhJgLgkgPQgfgOhFg0QgYgTgVgNIgRgCQhYgLgqgNIgSgHIiDgBQgSAAgNgDQgQAEgVgBQgagCgagIIgEgBQgqAJgpAOQgYAJgNADQgVADgPgHQgRgIgGgUQgGgUAJgQQAIgOASgIQALgGAWgGIBfgaQATgOAigBQAagHAQAFQAMAEAJALIABABIALALQAMgBAQAAICwAAQAnAAAWADQAiADAYALQAYAKAiAbIATAOQAGgFAIgDQAMgFALACQAKABANAHIAWAMIAXAIQAPAFAIAFQAUANAFAVQAEALgBAKQATgNAWAHIAXAKQANAFAbAFIAYAJQAgAEARAFQAcAHASAMQALAJAOAOIADADQAKAEAGAEQAFAEAEAFIAGACQAZALALAHQASAMAHAQIADALIAUAKQAiAPAMAKQAYAVgEAZQgDAOgMAKQgMAKgPACIgJABQgVAAgbgMg");
	this.shape.setTransform(63.9,22.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(0,0,127.7,45), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhACEQgPgCgLgFQgJgEgLgIIgSgQQgSgOgcgQIgxgZQgWgMgHgKQgKgNAAgSQAAgYAPgPQASgSAVAEQALACATANQASANALACIAQABQAKAAAGACQAGADAGAGIAMALQANAKAhAAIBKABIARgBQAEgBAQgJIATgHIATgHQAPgHAdgaQANgMAFgJQADgFADgJIAGgPQALgTAWgDQAWgEAQAQQALAKAEASQADAQgEASQgHAkgYAaQgOANgFAIIgMAVQgHAKgSARQgQAQgPAKQgjAWg0AGQgaADhCAAIgcAAg");
	this.shape.setTransform(26.3,13.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(0,0,52.6,26.5), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgxDUQglgCgrgGQgsgIgVgOQgLgHgMgNIgUgYQgXgagIgNQgPgZAGgWQAEgOAMgJQgLgQgEgXIgDgcIgDgcQgCgKgFgVIgHgfQgHglAPgYQAIgOAPgHQAQgHAOAFQAUAIAJAcQACAKACAOIADAYIAGAhIAGAhQABARAEAHQADAFAGAFIALAJQAIAHAmAmQAcAdAYAIQARAGAlABQAmAAAUgEQAhgFAUgRQAPgQAJgHQAHgHAXgMQATgJAKgKQAHgIAMgaQALgXALgIQAOgKASABQARACAMAMQAVAXgLArQgLAlgcAbIABAHQADAXgJASQgFAJgIAKIgQAQIggAmQgTAVgTAIQgRAHgiACQgpADgmAAQglAAgjgDg");
	this.shape.setTransform(29.9,21.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(0,0,59.9,43), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABqBMQgVgLgDgPQgEgOAMgKQAPgKAXgBQAaABATALQATAKAGAPQAFAPgOAKQgOAKgZAAQgXgBgVgKgAiNADQgdgLgRgUQgQgUAGgRQAHgQAZgEQAagEAdAMQAdALARAUQAQAUgGARQgGAPgaAEIgOABQgTAAgWgIg");
	this.shape.setTransform(20,8.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(0,0,39.9,17.4), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.golova();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(0,0,99,139), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.levplecho();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(0,0,128,98), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.levruka();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(0,0,103,75), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pravplecho();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(0,0,159,116), null);


(lib.Символ3копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mo4a();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3копия, new cjs.Rectangle(0,0,387,290), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mo4a();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(0,0,387,290), null);


(lib.Анимация10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Ai81yIF5AAMAAAArlIl5AAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.9,-140.4,39.8,280.9);


(lib.Анимация4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Ai81yIF5AAMAAAArlIl5AAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.9,-140.4,39.8,280.9);


(lib.Анимация3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Ai81yIF5AAMAAAArlIl5AAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.9,-140.4,39.8,280.9);


(lib.Анимация2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Ai81yIF5AAMAAAArlIl5AAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.9,-140.4,39.8,280.9);


(lib.Анимация1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Ai81yIF5AAMAAAArlIl5AAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.9,-140.4,39.8,280.9);


(lib.Tween22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.w256h2561380453915MouseOptions256x25632();
	this.instance.parent = this;
	this.instance.setTransform(-30,-30,0.234,0.234);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30,-30,60,60);


(lib.Symbol36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhvA/IAAgWIhCAAIAAAWIgaAAIAAguIAKAAQAKgYgBggIAAgXIBYAAIAABPIAKAAIAAAugAibgjQABAVgIAfIAhAAIAAg2IgaAAgAInApIAAhnIAfAAIAAAoIARAAQAYAAALAIQAMAJAAAQQAAAPgLAHQgKAIgTAAgAJGASIARAAQAPAAAAgKQAAgJgPAAIgRAAgAGGApIAAhnIAfAAIAABNIAWAAIAAhNIAgAAIAABNIAWAAIAAhNIAgAAIAABngAFQApIAAhnIAgAAIAABngADoApIAAhnIAgAAIAAAoIASAAQAXAAAMAIQALAJAAAQQAAAPgKAHQgLAIgTAAgAEIASIARAAQAPAAAAgKQAAgJgPAAIgRAAgAC5ApIAAhPIgUBPIgYAAIgUhPIAABPIgaAAIAAhnIAqAAIARA+IAPg+IAqAAIAABngAgEApIAAg4IgmA4IgfAAIAAhnIAfAAIAAA5IAmg5IAdAAIAABngAkrApIAAhnIBWAAIAAAWIg2AAIAAARIAyAAIAAAVIgyAAIAAATIA3AAIAAAYgAmcApIAAhnIA8AAQAQAAAIAHQAIAIAAALQAAAJgHAHQgDAEgIACQAMADAFAHQAGAFgBAKQAAAIgEAHQgDAGgHAEQgEACgIABIgOACgAl8ASIARAAQAIAAADgCQAEgDAAgFQAAgFgEgDQgDgCgIAAIgRAAgAl8gVIAPAAQAHAAADgDQADgDAAgEQAAgFgDgDQgDgCgHAAIgPAAgAnHApIgGgRIglAAIgEARIgiAAIAohnIAjAAIAnBngAnTABIgMgkIgMAkIAYAAgApCApIAAgpIgjAAIAAApIggAAIAAhnIAgAAIAAAkIAjAAIAAgkIAgAAIAABng");
	this.shape.setTransform(67.2,13.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol36, new cjs.Rectangle(2.6,6.9,129.2,12.7), null);


(lib.shape109 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("AETAAQAAByhQBRQhRBQhyAAQhxAAhRhQQhQhRAAhyQAAhxBQhRQBRhQBxAAQByAABRBQQBQBRAABxg");
	this.shape.setTransform(27.5,27.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,58,58);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ46();
	this.instance.parent = this;
	this.instance.setTransform(18.9,139.5,1,1,0,0,0,18.9,139.5);
	this.instance.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(45, 6, 0, 0))];
	this.instance.cache(-2,-2,42,283);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ47, new cjs.Rectangle(0,0,41,282), null);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ41();
	this.instance.parent = this;
	this.instance.setTransform(66.1,-18.1,1,1,-60,0,0,6.1,16.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:75,y:-15.7},9).to({x:66.1,y:-18.1},10).to({x:75,y:-15.7},10).to({x:66.1,y:-18.1},10).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ41();
	this.instance_1.parent = this;
	this.instance_1.setTransform(6.2,16.4,1,1,0,0,0,6.2,16.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:3.8,y:25.3},9).to({x:6.2,y:16.4},10).to({x:3.8,y:25.3},10).to({x:6.2,y:16.4},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-31.7,83.5,64.7);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5
	this.instance = new lib.Символ31();
	this.instance.parent = this;
	this.instance.setTransform(25.6,26.1,1,1,0,0,0,5,5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

	// Слой 2
	this.instance_1 = new lib.Символ30();
	this.instance_1.parent = this;
	this.instance_1.setTransform(25.6,26.1,1,1,0,0,0,18.9,18.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.63,scaleY:0.63,y:26.2},4).to({scaleX:1,scaleY:1,y:26.1},5).to({scaleX:0.63,scaleY:0.63,y:26.2},5).to({scaleX:1,scaleY:1,y:26.1},5).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ29();
	this.instance_2.parent = this;
	this.instance_2.setTransform(26,26,1,1,0,0,0,26,26);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:26.1,regY:26.1,scaleX:0.81,scaleY:0.81,x:26.1,y:26.1},4).to({regX:26,regY:26,scaleX:1,scaleY:1,x:26,y:26},5).to({regX:26.1,regY:26.1,scaleX:0.81,scaleY:0.81,x:26.1,y:26.1},5).to({regX:26,regY:26,scaleX:1,scaleY:1,x:26,y:26},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,54,54);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ38();
	this.instance.parent = this;
	this.instance.setTransform(88.8,160.7,1,1,0,0,0,88.8,94.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:94.4,rotation:-9.2,x:88.9,y:160.8},14).to({regY:94.3,rotation:0,x:88.8,y:160.7},15).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(12.3,72.6,157.7,167.5);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ36();
	this.instance.parent = this;
	this.instance.setTransform(26,26);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:26,regY:26,rotation:15,x:44.4,y:57.9},0).wait(1).to({rotation:30,x:35.5,y:61.5},0).wait(1).to({rotation:45,x:26,y:62.8},0).wait(1).to({rotation:60,x:16.5,y:61.5},0).wait(1).to({rotation:75,x:7.7,y:57.9},0).wait(1).to({rotation:90,x:0,y:52},0).wait(1).to({rotation:105,x:-5.8,y:44.4},0).wait(1).to({rotation:120,x:-9.5,y:35.5},0).wait(1).to({rotation:135,x:-10.8,y:26},0).wait(1).to({rotation:150,x:-9.5,y:16.5},0).wait(1).to({rotation:165,x:-5.8,y:7.7},0).wait(1).to({rotation:180,x:0,y:0},0).wait(1).to({rotation:195,x:7.7,y:-5.8},0).wait(1).to({rotation:210,x:16.5,y:-9.5},0).wait(1).to({rotation:225,x:26,y:-10.8},0).wait(1).to({rotation:240,x:35.5,y:-9.5},0).wait(1).to({rotation:255,x:44.4,y:-5.8},0).wait(1).to({rotation:270,x:52,y:0},0).wait(1).to({rotation:285,x:57.9,y:7.7},0).wait(1).to({rotation:300,x:61.5,y:16.5},0).wait(1).to({rotation:315,x:62.8,y:26},0).wait(1).to({rotation:330,x:61.5,y:35.5},0).wait(1).to({rotation:345,x:57.9,y:44.4},0).wait(1).to({rotation:360,x:52,y:52},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(25,25,54,54);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ25();
	this.instance.parent = this;
	this.instance.setTransform(76.8,24.1,1,1,0,0,0,76.8,24.1);
	this.instance.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(20, 48, -1, 97))];
	this.instance.cache(-2,-2,158,52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ53();
	this.instance_1.parent = this;
	this.instance_1.setTransform(79.6,26,1,1,0,0,0,76.8,24.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ27, new cjs.Rectangle(0,0,157,52), null);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ24();
	this.instance.parent = this;
	this.instance.setTransform(174.2,31.2,1,1,0,0,0,174.2,31.2);
	this.instance.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(20, 48, -1, 97))];
	this.instance.cache(-2,-2,180,66);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ52();
	this.instance_1.parent = this;
	this.instance_1.setTransform(90.5,33,1,1,0,0,0,88,31.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ26, new cjs.Rectangle(0,0,180,66), null);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ26();
	this.instance.parent = this;
	this.instance.setTransform(119,-21.7,1,1,0,0,0,118,-18);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:-17.9,rotation:6.2,x:109.1},14).to({regY:-18,rotation:0,x:131},15).to({scaleX:1.04,scaleY:1.04,x:121.4,y:-22.4},5,cjs.Ease.get(-1)).to({regX:118.1,scaleX:1.08,scaleY:1.08,x:111.6,y:-23.2},5,cjs.Ease.get(1)).to({regX:118,scaleX:1,scaleY:1,x:119,y:-21.7},15).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ27();
	this.instance_1.parent = this;
	this.instance_1.setTransform(255.9,-22.7,1,1,0,0,0,47.7,-33);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:47.8,rotation:-6.2,x:266,y:-22.8},14).to({regX:47.7,rotation:0,x:243.9,y:-22.7},15).to({regX:47.8,scaleX:1.04,scaleY:1.04,x:248.8,y:-23.5},5,cjs.Ease.get(-1)).to({regX:47.7,scaleX:1.08,scaleY:1.08,x:253.5,y:-24.3},5,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:255.9,y:-22.7},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,-3.7,364.2,66);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.vedro();
	this.instance.parent = this;
	this.instance.setTransform(-14,8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ22();
	this.instance_1.parent = this;
	this.instance_1.setTransform(132.7,155.4,0.906,0.906,0,0,0,35.6,13.8);
	this.instance_1.alpha = 0.801;
	this.instance_1.filters = [new cjs.BlurFilter(26, 26, 1)];
	this.instance_1.cache(-2,-2,75,32);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ21, new cjs.Rectangle(-14,8,244,176.9), null);


(lib.Символ19 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ21();
	this.instance.parent = this;
	this.instance.setTransform(530.4,251.7,0.994,0.884,0,0,0.8,111.1,87.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

	// Слой 3
	this.instance_1 = new lib.Символ43();
	this.instance_1.parent = this;
	this.instance_1.setTransform(347.8,231,1,1,0,0,0,343.3,169);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0.25},9).to({alpha:0},10).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ20();
	this.instance_2.parent = this;
	this.instance_2.setTransform(341.2,200,1,1,0,0,0,350,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1.04,scaleY:1.04,x:345.6,y:208.3},9).to({scaleX:1,scaleY:1,x:341.2,y:200},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.8,0,700,400);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.levnoga();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ16();
	this.instance_1.parent = this;
	this.instance_1.setTransform(80.4,67,1,1,0,0,0,63.9,22.4);
	this.instance_1.alpha = 0.609;
	this.instance_1.filters = [new cjs.BlurFilter(15, 15, 1)];
	this.instance_1.cache(-2,-2,132,49);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(0,0,156.5,101.6), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.levbedro();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ15();
	this.instance_1.parent = this;
	this.instance_1.setTransform(130,124.8,1,1,0,0,0,26.3,13.2);
	this.instance_1.alpha = 0.609;
	this.instance_1.filters = [new cjs.BlurFilter(15, 15, 1)];
	this.instance_1.cache(-2,-2,57,31);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(0,0,168.7,150.6), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pravnoga();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ17();
	this.instance_1.parent = this;
	this.instance_1.setTransform(17.1,96.8,1,1,0,0,0,14.6,29.3);
	this.instance_1.alpha = 0.609;
	this.instance_1.filters = [new cjs.BlurFilter(15, 15, 1)];
	this.instance_1.cache(-2,-2,33,63);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(-5.5,0,54.6,138.5), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pravbedro();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ14();
	this.instance_1.parent = this;
	this.instance_1.setTransform(21.3,181.6,0.909,0.909,0,0,0,29.9,21.4);
	this.instance_1.alpha = 0.609;
	this.instance_1.filters = [new cjs.BlurFilter(13, 13, 1)];
	this.instance_1.cache(-2,-2,64,47);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(-12.9,0,111,212.2), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pravruka();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ18();
	this.instance_1.parent = this;
	this.instance_1.setTransform(124.7,84.3,1,1,0,0,0,88.2,32);
	this.instance_1.alpha = 0.609;
	this.instance_1.filters = [new cjs.BlurFilter(22, 22, 1)];
	this.instance_1.cache(-2,-2,180,68);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgBgBIACACIgBABIgBgDg");
	this.shape.setTransform(370.1,135.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(0,0,370.2,136.2), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ13();
	this.instance.parent = this;
	this.instance.setTransform(68,88.4,1,1,0,0,0,19.9,8.7);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({alpha:1},0).wait(1).to({alpha:0},0).wait(39).to({alpha:1},0).wait(1).to({alpha:0},0).wait(21));

	// Слой 1
	this.instance_1 = new lib.Символ12();
	this.instance_1.parent = this;
	this.instance_1.setTransform(49.5,69.5,1,1,0,0,0,49.5,69.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(101));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,99,139);


(lib.Символ5копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3копия();
	this.instance.parent = this;
	this.instance.setTransform(55.2,45.4,0.255,0.255,-10.5,0,0,193.5,145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5копия, new cjs.Rectangle(0,0,110.4,90.6), null);


(lib.Символ5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance_2 = new lib.Символ3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(55.2,45.4,0.255,0.255,-10.5,0,0,193.5,145);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5_1, new cjs.Rectangle(0,0,110.4,90.6), null);


(lib.Символ4копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5копия();
	this.instance.parent = this;
	this.instance.setTransform(55.2,45.3,1,1,0,0,0,55.2,45.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:56.1,y:47.4},13,cjs.Ease.get(-1)).to({x:57.1,y:50},16,cjs.Ease.get(1)).to({x:56.2,y:47.8},14,cjs.Ease.get(-1)).to({x:55.2,y:45.3},16,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,110.4,90.6);


(lib.Символ4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance_1 = new lib.Символ5_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(55.2,45.3,1,1,0,0,0,55.2,45.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:55.1,y:44.8},13,cjs.Ease.get(-1)).wait(16).to({x:55,y:44.6},14,cjs.Ease.get(-1)).to({y:44.7},16,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,110.4,90.6);


(lib.Анимация9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ49();
	this.instance.parent = this;
	this.instance.setTransform(-2.1,0,1,1,0,0,0,14.6,10.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(0.2,1,1).p("AAAABIAAgB");
	this.shape.setTransform(4.3,-8.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.9,-9.2,31.8,7.3);


(lib.Анимация8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ49();
	this.instance.parent = this;
	this.instance.setTransform(-2.1,0,1,1,0,0,0,14.6,10.7);
	this.instance.alpha = 0.578;

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(0.2,1,1).p("AAAABIAAgB");
	this.shape.setTransform(4.3,-8.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.9,-9.2,31.8,7.3);


(lib.Анимация7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ49();
	this.instance.parent = this;
	this.instance.setTransform(-2.1,0,1,1,0,0,0,14.6,10.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(0.2,1,1).p("AAAABIAAgB");
	this.shape.setTransform(4.3,-8.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.9,-9.2,31.8,7.3);


(lib.Анимация6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ49();
	this.instance.parent = this;
	this.instance.setTransform(-2.1,0,1,1,0,0,0,14.6,10.7);
	this.instance.alpha = 0.578;

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(0.2,1,1).p("AAAABIAAgB");
	this.shape.setTransform(4.3,-8.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.9,-9.2,31.8,7.3);


(lib.Анимация5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ49();
	this.instance.parent = this;
	this.instance.setTransform(-2.1,0,1,1,0,0,0,14.6,10.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(0.2,1,1).p("AAAABIAAgB");
	this.shape.setTransform(4.3,-8.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.9,-9.2,31.8,7.3);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol36();
	this.instance.parent = this;
	this.instance.setTransform(66.8,11.6,1,1,0,0,0,66.8,11.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol26, new cjs.Rectangle(2.6,6.9,129.2,12.7), null);


(lib.sprite110 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shape109("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sprite110, new cjs.Rectangle(-1.5,-1.5,58,58), null);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween22("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(30,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(0,0,60,60), null);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.Анимация5("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-17.2,8.2);

	this.instance_1 = new lib.Анимация6("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-17.2,8.2);
	this.instance_1._off = true;

	this.instance_2 = new lib.Анимация7("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-17.2,8.2);
	this.instance_2._off = true;

	this.instance_3 = new lib.Анимация8("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-17.2,8.2);
	this.instance_3._off = true;

	this.instance_4 = new lib.Анимация9("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-17.2,8.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},9).to({state:[{t:this.instance_2}]},10).to({state:[{t:this.instance_3}]},10).to({state:[{t:this.instance_4}]},10).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},9).wait(31));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},9).to({_off:true},10).wait(21));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},10).to({_off:true},10).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({_off:false},10).to({_off:true},10).wait(1));

	// Слой 5
	this.instance_5 = new lib.Символ50();
	this.instance_5.parent = this;
	this.instance_5.setTransform(20.7,142,1,1,0,0,0,10.1,111);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(0.2,1,1).p("Ag/AAICAAAABBABIiAAA");
	this.shape.setTransform(-121.9,302.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_5}]}).wait(40));

	// Слой 1
	this.instance_6 = new lib.Анимация1("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(18.9,139.5);

	this.instance_7 = new lib.Анимация2("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(18.9,139.5);
	this.instance_7._off = true;

	this.instance_8 = new lib.Анимация3("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(18.9,139.5);
	this.instance_8._off = true;

	this.instance_9 = new lib.Анимация4("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(18.9,139.5);
	this.instance_9._off = true;

	this.instance_10 = new lib.Анимация10("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(18.9,139.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_7}]},9).to({state:[{t:this.instance_8}]},10).to({state:[{t:this.instance_9}]},10).to({state:[{t:this.instance_10}]},10).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},9).wait(31));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:false},9).to({_off:true},10).wait(21));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(9).to({_off:false},10).to({_off:true},10).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(19).to({_off:false},10).to({_off:true},10).wait(1));

	// Слой 2
	this.instance_11 = new lib.Символ47();
	this.instance_11.parent = this;
	this.instance_11.setTransform(18.9,139.5,1,1,0,0,0,18.9,139.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({scaleY:0.96,y:145.7},9).wait(10).to({scaleY:0.98,y:142.8},10).to({scaleY:1,y:139.5},10).wait(1));

	// Слой 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("Ai8VzMAAAgrlIF5AAMAAAArlg");
	this.shape_1.setTransform(18.9,139.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-129.3,-1.2,170.4,305.2);


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
	this.strelki = new lib.Символ40();
	this.strelki.parent = this;
	this.strelki.setTransform(13.6,44.8,1,1,30,0,0,6.2,16.4);
	this.strelki.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.strelki).to({alpha:1},9).to({alpha:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,27.5,96.3,34.8);


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
	this.shlang = new lib.Символ35();
	this.shlang.parent = this;
	this.shlang.setTransform(130.2,19.4,1,1,0,0,0,130.2,85.7);
	this.shlang.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.shlang).to({alpha:1},9).to({alpha:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(12.3,6.2,157.7,167.5);


(lib.Символ34 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ28();
	this.instance.parent = this;
	this.instance.setTransform(26,26,1,1,0,0,0,26,26);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).to({alpha:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(25,25,54,54);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ28();
	this.instance.parent = this;
	this.instance.setTransform(26,26,1,1,0,0,0,26,26);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-130.9,y:76.8},18,cjs.Ease.get(-1)).to({x:-234,y:116},21,cjs.Ease.get(1)).to({x:-235,y:117},5).to({x:-74,y:136},20).to({x:166},20,cjs.Ease.get(1)).to({x:168,y:138},5).to({x:-79.8,y:59.2},21,cjs.Ease.get(-1)).to({x:-224,y:-14},20,cjs.Ease.get(1)).to({x:-225,y:-15},5).to({x:-144,y:6},20).to({x:-57.3,y:16.2},6,cjs.Ease.get(1)).to({x:26,y:26},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(25,25,54,54);


(lib.Символ3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance_1 = new lib.Символ4копия();
	this.instance_1.parent = this;
	this.instance_1.setTransform(249.9,177.3,0.835,0.73,0,164.9,170.1,55,45);

	this.instance_2 = new lib.Символ4_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(215.9,173.3,1,1,-158.6,0,0,55.2,45.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// Слой 1
	this.instance_3 = new lib.telo();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3_1, new cjs.Rectangle(0,0,348,219), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// golova.png
	this.instance = new lib.Символ2();
	this.instance.parent = this;
	this.instance.setTransform(308.9,85.9,1,1,0,0,0,18.9,108.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:108.8,rotation:4.1,x:298.3},9,cjs.Ease.get(-1)).to({regY:108.9,rotation:9,x:286.4,y:86},10,cjs.Ease.get(1)).wait(5).to({regY:108.8,scaleX:1,scaleY:1,rotation:11.8,x:304.9,y:89.8},10,cjs.Ease.get(-1)).to({regX:19,scaleX:1,scaleY:1,rotation:14.7,x:323.4,y:93.6},10,cjs.Ease.get(1)).wait(5).to({regX:19.1,regY:108.7,rotation:7.3,x:316.3,y:89.8},10,cjs.Ease.get(-1)).to({regX:18.9,regY:108.9,rotation:0,x:308.9,y:85.9},10,cjs.Ease.get(1)).to({rotation:9,x:286.4,y:86},10).to({rotation:0,x:308.9,y:85.9},10).wait(1));

	// telo.png
	this.instance_1 = new lib.Символ3_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(76.5,69.5,1,1,0,0,0,89.5,66.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:65.9},9,cjs.Ease.get(-1)).to({x:54},10,cjs.Ease.get(1)).wait(5).to({regX:89.4,rotation:0.6,x:74.1,y:70.7},10,cjs.Ease.get(-1)).to({regX:89.5,rotation:1.5,x:94.2,y:71.8},10,cjs.Ease.get(1)).wait(5).to({regY:66.6,rotation:0.6,x:85.4,y:70.7},10,cjs.Ease.get(-1)).to({regY:66.5,rotation:0,x:76.5,y:69.5},10,cjs.Ease.get(1)).to({x:54},10).to({x:76.5},10).wait(1));

	// pravplecho.png
	this.instance_2 = new lib.Символ4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(292.4,121.7,1,1,0,0,0,16.4,16.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:16.8,rotation:1.8,x:281.8,y:121.9},9,cjs.Ease.get(-1)).to({rotation:3.9,x:269.9},10,cjs.Ease.get(1)).to({rotation:3.9},5).to({rotation:4.5,x:289.3,y:125.9},10,cjs.Ease.get(-1)).to({rotation:5.4,x:308.6,y:129.7},10,cjs.Ease.get(1)).wait(5).to({rotation:2.6,x:300.6,y:125.8},10,cjs.Ease.get(-1)).to({regY:16.7,rotation:0,x:292.4,y:121.7},10,cjs.Ease.get(1)).to({regY:16.8,rotation:3.9,x:269.9,y:121.9},10).to({regY:16.7,rotation:0,x:292.4,y:121.7},10).wait(1));

	// pravruka.png
	this.instance_3 = new lib.Символ5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(421.8,211.9,1,1,0,0,0,28.8,26.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-1.5,x:409.5,y:215.9},9,cjs.Ease.get(-1)).to({regX:28.9,rotation:-3.5,x:395.8,y:220.3},10,cjs.Ease.get(1)).wait(5).to({regX:28.8,rotation:-3.3,x:414.9,y:226.4},10,cjs.Ease.get(-1)).to({regX:28.9,rotation:-3.5,x:434.2,y:232.4},10,cjs.Ease.get(1)).wait(5).to({rotation:-1.6,x:428.1,y:222.2},10,cjs.Ease.get(-1)).to({regX:28.8,rotation:0,x:421.8,y:211.9},10,cjs.Ease.get(1)).to({regX:28.9,rotation:-3.5,x:395.8,y:220.3},10).to({regX:28.8,rotation:0,x:421.8,y:211.9},10).wait(1));

	// levruka.png
	this.instance_4 = new lib.Символ8();
	this.instance_4.parent = this;
	this.instance_4.setTransform(433.5,186.1,1,1,0,0,0,17.5,16.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:422.5},9,cjs.Ease.get(-1)).to({x:410.3},10,cjs.Ease.get(1)).wait(5).to({x:429.5,y:192.2},10,cjs.Ease.get(-1)).to({x:448.7,y:198.2},10,cjs.Ease.get(1)).wait(5).to({x:441.1,y:192.2},10,cjs.Ease.get(-1)).to({x:433.5,y:186.1},10,cjs.Ease.get(1)).to({x:410.3},10).to({x:433.5},10).wait(1));

	// levplecho.png
	this.instance_5 = new lib.Символ9();
	this.instance_5.parent = this;
	this.instance_5.setTransform(338.8,122.3,1,1,0,0,0,20.8,21.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:328.5,y:122.7},9,cjs.Ease.get(-1)).to({x:317,y:123},10,cjs.Ease.get(1)).wait(5).to({regY:21.4,rotation:0.6,x:336.4,y:127.6},10,cjs.Ease.get(-1)).to({regY:21.3,rotation:1.5,x:355.7,y:132.1},10,cjs.Ease.get(1)).wait(5).to({regY:21.4,rotation:0.6,x:347.3,y:127.3},10,cjs.Ease.get(-1)).to({regY:21.3,rotation:0,x:338.8,y:122.3},10,cjs.Ease.get(1)).to({x:317,y:123},10).to({x:338.8,y:122.3},10).wait(1));

	// pravbedro.png
	this.instance_6 = new lib.Символ6();
	this.instance_6.parent = this;
	this.instance_6.setTransform(18.5,55,1,1,0,0,0,60.6,9.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:-5.5,x:5.6,y:57.8},9,cjs.Ease.get(-1)).to({rotation:-11.7,x:-6.4,y:52.9},10,cjs.Ease.get(1)).to({x:-5.7},5).to({rotation:-5.1,x:15.7},10,cjs.Ease.get(-1)).to({rotation:1.3,x:37.1},10,cjs.Ease.get(1)).to({rotation:1.3},5).to({rotation:0.5,x:26.4,y:57.5},10,cjs.Ease.get(-1)).to({rotation:0,x:18.5,y:55},10,cjs.Ease.get(1)).to({rotation:-11.7,x:-6.4,y:52.9},10,cjs.Ease.get(-1)).to({rotation:0,x:18.5,y:55},10).wait(1));

	// pravnoga.png
	this.instance_7 = new lib.Символ7();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-27.6,209.1,1,1,0,0,0,36.6,91.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regY:91.2,rotation:-3.8,x:-24,y:209.2},9,cjs.Ease.get(-1)).to({regY:91.1,rotation:-8.2,x:-18.9,y:209.1},10,cjs.Ease.get(1)).to({x:-16.8},5).to({rotation:-8.1,x:-14.7,y:208.4},10,cjs.Ease.get(-1)).to({rotation:-8.2,x:-12.6,y:207.7},10,cjs.Ease.get(1)).wait(5).to({regY:91.2,rotation:-4,x:-21.5,y:208.5},10,cjs.Ease.get(-1)).to({regY:91.1,rotation:0,x:-27.6,y:209.1},10,cjs.Ease.get(1)).to({rotation:-8.2,x:-18.9},10,cjs.Ease.get(-1)).to({rotation:0,x:-27.6},10).wait(1));

	// levbedro.png
	this.instance_8 = new lib.Символ10();
	this.instance_8.parent = this;
	this.instance_8.setTransform(89.3,91,1,1,0,0,0,57.6,14);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({rotation:2,x:81.9,y:91.1},9,cjs.Ease.get(-1)).to({regY:14.1,rotation:4.5,x:73.7},10,cjs.Ease.get(1)).wait(5).to({regY:14,rotation:4.3,x:95.1},10,cjs.Ease.get(-1)).to({regY:14.1,rotation:4.5,x:116.3},10,cjs.Ease.get(1)).wait(5).to({rotation:2.1,x:102.8},10,cjs.Ease.get(-1)).to({regY:14,rotation:0,x:89.3,y:91},10,cjs.Ease.get(1)).to({regY:14.1,rotation:4.5,x:73.7,y:91.1},10).to({regY:14,rotation:0,x:89.3,y:91},10).wait(1));

	// levnoga.png
	this.instance_9 = new lib.Символ11();
	this.instance_9.parent = this;
	this.instance_9.setTransform(134.9,185.9,1,1,0,0,0,130.4,64.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({x:123.3,y:188},9,cjs.Ease.get(-1)).to({x:110.4,y:190.3},10,cjs.Ease.get(1)).wait(5).to({x:131.7},10,cjs.Ease.get(-1)).to({x:153},10,cjs.Ease.get(1)).wait(5).to({x:144,y:188.1},10,cjs.Ease.get(-1)).to({x:134.9,y:185.9},10,cjs.Ease.get(1)).to({x:110.4,y:190.3},10).to({x:134.9,y:185.9},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69.7,-23,833,344.2);


(lib.sprite112 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol16();
	this.instance.parent = this;
	this.instance.setTransform(1.5,21.8,0.85,0.85,0,0,0,30,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[1.5,21.8,1.5,21.4,1.5,21,1.5,15.3,5.5,11.2,9.7,7.1,15.4,7.1,21.1,7.1,25.2,11.2,29.3,15.3,29.3,21,29.3,26.7,25.2,30.8,21.1,34.9,15.4,34.9,9.7,34.9,5.5,30.8,3.3,28.6,2.3,25.8]}},29).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24,-3.7,51,51);


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
	this.instance = new lib.Символ45();
	this.instance.parent = this;
	this.instance.setTransform(147.3,142,1,1,0,0,0,18.9,139.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).to({alpha:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,1.5,170.5,304.1);


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
	this.instance = new lib.Символ1();
	this.instance.parent = this;
	this.instance.setTransform(182.5,93.2,0.766,0.766,0,0,0,174.2,98.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:174.3,regY:98.6,scaleX:0.82,scaleY:0.82,x:187.5,y:95.3},9).to({regX:174.2,regY:98.7,scaleX:0.77,scaleY:0.77,x:182.5,y:93.2},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.1,0,639.6,263.5);


(lib.Символ33 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ32();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.405,1.405);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},9).to({alpha:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(35.1,35.1,75.9,75.9);


(lib.sprite113 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.sprite112();
	this.instance.parent = this;
	this.instance.setTransform(11.6,6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30));

	// Layer 1
	this.instance_1 = new lib.sprite110();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-8.7,-8.7,1.316,1.316);
	this.instance_1.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.5,-10.6,78.2,76.3);


(lib.Символ9_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance_1 = new lib.Symbol26();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-92.9,0.6,1,1,0,0,0,66.8,11.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.cir = new lib.sprite113();
	this.cir.parent = this;
	this.cir.setTransform(0.1,0.1,0.499,0.499,0,0,0,27.6,27.6);

	this.timeline.addTween(cjs.Tween.get(this.cir).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9_1, new cjs.Rectangle(-157.2,-19,176.3,38.1), null);


(lib.Символ72 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ9_1();
	this.instance.parent = this;
	this.instance.setTransform(147.5,16.7,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-50.5},9).to({x:147.5},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.4,-0.9,162.7,35.2);


// stage content:
(lib.moypol640x305 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		stage.canvas.addEventListener("mouseover", fl_Clickover.bind(this));
		
		function fl_Clickover()
		{
		    this.shlang.gotoAndPlay(1);
		    this.pricel.gotoAndPlay(1);
		    this.pricel2.gotoAndPlay(1);
			this.strelki.gotoAndPlay(1);
			this.mouse.gotoAndPlay(1);
			this.baba.gotoAndPlay(1);
			this.bg.gotoAndPlay(1);
			this.shkala.gotoAndPlay(1);
		}
		
		stage.canvas.addEventListener("mouseout", fl_Clickout.bind(this));
		
		function fl_Clickout()
		{
		   this.shlang.gotoAndPlay(10);
		   this.pricel.gotoAndPlay(10);
		   this.pricel2.gotoAndPlay(10);
		   this.strelki.gotoAndPlay(10);
		   this.mouse.gotoAndPlay(10);
		   this.baba.gotoAndPlay(10);
		   this.bg.gotoAndPlay(10);
		   this.shkala.gotoAndPlay(10);
		}
		 
		
		stage.canvas.style.cursor = "none";
		this.shlang.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
			this.shlang.x = stage.mouseX/window.devicePixelRatio;
			
		}
		
		
		
		stage.canvas.style.cursor = "none";
		this.pricel2.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor_2.bind(this));
		
		function fl_CustomMouseCursor_2() {
			this.pricel2.x = stage.mouseX/window.devicePixelRatio;
			this.pricel2.y = stage.mouseY/window.devicePixelRatio;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// shkala
	this.shkala = new lib.Символ51();
	this.shkala.parent = this;
	this.shkala.setTransform(548,163.8,1,1,0,0,0,83.3,152.8);

	this.timeline.addTween(cjs.Tween.get(this.shkala).wait(1));

	// mouse
	this.mouse = new lib.Символ72();
	this.mouse.parent = this;
	this.mouse.setTransform(87.7,284.3,1,1,0,0,0,82.5,16.6);

	this.timeline.addTween(cjs.Tween.get(this.mouse).wait(1));

	// leika
	this.shlang = new lib.Символ39();
	this.shlang.parent = this;
	this.shlang.setTransform(453.9,278.2,1,1,0,0,0,88.8,94.3);

	this.timeline.addTween(cjs.Tween.get(this.shlang).wait(1));

	// pricel2
	this.pricel2 = new lib.Символ34();
	this.pricel2.parent = this;
	this.pricel2.setTransform(377,247,1,1,0,0,0,91.5,52);

	this.timeline.addTween(cjs.Tween.get(this.pricel2).wait(1));

	// pricel
	this.pricel = new lib.Символ33();
	this.pricel.parent = this;
	this.pricel.setTransform(411.1,128.7,1,1,0,0,0,36.5,36.5);

	this.timeline.addTween(cjs.Tween.get(this.pricel).wait(1));

	// strelki
	this.strelki = new lib.Символ42();
	this.strelki.parent = this;
	this.strelki.setTransform(213.6,260.2,1,1,0,0,0,52.2,48.9);

	this.timeline.addTween(cjs.Tween.get(this.strelki).wait(1));

	// text
	this.instance = new lib.Символ23();
	this.instance.parent = this;
	this.instance.setTransform(305,34.4,1,1,0,0,0,174.2,31.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// baba
	this.baba = new lib.Символ44();
	this.baba.parent = this;
	this.baba.setTransform(313.2,194.7,1,1,0,0,0,316.7,131.7);

	this.timeline.addTween(cjs.Tween.get(this.baba).wait(1));

	// bg
	this.bg = new lib.Символ19();
	this.bg.parent = this;
	this.bg.setTransform(318,118,1,1,0,0,0,350,200);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(279.2,70.5,700,439.6);
// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/background.jpg?1481711413337", id:"background"},
		{src:"images/golova.png?1481711413337", id:"golova"},
		{src:"images/levbedro.png?1481711413337", id:"levbedro"},
		{src:"images/levnoga.png?1481711413337", id:"levnoga"},
		{src:"images/levplecho.png?1481711413337", id:"levplecho"},
		{src:"images/levruka.png?1481711413337", id:"levruka"},
		{src:"images/mo4a.png?1481711413337", id:"mo4a"},
		{src:"images/pravbedro.png?1481711413337", id:"pravbedro"},
		{src:"images/pravnoga.png?1481711413337", id:"pravnoga"},
		{src:"images/pravplecho.png?1481711413337", id:"pravplecho"},
		{src:"images/pravruka.png?1481711413337", id:"pravruka"},
		{src:"images/shlang.png?1481711413337", id:"shlang"},
		{src:"images/telo.png?1481711413337", id:"telo"},
		{src:"images/vedro.png?1481711413337", id:"vedro"},
		{src:"images/w256h2561380453915MouseOptions256x25632.png?1481711413337", id:"w256h2561380453915MouseOptions256x25632"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;