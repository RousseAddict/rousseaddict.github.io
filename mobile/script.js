max = 99;
countDown = max - 10;
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

//centrer le #bDown
$('#bDown').css('margin-left',((larg/2)-25)+"px");

/*
functions
*/

//gère l'action du bouton du menu
$( "#BoutonMenu" ).click(function() {
  		$( ".nav2" ).css('display','block');
});
//bof bof
$( '.container' ).click(function() {
  $( ".nav2" ).css('display','none');
});
$( '#gallery' ).click(function() {
  $( ".nav2" ).css('display','none');
});

//génère une image aléatoire parmis la liste des images diponibles
function randomImg(){
   document.getElementById('image').src = "../rousses/" + Math.round(Math.random()*(max)) + ".jpg";
}

/*
loaded gallery.html version mobile
*/

//génère la gallerie
function galleryImg(){
	var divGallery = document.getElementById('gallery');
	var myImg;
	for (i=max; i > countDown; i--){
		myImg = document.createElement('IMG');
		myImg.src = "../rousses/"+i+".jpg";
		divGallery.appendChild(myImg);
	}
}
//bouton afficher + dans la gallerie
function galleryImgDown(){
	var divGallery = document.getElementById('gallery');
	var myImg;
	if (countDown > 10){
		countDown = countDown - 10;
		for (i=countDown; i > countDown - 10 ; i--){
			myImg = document.createElement('IMG');
			myImg.src = "../rousses/"+i+".jpg";
			myImg.class ="rousses"
			//myImg.onclick = "return myImg.height ='haut';";
			divGallery.appendChild(myImg);
		}
	}
	else{
		$('#bDown').css('display','none');
	}
}
//actionner le chargement de plus d'images
$( "#bDown" ).click(function() {
	galleryImgDown();
});

//aggrandir une photo de la gallerie


/*
Contact
*/

//formulaire de contact
function SendContact(){
	var form = document.getElementById("contactForm");
	var nom = form.document.getElementById("name");
	var mail = form.document.getElementById("mail");
	var txt = form.document.getElementById("content");

	var fileSystem=new ActiveXObject("Scripting.FileSystemObject");
	var monfichier=fileSystem.OpenTextFile("contactForm.txt", 2 ,true);
	monfichier.WriteLine(nom);
	monfichier=fileSystem.OpenTextFile("contactForm.txt", 1 ,true);
	alert(monfichier.ReadAll()); // imprime
	monFichier.Close();
}