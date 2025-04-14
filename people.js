//3 - people.js
//1. Importa la tua funzione da names.js
//2. Importa la tua funzione da hobbies.js
//3. Crea una funzione che non ha parametri. La funzione dovrebbe restituire un oggetto con due proprietà: fullName ed hobbies. All'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto.






// Importa la tua funzione da names.js
const creaNome = require('./name.js');
// Importa la tua funzione da hobbies.js
const creaHobby = require('./hobbies.js');

//creo la funzione senza paramerri

function creaPersona() {

    return{

        fullName: creaNome('giovanni,', 'rossi'), //chiamo la funzione creaNome e gli passo i parametri
        hobbies: creaHobby('sport', 'musica', 'lettura') //chiamo la funzione creaHobby e gli passo i parametri

        
    }


}

//esporto la funzione in modo che possa essere utilizzata in altri file
module.exports = creaPersona; //esporto la funzione

