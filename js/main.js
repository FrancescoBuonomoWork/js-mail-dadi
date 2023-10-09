// console.log("funziona");
// crea una lista(ARRAY) di email
const arrayEmail = ["antonio@gmail.com", "maria@gmail.com","rosa@gmail.com", "luca@gmail.com"];
console.log(arrayEmail);
// chiedi all'utente la sua email (PROMPT)

const userEmail = prompt("Inserisci la tua email");
// seleziona in modo separato ogni elementro che fa parte della lista
for (let i = 0; i < arrayEmail.length; i++) {

    const currentEmail = arrayEmail[i];
    console.log(i,currentEmail);
    if (userEmail === currentEmail) {
        let message = "l'email è valida";
        console.log(message);
    } 
    else {
        message = "l'email non è valida";
        console.log(message);
    }
}
// verfica che l' email inserita dall'utente sia nella lista

//     - stampa un messaggio appropriato per l'esito dell'operazione di verifica
//         - SE l'email è presente nella lista(condizione vera) stampiamo un esito positivo
//         ALTRIMENTI l'email non è nella lista stampiamo un esito negativo
