n=prompt("introduire la taille du tableau")
var myTableau = new Array(n);
for (var i=0;i<n;i++){
  myTableau[i]=prompt("introduit les element N° "+i+ " du tableau")
}
document.write("Les élements du tableau sont :"+"<br>")
for (var i=0;i<n;i++){
  document.write(myTableau[i]+"  ");
}
