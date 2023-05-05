//Exercice Tableau
var Tab=[];
var Valeur=1;
var Somme=0
while (Valeur!=0){
    Valeur=prompt("introduisez des valeurs numériques, Pour arreter la saisie entrer 0");
    Valeur=parseInt(Valeur);
    Tab.push(Valeur);
    
}
// Supprimer le dernier element (0) du tableeau
Tab.pop()
document.write("Les valeurs saisies sont: ")
for(var i=0;i<Tab.length;i++){
    Somme=Somme+Tab[i];
    document.write(Tab[i]+" ");
    
}
document.write("<br>"+"Le nombre de valeurs saisies est: "+ Tab.length+"<br>")
document.write("La somme des valeurs saisies est: "+ Somme +"<br>")
document.write("La moyennes des valeurs saisies est: "+ (Somme/Tab.length).toFixed(2)+"<br>")
