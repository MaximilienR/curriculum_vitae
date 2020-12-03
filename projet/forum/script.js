 

let nouvelle_fenetre;

function afficherPourInscrire() {
    nouvelle_fenetre = window.open('inscrire.html', 'new', 'width=250 , height=200, toolbar=no, location=no, directories=no, status=no, menubar=no, scroolbars=no, resizable=no, top=300, left=400');
    console.log(nouvelle_fenetre);
    console.log('le type est '+typeof(nouvelle_fenetre));
}
window.addEventListener('load', function () {
    "use strict";
    document.getElementById('btnOuvrirFor').addEventListener('click',afficherPourInscrire);
 
     
}); 

let nouvelle_porte;

function acesOkForm() {
    nouvelle_porte = window.open('forum.html') ;
    console.log(nouvelle_porte );
    console.log('le type est '+typeof(nouvelle_porte));
}
window.addEventListener('load', function () {
    "use strict";
    document.getElementById('btn_valider').addEventListener('click',acesOkForm);
 
     
}); 

function oublie(ErrorPLace)  {
    let nom=document.getElementById("tbx_login");   
        if (nom.value == "")                                  
        { 
            alert("veuillez remplir le champs"); 
            ErrorPLace.focus();
        }  
      }
       /*--heure---*/
      function refresh(){
          var t = 1000; // rafraîchissement en millisecondes
          setTimeout('showDate()',t)
      }
      
      function showDate() {
          var date = new Date()
          var h = date.getHours();
          var m = date.getMinutes();
          var s = date.getSeconds();
          if( h < 10 ){ h = '0' + h; }
          if( m < 10 ){ m = '0' + m; }
          if( s < 10 ){ s = '0' + s; }
          var time = h + ':' + m + ':' + s
          document.getElementById('horloge').innerHTML = time;
          refresh();
       }
   /*---connection accueil---- */

        var total_erreur=0;
function Check() {
    var tabc=Check.arguments; var ok=0;
    var tab="                   azertyuiopqsdfghjklmwxcvbnAZERTYUIOPQSDFGHJKLMWXCVBN0123456789_$&#@";
    for (var no=0;no<tabc.length;no++) {
        checksum=tabc[no];
        // table des caracters autorises
        var login=document.forms["flog"].elements["login"].value;
        var password=document.forms["flog"].elements["password"].value;
        var nblog=login.length;
        var nbpass=password.length;
        var sum=1;
        var n=Math.max(nblog,nbpass)
        for (var i=0;i<n;i++) {
            var index1=tab.indexOf(login.substring(i,i+1))+10;
            var index2=tab.indexOf(password.substring(i,i+1))+10;
            sum=sum+(index1*n*(i+1))*(index2*(i+1)*(i+1));
        }
        
            
        // calcul de la checksum. La fonction est modifiable !
        if (sum==checksum) {window.location="forum.html"; ok=1; no=100;}
        // test de la checksum
    }
    if (ok==0) {
        total_erreur++; 
        alert("Mauvais login ou mot de passe");
         
        }
    
}
function Verifie() {
    Check(3498440,43672)
}

 /*-----------confirme mot de passz---------------*/
 function validation(f) {
  if (f.mdp1.value == '' || f.mdp2.value == ''|| f.m0.value == ''|| f.m1.value == ''|| f.m2.value == '') {
    alert('Tous les champs ne sont pas remplis');
    f.mdp1.focus();
    return false;
    }
  else if (f.mdp1.value != f.mdp2.value) {
    alert('Ce ne sont pas les mêmes mots de passe!');
    f.mdp1.focus();
    return false;
    }
  else if (f.mdp1.value == f.mdp2.value) {
    return true;
    }
  else {
    f.mdp1.focus();
    return false;
    }
  }

  function acesOkConnect() {
    nouvelle_porte = window.open('forum.html') ;
    console.log(nouvelle_porte );
    console.log('le type est '+typeof(nouvelle_porte));
}
window.addEventListener('load', function () {
    "use strict";
    document.getElementById('continue').addEventListener('click',acesOkForm);
 
     
}); 

function acesOkConnect() {
    nouvelle_porte = window.open('forum.html') ;
    console.log(nouvelle_porte );
    console.log('le type est '+typeof(nouvelle_porte));
}
window.addEventListener('load', function () {
    "use strict";
    document.getElementById('btnActionDeroulant').addEventListener('click',acesOkForm);
 
     
}); 