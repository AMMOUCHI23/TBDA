console.log("Je suis connecté!");
var societe = document.getElementById("societe").value;
var contact = document.getElementById("contact").value;
var code = document.getElementById("code").value;
var ville = document.getElementById("ville").value;
var email = document.getElementById("email").value;
var choix= document.getElementById("choix").value;
var projet= document.getElementById("projet").value;
// Fonction qui recupere l'élément choisi dans select pour le mettre dans la zone texte
function change(){
var selectElmt = document.getElementById("choix");
var valeurselectionnee = selectElmt.options[selectElmt.selectedIndex].value;
var textselectionne = selectElmt.options[selectElmt.selectedIndex].text;
if(textselectionne=="Choisissez"){
    document.getElementById("projet").value=""
}else{
document.getElementById("projet").value=textselectionne;
}
}
// Fonction qui teste le formulaire avant de lenvoyer
document.getElementById("forme1").addEventListener("submit", function (f) {
    f.preventDefault();
    
    
    if (societe == "") {
        alert("veuillez remplire le champs societé");

    }
    if (contact == "") {
        alert("veuillez renseigner le nom de la personne à contacter s.vp");
    }
    if (code =="" ) {
        alert("entrer le code postale à cinq chiffres s.v.p");
    }

    if (ville == "") {

        alert("veuillez renseigner le nom de la ville s.v.p");

    }
    if (email == "") {
        alert("veuillez renseigner le mail s.v.p");

    }
    else{
        alert("Le formulaire été bien envoyé merci :)")
    }


});

/*
switch (value){
    case  (societe==""):
    {
        alert("veuillez remplire le champs societé");
        break;
    }
    case  (contact==""):
        {
            alert("veuillez remplire le champs societé");
            break;
        }
    case  (code==""):
            {
                alert("veuillez remplire le champs societé");
                break;
            }
}
});*/