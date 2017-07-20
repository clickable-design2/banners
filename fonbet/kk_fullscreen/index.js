(function (lib, img, cjs, ss, an) {

// symbols:

(lib.btn1 = function() {
	this.initialize(img.btn1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,46);


(lib.doll = function() {
	this.initialize(img.doll);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,175,161);


(lib.doll2 = function() {
	this.initialize(img.doll2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,168);


(lib.iph2 = function() {
	this.initialize(img.iph2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,75,150);


(lib.mex = function() {
	this.initialize(img.mex);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,93,93);


(lib.mexball = function() {
	this.initialize(img.mexball);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,188,185);


(lib.money = function() {
	this.initialize(img.money);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,117,120);


(lib.new_zel = function() {
	this.initialize(img.new_zel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,93,93);


(lib.nzball = function() {
	this.initialize(img.nzball);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,188,185);


(lib.one = function() {
	this.initialize(img.one);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,21,36);


(lib.one_txt = function() {
	this.initialize(img.one_txt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,334,141);


(lib.port = function() {
	this.initialize(img.port);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,93,93);


(lib.portball = function() {
	this.initialize(img.portball);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,188,185);


(lib.rus = function() {
	this.initialize(img.rus);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,93,93);


(lib.rusball = function() {
	this.initialize(img.rusball);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,188,185);


(lib.ten = function() {
	this.initialize(img.ten);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,122);


(lib.three = function() {
	this.initialize(img.three);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,27,38);


(lib.three_txt = function() {
	this.initialize(img.three_txt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,238,103);


(lib.tickets = function() {
	this.initialize(img.tickets);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,94,111);


(lib.titile23 = function() {
	this.initialize(img.titile23);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,32);


(lib.title1 = function() {
	this.initialize(img.title1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,460,40);


(lib.title21 = function() {
	this.initialize(img.title21);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,134,38);


(lib.title22 = function() {
	this.initialize(img.title22);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,28);


(lib.two = function() {
	this.initialize(img.two);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,28,37);


(lib.two_txt = function() {
	this.initialize(img.two_txt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,97);


(lib.vs = function() {
	this.initialize(img.vs);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,18,11);// helper functions:

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


(lib.Символ78 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tickets();
	this.instance.parent = this;
	this.instance.setTransform(-6,-32,0.581,0.581);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ78, new cjs.Rectangle(-6,-32,54.6,64.5), null);


(lib.Символ77 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.money();
	this.instance.parent = this;
	this.instance.setTransform(-49.8,-18.4,0.634,0.634,-25.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ77, new cjs.Rectangle(-49.8,-50.3,99.7,100.6), null);


(lib.Символ76 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.iph2();
	this.instance.parent = this;
	this.instance.setTransform(-7.2,-35.1,0.428,0.428,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ76, new cjs.Rectangle(-23.8,-35.1,47.6,70.3), null);


(lib.Символ74 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.three_txt();
	this.instance.parent = this;
	this.instance.setTransform(-119,-52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ74, new cjs.Rectangle(-119,-52,238,103), null);


(lib.Символ73 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.two_txt();
	this.instance.parent = this;
	this.instance.setTransform(-150,-49);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ73, new cjs.Rectangle(-150,-49,300,97), null);


(lib.Символ72 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.one_txt();
	this.instance.parent = this;
	this.instance.setTransform(-166,-76);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ72, new cjs.Rectangle(-166,-76,334,141), null);


(lib.Символ71 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.three();
	this.instance.parent = this;
	this.instance.setTransform(-13,-19);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ71, new cjs.Rectangle(-13,-19,27,38), null);


(lib.Символ70 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.two();
	this.instance.parent = this;
	this.instance.setTransform(-14,-18);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ70, new cjs.Rectangle(-14,-18,28,37), null);


(lib.Символ69 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.one();
	this.instance.parent = this;
	this.instance.setTransform(-10,-18);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ69, new cjs.Rectangle(-10,-18,21,36), null);


(lib.Символ68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.vs();
	this.instance.parent = this;
	this.instance.setTransform(-9,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ68, new cjs.Rectangle(-9,-6,18,11), null);


(lib.Символ67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rus();
	this.instance.parent = this;
	this.instance.setTransform(-56,-25,0.547,0.547);

	this.instance_1 = new lib.mex();
	this.instance_1.parent = this;
	this.instance_1.setTransform(6,-25,0.547,0.547);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ67, new cjs.Rectangle(-56,-25,112.9,50.9), null);


(lib.Символ66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rus();
	this.instance.parent = this;
	this.instance.setTransform(-55.9,-25.4,0.547,0.547);

	this.instance_1 = new lib.port();
	this.instance_1.parent = this;
	this.instance_1.setTransform(5.1,-25.4,0.547,0.547);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ66, new cjs.Rectangle(-55.9,-25.4,111.9,50.9), null);


(lib.Символ65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rus();
	this.instance.parent = this;
	this.instance.setTransform(-57,-25,0.547,0.547);

	this.instance_1 = new lib.new_zel();
	this.instance_1.parent = this;
	this.instance_1.setTransform(5,-25,0.547,0.547);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ65, new cjs.Rectangle(-57,-25,112.9,50.9), null);


(lib.Символ63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.btn1();
	this.instance.parent = this;
	this.instance.setTransform(-60.6,-13.9,0.607,0.607);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ63, new cjs.Rectangle(-60.6,-13.9,121.3,27.9), null);


(lib.Символ57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","#000000","rgba(0,0,0,0)"],[0,0.494,1],-339,0,339,0).s().p("Eg09AM/IAA59MBp7AAAIAAZ9g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ57, new cjs.Rectangle(-339,-83.1,678,166.3), null);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.titile23();
	this.instance.parent = this;
	this.instance.setTransform(-73,-14);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ46, new cjs.Rectangle(-73,-14,150,32), null);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.title22();
	this.instance.parent = this;
	this.instance.setTransform(-31,-12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ45, new cjs.Rectangle(-31,-12,64,28), null);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.title21();
	this.instance.parent = this;
	this.instance.setTransform(-65,-17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ44, new cjs.Rectangle(-65,-17,134,38), null);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ41, new cjs.Rectangle(-212.6,-31.9,425.2,63.9), null);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("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");
	this.shape.setTransform(0,16.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AGwBtIADgXQgzgEgSgUQgJgKgDgQQgEgQAEgVQADgWAHgQQAHgQAMgJQAMgJATgGQATgFAbgBIADgYIA4AAIgDAZQAyADATAUQAJAKADAQQADAQgDAVQgGAtgXASQgYASg1ADIgDAXgAHuAtQAZgCAJgJQAIgKAEgZQADgXgGgKQgHgIgWgDgAGnghQgEAFgDAJQgDAJgCAMQgDAYAGAJQADAEAHADQAHADAMAAIANhZQgYACgJAJgAnOBoIAdjOIA4AAIgKBKIAVAAQAtAAAQAPQAQAOgGAoQgGAngPANQgQANgmAAQg+AAgegCgAmQBCIATAAQARAAAFgFQAFgFADgTQACgTgDgFQgDgHgPABIgWAAgA2ZBoIAdjOQAjgCAoAAQAnAAAjACIgKApIhYAAIgGApIAXAAQAXAAAPADQAPAEAJAHQARAOgGAkQgCATgGALQgFANgIAHQgRANgngBQg+AAgfgCgA1cBCIAWAAQASAAAGgFQAGgFACgSQACgPgEgEQgEgFgQABIgYAAgATGBpIgCgsQAQgDAGgDQAHgFAFgKQAMgYARhMQAJgqAtAAIBhAAIgdDOIg4AAIAYioIgQAAQgKABgFADQgEAEgCAKIgRBCQgIAbgGANQgIAOgIAKQgJAKgKAFQgKAFgMACIgIAAIgSgBgAwPBpIgCgsQAPgDAGgDQAHgFAFgKQANgYAQhMQAKgqAsAAIBiAAIgeDOIg4AAIAYioIgQAAQgKABgEADQgEAEgDAKIgRBCQgIAbgGANQgHAOgJAKQgIAKgLAFQgKAFgMACIgIAAIgRgBgAsVBlQgJgDgGgIQgMgOADgYIAPhwQADgUAOgLQAGgGAJgDQAJgDALAAQBJAAAbADIgGApIhLAAQgIAAgDADQgEADgBAHIgDAaIBNAAIgEAkIhPAAIgEAgQgBAHADADQADADAHAAIBKAAIgBApQgZADhHAAQgNAAgJgEgASJBoIgFgxIg/AAIgTAxIg7AAIBTjBQADgGAFgEQAFgDAHAAIA0AAQAHAAAFAEQAFAFABAGIAdC/gARVANIArAAIgHhJIgIAAgAOuBoIAMhZIg8AAIgMBZIg5AAIAdjOIA5AAIgLBMIA8AAIALhMIA4AAIgdDOgALeBoIAPhoQADgRAFgRIgCAAQgLAXgFAHIhLBsIg4AAIAdjOIA3AAIgPBlQgBANgIAXIADAAQAHgSAKgNIBKhqIA2AAIgdDOgADWBoIgFgxIhAAAIgSAxIg7AAIBTjBQADgGAFgEQAFgDAHAAIA0AAQAGAAAGAEQAFAFAAAGIAeC/gACiANIAqAAIgGhJIgJAAgAgFBoIAMhZIg7AAIgNBZIg4AAIAdjOIA4AAIgKBMIA6AAIALhMIA4AAIgdDOgAkXBoIAdjOIA5AAIgeDOgApYBoIAXiiIg7AAIAGgsICuAAIgGAsIg7AAIgXCigAxeBoIAPhoQACgRAGgRIgCAAQgLAXgGAHIhKBsIg4AAIAdjOIA2AAIgOBlQgCANgHAXIACAAQAIgSAJgNIBLhqIA2AAIgdDOg");
	this.shape_1.setTransform(-0.7,-21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ40, new cjs.Rectangle(-212.6,-31.9,425.2,63.9), null);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AtSEEIAEheIkJAAIgXBeIhVAAIAYitIArAAQAyheApiiQAMgsAcgXQAdgVAtAAIDFAAIgwFYIA4AAIgXCtgAupipQgKAHgEAVQgSBKgSA5QgUA6gUAnIByAAIAkkJIgfAAQgSAAgLAJgABTCmIA7mnIB0AAIgUCYIAtAAQBcAAAhAeQAgAggMBQQgKBOghAcQgQAOgcAIQgcAHgnAAQiAAAg/gGgADSBZIApAAQAiAAAMgLQALgKAFgmQAGgmgHgMQgGgMggAAIgvAAgAqDChQgUgHgNgPQgYgeAGgxIAgjlQAGgrAcgYQANgLARgGQATgGAXAAQCWAAA4AHIgOBUIiZAAQgRAAgGAFQgHAHgDAPIgGAzICeAAIgJBOIihAAIgIBAQgDAOAGAHQAHAFAOAAICYAAIgCBVQg0AGiRAAQgaAAgSgIgAQcCmIAfjVQAEgjAMgjIgEAAQgWAugMAPIiZDeIhyAAIA7mnIBwAAIgeDQQgDAcgQAuIAGAAQAPgjAUgcICYjbIBvAAIg8GngAHPCmIAvlMQAHgrAagaQANgMARgGQARgGASAAQBiAABkAJIgMBSIiJAAQgSAAgHAFQgIAHgCARIgsExgAhsCmIAZi1Ih6AAIgaC1Ih0AAIA7mnIB0AAIgVCdIB5AAIAXidIByAAIg8Gng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ38, new cjs.Rectangle(-122,-26,244,52), null);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AtSEEIAEheIkJAAIgXBeIhVAAIAYitIArAAQAyheApiiQAMgsAcgXQAdgVAtAAIDFAAIgwFYIA4AAIgXCtgAupipQgKAHgEAVQgSBKgSA5QgUA6gUAnIByAAIAkkJIgfAAQgSAAgLAJgABTCmIA7mnIB0AAIgUCYIAtAAQBcAAAhAeQAgAggMBQQgKBOghAcQgQAOgcAIQgcAHgnAAQiAAAg/gGgADSBZIApAAQAiAAAMgLQALgKAFgmQAGgmgHgMQgGgMggAAIgvAAgAqDChQgUgHgNgPQgYgeAGgxIAgjlQAGgrAcgYQANgLARgGQATgGAXAAQCWAAA4AHIgOBUIiZAAQgRAAgGAFQgHAHgDAPIgGAzICeAAIgJBOIihAAIgIBAQgDAOAGAHQAHAFAOAAICYAAIgCBVQg0AGiRAAQgaAAgSgIgAQcCmIAfjVQAEgjAMgjIgEAAQgWAugMAPIiZDeIhyAAIA7mnIBwAAIgeDQQgDAcgQAuIAGAAQAPgjAUgcICYjbIBvAAIg8GngAHPCmIAvlMQAHgrAagaQANgMARgGQARgGASAAQBiAABkAJIgMBSIiJAAQgSAAgHAFQgIAHgCARIgsExgAhsCmIAZi1Ih6AAIgaC1Ih0AAIA7mnIB0AAIgVCdIB5AAIAXidIByAAIg8Gng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ37, new cjs.Rectangle(-122,-26,244,52), null);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.title1();
	this.instance.parent = this;
	this.instance.setTransform(-224,-13);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ34, new cjs.Rectangle(-224,-13,460,40), null);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AFkCPQgNgQgFgXQgFgYAEggQAHhGAhgbQARgMAZgGQAZgHAiAAQAhABAXAFQAXAGANAKQAZAVgHAqQgFAggWAOQgXAMgxAEIhAAEQAAATAJAGQAKAGAVAAQAtAAAxgGIAGA2QgrAShCABQhJAAgbgggAG9gFQgJAIgGAcIAogDQASgBAHgFQAIgFACgOQABgLgGgEQgFgDgTAAQgWABgJAJgAi2CnQgYgGgPgQQgbgdAJhEQAFgjAKgXQALgWAPgOQAfgbBFgBQAjAAAXAIQAZAHAOAQQANAPAFAYQAEAYgFAiQgKBDgeAbQgfAbhEAAQgjAAgYgIgAiFAAQgFAGgDAOIgIAiQgFAlAGAMQACAFAHADQAHADAMAAQAWAAAKgNQAFgHAEgNIAGghQAGgmgFgLQgGgMgWAAQgYAAgJANgALiCpIBvjfQAKgSANgPIiQAAIAFhHIDLAAQAYAAAIAMQAIAMgJAVIiNEagADDCpIAViUQACgOgDgEQgDgEgKABQgXAAgiAaIgUCPIhWAAIAgjsIBFAAIAAAtQA1gzA1gBQAQABAMAEQAMAEAIAJQAIAKAEALQADANgDARIgYCugAl8CpIAViYQACgKgCgEQgDgDgJAAQgMAAgPAGQgPAHgRAOIgUCOIhXAAIAvlNIBXAAIgKBPQgEAbgKAdQAZgVAXgMQAYgMAXAAQARABANAEQAMAEAJAJQARASgGAhIgYCugAs+CpIAvlHQAegEBhgCQAjABAZAGQAZAHAMALQAOANAFAWQADAXgDAfQgJA+gcAVQgNAMgXAFQgXAGggAAQgbAAgegFIgQB2gAq/hhIgNBXIApAAQAYAAAJgIQAJgIAEgfQAEgYgHgJQgGgIgVgBgAvLCpIAijsIBVAAIggDsgAuKhhQgbAAAEgbIADgaQACgYAaAAIAiAAQAOAAAGAIQAHAGgCAOIgDAZQgCAMgHAFQgHAHgNAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ33, new cjs.Rectangle(-97.2,-17.4,194.4,34.9), null);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ten();
	this.instance.parent = this;
	this.instance.setTransform(-61,-12.1,1,0.198);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ30, new cjs.Rectangle(-61,-12.1,122,24.2), null);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.portball();
	this.instance.parent = this;
	this.instance.setTransform(-24,-24,0.259,0.259);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ29, new cjs.Rectangle(-24,-24,48.7,48), null);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ten();
	this.instance.parent = this;
	this.instance.setTransform(-88.6,-20.7,1.453,0.34);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ28, new cjs.Rectangle(-88.6,-20.7,177.3,41.5), null);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ten();
	this.instance.parent = this;
	this.instance.setTransform(-101,-61);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ27, new cjs.Rectangle(-101,-61,122,122), null);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ten();
	this.instance.parent = this;
	this.instance.setTransform(-71,-22,1,0.36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ26, new cjs.Rectangle(-71,-22,122,43.9), null);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rusball();
	this.instance.parent = this;
	this.instance.setTransform(-28,-28,0.298,0.298);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(-28,-28,56,55.1), null);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mexball();
	this.instance.parent = this;
	this.instance.setTransform(-39,-38.4,0.415,0.415);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(-39,-38.4,78,76.8), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.nzball();
	this.instance.parent = this;
	this.instance.setTransform(-39,-38.4,0.415,0.415);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(-39,-38.4,78,76.8), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.doll();
	this.instance.parent = this;
	this.instance.setTransform(-48.3,-44.4,0.552,0.552);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(-48.3,-44.4,96.6,88.9), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.doll2();
	this.instance.parent = this;
	this.instance.setTransform(-69,-46.4,0.552,0.552);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(-69,-46.4,138,92.8), null);


(lib.Символ64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 67
	this.instance = new lib.Символ67();
	this.instance.parent = this;
	this.instance.setTransform(152,14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 66
	this.instance_1 = new lib.Символ66();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-41,14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Символ 65
	this.instance_2 = new lib.Символ68();
	this.instance_2.parent = this;
	this.instance_2.setTransform(152.2,39);

	this.instance_3 = new lib.Символ68();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-41,39);

	this.instance_4 = new lib.Символ68();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-235.3,39);

	this.instance_5 = new lib.Символ65();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-234.8,14.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ64, new cjs.Rectangle(-291.8,-11,500.7,55), null);


(lib.Символ62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ63();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.181,1.181);
	this.instance.alpha = 0.398;
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ63();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:1.18,scaleY:1.18},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.6,-13.9,121.3,27.9);


(lib.Символ60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ62();
	this.instance.parent = this;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ60, new cjs.Rectangle(-71.6,-16.4,143.3,33), null);


(lib.Символ59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ60();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.13,scaleY:1.13},9,cjs.Ease.get(-1)).to({scaleX:1.27,scaleY:1.27},10,cjs.Ease.get(1)).to({scaleX:1.14,scaleY:1.14},10,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.6,-13.9,121.3,27.9);


(lib.Символ58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ57();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ58, new cjs.Rectangle(-339,-83.1,678,166.3), null);


(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ34();
	this.instance.parent = this;
	this.instance.setTransform(0,-0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-0.1,regY:-0.1,scaleX:0.85,scaleY:0.85,x:-0.1,y:-0.9},4,cjs.Ease.get(0.99)).to({regX:0,regY:0,scaleX:1,scaleY:1,x:0,y:-0.7},4,cjs.Ease.get(0.99)).to({regX:-0.1,regY:-0.1,scaleX:0.85,scaleY:0.85,x:-0.1,y:-0.9},4,cjs.Ease.get(0.99)).to({regX:0,regY:0,scaleX:1,scaleY:1,x:0,y:-0.7},4,cjs.Ease.get(0.99)).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-224,-13.7,460,40);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 46
	this.instance = new lib.Символ46();
	this.instance.parent = this;
	this.instance.setTransform(25.5,11.1,1,1,0,0,0,-70.7,7.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:40.5},9,cjs.Ease.get(1)).to({x:25.5},10,cjs.Ease.get(1)).to({x:45.5},10,cjs.Ease.get(1)).to({x:25.5},10,cjs.Ease.get(1)).to({scaleX:1.3,scaleY:1.3},10,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},10,cjs.Ease.get(1)).wait(1));

	// Символ 45
	this.instance_1 = new lib.Символ45();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-9.8,12.8,1,1,0,0,0,0,11.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:5.2},9,cjs.Ease.get(1)).to({x:-9.8},10,cjs.Ease.get(1)).to({regX:-0.1,scaleX:1.43,scaleY:1.43,x:-10},10,cjs.Ease.get(1)).to({regX:0,scaleX:1,scaleY:1,x:-9.8},10,cjs.Ease.get(1)).to({x:-24.8},10,cjs.Ease.get(1)).to({x:-9.8},10,cjs.Ease.get(1)).wait(1));

	// Символ 44
	this.instance_2 = new lib.Символ44();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-49.3,11.7,1,1,0,0,0,60.1,11.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:11.1,scaleX:1.22,scaleY:1.22,y:11.6},9,cjs.Ease.get(1)).to({regY:11.2,scaleX:1,scaleY:1,y:11.7},10,cjs.Ease.get(1)).to({x:-64.3},10,cjs.Ease.get(1)).to({x:-49.3},10,cjs.Ease.get(1)).to({x:-64.3},10,cjs.Ease.get(1)).to({x:-49.3},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-174.4,-16.5,347.6,38);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ40();
	this.instance.parent = this;
	this.instance.setTransform(0,0.2,0.863,0.863);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ41();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,1.4,0.863,0.863);
	this.instance_1.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance_1.cache(-215,-34,429,68);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ39, new cjs.Rectangle(-185.5,-28.1,374,62), null);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ38();
	this.instance.parent = this;
	this.instance.setTransform(0,10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ37();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,11.5);
	this.instance_1.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance_1.cache(-124,-28,248,56);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ36, new cjs.Rectangle(-124,-16.5,252,59), null);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AIDDPQgUgXgGghQgHggAEgqIAAgIQALhlAwgnQAYgSAlgJQAjgJAxAAQAxABAhAHQAhAIASAPQAkAfgJA9QgHAogZAVIgHAEQghAThIAGIhcAGQAAAaANAJQAOAJAfAAQBBAABGgJIAKBNQg+AchgAAQhqAAgmgtgAKDgJQgNANgIApIA5gFQAagBALgIQALgHACgUQACgQgIgGQgIgEgbAAQggABgNAMgAkHDyQgkgKgVgWQgmgpAMhcIAAgIQAHgxAPgiQAPghAWgUQAtgoBjAAQAzAAAiALQAkALAUAVQATAWAHAkQAGAigHAxIAAABQgOBggsAnQgtAnhiAAQgyAAgjgKgAjBAAQgHAJgFAUIgLAxQgHA1AIARQAEAJAKADQAKAEARABQAggBAPgTQAGgJAGgTIAJgwQAIg2gHgQQgIgSggAAQgiAAgOATgAQrD0ICglDQAOgZATgWIjRAAIAIhnIElAAQAjgBAMATQAMASgOAdIjLGYgAEaD0IAejWQADgUgEgGQgFgFgPAAQggABgxAlIgdDPIh9AAIAvlVIBjAAIABBBQBLhKBOgBQAWAAARAHQASAFAMAOQAMAOAFAQQAEATgEAXIgjD9gAomD0IAfjbQACgQgDgFQgDgFgNAAQgSABgVAJQgWAJgZAVIgcDNIh+AAIBEngIB9AAIgPBwQgFAngOAsQAjghAigQQAjgRAgAAQAZAAATAHQASAFANAOQAYAagIAuIgkD9gAywD0IBEnZQArgGCMgBQAzgBAkAKQAkAJASARQAUASAHAgQAFAhgFAtQgNBagpAfQgSAQghAIQgLADgMACQgZADgfAAQgfAAgigDIgSgCIgXCpgAv5iOIgSCAIA7AAQAjAAAMgMQANgMAHgtQAFgigJgNQgKgNgdAAgA17D0IAwlVIB8AAIgvFVgA0diOQgnAAAFgnIAEgkQAEgiAlAAIAxAAQAUAAAJAKQAKAKgDAUIgFAjQgCARgKAIQgLAJgSAAg");
	this.shape.setTransform(0,9.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.instance = new lib.Символ33();
	this.instance.parent = this;
	this.instance.setTransform(0,11.9,1.445,1.445);
	this.instance.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance.cache(-99,-19,198,39);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ32, new cjs.Rectangle(-142.4,-15.5,288,58.2), null);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 6
	this.instance = new lib.Символ74();
	this.instance.parent = this;
	this.instance.setTransform(214.2,-0.8,0.378,0.378,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ73();
	this.instance_1.parent = this;
	this.instance_1.setTransform(33.2,0.7,0.37,0.37,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Символ 72
	this.instance_2 = new lib.Символ72();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-180,0.4,0.265,0.265,0,0,0,-0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Символ 71
	this.instance_3 = new lib.Символ71();
	this.instance_3.parent = this;
	this.instance_3.setTransform(149.2,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Символ 70
	this.instance_4 = new lib.Символ70();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-44,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Символ 69
	this.instance_5 = new lib.Символ69();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-242,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ25, new cjs.Rectangle(-252,-20.5,511.3,40.3), null);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ22();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:-0.5,rotation:13.8,x:0.1,y:-0.5},0).wait(1).to({rotation:27.7,x:0.3,y:-0.4},0).wait(1).to({rotation:41.5,x:0.4,y:-0.3},0).wait(1).to({rotation:55.4},0).wait(1).to({rotation:69.2,x:0.5,y:-0.2},0).wait(1).to({rotation:83.1,y:0},0).wait(1).to({rotation:96.9},0).wait(1).to({rotation:110.8,y:0.2},0).wait(1).to({rotation:124.6,x:0.4,y:0.3},0).wait(1).to({rotation:138.5},0).wait(1).to({rotation:152.3,x:0.3,y:0.4},0).wait(1).to({rotation:166.2,x:0.1,y:0.5},0).wait(1).to({rotation:180,x:0,y:0.4},0).wait(1).to({rotation:193.8,x:-0.1,y:0.5},0).wait(1).to({rotation:207.7,x:-0.2,y:0.4},0).wait(1).to({rotation:221.5,x:-0.3,y:0.3},0).wait(1).to({rotation:235.4,x:-0.4},0).wait(1).to({rotation:249.2,y:0.2},0).wait(1).to({rotation:263.1,x:-0.5,y:0},0).wait(1).to({rotation:276.9},0).wait(1).to({rotation:290.8,x:-0.4,y:-0.2},0).wait(1).to({rotation:304.6,y:-0.3},0).wait(1).to({rotation:318.5,x:-0.3},0).wait(1).to({rotation:332.3,x:-0.2,y:-0.4},0).wait(1).to({rotation:346.2,x:-0.1,y:-0.5},0).wait(1).to({rotation:360,x:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28,-28,56,55.1);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ19();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:25.7},0).wait(1).to({rotation:51.4},0).wait(1).to({rotation:77.1},0).wait(1).to({rotation:102.9,y:-0.1},0).wait(1).to({rotation:128.6},0).wait(1).to({rotation:154.3},0).wait(1).to({rotation:180},0).wait(1).to({rotation:205.7},0).wait(1).to({rotation:231.4},0).wait(1).to({rotation:257.1},0).wait(1).to({rotation:282.9,y:0},0).wait(1).to({rotation:308.6},0).wait(1).to({rotation:334.3},0).wait(1).to({rotation:360},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39,-38.4,78,76.8);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ17();
	this.instance.parent = this;
	this.instance.setTransform(-13,-63.6,0.392,0.392,0,0,0,-0.1,-0.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.85,scaleY:0.85,guide:{path:[-12.9,-63.5,234.8,-23.4,395.4,202.6,397,201.3,398.6,200]},alpha:1},15,cjs.Ease.get(0.99)).to({scaleY:0.68},1).to({regX:0,scaleX:1.14,scaleY:1.14,guide:{path:[398.6,200,542.5,82.6,680.7,104.7]},alpha:0},9).wait(75));

	// Слой 3
	this.instance_1 = new lib.Символ27();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-14,210,1,0.411);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:0.1,regY:0.1,scaleX:0.94,scaleY:0.39,x:443.7,y:209.5,alpha:0.68},15,cjs.Ease.get(1)).wait(1).to({regX:0,scaleX:0.93,scaleY:0.38,x:678.2,y:210.4,alpha:0},9).wait(75));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115,-78.6,122,313.7);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ29();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0.4,rotation:12.4,x:0.4,y:0.1},0).wait(1).to({rotation:24.8,y:0.2},0).wait(1).to({rotation:37.2,x:0.3,y:0.3},0).wait(1).to({rotation:49.7},0).wait(1).to({rotation:62.1,x:0.2,y:0.4},0).wait(1).to({rotation:74.5,x:0.1},0).wait(1).to({rotation:86.9,x:0},0).wait(1).to({rotation:99.3},0).wait(1).to({rotation:111.7,x:-0.1,y:0.3},0).wait(1).to({rotation:124.1,x:-0.2},0).wait(1).to({rotation:136.6,x:-0.3},0).wait(1).to({rotation:149,y:0.2},0).wait(1).to({rotation:161.4,x:-0.4,y:0.1},0).wait(1).to({rotation:173.8,y:0},0).wait(1).to({rotation:186.2,y:-0.1},0).wait(1).to({rotation:198.6,y:-0.2},0).wait(1).to({rotation:211,x:-0.3},0).wait(1).to({rotation:223.4,y:-0.3},0).wait(1).to({rotation:235.9,x:-0.2,y:-0.4},0).wait(1).to({rotation:248.3,x:-0.1},0).wait(1).to({rotation:260.7,x:0},0).wait(1).to({rotation:273.1},0).wait(1).to({rotation:285.5,x:0.1},0).wait(1).to({rotation:297.9,x:0.2,y:-0.3},0).wait(1).to({rotation:310.3,x:0.3},0).wait(1).to({rotation:322.8,y:-0.2},0).wait(1).to({rotation:335.2,x:0.4,y:-0.1},0).wait(1).to({rotation:347.6},0).wait(1).to({rotation:360,y:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24,-24,48.7,48);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ4();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.547,0.547,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(-37.7,-25.4,75.5,50.8), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ6();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:-21.6},14,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:-45},15,cjs.Ease.get(1)).to({regX:0.1,regY:-0.1,scaleX:1,scaleY:1,rotation:-22.3,x:0.1,y:-0.1},15,cjs.Ease.get(-1)).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:0,y:0},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.3,-44.4,96.6,88.9);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:8.1,y:8.1},21,cjs.Ease.get(-1)).to({x:16.9,y:16.9},23,cjs.Ease.get(1)).to({x:8.3,y:8.3},23,cjs.Ease.get(-1)).to({x:0,y:0},22,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.3,-44.4,96.6,88.9);


(lib.Символ61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ59();
	this.instance.parent = this;
	this.instance.setTransform(193.8,0);

	this.instance_1 = new lib.Символ59();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-193.8,0);

	this.instance_2 = new lib.Символ59();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0.6,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ61, new cjs.Rectangle(-254.4,-13.9,508.9,27.9), null);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 6
	this.instance = new lib.Символ78();
	this.instance.parent = this;
	this.instance.setTransform(-247.7,11.3);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(69).to({_off:false},0).to({x:-204.9,alpha:1},8,cjs.Ease.get(1)).wait(40).to({x:287.4,y:11,alpha:0},8,cjs.Ease.get(1)).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ39();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-334.5,11.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(69).to({_off:false},0).to({x:23,y:13.9,alpha:1},8,cjs.Ease.get(1)).wait(40).to({x:200.6,y:11.5,alpha:0},8,cjs.Ease.get(1)).wait(1));

	// Слой 5
	this.instance_2 = new lib.Символ77();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-266.5,6.3,0.79,0.79);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(29).to({_off:false},0).to({x:-107,alpha:1},8,cjs.Ease.get(1)).wait(32).to({x:59.8,alpha:0},8,cjs.Ease.get(1)).wait(49));

	// Слой 2
	this.instance_3 = new lib.Символ36();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-144.2,5.9,0.79,0.79);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(29).to({_off:false},0).to({x:15.3,alpha:1},8,cjs.Ease.get(1)).wait(32).to({x:182.1,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(48));

	// Слой 4
	this.instance_4 = new lib.Символ76();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-125.4,9.8,0.845,0.845);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(29).to({x:70.4,alpha:0},8).wait(80).to({x:-234.1},0).to({x:-125.4,alpha:1},8).wait(1));

	// Слой 1
	this.instance_5 = new lib.Символ32();
	this.instance_5.parent = this;
	this.instance_5.setTransform(24.2,0.9,0.845,0.845);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(29).to({x:220,alpha:0},8).wait(80).to({x:-84.5},0).to({x:24.2,alpha:1},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-145.5,-19.9,293.1,59.4);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 32
	this.instance = new lib.Символ35();
	this.instance.parent = this;
	this.instance.setTransform(-6.9,9.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ31, new cjs.Rectangle(-152.4,-10.3,293.1,59.4), null);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ23();
	this.instance.parent = this;
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[0.1,0.1,224.9,-26.2,293,151.2,293,151.2,293,151.2]},alpha:1},11).to({scaleY:0.89,guide:{path:[293,151.2,293.3,150.9,293.7,150.5]}},1).to({scaleY:1,guide:{path:[293.8,150.5,462.6,-42.7,635.2,151.2]}},18,cjs.Ease.get(0.33)).to({scaleY:0.87,guide:{path:[635.1,151.2,635.1,151.1,635.1,151.1]}},1).to({scaleY:1,guide:{path:[635.1,151.1,635.1,151.1,635.1,151.2,762.5,45.4,927.2,72.3]},alpha:0},12).wait(1));

	// Слой 4
	this.instance_1 = new lib.Символ26();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.9,172.4,1.714,1.714,0,0,0,0,0.2);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:0.1,scaleX:1.05,scaleY:1.05,x:291.5,y:169.7,alpha:0.91},11,cjs.Ease.get(1)).to({regX:0.1,regY:0.2,scaleX:1.62,scaleY:1.62,x:458.4,y:175.2,alpha:0.301},9).to({regX:0,regY:0.1,scaleX:1.05,scaleY:1.05,x:635.1,y:173.3,alpha:0.91},10).to({regY:0.2,scaleX:1.67,scaleY:1.67,x:902.2,y:178.5,alpha:0},13).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122.6,-28,209.1,237.6);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ20();
	this.instance.parent = this;
	this.instance.setTransform(7.6,290.7);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.72,scaleY:0.72,guide:{path:[7.6,290.6,-141.3,203.1,-249.9,146]},alpha:1},4,cjs.Ease.get(0.97)).to({regY:-0.2,scaleX:0.26,scaleY:0.26,guide:{path:[-249.9,146,-708.8,-95.5,-444,205]},alpha:0},20,cjs.Ease.get(1)).wait(71));

	// Слой 3
	this.instance_1 = new lib.Символ28();
	this.instance_1.parent = this;
	this.instance_1.setTransform(7.7,328.8);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.78,scaleY:0.78,x:-228.3,y:296,alpha:0.488},4,cjs.Ease.get(1)).to({scaleX:0.46,scaleY:0.46,x:-449.1,y:218.5,alpha:0},20,cjs.Ease.get(1)).wait(71));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81,252.3,177.3,97.3);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.parent = this;
	this.instance.setTransform(41,210.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(56).to({_off:false},0).to({guide:{path:[41,210.7,-178.6,153.7,-538.5,252.6]},alpha:1},16,cjs.Ease.get(-1)).to({guide:{path:[-538.6,252.6,-546,254.6,-553.4,256.7,-771.4,45.2,-965.1,256.7,-1215.4,26.7,-1415.3,242.4]}},28).to({guide:{path:[-1415.2,242.4,-1419.9,247.5,-1424.6,252.8,-1606.7,132.6,-1943.8,186.9]},alpha:0},15,cjs.Ease.get(1)).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ30();
	this.instance_1.parent = this;
	this.instance_1.setTransform(43.3,269,1.516,1.516,0,0,0,0.1,0.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(56).to({_off:false},0).to({scaleX:1,scaleY:1,x:-538.8,y:274.3,alpha:0.539},16,cjs.Ease.get(-1)).to({regY:0.2,scaleX:1.52,scaleY:1.52,x:-756.5,y:273.4,alpha:0.398},7).to({regY:0.1,scaleX:0.87,scaleY:0.87,x:-974.1,y:272.2,alpha:0.762},7).to({regX:0,regY:0.2,scaleX:1.32,scaleY:1.32,x:-1193.7,y:269.5,alpha:0.32},7).to({regX:-0.1,scaleX:1.01,scaleY:1.01,x:-1413.1,y:266.7,alpha:0.801},7).to({regX:0.1,regY:0.1,scaleX:1.52,scaleY:1.52,x:-1945.6,y:275.3,alpha:0},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(-37.7,-25.4,75.5,50.8), null);


(lib.balls = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Символ24();
	this.instance.parent = this;
	this.instance.setTransform(-409.5,-10.6);
	this.instance.alpha = 0.879;

	this.instance_1 = new lib.Символ16();
	this.instance_1.parent = this;
	this.instance_1.setTransform(502.7,-10.6,0.462,0.462);
	this.instance_1.alpha = 0.879;

	this.instance_2 = new lib.Символ18();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-326.5,-102.3,1.308,1.308);
	this.instance_2.alpha = 0.879;

	this.instance_3 = new lib.Символ21();
	this.instance_3.parent = this;
	this.instance_3.setTransform(455.8,-79.6,0.795,0.795,0,0,0,0.1,-0.1);
	this.instance_3.alpha = 0.879;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.balls, new cjs.Rectangle(-532.2,-205,1064.4,410.1), null);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_7 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7).call(this.frame_7).wait(9));

	// Слой 9
	this.instance = new lib.Символ25();
	this.instance.parent = this;
	this.instance.setTransform(5,48);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:18,alpha:1},7,cjs.Ease.get(1)).wait(1).to({y:48,alpha:0},7,cjs.Ease.get(1)).wait(1));

	// Слой 8
	this.instance_1 = new lib.Символ64();
	this.instance_1.parent = this;
	this.instance_1.setTransform(38.5,9.5,1,1,0,0,0,-8,0);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:61.5,alpha:1},7,cjs.Ease.get(1)).wait(1).to({y:9.5,alpha:0},7,cjs.Ease.get(1)).wait(1));

	// Слой 7
	this.instance_2 = new lib.Символ61();
	this.instance_2.parent = this;
	this.instance_2.setTransform(5.1,108);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:128,alpha:1},7,cjs.Ease.get(1)).wait(1).to({y:108,alpha:0},7,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_3 = new lib.Символ43();
	this.instance_3.parent = this;
	this.instance_3.setTransform(7.9,-85.3);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:-45.3,alpha:1},7,cjs.Ease.get(1)).wait(1).to({y:-85.3,alpha:0},7,cjs.Ease.get(1)).wait(1));

	// Символ 31
	this.instance_4 = new lib.Символ31();
	this.instance_4.parent = this;
	this.instance_4.setTransform(12.1,54.9,1.17,1.17);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:260.2,alpha:0},7,cjs.Ease.get(1)).wait(1).to({y:54.9,alpha:1},7,cjs.Ease.get(1)).wait(1));

	// Слой 10
	this.instance_5 = new lib.Символ51();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0.1,-17.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({y:-78.3,alpha:0},7,cjs.Ease.get(1)).wait(1).to({y:-17.3,alpha:1},7,cjs.Ease.get(1)).wait(1));

	// Слой 6
	this.instance_6 = new lib.Символ58();
	this.instance_6.parent = this;
	this.instance_6.setTransform(5.2,75.8,1,0.639);
	this.instance_6.alpha = 0.75;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleY:1,y:69.8,alpha:0.59},7,cjs.Ease.get(1)).wait(1).to({scaleY:0.64,y:75.8,alpha:0.75},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-333.8,-101.8,678,230.7);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-30},59).to({rotation:0},60).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.7,-25.4,75.5,50.8);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:9.1},26,cjs.Ease.get(-1)).to({y:20},31,cjs.Ease.get(1)).to({y:9.8},29,cjs.Ease.get(-1)).to({y:0},28,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.7,-25.4,75.5,50.8);


(lib.money_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Символ11();
	this.instance.parent = this;
	this.instance.setTransform(-60,-7.1,1.53,1.53,15,0,0,0,-0.1);

	this.instance_1 = new lib.Символ5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(65.8,-30.1,1.245,1.245,0,0,0,-0.1,-0.2);

	this.instance_2 = new lib.Символ5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(14.5,60.2,0.378,0.378,-45,0,0,0.2,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.money_1, new cjs.Rectangle(-125.9,-85.1,251.9,170.3), null);


// stage content:
(lib.fullscreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		window._setCanvasSize = function() {
			
		    var iw = window.innerWidth,
				ih = window.innerHeight,
			
				defaultScale = 1,
			
				minWidth = 500,
				minHeight = 500,
			
				scaleW = iw / minWidth,
				scaleH = ih / minHeight,
				scaleWH = scaleW * scaleH;
		    
		    /* Position */
		    
		    _this.money_l.x = iw * 0.15;
			_this.money_l.y = ih * ((iw < ih) ? 0.25 : 0.15);
			
			_this.money_r.x = iw * 0.85;
			_this.money_r.y = ih * ((iw < ih) ? 0.25 : 0.15);
			
			_this.balls.x = iw * 0.5;
			_this.balls.y = ih * 0.9;
			
			_this.main.x = iw * 0.5;
			_this.main.y = ih * 0.4;
		    
		    function setScale(scale) {
				_this.money_l.scaleX = _this.money_l.scaleY = scale;
				_this.money_r.scaleX = _this.money_r.scaleY = scale;
				_this.balls.scaleX = _this.balls.scaleY = scale;
				_this.main.scaleX = _this.main.scaleY = scale;
			}
			
			setScale(defaultScale);
		
		    /* Rescale */
		
		    if(iw < minWidth) {
		        setScale(scaleW);
		    }
		
		    if(ih < minHeight) {
		        setScale(scaleH);
		    }
		
		    if(iw < minWidth && ih < minHeight) {
		        setScale(scaleWH);
		    }
		}
				
		window.onresize=function(){_setCanvasSize();}
		window.onresize();
		
		var area = document.getElementById('mousover');
		area.addEventListener('mouseover', function(){
			_this.main.gotoAndPlay(1);
		});
		
		area.addEventListener('mouseout', function(){
			_this.main.gotoAndPlay(9);
		});
		
		window.onresize();
		document.addEventListener("DOMContentLoaded", function(){ _setCanvasSize()});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// maion
	this.main = new lib.Символ42();
	this.main.parent = this;
	this.main.setTransform(510.1,224.2,1.05,1.05);

	this.timeline.addTween(cjs.Tween.get(this.main).wait(1));

	// money
	this.money_l = new lib.money_1();
	this.money_l.parent = this;
	this.money_l.setTransform(126,85.1,1,1,180);

	this.money_r = new lib.money_1();
	this.money_r.parent = this;
	this.money_r.setTransform(898.1,85.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.money_r},{t:this.money_l}]}).wait(1));

	// balls
	this.balls = new lib.balls();
	this.balls.parent = this;
	this.balls.setTransform(557.9,549.8,1,1,0,0,0,46.7,164.7);

	this.timeline.addTween(cjs.Tween.get(this.balls).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(491,384,1064.4,590.2);
// library properties:
lib.properties = {
	width: 1024,
	height: 768,
	fps: 30,
	color: "#FFFFFF",
	opacity: 0.00,
	webfonts: {},
	/*manifest: [
		{src:"images/btn1.png", id:"btn1"},
		{src:"images/doll.png", id:"doll"},
		{src:"images/doll2.png", id:"doll2"},
		{src:"images/iph2.png", id:"iph2"},
		{src:"images/mex.png", id:"mex"},
		{src:"images/mexball.png", id:"mexball"},
		{src:"images/money.png", id:"money"},
		{src:"images/new_zel.png", id:"new_zel"},
		{src:"images/nzball.png", id:"nzball"},
		{src:"images/one.png", id:"one"},
		{src:"images/one_txt.png", id:"one_txt"},
		{src:"images/port.png", id:"port"},
		{src:"images/portball.png", id:"portball"},
		{src:"images/rus.png", id:"rus"},
		{src:"images/rusball.png", id:"rusball"},
		{src:"images/ten.png", id:"ten"},
		{src:"images/three.png", id:"three"},
		{src:"images/three_txt.png", id:"three_txt"},
		{src:"images/tickets.png", id:"tickets"},
		{src:"images/titile23.png", id:"titile23"},
		{src:"images/title1.png", id:"title1"},
		{src:"images/title21.png", id:"title21"},
		{src:"images/title22.png", id:"title22"},
		{src:"images/two.png", id:"two"},
		{src:"images/two_txt.png", id:"two_txt"},
		{src:"images/vs.png", id:"vs"}
	],*/
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;