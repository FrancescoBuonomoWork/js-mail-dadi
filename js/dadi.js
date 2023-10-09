const appDOMElement = document.getElementById("app");
const h1DOMElement = document.createElement("h1");


const userNumber = Math.floor(Math.random() * (6 - 1) + 1);
console.log(userNumber);

const computerNumber = Math.floor(Math.random() * (6 - 1) + 1);
console.log(computerNumber);
let message;
if (userNumber > computerNumber) {
    console.log("hai vinto");
    message = "Hai vinto";
} else if (userNumber === computerNumber) {
    message = "Avete paregiato";
}
 else {
    console.log("hai perso");
    message = "Hai perso";
}
h1DOMElement.innerHTML = message;
appDOMElement.append(h1DOMElement);

