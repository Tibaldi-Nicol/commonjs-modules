//1. Crea una funzione che accetta tre parametri: hobbyOne, hobbyTwo, hobbyThree. La funzione dovrebbe restituire  un array di stringhe contenenti gli hobby.
//2. Esporta la funzione dal file.

function creaHobby( hobbyOne, hobbyTwo, hobbyThree){
    return[
        hobbyOne,
        hobbyTwo,
        hobbyThree
    ]
}

//questa serve per esportare la funzione in modo che possa essere utilizzata in altri file
//per esempio in people.js  
module.exports = creaHobby;