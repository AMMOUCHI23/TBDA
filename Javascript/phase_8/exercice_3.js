var Nombre, Somme;
Nombre=1;
i=0;
Somme=0;
while (Nombre!=0){
    Nombre=prompt("Intoduire un nombre entier");
    // Convertir le nombre en Number
    Nombre=parseInt(Nombre);
    Somme+=Nombre;
    i++;
}
document.write("La moyenne des nombres saisis est: "+(Somme/(i-1)));