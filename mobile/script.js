max = 110;
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
var EtatMenu = false;
$( "#BoutonMenu" ).click(function() {
	if (!EtatMenu){
  		$( ".nav2" ).css('display','block');
  		EtatMenu = true;
  	}
  	else {
  		$( ".nav2" ).css('display','none');
  		EtatMenu = false;
  	}
});
//bof bof
$( '.container' ).click(function() {
  $( ".nav2" ).css('display','none');
  EtatMenu = false;
});
$( '#gallery' ).click(function() {
  $( ".nav2" ).css('display','none');
  EtatMenu = false;
});

//génère une image aléatoire parmis la liste des images diponibles
function randomImg(){
   var rand = "../rousses/" + Math.round(Math.random()*(max)) + ".jpg";
   document.getElementById('image').src = rand;
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
		myImg.id =i;
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
			myImg.id =i;
			//myImg.attr('id', i);
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
$("#zoomed").css('max-width',(larg-35)+"px");
$("#zoomed").css('max-height',(haut-55)+"px");

function zoomImg(img){
	var getSrc = $(img).attr('src');
	$("#zoomed").attr('src', getSrc);
	$("#zoomed").css('display','block');
	$("#zoomed").css('margin-bottom','10px');
}

	/*
	$('#gallery').children().live('click', function() {
		zoomImg("#"+$(this).attr('id'));

	});
	*/
	
	$("#"+max).live('click', function(){
		zoomImg("#"+max);
	})
//});

//annuler l'effet d'aggrandissement d'une photo de la gallerie	
$("#zoomed").click(function() {
		$("#zoomed").css('display','none');
	});



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