(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,753,365);


(lib.body = function() {
	this.initialize(img.body);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,208,239);


(lib.book = function() {
	this.initialize(img.book);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,402,293);


(lib.bookmm = function() {
	this.initialize(img.bookmm);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,402,281);


(lib.button = function() {
	this.initialize(img.button);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,238,101);


(lib.for_03 = function() {
	this.initialize(img.for_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,188,195);


(lib.for_06 = function() {
	this.initialize(img.for_06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,65,54);


(lib.for_10 = function() {
	this.initialize(img.for_10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,72,64);


(lib.for_13 = function() {
	this.initialize(img.for_13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,51,39);


(lib.for_16 = function() {
	this.initialize(img.for_16);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,43,40);


(lib.for_19 = function() {
	this.initialize(img.for_19);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,51,42);


(lib.head = function() {
	this.initialize(img.head);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,60,67);


(lib.hend = function() {
	this.initialize(img.hend);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,99,81);


(lib.man = function() {
	this.initialize(img.man);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,191,340);


(lib.rali = function() {
	this.initialize(img.rali);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,13,385);


(lib.sloRa1 = function() {
	this.initialize(img.sloRa1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,128,753);


(lib.svett = function() {
	this.initialize(img.svett);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,134,125);


(lib.xlog2 = function() {
	this.initialize(img.xlog2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,379,40);// helper functions:

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


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFF99","rgba(255,204,0,0)"],[0,1],-21.3,138.3,21.4,-138.3).s().p("Ak521ILaB0MgLUAryIhtAFg");
	this.shape.setTransform(41.7,146.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ30, new cjs.Rectangle(0,0,83.3,292.3), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmaGzQgggKgIgHQgIgHAAgPQAAgFADgHIgEAGQBNiqARh0QAKgRAGgPQASgwAWguQAHgRALggQALgfAHgQQAOgeAegiIAaggQAAgHgGgHIAAAAQANgVAJgdQAVhFAcgLQAIgRAigOQAXgJAcgJQAGgbAgAAQAfAAAAAfQAfAOA+ALQAiAHAAAVIAAAEIAGAGQgDAGAAAIQAAAXAeBSIAkBkQAXBSANAkQAFABAEAIQAIAAAOAMQASAQAfAqQASAdACA/QABAOAYAfQAYAgABAPQAAAGAHAgIAvBKIgsg7QAFAbAAAJQAAAGgEAGQgCADgDACQARAMAAAIQAAAGgFAGQgGAHgHAAIiUAAQghACgTACIggADIipABQgOACh3AHIjSANgAmBEjIAcghIAEgJIggAqgAgyi9IADAAIgBgCIgCACgAhOlsIgFAEQAHgCAIgFIgKADgAAWltIABgCIgCgBIABADgAFaifIAAAAIAAADIAAgDg");
	this.shape.setTransform(41.6,40.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(-4.4,-2.7,92.1,87), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sloRa1();
	this.instance.parent = this;
	this.instance.setTransform(0,-1566.3,0.695,0.695);

	this.instance_1 = new lib.sloRa1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.3,-1044.2,0.695,0.695);

	this.instance_2 = new lib.sloRa1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-522.1,0.695,0.695);

	this.instance_3 = new lib.sloRa1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0.3,0,0.695,0.695);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(0,-1566.3,89.3,2090), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rali();
	this.instance.parent = this;
	this.instance.setTransform(0,370.5,0.973,0.973);

	this.instance_1 = new lib.rali();
	this.instance_1.parent = this;
	this.instance_1.setTransform(96.3,-234.5,0.973,0.973);

	this.instance_2 = new lib.rali();
	this.instance_2.parent = this;
	this.instance_2.setTransform(290.5,-234.5,0.973,0.973);

	this.instance_3 = new lib.rali();
	this.instance_3.parent = this;
	this.instance_3.setTransform(192.2,370,0.973,0.973);

	this.instance_4 = new lib.rali();
	this.instance_4.parent = this;
	this.instance_4.setTransform(290.5,137,0.973,0.973);

	this.instance_5 = new lib.rali();
	this.instance_5.parent = this;
	this.instance_5.setTransform(192.2,-2,0.973,0.973);

	this.instance_6 = new lib.rali();
	this.instance_6.parent = this;
	this.instance_6.setTransform(96.3,140,0.973,0.973);

	this.instance_7 = new lib.rali();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0,0,0.973,0.973);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(0,-234.5,303.2,979.5), null);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.for_16();
	this.instance.parent = this;
	this.instance.setTransform(-21.5,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,-20,43,40);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.for_16();
	this.instance.parent = this;
	this.instance.setTransform(-8.1,-7.5,0.376,0.376);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.1,-7.5,16.2,15.1);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_49 = function() {
		this.stop();
		this.parent.slot.slot1.slot2.gotoAndPlay(2);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(1));

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("AmFk1IMLAAIAAJrIsLAAg");
	this.shape.setTransform(-550.4,115.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(100,55,22,0.988)").s().p("AmFE2IAAprIMLAAIAAJrg");
	this.shape_1.setTransform(-550.4,115.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).wait(49));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	var mask_graphics_1 = new cjs.Graphics().p("AGmFqQhchcAAiCQAAiBBchbQBchbCBAAQCCAABbBbQBcBbAACBQAACChcBcQhbBbiCAAQiBAAhchbg");
	var mask_graphics_2 = new cjs.Graphics().p("ACgGzQihihAAjkQAAjiChiiQChihDkAAQDkAAChChQChCiAADiQAADkihChQihCijkAAQjkAAihiig");
	var mask_graphics_3 = new cjs.Graphics().p("AhlItQjojnAAlGQAAlFDojnQDmjnFGAAQFGAADnDnQDnDnAAFFQAAFGjnDnQjnDnlGAAQlGAAjmjng");
	var mask_graphics_4 = new cjs.Graphics().p("AlsLVQktktAAmoQAAmnEtktQEtktGnAAQGpAAEtEtQEsEtAAGnQAAGoksEtQktEtmpAAQmnAAktktg");
	var mask_graphics_5 = new cjs.Graphics().p("ApyN9QlzlzAAoKQAAoJFzlzQFzlzIJAAQILAAFyFzQFzFzAAIJQAAIKlzFzQlyFzoLAAQoJAAlzlzg");
	var mask_graphics_6 = new cjs.Graphics().p("At4QlQm5m4AAptQAApsG5m4QG4m5JsAAQJtAAG4G5QG5G4AAJsQAAJtm5G4Qm4G5ptAAQpsAAm4m5g");
	var mask_graphics_7 = new cjs.Graphics().p("Ax/TNQn+n+AArPQAArOH+n+QH/n+LOAAQLPAAH+H+QH+H+AALOQAALPn+H+Qn+H+rPAAQrOAAn/n+g");
	var mask_graphics_8 = new cjs.Graphics().p("A10V1QpEpEAAsxQAAswJEpEQJEpEMwAAQMxAAJEJEQJEJEAAMwQAAMxpEJEQpEJEsxAAQswAApEpEg");
	var mask_graphics_9 = new cjs.Graphics().p("A4cYdQqKqJAAuUQAAuTKKqJQKJqKOTAAQOUAAKJKKQKKKJAAOTQAAOUqKKJQqJKKuUAAQuTAAqJqKg");
	var mask_graphics_10 = new cjs.Graphics().p("A4cYdQqKqJAAuUQAAuTKKqJQKJqKOTAAQOUAAKJKKQKKKJAAOTQAAOUqKKJQqJKKuUAAQuTAAqJqKg");
	var mask_graphics_11 = new cjs.Graphics().p("A4cYdQqKqJAAuUQAAuTKKqJQKJqKOTAAQOUAAKJKKQKKKJAAOTQAAOUqKKJQqJKKuUAAQuTAAqJqKg");
	var mask_graphics_12 = new cjs.Graphics().p("A4cYdQqKqJAAuUQAAuTKKqJQKJqKOTAAQOUAAKJKKQKKKJAAOTQAAOUqKKJQqJKKuUAAQuTAAqJqKg");
	var mask_graphics_13 = new cjs.Graphics().p("A4cYdQqKqJAAuUQAAuTKKqJQKJqKOTAAQOUAAKJKKQKKKJAAOTQAAOUqKKJQqJKKuUAAQuTAAqJqKg");
	var mask_graphics_14 = new cjs.Graphics().p("A4cYdQqKqJAAuUQAAuTKKqJQKJqKOTAAQOUAAKJKKQKKKJAAOTQAAOUqKKJQqJKKuUAAQuTAAqJqKg");
	var mask_graphics_15 = new cjs.Graphics().p("A4cYdQqKqJAAuUQAAuTKKqJQKJqKOTAAQOUAAKJKKQKKKJAAOTQAAOUqKKJQqJKKuUAAQuTAAqJqKg");
	var mask_graphics_16 = new cjs.Graphics().p("A4cYdQqKqJAAuUQAAuTKKqJQKJqKOTAAQOUAAKJKKQKKKJAAOTQAAOUqKKJQqJKKuUAAQuTAAqJqKg");
	var mask_graphics_17 = new cjs.Graphics().p("A4cYdQqKqJAAuUQAAuTKKqJQKJqKOTAAQOUAAKJKKQKKKJAAOTQAAOUqKKJQqJKKuUAAQuTAAqJqKg");
	var mask_graphics_18 = new cjs.Graphics().p("A4cYdQqKqJAAuUQAAuTKKqJQKJqKOTAAQOUAAKJKKQKKKJAAOTQAAOUqKKJQqJKKuUAAQuTAAqJqKg");
	var mask_graphics_19 = new cjs.Graphics().p("A4cYdQqKqJAAuUQAAuTKKqJQKJqKOTAAQOUAAKJKKQKKKJAAOTQAAOUqKKJQqJKKuUAAQuTAAqJqKg");
	var mask_graphics_20 = new cjs.Graphics().p("A4cYdQqKqJAAuUQAAuTKKqJQKJqKOTAAQOUAAKJKKQKKKJAAOTQAAOUqKKJQqJKKuUAAQuTAAqJqKg");
	var mask_graphics_21 = new cjs.Graphics().p("A4cYdQqKqJAAuUQAAuTKKqJQKJqKOTAAQOUAAKJKKQKKKJAAOTQAAOUqKKJQqJKKuUAAQuTAAqJqKg");
	var mask_graphics_22 = new cjs.Graphics().p("A4cYdQqKqJAAuUQAAuTKKqJQKJqKOTAAQOUAAKJKKQKKKJAAOTQAAOUqKKJQqJKKuUAAQuTAAqJqKg");
	var mask_graphics_23 = new cjs.Graphics().p("A4cYdQqKqJAAuUQAAuTKKqJQKJqKOTAAQOUAAKJKKQKKKJAAOTQAAOUqKKJQqJKKuUAAQuTAAqJqKg");
	var mask_graphics_24 = new cjs.Graphics().p("A4cYdQqKqJAAuUQAAuTKKqJQKJqKOTAAQOUAAKJKKQKKKJAAOTQAAOUqKKJQqJKKuUAAQuTAAqJqKg");
	var mask_graphics_25 = new cjs.Graphics().p("A4cYdQqKqJAAuUQAAuTKKqJQKJqKOTAAQOUAAKJKKQKKKJAAOTQAAOUqKKJQqJKKuUAAQuTAAqJqKg");
	var mask_graphics_26 = new cjs.Graphics().p("A4cYdQqKqJAAuUQAAuTKKqJQKJqKOTAAQOUAAKJKKQKKKJAAOTQAAOUqKKJQqJKKuUAAQuTAAqJqKg");
	var mask_graphics_27 = new cjs.Graphics().p("A4cYdQqKqJAAuUQAAuTKKqJQKJqKOTAAQOUAAKJKKQKKKJAAOTQAAOUqKKJQqJKKuUAAQuTAAqJqKg");
	var mask_graphics_28 = new cjs.Graphics().p("A4cYdQqKqJAAuUQAAuTKKqJQKJqKOTAAQOUAAKJKKQKKKJAAOTQAAOUqKKJQqJKKuUAAQuTAAqJqKg");
	var mask_graphics_29 = new cjs.Graphics().p("A4cYdQqKqJAAuUQAAuTKKqJQKJqKOTAAQOUAAKJKKQKKKJAAOTQAAOUqKKJQqJKKuUAAQuTAAqJqKg");
	var mask_graphics_30 = new cjs.Graphics().p("A4cYdQqKqJAAuUQAAuTKKqJQKJqKOTAAQOUAAKJKKQKKKJAAOTQAAOUqKKJQqJKKuUAAQuTAAqJqKg");
	var mask_graphics_31 = new cjs.Graphics().p("A4cYdQqKqJAAuUQAAuTKKqJQKJqKOTAAQOUAAKJKKQKKKJAAOTQAAOUqKKJQqJKKuUAAQuTAAqJqKg");
	var mask_graphics_32 = new cjs.Graphics().p("A4cYdQqKqJAAuUQAAuTKKqJQKJqKOTAAQOUAAKJKKQKKKJAAOTQAAOUqKKJQqJKKuUAAQuTAAqJqKg");
	var mask_graphics_33 = new cjs.Graphics().p("A4cYdQqKqJAAuUQAAuTKKqJQKJqKOTAAQOUAAKJKKQKKKJAAOTQAAOUqKKJQqJKKuUAAQuTAAqJqKg");
	var mask_graphics_34 = new cjs.Graphics().p("A4cYdQqKqJAAuUQAAuTKKqJQKJqKOTAAQOUAAKJKKQKKKJAAOTQAAOUqKKJQqJKKuUAAQuTAAqJqKg");
	var mask_graphics_35 = new cjs.Graphics().p("A4cYdQqKqJAAuUQAAuTKKqJQKJqKOTAAQOUAAKJKKQKKKJAAOTQAAOUqKKJQqJKKuUAAQuTAAqJqKg");
	var mask_graphics_36 = new cjs.Graphics().p("A4cYdQqKqJAAuUQAAuTKKqJQKJqKOTAAQOUAAKJKKQKKKJAAOTQAAOUqKKJQqJKKuUAAQuTAAqJqKg");
	var mask_graphics_37 = new cjs.Graphics().p("A4cYdQqKqJAAuUQAAuTKKqJQKJqKOTAAQOUAAKJKKQKKKJAAOTQAAOUqKKJQqJKKuUAAQuTAAqJqKg");
	var mask_graphics_38 = new cjs.Graphics().p("A4cYdQqKqJAAuUQAAuTKKqJQKJqKOTAAQOUAAKJKKQKKKJAAOTQAAOUqKKJQqJKKuUAAQuTAAqJqKg");
	var mask_graphics_39 = new cjs.Graphics().p("A4cYdQqKqJAAuUQAAuTKKqJQKJqKOTAAQOUAAKJKKQKKKJAAOTQAAOUqKKJQqJKKuUAAQuTAAqJqKg");
	var mask_graphics_40 = new cjs.Graphics().p("A4cYdQqKqJAAuUQAAuTKKqJQKJqKOTAAQOUAAKJKKQKKKJAAOTQAAOUqKKJQqJKKuUAAQuTAAqJqKg");
	var mask_graphics_41 = new cjs.Graphics().p("A10V1QpEpEAAsxQAAswJEpEQJEpEMwAAQMxAAJEJEQJEJEAAMwQAAMxpEJEQpEJEsxAAQswAApEpEg");
	var mask_graphics_42 = new cjs.Graphics().p("AzMTNQn+n+AArPQAArOH+n+QH+n+LOAAQLPAAH+H+QH+H+AALOQAALPn+H+Qn+H+rPAAQrOAAn+n+g");
	var mask_graphics_43 = new cjs.Graphics().p("AwPQlQm4m4AAptQAApsG4m4QG5m5JsAAQJsAAG5G5QG4G4AAJsQAAJtm4G4Qm5G5psAAQpsAAm5m5g");
	var mask_graphics_44 = new cjs.Graphics().p("ArwN9QlzlzAAoKQAAoJFzlzQFylzIKAAQIKAAFzFzQFzFzAAIJQAAIKlzFzQlzFzoKAAQoKAAlylzg");
	var mask_graphics_45 = new cjs.Graphics().p("AnSLVQktktAAmoQAAmnEtktQEtktGnAAQGoAAEtEtQEtEtAAGnQAAGoktEtQktEtmoAAQmnAAktktg");
	var mask_graphics_46 = new cjs.Graphics().p("Ai0ItQjojnAAlGQAAlFDojnQDmjnFGAAQFGAADnDnQDnDnAAFFQAAFGjnDnQjnDnlGAAQlGAAjmjng");
	var mask_graphics_47 = new cjs.Graphics().p("ABpGFQihihAAjkQAAjjChihQChiiDkAAQDjAACiCiQChChAADjQAADkihChQiiCijjAAQjkAAihiig");
	var mask_graphics_48 = new cjs.Graphics().p("AGHFKQhchcAAiBQAAiABchcQBchcCBAAQCBAABcBcQBcBcAACAQAACBhcBcQhcBciBAAQiBAAhchcg");
	var mask_graphics_49 = new cjs.Graphics().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:155,y:54.5}).wait(1).to({graphics:mask_graphics_1,x:95.6,y:45.3}).wait(1).to({graphics:mask_graphics_2,x:110,y:59.7}).wait(1).to({graphics:mask_graphics_3,x:124.3,y:69.2}).wait(1).to({graphics:mask_graphics_4,x:138.7,y:74.1}).wait(1).to({graphics:mask_graphics_5,x:153,y:79.1}).wait(1).to({graphics:mask_graphics_6,x:167.4,y:84}).wait(1).to({graphics:mask_graphics_7,x:181.7,y:88.9}).wait(1).to({graphics:mask_graphics_8,x:194.4,y:93.8}).wait(1).to({graphics:mask_graphics_9,x:155,y:54.5}).wait(1).to({graphics:mask_graphics_10,x:155,y:54.5}).wait(1).to({graphics:mask_graphics_11,x:155,y:54.5}).wait(1).to({graphics:mask_graphics_12,x:155,y:54.5}).wait(1).to({graphics:mask_graphics_13,x:155,y:54.5}).wait(1).to({graphics:mask_graphics_14,x:155,y:54.5}).wait(1).to({graphics:mask_graphics_15,x:155,y:54.5}).wait(1).to({graphics:mask_graphics_16,x:155,y:54.5}).wait(1).to({graphics:mask_graphics_17,x:155,y:54.5}).wait(1).to({graphics:mask_graphics_18,x:155,y:54.5}).wait(1).to({graphics:mask_graphics_19,x:155,y:54.5}).wait(1).to({graphics:mask_graphics_20,x:155,y:54.5}).wait(1).to({graphics:mask_graphics_21,x:155,y:54.5}).wait(1).to({graphics:mask_graphics_22,x:155,y:54.5}).wait(1).to({graphics:mask_graphics_23,x:155,y:54.5}).wait(1).to({graphics:mask_graphics_24,x:155,y:54.5}).wait(1).to({graphics:mask_graphics_25,x:155,y:54.5}).wait(1).to({graphics:mask_graphics_26,x:155,y:54.5}).wait(1).to({graphics:mask_graphics_27,x:155,y:54.5}).wait(1).to({graphics:mask_graphics_28,x:155,y:54.5}).wait(1).to({graphics:mask_graphics_29,x:155,y:54.5}).wait(1).to({graphics:mask_graphics_30,x:155,y:54.5}).wait(1).to({graphics:mask_graphics_31,x:155,y:54.5}).wait(1).to({graphics:mask_graphics_32,x:155,y:54.5}).wait(1).to({graphics:mask_graphics_33,x:155,y:54.5}).wait(1).to({graphics:mask_graphics_34,x:155,y:54.5}).wait(1).to({graphics:mask_graphics_35,x:155,y:54.5}).wait(1).to({graphics:mask_graphics_36,x:155,y:54.5}).wait(1).to({graphics:mask_graphics_37,x:155,y:54.5}).wait(1).to({graphics:mask_graphics_38,x:155,y:54.5}).wait(1).to({graphics:mask_graphics_39,x:155,y:54.5}).wait(1).to({graphics:mask_graphics_40,x:155,y:54.5}).wait(1).to({graphics:mask_graphics_41,x:154.8,y:54.3}).wait(1).to({graphics:mask_graphics_42,x:154.7,y:54.1}).wait(1).to({graphics:mask_graphics_43,x:152.3,y:54}).wait(1).to({graphics:mask_graphics_44,x:140.4,y:53.8}).wait(1).to({graphics:mask_graphics_45,x:128.4,y:53.6}).wait(1).to({graphics:mask_graphics_46,x:116.4,y:53.5}).wait(1).to({graphics:mask_graphics_47,x:104.4,y:53.3}).wait(1).to({graphics:mask_graphics_48,x:92.5,y:42.2}).wait(1).to({graphics:mask_graphics_49,x:155,y:54.5}).wait(1));

	// Layer 6
	this.instance = new lib.xlog2();
	this.instance.parent = this;
	this.instance.setTransform(6.8,2.7,0.307,0.307,-3.6);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(50));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(100,55,22,0.988)").s().p("AgsBxQgDgCAAgEIgEgUIgFg/IgEgiQgBgKgCgFIgLAAIgDAAQgDABgDgCQgDgBAAgEQgBgFAEgFQAEgFAGAAIAUgDQADgBACACQADABABADQAHAYACAMQACANABAaIADAmIA6h7QABgDAEgDQAEgDAEAAQADgBADADQADABABAEIADAlIAEAhIAEAdIADAbIAAACIABACIABAFQACABAGgBIACAAIAGAAQACACABAEQAAADgCADQgCADgEACQgHAEgIABQgGABgEgCQgEgCgCgEQgDgFgBgMIgCgRIgCgNIgHg9QglBPgUAmIgGAHQgEADgEABIgBAAIgFgBgAgbhIIgKgCQgGgCgEgDIgIgIIgBgEQgBgGAFgEQAEgFAFgBQAGgBACAFQAEAFAGADQAGACAGgBQAGgBAFgDQAEgDADgFQABgDAEgCIAGgCQAKAAABAGQAAADgCAEIgHAKQgFAFgGADQgFAEgFADQgHACgHABIgHABIgDgBg");
	this.shape_2.setTransform(284,57.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(100,55,22,0.988)").s().p("AgIBcQgGgBgHgDQgGgCgFgFQgGgEgEgGQgHgHgJgTQgEgKgEgUQgCgNACgMQABgJAGgRQACgGAEgFIAIgKQAEgFAHgDQAFgEAIgDIgBgEQgBgGAFgFQAFgEAFgBQADAAACACQADABAAAEIABAJQAHAAAHABQAGACAGADIALAHIAIAIQAKAPAEAIQAFAMACAOQABAKgBAMQgBAMgDALQgDALgGAJQgGAKgJAHQgIAHgJAEQgIAEgJACIgEAAIgJgBgAgWg0QgHAEgFAGQgFAGgDAJQgCAIgBAJQAAAKABAJQACAMAEALQAEAMAGAHIAIAJQAFAEAFACQAEACAGABQAEABAFgBQAIgBAHgFQAEgDADgEIAFgJQAFgKACgNQABgOgCgMQgBgKgDgKQgEgJgEgHQgFgHgHgFQgHgEgIgCIACANQABAGgFAEQgEAFgFAAQgDABgCgCQgDgCgBgDIgCgUg");
	this.shape_3.setTransform(267.3,61.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(100,55,22,0.988)").s().p("AgFBWQgFgBgEgDQgFgCgDgEIgGgKQgFgJgDgOQgDgLgCgPIgFg1IgDgQIgIABQgDABgDgBQgDgCAAgDQgBgFAEgFQAEgGAFAAIBngOQADAAADABQADABAAAEQABAFgEAFQgEAFgFAAIhHAKIABAIIADAaIAEAAIAXgCQAPAAAMADIAMAEQAGADAEAEQAGADACAGQAEAEAAAHQACAJgDAKQgCAKgGAJQgFAIgHAIQgHAHgIAEIgOAIIgMADIgEAAIgGgBgAgSAKIAEAXQADALADAHQADAIADADQADAEAEgBQAGAAAIgFIANgLQAHgGAEgIQAEgHgBgGQgBgFgDgEQgFgFgHgEQgHgDgIgBQgHgBgIAAIgRABIgCAAg");
	this.shape_4.setTransform(251.7,63.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(100,55,22,0.988)").s().p("AgIBcQgGgBgHgDQgGgCgFgFQgGgEgEgGQgHgHgJgTQgEgKgEgUQgCgNACgMQABgJAGgRQACgGAEgFIAIgKQAEgFAHgDQAFgEAIgDIgBgEQgBgGAFgFQAFgEAFgBQADAAACACQADABAAAEIABAJQAHAAAHABQAGACAGADIALAHIAIAIQAKAPAEAIQAFAMACAOQABAKgBAMQgBAMgDALQgDALgGAJQgGAKgJAHQgIAHgJAEQgIAEgJACIgEAAIgJgBgAgWg0QgHAEgFAGQgFAGgDAJQgCAIgBAJQAAAKABAJQACAMAEALQAEAMAGAHIAIAJQAFAEAFACQAEACAGABQAEABAFgBQAIgBAHgFQAEgDADgEIAFgJQAFgKACgNQABgOgCgMQgBgKgDgKQgEgJgEgHQgFgHgHgFQgHgEgIgCIACANQABAGgFAEQgEAFgFAAQgDABgCgCQgDgCgBgDIgCgUg");
	this.shape_5.setTransform(237.4,65.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(100,55,22,0.988)").s().p("AgOBWQgJgBgIgEQgJgFgGgIQgHgGgFgJQgEgIgDgKIgDgTIgCgQIABgLQAAgLAEgKIAEgMIAHgMIAKgLQAFgGAHgEQAHgEAQgEQAIgBAIABQAIABAIADQAIADAGAFQAGAFAEAHIABACQAAAGgFAFQgFAEgGABQgDABgDgBQgCgCgCgDIgFgHQgEgDgEgCQgIgEgIABIgKADIgJAFQgIAGgFAKQgFAJgCALQgCAKABAKQABALADAKQADAKAFAHQAEAIAGAEQAGAGAGACQAHADAGAAIAMAAQAKgBALgGQAKgFAJgHQAEgDAEgBQAEAAACACQAEACAAAEQABAGgGAFQgRAMgLAFIgQAHIgRAEIgHAAIgLAAg");
	this.shape_6.setTransform(221.3,68.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(100,55,22,0.988)").s().p("AgOBWQgJgBgIgEQgJgFgGgIQgHgGgFgJQgEgIgDgKIgDgTIgCgQIABgLQAAgLAEgKIAEgMIAHgMIAKgLQAFgGAHgEQAHgEAQgEQAIgBAIABQAIABAIADQAIADAGAFQAGAFAEAHIABACQAAAGgFAFQgFAEgGABQgDABgDgBQgCgCgCgDIgFgHQgEgDgEgCQgIgEgIABIgKADIgJAFQgIAGgFAKQgFAJgCALQgCAKABAKQABALADAKQADAKAFAHQAEAIAGAEQAGAGAGACQAHADAGAAIAMAAQAKgBALgGQAKgFAJgHQAEgDAEgBQAEAAACACQAEACAAAEQABAGgGAFQgRAMgLAFIgQAHIgRAEIgHAAIgLAAg");
	this.shape_7.setTransform(193.5,71.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(100,55,22,0.988)").s().p("AhOBUIAAgDQAEgXANgxQAHgXARguIgJgGQgFgBgDAAIgFACQgFADgCAAQgEABgDgDQgEgCAAgEQgCgMAagGQAFgBAFABIAKACQAIAEAJAHQAHAHAHAJIAKAQIAYAtIAWAvIABABIADAAIALgCQADgBADACQADABABAEQABAFgFAFQgEAFgFABIgJACQgIABgFgBIgGgDQgDgCgCgEIgMgYIAAAAQgGABhJAsQgEAFgGABQgJAAgBgGgAgkADQgHAXgFAWQAIgGAVgKQAPgGAQgFIgBgDQgRgmgPgWIgPAtg");
	this.shape_8.setTransform(273.2,27.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(100,55,22,0.988)").s().p("AhLBmQgDgCgBgFIgEggQgBgFAFgEQAEgEAFgBIACAAQAEgVALgpIAXg8IgJgHQgEgBgEAAIgFADIgHADQgEAAgDgCQgEgCAAgEQgBgEADgEQACgDAFgDQAHgEAIgBQAFgBAFABIAKACQAJAEAJAIQAHAGAHALIAPAWQARAeAUAyIAKgCQAGgBADAEQAEAGACAKIABAaQABAGgFAEQgEAEgFAAQgDABgDgCQgDgCgBgEIgCgWIgBgGIgnAFIhNALIACAUQABAGgFAEQgEAEgEABIgCAAQgDAAgCgCgAgggFQgKAhgDASIAygIIAbgEQgchAgTgbIgRA0g");
	this.shape_9.setTransform(255.6,31.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(100,55,22,0.988)").s().p("AgVBYQgDgBgBgEQgDgLgDgWIgFgoIgDgnIgFgXIgIABQgDABgDgCQgDgCAAgDQgBgFAEgFQAEgFAFgBIBkgPQAEAAACACQADACABAEIABAOQABAGgFAEQgEAEgFAAQgDABgDgCQgDgCgBgEIAAgFIg6AIIAEAUIAEApIADAmQACAQAEAOIAAABQABAFgFAFQgEAEgFABIgCAAIgEgBg");
	this.shape_10.setTransform(237.3,32.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(100,55,22,0.988)").s().p("AggBXQgDgCgBgDQgDgNgDgPQgCgNgBgbQgCgZgCgNQgCgPgEgNIgIABQgDABgDgBQgDgCAAgDQgBgFAEgFQAEgGAFAAIBkgPQAEAAADACQACACABADIABAPQABAFgFAEQgEAEgFABQgDAAgDgCQgDgCgBgEIgBgFIg5AJIAFAWIACAYIAxgHQADAAADABQADABABAEQAAAFgEAEQgEAFgFAAIgsAHIACAiIAEAUIA8gJIAGgPQABgFAEgCQAEgCAEgBQAIAAABAGIAAAFIgJAYQgCAEgDADQgDACgFABIhKALIgCABIgBAAIgCAAIgEgBg");
	this.shape_11.setTransform(223,34.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(100,55,22,0.988)").s().p("AgNBWQgJgBgIgEQgJgFgHgHQgGgHgFgJQgFgIgDgKQgDgJgBgJQgBgIAAgIIABgLQAAgLADgKIAEgMIAHgMIAKgMQAFgGAHgEQAHgEAQgEQAIgBAIABQAIAAAIADQAIADAGAFQAHAFADAHIABACQABAGgGAFQgFAFgGABQgDAAgCgBQgDgBgCgDQgCgFgEgDIgGgFQgJgDgIABIgKADIgJAFQgIAGgFAKQgFAJgCALQgCALACAJQABALADAKQAEAKAEAHQAFAHAFAGQAGAFAHACIAMADIANAAQAKgCAKgGQAKgFAKgIQADgDAEAAQAEgBADACQADADAAAEQABAGgGAEQgQANgLAFIgQAHIgRAFIgIAAIgKAAg");
	this.shape_12.setTransform(207.5,36.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(100,55,22,0.988)").s().p("AgDBUIgKgDQgEgCgEgEQgDgDgDgEQgFgIgEgMIgEgYIgHg7QgCgLgCgIIgIACQgEAAgCgBQgDgCgBgDQAAgFAEgFQADgFAFgBIAqgHQAPgDAMABIANABQAGACAFADQAFADADAFQADAEABAFIAAALQgBAEgDAFQgFAJgJALIAOAEQAHACAFAEQAFAEADAFQAEAEABAHQABAJgEALQgCAIgFAIQgFAIgGAHIgPANQgIAFgJADIgIABIgIABIgDAAgAgNARIgFAFIAAADQAFATAEAKQADAGAEACQACABAGgBQAGgBAOgIQAKgIAEgHQAEgHABgFQABgFAAgEQgBgEgDgDQgDgEgEgCQgEgDgHgBIgOgDIAAAAQgEAAgTAUgAgDg8IgUACIgEAAIACAPQAEAZABASIAdgcQAHgJAEgGQAFgHgBgEQgCgEgIgBIgNgBIgEAAg");
	this.shape_13.setTransform(191.8,38.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(100,55,22,0.988)").s().p("AgvBVQgGgCgGgEQgEgDgEgGQgEgGgBgIQgDgQgCgUIgBglIgBgXQgBgKgBgFIgDAAIgIgBQgEgCAAgEQgBgFAEgEQAFgFAEAAIAEAAIAIgBQAKAAACAGQABAFABAMIABAfIAGgBIAYAAQAPAAAMAEIALAFQAHADAEADQAFAFACAEQADAGABAHQAAAKgDALQgDAJgHAKQgHAIgIAIQgHAHgJAEQgMAFgLABIgDAAIgKgBgAg4gCIACAVIACAUQACAJACAGQACAGAEADQAFADAEAAQAGgBAJgEQAHgEAHgHQAGgGAEgHQAFgIAAgGQgBgGgFgFQgFgFgGgEIgOgEIgQgCIgQAAgAA1BIQgDgNgBgPIgCg1IgBgWQgBgQgDgMIgCgFIgBAAIgHABQgEAAgCgBQgFgBgBgFQAAgFAEgFQAFgEAGAAIASgBIAFABQADACACADIAEAWIADAXIACArIABAfIABAPIAKAAIABAAQAMgBAAAIQAAAFgEAEQgEAFgGAAIgEABIgNABIgEABQgIAAgBgHg");
	this.shape_14.setTransform(106.4,82.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(100,55,22,0.988)").s().p("AgCBPQgDgPgBgSIgBgpIgCgnIgDgYIgmADIABAJQABAGgFAFQgFADgFABQgDAAgDgCQgDgCAAgDIgCgXQAAgGAFgEQADgEAGAAIB8gJQAEgBADADQADACAAAEIABAXQABAFgGAEQgDAEgFAAQgFAAgCgBQgDgDgBgEIgBgOIgmADIACAXIACAoIACApIABAKIABAHIACAAIAKgBQAEAAACACQACABAAAEQABAFgEAEQgEAFgGABIgUACQgIgBgBgFg");
	this.shape_15.setTransform(87.1,83.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(100,55,22,0.988)").s().p("AgNBcQgGgCgGgDQgGgDgGgFIgJgKQgGgIgIgTQgDgKgDgVQgBgMACgNQABgJAHgQIAHgLQAEgFAFgEIALgIQAGgEAHgCIgBgEQAAgGAGgFQAEgEAFAAQADAAACACQADABABAEIAAAJQAHAAAGACIAMAGIAKAHIAJAJQAJAPADAJQAEAMABAOQABAKgBAMQgCAMgEALQgEAKgGAJQgHAKgJAHQgJAGgJAEQgIADgIABIgDAAIgLgBgAgSg2QgIAEgFAGQgFAGgEAJQgDAHAAAKQgCAJABAJQABANAEALQADAMAGAIIAHAJIAJAGIAKAEQAEABAFAAQAJgBAHgFIAHgGIAGgIQAFgLACgNQADgNgBgNQgBgKgCgJQgDgKgFgHQgEgHgGgGQgHgFgIgCIABANQABAGgGAEQgDAFgGAAIgGgBQgCgCAAgEIgCgTg");
	this.shape_16.setTransform(71,84.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(100,55,22,0.988)").s().p("AhJBVQgDgDgBgGIABgKIAEgOIANgkIAihKQAAgDgQgEQgHAEgFAAQgEAAgDgCQgDgCAAgEQgBgNAZgDIALAAIAIADQAJAFAHAIQAGAHAGAJIAJARIAQAgIANAfIALAcIAAABIACAAIAJgBQAKAAAAAHQAAAFgEAEQgEAFgGAAIgDABIgMABQgKABgDgHIgSgwIgOghQgHgSgIgNIgbBDIgLAdQgEANABAEIAAADQAAAEgEADQgEADgEABQgFAAgEgCg");
	this.shape_17.setTransform(55.7,86.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(100,55,22,0.988)").s().p("AgRBVQgJgCgIgFQgIgFgHgIQgGgHgEgJQgEgJgCgKQgCgJgBgJIAAgQIABgLQABgLAEgKIAFgLIAIgMIAKgLIAOgJQAHgEAPgCQAIgBAIABQAJACAIADQAHAEAGAFQAGAFADAHIABADQAAAGgGAEQgFAFgGAAQgDAAgCgBQgDgBgCgDQgBgFgEgDQgCgEgFgCQgHgEgJAAIgKADQgFABgEADQgIAGgGAJQgGAJgDALQgCAKAAALQABAKADAKQACAKAEAIQAEAIAGAFQAFAFAGADQAHADAGAAIAMABQAKgBALgEQAKgEALgIQADgCAEgBQAEAAADACQADADAAAEQAAAFgFAFQgSALgLAFIgRAGQgJACgIABIgFAAIgNgBg");
	this.shape_18.setTransform(37.8,87.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(100,55,22,0.988)").s().p("AgjBUQgDAAgDgBQgDgCgBgEQgCgMgBgQQgBgNABgbQABgagBgMQAAgPgCgNIgIAAQgEABgCgCQgDgCAAgEQgBgFAEgEQAFgFAGAAIBkgFQAEAAADACQACACAAAEIABAOQgBAGgFADQgEADgFABQgDAAgDgCQgDgCgBgEIAAgFIg5ACQABALABALIAAAZIAxgCQADAAADACQADACABADQAAAFgFADQgFAFgFAAIgtACIAAAiIACAUIA8gCIAIgPQABgEAEgCIAIgDQAJACAAAFIgBAFIgLAXQgBAEgFACQgDADgFAAIhKAEIgCAAg");
	this.shape_19.setTransform(124.8,46.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(100,55,22,0.988)").s().p("AgxBTQgGgBgFgEQgGgEgDgFQgDgHgCgIQgCgQgBgUIgBglIAAgXQAAgKgCgFIgCAAQgFAAgDgBQgEgCAAgFQgBgEAEgFQAFgEAFAAIADgBIAIAAQAKAAABAGQACAFABAMIAAAfIAFAAQANgBAMABQAPABALAEQAHACAFADQAGADAFAEIAHAJQACAGABAHQAAAKgEALQgDAJgHAJIgPAQQgIAHgJAEQgMAEgLABIgDAAQgFAAgFgCgAg3ASIACAUIADAPQADAGADADQAEADAFAAQAHAAAIgFQAIgDAHgHQAGgGAEgHQAFgIAAgGQgBgGgEgFQgFgFgGgEQgHgDgHgBIgQgCIgQgBIgEAAgAAzBJQgDgMAAgQQgBgSAAgjIAAgVQgBgRgDgLIAAgGIgCAAIgHABIgHgBQgFgBAAgFQAAgFAFgFQAEgEAGgBIATAAQACAAADABQADACAAAEIAFAWIACAXIABArIAAAgIABAPIAJgBIABAAQAMgBABAIQAAAFgEAFQgFAEgFABIgFAAIgMAAIgGABQgHAAgBgHg");
	this.shape_20.setTransform(106.5,47.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(100,55,22,0.988)").s().p("AhxBQQgBgEADgDQAHgIAJgSQAEgMAFgTIAIgfIAKgfIAAgBIgIgKQgDgDgEAAQgDAAgDADQgEACgDAAQgDAAgDgCQgCgDAAgDIACgHQACgEAEgCQAKgGAIAAQAIAAAGADQAGADAFAGIAIANIAHAOIASAmIAOAlQAMgeANg/IAAgBIgDgGIgBgDQAAgGAFgEQAFgEAGAAQAGgBABAFIAkBaIATAwIABAAIAKgBQAEgBADACQADACAAAEQAAAFgEAEQgFAFgFAAIgEABIgMAAQgJACgDgGIgUg0IgTgyQgPA6gPAeIgCAEQgEAGgHAAQgEAAgDgDQgCgCAAgDIgMgfIgMggIgKgWQgJAkgFASQgEAPgGAMQgIAQgGAHQgFAGgHAAQgKgBAAgGg");
	this.shape_21.setTransform(85.6,48.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(100,55,22,0.988)").s().p("AgzBUQgCgCgCgEIgBgVQAAgVAAgpIgBgjQAAgLgCgFQgCAAgIAAIgCAAQgFABgBgCQgEgCAAgEQAAgFAEgFQAFgEAFAAIAUgBIAGABQADACAAADQAGAYAAAMIAAAnIgBAmIBFh1QACgDADgDQAFgCADAAQAEgBADACQACADAAAEIABAlIAAAjIACAbIABAbIABACIAAADQAAABAAABQAAAAAAABQAAAAAAABQAAAAABAAQABACAHgBIABAAQADAAADABQADACAAAEQAAADgDAEQgCACgEACQgHADgIAAQgGAAgEgCQgEgCgCgFQgCgFgBgLIAAgRIAAgOIgCg9QgsBLgYAlQgCAEgEADQgEACgFAAIgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQgBAAAAAAg");
	this.shape_22.setTransform(64,49);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(100,55,22,0.988)").s().p("AgOBTQgFgBgEgDQgEgDgDgFIgFgKQgEgJgCgOIgDgbIgBg1IgBgPIgIAAQgEAAgDgCQgCgCAAgCQAAgFAEgFQAEgFAGgBIBngFQAEAAACACQADACAAAEQAAAEgEAFQgEAEgFAAIhIAEIAAAIIABAbIAEgBQAMAAALABQAPABAMAEQAGACAFAEQAGACAEAEQAFAEACAFQACAGABAHQAAAJgDAKQgDAJgGAIQgGAJgIAFIgPAMIgPAFIgLADQgGAAgFgCgAgVAHIACAXQACALACAHQADAIADAEQADAEAFgBQAFAAAIgDQAHgFAHgFQAIgGAEgIQAEgGAAgGQgBgGgCgDQgFgGgHgEQgGgEgIgBQgHgDgIAAIgRAAIgCAAg");
	this.shape_23.setTransform(47.7,49.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(100,55,22,0.988)").s().p("AhOBYQgDgNAAgPIgBg3IgBgUQgBgRgCgMIgBgFIgBAAIgHAAIgGgBQgFgBAAgFQgBgFAFgFQAEgEAGgBIASAAIAFACQADABABAEQADALABAMIACAYIABATIAigCQAAgLACgLQADgLAGgKQAFgKAIgIIAIgHIALgGIAGgCIAAgDQAAgGAFgEQAFgEAFAAQADAAADABQACADABADIAAAJQAHAAAHACQAGABAGAEQAFACAFAFQAEAEAEAGIAGALIAEAMQAEANAAAPQABALgCAKQgBAMgEAKQgEALgHAIQgGAJgJAGQgJAHgJADQgJAEgIAAIgNgBIgLgEIgKgHIgIgJQgKgOgEgIQgFgNgCgOIgjACIABAhIAAAOIAAAEIAFAAQADAAADACQADACAAADQAAAFgEAFQgFAEgFABIgNAAQgIgBAAgFgAALguQgFAGgDAIQgDAHgBAJQgBAJAAAIQABAMACAMQADAMAFAIQADAFAFAEQAEAEAFADIAKAEIAJABQAJgBAHgEIAHgGQAEgEACgFQAGgKACgNQADgNAAgMQgBgKgDgJQgCgJgEgHQgFgIgGgFQgGgFgIgCIABAOQAAAFgGAFQgFAEgFAAQgDAAgCgCQgDgCAAgDIgBgUIgCAAQgHAEgGAGg");
	this.shape_24.setTransform(29.2,49.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(100,55,22,0.988)").s().p("AhJBUQgEgDAAgFIABgKIAEgPIAPgjQALgZAZgxQgBgDgQgEQgHADgFABQgEAAgDgCQgDgDAAgDQgBgNAagDIAKABIAKADQAHAFAIAIQAFAHAGAKIAJARQAIAPAGARIANAgIAKAcIAAABIACAAIAJgBQAKABAAAGQAAAFgEAFQgEAEgGABIgDAAIgMAAQgLABgCgHIgRgwIgNghQgHgTgHgNIgdBCIgLAdQgFANAAAEIABADQAAAEgFADQgEADgEAAQgFAAgDgCg");
	this.shape_25.setTransform(11.1,51.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(100,55,22,0.988)").s().p("AgNBWQgJgBgIgEQgJgFgHgHQgGgHgFgJQgFgIgDgKQgDgJgBgJQgBgIAAgIIABgLQAAgLADgKIAEgMIAHgMIAKgMQAFgGAHgEQAHgEAQgEQAIgBAIABQAIAAAIADQAIADAGAFQAHAFADAHIABACQABAGgGAFQgFAFgGABQgDAAgCgBQgDgBgCgDQgCgFgEgDIgGgFQgJgDgIABIgKADIgJAFQgIAGgFAKQgFAJgCALQgCALACAJQABALADAKIAIARQAFAHAFAGQAGAFAHACIAMADIANAAQAKgCAKgGQAKgFAKgIQADgDAEAAQAEgBADACQADADAAAEQABAGgGAEQgQANgLAFIgQAHIgRAFIgIAAIgKAAg");
	this.shape_26.setTransform(206.5,26.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(100,55,22,0.988)").s().p("AgjBUQgEAAgCgBQgDgCgBgEQgCgMgBgQQgBgNABgbQABgagBgMQAAgPgDgNIgHAAQgEABgCgCQgDgCgBgEQAAgFAFgEQAEgFAGAAIBkgFQAEAAADACQACACAAAEIAAAOQAAAGgFADQgEADgFABQgEAAgCgCQgDgCgBgEIAAgFIg5ACQACALAAALIAAAZIAxgCQADAAADACQADACABADQAAAFgFADQgFAFgFAAIgtACIAAAiIACAUIA8gCIAIgPQABgEAEgCIAIgDQAJACAAAFIgBAFIgLAXQgBAEgFACQgDADgFAAIhKAEIgCAAg");
	this.shape_27.setTransform(125.8,37.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(100,55,22,0.988)").s().p("AgzBUQgCgCgBgEIgCgVQgBgVABgpIgBgjQAAgLgCgFQgCAAgIAAIgCAAQgFABgCgCQgDgCAAgEQAAgFAEgFQAFgEAFAAIAUgBIAGABQADACAAADQAGAYAAAMIAAAnIgBAmIBFh1QACgDADgDQAFgCADAAQAEgBADACQACADAAAEIABAlIAAAjIADAbIAAAbIABACIAAADQAAABAAABQAAAAAAABQAAAAAAABQAAAAABAAQABACAHgBIABAAQAEAAACABQADACAAAEQAAADgCAEQgDACgEACQgIADgIAAQgFAAgEgCQgEgCgCgFQgCgFgBgLIAAgRIgBgOIgBg9QgrBLgZAlQgCAEgEADQgEACgEAAIgCAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQgBAAAAAAg");
	this.shape_28.setTransform(65,40);

	var maskedShapeInstanceList = [this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25,p:{x:11.1,y:51.6}},{t:this.shape_24,p:{x:29.2,y:49.9}},{t:this.shape_23,p:{x:47.7,y:49.7}},{t:this.shape_22},{t:this.shape_21,p:{x:85.6,y:48.1}},{t:this.shape_20,p:{x:106.5,y:47.1}},{t:this.shape_19},{t:this.shape_18,p:{y:87.3}},{t:this.shape_17,p:{y:86.4}},{t:this.shape_16,p:{y:84.3}},{t:this.shape_15,p:{y:83.6}},{t:this.shape_14,p:{y:82.5}},{t:this.shape_13,p:{x:191.8,y:38.8}},{t:this.shape_12},{t:this.shape_11,p:{x:223,y:34.2}},{t:this.shape_10,p:{x:237.3,y:32.1}},{t:this.shape_9,p:{x:255.6,y:31.9}},{t:this.shape_8,p:{x:273.2,y:27.4}},{t:this.shape_7,p:{y:71.8}},{t:this.shape_6,p:{y:68.1}},{t:this.shape_5,p:{y:65.4}},{t:this.shape_4,p:{y:63.9}},{t:this.shape_3,p:{y:61.4}},{t:this.shape_2,p:{y:57.4}}]}).to({state:[{t:this.shape_25,p:{x:12.1,y:42.6}},{t:this.shape_24,p:{x:30.2,y:40.9}},{t:this.shape_23,p:{x:48.7,y:40.7}},{t:this.shape_28},{t:this.shape_21,p:{x:86.6,y:39.1}},{t:this.shape_20,p:{x:107.5,y:38.1}},{t:this.shape_27},{t:this.shape_18,p:{y:78.3}},{t:this.shape_17,p:{y:77.4}},{t:this.shape_16,p:{y:75.3}},{t:this.shape_15,p:{y:74.6}},{t:this.shape_14,p:{y:73.5}},{t:this.shape_13,p:{x:190.8,y:28.8}},{t:this.shape_26},{t:this.shape_11,p:{x:222,y:24.2}},{t:this.shape_10,p:{x:236.3,y:22.1}},{t:this.shape_9,p:{x:254.6,y:21.9}},{t:this.shape_8,p:{x:272.2,y:17.4}},{t:this.shape_7,p:{y:62.8}},{t:this.shape_6,p:{y:59.1}},{t:this.shape_5,p:{y:56.4}},{t:this.shape_4,p:{y:54.9}},{t:this.shape_3,p:{y:52.4}},{t:this.shape_2,p:{y:48.4}}]},49).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-590.4,47,753,101);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.svett();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(0,0,134,125), null);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.back();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(0,0,753,365), null);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.button();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.03,scaleY:1.03,x:-3,y:-1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,238,101);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.body();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(0,0,208,239), null);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.head();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(0,0,60,67), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.man();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(0,0,191,340), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.for_03();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,0,188,195), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.for_19();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,51,42), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.for_06();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,65,54), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.for_10();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,72,64), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.for_13();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,51,39), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bookmm.png
	this.instance = new lib.bookmm();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,402,281), null);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ30();
	this.instance.parent = this;
	this.instance.setTransform(335.4,216.4,0.511,0.511,19.5,0,0,41.6,146.1);

	this.instance_1 = new lib.Символ30();
	this.instance_1.parent = this;
	this.instance_1.setTransform(250.3,344.6,0.511,0.511,-160.5,0,0,41.6,146);

	this.instance_2 = new lib.Символ30();
	this.instance_2.parent = this;
	this.instance_2.setTransform(224.7,235.4,0.511,0.511,-70.5,0,0,41.7,146.2);

	this.instance_3 = new lib.Символ30();
	this.instance_3.parent = this;
	this.instance_3.setTransform(353.1,320.1,0.511,0.511,109.5,0,0,41.6,146.2);

	this.instance_4 = new lib.Символ30();
	this.instance_4.parent = this;
	this.instance_4.setTransform(277.3,204.8,0.511,0.511,-25.5,0,0,41.7,146.2);

	this.instance_5 = new lib.Символ30();
	this.instance_5.parent = this;
	this.instance_5.setTransform(307.7,355.7,0.511,0.511,154.5,0,0,41.7,146.2);

	this.instance_6 = new lib.Символ30();
	this.instance_6.parent = this;
	this.instance_6.setTransform(212.5,296.6,0.511,0.511,-115.5,0,0,41.6,146.1);

	this.instance_7 = new lib.Символ30();
	this.instance_7.parent = this;
	this.instance_7.setTransform(363.2,265.5,0.511,0.511,64.5,0,0,41.6,146.1);

	this.instance_8 = new lib.Символ30();
	this.instance_8.parent = this;
	this.instance_8.setTransform(215.6,153.9,1,1,-45,0,0,41.6,146.2);

	this.instance_9 = new lib.Символ30();
	this.instance_9.parent = this;
	this.instance_9.setTransform(370.4,412.4,1,1,135,0,0,41.6,146.1);

	this.instance_10 = new lib.Символ30();
	this.instance_10.parent = this;
	this.instance_10.setTransform(156.1,365.4,1,1,-135,0,0,41.6,146.2);

	this.instance_11 = new lib.Символ30();
	this.instance_11.parent = this;
	this.instance_11.setTransform(413.9,209.9,1,1,45,0,0,41.7,146.2);

	this.instance_12 = new lib.Символ30();
	this.instance_12.parent = this;
	this.instance_12.setTransform(146.2,246.9,1,1,-90,0,0,41.6,146.2);

	this.instance_13 = new lib.Символ30();
	this.instance_13.parent = this;
	this.instance_13.setTransform(438.4,320.3,1,1,90,0,0,41.6,146.2);

	this.instance_14 = new lib.Символ30();
	this.instance_14.parent = this;
	this.instance_14.setTransform(253.7,438.6,1,1,180,0,0,41.6,146.2);

	this.instance_15 = new lib.Символ30();
	this.instance_15.parent = this;
	this.instance_15.setTransform(326,146.2,1,1,0,0,0,41.6,146.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ34, new cjs.Rectangle(0,0,584.6,584.8), null);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ34();
	this.instance.parent = this;
	this.instance.setTransform(292.3,292.4,1,1,0,0,0,292.3,292.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},79).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,584.6,584.8);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.parent = this;
	this.instance.setTransform(429.1,39.5,1,1,0,0,0,41.5,40);

	this.instance_1 = new lib.Символ7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(331.6,40,1,1,0,0,0,41.5,40);

	this.instance_2 = new lib.Символ7();
	this.instance_2.parent = this;
	this.instance_2.setTransform(235.1,40,1,1,0,0,0,41.5,40);

	this.instance_3 = new lib.Символ7();
	this.instance_3.parent = this;
	this.instance_3.setTransform(137.1,40,1,1,0,0,0,41.5,40);

	this.instance_4 = new lib.Символ7();
	this.instance_4.parent = this;
	this.instance_4.setTransform(41.5,40.7,1,1,0,0,0,41.5,40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(-4.4,-3.2,479.7,88.2), null);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol20();
	this.instance.parent = this;
	this.instance.setTransform(67,62.5,1,1,0,0,0,67,62.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.191},14).to({alpha:1},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,134,125);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hend();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 3
	this.instance_1 = new lib.Symbol21();
	this.instance_1.parent = this;
	this.instance_1.setTransform(44.3,-0.7,1,1,0,0,0,67,62.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(-22.7,-63.2,134,144.2), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol13();
	this.instance.parent = this;
	this.instance.setTransform(95.5,170,1,1,0,0,0,95.5,170);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:173.2},24,cjs.Ease.get(-1)).to({y:176.5},25,cjs.Ease.get(1)).to({y:173.1},26,cjs.Ease.get(-1)).to({y:170},24,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,191,340);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// head.png
	this.instance = new lib.Symbol15();
	this.instance.parent = this;
	this.instance.setTransform(117.3,97.6,1,1,-5,0,0,24.2,48.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:24.3,regY:48.2,rotation:-0.2},19).wait(41).to({rotation:-0.2},0).to({regX:24.2,regY:48.3,rotation:-5},19).wait(1));

	// hend.png
	this.instance_1 = new lib.Symbol14();
	this.instance_1.parent = this;
	this.instance_1.setTransform(128.7,104.3,1,1,0,0,0,77.7,21.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:21.4,rotation:-2.3,y:104.4},19,cjs.Ease.get(-1)).to({regX:77.8,regY:21.3,rotation:-5,x:128.8,y:104.3},20,cjs.Ease.get(1)).to({rotation:-2.3},21,cjs.Ease.get(-1)).to({regX:77.7,rotation:0,x:128.7},19,cjs.Ease.get(1)).wait(1));

	// body.png
	this.instance_2 = new lib.Symbol16();
	this.instance_2.parent = this;
	this.instance_2.setTransform(119,193.5,1,1,0,0,0,104,119.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(15,19.8,208,293.2);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 8 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAAP6IyR+fIAYgOMAkLgBGIoZdzIABAHIjUASIgrALIhvgrIkGCHg");
	mask.setTransform(50.9,68.4);

	// for_19.png
	this.instance = new lib.Symbol10();
	this.instance.parent = this;
	this.instance.setTransform(96.4,146.1,0.455,0.455,35.8,0,0,25.6,21.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:25.5,regY:21,scaleX:1,scaleY:1,rotation:0,x:68.5,y:-3.4},34).wait(1).to({regY:21.1,scaleX:0.38,scaleY:0.38,x:100.5,y:168},0).to({scaleX:0.44,scaleY:0.44,rotation:396.9,x:97.2,y:150.4},4).wait(1));

	// for_16.png
	this.instance_1 = new lib.Tween1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(91.5,114.6,0.999,0.999,-97.8,0,0,-0.1,0.1);

	this.instance_2 = new lib.Tween2("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(69.5,-4.4);

	var maskedShapeInstanceList = [this.instance_1,this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},27).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},11).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true,regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:69.5,y:-4.4},27).wait(1).to({_off:false,x:101.1,y:167.5},0).to({scaleX:1,scaleY:1,rotation:-461.5,x:92.2,y:119},11).wait(1));

	// for_13.png
	this.instance_3 = new lib.Symbol7();
	this.instance_3.parent = this;
	this.instance_3.setTransform(86.9,74.6,0.711,0.711,-166.2,0,0,25.5,19.7);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:19.5,scaleX:1,scaleY:1,rotation:0,x:73.5,y:-4.9},18).wait(1).to({regX:25.7,regY:19.7,scaleX:0.38,scaleY:0.38,x:102.4,y:167.4},0).to({regX:25.6,scaleX:0.7,scaleY:0.7,rotation:544.5,x:87.6,y:79},20).wait(1));

	// for_10.png
	this.instance_4 = new lib.Symbol8();
	this.instance_4.parent = this;
	this.instance_4.setTransform(74.6,34.8,0.856,0.856,83.2,0,0,36.1,31.9);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:36,regY:32,scaleX:1,scaleY:1,rotation:0,x:66.9,y:-5.1},9).wait(1).to({scaleX:0.38,scaleY:0.38,x:99.9,y:167.3},0).to({regY:31.9,scaleX:0.84,scaleY:0.84,rotation:-627.7,x:75.4,y:39.1},29).wait(1));

	// for_06.png
	this.instance_5 = new lib.Symbol9();
	this.instance_5.parent = this;
	this.instance_5.setTransform(99.8,165.7,0.376,0.376,0,0,0,32.5,27.1);

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regY:27,scaleX:1,scaleY:1,rotation:360,x:66.5,y:-9.4},39).wait(1));

	// for_03.png
	this.instance_6 = new lib.Symbol11();
	this.instance_6.parent = this;
	this.instance_6.setTransform(90.8,97.6,1,1,16.7,0,0,94,97.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({alpha:0.391},19).to({alpha:1},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.3,-22.8,236.1,240.8);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ6();
	this.instance.parent = this;
	this.instance.setTransform(41.5,41.4,1,1,0,0,0,41.5,40.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},4).wait(6));

	// Слой 2
	this.instance_1 = new lib.Символ33();
	this.instance_1.parent = this;
	this.instance_1.setTransform(431.6,39.7,0.427,0.427,0,0,0,292.3,292.3);
	this.instance_1.alpha = 0.559;

	this.instance_2 = new lib.Символ33();
	this.instance_2.parent = this;
	this.instance_2.setTransform(330.9,39.7,0.427,0.427,0,0,0,292.3,292.3);
	this.instance_2.alpha = 0.559;

	this.instance_3 = new lib.Символ33();
	this.instance_3.parent = this;
	this.instance_3.setTransform(233.4,39.7,0.427,0.427,0,0,0,292.3,292.3);
	this.instance_3.alpha = 0.559;

	this.instance_4 = new lib.Символ33();
	this.instance_4.parent = this;
	this.instance_4.setTransform(139.1,46.1,0.427,0.427,0,0,0,292.3,292.3);
	this.instance_4.alpha = 0.559;

	this.instance_5 = new lib.Символ33();
	this.instance_5.parent = this;
	this.instance_5.setTransform(46.4,52.5,0.427,0.427,0,0,0,292.3,292.3);
	this.instance_5.alpha = 0.559;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.4,-85.1,634.7,262.5);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_205 = function() {
		this.stop();
		this.parent.parent.parent.txt.gotoAndPlay(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(205).call(this.frame_205).wait(1));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,255,0,0.988)").s().p("AobIKIB/x9IO4BpIh/R+g");
	this.shape.setTransform(-927,-28.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(204).to({_off:false},0).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_1 = new cjs.Graphics().p("ANxOLIAEljIGUAKIACFag");
	var mask_graphics_2 = new cjs.Graphics().p("AIQPxIAIr7INlAUIAELog");
	var mask_graphics_3 = new cjs.Graphics().p("ACvRWIAMyRIU1AfIAGR0g");
	var mask_graphics_4 = new cjs.Graphics().p("AiyS8IAS4pIcEAqIAIYBg");
	var mask_graphics_5 = new cjs.Graphics().p("AoTUiIAW/BMAjUAA1IALeOg");
	var mask_graphics_6 = new cjs.Graphics().p("At0WHMAAaglYMAqlAA/MAAMAkcg");
	var mask_graphics_7 = new cjs.Graphics().p("AzVXtMAAegrwMAx1ABKMAAPAqpg");
	var mask_graphics_8 = new cjs.Graphics().p("A43ZTMAAkgyIMA5FABVMAARAw2g");
	var mask_graphics_9 = new cjs.Graphics().p("A+YcOMAAog4fMBAVABfMAAUA3Eg");
	var mask_graphics_10 = new cjs.Graphics().p("Egj5AfZMAAsg+2MBHmABqMAAVA9Rg");
	var mask_graphics_11 = new cjs.Graphics().p("Egn/AilMAAxhFOMBO2AB0MAAYBDfg");
	var mask_graphics_195 = new cjs.Graphics().p("Egn/AilMAAxhFOMBO2AB0MAAYBDfg");
	var mask_graphics_196 = new cjs.Graphics().p("Egn/AilMAAxhFOMBO2AB0MAAYBDfg");
	var mask_graphics_197 = new cjs.Graphics().p("EgihAenMAAsg9RMBFxABnMAAVA7ug");
	var mask_graphics_198 = new cjs.Graphics().p("A7naoMAAmg1TMA8tABaMAASAz9g");
	var mask_graphics_199 = new cjs.Graphics().p("A0uYGMAAggtWMAzpABNMAAQAsMg");
	var mask_graphics_200 = new cjs.Graphics().p("At0WHMAAaglYMAqlAA/MAANAkcg");
	var mask_graphics_201 = new cjs.Graphics().p("Am7UIIAV9aMAhgAAxIAKcrg");
	var mask_graphics_202 = new cjs.Graphics().p("AgBSJIAO1dIYdAkIAHU7g");
	var mask_graphics_203 = new cjs.Graphics().p("AG4QKIAJtgIPZAWIAENLg");
	var mask_graphics_204 = new cjs.Graphics().p("ANxOLIAEljIGUAKIACFag");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_1,x:129.1,y:90.8}).wait(1).to({graphics:mask_graphics_2,x:140.9,y:101}).wait(1).to({graphics:mask_graphics_3,x:152.6,y:111.2}).wait(1).to({graphics:mask_graphics_4,x:164.4,y:121.4}).wait(1).to({graphics:mask_graphics_5,x:176.2,y:131.6}).wait(1).to({graphics:mask_graphics_6,x:187.9,y:141.8}).wait(1).to({graphics:mask_graphics_7,x:199.7,y:152}).wait(1).to({graphics:mask_graphics_8,x:211.5,y:162.2}).wait(1).to({graphics:mask_graphics_9,x:223.3,y:163.9}).wait(1).to({graphics:mask_graphics_10,x:235,y:163.9}).wait(1).to({graphics:mask_graphics_11,x:237.7,y:163.8}).wait(184).to({graphics:mask_graphics_195,x:237.7,y:163.8}).wait(1).to({graphics:mask_graphics_196,x:237.7,y:163.8}).wait(1).to({graphics:mask_graphics_197,x:232.1,y:163.7}).wait(1).to({graphics:mask_graphics_198,x:217.4,y:163.7}).wait(1).to({graphics:mask_graphics_199,x:202.7,y:154.5}).wait(1).to({graphics:mask_graphics_200,x:188,y:141.8}).wait(1).to({graphics:mask_graphics_201,x:173.2,y:129}).wait(1).to({graphics:mask_graphics_202,x:158.5,y:116.3}).wait(1).to({graphics:mask_graphics_203,x:143.8,y:103.5}).wait(1).to({graphics:mask_graphics_204,x:129.1,y:90.8}).wait(2));

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.parent = this;
	this.instance.setTransform(237.5,80.5,1,1,0,0,0,151.6,187.2);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(194).to({x:238,y:220.9},0).wait(9).to({_off:true},1).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(239,153.4,1,1,0,0,0,235,40.6);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(127).to({_off:false},0).to({_off:true},23).wait(56));

	// Символ 5
	this.instance_2 = new lib.Символ5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(43.6,262.4,1,1,0,0,0,44.6,262.4);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(10).to({y:254.4},4,cjs.Ease.get(-1)).to({x:44.1,y:514.9},7,cjs.Ease.get(-1)).to({x:44.6,y:812.6},8,cjs.Ease.get(1)).to({y:792.6},5,cjs.Ease.get(1)).wait(10).to({y:776.6},5,cjs.Ease.get(-1)).to({y:917.6},10,cjs.Ease.get(-1)).to({y:1058.6},10,cjs.Ease.get(1)).to({y:1038.6},5,cjs.Ease.get(1)).wait(11).to({y:1018.6},4,cjs.Ease.get(-1)).to({y:435.9},10,cjs.Ease.get(-1)).to({y:727.4},10).to({y:717.4},5,cjs.Ease.get(1)).wait(35).to({y:707.4},5,cjs.Ease.get(-1)).to({y:921.5},9,cjs.Ease.get(-1)).to({y:1159.5},10,cjs.Ease.get(1)).to({x:43.6,y:1305.5},5,cjs.Ease.get(1)).wait(1).to({y:262.4},0).wait(24).to({_off:true},1).wait(1));

	// Символ 5
	this.instance_3 = new lib.Символ5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(139.8,434.5,1,1,0,0,0,44.6,262.4);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).wait(13).to({y:426.5},4,cjs.Ease.get(-1)).to({x:140.2,y:686.9},7,cjs.Ease.get(-1)).to({x:140.8,y:984.6},8,cjs.Ease.get(1)).to({y:964.6},5,cjs.Ease.get(1)).wait(10).to({y:948.6},5,cjs.Ease.get(-1)).to({y:1089.6},10,cjs.Ease.get(-1)).to({y:1230.6},10,cjs.Ease.get(1)).to({y:1210.6},5,cjs.Ease.get(1)).wait(11).to({y:1190.6},4,cjs.Ease.get(-1)).to({y:520.9},10,cjs.Ease.get(-1)).to({y:725.4},10).to({y:715.4},5,cjs.Ease.get(1)).wait(35).to({y:705.4},5,cjs.Ease.get(-1)).to({x:141.3,y:1001},9,cjs.Ease.get(-1)).to({x:141.9,y:1329.5},10,cjs.Ease.get(1)).to({x:139.9,y:1478.5},5,cjs.Ease.get(1)).wait(1).to({x:139.8,y:434.5},0).wait(21).to({_off:true},1).wait(1));

	// Символ 5
	this.instance_4 = new lib.Символ5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(237,349.5,1,1,0,0,0,44.6,262.4);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).wait(16).to({y:341.5},4,cjs.Ease.get(-1)).to({x:237.5,y:601.9},7,cjs.Ease.get(-1)).to({x:238,y:899.6},8,cjs.Ease.get(1)).to({y:879.6},5,cjs.Ease.get(1)).wait(10).to({y:863.6},5,cjs.Ease.get(-1)).to({y:1004.6},10,cjs.Ease.get(-1)).to({y:1145.6},10,cjs.Ease.get(1)).to({y:1125.6},5,cjs.Ease.get(1)).wait(11).to({y:1105.6},4,cjs.Ease.get(-1)).to({y:453.7},9,cjs.Ease.get(-1)).to({y:725.4},11).to({y:715.4},5,cjs.Ease.get(1)).wait(35).to({y:705.4},5,cjs.Ease.get(-1)).to({x:238.3,y:960.3},9,cjs.Ease.get(-1)).to({x:238.5,y:1243.5},10,cjs.Ease.get(1)).to({x:237.5,y:1392.5},5,cjs.Ease.get(1)).wait(1).to({x:237,y:349.5},0).wait(18).to({_off:true},1).wait(1));

	// Символ 5
	this.instance_5 = new lib.Символ5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(333.8,518.5,1,1,0,0,0,44.6,262.4);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({_off:false},0).wait(19).to({y:510.5},4,cjs.Ease.get(-1)).to({x:334.2,y:770.9},7,cjs.Ease.get(-1)).to({x:334.8,y:1068.6},8,cjs.Ease.get(1)).to({y:1048.6},5,cjs.Ease.get(1)).wait(10).to({y:1032.6},5,cjs.Ease.get(-1)).to({y:1173.6},10,cjs.Ease.get(-1)).to({y:1314.6},10,cjs.Ease.get(1)).to({y:1294.6},5,cjs.Ease.get(1)).wait(11).to({y:1274.6},4,cjs.Ease.get(-1)).to({y:784},10,cjs.Ease.get(-1)).to({y:1237.5},10).wait(40).to({y:1157.5},0).to({y:1147.5},5,cjs.Ease.get(-1)).to({x:334.3,y:1270.7},9,cjs.Ease.get(-1)).to({x:333.8,y:1407.5},10,cjs.Ease.get(1)).to({y:1566.5},5,cjs.Ease.get(1)).wait(1).to({y:518.5},0).wait(15).to({_off:true},1).wait(1));

	// Символ 5
	this.instance_6 = new lib.Символ5();
	this.instance_6.parent = this;
	this.instance_6.setTransform(431,429.5,1,1,0,0,0,44.6,262.4);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({_off:false},0).wait(22).to({y:421.5},4,cjs.Ease.get(-1)).to({x:431.5,y:681.9},7,cjs.Ease.get(-1)).to({x:432,y:979.6},8,cjs.Ease.get(1)).to({y:959.6},5,cjs.Ease.get(1)).wait(10).to({y:943.6},5,cjs.Ease.get(-1)).to({y:1084.6},10,cjs.Ease.get(-1)).to({y:1225.6},10,cjs.Ease.get(1)).to({y:1205.6},5,cjs.Ease.get(1)).wait(11).to({y:1185.6},4,cjs.Ease.get(-1)).to({y:497.2},9,cjs.Ease.get(-1)).to({y:724.4},11).to({y:714.4},5,cjs.Ease.get(1)).wait(36).to({y:704.4},5,cjs.Ease.get(-1)).to({y:996.2},9,cjs.Ease.get(-1)).to({y:1320.5},10,cjs.Ease.get(1)).to({x:431,y:1475.4},5,cjs.Ease.get(1)).wait(1).to({y:429.4},0).wait(11).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-981,-91.3,108,125.6);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(94,97.5,1,1,0,0,0,94,97.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(-66.1,-33.3,274.9,251.3), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 1
	this.instance = new lib.Symbol19();
	this.instance.parent = this;
	this.instance.setTransform(81,87.8,1,1,0,0,0,61,80.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(146.5,215,1,1,0,0,0,105.5,151);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(-46.1,-26.3,310.1,403.4), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 1
	this.slot2 = new lib.Символ1();
	this.slot2.parent = this;
	this.slot2.setTransform(237.8,362.4,1,1,0,0,0,237.8,262.4);

	this.timeline.addTween(cjs.Tween.get(this.slot2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(-981,8.7,108,125.6), null);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 2
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(201,140.5,1,1,0,0,0,201,140.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 4
	this.slot1 = new lib.Символ4();
	this.slot1.parent = this;
	this.slot1.setTransform(204.9,138.9,0.501,0.501,-6.3,0,0,238,262.5);

	this.timeline.addTween(cjs.Tween.get(this.slot1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol22, new cjs.Rectangle(-416.3,0,818.3,281), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 2
	this.slot = new lib.Symbol22();
	this.slot.parent = this;
	this.slot.setTransform(191.2,-127.8,1,1,0,0,0,191.2,-137.8);

	this.timeline.addTween(cjs.Tween.get(this.slot).wait(1));

	// Symbol 23
	this.txt = new lib.Symbol23();
	this.txt.parent = this;
	this.txt.setTransform(201.4,139.2,1,1,0,0,0,148.9,49.1);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	// Layer 1
	this.instance = new lib.book();
	this.instance.parent = this;
	this.instance.setTransform(3,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-537.4,0,942.5,293), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol4();
	this.instance.parent = this;
	this.instance.setTransform(193.2,-131.9,1,1,0,0,0,193.2,-127.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-136.7},19,cjs.Ease.get(-1)).to({y:-141.9},20,cjs.Ease.get(1)).to({y:-136.9},20,cjs.Ease.get(-1)).to({y:-131.9},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-537.4,-4,942.5,293);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
		
		this.fon.x = - stage.mouseX / 30;
		this.fon.y = - stage.mouseY / 30;
		}
		
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 4
	this.instance = new lib.Symbol12();
	this.instance.parent = this;
	this.instance.setTransform(516.5,192,1,1,0,0,0,95.5,170);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 5
	this.instance_1 = new lib.Symbol17();
	this.instance_1.parent = this;
	this.instance_1.setTransform(299,249.5,1,1,0,0,0,119,50.5);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 7
	this.instance_2 = new lib.Symbol3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(289.2,-116.8,1,1,0,0,0,193.2,-127.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Layer 6
	this.instance_3 = new lib.Symbol6();
	this.instance_3.parent = this;
	this.instance_3.setTransform(43,146,1,1,0,0,0,126,183);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Layer 1
	this.fon = new lib.Symbol18();
	this.fon.parent = this;
	this.fon.setTransform(-0.1,0.4,1,1,0,0,0,53.9,31.4);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-141.4,86.7,1140.5,425.4);
// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/back.jpg?1489674284032", id:"back"},
		{src:"images/body.png?1489674284032", id:"body"},
		{src:"images/book.png?1489674284032", id:"book"},
		{src:"images/bookmm.png?1489674284032", id:"bookmm"},
		{src:"images/button.png?1489674284032", id:"button"},
		{src:"images/for_03.png?1489674284032", id:"for_03"},
		{src:"images/for_06.png?1489674284032", id:"for_06"},
		{src:"images/for_10.png?1489674284032", id:"for_10"},
		{src:"images/for_13.png?1489674284032", id:"for_13"},
		{src:"images/for_16.png?1489674284032", id:"for_16"},
		{src:"images/for_19.png?1489674284032", id:"for_19"},
		{src:"images/head.png?1489674284032", id:"head"},
		{src:"images/hend.png?1489674284032", id:"hend"},
		{src:"images/man.png?1489674284032", id:"man"},
		{src:"images/rali.jpg?1489674284032", id:"rali"},
		{src:"images/sloRa1.jpg?1489674284032", id:"sloRa1"},
		{src:"images/svett.png?1489674284032", id:"svett"},
		{src:"images/xlog2.png?1489674284032", id:"xlog2"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;