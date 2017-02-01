(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,300);


(lib.light = function() {
	this.initialize(img.light);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,459,59);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,222,56);


(lib.zagl_1 = function() {
	this.initialize(img.zagl_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,300);


(lib.zagl_2 = function() {
	this.initialize(img.zagl_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,300);// helper functions:

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


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.light();
	this.instance.parent = this;
	this.instance.setTransform(-29.5,229.5,1,1,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(-29.5,-229.5,59,459), null);


(lib.team_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(119,119,128,0.486)").s().p("A2TDNIAAmZMAsnAAAIksGZg");
	this.shape.setTransform(142.8,50.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.team_bg, new cjs.Rectangle(0,30.1,285.6,41), null);


(lib.symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990000").s().p("AouCgQg4gMgYgyQgshdBKhIQAJgJAHgMQAwhXBqAEQAdACAdgCQBrgCBsAHQBjAFBigCQCggECgAEQBhADBcAcQBhAeAPBhQATB4h1AnQglAMgnABQiRAEiQgDQiQgDiOgBQibAAibAHIgdABQg/AAg8gMg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.symbol2, new cjs.Rectangle(-65.5,-17.2,131.1,34.4), null);


(lib.symbol4141 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AoWEYQi8gQhZiRQghg2APg/QANg2Acg1QBPiZCxgIIHtgVQGvgyGBChQAYAKALAdQBbEAkGBuQhhAohpAJQj4AWj3AAQjvAAjvgUg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.symbol4141, new cjs.Rectangle(-83.5,-30,167,60), null);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#990000","#D42A28"],[0,1],-86.1,-0.6,86.3,-0.6).s().p("AoHDNIEjmZIHBAAIErGZgADChhIgGAkIAUAAIARhjIgjAAQgIAAgHACQgHACgFAEQgFADgEAGQgDAGAAAIQgBAIACAGQADAHAGAEIgcArIAWAAIAXgkgAA6g9IAlAAQAIAAAHgCQAHgCAFgEQAHgEADgGQADgGABgJQAAgHgBgGQgDgFgEgEQgFgEgGgCQgHgCgGAAIgOAAIAGgkIgUAAgAAVg9IAUAAIARhjIgUAAIgIAtIgTACQgJAAgCgEQgDgEABgIIAEgfIgTAAIgFAfQgBAIACAGQADAGAEAEQAEAEAGACQAGACAIAAIASgCgAhHg9IATAAIAShjIgVAAIgxBBIALhBIgUAAIgRBjIAVAAIAwhAgAifhnIgHAqIATAAIAShjIgUAAIgHAoIgmAAIAHgoIgUAAIgRBjIATAAIAIgqgABShOIAEgeIARAAIAGABIAEADQADACAAACIAAAGQAAAEgDADIgEAFIgGADIgHACgAC2hwQgIAAgCgEQgDgFABgHQABgHAFgEQAFgFAJAAIALAAIgEAgg");
	this.shape.setTransform(97.5,9.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AC8AyIAHgkIgRAAIgWAkIgXAAIAcgrQgGgFgDgFQgBgHAAgHQABgIADgGQAEgGAFgDQAFgFAHgBQAHgDAHABIAjAAIgRBigACxgcQgFAEgCAIQAAAHACAFQADADAHAAIAPABIAFggIgMAAQgIAAgFAEgAA7AyIAShiIATAAIgGAkIAPAAQAGgBAGADQAGABAFAFQAEAEADAEQACAGgBAHQAAAIgEAHQgDAGgGAEQgGADgGADQgIACgHAAgABSAhIAOABIAIgCIAGgDIAEgFQADgDgBgEIAAgGQAAgCgCgDIgEgCIgGgBIgRAAgAAWAyIAGgmIgSACQgHAAgGgCQgGgCgEgEQgFgEgCgFQgCgHABgIIAEgeIAUAAIgFAeQAAAIACAFQACADAKAAIATgBIAIgtIAUAAIgRBigAhHAyIALg/IgxA/IgUAAIARhiIAUAAIgLA/IAwg/IAVAAIgRBigAilAyIAHgrIgnAAIgHArIgUAAIARhiIAUAAIgGAoIAmAAIAHgoIAUAAIgSBig");
	this.shape_1.setTransform(97.5,-2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(45.6,-11.3,103.9,41.1), null);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF3300","#FF6600"],[0,1],-33.1,64.2,33.1,-64.1).s().p("AoYDgQhoAAhIhBQhJhCAAhdQAAhcBJhBQBIhCBoAAIQyAAQBnAABIBCQBJBBAABcQAABdhJBCQhIBBhnAAg");
	this.shape.setTransform(78.6,22.4);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,0,0.239)").s().p("AqTETQh/AAhahQQhZhRAAhyQAAhxBZhRQBahQB/AAIUnAAQCAAABZBQQBZBRAABxQAAByhZBRQhZBQiAAAg");
	this.shape.setTransform(96.6,27.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,193.2,55.1), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(0,0,0,0)","rgba(0,0,0,0.749)"],[0,0.612],-0.1,0,0,-0.1,0,314.5).s().p("EgqYAexMAAAg9hMBUxAAAMAAAA9hg");
	this.shape.setTransform(222.1,230.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-49.2,33.9,542.6,393.9), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#990000","#D42A28"],[0,1],-51.5,0,158.5,0).s().p("Aj1C4IkNlvIQFADIAAFsg");
	this.shape.setTransform(51.5,18.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#990000","#D42A28"],[0,1],-294.2,-0.1,286.4,-0.1).s().p("AhdC2IAAlrIC7AAIAAFrg");
	this.shape_1.setTransform(112.5,18.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#990000","#D42A28"],[0,1],-159.9,0,50.1,0).s().p("An0C4IAAlsIPpgDIkNFvg");
	this.shape_2.setTransform(171.9,18.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,222,36.7), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.light();
	this.instance.parent = this;
	this.instance.setTransform(59,0,1,1,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,59,459), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bg.jpg
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(-109,-43,1.29,1.29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-109,-43,774.3,387.2), null);


(lib.suuu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ApxB2QgWgHgMgOQgUgXgEgyIgBgYIBRAAIAAAfQACAMADAGQAGAMASAAQAiAAAtgDIAGA3QgiAMgzAAQgeAAgVgHgAgHB5IAAh5ICnAAQAPAEAJALIAFAJQAGAOABAXQgBAkgTANQgLAHgQADQgSADgXAAQgzAAhAgCgABDBIIAcAAQAPAAAFgFQAFgFAAgRQAAgQgFgFIAAgBQgFgFgQAAIgbAAgAJgB5IgNg0IhCAAIgMA0IibAAQgShFgGgMQgFgMgHgEIgFgDIgQgBIgIAAIABAEQACAKABAIIAABPIhNAAIAAh5ICZAAQAVAGAHAMIAEAGQAEAJAGAQIAVBFIAih2IBHAAIgEAPIAqAAIgDgPIBGAAIAiB5gAhkB5IgNg0IhCAAIgMA0IhOAAIAih5IBIAAIgDAPIApAAIgDgPIBHAAIAhB5gAmdB5IAAh5IBNAAIAAB5gAJCgGIgMg5IgJAAIgKA5IhHAAIAaheQADgJAGgFQAIgGAJAAIBEAAQAKAAAGAGQAIAFACAJIAaBegADggGIAAhyIBNAAIAAA9QAAARgEAOIAIAAQAWAAAHgOQAFgJAQg7IACgKIBNAAIgWBIQgEANgGAIQgFAJgIAEQgFADgJADIgJACgAgHgGIAAhyQAjgDBFAAQAzAAAUAOQAKAGAEANQAGAMgBASQAAAOgCAJQgDAKgFAHQgFAHgJAEIgCABIgIACgABDgaIAbAAQANAAAEgEQAEgFAAgOQAAgOgFgEQgEgEgOAAIgZAAgAiBgGIgNg5IgJAAIgLA5IhHAAIAbheQADgJAGgFQAHgGAJAAIBGAAQAIAAAHAGQAIAFACAJIAaBegAmdgGIAAg5IhDAAIAAg5IDTAAIAAA5IhDAAIAAA5gAqsgGIAAgCQACg+AXgaQAYgcA9AAQAWAAAUACQAUADARAFIgGA3IhJgBQgSAAgGAMQgDAGgCAMIAAAYg");
	this.shape.setTransform(0.2,-1.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.suuu, new cjs.Rectangle(-68.3,-14.1,136.9,25), null);


(lib.sumb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF9F9F","#FFFFFF"],[0,1],0,-6.2,0,6.3).s().p("ACZA9IgMg1IhDAAIgMA1IiZAAQgThEgGgMQgFgMgHgFIgFgCIgPgBIgIAAIABADQACALAAAHIAABPIhMAAIAAh5ICYAAQAVAHAIALIADAGQAFAJAFARIAWBEIAgh2IBHAAIgDAQIApAAIgDgQIBHAAIAiB5g");
	this.shape.setTransform(45.4,6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FF9F9F","#FFFFFF"],[0,1],0,-5.8,0,5.8).s().p("AhlA7IAAh4ICoAAQAPAFAIAKIAFAJQAHAPAAAWQAAAjgUAOQgKAGgRAEQgRADgYAAQgyAAhBgDgAgaALIAbAAQAPAAAFgGQAFgFAAgPQAAgQgEgGIgBAAQgFgGgQAAIgaAAg");
	this.shape_1.setTransform(9.3,6.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FF9F9F","#FFFFFF"],[0,1],0,-5.7,0,5.8).s().p("AAuA9IgNg1IhBAAIgMA1IhOAAIAjh5IBHAAIgEAQIApAAIgDgQIBGAAIAiB5g");
	this.shape_2.setTransform(-14.7,6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FF9F9F","#FFFFFF"],[0,1],0,-6.6,0,6.7).s().p("AglA9IAAh5IBLAAIAAB5g");
	this.shape_3.setTransform(-37.6,6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FF9F9F","#FFFFFF"],[0,1],0,-6.4,0,6.5).s().p("AgmA4QgVgHgNgPQgTgXgEgxIgBgYIBRAAIAAAfQACAMADAGQAFAMASAAQAiAAAsgCIAGA2QgiAMgyAAQgeAAgVgHg");
	this.shape_4.setTransform(-58.8,6.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AJUA7IgLg4IgJAAIgMA4IhGAAIAahdQACgIAIgGQAGgGAKABIBEAAQAJgBAIAGQAGAGADAIIAaBdgADzA7IAAhwIBLAAIAAA7QABARgEAOIAIAAQAVAAAIgOQAFgIAPg6IADgKIBNAAIgVBHQgFAMgGAJQgFAIgIAEQgFAEgJACIgKACgAAKA7IAAhwQAkgEBFAAQAzAAAUAOQAJAHAFAMQAGANAAAQQgBAOgCAKQgDAKgFAHQgFAGgJAEIgCABIgHACgABUAnIAbAAQANAAAFgEQAEgFAAgOQAAgNgFgEQgEgEgOAAIgaAAgAhwA7IgMg4IgJAAIgLA4IhHAAIAbhdQADgIAGgGQAIgGAJABIBEAAQAKgBAGAGQAIAGACAIIAaBdgAmLA7IAAg4IhDAAIAAg4IDTAAIAAA4IhEAAIAAA4gAqZA7IAAgCQABg8AXgbQAYgcA9AAQAWAAAUACQAUADARAFIgGA2IhJgBQgSABgGAMQgDAGgBAMIAAAXg");
	this.shape_5.setTransform(-1.8,-6.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.sumb, new cjs.Rectangle(-68.5,-12.5,136.9,25.1), null);


(lib.sign_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.zagl_2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sign_2, new cjs.Rectangle(0,0,300,300), null);


(lib.sign_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.zagl_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sign_1, new cjs.Rectangle(0,0,300,300), null);


(lib.koeff_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#990000","#D42A28"],[0,1],-64.9,0,65,0).s().p("AqJC6IENluIQGgFIgEAFIkJFpIv9AFg");
	this.shape.setTransform(65,18.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.267)").s().p("AqFC1IP9gFIEJlpIAJAAIkNFuIwGAFg");
	this.shape_1.setTransform(65.5,19.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.koeff_bg, new cjs.Rectangle(0,0,130.5,37.7), null);


(lib.ddd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AicCVIgFg1IiSAAIgFA1Ig3AAIAAhnIAbAAQAJgaAHgdIBKAAIgCAGQgKAigHAPIA7AAIAAg3IBMAAIAAA3IAhAAIAABngAEkBgIAAhYIgTAAQgKAAgEADQgDAEgCAJIgPBIIhQAAIAShKQAEgQAJgJIAIgGICqAAIAABpgAA7BgIAAhkIg8AAIAABkIhMAAIAAhpIDUAAIAABpgADYgRQgXgCgMgPQgMgOAAgaQAAgqAXgQQALgIAUgEQATgEAaAAQArAAA5ADIAACAgAD6haQgFAGAAAOQAAAQAFAFQAFAEAPAAIAWAAIAAgxIgWAAQgPAAgFAEgAhNgRIAAiAIBMAAIAABYIA8AAIAAhYIBMAAIAACAgAjSgRIAAhNIgOAAQgIAAgEADQgEAEgBAJIgIA9IhJAAQAHgjAEgnQABgMAFgJQAFgKAIgHQAIgIAKgDQALgFAMAAIB1AAIAACAg");
	this.shape.setTransform(8.8,0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ddd, new cjs.Rectangle(-28,-14.6,73.6,29.8), null);


(lib.aaa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF9F9F","#FFFFFF"],[0,1],0,-4.8,0,4.8).s().p("AAcA1IAAhXIgTAAQgJAAgDADQgEAEgCAJIgPBHIhPAAIAShJQADgRAKgJIAHgGICpAAIAABpg");
	this.shape.setTransform(35.1,6.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FF9F9F","#FFFFFF"],[0,1],0,-4.4,0,4.5).s().p("AAeA1IAAhkIg7AAIAABkIhNAAIAAhpIDVAAIAABpg");
	this.shape_1.setTransform(11.7,6.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FF9F9F","#FFFFFF"],[0,1],0,-7.3,0,2.8).s().p("ABOBPIgGg1IiQAAIgFA1Ig3AAIAAhlIAaAAQAKgbAHgdIBJAAIgBAFQgKAkgHAPIA6AAIAAg4IBLAAIAAA4IAiAAIAABlg");
	this.shape_2.setTransform(-14.7,9.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ADBBCQgWgDgNgOQgLgPAAgaQAAgoAXgQQALgJATgDQATgFAbAAQArABA4ADIAAB/gADkgGQgFAFAAAOQAAAPAFAFQAEAFAPAAIAXAAIAAgxIgXAAQgPAAgEAFgAhjBCIAAh/IBMAAIAABWIA8AAIAAhWIBMAAIAAB/gAjoBCIAAhNIgPAAQgHAAgEAEQgEAEgBAIIgJA9IhJAAQAIgjAEgnQABgLAFgKQAEgKAJgHQAHgHALgEQAKgEAMAAIB1AAIAAB/g");
	this.shape_3.setTransform(11,-5.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.aaa, new cjs.Rectangle(-28,-12.5,73.6,29.8), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.logo, null, new cjs.Matrix2D(0.63,0,0,0.63,-70,-17.6)).s().p("Aq7CwIAAlgIV3AAIAAFgg");
	this.shape.setTransform(120.9,17.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// logo2
	this.instance = new lib.symbol2();
	this.instance.parent = this;
	this.instance.setTransform(119.1,18.8);
	this.instance.filters = [new cjs.BlurFilter(40, 40, 1)];
	this.instance.cache(-67,-19,135,38);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(33.5,-18.4,175,77), null);


(lib.team_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt
	this.text = new cjs.Text(" ", "italic bold 19px 'Roboto'", "#FFFFFF");
	this.text.textAlign = "right";
	this.text.lineHeight = 24;
	this.text.lineWidth = 233;
	this.text.parent = this;
	this.text.setTransform(259,47.6);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// Layer 1
	this.team_bg = new lib.team_bg();
	this.team_bg.parent = this;
	this.team_bg.setTransform(143,22,1,1,0,0,180,143,22);
	this.team_bg.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.team_bg).wait(1));

}).prototype = getMCSymbolPrototype(lib.team_2, new cjs.Rectangle(0.4,30.1,285.6,226.7), null);


(lib.team_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt
	this.text = new cjs.Text(" ", "italic bold 19px 'Roboto'", "#FFFFFF");
	this.text.lineHeight = 24;
	this.text.lineWidth = 233;
	this.text.parent = this;
	this.text.setTransform(23,10.6);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// Layer 1
	this.team_bg = new lib.team_bg();
	this.team_bg.parent = this;
	this.team_bg.setTransform(142.8,40.7,1,1.707,0,0,0,142.8,50.6);

	this.timeline.addTween(cjs.Tween.get(this.team_bg).wait(1));

}).prototype = getMCSymbolPrototype(lib.team_1, new cjs.Rectangle(0,5.7,285.6,214.2), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.aaa();
	this.instance.parent = this;
	this.instance.setTransform(105.9,15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.ddd();
	this.instance_1.parent = this;
	this.instance_1.setTransform(105.9,19.5);
	this.instance_1.alpha = 0.602;
	this.instance_1.filters = [new cjs.BlurFilter(2, 2, 1)];
	this.instance_1.cache(-30,-17,78,34);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(76.9,3,80,36.8), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// sloy2
	this.instance = new lib.sumb();
	this.instance.parent = this;
	this.instance.setTransform(80.2,15.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// sloy1
	this.instance_1 = new lib.suuu();
	this.instance_1.parent = this;
	this.instance_1.setTransform(80,18.6);
	this.instance_1.alpha = 0.602;
	this.instance_1.filters = [new cjs.BlurFilter(2, 2, 1)];
	this.instance_1.cache(-70,-16,141,29);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(10.7,2.7,143,31.8), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 10
	this.instance = new lib.Symbol10();
	this.instance.parent = this;
	this.instance.setTransform(134.3,64.4,1,1,0,0,0,115.5,15.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({regY:15.3,scaleX:1.1,scaleY:1.1,y:66.3},7,cjs.Ease.get(1)).to({regY:15.2,scaleX:1,scaleY:1,y:64.4},7,cjs.Ease.get(-1)).to({regY:15.3,scaleX:0.95,scaleY:0.95,y:64.5},3,cjs.Ease.get(1)).to({regY:15.2,scaleX:1,scaleY:1,y:64.4},3,cjs.Ease.get(-1)).wait(1));

	// Symbol 9
	this.instance_1 = new lib.Symbol9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(133.1,27.3,1,1,0,0,0,75.5,12);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:12.1,scaleX:1.1,scaleY:1.1,x:133,y:25.3},7,cjs.Ease.get(1)).to({regY:12,scaleX:1,scaleY:1,x:133.1,y:27.3},7,cjs.Ease.get(-1)).to({regY:12.1,scaleX:0.95,scaleY:0.95,y:27.4},3,cjs.Ease.get(1)).to({regY:12,scaleX:1,scaleY:1,y:27.3},3,cjs.Ease.get(-1)).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(68.3,17.9,143,70.1);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol7();
	this.instance.parent = this;
	this.instance.setTransform(96.6,27.5,1,1,0,0,0,96.6,27.5);
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,193.2,55.1), null);


(lib.sign_two = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// Layer 2
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(54,51.6,1,0.225,0,0,0,29.5,229.5);
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({scaleY:1},2,cjs.Ease.get(-1)).to({scaleY:0.23},7,cjs.Ease.get(1)).to({_off:true},1).wait(4));

	// Layer 1
	this.sign = new lib.sign_2();
	this.sign.parent = this;
	this.sign.setTransform(53.7,53.8,0.358,0.358,0,0,0,149.8,150);

	this.timeline.addTween(cjs.Tween.get(this.sign).to({scaleX:0.03,alpha:0},3,cjs.Ease.get(-1)).to({scaleX:0.36,alpha:1},11,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,107.5,107.5);


(lib.sign_one = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// Layer 2
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(53.6,56.6,1,0.246,0,0,0,29.6,229.5);
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({regX:29.5,scaleY:1,x:53.5,y:56.5},2,cjs.Ease.get(-1)).to({regX:29.6,scaleY:0.25,x:53.6,y:56.6},7,cjs.Ease.get(1)).to({_off:true},1).wait(4));

	// Layer 1
	this.sign = new lib.sign_1();
	this.sign.parent = this;
	this.sign.setTransform(53.7,53.8,0.358,0.358,0,0,0,149.8,150);

	this.timeline.addTween(cjs.Tween.get(this.sign).to({regX:150.5,scaleX:0.02,alpha:0},3,cjs.Ease.get(-1)).to({regX:149.8,scaleX:0.36,alpha:1},11,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,107.5,107.5);


(lib.light_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.parent = this;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.light_1, new cjs.Rectangle(-29.5,-229.5,59,459), null);


(lib.koeff_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt
	this.text = new cjs.Text(" ", "italic bold 25px 'Roboto'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 31;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(182.5,4.4);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// koeff_bg
	this.instance = new lib.koeff_bg();
	this.instance.parent = this;
	this.instance.setTransform(185.3,18.8,1,1,0,0,180,65.2,18.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.koeff_2, new cjs.Rectangle(120,0,130.5,41.6), null);


(lib.koeff_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt
	this.text = new cjs.Text(" ", "italic bold 25px 'Roboto'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 31;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(62.5,4.4);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// koeff_bg
	this.instance = new lib.koeff_bg();
	this.instance.parent = this;
	this.instance.setTransform(65.2,18.8,1,1,0,0,0,65.2,18.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.koeff_1, new cjs.Rectangle(0,0,130.5,41.6), null);


(lib.koef_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text(" ", "italic bold 20px 'Roboto'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 25;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(50.4,5.2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// Layer 2
	this.instance = new lib.Symbol19();
	this.instance.parent = this;
	this.instance.setTransform(52.4,22.9,1,1,0,0,0,98.5,22.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.koef_3, new cjs.Rectangle(-1.6,-11,105,47.5), null);


(lib.date = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.text = new cjs.Text(" ", "italic bold 18px 'Roboto'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 23;
	this.text.lineWidth = 195;
	this.text.parent = this;
	this.text.setTransform(103.4,7.5);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// Layer 1
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(103,18.4,1,1,0,0,0,111,18.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.date, new cjs.Rectangle(-8,0,222,83.8), null);


(lib.black = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(11));

	// Layer 1
	this.instance = new lib.Symbol5();
	this.instance.parent = this;
	this.instance.setTransform(393.6,230.8,1,1,0,0,0,393.6,230.8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).to({alpha:0.898},1).to({alpha:0},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.2,33.9,542.6,393.9);


(lib.bg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(11));

	// Layer 1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(300,150,1,1,0,0,0,300,150);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:150.1,scaleX:0.91,scaleY:0.91,y:150.1},9,cjs.Ease.get(1)).to({regY:150,scaleX:1,scaleY:1,y:150},10,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-109,-43,774.3,387.2);


(lib.team_two = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(1));

	// koeff
	this.koeff_2 = new lib.koeff_2();
	this.koeff_2.parent = this;
	this.koeff_2.setTransform(67,20.8,1,1,0,0,0,65.2,20.8);

	this.timeline.addTween(cjs.Tween.get(this.koeff_2).wait(5).to({regX:185.2,regY:19.8,x:112.1,y:19.8},0).wait(1).to({x:65.1},0).wait(1).to({x:32.6},0).wait(1).to({x:8.2},0).wait(1).to({x:-11.7},0).wait(1).to({x:-28.9},0).wait(1).to({x:-43.1},0).wait(1).to({x:-54.2},0).wait(1).to({x:-62.8},0).wait(1).to({x:-69.3},0).wait(1).to({x:-74.2},0).wait(1).to({x:-78},0).wait(1).to({x:-81},0).wait(1).to({x:-83.6},0).wait(1).to({regX:65.2,regY:20.8,x:-205.8,y:20.8},0).wait(1));

	// team
	this.team_2 = new lib.team_2();
	this.team_2.parent = this;
	this.team_2.setTransform(126.1,139.8,1,1,0,0,0,143,109.9);

	this.timeline.addTween(cjs.Tween.get(this.team_2).wait(1).to({regX:143.2,regY:142.5,x:18,y:172.4},0).wait(1).to({x:-36.9},0).wait(1).to({x:-72.4},0).wait(1).to({x:-99.4},0).wait(1).to({x:-118.1},0).wait(1).to({x:-130},0).wait(1).to({x:-137.5},0).wait(1).to({x:-142.6},0).wait(1).to({regX:143,regY:109.9,x:-146.7,y:139.8},0).to({x:-135.5},2,cjs.Ease.get(1)).to({x:-140.7},3,cjs.Ease.get(-1)).wait(6));

	// Layer 4
	this.instance = new lib.koeff_bg();
	this.instance.parent = this;
	this.instance.setTransform(-85.7,18.8,1,1,0,0,180,65.2,18.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},4).to({_off:true},1).wait(15));

	// Layer 5
	this.instance_1 = new lib.team_bg();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-146.5,50.5,1,1,0,0,180,142.8,20.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regY:50.6,y:133.1,alpha:0.487},0).wait(1).to({y:155.1,alpha:0.271},0).wait(1).to({y:169.5,alpha:0.131},0).wait(1).to({y:176.9,alpha:0.059},0).wait(1).to({y:180.5,alpha:0.023},0).wait(1).to({regY:20.6,y:152.9,alpha:0},0).to({_off:true},1).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-289.3,0,558.4,286.7);


(lib.team_one = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(1));

	// koeff
	this.koeff_1 = new lib.koeff_1();
	this.koeff_1.parent = this;
	this.koeff_1.setTransform(-205.8,20.8,1,1,0,0,0,65.2,20.8);

	this.timeline.addTween(cjs.Tween.get(this.koeff_1).wait(5).to({regY:19.8,x:-149,y:19.8},0).wait(1).to({x:-106.7},0).wait(1).to({x:-75.3},0).wait(1).to({x:-50.8},0).wait(1).to({x:-30.5},0).wait(1).to({x:-12.1},0).wait(1).to({x:4.5},0).wait(1).to({x:18.5},0).wait(1).to({x:29.8},0).wait(1).to({x:38.7},0).wait(1).to({x:45.8},0).wait(1).to({x:51.6},0).wait(1).to({x:56.7},0).wait(1).to({x:61.1},0).wait(1).to({regY:20.8,x:65.2,y:20.8},0).wait(1));

	// team
	this.team_1 = new lib.team_1();
	this.team_1.parent = this;
	this.team_1.setTransform(-146.7,139.8,1,1,0,0,0,143,109.9);

	this.timeline.addTween(cjs.Tween.get(this.team_1).wait(1).to({regX:142.8,regY:111.7,x:-60.5,y:141.6},0).wait(1).to({x:-7.6},0).wait(1).to({x:28.4},0).wait(1).to({x:58.1},0).wait(1).to({x:81.5},0).wait(1).to({x:97.6},0).wait(1).to({x:108.7},0).wait(1).to({x:117.1},0).wait(1).to({regX:143,regY:109.9,x:124.3,y:139.8},0).to({x:119.3},2,cjs.Ease.get(1)).to({x:124.3},3,cjs.Ease.get(-1)).wait(6));

	// Layer 4
	this.instance = new lib.koeff_bg();
	this.instance.parent = this;
	this.instance.setTransform(65.2,18.8,1,1,0,0,0,65.2,18.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0.453},0).wait(1).to({alpha:0.206},0).wait(1).to({alpha:0.064},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(15));

	// Layer 5
	this.instance_1 = new lib.team_bg();
	this.instance_1.parent = this;
	this.instance_1.setTransform(124.1,50.5,1,1,0,0,0,142.8,20.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regY:50.6,y:127.4,alpha:0.556},0).wait(1).to({y:147.2,alpha:0.368},0).wait(1).to({y:164.4,alpha:0.206},0).wait(1).to({y:175.8,alpha:0.097},0).wait(1).to({y:182.1,alpha:0.038},0).wait(1).to({regY:20.6,y:156.1,alpha:0},0).to({_off:true},1).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-289.7,0,556.6,249.7);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Symbol18();
	this.instance.parent = this;
	this.instance.setTransform(78.6,23,1,1.027,0,0,0,78.6,22.4);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Symbol18(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30));

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoYDgQhoAAhIhBQhJhCAAhdQAAhcBJhBQBIhCBoAAIQyAAQBnAABIBCQBJBBAABcQAABdhJBCQhIBBhnAAg");
	mask.setTransform(78.6,22.4);

	// Layer 5
	this.instance_1 = new lib.light_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-25.9,19.9,9.561,0.345,15,0,0,0,0.1);
	this.instance_1.alpha = 0.34;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:185.1},9).to({_off:true},1).wait(20));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnNBAIABgWIhDAAIgFAWIgRAAIAFgnIALAAIAIgSIADgHIADgHQAEgKAFgXIADgJIAGgHQADgCAFgBQAEgCAFAAIAsAAIgMBWIANAAIgFAngAnkgqQgDACgBAFIgIAgIgCADIgCAHIgIASIAhAAIAKhGIgMAAQgFABgCACgABiArIgJgCIgHgFIgGgFIgDgIIgCgJIAAgHIAAgHIABgKQABgKAFgQIAEgJIAFgHIAGgEQAEgDAEgBQAGgCAPgBIARABIAOADIgDARIgdgBQgGAAgEACQgEABgDADQgDAEgCAHIgDARIgBAJIgBAGIAAABQAAAGACADQABAEAEACQADABAGABIAfgCIABARIgPAEIgSAAgApTArIgJgCIgHgFIgGgFIgDgIIgCgJIAAgHIAAgHIABgKQABgKAFgQIAEgJIAFgHIAGgEQAEgDAEgBQAGgCAPgBIARABIAOADIgDARIgdgBQgGAAgEACQgEABgDADQgDAEgCAHIgDARIgBAJIgBAGIAAABQAAAGACADQABAEAEACQADABAGABIAfgCIABARIgPAEIgSAAgAIhArIgMgCIADgRIAMABIAHgBIAEgDIAFgGIABgDIgFAAQgFAAgDgDIgCgCIgCgGIgMg+IAXAAIAIA2QAAABABAAQAAABAAAAQAAAAABAAQAAABABAAIAEAAIAZg5IAYAAIgkBMQgHAPgFAFQgDAEgEACQgFACgFAAIgEAAIgJAAgAFVAqIAPhnIAlgBIARABQAHACAEADQAEADABAFQACAGgBAHIgDAKIgDAHQgDADgEACIgIACIAAAAQAGABADACQAEACACAEIACACIABAGIAAABIgBAJQgBAIgCAGQgDAEgEADQgFAEgHABIgPABIgtgBgAFuAZIAQAAIAIgBIAGgBIADgFIACgIIAAgDIAAgEIAAgDIgCgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIgIgBIgRAAgAF0gTIAXgBQABAAABAAQAAAAABAAQAAAAABgBQAAAAABAAIADgFIACgHQABgHgDgDQgCgCgIAAIgRAAgAg2AqIAOhnIAXAAIgFAnIAOAAQAKAAAHABQAHACAEAEQAEAEABAHIABAEIgBAHIAAADQgBAKgDAGQgDAHgEADQgEADgHACQgFABgJABIgrgBgAgdAZIAWgBQADAAACgCQACgCAAgDIACgIIABgJIgBgDIgDgDIgIgBIgPAAgAldAqIgBgSIAJgDQAFgDADgFIADgGIACgHIADgHIAIghIADgJQACgEAEgDQADgCAEgBQAEgCAGAAIAsAAIgPBnIgWAAIAMhXIgMAAQgFAAgDACQgCADgCAFIgHAhIgBACIgDAHIgFAOQgEAGgEAFQgEAEgEADQgFACgFABIgFAAIgGAAgAmSAqQgGAAgFgCQgFgCgDgDQgCgDgBgFQgCgFABgFIAIg6IADgIQACgEADgDIAHgEQAFgCAFAAIAZABIAXABIgDARIgnAAQgEAAgCACQgCABAAAFIgDAPIApAAIgCARIgpAAIgDATQAAAEABACQACACAEAAIAmAAIAAARIgWABgAHvAqIgEgXIgDgMIAAgBIgDgGIgDgBQgDgCgGAAIgIAAIAAADIgBAGIAAABIgEAjIgXAAIAOhnIAXAAIgEAeIgDALIAHAAQAGAAAEgCQAEgCAEgFQAEgHALgZIAXAAQgMAdgFAHQgFAHgFACQgFAEgHABIAAAAQAHACAEACQAEADADAEIAAABIACAGIADAKIAEAZgAE0AqIgDgbIgkAAIgLAbIgYAAIArhiQABgCADgBQACgCADAAIAVAAQADAAACACQACABABADIAQBhgAEugCIgFgqIgEAAIgRAqIAaAAgACyAqIAMhVIgfAAIACgSIBVAAIgDASIgfAAIgLBVgAh5AqIAMhVIgfAAIADgSIBUAAIgCASIgfAAIgMBVgAiwAqIgEgbIgkAAIgLAbIgYAAIAshiQABgCACgBQACgCADAAIAWAAQADAAACACQACABAAADIAQBhgAi2gCIgFgqIgFAAIgQAqIAaAAg");
	this.shape.setTransform(79.5,24.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(30));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#D42A28","#961D1C"],[0,1],69.6,-18.7,-69.6,18.7).s().p("AoYDgQhoAAhIhBQhJhCAAhdQAAhcBJhBQBIhCBoAAIQyAAQBnAABIBCQBJBBAABcQAABdhJBCQhIBBhnAAg");
	this.shape_1.setTransform(78.6,22.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#741816").s().p("AoYDgQhoAAhIhCQhJhBAAhdQAAhcBJhCQBIhBBoAAIQyAAQBnAABIBBQBJBCAABcQAABdhJBBQhIBChnAAg");
	this.shape_2.setTransform(78.6,23.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(30));

	// Layer 6
	this.instance_2 = new lib.symbol4141();
	this.instance_2.parent = this;
	this.instance_2.setTransform(78.5,24.7);
	this.instance_2.alpha = 0.711;
	this.instance_2.filters = [new cjs.BlurFilter(44, 44, 1)];
	this.instance_2.cache(-85,-32,171,64);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27,-27.3,214,107);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_12 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(12).call(this.frame_12).wait(1));

	// Layer 1
	this.date = new lib.date();
	this.date.parent = this;
	this.date.setTransform(113,18.4,1,1,0,0,0,105,18.4);

	this.timeline.addTween(cjs.Tween.get(this.date).to({scaleY:0.09},3,cjs.Ease.get(-1)).to({scaleY:1},9,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,222,83.8);


(lib.koeff_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(12));

	// Layer 1
	this.koef_3 = new lib.koef_3();
	this.koef_3.parent = this;
	this.koef_3.setTransform(63.2,42,1.179,1.179,0,0,0,52,24.6);

	this.timeline.addTween(cjs.Tween.get(this.koef_3).to({regY:24.5,scaleY:0.16,y:47.3},3,cjs.Ease.get(-1)).to({regY:24.6,scaleY:1.18,y:42},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,123.8,56);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(11));

	// Layer 3
	this.instance = new lib.Symbol6();
	this.instance.parent = this;
	this.instance.setTransform(96.6,27.5,1,1,0,0,0,96.6,27.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.02,scaleY:1.02,x:96.7,alpha:0.315},0).wait(1).to({scaleX:1.03,scaleY:1.03,alpha:0.496},0).wait(1).to({scaleX:1.04,scaleY:1.04,alpha:0.618},0).wait(1).to({scaleX:1.05,scaleY:1.05,alpha:0.725},0).wait(1).to({scaleX:1.06,scaleY:1.06,alpha:0.812},0).wait(1).to({scaleX:1.06,scaleY:1.06,alpha:0.879},0).wait(1).to({scaleX:1.06,scaleY:1.06,alpha:0.929},0).wait(1).to({scaleX:1.07,scaleY:1.07,alpha:0.969},0).wait(1).to({regX:96.5,regY:27.4,scaleX:1.07,scaleY:1.07,x:96.6,y:27.4,alpha:1},0).wait(1).to({regX:96.6,regY:27.5,scaleX:1.05,scaleY:1.05,x:96.7,y:27.6,alpha:0.709},0).wait(1).to({scaleX:1.04,scaleY:1.04,alpha:0.534},0).wait(1).to({scaleX:1.03,scaleY:1.03,alpha:0.416},0).wait(1).to({scaleX:1.02,scaleY:1.02,alpha:0.316},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:27.7,alpha:0.229},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:27.6,alpha:0.159},0).wait(1).to({scaleX:1.01,scaleY:1.01,alpha:0.104},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.062},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.028},0).wait(1).to({scaleX:1,scaleY:1,x:96.6,y:27.5,alpha:0},0).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol12();
	this.instance_1.parent = this;
	this.instance_1.setTransform(96.7,28.3,1.229,1.229,0,0,0,78.7,23);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:78.4,regY:24.7,scaleX:1.25,scaleY:1.25,x:96.4,y:30.4},0).wait(1).to({scaleX:1.27,scaleY:1.27,x:96.3},0).wait(1).to({scaleX:1.28,scaleY:1.28},0).wait(1).to({scaleX:1.29,scaleY:1.29,y:30.5},0).wait(1).to({scaleX:1.3,scaleY:1.3,x:96.4},0).wait(1).to({scaleX:1.3,scaleY:1.3,x:96.3},0).wait(1).to({scaleX:1.31,scaleY:1.31},0).wait(1).to({scaleX:1.31,scaleY:1.31},0).wait(1).to({regX:78.6,regY:22.9,scaleX:1.31,scaleY:1.31,x:96.6,y:28.2},0).wait(1).to({regX:78.4,regY:24.7,scaleX:1.29,scaleY:1.29,x:96.4,y:30.5},0).wait(1).to({scaleX:1.27,scaleY:1.27},0).wait(1).to({scaleX:1.26,scaleY:1.26},0).wait(1).to({scaleX:1.25,scaleY:1.25},0).wait(1).to({scaleX:1.25,scaleY:1.25,x:96.5},0).wait(1).to({scaleX:1.24,scaleY:1.24},0).wait(1).to({scaleX:1.24,scaleY:1.24},0).wait(1).to({scaleX:1.23,scaleY:1.23},0).wait(1).to({scaleX:1.23,scaleY:1.23,y:30.4},0).wait(1).to({regX:78.7,regY:23,scaleX:1.23,scaleY:1.23,x:96.7,y:28.3},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-391.7,-159.3,719.9,367.3);


// stage content:
(lib.ffon240x400 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		var lastEventKey = null;
		var monts = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
		var flags = {
			'спартак м' : 'spartakmoscow.png',
			'цска' : 'cskamoscow.png',
			'терек' : 'terek.png',
			'зенит с-петербург' : 'zenit.png',
			'амкар' : 'amkar.png',
			'краснодар' : 'krasnodar.png',
			'ростов' : 'rostov.png',
			'анжи' : 'anji.png',
			'локомотив м' : 'lokomotiv.png',
			'урал' : 'ural.png',
			'арсенал тула' : 'arsenaltula.png',
			'томь' : 'tom.png',
			'уфа' : 'ufa.png',
			'рубин казань' : 'rubin.png',
			'оренбург' : 'orenburg.png',
			'крылья советов' : 'ks.png',
			'шахтер донецк' : 'shakhtar.png',
			'динамо киев' : 'dinamokiev.png',
			'заря' : 'zarya.png',
			'ворскла' : 'vorskla.png',
			'александрия' : 'aleksandria.png',
			'черноморец' : 'chernomorets.png',
			'днепр' : 'dnepr.png',
			'олимпик донецк' : 'olimpik.png',
			'сталь каменское' : 'stal.png',
			'волынь' : 'volin.png',
			'звезда кропивницкий' : 'zirka.png',
			'карпаты' : 'karpaty.png',
			'бавария' : 'bayern.png',
			'кельн' : 'koln.png',
			'вольфсбург' : 'wolfsburg.png',
			'герта' : 'herta.png',
			'боруссия менхенгладбах' : 'borussiamoenchengladbach.png',
			'боруссия дортмунд' : 'borussiadortmund.png',
			'айнтрахт франкфурт' : 'eintracht.png',
			'хоффенхайм' : 'hoffenheim.png',
			'лейпциг' : 'leipzig.png',
			'ингольштадт' : 'ingolstadt.png',
			'гамбург' : 'hamburg.png',
			'фрайбург' : 'freiburg.png',
			'майнц' : 'mainz.png',
			'байер леверкузен' : 'bayerleverkusen.png',
			'шальке' : 'schalke04.png',
			'аугсбург' : 'augsburg.png',
			'дармштадт' : 'darmstadt.png',
			'вердер' : 'werderbremen.png',
			'манчестер с' : 'manchestercity.png',
			'челси' : 'chelsea.png',
			'манчестер юн' : 'manchesterunited.png',
			'эвертон' : 'everton.png',
			'халл с' : 'hullcity.png',
			'миддлсбро' : 'middlesbrough.png',
			'тоттенхэм' : 'tottenham.png',
			'арсенал' : 'arsenal.png',
			'лестер с' : 'leicester.png',
			'вест бромвич' : 'westbromwich.png',
			'ливерпуль' : 'liverpool.png',
			'вест хэм юн' : 'westham.png',
			'суонси' : 'swansea.png',
			'бернли' : 'burnley.png',
			'саутгемптон' : 'southampton.png',
			'сандерленд' : 'sunderland.png',
			'кристал пэлас' : 'crystalpalace.png',
			'уотфорд' : 'watford.png',
			'борнмут' : 'bournemouth.png',
			'сток с' : 'stokecity.png',
			'монако' : 'monaco.png',
			'генгам' : 'gengam.png',
			'ницца' : 'nice.png',
			'лион' : 'lyon.png',
			'псж' : 'psg.png',
			'кан' : 'caen.png',
			'метц' : 'metz.png',
			'бордо' : 'bordeaux.png',
			'тулуза' : 'toulouse.png',
			'сент-этьен' : 'saintetienne.png',
			'марсель' : 'marseille.png',
			'ренн' : 'rennais.png',
			'лилль' : 'lille.png',
			'монпелье' : 'montpellier.png',
			'дижон' : 'dijon.png',
			'бастия' : 'bastia.png',
			'нант' : 'nantes.png',
			'анже' : 'angers.png',
			'лорьян' : 'lorient.png',
			'нанси' : 'nancy.png',
			'атлетико мадрид' : 'atleticomadrid.png',
			'барселона' : 'barcelona.png',
			'базель' : 'basel.png',
			'бенфика' : 'benfica.png',
			'бешикташ' : 'besiktas.png',
			'боруссия менхенгл.' : 'borussiamoenchengladbach.png',
			'брюгге' : 'brugge.png',
			'селтик' : 'celtic.png',
			'динамо загреб' : 'dinamozagreb.png',
			'ювентус' : 'juventus.png',
			'копенгаген' : 'kobenhavn.png',
			'легия варшава' : 'legia.png',
			'лестер' : 'leicester.png',
			'лудогорец' : 'ludogorets.png',
			'манчестер сити' : 'manchestercity.png',
			'наполи' : 'napoli.png',
			'порто' : 'porto.png',
			'псв' : 'psv.png',
			'реал мадрид' : 'realmadrid.png',
			'севилья' : 'sevilla.png',
			'спортинг лиссабон' : 'sporting.png',
			'тоттенхем' : 'tottenham.png',
			'алавес' : 'alaves.png',
			'атлетик бильбао' : 'athleticbilbao.png',
			'бетис' : 'betis.png',
			'сельта' : 'celtavigo.png',
			'депортиво' : 'deportivolacoruna.png',
			'эйбар' : 'eibar.png',
			'эспаньол' : 'espanyol.png',
			'гранада' : 'granada.png',
			'нас пальмас' : 'laspalmas.png',
			'леганес' : 'leganes.png',
			'малага' : 'malaga.png',
			'осасуна' : 'osasuna.png',
			'реал сосьедад' : 'realsociedad.png',
			'спортинг хихон' : 'sportinggijon.png',
			'валенсия' : 'valencia.png',
			'вилльяреал' : 'villarreal.png',
			'аталанта' : 'atalanta.png',
			'болонья' : 'bologna.png',
			'кальяри' : 'cagliari.png',
			'кьево' : 'chievo.png',
			'кротоне' : 'crotone.png',
			'эмполи' : 'empoli.png',
			'фиорентина' : 'fiorentina.png',
			'дженоа' : 'genoa.png',
			'интер' : 'inter.png',
			'лацио' : 'lazio.png',
			'милан' : 'milan.png',
			'палермо' : 'palermo.png',
			'пескара' : 'pescara.png',
			'рома' : 'roma.png',
			'сампдория' : 'sampdoria.png',
			'сассуоло' : 'sassuolo.png',
			'торино' : 'torino.png',
			'удинезе' : 'udinese.png',
			'фенербахче' : 'fenerbahce.png',
			'фейеноорд' : 'feyenoord.png',
			'астана' : 'astana.png',
			'апоэл' : 'apoel.png',
			'янг бойз' : 'youngboys.png',
			'олимпиакос' : 'olympiacos.png',
			'габала' : 'gabala.png',
			'андерлехт' : 'anderlecht.png',
			'маккаби тель-авив' : 'maccabi.png',
			'аз' : 'az.png',
			'дандолк' : 'dundalk.png',
			'аустрия в' : 'austriawien.png',
			'астра джурджу' : 'astra.png',
			'виктория пл' : 'viktoria.png',
			'рапид в' : 'rapidwien.png',
			'генк' : 'genk.png',
			'аякс' : 'ajax.png',
			'стандард' : 'standart.png',
			'панатинаикос' : 'panathinaikos.png',
			'коньяспор' : 'konyaspor.png',
			'гент' : 'gent.png',
			'брага' : 'braga.png',
			'зальцбург' : 'redbull.png',
			'паок' : 'paok.png',
			'слован л' : 'slovan.png',
			'карабах агдам' : 'qarabach.png',
			'интер милан' : 'inter.png',
			'хапоэль б-ш' : 'hapoel.png',
			'спарта п' : 'spartapraha.png',
			'цюрих' : 'zurich.png',
			'вильярреал' : 'villarreal.png',
			'османлыспор' : 'osmanlispor.png',
			'стяуа' : 'steaua.png',
			'болгария' : 'bulgaria.png',
			'швеция' : 'sweden.png',
			'голландия' : 'netherlands.png',
			'франция' : 'france.png',
			'беларусь' : 'belarus.png',
			'люксембург' : 'luxembourg.png',
			'швейцария' : 'switzerland.png',
			'латвия' : 'latvia.png',
			'венгрия' : 'hungary.png',
			'фареры' : 'faroeislands.png',
			'андорра' : 'andorra.png',
			'португалия' : 'portugal.png',
			'германия' : 'germany.png',
			'азербайджан' : 'azerbaijan.png',
			'сев. ирландия' : 'northenirland.png',
			'чехия' : 'czechrepublic.png',
			'сан-марино' : 'sanmarino.png',
			'норвегия' : 'norway.png',
			'уэльс' : 'wales.png',
			'австрия' : 'austria.png',
			'ирландия' : 'ireland.png',
			'сербия' : 'serbia.png',
			'грузия' : 'georgia.png',
			'молдавия' : 'moldova.png',
			'дания' : 'denmark.png',
			'казахстан' : 'kazakhstan.png',
			'польша' : 'poland.png',
			'румыния' : 'romania.png',
			'черногория' : 'montenegro.png',
			'армения' : 'armenia.png',
			'шотландия' : 'scotland.png',
			'англия' : 'england.png',
			'словения' : 'slovenia.png',
			'литва' : 'lithuania.png',
			'словакия' : 'slovakia.png',
			'мальта' : 'malta.png',
			'испания' : 'spain.png',
			'италия' : 'italy.png',
			'албания' : 'albania.png',
			'македония' : 'macedonia.png',
			'израиль' : 'israel.png',
			'лихтенштейн' : 'liechtenstein.png',
			'босния' : 'bosnia.png',
			'греция' : 'greece.png',
			'бельгия' : 'belgium.png',
			'гибралтар' : 'gibraltar.png',
			'кипр' : 'cyprus.png',
			'эстония' : 'estonia.png',
			'турция' : 'turkey.png',
			'хорватия' : 'croatia.png',
			'финляндия' : 'finland.png',
			'косово' : 'kosovo.png',
			'украина' : 'ukraine.png',
			'исландия' : 'island.png',
		};
		
		window.fonbet_callback = function (data) {
		
			var rootId = 1; // футбол
			var events = [];
			var currentTime = new Date().getTime() / 1000;
		
			if (data && typeof data === 'object') {
				for (var i in data) {
					var obj = data[i];
					if (obj && obj.sportRoot && obj.sportRoot == rootId && obj.startTime > currentTime) {
						events.push(obj);
					}
				}
			}
		
			if (events.length === 1) {
		
				showEvent(events[0]);
			} else if (events.length > 1) {
		
				showEvent(getRand(events));
				setInterval(function () {
					showEvent(getNext(events));
				}, 5 * 1000);
			}
		}
		
		showEvent = function (event) {
		
			var winFirst = event.factors[0]; // выиграет первая команда
			var winNoBody = event.factors[1]; // ничья
			var winSecond = event.factors[2]; // выиграет вторая команда
			winFirst.name; // название ставки , Англия
			winFirst.value; // ставка , 2.10
		
			event.team1; // название первой команды
			event.team2; // название второй команды
		
			var date = new Date();
			date.setTime(event.startTime * 1000);
		
			// дата начала матча
			date = lpadTime(date.getDate()) + " " + monts[date.getMonth()] + " " + date.toTimeString().substr(0, 5);
		
		    // Путь к текстовым полям и эффектам при обновлении
			
			_this.team_one.team_1.text.text = winFirst.name;
			_this.team_one.koeff_1.text.text = winFirst.value;
			_this.sign_one.sign.instance.image.src = getFlag(winFirst.name);
			_this.team_one.gotoAndPlay(0);
			_this.sign_one.gotoAndPlay(0);
			
			_this.team_two.team_2.text.text = winSecond.name;
			_this.team_two.koeff_2.text.text = winSecond.value;
			_this.sign_two.sign.instance.image.src = getFlag(winSecond.name);
			_this.team_two.gotoAndPlay(0);
			_this.sign_two.gotoAndPlay(0);
		
			_this.koeff_3.koef_3.text.text = winNoBody.value;
			_this.koeff_3.gotoAndPlay(0);
			
			_this.date.date.text.text = date;
			_this.date.gotoAndPlay(0);
		
			
		
		}
		
		function lpadTime(num) {
			return ("00" + num).slice(-2);
		}
		
		
		function getFlag(country) {
		
			var key = ("" + country).toLowerCase();
			if (flags[key] !== undefined) {
				//return 'media/signs_fonbet/' + flags[key];
				return '/media/signs_fonbet/' + flags[key];
			}
			else {
		    return '/media/signs_fonbet/ball.png';
		   }
		
		}
		
		function getRand(array) {
		
			var key;
			do {
				key = parseInt(Math.random() * array.length);
			} while (key == lastEventKey);
		
			lastEventKey = key;
		
			return array[lastEventKey];
		}
		
		function getNext(array) {
		
			lastEventKey++;
			if (lastEventKey >= array.length) {
				lastEventKey = 0;
			}
			return array[lastEventKey];
		}
		
		function createRequest() {
		
			var script = document.createElement('script');
			script.type = "text/javascript";
			script.src = "http://root-srv.fonbet.com/BetsService/line/news/all/ru?callback=fonbet_callback&" + Math.random();
		
			document.head.appendChild(script);
		}
		
		createRequest();
		stage.scaleX = stage.scaleY = 2;
		stage.enableMouseOver(100);
		stage.canvas.width = 240 * 2;
		stage.canvas.height = 400 * 2;
		stage.canvas.style.width = '240px';
		stage.canvas.style.height = '400px';
		
		this.btn.addEventListener("mouseover", function(){_this.btn.gotoAndPlay(1);});
		this.btn.addEventListener("mouseout", function(){_this.btn.gotoAndPlay(10);});
		stage.canvas.onmouseover = function(){_this.black.gotoAndPlay(1);_this.bg.gotoAndPlay(1);}
		stage.canvas.onmouseout = function(){_this.black.gotoAndPlay(10);_this.bg.gotoAndPlay(10);}
		document.addEventListener("click", function() {window.open(clickTAG, "_blank");});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// date
	this.date = new lib.Symbol4();
	this.date.parent = this;
	this.date.setTransform(119.8,37.4,1,1,0,0,0,111,41.9);

	this.timeline.addTween(cjs.Tween.get(this.date).wait(1));

	// koefs
	this.team_two = new lib.team_two();
	this.team_two.parent = this;
	this.team_two.setTransform(321.1,225.2,1,1,0,0,0,65,18.6);

	this.team_one = new lib.team_one();
	this.team_one.parent = this;
	this.team_one.setTransform(69.6,225.2,1,1,0,0,0,65,18.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.team_one},{t:this.team_two}]}).wait(1));

	// signs
	this.sign_two = new lib.sign_two();
	this.sign_two.parent = this;
	this.sign_two.setTransform(177.5,140.4,1.001,1.001,0,0,0,53.8,53.8);

	this.sign_one = new lib.sign_one();
	this.sign_one.parent = this;
	this.sign_one.setTransform(63.4,140.4,1.001,1.001,0,0,0,53.8,53.8);

	this.koeff_3 = new lib.koeff_3();
	this.koeff_3.parent = this;
	this.koeff_3.setTransform(120.2,403.8,1,1,0,0,0,61.9,27.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.koeff_3},{t:this.sign_one},{t:this.sign_two}]}).wait(1));

	// btn
	this.btn = new lib.btn();
	this.btn.parent = this;
	this.btn.setTransform(118.8,341.5,1,1,0,0,0,96.6,28.2);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// title
	this.instance = new lib.Symbol8();
	this.instance.parent = this;
	this.instance.setTransform(119.4,-133.6,0.875,0.875,0,0,0,134.6,70.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// logo
	this.instance_1 = new lib.Символ18();
	this.instance_1.parent = this;
	this.instance_1.setTransform(63.6,59.4,0.922,0.922,0,0,0,59.4,17.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// black
	this.black = new lib.black();
	this.black.parent = this;
	this.black.setTransform(336.2,199.1,1.26,1.26,0,0,0,393.5,230.8);

	this.timeline.addTween(cjs.Tween.get(this.black).wait(1));

	// bg
	this.bg = new lib.bg_1();
	this.bg.parent = this;
	this.bg.setTransform(336.2,199.1,1.26,1.26,0,0,0,299.9,150.1);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-249.5,20.8,1166.1,700.5);
// library properties:
lib.properties = {
	width: 240,
	height: 400,
	fps: 30,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg?1485967451940", id:"bg"},
		{src:"images/light.png?1485967451940", id:"light"},
		{src:"images/logo.png?1485967451940", id:"logo"},
		{src:"images/zagl_1.png?1485967451940", id:"zagl_1"},
		{src:"images/zagl_2.png?1485967451940", id:"zagl_2"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;