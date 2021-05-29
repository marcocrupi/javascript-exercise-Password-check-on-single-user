var database = [
    {
        username: "andrei",
        password: "supersecret"
    }
];

var newsFeed = [
    {
        username: "Bobby",
        timeline: "So tired from all that learning"
    },
    {
        username: "Sally",
        timeline: "Javascript is so cool"
    }
];

// Inserimento Username e Password

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

// Verifica delle credenziali

function signIn(user,pass) {
    if (user === database[0].username && pass === database[0].password) {
        console.log(newsFeed);
    }
    else {
        alert("Sorry, wrong username and password");
    }
}

signIn(userNamePrompt,passwordPrompt);
// Ho chiamato la funzione signIn, che accetta due parametri "user" e "password", così quando chiamo la funzione
// associo i due argomenti "userNamePrompt" e "passwordPrompt" per confrontarli con quei parametri.
// In questo modo è possibile verificare quello che digitiamo.