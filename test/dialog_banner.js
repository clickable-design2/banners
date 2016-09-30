(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 960,
	height: 960,
	fps: 30,
	color: "#666666",
	opacity: 1.00,
	manifest: [
		{src:"images/app_store.png?1474874464307", id:"app_store"},
		{src:"images/google_play.png?1474874464307", id:"google_play"},
		{src:"images/stars_bitmap.png?1474874464307", id:"stars_bitmap"},
		{src:"images/zagl.png?1474874464307", id:"zagl"}
	]
};



lib.ssMetadata = [];


// symbols:



(lib.app_store = function() {
	this.initialize(img.app_store);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,580,55);


(lib.google_play = function() {
	this.initialize(img.google_play);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,580,55);


(lib.stars_bitmap = function() {
	this.initialize(img.stars_bitmap);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,130,23);


(lib.zagl = function() {
	this.initialize(img.zagl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,400);


(lib.url_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hit
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgtSAoiMAAAhRDMBalAAAMAAABRDg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.stars_mask = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AqJByIAAjjIUTAAIAADjg");
	mask.setTransform(-13,0.5);

	// stars
	this.instance = new lib.stars_bitmap();
	this.instance.parent = this;
	this.instance.setTransform(-78,-11);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78,-11,130,23);


(lib.star_iOS = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// iOS_star_shape
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFB614").s().p("AAABGIhKAtIAUhVIhCg4IBXgIIAhhQIAiBQIBXAIIhCA4IAUBVgAAtBLIgMg1IApghIg2gEIgUgxIgTAxIg2AEIApAhIgMA1IAsgcIAtAcg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.2,-11.5,24.4,23.2);


(lib.iOS_top_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// iOS_tbtn_field
	this.text = new cjs.Text("Магазин", "30px 'Roboto'", "#007FFF");
	this.text.textAlign = "right";
	this.text.lineHeight = 41;
	this.text.parent = this;
	this.text.setTransform(261.3,-14.7);

	this.text_1 = new cjs.Text("Отмена", "30px 'Roboto'", "#838484");
	this.text_1.lineHeight = 41;
	this.text_1.parent = this;
	this.text_1.setTransform(-262.2,-14.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-264.2,-16.7,527.5,39.3);


(lib.iOS_buttom_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// iOS_bbtn_field
	this.text = new cjs.Text("Установить", "30px 'Roboto'", "#007FFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 41;
	this.text.parent = this;
	this.text.setTransform(149,-13.9);

	this.text_1 = new cjs.Text("Подробнее", "30px 'Roboto'", "#838484");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 41;
	this.text_1.parent = this;
	this.text_1.setTransform(-148.5,-13.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EBEBEB").s().p("AgIG4IAAtvIASAAIAANvg");
	this.shape.setTransform(0,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EBEBEB").s().p("EgonAAJIAAgSMBRPAAAIAAASg");
	this.shape_1.setTransform(0.1,-44,1.115,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-289.7,-45,579.8,90);


(lib.cancel_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hit
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AtQGEIAAsHIahAAIAAMHg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.budge = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{iOS:0,Android:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// OS_budge
	this.instance = new lib.app_store();
	this.instance.parent = this;
	this.instance.setTransform(-290,-27.5);

	this.instance_1 = new lib.google_play();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-290,-27.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-290,-27.5,580,55);


(lib.app_title = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// title
	this.text = new cjs.Text("App", "30px 'Roboto'");
	this.text.lineHeight = 41;
	this.text.lineWidth = 251;
	this.text.parent = this;
	this.text.setTransform(-116,-47);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118,-49,255,98.1);


(lib.app_img = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// img
	this.instance = new lib.zagl();
	this.instance.parent = this;
	this.instance.setTransform(-200,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200,-200,400,400);


(lib.app_co = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// company
	this.text = new cjs.Text("Comapny", "20px 'Roboto'", "#838484");
	this.text.lineHeight = 27;
	this.text.lineWidth = 297;
	this.text.parent = this;
	this.text.setTransform(-148.7,-12.5);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150.7,-14.5,301.4,29);


(lib.Android_top_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Android_tbtn_field
	this.text = new cjs.Text("МАГАЗИН", "26px 'Roboto'", "#679E3D");
	this.text.textAlign = "right";
	this.text.lineHeight = 36;
	this.text.parent = this;
	this.text.setTransform(260.7,-15.7);

	this.text_1 = new cjs.Text("ОТМЕНА", "26px 'Roboto'", "#838484");
	this.text_1.lineHeight = 36;
	this.text_1.parent = this;
	this.text_1.setTransform(-262.3,-15.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-264.3,-17.7,527.1,34.5);


(lib.Android_bottom_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Android_bbtn_field
	this.text = new cjs.Text("УСТАНОВИТЬ", "26px 'Roboto'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 36;
	this.text.parent = this;
	this.text.setTransform(130.2,-13.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#679E3D").s().p("AxXFuQgMAAgJgJQgJgIAAgNIAAqfQAAgNAJgIQAJgJAMAAMAivAAAQAMAAAJAJQAJAIAAANIAAKfQAAANgJAIQgJAJgMAAg");
	this.shape.setTransform(126.9,0);

	this.text_1 = new cjs.Text("ПОДРОБНЕЕ", "26px 'Roboto'", "#838484");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 36;
	this.text_1.parent = this;
	this.text_1.setTransform(-161.5,-12.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-241,-36.7,482.1,73.4);


(lib.age_limit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// age
	this.text = new cjs.Text("18+", "15px 'Roboto'");
	this.text.textAlign = "center";
	this.text.lineHeight = 21;
	this.text.parent = this;
	this.text.setTransform(2.4,-8.5);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// frame
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#281709").s().p("AjfCKIAAkTIG/AAIAAETgAjaCFIG1AAIAAkJIm1AAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.4,-13.9,44.9,27.8);


(lib.rating_stars = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// stars
	this.star = new lib.star_iOS();
	this.star.parent = this;
	this.star.setTransform(39.5,0);

	this.star_1 = new lib.star_iOS();
	this.star_1.parent = this;
	this.star_1.setTransform(13.2,0);

	this.star_2 = new lib.star_iOS();
	this.star_2.parent = this;
	this.star_2.setTransform(-13.1,0);

	this.star_3 = new lib.star_iOS();
	this.star_3.parent = this;
	this.star_3.setTransform(-39.4,0);

	this.star_4 = new lib.star_iOS();
	this.star_4.parent = this;
	this.star_4.setTransform(-65.6,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.star_4},{t:this.star_3},{t:this.star_2},{t:this.star_1},{t:this.star}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.8,-11.5,129.5,23.2);


(lib.app_rating = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// full_s
	this.stars_mask = new lib.stars_mask();
	this.stars_mask.parent = this;
	this.stars_mask.setTransform(-86,0.5,1,1,0,0,0,-13.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.stars_mask).wait(1));

	// empty_s
	this.empty_stars = new lib.rating_stars();
	this.empty_stars.parent = this;
	this.empty_stars.setTransform(-86.1,0.5,1,1,0,0,0,-13.2,0);

	this.timeline.addTween(cjs.Tween.get(this.empty_stars).wait(1));

	// rating_q
	this.text = new cjs.Text("5", "15px 'Roboto'", "#838484");
	this.text.lineHeight = 21;
	this.text.lineWidth = 146;
	this.text.parent = this;
	this.text.setTransform(2.2,-7.4);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150.9,-11,300.9,23.6);


(lib.app_data = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// app_title
	this.app_title = new lib.app_title();
	this.app_title.parent = this;
	this.app_title.setTransform(77.4,-51.1);

	this.timeline.addTween(cjs.Tween.get(this.app_title).wait(1));

	// app_img
	this.app_img = new lib.app_img();
	this.app_img.parent = this;
	this.app_img.setTransform(-162.8,4.1,0.485,0.485);

	this.timeline.addTween(cjs.Tween.get(this.app_img).wait(1));

	// age_limit
	this.age_limit = new lib.age_limit();
	this.age_limit.parent = this;
	this.age_limit.setTransform(238.3,-78);

	this.timeline.addTween(cjs.Tween.get(this.age_limit).wait(1));

	// app_co
	this.app_co = new lib.app_co();
	this.app_co.parent = this;
	this.app_co.setTransform(110.2,45.6);

	this.timeline.addTween(cjs.Tween.get(this.app_co).wait(1));

	// app_rating
	this.app_rating = new lib.app_rating();
	this.app_rating.parent = this;
	this.app_rating.setTransform(110.4,87.1);

	this.timeline.addTween(cjs.Tween.get(this.app_rating).wait(1));

	// shape
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EBEBEB").s().p("A5rAKIAAgTMAzXAAAIAAATg");
	this.shape.setTransform(126.5,4.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-259.8,-100.2,550.9,201.3);


(lib.dialog = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"iOS":0,"Android":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// app_data
	this.app_data = new lib.app_data();
	this.app_data.parent = this;
	this.app_data.setTransform(-1,-15.1);

	this.timeline.addTween(cjs.Tween.get(this.app_data).wait(1).to({y:-29.8},0).wait(1));

	// top_buttons
	this.iOS_top_btn = new lib.iOS_top_btn();
	this.iOS_top_btn.parent = this;
	this.iOS_top_btn.setTransform(0,-184.8);

	this.Android_top_btn = new lib.Android_top_btn();
	this.Android_top_btn.parent = this;
	this.Android_top_btn.setTransform(0.4,-185.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.iOS_top_btn}]}).to({state:[{t:this.Android_top_btn}]},1).wait(1));

	// bottom_buttons
	this.iOS_buttom_btn = new lib.iOS_buttom_btn();
	this.iOS_buttom_btn.parent = this;
	this.iOS_buttom_btn.setTransform(0,180.9);

	this.Android_bottom_btn = new lib.Android_bottom_btn();
	this.Android_bottom_btn.parent = this;
	this.Android_bottom_btn.setTransform(18.5,158);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.iOS_buttom_btn}]}).to({state:[{t:this.Android_bottom_btn}]},1).wait(1));

	// background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgrHAjTQg6ABgpgpQgpgpABg6MAAAhCPQgBg6ApgpQApgpA6ABMBWPAAAQA6gBApApQApApgBA6MAAABCPQABA6gpApQgpApg6gBg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Egs1AjTQgMAAgIgIQgKgJABgMMAAAhFrQgBgMAKgIQAIgKAMABMBZrAAAQAMgBAIAKQAKAIgBAMMAAABFrQABAMgKAJQgIAIgMAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-290,-226,580,452);


(lib.d_window = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(1));

	// cancel_btn
	this.cancel_btn = new lib.cancel_btn();
	this.cancel_btn.parent = this;
	this.cancel_btn.setTransform(-205,-187.6);
	new cjs.ButtonHelper(this.cancel_btn, 0, 1, 2, false, new lib.cancel_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.cancel_btn).to({y:-170.6},7,cjs.Ease.get(-1)).to({y:-153.6},7,cjs.Ease.get(1)).wait(1));

	// url_btn
	this.url_btn = new lib.url_btn();
	this.url_btn.parent = this;
	this.url_btn.setTransform(0,-0.5,1,0.871);
	new cjs.ButtonHelper(this.url_btn, 0, 1, 2, false, new lib.url_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.url_btn).to({scaleY:0.94,y:-0.3},7,cjs.Ease.get(-1)).to({scaleY:1,y:0},7,cjs.Ease.get(1)).wait(1));

	// dialog
	this.dialog = new lib.dialog();
	this.dialog.parent = this;
	this.dialog.setTransform(0,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.dialog).to({y:16.5},7,cjs.Ease.get(-1)).to({y:33.5},7,cjs.Ease.get(1)).wait(1));

	// budge
	this.budge = new lib.budge();
	this.budge.parent = this;
	this.budge.setTransform(0,-178);
	this.budge.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.budge).to({y:-205,alpha:0.5},7,cjs.Ease.get(-1)).to({y:-232,alpha:1},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-290,-226.5,580,452);


// stage content:



(lib.dialog_banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		stage.scaleX = stage.scaleY = window.devicePixelRatio;
		var mixTAG = mixTAG;
		var _searchData = null;
		
		 //Size
		
		function getWindowSize() {
		
			return {
				width: Math.min(document.documentElement.clientWidth, window.innerWidth || 0),
				height: Math.min(document.documentElement.clientHeight, window.innerHeight || 0)
			}
		}
		
		// GET
		
		function getQueryParam(paramName) {
		      if (_searchData === null) {
		        _searchData = {};
		    
		        try {
		          var _ = document.location.search.split('?')[1].split('&');
		          for (var i = 0; i < _.length; i++) {
		    
		            var _param = _[i].split('=');
		            _searchData[_param[0]] = _param.length === 2 ? decodeURIComponent(_param[1]) : null;
		          }
		        } catch (e) {}
		      }
		    
		      if (_searchData[paramName] != undefined) {
		        return _searchData[paramName];
		      }
		    }
		
		var appData = _this.d_window.dialog.app_data;
		
		appData.app_img.instance.image.src = getQueryParam('icon');
		appData.app_title.text.text = getQueryParam('title');
		appData.app_co.text.text = getQueryParam('company');
		appData.age_limit.text.text = getQueryParam('age');
		appData.app_rating.text.text = getQueryParam('rating');
		mixTAG = getQueryParam('target_url');
		
		var rate = parseFloat(getQueryParam('rating'));
		if (rate < 0) {rate = 0;}
		if (rate > 5) {rate = 5;}
		var x = (5 - rate) * (appData.app_rating.stars_mask.instance.image.width / 5) * -1;
		appData.app_rating.stars_mask.instance.mask.x = x;
		
		//Resize
		
		window._setCanvasSize = function() {
			
			stage.scaleX = stage.scaleY = window.devicePixelRatio;
			var windowSize = getWindowSize();
			stage.canvas.style.width = windowSize.width + 'px';
			stage.canvas.style.height = windowSize.height + 'px';
			stage.canvas.width = windowSize.width * window.devicePixelRatio;
			stage.canvas.height = windowSize.height * window.devicePixelRatio;
			
			var StageScaleT = 0.5;
			var StageScaleS = windowSize.width / 650;
			var StageScaleSL = windowSize.height / 650;
			
			_this.d_window.x = windowSize.width/2;
			_this.d_window.y = windowSize.height/2;
			_this.d_window.scaleX = _this.d_window.scaleY = StageScaleT;
			
			if (windowSize.width < 420) {
				_this.d_window.scaleX = _this.d_window.scaleY = StageScaleS;
			}
			
			if (windowSize.height < 420) {
				_this.d_window.scaleX = _this.d_window.scaleY = StageScaleSL;
			}
		}
		
		window.addEventListener('orientationchange', _setCanvasSize);
		
			//window.onresize=function(){
				//_setCanvasSize();
			//}
		
			
		//window.onresize();
			
		
		
		//Actions
		
		_this.d_window.alpha = 0;	
		var tween = createjs.Tween.get(this.d_window, {loop: false}).to({alpha:1}, 300).call(BudgeOpen);
		var BudgeOpen = BudgeOpen();	
		function BudgeOpen(){
			_this.d_window.gotoAndPlay(1);
		}
		
		var isMobile = {
		    Android: function() {
		        return navigator.userAgent.match(/Android/i);
		    },
			iOS: function() {
		        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		    },
		};
		
		if( isMobile.iOS() ){}
		
		if( isMobile.Android() ){ 
			_this.d_window.dialog.gotoAndPlay(1);
			_this.d_window.budge.gotoAndPlay(1);
		}
		
		this.d_window.url_btn.addEventListener("click", RedirectUrl);
		function RedirectUrl() {
			window.open(mixTAG, "_blank");
		}
		
		this.d_window.cancel_btn.addEventListener("click", CancelBtn);
		function CancelBtn() {
			stage.canvas.style.display = 'none';
		}
		
		//window.onresize();
		_setCanvasSize();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// d_window
	this.d_window = new lib.d_window();
	this.d_window.parent = this;
	this.d_window.setTransform(480,530.7);

	this.timeline.addTween(cjs.Tween.get(this.d_window).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(670,784.2,580,452);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;