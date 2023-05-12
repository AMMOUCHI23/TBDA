console.log("Je suis connecté!");
document.getElementById("forme1").addEventListener("submit", function (f) {
    f.preventDefault();
    var societe = document.getElementById("societe").value;
    var contact = document.getElementById("contact").value;
    var code = document.getElementById("code").value;
    var ville = document.getElementById("ville").value;
    var email = document.getElementById("email").value;
    var choix= document.getElementById("choix").value;
    var projet= document.getElementById("projet").value;
    //var choix= selectBox[selectBox.selecteIndex].value;
    if (choix=="Choisissez"){
        projet="";
    
    }else{
        projet=choix;
    }
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