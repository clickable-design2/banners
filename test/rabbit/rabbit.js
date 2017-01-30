(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.hand = function() {
	this.initialize(img.hand);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,68,32);


(lib.hear = function() {
	this.initialize(img.hear);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,146,91);


(lib.hearrrs = function() {
	this.initialize(img.hearrrs);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,91,115);


(lib.pris = function() {
	this.initialize(img.pris);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,246,270);


(lib.rabbi = function() {
	this.initialize(img.rabbi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,179,248);


(lib.shad = function() {
	this.initialize(img.shad);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,236,62);


(lib.tooth = function() {
	this.initialize(img.tooth);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,17,15);// helper functions:

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


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tooth();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(0,0,17,15), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hearrrs();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(0,0,91,115), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hear();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(0,0,146,91), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rabbi();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(0,0,179,248), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hand();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(0,0,68,32), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pris();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(0,0,246,270), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shad();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(0,0,236,62), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		playSound("Chudo");
	}
	this.frame_254 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(254).call(this.frame_254).wait(1));

	// Символ 11
	this.instance = new lib.Символ11();
	this.instance.parent = this;
	this.instance.setTransform(48.9,107.2,1,1,-3.7,0,0,8.6,7.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).to({rotation:0.7,x:46.8,y:106.1},3).to({rotation:0.2,x:48.3,y:106.3},4).to({rotation:0.2,x:49.3,y:107.3},3).to({rotation:-3.7,x:48.9,y:107.2},3).to({rotation:0.7,x:46.8,y:106.1},3).to({rotation:0.2,x:48.3,y:106.3},4).to({rotation:0.2,x:49.3,y:107.3},3).to({rotation:-3.7,x:48.9,y:107.2},2).to({rotation:0.7,x:46.8,y:106.1},3).to({rotation:0.2,x:48.3,y:106.3},4).to({rotation:0.2,x:49.3,y:107.3},3).to({rotation:-3.7,x:48.9,y:107.2},3).to({rotation:0.7,x:46.8,y:106.1},3).to({rotation:0.2,x:48.3,y:106.3},4).to({rotation:0.2,x:49.3,y:107.3},3).to({rotation:-3.7,x:48.9,y:107.2},2).to({rotation:0.7,x:46.8,y:106.1},3).to({rotation:0.2,x:48.3,y:106.3},4).to({rotation:0.2,x:49.3,y:107.3},3).to({rotation:-3.7,x:48.9,y:107.2},3).to({rotation:0.7,x:46.8,y:106.1},3).to({rotation:0.2,x:48.3,y:106.3},4).to({rotation:0.2,x:49.3,y:107.3},3).to({rotation:-3.7,x:48.9,y:107.2},2).to({rotation:0.7,x:46.8,y:106.1},3).to({rotation:0.2,x:48.3,y:106.3},4).to({rotation:0.2,x:49.3,y:107.3},3).to({rotation:-3.7,x:48.9,y:107.2},2).to({rotation:0.7,x:46.8,y:106.1},4).to({rotation:0.7},1).to({rotation:0.2,x:48.3,y:106.3},2).to({x:49.3,y:107.3},3).to({rotation:-3.7,x:48.9,y:107.2},3).to({rotation:0.7,x:46.8,y:106.1},3).to({rotation:0.2,x:48.3,y:106.3},4).to({rotation:0.2,x:49.3,y:107.3},3).to({rotation:-3.7,x:48.9,y:107.2},2).to({rotation:0.7,x:46.8,y:106.1},3).to({rotation:0.2,x:48.3,y:106.3},4).to({rotation:0.2,x:49.3,y:107.3},3).to({rotation:-3.7,x:48.9,y:107.2},2).wait(6).to({rotation:0.7,x:46.8,y:106.1},2).to({rotation:0.2,x:48.3,y:106.3},3).to({rotation:0.2,x:49.3,y:107.3},3).to({rotation:-3.7,x:48.9,y:107.2},3).to({rotation:0.7,x:46.8,y:106.1},3).to({rotation:0.2,x:48.3,y:106.3},4).to({rotation:0.2,x:49.3,y:107.3},3).to({rotation:-3.7,x:48.9,y:107.2},2).to({rotation:0.7,x:46.8,y:106.1},3).to({rotation:0.2,x:48.3,y:106.3},3).to({rotation:0.2,x:49.3,y:107.3},2).to({rotation:0.7,x:46.8,y:106.1},2).wait(6).to({rotation:0.2,x:48.3,y:106.3},3).to({x:49.3,y:107.3},3).to({rotation:-3.7,x:48.9,y:107.2},3).to({rotation:0.7,x:46.8,y:106.1},3).to({rotation:0.2,x:48.3,y:106.3},4).to({rotation:0.2,x:49.3,y:107.3},3).to({rotation:-3.7,x:48.9,y:107.2},2).to({rotation:0.7,x:46.8,y:106.1},3).to({rotation:0.2,x:48.3,y:106.3},4).to({rotation:0.2,x:49.3,y:107.3},3).to({rotation:-3.7,x:48.9,y:107.2},2).to({rotation:0.7,x:46.8,y:106.1},3).to({rotation:0.2,x:48.3,y:106.3},4).to({rotation:0.2,x:49.3,y:107.3},3).to({rotation:-3.7,x:48.9,y:107.2},3).to({rotation:0.7,x:46.8,y:106.1},3).to({rotation:0.7},4).to({rotation:-3.7,x:48.9,y:107.2},5).to({rotation:0.7,x:46.8,y:106.1},3).to({rotation:0.2,x:48.3,y:106.3},4).to({rotation:0.2,x:49.3,y:107.3},3).to({rotation:-3.7,x:48.9,y:107.2},2).to({rotation:0.7,x:46.8,y:106.1},3).to({rotation:0.2,x:49.3,y:107.3},4).to({rotation:-3.7,x:48.9,y:107.2},3).wait(3));

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#660000","#330000"],[0.365,1],0,0,0,0,0,10).s().p("AhPA4QgOgdAKgbQAKgcAcgMIBEgeQApgSASAsQARAsgkABQgkABgWAcQgVAcgYAOQgIAEgHAAQgPAAgJgUg");
	this.shape.setTransform(50.1,109.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#660000","#330000"],[0.365,1],0,0,0,0,0,13.2).s().p("AhnBGQgggmAbglQAbgmAfgNQAegOArgWQAsgWAnA7QAlA5g0AEQg2ADgYAkQgYAlgeANQgIAEgIAAQgXAAgXgdg");
	this.shape_1.setTransform(50.2,110.7);
	this.shape_1._off = true;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#660000","#330000"],[0.365,1],0,0,0,0,0,16.4).s().p("AiABVQgxgxAsguQArgvAigPQAggQAvgaQAvgaA6BJQA7BIhGAFQhGAGgbAsQgbAtgkAOQgIADgIAAQgfAAgmglg");
	this.shape_2.setTransform(50.3,112.4);
	this.shape_2._off = true;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#660000","#330000"],[0.365,1],0,0,0,0,0,19.6).s().p("AiZBiQhDg5A9g4QA9g5AjgRQAkgRAxgeQAygeBPBXQBPBWhXAIQhWAIgeA0QgdA1gqAOQgIADgJAAQglAAg3gvg");
	this.shape_3.setTransform(50.4,114);
	this.shape_3._off = true;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#660000","#330000"],[0.365,1],0,0,0,0,0,18.6).s().p("AiMBiQg5g6Awg4QAvg6AjgRQAjgSAtgbQAugcBMBYQBLBYhNALQhNALgfAxQgeAwgoALQgHACgIAAQgiAAgugug");
	this.shape_4.setTransform(50.9,114.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#660000","#330000"],[0.365,1],0,0,0,0,0,17.6).s().p("AiBBgQgsg4Ahg6QAig7AjgRQAjgSApgZQApgaBIBaQBIBZhDAPQhDAOghAsQgfAsgmAJIgLACQghAAgngwg");
	this.shape_5.setTransform(51.3,114.6);
	this.shape_5._off = true;

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#660000","#330000"],[0.365,1],0,0,0,0,0,16.6).s().p("Ah0BfQgig3AUg7QATg8AkgRQAjgSAlgXQAjgYBFBcQBFBbg6ARQg5ASgiAnQggAngkAIIgIAAQggAAgdgwg");
	this.shape_6.setTransform(51.7,114.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#660000","#330000"],[0.365,1],0,0,0,0,0,15.6).s().p("AhoBdQgWg2AGg8QAGg8AjgSQAjgRAggWQAggWBBBeQBBBcgwAVQgvAVgjAjQgiAjgiAFIgFAAQgfAAgUgyg");
	this.shape_7.setTransform(52.1,115);
	this.shape_7._off = true;

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["#660000","#330000"],[0.365,1],0,0.5,0,0,0.5,17.6).s().p("AgxCcQgqgOgWg1QgWg2AHhCQAHhEAigSIBEgnQAhgVBIBrQBIBqgsAoQgrApgnAaQgaARgaAAQgOAAgPgEg");
	this.shape_8.setTransform(53.2,117);
	this.shape_8._off = true;

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["#660000","#330000"],[0.365,1],0,0.4,0,0,0.4,19.7).s().p("AgyCjQgzgfgWg1QgVg2AIhIQAJhLAegTQAfgTAmgUQAlgUBOB5QBOB2gnA9QgoA9grARQgOAGgQAAQgdAAgigVg");
	this.shape_9.setTransform(54.3,119.5);
	this.shape_9._off = true;

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["#660000","#330000"],[0.365,1],0,0,0,0,0,21.7).s().p("AgzCnQg8gxgVg1QgVg0AJhQQAKhQAcgVQAdgUAogTQAogSBVCFQBUCEgjBRQgjBQgvAIIgNABQgqAAgzgrg");
	this.shape_10.setTransform(55.4,122.3);
	this.shape_10._off = true;

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.rf(["#660000","#330000"],[0.365,1],0.3,0.4,0,0.3,0.4,20.5).s().p("AgRCQQg0gYgegmQgeglgLg4QgLg5AnggQAnghAngSQAmgRBKBRQBKBRgJA8QgJA9gxAaQgaAOgbAAQgZAAgYgLg");
	this.shape_11.setTransform(52.6,117.9);
	this.shape_11._off = true;

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.rf(["#660000","#330000"],[0.365,1],0.4,0,0,0.4,0,19.4).s().p("AhEBaQgngXgfghQggghAygrQAygtAmgRQAkgRA/AdQA/AdARAqQASAog0AtQg1AtgtACIgHAAQgoAAgkgVg");
	this.shape_12.setTransform(50,114.4);
	this.shape_12._off = true;

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.rf(["#660000","#330000"],[0.365,1],0,0,0,0,0,18.3).s().p("AgpBnIhlgSQgzgJA9g4QA9g4AjgQIBXgoQA0gXAsAWQAsAXg3A/Qg3A+glAcQgdAWgiAAQgLAAgLgCg");
	this.shape_13.setTransform(47.8,110.5);
	this.shape_13._off = true;

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.rf(["#660000","#330000"],[0.365,1],-0.1,0.2,0,-0.1,0.2,18.3).s().p("AiBBTQgngNAwg0QAvgzAjgRQAkgQAwgTQAxgTAkAfQAkAggsAsQgsAsgmAVQglAVgvAEIgUAAQgjAAgfgKg");
	this.shape_14.setTransform(48,110.2);
	this.shape_14._off = true;

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.rf(["#660000","#330000"],[0.365,1],-0.3,0.1,0,-0.3,0.1,18.3).s().p("Ah0BOQgagRAhgwQAigvAjgRQAkgQAtgPQAtgPAdApQAdApgiAZQghAbgmANIhTAdQgXAIgSAAQgSAAgNgJg");
	this.shape_15.setTransform(48.2,110.3);
	this.shape_15._off = true;

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.rf(["#660000","#330000"],[0.365,1],-0.5,0.1,0,-0.5,0.1,18.3).s().p("AhoBJQgMgWAUgrQATgrAkgQQAjgRAqgLQAqgLAVAzQAVAxgWAIQgXAIgmAFQglAGguAcQgaARgPAAQgMAAgFgJg");
	this.shape_16.setTransform(48.3,110.4);
	this.shape_16._off = true;

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.rf(["#660000","#330000"],[0.365,1],-1.3,-1.1,0,-1.3,-1.1,18.3).s().p("Ag4BfQgqgOgUgSQgWgSAcguQAbguAjgRQAkgQAugRQAwgRAgAkQAhAkgfBEQgfBEgyAHQgQACgQAAQgeAAgbgIg");
	this.shape_17.setTransform(49.2,111.6);
	this.shape_17._off = true;

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.rf(["#660000","#330000"],[0.365,1],-2.1,-4.5,0,-2.1,-4.5,18.3).s().p("AhEBmQgkg3gegPQgdgPAjgxQAjgxAjgQIBXgoQA1gXArAWQAsAXgnB/QgnCBg+AIIgPABQgyAAgggwg");
	this.shape_18.setTransform(50,115);
	this.shape_18._off = true;

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.rf(["#660000","#330000"],[0.365,1],-1,-2,0,-1,-2,18.3).s().p("Ag2BpQgrgggogMQgpgMAwg0QAwg1AjgRIBXgnQA1gYArAXQAsAWgvBfQgvBggxASQgSAHgRAAQgdAAgbgUg");
	this.shape_19.setTransform(48.9,112.5);
	this.shape_19._off = true;

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.rf(["#660000","#330000"],[0.365,1],-0.3,-3.7,0,-0.3,-3.7,18.3).s().p("AhQB+QgmgbgngeQgogeA9g4QA9g4AkgRIBXgnQA0gYAvAdQAuAcgiBkQgkBmhTAYQgmALgcAAQghAAgVgPg");
	this.shape_20.setTransform(48.1,114.2);
	this.shape_20._off = true;

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.rf(["#660000","#330000"],[0.365,1],-0.7,-7.7,0,-0.7,-7.7,18.3).s().p("Ah3CTQgcgtgbgzQgbgzA9g4QA9g5AjgQIBXgoQA1gXAxAiQAyAigPCLQgQCMiAATQglAFgdAAQhGAAgTggg");
	this.shape_21.setTransform(48.6,118.2);
	this.shape_21._off = true;

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.rf(["#660000","#330000"],[0.365,1],0.4,-5.9,0,0.4,-5.9,15.5).s().p("AhhBtQgXgogOgsQgPgrAygpQAygqAlgRQAkgRApAAQApgBAVAXQAVAXgRBlQgSBnheARQgbAFgWAAQgzAAgQgbg");
	this.shape_22.setTransform(48.2,116);
	this.shape_22._off = true;

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.rf(["#660000","#330000"],[0.365,1],0.9,-3.1,0,0.9,-3.1,12.8).s().p("AhRBRQgSgigDgkQgDgjAogbQAngaAmgSQAngSAdAWQAdAVgHANQgIAMgTBAQgUBCg6APQgTAFgOAAQghAAgMgYg");
	this.shape_23.setTransform(48.5,112.7);
	this.shape_23._off = true;

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.rf(["#660000","#330000"],[0.365,1],-0.4,-5,0,-0.4,-5,18.3).s().p("AhcCFQgjghgjglQgkglA9g4QA9g4AkgRIBXgnQA0gYAwAfQAvAegcBxQgdByhiAWQgnAJgcAAQgsAAgUgUg");
	this.shape_24.setTransform(48.2,115.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.rf(["#660000","#330000"],[0.365,1],-0.1,-2.4,0,-0.1,-2.4,18.3).s().p("AhDB3QgpgVgrgXQgsgXA9g4QA9g4AjgRIBXgnQA1gYAtAbQAuAagqBYQgpBYhEAaQglANgdAAQgYAAgTgJg");
	this.shape_25.setTransform(48,112.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.rf(["#660000","#330000"],[0.365,1],0.2,0.3,0,0.2,0.3,12.1).s().p("AhDA9QgWgOAFgbQAEgZAagUQAagTAmgSQAogSAYAeQAXAfgVANQgWANgWAXQgWAXgbAMQgNAFgKAAQgPAAgMgJg");
	this.shape_26.setTransform(49.3,109.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.rf(["#660000","#330000"],[0.365,1],0.3,0.5,0,0.3,0.5,14.1).s().p("AhXApQgCgZAYgbQAYgbAmgSQAlgRAeARQAeAQgHAaQgIAYgWATQgWASgfAJQgfAJgdABQgegBgBgYg");
	this.shape_27.setTransform(48.7,109.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.rf(["#660000","#330000"],[0.365,1],0.1,0.2,0,0.1,0.2,16.2).s().p("AheA4QgHgYAWgiQAWgkAlgRQAjgRAlAEQAkACAHAmQAHAlgXANQgXAOgiAHQghAHgmAPQgOAFgKAAQgRAAgEgOg");
	this.shape_28.setTransform(48.3,109.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.rf(["#660000","#330000"],[0.365,1],0,0,0,0,0,14.8).s().p("AhzBNQgpgrAjgpQAkgrAggOQAfgPAtgYQAtgYAxBCQAwBAg9AFQg+AEgaApQgZAoghAOQgIADgIAAQgbAAgeghg");
	this.shape_29.setTransform(50.3,111.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.rf(["#660000","#330000"],[0.365,1],0,0,0,0,0,18.3).s().p("AiJBhQg0g5Arg5QAqg6AkgRQAjgSArgbQAtgbBKBZQBKBYhJANQhKAMggAvQgfAugnALQgGACgHAAQgiAAgsgvg");
	this.shape_30.setTransform(51,114.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.rf(["#660000","#330000"],[0.365,1],0,0,0,0,0,17).s().p("Ah4BfQgmg4AYg6QAZg7AjgSQAjgRAngYQAlgZBGBbQBFBbg8AQQg9ARghApQggAoglAIIgJABQggAAgggwg");
	this.shape_31.setTransform(51.6,114.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.rf(["#660000","#330000"],[0.365,1],-0.6,-2.8,0,-0.6,-2.8,18.3).s().p("AhSB0QglgIgTglQgUgkAogxQAogyAkgRQAjgQAvgRQAvgRAkAqQAjAqgTBJQgTBKhTAMQgxAIghAAQgWAAgPgEg");
	this.shape_32.setTransform(48.4,113.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.rf(["#660000","#330000"],[0.365,1],-0.5,0,0,-0.5,0,18.3).s().p("AhoBIQgMgVATgsQAUgqAjgRQAkgQAqgLQAqgLAVAyQAVAxgWAJQgYAIglAFQglAFgtAdQgbAQgPAAQgLAAgGgJg");
	this.shape_33.setTransform(48.4,110.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.rf(["#660000","#330000"],[0.365,1],0.1,0.7,0,0.1,0.7,19).s().p("AhgBZQg4gPAYgnQAYgmAcgfQAbgeArgXQAqgXA9AmQA8AmggAdQghAcgbAeQgaAfgnAJQgQAEgSAAQgcAAgigIg");
	this.shape_34.setTransform(49.1,111.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.rf(["#660000","#330000"],[0.365,1],-0.4,0.1,0,-0.4,0.1,18.3).s().p("AhvBMQgUgTAbguQAcgtAkgRQAjgQAsgNQAsgOAaAtQAaAsgeATQgdATgmAKQglAJguAWQgYALgRAAQgQAAgJgJg");
	this.shape_35.setTransform(48.2,110.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.rf(["#660000","#330000"],[0.365,1],-0.3,0.2,0,-0.3,0.2,18.3).s().p("Ah3BPQgcgQAkgxQAkgwAkgQQAjgRAugPQAugQAeAnQAfAngkAdQgkAeglAPQgmAOguAOQgVAGgSAAQgVAAgPgJg");
	this.shape_36.setTransform(48.1,110.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.rf(["#660000","#330000"],[0.365,1],-0.2,0.2,0,-0.2,0.2,18.3).s().p("Ah+BSQglgOAtgzQAsgyAkgRQAjgQAwgSQAwgTAjAiQAiAhgpAoQgrApglAUQgmATguAGQgOACgOAAQgeAAgZgKg");
	this.shape_37.setTransform(48,110.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.rf(["#660000","#330000"],[0.365,1],-0.1,0.2,0,-0.1,0.2,18.3).s().p("AgqBhQgwgBgsgLQgsgMA1g2QA0g1AkgQQAjgRAygUQAygVAnAcQAnAcgwA0QgwAzgmAYQgjAWgtAAIgEAAg");
	this.shape_38.setTransform(47.9,110.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.rf(["#660000","#330000"],[0.365,1],0.1,0.6,0,0.1,0.6,20.1).s().p("AgtCaQgugCg4g4Qg3g5Awg9QAwg/AigSIBQgtQAwgbBQBjQBQBhhJAaQhKAagjAqQggAngrAAIgEAAg");
	this.shape_39.setTransform(51.6,115.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.rf(["#660000","#330000"],[0.365,1],0.1,0.7,0,0.1,0.7,20.6).s().p("AgvCiQgygRgsg3Qgtg3AkhEQAjhFAggTQAfgTAugXQAtgZBRBuQBSBtg9AsQg9AtgmAeQgZATgcAAQgRAAgTgHg");
	this.shape_40.setTransform(52.9,117.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.rf(["#660000","#330000"],[0.365,1],0.1,0.5,0,0.1,0.5,21.2).s().p("AgxCmQg3ghggg2Qghg2AWhJQAXhLAegUQAegTArgWQAqgVBTB6QBTB4gwA/QgwA+gqATQgQAHgRAAQgdAAgkgWg");
	this.shape_41.setTransform(54.1,119.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.rf(["#660000","#330000"],[0.365,1],0,0,0,0,0,18.3).s().p("AgpBnIhkgSQg0gJA9g4QA9g4AjgQIBXgoQA1gXArAWQAsAXg3A/Qg3A+glAcQgdAWgiAAQgLAAgLgCg");
	this.shape_42.setTransform(47.8,110.5);
	this.shape_42._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_13}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(24).to({_off:false},0).to({_off:true},1).wait(24).to({_off:false},0).to({_off:true},1).wait(36).to({_off:false},0).to({_off:true},1).wait(36).to({_off:false},0).wait(6).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(36).to({_off:false},0).to({_off:true},1).wait(15));
	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1).to({_off:false},0).to({_off:true},1).wait(24).to({_off:false},0).to({_off:true},1).wait(24).to({_off:false},0).to({_off:true},1).wait(151).to({_off:false},0).to({_off:true},1).wait(36).to({_off:false},0).to({_off:true},1).wait(14));
	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(2).to({_off:false},0).to({_off:true},1).wait(24).to({_off:false},0).to({_off:true},1).wait(24).to({_off:false},0).to({_off:true},1).wait(151).to({_off:false},0).to({_off:true},1).wait(36).to({_off:false},0).to({_off:true},1).wait(13));
	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(3).to({_off:false},0).to({_off:true},1).wait(24).to({_off:false},0).to({_off:true},1).wait(24).to({_off:false},0).to({_off:true},1).wait(38).to({_off:false},0).to({_off:true},1).wait(39).to({_off:false},0).to({_off:true},1).wait(36).to({_off:false},0).to({_off:true},1).wait(35).to({_off:false},0).to({_off:true},1).wait(36).to({_off:false},0).to({_off:true},1).wait(12));
	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(5).to({_off:false},0).to({_off:true},1).wait(24).to({_off:false},0).to({_off:true},1).wait(24).to({_off:false},0).to({_off:true},1).wait(37).to({_off:false},0).to({_off:true},1).wait(113).to({_off:false},0).to({_off:true},1).wait(47));
	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(7).to({_off:false},0).to({_off:true},1).wait(24).to({_off:false},0).to({_off:true},1).wait(24).to({_off:false},0).to({_off:true},1).wait(36).to({_off:false},0).to({_off:true},1).wait(40).to({_off:false},0).to({_off:true},1).wait(36).to({_off:false},0).to({_off:true},1).wait(36).to({_off:false},0).to({_off:true},1).wait(45));
	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(8).to({_off:false},0).to({_off:true},1).wait(24).to({_off:false},0).to({_off:true},1).wait(24).to({_off:false},0).to({_off:true},1).wait(36).to({_off:false},0).to({_off:true},1).wait(40).to({_off:false},0).to({_off:true},1).wait(36).to({_off:false},0).to({_off:true},1).wait(36).to({_off:false},0).to({_off:true},1).wait(44));
	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(9).to({_off:false},0).to({_off:true},1).wait(24).to({_off:false},0).to({_off:true},1).wait(24).to({_off:false},0).to({_off:true},1).wait(36).to({_off:false},0).to({_off:true},1).wait(40).to({_off:false},0).to({_off:true},1).wait(36).to({_off:false},0).to({_off:true},1).wait(36).to({_off:false},0).to({_off:true},1).wait(43));
	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(10).to({_off:false},0).to({_off:true},1).wait(24).to({_off:false},0).to({_off:true},1).wait(24).to({_off:false},0).to({_off:true},1).wait(36).to({_off:false},0).to({_off:true},1).wait(40).to({_off:false},0).to({_off:true},1).wait(36).to({_off:false},0).to({_off:true},1).wait(36).to({_off:false},0).to({_off:true},1).wait(33).to({_off:false},0).to({_off:true},1).wait(8));
	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(11).to({_off:false},0).to({_off:true},1).wait(24).to({_off:false},0).to({_off:true},1).wait(24).to({_off:false},0).to({_off:true},1).wait(36).to({_off:false},0).to({_off:true},1).wait(40).to({_off:false},0).to({_off:true},1).wait(36).to({_off:false},0).to({_off:true},1).wait(36).to({_off:false},0).to({_off:true},1).wait(33).to({_off:false},0).to({_off:true},1).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(12).to({_off:false},0).to({_off:true},1).wait(24).to({_off:false},0).to({_off:true},1).wait(24).to({_off:false},0).to({_off:true},1).wait(36).to({_off:false},0).to({_off:true},1).wait(40).to({_off:false},0).to({_off:true},1).wait(36).to({_off:false},0).to({_off:true},1).wait(36).to({_off:false},0).to({_off:true},1).wait(33).to({_off:false},0).to({_off:true},1).wait(6));
	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(13).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(17).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(17).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(4).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(17).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(4).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(21).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(4).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(18).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(4).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(17).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(4).to({_off:false},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(14).to({_off:false},0).to({_off:true},1).wait(24).to({_off:false},0).to({_off:true},1).wait(24).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(24).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(28).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(24).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(24).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(26));
	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(15).to({_off:false},0).to({_off:true},1).wait(24).to({_off:false},0).to({_off:true},1).wait(24).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(24).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(28).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(24).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(24).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(25));
	this.timeline.addTween(cjs.Tween.get(this.shape_16).wait(16).to({_off:false},0).to({_off:true},1).wait(24).to({_off:false},0).to({_off:true},1).wait(24).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(28).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(13).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(24).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(7).to({_off:false},0).to({_off:true},1).wait(24));
	this.timeline.addTween(cjs.Tween.get(this.shape_17).wait(17).to({_off:false},0).to({_off:true},1).wait(24).to({_off:false},0).to({_off:true},1).wait(24).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(24).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(28).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(24).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(24).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(23));
	this.timeline.addTween(cjs.Tween.get(this.shape_18).wait(18).to({_off:false},0).to({_off:true},1).wait(24).to({_off:false},0).to({_off:true},1).wait(24).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(24).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(28).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(24).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(24).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(22));
	this.timeline.addTween(cjs.Tween.get(this.shape_19).wait(19).to({_off:false},0).to({_off:true},1).wait(24).to({_off:false},0).to({_off:true},1).wait(24).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(24).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(28).to({_off:false},0).to({_off:true},1).wait(36).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(36).to({_off:false},0).to({_off:true},1).wait(21));
	this.timeline.addTween(cjs.Tween.get(this.shape_20).wait(21).to({_off:false},0).to({_off:true},1).wait(24).to({_off:false},0).to({_off:true},1).wait(24).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(24).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(28).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(25).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(36).to({_off:false},0).to({_off:true},1).wait(19));
	this.timeline.addTween(cjs.Tween.get(this.shape_21).wait(22).to({_off:false},0).to({_off:true},1).wait(24).to({_off:false},0).to({_off:true},1).wait(24).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(24).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(28).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(25).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(36).to({_off:false},0).to({_off:true},1).wait(18));
	this.timeline.addTween(cjs.Tween.get(this.shape_22).wait(23).to({_off:false},0).to({_off:true},1).wait(24).to({_off:false},0).to({_off:true},1).wait(36).to({_off:false},0).to({_off:true},1).wait(36).to({_off:false},0).to({_off:true},1).wait(77).to({_off:false},0).to({_off:true},1).wait(36).to({_off:false},0).to({_off:true},1).wait(17));
	this.timeline.addTween(cjs.Tween.get(this.shape_23).wait(24).to({_off:false},0).to({_off:true},1).wait(24).to({_off:false},0).to({_off:true},1).wait(36).to({_off:false},0).to({_off:true},1).wait(36).to({_off:false},0).to({_off:true},1).wait(77).to({_off:false},0).to({_off:true},1).wait(36).to({_off:false},0).to({_off:true},1).wait(16));
	this.timeline.addTween(cjs.Tween.get(this.shape_42).wait(250).to({_off:false},0).wait(3).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(41.4,101.5,17.5,15.2);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 1
	this.instance = new lib.Символ1();
	this.instance.parent = this;
	this.instance.setTransform(158.2,286.8,1,1,2.7,0,0,118,31.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.04,scaleY:1.04,rotation:2.6,x:158.4,y:286.9},15,cjs.Ease.get(-1)).to({regY:31.2,scaleX:1.08,scaleY:1.08,rotation:2.7,x:158.2},14,cjs.Ease.get(1)).to({scaleX:1.04,scaleY:1.04,rotation:2.6,y:286.8},16,cjs.Ease.get(-1)).to({regY:31.1,scaleX:1,scaleY:1,rotation:2.7},14,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(38.9,250.1,238.7,73.3);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 3
	this.instance = new lib.Символ3();
	this.instance.parent = this;
	this.instance.setTransform(53.2,256.7,1,1,-10.2,0,0,34,16);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:16.1,rotation:-6.3,x:51.7,y:258.9},14,cjs.Ease.get(-1)).to({rotation:-2.3,x:49.9,y:261.3},15,cjs.Ease.get(1)).to({rotation:-6.3,x:51.6,y:259},15,cjs.Ease.get(-1)).to({regY:16,rotation:-10.2,x:53.2,y:256.7},15,cjs.Ease.get(1)).wait(1));

	// Символ 2
	this.instance_1 = new lib.Символ2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(129.2,140.7,1,1,-2.7,0,0,123,135.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-1.5,x:130.2,y:145.1},14,cjs.Ease.get(-1)).to({rotation:-0.5,x:131.3,y:149.7},15,cjs.Ease.get(1)).to({rotation:-1.5,x:130.3,y:145.3},15,cjs.Ease.get(-1)).to({rotation:-2.7,x:129.2,y:140.7},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,258.5,281.3);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 6
	this.instance = new lib.Символ6();
	this.instance.parent = this;
	this.instance.setTransform(152.5,57.5,1,1,0,0,0,45.5,57.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:3,x:155.5,y:60.2},9,cjs.Ease.get(-1)).to({regY:57.6,rotation:6.2,x:158.5,y:62.9},9,cjs.Ease.get(1)).to({rotation:3,x:155.6,y:60.1},6,cjs.Ease.get(-1)).to({regY:57.5,rotation:0,x:152.5,y:57.5},6,cjs.Ease.get(1)).wait(1));

	// Символ 5
	this.instance_1 = new lib.Символ5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(73,105.5,1,1,0,0,0,73,45.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:45.6,rotation:-3.3,x:71.7,y:111.1},9,cjs.Ease.get(-1)).to({regY:45.5,rotation:-6.7,x:70.3,y:116.4},9,cjs.Ease.get(1)).to({rotation:-3.3,x:71.7,y:111},6,cjs.Ease.get(-1)).to({rotation:0,x:73,y:105.5},6,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,198,151);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 8
	this.instance = new lib.Символ12();
	this.instance.parent = this;
	this.instance.setTransform(236.2,97.2,1,1,0,0,0,84.4,19.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 3
	this.instance_1 = new lib.Символ9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(332.7,162.1,1,1,0,0,0,138.8,161.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Символ 4
	this.instance_2 = new lib.Символ4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(193.5,194,1,1,0,0,0,89.5,124);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Символ 1
	this.instance_3 = new lib.Символ10();
	this.instance_3.parent = this;
	this.instance_3.setTransform(266.5,70,1,1,0,0,0,91.5,67);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Символ 6
	this.instance_4 = new lib.Символ8();
	this.instance_4.parent = this;
	this.instance_4.setTransform(99,75.5,1,1,0,0,0,99,75.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(0,0,452.6,326.3), null);


// stage content:
(lib.rabbit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.parent = this;
	this.instance.setTransform(237.7,205.9,1,1,0,0,0,235.7,161.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(252,244.1,452.6,326.3);
// library properties:
lib.properties = {
	width: 500,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/hand.png?1481269785844", id:"hand"},
		{src:"images/hear.png?1481269785844", id:"hear"},
		{src:"images/hearrrs.png?1481269785844", id:"hearrrs"},
		{src:"images/pris.png?1481269785844", id:"pris"},
		{src:"images/rabbi.png?1481269785844", id:"rabbi"},
		{src:"images/shad.png?1481269785844", id:"shad"},
		{src:"images/tooth.png?1481269785844", id:"tooth"},
		{src:"sounds/Chudo.mp3?1481269785844", id:"Chudo"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;