
// La fonction qui calcule le produit de deux nombres

var x = prompt("Entrez un nombre");
var y = prompt("Entrez un multiplicateur")

function produit(x, y){

  document.getElementById('produit').innerHTML=("Le cube de "+x+ " est égale à  "+ (x*x*x) +"<br>"+"Le produis de "+x+" x "+ y+" est égale à " +(x*y) )
}

produit(x, y);

// La fonction qui affiche l'image
function afficheImg()
{

document.getElementById("papillon").src= ("papillon.jpg");
}
afficheImg();

