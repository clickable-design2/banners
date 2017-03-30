(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.fon = function() {
	this.initialize(img.fon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,305);


(lib.hand_03 = function() {
	this.initialize(img.hand_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,52,30);


(lib.hand_06 = function() {
	this.initialize(img.hand_06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,25,19);


(lib.hand_08 = function() {
	this.initialize(img.hand_08);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,33,28);


(lib.hand_14 = function() {
	this.initialize(img.hand_14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,108,106);


(lib.list = function() {
	this.initialize(img.list);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,152,120);


(lib.pirat_03 = function() {
	this.initialize(img.pirat_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,92,92);


(lib.pirat_06 = function() {
	this.initialize(img.pirat_06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,41,27);


(lib.pirat_10 = function() {
	this.initialize(img.pirat_10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,166,277);


(lib.pirat_14 = function() {
	this.initialize(img.pirat_14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,62,167);


(lib.ship = function() {
	this.initialize(img.ship);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,188,97);


(lib.sunduk1 = function() {
	this.initialize(img.sunduk1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,184,173);


(lib.tit = function() {
	this.initialize(img.tit);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,69,51);// helper functions:

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


(lib.Символ116 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hand_03();
	this.instance.parent = this;
	this.instance.setTransform(-26,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ116, new cjs.Rectangle(-26,-15,52,30), null);


(lib.Символ114 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hand_06();
	this.instance.parent = this;
	this.instance.setTransform(-12.5,-9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ114, new cjs.Rectangle(-12.5,-9.5,25,19), null);


(lib.Символ112 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hand_08();
	this.instance.parent = this;
	this.instance.setTransform(-16.5,-14);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ112, new cjs.Rectangle(-16.5,-14,33,28), null);


(lib.Символ110 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hand_14();
	this.instance.parent = this;
	this.instance.setTransform(-54,-53);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ110, new cjs.Rectangle(-54,-53,108,106), null);


(lib.Символ108 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AiVCQIA/AAIghnCIBeA8IBTiWIAAIcIBcAAIiOD9g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ108, new cjs.Rectangle(-15,-39.7,30,79.4), null);


(lib.Символ107 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC33").s().p("AiVCQIA/AAIghnCIBeA8IBTiWIAAIcIBcAAIiOD9g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ107, new cjs.Rectangle(-15,-39.7,30,79.4), null);


(lib.Символ103 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A00GzIAAtlMAppAAAIAANlg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ103, new cjs.Rectangle(-133.3,-43.4,266.6,87), null);


(lib.Символ102 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AklE2QgMgFgMgGQgLgHgJgJQgKgJgIgLQgIgLgHgNQgEgOgEgPQgDgPAAgSQAAheCLgvQASAAAhAIQANAFAMAHQALAGAJAJQALAJAHALQAJALAFANQAGAOAEAPQACAQAAARQABBfiNAvQgjgDgQgGgAkKBsQgNAFgJAJQgLAKgEANQgHAOABASQgBASAHAPQAEANALAKQAJAJANAFQAMAEAMAAQAOAAAMgEQANgFAJgJQAKgKAFgNQAHgPgBgSQABgSgHgOQgFgNgKgKQgJgJgNgFQgMgEgOAAQgMAAgMAEgAKXE5IAAkQIBGAAIAABRIAyAAQARAAAZAIQASAHAOAOQALAOAHARQAGARAAASQAAATgGAQQgHASgLANQgOAOgSAIQgZAIgRAAgALdD7IAyAAQAOAAAJgLQAGgJAAgNQAAgOgHgJQgIgKgOAAIgyAAgAHlE5IAAjSIhDAAIAAg+IDKAAIAAA+IhCAAIAADSgAFVE5IgPgiIhsAAIgQAiIhEAAIAAgKIB7kKIAdAAIB7EKIAAAKgAEuDbIgfhHIgfBHIA+AAgAgxE5IAAkQICpAAIAAA+IhjAAIAADSgAp6E5IAAkQIB3AAQAiAAAnAfQANAOAGATQAGASAAATQAAAUgGARQgGATgNAOQgMAOgSAJQgJAEgKACQgLACgNAAIgyAAIAABGgAo1C1IAyAAQAOAAAIgNQAIgLgBgPQABgQgHgLQgFgFgEgEQgHgDgHAAIgyAAgAstE5IAAjSIhDAAIAAg+IDKAAIAAA+IhCAAIAADSgAK+glIAAkYICwAAIAABAIhoAAIAAAoIBfAAIAAA/IhfAAIAAAyIBrAAIAAA/gAIuglIAAhwIhWAAIAABwIhJAAIAAkYIBJAAIAABmIBWAAIAAhmIBKAAIAAEYgACSglIAAhSIgmAAIgwBSIhPAAIAAgKIA2hZQgNgJgJgMQgJgNgEgOQgFgPAAgPQgBgQAEgOQADgPAIgNQAIgNAMgKQANgKAQgGQAQgGAVAAIB6AAIAAEYgABIjyQgIAKABAOQAAAOAHAKQAJAKAOAAIAzAAIAAhFIgzAAQgPAAgIALgAiIglIAAhwIhWAAIAABwIhJAAIAAkYIBJAAIAABmIBWAAIAAhmIBKAAIAAEYgAoXglIAAkYICuAAIAABAIhnAAIAAAoIBfAAIAAA/IhfAAIAAAyIBrAAIAAA/gAqoglIAAh9Ig8A/IgIAAIg6g/IAAB9IhKAAIAAkZIAaAAIBvB6IBvh6IAaAAIAAEZg");
	this.shape.setTransform(-97.7,17.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ102, new cjs.Rectangle(-185.8,-14.1,176.2,63.8), null);


(lib.Символ101 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AJbBlIAAjJIB+AAIAAAuIhKAAIAAAdIBEAAIAAAsIhEAAIAAAkIBNAAIAAAugAHzBlIAAhRIg+AAIAABRIg0AAIAAjJIA0AAIAABJIA+AAIAAhJIA1AAIAADJgAAtBlIAAjJIB+AAIAAAuIhKAAIAAAdIBEAAIAAAsIhEAAIAAAkIBNAAIAAAugAg6BlIAAhRIg+AAIAABRIg1AAIAAjJIA1AAIAABJIA+AAIAAhJIA1AAIAADJgAoABlIAAjJIB+AAIAAAuIhKAAIAAAdIBEAAIAAAsIhEAAIAAAkIBNAAIAAAugApoBlIAAhRIg+AAIAABRIg1AAIAAjJIA1AAIAABJIA+AAIAAhJIA1AAIAADJgADVAcIAAgVIB9AAIAAAVgAlYAcIAAgVIB9AAIAAAVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ101, new cjs.Rectangle(-73.1,-10,146.4,20.2), null);


(lib.Символ100 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AwtDiIAAnDMAhbAAAIAAHDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ100, new cjs.Rectangle(-107,-22.6,214.1,45.3), null);


(lib.Символ92 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AMkC4IAAkXIBJAAIAACHICNiIIAaAAIAAEYIhKAAIAAiKIiNCKgAhIC4IAAkXIBIAAIAACHICOiIIAaAAIAAEYIhKAAIAAiKIiNCKgAK3C4IgQgkIhvAAIgQAkIhHAAIAAgLIB/kQIAeAAIB+EQIAAALgAJPBXIBAAAIgghJgADvC4IAAkXIB8AAQAhgBApAhQANAPAGASQAHATAAATQAAAUgHASQgGATgNAOQgNAPgSAJQgKAFgKACQgLACgMAAIg1AAIAABIgAE2AwIA0AAQAOAAAIgNQAIgLAAgRQAAgOgHgMQgEgGgGgDQgFgDgIAAIg0AAgAleC4IAAkXIDJAAIAABAIiCAAIAAAhIA0AAQARAAAbAIQATAGANAOQAMAMAHARQAGAQAAASQAAAQgGAQQgHASgMAMQgNANgTAHQgbAJgRAAgAkXB4IA0AAQAOAAAIgJQAIgIgBgLQABgLgIgHQgIgJgOAAIg0AAgAnsC4IAAkXIBHAAIAAEXgAsBC4IAAkXIBIAAIAABTIA0AAQAQAAAbAIQASAHANAOQANAOAGASQAHASAAASQAAATgHARQgGASgNANQgNAPgSAIQgbAJgQAAgAq5B4IAzAAQAOgBAJgKQAHgKAAgNQAAgOgIgKQgIgLgOAAIgzAAgAwTC4IAAkXIB4AAQASAAAQAGQAPAGANANQAMALAGAQQAHAQAAARQAAAMgGANQgGAPgKAIQARAJAIAOQAJAPAAATQAAATgHAQQgFAQgLAMQgLAMgQAGQgRAIgVAAgAvOB4IA6AAQAKAAAFgHQAGgHAAgKQAAgKgGgGQgFgIgLABIg5AAgAvOANIAtAAQALAAAFgIQAGgFAAgJQAAgJgGgGQgGgIgKABIgtAAgAOJhzQgNgFgIgIQgJgJgFgMQgFgOAAgQIApgEQABALAHAGQAHAFAMAAQAOAAAGgFQAJgFABgMIApAEQAAAQgFAOQgFAMgJAJQgIAIgNAFQgNAEgRAAQgQAAgNgEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ92, new cjs.Rectangle(-104.4,-18.4,208.8,36.8), null);


(lib.Символ91 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AMkC4IAAkXIBJAAIAACHICNiIIAaAAIAAEYIhKAAIAAiKIiNCKgAhIC4IAAkXIBIAAIAACHICOiIIAaAAIAAEYIhKAAIAAiKIiNCKgAK3C4IgQgkIhvAAIgQAkIhHAAIAAgLIB/kQIAeAAIB+EQIAAALgAJPBXIBAAAIgghJgADvC4IAAkXIB8AAQAhgBApAhQANAPAGASQAHATAAATQAAAUgHASQgGATgNAOQgNAPgSAJQgKAFgKACQgLACgMAAIg1AAIAABIgAE2AwIA0AAQAOAAAIgNQAIgLAAgRQAAgOgHgMQgEgGgGgDQgFgDgIAAIg0AAgAleC4IAAkXIDJAAIAABAIiCAAIAAAhIA0AAQARAAAbAIQATAGANAOQAMAMAHARQAGAQAAASQAAAQgGAQQgHASgMAMQgNANgTAHQgbAJgRAAgAkXB4IA0AAQAOAAAIgJQAIgIgBgLQABgLgIgHQgIgJgOAAIg0AAgAnsC4IAAkXIBHAAIAAEXgAsBC4IAAkXIBIAAIAABTIA0AAQAQAAAbAIQASAHANAOQANAOAGASQAHASAAASQAAATgHARQgGASgNANQgNAPgSAIQgbAJgQAAgAq5B4IAzAAQAOgBAJgKQAHgKAAgNQAAgOgIgKQgIgLgOAAIgzAAgAwTC4IAAkXIB4AAQASAAAQAGQAPAGANANQAMALAGAQQAHAQAAARQAAAMgGANQgGAPgKAIQARAJAIAOQAJAPAAATQAAATgHAQQgFAQgLAMQgLAMgQAGQgRAIgVAAgAvOB4IA6AAQAKAAAFgHQAGgHAAgKQAAgKgGgGQgFgIgLABIg5AAgAvOANIAtAAQALAAAFgIQAGgFAAgJQAAgJgGgGQgGgIgKABIgtAAgAOJhzQgNgFgIgIQgJgJgFgMQgFgOAAgQIApgEQABALAHAGQAHAFAMAAQAOAAAGgFQAJgFABgMIApAEQAAAQgFAOQgFAMgJAJQgIAIgNAFQgNAEgRAAQgQAAgNgEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ91, new cjs.Rectangle(-104.4,-18.4,208.8,36.8), null);


(lib.Символ88 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AFYDIIAAgfIimAAIAAAfIg7AAIAAheIAdAAIBfjcIAfAAIBkDcIAdAAIAABegADcBpIBPAAIgohlgAtmDIIAAgfIimAAIAAAfIg7AAIAAheIAdAAIBfjcIAfAAIBkDcIAdAAIAABegAviBpIBPAAIgohlgAa4CnQgSgGgNgNQgNgMgGgRQgHgTAAgXIA/AAQAAAQAKAKQAJAKAQAAQARAAAKgKQAJgJAAgNQAAgNgJgJQgKgKgRAAIgUAAIAAg5IATAAQAMAAAIgIQAGgGAAgKQAAgLgGgGQgHgIgMAAQgMAAgGAFQgHADAAAJIhAAAQAAgUAGgOQAHgOAMgKQAMgJARgFQAQgEATAAQAWAAASAGQARAHAMAMQALAMAGAOQAGAPAAAPQAAAOgGAOQgHAOgLAJQAKAFAIAIQAHAHAFAIQAFAJADAKQACALAAALQAAATgHAQQgHAQgNAMQgOAMgUAGQgVAIgaAAQgXgBgSgGgAVbCoIAAkXIBJAAIAACIICOiJIAaAAIAAEYIhLAAIAAiJIiNCJgAnpCoIAAkXIBJAAIAACIICOiJIAaAAIAAEYIhKAAIAAiJIiNCJgARFCoIAAkXIB7AAQAiAAApAhQANAOAGATQAHASAAAVQAAATgHASQgGASgNAPQgNAPgSAIQgKAFgKACQgMADgMgBIg0AAIAABIgASMAgIA0AAQAOAAAIgMQAIgMAAgPQAAgQgHgLQgEgGgGgDQgGgEgHAAIg0AAgAO0CoIAAjVIhWAAIAADVIhJAAIAAkXIDpAAIAAEXgAG2CoIAAkXICvAAIAABAIhnAAIAAAoIBfAAIAAA+IhfAAIAAAxIBrAAIAABAgAhFCoIAAkXICtAAIAABAIhlAAIAADXgApWCoIgQgjIhvAAIgQAjIhGAAIAAgKIB+kQIAfAAIB+EQIAAAKgAq9BHIBAAAIghhIgAyPCoIgQgjIhvAAIgQAjIhGAAIAAgKIB+kQIAfAAIB+EQIAAAKgAz2BHIBAAAIghhIgA4hCoIAAkXICvAAIAABAIhmAAIAADXgA8aCoIAAgIIAthaIhfiqIAAgLIBQAAIA1BnIACAAIAwhnIBOAAIAAALIiFEMgAmDiCQgNgFgJgJQgIgJgFgMQgFgNgBgQIAqgFQAAALAIAGQAHAFAMABQANAAAHgGQAIgEACgNIApAFQAAAQgFANQgFAMgJAJQgJAJgNAFQgMAEgRAAQgQAAgNgEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ88, new cjs.Rectangle(-186.9,-19.9,373.8,39.9), null);


(lib.Символ87 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AFYDIIAAgfIimAAIAAAfIg7AAIAAheIAdAAIBfjcIAfAAIBkDcIAdAAIAABegADcBpIBPAAIgohlgAtmDIIAAgfIimAAIAAAfIg7AAIAAheIAdAAIBfjcIAfAAIBkDcIAdAAIAABegAviBpIBPAAIgohlgAa4CnQgSgGgNgNQgNgMgGgRQgHgTAAgXIA/AAQAAAQAKAKQAJAKAQAAQARAAAKgKQAJgJAAgNQAAgNgJgJQgKgKgRAAIgUAAIAAg5IATAAQAMAAAIgIQAGgGAAgKQAAgLgGgGQgHgIgMAAQgMAAgGAFQgHADAAAJIhAAAQAAgUAGgOQAHgOAMgKQAMgJARgFQAQgEATAAQAWAAASAGQARAHAMAMQALAMAGAOQAGAPAAAPQAAAOgGAOQgHAOgLAJQAKAFAIAIQAHAHAFAIQAFAJADAKQACALAAALQAAATgHAQQgHAQgNAMQgOAMgUAGQgVAIgaAAQgXgBgSgGgAVbCoIAAkXIBJAAIAACIICOiJIAaAAIAAEYIhLAAIAAiJIiNCJgAnpCoIAAkXIBJAAIAACIICOiJIAaAAIAAEYIhKAAIAAiJIiNCJgARFCoIAAkXIB7AAQAiAAApAhQANAOAGATQAHASAAAVQAAATgHASQgGASgNAPQgNAPgSAIQgKAFgKACQgMADgMgBIg0AAIAABIgASMAgIA0AAQAOAAAIgMQAIgMAAgPQAAgQgHgLQgEgGgGgDQgGgEgHAAIg0AAgAO0CoIAAjVIhWAAIAADVIhJAAIAAkXIDpAAIAAEXgAG2CoIAAkXICvAAIAABAIhnAAIAAAoIBfAAIAAA+IhfAAIAAAxIBrAAIAABAgAhFCoIAAkXICtAAIAABAIhlAAIAADXgApWCoIgQgjIhvAAIgQAjIhGAAIAAgKIB+kQIAfAAIB+EQIAAAKgAq9BHIBAAAIghhIgAyPCoIgQgjIhvAAIgQAjIhGAAIAAgKIB+kQIAfAAIB+EQIAAAKgAz2BHIBAAAIghhIgA4hCoIAAkXICvAAIAABAIhmAAIAADXgA8aCoIAAgIIAthaIhfiqIAAgLIBQAAIA1BnIACAAIAwhnIBOAAIAAALIiFEMgAmDiCQgNgFgJgJQgIgJgFgMQgFgNgBgQIAqgFQAAALAIAGQAHAFAMABQANAAAHgGQAIgEACgNIApAFQAAAQgFANQgFAMgJAJQgJAJgNAFQgMAEgRAAQgQAAgNgEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ87, new cjs.Rectangle(-186.9,-19.9,373.8,39.9), null);


(lib.Символ85 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Eg0vAFeIAAq7MBpfAAAIAAK7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ85, new cjs.Rectangle(-337.6,-35,675.2,70.1), null);


(lib.Символ75 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sunduk1();
	this.instance.parent = this;
	this.instance.setTransform(92,-86.5,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ75, new cjs.Rectangle(-92,-86.5,184,173), null);


(lib.Символ74 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sunduk1();
	this.instance.parent = this;
	this.instance.setTransform(-92,-86.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ74, new cjs.Rectangle(-92,-86.5,184,173), null);


(lib.Символ66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Egz4AHCIAAuDMBnxAAAIAAODg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ66, new cjs.Rectangle(-332.1,-45,664.2,90.1), null);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#020000").s().p("AldUPMAAAgodIK7AAMAAAAodg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#020000").s().p("AlOUPMAAAgodIKdAAMAAAAodg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tit();
	this.instance.parent = this;
	this.instance.setTransform(-34.5,-25.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ36, new cjs.Rectangle(-34.5,-25.5,69,51), null);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#020000").s().p("Ax9R+MAAAgj7MAj7AAAMAAAAj7g");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#020000").s().p("AwUQVMAAAggpMAgpAAAMAAAAgpg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ30, new cjs.Rectangle(-104.5,-104.5,209.1,209.1), null);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.list();
	this.instance.parent = this;
	this.instance.setTransform(-76,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ23, new cjs.Rectangle(-76,-60,152,120), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.list();
	this.instance.parent = this;
	this.instance.setTransform(-76,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(-76,-60,152,120), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ship();
	this.instance.parent = this;
	this.instance.setTransform(-94,-48.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(-94,-48.5,188,97), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#020000").s().p("ABYApQgQgBgKgGQgJgHABgIQACgIAKgEQAKgFARACQAQABAHACQAIABAAALQgBAKgKAGQgJAGgOAAIgCAAgAheAAQgPgDgIgJQgHgJACgKQACgKAIABQAIAAAQADQAQADAJAHQAIAGAAAJQgBAIgLAEQgGABgHAAIgOgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(-12.4,-4.1,24.8,8.2), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pirat_14();
	this.instance.parent = this;
	this.instance.setTransform(-31,-83.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(-31,-83.5,62,167), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pirat_06();
	this.instance.parent = this;
	this.instance.setTransform(-20.5,-13.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(-20.5,-13.5,41,27), null);


(lib.Символ117 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ116();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ117, new cjs.Rectangle(-26,-15,52,30), null);


(lib.Символ115 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ114();
	this.instance.parent = this;
	this.instance.setTransform(12.5,-7.2,1,1,0,0,0,12.5,-7.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-22.7,x:12.6},19,cjs.Ease.get(1)).to({rotation:0,x:12.5},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.5,-9.5,25,19);


(lib.Символ113 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ112();
	this.instance.parent = this;
	this.instance.setTransform(12.1,10.9,1,1,0,0,0,12.1,10.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:12.2,regY:11,rotation:15,x:12.2,y:11.1},19,cjs.Ease.get(1)).to({regX:12.1,regY:10.9,rotation:0,x:12.1,y:10.9},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.5,-14,33,28);


(lib.Символ111 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ110();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ111, new cjs.Rectangle(-54,-53,108,106), null);


(lib.Символ105 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ107();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ108();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1.5,-1.5);
	this.instance_1.alpha = 0.801;
	this.instance_1.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance_1.cache(-17,-42,34,83);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ105, new cjs.Rectangle(-15.5,-43.2,37,87), null);


(lib.Символ93 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ91();
	this.instance.parent = this;
	this.instance.setTransform(0,-1.2);

	this.instance_1 = new lib.Символ92();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,1.3);
	this.instance_1.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance_1.cache(-106,-20,213,41);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ93, new cjs.Rectangle(-106.4,-19.6,216,44.5), null);


(lib.Символ90 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ93();
	this.instance.parent = this;
	this.instance.setTransform(0,1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ90, new cjs.Rectangle(-106.4,-18.4,216,43.5), null);


(lib.Символ86 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ87();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ88();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,3.5);
	this.instance_1.alpha = 0.699;
	this.instance_1.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance_1.cache(-189,-22,378,44);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ86, new cjs.Rectangle(-188.9,-19.9,380,48.5), null);


(lib.Символ82 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ90();
	this.instance.parent = this;
	this.instance.setTransform(-3.5,0.7,1.177,1.177);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.03,scaleY:1.03,y:0.8},4,cjs.Ease.get(1)).to({scaleX:1.18,scaleY:1.18,y:0.7},4,cjs.Ease.get(1)).wait(1).to({scaleX:1.03,scaleY:1.03,y:0.8},4,cjs.Ease.get(1)).to({scaleX:1.18,scaleY:1.18,y:0.7},4,cjs.Ease.get(1)).wait(23));

	// Слой 2
	this.instance_1 = new lib.Символ85();
	this.instance_1.parent = this;
	this.instance_1.setTransform(2.6,-15.2,1,1.642);
	this.instance_1.alpha = 0.75;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-335,-72.7,675.2,115.1);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.Символ102();
	this.instance.parent = this;
	this.instance.setTransform(-139.5,45.3,0.59,0.59,0,0,0,-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ103();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-167.1,56.2,0.711,0.702);
	this.instance_1.alpha = 0.75;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ44, new cjs.Rectangle(-261.9,25.7,189.5,61), null);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ101();
	this.instance.parent = this;
	this.instance.setTransform(28.9,28.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ100();
	this.instance_1.parent = this;
	this.instance_1.setTransform(8.4,28.9);
	this.instance_1.alpha = 0.75;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ41, new cjs.Rectangle(-98.6,6.3,214.1,45.3), null);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ36();
	this.instance.parent = this;
	this.instance.setTransform(-6.9,16.8,1,1,0,0,0,-6.9,16.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.07,scaleY:1.07},29,cjs.Ease.get(1)).to({regY:16.6,scaleX:1.13,scaleY:1.13,y:16.6},30,cjs.Ease.get(1)).to({regX:-6.8,scaleX:1.07,scaleY:1.07,y:16.7},30,cjs.Ease.get(1)).to({regX:-6.9,regY:16.8,scaleX:1,scaleY:1,y:16.8},30,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.5,-25.5,69,51);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ75();
	this.instance.parent = this;
	this.instance.alpha = 0;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.5},14,cjs.Ease.get(0.97)).to({alpha:0},15,cjs.Ease.get(0.97)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ75();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92,-86.5,184,173);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ30();
	this.instance.parent = this;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ74();
	this.instance.parent = this;
	this.instance.alpha = 0.488;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},14,cjs.Ease.get(1)).to({alpha:0.488},15,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ74();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92,-86.5,184,173);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(1));

	// Слой 1
	this.instance = new lib.Символ32();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:-4},0).to({scaleX:1.12,scaleY:1.12,rotation:7.2},2).to({scaleX:1,scaleY:1,rotation:-4},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92,-86.5,184,173);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_7 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7).call(this.frame_7).wait(1));

	// Слой 1
	this.instance = new lib.Символ29();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:-7.5},0).to({rotation:8.5},3).to({rotation:-7.5},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92,-86.5,184,173);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ23();
	this.instance.parent = this;
	this.instance.setTransform(-66.7,-33.3,1,1,0,0,0,-66.7,-33.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:-33.4,rotation:-3.7,y:-33.4},39).to({regY:-33.3,rotation:0,y:-33.3},65).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76,-60,152,120);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ20();
	this.instance.parent = this;
	this.instance.setTransform(-60.1,-26.5,1,1,0,0,0,-60.1,-26.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-60,regY:-26.4,rotation:3.7,x:-60,y:-26.4},40,cjs.Ease.get(0.96)).to({regX:-60.1,regY:-26.5,rotation:0,x:-60.1,y:-26.5},47,cjs.Ease.get(0.96)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76,-60,152,120);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 21
	this.instance = new lib.Символ21();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 22
	this.instance_1 = new lib.Символ22();
	this.instance_1.parent = this;
	this.instance_1.setTransform(15,45.4,0.75,0.765,0,11.3,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(-76,-60,157,150.4), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(-94,-48.5,188,97), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.parent = this;
	this.instance.filters = [new cjs.BlurFilter(2, 2, 1)];
	this.instance.cache(-14,-6,29,12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(-13.4,-5.1,30,14), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.parent = this;
	this.instance.setTransform(25.9,-81,1,1,0,0,0,25.9,-81);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:3.3,x:26},16,cjs.Ease.get(-1)).to({rotation:7.2,x:25.9},18,cjs.Ease.get(1)).to({rotation:3.6,x:26},17,cjs.Ease.get(-1)).to({rotation:0,x:25.9},18,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31,-83.5,62,167);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.parent = this;
	this.instance.setTransform(16.2,2.5,1,1,0,0,0,16.2,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:2.6,scaleY:0.84,rotation:-10,x:16.6,y:4.4},4).to({regY:2.5,scaleY:1,rotation:0,x:16.2,y:2.5},4).wait(1).to({regY:2.6,scaleY:0.84,rotation:-10,x:16.6,y:4.4},4).to({regY:2.5,scaleY:1,rotation:0,x:16.2,y:2.5},4).wait(53));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.5,-13.5,41,27);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pirat_06.png
	this.instance = new lib.Символ4();
	this.instance.parent = this;
	this.instance.setTransform(-67.5,-132.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 4
	this.instance_1 = new lib.Символ35();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-12.5,-46.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// pirat_10.png
	this.instance_2 = new lib.pirat_10();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-78,-131.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(-88,-145.7,176,291.5), null);


(lib.Символ119 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ115();
	this.instance.parent = this;
	this.instance.setTransform(-21.5,-3.5);

	this.instance_1 = new lib.Символ117();
	this.instance_1.parent = this;
	this.instance_1.setTransform(8,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ119, new cjs.Rectangle(-34,-15,68,30), null);


(lib.Символ118 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ119();
	this.instance.parent = this;
	this.instance.setTransform(28.2,-4.9,1,1,0,0,0,28.2,-4.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-11},19,cjs.Ease.get(1)).to({rotation:0},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34,-15,68,30);


(lib.Символ109 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ105();
	this.instance.parent = this;
	this.instance.setTransform(-0.7,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ109, new cjs.Rectangle(-16.2,-42.4,37,86), null);


(lib.Символ106 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 109
	this.instance = new lib.Символ109();
	this.instance.parent = this;
	this.instance.setTransform(377.4,22.3,1,0.79);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.89,y:11.4},9,cjs.Ease.get(-1)).to({scaleY:1,y:-0.7},10,cjs.Ease.get(1)).to({scaleY:0.9,y:10.7},10,cjs.Ease.get(-1)).to({scaleY:0.79,y:22.3},10,cjs.Ease.get(1)).wait(1));

	// Символ 109
	this.instance_1 = new lib.Символ109();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-29.2,-0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleY:0.86,y:11.7},9,cjs.Ease.get(-1)).to({scaleY:0.71,y:25.5},10,cjs.Ease.get(1)).to({scaleY:0.86,y:12.4},10,cjs.Ease.get(-1)).to({scaleY:1,y:-0.7},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.5,-43.2,444.6,100.5);


(lib.Символ104 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ106();
	this.instance.parent = this;
	this.instance.setTransform(-173,-14.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ104, new cjs.Rectangle(-218.5,-57.5,444.6,101.4), null);


(lib.Символ89 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ86();
	this.instance.parent = this;
	this.instance.setTransform(0,-1.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.14,scaleY:1.14},4,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},4,cjs.Ease.get(1)).wait(1).to({scaleX:1.14,scaleY:1.14},4,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},4,cjs.Ease.get(1)).wait(23));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-188.9,-21.7,380,48.5);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ89();
	this.instance.parent = this;
	this.instance.setTransform(-3.4,6.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ66();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-4.9,1.2);
	this.instance_1.alpha = 0.75;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ39, new cjs.Rectangle(-337,-43.9,664.2,90.1), null);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.sunduk2 = new lib.Символ27();
	this.sunduk2.parent = this;
	this.sunduk2.setTransform(0,20);

	this.timeline.addTween(cjs.Tween.get(this.sunduk2).to({y:10.6},16,cjs.Ease.get(-1)).to({y:0},18,cjs.Ease.get(1)).to({y:9.7},17,cjs.Ease.get(-1)).to({y:20},18,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92,-66.5,184,173);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.sunduk = new lib.Символ25();
	this.sunduk.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.sunduk).to({y:9.5},17,cjs.Ease.get(-1)).to({y:19},17,cjs.Ease.get(1)).to({y:9.3},18,cjs.Ease.get(-1)).to({y:0},17,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92,-86.5,184,173);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ17();
	this.instance.parent = this;
	this.instance.setTransform(0,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:0.7,y:1.7},39,cjs.Ease.get(-1)).to({rotation:0,y:3.1},40,cjs.Ease.get(0.93)).to({rotation:-0.7,y:1.6},41,cjs.Ease.get(-1)).to({rotation:0,y:0.3},39,cjs.Ease.get(0.93)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94,-48.2,188,97);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ19();
	this.instance.parent = this;
	this.instance.setTransform(258.1,-131.3,1.394,1.394,0,0,180);

	this.instance_1 = new lib.Символ19();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-248,-100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// ship.png
	this.instance_2 = new lib.Символ18();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-114.3,-108,1.075,1.075);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// fon.jpg
	this.instance_3 = new lib.fon();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-324,-164,1.075,1.075);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(-324,-215,688.1,378.9), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AjQAJIAShcIGPBLIgSBcg");
	var mask_graphics_29 = new cjs.Graphics().p("AjQAJIAShcIGPBLIgSBcg");
	var mask_graphics_30 = new cjs.Graphics().p("AjQAJIAShcIGPBLIgRBcg");
	var mask_graphics_31 = new cjs.Graphics().p("AjQAJIARhcIGQBLIgRBcg");
	var mask_graphics_32 = new cjs.Graphics().p("AjQAJIAShcIGPBLIgSBcg");
	var mask_graphics_33 = new cjs.Graphics().p("AjQAJIARhcIGQBLIgRBcg");
	var mask_graphics_34 = new cjs.Graphics().p("AjQAJIAShcIGPBLIgRBcg");
	var mask_graphics_35 = new cjs.Graphics().p("AjQAJIAShcIGPBLIgSBcg");
	var mask_graphics_36 = new cjs.Graphics().p("AjQAJIAShcIGPBLIgRBcg");
	var mask_graphics_37 = new cjs.Graphics().p("AjQAJIARhcIGQBLIgRBcg");
	var mask_graphics_38 = new cjs.Graphics().p("AjQAJIAShcIGPBLIgSBcg");
	var mask_graphics_39 = new cjs.Graphics().p("AjQAJIARhcIGQBLIgRBcg");
	var mask_graphics_40 = new cjs.Graphics().p("AjQAJIAShcIGPBLIgRBcg");
	var mask_graphics_41 = new cjs.Graphics().p("AjQAJIAShcIGPBLIgSBcg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:4.5,y:-8.3}).wait(29).to({graphics:mask_graphics_29,x:4.5,y:-8.3}).wait(1).to({graphics:mask_graphics_30,x:3.4,y:-5.9}).wait(1).to({graphics:mask_graphics_31,x:2.3,y:-3.5}).wait(1).to({graphics:mask_graphics_32,x:1.2,y:-1.2}).wait(1).to({graphics:mask_graphics_33,x:2.3,y:-3.5}).wait(1).to({graphics:mask_graphics_34,x:3.4,y:-5.9}).wait(1).to({graphics:mask_graphics_35,x:4.5,y:-8.3}).wait(1).to({graphics:mask_graphics_36,x:3.4,y:-5.9}).wait(1).to({graphics:mask_graphics_37,x:2.3,y:-3.5}).wait(1).to({graphics:mask_graphics_38,x:1.2,y:-1.2}).wait(1).to({graphics:mask_graphics_39,x:2.3,y:-3.5}).wait(1).to({graphics:mask_graphics_40,x:3.4,y:-5.9}).wait(1).to({graphics:mask_graphics_41,x:4.5,y:-8.3}).wait(9));

	// Слой 1
	this.instance = new lib.Символ11();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.4,-5.1,30,5.3);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ12();
	this.instance.parent = this;
	this.instance.setTransform(-15.1,-0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.pirat_03();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-46,-46);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(-46,-46,92,92), null);


(lib.Символ15_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hand_14.png
	this.instance_4 = new lib.Символ111();
	this.instance_4.parent = this;
	this.instance_4.setTransform(54,53);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// hand_08.png
	this.instance_5 = new lib.Символ113();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-5.5,54);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// hand_06.png
	this.instance_6 = new lib.Символ118();
	this.instance_6.parent = this;
	this.instance_6.setTransform(6,7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15_1, new cjs.Rectangle(-28,-8,136,114), null);


(lib.Символ64 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ15_1();
	this.instance.parent = this;
	this.instance.setTransform(69.3,11,1,1,18.5,0,0,6.9,-8.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgeAfQgNgNAAgSQAAgRANgNQANgNARAAQASAAANANQANANAAARQAAASgNANQgNANgSAAQgRAAgNgNg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.parent = this;
	this.instance.setTransform(36,36,1,1,0,0,0,36,36);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-1.1,y:36.1},24,cjs.Ease.get(-1)).to({rotation:-2.5,y:36},25,cjs.Ease.get(1)).to({rotation:-1.1,x:36.1,y:36.1},25,cjs.Ease.get(-1)).to({rotation:0,x:36,y:36},25,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46,-46,92,92);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pirat_03.png
	this.instance = new lib.Символ6();
	this.instance.parent = this;
	this.instance.setTransform(-7,-134);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// pirat_06.png
	this.instance_1 = new lib.Символ2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-5,-7.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// pirat_14.png
	this.instance_2 = new lib.Символ8();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-75,55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(-106,-180,189,319), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.parent = this;
	this.instance.setTransform(11.5,20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:23.7},29,cjs.Ease.get(-1)).to({y:27},30,cjs.Ease.get(1)).to({y:23.8},30,cjs.Ease.get(-1)).to({y:20.5},30,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94.5,-159.5,189,319);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.parent = this;
	this.instance.setTransform(7,157.5,1,1,0,0,0,7,157.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:1.2,x:7.1},59,cjs.Ease.get(1)).to({rotation:-1,x:7.2},120,cjs.Ease.get(1)).to({rotation:0,x:7},60,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94.5,-159.5,189,319);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(10).call(this.frame_19).wait(10).call(this.frame_29).wait(11));

	// Слой 1
	this.damochka1 = new lib.Символ14();
	this.damochka1.parent = this;
	this.damochka1.setTransform(0,159.5,1,1,0,0,0,0,159.5);

	this.timeline.addTween(cjs.Tween.get(this.damochka1).to({rotation:-9.7,x:-45},9,cjs.Ease.get(1)).to({rotation:0,x:0},9,cjs.Ease.get(1)).wait(1).to({rotation:15,x:31},10,cjs.Ease.get(1)).to({rotation:0,x:0},10,cjs.Ease.get(1)).wait(1));

	// Слой 4
	this.instance = new lib.Символ44();
	this.instance.parent = this;
	this.instance.setTransform(77.2,-106.4,0.297,0.297);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).to({scaleX:1.21,scaleY:1.21,x:183.6,y:-133.1,alpha:1},10,cjs.Ease.get(1)).to({scaleX:0.3,scaleY:0.3,x:77.2,y:-106.4,alpha:0},10,cjs.Ease.get(1)).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ41();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-55.7,-114.4,0.349,0.349);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.21,scaleY:1.21,x:29.6,y:-131,alpha:1},9,cjs.Ease.get(1)).to({scaleX:0.35,scaleY:0.35,x:-55.7,y:-114.4,alpha:0},9,cjs.Ease.get(1)).to({_off:true},1).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94.5,-159.5,189,319);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_7 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7).call(this.frame_7).wait(7));

	// sunduk.png
	this.sunduk_r = new lib.Символ28();
	this.sunduk_r.parent = this;
	this.sunduk_r.setTransform(200,92.5);

	this.timeline.addTween(cjs.Tween.get(this.sunduk_r).to({scaleX:1.21,scaleY:1.21,x:202.5,y:90.4},6,cjs.Ease.get(1)).wait(1).to({scaleX:1,scaleY:1,x:200,y:92.5},6,cjs.Ease.get(1)).wait(1));

	// sunduk.png
	this.sunduk_l = new lib.Символ26();
	this.sunduk_l.parent = this;
	this.sunduk_l.setTransform(-207,92.5);

	this.timeline.addTween(cjs.Tween.get(this.sunduk_l).to({scaleX:1.21,scaleY:1.21,x:-203,y:90.4},6,cjs.Ease.get(1)).wait(1).to({scaleX:1,scaleY:1,x:-207,y:92.5},6,cjs.Ease.get(1)).wait(1));

	// Слой 8
	this.instance = new lib.Символ104();
	this.instance.parent = this;
	this.instance.setTransform(-0.4,37.6);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-47.4,alpha:1},6,cjs.Ease.get(1)).wait(1).to({y:37.6,alpha:0},6,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.damochka = new lib.Символ34();
	this.damochka.parent = this;
	this.damochka.setTransform(-3,20);

	this.timeline.addTween(cjs.Tween.get(this.damochka).to({scaleX:1.1,scaleY:1.1,y:40},6,cjs.Ease.get(1)).wait(1).to({scaleX:1,scaleY:1,y:20},6,cjs.Ease.get(1)).wait(1));

	// Слой 7
	this.instance_1 = new lib.Символ82();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1.5,-249.7);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-2.5,y:-163.7,alpha:1},6).wait(1).to({x:-1.5,y:-249.7,alpha:0},6,cjs.Ease.get(1)).wait(1));

	// Слой 2
	this.txt = new lib.Символ39();
	this.txt.parent = this;
	this.txt.setTransform(0,-167.6);

	this.timeline.addTween(cjs.Tween.get(this.txt).to({y:-274.6},6,cjs.Ease.get(1)).wait(1).to({y:-167.6},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-337,-322.5,675.7,521.5);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		
		stage.canvas.style.cursor = "none";
		this.prizel.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor_222.bind(this));
		
		function fl_CustomMouseCursor_222() {
			_this.prizel.x = stage.mouseX/window.devicePixelRatio;
			_this.prizel.y = stage.mouseY/window.devicePixelRatio;
		}
		this.left.cursor = "none";
		this.right.cursor = "none";
		this.dev_vlevo.cursor = "none";
		this.dev_vpravo.cursor = "none";
		this.cursor = "none";
		
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		  function fl_MouseOverHandler_5()
		{
			_this.main.gotoAndPlay(1);
			_this.prizel.gotoAndStop(1);
		}
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		  function fl_MouseOutHandler_2()
		{
			_this.main.gotoAndPlay(8);
			_this.prizel.gotoAndStop(0);
		}
		
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.left.addEventListener("mouseover", fl_MouseOverHandler_22);
		
		function fl_MouseOverHandler_22()
		{
			_this.main.sunduk_l.sunduk.gotoAndPlay(1);
		}
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.left.addEventListener("mouseout", fl_MouseOutHandler_33);
		
		function fl_MouseOutHandler_33()
		{
			_this.main.sunduk_l.sunduk.gotoAndStop(0);
		}
		
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.right.addEventListener("mouseover", fl_MouseOverHandler_37);
		
		function fl_MouseOverHandler_37()
		{
			_this.main.sunduk_r.sunduk2.gotoAndPlay(1);
		}
		
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.right.addEventListener("mouseout", fl_MouseOutHandler_28);
		
		function fl_MouseOutHandler_28()
		{
			_this.main.sunduk_r.sunduk2.gotoAndStop(0);
		}
		
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.dev_vlevo.addEventListener("mouseover", fl_MouseOverHandler_49);
		
		function fl_MouseOverHandler_49()
		{
			_this.main.damochka.gotoAndPlay(1);
		}
		
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.dev_vlevo.addEventListener("mouseout", fl_MouseOutHandler_13);
		
		function fl_MouseOutHandler_13()
		{
			_this.main.damochka.gotoAndPlay(10);
		}
		
		
		
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.dev_vpravo.addEventListener("mouseover", fl_MouseOverHandler_53);
		
		function fl_MouseOverHandler_53()
		{
			_this.main.damochka.gotoAndPlay(21);
		}
		
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.dev_vpravo.addEventListener("mouseout", fl_MouseOutHandler_64);
		
		function fl_MouseOutHandler_64()
		{
			_this.main.damochka.gotoAndPlay(31);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 6
	this.prizel = new lib.Символ64();
	this.prizel.parent = this;
	this.prizel.setTransform(765.3,371.5,0.712,0.712);

	this.timeline.addTween(cjs.Tween.get(this.prizel).wait(1));

	// Слой 5
	this.dev_vpravo = new lib.Символ38();
	this.dev_vpravo.parent = this;
	this.dev_vpravo.setTransform(279.1,155.7,1,0.768);
	new cjs.ButtonHelper(this.dev_vpravo, 0, 1, 2, false, new lib.Символ38(), 3);

	this.dev_vlevo = new lib.Символ37();
	this.dev_vlevo.parent = this;
	this.dev_vlevo.setTransform(349.6,155.6,1,0.768);
	new cjs.ButtonHelper(this.dev_vlevo, 0, 1, 2, false, new lib.Символ37(), 3);

	this.right = new lib.Символ33();
	this.right.parent = this;
	this.right.setTransform(524.2,280.1);
	new cjs.ButtonHelper(this.right, 0, 1, 2, false, new lib.Символ33(), 3);

	this.left = new lib.Символ31();
	this.left.parent = this;
	this.left.setTransform(117.5,274.6);
	new cjs.ButtonHelper(this.left, 0, 1, 2, false, new lib.Символ31(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.left},{t:this.right},{t:this.dev_vlevo},{t:this.dev_vpravo}]}).wait(1));

	// Слой 1
	this.main = new lib.Символ24();
	this.main.parent = this;
	this.main.setTransform(322.5,191.5);

	this.timeline.addTween(cjs.Tween.get(this.main).wait(1));

	// Слой 2
	this.instance = new lib.Символ15();
	this.instance.parent = this;
	this.instance.setTransform(300,152.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(296,21.5,688.1,526.1);
// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/fon.jpg?1490867094419", id:"fon"},
		{src:"images/hand_03.png?1490867094419", id:"hand_03"},
		{src:"images/hand_06.png?1490867094419", id:"hand_06"},
		{src:"images/hand_08.png?1490867094419", id:"hand_08"},
		{src:"images/hand_14.png?1490867094419", id:"hand_14"},
		{src:"images/list.png?1490867094419", id:"list"},
		{src:"images/pirat_03.png?1490867094419", id:"pirat_03"},
		{src:"images/pirat_06.png?1490867094419", id:"pirat_06"},
		{src:"images/pirat_10.png?1490867094419", id:"pirat_10"},
		{src:"images/pirat_14.png?1490867094419", id:"pirat_14"},
		{src:"images/ship.png?1490867094419", id:"ship"},
		{src:"images/sunduk1.png?1490867094419", id:"sunduk1"},
		{src:"images/tit.png?1490867094419", id:"tit"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;