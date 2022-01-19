let nome = prompt("Inserisci il tuo nome");
let cognome = prompt("Inserisci il tuo cognome");
let colore = prompt("Inserisci il tuo colore preferito");

let numero= "21";

document.getElementById("password").innerHTML = ("La password generata è " + nome + cognome + colore + numero);



//soluzione alternativa con il simbolo di backtick

/* document.getElementById("password").innerHTML = (`La password generata è ${nome}${cognome}${colore}${numero}`);*/
