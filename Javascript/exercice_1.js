// La fonction qui calcule le produit de deux nombres
/*
function produit(x, y){
  x=prompt("Entrez un nombre");
  y=prompt("Entrez un multiplicateur");
  document.write("le produis de "+x+" x "+ y+" est égale à " +(x*y)+"<br>") 
}
produit();

// La fonction qui afficher une image
function afficheImg(image)
{
var image = document.createElement("img");
image.src="papillon.jpg"
document.body.appendChild(image);
}
afficheImg();

*/
n=prompt("introduire la taille du tableau")
var myTableau = new Array(n);
document.write("la taille du tableau est "+myTableau.length+"<br>")
for (var i=0;i<n;i++){
  myTableau[i]=prompt("introduit les element du tableau")
}
document.write("les element du tableau sont :"+"<br>")
for (var i=0;i<n;i++){
  document.write(myTableau[i]+"  ");
}