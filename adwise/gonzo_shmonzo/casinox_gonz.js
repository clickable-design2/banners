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
		{src:"images/bg.jpg?1489674443320", id:"bg"},
		{src:"images/casinox.png?1489674443320", id:"casinox"},
		{src:"images/gold.png?1489674443320", id:"gold"},
		{src:"images/gonzales.png?1489674443320", id:"gonzales"},
		{src:"images/Gonzosquest.jpg?1489674443320", id:"Gonzosquest"},
		{src:"images/GonzosQuestNetEntSlot1.jpg?1489674443320", id:"GonzosQuestNetEntSlot1"},
		{src:"images/GonzosQuestNetEntSymbolкопия2.jpg?1489674443320", id:"GonzosQuestNetEntSymbolкопия2"},
		{src:"images/GonzosQuestNetEnt1.jpg?1489674443320", id:"GonzosQuestNetEnt1"},
		{src:"images/GonzosQuestsymbolNetEnt.jpg?1489674443320", id:"GonzosQuestsymbolNetEnt"},
		{src:"images/gonzosquestscatter.jpg?1489674443320", id:"gonzosquestscatter"},
		{src:"images/monetki.png?1489674443320", id:"monetki"},
		{src:"images/trava.png?1489674443320", id:"trava"}
	]
};



lib.ssMetadata = [];


// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,400);


(lib.casinox = function() {
	this.initialize(img.casinox);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,409,86);


(lib.gold = function() {
	this.initialize(img.gold);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,142,76);


(lib.gonzales = function() {
	this.initialize(img.gonzales);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,286);


(lib.Gonzosquest = function() {
	this.initialize(img.Gonzosquest);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,97,97);


(lib.GonzosQuestNetEntSlot1 = function() {
	this.initialize(img.GonzosQuestNetEntSlot1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,97,97);


(lib.GonzosQuestNetEntSymbolкопия2 = function() {
	this.initialize(img.GonzosQuestNetEntSymbolкопия2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,97,97);


(lib.GonzosQuestNetEnt1 = function() {
	this.initialize(img.GonzosQuestNetEnt1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,97,97);


(lib.GonzosQuestsymbolNetEnt = function() {
	this.initialize(img.GonzosQuestsymbolNetEnt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,97,97);


(lib.gonzosquestscatter = function() {
	this.initialize(img.gonzosquestscatter);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,97,97);


(lib.monetki = function() {
	this.initialize(img.monetki);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,581,290);


(lib.trava = function() {
	this.initialize(img.trava);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,453,91);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFCC00","#FFFF99"],[0,1],-135.4,0,135.5,0).s().p("A1JHCIAAuDMAqTAAAIAAODg");
	this.shape.setTransform(135.5,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,271,90);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.monetki();
	this.instance.parent = this;
	this.instance.setTransform(6,-602);

	this.instance_1 = new lib.monetki();
	this.instance_1.parent = this;
	this.instance_1.setTransform(6,-298);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 1
	this.instance_2 = new lib.monetki();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-602,587,892);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFCC","#FFFF66"],[0,1],0,-14.3,0,14.3).s().p("AgYCeQgIAAAAgJIAAjyIhlAAQgIAAgBgIIAAgwQABgIAIAAIEMAAQAIAAAAAIIAAAwQAAAIgIAAIhaAAIgLAAIAADyQAAAJgIAAg");
	this.shape.setTransform(14.3,15.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFCC","#FFFF66"],[0,1],0,-16.7,0,16.8).s().p("AhGCeQgJAAAFgJIAthOIiJjcIAAgGIAEgCIBCAAQAEAAACADIBeCkIAFAAIAEgHIBPibQACgFAIAAIA8AAQADAAACADQABADgBADIiqEsQgCAGgGAAg");
	this.shape_1.setTransform(48.6,15.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFFFCC","#FFFF66"],[0,1],0.1,-13.7,0.1,13.8).s().p("Ah/CeQgJAAAAgJIAAkqQAAgIAJAAICQAAQAYABAWAIQAWAJAQAQQASAPAIAVQAKAWAAAXQAAAZgKAUQgIAWgSAPQgQAQgWAJQgWAIgYABIhLAAIgLAAIAABLQAAAJgGAAgAhFAKIALAAIBKAAQALgBAKgEQALgDAHgGQAOgOABgYQgBgXgOgOQgOgNgYgBIhLAAIgLAAg");
	this.shape_2.setTransform(84.6,15.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFFFCC","#FFFF66"],[0,1],0,-13.9,0,13.9).s().p("ABQCeQgJAAAAgJIAAh8IiDAAIgLAAIAAB8QAAAJgGAAIg0AAQgJAAAAgJIAAkqQAAgIAJAAIA0AAQAGAAAAAIIAABxIALAAICDAAIAAhxQAAgIAJAAIA0AAQAHAAAAAIIAAEqQAAAJgHAAg");
	this.shape_3.setTransform(118,15.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FFFFCC","#FFFF66"],[0,1],0.1,-14.5,0.1,14.6).s().p("ABXCeQgJAAABgJIADjIIAAgKIgEAAIiXDVQgEAGgEAAIg2AAQgJAAAAgJIAAkqQAAgIAJAAIAyAAQAHAAAAAIIgDDRIAEAAIAIgLICPjJQAFgFAIAAIAzAAQAHAAAAAIIAAEqQAAAJgHAAg");
	this.shape_4.setTransform(153.5,15.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FFFFCC","#FFFF66"],[0,1],0,-13.7,0,13.8).s().p("AiACeQgIAAAAgJIAAkqQAAgIAIAAICRAAQAYABAWAIQAWAJAQAQQARAPAJAVQAKAWAAAXQAAAZgKAUQgJAWgRAPQgQAQgWAJQgWAIgYABIhLAAIgLAAIAABLQAAAJgHAAgAhFAKIALAAIBJAAQAMgBAKgEQALgDAHgGQAOgOAAgYQAAgXgOgOQgOgNgYgBIhLAAIgLAAg");
	this.shape_5.setTransform(188.7,15.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#FFFFCC","#FFFF66"],[0,1],0,-13.7,0,13.8).s().p("AiACeQgIAAAAgJIAAkqQAAgIAIAAIA0AAQAGAAAAAIIAABNIAMAAIBJAAQAZAAAXAJQAWAJARAPQARAQAIAVQAKATAAAYQAAAZgKAWQgIAVgRAQQgRAQgWAIQgXAIgZABgAhGBfIAMAAIBIAAQAMAAALgFQAKgEAIgIQAPgOAAgXQAAgXgPgOQgIgGgKgCQgLgFgMAAIhIAAIgMAAg");
	this.shape_6.setTransform(221.9,15.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#462601").s().p("ARoCeQAHAAAAgJIAAkqQAAgIgHAAIALAAQAIAAAAAIIAAEqQAAAJgIAAgAOWCeQAZgBAXgIQAWgIARgQQARgQAIgVQAKgWAAgZQAAgYgKgTQgIgVgRgQQgRgPgWgJQgXgJgZAAIAIAAQAcAAAXAJQAXAJARAPQAQAQAJAVQAKATAAAYQAAAZgKAWQgJAVgQAQQgRAQgXAIQgXAJgcAAgAHtCeQAGAAAAgJIAAhLIAMAAIAABLQAAAJgIAAgAFkCeQAHAAAAgJIAAkqQAAgIgHAAIALAAQAIAAAAAIIAAEqQAAAJgIAAgACHCeQAEAAAEgGICZjVIAEAAIAAAKIiSDLQgDAGgGAAgAgDCeQAGAAAAgJIAAkqQAAgIgGAAIAJAAQAIAAAAAIIAAEqQAAAJgIAAgAjWCeQAHAAAAgJIAAh8IALAAIAAB8QAAAJgHAAgAoiCeQAHAAAAgJIAAhLIALAAIAABLQAAAJgHAAgAtKCeQAGAAADgGICrksQACgDgCgDQgCgDgDAAIALAAQAEAAABADQACADgCADIirEsQgCAGgHAAgAx6CeQAIAAAAgJIAAjyIAMAAIAADyQAAAJgJAAgAM/BfIAAhoIAMAAIAABogAJLBKQAZgBAVgIQAWgJARgQQARgPAJgWQAJgUAAgZQAAgXgJgWQgJgVgRgPQgRgQgWgJQgVgIgZgBIAJAAQAaAAAXAJQAWAJAQAQQARAPAJAVQAKAWAAAXQAAAZgKAUQgJAWgRAPQgQAQgWAJQgXAJgaAAgAnDBKQAYgBAWgIQAWgJAQgQQARgPAJgWQAKgUAAgZQAAgXgKgWQgJgVgRgPQgQgQgWgJQgWgIgYgBIAIAAQAaAAAXAJQAWAJARAQQARAPAJAVQAJAWAAAXQAAAZgJAUQgJAWgRAPQgRAQgWAJQgXAJgaAAgACHA8IADjRQAAgIgHAAIALAAQAIAAAAAIIgDDGIgIALgAHzAKIAAhnIAMAAIAABngAobAKIAAhnIALAAIAABngAs4AKIhhikQgCgDgEAAIAKAAQAFAAADADIBdCdIgEAHgAjPgkIAAhxQAAgIgHAAIALAAQAHAAAAAIIAABxgAM/hIIAAhNQAAgIgGAAIAKAAQAIAAAAAIIAABNgAwNhdQAIAAAAgIIAAgwQAAgIgIAAIALAAQAJAAAAAIIAAAwQAAAIgJAAg");
	this.shape_7.setTransform(131.6,15.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#FFFFCC","#FFFF66"],[0,1],0,-3.3,0,3.4).s().p("AgYCeQgIAAAAgJIAAkqQAAgIAIAAIAyAAQAHAAAAAIIAAEqQAAAJgHAAg");
	this.shape_8.setTransform(241.8,15.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,246.4,31.7);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFCC","#FFFF66"],[0,1],0.1,-9.8,0.1,9.9).s().p("AhbBxQgGAAAAgGIAAjVQAAgGAGAAIBoAAQAQABAPAFQAQAHAMALQANALAGAPQAHAPAAASQAAARgHAOQgGAPgNAMQgMALgQAGQgPAGgQAAIgzAAIgLAAIAAA3QgBAGgEAAgAgxAGIALAAIAxAAQAIAAAHgDQAHgCAGgDQAKgKAAgRQAAgRgKgKQgKgKgSgBIgxAAIgLAAg");
	this.shape.setTransform(9.9,11.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFCC","#FFFF66"],[0,1],0,-9.1,0,9.2).s().p("AhUBxQgGAAAAgGIAAjVQAAgGAGAAICnAAQAFAAAAAGIAAAhQAAAGgFAAIhyAAIgMAAIAAAqIAMAAIBiAAQAFAAAAAGIAAAfQAAAGgFAAIhiAAIgMAAIAAAxIAMAAIB1AAQAFAAAAAGIAAAiQAAAGgFAAg");
	this.shape_1.setTransform(32.9,11.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFFFCC","#FFFF66"],[0,1],0,-8.7,0,8.7).s().p("AhQBxQgGAAAAgGIAAjVQAAgGAGAAICiAAQAFAAAAAGIAAAhQAAAGgFAAIhtAAIgLAAIAACuQAAAGgFAAg");
	this.shape_2.setTransform(55.4,11.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFFFCC","#FFFF66"],[0,1],0.1,-12,0.1,12.1).s().p("AgyBxQgGAAADgGIAhg5IhiidIgBgDIADgCIAvAAQAEAAABACIBDB1IADAAIAEgHIA4hsQACgEAFAAIArAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAABQAAAAAAABQgBAAAAABIh4DWQgCAEgFAAg");
	this.shape_3.setTransform(79,11.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FFFFCC","#FFFF66"],[0,1],0,-12.4,0,12.4).s().p("AhHByQgRAAgMgFQgMgFgJgKQgDgEAEgEIARgXQADgEAFADIACACQAHAFAJAAIAFgBQAEgBADgCQADgEACgHIAYiiQABgFAEAAICWAAQAEAAAAAGIAADVQAAAGgEAAIgmAAQgGAAAAgGIAAiuIg+AAIgLAAIgPCAQgCAMgEAKQgFAKgHAIQgIAGgKAEQgIADgJABIgFAAg");
	this.shape_4.setTransform(105.3,11.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FFFFCC","#FFFF66"],[0,1],0.1,-9.9,0.1,10).s().p("AA4BxQgFAAAAgGIAAg3IgzAAIgJAAIgjA4QgCAFgGAAIgpAAQgIAAAFgIIAqhDIgRgMQgIgHgFgIQgGgJgDgIQgDgLAAgMQAAgSAGgPQAHgPANgLQAMgLAPgHQARgGATAAIBlAAQAFAAAAAGIAADVQAAAGgFAAgAgahAQgHADgFAGQgKAKAAAQQAAAQAKALQAMAIARAAIAJAAIAzAAIAAhJIgzAAIgJAAQgJAAgIADg");
	this.shape_5.setTransform(132.2,11.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#FFFFCC","#FFFF66"],[0,1],0,-9.8,0,9.9).s().p("AhbBxQgGAAAAgGIAAjVQAAgGAGAAIBoAAQARABAOAFQAQAHAMALQANALAGAPQAHAPAAASQAAARgHAOQgGAPgNAMQgMALgQAGQgOAGgRAAIgzAAIgLAAIAAA3QAAAGgFAAgAgxAGIALAAIAxAAQAIAAAIgDQAGgCAGgDQALgKAAgRQAAgRgLgKQgKgKgSgBIgxAAIgLAAg");
	this.shape_6.setTransform(157,11.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#FFFFCC","#FFFF66"],[0,1],0.1,-9.9,0.1,10).s().p("AA5BxQgGAAAAgGIAAhZIhaAAIgLAAIAABZQAAAGgFAAIglAAQgGAAAAgGIAAjVQAAgGAGAAIAlAAQAFAAAAAGIAABQIALAAIBaAAIAAhQQAAgGAGAAIAlAAQAFAAAAAGIAADVQAAAGgFAAg");
	this.shape_7.setTransform(180.9,11.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#FFFFCC","#FFFF66"],[0,1],0.1,-9.4,0.1,10.2).s().p("AhbBxQgGAAAAgGIAAjVQAAgGAGAAIAlAAQAEAAABAGIAAA3IALAAIAyAAQASAAAPAGQAQAHANALQAMALAFAPQAHANAAARQAAASgHAQQgFAPgMALQgNALgQAHQgPAFgSABgAgxBDIALAAIAxAAQAIAAAIgDQAHgDAFgFQAKgKAAgRQAAgRgKgJQgFgEgHgCQgIgDgIAAIgxAAIgLAAg");
	this.shape_8.setTransform(205.7,11.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#FFFFCC","#FFFF66"],[0,1],0.1,-2.4,0.1,2.4).s().p("AgQBxQgHAAAAgGIAAjVQAAgGAHAAIAjAAQAFAAAAAGIAADVQAAAGgFAAg");
	this.shape_9.setTransform(220,11.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#FFFFCC","#FFFF66"],[0,1],0,-9.1,0,9.2).s().p("AhUBxQgGAAAAgGIAAjVQAAgGAGAAICnAAQAEAAAAAGIAAAhQAAAGgEAAIhyAAIgMAAIAAAqIAMAAIBhAAQAGAAAAAGIAAAfQAAAGgGAAIhhAAIgMAAIAAAxIAMAAIB1AAQAFAAAAAGIAAAiQAAAGgFAAg");
	this.shape_10.setTransform(236.5,11.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#462601").s().p("AkMByQAJgBAHgDQALgEAHgGQAIgIAEgKQAFgKABgMIARiAIAMAAIgRCAQgCAMgEAKQgFAKgHAIQgIAGgKAEQgKAEgMAAIgGAAgASrBwQAGAAAAgGIAAgiQAAgGgGAAIALAAQAGAAAAAGIAAAiQAAAGgGAAgAPCBwQAFAAAAgGIAAjVQAAgGgFAAIALAAQAGAAAAAGIAADVQAAAGgGAAgAMtBwQASgBAPgFQAQgHANgLQAMgLAFgPQAHgQAAgSQAAgRgHgNQgFgPgMgLQgNgLgQgHQgPgGgSAAIAJAAQATAAARAGQAQAHAMALQAMALAGAPQAHANAAARQAAASgHAQQgGAPgMALQgMALgQAHQgRAGgTAAgAKGBwQAGAAAAgGIAAjVQAAgGgGAAIALAAQAGAAAAAGIAADVQAAAGgGAAgAHwBwQAEAAAAgGIAAhZIAMAAIAABZQAAAGgFAAgAECBwQAFAAAAgGIAAg3IALAAIAAA3QAAAGgFAAgACgBwQAFAAAAgGIAAjVQAAgGgFAAIALAAQAGAAAAAGIAADVQAAAGgGAAgAAMBwQAGAAACgFIAjg4IALAAIgiA4QgDAFgHAAgAhSBwQAFAAAAgGIAAjVQAAgGgFAAIALAAQAFAAAAAGIAADVQAAAGgFAAgAnZBwQAFAAACgEIB6jWQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAAAgBgBQAAAAgBAAIALAAQABAAAAAAQABAAABABQAAAAABAAQAAABAAAAQABABAAAAQAAABAAABQAAAAAAABQAAAAgBABIh6DWQgCAEgFAAgArpBwQAFAAAAgGIAAiuIALAAIAACuQAAAGgFAAgAtHBwQAGAAAAgGIAAgiQAAgGgGAAIALAAQAGAAAAAGIAAAiQAAAGgGAAgAy7BwQAEAAAAgGIAAg3IAMAAIAAA3QAAAGgFAAgAknBAIABgBQADgEAFADQAFAFAHABIgFABQgKAAgGgFgAQpBCIAAgxIALAAIAAAxgALuBCIAAhJIALAAIAABJgAvJBCIAAgxIALAAIAAAxgAFHAzQARAAAOgGQAQgGAMgLQANgMAGgPQAHgOAAgRQAAgSgHgPQgGgPgNgLQgMgLgQgHQgOgFgRgBIAIAAQATAAAQAGQAQAHALALQANALAHAPQAGAPAAASQAAARgGAOQgHAPgNAMQgLALgQAGQgQAGgTAAgAx3AzQARAAAPgGQAQgGAMgLQAMgMAHgPQAHgOAAgRQAAgSgHgPQgHgPgMgLQgMgLgQgHQgPgFgRgBIAJAAQASAAARAGQAPAHAMALQANALAGAPQAHAPAAASQAAARgHAOQgGAPgNAMQgMALgPAGQgRAGgSAAgASYARQAFAAAAgGIAAgfQAAgGgFAAIALAAQAGAAAAAGIAAAfQAAAGgGAAgAtaARQAGAAAAgGIAAgfQAAgGgGAAIALAAQAGAAAAAGIAAAfQAAAGgGAAgAnMAGIhFh1QgCgCgDAAIALAAQAEAAABACIBBBvIgEAGgAEHAFIAAhJIALAAIAABJgAA3AFQgRAAgMgIQgKgLAAgQQAAgQAKgKQAFgGAHgDQAIgDAJAAIAJAAQgIAAgGADQgIADgEAGQgKAKAAAQQAAAQAKALQALAIAQAAgAy3AFIAAhJIAMAAIAABJgAQpgaIAAgqIALAAIAAAqgAvJgaIAAgqIALAAIAAAqgAH0gbIAAhQQAAgGgEAAIALAAQAFAAAAAGIAABQgALug0IAAg3QAAgGgFAAIALAAQAFAAAAAGIAAA3gAprhEQAGAAAAgGIAAghQAAgGgGAAIALAAQAGAAAAAGIAAAhQAAAGgGAAgASohEQAFAAAAgGIAAghQAAgGgFAAIALAAQAFAAAAAGIAAAhQAAAGgFAAgAtKhEQAFAAAAgGIAAghQAAgGgFAAIALAAQAGAAAAAGIAAAhQAAAGgGAAg");
	this.shape_11.setTransform(125.6,11.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,246.9,22.9);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFCC","#FFFF66"],[0,1],0.1,-12.5,0.1,12.5).s().p("ABTBvQgGAAAAgGIACh0IAAgYIgDAAIg5COQgDAEgEAAIgaAAQgEAAgCgEIguhxIgMgdIgBAAIAACMIAAACQAAAEgFAAIghAAQgHAAAAgGIAAjRQAAgGAHAAIAIAAIAnAAQAEAAADAFIA/CbIABAAIAIgQIA3iLQADgFAFAAIAGAAIAoAAQAHAAAAAGIAADRIAAACQgCAEgFAAg");
	this.shape.setTransform(12.5,11.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFCC","#FFFF66"],[0,1],0,-8.5,0,8.6).s().p("AhOBvQgGAAAAgGIAAjRQAAgGAGAAIAIAAICVAAQAGAAAAAGIAAAhIAAACQgBAEgFAAIhnAAIgNAAIAACqIAAACQgBAEgFAAg");
	this.shape_1.setTransform(38.4,11.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFFFCC","#FFFF66"],[0,1],0.1,-9.7,0.1,9.8).s().p("AA4BvQgHAAABgGIAAhYIhWAAIgNAAIAABYIAAACQgCAEgEAAIgkAAQgFAAAAgGIAAjRQAAgGAFAAIAJAAIAbAAQAFAAABAGIAABPIBjAAIAAgEIAAhLQgBgGAHAAIAHAAIAcAAQAGAAAAAGIAADRIAAACQgBAEgFAAg");
	this.shape_2.setTransform(60.6,11.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFFFCC","#FFFF66"],[0,1],0,-11.6,0,11.7).s().p("AgVBvIgWgFQgVgJgRgPQgKgKgPgaIgGgXQgDgLAAgMQAAgOAJgdQAGgOATgXQARgPAVgJIAWgHIAVgCQAQAAAdAJQAVAJAQAPQATAXAHAOQAIAdAAAOQAAAMgCALIgGAXQgPAagLAKQgPAOgTAJIgDABQgdAIgQAAgAgKhEQgIACgIAEQgNADgJAKQgJAJgFAOQgFANAAANQAAAOAFAOQAFAMAJAJQAJAKANAFQANAGANgBQAPAAAMgEIABgBQAMgFAJgKQAKgJAFgMQAFgOAAgOQAAgNgFgNQgFgOgKgJQgJgKgMgDQgNgHgPABIgKAAg");
	this.shape_3.setTransform(86.1,11.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FFFFCC","#FFFF66"],[0,1],0,-9.9,0,10).s().p("AhcBvQgGAAAAgGIAAjRQAAgGAGAAIAIAAIBiAAQAQAAANAFQAMAEAKAJQAJAIAFALQAFALAAANQAAANgFALQgHAKgLAGIAAACQASAHAKAMQAKANAAASQAAAPgFANQgFAMgKAJQgJAIgMAFIgDABQgPAFgRAAgAgzBCIBJAAQALAAAIgEIADgCQAIgHAAgLQAAgLgIgGQgIgGgOAAIg8AAIgNAAgAgzgXIBBAAQAJAAAGgEIACgCQAHgGAAgJQAAgKgGgGQgHgGgLAAIg0AAIgNAAg");
	this.shape_4.setTransform(111.8,11.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FFFFCC","#FFFF66"],[0,1],0.1,-9,0.1,9).s().p("AhTBvQgFAAgBgGIAAjRQABgGAFAAIAJAAICaAAQAFAAABAGIAAAgIAAACQgCAEgEAAIhtAAIgNAAIAAAqIBrAAQAFAAAAAGIAAAeIAAACQgBAEgEAAIheAAIgNAAIAAAwIB+AAQAFAAAAAGIAAAhIAAACQgBAEgEAAg");
	this.shape_5.setTransform(134.9,11.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#FFFFCC","#FFFF66"],[0,1],0.1,-9.7,0.1,9.8).s().p("AA3BvQgFAAAAgGIAAhYIhWAAIgOAAIAABYIAAACQgBAEgDAAIgkAAQgGAAAAgGIAAjRQAAgGAGAAIAIAAIAcAAQAEAAAAAGIAABPIBkAAIAAgEIAAhLQAAgGAFAAIAIAAIAcAAQAGAAAAAGIAADRIAAACQgBAEgFAAg");
	this.shape_6.setTransform(158.1,11.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#FFFFCC","#FFFF66"],[0,1],0.1,-9.7,0.1,9.8).s().p("AA3BvQgFAAAAgGIAAhYIhWAAIgOAAIAABYIAAACQgBAEgDAAIgkAAQgGAAAAgGIAAjRQAAgGAGAAIAIAAIAcAAQAEAAAAAGIAABPIBkAAIAAgEIAAhLQAAgGAFAAIAJAAIAbAAQAGAAAAAGIAADRIAAACQgBAEgFAAg");
	this.shape_7.setTransform(182.5,11.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#FFFFCC","#FFFF66"],[0,1],0.1,-9.6,0.1,9.7).s().p("AhZBvQgGAAAAgGIAAjRQAAgGAGAAIAIAAIAbAAQAGAAAAAGIAAA2IA5AAQASAAARAGQAQAHAMALQAMAKAFAPQAHANAAARQAAASgHAPQgFAOgMALQgLALgQAGIgBABQgRAGgSAAgAgwBCIA5AAQAKAAAHgDIAEgBQAEgDAFgEQAKgKAAgQQAAgRgKgJQgGgDgHgDQgHgCgKAAIgsAAIgNAAg");
	this.shape_8.setTransform(206.9,11.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#FFFFCC","#FFFF66"],[0,1],0.1,-2.3,0.1,2.4).s().p("AgQBvQgGAAAAgGIAAjRQAAgGAGAAIAIAAIAaAAQAFAAAAAGIAADRIAAACQgBAEgEAAg");
	this.shape_9.setTransform(220.9,11.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#462601").s().p("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");
	this.shape_10.setTransform(124.4,11.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#FFFFCC","#FFFF66"],[0,1],0.1,-9,0.1,9).s().p("AhTBvQgFAAgBgGIAAjRQABgGAFAAIAJAAICaAAQAFAAAAAGIAAAgIAAACQgBAEgEAAIhtAAIgNAAIAAAqIBrAAQAFAAAAAGIAAAeIAAACQgBAEgEAAIheAAIgNAAIAAAwIB+AAQAFAAAAAGIAAAhIAAACQgBAEgEAAg");
	this.shape_11.setTransform(237.1,11.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,247.5,23.3);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFCC","#FFFF66"],[0,1],0,-15.4,0,15.5).s().p("AiRC3QgIAAAAgKIAAlaQAAgJAIAAIAGAAIChAAQAYAAAVAHQATAHAQAPQANANAIASQAIASAAAWQAAAVgJASQgKARgRAKIAAADQAcAMAQAUQAPAWAAAeQAAAZgIAVQgIAUgQAPQgQAPgVAIQgXAIgaAAgAhRBuIBzAAQAOAAAKgEQAFgDAEgEQAOgLAAgSQAAgSgMgLQgNgKgWABIhmAAIgNAAgAhRgnIBnAAQALAAAJgEIAGgFQALgLAAgOQAAgSgJgJQgKgKgSAAIhaAAIgNAAg");
	this.shape.setTransform(15.5,19.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFCC","#FFFF66"],[0,1],0,-15,0,15).s().p("AiLC3QgKAAABgKIAAlaQgBgJAKAAIAFAAIAyAAQAIAAAAAJIAABaIBaAAQAdAAAaAKQAYAKATATQASARAJAZQALAWgBAcQABAdgLAZQgJAYgSATQgTASgYAKIgCABQgZAJgcAAgAhMBuIBaAAQAPAAAMgFIAAAAQALgFAIgIQAQgRAAgbQAAgcgQgPQgIgHgLgEQgMgEgPABIhNAAIgNAAg");
	this.shape_1.setTransform(52.3,19.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFFFCC","#FFFF66"],[0,1],0,-3.7,0,3.7).s().p("AgaC3QgKAAAAgKIAAlaQAAgJAKAAIAFAAIAwAAQAJAAAAAJIAAFaIgBAGQgBAEgHAAg");
	this.shape_2.setTransform(74,19.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFFFCC","#FFFF66"],[0,1],0,-15.4,0,15.5).s().p("AiRC3QgIAAAAgKIAAlaQAAgJAIAAIAGAAIChAAQAYAAAVAHQATAHAQAPQANANAIASQAIASAAAWQAAAVgJASQgKARgRAKIAAADQAcAMAQAUQAPAWAAAeQAAAZgIAVQgIAUgQAPQgQAPgVAIQgXAIgaAAgAhRBuIBzAAQAOAAAKgEQAFgDAEgEQAOgLAAgSQAAgSgMgLQgNgKgWABIhmAAIgNAAgAhRgnIBnAAQALAAAJgEIAGgFQALgLAAgOQAAgSgKgJQgKgKgRAAIhaAAIgNAAg");
	this.shape_3.setTransform(100.8,19.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FFFFCC","#FFFF66"],[0,1],0,-18.1,-0.1,18.2).s().p("AgjC4IghgJQgigOgagaQgPgQgXgrIgKglQgFgTAAgTQAAgaAPgwQAKgXAcgmQAagYAigPIAhgLIACAAIAhgEQAZAAAtAPQAhAPAZAYQAdAmAKAXQAPAwAAAaQAAATgEATIgLAlQgWArgRAQQgYAZghAPIgBAAIAAAAQgtANgZAAgAgUhvQgMABgJAGQgVAHgNAPQgPAQgIAWQgHAVAAAYQAAAXAHAXQAIAUAPAQQANAPAVAJQATAIAWAAQAWAAASgGIADgCQATgJAOgPQAQgQAIgUQAHgXAAgXQAAgYgHgVQgIgWgQgQQgOgPgTgHQgUgKgXAAQgKAAgKADg");
	this.shape_4.setTransform(139.5,19.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FFFFCC","#FFFF66"],[0,1],0,-18.8,0,18.9).s().p("AB/DcQgIAAAAgJIgEhBIjXAAIgOAAIgEA/QAAAFgCADQgCADgGAAIgxAAQgKAAAAgJIAAiCQAAgKAKAAIAFAAIAPAAQAIAAAFgEQAHgGABgNIAhkDQACgJAGAAIAHAAIDlAAQAKAAAAAJIAAEaIAdAAQAIAAAAAKIAACCIgBAGQgCADgFAAgAg9A1QgBALgEAHICOAAIAAgEIAAjVIhjAAIgNAAg");
	this.shape_5.setTransform(180.8,23.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#FFFFCC","#FFFF66"],[0,1],0,-15,0,15.1).s().p("AiLC3QgKAAAAgKIAAlaQAAgJAKAAIAEAAIAzAAQAIAAAAAJIAABaIBZAAQAeAAAaAKQAYAKATATQATARAIAZQALAWAAAcQAAAdgLAZQgIAYgTATQgTASgYAKIgCABQgZAJgdAAgAhMBuIBZAAQAPAAANgFIAAAAQALgFAIgIQAQgRAAgbQAAgcgQgPQgHgHgMgEQgNgEgPABIhMAAIgNAAg");
	this.shape_6.setTransform(220.5,19.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#FFFFCC","#FFFF66"],[0,1],-3.6,0,3.7,0).s().p("AgaC3QgJAAAAgKIAAlaQAAgJAJAAIAFAAIAwAAQAJAAAAAJIAAFaIgBAGQgCAEgGAAg");
	this.shape_7.setTransform(242.2,19.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#462601").s().p("ALvDgIABgGIAAiCQAAgKgIAAIgdAAIAAkaQAAgJgJAAIjnAAQACgDAEAAIDvAAQAJAAAAAJIAAEZIAdAAQAIAAAAAJIAACDQAAAKgIAAgAG7DgQACgDgBgFIAFg/IANAAIgEA8QAAAKgJABgAS+CUIABgFIAAlbQAAgJgJAAIgyAAQACgDAGAAIA3AAQAJAAAAAJIAAFaQAAAKgJgBgAnSCUIABgFIAAlbQAAgJgJAAIgzAAQACgDAHAAIA3AAQAJAAAAAJIAAFaQAAAKgJgBgAhwB5QARgOAIgUQAIgVAAgZQAAgegPgUQgQgXgcgLIAAgDQAQgKAKgRQAKgSgBgWQAAgVgHgSQgIgTgNgNQgRgOgTgHQgUgIgYAAIijAAQACgDAGAAICpAAQAXAAAVAGQATAIAQAPQANANAJARQAHATAAAVQAAAWgJASQgKARgQAJIAAAEQAcALAPAXQAPATAAAfQABAYgJAVQgHAVgRAOQgQAQgVAIIgOADQAWgHAPgQgAvFB5QAQgOAIgUQAJgVAAgZQgBgegPgUQgQgXgcgLIAAgDQARgKAKgRQAJgSAAgWQAAgVgIgSQgHgTgOgNQgQgOgTgHQgVgIgYAAIijAAQACgDAGAAICpAAQAYAAAVAGQASAIARAPQANANAIARQAIATAAAVQAAAWgJASQgKARgRAJIAAAEQAcALAQAXQAPATAAAfQAAAYgIAVQgJAVgPAOQgRAQgUAIIgOADQAVgHAQgQgAQGCPQAYgLATgRQATgTAIgYQALgZAAgdQAAgagLgZQgIgZgTgRQgTgTgYgKQgagKgeAAIhbAAIAAhaQAAgJgIAAIgzAAQACgDAHAAIA3AAQAIAAAAAJIAABaIBcAAQAdAAAbAJQAXALATASQATASAJAYQALAZAAAZQAAAegLAZQgJAYgTASQgTASgXALIgQAFIACgBgAEXBoQARgQAWgrIALglQAEgRAAgTQAAgcgPgwQgKgXgdgmQgZgYghgPQgtgPgZAAIgjAEIAMgEIAkgEQAZAAAuAPQAgAOAZAaQAeAlAKAXQAOAwAAAbQAAAUgDARIgLAkQgXAsgRAQQgZAZggAQIgNADQAhgPAYgZgAqKCPQAYgLATgRQASgTAJgYQALgZgBgdQABgagLgZQgJgZgSgRQgTgTgYgKQgagKgdAAIhcAAIAAhaQAAgJgIAAIgyAAQACgDAGAAIA4AAQAHAAAAAJIAABaIBdAAQAdAAAaAJQAYALATASQASASAJAYQAKAZAAAZQAAAegKAZQgJAYgSASQgTASgYALIgQAFIACgBgABsBMQgVgJgNgPQgPgQgIgUQgHgVAAgXQAAgaAHgVQAIgWAPgQQANgPAVgHQAJgGAMgBIgIACQgVAIgNAPQgOAQgIAWQgIAVAAAZQAAAZAIATQAIAVAOAQQANAPAVAJQATAIAYAAQAPAAAMgCQgSAGgWAAQgYAAgTgIgANzBQIAAh4IANAAIAABzIBcAAIAOgBQgNAGgPAAgAk9BQIAAhPIAOAAIAABKIB1AAIALAAQgLAEgOABgAsdBQIAAh4IANAAIAABzIBdAAIANgBQgMAGgPAAgAySBQIAAhPIAOAAIAABKIB0AAIALAAQgKAEgOABgAHxBOQADgHACgLIAZjHIANAAIgZDDQgBAKgEAIICDAAIAAAEgAGHBOQACgEAGAAIAUAAQgFAEgIAAgAk9hFIAAhIIAOAAIAABEIBqAAIAFAAQgIADgLABgAyShFIAAhIIAOAAIAABEIBpAAIAGAAQgJADgLABg");
	this.shape_8.setTransform(124.4,22.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,247.3,45.2);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgwUAaJQgyAAAAgyMAAAgytQAAgyAyAAMBgpAAAQAyAAAAAyMAAAAytQAAAygyAAg");
	this.shape.setTransform(314.4,167.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,628.8,334.7);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFCC","#FFFF66"],[0,1],-19.1,-5.1,19.2,5.2).s().p("AADIwIkdhNQgwgNANgwID+uyQANgwAwANIEdBNQAwANgNAwIj+OyQgKAmggAAQgJAAgKgDg");
	this.shape.setTransform(32.2,56.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,64.4,112.7);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkhB9IAAg0IiHAAIAAA0IgqAAIAAhZIAcAAQALgSAGgSQAGgPACgTQADgSABgTIABgwICAAAIAACbIAhAAIAABZgAl1gUQgDAQgFAMQgEAPgHANIBFAAIAAh2IgsAAgAAcBLIgSgFQgQgGgNgNQgHgGgFgIQgFgIgEgKQgDgJgCgKQgCgKAAgMQAAgZAIgTQAHgTAOgNQANgNAQgGIARgFIATgCQAUAAASAHQAJADAHAFQAIAFAHAGQANANAHATQAIATAAAZQAAAMgCAKQgCAKgEAJQgHATgNANQgNANgRAGQgSAHgVAAQgKAAgJgCgAAZhRQgJAFgHAIQgGAIgDAMQgCAMAAAOQAAAOACAJQADAMAGAIQAHAIAJAFQAKAEAMAAQAMAAAKgEQAKgFAGgIQAHgIADgMQAEgJAAgOQAAgPgEgLQgDgMgHgIQgGgIgKgFQgKgEgMAAQgMAAgKAEgApZBLIgSgFQgSgGgNgNQgHgGgFgIQgFgIgEgKQgDgJgCgKQgCgKAAgMQAAgZAIgTQAHgTAOgNQANgNASgGIARgFIATgCQAUAAASAHQAJADAHAFQAIAFAHAGQANANAHATQAIATAAAZQAAAMgCAKQgCAKgEAJQgHATgNANQgNANgRAGQgSAHgVAAQgKAAgJgCgApchRQgJAFgHAIQgGAIgEAMQgDAMAAAOQAAAOADAJQAEAMAGAIQAHAIAJAFQAKAEAMAAQAMAAAKgEQAKgFAGgIQAHgIADgMQAEgJAAgOQAAgPgEgLQgDgMgHgIQgGgIgKgFQgKgEgMAAQgMAAgKAEgADSBJQgPgBgPgEIAAi7ICBAAIAAAlIhXAAIAAAgIAOAAQAWAAARADQARADALAIIAKAIQAFAFADAGQADAGACAIQABAFAAAJQAAAQgGAMQgFAMgMAIQgYAQgrAAgADeAlIAHAAIAbgBQAIgBAGgDQAGgDADgFQAEgFAAgIQAAgIgDgEQgEgFgGgDQgGgDgJgBIghgBgALhBJIAAjAICDAAIAAAkIhXAAIAAAnIBNAAIAAAjIhNAAIAAAtIBeAAIAAAlgAI4BJIAAjAICDAAIAAAkIhYAAIAAAnIBOAAIAAAjIhOAAIAAAtIBeAAIAAAlgAHfBJIAAhRIhJAAIAABRIgsAAIAAjAIAsAAIAABKIBJAAIAAhKIAsAAIAADAgAjbBJIAAi+QAOgCAQgBIAcgCQAsAAAXAQQAXAPAAAjQAAARgGANQgGAMgLAIQgYAOgrAAIgOAAIAABBgAivgcIAOAAQALAAAIgBQAJgCAGgDQAGgDACgFQADgGAAgJQAAgIgDgFQgDgFgFgEQgGgDgHgBIgjAAgAr2BJIAAibIhIAAIAACbIgsAAIAAjAICgAAIAADAg");
	this.shape.setTransform(979.9,-82.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFC603","#FF9900"],[0,1],-68.8,-85,68.8,85).s().p("Ay2EvQgyAAAAgyIAAn5QAAgyAyAAMAltAAAQAyAAAAAyIAAH5QAAAygyAAg");
	this.shape_1.setTransform(978.2,-85.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Слой 5
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC6600").s().p("Ay2EvQgyAAAAgyIAAn5QAAgyAyAAMAltAAAQAyAAAAAyIAAH5QAAAygyAAg");
	this.shape_2.setTransform(978.2,-82.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(852.5,-116.2,251.5,64.5);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkhB9IAAg0IiHAAIAAA0IgqAAIAAhZIAcAAQALgSAGgSQAGgPACgTQADgSABgTIABgwICAAAIAACbIAhAAIAABZgAl1gUQgDAQgFAMQgEAPgHANIBFAAIAAh2IgsAAgAAcBLIgSgFQgQgGgNgNQgHgGgFgIQgFgIgEgKQgDgJgCgKQgCgKAAgMQAAgZAIgTQAHgTAOgNQANgNAQgGIARgFIATgCQAUAAASAHQAJADAHAFQAIAFAHAGQANANAHATQAIATAAAZQAAAMgCAKQgCAKgEAJQgHATgNANQgNANgRAGQgSAHgVAAQgKAAgJgCgAAZhRQgJAFgHAIQgGAIgDAMQgCAMAAAOQAAAOACAJQADAMAGAIQAHAIAJAFQAKAEAMAAQAMAAAKgEQAKgFAGgIQAHgIADgMQAEgJAAgOQAAgPgEgLQgDgMgHgIQgGgIgKgFQgKgEgMAAQgMAAgKAEgApZBLIgSgFQgSgGgNgNQgHgGgFgIQgFgIgEgKQgDgJgCgKQgCgKAAgMQAAgZAIgTQAHgTAOgNQANgNASgGIARgFIATgCQAUAAASAHQAJADAHAFQAIAFAHAGQANANAHATQAIATAAAZQAAAMgCAKQgCAKgEAJQgHATgNANQgNANgRAGQgSAHgVAAQgKAAgJgCgApchRQgJAFgHAIQgGAIgEAMQgDAMAAAOQAAAOADAJQAEAMAGAIQAHAIAJAFQAKAEAMAAQAMAAAKgEQAKgFAGgIQAHgIADgMQAEgJAAgOQAAgPgEgLQgDgMgHgIQgGgIgKgFQgKgEgMAAQgMAAgKAEgADSBJQgPgBgPgEIAAi7ICBAAIAAAlIhXAAIAAAgIAOAAQAWAAARADQARADALAIIAKAIQAFAFADAGQADAGACAIQABAFAAAJQAAAQgGAMQgFAMgMAIQgYAQgrAAgADeAlIAHAAIAbgBQAIgBAGgDQAGgDADgFQAEgFAAgIQAAgIgDgEQgEgFgGgDQgGgDgJgBIghgBgALhBJIAAjAICDAAIAAAkIhXAAIAAAnIBNAAIAAAjIhNAAIAAAtIBeAAIAAAlgAI4BJIAAjAICDAAIAAAkIhYAAIAAAnIBOAAIAAAjIhOAAIAAAtIBeAAIAAAlgAHfBJIAAhRIhJAAIAABRIgsAAIAAjAIAsAAIAABKIBJAAIAAhKIAsAAIAADAgAjbBJIAAi+QAOgCAQgBIAcgCQAsAAAXAQQAXAPAAAjQAAARgGANQgGAMgLAIQgYAOgrAAIgOAAIAABBgAivgcIAOAAQALAAAIgBQAJgCAGgDQAGgDACgFQADgGAAgJQAAgIgDgFQgDgFgFgEQgGgDgHgBIgjAAgAr2BJIAAibIhIAAIAACbIgsAAIAAjAICgAAIAADAg");
	this.shape.setTransform(127.4,27.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFC603","#FF9900"],[0,1],-68.8,-85,68.8,85).s().p("Ay2EvQgyAAAAgyIAAn5QAAgyAyAAMAltAAAQAyAAAAAyIAAH5QAAAygyAAg");
	this.shape_1.setTransform(125.7,24.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Слой 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC6600").s().p("Ay2EvQgyAAAAgyIAAn5QAAgyAyAAMAltAAAQAyAAAAAyIAAH5QAAAygyAAg");
	this.shape_2.setTransform(125.7,30.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-6.2,251.5,67);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.gonzales();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,286);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("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");
	this.shape.setTransform(323.3,33.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,646.7,66.4);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABWASQgMgHAAgLQAAgJAMgIQAMgHARgBQARABAMAHQANAIAAAJQAAALgNAHQgMAIgRAAQgRAAgMgIgAiQASQgMgHAAgLQAAgJAMgIQANgHARgBQARABAMAHQAMAIAAAJQAAALgMAHQgMAIgRAAQgRAAgNgIg");
	this.shape.setTransform(15.7,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,31.5,5.2);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#66FF00").ss(4,1,1).p("A0umrMApdAAAIAANXMgpdAAAg");
	this.shape.setTransform(132.8,42.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,269.6,89.7);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.GonzosQuestNetEntSlot1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,89.6,89.6);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.GonzosQuestsymbolNetEnt();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,89.6,89.6);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Gonzosquest();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,89.6,89.6);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.GonzosQuestNetEnt1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,89.6,89.6);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.GonzosQuestNetEntSlot1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,89.6,89.6);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.GonzosQuestNetEntSymbolкопия2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,89.6,89.6);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.gonzosquestscatter();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,89.6,89.6);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.gonzosquestscatter();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,89.6,89.6);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.gonzosquestscatter();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,97,97);


(lib.Анимация15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.gold();
	this.instance.parent = this;
	this.instance.setTransform(-71,-38);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71,-38,142,76);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ40();
	this.instance.parent = this;
	this.instance.setTransform(135.4,45,1,1,0,0,0,135.4,45);
	this.instance.alpha = 0.422;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,271,90);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ37();
	this.instance.parent = this;
	this.instance.setTransform(290.5,747,1,1,0,0,0,290.5,145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(44).to({y:1617},116).to({y:1967},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,587,892);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ33();
	this.instance.parent = this;
	this.instance.setTransform(-317,11.7,1,1,0,0,0,123.7,11.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:11.4},9,cjs.Ease.get(-1)).to({y:10.1},10,cjs.Ease.get(1)).to({y:11.1},10,cjs.Ease.get(-1)).to({y:11.7},10,cjs.Ease.get(1)).wait(21));

	// Слой 2
	this.instance_1 = new lib.Символ32();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-316.8,52,1,1,0,0,0,123.6,22.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:51.8},9,cjs.Ease.get(-1)).to({y:51.2},10,cjs.Ease.get(1)).to({y:52},10,cjs.Ease.get(-1)).to({y:53.2},10,cjs.Ease.get(1)).to({y:52.6},10,cjs.Ease.get(-1)).to({y:52},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-440.7,0,247.6,74.6);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ34();
	this.instance.parent = this;
	this.instance.setTransform(123.5,11.4,1,1,0,0,0,123.4,11.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:11.1},9,cjs.Ease.get(-1)).to({y:9.8},10,cjs.Ease.get(1)).to({y:11.2},10,cjs.Ease.get(-1)).to({y:12.2},10,cjs.Ease.get(1)).to({y:11.8},10,cjs.Ease.get(-1)).to({y:11.4},10,cjs.Ease.get(1)).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ35();
	this.instance_1.parent = this;
	this.instance_1.setTransform(123.3,45.7,1,1,0,0,0,123.2,15.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:45.5},9,cjs.Ease.get(-1)).to({y:44.9},10,cjs.Ease.get(1)).to({y:45.9},10,cjs.Ease.get(-1)).to({y:47.3},10,cjs.Ease.get(1)).to({y:46.5},10,cjs.Ease.get(-1)).to({y:45.7},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,246.9,61.6);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ27();
	this.instance.parent = this;
	this.instance.setTransform(302.8,232.4,1,1,0,0,0,314.4,167.3);
	this.instance.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.bg();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.6,0,628.8,400);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ24();
	this.instance.parent = this;
	this.instance.setTransform(32.1,56.4,1,1,0,0,0,32.1,56.4);
	this.instance.alpha = 0.25;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,64.4,112.7);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ19();
	this.instance.parent = this;
	this.instance.setTransform(125.7,36.7,1,1,0,0,0,125.7,30.4);

	this.instance_1 = new lib.Символ21();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-844.2,128.8,1,1,0,0,0,8.8,8.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,251.5,67);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация15("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(71,38);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,142,76);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.trava();
	this.instance.parent = this;
	this.instance.setTransform(318,0,0.794,0.794);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.trava();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-18,0,0.794,0.794);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 3
	this.instance_2 = new lib.Символ16();
	this.instance_2.parent = this;
	this.instance_2.setTransform(356.1,52.4,1,1,0,0,0,323.4,33.1);
	this.instance_2.alpha = 0.602;
	this.instance_2.filters = [new cjs.BlurFilter(19, 19, 1)];
	this.instance_2.cache(-2,-2,651,70);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18,0,711.7,99.3);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5
	this.instance = new lib.Символ13();
	this.instance.parent = this;
	this.instance.setTransform(457.6,-100.1,1,1,0,0,0,15.7,2.6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(32).to({_off:false},0).wait(21).to({alpha:1},1).to({alpha:0},1).wait(23).to({alpha:1},1).to({alpha:0},1).wait(18).to({alpha:1},1).to({alpha:0},1).wait(13).to({alpha:1},1).to({alpha:0},1).wait(1));

	// gold.png
	this.instance_1 = new lib.Символ17();
	this.instance_1.parent = this;
	this.instance_1.setTransform(461,-18,1,1,0,0,0,71,38);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(32).to({scaleX:1.03,scaleY:1.03,y:-18.8},7,cjs.Ease.get(-1)).to({scaleX:1.13,scaleY:1.13,x:461.1,y:-21.9},5,cjs.Ease.get(1)).to({regX:71.1,scaleX:1.09,scaleY:1.09,x:461.2,y:-20.9},5,cjs.Ease.get(-1)).to({regX:71,scaleX:1,scaleY:1,x:461,y:-18},5,cjs.Ease.get(1)).to({scaleX:1.06,scaleY:1.06,x:461.1,y:-19.9},5,cjs.Ease.get(-1)).to({scaleX:1.13,scaleY:1.13,y:-21.9},5,cjs.Ease.get(1)).wait(5).to({scaleX:1,scaleY:1,x:461,y:-18},5,cjs.Ease.get(1)).wait(5).to({scaleX:1.13,scaleY:1.13,x:461.1,y:-21.9},5,cjs.Ease.get(1)).wait(5).to({scaleX:1,scaleY:1,x:461,y:-18},5,cjs.Ease.get(1)).wait(6).to({scaleX:1.13,scaleY:1.13,x:461.1,y:-21.9},5,cjs.Ease.get(1)).wait(5).to({scaleX:1,scaleY:1,x:461,y:-18},5,cjs.Ease.get(1)).wait(1));

	// gonzales.png
	this.instance_2 = new lib.Символ18();
	this.instance_2.parent = this;
	this.instance_2.setTransform(470,6,1,1,0,0,0,80,143);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(116));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(390,-137,160,286);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 10
	this.instance = new lib.Символ11();
	this.instance.parent = this;
	this.instance.setTransform(147.1,-48.1,0.063,0.063,0,0,0,132.8,42.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(52).to({_off:false},0).to({regX:132.9,regY:42.6,scaleX:0.52,scaleY:0.54,x:147.8,y:-48.6},8,cjs.Ease.get(-1)).to({regX:133.8,regY:41.8,scaleX:1.01,scaleY:1.05,x:148.4,y:-48.9},9,cjs.Ease.get(1)).to({alpha:0.352},5).to({alpha:1},5).to({alpha:0.352},5).to({alpha:1},5).to({alpha:0.352},5).to({alpha:1},6).to({alpha:0.352},5).to({alpha:1},5).to({alpha:0.352},5).to({alpha:1},5).to({alpha:0.352},5).to({alpha:1},5).to({alpha:0.352},5).to({alpha:1},5).to({alpha:0.352},5).to({alpha:1},5).to({_off:true},1).wait(31));

	// Слой 11
	this.instance_1 = new lib.Символ39();
	this.instance_1.parent = this;
	this.instance_1.setTransform(147.7,-47.9,1,1,0,0,0,135.4,45);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(52).to({_off:false},0).to({alpha:0.672},8,cjs.Ease.get(-1)).to({alpha:0.301},9,cjs.Ease.get(1)).to({alpha:0.652},10,cjs.Ease.get(-1)).to({alpha:1},10,cjs.Ease.get(1)).to({alpha:0.633},11,cjs.Ease.get(-1)).to({alpha:0.301},10,cjs.Ease.get(1)).wait(10).to({alpha:1},10,cjs.Ease.get(1)).wait(10).to({alpha:0.301},10,cjs.Ease.get(1)).to({alpha:0},11).wait(21));

	// Слой 7
	this.instance_2 = new lib.Символ10();
	this.instance_2.parent = this;
	this.instance_2.setTransform(237.6,-624.6,1,1,0,0,0,44.8,44.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(31).to({y:-137.4},10,cjs.Ease.get(1)).wait(120).to({y:720.6},20).wait(1));

	// Слой 5
	this.instance_3 = new lib.Символ8();
	this.instance_3.parent = this;
	this.instance_3.setTransform(147.8,-534.2,1,1,0,0,0,44.8,44.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(31).to({y:-137.4},10,cjs.Ease.get(1)).wait(120).to({y:541},20).wait(1));

	// Слой 3
	this.instance_4 = new lib.Символ6();
	this.instance_4.parent = this;
	this.instance_4.setTransform(57.8,-444.6,1,1,0,0,0,44.8,44.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(31).to({y:-137.4},10,cjs.Ease.get(1)).wait(120).to({y:361},20).wait(1));

	// Слой 9
	this.instance_5 = new lib.Символ4();
	this.instance_5.parent = this;
	this.instance_5.setTransform(237,-535,1,1,0,0,0,44.8,44.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(20).to({y:-47.8},10,cjs.Ease.get(1)).wait(131).to({y:810.2},20).wait(1));

	// Слой 8
	this.instance_6 = new lib.Символ3();
	this.instance_6.parent = this;
	this.instance_6.setTransform(147,-444.8,1,1,0,0,0,44.8,44.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(20).to({y:-48},10,cjs.Ease.get(1)).wait(131).to({y:630.4},20).wait(1));

	// Слой 1
	this.instance_7 = new lib.Символ2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(57.2,-355.4,0.923,0.923,0,0,0,48.6,48.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regY:48.5,x:57.1},9,cjs.Ease.get(-1)).to({regY:48.6,x:57.2},10,cjs.Ease.get(1)).wait(1).to({y:-47.4},10,cjs.Ease.get(1)).wait(11).to({regY:48.5,x:57.1},10,cjs.Ease.get(-1)).to({regY:48.6,x:57.2},11,cjs.Ease.get(1)).wait(99).to({y:451},20).wait(1));

	// Слой 6
	this.instance_8 = new lib.Символ9();
	this.instance_8.parent = this;
	this.instance_8.setTransform(237.8,-444.8,1,1,0,0,0,44.8,44.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({y:-209.6},9,cjs.Ease.get(-1)).to({y:42.4},10,cjs.Ease.get(1)).wait(142).to({y:900.4},20).wait(1));

	// Слой 4
	this.instance_9 = new lib.Символ7();
	this.instance_9.parent = this;
	this.instance_9.setTransform(147.8,-354.4,1,1,0,0,0,44.8,44.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({y:-162.8},9,cjs.Ease.get(-1)).to({y:42.4},10,cjs.Ease.get(1)).wait(142).to({y:720.8},20).wait(1));

	// Слой 2
	this.instance_10 = new lib.Символ5();
	this.instance_10.parent = this;
	this.instance_10.setTransform(57.8,-265,1,1,0,0,0,44.8,44.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({y:-116.7},9,cjs.Ease.get(-1)).to({y:42.2},10,cjs.Ease.get(1)).wait(142).to({y:540.6},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(12.3,-669.4,270.3,449.2);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AytFOQg7AAAAgzIAAo1QAAgzA7AAMAlbAAAQA7AAAAAzIAAI1QAAAzg7AAg");
	var mask_graphics_29 = new cjs.Graphics().p("AytFOQg7AAAAgzIAAo1QAAgzA7AAMAlbAAAQA7AAAAAzIAAI1QAAAzg7AAg");
	var mask_graphics_84 = new cjs.Graphics().p("AytFOQg7AAAAgzIAAo1QAAgzA7AAMAlbAAAQA7AAAAAzIAAI1QAAAzg7AAg");
	var mask_graphics_85 = new cjs.Graphics().p("AytFOQg7AAAAgzIAAo1QAAgzA7AAMAlbAAAQA7AAAAAzIAAI1QAAAzg7AAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:125.7,y:33.5}).wait(29).to({graphics:mask_graphics_29,x:125.7,y:33.5}).wait(55).to({graphics:mask_graphics_84,x:125.7,y:33.5}).wait(1).to({graphics:mask_graphics_85,x:125.7,y:33.5}).wait(1));

	// Слой 3
	this.instance = new lib.Символ23();
	this.instance.parent = this;
	this.instance.setTransform(-51.4,27.9,1,1,0,0,0,32.1,56.4);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:114.2},14,cjs.Ease.get(-1)).to({x:288.6},15,cjs.Ease.get(1)).wait(56).to({x:-51.4},0).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ20();
	this.instance_1.parent = this;
	this.instance_1.setTransform(125.7,33.5,1,1,0,0,0,125.7,33.5);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(86));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,251.5,67);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.parent = this;
	this.instance.setTransform(-803.5,280,1,1,0,0,0,80,143);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-493.5,0,160,286);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ14();
	this.instance.parent = this;
	this.instance.setTransform(69.9,125.1,0.874,0.874,0,0,0,-413.6,143);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,140,250.1);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ22();
	this.instance.parent = this;
	this.instance.setTransform(125.7,-100.1,1,1,0,0,0,125.7,33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83.5,-162.1,335,112.7);


// stage content:
(lib.casinox_gonz = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text2
	this.instance = new lib.Символ30();
	this.instance.parent = this;
	this.instance.setTransform(445.8,175.6,1,1,0,0,0,123.5,31.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// text
	this.instance_1 = new lib.Символ31();
	this.instance_1.parent = this;
	this.instance_1.setTransform(886.8,98.6,1,1,0,0,0,123.8,38.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// logo
	this.instance_2 = new lib.casinox();
	this.instance_2.parent = this;
	this.instance_2.setTransform(312,6,0.649,0.649);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// btn
	this.instance_3 = new lib.Символ25();
	this.instance_3.parent = this;
	this.instance_3.setTransform(24.6,407.4,1,1,0,0,0,-296.4,50.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// trava
	this.instance_4 = new lib.Символ15();
	this.instance_4.parent = this;
	this.instance_4.setTransform(145.9,266.1,1,1,0,0,0,179.9,36.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// gonzo
	this.instance_5 = new lib.Символ36();
	this.instance_5.parent = this;
	this.instance_5.setTransform(263.6,191,1,1,0,0,0,70,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// slots
	this.instance_6 = new lib.Символ1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(54.3,251.5,1,1,0,0,0,48.5,48.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// monetki
	this.instance_7 = new lib.Символ38();
	this.instance_7.parent = this;
	this.instance_7.setTransform(303.5,-465,1,1,0,0,0,293.5,446);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// bg
	this.instance_8 = new lib.Символ26();
	this.instance_8.parent = this;
	this.instance_8.setTransform(301,121,1,1,0,0,0,302,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(248,-761,710.7,1240.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;