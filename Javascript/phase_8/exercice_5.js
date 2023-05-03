var j=0;
var MyVar=prompt("Introduire une chaine de carectere");
// Transformer la chaine de caractére en miniscule
MyVar=MyVar.toLowerCase();
for (var i=0;i<(MyVar.length);i++ ){
    if (MyVar.substring(i,i+1)=="a"||MyVar.substring(i,i+1)=="e"||MyVar.substring(i,i+1)=="i"||MyVar.substring(i,i+1)=="o"||MyVar.substring(i,i+1)=="u"||MyVar.substring(i,i+1)=="y"){
        j++;  
    }
    
}
document.write(" le nombre de voyelles dans la chaine de caractere introduit est: "+j);