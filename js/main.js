// console.log("funziona");
// crea una lista(ARRAY) di email
const pDOMElement = document.createElement("p");
console.log(pDOMElement);

const arrayEmail = ["antonio@gmail.com", "maria@gmail.com","rosa@gmail.com", "luca@gmail.com"];
console.log(arrayEmail);
// chiedi all'utente la sua email (PROMPT)

const userEmail = prompt("Inserisci la tua email");
// seleziona in modo separato ogni elementro che fa parte della lista
let emailFounded = false;
for (let i = 0; i < arrayEmail.length; i++) {

    const currentEmail = arrayEmail[i];
    // console.log(i,currentEmail);
    if (userEmail === currentEmail) {
        emailFounded = true;
        // let message = "l'email è valida";
       
    } 
    
}
if (emailFounded === true ) {
    let message = "l'email è valida";
    console.log(message);
    pDOMElement.innerHTML = message;
    console.log(pDOMElement.innerHTML)

} else {
    message = "l'email non è valida";
    console.log(message);
    pDOMElement.innerHTML = message;
    console.log(pDOMElement.innerHTML)
}
// verfica che l' email inserita dall'utente sia nella lista

//     - stampa un messaggio appropriato per l'esito dell'operazione di verifica
//         - SE l'email è presente nella lista(condizione vera) stampiamo un esito positivo
//         ALTRIMENTI l'email non è nella lista stampiamo un esito negativo
