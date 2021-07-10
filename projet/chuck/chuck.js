"use strict";
/*Le mode strict élimine quelques erreurs silencieuses de JavaScript en les changeant en erreurs explicites .*/

 

function changer() {
    let reponseAleatoire = phrase[(Math.floor(Math.random() * (phrase.length-1)))];
    document.getElementById('change').innerHTML =  reponseAleatoire;
    }
/*pour que je puisse changer ma phrase à chaque clique de ma souris je vais devoir créer une fonction (function).
cette dernière ira simplement piocher aléatoirement une phrase pré écrite dans un tableau décris plus bas
il y a donc 2 ligne à faire, la premiere consite à parcourir le tableau nomé phrase et choisir une au hasard(random)  
et la seconde intervenir sur le champs changer à l'aide d'un getelementbyid  */ 


let phrase = [
"Tu ne resistes pas à Chuck c est Chuck qui resiste à la resistance",
"Chuck Norris peut faire du feu en frottant deux glaçons.",
"Tous les soirs, les cauchemars font le même Chuck Norris.",
"Chuck Norris est la raison pour laquelle Charlie se cache.",
"Jésus Christ est né en 2020 avant Chuck Norris.",
"Un jour, Chuck Norris a perdu son alliance. Depuis, c 'est le bordel dans les Terres du Milieu.",
"Une larme de Chuck Norris peut guérir du cancer, malheureusement Chuck Norris ne pleure pas.",
"Un aigle peut lire un journal à 1400 mètres de distance. Chuck Norris peut tourner la page.",
"Chuck Norris est mort depuis 10 ans, mais la Mort n 'a pas encore trouvé le courage d 'aller lui dire.",
] 
/*pour pouvoir changer de phrase au clic du bouton je dois au préalable les stocker quelquess par. 
ici je vais les stocker dans un tableau "[]" que j'ai nomé phrase. il est important de souligner 
chaque fois que je termine une phrase je mets une virgule pour dire que je passe à la suivant.
une fois que tout mes phrases sont rentrer je ferme mon tableau "]".*/
