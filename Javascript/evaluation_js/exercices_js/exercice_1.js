console.log("Je suis connecté!");
//  Programme qui calcule le nombre de jeunes, de moyens et de vieux
var age = 1;
var nombreJeune = 0;
var nombremoyen = 0;
var nombrevieux = 0;
while (age => 0) {
    age = parseInt(prompt("Itroduit àge "));
    if (age < 20) {
        nombreJeune++;
    }
    else if ((age => 20) && (age <= 40)) {
        nombremoyen++
    }
    else if ((age > 40) && (age < 100)) {
        nombrevieux++;
    }
    else {
        nombrevieux++;
        break;
    }
}
document.write("Le nombre des jeunes est " + nombreJeune + "<br>");
document.write("Le nombre des moyens est " + nombremoyen + "<br>");
document.write("Le nombre des vieux est " + nombrevieux + "<br>");