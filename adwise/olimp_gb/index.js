(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,809,335);


(lib.blick = function() {
	this.initialize(img.blick);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,112,84);


(lib.button = function() {
	this.initialize(img.button);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,340,56);


(lib.flag = function() {
	this.initialize(img.flag);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,427,205);


(lib.girl1 = function() {
	this.initialize(img.girl1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,176,305);


(lib.girl2 = function() {
	this.initialize(img.girl2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,152,325);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,172,41);// helper functions:

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


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.blick();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.634,0.634);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol26, new cjs.Rectangle(0,0,71,53.3), null);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(220,219,206,0)","#DCDBCE","rgba(219,220,205,0)"],[0,0.502,1],0,0,0,0,0,379.8).s().p("Eg1VAZ+MAAAgz7MBqrAAAMAAAAz7g");
	this.shape.setTransform(341.4,166.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol23, new cjs.Rectangle(0,0,682.8,332.5), null);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#340D07").s().p("AgLAWQgEgFgCgJQgBgIABgMQAAgMAJgCQAIgCALARQAKAPgCALQgDALgHABIgLABQgFAAgEgGg");
	this.shape.setTransform(1.9,3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#321400").s().p("AgfAZQgIgDgGgGQgHgGAIgRQAHgSAdgBQAbgBAQAMQARAMgDAHQgDAIgPAHQgPAHgUABIgJAAQgOAAgEgCg");
	this.shape_1.setTransform(16.9,2.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(0,0,21.9,5.8), null);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.girl2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(0,0,152,325), null);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1B0905").s().p("AgcAPQgNgHgCgFQgCgEAOgJQAOgJAYgCQAYgCAHAMQAGALAAACQAAAEgLAIQgMAHgTABQgRgBgNgGg");
	this.shape.setTransform(4.4,2.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1B0900").s().p("AgFAUQgMAAgJgDQgKgDgBgIQgCgGAJgKQAKgJAUgBQASAAAMANQALANgEAEQgEAEgNADQgLAEgKAAIgEgBg");
	this.shape_1.setTransform(22.8,2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(0,0,26.7,5.1), null);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.girl1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(0,0,176,305), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("A3/H3IAAvtMAv/AAAIAAPtg");
	this.shape.setTransform(153.6,50.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,0,307.2,100.5), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flag();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,427,205), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhCyAeFMAAAg8JMCFlAAAMAAAA8Jg");
	this.shape.setTransform(427.5,192.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,855,385), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.button();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,340,56), null);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol26();
	this.instance.parent = this;
	this.instance.setTransform(35.5,26.6,1,1,0,0,0,35.5,26.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,71,53.3);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol23();
	this.instance.parent = this;
	this.instance.setTransform(341.4,166.2,1,1,0,0,0,341.4,166.2);
	this.instance.alpha = 0.059;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol22, new cjs.Rectangle(0,0,682.8,332.5), null);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol20();
	this.instance.parent = this;
	this.instance.setTransform(59.6,49,1,1,0,0,0,11,2.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({_off:false},0).wait(1).to({alpha:0},4).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol19();
	this.instance_1.parent = this;
	this.instance_1.setTransform(76,162.5,1,1,0,0,0,76,162.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(65));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,152,325);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol17();
	this.instance.parent = this;
	this.instance.setTransform(104.9,46.9,1,1,0,0,0,13.3,2.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(64).to({_off:false},0).wait(1).to({alpha:0},4).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol16();
	this.instance_1.parent = this;
	this.instance_1.setTransform(88,152.5,1,1,0,0,0,88,152.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(70));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,176,305);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("A1YhgMAqzAAAA1QhCMAqyAAAA1agMMAqzAAAA1hgqMAqyAAAA1YANMAqzAAAA1QArMAqyAAAA1aBhMAqzAAAA1hBDMAqyAAA");
	this.shape.setTransform(158.5,-141.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},70).wait(37));

	// Layer 1
	this.instance = new lib.Symbol12();
	this.instance.parent = this;
	this.instance.setTransform(153.6,50.2,1,1,0,0,0,153.6,50.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(69).to({_off:false},0).to({alpha:0},5).wait(5).to({alpha:1},0).to({alpha:0},5).wait(6).to({alpha:1},0).to({alpha:0},5).wait(6).to({alpha:1},0).to({alpha:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(19.7,-152.1,277.7,21.4);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAwBlIAAhHIgtAAIgwBHIgkAAIAAgFIAzhGQgJgEgIgFQgHgHgGgHQgFgHgDgJQgDgKgBgKQAAgOAFgMQAFgNAJgIQAKgKAMgFQAOgGAQAAIBTAAIAADKgAgQhEQgHADgGAFQgEAEgDAHQgDAHAAAIQAAAIADAHQADAHAEAFQAGAGAHABQAGADAJAAIAxAAIAAhKIgxAAQgJAAgGADg");
	this.shape.setTransform(265.1,28.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhSBmIAAjLIAhAAIAABLIgCA9IB7iIIALAAIAADLIghAAIAAhKIADg/Ih7CJg");
	this.shape_1.setTransform(245.1,28.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AA8B0IAAgdIiVAAIAAjKIAiAAIAACrIBXAAIAAirIAiAAIAACtIAYAAIAAA6g");
	this.shape_2.setTransform(224.3,29.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABCBmIgUgqIhcAAIgTAqIgjAAIAAgEIBdjHIAPAAIBdDHIAAAEgAAjAgIgjhQIgjBQIBGAAg");
	this.shape_3.setTransform(202.7,28);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhNBlIAAjKIBTAAQARAAANAGQAOAGAJAKQAJAJAFANQAFANAAAPQAAAOgFANQgFAMgJAKQgJAKgOAFQgOAGgQgBIgxAAIAAA9gAgsALIAyAAQAJAAAHgDQAIgDAEgFQAFgFADgJQADgHAAgJQAAgIgDgIQgCgIgFgGQgGgFgGgDQgIgDgJAAIgyAAg");
	this.shape_4.setTransform(185.2,28.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgPBlIAAirIg7AAIAAgfICWAAIAAAfIg8AAIAACrg");
	this.shape_5.setTransform(166.9,28.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgOBmQgLgCgIgDQgKgEgIgFQgIgFgHgGQgHgHgGgIQgGgIgEgKQgEgKgCgKQgCgLAAgMQAAgMACgLQACgLAEgJQAEgKAGgIQAGgIAHgHIAPgMQAJgFAJgDQAJgEAKgCQAKgCAJAAQAPAAAOAFQAPAEANAIQAMAJAKAMQAKATACALIggAAQgDgJgGgHQgGgHgJgFQgHgEgJgCQgJgDgKAAQgPAAgMAGQgNAFgJAKQgJAJgFAOQgFAOAAAPQAAAPAFANQAFANAJAKQAJAKANAFQAMAGAPAAQAKAAAJgDQAKgCAIgFQAIgFAGgIQAGgIADgJIAhAAQgCAJgDAIIgIAPQgJANgNAJQgMAIgQAFQgPAEgPAAQgJAAgKgCg");
	this.shape_6.setTransform(148.1,28.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhSBmIAAjLIAiAAIAABLIgDA9IB6iIIAMAAIAADLIghAAIAAhKIADg/Ih8CJg");
	this.shape_7.setTransform(126.1,28.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag7BlIAAjKIB3AAIAAAfIhWAAIAACrg");
	this.shape_8.setTransform(108.7,28.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag+BlIAAjKIB7AAIAAAeIhZAAIAAA2IBUAAIAAAcIhUAAIAAA8IBbAAIAAAeg");
	this.shape_9.setTransform(92.2,28.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhNBlIAAjKIBUAAQAQAAANAGQAOAGAJAKQAJAJAFANQAFANAAAPQAAAOgFANQgFAMgJAKQgJAKgOAFQgOAGgPgBIgyAAIAAA9gAgsALIAzAAQAIAAAHgDQAIgDAEgFQAFgFAEgJQACgHAAgJQAAgIgCgIQgDgIgFgGQgGgFgGgDQgIgDgIAAIgzAAg");
	this.shape_10.setTransform(74.9,28.1);

	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(170,28,1,1,0,0,0,170,28);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,340,56), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol18();
	this.instance.parent = this;
	this.instance.setTransform(76,162.5,1,1,0,0,0,76,162.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:166},39,cjs.Ease.get(-1)).to({y:169},35,cjs.Ease.get(1)).to({y:165.9},36,cjs.Ease.get(-1)).to({y:162.5},39,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,152,325);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol15();
	this.instance.parent = this;
	this.instance.setTransform(88,152.5,1,1,0,0,0,88,152.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:156.7},39,cjs.Ease.get(-1)).to({y:160.5},35,cjs.Ease.get(1)).to({y:156.8},35,cjs.Ease.get(-1)).to({y:152.5},40,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,176,305);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy 6
	this.instance = new lib.Symbol25();
	this.instance.parent = this;
	this.instance.setTransform(165.5,-5.9,1,1,0,0,0,35.5,26.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(84).to({_off:false},0).wait(1));

	// Layer 1 copy 7
	this.instance_1 = new lib.Symbol25();
	this.instance_1.parent = this;
	this.instance_1.setTransform(120.7,26.6,1,1,0,0,0,35.5,26.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(41).to({_off:false},0).to({_off:true},1).wait(43));

	// Layer 1 copy 8
	this.instance_2 = new lib.Symbol25();
	this.instance_2.parent = this;
	this.instance_2.setTransform(263,13.6,1,1,0,0,0,35.5,26.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(60).to({_off:false},0).to({_off:true},1).wait(24));

	// Layer 1 copy 9
	this.instance_3 = new lib.Symbol25();
	this.instance_3.parent = this;
	this.instance_3.setTransform(360.5,0.6,1,1,0,0,0,35.5,26.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(12).to({_off:false},0).to({_off:true},1).wait(72));

	// Layer 1 copy 10
	this.instance_4 = new lib.Symbol25();
	this.instance_4.parent = this;
	this.instance_4.setTransform(516.5,20.1,1,1,0,0,0,35.5,26.6);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(71).to({_off:false},0).to({_off:true},1).wait(13));

	// Layer 1 copy 11
	this.instance_5 = new lib.Symbol25();
	this.instance_5.parent = this;
	this.instance_5.setTransform(74.5,-18.9,1,1,0,0,0,35.5,26.6);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(5).to({_off:false},0).to({_off:true},1).wait(79));

	// Layer 1 copy 3
	this.instance_6 = new lib.Symbol25();
	this.instance_6.parent = this;
	this.instance_6.setTransform(217.5,26.6,1,1,0,0,0,35.5,26.6);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(50).to({_off:false},0).to({_off:true},1).wait(34));

	// Layer 1 copy 4
	this.instance_7 = new lib.Symbol25();
	this.instance_7.parent = this;
	this.instance_7.setTransform(627,26.6,1,1,0,0,0,35.5,26.6);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(25).to({_off:false},0).to({_off:true},1).wait(59));

	// Layer 1 copy 5
	this.instance_8 = new lib.Symbol25();
	this.instance_8.parent = this;
	this.instance_8.setTransform(621.1,-29.7,1,1,0,0,0,35.5,26.6);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(18).to({_off:false},0).to({_off:true},1).wait(66));

	// Layer 1 copy 2
	this.instance_9 = new lib.Symbol25();
	this.instance_9.parent = this;
	this.instance_9.setTransform(458.5,-18.9,1,1,0,0,0,35.5,26.6);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(35).to({_off:false},0).to({_off:true},1).wait(49));

	// Layer 1 copy
	this.instance_10 = new lib.Symbol25();
	this.instance_10.parent = this;
	this.instance_10.setTransform(587.6,2.8,1,1,0,0,0,35.5,26.6);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(75).to({_off:false},0).to({_off:true},1).wait(9));

	// Layer 1
	this.instance_11 = new lib.Symbol25();
	this.instance_11.parent = this;
	this.instance_11.setTransform(35.5,26.6,1,1,0,0,0,35.5,26.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({_off:true},1).wait(84));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,71,53.3);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Symbol22();
	this.instance.parent = this;
	this.instance.setTransform(243.1,294.9,1,1,0,0,0,341.4,166.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(74).to({_off:false},0).to({alpha:0},4).wait(6).to({alpha:1},0).to({alpha:0},5).wait(6).to({alpha:1},0).to({alpha:0},5).wait(7));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(220,216,27,0)","#C8DC15","rgba(219,220,29,0)"],[0.416,0.502,1],0,0,0,0,0,23.4).s().p("AiyCWIAAksIFlAAIAAEsg");
	this.shape.setTransform(-198.5,27.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(106));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-216.4,12.2,35.8,30.1);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol27();
	this.instance.parent = this;
	this.instance.setTransform(102.5,109.6,1,1,0,0,0,35.5,26.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.back();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(0,0,809,335), null);


(lib.Symbol13copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol27();
	this.instance.parent = this;
	this.instance.setTransform(102.5,109.6,1,1,0,0,0,35.5,26.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.back();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13copy, new cjs.Rectangle(0,0,809,335), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol14();
	this.instance.parent = this;
	this.instance.setTransform(404.5,167.5,1,1,0,0,0,404.5,167.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:384.8},50,cjs.Ease.get(-1)).to({x:365.5},49,cjs.Ease.get(1)).to({x:385.4},51,cjs.Ease.get(-1)).to({x:404.5},49,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,809,335);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AMHLTQgugQghgdQgigfgTgqIgOguIgFg0IAAjsQAAgkATg+QATgqAigeQAhgeAugQQAsgPA0AAQAzAAAsAPQAtAQAhAeQAiAeATAqQATAtAAA1IAADsIgFA0IgOAuQgTAqgiAfQghAdgtAQQgsAQgzAAQg0AAgsgQgAMpDVQgYAWgBAoIAADlQABAnAYAWQAXAUAnAAQAmAAAWgUQAZgWAAgnIAAjlQAAgogZgWQgXgVglAAQgnAAgXAVgACmLTQgtgQghgdQgjgfgSgqIgPguIgEg0IAAjsQgBgkAUg+QASgqAjgeQAhgeAtgQQAtgPAzAAQAzAAAtAPQAtAQAgAeQAjAeASAqQATAtAAA1IAADsIgEA0IgPAuQgSAqgjAfQggAdgtAQQgsAQg0AAQgzAAgtgQgADIDVQgYAWAAAoIAADlQAAAnAYAWQAXAUAnAAQAmAAAXgUQAZgWAAgnIAAjlQAAgogZgWQgXgVgmAAQgnAAgXAVgAWwLeQgngCgZgHQgYgGgVgOQgVgKgOgLQgKgIgIgJQgTgTgEgPIgBgCQgMgSgEgTQgCgMABgSQABgRAEgXQABgKAEgHQADgKAHgHIgZAAQgHAAgDgCIAAgBIAAgCIAAgBIAAgCIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgCIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgCIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgCIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgCIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgCIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgCIAAgBIAAgBQACgDADgBQAEgCAEACIADACIAGgBIAQAAQAMgCAQABIAjABIALgJIAIgIIAFgDIg1ABQgWABgKgCIgMgDIgMAAIgFAAIAAgBIAAgBIAAgCIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgCIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgCIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgCIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgCIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgCIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgCIAAgBIAAgCIAAgCIAAgBIAAgBQADgDAFABIADABIAUABIAXgBICjAAIAjghIALgMIABgFIAFgSIgBgEQgDglgUgRQgPgMgdgFQhSgNhPAZQgIACgFgBIAAAAIAAgCIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgCIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgCIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgCIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgCIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgCIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgCIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgCIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgCIAAgBIAAgCIAAgCIAAgBQADgFAFAAIADABQADgDAGgBQBegQA7AAIAsADQA2AGAkARQAhAPAUAYIACACQAYAWAGATIAFAQIACAKQADAMAAASIgBAbQgCAegLASQgFAHgNANIAhAAIAMAAIAFgBIANgEQAGgBAEAEIAAABIAAACIAAABIAAACIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAACIAAABIAAACIAAABIAAABIikAAIAAABIAAABIAAABIAAABIAAABIgHAGIgNAKIAagBICGAAQAIACAFADQACgCADAAQADAAADACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAACIAAABIAAACIAAABIAAACIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAAAIgKADIgsACIiQAAIAAgDIgpABIgeAAIgKAIQgNAMgEAbQgEAZAFAPQAJAXAcALQASAHAhACQBgAEBKgdIAMgEIABAAIAAABIAAACIAAABIAAACIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAACIAAABIAAACIAAABIAAACIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAACIgCAMQgDAEgFAAQgDAAgCgCIgGADQgMAGgVADQhHANhHAAIgrgBgAZDLDIADgBIgDAAgAntLUICUjzIgNABQg0ACgpgNQgrgOgdgcQgegcgPgoQgRgrABg1QAAgnASg/QASgqAkgeQAhgcAvgOQAtgOA3AAQA2AAAtAOQAvAOAiAcQAiAeATAqQATA/AAAnQAAAqgMAmQgLAigXAnIi0EygAmLDMQgVAVAAAoQAAArAVAVQAVAVAqAAQAqAAAUgVQAVgVgBgrQAAgogTgVQgVgVgqAAQgqAAgVAVg");
	mask.setTransform(171.9,73.9);

	// Layer 3
	this.instance = new lib.Symbol11();
	this.instance.parent = this;
	this.instance.setTransform(232,116.9,1,1,0,0,0,153.6,50.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("A1YANMAqzAAAA1hgqMAqyAAAA1agMMAqzAAAA1QhCMAqyAAAA1YhgMAqzAAAA1hBDMAqyAAAA1aBhMAqzAAAA1QArMAqyAAA");
	this.shape.setTransform(230.7,-74.2);

	var maskedShapeInstanceList = [this.instance,this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	// Layer 4
	this.instance_1 = new lib.Symbol24();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-3.4,-129.5,1,1,0,0,0,17.9,15.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 1
	this.instance_2 = new lib.Symbol9();
	this.instance_2.parent = this;
	this.instance_2.setTransform(213.5,102.5,1,1,0,0,0,213.5,102.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(-237.8,-132.5,664.8,337.5), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol6();
	this.instance.parent = this;
	this.instance.setTransform(170,28,1,1,0,0,0,170,28);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.06,scaleY:1.06,x:170.1,y:28.1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,340,56);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
		
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
		
		this.fon.x = - stage.mouseX / 30;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 1
	this.instance = new lib.Symbol13();
	this.instance.parent = this;
	this.instance.setTransform(404.5,167.5,1,1,0,0,0,404.5,167.5);

	this.fon = new lib.Symbol13copy();
	this.fon.parent = this;
	this.fon.setTransform(0.7,26.1,1,1,0,0,0,0.7,26.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.fon}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,809,335);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		
		function fl_MouseOverHandler_5()
		    {
			    _this.back.gotoAndPlay(1);
		
		    }
		
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		
		
		      function fl_MouseOutHandler_2()
		    {
			    _this.back.gotoAndPlay(0);
		
		    }
		
			
			
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 5
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(231,189);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 6
	this.instance_1 = new lib.Symbol7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(328,266,1,1,0,0,0,170,28);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 4
	this.instance_2 = new lib.Symbol3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(552,174.5,1,1,0,0,0,76,162.5);

	this.instance_3 = new lib.Symbol2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(98,164.5,1,1,0,0,0,88,152.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	// Layer 3
	this.instance_4 = new lib.Symbol8();
	this.instance_4.parent = this;
	this.instance_4.setTransform(317.5,100.5,1,1,0,0,0,213.5,102.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Layer 7
	this.instance_5 = new lib.Symbol4();
	this.instance_5.parent = this;
	this.instance_5.setTransform(353.5,149.6,1,1,0,0,0,427.4,192.5);
	this.instance_5.alpha = 0.121;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Layer 1
	this.back = new lib.Symbol5();
	this.back.parent = this;
	this.back.setTransform(342.5,141.5,1,1,0,0,0,404.5,167.5);

	this.timeline.addTween(cjs.Tween.get(this.back).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(186.2,18,914.8,476.5);
// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/back.jpg?1499179491918", id:"back"},
		{src:"images/blick.png?1499179491918", id:"blick"},
		{src:"images/button.png?1499179491918", id:"button"},
		{src:"images/flag.png?1499179491918", id:"flag"},
		{src:"images/girl1.png?1499179491918", id:"girl1"},
		{src:"images/girl2.png?1499179491918", id:"girl2"},
		{src:"images/logo.png?1499179491918", id:"logo"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;