/* 1ère méthode trouvée. JP préfére la 2ème méthode avec la methode .val qui est utilisé exprès pour les formulaire.
$(function(){
  var count = 0; // Initialisation du compteur.
  $("#text").click(function(){
    count++; // on incrémente d'une unité l'objet count à chaque clic.
    $("#counter").html("My current count is:" +count);
  });
});
*/

$(function(){
  $("#bouton").click(function(){
    var result = $("#compteur").val();
    result++;
    $("#compteur").val(result);
  })
})
