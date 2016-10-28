(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 26,
	color: "#FFFFFF",
	manifest: [
		{src:"images/arm.png?1477664203548", id:"arm"},
		{src:"images/back.jpg?1477664203548", id:"back"},
		{src:"images/gun.png?1477664203548", id:"gun"},
		{src:"images/head.png?1477664203548", id:"head"},
		{src:"images/leg.png?1477664203548", id:"leg"},
		{src:"images/lip1.png?1477664203548", id:"lip1"},
		{src:"images/lip2.png?1477664203548", id:"lip2"},
		{src:"images/popdi.png?1477664203548", id:"popdi"},
		{src:"images/popik.png?1477664203548", id:"popik"},
		{src:"images/shoould.png?1477664203548", id:"shoould"},
		{src:"images/tik1.png?1477664203548", id:"tik1"},
		{src:"images/tik2.png?1477664203548", id:"tik2"},
		{src:"images/vampirebats_0.png?1477664203548", id:"vampirebats_0"},
		{src:"images/vampirebats_1.png?1477664203548", id:"vampirebats_1"},
		{src:"images/vtik.png?1477664203548", id:"vtik"}
	]
};



// symbols:



(lib.arm = function() {
	this.initialize(img.arm);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,363,206);


(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,900,517);


(lib.gun = function() {
	this.initialize(img.gun);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,188);


(lib.head = function() {
	this.initialize(img.head);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,255,218);


(lib.leg = function() {
	this.initialize(img.leg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,93,256);


(lib.lip1 = function() {
	this.initialize(img.lip1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,43,12);


(lib.lip2 = function() {
	this.initialize(img.lip2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,38,15);


(lib.popdi = function() {
	this.initialize(img.popdi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,283,58);


(lib.popik = function() {
	this.initialize(img.popik);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,223,224);


(lib.shoould = function() {
	this.initialize(img.shoould);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,236,64);


(lib.tik1 = function() {
	this.initialize(img.tik1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,125,144);


(lib.tik2 = function() {
	this.initialize(img.tik2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,126,134);


(lib.vampirebats_0 = function() {
	this.initialize(img.vampirebats_0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,350,323);


(lib.vampirebats_1 = function() {
	this.initialize(img.vampirebats_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,350,323);


(lib.vtik = function() {
	this.initialize(img.vtik);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,361,66);


(lib.Символ56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.gun();
	this.instance.setTransform(121.4,0,1,1,40.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,274.1,272.7);


(lib.Символ53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.vampirebats_0();

	this.instance_1 = new lib.vampirebats_1();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,350,323);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","#000000"],[0,1],-0.2,112.3,-0.2,-112.2).s().p("Eg+QARiMAAAgjDMB8hAAAMAAAAjDg");
	this.shape.setTransform(398.5,112.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,797,224.5);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.back();
	this.instance.setTransform(0,0,0.863,0.863);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,776.4,446);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.popdi();
	this.instance.setTransform(0,0,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,198.1,40.6);


(lib.Символ40копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.vtik();
	this.instance.setTransform(-3.8,48.3,0.581,0.581);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.8,48.3,209.6,38.3);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC33").s().p("AAuBtQgPgFgLgJQgMgLgHgOIgCgPIgCgRIAAhLQAAgMAEgVQAHgOAMgJQALgKAPgFQAPgFARAAQARAAAQAFQAOAFALAKQAMAJAGAOQAHAPAAASIAABLIgCARIgFAPQgGAOgMALQgLAJgOAFQgQAFgRAAQgRAAgPgFgAA5g4QgHAHAAANIAABKQAAAMAHAHQAIAHANAAQANAAAIgHQAIgHAAgMIAAhKQAAgNgIgHQgIgHgNAAQgNAAgIAHgAhVBIIgUgjIgBAAIgVAjIghAAIAAgEIAkg4IggguIAAgEIAgAAIASAeIAAAAIATgeIAfAAIAAAEIggAuIAkA4IAAAEg");
	this.shape.setTransform(16.1,11.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,32.3,23);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(6.8,1,1).p("AAAurIAAMMAurgJIMMAAAAACgIAAMMACggJIMMAA");
	this.shape.setTransform(94,94);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.4,-3.4,194.8,194.8);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(6.8,1,1).p("ACLrhQDeAoCoCoQC0C0AhDwArlhtQAgjwC0i0QClilDXgpAiVLgQjXgpililQililgpjXALgCWQgqDXilClQioCojeAo");
	this.shape.setTransform(74.3,73.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.4,-3.4,155.4,154.4);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF9900","#FF6600"],[0,1],-78.8,0,78.9,0).s().p("AD/DzIwSh7ID3o1INeDMIAejgIG0JGIozFdg");
	this.shape.setTransform(78.8,46.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,157.7,93.2);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC33").s().p("AD/DzIwSh7ID3o1INeDMIAejgIG0JGIozFdg");
	this.shape.setTransform(78.8,46.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,157.7,93.2);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tik2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,126,134);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tik1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,125,144);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tik2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,126,134);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#090100").s().p("ABcAbQgVgRgmgWQgjgXg3AmQg2AoAAgXQAAgUAhgQQAhgQAtAAQAuAAAhAQQAhAQAAAVQAAAMgHAAQgFAAgIgGg");
	this.shape.setTransform(11.3,2.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#090100").s().p("ABXAjQgggJgmgTQgkgRgwAXQgwAZAAgXQAAgUAhgQQAigQAuAAQAtAAAjARQAjASADAWQACASgQAAQgGAAgJgDg");
	this.shape_1.setTransform(11.6,3.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#090100").s().p("ABRArQgrgCgmgOQgkgPgpALQgqAKAAgXQAAgUAhgQQAigQAuAAQAtAAAlASQAlATAGAYQAFAYglAAIgGAAg");
	this.shape_2.setTransform(12,3.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#090100").s().p("AgOAsQgngJgigFQgjgEAAgXQAAgVAhgQQAhgQAvAAQAsAAAoAUQAnAUAIAaQAJAcg3AFQgSACgQAAQghAAgXgHg");
	this.shape_3.setTransform(12.4,4.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#090100").s().p("AgfA8QgngFgcgUQgcgTAAgVQAAgXAhgQQAhgQAvAAQAsAAAqAVQApAWALAbQALAehBAMQguAJgfAAQgOAAgLgBg");
	this.shape_4.setTransform(12.8,6.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#090100").s().p("AgSAvIhIgQQghgHAAgXQAAgVAhgQQAhgQAvAAQAsAAAoAVQAoAUAJAaQAIAcg4AHQgYADgUAAQgcAAgVgGg");
	this.shape_5.setTransform(12.5,5.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#090100").s().p("AgFAiQgmgNgmAFQgnAEAAgXQAAgUAhgQQAhgQAvAAQAsAAAmATQAmATAHAZQAHAbgwABIgDAAQguAAgjgMg");
	this.shape_6.setTransform(12.2,4.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#090100").s().p("ABUAoQgngFgmgQQgkgQgsAQQgsAQAAgXQAAgUAhgQQAigQAuAAQAtAAAkASQAlASAEAYQADAVgaAAIgLgBg");
	this.shape_7.setTransform(11.8,3.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#090100").s().p("ABYAiQgegMgmgTQgkgSgxAaQgxAcAAgXQAAgUAhgQQAhgQAvAAQAsAAAjARQAjARACAWQACARgOAAQgGAAgJgDg");
	this.shape_8.setTransform(11.6,2.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape}]},1).to({state:[]},1).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1,22.6,6.8);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.popik();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,223,224);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shoould();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("AA8AwQADgnADgtIAAgLQgOADgrAUQgtAYgaAXQgCACgBAB");
	this.shape.setTransform(19.3,-0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#220505").s().p("AjcF4QgcgBgLgIQgNgJAAgRQgBgRALgLQgLgDgTABIgeACQgRAAgNgJQgOgJAAgOQgTgFgJgMQgLgQAIgQQAGgLATgEIgGgJIgOgZQgXgPgkgjIiHiFQgagYAGgSQADgKAKgFIgLgVQgFAEgHABQgHALgNABQgKABgNgHIgWgMQgRgIgjAAQgUgBgLgCQgRgDgJgJQgKgJgHgVQgIgbgEgGQgPgUgDgMQgEgOAHgNQAEgGAAgCQAAgEgFgEIgRgUQgMgLgDgKQgGgPAKgNQAJgOAQAAIAAgBQAOABAMAHQAMAIAGALIAGANIAFgCIAAAAQALgGANAGQANAFAIAMQACgKAJgHQAIgHAKAAIABgCQAaAMAQAYQAEgEAFgBQAGgCAIABQANACAJAJQAMAMALAgQAnBnBIBSQAcAfA/A/QAfAiAVAfQAjAPAyAIQBNALBigEQA6gCB0gMQATgCAIgGQAIgGAHgTIAphpIAghVQAQgxAIgoQgLABgHgKQgIgKADgLQACgPAWgWQAXgXAOgLQAXgSAVgIQAYgKAngCIBBgEQAigDBMgWQBFgUAogBQAPAAAfACQAeADAQgBQA4gBAdgbIAEAFQANgGALANQAKANgEAOQgGAXgkANQATAwhHA+QgiAggagBQgRgBgKgRQgLgSANgMQgLAHgNgBQgNgBgJgIQgKgIgDgMQgDgNAFgLQh+Anh4A0IgCADIgMAQQgSAXgOAlIgWBAQghBdgwBUQgWAmgVAMIgDABIAAABQAAAKgGAIQgMAOgeABQAOACAigCQAfgBAQAEQAWAGAFANQADAKgFAKQgFAJgKAFQgNAIgbgBIg9gBQgjABgaAGQgJACgDAFQgBACAAAFIABAIQABAMgPAJQgJAFgRACQhsAPhuAAIglAAg");
	this.shape_1.setTransform(91.2,30.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-6.7,236,75.4);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.arm();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,363,206);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.leg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,93,256);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lip1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,43,12);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lip2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,38,15);


(lib.Символ55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ53();
	this.instance.setTransform(50.2,50.2,0.529,0.529,0,0,0,95,94.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,185,170.7);


(lib.Символ54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ55();
	this.instance.setTransform(954.6,24.9,0.848,0.882,0,0,180,92.5,85.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25).to({_off:false},0).to({scaleX:0.81,x:99.3},38).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ55();
	this.instance_1.setTransform(92.5,85.4,1,1,0,0,0,92.5,85.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:1031.9},24).to({_off:true},1).wait(39));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,185,170.7);


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ56();
	this.instance.setTransform(228.1,226.2,1,1,0,0,0,137.1,136.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:3.5,x:226.3,y:229.4},9,cjs.Ease.get(-1)).to({rotation:7.7,x:224.2,y:233.2},10,cjs.Ease.get(1)).to({rotation:4,x:226,y:229.8},10,cjs.Ease.get(-1)).to({rotation:0,x:228.1,y:226.2},11,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(91,89.9,274.1,272.7);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ54();
	this.instance.setTransform(-82.9,257.7,1,1,0,0,0,92.5,85.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ48();
	this.instance_1.setTransform(398.5,198.3,1,1,0,0,0,398.5,112.2);

	this.instance_2 = new lib.Символ46();
	this.instance_2.setTransform(391.5,223,1,1,0,0,0,388.2,223);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-175.4,0,972.4,446);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 43
	this.instance = new lib.Символ43();
	this.instance.setTransform(86.1,48.5,1,1,0,0,0,85.5,48.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.06,scaleY:1.06,x:86.2},7,cjs.Ease.get(-1)).to({scaleX:1.12,scaleY:1.12,x:86.1},7,cjs.Ease.get(1)).to({regX:85.6,scaleX:1.07,scaleY:1.07,x:86.2},7,cjs.Ease.get(-1)).to({regX:85.5,scaleX:1,scaleY:1,x:86.1},8,cjs.Ease.get(1)).wait(1));

	// Символ 40 - копия
	this.instance_1 = new lib.Символ40копия();
	this.instance_1.setTransform(101,39.5,1.129,1.129,0,0,0,101,40.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:40.8,scaleX:1.06,scaleY:1.06,y:40.5},7,cjs.Ease.get(-1)).to({regY:40.9,scaleX:1,scaleY:1,y:41.5},7,cjs.Ease.get(1)).to({scaleX:1.06,scaleY:1.06,y:40.6},7,cjs.Ease.get(-1)).to({scaleX:1.11,scaleY:1.11,y:39.8},4,cjs.Ease.get(1)).to({scaleX:1.13,scaleY:1.13,y:39.5},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.3,0,236.6,91.1);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ36();
	this.instance.setTransform(95,95,1,1,0,0,0,94,94);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.11,scaleY:1.11},9).to({scaleX:1,scaleY:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.4,-2.4,194.8,194.8);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 31
	this.instance = new lib.Символ31();
	this.instance.setTransform(69.4,138.9,1,1,-42.4,0,0,78.8,46.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:-35.1,x:74.1,y:136.7},7,cjs.Ease.get(-1)).to({regY:46.5,scaleX:1,scaleY:1,rotation:-13.8,x:88.3,y:129.9},9,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:-21.8,x:82.9,y:132.4},8,cjs.Ease.get(-1)).to({regY:46.6,scaleX:1,scaleY:1,rotation:-42.4,x:69.4,y:138.9},10,cjs.Ease.get(1)).wait(1));

	// Символ 30
	this.instance_1 = new lib.Символ30();
	this.instance_1.setTransform(67,147.6,1,1,-42.4,0,0,78.8,46.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,rotation:-35.1,x:70.6,y:141.7},7,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:-13.8,x:81.9,y:123.7},9,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:-21.8,x:77.6,y:130.5},8,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:-42.4,x:67,y:147.6},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.7,51.3,181.7,183.9);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ23();
	this.instance.setTransform(64.2,72,1,1,0,0,0,63,67);
	this.instance.alpha = 0.281;
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ24();
	this.instance_1.setTransform(65.7,72,1,1,0,0,0,62.5,72);

	this.instance_2 = new lib.Символ25();
	this.instance_2.setTransform(64.2,72,1,1,0,0,0,63,67);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.2,0,125,144);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 3
	this.instance = new lib.Символ3();
	this.instance.setTransform(21.5,6,1,1,0,0,0,21.5,6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13).to({scaleY:0.88,y:6.5},3).to({scaleX:1,scaleY:1,skewY:3.6,y:4.7},8).to({scaleX:0.9,skewY:0,y:6},10).wait(1));

	// Символ 2
	this.instance_1 = new lib.Символ2();
	this.instance_1.setTransform(20.2,12.2,1,1,0,0,0,19,7.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:13.1},9).to({y:12.2},4).to({scaleY:0.88,y:11.9},3).to({scaleX:1,scaleY:1,skewY:3.6,y:10.8},8).to({scaleX:0.9,skewY:0,x:20.3,y:12.2},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,43,19.7);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ47();
	this.instance.setTransform(395.3,223,1,1,0,0,0,398.5,223);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:384.2},24,cjs.Ease.get(-1)).to({x:372.7},25,cjs.Ease.get(1)).to({x:384},25,cjs.Ease.get(-1)).to({x:395.3},24,cjs.Ease.get(1)).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-178.6,0,972.4,446);


(lib.Символ14 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ49();
	this.instance.setTransform(245.5,156.4,1,1,0,0,0,245.5,161.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:385.5,y:233.4},9,cjs.Ease.get(-1)).to({x:245.5,y:156.4},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(91,84.9,274.1,272.7);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ20();
	this.instance.setTransform(130.4,62.2,1,1,0,0,0,127.8,72);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.8,-9.8,127,144);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ19();
	this.instance.setTransform(134.5,131.9,0.712,1,0,0,0,11.2,5.5);

	this.instance_1 = new lib.Символ19();
	this.instance_1.setTransform(80.3,130.4,1,1,0,0,0,11.2,5.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 1
	this.instance_2 = new lib.head();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,255,218);


(lib.Анимация2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ34();
	this.instance.setTransform(-1,-1,1,1,0,0,0,94,94);

	this.instance_1 = new lib.Символ35();
	this.instance_1.setTransform(1,-2,1,1,0,0,0,74.2,73.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97.4,-97.4,194.8,194.8);


(lib.Анимация1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ34();
	this.instance.setTransform(-1,-1,1,1,0,0,0,94,94);

	this.instance_1 = new lib.Символ35();
	this.instance_1.setTransform(1,-2,1,1,0,0,0,74.2,73.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97.4,-97.4,194.8,194.8);


(lib.Символ52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.setTransform(364.2,207.5,0.931,0.931,0,0,0,388.2,223);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-163.2,0,904.9,415);


(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(21));

	// Слой 1
	this.instance = new lib.Символ52();
	this.instance.setTransform(370.8,207.5,1,1,0,0,0,370.8,207.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.05,scaleY:1.05,x:381.8,y:203.3},10,cjs.Ease.get(-1)).to({scaleX:1.1,scaleY:1.1,x:391.6,y:199.5},9,cjs.Ease.get(1)).to({scaleX:1.05,scaleY:1.05,x:381.2,y:203.5},10,cjs.Ease.get(-1)).to({regX:370.9,scaleX:1.02,scaleY:1.02,x:375.9,y:205.5},3,cjs.Ease.get(1)).to({regX:370.8,scaleX:1,scaleY:1,x:370.8,y:207.5},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-163.2,0,904.9,415);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация1("synched",0);
	this.instance.setTransform(95,95);

	this.instance_1 = new lib.Анимация2("synched",0);
	this.instance_1.setTransform(95,95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},49).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,rotation:360},49).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.4,-2.4,194.8,194.8);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ29();
	this.instance.setTransform(74.5,10.2,1,1,0,0,0,74.5,32.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:134.7,y:-22.1},7,cjs.Ease.get(-1)).to({x:194.9,y:-54.4},7,cjs.Ease.get(1)).to({x:137.9,y:-23.8},9,cjs.Ease.get(-1)).to({x:74.5,y:10.2},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.7,28.7,181.7,183.9);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 3
	this.instance = new lib.Символ18();
	this.instance.setTransform(534,189.4,1,1,0,0,0,21.5,9.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 7
	this.instance_1 = new lib.Символ7();
	this.instance_1.setTransform(553.1,109,1,1,0,0,0,127.5,109);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(425.6,0,255,218);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ33();
	this.instance.setTransform(45.5,49.4,0.495,0.495,0,0,0,94,94);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[45.4,49.6,26.1,46.6,6.7,49.7,-11,52.5,-27.8,58.5,-45.9,65.1,-63.4,72.9,-81.8,81.2,-96.7,94.5,-105.8,102.6,-115,111.3,-119.6,115.7,-124.2,120.3,-137.4,133.4,-146.3,149.5,-155.9,166.2,-166.4,182.4,-176.9,198.6,-195.3,205.3,-213.7,212.1,-233.8,211.8,-251.8,211.5,-269.8,211,-289.9,210.5,-308.5,203,-316,200.1,-322.8,196,-324.4,192.3,-326,188.6]}},36).to({guide:{path:[-325.9,188.6,-329.4,180.5,-332.8,172.5,-332.8,163.7,-332.8,155,-328.6,148,-324.3,141,-315.9,131.9,-304.6,127,-297.1,123.8,-289.8,121.9,-280.9,119.7,-271.4,118.9,-254.8,117.5,-238.5,115.1,-192.5,108.5,-146,109.3,-139.3,109.4,-132.5,109.8]}},25).to({guide:{path:[-132.4,109.7,-123.6,110.2,-114.8,111.2,-88.9,114,-63.4,120.7,-35.8,128,-8.3,134.4,26.7,142.4,61.9,150.7,70.2,152.7,78.5,153.7]}},25).to({guide:{path:[78.5,153.7,88.9,155,99.4,154.9,115.6,154.7,125.3,142.2,132.8,132.7,130.2,120.8,123.7,91.3,95.7,77.9,78,69.6,63.6,56.6,54.8,53.1,46.1,49.6,45.9,49.6,45.6,49.5]}},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.2,1.7,96.4,96.4);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 17
	this.instance = new lib.Символ17();
	this.instance.setTransform(60.1,289.7,0.956,0.956,0,0,0,340.2,109);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-1.5,x:55.4,y:297},9,cjs.Ease.get(-1)).to({regX:340.3,rotation:-3.5,x:50.3,y:305},10,cjs.Ease.get(1)).to({rotation:-1.8,x:55.2,y:297.4},10,cjs.Ease.get(-1)).to({regX:340.2,rotation:0,x:60.1,y:289.7},10,cjs.Ease.get(1)).wait(1));

	// Символ 9
	this.instance_1 = new lib.Символ9();
	this.instance_1.setTransform(210.1,64.3,0.956,0.956,-15,0,0,127.8,72);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:1.1,x:191.7,y:80.2},9,cjs.Ease.get(-1)).to({rotation:19.2,x:171.1,y:97.9},10,cjs.Ease.get(1)).to({rotation:2,x:190.7,y:81.2},10,cjs.Ease.get(-1)).to({rotation:-15,x:210.1,y:64.3},10,cjs.Ease.get(1)).wait(1));

	// Символ 5
	this.instance_2 = new lib.Символ5();
	this.instance_2.setTransform(241,369,0.956,0.956,0,0,0,181.5,103);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({skewX:0.3,x:241.7},9,cjs.Ease.get(-1)).to({regX:181.6,scaleY:0.96,skewX:0.7,x:242.3},10,cjs.Ease.get(1)).to({scaleY:0.96,skewX:0.3,x:241.7},10,cjs.Ease.get(-1)).to({regX:181.5,skewX:0,x:241},10,cjs.Ease.get(1)).wait(1));

	// Символ 6
	this.instance_3 = new lib.Символ6();
	this.instance_3.setTransform(277.4,358.4,0.956,0.956,0,0,0,118,32);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:0.97,scaleY:0.96,skewX:-4.5,x:276.7,y:358.3},9,cjs.Ease.get(-1)).to({regX:118.1,scaleX:0.98,scaleY:0.97,skewX:-9.6,x:276.2,y:358.4},10,cjs.Ease.get(1)).to({scaleX:0.97,scaleY:0.96,skewX:-4.8,x:276.8},10,cjs.Ease.get(-1)).to({regX:118,scaleX:0.96,scaleY:0.96,skewX:0,x:277.4},10,cjs.Ease.get(1)).wait(1));

	// Символ 4
	this.instance_4 = new lib.Символ4();
	this.instance_4.setTransform(60.7,296.1,0.956,0.965,0,7.6,0,46.5,128.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleY:0.96,skewX:2.3,x:52.9,y:297},9,cjs.Ease.get(-1)).to({regY:128,scaleY:0.94,skewX:-3.4,x:44.2,y:297.8},10,cjs.Ease.get(1)).to({scaleY:0.95,skewX:2,x:52.5,y:296.9},10,cjs.Ease.get(-1)).to({regY:128.1,scaleY:0.97,skewX:7.6,x:60.7,y:296.1},10,cjs.Ease.get(1)).wait(1));

	// Символ 8
	this.instance_5 = new lib.Символ8();
	this.instance_5.setTransform(146,215.3,0.956,0.965,0,7.6,0,111.5,112);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleY:0.96,skewX:2.3,x:130.9,y:216.8},9,cjs.Ease.get(-1)).to({scaleY:0.94,skewX:-3.4,x:114.1,y:218.3},10,cjs.Ease.get(1)).to({scaleY:0.95,skewX:2,x:130,y:216.8},10,cjs.Ease.get(-1)).to({scaleY:0.97,skewX:7.6,x:146,y:215.3},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-12,414.6,479.5);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 17
	this.instance = new lib.Символ26();
	this.instance.setTransform(432.7,452.6,1,1,0,0,0,207.3,233.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:455.6},24,cjs.Ease.get(-1)).to({x:478.5},25,cjs.Ease.get(0.99)).to({x:455.6},25,cjs.Ease.get(-1)).to({x:432.7},25,cjs.Ease.get(0.99)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(225.4,206.9,414.6,479.5);


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(21));

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.setTransform(88.5,62.3,0.656,0.656,0,0,0,360.4,301.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.7,scaleY:0.7,x:119.4,y:62.4},10,cjs.Ease.get(-1)).to({regY:302,scaleX:0.73,scaleY:0.73,x:147.1,y:62.6},9,cjs.Ease.get(1)).to({regX:360.5,scaleX:0.7,scaleY:0.7,x:117.9,y:62.5},10,cjs.Ease.get(-1)).to({regX:360.4,regY:301.9,scaleX:0.66,scaleY:0.66,x:88.5,y:62.3},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,271.9,314.4);


// stage content:



(lib.tikva = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.pric.alpha=0;
		
		
		this.cursor = "none";
		this.pric.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor_2.bind(this));
		
		function fl_CustomMouseCursor_2() {
			this.pric.x = stage.mouseX;
			this.pric.y = stage.mouseY;
		
		}
		
		
		stage.canvas.addEventListener("mouseover", fl_Clickover3.bind(this));
		
		function fl_Clickover3()
		{
		
			this.pric.alpha=1;
			this.pric2.alpha=0;
			this.bow.gotoAndPlay(1);
			this.baby.gotoAndPlay(1);
			this.fon.gotoAndPlay(1);
			
		
		}
		
		stage.canvas.addEventListener("mouseout", fl_Clickout3.bind(this));
		
		function fl_Clickout3()
		{
		
			this.pric.alpha=0;
			this.pric2.alpha=1;
			this.bow.gotoAndPlay(10);
			this.baby.gotoAndPlay(20);
			this.fon.gotoAndPlay(20);
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 7
	this.instance = new lib.Символ44();
	this.instance.setTransform(128.7,67.3,0.942,0.942,0,0,0,95.2,44.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 6
	this.instance_1 = new lib.Символ37();
	this.instance_1.setTransform(59.8,280.9,1,1,0,0,0,16.1,11.5);

	this.instance_2 = new lib.tik1();
	this.instance_2.setTransform(10,261,0.251,0.251);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// Слой 5
	this.pric2 = new lib.Символ45();
	this.pric2.setTransform(501,78.5,1,1,0,0,0,46.5,46.5);

	this.pric = new lib.Символ33();
	this.pric.setTransform(-90.4,80.5,0.495,0.495,0,0,0,94,94);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pric},{t:this.pric2}]}).wait(1));

	// Слой 1
	this.instance_3 = new lib.Символ32();
	this.instance_3.setTransform(133.7,162.4,0.631,0.631,0,0,0,81.1,49.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Символ 14
	this.bow = new lib.Символ14();
	this.bow.setTransform(557.5,160.7,1,1,-28.7,0,0,245.5,156.4);

	this.timeline.addTween(cjs.Tween.get(this.bow).wait(1));

	// Символ 10
	this.baby = new lib.Символ50();
	this.baby.setTransform(374.7,175.7,1,1,0,0,0,135.9,157.2);

	this.timeline.addTween(cjs.Tween.get(this.baby).wait(1));

	// Символ 16
	this.fon = new lib.Символ51();
	this.fon.setTransform(363.2,110.5,1,1,0,0,0,370.8,207.5);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(149.2,55.5,929.7,508.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;