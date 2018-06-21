var canvas = document.querySelector('#canvas');
var context = canvas.getContext('2d');
var compteur = 0; // compteur de fonctions

// Fonction canvas

// Base

function base()
{
context.beginPath();
context.lineWidth = '7';
context.lineCap = 'round';
context.moveTo(60, 400);
context.lineTo(400, 400);
context.stroke();
}

// Poteau

function poteau ()
{
context.beginPath();
context.lineWidth = '7';
context.lineCap = 'round';
context.moveTo(90, 70);
context.lineTo(90, 400);
context.stroke();
}

// Poutre du haut

function poutrehaut ()
{   
context.beginPath();
context.lineWidth = '7';
context.lineCap = 'round';
context.moveTo(90, 70);
context.lineTo(320, 70);
context.stroke();
}

// Renfort

function renfort ()
{   
context.beginPath();
context.lineWidth = '7';
context.lineCap = 'round';
context.moveTo(140, 70);
context.lineTo(90, 130);
context.stroke();
}

// Corde

function corde () 
{   
context.beginPath();
context.lineWidth = '7';
context.lineCap = 'round';
context.moveTo(240, 70);
context.lineTo(240, 100);
context.stroke();
}

// Tête

function tete ()
{
context.beginPath(); 
context.arc(240, 125, 25, 0, Math.PI * 2); 
context.stroke();
}

// Corps

function corps ()
{
context.beginPath();
context.lineWidth = '7';
context.lineCap = 'round';
context.moveTo(240, 150);
context.lineTo(240, 250);
context.stroke();
}

// Bras gauche (vue de face)

function brasg ()
{   
context.beginPath();
context.lineWidth = '7';
context.lineCap = 'round';
context.moveTo(240, 180);
context.lineTo(190, 170);
context.stroke();
}

// Bras droit (vue de face)

function brasd ()
{   
context.beginPath();
context.lineWidth = '7';
context.lineCap = 'round';
context.moveTo(240, 180);
context.lineTo(290, 170);
context.stroke();
}

// Jambe gauche (vue de face)

function jambeg ()
{   
context.beginPath();
context.lineWidth = '7';
context.lineCap = 'round';
context.moveTo(240, 250);
context.lineTo(190, 285);
context.stroke();
}

// Jambe droite (vue de face)

function jambed ()
{   
context.beginPath();
context.lineWidth = '7';
context.lineCap = 'round';
context.moveTo(240, 250);
context.lineTo(290, 285);
context.stroke();
}

//mots à trouver et vies

var mots = ["code", "simplon", "formation", "pendu", "potence"];
var vie = 11;

//mot choisi au hasard
 mot = mots[Math.floor(Math.random() * mots.length)];

//montre le mot à trouver
 tableauReponses= [];

for ( i = 0; i < mot.length; i++) {
	tableauReponses[i] = "_ ";
}

var lettre = mot.length;

//vies restantes

while (lettre > 0 && vie > 0) {
	
	 message = tableauReponses.join(" ");
	
	 proposition = prompt(tableauReponses + " Proposez une lettre").toLowerCase();
	
	 mauvaiseReponse = true;
	 
   // si le joueur veut arrêter de jouer

	  if (proposition === null) {		
		  break;	   
		  }

  // si le joueur entre plus d'une lettre

	  else if (proposition.length !==1) {
	   alert ("Merci de n'entrer qu'une seule lettre à la fois");
	  }
  else {

	//si le joueur trouve une lettre du mot

	for ( j = 0; j <= mot.length; j++){
	
	if (mot[j] === proposition) {
				tableauReponses[j] = proposition;
				lettre--;
				mauvaiseReponse = false;
			}
	}
	
	//Si le joueur ne trouve pas le mot. On a mis les fonctions canvas (base, poteau...) dans un compteur.

		if (mauvaiseReponse)
		{
	
  			vie--;
  			alert("Pas dans le mot, vous avez " + vie + "  vie(s) restante(s)");
  			compteur ++;
			
			if(compteur === 1){
				base();
			};

			if(compteur === 2){
				poteau();
			};

			if(compteur === 3){
				poutrehaut();
			};

			if(compteur === 4){
				renfort();
			};

			if(compteur === 5){
				corde();
			};

			if(compteur === 6){
				tete();
			};

   			if(compteur === 7){
				corps();
   			};

			if(compteur === 8){
				brasg();
			};

			if(compteur === 9){
				brasd();
			};

			if(compteur === 10){
				jambeg();
			};

			if(compteur === 11){
				jambed();
			};


	}
}
}
//si le joueur trouve le mot ou n'a plus de vie
if (lettre > 0){
	
				alert("Perdu ! \n\n Le mot était " + mot);
}
else {

				alert("Félicitations ! \n\n Le mot à trouver était: " + mot  +  ". \n\n Vous avez utilisé " + (11 - vie) + " vies.");

}
base();

document.location.reload(true);



var bibliotheque = ["simplon", "partager", "coder", "jquery", "javascript"]; // tableau de mots


function assign()
{
	resultat = bibliotheque[Math.floor(Math.random() * bibliotheque.length)];
	// ar split_result = bibliotheque[resultat];
	// var resultat = split_result.split("");
	var motcache = "";
	var tableauResultat = [];
	// alert(resultat);


	for ( var i = 0 ; i < resultat.length ; i++)
	{
		tableauResultat[i] = "_ ";
	}

	var lettre = resultat.length;
	tableauResultat.join(" ");

	var proposition = prompt("Proposer une lettre").toLowerCase();

	for( var j = 0 ; j <= resultat.length ; j++)
	{
		if (resultat[j] === proposition ){
			tableauResultat[j] = proposition;
			lettre--;

		}
	}
}


console.log(assign());