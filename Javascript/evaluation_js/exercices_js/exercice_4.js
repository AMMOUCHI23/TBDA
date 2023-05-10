console.log("Je suis connecté!...");
// Programme de total d'une commande
var PU= parseInt(prompt("Introduit le prix unitaire"));
var QTECOM=parseInt(prompt("Introduit la quantité à commander"));
var TOT= ( PU*QTECOM);
var remise;
if (TOT>=100 && TOT<=200){
    remise=5*TOT/100
    document.write("remise de 5% "+(-remise))

}
else if (TOT>200){
    remise=10*TOT/100
    document.write("remise de 10% "+(-remise))

}
else{
    document.write("pas de remise")
}