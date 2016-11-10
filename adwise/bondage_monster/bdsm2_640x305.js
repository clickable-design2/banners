(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.bod = function() {
	this.initialize(img.bod);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,108,120);


(lib.d1 = function() {
	this.initialize(img.d1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,24,60);


(lib.d4 = function() {
	this.initialize(img.d4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,94);


(lib.d5 = function() {
	this.initialize(img.d5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,62,114);


(lib.d6 = function() {
	this.initialize(img.d6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,40,33);


(lib.d7 = function() {
	this.initialize(img.d7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,15,57);


(lib.fon = function() {
	this.initialize(img.fon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,985,425);


(lib.g1 = function() {
	this.initialize(img.g1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,173,154);


(lib.g2 = function() {
	this.initialize(img.g2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,197);


(lib.g3 = function() {
	this.initialize(img.g3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,75,156);


(lib.g7 = function() {
	this.initialize(img.g7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,75,98);


(lib.gun = function() {
	this.initialize(img.gun);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,127);


(lib.hand = function() {
	this.initialize(img.hand);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,36,28);


(lib.hat = function() {
	this.initialize(img.hat);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,68,60);


(lib.led = function() {
	this.initialize(img.led);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,57,113);


(lib.led5 = function() {
	this.initialize(img.led5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,77,76);


(lib.pric = function() {
	this.initialize(img.pric);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,87,87);


(lib.sock = function() {
	this.initialize(img.sock);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,44,38);


(lib.wpod = function() {
	this.initialize(img.wpod);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,262,246);


(lib.wxw = function() {
	this.initialize(img.wxw);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,107,156);// helper functions:

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


(lib.Символ70 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],0,-62,0,62).s().p("Eg2OAJsIAAzXMBsdAAAIAATXg");
	this.shape.setTransform(347,62);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],0,62,0,-62).s().p("Eg2OAJsIAAzXMBsdAAAIAATXg");
	this.shape_1.setTransform(347,294.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],62,0,-62,0).s().p("ApralMAAAg1JITXAAMAAAA1Jg");
	this.shape_2.setTransform(632.1,170.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],-62,0,62,0).s().p("ApralMAAAg1JITXAAMAAAA1Jg");
	this.shape_3.setTransform(62,170.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ70, new cjs.Rectangle(0,0,694.2,356.2), null);


(lib.Символ67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AgVCFIgVgDQgLgDgJgEQgJgEgGgFQgGgGgEgGIgIgNQgEgGAAgGIAAgKQABgJAFgDQAFgDALAEQAjALABALIADALQABAFAHABQAHAAAGgKQAGgLAGgRIAFgSQgNAFgUABQgOAAgMgDQgMgDgKgGQgTgOACgZIANhwQACgKAFgCQAEgCAJAEIAVAHQALAFAIAFIAHAFIADAFIABAFIgTBVQgGASAQAAQAKgBAIgCQAHgCAGgEIAUh3QACgJAFgCQAFgCAJADIAUAGQALAEAJAGIAHAFIADAFIABAFIgBAHQgHAsgJAkQgIAjgKAcQgKAcgLASQgLATgOAIQgKAGgOADIgMACIgEgBg");
	this.shape.setTransform(10,13.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ67, new cjs.Rectangle(0,0,20.1,26.7), null);


(lib.Символ66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AAbCVQgDgBAAgGIAGgjIhfAHIgIAAIgGgCIgEgCIgUgQQgGgFgCgEQgDgGABgIIADgbIAli4QADgIAFgCQAEgCAKADIAUAGQAKAFAJAGQAHAFACAFQACADgCAIIgvCtIA1gFIArjEQADgKAFgBQAFgCAJADIASAGIASALQAIAFACAFQABADgCAIIgwClIADAAQAPAAAHAGQAHAFgCAMIgKArQgEAMgEAFQgEAGgJAFQgLAEgMAAQgMAAgCgDg");
	this.shape.setTransform(11.4,15.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ66, new cjs.Rectangle(0,0,22.9,30.4), null);


(lib.Символ65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AhKCCIgPgEQgHgCgHgEQgHgEgCgEQgCgEAAgIIALhiIAUh4QACgJAFgCQAFgCAKACIArAPQAKAEgHAVIghCEIBQiMQAHgLAKgNIAHgGIADgCQAFgCAKACIAPAFIAHADIAJAGQAJAFABAGQABAFgDAIIg2DUQgCAMgQgEQgOgDgPgFQgMgFAThYIADgNIgXAmQgJAPgPATIgXAdQgIALgHADIgBAAIgDABIgHgBg");
	this.shape.setTransform(11.5,13.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ65, new cjs.Rectangle(0,0,23,26.2), null);


(lib.Символ64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AhGCFIgQgEIgNgGQgHgDgDgEQgDgFACgIQAEgUAEgcIAWirQACgKAEgCQAFgCAJAEIAUAHQALAFAIAFIAHAFIAEAFIABAFIgXBgIAwgDIAch4QADgKAFgBQAFgCAJADIASAHIASAKQAHAFACAFQACAEgDAIIg9DbQAAAEgDABQgCACgEAAIgUgFQgNgDgHgGQgFgFACgLIAJg4IgxAHIgNBHQgBAGgDABIgDABIgHgBg");
	this.shape.setTransform(11.2,13.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ64, new cjs.Rectangle(0,0,22.4,26.8), null);


(lib.Символ63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AhGCFIgQgEIgNgGQgHgDgDgEQgDgFACgIQAEgUAEgcIAWirQACgKAEgCQAFgCAJAEIAUAHQALAFAIAFIAHAFIAEAFIABAFIgXBgIAwgDIAch4QADgKAFgBQAFgCAJADIASAHIASAKQAHAFACAFQACAEgDAIIg9DbQAAAEgDABQgCACgEAAIgUgFQgNgDgHgGQgFgFACgLIAJg4IgxAHIgNBHQgBAGgDABIgDABIgHgBg");
	this.shape.setTransform(11.2,13.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ63, new cjs.Rectangle(0,0,22.4,26.8), null);


(lib.Символ62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("Ag1CEQgHgBgEgDIgVgQQgFgEgDgGQgDgGABgIIAdjGIAcgHIBogPQAIAAAGADQAFAEADAGIAFANIADANQABAIgCADQgDADgIABIhOAJIgQA7IAkgDQAJgBAEACQAFACADAGIAGALIADAMQADAHgCACQgCACgIACIhIANIgJAjIA1gGQAJgBAEACQAFACADAFIAKAWQACAGgCACQgBADgIABIhMAPQgIACgGAAIgEgBg");
	this.shape.setTransform(9.6,13.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ62, new cjs.Rectangle(0,0,19.3,26.6), null);


(lib.Символ61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("ABCCGIgRgDQgHgCgDgEQgDgDgBgIIgCgTQgBgLABghIAHh7IhjDHQgDAFgDABQgDABgHgCIgSgIIgHgEIgEgEIgCgGIACgKIBHikQAOgdANgXQAEgIAGgFQAIgFAOABIAnAFIAcAIQAKAEACAFQADAFgBAJIgNCmQgCAeABAaQAAAFgDACQgCACgIAAIgOAAg");
	this.shape.setTransform(10.7,13.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ61, new cjs.Rectangle(0,0,21.4,26.8), null);


(lib.Символ60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AhGCFIgQgEIgNgGQgHgDgDgEQgDgFACgIQAEgUAEgcIAPh0QADgdAEgQQACgKAJgCIBSgNIAkgCQAIgBAJADIASAHIASAKQAHAFACAFQACAEgDAIIg9DbQAAAEgDABQgCACgEAAIgUgFQgNgDgHgGQgFgFACgLIAjiyIgwAHIgoDBQgBAGgDABIgDABIgHgBg");
	this.shape.setTransform(11.2,13.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ60, new cjs.Rectangle(0,0,22.4,26.8), null);


(lib.Символ59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AhKCCIgPgEQgHgCgHgEQgHgEgCgEQgCgEAAgIIAfjaQACgJAFgCQAFgCAKACIArAPQAKAEgHAVIghCEIBQiMQAHgLAKgNIAHgGIADgCQAFgCAKACIAPAFIAHADIAJAGQAJAFABAGQABAFgDAIIg2DUQgCAMgQgEQgOgDgPgFQgMgFAThYIADgNIgXAmQgJAPgPATIgXAdQgIALgHADIgBAAIgDABIgHgBg");
	this.shape.setTransform(11.5,13.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ59, new cjs.Rectangle(0,0,23,26.2), null);


(lib.Символ58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AgMCIQgOgBgLgEIgVgGQgIgEgIgGQgIgGgFgIQgHgNgEgSQgDgSABgTQABgUAFgVQAFgVAJgUQAIgUAMgSQAJgMATgTQANgLANgDQAMgEALABIARADIAiANIANAIIAKAJIAGAJIADAKIABAMIgBAdIgGAaIgCAFIgDADIgEABIgIAAQgKgCgHgDQgHgDgEgFQgFgEgCgGQgDgFgBgIIgCgdQgBgIgGgCQgGgCgIAJQgIAIgIAOQgIAOgIARIgLAeQgEAPgCAPQgCAPABAMQAAAMAEAJQADAIAGACQAMAEAYgZQARgSAdAIQALADABAGQAAAGgFAKQgFALgJAIQgIAKgIAFIgLAGIgZAGg");
	this.shape.setTransform(10.1,13.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ58, new cjs.Rectangle(0,0,20.3,27.2), null);


(lib.Символ57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("ABLCGQgHgBgHgCQgHgCgDgEQgDgDgBgIIgEgqIgrAGQgXADgRAFIgTApQgDAFgDABQgDABgHgCIgSgIIgHgEIgEgEIgCgGIACgKIBHikQAOgdANgXQAEgIAGgFQAIgFAOABIAnAFIAcAIQAKAEACAFQADAFgBAJIgFDeQAAAFgDACQgCACgIAAIgOAAgAgNAeIA2gGIgBhgg");
	this.shape.setTransform(10.7,13.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ57, new cjs.Rectangle(0,0,21.4,26.8), null);


(lib.Символ56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AhGCFIgQgEIgNgGQgHgDgDgEQgDgFACgIQAEgUAEgcIAPh0QADgdAEgQQACgKAJgCIAUgFIBigKQAIgBAJADIASAHIASAKQAHAFACAFQACAEgDAIIg9DbQAAAEgDABQgCACgEAAIgUgFQgNgDgHgGQgFgFACgLIAjiyIgwAHIgoDBQgBAGgDABIgDABIgHgBg");
	this.shape.setTransform(11.2,13.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ56, new cjs.Rectangle(0,0,22.4,26.8), null);


(lib.Символ55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AgMCIQgOgBgLgEIgVgGQgIgEgIgGQgIgGgFgIQgHgNgEgSQgDgSABgTQABgUAFgVQAFgVAJgUQAIgUAMgSQAJgMATgTQANgLANgDQAMgEALABIARADIAiANIANAIIAKAJIAGAJIADAKIABAMIgEArIgFARIgDADIgEABIgIAAQgKgCgHgDQgHgDgEgFQgFgEgCgGQgDgFgBgIIgCgdQgBgIgGgCQgGgCgIAJQgIAIgIAOQgIAOgIARIgLAeQgEAPgCAPQgCAPABAMQAAAMAEAJQADAIAGACQAMAEAYgZQARgSAdAIQALADABAGQAAAGgFAKQgFALgJAIQgIAKgIAFIgLAGIgZAGg");
	this.shape.setTransform(10.1,13.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ55, new cjs.Rectangle(0,0,20.3,27.2), null);


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AvSD6QjvgHj3AKQgsACgUgKIgLgGIg2ADQh5AIhSgXQgggJgSgPQgQgQgGgZQgFgSACgRQADgTAMgMQANgOAZgGQAPgEAegEQAYgFAigPQACgJAEgJQARgiBDgYQBLgZBhgPQC8gdEjARQBRAFChALQCOAJBjABQBaAAAUACQA/ADAuAPQAfAKANASQAEAGACAGIFpgQQAigBARgCQAcgEAWgHQASgHAbgOIAtgXQA0gXBLgEIAjgBQBAgmBhghQCAgqCJgUQBPgLB3gHQC0gKCAAJQCnALCFAsQAzARAaAXQARAPAIAUQAKAWgFAVIgBAGQAVgFAOAYQAPAbgNAWQgMAUgaALQgSAIggAGIgVADQgGAdgXAYQgXAagiAOQgwAVhYgBIhFAAQgoAAgdAEQgTADgfAIIgzANQgxALhnAFIgbABQh1AVh3AGQjTALjOgiQgYgEgMgEQgNgEgJgHIgCABQgxAVgjAGQgyAJgcgUQgRgMgFgVQgFgXAOgOIoWgIQgaAPgtATQhwAug+AQQhbAZh6ADIgiAAQg9AAh5gDg");
	this.shape.setTransform(187.3,25.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ50, new cjs.Rectangle(0,0,374.6,50.7), null);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.gun();
	this.instance.parent = this;
	this.instance.setTransform(204.3,8,1,1,5.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ48, new cjs.Rectangle(192.8,8,260.5,149.2), null);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Egy1AY2MAAAgxrMBlrAAAMAAAAxrg");
	this.shape.setTransform(325.4,159);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ44, new cjs.Rectangle(0,0,650.9,318), null);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF0000","rgba(255,0,0,0)","rgba(255,0,0,0)"],[0,1,1],-40.9,0,41,0).s().p("AmZYnMAAAgxNIMzAAMAAAAxNg");
	this.shape.setTransform(41,157.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ41, new cjs.Rectangle(0,0,82,315), null);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AD0505").s().p("AAkAsQgJgBgJgIQgKgKgGgEQgRgKgagfIgOgTIgDgBQgEgBAFgBQgBgBAAAAQAAAAABAAQAAAAAAAAQABAAABABQAFgBALAJQALAIAsATQAtARAAALQABALgIAHQgHAFgIAAIgDAAg");
	this.shape.setTransform(6.1,4.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ39, new cjs.Rectangle(0,0,12.3,8.9), null);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AD0505").s().p("Ag0AmIA3g4IAOgMIAPgSQAKgNAIgDQAHgCAJAIQAJAHgBAMQgBALgMANQgIAJgMAIQgQANg+AjQgbAPgGAAQgKAAAcgbg");
	this.shape.setTransform(7.4,6.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ38, new cjs.Rectangle(0,0,14.8,13.1), null);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AD0505").s().p("Ag4A4QApguAEgKQADgKAFgHIAKgSIAJgOQAGgGAQgOIASgPQACgDAJAFQAIAFACAIQAFAPgPAUQgXAbgJAOQgIANgXATQgXATgnAWQgNAGgEAAQgKAAAdgeg");
	this.shape.setTransform(7.9,8.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ37, new cjs.Rectangle(0,0,15.7,17.3), null);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AD0505").s().p("AgaA3QAEhFgDgJQgDgIACgJIAEgOQAAgPADgHQACgHAHgFQAGgFAHAAQALgBAHAKQAGAHABAMQABALgGAaQgDAMgHAPQgHAOgRA4QgJAZgEAAQgFAAADgng");
	this.shape.setTransform(2.8,9.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ36, new cjs.Rectangle(0,0,5.6,18.8), null);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wxw();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ29, new cjs.Rectangle(0,0,107,156), null);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.g1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ27, new cjs.Rectangle(0,0,173,154), null);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.d7();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ26, new cjs.Rectangle(0,0,15,57), null);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.d4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ23, new cjs.Rectangle(0,0,59,94), null);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.d6();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(0,0,40,33), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.g2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(0,0,150,197), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.g3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(0,0,75,156), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.g7();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(0,0,75,98), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.d5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(0,0,62,114), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hat();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(0,0,68,60), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hand();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(0,0,36,28), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bod();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(0,0,108,120), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.led5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(0,0,77,76), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.led();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(0,0,57,113), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wpod();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(0,0,262,246), null);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(2,1,1).p("AGaAAQAACqh4B4Qh4B4iqAAQipAAh4h4Qh4h4AAiqQAAipB4h4QB4h4CpAAQCqAAB4B4QB4B4AACpg");
	this.shape.setTransform(41,41);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(-1,-1,84,84), null);


(lib.Анимация1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.d1();
	this.instance.parent = this;
	this.instance.setTransform(-12,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12,-30,24,60);


(lib.Symbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("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");
	this.shape.setTransform(149.4,16.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol, new cjs.Rectangle(0,0,298.8,33.2), null);


(lib.Symbol_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sock();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol_1, new cjs.Rectangle(0,0,44,38), null);


(lib.Символ54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Symbol();
	this.instance.parent = this;
	this.instance.setTransform(149.3,16.6,1,1,0,0,0,149.3,16.6);
	this.instance.shadow = new cjs.Shadow("rgba(255,0,0,1)",0,0,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ54, new cjs.Rectangle(-4,-4,310,45), null);


(lib.Символ53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 67
	this.instance = new lib.Символ67();
	this.instance.parent = this;
	this.instance.setTransform(266.9,13.7,1,1,0,0,0,10,13.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({scaleY:0.64,y:14.3},3).to({scaleY:1,y:13.7},3).wait(2).to({alpha:0.398},3).to({alpha:1},3).wait(2).to({alpha:0.398},3).to({alpha:1},3).wait(1));

	// Символ 66
	this.instance_1 = new lib.Символ66();
	this.instance_1.parent = this;
	this.instance_1.setTransform(244.1,15.4,1,1,0,0,0,11.4,15.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({scaleY:0.64,y:15.3},3).to({scaleY:1,y:15.4},3).wait(3).to({alpha:0.398},3).to({alpha:1},3).wait(2).to({alpha:0.398},3).to({alpha:1},3).wait(1));

	// Символ 65
	this.instance_2 = new lib.Символ65();
	this.instance_2.parent = this;
	this.instance_2.setTransform(223.1,13.7,1,1,0,0,0,11.5,13.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({regY:13.2,scaleY:0.64,y:14.4},3).to({regY:13.1,scaleY:1,y:13.7},3).wait(4).to({alpha:0.398},3).to({alpha:1},3).wait(2).to({alpha:0.398},3).to({alpha:1},3).wait(1));

	// Символ 64
	this.instance_3 = new lib.Символ64();
	this.instance_3.parent = this;
	this.instance_3.setTransform(202.8,13.5,1,1,0,0,0,11.2,13.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({regY:13.5,scaleY:0.64,y:14.3},3).to({regY:13.3,scaleY:1,y:13.5},3).wait(5).to({alpha:0.398},3).to({alpha:1},3).wait(2).to({alpha:0.398},3).to({alpha:1},3).wait(1));

	// Символ 63
	this.instance_4 = new lib.Символ63();
	this.instance_4.parent = this;
	this.instance_4.setTransform(182.5,13.5,1,1,0,0,0,11.2,13.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3).to({regY:13.5,scaleY:0.64,y:14.3},3).to({regY:13.3,scaleY:1,y:13.5},3).wait(6).to({alpha:0.398},3).to({alpha:1},3).wait(2).to({alpha:0.398},3).to({alpha:1},3).wait(1));

	// Символ 62
	this.instance_5 = new lib.Символ62();
	this.instance_5.parent = this;
	this.instance_5.setTransform(163.7,13.5,1,1,0,0,0,9.7,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(2).to({regY:13.3,scaleY:0.64,y:14.2},3).to({regY:13.2,scaleY:1,y:13.5},3).wait(7).to({alpha:0.398},3).to({alpha:1},3).wait(2).to({alpha:0.398},3).to({alpha:1},3).wait(1));

	// Символ 61
	this.instance_6 = new lib.Символ61();
	this.instance_6.parent = this;
	this.instance_6.setTransform(142.8,13.5,1,1,0,0,0,10.7,13.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regY:13.5,scaleY:0.64,y:14.3},3).to({regY:13.4,scaleY:1,y:13.5},3).wait(8).to({alpha:0.398},3).to({alpha:1},3).wait(2).to({alpha:0.398},3).to({alpha:1},3).wait(1));

	// Символ 60
	this.instance_7 = new lib.Символ60();
	this.instance_7.parent = this;
	this.instance_7.setTransform(123.9,13.5,1,1,0,0,0,11.2,13.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(2).to({regY:13.5,scaleY:0.64,y:14.3},3).to({regY:13.4,scaleY:1,y:13.5},3).wait(7).to({alpha:0.398},3).to({alpha:1},3).wait(2).to({alpha:0.398},3).to({alpha:1},3).wait(1));

	// Символ 59
	this.instance_8 = new lib.Символ59();
	this.instance_8.parent = this;
	this.instance_8.setTransform(91.8,13.7,1,1,0,0,0,11.5,13.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(3).to({regY:13.2,scaleY:0.64,y:14.4},3).to({regY:13.1,scaleY:1,y:13.7},3).wait(6).to({alpha:0.398},3).to({alpha:1},3).wait(2).to({alpha:0.398},3).to({alpha:1},3).wait(1));

	// Символ 58
	this.instance_9 = new lib.Символ58();
	this.instance_9.parent = this;
	this.instance_9.setTransform(71.2,13.6,1,1,0,0,0,10.1,13.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(4).to({scaleY:0.64,y:14.3},3).to({scaleY:1,y:13.6},3).wait(5).to({alpha:0.398},3).to({alpha:1},3).wait(2).to({alpha:0.398},3).to({alpha:1},3).wait(1));

	// Символ 57
	this.instance_10 = new lib.Символ57();
	this.instance_10.parent = this;
	this.instance_10.setTransform(49.7,13.5,1,1,0,0,0,10.7,13.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(5).to({regY:13.5,scaleY:0.64,y:14.3},3).to({regY:13.4,scaleY:1,y:13.5},3).wait(4).to({alpha:0.398},3).to({alpha:1},3).wait(2).to({alpha:0.398},3).to({alpha:1},3).wait(1));

	// Символ 56
	this.instance_11 = new lib.Символ56();
	this.instance_11.parent = this;
	this.instance_11.setTransform(30.7,13.5,1,1,0,0,0,11.2,13.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(6).to({regY:13.5,scaleY:0.64,y:14.3},3).to({regY:13.4,scaleY:1,y:13.5},3).wait(3).to({alpha:0.398},3).to({alpha:1},3).wait(2).to({alpha:0.398},3).to({alpha:1},3).wait(1));

	// Символ 55
	this.instance_12 = new lib.Символ55();
	this.instance_12.parent = this;
	this.instance_12.setTransform(10.1,13.6,1,1,0,0,0,10.1,13.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(7).to({scaleY:0.64,y:14.3},3).to({scaleY:1,y:13.6},3).wait(2).to({alpha:0.398},3).to({alpha:1},3).wait(2).to({alpha:0.398},3).to({alpha:1},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,277,30.6);


(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ50();
	this.instance.parent = this;
	this.instance.setTransform(187.2,25.4,1,1,0,0,0,187.2,25.4);
	this.instance.filters = [new cjs.BlurFilter(26, 26, 1)];
	this.instance.cache(-2,-2,379,55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ51, new cjs.Rectangle(-13,-13,404,80), null);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ48();
	this.instance.parent = this;
	this.instance.setTransform(125,63.5,1,1,0,0,0,125,63.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:85},9,cjs.Ease.get(-1)).to({y:113.5},10,cjs.Ease.get(1)).to({y:88.5},10,cjs.Ease.get(-1)).to({y:63.5},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(192.8,8,260.5,149.2);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ54();
	this.instance.parent = this;
	this.instance.setTransform(149.4,27.9,1,1,0,0,0,149.3,16.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:149.4,scaleX:0.88,scaleY:0.88,x:149.5},2,cjs.Ease.get(-1)).to({regX:149.3,scaleX:0.75,scaleY:0.75,x:149.4},2,cjs.Ease.get(1)).to({regX:149.4,scaleX:0.85,scaleY:0.85,x:149.5},2,cjs.Ease.get(-1)).to({regX:149.3,scaleX:1,scaleY:1,x:149.4},3,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.9,7.3,309,45);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 39
	this.instance = new lib.Символ39();
	this.instance.parent = this;
	this.instance.setTransform(24.2,45.5,0.553,0.553,0,0,0,6,4.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(70).to({alpha:1},0).to({regX:6.1,scaleX:0.67,scaleY:0.67,x:31.2,y:50.5,alpha:0.75},2).to({scaleX:1,scaleY:1,x:51.8,y:65.5,alpha:0},6).wait(6));

	// Символ 38
	this.instance_1 = new lib.Символ38();
	this.instance_1.parent = this;
	this.instance_1.setTransform(30.6,26.6,0.561,0.561,0,0,0,7.3,6.5);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(70).to({alpha:1},0).to({regX:7.4,scaleX:0.67,scaleY:0.67,x:36.9,y:22.8,alpha:0.75},2).to({scaleX:1,scaleY:1,x:55.6,y:11.5,alpha:0},6).wait(6));

	// Символ 37
	this.instance_2 = new lib.Символ37();
	this.instance_2.parent = this;
	this.instance_2.setTransform(16.7,21.6,0.554,0.554,0,0,0,7.9,8.6);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(70).to({alpha:1},0).to({regY:8.7,scaleX:0.67,scaleY:0.67,x:24.2,y:14.2,alpha:0.75},2).to({regY:8.6,scaleX:1,scaleY:1,x:46.7,y:-8.4,alpha:0},6).wait(6));

	// Символ 36
	this.instance_3 = new lib.Символ36();
	this.instance_3.parent = this;
	this.instance_3.setTransform(7.8,16.4,0.375,0.375,0,0,0,2.8,9.3);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(70).to({alpha:1},0).to({scaleX:0.53,scaleY:0.53,y:10.1,alpha:0.75},2).to({scaleX:1,scaleY:1,y:-8.7,alpha:0},6).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.8,12.9,28,35.1);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ15();
	this.instance.parent = this;
	this.instance.setTransform(125.5,115.8,1,1,0,0,0,31,57);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(32).to({regY:57.1,rotation:-45,x:138.9,y:89.5},8).to({regY:57,rotation:15,x:119.7,y:121.6},3).to({rotation:0,x:125.5,y:115.8},2).wait(5));

	// Слой 2
	this.instance_1 = new lib.Символ23();
	this.instance_1.parent = this;
	this.instance_1.setTransform(175.6,101.6,1,1,0,0,0,29.5,47);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(28).to({regX:29.6,regY:47.1,rotation:-26.2,x:178.5,y:85.2},8).to({regX:29.5,rotation:30,x:152.4,y:107.5},3).to({regY:47,rotation:0,x:175.6,y:101.6},2).wait(9));

	// Слой 1
	this.instance_2 = new lib.Символ18();
	this.instance_2.parent = this;
	this.instance_2.setTransform(75,98.5,1,1,0,0,0,75,98.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,205.1,197);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ17();
	this.instance.parent = this;
	this.instance.setTransform(37.5,78,1,1,0,0,0,37.5,78);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ30, new cjs.Rectangle(0,0,75,156), null);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(12,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ28, new cjs.Rectangle(0,0,24,60), null);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ22();
	this.instance.parent = this;
	this.instance.setTransform(20,16.5,1,1,0,0,0,20,16.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1.01,skewX:1.8,skewY:7,x:20.3,y:18.9},9,cjs.Ease.get(-1)).to({regX:19.9,scaleY:1.02,skewX:4.2,skewY:15,x:20.4,y:21.3},10,cjs.Ease.get(1)).to({regX:20,regY:16.4,scaleY:1.01,skewX:2,skewY:7.3,x:20.3,y:19},10,cjs.Ease.get(-1)).to({regY:16.5,scaleY:1,skewX:0,skewY:0,x:20,y:16.5},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,40,33);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ29();
	this.instance.parent = this;
	this.instance.setTransform(53.5,78,1,1,0,0,0,53.5,78);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ24, new cjs.Rectangle(0,0,107,156), null);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ26();
	this.instance.parent = this;
	this.instance.setTransform(7.5,28.5,1,1,0,0,0,7.5,28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-7.3,x:11.8,y:27.4},7,cjs.Ease.get(-1)).to({rotation:-15,x:15.9,y:26.2},7,cjs.Ease.get(1)).to({rotation:-6.8,x:11.5,y:27.5},8,cjs.Ease.get(-1)).to({rotation:0,x:7.5,y:28.5},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,15,57);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ28();
	this.instance.parent = this;
	this.instance.setTransform(12,30,1,1,0,0,0,12,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1,skewX:-3.5,x:14,y:30.1},4,cjs.Ease.get(-1)).to({scaleY:1.01,skewX:-8,x:16.2,y:30},5,cjs.Ease.get(1)).to({regX:12.1,scaleY:1,skewX:-4,x:14.3,y:30.1},5,cjs.Ease.get(-1)).to({regX:12,scaleY:1,skewX:0,x:12,y:30},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,24,60);


(lib.Символ19_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.Символ21();
	this.instance.parent = this;
	this.instance.setTransform(-0.4,113.4,1,1,0,0,0,7.5,28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ20();
	this.instance_1.parent = this;
	this.instance_1.setTransform(57.1,134.9,1,1,0,0,0,12,30);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ27();
	this.instance_2.parent = this;
	this.instance_2.setTransform(86.5,77,1,1,0,0,0,86.5,77);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 2
	this.instance_3 = new lib.Символ25();
	this.instance_3.parent = this;
	this.instance_3.setTransform(41.5,-12.4,1,1,0,0,0,20,16.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19_1, new cjs.Rectangle(-7.9,-28.9,180.9,193.8), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Symbol_1();
	this.instance.parent = this;
	this.instance.setTransform(10,19,1,1,0,0,0,10,19);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:19.1,rotation:-7.3,x:9.6,y:18.7},5,cjs.Ease.get(-1)).to({regY:19,rotation:-15,x:9,y:18},5,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:-8.8,x:9.5,y:18.4},4,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:0,x:10,y:19},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,44,38);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.parent = this;
	this.instance.setTransform(3,21.5,1,1,0,0,0,3,21.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:7.3,y:21.6},3,cjs.Ease.get(-1)).to({rotation:15},3).to({regX:3.1,scaleX:1,scaleY:1,rotation:8.8,x:3.1},3).to({regX:3,scaleX:1,scaleY:1,rotation:0,x:3,y:21.5},3,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,36,28);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.parent = this;
	this.instance.setTransform(34,55,1,1,0,0,0,34,55);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:4.5,x:34.1},4,cjs.Ease.get(-1)).to({rotation:10.2,x:34},5,cjs.Ease.get(1)).to({rotation:5},5,cjs.Ease.get(-1)).to({rotation:0},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,68,60);


(lib.Символ20_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия: 2
	this.instance_1 = new lib.Символ19();
	this.instance_1.parent = this;
	this.instance_1.setTransform(33,33,0.805,0.805,0,0,0,41,41);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({_off:false},0).to({regX:40.8,regY:40.8,scaleX:0.05,scaleY:0.05},9).wait(1));

	// Слой 1 - копия
	this.instance_2 = new lib.Символ19();
	this.instance_2.parent = this;
	this.instance_2.setTransform(33,33,0.805,0.805,0,0,0,41,41);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({_off:false},0).to({regX:40.8,regY:40.8,scaleX:0.05,scaleY:0.05},9).to({_off:true},1).wait(4));

	// Слой 1
	this.instance_3 = new lib.Символ19();
	this.instance_3.parent = this;
	this.instance_3.setTransform(33,33,0.805,0.805,0,0,0,41,41);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:40.8,regY:40.8,scaleX:0.05,scaleY:0.05},9).to({_off:true},1).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.8,-0.8,67.6,67.6);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ20_1();
	this.instance.parent = this;
	this.instance.setTransform(44.1,44.1,1,1,0,0,0,33,33);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00FF00").ss(2,1,1).p("AE7AAQAACChcBdQhdBciCAAQiCAAhchcQhchdAAiCQAAiCBchcQBchcCCAAQCCAABdBcQBcBcAACCg");
	this.shape.setTransform(44.3,43.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.instance_1 = new lib.pric();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(0,0,87,87), null);


(lib.Анимация3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ41();
	this.instance.parent = this;
	this.instance.setTransform(4.1,119,0.977,2.043,0,90,-90,41,157.3);

	this.instance_1 = new lib.Символ41();
	this.instance_1.parent = this;
	this.instance_1.setTransform(4.1,-117.9,1,2.043,90,0,0,41,157.3);

	this.instance_2 = new lib.Символ41();
	this.instance_2.parent = this;
	this.instance_2.setTransform(284.5,-1.4,1,1,0,0,180,41,157.5);

	this.instance_3 = new lib.Символ41();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-284.4,-1.4,1,1,0,0,0,41,157.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-325.4,-158.9,650.8,318);


(lib._111 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Остановить на этом кадре
		Если вставить этот код в кадр, то остановит/приостановит воспроизведение на нем.
		Также может использоваться для остановки/приостановки воспроизведения фрагментов ролика.
		*/
		
		this.stop();
	}
	this.frame_1 = function() {
		/* Остановить на этом кадре
		Если вставить этот код в кадр, то остановит/приостановит воспроизведение на нем.
		Также может использоваться для остановки/приостановки воспроизведения фрагментов ролика.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Слой 1
	this.instance = new lib.Символ47();
	this.instance.parent = this;
	this.instance.setTransform(34.1,63.5,1,1,0,0,0,125,63.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(101.8,8,260.5,149.2);


(lib.Символ52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3).call(this.frame_3).wait(4));

	// Слой 2
	this.instance = new lib.Символ46();
	this.instance.parent = this;
	this.instance.setTransform(156.6,26.5,1,1,0,0,0,154.6,26.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:86.5},3).to({y:26.5},3).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ53();
	this.instance_1.parent = this;
	this.instance_1.setTransform(138.6,92,1,1,0,0,0,138.5,15.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-156.5,y:93.5},3).to({x:138.6,y:92},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.9,7.3,310,100.1);


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Остановить на этом кадре
		Если вставить этот код в кадр, то остановит/приостановит воспроизведение на нем.
		Также может использоваться для остановки/приостановки воспроизведения фрагментов ролика.
		*/
		
		this.stop();
	}
	this.frame_1 = function() {
		/* Остановить на этом кадре
		Если вставить этот код в кадр, то остановит/приостановит воспроизведение на нем.
		Также может использоваться для остановки/приостановки воспроизведения фрагментов ролика.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Слой 1
	this.instance = new lib.Символ47();
	this.instance.parent = this;
	this.instance.setTransform(125,63.5,1,1,0,0,0,125,63.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(192.8,8,260.5,149.2);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(325.4,159);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ43, new cjs.Rectangle(0,0,650.9,318), null);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ43();
	this.instance.parent = this;
	this.instance.setTransform(325.4,159,1,1,0,0,0,325.4,159);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(71).to({alpha:1},0).to({alpha:0.699},1).to({alpha:0.5},1).to({alpha:0.301},1).to({alpha:0.102},1).wait(1).to({alpha:0},0).wait(8));

	// Слой 2
	this.instance_1 = new lib.Символ44();
	this.instance_1.parent = this;
	this.instance_1.setTransform(325.4,159,1,1,0,0,0,325.4,159);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(72).to({alpha:0.34},0).to({alpha:0},5).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,650.9,318);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5
	this.instance = new lib.Символ42();
	this.instance.parent = this;
	this.instance.setTransform(-106.2,-25.4,1,1,0,0,0,325.4,159);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 4
	this.instance_1 = new lib.Символ35();
	this.instance_1.parent = this;
	this.instance_1.setTransform(8.8,8.8,1.188,1.188,0,0,0,16.2,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 3
	this.instance_2 = new lib.Символ35();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-14.6,16.9,1,1,-90,0,0,16.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 2
	this.instance_3 = new lib.Символ35();
	this.instance_3.parent = this;
	this.instance_3.setTransform(9.7,39.4,1,1,135,0,0,16.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Слой 1
	this.instance_4 = new lib.Символ35();
	this.instance_4.parent = this;
	this.instance_4.setTransform(9.7,8.6,1,1,0,0,0,16.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ40, new cjs.Rectangle(-431.6,-184.4,650.8,318), null);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 16
	this.instance = new lib.Символ16();
	this.instance.parent = this;
	this.instance.setTransform(64.5,113,1,1,0,0,0,6.5,9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:4.3,x:64.7,y:109.6},6,cjs.Ease.get(-1)).to({regY:9.1,rotation:10.3,x:64.9,y:105},8,cjs.Ease.get(1)).to({rotation:5.3,x:64.7,y:108.8},7,cjs.Ease.get(-1)).to({regY:9,rotation:0,x:64.5,y:113},8,cjs.Ease.get(1)).wait(1));

	// Символ 31
	this.instance_1 = new lib.Символ31();
	this.instance_1.parent = this;
	this.instance_1.setTransform(75,98.5,1,1,0,0,0,75,98.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-2,x:74.7,y:94.8},6,cjs.Ease.get(-1)).to({rotation:-4.7,x:74.2,y:89.6},8,cjs.Ease.get(1)).to({rotation:-2.5,x:74.6,y:93.8},7,cjs.Ease.get(-1)).to({rotation:0,x:75,y:98.5},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,205.1,202);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 13
	this.instance = new lib.Символ32();
	this.instance.parent = this;
	this.instance.setTransform(725,183,1,1,0,0,0,102,101);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(32).to({rotation:-3,y:177.2},15).to({rotation:0,y:183},22).wait(1));

	// Слой 21
	this.instance_1 = new lib.Символ30();
	this.instance_1.parent = this;
	this.instance_1.setTransform(634.5,151,1,1,0,0,0,37.5,78);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(21).to({regX:37.6,rotation:-4,x:640.4},15).to({regX:37.5,rotation:0,x:634.5},22).wait(12));

	// Слой 19
	this.instance_2 = new lib.Символ19_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(485.5,169,1,1,0,0,0,86.5,77);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({regY:77.1,rotation:-4.7,x:497.2,y:169.1},15).to({regY:77,rotation:0,x:485.5,y:169},22).wait(24));

	// wxw
	this.instance_3 = new lib.Символ24();
	this.instance_3.parent = this;
	this.instance_3.setTransform(565.5,151,1,1,0,0,0,53.5,78);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:53.6,rotation:5.5,x:576.6,y:151.1},15).to({regX:53.5,rotation:0,x:565.5,y:151},22).wait(33));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(391.1,63.1,437,221);


(lib.Символ18_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance_1 = new lib.Символ8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.5,-0.5,1,1,0,0,0,43.5,43.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18_1, new cjs.Rectangle(-44,-44,87,87), null);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ14();
	this.instance.parent = this;
	this.instance.setTransform(203.9,93.4,1,1,-6,0,0,592.6,148);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:0,x:79,y:88.3},67).to({rotation:-6,guide:{path:[79.2,88.3,116.6,-1.2,226,93.4]}},7).to({x:203.9},8).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ51();
	this.instance_1.parent = this;
	this.instance_1.setTransform(186.1,163.2,1,1,0,0,0,187.2,25.4);
	this.instance_1.alpha = 0.512;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:64.6},67).to({x:208.2,alpha:0.281},7).to({x:186.1,alpha:0.512},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.1,8.9,460.7,211.6);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 5
	this.instance = new lib.Символ5();
	this.instance.parent = this;
	this.instance.setTransform(68,60,1,1,0,0,0,54,60);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:54.1,scaleX:1,scaleY:1.04,rotation:-1.8,x:69.9,y:61.4},7,cjs.Ease.get(-1)).to({regX:54.2,regY:60.2,scaleX:0.99,scaleY:1.09,rotation:-3.9,x:71.6,y:62.9},8,cjs.Ease.get(1)).to({scaleX:1,scaleY:1.04,rotation:-1.8,x:69.8,y:61.5},7,cjs.Ease.get(-1)).to({regX:54,regY:60,scaleX:1,scaleY:1,rotation:0,x:68,y:60},7,cjs.Ease.get(1)).wait(1));

	// Символ 3
	this.instance_1 = new lib.Символ3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(92.5,142.5,1,1,0,0,0,28.5,56.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:28.6,rotation:2.8,x:95},7,cjs.Ease.get(-1)).to({regX:28.5,regY:56.6,rotation:6,x:97.5,y:142.6},8,cjs.Ease.get(1)).to({rotation:2.8,x:95.1},7,cjs.Ease.get(-1)).to({regY:56.5,rotation:0,x:92.5,y:142.5},7,cjs.Ease.get(1)).wait(1));

	// Слой 5
	this.instance_2 = new lib.Символ33();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-259.4,110.9,1,1,0,0,0,35.3,91.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(30));

	// Символ 4
	this.instance_3 = new lib.Символ4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(38.5,128,1,1,0,0,0,38.5,38);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:38.1,scaleX:1.04,scaleY:0.98,x:40,y:128.8},7,cjs.Ease.get(-1)).to({regY:38,scaleX:1.08,scaleY:0.96,x:41.8,y:129.6},8,cjs.Ease.get(1)).to({scaleX:1.04,scaleY:0.98,x:40.2,y:128.9},7,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:38.5,y:128},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-308.8,0,460.8,240.1);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5
	this.instance = new lib.Символ11();
	this.instance.parent = this;
	this.instance.setTransform(406,246,1,1,0,0,0,22,19);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ10();
	this.instance_1.parent = this;
	this.instance_1.setTransform(441,63,1,1,0,0,0,18,14);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 4
	this.instance_2 = new lib.Символ6();
	this.instance_2.parent = this;
	this.instance_2.setTransform(284,39,1,1,0,0,0,34,30);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 8
	this.instance_3 = new lib.Символ13();
	this.instance_3.parent = this;
	this.instance_3.setTransform(302,189.5,1,1,0,0,0,61,99.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Слой 1
	this.instance_4 = new lib.Символ2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(386,166,1,1,0,0,0,131,123);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AD0505").s().p("AjPE+QgVgGgagOQhpgQhhgcIgqgNQgkgEgdgGQg1gMg6geQg5gegdgaQgYgVgVgbQgvAKgsAAQgzAAgegPQgVgKgegbQgXgWgIgTQgGgPgCgfQgEguAEgaQAGgpAWgYQAXgYAjgFQASgDAYAEIArAGQAVACAiABIAGABIAHgPQAQgeAbgTQAdgVAfAAQAVAAAUAKQANAGAKAJQAhgSAcgMQA/gbA5gIQApgFAWAHQAbAHAUAVQAUAWAFAbIACAPIBdAvQAjASAZAIQAXAHASgCQAPgCAUgLIAhgSQAagLAdADQAdAEAWARQAXARALAcQALAcgFAbQgCAMgFAKIAcgMQBPghBZgHQAJgiAmgVQAagOAtgIQBygWCSgDIARABQAOgPAUgNQAggVAmgJQAmgJAlAFQATACAaAIIAsAOIAsAMQAZAIARAJQAbAPARAaQATAaADAdQAEAfgMAdQgNAdgaARQgSALgeAFQgGAJgIAIQgNANgWARQgxAmgqAQQguARhBABQhTAChugVIAAAAIhCAkQgnAUgdAIQgcAJgyAFQg4AHgXAFQgPAEgdAJIghAKQgRAKgVAKQhGAbghARIgjATQgVALgQAFQgYAHg0AAQg2gBgagIg");
	this.shape.setTransform(345.3,268);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(-67.8,9,584.8,321.1), null);


(lib.Символ21_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance_1 = new lib.Символ18_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(43.5,43.5,1,1,0,0,0,43.5,43.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:89.4},11,cjs.Ease.get(-1)).to({x:143.5},13,cjs.Ease.get(1)).to({x:91.5},13,cjs.Ease.get(-1)).to({x:43.5},12,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44,-44,87,87);


(lib.Символ69 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.parent = this;
	this.instance.setTransform(365.6,247.3,0.949,0.949,0,0,0,131,123);

	this.instance_1 = new lib.fon();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ69, new cjs.Rectangle(0,0,985,443.8), null);


(lib.Символ68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Остановить на этом кадре
		Если вставить этот код в кадр, то остановит/приостановит воспроизведение на нем.
		Также может использоваться для остановки/приостановки воспроизведения фрагментов ролика.
		*/
		
		this.stop();
	}
	this.frame_4 = function() {
		/* Остановить на этом кадре
		Если вставить этот код в кадр, то остановит/приостановит воспроизведение на нем.
		Также может использоваться для остановки/приостановки воспроизведения фрагментов ролика.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(5));

	// Слой 2
	this.instance = new lib.Символ70();
	this.instance.parent = this;
	this.instance.setTransform(147,265.1,1,1,0,0,0,62,170.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.859},4).to({alpha:0},4).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ69();
	this.instance_1.parent = this;
	this.instance_1.setTransform(492.5,235.7,1,1,0,0,0,492.5,235.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:235.6,scaleX:1.29,scaleY:1.29,x:591.7,y:234.7},4).to({regY:235.7,scaleX:1,scaleY:1,x:492.5,y:235.7},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,985,451.2);


(lib.Символ22_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance_1 = new lib.Символ21_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(43.5,43.5,1,1,0,0,0,43.5,43.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:91.8},14,cjs.Ease.get(-1)).to({y:143.5},15,cjs.Ease.get(1)).to({y:90.2},16,cjs.Ease.get(-1)).to({y:43.5},14,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44,-44,87,87);


(lib.Символ23копия = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ22_1();
	this.instance.parent = this;
	this.instance.setTransform(43.5,-36.5,1,1,0,0,0,43.5,43.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ23_1 = function(mode,startPosition,loop) {
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
	this.instance_1 = new lib.Символ22_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(43.5,43.5,1,1,0,0,0,43.5,43.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44,-44,87,87);


// stage content:
(lib.bdsm2_640x305 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		stage.canvas.style.cursor = "none";
		
		
		this.movieClip_1.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
			this.pricel.x = stage.mouseX/window.devicePixelRatio;;
			this.pricel.y = stage.mouseY/window.devicePixelRatio;;
			this.movieClip_1.x = stage.mouseX/window.devicePixelRatio;;
		}
		
		
		var _this = this;
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		function fl_MouseOverHandler_5() {
			_this.movieClip_2.gotoAndStop(1);
			_this.movieClip_1.gotoAndStop(1);
			_this.prr.gotoAndStop(1);
			_this.pricel.gotoAndStop(1);
			_this.txx.gotoAndPlay(1);
			_this.scen.gotoAndPlay(1);
		}
		
		
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		function fl_MouseOutHandler_2() {
			_this.movieClip_2.gotoAndStop(0);
			_this.movieClip_1.gotoAndStop(0);
			_this.prr.gotoAndStop(0);
			_this.pricel.gotoAndStop(0);
			_this.txx.gotoAndPlay(4);
			_this.scen.gotoAndPlay(5);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 3
	this.pricel = new lib.Символ23копия();
	this.pricel.parent = this;
	this.pricel.setTransform(787.7,129,1,1,0,0,0,43.5,43.5);

	this.prr = new lib.Символ23_1();
	this.prr.parent = this;
	this.prr.setTransform(322.6,139,1,1,0,0,0,43.5,43.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.prr},{t:this.pricel}]}).wait(1));

	// gun
	this.movieClip_1 = new lib._111();
	this.movieClip_1.parent = this;
	this.movieClip_1.setTransform(378.9,246.5,1,1,0,0,0,125,63.5);

	this.movieClip_2 = new lib.Символ49();
	this.movieClip_2.parent = this;
	this.movieClip_2.setTransform(336,246.5,1,1,0,0,0,125,63.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.movieClip_2},{t:this.movieClip_1}]}).wait(1));

	// Слой 2
	this.txx = new lib.Символ52();
	this.txx.parent = this;
	this.txx.setTransform(173.6,2.4,1,1,0,0,0,163.6,56.7);

	this.timeline.addTween(cjs.Tween.get(this.txx).wait(1));

	// Слой 1
	this.instance = new lib.Символ40();
	this.instance.parent = this;
	this.instance.setTransform(438.7,196,1,1,0,0,0,14,17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 9
	this.scen = new lib.Символ68();
	this.scen.parent = this;
	this.scen.setTransform(381.5,120.7,1,1,0,0,0,492.5,235.7);

	this.timeline.addTween(cjs.Tween.get(this.scen).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(209,37.5,985,455.2);
// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bod.png?1478767704635", id:"bod"},
		{src:"images/d1.png?1478767704635", id:"d1"},
		{src:"images/d4.png?1478767704635", id:"d4"},
		{src:"images/d5.png?1478767704635", id:"d5"},
		{src:"images/d6.png?1478767704635", id:"d6"},
		{src:"images/d7.png?1478767704635", id:"d7"},
		{src:"images/fon.jpg?1478767704635", id:"fon"},
		{src:"images/g1.png?1478767704635", id:"g1"},
		{src:"images/g2.png?1478767704635", id:"g2"},
		{src:"images/g3.png?1478767704635", id:"g3"},
		{src:"images/g7.png?1478767704635", id:"g7"},
		{src:"images/gun.png?1478767704635", id:"gun"},
		{src:"images/hand.png?1478767704635", id:"hand"},
		{src:"images/hat.png?1478767704635", id:"hat"},
		{src:"images/led.png?1478767704635", id:"led"},
		{src:"images/led5.png?1478767704635", id:"led5"},
		{src:"images/pric.png?1478767704635", id:"pric"},
		{src:"images/sock.png?1478767704635", id:"sock"},
		{src:"images/wpod.png?1478767704635", id:"wpod"},
		{src:"images/wxw.png?1478767704635", id:"wxw"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;