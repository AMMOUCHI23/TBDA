var Prenom;
var i=1;
Prenom="Olivier"
while (Prenom!=""){
Prenom=prompt("Saisissez  le prenom N°"+i);
console.log("Le prenom N°"+i+ ": "+ Prenom)
i++;
}
console.log("Vous avez introduit "+(i-2)+" prénom(s)");