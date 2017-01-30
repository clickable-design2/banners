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
		{src:"images/bedro.png?1481297347018", id:"bedro"},
		{src:"images/bg.jpg?1481297347018", id:"bg"},
		{src:"images/golova.png?1481297347018", id:"golova"},
		{src:"images/jopa.png?1481297347018", id:"jopa"},
		{src:"images/kot.png?1481297347018", id:"kot"},
		{src:"images/noga.png?1481297347018", id:"noga"},
		{src:"images/palec.png?1481297347018", id:"palec"},
		{src:"images/past.png?1481297347018", id:"past"},
		{src:"images/plecho.png?1481297347018", id:"plecho"},
		{src:"images/ruka.png?1481297347018", id:"ruka"},
		{src:"images/rukakursor.png?1481297347018", id:"rukakursor"},
		{src:"images/siski.png?1481297347018", id:"siski"},
		{src:"images/strelka.png?1481297347018", id:"strelka"},
		{src:"images/telo.png?1481297347018", id:"telo"},
		{src:"images/w256h2561380453915MouseOptions256x25632.png?1481297347018", id:"w256h2561380453915MouseOptions256x25632"}
	]
};



lib.ssMetadata = [];


// symbols:



(lib.bedro = function() {
	this.initialize(img.bedro);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,94,120);


(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,305);


(lib.golova = function() {
	this.initialize(img.golova);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,82,99);


(lib.jopa = function() {
	this.initialize(img.jopa);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,116,123);


(lib.kot = function() {
	this.initialize(img.kot);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,140,201);


(lib.noga = function() {
	this.initialize(img.noga);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,114,252);


(lib.palec = function() {
	this.initialize(img.palec);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,45,58);


(lib.past = function() {
	this.initialize(img.past);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,49,34);


(lib.plecho = function() {
	this.initialize(img.plecho);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,103,63);


(lib.ruka = function() {
	this.initialize(img.ruka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,143,64);


(lib.rukakursor = function() {
	this.initialize(img.rukakursor);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,106,121);


(lib.siski = function() {
	this.initialize(img.siski);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,71,95);


(lib.strelka = function() {
	this.initialize(img.strelka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,45,35);


(lib.telo = function() {
	this.initialize(img.telo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,189,145);


(lib.w256h2561380453915MouseOptions256x25632 = function() {
	this.initialize(img.w256h2561380453915MouseOptions256x25632);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,256,256);


(lib.Символ54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.strelka();
	this.instance.parent = this;
	this.instance.setTransform(0,11.7,1,1,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,52.5,45.5);


(lib.Символ52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjJA6QgJgEgGgGQgPgFgGgPQgIgRAJgOQADgGAGgFQAHgSAbgPQAHgFAIgDIAEgEQAQgLATAJIABABIACAAQAbABA2gBIAVABIAGgBQAlgBAeADQAXACAOAFIARAIIAIAEIASABQAXADAWAHIAOAAQASAAANAFQAQAGAJANQALANgEAOQgEAWgaAKQgOAFgeABIgzABQiuAEhYAAQgmAAgRgIg");
	this.shape.setTransform(24.2,6.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,48.5,13.3);


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFC101","#EFE189","#FFFFFF"],[0,0.478,1],0,-10.7,0,10.7).s().p("AhDCGQgMgGgHgLQgHgKAAgLQgBgMAFgIQAGgIAMgDQAJAGASADQAUADARgEQATgEAKgLQAFgGACgJQADgIgCgMQgHAHgOAEQgLAEgPACQgQABgOgCQgOgCgJgGQgOgKgIgSQgFgMgDgWIgCgpQgBgagDgRQAEgIAJgIQAKgHAMgDQANgDAMADQANADAIAKQAKALABASIgBAlQABAsAOAAQAWgBgIhYQgBgOAJgKQAIgIANgDQAMgDANADQANAEAHAIQAJAJAEAWQAEASABAYQADBagNAoQgFAPgIAMQgIANgLAJQgMAKgQAFQgQAGgUABIgJAAQgmAAgUgKg");
	this.shape.setTransform(205.2,14.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFC101","#EFE189","#FFFFFF"],[0,0.478,1],0,-11.4,0,11.4).s().p("AhCCPQgRgBgKgIQgMgLgCgTQgDgVADhAIgBhNQgBgegEgoQBSggAKA2QADATgBAcIABAkQAOgCAGgNQAGgLACgTQADgWABgrQAegJANAAQAMAAAIAFQAKAGAFANQAGARgDAUQgCATgJARQgIARgLALQgMAMgKABQAQABAMADQAMAEAHAJQAHAHAEAKQAEAJABALQAAA0AIAXQgJAJgQAFQgQAFgQgCQgSgCgKgKQgGgGgDgIQgDgJgBgLIgBgmQgCgPgEgHQgDgHgGgCQgGgCgMABIACBkQgHAHgOAFQgNAFgOAAIgCAAg");
	this.shape_1.setTransform(181.3,14.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFC101","#EFE189","#FFFFFF"],[0,0.478,1],0,-11.2,0,11.2).s().p("AAvCMQgKgEgGgIQgFgHgDgKQgCgJgBgMQAAgdAMguQgCAHgHAGQgIAGgKAFQgJAFgNACQgMACgNgBQgNgBgLgEQgNgFgJgJQgJgKgFgOQgGgNAAgUIAAg0QAAgYgDgZQAbgMAWAAQAUAAALAJQAHAGADAIQAEAKAAANIAABCQABAPANADQALADAKgIQACgugEhEQATgIAQgCQASgDANAFQAOAEAIAMQAIANgBAWQgDBlAEBsQgFAKgLAGQgLAFgNABIgEAAQgMAAgJgDg");
	this.shape_2.setTransform(156.5,14.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFC101","#EFE189","#FFFFFF"],[0,0.478,1],0,-11.5,0,11.5).s().p("AglCMQgWgEgPgNQgJgIgHgKQgHgLgGgOQgFgPgDgSQgDgUAAgYQAAgYAJgpQAEgOAGgMQAGgLAIgJQAHgJAJgHQAJgGALgEQAVgJAYAAQAaAAAUAIQAKAEAJAGQAJAHAIAIQAHAJAGALQAHAMAEAOQAJAqAAAZQAAAYgEATQgDASgGAPQgFAOgIALQgHAKgJAHQgQANgWAFQgQAEgTAAIgFABQgSAAgOgEgAAAhFQgGAAgGAMQgJAcAAAdQgBAiAHAgQAFAPAKAAQAGAAAFgGQAEgFADgKQAGgVAAgnQAAhGgUAAIgEABg");
	this.shape_3.setTransform(132.7,14.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FFC101","#EFE189","#FFFFFF"],[0,0.478,1],0.1,-11.1,0.1,11.1).s().p("AADCPQgqgEgZgTQgJgIgIgKQgJgLgFgNQgHgPgDgSQgEgTAAgWQgBgVAHgmQAFgRARgbQAOgRATgLQASgKAUgDQASgEATADQATADAPAJQAPAJAIANQAJAPgBARQAAAJgFAHQgFAHgIAFQgIAFgKACQgKACgJgCQACgOgIgIQgGgHgKABQgKAAgGAGQgHAGgFALQgEAKgCAOQgCANAAAMQABAOAEANQAEANAGAJQAGALAIAFQAKAFAMgCQAQgBAKgFQAPgGATgOQAJACAFAFQAGAFAAAIQACAPgNATQgGAJgKAIQgKAIgMAGQgNAGgOAEQgNACgOAAIgEAAg");
	this.shape_4.setTransform(108.7,14.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FFC101","#EFE189","#FFFFFF"],[0,0.478,1],0,-11.7,0,11.7).s().p("AhPCNQgKgDgFgHQgGgGgEgLQgCgLgBgQQgDhXAAhIQAAgVgFgmQAhgLASAAQAVAAAKAJQAGAEADAIQACAIAAALIgCB5QAJgjAahZQAHgVANgJQANgHAYAAQAVAAALAKQAGAFADAHQAEAIgBAKIAACkQACA0ADAJQgGAIgMAFQgPAHgVAAQgNAAgIgEQgIgDgEgIQgFgKgBgbIAChrQgFALgHAeQgIAkgFARQgLAhgKAMQgHAJgJAFQgJAFgMABIgEAAQgLAAgHgCg");
	this.shape_5.setTransform(83.9,14.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#FFC101","#EFE189","#FFFFFF"],[0,0.478,1],0.1,-10.9,0,11.2).s().p("AADCPQgqgEgZgTQgJgIgIgKQgJgLgFgNQgHgPgDgSQgEgTAAgWQgBgVAHgmQAFgRARgbQAOgRATgLQASgKAUgDQASgEATADQATADAPAJQAPAJAIANQAJAPgBARQAAAJgFAHQgFAHgIAFQgIAFgKACQgKACgJgCQACgOgIgIQgGgHgKABQgKAAgGAGQgHAGgFALQgEAKgCAOQgCANAAAMQABAOAEANQAEANAGAJQAGALAIAFQAKAFAMgCQAQgBAKgFQAPgGATgOQAJACAFAFQAGAFAAAIQACAPgNATQgGAJgKAIQgKAIgMAGQgNAGgOAEQgNACgOAAIgEAAg");
	this.shape_6.setTransform(59.5,14.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#FFC101","#EFE189","#FFFFFF"],[0,0.478,1],0,-11.5,0,11.5).s().p("AglCMQgWgEgPgNQgJgIgHgKQgHgLgGgOQgFgPgDgSQgDgUAAgYQAAgYAJgpQAEgOAGgMQAGgLAIgJQAHgJAJgHQAJgGALgEQAVgJAYAAQAaAAAUAIQAKAEAJAGQAJAHAIAIQAHAJAGALQAHAMAEAOQAJAqAAAZQAAAYgEATQgDASgGAPQgFAOgIALQgHAKgJAHQgQANgWAFQgQAEgTAAIgFABQgSAAgOgEgAAAhFQgGAAgGAMQgJAcAAAdQgBAiAHAgQAFAPAKAAQAGAAAFgGQAEgFADgKQAGgVAAgnQAAhGgUAAIgEABg");
	this.shape_7.setTransform(35.1,14.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#FFC101","#EFE189","#FFFFFF"],[0,0.478,1],0.1,-11.1,0.1,11.1).s().p("AADCPQgqgEgZgTQgJgIgIgKQgJgLgFgNQgHgPgDgSQgEgTAAgWQgBgVAHgmQAFgRARgbQAOgRATgLQASgKAUgDQASgEATADQATADAPAJQAPAJAIANQAJAPgBARQAAAJgFAHQgFAHgIAFQgIAFgKACQgKACgJgCQACgOgIgIQgGgHgKABQgKAAgGAGQgHAGgFALQgEAKgCAOQgCANAAAMQABAOAEANQAEANAGAJQAGALAIAFQAKAFAMgCQAQgBAKgFQAPgGATgOQAJACAFAFQAGAFAAAIQACAPgNATQgGAJgKAIQgKAIgMAGQgNAGgOAEQgNACgOAAIgEAAg");
	this.shape_8.setTransform(11.1,14.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,215.9,29);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFC101","#F5E37D","#FFFFFF"],[0,0.463,1],0,-7.2,0,7.3).s().p("AgiAkQgNgCgIgGQgIgHgFgIQgEgJABgHQAAgJAGgJQAFgJALgHQAfAMAQABQALABAOgDQAPgDAQgIQALAHAFAKQAEAJgCAJQgCAHgHAIQgHAHgLAFQgkAMgQABIgFAAQgMAAgKgCg");
	this.shape.setTransform(33.7,4.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFC101","#F5E37D","#FFFFFF"],[0,0.463,1],0,-16.4,0,16.5).s().p("AhPCNQgKgDgFgHQgGgGgEgLQgCgLgBgQQgDhXAAhIQAAgVgFgmQAhgLASAAQAVAAAKAJQAGAEADAIQACAIAAALIgCB5QAJgjAahZQAHgVANgJQANgHAYAAQAVAAALAKQAGAFADAHQAEAIgBAKIAACkQACA0ADAJQgGAIgMAFQgPAHgVAAQgNAAgIgEQgIgDgEgIQgFgKgBgbIAChrQgFALgHAeQgIAkgFARQgLAhgKAMQgHAJgJAFQgJAFgMABIgEAAQgLAAgHgCg");
	this.shape_1.setTransform(33.5,24.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFC101","#F5E37D","#FFFFFF"],[0,0.463,1],0,-14.4,0,14.4).s().p("AgnCOQgUgBgLgIQgLgGgEgNQgGgQAAgwIAAhcQgBg5gEgoIBYgDQAwAAAWACQAOADAIAMQAIAMgBAOQAAAOgIAJQgJALgPgBQgrgBgSABIAAAkQAWACAmgBQANAAAIAKQAIAJAAALQABANgHAJQgIAKgOAAIg8ABIAAAfQANADAZgBQAXgBAcgEQAIAUABAOQABAPgGAJQgFAKgMAFQgLAGgRABIgvABQgVAAgSgBg");
	this.shape_2.setTransform(9.8,24);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,1.1,45.2,37.4);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFC101","#F2E285","#FFFFFF"],[0,0.478,1],0,-7.2,0,7.3).s().p("AgiAkQgNgCgIgGQgIgHgFgIQgEgJABgHQAAgJAGgJQAFgJALgHQAfAMAQABQALABAOgDQAPgDAQgIQALAHAFAKQAEAJgCAJQgCAHgHAIQgHAHgLAFQgkAMgQABIgFAAQgMAAgKgCg");
	this.shape.setTransform(69,5.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFC101","#F2E285","#FFFFFF"],[0,0.478,1],0,-14.9,0,15).s().p("ABWCnQgRgEgBgHQAAgKABgcQAAgBiLAAQAEAdgCAPQhJASgFglQgDghACgXQABgQAEgMQAEgNAIgHQAYABAMgBIAEg8QACgqADgbQACgUAEgMQAEgOAIgJQAIgJANgGQAOgFAVgCQAYgCAkACQAnACAPAHQgCA1ABBBQABA+ADARQANABATgBQANAtgCAnQgBAagCAFQgFAMgTADQgIACgIAAQgKAAgKgDgAAAhYQgIALgCAXQgCAQgBAdIAAArIAiAAQAAg5ABhOIgBAAQgPAAgGANg");
	this.shape_1.setTransform(14.9,26.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFC101","#F2E285","#FFFFFF"],[0,0.478,1],0,-11.8,0,11.8).s().p("AAwCPQgNgEgIgJQgMgOACgbIgjAAQgCAGAAAjQgSALgTADQgSACgOgGQgPgHgHgOQgHgQACgXQAEgsALg4QAEgdAHhCQASgNAYgIQAZgIAXAAIAYACQANACAKAFQAMAGAJAIQAJAJAHALQAIAQAFAVQAEASADAYIAGBcIACAdQABALAEALQgFAKgMAGQgMAGgNACIgJAAQgJAAgJgCgAgKgzQgBA8gDAYIAcAAIgCgpQgBgcgEgNQgBgCgGgBg");
	this.shape_2.setTransform(43.5,24.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFC101","#F2E285","#FFFFFF"],[0,0.478,1],0,-11.7,0,11.7).s().p("AhPCNQgJgDgHgHQgGgGgDgLQgDgLAAgQQgDhXAAhIQAAgVgFgmQAggLATAAQAVAAAKAJQAGAEADAIQACAIAAALIgCB5QAJgjAahZQAHgVANgJQANgHAYAAQAVAAALAKQAGAFADAHQADAIAAAKIAACkQACA0ADAJQgFAIgNAFQgPAHgVAAQgNAAgIgEQgHgDgFgIQgFgKAAgbIABhrQgFALgHAeQgIAkgGARQgKAhgJAMQgIAJgJAFQgJAFgMABIgEAAQgLAAgHgCg");
	this.shape_3.setTransform(68.8,24.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,1.3,80.5,42.4);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FF00").s().p("AgaAaQgLgLAAgPQAAgOALgMQAMgLAOAAQAPAAALALQAMAMgBAOQABAPgMALQgLAMgPgBQgOABgMgMg");
	this.shape.setTransform(3.8,3.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,7.6,7.6);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFCC01").ss(2,1,1).p("AEQAAQAABwhQBQQhQBQhwAAQhvAAhQhQQhQhQAAhwQAAhvBQhQQBQhQBvAAQBwAABQBQQBQBQAABvg");
	this.shape.setTransform(27.2,27.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,56.4,56.4);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFCC01").ss(2,1,1).p("ACmAAQAABFgxAwQgwAxhFAAQhDAAgxgxQgxgwAAhFQAAhDAxgxQAxgxBDAAQBFAAAwAxQAxAxAABDg");
	this.shape.setTransform(16.7,16.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,35.3,35.3);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgzjAFiIAArDMBnGAAAIAALDg");
	this.shape.setTransform(330,35.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,660,71);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AE1BeQgFgBgEgEQgFgFgDgJIgJg7IgFgiQgEgRgDgIQAIBYAAARQAAAIgCAGQgCAGgFAFQgEAEgFACQgGADgHAAQgHAAgFgDQgGgDgEgEQgEgFgBgHQgCgHAAgIIAAhnQAAgRgDgWIAUgHQAOgDANAAQAPgBALAFQAGACAEAEQAFAFACAGQADAGADAPIAEAeIAHAtIANhPQACgKAEgIQAEgHAGgFQAGgEAHgDQAHgCAHAAQAHAAAHACQAHACAFAFQAGAEADAGQAEAHABAIIACBCIABApQABAWACANQgDAGgJAEQgIADgKAAQgKAAgGgDQgFgDgEgFQgFgHAAgMQgBgKABgjIABg/QgMBUgDAbQAAAIgDAFQgDAGgEADQgIAGgKAAQgIAAgGgCgAnyBZQgEgEgCgGQgDgGAAgJIAAhwQAAgEgLABQgLABgEAFQACAyAAAkQAIA3gnAAQgKAAgHgEQgGgDgDgGQgEgHAAgWIAAhiQAAgUgCgQQAMgFAdgFQAUgDAXgBQAOAAAKABQAMABAJADQAJAEAFAHQAFAHgBAKIACCPQgEAGgJAEQgLAEgKAAQgMAAgHgHgAgyBeQgOgDgLgJQgGgFgEgHQgFgHgEgJQgDgKgCgNQgCgNAAgQQAAgPAFgcQADgJAEgIQAEgHAFgGQAFgGAGgFIAOgHQAOgFARAAQARAAALAFIANAHQAGAEAFAGQAGAGAEAHQAEAIACAJQAGAcAAAQQAAAQgCANQgCAMgEAKQgDAJgGAHQgEAHgGAFQgLAJgMADQgLADgOAAIgEAAQgMAAgJgCgAgYgtQgGAAgEAIQgFATAAASQgBAXAFAVQADAKAIAAQAEAAADgEQADgDACgHQAEgOAAgaQAAgugNAAIgDABgAl9BeQgOgDgLgJQgGgFgEgHQgFgHgEgJQgDgKgCgNQgCgNAAgQQAAgPAFgcQADgJAEgIQAEgHAFgGQAFgGAGgFIAOgHQAOgFARAAQARAAANAFIANAHQAGAEAFAGQAGAGAEAHQAEAIACAJQAGAcAAAQQAAAQgCANQgCAMgEAKQgDAJgGAHQgEAHgGAFQgLAJgOADQgLADgOAAIgEAAQgMAAgJgCgAljgtQgGAAgEAIQgFATAAASQgBAXAFAVQADAKAIAAQAEAAADgEQADgDACgHQAEgOAAgaQAAgugNAAIgDABgAjqBgQgLgBgHgGQgIgGgCgOQgCgOACgqIAAgzQgBgUgCgbQA2gVAHAkQACANgBATIABAYQAJgCAFgJQAEgHACgMIADgsQAUgGAIAAQAIAAAGAEQAGAEADAJQAEALgCANQgBAMgGAMQgFALgIAIQgIAHgGABQAKABAJABQAHADAFAGQAFAEADAHQACAGABAHQAAAjAFAQQgGAFgKAEQgLADgLgBQgMgBgHgHQgEgEgCgGQgCgFAAgIIgBgZQgBgKgDgEQgCgFgFgCQgEgBgIABIABBCQgFAFgJAEQgIADgJAAIgCAAgABbBfQgLgBgGgGQgHgHgBgMIAAhQQAAgtgCgjQAcgEATAAIAXAAIAWADQAKADAIAEQAJAFAGAHQAGAHADAJQAEAKAAANQAAAUgFANQgFAKgKAHQgJAHgPACQgOACgUAAQACAuADALQgHAGgKADQgIACgIAAIgFAAgAB9g0QgBAMABAiQAKABAFgHQAFgGAAgNQAAgJgEgHQgDgDgEgCIgEgBIgFABgAHQBeQgHgCgEgEQgDgFgDgHQgCgHAAgLQgCg6AAgvQAAgOgDgZQAWgIAMAAQAOAAAHAGQADADACAFQACAFAAAIIgCBQQAHgXASg7QAFgOAJgGQAIgFAQAAQAOAAAIAHQAEADACAFQACAFAAAHIAABtQABAiABAGQgDAGgIADQgKAEgOAAQgJAAgFgCQgFgCgDgFQgEgHAAgSIABhHQgDAIgFATIgJAjQgIAWgGAIQgFAGgGAEQgHADgHAAIgEAAQgGAAgFgBg");
	this.shape.setTransform(59.6,9.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,119.2,19.4);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AEbBZQgIgEgFgHQgEgHgBgHQgBgIAEgFQAEgGAIgCQAGAEAMACQANACAMgCQANgDAHgHQAEgFABgFQACgGgCgHQgEAEgJADQgJACgKABQgLABgJgBQgKgCgFgEQgKgGgFgMQgEgHgBgPIgBgbQgBgSgCgLQACgGAHgFQAGgEAIgCQAJgCAHABQAJACAGAHQAGAIABALIgBAZQABAeAKgBQAPAAgFg7QgBgJAGgHQAFgFAJgCQAIgCAJACQAIACAGAGQAFAGADAPQACALABAQQACA8gIAaQgEALgFAHQgFAJgIAGQgIAHgKADQgLAEgOABIgHAAQgZAAgNgHgAAKBfQgbgDgQgNQgHgFgFgHQgGgHgEgJQgEgKgCgMQgDgMAAgPQgBgOAFgZQAEgLALgSQAJgLANgIQAMgGAMgDQANgCAMACQANACAKAGQAKAGAFAJQAGAJAAAMQgBAGgDAFQgDAEgGAEQgFADgGABQgHACgGgCQABgJgFgFQgEgFgHABQgGAAgFAEQgFAEgCAHQgDAHgBAJQgBAJAAAHQABAJACAJQACAJADAGQAEAHAHADQAGAEAJgBQAKgCAHgDQAKgDAMgKQAGABAEAEQADADABAFQABAKgJANIgKALQgHAGgIAEQgIAEgKACQgIACgJAAIgEAAgAB8BfQgLgBgHgGQgIgGgCgOQgCgOACgqIAAgzQgBgUgCgbQA2gVAHAkQACANgBATIABAYQAJgCAFgJQAEgHACgMIADgsQAUgGAIAAQAIAAAGAEQAGAEADAJQAEALgCANQgBAMgGAMQgFALgIAIQgIAHgGABQAKABAJACQAHACAFAGQAFAEADAHQACAGABAHQAAAjAFAQQgGAFgKAEQgLADgLgBQgMgBgHgHQgEgEgCgGQgCgFAAgIIgBgZQgBgKgDgEQgCgFgFgCQgEgBgIABIABBCQgFAFgJAEQgIADgJAAIgCAAgAlwBfQgLgBgHgGQgIgGgBgOQgCgOACgqIgBgzQAAgUgDgbQA3gVAGAkQACANAAATIAAAYQAKgCAFgJQAEgHACgMIACgsQAUgGAJAAQAIAAAFAEQAHAEADAJQAEALgCANQgCAMgGAMQgFALgHAIQgIAHgHABQALABAIACQAIACAFAGQAFAEACAHQADAGAAAHQAAAjAFAQQgFAFgLAEQgLADgLgBQgLgBgHgHQgEgEgCgGQgCgFAAgIIgCgZQgBgKgCgEQgDgFgEgCQgFgBgHABIABBCQgFAFgJAEQgJADgIAAIgDAAgAjRBdQgHgCgEgEQgDgFgDgHQgCgHAAgLQgCg5AAgwQAAgOgDgZQAWgIAMAAQAOAAAHAGQADADACAFQACAFAAAIIgCBQQAHgXASg7QAFgOAJgGQAIgFAQAAQAOAAAIAHQAEADACAFQACAFAAAHIAABtQABAiABAGQgDAGgIADQgKAEgOAAQgJAAgFgCQgFgCgDgFQgEgHAAgSIABhHQgDAIgFATIgJAjQgIAWgGAIQgFAGgGAEQgHADgHAAIgDAAQgHAAgFgBg");
	this.shape.setTransform(40,9.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80,19.3);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFC101","#F7E479","#D6D7CC"],[0,0.435,1],0.1,-7.6,0.1,7.6).s().p("AgsBfQgKAAgIgGQgHgHgCgNQgCgOACgrIgBgzQAAgTgDgbQA3gWAHAlQABANAAASIAAAYQAKgCADgIQAEgHACgNIADgrQAUgGAIAAQAIAAAFADQAHAEADAJQAEALgCAOQgCAMgFAMQgGALgHAHQgIAIgGABQAKAAAJACQAHADAFAFQAFAFACAHQADAGAAAHQABAjAFAPQgGAGgLADQgLAEgKgBQgMgCgHgHQgEgEgCgFQgCgGAAgIIgBgZQgCgJgCgFQgDgFgDgBQgDgBgIAAIABBDQgFAFgJADQgJADgIAAIgDAAg");
	this.shape.setTransform(7.6,9.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFC101","#F7E479","#D6D7CC"],[0,0.435,1],0,-7.7,0,7.8).s().p("Ag0BdQgHgBgEgFQgDgEgDgHQgCgIAAgLQgCg5AAgwQAAgNgDgaQAWgHAMAAQAOAAAHAGQADADACAFQACAFAAAHIgCBQQAHgWAQg8QAFgOAJgFQAIgFAQAAQAOAAAIAGQAEADACAFQACAGAAAGIAABtQABAiABAHQgDAFgIAEQgKAEgOAAQgJAAgFgDQgFgCgDgFQgEgHAAgSIABhGQgDAHgFATIgJAjQgGAXgGAHQgFAHgGADQgHAEgHAAIgEAAQgGAAgFgCg");
	this.shape_1.setTransform(24.3,9.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFC101","#F7E479","#D6D7CC"],[0,0.435,1],0,-7.3,0,7.4).s().p("AABBfQgbgDgQgNQgGgFgGgGQgFgHgEgJQgEgKgDgMQgCgNAAgPQgBgNAFgZQADgMAMgRQAJgMANgHQALgHAOgCQALgDANACQAMACAKAGQALAGAFAJQAGAKgBAMQAAAFgDAFQgEAFgFADQgFAEgHABQgGABgGgBQABgKgGgFQgEgEgHAAQgGAAgDAEQgFAEgDAHQgDAHgCAJQgBAJABAHQAAAKADAIQACAJAEAGQAEAHAFADQAHAEAIgBQAKgBAHgDQAKgEANgJQAGABADADQAEAEAAAFQACAKgJAMIgLAMQgGAFgIAEQgJAEgJACQgJACgJAAIgEAAg");
	this.shape_2.setTransform(40.9,9.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFC101","#F7E479","#D6D7CC"],[0,0.435,1],0,-7.5,0,7.6).s().p("AgrBfQgMAAgGgGQgJgHgBgNQgCgOACgrIAAgzQgBgTgDgbQA3gWAGAlQACANAAASIAAAYQAKgCADgIQAEgHACgNIADgrQATgGAJAAQAIAAAGADQAGAEADAJQAEALgCAOQgCAMgGAMQgEALgIAHQgIAIgHABQALAAAIACQAIADAFAFQAFAFACAHQADAGABAHQAAAjAEAPQgFAGgLADQgKAEgMgBQgLgCgHgHQgEgEgCgFQgCgGAAgIIgBgZQgCgJgCgFQgCgFgEgBQgEgBgHAAIABBDQgFAFgJADQgJADgIAAIgCAAg");
	this.shape_3.setTransform(57,9.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FFC101","#F7E479","#D6D7CC"],[0,0.435,1],0,-7.1,0,7.2).s().p("AgsBZQgIgEgEgHQgFgHgBgHQAAgIADgFQAEgGAIgCQAGAEANACQANACALgCQAMgDAHgHQADgFACgFQABgGgBgHQgFAEgJADQgGACgLABQgKABgJgBQgKgCgGgEQgKgGgEgMQgEgHgCgPIgBgbQgBgSgCgLQADgGAGgFQAGgEAIgCQAJgCAIABQAIACAGAHQAGAIABALIAAAZQAAAeAJgBQAPAAgGg7QAAgJAGgHQAFgFAJgCQAIgCAIACQAJACAFAGQAGAGADAPQACALAAAQQADA8gJAaQgDALgFAHQgGAJgHAGQgIAHgLADQgLAEgNABIgGAAQgZAAgNgHg");
	this.shape_4.setTransform(72.9,9.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80,19.3);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFC101","#FFE663","#DADCD2"],[0,0.408,1],0,-7.4,0,7.5).s().p("AAVBZQgEgEgCgGQgCgHgBgJIAAhvQAAgEgLABQgJABgEAFQACAyABAjQAHA3gnAAQgKAAgHgDQgGgDgDgGQgDgIAAgWIgBhiQAAgTgCgQQANgFAcgGQAUgDAVAAQAOgBALABQALACAJADQAKAEAEAGQAFAHAAALIABCPQgEAFgJAEQgKAFgLAAQgMAAgHgHg");
	this.shape.setTransform(7.5,9.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFC101","#FFE663","#DADCD2"],[0,0.408,1],0,-7.6,0,7.7).s().p("AgYBdQgOgDgLgIQgGgFgEgHQgFgHgEgKQgDgKgCgMQgCgNAAgQQAAgQAFgbQADgKAEgHQAEgIAFgGQAFgGAGgEIAOgHQAOgGAPAAQARAAANAFIANAHQAGAEAFAGQAGAGAEAIQAEAHACAKQAGAcAAAQQAAAPgCANQgCANgEAJQgDAKgGAHQgEAHgGAFQgLAIgOAEQgLACgNAAIgDABQgMAAgJgDgAAAguQgEAAgEAIQgFATAAATQgBAXAFAVQADAKAGAAQAEAAADgEQADgEACgGQAEgOAAgaQAAgugNAAIgDAAg");
	this.shape_1.setTransform(23.9,9.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFC101","#FFE663","#DADCD2"],[0,0.408,1],0.1,-7.6,0.1,7.6).s().p("AgsBfQgKAAgHgGQgIgHgCgNQgCgOACgrIAAgzQgBgTgCgbQA2gWAGAlQACANAAASIABAYQAJgCADgIQAEgHACgNIACgrQAVgGAIAAQAIAAAGADQAGAEADAJQAEALgCAOQgCAMgGAMQgEALgIAHQgIAIgHABQALAAAIACQAIADAFAFQAFAFADAHQACAGABAHQAAAjAEAPQgFAGgKADQgLAEgMgBQgLgCgHgHQgEgEgCgFQgCgGAAgIIgCgZQgBgJgCgFQgCgFgEgBQgDgBgIAAIABBDQgFAFgJADQgJADgIAAIgDAAg");
	this.shape_2.setTransform(40.5,9.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFC101","#FFE663","#DADCD2"],[0,0.408,1],0,-7.6,0,7.7).s().p("AgYBdQgOgDgLgIQgGgFgEgHQgFgHgEgKQgDgKgCgMQgCgNAAgQQAAgQAFgbQADgKAEgHQAEgIAFgGQAFgGAGgEIAOgHQAOgGAPAAQARAAANAFIANAHQAGAEAFAGQAGAGAEAIQAEAHACAKQAGAcAAAQQAAAPgCANQgCANgEAJQgDAKgGAHQgEAHgGAFQgLAIgOAEQgLACgNAAIgDABQgMAAgJgDgAAAguQgEAAgEAIQgFATAAATQgBAXAFAVQADAKAGAAQAEAAADgEQADgEACgGQAEgOAAgaQAAgugNAAIgDAAg");
	this.shape_3.setTransform(57,9.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FFC101","#FFE663","#DADCD2"],[0,0.408,1],0,-6.9,0,7).s().p("AgoBgQgLgBgHgGQgHgHAAgNIAAhQQgBgtgCgiQAcgEAUgBIAVABIAVADQALACAIAFQAIAEAGAHQAHAHADAKQAEAKAAANQAAATgFANQgFALgKAGQgKAHgPACQgNADgSgBQABAvADALQgGAFgLADQgIADgIAAIgEAAgAgHgzQgBALABAiQAIABAFgGQAFgGAAgNQAAgKgEgGQgCgEgEgBIgDgBIgFABg");
	this.shape_4.setTransform(72.9,9.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FFC101","#FFE663","#DADCD2"],[0,0.408,1],0.1,-10.4,0.1,10.5).s().p("AgKBeQgFgCgEgDQgFgFgDgKIgJg7IgFghQgDgSgEgHQAJBXAAARQgBAIgCAHQgCAGgEAEQgFAFgFACQgGACgHAAQgGAAgGgCQgGgDgDgFQgEgFgCgHQgCgGAAgJIAAhnQAAgRgDgWIAUgGQAPgEAMAAQAQAAAKAEQAGADAEAEQAFAEADAGQADAGACAPIAFAeIAEAuIANhPQACgKAFgIQADgHAHgFQAFgFAHgCQAHgDAHAAQAHAAAHADQAHACAGAEQAFAFAEAGQADAGABAIIADBDIABAoQAAAWACANQgDAGgIAEQgJAEgKAAQgKAAgFgDQgGgDgDgFQgGgIAAgLQgBgKABgjIABg/QgMBTgCAcQgBAHgDAGQgDAFgEAEQgHAGgLAAQgGAAgGgCg");
	this.shape_5.setTransform(91.7,9.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#FFC101","#FFE663","#DADCD2"],[0,0.408,1],0,-7.7,0,7.8).s().p("Ag0BdQgHgBgEgFQgDgEgDgHQgCgIAAgLQgCg5AAgwQAAgNgDgaQAWgHAMAAQAOAAAHAGQADADACAFQACAFAAAHIgCBQQAHgWAQg8QAFgOAJgFQAIgFAQAAQAOAAAIAGQAEADACAFQACAGAAAGIAABtQABAiABAHQgDAFgIAEQgKAEgOAAQgJAAgFgDQgFgCgDgFQgEgHAAgSIABhGQgDAHgFATIgJAjQgGAXgGAHQgFAHgGADQgHAEgHAAIgEAAQgGAAgFgCg");
	this.shape_6.setTransform(111.4,9.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,119.2,19.4);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.palec();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,45,58);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rukakursor();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,106,121);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#DA6236").ss(20,1,1).p("ACpnvQj1FahcKF");
	this.shape.setTransform(18,59.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#DA6236").ss(20,1,1).p("AidHtQBUqFDnlU");
	this.shape_1.setTransform(16.9,59.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#DA6236").ss(20,1,1).p("Ah9HlQA+qFC9lE");
	this.shape_2.setTransform(13.6,60.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#DA6236").ss(20,1,1).p("AhHHZQAZqIB2kp");
	this.shape_3.setTransform(8.2,61.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#DA6236").ss(20,1,1).p("AAHHHQgZqJATkE");
	this.shape_4.setTransform(0.2,63.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#DA6236").ss(20,1,1).p("AhdnKQBqEJBRKM");
	this.shape_5.setTransform(-8.5,62.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#DA6236").ss(20,1,1).p("AilnNQDQEOB7KN");
	this.shape_6.setTransform(-15.6,62.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#DA6236").ss(20,1,1).p("AjYnPQEZERCYKO");
	this.shape_7.setTransform(-20.7,62.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#DA6236").ss(20,1,1).p("Aj2nQQFDESCqKP");
	this.shape_8.setTransform(-23.7,62.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#DA6236").ss(20,1,1).p("AkAnRQFRETCwKQ");
	this.shape_9.setTransform(-24.8,62.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#DA6236").ss(20,1,1).p("AD4HRQiqqPlFkS");
	this.shape_10.setTransform(-23.9,62.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#DA6236").ss(20,1,1).p("ADdHQQiaqPkfkQ");
	this.shape_11.setTransform(-21.2,62.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#DA6236").ss(20,1,1).p("ACwHNQiAqNjfkM");
	this.shape_12.setTransform(-16.7,62.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#DA6236").ss(20,1,1).p("ABxHKQhaqMiHkH");
	this.shape_13.setTransform(-10.3,62.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#DA6236").ss(20,1,1).p("AAgHFQgoqKgXj/");
	this.shape_14.setTransform(-2.2,63.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#DA6236").ss(20,1,1).p("AgnHUQAGqHBJkg");
	this.shape_15.setTransform(5,61.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#DA6236").ss(20,1,1).p("AhfHgQArqGCUk5");
	this.shape_16.setTransform(10.7,60.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#DA6236").ss(20,1,1).p("AiIHpQBGqGDLlL");
	this.shape_17.setTransform(14.7,59.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#DA6236").ss(20,1,1).p("AigHuQBWqFDrlW");
	this.shape_18.setTransform(17.2,59.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9,-0.5,53.9,119.2);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.golova();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.595,0.595);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,48.8,58.9);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AA8AZQgLgDgIgGQgHgHACgGQACgEAJgDQAKgCALADQAMADAHAFQAIAHgCAGQgCAGgKADIgGAAQgHAAgIgCgAhDAEQgMgDgHgFQgHgGABgHQACgGAKgCQAJgCAMADQALADAIAHQAHAGgCAGQgBAFgKACIgHABQgHAAgHgCg");
	this.shape.setTransform(9.4,2.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.8,5.6);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.noga();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.595,0.595);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,67.9,150);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bedro();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.595,0.595);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,56,71.4);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ruka();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.595,0.595);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,85.1,38.1);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.plecho();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.595,0.595);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,61.3,37.5);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.telo();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.595,0.595);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,112.5,86.3);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.siski();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.582,0.582);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,41.4,55.3);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.jopa();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.595,0.595);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,69.1,73.2);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.past();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.449,0.449);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,22,15.3);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1F1218").s().p("ABAASQgSgCgMgJQgMgHABgIQAAgIAOgBIAggBIAgABQAKAAABAIQgBAJgPAJQgNAKgOAAIgFgBgAhFASQgSgCgMgJQgMgHAAgIQAAgIAPgBIAggBIAgABQAKAAABAIQgBAJgPAJQgNAKgOAAIgFgBg");
	this.shape.setTransform(11.2,1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,22.4,3.9);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.kot();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.377,0.377);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,52.8,75.9);


(lib.Анимация5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(-320,-152.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320,-152.5,640,305);


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


(lib.Символ53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ54();
	this.instance.parent = this;
	this.instance.setTransform(26.2,22.7,1,1,0,0,0,26.2,22.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:40.2,y:19.7},4).to({x:26.2,y:22.7},5).to({x:40.2,y:19.7},5).to({x:26.2,y:22.7},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,52.5,45.5);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ49();
	this.instance.parent = this;
	this.instance.setTransform(130.8,51.1,1.369,1.369,0,0,0,107.9,14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({scaleX:1.56,scaleY:1.56,x:130.9},5).to({scaleX:1.37,scaleY:1.37,x:130.8},5).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ48();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-82.6,44.7,1.369,1.369,0,0,0,22.6,19.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({regX:22.4,scaleX:1.75,scaleY:1.75,x:-82.9},5).to({regX:22.6,scaleX:1.37,scaleY:1.37,x:-82.6},5).wait(6));

	// Слой 1
	this.instance_2 = new lib.Символ47();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-202.9,48.3,1.369,1.369,0,0,0,40.1,21.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:21.9,scaleX:1.65,scaleY:1.65,x:-202.7,y:48.5},4).to({regY:21.8,scaleX:1.37,scaleY:1.37,x:-202.9,y:48.3},5).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-257.8,19.9,536.5,58.4);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ39();
	this.instance.parent = this;
	this.instance.setTransform(27.4,27.1,1,1,0,0,0,16.6,16.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.22,scaleY:1.22},4).to({scaleX:1,scaleY:1},5).wait(6));

	// Слой 3
	this.instance_1 = new lib.Символ41();
	this.instance_1.parent = this;
	this.instance_1.setTransform(27.4,26.7,1,1,0,0,0,3.8,3.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15));

	// Слой 1
	this.instance_2 = new lib.Символ40();
	this.instance_2.parent = this;
	this.instance_2.setTransform(27.2,27.2,1,1,0,0,0,27.2,27.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({scaleX:0.74,scaleY:0.74},5).to({scaleX:1,scaleY:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,56.4,56.4);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация5("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(320,152.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,305);


(lib.Символ36 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ37();
	this.instance.parent = this;
	this.instance.setTransform(320,152.5,1,1,0,0,0,320,152.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:319.9,regY:152.3,scaleX:1.29,scaleY:1.29,x:320.1,y:152.4},9).to({regX:320,regY:152.5,scaleX:1,scaleY:1,x:320,y:152.5},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,305);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ28();
	this.instance.parent = this;
	this.instance.setTransform(59.6,9.7,1,1,0,0,0,59.6,9.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ33();
	this.instance_1.parent = this;
	this.instance_1.setTransform(60.8,10.9,1,1,0,0,0,59.6,9.7);
	this.instance_1.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance_1.cache(-2,-2,123,23);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.8,-0.8,126,26);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ30();
	this.instance.parent = this;
	this.instance.setTransform(-134.2,-25.5,1,1,0,0,0,59.6,9.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-194.6,-36,127,28);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ29();
	this.instance.parent = this;
	this.instance.setTransform(55.9,-33.2,0.683,0.683,0,0,0,40,9.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ32();
	this.instance_1.parent = this;
	this.instance_1.setTransform(56.7,-32.6,0.678,0.678,0,0,0,40,9.6);
	this.instance_1.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance_1.cache(-2,-2,84,23);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(27.6,-41.1,62,21);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ52();
	this.instance.parent = this;
	this.instance.setTransform(24.2,6.6,1,1,0,0,0,24.2,6.6);
	this.instance.alpha = 0.699;
	this.instance.filters = [new cjs.BlurFilter(10, 10, 1)];
	this.instance.cache(-2,-2,53,17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-5,62,27);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ19();
	this.instance.parent = this;
	this.instance.setTransform(-140.3,135.7,1,1,-30,0,0,0.4,54.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-175.9,65.9,106.3,130.2);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 6
	this.instance = new lib.Символ23();
	this.instance.parent = this;
	this.instance.setTransform(31.5,45,1,1,0,0,0,22.5,29);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:29.1,rotation:-8.2,x:26.9,y:47.8},9).to({regY:29,rotation:0,x:31.5,y:45},10).wait(1));

	// Слой 4
	this.instance_1 = new lib.Символ20();
	this.instance_1.parent = this;
	this.instance_1.setTransform(156.2,-103.7,1,1,0,0,0,22.2,46.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-8.2,x:129.1,y:-117.2},9).to({rotation:0,x:156.2,y:-103.7},10).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ22();
	this.instance_2.parent = this;
	this.instance_2.setTransform(53,64.5,1,1,0,0,0,53,60.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:60.6,rotation:-8.2,x:51,y:64.1},9).to({regY:60.5,rotation:0,x:53,y:64.5},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.9,-84.7,148,209.7);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ38();
	this.instance.parent = this;
	this.instance.setTransform(27.2,27.2,1,1,0,0,0,27.2,27.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:54.8,y:15.6},4).to({x:69.1,y:44.2},5).to({x:28.6,y:70.7},5).to({x:-18.5,y:46},5).to({x:-12.2,y:-2.6},5).to({x:33.4,y:-14},5).to({x:79.3,y:15.6},5).to({x:33.4,y:-14},5).to({x:-12.2,y:-2.6},5).to({x:-18.5,y:46},5).to({x:28.6,y:70.7},5).to({x:69.1,y:44.2},5).to({x:54.8,y:15.6},5).to({x:27.2,y:27.2},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.1,-20.1,112.9,95.7);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ16();
	this.instance.parent = this;
	this.instance.setTransform(13.1,29,1,1,0,0,0,9.3,2.8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({alpha:1},2).to({alpha:0},1).wait(14).to({alpha:1},2).to({alpha:0},1).wait(42).to({alpha:1},2).to({alpha:0},1).wait(13));

	// Слой 1
	this.instance_1 = new lib.Символ17();
	this.instance_1.parent = this;
	this.instance_1.setTransform(24.4,29.4,1,1,0,0,0,24.4,29.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,48.8,58.9);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ5();
	this.instance.parent = this;
	this.instance.setTransform(18.3,21.8,1,1,0,0,0,11.2,1.9);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.1,y:20.1},19).to({scaleY:1,y:21.8,alpha:1},2).to({scaleY:0.1,y:20.1,alpha:0},1).wait(22).to({scaleY:1,y:21.8,alpha:1},2).to({scaleY:0.1,y:20.1,alpha:0},1).to({scaleY:1,y:21.8},22).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(26.4,37.9,1,1,0,0,0,26.4,37.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(70));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,52.8,75.9);


(lib.Символ2 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ6();
	this.instance.parent = this;
	this.instance.setTransform(23,42.3,1,0.039,0,0,0,11,7.7);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({regY:7.6,scaleY:1,y:46.1,alpha:1},5).to({regY:7.7,scaleY:0.04,y:42.3,alpha:0},5).wait(6));

	// Слой 1
	this.instance_1 = new lib.Символ3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(30.4,52.9,1,1,0,0,0,26.4,37.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4,15,52.8,75.9);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// kot
	this.kot = new lib.Символ2();
	this.kot.parent = this;
	this.kot.setTransform(16.2,57.5,1,1,0,0,0,31.7,45.5);

	this.timeline.addTween(cjs.Tween.get(this.kot).to({regY:45.6,rotation:4.9,x:19.5,y:62},9).to({regY:45.5,rotation:0,x:16.2,y:49.2},5,cjs.Ease.get(-1)).to({y:47.9},5).to({y:55.1},5,cjs.Ease.get(1)).to({y:57.5},10).wait(1));

	// Слой 2
	this.instance = new lib.Символ21();
	this.instance.parent = this;
	this.instance.setTransform(17.8,99,1,1,0,0,0,24.2,6.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:15,x:16.9,y:101.2},9).to({rotation:0,x:17.8,y:96.3},5).to({scaleX:0.88,scaleY:0.87,x:16.1,y:95.4},5).to({scaleX:1,scaleY:1,x:17.8,y:96.3},5).to({y:99},10).wait(1));

	// jopa.png
	this.instance_1 = new lib.Символ7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-3.5,118.7,1,1,0,-0.3,0.5,10.9,24.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:10.8,regY:24.6,skewX:6.7,skewY:7.5,x:-4.3,y:122.9},9).to({regY:24.5,skewX:-4.7,skewY:-3.9,x:-1.7,y:118.3},5).to({skewY:-3.9},5).wait(5).to({regX:10.9,skewX:-0.3,skewY:0.5,x:-3.5,y:118.7},10).wait(1));

	// siski.png
	this.instance_2 = new lib.Символ8();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-64.5,97.5,1,1,0,-0.3,0.5,20.7,18.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:20.4,regY:19.1,scaleY:1,skewX:-0.4,skewY:4.1,x:-66.2,y:99.5},9).to({regX:20.6,regY:18.9,scaleY:1,skewX:2,skewY:0.5,x:-64.5,y:97.5},5).to({regX:20.7,regY:18.8,skewX:-0.3},5).to({skewX:-0.3},5).wait(11));

	// telo.png
	this.instance_3 = new lib.Символ9();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-0.9,112.1,1,1,0,-0.3,0.5,92.5,60.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:60.8,skewX:2.5,skewY:3.3,x:-3.9,y:116.4},9).to({regY:60.9,skewX:-0.3,skewY:0.5,x:-0.9,y:112.1},5).to({skewX:-0.3},5).wait(16));

	// plecho.png
	this.instance_4 = new lib.Символ10();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-83.6,61.9,1,1,0,0,0,54.6,6.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regY:6.4,rotation:-2.7,x:-84.7,y:62.3},9).to({regY:6.3,rotation:0,x:-83.6,y:61.9},5).wait(21));

	// ruka.png
	this.instance_5 = new lib.Символ11();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-133.8,85.5,1,1,0,0,0,83.8,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:83.7,rotation:1.7,x:-134,y:88.1},9).to({regX:83.8,rotation:0,x:-133.8,y:85.5},5).wait(21));

	// bedro.png
	this.instance_6 = new lib.Символ12();
	this.instance_6.parent = this;
	this.instance_6.setTransform(16,150.3,1,1,0,-0.3,0.5,37.6,7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:37.5,regY:7.2,skewX:14.3,skewY:15.1,x:13.9,y:156.1},9).to({regX:37.6,regY:7,skewX:-0.3,skewY:0.5,x:17.6,y:150.3},5).to({skewX:-0.3},5).wait(5).to({x:16},10).wait(1));

	// noga.png
	this.instance_7 = new lib.Символ13();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-8.9,212.8,1,1,0,-0.3,0.5,54,16.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:53.9,skewX:-10.3,skewY:-9.5,x:-23.1,y:212},9).to({regX:54,skewX:-0.3,skewY:0.5,x:-7.1,y:212.8},5).to({skewX:-0.3},5).wait(5).to({x:-8.9},10).wait(1));

	// golova.png
	this.instance_8 = new lib.Символ14();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-76.9,55.6,1,1,0,0,0,31.1,52.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({rotation:-6.2,x:-78.7,y:56.8},9).to({rotation:0,x:-76.9,y:55.6},5).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-217.6,3,272.5,343.2);


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


(lib.Символ55 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ53();
	this.instance.parent = this;
	this.instance.setTransform(26.2,22.7,1,1,0,0,0,26.2,22.7);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).to({alpha:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,52.5,45.5);


(lib.Символ50 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ46();
	this.instance.parent = this;
	this.instance.setTransform(298,3.5,1,1,0,0,0,40.2,21.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-117.3},9).to({y:3.5},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,1.5,536.5,58.4);


(lib.Символ44 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ15();
	this.instance.parent = this;
	this.instance.setTransform(27.2,27.2,1,1,0,0,0,27.2,27.2);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).to({alpha:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,56.4,56.4);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ38();
	this.instance.parent = this;
	this.instance.setTransform(-276.2,164.9,1,1,0,0,0,27.2,27.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-110.4,y:102.9},12,cjs.Ease.get(-1)).to({x:55.3,y:40.8},12,cjs.Ease.get(1)).to({x:-135.8,y:36.7},13,cjs.Ease.get(-1)).to({x:-312.2,y:32.8},12,cjs.Ease.get(1)).to({x:-108.7,y:104.4},13,cjs.Ease.get(-1)).to({x:79.2,y:170.5},12,cjs.Ease.get(1)).to({x:55.2,y:104.4},12,cjs.Ease.get(-1)).to({x:27.2,y:27.2},14,cjs.Ease.get(1)).to({x:-118.4,y:93.3},12,cjs.Ease.get(-1)).to({x:-276.2,y:164.9},13,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-304.4,136.7,56.4,56.4);


(lib.Символ35 = function(mode,startPosition,loop) {
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
	this.baba2 = new lib.Символ1();
	this.baba2.parent = this;
	this.baba2.setTransform(546.6,157.7,0.973,0.973,0,0,0,94.5,165);

	this.timeline.addTween(cjs.Tween.get(this.baba2).to({regX:94.7,regY:164.9,scaleX:1.2,scaleY:1.2,x:571.5,y:165.2},9).to({regX:94.5,regY:165,scaleX:0.97,scaleY:0.97,x:546.6,y:157.7},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(242.8,0,265.3,334);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ26();
	this.instance.parent = this;
	this.instance.setTransform(30.5,132.5,2.678,2.678,0,0,0,40,9.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.4,153.7,42);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ27();
	this.instance.parent = this;
	this.instance.setTransform(174.8,252.5,2.022,2.022,0,0,0,59.6,9.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:2.19,scaleY:2.19,x:192.6,y:260.1},4,cjs.Ease.get(-1)).to({regY:9.8,scaleX:2.4,scaleY:2.4,x:214.6,y:269.6},5,cjs.Ease.get(1)).to({scaleX:2.21,scaleY:2.21,x:194.7,y:261.1},5,cjs.Ease.get(-1)).to({regY:9.7,scaleX:2.02,scaleY:2.02,x:174.8,y:252.5},5,cjs.Ease.get(1)).to({scaleX:2.21,scaleY:2.21,x:194.8,y:261},5,cjs.Ease.get(-1)).to({regY:9.8,scaleX:2.4,scaleY:2.4,x:214.6,y:269.6},5,cjs.Ease.get(1)).to({scaleX:2.21,scaleY:2.21,x:194.7,y:261},5,cjs.Ease.get(-1)).to({regY:9.7,scaleX:2.02,scaleY:2.02,x:174.8,y:252.5},5,cjs.Ease.get(1)).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ31();
	this.instance_1.parent = this;
	this.instance_1.setTransform(53.6,249.2,1.312,1.312,0,0,0,73,66.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.22,scaleY:1.22,x:44.3,y:243.2},4,cjs.Ease.get(-1)).to({regX:73.2,scaleX:1.12,scaleY:1.12,x:32.8,y:235.7},5,cjs.Ease.get(1)).to({regX:73.1,scaleX:1.21,scaleY:1.21,x:43.2,y:242.4},5,cjs.Ease.get(-1)).to({regX:73,scaleX:1.31,scaleY:1.31,x:53.6,y:249.2},5,cjs.Ease.get(1)).to({scaleX:1.21,scaleY:1.21,x:43.2,y:242.5},5,cjs.Ease.get(-1)).to({regX:73.2,scaleX:1.12,scaleY:1.12,x:32.8,y:235.7},5,cjs.Ease.get(1)).to({regX:73.1,scaleX:1.21,scaleY:1.21,x:43.2,y:242.4},5,cjs.Ease.get(-1)).to({regX:73,scaleX:1.31,scaleY:1.31,x:53.6,y:249.2},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-337.5,161.7,493.9,54.8);


(lib.Символ24 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ18();
	this.instance.parent = this;
	this.instance.setTransform(81.3,131.5,1,1,0,0,0,53,60.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).to({alpha:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.6,-13.7,148,209.7);


(lib.sprite112 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol16();
	this.instance.parent = this;
	this.instance.setTransform(1.5,21.8,0.85,0.85,0,0,0,30,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[1.5,21.7,1.5,21.3,1.5,20.9,1.5,15.3,5.6,11.2,9.7,7.1,15.3,7.1,21.1,7.1,25.2,11.2,29.3,15.3,29.3,20.9,29.3,26.7,25.2,30.8,21.1,34.9,15.3,34.9,9.7,34.9,5.6,30.8,3.3,28.5,2.3,25.7]}},29).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24,-3.7,51,51);


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
	this.instance = new lib.Символ25();
	this.instance.parent = this;
	this.instance.setTransform(397.2,-152,1,1,0,0,0,59.6,9.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-24.6},9).to({y:-152},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,495.8,54.7);


(lib.Символ43 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ42();
	this.instance.parent = this;
	this.instance.setTransform(330.6,-110.5,1,1,0,0,0,27.2,27.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},9).to({alpha:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,56.4,56.4);


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
	this.instance_1 = new lib.Symbol26();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-92.9,0.6,1,1,0,0,0,66.8,11.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

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

	this.timeline.addTween(cjs.Tween.get(this.mouse).to({x:314.5},9).to({x:82.5},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,-0.9,165,35.2);


// stage content:



(lib.kormi_kisku640x305 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		stage.canvas.style.cursor = "none";
		this.kursor.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
			this.kursor.x = stage.mouseX/window.devicePixelRatio;
			this.kursor.y = stage.mouseY/window.devicePixelRatio;
		}
		
		stage.canvas.addEventListener("mouseover", fl_Clickover.bind(this));
		
		function fl_Clickover()
		{
		    this.baba.baba2.kot.gotoAndPlay(1);
		    this.baba.gotoAndPlay(1);
		    this.bg.gotoAndPlay(1);
			this.mouse.gotoAndPlay(1);
			this.text.gotoAndPlay(1);
			this.text2.gotoAndPlay(1);
			this.pricel.gotoAndPlay(1);
			this.pricel2.gotoAndPlay(1);
			this.kursor.gotoAndPlay(1);
			this.strelka.gotoAndPlay(1);
			
			
			
		}
		
		stage.canvas.addEventListener("mouseout", fl_Clickout.bind(this));
		
		function fl_Clickout()
		{
		    this.baba.baba2.kot.gotoAndPlay(10);
		    this.baba.gotoAndPlay(10);
		    this.bg.gotoAndPlay(10);
			this.mouse.gotoAndPlay(10);
			this.text.gotoAndPlay(10);
			this.text2.gotoAndPlay(10);
			this.pricel.gotoAndPlay(10);
			this.pricel2.gotoAndPlay(10);
			this.kursor.gotoAndPlay(10);
			this.strelka.gotoAndPlay(10);
			
			
		}
		
		
		
		stage.canvas.style.cursor = "none";
		this.pricel2.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor_2.bind(this));
		
		function fl_CustomMouseCursor_2() {
			this.pricel2.x = stage.mouseX/window.devicePixelRatio;
			this.pricel2.y = stage.mouseY/window.devicePixelRatio;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// strelka
	this.strelka = new lib.Символ55();
	this.strelka.parent = this;
	this.strelka.setTransform(464.5,71.5,1,1,0,0,0,26.2,22.7);

	this.timeline.addTween(cjs.Tween.get(this.strelka).wait(1));

	// pricel2
	this.pricel2 = new lib.Символ44();
	this.pricel2.parent = this;
	this.pricel2.setTransform(318.2,248.2,0.882,0.882,0,0,0,69.9,138.7);

	this.timeline.addTween(cjs.Tween.get(this.pricel2).wait(1));

	// pricel
	this.pricel = new lib.Символ43();
	this.pricel.parent = this;
	this.pricel.setTransform(293.4,140.5,1,1,0,0,0,164.8,-27.6);

	this.timeline.addTween(cjs.Tween.get(this.pricel).wait(1));

	// kursor
	this.kursor = new lib.Символ24();
	this.kursor.parent = this;
	this.kursor.setTransform(311,247.7,0.673,0.673,0,0,0,84.9,81.6);

	this.timeline.addTween(cjs.Tween.get(this.kursor).wait(1));

	// text2
	this.text2 = new lib.Символ50();
	this.text2.parent = this;
	this.text2.setTransform(324.3,392.6,1,1,0,0,0,268.2,29.9);

	this.timeline.addTween(cjs.Tween.get(this.text2).wait(1));

	// text
	this.text = new lib.Символ51();
	this.text.parent = this;
	this.text.setTransform(339.9,261.3,1,1,0,0,0,256.1,11.1);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// Слой 7
	this.instance = new lib.Символ34();
	this.instance.parent = this;
	this.instance.setTransform(320.3,273.7,1,1,0,0,0,330,35.5);
	this.instance.alpha = 0.441;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// mouse
	this.mouse = new lib.Символ45();
	this.mouse.parent = this;
	this.mouse.setTransform(547.3,25.8,1,1,0,0,0,82.5,16.6);

	this.timeline.addTween(cjs.Tween.get(this.mouse).wait(1));

	// baba
	this.baba = new lib.Символ35();
	this.baba.parent = this;
	this.baba.setTransform(186.8,192.5,1,1,0,0,0,273.3,167);

	this.timeline.addTween(cjs.Tween.get(this.baba).wait(1));

	// bg
	this.bg = new lib.Символ36();
	this.bg.parent = this;
	this.bg.setTransform(320,152.5,1,1,0,0,0,320,152.5);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(310.3,152.5,660,422.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;