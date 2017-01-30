(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.basket = function() {
	this.initialize(img.basket);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,79);


(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,305);


(lib.bg1 = function() {
	this.initialize(img.bg1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,305);


(lib.box = function() {
	this.initialize(img.box);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,84,82);


(lib.Car_02 = function() {
	this.initialize(img.Car_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,577,368);


(lib.Car_05 = function() {
	this.initialize(img.Car_05);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,92,65);


(lib.Car_09 = function() {
	this.initialize(img.Car_09);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,108,145);


(lib.Car_13 = function() {
	this.initialize(img.Car_13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,109,80);


(lib.Car_16 = function() {
	this.initialize(img.Car_16);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,135,74);


(lib.elk_2uu1 = function() {
	this.initialize(img.elk_2uu1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,894,894);


(lib.Fon_pered = function() {
	this.initialize(img.Fon_pered);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2276,274);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,77);


(lib.weel = function() {
	this.initialize(img.weel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,63,63);// helper functions:

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


(lib.Символ58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.box();
	this.instance.parent = this;
	this.instance.setTransform(-26.5,-25.8,0.631,0.631);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ58, new cjs.Rectangle(-26.5,-25.8,53,51.8), null);


(lib.Символ56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.box();
	this.instance.parent = this;
	this.instance.setTransform(-26.5,-25.8,0.631,0.631);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ56, new cjs.Rectangle(-26.5,-25.8,53,51.8), null);


(lib.Символ54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.box();
	this.instance.parent = this;
	this.instance.setTransform(-26.5,-25.9,0.631,0.631);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ54, new cjs.Rectangle(-26.5,-25.9,53,51.8), null);


(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000099").s().p("AiTC5IgHgoIhYAAIgHAoIhIAAIgBgNIgFg3IgBgNIADAAIgCgPIgBgLQgFAOgFAIQgGAJgIAHQgIAIgLAEQgKAGgMABQgNADgPAAIgLgBIgOABQgggBgNgFIgUgIIgSgLQgIgGgGgKIgEgIIAAAxIh9AAIAAhfIAUgGIAAhlIgqgDIAABoIAUAGIAABfIh9AAIAAhfIAUgGIAAhtIgUgDIAAhqIAZACIAAgCIBQAGIB/AAIAADUIAIADQgCgQABgUIAAgFIAAgTIAAgCIAAgGIAAgGQgBgKABgLQAAgUAEgSQAEgSAIgQQAIgRAMgMQAMgMAQgGQAPgHAigCIARABIAIgBQAPAAANACQAMACALAEQAKAEAJAIQAIAHAGAJQANAaAEAPQAHAgAAASIgBANIABAOIAAABIAAAEIgBAOIABANQgBAXgDAPIAKgEIAhh4IgIAAIgCgkIACAAIgCgcIABAAIgBgGIACAAIgCgbIAZABIAAgBIClAFIAGDUIAQAFIAMgEIAdh2IgIAAIgCgnIABAAIgBgbIAAAAIAAgGIABAAIgBgcIAZACIAAgCIB7AIIAoDSIAMAEIAOgFIABhtIgVgDIAAhqIAZACIAAgCIA9ADQAQABAPADQAPACAOAEQAOAFAMAHQALAHAKAKIAFAFIAAguIAZABIAAgBIBQAFIAAA6IAQg6IBIgFIAAACIALgBIAAgBIAIAAIAGAAIAAABIALAAIAAgBIBQAFIAAA/IAkg/IBVAAIAADVIAUAGIAAAbIAAAAIAAAiIAAAAIAAAhIkwABIAAgBIgZABIAAgBIh5AAIAAhfIAUgFIAAhuIgFgBIAAAKIAAAJIAAAGIAAASIAAAKQABAkgOASQgFAIgHAFQgJAGgKAFQgMAEgPABIgQACIAABJIhwAAIAAABIhzAAIAAhVIgPAAIAABYIgxAGQgRABgKgBQgRABgJgBIgGgBIgDAmgAIjhIIgQAxIASA9IAMAEIANgEIAAhuIgNgCgAKxAoIAGgCIAAgJgAi+hCIgSBoIAngBIgFhogAm8hGQgIAFgGAKQgGAKgCAPIgCAGIABADQACAOAEAKQAFALAIAEIAJAFIAKgFQAIgFAFgMQAFgJACgQIABgFIgBgFQgCgOgFgJQgFgJgIgFIgHgCIgIADgAEBgqIAIgDIgIgCg");
	this.shape.setTransform(-1.2,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ51, new cjs.Rectangle(-81.2,-18.7,160.1,36.9), null);


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC01").s().p("AiGCaIgHgnIhyAAIgGAnIgvAAIgBgMIgFg3IgBgNIAUgGIAwi3IgXACIgCglICkAFIAHDVIAUAGIgGBQgAjKhgIgaCXIAAANIBKAAIgIingAg2B2QgNgCgCgHIAAgiIAUgGIAsi0IgXABIgCgnIB7AHIApDTIAUAGIAAAiIhaAAIAAgiIATgGIgKgtIg7AAIgKAtIATAGIAAAlIgxAGIgQABIgMgBgAAUgcIAAAOIAwAAIAAgPIgLhCIgVAAgAHIABIgNAAIAABDIAUAGIAAAiIhlAAIAAgiIAVgGIAAiqIgVgDIAAgtIBRAFIgBBlIAOgBIAchkIBHgFIAAAtIgUADIgZBNIAaBdIAUAGIAAAiIhIAAgAKvBsIAAgiIAUgGIABhxIg9BqIAAAHIAUAGIAAAiIhlAAIAAgiIAUgGIABiqIgUgDIgBgtIBQAFIAABrIA9hrIA8AAIAADVIAVAGIgBAigAClBsIAAgiIAUgGIAAiqIgUgEIAAgsIA8ADQAQAAAPADQAPACAOAFQAPAEALAHQAMAHAJAKQATATACAnQAAAmgNARQgFAIgIAFQgIAGgLAEQgMAFgPABQgQACgUgBIAAAhIAUAHIAAAigAD1hOIAABDQAwAGgBgoQgBgigjAAIgLABgAnfBmIgUgIIgRgLQgIgHgGgKQgHgKgEgNQgEgOgBgRQgCgQAAgVQABgUAEgSQAEgSAHgQQAIgRAMgMQAMgLAQgHQAPgHAigCQAPAAANACQANACAKAEQALAFAIAHQAIAHAGAJQAOAaAEAQQAGAfAAASQgCAkgEAQQgKAfgIANQgFAJgJAHQgIAIgKAEQgLAFgMACQgNADgOAAQgggCgOgEgAnIhkQgJAFgFAJQgGAKgDAPQgDAPAAAUQAAATACAPQACAPAFAKQAEALAJAFQAIAFANAAQANAAAJgFQAJgGAEgLQAFgLADgQQACgOAAgUQAAgVgCgOQgDgOgEgJQgFgJgIgFQgJgEgLAAQgMAAgIAFgAqUBsIAAgiIAVgGIAAiiIhEgFIABCmIAUAHIAAAiIhlAAIAAgiIAUgGIABiqIgVgEIAAgsIBRAFIB/AAIAADVIAUAGIAAAig");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ50, new cjs.Rectangle(-78.7,-15.4,157.6,30.9), null);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000099").s().p("ABlClIgGAAQgRABgVgDQgkgJgVAAIAAgtIgDAGQgFAJgIAHQgJAIgKAEQgLAFgMACQgNADgOAAIgIgBIgMABIgBAAIgEAAIgIgBIgNABQgfgCgOgEIgUgIIgPgJIAAAXIkOAAIAAhbIAUgFIAchxIAHAAIADgNIgPABIgCglIACAAIgCgRIAAAAIAAgJIAAAAIAAgEIABAAIgBgaIAUABIAAgBIAEAAIAAAAIAVABIAAgBIB8AEIAaCIIAAgQQABgTAEgSQADgSAIgRQAIgRAMgLQAMgMAQgHQAPgGAigDIAPABIAFgBIAFAAIAOABIAGgBQAPAAANACQANACALAFQAKAEAJAHQAHAHAGAKIADAHIAAARIABAAIgBgRIAAAAIAAgNIABAAIgBgaIAVACIAAgCIAEAAIAAAAIAVACIAAgCIAuAEQAQgDAWgCIAKABIALgBIADAAIACAAIAJABIALgBQAKAAAIADQAIACAGAFIAHAGIAAgQIAUABIAAgBIAEAAIAAAAIAVABIAAgBIBQAEIAAAcIAPgcIBqAAIAADWIAUAGIAAAaIAAAAIAAAeIAAAAIAAAiIkKAAIAAgOIgGAEQgNAJgQAFQgQAGgUACQgMABgMgBIgJABIgKgBgAAOBHIgFAQIAFgBIAAgCQAFgQACgjIAAgKQgDAhgEAPgAlOBWIADgBIgLg7IAAgPIAAgDIADgNIgFARIgBAOIgLA7IACABIAFgaIAFACIAFgCgAFVBMIAAAHIACABIAMgWIAAgMgACQA9IACgHQgCgLgQgEIgDAAIAAAOIACgBQAMADAFAGgAh9AWQAEAKAIAFQAIgGAEgLQAFgLACgOIACALIAAgGIgCgSIAAgBQgCgOgFgJQgEgHgFgFQgIAFgEAIQgGAKgDAPIAAAEIgCAQIABAHIABgLQACAMAEAKgAAUADIAAAGIABgEIAAgLIgBAJgADrgYQgBAHgCAGIADAHIAAgZIAAAFgAARgsIADABIAAALIAAAGIABAGIgBgkIgFgBIACANgAB+gsIAAAQQALgFADgLQgBgEgDgDQgHADgDAEgADrg2IgBADIABACIAAABIAAADIAAgLIAAACg");
	this.shape.setTransform(0.2,-10.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ47, new cjs.Rectangle(-47.9,-26.7,96.3,33.1), null);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("ABQCHQglgJgUAAIAAgiIAUgGIAAiqIgUgEIAAgsIBQAHQAUgFAegDQAKABAIACQAIACAGAFQAMAJAGAMQAHALACAOIAAABQABANgBALQgBAKgEAHQgFANgLAEQAGAAAIAEQAEADAEALQAEAJADASQAEASgEASQgEARgMARQgGAKgMAIQgMAJgRAFQgQAGgUACIgNAAQgNAAgPgCgABmAKIAABOIAbgBQAIAAAHgEQAIgDAHgHQAIgHACgMQADgLgDgQQgDgSgoAAIgYABgACJhWQgKABgKAEQgKAEgEAFIAAAxQA9AHAAgjIAAgHIAAgHQAAgLgIgGQgGgEgJAAIgEAAgAFmB9IAAgiIAUgGIABhxIg9BqIAAAHIAUAGIAAAiIhlAAIAAgiIAUgGIABiqIgUgDIgBgtIBQAFIAABrIA9hrIA8AAIAADVIAVAGIgBAigAiZB3IgUgIIgSgLQgIgHgGgKQgGgKgEgNQgEgOgCgRQgCgRABgUQAAgUAEgSQAEgSAIgQQAIgRAMgMQAMgLAQgHQAPgHAigCQAPAAANACQAMACALAEQAKAFAJAHQAIAHAGAJQANAaAEAQQAHAfAAASQgCAkgEAQQgKAfgIANQgGAJgIAHQgIAIgLAEQgKAFgMACQgNADgPAAQgggCgNgEgAiDhTQgIAFgGAJQgGAKgCAPQgDAPAAAUQAAASACAQQACAPAEAKQAFALAIAFQAJAFANAAQANAAAJgFQAIgGAFgLQAFgLACgQQACgPAAgTQAAgVgCgOQgCgOgFgJQgFgJgIgFQgIgEgMAAQgLAAgJAFgAlDB9IAAgiIATgGIgQhWIABgPIgQhBIgOAAIgSBCIAAAOIgRBWIAUAGIAAAiIheAAIAAgiIAUgGIAti2IgXABIgCglIB8AFIApDVIAUAGIAAAig");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ44, new cjs.Rectangle(-45.9,-13.7,91.8,27.5), null);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-50,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ42, new cjs.Rectangle(-50,-38.5,100,77), null);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(3,1,1).p("AAuhoQATAIAQAQQALAMAIAOABnAxQgIARgOAPQgRAPgSAJAhjg2QAIgOALgMQAOgNAPgIAgzBmQgPgIgOgNQgOgPgIgR");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ37, new cjs.Rectangle(-11.8,-11.9,23.6,23.9), null);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(5,1,1).p("AhtkXQAygUA7gBQAsAAAoALABeEeQgsAOgyABQg0AAgvgRAEchjQARAugBA1QAAA8gUAyAkgBUQgLgogBgsQABgyAOgr");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ34, new cjs.Rectangle(-32.5,-32.5,65.1,65.1), null);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.basket();
	this.instance.parent = this;
	this.instance.setTransform(-100,-39.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ32, new cjs.Rectangle(-100,-39.5,200,79), null);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.box();
	this.instance.parent = this;
	this.instance.setTransform(-42,-41);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ30, new cjs.Rectangle(-42,-41,84,82), null);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.elk_2uu1();
	this.instance.parent = this;
	this.instance.setTransform(447,-1341);

	this.instance_1 = new lib.elk_2uu1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(447,-447);

	this.instance_2 = new lib.elk_2uu1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-447,-1341);

	this.instance_3 = new lib.elk_2uu1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-447,-447);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ25, new cjs.Rectangle(-447,-1341,1788,1788), null);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.weel();
	this.instance.parent = this;
	this.instance.setTransform(-19.7,-19.7,0.625,0.625);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(-19.7,-19.7,39.4,39.4), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Car_09();
	this.instance.parent = this;
	this.instance.setTransform(-34,-45.7,0.63,0.63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(-34,-45.7,68.1,91.4), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Car_05();
	this.instance.parent = this;
	this.instance.setTransform(-29,-20.5,0.63,0.63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(-29,-20.5,58,41), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Car_13();
	this.instance.parent = this;
	this.instance.setTransform(-34.3,-25.2,0.63,0.63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(-34.3,-25.2,68.7,50.4), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Car_16();
	this.instance.parent = this;
	this.instance.setTransform(-42.5,-23.3,0.63,0.63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(-42.5,-23.3,85.1,46.6), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Car_02();
	this.instance.parent = this;
	this.instance.setTransform(-181.7,-115.9,0.63,0.63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(-181.7,-115.9,363.5,231.8), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg1();
	this.instance.parent = this;
	this.instance.setTransform(316.5,-152);

	this.instance_1 = new lib.bg1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(319.5,-153,1,1,0,0,180);

	this.instance_2 = new lib.bg1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-956.5,-152);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(-956.5,-153,1913,306), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Fon_pered();
	this.instance.parent = this;
	this.instance.setTransform(-1138,-137);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(-1138,-137,2276,274), null);


(lib.Анимация2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(-320,-152.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320,-152.5,640,305);


(lib.Анимация1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(-320,-152.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320,-152.5,640,305);


(lib.Символ59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ58();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ59, new cjs.Rectangle(-26.5,-25.8,53,51.8), null);


(lib.Символ57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ56();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ57, new cjs.Rectangle(-26.5,-25.8,53,51.8), null);


(lib.Символ55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ54();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ55, new cjs.Rectangle(-26.5,-25.9,53,51.8), null);


(lib.Символ53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// box.png
	this.instance = new lib.Символ59();
	this.instance.parent = this;
	this.instance.setTransform(0,56.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({x:10},5,cjs.Ease.get(1)).to({x:0},5,cjs.Ease.get(1)).wait(10));

	// box.png
	this.instance_1 = new lib.Символ57();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({x:10},5,cjs.Ease.get(1)).to({x:0},5,cjs.Ease.get(1)).wait(12));

	// box.png
	this.instance_2 = new lib.Символ55();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-56.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:10},5,cjs.Ease.get(1)).to({x:0},5,cjs.Ease.get(1)).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.5,-82.4,53,164.8);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ47();
	this.instance.parent = this;
	this.instance.setTransform(0,-109.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ48, new cjs.Rectangle(-47.9,-135.8,96.3,33.1), null);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 50
	this.instance = new lib.Символ50();
	this.instance.parent = this;
	this.instance.setTransform(6.1,-0.9,1.113,1.113,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 51
	this.instance_1 = new lib.Символ51();
	this.instance_1.parent = this;
	this.instance_1.setTransform(7.6,0,1.113,1.113);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ46, new cjs.Rectangle(-82.8,-20.8,178.1,41.1), null);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ48();
	this.instance.parent = this;
	this.instance.setTransform(-91.8,-1.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ45, new cjs.Rectangle(-139.8,-137.5,96.3,33.1), null);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ42();
	this.instance.parent = this;
	this.instance.alpha = 0;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.16},14,cjs.Ease.get(1)).to({alpha:0},15,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ42();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-38.5,100,77);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ34();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:-10.6},0).wait(1).to({rotation:-21.2},0).wait(1).to({rotation:-31.8},0).wait(1).to({rotation:-42.4},0).wait(1).to({rotation:-52.9},0).wait(1).to({rotation:-63.5},0).wait(1).to({rotation:-74.1},0).wait(1).to({rotation:-84.7},0).wait(1).to({rotation:-95.3},0).wait(1).to({rotation:-105.9},0).wait(1).to({rotation:-116.5},0).wait(1).to({rotation:-127.1},0).wait(1).to({rotation:-137.6},0).wait(1).to({rotation:-148.2},0).wait(1).to({rotation:-158.8},0).wait(1).to({rotation:-169.4},0).wait(1).to({rotation:-180},0).wait(1).to({rotation:-190.6},0).wait(1).to({rotation:-201.2},0).wait(1).to({rotation:-211.8},0).wait(1).to({rotation:-222.4},0).wait(1).to({rotation:-232.9},0).wait(1).to({rotation:-243.5},0).wait(1).to({rotation:-254.1},0).wait(1).to({rotation:-264.7},0).wait(1).to({rotation:-275.3},0).wait(1).to({rotation:-285.9},0).wait(1).to({rotation:-296.5},0).wait(1).to({rotation:-307.1},0).wait(1).to({rotation:-317.6},0).wait(1).to({rotation:-328.2},0).wait(1).to({rotation:-338.8},0).wait(1).to({rotation:-349.4},0).wait(1).to({rotation:-360},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.5,-32.5,65.1,65.1);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ37();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:15},0).wait(1).to({rotation:30},0).wait(1).to({rotation:45},0).wait(1).to({rotation:60},0).wait(1).to({rotation:75},0).wait(1).to({rotation:90},0).wait(1).to({rotation:105},0).wait(1).to({rotation:120},0).wait(1).to({rotation:135},0).wait(1).to({rotation:150},0).wait(1).to({rotation:165},0).wait(1).to({rotation:180},0).wait(1).to({rotation:195},0).wait(1).to({rotation:210},0).wait(1).to({rotation:225},0).wait(1).to({rotation:240},0).wait(1).to({rotation:255},0).wait(1).to({rotation:270},0).wait(1).to({rotation:285},0).wait(1).to({rotation:300},0).wait(1).to({rotation:315},0).wait(1).to({rotation:330},0).wait(1).to({rotation:345},0).wait(1).to({rotation:360},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.8,-11.9,23.6,23.9);


(lib.Символ31 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ32();
	this.instance.parent = this;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ30();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:9.2},0).wait(1).to({rotation:18.5},0).wait(1).to({rotation:27.7},0).wait(1).to({rotation:36.9},0).wait(1).to({rotation:46.2},0).wait(1).to({rotation:55.4},0).wait(1).to({rotation:64.6},0).wait(1).to({rotation:73.8},0).wait(1).to({rotation:83.1},0).wait(1).to({rotation:92.3},0).wait(1).to({rotation:101.5},0).wait(1).to({rotation:110.8},0).wait(1).to({rotation:120},0).wait(1).to({rotation:129.2},0).wait(1).to({rotation:138.5},0).wait(1).to({rotation:147.7},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42,-41,84,82);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ25();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-894.3},81).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-447,-1341,1788,1788);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ22();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:12.4},0).wait(1).to({rotation:24.8},0).wait(1).to({rotation:37.2},0).wait(1).to({rotation:49.7},0).wait(1).to({rotation:62.1},0).wait(1).to({rotation:74.5},0).wait(1).to({rotation:86.9},0).wait(1).to({rotation:99.3},0).wait(1).to({rotation:111.7},0).wait(1).to({rotation:124.1},0).wait(1).to({rotation:136.6},0).wait(1).to({rotation:149},0).wait(1).to({rotation:161.4},0).wait(1).to({rotation:173.8},0).wait(1).to({rotation:186.2},0).wait(1).to({rotation:198.6},0).wait(1).to({rotation:211},0).wait(1).to({rotation:223.4},0).wait(1).to({rotation:235.9},0).wait(1).to({rotation:248.3},0).wait(1).to({rotation:260.7},0).wait(1).to({rotation:273.1},0).wait(1).to({rotation:285.5},0).wait(1).to({rotation:297.9},0).wait(1).to({rotation:310.3},0).wait(1).to({rotation:322.8},0).wait(1).to({rotation:335.2},0).wait(1).to({rotation:347.6},0).wait(1).to({rotation:360},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.7,-19.7,39.4,39.4);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.parent = this;
	this.instance.setTransform(0,14.3,1,1,0,0,0,0,11.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.1,regY:11.6,rotation:1.2,x:0.1,y:14.7},2,cjs.Ease.get(1)).to({regX:0,regY:11.5,rotation:0,x:0,y:14.3},2,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.3,-22.4,68.7,50.4);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.parent = this;
	this.instance.setTransform(-0.1,28.2,1,1,0,0,0,-0.1,28.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-3.5},9,cjs.Ease.get(1)).to({rotation:0},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34,-45.7,68.1,91.4);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(-29,-20.5,58,41), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:0.5},2).to({y:0},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.5,-23.3,85.1,46.6);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ17();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-0.5},2).to({y:0},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34,-45.7,68.1,91.4);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.parent = this;
	this.instance.setTransform(636.5,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-636.6},383).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320,-154,1913,306);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(45,-0.5);

	this.instance_1 = new lib.Анимация2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-46,-0.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:-46},1999).wait(1).to({_off:false,x:45},1999).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},1999).wait(1).to({startPosition:0},0).to({_off:true,x:45},1999).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-275,-153,640,305);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-1123.8},89).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1138,-137,2276,274);


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ44();
	this.instance.parent = this;
	this.instance.setTransform(-0.3,-0.9,1.099,1.099,0,0,0,-0.1,-0.1);

	this.instance_1 = new lib.Символ45();
	this.instance_1.parent = this;
	this.instance_1.setTransform(100.7,132.9,1.099,1.099);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ49, new cjs.Rectangle(-52.9,-18.3,105.8,36.4), null);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 49
	this.instance = new lib.Символ49();
	this.instance.parent = this;
	this.instance.setTransform(-62.4,40.7,1,1,0,0,0,21.8,52.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:21.7,regY:52.1,scaleX:1.06,scaleY:1.06,x:-66.9,y:43.9},9,cjs.Ease.get(-1)).to({regX:21.8,scaleX:1.14,scaleY:1.14,x:-72,y:47.6},8,cjs.Ease.get(1)).to({scaleX:1.08,scaleY:1.08,x:-67.7,y:44.5},9,cjs.Ease.get(-1)).to({regY:52.2,scaleX:1,scaleY:1,x:-62.4,y:40.7},10,cjs.Ease.get(1)).wait(1));

	// Символ 46
	this.instance_1 = new lib.Символ46();
	this.instance_1.parent = this;
	this.instance_1.setTransform(66.5,-9.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:0.1,regY:-0.1,scaleX:1.06,scaleY:1.06,x:70.4,y:-9.4},9,cjs.Ease.get(-1)).to({regX:0,regY:0,scaleX:1.14,scaleY:1.14,x:74.9,y:-9.3},8,cjs.Ease.get(1)).to({regX:0.1,regY:-0.1,scaleX:1.08,scaleY:1.08,x:71.2,y:-9.4},9,cjs.Ease.get(-1)).to({regX:0,regY:0,scaleX:1,scaleY:1,x:66.5,y:-9.3},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-137.1,-30.1,298.9,41.1);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ38();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.84,scaleY:0.84},17,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},17,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.5,-32.5,65.1,65.1);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ35();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.72,scaleY:0.72},7,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.8,-11.9,23.6,23.9);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 36
	this.instance = new lib.Символ36();
	this.instance.parent = this;
	this.instance.setTransform(-0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 34
	this.instance_1 = new lib.Символ39();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ33, new cjs.Rectangle(-32.6,-32.5,65.1,65.1), null);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_79 = function() {
		this.gotoAndPlay(0);
	}
	this.frame_189 = function() {
		this.gotoAndPlay(81);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(79).call(this.frame_79).wait(110).call(this.frame_189).wait(1));

	// Слой 4 - копия: 2 - копия: 2
	this.instance = new lib.Символ28();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.694,0.694);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(163).to({_off:false},0).to({guide:{path:[0,0,-182.4,-261.3,-350.8,90.1]}},24).wait(3));

	// Слой 4 - копия: 2 - копия: 2
	this.instance_1 = new lib.Символ28();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.694,0.694);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(150).to({_off:false},0).to({guide:{path:[0,0,-182.3,-339.4,-284.7,107.2]}},24).wait(16));

	// Слой 4 - копия: 2 - копия: 2
	this.instance_2 = new lib.Символ28();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0,0.694,0.694);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(135).to({_off:false},0).to({guide:{path:[0,0,-235.6,-445.9,-284.7,107.2]}},24).wait(31));

	// Слой 4 - копия: 2 - копия
	this.instance_3 = new lib.Символ28();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,0,0.694,0.694);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(141).to({_off:false},0).to({guide:{path:[0,0,-182.4,-261.3,-350.8,90.1]}},24).to({_off:true},3).wait(22));

	// Слой 4 - копия: 2
	this.instance_4 = new lib.Символ28();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,0,0.694,0.694);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(128).to({_off:false},0).to({guide:{path:[0,0,-182.3,-339.4,-284.7,107.2]}},24).to({_off:true},16).wait(22));

	// Слой 4 - копия: 2
	this.instance_5 = new lib.Символ28();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,0,0.694,0.694);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(107).to({_off:false},0).to({guide:{path:[0,0,-235.6,-445.9,-284.7,107.2]}},24).to({_off:true},37).wait(22));

	// Слой 4 - копия: 2
	this.instance_6 = new lib.Символ28();
	this.instance_6.parent = this;
	this.instance_6.setTransform(0,0,0.694,0.694);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(114).to({_off:false},0).to({guide:{path:[0,0,-182.4,-261.3,-350.8,90.1]}},24).wait(25).to({x:0,y:0},0).to({guide:{path:[0,0,-182.4,-261.3,-350.8,90.1]}},24).wait(3));

	// Слой 4 - копия
	this.instance_7 = new lib.Символ28();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0,0,0.694,0.694);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(101).to({_off:false},0).to({guide:{path:[0,0,-182.3,-339.4,-284.7,107.2]}},24).wait(16).to({x:0,y:0},0).to({guide:{path:[0,0,-182.3,-339.4,-284.7,107.2]}},24).to({_off:true},16).wait(9));

	// Слой 4
	this.instance_8 = new lib.Символ28();
	this.instance_8.parent = this;
	this.instance_8.setTransform(0,0,0.694,0.694);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(80).to({_off:false},0).to({guide:{path:[0,0,-235.6,-445.9,-284.7,107.2]}},24).wait(23).to({x:0,y:0},0).to({guide:{path:[0,0,-235.6,-445.9,-284.7,107.2]}},24).to({_off:true},23).wait(16));

	// Слой 1
	this.instance_9 = new lib.Символ28();
	this.instance_9.parent = this;
	this.instance_9.setTransform(0,0,0.694,0.694);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({guide:{path:[0,0,-237.6,-333.9,-368.8,91.1]}},39).to({_off:true},41).wait(110));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.1,-28.4,58.3,56.9);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ26();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:894.1},239).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-447,-1341,1788,1788);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ23();
	this.instance.parent = this;
	this.instance.setTransform(0.6,-0.5,1,1,0,0,0,0,-0.1);

	this.instance_1 = new lib.Символ23();
	this.instance_1.parent = this;
	this.instance_1.setTransform(210.8,-8,1,1,45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ24, new cjs.Rectangle(-19.1,-35.9,257.8,55.8), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ14();
	this.instance.parent = this;
	this.instance.setTransform(9,15,1,1,0,0,0,9,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30).to({x:-30.5,y:-3.5},9,cjs.Ease.get(1)).to({rotation:-15,y:-3.4},13,cjs.Ease.get(0.02)).to({rotation:0,y:-3.5},14,cjs.Ease.get(0.02)).wait(1).to({rotation:-15,y:-3.4},13,cjs.Ease.get(0.02)).to({rotation:0,y:-3.5},14,cjs.Ease.get(0.02)).wait(1).to({x:9,y:15},9,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29,-20.5,58,41);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ24();
	this.instance.parent = this;
	this.instance.setTransform(-88.3,72.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Car_16.png
	this.instance_1 = new lib.Символ13();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-84.7,-19.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Car_02.png
	this.instance_2 = new lib.Символ8();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Car_13.png
	this.instance_3 = new lib.Символ18();
	this.instance_3.parent = this;
	this.instance_3.setTransform(24.3,-24.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Car_09.png
	this.instance_4 = new lib.Символ11();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-87.1,-60.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Car_05.png
	this.instance_5 = new lib.Символ15();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-134,-36.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(-181.7,-115.9,363.5,231.8), null);


(lib.Символ52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ43();
	this.instance.parent = this;
	this.instance.setTransform(-6.4,9.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-0.1,regY:-0.1,rotation:-4.5,x:-6.5,y:9.5},16,cjs.Ease.get(1)).to({regY:0,rotation:4,y:9.6},32,cjs.Ease.get(1)).to({regX:0,rotation:0,x:-6.4},14,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-143.6,-20.5,298.9,41.1);


(lib.Символ40 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ33();
	this.instance.parent = this;
	this.instance.setTransform(0.1,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:0.5},2,cjs.Ease.get(1)).to({y:0},2,cjs.Ease.get(1)).wait(1));

	// Слой 2
	this.podarki = new lib.Символ29();
	this.podarki.parent = this;
	this.podarki.setTransform(-78,31);

	this.timeline.addTween(cjs.Tween.get(this.podarki).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-181.7,-115.9,363.5,231.8);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_134 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_159 = function() {
		this.stop();
	}
	this.frame_174 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(134).call(this.frame_134).wait(25).call(this.frame_159).wait(15).call(this.frame_174).wait(1));

	// Слой 1
	this.car2 = new lib.Символ19();
	this.car2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.car2).wait(1).to({regX:-14.4,regY:0.2,x:-14.9,y:0.2},0).wait(1).to({x:-15.5},0).wait(1).to({x:-16.2},0).wait(1).to({x:-17},0).wait(1).to({x:-17.8},0).wait(1).to({x:-18.6},0).wait(1).to({x:-19.6},0).wait(1).to({x:-20.6},0).wait(1).to({x:-21.6},0).wait(1).to({x:-22.8},0).wait(1).to({x:-24},0).wait(1).to({x:-25.3},0).wait(1).to({x:-26.7},0).wait(1).to({x:-28.2},0).wait(1).to({x:-29.8},0).wait(1).to({x:-31.4},0).wait(1).to({x:-33.2},0).wait(1).to({x:-35},0).wait(1).to({x:-37},0).wait(1).to({x:-39},0).wait(1).to({x:-41.2},0).wait(1).to({x:-43.5},0).wait(1).to({x:-45.8},0).wait(1).to({x:-48.3},0).wait(1).to({x:-50.9},0).wait(1).to({x:-53.6},0).wait(1).to({x:-56.4},0).wait(1).to({x:-59.3},0).wait(1).to({x:-62.3},0).wait(1).to({x:-65.4},0).wait(1).to({x:-68.5},0).wait(1).to({x:-71.7},0).wait(1).to({x:-75},0).wait(1).to({x:-78.3},0).wait(1).to({x:-81.6},0).wait(1).to({x:-85},0).wait(1).to({x:-88.3},0).wait(1).to({x:-91.6},0).wait(1).to({x:-94.9},0).wait(1).to({x:-98.2},0).wait(1).to({x:-101.3},0).wait(1).to({x:-104.4},0).wait(1).to({x:-107.5},0).wait(1).to({x:-110.4},0).wait(1).to({x:-113.3},0).wait(1).to({x:-116},0).wait(1).to({x:-118.6},0).wait(1).to({x:-121.2},0).wait(1).to({x:-123.6},0).wait(1).to({x:-125.9},0).wait(1).to({x:-128.1},0).wait(1).to({x:-130.2},0).wait(1).to({x:-132.2},0).wait(1).to({x:-134.1},0).wait(1).to({x:-135.9},0).wait(1).to({x:-137.6},0).wait(1).to({x:-139.2},0).wait(1).to({x:-140.7},0).wait(1).to({x:-142.1},0).wait(1).to({x:-143.4},0).wait(1).to({x:-144.6},0).wait(1).to({x:-145.8},0).wait(1).to({x:-146.9},0).wait(1).to({x:-147.9},0).wait(1).to({x:-148.8},0).wait(1).to({x:-149.7},0).wait(1).to({x:-150.5},0).wait(1).to({x:-151.3},0).wait(1).to({x:-151.9},0).wait(1).to({regX:0,regY:0,x:-138.2,y:0},0).wait(1).to({regX:-14.4,regY:0.2,x:-151.9,y:0.2},0).wait(1).to({x:-151.2},0).wait(1).to({x:-150.5},0).wait(1).to({x:-149.6},0).wait(1).to({x:-148.7},0).wait(1).to({x:-147.7},0).wait(1).to({x:-146.7},0).wait(1).to({x:-145.5},0).wait(1).to({x:-144.3},0).wait(1).to({x:-143},0).wait(1).to({x:-141.5},0).wait(1).to({x:-140},0).wait(1).to({x:-138.4},0).wait(1).to({x:-136.6},0).wait(1).to({x:-134.8},0).wait(1).to({x:-132.8},0).wait(1).to({x:-130.7},0).wait(1).to({x:-128.5},0).wait(1).to({x:-126.2},0).wait(1).to({x:-123.7},0).wait(1).to({x:-121.1},0).wait(1).to({x:-118.4},0).wait(1).to({x:-115.6},0).wait(1).to({x:-112.6},0).wait(1).to({x:-109.5},0).wait(1).to({x:-106.3},0).wait(1).to({x:-103},0).wait(1).to({x:-99.6},0).wait(1).to({x:-96.1},0).wait(1).to({x:-92.5},0).wait(1).to({x:-88.9},0).wait(1).to({x:-85.3},0).wait(1).to({x:-81.6},0).wait(1).to({x:-78},0).wait(1).to({x:-74.3},0).wait(1).to({x:-70.8},0).wait(1).to({x:-67.2},0).wait(1).to({x:-63.8},0).wait(1).to({x:-60.5},0).wait(1).to({x:-57.2},0).wait(1).to({x:-54.1},0).wait(1).to({x:-51.1},0).wait(1).to({x:-48.2},0).wait(1).to({x:-45.4},0).wait(1).to({x:-42.8},0).wait(1).to({x:-40.3},0).wait(1).to({x:-37.9},0).wait(1).to({x:-35.7},0).wait(1).to({x:-33.6},0).wait(1).to({x:-31.6},0).wait(1).to({x:-29.7},0).wait(1).to({x:-27.9},0).wait(1).to({x:-26.3},0).wait(1).to({x:-24.7},0).wait(1).to({x:-23.3},0).wait(1).to({x:-22},0).wait(1).to({x:-20.7},0).wait(1).to({x:-19.6},0).wait(1).to({x:-18.5},0).wait(1).to({x:-17.5},0).wait(1).to({x:-16.6},0).wait(1).to({x:-15.8},0).wait(1).to({x:-15},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).to({x:-40},5,cjs.Ease.get(1)).to({x:280.4},20,cjs.Ease.get(1)).wait(1).to({x:0},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-181.7,-115.9,363.5,231.8);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.car1 = new lib.Символ20();
	this.car1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.car1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ21, new cjs.Rectangle(-181.7,-115.9,363.5,231.8), null);


(lib.Символ6 = function(mode,startPosition,loop) {
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

	// Слой 5
	this.instance = new lib.Символ52();
	this.instance.parent = this;
	this.instance.setTransform(-762.2,-105.8,1,1,0,0,0,0,50.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-229,alpha:0},7,cjs.Ease.get(1)).wait(1).to({y:-105.8,alpha:1},7,cjs.Ease.get(1)).wait(1));

	// Слой 7
	this.instance_1 = new lib.Символ53();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1196.2,-15.6);
	this.instance_1.alpha = 0.34;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-1049.5},7).wait(1).to({x:-1196.2},7,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ41();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-1047.1,-156.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(16));

	// Символ 1
	this.instance_3 = new lib.Символ1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,83.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(16));

	// Слой 4
	this.car = new lib.Символ21();
	this.car.parent = this;
	this.car.setTransform(-734.2,-7.1);

	this.timeline.addTween(cjs.Tween.get(this.car).wait(16));

	// Символ 4
	this.instance_4 = new lib.Символ4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-785,-51.8,1.031,1.031);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1222.7,-210.6,2360.7,431.3);


// stage content:
(lib.adv640x305 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		
		
		stage.canvas.style.cursor = "none";
		this.priz.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor_2.bind(this));
		
		function fl_CustomMouseCursor_2() {
			this.priz.x = stage.mouseX/window.devicePixelRatio;
			this.priz.y = stage.mouseY/window.devicePixelRatio;
		}
		
		
		stage.canvas.style.cursor = "none";
		this.priz1.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
			this.priz1.x = stage.mouseX/window.devicePixelRatio;
		}
		
		
		var _this = this;
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		  function fl_MouseOverHandler_5()
		{
		    _this.main.gotoAndPlay(1);    
			_this.priz1.gotoAndStop(1);
			_this.priz.gotoAndStop(1);
			_this.main.car.car1.gotoAndPlay(136);
			_this.main.car.car1.car2.podarki.gotoAndPlay(81);
		}
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		  function fl_MouseOutHandler_2()
		{
		  	_this.main.gotoAndPlay(9); 
			_this.priz1.gotoAndStop(0);
			_this.priz.gotoAndStop(0);
		    _this.main.car.car1.gotoAndPlay(161);
			_this.main.car.car1.car2.podarki.gotoAndPlay(1);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Actions
	this.priz = new lib.Символ40();
	this.priz.parent = this;
	this.priz.setTransform(-164.2,130.2);

	this.timeline.addTween(cjs.Tween.get(this.priz).wait(1));

	// Слой 6
	this.priz1 = new lib.Символ31();
	this.priz1.parent = this;
	this.priz1.setTransform(-160.2,281.5);

	this.timeline.addTween(cjs.Tween.get(this.priz1).wait(1));

	// Слой 4
	this.instance = new lib.Символ27();
	this.instance.parent = this;
	this.instance.setTransform(397,-133);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.main = new lib.Символ6();
	this.main.parent = this;
	this.main.setTransform(1105,204.4);

	this.timeline.addTween(cjs.Tween.get(this.main).wait(1));

	// Слой 2
	this.fon = new lib.Символ3();
	this.fon.parent = this;
	this.fon.setTransform(-58,-32.6,1.181,1.181,0,0,0,-320,-152.5);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(202.3,-1321.5,2360.7,1899);
// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/basket.png?1481296865255", id:"basket"},
		{src:"images/bg.jpg?1481296865255", id:"bg"},
		{src:"images/bg1.png?1481296865255", id:"bg1"},
		{src:"images/box.png?1481296865255", id:"box"},
		{src:"images/Car_02.png?1481296865255", id:"Car_02"},
		{src:"images/Car_05.png?1481296865255", id:"Car_05"},
		{src:"images/Car_09.png?1481296865255", id:"Car_09"},
		{src:"images/Car_13.png?1481296865255", id:"Car_13"},
		{src:"images/Car_16.png?1481296865255", id:"Car_16"},
		{src:"images/elk_2uu1.png?1481296865255", id:"elk_2uu1"},
		{src:"images/Fon_pered.png?1481296865255", id:"Fon_pered"},
		{src:"images/logo.png?1481296865255", id:"logo"},
		{src:"images/weel.png?1481296865255", id:"weel"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;