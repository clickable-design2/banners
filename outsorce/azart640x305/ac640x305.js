(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,305);


(lib.butn = function() {
	this.initialize(img.butn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,412,200);


(lib.coins1 = function() {
	this.initialize(img.coins1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,305);


(lib.dama_02 = function() {
	this.initialize(img.dama_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,58,100);


(lib.dama_05 = function() {
	this.initialize(img.dama_05);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,129,237);


(lib.dama_08 = function() {
	this.initialize(img.dama_08);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,80);


(lib.dama_13 = function() {
	this.initialize(img.dama_13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,46,74);


(lib.dama_15 = function() {
	this.initialize(img.dama_15);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,75,77);


(lib.dama_18 = function() {
	this.initialize(img.dama_18);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,144,125);


(lib.ipad_03 = function() {
	this.initialize(img.ipad_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,433,259);


(lib.logo_03 = function() {
	this.initialize(img.logo_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,371,161);


(lib.reel2 = function() {
	this.initialize(img.reel2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,35,200);


(lib.tex_03 = function() {
	this.initialize(img.tex_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,433,69);// helper functions:

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

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AFIBYQgGAAgCgCQgCgDAAgFIAAibQAAgFACgDQACgCAGAAIAUAAQAGAAACACQACADAAAFIAAAvIAlAAQAOAAALAFQALADAIAIQAIAIAEAKQAFALAAAOQAAAOgFAKQgEALgIAIQgIAIgLAEQgLAEgOAAgAFmAzIAhAAQAKAAAHgGQAFgGAAgKQAAgLgFgGQgHgGgKAAIghAAgADdBYQgGAAgCgCQgCgDAAgFIAAiAIgnAAQgGAAgCgCQgDgDAAgFIAAgRQAAgFADgDQACgCAGAAIB1AAQAGAAACACQADADAAAFIAAARQAAAFgDADQgCACgGAAIgmAAIAACAQAAAFgCADQgCACgGAAgACHBYQgKAAgEgCQgDgCgCgGIgHgWIg+AAIgIAWQgCAGgDACQgEACgJAAIgRAAQgEAAgCgCQgCgDACgFIA7icQABgGADgBQADgCAFAAIATAAQAGAAACACQADABACAFIA7CdQACAFgCADQgCACgFAAgABiAXIgNglQgFgTgBgNIAAgEIgCAAIgCASIgEARIgNAmIAoAAgAiMBYQgGAAgCgCQgCgDAAgFIAAibQAAgFACgDQACgCAGAAIBCAAQAOAAAMAEQALAEAIAIQAIAIAEALQAEAKAAAOQAAAOgEALQgEAKgIAIQgIAHgLAEQgMAFgOAAIgkAAIAAAvQAAAFgCADQgCACgGAAgAhugFIAgAAQALAAAGgGQAGgGAAgLQAAgKgGgHQgGgFgLAAIggAAgAkPBYQgFAAgCgCQgDgDAAgFIAAibQAAgFADgDQACgCAFAAIBcAAQAGAAACACQACADAAAFIAAARQAAAFgCACQgCACgGABIg9AAIAACAQAAAFgCADQgDACgFAAgAlVBYQgGAAgCgCQgCgDAAgFIAAg4IABgWIAHgmIgCAAIgKAaQgFAKgIANIguBJQgCAEgHAAIgWAAQgFAAgCgCQgDgDAAgFIAAibQAAgFADgDQACgCAFAAIAUAAQAGAAADACQACADAAAFIAAA4QAAAVgCAIIgGAfIABAAQAGgRAFgJIANgYIAthIQADgEAHAAIAVAAQAGAAACACQACADAAAFIAACbQAAAFgCADQgCACgGAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ70, new cjs.Rectangle(-45.5,-8.8,91.2,17.6), null);


(lib.Символ68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.butn();
	this.instance.parent = this;
	this.instance.setTransform(-119.6,-58,0.581,0.581);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ68, new cjs.Rectangle(-119.6,-58,239.2,116.1), null);


(lib.Символ66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.butn();
	this.instance.parent = this;
	this.instance.setTransform(-119.6,-58,0.581,0.581);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ66, new cjs.Rectangle(-119.6,-58,239.2,116.1), null);


(lib.Символ62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D0608").s().p("Ah4AMQgKgEAAgFQAAgGAKgDQALgFAPAAQAPAAALAFQAKADAAAGQAAAFgKAEQgLAFgPgBQgPABgLgFgABFAHQgKgDAAgGQAAgGAKgEQALgDAPAAQAPAAALADQAKAEAAAGQAAAGgKADQgLAEgPABQgPgBgLgEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ62, new cjs.Rectangle(-13.1,-1.6,26.2,3.3), null);


(lib.Символ58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dama_18();
	this.instance.parent = this;
	this.instance.setTransform(-72,-62.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ58, new cjs.Rectangle(-72,-62.5,144,125), null);


(lib.Символ56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dama_02();
	this.instance.parent = this;
	this.instance.setTransform(-29,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ56, new cjs.Rectangle(-29,-50,58,100), null);


(lib.Символ54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dama_05();
	this.instance.parent = this;
	this.instance.setTransform(-64.5,-118.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ54, new cjs.Rectangle(-64.5,-118.5,129,237), null);


(lib.Символ52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dama_08();
	this.instance.parent = this;
	this.instance.setTransform(-40,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ52, new cjs.Rectangle(-40,-40,80,80), null);


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dama_13();
	this.instance.parent = this;
	this.instance.setTransform(-23,-37);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ50, new cjs.Rectangle(-23,-37,46,74), null);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dama_15();
	this.instance.parent = this;
	this.instance.setTransform(-37.5,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ48, new cjs.Rectangle(-37.5,-38.5,75,77), null);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C3962E").s().p("EgkoAEQIAAofMBJRAAAIAAIfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ44, new cjs.Rectangle(-234.5,-27.2,469.1,54.4), null);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(-334,-159.1,1.044,1.044);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ39, new cjs.Rectangle(-334,-159.1,668,318.4), null);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(-334,-159.1,1.044,1.044);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ38, new cjs.Rectangle(-334,-159.1,668,318.4), null);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#BC8E2E","#F5D134"],[0,1],-9.7,0.1,9.8,0.1).s().p("AhhhFIDDBFIjDBGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ35, new cjs.Rectangle(-9.7,-7,19.6,14), null);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#BC8E2E","#F5D134"],[0,1],0,7,0,-6.9).s().p("Ag0BGIAAiLIA5AAQAKAAAJADQAJAEAHAGQAHAGADAKQADAIAAAKQAAAKgCAHQgDAIgFAHIgIAGQgEAEgFACQgKADgLAAIgYAAIAAAtgAgTgDIAYAAQAIABADgFQAEgEAAgLIgBgIQgBgDgDgEQgEgDgGAAIgYAAg");
	this.shape.setTransform(-6.6,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#BC8E2E","#F5D134"],[0,1],0,7,0,-6.9).s().p("AgoBGIAAiLIBRAAIAAAdIgwAAIAABug");
	this.shape_1.setTransform(-18,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#BC8E2E","#F5D134"],[0,1],0,7.1,0,-7.1).s().p("AAWBGIAAhBQAAgMACgJIgBAAIgJATIgjBDIggAAIAAiLIAgAAIAABBIgCAXIAAAAIAKgWIAjhCIAfAAIAACLg");
	this.shape_2.setTransform(-30.1,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#BC8E2E","#F5D134"],[0,1],0,7.1,0,-7.1).s().p("Ag0BGIAAiLIAhAAIAAAyIAYAAQALAAAIAEQAKACAGAHQAGAFADAIQAEAJAAAKQAAAKgEAJQgDAHgHAGQgGAGgJADQgIADgLAAgAgTAqIAYAAQAIAAADgFQAEgEAAgIQAAgIgEgEQgDgFgIABIgYAAg");
	this.shape_3.setTransform(30.2,0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#BC8E2E","#F5D134"],[0,1],0,7.1,0,-7.1).s().p("AgQBGIAAhuIgfAAIAAgdIBfAAIAAAdIggAAIAABug");
	this.shape_4.setTransform(18.2,0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#BC8E2E","#F5D134"],[0,1],0,6.8,0,-6.7).s().p("AAeBHIgFgXIgxAAIgFAXIgiAAIAeh3QACgGADgEQACgEAFgDQADgDAHgBIALgBIANABQAFABAFADQADADADAEQAEAEABAGIAdB3gAgDgoIgOA7IAjAAIgNg7QgBgDgEAAQgDAAAAADg");
	this.shape_5.setTransform(6,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ33, new cjs.Rectangle(-35.4,-7.1,70.9,14.2), null);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#BC8E2E","#F5D134"],[0,1],9.8,0,-9.7,0).s().p("AhhAAIDDhFIAACLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ32, new cjs.Rectangle(-9.8,-7,19.6,14), null);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#BC8E2E","#F5D134"],[0,1],0,6.9,0,-6.9).s().p("AAWBGIAAhBQAAgLACgLIgBAAIgJAUIgkBDIgeAAIAAiLIAeAAIAABBIgBAWIAAAAIAKgVIAjhCIAgAAIAACLg");
	this.shape.setTransform(13.4,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#BC8E2E","#F5D134"],[0,1],0,7,0,-6.9).s().p("Ag6BGIAAgdQAFABAEgCQADgCACgDQADgFABgLQAEgfADg6IBcAAIAACLIghAAIAAhuIgeAAQgFA+gCAMQgCALgDAHQgEAIgFAEQgFAEgIACQgGACgJAAIgFgBg");
	this.shape_1.setTransform(-0.6,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#BC8E2E","#F5D134"],[0,1],0,7.2,0,-7.1).s().p("AAWBGIAAhBQAAgLACgLIgBAAIgJAUIgjBDIggAAIAAiLIAgAAIAABBIgCAWIABAAIAJgVIAjhCIAfAAIAACLg");
	this.shape_2.setTransform(-13.3,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ29, new cjs.Rectangle(-18.7,-7,37.4,14.1), null);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.coins1();
	this.instance.parent = this;
	this.instance.setTransform(-320,-152.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ24, new cjs.Rectangle(-320,-152.5,640,305), null);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tex_03();
	this.instance.parent = this;
	this.instance.setTransform(-216.5,-34.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ23, new cjs.Rectangle(-216.5,-34.5,433,69), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ipad_03();
	this.instance.parent = this;
	this.instance.setTransform(-133.7,-80,0.618,0.618);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(-133.7,-80,267.5,160), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo_03();
	this.instance.parent = this;
	this.instance.setTransform(-185.5,-80.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(-185.5,-80.5,371,161), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo_03();
	this.instance.parent = this;
	this.instance.setTransform(-185.5,-80.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(-185.5,-80.5,371,161), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo_03();
	this.instance.parent = this;
	this.instance.setTransform(-185.5,-80.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(-185.5,-80.5,371,161), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// reel2.jpg
	this.instance = new lib.reel2();
	this.instance.parent = this;
	this.instance.setTransform(-60,-295,2.827,2.827);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// reel2.jpg
	this.instance_1 = new lib.reel2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-60,-847,2.827,2.827);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// reel2.jpg - копия
	this.instance_2 = new lib.reel2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-60,-1399,2.827,2.827);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// reel2.jpg - копия: 2
	this.instance_3 = new lib.reel2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-60,-1951,2.827,2.827);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(-60,-1951,99,2221.4), null);


(lib.Символ69 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ70();
	this.instance.parent = this;
	this.instance.setTransform(0.5,-5.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ68();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ69, new cjs.Rectangle(-119.6,-58,239.2,116.1), null);


(lib.Символ67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiOBsQgGAAgCgCQgCgDAAgFIAAgcIiuAAQgFAAgCgCQgDgCABgGIAAiZQgBgGADgCQACgCAFgBIAUAAQAHABABACQACACAAAGIAAB/IApAAIAAh/QAAgGACgCQADgCAFgBIAUAAQAFABADACQACACAAAGIAAB/IApAAIAAh/QAAgGABgCQADgCAFgBIAUAAQAGABACACQACACAAAGIAAB/IALAAQAFAAACACQADACAAAGIAAA2QAAAGgCACQgDACgFAAgAGXBGIgNgHIgKgHIgIgKIgGgKQgEgJgBgTIAAgxQAAgKAFgSIAGgLIAIgKIAKgHIANgFQAJgEAWgBQANAAALACQALADAJAFQAJAGAFAIQAGAHAFAKQABAFgBADQgCADgEACIgTAHQgGABgCgBQgDgBgDgGQgDgJgIgEQgHgEgMgBQgIAAgHACQgFACgFAEQgEAEgBAFQgDAFAAAIIAAAxQAAAHADAFQABAHAEADQAFADAFACQAHACAIAAQAMAAAHgEQAIgEADgKQADgFADgCQACgBAGADIATAGQAEACACADQABADgBAFQgFAKgGAIQgFAHgJAFQgJAFgLADQgLADgNAAQgWgBgJgDgAptBGIgMgHIgLgHIgIgKIgGgKQgEgJgBgTIAAgxQAAgKAFgSIAGgLIAIgKIALgHIAMgFQAJgEAWgBQAMAAASAFIANAFIALAHIAHAKIAHALQAFASAAAKIAAAxQgCATgDAJIgHAKIgHAKIgLAHIgNAHQgSAEgMAAQgWgBgJgDgApdhFQgFACgEAEQgEADgDAGQgCAFAAAHIAAAyQAAAHACAGQADAFAEAEQAEADAFACQAGACAJAAQAIAAAGgBQAGgDAEgDQAEgEACgFQACgGAAgHIAAgyQAAgHgCgFQgCgGgEgDQgEgEgGgCQgGgCgIAAQgJAAgGACgAJ7BGQgGAAgCgCQgDgCAAgGIAAg0IgLAAQgKABgFACQgGACgDAKIgQAmQgDAGgEACQgEABgKAAIgUAAQgFAAgBgCQgCgDADgFIAdg6QgIgCgEgGQgGgEgDgGQgEgGgCgIQgBgHAAgKQAAgNAEgLQAEgKAIgIQAHgGALgEQAKgEANgBIBFAAQAGABACACQACACAAAGIAACZQAAAGgCACQgCACgGAAgAI/g+QgGAGABAJQgBAKAGAFQAFAFAKAAIAiAAIAAgoIgiAAQgJAAgGAFgADfBGQgGAAgCgCQgCgCAAgGIAAiZQAAgGACgCQACgCAGgBIAUAAQAGABACACQACACAAAGIAAAuIAkAAQAOAAALAEQALAFAIAHQAIAIAEALQAEAKAAANQAAAOgEALQgEALgIAHQgIAIgLAEQgLAEgOAAgAD9AiIAgAAQALAAAGgHQAGgFgBgLQABgLgGgEQgGgGgLAAIggAAgAB0BGQgFAAgDgCQgCgCAAgGIAAh/IgmAAQgFAAgDgCQgCgDAAgFIAAgQQAAgGACgCQADgCAFgBIB1AAQAGABACACQACACAAAGIAAAQQAAAFgCADQgCACgGAAIgmAAIAAB/QAAAGgDACQgBACgHAAgAAgBGQgKAAgEgBQgDgCgCgGIgHgXIg9AAIgIAXQgBAGgDACQgFABgJAAIgQAAQgGAAgBgCQgBgDABgFIA7ibQACgFACgBQADgCAGgBIASAAQAGABACACQADABABAEIA6CcQACAFgCADQgCACgEAAgAgEAGIgNgmQgGgSABgMIgBgFIgDAAIgBARQgBAJgDAJIgNAmIAoAAgAniBGQgGAAgCgCQgDgCAAgFIAAiaQAAgGADgCQACgCAGgBIBoAAQAFABADACQACACAAAGIAAAPQAAAFgCADQgDACgFAAIhKAAIAAAdIAnAAQAOAAAKADQAKAFAIAGQAHAIAEAKQAEAJAAANQAAAMgEALQgEALgHAGQgIAHgKAEQgKAEgOAAgAnEAjIAiAAQAJgBAGgFQAFgFAAgJQAAgJgFgGQgGgDgJAAIgiAAg");
	this.shape.setTransform(1.2,-3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.instance = new lib.Символ66();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ67, new cjs.Rectangle(-119.6,-58,239.2,116.1), null);


(lib.Символ60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ62();
	this.instance.parent = this;
	this.instance.filters = [new cjs.BlurFilter(2, 2, 1)];
	this.instance.cache(-15,-4,30,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ60, new cjs.Rectangle(-14.1,-2.6,32,8), null);


(lib.Символ59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ58();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ59, new cjs.Rectangle(-72,-62.5,144,125), null);


(lib.Символ57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ56();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ57, new cjs.Rectangle(-29,-50,58,100), null);


(lib.Символ53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ52();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ53, new cjs.Rectangle(-40,-40,80,80), null);


(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ50();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ51, new cjs.Rectangle(-23,-37,46,74), null);


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ48();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ49, new cjs.Rectangle(-37.5,-38.5,75,77), null);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ44();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ45, new cjs.Rectangle(-234.5,-27.2,469.1,54.4), null);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ35();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ36, new cjs.Rectangle(-9.7,-7,19.6,14), null);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ32();
	this.instance.parent = this;
	this.instance.setTransform(-9.8,0,1,1,0,0,0,-9.8,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.85,scaleY:0.85,x:-11.2},4,cjs.Ease.get(-1)).to({scaleX:0.66,scaleY:0.66,x:-13},5,cjs.Ease.get(1)).to({scaleX:0.83,scaleY:0.83,x:-11.4},5,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:-9.8},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.8,-7,19.6,14);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 33
	this.instance = new lib.Символ33();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 32
	this.instance_1 = new lib.Символ34();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-51.9,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ28, new cjs.Rectangle(-61.7,-7.1,97.2,14.3), null);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ24();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ25, new cjs.Rectangle(-320,-152.5,640,305), null);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ23();
	this.instance.parent = this;
	this.instance.alpha = 0.59;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},29).to({alpha:0.59},30).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ23();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-216.5,-34.5,433,69);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ17();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(-133.7,-80,267.5,160), null);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ39();
	this.instance.parent = this;
	this.instance.alpha = 0.559;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},44,cjs.Ease.get(0.99)).to({alpha:0.559},45,cjs.Ease.get(0.99)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ38();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-334,-159.1,668,318.4);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ10();
	this.instance.parent = this;
	this.instance.setTransform(-0.5,-0.5);
	this.instance.alpha = 0.449;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ9();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(-186,-81,371.5,161.5), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.05,scaleY:1.05},108,cjs.Ease.get(-1)).to({scaleX:1.1,scaleY:1.1},110,cjs.Ease.get(1)).to({scaleX:1.05,scaleY:1.05},70,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},114,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-334,-159.1,668,318.4);


(lib.Символ73 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ67();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ73, new cjs.Rectangle(-119.6,-58,239.2,116.1), null);


(lib.Символ71 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ69();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ71, new cjs.Rectangle(-119.6,-58,239.2,116.1), null);


(lib.Символ61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AjUhHIGigYIAHB/ImiAXg");
	var mask_graphics_1 = new cjs.Graphics().p("AjUg7IGigXIAHB+ImiAYg");
	var mask_graphics_2 = new cjs.Graphics().p("AjUgzIGigYIAHB/ImiAXg");
	var mask_graphics_3 = new cjs.Graphics().p("AjUgzIGigXIAHB+ImiAYg");
	var mask_graphics_4 = new cjs.Graphics().p("AjUgzIGigYIAHB/ImiAXg");
	var mask_graphics_5 = new cjs.Graphics().p("AjUgzIGigXIAHB+ImiAYg");
	var mask_graphics_6 = new cjs.Graphics().p("AjUgzIGigYIAHB/ImiAXg");
	var mask_graphics_7 = new cjs.Graphics().p("AjUg7IGigXIAHB+ImiAYg");
	var mask_graphics_8 = new cjs.Graphics().p("AjUhHIGigYIAHB/ImiAXg");
	var mask_graphics_9 = new cjs.Graphics().p("AjUg7IGigXIAHB+ImiAYg");
	var mask_graphics_10 = new cjs.Graphics().p("AjUgzIGigYIAHB/ImiAXg");
	var mask_graphics_11 = new cjs.Graphics().p("AjUgzIGigXIAHB+ImiAYg");
	var mask_graphics_12 = new cjs.Graphics().p("AjUgzIGigYIAHB/ImiAXg");
	var mask_graphics_13 = new cjs.Graphics().p("AjUgzIGigXIAHB+ImiAYg");
	var mask_graphics_14 = new cjs.Graphics().p("AjUgzIGigYIAHB/ImiAXg");
	var mask_graphics_15 = new cjs.Graphics().p("AjUg7IGigXIAHB+ImiAYg");
	var mask_graphics_16 = new cjs.Graphics().p("AjUhHIGigYIAHB/ImiAXg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:0.6,y:-9.6}).wait(1).to({graphics:mask_graphics_1,x:0.6,y:-8.3}).wait(1).to({graphics:mask_graphics_2,x:0.6,y:-6.5}).wait(1).to({graphics:mask_graphics_3,x:0.6,y:-4}).wait(1).to({graphics:mask_graphics_4,x:0.6,y:-1.5}).wait(1).to({graphics:mask_graphics_5,x:0.6,y:-4}).wait(1).to({graphics:mask_graphics_6,x:0.6,y:-6.5}).wait(1).to({graphics:mask_graphics_7,x:0.6,y:-8.3}).wait(1).to({graphics:mask_graphics_8,x:0.6,y:-9.6}).wait(1).to({graphics:mask_graphics_9,x:0.6,y:-8.3}).wait(1).to({graphics:mask_graphics_10,x:0.6,y:-6.5}).wait(1).to({graphics:mask_graphics_11,x:0.6,y:-4}).wait(1).to({graphics:mask_graphics_12,x:0.6,y:-1.5}).wait(1).to({graphics:mask_graphics_13,x:0.6,y:-4}).wait(1).to({graphics:mask_graphics_14,x:0.6,y:-6.5}).wait(1).to({graphics:mask_graphics_15,x:0.6,y:-8.3}).wait(1).to({graphics:mask_graphics_16,x:0.6,y:-9.6}).wait(34));

	// Слой 1
	this.instance = new lib.Символ60();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ61();
	this.instance.parent = this;
	this.instance.setTransform(-3.4,-67.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ54();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ55, new cjs.Rectangle(-64.5,-118.5,129,237), null);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// dama_18.png
	this.instance = new lib.Символ59();
	this.instance.parent = this;
	this.instance.setTransform(247,131.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(64));

	// dama_15.png
	this.instance_1 = new lib.Символ49();
	this.instance_1.parent = this;
	this.instance_1.setTransform(295.1,79.7,1,1,0,0,0,-10.4,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:5.3},15,cjs.Ease.get(-1)).to({regX:-10.3,rotation:11.2,x:295.3},16,cjs.Ease.get(1)).to({regY:13.3,rotation:5.5,x:295.2,y:79.8},16,cjs.Ease.get(-1)).to({regX:-10.4,regY:13.2,rotation:0,x:295.1,y:79.7},16,cjs.Ease.get(1)).wait(1));

	// dama_13.png
	this.instance_2 = new lib.Символ51();
	this.instance_2.parent = this;
	this.instance_2.setTransform(193,121.2,1,1,0,0,0,4,33.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:4.1,rotation:2.8,x:193.2,y:121.3},15,cjs.Ease.get(-1)).to({regX:4,rotation:6.2,x:193.1},16,cjs.Ease.get(1)).to({regY:33.3,rotation:3},16,cjs.Ease.get(-1)).to({regY:33.2,rotation:0,x:193,y:121.2},16,cjs.Ease.get(1)).wait(1));

	// dama_08.png
	this.instance_3 = new lib.Символ53();
	this.instance_3.parent = this;
	this.instance_3.setTransform(278,13,1,1,0,0,0,-22.4,-4.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:1.5,x:281.8,y:15.7},15,cjs.Ease.get(-1)).to({rotation:3.5,x:286,y:18.6},16,cjs.Ease.get(1)).to({rotation:1.6,x:282,y:15.8},16,cjs.Ease.get(-1)).to({rotation:0,x:278,y:13},16,cjs.Ease.get(1)).wait(1));

	// dama_05.png
	this.instance_4 = new lib.Символ55();
	this.instance_4.parent = this;
	this.instance_4.setTransform(217.5,107.7,1,1,0,0,0,-36,101.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:2},15,cjs.Ease.get(-1)).to({rotation:4.5,y:107.8},16,cjs.Ease.get(1)).to({rotation:2.1,y:107.7},16,cjs.Ease.get(-1)).to({rotation:0},16,cjs.Ease.get(1)).wait(1));

	// dama_02.png
	this.instance_5 = new lib.Символ57();
	this.instance_5.parent = this;
	this.instance_5.setTransform(209,15.2,1,1,0,0,0,12,5.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:1.3,x:213.1,y:15.6},15,cjs.Ease.get(-1)).to({regX:12.1,rotation:2.8,x:217.5,y:16},16,cjs.Ease.get(1)).to({regY:5.3,rotation:1.3,x:213.3,y:15.6},16,cjs.Ease.get(-1)).to({regX:12,regY:5.2,rotation:0,x:209,y:15.2},16,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(166,-112,177,306);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ45();
	this.instance.parent = this;
	this.instance.filters = [new cjs.BlurFilter(20, 20, 1)];
	this.instance.cache(-236,-29,473,58);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ46, new cjs.Rectangle(-244.5,-37.2,492,78), null);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ46();
	this.instance.parent = this;
	this.instance.setTransform(0,3.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},5).to({alpha:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-244.5,-33.5,492,77);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3 - копия (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgnWAbYMAAAg2vMBOsAAAMAAAA2vg");
	mask.setTransform(-217.2,-322.6);

	// Слой 5
	this.instance = new lib.Символ43();
	this.instance.parent = this;
	this.instance.setTransform(-218.2,-317.7);
	this.instance.alpha = 0;
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(72).to({_off:false},0).to({alpha:1},4).wait(27).to({alpha:0},4).wait(1));

	// Символ 6 - копия: 2 - копия
	this.instance_1 = new lib.Символ6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-412.6,-87.4,0.909,0.909);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({y:-123.8},3).to({x:-412.5,y:916.5},9).wait(1).to({x:-412.6,y:-87.4},0).to({x:-412.5,y:916.5},16).wait(1).to({x:-412.6,y:-87.4},0).to({x:-412.5,y:916.5},16).wait(1).to({x:-412.6,y:-87.4},0).to({x:-412.5,y:916.5},16).wait(36));

	// Символ 6 - копия: 2
	this.instance_2 = new lib.Символ6();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-309.6,-87.4,0.909,0.909);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({y:-123.8},3).to({y:916.5},9).wait(1).to({y:-87.4},0).to({y:916.5},16).wait(1).to({y:-87.4},0).to({y:916.5},16).wait(1).to({y:-87.4},0).to({y:916.5},16).wait(38));

	// Символ 6 - копия: 2
	this.instance_3 = new lib.Символ6();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-206.7,-87.4,0.909,0.909);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(5).to({y:-123.8},3).to({x:-206.6,y:916.5},9).wait(1).to({x:-206.7,y:-87.4},0).to({x:-206.6,y:916.5},16).wait(1).to({x:-206.7,y:-87.4},0).to({x:-206.6,y:916.5},16).wait(1).to({x:-206.7,y:-87.4},0).to({x:-206.6,y:916.5},16).wait(40));

	// Символ 6 - копия
	this.instance_4 = new lib.Символ6();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-103.7,-87.4,0.909,0.909);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3).to({y:-123.8},3).to({y:916.5},9).wait(1).to({y:-87.4},0).to({y:916.5},16).wait(1).to({y:-87.4},0).to({y:916.5},16).wait(1).to({y:-87.4},0).to({y:916.5},16).wait(42));

	// Символ 6
	this.instance_5 = new lib.Символ6();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-0.8,-87.4,0.909,0.909);

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({y:-123.8},3).to({x:-0.7,y:916.5},9).wait(1).to({x:-0.8,y:-87.4},0).to({x:-0.7,y:916.5},16).wait(1).to({x:-0.8,y:-87.4},0).to({x:-0.7,y:916.5},16).wait(1).to({x:-0.8,y:-87.4},0).to({x:-0.7,y:916.5},16).wait(44));

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EDCA47").s().p("EgnWAbYMAAAg2vMBOsAAAMAAAA2vg");
	this.shape.setTransform(-217.2,-322.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(108));

	// Слой 1
	this.instance_6 = new lib.ipad_03();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-707,-591,2.261,2.261);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(108));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-707,-591,979.2,585.7);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ36();
	this.instance.parent = this;
	this.instance.setTransform(9.8,0,1,1,0,0,0,9.8,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.94,scaleY:0.94,x:12},4,cjs.Ease.get(-1)).to({scaleX:0.87,scaleY:0.87,x:14.6},5,cjs.Ease.get(1)).to({scaleX:0.94,scaleY:0.94,x:12.2},5,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:9.8},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.7,-7,19.6,14);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ37();
	this.instance.parent = this;
	this.instance.setTransform(68.7,-1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#BC8E2E","#F5D134"],[0,1],0,6.9,0,-6.9).s().p("AAXBGIAAgwIgVAAIgSAwIgnAAIAbg4QgEgBgEgDQgFgDgDgFQgDgEgCgGQgDgGAAgIQAAgKADgJQADgJAHgGQAGgHAJgDQAJgDALAAIA8AAIAACLgAgLgnQgDACgBACQgDAEAAAJQAAAIAEAEQAEAGAIgBIAZAAIAAgjIgaAAIgIABg");
	this.shape.setTransform(47.6,-1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#BC8E2E","#F5D134"],[0,1],0,6.9,0,-6.9).s().p("AAFBGQgLAAgKgDQgJgEgHgFQgFgGgEgIQgDgIAAgIIAAg4QAAgJADgGQADgIAGgGQAGgGAKgDQAKgDALAAIAoAAIAAAdIgoAAQgGAAgFAFQgFAEAAAIIAAAwQAAAHAFAFQAFAEAGAAIAoAAIAAAdg");
	this.shape_1.setTransform(36.2,-1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#BC8E2E","#F5D134"],[0,1],0,7,0,-6.9).s().p("Ag0BGIAAiLIAhAAIAAAyIAZAAQAKAAAJAEQAJACAGAHQAGAFAEAIQADAJAAAKQgBAKgDAJQgEAHgGAGQgGAGgJADQgIADgKAAgAgTAqIAZAAQAHAAADgFQADgEAAgIQAAgIgDgEQgDgFgHABIgZAAg");
	this.shape_2.setTransform(24.9,-1.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#BC8E2E","#F5D134"],[0,1],0,7.1,0,-7.1).s().p("AgQBGIAAhuIgfAAIAAgdIBfAAIAAAdIggAAIAABug");
	this.shape_3.setTransform(12.9,-1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#BC8E2E","#F5D134"],[0,1],0,7.1,0,-7).s().p("AAeBHIgFgXIgxAAIgFAXIghAAIAdh3QABgGAEgEQACgEAEgDQAFgDAFgBIAMgBIAMABQAHABADADQAFADACAEQADAEACAGIAeB3gAgEgoIgNA7IAjAAIgOg7QAAgDgEAAQgDAAgBADg");
	this.shape_4.setTransform(0.8,-1.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#BC8E2E","#F5D134"],[0,1],0,8.4,0,-8.3).s().p("ABBBUIgDgbIicAAIAAiMIAhAAIAABvIAnAAIAAhvIAgAAIAABvIAnAAIAAhvIAiAAIAABvIAMAAIAAA4g");
	this.shape_5.setTransform(-16.2,0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#BC8E2E","#F5D134"],[0,1],0,7,0,-7).s().p("Ag0BGIAAiLIBgAAIAAAdIg/AAIAAAYIAYAAQAKAAAJACQAJADAGAGQAHAFADAIQAEAJgBAKQAAAJgEAJQgDAIgGAFQgHAGgIADQgJADgKAAgAgTApIAYAAQAIAAADgEQADgEAAgIQAAgHgDgDQgDgDgIAAIgYAAg");
	this.shape_6.setTransform(-33,-1.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#BC8E2E","#F5D134"],[0,1],0,7.2,0,-7.1).s().p("AgQBGIgOgEQgGgCgFgEIgIgJQgDgEgDgGIgEgMQgCgJgBgUQAAgJADgSIAEgMQADgGADgFQAEgFAFgDQAEgEAGgDIAOgEQAIgBAIAAQAJAAAIABIAOAEQAGADAFAEIAIAIIAGALIAEAMQADASAAAJQgBAUgCAJQgBAGgDAGQgCAGgEAEIgIAJQgFAEgGACIgOAEIgRABIgQgBgAgPgmQgGAEgDAGQgDAFAAAJIgBAOQAAAVAEAIQADAHAGADQAGADAJAAQAKAAAHgDQAFgDADgHQAEgIABgVIgBgOQgBgJgDgFQgDgGgGgEQgGgDgKAAQgJAAgGADg");
	this.shape_7.setTransform(-46.9,-1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ30, new cjs.Rectangle(-53.1,-8.4,131.7,16.9), null);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 30
	this.instance = new lib.Символ30();
	this.instance.parent = this;
	this.instance.setTransform(0,27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({scaleX:1.07,scaleY:1.07,x:8.8,y:27.6},5,cjs.Ease.get(-1)).to({scaleX:1.14,scaleY:1.14,x:17.5,y:28.2},5,cjs.Ease.get(1)).to({scaleX:1.08,scaleY:1.08,x:10,y:27.7},5,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:0,y:27},5,cjs.Ease.get(1)).wait(14));

	// Символ 29
	this.instance_1 = new lib.Символ29();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.2,-1.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({scaleX:1.19,scaleY:1.19,rotation:7.3,x:0.3},5,cjs.Ease.get(-1)).to({scaleX:1.38,scaleY:1.38,rotation:15},5,cjs.Ease.get(1)).to({regX:0.1,regY:-0.1,scaleX:1.22,scaleY:1.22,rotation:8.5,y:-1.4},5,cjs.Ease.get(-1)).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:0.2,y:-1.2},5,cjs.Ease.get(1)).wait(19));

	// Символ 28
	this.instance_2 = new lib.Символ28();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0.6,-28.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({scaleX:1.06,scaleY:1.06,x:-6.5,y:-28.8},5,cjs.Ease.get(-1)).to({scaleX:1.12,scaleY:1.12,x:-13.6,y:-29.2},5,cjs.Ease.get(1)).to({scaleX:1.07,scaleY:1.07,x:-7.5,y:-28.9},5,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:0.6,y:-28.3},5,cjs.Ease.get(1)).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.1,-35.4,139.6,70.9);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ25();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.056,1.056);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.07,scaleY:1.07},39,cjs.Ease.get(-1)).to({scaleX:1.09,scaleY:1.09},40,cjs.Ease.get(1)).to({scaleX:1.07,scaleY:1.07},40,cjs.Ease.get(-1)).to({scaleX:1.06,scaleY:1.06},40,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-338,-161.1,676,322.2);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ21();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.93,scaleY:0.93},14,cjs.Ease.get(-1)).to({scaleX:0.85,scaleY:0.85},15,cjs.Ease.get(0.97)).to({scaleX:0.92,scaleY:0.92},15,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},15,cjs.Ease.get(0.97)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-216.5,-34.5,433,69);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ18();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:2.4},21,cjs.Ease.get(-1)).to({y:5},23,cjs.Ease.get(1)).to({y:2.6},22,cjs.Ease.get(-1)).to({y:0},23,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-133.7,-80,267.5,160);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.parent = this;
	this.instance.setTransform(0.3,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(-185.7,-80.7,371.5,161.5), null);


(lib.Символ74 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ73();
	this.instance.parent = this;
	this.instance.setTransform(110.6,20.8,1.07,1.07,0,0,0,111.2,23.2);
	this.instance.alpha = 0.219;
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ73();
	this.instance_1.parent = this;
	this.instance_1.setTransform(111.2,23.2,1,1,0,0,0,111.2,23.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:1.07,scaleY:1.07,x:110.6,y:20.8},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:112,y:26.4},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119.6,-58,239.2,116.1);


(lib.Символ72 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ71();
	this.instance.parent = this;
	this.instance.setTransform(-107.8,17.9,1.09,1.09,0,0,0,-108.8,21.2);
	this.instance.alpha = 0.219;
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ71();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-108.8,21.2,1,1,0,0,0,-108.8,21.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:1.09,scaleY:1.09,x:-107.8,y:17.9},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:-109.2,y:22.7},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119.6,-58,239.2,116.1);


(lib.Символ65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ47();
	this.instance.parent = this;
	this.instance.setTransform(0,153,1,1,0,0,0,254.5,194);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ65, new cjs.Rectangle(-88.5,-153,177,306), null);


(lib.Символ64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ65();
	this.instance.parent = this;
	this.instance.setTransform(-262.4,-19.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-9},24,cjs.Ease.get(-1)).to({y:1.6},25,cjs.Ease.get(1)).to({y:-8.8},25,cjs.Ease.get(-1)).to({y:-19.2},25,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-350.9,-172.2,177,306);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ40();
	this.instance.parent = this;
	this.instance.setTransform(18,0.3,0.29,0.29,90,0,0,-216.3,-360.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ41, new cjs.Rectangle(-132.5,-142.1,586.4,284.3), null);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ27();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.254,1.254);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ31, new cjs.Rectangle(-76.6,-44.4,175,88.9), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ19();
	this.instance.parent = this;
	this.instance.setTransform(3.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(-130.2,-80,267.5,160), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ11();
	this.instance.parent = this;
	this.instance.filters = [new cjs.BlurFilter(9, 9, 1)];
	this.instance.cache(-188,-83,376,166);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(-190.7,-85.7,384,174), null);


(lib.Символ6_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// butn.png
	this.instance_4 = new lib.Символ72();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-138.4,-1.9);
	new cjs.ButtonHelper(this.instance_4, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// butn.png
	this.instance_5 = new lib.Символ74();
	this.instance_5.parent = this;
	this.instance_5.setTransform(137.6,-1.9);
	new cjs.ButtonHelper(this.instance_5, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6_1, new cjs.Rectangle(-258,-70.4,515.2,126.6), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.parent = this;
	this.instance.setTransform(-0.2,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.543},11,cjs.Ease.get(-1)).to({alpha:0},13,cjs.Ease.get(1)).to({alpha:0.48},12,cjs.Ease.get(-1)).to({alpha:1},13,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-191,-86,385,175);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ41();
	this.instance.parent = this;
	this.instance.setTransform(17.9,0,1,1,0,0,0,17.9,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:22.4},24,cjs.Ease.get(-1)).to({x:27},25,cjs.Ease.get(1)).to({x:22.5},25,cjs.Ease.get(-1)).to({x:17.9},25,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-132.5,-142.1,586.4,284.3);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ14();
	this.instance.parent = this;
	this.instance.setTransform(-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.3,0.3);
	this.instance_1.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(-190.7,-85.7,384,174), null);


(lib.Символ15 = function(mode,startPosition,loop) {
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

	// Символ 6
	this.instance = new lib.Символ6_1();
	this.instance.parent = this;
	this.instance.setTransform(0.1,303.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.1,scaleY:1.1,y:106.4},4).to({scaleX:1,scaleY:1,y:130.4},3).wait(1).to({scaleX:1.1,scaleY:1.1,y:106.4},3).to({scaleX:1,scaleY:1,y:303.5},4).wait(1));

	// Слой 4
	this.instance_1 = new lib.Символ20();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1.2,119);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.28,scaleY:1.28,y:107.9},4).to({scaleX:1.29,scaleY:1.29,y:99.5},3).wait(1).to({scaleX:1.29,scaleY:1.29},0).to({scaleX:1.28,scaleY:1.28,y:107.9},3).to({scaleX:1,scaleY:1,y:119},4).wait(1));

	// Слой 6
	this.instance_2 = new lib.Символ31();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-0.3,-3.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleY:1.65,y:105.3,alpha:0},7).wait(1).to({scaleY:1,y:-3.7,alpha:1},7).wait(1));

	// Слой 3
	this.instance_3 = new lib.Символ64();
	this.instance_3.parent = this;
	this.instance_3.setTransform(428.2,68.7,1,1,0,0,0,-83,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:0.1,scaleX:1.11,scaleY:1.11,x:431.4,y:68.8},7,cjs.Ease.get(1)).wait(1).to({regY:0,scaleX:1,scaleY:1,x:428.2,y:68.7},7,cjs.Ease.get(1)).wait(1));

	// Слой 2
	this.instance_4 = new lib.Символ42();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-252.3,25,0.871,0.871,0,0,0,17.9,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regY:0,scaleX:1.13,scaleY:1.13,x:-238,y:24.9},7,cjs.Ease.get(1)).wait(1).to({regY:0.1,scaleX:0.87,scaleY:0.87,x:-252.3,y:25},7,cjs.Ease.get(1)).wait(1));

	// Слой 5
	this.instance_5 = new lib.Символ22();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0.6,117.1,0.3,0.3,0,0,0,0.1,0.1);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:0,regY:0,scaleX:0.79,scaleY:0.79,x:0.5,y:-19.5,alpha:1},7).wait(1).to({regX:0.1,regY:0.1,scaleX:0.3,scaleY:0.3,x:0.6,y:117.1,alpha:0},7,cjs.Ease.get(0.98)).wait(1));

	// Символ 13
	this.instance_6 = new lib.Символ13();
	this.instance_6.parent = this;
	this.instance_6.setTransform(0.2,-84.9,0.653,0.653,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-383.4,-142.5,720.7,502.1);


// stage content:
(lib.ac640x305 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
		
		this.fon.x = - stage.mouseX / 88/window.devicePixelRatio;
		this.fon.y = - stage.mouseY / 88/window.devicePixelRatio;
		}
		
		var _this = this;
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		  function fl_MouseOverHandler_5()
		{
		    _this.main.gotoAndPlay(1);
		}
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		  function fl_MouseOutHandler_2()
		{
		    _this.main.gotoAndPlay(9);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 5
	this.fon = new lib.Символ26();
	this.fon.parent = this;
	this.fon.setTransform(-18,-40.6,1,1,0,0,0,-338,-161.1);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

	// Слой 3
	this.main = new lib.Символ15();
	this.main.parent = this;
	this.main.setTransform(320.1,126.6,1,1,0,0,0,0,1.5);

	this.timeline.addTween(cjs.Tween.get(this.main).wait(1));

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.parent = this;
	this.instance.setTransform(320,152.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(256.7,111.9,721.3,525.3);
// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg?1481879041604", id:"bg"},
		{src:"images/butn.png?1481879041604", id:"butn"},
		{src:"images/coins1.png?1481879041604", id:"coins1"},
		{src:"images/dama_02.png?1481879041604", id:"dama_02"},
		{src:"images/dama_05.png?1481879041604", id:"dama_05"},
		{src:"images/dama_08.png?1481879041604", id:"dama_08"},
		{src:"images/dama_13.png?1481879041604", id:"dama_13"},
		{src:"images/dama_15.png?1481879041604", id:"dama_15"},
		{src:"images/dama_18.png?1481879041604", id:"dama_18"},
		{src:"images/ipad_03.png?1481879041604", id:"ipad_03"},
		{src:"images/logo_03.png?1481879041604", id:"logo_03"},
		{src:"images/reel2.jpg?1481879041604", id:"reel2"},
		{src:"images/tex_03.png?1481879041604", id:"tex_03"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;