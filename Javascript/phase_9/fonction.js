function ecrire(texte)
{
    document.write(texte);
}
ecrire("Bonjour");
function maFonction() 
    {
     var plop1 = 123;       
       return plop1;
    }
document.write(maFonction() );

function maFonction2() 
{
   plop2 = 456;     
}
document.write(maFonction2() )
plop1 = maFonction();