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
		{src:"images/ball.png?1486572504644", id:"ball"},
		{src:"images/bedro.png?1486572504644", id:"bedro"},
		{src:"images/bg.jpg?1486572504644", id:"bg"},
		{src:"images/flag.png?1486572504644", id:"flag"},
		{src:"images/golova.png?1486572504644", id:"golova"},
		{src:"images/kist.png?1486572504644", id:"kist"},
		{src:"images/klyushka.png?1486572504644", id:"klyushka"},
		{src:"images/lev_noga.png?1486572504644", id:"lev_noga"},
		{src:"images/lunka.png?1486572504644", id:"lunka"},
		{src:"images/nogi.png?1486572504644", id:"nogi"},
		{src:"images/plecho.png?1486572504644", id:"plecho"},
		{src:"images/prav_noga.png?1486572504644", id:"prav_noga"},
		{src:"images/ruka.png?1486572504644", id:"ruka"},
		{src:"images/siski.png?1486572504644", id:"siski"},
		{src:"images/telo.png?1486572504644", id:"telo"},
		{src:"images/w256h2561380453915MouseOptions256x25632.png?1486572504644", id:"w256h2561380453915MouseOptions256x25632"}
	]
};



lib.ssMetadata = [];


// symbols:



(lib.ball = function() {
	this.initialize(img.ball);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,55,52);


(lib.bedro = function() {
	this.initialize(img.bedro);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,144,123);


(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,305);


(lib.flag = function() {
	this.initialize(img.flag);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,77,342);


(lib.golova = function() {
	this.initialize(img.golova);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,71,80);


(lib.kist = function() {
	this.initialize(img.kist);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,55,36);


(lib.klyushka = function() {
	this.initialize(img.klyushka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,108,301);


(lib.lev_noga = function() {
	this.initialize(img.lev_noga);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,106,205);


(lib.lunka = function() {
	this.initialize(img.lunka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,105,50);


(lib.nogi = function() {
	this.initialize(img.nogi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,201,305);


(lib.plecho = function() {
	this.initialize(img.plecho);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,48,100);


(lib.prav_noga = function() {
	this.initialize(img.prav_noga);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,181,131);


(lib.ruka = function() {
	this.initialize(img.ruka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,79,105);


(lib.siski = function() {
	this.initialize(img.siski);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,89,56);


(lib.telo = function() {
	this.initialize(img.telo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,132,202);


(lib.w256h2561380453915MouseOptions256x25632 = function() {
	this.initialize(img.w256h2561380453915MouseOptions256x25632);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,256,256);


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFCC01","#FF9901"],[0,1],0,20.4,0,-20.4).s().p("AjLExIAApiIFkAAIAAB4Ii5AAIAACIIAgAAQA4gBAmAGQAnAFAYAMQAYANALARQALATAAAcIAACZQAAAdgLATQgLATgYANQgYAMgnAFQgmAGg4gBgAggDLIAgAAQAQABAIgLQAJgMAAgUIAAhEQAAgUgJgMQgIgKgQgBIggAAg");
	this.shape.setTransform(20.4,46.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFCC01","#FF9901"],[0,1],0,16.2,0,-16.1).s().p("AigExIAApiIFBAAIAAB4IiZAAIAAB/IBmAAIAAB1IhmAAIAAB/ICZAAIAAB3g");
	this.shape_1.setTransform(59.9,46.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFCC01","#FF9901"],[0,1],0,-5.9,0,6).s().p("Ag2A7IgEgEIAAhtIAEgEIBtAAIAEAEIAABtIgEAEg");
	this.shape_2.setTransform(128.8,71.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFCC01","#FF9901"],[0,1],0,13.6,0,-13.6).s().p("AiHAbIAJhTQBNAqAxAAQAzAABMgqIAJBTQhEAehEAAQhDAAhEgeg");
	this.shape_3.setTransform(98.2,5.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FFCC01","#FF9901"],[0,1],0.1,19.8,0,-19.6).s().p("ABKExIAAkLIieELIhwAAIAApiIB3AAIAAENICekNIBwAAIAAIfIAEBDg");
	this.shape_4.setTransform(98.4,46.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FFCC01","#FF9901"],[0,1],0,8.5,0,-8.5).s().p("AgxDMQgBhWgRiUQgIhHgJhmICpAAQgJBmgJBHQgQCUgBBWg");
	this.shape_5.setTransform(128.8,36.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,137.3,77.4);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgOAPQgGgHgBgIQABgHAGgHQAHgGAHgBQAIABAHAGQAGAHABAHQgBAIgGAHQgHAGgIABQgHgBgHgGg");
	this.shape.setTransform(2.2,2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.4,4.4);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().ls(["#FF9900","#FFCC00"],[0,1],0,10,0,-9.9).ss(3,1,1).p("AAAhZIAABZIAABa");
	this.shape.setTransform(31.3,53.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().ls(["#FF9900","#FFCC00"],[0,1],-10.5,0,10.5,0).ss(3,1,1).p("AhZAAIBZAAIBaAA");
	this.shape_1.setTransform(9,31.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().ls(["#FF9900","#FFCC00"],[0,1],0,-10.5,0,10.5).ss(3,1,1).p("AAAhZIAABXIAABc");
	this.shape_2.setTransform(31.3,9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().ls(["#FF9900","#FFCC00"],[0,1],9.6,0,-9.6,0).ss(3,1,1).p("AhZAAIBZAAIBaAA");
	this.shape_3.setTransform(53.8,31);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().ls(["#FF9900","#FFCC00"],[0,1],-23.9,0,24,0).ss(3,1,1).p("ADgAAQAABdhCBBQhBBChdAAIAAAAQhbAAhDhCQhBhBAAhdIAAAAQAAhbBBhDQBDhBBbAAIAAAAQBdAABBBBQBCBCAABcQAAAAAAAAg");
	this.shape_4.setTransform(31.4,31.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,65.8,65.8);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AA6DfQgcgDgSgJQgPgJgJgOQgHgOAAgVIAAkyQAAgVAHgNQAJgPAPgIQASgJAcgDQAcgEAogBQAqABAbAEQAcADARAJQASAIAIAPQAJANAAAVIAAEyQAAAVgJAOQgIAOgSAJQgRAJgcADQgbAFgqAAQgoAAgcgFgABsiQQgGAHAAAPIAAD0QAAAPAGAJQAHAHALAAQANAAAFgHQAGgJAAgPIAAj0QAAgPgGgHQgFgJgNAAQgLAAgHAJgAs1DfQgdgDgRgIQgSgIgIgNQgIgNAAgTIAAhiIB7AAIAAA9QAAAPAHAJQAGAHAMAAQAMAAAGgHQAGgJAAgPIAAhJQAAgOgFgJQgEgIgIAAIhWAAIAAg7IBWAAQAIAAAEgJQAFgIAAgPIAAgxQAAgPgGgHQgGgJgMAAQgMAAgGAJQgHAHAAAPIAAAmIh1AAIAAhLQAAgTAIgMQAIgNAQgIQARgIAbgFQAbgCAngBQAnABAcAEQAaADARAJQARAIAHAPQAIANAAAVIAABFQAAAagLASQgNARgcAJQAeAIAOARQAOAQAAAbIAABjQAAAVgIAOQgIAOgSAJQgRAJgcADQgbAFgqAAQgpAAgbgFgAMtDdIAAjCIh0DCIhSAAIAAm5IBXAAIAADCIB0jCIBRAAIADG5gAHpDdQgMAAgEgRQgFgSAAgtIAAhjIgxAAIAACzIh7AAIAAm5IB7AAIAACzIAxAAIAAizIB8AAIACG5gAkNDdIAAm5IDrAAIAABVIhwAAIAAFkgAmJDdQgNAAgEgRQgEgSAAgtIAAgGIgxAAIAABWIh7AAIAAhuQAAhvBJjcICVAAQBKDcAABvIACBugAnHhEQgIBEAAAXIAAAaIAxAAIAAgaQAAgXgIhEQgEgogNgzQgGAPgKBMg");
	this.shape.setTransform(90.2,22.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,180.5,45.6);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF9900","#FFCC00"],[0,1],0,38.4,0,-38.3).s().p("ADVFoQgWAAgHgdQgHgbAAhKIAAnVQgUAAgOALQgPAKgLAUQgKAUgFAfIgFBEIAAG3IjGAAIAAm3IgGhEQgEgfgMgUQgJgUgQgKQgPgLgTAAIAAJXIjIAAIAArQIC0AAQAdAAAcAIQAbAGAZAOIAxAdIArApIApgpIAwgdQAZgOAdgGQAagIAdAAIC1AAIAFLQg");
	this.shape.setTransform(38.4,36.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FF9900","#FFCC00"],[0,1],0,24.4,0,-24.3).s().p("AApFoIAAk7QgfAGgNAQQgPAPAAAcIAABGQABArgJAkQgIAggQAYQgTAWgZALQgYAMgiAAIhaAAIAAjcIAZAAQAiAAARgLQAOgJAKgTQARgoAEgFQARgaAmgNQgsgDgdgKQgggGgTgOQgTgPgKgUQgJgTAAgcIAAiNQABghANgXQANgYAdgNQAcgOAtgGQAugIBBAAIDnAAIAALQgAgajhQgLAMAAAZIAABjQAAAZALAMQAKAOARAAIAoAAIAAjJIgoAAQgRAAgKAOg");
	this.shape_1.setTransform(103.6,36.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FF9900","#FFCC00"],[0,1],0,24.1,0,-24).s().p("AAnFoIAAkEIgnAAQhBAAgvgHQgsgGgdgOQgdgOgNgYQgMgWAAgfIAAlWIDHAAIAAEkQAAAZALALQALAOASAAIAnAAIAAlWIDJAAIAALQg");
	this.shape_2.setTransform(155.4,36.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,179.5,72.2);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9901").s().p("AKJC6QAAgTAGgTQAFgQAMgQQAMgSAhgaQglgugJgPQgOgUgHgTQgJgXAAgUIAAhyIBqAAIAAB9QAAAPAKAcIAQAlQALgSAGg+IAAh9IBqAAIAAByQAABHhLBSQhCA+AAAqgAIaC6QgMAAgEgPQgEgPABgmIAAhIQgBgLgEgIQgGgHgGAAIgaAAIAACmIhrAAIAAlzIBrAAIAACGIAUAAQAJABAHgHQAGgIABgKIAAhuIBkAAIAABtQABARgPAQQgNAPgXAJQAYAJAQAPQAQASAAASIACCRgAEEC6QgKAAgDgPQgFgPAAgmIAAhTIgqAAIAACXIhpAAIAAlzIBpAAIAACWIAqAAIAAiWIBrAAIACFzgAiqC6QAAgTAHgTQAFgQALgQQANgSAggaQglgugIgPQgOgUgIgTQgJgXAAgUIAAhyIBqAAIAAB9QABAPAJAcIARAlQAKgSAGg+IAAh9IBpAAIAAByQAABHhMBSQhAA+ABAqgAkcC6QgKAAgFgPQgEgPAAgmIAAjmIgqAAIAADNQgBAWgEASQgEARgJAMQgJAMgOAFQgOAHgQAAIgpAAIAAhoIALAAQAMAAAIgGQAHgGAAgNIAAjyIDfAAIACFzgAt/C6IAAlzICEAAQAeAAAVAEQAXAEAOAHQAPAJAGALQAJANAAAOIAAA0QAAAXgKAOQgKAPgZAIQAbAHALAMQAMAPAAAXIAABOQAAARgGALQgIAMgNAIQgOAHgZAEQgWADgjAAgAsVB8IAaAAQAJAAAEgHQAEgHAAgNIAAgtQAAgMgEgHQgEgIgJAAIgaAAgAsVgtIAaAAQAJAAAEgHQAEgHAAgMIAAgaQAAgMgEgHQgEgHgJAAIgaAAg");
	this.shape.setTransform(89.7,18.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,179.3,37.3);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AywBdQg0AAAAgyIAAhVQAAgyA0AAMAlhAAAQA0AAAAAyIAABVQAAAyg0AAg");
	this.shape.setTransform(125.4,9.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,250.7,18.8);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ball();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.559,0.559);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,30.8,29.1);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().ls(["#FFFFFF","#666666","#333333"],[0,0.333,0.933],-125.8,0,125.9,0).ss(2,1,1).p("AyyhbMAllAAAQAyAAAAAxIAABWQAAAwgyAAMgllAAAQgyAAAAgwIAAhWQAAgxAyAAg");
	this.shape.setTransform(125.4,9.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,252.8,20.4);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#33CC00","#FFCC00","#FF0000"],[0,0.482,1],-125.6,0,125.7,0).s().p("Ay1BXQgyAAAAgyIAAhJQAAgyAyAAMAlrAAAQAyAAAAAyIAABJQAAAygyAAg");
	this.shape.setTransform(125.7,8.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,251.3,17.5);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.klyushka();
	this.instance.parent = this;
	this.instance.setTransform(14,0,0.846,0.886,0,3,5.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,104.9,275.3);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgeBEQhzhwiXAiQiYAfAAgtQAAgvCDgiQCCghC5AAQC4AABTAKQBUAKBOBSQBPBQjUBFQhQAahCAAQhtAAhFhHg");
	this.shape.setTransform(44.9,14);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,89.8,27.9);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgfANQgNgFAAgIQAAgHANgFQAOgGARAAQASAAANAGQAOAFAAAHQAAAIgOAFQgNAGgSAAQgRAAgOgGg");
	this.shape.setTransform(4.5,1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,9.1,3.9);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgHBRQgdgDgWgYQgWgYgBgeQAAgSAJgSQAJgSAQgLQAQgMAUgDQARgDATAGQAdAJAQAcQAQAdgGAbQgGAegaATQgXARgZAAIgHgBg");
	this.shape.setTransform(8.2,8.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.5,16.5);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ApoCSIgpAAQgXgCgPgJQgLgHgIgNQgIgMgCgOQgBgOAFgNQAFgOAKgKQAOgNAYgFQAHgHAKgFQAMgGASgCIAggBQAbgCA1gHQA1gHAagCIAegBIAYgDIAEgBQAQgDAcgBQA4gHAngCQAWgBAOACQAPACALAFIB/AAQAfAAARAGQAKgIALgDIAAAAIAGgEQARgKAlgCQAigBBEAAQA+gBAogHIA5gMQAjgJAVgCIBDgGQApgDAZgJQAPgFAagNQAcgOANgFQAXgIAWAAQAYABARAOQAUAQABAdQABAcgSAUQgKAKgaAQQgaANgOAGQghARgtAJQgVAEgwAFQgtAEgYAFIgrAKQgjAIggADQgsAFhnAAIhEAAIgOgBIgLAFQgUAIgVgIIgGAEQgNAHgPADQgLABgWABIi/ACQgrAEhHAEIgQAEQgeAJgjAEIgnADQgXACgPADQgdAIgOADQgOACgUAAIgiAAg");
	this.shape.setTransform(72.6,14.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,145.1,29.3);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.nogi();
	this.instance.parent = this;
	this.instance.setTransform(20.7,5.7,0.878,0.872,0,4.5,-1.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,197,271);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAICzQgOgNgKgUQgIgPgGgXIgIgpQgPhEgggwIgTgdIgFgJIACgEIAJgNQAGgHACgFIADgFIAEgEQAEgEADgGIADgHQAIgFABgEQAAgIADgCIADgBIAEgBQAEgBAAgJIAAgRQAOAAAPAGQAXAJASAVQAPASAMAaQAIARAKAgQAYA/AMAtQAOA3gIAhQgGAXgQAQQgSARgVAAIgCAAQgSAAgSgMg");
	this.shape.setTransform(11.1,19.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,22.2,38.4);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ADNGJQgggNgTgVQgRAOgUACQggADgWgZQgUgWABghQAAgKAEgRIAFgcIABgpQABgWAFgNQgfgIghgjQg0gzgsg5QgPgSgPgWQgcgvgQgXQgfgwgnglIgSgUQgLgMgEgLQgCgFgCgNQgDgMgDgHQgDgGgHgHIgLgMQgLgOgEgRQgFgSAEgRQAEgRALgOQAMgOAQgFQAhgLAnAWQAlAWAOAiIAFARQADALADAGQAIAQAWAYQAiAnAXAjQAOAYAcAyQASAdAkAyQASAXALAJIAfAYQATAPAJANQALAPAEATQADATgGARIAAACIAIACQAQAGALAMQANAQAFAaQADARAAAfIAAAHQAIgBAJABQAKACAXAKIAZAMQAiAQAMAPQAKANADAQQADARgGAPQgFAPgLAMQgMALgQAFQgMAFgNAAQgXAAgagMg");
	this.shape.setTransform(32.7,40.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,65.5,81);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AF7D4QhAgBgugeQgfgUgagjQgTgbgGgXIgKgDQgjgMgigWQgWgPgMgHQgSgLgagIIgugOIg/gTIhcgcQgtgNgcgDIgigCIgigCQg9gFg4ggQgxgcgJglQgFgRAFgTQAFgTAMgOQAZgcAogBQAVAAAfALQARgFAVAAQAWgBAnAFQBwAOBwAaQAdAIAOAGQAZALANAQQALAMAEAPIAbAIQA5ATAbASIAbATQAQALAMAFQAIAEAUAEQASAFAKAEQAQAHAMAPQAMANAEARQADAMgBANIAPAPQAKAKAIAEQAMAHAWADQAcADAIADQATAGAPAQQAOAQAEAUQAEAUgGAVQgHAUgPAOQgcAZgzAAIgHAAg");
	this.shape.setTransform(49.1,24.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,98.3,49.7);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ArmGYQgRgCgMgGQgXgKgUgeQgZgnADggQACgVANgRQANgRATgJQATgIAWABQAVACATAKIAMAHQAIAFAGABQAHABAKgCIAQgDQAMgDAVAAQAXAAAKgCQAOgCAUgGIAigLQA7gRBagBICYABIAmAAIABAAQgJgFgGgHQgOgOgFgTQgFgUAFgSQAGgVATgTQANgMAagSQBLguA3gdQAggSAlgRIFWikQBeguAzgSIA2gRQAKggAugfQArgcAkgFQAxgHAgAbQANAMAHARQAHARgBASQAAASgKAQQgJAQgOAKQgHAFgNAGIgPAHIgBAEQgDAYgTAUQgRASgZAMQgTAIgdAIIgyAMQggAKgoASIhGAhIjhBpQhiAugsAXQhPAog5AlQgcASgLAFQgWAMgUACIgIAAQANAIAJANQAOATABAVQACAWgKAVQgLAUgTALQgQAKgYADQgOACgdABIiFAAQgyAAgdAFQgOADgVAGIgjAKQhQAViJACIgfgBg");
	this.shape.setTransform(83.8,40.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,167.6,81.9);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjKGrIgEgEIANAEIAKAFIgTgFgAhGGmQgkgEgOgFQgJgEgSgJQgTgKgJgEIgbgHIgRgFIgFgKQgOgbgDgLQgHgWAHgQQADgIAIgKIAOgQQALgPAHgfIAGgZIAFgLIANgVQAFgHAMgMIARgUIATgfQAPgcAFgMQAMggAFgIQAHgJAJgHIABgBQgDgKAAgKQgCgbANgXIAMgTIALgQIATg3QARgoAHgUQAOgkAHgLIAZglIAWgmQAHgNAIgJQAGgSAPgNQARgPAUgEQAVgEAVAHQAUAHAOAQQAYAdgCAxQgBASgGAUQgFAMgNAYQgGANgJAbQgNAigfAxQgnBAgJASIgCADIgCAKQgEAcgDAJQgGAZgMAXQgNAagQAOQgFAQgLAWQgqBWgnAtQAUACARANQAPANAJASQAIATgBAWQgCAVgLARQgKAQgZAVIgGAFg");
	this.shape.setTransform(24.6,43.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,49.3,86.6);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.telo();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.884,0.884);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,116.7,178.6);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.siski();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.884,0.884);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,78.7,49.5);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.lunka();
	this.instance.parent = this;
	this.instance.setTransform(303,203,0.84,0.84);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.bg();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,305);


(lib.Анимация6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9901").s().p("AAMGGIwhmKICmAAIAAmBIb/AAIAAF6ICGAAIvbGRg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.7,-39,209.4,78.1);


(lib.Анимация1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.kist();
	this.instance.parent = this;
	this.instance.setTransform(-24.3,-15.9,0.885,0.885);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.3,-15.9,48.7,31.9);


(lib.Tween22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.w256h2561380453915MouseOptions256x25632();
	this.instance.parent = this;
	this.instance.setTransform(-30,-30,0.234,0.234);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30,-30,60,60);


(lib.Symbol36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AguA0IAAhnIAgAAIAAApIAPAAQAXgBAMAJQALAHAAARQAAAPgKAHQgLAIgTAAgAgOAdIAOAAQAPAAAAgLQAAgKgPABIgOAAg");
	this.shape.setTransform(127,12.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhEA0IAAhnIAgAAIAABNIAVAAIAAhNIAeAAIAABNIAWAAIAAhNIAgAAIAABng");
	this.shape_1.setTransform(113.1,12.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAjA0IAAhnIAgAAIAABngAhCA0IAAhnIAgAAIAAApIARAAQAVgBAMAJQALAHAAARQAAAPgKAHQgLAIgRAAgAgiAdIAQAAQAPAAAAgLQAAgKgPABIgQAAg");
	this.shape_2.setTransform(97.2,12.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAgA0IAAhOIgVBOIgVAAIgVhOIAABOIgaAAIAAhnIAqAAIAPA+IAQg+IAqAAIAABng");
	this.shape_3.setTransform(82.5,12.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AATA0IAAg4IglA4IgeAAIAAhnIAeAAIAAA4IAlg4IAeAAIAABng");
	this.shape_4.setTransform(64.7,12.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAhA/IAAgXIhAAAIAAAXIgaAAIAAgvIAKAAQAKgXgBgfIAAgYIBWAAIAABOIAKAAIAAAvgAgJgjQABAWgIAdIAfAAIAAg0IgYAAg");
	this.shape_5.setTransform(52.6,13.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgqA0IAAhnIBUAAIAAAXIg0AAIAAAQIAwAAIAAAUIgwAAIAAAUIA1AAIAAAYg");
	this.shape_6.setTransform(41.5,12.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgvA0IAAhnIA7AAQAPABAIAHQAIAHAAALQAAAJgGAIQgEAEgHACQALACAFAGQAGAGAAAKQAAAIgEAGQgEAHgHADQgEADgIABIgOACgAgOAdIAOAAQAJAAADgCQADgEAAgFQAAgEgDgDQgDgDgJAAIgOAAgAgOgJIAOAAQAFAAADgDQADgDAAgEQAAgGgDgCQgDgDgFAAIgOAAg");
	this.shape_7.setTransform(30.7,12.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAXA0IgGgRIgiAAIgFARIghAAIAnhnIAhAAIAnBngAALAMIgLgkIgKAkIAVAAg");
	this.shape_8.setTransform(19.2,12.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AARA0IAAgqIghAAIAAAqIggAAIAAhnIAgAAIAAAlIAhAAIAAglIAgAAIAABng");
	this.shape_9.setTransform(7.5,12.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,133.6,23.1);


(lib.shape109 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("AETAAQAABxhRBRQhRBRhxAAQhwAAhRhRQhRhRAAhxQAAhwBRhRQBRhRBwAAQBxAABRBRQBRBRAABwg");
	this.shape.setTransform(27.5,27.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,58,58);


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ49();
	this.instance.parent = this;
	this.instance.setTransform(68.6,38.6,1,1,0,0,0,68.6,38.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.21,scaleY:1.21,rotation:15,x:83.1,y:30.5},9).to({regX:68.7,regY:38.5,scaleX:0.8,scaleY:0.8,x:83.3},5).to({regX:68.6,regY:38.6,scaleX:1.21,scaleY:1.21,x:83.1},5).to({scaleX:1,scaleY:1,rotation:0,x:68.6,y:38.6},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,137.3,77.4);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ42();
	this.instance.parent = this;
	this.instance.setTransform(31.4,31.4,1,1,0,0,0,31.4,31.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:9.2,y:31.5},0).wait(1).to({rotation:18.5},0).wait(1).to({rotation:27.7,y:31.4},0).wait(1).to({rotation:36.9},0).wait(1).to({rotation:46.2},0).wait(1).to({rotation:55.4},0).wait(1).to({rotation:64.6},0).wait(1).to({rotation:73.8},0).wait(1).to({rotation:83.1},0).wait(1).to({rotation:92.3,y:31.3},0).wait(1).to({rotation:101.5,x:31.3},0).wait(1).to({rotation:110.8},0).wait(1).to({rotation:120},0).wait(1).to({rotation:129.2,x:31.4},0).wait(1).to({rotation:138.5},0).wait(1).to({rotation:147.7,x:31.3},0).wait(1).to({rotation:156.9,x:31.4},0).wait(1).to({rotation:166.2},0).wait(1).to({rotation:175.4},0).wait(1).to({rotation:184.6},0).wait(1).to({rotation:193.8},0).wait(1).to({rotation:203.1},0).wait(1).to({rotation:212.3},0).wait(1).to({rotation:221.5},0).wait(1).to({rotation:230.8},0).wait(1).to({rotation:240},0).wait(1).to({rotation:249.2},0).wait(1).to({rotation:258.5},0).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ43();
	this.instance_1.parent = this;
	this.instance_1.setTransform(31.4,31.4,1,1,0,0,0,2.2,2.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({rotation:9.2,y:31.3},0).wait(1).to({rotation:18.5,y:31.4},0).wait(1).to({rotation:27.7,y:31.3},0).wait(1).to({rotation:36.9},0).wait(1).to({rotation:46.2},0).wait(1).to({rotation:55.4},0).wait(1).to({rotation:64.6,y:31.4},0).wait(1).to({rotation:73.8,y:31.3},0).wait(1).to({rotation:83.1,y:31.4},0).wait(1).to({rotation:92.3,y:31.3},0).wait(1).to({rotation:101.5},0).wait(1).to({rotation:110.8},0).wait(1).to({rotation:120},0).wait(1).to({rotation:129.2},0).wait(1).to({rotation:138.5},0).wait(1).to({rotation:147.7,y:31.4},0).wait(1).to({rotation:156.9},0).wait(1).to({rotation:166.2},0).wait(1).to({rotation:175.4},0).wait(1).to({rotation:184.6,y:31.3},0).wait(1).to({rotation:193.8},0).wait(1).to({rotation:203.1,y:31.4},0).wait(1).to({rotation:212.3,y:31.3},0).wait(1).to({rotation:221.5,y:31.4},0).wait(1).to({rotation:230.8,y:31.3},0).wait(1).to({rotation:240,y:31.4},0).wait(1).to({rotation:249.2,y:31.3},0).wait(1).to({rotation:258.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,65.8,65.8);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ37();
	this.instance.parent = this;
	this.instance.setTransform(88.2,-17.3,1,1,0,0,0,90.2,22.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({y:-12.3},5,cjs.Ease.get(-1)).to({y:-7.3},5,cjs.Ease.get(1)).to({y:-12.3},5,cjs.Ease.get(-1)).to({y:-17.3},5,cjs.Ease.get(1)).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ36();
	this.instance_1.parent = this;
	this.instance_1.setTransform(88.3,45.2,1,1,0,0,0,89.7,36.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({y:50.2},5,cjs.Ease.get(-1)).to({y:55.2},5,cjs.Ease.get(1)).wait(10).to({y:50.2},5,cjs.Ease.get(-1)).to({y:45.2},5,cjs.Ease.get(1)).wait(1));

	// Слой 3
	this.instance_2 = new lib.Символ35();
	this.instance_2.parent = this;
	this.instance_2.setTransform(88.3,104.4,1,1,0,0,0,89.7,18.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({y:109.4},5,cjs.Ease.get(-1)).to({y:114.4},5,cjs.Ease.get(1)).wait(20).to({y:109.4},5,cjs.Ease.get(-1)).to({y:104.4},5,cjs.Ease.get(1)).wait(1));

	// Слой 4
	this.instance_3 = new lib.Анимация6("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(86.4,168.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:173.2},4,cjs.Ease.get(-1)).to({y:178.8},5,cjs.Ease.get(1)).to({startPosition:0},5,cjs.Ease.get(-1)).to({startPosition:0},5,cjs.Ease.get(1)).to({startPosition:0},5,cjs.Ease.get(-1)).to({startPosition:0},5,cjs.Ease.get(1)).to({startPosition:0},5,cjs.Ease.get(-1)).to({startPosition:0},5,cjs.Ease.get(1)).to({y:173.8},5,cjs.Ease.get(-1)).to({y:168.8},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.3,-40.1,209.4,248);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ32();
	this.instance.parent = this;
	this.instance.setTransform(242.3,8.6,1,1,0,0,0,15.3,14.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:79.8},14,cjs.Ease.get(-1)).to({x:129.8},10,cjs.Ease.get(1)).to({x:122.3},5,cjs.Ease.get(-1)).to({x:174.8},10,cjs.Ease.get(1)).to({x:169.8},5,cjs.Ease.get(-1)).to({x:219.8},10,cjs.Ease.get(1)).to({x:197.3},5,cjs.Ease.get(-1)).to({x:247.3},10,cjs.Ease.get(1)).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ31();
	this.instance_1.parent = this;
	this.instance_1.setTransform(126.4,8.8,1,1,0,0,0,125.4,9.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(70));

	// Слой 1
	this.instance_2 = new lib.Символ30();
	this.instance_2.parent = this;
	this.instance_2.setTransform(125.7,8.8,1,1,0,0,0,125.7,8.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:125.5,scaleX:0.32,x:40.2},14,cjs.Ease.get(-1)).to({regX:125.6,scaleX:0.52,x:64.9},10,cjs.Ease.get(1)).to({scaleX:0.49,x:61.2},5,cjs.Ease.get(-1)).to({scaleX:0.7,x:87.4},10,cjs.Ease.get(1)).to({scaleX:0.68,x:84.9},5,cjs.Ease.get(-1)).to({regX:125.7,scaleX:0.88,x:110},10,cjs.Ease.get(1)).to({scaleX:0.79,x:98.7},5,cjs.Ease.get(-1)).to({scaleX:0.98,x:123.8},10,cjs.Ease.get(1)).wait(1));

	// Слой 4
	this.instance_3 = new lib.Символ33();
	this.instance_3.parent = this;
	this.instance_3.setTransform(126.5,8.9,1,1,0,0,0,125.4,9.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(70));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-6,257.8,29.1);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(24.4,16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,48.7,31.9);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ball();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.321,0.321);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ23();
	this.instance_1.parent = this;
	this.instance_1.setTransform(5.3,8.6,1,0.848,0,0,0,8.2,8.2);
	this.instance_1.alpha = 0.52;
	this.instance_1.filters = [new cjs.BlurFilter(14, 14, 1)];
	this.instance_1.cache(-2,-2,21,21);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.9,-5.3,33,31);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ20();
	this.instance.parent = this;
	this.instance.setTransform(113.1,135.6,0.936,0.936,0,0,0,98.5,135.5);
	this.instance.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(-31, 3, 6, 0))];
	this.instance.cache(-2,-2,201,275);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ21();
	this.instance_1.parent = this;
	this.instance_1.setTransform(119.8,252.8,0.936,0.936,0,0,0,72.6,14.7);
	this.instance_1.alpha = 0.52;
	this.instance_1.filters = [new cjs.BlurFilter(11, 11, 1)];
	this.instance_1.cache(-2,-2,149,33);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(20.9,8.8,189,267.3);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// klyushka.png
	this.instance = new lib.Символ27();
	this.instance.parent = this;
	this.instance.setTransform(142.7,15.2,1,1,0,0,0,38.6,27.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:4.6,x:142.6},6,cjs.Ease.get(-1)).to({regY:27.5,rotation:11,x:142.7,y:15.1},8,cjs.Ease.get(1)).to({rotation:5.8,x:142.6,y:15.2},7,cjs.Ease.get(-1)).to({rotation:0.3,x:142.7,y:15.1},8,cjs.Ease.get(1)).to({regY:27.4,rotation:0},7,cjs.Ease.get(-1)).to({regY:27.6,y:15.2},8,cjs.Ease.get(1)).wait(1));

	// Слой 4
	this.instance_1 = new lib.Символ22();
	this.instance_1.parent = this;
	this.instance_1.setTransform(207.8,252.3,1,1,0,0,0,8.8,8.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(45));

	// nogi.png
	this.instance_2 = new lib.Символ19();
	this.instance_2.parent = this;
	this.instance_2.setTransform(49.3,123.5,1,1,0,0,0,98.5,135.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.3,-12.4,251.4,283.1);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.prav_noga();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.884,0.884);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ14();
	this.instance_1.parent = this;
	this.instance_1.setTransform(86.3,88.6,1,0.713,0,0,0,83.8,40.9);
	this.instance_1.alpha = 0.398;
	this.instance_1.filters = [new cjs.BlurFilter(10, 10, 1)];
	this.instance_1.cache(-2,-2,172,86);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,0,182,126.4);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ruka();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.884,0.884);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ16();
	this.instance_1.parent = this;
	this.instance_1.setTransform(15.8,52.2,1,1,0,0,0,32.7,40.5);
	this.instance_1.alpha = 0.398;
	this.instance_1.filters = [new cjs.BlurFilter(10, 10, 1)];
	this.instance_1.cache(-2,-2,70,85);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.9,0,91.8,101.7);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.plecho();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.884,0.884);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ17();
	this.instance_1.parent = this;
	this.instance_1.setTransform(3.6,73.8,1,1,-15,0,0,11,19.2);
	this.instance_1.alpha = 0.398;
	this.instance_1.filters = [new cjs.BlurFilter(10, 10, 1)];
	this.instance_1.cache(-2,-2,26,42);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17,0,59.5,104.3);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bedro();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.884,0.884);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ15();
	this.instance_1.parent = this;
	this.instance_1.setTransform(67.6,84.1,1.016,1,0,0,10.2,49.1,24.8);
	this.instance_1.alpha = 0.398;
	this.instance_1.filters = [new cjs.BlurFilter(10, 10, 1)];
	this.instance_1.cache(-2,-2,102,54);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,127.3,126.5);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lev_noga();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.884,0.884);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ13();
	this.instance_1.parent = this;
	this.instance_1.setTransform(22.7,139.3,1,1,0,0,0,24.6,43.3);
	this.instance_1.alpha = 0.398;
	this.instance_1.filters = [new cjs.BlurFilter(10, 10, 1)];
	this.instance_1.cache(-2,-2,53,91);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.9,0,100.7,191);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ24();
	this.instance.parent = this;
	this.instance.setTransform(42.4,41.9,1,1,0,0,0,4.5,1.9);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(28).to({alpha:1},1).to({alpha:0},1).wait(28).to({alpha:1},1).to({alpha:0},1).wait(40));

	// Слой 1
	this.instance_1 = new lib.golova();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.884,0.884);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,62.8,70.7);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// golova.png
	this.instance = new lib.Символ3();
	this.instance.parent = this;
	this.instance.setTransform(157.4,-2.3,1,1,0,0,0,31.4,70.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({skewY:1,x:160.1,y:-0.7},14,cjs.Ease.get(-1)).to({scaleX:1,skewY:2.2,x:163,y:1},15,cjs.Ease.get(1)).wait(41).to({scaleX:1,skewY:1,x:160.2,y:-0.6},15,cjs.Ease.get(-1)).to({skewY:0,x:157.4,y:-2.3},15,cjs.Ease.get(1)).to({y:-1.5},24).to({y:-2.3},26).wait(1));

	// lev_noga.png
	this.instance_1 = new lib.Символ4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(118.6,66.2,1,1,0,0,0,76.6,24.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:76.7,x:118.7,y:66.6},14,cjs.Ease.get(-1)).to({rotation:-0.3,y:67},15,cjs.Ease.get(1)).wait(41).to({rotation:0,y:66.6},15,cjs.Ease.get(-1)).to({regX:76.6,x:118.6,y:66.2},15,cjs.Ease.get(1)).to({y:67.1},24).to({y:66.2},26).wait(1));

	// prav_noga.png
	this.instance_2 = new lib.Символ10();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-19.2,65.6,1,1,0,0,0,150.8,19.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:19.4,rotation:-3,x:-16.2,y:61.4},14,cjs.Ease.get(-1)).to({regY:19.3,rotation:-6.2,x:-12.8,y:56.8},15,cjs.Ease.get(1)).to({rotation:2,x:-22.5,y:67.4},15,cjs.Ease.get(-0.5)).to({rotation:-2.2},11,cjs.Ease.get(0.5)).to({rotation:-6.2,x:-12.8,y:56.8},15,cjs.Ease.get(-0.5)).to({regY:19.4,rotation:-3,x:-16,y:61.3},15,cjs.Ease.get(-1)).to({regY:19.3,rotation:0,x:-19.2,y:65.6},15,cjs.Ease.get(1)).to({regY:19.4,rotation:2,x:-20.8,y:67.8},24).to({regY:19.3,rotation:0,x:-19.2,y:65.6},26).wait(1));

	// bedro.png
	this.instance_3 = new lib.Символ5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(75.9,114.9,1,1,0,0,0,99,68.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:3.5,x:74.5,y:115.3},14,cjs.Ease.get(-1)).to({rotation:7.5,x:72.8,y:115.7},15,cjs.Ease.get(1)).to({regY:69,rotation:-0.8,x:72.9,y:115.8},15,cjs.Ease.get(-0.5)).to({rotation:-0.8},11,cjs.Ease.get(0.5)).to({regY:68.9,rotation:7.5,x:72.8,y:115.7},15,cjs.Ease.get(-0.5)).to({regY:69,rotation:3.6,x:74.4,y:115.4},15,cjs.Ease.get(-1)).to({regY:68.9,rotation:0,x:75.9,y:114.9},15,cjs.Ease.get(1)).to({y:115.7},24).to({y:114.9},26).wait(1));

	// siski.png
	this.instance_4 = new lib.Символ6();
	this.instance_4.parent = this;
	this.instance_4.setTransform(137.3,40.8,1,1,0,0,0,39.3,24.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:137.7,y:42},14,cjs.Ease.get(-1)).to({x:138.1,y:43.2},15,cjs.Ease.get(1)).wait(41).to({x:137.7,y:42},15,cjs.Ease.get(-1)).to({x:137.3,y:40.8},15,cjs.Ease.get(1)).to({y:41.6},24).to({y:40.8},26).wait(1));

	// plecho.png
	this.instance_5 = new lib.Символ7();
	this.instance_5.parent = this;
	this.instance_5.setTransform(182.9,10.2,1,1,0,0,0,2.9,18.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:-2.3,x:184.5,y:12.2},14,cjs.Ease.get(-1)).to({regX:2.8,rotation:-4.7,x:186.1,y:14.2},15,cjs.Ease.get(1)).to({regX:2.9,rotation:0,y:14.3},15,cjs.Ease.get(-0.5)).to({regX:2.8,rotation:-4.7,y:14.2},11,cjs.Ease.get(0.5)).wait(15).to({regX:2.9,rotation:-2.3,x:184.5,y:12.3},15,cjs.Ease.get(-1)).to({rotation:0,x:182.9,y:10.2},15,cjs.Ease.get(1)).to({rotation:-4.5,y:11},24).to({rotation:0,y:10.2},26).wait(1));

	// telo.png
	this.instance_6 = new lib.Символ8();
	this.instance_6.parent = this;
	this.instance_6.setTransform(128.3,73.2,1,1,0,0,0,58.3,89.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:2,y:73.7},14,cjs.Ease.get(-1)).to({regX:58.4,rotation:4.5,x:128.4,y:74.1},15,cjs.Ease.get(1)).wait(41).to({rotation:2.1,y:73.7},15,cjs.Ease.get(-1)).to({regX:58.3,rotation:0,x:128.3,y:73.2},15,cjs.Ease.get(1)).to({y:74},24).to({y:73.2},26).wait(1));

	// Слой 10
	this.instance_7 = new lib.Символ25();
	this.instance_7.parent = this;
	this.instance_7.setTransform(103.7,180.1,1,1,0,0,0,44.9,14);
	this.instance_7.alpha = 0.379;
	this.instance_7.filters = [new cjs.BlurFilter(10, 10, 1)];
	this.instance_7.cache(-2,-2,94,32);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:100.6,y:175.1},14,cjs.Ease.get(-1)).to({x:97.3,y:169.6},15,cjs.Ease.get(1)).wait(41).to({x:100.5,y:174.1},15,cjs.Ease.get(-1)).to({x:103.7,y:180.1},15,cjs.Ease.get(1)).to({y:178.5},24).to({y:180.1},26).wait(1));

	// Слой 11
	this.instance_8 = new lib.Символ26();
	this.instance_8.parent = this;
	this.instance_8.setTransform(249.4,152,1,1,0,0,0,24.4,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({x:245.4},14,cjs.Ease.get(-1)).to({x:239.8,y:152.8},15,cjs.Ease.get(1)).to({x:234.2},15,cjs.Ease.get(-0.5)).to({x:239.8},11,cjs.Ease.get(0.5)).wait(15).to({x:245.4,y:152},15,cjs.Ease.get(1)).to({x:249.4},15,cjs.Ease.get(1)).to({x:248.6,y:151.2},24).to({x:249.4,y:152},26).wait(1));

	// ruka.png
	this.instance_9 = new lib.Символ9();
	this.instance_9.parent = this;
	this.instance_9.setTransform(215.8,75.4,1,1,0,0,0,12.8,3.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({rotation:7.1,x:220.1,y:75.8},14,cjs.Ease.get(-1)).to({rotation:15,x:224.6,y:76.3},15,cjs.Ease.get(1)).to({x:218.2},15,cjs.Ease.get(-0.5)).to({x:224.6},11,cjs.Ease.get(0.5)).wait(15).to({regY:3.5,rotation:7.3,x:220.2,y:76},15,cjs.Ease.get(-1)).to({regY:3.4,rotation:0,x:215.8,y:75.4},15,cjs.Ease.get(1)).to({rotation:4.2,x:220.6,y:73.9},24).to({rotation:0,x:215.8,y:75.4},26).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-172.5,-73,446.2,306);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol36();
	this.instance.parent = this;
	this.instance.setTransform(66.8,11.6,1,1,0,0,0,66.8,11.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,133.6,23.1);


(lib.sprite110 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shape109("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,58,58);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween22("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(30,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,60,60);


(lib.Символ51 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ50();
	this.instance.parent = this;
	this.instance.setTransform(68.6,38.6,1,1,0,0,0,68.6,38.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:544.5},9).to({x:68.6},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,137.3,77.4);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ41();
	this.instance.parent = this;
	this.instance.setTransform(29.4,29.4,0.936,0.936,0,0,0,31.4,31.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:9.9,y:41.5},4).to({x:-9.2,y:25.8},5).to({x:6,y:1.7},5).to({x:51.3,y:9.5},5).to({y:56.3},5).to({x:3.4,y:73.7},5).to({x:-32.9,y:48.9},5).to({y:-0.9},5).to({x:-3.9,y:-21.1},5).to({x:37.4,y:-23.6},5).to({x:-3.9,y:-21.1},5).to({x:-32.9,y:-0.9},5).to({y:48.9},5).to({x:3.4,y:73.7},5).to({x:51.3,y:56.3},5).to({y:9.5},5).to({x:6,y:1.7},5).to({x:-9.2,y:25.8},5).to({x:9.9,y:41.5},5).to({x:29.4,y:29.4},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.3,-30.3,107.4,110.9);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ41();
	this.instance.parent = this;
	this.instance.setTransform(19.9,35.2,1,1,0,0,0,31.4,31.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-16.1,y:77.2},9).to({x:-49.1,y:62.2},5).to({x:-34.1,y:33.7},5).to({x:27.4,y:25.8},10).to({x:98.2,y:28.5},10).to({x:104.2,y:1.5},5).to({x:80.2,y:-18.9},5).to({x:25.3,y:15.6},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55,-24.7,166.1,107.5);


(lib.Символ40 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ29();
	this.instance.parent = this;
	this.instance.setTransform(125.7,14.8,1,1,0,0,0,125.7,8.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-10.5},4,cjs.Ease.get(-1)).to({y:-42.2},5,cjs.Ease.get(1)).to({y:-13.7},5,cjs.Ease.get(-1)).to({y:14.8},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,257.8,29.1);


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
	this.instance = new lib.Символ11();
	this.instance.parent = this;
	this.instance.setTransform(111,139.2,0.957,0.957,0,0,0,87.7,133);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:133.1,x:208.8,y:139.3},4,cjs.Ease.get(-1)).to({regY:133,x:331,y:139.2},5,cjs.Ease.get(1)).to({regY:133.1,x:220.9,y:139.3},5,cjs.Ease.get(-1)).to({regY:133,x:111,y:139.2},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,241.6,271.9);


(lib.Символ38 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ34();
	this.instance.parent = this;
	this.instance.setTransform(84.1,56.8,1,1,0,0,0,65.8,16.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-40.3},4,cjs.Ease.get(-1)).to({x:-195.9},5,cjs.Ease.get(1)).to({x:-55.9},5,cjs.Ease.get(-1)).to({x:84.1},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,209.4,248);


(lib.sprite112 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol16();
	this.instance.parent = this;
	this.instance.setTransform(1.5,21.8,0.85,0.85,0,0,0,30,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[1.5,21.7,1.5,21.3,1.5,20.9,1.5,15.3,5.6,11.2,9.7,7.1,15.3,7.1,21.1,7.1,25.2,11.2,29.3,15.3,29.3,20.9,29.3,26.7,25.2,30.8,21.1,34.9,15.3,34.9,9.7,34.9,5.6,30.8,3.3,28.5,2.3,25.7]}},29).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24,-3.7,51,51);


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
	this.kursor = new lib.Символ47();
	this.kursor.parent = this;
	this.kursor.setTransform(29.4,29.4,1,1,0,0,0,29.4,29.4);
	this.kursor.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.kursor).to({alpha:1},4).to({alpha:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.4,-1.4,61.6,61.6);


(lib.Символ46 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ44();
	this.instance.parent = this;
	this.instance.setTransform(42.9,27.6,1,1,0,0,0,31.4,31.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},4).to({alpha:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,65.8,65.8);


(lib.sprite113 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.sprite112();
	this.instance.parent = this;
	this.instance.setTransform(11.6,6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30));

	// Layer 1
	this.instance_1 = new lib.sprite110();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-8.7,-8.7,1.316,1.316);
	this.instance_1.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.5,-10.6,78.2,76.3);


(lib.Символ9_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance_2 = new lib.Symbol26();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-92.9,0.6,1,1,0,0,0,66.8,11.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 1
	this.cir = new lib.sprite113();
	this.cir.parent = this;
	this.cir.setTransform(0.1,0.1,0.499,0.499,0,0,0,27.6,27.6);

	this.timeline.addTween(cjs.Tween.get(this.cir).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-159.7,-19,178.8,38.1);


(lib.Символ72 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ9_1();
	this.instance.parent = this;
	this.instance.setTransform(147.5,16.7,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-50.5},9).to({x:147.5},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,-0.9,165,35.2);


(lib.Символ45 = function(mode,startPosition,loop) {
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
	this.mouse = new lib.Символ72();
	this.mouse.parent = this;
	this.mouse.setTransform(82.5,16.6,1,1,0,0,0,82.5,16.6);

	this.timeline.addTween(cjs.Tween.get(this.mouse).to({x:185.6},4,cjs.Ease.get(-1)).to({x:314.5},5,cjs.Ease.get(1)).to({x:198.5},5,cjs.Ease.get(-1)).to({x:82.5},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,-0.9,165,35.2);


// stage content:



(lib.golf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		stage.canvas.style.cursor = "none";
		this.kursor.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
			this.kursor.x = stage.mouseX/window.devicePixelRatio;
			this.kursor.y = stage.mouseY/window.devicePixelRatio;
		}
		
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		this.cursor = "none";
		
		stage.canvas.addEventListener("mouseover", fl_Clickover.bind(this));
		
		function fl_Clickover()
		{
		    this.text.gotoAndPlay(1);
		    this.golfer.gotoAndPlay(1);
		    this.mouse.gotoAndPlay(1);
			this.pricel.gotoAndPlay(1);
			this.kursor.gotoAndPlay(1);
			this.shkala.gotoAndPlay(1);
			this.text2.gotoAndPlay(1);
		}
		
		stage.canvas.addEventListener("mouseout", fl_Clickout.bind(this));
		
		function fl_Clickout()
		{
		    this.text.gotoAndPlay(10);
		    this.golfer.gotoAndPlay(10);
		    this.mouse.gotoAndPlay(10);
			this.pricel.gotoAndPlay(5);
			this.kursor.gotoAndPlay(5);
			this.shkala.gotoAndPlay(10);
			this.text2.gotoAndPlay(10);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// kursor
	this.kursor = new lib.Символ48();
	this.kursor.parent = this;
	this.kursor.setTransform(348.1,261.2,1,1,0,0,0,29.4,29.4);

	this.timeline.addTween(cjs.Tween.get(this.kursor).wait(1));

	// pricel
	this.pricel = new lib.Символ46();
	this.pricel.parent = this;
	this.pricel.setTransform(402.4,188.5,1,1,0,0,0,31.4,31.4);

	this.timeline.addTween(cjs.Tween.get(this.pricel).wait(1));

	// text2
	this.text2 = new lib.Символ51();
	this.text2.parent = this;
	this.text2.setTransform(-155.4,83.4,0.838,0.838,0,0,0,68.6,38.8);

	this.timeline.addTween(cjs.Tween.get(this.text2).wait(1));

	// text
	this.text = new lib.Символ38();
	this.text.parent = this;
	this.text.setTransform(149.3,135.7,1,1,0,0,0,104.7,124);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// mouse
	this.mouse = new lib.Символ45();
	this.mouse.parent = this;
	this.mouse.setTransform(547.4,277.4,1,1,0,0,0,82.5,16.6);

	this.timeline.addTween(cjs.Tween.get(this.mouse).wait(1));

	// shkala
	this.shkala = new lib.Символ40();
	this.shkala.parent = this;
	this.shkala.setTransform(146.8,342.4,1,1,0,0,0,128.8,14.6);

	this.timeline.addTween(cjs.Tween.get(this.shkala).wait(1));

	// golfist
	this.golfer = new lib.Символ39();
	this.golfer.parent = this;
	this.golfer.setTransform(-137.3,119.3,1,1,0,0,0,117.2,131.7);

	this.timeline.addTween(cjs.Tween.get(this.golfer).wait(1));

	// flag
	this.instance = new lib.flag();
	this.instance.parent = this;
	this.instance.setTransform(302,10,0.656,0.656);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// telka
	this.instance_1 = new lib.Символ2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(492.4,151,0.802,0.802,0,0,0,90.5,102.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.instance_2 = new lib.Символ1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(320,152.5,1,1,0,0,0,320,152.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(65.4,140.1,894.6,369.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;