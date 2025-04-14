//1. Crea una funzione che accetta due parametri: firstName, lastName. La funzione dovrebbe restituire un oggetto con le proprietà firstName e lastName.
//2. Esporta la funzione dal file.

function creaNome(firstName, lastName){
    return{
        firstName: Mario,
        lastName: Rossi
    }
}
//questa serve per esportare la funzione in modo che possa essere utilizzata in altri file
//per esempio in people.js
module.exports = creaNome;