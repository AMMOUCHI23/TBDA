var Nombre1, Nombre2, Operateur;
Nombre1=prompt("Introduire le premier nombre");
// Convertir Nombre1 en Number
Nombre1=parseInt(Nombre1);
Nombre2=prompt("Introduire le deuxieme nombre");
// Convertir Nombre2 en Number
Nombre2=parseInt(Nombre2);
Operateur=prompt("introduire un operateur");
switch (Operateur){
    case "+" :
        document.write ("La somme des deux nombre est: "+(Nombre1 + Nombre2));
        break;
    case "-":
        document.write ("Le résultat de la soustraction des deux nombres est: "+(Nombre1 - Nombre2));
        break;
    case "*":
        document.write ("Le résultat du produit des deux nombres est: "+(Nombre1 * Nombre2));
        break;
    case "/":
        if ( Nombre2==0){
            document.write("Erreur on peut pas diviser sur 0");
        }
        else
        document.write ("Le résultat de la division des deux nombres est: "+(Nombre1 / Nombre2));
        
        break;
    default:
        document.write("Erreur L'opérateur introduit n'est pas correcte");
              
}