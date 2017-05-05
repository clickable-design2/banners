(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.boka = function() {
	this.initialize(img.boka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,149,104);


(lib.dent = function() {
	this.initialize(img.dent);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,49,17);


(lib.face1 = function() {
	this.initialize(img.face1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,184,192);


(lib.foot_left = function() {
	this.initialize(img.foot_left);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,30,45);


(lib.foot_right = function() {
	this.initialize(img.foot_right);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,31,57);


(lib.glass = function() {
	this.initialize(img.glass);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,13,17);


(lib.gold1 = function() {
	this.initialize(img.gold1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,135);


(lib.gold2 = function() {
	this.initialize(img.gold2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,133);


(lib.hair = function() {
	this.initialize(img.hair);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,63,32);


(lib.hand1 = function() {
	this.initialize(img.hand1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,35,54);


(lib.hvost = function() {
	this.initialize(img.hvost);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,88,67);


(lib.konec = function() {
	this.initialize(img.konec);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,27,28);


(lib.lip = function() {
	this.initialize(img.lip);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,77,33);


(lib.lokot = function() {
	this.initialize(img.lokot);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,41,35);


(lib.nog_left = function() {
	this.initialize(img.nog_left);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,40,47);


(lib.nog_right = function() {
	this.initialize(img.nog_right);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,23,47);


(lib.pirojenko = function() {
	this.initialize(img.pirojenko);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,145,200);


(lib.ple40 = function() {
	this.initialize(img.ple40);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,69,33);


(lib.ple4o = function() {
	this.initialize(img.ple4o);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,49,61);


(lib.shadow = function() {
	this.initialize(img.shadow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,70,21);


(lib.waves = function() {
	this.initialize(img.waves);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,753,220);


(lib.zoloto = function() {
	this.initialize(img.zoloto);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,103);// helper functions:

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


(lib.Символ62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow();
	this.instance.parent = this;
	this.instance.setTransform(-2,-2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ62, new cjs.Rectangle(-2,-2,70,21), null);


(lib.Символ61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow();
	this.instance.parent = this;
	this.instance.setTransform(-2,-2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ61, new cjs.Rectangle(-2,-2,70,21), null);


(lib.Символ58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AAC051").s().rr(-85.05,-17.1,170.1,34.2,17.1);
	this.shape.setTransform(85,17.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#81923D").s().rr(-85.05,-17.1,170.1,34.2,17.1);
	this.shape_1.setTransform(85,17.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,170.1,34.2);


(lib.Символ54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.gold2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ54, new cjs.Rectangle(0,0,120,133), null);


(lib.Символ53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.gold1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ53, new cjs.Rectangle(0,0,120,135), null);


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9E6B3").s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgEAFgBQAGABAEAEQAEAEAAAFQAAAGgEAEQgEAFgGgBQgFABgEgFg");
	this.shape.setTransform(1.4,1.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ50, new cjs.Rectangle(0,0,2.9,2.9), null);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pirojenko();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ46, new cjs.Rectangle(0,0,145,200), null);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5D5DEA").s().p("AuSayMAAAg1kIclAAMAAAA1kg");
	this.shape.setTransform(91.5,171.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5151A2").s().p("AiLCRQg6g8AAhVQAAhUA6g8QA6g8BRAAQBSAAA6A8QA6A8AABUQAABVg6A8Qg6A8hSAAQhRAAg6g8g");
	this.shape.setTransform(19.8,20.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ43, new cjs.Rectangle(0,0,39.6,41), null);


(lib.Символ33копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhQCRQgEAAgCgCQgDgEAAgDIAAkPQAAgJAJAAICiAAQAIAAAAAJIAAAjQAAAEgDADQgCACgDAAIhyAAIAADjQAAAJgIAAg");
	this.shape.setTransform(217.6,107.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhgCRIgGgCQgCgCAAgEIAAkPQAAgKAIAAIC7AAQAGAAACADQACADAAAEIAAAiQAAAEgDADQgCACgFAAIiKAAIAAA8IBqAAQAEgBACACQADACAAAFIAAAjIgCAGQgCADgEAAIhrAAIAABGICPAAQAFAAACADQACACAAAFIAAAkQAAAIgIAAg");
	this.shape_1.setTransform(193.4,107.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABJCRQgDAAgCgCQgEgDAAgEIAAh2IiAAAIAAB2QAAAEgCACQgDADgEAAIgnAAQgJAAAAgJIAAkPIADgGQABgDAFAAIAoAAQACAAAEADQACACAAAEIAABlICAAAIAAhlQAAgEADgCQACgDAEAAIAoAAQADAAADADQADACAAAEIAAEPQAAAJgJAAg");
	this.shape_2.setTransform(164.4,107.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhgCRIgGgCQgCgCAAgEIAAkPQAAgKAIAAIC7AAQAGAAACADQACADAAAEIAAAiQAAAEgDADQgCACgFAAIiKAAIAAA8IBqAAQAEgBACACQADACAAAFIAAAjIgCAGQgCADgEAAIhrAAIAABGICPAAQAFAAACADQACACAAAFIAAAkQAAAIgIAAg");
	this.shape_3.setTransform(137.1,107.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABhCzQgGAAgBgGIAAg/Ii1AAIAAA/QAAAGgIAAIgkAAQgGAAAAgGIAAhrQAAgIAHAAIAZAAQALgSAHgRQAHgRAGgTQAFgTADgVIAEgyIAAghIABgjQAAgHAGAAICiAAIAEACQABAAAAABQAAAAABABQAAAAAAABQAAABAAABIAADlIAZAAIAGACQACACAAADIAABsQAAAGgHAAgAgQhPQgBAlgKAiQgIAigQAgIBpAAIAAi4IhEAAg");
	this.shape_4.setTransform(107.7,111);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhdCRQgGAAgDgDQgCgDAAgFIAAkLQAAgGACgCQADgDAFAAIAlAAQAKAAAAALIAABdIA+AAQAUAAAQAIQARAHAMANQAMAMAHARQAGAQAAASQABATgIARQgGARgNAMQgMANgQAIQgRAIgTAAgAgvBeIA1AAQAKAAAHgEQAHgDAFgGQAGgGADgIQADgHAAgIQAAgJgDgHQgDgIgGgGQgFgFgHgEQgIgDgJAAIg1AAg");
	this.shape_5.setTransform(285.7,54);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgSCRIgDgBIgEgCIgCgEIgBgDIAAjiIhHAAQgEAAgDgCQgCgDAAgFIAAgiQAAgEACgCQADgDAEAAIDGAAIAHACQADACAAAFIAAAiQABAEgDADQgDADgFAAIhHAAIAADiIAAADIgCADIgDADIgEABg");
	this.shape_6.setTransform(258.4,54);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABZCRIgFgCIgDgEIgUguIh6AAIgUAuQgBAGgFAAIgpAAQgFAAgCgCQgBgCgBgDIAdhGIBWjNIAEgFQADgCAEAAIAXAAQAEAAACACIAEAFIB0ERIAAABIgCAFQgCADgHAAgAApAoIgphkIgoBkIBRAAg");
	this.shape_7.setTransform(232.2,54);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgSCRIgEgBIgDgCIgCgEIgBgDIAAjiIhGAAQgEAAgEgCQgCgDAAgFIAAgiQAAgEACgCQAEgDAEAAIDFAAIAHACQADACAAAFIAAAiQABAEgDADQgDADgFAAIhHAAIAADiIAAADIgCADIgDADIgEABg");
	this.shape_8.setTransform(203.8,54);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgnCQQgTgGgQgJQgRgKgOgNQgNgOgKgRQgKgQgFgTQgFgTAAgVQAAgTAFgTQAFgTAKgRQAKgRANgNQAOgOARgKQAQgJATgGQATgFAUAAQAUAAATAFQAUAGAQAJQARAKANAOQAOANAKARQAJARAGATQAFATAAATQAAAVgFATQgGATgJAQQgKARgOAOQgNANgRAKQgQAJgUAGQgTAFgUAAQgUAAgTgFgAgkhXQgRAIgMANQgMANgGARQgHARAAATQAAAUAHARQAGARAMANQAMANARAIQARAHATAAQATAAARgHQARgIAMgNQAMgNAHgRQAGgRAAgUQAAgTgGgRQgHgRgMgNQgMgNgRgIQgRgHgTAAQgTAAgRAHg");
	this.shape_9.setTransform(175.5,54);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhjCRQgIAAAAgIIAAkRIACgGQACgCAEAAICuAAQAEAAACACIACAGIAAAiQAAADgCACQgCACgEAAIh/AAIAAA7IBHAAQAUAAAQAHQAQAIAMANQAMALAGARQAHAQAAASQAAASgHAQQgGARgMAMQgMANgRAHQgQAIgUAAgAg0BhIA+AAQAJAAAIgDQAIgEAGgGQAGgGADgIQADgIAAgIQAAgIgDgJQgDgIgGgGQgGgGgIgEQgIgDgJAAIg+AAg");
	this.shape_10.setTransform(145.8,54);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("ABZCRIgFgCIgDgEIgTguIh7AAIgUAuQgBAGgGAAIgoAAQgFAAgCgCQgCgCABgDIAdhGIBWjNIADgFQADgCAFAAIAVAAQAEAAADACIADAFIB0ERIAAABIgCAFQgBADgHAAgAApAoIgphkIgpBkIBSAAg");
	this.shape_11.setTransform(117.5,54);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AheCRQgFAAgDgDQgDgDAAgFIAAkLQAAgFADgDQADgDAFAAIBsAAQAUAAARAIQARAIAMAMQALANAIARQAGARAAATQABASgHAQQgHAQgMANQgMANgRAHQgQAIgUAAIg+AAIAABdQABALgLAAgAgvgJIA1AAQAJAAAHgDQAIgEAGgGQAFgFADgIQADgIAAgIQAAgIgDgHQgDgIgFgGQgGgGgHgDQgIgEgJAAIg1AAg");
	this.shape_12.setTransform(90.7,54);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("ABaCRIgGgCIgDgEIgTguIh7AAIgTAuQgCAGgGAAIgoAAQgFAAgCgCQgBgCAAgDIAdhGIBVjNIAEgFQADgCAFAAIAVAAQAFAAACACIADAFIB0ERIAAABIgCAFQgBADgHAAgAApAoIgphkIgpBkIBSAAg");
	this.shape_13.setTransform(62.5,54);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag3COQgVgHgSgQIAAABIgCgDIgCgEIAAgCIACgCIAIgKIAIgLIADgDIADgEIADgCIAEgCIADABQALALAOAFQAOAEARAAIAUgCQAKgBAHgFQAHgFAFgJQADgIAAgNQAAgNgDgIQgEgJgIgFQgHgFgLgDQgLgCgMAAIgMAAIgFgCQgDgBABgEIAAgPIAAgQIACgFQACgDADAAIAGAAIASAAQAIgBAIgDQAJgEAGgHQAFgGAAgMQAAgIgEgGQgEgGgGgEQgHgEgJgCIgRgCQgNAAgNAFQgNAFgIAJIgFABQgDAAgCgCIgVgbIAAAAIgBgEQAAgDADgDIAEgEQAOgMATgGQASgGAWAAQARAAARADQASADAOAIQANAIAJAPQAIAOAAAWQAAANgDAJQgDAJgGAHQgFAHgGAEIgMAHIASAOQAJAGAHAKQAGAJAEAMQAEAMgBAOQABAYgJARQgJARgOALQgPALgTAFQgTAGgUAAQgaAAgXgHg");
	this.shape_14.setTransform(35.5,54.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ33копия, new cjs.Rectangle(19.5,26.5,281,109.1), null);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLCRIgKgHIgHgKQgCgFAAgHQAAgGACgHIAHgKQAEgEAGgCQAFgCAGgBQAGABAGACQAGACAEAEIAHAKQACAHAAAGQAAAHgCAFQgCAGgFAEQgEAEgGADQgGADgGgBQgGABgFgDgAgRA5QgEAAgDgCQgEgDAAgFIAAi3QAAgFADgCQADgEAFAAIAjAAQAFAAADAEQACACAAAFIAAC3QAAAFgCADQgDACgFAAg");
	this.shape.setTransform(269.4,109.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AB2CRQgFAAgCgDQgDgDgBgEIgSiuIg+CoIgFAGQgDADgDAAIggAAQgCAAgDgCIgEgGIgfhVIgghUIgSCuQAAAEgDADQgDADgFAAIgjAAQgLAAAAgLIAckMQAAgEAEgDQACgDAFAAIAtAAQAEAAADADIAEAGIARAuIAQAtIAjBhIBFi8QABgEADgDQADgCAEAAIAtAAQAFAAADADQADADAAAEIAcEMQAAAFgDADQgDADgEAAg");
	this.shape_1.setTransform(245.1,108.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgnCQQgTgGgQgJQgRgKgOgNQgNgOgKgRQgKgQgFgTQgFgTAAgVQAAgTAFgTQAFgTAKgRQAKgRANgNQAOgOARgKQAQgJATgGQATgFAUAAQAUAAATAFQAUAGAQAJQARAKANAOQAOANAKARQAJARAGATQAFATAAATQAAAVgFATQgGATgJAQQgKARgOAOQgNANgRAKQgQAJgUAGQgTAFgUAAQgUAAgTgFgAgkhXQgRAIgMANQgMANgGARQgHARAAATQAAAUAHARQAGARAMANQAMANARAIQARAHATAAQATAAARgHQARgIAMgNQAMgNAHgRQAGgRAAgUQAAgTgGgRQgHgRgMgNQgMgNgRgIQgRgHgTAAQgTAAgRAHg");
	this.shape_2.setTransform(210.7,108.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AA/CRIgEgBIgDgDIgEgEIgEgEIhVhqQgHAFgJADIgRACIAABjQAAAJgJAAIglAAQgIAAgBgJIAAkPQABgDACgDQACgDAEABIAlAAQADgBADADQADACAAAEIAAB0QAJgBAKgHQALgJAJgNIAGgJIAFgHIAFgHIADgHIASgaQAKgMALgIQALgJAOgGQAOgEATAAQAGAAABAHIAAAjIgDAFQgCADgDAAQgKAAgMAJQgMAJgLAOIgLAQIgLAOIgJAOIgIALIB7CSIABADIABACIgDABg");
	this.shape_3.setTransform(179.5,108.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABNCRQgIAAAAgJIAAjAIiHDCIgEAFIgDACIgqAAQgJAAAAgJIAAkPQAAgEACgCIAHgDIAnAAIAFABQADACABADIAAC0IB/i0IAFgEIAGgCIAuAAQAEAAADADQACACAAAEIAAEPQAAAJgJAAg");
	this.shape_4.setTransform(149.3,108.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgPCRQgJAAAAgJIAAgMQgZgEgWgKQgWgLgQgRQgQgQgJgVQgJgVAAgXQAAgXAJgVQAJgVAQgQQAQgRAWgLQAWgLAZgDIAAgNQAAgEACgDQADgCAEAAIAeAAQAEAAACACQACADAAAEIAAANQAaADAWALQAWALAQAQQARARAJAVQAJAVAAAXQAAAXgJAWQgJAUgRARQgQARgWAKQgWALgaADIAAAMQAAAFgCACQgCACgEAAgAgzhAQgNAHgJAJQgJAKgFAMQgFAMAAAOQAAAOAFAMQAFAMAJAKQAJAJANAHQAMAHAPADIAAiUQgPADgMAHgAAXBJQAOgDANgHQAMgHAJgJQAIgJAFgMQAFgMAAgOQAAgNgFgNQgFgMgIgJQgJgKgMgGQgNgHgOgDg");
	this.shape_5.setTransform(115,108.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABaCRIgGgCIgDgEIgTguIh7AAIgTAuQgCAGgGAAIgoAAQgFAAgCgCQgBgCAAgDIAdhGIBVjNIAEgFQADgCAFAAIAVAAQAFAAACACIADAFIB0ERIAAABIgBAFQgCADgHAAgAApAoIgphkIgpBkIBSAAg");
	this.shape_6.setTransform(84.1,108.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AheCRQgFAAgDgDQgCgDAAgFIAAkLQAAgFACgDQADgDAFAAIBsAAQAUAAARAIQARAIALAMQAMANAIARQAGARAAATQABASgHAQQgHAQgMANQgMANgRAHQgQAIgUAAIg+AAIAABdQAAALgKAAgAgvgJIA1AAQAJAAAHgDQAIgEAGgGQAFgFADgIQADgIAAgIQAAgIgDgHQgDgIgFgGQgGgGgHgDQgIgEgJAAIg1AAg");
	this.shape_7.setTransform(57.3,108.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgTCRIgCgBIgEgCIgCgEIgBgDIAAjiIhHAAQgDAAgEgCQgDgDAAgFIAAgiQAAgEADgCQAEgDADAAIDGAAIAHACQADACAAAFIAAAiQAAAEgCADQgDADgFAAIhHAAIAADiIAAADIgCADIgDADIgEABg");
	this.shape_8.setTransform(30,108.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhdCRQgGAAgDgDQgCgDAAgFIAAkLQAAgGACgCQADgDAFAAIAlAAQAKAAAAALIAABdIA+AAQAUAAAQAIQARAHAMANQAMAMAHARQAGAQAAASQABATgIARQgGARgNAMQgMANgQAIQgRAIgUAAgAgvBeIA1AAQAKAAAHgEQAHgDAFgGQAGgGADgIQADgHAAgIQAAgJgDgHQgDgIgGgGQgFgFgIgEQgHgDgJAAIg1AAg");
	this.shape_9.setTransform(269.6,55.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgSCRIgDgBIgEgCIgCgEIgBgDIAAjiIhHAAQgDAAgEgCQgCgDAAgFIAAgiQAAgEACgCQAEgDADAAIDGAAIAHACQADACAAAFIAAAiQAAAEgCADQgDADgFAAIhHAAIAADiIAAADIgCADIgDADIgEABg");
	this.shape_10.setTransform(242.3,55.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("ABNCRQgIAAAAgJIAAjAIiHDCIgEAFIgDACIgqAAQgJAAAAgJIAAkPQAAgEACgCIAHgDIAnAAIAFABQADACABADIAAC0IB/i0IAFgEIAGgCIAuAAQAEAAADADQACACAAAEIAAEPQAAAJgJAAg");
	this.shape_11.setTransform(215,55.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AB2CRQgFAAgCgDQgDgDgBgEIgSiuIg+CoIgFAGQgDADgDAAIggAAQgCAAgDgCIgEgGIgfhVIgghUIgSCuQAAAEgDADQgDADgFAAIgjAAQgLAAAAgLIAckMQAAgEAEgDQACgDAFAAIAtAAQAEAAADADIAEAGIARAuIAQAtIAjBhIBFi8QABgEADgDQADgCAEAAIAtAAQAFAAADADQADADAAAEIAcEMQAAAFgDADQgDADgEAAg");
	this.shape_12.setTransform(181,55.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AheCRQgFAAgDgDQgDgDAAgFIAAkLQAAgFADgDQADgDAFAAIBsAAQAUAAARAIQAQAIANAMQALANAIARQAGARABATQAAASgHAQQgHAQgMANQgMANgQAHQgRAIgTAAIg+AAIAABdQAAALgLAAgAgugJIA1AAQAIAAAHgDQAIgEAGgGQAFgFADgIQADgIAAgIQAAgIgDgHQgDgIgFgGQgGgGgHgDQgIgEgIAAIg1AAg");
	this.shape_13.setTransform(151.1,55.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgnCQQgTgGgQgJQgRgKgOgNQgNgOgKgRQgKgQgFgTQgFgTAAgVQAAgTAFgTQAFgTAKgRQAKgRANgNQAOgOARgKQAQgJATgGQATgFAUAAQAUAAATAFQAUAGAQAJQARAKANAOQAOANAKARQAJARAGATQAFATAAATQAAAVgFATQgGATgJAQQgKARgOAOQgNANgRAKQgQAJgUAGQgTAFgUAAQgUAAgTgFgAgkhXQgRAIgMANQgMANgGARQgHARAAATQAAAUAHARQAGARAMANQAMANARAIQARAHATAAQATAAARgHQARgIAMgNQAMgNAHgRQAGgRAAgUQAAgTgGgRQgHgRgMgNQgMgNgRgIQgRgHgTAAQgTAAgRAHg");
	this.shape_14.setTransform(120.8,55.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AA/CRIgEgBIgDgDIgEgEIgEgEIhVhqQgHAFgJADIgRACIAABjQAAAJgJAAIgkAAQgJAAAAgJIAAkPQAAgDACgDQACgDAEABIAlAAQADgBADADQADACAAAEIAAB0QAIgBALgHQALgJAJgNIAGgJIAFgHIAFgHIADgHIASgaQAKgMALgIQALgJAOgGQAOgEATAAQAGAAABAHIAAAjIgDAFQgBADgEAAQgKAAgMAJQgMAJgLAOIgLAQIgLAOIgJAOIgIALIB7CSIABADIABACIgDABg");
	this.shape_15.setTransform(89.6,55.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgnCQQgTgGgQgJQgRgKgOgNQgNgOgKgRQgKgQgFgTQgFgTAAgVQAAgTAFgTQAFgTAKgRQAKgRANgNQAOgOARgKQAQgJATgGQATgFAUAAQAUAAATAFQAUAGAQAJQARAKANAOQAOANAKARQAJARAGATQAFATAAATQAAAVgFATQgGATgJAQQgKARgOAOQgNANgRAKQgQAJgUAGQgTAFgUAAQgUAAgTgFgAgkhXQgRAIgMANQgMANgGARQgHARAAATQAAAUAHARQAGARAMANQAMANARAIQARAHATAAQATAAARgHQARgIAMgNQAMgNAHgRQAGgRAAgUQAAgTgGgRQgHgRgMgNQgMgNgRgIQgRgHgTAAQgTAAgRAHg");
	this.shape_16.setTransform(58.4,55.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("ABCCRQgDAAgCgDQgDgCAAgEIAAjkIhzAAIAADlQAAADgDACQgCADgEAAIgmAAQgEAAgBgCQgDgDAAgDIAAkRQAAgIAHAAIDTAAIAEACQADACAAAEIAAERQAAADgDACQgCADgEAAg");
	this.shape_17.setTransform(27.3,55.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ33, new cjs.Rectangle(0,27.8,293.4,109.1), null);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFD200").s().p("ABJC6QgHAAgDgIIg4h6IhLAAIAAB3QAAALgLAAIg0AAIgIgDQgDgCAAgGIAAlbQAAgNALAAICVAAQAaAAAWAKQAWAKARAQQAQARAJAWQAJAWAAAZQAAARgEAPQgEAQgIANQgIANgLALQgLALgOAHIBACGIAAABIAAABQAAAFgCACQgCADgHAAgAhEgLIBWAAQAMAAAJgEQAKgEAGgIQAHgHADgJQADgKAAgKQAAgKgDgJQgEgKgHgHQgHgIgKgFQgJgEgMAAIhUAAg");
	this.shape.setTransform(237.9,34.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFD200").s().p("Ah7C6IgIgDQgDgCAAgGIAAlbQAAgNALAAIDwAAQAHAAADAEQACAEAAAFIAAAsQAAAFgDADQgDAEgGAAIixAAIAABMICIAAQAFgBADADQADADAAAGIAAAsIgCAIQgDAEgGAAIiIAAIAABaIC3AAQAHAAADAEQACACAAAHIAAAtQAAALgLAAg");
	this.shape_1.setTransform(205,34.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFD200").s().p("AgYC6IgEgBIgEgDIgDgEIgBgFIAAkhIhbAAQgFAAgEgEQgDgDAAgGIAAgtQAAgEADgDQAEgEAFAAID/AAIAIADQAEADAAAFIAAAtQAAAFgDAEQgDAEgGAAIhbAAIAAEhIgBAEIgDAEIgDAEIgFABg");
	this.shape_2.setTransform(172,34.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFD200").s().p("AgmC6QgTgDgSgJQgRgIgPgMQgQgMgNgOIAAgBQgGgGABgGQAAgEAFgGIAEgDIAFgGIAHgHIAJgGIAIgHIAGgBIAGABIAFAFIABABIAUAPIAXAOIAWAKQAMADAJAAQANAAAMgDQANgEAIgGQAIgHAGgJQAEgJABgLQAAgLgHgIQgGgHgLgHIgXgKIgagIQgegJgXgLQgXgKgPgNQgQgNgHgRQgIgQAAgVQAAgXAJgUQAKgTARgOQASgNAYgIQAYgHAdAAQAWAAAYAHQAYAHAUAMIAMAJIALAJIAJAKIAEAIIgCAGIgEAGIgHAIIAAgBIgIAIIgIAIIgHAGIgGADIgFgCIgHgFIAAAAIgNgLIgQgKIgVgJQgKgDgLAAQgNAAgLADQgLADgHAGQgHAFgEAHQgDAHAAAJQgBAJAGAGQAGAHAKAFIAVAKIAZAIIAvARQAXAJASAMQASAMALASQAMASgBAZQABAbgMAWQgLAXgTAPQgTAQgaAIQgaAIgeAAQgTAAgTgFg");
	this.shape_3.setTransform(141.4,34.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFD200").s().p("AiAC6QgGAAgDgEQgEgDAAgGIAAlXQAAgHADgEQAEgEAGAAICUAAQAVAAATAIQAUAJAOANQAPAOAHATQAJATgBAWQABAUgIASQgGASgNANIASAQIAPAVIAJAYQACANAAANQABAWgJAUQgIAUgOAQQgPAPgTAJQgUAJgXAAgAhDB5IBYAAQAKAAAIgEQAIgEAGgGQAHgHADgIQAEgJAAgKQAAgJgEgJQgDgJgGgHQgHgHgIgEQgIgFgKAAIhYAAgAhDgiIBIAAQALAAAIgEQAIgEAGgGQAGgGADgIQADgIAAgKQAAgSgMgLQgMgLgUAAIhJAAg");
	this.shape_4.setTransform(109.3,34.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFD200").s().p("AgyC4QgZgGgVgNQgVgMgRgSQgSgRgMgWQgNgUgGgZQgHgYAAgbQAAgZAHgZQAGgYANgVQAMgWASgRQARgSAVgMQAVgMAZgIQAYgGAaAAQAaAAAYAGQAZAIAVAMQAWAMARASQARARANAWQAMAVAHAYQAHAZAAAZQAAAbgHAYQgHAZgMAUQgNAWgRARQgRASgWAMQgVANgZAGQgYAHgaAAQgaAAgYgHgAguhwQgWAKgPARQgQARgIAVQgJAXAAAYQAAAZAJAXQAIAWAQAQQAPAQAWAKQAVAKAZAAQAZAAAVgKQAVgKAQgQQAPgQAJgWQAJgXAAgZQAAgYgJgXQgJgWgPgQQgQgRgVgKQgVgJgZAAQgZAAgVAJg");
	this.shape_5.setTransform(69.6,34.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFD200").s().p("ACXC6QgGAAgEgEQgDgDgBgGIgXjgIhQDYIgGAJQgEAEgDAAIgpAAQgEAAgDgEIgGgHIgohtIgohtIgXDgQgBAGgEADQgCAEgIAAIgtAAQgNAAAAgOIAklXQAAgGAEgEQAEgEAFAAIA7AAQAEAAAEAEIAFAIIAVA6IAWA6IAtB9IBYjxIAAAAQABgGAEgDQAEgDAFAAIA6AAQAGAAAEAEQAEAEAAAGIAkFYQAAAGgEADQgDAEgGAAg");
	this.shape_6.setTransform(25.6,34.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ32, new cjs.Rectangle(0,0,255.3,70.1), null);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0F0F10").s().p("ABmCVQgjgsABg+QgBg+AjgsQAjgsAxAAQAwAAAiAsQAjAsAAA+QAAA+gjAsQgiAsgwAAQgxAAgjgsgAkHB5Qgng2AAhLQAAhMAng2QAog2A3AAQA3AAAoA2QAnA2AABMQAABLgnA2QgoA2g3AAQg3AAgog2g");
	this.shape.setTransform(30.3,19.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ28, new cjs.Rectangle(0,0,60.6,38.6), null);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dent();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ23, new cjs.Rectangle(0,0,49,17), null);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lip();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(0,0,77,33), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.boka();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(0,0,149,104), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.glass();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(0,0,13,17), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.foot_right();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(0,0,31,57), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hair();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(0,0,63,32), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#514FA7").s().p("At7GkQlwiuAAj2QAAj1FwiuQFyiuIJAAQIKAAFwCuQFyCuAAD1QAAD2lyCuQlwCuoKAAQoJAAlyiug");
	this.shape.setTransform(126,59.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(0,0,252,118.9), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hand1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(0,0,35,54), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.konec();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(0,0,27,28), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hvost();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(0,0,88,67), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lokot();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(0,0,41,35), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.waves();
	this.instance.parent = this;
	this.instance.setTransform(-753,0);

	this.instance_1 = new lib.waves();
	this.instance_1.parent = this;
	this.instance_1.setTransform(753,0);

	this.instance_2 = new lib.waves();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(-753,0,2259,220), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.nog_left();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(0,0,40,47), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.nog_right();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(0,0,23,47), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ple4o();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(0,0,49,61), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ple40();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(0,0,69,33), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.foot_left();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(0,0,30,45), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.face1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(0,0,184,192), null);


(lib.Символ55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AAC051").s().rr(-85.05,-17.1,170.1,34.2,17.1);
	this.shape.setTransform(85,17.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ55, new cjs.Rectangle(0,0,170.1,34.2), null);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.zoloto();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ37, new cjs.Rectangle(0,0,120,103), null);


(lib.Символ57копия3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ43();
	this.instance.parent = this;
	this.instance.setTransform(12.8,-390.7,0.646,0.646,0,0,0,19.8,20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(38).to({y:13.3},0).to({y:-390.7},69).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-404,25.6,26.5);


(lib.Символ57копия2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ43();
	this.instance.parent = this;
	this.instance.setTransform(12.8,-390.7,0.646,0.646,0,0,0,19.8,20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(16).to({y:13.3},0).to({y:-390.7},60).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-404,25.6,26.5);


(lib.Символ57копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ43();
	this.instance.parent = this;
	this.instance.setTransform(12.8,13.3,0.646,0.646,0,0,0,19.8,20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({y:-390.7},70).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,25.6,26.5);


(lib.Символ57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ43();
	this.instance.parent = this;
	this.instance.setTransform(12.8,13.3,0.646,0.646,0,0,0,19.8,20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-390.7},71).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,25.6,26.5);


(lib.Символ55_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ58();
	this.instance.parent = this;
	this.instance.setTransform(85,17.1,1,1,0,0,0,85,17.1);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ58(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ55_1, new cjs.Rectangle(0,0,170.1,34.2), null);


(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4 - копия
	this.instance = new lib.Символ50();
	this.instance.parent = this;
	this.instance.setTransform(36.2,-2,1,1,0,0,0,1.4,1.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({_off:false},0).to({scaleX:0.31,scaleY:0.31,x:36.3,y:101.5,alpha:0},20).wait(14));

	// Слой 3 - копия
	this.instance_1 = new lib.Символ50();
	this.instance_1.parent = this;
	this.instance_1.setTransform(27.2,-2,1,1,0,0,0,1.4,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.28,scaleY:0.28,x:27.3,y:101.5,alpha:0},14).wait(1).to({scaleX:1,scaleY:1,x:27.2,y:-2,alpha:1},0).to({scaleX:0.28,scaleY:0.28,x:27.3,y:101.5,alpha:0},27).wait(3));

	// Слой 2 - копия
	this.instance_2 = new lib.Символ50();
	this.instance_2.parent = this;
	this.instance_2.setTransform(19,-2,1,1,0,0,0,1.4,1.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({scaleX:0.35,scaleY:0.35,x:19.1,y:101.5,alpha:0},20).wait(1).to({scaleX:1,scaleY:1,x:16.5,y:1.4,alpha:1},0).to({scaleX:0.41,scaleY:0.41,x:16.6,y:105,alpha:0},14).wait(1));

	// Слой 1 - копия
	this.instance_3 = new lib.Символ50();
	this.instance_3.parent = this;
	this.instance_3.setTransform(12.1,-2,1,1,0,0,0,1.4,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:0.35,scaleY:0.35,x:12.2,y:101.5,alpha:0},14).wait(1).to({scaleX:1,scaleY:1,x:12.1,y:-2,alpha:1},0).to({scaleX:0.35,scaleY:0.35,x:12.2,y:101.5,alpha:0},27).wait(3));

	// Слой 4
	this.instance_4 = new lib.Символ50();
	this.instance_4.parent = this;
	this.instance_4.setTransform(25.5,1.4,1,1,0,0,0,1.4,1.4);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(13).to({_off:false},0).to({scaleX:0.31,scaleY:0.31,x:25.6,y:105,alpha:0},20).wait(12));

	// Слой 3
	this.instance_5 = new lib.Символ50();
	this.instance_5.parent = this;
	this.instance_5.setTransform(16.5,1.4,1,1,0,0,0,1.4,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:0.41,scaleY:0.41,x:16.6,y:105,alpha:0},14).wait(10).to({scaleX:1,scaleY:1,x:16.5,y:1.4,alpha:1},0).to({scaleX:0.41,scaleY:0.41,x:16.6,y:105,alpha:0},14).wait(7));

	// Слой 2
	this.instance_6 = new lib.Символ50();
	this.instance_6.parent = this;
	this.instance_6.setTransform(8.3,1.4,1,1,0,0,0,1.4,1.4);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(9).to({_off:false},0).to({scaleX:0.38,scaleY:0.38,x:8.4,y:105,alpha:0},20).wait(1).to({scaleX:1,scaleY:1,x:16.5,y:1.4,alpha:1},0).to({scaleX:0.41,scaleY:0.41,x:16.6,y:105,alpha:0},13).wait(2));

	// Слой 1
	this.instance_7 = new lib.Символ50();
	this.instance_7.parent = this;
	this.instance_7.setTransform(1.4,1.4,1,1,0,0,0,1.4,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleX:0.45,scaleY:0.45,x:1.5,y:105,alpha:0},14).wait(1).to({scaleX:1,scaleY:1,x:1.4,y:1.4,alpha:1},0).to({scaleX:0.45,scaleY:0.45,x:1.5,y:105,alpha:0},27).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-3.4,28.7,6.4);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ13();
	this.instance.parent = this;
	this.instance.setTransform(13.3,129.1,1.004,1.004,30,0,0,17.8,26.9);

	this.instance_1 = new lib.Символ13();
	this.instance_1.parent = this;
	this.instance_1.setTransform(126.9,127.4,0.999,0.999,0,-15,165,17.6,27.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 1
	this.instance_2 = new lib.pirojenko();
	this.instance_2.parent = this;
	this.instance_2.setTransform(42.1,0,0.812,0.812,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ47, new cjs.Rectangle(-15.8,0,171.7,187.4), null);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ17();
	this.instance.parent = this;
	this.instance.setTransform(44,11.5,1,1,0,0,0,6.5,8.5);

	this.instance_1 = new lib.Символ17();
	this.instance_1.parent = this;
	this.instance_1.setTransform(6.5,8.5,1,1,0,0,0,6.5,8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ39, new cjs.Rectangle(0,0,50.5,20), null);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ46();
	this.instance.parent = this;
	this.instance.setTransform(72.6,100.1,0.827,0.827,0,0,0,72.5,100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#464491").s().p("AsRMTQlGlGAAnNQAAnLFGlGQFGlGHLAAQHNAAFFFGQFGFGAAHLQAAHNlGFGQlFFFnNAAQnLAAlGlFg");
	this.shape.setTransform(69.3,102.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ35, new cjs.Rectangle(-41.9,-8.6,222.4,222.4), null);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.parent = this;
	this.instance.setTransform(1129.5,110,1,1,0,0,0,376.5,110);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:1882.7},184).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2259,220);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия: 2
	this.instance = new lib.Символ14();
	this.instance.parent = this;
	this.instance.setTransform(60,28.4,0.476,0.476,0,0,0,126,59.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({regY:59.2,scaleX:1.16,scaleY:1.16,y:28.1,alpha:0},23).wait(1).to({regY:59.5,scaleX:0.48,scaleY:0.48,y:28.4,alpha:1},0).to({regY:59.2,scaleX:1.16,scaleY:1.16,y:28.1,alpha:0},24).wait(1));

	// Слой 1 - копия
	this.instance_1 = new lib.Символ14();
	this.instance_1.parent = this;
	this.instance_1.setTransform(60.1,28.2,0.817,0.817,0,0,0,126,59.4);
	this.instance_1.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:59.2,scaleX:1.16,scaleY:1.16,x:60,y:28.1,alpha:0},12).wait(1).to({regY:59.5,scaleX:0.48,scaleY:0.48,y:28.4,alpha:1},0).to({regY:59.2,scaleX:1.16,scaleY:1.16,y:28.1,alpha:0},24).wait(1).to({regY:59.5,scaleX:0.48,scaleY:0.48,y:28.4,alpha:1},0).to({scaleX:0.79,scaleY:0.79,y:28.3,alpha:0.539},11).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.9,-20.3,206,97.2);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ28();
	this.instance.parent = this;
	this.instance.setTransform(30.3,19.2,1,1,0,0,0,30.3,19.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0.52},0).wait(1).to({alpha:0},0).wait(5).to({alpha:1},0).wait(1).to({alpha:0.52},0).wait(1).to({alpha:0},0).wait(111));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,60.6,38.6);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ22();
	this.instance.parent = this;
	this.instance.setTransform(38.5,16.5,1,1,0,0,0,38.5,16.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ27, new cjs.Rectangle(0,0,77,33), null);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ23();
	this.instance.parent = this;
	this.instance.setTransform(24.5,8.5,1,1,0,0,0,24.5,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ26, new cjs.Rectangle(0,0,49,17), null);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ27();
	this.instance.parent = this;
	this.instance.setTransform(38.5,15.1,1,1.08,0,0,0,38.5,16.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({scaleY:0.98,y:13.4},3,cjs.Ease.get(-1)).to({scaleY:0.85,y:11.2},4,cjs.Ease.get(1)).to({scaleY:0.95,y:12.9},3,cjs.Ease.get(-1)).to({scaleY:1.08,y:15.1},4,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ26();
	this.instance_1.parent = this;
	this.instance_1.setTransform(45.5,8.5,1,1,0,0,0,24.5,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({x:45.6,y:6.8},3,cjs.Ease.get(-1)).to({x:45.8,y:4.4},4,cjs.Ease.get(1)).to({x:45.7,y:6.2},3,cjs.Ease.get(-1)).to({x:45.5,y:8.5},4,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-2.6,77,35.7);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ39();
	this.instance.parent = this;
	this.instance.setTransform(21.1,16.2,1,1,0,0,0,25.2,10);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:24.1},19,cjs.Ease.get(-1)).to({x:27.3},20,cjs.Ease.get(1)).to({x:24.2},20,cjs.Ease.get(-1)).to({x:21.1},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.1,6.2,50.5,20);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.parent = this;
	this.instance.setTransform(31.5,16,1,1,0,0,0,31.5,16);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,skewY:1.8,x:31.6,y:17.1},10,cjs.Ease.get(-1)).to({scaleX:1,skewY:4.1,x:31.5,y:18.3},11,cjs.Ease.get(1)).to({scaleX:1,skewY:2,x:31.6,y:17.2},3,cjs.Ease.get(-1)).to({scaleX:1,skewY:0,x:31.5,y:16},3,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63,32);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ11();
	this.instance.parent = this;
	this.instance.setTransform(51.5,55.5,1,1,0,0,0,44,33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(7.5,22,88,67), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.Символ57копия();
	this.instance.parent = this;
	this.instance.setTransform(550.2,353,1,1,0,0,0,12.8,13.2);

	this.instance_1 = new lib.Символ57копия2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(385.9,353,1,1,0,0,0,12.8,13.2);

	this.instance_2 = new lib.Символ57копия3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(221.6,353,1,1,0,0,0,12.8,13.2);

	this.instance_3 = new lib.Символ57();
	this.instance_3.parent = this;
	this.instance_3.setTransform(57.3,346.5,1,1,0,0,0,12.8,13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#464491").ss(1,1,1).p("EAmhgdzMAAAA7nAM29zMAAAA7nAs09zMAAAA7nEgmggdzMAAAA7n");
	this.shape.setTransform(303.7,162.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 3
	this.instance_4 = new lib.Символ34();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-517.5,202.1,1,1,0,0,0,1129.5,110);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5656AD").s().p("EgvzAZAMAAAgx/MBfnAAAMAAAAx/g");
	this.shape_1.setTransform(306,160);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(-1647,-64.2,2259,430.5), null);


(lib.Символ56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgwBKQAAAAgBAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAIAAiJQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQABAAAAAAIATAAQAGAAAAAFIAAAwIAfAAQAKAAAJAEQAIAEAGAGQAGAGAEAJQADAIAAAJQAAAKgDAIQgEAJgGAHQgGAGgJAEQgIAEgLAAgAgXAwIAaAAQAFAAAEgCQADgBADgDIAFgHQABgEAAgFIgBgIQgCgDgDgDIgGgFQgEgCgFAAIgaAAg");
	this.shape.setTransform(149.5,16.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgJBKIgBAAIgCgBIgCgCIAAgCIAAhzIgkAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAgBAAAAIAAgSQAAAAAAgBQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAIBlAAIADABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAIAAASIgBADQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgkAAIAABzIAAACIgBABIgCACIgCAAg");
	this.shape_1.setTransform(135.5,16.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAuBKIgDAAIgBgDIgKgXIg/AAIgKAXQAAABAAABQgBAAAAAAQgBABAAAAQgBAAgBAAIgUAAQgBAAgBAAQAAAAgBAAQAAAAAAAAQAAgBgBAAIgBgCIAPgkIAthpIABgCIAEgBIALAAIADABIACACIA7CMIAAAAIAAADQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAgAAVAVIgVgzIgUAzIApAAg");
	this.shape_2.setTransform(122.1,16.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgJBKIgCAAIgBgBIgBgCIgBgCIAAhzIgkAAQgBAAAAAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQAAAAgBgBQAAAAAAgBQAAgBAAAAIAAgSQAAAAAAgBQAAAAAAgBQABAAAAAAQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQAAAAABAAIBlAAIAEABQAAAAAAAAQAAABABAAQAAABAAAAQAAABAAAAIAAASIgBADQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIglAAIAABzIAAACIAAABIgCACIgCAAg");
	this.shape_3.setTransform(107.6,16.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgTBKQgKgDgJgFQgIgFgHgHQgHgHgFgIQgFgJgDgJQgCgKAAgLQAAgJACgKQADgKAFgJQAFgIAHgHQAHgHAIgFQAJgFAKgDQAJgCAKAAQAKAAAKACQAKADAJAFQAIAFAHAHQAHAHAFAIQAFAJADAKQACAKAAAJQAAALgCAKQgDAJgFAJQgFAIgHAHQgHAHgIAFQgJAFgKADQgKACgKAAQgKAAgJgCgAgSgsQgIAEgHAHQgGAGgDAJQgEAJAAAJQAAAKAEAJQADAJAGAHQAHAGAIAEQAJAEAJAAQAKAAAIgEQAJgEAGgGQAGgHAEgJQADgJAAgKQAAgJgDgJQgEgJgGgGQgGgHgJgEQgIgEgKAAQgJAAgJAEg");
	this.shape_4.setTransform(93,16.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgyBKQgEAAAAgEIAAiLIABgDIADgBIBZAAIADABIAAADIAAARIgBADQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAIhAAAIAAAeIAkAAQAKAAAIAEQAJAEAGAGQAGAGADAIQADAJAAAJQAAAJgDAIQgEAJgGAGQgGAHgIADQgJAEgKAAgAgaAyIAfAAQAFAAAEgCIAHgFQADgDABgEQACgEAAgEQAAgFgCgEQgBgEgDgDIgHgFQgEgCgFAAIgfAAg");
	this.shape_5.setTransform(77.8,16.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAuBKIgDAAIgCgDIgKgXIg+AAIgKAXQAAABAAABQgBAAAAAAQgBABAAAAQgBAAAAAAIgWAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAgBgBAAIAAgCIAPgkIAshpIABgCIAEgBIAKAAIAEABIACACIA8CMIAAAAIgBADQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAgAAVAVIgVgzIgVAzIAqAAg");
	this.shape_6.setTransform(63.3,16.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgwBKQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAIAAiJQAAAAAAgBQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAIA3AAQALAAAIAEQAJAEAGAGQAGAHAEAJQADAIAAAKQAAAJgDAIQgEAIgGAHQgGAGgIAEQgJAEgKAAIgfAAIAAAwQAAAFgGAAgAgXgEIAaAAQAFAAAEgCIAGgFQADgDACgDQABgEAAgFIgBgIQgCgDgDgDIgGgFQgEgCgFAAIgaAAg");
	this.shape_7.setTransform(49.5,16.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAuBKIgDAAIgCgDIgKgXIg+AAIgKAXQAAABAAABQgBAAAAAAQgBABAAAAQgBAAgBAAIgVAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAgBAAAAIgBgCIAOgkIAshpIACgCIAEgBIAKAAIAEABIACACIA7CMIAAAAIgBADQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAgAAVAVIgVgzIgVAzIAqAAg");
	this.shape_8.setTransform(35.1,16.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgbBJQgMgEgIgIIgCgBIgBgCIAAgBIACgBIgBAAIAEgGIAEgFIACgCIACgCIABgBIACgBIACABQAFAGAIACQAGACAKAAIAKgBQAEgBAEgCQADgDACgEQADgEAAgHQAAgHgCgEQgDgEgDgDQgEgDgFgBQgGgBgGAAIgFAAIgEgBIgBgDIAAgHIAAgIIABgDIAEgBIADAAIAIAAIAIgCQAFgCADgEQACgDAAgGQAAgEgBgDIgGgGIgIgDIgIgBQgHABgGACQgHACgEAFIgDABIgCgBIgLgOIAAgCIAAgDIADgDQAHgFAJgDQAKgDALAAIARABQAKACAGAEQAIAEAEAHQAEAHAAAMQAAAHgBAEIgFAIQgDAEgDACIgGAEIAKAHIAIAHQADAFABAGQADAGAAAIQAAAMgFAIQgEAJgHAGQgIAGgKACQgKADgKAAQgNAAgLgDg");
	this.shape_9.setTransform(21.2,16.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 1
	this.instance = new lib.Символ55();
	this.instance.parent = this;
	this.instance.setTransform(85,16.4,1,1,0,0,0,85,17.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ56, new cjs.Rectangle(0,-0.7,170.1,34.2), null);


(lib.Символ35_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance_1 = new lib.Символ37();
	this.instance_1.parent = this;
	this.instance_1.setTransform(66.1,98.6,1.33,1.33,0,0,0,60,51.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#464491").s().p("AsRMTQlGlGAAnNQAAnLFGlGQFGlGHLAAQHNAAFFFGQFGFGAAHLQAAHNlGFGQlFFFnNAAQnLAAlGlFg");
	this.shape_1.setTransform(69.3,102.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ35_1, new cjs.Rectangle(-41.9,-8.6,222.4,222.4), null);


(lib.Символ56_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgwBKQAAAAgBAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAgBAAAAIAAiJQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAAAQAAgBABAAQAAAAABAAQABAAAAAAIATAAQAGAAAAAFIAAAwIAfAAQAKAAAJAEQAIAEAGAGQAGAGAEAJQADAIAAAJQAAAKgDAIQgEAJgGAHQgGAGgJAEQgIAEgLAAgAgXAwIAaAAQAFAAAEgCQADgBADgDIAFgHQABgEAAgFIgBgIQgCgDgDgDIgGgFQgEgCgFAAIgaAAg");
	this.shape_10.setTransform(148.3,17.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgJBKIgCAAIgBgBIgCgCIAAgCIAAhzIgkAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIAAgSQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAIBlAAIAEABQAAAAAAAAQAAABABAAQAAABAAAAQAAABAAAAIAAASIgBADQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIglAAIAABzIAAACIgBABIgBACIgCAAg");
	this.shape_11.setTransform(134.3,17.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAoBKQgFAAAAgEIAAhiIhEBjIgCACIgCABIgWAAQgEAAAAgEIAAiLQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAIADgBIAVAAIACAAIACADIAABcIBBhcIACgCIAEgBIAXAAQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAIABADIAACLQAAAEgEAAg");
	this.shape_12.setTransform(120.3,17.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AA9BKQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAIgCgEIgJhZIggBWIgDADQAAABgBAAQAAAAAAABQgBAAAAAAQAAAAgBAAIgQAAIgCgBIgCgDIgRgsIgQgrIgJBZIgBAEQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAIgSAAQgFAAAAgFIAOiJQAAgBAAAAQAAgBABAAQAAgBAAAAQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAIAXAAIAEABIACADIAIAYIAJAXIARAxIAjhgIACgDIAEgBIAXAAIAEABQABABAAAAQAAAAAAABQABAAAAABQAAAAAAABIAOCJIgBAEQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAg");
	this.shape_13.setTransform(102.9,17.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgwBKQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAIAAiJQAAAAAAgBQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAIA3AAQALAAAIAEQAJAEAGAGQAGAHAEAJQADAIAAAKQAAAJgDAIQgEAIgGAHQgGAGgIAEQgJAEgKAAIgfAAIAAAwQAAAFgGAAgAgXgEIAaAAQAFAAAEgCIAGgFQADgDACgDQABgEAAgFIgBgIQgCgDgDgDIgGgFQgEgCgFAAIgaAAg");
	this.shape_14.setTransform(87.6,17.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgTBKQgKgDgJgFQgIgFgHgHQgHgHgFgIQgFgJgDgJQgCgKAAgLQAAgJACgKQADgKAFgJQAFgIAHgHQAHgHAIgFQAJgFAKgDQAJgCAKAAQAKAAAKACQAKADAJAFQAIAFAHAHQAHAHAFAIQAFAJADAKQACAKAAAJQAAALgCAKQgDAJgFAJQgFAIgHAHQgHAHgIAFQgJAFgKADQgKACgKAAQgKAAgJgCgAgSgsQgIAEgHAHQgGAGgDAJQgEAJAAAJQAAAKAEAJQADAJAGAHQAHAGAIAEQAJAEAJAAQAKAAAIgEQAJgEAGgGQAGgHAEgJQADgJAAgKQAAgJgDgJQgEgJgGgGQgGgHgJgEQgIgEgKAAQgJAAgJAEg");
	this.shape_15.setTransform(72,17.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAgBKIgCAAIgBgCIgCgCIgCgCIgrg2QgEADgEABIgJABIAAAzQAAAEgFAAIgTAAQgEAAAAgEIAAiLIABgDIADgBIATAAIADABQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAIAAA7QAEAAAFgEQAGgEAFgHIADgEIACgEIADgEIACgDIAIgNQAFgHAGgEIANgHQAHgCAJAAQAEAAAAADIAAASIgBADQAAAAgBAAQAAABAAAAQAAAAgBAAQAAAAgBAAQgFAAgGAFQgGAEgGAIIgGAHIgFAIIgFAHIgEAFIA/BLIABABIAAACIgBAAg");
	this.shape_16.setTransform(56,17.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgTBKQgKgDgJgFQgIgFgHgHQgHgHgFgIQgFgJgDgJQgCgKAAgLQAAgJACgKQADgKAFgJQAFgIAHgHQAHgHAIgFQAJgFAKgDQAJgCAKAAQAKAAAKACQAKADAJAFQAIAFAHAHQAHAHAFAIQAFAJADAKQACAKAAAJQAAALgCAKQgDAJgFAJQgFAIgHAHQgHAHgIAFQgJAFgKADQgKACgKAAQgKAAgJgCgAgSgsQgIAEgHAHQgGAGgDAJQgEAJAAAJQAAAKAEAJQADAJAGAHQAHAGAIAEQAJAEAJAAQAKAAAIgEQAJgEAGgGQAGgHAEgJQADgJAAgKQAAgJgDgJQgEgJgGgGQgGgHgJgEQgIgEgKAAQgJAAgJAEg");
	this.shape_17.setTransform(40,17.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAiBKIgDgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAIAAh1Ig7AAIAAB1IgBADIgDABIgUAAIgDgBQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBIAAiLQAAgEAEAAIBrAAIADABIABADIAACLIgBADIgEABg");
	this.shape_18.setTransform(24.1,17.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]}).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ55_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(85,17.1,1,1,0,0,0,85,17.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ56_1, new cjs.Rectangle(0,0,170.1,34.2), null);


(lib.Символ52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 51
	this.instance = new lib.Символ51();
	this.instance.parent = this;
	this.instance.setTransform(10.6,13.5,1.312,1.312,0,0,0,1.4,1.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({_off:false},0).wait(58));

	// Символ 51
	this.instance_1 = new lib.Символ51();
	this.instance_1.parent = this;
	this.instance_1.setTransform(50.6,13.5,1.312,1.312,0,0,0,1.4,1.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).wait(62));

	// Символ 51
	this.instance_2 = new lib.Символ51();
	this.instance_2.parent = this;
	this.instance_2.setTransform(43.7,6.5,1.312,1.312,0,0,0,1.4,1.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(16).to({_off:false},0).wait(49));

	// Символ 51
	this.instance_3 = new lib.Символ51();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1.9,6.5,1.312,1.312,0,0,0,1.4,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(65));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,37.6,8.4);


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ19();
	this.instance.parent = this;
	this.instance.setTransform(46.6,45.3,1,1,0,0,0,47.8,44.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ49, new cjs.Rectangle(6.3,22.8,88,67), null);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ31();
	this.instance.parent = this;
	this.instance.setTransform(73,34.5,1,1,0,0,0,60,28.3);
	this.instance.alpha = 0.461;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ42, new cjs.Rectangle(-29.9,-14.1,206,97.2), null);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ24();
	this.instance.parent = this;
	this.instance.setTransform(29.3,3.8,1,1,0,0,0,25.2,10);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-0.6},29,cjs.Ease.get(-1)).to({y:-5.2},30,cjs.Ease.get(1)).to({y:-0.7},30,cjs.Ease.get(-1)).to({y:3.8},30,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,50.5,20);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(6));

	// Слой 4
	this.instance = new lib.Символ56_1();
	this.instance.parent = this;
	this.instance.setTransform(64.2,153.8,1,1,0,0,0,85,17.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:144.3,alpha:0.398},2,cjs.Ease.get(-1)).to({y:130.2,alpha:1},3,cjs.Ease.get(1)).to({y:139.6,alpha:0.602},2,cjs.Ease.get(-1)).to({y:153.8,alpha:0},3,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ35();
	this.instance_1.parent = this;
	this.instance_1.setTransform(64.6,61.5,0.565,0.565,0,0,0,72.5,100.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:72.6,y:53.5},2,cjs.Ease.get(-1)).to({regX:72.5,y:41.5},3,cjs.Ease.get(1)).to({regX:72.6,regY:100,y:49.4},2,cjs.Ease.get(-1)).to({regX:72.5,regY:100.2,y:61.5},3,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.8,0,170,170.8);


(lib.Символ38_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(6));

	// Слой 4
	this.instance_2 = new lib.Символ56();
	this.instance_2.parent = this;
	this.instance_2.setTransform(64.2,153.8,1,1,0,0,0,85,17.1);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:144.3,alpha:0.398},2,cjs.Ease.get(-1)).to({y:130.2,alpha:1},3,cjs.Ease.get(1)).to({y:139.6,alpha:0.602},2,cjs.Ease.get(-1)).to({y:153.8,alpha:0},3,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_3 = new lib.Символ35_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(64.6,61.5,0.565,0.565,0,0,0,72.5,100.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:72.6,y:53.5},2,cjs.Ease.get(-1)).to({regX:72.5,y:41.5},3,cjs.Ease.get(1)).to({regX:72.6,regY:100,y:49.4},2,cjs.Ease.get(-1)).to({regX:72.5,regY:100.2,y:61.5},3,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.8,0,170,170.1);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ29();
	this.instance.parent = this;
	this.instance.setTransform(30.3,19.2,1,1,0,0,0,30.3,19.2);

	this.instance_1 = new lib.Символ40();
	this.instance_1.parent = this;
	this.instance_1.setTransform(26.5,27.4,1,1,0,0,0,25.2,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ41, new cjs.Rectangle(0,0,60.6,38.6), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// glaza
	this.instance = new lib.Символ41();
	this.instance.parent = this;
	this.instance.setTransform(107,82.1,1,1,0,0,0,30.3,19.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 5
	this.instance_1 = new lib.Символ25();
	this.instance_1.parent = this;
	this.instance_1.setTransform(108.5,144.5,1,1,0,0,0,38.5,16.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 4
	this.instance_2 = new lib.Символ3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(92,96,1,1,0,0,0,92,96);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 2
	this.instance_3 = new lib.Символ21();
	this.instance_3.parent = this;
	this.instance_3.setTransform(108.5,17,1,1,0,0,0,31.5,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(0,0,184,192), null);


(lib.Символ2копия2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 5
	this.instance = new lib.Символ53();
	this.instance.parent = this;
	this.instance.setTransform(341.4,218.1,1,1,0,0,0,60,67.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// boka
	this.instance_1 = new lib.Символ20();
	this.instance_1.parent = this;
	this.instance_1.setTransform(448.5,176,1,1,0,0,0,74.5,52);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// BODY
	this.instance_2 = new lib.Символ18();
	this.instance_2.parent = this;
	this.instance_2.setTransform(439,138,1,1,0,0,0,92,96);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 3
	this.instance_3 = new lib.Символ54();
	this.instance_3.parent = this;
	this.instance_3.setTransform(522.7,200.4,1,1,0,0,0,60,66.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2копия2, new cjs.Rectangle(281.4,42,301.4,243.6), null);


(lib.Символ2копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ47();
	this.instance.parent = this;
	this.instance.setTransform(444.4,135.2,1,1,0,0,0,77.9,93.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:78,rotation:1.3,x:444.6},2,cjs.Ease.get(-1)).to({regX:77.9,regY:93.8,rotation:3.2,x:444.4,y:135.3},3,cjs.Ease.get(1)).to({regX:78,rotation:1.5,x:444.5},3,cjs.Ease.get(-1)).to({regX:77.9,regY:93.7,rotation:0,x:444.4,y:135.2},3,cjs.Ease.get(1)).to({regX:78,rotation:1.3,x:444.6},2,cjs.Ease.get(-1)).to({regX:77.9,regY:93.8,rotation:3.2,x:444.4,y:135.3},3,cjs.Ease.get(1)).to({regX:78,rotation:1.5,x:444.5},3,cjs.Ease.get(-1)).to({regX:77.9,regY:93.7,rotation:0,x:444.4,y:135.2},3,cjs.Ease.get(1)).to({regX:78,rotation:1.3,x:444.6},2,cjs.Ease.get(-1)).to({regX:77.9,regY:93.8,rotation:3.2,x:444.4,y:135.3},3,cjs.Ease.get(1)).to({regX:78,rotation:1.5,x:444.5},3,cjs.Ease.get(-1)).to({regX:77.9,regY:93.7,rotation:0,x:444.4,y:135.2},3,cjs.Ease.get(1)).to({regX:78,rotation:1.3,x:444.6},2,cjs.Ease.get(-1)).to({regX:77.9,regY:93.8,rotation:3.2,x:444.4,y:135.3},3,cjs.Ease.get(1)).to({regX:78,rotation:1.5,x:444.5},3,cjs.Ease.get(-1)).to({regX:77.9,regY:93.7,rotation:0,x:444.4,y:135.2},3,cjs.Ease.get(1)).wait(1).to({rotation:-3.3,x:436.4,y:140.8},5,cjs.Ease.get(-1)).to({regY:93.8,rotation:-8.7,x:424.4,y:149.3},5,cjs.Ease.get(1)).to({regY:93.7,rotation:-5.1,x:432.3,y:143.6},5,cjs.Ease.get(-1)).to({rotation:0,x:444.4,y:135.2},5,cjs.Ease.get(1)).wait(1));

	// Символ 10
	this.instance_1 = new lib.Символ10();
	this.instance_1.parent = this;
	this.instance_1.setTransform(524.6,179.8,1.019,1.019,30,0,0,20.5,17.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.02,scaleY:1.02,rotation:0,skewX:30,skewY:25.8,x:524,y:181.1},2,cjs.Ease.get(-1)).to({regX:20.7,regY:17.5,scaleX:1.03,scaleY:1.02,skewY:20.8,x:523.1,y:182.7},3,cjs.Ease.get(1)).to({regY:17.4,scaleX:1.02,scaleY:1.02,skewY:25.3,x:524,y:181.1},3,cjs.Ease.get(-1)).to({regX:20.5,regY:17.6,scaleX:1.02,scaleY:1.02,rotation:30,skewX:0,skewY:0,x:524.6,y:179.8},3,cjs.Ease.get(1)).to({scaleX:1.02,scaleY:1.02,rotation:0,skewX:30,skewY:25.8,x:524,y:181.1},2,cjs.Ease.get(-1)).to({regX:20.7,regY:17.5,scaleX:1.03,scaleY:1.02,skewY:20.8,x:523.1,y:182.7},3,cjs.Ease.get(1)).to({regY:17.4,scaleX:1.02,scaleY:1.02,skewY:25.3,x:524,y:181.1},3,cjs.Ease.get(-1)).to({regX:20.5,regY:17.6,scaleX:1.02,scaleY:1.02,rotation:30,skewX:0,skewY:0,x:524.6,y:179.8},3,cjs.Ease.get(1)).to({scaleX:1.02,scaleY:1.02,rotation:0,skewX:30,skewY:25.8,x:524,y:181.1},2,cjs.Ease.get(-1)).to({regX:20.7,regY:17.5,scaleX:1.03,scaleY:1.02,skewY:20.8,x:523.1,y:182.7},3,cjs.Ease.get(1)).to({regY:17.4,scaleX:1.02,scaleY:1.02,skewY:25.3,x:524,y:181.1},3,cjs.Ease.get(-1)).to({regX:20.5,regY:17.6,scaleX:1.02,scaleY:1.02,rotation:30,skewX:0,skewY:0,x:524.6,y:179.8},3,cjs.Ease.get(1)).to({scaleX:1.02,scaleY:1.02,rotation:0,skewX:30,skewY:25.8,x:524,y:181.1},2,cjs.Ease.get(-1)).to({regX:20.7,regY:17.5,scaleX:1.03,scaleY:1.02,skewY:20.8,x:523.1,y:182.7},3,cjs.Ease.get(1)).to({regY:17.4,scaleX:1.02,scaleY:1.02,skewY:25.3,x:524,y:181.1},3,cjs.Ease.get(-1)).to({regX:20.5,regY:17.6,scaleX:1.02,scaleY:1.02,rotation:30,skewX:0,skewY:0,x:524.6,y:179.8},3,cjs.Ease.get(1)).wait(1).to({regX:20.6,scaleX:1.02,scaleY:1.02,x:518.9,y:182.1},5,cjs.Ease.get(-1)).to({regX:20.5,scaleX:1.02,scaleY:1.02,x:510.1,y:185.3},5,cjs.Ease.get(1)).to({regX:20.6,scaleX:1.02,scaleY:1.02,x:516,y:183.1},5,cjs.Ease.get(-1)).to({regX:20.5,scaleX:1.02,scaleY:1.02,x:524.6,y:179.8},5,cjs.Ease.get(1)).wait(1));

	// Слой 3
	this.instance_2 = new lib.Символ10();
	this.instance_2.parent = this;
	this.instance_2.setTransform(354.2,163.9,1.019,1.019,75,0,0,20.6,17.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:17.5,scaleX:1.02,scaleY:1.02,rotation:0,skewX:72.7,skewY:75.2,x:354.1,y:163.2},2,cjs.Ease.get(-1)).to({scaleX:1.02,scaleY:1.02,skewX:69.7,skewY:75,x:353.9,y:162.3},3,cjs.Ease.get(1)).to({scaleX:1.02,scaleY:1.02,skewX:72.4,skewY:75.2,x:354.1,y:163.2},3,cjs.Ease.get(-1)).to({regY:17.6,scaleX:1.02,scaleY:1.02,rotation:75,skewX:0,skewY:0,x:354.2,y:163.9},3,cjs.Ease.get(1)).to({regY:17.5,scaleX:1.02,scaleY:1.02,rotation:0,skewX:72.7,skewY:75.2,x:354.1,y:163.2},2,cjs.Ease.get(-1)).to({scaleX:1.02,scaleY:1.02,skewX:69.7,skewY:75,x:353.9,y:162.3},3,cjs.Ease.get(1)).to({scaleX:1.02,scaleY:1.02,skewX:72.4,skewY:75.2,x:354.1,y:163.2},3,cjs.Ease.get(-1)).to({regY:17.6,scaleX:1.02,scaleY:1.02,rotation:75,skewX:0,skewY:0,x:354.2,y:163.9},3,cjs.Ease.get(1)).to({regY:17.5,scaleX:1.02,scaleY:1.02,rotation:0,skewX:72.7,skewY:75.2,x:354.1,y:163.2},2,cjs.Ease.get(-1)).to({scaleX:1.02,scaleY:1.02,skewX:69.7,skewY:75,x:353.9,y:162.3},3,cjs.Ease.get(1)).to({scaleX:1.02,scaleY:1.02,skewX:72.4,skewY:75.2,x:354.1,y:163.2},3,cjs.Ease.get(-1)).to({regY:17.6,scaleX:1.02,scaleY:1.02,rotation:75,skewX:0,skewY:0,x:354.2,y:163.9},3,cjs.Ease.get(1)).to({regY:17.5,scaleX:1.02,scaleY:1.02,rotation:0,skewX:72.7,skewY:75.2,x:354.1,y:163.2},2,cjs.Ease.get(-1)).to({scaleX:1.02,scaleY:1.02,skewX:69.7,skewY:75,x:353.9,y:162.3},3,cjs.Ease.get(1)).to({scaleX:1.02,scaleY:1.02,skewX:72.4,skewY:75.2,x:354.1,y:163.2},3,cjs.Ease.get(-1)).to({regY:17.6,scaleX:1.02,scaleY:1.02,rotation:75,skewX:0,skewY:0,x:354.2,y:163.9},3,cjs.Ease.get(1)).wait(1).to({regY:17.5,rotation:84.4,x:351.5,y:175.3},5,cjs.Ease.get(-1)).to({regY:17.6,rotation:98.2,x:346.9,y:192.2},5,cjs.Ease.get(1)).to({rotation:89,x:349.8,y:180.9},5,cjs.Ease.get(-1)).to({rotation:75,x:354.2,y:163.9},5,cjs.Ease.get(1)).wait(1));

	// kroshki
	this.instance_3 = new lib.Символ52();
	this.instance_3.parent = this;
	this.instance_3.setTransform(445.8,196.2,1,1,0,0,0,43.1,7.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(44).to({alpha:0},7).wait(15));

	// boka
	this.instance_4 = new lib.Символ20();
	this.instance_4.parent = this;
	this.instance_4.setTransform(448.5,176,1,1,0,0,0,74.5,52);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(66));

	// Символ 5
	this.instance_5 = new lib.Символ5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(367.5,159.7,1.024,1.024,0,0,0,34.6,16.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(45).to({rotation:-8.8,x:366,y:165.5},5,cjs.Ease.get(-1)).to({rotation:-22.2,x:363.7,y:174.2},5,cjs.Ease.get(1)).to({rotation:-13.3,x:365.2,y:168.4},5,cjs.Ease.get(-1)).to({rotation:0,x:367.5,y:159.7},5,cjs.Ease.get(1)).wait(1));

	// BODY
	this.instance_6 = new lib.Символ18();
	this.instance_6.parent = this;
	this.instance_6.setTransform(439,138,1,1,0,0,0,92,96);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(66));

	// Символ 6
	this.instance_7 = new lib.Символ6();
	this.instance_7.parent = this;
	this.instance_7.setTransform(517.8,169.2,1.02,1.019,0,-30,-31.5,24.5,30.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(45).to({regX:24.6,scaleX:1.02,scaleY:1.02,skewX:-26.1,skewY:-27.6,x:512.6,y:169.9},5,cjs.Ease.get(-1)).to({regX:24.5,regY:30.8,scaleX:1.02,scaleY:1.02,skewX:-20.3,skewY:-21.8,x:504.6,y:171.2},5,cjs.Ease.get(1)).to({scaleX:1.02,scaleY:1.02,skewX:-24.1,skewY:-25.6,x:509.9,y:170.5},5,cjs.Ease.get(-1)).to({regY:30.7,scaleX:1.02,scaleY:1.02,skewX:-30,skewY:-31.5,x:517.8,y:169.2},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(331.7,41.5,222.9,192.5);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// boka
	this.instance = new lib.Символ20();
	this.instance.parent = this;
	this.instance.setTransform(448.5,176,1,1,0,0,0,74.5,52);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:178.8},2,cjs.Ease.get(-1)).to({y:182.9},3,cjs.Ease.get(1)).to({y:180.2},2,cjs.Ease.get(-1)).to({y:176},3,cjs.Ease.get(1)).to({x:448.9,y:179.5},3,cjs.Ease.get(-1)).to({x:449.2,y:182.9},3,cjs.Ease.get(1)).to({x:448.9,y:179.5},3,cjs.Ease.get(-1)).to({x:448.5,y:176},3,cjs.Ease.get(1)).wait(1));

	// Символ 13
	this.instance_1 = new lib.Символ13();
	this.instance_1.parent = this;
	this.instance_1.setTransform(341.8,133.3,1.004,1.004,15,0,0,17.7,26.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:17.8,rotation:8.8,x:339.3,y:131.9},2,cjs.Ease.get(-1)).to({regX:17.7,rotation:0,x:335.4,y:129.8},3,cjs.Ease.get(1)).to({rotation:5.8,x:337.9,y:131.1},2,cjs.Ease.get(-1)).to({rotation:15,x:341.8,y:133.3},3,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:22.3,x:341.9},3,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:30},3,cjs.Ease.get(1)).to({regX:17.8,scaleX:1,scaleY:1,rotation:22.3,x:342},3,cjs.Ease.get(-1)).to({regX:17.7,scaleX:1,scaleY:1,rotation:15,x:341.8},3,cjs.Ease.get(1)).wait(1));

	// Символ 5
	this.instance_2 = new lib.Символ5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(356.6,156.2,1.024,1.024,0,0,0,34.6,16.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1.03,skewY:2.5,y:157.8},2,cjs.Ease.get(-1)).to({scaleX:1.03,skewY:6.5,y:160.2},3,cjs.Ease.get(1)).to({scaleX:1.03,skewY:3.8,y:158.6},2,cjs.Ease.get(-1)).to({scaleX:1.02,skewY:0,y:156.2},3,cjs.Ease.get(1)).to({scaleX:1.03,skewY:3.1,y:158.3},3,cjs.Ease.get(-1)).to({scaleX:1.03,skewY:6.5,y:160.2},3,cjs.Ease.get(1)).to({scaleX:1.03,skewY:3.1,y:158.1},3,cjs.Ease.get(-1)).to({scaleX:1.02,skewY:0,y:156.2},3,cjs.Ease.get(1)).wait(1));

	// nog_right.png
	this.instance_3 = new lib.Символ7();
	this.instance_3.parent = this;
	this.instance_3.setTransform(410.6,237.5,1,1,0,0,0,11.5,23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:240.3},2,cjs.Ease.get(-1)).to({y:244.4},3,cjs.Ease.get(1)).to({y:241.7},2,cjs.Ease.get(-1)).to({y:237.5},3,cjs.Ease.get(1)).to({regX:11.6,regY:23.6,scaleY:1,skewX:2.8,x:411.9,y:238.7},3,cjs.Ease.get(-1)).to({regY:23.5,scaleY:1,skewX:5.6,x:413,y:239.6},3,cjs.Ease.get(1)).to({regY:23.6,scaleY:1,skewX:2.8,x:411.8,y:238.7},3,cjs.Ease.get(-1)).to({regX:11.5,regY:23.5,scaleY:1,skewX:0,x:410.6,y:237.5},3,cjs.Ease.get(1)).wait(1));

	// BODY
	this.instance_4 = new lib.Символ18();
	this.instance_4.parent = this;
	this.instance_4.setTransform(439,138,1,1,0,0,0,92,96);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:140.8},2,cjs.Ease.get(-1)).to({y:144.9},3,cjs.Ease.get(1)).to({y:142.2},2,cjs.Ease.get(-1)).to({y:138},3,cjs.Ease.get(1)).to({x:439.4,y:141.2},3,cjs.Ease.get(-1)).to({x:439.7,y:144.3},3,cjs.Ease.get(1)).to({x:439.4,y:141.2},3,cjs.Ease.get(-1)).to({x:439,y:138},3,cjs.Ease.get(1)).wait(1));

	// foot_right.png
	this.instance_5 = new lib.Символ16();
	this.instance_5.parent = this;
	this.instance_5.setTransform(400.5,281.5,1,1,0,0,0,15.5,28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regY:28.6,scaleY:0.94,y:283.2},2,cjs.Ease.get(-1)).to({regY:28.5,scaleY:0.86,y:285.5},3,cjs.Ease.get(1)).to({regY:28.6,scaleY:0.92,y:284},2,cjs.Ease.get(-1)).to({regY:28.5,scaleY:1,y:281.5},3,cjs.Ease.get(1)).to({regY:28.6,scaleY:0.84,y:278.5},3,cjs.Ease.get(-1)).to({regX:15.6,regY:28.5,scaleY:0.68,x:400.6,y:275.2},3,cjs.Ease.get(1)).to({regY:28.6,scaleY:0.84,y:278.5},3,cjs.Ease.get(-1)).to({regX:15.5,regY:28.5,scaleY:1,x:400.5,y:281.5},3,cjs.Ease.get(1)).wait(1));

	// foot_left.png
	this.instance_6 = new lib.Символ4();
	this.instance_6.parent = this;
	this.instance_6.setTransform(486,240.5,1,1,0,0,0,15,22.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({skewX:-1,x:485.6,y:241.4},2,cjs.Ease.get(-1)).to({regX:15.1,scaleY:1,skewX:-2.9,x:485,y:242.6},3,cjs.Ease.get(1)).to({regY:22.6,skewX:-1.8,x:485.4,y:241.9},2,cjs.Ease.get(-1)).to({regX:15,regY:22.5,scaleY:1,skewX:0,x:486,y:240.5},3,cjs.Ease.get(1)).to({x:486.7,y:243.6},3,cjs.Ease.get(-1)).to({x:487.4,y:246.7},3,cjs.Ease.get(1)).to({x:486.7,y:243.6},3,cjs.Ease.get(-1)).to({x:486,y:240.5},3,cjs.Ease.get(1)).wait(1));

	// nog_left.png
	this.instance_7 = new lib.Символ8();
	this.instance_7.parent = this;
	this.instance_7.setTransform(486.5,276.5,1,1,0,0,0,20,23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleX:1,scaleY:1,rotation:-11.8,x:491,y:278.6},2,cjs.Ease.get(-1)).to({regX:20.1,scaleX:1,scaleY:1,rotation:-30,x:497.8,y:281.7},3,cjs.Ease.get(1)).to({regY:23.6,scaleX:1,scaleY:1,rotation:-17.8,x:493.3,y:279.7},2,cjs.Ease.get(-1)).to({regX:20,regY:23.5,scaleX:1,scaleY:1,rotation:0,x:486.5,y:276.5},3,cjs.Ease.get(1)).to({regY:23.6,scaleY:0.89,y:279.2},3,cjs.Ease.get(-1)).to({scaleY:0.79,y:281.7},3,cjs.Ease.get(1)).to({scaleY:0.89,y:279.1},3,cjs.Ease.get(-1)).to({regY:23.5,scaleY:1,y:276.5},3,cjs.Ease.get(1)).wait(1));

	// Слой 7
	this.instance_8 = new lib.Символ12();
	this.instance_8.parent = this;
	this.instance_8.setTransform(339.3,174.3,1,1,0,0,0,13.5,14);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:13.6,scaleY:1,skewX:3,x:341.2,y:172.8},2,cjs.Ease.get(-1)).to({scaleY:1.01,skewX:7.6,x:344,y:170.5},3,cjs.Ease.get(1)).to({scaleY:1,skewX:4.5,x:342.1,y:172},2,cjs.Ease.get(-1)).to({regX:13.5,scaleY:1,skewX:0,x:339.3,y:174.3},3,cjs.Ease.get(1)).to({regY:14.1,scaleY:1,skewX:3.5,x:340.2,y:177.2},3,cjs.Ease.get(-1)).to({regY:14,scaleY:1.01,skewX:7,x:341.1,y:179.9},3,cjs.Ease.get(1)).to({regY:14.1,scaleY:1,skewX:3.5,x:340.2,y:177.2},3,cjs.Ease.get(-1)).to({regY:14,scaleY:1,skewX:0,x:339.3,y:174.3},3,cjs.Ease.get(1)).wait(1));

	// konec.png
	this.instance_9 = new lib.Символ19();
	this.instance_9.parent = this;
	this.instance_9.setTransform(372.3,205.5,1,1,0,0,0,47.8,44.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({rotation:2.5,y:205},2,cjs.Ease.get(-1)).to({rotation:6.4,y:204.1},3,cjs.Ease.get(1)).to({regX:47.9,regY:44.6,rotation:3.8,x:372.4,y:204.8},2,cjs.Ease.get(-1)).to({regX:47.8,regY:44.5,rotation:0,x:372.3,y:205.5},3,cjs.Ease.get(1)).to({scaleX:1,skewY:-2.1,y:207.5},3,cjs.Ease.get(-1)).to({regY:44.6,scaleX:1,skewY:-4.5,y:209.4},3,cjs.Ease.get(1)).to({scaleX:1,skewY:-2.1,y:207.5},3,cjs.Ease.get(-1)).to({regY:44.5,scaleX:1,skewY:0,y:205.5},3,cjs.Ease.get(1)).wait(1));

	// Символ 13
	this.instance_10 = new lib.Символ13();
	this.instance_10.parent = this;
	this.instance_10.setTransform(538.5,134.3,0.999,0.999,0,-60,120,17.7,27.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({regX:17.8,scaleX:1,scaleY:1,skewX:-48.1,skewY:131.9,x:547.7,y:127.9},2,cjs.Ease.get(-1)).to({regX:17.7,scaleX:1,scaleY:1,skewX:-30,skewY:150,x:561.6,y:118.2},3,cjs.Ease.get(1)).to({regY:27.2,scaleX:1,scaleY:1,skewX:-41.9,skewY:138.1,x:552.5,y:124.6},2,cjs.Ease.get(-1)).to({regY:27.1,scaleX:1,scaleY:1,skewX:-60,skewY:120,x:538.5,y:134.3},3,cjs.Ease.get(1)).to({regY:27.2,scaleX:1,scaleY:1,skewX:-67.5,skewY:112.5,x:538.7,y:134.4},3,cjs.Ease.get(-1)).to({regX:17.8,scaleX:1,scaleY:1,skewX:-75,skewY:105,x:538.6},3,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,skewX:-67.5,skewY:112.5,y:134.3},3,cjs.Ease.get(-1)).to({regX:17.7,regY:27.1,scaleX:1,scaleY:1,skewX:-60,skewY:120,x:538.5},3,cjs.Ease.get(1)).wait(1));

	// Символ 10
	this.instance_11 = new lib.Символ10();
	this.instance_11.parent = this;
	this.instance_11.setTransform(548.5,147.9,1.019,1.019,-45,0,0,20.4,17.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({scaleX:1.02,scaleY:1.02,rotation:-39.1,x:549.3,y:149.1},2,cjs.Ease.get(-1)).to({regX:20.5,scaleX:1.02,scaleY:1.02,rotation:-30,x:550.3,y:150.8},3,cjs.Ease.get(1)).to({scaleX:1.02,scaleY:1.02,rotation:-36.1,x:549.6,y:149.6},2,cjs.Ease.get(-1)).to({regX:20.4,scaleX:1.02,scaleY:1.02,rotation:-45,x:548.5,y:147.9},3,cjs.Ease.get(1)).to({regX:20.5,scaleX:1.02,rotation:0,skewX:-45,skewY:-48.9,x:547.7,y:146.8},3,cjs.Ease.get(-1)).to({regX:20.6,scaleX:1.03,skewY:-52.8,x:546.6,y:145.7},3,cjs.Ease.get(1)).to({regY:17.7,scaleX:1.02,skewY:-48.9,x:547.7,y:146.8},3,cjs.Ease.get(-1)).to({regX:20.4,regY:17.6,scaleX:1.02,rotation:-45,skewX:0,skewY:0,x:548.5,y:147.9},3,cjs.Ease.get(1)).wait(1));

	// Символ 6
	this.instance_12 = new lib.Символ6();
	this.instance_12.parent = this;
	this.instance_12.setTransform(518.6,159.6,1.019,1.019,-45,0,0,24.5,30.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({regY:30.8,scaleX:1.02,scaleY:1.02,rotation:-48.7,x:518.5,y:162.2},2,cjs.Ease.get(-1)).to({regX:24.4,regY:30.7,scaleX:1.02,scaleY:1.02,rotation:-54.2,x:518.3,y:166.1},3,cjs.Ease.get(1)).to({regX:24.5,scaleX:1.02,scaleY:1.02,rotation:-50.6,x:518.5,y:163.5},2,cjs.Ease.get(-1)).to({scaleX:1.02,scaleY:1.02,rotation:-45,x:518.6,y:159.6},3,cjs.Ease.get(1)).to({scaleX:1.02,scaleY:1.02,rotation:-49.4,x:518.5,y:162.7},3,cjs.Ease.get(-1)).to({scaleX:1.02,scaleY:1.02,rotation:-53.7,x:518.4,y:165.6},3,cjs.Ease.get(1)).to({scaleX:1.02,scaleY:1.02,rotation:-49.4,x:518.6,y:162.6},3,cjs.Ease.get(-1)).to({scaleX:1.02,scaleY:1.02,rotation:-45,y:159.6},3,cjs.Ease.get(1)).wait(1));

	// Слой 3
	this.instance_13 = new lib.Символ61();
	this.instance_13.parent = this;
	this.instance_13.setTransform(491,294.9,0.828,0.828,0,0,0,31,6.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({regX:31.1,scaleX:0.77,scaleY:0.77,x:492.7,y:296.8,alpha:0.828},2,cjs.Ease.get(-1)).to({scaleX:0.69,scaleY:0.69,x:495.2,y:299.7,alpha:0.57},3,cjs.Ease.get(1)).to({scaleX:0.74,scaleY:0.74,x:493.5,y:297.8,alpha:0.738},2,cjs.Ease.get(-1)).to({regX:31,scaleX:0.83,scaleY:0.83,x:491,y:294.9,alpha:1},3,cjs.Ease.get(1)).wait(13));

	// Слой 2
	this.instance_14 = new lib.Символ62();
	this.instance_14.parent = this;
	this.instance_14.setTransform(400.9,306.3,1,1,0,0,0,31,6.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(10).to({scaleX:0.81,scaleY:0.81,alpha:0.789},3,cjs.Ease.get(-1)).to({scaleX:0.61,scaleY:0.61,alpha:0.57},3,cjs.Ease.get(1)).to({scaleX:0.81,scaleY:0.81,alpha:0.789},3,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,alpha:1},3,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(317.6,42,258.3,276.6);


(lib.Символ48копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ2копия2();
	this.instance.parent = this;
	this.instance.setTransform(-378.2,-12.3,1.245,1.245,0,0,0,21.9,31.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:31.5,x:-377.1,y:-7.2},6,cjs.Ease.get(-1)).to({regY:31.6,x:-376.1,y:-1.8},6,cjs.Ease.get(1)).to({regY:31.5,x:-377,y:-6.6},5,cjs.Ease.get(-1)).to({regY:31.6,x:-378.2,y:-12.3},6,cjs.Ease.get(1)).wait(1));

	// Символ 7
	this.instance_1 = new lib.Символ7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(107.3,244.3,1.232,1.232,0,0,0,11.6,23.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:107.7,y:249.3},6,cjs.Ease.get(-1)).to({x:108.3,y:254.3},6,cjs.Ease.get(1)).to({x:107.8,y:249.8},5,cjs.Ease.get(-1)).to({x:107.3,y:244.3},6,cjs.Ease.get(1)).wait(1));

	// Символ 16
	this.instance_2 = new lib.Символ16();
	this.instance_2.parent = this;
	this.instance_2.setTransform(94.9,298.5,1.232,1.232,0,0,0,15.6,28.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleY:1.15,y:301},6,cjs.Ease.get(-1)).to({scaleY:1.06,y:303.4},6,cjs.Ease.get(1)).to({scaleY:1.14,y:301.2},5,cjs.Ease.get(-1)).to({scaleY:1.23,y:298.5},6,cjs.Ease.get(1)).wait(1));

	// Символ 4
	this.instance_3 = new lib.Символ4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(200.4,248,1.232,1.232,0,0,0,15.2,22.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:22.8,x:200.9,y:253.2},6,cjs.Ease.get(-1)).to({regY:22.7,x:201.4,y:258.1},6,cjs.Ease.get(1)).to({regY:22.8,x:200.9,y:253.6},5,cjs.Ease.get(-1)).to({regY:22.7,x:200.4,y:248},6,cjs.Ease.get(1)).wait(1));

	// Символ 8
	this.instance_4 = new lib.Символ8();
	this.instance_4.parent = this;
	this.instance_4.setTransform(200.9,292.3,1.232,1.232,0,0,0,20.1,23.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleY:1.1,y:295.4},6,cjs.Ease.get(-1)).to({scaleY:0.97,y:298.4},6,cjs.Ease.get(1)).to({scaleY:1.09,y:295.6},5,cjs.Ease.get(-1)).to({scaleY:1.23,y:292.3},6,cjs.Ease.get(1)).wait(1));

	// Слой 9
	this.instance_5 = new lib.Символ12();
	this.instance_5.parent = this;
	this.instance_5.setTransform(32.9,167.3,1,1,0,0,0,13.5,14);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:31.4,y:177.9},6,cjs.Ease.get(-1)).to({x:29.9,y:188.4},6,cjs.Ease.get(1)).to({x:31.2,y:178.8},5,cjs.Ease.get(-1)).to({x:32.9,y:167.3},6,cjs.Ease.get(1)).wait(1));

	// Слой 8
	this.instance_6 = new lib.Символ49();
	this.instance_6.parent = this;
	this.instance_6.setTransform(66.7,198,1,1,0,0,0,47.1,44.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleX:1.01,skewX:-7.3,skewY:-12.5,x:66.8,y:202.3},6,cjs.Ease.get(-1)).to({regY:45,scaleX:1.02,skewX:-15,skewY:-25.2,x:66.7,y:206.6},6,cjs.Ease.get(1)).to({scaleX:1.01,skewX:-8,skewY:-13.6,x:66.8,y:202.7},5,cjs.Ease.get(-1)).to({regY:44.9,scaleX:1,skewX:0,skewY:0,x:66.7,y:198},6,cjs.Ease.get(1)).wait(1));

	// Слой 2
	this.instance_7 = new lib.shadow();
	this.instance_7.parent = this;
	this.instance_7.setTransform(173,308);

	this.instance_8 = new lib.shadow();
	this.instance_8.parent = this;
	this.instance_8.setTransform(63,321);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7}]}).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.2,0.6,375,341.4);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ2копия();
	this.instance.parent = this;
	this.instance.setTransform(-378.2,-12.3,1.245,1.245,0,0,0,21.9,31.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:31.5,x:-377.6,y:-7.4},6,cjs.Ease.get(-1)).to({regY:31.6,x:-377.2,y:-2.2},6,cjs.Ease.get(1)).to({regY:31.5,x:-377.6,y:-6.9},5,cjs.Ease.get(-1)).to({regY:31.6,x:-378.2,y:-12.3},6,cjs.Ease.get(1)).wait(1));

	// Символ 7
	this.instance_1 = new lib.Символ7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(107.3,244.3,1.232,1.232,0,0,0,11.6,23.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:107.7,y:249.3},6,cjs.Ease.get(-1)).to({x:108.3,y:254.3},6,cjs.Ease.get(1)).to({x:107.8,y:249.8},5,cjs.Ease.get(-1)).to({x:107.3,y:244.3},6,cjs.Ease.get(1)).wait(1));

	// Символ 16
	this.instance_2 = new lib.Символ16();
	this.instance_2.parent = this;
	this.instance_2.setTransform(94.9,298.5,1.232,1.232,0,0,0,15.6,28.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleY:1.15,y:301},6,cjs.Ease.get(-1)).to({scaleY:1.06,y:303.4},6,cjs.Ease.get(1)).to({scaleY:1.14,y:301.2},5,cjs.Ease.get(-1)).to({scaleY:1.23,y:298.5},6,cjs.Ease.get(1)).wait(1));

	// Символ 4
	this.instance_3 = new lib.Символ4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(200.4,248,1.232,1.232,0,0,0,15.2,22.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:22.8,x:200.9,y:253.2},6,cjs.Ease.get(-1)).to({regY:22.7,x:201.4,y:258.1},6,cjs.Ease.get(1)).to({regY:22.8,x:200.9,y:253.6},5,cjs.Ease.get(-1)).to({regY:22.7,x:200.4,y:248},6,cjs.Ease.get(1)).wait(1));

	// Символ 8
	this.instance_4 = new lib.Символ8();
	this.instance_4.parent = this;
	this.instance_4.setTransform(200.9,292.3,1.232,1.232,0,0,0,20.1,23.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleY:1.1,y:295.4},6,cjs.Ease.get(-1)).to({scaleY:0.97,y:298.4},6,cjs.Ease.get(1)).to({scaleY:1.09,y:295.6},5,cjs.Ease.get(-1)).to({scaleY:1.23,y:292.3},6,cjs.Ease.get(1)).wait(1));

	// Слой 9
	this.instance_5 = new lib.Символ12();
	this.instance_5.parent = this;
	this.instance_5.setTransform(32.9,167.3,1,1,0,0,0,13.5,14);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:31.4,y:177.9},6,cjs.Ease.get(-1)).to({x:29.9,y:188.4},6,cjs.Ease.get(1)).to({x:31.2,y:178.8},5,cjs.Ease.get(-1)).to({x:32.9,y:167.3},6,cjs.Ease.get(1)).wait(1));

	// Слой 8
	this.instance_6 = new lib.Символ49();
	this.instance_6.parent = this;
	this.instance_6.setTransform(66.7,198,1,1,0,0,0,47.1,44.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleX:1.01,skewX:-7.3,skewY:-12.5,x:66.8,y:202.3},6,cjs.Ease.get(-1)).to({regY:45,scaleX:1.02,skewX:-15,skewY:-25.2,x:66.7,y:206.6},6,cjs.Ease.get(1)).to({scaleX:1.01,skewX:-8,skewY:-13.6,x:66.8,y:202.7},5,cjs.Ease.get(-1)).to({regY:44.9,scaleX:1,skewX:0,skewY:0,x:66.7,y:198},6,cjs.Ease.get(1)).wait(1));

	// Слой 2
	this.instance_7 = new lib.shadow();
	this.instance_7.parent = this;
	this.instance_7.setTransform(173,308);

	this.instance_8 = new lib.shadow();
	this.instance_8.parent = this;
	this.instance_8.setTransform(63,321);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7}]}).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7.3,0,277.5,342);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_7 = function() {
		this.stop();
	}
	this.frame_11 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(3).call(this.frame_3).wait(4).call(this.frame_7).wait(4).call(this.frame_11).wait(1));

	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.parent = this;
	this.instance.setTransform(-368,-222.8,1.245,1.555,0,0,0,21.9,31.6);
	this.instance.alpha = 0;

	this.instance_1 = new lib.Символ48();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-37.2,-70.9,1,1.181,0,0,0,-46.7,123.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.instance_2 = new lib.Символ48копия();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-37.2,-95.3,1,1.194,0,0,0,-46.7,123.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:31.5,scaleY:1.18,x:-368.7,y:4.9,alpha:1},2).wait(1).to({regY:31.6,scaleY:1.25,y:-12.9},0).to({_off:true},1).wait(8));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({regY:123.6,scaleY:0.94,y:136.5,alpha:1},2).wait(1).to({regY:123.5,scaleY:1,y:122.9},0).to({_off:true},1).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(8).to({_off:false},0).to({regY:123.6,scaleY:0.94,y:135.6,alpha:1},2).wait(1).to({regY:123.5,scaleY:1,y:122.9},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-206.6,321.5,430.1);


// stage content:
(lib.food = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var frequency = 3;
		var _this = this;
		stage.enableMouseOver(frequency);
		this.button_1.addEventListener("mouseover", fl_MouseOverHandler);
		
		function fl_MouseOverHandler() {
			_this.mobster.gotoAndPlay(4);
			_this.pir.gotoAndPlay(1);
		}
		
		
		
		stage.enableMouseOver(frequency);
		this.button_2.addEventListener("mouseover", fl_MouseOverHandler_2);
		
		function fl_MouseOverHandler_2() {
			_this.mobster.gotoAndPlay(8);
			_this.gold.gotoAndPlay(1);
		}
		
		
		stage.canvas.addEventListener("mouseout", fl_mouseout.bind(this));
		
		function fl_mouseout()
		{
		_this.mobster.gotoAndPlay(0);
		}
		
		stage.enableMouseOver(frequency);
		this.button_1.addEventListener("mouseout", fl_MouseOutHandler);
		
		function fl_MouseOutHandler()
		{
			_this.pir.gotoAndPlay(6);
		}
		
		
		stage.enableMouseOver(frequency);
		this.button_2.addEventListener("mouseout", fl_MouseOutHandler_2);
		
		function fl_MouseOutHandler_2()
		{
			_this.gold.gotoAndPlay(6);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btn
	this.button_2 = new lib.Символ44();
	this.button_2.parent = this;
	this.button_2.setTransform(147,152.6,1.672,0.918,0,0,0,91.5,171.4);
	new cjs.ButtonHelper(this.button_2, 0, 1, 2, false, new lib.Символ44(), 3);

	this.button_1 = new lib.Символ44();
	this.button_1.parent = this;
	this.button_1.setTransform(453,152.6,1.672,0.918,0,0,0,91.5,171.4);
	new cjs.ButtonHelper(this.button_1, 0, 1, 2, false, new lib.Символ44(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.button_1},{t:this.button_2}]}).wait(1));

	// Слой 9
	this.gold = new lib.Символ38_1();
	this.gold.parent = this;
	this.gold.setTransform(103.3,193,0.935,0.935,0,0,0,62.8,62.8);

	this.timeline.addTween(cjs.Tween.get(this.gold).wait(1));

	// Слой 5
	this.pir = new lib.Символ38();
	this.pir.parent = this;
	this.pir.setTransform(495.9,192.7,0.935,0.935,0,0,0,62.8,62.8);

	this.timeline.addTween(cjs.Tween.get(this.pir).wait(1));

	// Слой 3
	this.instance = new lib.Символ33копия();
	this.instance.parent = this;
	this.instance.setTransform(94.4,66.8,0.566,0.566,0,0,0,140.2,61.6);

	this.instance_1 = new lib.Символ33();
	this.instance_1.parent = this;
	this.instance_1.setTransform(495.5,66.8,0.566,0.566,0,0,0,140.2,61.6);

	this.instance_2 = new lib.Символ32();
	this.instance_2.parent = this;
	this.instance_2.setTransform(295,24.2,0.584,0.584,0,0,0,118.5,31.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 2
	this.mobster = new lib.Символ30();
	this.mobster.parent = this;
	this.mobster.setTransform(172.1,162.3,0.697,0.697,0,0,0,-32.5,160.3);

	this.timeline.addTween(cjs.Tween.get(this.mobster).wait(1));

	// Слой 6
	this.instance_3 = new lib.Символ42();
	this.instance_3.parent = this;
	this.instance_3.setTransform(303.1,274.1,1,1,0,0,0,73,34.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Слой 1
	this.instance_4 = new lib.Символ1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(299.9,149.5,1,0.966,0,0,0,305.9,159.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1353,56.6,2259,442.3);
// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/boka.png?1491912430020", id:"boka"},
		{src:"images/dent.png?1491912430020", id:"dent"},
		{src:"images/face1.png?1491912430020", id:"face1"},
		{src:"images/foot_left.png?1491912430020", id:"foot_left"},
		{src:"images/foot_right.png?1491912430020", id:"foot_right"},
		{src:"images/glass.png?1491912430020", id:"glass"},
		{src:"images/gold1.png?1491912430020", id:"gold1"},
		{src:"images/gold2.png?1491912430020", id:"gold2"},
		{src:"images/hair.png?1491912430020", id:"hair"},
		{src:"images/hand1.png?1491912430020", id:"hand1"},
		{src:"images/hvost.png?1491912430020", id:"hvost"},
		{src:"images/konec.png?1491912430020", id:"konec"},
		{src:"images/lip.png?1491912430020", id:"lip"},
		{src:"images/lokot.png?1491912430020", id:"lokot"},
		{src:"images/nog_left.png?1491912430020", id:"nog_left"},
		{src:"images/nog_right.png?1491912430020", id:"nog_right"},
		{src:"images/pirojenko.png?1491912430020", id:"pirojenko"},
		{src:"images/ple40.png?1491912430020", id:"ple40"},
		{src:"images/ple4o.png?1491912430020", id:"ple4o"},
		{src:"images/shadow.png?1491912430020", id:"shadow"},
		{src:"images/waves.png?1491912430020", id:"waves"},
		{src:"images/zoloto.png?1491912430020", id:"zoloto"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;