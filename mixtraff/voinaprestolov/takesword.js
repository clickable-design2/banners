(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/drak_03.png?1478536703204", id:"drak_03"},
		{src:"images/drak_06.png?1478536703204", id:"drak_06"},
		{src:"images/Fog.png?1478536703204", id:"Fog"},
		{src:"images/fon.jpg?1478536703204", id:"fon"},
		{src:"images/handfinger_01.png?1478536703204", id:"handfinger_01"},
		{src:"images/handfinger_05.png?1478536703204", id:"handfinger_05"},
		{src:"images/mouse.png?1478536703204", id:"mouse"},
		{src:"images/stone.png?1478536703204", id:"stone"},
		{src:"images/stormfall_02.png?1478536703204", id:"stormfall_02"},
		{src:"images/stormfall_04.png?1478536703204", id:"stormfall_04"},
		{src:"images/stormfall_06.png?1478536703204", id:"stormfall_06"},
		{src:"images/stormfall_08.png?1478536703204", id:"stormfall_08"},
		{src:"images/stormfall_11.png?1478536703204", id:"stormfall_11"},
		{src:"images/stormfall_17.png?1478536703204", id:"stormfall_17"},
		{src:"images/stormfall_20.png?1478536703204", id:"stormfall_20"},
		{src:"images/sword.png?1478536703204", id:"sword"}
	]
};



lib.ssMetadata = [];


// symbols:



(lib.drak_03 = function() {
	this.initialize(img.drak_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,204,169);


(lib.drak_06 = function() {
	this.initialize(img.drak_06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,68,75);


(lib.Fog = function() {
	this.initialize(img.Fog);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,244);


(lib.fon = function() {
	this.initialize(img.fon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,375);


(lib.handfinger_01 = function() {
	this.initialize(img.handfinger_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,36,76);


(lib.handfinger_05 = function() {
	this.initialize(img.handfinger_05);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,81,121);


(lib.mouse = function() {
	this.initialize(img.mouse);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,46,58);


(lib.stone = function() {
	this.initialize(img.stone);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,299);


(lib.stormfall_02 = function() {
	this.initialize(img.stormfall_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,66,64);


(lib.stormfall_04 = function() {
	this.initialize(img.stormfall_04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,127,258);


(lib.stormfall_06 = function() {
	this.initialize(img.stormfall_06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,70,127);


(lib.stormfall_08 = function() {
	this.initialize(img.stormfall_08);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,127);


(lib.stormfall_11 = function() {
	this.initialize(img.stormfall_11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,55,112);


(lib.stormfall_17 = function() {
	this.initialize(img.stormfall_17);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,142,246);


(lib.stormfall_20 = function() {
	this.initialize(img.stormfall_20);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,116,244);


(lib.sword = function() {
	this.initialize(img.sword);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,217);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Eg4zAE6MAZWgyRMBYRAoeMgZWAyQg");
	this.shape.setTransform(363.6,290.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,727.2,580.8);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.drak_06();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,68,75);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.drak_03();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,204,169);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AhvFAIAAgxIDeAAIAAAxgAhuD8IAAgyIDeAAIAAAygAhuC+IAAj4IhWAAICBkGICIAAICAEGIhYAAIAAD4gAAHBjIAAAvIATAAIAAhkIgUAAIgIAuIgBAAIAAguIgSAAIAABkIAUAAIAIgvgAAWALIASAAIAAhjIgcAAIgKBEIAAAAIgHhEIgfAAIAABjIASAAIAAhHIABAAIALBHIAQAAIAMhIgAAqh6IgNg7IANgqIgUAAIgKAtIgBAAIAAgtIgRAAIAAAtIgBAAIgKgtIgUAAIAMAqIgMA7IAUAAIAKg1IABAAIAAA1IARAAIAAg1IABAAIAKA1IAUAAg");
	this.shape.setTransform(19.8,32.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AhvFAIAAgxIDeAAIAAAxgAhuD8IAAgyIDeAAIAAAygAhuC+IAAj4IhWAAICBkGICIAAICAEGIhYAAIAAD4gAAHBjIAAAvIATAAIAAhkIgUAAIgIAuIgBAAIAAguIgSAAIAABkIAUAAIAIgvgAAWALIASAAIAAhjIgcAAIgKBEIAAAAIgHhEIgfAAIAABjIASAAIAAhHIABAAIALBHIAQAAIAMhIgAAqh6IgNg7IANgqIgUAAIgKAtIgBAAIAAgtIgRAAIAAAtIgBAAIgKgtIgUAAIAMAqIgMA7IAUAAIAKg1IABAAIAAA1IARAAIAAg1IABAAIAKA1IAUAAg");
	this.shape_1.setTransform(19.8,32.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,39.6,64.2);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B3F2FC").s().p("Egv2AYdMAAAgw5MBftAAAMAAAAw5g");
	this.shape.setTransform(306.4,156.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,612.8,313.1);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.handfinger_05();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,81,121);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.handfinger_01();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,36,76);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AjHA7IAAh1IGOAAIAAB1g");
	this.shape.setTransform(20,5.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,40,11.9);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F3C08A").s().p("AASYRIAAiYIgBAAIgdCYIhAAAIAAlBIA7AAIAACUIABAAIAdiUIBAAAIAAFBgABCSDIAAjrIgBgBIgnDsIg1AAIgljoIgBAAIAADoIg5AAIAAlBIBiAAIAaDYIABAAIAfjYIBYAAIAAFBgABAL1IggioIgBAAIAACoIg+AAIAAioIgBAAIgfCoIg/AAIAni8IgmiFIA+AAIAfCOIABAAIAAiOIA+AAIAACOIABAAIAgiOIA/AAIgnCFIAnC8gAASFnIgHhXIgcAAIgKBXIg5AAIAwlBIBSAAIAmFBgAAHDiIgHiEIgCAAIgKCEIATAAgAALglIAAicIgVAAIAACcIg/AAIAAlBIA/AAIAAB4IAVAAIAAh4IA/AAIAAFBgAAel/IAAg0Ig7AAIAAA0Ig5AAIAAhnIAGAAQAIgNAEgUQADgUAAgcIAAi9ICPAAIAAEOIAJAAIAABngAgFoxQgBAWgEAUQgEAUgHANIAjAAIAAjaIgTAAgAgas+QgOgDgKgHQgMgIgFgKQgGgMAAgQIAAjYQAAgPAGgMQAFgLAMgHQAKgGAOgEQAMgDAOAAQAPAAANADQAOAEAJAGQALAHAGALQAGAMAAAPIAADYQAAAQgGAMQgGAKgLAIQgJAHgOADQgNADgPAAQgOAAgMgDgAgHxRQgCAFgBAJIAADDQABAJACAFQACAHAFAAQAJAAACgVIAAjDQgBgJgBgFQgDgHgGAAQgFAAgCAHgAALzPIAAkNIgVAAIAAENIg/AAIAAlBICTAAIAAFBg");
	this.shape.setTransform(12.8,155.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,25.5,310.7);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AjMV4MAAAgrvIGZAAMAAAArvg");
	this.shape.setTransform(20.5,140);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,41,280.1);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F3C08A").s().p("ADTCgIAAiZQgHAJgMAFQgLAFgMAAQgTAAgMgLQgGgHgDgIQgEgJAAgNIAAiJIBAAAIAAB0QAAAMAIAAQAIAAAGgMIAAh0IA/AAIAAE/gAgHCgIAAk/IB1AAIAAAuIg3AAIAABKIA1AAIAAArIg1AAIAABuIA3AAIAAAugAhUCgIAAjpIgBgBIgnDqIg3AAIgkjmIgBAAIAADmIg5AAIAAk/IBhAAIAcDWIABAAIAfjWIBZAAIAAE/g");
	this.shape.setTransform(27.5,16);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,55,32.1);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F3C08A").s().p("AnVC9IAAg0Ig8AAIAAA0Ig5AAIAAhoIAFAAQAIgMAEgVQAEgTAAgcIAAi7ICRAAIAAELIAJAAIAABogAn6ALQAAAVgEAVQgFATgGANIAlAAIAAjXIgWAAgAi2CLQgOgCgKgHQgLgIgFgLQgGgLAAgQIAAjWQAAgPAGgMQAFgLALgHQAKgGAOgEQANgDAPAAQAQAAAMADQAOAEAKAGQALAHAGALQAGAMAAAPIAAA9IhAAAIAAgyQAAgJgBgFQgDgIgHABQgGgBgDAIQgCAFAAAJIAADBQAAAJACAFQADAHAGAAQAKAAABgVIAAg/IBAAAIAABJQAAAQgGALQgGALgLAIQgKAHgOACQgMAEgQAAQgPAAgNgEgAlgCLQgOgCgKgHQgLgIgFgLQgGgLAAgQIAAjWQAAgPAGgMQAFgLALgHQAKgGAOgEQANgDAPAAQAQAAAMADQAOAEAKAGQALAHAGALQAGAMAAAPIAADWQAAAQgGALQgGALgLAIQgKAHgOACQgMAEgQAAQgPAAgNgEgAlNiFQgCAFAAAJIAADBQAAAJACAFQADAHAGAAQAKAAABgVIAAjBQAAgJgBgFQgDgIgHABQgGgBgDAIgAG2CJIAAk/IBAAAIAAB9IALAAQAPAAANADQAOAEAKAHQALAIAFAMQAGANAAAQIAABCQAAARgGAOQgFAMgLAHQgKAIgOADQgNADgPABgAH2BbIAHAAQAIAAADgFQAEgFAAgLIAAg/QAAgJgEgEQgDgFgIAAIgHAAgAFiCJIAAiaIgWAAIAACaIhAAAIAAk/IBAAAIAAB3IAWAAIAAh3IA/AAIAAE/gAC+CJIgHhYIgeAAIgKBYIg5AAIAwk/IBUAAIAmE/gACzAEIgJiCIgCAAIgKCCIAVAAgAgXCJIAAkRIgrAAIAAguICTAAIAAAuIgqAAIAAERg");
	this.shape.setTransform(58.8,19);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,117.6,37.9);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sword();
	this.instance.parent = this;
	this.instance.setTransform(320.3,136.8,0.704,0.704,153.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,320.3,262.3);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("A30HgIAAu/MAvpAAAIAAO/g");
	this.shape.setTransform(152.5,48);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,305.1,96);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3300").s().p("AgWDAQgLgEgPgKQgUgMgEgLIgDgNQgBgJgCgFQgCgGgIgGIgNgMQgOgPgHgfQgHgoACgmIACgLIgBgBIACgPIAIg3QADgUAFgKQAFgNASgSQALgMAHgFQAJgFAMgDQAUgEAQABIAPAAIAIgBIAPgBIAGgCQAPgCAKADQAOADAHAKIADAHQAJAKAKATQAOAgAFAPQAFAUACArQACA1gQAdIgEAGIABADQAEAFAAAGQABAJgGAMIgKATQgDAIgEAaQgDAVgIAKQgOATgpAEIgXABQgOAAgMgEgAAvCFIABABIABgCIAAgMQABgMAHgRQgfAKgjgBQgSAAgOgDQAFAHACAIQACAMADAGIABADIABgBIAMgBIAsAAQAMAAAGACg");
	this.shape.setTransform(12.9,19.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,25.8,39.4);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgNAlIgGgIIgCgBIgBgBIgCgDIAAgBIABgBIADgFIABgBIAAgBIACgCQADgCABgCQABgCgBgGIAAgBQgBgCgDAAIgBgBQgBAAAAgBQAAAAgBAAQAAAAAAgBQgBAAAAAAIgFgFIgCgDIgBgHIgCAAIAAgCIgCABIgCABIgEABIgFAAIgRgBIgUgBIgUgBIAAAAIgBgDQgBgEACgCIAegCQAWgBAKgDIAOgEQAGAAAKACIAGACIADACIAhALIBCAUIAEABIAAAAIAAADIgNABIgLAAIgEgBQgCAAgIAAIgJgBIgKgCIgDgCIgNgFIgNgGIgMgCIgCAAIgCgBQgBgBAAAAQAAAAAAAAQAAgBAAAAQgBAAAAABIgBAAIgDABQAAAAgBAAQgBAAAAAAQAAABgBAAQAAABAAABIAAADIACAEIACABIAAAUIgBABIgCADIAAAAIgBACIAAAAIgDACQgBACABAEIAAAAIAAAAIAAACIADANIAAAAIgCABg");
	this.shape.setTransform(10.2,4.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.2,0.2,20.8,8.5);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.stormfall_02();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,66,64);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.stormfall_04();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,127,258);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.stormfall_06();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,70,127);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.stormfall_08();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80,127);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.stormfall_11();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,55,112);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.stormfall_17();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,142,246);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.stormfall_20();
	this.instance.parent = this;
	this.instance.setTransform(5,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5,-10,116,244);


(lib.Символ21_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mouse();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,46,58);


(lib.Символ20_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ACtBXIAAitIAcAAIAABCIANAAQALAAAHACQAHADAGAGQAFAFACAHQADAHAAALIAAAXQAAAKgDAIQgCAJgFAFQgGAGgHACQgHADgLAAgADJA+IANAAQAHAAADgDQAEgFgBgJIAAgaQABgJgEgEQgDgDgHAAIgNAAgAAYBXIAAitIAbAAIAACUIAYAAIAAiUIAbAAIAACUIAYAAIAAiUIAcAAIAACtgAgWBXIAAitIAaAAIAACtgAh3BXIAAitIAcAAIAABCIAMAAQALAAAIACQAHADAFAGQAGAFACAHQADAHAAALIAAAXQAAAKgDAIQgCAJgGAFQgFAGgHACQgIADgLAAgAhbA+IAMAAQAIAAACgDQAEgFAAgJIAAgaQAAgJgEgEQgCgDgIAAIgMAAgAilBXIAAh8IgTB8IgaAAIgVh6IAAB6IgXAAIAAitIAmAAIAUB6IATh6IAmAAIAACtg");
	this.shape_1.setTransform(25.6,8.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

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


(lib.Анимация4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AjM1yIGZAAMAAAArlImZAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,-140.5,43.1,281);


(lib.Анимация3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AjM1yIGZAAMAAAArlImZAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,-140.5,43.1,281);


(lib.Анимация2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Fog();
	this.instance.parent = this;
	this.instance.setTransform(490.5,-122);

	this.instance_1 = new lib.Fog();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-559.5,-122);

	this.instance_2 = new lib.Fog();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-37.5,-122);

	this.instance_3 = new lib.Fog();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-1090.5,-122);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1090.5,-122,2181,244);


(lib.Анимация1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Fog();
	this.instance.parent = this;
	this.instance.setTransform(1020,-122);

	this.instance_1 = new lib.Fog();
	this.instance_1.parent = this;
	this.instance_1.setTransform(491,-122);

	this.instance_2 = new lib.Fog();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-559.5,-122);

	this.instance_3 = new lib.Fog();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-37.5,-122);

	this.instance_4 = new lib.Fog();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-1090.5,-122);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1090.5,-122,2710.5,244);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay();
	}
	this.frame_49 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_51 = function() {
		this.gotoAndPlay();
	}
	this.frame_129 = function() {
		this.gotoAndPlay(52);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(49).call(this.frame_49).wait(2).call(this.frame_51).wait(78).call(this.frame_129).wait(1));

	// drak_03.png
	this.instance = new lib.Символ40();
	this.instance.parent = this;
	this.instance.setTransform(102,84.5,1,1,0,0,0,102,84.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-9.2,x:110.5,y:98.5},14).to({x:104,y:59.4},10).to({rotation:-13.7,x:120,y:94.5},15).to({rotation:0,x:102,y:84.5},10).wait(2).to({rotation:-4.2,x:118.6,y:93.1},18,cjs.Ease.get(-1)).to({x:150.4,y:116.7},5,cjs.Ease.get(1)).to({rotation:0,x:102,y:84.5},20).to({rotation:-4.2,x:118.6,y:93.1},19,cjs.Ease.get(-1)).to({x:150.4,y:116.7},6,cjs.Ease.get(1)).to({rotation:0,x:102,y:84.5},10).wait(1));

	// drak_06.png
	this.instance_1 = new lib.Символ41();
	this.instance_1.parent = this;
	this.instance_1.setTransform(44,141.9,1,1,0,0,0,34,21.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:33.9,regY:22.4,scaleY:1.02,skewX:-27,skewY:-39.2,x:67.5,y:159.1},14).to({regX:34,regY:22.1,scaleY:1,skewX:-19.6,skewY:-24.2,x:60.7,y:125.2},10).to({regY:22.2,scaleY:1.11,skewX:-32.9,skewY:-58.7,x:78,y:156.3},15).to({regY:21.9,scaleY:1,skewX:0,skewY:0,x:44,y:141.9},10).wait(2).to({regX:34.1,rotation:4,x:70.9,y:165.7},18,cjs.Ease.get(-1)).to({regY:22.2,scaleY:1.12,rotation:0,skewX:-14.4,skewY:-41,x:98.5,y:168.6},5,cjs.Ease.get(1)).to({regX:34,regY:21.9,scaleY:1,skewX:0,skewY:0,x:44,y:141.9},20).to({regX:34.1,rotation:4,x:70.9,y:165.7},19,cjs.Ease.get(-1)).to({regY:22.2,scaleY:1.12,rotation:0,skewX:-14.4,skewY:-41,x:98.5,y:168.6},6,cjs.Ease.get(1)).to({regX:34,regY:21.9,scaleY:1,skewX:0,skewY:0,x:44,y:141.9},10).wait(1));

	// Слой 4
	this.instance_2 = new lib.Символ42();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-39,204.7,1,1,0,0,0,363.6,290.4);
	this.instance_2.alpha = 0.289;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(69).to({_off:false},0).to({alpha:0},2).wait(48).to({alpha:0.289},1).to({_off:true},2).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,204,195);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ35();
	this.instance.parent = this;
	this.instance.setTransform(19.8,32.1,1,1,0,0,0,19.8,32.1);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:16.1},9,cjs.Ease.get(-0.54)).to({y:32.1},10,cjs.Ease.get(0.52)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,39.6,64.2);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_54 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(54).call(this.frame_54).wait(1));

	// Слой 1
	this.instance = new lib.Символ34();
	this.instance.parent = this;
	this.instance.setTransform(306.4,156.5,1,1,0,0,0,306.4,156.5);
	this.instance.alpha = 0;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.078},1).to({alpha:0.238},2).to({alpha:0},1).wait(25).to({alpha:0.078},2).to({alpha:0.238},1).to({alpha:0},1).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,612.8,313.1);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hand-finger_01.png
	this.instance = new lib.Символ31();
	this.instance.parent = this;
	this.instance.setTransform(15,-25,1,1,0,0,0,18,38);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.83,x:14.2,y:-23.3},4).to({scaleY:1,x:15,y:-25},5).wait(1));

	// hand-finger_05.png
	this.instance_1 = new lib.Символ32();
	this.instance_1.parent = this;
	this.instance_1.setTransform(40.5,48.5,1,1,0,0,0,40.5,60.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-63,84,172);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.Символ26();
	this.instance.parent = this;
	this.instance.setTransform(20.6,273,1,1,0,0,0,20,5.9);
	this.instance.alpha = 0.488;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:2.13,y:266.3},9).to({scaleY:1,y:273},10).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ25();
	this.instance_1.parent = this;
	this.instance_1.setTransform(21.2,138.9,0.787,0.787,0,0,0,12.7,155.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0.488},9).to({alpha:1},10).wait(1));

	// Слой 2
	this.instance_2 = new lib.Анимация3("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(20.5,140);

	this.instance_3 = new lib.Анимация4("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(20.5,140);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AjM1yIGZAAMAAAArlImZAAg");
	this.shape.setTransform(20.5,140);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},9).to({state:[{t:this.shape}]},10).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},9).wait(11));

	// Слой 1
	this.instance_4 = new lib.Символ24();
	this.instance_4.parent = this;
	this.instance_4.setTransform(20.5,140,1,1,0,0,0,20.5,140);
	this.instance_4.alpha = 0.719;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-0.5,43.1,281);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(999.5,122);

	this.instance_1 = new lib.Анимация2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-45.5,122);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},149).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:-45.5},149).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91,0,2710.5,244);


(lib.Символ19_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ20();
	this.instance.parent = this;
	this.instance.setTransform(58.8,18.9,1,1,0,0,0,58.8,18.9);
	this.instance.shadow = new cjs.Shadow("rgba(255,102,0,1)",0,0,11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-6,133,53);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ21();
	this.instance.parent = this;
	this.instance.setTransform(17.4,16,1,1,0,0,0,27.4,16);
	this.instance.shadow = new cjs.Shadow("rgba(255,102,0,1)",0,0,11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-6,70,48);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ19_1();
	this.instance.parent = this;
	this.instance.setTransform(68.8,18.9,1,1,0,0,0,58.8,18.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4,-6,133,53);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.parent = this;
	this.instance.setTransform(63.1,22.3,1,1,0,0,0,58.8,18.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:19,scaleX:1.17,scaleY:1.17,x:65.4,y:25.7},9,cjs.Ease.get(-0.5)).to({regY:18.9,rotation:8,x:65.9,y:18.4},5).to({rotation:-0.3,x:65.8,y:25.9},5).to({scaleX:1,scaleY:1,rotation:0,x:63.1,y:22.3},10,cjs.Ease.get(0.5)).wait(1));

	// Слой 5
	this.instance_1 = new lib.Символ17();
	this.instance_1.parent = this;
	this.instance_1.setTransform(183.6,20,1,1,0,0,0,27.4,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.17,scaleY:1.17,x:206.8,y:24.1},9,cjs.Ease.get(-0.5)).to({regX:27.5,rotation:8,x:206.3,y:36.4},5).to({rotation:-0.3,x:207.2,y:23.6},5).to({regX:27.4,scaleX:1,scaleY:1,rotation:0,x:183.6,y:20},10,cjs.Ease.get(0.5)).wait(1));

	// Слой 3
	this.instance_2 = new lib.Символ18();
	this.instance_2.parent = this;
	this.instance_2.setTransform(133.4,76.5,1,1,0,0,0,160.2,131.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:124.4},9).to({x:133.4},5).to({x:123.4},5).to({x:133.4},10).wait(1));

	// Слой 4
	this.instance_3 = new lib.Символ15();
	this.instance_3.parent = this;
	this.instance_3.setTransform(110.6,32,1.028,1.109,0,-25.6,0,152.5,48);
	this.instance_3.alpha = 0.719;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69.2,-54.7,362.8,262.3);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ10();
	this.instance.parent = this;
	this.instance.setTransform(183.7,73.8,1,1,0,0,0,10.3,4.5);
	this.instance.alpha = 0.77;
	this.instance.filters = [new cjs.BlurFilter(2, 2, 1)];
	this.instance.cache(-2,-2,25,13);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.stone();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.937,0.937);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,374.8,280.2);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay();
	}
	this.frame_135 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_137 = function() {
		this.gotoAndPlay();
	}
	this.frame_214 = function() {
		this.gotoAndPlay(138);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(135).call(this.frame_135).wait(2).call(this.frame_137).wait(77).call(this.frame_214).wait(1));

	// stone
	this.instance = new lib.Символ9();
	this.instance.parent = this;
	this.instance.setTransform(193.3,151.1,1,1,0,0,0,187.3,140.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(215));

	// Слой 10
	this.instance_1 = new lib.Символ13();
	this.instance_1.parent = this;
	this.instance_1.setTransform(211.6,-130.8,1,1,0,0,0,12.9,19.7);
	this.instance_1.alpha = 0;
	this.instance_1.compositeOperation = "lighter";
	this.instance_1.filters = [new cjs.BlurFilter(3, 3, 1)];
	this.instance_1.cache(-2,-2,30,43);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:13,rotation:5.4,x:212,y:-117.5,alpha:0.191},14,cjs.Ease.get(-1)).to({y:-115.8},5).to({x:211.8,y:-116},5).to({y:-130.8,alpha:0},20,cjs.Ease.get(1)).to({y:-115,alpha:0.16},41,cjs.Ease.get(-1)).to({rotation:0.5},5).wait(5).to({y:-131.3,alpha:0},40,cjs.Ease.get(1)).wait(2).to({y:-132.4,alpha:0.219},22).to({alpha:0.102},21).to({y:-132.7,alpha:0.199},19).to({y:-131.3,alpha:0},15).wait(1));

	// stormfall_02.png
	this.instance_2 = new lib.Символ8();
	this.instance_2.parent = this;
	this.instance_2.setTransform(214.7,-113.9,1,1,0,0,0,39.7,52.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:52,rotation:8.5,x:213.2,y:-100.9},14,cjs.Ease.get(-1)).to({regX:39.8,rotation:6,x:213.4,y:-97.5},5).to({y:-97.9},5).to({regX:39.7,regY:52.1,rotation:0,x:214.7,y:-113.9},20,cjs.Ease.get(1)).wait(20).to({regY:52,rotation:8.5,x:213.2,y:-97.2},21,cjs.Ease.get(-1)).to({regX:39.8,rotation:6,x:213.4,y:-97.5},5).wait(5).to({regX:39.7,regY:52.1,rotation:0,x:214.7,y:-113.9},40,cjs.Ease.get(1)).wait(2).to({y:-114.9},22).wait(21).to({y:-115.3},19).to({y:-113.9},15).wait(1));

	// stormfall_04.png
	this.instance_3 = new lib.Символ7();
	this.instance_3.parent = this;
	this.instance_3.setTransform(190.5,85.8,1,1,0,0,0,41.5,163.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:85.9},14,cjs.Ease.get(-1)).to({rotation:0.9,y:86},3).to({regY:163.7,rotation:-0.5,y:85.9},2).to({regY:163.8,rotation:0.9,y:86},3).to({regY:163.7,rotation:-0.5,y:85.9},2).to({regY:163.8,rotation:0,y:85.8},20,cjs.Ease.get(1)).wait(20).to({y:85.9},21,cjs.Ease.get(-1)).to({rotation:0.9,y:86},3).to({regY:163.7,rotation:-0.5,y:85.9},2).to({regY:163.8,rotation:0.9,y:86},3).to({regY:163.7,rotation:-0.5,y:85.9},2).to({regY:163.8,rotation:0,y:85.8},40,cjs.Ease.get(1)).wait(2).to({y:83.7},22).to({y:81.6},21).to({y:80.2},19).to({y:85.8},15).wait(1));

	// stormfall_06.png
	this.instance_4 = new lib.Символ6();
	this.instance_4.parent = this;
	this.instance_4.setTransform(155,78,1,1,0,0,0,35,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-15,x:146.1,y:91.1},14,cjs.Ease.get(-1)).to({y:94.5},5).to({y:94.1},5).to({rotation:0,x:155,y:78},20,cjs.Ease.get(1)).wait(20).to({rotation:-15,x:146.1,y:94.8},21,cjs.Ease.get(-1)).to({y:94.5},5).wait(5).to({rotation:0,x:155,y:78},40,cjs.Ease.get(1)).wait(2).to({y:77},22).wait(21).to({y:76.6},19).to({y:78},15).wait(1));

	// stormfall_08.png
	this.instance_5 = new lib.Символ5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(241.6,100.4,1,1,0,0,0,18.6,7.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:18.7,rotation:15,x:249.1,y:106},14,cjs.Ease.get(-1)).to({y:109.5},5).to({y:109},5).to({regX:18.6,rotation:0,x:241.6,y:100.4},20,cjs.Ease.get(1)).wait(20).to({regX:18.7,rotation:15,x:249.1,y:109.8},21,cjs.Ease.get(-1)).to({y:109.5},5).wait(5).to({regX:18.6,rotation:0,x:241.6,y:100.4},40,cjs.Ease.get(1)).wait(2).to({y:99.4},22).wait(21).to({y:99},19).to({y:100.4},15).wait(1));

	// stormfall_17.png
	this.instance_6 = new lib.Символ3();
	this.instance_6.parent = this;
	this.instance_6.setTransform(211,-7,1,1,0,0,0,71,123);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({y:6},14,cjs.Ease.get(-1)).to({y:9.5},5).to({y:9},5).to({y:-7},20,cjs.Ease.get(1)).wait(20).to({y:9.8},21,cjs.Ease.get(-1)).to({y:9.5},5).wait(5).to({y:-7},40,cjs.Ease.get(1)).wait(2).to({y:-8},22).wait(21).to({y:-8.4},19).to({y:-7},15).wait(1));

	// stormfall_11.png
	this.instance_7 = new lib.Символ4();
	this.instance_7.parent = this;
	this.instance_7.setTransform(182.9,-60.5,1,1,0,0,0,52.9,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:15,y:-47.5},14,cjs.Ease.get(-1)).to({regX:53,regY:8.4,scaleX:1,scaleY:1,rotation:9.1,x:183.1},3).to({regX:53.1,rotation:11.3,x:183.2},4).to({scaleX:1,scaleY:1,rotation:3.4,x:183.1,y:-44.6},3).to({regX:52.9,regY:8.5,rotation:0,x:182.9,y:-60.5},20,cjs.Ease.get(1)).wait(20).to({rotation:15,y:-47.5},21,cjs.Ease.get(-1)).to({regX:53,regY:8.4,scaleX:1,scaleY:1,rotation:9.1,x:183.1},3).to({regX:53.1,rotation:11.3,x:183.2},4).to({scaleX:1,scaleY:1,rotation:3.4,x:183.1,y:-47.6},3).to({regX:52.9,regY:8.5,rotation:0,x:182.9,y:-60.5},40,cjs.Ease.get(1)).wait(2).to({y:-61.5},22).wait(21).to({y:-61.9},19).to({y:-60.5},15).wait(1));

	// stormfall_20.png
	this.instance_8 = new lib.Символ2();
	this.instance_8.parent = this;
	this.instance_8.setTransform(192.2,-64.6,1,1,-11,0,0,99,39.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:99.2,scaleX:1,scaleY:1,rotation:0,skewX:-10.8,skewY:-6.1,x:192.4,y:-47.3},24,cjs.Ease.get(-0.4)).to({regY:39.2,scaleX:1.1,skewY:13.8,y:-53.2},20,cjs.Ease.get(1)).to({regX:99.3,regY:39.1,scaleX:1.08,scaleY:1,skewY:8.3,y:-55.7},20).to({regX:99.2,regY:39.4,scaleX:1,scaleY:1,skewY:-6.1,y:-47.3},21,cjs.Ease.get(-1)).to({regY:39.2,scaleX:1,skewY:-16,x:192.3,y:-50.9},10).to({regX:99,regY:39.4,scaleX:1,scaleY:1,rotation:-11,skewX:0,skewY:0,x:192.2,y:-64.6},40,cjs.Ease.get(1)).wait(2).to({y:-65.6},22,cjs.Ease.get(-1)).wait(21).to({y:-66},19).to({y:-64.6},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6,-166,374.8,457.2);


(lib.Символ18_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 20
	this.instance_1 = new lib.Символ20_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(63,228.1,0.92,0.92,0,0,0,25.6,8.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Символ 19
	this.instance_2 = new lib.Символ19();
	this.instance_2.parent = this;
	this.instance_2.setTransform(67.6,207,0.92,0.92,0,0,0,30.6,9.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(39.5,197.9,56.2,38.2);


(lib.Символ17_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance_1 = new lib.Символ21_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(92.1,330.8,1,1,0,0,0,23,29);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({guide:{path:[92,330.7,87.8,330.3,84.7,327.3,81.3,323.9,81.3,319,81.3,314.2,84.7,310.8,86.9,308.6,89.7,307.8]}},9).to({guide:{path:[89.7,307.8,91.3,307.3,93,307.3,97.8,307.3,101.3,310.8,104.6,314.1,104.7,318.8]}},10).to({guide:{path:[104.7,318.8,104.7,319,104.7,319,104.7,323.9,101.3,327.4,97.8,330.8,93,330.8,92.5,330.8,92,330.8]}},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(69.1,301.8,46,58);


(lib.Символ16_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.instance_1 = new lib.Символ18_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(61.5,48,1,1,0,0,0,39.5,28);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// mouse
	this.instance_2 = new lib.Символ17_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-3,47.1,0.63,0.63,0,0,0,23,29.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(26,217.9,91.7,38.2);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.kursor = new lib.Символ30();
	this.kursor.parent = this;
	this.kursor.setTransform(11,11.3,0.475,0.475,0,0,0,20.2,-39.2);

	this.timeline.addTween(cjs.Tween.get(this.kursor).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,39.9,81.6);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.kursor = new lib.Символ30();
	this.kursor.parent = this;
	this.kursor.setTransform(11,11.3,0.475,0.475,0,0,0,20.2,-39.2);

	this.timeline.addTween(cjs.Tween.get(this.kursor).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,39.9,81.6);


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
	this.instance.setTransform(19.8,32.1,1,1,0,0,0,19.8,32.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).to({alpha:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,39.6,64.2);


(lib.Символ29 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ23();
	this.instance.parent = this;
	this.instance.setTransform(20.5,140,1,1,0,0,0,20.5,140);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).to({alpha:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,0,42.1,280.1);


(lib.Символ28 = function(mode,startPosition,loop) {
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
	this.mouse = new lib.Символ16_1();
	this.mouse.parent = this;
	this.mouse.setTransform(-3,-188.9,1,1,0,0,0,23,29);

	this.timeline.addTween(cjs.Tween.get(this.mouse).to({alpha:0},9).to({alpha:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,91.7,38.2);


// stage content:



(lib.takesword = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		this.kursor.alpha=0;
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		stage.canvas.style.cursor = "none";
		this.kursor.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
			this.kursor.x = stage.mouseX;
			this.kursor.y = stage.mouseY;
		}
		
		 this.cursor = "none";
		
		stage.canvas.addEventListener("mouseover", fl_Clickover.bind(this));
		
		function fl_Clickover()
		{
		    this.pers.gotoAndPlay(138);
		    this.mouse.gotoAndPlay(1);
		    this.shkala.gotoAndPlay(1);
			this.strelka.gotoAndPlay(1);
			this.flash.gotoAndPlay(1);
			this.drak.gotoAndPlay(52);
			this.kursor.alpha=1;
			this.kursor2.alpha=0;
		}
		
		stage.canvas.addEventListener("mouseout", fl_Clickout.bind(this));
		
		function fl_Clickout()
		{
		    this.pers.gotoAndPlay(1);
		    this.mouse.gotoAndPlay(10);
		    this.shkala.gotoAndPlay(10);
			this.strelka.gotoAndPlay(10);
			this.flash.gotoAndPlay(55);
			this.drak.gotoAndPlay(1);
			this.kursor.alpha=0;
			this.kursor1.alpha=1;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// kursor2
	this.kursor2 = new lib.Символ44();
	this.kursor2.parent = this;
	this.kursor2.setTransform(263,222.3,1,1,0,0,0,19.9,40.8);

	this.timeline.addTween(cjs.Tween.get(this.kursor2).wait(1));

	// kursor
	this.kursor = new lib.Символ43();
	this.kursor.parent = this;
	this.kursor.setTransform(284.4,249.3,1,1,0,0,0,19.9,40.8);

	this.timeline.addTween(cjs.Tween.get(this.kursor).wait(1));

	// pers
	this.pers = new lib.Символ1();
	this.pers.parent = this;
	this.pers.setTransform(353.9,257.7,0.872,0.872,0,0,0,71,129);

	this.timeline.addTween(cjs.Tween.get(this.pers).wait(1));

	// text
	this.instance = new lib.Символ14();
	this.instance.parent = this;
	this.instance.setTransform(145.5,39.6,1,1,0,0,0,126.5,24.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// strelka
	this.strelka = new lib.Символ37();
	this.strelka.parent = this;
	this.strelka.setTransform(356.2,190.9,1,1,0,0,0,19.8,32.1);

	this.timeline.addTween(cjs.Tween.get(this.strelka).wait(1));

	// mouse
	this.mouse = new lib.Символ28();
	this.mouse.parent = this;
	this.mouse.setTransform(40,178.8,1,1,0,0,0,31.3,-75.4);

	this.timeline.addTween(cjs.Tween.get(this.mouse).wait(1));

	// shkala
	this.shkala = new lib.Символ29();
	this.shkala.parent = this;
	this.shkala.setTransform(564.7,150,1,1,0,0,0,20.5,140);

	this.timeline.addTween(cjs.Tween.get(this.shkala).wait(1));

	// smk
	this.instance_1 = new lib.Символ22();
	this.instance_1.parent = this;
	this.instance_1.setTransform(329,222,1,1,0,0,0,300,122);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// flash
	this.flash = new lib.Символ33();
	this.flash.parent = this;
	this.flash.setTransform(-7.2,-5.8);

	this.timeline.addTween(cjs.Tween.get(this.flash).wait(1));

	// drak
	this.drak = new lib.Символ39();
	this.drak.parent = this;
	this.drak.setTransform(370,-25.3,1.002,1,0,-27.5,-23.9,102.2,84.5);

	this.timeline.addTween(cjs.Tween.get(this.drak).wait(1));

	// fon
	this.instance_2 = new lib.fon();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-73);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(238,8.3,2710.5,540.7);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;