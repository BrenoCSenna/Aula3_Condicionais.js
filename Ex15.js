const primeiroNome = "Mario";
const sobrenome = "";
const apelido = "";

if (apelido) {
    console.log(apelido);
    return;
}
else {
    if (sobrenome) {
        if (primeiroNome) {
            console.log(primeiroNome + " " + sobrenome);
            return;
        }
    }
    else {
        if (primeiroNome) {
            console.log(primeiroNome);
            return;
        }
        else {
            console.log("Preencha ao menos o primeiro nome");
        }
    }
}