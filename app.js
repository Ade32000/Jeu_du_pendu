var canvas  = document.querySelector('#canvas');
var context = canvas.getContext('2d');
var compteur = 0;
var nbVies = 11;
var mot = ['simplon','code','programmation','javascript','ordinateur', 'halloween', 'partage', 'loop', 'fantastique','voiture','smiley','bureau','soleil','team'];
var operation = Math.floor(Math.random() * mot.length);
mot = mot[operation];
var taille = mot.length;
var mot2 = mot;
mot = mot.split("");
console.log(mot);
var tableau_reponse = [];
var mot_util = "";
$('#lettre').focus(); //focus dans l'input
$('#lettre').val("");
var compare = '';
var lettres_choisies = [];

// Remplace les lettres du mot caché tiré au hasard par des underscores et les stocke dans un nouveau tableau
	for (var i = 0; i < mot.length ; i++)
	{
		tableau_reponse[i] = '_ ';
		$('#motcache').html(tableau_reponse).css('line-height' , '70px').css( 'font-size' , '68px');
	}

	console.log(tableau_reponse);


//fonction du jeu pour 1 manche
	$('#valider').click(function jouer()
	{

		mot_util = $('#lettre').val();
		mot_util = mot_util.toLowerCase();
		$('#lettre').fadeOut().delay().fadeIn('slow'); //Fait disparaître l'input avec une animation
		console.log(mot_util);

			if (mot_util.length === 0)
			{
				alert('Merci de saisir une lettre');
			}
			else if (mot_util.length > 1)
			{
				alert('Vous avez saisi plusieurs lettres, merci de n\'en saisir qu\'une!');
			}
			else
			{

				var choixtab = lettres_choisies.push(mot_util);
				console.log(lettres_choisies);
				var choixlettre = lettres_choisies[0];
				choixlettre = choixlettre.toUpperCase();
				console.log(choixlettre);

				$( "<span>"+choixlettre+"  </span>" ).appendTo( "#choisies" );
				lettres_choisies=[];

// trouves le nombre d'occurences de la lettre tapée, et renvoie son/ses index
				var index = [];
				var élément = mot_util;
				var idx = mot.indexOf(élément);
					while (idx != -1) 
					{
		  				index.push(idx);
		  				idx = mot.indexOf(élément, idx + 1);
					}
		
				console.log(index);

// Si une lettre est correcte
					if (index.length != 0)
					{
// Récupère les index trouvés et les stocke dans des variables individuellement
							for (var i = 0; i< index.length; i++)
							{
								var a = index[0];
								var b = index[1];
								var c = index[2];
								console.log(a);
							}
// Affiche les lettres trouvées dans le tableau contenant les 'underscores' aux index appropriés
							for (var j =0; j<tableau_reponse.length; j++)
							{
								tableau_reponse[a] = mot_util;
								tableau_reponse[b] = mot_util;
								tableau_reponse[c] = mot_util;
								$('#motcache').html(tableau_reponse);
							}
							
							compare = tableau_reponse.join('');  //transforme le tableau réponse en string afin de pouvoir le comparer au mot aléatoire
							console.log(compare);
							if (compare === mot2) // Lorsque le 'string' réponse est strictement identique au mot aléatoire, victoire!
							{
								if (compteur === 0)
								{	
									alert('Félicitations !!! Vous avez gagné sans avoir commis d\'erreur!');
								}
								else
								{
									alert('Félicitations !!! Vous avez gagné au bout de : ' + compteur + ' erreurs');
								}

									var rejoue = confirm('Voulez-vous rejouer?');
										if (rejoue == true)
										{
											$(location).reload(true);
										}
										else
										{
											alert('Vous avez choisi de quitter ce magnifique programme. Tant pis pour vous !');
										}
							}

					}
					else //lettre non présente dans le mot, implémente le compteur et affiche les éléments du canvas un par un
					{
							compteur ++; 
							$('#result').html("lettre non présente ! Vies restantes : " + (nbVies - compteur));


								if (compteur === 1) 
								{
									base();
								}
								if (compteur === 2) 
								{
									poteau();
								}
								if (compteur === 3) 
								{
									poutrehaut();
								}
								if (compteur === 4) 
								{
									renfort();
								}
								if (compteur === 5) 
								{
									corde();
								}
								if (compteur === 6) 
								{
									tete();
								}
								if (compteur === 7) 
								{
									corps();
								}
								if (compteur === 8) 
								{
									brasg();
								}
								if (compteur === 9) 
								{
									brasd();
								}
								if (compteur === 10) 
								{
									jambeg();
								}
								if (compteur === 11) 
								{
									jambed();
									alert('Perdu ! Le mot était : ' + mot2);
									var rejouer = confirm('Voulez-vous rejouer?');
										if (rejouer == true)
										{
											$(location).reload(true);
											// jouer();
										}
										else
										{
											$(location).reload(true);
											alert('Vous avez choisi de quitter ce magnifique programme. Tant pis pour vous !');
										}
								}
						
					}

			}
			$('#lettre').val(""); //Fait disparaître la valeur de l'input
			$('#lettre').focus(); //Fait revenir le focus sur l'input
	});

// Dessins du canvas 

// Base
function base ()
{
context.beginPath();
context.lineWidth = '7';
context.lineCap = 'round';
context.moveTo(60, 400);
context.lineTo(400, 400);
context.stroke();
};

// Poteau

function poteau ()
{
context.beginPath();
context.lineWidth = '7';
context.lineCap = 'round';
context.moveTo(90, 70);
context.lineTo(90, 400);
context.stroke();
};



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
/*
base();
poteau();
poutrehaut();
renfort();
corde();
tete();
corps();
brasg();
brasd();
jambeg();
jambed();
*/

$('#choisies').css({'margin-top' : '100px' , 'position' : 'absolute' , 'line-height' : '24px' , 'font-size' : '20px'});
