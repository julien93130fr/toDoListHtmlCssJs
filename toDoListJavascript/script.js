
// tester avec une alert pour voir si le script est bien relier 
// alert("voir si le message s' affiche")

var addToDoButton = document.getElementById("addToDo")
var toDoContainer = document.getElementById("toDoContainer")
var inputField = document.getElementById("inputField")

addToDoButton.onclick = function () {
    // vérifier si l' input n' est pas vide
    if (inputField.value != ""){
        //si l' input n' est pas vide , créer un paragraphe
       var paragraph = document.createElement('p')
    }
    // valorisé ce paragraphe avec le contenu de l' input 
    paragraph.innerText =  inputField.value;

    // stylisé le paragraphe
    paragraph.classList.add('paragraphe_style')

    //insérer le paragraphe dans l' élément toDoContainer
    toDoContainer.appendChild(paragraph);

    //vidé l ' input quand le paragraphe est ajputé
    inputField.value = "";

    //barré le paragraphe quand on clique dessus
  paragraph.addEventListener('click', function(){
   // alert('vous avez cliquer sur le paragraphe')
   paragraph.classList.add('paragraph_click')
})
    //supprimer la tache quand on double click sur la tache 
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph)
     })

}

