var max= 100, solution,rep, reponses="";

function initjeu(){
var oldtxt=document.getElementById("tete").querySelector("p");
var newtxt =document.createElement("p");
var intxt =document.createTextNode("trouvez le nombre entre 0 et"+ max);
newtxt.appendChild(intxt);
document.getElementById("tete").replaceChild(newtxt,oldtxt);
}

//

function newligne(txt) {
reponses = txt + ". " ;
var lignRep= document.createElement("p");
var blocRep=document.createTextNode(reponses);
    lignRep.appendChild(blocRep);
document.getElementById("repLst").appendChild(lignRep);}


function play(reponse)  {
var texte;
if (reponse >max || reponse<0) {
texte ="impossible" +reponse+"est hors des limites";
alert("ton choix est hors limite");
} else{
        if (reponse>solution){texte=" Non" + reponse +" est trop grand";} 
        if(reponse<solution){texte ="non"+ reponse +" est trop petit";}
        if(reponse==solution){
                texte=("c est gagne! ");
                max += 100;
                solution=Math.floor(Math.random() * max);
                initjeu();
        }
} 
newligne(texte);
}



function newTry() {
if (solution==undefined){
solution=Math.floor(Math.random()* max);
}
rep =undefined;
while(typeof(rep ) !="number"|| isNaN(rep)){                   
rep= parseInt(prompt("quelle est ta proposition?.saisir un nombre"));
}
play(rep);
}
initjeu();
       
