console.log("Je suis connecté!...");
// Programme de total d'une commande
var PU = parseInt(prompt("Introduit le prix unitaire"));
var QTECOM = parseInt(prompt("Introduit la quantité à commander"));
var TOT = (PU * QTECOM);
var remise = 0;
var Port;
if (TOT >= 100 && TOT <= 200) {
    remise = (5 * TOT / 100);
    document.write("remise de 5% " + (-remise)+" euros"+"<br>");

}
else if (TOT > 200) {
    remise = (10 * TOT / 100);
    document.write("remise de 10% " + (-remise)+" euros"+"<br>");

}
else {
    document.write("pas de remise");
}
if ((TOT - remise) <= 500) {

    Port = ((TOT - remise) * 2 / 100);
}
else {
    Port = 0;
}
document.write("Le total aprés remise est: " + (TOT - remise)+" euros"+"<br>");
document.write("Les frais du port: "+Port+" euros"+"<br>");
document.write("Total à payer est : "+ ((TOT-remise)+Port)+" euros"+"<br>");