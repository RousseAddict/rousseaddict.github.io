/*
loaded index.html version mobile
*/

//ajuster la taille de l'image principale à la taille de l'écran
var larg = (window.innerWidth);
$('html').css('min-width',(larg)+"px");
$('.container').css('width',(larg-35)+"px");
$('.container img').css('width',(larg-45)+"px");
//ajuster la taille du menu à la moitié de la taille de l'écran
var haut = (window.innerHeight);
$('.nav2').css('width',(larg/2)+"px");
$('.nav2').css('height',(haut-50)+"px");
/*
functions
*/

//gère l'action du bouton du menu
$( "#BoutonMenu" ).click(function() {
  $( ".nav2" ).css('display','block');
});
$( '.container' ).click(function() {
  $( ".nav2" ).css('display','none');
});

//génère une image aléatoire parmis la liste des images diponibles
function randomImg(){
   document.getElementById('image').src = "../rousses/" + Math.round(Math.random()*97) + ".jpg";
}

//génère la gallerie
function galleryImg(){
	var divGallery = document.getElementById('gallery');
	var myImg;
	for (i=97; i >= 0 ; i--){
		//myImg = (divGallery.innerHTML = '<img src ="../rousses/'+i+'.jpg"/>');
		myImg = document.createElement('IMG');
		myImg.src = "../rousses/"+i+".jpg";
		divGallery.appendChild(myImg);
	}
}