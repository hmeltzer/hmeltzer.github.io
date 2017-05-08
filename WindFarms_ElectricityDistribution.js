(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 960,
	height: 540,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/WindFarms_ElectricityDistribution_atlas_.png?1494283461898", id:"WindFarms_ElectricityDistribution_atlas_"},
		{src:"images/WindFarms_ElectricityDistribution_atlas_2.png?1494283461900", id:"WindFarms_ElectricityDistribution_atlas_2"},
		{src:"images/WindFarms_ElectricityDistribution_atlas_3.png?1494283461903", id:"WindFarms_ElectricityDistribution_atlas_3"},
		{src:"images/WindFarms_ElectricityDistribution_atlas_4.png?1494283461905", id:"WindFarms_ElectricityDistribution_atlas_4"},
		{src:"images/WindFarms_ElectricityDistribution_atlas_5.png?1494283461906", id:"WindFarms_ElectricityDistribution_atlas_5"}
	]
};



lib.ssMetadata = [
		{name:"WindFarms_ElectricityDistribution_atlas_", frames: [[0,0,960,540],[6734,1626,960,540],[962,2168,960,540],[962,3252,960,540],[962,2710,960,540],[962,3794,960,540],[962,4336,960,540],[962,4878,960,540],[962,5420,960,540],[962,5962,960,540],[962,6504,960,540],[962,7046,960,540],[962,7588,960,540],[1924,2168,960,540],[2886,2168,960,540],[3848,2168,960,540],[4810,2168,960,540],[5772,2168,960,540],[6734,2168,960,540],[1924,2710,960,540],[2886,2710,960,540],[3848,2710,960,540],[4810,2710,960,540],[5772,2710,960,540],[6734,2710,960,540],[1924,3252,960,540],[1924,3794,960,540],[1924,4336,960,540],[1924,4878,960,540],[1924,5420,960,540],[1924,5962,960,540],[1924,6504,960,540],[1924,7046,960,540],[1924,7588,960,540],[2886,3252,960,540],[3848,3252,960,540],[4810,3252,960,540],[5772,3252,960,540],[6734,3252,960,540],[2886,3794,960,540],[2886,4336,960,540],[2886,4878,960,540],[2886,5420,960,540],[2886,5962,960,540],[2886,6504,960,540],[2886,7046,960,540],[2886,7588,960,540],[3848,3794,960,540],[4810,3794,960,540],[5772,3794,960,540],[6734,3794,960,540],[3848,4336,960,540],[4810,4336,960,540],[5772,4336,960,540],[6734,4336,960,540],[3848,4878,960,540],[3848,5420,960,540],[3848,5962,960,540],[3848,6504,960,540],[3848,7046,960,540],[3848,7588,960,540],[4810,4878,960,540],[5772,4878,960,540],[6734,4878,960,540],[4810,5420,960,540],[5772,5420,960,540],[6734,5420,960,540],[4810,5962,960,540],[4810,6504,960,540],[4810,7046,960,540],[4810,7588,960,540],[5772,5962,960,540],[6734,5962,960,540],[5772,6504,960,540],[6734,6504,960,540],[5772,7046,960,540],[5772,7588,960,540],[6734,7046,960,540],[6734,7588,960,540],[962,0,960,540],[1924,0,960,540],[2886,0,960,540],[3848,0,960,540],[4810,0,960,540],[5772,0,960,540],[6734,0,960,540],[0,542,960,540],[962,542,960,540],[1924,542,960,540],[2886,542,960,540],[3848,542,960,540],[4810,542,960,540],[5772,542,960,540],[6734,542,960,540],[0,1084,960,540],[0,1626,960,540],[0,2168,960,540],[0,2710,960,540],[0,3252,960,540],[0,3794,960,540],[0,4336,960,540],[0,4878,960,540],[0,5420,960,540],[0,5962,960,540],[0,6504,960,540],[0,7046,960,540],[0,7588,960,540],[962,1084,960,540],[1924,1084,960,540],[2886,1084,960,540],[3848,1084,960,540],[4810,1084,960,540],[5772,1084,960,540],[6734,1084,960,540],[962,1626,960,540],[1924,1626,960,540],[2886,1626,960,540],[3848,1626,960,540],[4810,1626,960,540],[5772,1626,960,540]]},
		{name:"WindFarms_ElectricityDistribution_atlas_2", frames: [[2886,1084,960,540],[1924,1084,960,540],[3848,1084,960,540],[4810,1084,960,540],[5772,1084,960,540],[6734,1084,960,540],[962,1626,960,540],[1924,1626,960,540],[2886,1626,960,540],[3848,1626,960,540],[4810,1626,960,540],[5772,1626,960,540],[6734,1626,960,540],[962,2168,960,540],[962,2710,960,540],[962,3252,960,540],[962,3794,960,540],[962,4336,960,540],[962,4878,960,540],[962,5420,960,540],[962,5962,960,540],[962,6504,960,540],[962,7046,960,540],[962,7588,960,540],[1924,2168,960,540],[2886,2168,960,540],[3848,2168,960,540],[4810,2168,960,540],[5772,2168,960,540],[6734,2168,960,540],[1924,2710,960,540],[2886,2710,960,540],[3848,2710,960,540],[4810,2710,960,540],[5772,2710,960,540],[6734,2710,960,540],[1924,3252,960,540],[1924,3794,960,540],[1924,4336,960,540],[1924,4878,960,540],[1924,5420,960,540],[1924,5962,960,540],[1924,6504,960,540],[1924,7046,960,540],[1924,7588,960,540],[2886,3252,960,540],[3848,3252,960,540],[4810,3252,960,540],[5772,3252,960,540],[6734,3252,960,540],[2886,3794,960,540],[2886,4336,960,540],[2886,4878,960,540],[2886,5420,960,540],[2886,5962,960,540],[2886,6504,960,540],[2886,7046,960,540],[2886,7588,960,540],[3848,3794,960,540],[4810,3794,960,540],[5772,3794,960,540],[6734,3794,960,540],[3848,4336,960,540],[4810,4336,960,540],[5772,4336,960,540],[6734,4336,960,540],[0,0,960,540],[962,0,960,540],[1924,0,960,540],[2886,0,960,540],[3848,0,960,540],[3848,4878,960,540],[3848,5420,960,540],[3848,5962,960,540],[3848,6504,960,540],[3848,7046,960,540],[3848,7588,960,540],[4810,4878,960,540],[5772,4878,960,540],[6734,4878,960,540],[4810,5420,960,540],[5772,5420,960,540],[6734,5420,960,540],[4810,5962,960,540],[4810,6504,960,540],[4810,7046,960,540],[4810,7588,960,540],[5772,5962,960,540],[6734,5962,960,540],[5772,6504,960,540],[6734,6504,960,540],[5772,7046,960,540],[5772,7588,960,540],[6734,7046,960,540],[6734,7588,960,540],[4810,0,960,540],[5772,0,960,540],[6734,0,960,540],[0,542,960,540],[962,542,960,540],[1924,542,960,540],[2886,542,960,540],[3848,542,960,540],[4810,542,960,540],[5772,542,960,540],[6734,542,960,540],[0,1084,960,540],[0,1626,960,540],[0,2168,960,540],[0,2710,960,540],[0,3252,960,540],[0,3794,960,540],[0,4336,960,540],[0,4878,960,540],[0,5420,960,540],[0,5962,960,540],[0,6504,960,540],[0,7046,960,540],[0,7588,960,540],[962,1084,960,540]]},
		{name:"WindFarms_ElectricityDistribution_atlas_3", frames: [[3848,542,960,540],[4810,542,960,540],[5772,542,960,540],[6734,542,960,540],[0,1084,960,540],[0,1626,960,540],[0,2168,960,540],[0,2710,960,540],[0,3252,960,540],[0,3794,960,540],[0,4336,960,540],[0,4878,960,540],[0,5420,960,540],[0,5962,960,540],[0,6504,960,540],[0,7046,960,540],[0,7588,960,540],[962,1084,960,540],[1924,1084,960,540],[2886,1084,960,540],[3848,1084,960,540],[4810,1084,960,540],[5772,1084,960,540],[6734,1084,960,540],[962,1626,960,540],[1924,1626,960,540],[2886,1626,960,540],[3848,1626,960,540],[4810,1626,960,540],[5772,1626,960,540],[6734,1626,960,540],[962,2168,960,540],[962,2710,960,540],[962,3252,960,540],[962,3794,960,540],[962,4336,960,540],[962,4878,960,540],[962,5420,960,540],[962,5962,960,540],[962,6504,960,540],[962,7046,960,540],[962,7588,960,540],[1924,2168,960,540],[2886,2168,960,540],[3848,2168,960,540],[4810,2168,960,540],[5772,2168,960,540],[6734,2168,960,540],[1924,2710,960,540],[2886,2710,960,540],[3848,2710,960,540],[4810,2710,960,540],[5772,2710,960,540],[6734,2710,960,540],[1924,3252,960,540],[1924,3794,960,540],[1924,4336,960,540],[1924,4878,960,540],[1924,5420,960,540],[1924,5962,960,540],[1924,6504,960,540],[1924,7046,960,540],[1924,7588,960,540],[2886,3252,960,540],[3848,3252,960,540],[4810,3252,960,540],[5772,3252,960,540],[6734,3252,960,540],[2886,3794,960,540],[2886,4336,960,540],[2886,4878,960,540],[2886,5420,960,540],[2886,5962,960,540],[2886,6504,960,540],[2886,7046,960,540],[2886,7588,960,540],[3848,3794,960,540],[4810,3794,960,540],[5772,3794,960,540],[6734,3794,960,540],[3848,4336,960,540],[4810,4336,960,540],[5772,4336,960,540],[6734,4336,960,540],[3848,4878,960,540],[3848,5420,960,540],[3848,5962,960,540],[3848,6504,960,540],[3848,7046,960,540],[3848,7588,960,540],[4810,4878,960,540],[5772,4878,960,540],[6734,4878,960,540],[4810,5420,960,540],[5772,5420,960,540],[6734,5420,960,540],[4810,5962,960,540],[4810,6504,960,540],[4810,7046,960,540],[4810,7588,960,540],[5772,5962,960,540],[6734,5962,960,540],[5772,6504,960,540],[6734,6504,960,540],[5772,7046,960,540],[5772,7588,960,540],[6734,7046,960,540],[6734,7588,960,540],[0,0,960,540],[962,0,960,540],[1924,0,960,540],[2886,0,960,540],[3848,0,960,540],[4810,0,960,540],[5772,0,960,540],[6734,0,960,540],[0,542,960,540],[962,542,960,540],[1924,542,960,540],[2886,542,960,540]]},
		{name:"WindFarms_ElectricityDistribution_atlas_4", frames: [[962,3252,960,540],[962,3794,960,540],[962,4336,960,540],[962,4878,960,540],[962,5420,960,540],[962,5962,960,540],[962,6504,960,540],[962,7046,960,540],[962,7588,960,540],[1924,2168,960,540],[2886,2168,960,540],[3848,2168,960,540],[4810,2168,960,540],[5772,2168,960,540],[6734,2168,960,540],[1924,2710,960,540],[2886,2710,960,540],[3848,2710,960,540],[4810,2710,960,540],[5772,2710,960,540],[6734,2710,960,540],[1924,3252,960,540],[1924,3794,960,540],[1924,4336,960,540],[1924,4878,960,540],[1924,5420,960,540],[1924,5962,960,540],[1924,6504,960,540],[1924,7046,960,540],[1924,7588,960,540],[2886,3252,960,540],[3848,3252,960,540],[4810,3252,960,540],[5772,3252,960,540],[6734,3252,960,540],[2886,3794,960,540],[2886,4336,960,540],[2886,4878,960,540],[2886,5420,960,540],[2886,5962,960,540],[2886,6504,960,540],[2886,7046,960,540],[2886,7588,960,540],[3848,3794,960,540],[4810,3794,960,540],[5772,3794,960,540],[6734,3794,960,540],[3848,4336,960,540],[4810,4336,960,540],[5772,4336,960,540],[6734,4336,960,540],[3848,4878,960,540],[3848,5420,960,540],[3848,5962,960,540],[3848,6504,960,540],[3848,7046,960,540],[3848,7588,960,540],[4810,4878,960,540],[5772,4878,960,540],[6734,4878,960,540],[4810,5420,960,540],[5772,5420,960,540],[6734,5420,960,540],[4810,5962,960,540],[4810,6504,960,540],[4810,7046,960,540],[4810,7588,960,540],[5772,5962,960,540],[6734,5962,960,540],[5772,6504,960,540],[6734,6504,960,540],[5772,7046,960,540],[5772,7588,960,540],[6734,7046,960,540],[6734,7588,960,540],[0,0,960,540],[962,0,960,540],[1924,0,960,540],[2886,0,960,540],[3848,0,960,540],[4810,0,960,540],[5772,0,960,540],[6734,0,960,540],[0,542,960,540],[962,542,960,540],[1924,542,960,540],[2886,542,960,540],[3848,542,960,540],[4810,542,960,540],[5772,542,960,540],[6734,542,960,540],[0,1084,960,540],[0,1626,960,540],[0,2168,960,540],[0,2710,960,540],[0,3252,960,540],[0,3794,960,540],[0,4336,960,540],[0,4878,960,540],[0,5420,960,540],[0,5962,960,540],[0,6504,960,540],[0,7046,960,540],[0,7588,960,540],[962,1084,960,540],[1924,1084,960,540],[2886,1084,960,540],[3848,1084,960,540],[4810,1084,960,540],[5772,1084,960,540],[6734,1084,960,540],[962,1626,960,540],[1924,1626,960,540],[2886,1626,960,540],[3848,1626,960,540],[4810,1626,960,540],[5772,1626,960,540],[6734,1626,960,540],[962,2168,960,540],[962,2710,960,540]]},
		{name:"WindFarms_ElectricityDistribution_atlas_5", frames: [[0,0,960,540],[962,0,960,540],[1924,0,960,540],[2886,0,960,540],[0,542,960,540],[962,542,960,540],[1924,542,960,540],[2886,542,960,540],[0,1084,960,540],[962,1084,960,540],[1924,1084,960,540],[2886,1084,960,540],[0,1626,960,540],[962,1626,960,540],[1924,1626,960,540],[2886,1626,960,540],[0,2168,960,540],[962,2168,960,540],[1924,2168,960,540],[2886,2168,960,540]]}
];


// symbols:



(lib.animationWindMills0001 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0002 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0003 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0004 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0005 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0006 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0007 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0008 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0009 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0010 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0011 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0012 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0013 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0014 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0015 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0016 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0017 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0018 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0019 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0020 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0021 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0022 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0023 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0024 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0025 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0026 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0027 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0028 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0029 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0030 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0031 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0032 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0033 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0034 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0035 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0036 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0037 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0038 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0039 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0040 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0041 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0042 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0043 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0044 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0045 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0046 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0047 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0048 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0049 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0050 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0051 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0052 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0053 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0054 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0055 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0056 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0057 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0058 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0059 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0060 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0061 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0062 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0063 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0064 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0065 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0066 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0067 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0068 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0069 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0070 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0071 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0072 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0073 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0074 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0075 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0076 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0077 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0078 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0079 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0080 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0081 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0082 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0083 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0084 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0085 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0086 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0087 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0088 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0089 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0090 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0091 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0092 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0093 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0094 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0095 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0096 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0097 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0098 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0099 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0100 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0101 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0102 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0103 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0104 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0105 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0106 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0107 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0108 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0109 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0110 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0111 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0112 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0113 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0114 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0115 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0116 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0117 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0118 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0119 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0120 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0121 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0122 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0123 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0124 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0125 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0126 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0127 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0128 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0129 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0130 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0131 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0132 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0133 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0134 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0135 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0136 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0137 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0138 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0139 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0140 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0141 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0142 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0143 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0144 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0145 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0146 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0147 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0148 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0149 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0150 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0151 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0152 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0153 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0154 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0155 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0156 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0157 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0158 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0159 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0160 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0161 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0162 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0163 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0164 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0165 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0166 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0167 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0168 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0169 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0170 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0171 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0172 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0173 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0174 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0175 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0176 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0177 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0178 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0179 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0180 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0181 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0182 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0183 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0184 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0185 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0186 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0187 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0188 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0189 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0190 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0191 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0192 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0193 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0194 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0195 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0196 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0197 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0198 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0199 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0200 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0201 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0202 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0203 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0204 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0205 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0206 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0207 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0208 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0209 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0210 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0211 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0212 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0213 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0214 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0215 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0216 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0217 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0218 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0219 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0220 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0221 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0222 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(107);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0223 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(108);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0224 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(109);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0225 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(110);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0226 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(111);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0227 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(112);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0228 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(113);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0229 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(114);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0230 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(115);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0231 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(116);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0232 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(117);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0233 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(118);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0234 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_"];
	this.gotoAndStop(119);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0235 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0236 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0237 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0238 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0239 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0240 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0241 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0242 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0243 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0244 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0245 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0246 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0247 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0248 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0249 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0250 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0251 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0252 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0253 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0254 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0255 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0256 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0257 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0258 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0259 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0260 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0261 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0262 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0263 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0264 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0265 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0266 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0267 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0268 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0269 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0270 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0271 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0272 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0273 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0274 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0275 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0276 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0277 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0278 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0279 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0280 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0281 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0282 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0283 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0284 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0285 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0286 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0287 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0288 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0289 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0290 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0291 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0292 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0293 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0294 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0295 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0296 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0297 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0298 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0299 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0300 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0301 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0302 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0303 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0304 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0305 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0306 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0307 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0308 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0309 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0310 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_5"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0311 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_5"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0312 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_5"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0313 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_5"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0314 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_5"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0315 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_5"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0316 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_5"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0317 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_5"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0318 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_5"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0319 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_5"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0320 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_5"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0321 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_5"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0322 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_5"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0323 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_5"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0324 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_5"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0325 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_5"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0326 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_5"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0327 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_5"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0328 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_5"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0329 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_5"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0330 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0331 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0332 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0333 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0334 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0335 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0336 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0337 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0338 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0339 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0340 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0341 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0342 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0343 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0344 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0345 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0346 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0347 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0348 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0349 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0350 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0351 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0352 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0353 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0354 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0355 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0356 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0357 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0358 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0359 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0360 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0361 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0362 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0363 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0364 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0365 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0366 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0367 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0368 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0369 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0370 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0371 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0372 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0373 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0374 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0375 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0376 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0377 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0378 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0379 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0380 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0381 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0382 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0383 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0384 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0385 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0386 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0387 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0388 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0389 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0390 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0391 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0392 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0393 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0394 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0395 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(107);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0396 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0397 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0398 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0399 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0400 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0401 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0402 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0403 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0404 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0405 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0406 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0407 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0408 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0409 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0410 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0411 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0412 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0413 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0414 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0415 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0416 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0417 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0418 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0419 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0420 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0421 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0422 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0423 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0424 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0425 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0426 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0427 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0428 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(107);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0429 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(108);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0430 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(109);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0431 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(110);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0432 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(111);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0433 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(112);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0434 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(113);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0435 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(114);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0436 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(115);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0437 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(116);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0438 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(117);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0439 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(118);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0440 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_4"];
	this.gotoAndStop(119);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0441 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0442 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0443 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0444 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0445 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0446 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0447 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0448 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0449 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0450 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0451 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0452 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0453 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0454 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0455 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0456 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0457 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0458 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0459 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0460 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0461 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0462 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0463 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0464 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(108);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0465 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(109);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0466 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(110);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0467 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(111);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0468 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(112);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0469 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(113);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0470 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(114);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0471 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(115);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0472 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(116);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0473 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(117);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0474 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(118);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0475 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_3"];
	this.gotoAndStop(119);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0476 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0477 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0478 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0479 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0480 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0481 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0482 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0483 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0484 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0485 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0486 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0487 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0488 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(107);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0489 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(108);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0490 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(109);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0491 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(110);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0492 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(111);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0493 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(112);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0494 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(113);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0495 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(114);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0496 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(115);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0497 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(116);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0498 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(117);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0499 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(118);
}).prototype = p = new cjs.Sprite();



(lib.animationWindMills0500 = function() {
	this.spriteSheet = ss["WindFarms_ElectricityDistribution_atlas_2"];
	this.gotoAndStop(119);
}).prototype = p = new cjs.Sprite();



// stage content:



(lib.WindFarms_ElectricityDistribution = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AACA+QgIAAgLgFIgTgJIgNgGIgHgDIgFgCIAJgSIAKgTIAJgUIAJgWIAIgTIAFACIAHADIAIAFIAQAHQANAFAJAIQAKAGAFAJQAEAJABAJIgCAMIgFANQgFAMgIAIQgJAHgKAEQgJAEgJAAIgDAAgAAAgmIgDAIIgEAJIgDAHIgMAYIgDAIIgEAIIgEAIIgCAFIAGACIAHAEQAJAEAHAAQAGAAAHgEQAPgGAKgXQAFgJAAgHQABgHgCgHQgCgHgFgGQgFgFgIgEIgIgEIgHgCg");
	this.shape.setTransform(904.4,240.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgOA0IgHgDIgHgDIgFgCIAJgSIAKgVIAJgSIAIgWIAHgTIAFADIAGADIAHADIAGACIgKASIgKAWIgJASIgHAVIgHATg");
	this.shape_1.setTransform(896.9,237.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AARBAIgGgDIgHgDIgFgDIgFg4IgCAAIgCAEIgKAVIgHATIgFgDIgHgDIgHgDIgFgBIAJgTIAKgTIAJgUIAJgWIAIgTIAFADIAFADIAJAEIAMAFIAKAFIAGADIAEAEIADAEQADAFABAHQAAAFgDAHIgGAJQgDACgFACQgIAEgMgCIAEAfIAFAggAgFgIIACACIABAAQADACAFABQAEAAADgCIAHgEIAFgJQADgGABgEQAAgFgBgDIgGgGIgLgFg");
	this.shape_2.setTransform(889.7,234.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AAAA4QgJgDgKgEQgMgGgJgIQgFgEgDgEIgGgKIgEgJIgBgJQgBgGACgFQABgGADgFQAGgOAJgJQAKgIAKgDQAGgCAGAAIAKAAQANABANAGQAHADALAIQAHAGAGAIIgFAGIgGAHIgCgBIgCgIIgFgIQgFgHgKgFQgHgDgHAAQgJAAgFADQgIAEgHAHIgGAIIgGALQgEAIgBAHQgBAIACAIQACAHAGAGQAFAGAIAEIAFACIAEACIAEAAIACABIACgFIADgFIAHgSIAEgIIADACIAHAEIAIADIAEABIgCAEIgDAGIgEAHIgDAHIgCAFIgEAHIgBAEIgVgEg");
	this.shape_3.setTransform(880.4,230.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AARBAIgGgDIgHgDIgFgDIgFg4IgCAAIgCAEIgKAVIgHATIgFgDIgHgDIgHgDIgFgBIAJgTIAKgTIAJgUIAJgWIAIgTIAFADIAFADIAJAEIAMAFIAKAFIAGADIAEAEIADAEQADAFABAHQAAAFgDAHIgGAJQgDACgFACQgIAEgMgCIAEAfIAFAggAgFgIIACACIABAAQADACAFABQAEAAADgCIAHgEIAFgJQADgGABgEQAAgFgBgDIgGgGIgLgFg");
	this.shape_4.setTransform(865.5,223.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgCA5IgQgHIgPgGIgIgEIgFgCIgDgBIAJgSIAKgUIAJgUIAJgVIAIgTIAKAGIANAGIATAJIAMAEIgDAGIgCAEIgBADIgJgFIgJgFIgIgFIgGgCIgHAQIgGAQIAQAHIAQAEIgCAEIgCADIgBACIgBAEIgegQIgFAJIgEAKIgIASIARAHIAQAGIgCADIgCAEIgBADIgBADg");
	this.shape_5.setTransform(857.9,220.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgGBGIgEgCIgEgBQAEgUACgUIADgoIgNANIgQAPIgPAQIgNAPIgHgEIgEgCIgEgBIADgSIADgVIADgYIADgWIADgSIABgJIAGADIAGADIAFADIAHACIgEAVIgEAWIgDATIgDASIAAAAIAQgQIAQgQIAPgQIAJgMIAEACIADACIAEABIAEABIgCAKIgCAOIgBAOIgCAQIgBAQIgCAMIAQgRIAPgSIAOgPIAKgLIAGADIADABIAEABIgHAIIgNALIgOAPIgQASIgQARIgMAPIgGgEg");
	this.shape_6.setTransform(848.3,214.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AABA6QgKgBgNgFQgLgGgJgHQgJgHgEgKIgEgKIgBgLQAAgKAGgOQACgFAEgFIAHgJQAIgHALgEQAKgEAMAAIALACQAHACAGADIALAGIAJAHQAJAIAEAJIADALQACAFgBAEQABAGgCAGIgEANQgFALgJAHIgJAHIgKAFIgLACIgHABIgEAAgAAFgsQgGAAgHAFQgGAEgHAHQgFAIgFAJQgFANgBAGQgBAJACAHQACAGAFAFQAEAFAGADQAHADAHAAQAFgBAHgDQAHgEAHgHQAHgIAFgMQAEgKABgGQABgJgCgHQgBgHgFgFQgFgGgHgDQgFgDgGAAIgDABg");
	this.shape_7.setTransform(833.6,209.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AggA0IgGgDIgHgDIgGgCIAJgSIAKgVIAJgSIAKgWIAHgTIAGADIAEADIALAFIALAEQAKAFAFAEQAFAEACAEQADAGABAGQAAAFgEAFQgDAIgGAFQgFAFgHABQgHACgIgCQgGgBgHgDIgHgEIgKAWIgIAWgAACgPIgHATIAGADIAIAAQAEgBAEgDQAEgDAEgGQACgFAAgFIAAgIIgEgFQgCgCgEgBIgCgCIgCgBIgCAAg");
	this.shape_8.setTransform(823.5,203.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AgeA7IgGgTIgGgYIgHgWIgHgSIgFgMIAHgBIAHgDIAtAZIArAXIgFgLIgEgPIgGgPIgEgNIgEgKIgDgGIAIgCIAGgCIAHAZIAGAVIAHATIAHATIAGATIgHACIgFACQg5gjgggPIADAJIACAHIAGASIAGAQIADAKIADAIIACAEIgEAAIgDABIgHAEg");
	this.shape_9.setTransform(665.3,182.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AgaA3IgJgGQgFgDgEgEQgIgJgFgOIgCgLIgBgJQABgMAGgKQAFgKAJgIIAKgHIAMgFIANgDIAJgBQAMAAAKAEIAJAFQAFADADAFQAFAEADAGIAFAMQAEALgBAKIgCAKIgEALQgDAFgEAEIgIAIQgJAIgNAFQgMAEgJAAIgDAAQgKAAgJgDgAgOgsQgIACgFAGQgFAGgCAIQgCAIABAJQAAAHADAKIAKAUQAGAHAGADQAFAEAFABQAHAAAGgCQAHgCAFgFQAGgFACgIQADgIAAgKQgBgHgEgNQgDgJgFgIQgFgHgGgEQgHgEgFgBIgEAAQgFAAgFACg");
	this.shape_10.setTransform(653.2,187);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AAAAkIgGgWIgHgTIgIgWIgIgUIAHgBIAHgCIAGgDIAGgCIAEAUIAGAXIAHASIAIAWIAIAUIgHABIgGACIgHADIgGACg");
	this.shape_11.setTransform(644.4,189.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AAMAoIgGgWIgLgkIgDgIIgCgFIgGACIgHADIgHADIgHADIgBgDIAAgEIgCgDIgCgDIAKgDIAIgDIAKgDIAMgEIALgEIAIgDIAJgDIAIgDIABADIABADIABAEIABADIgGABIgIACIgHACIgGACIAAACIACADIADAJIAMAjIAHAXIAIATIgGABIgHACIgGADIgGACg");
	this.shape_12.setTransform(636.3,191.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AgtAwIABgSIABgVIACgVIABgXIABgVIADgBIADgBIADgBIADgBIAUAYIASAZIAUAVIARATIgHABIgGADIgHACIgGACIgKgNIgLgOIgHADIgKADIgIADIgIADIgBARIABARIgDABIgFABIgDABIgEACgAgegHIgBASIAcgJIgNgOIgMgPg");
	this.shape_13.setTransform(631.3,195.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AANAoIgIgWIgKgkIgDgIIgCgFIgFACIgIADIgHADIgIADIAAgDIgBgEIgBgDIgCgDIAKgDIAJgDIAJgDIAMgEIAKgEIAJgDIAJgDIAIgDIABADIABADIABAEIACADIgHABIgIACIgHACIgGACIABACIABADIACAJIANAjIAHAXIAIATIgFABIgHACIgHADIgGACg");
	this.shape_14.setTransform(620.1,197.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AgPA5IgBgLIgBgKIADgBIAEAGIAGAEIAGABIAJgBQAJgDACgHQADgGgCgGQgCgGgFgCIgKgEIgLgBQgHgBgGgCQgGgCgGgFQgEgCgDgJQgDgIAAgHQABgHAEgFQADgGAGgEQAFgFAHgCQAIgDAGAAQAGAAAFACIAAAIIAAAJIgCABQgJgMgMAFQgHACgDAGQgDAFACAGQACAGAFACIAKAEIALABQAHABAGACQAHACAFAFIAFADIADAIQADAHgBAIQgBAHgEAGQgDAGgHAFQgGAFgJADQgIADgGAAIgCABQgFAAgEgCg");
	this.shape_15.setTransform(613.4,200.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AgTAoIgHgXIgHgSIgHgXIgIgTIAGgBIAGgCIAOgFIANgFIALgDQAGAAAFABQAGACADADQAEAEACAGQACAHgBAFQgBAFgDAEIgHAIIgGAEIAAABIAIgBIALABQAFACAEAEQAFADACAFQADAIgBAHQgBAHgDAFQgEAGgGADIgNAGIgLADIgLAEIgHADIgGADgAAAAAIgDABIgDABIACAGIADAJIABAHIACAHIACAHIABAFIAFgBIAEgCQAEgBACgCQADgCABgEIACgHIgCgKIgEgJQgDgDgDgCQgEAAgEAAIgGAAgAgOgtIgEACIgDABIADAMIAEAKIACAHIADAIIAHgCIAEgEQACgCACgDIACgHIgCgJIgDgHIgDgFQgCgCgEAAIgIABg");
	this.shape_16.setTransform(604.8,203.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AgKA9QgIgDgGgHIgFgHIgFgJIgDgLIgDgJIgCgIIgDgHIgHgTIgEgLIAGgCIAHgBIAGgDIAFgDQAEAQAEANIAIAXQAFAOAFAIQAFAIADADQAGAEAGgBQAGAAAHgCQAJgEAEgGIADgHIABgIQAAgIgDgKIgGgTIgIgVIgIgUIAFgBIAEgBIADgCIAEgBIACAJIAEANIAFAQIAGATQAJAZgIAPQgDAHgIAGQgHAGgLAEQgKADgJAAIgFAAQgEAAgGgBg");
	this.shape_17.setTransform(593.9,206.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AgPA5IgBgLIgBgKIADgBIAEAGIAGAEIAGABIAJgBQAJgDACgHQADgGgCgGQgCgGgFgCIgKgEIgLgBQgHgBgGgCQgGgCgGgFQgEgCgDgJQgDgIAAgHQABgHAEgFQADgGAGgEQAFgFAHgCQAIgDAGAAQAGAAAFACIAAAIIAAAJIgCABQgJgMgMAFQgHACgDAGQgDAFACAGQACAGAFACIAKAEIALABQAHABAGACQAHACAFAFIAFADIADAIQADAHgBAIQgBAHgEAGQgDAGgHAFQgGAFgJADQgIADgGAAIgCABQgFAAgEgCg");
	this.shape_18.setTransform(584.8,210);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("Ag8AQIgKg1IADgBIADAAIADgCIADgBIAPAPIAPAQIAPANIANAOIAGgnIAEgrIAHgBIAGgDIANAbIANAcIANAYIAJATIgGABIgGACIgGADIgHACIgNghIgQghIgFAnIgGApIgBAAIgBAAIgCABIgBAAIgagcIgcgbIgBAAIAIAiIAJAjIgDAAIgEACIgDABIgEABIgJg2g");
	this.shape_19.setTransform(289.2,344.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("AgbAoIgHgXIgGgSIgIgXIgIgTIAGgBIAHgCIAJgEIANgEIAKgDIAHgCIAEAAIAFABQAGACAEAEQAEAEACAHQACAFAAAFQAAAFgCAFQgDAJgLAGIAZATIAZAUIgHACIgHACIgHACIgHADIgpgnIgBABIACAGIAHAWIAGATIgEACIgHACIgGACIgGADgAgSgtIgLADIAOApIABAAIACAAIAIgFQAEgDAAgDQACgEgBgEIgBgKQgBgHgDgDQgCgEgEgBIgEgBIgEABg");
	this.shape_20.setTransform(277.6,348.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#333333").s().p("AgtAwIABgSIABgVIACgVIABgXIACgVIACgBIADgBIADgBIADgBIATAYIATAZIAVAVIAQATIgHABIgGADIgHACIgGACIgKgNIgLgOIgIADIgKADIgHADIgIADIgBARIABARIgDABIgFABIgDABIgEACgAgegHIgBASIAcgJIgNgOIgMgPg");
	this.shape_21.setTransform(269.1,351.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#333333").s().p("AgHAqIgIgXIgGgTIgIgWIgIgTIAOgEIANgEIATgHIALgFIACAHIAAAEIACADIgKACIgKADIgHADIgGABIAFARIAEARIASgHIAPgGIABAEIACADIABACIABAEQgSAEgRAEIACAIIAIAWIAIATIgGACIgGACIgHACIgEADg");
	this.shape_22.setTransform(258.8,353.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#333333").s().p("AgdApIgHgWIgGgTIgIgWIgIgTIAGgCIAHgCIALgEIAQgGQANgEAKgBQALgBAKADQAJADAIAIQAEADADAGQADAGACAHQAEANAAALQgCAKgEAJQgFAKgIAHQgIAHgLAEIgUAGIgMAEIgGADIgGACgAgPguIgJADIgHADIACAFIACAIIADAJIADAIIAJAZIADAIIADAJIACAIIACAEIAEgBIAIgDQAIgDAGgFQAGgFADgHQAGgQgIgVQgDgKgFgGQgFgHgHgEQgGgDgFgBIgEAAQgGAAgFACg");
	this.shape_23.setTransform(245.1,358.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#333333").s().p("AgfA7IgEgTIgHgYIgIgVIgGgSIgFgNIAIgBIAGgDIAtAZIArAXIgEgLIgGgPIgEgOIgFgOIgEgKIgCgGIAHgCIAGgCIAIAZIAGAVIAGATIAHAUIAGASIgHACIgGACQg5gjgfgPIADAJIADAHIAGASIAEAPIAFALIACAIIACAEIgDABIgEABIgHADg");
	this.shape_24.setTransform(233.8,362.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#333333").s().p("AAAAkIgGgWIgHgTIgIgWIgIgUIAHgBIAHgCIAGgDIAGgCIAEAUIAGAXIAHASIAIAWIAIAUIgHABIgGACIgHADIgGACg");
	this.shape_25.setTransform(225.4,365);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#333333").s().p("AgQA4IgNgTIgOgUIgNgRIgKgOIgGgHIAHgBIAHgDIAFgCIAGgCIAMASIAMAQIAMASIAKAQIAAAAIAAgYIAAgWIABgWIgBgQIADgBIADAAIAEgCIAEgCIAFAIIAIAMIAJAMIAKAOIAKAKIAHAKIABAAIgBgVIgBgYIgBgWIgBgOIAIgCIACgCIADgBIABAKIgBASIAAAVIAAAWIABAXIAAAUIgHACIgFACIgDABIgYghIgZgfIAAAAIgBASIgBAWIAAAVIAAAUIgHACIgCACIgFABg");
	this.shape_26.setTransform(213.6,367.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgCAGIgCgBIgCgDIAAgCIAAgCIACgCIACgBIACgBIADABIACABIACACIAAACIAAACIgCADIgCABIgDABg");
	this.shape_27.setTransform(651,514.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgFAlIgHgCIgHgEQgEgCgDgFIAGgFIAFAGIAFAFIAFACIAFABIAFgBIAEgDIADgDIABgEQgBgDgBgDIgFgEIgGgEIgFgDIgHgEIgHgDIgEgGQgCgDAAgFQAAgFADgDQABgEADgDQAEgDAEgBQAFgCAFAAIAFABIAHACIAFAEIAHAHIgGAFQgDgHgGgDQgFgEgEAAIgFABIgFACIgCADIgBAEQAAADABADIAFAEIAHAEIAFADIAJAEIAHADQADACABAEQACADAAAFQAAAEgCAEQgCAEgDADQgDADgFACQgGACgGAAg");
	this.shape_28.setTransform(646.1,511.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgMAjQgGgDgGgFQgEgEgDgHQgDgGAAgIQAAgHADgHQADgIAEgFQAFgGAHgDQAGgDAGAAQAHAAAHADQAFACAFAFQAEAEADAGQACAFAAAGIg1AAQAAAGACAGQACAGAEAFQADAEAFADQAEADAEAAQAFAAAEgCIAIgEIAGgGQADgDABgDIAEACQgCAFgDAFQgEAFgEAEQgFAEgFACQgGACgGAAQgFAAgHgDgAAPgMQgBgEgBgDIgEgHIgGgEQgDgBgCAAIgHABIgFAEIgEAHIgCAHIAjAAIAAAAg");
	this.shape_29.setTransform(638.8,511.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgLAjQgHgDgFgFQgEgFgDgGQgDgHAAgHQAAgHADgHQADgHAGgGQAFgFAHgEQAHgDAFAAQAHAAAFACQAFABAEACQAEADACADQACADAAAEIgBADIgCADIgDABIgEABIgEgBIgCgCIgCgCIAAgDIgBgFIgCgEIgEgCIgGgBQgDAAgEACQgEACgCADQgDAEgCAEQgBAFAAAFQAAAGACAFQACAHADAEQADAFAFADQADADAGAAQAFAAADgCIAHgEIAFgHIADgHIAFABIgFANQgDAFgFAEQgEAEgFACQgGACgGAAQgFAAgGgDg");
	this.shape_30.setTransform(630.8,511.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgWAlIAAhIIAPAAIAAAOIAEgGIADgEIAGgEQACgBADAAIAFABIADACIADADIABADQAAAEgDACQgCABgDAAIgFgBIgCAAIgCgBIgEgBIgCABIgBACIgEADIgCAFIAAAxg");
	this.shape_31.setTransform(624.6,511.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgQAjIgHgEQgDgEgCgEQgCgEAAgEIAAgzIAPAAIAAAzIABAEQABADADACIAFACIAFABIAEgBIAEgCIAFgEIADgEIAAg0IAPAAIAABHIgPAAIAAgNIgEAFIgHAGIgFADIgHABIgJgCg");
	this.shape_32.setTransform(617.4,511.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgOAjQgHgDgFgFQgFgFgDgHQgDgHAAgIQAAgGADgHQADgHAFgFQAFgGAHgDQAHgDAHAAQAIAAAHADQAHADAFAFQAFAFADAGQADAHAAAHQAAAHgDAHQgDAHgFAGQgFAFgHAEQgHADgIAAQgHAAgHgDgAgJgdIgGAGQgDADgBAFQgCAFAAAGQAAAGACAHQABAHAEAFQADAFAFADQAEADAEAAQAFAAADgCIAGgGQADgDABgFQACgFAAgGIgBgNQgCgHgDgFQgDgFgFgDQgFgDgFAAQgEAAgDACg");
	this.shape_33.setTransform(609,511.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgFAlIgIgCIgHgEQgDgCgDgFIAGgFIAFAGIAFAFIAFACIAFABIAEgBIAFgDIADgDIAAgEQAAgDgBgDIgFgEIgFgEIgGgDIgHgEIgHgDIgEgGQgBgDAAgFQAAgFACgDQABgEADgDQAEgDAEgBQAFgCAFAAIAFABIAHACIAGAEIAGAHIgFAFQgFgHgEgDQgGgEgEAAIgFABIgFACIgDADIAAAEQgBADACADIAFAEIAHAEIAFADIAIAEIAIADQACACACAEQACADAAAFQAAAEgCAEQgBAEgEADQgEADgEACQgGACgGAAg");
	this.shape_34.setTransform(601.3,511.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgdA0IgDgBIgDgDIgBgDIABgDIACgDIACgCIADAAIAFAAIABABIADABIAEABIADgBIAEgEIACgEIACgEIAEgLIglhEIARAAIAaA0IAXg0IAJAAIgmBUIgEAJIgGAHIgHAEIgHABg");
	this.shape_35.setTransform(590.1,513.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgeAyQgIgEgBgHIACgGIAEgGIAGgEIAFgFIgEgCIgDgCIgCgBIgBgEIABgEIAEgFIAEgCIAHgDQgIgDgFgFQgEgGABgIQAAgFACgFQACgEAFgEQAEgEAGgCQAGgCAHAAIAEAAIAHABIAEADIAEACIAUAAIAAAGIgNAAIADAGIABAHQAAAGgCAFQgDAFgFADQgEAEgGACQgHABgFAAIgFAAIgGgBIgDADIgBADQAAABAAAAQAAABAAAAQAAABABAAQAAAAABAAQADACAEAAIAZABQAHAAAEACQAEABADACQACADABACIABAGQAAAHgCAGQgDAEgGAFQgGADgIACQgIACgIAAQgTAAgJgEgAgVAWIgCADIgBAEIAAADQAAABAAAAQAAABAAAAQABABAAAAQAAABAAAAQACADAEACIAJACQAEABAFAAQAIAAAFgBQAGgBAFgCIAFgEQACgCAAgDQABgFgFgCQgFgDgJABIgKAAIgIgBIgJgBIgEAAgAgIgvIgFADIgCAHIgBAIIABAJIADAIQACADAEABQADACADABQACAAACgCIAGgEQACgCABgEIABgGQAAgGgBgFQgCgEgCgDQgDgEgDgCQgDgCgCAAQgDAAgDACg");
	this.shape_36.setTransform(581.7,513.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgWAlIAAhIIAPAAIAAAOIAEgGIADgEIAGgEQACgBADAAIAFABIADACIADADIABADQAAAEgDACQgCABgDAAIgFgBIgCAAIgCgBIgEgBIgCABIgBACIgEADIgCAFIAAAxg");
	this.shape_37.setTransform(575.1,511.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgMAjQgGgDgFgFQgFgEgDgHQgDgGAAgIQAAgHADgHQADgIAEgFQAFgGAHgDQAGgDAGAAQAIAAAGADQAFACAFAFQAEAEADAGQACAFAAAGIg1AAQAAAGACAGQACAGAEAFQADAEAFADQAEADAEAAQAFAAAEgCIAIgEIAGgGQACgDACgDIAEACQgBAFgEAFQgEAFgEAEQgFAEgFACQgGACgGAAQgGAAgGgDgAAOgMQABgEgCgDIgEgHIgGgEQgDgBgCAAIgHABIgFAEIgEAHIgCAHIAiAAIAAAAg");
	this.shape_38.setTransform(567.9,511.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAQAlIAAgwQAAgHgEgEQgDgEgFAAIgEAAIgEADIgGADIgFAFIAAA0IgOAAIAAhIIAOAAIAAAOQAHgIAHgDQAFgEAIAAQAEAAADACIAGAEIAEAIQABADAAAGIAAAyg");
	this.shape_39.setTransform(559.9,511.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgMAjQgHgDgEgFQgFgEgDgHQgDgGAAgIQAAgHACgHQADgIAFgFQAFgGAGgDQAHgDAGAAQAIAAAFADQAHACAEAFQAEAEACAGQADAFAAAGIg1AAQAAAGACAGQACAGADAFQAEAEAEADQAFADAEAAQAFAAAEgCIAIgEIAGgGQACgDABgDIAFACQgCAFgDAFQgEAFgFAEQgEAEgGACQgFACgGAAQgGAAgGgDgAAOgMQAAgEgBgDIgEgHIgGgEQgDgBgDAAIgFABIgGAEIgEAHIgCAHIAiAAIAAAAg");
	this.shape_40.setTransform(552,511.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgdAyQgKgEABgHIABgGIAEgGIAFgEIAGgFIgEgCIgDgCIgCgBIAAgEIABgEIADgFIAFgCIAFgDQgHgDgEgFQgEgGgBgIQAAgFADgFQACgEAFgEQAEgEAGgCQAGgCAHAAIAFAAIAFABIAFADIADACIAWAAIAAAGIgPAAIAEAGIACAHQAAAGgEAFQgCAFgEADQgFAEgGACQgHABgFAAIgGAAIgEgBIgEADIgCADQAAABABAAQAAABAAAAQAAABABAAQAAAAABAAQADACADAAIAaABQAHAAAEACQAEABACACQADADACACIABAGQAAAHgEAGQgDAEgFAFQgGADgIACQgIACgIAAQgTAAgIgEgAgUAWIgCADIgCAEIAAADQAAABAAAAQAAABAAAAQABABAAAAQAAABABAAQABADAEACIAIACQAFABAFAAQAIAAAGgBQAFgBAEgCIAHgEQACgCAAgDQgBgFgEgCQgFgDgIABIgLAAIgIgBIgIgBIgGAAgAgJgvIgEADIgDAHIAAAIIABAJIAEAIQACADADABQADACADABQACAAADgCIAEgEQADgCABgEIACgGQgBgGgBgFQgCgEgCgDQgDgEgDgCQgDgCgCAAQgEAAgDACg");
	this.shape_41.setTransform(539.3,513.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAQAlIAAgwQAAgHgEgEQgDgEgFAAIgEAAIgEADIgGADIgFAFIAAA0IgOAAIAAhIIAOAAIAAAOQAHgIAHgDQAFgEAIAAQAEAAADACIAGAEIAEAIQABADAAAGIAAAyg");
	this.shape_42.setTransform(531.3,511.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgGA3IAAhFIAJgEIAEAAIAABJgAgCgoIgCgBIgCgDIgBgDIABgCIACgDIACgCIACAAIADAAIADACIABADIABACIgBADIgBADIgDABIgDABg");
	this.shape_43.setTransform(525.7,509.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgBAxIgFgEQgCgCAAgDIgBgHIAAgzIgNAAIAAgDQAGAAAEgCQAEgCADgEIAEgJIABgKIADAAIAAAYIARAAIAAAGIgRAAIAAAzIABACIACADIACACIADABQABAAAAgBQABAAABAAQAAAAABAAQAAgBABAAIADgDIAEADQgDAEgFADQgFAEgHAAIgEgBg");
	this.shape_44.setTransform(521.8,510.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgRAkQgDgBgDgCQgCgDgBgDIgCgHQAAgFACgEIAFgHIAIgEIAJgDIAIgEIAKgCIAAgFIgBgIQgBgEgCgCQgBgCgDgBIgGgBIgEABIgEADIgBADIgBAEIAAAEIgBADIgDACIgDABIgDgBIgDgBIgBgDIgBgEQAAgDADgDQACgDAEgDQAEgCAFgBQAGgCAEAAQAHAAAFACQAFABADADQADACACAEIABAIIAAA1IgPAAIAAgKIgFAEIgFAEIgFADIgIABQgEAAgEgCgAAIgCIgHACIgEACIgFAEIgEAFIgBAFIABAFIADAEIADADIAFABIADgBIAEgBIAEgDIAEgDIAAgag");
	this.shape_45.setTransform(515.3,511.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgWAlIAAhIIAOAAIAAAOIAFgGIADgEIAGgEQADgBADAAIAEABIADACIADADIABADQAAAEgCACQgDABgDAAIgFgBIgCAAIgCgBIgDgBIgDABIgBACIgDADIgEAFIAAAxg");
	this.shape_46.setTransform(509.6,511.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgMAjQgHgDgEgFQgFgEgDgHQgDgGAAgIQAAgHACgHQADgIAFgFQAFgGAGgDQAHgDAGAAQAIAAAFADQAHACAEAFQAEAEACAGQADAFAAAGIg1AAQAAAGACAGQACAGADAFQAEAEAEADQAFADAEAAQAFAAAEgCIAIgEIAGgGQACgDABgDIAFACQgBAFgEAFQgEAFgFAEQgEAEgGACQgFACgGAAQgFAAgHgDgAAOgMQAAgEgBgDIgEgHIgGgEQgDgBgDAAIgFABIgGAEIgEAHIgCAHIAiAAIAAAAg");
	this.shape_47.setTransform(502.4,511.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AAQAlIAAgwQAAgHgEgEQgDgEgFAAIgEAAIgEADIgGADIgFAFIAAA0IgOAAIAAhIIAOAAIAAAOQAHgIAHgDQAFgEAIAAQAEAAADACIAGAEIAEAIQABADAAAGIAAAyg");
	this.shape_48.setTransform(494.4,511.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgMAjQgHgDgFgFQgEgEgDgHQgDgGAAgIQAAgHACgHQAEgIAEgFQAFgGAGgDQAHgDAGAAQAHAAAHADQAGACAEAFQAEAEACAGQADAFAAAGIg1AAQAAAGACAGQACAGADAFQAEAEAEADQAFADAEAAQAFAAAEgCIAIgEIAGgGQACgDABgDIAFACQgCAFgDAFQgDAFgGAEQgEAEgGACQgFACgGAAQgGAAgGgDgAAPgMQAAgEgCgDIgEgHIgGgEQgDgBgCAAIgGABIgGAEIgEAHIgCAHIAjAAIAAAAg");
	this.shape_49.setTransform(486.5,511.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgdAyQgJgEAAgHIABgGIAEgGIAGgEIAFgFIgEgCIgDgCIgCgBIgBgEIABgEIAEgFIAEgCIAHgDQgIgDgEgFQgFgGAAgIQABgFACgFQACgEAFgEQAEgEAGgCQAGgCAHAAIAFAAIAFABIAFADIADACIAVAAIAAAGIgNAAIADAGIABAHQAAAGgDAFQgCAFgFADQgEAEgGACQgGABgGAAIgFAAIgGgBIgDADIgBADQAAABAAAAQAAABAAAAQAAABABAAQAAAAABAAQADACAEAAIAZABQAGAAAFACQAEABADACQACADABACIABAGQAAAHgDAGQgDAEgFAFQgGADgIACQgIACgIAAQgTAAgIgEgAgUAWIgDADIgBAEIAAADQAAABAAAAQAAABAAAAQABABAAAAQAAABAAAAQACADAEACIAJACQAFABAEAAQAIAAAGgBQAFgBAFgCIAFgEQADgCAAgDQAAgFgFgCQgFgDgIABIgLAAIgIgBIgJgBIgEAAgAgIgvIgFADIgDAHIAAAIIABAJIAEAIQABADAEABQADACADABQACAAADgCIAEgEQADgCABgEIACgGQAAgGgCgFQgBgEgDgDQgDgEgDgCQgDgCgCAAQgDAAgDACg");
	this.shape_50.setTransform(477.9,513.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgQAEIAAgHIAhAAIAAAHg");
	this.shape_51.setTransform(471.7,511.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgdA0IgDgBIgDgDIgBgDIAAgDIADgDIACgCIADAAIAFAAIABABIADABIAEABIADgBIADgEIADgEIACgEIAEgLIglhEIARAAIAaA0IAYg0IAIAAIgmBUIgEAJIgGAHIgHAEIgHABg");
	this.shape_52.setTransform(465.8,513.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgBAxIgFgEQgCgCAAgDIgBgHIAAgzIgNAAIAAgDQAGAAAEgCQAEgCADgEIAEgJIABgKIADAAIAAAYIARAAIAAAGIgRAAIAAAzIABACIACADIACACIADABQABAAAAgBQABAAABAAQAAAAABAAQAAgBABAAIADgDIAEADQgDAEgFADQgFAEgHAAIgEgBg");
	this.shape_53.setTransform(459.6,510.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgGA3IAAhFIAJgEIAEAAIAABJgAgCgoIgCgBIgCgDIgBgDIABgCIACgDIACgCIACAAIADAAIADACIABADIABACIgBADIgBADIgDABIgDABg");
	this.shape_54.setTransform(455.6,509.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgLAjQgHgDgFgFQgEgFgDgGQgDgHAAgHQAAgHADgHQADgHAGgGQAFgFAHgEQAHgDAFAAQAHAAAFACQAFABAEACQAEADACADQACADAAAEIgBADIgCADIgDABIgEABIgEgBIgCgCIgCgCIAAgDIgBgFIgCgEIgEgCIgGgBQgDAAgEACQgEACgCADQgDAEgCAEQgBAFAAAFQAAAGACAFQACAHADAEQADAFAFADQADADAGAAQAFAAADgCIAHgEIAFgHIADgHIAFABIgFANQgDAFgFAEQgEAEgFACQgGACgGAAQgFAAgGgDg");
	this.shape_55.setTransform(450,511.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgGA3IAAhFIAJgEIAEAAIAABJgAgCgoIgCgBIgCgDIgBgDIABgCIACgDIACgCIACAAIADAAIADACIABADIABACIgBADIgBADIgDABIgDABg");
	this.shape_56.setTransform(444.5,509.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgWAlIAAhIIAPAAIAAAOIAEgGIADgEIAGgEQACgBADAAIAFABIADACIADADIABADQAAAEgDACQgCABgDAAIgFgBIgCAAIgCgBIgEgBIgCABIgBACIgEADIgCAFIAAAxg");
	this.shape_57.setTransform(440.5,511.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgBAxIgFgEQgCgCAAgDIgBgHIAAgzIgNAAIAAgDQAGAAAEgCQAEgCADgEIAEgJIABgKIADAAIAAAYIARAAIAAAGIgRAAIAAAzIABACIACADIACACIADABQABAAAAgBQABAAABAAQAAAAABAAQAAgBABAAIADgDIAEADQgDAEgFADQgFAEgHAAIgEgBg");
	this.shape_58.setTransform(434.9,510.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgLAjQgHgDgFgFQgEgFgDgGQgDgHAAgHQAAgHADgHQADgHAGgGQAFgFAHgEQAHgDAFAAQAHAAAFACQAFABAEACQAEADACADQACADAAAEIgBADIgCADIgDABIgEABIgEgBIgCgCIgCgCIAAgDIgBgFIgCgEIgEgCIgGgBQgDAAgEACQgEACgCADQgDAEgCAEQgBAFAAAFQAAAGACAFQACAHADAEQADAFAFADQADADAGAAQAFAAADgCIAHgEIAFgHIADgHIAFABIgFANQgDAFgFAEQgEAEgFACQgGACgGAAQgFAAgGgDg");
	this.shape_59.setTransform(428.6,511.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgMAjQgGgDgFgFQgFgEgDgHQgDgGAAgIQAAgHADgHQADgIAEgFQAFgGAHgDQAGgDAGAAQAHAAAHADQAFACAFAFQAEAEADAGQACAFAAAGIg1AAQAAAGACAGQACAGAEAFQADAEAFADQAEADAEAAQAFAAAEgCIAIgEIAGgGQADgDABgDIAEACQgCAFgDAFQgEAFgEAEQgFAEgFACQgGACgGAAQgGAAgGgDgAAPgMQgBgEgBgDIgEgHIgGgEQgDgBgCAAIgHABIgFAEIgEAHIgCAHIAjAAIAAAAg");
	this.shape_60.setTransform(420.6,511.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgGA3IAAhpIAIgEIAFAAIAABtg");
	this.shape_61.setTransform(414.9,509.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgMAjQgHgDgEgFQgFgEgDgHQgDgGAAgIQAAgHACgHQADgIAFgFQAFgGAGgDQAHgDAGAAQAIAAAFADQAHACAEAFQAEAEACAGQADAFAAAGIg1AAQAAAGACAGQACAGADAFQAEAEAFADQAEADAEAAQAFAAAEgCIAIgEIAGgGQACgDABgDIAFACQgBAFgEAFQgEAFgFAEQgEAEgGACQgFACgGAAQgFAAgHgDgAAOgMQAAgEgBgDIgEgHIgGgEQgDgBgDAAIgFABIgGAEIgEAHIgCAHIAiAAIAAAAg");
	this.shape_62.setTransform(409.2,511.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgGA3IAAhpIAIgEIAFAAIAABtg");
	this.shape_63.setTransform(399.4,509.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgRAkQgDgBgDgCQgCgDgBgDIgCgHQAAgFACgEIAFgHIAIgEIAJgDIAIgEIAKgCIAAgFIgBgIQgBgEgCgCQgBgCgDgBIgGgBIgEABIgEADIgBADIgBAEIAAAEIgBADIgDACIgDABIgDgBIgDgBIgBgDIgBgEQAAgDADgDQACgDAEgDQAEgCAFgBQAGgCAEAAQAHAAAFACQAFABADADQADACACAEIABAIIAAA1IgPAAIAAgKIgFAEIgFAEIgFADIgIABQgEAAgEgCgAAIgCIgHACIgEACIgFAEIgEAFIgBAFIABAFIADAEIADADIAFABIADgBIAEgBIAEgDIAEgDIAAgag");
	this.shape_64.setTransform(393.7,511.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AAQAlIAAgwQAAgHgEgEQgDgEgFAAIgEAAIgEADIgGADIgFAFIAAA0IgOAAIAAhIIAOAAIAAAOQAHgIAHgDQAFgEAIAAQAEAAADACIAGAEIAEAIQABADAAAGIAAAyg");
	this.shape_65.setTransform(386.5,511.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgOAjQgHgDgFgFQgFgFgDgHQgDgHAAgIQAAgGADgHQADgHAFgFQAFgGAHgDQAHgDAHAAQAIAAAHADQAHADAFAFQAFAFADAGQADAHAAAHQAAAHgDAHQgDAHgFAGQgFAFgHAEQgHADgIAAQgHAAgHgDgAgJgdIgGAGQgDADgBAFQgCAFAAAGQAAAGACAHQABAHAEAFQADAFAFADQAEADAEAAQAFAAADgCIAGgGQADgDABgFQACgFAAgGIgBgNQgCgHgDgFQgDgFgFgDQgFgDgFAAQgEAAgDACg");
	this.shape_66.setTransform(378.2,511.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgGA3IAAhFIAJgEIAEAAIAABJgAgCgoIgCgBIgCgDIgBgDIABgCIACgDIACgCIACAAIADAAIADACIABADIABACIgBADIgBADIgDABIgDABg");
	this.shape_67.setTransform(372.1,509.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgBAxIgFgEQgCgCAAgDIgBgHIAAgzIgNAAIAAgDQAGAAAEgCQAEgCADgEIAEgJIABgKIADAAIAAAYIARAAIAAAGIgRAAIAAAzIABACIACADIACACIADABQABAAAAgBQABAAABAAQAAAAABAAQAAgBABAAIADgDIAEADQgDAEgFADQgFAEgHAAIgEgBg");
	this.shape_68.setTransform(368.2,510.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgGA3IAAhFIAJgEIAEAAIAABJgAgCgoIgCgBIgCgDIgBgDIABgCIACgDIACgCIACAAIADAAIADACIABADIABACIgBADIgBADIgDABIgDABg");
	this.shape_69.setTransform(364.1,509.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AAUA4IAAgJIgGAEIgGACIgGACIgEABQgHAAgFgDQgGgDgEgFQgFgFgCgHQgCgHAAgIIABgJIAEgJIAGgHIAIgGQAEgDAFgBIAIgCQAGAAAEACIAHAFIAAgnIAKgEIAEAAIAABvgAgEgLQgFACgCAEQgDAEgBADQgCAGAAAGQAAAHACAGQACAHACAEQADAFAFACQADADAEAAIAEgBIAFgBIAEgDIADgDIAAgkQAAgEgBgCQgCgDgDgDIgGgEIgGgBQgDAAgDACg");
	this.shape_70.setTransform(358.2,509.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgRAkQgDgBgDgCQgCgDgBgDIgCgHQAAgFACgEIAFgHIAIgEIAJgDIAIgEIAKgCIAAgFIgBgIQgBgEgCgCQgBgCgDgBIgGgBIgEABIgEADIgBADIgBAEIAAAEIgBADIgDACIgDABIgDgBIgDgBIgBgDIgBgEQAAgDADgDQACgDAEgDQAEgCAFgBQAGgCAEAAQAHAAAFACQAFABADADQADACACAEIABAIIAAA1IgPAAIAAgKIgFAEIgFAEIgFADIgIABQgEAAgEgCgAAIgCIgHACIgEACIgFAEIgEAFIgBAFIABAFIADAEIADADIAFABIADgBIAEgBIAEgDIAEgDIAAgag");
	this.shape_71.setTransform(350.1,511.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgWAlIAAhIIAPAAIAAAOIAEgGIADgEIAGgEQADgBADAAIAEABIAEACIACADIABADQAAAEgCACQgCABgFAAIgDgBIgDAAIgDgBIgDgBIgCABIgCACIgDADIgCAFIAAAxg");
	this.shape_72.setTransform(344.4,511.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgBAxIgFgEQgCgCAAgDIgBgHIAAgzIgNAAIAAgDQAGAAAEgCQAEgCADgEIAEgJIABgKIADAAIAAAYIARAAIAAAGIgRAAIAAAzIABACIACADIACACIADABQABAAAAgBQABAAABAAQAAAAABAAQAAgBABAAIADgDIAEADQgDAEgFADQgFAEgHAAIgEgBg");
	this.shape_73.setTransform(338.9,510.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgFAlIgHgCIgIgEQgDgCgDgFIAGgFIAFAGIAFAFIAFACIAFABIAEgBIAFgDIADgDIAAgEQAAgDgBgDIgFgEIgFgEIgGgDIgHgEIgHgDIgEgGQgBgDAAgFQAAgFACgDQABgEADgDQAEgDAEgBQAFgCAFAAIAFABIAHACIAGAEIAGAHIgFAFQgFgHgEgDQgGgEgEAAIgFABIgFACIgCADIgBAEQgBADACADIAFAEIAHAEIAFADIAIAEIAIADQADACABAEQACADAAAFQAAAEgCAEQgBAEgEADQgEADgEACQgGACgGAAg");
	this.shape_74.setTransform(329,511.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgRAkQgDgBgDgCQgCgDgBgDIgCgHQAAgFACgEIAFgHIAIgEIAJgDIAIgEIAKgCIAAgFIgBgIQgBgEgCgCQgBgCgDgBIgGgBIgEABIgEADIgBADIgBAEIAAAEIgBADIgDACIgDABIgDgBIgDgBIgBgDIgBgEQAAgDADgDQACgDAEgDQAEgCAFgBQAGgCAEAAQAHAAAFACQAFABADADQADACACAEIABAIIAAA1IgPAAIAAgKIgFAEIgFAEIgFADIgIABQgEAAgEgCgAAIgCIgHACIgEACIgFAEIgEAFIgBAFIABAFIADAEIADADIAFABIADgBIAEgBIAEgDIAEgDIAAgag");
	this.shape_75.setTransform(321.7,511.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgWAlIAAhIIAPAAIAAAOIAEgGIADgEIAGgEQADgBADAAIAEABIAEACIACADIABADQAAAEgCACQgDABgEAAIgDgBIgDAAIgDgBIgCgBIgDABIgCACIgCADIgDAFIAAAxg");
	this.shape_76.setTransform(311.9,511.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgMAjQgGgDgGgFQgEgEgDgHQgDgGAAgIQAAgHACgHQAEgIAEgFQAFgGAGgDQAHgDAGAAQAHAAAHADQAGACAEAFQAEAEACAGQADAFAAAGIg1AAQAAAGACAGQACAGADAFQAEAEAEADQAFADAEAAQAFAAAEgCIAIgEIAGgGQACgDABgDIAFACQgCAFgDAFQgDAFgGAEQgEAEgGACQgFACgGAAQgGAAgGgDgAAPgMQAAgEgCgDIgEgHIgGgEQgDgBgCAAIgGABIgGAEIgEAHIgCAHIAjAAIAAAAg");
	this.shape_77.setTransform(304.7,511.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AAQAlIAAgwQAAgHgEgEQgDgEgFAAIgEAAIgEADIgGADIgFAFIAAA0IgOAAIAAhIIAOAAIAAAOQAHgIAHgDQAFgEAIAAQAEAAADACIAGAEIAEAIQABADAAAGIAAAyg");
	this.shape_78.setTransform(296.7,511.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AAQAlIAAgwQAAgHgEgEQgDgEgFAAIgEAAIgEADIgGADIgFAFIAAA0IgOAAIAAhIIAOAAIAAAOQAHgIAHgDQAFgEAIAAQAEAAADACIAGAEIAEAIQABADAAAGIAAAyg");
	this.shape_79.setTransform(288.9,511.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgRAkQgDgBgDgCQgCgDgBgDIgCgHQAAgFACgEIAFgHIAIgEIAJgDIAIgEIAKgCIAAgFIgBgIQgBgEgCgCQgBgCgDgBIgGgBIgEABIgEADIgBADIgBAEIAAAEIgBADIgDACIgDABIgDgBIgDgBIgBgDIgBgEQAAgDADgDQACgDAEgDQAEgCAFgBQAGgCAEAAQAHAAAFACQAFABADADQADACACAEIABAIIAAA1IgPAAIAAgKIgFAEIgFAEIgFADIgIABQgEAAgEgCgAAIgCIgHACIgEACIgFAEIgEAFIgBAFIABAFIADAEIADADIAFABIADgBIAEgBIAEgDIAEgDIAAgag");
	this.shape_80.setTransform(281,511.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AApAlIAAgwIgBgGIgDgEIgEgEIgGgBIgGABIgFACIgGADIgDAFIAAA0IgNAAIAAgwIgBgGIgCgEIgFgEIgFgBIgGABIgGACIgFADIgEAFIAAA0IgOAAIAAhIIAOAAIAAAOIAGgGIAIgEIAHgEIAHgBIAHABIAFAEIAEAEQACADABADIAEgGIAHgEIAJgEQAEgBAFAAQADAAAEACQAEACACADQAEADABAEIABAJIAAAyg");
	this.shape_81.setTransform(271.3,511.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgMAjQgHgDgEgFQgFgEgDgHQgDgGAAgIQAAgHADgHQACgIAFgFQAFgGAGgDQAHgDAGAAQAIAAAFADQAHACAEAFQAEAEACAGQADAFAAAGIg1AAQAAAGACAGQACAGADAFQAEAEAEADQAFADAEAAQAFAAAEgCIAIgEIAGgGQACgDABgDIAFACQgBAFgEAFQgEAFgFAEQgEAEgFACQgGACgGAAQgFAAgHgDgAAOgMQAAgEgBgDIgEgHIgGgEQgDgBgDAAIgFABIgGAEIgEAHIgCAHIAiAAIAAAAg");
	this.shape_82.setTransform(256.7,511.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AApAlIAAgwIgBgGIgDgEIgEgEIgFgBIgHABIgGACIgEADIgEAFIAAA0IgMAAIAAgwIgBgGIgEgEIgEgEIgFgBIgFABIgGACIgGADIgEAFIAAA0IgPAAIAAhIIAPAAIAAAOIAHgGIAGgEIAIgEIAHgBIAHABIAFAEIAEAEQACADAAADIAGgGIAHgEIAIgEQAEgBAFAAQAEAAADACQAEACACADQADADACAEIACAJIAAAyg");
	this.shape_83.setTransform(246.2,511.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgRAkQgDgBgDgCQgCgDgBgDIgCgHQAAgFACgEIAFgHIAIgEIAJgDIAIgEIAKgCIAAgFIgBgIQgBgEgCgCQgBgCgDgBIgGgBIgEABIgEADIgBADIgBAEIAAAEIgBADIgDACIgDABIgDgBIgDgBIgBgDIgBgEQAAgDADgDQACgDAEgDQAEgCAFgBQAGgCAEAAQAHAAAFACQAFABADADQADACACAEIABAIIAAA1IgPAAIAAgKIgFAEIgFAEIgFADIgIABQgEAAgEgCgAAIgCIgHACIgEACIgFAEIgEAFIgBAFIABAFIADAEIADADIAFABIADgBIAEgBIAEgDIAEgDIAAgag");
	this.shape_84.setTransform(235.7,511.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgGAlIgHgCIgGgEQgEgCgDgFIAGgFIAFAGIAFAFIAFACIAFABIAFgBIAEgDIACgDIABgEQAAgDgBgDIgEgEIgHgEIgFgDIgHgEIgGgDIgFgGQgBgDgBgFQAAgFACgDQACgEAEgDQADgDAFgBQAEgCAFAAIAGABIAFACIAGAEIAHAHIgGAFQgEgHgFgDQgFgEgEAAIgGABIgEACIgDADIgBAEQAAADACADIAFAEIAHAEIAGADIAIAEIAGADQAEACABAEQACADAAAFQAAAEgBAEQgCAEgEADQgDADgGACQgFACgGAAg");
	this.shape_85.setTransform(229.1,511.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgMAjQgGgDgFgFQgFgEgDgHQgDgGAAgIQAAgHADgHQADgIAEgFQAFgGAHgDQAGgDAGAAQAHAAAHADQAFACAFAFQAEAEADAGQACAFAAAGIg1AAQAAAGACAGQACAGAEAFQADAEAFADQAEADAEAAQAFAAAEgCIAIgEIAGgGQADgDABgDIAEACQgCAFgDAFQgEAFgEAEQgFAEgFACQgGACgGAAQgGAAgGgDgAAOgMQAAgEgBgDIgEgHIgGgEQgDgBgCAAIgHABIgFAEIgEAHIgCAHIAiAAIAAAAg");
	this.shape_86.setTransform(217.7,511.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AAQA3IAAgyQAAgFgEgEQgDgEgFAAIgEAAIgEADIgGADIgFADIAAA2IgOAAIAAhpIAKgEIAEAAIAAAzQAHgIAHgDQAFgEAIAAQAEAAADACIAGAEIAEAIQABADAAAEIAAA0g");
	this.shape_87.setTransform(209.7,509.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgBAxIgFgEQgCgCAAgDIgBgHIAAgzIgNAAIAAgDQAGAAAEgCQAEgCADgEIAEgJIABgKIADAAIAAAYIARAAIAAAGIgRAAIAAAzIABACIACADIACACIADABQABAAAAgBQABAAABAAQAAAAABAAQAAgBABAAIADgDIAEADQgDAEgFADQgFAEgHAAIgEgBg");
	this.shape_88.setTransform(203.4,510.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AAQAlIAAgwQAAgHgEgEQgDgEgFAAIgEAAIgEADIgGADIgFAFIAAA0IgOAAIAAhIIAOAAIAAAOQAHgIAHgDQAFgEAIAAQAEAAADACIAGAEIAEAIQABADAAAGIAAAyg");
	this.shape_89.setTransform(193,511.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgGA3IAAhFIAJgEIAEAAIAABJgAgCgoIgCgBIgCgDIgBgDIABgCIACgDIACgCIACAAIADAAIADACIABADIABACIgBADIgBADIgDABIgDABg");
	this.shape_90.setTransform(187.5,509.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AAUA4IAAgJIgFAEIgHACIgGACIgEABQgHAAgGgDQgFgDgFgFQgEgFgCgHQgCgHgBgIIACgJIAEgJIAGgHIAIgGQAEgDAFgBIAIgCQAFAAAFACIAHAFIAAgnIAKgEIAEAAIAABvgAgFgLQgEACgCAEQgDAEgCADQgBAGAAAGQAAAHABAGQADAHADAEQADAFAEACQADADAEAAIAEgBIAFgBIAEgDIADgDIAAgkQAAgEgCgCQgBgDgDgDIgGgEIgHgBQgBAAgFACg");
	this.shape_91.setTransform(177.4,509.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgMAjQgHgDgEgFQgFgEgDgHQgDgGAAgIQAAgHADgHQACgIAFgFQAFgGAGgDQAHgDAGAAQAIAAAFADQAHACAEAFQAEAEACAGQADAFAAAGIg1AAQAAAGACAGQACAGADAFQAEAEAEADQAFADAEAAQAFAAAEgCIAIgEIAGgGQACgDABgDIAFACQgBAFgEAFQgEAFgFAEQgEAEgFACQgGACgGAAQgFAAgHgDgAAOgMQAAgEgBgDIgEgHIgGgEQgDgBgDAAIgFABIgGAEIgEAHIgCAHIAiAAIAAAAg");
	this.shape_92.setTransform(169.4,511.7);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgWAlIAAhIIAPAAIAAAOIAEgGIADgEIAGgEQADgBACAAIAFABIAEACIACADIABADQAAAEgDACQgBABgFAAIgDgBIgDAAIgDgBIgDgBIgCABIgCACIgDADIgCAFIAAAxg");
	this.shape_93.setTransform(163.1,511.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgMAjQgGgDgGgFQgEgEgDgHQgDgGAAgIQAAgHACgHQADgIAFgFQAFgGAHgDQAGgDAGAAQAHAAAHADQAFACAFAFQAEAEADAGQACAFAAAGIg1AAQAAAGACAGQACAGAEAFQADAEAEADQAFADAEAAQAFAAAEgCIAIgEIAGgGQACgDACgDIAEACQgCAFgDAFQgDAFgFAEQgFAEgGACQgFACgGAAQgFAAgHgDgAAPgMQgBgEgBgDIgEgHIgGgEQgDgBgCAAIgGABIgGAEIgEAHIgCAHIAjAAIAAAAg");
	this.shape_94.setTransform(155.8,511.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AAAAlIgjhJIAPAAIAYA2IAZg2IAHAAIghBJg");
	this.shape_95.setTransform(148.2,511.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgGA3IAAhFIAJgEIAEAAIAABJgAgCgoIgCgBIgCgDIgBgDIABgCIACgDIACgCIACAAIADAAIADACIABADIABACIgBADIgBADIgDABIgDABg");
	this.shape_96.setTransform(142.9,509.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgGA3IAAhpIAIgEIAFAAIAABtg");
	this.shape_97.setTransform(139.7,509.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgMAjQgGgDgFgFQgFgEgDgHQgDgGAAgIQAAgHADgHQADgIAEgFQAFgGAHgDQAGgDAGAAQAHAAAHADQAFACAFAFQAEAEADAGQACAFAAAGIg1AAQAAAGACAGQACAGAEAFQADAEAFADQAEADAEAAQAFAAAEgCIAIgEIAGgGQADgDABgDIAEACQgCAFgDAFQgEAFgEAEQgFAEgFACQgGACgGAAQgGAAgGgDgAAOgMQAAgEgBgDIgEgHIgGgEQgDgBgCAAIgHABIgFAEIgEAHIgCAHIAiAAIAAAAg");
	this.shape_98.setTransform(134,511.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AAUA4IAAgJIgFAEIgHACIgGACIgEABQgHAAgGgDQgFgDgFgFQgDgFgDgHQgCgHgBgIIACgJIAEgJIAGgHIAIgGQAEgDAFgBIAIgCQAFAAAEACIAIAFIAAgnIAKgEIAFAAIAABvgAgFgLQgEACgCAEQgDAEgCADQgBAGAAAGQAAAHABAGQACAHAEAEQADAFAEACQADADAEAAIAEgBIAFgBIAEgDIADgDIAAgkQAAgEgCgCQgBgDgDgDIgGgEIgHgBQgBAAgFACg");
	this.shape_99.setTransform(125.6,509.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgFAlIgIgCIgHgEQgDgCgDgFIAGgFIAFAGIAFAFIAFACIAFABIAEgBIAFgDIACgDIABgEQABgDgCgDIgEgEIgGgEIgGgDIgHgEIgGgDIgFgGQgCgDABgFQAAgFABgDQACgEAEgDQADgDAFgBQAEgCAFAAIAFABIAGACIAHAEIAGAHIgFAFQgEgHgFgDQgGgEgEAAIgFABIgFACIgDADIgBAEQABADABADIAFAEIAHAEIAFADIAIAEIAHADQADACACAEQACADAAAFQAAAEgBAEQgCAEgEADQgEADgFACQgFACgGAAg");
	this.shape_100.setTransform(114.1,511.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgGA3IAAhFIAJgEIAEAAIAABJgAgCgoIgCgBIgCgDIgBgDIABgCIACgDIACgCIACAAIADAAIADACIABADIABACIgBADIgBADIgDABIgDABg");
	this.shape_101.setTransform(109.2,509.8);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgBAxIgFgEQgCgCAAgDIgBgHIAAgzIgNAAIAAgDQAGAAAEgCQAEgCADgEIAEgJIABgKIADAAIAAAYIARAAIAAAGIgRAAIAAAzIABACIACADIACACIADABQABAAAAgBQABAAABAAQAAAAABAAQAAgBABAAIADgDIAEADQgDAEgFADQgFAEgHAAIgEgBg");
	this.shape_102.setTransform(101.2,510.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgGA3IAAhFIAJgEIAEAAIAABJgAgCgoIgCgBIgCgDIgBgDIABgCIACgDIACgCIACAAIADAAIADACIABADIABACIgBADIgBADIgDABIgDABg");
	this.shape_103.setTransform(97.1,509.8);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgKAPQAEgBADgBIADgEIADgFIABgEIgBgCIgBgBIgCABIAAAAIAAABIgDABIgCgBIgCgCIgCgDIgBgDIABgDIACgDIADgCIAEgBIADABIAEAEIADAEIABAHQAAACgCAFIgFAGIgFAGIgJABg");
	this.shape_104.setTransform(90.2,515.8);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AALAlIAAgwIgBgFIgBgEIgDgCIgCgBIgEABIgCABIgEADIgEAEIAAAzIgWAAIAAhIIAWAAIAAAGQAFgDAFgCQAFgCAGAAQAEAAAFACQAEACADACQADADABAFQACAEAAAFIAAAyg");
	this.shape_105.setTransform(84.2,511.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgPAjQgHgDgGgFQgFgFgDgHQgDgHAAgIQAAgGADgHQADgHAFgGQAGgFAHgDQAIgDAHAAQAIAAAIADQAHADAGAFQAFAFADAHQADAGAAAIQAAAGgDAHQgDAIgFAFQgGAFgHAEQgIADgIAAQgHAAgIgDgAgHgaIgEAFIgDAIIgBAJQAAAFABAGQABAHADAEQACAFAEADQAEADACAAQADAAADgCIAEgGIADgHIABgKIgBgLIgDgLQgDgEgEgDQgDgDgEAAQgCAAgDACg");
	this.shape_106.setTransform(75.5,511.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgKA1IAAhDIAVgGIAABJgAgDggIgEgCIgDgDIgBgFIABgEIADgDIAEgDIADAAIAEAAIAEADIADADIABAEIgBAFIgDADIgEACIgEABIgDgBg");
	this.shape_107.setTransform(68.8,510);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgEAwQgDgCgCgDQgDgCgBgDQgBgEAAgDIAAgvIgMAAIAAgHQAEAAAEgCQADgBADgEIAFgIIADgJIAKAAIAAAWIASAAIAAAJIgSAAIAAAuIABAEQABAAAAABQAAAAAAAAQABAAAAAAQABAAAAAAIADgBIADgBIACgCIABgCIAIAGIgEAGIgFAEIgHADIgJABIgGgBg");
	this.shape_108.setTransform(63.9,510.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgRAkIgHgEQgDgCgCgEQgBgDAAgEQAAgFABgDIAFgGIAGgFIAIgCIAJgDIAHgDIADgBIAAgHIgBgGIgCgEIgDgCIgDgBIgEABIgCACIgCACIgBAEIAAAEIgCADIgDADIgFAAIgEAAIgDgCIgCgDIgBgEQAAgEACgDIAHgGQAFgCAGgBQAFgCAFAAQAIAAAFACQAGABAEADQADACACAEQACAEAAAEIAAA1IgWAAIAAgGIgEADIgEADIgDABIgGABQgFAAgEgCgAACACIgEADIgEAFQgCACAAADIABAEIABADIACADIADAAIAEgBIAGgEIAAgUg");
	this.shape_109.setTransform(56.6,511.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgEAwQgDgCgCgDQgDgCgBgDQgBgEAAgDIAAgvIgMAAIAAgHQAEAAAEgCQADgBADgEIAFgIIADgJIAKAAIAAAWIASAAIAAAJIgSAAIAAAuIABAEQAAAAABABQAAAAAAAAQABAAAAAAQABAAAAAAIADgBIADgBIACgCIABgCIAIAGIgEAGIgFAEIgHADIgJABIgGgBg");
	this.shape_110.setTransform(50.3,510.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgKAkQgFgBgDgDIgGgFIgEgGIANgFQACAGAEADQADADAGAAIACAAIADgCIACgCIABgDIgBgFIgDgDIgEgDIgDgDIgIgEIgIgDQgEgDgCgEQgCgEAAgFQAAgEACgEQACgEAEgDQADgDAFgBQAFgCAGAAIAHABIAIADIAFAFIAFAGIgNAEIgDgFIgDgDIgDgBIgDAAIgCAAIgDABIgCADIgBACIABAEIADAEIAEADIAEADIAKAEIAHADIAGAHQACADAAAFQAAAFgCAEQgBAEgEADQgDADgGACQgGACgHAAQgFAAgFgCg");
	this.shape_111.setTransform(43.8,511.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgVA0QgIgCgGgFIAAhdIAWgGIAAApIAFgDIAFgCIADgBIAEgBQAHAAAGADQAGADAEAEQAEAFADAFQACAFAAAGQAAAJgDAIQgEAIgFAGQgGAGgIADQgIAEgGAAQgJAAgIgDgAgEgFIgDACIgDACIgDABIAAAoIADACIACACIADABIADAAQACAAADgCQADgCACgEQADgEABgGQABgFAAgGQAAgFgBgEIgDgHIgFgDQgDgCgCAAg");
	this.shape_112.setTransform(36.2,510);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgQAjIgIgFQgEgDgCgEQgCgEAAgFIAAgyIAWAAIAAAyIABAEIADADIADADIADAAIACAAIADgCIADgEIADgDIAAgzIAWAAIAABHIgWAAIAAgHQgFAFgEACQgDACgFAAQgFAAgFgCg");
	this.shape_113.setTransform(27.5,511.8);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgKAkQgFgBgDgDIgGgFIgEgGIANgFQACAGAEADQADADAGAAIACAAIADgCIACgCIABgDIgBgFIgDgDIgEgDIgDgDIgIgEIgIgDQgEgDgCgEQgCgEAAgFQAAgEACgEQACgEAEgDQADgDAFgBQAFgCAGAAIAHABIAIADIAFAFIAFAGIgNAEIgDgFIgDgDIgDgBIgDAAIgCAAIgDABIgCADIgBACIABAEIADAEIAEADIAEADIAKAEIAHADIAGAHQACADAAAFQAAAFgCAEQgBAEgEADQgDADgGACQgGACgHAAQgFAAgFgCg");
	this.shape_114.setTransform(19.9,511.7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgMAjQgGgDgFgFQgFgEgDgHQgDgGAAgIQAAgHADgHQADgIAEgFQAFgGAHgDQAGgDAGAAQAIAAAFADQAGACAFAFQAEAEADAGQACAFAAAGIg1AAQAAAGACAGQACAGAEAFQADAEAFADQAEADAEAAQAFAAAEgCIAIgEIAGgGQACgDACgDIAEACQgBAFgEAFQgEAFgEAEQgFAEgFACQgGACgGAAQgGAAgGgDgAAOgMQABgEgCgDIgEgHIgGgEQgDgBgDAAIgGABIgFAEIgEAHIgCAHIAiAAIAAAAg");
	this.shape_115.setTransform(655.2,489.9);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AAQA3IAAgyQAAgGgEgDQgDgEgFAAIgEAAIgEADIgGAEIgFABIAAA3IgOAAIAAhpIAKgEIAEAAIAAAzQAHgHAHgEQAFgEAIAAQAEAAADACIAGAFIAEAHQABADAAAEIAAA0g");
	this.shape_116.setTransform(647.2,488);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgBAwIgFgDQgCgDAAgDIgBgGIAAgyIgNAAIAAgEQAGAAAEgCQAEgCADgEIAEgJIABgLIADAAIAAAZIARAAIAAAHIgRAAIAAAyIABACIACADIACABIADACQABAAAAgBQABAAABAAQAAAAABAAQAAgBABAAIADgDIAEACQgDAGgFACQgFADgHABIgEgCg");
	this.shape_117.setTransform(640.9,488.7);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AAQA3IAAgyQAAgGgEgDQgDgEgFAAIgEAAIgEADIgGAEIgFABIAAA3IgOAAIAAhpIAKgEIAEAAIAAAzQAHgHAHgEQAFgEAIAAQAEAAADACIAGAFIAEAHQABADAAAEIAAA0g");
	this.shape_118.setTransform(630.5,488);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AgeAyQgIgFgBgGIACgGIAEgGIAFgEIAGgFIgEgCIgDgBIgCgCIAAgEIAAgEIAEgFIAEgCIAHgDQgIgDgFgGQgDgFAAgIQgBgFADgEQADgFAEgEQAEgEAGgCQAGgCAHAAIAEAAIAHABIAEACIAEADIAUAAIAAAFIgNAAIADAHIABAIQAAAFgCAFQgDAFgFADQgEADgGADQgHABgFAAIgFAAIgGgBIgDADIgBADQAAABAAAAQAAABAAAAQAAABABAAQAAAAABABQACABAFAAIAZABQAHABAEABQAEABADADQADACABACIAAAHQAAAGgCAFQgDAGgGADQgGAEgIACQgIACgIAAQgTAAgJgEgAgVAWIgCAEIAAACIgBAEQAAABAAAAQAAABAAAAQABABAAAAQAAABAAAAQADADADACIAJACQAEACAGgBQAHABAFgCQAHgBADgCIAGgEQACgDAAgCQABgFgFgCQgFgCgJAAIgKAAIgIgBIgJgBIgEgBgAgIgvIgFADIgCAHIgBAIIABAJIADAIQACADAEABQADACADAAQACAAACgBIAGgEQACgDABgDIABgHQAAgFgBgFQgBgEgDgEQgCgDgEgCQgDgCgCAAQgDAAgDACg");
	this.shape_119.setTransform(622.1,491.5);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgQAkIgHgGQgDgDgCgEQgCgEAAgEIAAgzIAPAAIAAAzIABAEQABADADACIAFADIAFABIAEgBIAEgDIAFgEIADgEIAAg0IAPAAIAABIIgPAAIAAgOIgEAGIgHAFIgFADIgHABIgJgBg");
	this.shape_120.setTransform(613.9,490);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgOAjQgHgDgFgFQgFgFgDgHQgDgHAAgIQAAgGADgHQADgHAFgFQAFgGAHgDQAHgDAHAAQAIAAAHADQAHADAFAFQAFAFADAGQADAHAAAHQAAAHgDAHQgDAHgFAGQgFAFgHAEQgHADgIAAQgHAAgHgDgAgJgdIgGAGQgDADgBAFQgCAFAAAGQAAAGACAHQABAHAEAFQADAFAFADQAEADAEAAQAFAAADgCIAGgGQADgDABgFQACgFAAgGIgBgNQgCgHgDgFQgDgFgFgDQgFgDgFAAQgEAAgDACg");
	this.shape_121.setTransform(605.5,489.9);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgWAlIAAhIIAPAAIAAAPIAEgHIADgEIAGgEQACgBADAAIAFABIADABIADAEIABADQAAAEgDACQgCABgDAAIgFAAIgCgBIgCgBIgEgCIgCACIgBACIgEADIgCAFIAAAxg");
	this.shape_122.setTransform(598.9,489.8);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AAQA3IAAgyQAAgGgEgDQgDgEgFAAIgEAAIgEADIgGAEIgFABIAAA3IgOAAIAAhpIAKgEIAEAAIAAAzQAHgHAHgEQAFgEAIAAQAEAAADACIAGAFIAEAHQABADAAAEIAAA0g");
	this.shape_123.setTransform(591.7,488);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AgBAwIgFgDQgCgDAAgDIgBgGIAAgyIgNAAIAAgEQAGAAAEgCQAEgCADgEIAEgJIABgLIADAAIAAAZIARAAIAAAHIgRAAIAAAyIABACIACADIACABIADACQABAAAAgBQABAAABAAQAAAAABAAQAAgBABAAIADgDIAEACQgDAGgFACQgFADgHABIgEgCg");
	this.shape_124.setTransform(585.5,488.7);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AgFAlIgHgCIgIgEQgDgCgDgFIAGgFIAFAGIAFAFIAFACIAFABIAEgBIAFgDIADgDIAAgEQAAgDgBgDIgFgEIgFgEIgGgDIgHgEIgHgDIgEgGQgBgDAAgFQAAgFACgDQABgEADgDQAEgDAEgBQAFgCAFAAIAFABIAHACIAGAEIAGAHIgFAFQgFgHgEgDQgGgEgEAAIgFABIgFACIgCADIgBAEQgBADACADIAFAEIAHAEIAFADIAIAEIAIADQADACABAEQACADAAAFQAAAEgCAEQgBAEgEADQgEADgEACQgGACgGAAg");
	this.shape_125.setTransform(575.6,489.9);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AgMAjQgGgDgFgFQgFgEgDgHQgDgGAAgIQAAgHADgHQADgIAEgFQAFgGAHgDQAGgDAGAAQAIAAAGADQAFACAFAFQAEAEADAGQACAFAAAGIg1AAQAAAGACAGQACAGAEAFQADAEAFADQAEADAEAAQAFAAAEgCIAIgEIAGgGQACgDACgDIAEACQgBAFgEAFQgEAFgEAEQgFAEgFACQgGACgGAAQgGAAgGgDgAAOgMQABgEgCgDIgEgHIgGgEQgDgBgDAAIgGABIgFAEIgEAHIgCAHIAiAAIAAAAg");
	this.shape_126.setTransform(568.3,489.9);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AAAAlIgjhJIAQAAIAYA2IAYg2IAHAAIghBJg");
	this.shape_127.setTransform(560.7,489.9);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgOAjQgHgDgFgFQgFgFgDgHQgDgHAAgIQAAgGADgHQADgHAFgFQAFgGAHgDQAHgDAHAAQAIAAAHADQAHADAFAFQAFAFADAGQADAHAAAHQAAAHgDAHQgDAHgFAGQgFAFgHAEQgHADgIAAQgHAAgHgDgAgJgdIgGAGQgDADgBAFQgCAFAAAGQAAAGACAHQABAHAEAFQADAFAFADQAEADAEAAQAFAAADgCIAGgGQADgDABgFQACgFAAgGIgBgNQgCgHgDgFQgDgFgFgDQgFgDgFAAQgEAAgDACg");
	this.shape_128.setTransform(552.7,489.9);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AApAlIAAgwIgBgGIgDgEIgEgEIgGgBIgFABIgGACIgGAEIgDADIAAA1IgNAAIAAgwIgBgGIgCgEIgFgEIgFgBIgGABIgFACIgGAEIgEADIAAA1IgOAAIAAhIIAOAAIAAAPIAGgHIAHgEIAIgEIAIgBIAGABIAFAEIAEAEQACADABAEIAEgHIAHgEIAJgEQAEgBAEAAQAEAAAEACQAEACADADQADADABAEIABAJIAAAyg");
	this.shape_129.setTransform(541.9,489.8);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AgdA0IgDgBIgDgDIgBgDIABgDIACgDIACgCIADAAIAFAAIABABIADABIAEABIADgBIAEgEIACgEIACgEIAEgLIglhEIARAAIAaA0IAXg0IAJAAIgmBUIgEAJIgGAHIgHAEIgHABg");
	this.shape_130.setTransform(527.6,491.6);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AgBAwIgFgDQgCgDAAgDIgBgGIAAgyIgNAAIAAgEQAGAAAEgCQAEgCADgEIAEgJIABgLIADAAIAAAZIARAAIAAAHIgRAAIAAAyIABACIACADIACABIADACQABAAAAgBQABAAABAAQAAAAABAAQAAgBABAAIADgDIAEACQgDAGgFACQgFADgHABIgEgCg");
	this.shape_131.setTransform(521.4,488.7);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AgGA3IAAhFIAJgEIAEAAIAABJgAgCgoIgCgCIgCgCIgBgCIABgDIACgDIACgCIACAAIADAAIADACIABADIABADIgBACIgBACIgDACIgDABg");
	this.shape_132.setTransform(517.3,488);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgLAjQgHgDgFgFQgEgFgDgGQgDgHAAgHQAAgHADgHQADgHAGgGQAFgFAHgEQAHgDAFAAQAHAAAFACQAFABAEACQAEADACADQACADAAAEIgBADIgCADIgDABIgEABIgEgBIgCgCIgCgCIAAgDIgBgFIgCgEIgEgCIgGgBQgDAAgEACQgEACgCADQgDAEgCAEQgBAFAAAFQAAAGACAFQACAHADAEQADAFAFADQADADAGAAQAFAAADgCIAHgEIAFgHIADgHIAFABIgFANQgDAFgFAEQgEAEgFACQgGACgGAAQgFAAgGgDg");
	this.shape_133.setTransform(511.8,489.9);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AgGA3IAAhFIAJgEIAEAAIAABJgAgCgoIgCgCIgCgCIgBgCIABgDIACgDIACgCIACAAIADAAIADACIABADIABADIgBACIgBACIgDACIgDABg");
	this.shape_134.setTransform(506.2,488);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgWAlIAAhIIAOAAIAAAPIAFgHIADgEIAGgEQACgBADAAIAFABIADABIADAEIABADQAAAEgDACQgCABgDAAIgFAAIgCgBIgCgBIgEgCIgCACIgBACIgEADIgDAFIAAAxg");
	this.shape_135.setTransform(502.2,489.8);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgBAwIgFgDQgCgDAAgDIgBgGIAAgyIgNAAIAAgEQAGAAAEgCQAEgCADgEIAEgJIABgLIADAAIAAAZIARAAIAAAHIgRAAIAAAyIABACIACADIACABIADACQABAAAAgBQABAAABAAQAAAAABAAQAAgBABAAIADgDIAEACQgDAGgFACQgFADgHABIgEgCg");
	this.shape_136.setTransform(496.7,488.7);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AgLAjQgHgDgFgFQgEgFgDgGQgDgHAAgHQAAgHADgHQADgHAGgGQAFgFAHgEQAHgDAFAAQAHAAAFACQAFABAEACQAEADACADQACADAAAEIgBADIgCADIgDABIgEABIgEgBIgCgCIgCgCIAAgDIgBgFIgCgEIgEgCIgGgBQgDAAgEACQgEACgCADQgDAEgCAEQgBAFAAAFQAAAGACAFQACAHADAEQADAFAFADQADADAGAAQAFAAADgCIAHgEIAFgHIADgHIAFABIgFANQgDAFgFAEQgEAEgFACQgGACgGAAQgFAAgGgDg");
	this.shape_137.setTransform(490.3,489.9);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AgMAjQgGgDgFgFQgFgEgDgHQgDgGAAgIQAAgHADgHQADgIAEgFQAFgGAHgDQAGgDAGAAQAIAAAFADQAGACAFAFQAEAEADAGQACAFAAAGIg1AAQAAAGACAGQACAGAEAFQADAEAFADQAEADAEAAQAFAAAEgCIAIgEIAGgGQACgDACgDIAEACQgBAFgEAFQgEAFgEAEQgFAEgFACQgGACgGAAQgGAAgGgDgAAOgMQABgEgCgDIgEgHIgGgEQgDgBgDAAIgGABIgFAEIgEAHIgCAHIAiAAIAAAAg");
	this.shape_138.setTransform(482.4,489.9);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AgGA3IAAhpIAIgEIAFAAIAABtg");
	this.shape_139.setTransform(476.7,488);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AgMAjQgHgDgFgFQgEgEgDgHQgDgGAAgIQAAgHACgHQADgIAFgFQAFgGAGgDQAHgDAGAAQAIAAAFADQAHACAEAFQAEAEACAGQADAFAAAGIg1AAQAAAGACAGQACAGADAFQAEAEAEADQAFADAEAAQAFAAAEgCIAIgEIAGgGQADgDAAgDIAFACQgCAFgDAFQgEAFgFAEQgEAEgGACQgFACgGAAQgGAAgGgDgAAOgMQAAgEgBgDIgEgHIgGgEQgDgBgDAAIgFABIgGAEIgEAHIgCAHIAiAAIAAAAg");
	this.shape_140.setTransform(471,489.9);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AgWAlIAAhIIAPAAIAAAPIAEgHIADgEIAGgEQADgBADAAIAEABIAEABIACAEIABADQAAAEgCACQgDABgEAAIgDAAIgDgBIgDgBIgCgCIgDACIgCACIgCADIgDAFIAAAxg");
	this.shape_141.setTransform(460.4,489.8);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AgMAjQgGgDgGgFQgEgEgDgHQgDgGAAgIQAAgHACgHQAEgIAEgFQAFgGAGgDQAHgDAGAAQAHAAAHADQAGACAEAFQAEAEACAGQADAFAAAGIg1AAQAAAGACAGQACAGADAFQAEAEAEADQAFADAEAAQAFAAAEgCIAIgEIAGgGQACgDABgDIAFACQgCAFgDAFQgDAFgGAEQgEAEgGACQgFACgGAAQgGAAgGgDgAAPgMQAAgEgCgDIgEgHIgGgEQgDgBgCAAIgGABIgGAEIgEAHIgCAHIAjAAIAAAAg");
	this.shape_142.setTransform(453.2,489.9);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AgBAwIgFgDQgCgDAAgDIgBgGIAAgyIgNAAIAAgEQAGAAAEgCQAEgCADgEIAEgJIABgLIADAAIAAAZIARAAIAAAHIgRAAIAAAyIABACIACADIACABIADACQABAAAAgBQABAAABAAQAAAAABAAQAAgBABAAIADgDIAEACQgDAGgFACQgFADgHABIgEgCg");
	this.shape_143.setTransform(446.8,488.7);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AgOA3IAAhBIgQAAIAAgHIAQAAIAAgIQAAgGACgGQACgEADgFQAEgDADgDQAFgCAGAAIAJABIAGACIAEAFIABAEIAAAEIgCABIgDACIgCAAIgEgBIgDgCIgBgEIgBgDIgCgCIgFgBIgEABIgDADIgBAFIAAAFIAAARIARAAIAAAHIgRAAIAABBg");
	this.shape_144.setTransform(442.2,488);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AAfAwIgPggIgnAAIgPAgIgIAAIAuhfIACAAIAtBfgAANAKIgPgjIgSAjIAhAAg");
	this.shape_145.setTransform(434.1,488.7);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AgCAGIgCgBIgCgDIAAgCIAAgCIACgCIACgBIACgBIADABIACABIACACIAAACIAAACIgCADIgCABIgDABg");
	this.shape_146.setTransform(425.1,493);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AgFAlIgHgCIgIgEQgDgCgDgFIAGgFIAFAGIAFAFIAFACIAFABIAFgBIAEgDIADgDIABgEQgBgDgBgDIgFgEIgGgEIgFgDIgHgEIgHgDIgEgGQgCgDAAgFQABgFACgDQABgEADgDQAEgDAEgBQAFgCAFAAIAGABIAGACIAFAEIAHAHIgGAFQgDgHgGgDQgFgEgEAAIgFABIgFACIgCADIgBAEQAAADABADIAFAEIAHAEIAGADIAIAEIAHADQADACABAEQACADAAAFQAAAEgCAEQgCAEgDADQgDADgFACQgGACgGAAg");
	this.shape_147.setTransform(420.2,489.9);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AgMAjQgGgDgGgFQgEgEgDgHQgDgGAAgIQAAgHADgHQADgIAEgFQAFgGAHgDQAGgDAGAAQAHAAAHADQAFACAFAFQAEAEADAGQACAFAAAGIg1AAQAAAGACAGQACAGAEAFQADAEAFADQAEADAEAAQAFAAAEgCIAIgEIAGgGQADgDABgDIAEACQgCAFgDAFQgDAFgFAEQgFAEgFACQgGACgGAAQgFAAgHgDgAAPgMQgBgEgBgDIgEgHIgGgEQgDgBgCAAIgHABIgFAEIgEAHIgCAHIAjAAIAAAAg");
	this.shape_148.setTransform(412.9,489.9);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AgGAlIgHgCIgGgEQgEgCgDgFIAGgFIAFAGIAFAFIAFACIAFABIAFgBIAEgDIACgDIABgEQAAgDgBgDIgEgEIgHgEIgFgDIgHgEIgGgDIgFgGQgBgDgBgFQAAgFACgDQACgEAEgDQADgDAFgBQAEgCAFAAIAGABIAFACIAHAEIAGAHIgGAFQgEgHgFgDQgFgEgEAAIgGABIgEACIgDADIgBAEQAAADACADIAFAEIAHAEIAGADIAIAEIAGADQAEACABAEQACADAAAFQAAAEgBAEQgCAEgEADQgDADgGACQgFACgGAAg");
	this.shape_149.setTransform(405.5,489.9);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AgFAlIgIgCIgHgEQgDgCgDgFIAGgFIAFAGIAFAFIAFACIAFABIAEgBIAFgDIACgDIABgEQABgDgCgDIgFgEIgFgEIgGgDIgHgEIgHgDIgEgGQgCgDABgFQAAgFABgDQACgEAEgDQADgDAEgBQAFgCAFAAIAFABIAGACIAHAEIAGAHIgFAFQgFgHgEgDQgGgEgEAAIgFABIgFACIgDADIAAAEQAAADABADIAFAEIAHAEIAFADIAIAEIAHADQADACACAEQACADAAAFQAAAEgBAEQgDAEgDADQgEADgFACQgFACgGAAg");
	this.shape_150.setTransform(398.9,489.9);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AgMAjQgHgDgEgFQgFgEgDgHQgDgGAAgIQAAgHADgHQADgIAEgFQAFgGAGgDQAHgDAGAAQAIAAAFADQAGACAFAFQAEAEACAGQADAFAAAGIg1AAQAAAGACAGQACAGADAFQAEAEAFADQAEADAEAAQAFAAAEgCIAIgEIAGgGQACgDABgDIAFACQgBAFgEAFQgEAFgFAEQgEAEgFACQgGACgGAAQgFAAgHgDgAAOgMQABgEgCgDIgEgHIgGgEQgDgBgDAAIgGABIgFAEIgEAHIgCAHIAiAAIAAAAg");
	this.shape_151.setTransform(391.6,489.9);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AAQAlIAAgwQAAgIgEgDQgDgEgFAAIgEAAIgEADIgGAEIgFADIAAA1IgOAAIAAhIIAOAAIAAAOQAHgHAHgEQAFgEAIAAQAEAAADACIAGAFIAEAHQABADAAAGIAAAyg");
	this.shape_152.setTransform(383.6,489.8);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AgGA3IAAhFIAJgEIAEAAIAABJgAgCgoIgCgCIgCgCIgBgCIABgDIACgDIACgCIACAAIADAAIADACIABADIABADIgBACIgBACIgDACIgDABg");
	this.shape_153.setTransform(378.1,488);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AgFAlIgIgCIgHgEQgDgCgDgFIAGgFIAFAGIAFAFIAFACIAFABIAEgBIAFgDIADgDIAAgEQAAgDgBgDIgFgEIgFgEIgGgDIgHgEIgHgDIgEgGQgBgDAAgFQAAgFACgDQABgEADgDQAEgDAEgBQAFgCAFAAIAFABIAHACIAGAEIAGAHIgFAFQgFgHgEgDQgGgEgEAAIgFABIgFACIgDADIAAAEQgBADACADIAFAEIAHAEIAFADIAIAEIAIADQADACABAEQACADAAAFQAAAEgCAEQgBAEgEADQgEADgEACQgGACgGAAg");
	this.shape_154.setTransform(373.1,489.9);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AgQAkIgHgGQgDgDgCgEQgCgEAAgEIAAgzIAPAAIAAAzIABAEQABADADACIAFADIAFABIAEgBIAEgDIAFgEIADgEIAAg0IAPAAIAABIIgPAAIAAgOIgEAGIgHAFIgFADIgHABIgJgBg");
	this.shape_155.setTransform(365.9,490);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AgUA2QgHgCgGgFIAAhiIALgEIADAAIAAA0IAGgGIAFgFIAIgDIAFgCQAHAAAEADQAGADAEAEQAEAEACAFQACAFAAAHQAAAGgBAGIgFAKQgCAFgEAEQgDAEgFADQgEADgGABQgEACgFAAQgIAAgHgCgAgGgHIgEACIgFADIgEACIAAAqIADADIAEACIAEACIAGABQAEAAAEgDQADgCAEgEQADgFABgGQACgGAAgHQAAgGgCgEQgBgFgDgCQgDgDgEgCQgEgCgCAAg");
	this.shape_156.setTransform(358,488.1);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AAUA4IAAgJIgGAEIgFACIgHACIgFABQgGAAgFgDQgGgDgEgFQgEgFgDgHQgCgHAAgIIABgJIAEgJIAGgHIAIgGQAEgDAFgBIAIgCQAGAAAEACIAHAFIAAgnIAKgEIAEAAIAABvgAgEgLQgEACgDAEQgDAEgBADQgCAGAAAGQAAAHACAGQACAHACAEQADAFAFACQADADAEAAIAFgBIAEgBIAEgDIADgDIAAgkQAAgEgBgCQgCgDgDgDIgFgEIgHgBQgDAAgDACg");
	this.shape_157.setTransform(345.2,488.1);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AAQAlIAAgwQAAgIgEgDQgDgEgFAAIgEAAIgEADIgGAEIgFADIAAA1IgOAAIAAhIIAOAAIAAAOQAHgHAHgEQAFgEAIAAQAEAAADACIAGAFIAEAHQABADAAAGIAAAyg");
	this.shape_158.setTransform(337.3,489.8);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AgRAkQgDgBgDgCQgCgDgBgDIgCgHQAAgFACgEIAFgHIAIgEIAJgDIAIgEIAKgCIAAgFIgBgIQgBgEgCgCQgBgCgDgBIgGgBIgEABIgEADIgBADIgBAEIAAAEIgBADIgDACIgDABIgDgBIgDgBIgBgDIgBgEQAAgDADgDQACgDAEgDQAEgCAFgBQAGgCAEAAQAHAAAFACQAFABADADQADACACAEIABAIIAAA1IgPAAIAAgKIgFAEIgFAEIgFADIgIABQgEAAgEgCgAAIgCIgHACIgEACIgFAEIgEAFIgBAFIABAFIADAEIADADIAFABIADgBIAEgBIAEgDIAEgDIAAgag");
	this.shape_159.setTransform(329.4,489.9);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AgGAlIgHgCIgGgEQgEgCgDgFIAGgFIAFAGIAFAFIAFACIAFABIAFgBIAEgDIACgDIABgEQAAgDgBgDIgEgEIgHgEIgFgDIgHgEIgGgDIgFgGQgBgDgBgFQAAgFACgDQACgEAEgDQADgDAFgBQAEgCAFAAIAGABIAFACIAGAEIAHAHIgGAFQgEgHgFgDQgFgEgEAAIgGABIgEACIgDADIgBAEQAAADACADIAFAEIAHAEIAGADIAIAEIAGADQAEACABAEQACADAAAFQAAAEgBAEQgCAEgEADQgEADgFACQgFACgGAAg");
	this.shape_160.setTransform(318.6,489.9);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AgMAjQgHgDgFgFQgEgEgDgHQgDgGAAgIQAAgHACgHQADgIAFgFQAFgGAGgDQAHgDAGAAQAIAAAFADQAHACAEAFQAEAEACAGQADAFAAAGIg1AAQAAAGACAGQACAGADAFQAEAEAEADQAFADAEAAQAFAAAEgCIAIgEIAGgGQADgDAAgDIAFACQgCAFgDAFQgDAFgGAEQgEAEgGACQgFACgGAAQgGAAgGgDgAAPgMQAAgEgCgDIgEgHIgGgEQgDgBgDAAIgFABIgGAEIgEAHIgCAHIAjAAIAAAAg");
	this.shape_161.setTransform(311.3,489.9);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AApAlIAAgwIgBgGIgDgEIgEgEIgFgBIgHABIgFACIgGAEIgDADIAAA1IgNAAIAAgwIAAgGIgDgEIgFgEIgFgBIgFABIgHACIgFAEIgEADIAAA1IgOAAIAAhIIAOAAIAAAPIAHgHIAHgEIAHgEIAHgBIAHABIAFAEIAEAEQACADABAEIAEgHIAIgEIAIgEQAEgBAFAAQAEAAADACQAEACACADQAEADABAEIABAJIAAAyg");
	this.shape_162.setTransform(300.9,489.8);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AgOAjQgHgDgFgFQgFgFgDgHQgDgHAAgIQAAgGADgHQADgHAFgFQAFgGAHgDQAHgDAHAAQAIAAAHADQAHADAFAFQAFAFADAGQADAHAAAHQAAAHgDAHQgDAHgFAGQgFAFgHAEQgHADgIAAQgHAAgHgDgAgJgdIgGAGQgDADgBAFQgCAFAAAGQAAAGACAHQABAHAEAFQADAFAFADQAEADAEAAQAFAAADgCIAGgGQADgDABgFQACgFAAgGIgBgNQgCgHgDgFQgDgFgFgDQgFgDgFAAQgEAAgDACg");
	this.shape_163.setTransform(290,489.9);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AAQA3IAAgyQAAgGgEgDQgDgEgFAAIgEAAIgEADIgGAEIgFABIAAA3IgOAAIAAhpIAKgEIAEAAIAAAzQAHgHAHgEQAFgEAIAAQAEAAADACIAGAFIAEAHQABADAAAEIAAA0g");
	this.shape_164.setTransform(281.6,488);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AgOAjQgHgDgFgFQgFgFgDgHQgDgHAAgIQAAgGADgHQADgHAFgFQAFgGAHgDQAHgDAHAAQAIAAAHADQAHADAFAFQAFAFADAGQADAHAAAHQAAAHgDAHQgDAHgFAGQgFAFgHAEQgHADgIAAQgHAAgHgDgAgJgdIgGAGQgDADgBAFQgCAFAAAGQAAAGACAHQABAHAEAFQADAFAFADQAEADAEAAQAFAAADgCIAGgGQADgDABgFQACgFAAgGIgBgNQgCgHgDgFQgDgFgFgDQgFgDgFAAQgEAAgDACg");
	this.shape_165.setTransform(269.2,489.9);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AgBAwIgFgDQgCgDAAgDIgBgGIAAgyIgNAAIAAgEQAGAAAEgCQAEgCADgEIAEgJIABgLIADAAIAAAZIARAAIAAAHIgRAAIAAAyIABACIACADIACABIADACQABAAAAgBQABAAABAAQAAAAABAAQAAgBABAAIADgDIAEACQgDAGgFACQgFADgHABIgEgCg");
	this.shape_166.setTransform(262.4,488.7);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AgdA0IgEgBIgCgDIgBgDIAAgDIACgDIADgCIAEAAIADAAIADABIACABIADABIAFgBIADgEIACgEIACgEIAEgLIgkhEIAQAAIAbA0IAWg0IAIAAIglBUIgDAJIgHAHIgHAEIgIABg");
	this.shape_167.setTransform(252.1,491.6);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AgBAwIgFgDQgCgDAAgDIgBgGIAAgyIgNAAIAAgEQAGAAAEgCQAEgCADgEIAEgJIABgLIADAAIAAAZIARAAIAAAHIgRAAIAAAyIABACIACADIACABIADACQABAAAAgBQABAAABAAQAAAAABAAQAAgBABAAIADgDIAEACQgDAGgFACQgFADgHABIgEgCg");
	this.shape_168.setTransform(245.9,488.7);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AgGA3IAAhFIAJgEIAEAAIAABJgAgCgoIgCgCIgCgCIgBgCIABgDIACgDIACgCIACAAIADAAIADACIABADIABADIgBACIgBACIgDACIgDABg");
	this.shape_169.setTransform(241.9,488);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AgLAjQgHgDgFgFQgEgFgDgGQgDgHAAgHQAAgHADgHQADgHAGgGQAFgFAHgEQAHgDAFAAQAHAAAFACQAFABAEACQAEADACADQACADAAAEIgBADIgCADIgDABIgEABIgEgBIgCgCIgCgCIAAgDIgBgFIgCgEIgEgCIgGgBQgDAAgEACQgEACgCADQgDAEgCAEQgBAFAAAFQAAAGACAFQACAHADAEQADAFAFADQADADAGAAQAFAAADgCIAHgEIAFgHIADgHIAFABIgFANQgDAFgFAEQgEAEgFACQgGACgGAAQgFAAgGgDg");
	this.shape_170.setTransform(236.3,489.9);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("AgGA3IAAhFIAJgEIAEAAIAABJgAgCgoIgCgCIgCgCIgBgCIABgDIACgDIACgCIACAAIADAAIADACIABADIABADIgBACIgBACIgDACIgDABg");
	this.shape_171.setTransform(230.8,488);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("AgWAlIAAhIIAOAAIAAAPIAFgHIADgEIAGgEQADgBADAAIAEABIAEABIACAEIABADQAAAEgCACQgDABgEAAIgDAAIgDgBIgDgBIgCgCIgDACIgCACIgCADIgEAFIAAAxg");
	this.shape_172.setTransform(226.8,489.8);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("AgBAwIgFgDQgCgDAAgDIgBgGIAAgyIgNAAIAAgEQAGAAAEgCQAEgCADgEIAEgJIABgLIADAAIAAAZIARAAIAAAHIgRAAIAAAyIABACIACADIACABIADACQABAAAAgBQABAAABAAQAAAAABAAQAAgBABAAIADgDIAEACQgDAGgFACQgFADgHABIgEgCg");
	this.shape_173.setTransform(221.2,488.7);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("AgLAjQgHgDgFgFQgEgFgDgGQgDgHAAgHQAAgHADgHQADgHAGgGQAFgFAHgEQAHgDAFAAQAHAAAFACQAFABAEACQAEADACADQACADAAAEIgBADIgCADIgDABIgEABIgEgBIgCgCIgCgCIAAgDIgBgFIgCgEIgEgCIgGgBQgDAAgEACQgEACgCADQgDAEgCAEQgBAFAAAFQAAAGACAFQACAHADAEQADAFAFADQADADAGAAQAFAAADgCIAHgEIAFgHIADgHIAFABIgFANQgDAFgFAEQgEAEgFACQgGACgGAAQgFAAgGgDg");
	this.shape_174.setTransform(214.9,489.9);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("AgMAjQgHgDgFgFQgEgEgDgHQgDgGAAgIQAAgHACgHQADgIAFgFQAFgGAGgDQAHgDAGAAQAIAAAFADQAHACAEAFQAEAEACAGQADAFAAAGIg1AAQAAAGACAGQACAGADAFQAEAEAEADQAFADAEAAQAFAAAEgCIAIgEIAGgGQADgDAAgDIAFACQgCAFgDAFQgDAFgGAEQgEAEgGACQgFACgGAAQgGAAgGgDgAAPgMQAAgEgCgDIgEgHIgGgEQgDgBgDAAIgFABIgGAEIgEAHIgCAHIAjAAIAAAAg");
	this.shape_175.setTransform(206.9,489.9);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("AgGA3IAAhpIAJgEIAEAAIAABtg");
	this.shape_176.setTransform(201.2,488);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("AgMAjQgGgDgGgFQgEgEgDgHQgDgGAAgIQAAgHADgHQADgIAEgFQAFgGAHgDQAGgDAGAAQAHAAAHADQAFACAFAFQAEAEADAGQACAFAAAGIg1AAQAAAGACAGQACAGAEAFQADAEAFADQAEADAEAAQAFAAAEgCIAIgEIAGgGQADgDABgDIAEACQgBAFgEAFQgDAFgFAEQgFAEgFACQgGACgGAAQgFAAgHgDgAAPgMQgBgEgBgDIgEgHIgGgEQgDgBgCAAIgHABIgFAEIgEAHIgCAHIAjAAIAAAAg");
	this.shape_177.setTransform(195.5,489.9);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("AgMAjQgHgDgEgFQgFgEgDgHQgDgGAAgIQAAgHACgHQADgIAFgFQAFgGAGgDQAHgDAGAAQAIAAAFADQAHACAEAFQAEAEACAGQADAFAAAGIg1AAQAAAGACAGQACAGADAFQAEAEAEADQAFADAEAAQAFAAAEgCIAIgEIAGgGQACgDABgDIAFACQgBAFgEAFQgEAFgFAEQgEAEgGACQgFACgGAAQgFAAgHgDgAAOgMQAAgEgBgDIgEgHIgGgEQgDgBgDAAIgFABIgGAEIgEAHIgCAHIAiAAIAAAAg");
	this.shape_178.setTransform(183.3,489.9);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("AgBAwIgFgDQgCgDAAgDIgBgGIAAgyIgNAAIAAgEQAGAAAEgCQAEgCADgEIAEgJIABgLIADAAIAAAZIARAAIAAAHIgRAAIAAAyIABACIACADIACABIADACQABAAAAgBQABAAABAAQAAAAABAAQAAgBABAAIADgDIAEACQgDAGgFACQgFADgHABIgEgCg");
	this.shape_179.setTransform(176.9,488.7);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000000").s().p("AgQAkIgHgGQgDgDgCgEQgCgEAAgEIAAgzIAPAAIAAAzIABAEQABADADACIAFADIAFABIAEgBIAEgDIAFgEIADgEIAAg0IAPAAIAABIIgPAAIAAgOIgEAGIgHAFIgFADIgHABIgJgBg");
	this.shape_180.setTransform(170.5,490);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000000").s().p("AgUA2QgHgCgGgFIAAhiIAKgEIAEAAIAAA0IAFgGIAHgFIAGgDIAGgCQAGAAAGADQAFADAEAEQAEAEACAFQACAFAAAHQAAAGgCAGIgDAKQgDAFgEAEQgEAEgEADQgFADgFABQgEACgFAAQgIAAgHgCgAgFgHIgGACIgEADIgEACIAAAqIAEADIADACIAFACIAFABQADAAAEgDQAFgCACgEQAEgFACgGQABgGAAgHQAAgGgBgEQgCgFgEgCQgCgDgEgCQgEgCgDAAg");
	this.shape_181.setTransform(162.6,488.1);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000000").s().p("AgGA3IAAhFIAJgEIAEAAIAABJgAgCgoIgCgCIgCgCIgBgCIABgDIACgDIACgCIACAAIADAAIADACIABADIABADIgBACIgBACIgDACIgDABg");
	this.shape_182.setTransform(156.7,488);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000000").s().p("AgWAlIAAhIIAOAAIAAAPIAFgHIADgEIAGgEQADgBACAAIAFABIADABIADAEIABADQAAAEgDACQgCABgDAAIgFAAIgCgBIgCgBIgEgCIgCACIgBACIgEADIgDAFIAAAxg");
	this.shape_183.setTransform(152.7,489.8);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000000").s().p("AgBAwIgFgDQgCgDAAgDIgBgGIAAgyIgNAAIAAgEQAGAAAEgCQAEgCADgEIAEgJIABgLIADAAIAAAZIARAAIAAAHIgRAAIAAAyIABACIACADIACABIADACQABAAAAgBQABAAABAAQAAAAABAAQAAgBABAAIADgDIAEACQgDAGgFACQgFADgHABIgEgCg");
	this.shape_184.setTransform(147.1,488.7);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000000").s().p("AgFAlIgIgCIgHgEQgDgCgDgFIAGgFIAFAGIAFAFIAFACIAFABIAEgBIAFgDIADgDIAAgEQAAgDgBgDIgFgEIgFgEIgGgDIgHgEIgHgDIgEgGQgBgDAAgFQAAgFACgDQABgEADgDQAEgDAEgBQAFgCAFAAIAFABIAHACIAGAEIAGAHIgFAFQgFgHgEgDQgGgEgEAAIgFABIgFACIgDADIAAAEQgBADACADIAFAEIAHAEIAFADIAIAEIAIADQADACABAEQACADAAAFQAAAEgCAEQgBAEgEADQgEADgEACQgGACgGAAg");
	this.shape_185.setTransform(141.4,489.9);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000000").s().p("AgGA3IAAhFIAJgEIAEAAIAABJgAgCgoIgCgCIgCgCIgBgCIABgDIACgDIACgCIACAAIADAAIADACIABADIABADIgBACIgBACIgDACIgDABg");
	this.shape_186.setTransform(136.5,488);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000000").s().p("AAUA4IAAgJIgFAEIgHACIgGACIgEABQgHAAgGgDQgFgDgFgFQgDgFgDgHQgCgHgBgIIACgJIAEgJIAGgHIAIgGQAEgDAFgBIAIgCQAFAAAEACIAIAFIAAgnIAKgEIAFAAIAABvgAgFgLQgEACgCAEQgDAEgCADQgBAGAAAGQAAAHABAGQACAHAEAEQADAFAEACQADADAEAAIAEgBIAFgBIAEgDIADgDIAAgkQAAgEgCgCQgBgDgDgDIgGgEIgHgBQgBAAgFACg");
	this.shape_187.setTransform(130.5,488.1);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000000").s().p("AgLA2IgIgEIgHgGIgFgIIgDgJQgCgFABgFQAAgHADgHQADgFAFgGQAGgFAIgDQAGgEAHAAIAGABIAFABIAAgeIAWgGIAABrIgWAAIAAgEQgEADgEABIgIACIgJgBgAgCgJIgFAGIgDAGIgBAKIABAMQABAGACAEIAGAGQABADAEAAIADAAIACgBIADgCIACgCIAAgkIgBgEIgDgFIgEgDQgBgBAAAAQgBAAAAAAQgBgBAAAAQgBAAgBAAQgBAAgCACg");
	this.shape_188.setTransform(117.9,488.2);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000000").s().p("AgJA1IAAhDIAUgGIAABJgAgDggIgEgCIgCgDIgBgFIABgEIACgDIAEgDIADAAIAFAAIADADIADADIAAAEIAAAFIgDADIgDACIgFABIgDgBg");
	this.shape_189.setTransform(111.6,488.2);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#000000").s().p("AgaAmIAAhIIAXAAIAAAGIAGgGQAEgDAFAAIAGABIAEACIADAEQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAIgBAEIgCADIgDACIgEAAIgFgBIgDgBIgCgCIgEgBIgCABIgBACIgCADIgBAEIAAAzg");
	this.shape_190.setTransform(106.8,489.7);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000000").s().p("AgUAzQgHgCgFgCQgFgCgDgCQgCgDAAgEIABgEIAEgFIAFgEIAGgFIgHgDQgDgCAAgEIACgDIADgFIAEgBIAGgEIgGgDIgFgEIgDgGIgBgIQAAgFACgFQADgFAFgEQAFgDAGgCQAHgCAIAAIAFABIAGABIAGACIAEACIAWAAIAAAHIgNAAIADAGIABAHQAAAGgDAFQgDAEgFAEQgFADgGACQgHABgHAAIgFAAIgFAAIgCAAIgBAEIABABIABABIADABIAGABIAIAAIANAAIANACIAIAEQADACABACIABAHQAAAGgDAFQgDAFgGADQgGADgJADQgJACgJAAIgSgBgAgUAZIgCAFQAAABAAAAQAAABABAAQAAABAAAAQAAABABAAIAFADIAIADIAIABIAMgCIAKgCIAFgDQABgBAAAAQAAgBABgBQAAAAAAgBQAAAAAAgBIgBgDIgDgCIgFgBIgGgBIgKAAIgIgBIgIgBIgGAAQgCACgBADgAgHgrIgEADIgCAGIAAAHIABAJIACAHIAFAEQADACACAAQAAAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBIAFgDIACgGIABgGIgBgJIgDgHIgFgFQgCgCgCABQgDgBgCACg");
	this.shape_191.setTransform(98.2,491.4);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#000000").s().p("AgaAmIAAhIIAXAAIAAAGIAGgGQAEgDAFAAIAGABIAEACIADAEQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAIgBAEIgCADIgDACIgEAAIgFgBIgDgBIgCgCIgEgBIgCABIgBACIgCADIgBAEIAAAzg");
	this.shape_192.setTransform(87.1,489.7);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000000").s().p("AgNAjQgHgDgFgFQgFgFgDgGQgDgHAAgHQAAgHADgHQACgIAFgFQAFgFAHgEQAHgDAHAAQAIAAAGADQAGACAFAFQAFAEACAGQADAFAAAHIgxAAQAAAFACAEIAEAKQACAEAEADQACACADAAIAIgBIAGgDIAFgGQADgCABgEIALACQgCAGgDAFIgJAJQgFAEgGADQgGACgGAAQgGAAgHgDgAAJgNIgBgGIgDgEIgEgDIgDgBIgEABIgEADIgDAEIgBAGIAXAAIAAAAg");
	this.shape_193.setTransform(79.3,489.9);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#000000").s().p("AAQAmIgQglIgOAlIgLAAIghhKIAYAAIASAqIASgrIAEAAIAUAqIATgpIAOAAIghBKg");
	this.shape_194.setTransform(69.2,489.9);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000000").s().p("AgPAjQgHgDgGgFQgFgFgDgHQgDgHAAgIQAAgGADgHQADgHAFgGQAGgFAHgDQAIgDAHAAQAIAAAIADQAHADAGAFQAFAFADAHQADAGAAAIQAAAGgDAHQgDAIgFAFQgGAFgHAEQgIADgIAAQgHAAgIgDgAgHgaIgEAFIgDAIIgBAJQAAAFABAGQABAHADAEQACAFAEADQAEADACAAQADAAADgCIAEgGIADgHIABgKIgBgLIgDgLQgDgEgEgDQgDgDgEAAQgCAAgDACg");
	this.shape_195.setTransform(58.9,489.9);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#000000").s().p("AgkAzIAAhkIAXAAIAAAGQADgDAGgCQAEgCAGAAQAGAAAGADQAGACAEAFQAEAFACAGQACAGAAAHQAAAJgCAHQgDAGgFAGQgFAFgGAEQgIADgHAAIgHgBIgGgBIAAAdgAgDglIgEACIgDADIgDADIAAAfIABAFIACAEIAFADIAFABQABAAADgCIAEgGQACgCACgFIABgJIgBgMIgDgJIgEgGQgDgCgCABg");
	this.shape_196.setTransform(50.2,491.3);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#000000").s().p("AgRAkQgDgBgDgCQgCgDgBgDIgCgHQAAgFACgEIAFgHIAIgEIAJgDIAIgEIAKgCIAAgFIgBgIQgBgEgCgCQgBgCgDgBIgGgBIgEABIgEADIgBADIgBAEIAAAEIgBADIgDACIgDABIgDgBIgDgBIgBgDIgBgEQAAgDADgDQACgDAEgDQAEgCAFgBQAGgCAEAAQAHAAAFACQAFABADADQADACACAEIABAIIAAA1IgPAAIAAgKIgFAEIgFAEIgFADIgIABQgEAAgEgCgAAIgCIgHACIgEACIgFAEIgEAFIgBAFIABAFIADAEIADADIAFABIADgBIAEgBIAEgDIAEgDIAAgag");
	this.shape_197.setTransform(37.5,489.9);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000000").s().p("AgOAjQgHgDgFgFQgFgFgDgHQgDgHAAgIQAAgGADgHQADgHAFgFQAFgGAHgDQAHgDAHAAQAIAAAHADQAHADAFAFQAFAFADAGQADAHAAAHQAAAHgDAHQgDAHgFAGQgFAFgHAEQgHADgIAAQgHAAgHgDgAgJgdIgGAGQgDADgBAFQgCAFAAAGQAAAGACAHQABAHAEAFQADAFAFADQAEADAEAAQAFAAADgCIAGgGQADgDABgFQACgFAAgGIgBgNQgCgHgDgFQgDgFgFgDQgFgDgFAAQgEAAgDACg");
	this.shape_198.setTransform(25.6,489.9);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#000000").s().p("AgBAwIgFgDQgCgDAAgDIgBgGIAAgyIgNAAIAAgEQAGAAAEgCQAEgCADgEIAEgJIABgLIADAAIAAAZIARAAIAAAHIgRAAIAAAyIABACIACADIACABIADACQABAAAAgBQABAAABAAQAAAAABAAQAAgBABAAIADgDIAEACQgDAGgFACQgFADgHABIgEgCg");
	this.shape_199.setTransform(18.9,488.7);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#000000").s().p("AAUA4IAAgJIgFAEIgHACIgGACIgEABQgHAAgGgDQgFgDgFgFQgEgFgCgHQgCgHgBgIIACgJIAEgJIAGgHIAIgGQAEgDAFgBIAIgCQAFAAAFACIAHAFIAAgnIAKgEIAFAAIAABvgAgFgLQgEACgCAEQgDAEgCADQgBAGAAAGQAAAHABAGQADAHADAEQADAFAEACQADADAEAAIAEgBIAFgBIAEgDIADgDIAAgkQAAgEgCgCQgBgDgDgDIgGgEIgHgBQgBAAgFACg");
	this.shape_200.setTransform(678.7,466.3);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#000000").s().p("AgMAjQgHgDgEgFQgFgEgDgHQgDgGAAgIQAAgHACgHQADgIAFgFQAFgGAGgDQAHgDAGAAQAIAAAFADQAHACAEAFQAEAEACAGQADAFAAAGIg1AAQAAAGACAGQACAGADAFQAEAEAEADQAFADAEAAQAFAAAEgCIAIgEIAGgGQACgDABgDIAFACQgBAFgEAFQgEAFgFAEQgEAEgGACQgFACgGAAQgFAAgHgDgAAOgMQAAgEgBgDIgEgHIgGgEQgDgBgDAAIgFABIgGAEIgEAHIgCAHIAiAAIAAAAg");
	this.shape_201.setTransform(670.7,468.1);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#000000").s().p("AgBAwIgFgDQgCgDAAgDIgBgHIAAgxIgNAAIAAgEQAGAAAEgCQAEgDADgDIAEgJIABgLIADAAIAAAZIARAAIAAAHIgRAAIAAAxIABAEIACACIACABIADABQABAAAAAAQABAAABAAQAAAAABAAQAAgBABAAIADgDIAEACQgDAFgFAEQgFACgHAAIgEgBg");
	this.shape_202.setTransform(664.3,466.9);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#000000").s().p("AgLAjQgHgDgFgFQgEgFgDgGQgDgHAAgHQAAgHADgHQADgHAGgGQAFgFAHgEQAHgDAFAAQAHAAAFACQAFABAEACQAEADACADQACADAAAEIgBADIgCADIgDABIgEABIgEgBIgCgCIgCgCIAAgDIgBgFIgCgEIgEgCIgGgBQgDAAgEACQgEACgCADQgDAEgCAEQgBAFAAAFQAAAGACAFQACAHADAEQADAFAFADQADADAGAAQAFAAADgCIAHgEIAFgHIADgHIAFABIgFANQgDAFgFAEQgEAEgFACQgGACgGAAQgFAAgGgDg");
	this.shape_203.setTransform(657.9,468.1);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#000000").s().p("AgMAjQgHgDgEgFQgFgEgDgHQgDgGAAgIQAAgHACgHQADgIAFgFQAFgGAGgDQAHgDAGAAQAIAAAFADQAHACAEAFQAEAEACAGQADAFAAAGIg1AAQAAAGACAGQACAGADAFQAEAEAEADQAFADAEAAQAFAAAEgCIAIgEIAGgGQACgDABgDIAFACQgBAFgEAFQgEAFgFAEQgEAEgGACQgFACgGAAQgFAAgHgDgAAOgMQAAgEgBgDIgEgHIgGgEQgDgBgDAAIgFABIgGAEIgEAHIgCAHIAiAAIAAAAg");
	this.shape_204.setTransform(650,468.1);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#000000").s().p("AAQAlIAAgwQAAgHgEgEQgDgEgFAAIgEAAIgEADIgGAEIgFADIAAA1IgOAAIAAhIIAOAAIAAAOQAHgIAHgDQAFgEAIAAQAEAAADACIAGAFIAEAGQABAFAAAEIAAAzg");
	this.shape_205.setTransform(642,468);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#000000").s().p("AAQAlIAAgwQAAgHgEgEQgDgEgFAAIgEAAIgEADIgGAEIgFADIAAA1IgOAAIAAhIIAOAAIAAAOQAHgIAHgDQAFgEAIAAQAEAAADACIAGAFIAEAGQABAFAAAEIAAAzg");
	this.shape_206.setTransform(634.2,468);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#000000").s().p("AgOAjQgHgDgFgFQgFgFgDgHQgDgHAAgIQAAgGADgHQADgHAFgFQAFgGAHgDQAHgDAHAAQAIAAAHADQAHADAFAFQAFAFADAGQADAHAAAHQAAAHgDAHQgDAHgFAGQgFAFgHAEQgHADgIAAQgHAAgHgDgAgJgdIgGAGQgDADgBAFQgCAFAAAGQAAAGACAHQABAHAEAFQADAFAFADQAEADAEAAQAFAAADgCIAGgGQADgDABgFQACgFAAgGIgBgNQgCgHgDgFQgDgFgFgDQgFgDgFAAQgEAAgDACg");
	this.shape_207.setTransform(625.9,468.1);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#000000").s().p("AgLAjQgHgDgFgFQgEgFgDgGQgDgHAAgHQAAgHADgHQADgHAGgGQAFgFAHgEQAHgDAFAAQAHAAAFACQAFABAEACQAEADACADQACADAAAEIgBADIgCADIgDABIgEABIgEgBIgCgCIgCgCIAAgDIgBgFIgCgEIgEgCIgGgBQgDAAgEACQgEACgCADQgDAEgCAEQgBAFAAAFQAAAGACAFQACAHADAEQADAFAFADQADADAGAAQAFAAADgCIAHgEIAFgHIADgHIAFABIgFANQgDAFgFAEQgEAEgFACQgGACgGAAQgFAAgGgDg");
	this.shape_208.setTransform(617.5,468.1);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#000000").s().p("AgMAjQgGgDgGgFQgEgEgDgHQgDgGAAgIQAAgHADgHQADgIAEgFQAFgGAHgDQAGgDAGAAQAHAAAHADQAFACAFAFQAEAEADAGQACAFAAAGIg1AAQAAAGACAGQACAGAEAFQADAEAFADQAEADAEAAQAFAAAEgCIAIgEIAGgGQADgDABgDIAEACQgCAFgDAFQgDAFgFAEQgFAEgFACQgGACgGAAQgGAAgGgDgAAPgMQgBgEgBgDIgEgHIgGgEQgDgBgCAAIgHABIgFAEIgEAHIgCAHIAjAAIAAAAg");
	this.shape_209.setTransform(605.5,468.1);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#000000").s().p("AgWAlIAAhIIAOAAIAAAPIAFgGIADgGIAGgDQACgBAEAAIAEABIADABIADADIABAEQAAAEgCABQgDACgDAAIgFAAIgCgCIgCgBIgDgBIgDABIgBADIgDADIgEAFIAAAxg");
	this.shape_210.setTransform(599.2,468);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#000000").s().p("AgRAkQgDgBgDgCQgCgDgBgDIgCgHQAAgFACgEIAFgHIAIgEIAJgDIAIgEIAKgCIAAgFIgBgIQgBgEgCgCQgBgCgDgBIgGgBIgEABIgEADIgBADIgBAEIAAAEIgBADIgDACIgDABIgDgBIgDgBIgBgDIgBgEQAAgDADgDQACgDAEgDQAEgCAFgBQAGgCAEAAQAHAAAFACQAFABADADQADACACAEIABAIIAAA1IgPAAIAAgKIgFAEIgFAEIgFADIgIABQgEAAgEgCgAAIgCIgHACIgEACIgFAEIgEAFIgBAFIABAFIADAEIADADIAFABIADgBIAEgBIAEgDIAEgDIAAgag");
	this.shape_211.setTransform(591.9,468.1);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#000000").s().p("AgBAwIgFgDQgCgDAAgDIgBgHIAAgxIgNAAIAAgEQAGAAAEgCQAEgDADgDIAEgJIABgLIADAAIAAAZIARAAIAAAHIgRAAIAAAxIABAEIACACIACABIADABQABAAAAAAQABAAABAAQAAAAABAAQAAgBABAAIADgDIAEACQgDAFgFAEQgFACgHAAIgEgBg");
	this.shape_212.setTransform(582.2,466.9);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#000000").s().p("AgRAkQgDgBgDgCQgCgDgBgDIgCgHQAAgFACgEIAFgHIAIgEIAJgDIAIgEIAKgCIAAgFIgBgIQgBgEgCgCQgBgCgDgBIgGgBIgEABIgEADIgBADIgBAEIAAAEIgBADIgDACIgDABIgDgBIgDgBIgBgDIgBgEQAAgDADgDQACgDAEgDQAEgCAFgBQAGgCAEAAQAHAAAFACQAFABADADQADACACAEIABAIIAAA1IgPAAIAAgKIgFAEIgFAEIgFADIgIABQgEAAgEgCgAAIgCIgHACIgEACIgFAEIgEAFIgBAFIABAFIADAEIADADIAFABIADgBIAEgBIAEgDIAEgDIAAgag");
	this.shape_213.setTransform(575.7,468.1);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#000000").s().p("AAQA3IAAgyQAAgFgEgEQgDgEgFAAIgEAAIgEADIgGAEIgFABIAAA3IgOAAIAAhpIAKgEIAEAAIAAAzQAHgIAHgDQAFgEAIAAQAEAAADACIAGAFIAEAGQABAFAAACIAAA1g");
	this.shape_214.setTransform(568.5,466.2);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#000000").s().p("AgBAwIgFgDQgCgDAAgDIgBgHIAAgxIgNAAIAAgEQAGAAAEgCQAEgDADgDIAEgJIABgLIADAAIAAAZIARAAIAAAHIgRAAIAAAxIABAEIACACIACABIADABQABAAAAAAQABAAABAAQAAAAABAAQAAgBABAAIADgDIAEACQgDAFgFAEQgFACgHAAIgEgBg");
	this.shape_215.setTransform(562.2,466.9);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#000000").s().p("AgGAlIgGgCIgHgEQgEgCgDgFIAGgFIAFAGIAFAFIAFACIAFABIAFgBIAEgDIADgDIABgEQAAgDgCgDIgFgEIgGgEIgFgDIgHgEIgHgDIgEgGQgCgDAAgFQAAgFADgDQABgEADgDQAEgDAEgBQAFgCAFAAIAGABIAGACIAFAEIAHAHIgGAFQgDgHgGgDQgFgEgEAAIgGABIgEACIgCADIgBAEQAAADABADIAFAEIAHAEIAGADIAIAEIAHADQACACACAEQACADAAAFQAAAEgCAEQgCAEgDADQgDADgFACQgGACgGAAg");
	this.shape_216.setTransform(552.4,468.1);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#000000").s().p("AApAlIAAgwIgBgGIgDgFIgEgDIgGgBIgGABIgFACIgGAEIgDADIAAA1IgNAAIAAgwIgBgGIgCgFIgFgDIgFgBIgGABIgGACIgFAEIgEADIAAA1IgOAAIAAhIIAOAAIAAAPIAGgGIAIgGIAHgDIAIgBIAGABIAFADIAEAGQACACABAEIAEgGIAHgGIAJgDQAEgBAEAAQAEAAAEACQAEACADADQACADACAEIABAJIAAAyg");
	this.shape_217.setTransform(542.7,468);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#000000").s().p("AgWAlIAAhIIAPAAIAAAPIAEgGIADgGIAGgDQADgBACAAIAFABIAEABIACADIABAEQAAAEgCABQgCACgFAAIgDAAIgDgCIgDgBIgDgBIgCABIgCADIgDADIgCAFIAAAxg");
	this.shape_218.setTransform(533.9,468);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#000000").s().p("AgRAkQgDgBgDgCQgCgDgBgDIgCgHQAAgFACgEIAFgHIAIgEIAJgDIAIgEIAKgCIAAgFIgBgIQgBgEgCgCQgBgCgDgBIgGgBIgEABIgEADIgBADIgBAEIAAAEIgBADIgDACIgDABIgDgBIgDgBIgBgDIgBgEQAAgDADgDQACgDAEgDQAEgCAFgBQAGgCAEAAQAHAAAFACQAFABADADQADACACAEIABAIIAAA1IgPAAIAAgKIgFAEIgFAEIgFADIgIABQgEAAgEgCgAAIgCIgHACIgEACIgFAEIgEAFIgBAFIABAFIADAEIADADIAFABIADgBIAEgBIAEgDIAEgDIAAgag");
	this.shape_219.setTransform(526.6,468.1);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#000000").s().p("AgOA3IAAhBIgQAAIAAgHIAQAAIAAgIQAAgGACgFQABgGAFgDQADgFADgCQAFgCAGAAIAJABIAGACIAEAFIABAEIAAAEIgCACIgCABIgEABIgDgBIgCgDIgCgEIgBgDIgCgCIgFgCIgEACIgDADIgBAEIAAAGIAAARIASAAIAAAHIgSAAIAABBg");
	this.shape_220.setTransform(521.2,466.2);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#000000").s().p("AAUA4IAAgJIgGAEIgGACIgGACIgEABQgHAAgFgDQgGgDgEgFQgEgFgDgHQgCgHAAgIIABgJIAEgJIAGgHIAIgGQAEgDAFgBIAIgCQAGAAAEACIAHAFIAAgnIAKgEIAEAAIAABvgAgEgLQgFACgCAEQgDAEgBADQgCAGAAAGQAAAHACAGQACAHACAEQADAFAFACQADADAEAAIAEgBIAFgBIAEgDIADgDIAAgkQAAgEgBgCQgCgDgDgDIgGgEIgGgBQgDAAgDACg");
	this.shape_221.setTransform(509.4,466.3);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#000000").s().p("AAQAlIAAgwQAAgHgEgEQgDgEgFAAIgEAAIgEADIgGAEIgFADIAAA1IgOAAIAAhIIAOAAIAAAOQAHgIAHgDQAFgEAIAAQAEAAADACIAGAFIAEAGQABAFAAAEIAAAzg");
	this.shape_222.setTransform(501.5,468);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#000000").s().p("AgGA3IAAhFIAJgEIAEAAIAABJgAgCgoIgCgCIgCgCIgBgCIABgEIACgCIACgBIACgBIADABIADABIABACIABAEIgBACIgBACIgDACIgDAAg");
	this.shape_223.setTransform(495.9,466.2);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#000000").s().p("AAVAlIgVguIgSAuIgFAAIgghJIAQAAIAXA0IAVg0IAXA0IAVg0IAHAAIgeBJg");
	this.shape_224.setTransform(488.7,468.1);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#000000").s().p("AgKAPQAEgBADgCIADgDIADgFIABgEIgBgCIgBgBIgCAAIAAABIAAABIgDAAIgCgBIgCgBIgCgCIgBgEIABgEIACgCIADgCIAEAAIADABIAEADIADAFIABAFQAAAEgCADIgFAHIgFAGIgJACg");
	this.shape_225.setTransform(477.7,472.2);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#000000").s().p("AgdA0IgDgBIgDgDIgBgDIAAgDIADgDIACgCIADAAIAFAAIABABIADABIAEABIADgBIADgEIADgEIACgEIAEgLIglhEIARAAIAaA0IAYg0IAIAAIgmBUIgEAJIgGAHIgHAEIgHABg");
	this.shape_226.setTransform(473,469.8);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#000000").s().p("AgBAwIgFgDQgCgDAAgDIgBgHIAAgxIgNAAIAAgEQAGAAAEgCQAEgDADgDIAEgJIABgLIADAAIAAAZIARAAIAAAHIgRAAIAAAxIABAEIACACIACABIADABQABAAAAAAQABAAABAAQAAAAABAAQAAgBABAAIADgDIAEACQgDAFgFAEQgFACgHAAIgEgBg");
	this.shape_227.setTransform(466.8,466.9);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#000000").s().p("AgGA3IAAhFIAJgEIAEAAIAABJgAgCgoIgCgCIgCgCIgBgCIABgEIACgCIACgBIACgBIADABIADABIABACIABAEIgBACIgBACIgDACIgDAAg");
	this.shape_228.setTransform(462.8,466.2);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#000000").s().p("AgLAjQgHgDgFgFQgEgFgDgGQgDgHAAgHQAAgHADgHQADgHAGgGQAFgFAHgEQAHgDAFAAQAHAAAFACQAFABAEACQAEADACADQACADAAAEIgBADIgCADIgDABIgEABIgEgBIgCgCIgCgCIAAgDIgBgFIgCgEIgEgCIgGgBQgDAAgEACQgEACgCADQgDAEgCAEQgBAFAAAFQAAAGACAFQACAHADAEQADAFAFADQADADAGAAQAFAAADgCIAHgEIAFgHIADgHIAFABIgFANQgDAFgFAEQgEAEgFACQgGACgGAAQgFAAgGgDg");
	this.shape_229.setTransform(457.2,468.1);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#000000").s().p("AgGA3IAAhFIAJgEIAEAAIAABJgAgCgoIgCgCIgCgCIgBgCIABgEIACgCIACgBIACgBIADABIADABIABACIABAEIgBACIgBACIgDACIgDAAg");
	this.shape_230.setTransform(451.7,466.2);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#000000").s().p("AgWAlIAAhIIAPAAIAAAPIAEgGIADgGIAGgDQACgBADAAIAFABIADABIADADIABAEQAAAEgDABQgBACgEAAIgFAAIgCgCIgCgBIgEgBIgCABIgBADIgEADIgCAFIAAAxg");
	this.shape_231.setTransform(447.7,468);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#000000").s().p("AgBAwIgFgDQgCgDAAgDIgBgHIAAgxIgNAAIAAgEQAGAAAEgCQAEgDADgDIAEgJIABgLIADAAIAAAZIARAAIAAAHIgRAAIAAAxIABAEIACACIACABIADABQABAAAAAAQABAAABAAQAAAAABAAQAAgBABAAIADgDIAEACQgDAFgFAEQgFACgHAAIgEgBg");
	this.shape_232.setTransform(442.1,466.9);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#000000").s().p("AgLAjQgHgDgFgFQgEgFgDgGQgDgHAAgHQAAgHADgHQADgHAGgGQAFgFAHgEQAHgDAFAAQAHAAAFACQAFABAEACQAEADACADQACADAAAEIgBADIgCADIgDABIgEABIgEgBIgCgCIgCgCIAAgDIgBgFIgCgEIgEgCIgGgBQgDAAgEACQgEACgCADQgDAEgCAEQgBAFAAAFQAAAGACAFQACAHADAEQADAFAFADQADADAGAAQAFAAADgCIAHgEIAFgHIADgHIAFABQgCAHgDAGQgDAFgFAEQgEAEgFACQgGACgGAAQgFAAgGgDg");
	this.shape_233.setTransform(435.8,468.1);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#000000").s().p("AgMAjQgGgDgFgFQgFgEgDgHQgDgGAAgIQAAgHADgHQADgIAEgFQAFgGAHgDQAGgDAGAAQAHAAAHADQAFACAFAFQAEAEADAGQACAFAAAGIg1AAQAAAGACAGQACAGAEAFQADAEAFADQAEADAEAAQAFAAAEgCIAIgEIAGgGQADgDABgDIAEACQgCAFgDAFQgEAFgEAEQgFAEgFACQgGACgGAAQgGAAgGgDgAAOgMQAAgEgBgDIgEgHIgGgEQgDgBgCAAIgHABIgFAEIgEAHIgCAHIAiAAIAAAAg");
	this.shape_234.setTransform(427.8,468.1);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#000000").s().p("AgGA3IAAhpIAIgEIAFAAIAABtg");
	this.shape_235.setTransform(422.1,466.2);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#000000").s().p("AgMAjQgHgDgEgFQgFgEgDgHQgDgGAAgIQAAgHADgHQACgIAFgFQAFgGAGgDQAHgDAGAAQAIAAAFADQAHACAEAFQAEAEACAGQADAFAAAGIg1AAQAAAGACAGQACAGADAFQAEAEAEADQAFADAEAAQAFAAAEgCIAIgEIAGgGQACgDABgDIAFACQgBAFgEAFQgEAFgFAEQgEAEgFACQgGACgGAAQgFAAgHgDgAAOgMQAAgEgBgDIgEgHIgGgEQgDgBgDAAIgFABIgGAEIgEAHIgCAHIAiAAIAAAAg");
	this.shape_236.setTransform(416.4,468.1);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#000000").s().p("AgOAjQgHgDgFgFQgFgFgDgHQgDgHAAgIQAAgGADgHQADgHAFgFQAFgGAHgDQAHgDAHAAQAIAAAHADQAHADAFAFQAFAFADAGQADAHAAAHQAAAHgDAHQgDAHgFAGQgFAFgHAEQgHADgIAAQgHAAgHgDgAgJgdIgGAGQgDADgBAFQgCAFAAAGQAAAGACAHQABAHAEAFQADAFAFADQAEADAEAAQAFAAADgCIAGgGQADgDABgFQACgFAAgGIgBgNQgCgHgDgFQgDgFgFgDQgFgDgFAAQgEAAgDACg");
	this.shape_237.setTransform(403.8,468.1);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#000000").s().p("AgBAwIgFgDQgCgDAAgDIgBgHIAAgxIgNAAIAAgEQAGAAAEgCQAEgDADgDIAEgJIABgLIADAAIAAAZIARAAIAAAHIgRAAIAAAxIABAEIACACIACABIADABQABAAAAAAQABAAABAAQAAAAABAAQAAgBABAAIADgDIAEACQgDAFgFAEQgFACgHAAIgEgBg");
	this.shape_238.setTransform(397.1,466.9);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#000000").s().p("AAUA4IAAgJIgFAEIgHACIgGACIgEABQgHAAgGgDQgFgDgFgFQgEgFgCgHQgCgHgBgIIACgJIAEgJIAGgHIAIgGQAEgDAFgBIAIgCQAFAAAFACIAHAFIAAgnIAKgEIAEAAIAABvgAgFgLQgEACgCAEQgDAEgCADQgBAGAAAGQAAAHABAGQADAHADAEQADAFAEACQADADAEAAIAEgBIAFgBIAEgDIADgDIAAgkQAAgEgCgCQgBgDgDgDIgGgEIgHgBQgBAAgFACg");
	this.shape_239.setTransform(386.2,466.3);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#000000").s().p("AgMAjQgHgDgEgFQgFgEgDgHQgDgGAAgIQAAgHADgHQACgIAFgFQAFgGAGgDQAHgDAGAAQAIAAAFADQAHACAEAFQAEAEACAGQADAFAAAGIg1AAQAAAGACAGQACAGADAFQAEAEAEADQAFADAEAAQAFAAAEgCIAIgEIAGgGQACgDABgDIAFACQgBAFgEAFQgEAFgFAEQgEAEgFACQgGACgGAAQgFAAgHgDgAAOgMQAAgEgBgDIgEgHIgGgEQgDgBgDAAIgFABIgGAEIgEAHIgCAHIAiAAIAAAAg");
	this.shape_240.setTransform(378.2,468.1);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#000000").s().p("AgBAwIgFgDQgCgDAAgDIgBgHIAAgxIgNAAIAAgEQAGAAAEgCQAEgDADgDIAEgJIABgLIADAAIAAAZIARAAIAAAHIgRAAIAAAxIABAEIACACIACABIADABQABAAAAAAQABAAABAAQAAAAABAAQAAgBABAAIADgDIAEACQgDAFgFAEQgFACgHAAIgEgBg");
	this.shape_241.setTransform(371.8,466.9);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#000000").s().p("AgWAlIAAhIIAPAAIAAAPIAEgGIADgGIAGgDQADgBADAAIAEABIAEABIACADIABAEQAAAEgCABQgDACgEAAIgDAAIgDgCIgDgBIgCgBIgDABIgCADIgCADIgDAFIAAAxg");
	this.shape_242.setTransform(366.8,468);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#000000").s().p("AgMAjQgGgDgGgFQgEgEgDgHQgDgGAAgIQAAgHACgHQAEgIAEgFQAFgGAGgDQAHgDAGAAQAHAAAHADQAGACAEAFQAEAEACAGQADAFAAAGIg1AAQAAAGACAGQACAGADAFQAEAEAEADQAFADAEAAQAFAAAEgCIAIgEIAGgGQACgDABgDIAFACQgCAFgDAFQgDAFgGAEQgEAEgGACQgFACgGAAQgGAAgGgDgAAPgMQAAgEgCgDIgEgHIgGgEQgDgBgCAAIgGABIgGAEIgEAHIgCAHIAjAAIAAAAg");
	this.shape_243.setTransform(359.6,468.1);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#000000").s().p("AAAAlIgjhJIAPAAIAYA2IAag2IAGAAIghBJg");
	this.shape_244.setTransform(352,468.1);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#000000").s().p("AAQAlIAAgwQAAgHgEgEQgDgEgFAAIgEAAIgEADIgGAEIgFADIAAA1IgOAAIAAhIIAOAAIAAAOQAHgIAHgDQAFgEAIAAQAEAAADACIAGAFIAEAGQABAFAAAEIAAAzg");
	this.shape_245.setTransform(344.5,468);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#000000").s().p("AgOAjQgHgDgFgFQgFgFgDgHQgDgHAAgIQAAgGADgHQADgHAFgFQAFgGAHgDQAHgDAHAAQAIAAAHADQAHADAFAFQAFAFADAGQADAHAAAHQAAAHgDAHQgDAHgFAGQgFAFgHAEQgHADgIAAQgHAAgHgDgAgJgdIgGAGQgDADgBAFQgCAFAAAGQAAAGACAHQABAHAEAFQADAFAFADQAEADAEAAQAFAAADgCIAGgGQADgDABgFQACgFAAgGIgBgNQgCgHgDgFQgDgFgFgDQgFgDgFAAQgEAAgDACg");
	this.shape_246.setTransform(336.2,468.1);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#000000").s().p("AgLAjQgHgDgFgFQgEgFgDgGQgDgHAAgHQAAgHADgHQADgHAGgGQAFgFAHgEQAHgDAFAAQAHAAAFACQAFABAEACQAEADACADQACADAAAEIgBADIgCADIgDABIgEABIgEgBIgCgCIgCgCIAAgDIgBgFIgCgEIgEgCIgGgBQgDAAgEACQgEACgCADQgDAEgCAEQgBAFAAAFQAAAGACAFQACAHADAEQADAFAFADQADADAGAAQAFAAADgCIAHgEIAFgHIADgHIAFABIgFANQgDAFgFAEQgEAEgFACQgGACgGAAQgFAAgGgDg");
	this.shape_247.setTransform(327.8,468.1);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#000000").s().p("AgGAlIgGgCIgHgEQgEgCgDgFIAGgFIAFAGIAFAFIAFACIAFABIAFgBIAEgDIACgDIACgEQAAgDgCgDIgEgEIgHgEIgFgDIgHgEIgGgDIgFgGQgBgDgBgFQAAgFACgDQACgEADgDQAEgDAFgBQAEgCAFAAIAGABIAFACIAGAEIAHAHIgGAFQgDgHgGgDQgFgEgEAAIgGABIgEACIgCADIgCAEQAAADACADIAFAEIAHAEIAGADIAIAEIAGADQAEACABAEQACADAAAFQAAAEgCAEQgCAEgDADQgDADgGACQgFACgGAAg");
	this.shape_248.setTransform(316.5,468.1);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#000000").s().p("AgGA3IAAhFIAJgEIAEAAIAABJgAgCgoIgCgCIgCgCIgBgCIABgEIACgCIACgBIACgBIADABIADABIABACIABAEIgBACIgBACIgDACIgDAAg");
	this.shape_249.setTransform(311.6,466.2);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#000000").s().p("AgGAlIgGgCIgHgEQgEgCgDgFIAGgFIAFAGIAFAFIAFACIAFABIAFgBIAEgDIACgDIACgEQAAgDgCgDIgEgEIgHgEIgFgDIgHgEIgGgDIgFgGQgBgDgBgFQAAgFACgDQACgEAEgDQADgDAFgBQAEgCAFAAIAGABIAFACIAGAEIAHAHIgGAFQgDgHgGgDQgFgEgEAAIgGABIgEACIgCADIgCAEQAAADACADIAFAEIAHAEIAGADIAIAEIAGADQAEACABAEQACADAAAFQAAAEgBAEQgDAEgDADQgDADgGACQgFACgGAAg");
	this.shape_250.setTransform(302.5,468.1);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#000000").s().p("AgMAjQgHgDgFgFQgEgEgDgHQgDgGAAgIQAAgHACgHQAEgIAEgFQAFgGAGgDQAHgDAGAAQAHAAAHADQAGACAEAFQAEAEACAGQADAFAAAGIg1AAQAAAGACAGQACAGADAFQAEAEAEADQAFADAEAAQAFAAAEgCIAIgEIAGgGQACgDABgDIAFACQgCAFgDAFQgDAFgGAEQgEAEgGACQgFACgGAAQgGAAgGgDgAAPgMQAAgEgCgDIgEgHIgGgEQgDgBgCAAIgGABIgGAEIgEAHIgCAHIAjAAIAAAAg");
	this.shape_251.setTransform(295.2,468.1);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#000000").s().p("AAQAlIAAgwQAAgHgEgEQgDgEgFAAIgEAAIgEADIgGAEIgFADIAAA1IgOAAIAAhIIAOAAIAAAOQAHgIAHgDQAFgEAIAAQAEAAADACIAGAFIAEAGQABAFAAAEIAAAzg");
	this.shape_252.setTransform(287.3,468);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#000000").s().p("AgGA3IAAhFIAJgEIAEAAIAABJgAgCgoIgCgCIgCgCIgBgCIABgEIACgCIACgBIACgBIADABIADABIABACIABAEIgBACIgBACIgDACIgDAAg");
	this.shape_253.setTransform(281.7,466.2);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#000000").s().p("AgUA2QgIgCgFgFIAAhiIALgEIADAAIAAA0IAGgGIAFgFIAHgDIAGgCQAHAAAEADQAGADAEAEQAEAEACAFQACAFAAAHQAAAGgCAGIgDAKQgDAFgEAEQgDAEgFADQgEADgGABQgEACgFAAQgIAAgHgCgAgFgHIgGACIgEADIgEACIAAAqIADADIAEACIAEACIAGABQAEAAAEgDQAEgCADgEQACgFACgGQACgGAAgHQAAgGgCgEQgCgFgCgCQgDgDgEgCQgEgCgDAAg");
	this.shape_254.setTransform(276.2,466.3);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#000000").s().p("AgWAlIAAhIIAPAAIAAAPIAEgGIADgGIAGgDQACgBADAAIAFABIADABIADADIABAEQAAAEgDABQgCACgDAAIgFAAIgCgCIgCgBIgEgBIgCABIgBADIgEADIgCAFIAAAxg");
	this.shape_255.setTransform(269.5,468);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#000000").s().p("AgQAkIgHgGQgDgDgCgEQgCgEAAgFIAAgyIAPAAIAAAyIABAGQABACADABIAFAEIAFABIAEgBIAEgDIAFgDIADgGIAAgzIAPAAIAABIIgPAAIAAgOIgEAGIgHAEIgFAEIgHABIgJgBg");
	this.shape_256.setTransform(262.3,468.2);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#000000").s().p("AgBAwIgFgDQgCgDAAgDIgBgHIAAgxIgNAAIAAgEQAGAAAEgCQAEgDADgDIAEgJIABgLIADAAIAAAZIARAAIAAAHIgRAAIAAAxIABAEIACACIACABIADABQABAAAAAAQABAAABAAQAAAAABAAQAAgBABAAIADgDIAEACQgDAFgFAEQgFACgHAAIgEgBg");
	this.shape_257.setTransform(256,466.9);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#000000").s().p("AAUA4IAAgJIgGAEIgGACIgGACIgEABQgHAAgFgDQgGgDgFgFQgEgFgCgHQgDgHAAgIIACgJIAEgJIAGgHIAIgGQAEgDAFgBIAIgCQAFAAAFACIAHAFIAAgnIAKgEIAEAAIAABvgAgEgLQgEACgDAEQgDAEgCADQgBAGAAAGQAAAHABAGQADAHACAEQADAFAFACQADADAEAAIAEgBIAFgBIAEgDIADgDIAAgkQAAgEgCgCQgBgDgDgDIgGgEIgGgBQgDAAgDACg");
	this.shape_258.setTransform(245.1,466.3);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#000000").s().p("AAQAlIAAgwQAAgHgEgEQgDgEgFAAIgEAAIgEADIgGAEIgFADIAAA1IgOAAIAAhIIAOAAIAAAOQAHgIAHgDQAFgEAIAAQAEAAADACIAGAFIAEAGQABAFAAAEIAAAzg");
	this.shape_259.setTransform(237.2,468);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#000000").s().p("AgGA3IAAhFIAJgEIAEAAIAABJgAgCgoIgCgCIgCgCIgBgCIABgEIACgCIACgBIACgBIADABIADABIABACIABAEIgBACIgBACIgDACIgDAAg");
	this.shape_260.setTransform(231.7,466.2);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#000000").s().p("AAVAlIgVguIgSAuIgFAAIgghJIAQAAIAXA0IAVg0IAXA0IAVg0IAHAAIgeBJg");
	this.shape_261.setTransform(224.4,468.1);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#000000").s().p("AApAlIAAgwIgBgGIgDgFIgEgDIgFgBIgHABIgFACIgGAEIgDADIAAA1IgNAAIAAgwIgBgGIgCgFIgFgDIgFgBIgGABIgGACIgFAEIgEADIAAA1IgOAAIAAhIIAOAAIAAAPIAGgGIAIgGIAHgDIAHgBIAHABIAFADIAEAGQACACABAEIAEgGIAHgGIAJgDQAEgBAFAAQADAAAEACQAEACACADQAEADABAEQACAFgBAEIAAAyg");
	this.shape_262.setTransform(208.3,468);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#000000").s().p("AgOAjQgHgDgFgFQgFgFgDgHQgDgHAAgIQAAgGADgHQADgHAFgFQAFgGAHgDQAHgDAHAAQAIAAAHADQAHADAFAFQAFAFADAGQADAHAAAHQAAAHgDAHQgDAHgFAGQgFAFgHAEQgHADgIAAQgHAAgHgDgAgJgdIgGAGQgDADgBAFQgCAFAAAGQAAAGACAHQABAHAEAFQADAFAFADQAEADAEAAQAFAAADgCIAGgGQADgDABgFQACgFAAgGIgBgNQgCgHgDgFQgDgFgFgDQgFgDgFAAQgEAAgDACg");
	this.shape_263.setTransform(197.4,468.1);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#000000").s().p("AgWAlIAAhIIAPAAIAAAPIAEgGIADgGIAGgDQACgBADAAIAFABIADABIADADIABAEQAAAEgDABQgCACgDAAIgFAAIgCgCIgCgBIgEgBIgCABIgBADIgEADIgCAFIAAAxg");
	this.shape_264.setTransform(190.7,468);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#000000").s().p("AgOA3IAAhBIgQAAIAAgHIAQAAIAAgIQAAgGACgFQABgGAFgDQADgFADgCQAFgCAGAAIAJABIAGACIAEAFIABAEIAAAEIgCACIgDABIgDABIgDgBIgDgDIgBgEIgBgDIgCgCIgFgCIgEACIgDADIgBAEIAAAGIAAARIARAAIAAAHIgRAAIAABBg");
	this.shape_265.setTransform(185.4,466.2);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#000000").s().p("AAUA4IAAgJIgFAEIgHACIgGACIgEABQgHAAgFgDQgGgDgFgFQgEgFgCgHQgDgHAAgIIACgJIAEgJIAGgHIAIgGQAEgDAFgBIAIgCQAFAAAFACIAHAFIAAgnIAKgEIAEAAIAABvgAgEgLQgEACgDAEQgDAEgCADQgBAGAAAGQAAAHABAGQADAHACAEQADAFAFACQADADAEAAIAEgBIAFgBIAEgDIADgDIAAgkQAAgEgCgCQgBgDgDgDIgGgEIgGgBQgDAAgDACg");
	this.shape_266.setTransform(173.6,466.3);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#000000").s().p("AgMAjQgHgDgFgFQgEgEgDgHQgDgGAAgIQAAgHACgHQADgIAFgFQAFgGAGgDQAHgDAGAAQAIAAAFADQAHACAEAFQAEAEACAGQADAFAAAGIg1AAQAAAGACAGQACAGADAFQAEAEAEADQAFADAEAAQAFAAAEgCIAIgEIAGgGQADgDAAgDIAFACQgCAFgDAFQgDAFgGAEQgEAEgGACQgFACgGAAQgGAAgGgDgAAPgMQAAgEgCgDIgEgHIgGgEQgDgBgDAAIgFABIgGAEIgEAHIgCAHIAjAAIAAAAg");
	this.shape_267.setTransform(165.5,468.1);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#000000").s().p("AgFAlIgIgCIgHgEQgDgCgDgFIAGgFIAFAGIAFAFIAFACIAFABIAEgBIAFgDIADgDIAAgEQABgDgCgDIgFgEIgFgEIgGgDIgHgEIgHgDIgEgGQgCgDABgFQAAgFABgDQACgEAEgDQADgDAEgBQAFgCAFAAIAFABIAHACIAGAEIAGAHIgFAFQgFgHgEgDQgGgEgEAAIgFABIgFACIgDADIgBAEQABADABADIAFAEIAHAEIAFADIAIAEIAHADQADACACAEQACADAAAFQAAAEgBAEQgDAEgDADQgEADgEACQgGACgGAAg");
	this.shape_268.setTransform(158.1,468.1);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#000000").s().p("AgFAlIgHgCIgIgEQgDgCgDgFIAGgFIAFAGIAFAFIAFACIAFABIAFgBIAEgDIADgDIABgEQgBgDgBgDIgFgEIgGgEIgFgDIgHgEIgHgDIgEgGQgCgDAAgFQABgFACgDQABgEADgDQAEgDAEgBQAFgCAFAAIAFABIAHACIAFAEIAHAHIgGAFQgDgHgGgDQgFgEgEAAIgFABIgFACIgCADIgBAEQAAADABADIAFAEIAHAEIAFADIAJAEIAHADQADACABAEQACADAAAFQAAAEgCAEQgCAEgDADQgDADgFACQgGACgGAAg");
	this.shape_269.setTransform(151.5,468.1);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#000000").s().p("AgMAjQgGgDgGgFQgEgEgDgHQgDgGAAgIQAAgHADgHQADgIAEgFQAFgGAHgDQAGgDAGAAQAHAAAHADQAFACAFAFQAEAEADAGQACAFAAAGIg1AAQAAAGACAGQACAGAEAFQADAEAFADQAEADAEAAQAFAAAEgCIAIgEIAGgGQADgDABgDIAEACQgCAFgDAFQgDAFgFAEQgFAEgFACQgGACgGAAQgFAAgHgDgAAPgMQgBgEgBgDIgEgHIgGgEQgDgBgCAAIgHABIgFAEIgEAHIgCAHIAjAAIAAAAg");
	this.shape_270.setTransform(144.2,468.1);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#000000").s().p("AAQAlIAAgwQAAgHgEgEQgDgEgFAAIgEAAIgEADIgGAEIgFADIAAA1IgOAAIAAhIIAOAAIAAAOQAHgIAHgDQAFgEAIAAQAEAAADACIAGAFIAEAGQABAFAAAEIAAAzg");
	this.shape_271.setTransform(136.3,468);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#000000").s().p("AgWAlIAAhIIAPAAIAAAPIAEgGIADgGIAGgDQACgBADAAIAFABIADABIADADIABAEQAAAEgDABQgCACgDAAIgFAAIgCgCIgCgBIgEgBIgCABIgBADIgEADIgCAFIAAAxg");
	this.shape_272.setTransform(130,468);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#000000").s().p("AgRAkQgDgBgDgCQgCgDgBgDIgCgHQAAgFACgEIAFgHIAIgEIAJgDIAIgEIAKgCIAAgFIgBgIQgBgEgCgCQgBgCgDgBIgGgBIgEABIgEADIgBADIgBAEIAAAEIgBADIgDACIgDABIgDgBIgDgBIgBgDIgBgEQAAgDADgDQACgDAEgDQAEgCAFgBQAGgCAEAAQAHAAAFACQAFABADADQADACACAEIABAIIAAA1IgPAAIAAgKIgFAEIgFAEIgFADIgIABQgEAAgEgCgAAIgCIgHACIgEACIgFAEIgEAFIgBAFIABAFIADAEIADADIAFABIADgBIAEgBIAEgDIAEgDIAAgag");
	this.shape_273.setTransform(122.7,468.1);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#000000").s().p("AAQA3IAAgyQAAgFgEgEQgDgEgFAAIgEAAIgEADIgGAEIgFABIAAA3IgOAAIAAhpIAKgEIAEAAIAAAzQAHgIAHgDQAFgEAIAAQAEAAADACIAGAFIAEAGQABAFAAACIAAA1g");
	this.shape_274.setTransform(115.5,466.2);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#000000").s().p("AgdA0IgDgBIgDgDIgBgDIABgDIACgDIACgCIADAAIAFAAIABABIADABIAEABIADgBIAEgEIACgEIACgEIAEgLIglhEIARAAIAaA0IAYg0IAIAAIgmBUIgEAJIgGAHIgHAEIgHABg");
	this.shape_275.setTransform(103.7,469.8);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#000000").s().p("AgeAxQgIgEgBgGIACgGIAEgFIAGgFIAFgFIgEgBIgDgCIgCgDIgBgDIABgEIAEgFIAEgCIAHgDQgIgDgFgGQgEgFAAgHQABgGACgEQACgGAFgDQAEgEAGgCQAGgCAHAAIAEABIAGAAIAFACIAEACIAUAAIAAAGIgNAAIADAIIABAHQAAAFgCAFQgDAFgFADQgEADgGACQgHACgFAAIgFgBIgGgBIgDAEIgBADQAAABAAAAQAAABAAAAQAAABABAAQAAAAABABQADABAEAAIAZABQAHABAEABQAEABADADQADABAAADIABAHQAAAGgCAFQgDAFgGAEQgGAEgIACQgIACgIAAQgSAAgKgFgAgVAWIgCAEIgBACIAAAEQAAABAAAAQAAABAAAAQABABAAAAQAAABAAAAQACADAEABIAJADQAEABAGABQAHgBAFgBQAGgBAFgCIAFgEQACgDAAgCQABgFgFgCQgFgDgJAAIgKAAIgIAAIgJgBIgEgBgAgIgwIgFAFIgCAGIgBAIIABAJIADAHQACAEAEACQADABADAAQACABACgCIAGgEQACgCABgDIABgIQAAgFgBgFQgBgEgDgEQgDgDgDgCQgDgCgCAAQgDAAgDABg");
	this.shape_276.setTransform(95.2,469.7);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#000000").s().p("AgWAlIAAhIIAOAAIAAAPIAFgGIADgGIAGgDQACgBADAAIAFABIADABIADADIABAEQAAAEgDABQgCACgDAAIgFAAIgCgCIgCgBIgEgBIgCABIgBADIgEADIgDAFIAAAxg");
	this.shape_277.setTransform(88.7,468);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#000000").s().p("AgMAjQgGgDgFgFQgFgEgDgHQgDgGAAgIQAAgHADgHQADgIAEgFQAFgGAHgDQAGgDAGAAQAIAAAFADQAGACAFAFQAEAEADAGQACAFAAAGIg1AAQAAAGACAGQACAGAEAFQADAEAFADQAEADAEAAQAFAAAEgCIAIgEIAGgGQACgDACgDIAEACQgBAFgEAFQgEAFgEAEQgFAEgFACQgGACgGAAQgGAAgGgDgAAOgMQABgEgCgDIgEgHIgGgEQgDgBgDAAIgGABIgFAEIgEAHIgCAHIAiAAIAAAAg");
	this.shape_278.setTransform(81.4,468.1);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#000000").s().p("AAQAlIAAgwQAAgHgEgEQgDgEgFAAIgEAAIgEADIgGAEIgFADIAAA1IgOAAIAAhIIAOAAIAAAOQAHgIAHgDQAFgEAIAAQAEAAADACIAGAFIAEAGQABAFAAAEIAAAzg");
	this.shape_279.setTransform(73.5,468);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#000000").s().p("AgMAjQgHgDgFgFQgEgEgDgHQgDgGAAgIQAAgHACgHQADgIAFgFQAFgGAGgDQAHgDAGAAQAIAAAFADQAHACAEAFQAEAEACAGQADAFAAAGIg1AAQAAAGACAGQACAGADAFQAEAEAEADQAFADAEAAQAFAAAEgCIAIgEIAGgGQADgDAAgDIAFACQgCAFgDAFQgEAFgFAEQgEAEgGACQgFACgGAAQgFAAgHgDgAAOgMQAAgEgBgDIgEgHIgGgEQgDgBgDAAIgFABIgGAEIgEAHIgCAHIAiAAIAAAAg");
	this.shape_280.setTransform(65.5,468.1);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#000000").s().p("AgMAjQgGgDgGgFQgEgEgDgHQgDgGAAgIQAAgHADgHQADgIAEgFQAFgGAHgDQAGgDAGAAQAHAAAHADQAFACAFAFQAEAEADAGQACAFAAAGIg1AAQAAAGACAGQACAGAEAFQADAEAFADQAEADAEAAQAFAAAEgCIAIgEIAGgGQADgDABgDIAEACQgBAFgEAFQgDAFgFAEQgFAEgFACQgGACgGAAQgFAAgHgDgAAPgMQgBgEgBgDIgEgHIgGgEQgDgBgCAAIgHABIgFAEIgEAHIgCAHIAjAAIAAAAg");
	this.shape_281.setTransform(53.3,468.1);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#000000").s().p("AAQA3IAAgyQAAgFgEgEQgDgEgFAAIgEAAIgEADIgGAEIgFABIAAA3IgOAAIAAhpIAKgEIAEAAIAAAzQAHgIAHgDQAFgEAIAAQAEAAADACIAGAFIAEAGQABAFAAACIAAA1g");
	this.shape_282.setTransform(45.3,466.2);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#000000").s().p("AgBAwIgFgDQgCgDAAgDIgBgHIAAgxIgNAAIAAgEQAGAAAEgCQAEgDADgDIAEgJIABgLIADAAIAAAZIARAAIAAAHIgRAAIAAAxIABAEIACACIACABIADABQABAAAAAAQABAAABAAQAAAAABAAQAAgBABAAIADgDIAEACQgDAFgFAEQgFACgHAAIgEgBg");
	this.shape_283.setTransform(39.1,466.9);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#000000").s().p("AgFAlIgHgCIgIgEQgDgCgDgFIAGgFIAFAGIAFAFIAFACIAFABIAEgBIAFgDIADgDIABgEQgBgDgBgDIgFgEIgFgEIgGgDIgHgEIgHgDIgEgGQgBgDAAgFQAAgFACgDQABgEADgDQAEgDAEgBQAFgCAFAAIAFABIAHACIAFAEIAHAHIgFAFQgFgHgEgDQgGgEgEAAIgFABIgFACIgCADIgBAEQgBADACADIAFAEIAHAEIAFADIAJAEIAHADQADACABAEQACADAAAFQAAAEgCAEQgCAEgDADQgEADgEACQgGACgGAAg");
	this.shape_284.setTransform(29.2,468.1);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#000000").s().p("AAfAwIgPggIgnAAIgPAgIgIAAIAuhfIACAAIAtBfgAANAKIgPgjIgSAjIAhAAg");
	this.shape_285.setTransform(21.2,466.9);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#000000").s().p("AAKBOIAAgFIAXAAIAAhwQgBgPgFgHQgHgHgKAAQgIAAgHAEQgHAFgGAIQgHAIgDAMQgEANAAAQIAABLIAXAAIAAAFIhaAAIAAgFIAXAAIAAiOIgXAAIAAgFIBCAAIAAAkIABAAIAGgKQADgHAHgGQAGgHAKgFQAKgEARAAQAMAAAIADQAKADAGAHQAHAHADAJQAEAKAAAMIAABjIAXAAIAAAFg");
	this.shape_286.setTransform(394.7,45.7);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#000000").s().p("AghBLQgQgHgMgLQgMgKgHgQQgGgPAAgQQAAgPAGgPQAHgOAMgMQAMgLAQgHQAQgGARAAQASAAAQAGQAQAHAMALQAMALAGAPQAHAPAAAPQAAAQgHAPQgGAQgMAKQgMALgQAHQgQAGgSABQgRgBgQgGgAgVhFQgIAHgDALQgEALgBAOIgBAaIABAcQABAOAEALQADAKAIAIQAIAGANAAQANAAAIgGQAIgIAEgKQAEgLABgOIABgcIgBgaQgBgOgEgLQgEgLgIgHQgIgHgNAAQgNAAgIAHg");
	this.shape_287.setTransform(373.1,45.8);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#000000").s().p("AgsCAIAAgFIAXAAIAAiOIgXAAIAAgFIBBAAIAACTIAZAAIAAAFgAgQhUQgIgHAAgLQAAgKAIgIQAHgHAJAAQAKAAAIAHQAHAIAAAKQAAALgHAHQgIAIgKAAQgJAAgHgIg");
	this.shape_288.setTransform(357.7,40.7);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#000000").s().p("AgOBiQgLgEgEgHQgFgGgBgIIgBgOIAAhtIgYAAIAAgFIAYAAIAAguIALAEIAMABIALgBIAJgEIAAAuIAqAAIAAAFIgqAAIAAB3IAAAKIACAJQACADAEACQAEADAGAAQAHAAAFgDIAIgIIAHgKIADgLIAFABQgBAMgGAIQgFAHgGAEQgIAEgHABIgOABQgRAAgKgEg");
	this.shape_289.setTransform(345.8,43.7);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#000000").s().p("AgrBLQgKgCgHgGQgNgLAAgaIAAhmIgYAAIAAgFIBEAAIAABwQAAAOAFAJQAGAKAOAAQAGAAAHgEQAHgEAEgHQAFgHADgJQADgJAAgJIAAhbIgYAAIAAgFIBDAAIAACTIAYAAIAAAFIhDAAIAAgdIAAAAQgDAIgGAGQgGAGgHAEQgIAEgGACIgQACQgNAAgJgDg");
	this.shape_290.setTransform(327.3,46);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#000000").s().p("AgJB7QgLgHgFgPIgBAAIAAAaIhDAAIAAgFIAYAAIAAj4IgYAAIAAgEIBEAAIAACCIAAAAQAGgPAKgIQAJgHAQAAQAUgBAPAJQAPAIAJAMQAKAKAEAPQAFAOAAANQAAAQgGAOQgFAPgLALQgKAMgOAHQgPAGgRABQgQAAgJgJgAgHgSQgIAHgEALQgDALgCANIgBAaIABAZQABANAEAMQAFALAHAJQAHAHAQAAQAJAAAHgFQAGgGADgKQACgKABgOIABggIgCgkQgBgOgEgJQgEgIgGgEQgGgFgJAAQgNAAgHAIg");
	this.shape_291.setTransform(305.8,40.8);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#000000").s().p("AgsCAIAAgFIAYAAIAAiOIgYAAIAAgFIBBAAIAACTIAYAAIAAAFgAgQhUQgIgHAAgLQAAgKAIgIQAHgHAJAAQAKAAAIAHQAHAIAAAKQAAALgHAHQgIAIgKAAQgJAAgHgIg");
	this.shape_292.setTransform(289.8,40.7);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#000000").s().p("AhIBOIAAgFIAXAAIAAiOIgXAAIAAgFIBCAAIAAAeIABAAQAFgOAKgKQALgJASAAQAPAAAKAIQAJAIAAAOQAAALgFAGQgFAGgMAAQgIAAgHgDQgHgEAAgJIABgEIAAgFIABgGIABgDIgBgEIgDgDIgFgCQgDAAgGAEQgFADgFAHQgEAGgCAJQgDAJAAAMIAABaIAaAAIAAAFg");
	this.shape_293.setTransform(276.8,45.7);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#000000").s().p("AgOBiQgLgEgEgHQgFgGgBgIIgBgOIAAhtIgYAAIAAgFIAYAAIAAguIALAEIALABIAMgBIAJgEIAAAuIAqAAIAAAFIgqAAIAAB3IAAAKIACAJQADADAEACQADADAHAAQAGAAAFgDIAIgIIAHgKIADgLIAGABQgDAMgFAIQgFAHgGAEQgIAEgHABIgOABQgRAAgKgEg");
	this.shape_294.setTransform(262,43.7);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#000000").s().p("AgNBQIgOgDIgNgEIgJgBIgEABIgCAEIgFAAIAAg0IAFAAIAIAUQAFAJAGAHQAGAHAJAEQAIAFANAAIAHgBQAFAAAFgDQAFgCAEgGQAEgFAAgLIgBgGIgEgHIgIgIIgPgHIgbgLIgLgEQgGgDgFgDQgFgFgDgHQgDgIAAgJQAAgLAEgJQAEgJAIgHQAIgHALgFQALgDAMAAIAMABIAKADIAJADIAGACQAEgBABgBIACgDIAFAAIAAArIgFAAIgHgQQgEgIgFgFQgGgHgHgDQgIgEgJAAQgMAAgKAHQgJAGAAAMIAAAGIAEAHIAHAGIAPAIIAcAKQAUAGAKAKQAFAFADAIQACAGAAAJQAAAMgFAKQgFAJgJAHQgIAGgMAEQgLADgLABg");
	this.shape_295.setTransform(247.1,45.8);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#000000").s().p("AgtCAIAAgFIAZAAIAAiOIgZAAIAAgFIBDAAIAACTIAYAAIAAAFgAgRhUQgHgHAAgLQAAgKAHgIQAIgHAJAAQAKAAAHAHQAIAIAAAKQAAALgIAHQgHAIgKAAQgJAAgIgIg");
	this.shape_296.setTransform(234,40.7);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#000000").s().p("Ag5CBIgpgBIghAAIAAgFIAhAAIAAj0IghAAIAAgGIAhAAIAlAAIAlAAIAgACQASACASAFQARAGAQAKQAQAJAMAOQAMAPAIATQAHAUAAAZQAAAagHAUQgIAUgMAOQgMAPgPAJQgQAJgQAGQgRAFgQACIgdADgAgkh6IgJABIAAD0IATABQAXAAAPgGQAQgFAMgJQALgKAHgNQAGgMAEgNQADgNABgOIABgZQAAgbgDgYQgCgMgEgKQgDgKgGgJQgKgQgTgKQgKgEgNgCQgKgDgQAAg");
	this.shape_297.setTransform(213.1,40.7);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#000000").s().p("AhRB5QgLgIAAgOQAAgKAGgFQAIgFAIAAQAHAAAHAEQAFAEAAAHQAAAHgCAEQgCAEAAAFQAAAEACACQABABABAAQAAABABAAQAAAAABAAQAAAAABAAQAHAAAFgFQAGgEAEgHIAIgPIAGgPIANgmIhBigIgTAAIAAgFIBaAAIAAAFIgYAAIAqBoIAuhoIgeAAIAAgFIA0AAIAAAFIgQAAIgjBNIgZA7IgRAvIgPAkQgHAQgJAIQgJAHgPAAQgQAAgKgHg");
	this.shape_298.setTransform(179.7,51);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#000000").s().p("AgOBiQgKgEgGgHQgEgGgBgIIAAgOIAAhtIgZAAIAAgFIAZAAIAAguIAKAEIALABIALgBIAKgEIAAAuIApAAIAAAFIgpAAIAAB3IAAAKIADAJQABADAFACQADADAHAAQAGAAAFgDIAIgIIAHgKIADgLIAGABQgCAMgFAIQgGAHgGAEQgIAEgHABIgOABQgRAAgKgEg");
	this.shape_299.setTransform(165.5,43.7);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#000000").s().p("AgtCAIAAgFIAZAAIAAiOIgZAAIAAgFIBDAAIAACTIAXAAIAAAFgAgRhUQgHgHAAgLQAAgKAHgIQAIgHAJAAQAKAAAHAHQAIAIAAAKQAAALgIAHQgHAIgKAAQgJAAgIgIg");
	this.shape_300.setTransform(152.8,40.7);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#000000").s().p("AAABRIgRgEIgUgIQgKgGgJgJQgIgJgFgOQgGgNAAgSQAAgMAGgOQAGgOALgMQAMgNAQgHQAIgFAKgCIASgBQAOAAALACQALAEAIAFQAIAEAFAIQAEAIAAAIQAAAMgGAFQgGAFgLAAQgJAAgHgDQgHgDAAgJIABgGIACgIIACgHIABgFQAAgHgHgEQgGgFgJAAQgLABgIAGQgHAGgEAKQgFAKgBAOIgBAdIABAaQABANAFAMQAFAMAIAHQAHAHAQAAQAPAAAKgFQAKgFAGgHQAGgHADgIIAEgKIAFACIgGAPQgDAHgIAGQgHAIgLAEQgLAEgSABg");
	this.shape_301.setTransform(138.4,45.8);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#000000").s().p("AgtCAIAAgFIAYAAIAAiOIgYAAIAAgFIBDAAIAACTIAYAAIAAAFgAgRhUQgHgHAAgLQAAgKAHgIQAIgHAJAAQAKAAAHAHQAIAIAAAKQAAALgIAHQgHAIgKAAQgJAAgIgIg");
	this.shape_302.setTransform(124.2,40.7);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#000000").s().p("AhIBOIAAgFIAXAAIAAiOIgXAAIAAgFIBCAAIAAAeIABAAQAFgOAKgKQALgJASAAQAPAAAKAIQAJAIAAAOQAAALgFAGQgFAGgMAAQgIAAgHgDQgHgEAAgJIABgEIAAgFIABgGIABgDIgBgEIgDgDIgFgCQgDAAgGAEQgFADgFAHQgEAGgCAJQgDAJAAAMIAABaIAaAAIAAAFg");
	this.shape_303.setTransform(111.2,45.7);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#000000").s().p("AgOBiQgKgEgGgHQgEgGgBgIIgBgOIAAhtIgXAAIAAgFIAXAAIAAguIAMAEIALABIAKgBIAJgEIAAAuIArAAIAAAFIgrAAIAAB3IABAKIADAJQACADADACQAEADAGAAQAHAAAFgDIAJgIIAFgKIAEgLIAFABQgCAMgEAIQgGAHgHAEQgGAEgIABIgOABQgRAAgKgEg");
	this.shape_304.setTransform(96.4,43.7);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#000000").s().p("AAABRIgRgEIgUgIQgKgGgJgJQgIgJgFgOQgGgNAAgSQAAgMAGgOQAGgOALgMQAMgNAQgHQAIgFAKgCIASgBQAOAAALACQALAEAIAFQAIAEAFAIQAEAIAAAIQAAAMgGAFQgGAFgLAAQgJAAgHgDQgHgDAAgJIABgGIACgIIACgHIABgFQAAgHgHgEQgGgFgJAAQgLABgIAGQgHAGgEAKQgFAKgBAOIgBAdIABAaQABANAFAMQAFAMAIAHQAHAHAQAAQAPAAAKgFQAKgFAGgHQAGgHADgIIAEgKIAFACIgGAPQgDAHgIAGQgHAIgLAEQgLAEgSABg");
	this.shape_305.setTransform(80.6,45.8);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#000000").s().p("AgWBMQgQgGgMgKQgMgLgHgPQgHgQAAgSQAAgOAHgPQAGgOAMgMQALgMAPgGQAQgIAPABQANAAAMADQANAFAKAIQAKAIAHANQAGANAAASIhpAAIAAAPIACAaQABANAEALQAGALAIAGQAHAHARAAQAOAAAJgFQAKgFAHgIQAGgHADgHIADgKIAFACIgGAPQgEAHgHAHQgIAGgLAFQgLAEgQABQgQgBgRgFgAgMhFQgHAFgDAJQgDAIgBALIgCAUIA5AAIAAgZIgBgJIgCgMQgDgFgEgEQgGgFgIAAQgLABgGAGg");
	this.shape_306.setTransform(62.7,45.8);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#000000").s().p("AgsCBIAAgFIAXAAIAAj3IgXAAIAAgFIBBAAIAAD8IAZAAIAAAFg");
	this.shape_307.setTransform(48.3,40.6);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#000000").s().p("AhxCAIAAgFIAgAAIAAj1IggAAIAAgFIDVAAIAAA+IgFAAIgGgQQgEgJgJgJQgHgJgMgHQgMgGgSgBIg4AAIAABwIAVAAQALAAAKgEQAJgEAGgHQAGgHAEgKIAGgWIAFAAIAABuIgFAAIgGgUQgDgKgGgHQgGgIgIgCQgJgEgKAAIgZAAIAACAIA6AAQAQAAANgGQAOgFAKgLQALgKAGgNQAHgOAEgPIAEAAIAABPg");
	this.shape_308.setTransform(29.3,40.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(500));

	// intro
	this.instance = new lib.animationWindMills0001();
	this.instance.parent = this;

	this.instance_1 = new lib.animationWindMills0002();
	this.instance_1.parent = this;

	this.instance_2 = new lib.animationWindMills0003();
	this.instance_2.parent = this;

	this.instance_3 = new lib.animationWindMills0004();
	this.instance_3.parent = this;

	this.instance_4 = new lib.animationWindMills0005();
	this.instance_4.parent = this;

	this.instance_5 = new lib.animationWindMills0006();
	this.instance_5.parent = this;

	this.instance_6 = new lib.animationWindMills0007();
	this.instance_6.parent = this;

	this.instance_7 = new lib.animationWindMills0008();
	this.instance_7.parent = this;

	this.instance_8 = new lib.animationWindMills0009();
	this.instance_8.parent = this;

	this.instance_9 = new lib.animationWindMills0010();
	this.instance_9.parent = this;

	this.instance_10 = new lib.animationWindMills0011();
	this.instance_10.parent = this;

	this.instance_11 = new lib.animationWindMills0012();
	this.instance_11.parent = this;

	this.instance_12 = new lib.animationWindMills0013();
	this.instance_12.parent = this;

	this.instance_13 = new lib.animationWindMills0014();
	this.instance_13.parent = this;

	this.instance_14 = new lib.animationWindMills0015();
	this.instance_14.parent = this;

	this.instance_15 = new lib.animationWindMills0016();
	this.instance_15.parent = this;

	this.instance_16 = new lib.animationWindMills0017();
	this.instance_16.parent = this;

	this.instance_17 = new lib.animationWindMills0018();
	this.instance_17.parent = this;

	this.instance_18 = new lib.animationWindMills0019();
	this.instance_18.parent = this;

	this.instance_19 = new lib.animationWindMills0020();
	this.instance_19.parent = this;

	this.instance_20 = new lib.animationWindMills0021();
	this.instance_20.parent = this;

	this.instance_21 = new lib.animationWindMills0022();
	this.instance_21.parent = this;

	this.instance_22 = new lib.animationWindMills0023();
	this.instance_22.parent = this;

	this.instance_23 = new lib.animationWindMills0024();
	this.instance_23.parent = this;

	this.instance_24 = new lib.animationWindMills0025();
	this.instance_24.parent = this;

	this.instance_25 = new lib.animationWindMills0026();
	this.instance_25.parent = this;

	this.instance_26 = new lib.animationWindMills0027();
	this.instance_26.parent = this;

	this.instance_27 = new lib.animationWindMills0028();
	this.instance_27.parent = this;

	this.instance_28 = new lib.animationWindMills0029();
	this.instance_28.parent = this;

	this.instance_29 = new lib.animationWindMills0030();
	this.instance_29.parent = this;

	this.instance_30 = new lib.animationWindMills0031();
	this.instance_30.parent = this;

	this.instance_31 = new lib.animationWindMills0032();
	this.instance_31.parent = this;

	this.instance_32 = new lib.animationWindMills0033();
	this.instance_32.parent = this;

	this.instance_33 = new lib.animationWindMills0034();
	this.instance_33.parent = this;

	this.instance_34 = new lib.animationWindMills0035();
	this.instance_34.parent = this;

	this.instance_35 = new lib.animationWindMills0036();
	this.instance_35.parent = this;

	this.instance_36 = new lib.animationWindMills0037();
	this.instance_36.parent = this;

	this.instance_37 = new lib.animationWindMills0038();
	this.instance_37.parent = this;

	this.instance_38 = new lib.animationWindMills0039();
	this.instance_38.parent = this;

	this.instance_39 = new lib.animationWindMills0040();
	this.instance_39.parent = this;

	this.instance_40 = new lib.animationWindMills0041();
	this.instance_40.parent = this;

	this.instance_41 = new lib.animationWindMills0042();
	this.instance_41.parent = this;

	this.instance_42 = new lib.animationWindMills0043();
	this.instance_42.parent = this;

	this.instance_43 = new lib.animationWindMills0044();
	this.instance_43.parent = this;

	this.instance_44 = new lib.animationWindMills0045();
	this.instance_44.parent = this;

	this.instance_45 = new lib.animationWindMills0046();
	this.instance_45.parent = this;

	this.instance_46 = new lib.animationWindMills0047();
	this.instance_46.parent = this;

	this.instance_47 = new lib.animationWindMills0048();
	this.instance_47.parent = this;

	this.instance_48 = new lib.animationWindMills0049();
	this.instance_48.parent = this;

	this.instance_49 = new lib.animationWindMills0050();
	this.instance_49.parent = this;

	this.instance_50 = new lib.animationWindMills0051();
	this.instance_50.parent = this;

	this.instance_51 = new lib.animationWindMills0052();
	this.instance_51.parent = this;

	this.instance_52 = new lib.animationWindMills0053();
	this.instance_52.parent = this;

	this.instance_53 = new lib.animationWindMills0054();
	this.instance_53.parent = this;

	this.instance_54 = new lib.animationWindMills0055();
	this.instance_54.parent = this;

	this.instance_55 = new lib.animationWindMills0056();
	this.instance_55.parent = this;

	this.instance_56 = new lib.animationWindMills0057();
	this.instance_56.parent = this;

	this.instance_57 = new lib.animationWindMills0058();
	this.instance_57.parent = this;

	this.instance_58 = new lib.animationWindMills0059();
	this.instance_58.parent = this;

	this.instance_59 = new lib.animationWindMills0060();
	this.instance_59.parent = this;

	this.instance_60 = new lib.animationWindMills0061();
	this.instance_60.parent = this;

	this.instance_61 = new lib.animationWindMills0062();
	this.instance_61.parent = this;

	this.instance_62 = new lib.animationWindMills0063();
	this.instance_62.parent = this;

	this.instance_63 = new lib.animationWindMills0064();
	this.instance_63.parent = this;

	this.instance_64 = new lib.animationWindMills0065();
	this.instance_64.parent = this;

	this.instance_65 = new lib.animationWindMills0066();
	this.instance_65.parent = this;

	this.instance_66 = new lib.animationWindMills0067();
	this.instance_66.parent = this;

	this.instance_67 = new lib.animationWindMills0068();
	this.instance_67.parent = this;

	this.instance_68 = new lib.animationWindMills0069();
	this.instance_68.parent = this;

	this.instance_69 = new lib.animationWindMills0070();
	this.instance_69.parent = this;

	this.instance_70 = new lib.animationWindMills0071();
	this.instance_70.parent = this;

	this.instance_71 = new lib.animationWindMills0072();
	this.instance_71.parent = this;

	this.instance_72 = new lib.animationWindMills0073();
	this.instance_72.parent = this;

	this.instance_73 = new lib.animationWindMills0074();
	this.instance_73.parent = this;

	this.instance_74 = new lib.animationWindMills0075();
	this.instance_74.parent = this;

	this.instance_75 = new lib.animationWindMills0076();
	this.instance_75.parent = this;

	this.instance_76 = new lib.animationWindMills0077();
	this.instance_76.parent = this;

	this.instance_77 = new lib.animationWindMills0078();
	this.instance_77.parent = this;

	this.instance_78 = new lib.animationWindMills0079();
	this.instance_78.parent = this;

	this.instance_79 = new lib.animationWindMills0080();
	this.instance_79.parent = this;

	this.instance_80 = new lib.animationWindMills0081();
	this.instance_80.parent = this;

	this.instance_81 = new lib.animationWindMills0082();
	this.instance_81.parent = this;

	this.instance_82 = new lib.animationWindMills0083();
	this.instance_82.parent = this;

	this.instance_83 = new lib.animationWindMills0084();
	this.instance_83.parent = this;

	this.instance_84 = new lib.animationWindMills0085();
	this.instance_84.parent = this;

	this.instance_85 = new lib.animationWindMills0086();
	this.instance_85.parent = this;

	this.instance_86 = new lib.animationWindMills0087();
	this.instance_86.parent = this;

	this.instance_87 = new lib.animationWindMills0088();
	this.instance_87.parent = this;

	this.instance_88 = new lib.animationWindMills0089();
	this.instance_88.parent = this;

	this.instance_89 = new lib.animationWindMills0090();
	this.instance_89.parent = this;

	this.instance_90 = new lib.animationWindMills0091();
	this.instance_90.parent = this;

	this.instance_91 = new lib.animationWindMills0092();
	this.instance_91.parent = this;

	this.instance_92 = new lib.animationWindMills0093();
	this.instance_92.parent = this;

	this.instance_93 = new lib.animationWindMills0094();
	this.instance_93.parent = this;

	this.instance_94 = new lib.animationWindMills0095();
	this.instance_94.parent = this;

	this.instance_95 = new lib.animationWindMills0096();
	this.instance_95.parent = this;

	this.instance_96 = new lib.animationWindMills0097();
	this.instance_96.parent = this;

	this.instance_97 = new lib.animationWindMills0098();
	this.instance_97.parent = this;

	this.instance_98 = new lib.animationWindMills0099();
	this.instance_98.parent = this;

	this.instance_99 = new lib.animationWindMills0100();
	this.instance_99.parent = this;

	this.instance_100 = new lib.animationWindMills0101();
	this.instance_100.parent = this;

	this.instance_101 = new lib.animationWindMills0102();
	this.instance_101.parent = this;

	this.instance_102 = new lib.animationWindMills0103();
	this.instance_102.parent = this;

	this.instance_103 = new lib.animationWindMills0104();
	this.instance_103.parent = this;

	this.instance_104 = new lib.animationWindMills0105();
	this.instance_104.parent = this;

	this.instance_105 = new lib.animationWindMills0106();
	this.instance_105.parent = this;

	this.instance_106 = new lib.animationWindMills0107();
	this.instance_106.parent = this;

	this.instance_107 = new lib.animationWindMills0108();
	this.instance_107.parent = this;

	this.instance_108 = new lib.animationWindMills0109();
	this.instance_108.parent = this;

	this.instance_109 = new lib.animationWindMills0110();
	this.instance_109.parent = this;

	this.instance_110 = new lib.animationWindMills0111();
	this.instance_110.parent = this;

	this.instance_111 = new lib.animationWindMills0112();
	this.instance_111.parent = this;

	this.instance_112 = new lib.animationWindMills0113();
	this.instance_112.parent = this;

	this.instance_113 = new lib.animationWindMills0114();
	this.instance_113.parent = this;

	this.instance_114 = new lib.animationWindMills0115();
	this.instance_114.parent = this;

	this.instance_115 = new lib.animationWindMills0116();
	this.instance_115.parent = this;

	this.instance_116 = new lib.animationWindMills0117();
	this.instance_116.parent = this;

	this.instance_117 = new lib.animationWindMills0118();
	this.instance_117.parent = this;

	this.instance_118 = new lib.animationWindMills0119();
	this.instance_118.parent = this;

	this.instance_119 = new lib.animationWindMills0120();
	this.instance_119.parent = this;

	this.instance_120 = new lib.animationWindMills0121();
	this.instance_120.parent = this;

	this.instance_121 = new lib.animationWindMills0122();
	this.instance_121.parent = this;

	this.instance_122 = new lib.animationWindMills0123();
	this.instance_122.parent = this;

	this.instance_123 = new lib.animationWindMills0124();
	this.instance_123.parent = this;

	this.instance_124 = new lib.animationWindMills0125();
	this.instance_124.parent = this;

	this.instance_125 = new lib.animationWindMills0126();
	this.instance_125.parent = this;

	this.instance_126 = new lib.animationWindMills0127();
	this.instance_126.parent = this;

	this.instance_127 = new lib.animationWindMills0128();
	this.instance_127.parent = this;

	this.instance_128 = new lib.animationWindMills0129();
	this.instance_128.parent = this;

	this.instance_129 = new lib.animationWindMills0130();
	this.instance_129.parent = this;

	this.instance_130 = new lib.animationWindMills0131();
	this.instance_130.parent = this;

	this.instance_131 = new lib.animationWindMills0132();
	this.instance_131.parent = this;

	this.instance_132 = new lib.animationWindMills0133();
	this.instance_132.parent = this;

	this.instance_133 = new lib.animationWindMills0134();
	this.instance_133.parent = this;

	this.instance_134 = new lib.animationWindMills0135();
	this.instance_134.parent = this;

	this.instance_135 = new lib.animationWindMills0136();
	this.instance_135.parent = this;

	this.instance_136 = new lib.animationWindMills0137();
	this.instance_136.parent = this;

	this.instance_137 = new lib.animationWindMills0138();
	this.instance_137.parent = this;

	this.instance_138 = new lib.animationWindMills0139();
	this.instance_138.parent = this;

	this.instance_139 = new lib.animationWindMills0140();
	this.instance_139.parent = this;

	this.instance_140 = new lib.animationWindMills0141();
	this.instance_140.parent = this;

	this.instance_141 = new lib.animationWindMills0142();
	this.instance_141.parent = this;

	this.instance_142 = new lib.animationWindMills0143();
	this.instance_142.parent = this;

	this.instance_143 = new lib.animationWindMills0144();
	this.instance_143.parent = this;

	this.instance_144 = new lib.animationWindMills0145();
	this.instance_144.parent = this;

	this.instance_145 = new lib.animationWindMills0146();
	this.instance_145.parent = this;

	this.instance_146 = new lib.animationWindMills0147();
	this.instance_146.parent = this;

	this.instance_147 = new lib.animationWindMills0148();
	this.instance_147.parent = this;

	this.instance_148 = new lib.animationWindMills0149();
	this.instance_148.parent = this;

	this.instance_149 = new lib.animationWindMills0150();
	this.instance_149.parent = this;

	this.instance_150 = new lib.animationWindMills0151();
	this.instance_150.parent = this;

	this.instance_151 = new lib.animationWindMills0152();
	this.instance_151.parent = this;

	this.instance_152 = new lib.animationWindMills0153();
	this.instance_152.parent = this;

	this.instance_153 = new lib.animationWindMills0154();
	this.instance_153.parent = this;

	this.instance_154 = new lib.animationWindMills0155();
	this.instance_154.parent = this;

	this.instance_155 = new lib.animationWindMills0156();
	this.instance_155.parent = this;

	this.instance_156 = new lib.animationWindMills0157();
	this.instance_156.parent = this;

	this.instance_157 = new lib.animationWindMills0158();
	this.instance_157.parent = this;

	this.instance_158 = new lib.animationWindMills0159();
	this.instance_158.parent = this;

	this.instance_159 = new lib.animationWindMills0160();
	this.instance_159.parent = this;

	this.instance_160 = new lib.animationWindMills0161();
	this.instance_160.parent = this;

	this.instance_161 = new lib.animationWindMills0162();
	this.instance_161.parent = this;

	this.instance_162 = new lib.animationWindMills0163();
	this.instance_162.parent = this;

	this.instance_163 = new lib.animationWindMills0164();
	this.instance_163.parent = this;

	this.instance_164 = new lib.animationWindMills0165();
	this.instance_164.parent = this;

	this.instance_165 = new lib.animationWindMills0166();
	this.instance_165.parent = this;

	this.instance_166 = new lib.animationWindMills0167();
	this.instance_166.parent = this;

	this.instance_167 = new lib.animationWindMills0168();
	this.instance_167.parent = this;

	this.instance_168 = new lib.animationWindMills0169();
	this.instance_168.parent = this;

	this.instance_169 = new lib.animationWindMills0170();
	this.instance_169.parent = this;

	this.instance_170 = new lib.animationWindMills0171();
	this.instance_170.parent = this;

	this.instance_171 = new lib.animationWindMills0172();
	this.instance_171.parent = this;

	this.instance_172 = new lib.animationWindMills0173();
	this.instance_172.parent = this;

	this.instance_173 = new lib.animationWindMills0174();
	this.instance_173.parent = this;

	this.instance_174 = new lib.animationWindMills0175();
	this.instance_174.parent = this;

	this.instance_175 = new lib.animationWindMills0176();
	this.instance_175.parent = this;

	this.instance_176 = new lib.animationWindMills0177();
	this.instance_176.parent = this;

	this.instance_177 = new lib.animationWindMills0178();
	this.instance_177.parent = this;

	this.instance_178 = new lib.animationWindMills0179();
	this.instance_178.parent = this;

	this.instance_179 = new lib.animationWindMills0180();
	this.instance_179.parent = this;

	this.instance_180 = new lib.animationWindMills0181();
	this.instance_180.parent = this;

	this.instance_181 = new lib.animationWindMills0182();
	this.instance_181.parent = this;

	this.instance_182 = new lib.animationWindMills0183();
	this.instance_182.parent = this;

	this.instance_183 = new lib.animationWindMills0184();
	this.instance_183.parent = this;

	this.instance_184 = new lib.animationWindMills0185();
	this.instance_184.parent = this;

	this.instance_185 = new lib.animationWindMills0186();
	this.instance_185.parent = this;

	this.instance_186 = new lib.animationWindMills0187();
	this.instance_186.parent = this;

	this.instance_187 = new lib.animationWindMills0188();
	this.instance_187.parent = this;

	this.instance_188 = new lib.animationWindMills0189();
	this.instance_188.parent = this;

	this.instance_189 = new lib.animationWindMills0190();
	this.instance_189.parent = this;

	this.instance_190 = new lib.animationWindMills0191();
	this.instance_190.parent = this;

	this.instance_191 = new lib.animationWindMills0192();
	this.instance_191.parent = this;

	this.instance_192 = new lib.animationWindMills0193();
	this.instance_192.parent = this;

	this.instance_193 = new lib.animationWindMills0194();
	this.instance_193.parent = this;

	this.instance_194 = new lib.animationWindMills0195();
	this.instance_194.parent = this;

	this.instance_195 = new lib.animationWindMills0196();
	this.instance_195.parent = this;

	this.instance_196 = new lib.animationWindMills0197();
	this.instance_196.parent = this;

	this.instance_197 = new lib.animationWindMills0198();
	this.instance_197.parent = this;

	this.instance_198 = new lib.animationWindMills0199();
	this.instance_198.parent = this;

	this.instance_199 = new lib.animationWindMills0200();
	this.instance_199.parent = this;

	this.instance_200 = new lib.animationWindMills0201();
	this.instance_200.parent = this;

	this.instance_201 = new lib.animationWindMills0202();
	this.instance_201.parent = this;

	this.instance_202 = new lib.animationWindMills0203();
	this.instance_202.parent = this;

	this.instance_203 = new lib.animationWindMills0204();
	this.instance_203.parent = this;

	this.instance_204 = new lib.animationWindMills0205();
	this.instance_204.parent = this;

	this.instance_205 = new lib.animationWindMills0206();
	this.instance_205.parent = this;

	this.instance_206 = new lib.animationWindMills0207();
	this.instance_206.parent = this;

	this.instance_207 = new lib.animationWindMills0208();
	this.instance_207.parent = this;

	this.instance_208 = new lib.animationWindMills0209();
	this.instance_208.parent = this;

	this.instance_209 = new lib.animationWindMills0210();
	this.instance_209.parent = this;

	this.instance_210 = new lib.animationWindMills0211();
	this.instance_210.parent = this;

	this.instance_211 = new lib.animationWindMills0212();
	this.instance_211.parent = this;

	this.instance_212 = new lib.animationWindMills0213();
	this.instance_212.parent = this;

	this.instance_213 = new lib.animationWindMills0214();
	this.instance_213.parent = this;

	this.instance_214 = new lib.animationWindMills0215();
	this.instance_214.parent = this;

	this.instance_215 = new lib.animationWindMills0216();
	this.instance_215.parent = this;

	this.instance_216 = new lib.animationWindMills0217();
	this.instance_216.parent = this;

	this.instance_217 = new lib.animationWindMills0218();
	this.instance_217.parent = this;

	this.instance_218 = new lib.animationWindMills0219();
	this.instance_218.parent = this;

	this.instance_219 = new lib.animationWindMills0220();
	this.instance_219.parent = this;

	this.instance_220 = new lib.animationWindMills0221();
	this.instance_220.parent = this;

	this.instance_221 = new lib.animationWindMills0222();
	this.instance_221.parent = this;

	this.instance_222 = new lib.animationWindMills0223();
	this.instance_222.parent = this;

	this.instance_223 = new lib.animationWindMills0224();
	this.instance_223.parent = this;

	this.instance_224 = new lib.animationWindMills0225();
	this.instance_224.parent = this;

	this.instance_225 = new lib.animationWindMills0226();
	this.instance_225.parent = this;

	this.instance_226 = new lib.animationWindMills0227();
	this.instance_226.parent = this;

	this.instance_227 = new lib.animationWindMills0228();
	this.instance_227.parent = this;

	this.instance_228 = new lib.animationWindMills0229();
	this.instance_228.parent = this;

	this.instance_229 = new lib.animationWindMills0230();
	this.instance_229.parent = this;

	this.instance_230 = new lib.animationWindMills0231();
	this.instance_230.parent = this;

	this.instance_231 = new lib.animationWindMills0232();
	this.instance_231.parent = this;

	this.instance_232 = new lib.animationWindMills0233();
	this.instance_232.parent = this;

	this.instance_233 = new lib.animationWindMills0234();
	this.instance_233.parent = this;

	this.instance_234 = new lib.animationWindMills0235();
	this.instance_234.parent = this;

	this.instance_235 = new lib.animationWindMills0236();
	this.instance_235.parent = this;

	this.instance_236 = new lib.animationWindMills0237();
	this.instance_236.parent = this;

	this.instance_237 = new lib.animationWindMills0238();
	this.instance_237.parent = this;

	this.instance_238 = new lib.animationWindMills0239();
	this.instance_238.parent = this;

	this.instance_239 = new lib.animationWindMills0240();
	this.instance_239.parent = this;

	this.instance_240 = new lib.animationWindMills0241();
	this.instance_240.parent = this;

	this.instance_241 = new lib.animationWindMills0242();
	this.instance_241.parent = this;

	this.instance_242 = new lib.animationWindMills0243();
	this.instance_242.parent = this;

	this.instance_243 = new lib.animationWindMills0244();
	this.instance_243.parent = this;

	this.instance_244 = new lib.animationWindMills0245();
	this.instance_244.parent = this;

	this.instance_245 = new lib.animationWindMills0246();
	this.instance_245.parent = this;

	this.instance_246 = new lib.animationWindMills0247();
	this.instance_246.parent = this;

	this.instance_247 = new lib.animationWindMills0248();
	this.instance_247.parent = this;

	this.instance_248 = new lib.animationWindMills0249();
	this.instance_248.parent = this;

	this.instance_249 = new lib.animationWindMills0250();
	this.instance_249.parent = this;

	this.instance_250 = new lib.animationWindMills0251();
	this.instance_250.parent = this;

	this.instance_251 = new lib.animationWindMills0252();
	this.instance_251.parent = this;

	this.instance_252 = new lib.animationWindMills0253();
	this.instance_252.parent = this;

	this.instance_253 = new lib.animationWindMills0254();
	this.instance_253.parent = this;

	this.instance_254 = new lib.animationWindMills0255();
	this.instance_254.parent = this;

	this.instance_255 = new lib.animationWindMills0256();
	this.instance_255.parent = this;

	this.instance_256 = new lib.animationWindMills0257();
	this.instance_256.parent = this;

	this.instance_257 = new lib.animationWindMills0258();
	this.instance_257.parent = this;

	this.instance_258 = new lib.animationWindMills0259();
	this.instance_258.parent = this;

	this.instance_259 = new lib.animationWindMills0260();
	this.instance_259.parent = this;

	this.instance_260 = new lib.animationWindMills0261();
	this.instance_260.parent = this;

	this.instance_261 = new lib.animationWindMills0262();
	this.instance_261.parent = this;

	this.instance_262 = new lib.animationWindMills0263();
	this.instance_262.parent = this;

	this.instance_263 = new lib.animationWindMills0264();
	this.instance_263.parent = this;

	this.instance_264 = new lib.animationWindMills0265();
	this.instance_264.parent = this;

	this.instance_265 = new lib.animationWindMills0266();
	this.instance_265.parent = this;

	this.instance_266 = new lib.animationWindMills0267();
	this.instance_266.parent = this;

	this.instance_267 = new lib.animationWindMills0268();
	this.instance_267.parent = this;

	this.instance_268 = new lib.animationWindMills0269();
	this.instance_268.parent = this;

	this.instance_269 = new lib.animationWindMills0270();
	this.instance_269.parent = this;

	this.instance_270 = new lib.animationWindMills0271();
	this.instance_270.parent = this;

	this.instance_271 = new lib.animationWindMills0272();
	this.instance_271.parent = this;

	this.instance_272 = new lib.animationWindMills0273();
	this.instance_272.parent = this;

	this.instance_273 = new lib.animationWindMills0274();
	this.instance_273.parent = this;

	this.instance_274 = new lib.animationWindMills0275();
	this.instance_274.parent = this;

	this.instance_275 = new lib.animationWindMills0276();
	this.instance_275.parent = this;

	this.instance_276 = new lib.animationWindMills0277();
	this.instance_276.parent = this;

	this.instance_277 = new lib.animationWindMills0278();
	this.instance_277.parent = this;

	this.instance_278 = new lib.animationWindMills0279();
	this.instance_278.parent = this;

	this.instance_279 = new lib.animationWindMills0280();
	this.instance_279.parent = this;

	this.instance_280 = new lib.animationWindMills0281();
	this.instance_280.parent = this;

	this.instance_281 = new lib.animationWindMills0282();
	this.instance_281.parent = this;

	this.instance_282 = new lib.animationWindMills0283();
	this.instance_282.parent = this;

	this.instance_283 = new lib.animationWindMills0284();
	this.instance_283.parent = this;

	this.instance_284 = new lib.animationWindMills0285();
	this.instance_284.parent = this;

	this.instance_285 = new lib.animationWindMills0286();
	this.instance_285.parent = this;

	this.instance_286 = new lib.animationWindMills0287();
	this.instance_286.parent = this;

	this.instance_287 = new lib.animationWindMills0288();
	this.instance_287.parent = this;

	this.instance_288 = new lib.animationWindMills0289();
	this.instance_288.parent = this;

	this.instance_289 = new lib.animationWindMills0290();
	this.instance_289.parent = this;

	this.instance_290 = new lib.animationWindMills0291();
	this.instance_290.parent = this;

	this.instance_291 = new lib.animationWindMills0292();
	this.instance_291.parent = this;

	this.instance_292 = new lib.animationWindMills0293();
	this.instance_292.parent = this;

	this.instance_293 = new lib.animationWindMills0294();
	this.instance_293.parent = this;

	this.instance_294 = new lib.animationWindMills0295();
	this.instance_294.parent = this;

	this.instance_295 = new lib.animationWindMills0296();
	this.instance_295.parent = this;

	this.instance_296 = new lib.animationWindMills0297();
	this.instance_296.parent = this;

	this.instance_297 = new lib.animationWindMills0298();
	this.instance_297.parent = this;

	this.instance_298 = new lib.animationWindMills0299();
	this.instance_298.parent = this;

	this.instance_299 = new lib.animationWindMills0300();
	this.instance_299.parent = this;

	this.instance_300 = new lib.animationWindMills0301();
	this.instance_300.parent = this;

	this.instance_301 = new lib.animationWindMills0302();
	this.instance_301.parent = this;

	this.instance_302 = new lib.animationWindMills0303();
	this.instance_302.parent = this;

	this.instance_303 = new lib.animationWindMills0304();
	this.instance_303.parent = this;

	this.instance_304 = new lib.animationWindMills0305();
	this.instance_304.parent = this;

	this.instance_305 = new lib.animationWindMills0306();
	this.instance_305.parent = this;

	this.instance_306 = new lib.animationWindMills0307();
	this.instance_306.parent = this;

	this.instance_307 = new lib.animationWindMills0308();
	this.instance_307.parent = this;

	this.instance_308 = new lib.animationWindMills0309();
	this.instance_308.parent = this;

	this.instance_309 = new lib.animationWindMills0310();
	this.instance_309.parent = this;

	this.instance_310 = new lib.animationWindMills0311();
	this.instance_310.parent = this;

	this.instance_311 = new lib.animationWindMills0312();
	this.instance_311.parent = this;

	this.instance_312 = new lib.animationWindMills0313();
	this.instance_312.parent = this;

	this.instance_313 = new lib.animationWindMills0314();
	this.instance_313.parent = this;

	this.instance_314 = new lib.animationWindMills0315();
	this.instance_314.parent = this;

	this.instance_315 = new lib.animationWindMills0316();
	this.instance_315.parent = this;

	this.instance_316 = new lib.animationWindMills0317();
	this.instance_316.parent = this;

	this.instance_317 = new lib.animationWindMills0318();
	this.instance_317.parent = this;

	this.instance_318 = new lib.animationWindMills0319();
	this.instance_318.parent = this;

	this.instance_319 = new lib.animationWindMills0320();
	this.instance_319.parent = this;

	this.instance_320 = new lib.animationWindMills0321();
	this.instance_320.parent = this;

	this.instance_321 = new lib.animationWindMills0322();
	this.instance_321.parent = this;

	this.instance_322 = new lib.animationWindMills0323();
	this.instance_322.parent = this;

	this.instance_323 = new lib.animationWindMills0324();
	this.instance_323.parent = this;

	this.instance_324 = new lib.animationWindMills0325();
	this.instance_324.parent = this;

	this.instance_325 = new lib.animationWindMills0326();
	this.instance_325.parent = this;

	this.instance_326 = new lib.animationWindMills0327();
	this.instance_326.parent = this;

	this.instance_327 = new lib.animationWindMills0328();
	this.instance_327.parent = this;

	this.instance_328 = new lib.animationWindMills0329();
	this.instance_328.parent = this;

	this.instance_329 = new lib.animationWindMills0330();
	this.instance_329.parent = this;

	this.instance_330 = new lib.animationWindMills0331();
	this.instance_330.parent = this;

	this.instance_331 = new lib.animationWindMills0332();
	this.instance_331.parent = this;

	this.instance_332 = new lib.animationWindMills0333();
	this.instance_332.parent = this;

	this.instance_333 = new lib.animationWindMills0334();
	this.instance_333.parent = this;

	this.instance_334 = new lib.animationWindMills0335();
	this.instance_334.parent = this;

	this.instance_335 = new lib.animationWindMills0336();
	this.instance_335.parent = this;

	this.instance_336 = new lib.animationWindMills0337();
	this.instance_336.parent = this;

	this.instance_337 = new lib.animationWindMills0338();
	this.instance_337.parent = this;

	this.instance_338 = new lib.animationWindMills0339();
	this.instance_338.parent = this;

	this.instance_339 = new lib.animationWindMills0340();
	this.instance_339.parent = this;

	this.instance_340 = new lib.animationWindMills0341();
	this.instance_340.parent = this;

	this.instance_341 = new lib.animationWindMills0342();
	this.instance_341.parent = this;

	this.instance_342 = new lib.animationWindMills0343();
	this.instance_342.parent = this;

	this.instance_343 = new lib.animationWindMills0344();
	this.instance_343.parent = this;

	this.instance_344 = new lib.animationWindMills0345();
	this.instance_344.parent = this;

	this.instance_345 = new lib.animationWindMills0346();
	this.instance_345.parent = this;

	this.instance_346 = new lib.animationWindMills0347();
	this.instance_346.parent = this;

	this.instance_347 = new lib.animationWindMills0348();
	this.instance_347.parent = this;

	this.instance_348 = new lib.animationWindMills0349();
	this.instance_348.parent = this;

	this.instance_349 = new lib.animationWindMills0350();
	this.instance_349.parent = this;

	this.instance_350 = new lib.animationWindMills0351();
	this.instance_350.parent = this;

	this.instance_351 = new lib.animationWindMills0352();
	this.instance_351.parent = this;

	this.instance_352 = new lib.animationWindMills0353();
	this.instance_352.parent = this;

	this.instance_353 = new lib.animationWindMills0354();
	this.instance_353.parent = this;

	this.instance_354 = new lib.animationWindMills0355();
	this.instance_354.parent = this;

	this.instance_355 = new lib.animationWindMills0356();
	this.instance_355.parent = this;

	this.instance_356 = new lib.animationWindMills0357();
	this.instance_356.parent = this;

	this.instance_357 = new lib.animationWindMills0358();
	this.instance_357.parent = this;

	this.instance_358 = new lib.animationWindMills0359();
	this.instance_358.parent = this;

	this.instance_359 = new lib.animationWindMills0360();
	this.instance_359.parent = this;

	this.instance_360 = new lib.animationWindMills0361();
	this.instance_360.parent = this;

	this.instance_361 = new lib.animationWindMills0362();
	this.instance_361.parent = this;

	this.instance_362 = new lib.animationWindMills0363();
	this.instance_362.parent = this;

	this.instance_363 = new lib.animationWindMills0364();
	this.instance_363.parent = this;

	this.instance_364 = new lib.animationWindMills0365();
	this.instance_364.parent = this;

	this.instance_365 = new lib.animationWindMills0366();
	this.instance_365.parent = this;

	this.instance_366 = new lib.animationWindMills0367();
	this.instance_366.parent = this;

	this.instance_367 = new lib.animationWindMills0368();
	this.instance_367.parent = this;

	this.instance_368 = new lib.animationWindMills0369();
	this.instance_368.parent = this;

	this.instance_369 = new lib.animationWindMills0370();
	this.instance_369.parent = this;

	this.instance_370 = new lib.animationWindMills0371();
	this.instance_370.parent = this;

	this.instance_371 = new lib.animationWindMills0372();
	this.instance_371.parent = this;

	this.instance_372 = new lib.animationWindMills0373();
	this.instance_372.parent = this;

	this.instance_373 = new lib.animationWindMills0374();
	this.instance_373.parent = this;

	this.instance_374 = new lib.animationWindMills0375();
	this.instance_374.parent = this;

	this.instance_375 = new lib.animationWindMills0376();
	this.instance_375.parent = this;

	this.instance_376 = new lib.animationWindMills0377();
	this.instance_376.parent = this;

	this.instance_377 = new lib.animationWindMills0378();
	this.instance_377.parent = this;

	this.instance_378 = new lib.animationWindMills0379();
	this.instance_378.parent = this;

	this.instance_379 = new lib.animationWindMills0380();
	this.instance_379.parent = this;

	this.instance_380 = new lib.animationWindMills0381();
	this.instance_380.parent = this;

	this.instance_381 = new lib.animationWindMills0382();
	this.instance_381.parent = this;

	this.instance_382 = new lib.animationWindMills0383();
	this.instance_382.parent = this;

	this.instance_383 = new lib.animationWindMills0384();
	this.instance_383.parent = this;

	this.instance_384 = new lib.animationWindMills0385();
	this.instance_384.parent = this;

	this.instance_385 = new lib.animationWindMills0386();
	this.instance_385.parent = this;

	this.instance_386 = new lib.animationWindMills0387();
	this.instance_386.parent = this;

	this.instance_387 = new lib.animationWindMills0388();
	this.instance_387.parent = this;

	this.instance_388 = new lib.animationWindMills0389();
	this.instance_388.parent = this;

	this.instance_389 = new lib.animationWindMills0390();
	this.instance_389.parent = this;

	this.instance_390 = new lib.animationWindMills0391();
	this.instance_390.parent = this;

	this.instance_391 = new lib.animationWindMills0392();
	this.instance_391.parent = this;

	this.instance_392 = new lib.animationWindMills0393();
	this.instance_392.parent = this;

	this.instance_393 = new lib.animationWindMills0394();
	this.instance_393.parent = this;

	this.instance_394 = new lib.animationWindMills0395();
	this.instance_394.parent = this;

	this.instance_395 = new lib.animationWindMills0396();
	this.instance_395.parent = this;

	this.instance_396 = new lib.animationWindMills0397();
	this.instance_396.parent = this;

	this.instance_397 = new lib.animationWindMills0398();
	this.instance_397.parent = this;

	this.instance_398 = new lib.animationWindMills0399();
	this.instance_398.parent = this;

	this.instance_399 = new lib.animationWindMills0400();
	this.instance_399.parent = this;

	this.instance_400 = new lib.animationWindMills0401();
	this.instance_400.parent = this;

	this.instance_401 = new lib.animationWindMills0402();
	this.instance_401.parent = this;

	this.instance_402 = new lib.animationWindMills0403();
	this.instance_402.parent = this;

	this.instance_403 = new lib.animationWindMills0404();
	this.instance_403.parent = this;

	this.instance_404 = new lib.animationWindMills0405();
	this.instance_404.parent = this;

	this.instance_405 = new lib.animationWindMills0406();
	this.instance_405.parent = this;

	this.instance_406 = new lib.animationWindMills0407();
	this.instance_406.parent = this;

	this.instance_407 = new lib.animationWindMills0408();
	this.instance_407.parent = this;

	this.instance_408 = new lib.animationWindMills0409();
	this.instance_408.parent = this;

	this.instance_409 = new lib.animationWindMills0410();
	this.instance_409.parent = this;

	this.instance_410 = new lib.animationWindMills0411();
	this.instance_410.parent = this;

	this.instance_411 = new lib.animationWindMills0412();
	this.instance_411.parent = this;

	this.instance_412 = new lib.animationWindMills0413();
	this.instance_412.parent = this;

	this.instance_413 = new lib.animationWindMills0414();
	this.instance_413.parent = this;

	this.instance_414 = new lib.animationWindMills0415();
	this.instance_414.parent = this;

	this.instance_415 = new lib.animationWindMills0416();
	this.instance_415.parent = this;

	this.instance_416 = new lib.animationWindMills0417();
	this.instance_416.parent = this;

	this.instance_417 = new lib.animationWindMills0418();
	this.instance_417.parent = this;

	this.instance_418 = new lib.animationWindMills0419();
	this.instance_418.parent = this;

	this.instance_419 = new lib.animationWindMills0420();
	this.instance_419.parent = this;

	this.instance_420 = new lib.animationWindMills0421();
	this.instance_420.parent = this;

	this.instance_421 = new lib.animationWindMills0422();
	this.instance_421.parent = this;

	this.instance_422 = new lib.animationWindMills0423();
	this.instance_422.parent = this;

	this.instance_423 = new lib.animationWindMills0424();
	this.instance_423.parent = this;

	this.instance_424 = new lib.animationWindMills0425();
	this.instance_424.parent = this;

	this.instance_425 = new lib.animationWindMills0426();
	this.instance_425.parent = this;

	this.instance_426 = new lib.animationWindMills0427();
	this.instance_426.parent = this;

	this.instance_427 = new lib.animationWindMills0428();
	this.instance_427.parent = this;

	this.instance_428 = new lib.animationWindMills0429();
	this.instance_428.parent = this;

	this.instance_429 = new lib.animationWindMills0430();
	this.instance_429.parent = this;

	this.instance_430 = new lib.animationWindMills0431();
	this.instance_430.parent = this;

	this.instance_431 = new lib.animationWindMills0432();
	this.instance_431.parent = this;

	this.instance_432 = new lib.animationWindMills0433();
	this.instance_432.parent = this;

	this.instance_433 = new lib.animationWindMills0434();
	this.instance_433.parent = this;

	this.instance_434 = new lib.animationWindMills0435();
	this.instance_434.parent = this;

	this.instance_435 = new lib.animationWindMills0436();
	this.instance_435.parent = this;

	this.instance_436 = new lib.animationWindMills0437();
	this.instance_436.parent = this;

	this.instance_437 = new lib.animationWindMills0438();
	this.instance_437.parent = this;

	this.instance_438 = new lib.animationWindMills0439();
	this.instance_438.parent = this;

	this.instance_439 = new lib.animationWindMills0440();
	this.instance_439.parent = this;

	this.instance_440 = new lib.animationWindMills0441();
	this.instance_440.parent = this;

	this.instance_441 = new lib.animationWindMills0442();
	this.instance_441.parent = this;

	this.instance_442 = new lib.animationWindMills0443();
	this.instance_442.parent = this;

	this.instance_443 = new lib.animationWindMills0444();
	this.instance_443.parent = this;

	this.instance_444 = new lib.animationWindMills0445();
	this.instance_444.parent = this;

	this.instance_445 = new lib.animationWindMills0446();
	this.instance_445.parent = this;

	this.instance_446 = new lib.animationWindMills0447();
	this.instance_446.parent = this;

	this.instance_447 = new lib.animationWindMills0448();
	this.instance_447.parent = this;

	this.instance_448 = new lib.animationWindMills0449();
	this.instance_448.parent = this;

	this.instance_449 = new lib.animationWindMills0450();
	this.instance_449.parent = this;

	this.instance_450 = new lib.animationWindMills0451();
	this.instance_450.parent = this;

	this.instance_451 = new lib.animationWindMills0452();
	this.instance_451.parent = this;

	this.instance_452 = new lib.animationWindMills0453();
	this.instance_452.parent = this;

	this.instance_453 = new lib.animationWindMills0454();
	this.instance_453.parent = this;

	this.instance_454 = new lib.animationWindMills0455();
	this.instance_454.parent = this;

	this.instance_455 = new lib.animationWindMills0456();
	this.instance_455.parent = this;

	this.instance_456 = new lib.animationWindMills0457();
	this.instance_456.parent = this;

	this.instance_457 = new lib.animationWindMills0458();
	this.instance_457.parent = this;

	this.instance_458 = new lib.animationWindMills0459();
	this.instance_458.parent = this;

	this.instance_459 = new lib.animationWindMills0460();
	this.instance_459.parent = this;

	this.instance_460 = new lib.animationWindMills0461();
	this.instance_460.parent = this;

	this.instance_461 = new lib.animationWindMills0462();
	this.instance_461.parent = this;

	this.instance_462 = new lib.animationWindMills0463();
	this.instance_462.parent = this;

	this.instance_463 = new lib.animationWindMills0464();
	this.instance_463.parent = this;

	this.instance_464 = new lib.animationWindMills0465();
	this.instance_464.parent = this;

	this.instance_465 = new lib.animationWindMills0466();
	this.instance_465.parent = this;

	this.instance_466 = new lib.animationWindMills0467();
	this.instance_466.parent = this;

	this.instance_467 = new lib.animationWindMills0468();
	this.instance_467.parent = this;

	this.instance_468 = new lib.animationWindMills0469();
	this.instance_468.parent = this;

	this.instance_469 = new lib.animationWindMills0470();
	this.instance_469.parent = this;

	this.instance_470 = new lib.animationWindMills0471();
	this.instance_470.parent = this;

	this.instance_471 = new lib.animationWindMills0472();
	this.instance_471.parent = this;

	this.instance_472 = new lib.animationWindMills0473();
	this.instance_472.parent = this;

	this.instance_473 = new lib.animationWindMills0474();
	this.instance_473.parent = this;

	this.instance_474 = new lib.animationWindMills0475();
	this.instance_474.parent = this;

	this.instance_475 = new lib.animationWindMills0476();
	this.instance_475.parent = this;

	this.instance_476 = new lib.animationWindMills0477();
	this.instance_476.parent = this;

	this.instance_477 = new lib.animationWindMills0478();
	this.instance_477.parent = this;

	this.instance_478 = new lib.animationWindMills0479();
	this.instance_478.parent = this;

	this.instance_479 = new lib.animationWindMills0480();
	this.instance_479.parent = this;

	this.instance_480 = new lib.animationWindMills0481();
	this.instance_480.parent = this;

	this.instance_481 = new lib.animationWindMills0482();
	this.instance_481.parent = this;

	this.instance_482 = new lib.animationWindMills0483();
	this.instance_482.parent = this;

	this.instance_483 = new lib.animationWindMills0484();
	this.instance_483.parent = this;

	this.instance_484 = new lib.animationWindMills0485();
	this.instance_484.parent = this;

	this.instance_485 = new lib.animationWindMills0486();
	this.instance_485.parent = this;

	this.instance_486 = new lib.animationWindMills0487();
	this.instance_486.parent = this;

	this.instance_487 = new lib.animationWindMills0488();
	this.instance_487.parent = this;

	this.instance_488 = new lib.animationWindMills0489();
	this.instance_488.parent = this;

	this.instance_489 = new lib.animationWindMills0490();
	this.instance_489.parent = this;

	this.instance_490 = new lib.animationWindMills0491();
	this.instance_490.parent = this;

	this.instance_491 = new lib.animationWindMills0492();
	this.instance_491.parent = this;

	this.instance_492 = new lib.animationWindMills0493();
	this.instance_492.parent = this;

	this.instance_493 = new lib.animationWindMills0494();
	this.instance_493.parent = this;

	this.instance_494 = new lib.animationWindMills0495();
	this.instance_494.parent = this;

	this.instance_495 = new lib.animationWindMills0496();
	this.instance_495.parent = this;

	this.instance_496 = new lib.animationWindMills0497();
	this.instance_496.parent = this;

	this.instance_497 = new lib.animationWindMills0498();
	this.instance_497.parent = this;

	this.instance_498 = new lib.animationWindMills0499();
	this.instance_498.parent = this;

	this.instance_499 = new lib.animationWindMills0500();
	this.instance_499.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_41}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_43}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_49}]},1).to({state:[{t:this.instance_50}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_52}]},1).to({state:[{t:this.instance_53}]},1).to({state:[{t:this.instance_54}]},1).to({state:[{t:this.instance_55}]},1).to({state:[{t:this.instance_56}]},1).to({state:[{t:this.instance_57}]},1).to({state:[{t:this.instance_58}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_60}]},1).to({state:[{t:this.instance_61}]},1).to({state:[{t:this.instance_62}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_65}]},1).to({state:[{t:this.instance_66}]},1).to({state:[{t:this.instance_67}]},1).to({state:[{t:this.instance_68}]},1).to({state:[{t:this.instance_69}]},1).to({state:[{t:this.instance_70}]},1).to({state:[{t:this.instance_71}]},1).to({state:[{t:this.instance_72}]},1).to({state:[{t:this.instance_73}]},1).to({state:[{t:this.instance_74}]},1).to({state:[{t:this.instance_75}]},1).to({state:[{t:this.instance_76}]},1).to({state:[{t:this.instance_77}]},1).to({state:[{t:this.instance_78}]},1).to({state:[{t:this.instance_79}]},1).to({state:[{t:this.instance_80}]},1).to({state:[{t:this.instance_81}]},1).to({state:[{t:this.instance_82}]},1).to({state:[{t:this.instance_83}]},1).to({state:[{t:this.instance_84}]},1).to({state:[{t:this.instance_85}]},1).to({state:[{t:this.instance_86}]},1).to({state:[{t:this.instance_87}]},1).to({state:[{t:this.instance_88}]},1).to({state:[{t:this.instance_89}]},1).to({state:[{t:this.instance_90}]},1).to({state:[{t:this.instance_91}]},1).to({state:[{t:this.instance_92}]},1).to({state:[{t:this.instance_93}]},1).to({state:[{t:this.instance_94}]},1).to({state:[{t:this.instance_95}]},1).to({state:[{t:this.instance_96}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_98}]},1).to({state:[{t:this.instance_99}]},1).to({state:[{t:this.instance_100}]},1).to({state:[{t:this.instance_101}]},1).to({state:[{t:this.instance_102}]},1).to({state:[{t:this.instance_103}]},1).to({state:[{t:this.instance_104}]},1).to({state:[{t:this.instance_105}]},1).to({state:[{t:this.instance_106}]},1).to({state:[{t:this.instance_107}]},1).to({state:[{t:this.instance_108}]},1).to({state:[{t:this.instance_109}]},1).to({state:[{t:this.instance_110}]},1).to({state:[{t:this.instance_111}]},1).to({state:[{t:this.instance_112}]},1).to({state:[{t:this.instance_113}]},1).to({state:[{t:this.instance_114}]},1).to({state:[{t:this.instance_115}]},1).to({state:[{t:this.instance_116}]},1).to({state:[{t:this.instance_117}]},1).to({state:[{t:this.instance_118}]},1).to({state:[{t:this.instance_119}]},1).to({state:[{t:this.instance_120}]},1).to({state:[{t:this.instance_121}]},1).to({state:[{t:this.instance_122}]},1).to({state:[{t:this.instance_123}]},1).to({state:[{t:this.instance_124}]},1).to({state:[{t:this.instance_125}]},1).to({state:[{t:this.instance_126}]},1).to({state:[{t:this.instance_127}]},1).to({state:[{t:this.instance_128}]},1).to({state:[{t:this.instance_129}]},1).to({state:[{t:this.instance_130}]},1).to({state:[{t:this.instance_131}]},1).to({state:[{t:this.instance_132}]},1).to({state:[{t:this.instance_133}]},1).to({state:[{t:this.instance_134}]},1).to({state:[{t:this.instance_135}]},1).to({state:[{t:this.instance_136}]},1).to({state:[{t:this.instance_137}]},1).to({state:[{t:this.instance_138}]},1).to({state:[{t:this.instance_139}]},1).to({state:[{t:this.instance_140}]},1).to({state:[{t:this.instance_141}]},1).to({state:[{t:this.instance_142}]},1).to({state:[{t:this.instance_143}]},1).to({state:[{t:this.instance_144}]},1).to({state:[{t:this.instance_145}]},1).to({state:[{t:this.instance_146}]},1).to({state:[{t:this.instance_147}]},1).to({state:[{t:this.instance_148}]},1).to({state:[{t:this.instance_149}]},1).to({state:[{t:this.instance_150}]},1).to({state:[{t:this.instance_151}]},1).to({state:[{t:this.instance_152}]},1).to({state:[{t:this.instance_153}]},1).to({state:[{t:this.instance_154}]},1).to({state:[{t:this.instance_155}]},1).to({state:[{t:this.instance_156}]},1).to({state:[{t:this.instance_157}]},1).to({state:[{t:this.instance_158}]},1).to({state:[{t:this.instance_159}]},1).to({state:[{t:this.instance_160}]},1).to({state:[{t:this.instance_161}]},1).to({state:[{t:this.instance_162}]},1).to({state:[{t:this.instance_163}]},1).to({state:[{t:this.instance_164}]},1).to({state:[{t:this.instance_165}]},1).to({state:[{t:this.instance_166}]},1).to({state:[{t:this.instance_167}]},1).to({state:[{t:this.instance_168}]},1).to({state:[{t:this.instance_169}]},1).to({state:[{t:this.instance_170}]},1).to({state:[{t:this.instance_171}]},1).to({state:[{t:this.instance_172}]},1).to({state:[{t:this.instance_173}]},1).to({state:[{t:this.instance_174}]},1).to({state:[{t:this.instance_175}]},1).to({state:[{t:this.instance_176}]},1).to({state:[{t:this.instance_177}]},1).to({state:[{t:this.instance_178}]},1).to({state:[{t:this.instance_179}]},1).to({state:[{t:this.instance_180}]},1).to({state:[{t:this.instance_181}]},1).to({state:[{t:this.instance_182}]},1).to({state:[{t:this.instance_183}]},1).to({state:[{t:this.instance_184}]},1).to({state:[{t:this.instance_185}]},1).to({state:[{t:this.instance_186}]},1).to({state:[{t:this.instance_187}]},1).to({state:[{t:this.instance_188}]},1).to({state:[{t:this.instance_189}]},1).to({state:[{t:this.instance_190}]},1).to({state:[{t:this.instance_191}]},1).to({state:[{t:this.instance_192}]},1).to({state:[{t:this.instance_193}]},1).to({state:[{t:this.instance_194}]},1).to({state:[{t:this.instance_195}]},1).to({state:[{t:this.instance_196}]},1).to({state:[{t:this.instance_197}]},1).to({state:[{t:this.instance_198}]},1).to({state:[{t:this.instance_199}]},1).to({state:[{t:this.instance_200}]},1).to({state:[{t:this.instance_201}]},1).to({state:[{t:this.instance_202}]},1).to({state:[{t:this.instance_203}]},1).to({state:[{t:this.instance_204}]},1).to({state:[{t:this.instance_205}]},1).to({state:[{t:this.instance_206}]},1).to({state:[{t:this.instance_207}]},1).to({state:[{t:this.instance_208}]},1).to({state:[{t:this.instance_209}]},1).to({state:[{t:this.instance_210}]},1).to({state:[{t:this.instance_211}]},1).to({state:[{t:this.instance_212}]},1).to({state:[{t:this.instance_213}]},1).to({state:[{t:this.instance_214}]},1).to({state:[{t:this.instance_215}]},1).to({state:[{t:this.instance_216}]},1).to({state:[{t:this.instance_217}]},1).to({state:[{t:this.instance_218}]},1).to({state:[{t:this.instance_219}]},1).to({state:[{t:this.instance_220}]},1).to({state:[{t:this.instance_221}]},1).to({state:[{t:this.instance_222}]},1).to({state:[{t:this.instance_223}]},1).to({state:[{t:this.instance_224}]},1).to({state:[{t:this.instance_225}]},1).to({state:[{t:this.instance_226}]},1).to({state:[{t:this.instance_227}]},1).to({state:[{t:this.instance_228}]},1).to({state:[{t:this.instance_229}]},1).to({state:[{t:this.instance_230}]},1).to({state:[{t:this.instance_231}]},1).to({state:[{t:this.instance_232}]},1).to({state:[{t:this.instance_233}]},1).to({state:[{t:this.instance_234}]},1).to({state:[{t:this.instance_235}]},1).to({state:[{t:this.instance_236}]},1).to({state:[{t:this.instance_237}]},1).to({state:[{t:this.instance_238}]},1).to({state:[{t:this.instance_239}]},1).to({state:[{t:this.instance_240}]},1).to({state:[{t:this.instance_241}]},1).to({state:[{t:this.instance_242}]},1).to({state:[{t:this.instance_243}]},1).to({state:[{t:this.instance_244}]},1).to({state:[{t:this.instance_245}]},1).to({state:[{t:this.instance_246}]},1).to({state:[{t:this.instance_247}]},1).to({state:[{t:this.instance_248}]},1).to({state:[{t:this.instance_249}]},1).to({state:[{t:this.instance_250}]},1).to({state:[{t:this.instance_251}]},1).to({state:[{t:this.instance_252}]},1).to({state:[{t:this.instance_253}]},1).to({state:[{t:this.instance_254}]},1).to({state:[{t:this.instance_255}]},1).to({state:[{t:this.instance_256}]},1).to({state:[{t:this.instance_257}]},1).to({state:[{t:this.instance_258}]},1).to({state:[{t:this.instance_259}]},1).to({state:[{t:this.instance_260}]},1).to({state:[{t:this.instance_261}]},1).to({state:[{t:this.instance_262}]},1).to({state:[{t:this.instance_263}]},1).to({state:[{t:this.instance_264}]},1).to({state:[{t:this.instance_265}]},1).to({state:[{t:this.instance_266}]},1).to({state:[{t:this.instance_267}]},1).to({state:[{t:this.instance_268}]},1).to({state:[{t:this.instance_269}]},1).to({state:[{t:this.instance_270}]},1).to({state:[{t:this.instance_271}]},1).to({state:[{t:this.instance_272}]},1).to({state:[{t:this.instance_273}]},1).to({state:[{t:this.instance_274}]},1).to({state:[{t:this.instance_275}]},1).to({state:[{t:this.instance_276}]},1).to({state:[{t:this.instance_277}]},1).to({state:[{t:this.instance_278}]},1).to({state:[{t:this.instance_279}]},1).to({state:[{t:this.instance_280}]},1).to({state:[{t:this.instance_281}]},1).to({state:[{t:this.instance_282}]},1).to({state:[{t:this.instance_283}]},1).to({state:[{t:this.instance_284}]},1).to({state:[{t:this.instance_285}]},1).to({state:[{t:this.instance_286}]},1).to({state:[{t:this.instance_287}]},1).to({state:[{t:this.instance_288}]},1).to({state:[{t:this.instance_289}]},1).to({state:[{t:this.instance_290}]},1).to({state:[{t:this.instance_291}]},1).to({state:[{t:this.instance_292}]},1).to({state:[{t:this.instance_293}]},1).to({state:[{t:this.instance_294}]},1).to({state:[{t:this.instance_295}]},1).to({state:[{t:this.instance_296}]},1).to({state:[{t:this.instance_297}]},1).to({state:[{t:this.instance_298}]},1).to({state:[{t:this.instance_299}]},1).to({state:[{t:this.instance_300}]},1).to({state:[{t:this.instance_301}]},1).to({state:[{t:this.instance_302}]},1).to({state:[{t:this.instance_303}]},1).to({state:[{t:this.instance_304}]},1).to({state:[{t:this.instance_305}]},1).to({state:[{t:this.instance_306}]},1).to({state:[{t:this.instance_307}]},1).to({state:[{t:this.instance_308}]},1).to({state:[{t:this.instance_309}]},1).to({state:[{t:this.instance_310}]},1).to({state:[{t:this.instance_311}]},1).to({state:[{t:this.instance_312}]},1).to({state:[{t:this.instance_313}]},1).to({state:[{t:this.instance_314}]},1).to({state:[{t:this.instance_315}]},1).to({state:[{t:this.instance_316}]},1).to({state:[{t:this.instance_317}]},1).to({state:[{t:this.instance_318}]},1).to({state:[{t:this.instance_319}]},1).to({state:[{t:this.instance_320}]},1).to({state:[{t:this.instance_321}]},1).to({state:[{t:this.instance_322}]},1).to({state:[{t:this.instance_323}]},1).to({state:[{t:this.instance_324}]},1).to({state:[{t:this.instance_325}]},1).to({state:[{t:this.instance_326}]},1).to({state:[{t:this.instance_327}]},1).to({state:[{t:this.instance_328}]},1).to({state:[{t:this.instance_329}]},1).to({state:[{t:this.instance_330}]},1).to({state:[{t:this.instance_331}]},1).to({state:[{t:this.instance_332}]},1).to({state:[{t:this.instance_333}]},1).to({state:[{t:this.instance_334}]},1).to({state:[{t:this.instance_335}]},1).to({state:[{t:this.instance_336}]},1).to({state:[{t:this.instance_337}]},1).to({state:[{t:this.instance_338}]},1).to({state:[{t:this.instance_339}]},1).to({state:[{t:this.instance_340}]},1).to({state:[{t:this.instance_341}]},1).to({state:[{t:this.instance_342}]},1).to({state:[{t:this.instance_343}]},1).to({state:[{t:this.instance_344}]},1).to({state:[{t:this.instance_345}]},1).to({state:[{t:this.instance_346}]},1).to({state:[{t:this.instance_347}]},1).to({state:[{t:this.instance_348}]},1).to({state:[{t:this.instance_349}]},1).to({state:[{t:this.instance_350}]},1).to({state:[{t:this.instance_351}]},1).to({state:[{t:this.instance_352}]},1).to({state:[{t:this.instance_353}]},1).to({state:[{t:this.instance_354}]},1).to({state:[{t:this.instance_355}]},1).to({state:[{t:this.instance_356}]},1).to({state:[{t:this.instance_357}]},1).to({state:[{t:this.instance_358}]},1).to({state:[{t:this.instance_359}]},1).to({state:[{t:this.instance_360}]},1).to({state:[{t:this.instance_361}]},1).to({state:[{t:this.instance_362}]},1).to({state:[{t:this.instance_363}]},1).to({state:[{t:this.instance_364}]},1).to({state:[{t:this.instance_365}]},1).to({state:[{t:this.instance_366}]},1).to({state:[{t:this.instance_367}]},1).to({state:[{t:this.instance_368}]},1).to({state:[{t:this.instance_369}]},1).to({state:[{t:this.instance_370}]},1).to({state:[{t:this.instance_371}]},1).to({state:[{t:this.instance_372}]},1).to({state:[{t:this.instance_373}]},1).to({state:[{t:this.instance_374}]},1).to({state:[{t:this.instance_375}]},1).to({state:[{t:this.instance_376}]},1).to({state:[{t:this.instance_377}]},1).to({state:[{t:this.instance_378}]},1).to({state:[{t:this.instance_379}]},1).to({state:[{t:this.instance_380}]},1).to({state:[{t:this.instance_381}]},1).to({state:[{t:this.instance_382}]},1).to({state:[{t:this.instance_383}]},1).to({state:[{t:this.instance_384}]},1).to({state:[{t:this.instance_385}]},1).to({state:[{t:this.instance_386}]},1).to({state:[{t:this.instance_387}]},1).to({state:[{t:this.instance_388}]},1).to({state:[{t:this.instance_389}]},1).to({state:[{t:this.instance_390}]},1).to({state:[{t:this.instance_391}]},1).to({state:[{t:this.instance_392}]},1).to({state:[{t:this.instance_393}]},1).to({state:[{t:this.instance_394}]},1).to({state:[{t:this.instance_395}]},1).to({state:[{t:this.instance_396}]},1).to({state:[{t:this.instance_397}]},1).to({state:[{t:this.instance_398}]},1).to({state:[{t:this.instance_399}]},1).to({state:[{t:this.instance_400}]},1).to({state:[{t:this.instance_401}]},1).to({state:[{t:this.instance_402}]},1).to({state:[{t:this.instance_403}]},1).to({state:[{t:this.instance_404}]},1).to({state:[{t:this.instance_405}]},1).to({state:[{t:this.instance_406}]},1).to({state:[{t:this.instance_407}]},1).to({state:[{t:this.instance_408}]},1).to({state:[{t:this.instance_409}]},1).to({state:[{t:this.instance_410}]},1).to({state:[{t:this.instance_411}]},1).to({state:[{t:this.instance_412}]},1).to({state:[{t:this.instance_413}]},1).to({state:[{t:this.instance_414}]},1).to({state:[{t:this.instance_415}]},1).to({state:[{t:this.instance_416}]},1).to({state:[{t:this.instance_417}]},1).to({state:[{t:this.instance_418}]},1).to({state:[{t:this.instance_419}]},1).to({state:[{t:this.instance_420}]},1).to({state:[{t:this.instance_421}]},1).to({state:[{t:this.instance_422}]},1).to({state:[{t:this.instance_423}]},1).to({state:[{t:this.instance_424}]},1).to({state:[{t:this.instance_425}]},1).to({state:[{t:this.instance_426}]},1).to({state:[{t:this.instance_427}]},1).to({state:[{t:this.instance_428}]},1).to({state:[{t:this.instance_429}]},1).to({state:[{t:this.instance_430}]},1).to({state:[{t:this.instance_431}]},1).to({state:[{t:this.instance_432}]},1).to({state:[{t:this.instance_433}]},1).to({state:[{t:this.instance_434}]},1).to({state:[{t:this.instance_435}]},1).to({state:[{t:this.instance_436}]},1).to({state:[{t:this.instance_437}]},1).to({state:[{t:this.instance_438}]},1).to({state:[{t:this.instance_439}]},1).to({state:[{t:this.instance_440}]},1).to({state:[{t:this.instance_441}]},1).to({state:[{t:this.instance_442}]},1).to({state:[{t:this.instance_443}]},1).to({state:[{t:this.instance_444}]},1).to({state:[{t:this.instance_445}]},1).to({state:[{t:this.instance_446}]},1).to({state:[{t:this.instance_447}]},1).to({state:[{t:this.instance_448}]},1).to({state:[{t:this.instance_449}]},1).to({state:[{t:this.instance_450}]},1).to({state:[{t:this.instance_451}]},1).to({state:[{t:this.instance_452}]},1).to({state:[{t:this.instance_453}]},1).to({state:[{t:this.instance_454}]},1).to({state:[{t:this.instance_455}]},1).to({state:[{t:this.instance_456}]},1).to({state:[{t:this.instance_457}]},1).to({state:[{t:this.instance_458}]},1).to({state:[{t:this.instance_459}]},1).to({state:[{t:this.instance_460}]},1).to({state:[{t:this.instance_461}]},1).to({state:[{t:this.instance_462}]},1).to({state:[{t:this.instance_463}]},1).to({state:[{t:this.instance_464}]},1).to({state:[{t:this.instance_465}]},1).to({state:[{t:this.instance_466}]},1).to({state:[{t:this.instance_467}]},1).to({state:[{t:this.instance_468}]},1).to({state:[{t:this.instance_469}]},1).to({state:[{t:this.instance_470}]},1).to({state:[{t:this.instance_471}]},1).to({state:[{t:this.instance_472}]},1).to({state:[{t:this.instance_473}]},1).to({state:[{t:this.instance_474}]},1).to({state:[{t:this.instance_475}]},1).to({state:[{t:this.instance_476}]},1).to({state:[{t:this.instance_477}]},1).to({state:[{t:this.instance_478}]},1).to({state:[{t:this.instance_479}]},1).to({state:[{t:this.instance_480}]},1).to({state:[{t:this.instance_481}]},1).to({state:[{t:this.instance_482}]},1).to({state:[{t:this.instance_483}]},1).to({state:[{t:this.instance_484}]},1).to({state:[{t:this.instance_485}]},1).to({state:[{t:this.instance_486}]},1).to({state:[{t:this.instance_487}]},1).to({state:[{t:this.instance_488}]},1).to({state:[{t:this.instance_489}]},1).to({state:[{t:this.instance_490}]},1).to({state:[{t:this.instance_491}]},1).to({state:[{t:this.instance_492}]},1).to({state:[{t:this.instance_493}]},1).to({state:[{t:this.instance_494}]},1).to({state:[{t:this.instance_495}]},1).to({state:[{t:this.instance_496}]},1).to({state:[{t:this.instance_497}]},1).to({state:[{t:this.instance_498}]},1).to({state:[{t:this.instance_499}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(480,270,960,545.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;