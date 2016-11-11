(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.arm = function() {
	this.initialize(img.arm);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,119,70);


(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,935,467);


(lib.bless = function() {
	this.initialize(img.bless);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,228,300);


(lib.bloo = function() {
	this.initialize(img.bloo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,634,447);


(lib.body = function() {
	this.initialize(img.body);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,166,154);


(lib.botik = function() {
	this.initialize(img.botik);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,105,76);


(lib.hand1 = function() {
	this.initialize(img.hand1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,60,83);


(lib.hand = function() {
	this.initialize(img.hand);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,69);


(lib.Hands_03 = function() {
	this.initialize(img.Hands_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,85,95);


(lib.Hands_05 = function() {
	this.initialize(img.Hands_05);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,85,95);


(lib.Hands_10 = function() {
	this.initialize(img.Hands_10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,95,93);


(lib.head = function() {
	this.initialize(img.head);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,287,222);


(lib.headgirl = function() {
	this.initialize(img.headgirl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,112,127);


(lib.leg = function() {
	this.initialize(img.leg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,124,126);


(lib.leg2 = function() {
	this.initialize(img.leg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,167,93);


(lib.round = function() {
	this.initialize(img.round);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,556);


(lib.skirt = function() {
	this.initialize(img.skirt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,287,171);


(lib.smoke_0 = function() {
	this.initialize(img.smoke_0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,340,240);


(lib.smoke_2 = function() {
	this.initialize(img.smoke_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,340,240);


(lib.smoke_3 = function() {
	this.initialize(img.smoke_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,340,240);


(lib.smoke_4 = function() {
	this.initialize(img.smoke_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,340,240);


(lib.smoken = function() {
	this.initialize(img.smoken);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,272);


(lib.train = function() {
	this.initialize(img.train);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,226,127);// helper functions:

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


(lib.Символ93 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgYAlIguA5IgHj2ICaCzIg+gJIA1BxIgtAWg");
	this.shape.setTransform(11.6,13.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ93, new cjs.Rectangle(3.8,-2,15.5,30.6), null);


(lib.Символ90 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgmCeQgNgFgKgLQgIgLgEgOQgFgQAAgRIAAimQAAgTAFgOQAEgPAIgLQAKgLANgGQAOgFASAAQARAAAPAFQANAGAJALQAJALAFAPQAEAOAAATIAAAdIgiAAIAAgfQAAgXgJgLQgKgNgSAAQgTAAgKANQgJALAAAXIAACpQAAAXAJALQAKAMATAAQASAAAKgMQAJgLAAgXIAAgpIAiAAIAAAoQAAARgEAQQgFAOgJALQgJALgNAFQgPAGgRAAQgSAAgOgGgAkACiIAAghQAUABALgHQALgHAEgSIAHgWIhKjsIAkAAIA3DAIAvjAIAmAAIhFD6QgEAUgGAMQgGAPgJAIQgKAKgPADQgMAEgQAAIgIAAgAG6CiIAAghQALAAAHgDQAGgDAEgFQAHgKABgZIAJjzICCAAIAAFBIgkAAIAAkhIg9AAIgHDRQgBAUgEAOQgDAPgHAKQgIALgMAFQgMAFgSABgAKQChIAAgsIAjAAIAAAsgAEeChIAAlBICEAAIAAAgIhgAAIAABvIBOAAIAAAfIhOAAIAABzIBgAAIAAAggADWChIAAkhIhPAAIAAEhIgkAAIAAlBICXAAIAAFBgAn3ChIAAlBICFAAIAAAgIhhAAIAABvIBPAAIAAAfIhPAAIAABzIBhAAIAAAggAo/ChIAAiRIhQAAIAACRIgkAAIAAlBIAkAAIAACRIBQAAIAAiRIAkAAIAAFBgAKUBaIgEhiIAAiYIAkAAIAACYIgGBig");
	this.shape.setTransform(69.2,16.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ90, new cjs.Rectangle(0,0,138.3,32.8), null);


(lib.Символ89 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AFyDYIAAgsIjdAAIAAlBIAkAAIAAEgIA+AAIAAkgIAjAAIAAEgIA/AAIAAkgIAjAAIAAEiIAZAAIAABLgATlCqQgOgGgJgLQgJgKgFgQQgEgOgBgTIAAilQABgTAEgPQAFgOAJgLQAJgLAOgFQAOgGASAAQASAAAPAGQANAFAKALQAJALAFAOQAFAPAAATIAAClQAAATgFAOQgFAQgJAKQgKALgNAGQgPAFgSAAQgSAAgOgFgATohrQgJAMAAAWIAACpQAAAXAJALQALAMASABQATgBAKgMQAKgLAAgXIAAipQAAgWgKgMQgKgMgTAAQgSAAgLAMgAQzCqQgNgGgKgLQgJgKgEgQQgFgOABgTIAAgfIAhAAIAAAhQAAAXAJALQAKANATAAQATAAAKgNQAIgMABgZIAAgZQAAgYgLgLQgFgHgIgCQgIgEgKAAIgPAAIAAgfIARAAQASAAALgMQALgMAAgUIAAgPQgBgZgIgMQgKgMgTAAQgTAAgKAMQgJAMAAAWIAAAVIghAAIAAgUQAAgSAEgPQAEgPAKgLQAIgKAOgFQANgGATAAQASAAAOAGQANAFAKALQAIALAFAOQAFAPAAATIAAAIIgDAXQgCAKgFAJQgGAJgHAGQgIAGgJACQAKAEAHAGQAIAHAFAIQAKARAAAZIAAAZQAAATgFAOQgFAQgIAKQgKALgNAGQgOAFgSAAQgSAAgOgFgAsWCqQgOgGgJgLQgJgKgFgQQgEgOgBgTIAAilQABgTAEgPQAFgOAJgLQAJgLAOgFQAOgGASAAQASAAAPAGQANAFAKALQAJALAFAOQAFAPAAATIAAClQAAATgFAOQgFAQgJAKQgKALgNAGQgPAFgSAAQgSAAgOgFgAsThrQgJAMAAAWIAACpQAAAXAJALQAKAMATABQATgBAKgMQAKgLAAgXIAAipQAAgWgKgMQgKgMgTAAQgTAAgKAMgA0vCqQgNgGgJgLQgKgKgFgQQgEgOAAgTIAAilQAAgTAEgPQAFgOAKgLQAJgLANgFQAOgGATAAQASAAAOAGQAOAFAKALQAJALAEAOQAFAPAAATIAAClQAAATgFAOQgEAQgJAKQgKALgOAGQgOAFgSAAQgTAAgOgFgA0rhrQgKAMAAAWIAACpQAAAXAKALQAKAMATABQATgBAKgMQAJgLAAgXIAAipQAAgWgJgMQgKgMgTAAQgTAAgKAMgAnHCsIAAgfQAUAAAKgHQALgHAEgTIAIgUIhKjtIAkAAIA3DAIAvjAIAlAAIhFD6QgEAUgGAMQgGAOgIAJQgKAJgPAFQgMADgQAAIgIgBgAXsCsIhFiMIgSAgIAABsIgkAAIAAlBIAkAAIAACbIBWibIAkAAIhRCTIBTCugAPNCsIgNhBIhRAAIgNBBIghAAIA+lBIA0AAIA+FBgAO7BMIgki4IgjC4IBHAAgAKgCsIAAlBIBGAAQATAAAOAGQAOAEAIALQAJAKAFAOQADAPAAASIAAAnQAAATgEAOQgFAPgJAKQgJAJgOAFQgPAFgSAAIggAAIAAB/gALEANIAgAAQATAAAKgKQAKgKAAgWIAAgrQAAgXgJgLQgIgLgUABIgiAAgAGzCsIAAlBICFAAIAAAhIhgAAIAABtIBOAAIAAAgIhOAAIAAByIBgAAIAAAhgAgPCsIAAlBICEAAIAAAhIhhAAIAABtIBPAAIAAAgIhPAAIAAByIBhAAIAAAhgAibCsIAAj/IhTD/IgkAAIAAlBIAfAAIAADvIBQjvIApAAIAAFBgAqKCsIAAlBICIAAIAAAhIhkAAIAABkIAlAAQAUAAANAFQAPAEAJAIQAKAKAEAOQAGAOAAATIAAAkQgBASgEAPQgEAPgJAKQgKAKgOAFQgOAFgSAAgApmCLIAoAAQATABAKgLQAJgKAAgXIAAgoQAAgWgLgKQgJgJgVAAIglAAgAvnCsIAAlBIBGAAQATAAAOAGQAOAEAIALQAJAKAFAOQADAPAAASIAAAnQABATgFAOQgFAPgJAKQgJAJgOAFQgPAFgTAAIgfAAIAAB/gAvDANIAfAAQAVAAAJgKQAKgKAAgWIAAgrQAAgXgJgLQgIgLgUABIgiAAgAwwCsIAAkgIhOAAIAAEgIgkAAIAAlBICWAAIAAFBgA2dCsIAAkgIhQAAIAAEgIgkAAIAAlBICYAAIAAFBgAjaitQgIgDgHgFQgGgHgDgIQgFgIAAgLIAXAAQABANAIAFQAGAFAMABQANgBAGgFQAIgFABgNIAWAAQAAALgDAIQgEAIgGAHQgHAFgJADQgJADgMAAQgMAAgJgDg");
	this.shape.setTransform(155.4,21.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ89, new cjs.Rectangle(0,0,310.7,43.1), null);


(lib.Символ88 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990000").s().p("Eg0CAb+MAAAg37MBoFAAAMAAAA37g");
	this.shape.setTransform(333.1,179);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ88, new cjs.Rectangle(0,0,666.2,358.1), null);


(lib.Символ85 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bloo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ85, new cjs.Rectangle(0,0,634,447), null);


(lib.Символ82 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(5,1,1).p("AKIqHIguAuQDCDDArEBQAMBIAABNIkOAAAAAtSQE0AADlC+QAhAcAgAfIggAgAJaJZIAuAvAInImIAzAzQj5D5lhAAIAADrAQ9AAIjqAAQAAFgj5D5AAAw8IAADqIAAEZAqGqGIAuAtQAfgfAigcQDki+EzAAApYpZIAfAgAtRAAQAAhNAMhIQAqkBDDjDAtRAAIjrAAApYJZIguAuAovIwIgpApQj5j5AAlgApDAAIkOAAAAAIcIAAE2QlfAAj5j5");
	this.shape.setTransform(108.5,108.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ82, new cjs.Rectangle(-2.5,-2.5,222.1,222.1), null);


(lib.Символ76 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4F230E").s().p("AxVXrMAAAgvVMAirAAAMAAAAvVg");
	this.shape.setTransform(111,151.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ73 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Hands_05();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ73, new cjs.Rectangle(0,0,85,95), null);


(lib.Символ71 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Hands_03();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ71, new cjs.Rectangle(0,0,85,95), null);


(lib.Символ70 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Hands_10();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ70, new cjs.Rectangle(0,0,95,93), null);


(lib.Символ64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4F230E").s().p("AB8BiInpgeIAAiLIHpgeIAAiLIDxDwIjxDxg");
	this.shape.setTransform(36.6,24.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ64, new cjs.Rectangle(0,0,73.1,48.3), null);


(lib.Символ63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AB8BiInpgeIAAiLIHpgeIAAiLIDxDwIjxDxg");
	this.shape.setTransform(36.6,24.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ63, new cjs.Rectangle(0,0,73.1,48.3), null);


(lib.Символ61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACUC/IAAgsIAWAAIANAAIAAAqIAAACgAgRC/IAAlBIAWAAIBtAAIAAAeIAAADIhJAAIgXAAIAABtIBOAAIAAAeIAAACIg3AAIgXAAIAABzIBgAAIAAAeIAAACgAi3C/IAAlBIAXAAIBuAAIAAAeIAAADIhKAAIgXAAIAABtIBPAAIAAAeIAAACIg4AAIgXAAIAABzIBhAAIAAAeIAAACgACYB4IgEhjIAAiXIAWAAIAOAAIAACXIgFBhIgBACgAA8iVIAAgpIAXAAIAJAAIAAAnIAAACgAAEiVIAAgpIAWAAIAIAAIAAAnIAAACg");
	this.shape.setTransform(18.4,19.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("ACgC/IAAgqIgMAAIAAgCIAjAAIAAAsgABcC/IAAgeIhfAAIAAhyIAVAAIAABwIBgAAIAAAggAhJC/IAAgeIhgAAIAAhyIAWAAIAABwIBhAAIAAAggACdB4IAEhhIAAiWIgNAAIAAgDIAkAAIAACXIgGBjgABKAsIAAgeIhNAAIAAhtIAVAAIAABrIBOAAIAAAggAhbAsIAAgeIhOAAIAAhtIAWAAIAABrIBPAAIAAAggABchhIAAgeIhtAAIAAgDICDAAIAAAhgAhJhhIAAgeIhuAAIAAgDICFAAIAAAhgABFiVIAAgnIgJAAIAAgCIAgAAIAAApgAAMiVIAAgnIgIAAIAAgCIAeAAIAAApg");
	this.shape_1.setTransform(20.6,19.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ61, new cjs.Rectangle(0,0,39,38.5), null);


(lib.Символ60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlIC+QgOgFgJgLQgJgLgFgPQgFgPAAgSIAAilQAAgUAFgOQAFgPAJgLQAJgLAOgFQAOgGASABQASgBAOAGQAOAFAKALQAJALAFAPQAEAOAAAUIAAClQAAASgEAPQgFAPgJALQgKALgOAFIgJADQgLADgMgBQgSABgOgGgAlFhWQgJAMAAAWIAACoQAAAXAJAMQAKAMATAAQAJAAAHgDQAIgDAFgGQAJgMAAgXIAAioQAAgXgJgLQgIgLgOgCIgHAAQgTAAgKANgAjGDBIAAghQALAAAHgDQAHgCAEgGQAGgKABgZIAJjzIAWAAIBtAAIAAE/IAAADIgkAAIAAkhIgnAAIgXAAIgHDQQgBAUgDAPQgEAPgHAKQgHAKgMAFIgKAEQgJABgMABgAIEDBIAAi9IAAhDIhRD9IgBADIglAAIAAlCIAWAAIAJAAIAADwIAXhEIA6isIAWAAIASAAIAAE/IAAADgAFNDBIgNhBIg7AAIgWAAIgMA+IgBADIghAAIABgDIABgGIA8k5IAWAAIAeAAIA9E/IABADgAD0BhIBHAAIAAgCIgZh+IgLg5gACKDBIg7h4IgKgVIgSAhIAABpIAAADIgkAAIAAlCIAWAAIAOAAIAACbIAWgoIA/hzIAWAAIAOAAIhRCSIBTCtIABADgAnpDBIAAkhIg7AAIAAghIAXAAICEAAIAAAeIAAADIglAAIgXAAIAAEeIAAADgAHGiZQgJgDgHgGQgGgFgDgJQgEgIAAgKIAWAAIABABQABALAHAGQAGAEAMAAQAKAAAGgDIADgBQAIgHABgLIAWAAIAAABQAAAJgDAIQgEAJgGAFQgHAGgJADIgCABQgJACgKABQgLgBgJgDg");
	this.shape.setTransform(54.9,19.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AkeDAQAOgFAJgLQAJgKAFgQQAFgPAAgRIAAimQAAgTgFgOQgFgQgJgKQgJgLgOgFQgOgGgTAAQALgCAMgBQASABAOAFQAOAGAKAKQAJALAFAPQAEAPAAASIAACmQAAASgEAPQgFAPgJAKQgKAMgOAFQgOAGgSgBIAKgDgAjBDBIAJgDQAMgGAIgKQAHgKADgPQAEgOAAgUIAIjRIAWAAIgHDOQgBAVgDAOQgEAOgHALQgHAKgMAGQgNAFgSAAgAIODAIAAk+IgSAAIABgDIAoAAIAAFBgAGcDAIBSj8IAABCIg8C6gAFaDAIg9k+IgeAAIAAgDIA0AAIA+FBgADMDAIANg+IAWAAIgNA+gACYDAIhTisIBRiSIgPAAIABgDIAkAAIhRCTIBSCoIgCAGgAAcDAIAAhpIATggIAKAUIgGAJIAABsgAgtDAIAAk+IhsAAIAAgDICDAAIAAFBgAnbDAIAAkeIAWAAIAAEegAlbCaQgKgMAAgXIAAipQAAgWAKgMQAKgMASAAIAHAAQgIADgFAHQgJALAAAXIAACpQAAAWAJAMQAJAKAOACQgHADgKgBQgSABgKgMgAGWh+IgJAAIAAgDIAfAAIAACvIgWBDgADdBkIAki6IALA6IgYB9IAwAAIABADgAAch+IgNAAIAAgDIAkAAIAAB1IgXApgAmghgIAAgeIiEAAIAAgDICbAAIAAAhgAHWiWIADAAQAJgDAGgGQAHgGADgJQAEgHAAgKIAAgEIAWAAQAAALgDAIQgEAIgGAHQgHAFgJADQgJADgMAAIgEAAgAGxiuQgHgGgBgKIAAgFIAWAAQABANAIAFQAEAEAIABQgHADgJAAQgMAAgHgFg");
	this.shape_1.setTransform(57.1,19.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ60, new cjs.Rectangle(0,0,112,39.4), null);


(lib.Символ59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA4C+QgNgFgJgMQgJgKgEgPQgFgPAAgSIAAimQAAgSAFgPQAEgPAJgLQAJgKANgGQAOgFATgBIAJABQANABAKAEQANAGAKAKQAIALAFAPQAEAPAAASIAAAdIgiAAIAAgeQAAgXgJgLQgHgKgMgCIgKgBQgSAAgKANQgJALAAAXIAACpQAAAWAJALQAKANASAAIAKgBQAMgCAHgKQAJgLAAgWIAAgqIAiAAIAAAoQAAASgEAPQgFAPgIAKQgKAMgNAFQgKAEgNABIgJAAQgTABgOgGgAnzC+QgNgFgJgMQgJgKgEgPQgFgPAAgSIAAimQAAgSAFgPQAEgPAJgLQAJgKANgGQAOgFATgBIAJABQANABAKAEQANAGAKAKQAIALAFAPQAEAPAAASIAAAdIgiAAIAAgeQAAgXgJgLQgHgKgMgCIgKgBQgSAAgKANQgJALAAAXIAACpQAAAWAJALQAKANASAAIAKgBQAMgCAHgKQAJgLAAgWIAAgqIAiAAIAAAoQAAASgEAPQgFAPgIAKQgKAMgNAFQgKAEgNABIgJAAQgTABgOgGgAH7DAIAAjEIAAg7IhSD/IglAAIAAlBIAfAAIAADwIATg5IA+i3IAoAAIAAFBgAFEDAIgNhAIg+AAIgTAAIgNBAIghAAIA+lBIA0AAIA+FBgADrBhIATAAIA0AAIgaiIIgKgxgAgsDAIgMhAIg+AAIgTAAIgNBAIghAAIA+lBIA0AAIA9FBgAiFBhIATAAIA1AAIgbiIIgJgxgAj2DAIAAkgIg8AAIgTAAIAAEgIgkAAIAAlBICXAAIAAFBgAG9iZQgJgDgHgFQgGgHgDgIQgEgIAAgLIAWAAQABANAIAFQAGAFAMABIAKgCQAGgBADgDQAIgFABgNIAWAAQAAALgDAIQgEAIgGAHQgHAFgJADIgLADIgKAAQgLAAgJgDg");
	this.shape.setTransform(54,19.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("ABHDDQAMgBALgEQANgFAJgMQAJgKAFgPQAEgPAAgSIAAgoIATAAIAAAoQAAASgFAPQgEAPgIAKQgKAMgOAFQgNAGgTgBIgJAAgAnkDDQAMgBAKgEQAOgFAKgMQAIgKAEgPQAFgPAAgSIAAgoIATAAIAAAoQAAASgFAPQgEAPgIAKQgKAMgOAFQgOAGgRgBIgKAAgAIADAIAAlBIAUAAIAAFBgAGODAIBSj/IAAA7Ig/DEgAFMDAIg9lBIATAAIA+FBgAC+DAIANhAIATAAIgNBAgAgjDAIg9lBIATAAIA9FBgAixDAIAMhAIATAAIgMBAgAjuDAIAAlBIATAAIAAFBgAlhDAIAAkgIATAAIAAEggAAhCWQgIgLgBgWIAAipQABgXAIgLQALgNASAAIAKABQgMACgIAKQgIALgBAXIAACpQABAWAIALQAIAKAMACIgKABQgSAAgLgNgAoKCWQgIgLgBgWIAAipQABgXAIgLQALgNASAAIAKABQgMACgHAKQgJALAAAXIAACpQAAAWAJALQAHAKAMACIgKABQgSAAgLgNgAGIiBIATAAIAAC3IgTA5gADQBhIAji5IAKAxIgaCIgAigBhIAki5IAJAxIgaCIgACGgWIAAgdQAAgSgEgPQgFgPgJgLQgJgKgNgGQgLgEgMgBIAJgBQATABANAFQAOAGAKAKQAIALAEAPQAFAPAAASIAAAdgAmlgWIAAgdQAAgSgFgPQgEgPgIgLQgKgKgOgGQgKgEgMgBIAKgBQARABAOAFQAOAGAKAKQAIALAEAPQAFAPAAASIAAAdgAG/iWIAMgDQAJgDAGgFQAHgHADgIQAEgIAAgLIATAAQAAALgEAIQgDAIgHAHQgGAFgJADQgKADgLAAIgKAAgAGjixQgHgFgBgNIATAAQABANAHAFQAEADAGABIgKACQgMgBgHgFg");
	this.shape_1.setTransform(56.7,19.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ59, new cjs.Rectangle(0,0,109.9,39.1), null);


(lib.Символ58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AC6ChIAAggQAVABAKgHQAKgHAFgTIAIgVIhKjsIAjAAIA3DAIAJgjIAnidIAlAAIhFD6QgFAUgFAMQgGAOgJAJQgKAJgPAEIgRADIgJAAIgKAAgAFvChIAAgtIAjAAIAAAtgABnChIAAiRIg8AAIgTAAIAACRIgjAAIAAlBIAjAAIAACRIATAAIA8AAIAAiRIAkAAIAAFBgAhTChIAAiRIg9AAIgTAAIAACRIgkAAIAAlBIAkAAIAACRIATAAIA9AAIAAiRIAkAAIAAFBgAkHChIgMhBIg+AAIgTAAIgNBBIghAAIA+lBIA0AAIA9FBgAlgBBIATAAIA1AAIgbiHIgJgygAF0BaIgFhjIAAiXIAkAAIAACXIgFBjg");
	this.shape.setTransform(40.3,16.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("ACzChIARgDQAPgEAKgJQAJgJAGgOQAFgMAFgUIBFj6IATAAIhFD6QgFAUgFAMQgGAOgJAJQgKAJgPAEQgMADgQAAIgIAAgAF4ChIAAgtIATAAIAAAtgABxChIAAlBIATAAIAAFBgAgBChIAAiRIASAAIAACRgAhJChIAAlBIASAAIAAFBgAi9ChIAAiRIATAAIAACRgAj9ChIg9lBIATAAIA9FBgAmLChIANhBIATAAIgNBBgAF0BaIAFhjIAAiXIATAAIAACXIgFBjgAl6BBIAki5IAJAyIgaCHgACvigIATAAIAtCdIgJAjgAgBgPIAAiRIASAAIAACRgAi9gPIAAiRIATAAIAACRg");
	this.shape_1.setTransform(42.9,16.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ58, new cjs.Rectangle(0,0,82.5,32.3), null);


(lib.Символ55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(0,0,0,0.576)","#000000"],[0,0.918],0,0,0,0,0,347.8).s().p("Egv+AYsMAAAgxYMBf8AAAMAAAAxYg");
	this.shape.setTransform(307.1,158.1,1.28,1.209);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ55, new cjs.Rectangle(-86,-33,786.1,382.1), null);


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hand1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ50, new cjs.Rectangle(0,0,60,83), null);


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hand();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ49, new cjs.Rectangle(0,0,50,69), null);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.head();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ48, new cjs.Rectangle(0,0,287,222), null);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.round();
	this.instance.parent = this;
	this.instance.setTransform(92,0,0.478,0.478);

	this.instance_1 = new lib.round();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,2,0.478,0.478);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ46, new cjs.Rectangle(0,0,315.5,267.6), null);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.smoken();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.923,0.923);

	this.instance_1 = new lib.smoken();
	this.instance_1.parent = this;
	this.instance_1.setTransform(330,0,0.923,0.923);

	this.instance_2 = new lib.smoken();
	this.instance_2.parent = this;
	this.instance_2.setTransform(659,0,0.923,0.923);

	this.instance_3 = new lib.smoken();
	this.instance_3.parent = this;
	this.instance_3.setTransform(987,0,0.923,0.923);

	this.instance_4 = new lib.smoken();
	this.instance_4.parent = this;
	this.instance_4.setTransform(1316,0,0.923,0.923);

	this.instance_5 = new lib.smoken();
	this.instance_5.parent = this;
	this.instance_5.setTransform(1646,0,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ41, new cjs.Rectangle(0,0,2107.3,251), null);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.smoken();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ37, new cjs.Rectangle(0,0,500,272), null);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.smoke_2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ36, new cjs.Rectangle(0,0,340,240), null);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.smoke_3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ35, new cjs.Rectangle(0,0,340,240), null);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.smoke_4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ34, new cjs.Rectangle(0,0,340,240), null);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.smoke_3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ33, new cjs.Rectangle(0,0,340,240), null);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.smoke_2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ32, new cjs.Rectangle(0,0,340,240), null);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.smoke_0();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ31, new cjs.Rectangle(0,0,340,240), null);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.back();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ30, new cjs.Rectangle(0,0,935,467), null);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.round();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ29, new cjs.Rectangle(0,0,468,556), null);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bless();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ25, new cjs.Rectangle(0,0,228,300), null);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1,3,true).p("AWWzcIDwEsAaupSIC0C+AXmlEIC+DIEAkGgKiIBQBkEAg+gGoIBaCgEAjygTwIEiH+Ac6zwIC+DcAmFpSIDwE2ANwn4ICWC0AGQyCIEsFKAEinGICWDmAkDzmIFTGuABaCRIC+FoAiBShIEXDcAISNNIFoHWEAoUAE7ICqC0Ae8D1IC0EOEAlMAL9IDIDcEAjoACHIB4CMAVaMRIC+EEAUeB9IEiFUEAiOATJIBuCgANmyCIFAFKALQAFID6FKAxL1eIDmFKEggMgGyIDIFoA4Yp6ICgE2A7MhyIBQCfAp1l2ICCC+AyloqIC0FoA4sy+IDwEsEgs2gTmICgEOEgn2gIgIBuDSEgtygIMICWEsEgjAACvIA8B4EgooAGfIDIGGEgpkAP3ICCEOAszEJIDcFyA3wFFIB4C+A+AMvIBaDSA5UKPIDSFUAwPL9ICqFAAz2AtIDdGuEgkGgTIID6GQEgwIAAFIB4FyAnzCbIF8IIEAqggV8IFpHCEAmwgFOIGbI5");
	this.shape.setTransform(372.1,190.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,1,1,3,true).p("EAhNgTIIDSFAAYTj+IFAGZAbbrAIFoGGAZP0OIGGH+ASNuwIDIDwAmyliIFUHpAJxmUIGGGZAjqvEIFTHMACvxQIGaHWAhyINIDbEsAmyTdIBQB4ABfS1IDcD6AJJQLIC+DcEAgvAFZIDIC0ATTGLIFeH0AWvV9ICqCMEAiJANNIHqJsAbvTdIC0EEAcXHlIBuCWEAkVABVIFAGQANrKjIFAHMACbjqIFyHfA75w8IB4CqAumpIIFKGaAw8xQIFyGaA1zqEIFpGuA3hhUIDdDREgglgOSIEEFyEgiTgTcIlAloEgs7gTcImuloEgoZgQAIC+E2Egt3gN0IDSEsEgufgEIICqEEEgnxAH5IDcF8Egq5AO7IFeIwEgvHAEnIC+FeEgvbASXIDcGuAwoHbIGaHWA6LFjIFAF8AxkP3IDIEiA8DMvIE2GGEghXARbIDmFeAweAtICCCCEgi7gHaIHCH9EglvgBUIFyH9AqYETIEiFeEAqRAMvIJZKAEApVgKYIFzJiEAppgSMIC/EEEAkzgGyIFyHB");
	this.shape_1.setTransform(376.6,180.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(63.1,49,618.2,283.1);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.train();
	this.instance.parent = this;
	this.instance.setTransform(-91,0,1.403,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(-91,0,317,127), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.botik();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(0,0,105,76), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.headgirl();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(0,0,112,127), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.leg();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(0,0,124,126), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.leg2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(0,0,167,93), null);


(lib.Символ53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgYAZQgLgLABgOQgBgNALgLQALgLANABQAOgBALALQALALgBANQABAOgLALQgLALgOgBQgNABgLgLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ53, new cjs.Rectangle(-3.5,-3.5,7.1,7.1), null);


(lib.Символ92 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ93();
	this.instance.parent = this;
	this.instance.setTransform(-22.2,14,1,1,0,0,0,11,14);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-6},7,cjs.Ease.get(-1)).to({x:42.8},7,cjs.Ease.get(1)).to({x:8.1},8,cjs.Ease.get(-1)).to({x:-22.2},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.4,-2,15.5,30.6);


(lib.Символ91 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ92();
	this.instance.parent = this;
	this.instance.setTransform(52.4,-19.4,1,1,0,0,0,11,14);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgdBEIAAiHIAdAAQAHAAAHACQAFACAEAFQADAEACAGQACAGAAAIIAAARQAAAIgCAGQgCAFgDAEQgFAEgFACQgGADgIAAIgNAAIAAA1gAgOABIANAAQAIAAAEgDQAEgFAAgJIAAgTQAAgJgEgFQgDgEgIAAIgOAAg");
	this.shape.setTransform(94.2,8.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgNBDQgFgDgEgEQgEgFgCgGQgCgGAAgIIAAhFQAAgIACgHQACgGAEgEQAEgFAFgCQAGgDAHABQAIgBAGADQAGACAEAFQADAEACAGQACAHAAAIIAABFQAAAIgCAGQgCAGgDAFQgEAEgGADQgGACgIAAQgHAAgGgCgAgLgyQgEAFAAAKIAABHQAAAKAEAEQAEAGAHAAQAIAAAEgGQAEgEAAgKIAAhHQAAgKgEgFQgEgFgIAAQgHAAgEAFg");
	this.shape_1.setTransform(86.6,8.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgNBDQgFgDgEgEQgEgFgCgGQgCgGAAgIIAAhFQAAgIACgHQACgGAEgEQAEgFAFgCQAGgDAHABQAIgBAGADQAFACAEAFQAEAEACAGQACAHAAAIIAAAMIgPAAIAAgNQAAgKgEgFQgEgFgIAAQgHAAgEAFQgEAFAAAKIAABHQAAAKAEAEQAEAGAHAAQAIAAAEgGQAEgEAAgKIAAgSIAPAAIAAARQAAAIgCAGQgCAGgEAFQgEAEgFADQgGACgIAAQgHAAgGgCg");
	this.shape_2.setTransform(79.2,8.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgdBEIAAiHIAdAAQAIAAAFACQAGACAEAFQAEAEACAGQABAGAAAIIAAARQAAAIgBAGQgCAFgEAEQgFAEgFACQgHADgHAAIgNAAIAAA1gAgOABIANAAQAIAAAEgDQAEgFAAgJIAAgTQAAgJgDgFQgFgEgHAAIgOAAg");
	this.shape_3.setTransform(72,8.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgbBEIAAgNQAIAAAFgDQAEgDACgIIADgJIgfhjIAPAAIAOAvIAIAiIAIgiIAMgvIAQAAIgdBpQgCAJgCAFQgDAGgDADQgEAEgGACIgLABIgEAAg");
	this.shape_4.setTransform(64.2,8.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AASBEIgcg7IgIAOIAAAtIgPAAIAAiHIAPAAIAABCIAkhCIAOAAIghA+IAjBJg");
	this.shape_5.setTransform(56.4,8.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AASBEIAAhrIgOAsIgUA/IgPAAIAAiHIANAAIAABlIAMglIAVhAIARAAIAACHg");
	this.shape_6.setTransform(45.2,8.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAcBNIAAgSIg3AAIAAASIgPAAIAAgfIAJAAQADgEACgFIABgMIAFhmIA2AAIAAB7IALAAIAAAfgAgMAZQAAAIgCAFQgBAEgDAEIAjAAIAAhsIgYAAg");
	this.shape_7.setTransform(36.4,9.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgbBEIAAiHIA3AAIAAAOIgoAAIAAAuIAhAAIAAANIghAAIAAAwIAoAAIAAAOg");
	this.shape_8.setTransform(28.3,8.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgeBEIAAiHIAeAAQAHAAAGACQAFACAEADQADAEACAGQACAFAAAIIAAAGQAAAMgEAGQgCAEgDACQgDACgEACQAFABADACQAEACACAEQACAEABAEIABALIAAALQAAAIgCAGQgCAGgEAEQgDAEgGACQgGACgIAAgAgPA2IAPAAQAIAAAEgEQAEgFAAgJIAAgMQAAgGgBgEQgBgEgDgCQgCgCgEgBIgHgBIgNAAgAgPgJIALAAQAJAAAEgEIAEgGIABgIIAAgIQAAgKgEgEQgDgEgHAAIgPAAg");
	this.shape_9.setTransform(21,8.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAWBEIgFgbIgiAAIgFAbIgOAAIAaiHIAVAAIAaCHgAAOAcIgOhOIgPBOIAdAAg");
	this.shape_10.setTransform(12.9,8.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AARBEIAAg9IghAAIAAA9IgPAAIAAiHIAPAAIAAA9IAhAAIAAg9IAPAAIAACHg");
	this.shape_11.setTransform(4.9,8.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ91, new cjs.Rectangle(0,-35.4,98.5,56.6), null);


(lib.Символ87 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 90
	this.instance = new lib.Символ90();
	this.instance.parent = this;
	this.instance.setTransform(118.9,-4.6,1,1,0,0,0,69.2,16.4);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).wait(41));

	// Символ 89
	this.instance_1 = new lib.Символ89();
	this.instance_1.parent = this;
	this.instance_1.setTransform(119.2,42.4,1,1,0,0,0,155.3,21.6);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({alpha:1},9).wait(37));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(49.7,-21,138.3,32.8);


(lib.Символ86 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 85
	this.instance = new lib.Символ85();
	this.instance.parent = this;
	this.instance.setTransform(376.1,198.5,0.837,0.789,0,7.2,-166.1,316.8,223.2);
	this.instance.alpha = 0.109;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:249.5},49,cjs.Ease.get(1)).wait(1));

	// Символ 85
	this.instance_1 = new lib.Символ85();
	this.instance_1.parent = this;
	this.instance_1.setTransform(364.2,304.7,1.082,1.082,0,0,0,317.1,223.5);
	this.instance_1.alpha = 0.109;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:324.7},49,cjs.Ease.get(1)).wait(1));

	// Символ 88
	this.instance_2 = new lib.Символ88();
	this.instance_2.parent = this;
	this.instance_2.setTransform(333.1,423.7,1,1,0,0,0,333.1,179);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-40,707.1,642.8);


(lib.Символ84 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(5,1,1).p("Aoln4IRLAAIAAPxIxLAAg");
	this.shape.setTransform(-25,481.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AolH5IAAvxIRLAAIAAPxg");
	this.shape_1.setTransform(-25,481.6);

	this.instance = new lib.Символ87();
	this.instance.parent = this;
	this.instance.setTransform(254.1,165.6,1,1,0,0,0,47,25);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance}]},244).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance}]},47).to({state:[{t:this.instance}]},4).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(244).to({_off:false},0).to({alpha:1},5).wait(47).to({alpha:0},4).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ86();
	this.instance_1.parent = this;
	this.instance_1.setTransform(343.5,56.7,1,1,0,0,0,353.5,301.4);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(244).to({_off:false},0).to({alpha:1},5).wait(47).to({alpha:0},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.5,428.6,115,106.1);


(lib.Символ78 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ82();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,0,0,0,108.5,108.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:602.4,y:0.1},33).to({scaleX:1,scaleY:1,rotation:720,y:0},16).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-111,-111,222.1,222.1);


(lib.Символ75 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ73();
	this.instance.parent = this;
	this.instance.setTransform(42.5,47.5,1,1,0,0,0,42.5,47.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ75, new cjs.Rectangle(0,0,85,95), null);


(lib.Символ66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ63();
	this.instance.parent = this;
	this.instance.setTransform(26.1,28.6,0.78,1,-90,0,0,36.5,24.1);

	this.instance_1 = new lib.Символ64();
	this.instance_1.parent = this;
	this.instance_1.setTransform(24.1,32.8,0.78,1,-90,0,0,36.5,24.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ66, new cjs.Rectangle(0,0,50.3,61.3), null);


(lib.Символ65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ63();
	this.instance.parent = this;
	this.instance.setTransform(36.6,28.1,1,1,0,0,0,36.6,24.1);

	this.instance_1 = new lib.Символ64();
	this.instance_1.parent = this;
	this.instance_1.setTransform(37.6,24.1,1,1,0,0,0,36.6,24.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ65, new cjs.Rectangle(0,0,74.1,52.3), null);


(lib.Символ52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 61
	this.instance = new lib.Символ61();
	this.instance.parent = this;
	this.instance.setTransform(-130.9,65.3,1,1,0,0,0,19.4,19.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:26.1},14,cjs.Ease.get(1)).wait(35).to({x:100.6,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(68));

	// Символ 60
	this.instance_1 = new lib.Символ60();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-95.3,18.3,1,1,0,0,0,56,19.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({x:61.7},14,cjs.Ease.get(1)).wait(35).to({x:136.2,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(64));

	// Символ 59
	this.instance_2 = new lib.Символ59();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-96.4,18.4,1,1,0,0,0,54.9,19.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(64).to({_off:false},0).to({x:60.6},14,cjs.Ease.get(1)).wait(35).to({x:135.1,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(4));

	// Символ 58
	this.instance_3 = new lib.Символ58();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-110.8,68.4,1,1,0,0,0,41.2,16.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(68).to({_off:false},0).to({x:46.2},14,cjs.Ease.get(1)).wait(35).to({x:120.8,alpha:0},10,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150.3,46.1,38.9,38.5);


(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ50();
	this.instance.parent = this;
	this.instance.setTransform(30,41.5,1,1,0,0,0,30,41.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ51, new cjs.Rectangle(0,0,60,83), null);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ48();
	this.instance.parent = this;
	this.instance.setTransform(142.5,111,1,1,0,-0.6,0,143.5,111);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({skewX:0,x:143.5,y:111.1},4,cjs.Ease.get(-1)).to({skewX:0.6,x:144.6,y:111},5,cjs.Ease.get(1)).to({skewX:0,x:143.6},5,cjs.Ease.get(-1)).to({skewX:-0.6,x:142.5},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.1,0,289.2,222);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ46();
	this.instance.parent = this;
	this.instance.setTransform(157.8,133.8,1,1,0,0,0,157.8,133.8);
	this.instance.alpha = 0.711;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ45, new cjs.Rectangle(0,0,315.5,267.6), null);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ45();
	this.instance.parent = this;
	this.instance.setTransform(157.8,133.8,1,1,0,0,0,157.8,133.8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({alpha:1},0).to({alpha:0},5).wait(4).to({alpha:1},0).to({alpha:0},5).to({_off:true},1).wait(20).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,315.5,267.6);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ44();
	this.instance.parent = this;
	this.instance.setTransform(137.8,101.8,1,1,0,0,0,157.8,133.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ47();
	this.instance_1.parent = this;
	this.instance_1.setTransform(143.5,111,1,1,0,0,0,143.5,111);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ42, new cjs.Rectangle(-20,-32,315.5,267.6), null);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ41();
	this.instance.parent = this;
	this.instance.setTransform(1078.7,125.5,1,1,0,0,0,1053.7,125.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:1381.2},91).to({x:1407.8},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(25,0,2107.3,251);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ37();
	this.instance.parent = this;
	this.instance.setTransform(-819.3,136,1,1,0,0,0,250,136);
	this.instance.compositeOperation = "lighter";

	this.instance_1 = new lib.Символ37();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-462.1,136,1,1,0,0,0,250,136);
	this.instance_1.compositeOperation = "lighter";

	this.instance_2 = new lib.Символ37();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-105.1,136,1,1,0,0,0,250,136);
	this.instance_2.compositeOperation = "lighter";

	this.instance_3 = new lib.Символ37();
	this.instance_3.parent = this;
	this.instance_3.setTransform(250,136,1,1,0,0,0,250,136);
	this.instance_3.compositeOperation = "lighter";

	this.instance_4 = new lib.Символ37();
	this.instance_4.parent = this;
	this.instance_4.setTransform(607.2,136,1,1,0,0,0,250,136);
	this.instance_4.compositeOperation = "lighter";

	this.instance_5 = new lib.Символ37();
	this.instance_5.parent = this;
	this.instance_5.setTransform(964.3,136,1,1,0,0,0,250,136);
	this.instance_5.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ39, new cjs.Rectangle(-1069.3,0,2283.6,272), null);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ39();
	this.instance.parent = this;
	this.instance.setTransform(545.4,164,1,1,0,0,0,607.1,136);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:897},225).to({x:903.2},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1131.1,28,2283.6,272);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ29();
	this.instance.parent = this;
	this.instance.setTransform(234,278.1,1,1,0,0,0,234,278.1);
	this.instance.alpha = 0.262;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ28, new cjs.Rectangle(0,0,468,556), null);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ25();
	this.instance.parent = this;
	this.instance.setTransform(114,150,1,1,0,0,0,114,150);
	this.instance.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,34);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ27, new cjs.Rectangle(-36,-36,304,376), null);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ28();
	this.instance.parent = this;
	this.instance.setTransform(113.3,237.5,1.093,1.563,0,0,0,234,278.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},4).wait(4).to({alpha:1},0).to({alpha:0},6).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ27();
	this.instance_1.parent = this;
	this.instance_1.setTransform(114,150,1,1,0,0,0,114,150);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0},4).wait(2).to({alpha:1},0).wait(2).to({alpha:0.238},0).wait(1).to({alpha:1},0).to({alpha:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-142.4,-197.2,511.4,869.2);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 26
	this.instance = new lib.Символ26();
	this.instance.parent = this;
	this.instance.setTransform(482.6,-0.6,1.402,1.402,-79.3,0,0,114,150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:true},1).wait(85));

	// Символ 26
	this.instance_1 = new lib.Символ26();
	this.instance_1.parent = this;
	this.instance_1.setTransform(887.1,19.7,1.402,1.402,0,0,0,114,150);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).wait(14).to({_off:true},1).wait(71));

	// Символ 26
	this.instance_2 = new lib.Символ26();
	this.instance_2.parent = this;
	this.instance_2.setTransform(64.4,1.8,1.297,1.297,-121.9,0,0,114,149.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(28).to({_off:false},0).wait(14).to({_off:true},1).wait(57));

	// Символ 26
	this.instance_3 = new lib.Символ26();
	this.instance_3.parent = this;
	this.instance_3.setTransform(624,80,1,1,0,0,0,114,150);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(42).to({_off:false},0).wait(14).to({_off:true},1).wait(43));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.4,-442.1,1330.4,930.2);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ21();
	this.instance.parent = this;
	this.instance.setTransform(314.1,150.6,1,1,0,0,0,365.1,220.6);
	this.instance.alpha = 0.051;

	this.instance_1 = new lib.Символ21();
	this.instance_1.parent = this;
	this.instance_1.setTransform(301.1,170.6,1,1,0,0,0,365.1,220.6);
	this.instance_1.alpha = 0.051;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(0,-20,629.2,301.1), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ51();
	this.instance.parent = this;
	this.instance.setTransform(30,41.5,1,1,0,0,0,30,41.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-6.1,x:34.9,y:42.6},6,cjs.Ease.get(-1)).to({rotation:-12.5,x:39.7,y:43.6},6,cjs.Ease.get(1)).to({regX:30.1,rotation:-6.1,x:35,y:42.5},7,cjs.Ease.get(-1)).to({regX:30,rotation:0,x:30,y:41.5},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,60,83);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ49();
	this.instance.parent = this;
	this.instance.setTransform(25,34.5,1,1,0,0,0,25,34.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:24.9,scaleX:1,scaleY:1,rotation:-11.1,x:32.1,y:37.5},4,cjs.Ease.get(-1)).to({regX:25,scaleX:1,scaleY:1,rotation:-25.2,x:41.3,y:41},5,cjs.Ease.get(0.97)).to({regX:25.1,scaleX:1,scaleY:1,rotation:-10,x:31.7,y:37.2},6,cjs.Ease.get(-1)).to({regX:25,scaleX:1,scaleY:1,rotation:0,x:25,y:34.5},4,cjs.Ease.get(0.97)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,50,69);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ31();
	this.instance.parent = this;
	this.instance.setTransform(3,137,1,1,0,0,0,170,120);
	this.instance.filters = [new cjs.BlurFilter(28, 28, 1)];
	this.instance.cache(-2,-2,344,244);

	this.instance_1 = new lib.Символ32();
	this.instance_1.parent = this;
	this.instance_1.setTransform(7,147,1,1,0,0,0,170,120);
	this.instance_1.filters = [new cjs.BlurFilter(28, 28, 1)];
	this.instance_1.cache(-2,-2,344,244);

	this.instance_2 = new lib.Символ33();
	this.instance_2.parent = this;
	this.instance_2.setTransform(8,143,1,1,0,0,0,170,120);
	this.instance_2.filters = [new cjs.BlurFilter(27, 27, 1)];
	this.instance_2.cache(-2,-2,344,244);

	this.instance_3 = new lib.Символ34();
	this.instance_3.parent = this;
	this.instance_3.setTransform(7,140,1,1,0,0,0,170,120);
	this.instance_3.filters = [new cjs.BlurFilter(26, 26, 1)];
	this.instance_3.cache(-2,-2,344,244);

	this.instance_4 = new lib.Символ35();
	this.instance_4.parent = this;
	this.instance_4.setTransform(8,143,1,1,0,0,0,170,120);
	this.instance_4.filters = [new cjs.BlurFilter(24, 24, 1)];
	this.instance_4.cache(-2,-2,344,244);

	this.instance_5 = new lib.Символ36();
	this.instance_5.parent = this;
	this.instance_5.setTransform(7,147,1,1,0,0,0,170,120);
	this.instance_5.filters = [new cjs.BlurFilter(24, 24, 1)];
	this.instance_5.cache(-2,-2,344,244);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-181,3,372,272);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ30();
	this.instance.parent = this;
	this.instance.setTransform(467.5,233.5,1,1,0,0,0,467.5,233.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:234},2).to({y:233.5},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,935,467);


(lib.Символ51_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance_1 = new lib.Символ53();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.59,scaleY:0.59},4).to({scaleX:1,scaleY:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.5,-3.5,7.1,7.1);


(lib.Символ83 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ78();
	this.instance.parent = this;
	this.instance.setTransform(-14.3,118.9,0.318,0.759,0,0,0,85.2,85.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.28,scaleY:0.67,x:38.7,y:111.3},9,cjs.Ease.get(-1)).to({regY:85,scaleX:0.24,scaleY:0.56,x:97.7,y:102.8},10,cjs.Ease.get(1)).to({regX:85.4,regY:85.1,scaleX:0.28,scaleY:0.66,x:41.8,y:110.9},10,cjs.Ease.get(-1)).to({regX:85.2,regY:85.2,scaleX:0.32,scaleY:0.76,x:-14.3,y:118.9},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.7,-29.9,70.7,168.5);


(lib.Символ74 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ66();
	this.instance.parent = this;
	this.instance.setTransform(25.1,30.7,1,1,0,0,0,25.1,30.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ74, new cjs.Rectangle(0,0,50.3,61.3), null);


(lib.Символ72 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ65();
	this.instance.parent = this;
	this.instance.setTransform(37.1,26.1,1,1,0,0,0,37.1,26.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ72, new cjs.Rectangle(0,0,74.1,52.3), null);


(lib.Символ69 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 65
	this.instance = new lib.Символ65();
	this.instance.parent = this;
	this.instance.setTransform(39.5,52.3,0.836,0.838,0,-18.7,161.3,37,26.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:26.3,scaleY:0.84,skewX:-18.6,skewY:161.4,x:50.2,y:47.9},4,cjs.Ease.get(-1)).to({regY:26.2,scaleY:0.84,skewX:-18.7,skewY:161.3,x:63.5,y:42.3},5,cjs.Ease.get(1)).to({regX:36.9,scaleY:0.84,skewX:-18.6,skewY:161.4,x:51.6,y:47.3},5,cjs.Ease.get(-1)).to({regX:37,scaleY:0.84,skewX:-18.7,skewY:161.3,x:39.5,y:52.3},5,cjs.Ease.get(1)).wait(1));

	// Символ 70
	this.instance_1 = new lib.Символ70();
	this.instance_1.parent = this;
	this.instance_1.setTransform(74.7,50.5,1,1,0,0,0,47.5,46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:94.1,y:42},4,cjs.Ease.get(-1)).to({x:115.7,y:26.4},5,cjs.Ease.get(1)).to({x:95.2,y:41.5},5,cjs.Ease.get(-1)).to({x:74.7,y:49.5},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,4,119.2,93);


(lib.Символ68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 72
	this.instance = new lib.Символ72();
	this.instance.parent = this;
	this.instance.setTransform(100.2,48.3,1,1,0,0,0,37.1,26.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:107.3},4,cjs.Ease.get(-1)).to({x:116.2},5,cjs.Ease.get(1)).to({x:108.2},5,cjs.Ease.get(-1)).to({x:100.2},5,cjs.Ease.get(1)).wait(1));

	// Символ 71
	this.instance_1 = new lib.Символ71();
	this.instance_1.parent = this;
	this.instance_1.setTransform(42.5,52.5,1,1,0,0,0,42.5,47.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:58.5,y:50.3},4,cjs.Ease.get(-1)).to({x:78.5,y:47.5},5,cjs.Ease.get(1)).to({x:60.5,y:50},5,cjs.Ease.get(-1)).to({x:42.5,y:52.5},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,5,137.2,95);


(lib.Символ67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 75
	this.instance = new lib.Символ75();
	this.instance.parent = this;
	this.instance.setTransform(42.5,99,1,1,0,0,0,42.5,47.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:85.6},4,cjs.Ease.get(-1)).to({y:69},5,cjs.Ease.get(1)).to({y:84},5,cjs.Ease.get(-1)).to({y:99},5,cjs.Ease.get(1)).wait(1));

	// Символ 74
	this.instance_1 = new lib.Символ74();
	this.instance_1.parent = this;
	this.instance_1.setTransform(37.2,40.7,1,1,0,0,0,25.1,30.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleY:0.9,y:34.9},4,cjs.Ease.get(-1)).to({scaleY:0.77,y:27.7},5,cjs.Ease.get(1)).to({scaleY:0.89,y:34.2},5,cjs.Ease.get(-1)).to({scaleY:1,y:40.7},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,10,85,136.5);


(lib.Символ62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// Слой 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4F230E").s().p("AkcHgIAAh4IGjAAIAAphIA8AAIAAJhIBaAAIAAB4gAAFFeIAApXIBQAAIAAJXgAkIFUIAApXIBaAAIAAJXgAhyEOIAArtIBQAAIAALtg");
	this.shape.setTransform(437.7,-279);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(3));

	// Символ 69
	this.instance = new lib.Символ68();
	this.instance.parent = this;
	this.instance.setTransform(35.1,73.5,1,1,0,0,0,71.1,47.5);

	this.instance_1 = new lib.Символ67();
	this.instance_1.parent = this;
	this.instance_1.setTransform(177.5,178.8,1,1,0,0,0,42.5,68.2);

	this.instance_2 = new lib.Символ69();
	this.instance_2.parent = this;
	this.instance_2.setTransform(258.4,53.5,1,1,0,0,0,69.6,46.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(409.2,-327,57,96.1);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ23();
	this.instance.parent = this;
	this.instance.setTransform(505.6,140.2,1,1,0,0,0,416.7,121.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ38();
	this.instance_1.parent = this;
	this.instance_1.setTransform(87.2,68.4,1,1,0,0,0,250,136);
	this.instance_1.alpha = 0.551;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(467.5,233.5,1,1,0,0,0,467.5,233.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(-1293.9,-423.3,2650.7,930.2), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ51_1();
	this.instance.parent = this;
	this.instance.setTransform(46.3,75.8,1.493,1.493);

	this.instance_1 = new lib.arm();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(0,0,119,81.1), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ51_1();
	this.instance.parent = this;
	this.instance.setTransform(109.7,58.3,1.493,1.493);

	this.instance_1 = new lib.body();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(0,0,166,154), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ51_1();
	this.instance.parent = this;
	this.instance.setTransform(102.1,56.2,1.493,1.493);

	this.instance_1 = new lib.skirt();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(0,0,287,171), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hand-1.png
	this.instance = new lib.Символ17();
	this.instance.parent = this;
	this.instance.setTransform(103,346.5,1,1,0,0,0,30,41.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:41.6,rotation:-3.3,x:103.8,y:349.1},9,cjs.Ease.get(-1)).to({regX:30.1,regY:41.5,rotation:-7.2,x:104.8,y:351.7},10,cjs.Ease.get(1)).to({regY:41.6,rotation:-3.5,x:103.9,y:349.2},10,cjs.Ease.get(-1)).to({regX:30,regY:41.5,rotation:0,x:103,y:346.5},10,cjs.Ease.get(1)).wait(1));

	// headgirl.png
	this.instance_1 = new lib.Символ12();
	this.instance_1.parent = this;
	this.instance_1.setTransform(177,138.6,1,1,0,0,0,56,63.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:56.1,rotation:-5.8,x:166.5,y:143.3},9,cjs.Ease.get(-1)).to({regX:56,rotation:-12.2,x:154.7,y:148.6},10,cjs.Ease.get(1)).to({regY:63.6,rotation:-6,x:165.8,y:143.8},10,cjs.Ease.get(-1)).to({regY:63.5,rotation:0,x:177,y:138.6},10,cjs.Ease.get(1)).wait(1));

	// botik.png
	this.instance_2 = new lib.Символ13();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-68.6,422,1,1,0,0,0,52.5,38);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:4,x:-65.5,y:418.5},9,cjs.Ease.get(-1)).to({regY:38.1,rotation:8.7,x:-62.2,y:414.6},10,cjs.Ease.get(1)).to({rotation:4.3,x:-65.4,y:418.3},10,cjs.Ease.get(-1)).to({regY:38,rotation:0,x:-68.6,y:422},10,cjs.Ease.get(1)).wait(1));

	// body.png
	this.instance_3 = new lib.Символ14();
	this.instance_3.parent = this;
	this.instance_3.setTransform(210,245,1,1,0,0,0,83,77);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-1.8,x:207.2,y:247.4},9,cjs.Ease.get(-1)).to({rotation:-4,x:204.1,y:250.1},10,cjs.Ease.get(1)).to({rotation:-1.8,x:207.1,y:247.6},10,cjs.Ease.get(-1)).to({regY:77.1,rotation:0,x:209.8,y:245.3},7,cjs.Ease.get(1)).to({regY:77,x:210,y:245},3).wait(1));

	// arm.png
	this.instance_4 = new lib.Символ15();
	this.instance_4.parent = this;
	this.instance_4.setTransform(90.7,256.6,1,1,0,0,0,59.5,35);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:59.6,regY:35.1,rotation:-3,x:88.9,y:260.3},9,cjs.Ease.get(-1)).to({regX:59.5,rotation:-6.7,x:86.7,y:264.3},10,cjs.Ease.get(1)).to({rotation:-3.3,x:88.7,y:260.5},10,cjs.Ease.get(-1)).to({regY:35,rotation:0,x:90.7,y:256.6},10,cjs.Ease.get(1)).wait(1));

	// leg2.png
	this.instance_5 = new lib.Символ10();
	this.instance_5.parent = this;
	this.instance_5.setTransform(137.5,321.6,1,1,0,0,0,83.5,46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({skewY:0.3,x:135.5,y:323.8},9,cjs.Ease.get(-1)).to({regY:46.6,skewY:0.9,x:133.1,y:326.4},10,cjs.Ease.get(1)).to({skewY:0.3,x:135.4,y:324},10,cjs.Ease.get(-1)).to({skewY:0,x:137.2,y:321.7},7,cjs.Ease.get(1)).to({regY:46.5,x:137.5,y:321.6},3).wait(1));

	// hand.png
	this.instance_6 = new lib.Символ16();
	this.instance_6.parent = this;
	this.instance_6.setTransform(12.4,284.4,1,1,0,0,0,25,34.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:10.8,y:292.6},9,cjs.Ease.get(-1)).to({x:9,y:301.6},10,cjs.Ease.get(1)).to({x:10.7,y:293},10,cjs.Ease.get(-1)).to({x:12.4,y:284.4},10,cjs.Ease.get(1)).wait(1));

	// leg.png
	this.instance_7 = new lib.Символ11();
	this.instance_7.parent = this;
	this.instance_7.setTransform(8,341.1,1,1,0,0,0,62,63);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleX:0.98,scaleY:1,skewX:-2,x:8.9,y:341},9,cjs.Ease.get(-1)).to({regY:63.1,scaleX:0.96,scaleY:1,skewX:-4.5,skewY:-0.3,x:9.6,y:340.8},10,cjs.Ease.get(1)).to({scaleX:0.98,scaleY:1,skewX:-2.3,skewY:0,x:8.7,y:341},10,cjs.Ease.get(-1)).to({regY:63,scaleX:1,scaleY:1,skewX:0,x:8,y:341.1},10,cjs.Ease.get(1)).wait(1));

	// skirt.png
	this.instance_8 = new lib.Символ9();
	this.instance_8.parent = this;
	this.instance_8.setTransform(215.8,388.3,1,1,0,0,0,143.5,85.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:143.6,skewX:-0.8,x:214.6},9,cjs.Ease.get(-1)).to({regX:143.5,skewX:-1.8,x:213.2},10,cjs.Ease.get(1)).to({regX:143.6,skewX:-0.8,x:214.6},10,cjs.Ease.get(-1)).to({skewX:0,x:215.7},7,cjs.Ease.get(1)).to({regX:143.5,x:215.8},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,75.1,480.4,398.7);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ4();
	this.instance.parent = this;
	this.instance.setTransform(337,181,1,0.431,0,0,0,170,120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(-14,122.7,372,136), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ6();
	this.instance.parent = this;
	this.instance.setTransform(170,120,1,1,0,0,0,170,120);
	this.instance.alpha = 0.719;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(-14,122.7,372,136), null);


(lib.Символ53_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.parent = this;
	this.instance.setTransform(286.5,102.9,0.757,0.757,0,0,0,257.5,211);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ53_1, new cjs.Rectangle(0,0,363.5,301.7), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ42();
	this.instance.parent = this;
	this.instance.setTransform(143.5,111,1,1,0,0,0,143.5,111);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(140.1,-84,1,1,0,0,0,170,120);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(-43.9,-81.3,371,316.9), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// head.png
	this.instance = new lib.Символ20();
	this.instance.parent = this;
	this.instance.setTransform(261.5,111,1,1,0,0,0,143.5,111);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.33,scaleY:1.33,x:262.6,y:119.3},228).to({regY:110.9,scaleX:2.51,scaleY:2.51,rotation:-1.7,x:278.6,y:148},26,cjs.Ease.get(-1)).wait(46));

	// train.png
	this.instance_1 = new lib.Символ19();
	this.instance_1.parent = this;
	this.instance_1.setTransform(113,76.5,1,1,0,0,0,113,63.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.09,x:169},228).to({scaleX:1.09,x:174},26,cjs.Ease.get(-1)).wait(46));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91,-81.3,537.1,316.9);


(lib.Символ54 = function(mode,startPosition,loop) {
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

	// Слой 1
	this.instance = new lib.Символ53_1();
	this.instance.parent = this;
	this.instance.setTransform(181.8,150.8,1,1,0,0,0,181.8,150.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.13,scaleY:1.13,x:166.8,y:162.8},9).to({scaleX:1,scaleY:1,x:181.8,y:150.8},10).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ55();
	this.instance_1.parent = this;
	this.instance_1.setTransform(100.5,140,1,1,0,0,0,307.1,158.1);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},9).to({alpha:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-292.6,-51.1,786.1,382.1);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.parent = this;
	this.instance.setTransform(1104.5,195.1,1,1,0,0,0,202.5,111);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(811,2.7,537.1,316.9), null);


// stage content:
(lib.traingirl600300 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.pric.alpha=0;
		
		
		this.cursor = "none";
		this.pric.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor_2.bind(this));
		
		function fl_CustomMouseCursor_2() {
			this.pric.x = stage.mouseX/window.devicePixelRatio;
			this.pric.y = stage.mouseY/window.devicePixelRatio;
			
		}
		
		
		stage.canvas.addEventListener("mouseover", fl_Clickover.bind(this));
		
		function fl_Clickover()
		{
		    this.girl.gotoAndPlay(1);
			this.pric.alpha=1;
			this.pric2.alpha=0;
			this.cur.alpha=0;
		
		}
		
		stage.canvas.addEventListener("mouseout", fl_Clickout.bind(this));
		
		function fl_Clickout()
		{
		    this.girl.gotoAndPlay(11);
			this.pric.alpha=0;
			this.pric2.alpha=1;
			this.cur.alpha=1;
		
		}
		
		//---------------
		
		this.bt1.addEventListener("mouseover", fl_Clickover1.bind(this));
		
		function fl_Clickover1()
		{
		    this.hand.gotoAndStop(1);
		
		}
		
		this.bt1.addEventListener("mouseout", fl_Clickout1.bind(this));
		
		function fl_Clickout1()
		{
		    this.hand.gotoAndStop(0);
		
		}
		
		//---------------
		//---------------
		
		this.bt2.addEventListener("mouseover", fl_Clickover2.bind(this));
		
		function fl_Clickover2()
		{
		    this.hand.gotoAndStop(2);
		
		}
		
		this.bt2.addEventListener("mouseout", fl_Clickout2.bind(this));
		
		function fl_Clickout2()
		{
		    this.hand.gotoAndStop(0);
		
		}
		
		//---------------
		//---------------
		
		this.bt3.addEventListener("mouseover", fl_Clickover3.bind(this));
		
		function fl_Clickover3()
		{
		    this.hand.gotoAndStop(3);
		
		}
		
		this.bt3.addEventListener("mouseout", fl_Clickout3.bind(this));
		
		function fl_Clickout3()
		{
		    this.hand.gotoAndStop(0);
		
		}
		
		//---------------
		
		
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		
		stage.canvas.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 11
	this.instance = new lib.Символ84();
	this.instance.parent = this;
	this.instance.setTransform(309.1,155.1,1,1,0,0,0,333.1,179);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 12
	this.cur = new lib.Символ91();
	this.cur.parent = this;
	this.cur.setTransform(65.2,283.8,1,1,0,0,0,49.2,10.6);

	this.timeline.addTween(cjs.Tween.get(this.cur).wait(1));

	// Слой 10
	this.pric2 = new lib.Символ83();
	this.pric2.parent = this;
	this.pric2.setTransform(215.2,187.7,1,1,-5.3,0,0,25.6,61.1);

	this.pric = new lib.Символ78();
	this.pric.parent = this;
	this.pric.setTransform(435.3,410.4,0.301,0.31,0,0,0,-1.2,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pric},{t:this.pric2}]}).wait(1));

	// Слой 8
	this.bt3 = new lib.Символ76();
	this.bt3.parent = this;
	this.bt3.setTransform(549.9,150.6,0.667,1,0,0,0,111,151.5);
	new cjs.ButtonHelper(this.bt3, 0, 1, 2, false, new lib.Символ76(), 3);

	this.bt2 = new lib.Символ76();
	this.bt2.parent = this;
	this.bt2.setTransform(426.1,150.6,0.487,1,0,0,0,111,151.5);
	new cjs.ButtonHelper(this.bt2, 0, 1, 2, false, new lib.Символ76(), 3);

	this.bt1 = new lib.Символ76();
	this.bt1.parent = this;
	this.bt1.setTransform(271.1,150.6,1,1,0,0,0,111,151.5);
	new cjs.ButtonHelper(this.bt1, 0, 1, 2, false, new lib.Символ76(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bt1},{t:this.bt2},{t:this.bt3}]}).wait(1));

	// Слой 7
	this.hand = new lib.Символ62();
	this.hand.parent = this;
	this.hand.setTransform(417,139,1,1,0,0,0,159,97);

	this.timeline.addTween(cjs.Tween.get(this.hand).wait(1));

	// Слой 6
	this.instance_1 = new lib.Символ52();
	this.instance_1.parent = this;
	this.instance_1.setTransform(85.9,75.6,1.201,1.201,0,0,0,59.8,49);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 5
	this.instance_2 = new lib.Символ40();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-288.3,250.6,1,1,0,0,0,1053.7,125.5);
	this.instance_2.alpha = 0.531;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 1
	this.instance_3 = new lib.Символ22();
	this.instance_3.parent = this;
	this.instance_3.setTransform(330.2,150.6,1,1,0,0,0,308.1,140.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Символ 8
	this.girl = new lib.Символ54();
	this.girl.parent = this;
	this.girl.setTransform(400.4,162.9,1,1,0,0,0,181.8,150.8);

	this.timeline.addTween(cjs.Tween.get(this.girl).wait(1));

	// Символ 7
	this.instance_4 = new lib.Символ7();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-334.9,114,1,1,0,0,0,520,166);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Символ 18
	this.instance_5 = new lib.Символ18();
	this.instance_5.parent = this;
	this.instance_5.setTransform(304.5,147.5,0.696,0.696,0,0,0,467.4,233.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1017,-159.7,2240.5,820.4);
// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/arm.png?1478788878181", id:"arm"},
		{src:"images/back.jpg?1478788878181", id:"back"},
		{src:"images/bless.png?1478788878181", id:"bless"},
		{src:"images/bloo.png?1478788878181", id:"bloo"},
		{src:"images/body.png?1478788878181", id:"body"},
		{src:"images/botik.png?1478788878181", id:"botik"},
		{src:"images/hand1.png?1478788878181", id:"hand1"},
		{src:"images/hand.png?1478788878181", id:"hand"},
		{src:"images/Hands_03.png?1478788878181", id:"Hands_03"},
		{src:"images/Hands_05.png?1478788878181", id:"Hands_05"},
		{src:"images/Hands_10.png?1478788878181", id:"Hands_10"},
		{src:"images/head.png?1478788878181", id:"head"},
		{src:"images/headgirl.png?1478788878181", id:"headgirl"},
		{src:"images/leg.png?1478788878181", id:"leg"},
		{src:"images/leg2.png?1478788878181", id:"leg2"},
		{src:"images/round.png?1478788878181", id:"round"},
		{src:"images/skirt.png?1478788878181", id:"skirt"},
		{src:"images/smoke_0.png?1478788878181", id:"smoke_0"},
		{src:"images/smoke_2.png?1478788878181", id:"smoke_2"},
		{src:"images/smoke_3.png?1478788878181", id:"smoke_3"},
		{src:"images/smoke_4.png?1478788878181", id:"smoke_4"},
		{src:"images/smoken.png?1478788878181", id:"smoken"},
		{src:"images/train.png?1478788878181", id:"train"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;