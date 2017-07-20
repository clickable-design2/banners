(function (lib, img, cjs, ss, an) {

(lib.blue = function() {
	this.initialize(img.blue);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,422,94);


(lib.money = function() {
	this.initialize(img.money);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,41,16);


(lib.red = function() {
	this.initialize(img.red);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,422,94);


(lib.txt1_img = function() {
	this.initialize(img.txt1_img);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,420,94);


(lib.txt2_img = function() {
	this.initialize(img.txt2_img);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,308,94);


(lib.txt3_img = function() {
	this.initialize(img.txt3_img);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,306,74);


(lib.txt4_img = function() {
	this.initialize(img.txt4_img);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,448,74);


(lib.txt5_img = function() {
	this.initialize(img.txt5_img);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,306,74);// helper functions:

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


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAKB8IgCgBIgEgEQgCgCgBgDIAAgEIABgGIADgEQACgDACgBIAHgBIAAAAQAIABADADIAEAIQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAABIgBACIgCAFQgCACgDACIgFACgAgpB8IgCAAIgEgCIgDgDQgDgEAAgJQAAgEABgCIADgDIADgDQADgCAFABIAAgBIAIADIADABIAEAIIAAAJIgDAFIgCADIgGADIgEABgAAxBsIgGgBIgDgDIgDgEIgBgFIABgHIACgDIAFgEIAHgCIAIACIACACIADADIACAFIABAEIgBADIgCAEIgCACQgCADgGABIgCABgAhQBXIgCAAIgBAAIgEgCIgDgEIgCgDIgBgHIABgFIACgEIADgDQAEgFAFACIAAgCQAIACAEAEIABABIAAACIACADQACADgBAFIgBADIgBADQgEAGgHABIgDABgAAZBSIgFgBIgBgBIgDgBIgEgDIgBgEQgBgDAAgDIABgEIACgEIAFgFIAHgBIAAAAQAEAAAEACIADADIAEAGQABADgBADIgBACIgCAFIgDADIgHADgABVBOIgCgCQgDgCgCgDQgEgIAEgGIAEgFIADgCIAGAAIAAgBQAEAAAFADQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAIACACIABACIAAAEIAAAFIgBACIgCAEIgDADIgGABIgDABgAggBMIgHgBIgCgCIgDgDQgGgIAFgJIAEgEIACgBIAHgBIAAgCQAHAAAFAEIADACIABADIABADIABAEIgBAFIgCAEIgDADQgGADgFAAIgBAAgAhnAyIgFgCIgDgBIgEgGQgEgHAFgIIAFgFIAHgBIAAAAQAIAAADAEIAEAHIAAAFIAAADIgDAEIgCAEIgEABIgEACgABAApIgCgBIgCgBIgGgFIgCgDIgBgHIABgDIACgFIAGgEIAGgBIAAAAQAEAAAFADQABAAAAAAQABAAAAABQAAAAABABQAAAAAAAAIABACIACADIABAEIgBAFIgBACIgCADQgBABAAAAQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAIgEACgABrAkIgGgCIgEgDIgCgEIgBgFIABgGIACgDIAEgFIAIgBIAAgBQAIACADAEIABABIABACIABACIABAEQAAAFgBABIgBACIgBACIgBABQgDADgGABIgCAAgAg7ASIgCAAIgCAAIgCgBIgCgCQgDgBgCgDQgDgGACgFIACgEIADgEQAEgCAFAAIAAgBIAIADIACACIADADIACADIAAAFIAAADIgDAFIgCACQgEACgEABgAhxAIIgBAAIgDgCIgEgEQgEgFAEgIIAFgGIACgBIAGgBIAAgBQAFABADACIADACIAEAHQABADgBACIAAADIgBACIgCACIgDACIgCACIgHABgABlgUIgCgBIgCAAIgDgDQgEgGABgGQAAgGAGgEIACgBIAHgBQAHABAEADIABACIACAEQACAEgCAFIgCACIAAACIgCACIgEACIgGACgAA5gZIgEgBIgCAAIgCgCQgFgEgBgDIgBgEQAAgEACgDIAFgGIACgCIAGgBIAAgBQAJACACAEIAEAHQAAABAAAAQABABAAAAQAAABgBAAQAAABAAABIAAACIgDAFIgCACIgIAEgAgrgiIgFgCIgCgBIgDgDIgDgFIAAgEIAAgEIACgEIAEgFIACgBIAHgBIAAAAQADAAAEACIAFAEIABACIABACIABAFIgBAFIgBACIgBACIgCACIgEACIgGACgAhcgpIgCAAIgCgBIgEgEIgDgCIgBgDIgBgGIABgDIABgDIACgDIADgCQAEgCAFAAIgBgBIAIADIACABIADADQADAFAAAEIgDAHIgCACQgDADgFACIgDAAgAAOgvIgIgDIgDgEIgCgDIAAgFIAAgEIADgFIADgDQADgCAGAAIAAgBIAIACIACABIACAEIADAFIAAAFIgBADIgCAEIgEAEIgIACgABUg+IgFgCIgDgBIgEgGQgEgIAFgGIADgEIACgCIAHgBIAAAAQAIABADAEIADADIABADIAAAGIAAACIgDAFIgCADIgEABIgDACgAg3hNIgCgBIgCAAIgCgCQgFgDgBgDIgBgFQAAgGADgEIAGgEIAGgCIAAAAQAEAAAFADIADACIABADIACACQABACgBAEIAAAEIgDAEIgCACIgIAEgAArhWIgCgBIgCAAIgCgCQgDgCgDgFQgBgFABgEIACgFIAEgDIACgBIAGgCIAAAAQAFAAAFAEIACACIABACIACADIAAACIAAAFIgEAHQgCADgHACgAgHhfIgCAAIgFgDIgEgEIgBgCIgBgHIABgDIABgDIACgCIADgCQACgCAGAAIAAgBQADAAACACQADAAACADIAEAHQABAEgBADIgCADIgBABQgBABAAABQAAAAAAAAQgBABAAAAQgBAAAAAAQgDADgDAAIgCABg");
	this.shape.setTransform(12.4,12.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(0,0,24.8,25), null);


(lib.txt5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.txt5_img();
	this.instance.parent = this;
	this.instance.setTransform(-152,-39);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt5, new cjs.Rectangle(-152,-39,306,74), null);


(lib.txt4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.txt4_img();
	this.instance.parent = this;
	this.instance.setTransform(-223,-36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt4, new cjs.Rectangle(-223,-36,448,74), null);


(lib.txt3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.txt3_img();
	this.instance.parent = this;
	this.instance.setTransform(-153,-36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt3, new cjs.Rectangle(-153,-36,306,74), null);


(lib.txt2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.txt2_img();
	this.instance.parent = this;
	this.instance.setTransform(-156,-47);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt2, new cjs.Rectangle(-156,-47,308,94), null);


(lib.txt1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.txt1_img();
	this.instance.parent = this;
	this.instance.setTransform(-209,-43);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt1, new cjs.Rectangle(-209,-43,420,94), null);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.money();
	this.instance.parent = this;
	this.instance.setTransform(-2,8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol24, new cjs.Rectangle(-2,8,41,16), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.parent = this;
	this.instance.setTransform(12.4,12.2,1,1,0,0,0,12.4,12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.3,24.8,25);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ8();
	this.instance.parent = this;
	this.instance.setTransform(372.2,65,1,1,0,0,0,12.4,12.5);
	this.instance.alpha = 0.52;

	this.instance_1 = new lib.Символ8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(81.1,65,1,1,0,0,0,12.4,12.5);
	this.instance_1.alpha = 0.52;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 1
	this.instance_2 = new lib.blue();
	this.instance_2.parent = this;
	this.instance_2.setTransform(40,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(40,0,422,94), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 7
	this.instance = new lib.Символ7();
	this.instance.parent = this;
	this.instance.setTransform(426,36.1,0.91,0.91,0,0,0,211,47);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:211.1,regY:46.9,x:409},22,cjs.Ease.get(-1)).to({regX:211,regY:47,x:391},23,cjs.Ease.get(1)).to({regX:211.1,regY:46.9,x:409.4},22,cjs.Ease.get(-1)).to({x:424.6},14,cjs.Ease.get(1)).to({regX:211,regY:47,x:426},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(270.4,-6.7,384,85.6);


(lib.txt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt5
	this.instance = new lib.txt5();
	this.instance.parent = this;
	this.instance.setTransform(-475.1,89.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(68).to({_off:false},0).to({x:-33,alpha:1},17,cjs.Ease.get(1)).to({x:27},18).to({x:445.1,alpha:0},17,cjs.Ease.get(-1)).wait(1));

	// txt4
	this.instance_1 = new lib.txt4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-475.2,4.6);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(61).to({_off:false},0).to({x:-33.1,alpha:1},17,cjs.Ease.get(1)).to({x:26.9},18).to({x:445,alpha:0},17,cjs.Ease.get(-1)).to({_off:true},1).wait(7));

	// txt3
	this.instance_2 = new lib.txt3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-475.3,-75.8);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(55).to({_off:false},0).to({x:-33.2,alpha:1},17,cjs.Ease.get(1)).to({x:26.8},18).to({x:444.9,alpha:0},17,cjs.Ease.get(-1)).to({_off:true},1).wait(13));

	// txt2
	this.instance_3 = new lib.txt2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-327.3,58.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({_off:false},0).to({x:2.8,alpha:1},19,cjs.Ease.get(1)).to({x:42.8},20).to({x:312.9,alpha:0},20,cjs.Ease.get(-1)).to({_off:true},1).wait(57));

	// txt1
	this.instance_4 = new lib.txt1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-329.6,-54.1);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:0.5,alpha:1},19,cjs.Ease.get(1)).to({x:40.5},20).to({x:310.6,alpha:0},20,cjs.Ease.get(-1)).to({_off:true},1).wait(61));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-538.6,-97.1,420,94);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.instance = new lib.Symbol24();
	this.instance.parent = this;
	this.instance.setTransform(115.7,80.5,0.653,0.653,-36.5,0,0,21.1,12.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:20.8,scaleX:0.38,scaleY:0.38,rotation:-149.3,x:68.7,y:53.6},14).to({regX:21.4,regY:12.8,scaleX:0.29,scaleY:0.29,rotation:-276.5,x:51.7,y:44.1,alpha:0},5).wait(1));

	// Layer 5
	this.instance_1 = new lib.Symbol24();
	this.instance_1.parent = this;
	this.instance_1.setTransform(69.2,73.2,0.38,0.38,-164.9,0,0,20.7,12.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:21,regY:12.3,scaleX:0.36,scaleY:0.36,rotation:-172.8,x:65.5,y:72.7},1).to({regX:21.6,regY:12.7,scaleX:0.27,scaleY:0.27,rotation:-300,x:47.3,y:70.9,alpha:0},5).wait(1).to({regX:21.1,scaleX:0.62,scaleY:0.62,rotation:-420,x:116.4,y:78.2,alpha:1},0).to({regX:20.9,regY:12.6,scaleX:0.4,scaleY:0.4,rotation:-516.7,x:72.8,y:73.5},12).wait(1));

	// Layer 4
	this.instance_2 = new lib.Symbol24();
	this.instance_2.parent = this;
	this.instance_2.setTransform(70,84.3,0.579,0.579,-123.3,0,0,21.1,12.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:12.4,scaleX:0.42,scaleY:0.42,rotation:-187.8,x:36.8,y:89.4},8).to({regX:21.4,regY:12.7,scaleX:0.31,scaleY:0.31,rotation:-315,x:16.1,y:92.7,alpha:0},5).wait(1).to({regX:21.1,regY:12.6,scaleX:0.71,scaleY:0.71,rotation:-435,x:94.6,y:80.4,alpha:1},0).to({regY:12.7,scaleX:0.6,scaleY:0.6,rotation:-475.3,x:74,y:83.7},5).wait(1));

	// Layer 3
	this.instance_3 = new lib.Symbol24();
	this.instance_3.parent = this;
	this.instance_3.setTransform(74.5,47.8,0.554,0.554,-95.6,0,0,21.1,12.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:12.6,scaleX:0.46,scaleY:0.46,rotation:-127.8,x:62.8,y:33.3},4).to({regX:21.2,regY:12.5,scaleX:0.35,scaleY:0.35,rotation:-255,x:48.1,y:15.2,alpha:0},5).wait(1).to({regY:12.6,scaleX:0.79,scaleY:0.79,rotation:-375,x:103.6,y:84.1,alpha:1},0).to({regY:12.7,scaleX:0.58,scaleY:0.58,rotation:-447.7,x:77.4,y:51.3},9).wait(1));

	// Layer 2
	this.instance_4 = new lib.Symbol24();
	this.instance_4.parent = this;
	this.instance_4.setTransform(34.8,74.4,0.325,0.325,110.8,0,0,20.9,12.2);
	this.instance_4.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:21.4,regY:12.8,scaleX:0.29,scaleY:0.29,rotation:60,x:27,y:73.6,alpha:0},2).wait(1).to({regX:21.1,regY:12.7,scaleX:0.65,scaleY:0.65,rotation:-60,x:100,y:81.4,alpha:1},0).to({regX:20.9,regY:12.4,scaleX:0.38,scaleY:0.38,rotation:-172.8,x:46.3,y:75.6},14).to({regY:12.3,scaleX:0.34,scaleY:0.34,rotation:-223.6,x:38.7,y:74.8,alpha:0.602},2).wait(1));

	// Layer 1
	this.instance_5 = new lib.Symbol24();
	this.instance_5.parent = this;
	this.instance_5.setTransform(94.6,73,0.714,0.714,-69.2,0,0,21.1,12.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:21.2,scaleX:0.46,scaleY:0.46,rotation:-157.8,x:46.9,y:54.4},11).to({regY:12.7,scaleX:0.35,scaleY:0.35,rotation:-285,x:25.1,y:46.1,alpha:0},5).wait(1).to({regX:21.1,regY:12.6,scaleX:0.79,scaleY:0.79,rotation:-405,x:107.6,y:78,alpha:1},0).to({scaleX:0.74,scaleY:0.74,rotation:-421.2,x:99,y:74.6},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(29.1,37.3,100.4,59.7);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(30));

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.parent = this;
	this.instance.setTransform(0.9,46.9,0.74,0.74,0,0,0,271.6,56.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-513.2},28,cjs.Ease.get(-1)).wait(1).to({x:0.9},28,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,284.2,63.3);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.Символ8();
	this.instance.parent = this;
	this.instance.setTransform(1.4,65.9,0.782,0.782,0,0,0,12.4,12.6);
	this.instance.alpha = 0.52;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(292.6,65.4,1,1,0,0,0,12.4,12.5);
	this.instance_1.alpha = 0.52;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.red();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-40,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 2
	this.instance_3 = new lib.Symbol23();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-165.6,-35.2,1.526,1.526,0,0,0,21.1,12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(-153.3,0,535.3,94), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 6
	this.instance = new lib.Символ6();
	this.instance.parent = this;
	this.instance.setTransform(322,51,1,1,0,0,0,211,47);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:403.2},22,cjs.Ease.get(-1)).to({x:488},23,cjs.Ease.get(1)).to({x:401.1},22,cjs.Ease.get(-1)).to({x:329.1},14,cjs.Ease.get(1)).to({x:322},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.3,4,535.3,94);


(lib.cars = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Символ13();
	this.instance.parent = this;
	this.instance.setTransform(-228.1,-52.6,1.094,1.094,0,0,0,58.4,21.1);

	this.car = new lib.Символ14();
	this.car.parent = this;
	this.car.setTransform(142.9,-70.4,1.291,1.291,0,0,0,142,31.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.car},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.cars, new cjs.Rectangle(-338.2,-111.4,664.8,142.9), null);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		window._setCanvasSize = function() {
			
		    var s = getWindowSize();
			
				defaultScale = 1,
			
				minWidth = 500,
				minHeight = 500,
			
				scaleW = s.iw / minWidth,
				scaleH = s.ih / minHeight,
				scaleWH = scaleW * scaleH;
		    
		    /* Position */
		    
		    _this.cars.x = ((s.iw > s.ih) ? s.iw * 0.65 : s.iw * 0.6);
			_this.cars.y = s.ih * 0.75;
			
			_this.txt.x = ((s.iw > s.ih) ? s.iw * 0.65 : s.iw / 2);
			_this.txt.y = ((s.iw > s.ih) ? s.ih * 0.25 : s.ih * 0.32);
			
			function setScale(scale) {
				_this.cars.scaleX = _this.cars.scaleY = scale;
				_this.txt.scaleX = _this.txt.scaleY = scale;
			}
			
			setScale(defaultScale);
		
		    /* Rescale */
		
		    if(s.iw < minWidth) {
		        setScale(scaleW);
		    }
		
		    if(s.ih < minHeight) {
		        setScale(scaleH);
		    }
		
		    if(s.iw < minWidth && s.ih < minHeight) {
		        setScale(scaleWH);
		    }
		}
				
		window.onresize=function(){_setCanvasSize();}
		window.onresize();
		document.addEventListener("DOMContentLoaded", function(){ _setCanvasSize()});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// txt
	this.txt = new lib.txt();
	this.txt.parent = this;
	this.txt.setTransform(525.2,106.7);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	// green
	this.cars = new lib.cars();
	this.cars.parent = this;
	this.cars.setTransform(623.1,500.8,1,1,0,0,0,106.9,-9.3);

	this.timeline.addTween(cjs.Tween.get(this.cars).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(498.6,393.6,856,531.9);
// library properties:
lib.properties = {
	width: 1024,
	height: 768,
	fps: 30,
	color: "#FFFFFF",
	opacity: 0.00,
	webfonts: {},
	manifest: [
		/*{src:"images/blue.png", id:"blue"},
		{src:"images/money.png", id:"money"},
		{src:"images/red.png", id:"red"},
		{src:"images/txt1_img.png", id:"txt1_img"},
		{src:"images/txt2_img.png", id:"txt2_img"},
		{src:"images/txt3_img.png", id:"txt3_img"},
		{src:"images/txt4_img.png", id:"txt4_img"},
		{src:"images/txt5_img.png", id:"txt5_img"}*/
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;