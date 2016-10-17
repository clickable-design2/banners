(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1178,
	height: 814,
	fps: 30,
	color: "#FF0066",
	manifest: [
		{src:"images/a1.png?1462350712962", id:"a1"},
		{src:"images/a2.png?1462350712962", id:"a2"},
		{src:"images/a3.png?1462350712962", id:"a3"},
		{src:"images/bg.jpg?1462350712962", id:"bg"},
		{src:"images/ggg.png?1462350712962", id:"ggg"},
		{src:"images/ooo.png?1462350712962", id:"ooo"}
	]
};



// symbols:



(lib.a1 = function() {
	this.initialize(img.a1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,807,375);


(lib.a2 = function() {
	this.initialize(img.a2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,284,337);


(lib.a3 = function() {
	this.initialize(img.a3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1178,261);


(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1178,812);


(lib.ggg = function() {
	this.initialize(img.ggg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,427,212);


(lib.ooo = function() {
	this.initialize(img.ooo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,427,212);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(0,0,0,0)","#000000"],[0,1],0,0,0,0,0,715.8).s().p("EhcAA/iMAAAh/DMC4BAAAMAAAB/Dg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-589,-406.6,1178,813.3);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg();
	this.instance.setTransform(-589,-406);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-589,-406,1178,812);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0F0914").s().p("ABKBzQg5gCg8gkQg+gjgfgvQgfgwASggQATggA5ADQA5ADA8AjQA+AkAfAuQAfAwgSAgQgRAdgxAAIgKAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.7,-11.6,31.4,23.2);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.a1();
	this.instance.setTransform(-403.5,-187.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-403.5,-187.5,807,375);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.a3();
	this.instance.setTransform(-589,-130.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-589,-130.5,1178,261);


(lib.text_header = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text("КАК НРАВИТСЯ ТЕБЕ?", "bold 45px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 52;
	this.text.lineWidth = 637;
	this.text.setTransform(-2,-67.7);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320.6,-67.7,641.2,135.4);


(lib.o_btn_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.text = new cjs.Text("ГЛУБЖЕ", "bold 50px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 58;
	this.text.lineWidth = 343;
	this.text.setTransform(-2.1,-33.5);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-173.5,-33.5,347.1,71);


(lib.h_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(141,1,46,0.518)").s().p("EiGVgOzMEMrAAAIAAcFQpih8tyhvUgsngFjg/EAAAUg/CAAAgsnAFjQzJCaq6Czg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-859.9,-94.9,1719.8,189.8);


(lib.g_btn_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.text = new cjs.Text("БЫСТРЕЕ", "bold 50px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 58;
	this.text.lineWidth = 357;
	this.text.setTransform(-2.5,-30.5);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-181,-30.5,361.1,65.6);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ11();
	this.instance.alpha = 0.512;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-589,-406.6,1178,813.3);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ12();
	this.instance.setTransform(0,-0.6);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},19).to({alpha:0},20).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ9();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-589,-407.3,1178,813.3);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ7();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.7,-11.6,31.4,23.2);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.setTransform(34.9,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:24.9,y:11.6},3).to({x:34.9,y:0},3).wait(1).to({x:24.9,y:11.6},3).to({x:34.9,y:0},3).to({_off:true},1).wait(36));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(19.2,-11.6,31.4,23.2);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgaAzQgmgigUghQgUgkAJgRQAKgQAiAOQAiAPApAZQAsAaASAVQASAXgHAOQgHAOgoAJQgIACgJAAQgfAAgcgbg");
	mask.setTransform(75.1,-79.2);

	// Слой 3
	this.instance = new lib.Символ6();
	this.instance.setTransform(51.2,-91.6);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.a2();
	this.instance_1.setTransform(-142,-168.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-142,-168.5,284,337);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8D012E").s().p("EiGUARfMAAAgi9QKhG0PLGEUAwjATZBDbAAqUBCFAAqAt6gR0QIQjOGwjfIAAZ5g");
	this.shape.setTransform(1.6,18.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(91));

	// Слой 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EhcIAURIAA7LMBLLAAAQB2loCMjXQC4kaDQADQDOACCIC/QCFC/gJEkQgDBXgQBbMBb8AAAIAAbLg");
	var mask_graphics_1 = new cjs.Graphics().p("EhcIAURIAA7LMBLLAAAQB2loCMjXQC4kaDQADQDOACCIC/QCFC/gJEkQgDBXgQBbMBb8AAAIAAbLg");
	var mask_graphics_2 = new cjs.Graphics().p("EhcIAURIAA7LMBLLAAAQB2loCMjXQC4kaDQADQDOACCIC/QCFC/gJEkQgDBXgQBbMBb8AAAIAAbLg");
	var mask_graphics_3 = new cjs.Graphics().p("EhcIAURIAA7LMBLLAAAQB2loCMjXQC4kaDQADQDOACCIC/QCFC/gJEkQgDBXgQBbMBb8AAAIAAbLg");
	var mask_graphics_4 = new cjs.Graphics().p("EhcIAURIAA7LMBLLAAAQB2loCMjXQC4kaDQADQDOACCIC/QCFC/gJEkQgDBXgQBbMBb8AAAIAAbLg");
	var mask_graphics_5 = new cjs.Graphics().p("EhcIAURIAA7LMBLLAAAQB2loCMjXQC4kaDQADQDOACCIC/QCFC/gJEkQgDBXgQBbMBb8AAAIAAbLg");
	var mask_graphics_6 = new cjs.Graphics().p("EhcIAURIAA7LMBLLAAAQB2loCMjXQC4kaDQADQDOACCIC/QCFC/gJEkQgDBXgQBbMBb8AAAIAAbLg");
	var mask_graphics_7 = new cjs.Graphics().p("EhcIAURIAA7LMBLLAAAQB2loCMjXQC4kaDQADQDOACCIC/QCFC/gJEkQgDBXgQBbMBb8AAAIAAbLg");
	var mask_graphics_8 = new cjs.Graphics().p("EhcIAURIAA7LMBLLAAAQB2loCMjXQC4kaDQADQDOACCIC/QCFC/gJEkQgDBXgQBbMBb8AAAIAAbLg");
	var mask_graphics_9 = new cjs.Graphics().p("EhcIAURIAA7LMBLLAAAQB2loCMjXQC4kaDQADQDOACCIC/QCFC/gJEkQgDBXgQBbMBb8AAAIAAbLg");
	var mask_graphics_10 = new cjs.Graphics().p("EhcIAURIAA7LMBLLAAAQB2loCMjXQC4kaDQADQDOACCIC/QCFC/gJEkQgDBXgQBbMBb8AAAIAAbLg");
	var mask_graphics_11 = new cjs.Graphics().p("EhcIAURIAA7LMBLLAAAQB2loCMjXQC4kaDQADQDOACCIC/QCFC/gJEkQgDBXgQBbMBb8AAAIAAbLg");
	var mask_graphics_12 = new cjs.Graphics().p("EhcIAURIAA7LMBLLAAAQB2loCMjXQC4kaDQADQDOACCIC/QCFC/gJEkQgDBXgQBbMBb8AAAIAAbLg");
	var mask_graphics_13 = new cjs.Graphics().p("EhcIAURIAA7LMBLLAAAQB2loCMjXQC4kaDQADQDOACCIC/QCFC/gJEkQgDBXgQBbMBb8AAAIAAbLg");
	var mask_graphics_14 = new cjs.Graphics().p("EhcIAURIAA7LMBLLAAAQB2loCMjXQC4kaDQADQDOACCIC/QCFC/gJEkQgDBXgQBbMBb8AAAIAAbLg");
	var mask_graphics_15 = new cjs.Graphics().p("EhcIAURIAA7LMBLLAAAQB2loCMjXQC4kaDQADQDOACCIC/QCFC/gJEkQgDBXgQBbMBb8AAAIAAbLg");
	var mask_graphics_16 = new cjs.Graphics().p("EhcIAURIAA7LMBLLAAAQB2loCMjXQC4kaDQADQDOACCIC/QCFC/gJEkQgDBXgQBbMBb8AAAIAAbLg");
	var mask_graphics_17 = new cjs.Graphics().p("EhcIAURIAA7LMBLLAAAQB2loCMjXQC4kaDQADQDOACCIC/QCFC/gJEkQgDBXgQBbMBb8AAAIAAbLg");
	var mask_graphics_18 = new cjs.Graphics().p("EhcIAURIAA7LMBLLAAAQB2loCMjXQC4kaDQADQDOACCIC/QCFC/gJEkQgDBXgQBbMBb8AAAIAAbLg");
	var mask_graphics_19 = new cjs.Graphics().p("EhcIAURIAA7LMBLLAAAQB2loCMjXQC4kaDQADQDOACCIC/QCFC/gJEkQgDBXgQBbMBb8AAAIAAbLg");
	var mask_graphics_20 = new cjs.Graphics().p("EhcIAURIAA7LMBLLAAAQB2loCMjXQC4kaDQADQDOACCIC/QCFC/gJEkQgDBXgQBbMBb8AAAIAAbLg");
	var mask_graphics_21 = new cjs.Graphics().p("EhcIAURIAA7LMBLLAAAQB2loCMjXQC4kaDQADQDOACCIC/QCFC/gJEkQgDBXgQBbMBb8AAAIAAbLg");
	var mask_graphics_22 = new cjs.Graphics().p("EhcIAURIAA7LMBLLAAAQB2loCMjXQC4kaDQADQDOACCIC/QCFC/gJEkQgDBXgQBbMBb8AAAIAAbLg");
	var mask_graphics_23 = new cjs.Graphics().p("EhcIAURIAA7LMBLLAAAQB2loCMjXQC4kaDQADQDOACCIC/QCFC/gJEkQgDBXgQBbMBb8AAAIAAbLg");
	var mask_graphics_24 = new cjs.Graphics().p("EhcIAURIAA7LMBLLAAAQB2loCMjXQC4kaDQADQDOACCIC/QCFC/gJEkQgDBXgQBbMBb8AAAIAAbLg");
	var mask_graphics_25 = new cjs.Graphics().p("EhcIAURIAA7LMBLLAAAQB2loCMjXQC4kaDQADQDOACCIC/QCFC/gJEkQgDBXgQBbMBb8AAAIAAbLg");
	var mask_graphics_26 = new cjs.Graphics().p("EhcIAURIAA7LMBLLAAAQB2loCMjXQC4kaDQADQDOACCIC/QCFC/gJEkQgDBXgQBbMBb8AAAIAAbLg");
	var mask_graphics_27 = new cjs.Graphics().p("EhcIAURIAA7LMBLLAAAQB2loCMjXQC4kaDQADQDOACCIC/QCFC/gJEkQgDBXgQBbMBb8AAAIAAbLg");
	var mask_graphics_28 = new cjs.Graphics().p("EhcIAURIAA7LMBLLAAAQB2loCMjXQC4kaDQADQDOACCIC/QCFC/gJEkQgDBXgQBbMBb8AAAIAAbLg");
	var mask_graphics_29 = new cjs.Graphics().p("EhcIAURIAA7LMBLLAAAQB2loCMjXQC4kaDQADQDOACCIC/QCFC/gJEkQgDBXgQBbMBb8AAAIAAbLg");
	var mask_graphics_30 = new cjs.Graphics().p("EhcIAURIAA7LMBLLAAAQB2loCMjXQC4kaDQADQDOACCIC/QCFC/gJEkQgDBXgQBbMBb8AAAIAAbLg");
	var mask_graphics_31 = new cjs.Graphics().p("EhcIAURIAA7LMBLLAAAQB2loCMjXQC4kaDQADQDOACCIC/QCFC/gJEkQgDBXgQBbMBb8AAAIAAbLg");
	var mask_graphics_32 = new cjs.Graphics().p("EhcIAURIAA7LMBLLAAAQB2loCMjXQC4kaDQADQDOACCIC/QCFC/gJEkQgDBXgQBbMBb8AAAIAAbLg");
	var mask_graphics_33 = new cjs.Graphics().p("EhcIAURIAA7LMBLLAAAQB2loCMjXQC4kaDQADQDOACCIC/QCFC/gJEkQgDBXgQBbMBb8AAAIAAbLg");
	var mask_graphics_34 = new cjs.Graphics().p("EhcIAURIAA7LMBLLAAAQB2loCMjXQC4kaDQADQDOACCIC/QCFC/gJEkQgDBXgQBbMBb8AAAIAAbLg");
	var mask_graphics_35 = new cjs.Graphics().p("EhcIAURIAA7LMBLLAAAQB2loCMjXQC4kaDQADQDOACCIC/QCFC/gJEkQgDBXgQBbMBb8AAAIAAbLg");
	var mask_graphics_36 = new cjs.Graphics().p("EhcIAURIAA7LMBLLAAAQB2loCMjXQC4kaDQADQDOACCIC/QCFC/gJEkQgDBXgQBbMBb8AAAIAAbLg");
	var mask_graphics_37 = new cjs.Graphics().p("EhcIAURIAA7LMBLLAAAQB2loCMjXQC4kaDQADQDOACCIC/QCFC/gJEkQgDBXgQBbMBb8AAAIAAbLg");
	var mask_graphics_38 = new cjs.Graphics().p("EhcIAURIAA7LMBLLAAAQB2loCMjXQC4kaDQADQDOACCIC/QCFC/gJEkQgDBXgQBbMBb8AAAIAAbLg");
	var mask_graphics_39 = new cjs.Graphics().p("EhcIAURIAA7LMBLLAAAQB2loCMjXQC4kaDQADQDOACCIC/QCFC/gJEkQgDBXgQBbMBb8AAAIAAbLg");
	var mask_graphics_40 = new cjs.Graphics().p("EhcIAURIAA7LMBLLAAAQB2loCMjXQC4kaDQADQDOACCIC/QCFC/gJEkQgDBXgQBbMBb8AAAIAAbLg");
	var mask_graphics_41 = new cjs.Graphics().p("EhcIAURIAA7LMBLLAAAQB2loCMjXQC4kaDQADQDOACCIC/QCFC/gJEkQgDBXgQBbMBb8AAAIAAbLg");
	var mask_graphics_42 = new cjs.Graphics().p("EhcIAURIAA7LMBLLAAAQB2loCMjXQC4kaDQADQDOACCIC/QCFC/gJEkQgDBXgQBbMBb8AAAIAAbLg");
	var mask_graphics_43 = new cjs.Graphics().p("EhcIAURIAA7LMBLLAAAQB2loCMjXQC4kaDQADQDOACCIC/QCFC/gJEkQgDBXgQBbMBb8AAAIAAbLg");
	var mask_graphics_44 = new cjs.Graphics().p("EhcIAURIAA7LMBLLAAAQB2loCMjXQC4kaDQADQDOACCIC/QCFC/gJEkQgDBXgQBbMBb8AAAIAAbLg");
	var mask_graphics_45 = new cjs.Graphics().p("EhcIAURIAA7LMBLLAAAQB2loCMjXQC4kaDQADQDOACCIC/QCFC/gJEkQgDBXgQBbMBb8AAAIAAbLg");
	var mask_graphics_46 = new cjs.Graphics().p("EhcIAURIAA7LMBLLAAAQB2loCMjXQC4kaDQADQDOACCIC/QCFC/gJEkQgDBXgQBbMBb8AAAIAAbLg");
	var mask_graphics_47 = new cjs.Graphics().p("EhcIAURIAA7LMBLLAAAQB2loCMjXQC4kaDQADQDOACCIC/QCFC/gJEkQgDBXgQBbMBb8AAAIAAbLg");
	var mask_graphics_48 = new cjs.Graphics().p("EhcIAURIAA7LMBLLAAAQB2loCMjXQC4kaDQADQDOACCIC/QCFC/gJEkQgDBXgQBbMBb8AAAIAAbLg");
	var mask_graphics_49 = new cjs.Graphics().p("EhcIAURIAA7LMBLLAAAQB2loCMjXQC4kaDQADQDOACCIC/QCFC/gJEkQgDBXgQBbMBb8AAAIAAbLg");
	var mask_graphics_50 = new cjs.Graphics().p("EhcIAURIAA7LMBLLAAAQB2loCMjXQC4kaDQADQDOACCIC/QCFC/gJEkQgDBXgQBbMBb8AAAIAAbLg");
	var mask_graphics_51 = new cjs.Graphics().p("EhcIAURIAA7LMBLLAAAQB2loCMjXQC4kaDQADQDOACCIC/QCFC/gJEkQgDBXgQBbMBb8AAAIAAbLg");
	var mask_graphics_52 = new cjs.Graphics().p("EhcIAURIAA7LMBLLAAAQB2loCMjXQC4kaDQADQDOACCIC/QCFC/gJEkQgDBXgQBbMBb8AAAIAAbLg");
	var mask_graphics_53 = new cjs.Graphics().p("EhcIAURIAA7LMBLLAAAQB2loCMjXQC4kaDQADQDOACCIC/QCFC/gJEkQgDBXgQBbMBb8AAAIAAbLg");
	var mask_graphics_54 = new cjs.Graphics().p("EhcIAURIAA7LMBLLAAAQB2loCMjXQC4kaDQADQDOACCIC/QCFC/gJEkQgDBXgQBbMBb8AAAIAAbLg");
	var mask_graphics_55 = new cjs.Graphics().p("EhcIAURIAA7LMBLLAAAQB2loCMjXQC4kaDQADQDOACCIC/QCFC/gJEkQgDBXgQBbMBb8AAAIAAbLg");
	var mask_graphics_56 = new cjs.Graphics().p("EhcIAURIAA7LMBLLAAAQB2loCMjXQC4kaDQADQDOACCIC/QCFC/gJEkQgDBXgQBbMBb8AAAIAAbLg");
	var mask_graphics_57 = new cjs.Graphics().p("EhcIAURIAA7LMBLLAAAQB2loCMjXQC4kaDQADQDOACCIC/QCFC/gJEkQgDBXgQBbMBb8AAAIAAbLg");
	var mask_graphics_58 = new cjs.Graphics().p("EhcIAURIAA7LMBLLAAAQB2loCMjXQC4kaDQADQDOACCIC/QCFC/gJEkQgDBXgQBbMBb8AAAIAAbLg");
	var mask_graphics_59 = new cjs.Graphics().p("EhcIAURIAA7LMBLLAAAQB2loCMjXQC4kaDQADQDOACCIC/QCFC/gJEkQgDBXgQBbMBb8AAAIAAbLg");
	var mask_graphics_60 = new cjs.Graphics().p("EhcIAURIAA7LMBLLAAAQB2loCMjXQC4kaDQADQDOACCIC/QCFC/gJEkQgDBXgQBbMBb8AAAIAAbLg");
	var mask_graphics_61 = new cjs.Graphics().p("EhcIAURIAA7LMBLLAAAQB2loCMjXQC4kaDQADQDOACCIC/QCFC/gJEkQgDBXgQBbMBb8AAAIAAbLg");
	var mask_graphics_62 = new cjs.Graphics().p("EhcIAURIAA7LMBLLAAAQB2loCMjXQC4kaDQADQDOACCIC/QCFC/gJEkQgDBXgQBbMBb8AAAIAAbLg");
	var mask_graphics_63 = new cjs.Graphics().p("EhcIAURIAA7LMBLLAAAQB2loCMjXQC4kaDQADQDOACCIC/QCFC/gJEkQgDBXgQBbMBb8AAAIAAbLg");
	var mask_graphics_64 = new cjs.Graphics().p("EhcIAURIAA7LMBLLAAAQB2loCMjXQC4kaDQADQDOACCIC/QCFC/gJEkQgDBXgQBbMBb8AAAIAAbLg");
	var mask_graphics_65 = new cjs.Graphics().p("EhcIAURIAA7LMBLLAAAQB2loCMjXQC4kaDQADQDOACCIC/QCFC/gJEkQgDBXgQBbMBb8AAAIAAbLg");
	var mask_graphics_66 = new cjs.Graphics().p("EhcIAURIAA7LMBLLAAAQB2loCMjXQC4kaDQADQDOACCIC/QCFC/gJEkQgDBXgQBbMBb8AAAIAAbLg");
	var mask_graphics_67 = new cjs.Graphics().p("EhcIAURIAA7LMBLLAAAQB2loCMjXQC4kaDQADQDOACCIC/QCFC/gJEkQgDBXgQBbMBb8AAAIAAbLg");
	var mask_graphics_68 = new cjs.Graphics().p("EhcIAURIAA7LMBLLAAAQB2loCMjXQC4kaDQADQDOACCIC/QCFC/gJEkQgDBXgQBbMBb8AAAIAAbLg");
	var mask_graphics_69 = new cjs.Graphics().p("EhcIAURIAA7LMBLLAAAQB2loCMjXQC4kaDQADQDOACCIC/QCFC/gJEkQgDBXgQBbMBb8AAAIAAbLg");
	var mask_graphics_70 = new cjs.Graphics().p("EhcIAURIAA7LMBLLAAAQB2loCMjXQC4kaDQADQDOACCIC/QCFC/gJEkQgDBXgQBbMBb8AAAIAAbLg");
	var mask_graphics_71 = new cjs.Graphics().p("EhcIAURIAA7LMBLLAAAQB2loCMjXQC4kaDQADQDOACCIC/QCFC/gJEkQgDBXgQBbMBb8AAAIAAbLg");
	var mask_graphics_72 = new cjs.Graphics().p("EhcIAURIAA7LMBLLAAAQB2loCMjXQC4kaDQADQDOACCIC/QCFC/gJEkQgDBXgQBbMBb8AAAIAAbLg");
	var mask_graphics_73 = new cjs.Graphics().p("EhcIAURIAA7LMBLLAAAQB2loCMjXQC4kaDQADQDOACCIC/QCFC/gJEkQgDBXgQBbMBb8AAAIAAbLg");
	var mask_graphics_74 = new cjs.Graphics().p("EhcIAURIAA7LMBLLAAAQB2loCMjXQC4kaDQADQDOACCIC/QCFC/gJEkQgDBXgQBbMBb8AAAIAAbLg");
	var mask_graphics_75 = new cjs.Graphics().p("EhcIAURIAA7LMBLLAAAQB2loCMjXQC4kaDQADQDOACCIC/QCFC/gJEkQgDBXgQBbMBb8AAAIAAbLg");
	var mask_graphics_76 = new cjs.Graphics().p("EhcIAURIAA7LMBLLAAAQB2loCMjXQC4kaDQADQDOACCIC/QCFC/gJEkQgDBXgQBbMBb8AAAIAAbLg");
	var mask_graphics_77 = new cjs.Graphics().p("EhcIAURIAA7LMBLLAAAQB2loCMjXQC4kaDQADQDOACCIC/QCFC/gJEkQgDBXgQBbMBb8AAAIAAbLg");
	var mask_graphics_78 = new cjs.Graphics().p("EhcIAURIAA7LMBLLAAAQB2loCMjXQC4kaDQADQDOACCIC/QCFC/gJEkQgDBXgQBbMBb8AAAIAAbLg");
	var mask_graphics_79 = new cjs.Graphics().p("EhcIAURIAA7LMBLLAAAQB2loCMjXQC4kaDQADQDOACCIC/QCFC/gJEkQgDBXgQBbMBb8AAAIAAbLg");
	var mask_graphics_80 = new cjs.Graphics().p("EhcIAURIAA7LMBLLAAAQB2loCMjXQC4kaDQADQDOACCIC/QCFC/gJEkQgDBXgQBbMBb8AAAIAAbLg");
	var mask_graphics_81 = new cjs.Graphics().p("EhcIAURIAA7LMBLLAAAQB2loCMjXQC4kaDQADQDOACCIC/QCFC/gJEkQgDBXgQBbMBb8AAAIAAbLg");
	var mask_graphics_82 = new cjs.Graphics().p("EhcIAURIAA7LMBLLAAAQB2loCMjXQC4kaDQADQDOACCIC/QCFC/gJEkQgDBXgQBbMBb8AAAIAAbLg");
	var mask_graphics_83 = new cjs.Graphics().p("EhcIAURIAA7LMBLLAAAQB2loCMjXQC4kaDQADQDOACCIC/QCFC/gJEkQgDBXgQBbMBb8AAAIAAbLg");
	var mask_graphics_84 = new cjs.Graphics().p("EhcIAURIAA7LMBLLAAAQB2loCMjXQC4kaDQADQDOACCIC/QCFC/gJEkQgDBXgQBbMBb8AAAIAAbLg");
	var mask_graphics_85 = new cjs.Graphics().p("EhcIAURIAA7LMBLLAAAQB2loCMjXQC4kaDQADQDOACCIC/QCFC/gJEkQgDBXgQBbMBb8AAAIAAbLg");
	var mask_graphics_86 = new cjs.Graphics().p("EhcIAURIAA7LMBLLAAAQB2loCMjXQC4kaDQADQDOACCIC/QCFC/gJEkQgDBXgQBbMBb8AAAIAAbLg");
	var mask_graphics_87 = new cjs.Graphics().p("EhcIAURIAA7LMBLLAAAQB2loCMjXQC4kaDQADQDOACCIC/QCFC/gJEkQgDBXgQBbMBb8AAAIAAbLg");
	var mask_graphics_88 = new cjs.Graphics().p("EhcIAURIAA7LMBLLAAAQB2loCMjXQC4kaDQADQDOACCIC/QCFC/gJEkQgDBXgQBbMBb8AAAIAAbLg");
	var mask_graphics_89 = new cjs.Graphics().p("EhcIAURIAA7LMBLLAAAQB2loCMjXQC4kaDQADQDOACCIC/QCFC/gJEkQgDBXgQBbMBb8AAAIAAbLg");
	var mask_graphics_90 = new cjs.Graphics().p("EhcIAURIAA7LMBLLAAAQB2loCMjXQC4kaDQADQDOACCIC/QCFC/gJEkQgDBXgQBbMBb8AAAIAAbLg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-0.7,y:0.7}).wait(1).to({graphics:mask_graphics_1,x:-0.7,y:2.4}).wait(1).to({graphics:mask_graphics_2,x:-0.7,y:7.3}).wait(1).to({graphics:mask_graphics_3,x:-0.7,y:15.6}).wait(1).to({graphics:mask_graphics_4,x:-0.7,y:26.7}).wait(1).to({graphics:mask_graphics_5,x:-0.7,y:33.3}).wait(1).to({graphics:mask_graphics_6,x:-0.7,y:35.5}).wait(1).to({graphics:mask_graphics_7,x:-0.7,y:33.7}).wait(1).to({graphics:mask_graphics_8,x:-0.7,y:28.3}).wait(1).to({graphics:mask_graphics_9,x:-0.7,y:19.3}).wait(1).to({graphics:mask_graphics_10,x:-0.7,y:9}).wait(1).to({graphics:mask_graphics_11,x:-0.7,y:2.8}).wait(1).to({graphics:mask_graphics_12,x:-0.7,y:0.7}).wait(1).to({graphics:mask_graphics_13,x:-0.7,y:2.4}).wait(1).to({graphics:mask_graphics_14,x:-0.7,y:7.3}).wait(1).to({graphics:mask_graphics_15,x:-0.7,y:15.6}).wait(1).to({graphics:mask_graphics_16,x:-0.7,y:26.7}).wait(1).to({graphics:mask_graphics_17,x:-0.7,y:33.3}).wait(1).to({graphics:mask_graphics_18,x:-0.7,y:35.5}).wait(1).to({graphics:mask_graphics_19,x:-0.7,y:33.7}).wait(1).to({graphics:mask_graphics_20,x:-0.7,y:28.3}).wait(1).to({graphics:mask_graphics_21,x:-0.7,y:19.3}).wait(1).to({graphics:mask_graphics_22,x:-0.7,y:9}).wait(1).to({graphics:mask_graphics_23,x:-0.7,y:2.8}).wait(1).to({graphics:mask_graphics_24,x:-0.7,y:0.7}).wait(1).to({graphics:mask_graphics_25,x:-0.7,y:2.4}).wait(1).to({graphics:mask_graphics_26,x:-0.7,y:7.3}).wait(1).to({graphics:mask_graphics_27,x:-0.7,y:15.6}).wait(1).to({graphics:mask_graphics_28,x:-0.7,y:26.7}).wait(1).to({graphics:mask_graphics_29,x:-0.7,y:33.3}).wait(1).to({graphics:mask_graphics_30,x:-0.7,y:35.5}).wait(1).to({graphics:mask_graphics_31,x:-0.7,y:33.7}).wait(1).to({graphics:mask_graphics_32,x:-0.7,y:28.3}).wait(1).to({graphics:mask_graphics_33,x:-0.7,y:19.3}).wait(1).to({graphics:mask_graphics_34,x:-0.7,y:9}).wait(1).to({graphics:mask_graphics_35,x:-0.7,y:2.8}).wait(1).to({graphics:mask_graphics_36,x:-0.7,y:0.7}).wait(1).to({graphics:mask_graphics_37,x:-0.7,y:1}).wait(1).to({graphics:mask_graphics_38,x:-0.7,y:1.9}).wait(1).to({graphics:mask_graphics_39,x:-0.7,y:3.5}).wait(1).to({graphics:mask_graphics_40,x:-0.7,y:5.6}).wait(1).to({graphics:mask_graphics_41,x:-0.7,y:8.3}).wait(1).to({graphics:mask_graphics_42,x:-0.7,y:11.7}).wait(1).to({graphics:mask_graphics_43,x:-0.7,y:15.6}).wait(1).to({graphics:mask_graphics_44,x:-0.7,y:21.7}).wait(1).to({graphics:mask_graphics_45,x:-0.7,y:26.7}).wait(1).to({graphics:mask_graphics_46,x:-0.7,y:30.5}).wait(1).to({graphics:mask_graphics_47,x:-0.7,y:33.3}).wait(1).to({graphics:mask_graphics_48,x:-0.7,y:35}).wait(1).to({graphics:mask_graphics_49,x:-0.7,y:35.5}).wait(1).to({graphics:mask_graphics_50,x:-0.7,y:35.2}).wait(1).to({graphics:mask_graphics_51,x:-0.7,y:34.2}).wait(1).to({graphics:mask_graphics_52,x:-0.7,y:32.5}).wait(1).to({graphics:mask_graphics_53,x:-0.7,y:30.2}).wait(1).to({graphics:mask_graphics_54,x:-0.7,y:27.2}).wait(1).to({graphics:mask_graphics_55,x:-0.7,y:23.6}).wait(1).to({graphics:mask_graphics_56,x:-0.7,y:19.3}).wait(1).to({graphics:mask_graphics_57,x:-0.7,y:14.4}).wait(1).to({graphics:mask_graphics_58,x:-0.7,y:10.2}).wait(1).to({graphics:mask_graphics_59,x:-0.7,y:6.8}).wait(1).to({graphics:mask_graphics_60,x:-0.7,y:4.1}).wait(1).to({graphics:mask_graphics_61,x:-0.7,y:2.2}).wait(1).to({graphics:mask_graphics_62,x:-0.7,y:1.1}).wait(1).to({graphics:mask_graphics_63,x:-0.7,y:0.7}).wait(1).to({graphics:mask_graphics_64,x:-0.7,y:1}).wait(1).to({graphics:mask_graphics_65,x:-0.7,y:1.9}).wait(1).to({graphics:mask_graphics_66,x:-0.7,y:3.5}).wait(1).to({graphics:mask_graphics_67,x:-0.7,y:5.6}).wait(1).to({graphics:mask_graphics_68,x:-0.7,y:8.3}).wait(1).to({graphics:mask_graphics_69,x:-0.7,y:11.7}).wait(1).to({graphics:mask_graphics_70,x:-0.7,y:15.6}).wait(1).to({graphics:mask_graphics_71,x:-0.7,y:21.7}).wait(1).to({graphics:mask_graphics_72,x:-0.7,y:26.7}).wait(1).to({graphics:mask_graphics_73,x:-0.7,y:30.5}).wait(1).to({graphics:mask_graphics_74,x:-0.7,y:33.3}).wait(1).to({graphics:mask_graphics_75,x:-0.7,y:35}).wait(1).to({graphics:mask_graphics_76,x:-0.7,y:35.5}).wait(1).to({graphics:mask_graphics_77,x:-0.7,y:35.2}).wait(1).to({graphics:mask_graphics_78,x:-0.7,y:34.2}).wait(1).to({graphics:mask_graphics_79,x:-0.7,y:32.5}).wait(1).to({graphics:mask_graphics_80,x:-0.7,y:30.2}).wait(1).to({graphics:mask_graphics_81,x:-0.7,y:27.2}).wait(1).to({graphics:mask_graphics_82,x:-0.7,y:23.6}).wait(1).to({graphics:mask_graphics_83,x:-0.7,y:19.3}).wait(1).to({graphics:mask_graphics_84,x:-0.7,y:14.4}).wait(1).to({graphics:mask_graphics_85,x:-0.7,y:10.2}).wait(1).to({graphics:mask_graphics_86,x:-0.7,y:6.8}).wait(1).to({graphics:mask_graphics_87,x:-0.7,y:4.1}).wait(1).to({graphics:mask_graphics_88,x:-0.7,y:2.2}).wait(1).to({graphics:mask_graphics_89,x:-0.7,y:1.1}).wait(1).to({graphics:mask_graphics_90,x:-0.7,y:0.7}).wait(1));

	// Слой 1
	this.instance = new lib.Символ2();

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.98,y:2.6},3,cjs.Ease.get(-1)).to({scaleY:0.96,y:5.9},3,cjs.Ease.get(1)).to({scaleY:0.98,y:3.2},3,cjs.Ease.get(-1)).to({scaleY:1,y:0},3,cjs.Ease.get(1)).to({scaleY:0.98,y:2.6},3,cjs.Ease.get(-1)).to({scaleY:0.96,y:5.9},3,cjs.Ease.get(1)).to({scaleY:0.98,y:3.2},3,cjs.Ease.get(-1)).to({scaleY:1,y:0},3,cjs.Ease.get(1)).to({scaleY:0.98,y:2.6},3,cjs.Ease.get(-1)).to({scaleY:0.96,y:5.9},3,cjs.Ease.get(1)).to({scaleY:0.98,y:3.2},3,cjs.Ease.get(-1)).to({scaleY:1,y:0},3,cjs.Ease.get(1)).to({scaleY:0.98,y:2.6},7,cjs.Ease.get(-1)).to({scaleY:0.96,y:5.9},6,cjs.Ease.get(1)).to({scaleY:0.98,y:3.2},7,cjs.Ease.get(-1)).to({scaleY:1,y:0},7,cjs.Ease.get(1)).to({scaleY:0.98,y:2.6},7,cjs.Ease.get(-1)).to({scaleY:0.96,y:5.9},6,cjs.Ease.get(1)).to({scaleY:0.98,y:3.2},7,cjs.Ease.get(-1)).to({scaleY:1,y:0},7,cjs.Ease.get(1)).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ4();
	this.instance_1.setTransform(58.5,-139.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleY:0.98,y:-120.8},3,cjs.Ease.get(-1)).to({scaleY:0.95,y:-95.6},3,cjs.Ease.get(1)).to({scaleY:0.97,y:-116.2},3,cjs.Ease.get(-1)).to({scaleY:1,y:-139.7},3,cjs.Ease.get(1)).to({scaleY:0.98,y:-120.8},3,cjs.Ease.get(-1)).to({scaleY:0.95,y:-95.6},3,cjs.Ease.get(1)).to({scaleY:0.97,y:-116.2},3,cjs.Ease.get(-1)).to({scaleY:1,y:-139.7},3,cjs.Ease.get(1)).to({scaleY:0.98,y:-120.8},3,cjs.Ease.get(-1)).to({scaleY:0.95,y:-95.6},3,cjs.Ease.get(1)).to({scaleY:0.97,y:-116.2},3,cjs.Ease.get(-1)).to({scaleY:1,y:-139.7},3,cjs.Ease.get(1)).to({scaleY:0.98,y:-120.8},7,cjs.Ease.get(-1)).to({scaleY:0.95,y:-95.6},6,cjs.Ease.get(1)).to({scaleY:0.97,y:-116.2},7,cjs.Ease.get(-1)).to({scaleY:1,y:-139.7},7,cjs.Ease.get(1)).to({scaleY:0.98,y:-120.8},7,cjs.Ease.get(-1)).to({scaleY:0.95,y:-95.6},6,cjs.Ease.get(1)).to({scaleY:0.97,y:-116.2},7,cjs.Ease.get(-1)).to({scaleY:1,y:-139.7},7,cjs.Ease.get(1)).wait(1));

	// Слой 3
	this.instance_2 = new lib.Символ3();
	this.instance_2.setTransform(44,-416.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:-411.7},3,cjs.Ease.get(-1)).to({y:-405.1},3,cjs.Ease.get(1)).to({y:-410.5},3,cjs.Ease.get(-1)).to({y:-416.7},3,cjs.Ease.get(1)).to({y:-411.7},3,cjs.Ease.get(-1)).to({y:-405.1},3,cjs.Ease.get(1)).to({y:-410.5},3,cjs.Ease.get(-1)).to({y:-416.7},3,cjs.Ease.get(1)).to({y:-411.7},3,cjs.Ease.get(-1)).to({y:-405.1},3,cjs.Ease.get(1)).to({y:-410.5},3,cjs.Ease.get(-1)).to({y:-416.7},3,cjs.Ease.get(1)).to({y:-411.7},7,cjs.Ease.get(-1)).to({y:-405.1},6,cjs.Ease.get(1)).to({y:-410.5},7,cjs.Ease.get(-1)).to({y:-416.7},7,cjs.Ease.get(1)).to({y:-411.7},7,cjs.Ease.get(-1)).to({y:-405.1},6,cjs.Ease.get(1)).to({y:-410.5},7,cjs.Ease.get(-1)).to({y:-416.7},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-858.1,-585.2,1719.5,715.9);


(lib.text_header_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text_header = new lib.text_header();

	this.timeline.addTween(cjs.Tween.get(this.text_header).to({scaleX:0.92,scaleY:0.92,y:-3.5},7,cjs.Ease.get(-1)).to({scaleX:0.82,scaleY:0.82,y:-8},9,cjs.Ease.get(1)).to({scaleX:0.9,scaleY:0.9,y:-4.4},8,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,y:0},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320.6,-67.7,641.2,135.4);


(lib.o_btn_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.o_btn_1 = new lib.o_btn_1();

	this.timeline.addTween(cjs.Tween.get(this.o_btn_1).wait(1).to({regY:2,scaleX:1.03,scaleY:1.03,rotation:1.3,y:2.1},0).wait(1).to({scaleX:1.06,scaleY:1.06,rotation:2.3,x:-0.1},0).wait(1).to({scaleX:1.08,scaleY:1.08,rotation:3,y:2.2},0).wait(1).to({scaleX:1.09,scaleY:1.09,rotation:3.6},0).wait(1).to({scaleX:1.1,scaleY:1.1,rotation:4},0).wait(1).to({scaleX:1.11,scaleY:1.11,rotation:4.4},0).wait(1).to({scaleX:1.12,scaleY:1.12,rotation:4.7,x:-0.2,y:2.3},0).wait(1).to({scaleX:1.13,scaleY:1.13,rotation:5},0).wait(1).to({scaleX:1.14,scaleY:1.14,rotation:5.3},0).wait(1).to({scaleX:1.15,scaleY:1.15,rotation:5.6},0).wait(1).to({scaleX:1.15,scaleY:1.15,rotation:5.9},0).wait(1).to({scaleX:1.16,scaleY:1.16,rotation:6.1},0).wait(1).to({scaleX:1.16,scaleY:1.16,rotation:6.3},0).wait(1).to({scaleX:1.17,scaleY:1.17,rotation:6.5},0).wait(1).to({scaleX:1.17,scaleY:1.17,rotation:6.6,y:2.4},0).wait(1).to({scaleX:1.17,scaleY:1.17,rotation:6.7},0).wait(1).to({scaleX:1.18,scaleY:1.18,rotation:6.8,x:-0.3},0).wait(1).to({scaleX:1.18,scaleY:1.18,rotation:6.9},0).wait(1).to({scaleX:1.18,scaleY:1.18,rotation:7},0).wait(1).to({scaleX:1.18,scaleY:1.18},0).wait(1).to({scaleX:1.18,scaleY:1.18,rotation:7.1},0).wait(1).to({scaleX:1.19,scaleY:1.19},0).wait(1).to({regY:0,scaleX:1.19,scaleY:1.19,rotation:7.2,x:0,y:0},0).wait(1).to({regY:2,scaleX:1.18,scaleY:1.18,rotation:7,x:-0.3,y:2.4},0).wait(1).to({scaleX:1.16,scaleY:1.16,rotation:6.7,x:-0.2,y:2.3},0).wait(1).to({scaleX:1.14,scaleY:1.14,rotation:6.3},0).wait(1).to({scaleX:1.11,scaleY:1.11,rotation:5.8,y:2.2},0).wait(1).to({scaleX:1.08,scaleY:1.08,rotation:5.2},0).wait(1).to({scaleX:1.03,scaleY:1.03,rotation:4.4,x:-0.1,y:2.1},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:3.5,y:2},0).wait(1).to({scaleX:0.93,scaleY:0.93,rotation:2.4,y:1.9},0).wait(1).to({scaleX:0.87,scaleY:0.87,rotation:1.4,x:0,y:1.8},0).wait(1).to({scaleX:0.81,scaleY:0.81,rotation:0.3,y:1.6},0).wait(1).to({scaleX:0.73,scaleY:0.73,rotation:-1.3,x:0.1,y:1.5},0).wait(1).to({scaleX:0.59,scaleY:0.59,rotation:-3.7,y:1.2},0).wait(1).to({regY:0,scaleX:0.37,scaleY:0.37,rotation:-7.8,x:0,y:0},0).to({scaleX:1,scaleY:1,rotation:0},13,cjs.Ease.get(1)).wait(37));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-173.5,-33.5,347.1,71);


(lib.o_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.o_btn_2 = new lib.o_btn_2();
	this.o_btn_2.setTransform(-0.6,-1.2);

	this.timeline.addTween(cjs.Tween.get(this.o_btn_2).wait(1));

	// Слой 1
	this.instance = new lib.ooo();
	this.instance.setTransform(-213.5,-106);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-213.5,-106,427,212);


(lib.header = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text_header_1 = new lib.text_header_1();
	this.text_header_1.setTransform(-125.5,-191.3);

	this.timeline.addTween(cjs.Tween.get(this.text_header_1).wait(1));

	// Слой 2 - копия
	this.instance = new lib.h_bg();
	this.instance.setTransform(-124.9,-191.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-984.8,-286.3,1719.8,189.8);


(lib.g_btn_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.g_btn_1 = new lib.g_btn_1();

	this.timeline.addTween(cjs.Tween.get(this.g_btn_1).wait(50).to({regX:-0.5,regY:2.3,x:-4.4,y:2.3},0).wait(1).to({x:-6.7},0).wait(1).to({x:-8.2},0).wait(1).to({x:-9.3},0).wait(1).to({x:-10.4},0).wait(1).to({x:-11.3},0).wait(1).to({x:-12.1},0).wait(1).to({x:-12.7},0).wait(1).to({x:-13.2},0).wait(1).to({x:-13.6},0).wait(1).to({x:-14},0).wait(1).to({x:-14.2},0).wait(1).to({regX:0,regY:0,x:-14,y:0},0).to({x:0},5,cjs.Ease.get(-1)).to({x:-14},2).to({x:0},2).to({x:-14},2).to({x:21},8,cjs.Ease.get(-1)).to({x:0},4,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-181,-30.5,361.1,65.6);


(lib.g_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.g_btn_2 = new lib.g_btn_2();
	this.g_btn_2.setTransform(0.9,-2.5);

	this.timeline.addTween(cjs.Tween.get(this.g_btn_2).wait(1));

	// Слой 1
	this.instance = new lib.ggg();
	this.instance.setTransform(-213.5,-106);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-213.5,-106,427,212);


// stage content:
(lib.adult_banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		var clickkyTAG = clickkyTAG;
		stage.scaleX = stage.scaleY = window.devicePixelRatio;
		
		window.onmessage = function(message) {
					if(
						typeof message === 'object'
						&& typeof message.data === 'object'
						&& typeof message.data.key === 'string'
						&& message.data.key === 'clickky_banner_03946'
					) {
						
						_this.header.text_header_1.text_header.text.text = message.data.header;
						_this.g_btn.g_btn_2.g_btn_1.text.text = message.data.green_button;
						_this.o_btn.o_btn_2.o_btn_1.text.text = message.data.orange_button;
						clickkyTAG = message.data.target_url;
					}
				};
		
		
		//Stage
		
		function getWindowSize() {
		
			return {
				width: Math.min(document.documentElement.clientWidth, window.innerWidth || 0),
				height: Math.min(document.documentElement.clientHeight, window.innerHeight || 0)
			}
		}
		
		//Resize
		
		window._setCanvasSize = function() {
			
			stage.scaleX = stage.scaleY = window.devicePixelRatio;
			var windowSize = getWindowSize();
			stage.canvas.style.width = windowSize.width + 'px';
			stage.canvas.style.height = windowSize.height + 'px';
			stage.canvas.width = windowSize.width * window.devicePixelRatio;
			stage.canvas.height = windowSize.height * window.devicePixelRatio;
			
			_this.g_btn.x = 0;
			_this.g_btn.y = windowSize.height;
			
			_this.header.x = windowSize.width/2;
			_this.header.y = 0;
			
			_this.bg.x = windowSize.width/2;
			_this.bg.y = windowSize.height/2;
			
			_this.o_btn.x = windowSize.width;
			_this.o_btn.y = windowSize.height;
			
			_this.main.x = windowSize.width/2;
			_this.main.y = windowSize.height;
			
			//Scale
		
			_this.g_btn.scaleX = 0.36;
			_this.g_btn.scaleY = 0.36;
		
			_this.header.scaleX = 0.6;
			_this.header.scaleY = 0.6;
		
			_this.o_btn.scaleX = 0.36;
			_this.o_btn.scaleY = 0.36;
		
			_this.bg.scaleX = 0.9;
			_this.bg.scaleY = 0.9;
		
			_this.main.scaleX = 0.6;
			_this.main.scaleY = 0.6;
			
			if(windowSize.width > 767) {
				
			_this.g_btn.scaleX = 0.8;
			_this.g_btn.scaleY = 0.8;
		
			_this.header.scaleX = 0.8;
			_this.header.scaleY = 0.8;
		
			_this.o_btn.scaleX = 0.8;
			_this.o_btn.scaleY = 0.8;
		
			_this.bg.scaleX = 1.5;
			_this.bg.scaleY = 1.5;
		
			_this.main.scaleX = 0.9;
			_this.main.scaleY = 0.9;
				
			_this.g_btn.x = 0;
			_this.g_btn.y = (windowSize.height/2) - (windowSize.height/9);
		
			_this.o_btn.x = windowSize.width;
			_this.o_btn.y = (windowSize.height/2) - (windowSize.height/9);
				
			} 
			
		}
		
		
		window.onresize=function(){
			_setCanvasSize();
		}
		
			
		window.onresize();
		
		//clickkyTAG
		var onClick = function(evt) {
			if(clickkyTAG){
			window.open(clickkyTAG, "_blank");
			}
		};
		
		stage.canvas.addEventListener("click", onClick);
		
		
		window.onresize();
		document.addEventListener("DOMContentLoaded", function(){ _setCanvasSize()});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 5
	this.o_btn = new lib.o_btn();
	this.o_btn.setTransform(1169,813,1,1,0,0,0,232.5,128.8);

	this.timeline.addTween(cjs.Tween.get(this.o_btn).wait(1));

	// Слой 3
	this.g_btn = new lib.g_btn();
	this.g_btn.setTransform(16,813,1,1,0,0,0,-226.5,128.8);

	this.timeline.addTween(cjs.Tween.get(this.g_btn).wait(1));

	// Слой 6
	this.header = new lib.header();
	this.header.setTransform(589.4,0.4,1,1,0,0,0,-125,-286.4);

	this.timeline.addTween(cjs.Tween.get(this.header).wait(1));

	// Слой 1
	this.main = new lib.Символ1();
	this.main.setTransform(589,813,1,1,0,0,0,0,129.5);

	this.timeline.addTween(cjs.Tween.get(this.main).wait(1));

	// Слой 2
	this.bg = new lib.Символ10();
	this.bg.setTransform(589,407);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(318.6,406.7,1720.8,814.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;