
var myDate1 = new Date() ;  // Date du jour
var myDate2 = new Date(3600*24*365*40) ;    // Date depuis le 1er janvier 1970
var myDate3 = new Date(2012, 11, 19) ;
var myDate4 = new Date(2012, 9, 19, 10, 33, 12);
var myDate5 = new Date("Jan 1, 2000 00:00:00");
console.log("new Date() : "+ myDate1.toLocaleString()); 
console.log('new Date(3600*24*365*40) : ' + myDate2.toLocaleString());
console.log('new Date(2012, 9, 19) : ' + myDate3.toLocaleString());
console.log('new Date(2012, 9, 19, 10, 33, 12) : ' + myDate4.toLocaleString());
console.log('new Date("Jan 1, 2000 00:00:00") : ' + myDate5.toLocaleString());
console.log("");
var annee = 1900 + myDate1.getYear();
var mois  = myDate1.getMonth() + 1;
var jour  = myDate1.getDate();
console.log('date du jour : ' + jour + "/" + mois + "/" + annee);
var tCarnet = [];
tCarnet[2] = "Philippe"; 
document.write(" la longeur du tableau est "+tCarnet.length )