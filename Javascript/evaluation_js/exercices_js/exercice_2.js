console.log("je suis connecté!...");
// Programme d'une fonction qui affiche une table de multiplication
function tableMultiplication(n){
    document.write("Table de "+n +"<br>"+"<br>")
    for (var i=1;i<=10;i++){
        document.write(i+" x "+n+" = "+(i*n)+"<br>")
    }
}
tableMultiplication(12);