var StopSound
var friends
var TheOffice
var HowiMetUrMother
var ModernFam
var b1
var b2
var b3
var b4
var b5
var song, analyzer;
var show= [];
var Flag = 2
var words;
var friendsSeason = [1,2,3,4,5,6,7,8,9,10];
var friendsEpisodes = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
var HowiMetUrMotherSeason = [1,2,3,4,5,6,7,8,9];
var HowiMetUrMotherEpisodes = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
var TheOfficeSeason = [2,3,5,6,7,8,9];
var TheOfficeEpisodes = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22];
var ModernFamSeason = [1,2,3,4,5,6,7,8,9];
var ModernFamEpisodes = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22];



function preload() {
	show[0]= loadImage('friends.jpg');
	show[1]= loadImage('How_I_met_ur_mother.jpg');
	show[2]= loadImage('Office.jpg');
	show[3]= loadImage('ModernFam.jpg');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255,185,25,100);
	friends = loadSound('FRIENDS_-_Theme_Song_Intro.mp3');
	TheOffice = loadSound('The_Office_Theme_Song.mp3'); 
	HowiMetUrMother = loadSound('How_I_Met_Your_Mother_Theme_Song.mp3');
	B99= loadSound('Brooklyn_Nine_Nine_-_Main_Title_Theme.mp3');
	ModernFam= loadSound('Modern_Family_Full_Theme_Song_1.mp3');
	

	
	for (var i = 0; i < show.length; i++) {
		show[i].resize(600,0);
	}
	
createCanvas(710, 200);

	  analyzer = new p5.Amplitude();
  analyzer.setInput(song);
	  
	
	
	b1 = createButton('Friends');
	b1.position(300, 300);
	b1.size(120,50);
  b1.mousePressed(mousePressed1);
	fill(192,55,0,20);

	
		b2 = createButton('The Office');
  b2.position(500, 300);
	b2.size(120,50);
  b2.mousePressed(mousePressed2);



	
	b3 = createButton('How I Met Ur Mother');
  b3.position(700, 300);
	b3.size(120,50);
  b3.mousePressed(mousePressed3);

	
	b4 = createButton('Modern Family');
  b4.position(900, 300);
	b4.size(120,50);
  b4.mousePressed(mousePressed4);


	
}

	function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}



function mousePressed1() {
clear();
		image(show[0],350,75);
	
  if (friends.isPlaying() ){
    friends.stop();}
   else{
    friends.play();}
		if (TheOffice.isPlaying() ){
		TheOffice.stop()}
			if (HowiMetUrMother.isPlaying() ) {
		HowiMetUrMother.stop()}
	if (ModernFam.isPlaying() ) {
		ModernFam.stop()}
	

	
				words = "                                                                                                                             "+"Season"+ random(friendsSeason)+"        "+"Eps "+random(friendsEpisodes);

}
 
function mousePressed2() {
	clear();
		image(show[2],350,75);
	
	if (TheOffice.isPlaying() ){
		TheOffice.stop()}
		else {
			TheOffice.play();}
	if (friends.isPlaying() ){
		friends.stop()}
			if (HowiMetUrMother.isPlaying() ) {
		HowiMetUrMother.stop()}
		if (ModernFam.isPlaying() ) {
		ModernFam.stop()}
	
	words = "                                                                                                     "+"Season"+ random(TheOfficeSeason)+"     "+"Eps "+random(TheOfficeEpisodes);

}
	
	function mousePressed3() {
		clear();
		image(show[1],350,75);

	if (HowiMetUrMother.isPlaying() ){
		HowiMetUrMother.stop()}
	else
		HowiMetUrMother.play();{
	}
		if (friends.isPlaying() ){
		friends.stop()}
			if (TheOffice.isPlaying() ) {
		TheOffice.stop()}
			if (ModernFam.isPlaying() ) {
		ModernFam.stop()}
		
	words = "                                                                                                                                                             "+"Season"+ random(TheOfficeSeason)+"        "+"Eps "+random(TheOfficeEpisodes);
                                                                                                                        

	}
	function mousePressed4() {
				clear();
		image(show[3],350,125);

	if (ModernFam.isPlaying() ){
		ModernFam.stop()}
	else
		ModernFam.play();{
	}
		if (friends.isPlaying() ){
		friends.stop()}
			if (TheOffice.isPlaying() ) {
		TheOffice.stop()}
			if (HowiMetUrMother.isPlaying() ) {
		HowiMetUrMother.stop()}
		
		words = "                                                                                                                                      "+"Season"+ random(ModernFamSeason)+"        "+"Eps "+random(ModernFamEpisodes);
		
	}


	
function draw() {
	stroke(0);
 text(words,300,200);
  var rms = analyzer.getLevel();
  fill(random(255));
  stroke(0);


	ellipse(width, height, 10+rms*1500, 10+rms*1500);
	  fill(100,50,50);
	
	ellipse(width, height/2, 10+rms*1500, 10+rms*1500);
	  fill(255,0,0);
	
		ellipse(width, height/160, 10+rms*1500, 10+rms*1500);
	  fill(0,255,0);
	
		ellipse(width/200, height, 10+rms*1500, 10+rms*1500);
	  fill(100,200,255);
	
	ellipse(width/200, height/2, 10+rms*1500, 10+rms*1500);
	  fill(255,100,200);
	
	ellipse(width/200, height/160, 10+rms*1500, 10+rms*1500);
	  fill(200,255,100);
	
	ellipse(width/2, height/160, 10+rms*1500, 10+rms*1500);
	  fill(0,100,255);
	
	ellipse(width/2, height, 10+rms*1500, 10+rms*1500);
	  fill(255,0,100);
	
		ellipse(width/4, height, 10+rms*2500, 10+rms*2500);
	  fill(255,0,100);
	
		ellipse(width*0.75, height, 10+rms*2500, 10+rms*2500);
	  fill(100,50,50);
	
	ellipse(width/4, height/160, 10+rms*2500, 10+rms*2500);
	  fill(50,100,255);
	

	
	ellipse(width*0.75, height/160, 10+rms*2500, 10+rms*2500);
	fill(random(255));
	

}
