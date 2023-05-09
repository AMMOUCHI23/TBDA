// Avoir un nombre au hasard entre 0 et 100
var nombre = Math.random().toFixed(2) * 100;
nombre = Math.floor(nombre);
/* A voir un evenement avec un click sur le button vérifier
ici j'ai utilisé la methode querySelector, on peut utiliser aussi les deux methodes
addEventListener et getElementById */
document.querySelector("#label1").onclick = verif();
function verif() {
    var nombreIntroduit = document.getElementById("textBox1").value;

    if (nombreIntroduit < nombre) {
        alert("Trop petit");
    }
    if (nombreIntroduit> nombre) {
        alert("Trop grand")
    }

    if (nombreIntroduit == nombre) {
        alert("Bravo! vous avez trouvé le nombre magique");
    }
}