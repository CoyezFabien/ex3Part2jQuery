// Afficher ou masquer le paragraphe text au clic des boutons.
$(function() {
$('#show').click(function()
{
    $('#texte').show();
})
// il ne faut pas mettre le points virgule entre les fonctions sinon sa ne fonctionne pas mais demander pourquoi?
$('#hide').click(function()
{
    $('#texte').hide();
});
});