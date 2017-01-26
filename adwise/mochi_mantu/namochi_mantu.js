(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg?1485449771264", id:"bg"},
		{src:"images/cbvcb.png?1485449771264", id:"cbvcb"},
		{src:"images/cvb.png?1485449771264", id:"cvb"},
		{src:"images/ert.png?1485449771264", id:"ert"},
		{src:"images/ertret.png?1485449771264", id:"ertret"},
		{src:"images/golova.png?1485449771264", id:"golova"},
		{src:"images/lev_noga.png?1485449771264", id:"lev_noga"},
		{src:"images/lev_plecho.png?1485449771264", id:"lev_plecho"},
		{src:"images/lev_ruka.png?1485449771264", id:"lev_ruka"},
		{src:"images/mouse.png?1485449771264", id:"mouse"},
		{src:"images/patlu.png?1485449771264", id:"patlu"},
		{src:"images/prav_noga.png?1485449771264", id:"prav_noga"},
		{src:"images/prav_plecho.png?1485449771264", id:"prav_plecho"},
		{src:"images/prav_ruka.png?1485449771264", id:"prav_ruka"},
		{src:"images/ruka.png?1485449771264", id:"ruka"},
		{src:"images/siski.png?1485449771264", id:"siski"},
		{src:"images/telo.png?1485449771264", id:"telo"}
	]
};



lib.ssMetadata = [];


// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,400);


(lib.cbvcb = function() {
	this.initialize(img.cbvcb);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,187);


(lib.cvb = function() {
	this.initialize(img.cvb);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,111,186);


(lib.ert = function() {
	this.initialize(img.ert);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,106,184);


(lib.ertret = function() {
	this.initialize(img.ertret);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,124,186);


(lib.golova = function() {
	this.initialize(img.golova);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,155,171);


(lib.lev_noga = function() {
	this.initialize(img.lev_noga);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,187);


(lib.lev_plecho = function() {
	this.initialize(img.lev_plecho);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,46,170);


(lib.lev_ruka = function() {
	this.initialize(img.lev_ruka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,68,207);


(lib.mouse = function() {
	this.initialize(img.mouse);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,46,58);


(lib.patlu = function() {
	this.initialize(img.patlu);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,171,182);


(lib.prav_noga = function() {
	this.initialize(img.prav_noga);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,94,183);


(lib.prav_plecho = function() {
	this.initialize(img.prav_plecho);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,62,168);


(lib.prav_ruka = function() {
	this.initialize(img.prav_ruka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,65,208);


(lib.ruka = function() {
	this.initialize(img.ruka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,193,161);


(lib.siski = function() {
	this.initialize(img.siski);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,175,107);


(lib.telo = function() {
	this.initialize(img.telo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,189,479);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACwAlQgBAAgBgBQAAAAgBAAQAAgBgBAAQAAAAAAgBIABgIIggAAIABAJQgRAEgBgIIAAgMIABgGIADgFIAIAAIABgMIABgPIABgHIADgFIAFgDIAHgCIAOAAQAJAAADACIAAAaIABAQIAHAAQADAKgBAJIgBAHQgBACgEABIgCABIgGgBgACdgSQgCACgBAFIAAAKIAAAIIAIAAIAAgcQgDAAgCADgAiyAaIgFgDQgDgDABgGIgIAAIgBAJQgEADgEAAQgEABgDgCQgDgBgCgDQgCgEABgFIADgVIADgVIAJgEQAGgCAFAAIAGAAIAFACIAEADIAEAFIADAIIABAJIACATIAAAGIABAFIgEAEIgFACIgGgBgAi6ACIAAgIIgBgJIgCgBIgCABIgBARIAGAAgAD9AZQAAAAgBAAQAAgBgBAAQAAAAAAgBQAAAAgBgBIgBgEIAAgFIAAgoIAAgEIACgDQADgCAEAAQAFAAADACIACADQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAmACAKQgEAFgIAAIgFgBgADTAaQgIgBgDgBIgEgDQgBgDAAgDIAAgnIgBgJIAFgCIAHgBIAEABIADACIACAEIAAASIANABIAJAEQADADABADQACADAAAFQAAAEgCAEQgCADgEACQgDADgEABIgIABgADXANQADAAACgCQACgCAAgEQgBgFgGAAIAAANgABYAZQgFgBgDgDIgEgEIgDgFIgCgIIAAgHQAAgGACgJIACgGIADgFIAEgDIAEgCQAFgCAGAAQAFAAAFABIAEADIAEADIADAFIACAFQACAKAAAGIgBAHIgCAHQgBAEgCACIgDAEQgEADgFABIgIABIgIgBgABhgUQgBAAAAABQgBAAAAAAQgBAAAAABQAAAAgBABQgCAGAAAHQAAAGACAHQAAABAAAAQABABAAAAQABABAAAAQABAAAAAAIADgBIABgEQACgEAAgHQAAgQgEAAIgBAAgAAjAaQgIgBgDgBIgDgDQgCgDAAgDIAAgtQACgCAEgBIAGgCIAHgBIAHAAIAHACIAGADIADAFQACADAAAEIgBAGIgCAEQgDACgEABIAFABIAFADIADADQABADAAAFQAAAEgCAEQgCADgEACIgHADIgIABgAAnAAIAAAMQAEAAACgCQABgCAAgDIgCgFIgDAAIgCAAgAAngWIAAALQADAAACgCQABAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQAAgBgBAAQAAgBAAgBQAAAAgBAAQAAgBgBAAIgCgBIgCAAgAguAXQgCgCAAgEIAAgaIgBgaIAQgCIAHABIAHABIAHACIAEAEQADACABADIABAIQAAAGgCAFQgBAEgEABQgDABgFABIgLABIABATQgCACgDABIgHABQgEgBgCgCgAgdgWIAAAPQADAAACgCQACgCAAgEQAAgDgCgCIgCgCIgBAAIgCAAgAhYAZQgEgBgEgDIgDgEIgDgFIgCgIIgBgHQAAgGACgJIACgGIADgFIAEgDIAFgCQAEgCAGAAQAGAAAEABIAEADIAEADIADAFIACAFQACAKAAAGIAAAHIgCAHQgBAEgCACIgEAEQgDADgFABIgIABIgJgBgAhPgUQAAAAgBABQAAAAgBAAQAAAAAAABQgBAAAAABQgCAGAAAHQAAAGABAHQABABAAAAQAAABABAAQAAABABAAQAAAAABAAIACgBIACgEQABgEAAgHQAAgQgEAAIgBAAgAh/AYIgCgEIAAgFIAAgkQAAAAgBAAQAAAAAAgBQgBAAgBAAQAAAAgBAAQgEABgBABIABAbQACATgNAAIgFgBIgDgDQgCgDAAgHIAAggIgBgLQAFgCAJgCIAOgBIAJAAIAGACQAEABABACQACACAAAEIAAAuQgBACgDABIgHACQgEAAgDgCgAjrAZQgBAAAAAAQgBgBAAAAQAAAAAAgBQgBAAAAgBIgBgEIAAgRIgJABIAAATQgDAFgIAAIgFgBQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAgBQgBgCAAgHIAAghIgBgOQAHgCAEAAQAFAAACACIACADQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABIAAARIAJgBIgBgPQAAgEACgCIADgDIAGgBQAEAAADACIACADIABAEIAAAwQgDAFgIAAIgFgBg");
	this.shape.setTransform(27,3.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54.1,7.6);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AAQAZIgDgCQgCgDAAgEIgGgBIgBAIIgFACQgDABgCgBQgDgCgBgCQgBgDAAgEIACgQIADgRIAGgEIAHgBIAFAAIAEABIAEADIADADIACAHIABAHIACAPIAAAFIABAEIgEADIgEABIgCAAIgDAAgAALAFIgBgFIgBgIIgEAAIAAANIAGAAgAA6AXQgCgCgCgDIgEgMIgCAJIgEAJIgEABIgFgBIgCgBQAAAAgBgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIABgFQADgHAFgHIgGgKIgDgKIACgDIAGgBIADABQABAAAAAAQABABAAAAQABAAAAABQAAABABAAIAEAQIAEgQIAEgDIAEgBIAEABQAAAAABAAQAAABABAAQAAAAAAABQABABAAAAIgCAFIgHAPIALATQAAABAAAAQAAABgBAAQAAABAAAAQgBABgBAAQgCACgEAAQgDAAgBgCgAgbAYIgCgCIgBgFIAAgMIAAgQIgEAcIgBAEIgCACQgCACgCAAIgEgBIgDgBQAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIgDgQIgCgHIgCgHIADAbIgBAEIgCACIgCACIgEABIgDgBIgCgCIgBgDIgBgEIAAgaIgBgLIAFgBIAIgBIAHABIACACIACACIABAGIACAIIACALIADgUIABgFIAEgDIADgCIADAAIAEAAIADACIADADIACAEIAAAQIAAALIABAJIgEADIgEABIgFgBg");
	this.shape.setTransform(7.2,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,14.3,5.2);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AALBiQgNgHAAgRQAAgGACgJIAJgYQADgOgCgLQgBgEgGgKQgEgNgHgGIgRgKQgNgHgJgKQgHgGgDgIQgGgPALgMQAFgFAHgCQAIgCAGADQAKADAOAPQAEAEANAHQAQAKAQAaQAIAOACAIQADAIAAAPQABAegFAPIgIATQgEAKgFAFQgIAIgJAAQgFAAgGgCg");
	this.shape.setTransform(6,10);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,12.1,20.1);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF3366","#FF3333","#FF0000"],[0,0.471,1],-13.3,0,13.4,0).s().p("AhdBeQgngnAAg3QAAg2AngnQAngnA2AAQA3AAAnAnQAnAnAAA2QAAA3gnAnQgnAng3AAQg2AAgngng");
	this.shape.setTransform(13.4,13.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,26.7,26.7);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("A1mg6MArNAAAQAeAAAAAeIAAA5QAAAegeAAMgrNAAAQgeAAAAgeIAAg5QAAgeAeAAg");
	this.shape.setTransform(141.4,5.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#078AFF","#28A4FF","#01C9FF"],[0,0.341,1],-141.3,0,141.4,0).s().p("A1mA6QgeAAAAgdIAAg5QAAgeAeAAMArNAAAQAeAAAAAeIAAA5QAAAdgeAAg");
	this.shape_1.setTransform(141.4,5.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,284.7,13.8);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(2,1,1).p("AD1AAQAABlhJBHQhHBJhlAAQhkAAhIhJQhIhHAAhlQAAhkBIhIQBIhIBkAAQBlAABHBIQBJBIAABkg");
	this.shape.setTransform(24.5,24.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,51,51);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AgaAcQgMgMAAgQQAAgPAMgLQALgMAPAAQAQAAAMAMQALALAAAPQAAAQgLAMQgMALgQAAQgPAAgLgLg");
	this.shape.setTransform(4,4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,7.9,7.9);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(2,1,1).p("AFsAAQAACXhrBqQhqBriXAAQiVAAhrhrQhrhqAAiXQAAiVBrhrQBrhrCVAAQCXAABqBrQBrBrAACVg");
	this.shape.setTransform(36.4,36.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,74.8,74.8);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgzdAaKMAAAg0TMBm6AAAMAAAA0Tg");
	this.shape.setTransform(329.4,167.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,658.8,335);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFF99","#FFFFFF"],[0,1],-42.8,0,42.9,0).s().p("AmrNYIAA6vINXAAIAAavg");
	this.shape.setTransform(42.9,85.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,85.7,171.4);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","#000000"],[0,1],-185.3,0,185.4,0).s().p("A88aRMAAAg0hMA55AAAMAAAA0hg");
	this.shape.setTransform(185.4,168.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,370.7,336.3);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#CCCCCC"],[0,1],-28.7,46.9,-28.7,-5.4).s().p("AB4ENIAJkkIhIB2QgNASgPAKQgPAJgOAAQgPAAgOgKQgQgKgLgTIhHhrIAIEbIiNAAIAAmvQAAgXAGgSQAFgSAKgNQARgZAegHQAcgFAbALQAbAKAOAZIBgCqIBoiqQAOgZAbgKQAZgLAbAFQAcAHARAZQAJANAFASQAFASAAAXIAAGvg");
	this.shape.setTransform(26.2,26.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#CCCCCC"],[0,1],-39.4,40.6,-39.4,-4.4).s().p("ABWELIAAh8IirAAIAAB8IiLAAIAAlaQABgmAPgjQANgiAagZQAbgbAigOQAigOAmAAIBIAAQAmAAAjAOQAhAOAbAbQAaAZAPAiQAPAjgBAmIAAFagAhHhyQgOAPAAAUIAABSICrAAIAAhSQAAgUgPgPQgOgPgVAAIhIAAQgUAAgPAPg");
	this.shape_1.setTransform(78.5,27.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFFFFF","#CCCCCC"],[0,1],-33,34.4,-33,-11.1).s().p("ABZEJIAAi6IiwAAIAAC6IiLAAIAAoSICLAAIAADXICwAAIAAjXICKAAIAAISg");
	this.shape_2.setTransform(127.3,27.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFFFFF","#CCCCCC"],[0,1],-25.8,34,-25.8,-5.5).s().p("AhBEJIAAmLIiDAAIAAiGIGJAAIAACGIiCAAIAAGLg");
	this.shape_3.setTransform(173.2,27.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FFFFFF","#CCCCCC"],[0,1],-26.9,34.4,-26.9,-6).s().p("AibEKIAAiGICpAAQAVAAAOgQQAPgRAAgUIAAgNQgJAJgOAEIg3ADQgmAAgigOQgigOgagbQgagZgOggQgPgjAAgmIAAiiICKAAIAACiQAAAUAPAQQAOAOAUAAIAeAAQAUAAAOgOQAPgQAAgUIAAiiICJAAIAAFYQAAAlgPAjQgPAigZAaQgaAagiAOQgjAPgmAAg");
	this.shape_4.setTransform(215.6,27.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 2
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#ACB0B1").s().p("AM0ENIAAiGICrAAQAUAAAPgQQAPgRAAgUIAAgNQgKAJgNAEIg5ADQgmAAgigOQgigOgagbQgagZgOggQgPgjAAgmIAAiiICKAAIAACiQAAAUAPAQQAOAOAUAAIAfAAQAVAAAOgOQAPgQAAgUIAAiiICJAAIAAFYQgBAlgPAjQgOAigZAaQgbAaghAOQgjAPgmAAgAC3ENIAAi7IizAAIAAC7IiIAAIgBoSICJAAIAADXICzAAIAAjXICKAAIAAISgAkyENIAAh8IitAAIAAB8IiLAAIAAlaQABgnAPgiQANgiAagaQAbgaAigOQAigPAnAAIBJAAQAlAAAkAPQAhAOAbAaQAaAaAOAiQAQAigBAnIAAFagAnRhwQgOAOAAAVIAABSICtAAIAAhSQAAgVgPgOQgOgPgVAAIhJAAQgVAAgPAPgAsbENIAJkkIhJB2QgMASgQAKQgOAJgPAAQgQAAgOgKQgQgKgLgTIhHhrIAIEbIiNAAIAAmvQgBgXAHgSQAEgSALgNQARgZAegHQAcgFAbALQAbAKANAZIBiCqIBpiqQAOgZAagKQAagLAbAFQAbAHASAZQAJANAFASQAFASAAAXIAAGvgAHmEMIAAmMIiDAAIAAiFIGLAAIAACFIiCAAIAAGMg");
	this.shape_5.setTransform(120.5,27);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,238.4,54);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#CCCCCC"],[0,1],0,-17.7,0,17.8).s().p("ABGDPIAAiSIiKAAIAACSIhsAAIAAmdIBsAAIAACoICKAAIAAioIBrAAIAAGdg");
	this.shape.setTransform(17.8,21.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#CCCCCC"],[0,1],0,-17.5,0,17.6).s().p("ABCDRIAAhhIiEAAIAABhIhsAAIAAkOQAAgeALgbQAMgaAUgVQAVgUAagLQAbgMAdAAIA4AAQAeAAAbAMQAaALAVAUQAUAVAMAaQALAbAAAeIAAEOgAg3hYQgLALAAAQIAABAICEAAIAAhAQABgQgLgLQgLgMgRAAIg4AAQgQAAgLAMg");
	this.shape_1.setTransform(56,21.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFFFFF","#CCCCCC"],[0,1],0,-20.4,0,20.4).s().p("ABeDSIAHjkIg5BcQgKAOgMAIQgLAHgLAAQgMAAgLgIQgMgHgJgPIg3hUIAGDdIhuAAIAAlQQAAgSAFgOQAEgOAIgKQANgTAYgGQAVgEAVAIQAWAJAKATIBLCEIBRiEQALgTAVgJQAUgIAUAEQAWAGAOATQAHAKAEAOQAEAOAAASIAAFQg");
	this.shape_2.setTransform(96.8,21.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFFFFF","#CCCCCC"],[0,1],0,-21.2,0,21.3).s().p("AgqDRQgUgFgTgIQgTgJgSgLQgRgMgOgOQgPgOgLgRQgMgSgIgSQgIgUgEgUQgEgWAAgVQAAgTAEgWQAEgVAIgTQAIgTAMgSQALgQAPgPQAOgPARgLQASgMATgHQATgJAUgEQAVgEAVgBQAVABAVAEQAVAEATAJQATAHASAMQARALAOAPQAPAPALAQQAMASAIATQAIATAEAVQAEAWAAATQAAAVgEAWQgEAUgIAUQgIASgMASQgLARgPAOQgOAOgRAMQgSAMgTAIQgTAIgVAFQgVADgVAAQgVAAgVgDgAgnheQgSAIgPAPQgOAOgIASQgIAUAAATQAAAVAIATQAIASAOAPQAPAOASAIQATAIAUAAQAUAAAUgIQATgIAOgOQAPgPAIgSQAIgTAAgVQAAgTgIgUQgIgSgPgOQgOgPgTgIQgTgIgVAAQgUAAgTAIg");
	this.shape_3.setTransform(141.4,21.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FFFFFF","#CCCCCC"],[0,1],0,-16.6,0,16.7).s().p("AA6DPIAAiGIhOAAQgdAAgbgMQgagLgUgUQgVgVgLgYQgLgbAAgdIAAiHIBrAAIAACGQAAAQALAMQALALAQAAIBOAAIAAitIBsAAIAAGdg");
	this.shape_4.setTransform(181.3,21.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FFFFFF","#CCCCCC"],[0,1],0.1,-17.6,0.1,17.7).s().p("Ah5DSQgXgGgPgTQgIgKgDgMQgFgNAAgOIAAlZIBtAAIgDDuIB0jQQAKgTAXgIQAUgJAWAFQAYAFAOATQAHAKAFAOQAEAOAAASIAAFOIhuAAIADjWIhrC6QgHAMgKAJQgKAHgLAFQgMAEgMAAQgKAAgLgDg");
	this.shape_5.setTransform(218.6,21.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 2
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#ACB0B1").s().p("ANyDTQgXgGgPgTQgIgKgEgMQgEgNAAgOIAAlZIBtAAIgEDuIB3jQQAKgTAWgIQAVgJAWAFQAXAFAOATQAIAKAEAOQAFAOAAASIAAFOIhuAAIACjWIhsC6QgHAMgKAJQgKAHgLAFQgMAEgMAAQgLAAgKgDgAC9DPQgUgFgTgIQgTgIgSgLQgRgMgOgOQgPgPgLgRQgMgRgIgTQgIgTgEgVQgEgVAAgUQAAgVAEgWQAEgUAIgUQAIgTAMgRQALgRAPgPQAOgOARgMQASgLATgIQATgJAUgEQAVgEAWAAQAWAAAVAEQAVAEATAJQATAIASALQARAMAOAOQAPAPALARQAMARAIATQAIAUAEAUQAEAWAAAVQAAAUgEAVQgEAVgIATQgIATgMARQgLARgPAPQgOAOgRAMQgSALgTAIQgTAIgVAFQgVAEgWAAQgWAAgVgEgADAhgQgSAIgPAPQgOAOgIATQgIATAAAVQAAATAIATQAIATAOAOQAPAOASAIQATAJAVAAQAVAAAUgJQATgIAOgOQAPgOAIgTQAIgTAAgTQAAgVgIgTQgIgTgPgOQgOgPgTgIQgTgIgWAAQgVAAgTAIgAKyDOIAAiGIhQAAQgdAAgbgMQgagLgVgVQgUgUgLgYQgLgbAAgdIAAiHIBqAAIAACGQAAAQAMAMQALALAQAAIBQAAIAAitIBsAAIAAGdgAh1DOIAHjkIg5BcQgKAOgMAIQgLAHgMAAQgNAAgLgIQgMgHgJgPIg3hUIAGDdIhuAAIAAlQQAAgSAFgOQAEgOAIgKQANgTAYgGQAVgEAVAIQAWAJAKATIBMCEIBSiEQALgTAVgJQAUgIAUAEQAWAGAOATQAHAKAEAOQAEAOAAASIAAFQgAopDOIAAhhIiHAAIAABhIhsAAIAAkOQAAgeAMgbQALgaAUgUQAVgVAagLQAbgLAeAAIA5AAQAeAAAbALQAaALAVAVQAUAUAMAaQALAbAAAeIAAEOgAqkhbQgMALAAAQIAABAICHAAIAAhAQAAgQgLgLQgLgMgRAAIg5AAQgQAAgLAMgAukDOIAAiSIiLAAIAACSIhsAAIgBmdIBtAAIAACnICLAAIAAinIBsAAIAAGdg");
	this.shape_6.setTransform(120.5,21);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.4,238.7,43.4);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.siski();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.843,0.843);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,147.6,90.2);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#33FF00").ss(2,1,1).p("ABwAAQAAAughAhQghAhguAAQgtAAghghQghghAAguQAAgtAhghQAhghAtAAQAuAAAhAhQAhAhAAAtg");
	this.shape.setTransform(11.3,11.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,24.5,24.5);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lev_ruka();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,68,207);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lev_noga();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,90,187);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lev_plecho();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,46,170);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.prav_noga();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,94,183);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.prav_plecho();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,62,168);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.prav_ruka();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,65,208);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.telo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,189,479);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.patlu();
	this.instance.parent = this;
	this.instance.setTransform(92.6,141.6,0.288,0.288,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.golova();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,155,192.2);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.963,0.963);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,674,385.2);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mouse();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,46,58);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACtBXIAAitIAcAAIAABCIANAAQALAAAHACQAHADAGAGQAFAFACAHQADAHAAALIAAAXQAAAKgDAIQgCAJgFAFQgGAGgHACQgHADgLAAgADJA+IANAAQAHAAADgDQAEgFgBgJIAAgaQABgJgEgEQgDgDgHAAIgNAAgAAYBXIAAitIAbAAIAACUIAYAAIAAiUIAbAAIAACUIAYAAIAAiUIAcAAIAACtgAgWBXIAAitIAaAAIAACtgAh3BXIAAitIAcAAIAABCIAMAAQALAAAIACQAHADAFAGQAGAFACAHQADAHAAALIAAAXQAAAKgDAIQgCAJgGAFQgFAGgHACQgIADgLAAgAhbA+IAMAAQAIAAACgDQAEgFAAgJIAAgaQAAgJgEgEQgCgDgIAAIgMAAgAilBXIAAh8IgTB8IgaAAIgVh6IAAB6IgXAAIAAitIAmAAIAUB6IATh6IAmAAIAACtg");
	this.shape.setTransform(25.6,8.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,51.1,17.5);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACvBjIAAgYIg7AAIAAAYIgbAAIAAgwIAMAAIAEgKIACgNIAGh+IBNAAIAACVIAMAAIAAAwgACGAcQgBAJgCAGQgBAEgDAEIAkAAIAAh8IgYAAgAEYBLIAAh5IgiB5IgcAAIAAitIAYAAIAABtIAghtIAfAAIAACtgAAEBLIAAitIBKAAIAAAZIgvAAIAAAxIAlAAIAAAYIglAAIAAAyIAvAAIAAAZgAhgBLIAAitIApAAQALAAAIADQAHACAGAFQAFAFACAIQACAHABAKIAAAHQgBANgEAJQgFAJgIAEQAFACAEAEQAEADADAFQAEAHAAAOIAAAPQAAAKgCAIQgDAHgFAGQgGAFgIADQgHACgLAAgAhEAyIAPAAQAHAAAEgEQADgEAAgJIAAgPQAAgMgDgFQgFgCgJAAIgMAAgAhEgbIAKAAQAJAAADgEQAFgEAAgKIAAgKQAAgJgEgEQgDgFgHAAIgNAAgAiIBLIgFgfIgiAAIgFAfIgYAAIAcitIAnAAIAcCtgAiRAUIgNhXIgNBXIAaAAgAj2BLIAAhLIgeAAIAABLIgcAAIAAitIAcAAIAABLIAeAAIAAhLIAdAAIAACtg");
	this.shape.setTransform(30.6,9.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,61.1,19.9);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ert();
	this.instance.parent = this;
	this.instance.setTransform(502.7,-103.2);

	this.instance_1 = new lib.cvb();
	this.instance_1.parent = this;
	this.instance_1.setTransform(497.9,-104.8);

	this.instance_2 = new lib.cbvcb();
	this.instance_2.parent = this;
	this.instance_2.setTransform(490.5,-101.5);

	this.instance_3 = new lib.ertret();
	this.instance_3.parent = this;
	this.instance_3.setTransform(483.4,-100.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(502.7,-103.2,106,184);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ44();
	this.instance.parent = this;
	this.instance.setTransform(17.9,11.7,1,1,0,0,0,6,10);
	this.instance.alpha = 0.469;
	this.instance.compositeOperation = "lighter";
	this.instance.filters = [new cjs.BlurFilter(6, 6, 1)];
	this.instance.cache(-2,-2,16,24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ43();
	this.instance_1.parent = this;
	this.instance_1.setTransform(13.3,13.3,1,1,0,0,0,13.3,13.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C50404").s().p("AhdBeQgngnAAg3QAAg2AngnQAngnA2AAQA3AAAnAnQAnAnAAA2QAAA3gnAnQgnAng3AAQg2AAgngng");
	this.shape.setTransform(12.6,13.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.7,-1.3,31.6,29);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.Символ46();
	this.instance.parent = this;
	this.instance.setTransform(4.4,18.4,1,1,0,0,0,27,3.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60));

	// Слой 3
	this.instance_1 = new lib.Символ45();
	this.instance_1.parent = this;
	this.instance_1.setTransform(193.3,15.3,1,1,0,0,0,7.2,2.6);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(34).to({alpha:1},5).to({scaleX:1.48,scaleY:1.48,x:196.8,y:14.1},5).to({scaleX:1,scaleY:1,x:193.3,y:15.3},5).to({scaleX:1.48,scaleY:1.48,x:196.8,y:14.1},5).to({scaleX:1,scaleY:1,x:193.3,y:15.3,alpha:0},5).wait(1));

	// Слой 2
	this.instance_2 = new lib.Символ42();
	this.instance_2.parent = this;
	this.instance_2.setTransform(74,30.9,1,1,0,0,0,13.3,13.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:94},4).to({x:84},5).to({x:124},5).to({x:114},5).to({x:154},5).to({x:144},5).to({x:180.5},5).to({x:176.3},5).to({x:180.5},5).to({x:176.3},5).to({x:180.5},5).to({x:74},5).wait(1));

	// Слой 1
	this.instance_3 = new lib.Символ41();
	this.instance_3.parent = this;
	this.instance_3.setTransform(86,31.4,0.768,1,180,0,0,141.3,5.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.9,12.7,223.4,33.5);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ34();
	this.instance.parent = this;
	this.instance.setTransform(24.9,25,1,1,0,0,0,4,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

	// Слой 2
	this.instance_1 = new lib.Символ33();
	this.instance_1.parent = this;
	this.instance_1.setTransform(24.2,24.3,1,1,0,0,0,36.4,36.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.61,scaleY:0.61},9).to({scaleX:1,scaleY:1},10).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ35();
	this.instance_2.parent = this;
	this.instance_2.setTransform(24.5,24.5,1,1,0,0,0,24.5,24.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:24.4,regY:24.4,scaleX:1.27,scaleY:1.27,x:24.4,y:24.4},9).to({regX:24.5,regY:24.5,scaleX:1,scaleY:1,x:24.5,y:24.5},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.2,-13.1,74.8,74.8);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ruka();
	this.instance.parent = this;
	this.instance.setTransform(80.5,0,1,1,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(50.5,60.7,0.32,0.32,89.1,0,0,586.5,-78.6);
	this.instance_1.alpha = 0.762;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.9,0,248.6,236);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ31();
	this.instance.parent = this;
	this.instance.setTransform(123.8,118,1,1,0,0,0,123.8,118);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:115},14).to({y:118},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.9,0,248.6,236);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ28();
	this.instance.parent = this;
	this.instance.setTransform(329.4,167.5,1,1,0,0,0,329.4,167.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,658.8,335);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ25();
	this.instance.parent = this;
	this.instance.setTransform(-476.2,-30.1,1,1,15,0,0,42.9,85.7);
	this.instance.alpha = 0.32;
	this.instance.compositeOperation = "lighter";
	this.instance.filters = [new cjs.BlurFilter(10, 10, 1)];
	this.instance.cache(-2,-2,90,175);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-544.8,-129,141,201);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ14();
	this.instance.parent = this;
	this.instance.setTransform(18.6,101.9,0.609,0.609,0,0,0,11.4,11.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:11.2,regY:11.2,scaleX:1,scaleY:1,x:18.5,y:101.6},4).to({regX:11.4,regY:11.3,scaleX:0.61,scaleY:0.61,x:18.6,y:101.9},5).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ14();
	this.instance_1.parent = this;
	this.instance_1.setTransform(18.5,101.6,1,1,0,0,0,11.2,11.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:11.4,regY:11.3,scaleX:0.61,scaleY:0.61,x:18.6,y:101.9},4).to({regX:11.2,regY:11.2,scaleX:1,scaleY:1,x:18.5,y:101.6},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.3,89.4,24.5,24.5);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("ANmDWQgXgHgPgTQgIgKgEgMQgEgMAAgPIAAlZIAYAAIAAgEIBtAAIgDDJIBeimQAKgTAWgJQAOgGAOABQATgIAUAFQAXAFAOATQAIAKAEAOQAFAOAAASIAAFOIgYAAIAAAFIhuAAIACizIhUCSQgHAMgKAJQgKAHgLAFQgLAEgMAAIgBAAQgMAEgMAAQgLAAgKgCgACxDRQgUgEgTgIQgTgJgSgLQgRgMgOgOQgPgOgLgRQgMgSgIgTQgIgTgEgUQgEgWAAgVQAAgUAEgVQAEgVAIgTQAIgTAMgSQALgRAPgOQAOgPARgLQASgMATgIQATgIAUgEIAQgDIAIgCQAVgEAWAAQAWAAAVAEQAVAEATAJQATAIASALQARAMAOAOQAPAPALARQAMARAIATQAIAUAEAUQAEAWAAAVQAAAUgEAVQgEAVgIATQgIATgMARQgLARgPAPQgOAOgRAMQgSALgTAIQgTAIgVAFIgOACIgKACQgVAEgWAAQgWAAgVgEgADVhlIgJADQgSAIgPAPQgOAOgIATQgIATAAAVQAAATAIATQAIATAOAOQAPAOASAIQATAJAVAAIAHAAIAKgEQATgIAOgOQAPgPAIgSQAIgTAAgVQAAgTgIgUQgIgSgPgPQgOgOgTgIQgTgIgWAAIgHAAgAKmDQIAAiGIhQAAQgdAAgbgMQgagLgVgUQgUgUgLgYQgLgbAAgeIAAiHIAYAAIAAgEIBqAAIAACGQAAAQAMAMQALALAQAAIA4AAIAAipIAYAAIAAgEIBsAAIAAGdIgYAAIAAAEgAiBDQIAGjAIggA0QgKAOgMAIQgLAHgMAAIgFAAQgJAEgKAAQgNAAgLgHQgMgIgJgPIgeguIAFCzIgYAAIAAAEIhuAAIAAlPQAAgSAFgPQAEgNAIgLQANgTAYgFIAOgCIAKgDQAVgEAVAIQAWAJAKATIBCBzIBEhvQALgTAVgIQANgGANAAQATgHATAEQAWAGAOATQAHAKADAOQADAOAAASIAAFQIgWAAIAAAEgAo1DQIAAhgIhvAAIAABcIgYAAIAAAEIhsAAIAAkNQAAgeAMgbQALgbAUgUQAVgUAagLQAUgJAWgCQATgFAUAAIA5AAQAeAAAbALQAaALAVAVQAUAUAMAaQALAbAAAeIAAEOIgYAAIAAAEgAqYhdQgMALAAAQIAABCIBvAAIAAg9QAAgQgLgMQgLgLgRAAIgzAAQgFACgEAFgAuwDQIAAiRIhzAAIAACNIgYAAIAAAEIhsAAIgBmdIAYAAIAAgEIBtAAIAACnIBzAAIAAijIAYAAIAAgEIBsAAIAAGdIgYAAIAAAEg");
	var mask_graphics_39 = new cjs.Graphics().p("ANmDWQgXgHgPgTQgIgKgEgMQgEgMAAgPIAAlZIAYAAIAAgEIBtAAIgDDJIBeimQAKgTAWgJQAOgGAOABQATgIAUAFQAXAFAOATQAIAKAEAOQAFAOAAASIAAFOIgYAAIAAAFIhuAAIACizIhUCSQgHAMgKAJQgKAHgLAFQgLAEgMAAIgBAAQgMAEgMAAQgLAAgKgCgACxDRQgUgEgTgIQgTgJgSgLQgRgMgOgOQgPgOgLgRQgMgSgIgTQgIgTgEgUQgEgWAAgVQAAgUAEgVQAEgVAIgTQAIgTAMgSQALgRAPgOQAOgPARgLQASgMATgIQATgIAUgEIAQgDIAIgCQAVgEAWAAQAWAAAVAEQAVAEATAJQATAIASALQARAMAOAOQAPAPALARQAMARAIATQAIAUAEAUQAEAWAAAVQAAAUgEAVQgEAVgIATQgIATgMARQgLARgPAPQgOAOgRAMQgSALgTAIQgTAIgVAFIgOACIgKACQgVAEgWAAQgWAAgVgEgADVhlIgJADQgSAIgPAPQgOAOgIATQgIATAAAVQAAATAIATQAIATAOAOQAPAOASAIQATAJAVAAIAHAAIAKgEQATgIAOgOQAPgPAIgSQAIgTAAgVQAAgTgIgUQgIgSgPgPQgOgOgTgIQgTgIgWAAIgHAAgAKmDQIAAiGIhQAAQgdAAgbgMQgagLgVgUQgUgUgLgYQgLgbAAgeIAAiHIAYAAIAAgEIBqAAIAACGQAAAQAMAMQALALAQAAIA4AAIAAipIAYAAIAAgEIBsAAIAAGdIgYAAIAAAEgAiBDQIAGjAIggA0QgKAOgMAIQgLAHgMAAIgFAAQgJAEgKAAQgNAAgLgHQgMgIgJgPIgeguIAFCzIgYAAIAAAEIhuAAIAAlPQAAgSAFgPQAEgNAIgLQANgTAYgFIAOgCIAKgDQAVgEAVAIQAWAJAKATIBCBzIBEhvQALgTAVgIQANgGANAAQATgHATAEQAWAGAOATQAHAKADAOQADAOAAASIAAFQIgWAAIAAAEgAo1DQIAAhgIhvAAIAABcIgYAAIAAAEIhsAAIAAkNQAAgeAMgbQALgbAUgUQAVgUAagLQAUgJAWgCQATgFAUAAIA5AAQAeAAAbALQAaALAVAVQAUAUAMAaQALAbAAAeIAAEOIgYAAIAAAEgAqYhdQgMALAAAQIAABCIBvAAIAAg9QAAgQgLgMQgLgLgRAAIgzAAQgFACgEAFgAuwDQIAAiRIhzAAIAACNIgYAAIAAAEIhsAAIgBmdIAYAAIAAgEIBtAAIAACnIBzAAIAAijIAYAAIAAgEIBsAAIAAGdIgYAAIAAAEg");
	var mask_graphics_79 = new cjs.Graphics().p("ANmDWQgXgHgPgTQgIgKgEgMQgEgMAAgPIAAlZIAYAAIAAgEIBtAAIgDDJIBeimQAKgTAWgJQAOgGAOABQATgIAUAFQAXAFAOATQAIAKAEAOQAFAOAAASIAAFOIgYAAIAAAFIhuAAIACizIhUCSQgHAMgKAJQgKAHgLAFQgLAEgMAAIgBAAQgMAEgMAAQgLAAgKgCgACxDRQgUgEgTgIQgTgJgSgLQgRgMgOgOQgPgOgLgRQgMgSgIgTQgIgTgEgUQgEgWAAgVQAAgUAEgVQAEgVAIgTQAIgTAMgSQALgRAPgOQAOgPARgLQASgMATgIQATgIAUgEIAQgDIAIgCQAVgEAWAAQAWAAAVAEQAVAEATAJQATAIASALQARAMAOAOQAPAPALARQAMARAIATQAIAUAEAUQAEAWAAAVQAAAUgEAVQgEAVgIATQgIATgMARQgLARgPAPQgOAOgRAMQgSALgTAIQgTAIgVAFIgOACIgKACQgVAEgWAAQgWAAgVgEgADVhlIgJADQgSAIgPAPQgOAOgIATQgIATAAAVQAAATAIATQAIATAOAOQAPAOASAIQATAJAVAAIAHAAIAKgEQATgIAOgOQAPgPAIgSQAIgTAAgVQAAgTgIgUQgIgSgPgPQgOgOgTgIQgTgIgWAAIgHAAgAKmDQIAAiGIhQAAQgdAAgbgMQgagLgVgUQgUgUgLgYQgLgbAAgeIAAiHIAYAAIAAgEIBqAAIAACGQAAAQAMAMQALALAQAAIA4AAIAAipIAYAAIAAgEIBsAAIAAGdIgYAAIAAAEgAiBDQIAGjAIggA0QgKAOgMAIQgLAHgMAAIgFAAQgJAEgKAAQgNAAgLgHQgMgIgJgPIgeguIAFCzIgYAAIAAAEIhuAAIAAlPQAAgSAFgPQAEgNAIgLQANgTAYgFIAOgCIAKgDQAVgEAVAIQAWAJAKATIBCBzIBEhvQALgTAVgIQANgGANAAQATgHATAEQAWAGAOATQAHAKADAOQADAOAAASIAAFQIgWAAIAAAEgAo1DQIAAhgIhvAAIAABcIgYAAIAAAEIhsAAIAAkNQAAgeAMgbQALgbAUgUQAVgUAagLQAUgJAWgCQATgFAUAAIA5AAQAeAAAbALQAaALAVAVQAUAUAMAaQALAbAAAeIAAEOIgYAAIAAAEgAqYhdQgMALAAAQIAABCIBvAAIAAg9QAAgQgLgMQgLgLgRAAIgzAAQgFACgEAFgAuwDQIAAiRIhzAAIAACNIgYAAIAAAEIhsAAIgBmdIAYAAIAAgEIBtAAIAACnIBzAAIAAijIAYAAIAAgEIBsAAIAAGdIgYAAIAAAEg");
	var mask_graphics_163 = new cjs.Graphics().p("ANmDWQgXgHgPgTQgIgKgEgMQgEgMAAgPIAAlZIAYAAIAAgEIBtAAIgDDJIBeimQAKgTAWgJQAOgGAOABQATgIAUAFQAXAFAOATQAIAKAEAOQAFAOAAASIAAFOIgYAAIAAAFIhuAAIACizIhUCSQgHAMgKAJQgKAHgLAFQgLAEgMAAIgBAAQgMAEgMAAQgLAAgKgCgACxDRQgUgEgTgIQgTgJgSgLQgRgMgOgOQgPgOgLgRQgMgSgIgTQgIgTgEgUQgEgWAAgVQAAgUAEgVQAEgVAIgTQAIgTAMgSQALgRAPgOQAOgPARgLQASgMATgIQATgIAUgEIAQgDIAIgCQAVgEAWAAQAWAAAVAEQAVAEATAJQATAIASALQARAMAOAOQAPAPALARQAMARAIATQAIAUAEAUQAEAWAAAVQAAAUgEAVQgEAVgIATQgIATgMARQgLARgPAPQgOAOgRAMQgSALgTAIQgTAIgVAFIgOACIgKACQgVAEgWAAQgWAAgVgEgADVhlIgJADQgSAIgPAPQgOAOgIATQgIATAAAVQAAATAIATQAIATAOAOQAPAOASAIQATAJAVAAIAHAAIAKgEQATgIAOgOQAPgPAIgSQAIgTAAgVQAAgTgIgUQgIgSgPgPQgOgOgTgIQgTgIgWAAIgHAAgAKmDQIAAiGIhQAAQgdAAgbgMQgagLgVgUQgUgUgLgYQgLgbAAgeIAAiHIAYAAIAAgEIBqAAIAACGQAAAQAMAMQALALAQAAIA4AAIAAipIAYAAIAAgEIBsAAIAAGdIgYAAIAAAEgAiBDQIAGjAIggA0QgKAOgMAIQgLAHgMAAIgFAAQgJAEgKAAQgNAAgLgHQgMgIgJgPIgeguIAFCzIgYAAIAAAEIhuAAIAAlPQAAgSAFgPQAEgNAIgLQANgTAYgFIAOgCIAKgDQAVgEAVAIQAWAJAKATIBCBzIBEhvQALgTAVgIQANgGANAAQATgHATAEQAWAGAOATQAHAKADAOQADAOAAASIAAFQIgWAAIAAAEgAo1DQIAAhgIhvAAIAABcIgYAAIAAAEIhsAAIAAkNQAAgeAMgbQALgbAUgUQAVgUAagLQAUgJAWgCQATgFAUAAIA5AAQAeAAAbALQAaALAVAVQAUAUAMAaQALAbAAAeIAAEOIgYAAIAAAEgAqYhdQgMALAAAQIAABCIBvAAIAAg9QAAgQgLgMQgLgLgRAAIgzAAQgFACgEAFgAuwDQIAAiRIhzAAIAACNIgYAAIAAAEIhsAAIgBmdIAYAAIAAgEIBtAAIAACnIBzAAIAAijIAYAAIAAgEIBsAAIAAGdIgYAAIAAAEg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:120.2,y:24.6}).wait(39).to({graphics:mask_graphics_39,x:120.2,y:24.6}).wait(40).to({graphics:mask_graphics_79,x:120.2,y:24.6}).wait(84).to({graphics:mask_graphics_163,x:120.2,y:24.6}).wait(1));

	// Слой 4
	this.instance = new lib.Символ24();
	this.instance.parent = this;
	this.instance.setTransform(471.1,125.5,1,1,0,0,0,42.9,85.7);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:469.1},39,cjs.Ease.get(-1)).to({x:849.1},40,cjs.Ease.get(1)).wait(85));

	// Слой 2
	this.instance_1 = new lib.Символ17();
	this.instance_1.parent = this;
	this.instance_1.setTransform(119.3,25,1,1,0,0,0,118.1,21.4);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(164));

	// Слой 5 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("ANBENIAAgBIgaAAIAAiFICrAAQAVAAAOgRQAOgQAAgTIg1ADIgVgBIgFAAQgmAAgjgPQghgOgagaQgbgagOgfQgOgjAAgmIAAgbIiAAAIAAGLIiHAAIAAgBIgaAAIAAmKIhoAAIAAgBIgaAAIAAiGIGLAAIAAABIAYAAIAAgBICKAAIAAABIAaAAIAACiQAAAUAOAPQALALAOADIAQAAQAUAAAOgPQAOgPAAgUIAAiiICJAAIAAABIAaAAIAAFXQAAAmgOAiQgPAigaAaQgZAagiAOQgjAPgmAAgADEENIAAgBIgaAAIAAi5IiYAAIAAC6IiJAAIAAgBIgaAAIAAoSICKAAIAAABIAZAAIAADWICYAAIAAjXICKAAIAAABIAaAAIAAISgAkmENIAAgBIgaAAIAAh7IiSAAIAAB8IiKAAIAAgBIgaAAIAAlaQAAgmAOgjQAOgiAbgZQAagbAigOQAjgOAmAAIBJAAIAUABIAGAAQAmAAAjAOQAiAOAaAbQAaAZAPAiQAPAjAAAmIAAFagAnDhwQgPAPAAAUIAABRICSAAIAAhSQAAgUgOgPQgLgLgNgDIg7AAQgUAAgOAPgAsOENIAAgBIgaAAIAIj3IgtBLQgNARgPAKQgPAJgQAAQgHAAgHgCIgMABQgQAAgOgKQgPgJgMgTIgrhEIAGD0IiNAAIAAgBIgaAAIAAmuQABgXAFgTQAGgRAKgOQARgYAegHQASgEARAEQAXgDAWAJQAcALAOAYIBUCUIBbiVQAPgYAbgLQAZgKAZAFQANgCAOADQAdAHARAYQAJANAFASQAFATAAAXIAAGug");
	var mask_1_graphics_163 = new cjs.Graphics().p("ANBENIAAgBIgaAAIAAiFICrAAQAVAAAOgRQAOgQAAgTIg1ADIgVgBIgFAAQgmAAgjgPQghgOgagaQgbgagOgfQgOgjAAgmIAAgbIiAAAIAAGLIiHAAIAAgBIgaAAIAAmKIhoAAIAAgBIgaAAIAAiGIGLAAIAAABIAYAAIAAgBICKAAIAAABIAaAAIAACiQAAAUAOAPQALALAOADIAQAAQAUAAAOgPQAOgPAAgUIAAiiICJAAIAAABIAaAAIAAFXQAAAmgOAiQgPAigaAaQgZAagiAOQgjAPgmAAgADEENIAAgBIgaAAIAAi5IiYAAIAAC6IiJAAIAAgBIgaAAIAAoSICKAAIAAABIAZAAIAADWICYAAIAAjXICKAAIAAABIAaAAIAAISgAkmENIAAgBIgaAAIAAh7IiSAAIAAB8IiKAAIAAgBIgaAAIAAlaQAAgmAOgjQAOgiAbgZQAagbAigOQAjgOAmAAIBJAAIAUABIAGAAQAmAAAjAOQAiAOAaAbQAaAZAPAiQAPAjAAAmIAAFagAnDhwQgPAPAAAUIAABRICSAAIAAhSQAAgUgOgPQgLgLgNgDIg7AAQgUAAgOAPgAsOENIAAgBIgaAAIAIj3IgtBLQgNARgPAKQgPAJgQAAQgHAAgHgCIgMABQgQAAgOgKQgPgJgMgTIgrhEIAGD0IiNAAIAAgBIgaAAIAAmuQABgXAFgTQAGgRAKgOQARgYAegHQASgEARAEQAXgDAWAJQAcALAOAYIBUCUIBbiVQAPgYAbgLQAZgKAZAFQANgCAOADQAdAHARAYQAJANAFASQAFATAAAXIAAGug");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:119.2,y:76.7}).wait(163).to({graphics:mask_1_graphics_163,x:119.2,y:76.7}).wait(1));

	// Слой 6
	this.instance_2 = new lib.Символ25();
	this.instance_2.parent = this;
	this.instance_2.setTransform(361.4,77.7,1,1,0,-15,165,42.9,85.7);
	this.instance_2.alpha = 0.32;
	this.instance_2.compositeOperation = "lighter";
	this.instance_2._off = true;
	this.instance_2.filters = [new cjs.BlurFilter(10, 10, 1)];
	this.instance_2.cache(-2,-2,90,175);

	this.instance_2.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(84).to({_off:false},0).wait(39).to({x:-68.6},40,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_3 = new lib.Символ18();
	this.instance_3.parent = this;
	this.instance_3.setTransform(118.4,77,1,1,0,0,0,117.9,26.9);

	this.instance_3.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(164));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.5,3,239.1,100.7);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ23();
	this.instance.parent = this;
	this.instance.setTransform(490.6,217,1,1,0,0,0,185.3,168.1);
	this.instance.alpha = 0.5;
	this.instance.filters = [new cjs.BlurFilter(37, 37, 1)];
	this.instance.cache(-2,-2,375,340);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(337,192.6,1,1,0,0,0,337,192.6);
	this.instance_1.filters = [new cjs.BlurFilter(6, 6, 1)];
	this.instance_1.cache(-2,-2,678,389);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-3,702.3,411.9);


(lib.Символ18_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 20
	this.instance = new lib.Символ20();
	this.instance.parent = this;
	this.instance.setTransform(63,228.1,0.92,0.92,0,0,0,25.6,8.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 19
	this.instance_1 = new lib.Символ19();
	this.instance_1.parent = this;
	this.instance_1.setTransform(67.6,207,0.92,0.92,0,0,0,30.6,9.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(39.5,197.9,56.2,38.2);


(lib.Символ17_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ21();
	this.instance.parent = this;
	this.instance.setTransform(92.1,330.8,1,1,0,0,0,23,29);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[92,330.7,87.8,330.3,84.7,327.3,81.3,323.9,81.3,319,81.3,314.2,84.7,310.8,86.9,308.6,89.7,307.8]}},9).to({guide:{path:[89.7,307.8,91.3,307.3,93,307.3,97.8,307.3,101.3,310.8,104.6,314.1,104.7,318.8]}},10).to({guide:{path:[104.7,318.8,104.7,319,104.7,319,104.7,323.9,101.3,327.4,97.8,330.8,93,330.8,92.5,330.8,92,330.8]}},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(69.1,301.8,46,58);


(lib.Символ16_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.instance_2 = new lib.Символ18_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(61.5,48,1,1,0,0,0,39.5,28);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// mouse
	this.instance_3 = new lib.Символ17_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-3,47.1,0.63,0.63,0,0,0,23,29.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(26,217.9,91.7,38.2);


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(1));

	// Слой 1
	this.kursor = new lib.Символ30();
	this.kursor.parent = this;
	this.kursor.setTransform(99.5,94,0.797,0.797,0,0,0,123.9,118);
	this.kursor.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.kursor).to({alpha:1},4).to({alpha:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,198.1,188);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(6));

	// Слой 1
	this.kursor2 = new lib.Символ31();
	this.kursor2.parent = this;
	this.kursor2.setTransform(107,101.2,0.857,0.857,0,0,0,123.9,118);

	this.timeline.addTween(cjs.Tween.get(this.kursor2).to({alpha:0},4).to({alpha:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,213.2,202.3);


(lib.Символ47 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ40();
	this.instance.parent = this;
	this.instance.setTransform(164.3,-4.9,1,1,0,0,0,141.6,7.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-99.7},9).to({x:164.3},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.3,0,223.4,33.5);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ32();
	this.instance.parent = this;
	this.instance.setTransform(36.7,36.6,1,1,0,0,0,24.5,24.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:21.8,y:54.5},2).to({x:1.6,y:46.4},2).to({x:14.6,y:9.3},5).to({x:66.6,y:22.3},5).to({x:60.1,y:80.8},5).to({x:-17.2},5).to({x:-30.2,y:22.3},5).to({x:24.4,y:-10.8},5).to({x:-30.2,y:22.3},5).to({x:-17.2,y:80.8},5).to({x:60.1},5).to({x:66.6,y:22.3},5).to({x:14.6,y:9.3},5).to({x:1.6,y:46.4},5).to({x:21.8,y:54.5},2).to({x:36.7,y:36.6},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.3,-17.2,116.7,117.9);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ32();
	this.instance.parent = this;
	this.instance.setTransform(71,31.1,1,1,0,0,0,24.5,24.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-111.7,y:95.4},14).to({x:-168.2,y:36.9},10).to({x:-126.2,y:-22.4},10).to({x:-44.7,y:-20.9},5).to({x:104.8,y:31.1},15).to({x:299.8,y:44.1},15).to({x:293.3,y:-53.4},10).to({x:86.6,y:9},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-175.5,-73.3,504.9,177.1);


(lib.Символ27 = function(mode,startPosition,loop) {
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

	// Слой 2
	this.instance = new lib.Символ29();
	this.instance.parent = this;
	this.instance.setTransform(335.4,215.4,1,1,0,0,0,329.4,167.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.141},9).to({alpha:0},10).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(337,192.6,1,1,0,0,0,337,192.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.96,scaleY:0.96,x:333.8,y:201.2},9).to({scaleX:1,scaleY:1,x:337,y:192.6},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-3,702.3,411.9);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ4();
	this.instance.parent = this;
	this.instance.setTransform(119.6,50.4,1,1,0,0,0,120,53.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:119.9,regY:53.2,scaleX:1.03,scaleY:1.03,rotation:-2.3,x:123.4,y:48.7},9,cjs.Ease.get(-1)).to({scaleX:1.07,scaleY:1.07,rotation:-5,x:127.6,y:46.9},10,cjs.Ease.get(1)).to({scaleX:1.03,scaleY:1.03,rotation:-2.3,x:123.7,y:48.7},10,cjs.Ease.get(-1)).to({regX:120,regY:53.3,scaleX:1,scaleY:1,rotation:0,x:119.6,y:50.4},10,cjs.Ease.get(1)).to({scaleX:1.06,scaleY:1.06,rotation:2.6,x:126.2,y:53.2},10,cjs.Ease.get(-1)).to({regY:53.2,scaleX:1.11,scaleY:1.11,rotation:5.5,x:132.7,y:55.8},10,cjs.Ease.get(1)).to({scaleX:1.08,scaleY:1.08,rotation:4,x:129.5,y:54.6},10,cjs.Ease.get(-1)).to({regY:53.3,scaleX:1,scaleY:1,rotation:0,x:119.6,y:50.4},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117.1,-92.2,356.5,201);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FF00").s().p("AnvRAMAAAgiAIPfAAMAAAAiAg");
	this.shape.setTransform(32.1,110);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Слой 2
	this.instance = new lib.Символ16();
	this.instance.parent = this;
	this.instance.setTransform(49.8,37.2,1,1,0,0,0,48.8,37.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(3));

	// Слой 1
	this.instance_1 = new lib.Символ13();
	this.instance_1.parent = this;
	this.instance_1.setTransform(34,103.5,1,1,0,0,0,34,103.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,68,207);


(lib.Символ21_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// golova
	this.instance_1 = new lib.Символ5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(163,119.4,1,1,0,0,0,90,119.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:90.1,rotation:-0.6,x:160.7,y:119.3},7,cjs.Ease.get(-1)).to({rotation:-1.5,x:158.3,y:119.1},7,cjs.Ease.get(1)).to({rotation:0.3,x:168.7,y:120.1},7,cjs.Ease.get(-1)).to({rotation:2.5,x:180.5,y:121.2},8,cjs.Ease.get(1)).to({regY:119.3,rotation:1.3,x:172.4,y:120.3},7,cjs.Ease.get(-1)).to({regX:90,regY:119.4,rotation:0,x:163,y:119.4},8,cjs.Ease.get(1)).wait(1));

	// lev_ruka
	this.ruka = new lib.Символ22();
	this.ruka.parent = this;
	this.ruka.setTransform(260,247.5,1,1,0,0,0,34,103.5);
	new cjs.ButtonHelper(this.ruka, 0, 1, 2, false, new lib.Символ22(), 3);

	this.timeline.addTween(cjs.Tween.get(this.ruka).to({rotation:-4.5,x:252.8,y:245.9},7,cjs.Ease.get(-1)).to({rotation:-9,x:245.5,y:244.1},7,cjs.Ease.get(1)).to({regY:103.6,rotation:-0.5,x:258.9,y:248.6},7,cjs.Ease.get(-1)).to({regX:34.1,rotation:9,x:274.4,y:253.3},8,cjs.Ease.get(1)).to({regY:103.7,rotation:4.8,x:267.7,y:250.8},7,cjs.Ease.get(-1)).to({regX:34,regY:103.5,rotation:0,x:260,y:247.5},8,cjs.Ease.get(1)).wait(1));

	// siski
	this.instance_2 = new lib.Символ15();
	this.instance_2.parent = this;
	this.instance_2.setTransform(160.5,245.1,1,1,0,0,0,73.8,45.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleY:0.99,rotation:-0.6,x:159.7,y:244.8},7,cjs.Ease.get(-1)).to({scaleY:0.99,rotation:-1.5,x:158.9,y:244.3},7,cjs.Ease.get(1)).to({scaleY:1,rotation:0.3,x:165.2,y:245.6},7,cjs.Ease.get(-1)).to({regX:73.9,regY:45.2,scaleY:1.01,rotation:2.5,x:172.6,y:247.2},8,cjs.Ease.get(1)).to({scaleY:1.01,rotation:1.3,x:167,y:246.2},7,cjs.Ease.get(-1)).to({regX:73.8,regY:45.1,scaleY:1,rotation:0,x:160.5,y:245.1},8,cjs.Ease.get(1)).wait(1));

	// lev_plecho
	this.instance_3 = new lib.Символ11();
	this.instance_3.parent = this;
	this.instance_3.setTransform(216.5,201.1,1,1,0,0,0,10.5,31.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:10.6,regY:31.2,rotation:-0.3,x:215.3,y:200.4},7,cjs.Ease.get(-1)).to({rotation:-0.5,x:213.9,y:199.5},7,cjs.Ease.get(1)).to({rotation:1.8,x:221.6,y:202.1},7,cjs.Ease.get(-1)).to({rotation:4.8,x:230.4,y:205.1},8,cjs.Ease.get(1)).to({regX:10.7,rotation:2.5,x:224,y:203.3},7,cjs.Ease.get(-1)).to({regX:10.5,regY:31.1,rotation:0,x:216.5,y:201.1},8,cjs.Ease.get(1)).wait(1));

	// telo
	this.instance_4 = new lib.Символ6();
	this.instance_4.parent = this;
	this.instance_4.setTransform(151.5,334.5,1,1,0,0,0,94.5,239.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-0.6,x:151.9,y:334.6},7,cjs.Ease.get(-1)).to({regY:239.6,rotation:-1.5,x:152.3,y:334.5},7,cjs.Ease.get(1)).to({regY:239.7,rotation:0.3,x:155.7,y:335.1},7,cjs.Ease.get(-1)).to({regY:239.5,rotation:2.5,x:159.6,y:335.5},8,cjs.Ease.get(1)).to({regY:239.6,rotation:1.3,x:155.9,y:335.2},7,cjs.Ease.get(-1)).to({regY:239.5,rotation:0,x:151.5,y:334.5},8,cjs.Ease.get(1)).wait(1));

	// prav_ruka
	this.instance_5 = new lib.Символ7();
	this.instance_5.parent = this;
	this.instance_5.setTransform(45.1,330.5,1,1,0,0,0,45.1,12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:-3,x:48.9,y:331.9},7,cjs.Ease.get(-1)).to({regY:12.7,rotation:-6.2,x:52.6,y:333.3},7,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:-8.1,x:54.1,y:330.4},7,cjs.Ease.get(-1)).to({regY:12.6,scaleX:1,scaleY:1,rotation:-10.6,x:55.6,y:327},8,cjs.Ease.get(1)).to({rotation:-5.5,x:50.6,y:328.7},7,cjs.Ease.get(-1)).to({regY:12.5,rotation:0,x:45.1,y:330.5},8,cjs.Ease.get(1)).wait(1));

	// prav_plecho
	this.instance_6 = new lib.Символ8();
	this.instance_6.parent = this;
	this.instance_6.setTransform(83.8,187.8,1,1,0,0,0,54.8,23.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regY:23.9,rotation:-1.8,x:82.3,y:188.8},7,cjs.Ease.get(-1)).to({rotation:-4,x:80.8,y:189.6},7,cjs.Ease.get(1)).to({regX:54.9,rotation:-0.8,x:89.1,y:188},7,cjs.Ease.get(-1)).to({regX:54.8,regY:23.8,rotation:2.5,x:98.3,y:186},8,cjs.Ease.get(1)).to({regY:23.9,rotation:1.3,x:91.6,y:187},7,cjs.Ease.get(-1)).to({regY:23.8,rotation:0,x:83.8,y:187.8},8,cjs.Ease.get(1)).wait(1));

	// prav_noga
	this.instance_7 = new lib.Символ9();
	this.instance_7.parent = this;
	this.instance_7.setTransform(106,450.6,1,1,0,0,0,47,32.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:47.1,rotation:-0.6,x:108.4,y:452},7,cjs.Ease.get(-1)).to({regX:47,rotation:-1.5,x:110.7,y:453.3},7,cjs.Ease.get(1)).to({rotation:-0.1,x:110.6,y:451.5},7,cjs.Ease.get(-1)).to({regX:47.1,rotation:1.3,y:449.6},8,cjs.Ease.get(1)).to({rotation:0.5,x:108.5,y:450},7,cjs.Ease.get(-1)).to({regX:47,rotation:0,x:106,y:450.6},8,cjs.Ease.get(1)).wait(1));

	// lev_noga
	this.instance_8 = new lib.Символ12();
	this.instance_8.parent = this;
	this.instance_8.setTransform(195.2,449.6,1,1,0,0,0,45,30.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:45.1,rotation:-5.3,x:197.6,y:447.4},7,cjs.Ease.get(-1)).to({regX:45,rotation:-10.7,x:199.7,y:445.1},7,cjs.Ease.get(1)).to({regX:45.1,regY:30.9,scaleX:1,scaleY:1,rotation:-10.6,x:199.9,y:445.2},7,cjs.Ease.get(-1)).to({regX:45,regY:30.8,scaleX:1,scaleY:1,rotation:-10.7,x:199.7,y:445.1},8,cjs.Ease.get(1)).to({regX:45.1,regY:30.9,rotation:-5.6,x:197.8,y:447.3},7,cjs.Ease.get(-1)).to({regX:45,regY:30.8,rotation:0,x:195.2,y:449.6},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,294,605.8);


(lib.Символ1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// golova.png
	this.girl4 = new lib.Символ21_1();
	this.girl4.parent = this;
	this.girl4.setTransform(90,210.5,1,1,0,0,0,147,305.5);

	this.timeline.addTween(cjs.Tween.get(this.girl4).to({y:209.3},4,cjs.Ease.get(-1)).to({y:204.5},5,cjs.Ease.get(1)).to({y:207.5},5,cjs.Ease.get(-1)).to({y:210.5},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57,-95,294,605.8);


(lib.Символ42_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(10).call(this.frame_19).wait(1));

	// Слой 1
	this.mouse = new lib.Символ16_1();
	this.mouse.parent = this;
	this.mouse.setTransform(-3,-188.9,1,1,0,0,0,23,29);

	this.timeline.addTween(cjs.Tween.get(this.mouse).to({x:116},9).to({x:-3},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,91.7,38.2);


(lib.Символ39 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ38();
	this.instance.parent = this;
	this.instance.setTransform(28.8,28.8,0.789,0.789,0,0,0,36.5,36.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).to({alpha:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.8,-0.8,59.1,59.1);


(lib.Символ37 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ36();
	this.instance.parent = this;
	this.instance.setTransform(2.2,42,1,1,0,0,0,36.4,36.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},9).to({alpha:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,74.8,74.8);


(lib.Символ19_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.girl3 = new lib.Символ1_1();
	this.girl3.parent = this;
	this.girl3.setTransform(110.5,334.5,1,1,0,0,0,94.5,239.5);

	this.timeline.addTween(cjs.Tween.get(this.girl3).to({x:164.1},19,cjs.Ease.get(-1)).to({x:220.5},20,cjs.Ease.get(1)).to({x:165.5},20,cjs.Ease.get(-1)).to({x:110.5},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41,0,294,605.8);


(lib.Символ20_1 = function(mode,startPosition,loop) {
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
	this.girl2 = new lib.Символ19_1();
	this.girl2.parent = this;
	this.girl2.setTransform(147,305.5,1,1,0,0,0,147,305.5);

	this.timeline.addTween(cjs.Tween.get(this.girl2).to({regY:305.3,scaleX:1.4,scaleY:1.4,x:130.9,y:376.4},9).to({regY:305.5,scaleX:1,scaleY:1,x:147,y:305.5},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41,0,294,605.8);


// stage content:



(lib.namochi_mantu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		
		this.cursor = "none";
		
		stage.canvas.style.cursor = "none";
		this.kursor.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
			this.kursor.x = stage.mouseX/window.devicePixelRatio;
			
		}
		
		stage.canvas.addEventListener("mouseover", fl_Clickover.bind(this));
		
		function fl_Clickover()
		{
		    this.bg.gotoAndPlay(1);
		    this.girl.gotoAndPlay(1);
		    this.mouse.gotoAndPlay(1);
			this.pricel.gotoAndPlay(1);
			this.pricel2.gotoAndPlay(1);
			this.shkala.gotoAndPlay(1);
			this.kursor.gotoAndPlay(1);
			this.kursor2.gotoAndPlay(1);
		}
		
		stage.canvas.addEventListener("mouseout", fl_Clickout.bind(this));
		
		function fl_Clickout()
		{
		    this.bg.gotoAndPlay(10);
		    this.girl.gotoAndPlay(10);
		    this.mouse.gotoAndPlay(10);
			this.pricel.gotoAndPlay(10);
			this.pricel2.gotoAndPlay(10);
			this.shkala.gotoAndPlay(10);
			this.kursor.gotoAndPlay(5);
			this.kursor2.gotoAndPlay(5);
		}
		
		
		stage.canvas.style.cursor = "none";
		this.pricel2.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor_2.bind(this));
		
		function fl_CustomMouseCursor_2() {
			this.pricel2.x = stage.mouseX/window.devicePixelRatio;
			this.pricel2.y = stage.mouseY/window.devicePixelRatio;
		}
		
		this.girl.girl2.girl3.girl4.ruka.cursor = "none";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// pricel2
	this.pricel2 = new lib.Символ39();
	this.pricel2.parent = this;
	this.pricel2.setTransform(399.2,195,1,1,0,0,0,96,57.6);

	this.timeline.addTween(cjs.Tween.get(this.pricel2).wait(1));

	// pricel
	this.pricel = new lib.Символ37();
	this.pricel.parent = this;
	this.pricel.setTransform(301,140.3,1,1,0,0,0,36.4,36.4);

	this.timeline.addTween(cjs.Tween.get(this.pricel).wait(1));

	// mouse
	this.mouse = new lib.Символ42_1();
	this.mouse.parent = this;
	this.mouse.setTransform(547,143.5,1.314,1.314,0,0,0,31.4,-75.3);

	this.timeline.addTween(cjs.Tween.get(this.mouse).wait(1));

	// shkala
	this.shkala = new lib.Символ47();
	this.shkala.parent = this;
	this.shkala.setTransform(783.6,281.1,1,1,0,0,0,111.4,13.3);

	this.timeline.addTween(cjs.Tween.get(this.shkala).wait(1));

	// text
	this.instance = new lib.Символ26();
	this.instance.parent = this;
	this.instance.setTransform(522.6,62.5,1,1,0,0,0,179.2,17.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// kursor2
	this.kursor2 = new lib.Символ48();
	this.kursor2.parent = this;
	this.kursor2.setTransform(387.2,234.6,1,1,0,0,0,106.5,101.1);

	this.timeline.addTween(cjs.Tween.get(this.kursor2).wait(1));

	// kursor
	this.kursor = new lib.Символ49();
	this.kursor.parent = this;
	this.kursor.setTransform(450.6,234.6,1,1,0,0,0,99,94);

	this.timeline.addTween(cjs.Tween.get(this.kursor).wait(1));

	// telka
	this.girl = new lib.Символ20_1();
	this.girl.parent = this;
	this.girl.setTransform(155.8,161.1,1,1,0,0,0,147,305.5);

	this.timeline.addTween(cjs.Tween.get(this.girl).wait(1));

	// bg
	this.bg = new lib.Символ27();
	this.bg.parent = this;
	this.bg.setTransform(323,130.6,1,1,0,0,0,338,192.6);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(287.8,8.1,927.5,605.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;