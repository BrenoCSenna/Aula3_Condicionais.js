var elements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];
const caractere = "c";
var consoante = true;
for (var i = 0; i < elements.length; i++) {
    if (elements[i] == caractere) {
        if (i < 9) {
            console.log("Número");
            consoante = false;
        }
        else if (i < 14) {
            console.log("Vogal maiúscula");
            consoante = false;
        }
        else if (i < elements.length) {
            console.log("Vogal minúscula");
            consoante = false;
        }
    }
}
if (consoante = true) {
    console.log("Consoante");
}