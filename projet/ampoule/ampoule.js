function change()
{
 a = document.getElementById("hs").getAttribute("src");
 if (a=='AmpouleHS.GIF') {
              document.getElementById("hs").src='AmpouleOK.GIF';
          }

          else {
         document.getElementById("hs").src='AmpouleHS.GIF';
          }

}