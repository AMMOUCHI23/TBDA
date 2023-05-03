var Nombre;
Nombre=prompt("introduire un nombre");
Nombre= parseInt(Nombre)
document.write("Les nombres inferieurs à "+Nombre+" sont: "+"<br>");
for (var i=Nombre-1;i>=0;i--){
    document.write(i+", ");
}