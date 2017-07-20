(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/bg3.jpg?1465568439697", id:"bg3"},
		{src:"images/boch.png?1465568439697", id:"boch"},
		{src:"images/bochkaemp.png?1465568439697", id:"bochkaemp"},
		{src:"images/bochkaemp_1.png?1465568439697", id:"bochkaemp_1"},
		{src:"images/body.png?1465568439697", id:"body"},
		{src:"images/hand1.png?1465568439697", id:"hand1"},
		{src:"images/hand2.png?1465568439697", id:"hand2"},
		{src:"images/head.png?1465568439697", id:"head"},
		{src:"images/headl.png?1465568439697", id:"headl"},
		{src:"images/headr.png?1465568439697", id:"headr"},
		{src:"images/hendopen.png?1465568439697", id:"hendopen"},
		{src:"images/oblako.png?1465568439697", id:"oblako"},
		{src:"images/os.png?1465568439697", id:"os"},
		{src:"images/puzo.png?1465568439697", id:"puzo"},
		{src:"images/shadow.png?1465568439697", id:"shadow"}
	]
};



// symbols:



(lib.bg3 = function() {
	this.initialize(img.bg3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,726,270);


(lib.boch = function() {
	this.initialize(img.boch);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,153,190);


(lib.bochkaemp = function() {
	this.initialize(img.bochkaemp);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,151,188);


(lib.bochkaemp_1 = function() {
	this.initialize(img.bochkaemp_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,151,188);


(lib.body = function() {
	this.initialize(img.body);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,207,218);


(lib.hand1 = function() {
	this.initialize(img.hand1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,70,131);


(lib.hand2 = function() {
	this.initialize(img.hand2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,71,127);


(lib.head = function() {
	this.initialize(img.head);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,110,92);


(lib.headl = function() {
	this.initialize(img.headl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,108,91);


(lib.headr = function() {
	this.initialize(img.headr);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,109,88);


(lib.hendopen = function() {
	this.initialize(img.hendopen);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,164,85);


(lib.oblako = function() {
	this.initialize(img.oblako);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,113,25);


(lib.os = function() {
	this.initialize(img.os);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,28,16);


(lib.puzo = function() {
	this.initialize(img.puzo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,105,145);


(lib.shadow = function() {
	this.initialize(img.shadow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,162,90);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F8EA21").ss(3,2,0,3).p("Eg4ogVAMBxRAAAMAAAAqBMhxRAAAg");
	this.shape.setTransform(362.5,134.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,728,272);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.puzo();
	this.instance.setTransform(105,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,105,145);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AnrI5IAAxxIPXAAIAARxg");
	this.shape.setTransform(49.3,57);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4B4506").s().p("AsgBwIAAgPIB5ACQAmAAATgQQAQgOADgaIAAAIQAAAfgTAQQgTAQgmAAgAwnBuIghADIABgPIAggCIBFADQAmAAATgQQAQgOADgaIAAAIQAAAfgTAQQgTAQgmAAgAzeBwQgogEghAAIACgOQAgAAAnADIAxACQAlAAATgPQARgMADgWIAAAHQAAAbgUAPQgTAPglAAgAmOBxIgGAAIivgBIAAgPICvABIAGAAIADAAIABgBIAAAOIgBACgAl0BqIABgQIBDADIAAAPgAuGBcIBBgCIAAAQIhBABgAgMBqIgCiQQgIAWgRAeQgRAfgqA9Ig/AAIgCjNIAAAAIACC+IA/AAQAqg+ARgdQARgeAIgYIACCRIAuAAIAAAPgAIyBLQgegfAAg1IAAgIQACAwAcAdQAeAfA1AAQATAAAQgGQAPgIAPgPQAQgSAJgXQAGgTABgWIAAAHQAAAagHAXQgJAXgQASQgPAQgPAGQgQAHgTAAQg1AAgegfgAE8BoIAAgPIB5ACQAmAAATgQQARgOACgaIAAAIQAAAfgTAQQgTAQgmAAgASSBdQgMgLAAgVIABgIQABAQAKAJQANALAYAAQATAAANgIQANgHAGgPQAEgKAXhFIAehdIAFAAIgjBrQgXBGgEAJQgGAQgNAIQgNAHgTAAQgYAAgNgLgARrBnIgzAAQgLgbgKgYQgMgXgLgQIgiAkIgBgPIAjgiQALAPAMAWQAKAYALAbIAzAAIAUABIAIAPIgcgBgANRBiIAAgPIA9AEIAAAOgAOyBiIAAgPIA4AAIAAAPgASvA3IABgEIACAAIgBAEgASGhxIAGAAIA6CLIgCAKgAkwAgIAAgPIATAAQAzAAAYgRQAVgQADghIAAAGQAAAogYARQgYASgzABgAqhAYIg5gCIgBgPIA6ABIAAAXgAvaAYIgsgCIgBgPIAtABIAAAXgAymAYIg6gCIAAgPIA6ABIABAXgAMKAMQgJgLgBgWIAAgNQABAWAJALQALAKATAAQALAAALgEQALgFALgIIgBAOQgKAIgLAFQgLAFgLAAQgTAAgLgMgAoQAJIAtgEIA+ACIAAAPIg+gDIgtAFgAG7AQIg5gCIgBgOIA6AAIAAAXgAh3AJIABgcIAAAigAxKhiIACAAIAHBeIgBAGgAyggLQAZgIANgOQAMgMACgQIAAAHQAAAVgOAPQgFAHgJAEQgLgDgNgBgAlBgZIABg0IAagBIAqADIAAAOIgqgCIgaABIAAAlgAzzgbIADg4IA9AAIgBAOIg8AAIgCAqgARAgnIA5hEIAMAAIhABNgApEhiIABAAIADAwgAshhiIABAAIACAwgAE7hqIABAAIACAxgArdhIIBtgFIAAAPIhtAFgAn5hMIBpgDIAAAPIhoADgAwIhFIACgiIAAAAIgCApgAJYhBIgBgQIBOADIgBAQgAF/hRIBugDIAAAOIhtAFgAlyhoIABAAIAAAcgAM1hRIABgYIgBAbgANbhrIAAAAIABAagAOyhqIABAAIAAAXg");
	this.shape.setTransform(-20.8,56.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8EA21").s().p("AsgBzIAAAAIAEhwIgCgiIgCgwIgBgPICygGIgBAqIhtAEIAAAPIAAAfIAtgEQArAAAVAPQAVARAAAiIAAAHQgDAagQAPQgTAQgmAAgAraAoIAAAtIA6gFIgBgfIAAgWIg6gCgAwnByIggACIgBAAIAGhfIABgJIgHhbIgCgPIBEgGIAAAPIgCAjIAAAHIADAjIAhgDQAnAAAUAPQATARAAAhIAAAHQgDAagQAPQgTAQgmAAgAwGAoIABAtIAsgFIgBgfIAAgWIgtgCgAzeBzQgngDggAAIgCAAIAGhAIgBiSIBagDQAuAAAXANQAXAMAAAaIAAAIQgCAPgMANQgNAOgZAFQANACALADQANAFAJAIQASAPgBAWIAAAIQgDAWgRAMQgTAQglAAgAzgAoIABAtIA6gFIAAgfIgBgWIg6gCgAzzgJIABAAIA8gDIACgmIABgPIg9AAgAmOB0IgGAAIivgBIAAAAIAFhwIgCgiIgDgwIgBgPIC0gGIAAAoIhpACIABAQIABAYIBSAAIAAArIg+gCIgtAFIAAAOIAAASIBbgBIApgBIACA4IAAABIgBABgAlzBtIgBAAIADinIAAgbIgBgPIBUgDQAdAAASAEQARAEANAKQAMAKAFALQAGALAAAOIAAAIQgDAfgVARQgYATgzAAIgTAAIAAAOIAAA9gAlAg6IgBA0IABAAIBEAAIAAgkIAAgPIgqgCgAuGhmIBBACIAADRIhBACgAAiBuIguAAIgCiRQgIAXgRAdQgRAfgqA+Ig/AAIgCi+IAAgPIAvAAIgCBeIgBAdIABAFIAAAGIAPglIBChoIBCAAIABBqIAEBqgAIyBOQgcgdgCgxIAAgFQAAgbAEgRQAEgSAIgKQAPgUAXgKQAWgKAgAAQAxAAAaAdQAbAcAAAyIAAAIQgBAWgGAUQgJAWgQATQgPAPgPAHQgQAGgTABQg1AAgegggAJYgvIADBmIBGADIADhmIABgPIhOgDgAE8BsIAAAAIAEhvIgCgkIgCgwIgBgPICygGIAAAqIhuAEIABAPIAAAfIAsgEQAsAAAUARQAVAPAAAiIAAAIQgCAZgRAPQgTAPgmABgAGCAgIAAAsIA6gEIgBgfIAAgWIg6gBgASSBgQgKgIgBgQIgBgIIABgPIArAGIgCAOIgBAFIACAAIAPABIAEgUIACgLIg6iKIgGgPIA7gBIAfBjIAchmIAsAEIgFAPIgeBcQgXBFgEAKQgGAQgNAHQgNAIgTAAQgYAAgNgMgAR/BrIgUgBIgzAAQgLgbgKgXQgMgXgLgRIgjAkIABAPIAAAjIg4AAIAAAAIABinIAAgWIgBgQIBBgBIACBVIBMhWIBEACIgMAPIg5BDIAFAJIBCB4IgIgBgANRBmIAAAAIAChOIABgPQgLAJgLAFQgLAFgLAAQgTAAgLgNQgJgKgBgUIAAhfIA2AAIAAAYIgBAYIAAADIAEArIAkgCIgBgsIgBgbIAAgPIAxAEIACDNg");
	this.shape_1.setTransform(-20.8,54.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-152.8,42.7,264,25.1);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8EA21").s().p("AiRAGIBCAAIAAiFIChAAIAACFIBAAAIiSB6g");
	this.shape.setTransform(14.7,12.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4B4506").s().p("AiRAGIBCAAIAAiFIChAAIAACFIBAAAIiSB6g");
	this.shape_1.setTransform(14.7,14.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,29.3,27.3);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bochkaemp_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,151,188);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.boch();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,153,190);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8EA21").s().p("AhHBTQgcgcgBguIgBgHQAAgzAegfQAdghAvAAQAsABAaAVQAbAXAAAkIgBAHIAAABIAAABIhDAAIgDgsIg4AAIAAAQIgBBtIBDAAIADgmIA5ADIgCAQQgEAfgUAUQgaAXgrAAQgwAAgdgeg");
	this.shape.setTransform(12,11.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4B4607").s().p("Ag+BEQgegfAAgxIABgHQABAsAcAcQAdAeAwAAQArAAAagYQAUgTAEggIACAAQgBAqgZAZQgaAXgrAAQgwAAgdgegAArgnIgDgrIg4AAIAAgPIA4AAIADArIBDABIAAgCIAAgBIABAJIgBAHIAAACgAhuhRIABAAIgBABg");
	this.shape_1.setTransform(11.1,14.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,22.3,24.3);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8EA21").s().p("AhDBkQgKgJgCgQIAAgIIABgOIArAFIgCAPIAAAEIACAAIAOACIAEgVIACgLIg6iJIgHgQIA9AAIAcBjIAchnIArAEIgEAPIgeBbQgXBHgEAKQgHAPgMAHQgLAIgTAAQgZAAgMgLg");
	this.shape.setTransform(8.1,11.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4B4607").s().p("AhDBiQgMgLAAgWIAAgHQACAQAKAJQAMALAZAAQATAAALgIQAMgHAHgPQAEgKAXhFIAehdIAEABIgMAnIAAAAIAAABIgWBDQgXBFgEAKQgHAPgMAHQgLAIgTAAQgZAAgMgLgAglA8IAAgEIACAAIAAAEgAhQhrIAHAAIA6CJIgCALg");
	this.shape_1.setTransform(8.1,12.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.2,23.8);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8EA21").s().p("AhdBqIgBAAIADhMIABgFIgCh0IgBgPIA4gDIgBAQIgBBGIAAAAIBEAAIAAAAIgBhAIAAgPIBDgDIgCDKIg7AFIgBAAIADgdIAAgFIgCgvIg4AAIgHBYg");
	this.shape.setTransform(9.5,11);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4B4607").s().p("AhdBrIABgQIBAADIAGhYIA5AAIACAvIgBAFIgBglIg5AAIgGBYgAAjBXIA7gFIAAAQIg8ADgAhchqIAAAAIADB0IgBAFgAAegmIgChAIABAAIABBAgAgmgmIABhGIABAAIgCBGg");
	this.shape_1.setTransform(9.5,12.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,19.1,23.5);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8EA21").s().p("AhKBTQgcgegCgyIAAgFQAAgZAEgTQAEgRAIgLQAQgTAWgKQAXgKAdAAQAxAAAbAcQAbAcAAA0IgBAFQAAAYgHAUQgJAWgQASQgPAQgPAHQgPAHgUgBQgzAAgegegAgkgrIADBmIBEAEIAEhnIAAgPIhMgDg");
	this.shape.setTransform(10.5,11.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4B4607").s().p("AhKA/QgeggAAg0IAAgJQACAwAcAeQAeAfAzAAQAUAAAPgHQAPgHAPgPQAQgSAJgXQAHgSAAgYIABAIQAAAagIAXQgJAXgQASQgPAPgPAHQgPAHgUAAQgzAAgegfgAgkhOIgBgPIBMADIAAAPg");
	this.shape_1.setTransform(10.5,14.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,21.1,24.3);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8EA21").s().p("AhgBrIgBAAIAEhuIABgKIgFhKIgBgQICxgFIAAAPIgBAaIhrAFIAAAOIAAAgIArgEQArAAAVAQQAVAPAAAjIAAAHQgDAagQAOQgUAQglAAgAgbAgIABAsIA3gEIABAAIgBg1Ig4gCg");
	this.shape.setTransform(9.9,11);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4B4607").s().p("AhhBrIABgPIB3ACQAlAAAUgQQAQgOADgaIAAAHQAAAggTAQQgUAQglAAgAAdA5IAAgnIg4gBIAAgPIA4ACIABA1gAhihmIABAAIAFBKIgBAKgAgdhNIBrgFIABgaIAAAAIgBAqIhrADg");
	this.shape_1.setTransform(9.9,12.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,19.9,23.4);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8EA21").s().p("ABjCHIgvAAIgDiQQgHAVgSAfQgRAegoA+Ig/AAIgCi9IAAgQIAvAAIAAAPIgDBsIAAAGIABAFIAQglIA/hnIBEAAIACBpIADBqgAgphfQgJgHgDgJIgBgIQAAgHAEgDQAEgFAHAAQAHABAEADQADADAAAGIgBAIIAIAEIALABIAJgBIAJgEIABAAIgBgBIAAAAIgCgIQAAgGAEgDQADgDAGgBQAHAAAEAGQAFAEAAAIIgCAIQgCAIgJAGQgOAKgRAAQgVAAgOgKg");
	this.shape.setTransform(10,13.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4B4607").s().p("AA0CFIgDiRQgHAVgSAfQgRAfgoA9Ig/ABIgCjNIAAAAIACC+IA/gBQAog9ARgfQASgdAHgXIADCRIAvAAIAAAPgAg2AkIADhtIAAAAIgDBygAgphiQgNgKAAgOIABgHQADAJAJAHQAOAKAVAAQARAAAOgJQAJgHACgIIACAHQAAANgNAKQgOAJgRAAQgVAAgOgKgAALiEIABABIgBABIAAgCg");
	this.shape_1.setTransform(10,15.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,20,28.7);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8EA21").s().p("AhKBTQgcgegCgyIAAgFQAAgZAEgTQAEgRAIgLQAQgTAWgKQAXgKAdAAQAxAAAbAcQAbAcAAA0IgBAFQAAAYgHAUQgJAWgQASQgPAQgPAHQgPAHgUgBQgzAAgegegAgkgrIADBmIBEAEIAEhnIAAgPIhMgDg");
	this.shape.setTransform(10.5,11.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4B4607").s().p("AhKA/QgeggAAg0IAAgJQACAwAcAeQAeAfAzAAQAUAAAPgHQAPgHAPgPQAQgSAJgXQAHgSAAgYIABAIQAAAagIAXQgJAXgQASQgPAPgPAHQgPAHgUAAQgzAAgegfgAgkhOIgBgPIBMADIAAAPg");
	this.shape_1.setTransform(10.5,14.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,21.1,24.3);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8EA21").s().p("AgZBrQgngDggAAIgCAAIAGg/IgBiTIBZgDQAtAAAXANQAXAMAAAaIAAAIQgDAQgLAMQgNAOgZAHQANABALACQANAFAJAIQARAPAAAXIAAAIQgDAVgQANQgVAPgkAAgAgbAhIABAsIA4gFIAAAAIgBg1Ig4gBgAgtgQIAAAAIA6gDIADgnIABgPIg8AAg");
	this.shape.setTransform(9.9,11);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4B4607").s().p("AgZBhQgogDghAAIACgPQAgAAAnADIAvACQAkAAAVgPQAQgMADgWIAAAHQAAAbgTAPQgVAPgkAAgAAeAvIgBgmIg4gCIAAgNIA4ACIABAzgAAjgaQAZgHANgPQALgMADgPIAAAHQAAAUgOAPQgGAHgIAFQgLgEgNgBgAgtgqIACg4IA8AAIgBAPIg7AAIgCApg");
	this.shape_1.setTransform(9.9,13.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,19.8,23.6);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8EA21").s().p("AhHBTQgcgcgBguIgBgHQAAgzAegfQAdghAvAAQAsABAaAVQAbAXAAAkIgBAHIAAABIAAABIhDAAIgDgsIg4AAIAAAQIgBBtIBDAAIADgmIA5ADIgCAQQgEAfgUAUQgaAXgrAAQgwAAgdgeg");
	this.shape.setTransform(10.2,11.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4B4607").s().p("AhHBEQgegfAAgxIABgHQABAsAcAcQAdAeAwAAQArAAAagYQAUgTAEggIACAAQgBAqgZAZQgaAXgrAAQgwAAgdgegAAignIgDgrIg4AAIAAgPIA4AAIADArIBDABIAAgCIAAgBIABAJIgBAHIAAACg");
	this.shape_1.setTransform(10.2,14.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,20.5,24.3);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4B4607").s().p("AA0BnIgDiRQgHAXgSAdQgRAfgoA9Ig/ABIgCjNIAAAAIACC+IA/AAQAog+ARgdQASgfAHgXIADCRIAvAAIAAAPgAg2AGIABgdIAAAig");
	this.shape.setTransform(10,12.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8EA21").s().p("ABjBqIgvAAIgDiRQgHAXgSAdQgRAfgoA+Ig/AAIgCi+IAAgPIAvAAIgCBeIgBAdIABAGIAAAFIAQgjIA/hpIBEAAIACBpIADBqg");
	this.shape_1.setTransform(10,10.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,20,22.9);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8EA21").s().p("AAqB5IABgWIABgPIhZABIAAAPIABAUIgBAAIg4AAIAAAAIABgtIAIgLQASgcALglQALgqABg0IAAgJIAAgGIAAgJICYgBIAAAPIgBC9IAAABIACAhIgBAAIg7ADgAgMgMQgGAcgLAZIAGAAIBAgBIgBhhIAAgWIgsAAQgBAlgHAeg");
	this.shape.setTransform(10.3,12.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4B4607").s().p("AAqBqIA7gDIABAPIg8ADgAhlB4IAAgPIA4AAIABAPgAgtBGIBZgBIgBAPIhYABgABkBFIABi9IAAAAIgBC+gAgdAaQALgZAGgcQAHgeABglIAsAAIAAAWIAAgHIgsAAQgBAlgHAeQgEATgHATg");
	this.shape_1.setTransform(10.3,13.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,20.5,25.9);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8EA21").s().p("ABjCHIgvAAIgDiQQgHAVgSAfQgRAegoA+Ig/AAIgCi9IAAgQIAvAAIAAAPIgCB3IAAAAIAQglIA/hnIBEAAIACBpIADBqgAgphfQgJgHgDgJIgBgIQAAgHAEgDQAEgFAHAAQAHABAEADQADADAAAGIgBAIIAIAEIALABIAJgBIAJgEIABAAIgBgBIAAAAIgCgIQAAgGAEgDQADgDAGgBQAHAAAEAGQAFAEAAAIIgCAIQgCAIgJAGQgOAKgRAAQgVAAgOgKg");
	this.shape.setTransform(10,13.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4B4607").s().p("AA0CFIgDiRQgHAVgSAfQgRAfgoA9Ig/ABIgCjNIAAAAIACC+IA/gBQAog9ARgfQASgdAHgXIADCRIAvAAIAAAPgAgzhJIAAAAIgCB3IAAABgAgphiQgNgKAAgOIABgHQADAJAJAHQAOAKAVAAQARAAAOgJQAJgHACgIIACAHQAAANgNAKQgOAJgRAAQgVAAgOgKgAALiEIABABIgBABIAAgCg");
	this.shape_1.setTransform(10,15.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,20,28.7);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8EA21").s().p("ABgBsIhFAAIgMgvIgvgBIgMAwIgzAAIgFAAIBGjXIBFACIA9DVgAgYAQIAEAAIAgAAIAEAAIgShQg");
	this.shape.setTransform(10.1,10.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4B4607").s().p("AAbBeIgMguIgvgCIgMAwIg4AAIAFgPIAzAAIAMgvIAvABIAMAuIBFAAIAEAPgAAMgKIgOhEIgSBEIgEAAIAWhTIASBTg");
	this.shape_1.setTransform(10.1,13.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,20.2,23.2);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8EA21").s().p("AhdBqIgBAAIADhMIABgFIgCh0IgBgPIA4gDIgBAQIgBBGIAAAAIBEAAIAAAAIgBhAIAAgPIBDgDIgCDKIg7AFIgBAAIADgdIAAgFIgCgvIg4AAIgHBYg");
	this.shape.setTransform(9.5,11);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4B4607").s().p("AhdBrIABgQIBAADIAGhYIA5AAIACAvIgBAFIgBglIg5AAIgGBYgAAjBXIA7gFIAAAQIg8ADgAhchqIAAAAIADB0IgBAFgAAegmIgChAIABAAIABBAgAgmgmIABhGIABAAIgCBGg");
	this.shape_1.setTransform(9.5,12.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,19.1,23.5);


(lib.Symbol34копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.oblako();
	this.instance.setTransform(0,44,1.08,1.08);

	this.instance_1 = new lib.oblako();
	this.instance_1.setTransform(144.1,31,0.76,0.76);

	this.instance_2 = new lib.oblako();
	this.instance_2.setTransform(466.5,39.5,0.77,0.77);

	this.instance_3 = new lib.oblako();
	this.instance_3.setTransform(347.1,0,0.76,0.76);

	this.instance_4 = new lib.oblako();
	this.instance_4.setTransform(272.5,50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,553.5,75);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.bochkaemp, null, new cjs.Matrix2D(0,0.496,-4.717,0,484,-37.5)).s().p("A4rF2IAArrMAxXAAAIAALrg");
	this.shape.setTransform(158,37.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,316.1,75);


(lib.Symbol63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hendopen();
	this.instance.setTransform(0,0,0.707,0.707);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,116,60.1);


(lib.Symbol57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.head();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,110,92);


(lib.Symbol56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hand1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,70,131);


(lib.Symbol55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hand2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,71,127);


(lib.Symbol52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.body();

	this.instance_1 = new lib.puzo();
	this.instance_1.setTransform(15.9,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,207,218);


(lib.Symbol45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.os();
	this.instance.setTransform(-3.7,-2.1,0.282,0.282);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.7,-2.1,7.9,4.5);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF33").s().p("AgtApIgBgEQgJgQgEgEIgPAAQgwAAgxAEQguADgKgBQgPgCgJgOIAAAAIAAgBQgEgHgOgoQAOgRANALQAYATAKACICqAAQAKAKAKAQQAKARgBAFQAAAZgCgDIAAAEQgCAEgPAAQgLAAgGgLgACbAkQgGgFABgRQgBgYAZgSQAfgYA5ALIAHAPIg6AtIgIAGIgIAGQgMAHgNAEIgPgGg");
	this.shape.setTransform(37,11.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("AA2BaQgHgcgmAAQgUAAgRARQgRASgJAAQgRAAgSgVQgTgagKgKIhrAEQg3ADhFAAQgJgMgFgRQgGgOAAgIQAAggAEgMQAIgSAZgMQA3gZDfgNIFNAFQBGAcAPAUQAGAHgBAgQAAAbgBAFQgBAIgIgCIgagHQgZgFgdAAQgtAAgXAMIA6gtIgHgPQg5gLgfAYQgZATABAYQgBAQAGAFIAPAGQANgDAMgIQgLAMgGAVQgIAegJAKQgRASgtAAQglAAgIgbgAhBAUQAJAHAKAFIABAEQAGALALAAQAPAAACgEIAAgDQACACAAgZQABgFgKgPQgKgRgKgLIiqAAQgKgCgYgSQgNgLgOAQQAOAoAEAIIgYgCIgBAAIgCACIAbAAIAAABQAJAOAPACQAKABAugEQAxgEAwAAIAJAIgAlJACIADAAQgCgCgBgIgAlJgLIABgCIgBAAg");
	this.shape_1.setTransform(37,11.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,74,23.5);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ35();
	this.instance.setTransform(362.5,134.5,1,1,0,0,0,362.5,134.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},11).to({alpha:1},13).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,729,273);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ28();
	this.instance.setTransform(-20.8,55.2,1,1,0,0,0,-20.8,55.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-20.9,scaleX:1.06,scaleY:1.06},9,cjs.Ease.get(-1)).to({regX:-20.8,scaleX:1,scaleY:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-152.8,42.7,264,25.1);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ24();
	this.instance.setTransform(157.9,42.8,1,1,0,0,0,14.7,12.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25).to({_off:false},0).to({y:53.3},6,cjs.Ease.get(-1)).to({y:42.8},6,cjs.Ease.get(1)).to({y:53.3},6,cjs.Ease.get(-1)).to({y:42.8},6,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ24();
	this.instance_1.setTransform(-119.8,42.8,1,1,0,0,0,14.7,12.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:53.3},6,cjs.Ease.get(-1)).to({y:42.8},6,cjs.Ease.get(1)).to({y:53.3},6,cjs.Ease.get(-1)).to({y:42.8},6,cjs.Ease.get(1)).to({_off:true},1).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-134.5,30,29.3,27.3);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Слой 3
	this.instance = new lib.Символ31();
	this.instance.setTransform(43,53.5,0.871,0.938,0,0,0,49.3,57);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ31(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// Слой 1
	this.instance_1 = new lib.Символ21();
	this.instance_1.setTransform(43,53.4,0.562,0.562,0,0,0,76.5,95);

	this.instance_2 = new lib.Символ23();
	this.instance_2.setTransform(42.9,53.4,0.568,0.568,0,0,0,75.4,94);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,86,106.8);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 19
	this.instance = new lib.Символ19();
	this.instance.setTransform(194.8,59.6,1,1,0,0,0,11.1,12.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({scaleY:1.28,y:56.2},5,cjs.Ease.get(-1)).to({scaleY:1,y:59.6},5,cjs.Ease.get(1)).wait(6));

	// Символ 18
	this.instance_1 = new lib.Символ18();
	this.instance_1.setTransform(176.9,59.6,1,1,0,0,0,8.1,11.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(13).to({scaleY:1.28,y:56.2},5,cjs.Ease.get(-1)).to({scaleY:1,y:59.6},5,cjs.Ease.get(1)).wait(7));

	// Символ 17
	this.instance_2 = new lib.Символ17();
	this.instance_2.setTransform(157.2,59.8,1,1,0,0,0,9.5,11.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(12).to({regY:11.7,scaleY:1.28,y:56.4},5,cjs.Ease.get(-1)).to({regY:11.8,scaleY:1,y:59.8},5,cjs.Ease.get(1)).wait(8));

	// Символ 16
	this.instance_3 = new lib.Символ16();
	this.instance_3.setTransform(134.3,59.6,1,1,0,0,0,10.5,12.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(11).to({scaleY:1.28,y:56.2},5,cjs.Ease.get(-1)).to({scaleY:1,y:59.6},5,cjs.Ease.get(1)).wait(9));

	// Символ 15
	this.instance_4 = new lib.Символ15();
	this.instance_4.setTransform(111.9,60,1,1,0,0,0,9.9,11.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10).to({scaleY:1.28,y:56.7},5,cjs.Ease.get(-1)).to({scaleY:1,y:60},5,cjs.Ease.get(1)).wait(10));

	// Символ 14
	this.instance_5 = new lib.Символ14();
	this.instance_5.setTransform(78.9,56.5,1,1,0,0,0,10,14.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(9).to({scaleY:1.28,y:52.3},5,cjs.Ease.get(-1)).to({scaleY:1,y:56.5},5,cjs.Ease.get(1)).wait(11));

	// Символ 13
	this.instance_6 = new lib.Символ13();
	this.instance_6.setTransform(55.3,59.6,1,1,0,0,0,10.5,12.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(8).to({scaleY:1.28,y:56.2},5,cjs.Ease.get(-1)).to({scaleY:1,y:59.6},5,cjs.Ease.get(1)).wait(12));

	// Символ 12
	this.instance_7 = new lib.Символ12();
	this.instance_7.setTransform(33,59.9,1,1,0,0,0,9.9,11.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(7).to({scaleY:1.28,y:56.6},5,cjs.Ease.get(-1)).to({scaleY:1,y:59.9},5,cjs.Ease.get(1)).wait(13));

	// Символ 11
	this.instance_8 = new lib.Символ11();
	this.instance_8.setTransform(10.2,59.6,1,1,0,0,0,10.2,12.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(6).to({scaleY:1.28,y:56.2},5,cjs.Ease.get(-1)).to({scaleY:1,y:59.6},5,cjs.Ease.get(1)).wait(14));

	// Символ 10
	this.instance_9 = new lib.Символ10();
	this.instance_9.setTransform(-21.9,59.3,1,1,0,0,0,10,11.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(5).to({scaleY:1.23,y:55.8},5,cjs.Ease.get(-1)).to({scaleY:1,y:59.3},5,cjs.Ease.get(1)).wait(15));

	// Символ 9
	this.instance_10 = new lib.Символ9();
	this.instance_10.setTransform(-45.9,61.1,1,1,0,0,0,10.2,12.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(4).to({scaleY:1.23,y:58},5,cjs.Ease.get(-1)).to({scaleY:1,y:61.1},5,cjs.Ease.get(1)).wait(16));

	// Символ 8
	this.instance_11 = new lib.Символ8();
	this.instance_11.setTransform(-68.4,56.3,1,1,0,0,0,10,14.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(3).to({scaleY:1.23,y:52.2},5,cjs.Ease.get(-1)).to({scaleY:1,y:56.3},5,cjs.Ease.get(1)).wait(17));

	// Символ 7
	this.instance_12 = new lib.Символ7();
	this.instance_12.setTransform(-90.3,59.4,1,1,0,0,0,10.1,11.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(2).to({scaleY:1.23,y:55.9},5,cjs.Ease.get(-1)).to({scaleY:1,y:59.4},5,cjs.Ease.get(1)).wait(18));

	// Символ 5
	this.instance_13 = new lib.Символ5();
	this.instance_13.setTransform(-111.5,59.6,1,1,0,0,0,9.5,11.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1).to({scaleY:1.23,y:56.2},5,cjs.Ease.get(-1)).to({scaleY:1,y:59.6},5,cjs.Ease.get(1)).wait(19));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121,42,327,32);


(lib.Symbol35копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol34копия();
	this.instance.setTransform(-323.2,37.5,1,1,0,0,0,276.7,37.5);

	this.instance_1 = new lib.Symbol34копия();
	this.instance_1.setTransform(276.7,37.5,1,1,0,0,0,276.7,37.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-599.9,0,1153.4,75);


(lib.Symbol32копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol35копия();
	this.instance.setTransform(523.8,3,1,1,0,0,0,276.7,37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:1122.8},160).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-352.9,-34.5,1153.4,75);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990000").s().p("AJuAOQgCgFAAgGQAAgPATgBQAVgBgBARQAAAHgEAHQgHAHgJAAQgMAAgFgKgAqSgFQAAgSATAAQAUgBAAATQAAAGgEAGQgGAHgKAAQgTAAAAgTg");
	this.shape.setTransform(50.5,32.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#993300").s().p("AqaAGQAAgTAUACQAUABAAAQQAAAHgFAGQgGAIgJAAQgUAAAAgVgAJ9AKIgHgEIgDgNQANgXAOAGQANAEAAANQAAAHgFAEQgGAIgJAAQgHAAgDgCg");
	this.shape_1.setTransform(49.8,-1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#990033").s().p("AgDBbIgigCIgrABIAEhSIgGheIA6gFIgCAoIACAlIAUgCIAQgBQAkABASAOQARAMAAAcQAAAbgQAOQgQANggAAgAgYBAIAYgCIAZgBIgBgtIgygBg");
	this.shape_2.setTransform(103.8,15.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#990033").s().p("AgBBZIgagBIADhAIABhAIgSgBIgMAAIgUABIgBAAIACg0IBIADIBLgBIgCASIgBASIAAAFIgsgDIgBBkIAAAWIAAAMIABALg");
	this.shape_3.setTransform(86.3,15.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#990033").s().p("AAXBbIgLgoIgnAAIgKAoIgvAAIAbhUIAghhIA5ABIA1C0gAANAOIgKgjIgFghIgSBEIAhAAg");
	this.shape_4.setTransform(70,15.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#990033").s().p("AgsBaIghgBIAEhNIgChjIAigCIAkgBQAYAAAPAEQAOADALAIQAKAJAEAJQAFAJAAAMQAAAhgUAOQgUAQgpAAIgQAAIAAAAIAABAgAgVg0IgLAAIgBAsIA3AAIAAgrIgUgBIgMgBg");
	this.shape_5.setTransform(53.5,15.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#990033").s().p("AgDBbIgjgCIgsACIAEhlIgEhMIBlgFIAvAAIAAAjIgrABIgvADIAAAnIATgDIARAAQAkAAARAOQASAMAAAcQAAAbgQAOQgQANggAAgAgWBAIAbgCIAUgBIgBgtIgvgBg");
	this.shape_6.setTransform(35.3,15.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#990033").s().p("AAXBbIgLgoIgnAAIgKAoIgvAAIAbhUIAghhIA5ABIA1C0gAANAOIgKgjIgFghIgSBEIAhAAg");
	this.shape_7.setTransform(17.1,15.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#990033").s().p("Ag0BUQgRgNAAgaIAAgDIAAgCIAqACIAFAVIAnAAIgBguIgYgCIABghIAQAAIADgkIgggDIgFASIgrgDQACgZATgPQASgOAdAAQAcAAARAOQARAPAAAZQABAOgJAJQgHAJgRAFQAVAFAJAJQAKAMAAATQAAAbgTAPQgUAPgfAAQgjAAgRgNg");
	this.shape_8.setTransform(0,15.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Layer 2
	this.instance = new lib.Symbol25();
	this.instance.setTransform(49.9,15.6,0.434,0.573,0,0,0,158,37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.7,-5.9,137.3,42.9);


(lib.Symbol62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol63();
	this.instance.setTransform(100,45.1,1,1,0,0,0,100,45.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:14.5},15).to({rotation:0},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,116,60.1);


(lib.Symbol59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol57();
	this.instance.setTransform(55,46,1,1,0,0,0,55,46);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,110,92);


(lib.Symbol58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol59();
	this.instance.setTransform(55,46,1,1,0,0,0,55,46);

	this.instance_1 = new lib.headl();
	this.instance_1.setTransform(-18.5,-4.2);

	this.instance_2 = new lib.headr();
	this.instance_2.setTransform(22.9,-4.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},19).to({state:[{t:this.instance}]},19).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},7).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance}]},7).to({state:[{t:this.instance}]},4).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:47},19).to({y:46},19).wait(2).to({_off:true},1).wait(7).to({_off:false},0).to({_off:true},1).wait(7).to({_off:false},0).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,110,92);


(lib.Symbol54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol55();
	this.instance.setTransform(12.5,9,1,1,0,0,0,12.5,9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.93},20).to({scaleY:1},19).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,71,127);


(lib.Symbol53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol56();
	this.instance.setTransform(60,6.5,1,1,0,0,0,60,6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.96},20).to({scaleY:1},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,70,131);


(lib.Symbol44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 - копия: 2 - копия: 2 - копия: 2 - копия
	this.instance = new lib.Symbol45();
	this.instance.setTransform(-334.8,72.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:5.2,regY:3,x:-305.5,y:85.3},5).to({x:-277.5,y:56.8},11).to({x:-325.7,y:85.8},14).to({x:-340.5,y:28.5},8).to({x:-281.5,y:66.8},10).to({x:-336.2,y:50.3},12).to({x:-359,y:62},12).wait(1).to({regX:0,regY:0,x:-364.2,y:59},0).to({x:-340.7,y:69.5},4).wait(1));

	// Layer 1 - копия: 2 - копия: 2 - копия: 2
	this.instance_1 = new lib.Symbol45();
	this.instance_1.setTransform(-287.7,67.1,1,1,0,0,0,5.2,3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-277.5,y:56.8},4).to({x:-325.7,y:85.8},14).to({x:-340.5,y:28.5},8).to({x:-281.5,y:66.8},10).to({x:-336.2,y:50.3},12).to({x:-359,y:62},12).wait(1).to({regX:0,regY:0,x:-364.2,y:59},0).to({regX:5.2,regY:3,x:-305.5,y:85.3},10).to({x:-290.2,y:69.7},6).wait(1));

	// Layer 1 - копия: 2 - копия: 2 - копия
	this.instance_2 = new lib.Symbol45();
	this.instance_2.setTransform(-315.4,79.6,1,1,0,0,0,5.2,3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:-325.7,y:85.8},3).to({x:-340.5,y:28.5},8).to({x:-281.5,y:66.8},10).to({x:-336.2,y:50.3},12).to({x:-359,y:62},12).wait(1).to({regX:0,regY:0,x:-364.2,y:59},0).to({regX:5.2,regY:3,x:-305.5,y:85.3},10).to({x:-277.5,y:56.8},11).to({x:-311.9,y:77.5},10).wait(1));

	// Layer 1 - копия: 2 - копия: 2
	this.instance_3 = new lib.Symbol45();
	this.instance_3.setTransform(-311,47.7,1,1,0,0,0,5.2,3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:-281.5,y:66.8},5).to({x:-336.2,y:50.3},12).to({x:-359,y:62},12).wait(1).to({regX:0,regY:0,x:-364.2,y:59},0).to({regX:5.2,regY:3,x:-305.5,y:85.3},10).to({x:-277.5,y:56.8},11).to({x:-325.7,y:85.8},14).to({x:-340.5,y:28.5},8).to({x:-316.9,y:43.8},4).wait(1));

	// Layer 1 - копия: 2 - копия
	this.instance_4 = new lib.Symbol45();
	this.instance_4.setTransform(-281.5,66.8,1,1,0,0,0,5.2,3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:-336.2,y:50.3},12).to({x:-359,y:62},12).wait(1).to({regX:0,regY:0,x:-364.2,y:59},0).to({regX:5.2,regY:3,x:-305.5,y:85.3},10).to({x:-277.5,y:56.8},11).to({x:-325.7,y:85.8},14).to({x:-340.5,y:28.5},8).to({x:-287.4,y:62.9},9).wait(1));

	// Layer 1 - копия: 2
	this.instance_5 = new lib.Symbol45();
	this.instance_5.setTransform(-313.4,57.2,1,1,0,0,0,5.2,3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:-336.2,y:50.3},5).to({x:-359,y:62},12).wait(1).to({regX:0,regY:0,x:-364.2,y:59},0).to({regX:5.2,regY:3,x:-305.5,y:85.3},10).to({x:-277.5,y:56.8},11).to({x:-325.7,y:85.8},14).to({x:-340.5,y:28.5},8).to({x:-281.5,y:66.8},10).to({x:-308.9,y:58.5},6).wait(1));

	// Layer 1 - копия
	this.instance_6 = new lib.Symbol45();
	this.instance_6.setTransform(-351.4,58.1,1,1,0,0,0,5.2,3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:-359,y:62},4).wait(1).to({regX:0,regY:0,x:-364.2,y:59},0).to({regX:5.2,regY:3,x:-305.5,y:85.3},10).to({x:-277.5,y:56.8},11).to({x:-325.7,y:85.8},14).to({x:-340.5,y:28.5},8).to({x:-281.5,y:66.8},10).to({x:-336.2,y:50.3},12).to({x:-349.5,y:57.1},7).wait(1));

	// Layer 1
	this.instance_7 = new lib.Symbol45();
	this.instance_7.setTransform(-364.2,59);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:5.2,regY:3,x:-305.5,y:85.3},10).to({x:-277.5,y:56.8},11).to({x:-325.7,y:85.8},14).to({x:-340.5,y:28.5},8).to({x:-281.5,y:66.8},10).to({x:-336.2,y:50.3},12).to({x:-359,y:62},12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-367.9,42.5,85.4,36.4);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AfAHVItRAjIrDAYIqGAAQsTA/uGhMI09AAIAAgZQgkh2AkgjQBLASBahHQAHg9A3g9QAlABAIhjQBTAMBFAxQAvg9BrA9QBEAEAIgWQASAGAIhVQAbgYhKhwQgbiGBPAXIAAhpIAtAAQgDgZASgKQAUgEAogVIAAgjQAWAAAIAPIBVAAQAMgFAXgUIAAiRMAhlAAPQgDAfAmgBIAAAtIA2AAIAABCQAHAKgBAnIAeAAIBTgeQASgLARgEIAjgjIA3AAIAABzIASAdIASgOIAAiRMAhlAAPQgDAfAmgBIAAAtIA2AAIAABCQAHAKhtgbIBJBCQgZAvAqAwIAzAAQAmBMBKglIBFA4ICJgkQAYApA5hBIBkBZQgaBQBZBFIBJB9IAiAAQAtgLANApQATAmATASIAAD/g");
	mask.setTransform(473.5,-74.4);

	// Layer 1
	this.instance = new lib.Symbol32копия();
	this.instance.setTransform(56.5,-52.5,1,1,0,0,0,56.5,12.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(146.7,-99.5,653.5,75);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.Symbol58();
	this.instance.setTransform(34.9,-111.2,1,1,0,0,0,55,46);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 3
	this.instance_1 = new lib.Symbol54();
	this.instance_1.setTransform(85,-32.2,1,1,0,0,0,35.5,63.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 2
	this.instance_2 = new lib.Symbol53();
	this.instance_2.setTransform(-13.5,-30.2,1,1,0,0,0,35,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Layer 1
	this.instance_3 = new lib.Symbol52();
	this.instance_3.setTransform(37.5,11.8,1,1,0,0,0,103.5,109);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66,-157.2,207,278);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 30
	this.instance = new lib.Symbol30();
	this.instance.setTransform(-53.6,113.4,1,1,0,0,0,56.5,12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.bg3();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-463,-31.1,1189,301.1);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(16));

	// Слой 2 - копия
	this.instance = new lib.Символ27();
	this.instance.setTransform(131.8,132,1,1,0,0,0,67.7,33);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).to({y:36.5,alpha:1},8).to({y:46.5},3).wait(1).to({y:36.5},3).to({y:132,alpha:0},8).to({_off:true},1).wait(3));

	// Слой 1
	this.instance_1 = new lib.Символ4();
	this.instance_1.setTransform(103,44.9,1,1,0,0,0,103,35.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:45.1},3,cjs.Ease.get(-1)).to({y:-49.9,alpha:0},8,cjs.Ease.get(1)).wait(7).to({y:45.1,alpha:1},8).to({y:35.1},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121,51.8,327,32);


(lib.Символ22копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Слой 4
	this.instance = new lib.Символ31();
	this.instance.setTransform(43,53.5,0.873,0.938,0,0,0,49.2,57);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ31(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// Слой 5
	this.instance_1 = new lib.Symbol24();
	this.instance_1.setTransform(47.3,61,0.888,0.888,0,0,0,54.1,16.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1));

	// Слой 2
	this.instance_2 = new lib.Symbol26();
	this.instance_2.setTransform(42.8,12.8,1,1,0,0,0,37,11.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(1));

	// Слой 1
	this.instance_3 = new lib.Символ21();
	this.instance_3.setTransform(43,53.4,0.562,0.562,0,0,0,76.5,95);

	this.instance_4 = new lib.Символ23();
	this.instance_4.setTransform(41.9,54.4,0.568,0.568,0,0,0,75.4,94);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,86,106.8);


(lib.Symbol68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.headr();
	this.instance.setTransform(63.4,-6.2,0.765,0.765,9.5);

	this.instance_1 = new lib.hand1();
	this.instance_1.setTransform(11,54.4,0.743,0.743);

	this.instance_2 = new lib.Symbol52();
	this.instance_2.setTransform(77.5,126.5,0.748,0.748,0,0,0,103.5,109);

	this.instance_3 = new lib.Symbol62();
	this.instance_3.setTransform(153.1,68,0.983,1,0,0,180,58,30.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 2
	this.instance_4 = new lib.Символ32();
	this.instance_4.setTransform(99.5,113.2,0.812,0.812,0,0,0,52.5,72.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-6.2,210.1,214.3);


(lib.Symbol67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.headl();
	this.instance.setTransform(67.6,1,0.779,0.779,-5.7);

	this.instance_1 = new lib.Symbol54();
	this.instance_1.setTransform(172.1,93.6,0.748,0.748,0,0,0,35.6,63.5);

	this.instance_2 = new lib.Symbol52();
	this.instance_2.setTransform(136.5,126.5,0.748,0.748,0,0,0,103.5,109);

	this.instance_3 = new lib.Symbol62();
	this.instance_3.setTransform(58,69.9,1,1,0,0,0,58,30.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-7.4,213.9,215.5);


(lib.Symbol60 = function(mode,startPosition,loop) {
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

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer 1
	this.instance = new lib.Symbol20();
	this.instance.setTransform(79,150.7,0.748,0.748,0,0,0,39.4,44.1);

	this.instance_1 = new lib.Symbol67();
	this.instance_1.setTransform(48,104,1,1,0,0,0,107,104);

	this.instance_2 = new lib.Symbol68();
	this.instance_2.setTransform(105,104,1,1,0,0,0,105,104);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,154.9,208.1);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		
		//Stage
		
		stage.canvas.onmouseover = qwe5;
		
		function qwe5()
		{
		    _this.title.gotoAndPlay(1);
		    _this.black.gotoAndPlay(1);
		}
		
		
		stage.canvas.onmouseout = qwe6;
		
		 function qwe6()
		{
		    _this.title.gotoAndPlay(15);
		    _this.black.gotoAndPlay(15);
		}
		
		
		//Stage
		
		//Buttons
		
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.boch2.addEventListener("mouseover", qwe);
		
		function qwe()
		{
			_this.boch2.gotoAndPlay(1);
			_this.miha.gotoAndPlay(1);
		}
		
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.boch2.addEventListener("mouseout", qwe2);
		
		function qwe2()
		{
			_this.boch2.gotoAndPlay(0);
			_this.miha.gotoAndPlay(0);
		}
		
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.boch1.addEventListener("mouseover", qwe3);
		
		function qwe3()
		{
			_this.boch1.gotoAndPlay(1);
			_this.miha.gotoAndPlay(2);
		}
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.boch1.addEventListener("mouseout", qwe4);
		
		function qwe4()
		{
			_this.boch1.gotoAndPlay(0);
			_this.miha.gotoAndPlay(0);
		}
		
		//Buttons
		
		//clickTAG
		
		stage.canvas.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 8
	this.instance = new lib.Символ36();
	this.instance.setTransform(299.6,150,0.826,1.115,0,0,0,362.6,134.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 5
	this.title = new lib.Символ26();
	this.title.setTransform(368.7,-4.2,1.019,1.019,0,0,0,103,35.8);

	this.timeline.addTween(cjs.Tween.get(this.title).wait(1));

	// Слой 6
	this.arrow = new lib.Символ25();
	this.arrow.setTransform(290.2,100.5,1.019,1.019,0,0,0,14.6,13.6);

	this.timeline.addTween(cjs.Tween.get(this.arrow).wait(1));

	// Слой 9
	this.boch2 = new lib.Символ22();
	this.boch2.setTransform(152.7,226.6,1.019,1.019,0,0,0,43,53.4);

	this.timeline.addTween(cjs.Tween.get(this.boch2).wait(1));

	// Слой 10
	this.instance_1 = new lib.Symbol44();
	this.instance_1.setTransform(106.6,60.3,1,1,0,0,180);

	this.instance_2 = new lib.Symbol44();
	this.instance_2.setTransform(171.7,162.4,1,1,0,0,180);

	this.instance_3 = new lib.Symbol44();
	this.instance_3.setTransform(209.9,86,1,1,0,0,180);

	this.instance_4 = new lib.Symbol44();
	this.instance_4.setTransform(183.2,10.3,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// Слой 1
	this.instance_5 = new lib.Symbol44();
	this.instance_5.setTransform(417.3,155.5);

	this.instance_6 = new lib.Symbol44();
	this.instance_6.setTransform(405.1,79.1);

	this.instance_7 = new lib.Symbol44();
	this.instance_7.setTransform(437.3,25.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]}).wait(1));

	// Слой 3
	this.boch1 = new lib.Символ22копия();
	this.boch1.setTransform(433.5,226.6,1.019,1.019,0,0,0,43,53.4);

	this.timeline.addTween(cjs.Tween.get(this.boch1).wait(1));

	// Слой 2
	this.miha = new lib.Symbol60();
	this.miha.setTransform(293.9,164.5,0.883,0.883,0,0,0,77.5,104);

	this.timeline.addTween(cjs.Tween.get(this.miha).wait(1));

	// shadow
	this.instance_8 = new lib.shadow();
	this.instance_8.setTransform(234.9,218,0.677,0.458);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// shadow
	this.instance_9 = new lib.shadow();
	this.instance_9.setTransform(112.2,218,0.677,0.458);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// shadow
	this.instance_10 = new lib.shadow();
	this.instance_10.setTransform(145.2,141.1,1.019,1.019);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// Слой 7
	this.instance_11 = new lib.Символ37();
	this.instance_11.setTransform(299.4,149.8,0.841,1.132,0,0,0,362.9,134.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.5,112,1000.5,340.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;