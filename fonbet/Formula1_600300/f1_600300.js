(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,305);


(lib.blik = function() {
	this.initialize(img.blik);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,36,128);


(lib.btn = function() {
	this.initialize(img.btn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,317,79);


(lib.flg = function() {
	this.initialize(img.flg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,147);


(lib.formula = function() {
	this.initialize(img.formula);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,238,37);


(lib.girl = function() {
	this.initialize(img.girl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,276,328);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,63);


(lib.stav1 = function() {
	this.initialize(img.stav1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,157,20);


(lib.t1 = function() {
	this.initialize(img.t1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,308,64);


(lib.t2 = function() {
	this.initialize(img.t2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,277,62);


(lib.t3 = function() {
	this.initialize(img.t3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,282,80);


(lib.tvoego = function() {
	this.initialize(img.tvoego);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,168,37);


(lib.viigr = function() {
	this.initialize(img.viigr);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,271,35);// helper functions:

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


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.flg();
	this.instance.parent = this;
	this.instance.setTransform(65.7,11.7,0.538,0.538,153.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ43, new cjs.Rectangle(-65.7,-59.3,131.5,118.6), null);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#EE0000","#FF4F4F"],[0,1],0.3,33.4,0.3,-28.3).s().p("AyZEcQg/ABAAhAIAAm+QABg6A+AAMAkzAAAQA+AAABA6IAAG+QAABAg/gBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ42, new cjs.Rectangle(-124.1,-28.4,248.3,56.9), null);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B0D00").s().p("AgTPFIAA+JIAnAAIAAeJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ40, new cjs.Rectangle(-2,-96.5,4,193.1), null);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AM4CXIAFiuIhkCuIgfAAIgritIg0CtIhOAAIBjktIBNAAIAjChIBaihIBOAAIgBEtgAGdCXIAwktIBOAAIgwEtgACrCXIAvktIBOAAIgRBxIAeAAQAhAAAZALQArATAAAtIgBASQgKA8g1AWQgcANgnAAgAECBbIAVAAQAuAAAGgjIAAgHQAAgcgoAAIgWAAgAhjCXIAwktIBuAAQBPAAAAA9IgBASQgHAtgkARQAzAJAAAvIgBASQgHApggAWQghAXg0AAgAgLBbIAVAAQAyAAAFggIABgHQAAgagmAAIgdAAgAAIgfIAKAAQApAAAEgeIABgGQAAgXgkAAIgLAAgAlrCXIAwktIB3AAQAvAAAZAUQAYAUAAAnIgBAUQgQBmhrAAIgtAAIgQBkgAkDgMIAYAAQAZAAAMgIQAMgJADgUIABgKQAAgcgqAAIgXAAgApGCXIAvktICsAAIgLBDIhdAAIgIAyIBZAAIgLBCIhZAAIgIAzIBeAAIgLBDgArICXIAljrIhxAAIglDrIhOAAIAvktIEOAAIgwEtg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ39, new cjs.Rectangle(-90.4,-15,180.9,30.2), null);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AM4CXIAFiuIhkCuIgfAAIgritIg0CtIhOAAIBjktIBNAAIAjChIBaihIBOAAIgBEtgAGdCXIAwktIBOAAIgwEtgACrCXIAvktIBOAAIgRBxIAeAAQAhAAAZALQAWAJAKARQAFAGADAIIAAACQADAKAAAMIgBASQgKA8g1AWQgcANgnAAgAECBbIAVAAQAuAAAGgjIAAgHQAAgcgoAAIgWAAgAhjCXIAwktIBuAAQBPAAAAA9IgBASQgHAtgkARQAPACALAHQALAFAGAJIABACQAHANAAASIgBASQgHApggAWQghAXg0AAgAgLBbIAVAAQAyAAAFggIABgHQAAgagmAAIgdAAgAAIgfIAKAAQApAAAEgeIABgGQAAgXgkAAIgLAAgAlrCXIAwktIB3AAQAvAAAZAUQAYAUAAAnIgBAUQgFAegMAVQgFAHgGAHIgCACQgfAjg+AAIgtAAIgQBkgAkDgMIAYAAQAZAAAMgIQAMgJADgUIABgKQAAgcgqAAIgXAAgApGCXIAvktICsAAIgLBDIhdAAIgIAyIBZAAIgLBCIhZAAIgIAzIBeAAIgLBDgArICXIAljrIhxAAIglDrIhOAAIAvktIEOAAIgwEtg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ38, new cjs.Rectangle(-90.4,-15,180.9,30.2), null);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ADQC1IAKg9IirAAIgKA9IhEAAIAUh/QAbAAARgfQANgYAHgwIAViDIDkAAIglDqIAfAAIgUB/gAB5gSQgJA3geARIBoAAIAbioIhMAAgAE6B4IAwksIBOAAIgSBwIAnAAQAhAAAZALQArATABAuIgCASQgKA7g1AXQgdAMgnAAgAGSA8IAdAAQAuAAAFgiIABgIQAAgbgoAAIgeAAgAj0B4IA2hTIhOjZIBfAAIApCEIBHiEIBVAAIi1EsgAoyB4IAwksIDPAAIgLBCIiAAAIgIAuIAmAAQAiAAAZALQArATABAuIgDASQgIA7g2AXQgcAMgnAAgAnaA8IAdAAQAuAAAGgiIAAgIQAAgbgpAAIgdAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ37, new cjs.Rectangle(-56.2,-18.1,112.5,36.3), null);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADQC1IAKg9IirAAIgKA9IhEAAIAUh/QAbAAARgfQAGgNAGgSIACgHIAGgiIAViDIDkAAIglDqIAfAAIgUB/gAB5gSIAAADIgBAHQgLAugbAQIBoAAIAbioIhMAAgAE6B4IAwksIBOAAIgSBwIAnAAQAhAAAZALQAfAOAJAcIACAHQABAIABAIIgCASQgKA7g1AXQgdAMgnAAgAGdgIIgLBEIAdAAQAuAAAFgiIABgIQAAgVgbgFIgNgBIgeAAgAj0B4IA2hTIhOjZIBfAAIApCEIBHiEIBVAAIi1EsgAoyB4IAwksIDPAAIgLBCIiAAAIgIAuIAmAAQAiAAAZALQAfAOAJAcIACAHQACAIAAAIIgDASQgIA7g2AXQgcAMgnAAgAnPgIIgLBEIAdAAQAuAAAGgiIAAgIQAAgVgbgFIgOgBIgdAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ36, new cjs.Rectangle(-56.2,-18.1,112.5,36.3), null);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","#000000"],[0,1],-412.5,0,412.5,0).s().p("EhAdAipMAAAhFRMCA7AAAMAAABFRg");
	this.shape.setTransform(-90.5,-52);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ32, new cjs.Rectangle(-503,-273.7,825.2,443.4), null);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.formula();
	this.instance.parent = this;
	this.instance.setTransform(-119,-18.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ31, new cjs.Rectangle(-119,-18.5,238,37), null);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tvoego();
	this.instance.parent = this;
	this.instance.setTransform(-84,-18.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ30, new cjs.Rectangle(-84,-18.5,168,37), null);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.viigr();
	this.instance.parent = this;
	this.instance.setTransform(-135.5,-17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ29, new cjs.Rectangle(-135.5,-17.5,271,35), null);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-100,-31.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ27, new cjs.Rectangle(-100,-31.5,200,63), null);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.blik();
	this.instance.parent = this;
	this.instance.setTransform(28.7,-94.2,1.446,1.446,26.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ25, new cjs.Rectangle(-55.2,-94.2,130.3,188.7), null);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CC00").s().p("Aw2EfIAAo9MAhtAAAIAAI9g");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B1B0E").s().p("ABXAQQgSgJABgBIATgOQARgNAcAAQAcAAATAGQAUAFAAAIQAAAGgUAIQgTAHgcACIgNABQgTAAgPgGgAiFAVQgcgCgTgHQgUgIAAgGQAAgIAUgFQATgGAcAAQAcAAARANIATAOQABABgSAJQgPAGgTAAIgNgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(-20,-2.2,40.1,4.4), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl();
	this.instance.parent = this;
	this.instance.setTransform(-130.4,-155,0.945,0.945);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(-130.4,-155,261,310.1), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.t1();
	this.instance.parent = this;
	this.instance.setTransform(-110,-23,0.714,0.714);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(-110,-23,220,45.7), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.t2();
	this.instance.parent = this;
	this.instance.setTransform(-95,-21,0.69,0.69);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(-95,-21,191,42.8), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.t3();
	this.instance.parent = this;
	this.instance.setTransform(-96,-27,0.681,0.681);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(-96,-27,192,54.5), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(-300,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(-300,-150,640,305), null);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ42();
	this.instance.parent = this;
	this.instance.filters = [new cjs.BlurFilter(66, 66, 1)];
	this.instance.cache(-126,-30,252,61);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ48, new cjs.Rectangle(-157.1,-61.4,318,126), null);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ43();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ44, new cjs.Rectangle(-65.7,-59.3,131.5,118.6), null);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ38();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ39();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0.8);
	this.instance_1.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance_1.cache(-92,-17,185,34);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ35, new cjs.Rectangle(-92.4,-16.3,188,37), null);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ36();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ37();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0.7);
	this.instance_1.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance_1.cache(-58,-20,117,40);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ34, new cjs.Rectangle(-58.2,-19.4,120,43), null);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 35
	this.instance = new lib.Символ35();
	this.instance.parent = this;
	this.instance.setTransform(-0.1,22.4,1,1,0,0,0,-0.1,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.9,scaleY:0.9},9,cjs.Ease.get(-1)).to({scaleX:0.79,scaleY:0.79},10,cjs.Ease.get(1)).to({scaleX:0.9,scaleY:0.9,y:22.5},10,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,y:22.4},10,cjs.Ease.get(1)).wait(1));

	// Символ 34
	this.instance_1 = new lib.Символ34();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-28.5,1,1,0,0,0,0,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:0.3,scaleX:1.13,scaleY:1.13,y:-28.6},9,cjs.Ease.get(-1)).to({regY:0.4,scaleX:1.28,scaleY:1.28,y:-28.5},10,cjs.Ease.get(1)).to({scaleX:1.14,scaleY:1.14},10,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92.4,-48.3,188,92.1);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// viigr.png
	this.instance = new lib.Символ29();
	this.instance.parent = this;
	this.instance.setTransform(-0.5,56.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({x:-288.5},0).to({x:5.5,alpha:1},9).to({x:-14.5},3).wait(28).to({x:5.5},3).to({x:-94.5,alpha:0},6).wait(5));

	// tvoego.png
	this.instance_1 = new lib.Символ30();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,6.5);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({x:-288},0).to({x:57,alpha:1},9).to({x:37},3).wait(35).to({x:57},3).to({x:-43,alpha:0},6).wait(3));

	// formula.png
	this.instance_2 = new lib.Символ31();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-40.5);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:-288},0).to({x:22,alpha:1},9).to({x:2},3).wait(42).to({x:22},3).to({x:-78,alpha:0},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136,-59,271,133);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AuoDiQgwAAgBgvIAAliQgBgyAyAAIdQAAQAzAAAAAyIAAFiQgCAvgxAAg");
	mask.setTransform(29.4,-1.5);

	// Символ 18
	this.instance = new lib.Символ25();
	this.instance.parent = this;
	this.instance.setTransform(-124.9,0);
	this.instance.alpha = 0.738;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:164.7},29).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69.2,-24.1,19.4,45.2);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ27();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.19,scaleY:1.19},4,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},4,cjs.Ease.get(1)).to({scaleX:1.19,scaleY:1.19},4,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},4,cjs.Ease.get(1)).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-31.5,200,63);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 13 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AlYAwIAAiFIKyAAIAACFg");
	var mask_graphics_1 = new cjs.Graphics().p("AlYA4IAAiFIKyAAIAACFg");
	var mask_graphics_2 = new cjs.Graphics().p("AlYBAIAAiFIKyAAIAACFg");
	var mask_graphics_3 = new cjs.Graphics().p("AlYBDIAAiFIKyAAIAACFg");
	var mask_graphics_4 = new cjs.Graphics().p("AlYBDIAAiFIKyAAIAACFg");
	var mask_graphics_5 = new cjs.Graphics().p("AlYBDIAAiFIKyAAIAACFg");
	var mask_graphics_6 = new cjs.Graphics().p("AlYBDIAAiFIKyAAIAACFg");
	var mask_graphics_7 = new cjs.Graphics().p("AlYBDIAAiFIKyAAIAACFg");
	var mask_graphics_8 = new cjs.Graphics().p("AlYBAIAAiFIKyAAIAACFg");
	var mask_graphics_9 = new cjs.Graphics().p("AlYA4IAAiFIKyAAIAACFg");
	var mask_graphics_10 = new cjs.Graphics().p("AlYAwIAAiFIKyAAIAACFg");
	var mask_graphics_11 = new cjs.Graphics().p("AlYA4IAAiFIKyAAIAACFg");
	var mask_graphics_12 = new cjs.Graphics().p("AlYBAIAAiFIKyAAIAACFg");
	var mask_graphics_13 = new cjs.Graphics().p("AlYBDIAAiFIKyAAIAACFg");
	var mask_graphics_14 = new cjs.Graphics().p("AlYBDIAAiFIKyAAIAACFg");
	var mask_graphics_15 = new cjs.Graphics().p("AlYBDIAAiFIKyAAIAACFg");
	var mask_graphics_16 = new cjs.Graphics().p("AlYBDIAAiFIKyAAIAACFg");
	var mask_graphics_17 = new cjs.Graphics().p("AlYBDIAAiFIKyAAIAACFg");
	var mask_graphics_18 = new cjs.Graphics().p("AlYBAIAAiFIKyAAIAACFg");
	var mask_graphics_19 = new cjs.Graphics().p("AlYA4IAAiFIKyAAIAACFg");
	var mask_graphics_20 = new cjs.Graphics().p("AlYAwIAAiFIKyAAIAACFg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-0.7,y:-8.6}).wait(1).to({graphics:mask_graphics_1,x:-0.9,y:-7.8}).wait(1).to({graphics:mask_graphics_2,x:-1.1,y:-7}).wait(1).to({graphics:mask_graphics_3,x:-1.3,y:-5.8}).wait(1).to({graphics:mask_graphics_4,x:-1.5,y:-4.2}).wait(1).to({graphics:mask_graphics_5,x:-1.6,y:-2.5}).wait(1).to({graphics:mask_graphics_6,x:-1.5,y:-4.2}).wait(1).to({graphics:mask_graphics_7,x:-1.3,y:-5.8}).wait(1).to({graphics:mask_graphics_8,x:-1.1,y:-7}).wait(1).to({graphics:mask_graphics_9,x:-0.9,y:-7.8}).wait(1).to({graphics:mask_graphics_10,x:-0.7,y:-8.6}).wait(1).to({graphics:mask_graphics_11,x:-0.9,y:-7.8}).wait(1).to({graphics:mask_graphics_12,x:-1.1,y:-7}).wait(1).to({graphics:mask_graphics_13,x:-1.3,y:-5.8}).wait(1).to({graphics:mask_graphics_14,x:-1.5,y:-4.2}).wait(1).to({graphics:mask_graphics_15,x:-1.6,y:-2.5}).wait(1).to({graphics:mask_graphics_16,x:-1.5,y:-4.2}).wait(1).to({graphics:mask_graphics_17,x:-1.3,y:-5.8}).wait(1).to({graphics:mask_graphics_18,x:-1.1,y:-7}).wait(1).to({graphics:mask_graphics_19,x:-0.9,y:-7.8}).wait(1).to({graphics:mask_graphics_20,x:-0.7,y:-8.6}).wait(24));

	// Символ 12
	this.instance = new lib.Символ12();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(44));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ11();
	this.instance.parent = this;
	this.instance.setTransform(-56.6,-92);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ10();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(-130.4,-155,261,310.1), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// t3.png
	this.instance = new lib.Символ5();
	this.instance.parent = this;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(36).to({_off:false},0).to({x:971.4},8).to({_off:true},11).wait(21));

	// t2.png
	this.instance_1 = new lib.Символ6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.5,0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(27).to({_off:false},0).to({x:1196.3,y:-1},8).wait(14).to({x:0.5,y:0},0).to({x:1196.3,y:-1},8).to({_off:true},1).wait(18));

	// t1.png
	this.instance_2 = new lib.Символ7();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:971.4},9).wait(58).to({x:0},0).to({x:971.4},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110,-23,220,45.7);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.parent = this;
	this.instance.setTransform(596,0);

	this.instance_1 = new lib.Символ1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-2,0,1,1,0,0,180);

	this.instance_2 = new lib.Символ1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-600,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(-900,-150,1836,305), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.parent = this;
	this.instance.setTransform(600,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-595.7},24).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-300,-150,1836,305);


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ48();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ49, new cjs.Rectangle(-157.1,-61.4,318,126), null);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ44();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ45, new cjs.Rectangle(-65.7,-59.3,131.5,118.6), null);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ40();
	this.instance.parent = this;
	this.instance.setTransform(68.5,90.5,1,1,-30,0,0,0,96.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:2.5,y:90.6},7,cjs.Ease.get(-1)).to({rotation:35.2,y:90.5},7,cjs.Ease.get(1)).to({rotation:4.8,y:90.7},7,cjs.Ease.get(-1)).to({rotation:-30,y:90.5},8,cjs.Ease.get(1)).wait(3).to({rotation:-30},0).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ45();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-58.9,-26.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:-0.1,regY:-0.1,scaleX:1.31,scaleY:1.21,skewX:22.1,skewY:51.5,x:30.7,y:-74.1},7,cjs.Ease.get(-1)).to({regX:0.1,regY:-0.2,scaleX:1.42,scaleY:1.29,skewX:49.6,skewY:88.6,x:128,y:-69.9},7).to({regX:0,regY:-0.1,scaleX:1,skewX:226.6,skewY:265.6,x:166.2,y:4},2,cjs.Ease.get(1)).to({regY:0,scaleX:1.4,scaleY:1.29,skewX:199.7,skewY:238.9,x:126.1,y:-11.6},5,cjs.Ease.get(-1)).to({regX:0.1,regY:-0.1,scaleX:1,scaleY:1.29,skewX:168.6,skewY:207.7,x:25.9,y:-30},8,cjs.Ease.get(1)).to({regX:0,regY:0,scaleY:1,skewX:0,skewY:360,x:-58.9,y:-26.1},3,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-124.7,-85.4,195,177);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ19();
	this.instance.parent = this;
	this.instance.setTransform(-29.4,1.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#EE0000","#FF4F4F"],[0,1],0.3,26.6,0.3,-22.5).s().p("AuoDiQgxAAAAgyIAAliQABgvAwAAIdRAAQAwAAABAvIAAFiQAAAygxAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(-209.5,-92.7,308.2,188.7), null);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ22();
	this.instance.parent = this;
	this.instance.setTransform(0,-1.6,1,1.017);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#560000").s().p("AuoAkQgxAAAAgxIAAgWQABAuAwAAIdRAAQAwAAABguIAAAWQAAAxgxAAg");
	this.shape.setTransform(0,20.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ21, new cjs.Rectangle(-209.5,-95.8,308.2,191.8), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// stav-1.png
	this.instance = new lib.stav1();
	this.instance.parent = this;
	this.instance.setTransform(-50,-5,0.637,0.637);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 21
	this.instance_1 = new lib.Символ21();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1 - копия
	this.instance_2 = new lib.Символ49();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(-209.5,-94.4,370.4,191.8), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-9.7},19,cjs.Ease.get(-1)).to({y:-20},20,cjs.Ease.get(1)).to({y:-10.5},19,cjs.Ease.get(-1)).to({y:0},21,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-130.4,-155,261,310.1);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ41();
	this.instance.parent = this;
	this.instance.setTransform(151.8,-39.6,1.53,1.53,0,0,0,0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ46, new cjs.Rectangle(-39.3,-170.1,298.3,270.8), null);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.893,0.893);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ26, new cjs.Rectangle(-116.4,-138.4,233,276.8), null);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(5));

	// Слой 1
	this.instance = new lib.Символ20();
	this.instance.parent = this;
	this.instance.setTransform(0,-1.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},4).wait(1).to({alpha:0},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-209.5,-95.8,370.4,191.8);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.green = new lib.Символ23();
	this.green.parent = this;
	this.green.setTransform(0.2,0.4);

	this.timeline.addTween(cjs.Tween.get(this.green).wait(1));

	// btn.png
	this.instance = new lib.btn();
	this.instance.parent = this;
	this.instance.setTransform(-101.1,-25.2,0.638,0.638);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(-209.4,-95.5,370.4,191.8), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.btn_move = new lib.Символ17();
	this.btn_move.parent = this;
	this.btn_move.setTransform(0,22.8,1,1,0,0,0,0,22.8);

	this.timeline.addTween(cjs.Tween.get(this.btn_move).to({scaleX:1.07,scaleY:1.07,y:22.9},14,cjs.Ease.get(-1)).to({regY:22.7,scaleX:1.15,scaleY:1.15,y:22.7},15,cjs.Ease.get(1)).to({scaleX:1.07,scaleY:1.07,y:22.9},15,cjs.Ease.get(-1)).to({regY:22.8,scaleX:1,scaleY:1,y:22.8},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-209.4,-95.5,370.4,191.8);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ46();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-8.5},6,cjs.Ease.get(-1)).to({y:-20},8,cjs.Ease.get(1)).to({y:-10.6},7,cjs.Ease.get(-1)).to({y:0},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.3,-170.1,298.3,270.8);


(lib.Символ16 = function(mode,startPosition,loop) {
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

	// Слой 1
	this.btn1 = new lib.Символ15();
	this.btn1.parent = this;
	this.btn1.setTransform(0,95);

	this.timeline.addTween(cjs.Tween.get(this.btn1).to({y:-10},5).to({y:0},2).wait(1).to({y:-10},2).to({y:95},5).wait(1));

	// Слой 5
	this.instance = new lib.Символ33();
	this.instance.parent = this;
	this.instance.setTransform(-90.2,-97.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:1.3,y:-92.1,alpha:1},7,cjs.Ease.get(1)).wait(1).to({x:-90.2,y:-97.1,alpha:0},7,cjs.Ease.get(1)).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ26();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-279.6,-68.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.12,scaleY:1.12,x:-222.3,y:-65.6},7,cjs.Ease.get(1)).wait(1).to({scaleX:1,scaleY:1,x:-279.6,y:-68.6},7,cjs.Ease.get(1)).wait(1));

	// Слой 6
	this.instance_2 = new lib.Символ47();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-478.2,6.4);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1},7).wait(1).to({alpha:0},7).wait(1));

	// Слой 4
	this.instance_3 = new lib.Символ28();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-0.5,-56.5,0.889,0.889);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:0.77,scaleY:0.77,y:-96.5,alpha:0},7,cjs.Ease.get(1)).wait(1).to({scaleX:0.89,scaleY:0.89,y:-56.5,alpha:1},7).wait(1));

	// Слой 7
	this.instance_4 = new lib.Символ32();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-64.1,-64.3,0.752,0.704,0,0,0,-0.1,-0.3);
	this.instance_4.alpha = 0.609;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-517.5,-256.9,695.6,448.2);


// stage content:
(lib.f1_600300 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		var _this = this;
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		  function fl_MouseOverHandler_5()
		{
		    _this.btn.gotoAndPlay(1);
		}
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		  function fl_MouseOutHandler_2()
		{
		    _this.btn.gotoAndPlay(9);
		}
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.button.addEventListener("mouseover", fl_MouseOverHandler_22);
		
		function fl_MouseOverHandler_22()
		{
			_this.btn.btn1.btn_move.green.gotoAndPlay(1);
		}
		
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.button.addEventListener("mouseout", fl_MouseOutHandler_33);
		
		function fl_MouseOutHandler_33()
		{
			_this.btn.btn1.btn_move.green.gotoAndPlay(6);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 6
	this.button = new lib.Символ24();
	this.button.parent = this;
	this.button.setTransform(426.7,248.5);
	new cjs.ButtonHelper(this.button, 0, 1, 2, false, new lib.Символ24(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button).wait(1));

	// Слой 4
	this.instance = new lib.Символ14();
	this.instance.parent = this;
	this.instance.setTransform(427,54.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 5
	this.btn = new lib.Символ16();
	this.btn.parent = this;
	this.btn.setTransform(427.1,249.2);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-145.9,243);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(300,149.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(44.1,142.3,2092,448.2);
// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg?1496393556895", id:"bg"},
		{src:"images/blik.png?1496393556895", id:"blik"},
		{src:"images/btn.png?1496393556895", id:"btn"},
		{src:"images/flg.png?1496393556895", id:"flg"},
		{src:"images/formula.png?1496393556895", id:"formula"},
		{src:"images/girl.png?1496393556895", id:"girl"},
		{src:"images/logo.png?1496393556895", id:"logo"},
		{src:"images/stav1.png?1496393556895", id:"stav1"},
		{src:"images/t1.png?1496393556895", id:"t1"},
		{src:"images/t2.png?1496393556895", id:"t2"},
		{src:"images/t3.png?1496393556895", id:"t3"},
		{src:"images/tvoego.png?1496393556895", id:"tvoego"},
		{src:"images/viigr.png?1496393556895", id:"viigr"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;