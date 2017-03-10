(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,576);


(lib.bolel = function() {
	this.initialize(img.bolel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,669,441);


(lib.flag = function() {
	this.initialize(img.flag);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,663,577);


(lib.foolb = function() {
	this.initialize(img.foolb);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,374,657);


(lib.logo_fb = function() {
	this.initialize(img.logo_fb);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,301,93);


(lib.logo_fnl = function() {
	this.initialize(img.logo_fnl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,147,150);// helper functions:

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


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AqeFWQgNgCgMgDQgMgGgMgGQgLgGgKgJQgKgJgIgKQgIgLgGgNQgFgOgEgPQgDgQAAgRQAAgQADgQQAEgPAFgOQAGgMAIgLQAIgLAKgJQAKgJALgGQAMgHAMgEIAZgHIAagCQAWAAAUAGQAWAGASAMQAWAUAIANQAGAKAEALQAEAMACANIhEAAQgEgKgGgIQgFgHgIgFQgHgFgKgCQgJgCgLAAQgPgBgNAGQgMAFgJAKQgJALgFAOQgFAOAAAQQAAAPAFAOQAFAOAJAKQAJALAMAGQANAGAPABQALgBAKgDQAKgDAIgFQAIgGAGgHQAFgJADgLIBEAAQgBAOgFANQgEAMgGAKQgGALgIAIQgHAIgJAHQgRANgXAGQgUAGgXAAgAJTFWIAAgIIArhXIhcioIAAgKIBOAAIAzBkIACAAIAvhkIBMAAIAAAKIiCEHgAHMFWIg8hpQgJABgSAAIAABoIhHAAIAAkRIBHAAIAABnIAFAAQANAAAKgCQAKgCAHgFQANgIAHgPQAHgTAAg0IBIAAQAAA3gHAYQgFATgKAPQgSAUgNAJIBKB4IAAALgAAiFWIAAkRIB1AAQARAAAQAHQAQAFALANQAMAKAGAQQAHAPAAASQAAANgGAMQgGAOgJAIQAQAIAIAPQAIAOAAATQAAASgFAPQgGAQgKALQgLANgQAGQgQAHgVAAgABmEYIA4AAQAKAAAFgHQAGgHAAgJQAAgJgGgHQgGgIgKAAIg3AAgABmCwIAsAAQAKAAAGgIQAFgFAAgKQAAgIgGgHQgFgGgKAAIgsAAgAhEFWIgQgjIhsAAIgQAjIhEAAIAAgKIB6kKIAfAAIB7EKIAAAKgAhrD4IgghHIgfBHIA/AAgAmlFWIAAjSIhDAAIAAg/IDLAAIAAA/IhDAAIAADSgAmUgkIAAgeIiiAAIAAAeIg5AAIAAhbIAbAAIBejZIAeAAIBhDZIAcAAIAABbgAnAiAIgnhjIgmBjIBNAAgAsehCQgNgDgNgEQgMgEgLgHQgMgGgJgJQgKgJgIgLQgIgLgGgNQgGgNgDgPQgDgPAAgRQAAgRADgQQADgPAGgNQAGgNAIgMQAIgKAKgJQAJgIAMgIQALgGAMgFIAagGIAZgCQAXAAAUAGQAWAGARANQAWASAIANQAHAKAEAMQAEAMACAOIhFAAQgDgLgGgHQgGgIgHgFQgIgFgJgCQgJgCgMgBQgPABgMAFQgNAGgJAJQgJAKgEAOQgFAOAAASQAAAPAEANQAFAOAJAKQAJALANAGQAMAGAPABQAMgBAKgCQAKgEAHgFQAIgFAGgJQAGgIACgLIBFAAQgCAPgEAMQgEAMgGALQgGAJgIAJQgIAIgJAHQgRAMgWAHQgVAFgXAAgAK3hDIAAkRIBGAAIAABRIAyAAQAQAAAbAJQASAHANAPQAMAMAGASQAGAQAAATQAAATgGARQgGARgMANQgNAOgSAIQgbAIgQAAgAL9iBIAyAAQAOAAAIgLQAHgKAAgNQAAgNgHgJQgJgLgNAAIgyAAgAIEhDIAAjTIhDAAIAAg+IDLAAIAAA+IhDAAIAADTgAF0hDIgQgiIhsAAIgQAiIhEAAIAAgKIB7kLIAeAAIB7ELIAAAKgAFNihIgfhIIgfBIIA+AAgABfhDIhHigIhECgIhEAAIAAgKIB5kLIAfAAIB7ELIAAAKgAk4hDIAAkRICqAAIAAA+IhlAAIAAAnIBdAAIAAA+IhdAAIAAAwIBpAAIAAA+g");
	this.shape.setTransform(91.3,34.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ31, new cjs.Rectangle(0,0,182.7,68.9), null);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.flag();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ24, new cjs.Rectangle(0,0,663,577), null);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EiV5AsmMAAAhZLMErzAAAMAAABZLg");
	this.shape.setTransform(959.4,285.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ21, new cjs.Rectangle(0,0,1918.8,570.9), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AqeFWQgNgCgMgDQgMgGgMgGQgLgGgKgJQgKgJgIgKQgIgLgGgNQgFgOgEgPQgDgQAAgRQAAgQADgQQAEgPAFgOQAGgMAIgLQAIgLAKgJQAKgJALgGQAMgHAMgEIAZgHIAagCQAWAAAUAGQAWAGASAMQAWAUAIANQAGAKAEALQAEAMACANIhEAAQgEgKgGgIQgFgHgIgFQgHgFgKgCQgJgCgLAAQgPgBgNAGQgMAFgJAKQgJALgFAOQgFAOAAAQQAAAPAFAOQAFAOAJAKQAJALAMAGQANAGAPABQALgBAKgDQAKgDAIgFQAIgGAGgHQAFgJADgLIBEAAQgBAOgFANQgEAMgGAKQgGALgIAIQgHAIgJAHQgRANgXAGQgUAGgXAAgAJTFWIAAgIIArhXIhcioIAAgKIBOAAIAzBkIACAAIAvhkIBMAAIAAAKIiCEHgAHMFWIg8hpQgJABgSAAIAABoIhHAAIAAkRIBHAAIAABnIAFAAQANAAAKgCQAKgCAHgFQANgIAHgPQAHgTAAg0IBIAAQAAA3gHAYQgFATgKAPQgSAUgNAJIBKB4IAAALgAAiFWIAAkRIB1AAQARAAAQAHQAQAFALANQAMAKAGAQQAHAPAAASQAAANgGAMQgGAOgJAIQAQAIAIAPQAIAOAAATQAAASgFAPQgGAQgKALQgLANgQAGQgQAHgVAAgABmEYIA4AAQAKAAAFgHQAGgHAAgJQAAgJgGgHQgGgIgKAAIg3AAgABmCwIAsAAQAKAAAGgIQAFgFAAgKQAAgIgGgHQgFgGgKAAIgsAAgAhEFWIgQgjIhsAAIgQAjIhEAAIAAgKIB6kKIAfAAIB7EKIAAAKgAhrD4IgghHIgfBHIA/AAgAmlFWIAAjSIhDAAIAAg/IDLAAIAAA/IhDAAIAADSgAmUgkIAAgeIiiAAIAAAeIg5AAIAAhbIAbAAIBejZIAeAAIBhDZIAcAAIAABbgAnAiAIgnhjIgmBjIBNAAgAsehCQgNgDgNgEQgMgEgLgHQgMgGgJgJQgKgJgIgLQgIgLgGgNQgGgNgDgPQgDgPAAgRQAAgRADgQQADgPAGgNQAGgNAIgMQAIgKAKgJQAJgIAMgIQALgGAMgFIAagGIAZgCQAXAAAUAGQAWAGARANQAWASAIANQAHAKAEAMQAEAMACAOIhFAAQgDgLgGgHQgGgIgHgFQgIgFgJgCQgJgCgMgBQgPABgMAFQgNAGgJAJQgJAKgEAOQgFAOAAASQAAAPAEANQAFAOAJAKQAJALANAGQAMAGAPABQAMgBAKgCQAKgEAHgFQAIgFAGgJQAGgIACgLIBFAAQgCAPgEAMQgEAMgGALQgGAJgIAJQgIAIgJAHQgRAMgWAHQgVAFgXAAgAK3hDIAAkRIBGAAIAABRIAyAAQAQAAAbAJQASAHANAPQAMAMAGASQAGAQAAATQAAATgGARQgGARgMANQgNAOgSAIQgbAIgQAAgAL9iBIAyAAQAOAAAIgLQAHgKAAgNQAAgNgHgJQgJgLgNAAIgyAAgAIEhDIAAjTIhDAAIAAg+IDLAAIAAA+IhDAAIAADTgAF0hDIgQgiIhsAAIgQAiIhEAAIAAgKIB7kLIAeAAIB7ELIAAAKgAFNihIgfhIIgfBIIA+AAgABfhDIhHigIhECgIhEAAIAAgKIB5kLIAfAAIB7ELIAAAKgAk4hDIAAkRICqAAIAAA+IhlAAIAAAnIBdAAIAAA+IhdAAIAAAwIBpAAIAAA+g");
	this.shape.setTransform(91.3,34.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(0,0,182.7,68.9), null);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().rr(-221.35,-67.1,442.7,134.2,23.2);
	this.shape.setTransform(167.2,50.7,0.756,0.756);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#780000").s().rr(-221.35,-67.1,442.7,134.2,23.2);
	this.shape_1.setTransform(167.2,58.7,0.756,0.756);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(0,0,334.5,109.4), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.foolb();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(0,0,374,657), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo_fnl();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(0,0,147,150), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bolel();
	this.instance.parent = this;
	this.instance.setTransform(0,130.5,1,1,-11.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(0,0,742.2,563), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.flag();
	this.instance.parent = this;
	this.instance.setTransform(648.5,0,1,1,0,-12,168);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(0,0,768.5,702.3), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.logo_fb();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(0,0,301,93), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ARlCeQgOgGgOgIQgNgHgLgLQgMgLgKgMQgJgOgHgPQgHgQgDgSQgEgTAAgUQAAhvClg3QAVAAAoAKQAOAFAOAIQANAIAMALQAMAKAJANQAJANAHAQQAHAQADASQAEASAAAUQAABvilA4QgpgDgUgHgASFhQQgPAGgLALQgMALgGAQQgHARAAAUQAAAVAHARQAGAQAMALQALALAPAGQAOAFAPAAQAQAAAOgFQAPgGALgLQAMgLAGgQQAHgRAAgVQAAgUgHgRQgGgQgMgLQgLgLgPgGQgOgFgQAAQgPAAgOAFgAHfCiQgPgDgPgEQgOgGgOgIQgNgHgMgKQgLgLgKgNQgJgNgHgPQgHgQgEgRQgDgTgBgUQABgTADgSQAEgSAHgQQAHgPAJgNQAKgNALgKQAMgKANgIQAOgIAOgFIAegIIAegCQAaAAAYAHQAaAHAVAPQAaAWAJAQQAIALAFAOQAFAOACAQIhRAAQgEgMgHgJQgHgJgJgGQgJgGgLgDQgKgCgOAAQgRAAgPAGQgPAGgLAMQgKAMgGARQgGAQAAATQAAASAGAQQAGAQAKAMQALANAOAHQAQAHARABQAOAAALgEQAMgDAJgHQAKgGAGgKQAHgKADgNIBRAAQgCARgFAPQgFAOgHANQgHAMgJAKQgJAJgLAIQgUAPgaAHQgZAHgbAAgA/xCiQgPgDgPgEQgOgGgOgIQgNgHgMgKQgLgLgKgNQgJgNgHgPQgHgQgEgRQgDgTgBgUQABgTADgSQAEgSAHgQQAHgPAJgNQAKgNALgKQAMgKANgIQAOgIAOgFIAegIIAegCQAaAAAYAHQAaAHAVAPQAaAWAJAQQAIALAFAOQAFAOACAQIhRAAQgEgMgHgJQgHgJgJgGQgJgGgLgDQgKgCgOAAQgRAAgPAGQgPAGgLAMQgKAMgGARQgGAQAAATQAAASAGAQQAGAQAKAMQALANAOAHQAQAHARABQAOAAALgEQAMgDAJgHQAKgGAGgKQAHgKADgNIBRAAQgCARgFAPQgFAOgHANQgHAMgJAKQgJAJgLAIQgUAPgaAHQgZAHgbAAgAWGCiIAAlCIBUAAIAACeICjifIAeAAIAAFCIhWAAIAAieIiiCfgAeaChIg6hlIgDAAIg7BlIhZAAIAAgMIBoidIhdiLIAAgNIBWAAIAzBUIACAAIA0hUIBVAAIAAANIhdCLIBoCdIAAAMgALVChIAAlBICKAAQAUAAATAIQASAHAOAOQANANAIASQAIATAAAUQAAAPgHAPQgHAQgLAKQATAJAKARQAJARAAAWQAAAVgGASQgHATgMANQgNAPgTAHQgTAIgYAAgAMlBYIBBAAQAMAAAHgJQAGgHAAgLQAAgLgGgIQgHgJgMAAIhBAAgAMlgiIA0AAQALAAAHgIQAGgIAAgKQAAgLgGgHQgHgIgMAAIgzAAgAByChIgSgoIh/AAIgSAoIhRAAIAAgMICQk5IAkAAICRE5IAAAMgABFAyIglhTIgkBTIBJAAgAkAChIAAiBIhjAAIAACBIhUAAIAAlBIBUAAIAAB1IBjAAIAAh1IBUAAIAAFBgAt1ChIAAlBIBSAAIAABgIA7AAQAUAAAfAKQAVAJAPARQAOAPAIAUQAHATAAAWQAAAWgHAUQgIAUgOAQQgPAQgVAJQgfAKgUAAgAsjBYIA7AAQARAAAJgNQAJgLAAgQQgBgPgIgLQgKgNgQAAIg7AAgAyxChIAAlBICKAAQAUAAATAIQASAHAOAOQANANAIASQAIATAAAUQAAAPgHAPQgHAQgLAKQATAJAKARQAJARAAAWQAAAVgGASQgHATgMANQgNAPgTAHQgTAIgYAAgAxhBYIBBAAQAMAAAHgJQAGgHAAgLQAAgLgGgIQgHgJgMAAIhBAAgAxhgiIA0AAQALAAAHgIQAGgIAAgKQAAgLgGgHQgHgIgMAAIgzAAgA0sChIgSgoIiAAAIgSAoIhRAAIAAgMICRk5IAkAAICRE5IAAAMgA1ZAyIglhTIglBTIBKAAgA7LChIAAj3IhQAAIAAhKIDwAAIAABKIhPAAIAAD3gEAgsACUQgNgMAAgTQAAgJADgIQADgIAHgGQAMgLAUAAQATAAANALQAGAGADAIQAEAIAAAJQAAATgNAMQgNALgTAAQgUAAgMgLgEAgjAA/IgGjmIBcAAIgFDmg");
	this.shape.setTransform(228.7,20.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(11.8,3.6,433.8,33.6), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A8UDNQgOgGgOgIQgNgIgLgKQgMgLgKgMQgJgOgHgQQgHgQgDgRQgEgTAAgVQAAhuClg3QAVAAAoAKQAOAFAOAIQANAIAMAKQAMALAJANQAJANAHAPQAHARADARQAEASAAAUQAABwilA4QgpgDgUgHgA70ghQgPAFgLALQgMAMgGAOQgHASAAAUQAAAWAHARQAGAQAMALQALALAPAFQAOAGAPAAQAQAAAOgGQAPgFALgLQAMgLAGgQQAHgRAAgWQAAgUgHgSQgGgOgMgMQgLgLgPgFQgOgGgQABQgPgBgOAGgAmJDPQgVgHgOgOQgPgOgIgVQgHgVAAgbIBIAAQAAATALALQALALASAAQAUAAALgLQALgKAAgPQAAgPgLgKQgLgLgUAAIgWAAIAAhEIAWAAQAOAAAIgIQAIgHAAgMQAAgMgIgHQgIgJgOAAQgNAAgIAFQgHAFAAAJIhJAAQgBgWAHgQQAIgQAOgMQAOgKATgGQATgFAVAAQAaAAAVAIQATAIAOANQANANAHARQAGARAAASQAAAQgHAPQgHARgOALQAMAGAJAIQAJAIAGAKQAFAJADANQADALAAAOQAAAWgIASQgIASgQAOQgPAOgXAHQgYAIgfAAQgaAAgVgHgAW1DQIAAlBIBUAAIAACdICjifIAeAAIAAFDIhVAAIAAifIiiCfgAuVDQIAAlBIBUAAIAACdICiifIAeAAIAAFDIhVAAIAAifIiiCfgAfKDQIg7hlIgDAAIg6BlIhZAAIAAgMIBoifIhdiJIAAgNIBVAAIAzBUIADAAIAzhUIBVAAIAAANIhdCJIBpCfIAAAMgAPLDQIAAlBIBUAAIAAD1IBOAAIAAj1IBUAAIAAD1IBOAAIAAj1IBUAAIAAFBgANQDQIgTgoIh/AAIgTAoIhQAAIAAgMICRk5IAjAAICRE5IAAAMgALZBhIBJAAIglhVgAHdDQIAAiBIhkAAIAACBIhUAAIAAlBIBUAAIAAB0IBkAAIAAh0IBUAAIAAFBgAArDQIgSgoIh/AAIgSAoIhRAAIAAgMICRk5IAkAAICQE5IAAAMgAhLBhIBKAAIglhVgAysDQIAAlBIDJAAIAABJIh3AAIAAAtIBtAAIAABJIhtAAIAAA5IB7AAIAABJgA0nDQIhTi9IhSC9IhQAAIAAgMICRk5IAjAAICRE5IAAAMgEginADQIAAlBIDnAAIAABJIiVAAIAAAoIA7AAQAUgBAfAJQAVAIAPAPQAOAPAIASQAHATAAAUQAAAUgHATQgIASgOAPQgPAPgVAJQgfAJgUAAgEghVACHIA7AAQAQAAAKgKQAIgKAAgMQAAgNgJgIQgJgLgQABIg7AAgEAhbADDQgNgMAAgTQAAgJADgJQAEgHAGgGQANgMATAAQATAAANAMQAGAGAEAHQADAJAAAJQAAATgNAMQgNALgTAAQgTAAgNgLgEAhTABtIgHjlIBcAAIgFDlgAsgiHQgPgGgKgKQgKgKgGgOQgGgPAAgTIAvgFQABANAIAGQAIAHAPAAQAPgBAIgFQAJgGACgOIAvAFQAAATgGAPQgFAOgKAKQgLAKgOAGQgPAEgTAAQgTAAgOgEg");
	this.shape.setTransform(229.7,15.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(8.1,-5.7,443.3,42.9), null);


(lib.Анимация1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#780000").s().rr(-221.35,-67.1,442.7,134.2,23.2);
	this.shape.setTransform(0,4,0.756,0.756);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-167.2,-46.7,334.5,101.4);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(167.2,46.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ32, new cjs.Rectangle(0,0,334.5,101.4), null);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_5 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(5).call(this.frame_5).wait(2));

	// Слой 5
	this.instance = new lib.Символ31();
	this.instance.parent = this;
	this.instance.setTransform(167.2,50.8,1,1,0,0,0,91.3,34.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},5).wait(2));

	// Слой 2
	this.instance_1 = new lib.Символ20();
	this.instance_1.parent = this;
	this.instance_1.setTransform(167.2,50.8,1,1,0,0,0,91.3,34.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7));

	// Слой 4
	this.instance_2 = new lib.Символ32();
	this.instance_2.parent = this;
	this.instance_2.setTransform(167.2,50.7,1,1,0,0,0,167.2,50.7);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleY:1.03,y:51.7,alpha:1},5).wait(2));

	// Слой 1
	this.instance_3 = new lib.Символ19();
	this.instance_3.parent = this;
	this.instance_3.setTransform(167.2,50.7,1,1,0,0,0,167.2,50.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,334.5,109.4);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ20();
	this.instance.parent = this;
	this.instance.setTransform(167.2,50.8,1,1,0,0,0,91.3,34.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(2));

	// Слой 1
	this.instance_1 = new lib.Символ19();
	this.instance_1.parent = this;
	this.instance_1.setTransform(167.2,50.7,1,1,0,0,0,167.2,50.7);

	this.instance_2 = new lib.Символ29();
	this.instance_2.parent = this;
	this.instance_2.setTransform(167.2,54.7,1,1,0,0,0,167.2,54.7);

	this.instance_3 = new lib.Символ20();
	this.instance_3.parent = this;
	this.instance_3.setTransform(167.2,50.8,1,1,0,0,0,91.3,34.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_1},{t:this.instance_3}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,334.5,109.4);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ24();
	this.instance.parent = this;
	this.instance.setTransform(331.5,288.5,1,1,0,0,0,331.5,288.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ25, new cjs.Rectangle(0,0,663,577), null);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ21();
	this.instance.parent = this;
	this.instance.setTransform(959.4,285.4,1,1,0,0,0,959.4,285.4);
	this.instance.alpha = 0.289;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(0,0,1918.8,570.9), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ17();
	this.instance.parent = this;
	this.instance.setTransform(187,268.5,1,1,0,0,0,187,328.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:297.8},19,cjs.Ease.get(-1)).to({y:328.5},20,cjs.Ease.get(1)).to({y:298.5},20,cjs.Ease.get(-1)).to({y:268.5},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-60,374,657);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.parent = this;
	this.instance.setTransform(371.1,281.5,1,1,0,0,0,371.1,281.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:281.4,rotation:-1.5,x:371.2,y:300.9},19,cjs.Ease.get(-1)).to({regY:281.5,rotation:-3.5,y:321.5},20,cjs.Ease.get(1)).to({regX:371,regY:281.6,rotation:-1.6,x:371.1,y:301.6},20,cjs.Ease.get(-1)).to({regX:371.1,regY:281.5,rotation:0,y:281.5},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,742.2,563);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.parent = this;
	this.instance.setTransform(498.4,482.9,1,1,-25.7,0,0,384.2,351);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(0,0,997,966), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ25();
	this.instance.parent = this;
	this.instance.setTransform(331.5,288.5,1,1,0,0,0,331.5,288.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,skewY:2.5,x:331.6,y:304},14,cjs.Ease.get(-1)).to({scaleX:1,skewY:5.5,x:331.5,y:320.6},15,cjs.Ease.get(1)).to({scaleX:1,skewY:2.5,x:331.6,y:303.5},16,cjs.Ease.get(-1)).to({scaleX:1,skewY:0,x:331.5,y:288.5},14,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,663,577);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ28();
	this.instance.parent = this;
	this.instance.setTransform(167.2,54.7,1,1,0,0,0,167.2,54.7);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ28(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(0,0,334.5,109.4), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ2();
	this.instance.parent = this;
	this.instance.setTransform(229.4,192.2,1.153,1.153,0,0,0,229.3,24.9);

	this.instance_1 = new lib.Символ2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(229.4,24.9,1.153,1.153,0,0,0,229.3,24.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(229.2,103.6,1.181,1.181,0,0,0,229.2,25.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(-27.4,-10.4,512.9,216.8), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.parent = this;
	this.instance.setTransform(73.5,75,1,1,0,0,0,73.5,75);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,4,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(-4,-2,161,164), null);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ4();
	this.instance.parent = this;
	this.instance.setTransform(238.4,62.7,0.928,0.928,0,0,0,229.5,57.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-10.3},9).wait(30).to({y:-93.3},10).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,475.8,201.1);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ22();
	this.instance.parent = this;
	this.instance.setTransform(959.4,285.4,1,1,0,0,0,959.4,285.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.773},9,cjs.Ease.get(-1)).to({alpha:0.52},10,cjs.Ease.get(1)).to({alpha:0.762},10,cjs.Ease.get(-1)).to({alpha:1},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1918.8,570.9);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.parent = this;
	this.instance.setTransform(498.4,483,1,1,0,0,0,498.4,483);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,skewY:3,y:509.9},29,cjs.Ease.get(-1)).to({scaleX:1,skewY:5.7,y:533.1},25,cjs.Ease.get(1)).to({scaleX:1,skewY:2.8,x:498.5,y:507.2},29,cjs.Ease.get(-1)).to({scaleX:1,skewY:0,x:498.4,y:483},27,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,997,966);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ23();
	this.instance.parent = this;
	this.instance.setTransform(1437.4,354.5,1,1,0,0,0,959.4,285.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.bg();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1933,0);

	this.instance_2 = new lib.bg();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-115,0);

	this.instance_3 = new lib.bg();
	this.instance_3.parent = this;
	this.instance_3.setTransform(909,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(-115,0,3072,639.9), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.parent = this;
	this.instance.setTransform(73.4,101.1,1.347,1.347,0,0,0,73.4,75);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.18,scaleY:1.18,x:73.5,y:112.5},9,cjs.Ease.get(-1)).to({regX:73.5,scaleX:1,scaleY:1,y:125},10,cjs.Ease.get(1)).to({scaleX:1.17,scaleY:1.17,y:113.1},10,cjs.Ease.get(-1)).to({regX:73.4,scaleX:1.35,scaleY:1.35,x:73.4,y:101.1},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.4,-1.9,211,215);


// stage content:
(lib.catfish = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		canvas.style.cursor = "pointer";
		canvas.addEventListener("click", function() {
		    window.callClick();
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 5
	this.instance = new lib.Символ33();
	this.instance.parent = this;
	this.instance.setTransform(987.6,120.8,1,1,0,0,0,237.8,100.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 4
	this.instance_1 = new lib.Символ6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1355.2,44.1,0.527,0.527,0,0,0,167.2,50.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ7();
	this.instance_2.parent = this;
	this.instance_2.setTransform(497.1,33.2,0.35,0.35,0,0,0,73.6,75.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 2
	this.instance_3 = new lib.Символ5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(633,45.7,0.594,0.594,0,0,0,150.6,46.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Слой 8
	this.instance_4 = new lib.Символ15();
	this.instance_4.parent = this;
	this.instance_4.setTransform(196.4,53.2,0.61,0.61,0,0,0,371.1,281.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Слой 9
	this.instance_5 = new lib.Символ16();
	this.instance_5.parent = this;
	this.instance_5.setTransform(1576.3,215.6,0.657,0.657,9.8,0,0,187.1,328.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Слой 7
	this.instance_6 = new lib.Символ14();
	this.instance_6.parent = this;
	this.instance_6.setTransform(313.4,156.1,1,1,0,0,0,498.4,483);

	this.instance_7 = new lib.Символ8();
	this.instance_7.parent = this;
	this.instance_7.setTransform(1607.4,149.4,1,1,0,0,0,331.5,288.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6}]}).wait(1));

	// Слой 3
	this.instance_8 = new lib.Символ11();
	this.instance_8.parent = this;
	this.instance_8.setTransform(1000.5,221,1,1,0,0,0,1478.5,288);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(367,-281.9,3072,966);
// library properties:
lib.properties = {
	width: 1920,
	height: 90,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg?1487693691017", id:"bg"},
		{src:"images/bolel.png?1487693691017", id:"bolel"},
		{src:"images/flag.png?1487693691017", id:"flag"},
		{src:"images/foolb.png?1487693691017", id:"foolb"},
		{src:"images/logo_fb.png?1487693691017", id:"logo_fb"},
		{src:"images/logo_fnl.png?1487693691017", id:"logo_fnl"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;