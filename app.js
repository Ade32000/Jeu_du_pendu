var canvas  = document.querySelector('#canvas');
var context = canvas.getContext('2d');

var mot = ['simplon','code','programmation','javascript'];
var operation = Math.floor(Math.random() * mot.length);
mot = mot[operation];
var taille = mot.length;
var mot2 = mot;
mot = mot.split("");
console.log(mot);
var tableau_reponse = [];

var mot_util = prompt('Veuillez saisir une lettre');
console.log(mot_util);

for (var i = 0; i < mot.length ; i++)
{
	tableau_reponse[i] = '_ ';
	$('#motcache').html(tableau_reponse);
}
console.log(tableau_reponse);


for (var j = 0; j < mot.length ; j++)
{
	var temp = jQuery.inArray(mot_util, mot);
	console.log(temp);
	for (j = 6; j < mot.length-5 ; j++)
	{
		var tmp = jQuery.inArray(mot_util, mot);
		console.log(tmp);
	}
}



// Base
function base ()
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

