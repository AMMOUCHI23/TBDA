function strtok(str1,str2,n){
    var mots=str1.split(str2)
    return document.write (mots[n]);  
}
str1 = "robert ;dupont ;amiens ;80000" 
strtok(str1,";",0);