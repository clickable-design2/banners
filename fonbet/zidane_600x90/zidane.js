(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,970,90);


(lib.blik = function() {
	this.initialize(img.blik);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,224,84);


(lib.corona = function() {
	this.initialize(img.corona);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,178,200);


(lib.doska = function() {
	this.initialize(img.doska);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,140,82);


(lib.doska2 = function() {
	this.initialize(img.doska2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,140,82);


(lib.fog = function() {
	this.initialize(img.fog);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,408,96);


(lib.konte = function() {
	this.initialize(img.konte);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,157,200);


(lib.kubok = function() {
	this.initialize(img.kubok);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,53,90);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,276,84);


(lib.text = function() {
	this.initialize(img.text);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,310,37);


(lib.text2 = function() {
	this.initialize(img.text2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,302,44);// helper functions:

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


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFAD00","#FFCC00"],[0,1],-37.1,-10,37.2,9.9).s().p("AB+M3IqGitQgwgOANgwIFw1fQANgwAxANIKGCuQAwANgNAwIlwVeQgLAnggAAQgIAAgLgDg");
	this.shape.setTransform(55.9,82.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(0,0,111.8,165.1), null);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-9,-60,0.929,0.929);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(-9,-60,256.3,78), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.text2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(0,0,302,44), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.text();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(0,0,310,37), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AF2DnIgcgEIAGgiQAYABAIgBQAHgCADgJIACgFIgKAAQgLAAgGgFQgGgGgDgKIgjhsIAzAAIAYBbQAAABAAAAQABABAAAAQABAAAAABQABAAABAAIAEAAIAbheIAyAAIgpCEQgEANgFAJQgEAKgFAFQgKAMgUACIgKAAIgMAAgAnBDiQgQgFgIgLQgJgKgFgSQgEgSAAgaQAAgaAEgSQAFgSAJgKQARgVArAAQARAAAOACQAOABAMAEIgEAkIg1gBQgQAAgFAKQgDAGgCAKIgBAZIABAZQACAKADAGQAFAKAQAAQAmAAATgCIAEAkQgMAEgPACQgPACgTAAQgVAAgPgFgAABDkIAAi0QApgCAgAAQAlAAAOAKQAIAFADAJQAEAJAAAOQAAAUgIAKQgEAEgGADQgGADgIABIAAABQAKABAHAEQAHADAFAGQAIAMAAAWQAAAbgOAKQgOAKgiAAQgkAAgugCgAAxDDIAZABQAOAAAEgFQAFgEAAgOQAAgOgFgFQgFgEgOAAIgYAAgAAxB4IAYAAQAMAAAEgEQAEgEAAgMQAAgMgEgEQgFgDgMAAIgXAAgAEQDkIgSg8QgEgGgEgEQgEgFgFgBIgUgBQADAJAAAIIAAA8IgxAAIAAi0IAxAAIAAAwQAAALgDALIAJAAQAJAAAGgDQAGgDADgFQAHgMAKgqIACgFIAxAAIgSA5IgEAIQgCAFgDACIgFAFIgHAEIgRAEIAAACQALABAHAEQAHACAFAFQAFAFAEAKIAWBCgAg/DkIgKgrIg3AAIgLArIgyAAIAxinQABgGAFgDQAFgEAFAAIAuAAQAGAAAEAEQAFADABAGIAxCngAhTCWIgOhBIgHAAIgPBBIAkAAgAkkDkIAAiOIgzAAIAAgmICYAAIAAAmIg0AAIAACOgAkWgJIgDgnIhxAAIgEAnIgjAAIAAhIIAUAAQAQgtAGg+QACgSAMgKQAFgGAIgCQAHgDAKAAIBQAAIAACSIAYAAIAABIgAlVi+QgEADAAAHQgEAkgFAWQgFAWgJATIA1AAIAAhxIgRAAQgGAAgDAEgAobgyQgPgFgJgKQgJgLgEgSQgFgSAAgaQAAgZAFgSQAEgSAJgKQASgVArAAQAQAAAOABQAPACAMADIgEAkIg1gBQgQAAgGALQgDAFgBAKIgBAZIABAaQABAKADAFQAGALAQAAQAmAAATgCIAEAjQgMAEgPACQgPACgTAAQgWAAgPgFgAhSgvIgEglQALgCAGgEQAGgDADgJQAIgWAEg9QABgVAMgLQALgKAVAAIBRAAIAACzIgxAAIAAiSIgRAAQgNAAAAANQgGBFgIAYQgJAagRAKQgIAFgKABIgKAAIgNgBgAG8gwIgBAAIAAizIAxAAIAABAIAUAAQAoAAAPAMQAHAHAEALQAEAMAAARQAAAQgEAMQgDALgHAHQgHAGgMADQgMADgQAAQgzAAgagCgAHshRIAUAAQANAAAEgFQAEgEAAgQQAAgQgEgFQgEgFgNAAIgUAAgAjUg6QgMgKAAgRIAAhoQAAgJADgHQADgHAGgFQALgLASAAQBAAAAZADIgCAjIhDAAQgGAAgDADQgDADAAAFIAAAWIBFAAIAAAiIhFAAIAAAbQAAAFADADQADADAGAAIBDAAIACAjQguADgrAAQgSAAgLgLgAFCgwIAAiNIgzAAIAAgmICYAAIAAAmIg0AAIAACNgADbgwIgLgqIg3AAIgLAqIgyAAIAyimQABgGAEgEQAFgDAGAAIAtAAQAGAAAFADQAEAEACAGIAxCmgADHh+IgPhAIgHAAIgPBAIAlAAg");
	this.shape.setTransform(132.4,42.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#E50000","#FF1723"],[0,1],-85.9,0,85.9,0).s().p("As6G+QgZAAgFgmQgCgLAAgPIAAr8QAAg/AgAAIZ1AAQAgAAAAA/IAAMDQgCA5geAAg");
	this.shape_1.setTransform(132.9,40.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC0000").s().p("As4A8QghAAAAg/IAAglQAFAmAZgBIZ1AAQAeABACg5IAAA4QAAA/ggAAg");
	this.shape_2.setTransform(133,85.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(47,-4.4,171.8,95.5), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.corona();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.882,0.882);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(0,0,157,176.4), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.doska2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.882,0.882);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(0,0,123.5,72.4), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.konte();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.882,0.882);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(0,0,138.5,176.4), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.doska();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.882,0.882);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(0,0,123.5,72.4), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AF2DnIgcgEIAGgiQAYABAIgBQAHgCADgJIACgFIgKAAQgLAAgGgFQgGgGgDgKIgjhsIAzAAIAYBbQAAABAAAAQAAABABAAQABAAAAABQABAAABAAIAEAAIAbheIAyAAIgpCEQgEANgFAJQgEAKgFAFQgKAMgUACIgKAAIgMAAgAnBDiQgQgFgIgLQgJgKgFgSQgEgSAAgaQAAgaAEgSQAFgSAJgKQARgVArAAQARAAAOACQAOABAMAEIgEAkIg1gBQgQAAgFAKQgDAGgCAKIgBAZIABAZQACAKADAGQAFAKAQAAQAmAAATgCIAEAkQgMAEgPACQgPACgTAAQgVAAgPgFgAABDkIAAi0QApgCAgAAQAlAAAOAKQAIAFADAJQAEAJAAAOQAAAUgIAKQgEAEgGADQgGADgIABIAAABQAKABAHAEQAHADAFAGQAIAMAAAWQAAAbgOAKQgOAKgiAAQgkAAgugCgAAxDDIAZABQAOAAAEgFQAFgEAAgOQAAgOgFgFQgFgEgOAAIgYAAgAAxB4IAYAAQAMAAAEgEQAEgEAAgMQAAgMgEgEQgFgDgMAAIgXAAgAEQDkIgSg8QgEgGgEgEQgEgFgFgBIgUgBQADAJAAAIIAAA8IgxAAIAAi0IAxAAIAAAwQAAALgDALIAJAAQAJAAAGgDQAGgDADgFQAHgMAKgqIACgFIAxAAIgSA5IgEAIQgCAFgDACIgFAFIgHAEIgRAEIAAACQALABAHAEQAHACAFAFQAFAFAEAKIAWBCgAg/DkIgKgrIg3AAIgLArIgyAAIAxinQABgGAFgDQAFgEAFAAIAuAAQAGAAAEAEQAFADABAGIAxCngAhTCWIgOhBIgHAAIgPBBIAkAAgAkkDkIAAiOIgzAAIAAgmICYAAIAAAmIg0AAIAACOgAkWgJIgDgnIhxAAIgEAnIgjAAIAAhIIAUAAQAQgtAGg+QACgSAMgKQAFgGAIgCQAHgDAKAAIBQAAIAACSIAYAAIAABIgAlVi+QgEADAAAHQgEAkgFAWQgFAWgJATIA1AAIAAhxIgRAAQgGAAgDAEgAobgyQgPgFgJgKQgJgLgEgSQgFgSAAgaQAAgZAFgSQAEgSAJgKQASgVArAAQAQAAAOABQAPACAMADIgEAkIg1gBQgQAAgGALQgDAFgBAKIgBAZIABAaQABAKADAFQAGALAQAAQAmAAATgCIAEAjQgMAEgPACQgPACgTAAQgWAAgPgFgAhSgvIgEglQALgCAGgEQAGgDADgJQAIgWAEg9QABgVAMgLQALgKAVAAIBRAAIAACzIgxAAIAAiSIgRAAQgNAAAAANQgGBFgIAYQgJAagRAKQgIAFgKABIgKAAIgNgBgAG8gwIgBAAIAAizIAxAAIAABAIAUAAQAoAAAPAMQAHAHAEALQAEAMAAARQAAAQgEAMQgDALgHAHQgHAGgMADQgMADgQAAQgzAAgagCgAHshRIAUAAQANAAAEgFQAEgEAAgQQAAgQgEgFQgEgFgNAAIgUAAgAjUg6QgMgKAAgRIAAhoQAAgJADgHQADgHAGgFQALgLASAAQBAAAAZADIgCAjIhDAAQgGAAgDADQgDADAAAFIAAAWIBFAAIAAAiIhFAAIAAAbQAAAFADADQADADAGAAIBDAAIACAjQguADgrAAQgSAAgLgLgAFCgwIAAiNIgzAAIAAgmICYAAIAAAmIg0AAIAACNgADbgwIgLgqIg3AAIgLAqIgyAAIAyimQABgGAEgEQAFgDAGAAIAtAAQAGAAAFADQAEAEACAGIAxCmgADHh+IgPhAIgHAAIgPBAIAlAAg");
	this.shape.setTransform(133.1,37);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#009900","#339900"],[0,1],-85.8,0,85.8,0).s().p("As4G9QghAAAAhAIAAr5QAAhAAhAAIZyAAQAgAAAABAIAAL5QAABAggAAg");
	this.shape_1.setTransform(133.5,34.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Слой 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006600").s().p("As5GQQggAAAAg/IAAqhQAAg/AgAAIZzAAQAgAAAAA/IAAKhQAAA/ggAAg");
	this.shape_2.setTransform(133.5,45.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(47.7,-9.8,171.7,95.5), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.blik();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(0,0,224,84), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhLxAHCIAAuDMCXjAAAIAAODg");
	this.shape.setTransform(485,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(0,0,970,90), null);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ20();
	this.instance.parent = this;
	this.instance.setTransform(55.9,82.5,1,1,0,0,0,55.9,82.5);
	this.instance.alpha = 0.5;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ21, new cjs.Rectangle(0,0,111.8,165.1), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.parent = this;
	this.instance.setTransform(132.2,33,1,1,0,0,0,131.9,37.8);

	this.instance_1 = new lib.Символ10();
	this.instance_1.parent = this;
	this.instance_1.setTransform(131.7,35.3,1,1,0,0,0,132,35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(47.3,-9.2,171.8,95.5);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ9();
	this.instance.parent = this;
	this.instance.setTransform(131.9,35.3,1,1,0,0,0,131.9,37.8);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(47.3,-12,171.8,95.8), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_69 = new cjs.Graphics().p("AzPGGQgxAAAAgyIAAqnQAAgyAxAAMAmeAAAQAzAAAAAyIAAKnQAAAygzAAg");
	var mask_graphics_120 = new cjs.Graphics().p("AzPGGQgxAAAAgyIAAqnQAAgyAxAAMAmeAAAQAzAAAAAyIAAKnQAAAygzAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(69).to({graphics:mask_graphics_69,x:313.4,y:-26.6}).wait(51).to({graphics:mask_graphics_120,x:313.4,y:-26.6}).wait(21));

	// Слой 5
	this.instance = new lib.Символ21();
	this.instance.parent = this;
	this.instance.setTransform(99.8,-23.8,1,1,0,0,0,55.9,82.5);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(69).to({_off:false},0).to({x:315.5},25,cjs.Ease.get(-1)).to({x:595.8},26,cjs.Ease.get(1)).to({_off:true},1).wait(20));

	// Слой 4
	this.instance_1 = new lib.Символ19();
	this.instance_1.parent = this;
	this.instance_1.setTransform(322.2,-130.6,1,1,0,0,0,128.2,39);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(49).to({y:-78.6},10,cjs.Ease.get(-1)).to({y:32.9},10,cjs.Ease.get(1)).wait(52).to({y:29.7},0).to({y:90.9},9,cjs.Ease.get(-1)).to({y:221.4},10,cjs.Ease.get(1)).wait(1));

	// text.png
	this.instance_2 = new lib.Символ17();
	this.instance_2.parent = this;
	this.instance_2.setTransform(315,-48.5,1,1,0,0,0,155,18.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(49).to({y:27.5},10,cjs.Ease.get(-1)).to({y:103.5},10,cjs.Ease.get(1)).wait(52).to({y:-280.5},0).to({y:-170.6},9,cjs.Ease.get(-1)).to({y:-48.5},10,cjs.Ease.get(1)).wait(1));

	// text2.png
	this.instance_3 = new lib.Символ18();
	this.instance_3.parent = this;
	this.instance_3.setTransform(314,-8,1,1,0,0,0,151,22);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(49).to({y:152},10,cjs.Ease.get(-1)).to({y:312},10,cjs.Ease.get(1)).wait(52).to({y:-120},0).to({y:-66.9},9,cjs.Ease.get(-1)).to({y:-8},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(160,-229.6,310,243.6);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ6();
	this.instance.parent = this;
	this.instance.setTransform(112,42,1,1,0,0,0,112,42);
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(0,0,224,84), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ5();
	this.instance.parent = this;
	this.instance.setTransform(19,25,1,1,0,0,0,112,42);
	this.instance.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.531},9,cjs.Ease.get(-1)).to({alpha:0.789},10,cjs.Ease.get(1)).to({alpha:0.57},9,cjs.Ease.get(-1)).to({alpha:0.301},11,cjs.Ease.get(1)).wait(16));

	// Слой 1
	this.instance_1 = new lib.kubok();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(55));

	// Слой 2
	this.instance_2 = new lib.fog();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-209,17);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(55));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-209,-17,408,130);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// doska.png
	this.instance = new lib.Символ11();
	this.instance.parent = this;
	this.instance.setTransform(31.4,102.1,1,1,0,0,0,61.8,36.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:92.6},9,cjs.Ease.get(-1)).to({y:82},10,cjs.Ease.get(1)).to({y:82.1},10,cjs.Ease.get(-1)).to({y:92.1},9).to({y:102.1},10,cjs.Ease.get(1)).wait(31));

	// konte.png
	this.instance_1 = new lib.Символ12();
	this.instance_1.parent = this;
	this.instance_1.setTransform(28.8,85.2,1,1,0,0,0,69.2,88.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(79));

	// doska2.png
	this.instance_2 = new lib.Символ13();
	this.instance_2.parent = this;
	this.instance_2.setTransform(189.6,103.1,1,1,0,0,0,61.8,36.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({y:103},10,cjs.Ease.get(-1)).to({y:90.5},9).to({y:77.8},10,cjs.Ease.get(1)).to({y:77.9},11,cjs.Ease.get(-1)).to({y:90.5},9).to({y:103.1},10,cjs.Ease.get(1)).wait(1));

	// corona.png
	this.instance_3 = new lib.Символ14();
	this.instance_3.parent = this;
	this.instance_3.setTransform(189.3,85.2,1,1,0,0,0,78.5,88.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(79));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.4,-3,308.2,176.4);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ2();
	this.instance.parent = this;
	this.instance.setTransform(315,45,1,1,0,0,0,485,45);
	this.instance.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.bg();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-177,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(-177,0,977,90), null);


// stage content:
(lib.zidane = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btn
	this.instance = new lib.Символ8();
	this.instance.parent = this;
	this.instance.setTransform(526.2,45.7,0.761,0.761,0,0,0,132,35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// text
	this.instance_1 = new lib.Символ7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(257.7,77,0.607,0.607,0,0,0,155,22.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// treners
	this.instance_2 = new lib.Символ3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(100.6,86.4,0.916,0.916,0,0,0,78.5,88.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// kubok
	this.instance_3 = new lib.Символ4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(129.1,50.5,0.916,0.916,0,0,0,26.6,45.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// bg
	this.instance_4 = new lib.Символ1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(485,46,1,1,0,0,0,485,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(123,-30.7,977,240.1);
// library properties:
lib.properties = {
	width: 600,
	height: 90,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg?1490960124133", id:"bg"},
		{src:"images/blik.png?1490960124133", id:"blik"},
		{src:"images/corona.png?1490960124133", id:"corona"},
		{src:"images/doska.png?1490960124133", id:"doska"},
		{src:"images/doska2.png?1490960124133", id:"doska2"},
		{src:"images/fog.png?1490960124133", id:"fog"},
		{src:"images/konte.png?1490960124133", id:"konte"},
		{src:"images/kubok.png?1490960124133", id:"kubok"},
		{src:"images/logo.png?1490960124133", id:"logo"},
		{src:"images/text.png?1490960124133", id:"text"},
		{src:"images/text2.png?1490960124133", id:"text2"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;