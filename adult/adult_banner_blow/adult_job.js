(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1024,
	height: 768,
	fps: 30,
	color: "#FFFFFF",
	manifest: [
		{src:"images/a1.png?1461331687715", id:"a1"},
		{src:"images/bg.jpg?1461331687715", id:"bg"},
		{src:"images/body4.png?1461331687715", id:"body4"},
		{src:"images/chest.png?1461331687715", id:"chest"},
		{src:"images/face.png?1461331687716", id:"face"},
		{src:"images/o_btn.png?1461331687716", id:"o_btn"},
		{src:"images/p_btn.png?1461331687716", id:"p_btn"}
	]
};



// symbols:



(lib.a1 = function() {
	this.initialize(img.a1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,180,148);


(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1178,812);


(lib.body4 = function() {
	this.initialize(img.body4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,691,767);


(lib.chest = function() {
	this.initialize(img.chest);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,344,177);


(lib.face = function() {
	this.initialize(img.face);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,270,314);


(lib.o_btn = function() {
	this.initialize(img.o_btn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,355,121);


(lib.p_btn = function() {
	this.initialize(img.p_btn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,355,121);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("EgimAAVIgBgXIgChuIAvAAIADBwIABAXIABBAIYEgMIJRgFMAhagARIAwAAIAQgBIgDiOIgBgWIAwAAIAEC9IhDABIgwAAI39ANIpQAEMgiOAASg");
	this.shape.setTransform(3.2,-2.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(51,51,51,0.42)").s().p("AAhBDIJSgEIX4AzIAGhAIAvAAIgIBbgEgg9gADIgBgZMAhVABGIpPAFgEAiDgCMIAtAAIABAWIgOCPIgwAAgEgiwgAHIANiFIAwAAIgLBuIARAAIABAZg");
	this.shape_1.setTransform(-2.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-225,-14.1,450.1,28.3);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("EAh6ABkIgChVIgBgYIgBhAI4KAMIpUAFMghRAARIgwAAIgQAAIAECHIAAAEIgwAAIgEijIBCAAIAxgBIYDgNIJRgEMAiHgASIACBcIABAXIACBUg");
	this.shape.setTransform(-3.2,2.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(51,51,51,0.42)").s().p("EAh3ACAIAIhTIgRgBIgBgZIBDACIgKBrgEgivACAIAAgEIANiHIAwAAIgOCLgAgggcIJTgFIYLAyIABAagEgiXgB/MAh+ABKIpUAEI39gzIgGBAIgwABg");
	this.shape_1.setTransform(2.6,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-225,-12.8,450,25.7);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.286)").s().p("A6aIvQhQAAAAhQIAAu9QAAhQBQAAMA01AAAQBQAAAABQIAAO9QAABQhQAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-177.1,-56,354.3,112);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg();
	this.instance.setTransform(-589,-406);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-589,-406,1178,812);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.body4();
	this.instance.setTransform(-345.5,-383.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-345.5,-383.5,691,767);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.chest();
	this.instance.setTransform(-172,-88.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-172,-88.5,344,177);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.a1();
	this.instance.setTransform(-90,-74);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90,-74,180,148);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.face();
	this.instance.setTransform(-135,-157);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-135,-157,270,314);


(lib.title_txt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text("ЧТО ВЫБИРАЕШЬ? ", "bold 40px 'Arial'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 47;
	this.text.setTransform(-1.1,-74.5);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-204.5,-74.5,410.9,209);


(lib.p_btn_txt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text("ГАЛСТУК", "bold 45px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 52;
	this.text.setTransform(-2,-27.1);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.5,-27.1,209,54.3);


(lib.o_btn_txt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text("МИНЕТ", "bold 45px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 52;
	this.text.setTransform(-2,-27.1);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81.9,-27.1,163.8,54.3);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 17
	this.instance = new lib.Символ17();
	this.instance.setTransform(-2,55.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:60.3},4,cjs.Ease.get(-1)).to({y:65.3},5,cjs.Ease.get(1)).to({y:60.3},5,cjs.Ease.get(-1)).to({y:55.3},5,cjs.Ease.get(1)).wait(1));

	// Символ 16
	this.instance_1 = new lib.Символ16();
	this.instance_1.setTransform(2.1,-56.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-61.5},4,cjs.Ease.get(-1)).to({y:-66.5},5,cjs.Ease.get(1)).to({y:-61.5},5,cjs.Ease.get(-1)).to({y:-56.5},5,cjs.Ease.get(1)).wait(1));

	// Слой 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.749)").s().p("EggzgJcMBBgAA/IAoRfMhCpAAbg");
	this.shape.setTransform(1.7,-2.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-227.1,-69.4,454.2,138.8);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ14();
	this.instance.setTransform(0.7,-4.6);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},17).to({alpha:0},17).wait(1));

	// Слой 1
	this.instance_1 = new lib.p_btn();
	this.instance_1.setTransform(-177.5,-60.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(35));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-177.5,-60.6,355.3,121.1);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ14();
	this.instance.setTransform(-0.3,-4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},17).to({alpha:1},17).wait(1));

	// Слой 1
	this.instance_1 = new lib.o_btn();
	this.instance_1.setTransform(-177.5,-60.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(35));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-177.5,-60.5,355,121);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ6();
	this.instance.alpha = 0.52;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-172,-88.5,344,177);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ4();
	this.instance.setTransform(74.4,134.2,1.083,1.083);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.04,scaleY:1.04,x:78.2,y:131.2},8,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:81.9,y:128.1},8,cjs.Ease.get(1)).to({scaleX:1.04,scaleY:1.04,x:78.1,y:131.1},9,cjs.Ease.get(-1)).to({scaleX:1.08,scaleY:1.08,x:74.4,y:134.2},9,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ3();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:1.8,x:1.5,y:4.8},8,cjs.Ease.get(-1)).to({rotation:4,x:3,y:9.6},8,cjs.Ease.get(1)).to({rotation:1.8,x:1.5,y:4.8},9,cjs.Ease.get(-1)).to({rotation:0,x:0,y:0},9,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-135,-157,306.9,371.4);


(lib.title_frame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.title_txt = new lib.title_txt();
	this.title_txt.setTransform(-49.2,25);

	this.timeline.addTween(cjs.Tween.get(this.title_txt).wait(1));

	// Слой 3 - копия
	this.instance = new lib.Символ18();
	this.instance.setTransform(-61.3,-24.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-288.4,-94,454.2,253.6);


(lib.title = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.title_frame = new lib.title_frame();
	this.title_frame.setTransform(0.5,-31.6,1,1,0,0,0,-61,-21);

	this.timeline.addTween(cjs.Tween.get(this.title_frame).to({scaleX:1.05,scaleY:1.05,rotation:-2.3},4,cjs.Ease.get(-1)).to({regY:-21.1,scaleX:1.1,scaleY:1.1,rotation:-5.4,y:-31.7},5,cjs.Ease.get(1)).to({scaleX:1.05,scaleY:1.05,rotation:-2.6},5,cjs.Ease.get(-1)).to({regY:-21,scaleX:1,scaleY:1,rotation:0,y:-31.6},5,cjs.Ease.get(1)).to({regX:-61.1,scaleX:1.04,scaleY:1.04,rotation:2.8},5,cjs.Ease.get(-1)).to({regX:-61,scaleX:1.08,scaleY:1.08,rotation:6},5,cjs.Ease.get(1)).to({scaleX:1.05,scaleY:1.05,rotation:3.3,x:0.6,y:-31.5},5,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:0,x:0.5,y:-31.6},6,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-226.9,-104.6,454.2,253.6);


(lib.p_btn_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.p_btn_txt = new lib.p_btn_txt();
	this.p_btn_txt.setTransform(-0.6,-1.8);

	this.timeline.addTween(cjs.Tween.get(this.p_btn_txt).wait(1));

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.setTransform(31,26.9,1,1,0,0,0,31,26.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-177.5,-60.6,355.3,121.1);


(lib.o_btn_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.o_btn_txt = new lib.o_btn_txt();
	this.o_btn_txt.setTransform(-0.4,-1.3);

	this.timeline.addTween(cjs.Tween.get(this.o_btn_txt).wait(1));

	// Слой 1
	this.instance = new lib.Символ13();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-177.5,-60.5,355,121);


(lib.bg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ12();
	this.instance.setTransform(0,0,1,1,0,180,0);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},24).to({alpha:0},25).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ12();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-589,-406,1178,812);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ7();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1.05,y:-4},12,cjs.Ease.get(-1)).to({scaleY:1.09,y:-8.1},12,cjs.Ease.get(1)).to({scaleY:1.04,y:-3.9},13,cjs.Ease.get(-1)).to({scaleY:1,y:0},12,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-172,-88.5,344,177);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ8();
	this.instance.setTransform(-115.7,185.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ9();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-345.5,-383.5,691,767);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.setTransform(-96.7,-152.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ2();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-345.5,-383.5,691,767);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#EA6000","#FF8700"],[0,1],-1015.1,0,1015.2,0).s().p("EiemhCsME9NAhdMAAABQQMk9NATsg");
	this.shape.setTransform(-380.9,-664.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#333333","#4D4D4D","#333333"],[0,0.498,1],-1015.1,0,1015.2,0).s().p("EiemAktMAAAhJZME9NAAAMAAABJZg");
	this.shape_1.setTransform(-380.9,616.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(35));

	// Слой 1
	this.instance = new lib.Символ1();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:5.3},9,cjs.Ease.get(-1)).to({y:10},8,cjs.Ease.get(1)).to({y:4.7},9,cjs.Ease.get(-1)).to({y:0},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1396,-1091.4,2030.3,1943.3);


// stage content:



(lib.adult_job = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		var clickkyTAG = clickkyTAG;
				
					window.onmessage = function(message) {
								if(
									typeof message === 'object'
									&& typeof message.data === 'object'
									&& typeof message.data.key === 'string'
									&& message.data.key === 'clickky_banner_83034'
								) {
									
									_this.title.title_frame.title_txt.text.text = message.data.header;
									_this.p_btn.p_btn_txt.text.text = message.data.purple_button;
									_this.o_btn.o_btn_txt.text.text = message.data.orange_button;
									clickkyTAG = message.data.target_url;
								}
							};
		
		function getWindowSize() {
		
			return {
				width: Math.min(document.documentElement.clientWidth, window.innerWidth || 0),
				height: Math.min(document.documentElement.clientHeight, window.innerHeight || 0)
			}
		}
		
		//Resize
		
		window._setCanvasSize = function() {
			
			var windowSize = getWindowSize();
			stage.canvas.width = windowSize.width;
			stage.canvas.height = windowSize.height;
			
			_this.o_btn.x = 0;
			_this.o_btn.y = stage.canvas.height;
			
			_this.p_btn.x = stage.canvas.width;
			_this.p_btn.y = stage.canvas.height;
			
			_this.title.x = stage.canvas.width/3.5;
			_this.title.y = stage.canvas.height/3;
			
			_this.bg.x = stage.canvas.width/2;
			_this.bg.y = stage.canvas.height/2;
			
			_this.main.x = stage.canvas.width;
			_this.main.y = stage.canvas.height;
			
			//Scale
		
			_this.p_btn.scaleX = 0.9;
			_this.p_btn.scaleY = 0.9;
		
			_this.title.scaleX = 1;
			_this.title.scaleY = 1;
		
			_this.o_btn.scaleX = 0.9;
			_this.o_btn.scaleY = 0.9;
		
			_this.bg.scaleX = 1.5;
			_this.bg.scaleY = 1.5;
		
			_this.main.scaleX = 1;
			_this.main.scaleY = 1;
			
			if(stage.canvas.width < 767) {
				
			_this.p_btn.scaleX = 0.38;
			_this.p_btn.scaleY = 0.38;
		
			_this.title.scaleX = 0.5;
			_this.title.scaleY = 0.5;
		
			_this.o_btn.scaleX = 0.38;
			_this.o_btn.scaleY = 0.38;
		
			_this.bg.scaleX = 1.5;
			_this.bg.scaleY = 1.5;
		
			_this.main.scaleX = 0.5;
			_this.main.scaleY = 0.5;
				
			}
			
			if(stage.canvas.width < 435){
				
			_this.title.x = stage.canvas.width/2;
			_this.title.y = stage.canvas.height/8;
				
			}
			
			if(stage.canvas.width < stage.canvas.height){
				
			_this.title.x = stage.canvas.width/2;
			_this.title.y = stage.canvas.height/6;
				
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
	this.title = new lib.title();
	this.title.setTransform(246.8,153.8,1,1,0,0,0,2.3,-31.1);

	this.timeline.addTween(cjs.Tween.get(this.title).wait(1));

	// Слой 4
	this.p_btn = new lib.p_btn_1();
	this.p_btn.setTransform(1023.6,738.7,1,1,0,0,0,239.6,84.4);

	this.timeline.addTween(cjs.Tween.get(this.p_btn).wait(1));

	// Слой 3
	this.o_btn = new lib.o_btn_1();
	this.o_btn.setTransform(-1.2,739.1,1,1,0,0,0,-241.2,84.8);

	this.timeline.addTween(cjs.Tween.get(this.o_btn).wait(1));

	// Слой 2
	this.main = new lib.Символ11();
	this.main.setTransform(1023.6,708.2,1,1,0,0,0,268.1,471.7);

	this.timeline.addTween(cjs.Tween.get(this.main).wait(1));

	// Слой 1
	this.bg = new lib.bg_1();
	this.bg.setTransform(512,384);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-128.5,-470.9,2030.3,1943.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;