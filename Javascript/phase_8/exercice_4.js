var Nombre, N; 
Nombre= prompt("Introduire un nombre");
Nombre=parseInt(Nombre);
N=prompt("Introduire le N premiers multiples");
N=parseInt(N);
for(var i=1;i<=N;i++)
{
document.write(i+" * "+Nombre+" = "+(Nombre*i)+"<br>");
}