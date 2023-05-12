console.log("Je suis connecté  :)");
document.getElementById("form2").addEventListener("submit", function (f) {
    f.preventDefault();
    var nom = document.getElementById("nom").value;
    var prenom = document.getElementById("prenom").value;
    var sexe = document.getElementById("sexe").value;
    var naissance = document.getElementById("naissance").value;
    var code = document.getElementById("code").value;
    var email = document.getElementById("email").value;
    var sujet = document.getElementById("sujet").value;
    var accepter = document.getElementById("accepter").value;
    var nom_inv = "Erreur, merci de renseigner votre nom "
    var prenom_inv = "Erreur, merci de renseigner votre prenom "
    var sexe_inv = "Erreur, merci de renseigner votre sexe "
    var naissance_inv = "Erreur, merci de renseigner votre date de naissance "
    var code_inv = "Erreur, merci de renseigner votre code postale "
    var email_inv = "Erreur, merci de renseigner votre email "
    var sujet_inv = "Erreur, merci de choisir un sujet "
    var accepter_inv = "MErreur, mrci de cocher la case accepter"

    if (nom == "") {
        document.getElementById("nom_inv").innerHTML = nom_inv;
    }
    if (prenom == "") {
        document.getElementById("prenom_inv").innerHTML = prenom_inv;

    }
    if (sexe == "") {
        document.getElementById("sexe_inv").innerHTML = sexe_inv;

    }
    if (naissance == "") {
        document.getElementById("naissance_inv").innerHTML = naissance_inv;

    }
    //let codeRegExp = new RegExp([0-9]{5});
    if (code==""){
        document.getElementById("code_inv").innerHTML=code_inv;
    }
    if (email==""){
        document.getElementById("email_inv").innerHTML=email_inv;
    } if (sujet=="Veuillez sélectionner un sujet"){
        document.getElementById("sujet_inv").innerHTML=sujet_inv;
    }
    if (accepter==""){
        document.getElementById("accepter_inv").innerHTML=accepter_inv;
    }

});