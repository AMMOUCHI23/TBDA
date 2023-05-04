console.log("Connecté !");

console.log("La 2nde zone de texte a pour nom : ");
console.log(document.forms["form1"].elements[1].name)
console.log("La 1ere zone de texte a pour nom : ");
console.log(document.forms["form1"].elements[0].name)
console.log("La 1ère zone de texte a pour valeur : '");
console.log(document.forms["form1"].elements["nom"].value)
console.log("Le bouton Submit a pour identifiant unique : ");
console.log(document.getElementById("idSubForm1").id)
console.log("Le bouton Submit a pour valeur : ");
console.log(document.getElementsByName("subForm1")[0].value)
document.getElementById('txtBox').value = 53;