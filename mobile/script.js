/*
loaded index.html version mobile
*/

//ajuster la taille de l'image principale à la taille de l'écran
var larg = (window.innerWidth);
$('.container').css('max-width',larg+"px");

//ajuster la taille du menu à la moitié de la taille de l'écran
var haut = (window.innerHeight);
$('.nav2').css('width',(larg/2)+"px");
$('.nav2').css('height',(haut-50)+"px");
/*
functions
*/

//génère une image aléatoire parmis la liste des images diponibles
function randomImg(){
   document.getElementById('image').src = "../rousses/" + Math.round(Math.random()*70) + ".jpg";
}

//gère l'action du bouton du menu
function menuO(){
	document.getElementByClassName('nav2')[0].style.right = '0';
}
