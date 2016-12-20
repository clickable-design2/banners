(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.btn = function() {
	this.initialize(img.btn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,297,100);


(lib.fon = function() {
	this.initialize(img.fon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,300);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,237,101);


(lib.RITH_Symbol_021 = function() {
	this.initialize(img.RITH_Symbol_021);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,280,238);


(lib.RITH_Symbol_03 = function() {
	this.initialize(img.RITH_Symbol_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,280,238);


(lib.RITH_Symbol_04 = function() {
	this.initialize(img.RITH_Symbol_04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,280,238);


(lib.RITH_Symbol_051 = function() {
	this.initialize(img.RITH_Symbol_051);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,280,238);


(lib.RITH_Symbol_0611 = function() {
	this.initialize(img.RITH_Symbol_0611);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,280,238);


(lib.RITH_Symbol_08 = function() {
	this.initialize(img.RITH_Symbol_08);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,280,238);// helper functions:

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


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF02").s().p("AazNMIAA6XIA+AAIAAaXgAYhNMIAA6XIA+AAIAAaXgAWQNMIAA6XIA+AAIAAaXgAT+NMIAA6XIA/AAIAAaXgARtNMIAA6XIA+AAIAAaXgAPcNMIAA6XIA+AAIAAaXgANKNMIAA6XIA+AAIAAaXgAK4NMIAA6XIA+AAIAAaXgAInNMIAA6XIA+AAIAAaXgAGWNMIAA6XIA+AAIAAaXgAEENMIAA6XIA+AAIAAaXgABzNMIAA6XIA+AAIAAaXgAgeNMIAA6XIA9AAIAAaXgAiwNMIAA6XIA+AAIAAaXgAlBNMIAA6XIA+AAIAAaXgAnTNMIAA6XIA/AAIAAaXgApkNMIAA6XIA+AAIAAaXgAr1NMIAA6XIA+AAIAAaXgAuHNMIAA6XIA+AAIAAaXgAwZNMIAA6XIA+AAIAAaXgAyqNMIAA6XIA+AAIAAaXgA08NMIAA6XIA/AAIAAaXgA3NNMIAA6XIA+AAIAAaXgA5eNMIAA6XIA+AAIAAaXgA7wNMIAA6XIA+AAIAAaXg");
	this.shape.setTransform(177.7,84.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ45, new cjs.Rectangle(0,0,355.4,168.8), null);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF9933").ss(0.1,1,1).p("EAAADIAMAAAmQA");
	this.shape.setTransform(-14.6,-785.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ37, new cjs.Rectangle(-15.6,-2066.4,2,2562.1), null);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgPC0QgMAAAAgMIAAggQgPgDgOgGQgQgIgLgKQgMgLgFgNQgIgPAAgRQABgGACgDQACgCAHAAIAoAAQAHAAADACQAEACAAAHQABAJAGAIQAHAGALAEQAKAEAMAAQASAAAKgGQAFgDADgGQADgFABgIQgBgIgGgGQgGgEgKgEQgegHgRgFIgegLQgPgHgKgHQgMgJgFgNQgHgOAAgTQAAgQAGgOQAHgNAKgKQAKgKAPgGQAOgGAPgDIAAgfQAAgMAMAAIAfAAQALAAAAAMIAAAgQAQADANAGQAOAGAJAJQALAKAFALQAHANgBAQQAAAGgCADQgCACgIAAIgnAAQgHgBgEgKQgCgGgHgHQgFgEgKgEQgJgCgJgBQgNAAgKAGQgMAGAAAMQAAAIAJAIQAIAFAOAGQAQAHAbAGIAYAIQAOAGAJAHQAMAIAGANQAHAOAAATQABASgHAPQgFAOgLAKQgLALgOAGQgPAHgTADIAAAeQAAAMgLAAg");
	this.shape.setTransform(10.9,18);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ30, new cjs.Rectangle(0,0,21.7,36), null);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().rr(-99.8,-26.8,199.6,53.6,4.2);
	this.shape.setTransform(99.8,26.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ29, new cjs.Rectangle(0,0,199.6,53.6), null);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().rr(-99.8,-26.8,199.6,53.6,4.2);
	this.shape.setTransform(99.8,26.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ28, new cjs.Rectangle(0,0,199.6,53.6), null);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AFECgQgFAAAAgEIAAhtQAAgFAFAAIASAAQAFAAAAAFIAABZIAjAAIAAhZQAAgFAFAAIATAAQAFAAAAAFIAABZIAiAAIAAhZQAAgFAGAAIARAAQAGAAAAAFIAABtQAAAEgGAAgAEOCgQgFAAAAgEIAAhtQAAgFAFAAIASAAQAFAAAAAFIAABtQAAAEgFAAgACgCgQgFAAAAgEIAAhtQAAgFAFAAIASAAQAFAAAAAFIAAAiIARAAQAMAAAJACQAIADAGAFQAGAFADAHQADAIAAAJQAAAKgDAHQgDAIgGAEQgGAGgIACQgJADgMAAgAC3CHIARAAIAJgBIAGgDQAFgEAAgHQAAgHgFgEIgGgDQgEgBgFgBIgRAAgAAvCgQgFAAAAgEIAAhsQAAgGAFAAIAoAAQAMAAAJADQAIADAGAGQAGAFADAIQADAIAAAJQAAAKgDAHQgDAHgGAGQgGAFgIADQgKADgLABIgRAAIAAAeQAAAEgFAAgABGBlIARAAIAJgBIAGgEQAFgFAAgHQAAgHgFgEIgGgFIgJgBIgRAAgAgxCgQgFAAAAgEIAAhtQAAgFAFAAIBCAAQAFAAAAAFIAAAOQAAAGgFAAIgrAAIAABZQAAAEgFAAgAhoCgQgFAAAAgEIAAg/IgmA+QgEAFgEAAIgRAAQgFAAAAgEIAAhsQAAgGAFAAIASAAQAFAAAAAGIAAA+IAmg+IADgEQACgCADAAIARAAQAFAAAAAGIAABsQAAAEgFAAgAjiCgQgFAAAAgEIAAhtQAAgFAFAAIASAAQAFAAAAAFIAABtQAAAEgFAAgAlQCgQgFAAAAgEIAAhtQAAgFAFAAIASAAQAFAAAAAFIAAAiIARAAQAMAAAJACQAIADAGAFQAGAFADAHQADAIAAAJQAAAKgDAHQgDAIgGAEQgGAGgIACQgJADgMAAgAk5CHIARAAIAJgBIAGgDQAFgEAAgHQAAgHgFgEIgGgDQgEgBgFgBIgRAAgAnMCgQgFAAAAgEIAAhtQAAgFAFAAIAzAAQAKAAAJADQAHACAGAFQAFAFACAFQADAGAAAHQAAASgOAGQARAIAAATQAAAIgDAHQgDAGgGAFQgGAEgIACQgHACgKAAgAm1CHIAfAAQAGAAAEgDQADgDAAgGQAAgFgEgEQgDgCgHAAIgFAAQgFAAAAgFIAAgOQAAgFAFAAIADAAQAHAAAEgDQAEgCAAgGQAAgGgEgCQgEgCgHAAIgcAAgAm+gnQgIgCgGgFQgGgEgDgHQgEgGAAgHIABgFIAEAAIAQAAQAEAAABAEQACAFAGAEQAFACAGAAQAGAAAFgEQADgBABgDQACgDAAgDQAAgHgFgEQgFgDgKAAIgIAAQgFAAAAgFIAAgMQAAgEAFAAIAIAAQAJAAAEgDQAEgDAAgGIgBgHIgEgEQgFgDgGAAQgGAAgEACQgFACgCAGQgBADgEAAIgPAAIgEAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgBAAgBQAAgHADgFQADgGAGgFQAFgEAIgDQAHgDAJABQAJgBAIADQAIADAGAEQAGAFADAHQAEAHAAAJQAAAJgFAHQgEAFgGACQAIADAFAHIAEAGQABAEAAAFIgBAKIgCAIQgEAHgGAFQgHAEgIACQgIACgJAAQgJAAgIgDgADVgnQgFAAAAgEIAAhtQAAgFAFAAIASAAQAFAAAAAFIAAAhIASAAQALAAAJADQAJACAGAFQAGAGADAHQADAIAAAJQAAAKgDAHQgDAIgGAEQgGAGgJADQgJACgLAAgADshAIASAAIAJgBIAGgDQAFgDAAgIQAAgHgFgEIgGgDQgEgBgFgBIgSAAgACHgnQgGAAAAgEIAAhYIgbAAQgGgBAAgFIAAgOQAAgGAGAAIBTAAQAFAAAAAGIAAAOQAAAFgFABIgbAAIAABYQAAAEgGAAgABEgnQgGABgBgGIgFgOIgsAAIgFAOQgCAGgFgBIgSAAQgFAAACgEIAnhsQACgGAFAAIARAAQAFAAADAGIAnBsQADAEgGAAgAAvhUIgNgnIgOAnIAbAAgAh3gnQgFAAAAgEIAAhsQAAgGAFAAIAoAAQAMAAAJADQAIADAGAFQAGAGADAIQADAIAAAJQAAAKgDAHQgDAIgGAFQgGAGgIACQgKADgLAAIgRAAIAAAfQAAAEgFAAgAhghiIARAAIAJgBIAGgEQAFgFAAgGQAAgIgFgFIgGgEIgJAAIgRAAgAjvgnQgFAAAAgEIAAhtQAAgFAFAAIBNAAQAFAAAAAFIAAAOQAAAFgFAAIg2AAIAAAUIAXAAQAMAAAJACQAJACAGAFQAGAEACAHQADAHAAAJQAAAKgDAIQgDAGgGAFQgGAFgJACQgIADgMgBgAjYhAIAXAAQAKAAAFgDQAFgCAAgIQAAgHgFgCQgEgDgLAAIgXAAgAkagnQgFABgCgGIgFgOIgsAAIgFAOQgCAGgFgBIgTAAQgFAAACgEIAohsQACgGAGAAIARAAQAFAAACAGIAoBsQACAEgFAAgAkuhUIgOgnIgNAnIAbAAg");
	this.shape.setTransform(49.9,19.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ27, new cjs.Rectangle(2.6,3.4,94.8,32.1), null);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah3BjQgIAAgBgIIAAi0QABgJAIAAIAdAAQAKAAgBAJIAACTIA6AAIAAiTQAAgJAJAAIAdAAQAJAAAAAJIAACTIA5AAIAAiTQABgJAIAAIAeAAQAJAAAAAJIAAC0QAAAIgJAAg");
	this.shape.setTransform(12.9,9.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ25, new cjs.Rectangle(0,0,25.7,19.8), null);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABNBjQgJAAAAgIIAAi0QAAgJAJAAIAdAAQAJAAAAAJIAAC0QAAAIgJAAgAhqBjQgIAAAAgIIAAi0QAAgJAIAAIAeAAQAJAAAAAJIAAA4IAdAAQASgBAQAFQANAEAKAJQALAIAEAMQAFAMABAQQgBAPgFAMQgEANgLAJQgJAJgOAFQgPAEgTAAgAhDA5IAdAAQAJgBAGgBQAGgBAEgEQAIgHAAgLQAAgMgIgHQgEgEgGgBQgHgCgIAAIgdAAg");
	this.shape.setTransform(11.5,9.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ24, new cjs.Rectangle(0,0,23,19.8), null);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhEBjQgIAAAAgJIAAizQAAgJAIAAIBEAAQASAAAPAFQAOAFAKAKQAKAJAFANQAFAMAAAQQAAAQgFAMQgFAMgKAJQgKAJgPAFQgPAFgSAAIgcAAIAAAyQAAAJgJAAgAgdAAIAcAAQAIAAAGgBQAHgDAEgEQAIgHAAgMQAAgNgIgHQgEgEgHgCQgGgCgIAAIgcAAg");
	this.shape.setTransform(7.7,9.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ23, new cjs.Rectangle(0,0,15.5,19.8), null);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag3BjQgIAAAAgIIAAi0QAAgJAIAAIBvAAQAIAAAAAJIAAAYQAAAIgIAAIhIAAIAACUQAAAIgJAAg");
	this.shape.setTransform(6.4,9.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(0,0,12.9,19.8), null);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAqBjQgJAAAAgJIAAhnIg/BlQgFALgIAAIgcAAQgIAAAAgJIAAizQAAgJAIAAIAeAAQAIAAAAAJIAABnIBEhtQAEgDAEAAIAcAAQAJAAAAAJIAACzQAAAJgJAAg");
	this.shape.setTransform(8,9.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ21, new cjs.Rectangle(0,0,16,19.8), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABNBjQgJAAAAgIIAAi0QAAgJAJAAIAdAAQAJAAAAAJIAAC0QAAAIgJAAgAhqBjQgIAAAAgIIAAi0QAAgJAIAAIAeAAQAJAAAAAJIAAA4IAdAAQASgBAQAFQANAEAKAJQALAIAEAMQAFAMABAQQgBAPgFAMQgEANgLAJQgJAJgOAFQgPAEgTAAgAhDA5IAdAAQAJgBAGgBQAGgBAEgEQAIgHAAgLQAAgMgIgHQgEgEgGgBQgHgCgIAAIgdAAg");
	this.shape.setTransform(11.5,9.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(0,0,23,19.8), null);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhLBjQgIAAAAgIIAAi0QAAgJAIAAIBUAAQARAAAOAFQANAEAJAIQAIAHAEAKQAEAKABALQAAAegXALQAcALAAAgQAAAOgFAMQgGAKgJAIQgJAGgOAEQgNAEgQAAgAgkA5IAxAAQAMAAAFgGQAHgEAAgKQAAgKgIgFQgGgDgMAAIgHAAQgHAAgBgJIAAgWQABgJAHAAIAFAAQAMAAAHgEQAFgEAAgKQAAgJgGgEQgGgDgMgBIgtAAg");
	this.shape.setTransform(8.4,9.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(0,0,16.8,19.8), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah3BjQgIAAgBgIIAAi0QABgJAIAAIAdAAQAKAAgBAJIAACTIA6AAIAAiTQAAgJAJAAIAdAAQAJAAAAAJIAACTIA5AAIAAiTQABgJAIAAIAeAAQAJAAAAAJIAAC0QAAAIgJAAg");
	this.shape.setTransform(12.9,9.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(0,0,25.7,19.8), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA5BjQgJAAgDgJIgIgYIhJAAIgIAYQgDAJgIAAIggAAQgJAAAEgJIBDiyQADgKAJAAIAcAAQAIAAAEAKIBCCyQAEAJgJAAgAAXAYIgXhBIgVBBIAsAAg");
	this.shape.setTransform(9.4,9.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(0,0,18.9,19.8), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhLBjQgIAAAAgIIAAi0QAAgJAIAAIBUAAQARAAAOAFQANAEAJAIQAIAHAEAKQAEAKABALQAAAegXALQAcALAAAgQAAAOgFAMQgGAKgJAIQgJAGgOAEQgNAEgQAAgAgkA5IAxAAQAMAAAFgGQAHgEAAgKQAAgKgIgFQgGgDgMAAIgHAAQgHAAgBgJIAAgWQABgJAHAAIAFAAQAMAAAHgEQAFgEAAgKQAAgJgGgEQgGgDgMgBIgtAAg");
	this.shape.setTransform(8.4,9.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(0,0,16.8,19.8), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,224,0,0)","#FFD000","rgba(255,206,0,0)"],[0,0.498,1],-25.7,0,25.8,0).s().p("Am6VzMAAAgrlIN0AAMAAAArlg");
	this.shape.setTransform(44.3,139.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(0,0,88.5,279), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","#000000"],[0,1],-77.6,0,77.6,0).s().p("EgMHAhoMAAAhDPIYPAAMAAABDPg");
	this.shape.setTransform(77.6,215.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(0,0,155.2,430.4), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF02").s().p("AHZCkQgLAAABgLIAAgcQgPgEgNgGQgOgGgKgKQgLgKgFgMQgHgNABgPQAAgHACgCQACgCAHAAIAkAAQAGAAADACQADACAAAHQACAHAFAIQAGAGALADQAJADALAAQARAAAIgFQAFgDAEgEQACgGAAgHQAAgHgFgFQgGgEgJgEQgdgGgPgFIgbgKQgOgGgJgHQgKgIgGgMQgGgNAAgRQAAgPAGgMQAFgMAKgJQAKgJANgGQAMgFAPgDIAAgdQgBgKALAAIAdAAQALAAAAAKIAAAeQAOADALAFQANAGAJAIQAKAJAFAKQAFAMAAAOQAAAGgCACQgCACgGAAIgkAAQgHAAgDgKQgDgGgFgFQgGgFgJgCQgIgDgJAAQgLAAgKAFQgLAFAAAMQAAAHAJAHQAGAFAOAFQAPAGAZAGIAWAHQAMAFAIAHQAMAHAFAMQAHANAAASQgBAQgFANQgFANgKAKQgKAJgNAGQgOAGgQACIAAAcQAAALgLAAgADoB6QgQgFgNgKQgPgLgHgPQgFgJgBgJQgDgJAAgLIAAhWQAAgLADgJQABgJAFgJQAHgPAPgLQANgKAQgFQAQgFAQAAQAQAAAQAFQAQAFAOAKQAOALAIAPQAEAJADAJQABAJAAALIAABWQAAALgBAJQgDAJgEAJQgIAPgOALQgOAKgQAFQgQAFgQAAQgQAAgQgFgAD4hIQgGADgFAFQgFAGgDAHQgDAIAAAIIAABGQAAAIADAIQADAHAFAGQAFAFAGADQAIADAIAAQAIAAAIgDQAGgDAGgFQAFgGADgHQADgIgBgIIAAhGQABgIgDgIQgDgHgFgGQgGgFgGgDQgIgDgIAAQgIAAgIADgAALB6QgQgFgNgKQgOgLgIgPQgEgJgCgJQgCgJgBgLIAAhWQABgLACgJQACgJAEgJQAIgPAOgLQANgKAQgFQAPgFAQAAQAQAAARAFQAQAFANAKQAOALAJAPQAEAJACAJQACAJAAALIAABWQAAALgCAJQgCAJgEAJQgJAPgOALQgNAKgQAFQgRAFgQAAQgQAAgPgFgAAbhIQgHADgFAFQgFAGgDAHQgDAIAAAIIAABGQAAAIADAIQADAHAFAGQAFAFAHADQAIADAHAAQAJAAAHgDQAHgDAFgFQAGgGACgHQADgIAAgIIAAhGQAAgIgDgIQgCgHgGgGQgFgFgHgDQgHgDgJAAQgHAAgIADgAjSB6QgQgFgNgKQgOgLgJgPQgDgJgCgJQgDgJAAgLIAAhWQAAgLADgJQACgJADgJQAJgPAOgLQANgKAQgFQAQgFAQAAQAQAAAQAFQAQAFAOAKQAOALAIAPQAEAJADAJQACAJAAALIAABWQAAALgCAJQgDAJgEAJQgIAPgOALQgOAKgQAFQgQAFgQAAQgQAAgQgFgAjBhIQgIADgEAFQgGAGgCAHQgDAIAAAIIAABGQAAAIADAIQACAHAGAGQAEAFAIADQAHADAIAAQAJAAAGgDQAIgDAFgFQAFgGADgHQACgIABgIIAAhGQgBgIgCgIQgDgHgFgGQgFgFgIgDQgGgDgJAAQgIAAgHADgAoUB5QgPgFgNgKQgMgJgHgNQgGgNgBgOQAAgHADgCQABgCAGAAIAhAAQAIAAABAHQAEALAKAGQAKAFAMAAQAJAAAHgCQAHgDAEgEQALgJgBgQQAAgNgKgKQgLgKgPAAQgNAAgIAEIgQAKQgDABgGAAIgdAAQgHAAgBgCQgCgCAAgHIAJh6QAAgLAKAAICDAAQALAAAAALIAAAeQAAALgLAAIhcAAIgDArQAGgDAKgDQALgDALAAQARAAAQAGQAPAGALAKQALALAGAOQAGAPAAASQABATgJAQQgHAPgOALQgMAKgQAFQgQAGgSAAQgRAAgRgGg");
	this.shape.setTransform(1.8,55.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(-56.8,39.1,117.3,32.9), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fon();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(0,0,600,300), null);


(lib.Символ29_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.RITH_Symbol_0611();
	this.instance.parent = this;
	this.instance.setTransform(-51,-43,0.364,0.364);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ29_1, new cjs.Rectangle(-51,-43,101.9,86.6), null);


(lib.Символ27_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.RITH_Symbol_04();
	this.instance.parent = this;
	this.instance.setTransform(-44,-38,0.317,0.317);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ27_1, new cjs.Rectangle(-44,-38,88.8,75.5), null);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.RITH_Symbol_08();
	this.instance.parent = this;
	this.instance.setTransform(-37.2,-31.3,0.261,0.261);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ26, new cjs.Rectangle(-37.2,-31.3,73.2,62.2), null);


(lib.Символ25_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.RITH_Symbol_03();
	this.instance.parent = this;
	this.instance.setTransform(-39,-34,0.294,0.294);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ25_1, new cjs.Rectangle(-39,-34,82.4,70.1), null);


(lib.Символ24_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.RITH_Symbol_021();
	this.instance.parent = this;
	this.instance.setTransform(-43,-35,0.298,0.298);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ24_1, new cjs.Rectangle(-43,-35,83.4,70.9), null);


(lib.btn_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.btn();
	this.instance.parent = this;
	this.instance.setTransform(-148.5,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn_1, new cjs.Rectangle(-148.5,-50,297,100), null);


(lib.Space = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,255,0,0)").s().p("A5+UNMAAAgoZMAz9AAAMAAAAoZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Space, new cjs.Rectangle(-166.3,-129.3,332.6,258.7), null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlnD1IAAnpILPAAIAAHpg");
	mask.setTransform(36,24.5);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAaDbQgXgTAAgUIAAhpQgMgEgJgFIAAByQAAAPgUAPQgVAQgbAAQgeAAgqggQgqghAAgaIAAh8QgagKgdgNQg6gbgPgTQgWgbgEgHQgIgNAFgMQADgIAvAcQA6AiAVAFQAgAIA0AEQAtAEAdgBQAXgBASAJQANAGAQAPIADADIAAgNQAAgLAZgGQAUgGAYAAIBxAAQAOAAA1gUQA6gWAQgSQAUgWAKAIQALAJgSAkQgSAhgqAYIhRAoIAAByQAAAagUAjQgdAwgzAAQg0AAgegZgAA1hrQgXgXAAghQAAghAXgYQAYgXAgAAQAhAAAYAXQAXAYAAAhQAAAhgXAXQgYAXghAAQggAAgYgXgAibhrQgYgXAAghQAAghAYgYQAXgXAhAAQAhAAAXAXQAXAYAAAhQAAAhgXAXQgXAXghAAQghAAgXgXg");
	this.shape.setTransform(36,24.4);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0,72,48.9), null);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ45();
	this.instance.parent = this;
	this.instance.setTransform(162.1,84.4,1,1,0,0,0,177.7,84.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:176.8},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.6,0,355.4,168.8);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ44();
	this.instance.parent = this;
	this.instance.setTransform(143.7,86.2,1,1,19.5,0,0,177.7,84.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ43, new cjs.Rectangle(-66.6,-57.7,391.4,277.6), null);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AUvFbIAAAAMgqCAAAIAAqmIANAAIAAgPMAqaAAAIAAK1gA0uE2MApdAAAIAAprMgpdAAAg");
	mask.setTransform(9.4,-21.6);

	// Слой 3
	this.instance = new lib.Символ43();
	this.instance.parent = this;
	this.instance.setTransform(-1,-24.3,1,1,0,0,0,123.8,84.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.608)").s().p("Eg4nAXrMAAAgvVMBxPAAAMAAAAvVgAzfCDMAp/AAAIAAqdMgp/AAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ40, new cjs.Rectangle(-362.4,-151.5,724.8,303), null);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* if (!_first)
		{
		
			_first = true;
		
			gotoAndPlay(Math.floor(Math.random() * _totalframes));
		
		}*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7));

	// Слой 1
	this.instance = new lib.Символ37();
	this.instance.parent = this;
	this.instance.setTransform(2.6,-16,0.15,0.15);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-40},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.4,-325.8,0,384);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ27_1();
	this.instance.parent = this;
	this.instance.setTransform(0.7,-539.5,0.926,0.926);

	this.instance_1 = new lib.Символ27_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.7,133.9,0.926,0.926);

	this.instance_2 = new lib.Символ27_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0.7,-337.5,0.926,0.926);

	this.instance_3 = new lib.Символ27_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0.7,-475.3,0.926,0.926);

	this.instance_4 = new lib.Символ26();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,-408.7,0.926,0.926);

	this.instance_5 = new lib.Символ27_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0.7,-134.3,0.926,0.926);

	this.instance_6 = new lib.Символ27_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(0.7,-272.1,0.926,0.926);

	this.instance_7 = new lib.Символ26();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0,-205.5,0.926,0.926);

	this.instance_8 = new lib.Символ27_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(0.7,68.9,0.926,0.926);

	this.instance_9 = new lib.Символ27_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(0.7,-68.9,0.926,0.926);

	this.instance_10 = new lib.Символ26();
	this.instance_10.parent = this;
	this.instance_10.setTransform(0,-2.3,0.926,0.926);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ35, new cjs.Rectangle(-40,-574.7,82.3,743.4), null);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ29_1();
	this.instance.parent = this;
	this.instance.setTransform(0,-554.3,0.926,0.926);

	this.instance_1 = new lib.Символ29_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,136,0.926,0.926);

	this.instance_2 = new lib.Символ29_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-343.9,0.926,0.926);

	this.instance_3 = new lib.Символ29_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,-481.7,0.926,0.926);

	this.instance_4 = new lib.Символ26();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-1.1,-417,0.926,0.926);

	this.instance_5 = new lib.Символ29_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,-135.9,0.926,0.926);

	this.instance_6 = new lib.Символ29_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(0,-273.7,0.926,0.926);

	this.instance_7 = new lib.Символ26();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-1.1,-209,0.926,0.926);

	this.instance_8 = new lib.Символ29_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(0,68.9,0.926,0.926);

	this.instance_9 = new lib.Символ29_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(0,-68.9,0.926,0.926);

	this.instance_10 = new lib.Символ26();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-1.1,-4.2,0.926,0.926);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ34, new cjs.Rectangle(-47.2,-594.2,94.4,770.6), null);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ25_1();
	this.instance.parent = this;
	this.instance.setTransform(-1.5,-548.7,0.926,0.926);

	this.instance_1 = new lib.Символ25_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1.5,135.3,0.926,0.926);

	this.instance_2 = new lib.Символ26();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0.1,-411.8,0.926,0.926);

	this.instance_3 = new lib.Символ25_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-1.5,-343.1,0.926,0.926);

	this.instance_4 = new lib.Символ25_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-1.5,-480.9,0.926,0.926);

	this.instance_5 = new lib.Символ26();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0.1,-205.4,0.926,0.926);

	this.instance_6 = new lib.Символ25_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-1.5,-136.7,0.926,0.926);

	this.instance_7 = new lib.Символ25_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-1.5,-274.5,0.926,0.926);

	this.instance_8 = new lib.Символ26();
	this.instance_8.parent = this;
	this.instance_8.setTransform(0.1,0.2,0.926,0.926);

	this.instance_9 = new lib.Символ25_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-1.5,68.9,0.926,0.926);

	this.instance_10 = new lib.Символ25_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-1.5,-68.9,0.926,0.926);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ33, new cjs.Rectangle(-37.6,-580.2,76.3,748.9), null);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ24_1();
	this.instance.parent = this;
	this.instance.setTransform(5.1,-547,0.926,0.926);

	this.instance_1 = new lib.Символ24_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(5.1,137.9,0.926,0.926);

	this.instance_2 = new lib.Символ29_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-409.4,0.926,0.926);

	this.instance_3 = new lib.Символ24_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(5.1,-340.7,0.926,0.926);

	this.instance_4 = new lib.Символ24_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(5.1,-478.5,0.926,0.926);

	this.instance_5 = new lib.Символ29_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,-204.6,0.926,0.926);

	this.instance_6 = new lib.Символ24_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(5.1,-135.9,0.926,0.926);

	this.instance_7 = new lib.Символ24_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(5.1,-273.7,0.926,0.926);

	this.instance_8 = new lib.Символ29_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(0,0.2,0.926,0.926);

	this.instance_9 = new lib.Символ24_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(5.1,68.9,0.926,0.926);

	this.instance_10 = new lib.Символ24_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(5.1,-68.9,0.926,0.926);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ32, new cjs.Rectangle(-47.2,-579.4,94.4,750.6), null);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ30();
	this.instance.parent = this;
	this.instance.setTransform(10.8,18,1,1,0,0,0,10.8,18);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:18.1,scaleX:0.88,scaleY:0.88,x:10.9,y:18.2},2,cjs.Ease.get(-1)).to({scaleX:0.71,scaleY:0.71,y:18.1},3,cjs.Ease.get(1)).to({regY:18.2,scaleX:0.82,scaleY:0.82,y:18.2},2,cjs.Ease.get(-1)).to({regY:18,scaleX:1,scaleY:1,x:10.8,y:18},3,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,21.7,36);


(lib.Символ26_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 25
	this.instance_1 = new lib.Символ25();
	this.instance_1.parent = this;
	this.instance_1.setTransform(222.2,9.9,1,1,0,0,0,12.8,9.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleY:0.84,y:10},10).to({alpha:0.48},3).to({scaleY:1,y:9.9,alpha:1},3).wait(1));

	// Символ 24
	this.instance_2 = new lib.Символ24();
	this.instance_2.parent = this;
	this.instance_2.setTransform(193.5,9.9,1,1,0,0,0,11.5,9.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleY:0.84,y:10},9).to({alpha:0.48},3).to({scaleY:1,y:9.9,alpha:1},3).wait(2));

	// Символ 23
	this.instance_3 = new lib.Символ23();
	this.instance_3.parent = this;
	this.instance_3.setTransform(170.9,9.9,1,1,0,0,0,7.7,9.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:9.9,scaleY:0.84,y:10},8).to({alpha:0.48},3).to({regY:9.8,scaleY:1,y:9.9,alpha:1},3).wait(3));

	// Символ 22
	this.instance_4 = new lib.Символ22();
	this.instance_4.parent = this;
	this.instance_4.setTransform(153.4,9.9,1,1,0,0,0,6.4,9.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleY:0.84,y:10},7).to({alpha:0.48},3).to({scaleY:1,y:9.9,alpha:1},3).wait(4));

	// Символ 21
	this.instance_5 = new lib.Символ21();
	this.instance_5.parent = this;
	this.instance_5.setTransform(134.5,9.9,1,1,0,0,0,8,9.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regY:9.9,scaleY:0.84,y:10},6).to({alpha:0.48},3).to({regY:9.8,scaleY:1,y:9.9,alpha:1},3).wait(5));

	// Символ 20
	this.instance_6 = new lib.Символ20();
	this.instance_6.parent = this;
	this.instance_6.setTransform(110.6,9.9,1,1,0,0,0,11.5,9.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleY:0.84,y:10},5).to({alpha:0.48},3).to({scaleY:1,y:9.9,alpha:1},3).wait(6));

	// Символ 19
	this.instance_7 = new lib.Символ19();
	this.instance_7.parent = this;
	this.instance_7.setTransform(86.9,9.9,1,1,0,0,0,8.4,9.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleY:0.84,y:10},4).to({alpha:0.48},3).to({scaleY:1,y:9.9,alpha:1},3).wait(7));

	// Символ 18
	this.instance_8 = new lib.Символ18();
	this.instance_8.parent = this;
	this.instance_8.setTransform(53,9.9,1,1,0,0,0,12.8,9.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({scaleY:0.84,y:10},3).to({alpha:0.48},3).to({scaleY:1,y:9.9,alpha:1},3).wait(8));

	// Символ 17
	this.instance_9 = new lib.Символ17();
	this.instance_9.parent = this;
	this.instance_9.setTransform(28.2,9.9,1,1,0,0,0,9.4,9.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({regY:9.9,scaleY:0.84,y:10},2).to({alpha:0.48},3).to({regY:9.8,scaleY:1,y:9.9,alpha:1},3).wait(9));

	// Символ 16
	this.instance_10 = new lib.Символ16();
	this.instance_10.parent = this;
	this.instance_10.setTransform(8.4,9.9,1,1,0,0,0,8.4,9.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({scaleY:0.84,y:10},1).to({alpha:0.48},3).to({scaleY:1,y:9.9,alpha:1},3).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,235.1,19.8);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.parent = this;
	this.instance.setTransform(111.9,145.1,1.102,1,30,0,0,44.2,139.4);
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(0,0,223.9,290.4), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 1
	this.instance = new lib.Символ26_1();
	this.instance.parent = this;
	this.instance.setTransform(152.6,14.6,1,1,0,0,0,117.5,9.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(35.1,4.7,235.1,19.8), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.btn_1();
	this.instance.parent = this;
	this.instance.setTransform(109.6,37,0.737,0.737,0,0,0,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(0,0,218.9,73.7), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ30();
	this.instance.parent = this;
	this.instance.setTransform(39.1,35.9,1,1,0,0,0,10.8,18);

	this.instance_1 = new lib.Символ31();
	this.instance_1.parent = this;
	this.instance_1.setTransform(39.1,35.9,1,1,0,0,0,10.8,18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[]},2).wait(1));

	// Слой 2
	this.instance_2 = new lib.Символ27();
	this.instance_2.parent = this;
	this.instance_2.setTransform(121.2,39.6,1,1,0,0,0,56.3,23);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},3).wait(1));

	// Слой 4
	this.instance_3 = new lib.Символ28();
	this.instance_3.parent = this;
	this.instance_3.setTransform(109.3,36.1,1,1,0,0,0,99.8,26.8);
	this.instance_3.alpha = 0.211;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false,alpha:0.16},0).wait(1));

	// Слой 1
	this.instance_4 = new lib.btn_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(109.6,37,0.737,0.737,0,0,0,0.2,0.2);
	this.instance_4.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(12, -11, 0, 0))];
	this.instance_4.cache(-150,-52,301,104);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,222,77);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_5 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(5));

	// Слой 1
	this.instance = new lib.Символ6();
	this.instance.parent = this;
	this.instance.setTransform(0,1.4);
	this.instance.alpha = 0.48;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},5).to({alpha:0.48},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.8,40.5,117.3,32.8);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(24.9,16.9,0.691,0.691,0,0,0,36,24.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(0,0,49.8,33.9), null);


(lib.RITH_Symbol_05 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.RITH_Symbol_051();
	this.instance.parent = this;
	this.instance.setTransform(-179,-159,1.333,1.333);

	this.instance_1 = new lib.Space();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.RITH_Symbol_05, new cjs.Rectangle(-179,-159,373.2,317.2), null);


(lib.RITH_Symbol_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.RITH_Symbol_021();
	this.instance.parent = this;
	this.instance.setTransform(-176,-150,1.26,1.26);

	this.instance_1 = new lib.Space();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.RITH_Symbol_02, new cjs.Rectangle(-176,-150,352.8,299.9), null);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.parent = this;
	this.instance.setTransform(109.5,36.9,0.9,0.9,0,0,0,109.5,36.9);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ7(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1},4).to({scaleX:0.9,scaleY:0.9},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10.9,3.7,201,71.1);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.RITH_Symbol_02();
	this.instance.parent = this;
	this.instance.setTransform(-3.1,-540.9,0.22,0.22);

	this.instance_1 = new lib.RITH_Symbol_02();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-3.1,132.6,0.22,0.22);

	this.instance_2 = new lib.RITH_Symbol_05();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-2.2,-404.3,0.25,0.25);

	this.instance_3 = new lib.RITH_Symbol_02();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-3.1,-334.3,0.22,0.22);

	this.instance_4 = new lib.RITH_Symbol_02();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-3.1,-472.1,0.22,0.22);

	this.instance_5 = new lib.RITH_Symbol_05();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-2.2,-202.7,0.25,0.25);

	this.instance_6 = new lib.RITH_Symbol_02();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-3.1,-132.7,0.22,0.22);

	this.instance_7 = new lib.RITH_Symbol_02();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-3.1,-270.5,0.22,0.22);

	this.instance_8 = new lib.RITH_Symbol_05();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-2.2,-1.1,0.25,0.25);

	this.instance_9 = new lib.RITH_Symbol_02();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-3.1,68.9,0.22,0.22);

	this.instance_10 = new lib.RITH_Symbol_02();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-3.1,-68.9,0.22,0.22);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ36, new cjs.Rectangle(-46.9,-573.9,93.3,739.5), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ14();
	this.instance.parent = this;
	this.instance.setTransform(112,145.2,1,1,0,0,0,112,145.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:382,y:221.6},29).wait(61));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,223.9,290.4);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.parent = this;
	this.instance.setTransform(24.9,16.9,1,1,0,0,0,24.9,16.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.91,scaleY:0.91,x:25,y:17},2,cjs.Ease.get(-1)).to({scaleX:0.82,scaleY:0.82,y:16.9},2,cjs.Ease.get(1)).to({scaleX:0.91,scaleY:0.91},2,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:24.9},2,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,49.8,33.9);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjaGYIAAhJIAAAAIAAgpIqxAAIAAoBIfOAAIAAIBIrGAAIAAADIgCAAIAABvg");
	mask.setTransform(109.1,40.8);

	// Слой 3
	this.instance = new lib.Символ15();
	this.instance.parent = this;
	this.instance.setTransform(-15.4,-1.7,1,1,0,0,0,112,145.2);
	this.instance.alpha = 0.43;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.logo();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(0,0,237,101), null);


(lib.Символ23_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.Символ11();
	this.instance.parent = this;
	this.instance.setTransform(-6.1,-73,1,1,0,0,0,152.6,20.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(137).to({_off:false},0).wait(93).to({y:-96.2,alpha:0},6).wait(5));

	// Слой 3
	this.txtt = new lib.Символ5();
	this.txtt.parent = this;
	this.txtt.setTransform(-5,-25);
	this.txtt.alpha = 0;
	this.txtt._off = true;

	this.timeline.addTween(cjs.Tween.get(this.txtt).wait(137).to({_off:false},0).to({alpha:1},7).wait(87).to({alpha:0},7).wait(3));

	// Слой 13
	this.instance_1 = new lib.Символ40();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-14.8,-3.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(137).to({_off:false},0).to({alpha:1},7).wait(90).to({alpha:0},6).wait(1));

	// Символ 30
	this.instance_2 = new lib.Символ36();
	this.instance_2.parent = this;
	this.instance_2.setTransform(187.2,-25.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:-0.3,regY:-204.2,x:186.9,y:-229.9},0).wait(22).to({regX:0,regY:0,x:187.2,y:-25.7},0).wait(1).to({regX:-0.3,regY:-204.2,x:186.9,y:-229.9},0).wait(2).to({regX:0,regY:0,x:187.2,y:-25.7},0).wait(1).to({regX:-0.3,regY:-204.2,x:186.9,y:-229.6},0).wait(1).to({y:-229.3},0).wait(1).to({y:-229.1},0).wait(1).to({y:-228.8},0).wait(1).to({y:-228.5},0).wait(1).to({y:-228.2},0).wait(1).to({y:-227.9},0).wait(1).to({y:-227.6},0).wait(1).to({y:-227.3},0).wait(1).to({y:-226.9},0).wait(1).to({y:-226.6},0).wait(1).to({y:-226.2},0).wait(1).to({y:-225.7},0).wait(1).to({y:-225.2},0).wait(1).to({y:-224.7},0).wait(1).to({y:-224.2},0).wait(1).to({y:-223.6},0).wait(1).to({y:-222.9},0).wait(1).to({y:-222.2},0).wait(1).to({y:-221.4},0).wait(1).to({y:-220.5},0).wait(1).to({y:-219.5},0).wait(1).to({y:-218.4},0).wait(1).to({y:-217.1},0).wait(1).to({y:-215.8},0).wait(1).to({y:-214.2},0).wait(1).to({y:-212.5},0).wait(1).to({y:-210.7},0).wait(1).to({y:-208.7},0).wait(1).to({y:-206.4},0).wait(1).to({y:-204},0).wait(1).to({y:-201},0).wait(1).to({y:-197.5},0).wait(1).to({y:-193.1},0).wait(1).to({y:-187.3},0).wait(1).to({y:-178.9},0).wait(1).to({regX:0,regY:0,x:187.2,y:39.9},0).to({y:177.5},5).to({y:387.1},5).wait(1).to({y:39.9},0).to({y:177.5},5).to({y:387.1},5).wait(1).to({y:39.9},0).to({y:177.5},5).to({y:387.1},6).wait(1).to({y:39.9},0).wait(1).to({regX:-0.3,regY:-204.2,x:186.9,y:-70},0).wait(1).to({y:-15.7},0).wait(1).to({y:20.8},0).wait(1).to({y:46.1},0).wait(1).to({y:61.8},0).wait(1).to({y:72.8},0).wait(1).to({y:81.6},0).wait(1).to({y:88.8},0).wait(1).to({y:94.6},0).wait(1).to({y:99.1},0).wait(1).to({y:102.3},0).wait(1).to({y:104.3},0).wait(1).to({regX:0,regY:0,x:187.2,y:309.2},0).wait(1).to({regX:-0.3,regY:-204.2,x:186.9,y:111.5},0).wait(1).to({y:117.1},0).wait(1).to({y:122.2},0).wait(1).to({y:126.9},0).wait(1).to({y:131.2},0).wait(1).to({y:135.1},0).wait(1).to({y:138.8},0).wait(1).to({y:142.3},0).wait(1).to({y:145.5},0).wait(1).to({y:148.6},0).wait(1).to({y:151.4},0).wait(1).to({y:154.1},0).wait(1).to({y:156.5},0).wait(1).to({y:158.8},0).wait(1).to({y:160.9},0).wait(1).to({y:162.9},0).wait(1).to({y:164.7},0).wait(1).to({y:166.3},0).wait(1).to({y:167.7},0).wait(1).to({y:169},0).wait(1).to({y:170.1},0).wait(1).to({y:171.1},0).wait(1).to({y:171.9},0).wait(1).to({y:172.5},0).wait(1).to({y:172.9},0).wait(1).to({y:173.2},0).wait(1).to({regX:0,regY:0,x:187.2,y:377.5},0).wait(104));

	// Символ 29
	this.instance_3 = new lib.Символ32();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-201.3,-29.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regY:-204.2,y:-233.6},0).wait(16).to({regY:0,y:-29.4},0).wait(1).to({regY:-204.2,y:-233.3},0).wait(1).to({y:-233},0).wait(1).to({y:-232.8},0).wait(1).to({y:-232.5},0).wait(1).to({y:-232.2},0).wait(1).to({regY:0,y:-27.7},0).wait(1).to({regY:-204.2,y:-231.6},0).wait(1).to({y:-231.3},0).wait(1).to({y:-230.9},0).wait(1).to({y:-230.6},0).wait(1).to({y:-230.2},0).wait(1).to({y:-229.8},0).wait(1).to({y:-229.3},0).wait(1).to({y:-228.8},0).wait(1).to({y:-228.3},0).wait(1).to({y:-227.7},0).wait(1).to({y:-227.1},0).wait(1).to({y:-226.4},0).wait(1).to({y:-225.7},0).wait(1).to({y:-224.9},0).wait(1).to({y:-223.9},0).wait(1).to({y:-222.9},0).wait(1).to({y:-221.8},0).wait(1).to({y:-220.5},0).wait(1).to({y:-219.1},0).wait(1).to({y:-217.6},0).wait(1).to({y:-215.8},0).wait(1).to({y:-213.9},0).wait(1).to({y:-211.9},0).wait(1).to({y:-209.6},0).wait(1).to({y:-207},0).wait(1).to({y:-204},0).wait(1).to({y:-200.4},0).wait(1).to({y:-195.9},0).wait(1).to({y:-189.9},0).wait(1).to({y:-181.3},0).wait(1).to({regY:0,y:37.8},0).to({y:175.4},5).to({y:385},5).wait(1).to({y:37.8},0).to({y:175.4},5).to({y:385},5).wait(1).to({y:37.8},0).to({y:175.4},5).to({y:385},6).wait(1).to({y:37.8},0).wait(1).to({regY:-204.2,y:-117.3},0).wait(1).to({y:-79.3},0).wait(1).to({y:-48.1},0).wait(1).to({y:-21.8},0).wait(1).to({y:0.8},0).wait(1).to({y:20.6},0).wait(1).to({y:38},0).wait(1).to({y:53.4},0).wait(1).to({y:67.1},0).wait(1).to({y:79.3},0).wait(1).to({y:90.1},0).wait(1).to({y:99.7},0).wait(1).to({y:107.9},0).wait(1).to({y:114.6},0).wait(1).to({y:120.4},0).wait(1).to({y:125.5},0).wait(1).to({y:130.3},0).wait(1).to({y:134.6},0).wait(1).to({y:138.7},0).wait(1).to({y:142.5},0).wait(1).to({y:146},0).wait(1).to({y:149.3},0).wait(1).to({y:152.4},0).wait(1).to({y:155.3},0).wait(1).to({y:158},0).wait(1).to({y:160.5},0).wait(1).to({y:162.8},0).wait(1).to({y:165},0).wait(1).to({y:167},0).wait(1).to({y:168.8},0).wait(1).to({y:170.4},0).wait(1).to({y:171.9},0).wait(1).to({y:173.2},0).wait(1).to({y:174.4},0).wait(1).to({y:175.4},0).wait(1).to({y:176.2},0).wait(1).to({y:176.8},0).wait(1).to({y:177.2},0).wait(1).to({y:177.5},0).wait(1).to({regY:0,y:381.8},0).wait(113));

	// Символ 34
	this.instance_4 = new lib.Символ34();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-5.6,-23.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regY:-208.9,y:-232.3},0).wait(10).to({regY:0,y:-23.4},0).wait(1).to({regY:-208.9,y:-232},0).wait(1).to({y:-231.7},0).wait(1).to({y:-231.5},0).wait(1).to({y:-231.2},0).wait(1).to({y:-230.9},0).wait(1).to({y:-230.6},0).wait(1).to({y:-230.3},0).wait(1).to({y:-230},0).wait(1).to({y:-229.7},0).wait(1).to({y:-229.3},0).wait(1).to({y:-229},0).wait(1).to({regY:0,y:-19.7},0).wait(1).to({regY:-208.9,y:-228.1},0).wait(1).to({y:-227.6},0).wait(1).to({y:-227.1},0).wait(1).to({y:-226.6},0).wait(1).to({y:-226},0).wait(1).to({y:-225.3},0).wait(1).to({y:-224.6},0).wait(1).to({y:-223.8},0).wait(1).to({y:-222.9},0).wait(1).to({y:-221.9},0).wait(1).to({y:-220.8},0).wait(1).to({y:-219.5},0).wait(1).to({y:-218.2},0).wait(1).to({y:-216.6},0).wait(1).to({y:-214.9},0).wait(1).to({y:-213.1},0).wait(1).to({y:-211.1},0).wait(1).to({y:-208.9},0).wait(1).to({y:-206.4},0).wait(1).to({y:-203.4},0).wait(1).to({y:-199.9},0).wait(1).to({y:-195.5},0).wait(1).to({y:-189.7},0).wait(1).to({y:-181.3},0).wait(1).to({regY:0,y:42.2},0).to({y:179.8},5).to({y:389.4},5).wait(1).to({y:42.2},0).to({y:179.8},5).to({y:389.4},5).wait(1).to({y:42.2},0).to({y:179.8},5).to({y:389.4},6).wait(1).to({y:42.2},0).wait(1).to({regY:-208.9,y:-117.1},0).wait(1).to({y:-78.8},0).wait(1).to({y:-47.3},0).wait(1).to({y:-20.8},0).wait(1).to({y:2.1},0).wait(1).to({y:22.1},0).wait(1).to({y:39.6},0).wait(1).to({y:55.2},0).wait(1).to({y:69},0).wait(1).to({y:81.3},0).wait(1).to({y:92.2},0).wait(1).to({y:101.9},0).wait(1).to({y:110.2},0).wait(1).to({y:116.9},0).wait(1).to({y:122.7},0).wait(1).to({y:128},0).wait(1).to({y:132.7},0).wait(1).to({y:137.1},0).wait(1).to({y:141.2},0).wait(1).to({y:145},0).wait(1).to({y:148.6},0).wait(1).to({y:151.9},0).wait(1).to({y:155.1},0).wait(1).to({y:158},0).wait(1).to({y:160.7},0).wait(1).to({y:163.2},0).wait(1).to({y:165.6},0).wait(1).to({y:167.8},0).wait(1).to({y:169.8},0).wait(1).to({y:171.6},0).wait(1).to({y:173.3},0).wait(1).to({y:174.8},0).wait(1).to({y:176.1},0).wait(1).to({y:177.2},0).wait(1).to({y:178.2},0).wait(1).to({y:179},0).wait(1).to({y:179.7},0).wait(1).to({y:180.1},0).wait(1).to({y:180.4},0).wait(1).to({regY:0,y:389.4},0).wait(119));

	// Символ 27
	this.instance_5 = new lib.Символ35();
	this.instance_5.parent = this;
	this.instance_5.setTransform(91.8,-25.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:1.1,regY:-203.1,x:92.9,y:-228.4},0).wait(4).to({regX:0,regY:0,x:91.8,y:-25.3},0).wait(1).to({regX:1.1,regY:-203.1,x:92.9,y:-228.1},0).wait(1).to({y:-227.8},0).wait(1).to({y:-227.6},0).wait(1).to({y:-227.3},0).wait(1).to({y:-227},0).wait(1).to({y:-226.7},0).wait(1).to({y:-226.4},0).wait(1).to({y:-226.1},0).wait(1).to({y:-225.8},0).wait(1).to({y:-225.4},0).wait(1).to({y:-225.1},0).wait(1).to({y:-224.7},0).wait(1).to({y:-224.2},0).wait(1).to({y:-223.7},0).wait(1).to({y:-223.2},0).wait(1).to({y:-222.7},0).wait(1).to({y:-222.1},0).wait(1).to({y:-221.4},0).wait(1).to({y:-220.7},0).wait(1).to({y:-219.9},0).wait(1).to({y:-219},0).wait(1).to({y:-218},0).wait(1).to({y:-216.9},0).wait(1).to({y:-215.6},0).wait(1).to({y:-214.3},0).wait(1).to({y:-212.7},0).wait(1).to({y:-211},0).wait(1).to({y:-209.2},0).wait(1).to({y:-207.2},0).wait(1).to({y:-204.9},0).wait(1).to({y:-202.5},0).wait(1).to({y:-199.5},0).wait(1).to({y:-196},0).wait(1).to({y:-191.6},0).wait(1).to({y:-185.8},0).wait(1).to({y:-177.4},0).wait(1).to({regX:0,regY:0,x:91.8,y:40.3},0).to({y:177.9},5).to({y:387.5},5).wait(1).to({y:40.3},0).to({y:177.9},5).to({y:387.5},5).wait(1).to({y:40.3},0).to({y:177.9},5).to({y:387.5},6).wait(1).to({y:40.3},0).wait(1).to({regX:1.1,regY:-203.1,x:92.9,y:-114.1},0).wait(1).to({y:-76.5},0).wait(1).to({y:-45.6},0).wait(1).to({y:-19.6},0).wait(1).to({y:2.9},0).wait(1).to({y:22.5},0).wait(1).to({y:39.7},0).wait(1).to({y:55},0).wait(1).to({y:68.6},0).wait(1).to({y:80.6},0).wait(1).to({y:91.3},0).wait(1).to({y:100.9},0).wait(1).to({y:109},0).wait(1).to({y:115.6},0).wait(1).to({y:121.3},0).wait(1).to({y:126.4},0).wait(1).to({y:131.1},0).wait(1).to({y:135.4},0).wait(1).to({y:139.5},0).wait(1).to({y:143.2},0).wait(1).to({y:146.7},0).wait(1).to({y:150},0).wait(1).to({y:153},0).wait(1).to({y:155.9},0).wait(1).to({y:158.6},0).wait(1).to({y:161.1},0).wait(1).to({y:163.4},0).wait(1).to({y:165.5},0).wait(1).to({y:167.5},0).wait(1).to({y:169.3},0).wait(1).to({y:170.9},0).wait(1).to({y:172.4},0).wait(1).to({y:173.7},0).wait(1).to({y:174.8},0).wait(1).to({y:175.8},0).wait(1).to({y:176.6},0).wait(1).to({y:177.2},0).wait(1).to({y:177.6},0).wait(1).to({y:177.9},0).wait(1).to({regX:0,regY:0,x:91.8,y:381.1},0).wait(125));

	// Символ 26
	this.instance_6 = new lib.Символ33();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-103.5,-27.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regX:0.5,regY:-205.7,x:-103,y:-233.2},0).wait(1).to({y:-232.9},0).wait(1).to({y:-232.7},0).wait(1).to({y:-232.4},0).wait(1).to({y:-232.1},0).wait(1).to({y:-231.8},0).wait(1).to({y:-231.5},0).wait(1).to({y:-231.2},0).wait(1).to({y:-230.9},0).wait(1).to({y:-230.5},0).wait(1).to({y:-230.1},0).wait(1).to({y:-229.7},0).wait(1).to({y:-229.3},0).wait(1).to({y:-228.8},0).wait(1).to({y:-228.3},0).wait(1).to({y:-227.8},0).wait(1).to({y:-227.2},0).wait(1).to({y:-226.5},0).wait(1).to({y:-225.8},0).wait(1).to({y:-225},0).wait(1).to({y:-224.1},0).wait(1).to({y:-223.1},0).wait(1).to({regX:0,regY:0,x:-103.5,y:-16.3},0).wait(1).to({regX:0.5,regY:-205.7,x:-103,y:-220.7},0).wait(1).to({y:-219.3},0).wait(1).to({y:-217.8},0).wait(1).to({y:-216.1},0).wait(1).to({y:-214.3},0).wait(1).to({y:-212.3},0).wait(1).to({y:-210},0).wait(1).to({y:-207.5},0).wait(1).to({y:-204.6},0).wait(1).to({y:-201.1},0).wait(1).to({y:-196.7},0).wait(1).to({y:-190.9},0).wait(1).to({y:-182.5},0).wait(1).to({regX:0,regY:0,x:-103.5,y:37.8},0).to({y:175.4},5).to({y:385},5).wait(1).to({y:37.8},0).to({y:175.4},5).to({y:385},5).wait(1).to({y:37.8},0).to({y:175.4},5).to({y:385},6).wait(1).to({y:37.8},0).wait(1).to({regX:0.5,regY:-205.7,x:-103,y:-118.6},0).wait(1).to({y:-80.4},0).wait(1).to({y:-49.1},0).wait(1).to({y:-22.7},0).wait(1).to({y:0.1},0).wait(1).to({y:20},0).wait(1).to({y:37.5},0).wait(1).to({y:53},0).wait(1).to({y:66.7},0).wait(1).to({y:79},0).wait(1).to({y:89.8},0).wait(1).to({y:99.5},0).wait(1).to({y:107.7},0).wait(1).to({y:114.4},0).wait(1).to({y:120.2},0).wait(1).to({y:125.4},0).wait(1).to({y:130.2},0).wait(1).to({y:134.5},0).wait(1).to({y:138.6},0).wait(1).to({y:142.4},0).wait(1).to({y:146},0).wait(1).to({y:149.3},0).wait(1).to({y:152.4},0).wait(1).to({y:155.3},0).wait(1).to({y:158},0).wait(1).to({y:160.5},0).wait(1).to({y:162.9},0).wait(1).to({y:165},0).wait(1).to({y:167},0).wait(1).to({y:168.9},0).wait(1).to({y:170.5},0).wait(1).to({y:172},0).wait(1).to({y:173.3},0).wait(1).to({y:174.5},0).wait(1).to({y:175.4},0).wait(1).to({y:176.2},0).wait(1).to({y:176.9},0).wait(1).to({y:177.3},0).wait(1).to({y:177.6},0).wait(1).to({regX:0,regY:0,x:-103.5,y:383.4},0).wait(130));

	// Слой 12
	this.instance_7 = new lib.Символ38();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-151.7,146.6);

	this.instance_8 = new lib.Символ38();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-53.7,146.6);

	this.instance_9 = new lib.Символ38();
	this.instance_9.parent = this;
	this.instance_9.setTransform(43.9,146.6);

	this.instance_10 = new lib.Символ38();
	this.instance_10.parent = this;
	this.instance_10.setTransform(138.7,146.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7}]}).wait(241));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-250.5,-619.6,493.8,824.3);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ2();
	this.instance.parent = this;
	this.instance.setTransform(271.5,37.6,1,1,0,0,0,24.9,16.9);

	this.instance_1 = new lib.Символ4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(271.5,37.6,1,1,0,0,0,24.9,16.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[]},2).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnNCoQgFAAgBgFIAAgMIhBAAIAAAMQAAAFgGAAIgOAAQgGAAABgFIAAgfQgBgGAGAAQAGAAADgDQACgDABgFIAGhLQAAgFAEAAIBGAAQAFAAAAAFIAABWIAIAAQAGAAAAAGIAAAfQAAAFgGAAgAoAB0QgBAFgCADQgCADgDABIAlAAIAAhFIgZAAgAitCZQgIgCgGgFQgGgFgEgGQgDgGAAgHIABgFIAEAAIAQAAQADAAACADQACAGAGADQAEACAHAAQAGAAAFgDQACgCABgCQACgDABgDQgBgHgFgEQgEgDgKAAIgJAAQgEAAAAgFIAAgMQAAgEAFAAIAIAAQAIAAAFgDQADgDAAgGIgBgHIgDgEQgFgDgHAAQgFAAgFABQgEADgCAGQgCADgDAAIgQAAIgDAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAgBQAAgHACgGQAEgGAFgEQAGgFAIgCQAHgDAIAAQAKAAAHADQAIACAHAFQAGAFADAHQAEAHgBAJQABAJgFAGQgEAGgGACQAIADAFAGIADAHQACAEAAAFIgBAKIgDAIQgDAHgHAFQgGAEgJACQgHACgJAAQgJAAgIgDgADoCZQgFAAAAgFIAAg9IgSAgQgDADgCAAIgJAAQgDAAgCgDIgTggIAAA9QAAAFgEAAIgSAAQgGAAAAgFIAAhsQAAgFAGAAIASAAQAFAAACAGIAZAsIAbgwQACgCAEAAIASAAQAEAAAAAFIAABsQAAAFgEAAgABeCZQgFAAAAgFIAAhYIgZAAQgGAAgFAEQgFAFAAAGQAAAHAFAEQAFAEAHAAIAEAAQAFAAAAAFIAAAPQAAAGgCADIgTAdQgEAFgFAAIgVAAQgBAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBIAAgEIAagkQgFgCgEgDIgIgIQgDgFgCgFQgDgGAAgHQAAgJADgHQACgIAFgEQAHgHAHgCQAGgCAQgBIAuAAQAFAAAAAFIAABsQAAAFgFAAgAhUCZQgFAAAAgFIAAhsQAAgFAFAAIASAAQAFAAAAAFIAAAhIARAAQAMAAAJADQAJACAFAFQAGAGADAHQACAHAAAKQAAAJgCAIQgDAHgGAFQgFAGgJACQgJADgMAAgAg9CAIARAAIAJgBIAHgDQAEgEAAgHQAAgHgEgEIgHgDQgEgCgFAAIgRAAgAkhCZQgBAAAAAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAIANgcIgohQIAAgEQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAIAVAAQAGAAABAEIAYAzIAXgyQADgFAFAAIAUAAQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABIg0BsIgDAEIgFABgAmhCZQgGAAABgFIAAhsQgBgFAGAAIAoAAQALAAAJADQAJADAGAFQAGAGADAIQADAHAAAKQAAAJgDAIQgDAHgGAGQgGAFgJADQgJADgLAAIgSAAIAAAeQAAAFgEAAgAmLBeIASAAIAJgBIAGgEQAFgFAAgHQAAgHgFgFIgGgEIgJgBIgSAAgACiguQgJgCgGgFQgGgFgDgGQgDgGgBgHIABgFIAFAAIAPAAQAEAAABADQACAGAHADQAEACAGAAQAGAAAFgDQADgCABgCQACgDAAgDQAAgHgFgEQgFgDgJAAIgJAAQgEAAgBgFIAAgMQAAgEAGAAIAIAAQAIAAAEgDQAEgDAAgGIgBgHIgEgEQgEgDgHAAQgGAAgEABQgFADgCAGQgBADgEAAIgPAAIgEAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAgBAAgBQAAgHADgGQADgGAGgEQAFgFAIgCQAHgDAJAAQAJAAAIADQAIACAGAFQAGAFADAHQAEAHAAAJQAAAJgFAGQgEAGgFACQAHADAFAGIAEAHQABAEABAFIgBAKIgDAIQgEAHgGAFQgHAEgIACQgHACgKAAQgIAAgIgDgAiygtQgIgDgHgFQgIgFgEgHIgDgJIgBgKIAAgqIABgKIADgIQAEgIAIgFQAHgFAIgCQAJgDAIAAQAJAAAIACQAIACAGAFQAHAEAEAGQAEAHABAIQAAAGgFAAIgSAAQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAgBgBAAIgBgEQgDgFgEgCQgEgCgIAAIgIACQgEABgCACQgDACgBAEQgCADABAEIAAAmQgBAEACADQABAEADACIAGAEIAIABQAIAAAFgDQAFgDABgGIABgFQABgBAAAAQAAAAABAAQAAgBABAAQAAAAABAAIASAAQAFAAAAAGQAAAJgEAHQgEAHgHAFQgGAFgJACQgJADgIAAQgIAAgJgCgAkjgtQgJgDgGgFQgIgFgEgHIgEgJIgBgKIAAgqIABgKIAEgIQAEgIAIgFQAGgFAJgCQAJgDAHAAQAJAAAIACQAIACAHAFQAGAEAEAGQAEAHACAIQAAAGgGAAIgSAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAIgBgEQgEgFgDgCQgFgCgIAAIgHACQgEABgCACQgEACgBAEQgBADAAAEIAAAmQAAAEABADQABAEAEACIAGAEIAHABQAJAAAFgDQAEgDACgGIABgFQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAIASAAQAGAAAAAGQAAAJgFAHQgDAHgHAFQgHAFgJACQgIADgJAAQgHAAgJgCgAHXguQgFAAAAgFIAAhsQAAgFAFAAIASAAQAFAAAAAFIAAAhIASAAQALAAAJADQAIACAHAFQAGAGADAHQACAHAAAKQAAAJgCAIQgDAHgGAFQgHAGgIACQgJADgLAAgAHuhHIASAAIAJgBIAGgDQAEgEAAgHQAAgHgEgEIgGgDQgEgCgFAAIgSAAgAGJguQgGAAAAgFIAAhYIgcAAQgFAAAAgFIAAgPQAAgFAFAAIBUAAQAFAAAAAFIAAAPQAAAFgFAAIgcAAIAABYQABAFgGAAgAFFguQgFAAgCgFIgEgOIgtAAIgFAOQgCAFgEAAIgTAAQgGAAACgFIAphsQACgFAFAAIARAAQAFAAACAFIAoBsQACAFgFAAgAExhbIgOgnIgNAnIAbAAgABpguQgFAAgCgFIgFgOIgsAAIgFAOQgCAFgFAAIgTAAQgFAAACgFIAohsQACgFAFAAIASAAQAEAAADAFIAnBsQADAFgFAAgABUhbIgNgnIgOAnIAbAAgAgRguQgGAAgEgGIgagrIgKAMIAAAgQAAAFgGAAIgSAAQgEAAAAgFIAAhsQAAgFAEAAIASAAQAGAAAAAFIAAAoIAkgpQAFgEAFAAIAXAAQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABIgBADIgoAsIAmA/IABAEQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAgAlkguQgGAAgBgFIgFgOIgsAAIgFAOQgCAFgFAAIgTAAQgFAAACgFIAohsQACgFAGAAIARAAQAFAAACAFIAoBsQACAFgGAAgAl5hbIgNgnIgOAnIAbAAgAogguQgFAAAAgFIAAhsQAAgFAFAAIAoAAQAMAAAJADQAIADAHAFQAFAGAEAIQACAHAAAKQAAAJgCAIQgEAHgFAGQgHAFgIADQgJADgMAAIgRAAIAAAeQAAAFgFAAgAoJhpIARAAIAJgBIAHgEQAEgFAAgHQAAgHgEgFIgHgEIgJgBIgRAAg");
	this.shape.setTransform(361,37.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},3).wait(1));

	// Слой 4
	this.instance_2 = new lib.Символ29();
	this.instance_2.parent = this;
	this.instance_2.setTransform(336.6,36.4,1,1,0,0,0,99.8,26.8);
	this.instance_2.alpha = 0.328;

	this.instance_3 = new lib.Символ28();
	this.instance_3.parent = this;
	this.instance_3.setTransform(336.6,36.4,1,1,0,0,0,99.8,26.8);
	this.instance_3.alpha = 0.16;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},1).to({state:[]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	// Слой 1
	this.instance_4 = new lib.Символ8();
	this.instance_4.parent = this;
	this.instance_4.setTransform(336.2,36.9,1,1,0,0,0,109.5,36.9);
	this.instance_4.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(19, 18, 0, -159))];
	this.instance_4.cache(-2,-2,223,78);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(226.7,0,223,77);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.parent = this;
	this.instance.setTransform(109.5,36.9,1,1,0,0,0,336.2,36.9);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ9(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:336.1,scaleX:0.9,scaleY:0.9},4).to({regX:336.2,scaleX:1,scaleY:1},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,222,77);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(6));

	// Слой 2
	this.instance = new lib.Символ47();
	this.instance.parent = this;
	this.instance.setTransform(109.5,36.9,1,1,0,0,0,109.5,36.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:36.8,scaleX:1.09,scaleY:1.09,x:119.5,y:9.4},4).to({regY:36.9,scaleX:1,scaleY:1,x:109.5,y:36.9},5).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ48();
	this.instance_1.parent = this;
	this.instance_1.setTransform(518.9,36.9,1,1,0,0,0,107.5,36.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:36.8,scaleX:1.08,scaleY:1.08,x:507.2,y:9},4).to({regY:36.9,scaleX:1,scaleY:1,x:518.9,y:36.9},5).wait(1));

	// Слой 4
	this.instance_2 = new lib.Символ10();
	this.instance_2.parent = this;
	this.instance_2.setTransform(309.4,54.4,1,1.717,0,-90,90,77.6,215.2);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1},4).to({alpha:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.2,-23.2,739.2,155.2);


// stage content:
(lib.slot_azart_club_640x305 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		stage.canvas.addEventListener("mouseover", fl_mouseover.bind(this));
		function fl_mouseover()
		{
		this.btnn.gotoAndPlay(1);
		}
		
		stage.canvas.addEventListener("mouseout", fl_mouseout.bind(this));
		
		function fl_mouseout()
		{
		this.btnn.gotoAndPlay(5);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btn
	this.btnn = new lib.Символ39();
	this.btnn.parent = this;
	this.btnn.setTransform(320.2,267.3,1,1,0,0,0,315.2,36.9);

	this.timeline.addTween(cjs.Tween.get(this.btnn).wait(1));

	// logo
	this.instance = new lib.Символ1();
	this.instance.parent = this;
	this.instance.setTransform(320,31.8,0.628,0.628,0,0,0,118.5,50.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 5
	this.instance_1 = new lib.Символ23_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(325,180.3,1.294,1.294);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ10();
	this.instance_2.parent = this;
	this.instance_2.setTransform(19.8,152.8,1,1,0,0,180,77.6,215.2);

	this.instance_3 = new lib.Символ10();
	this.instance_3.parent = this;
	this.instance_3.setTransform(616.6,152.8,1,1,0,0,0,77.6,215.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	// Слой 3
	this.instance_4 = new lib.Символ3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(329,160.5,1.097,1.097,0,0,0,300,150);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(262.2,-467,752,1064.6);
// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/btn.png?1482237680658", id:"btn"},
		{src:"images/fon.jpg?1482237680658", id:"fon"},
		{src:"images/logo.png?1482237680658", id:"logo"},
		{src:"images/RITH_Symbol_021.png?1482237680658", id:"RITH_Symbol_021"},
		{src:"images/RITH_Symbol_03.png?1482237680658", id:"RITH_Symbol_03"},
		{src:"images/RITH_Symbol_04.png?1482237680658", id:"RITH_Symbol_04"},
		{src:"images/RITH_Symbol_051.png?1482237680658", id:"RITH_Symbol_051"},
		{src:"images/RITH_Symbol_0611.png?1482237680658", id:"RITH_Symbol_0611"},
		{src:"images/RITH_Symbol_08.png?1482237680658", id:"RITH_Symbol_08"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;