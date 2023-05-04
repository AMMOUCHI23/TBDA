// La fonction qui calcule le produit de deux nombres

function produit(x, y){
  x=prompt("Entrez un nombre");
  y=prompt("Entrez un multiplicateur");
  document.write("le produis de "+x+" x "+ y+" est égale à " +(x*y)+"<br>") 
}
produit();


// La fonction qui affiche une image
function afficheImg(image)
{
var image = document.createElement("img");
image.src="papillon.jpg"
document.body.appendChild(image);
}
afficheImg();
